function o(o, n) {
  wx.getSetting({
    success: function (t) {
      t.authSetting[o] ? "function" == typeof n && (console.log("授权状态获取成功", o), n(true)) : "function" == typeof n && (console.log("授权状态获取失败", o), n(false))
    },
    fail: function (t) {
      console.log("授权状态获取失败", o), "function" == typeof n && n(false)
    }
  })
}
module.exports = {
  permission_check: o,
  permission_request: function (n, t, c) {
    o(n, (function (o) {
      o ? "function" == typeof c && c(true) : wx.authorize({
        scope: n,
        success: function () {
          "function" == typeof c && c(true)
        },
        fail: function () {
          console.log("用户拒绝授权", n), wx.showModal({
            title: "申请权限",
            content: "需要使用" + t + "权限，请前往设置打开权限",
            success: function (o) {
              o.confirm ? (console.log("用户点击确定"), wx.openSetting({
                success: function (o) {
                  "function" == typeof c && c(false)
                },
                fail: function (o) {
                  "function" == typeof c && c(false)
                }
              })) : o.cancel && "function" == typeof c && c(false)
            }
          })
        }
      })
    }))
  }
};