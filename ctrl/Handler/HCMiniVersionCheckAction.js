// 登录
let util = require('../../utils/util');
let HCMiniVersionCheck = require("../protocol/HCMiniVersionCheck");

class HCMiniVersionCheckAction {

    constructor(globalData) {
        this.url = globalData.versionCheckUrl;
        this.data = new HCMiniVersionCheck(globalData.version);
    }

    action(succCB, failCB) {

        wx.request({
            url: this.url,
            data: this.data,
            method: 'POST',
            header: {},
            dataType: JSON,
            success: res => {
                if (res.statusCode == 200) {
                    util.lg("HCLoginAction:" + res.data);
                    let result = JSON.parse(res.data);

                    if (result.error == 0) {
                        succCB(result.response);
                    } else {
                        failCB(result.errmsg);
                    }
                } else {
                    failCB("登录失败(02)");
                }
            },
            fail: function () {
                failCB("登录失败(03)");
            },
            complete: function () {
              util.lg("HCMiniVersionCheckAction complete..");
            }
        })
    }
}

module.exports = HCMiniVersionCheckAction;