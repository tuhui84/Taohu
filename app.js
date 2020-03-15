let Net = require('./utils/Net');
let util = require('./utils/util');
let HSLoginHandler = require('./ctrl/Handler/HSLoginHandler');

App({
  // 生命周期函数--监听小程序初始化 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function (options) {

    util.lg("app.js ---onLaunch---" + JSON.stringify(options));
    const updateManager = wx.getUpdateManager()
    updateManager.onUpdateReady(function () {
      updateManager.applyUpdate()
    })

    Net.listen(this, [
      new HSLoginHandler(),
    ]);
  },

  // 生命周期函数--监听小程序显示 当小程序启动， 或从后台进入前台显示， 会触发 onShow
  onShow: function () {
    util.lg("app.js ---onShow---");
  },

  // 生命周期函数--监听小程序隐藏 当小程序从前台进入后台， 会触发 onHide
  onHide: function () {
    util.lg("app.js ---onHide---");
  },

  // 错误监听函数 当小程序发生脚本错误， 或者 api 调用失败时， 会触发 onError 并带上错误信息
  onError: function (msg) {
    util.lg("app.js ---onError---" + msg);
  },

  // 全局数据保存
  globalData: {
    // 用户ids
    ids: undefined,
    // TODO:联系微信号码 手机号码
    // version: "1.0.2",//审核
    version: "1.0.1",//线上
    wxNumber: "16621629328",
    phoneNumber: "16621629328",
    loginInfo: undefined,
    mainUrl: "https://central.plugsever.com/CentralService/mini/fans/login",
    versionCheckUrl: "https://central.plugsever.com/CentralService/mini/fans/check",
  }
})