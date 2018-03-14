const gulp = require('gulp');
const ts = require('gulp-typescript');
const clean = require('gulp-clean');

gulp.task('build', function() {
    const merge = require('merge2');
    const tsProject = ts.createProject('src/ngx-captcha/tsconfig.json');

    var tsResult = tsProject.src()
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js.pipe(gulp.dest(tsProject.config.compilerOptions.outDir))
    ]);
});

gulp.task('clean', function () {
    return gulp.src(['dist', 'dist'], { read: false })
        .pipe(clean())
});


