#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail




folder_suffix=local

if [[ $(echo "${CIRCLECI}" | awk '{print tolower($0)}') == "true" ]]; then
  folder_suffix="${CIRCLE_BUILD_NUM}"
fi

if [[ $(echo "${TRAVIS}" | awk '{print tolower($0)}') == "true" ]]; then
  folder_suffix="${TRAVIS_JOB_NUMBER}"
fi

readonly TARGET_FOLDER="/tmp/hongkailiu.github.io-${folder_suffix}/"

rm -rfv "${TARGET_FOLDER}"
git clone https://github.com/hongkailiu/hongkailiu.github.io.git "${TARGET_FOLDER}"
cp -rv ./docs/* "${TARGET_FOLDER}"
git -C "${TARGET_FOLDER}" checkout README.md
git -C "${TARGET_FOLDER}" checkout CNAME
git -C "${TARGET_FOLDER}" add .
git -C "${TARGET_FOLDER}" status
#$(eval COMMIT_MSG := "$(shell git log --oneline -1)")
readonly COMMIT_MSG="$(git log --oneline -1)"
git -C "${TARGET_FOLDER}" commit -m "${COMMIT_MSG}"
git -C "${TARGET_FOLDER}" log -2
