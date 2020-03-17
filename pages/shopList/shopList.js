// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    pageIndex: 0,
    pageSize: 20,
    catId: 1,
    hasMore: true
  },

  loadMore: function () {
    // 2.如果没有更多数据，就直接返回
    if (!this.data.hasMore) return;

    wx.request({
      url: "https://locally.uieee.com/categories/" + this.data.catId + "/shops",
      data: {
        _limit: this.data.pageSize,
        _page: ++this.data.pageIndex
      },
      success: (res) => {
        console.log(res);

        var newList = this.data.shopList.concat(res.data); //concat() 方法用于连接两个或多个数组。
        //2.获取数据的总数
        var count = parseInt(res.header['X-Total-Count']);
        //2.用于判断比较是否还有更多数据
        var flag = this.data.pageIndex * this.data.pageSize < count;
        this.setData({
          shopList: newList,
          hasMore: flag,
        });
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    });

    // console.log("A3:店铺列表页-----监听页面加载");
    console.log(options);

    this.setData({
      catId: options.cat
    })

    this.loadMore();
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
    console.log("下拉事件");
    // 下拉刷新页面
    // 3.1 把数据先设置回默认值
    this.setData({
      shopList: [],
      pageIndex: 0,
      hasMore: true,
    });
    // 3.2 再重新请求数据
    this.loadMore();
    // 3.3 记得停止，否则在手机端一直存在
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})