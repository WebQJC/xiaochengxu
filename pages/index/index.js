Page({

  /**
   * 页面的初始数据
   */
  data: {
    sliderList: [],
    navList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://locally.uieee.com/slides',
      //'=>'箭头函数中的this指向是固定不变的，一直指向定义函数的环境
      success: (res) => {
        console.log(res);
        /**
         *   this.setData 有两个功能：
         *      1. 更新数据
         *      2. 更新视图
         * */
        this.setData({
          sliderList: res.data
        });
      }
    }),
      wx.request({
      url: 'https://locally.uieee.com/categories',
        //'=>'箭头函数中的this指向是固定不变的，一直指向定义函数的环境
        success: (res) => {
          console.log(res);
          /**
           *   this.setData 有两个功能：
           *      1. 更新数据
           *      2. 更新视图
           * */
          this.setData({
            navList: res.data
          });
        }
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