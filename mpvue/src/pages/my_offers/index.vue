<!--
	我的报价页(和我的采购公用同一个component)
-->
<template>
  <div class="myOfferPage">
    <div class='perOffer'>
		<div class='perLine line1'>
			<span class='labelName'>商机编号</span>
			<span class='perValue perValueCode'>8888377377373</span>
			<span class='releasedTime'>16分钟前</span>
		</div>
		<div class='perLine line2'>
			<span class='labelName'>采购产品</span>
			<span class='perValue perValueP'>DDDA-HH-3323</span>
		</div>
		<div class='perLine line3'>
			<span class='labelName'>数量：</span>
			<span class='perValue perValueWeight'>32 毫克</span>
			<span class='releasedStatus'>已联系</span>
		</div>
	</div>
	<div class='perOffer'>
		<div class='perLine line1'>
			<span class='labelName'>商机编号</span>
			<span class='perValue perValueCode'>8888377377373</span>
			<span class='releasedTime'>16分钟前</span>
		</div>
		<div class='perLine line2'>
			<span class='labelName'>采购产品</span>
			<span class='perValue perValueP'>DDDA-HH-3323</span>
		</div>
		<div class='perLine line3'>
			<span class='labelName'>数量：</span>
			<span class='perValue perValueWeight'>32 毫克</span>
			<span class='releasedStatus'>已联系</span>
		</div>
	</div>
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
.myOfferPage{
	padding-left:20rpx;
	padding-right:20rpx;
}
.perOffer{
	background-color: #ffffff;
	border-radius: 20rpx;
	padding:20rpx;
	height:200rpx;
	margin-top:20rpx;
}
.perLine{
	overflow: hidden;
}
.labelName,.perValue{
	float:left;
	margin-top:10rpx;
}
.labelName{
	margin-right:20rpx;
}
.releasedTime,.releasedStatus{
	float:right;
	margin-top:10rpx;
}
</style>
