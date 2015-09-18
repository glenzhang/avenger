'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var clipboard = require('gulp-clipboard'); //复制
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var minifyHTML = require('gulp-minify-html');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcssSimpleVars = require("postcss-simple-vars");
var postcssMixins = require("postcss-mixins");
var postcssNested = require("postcss-nested");
var minifycss = require('gulp-minify-css');

var del = require('del');
var argv = require('yargs').argv;

var pageconfig = require('./conf/pageconfig');
var currentDev = argv.m; //|| 'index';

var src = "public/";
var dist = "dist/";

gulp.task('help', function() {
    console.log('   gulp default -m  index     打包index页面');
});

gulp.task('cleanupjs', function() {
    del(dist + 'js/' + currentDev + '-*.js').then(function(paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

gulp.task('cleanupcss', function() {
    del(dist + 'css/' + currentDev + '-*.css').then(function(paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

gulp.task('cleanup', function() {
    del(dist + 'js/' + currentDev + '-*.js').then(function(paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });

    del(dist + 'css/' + currentDev + '-*.css').then(function(paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });

    del(dist + 'views/' + currentDev + '.ejs').then(function(paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

gulp.task('copylibs', function() {
    gulp.src(src + 'libs/**/*')
        .pipe(clipboard())
        .pipe(gulp.dest(dist + '/libs'));
});

gulp.task('copyimages', function() {
    gulp.src(src + 'images/**/*')
        .pipe(clipboard())
        .pipe(gulp.dest(dist + '/images'));
});

gulp.task('uglifyjs', function() {

    if (!pageconfig[currentDev]) {
        return gulp;
    }

    return gulp.src(pageconfig[currentDev]['js'])
        .pipe(concat(currentDev))
        .pipe(uglify())
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(rev())
        .pipe(gulp.dest(dist + '/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest(dist + '/rev/js'));
});

gulp.task('js', ['uglifyjs']);

gulp.task('postcss', function() {
    if (!pageconfig[currentDev]) {
        return gulp;
    }

    var processors = [
        postcssMixins,
        postcssSimpleVars,
        postcssNested,
        autoprefixer({
            browsers: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 6"]
        })
    ];

    return gulp.src(pageconfig[currentDev]['css'])
        .pipe(concat(currentDev))
        .pipe(postcss(processors))
        .pipe(minifycss())
        .pipe(rename({
            extname: '.css'
        }))
        .pipe(rev())
        .pipe(gulp.dest(dist + 'css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest(dist + '/rev/css'));
});

gulp.task('css', ['postcss']);

// Rerun the task when a file changes
gulp.task('watch', function() {
    if (pageconfig[currentDev]) {
        gulp.watch(pageconfig[currentDev]['js'], ['build']);
        gulp.watch(pageconfig[currentDev]['css'], ['build']);
    }
    gulp.watch(['views/' + currentDev + '.ejs'], ['build']);

});

gulp.task('compile', ['cleanup', 'copylibs', 'copyimages', 'js', 'css'], function() {
    gulp.src([dist + 'rev/**/*.json', 'views/index.ejs'])
        .pipe(revCollector())
        .pipe(gulp.dest(dist + 'views'));
});

gulp.task('build', ['compile', 'watch']);
