// 改造微信的 getSetting 函数为 Promise
export const getSetting = () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

// 改造微信的 chooseAddress 函数为 Promise
 export const chooseAddress = () => {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

// 改造微信的 openSetting 函数为 Promise
 export const openSetting = () => {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

// 改造微信的 showModal 函数为 promise

export const showModal = () => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '提示',
      content: '您是否要删除',
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      }
    });
  })
}

