<!--
	商机详情页
-->
<template>
	<div class="businessDetailPage">
		<div class='topDetails'>
			<!--商机编号-->
			<div class='detailMode businessCode'>
				<span class='labelText'>商机编号</span>
				<span class='labelValue codeNum'>12345678901</span>
			</div>
			<!--采购商品-->
			<div class='detailMode purchaseGoods'>
				<span class='labelText'>采购商品</span>
				<span class='labelValue goodsName'>中文化合物名称（CAS:102-0-33）</span>
			</div>
			<!--公司类型-->
			<div class='detailMode firmType'>
				<span class='labelText'>个人/公司</span>
				<span class='labelValue firmTypeValue'>个人</span>
			</div>
			<!--数量-->
			<div class='detailMode purchaseNum'>
				<span class='labelText'>数量</span>
				<span class='labelValue purchaseNumValue'>1000吨/无</span>
			</div>
			<!--详情描述-->
			<div class='desGoods'>
				<span class='labelText labelTextDes'>详情描述</span>
				<span class='labelValue desTextValue'>详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述详情描述</span>
			</div>
		</div>
		<!--报价按钮-->
		<div class='battleOp'>
			<div class='battleButton'>抢报价机会</div>
			<div class='connectButton'><img src="/static/images/user.png" alt="">	联系采购商</div>
			<div class='overButton'>已下架</div>
			<div class='releasedDate'>发布时间 2019-09-01 21:11:11</div>
		</div>
		<!--供应商报价列表-->
		<div class='quotedPriceList'>
			<!--报价列表头-->
			<div class='detailMode quotedPriceHead'>
				<span class='labelText quotedPriceHeadText'>供应商报价记录</span>
				<span class='labelValue'>(0/5)</span>
			</div>
			<!--报价列表 遍历-->
			<div class='perQuotedPrice'>
				<span class='orderNum'>1</span>
				<div class='firmPic'>
					<img class='firmLogo' src="/static/images/user.png" alt="">
					<img class='firmTypeIcon' src="/static/images/v.png" alt="">
				</div>
				<div class='firmDetail'>
					<div class='firmName'>上海******哈哈</div>
					<div class='firmPhone'>122****2211</div>
				</div>
				<div class='quotedPriceDate'>
					2小时前
				</div>
			</div>
			<div class='perQuotedPrice'>
				<span class='orderNum'>1</span>
				<div class='firmPic'>
					<img class='firmLogo' src="/static/images/user.png" alt="">
					<img class='firmTypeIcon' src="" alt="">
				</div>
				<div class='firmDetail'>
					<div class='firmName'>上海******哈哈</div>
					<div class='firmPhone'>122****2211</div>
				</div>
				<div class='quotedPriceDate'>
					2小时前
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style>
.topDetails,.quotedPriceList{
	padding-left:10rpx;
	padding-right:10rpx;
	background-color: #ffffff;
}
.detailMode{
	padding-left:10rpx;
	padding-right:10rpx;
	height:70rpx;
	line-height: 70rpx;
}
.labelText{
	width:150rpx;
	display: inline-block;
}
.businessCode{
	border-bottom:1rpx solid #efefef;
}
.desGoods{
	padding-left:10rpx;
	padding-right:10rpx;
	padding-bottom:10rpx;
	overflow: hidden;
	margin-top:16rpx;
}
.labelTextDes{
	float:left;
}
.desTextValue{
	float:left;
	width:550rpx;
	text-align: left;
}
.battleOp{
	padding-bottom:50rpx;
	padding-top:50rpx;
	text-align: center;
}
.battleButton,.connectButton,.overButton{
	width:500rpx;
	height:70rpx;
	font-size:28rpx;
	line-height:70rpx;
	margin-left:auto;
	margin-right:auto;
	background-color: #000000;
	color:#ffffff;
	border-radius: 10rpx;
}
.connectButton img {
	width:50rpx;
	height:50rpx;
	vertical-align: middle;
	margin-right:10rpx;
}
.overButton{
	background-color: #b4afaf;
}
.releasedDate{
	font-size:18rpx;
	margin-top:20rpx;
}
.quotedPriceHead{
	padding-left:10rpx;
	padding-right:10rpx;
	border-bottom:1rpx solid #efefef;
}
.quotedPriceHeadText{
	width:210rpx;
}
.perQuotedPrice{
	overflow: hidden;
	padding-left:10rpx;
	padding-right:10rpx;
	height:150rpx;
	border-bottom:1rpx solid #efefef;
}
.orderNum{
	float:left;
	width:30rpx;
	height:30rpx;
	line-height:30rpx;
	border-radius: 50%;
	border:1rpx solid #000000;
	text-align: center;
	margin-top:58rpx;
}
.firmPic{
	width:100rpx;
	height:100rpx;
	border-radius: 50%;
	margin-top:26rpx;
	margin-left:10rpx;
	margin-right:10rpx;
	float:left;
	position: relative;
}
.firmLogo{
	width:100rpx;
	height:100rpx;
}
.firmTypeIcon{
	width:20rpx;
	height:20rpx;
	position: absolute;
	z-index: 1;
	right:0;
	bottom:0;
}
.firmDetail{
	float:left;
	margin-top:40rpx;
}
.quotedPriceDate{
	float:right;
	margin-top:62rpx;
}
/* page {
  background-color: #000000;
}  */
</style>
