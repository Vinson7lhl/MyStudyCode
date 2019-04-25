<!--
	切换登录方式页
-->
<template>
  <div class='searchPage'>
	<!--搜索区域-->
	<div class='searchInputMode'>
		<div class='leftSearch'>
			<img class='searchIcon' src="/static/images/user.png">
			<input class='searchInput' placeholder='请输入商品或CAS号' type="text">
		</div>
		<div class='cancelSearch'>取消</div>
	</div>
	<!--历史搜索区域-->
	<div class='searchedHistoryListArea'>
		<div class='searchedHistoryListHead'>
			<div class='historyTitle'>历史搜索</div>
			<div class='clearHistoryButton'> <img class='trashCanIcon' src="/static/images/user.png">清空历史搜索</div>
		</div>
		<div class='historyList'>
			<div class='perTabName'>商品1</div>
			<div class='perTabName'>乙醇H3T4C3</div>
			<div class='perTabName'>非诚勿扰</div>
			<div class='perTabName'>欧阳锋</div>
			<div class='perTabName'>香蕉你个芭乐</div>
			<div class='perTabName'>加缪-《局外人》</div>
		</div>
	</div>
	<!--搜索结果区域-->
	<div class='resultListArea'>
		<div class='resultTips'>
			已为您找到 <span class='resultListNum'>1</span> 条结果
		</div>
		<!--无结果-->
		<div class='noResult'>
			<img class='noResultIcon' src="/static/images/user.png">
			<div class='noResultText'>Oops! 没有搜到相关内容</div>
		</div>
		<!--有结果-->
		<div class='resultListFrame'>
			<div class='perListData'>
				<div class='perline line1'>
					<span class='pLabel'>采购商品</span>
					<span class='pName'>这里是化合物名字</span>
					<span class='pDate'>15分钟前</span>
				</div>
				<div class='perline line2'>
					<div class='pLabel'>数量：</div>
					<div class='pName'>233吨</div>
				</div>
				<div class='perline line3'>
					<div class='pLabel'>剩余报价 <span class='quotedPriceTimes'>5</span> </div>
					<div class='quotePriceButton'>报价</div>
				</div>
			</div>
			<div class='perListData'>
				<div class='perline line1'>
					<span class='pLabel'>采购商品</span>
					<span class='pName'>这里是化合物名字</span>
					<span class='pDate'>15分钟前</span>
				</div>
				<div class='perline line2'>
					<div class='pLabel'>数量：</div>
					<div class='pName'>233吨</div>
				</div>
				<div class='perline line3'>
					<div class='pLabel'>剩余报价 <span class='quotedPriceTimes'>5</span> </div>
					<div class='quotePriceButton'>报价</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },

  methods: {
  },
  created() {
  },
  mounted() {
  },
  onShow() {
  }
};
</script>

<style scoped>
.searchPage{
	padding-left:20rpx;
	padding-right:20rpx;
}
.searchInputMode{
	overflow: hidden;
	margin-top:20rpx;
}
.leftSearch{
	width:620rpx;
	height:70rpx;
	padding-left:20rpx;
	border-radius: 15rpx;
	overflow: hidden;
	float:left;
	border:1rpx solid #b4afaf;
}
.searchIcon{
	float:left;
	width:50rpx;
	height:50rpx;
	margin-top:12rpx;
}
.searchInput{
	width:400rpx;
	border:0;
	margin-left:20rpx;
	float:left;
	margin-top:16rpx;
}
.cancelSearch{
	float:right;
	margin-top:20rpx;
}
.searchedHistoryListArea{
	margin-top:100rpx;
}
.searchedHistoryListHead{
	overflow: hidden;
	height:30rpx;
	line-height: 30rpx;
}
.historyTitle{
	float:left;
}
.clearHistoryButton{
	float:right;
	font-size: 20rpx;
}
.trashCanIcon{
	width: 30rpx;
	height: 30rpx;
	float:left;
	color:#b4afaf;
}
.historyList{
	margin-top:40rpx;
}
.perTabName{
	padding:2rpx 10rpx;
	display: inline-block;
	border:1rpx dashed #b4afaf;
	border-radius: 15rpx;
	margin-right:30rpx;
	margin-bottom:30rpx;
}
.resultListFrame{
	margin-top:50rpx;
}
.perListData{
	width:100%;
	height:190rpx;
	margin-bottom:20rpx;
	border:1rpx solid #b4afaf;
	border-radius: 20rpx;
	padding:20rpx;
	overflow: hidden;
}
.perline{
	overflow: hidden;
	margin-bottom:5rpx;
}
.pLabel{
	padding-right:20rpx;
	float:left;
}
.pName{
	width:400rpx;
	display: inline-block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.pDate{
	float:right;
	color:#b4afaf;
}
.quotePriceButton{
	width:150rpx;
	height:40rpx;
	float:right;
	line-height: 40rpx;
	background-color: #000000;
	color:#ffffff;
	text-align: center;
	border-radius: 10rpx;
}
.noResultIcon{
	display: block;
	width:350rpx;
	height:350rpx;
	margin-left:auto;
	margin-right:auto;
	margin-bottom:20rpx;
}
.noResultText{
	color:#b4afaf;
	text-align: center;
}
</style>
