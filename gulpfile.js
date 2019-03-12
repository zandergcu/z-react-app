const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');

const watcher = watch(['sass/**/*.scss']);

watcher.on('change', function(path, stats) {
  console.log(`File ${path} was changed`);
  css();
});

watcher.on('add', function(path, stats) {
  console.log(`File ${path} was removed`);
  css();
});

function css() {
  return src('sass/main.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('src/css'))
}

exports.css = css;
exports.default = parallel(css);

//- RUN NPM INSTALL GULP SAVE
//- POSSIBLY NEED TO RUN YARN INSTALL AGAIN THEN
//- HOPEFULLY THIS LETS SCSS WORK AND DEPLOYS FINE
