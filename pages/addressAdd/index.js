// pages/addressAdd/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel:13868284362,
    name:"赵以诚",
    site:"解放西路白云小区三弄二里1123456765432123456543386号",
    province:["广东省","湖北省"],
    cities:["广州市","武汉市"],
    district:["白云区","洪山区"] ,
    val:["浙江省","杭州市","西湖区"],
    head:"全部"
  },
  regionChange:function(e){
      this.setData({
        val:e.detail.value
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