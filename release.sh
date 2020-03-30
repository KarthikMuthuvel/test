#!/bin/bash

# Script to simplify the release flow.
# 1) Fetch the current release version
# 2) Increase the version (major, minor, patch)
# 3) Add a new git tag
# 4) Push the tag

  # If it's not a dry run, let's go!
  # 3) Add git tag
  echo "Add git tag"
  git tag -a "v3.0" -m "msg"

  # 4) Push the new tag

  echo "Push the tag"
  git push --tags origin master
