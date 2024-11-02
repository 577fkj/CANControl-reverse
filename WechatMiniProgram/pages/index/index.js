var t, e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  i = (t = require("../../FE4C2CA79E166AAF982A44A0A4719522.js")) && t.__esModule ? t : {
    default: t
  },
  r = require("../../91BD48529E166AAFF7DB205549519522.js");
var s, o = require("../../CC0EEE579E166AAFAA68865089619522.js"),
  c = 0,
  u = 0,
  h = 0,
  d = 0;

function w(t, e) {
  return l.apply(this, arguments)
}

function l() {
  return (l = n(a().mark((function t(e, n) {
    return a().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (o.stopBluetoothDevicesDiscovery(), (0, r.print)("IDX:", "Connect " + e), "CAN_虚拟测试设备" != e) {
            t.next = 7;
            break
          }
          wx.navigateTo({
            url: "../NewUI1/NewUI?Test=1&GM=" + h
          }), wx.hideLoading(), t.next = 11;
          break;
        case 7:
          return t.next = 9, o.easyConnect(e, (function () {}));
        case 9:
          t.sent.ok ? e.startsWith("@") ? (o.easySendData("CONNECT OK\n", !1), wx.navigateTo({
            url: "../device/device?Ver=3.47&GM=" + (h ? 1 : 0)
          }), wx.hideLoading()) : e.startsWith("CAN-") ? n.data.NewUI ? (wx.navigateTo({
            url: "../device2/device?Ver=3.47&GM=" + (h ? 1 : 0)
          }), wx.hideLoading()) : (wx.navigateTo({
            url: "../NewUI/NewUI?GM=" + (h ? 1 : 0)
          }), wx.hideLoading()) : e.startsWith("CAN_") && (wx.navigateTo({
            url: "../NewUI1/NewUI?GM=" + h
          }), wx.hideLoading()) : u < 5 ? (u += 1, w(e, n), console.log("失败！正在重新连接" + u)) : (wx.hideLoading(), v("连接失败"), n.startDiscovery());
        case 11:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}

function v(t) {
  wx.showToast({
    title: t,
    icon: "none",
    duration: 2e3
  })
}

function f(t, e) {
  wx.setStorageSync(t, e)
}
Page({
  data: {
    deviceListData: [],
    deviceListDataShow: [],
    CMD: "0x",
    SOC: 35,
    NewUI: 1,
    ShowUI: 0
  },
  onShareAppMessage: function () {},
  onLoad: function (t) {
    h = Number(t.GM);
    var e = wx.getAccountInfoSync();
    "trial" == e.miniProgram.envVersion && (h = 1), "develop" == e.miniProgram.envVersion && (h = 2);
    var a, n = (a = "UI", wx.getStorageSync(a));
    this.setData({
      NewUI: 0 == n ? 0 : n
    }), this.setData({
      GM: h
    }), s = this, setInterval((function () {
      s.setData({
        deviceListDataShow: s.data.deviceListData
      })
    }), 600)
  },
  InitSearch: function () {
    d || this.startDiscovery()
  },
  onShow: function () {
    var t = this;
    this.setData({
      deviceListData: []
    }), this.setData({
      deviceListDataShow: []
    }), setTimeout((function () {
      t.startDiscovery()
    }), 600), setTimeout((function () {
      s.InitSearch()
    }), 1200), setTimeout((function () {
      s.InitSearch(), d = 0
    }), 1800), h && wx.getClipboardData({
      success: function (t) {
        var e = t.data.toLowerCase().replace(/×/g, "x").replace(/[Oo]/g, "0");
        if (e = e.replace("can_", "0x").replace("can-", "0x"), (0, r.print)("Str=" + e), e = e.match(/0x[0-9a-f]{10,12}/), (0, r.print)("math=" + e), e) {
          i.default.hex_md5("Check" + e + "@t*s$e#T.'1)`").match(/(....)$/);
          for (var a = (Number(e) + 19880914).toString(16).substring(4, 8), n = RegExp.$1, s = Number(e), o = 0, c = s.toString(), u = 0; u < c.length; u++) o += c.charCodeAt(u);
          var h = (Math.trunc(s / 655) * o).toString(16),
            d = h.substr(h.length - 6, 6);
          wx.setClipboardData({
            data: "设备ID:" + e + "\n固件5.0之前老版本密码:" + n + "\n固件5.0及之后蓝牙密码:" + a + "\n固件5.24及之后后台密码:" + d
          })
        }
      }
    })
  },
  onPullDownRefresh: function () {
    this.setData({
      deviceListData: []
    }), this.setData({
      deviceListDataShow: []
    });
    var t = this;
    setTimeout((function () {
      wx.stopPullDownRefresh(), t.startDiscovery()
    }), 500)
  },
  listViewTap: function (t) {
    var e = this;
    return n(a().mark((function n() {
      var i;
      return a().wrap((function (a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            t.currentTarget.dataset.name.match(/^(CAN[\-\_]|@)/) ? (i = e, u = 0, o.stopBluetoothDevicesDiscovery(), c = t.currentTarget.dataset.name, wx.showToast({
              title: "设备连接中",
              icon: "loading",
              duration: 46e5,
              mask: !0
            }), w(c, i)) : (n = "未知设备", r = "不支持此蓝牙设备", wx.showModal({
              title: n,
              content: r,
              showCancel: !1
            }));
          case 1:
          case "end":
            return a.stop()
        }
        var n, r
      }), n)
    })))()
  },
  SetUI1: function () {
    this.setData({
      NewUI: 1
    }), f("UI", 1)
  },
  SetUI0: function () {
    this.setData({
      NewUI: 0
    }), f("UI", 0)
  },
  HELP: function () {
    wx.navigateTo({
      url: "../Help/Help"
    }), wx.hideLoading()
  },
  startDiscovery: function () {
    return n(a().mark((function t() {
      var n;
      return a().wrap((function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return s.setData({
              ShowUI: 0
            }), t.next = 3, o.openBluetoothAdapter();
          case 3:
            n = t.sent, 2 == h && 0 == s.data.deviceListDataShow.length && ("CAN_虚拟测试设备", "-60", s.data.deviceListData.push({
              name: "CAN_虚拟测试设备",
              rssi: "-60"
            })), n.ok ? (wx.showToast({
              title: "正在搜索中",
              icon: "loading",
              duration: 5e3
            }), (0, r.print)("IDX:", "Start BLE Search"), o.startBluetoothDevicesDiscovery((function (t, a) {
              d = 1;
              var n, i = e(s.data.deviceListData);
              try {
                for (i.s(); !(n = i.n()).done;) {
                  var r = n.value;
                  if (r.name.startsWith("CAN-") && s.setData({
                      ShowUI: 1
                    }), r.name === t) return void(r.rssi = a)
                }
              } catch (t) {
                i.e(t)
              } finally {
                i.f()
              }
              s.data.deviceListData.push({
                name: t,
                rssi: a
              }), setTimeout((function () {
                wx.hideToast()
              }), 1e3)
            }))) : ((0, r.print)("IDX:", n.errMsg), d = 1, wx.showModal({
              showCancel: "false",
              confirmText: "我知道了",
              title: "调用蓝牙失败",
              content: "请检查权限中定位及蓝牙是否开启或重启小程序"
            }));
          case 6:
          case "end":
            return t.stop()
        }
      }), t)
    })))()
  }
});