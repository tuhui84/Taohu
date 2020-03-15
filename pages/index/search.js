// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      car_img: "/image/img1.jpg",
      bannerimg: ["/image/logo.png", "/image/logo.png", "/image/logo.png"],
      sketch: {
        sketch_title: "独家秘制成鱼落雁好吃香脆大串好香甜肉",
        pricenow: "1.50",
        priceold: "2.00",
        salenum: "96",
        describe: "猪肉羊肉混合品"
      },
      goods_img: ["/image/img1.jpg", "/image/img1.jpg"],
      buynotice_content: {
        validtime: "从购买之日起360天内有效",
        orderinfo: "请您提前7天预约",
        cantime: "06:30:00至18:30:00"
      },
      business_info: {
        address: "四川省成都市双流区",
        contact: "400-88888",
        dotime: "06:30:00至18:30:00"
      }
    },
    searchinfo:null
  },
  // 获取、设置输入框值
  ongetinfo(e){
    var searchinfo = e.detail.value;
    // 去除空格符
    var str = searchinfo.replace(/\s*/g,"")
    this.setData({
      searchinfo: str
    })
    // console.log(this.data.searchinfo)
  },
  // 搜索
  onsearch(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})