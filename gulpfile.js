// Include the neccessary modules.
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');


// Configure Sass task to run when the specified .scss files change.
// Browsersync will also reload browsers.
gulp.task('sass', function() {
    return gulp.src('_sass/style.scss')
    .pipe(sass({
        'outputStyle': 'compressed'
    }))
    .pipe(gulp.dest('assets/css/'))
});

gulp.task('landing', function() {
    return gulp.src('_sass/landing.scss')
    .pipe(sass({
        'outputStyle': 'compressed'
    }))
    .pipe(gulp.dest('assets/css/'))
});

// Configure Uglify task to run when the specified .js file changes.
gulp.task('compress', function() {
    return gulp.src(['_assets/js/jquery.min.js', '_assets/js/owl.carousel.min.js', '_assets/js/fancybox.min.js', '_assets/js/init.js'])
        .pipe(concat('init.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename('init.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});
