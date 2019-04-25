<!--
	首页
-->
<template>
  <div class='indexPage'>
	<!--假跳转按钮-->
	<navigator url='../switch_login/main'>登录切换页</navigator>
	<navigator url='../login/main'>登录</navigator>
    <!--搜索按钮模块-->
    <div class='searchButton' @click='jumpToSearchPage'>
      <div class='iconAndText'>
        <img class='SearchButtonIcon' src="/static/images/user.png" alt="">
        <span class='SearchButtonText'>搜索商机</span>
      </div>
    </div>
    <!-- <div class="userinfo" @click="bindViewTap">
      <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover"
      >
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover">

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div> -->

    <!-- <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div> -->
    <!-- <button open-type="getPhoneNumber" @bindgetphonenumber="getPhoneNumber">获取手机号</button> -->
    <!-- <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model">
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy">
    </form> -->

    <!-- <a href="/pages/requirement/main" class="counter">去往Vuex示例页面</a> -->

    <!-- <div class="all">
      <div class="left"></div>
      <div class="right"></div>
    </div> -->
    
    <!-- <scroll-view scroll-x class='hengScroll'>
      <span class='p1'>啤酒</span>
      <span class='p1'>火腿肠</span>
      <span class='p1'>康师傅方便面</span>
      <span class='p1'>瓜子</span>
      <span class='p1'>花生民</span>
      <span class='p1'>哈尔滨红肠</span>
      <span class='p1'>卤鸡腿</span>
      <span class='p1'>mini松花蛋</span>
      <span class='p1'>Apple</span>
      <span class='p1'>可口可乐</span>
      <span class='p1'>大碗面一桶</span>
      <span class='p1'>八宝粥</span>
    </scroll-view>-->

    <!--选项卡模块-->
    <div class="tabTeam">
      <div class="perTab" :class="{perTabActive:currentTabIndex === index}" v-for="(tab,index) in switchTabs" :key="index" @click="switchTab(index)">{{tab}}
        <span class='bottomLine'></span>
      </div>
      <span class='beginnerInstructionBook' @click='jumpToInsBookPage'>新手秘籍>></span>
    </div>
    <!--全部商机列表-->
    <div v-show="currentTabIndex === 0" class="tabContent">
		<!--遍历列表-->
		<div class='businessOpportunities baseBlock' @click='jumpToBusinessDetailPage'>
			<div class='blockLine line1'>
				<span class='blockTitle'>采购商品</span>
				<span class='blockProductName'>中文化合物名称</span>
				<span class='blockReleaseTime'>5分钟前</span>
			</div>
			<div class='blockLine line2'>
				<span class='blockTitle'>数量：</span>
				<span class='blockProductNum'>无</span>
			</div>
			<div class='blockLine line3'>
				<div class='canOfferTime'>剩余报价<span class='times'>5</span>次</div>
				<span class='blockGrabButton'>抢</span>
			</div>
		</div>
		<div class='businessOpportunities baseBlock'>
			<div class='blockLine line1'>
				<span class='blockTitle'>采购商品</span>
				<span class='blockProductName'>中文化合物名称</span>
				<span class='blockReleaseTime'>5分钟前</span>
			</div>
			<div class='blockLine line2'>
				<span class='blockTitle'>数量：</span>
				<span class='blockProductNum'>无</span>
			</div>
			<div class='blockLine line3'>
				<div class='canOfferTime'>剩余报价<span class='times'>5</span>次</div>
				<span class='blockGrabButtoned'>抢</span>
			</div>
		</div>
		<div class='businessOpportunities baseBlock'>
			<div class='blockLine line1'>
				<span class='blockTitle'>采购商品</span>
				<span class='blockProductName'>中文化合物名称</span>
				<span class='blockReleaseTime'>5分钟前</span>
			</div>
			<div class='blockLine line2'>
				<span class='blockTitle'>数量：</span>
				<span class='blockProductNum'>无</span>
			</div>
			<div class='blockLine line3'>
				<div class='canOfferTime'>剩余报价<span class='times'>5</span>次</div>
				<span class='blockDisGrabButton'>已下架</span>
			</div>
		</div>
		<!--列表为空-->
		<div class='emptyListTips'>
			<img src="/static/images/user.png" class='emptyListTipsImg' alt="">
			<div class='emptyListTipsText'>正在为您配置商机中……</div>
		</div>
    </div>
    <!--我的订阅列表-->
    <div v-show="currentTabIndex === 1" class="tabContent">
		<!--横向滚动-->
		<div class="scrollBox">
			<scroll-view class="hengScroll" :scroll-x="true">
				<span class="p1">啤酒</span>
				<span class="p1">火腿肠</span>
				<span class="p1">康师傅方便面</span>
				<span class="p1">瓜子</span>
				<span class="p1">花生民</span>
				<span class="p1">哈尔滨红肠</span>
				<span class="p1">卤鸡腿</span>
				<span class="p1">mini松花蛋</span>
				<span class="p1">Apple</span>
				<span class="p1">可口可乐</span>
				<span class="p1">大碗面一桶</span>
				<span class="p1">八宝粥</span>
			</scroll-view>
		</div>
		<!--遍历列表-->
		<div class='businessOpportunities baseBlock'>
			<div class='blockLine line1'>
				<span class='blockTitle'>采购商品</span>
				<span class='blockProductName'>中文化合物名称</span>
				<span class='blockReleaseTime'>5分钟前</span>
			</div>
			<div class='blockLine line2'>
				<span class='blockTitle'>数量：</span>
				<span class='blockProductNum'>无</span>
			</div>
			<div class='blockLine line3'>
				<div class='canOfferTime'>剩余报价<span class='times'>5</span>次</div>
				<span class='blockGrabButton'>抢</span>
			</div>
		</div>
		<div class='businessOpportunities baseBlock'>
			<div class='blockLine line1'>
				<span class='blockTitle'>采购商品</span>
				<span class='blockProductName'>中文化合物名称</span>
				<span class='blockReleaseTime'>5分钟前</span>
			</div>
			<div class='blockLine line2'>
				<span class='blockTitle'>数量：</span>
				<span class='blockProductNum'>无</span>
			</div>
			<div class='blockLine line3'>
				<div class='canOfferTime'>剩余报价<span class='times'>5</span>次</div>
				<span class='blockGrabButtoned'>抢</span>
			</div>
		</div>
		<div class='businessOpportunities baseBlock'>
			<div class='blockLine line1'>
				<span class='blockTitle'>采购商品</span>
				<span class='blockProductName'>中文化合物名称</span>
				<span class='blockReleaseTime'>5分钟前</span>
			</div>
			<div class='blockLine line2'>
				<span class='blockTitle'>数量：</span>
				<span class='blockProductNum'>无</span>
			</div>
			<div class='blockLine line3'>
				<div class='canOfferTime'>剩余报价<span class='times'>5</span>次</div>
				<span class='blockDisGrabButton'>已下架</span>
			</div>
		</div>
		<!--列表为空-->
		<div class='emptyListTips'>
			<img src="/static/images/user.png" class='emptyListTipsImg' alt="">
			<div class='emptyListTipsText'>VIP会员用户可以订阅商机</div>
			<div class='jumpToVipInstructions'>了解详情</div>
		</div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
