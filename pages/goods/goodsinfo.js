// pages/goods/goodsinfo.js
const { $Message } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 蒙层显示隐藏
    showspell:false,
    // 是否有拼团
    isspell:true,
    // 底部加入购物车隐藏显示数据
    show_or_dis:false,
    goodsnum: 1,
    oneChecked: false,
    // 商品规格
    tagsinfo: {
      color: {
        tagstab: "颜色",
        tag: [
          {
            name: '红色',
            checked: true,
            color: 'red'
          },
          {
            name: '绿色',
            checked: false,
            color: 'red'
          }
        ]
      },
      size: {
        tagstab: "规格",
        tag: [
          {
            name: '大号',
            checked: false,
            color: 'red'
          },
          {
            name: '小号',
            checked: false,
            color: 'red'
          }
        ]
      }
    },
    // 收藏、关注
    isColl:false,
    isfocus:false,
    info:{
      car_img:'',
      bannerimg: ["/image/logo.png", "/image/logo.png","/image/logo.png"],
      sketch: {
        sketch_title: "独家秘制成鱼落雁好吃香脆大串好香甜肉",
        pricenow: "1.50",
        priceold: "2.00",
        salenum: "96",
        describe:"鞋子好看"
      },
      goods_img: ["/image/img1.jpg", "/image/img1.jpg"],
      buynotice_content:{
        validtime:"从购买之日起360天内有效",
        orderinfo:"请您提前7天预约",
        cantime:"06:30:00至18:30:00"
      },
      business_info:{
        address:"四川省成都市双流区",
        contact:"400-88888",
        dotime:"06:30:00至18:30:00"
      }
    },
    dis_show: {
      one: true,
      two: false,
      thr: false
    }
  },
  // 图片放大
  onlarge(e) {
    var murl = e.currentTarget.dataset.src
    wx.previewImage({
      current: murl, // 当前显示图片的http链接
      urls: this.data.info.bannerimg// 需要预览的图片http链接列表
    })
  },
  // 点击收藏
  oncoll(){
    this.setData({
      isColl:true
    })
  },
  onfoucus() {
    this.setData({
      isfocus: true
    })
  },
  // 控制底部
  onaddcar(){
    this.setData({
      show_or_dis:true
    })
  },
  ongodown(){
    this.setData({
      show_or_dis: false
    })
  },
  // 商品数量加减
  handleChange1({ detail }) {
    var num = Math.ceil(detail.value)
    this.setData({
      goodsnum: num
    })
  },
  onChange(event) {
    var key = event.currentTarget.dataset.key
    const detail = event.detail;
    var tags = this.data.tagsinfo[key].tag;
    var arr = []
    for (var i = 0; i < tags.length; i++) {
      var ischecked = tags[i].checked
      if (ischecked == true) {
        tags[i].checked = false
        arr.push(tags[i])
      } else {
        arr.push(tags[i])
      }
    }
    for (var i = 0; i < arr.length; i++) {
      var ischecked = arr[i].checked
      if (detail.name == i) {
        arr[i].checked = true
      }
    }
    console.log(arr);
    var tagsinfo = 'tagsinfo.' + key + '.tag'
    this.setData({
      [tagsinfo]: arr
    })
    console.log(this.data.tagsinfo[key].tag)
    

  },
  // 控制详情显示隐藏
  btn: function (e) {
    var that = this
    if (e.currentTarget.dataset.t == 1) {
      that.setData({
        dis_show: {
          one: true,
          two: false,
          thr: false
        }
      })
    } else if (e.currentTarget.dataset.t == 2) {
      that.setData({
        dis_show: {
          one: false,
          two: true,
          thr: false
        }
      })
    } else {
      that.setData({
        dis_show: {
          one: false,
          two: false,
          thr: true
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var str = 'info.sketch'
    var bannerimg = 'info.bannerimg'
    var goods_img = 'info.goods_img'
    var car_img = 'info.car_img'
    this.setData({
      [car_img]: options.imgurl,
      [str]:{
        sketch_title:options.name,
        pricenow: options.cur_price,
        priceold: options.or_price,
        salenum: options.soldnum,
        describe: options.describe
      },
      [bannerimg]: [options.imgurl, options.imgurl, options.imgurl],
      [goods_img]: [options.imgurl]
    })
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