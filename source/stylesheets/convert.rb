require 'rubygems'
require 'sass'
require 'sass/exec'
require 'fileutils'

Dir.glob("**/*.sass").each do |file|
	
	outputFile = file.sub(/\.sass$/,".scss")
	output = Sass::Engine.new(IO.read(file)).to_tree.send("to_scss").gsub(/  /,"\t")
	File.open(outputFile, "w") do |fp|
		fp.write output
	end
	FileUtils.rm(file)
end