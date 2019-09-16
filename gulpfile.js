'use strict';

// 1. LOAD PLUGINS

const gulp = require('gulp')
const importer = require('node-sass-package-importer')
const p = require('gulp-load-plugins')({ // This loads all the other plugins.
  DEBUG: false,
  pattern: ['gulp-*', 'gulp.*', 'del', 'vinyl-*'],
  postRequireTransforms: {
    'uglifyEs': x => x.default
  }
})

// 2. CONFIGURATION

const src = 'assets/' // The Middleman source folder
const dest = '.tmp/'   // The "hot" build folder used by Middleman's external pipeline
const development = p.environments.development
const production = p.environments.production
const fonts = {
  in: src + '**/*.{ttf,woff,woff2}',
  out: dest,
}
const css = {
  in: src + 'stylesheets/**/*.{css,scss,sass}',
  out: dest + 'stylesheets/',
}
const sassOpts = {
  imagePath: src + 'images',
  includePaths: [src + 'stylesheets/'],
  errLogToConsole: true,
  importer: importer(),
}
const autoprefixerOpts = {}
const js = {
  in: src + 'javascripts/**/*.js',
  out: dest + 'javascripts/',
}
const images = {
  in: src + 'images/**/*.{png,jpg,gif,webp}',
  out: dest + 'images/',
}

// CSS Preprocessing
gulp.task('css', function () {
  return gulp.src(css.in)
    .pipe(development(p.sourcemaps.init()))
    .pipe(p.include({
      includePaths: [
        src + 'stylesheets',
        __dirname + '/node_modules',
      ],
    }))
    .pipe(p.sass(sassOpts).on('error', p.sass.logError))
    .pipe(p.autoprefixer(autoprefixerOpts)).on('error', handleError)
    .pipe(production(p.cleanCss()))
    .pipe(development(p.sourcemaps.write()))
    .pipe(gulp.dest(css.out));
})

// Move fonts from assets:
gulp.task('fonts', function () {
  return gulp.src(fonts.in).pipe(gulp.dest(fonts.out))
})

// Image Optimization
// .pipe(p.changed(images.out))
// .pipe(production(p.imagemin()))
// Doing anything to the images takes FOREVER:
gulp.task('images', function () {
  return gulp.src(images.in)
    .pipe(gulp.dest(images.out))
})

// JS Includes:
gulp.task('js', function () {
  return gulp.src(js.in)
    .pipe(p.include({
      includePaths: [
        __dirname + '/node_modules',
        src + 'javascripts',
      ],
    }))
    .pipe(production(p.uglifyEs()))
    .pipe(gulp.dest(js.out))
})

// Clean .tmp/
gulp.task('clean', function () {
  return p.del([
    dest + '*',
  ])
})

// Build Task
gulp.task('build', gulp.series('clean', gulp.parallel('js', 'css', 'images', 'fonts')))

// Default Task
// This is the task that will be invoked by Middleman's exteranal pipeline when
// running 'middleman server'
gulp.task('default', gulp.series('build', function () {
  gulp.watch(js.in, gulp.series('js'))
  gulp.watch(css.in, gulp.series('css'))
  gulp.watch(images.in, gulp.series('images'))
  gulp.watch(fonts.in, gulp.series('fonts'))
}))

const handleError = function (err) {
  console.log(err.toString())
  this.emit('end')
}
