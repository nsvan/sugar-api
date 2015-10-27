var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');
    jshint = require('gulp-jshint');
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
	return gulp.src ('css/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe( autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ) )
	.pipe(concat('style.css'))
	.pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
	gulp.watch('styles/*.scss', ['styles']);
	gulp.watch('js/*.js', ['jshint']);
});

gulp.task('jshint', function (){
	return gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('default',['watch']);