# encoding = utf-8
import os
import sys
import time
import datetime
import json
from requests.exceptions import HTTPError
from solnlib.splunkenv import get_splunkd_uri
from solnlib.credentials import (CredentialManager, CredentialNotExistException)
from urlparse import urlparse
import requests
from ta_egnyte_protect_utility import *

def validate_input(helper, definition):
    code = definition.parameters.get('code', None)
    try:
        if not code:
           raise
    except Exception as e:
        raise Exception("Please enter code in setup page, %s" %str(e))
    pass

def get_checkpoint(helper, stanza_name):
    return helper.get_check_point(stanza_name)

def set_checkpoint(helper, stanza_name, state):
    return helper.save_check_point(stanza_name, state)

def collect_events(helper, ew):
    # getting setup parameters
    stanza = helper.get_input_stanza()
    stanza_name = stanza.keys()[0]
    clientid = helper.get_arg('clientid')
    endpoint = helper.get_arg('endpoint')
    code = helper.get_arg('code')
    if endpoint == "US":
        base_url = "https://usc1-stage-api.egnyteprotect.com"
    else:
        base_url = "https://euw1-api.egnyteprotect.com"
    client_secret = helper.get_arg('client_secret')
    stanza = stanza.values()[0]
    checkpoint = get_checkpoint(helper, stanza_name) or dict()
    # Going to take access/refresh token if it is not available in the checkpoint
    if not checkpoint or str(checkpoint.get("code")) != str(code):
        state = get_checkpoint(helper, stanza_name) or dict()
        auth_url = str(base_url) + "/oauth2/token"
        try:
            response = generate_or_refresh_token(helper=helper, auth_url=auth_url, clientid=clientid, client_secret=client_secret, code=code)
            if response.get("error"):
                helper.log_error("Error while getting access/refresh token error: {} error_description:{}".format(response.get("error", ""), response.get("error_description", "")))
                helper.log_error("Please generate new code and update the input with new code.")
                return
            else:
                state["access_token"] = response.get("access_token")
                state["refresh_token"] = response.get("refresh_token")
                state["code"] = code
                set_checkpoint(helper, stanza_name, state)
        except Exception as e:
            raise e
    checkpoint = get_checkpoint(helper, stanza_name) or dict()
    data_url = ""
    
    if checkpoint.get("cursor"):
        data_url = str(base_url) + "/api/v1/issues?cursor=" + str(checkpoint.get("cursor"))
    else:  
        data_url = str(base_url) + "/api/v1/issues"
    data = {}
    try:
        # collecting issues from the Egnyte server
        data = collect_issues(helper, checkpoint.get('access_token'), data_url)
    except Exception as e:
        raise e
    # retrying to get new access token if token is expired
    if data.get("code", "") == 401:
        refresh_token = checkpoint.get('refresh_token')
        try:
            response = generate_or_refresh_token(helper=helper, auth_url=auth_url, clientid=clientid, client_secret=client_secret, 
                       refresh_token=refresh_token)
            response=response.json()
            retry = 0
            if response.get("code", "") == 401:
                while retry < 4:
                    response = generate_or_refresh_token(helper=helper, auth_url=auth_url, clientid=clientid, client_secret=client_secret, 
                               refresh_token=refresh_token)
                    response=response.json()
                    if response.get("code", "") != 200:
                       retry = retry + 1
                       helper.log_error("Retrying to get the new authorization code.")
                    else:
                       break
            if response.get("code", "") == 401:
                helper.log_error("Please generate new code and update the input with new code.")
                return 0
            checkpoint["access_token"] = response.get("access_token")
            checkpoint["refresh_token"] = response.get("refresh_token")
            set_checkpoint(helper, stanza_name, checkpoint)
        
        except Exception as e:
            raise e
        
        checkpoint = get_checkpoint(helper, stanza_name)
        if checkpoint.get("cursor"):
            data_url = str(base_url) + "/api/v1/issues?cursor=" + str(checkpoint.get("cursor"))
        else:  
            data_url = str(base_url) + "/api/v1/issues"
        try:
            data = collect_issues(helper, checkpoint.get('access_token'), data_url)
            if data.get("error",""):
               helper.log_error("Error while collecting data error: {} error_description:{}".format(response.get("error", ""), response.get("error_description", "")))
               return
        except Exception as e:
            raise e
    # indexing issues into Splunk
    if data.get("issues", ""):
        issues = data.get("issues")
        event_time = time.time()
        index = stanza.get("index", "main")
        source = "egnyte"
        sourcetype = "egnyte:protect:incidents"
        for i in issues:
            event = helper.new_event(data=json.dumps(i), time=event_time, host=None, index=index,source=source, sourcetype=sourcetype, done=True,unbroken=True)
            ew.write_event(event)
        if data.get("cursor"):
            checkpoint["cursor"] = data.get("cursor")
            set_checkpoint(helper, stanza_name, checkpoint)