let app = getApp();
let Net = require('../../utils/Net');
let util = require('../../utils/util');
let WxInfoPromptHandler = require('../../ctrl/Handler/WxInfoPromptHandler');
let HCMiniVersionCheckAction = require('../../ctrl/Handler/HCMiniVersionCheckAction');

Page({
  data: {
    shops: undefined,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bAuthorizeShow: false,
    bVerify: true,
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {

    util.lg("followshop.js ---onLoad---" + JSON.stringify(options));
    if (options && options.ids) {
      app.globalData.ids = options.ids;
      util.lg("followshop.js ---onLoad options:" + app.globalData.ids);
    }
    wx.getSetting({
      success: (res) => {
        WxInfoPromptHandler.showLoading('正在初始化...');
        if (res.authSetting['scope.userInfo']) {
          Net.wxLogin(app.globalData.ids);
        } else {
          wx.setNavigationBarTitle({
            title: "顾客助手"
          });

          new HCMiniVersionCheckAction(app.globalData).action((data) => {
            wx.hideLoading();
            this.setData({
              bVerify: data.utype == 99,
              bAuthorizeShow: true,
            });
          });
        }
      }
    });

    Net.addEventListener('HSLogin', this.onNetCallBack);
  },

  onNetCallBack(data) {
    let type = data.type;
    switch (type) {
      case 'HSLogin':
        wx.hideLoading();
        if (data.utype == 99 && data.pageUrl) {
          let params = {
            url: data.pageUrl,
            title: "顾客助手",
          };
          var paramsStr = encodeURIComponent(JSON.stringify(params));
          wx.reLaunch({
            url: "../wbview/wbview?param=" + paramsStr
          });
          return true;
        }

        if (data.utype == 0 && data.pageUrl) {
          let params = {
            url: data.pageUrl,
            title: "顾客入店指南",
          };
          var paramsStr = encodeURIComponent(JSON.stringify(params));
          wx.reLaunch({
            url: "../wbview/wbview?param=" + paramsStr
          });
          return true;
        }

        if (app.globalData.loginInfo.followshops === undefined || app.globalData.loginInfo.followshops.length == 0) {
          wx.reLaunch({
            url: '../error/error?info=' + "您暂未关注任何店铺...",
          });
          return true;
        }

        if (app.globalData.loginInfo.followshops.length == 1) {
          let params = {
            url: app.globalData.loginInfo.followshops[0].url,
            title: app.globalData.loginInfo.followshops[0].name,
          };
          var paramsStr = encodeURIComponent(JSON.stringify(params));
          wx.reLaunch({
            url: "../wbview/wbview?param=" + paramsStr
          });
          return true;
        } else {
          this.setData({
            shops: app.globalData.loginInfo.followshops,
          });
        }
        return true;
    }
    return false;
  },

  bindGetUerInfoVerity:function(e){
    Net.wxLoginVerity(app.globalData.ids);
  },

  bindGetUserInfo: function (e) {
    //用户按了允许授权按钮
    if (e.detail.userInfo) {
      Net.wxLogin(app.globalData.ids);

      util.lg("用户的信息如下：");
      util.lg(e.detail.userInfo);
      this.setData({
        bAuthorizeShow: false
      });
      WxInfoPromptHandler.showLoading('正在初始化..');
    }
    //用户按了拒绝按钮
    else {
      WxInfoPromptHandler.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            util.lg('用户点击了“返回授权”');
          }
        }
      });
    }
  },

  goshop: function (e) {

    let params = {
      url: e.currentTarget.dataset.url,
      title: e.currentTarget.dataset.title,
    };
    var paramsStr = encodeURIComponent(JSON.stringify(params));
    util.autoNavigateOrRedirectTo({
      url: "../wbview/wbview?param=" + paramsStr
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