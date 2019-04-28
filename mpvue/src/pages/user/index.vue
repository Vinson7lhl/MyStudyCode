<!--
	用户中心
-->
<template>
  <div classs='userCenterPage'>
      <!-- <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
      <block v-for="(item, index) in imgUrls" :key="index" >
        <swiper-item>
          <image :src="item" mode="scaleToFill"></image>
        </swiper-item>
      </block>
    </swiper>

    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul> -->

	<!--头部登录信息-->
	<div class='userLoginInfo'>
		<img src="/static/images/user.png" class='loginHeadImg' alt="">
		<div class='loginInfos'>
			<div class='loginName'>大鹏展翅 欢迎回来!</div>
			<div class='loginPhone'>13566666666</div>
		</div>
		<img src="/static/images/user.png" class='arrowIcon1 jumpToIcon' alt="">
	</div>
	<!--控制面板-->
	<div class='mainFrame'>
		<!--控制面板-->
		<div class='userControlCenter'>
			<div class='userInfo'>
				<div class='userRealName'>姓名：红烧鸡腿</div>
				<div class='userRealFirm'>所属公司：上海开封菜有限公司哈哈哈哈哈</div>
				<img class='infoEditorIcon' src="/static/images/user.png" alt="">
			</div>
			<div class='threeMainFunctions'>
				<div class='perFunction myPurchases'><img class='functionIcon' src="/static/images/user.png" alt="">我的采购</div>
				<div class='perFunction myOffers'><img class='functionIcon' src="/static/images/user.png" alt="">我的报价</div>
				<div class='perFunction myOrders'><img class='functionIcon' src="/static/images/user.png" alt="">我的订单</div>
			</div>
			<div class='myVIP'>
				<img class='tipsIcon' src="/static/images/user.png" alt=""> 我的会员
				<span class='openVIP'>开通会员</span>
			</div>
		</div>

		<!--意见反馈，关于商务小秘书-->
		<div class='suggestions'>
			<div class='suggestionMode feedback'>
				<img class='tipsIcon' src="/static/images/user.png">意见反馈
				<img class='arrowIcon2' src="/static/images/user.png">
			</div>
			<div class='suggestionMode aboutUs'>
				<img class='tipsIcon' src="/static/images/user.png" alt="">关于商务小秘书
				<img class='arrowIcon2' src="/static/images/user.png">
			</div>
		</div>
		<!--客服电话-->
		<div class='serviceInfo'>
			客服电话<br/>
			122-3333-4444 (工作日 9:00-18:00)
		</div>
	</div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: [],
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ]
    }
  },

  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
    console.log('Vue钩子函数：tab-logs-created')
  },
  mounted () {
    console.log('Vue钩子函数：tab-logs-mounted')
  },
  onShow () {
    console.log('wx钩子函数：page-logs-onShow')
  }
}
</script>

<style>
page{
	background-color: #efefef;
}
.userLoginInfo{
	padding-left:20rpx;
	padding-right:20rpx;
	background-color: #ffffff;
	overflow: hidden;
	height:250rpx;
}
.loginHeadImg{
	float:left;
	margin-top:50rpx;
	width:150rpx;
	height:150rpx;
	border:1rpx solid #efefef;
	border-radius: 50%;
}
.loginInfos{
	float:left;
	margin-left:20rpx;
	margin-top:80rpx;
	line-height:50rpx;
}
.jumpToIcon{
	width:50rpx;
	height:50rpx;
	float:right;
	margin-top:100rpx;
}
.mainFrame{
	padding-left:20rpx;
	padding-right:20rpx;
	margin-top:20rpx;
}
.userControlCenter,.suggestions,.serviceInfo{
	padding:20rpx;
	border-radius:20rpx;
	background-color: #ffffff;
	overflow: hidden;
}
.userInfo{
	position: relative;
	line-height: 50rpx;
	border-bottom:1rpx solid #efefef;
}
.infoEditorIcon{
	position:absolute;
	right:20rpx;
	top:20rpx;
	z-index: 1;
	width:50rpx;
	height:50rpx;
}
.threeMainFunctions{
	display: flex;
	justify-content:space-around;
	text-align: center;
	margin-top:50rpx;
	border-bottom:1rpx solid #efefef;
	padding-bottom:50rpx;
}
.functionIcon{
	display: block;
	margin-bottom:10rpx;
	width:150rpx;
	height:150rpx;
	border:1rpx solid #efefef;
	border-radius: 50%;
	line-height: 0;
	font-size: 0;
}
.myVIP{
	overflow: hidden;
	height:50rpx;
	line-height: 50rpx;
	margin-top:20rpx;
}
.tipsIcon{
	float:left;
	width:45rpx;
	height:45rpx;
	border-radius: 50%;
	margin-right:10rpx;
	margin-top:2rpx;
}
.openVIP{
	float:right;
	color:red;
}
.suggestions{
	margin-top:20rpx;
	padding-bottom:10rpx;
}
.suggestionMode img{
	margin-top:8rpx;
}
.suggestionMode{
	overflow: hidden;
	height:65rpx;
	line-height: 60rpx;
}
.feedback{
	border-bottom:1rpx solid #efefef;
}
.aboutUs{
	/* margin-top:20rpx; */
}
.arrowIcon2{
	float:right;
	width:45rpx;
	height:45rpx;
}
.serviceInfo{
	margin-top:20rpx;
	text-align: center;
}
</style>
