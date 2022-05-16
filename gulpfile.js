'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var uglifycss = require('gulp-uglifycss');
 



gulp.task('sass', function() {
  return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
  });

// gulp.task('run',['sass', 'css']); 
