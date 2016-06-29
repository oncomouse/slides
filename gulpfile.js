var gulp = require('gulp');
var gulpif = require('gulp-if');
var mince = require('gulp-mincer');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var rimraf = require('gulp-rimraf');
var tap = require('gulp-tap');
var runSequence = require('run-sequence');
var postcss = require('gulp-postcss');

var path = require('path');

var _ = require('lodash');

var Mincer = require('mincer');

var srcDir = "source";
var cssDir = "stylesheets";
var jsDir = "javascripts";

var cssPath = srcDir+'/'+cssDir;
var jsPath = srcDir+'/'+jsDir;

var targets = {
	js: {
		development: jsPath + '/**/*.js'
	},
	css: {
		development: [cssPath + '/**/*.css.scss', cssPath + '/**/*.css'],
		watch: [cssPath + '/**/*.scss', cssPath + '/**/*.css'] // OR: undefined
	}
}
var output = '.tmp/dist';

var postcssPlugins = [
	require('autoprefixer')({browsers: 'last 3 versions'}),
	require('postcss-easings'),
	require('css-mqpacker')
];

var jsEnv = new Mincer.Environment();

jsEnv.appendPath(jsPath);
jsEnv.appendPath('bower_components');
jsEnv.appendPath('node_modules');

var cssEnv = new Mincer.Environment();

cssEnv.appendPath(cssPath);
cssEnv.appendPath('bower_components');
cssEnv.appendPath('node_modules');

var nodeEnv = process.env.NODE_ENV;
if(typeof nodeEnv === 'undefined') {
	nodeEnv = 'development';
}
_.each(targets, (value, key) => {
	if(typeof value[nodeEnv] === 'undefined') {
		targets[key][nodeEnv] = targets[key].development;
	}
	if(typeof value.watch === 'undefined') {
		targets[key].watch = targets[key].development;
	}
});

gulp.task('build:clean', () => {
	return gulp.src(output)
	.pipe(gulpif(nodeEnv === 'production', rimraf()));
});

gulp.task('build:js', ['build:clean'], () => {
	return gulp.src(_.flatten([
		targets.js[nodeEnv]
	]))
	.pipe(mince(jsEnv))
	.pipe(gulpif(nodeEnv === 'production', uglify()))
	.pipe(gulp.dest(output + '/' + jsDir));
});

gulp.task('build:css', ['build:clean'], () => {
	var files = {}
	return gulp.src(_.flatten([
		targets.css[nodeEnv]
	]))
	.pipe(tap((file, t) => {
		// Cache the original file extension, so we can save it later:
		files[path.basename(file.path).replace(path.extname(file.path),'')] = path.extname(file.path);		
	}))
	.pipe(gulpif(file => file.path.match(/\.css$/), mince(cssEnv)))
	.pipe(gulpif(file => file.path.match(/\.scss$/), sass({
		includePaths: [
			'./bower_components',
			'./node_modules',
			'./bower_components/bourbon/app/assets/stylesheets/',
			'./bower_components/neat/app/assets/stylesheets/',
			'./'+cssPath
		]
	})))
	.pipe(postcss(postcssPlugins))
	.pipe(gulpif(nodeEnv === 'production', cssnano({autoprefixer: false})))
	.pipe(rename((path) => {
		// Restore the cached file extension:
		path.extname = files[path.basename]
	}))
	.pipe(gulp.dest(output + '/'+cssDir));
});

gulp.task('build', (cb) => {
	runSequence(
		'build:clean',
		['build:js', 'build:css'],
		cb);
});

gulp.task('watch', ['build'], () => {
	gulp.watch(targets.js.watch, ['build:js']);
	gulp.watch(targets.css.watch, ['build:css']);
});