/**
 * Created by lihonglei_yf on 2015/7/31.所有插件源代码
 */
/*
两种扩展插件的方法：第一个是类级别，即调用时是：$.XXX(),第二个是jQuery对象级别：$("选择器").XXX
 $.extend({……});
 $.fn.extend({……});
 */
(function($){
    $.fn.extend({
        moveLi:function(options){
            var defaults={//定义默认值
                animate_padding:20,
                hoverColor:"#000000"
            };
            //将options对象覆盖defaults默认值
            var op=$.extend(defaults,options);
            return this.each(function()//这里就算没有return也可以运行
            {
                var obj_li=$(this);
                obj_li.hover(
                    function(){
                        obj_li.css({"color":op.hoverColor,"padding-left":op.animate_padding,"background-color":"#ffffff"});
                },
                    function(){
                        obj_li.css({"color":"#ffffff","padding-left":0,"background-color":"#000000"});
                    });
            });
        },
        scroll:function()
        {
            var outer=$(this);
            console.log(outer);
            var inner=outer.find("div").eq(0);
            var copy=outer.find("div").eq(1);
            copy.html(inner.html());
            var move;
            var xunhuan;
            move=function()
            {
                if(inner.width()<=outer.scrollLeft())
                {
                    outer.scrollLeft(outer.scrollLeft()-inner.width());
                }
                else
                {
                    outer.scrollLeft(outer.scrollLeft()+1);
                }
            }
            xunhuan=setInterval(move,50);
            outer.hover(function()
            {
                clearInterval(xunhuan);
            },
            function(){
                xunhuan=setInterval(move,50);
            });
        }
    });
    $.extend({
        "scrollTopButton":function()
        {
            $("<span></span>").addClass("plugin_cd_top").attr("title","回到顶部").appendTo("body");
            var offset = 300,
            //定义当距离顶部多高时，按钮变透明
            offset_opacity = 1200,
            //滚动到顶部需要的毫秒数
            scroll_top_time =500,
            //获得按钮的jQuery对象
            $back_to_top = $('.plugin_cd_top');
            //判定超过窗口的溢出距离，然后添加相应的类/删除相应的类
            $(window).on("scroll",function(){
                console.log("触发");
                ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
                if( $(this).scrollTop() > offset_opacity ) {
                    $back_to_top.addClass('cd-fade-out');
                }
            });

            //滚动的动画
            $back_to_top.on('click', function(event){
                $('body').animate({
                        scrollTop: 0
                    }, scroll_top_time
                );
            });
        },
        "others":function(){alert("aaa");}
    });


    /*-----------------------------选项卡切换插件------------------------*/
    /*!
     * strength.js
     * Original author: @aaronlumsden
     * Further changes, comments: @aaronlumsden
     * Licensed under the MIT license
     */
        var pluginName = "tabulous",
            defaults = {
                effect: 'scale'
            };

        // $('<style>body { background-color: red; color: white; }</style>').appendTo('head');

        function Plugin( element, options )
        {
            this.element = element;
            this.$elem = $(this.element);
            this.options = $.extend( {}, defaults, options );
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }

        Plugin.prototype = {

            init: function() {

                var links = this.$elem.find('a');
                var firstchild = this.$elem.find('li:first-child').find('a');
                var lastchild = this.$elem.find('li:last-child').after('<span class="tabulousclear"></span>');

                //初始化时将非第一块内容增加隐藏类
                if (this.options.effect == 'scale') {
                    tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescale');//not(':first').not(':first')
                } else if (this.options.effect == 'slideLeft') {
                    tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideleft');
                } else if (this.options.effect == 'scaleUp') {
                    tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescaleup');
                } else if (this.options.effect == 'flip') {
                    tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideflip');
                }

                var firstdiv = this.$elem.find('#tabs_container');//内容tabs_container   div
                var firstdivheight = firstdiv.find('div:first').height();

                var alldivs = this.$elem.find('div:first').find('div');//选项卡3个内容的div

                alldivs.css({'position': 'absolute','top':'40px'});

                firstdiv.css('height',firstdivheight+'px');

                firstchild.addClass('tabulous_active');
                /*以上均为初始化的状态*/

                links.bind('click', {myOptions: this.options}, function(e) {
                    e.preventDefault();
                    var $options = e.data.myOptions;
                    var effect = $options.effect;
                    var mythis = $(this);//获取点击的a标签
                    var thisform = mythis.parent().parent().parent();//获取#tabs的对象
                    var thislink = mythis.attr('href');
                    firstdiv.addClass('transition');//#tabs_container增加了类transition
                    links.removeClass('tabulous_active');//所有的<a>都删除tabulous_active
                    mythis.addClass('tabulous_active');//点击的<a>增加了tabulous_active
                    thisdivwidth = thisform.find('div'+thislink).height();

                    if (effect == 'scale')
                    {
                        alldivs.removeClass('showscale').addClass('make_transist').addClass('hidescale');
                        thisform.find('div'+thislink).addClass('make_transist').addClass('showscale');
                    }
                    else if (effect == 'slideLeft')
                    {
                        alldivs.removeClass('showleft').addClass('make_transist').addClass('hideleft');
                        thisform.find('div'+thislink).addClass('make_transist').addClass('showleft');//('div'+thislink)==("div#tabs-2")
                    }
                    else if (effect == 'scaleUp')
                    {
                        alldivs.removeClass('showscaleup').addClass('make_transist').addClass('hidescaleup');
                        thisform.find('div'+thislink).addClass('make_transist').addClass('showscaleup');
                    }
                    else if (effect == 'flip')
                    {
                        alldivs.removeClass('showflip').addClass('make_transist').addClass('hideflip');
                        thisform.find('div'+thislink).addClass('make_transist').addClass('showflip');
                    }
                    firstdiv.css('height',thisdivwidth+'px');
                });
            },

            yourOtherFunction: function(el, options) {
                // some logic
            }
        };

        // A really lightweight plugin wrapper around the constructor,
        // preventing against multiple instantiations
        $.fn[pluginName] = function ( options ) {
            return this.each(function () {//this指向：$("#tabs1234")  return返回的是什么？？
                new Plugin( this, options );//this指向：DOM
            });
        };

})(jQuery);

$(function(){


    //滑动标签
    $("#plugin01 li").moveLi({
        animate_padding:50,
        hoverColor:'#222222'
    });


    //置顶按钮
    $.scrollTopButton();

    //滚动
    var element={"direction":"left"};
    $("#outer").scroll();
    console.log($("#outer").size());

    //tab
    $('#tabs').tabulous({
        effect: 'scale'
    });

    $('#tabs2').tabulous({
        effect: 'slideLeft'
    });

    $('#tabs3').tabulous({
        effect: 'scaleUp'
    });

    $('#tabs4').tabulous({
        effect: 'flip'
    });

});


