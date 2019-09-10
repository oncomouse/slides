'use strict'; // http://www.w3schools.com/js/js_strict.asp

// 1. LOAD PLUGINS

const gulp = require('gulp')
const importer = require('node-sass-package-importer')
const p = require('gulp-load-plugins')({ // This loads all the other plugins.
  DEBUG: false,
  pattern: ['gulp-*', 'gulp.*', 'del', 'vinyl-*'],
  rename: {
    'vinyl-source-stream': 'source',
    'vinyl-buffer': 'buffer'
  },
})

// 2. CONFIGURATION

const src = 'source/' // The Middleman source folder
const dest = '.tmp/'   // The "hot" build folder used by Middleman's external pipeline
const development = p.environments.development
const production = p.environments.production
const css = {
  in: src + 'stylesheets/**/*.{css,scss,sass}',
  out: dest + 'stylesheets/',
}
const sassOpts = {
  imagePath: '../images',
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
  out: dest + 'images/'
}
// 3. WORKER TASKS

// CSS Preprocessing
gulp.task('css', function () {
  return gulp.src(css.in)
    .pipe(development(p.sourcemaps.init()))
    .pipe(p.include({
      includePaths: [
        __dirname + '/node_modules',
        __dirname + '/source/stylesheets'
      ],
    }))
    .pipe(p.sass(sassOpts).on('error', p.sass.logError))
    .pipe(p.autoprefixer(autoprefixerOpts)).on('error', handleError)
    .pipe(production(p.cleanCss()))
    .pipe(development(p.sourcemaps.write()))
    .pipe(gulp.dest(css.out));
})

// Image Optimization
gulp.task('images', function () {
  return gulp.src(images.in)
    .pipe(p.changed(images.out))
    .pipe(p.imagemin())
    .pipe(gulp.dest(images.out))
})

gulp.task('js', function () {
  return gulp.src(js.in)
    .pipe(p.include({
      includePaths: [
        __dirname + '/node_modules',
        __dirname + '/source/javascripts'
      ],
    }))
    .pipe(gulp.dest(js.out))
})

// Clean .tmp/
gulp.task('clean', function () {
  return p.del([
    dest + '*'
  ])
})

// 4. SUPER TASKS

// Development Task
gulp.task('production', gulp.series('clean', gulp.parallel('js', 'css', 'images')))

// Production Task
gulp.task('development', gulp.series('clean', gulp.parallel('js', 'css')))

// Default Task
// This is the task that will be invoked by Middleman's exteranal pipeline when
// running 'middleman server'
gulp.task('default', gulp.series('development', function () {
  gulp.watch(js.in, gulp.series('js'))
  gulp.watch(css.in, gulp.series('css'))
  gulp.watch(images.in, gulp.series('images'))
}))

const handleError = function (err) {
  console.log(err.toString())
  this.emit('end')
}
