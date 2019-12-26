// pages/goods_list/index.js
import { request } from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: '综合',
        isActive: true
      },
      {
        id: 1,
        value: '销量',
        isActive: false
      },
      {
        id: 2,
        value: '价值',
        isActive: false
      },
    ],
    goodsList: []

  },
  // 接口要的参数
  QueryParams: {
    query: '',
    cid: '',
    pageNum: 1,
    pageSize: 10
  },
  // 总页数
  TotalPages: 0,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid = options.cid
    this.getGoodsList()
  },
  handleTabsItemChange (e) {
    console.log(e)
    // 获取被点击的标题的索引
    const { index } = e.detail
    // 修改原数组
    let { tabs } = this.data
    tabs.forEach((item, ind) => {
      item.isActive = (index === ind)
    })
    this.setData({
      tabs
    })

  },
  // 获取商品列表的数据
  async getGoodsList () {
    wx.showLoading({
      title: '加载中',
    })
    let res = await request({url: 'https://api.zbztb.cn/api/public/v1/goods/search', data: this.QueryParams})
    wx.hideLoading()
    console.log(res)
    const {total} = res.data.message
    this.TotalPages = Math.ceil(total/this.QueryParams.pageSize)
    console.log(this.TotalPages)
    // 拼接数据
    let goodsList = [...this.data.goodsList, ...res.data.message.goods]
    // 主动停止下拉刷新
    wx.stopPullDownRefresh()
    this.setData({
      goodsList
    })
  },
  // 页面的触底事件
  onReachBottom () {
    if (this.QueryParams.pageNum < this.TotalPages) {
      this.QueryParams.pageNum += 1
      console.log(this.QueryParams.pageNum)
      this.getGoodsList()
    } else {
      wx.showToast({title: '没有下一页数据了'})
    }
  },
  // 页面的下拉刷新事件
  onPullDownRefresh () {
    // 重置商品数组
    this.setData({
      goodsList: []
    })
    // 重置查询参数
    this.QueryParams.pageNum = 1
    this.getGoodsList()

  }
})