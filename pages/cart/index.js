// pages/cart/index.js 
import {getSetting, chooseAddress, openSetting} from '../../utils/asyncWx'
import regeneratorRuntime from '../../lib/runtime/runtime';
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
  async handleChooseAddress () {
    // 获取用户的权限
    let res1 = await getSetting()
    const scopeAddress = res1.authSetting['scope.address']
    if (scopeAddress === true || scopeAddress === undefined) {
      let res2 = await chooseAddress()
      console.log(res2)
    } else { // 没有权限 就诱导用户打开授权页面
      await openSetting()
      let res2 = await chooseAddress()
      console.log(res2)
    }
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