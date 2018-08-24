
# Only send after a pull request
if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
    echo -e "Skipping webhook because not a Pull request.\n"
    exit 0
fi

curl -X POST -H "Content-Type: application/json" -d \
  '{"TRAVIS_PULL_REQUEST":"$TRAVIS_PULL_REQUEST"}' \
  https://gzme9ljy0e.execute-api.us-west-2.amazonaws.com/devops/handleCustomWebhook
