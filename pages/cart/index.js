// pages/cart/index.js 
import {getSetting, chooseAddress, openSetting} from '../../utils/asyncWx'
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 收货地址的数据
    address: {},
    // 在缓存中获取购物车数据
    cartsList: [],
    // 购物车的全选按钮
    allChecked: false,
    // 商品总价格
    totalPrice: 0,
    // 商品总数据
    totalNum: 0
  },
  onShow () {
    // 获取缓存中的收货地址数据
    const address = wx.getStorageSync('address') || {};
    address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo
    this.setData({
      address
    })
    // 获取缓存中的购物车数据
    const cartsList = wx.getStorageSync('cart') || [];
    this.setCart(cartsList)
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
  },
  // 商品的每一个复选框的change事件
  handleItemChange (e) {
    // 获取选择商品的id
    let goods_id = e.currentTarget.dataset.id
    let {cartsList} = this.data
    // 根据id 获取数组的索引
    let index = cartsList.findIndex(v=> v.goods_id === goods_id)
    console.log(index)
    // 修改缓存中的数据 和页面的数据
    cartsList[index].checked = !cartsList[index].checked
    this.setCart(cartsList)
  },
  // 设置购物车的属性是  重新计算 底部数据 和全选状态 和购买数量
  setCart (cartsList) {
    const allChecked = cartsList.length !== 0 ? cartsList.every((item) => {
      return item.checked === true
    }) : false
    let totalPrice = 0 
    let totalNum = 0 
    cartsList.forEach(item => {
      if (item.checked) {
        totalPrice += item.goods_price * item.num
        totalNum += item.num
      }
    })
    this.setData({
      cartsList,
      allChecked,
      totalPrice,
      totalNum
    })
    wx.setStorageSync('cart', cartsList);
  }

})