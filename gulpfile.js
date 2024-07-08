const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Compile Sass into CSS
function style() {
  return gulp.src('styles/styles.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))  
    .pipe(browserSync.stream());
}

// Start a BrowserSync server
function serve() {
  browserSync.init({
    server: './dist'  
  });
}

// Watch files for changes
function watch() {
  gulp.watch('styles/**/*.scss', style);  
  gulp.watch('dist/*.html').on('change', browserSync.reload);  
}

exports.default = gulp.series(style, serve, watch);
