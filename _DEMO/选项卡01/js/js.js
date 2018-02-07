window.onload = function() {
    var oDiv = document.getElementById("tab");//获取最外面的div层的dom
    var oLi = oDiv.getElementsByTagName("div")[0].getElementsByTagName("li");//获取所有标签li的dom
    var aCon = oDiv.getElementsByTagName("div")[1].getElementsByTagName("div");//获取所有内容的dom
    var timer = null;


    for (var i = 0; i < oLi.length; i++) {
        //console.log(oLi[i].index);
        oLi[i].index = i;
        oLi[i].onclick = function() {
            show(this.index);//调用show(num)方法
        }
    }


    function show(a)
    {
        index = a;
        var alpha = 0;
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
            aCon[j].className = "";
            aCon[j].style.opacity = 0;
            aCon[j].style.filter = "alpha(opacity=0)";
        }
        oLi[index].className = "cur";
        clearInterval(timer);
        //底下的代码清晰地显示了用纯js，如果做到jQuery的show()方法的淡入淡出效果，就是循环调用alpha修改其值
        timer = setInterval(function() {
            alpha += 2;
            /*这句话的意思是：如果alpha>100了；那么alpha是100；相当于：if（alpha>100）aopha=100;&&并不仅仅只会返回true或者false；在JavaScript权威指南79有详细说明。*/
            alpha > 100 && (alpha = 100);
            aCon[index].style.opacity = alpha / 100;
            aCon[index].style.filter = "alpha(opacity=" + alpha + ")";
            alpha == 100 && clearInterval(timer);
        },
        5)
    }
}