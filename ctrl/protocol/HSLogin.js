// http 返回的登录信息 <- HCLogin 的 response
function HSLogin(data) {

    this.type = "HSLogin";

    // 用户类型 0-未知 1-店主 2-粉丝  99-审核 -> int
    this.utype = data.utype;

    // ws 登录token -> String
    this.token = data.token;

    // 强制打开的网页 -> String
    this.pageUrl = data.pageUrl;

    // 我的店铺 -> list<MiniOwnerShopInfo>
    this.miniOwnerShopInfo = data.miniOwnerShopInfo;
}

module.exports = HSLogin;