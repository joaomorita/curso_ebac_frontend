const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function imageCompress(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function compilaJs(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false} ,gulp.series(compilaSass))
    gulp.watch('./source/images/*',{ignoreInitial: false} ,gulp.series(imageCompress))
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false} ,gulp.series(compilaJs))
}