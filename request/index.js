let ajaxTimes = 0 
export const request = (params) => {
  // 每次调用都 ++ 统计次数
  ajaxTimes ++ 
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        // 完成一个就减 1
        // 能成功的原因是要领会 export 的 作用范围  
        ajaxTimes --
        console.log(ajaxTimes, 123)
        if (ajaxTimes === 0) {
          wx.hideLoading()
        }
      }
    })
  })
}