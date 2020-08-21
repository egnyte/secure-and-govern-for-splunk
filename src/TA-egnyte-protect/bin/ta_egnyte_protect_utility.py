import requests
def generate_or_refresh_token(helper=None, auth_url=None, clientid=None, client_secret=None, code=None, redirect_uri=None, refresh_token=None):
    if code:
        payload = {"client_id": clientid, "client_secret": client_secret, "grant_type": "authorization_code", 
                  "no_redirect": "true", "code": code}
    else:
        payload = {"client_id": clientid, "client_secret": client_secret, "grant_type": "refresh_token", 
                  "no_redirect": "true", 
                  "refresh_token": refresh_token}
    response = requests.post(url=auth_url, data=payload,verify=True)
    helper.log_error("Generating token and response is there. Details: {}".format(response))
    helper.log_error("Generating token and response is there. Status Code: {}".format(response.status_code))
    helper.log_error("Generating token and response is there. Content: {}".format(response.content))

    return response


def collect_issues(helper, access_token, data_url):
    headers = {"Authorization": "Bearer " + str(access_token)}
    response_data = helper.send_http_request(data_url, "GET", parameters=None, payload=None,
                                          headers=headers, cookies=None, verify=True, cert=None,
                                          timeout=None, use_proxy=False)
    helper.log_error("Collecting data and response is there. Details: {}".format(response_data))
    helper.log_error("Collecting data and response is there. Status Code: {}".format(response_data.status_code))
    helper.log_error("Collecting data and response is there. Content: {}".format(response_data.content))

    if response_data.status_code == 200:
        return response_data.json()
    if response_data.status_code == 401:
        return response_data.status_code
    else:
        return response_data.json()