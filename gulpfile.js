var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var exec = require('child_process').exec;

var SOURCE_PATH = 'app/scss/source/**.scss';
var MAIN_SASS_FILE = 'styling.scss';
var PUBLIC_PATH = 'app/public/';

gulp.task('default', function() {
    console.log("default function running time to connect sass and scss files");
});
gulp.task('compile-sass', function () {
    console.log("recompiling sass");
    return gulp.src(SOURCE_PATH)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styling.css'))
        .pipe(gulp.dest(PUBLIC_PATH));
});

gulp.task('run-server', function(cb) {
    exec('node server.js', function (err, stdout, stderr) {
        console.log("server listening at port 7000");
        console.log(stdout);
        console.log(stderr);
        cb(err);
  });
});

gulp.task('watch-and-run', ['compile-sass'], function() {
    console.log("watching files for changes");
    gulp.watch('/app/scss/*.scss', ['compile-sass']);
});
