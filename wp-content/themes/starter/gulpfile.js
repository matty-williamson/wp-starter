var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  rename = require("gulp-rename");

// Compile sass, minify css, autoprefix
gulp.task('sass', function () {
  gulp.src('./scss/style.scss')
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .on('error', function (err) {
      console.log(err.message);
    })
    .pipe(autoprefixer({ 

      browsers: ['> 1%', 'last 2 versions', 'Firefox >= 20'], 

    }))
    .pipe(gulp.dest('./'));
});

// Minify js files
gulp.task('uglify', function () {
  gulp.src('./js/scripts.js')
    .pipe(uglify())
    .on('error', function (err) {
      console.log(err.message);
    })
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('./js'));
});

// Watch sass and js changes
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('js/*.js', ['uglify']);
});

// default task
gulp.task('default', ['watch']);