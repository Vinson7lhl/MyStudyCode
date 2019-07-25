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
// 获取copy插件，复制库文件、图片、视频文件
let copy = require('gulp-copy')
// 获取browser-sync，同步刷新工具
let browser = require('browser-sync').create()

// 获取watch插件
let watch = require('gulp-watch')

/*---------------------------------------------------------------------------------------------------------
    任务列表
---------------------------------------------------------------------------------------------------------*/

// （单独）处理js，合并，检查，压缩
gulp.task('build-js', function() {
    del('temp/main.min.js')
    gulp.src([
        'dev/js/public.js',
        'dev/js/index.js',
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('temp'))
})

// （单独）处理css，合并，检查，压缩
gulp.task('build-css', function() {
    del('temp/main.min.css')
    gulp.src([
        'dev/css/public.css',
        'dev/css/index.css',
    ])
    .pipe(concatCss('main.min.css'))
    .pipe(uglifyCss())
    .pipe(gulp.dest('temp'))
})

// 单独处理库js文件
gulp.task('build-util-js', function() {
    del([
        'temp/util/*.js'
    ]);
    gulp.src('dev/js/util/*.js')
    .pipe(gulp.dest('temp/util'))
})

// 处理img
gulp.task('build-img', function(cb) {
    // 先清空图片文件
    del('temp/img/*.*')
    // 复制所有图片到指定目录
    gulp.src('dev/img/*.*')
    .pipe(gulp.dest('temp/img'))
})

// 处理video
gulp.task('build-video', function() {
    // 先清空video文件
    del('temp/video/*.*')
    // 复制所有video到指定目录
    gulp.src('dev/video/*.*')
    .pipe(gulp.dest('temp/video'))
})

/*---------------------------------------------------------------------------------------------------------
    build
---------------------------------------------------------------------------------------------------------*/
gulp.task('build-all', ['build-js', 'build-util-js','build-css','build-img','build-video'],function() {});

/*---------------------------------------------------------------------------------------------------------
    动态监控watch（对每一类单独监听）
---------------------------------------------------------------------------------------------------------*/
gulp.task('watch-all',function() {
    // 监听css
    watch('dev/css/*.css',function() {
        gulp.run('build-css')
    })
    // 监听js
    watch('dev/js/*.js',function() {
        gulp.run('build-js')
    })
    // 监听库js
    watch('dev/js/util/*.js',function() {
        gulp.run('build-util-js')
    })
    // 监听图片
    watch('dev/img/*.*',function() {
        gulp.run('build-img')
    })
    // 监听视频
    watch('dev/video/*.*',function() {
        gulp.run('build-video')
    })
    // 监听最终打包文件夹temp和html文件变化
    browser.watch("*.html").on("change", browser.reload)
    browser.watch("temp/**/*.*").on("change", browser.reload)
    browser.init({
        server: "./",
        // proxy: "localhost:8081"
    })
})
/*---------------------------------------------------------------------------------------------------------
    默认（监听all）
---------------------------------------------------------------------------------------------------------*/
gulp.task('default', ['watch-all'], function() {
});