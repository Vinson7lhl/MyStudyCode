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



    Date.prototype.getFullWeek = function(){
        var jan1, w, d = new Date(this);
        d.setDate(d.getDate()+4-(d.getDay()||7));		// Set to nearest Thursday: current date + 4 - current day number, make Sunday's day number 7
        jan1 = new Date(d.getFullYear(),0,1);		// Get first day of year
        w = Math.ceil((((d-jan1)/86400000)+1)/7);		// Calculate full weeks to nearest Thursday
        return {y: d.getFullYear(), w: w };
    };
    //Returns ISO 8601 week number
    Date.prototype.getWeek = function(){ 
        return this.getFullWeek().w; 
    };
    var getWeeksInYear = function(y){ 
        return new Date(y,11,28).getFullWeek().w; 
    };
    var test_array = ['6','7','1','2','3','4','5','6','7','1'];
    var point_array = [1,8];
    // for (var i=0;i<test_array.length;i++) {
    //     if (test_array[i]==='7') {
    //         point_array.push(i)//[0,2,9]
    //         temp
    //         start_time = i;
    //         console.log(test_array[0]+'-'+test_array[i])
    //     }
    // }
    for (var i=0;i<point_array.length;i++){
        if (point_array[i]===0) {
            console.log(test_array[point_array[i]]+'-'+test_array[point_array[i]]);
        } else {
            if (point_array[i]+1 === test_array.length){
                console.log(test_array[point_array[i]+1]+'-'+test_array[point_array[i]+1]);
            } else {
                if (point_array[i+1]) {
                    console.log(test_array[point_array[i]+1]+'-'+test_array[point_array[i+1]]);
                } else {
                    console.log(test_array[point_array[i]+1]+'-'+test_array[test_array.length-1]);
                }
                
            }
        }
	}
	
	let wrapper_dom = document.getElementsByClassName('wrapper')[0]
	$('.boom').on('click',function() {
		console.log('我被点击了！')
	})
	console.log(wrapper_dom.innerHTML)
	wrapper_dom.innerHTML = '<span class="boom">这里是插入的dom</span>'
});