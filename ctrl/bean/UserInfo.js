let util = require('../../utils/util');

function UserInfo(userinfo) {
    //用户idx
    this.ids = userinfo.ids;

    // 用户身份 1-店长 2-店员 3-粉丝
    this.type = userinfo.type;

    //用户性别 0: 未设置 1: 男 2: 女
    this.sex = userinfo.sex;
    //用户所在地区
    this.area = userinfo.area;
    //用户名
    this.name = userinfo.name;
    //用户备注名(小程序)
    this.remarkName = userinfo.remarkName;
    //用户头像
    this.avatarUrl = userinfo.avatarUrl;

    //用户拼音简写
    if(userinfo.pyInitial)
    {
        this.pyInitial = userinfo.pyInitial.toUpperCase();
    }

    //用户是否置顶
    this.bTop = userinfo.bTop;

    //用户是否星标用户
    this.bStar = userinfo.bStar;

    //注册时间戳
    this.regTimeStamp = userinfo.regTime;

    //注册时间 
    this.regTime = util.formatDateStamp(this.regTimeStamp);

    // 是否屏蔽消息
    this.bShield = userinfo.bShield;

    // 用户显示名字
    this.showName = this.getName();
}

UserInfo.prototype.getName= function () {
    if (this.remarkName) {
        return this.remarkName;
    } else {
        return this.name;
    }
};

UserInfo.prototype.getPyInitial = function () {
    if (this.pyInitial) {
        let temp = this.pyInitial.split('')[0];
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(temp) != -1) {
            return temp;
        }
    }
    return '#';
};

module.exports = UserInfo