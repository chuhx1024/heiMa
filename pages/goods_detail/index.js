import { request } from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品的详情数据
    goodsObj: {}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { goods_id } = options
    console.log(goods_id)
    this.getGoodsDetial(goods_id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    

  },
  // 获取商品的详情数据
  async getGoodsDetial (goods_id) {
    let res = await request({url:'https://api.zbztb.cn/api/public/v1/goods/detail', data:{goods_id}})
    console.log(res, 999)
    // wx.setStorageSync('key', res)
    // let res = wx.getStorageSync('key')
    this.setData({
      goodsObj: res.data.message
    })

  },
  // 点击轮播图 放大预览功能
  handlePrevewImage (e) {
    let index = e.currentTarget.dataset.index
    let urls = this.data.goodsObj.pics.map(item => {
      return item.pics_mid
    })
    wx.previewImage({
      current: urls[index],
      urls: urls
    });
  },
  // 加入购物车功能
  handleCartAdd () {
    // 获取购物车的本地缓存数据 第一次没有的话 给个默认 []
    let cart = wx.getStorageSync('cart') || []
    // 判断商品对象是否存在 购物车数组中  获取 下标
    let index = cart.findIndex(item => {
      return item.goods_id === this.data.goodsObj.goods_id
    })
    if (index === -1) {
      // 不存在 第一次添加
      this.data.goodsObj.num = 1
      this.data.goodsObj.checked = true
      cart.push(this.data.goodsObj)
    } else {
      // 存在 执行 num++
      cart[index].num ++
    }
    wx.setStorageSync('cart', cart);
    wx.showToast({
      title: '添加购物车成功!',
      icon: 'success',
      mask: true
    });
      
  }
})