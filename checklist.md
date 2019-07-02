In addon:
- configure new input for US/EU zone (only one input at a time should be configured)
- check Interval field (value should be greater or equal 600)
- after configuration new events should be visible on Search tab
- we can remove input previously configured

In app:
- after initail configuration Incidents Summary tab should show current state of coresponding Protect instance (total number of issues, number of issues with particular severities)
- all charts should look decently - reflecting actual data, proper colors (especially colors for severities should be equal for summary row and severities chart)
- time filter works (it's splunk component so only general checks)
- charts are clickable so after an action some filters should be applied on the dashboard or we should be redirected to Incidetn Information tab or Search tab with proper filter set.
- when new issues arrive in Protect they should be fetch by splunk on the next interval