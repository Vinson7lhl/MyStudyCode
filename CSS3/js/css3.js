'use strict';
/**
 * Created by lihonglei_yf on 2015/6/10.
 */

 /**
  * 实际来说这里并没有进行检查重复键值
  */
var wrongObj={
    'name':'lhl',
    age:20,
    // 'name':'jj'
}
$(function()
{
    var a={};
    var i=0;
    while(i<10)
    {
        a[i]=i*1;
        i++;
    }
    var x={a:1,"b":2,"c":3};
    console.log(x);
    console.log("window.innerWidth-高级，视口："+window.innerWidth);
    console.log("window.outerWidth-高级，窗口："+window.outerWidth);
    console.log("document.body.clientWidth-低级，视口："+document.body.clientWidth);
    console.log("document.documentElement.clientWidth-低级，窗口："+document.documentElement.clientWidth);

    $(".content_2").mCustomScrollbar({

        scrollInertia:150

    });
    $("body").mCustomScrollbar({

        scrollInertia:150

    });
});