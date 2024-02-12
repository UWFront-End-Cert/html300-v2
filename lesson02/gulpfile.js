const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
 return gulp.src('style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style.css'));
});

gulp.task('watch', function () {
 gulp.watch('style.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));