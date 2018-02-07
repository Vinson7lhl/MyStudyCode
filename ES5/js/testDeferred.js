$(function(){

    var $_button3=$("<button class='button3'>button3</button>");
    $_button3.on("click",function(){
        alert("button3被点击啦！");
    });
    $("body").append($_button3);

    /**
     * 两秒后输出：
     * 执行完成
     * 异步成功：返回的数据为——data
     */
    // function runAsync(){
    //     var def = $.Deferred();
    //     //做一些异步操作
    //     setTimeout(function(){
    //         console.log('执行完成');
    //         def.resolve('data');
    //     }, 2000);
    //     return def;
    // }
    // runAsync().done(function(data){
    //     console.log("异步成功：返回的数据为——"+data);
    // });


    /**
     * 直接输出：
     * 异步成功：返回的数据为——data
     * 2s后输出：
     * 执行完成
     */
    // function runAsync(){
    //     var def = $.Deferred();
    //     //做一些异步操作
    //     setTimeout(function(){
    //         console.log('执行完成');
    //     }, 2000);
    //     return def;
    // }
    // var this_deferred=runAsync();
    // this_deferred.resolve("data");
    // this_deferred.done(function(data){
    //     console.log("异步成功：返回的数据为——"+data);
    // });
    

    /**
     * 链式调用：
     * 执行完成1
     * 第1个defer返回的数据为——data1
     * 执行完成2
     * 第2个defer返回的数据为——data2
     */
    function runAsync1(){
        var def1 = $.Deferred();
        //做一些异步操作
        setTimeout(function(){
            def1.resolve("data1");
        }, 2000);
        return def1;
    }
    function runAsync2(){
        var def2 = $.Deferred();
        //做一些异步操作
        setTimeout(function(){
            def2.resolve("data2");
        }, 2000);
        return def2;
    }
    runAsync1()
            .then(function(data){
                console.log("第1个defer返回的数据为——"+data);
                return runAsync2();
            })
            .then(function(data){
                console.log("第2个defer返回的数据为——"+data);
            });
});