/*---------------------------------------------------------------------------------------------------------
    获取gulp和插件变量（gulp基于3.9.1版本，若为4+则以下配置会报错）
---------------------------------------------------------------------------------------------------------*/
// 获取gulp
let gulp = require('gulp')
// 获取del删除文件插件
let del = require('del');
// 获取js的连接，和压缩
let concat = require('gulp-concat')
let uglify = require('gulp-uglify')
// 获取css的连接，和压缩
let concatCss = require('gulp-concat-css')
let uglifyCss = require('gulp-uglifycss')

/*---------------------------------------------------------------------------------------------------------
    任务列表
---------------------------------------------------------------------------------------------------------*/
// 清空最终的js
gulp.task('clean-js', function (cb) {
    del([
      'temp/main.min.js'
    ], cb);
});
// 清空最终的css
gulp.task('clean-css', function (cb) {
    del([
      'temp/main.min.css'
    ], cb);
});
// 处理js，合并，检查，压缩
gulp.task('build-js', function() {
    gulp.src([
        'dev/js/public.js',
        'dev/js/index.js',
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('temp'))
});

// 处理css，合并，检查，压缩
gulp.task('build-css', function() {
    gulp.src([
        'dev/css/public.css',
        'dev/css/index.css',
    ])
    .pipe(concatCss('main.min.css'))
    .pipe(uglifyCss())
    .pipe(gulp.dest('temp'))
});

/*---------------------------------------------------------------------------------------------------------
    最终build
---------------------------------------------------------------------------------------------------------*/
gulp.task('build-all', ['clean-js','clean-css','build-js', 'build-css',],function() {});

/*---------------------------------------------------------------------------------------------------------
    动态监控watch
---------------------------------------------------------------------------------------------------------*/