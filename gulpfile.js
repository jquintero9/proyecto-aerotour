'use strict';

const path = require('path'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

/*
  --TOP LEVEL FUNCTIONS--
  gulp.task - Define tasks
  gulp.src - Point tofiles to use
  gulp.dest - Point to folder to output
  gulp.watch - Watch files and floder for changes.
*/

// Logs Messages
gulp.task('message', () => console.log('Gulp is running'));

// Copy All HTML files
gulp.task('copyHtml', () => {
  gulp.src('src/templates/*.html')
      .pipe(gulp.dest('dist/templates'))
});

// Index Html
gulp.task('index-html', () => {
  gulp.src(path.resolve(__dirname, 'src/index.pug'))
      .pipe(pug({ pretty: true }).on('error', err => console.log(err)))
      .pipe(gulp.dest(path.resolve(__dirname, 'dist')))
});

gulp.task('templates', () => {
  gulp.src(path.resolve(__dirname, 'src/templates/*.pug'))
      .pipe(pug({ pretty: true }).on('error', err => console.log(err)))
      .pipe(gulp.dest(path.resolve(__dirname, 'dist/templates')))
});

// Optimize Images
gulp.task('imageMin', () => {
  gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
});

// Minify files
gulp.task('minify', () => {
  gulp.src('src/js/*.js')
      .pipe(uglify().on('error', err => console.log(err)))
      .pipe(gulp.dest('dist/js'))
});

// Sass
gulp.task('sass', () => {
  gulp.src(path.resolve(__dirname, 'src/sass/*.scss'))
      .pipe(sass().on('error', err => console.log(err)))
      .pipe(autoprefixer({
        browsers: ['> 0%'],
        cascade: false
      }))
      .pipe(gulp.dest(path.resolve(__dirname, 'dist/css')))
});

//Broserify with babel
gulp.task('js', () => {
  return browserify(path.resolve(__dirname, 'src/js/app.js'))
      .transform('babelify', {presets: ['env']})
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(path.resolve(__dirname, 'dist/js/')))
});

// Scripts
gulp.task('scripts', () => {
  gulp.src(path.resolve(__dirname, 'src/js/*.js'))
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest(path.resolve(__dirname, 'dist/js')))
});

// Default Task
gulp.task('default' , ['message', 'index', 'templates', 'imageMin', 'sass', 'minify', 'scripts']);

// Watch
gulp.task('watch', () => {
  //gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/index.pug', ['index-html']);
  gulp.watch('src/templates/*.pug', ['templates']);
});
