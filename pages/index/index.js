// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: ["新品","女装", "男装", "休闲鞋", "跑步鞋", "单鞋", "乐福鞋", "马丁鞋", "箱包"],
    currentTab: 0,
    navScrollLeft: 0,
    describe:[
      { 
        album:{
          id: "3349",
          name: "TB2AsM9bcrI8KJjy0FhXXbfnpXa_!!3423401655.jpg",
          or_size: "800x800",
          tumb_url: "https://test-pc.kaidzs666.com/cache/file/jpg/2020_03_04/480_640/403ae5bee818e08195d8aeaedc5f07203e3eaa5c_jpg.jpg",
          url: "https://test-pc.kaidzs666.com/cache/file/jpg/2020_03_04/403ae5bee818e08195d8aeaedc5f07203e3eaa5c_jpg.jpg"
        },
        cur_price: 1499,
        describe: "男女同款短靴",
        id: "192",
        ids: "sg_2jx8v13y3zngq6o",
        info: "",
        name: "Dr.Martens马汀博士2976经典光面皮切尔西靴",
        or_price: 1599,
        qrImage: "https://test-m1.kaidzs666.com/manager/plugin/ddt/weixin/login/reg?code_id=FdKLt8VV",
        sku_data: [],
        sold: "0",
        specs_data: []
      },
      { 
        album: {
          id: "3369",
          name: "1.jpg_q30.jpg",
          or_size: "800x800",
          tumb_url: "https://test-pc.kaidzs666.com/cache/file/jpg/2020_03_04/480_640/07a1a3da1c98368c35aac6db012628e941e88227_jpg.jpg",
          url: "https://test-pc.kaidzs666.com/cache/file/jpg/2020_03_04/07a1a3da1c98368c35aac6db012628e941e88227_jpg.jpg"
        },
        cur_price: 1499,
        describe: "男女同款复古潮流短靴",
        id: "193",
        ids: "sg_vdlz412yler89ky",
        info: "",
        name: "Dr.Martens马汀博士经典101光面皮6孔马丁靴",
        or_price: 1599,
        qrImage: "https://test-m1.kaidzs666.com/manager/plugin/ddt/weixin/login/reg?code_id=FdKLt8VV",
        sku_data: [],
        sold: "0",
        specs_data: []
      }, 
      {
        album: {
          id: "3398",
          name: "1.jpg",
          or_size: "430x430",
          tumb_url: "https://test-pc.kaidzs666.com/cache/file/jpg/2020_03_04/480_640/97112c051d5183a14b91f591c9466fcd551db373_jpg.jpg",
          url: "https://test-pc.kaidzs666.com/cache/file/jpg/2020_03_04/97112c051d5183a14b91f591c9466fcd551db373_jpg.jpg"
        },
        cur_price: 309,
        describe: "休闲运动裤",
        id: "195",
        ids: "sg_lv783rld3m1gy92",
        info: "",
        name: "New Balance NB官方2020新款男款针织长裤",
        or_price: 399,
        qrImage: "https://test-m1.kaidzs666.com/manager/plugin/ddt/weixin/login/reg?code_id=FdKLt8VV",
        sku_data: [],
        sold: "0",
        specs_data: []
      },
      {
        album: {
          id: "3419",
          name: "O1CN01eJrpfm23bXZOWVAGP_!!0-item_pic.jpg_430x430q90.jpg",
          or_size: "430x430",
          tumb_url: "https://test-pc.kaidzs666.com/cache/file/jpg/2020_03_04/480_640/fb7c7bfba10a43cf2c5db93b7fa8b8117db0e3f7_jpg.jpg",
          url: "https://test-pc.kaidzs666.com/cache/file/jpg/2020_03_04/fb7c7bfba10a43cf2c5db93b7fa8b8117db0e3f7_jpg.jpg"
        },
        cur_price: 309,
        describe: "NB官方男款外套",
        id: "199",
        ids: "sg_kv82z10py0n9704",
        info: "",
        name: "MJ83980 运动休闲连帽外套",
        or_price: 399,
        qrImage: "https://test-m1.kaidzs666.com/manager/plugin/ddt/weixin/login/reg?code_id=FdKLt8VV",
        sku_data: [],
        sold: "0",
        specs_data: []
  }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取页面宽度
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  },
  onGoodsTap(e){
    var name = e.currentTarget.dataset.name;
    var describe = e.currentTarget.dataset.des;
    var cur_price = e.currentTarget.dataset.np;
    var or_price = e.currentTarget.dataset.op;
    var soldnum = e.currentTarget.dataset.sn;
    var imgurl = e.currentTarget.dataset.imgurl;
    wx.navigateTo({
      url: '/pages/goods/goodsinfo?name=' + name + '&describe=' + describe + '&cur_price=' + cur_price + '&or_price=' + or_price + '&soldnum=' + soldnum + '&imgurl=' + imgurl,
    })
  },
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
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