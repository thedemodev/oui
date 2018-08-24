#!/bin/bash

# Only send after a pull request
if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
    echo -e "Skipping webhook because not a Pull request.\n"
    exit 0
fi

curl -X POST https://gzme9ljy0e.execute-api.us-west-2.amazonaws.com/devops/handleCustomWebhook \
-H "Content-Type: application/json" \
-d @- << EOF

{
  "TRAVIS_PULL_REQUEST": $TRAVIS_PULL_REQUEST,
  "TRAVIS_TEST_RESULT": $TRAVIS_TEST_RESULT,
  "TRAVIS_BUILD_STAGE_NAME": $TRAVIS_BUILD_STAGE_NAME,
  "TRAVIS_JOB_NUMBER": $TRAVIS_JOB_NUMBER
}
EOF
