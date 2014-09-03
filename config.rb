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
