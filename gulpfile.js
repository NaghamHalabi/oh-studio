// const gulp = require('gulp');
// const fileInclude = require('gulp-file-include');

// gulp.task('include-html',  function() {
//     return gulp.src('src/views/*.html')
//     .pipe(fileInclude({
//         prefix: '@@',
//         basepath: './src/views'
//     })).pipe(gulp.dest('dist/views'));
// });

// gulp.task('copy-css', function () {
//   return gulp.src('src/css/**/*.css')
//     .pipe(gulp.dest('dist/css'));
// });

// gulp.task('copy-images', function () {
//   return gulp.src('src/images/**/*.{jpg,jpeg,png,gif,webp}')
//     .pipe(gulp.dest('dist/images'));
// });

// gulp.task('copy-partials', function () {
//     return gulp.src('src/views/**/*.html')
//       .pipe(gulp.dest('dist/views'));
//   });

// gulp.task('bundle-scripts', function () {
//     return gulp.src('src/js/**/*.js')
//     .pipe(gulp.dest('dist/js'));
//   });

// /* the order here is so important. include-html if run first won't be able to add the required partials*/
// // this took a lot of trial and error to find out
// gulp.task('build', gulp.series(
//     'bundle-scripts',
//     'copy-css',
//     'copy-images',
//     'copy-partials',
//     'include-html',
// ));

/* Refactored */

const gulp = require('gulp');
const fileInclude = require('gulp-file-include');

// Define source and destination paths
const paths = {
  src: {
    html: 'src/views/*.html',
    index: 'src/index.html',
    css: 'src/css/**/*.css',
    images: 'src/images/**/*.{jpg,jpeg,png,gif,webp}',
    scripts: 'src/js/**/*.js',
    partials: 'src/views/**/*.html',
  },
  dest: {
    views: 'dist/views',
    css: 'dist/css',
    images: 'dist/images',
    scripts: 'dist/js',
  }
};

// Tasks
function includeIndexHtml() {
  return gulp.src(paths.src.index)
    .pipe(fileInclude({
      prefix: '@@',
      basepath: './src'
    }))
    .pipe(gulp.dest(paths.dest));
}

function includeHtml() {
  return gulp.src(paths.src.html)
    .pipe(fileInclude({
      prefix: '@@',
      basepath: './src/views'
    }))
    .pipe(gulp.dest(paths.dest.views));
}

function copyCss() {
  return gulp.src(paths.src.css)
    .pipe(gulp.dest(paths.dest.css));
}

function copyImages() {
  return gulp.src(paths.src.images)
    .pipe(gulp.dest(paths.dest.images));
}

function copyPartials() {
  return gulp.src(paths.src.partials)
    .pipe(gulp.dest(paths.dest.views));
}

function bundleScripts() {
  return gulp.src(paths.src.scripts)
    .pipe(gulp.dest(paths.dest.scripts));
}

// Default task
exports.default = gulp.series(
  gulp.parallel(bundleScripts, copyCss, copyImages, copyPartials),
  includeIndexHtml,
  includeHtml
);