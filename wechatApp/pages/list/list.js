//logs.js
const util = require('../../utils/util.js')

Page({
  // 初始元数据
  data: {
    public_header:{
      header_name:'我的产品列表'
    },
    innerText:[
      {name:'黄飞鸿'},
      {name:'叶问'},
      {name:'黄麒英'},
      {name:'鬼脚七'},
      {name:'霍元甲'}
    ]
  },
  /**
   * ----------------------------------------------------钩子函数列表---------------------------------------------------------------
   */
  onLoad: function () {
    console.log('page/list：onLoad，页面加载完，通过路由进入此页面每次都会触发一次，')
  },
  // 此钩子函数适合放异步请求，每次进入此页面都要冲洗初始化一次
  onShow: function () {
    console.log('page/list：onShow,页面显示完，通过路由进入此页面每次都会触发一次/每次从后台切回此页面');
    console.log('当前的路径是：'+this.route)
  },
  onReady: function () {
    console.log('page/list：onReady,页面渲染完');
  },
  onHide: function () {
    console.log('page/list：onHide,页面隐藏/切换到后台触发一次');
  },
  onUnload: function () {
    console.log('page/list：onUnload,页面卸载(后退触发)');
  },
  /**
   * ----------------------------------------------------事件触发列表---------------------------------------------------------------
   */
  onPullDownRefresh () {
    console.log('onPullDownRefresh，用户在下拉……')
  },
  onReachBottom () {
    console.log('onReachBottom，用户在上拉触底……')
  },
  onPageScroll () {
    console.log('onPageScroll，用户在滚动……')
  },
  onResize () {
    console.log('onResize，页面尺寸改变时触发……')
  },
  onTabItemTap () {
    console.log('onTabItemTap，切换tab时触发……')
  },
  /**
   * ----------------------------------------------------自定义事件---------------------------------------------------------------
   */
  goBack (event) {
    console.log('event')
    console.log(event)
    // wx.navigateBack();
    // 特别对tabBar跳转时的处理，若用 navigateTo 则会跳转失败
    wx.switchTab({
      url: '/pages/logs/logs',
      success: (result)=>{
        console.log('跳转成功')
      },
      fail: ()=>{
        console.log('跳转失败')
      },
      complete: ()=>{}
    });
  },
  onFatherEvent (event) {
    console.log('子 ===> 父,数据为event.detail')
    console.log(event.detail.forFather)
  }
})