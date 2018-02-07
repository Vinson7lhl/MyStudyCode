/**
 * Created by admin on 2015/11/30.
 */
define('../service/gruntTest2',[],function(){
	var g2={};
	g2.tan=function(){
		alert("这里是gruntTest2文件的依赖");
	}
	return g2;
});

/**
 * Created by admin on 2015/11/30.
 */
define('../service/gruntTest3',[],function(){
	var g3={};
	g3.tan=function(){
		alert("这里是gruntTest3文件的依赖");
	}
	return g3;
});

/**
 * Created by admin on 2015/11/30.
 */
require(["jQuery","../service/gruntTest2","../service/gruntTest3"], function ($,g2,g3){
	$(function(){
		g2.tan();
		g3.tan();
	});　　　　
});
define("gruntTest1", function(){});

(function() {
    var config = {
        paths: {
            jQuery: [
                '../../lib/jquery-3.0.0'
            ]
        },
        shim: {
            jQuery: {
                deps: [],
                exports: '$'
            }
        }
    };
    require.config(config);
})();
define("../main", function(){});

