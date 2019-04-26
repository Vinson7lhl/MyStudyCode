<!--
	发需求单
-->
<template>
  <div class="releaseRequirementPage">
    <!-- <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <div @click='jumpToIndex'>跳转到首页</div> -->
	<div class='headTitleMode'>填写采购信息</div>
	<div class='inputArea'>
		<!--产品名、cas号-->
		<div class='inputZone'>
			<!--左边星星-->
			<span class='star'>*</span>
			<!--中间表单-->
			<div class='inputs'>
				<div class='perInput pNameInput'>
					<span class='labelName'>产品名</span>
					<input type="text" name='p_name' id='p_name'/>
				</div>
				<div class='perInput pCASInput'>
					<span class='labelName'>CAS号</span>
					<input type="text" name='p_cas' id='p_cas'/>
				</div>
			</div>
			<!--右边提示-->
			<div class='tipsButton'>2选1</div>
		</div>
		<!--采购数量-->
		<div class='inputZone purchaseNumZone'>
			<span class='star'>*</span>
			<span class='labelName'>采购数量</span>
			<input type="text" name='p_num' id='p_num'/>
			<span class='seperateLine'>|</span>
			<span class='unit'>吨</span>
		</div>
		<!--详情描述-->
		<div class='inputZone detailDes'>
			<span class='labelName desLabelName'>详情描述</span>
			<textarea name="detail_des" id="detail_des"></textarea>
		</div>

	</div>
	<!--供应商信息-->
	<div class='headTitleMode'>供应商联系我的信息</div>
	<div class='supplierInfo'>
		<div class='perInfo'>
			<span class='supplierKey supplierName'>姓名：</span>
			<span class='supplierValue supplierNameValue'>二狗子</span>
		</div>
		<div class='perInfo'>
			<span class='supplierKey supplierPhone'>手机号：</span>
			<span class='supplierValue supplierPhoneValue'>18888888888</span>
		</div>
		<div class='perInfo'>
			<span class='supplierKey supplierFirm'>所属公司：</span>
			<span class='supplierValue supplierFirmValue'>暂未填写</span>
		</div>
		<img class='editorIcon' src="/static/images/user.png" alt="">
	</div>
	<!--提交按钮-->
	<div class='submitButton'>提交</div>
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
import store from '../../store/store'
import api from '../../service/index'

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
.releaseRequirementPage{
	/* padding-left:20rpx;
	padding-right:20rpx; */
}
.headTitleMode{
	padding-left:20rpx;
	padding-right:20rpx;
	height:60rpx;
	line-height:60rpx;
}
.inputArea{
	overflow: hidden;
	background-color: #ffffff;
}
.inputZone{
	overflow: hidden;
	padding-left:20rpx;
	padding-right:20rpx;
}
.purchaseNumZone{
	border-bottom: 1rpx solid #b4afaf;
	border-top: 1rpx solid #b4afaf;
	height:72rpx;
}
.star{
	color:red;
	float:left;
	margin-top:16rpx;
	margin-right:16rpx;
}
.inputs{
	float:left;
}
.perInput{
	overflow: hidden;
}
.perInput input{
	float:left;
	width:400rpx;
	border:0;
	margin-top:10rpx;
	padding-left:20rpx;
}
.pNameInput{
	border-bottom: 1rpx solid #b4afaf;
}
.labelName{
	float:left;
	margin-top:16rpx;
}
.tipsButton{
	float:right;
	width:100rpx;
	text-align: center;
	height:40rpx;
	line-height: 40rpx;
	font-size: 18rpx;
	border-radius: 10rpx;
	border:1rpx solid #b4afaf;
	margin-top:46rpx;
}
.seperateLine{
	float:left;
	margin-top:16rpx;
	margin-right:20rpx;
}
.unit{
	float:left;
	margin-top:16rpx;
}
#p_num{
	width:480rpx;
	float:left;
	padding-left:20rpx;
	margin-top:16rpx;
}
.desLabelName{
	padding-left:30rpx;
}
#detail_des{
	float:left;
	border:0;
	margin-left:16rpx;
	width:540rpx;
	height:200rpx;
	margin-bottom:20rpx;
}
.supplierInfo{
	padding-left:20rpx;
	padding-right:20rpx;
	padding-top:20rpx;
	padding-bottom:20rpx;
	background-color: #ffffff;
	position: relative;
}
.perInfo{
	height:50rpx;
	line-height: 50rpx;
}
.editorIcon{
	width:40rpx;
	height:40rpx;
	position: absolute;
	z-index: 1;
	right:20rpx;
	top:20rpx;
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
