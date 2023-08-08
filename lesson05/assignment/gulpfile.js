const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function build() {
    return src('css/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchIt() {
    watch(['css/**/*.scss'], build)
}

exports.default = series(build, watchIt)