'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/scss/main.scss')
  .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/main.scss', ['sass']);
});