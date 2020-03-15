// http请求登录,用户登录信息
function HCLogin(version, userInfo, ids, code)
{
    // 应用版本 -> String
    this.version = version;
    this.type = "HCLogin";
    
    // 用户ids -> String
    this.ids = ids;

    // session code -> String
    this.code = code;

    //用户性别 0: 未设置 1: 男 2: 女 -> int
  if (userInfo && userInfo.gender)
        this.sex = userInfo.gender;

    //用户所在地区 -> String
    this.area = "";
  if (userInfo && userInfo.country) 
        this.area = userInfo.country;
  if (userInfo && userInfo.province) 
        this.area += " " + userInfo.country;
  if (userInfo && userInfo.city) 
        this.area += " " + userInfo.city;

    //用户名 -> String
  if (userInfo && userInfo.nickName) 
    this.name = userInfo.nickName;

    //用户头像 -> String
  if (userInfo && userInfo.avatarUrl) 
    this.avatarUrl = userInfo.avatarUrl;
}

module.exports = HCLogin;