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
    // let res = await request({url:'https://api.zbztb.cn/api/public/v1/goods/detail', data:{goods_id}})
    // console.log(res, 999)
    // // wx.setStorageSync('key', res)
    let res = wx.getStorageSync('key')
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
      
  }
})