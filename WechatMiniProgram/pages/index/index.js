var t, e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = (t = require("../../4E32DEC39E166AAF2854B6C471091D62.js")) && t.__esModule ? t : {
    default: t
  },
  r = require("../../1D3746269E166AAF7B512E21F3E81D62.js");
var s, o = require("../../E0B6CAE39E166AAF86D0A2E4CEE81D62.js"),
  c = 0,
  u = 0,
  h = 0,
  d = 0,
  w = 0;

function l(t, e) {
  return v.apply(this, arguments)
}

function v() {
  return (v = i(a().mark((function t(e, i) {
    return a().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (o.stopBluetoothDevicesDiscovery(), (0, r.print)("IDX:", "Connect " + e), "CAN_虚拟测试设备" != e) {
            t.next = 7;
            break
          }
          wx.navigateTo({
            url: "../NewUI1/NewUI?Test=1&GM=" + h
          }), wx.hideLoading(), t.next = 21;
          break;
        case 7:
          if ("CEV_虚拟测试设备" != e) {
            t.next = 12;
            break
          }
          wx.navigateTo({
            url: "../NewUI1/NewUI?CEV=1&Test=1&GM=" + h
          }), wx.hideLoading(), t.next = 21;
          break;
        case 12:
          if ("ODM_虚拟测试设备" != e) {
            t.next = 17;
            break
          }
          wx.navigateTo({
            url: "../NewUI1/NewUI?CEV=1&Test=1&ODM=1"
          }), wx.hideLoading(), t.next = 21;
          break;
        case 17:
          return t.next = 19, o.easyConnect(e, (function () {}));
        case 19:
          t.sent.ok ? e.startsWith("@") ? (o.easySendData("CONNECT OK\n", !1), wx.navigateTo({
            url: "../device/device?Ver=3.47&GM=" + (h ? 1 : 0)
          }), wx.hideLoading()) : e.startsWith("CAN-") ? i.data.NewUI ? (wx.navigateTo({
            url: "../device2/device?Ver=3.47&GM=" + (h ? 1 : 0)
          }), wx.hideLoading()) : (wx.navigateTo({
            url: "../NewUI/NewUI?GM=" + (h ? 1 : 0)
          }), wx.hideLoading()) : e.startsWith("CAN_") ? (wx.navigateTo({
            url: "../NewUI1/NewUI?GM=" + h
          }), wx.hideLoading()) : e.startsWith("ODM_") ? (wx.navigateTo({
            url: "../NewUI1/NewUI?CEV=1&ODM=1&GM=" + h
          }), wx.hideLoading()) : e.startsWith("CEV_") && (wx.navigateTo({
            url: "../NewUI1/NewUI?CEV=1&GM=" + h
          }), wx.hideLoading()) : u < 5 ? (u += 1, l(e, i), console.log("失败！正在重新连接" + u)) : (wx.hideLoading(), D("连接失败"), i.startDiscovery());
        case 21:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}

function D(t) {
  wx.showToast({
    title: t,
    icon: "none",
    duration: 2e3
  })
}

function f(t) {
  return wx.getStorageSync(t)
}

function x(t, e) {
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
    w = f("DEBUG");
    var e = wx.getAccountInfoSync();
    h = "trial" == e.miniProgram.envVersion ? 1 : "develop" == e.miniProgram.envVersion ? 2 : 0;
    var a = f("UI");
    this.setData({
      NewUI: 0 == a ? 0 : a
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
        if (e = (e = e.replace("can_", "0x").replace("can-", "0x")).match(/0x[0-9a-f]{10,12}/)) {
          n.default.hex_md5("Check" + e + "@t*s$e#T.'1)`").match(/(....)$/);
          for (var a = (Number(e) + 19880914).toString(16).substring(4, 8), i = RegExp.$1, r = Number(e), s = 0, o = r.toString(), c = 0; c < o.length; c++) s += o.charCodeAt(c);
          var u = (Math.trunc(r / 655) * s).toString(16),
            h = u.substr(u.length - 6, 6);
          wx.setClipboardData({
            data: "设备ID:" + e + "\n固件5.0之前老版本密码:" + i + "\n固件5.0及之后蓝牙密码:" + a + "\n固件5.24及之后后台密码:" + h
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
            t.currentTarget.dataset.name.match(/^((CAN|CEV|ODM)[\-\_]|@)/) ? (n = e, u = 0, o.stopBluetoothDevicesDiscovery(), c = t.currentTarget.dataset.name, wx.showToast({
              title: "设备连接中",
              icon: "loading",
              duration: 46e5,
              mask: !0
            }), l(c, n)) : (i = "未知设备", r = "不支持此蓝牙设备", wx.showModal({
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
    }), x("UI", 1)
  },
  SetUI0: function () {
    this.setData({
      NewUI: 0
    }), x("UI", 0)
  },
  HELP: function () {
    wx.navigateTo({
      url: "../Help/Help"
    }), wx.hideLoading()
  },
  startDiscovery: function () {
    return i(a().mark((function t() {
      var i, n, c;
      return a().wrap((function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            return s.setData({
              ShowUI: 0
            }), t.next = 3, o.openBluetoothAdapter();
          case 3:
            i = t.sent, w && 0 == s.data.deviceListDataShow.length && (n = "CAN_虚拟测试设备", c = "-60", s.data.deviceListData.push({
              name: n,
              rssi: c
            }), n = "CEV_虚拟测试设备", c = "-60", s.data.deviceListData.push({
              name: n,
              rssi: c
            }), n = "ODM_虚拟测试设备", c = "-60", s.data.deviceListData.push({
              name: n,
              rssi: c
            })), i.ok ? (wx.showToast({
              title: "正在搜索中",
              icon: "loading",
              duration: 5e3
            }), (0, r.print)("IDX:", "Start BLE Search"), setInterval((function () {
              var t, a = Math.floor(Date.now() / 1e3),
                i = 0,
                n = e(s.data.deviceListData);
              try {
                for (n.s(); !(t = n.n()).done;) {
                  a - t.value.time > 5 && s.data.deviceListData.splice(i, 1), i++
                }
              } catch (t) {
                n.e(t)
              } finally {
                n.f()
              }
            }), 1e3), o.startBluetoothDevicesDiscovery((function (t, a) {
              d = 1;
              var i, n = e(s.data.deviceListData);
              try {
                for (n.s(); !(i = n.n()).done;) {
                  var r = i.value;
                  if (r.name.startsWith("CAN-") && s.setData({
                      ShowUI: 1
                    }), r.name === t) return r.rssi = a, void(r.time = Math.floor(Date.now() / 1e3))
                }
              } catch (t) {
                n.e(t)
              } finally {
                n.f()
              }
              if (s.data.deviceListDataShow.length >= 5)(t.startsWith("CAN_") || t.startsWith("ODM_") || t.startsWith("CEV_") || t.startsWith("@") || t.startsWith("CAN-")) && s.data.deviceListData.push({
                name: t,
                rssi: a
              });
              else {
                var o = Math.floor(Date.now() / 1e3);
                s.data.deviceListData.push({
                  name: t,
                  rssi: a,
                  time: o
                })
              }
              setTimeout((function () {
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