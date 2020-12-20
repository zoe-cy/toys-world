// pages/coupon/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:1,
    list:[
      {
        id:1,
        title:"小天才50元优惠券",
        infos:"全场满300元可用，特价商品除外",
        price:345,
        type:"即将过期",
        "startTime":"2020/10/1",
        "endTime":"2020/12/31"
      },
      {
        id:2,
        title:"小天才50元优惠券",
        infos:"全场满300元可用，特价商品除外",
        price:345,
        type:"即将过期",
        "startTime":"2020/10/1",
        "endTime":"2020/12/31"
      }
    ]
  
  },
  toTab(e){
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
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