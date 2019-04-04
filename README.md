# Splunk Protect Integration

This repo is for integrating Egnyte Protect with Splunk. There are mainly two modules in Splunk Integration.

- Egnyte Protect Add-on For Splunk:
    This module would be used to configure, collect and ingest events from Egnyte Protect APIs into Splunk
- Egnyte Protect App For Splunk:
    This module would host all the default visualizations based on the data which would be collected part of Splunk.

# How to install & setup Splunk?
- [OS specific Installation Process](https://docs.splunk.com/Documentation/Splunk/7.2.5/SearchTutorial/InstallSplunk)
- [Setting up Splunk in Docker](https://docs.splunk.com/Documentation/Splunk/7.2.4/Installation/DeployandrunSplunkEnterpriseinsideDockercontainers)

# App Specification Document (For Installing & Setting up Apps in Splunk)
- [Document](https://docs.google.com/document/d/1QqOPITxa1-U_XQG4UD9-kreOaSKjpKZckm-Azh6xTvY/edit?usp=sharing)

# File Structure of both the Apps
- Egnyte App for Splunk
   ```
   $ tree
.
├── README.md
├── default
│   ├── app.conf --> [ Default App Related details like App Version]
│   ├── data
│   │   └── ui
│   │       ├── nav --> [ Menu Optionss]
│   │       │   └── default.xml
│   │       └── views --> [ Dashboard XML files]
│   │           ├── egnyte-incident_detail.xml
│   │           └── egnyte-summary.xml
│   └── macros.conf --> [For collecting events from index]
├── metadata --> [ For Access rights of the App]
│   └── default.meta
└── static --> [Static Assets for Branding]
    ├── appIcon.png
    ├── appIconAlt.png
    ├── appIconAlt_2x.png
    ├── appIcon_2x.png
    ├── appLogo.png
    └── appLogo_2x.png
    ``` 
