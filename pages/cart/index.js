// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 获取用户的收货地址
  handleChooseAddress () {
    // 获取用户的权限
    wx.getSetting({
      success: (result) => {
        // 获取用户的权限状态
        const scopeAddress = result.authSetting['scope.address']
        console.log(result)
        console.log(scopeAddress)
        if (scopeAddress === true || scopeAddress === undefined) {
          wx.chooseAddress({
            success: (result) => {
              console.log(123)
              console.log(result)
            },
            fail: () => {
            },
            complete: () => {}
          });
        } else { // 没有权限 就诱导用户打开授权页面
          wx.openSetting({
            success: (result) => {
              wx.chooseAddress({
                success: (result) => {
                  console.log(123)
                  console.log(result)
                },
                fail: () => {
                },
                complete: () => {}
              });
            },
            fail: () => {},
            complete: () => {}
          });
            
        }
      },
      fail: () => {},
      complete: () => {}
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