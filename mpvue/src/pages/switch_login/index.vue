<!--
	切换登录方式页
-->
<template>
  <div class='switchLoginPage'>
    <img class='loginLogo' src="/static/images/user.png">
	<div class='sloganText'>我是slogan</div>
	<div class='loginTypeButton loginTypeButton1'>手机验证码登录注册</div>
	<div class='loginTypeButton loginTypeButton2'>微信用户一键登录</div>
	<div class='tips'>
		若您的微信手机号未注册，将为您直接注册，注册即视为同意 <span class='ruleLink'>《摩贝商机小秘书用户协议》</span> 
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

.loginLogo{
	width:200rpx;
	height:200rpx;
	margin-left:auto;
	margin-right:auto;
	border-radius: 50%;
	display: block;
	margin-top:100rpx;
}
.sloganText{
	text-align: center;
	margin-top:20rpx;
}
.loginTypeButton{
	width:300rpx;
	height:60rpx;
	line-height:60rpx;
	text-align: center;
	margin-top:20rpx;
	margin-left:auto;
	margin-right:auto;
	border-radius: 20rpx;
	border:1rpx solid #000000;
}
.tips{
	position: fixed;
	margin:auto;
	left:0;
	right:0;
	bottom:20rpx;
	width:650rpx;
	font-size:20rpx;
}
.ruleLink{
	color:blue
}
</style>
