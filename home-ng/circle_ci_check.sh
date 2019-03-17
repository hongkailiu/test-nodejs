#!/bin/bash

if [[ $(echo "${CIRCLECI}" | awk '{print tolower($0)}') != "true" ]]; then
  echo "not circle ci environment"
  exit 1
fi
