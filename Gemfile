# frozen_string_literal: true

# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'https://rubygems.org'
git_source(:github) { |name| "https://github.com/#{name}.git" }

gem 'builder', '>=3.0'

gem 'middleman', '~> 4'
gem 'middleman-autoprefixer'

gem 'emoji_data', github: 'oncomouse/emoji_data.rb', branch: 'master'
gem 'kramdown'
gem 'mini_racer' if RbConfig::CONFIG['target_os'] !~ /mswin|mingw/i
gem 'oj' if RbConfig::CONFIG['target_os'] !~ /mswin|mingw/i
gem 'wdm', '>= 0.1.0' if RbConfig::CONFIG['target_os'] =~ /mswin|mingw/i
