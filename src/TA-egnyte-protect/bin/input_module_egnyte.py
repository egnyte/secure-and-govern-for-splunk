# encoding = utf-8
import os
import sys
import time
import datetime
import json
from requests.exceptions import HTTPError
from solnlib.splunkenv import get_splunkd_uri
from solnlib.credentials import (CredentialManager, CredentialNotExistException)
import requests
from ta_egnyte_protect_utility import *
import ta_egnyte_constants as tec
import splunk.rest as rest
APP_NAME = os.path.abspath(__file__).split(os.sep)[-3]

def validate_input(helper, definition):
    interval = float(definition.parameters.get('interval', None))
    if interval < 600:
        helper.log_error("Interval must be at least 600 seconds.")
        raise Exception('Interval must be at least 600 seconds')

def get_checkpoint(helper, stanza_name):
    return helper.get_check_point(stanza_name)

def set_checkpoint(helper, stanza_name, state):
    return helper.save_check_point(stanza_name, state)

def collect_events(helper, ew):
    # getting setup parameters
    input_name = helper.get_input_stanza_names()
    input_stanza = helper.get_input_stanza()
    global_account = helper.get_arg('global_account')
    clientid = input_stanza[input_name]['global_account']['client_id']
    client_secret = input_stanza[input_name]['global_account']['client_secret']
    code = input_stanza[input_name]['global_account']['password']
    stanza_name = list(input_stanza.keys())[0]
    stanza = list(input_stanza.values())[0]
    session_key = helper.context_meta['session_key']
    endpoint = helper.get_arg('endpoint')
    number_of_events = 0
    if endpoint == "US":
        base_url = tec.us_url
    else:
        base_url =tec.europe_url
    auth_url = str(base_url) + "/oauth2/token"
    
    checkpoint = get_checkpoint(helper, stanza_name) or dict()
    # Going to take access/refresh token if it is not available in the checkpoint
    if not checkpoint or str(checkpoint.get("code")) != str(code):
        helper.log_info("Checkpoint is not available or code changed from setup page. Hence requesting new access token.")
        state = get_checkpoint(helper, stanza_name) or dict()
        try:
            response = generate_or_refresh_token(helper=helper, auth_url=auth_url, clientid=clientid, client_secret=client_secret, code=code)
            helper.log_info("Checkpoint is not available or code changed from setup page. Hence requested new access token.Details: {}".format(response))
            response = response.json()
            if response.get("error"):
                helper.log_error("Error while getting access/refresh token error: {} error_description:{}".format(response.get("error", ""), response.get("error_description", "")))
                helper.log_error("Please generate new code and update the input with new code.")
                postargs = {
                        'severity': "error",
                        'name': APP_NAME,
                        'value': "Egnyte Add-on: Please generate new code and update the input with new code."
                }
                rest.simpleRequest('/services/messages',
                                session_key, postargs=postargs)
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
    final_modifiedAfter = ""
    if checkpoint.get("modifiedAfter"):
        data_url = str(base_url) + "/api/v1/issueupdates?modifiedAfter=" + str(checkpoint.get("modifiedAfter"))
    else:  
        data_url = str(base_url) + "/api/v1/issueupdates"
    data = {}
    modifiedAfter_done = True
    while modifiedAfter_done:
        try:
            # collecting issues from the Egnyte server
            data = collect_issues(helper, checkpoint.get('access_token'), data_url)
        except Exception as e:
            raise e
        # retrying to get new access token if token is expired
        if data == 401:
            refresh_token = checkpoint.get('refresh_token')
            try:
                response = generate_or_refresh_token(helper=helper, auth_url=auth_url, clientid=clientid, client_secret=client_secret, 
                           refresh_token=refresh_token)
                if response.status_code == 401 or response.status_code == 400:
                    helper.log_error("Please generate new code and update the input with new code.")
                    postargs = {
                        'severity': "error",
                        'name': APP_NAME,
                        'value': "Egnyte Add-on: Please generate new code and update the input with new code."
                    }

                    rest.simpleRequest('/services/messages',
                                    session_key, postargs=postargs)
                    return 0
                if response.status_code == 200:
                    response=response.json()
                    checkpoint["access_token"] = response.get("access_token")
                    checkpoint["refresh_token"] = response.get("refresh_token")
                    set_checkpoint(helper, stanza_name, checkpoint)
            
            except Exception as e:
                raise e
            
            checkpoint = get_checkpoint(helper, stanza_name)
            final_modifiedAfter = final_modifiedAfter or checkpoint.get("modifiedAfter")
            if final_modifiedAfter:
                data_url = str(base_url) + "/api/v1/issueupdates?modifiedAfter=" + str(final_modifiedAfter)
            else:  
                data_url = str(base_url) + "/api/v1/issueupdates"
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
            event_count = len(issues)
            event_time = time.time()
            index = stanza.get("index", "main")
            source = "egnyte"
            sourcetype = "egnyte:protect:incidents"
            for i in issues:
                event = helper.new_event(data=json.dumps(i), time=event_time, host=None, index=index,source=source, sourcetype=sourcetype, done=True,unbroken=True)
                ew.write_event(event)
            number_of_events = number_of_events + event_count
            if data.get("modifiedAfter"):
                final_modifiedAfter = data.get("modifiedAfter")
                helper.log_debug("Collected events till: {}".format(final_modifiedAfter))
                data_url = str(base_url) + "/api/v1/issueupdates?modifiedAfter=" + str(final_modifiedAfter)
        else:
            modifiedAfter_done = False
            helper.log_info("Total indexed events into Splunk: {}".format(number_of_events))

    if final_modifiedAfter:
        checkpoint["modifiedAfter"] = int(final_modifiedAfter)
        set_checkpoint(helper, stanza_name, checkpoint)
