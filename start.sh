docker run -d -p 8000:8000 --volume "$PWD/mount_optSplunkEtcApps:/opt/splunk/etc/apps" -e 'SPLUNK_START_ARGS=--accept-license' -e 'SPLUNK_PASSWORD=admin123' splunk/splunk:latest start 
PSOUT=`docker ps | grep splunk`
ID=`echo $PSOUT | cut -d ' ' -f 1`
echo '#########################################################################'
echo '#########################################################################'
echo "http://localhost:8000/"
echo "to kill it:"
echo "docker kill $ID"
echo '#########################################################################'
echo '#########################################################################'

docker logs -f $ID 