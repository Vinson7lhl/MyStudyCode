'use strict';

var gulp = require("gulp"),
	babel = require("gulp-babel"),
	useref = require('gulp-useref');
//将es6编译为es5；
gulp.task("es6",function(){
	//src的路径原则是：**/*.js的文件路径结构会完全复制（编译后）到Es5_src文件夹下的同样的文件夹结构
    return gulp.src("./Es6_src/**/*.js")
        .pipe(babel({
            presets:["es2015"]
		}))
        .pipe(gulp.dest("./Es5_src"));
        // .pipe(webpack({
	    //   entry: {
	    //   	main:"./Es5_src/module2.js",
	    //   	test:"./Es5_src/test.js"
	    //   },
	    //   output: {
	    //     filename: '[name].js',
	    //   }
	    // }))
	    // .pipe(gulp.dest("bind_js"));
});
//默认任务监控js，有变化就编译
gulp.task("default",function(){
	gulp.watch("Es6_src/**/*.js",["es6"]);
});
