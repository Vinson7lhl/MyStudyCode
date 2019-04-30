<script>
export default {
  onShow(){
    // 调用微信的登录
    console.log('调用微信登录机制获取code')
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res)
          // // 发起网络请求
          // wx.request({
          //   url: "https://test.com/onLogin",
          //   data: {
          //     code: res.code
          //   }
          // });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
    // 调用微信的登录
    console.log('调用微信用户信息')
    wx.getUserInfo({
      success: (res) => {
          console.log(res)
      }
    })
    console.log('获取storage-code')
    console.log(wx.getStorageSync('mobile'))
  },
  created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs;
    if (mpvuePlatform === "my") {
      logs = mpvue.getStorageSync({ key: "logs" }).data || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync({
        key: "logs",
        data: logs
      });
    } else {
      logs = mpvue.getStorageSync("logs") || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync("logs", logs);
    }
  },
  log() {
    console.log(`log at:${Date.now()}`);
  }
};
</script>

<style>
/*------------------------------------------------------------------------------- 
Here is basic-style，基础样式,一般类名以  mb-a-b 为基本结构
-------------------------------------------------------------------------------*/
view {
  font-size: 28rpx;
  box-sizing: border-box;
  color: #000000;
}
page {
  background-color: #efefef;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
/*按钮渐变色,浅蓝-深蓝*/
.mb-gradient{
    background: -webkit-linear-gradient(left, #3da5fe , #556eff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #3da5fe, #556eff); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #3da5fe, #556eff); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #3da5fe , #556eff); /* 标准的语法（必须放在最后） */
}
/*按钮无效化*/
.mb-disabled-button{
	opacity: 0.5;
}
</style>
