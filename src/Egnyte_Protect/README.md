# OVERVIEW

Egnyte Protect App For Splunk provides insights to the enterprises for the overall incidents which are identified and raised by Egnyte Protect. It would enable Splunk administrators to track the enterprise-wide incidents identified by Egnyte Protect directly through the Splunk App.

Egnyte Protect is a SaaS content governance solution that is simple to set up and use. It works across multiple repository types, such as Egnyte Connect, OneDrive for Business and Windows File Servers. It shows you where your sensitive information resides and highlights potential exposures of information.

Egnyte Protect delivers content classification, identifies issues, sends realtime alerts, enables remediation.



# REQUIREMENTS

* Egnyte Protect Add-on For Splunk
* Splunk version 6.6.x, 7.x.x 
* This application should be installed on Search Head.

# Release Notes

* Version: 1.0.0

# RECOMMENDED SYSTEM CONFIGURATION

* Standard Splunk configuration of Search Head.

# Test your Install
The main app dashboard can take some time before the data is returned which will populate some of the panels. A good test is to run following query

```search `egnyte_get_index` ```

If you don't see these sourcetypes, run following query to find out if any alert with demisto action was executed.

```index="_internal"```

# Support
Customers can file issues by sending emails to : splunk.support@egnyte.com

