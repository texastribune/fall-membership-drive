fall-membership-drive
=====================

## Getting Started

To get started, clone down the project repo.

You'll need the Ruby gem bundler. To install the bundler, run:

    gem install bundler

Install the necessary gems from the Gemfile by running:

    bundle install

## Development

Middleman runs locally on port 4567. It will live reload as changes are made to files. To start up the Middleman server, run:

    bundle exec middleman

To build the site, run:

    bundle exec middleman build

When Middleman builds, it creates a static file for each file located in the source folder. The build process is configured in config.rb.

## Deploying

To deploy, the project uses the middleman-s3_sync gem to push and compile the site to s3 after building.

By default, in config.rb, config.after_build is set to false. Set this to true. Check that your AWS_ACCESS_KEY and AWS_ACCESS_SECRET environment variables are set, and then run:

    bundle exec middleman build

In your terminal, you should see s3_sync applying any updates to files for the project. You can also check the project s3 bucket to ensure that all files have been synced there. Change config.after_build back to its default of false after deploying.
