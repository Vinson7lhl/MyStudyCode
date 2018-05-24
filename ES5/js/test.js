    /*如果一个函数参数特别多，无法记忆*/
    function arrayCopy(from,from_start,to,to_start,index)
    {
        //from:被copy的数组；from_start:数组copy的起始位置；to：目标数组；to_start目标数组的起始位置；index：copy的个数
    }

    var fromArray=[1,2,3,4,5];
    var toArray=[];
    var args_easy={
        from:fromArray,
        to:toArray,
        from_start:1,
        to_start:0
    };
    function easyCopy(args)
    {
        arrayCopy(args.from,args.from_start||0,args.to,args.to_start||0)
    }
    easyCopy(args_easy);

    (function(){
        console.log("直接执行的匿名函数");
    }());

    function Person(name,age){
        this.name=name;
        this.age=age;
    }
    Person.prototype.info=function(){
        return "姓名是："+this.name+",年龄是："+this.age;
    }
    /*或者是写成：
    * Person.prototype=
    * {
    *   info:function()
    *   {
    *      return "姓名是："+this.name+",年龄是："+this.age;*
    *   }
    * }
    * */
    var p1=new Person("lee",10);
    console.log(p1.info());
    var httpSrc="http://lihongleiURL?a=1&b=2";
    var urlArgs=function(){
        var args={};

    }





