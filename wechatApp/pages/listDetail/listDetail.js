//logs.js
const util = require('../../utils/util.js')

Page({
  // 初始元数据
  data: {
  },
  /**
   * ----------------------------------------------------钩子函数列表---------------------------------------------------------------
   */
  onLoad() {
    console.log('page/listDetail：onLoad，页面加载完，通过路由进入此页面每次都会触发一次，')
  },
  // 此钩子函数适合放异步请求，每次进入此页面都要冲洗初始化一次
  onShow() {
    console.log('page/listDetail：onShow,页面显示完，通过路由进入此页面每次都会触发一次/每次从后台切回此页面');
    console.log('当前的路径是：' + this.route)
  },
  onReady() {
    console.log('page/listDetail：onReady,页面渲染完');
  },
  onHide() {
    console.log('page/listDetail：onHide,页面隐藏/切换到后台触发一次');
  },
  onUnload() {
    console.log('page/listDetail：onUnload,页面卸载(后退触发)');
  },
  /**
   * ----------------------------------------------------事件触发列表---------------------------------------------------------------
   */
  onPullDownRefresh() {
    console.log('onPullDownRefresh，用户在下拉……')
  },
  onReachBottom() {
    console.log('onReachBottom，用户在上拉触底……')
  },
  onPageScroll() {
    console.log('onPageScroll，用户在滚动……')
  },
  onResize() {
    console.log('onResize，页面尺寸改变时触发……')
  },
  onTabItemTap() {
    console.log('onTabItemTap，切换tab时触发……')
  },
  /**
   * ----------------------------------------------------自定义事件---------------------------------------------------------------
   */
})
