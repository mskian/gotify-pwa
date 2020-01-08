const {series, watch, src, dest, parallel} = require('gulp');
const pump = require('pump');

// gulp plugins and utils
const livereload = require('gulp-livereload');
const postcss = require('gulp-postcss');
const beeper = require('beeper');
const fs = require('fs');

// postcss plugins
const autoprefixer = require('autoprefixer');
const colorFunction = require('postcss-color-function');
const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');
const easyimport = require('postcss-easy-import');

function serve(done) {
    livereload.listen();
    done();
}

const handleError = (done) => {
    return function (err) {
        if (err) {
            beeper();
        }
        return done(err);
    };
};

function html(done) {
    pump([
        src(['public/*.html']),
        livereload()
    ], handleError(done));
}

function css(done) {
    const processors = [
        easyimport,
        customProperties({preserve: false}),
        colorFunction(),
        autoprefixer(),
        cssnano()
    ];

    pump([
        src('public/assets/css/style.css', {sourcemaps: true}),
        postcss(processors),
        dest('public/assets/built/', {sourcemaps: '.'}),
        livereload()
    ], handleError(done));
}

const cssWatcher = () => watch('public/assets/css/style.css', css);
const htmlWatcher = () => watch(['public/*.html'], html);
const watcher = parallel(cssWatcher, htmlWatcher);
const build = series(css);
const dev = series(build, serve, watcher);

exports.build = build;
exports.default = dev;