$(function() {
    //单体模式
    var myApplication = (function(){
        var name = 'Chris';
        var age = '34';
        var status = 'single';
        return {
            createMember:function(){
                console.log(name,age,status);
            }
        }
    })();
    myApplication.createMember();
    console.log(myApplication);

    //jquery deferred对象
    var def=$.Deferred();
    $(".TestDefered").on("click",function(){
        def.resolve("点击成功！");
    });
    def.done(function(data){
        console.log("获取的点击数据："+data);
    });

    // 测试Error
    $('.errorTrigger').on('click',function(){
        try{
            // 某些可能发生错误的代码
            /**
             * …………
             * 然后抛出错误
             * throw new Error('some_message');抛出标准错误，标准错误只能通过err.message获取
             * throw anyData;抛出自定义错误
             */
            throw {errorMessage:'类型错误',errorCode:500};
        }
        catch(errorObj){
            console.log(errorObj);
            console.log('发生错误：'+errorObj.errorMessage+',错误代码：'+errorObj.errorCode);
        }
        finally{
            console.log('总是执行的代码');
        }
        
    });



    //头像跟着鼠标旋转
    var x=0;
    var y=0;
    var pi=Math.PI;
    //设置区域方位
    var area={
        //上-下，极限
        up_down:{start:Math.tan(pi*5/12),end:Math.tan(pi*7/12)},
        //左-右，升
        left_right:{start:Math.tan(-pi/12),end:Math.tan(pi/12)},

        //左上 升
        left_up1:{start:Math.tan(pi*3/12),end:Math.tan(pi*5/12)},
        left_up2:{start:Math.tan(pi/12),end:Math.tan(pi*3/12)},
        //右上 升
        right_up1:{start:Math.tan(pi*7/12),end:Math.tan(pi*9/12)},
        right_up2:{start:Math.tan(pi*9/12),end:Math.tan(pi*11/12)},
    };
    //获取dom列表
    var show_pic_dom=$(".positionXY");  
    //获取每一个dom的位置
    function getDistance(domList){
        var distantArray=new Array(domList.length);
        for(var i=0;i<distantArray.length;i++){
            distantArray[i]={x:domList.eq(i).offset().left+100,y:domList.eq(i).offset().top+100}
        }
        return distantArray;
    }
    var distancesArray=getDistance(show_pic_dom);

    var left_distance=show_pic_dom.offset().left+100;
    var top_distance=show_pic_dom.offset().top+100;

    $(document).on('mousemove',function(event){
        x=event.clientX;
        y=event.clientY;
        for(var k=0;k<distancesArray.length;k++){
            var top_distance=distancesArray[k].y;
            var left_distance=distancesArray[k].x;


            //如果鼠标在上面
            if(((y-top_distance)/(x-left_distance)>area.up_down.start && (y-top_distance)<0 )|| ((y-top_distance)/(x-left_distance)<area.up_down.end && (y-top_distance)<0 )){
                show_pic_dom.eq(k).css({"background-position":"0px -200px"});
            }
            //如果鼠标在下面
            else if(((y-top_distance)/(x-left_distance)>area.up_down.start && (y-top_distance)>0 )|| ((y-top_distance)/(x-left_distance)<area.up_down.end && (y-top_distance)>0 )){
                show_pic_dom.eq(k).css({"background-position":"0px -400px"});
            }
            //如果鼠标在左面
            else if((y-top_distance)/(x-left_distance)>area.left_right.start && (y-top_distance)/(x-left_distance)<area.left_right.end && (x-left_distance)<0 ){
                show_pic_dom.eq(k).css({"background-position":"0px -600px"});
            }
            //如果鼠标在右面
            else if((y-top_distance)/(x-left_distance)>area.left_right.start && (y-top_distance)/(x-left_distance)<area.left_right.end && (x-left_distance)>0 ){
                show_pic_dom.eq(k).css({"background-position":"0px -800px"});
            }


            //如果在左上1区
            else if((y-top_distance)/(x-left_distance)>area.left_up1.start && (y-top_distance)/(x-left_distance)<area.left_up1.end && (x-left_distance)<0 && (y-top_distance)<0){
                show_pic_dom.eq(k).css({"background-position":"0px -1000px"});
            }
            //如果在左上2区
            else if((y-top_distance)/(x-left_distance)>area.left_up2.start && (y-top_distance)/(x-left_distance)<area.left_up2.end && (x-left_distance)<0 && (y-top_distance)<0){
                show_pic_dom.eq(k).css({"background-position":"0px -1200px"});
            }
            //如果在右上1区
            else if((y-top_distance)/(x-left_distance)>area.right_up1.start && (y-top_distance)/(x-left_distance)<area.right_up1.end && (x-left_distance)>0 && (y-top_distance)<0){
                show_pic_dom.eq(k).css({"background-position":"0px -1400px"});
            }
            //如果在右上2区
            else if((y-top_distance)/(x-left_distance)>area.right_up2.start && (y-top_distance)/(x-left_distance)<area.right_up2.end && (x-left_distance)>0 && (y-top_distance)<0){
                show_pic_dom.eq(k).css({"background-position":"0px -1600px"});
            }


            //如果在右下1区
            else if((y-top_distance)/(x-left_distance)>area.left_up2.start && (y-top_distance)/(x-left_distance)<area.left_up2.end && (x-left_distance)>0 && (y-top_distance)>0){
                show_pic_dom.eq(k).css({"background-position":"0px -1800px"});
            }
            //如果在右下2区
            else if((y-top_distance)/(x-left_distance)>area.left_up1.start && (y-top_distance)/(x-left_distance)<area.left_up1.end && (x-left_distance)>0 && (y-top_distance)>0){
                show_pic_dom.eq(k).css({"background-position":"0px -2000px"});
            }
            //如果在左下1区
            else if((y-top_distance)/(x-left_distance)>area.right_up2.start && (y-top_distance)/(x-left_distance)<area.right_up2.end && (x-left_distance)<0 && (y-top_distance)>0){
                show_pic_dom.eq(k).css({"background-position":"0px -2200px"});
            }
            //如果在左下2区
            else if((y-top_distance)/(x-left_distance)>area.right_up1.start && (y-top_distance)/(x-left_distance)<area.right_up1.end && (x-left_distance)<0 && (y-top_distance)>0){
                show_pic_dom.eq(k).css({"background-position":"0px -2400px"});
            }
            else{
            show_pic_dom.eq(k).css({"background-position":"0px 0px"});
            }
        }
    });
});

