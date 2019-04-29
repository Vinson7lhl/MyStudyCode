<!--
	发需求单-完善个人信息
-->
<template>
  <div class="completePrivateInfoPage">
    <!-- <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <div @click='jumpToIndex'>跳转到首页</div> -->
	<div class='headTitleMode'>填写您的联系资料</div>
	<div class='perInput pNameInput'>
		<span class='star'>*</span>
		<span class='labelName'>姓名</span>
		<input type="text" name='complete_name' id='complete_name' placeholder="请输入姓名"/>
	</div>
	<div class='perInput pNameInput'>
		<span class='star'>*</span>
		<span class='labelName'>联系方式</span>
		<input type="text" name='complete_phone' id='complete_phone' value='12288888888' disabled/>
	</div>
	<div class='perInput pNameInput'>
		<span class='labelName labelFirmName'>所属公司</span>
		<input type="text" name='complete_firm_name' id='complete_firm_name' placeholder="请输入公司名称"/>
	</div>
	<!--提交按钮-->
	<div class='submitButton'>下一步</div>
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
import store from '../../../store/store'
import api from '../../../service/index'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    jumpToIndex () {
      wx.switchTab({
        url: 'pages/index/main'
      })
    }
  },
  created () {
    console.log('Vue钩子函数：page-counter-created')
  },
  mounted () {
    console.log('Vue钩子函数：page-counter-mounted')
  },
  onShow () {
    console.log('wx钩子函数：page-counter-onShow')
    console.log(`接口名：${api.test1}`)
  }
}
</script>

<style>
page{
	background-color: #b4afaf;
}
.headTitleMode{
	padding-left:20rpx;
	padding-right:20rpx;
	height:60rpx;
	line-height:60rpx;
}
.perInput{
	overflow: hidden;
	background-color: #ffffff;
	height:80rpx;
	padding-left:20rpx;
	padding-right:20rpx;
}
.star{
	color:red;
	float:left;
	margin-top:20rpx;
	margin-right:16rpx;
}
.labelName{
	float:left;
	margin-top:20rpx;
	width:130rpx;
}
.labelFirmName{
	margin-left:30rpx;
}
.perInput input{
	float:left;
	width:400rpx;
	border:0;
	margin-top:20rpx;
	padding-left:20rpx;
}
.pNameInput{
	border-bottom: 1rpx solid #b4afaf;
}

.submitButton{
	width:600rpx;
	height:60rpx;
	line-height: 60rpx;
	text-align: center;
	background-color: #000000;
	border-radius: 10rpx;
	color:#ffffff;
	margin-top:100rpx;
	margin-left:auto;
	margin-right:auto;
}
</style>
