// http 返回的登录信息 <- HCLogin 的 response
function HSMiniVersionCheck(data) {

    this.type = "HSCheck";

    // 用户类型 0-未知 1-店主 2-粉丝  99-审核 -> int
    this.utype = data.utype;
}

module.exports = HSMiniVersionCheck;