var app = getApp()
let util = require('../../utils/util');

Page({
  data: {
    url: "www.baidu.com",
    title: "关注的店铺",
  },
  onLoad: function (options) {
    var _self = this;

    if (options && options.param) {
      let paramStr = decodeURIComponent(options.param);
      let param = JSON.parse(paramStr);
      _self.setData({
        url: param.url,
        title: param.title,
      })
    }
  },

  onReady: function () {
    var _self = this
    wx.setNavigationBarTitle({
      title: _self.data.title
    })
  },

  //用户点击右上角分享
  onShareAppMessage: function () {
    util.lg('点击分享');
    return {
      title: '分享顾客助手',
      path: 'pages/followshop/followshop',
      success: function (res) {
        util.lg('成功', res)
      }
    }
  },
})