call gulp build --env=development
cd dist
call gcloud app deploy --project "wixlabs-plugins-dev" --verbosity="error" --no-stop-previous-version -v %1
cd..
