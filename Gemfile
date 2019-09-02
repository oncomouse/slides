# frozen_string_literal: true

# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'https://rubygems.org'
git_source(:github) { |name| "https://github.com/#{name}.git" }

gem 'builder', '>=3.0'

gem 'middleman', '~> 4'
gem 'middleman-autoprefixer'
gem 'middleman-sprockets'
gem 'sass'

gem 'emoji_data', github: 'oncomouse/emoji_data.rb', branch: 'master'
gem 'kramdown'
gem 'oj' if RbConfig::CONFIG['target_os'] !~ /mswin|mingw/i
gem 'therubyracer', '~>0.12' if RbConfig::CONFIG['target_os'] !~ /mswin|mingw/i
gem 'wdm', '>= 0.1.0' if RbConfig::CONFIG['target_os'] =~ /mswin|mingw/i

source 'https://rails-assets.org' do
  gem 'rails-assets-bourbon', '~>4'
  gem 'rails-assets-classlist'
  gem 'rails-assets-headjs', '~>1.0.3'
  gem 'rails-assets-html5shiv', '~>3.7.2'
  gem 'rails-assets-icomoon'
  gem 'rails-assets-mermaid'
  gem 'rails-assets-neat', '2.0.0'
  gem 'rails-assets-nvd3', '~>1.1.15.beta'
  gem 'rails-assets-open-sans'
  gem 'rails-assets-remark', '>=0.13.0'
  gem 'rails-assets-reveal.js', '~>2.6.2'
  gem 'rails-assets-twemoji'
  gem 'rails-assets-zepto', '~>1.1.4'
end

