//Page Object
Page({
  data: {
    // 轮播图数组
    swiperList: []
    
  },
  //options(Object)
  onLoad: function(options) {
    // 发送异步请求  获取轮播图的数据
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res) => {
        console.log(res)
        this.setData({
          swiperList: res.data.message
        })
      }
    });
      
    
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  