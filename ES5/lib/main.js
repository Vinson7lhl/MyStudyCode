require.config({
    paths : {
        "a" : "../js/test1"   
    }
})
/*
 运行后：先提示a函数中的代码，然后执行require中的回调函数“加载完毕”
 说明：	1、如果a没有写成define模式，则无法以对象形式注入，但a函数也被引用了并运行了，且是异步的，
 		所以无论require什么js文件都会被完整的载入，不一定非要写成define模式，而若写成define模式，一般都是此函数以一种封装的方式返回某个对象，
 		require(["a"],function(a){
    		a对象操作；
		})
 		2、
 * */
require(["a"],function(){
    alert("加载完毕！");
})