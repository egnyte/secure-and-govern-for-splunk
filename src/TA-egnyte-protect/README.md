# OVERVIEW

Egnyte Secure & Govern Add-on For Splunk integrates with Egnyte Secure & Govern platform and ingest events from Egnyte Secure & Govern into Splunk.


# REQUIREMENTS

* Splunk version 7.2.x, 7.3.x, 8.x.x
* This application should be installed on Forwarder in case of cluster.

# Release Notes

## Version: 1.0.4
- Added support of Splunk v8
- Fixed Appcert issue and moved Authorization Code and ClientID to Configuration page

## Version: 1.0.6
- Update Add-on name.

## Version: 1.0.7
- Upgrade for AOB V1.0.4.

## Version: 1.0.8
- Updating `detected` as the default time.

## Version: 1.0.9
- App Version update in Meta

## Version: 1.1.0
- Adding Support for `Detailed` Issues data collection for Add-on.


# RECOMMENDED SYSTEM CONFIGURATION

* Standard Splunk configuration of Forwarder.

# Application Setup

- Go to Egnyte Secure & Govern
- Click on “Create New Input”.
- Egnyte Secure & Govern supports OAuth 2.0. To begin the Authorization process, Click on “Click here to generate token”.  This would open up a new browser window for you to authorize Splunk  to ingest the events.
- It would be asking for your Email ID and Password to connect to Egnyte Account. Click on “Allow” to authorize the Splunk App.
- Upon clicking on “Allow”, it would display a code which we would then have to supply back to the Splunk App. Click on “Copy”.
- Go back to Splunk Add-on configuration page and fill up all the details and then click on “Add”.

# Updating Macro configuration

Egnyte App by default works on ```default``` index. In case during Add-on setup new index have been created then follow below steps to updte
Macro configuration.

- Go to Settings → Advanced Search
- Click on “Search Macros”
- Set App Context to “Egnyte App for Splunk”, The macro name “egnyte_get_index” should be displayed and click on the name of the macro.
- Macro is now in Edit Mode, Update Index value as per the Index created while setting up Add-on input. Click on “Save”.
>The Update to Macro is required only in case the events are pushed into a separate Index.

# Binary File Declaration

* cli-32.exe - This file is part of setuptools and code can be found at https://pypi.org/project/setuptools/
* cli-64.exe - This file is part of setuptools and code can be found at https://pypi.org/project/setuptools/
* gui-64.exe - This file is part of setuptools and code can be found at https://pypi.org/project/setuptools/
* gui-32.exe - This file is part of setuptools and code can be found at https://pypi.org/project/setuptools/
* pvectorc.cpython-37m-x86_64-linux-gnu.so - This file is part of setuptools and code can be found at https://pypi.org/project/cPython/
* gui.exe - This file is part of setuptools and code can be found at https://pypi.org/project/setuptools/


# Support
Customers can file issues by sending emails to : splunk@egnyte.com

