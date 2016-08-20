var gulp = require('gulp'),
    Q = require('q'),
    rimraf = require('rimraf'),
    watch = require('gulp-watch');

/*gulp.task('clean', function (cb) {
    return rimraf('./angualr/lib/', cb);
});

gulp.task('copy:lib', ['clean'], function () {
    var libs = [
        "@angular",
        "systemjs",
        "core-js",
        "zone.js",
        "reflect-metadata",
        "rxjs"
    ];

    var promises = [];

    libs.forEach(function (lib) {
        var defer = Q.defer();
        var pipeline = gulp
            .src('node_modules/' + lib + '')
            .pipe(gulp.dest('./angualr/lib/' + lib));

        pipeline.on('end', function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });

    return Q.all(promises);
});*/

var source = './scripts/app',
    destination = './AngularTemplate';

gulp.task('watch-folder', function () {
    gulp.src(source + '/*.html', { base: source })
      .pipe(watch(source, { base: source }))
      .pipe(gulp.dest(destination));
});