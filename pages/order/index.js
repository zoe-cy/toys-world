// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:1,
    list:[
      {
        id:1,
        kind:"aaa",
        title:"多重轨道3火8道3456789876543火车车套装1",
        imgUrl:[
          '../../images/11.jpg',
          '../../images/11.jpg',
          '../../images/11.jpg'
        ],
        num:1,
        price:345,
        soldCount:32
      },
      {
        id:2,
        kind:"bbb",
        title:"多重轨道3火8道3456789876543火车车套装1",
        imgUrl:[
          '../../images/11.jpg',
          '../../images/11.jpg',
          '../../images/11.jpg'
        ],
        num:1,
        price:345,
        soldCount:32
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
  onLoad: function (e) {
     this.setData({
       tabIndex: e.type || 1
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