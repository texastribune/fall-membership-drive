# Reload the browser automatically whenever files change
activate :livereload

# Activate extension for Bourbon Sass mixins
activate :bourbon

# Sets CSS, JS & images directory names
set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'

# Build-specific configuration
configure :build do
  activate :minify_html
  # For example, change the Compass output style for deployment
  activate :minify_css
  # Minify Javascript on build
  activate :minify_javascript
end

# For s3 sync for deploying with middleman build
activate :s3_sync do |config|
  config.bucket = 'anniversary.texastribune.org'
  config.region = 'us-west-2'
  config.aws_access_key_id = ENV['AWS_ACCESS_KEY']
  config.aws_secret_access_key = ENV['AWS_ACCESS_SECRET']
  config.after_build = true
end
