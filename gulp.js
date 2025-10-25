const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
 
gulp.task('comprimiCss', () => {
  return gulp.src('assets/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('finali'));
});