// import mb_request from '@/service/index';

export default {
  data() {
    return {
      motto: "从page传递到组件中的值-咩哈哈",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      switchTabs: ["全部商机", "我的订阅"],
      currentTabIndex: 0
    };
  },

  components: {
    card
  },

  methods: {
    getPhoneNumber (e) {
      console.log(e.detail.errMsg)
      console.log(e.detail.iv)
      console.log(e.detail.encryptedData)
    },
    // bindViewTap() {
    //   const url = "../logs/main";
    //   if (mpvuePlatform === "wx") {
    //     mpvue.switchTab({ url });
    //   } else {
    //     mpvue.navigateTo({ url });
    //   }
    // },
    switchTab(index) {
      this.currentTabIndex = index;
      if (index === 0) {
        console.log("全部商机");
      } else {
        console.log("我的订阅");
      }
    },
    // 跳转到搜索页面
    jumpToSearchPage() {
      console.log('跳转到搜索页')
      wx.navigateTo({
        url: '/pages/search_product/main',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
      });
	},
	jumpToBusinessDetailPage() {
		wx.navigateTo({
        url: '/pages/business_detail/main',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
      });
	},
    jumpToInsBookPage() {
      console.log('跳转到新手秘籍页')
      wx.navigateTo({
        url: '/pages/static_pages/newer_instruction/main',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
      });
    }
  },
  created() {
    // let app = getApp()
    console.log("Vue钩子函数：tab-index-created");
  },
  mounted() {
    console.log("Vue钩子函数：tab-index-mounted");
  },
  onShow() {
    console.log("wx钩子函数：tab-index-onShow");
    let resp = this.fly('https://devyd.molbase.cn/shop/store/topSearch','get',{token:1});
    console.log('resp',resp)
    // .then(function(res) {
    //   console.log('首页测试返回的数据：')
    //   console.log(res)
    // })
  }
};
</script>

