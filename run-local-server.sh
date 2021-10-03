#!/bin/bash
set -eu
wget -c -O selenium-server-standalone.jar  https://selenium-release.storage.googleapis.com/3.141/selenium-server-standalone-3.141.59.jar
java -jar selenium-server-standalone.jar $*
