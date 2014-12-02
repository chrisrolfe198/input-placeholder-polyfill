var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('clean', function(cb) {
	del(['dist'], cb);
});

gulp.task('scripts', ['clean'], function() {
	return gulp.src('src/**/*.js')
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist'))
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist'));
});