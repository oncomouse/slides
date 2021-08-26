# frozen_string_literal: true

###
# Compass
###
set :markdown_engine, :kramdown
set :markdown, fenced_code_blocks: true,
               autolink: true,
               smartypants: true,
               footnotes: true,
               superscript: true

Haml::TempleEngine.disable_option_validator!

###
# Page options, layouts, aliases and proxies
###

activate :external_pipeline,
         name: :gulp,
         command: "npm run #{build? ? 'production' : 'development'}",
         source: '.tmp',
         latency: 1

configure :build do
  set :http_prefix, '/slides'

  ignore 'assets/stylesheets/site'
end

page '*.html', layout: 'remark'

###
# Helpers
###

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :build_dir, 'docs'

# Extend String class with a "naturalized" method
class String
  def naturalized
    scan(/[^\d\.]+|[\d\.]+/).collect { |f| f.match(/\d+(\.\d+)?/) ? f.to_f : f }
  end
end

helpers do
  def javascript_path(file_path)
    asset_path(:js, file_path)
  end

  def image_path(file_path)
    asset_path(:images, file_path)
  end

  def directories_with_slides
    sitemap.resources.map do |resource|
      if resource.destination_path !~ %r{(javascripts|stylesheets|images|fonts)/} &&
         resource.destination_path =~ %r{/}
        resource.destination_path.gsub(%r{/.*\.[A-Za-z]+$}, '')
      end
    end.delete_if(&:nil?).uniq
  end
end

ready do
  ignore 'remark_markdown_template.html'
end

# We have to parse through the source directory for two things:
#  - Markdown slide files
#  - Directories
#
# We have to proxy both kinds of files for specific reasons related
# to building the repository.
#
parse_files = Dir.entries(File.join(root, 'source'))
until parse_files.empty?
  file = parse_files.shift
  next if file =~ /^\./
  next if file =~ /remark_base/

  # If the file is a Markdown slide source, we proxy it to
  # remark_markdown_template.html.haml. This file will actually set up all the
  # JavaScript and page layout things for the Markdown file, while loading the
  # source as a Textarea, as Remark.js likes.
  if file =~ /(\.markdown|\.md)$/
    markdown_source = ''
    File.open("#{Dir.pwd}/source/#{file}") do |f|
      markdown_source = f.read
    end
    proxy(
      file.sub(File.extname(file), '').to_s,
      'remark_markdown_template.html',
      locals: { markdown_source: file }
    )
  end

  # If the file is a directory, we proxy a directory index to /index.html.erb,
  # which will build the index display for the various slide files we are
  # generating.
  next unless File.directory?("#{Dir.pwd}/source/#{file}") &&
              file !~ /(javascripts|stylesheets|images|fonts|layouts)/ &&
              file !~ /^\./

  proxy "#{file}/index.html", 'index.html', locals: { directory: file }
  parse_files += Dir.entries("#{Dir.pwd}/source/#{file}").map! do |x|
    x =~ /^\./ ? nil : "#{file}/#{x}"
  end
  parse_files.compact!.uniq!
end
