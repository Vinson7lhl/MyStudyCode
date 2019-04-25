<!--
	切换登录方式页
-->
<template>
  <div class='loginPage'>
	<!--登录区域-->
    <div class='normalLogin'>
		<div class='inputMode userPhoneMode'>
			<div class='label'>输入手机号</div>
			<input class='inputArea phoneInputArea' type="number" maxlength="11" placeholder="(新号码自动注册)">
		</div>
		<div class='inputMode userVerifyCodeMode'>
			<div class='label'>输入验证码</div>
			<input class='inputArea phoneInputArea' type="number" maxlength="4">
			<div class='countNum'>获取验证码</div>
		</div>
		<div class='submitButton'>登录</div>
	</div>
	<!--微信一键登录区域-->
	<img class='wechatLogo' src="/static/images/user.png">
	<div class='wechatLoginText'>微信用户一键登录</div>
	<div class='tips'>
		若您的微信手机号未注册，将为您直接注册，注册即视为同意 <span class='ruleLink'>《摩贝商机小秘书用户协议(含隐私政策)》</span> 
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
.normalLogin{
	padding-left:10rpx;
	padding-right:10rpx;
}
.inputMode{
	height:100rpx;
	border-bottom:1rpx solid #000000;
	overflow: hidden;
	padding-left:10rpx;
	padding-right:10rpx;
}
.label{
	float:left;
	margin-right:10rpx;
	margin-top:32rpx;
}
.inputArea{
	float:left;
	border:0;
	margin-right:10rpx;
	margin-top:32rpx;
}
.countNum{
	float:right;
	width:150rpx;
	height:50rpx;
	line-height: 50rpx;
	font-size: 18rpx;
	border-radius: 25rpx;
	text-align: center;
	margin-top:28rpx;
	background-color:black;
	color:#fff;
}
.submitButton{
	width:600rpx;
	height:80rpx;
	line-height:80rpx;
	margin-left:auto;
	margin-right:auto;
	margin-top:50rpx;
	border-radius: 40rpx;
	text-align: center;
	background-color: blue;
	color:#ffffff;
}
.disSubmitButton{
	background-color: #b4afaf;
	color:#ffffff;
}
.wechatLogo{
	width:100rpx;
	height:100rpx;
	display: block;
	border-radius: 50%;
	margin-top:500rpx;
	margin-left:auto;
	margin-right:auto;
}
.wechatLoginText{
	text-align: center;
	margin-top:20rpx;
}
.tips{
	width:650rpx;
	margin-left:auto;
	margin-right:auto;
	margin-top:50rpx;
	line-height: 30rpx;
	font-size:20rpx;
}
.ruleLink{
	color:blue
}
</style>
