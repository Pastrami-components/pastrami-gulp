var gulp = require('gulp');
var gulpInject = require('gulp-inject');
var config = require('../default-config');

module.exports = function (paths) {
  paths = paths || config.paths;

  return function () {
    return gulp.src(paths.docs.app.index)
      .pipe(gulpInject(gulp.src([paths.dev.root+'template-strings/*.js', paths.dev.scripts, paths.dev.styles], {read: false}), {
        relative: true,
        ignorePath: '../../'+paths.dev.root,
        addPrefix: '..',
      }))
      .pipe(gulp.dest(paths.docs.app.root));
  };
};