//logs.js
const util = require('../../utils/util.js')

Page({
  // 初始元数据
  data: {
  },
  /**
   * ----------------------------------------------------钩子函数列表---------------------------------------------------------------
   */
  onLoad: function () {
    console.log('page/list：onLoad，页面加载完，会且只会第一次进入此页面触发一次，再次进入不会触发')
  },
  // 此钩子函数适合放异步请求，每次进入此页面都要冲洗初始化一次
  onShow: function () {
    console.log('page/list：onShow,页面显示完，每次从后台切回此页面，或者再次进入此页面都会触发一次');
    console.log('当前的路径是：'+this.route)
  },
  onReady: function () {
    console.log('page/list：onReady,页面渲染完');
  },
  onHide: function () {
    console.log('page/list：onHide,页面隐藏，切换到后台触发一次');
  },
  onUnload: function () {
    console.log('page/list：onHide,页面卸载');
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
  goBack () {
    wx.navigateBack();
  }
})
