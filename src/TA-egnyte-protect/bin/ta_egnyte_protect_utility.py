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
    return response


def collect_issues(helper, access_token, data_url):
    headers = {"Authorization": "Bearer " + str(access_token)}
    response_data = helper.send_http_request(data_url, "GET", parameters=None, payload=None,
                                          headers=headers, cookies=None, verify=True, cert=None,
                                          timeout=None, use_proxy=False)
    if response_data.status_code == 200:
        return response_data.json()
    if response_data.status_code == 401:
        return response_data.status_code
    else:
        return response_data.json()