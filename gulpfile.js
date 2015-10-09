var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify({
    entries: ['./app.jsx'],
    transform: ['reactify']
  });
  return b.bundle()
    .pipe(source('app.min.js'))
    .pipe(gulp.dest('./'));
});
