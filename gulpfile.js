const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

//Copiar todos arquivos HTML
gulp.task('copyHtml', async function () {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

//Copiar todos arquivos CSS
gulp.task('copyCSS', async function () {
  gulp.src('src/css/*.css').pipe(gulp.dest('dist/css'));
});

//Otimizar imagens
gulp.task('imageMin', async () =>
  gulp.src('src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'))
);

gulp.task('default', gulp.parallel(['copyHtml', 'copyCSS', 'imageMin']));

gulp.task('watch', function () {
  gulp.watch('src/*.html', gulp.series('copyHtml'));
  gulp.watch('src/css/*.css', gulp.series('copyCSS'));
  gulp.watch('src/images/*', gulp.series('imageMin'));
});
