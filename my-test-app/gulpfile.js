var gulp = require('gulp'),
  	sass = require('gulp-sass'),
  	concat = require('gulp-concat'),
  	autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function() {
  return gulp.src('./src/sass/style.sass')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
     }))
    .pipe(concat('App.css'))
    .pipe(gulp.dest('./src'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/sass/style.sass'], ['sass']);

})

gulp.task('default', ['sass', 'watch']);
