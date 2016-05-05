var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rucksack = require('gulp-rucksack');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('stylus', function () {
  return gulp.src('./_stylus/main.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rucksack())
    .pipe(cssmin())
    .pipe(gulp.dest('./_site/assets/css'));
});
