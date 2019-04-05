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
- **Egnyte App for Splunk**
    - default : All the default configurations of the App.
        - app.conf --> default App configuration file, for example Application version
        - ui-nav --> App Menu Options are defined in default.xml file
        - ui-views --> Default dashboard configurations files are located here.
        - macro.conf --> Creating a macro in the App to allow single point of search in all the dashboard queries.
    - metadata : this folder consists a meta file which drives the App Access rights.
    - static : this folder consists default icons of the App.
- **Egnyte Add-on for Splunk**
    - appserver : All the UI specific assets are generated in this folder.
    - bin : All the binary files(python files) related to API calls are defined in this folder. 
    - default : All the default configurations of the App.
        - app.conf --> default App configuration file, for example Application version
        - inputs.conf --> For storing Add-on input details once it's created
        - props.conf --> All the Field extractions are written in this file.
        - tags.conf --> CIM data model tagging
        - ui-nav --> App Menu Options are defined in default.xml file
        - ui-views --> Default UI to allow user to enter API details.
        - macro.conf --> Creating a macro in the App to allow single point of search in all the dashboard queries.
    - metadata : this folder consists a meta file which drives the App Access rights.
    - static : this folder consists default icons of the App.

# Troubleshooting

- Checking if the events are being indexed after configuring Add-on
    - Click on "Search" in either Egnyte App or Add-on
    - Run below query
        ``` `egnyte_get_index` ```
    > The current configuration would enable Add-on Input to call for the Egnyte API endpoint hit as soon as configurations are saved. it would sometime take few minutes for user to see the events in the index.

- How to check the queries which are running for each panel?
    - On each panel on the bottom right hand side there could be three small icons would be visible once scroll on that panel.
        - Magnifying Glass : It would allow you to open a search window on a seperate screen to see the search which is executing.
        - i icon: It would tell you the performance of that search query. It would depict how much time does this panel take to load against the number of records fetched.

# Package the App

We can create the Package of the Splunk using the Splunk CLi. 

- Egnyte App for Splunk

    ``` $ cd /opt/splunk/bin
        $ ./splunk package app Egnyte_Protect
        ```
- Egnyte Add-on for Splunk

    ```$ cd /opt/splunk/bin
        $ ./splunk package app TA-egnyte-protect
        ```
