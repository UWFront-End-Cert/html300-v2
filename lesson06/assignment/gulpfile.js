const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp')
const sass = require('gulp-sass')
const autoprefix = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const cleanCSS = require('gulp-clean-css')
const browsersync = require('browser-sync')

// Directories
var paths = {
    scss: './css/',
    data: './data/',
    js: './js/'
};

// Handle changes to .scss files
function css() {
    return src('css/*.scss')
        .pipe(plumber({
            handleError: function(err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass({
            includePaths: [paths.scss],
            outputStyle: 'compressed'
        }).on('error', function(err) {
            console.log(err.message);
            // sass.logError
            this.emit('end');
        }))
        .pipe(
            autoprefix(['> .5%'])
        )
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(dest('css/'))
};

// On changes to scss or js files, reload the page in browser
function watchFiles() {
    watch(paths.scss + '**/*.scss', parallel(css))
        .on('change', browsersync.reload);
    watch(paths.js + '*.js')
        .on('change', browsersync.reload);
}

// BrowserSync configuration
function browserSync() {
    browsersync({
        server: {
            baseDir: './'
        },
        notify: false,
        browser: "chrome"
    });
}

const watching = parallel(watchFiles, browserSync);

exports.default = watching;
