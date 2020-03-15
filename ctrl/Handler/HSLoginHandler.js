// http 返回的登录信息
class HSLoginHandler {
    constructor() {
        this.type = "HSLogin";
    }

    handle(globalData, data) {
        globalData.loginInfo = data;
    }
}

module.exports = HSLoginHandler;