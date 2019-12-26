// 引入用来发送请求的方法
import { request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    leftMenuList: [],
    // 右侧的商品数据
    rightContent: [],
    // 被点击的左侧的菜单的索引
    currentIndex: 0
  },
  // 接口获取的数据
  cates: [],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCates()
  },
  // 获取分类数据
  getCates () {
    request({ url: 'https://api.zbztb.cn/api/public/v1/categories'})
    .then( res => {
      this.cates = res.data.message
      console.log(this.cates)
      // 构造左侧的大菜单数据
      let leftMenuList = this.cates.map((item => {
        return item.cat_name
      }))
      // 构造默认的右侧的商品数据
      let rightContent = this.cates[0].children
      this.setData({
        leftMenuList,
        rightContent
      })
    })
  },
  // 左侧的点击事件
  handleItemTap (e) {
    let currentIndex = e.currentTarget.dataset.index
    let rightContent = this.cates[currentIndex].children
    this.setData({
      currentIndex,
      rightContent
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