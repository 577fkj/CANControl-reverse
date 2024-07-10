Page({
  data: {
    PG: 1
  },
  COPY1: function (t) {
    wx.setClipboardData({
      data: "https://cloud.189.cn/web/share?code=FNbE3q77ZZza（访问码：prs1）"
    })
  },
  COPY2: function (t) {
    wx.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  TEST: function (t) {
    wx.navigateTo({
      url: "../NewUI1/NewUI?Test=1&GM=1"
    }), wx.hideLoading()
  },
  HELP1: function (t) {
    this.setData({
      PG: 1 != this.data.PG ? 1 : -1
    })
  },
  HELP2: function (t) {
    this.setData({
      PG: 2 != this.data.PG ? 2 : -1
    })
  },
  HELP3: function (t) {
    this.setData({
      PG: 3 != this.data.PG ? 3 : -1
    })
  },
  HELP4: function (t) {
    this.setData({
      PG: 4 != this.data.PG ? 4 : -1
    })
  },
  HELP5: function (t) {
    this.setData({
      PG: 5 != this.data.PG ? 5 : -1
    })
  },
  HELP6: function (t) {
    this.setData({
      PG: 6 != this.data.PG ? 6 : -1
    })
  },
  HELP7: function (t) {
    this.setData({
      PG: 7 != this.data.PG ? 7 : -1
    })
  },
  HELP8: function (t) {
    this.setData({
      PG: 8 != this.data.PG ? 8 : -1
    })
  },
  HELP9: function (t) {
    this.setData({
      PG: 9 != this.data.PG ? 9 : -1
    })
  },
  HELP10: function (t) {
    this.setData({
      PG: 10 != this.data.PG ? 10 : -1
    })
  },
  HELP11: function (t) {
    this.setData({
      PG: 11 != this.data.PG ? 11 : -1
    })
  },
  onLoad: function (t) {}
});