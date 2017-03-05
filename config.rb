###
# Compass
###

set :markdown_engine, :kramdown
set :markdown, :fenced_code_blocks => true,
							 :autolink => true, 
							 :smartypants => true,
							 :footnotes => true,
							 :superscript => true

###
# Page options, layouts, aliases and proxies
###

page "*.html", :layout => "remark"

###
# Helpers
###

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :build_dir, "docs"

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
		sitemap.resources.map{ |resource| if (!(resource.destination_path =~ /(javascripts|stylesheets|images|fonts)\//) and resource.destination_path =~ /\//) then resource.destination_path.gsub(/\/.*\.[A-Za-z]+$/,"") end }.delete_if {|x| x.nil? }.uniq
	end
			
end

ready do
    ignore "remark_markdown_template.html"
end

if not build?
	activate :external_pipeline,
		name: :gulp,
		command: "node_modules/.bin/gulp watch",
		source: ".tmp/dist",
		latency: 2
end
after_build do
	activate :external_pipeline,
		name: :gulp,
		command: "env NODE_ENV=production node_modules/.bin/gulp build",
		source: ".tmp/dist",
		latency: 2
end

#require_relative "./lib/build_cleaner"

# Build-specific configuration
configure :build do
	#activate :build_cleaner

	ignore "/**/*.rb"
	ignore "javascripts/*"
	#ignore "stylesheets/*"
	set :http_prefix, "/slides"
end

#activate :deploy do |deploy|
#	deploy.deploy_method = :git
#end

parse_files = Dir.entries("#{Dir.pwd}/source/")

# Oh boy, recursion!
while parse_files.length > 0
    file = parse_files.shift
    next if file =~ /^\./
    next if file =~ /remark_base/
    
    if file =~ /(\.markdown|\.md)$/# or File.extname(file) == ".md"
        markdown_source = File.open("#{Dir.pwd}/source/#{file}").read
        if markdown_source =~ /^---/
            yaml_options = YAML.load markdown_source.split(/---/)[1]
        else
            yaml_options = {}
        end
        proxy "#{file.sub(File.extname(file), "")}", "remark_markdown_template.html", :locals => {:markdown_source => file, :yaml_options => yaml_options}
    end 
    
	if File.directory? "#{Dir.pwd}/source/#{file}" and !(file =~ /(javascripts|stylesheets|images|fonts|layouts)/) and !(file =~ /^\./)
        proxy "#{file}/index.html", "index.html", :locals => {:directory => file}
        
        parse_files += Dir.entries("#{Dir.pwd}/source/#{file}").map! { |x| if x =~ /^\./ then nil else "#{file}/#{x}" end }
        parse_files.compact!.uniq!
	end
end