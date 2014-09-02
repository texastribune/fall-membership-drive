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
