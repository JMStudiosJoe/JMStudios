var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');

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

gulp.task('watch-and-run', ['compile-sass'], function() {

  nodemon({
    script: 'server.js'
  , ext: 'js html scss'
  , env: { 'NODE_ENV': 'development' }
  , tasks: ['compile-sass']
  })

});