<style scoped>
.indexPage{
  box-sizing: border-box;
  padding-left:40rpx;
  padding-right:40rpx;
}

.searchButton{
  height:60rpx;
  line-height:60rpx;
  width:100%;
  border:1rpx solid #000000;
  border-radius: 10rpx;
}
.iconAndText{
  text-align: center;
}
.SearchButtonIcon {
  width:40rpx;
  height:40rpx;
  padding-right:20rpx;
  vertical-align: middle;
}
.SearchButtonText{
  font-size:18rpx;
}
.tabTeam {
  width:100%;
  overflow: hidden;
  margin-top:20rpx;
  margin-bottom:50rpx;
}
.perTab {
  box-sizing: border-box;
  float: left;
  position:relative;
  width: 150rpx;
  height:50rpx;
  text-align: center;
  line-height: 40rpx;
}
.bottomLine{
  position:absolute;
  z-index: 1;
  margin-left:auto;
  margin-right:auto;
  left:0;
  right:0;
  width:50rpx;
  bottom:0rpx;
  border-bottom:4rpx solid #ffffff;
  transition: all 0.3s;
}
.perTabActive .bottomLine{
  border-bottom:4rpx solid #000000;
}
.beginnerInstructionBook{
  float:right;
  font-size: 20rpx;
  margin-top:4rpx;
}
.baseBlock{
  width:100%;
  padding:10rpx;
  border:2rpx solid #4e4e4e;
  border-radius:10rpx;
  margin-top:20rpx;
}
.blockLine {
  overflow: hidden;
  width:100%;
}
.blockTitle {
  float:left;
  margin-right:10rpx;
}
.blockProductName{
  float:left;
  width:300rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.blockReleaseTime{
  float:right;
  color:#4e4e4e;
}
.canOfferTime{
  float:left;
}
.times{
  color:#4e4e4e;
}
.blockGrabButton {
  float:right;
  width:160rpx;
  height:40rpx;
  text-align: center;
  border-radius: 10rpx;
  background-color: #4e4e4e;
  border:1rpx solid #4e4e4e;
  color:#ffffff;
}
.blockGrabButtoned{
  float:right;
  width:160rpx;
  height:40rpx;
  text-align: center;
  border-radius: 10rpx;
  border:1rpx solid #4e4e4e;
  background-color: #ffffff;
  color:#000000;
}
.blockDisGrabButton{
  float:right;
  width:160rpx;
  height:40rpx;
  text-align: center;
  border-radius: 10rpx;
  border:1rpx solid #b4afaf;
  background-color: #b4afaf;
  color:#ffffff;
}
.line2{
  margin-top:20rpx;
}
.line3{
  margin-top:20rpx;
}




.emptyListTipsImg{
	width:100rpx;
	height:100rpx;
	display: block;
	margin-left:auto;
	margin-right:auto;
}
.emptyListTipsText{
	font-size:18rpx;
	text-align: center;
}
.jumpToVipInstructions{
	font-size:18rpx;
	text-align: center;
}
/* .userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}*/

.hengScroll {
  height: 60rpx;
  /* width:750rpx; */
}
.p1 {
  display: inline-block;
  padding: 5rpx;
  margin-right: 10rpx;
  border: 1rpx dashed #4e4e4e;
  border-radius: 5rpx;
}
.scrollBox {
  width: 100%;
  height: 60rpx;
  overflow: hidden;
  background: #fff;
  white-space: nowrap;
}
</style>
