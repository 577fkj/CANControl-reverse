App({
  onLaunch: function () {
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
  },
  onShow: function () {
    console.log("App Show")
  },
  onHide: function () {
    console.log("App Hide")
  },
  global: {
    userInfo: null,
    form: "1245dsa"
  }
});