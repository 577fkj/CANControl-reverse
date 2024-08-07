var t, e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = (t = require("../../2CB821879E166AAF4ADE498014473E81.js")) && t.__esModule ? t : {
    default: t
  },
  r = require("../../F55BAF819E166AAF933DC78618273E81.js");
var s, o = require("../../680F81F39E166AAF0E69E9F490373E81.js"),
  c = 0,
  u = 0,
  h = 0,
  d = 0;

function w(t, e) {
  return l.apply(this, arguments)
}

function l() {
  return (l = i(a().mark((function t(e, i) {
    return a().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (o.stopBluetoothDevicesDiscovery(), (0, r.print)("IDX:", "Connect " + e), "CAN_虚拟测试设备" != e) {
            t.next = 7;
            break
          }
          wx.navigateTo({
            url: "../NewUI1/NewUI?GM=" + h
          }), wx.hideLoading(), t.next = 11;
          break;
        case 7:
          return t.next = 9, o.easyConnect(e, (function () {}));
        case 9:
          t.sent.ok ? e.startsWith("@") ? (o.easySendData("CONNECT OK\n", !1), wx.navigateTo({
            url: "../device/device?Ver=3.47&GM=" + (h ? 1 : 0)
          }), wx.hideLoading()) : e.startsWith("CAN-") ? i.data.NewUI ? (wx.navigateTo({
            url: "../device2/device?Ver=3.47&GM=" + (h ? 1 : 0)
          }), wx.hideLoading()) : (wx.navigateTo({
            url: "../NewUI/NewUI?GM=" + (h ? 1 : 0)
          }), wx.hideLoading()) : e.startsWith("CAN_") && (wx.navigateTo({
            url: "../NewUI1/NewUI?GM=" + h
          }), wx.hideLoading()) : u < 5 ? (u += 1, w(e, i), console.log("失败！正在重新连接" + u)) : (wx.hideLoading(), v("连接失败"), i.startDiscovery());
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
    var a, i = (a = "UI", wx.getStorageSync(a));
    this.setData({
      NewUI: 0 == i ? 0 : i
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
        if ((e = e.match(/0x[0-9a-f]{10,12}/)[0]).startsWith("0x")) {
          n.default.hex_md5("Check" + e + "@t*s$e#T.'1)`").match(/(....)$/);
          for (var a = (Number(e) + 19880914).toString(16).substring(4, 8), i = RegExp.$1, r = Number(e), s = 0, o = r.toString(), c = 0; c < o.length; c++) s += o.charCodeAt(c);
          var u = (Math.trunc(r / 655) * s).toString(16),
            h = u.substr(u.length - 6, 6);
          wx.setClipboardData({
            data: "设备ID:" + e + "\n5.0之前蓝牙密码:" + i + "\n5.0及之后蓝牙密码:" + a + "\n5.24及之后系统密码:" + h
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
    return i(a().mark((function i() {
      var n;
      return a().wrap((function (a) {
        for (;;) switch (a.prev = a.next) {
          case 0:
            t.currentTarget.dataset.name.match(/^(CAN[\-\_]|@)/) ? (n = e, u = 0, o.stopBluetoothDevicesDiscovery(), c = t.currentTarget.dataset.name, wx.showToast({
              title: "设备连接中",
              icon: "loading",
              duration: 46e5,
              mask: !0
            }), w(c, n)) : (i = "未知设备", r = "不支持此蓝牙设备", wx.showModal({
              title: i,
              content: r,
              showCancel: !1
            }));
          case 1:
          case "end":
            return a.stop()
        }
        var i, r
      }), i)
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
    return i(a().mark((function t() {
      var i;
      return a().wrap((function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return s.setData({
              ShowUI: 0
            }), t.next = 3, o.openBluetoothAdapter();
          case 3:
            i = t.sent, 2 == h && 0 == s.data.deviceListDataShow.length && ("CAN_虚拟测试设备", "-60", s.data.deviceListData.push({
              name: "CAN_虚拟测试设备",
              rssi: "-60"
            })), i.ok ? (wx.showToast({
              title: "正在搜索中",
              icon: "loading",
              duration: 5e3
            }), (0, r.print)("IDX:", "Start BLE Search"), o.startBluetoothDevicesDiscovery((function (t, a) {
              d = 1;
              var i, n = e(s.data.deviceListData);
              try {
                for (n.s(); !(i = n.n()).done;) {
                  var r = i.value;
                  if (r.name.startsWith("CAN-") && s.setData({
                      ShowUI: 1
                    }), r.name === t) return void(r.rssi = a)
                }
              } catch (t) {
                n.e(t)
              } finally {
                n.f()
              }
              s.data.deviceListData.push({
                name: t,
                rssi: a
              }), setTimeout((function () {
                wx.hideToast()
              }), 1e3)
            }))) : ((0, r.print)("IDX:", i.errMsg), d = 1, wx.showModal({
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