#!/bin/bash

readonly SOURCE_FOLDER=$(dirname $(readlink -f ${0}))
readonly VERSION=$(git describe --tags --always --dirty)

echo "version is ${VERSION}"

readonly NOW=$(date +"%Y-%m-%d")
echo "NOW is ${NOW}"

sed -i -e "s|{buildVersion}|${VERSION}|g" ./src/app/build.environment.ts
sed -i -e "s|{buildTime}|${NOW}|g" ./src/app/build.environment.ts
