$(function(){
	// 定义距离窗口顶部多高的时候才显示按钮
	var offset = 300,
		//定义当距离顶部多高时，按钮变透明
		offset_opacity = 1200,
		//滚动到顶部需要的毫秒数
		scroll_top_time =500,
		//获得按钮的jQuery对象
		$back_to_top = $('.cd-top');

	//判定超过窗口的溢出距离，然后添加相应的类/删除相应的类
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//滚动的动画
	$back_to_top.on('click', function(event){//jQuery建议在1.7后用on代替bind
		event.preventDefault();//禁止掉原来<a></a>的功能,因为如果在前端页面增加了href="具体地址"，那么在点击后会发生：置顶——跳转
		$('body,html').animate({
			scrollTop: 0
		 	}, scroll_top_time
		);
	});

});