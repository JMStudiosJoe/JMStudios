var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var SOURCE_PATH = 'app/css/source/**.scss';
var MAIN_SASS_FILE = 'styling.scss';
var PUBLIC_PATH = 'app/public/';

gulp.task('default', function() {
    console.log("default function running time to connect sass and scss files");
});
gulp.task('compile-sass', function () {
    return gulp.src(MAIN_SASS_FILE)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styling.css'))
        .pipe(gulp.dest(SOURCE_PATH))
        .pipe(gulp.dest(PUBLIC_PATH));
});
