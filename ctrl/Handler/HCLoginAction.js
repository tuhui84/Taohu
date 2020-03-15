// 发送心态动作
let util = require('../../utils/util');
let HCLogin = require("../protocol/HCLogin");

class HCLoginAction {

    constructor(globalData, userInfo, ids, code) {
        this.url = globalData.mainUrl;
        this.data = new HCLogin(globalData.version, userInfo, ids, code);
    }

    action(succCB, failCB) {
        util.lg(JSON.stringify(this.data));
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
                util.lg("login complete..");
            }
        })
    }
}

module.exports = HCLoginAction;