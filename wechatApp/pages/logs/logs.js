//logs.js
const util = require('../../utils/util.js')
const app = getApp();

Page({
  // 初始元数据
  data: {
    logs: ['log1', 'log2', 'log3'],
    log_data: '日志数据',
    global_num:app.globalData.globalNum
  },
  /**
   * ----------------------------------------------------钩子函数列表--------------------------------------------------------
   */
  onLoad: function () {
    console.log('page/logs：onLoad，页面加载完，由于此页面是tab级别的页面，所以会且只会第一次进入此页面触发一次，再次进入（包括后退进入）都不会触发，')
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  // 此钩子函数适合放异步请求，每次进入此页面都要冲洗初始化一次
  onShow: function () {
    console.log('page/logs：onShow,页面显示完，每次从后台切回此页面，或者再次进入此页面都会触发一次');
	console.log('当前的路径是：' + this.route)
  },
  onReady: function () {
    console.log('page/logs：onReady,页面渲染完');
  },
  onHide: function () {
    console.log('page/logs：onHide,页面隐藏，切换到后台触发一次');
  },
  onUnload: function () {
    console.log('page/logs：onUnload,页面卸载(后退触发)');
  },
  /**
   * ----------------------------------------------------事件触发列表--------------------------------------------------
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
  /**
   * 从这里也可以看出，如果将请求放在这里也是可以的，每次点击必会触发一次,和onShow相同
   */
  onTabItemTap(obj) {
    console.log('onTabItemTap，切换tab时触发……')
  },
  /**
   * ----------------------------------------------------自定义事件----------------------------------------------------
   */
  fixData() {
    this.setData({ log_data: '日志数据2' });
  },
  addGlobalNum () {
    this.setData({ global_num: ++app.globalData.globalNum });;
    console.log(app.globalData.globalNum)
  },
  goToList() {
    wx.navigateTo({
      url: '/pages/list/list',
      success: (result) => {

      },
      fail: () => { },
      complete: () => { }
    });
  }
})
