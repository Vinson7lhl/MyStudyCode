/*!
 * strength.js
 * Original author: @aaronlumsden
 * Further changes, comments: @aaronlumsden
 * Licensed under the MIT license
 */
(function ( $, window, document, undefined ) {

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

})( jQuery, window, document );


