function MiniOwnerShopInfo(shopInfo) {

  // ids 用户ids -> String
  this.ids = shopInfo.ids;

  // idx 店铺ids -> String
  this.shopIds = shopInfo.shopIds;

  // 店主头像 url -> String
  this.avatar = shopInfo.avatar;

  // 店铺名称  -> String
  this.name = shopInfo.name;

  // 店铺类型  -> String
  this.type = shopInfo.type;

  // 店铺地址  -> String
  this.address = shopInfo.address;

  // 店铺图片  -> String
  this.shopimg = shopInfo.shopimg;

  // websocket url  -> String
  this.wsUrl = shopInfo.wsUrl;

  // 粉丝详情 url https:  -> String
  this.fansUrl = shopInfo.fansUrl;

  // 我的店铺详情 url https:  -> String
  this.shopUrl = shopInfo.shopUrl;

  // 上传地址(用于上传语音,图片) https &type=" + TYPE 图片（image）、语音（voice）、视频（video） -> String
  this.uploadUrl = shopInfo.uploadUrl;
}

module.exports = MiniOwnerShopInfo;