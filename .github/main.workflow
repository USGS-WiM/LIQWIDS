workflow "Deploy to Test Site" {
  on = "push"
  resolves = ["GitHub Action for Slack"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@24a566c2524e05ebedadef0a285f72dc9b631411"
  args = "branch staging"
}

action "GitHub Action for AWS" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["Filters for GitHub Actions"]
  args = "s3 cp $GITHUB_WORKSPACE/dist/ s3://test.wim.usgs.gov/liqwids-test/  --recursive"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "GitHub Action for Slack" {
  uses = "Ilshidur/action-slack@7a89f92c279a0c0ef7e51514adbe9896cead2e66"
  needs = ["GitHub Action for AWS"]
  args = "Successfully deployed to test site"
  secrets = ["SLACK_WEBHOOK"]
}

workflow "Deploy to Demo Site" {
  on = "push"
  resolves = ["GitHub Action for Slack-1"]
}

action "Filters for GitHub Actions-1" {
  uses = "actions/bin/filter@24a566c2524e05ebedadef0a285f72dc9b631411"
  args = "branch master"
}

action "GitHub Action for AWS-1" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["Filters for GitHub Actions-1"]
  args = "s3 cp $GITHUB_WORKSPACE/dist/ s3://test.wim.usgs.gov/liqwids/  --recursive"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "GitHub Action for Slack-1" {
  uses = "Ilshidur/action-slack@7a89f92c279a0c0ef7e51514adbe9896cead2e66"
  needs = ["GitHub Action for AWS-1"]
  args = "Successfully deployed to demo site"
  secrets = ["SLACK_WEBHOOK"]
}
