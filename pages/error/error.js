var app = getApp()
Page({
    data: {
        logo: "../../image/logo.png",
        info: "您不是我们的合作商户..",
        weixin: app.globalData.wxNumber,
        mobile: app.globalData.phoneNumber
    },

    onLoad: function (options) {
        if (options.info) {
            this.setData({
                info: options.info
            });
        }
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