// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:{
      id:1,
      title:"多重轨道3火8道3456789876543火车车套装1",
      imgUrl:[
        '../../images/11.jpg',
        '../../images/11.jpg',
        '../../images/11.jpg'
      ],
      price:345,
      soldCount:32,
      detailsImg:"../../images/1-s.jpg",
      identy:[
        "黄色",
        "绿色",
        "蓝色"
      ]
    },
    identyIndex:0,
    tabIndex:1
  },
   turnFlag:function(){
     this.setData({
       flag: !this.data.flag
     })
   },
   turnIndex:function(e){
     this.setData({
       identyIndex: e.currentTarget.dataset.index
     })
     console.log(this.data.tabIndex)
   },
   toTab(e){
    this.setData({
      tabIndex: e.currentTarget.dataset.tab
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