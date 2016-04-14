var Elixir = require('laravel-elixir');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var react = require('gulp-react');
var concat = require('gulp-concat');

Elixir.extend("jsx", function(src, dest) {
    src = src || 'resources/assets/jsx/*.jsx';
    dest = dest || 'public/js';
    var destFileCheck = dest.indexOf('.js');
    var doConcat = false;

    if ( destFileCheck != -1 ) {
        doConcat = true;
        var separator = dest.lastIndexOf('/') + 1;

        var destFile = dest.substring(separator);
        dest = dest.substring(0, separator);
    }

    new Elixir.Task("jsx", function() {
        return gulp.src(src)
            .pipe(react())
            .pipe(gulpif(doConcat,concat(destFile)))
            .pipe(gulp.dest(dest));
    });
});
