// pages/cart/index.js 
import {getSetting, chooseAddress, openSetting} from '../../utils/asyncWx'
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 收货地址的数据
    address: {}

  },
  onShow () {
    // 获取缓存中的购物车数据
    const address = wx.getStorageSync('address');
    address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo
    this.setData({
      address
    })
      
  },
  // 获取用户的收货地址
  async handleChooseAddress () {
    try {
      // 获取用户的权限
      let res1 = await getSetting()
      const scopeAddress = res1.authSetting['scope.address']
      let address = {}
      if (scopeAddress === true || scopeAddress === undefined) {
        address = await chooseAddress()
      } else { // 没有权限 就诱导用户打开授权页面
        await openSetting()
        address = await chooseAddress()
      }
      // 获取收货地址后把其存储到本地存储
      wx.setStorageSync('address', address)
    } catch (err) {
      console.log(err)
    }
  }
})