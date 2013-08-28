###
# Compass
###

set :markdown_engine, :rdiscount
set :markdown, :fenced_code_blocks => true,
							 :autolink => true, 
							 :smartypants => true

# Change Compass configuration
compass_config do |config|
	 config.output_style = :compact
end

require "compass"

###
# Page options, layouts, aliases and proxies
###

page "*", :layout => "remark"

###
# Helpers
###

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

#activate :blog do |blog|
#	blog.prefix = "blog"
#	blog.layout = "blog/layout"
#	blog.summary_separator = /(READMORE)/
#	blog.summary_length = 250
#end

helpers do
	def javascript_path(file_path)
		asset_path(:js, file_path)
	end
	
	def directories_with_slides
		sitemap.resources.map{ |resource| if (!(resource.destination_path =~ /(javascripts|stylesheets|images|fonts)\//) and resource.destination_path =~ /\//) then resource.destination_path.gsub(/\/.*\.[A-Za-z]+$/,"") end }.delete_if {|x| x.nil? }.uniq
	end
			
end


# Build-specific configuration
configure :build do

	#ignore "/courses/*"
	#ignore "/research/*"
	ignore "/**/*.rb"
	set :http_prefix, "/slides"
	#set :http_prefix, "/new2"
	# Change this to build with a different file root.	
	#set :http_prefix, "/my/prefix/folder"

	# For example, change the Compass output style for deployment
	activate :minify_css

	# Minify Javascript on build
	activate :minify_javascript

	#activate :gzip

	# Enable cache buster
	# activate :cache_buster

	# Use relative URLs
	#activate :relative_assets

	# Compress PNGs after build
	# I wouldn't use this.
	#activate :smusher

	# Or use a different image path
	# set :http_path, "/Content/images/"
end

activate :deploy do |deploy|
	deploy.method = :git
	#ignore ".git/*"
	#deploy.method = :rsync
	#deploy.user = "eschaton"
	#deploy.host = "dynamo.dreamhost.com"
	#deploy.path = "~/www/andrew.pilsch.com/slides"
end

Dir.entries("#{Dir.pwd}/source/").each do |file|
	if File.directory? "#{Dir.pwd}/source/#{file}" and !(file =~ /(javascripts|stylesheets|images|fonts|layouts)/) and !(file =~ /^\./)
		proxy "#{file}/index.html", "index.html", :locals => {:directory => file}
	end
end