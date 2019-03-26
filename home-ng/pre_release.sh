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
echo "TARGET_FOLDER=${TARGET_FOLDER}"

rm -rfv "${TARGET_FOLDER}"
git clone https://github.com/hongkailiu/hongkailiu.github.io.git "${TARGET_FOLDER}"
rm -rfv "${TARGET_FOLDER}"/*
cp -rv ./docs/* "${TARGET_FOLDER}"
git -C "${TARGET_FOLDER}" checkout README.md
git -C "${TARGET_FOLDER}" checkout CNAME
git -C "${TARGET_FOLDER}" checkout Makefile
git -C "${TARGET_FOLDER}" checkout version.json
git -C "${TARGET_FOLDER}" checkout .travis.yml
git -C "${TARGET_FOLDER}" add .
readonly STATUS="$(git -C "${TARGET_FOLDER}" status)"
echo "${STATUS}"

if [[ "${STATUS}" == *"nothing to commit"* ]]; then
  echo "exiting ... nothing to commit"
  exit 0
fi

#$(eval COMMIT_MSG := "$(shell git log --oneline -1)")
readonly COMMIT_MSG="$(git log --oneline -1)"
git -C "${TARGET_FOLDER}" commit -m "${COMMIT_MSG}"

make -C "${TARGET_FOLDER}" generate-version
git -C "${TARGET_FOLDER}" --no-pager diff
git -C "${TARGET_FOLDER}" add .
git -C "${TARGET_FOLDER}" status
git -C "${TARGET_FOLDER}" commit -m "Update version.json"
git -C "${TARGET_FOLDER}" log -3
