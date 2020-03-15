let app = null;
let util = require('./util');

let HCLoginAction = require('../ctrl/Handler/HCLoginAction');
let WxInfoPromptHandler = require('../ctrl/Handler/WxInfoPromptHandler');

let eventListener = new Object;
let appListener = new Object;

class Net {

  /**
   * 上传资源文件
   * @param {*} url eg:img voice
   * @param {*} filePath 本地文件路径
   * @param {*} type 类型:image ..
   */
  static msgResouceUpload(url, filePath, success, fail) {
    wx.uploadFile({
      url: url,
      filePath: filePath,
      name: "file",
      method: 'POST',
      success: (res) => {
        util.lg("msgResouceUpload success..:" + res.data);
        try {
          var jsonObj = JSON.parse(res.data);
          if (jsonObj.error == 0) {
            let response = jsonObj.response;
            if (response && success) {
              success(response.media_id, response.url);
            }
          } else {
            util.lg("msgResouceUpload fail..");
            if (fail) {
              fail();
            }
          }
        } catch (e) {
          util.lg("msgResouceUpload fail..:" + e);
          if (fail) {
            fail();
          }
        }
      }
    });
  }

  /**
   * 下载资源文件
   * @param {*} url 
   * @param {*} cb 
   */
  static msgResouceDownload(url, cb) {
    wx.downloadFile({
      url: url,
      success(res) {
        if (res.statusCode === 200) {
          cb(res.tempFilePath);
        }
      }
    })
  }

  // 微信登录,获取用户信息
  static wxLogin(ids) {
    wx.login({
      success: res => {
        let code = res.code;
        wx.getUserInfo({
          success: res => {
            new HCLoginAction(app.globalData, res.userInfo, ids, code).action(function(data) {
                Net.messageHandle(data);
              },
              function(info) {
                WxInfoPromptHandler.fail(info);
              });
          },
          fail: () => {
            WxInfoPromptHandler.fail("登录失败(01)");
          }
        });
      }
    });
  }

  // 微信登录,获取用户信息
  static wxLoginVerity(ids) {
    wx.login({
      success: res => {
        new HCLoginAction(app.globalData, null, ids, res.code).action(function(data) {
            Net.messageHandle(data);
          },
          function(info) {
            WxInfoPromptHandler.fail(info);
          });
      }
    });
  }


  /**
   * 触发消息回调
   * @param {*} event 
   * @param {*} data 
   */
  static runEvent(event, data) {
    if (eventListener[event]) {
      let length = eventListener[event].length;
      for (let index = length - 1; index >= 0; --index) {
        let cb = eventListener[event][index];
        if (cb(data, event)) {
          break;
        }
      }
    } else {
      util.lg("runEvent:[" + event + "] data:[" + JSON.stringify(data) + "]!!no register event for run...");
    }
  }

  // 消息处理
  static messageHandle(data) {
    let event = data['type'];
    if (appListener[event]) {
      appListener[event].handle(app.globalData, data);
    } else {
      util.lg("messageHandle[" + event + "]:" + "appListener not register");
    }

    Net.runEvent(event, data);
  }

  // 注册app全局监听
  static listen(_app, options) {
    app = _app;
    for (let option of options) {
      appListener[option.type] = option;
    }
  }

  /**
   * 添加 消息回调
   * @param {} event 
   * @param {*} cb 
   */
  static addEventListener(event, cb) {
    if (!eventListener[event]) {
      eventListener[event] = new Array();
    }
    eventListener[event].push(cb);
  }

  /**
   * 移除 消息回调
   * @param {*} event 
   * @param {*} cb 
   */
  static removeEventListener(event, cb) {
    if (eventListener[event]) {
      let index = eventListener[event].indexOf(cb);
      eventListener[event].splice(index);
    }
  }
}

module.exports = Net;