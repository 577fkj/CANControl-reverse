var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = n(require("../../B110F0819E166AAFD7769886CD362D70.js"));
n(require("../../BF8C0DC69E166AAFD9EA65C1FF462D70.js"));
function n(t) {
  return t && t.__esModule ? t : { default: t };
}
var i = require("../../056882B19E166AAF630EEAB6C1362D70.js"),
  s = 0,
  o = 0,
  c = 0,
  u = 0;
function h(t, e) {
  return d.apply(this, arguments);
}
function d() {
  return (d = a(
    e().mark(function t(a, r) {
      return e().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (
                i.stopBluetoothDevicesDiscovery(),
                (t.next = 3),
                i.easyConnect(a, function () {})
              );
            case 3:
              t.sent.ok
                ? a.startsWith("@")
                  ? (i.easySendData("CONNECT OK\n", !1),
                    wx.navigateTo({
                      url: "../device/device?Ver=3.47&GM=" + r.data.GM,
                    }),
                    r.hideLoading())
                  : a.startsWith("CAN-")
                  ? r.data.NewUI
                    ? (wx.navigateTo({
                        url: "../device2/device?Ver=3.47&GM=" + r.data.GM,
                      }),
                      r.hideLoading())
                    : (wx.navigateTo({ url: "../NewUI/NewUI?GM=" + r.data.GM }),
                      r.hideLoading())
                  : a.startsWith("CAN_") &&
                    (wx.navigateTo({ url: "../NewUI1/NewUI?GM=" + r.data.GM }),
                    r.hideLoading())
                : o < 5
                ? ((o += 1), h(a, r), console.log("失败！正在重新连接" + o))
                : (r.hideLoading(), v("连接失败"), r.startDiscovery());
            case 5:
            case "end":
              return t.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function v(t) {
  wx.showToast({ title: t, icon: "none", duration: 2e3 });
}
function l(t) {
  return wx.getStorageSync(t);
}
function w(t, e) {
  wx.setStorageSync(t, e);
}
Page({
  data: {
    deviceListData: [],
    deviceListDataShow: [],
    CMD: "0x",
    GM: 0,
    SOC: 35,
    NewUI: 1,
    ShowUI: 0,
    Start: 0,
  },
  onShareAppMessage: function () {},
  onLoad: function (t) {
    var e = wx.getAccountInfoSync();
    (c = 1 == t.GM ? 1 : l("GM")),
      "release" != e.miniProgram.envVersion && (c = 1),
      "develop" == e.miniProgram.envVersion && (u = 0);
    var a = l("UI");
    this.setData({ NewUI: 0 == a ? 0 : a }), this.setData({ GM: c });
    var r = this;
    setInterval(function () {
      r.setData({ deviceListDataShow: r.data.deviceListData });
    }, 600);
  },
  onShow: function () {
    var t = this;
    this.setData({ deviceListData: [], Start: 0 }),
      this.setData({ deviceListDataShow: [] }),
      setTimeout(function () {
        t.startDiscovery();
      }, 500),
      1 == this.data.GM &&
        wx.getClipboardData({
          success: function (t) {
            var e = t.data;
            if ((e = e.replace(/[Oo]/g, "0")).startsWith("0x")) {
              r.default.hex_md5("Check" + e + "@t*s$e#T.'1)`").match(/(....)$/);
              for (
                var a = (Number(e) + 19880914).toString(16).substring(4, 8),
                  n = RegExp.$1,
                  i = Number(e),
                  s = 0,
                  o = i.toString(),
                  c = 0;
                c < o.length;
                c++
              )
                s += o.charCodeAt(c);
              var u = (Math.trunc(i / 655) * s).toString(16),
                h = u.substr(u.length - 6, 6);
              wx.setClipboardData({
                data:
                  "设备ID:" +
                  e +
                  "\n5.0之前蓝牙密码:" +
                  n +
                  "\n5.0及之后蓝牙密码:" +
                  a +
                  "\n5.24及之后系统密码:" +
                  h,
              });
            }
          },
        });
  },
  Scan: function () {
    this.setData({ Start: 1 }), this.startDiscovery();
  },
  onPullDownRefresh: function () {
    this.setData({ deviceListData: [] }),
      this.setData({ deviceListDataShow: [] });
    var t = this;
    setTimeout(function () {
      wx.stopPullDownRefresh(), t.startDiscovery();
    }, 500);
  },
  listViewTap: function (t) {
    var r = this;
    return a(
      e().mark(function a() {
        var n;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                t.currentTarget.dataset.name.match(/^(CAN[\-\_]|@)/)
                  ? ((n = r),
                    (o = 0),
                    i.stopBluetoothDevicesDiscovery(),
                    (s = t.currentTarget.dataset.name),
                    wx.showToast({
                      title: "设备连接中",
                      icon: "loading",
                      duration: 46e5,
                      mask: !0,
                    }),
                    h(s, n))
                  : ((a = "未知设备"),
                    (c = "不支持此蓝牙设备"),
                    wx.showModal({ title: a, content: c, showCancel: !1 }));
              case 1:
              case "end":
                return e.stop();
            }
          var a, c;
        }, a);
      })
    )();
  },
  hideLoading: function () {
    wx.hideLoading();
  },
  CMDInput: function (t) {
    this.setData({ CMD: t.detail.value });
  },
  SetUI1: function () {
    this.setData({ NewUI: 1 }),
      w("UI", 1),
      u && wx.navigateTo({ url: "../NewUI/NewUI" });
  },
  SetUI0: function () {
    this.setData({ NewUI: 0 }),
      w("UI", 0),
      u && wx.navigateTo({ url: "../device2/device?Ver=3.47&GM=" + c });
  },
  startDiscovery: function () {
    var r = this;
    return a(
      e().mark(function a() {
        var n, s;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = r).setData({ ShowUI: u ? 1 : 0 }),
                  (e.next = 4),
                  i.openBluetoothAdapter()
                );
              case 4:
                (s = e.sent).ok
                  ? (console.log("start search"),
                    i.startBluetoothDevicesDiscovery(function (e, a) {
                      n.setData({ Start: 1 });
                      var r,
                        i = t(n.data.deviceListData);
                      try {
                        for (i.s(); !(r = i.n()).done; ) {
                          var s = r.value;
                          if (
                            (s.name.startsWith("CAN-") &&
                              n.setData({ ShowUI: 1 }),
                            s.name === e)
                          )
                            return void (s.rssi = a);
                        }
                      } catch (t) {
                        i.e(t);
                      } finally {
                        i.f();
                      }
                      n.data.deviceListData.push({ name: e, rssi: a });
                    }))
                  : s.errMsg.match("调试") &&
                    (wx.navigateTo({ url: "../NewUI1/NewUI?GM=1" }),
                    wx.hideLoading());
              case 6:
              case "end":
                return e.stop();
            }
        }, a);
      })
    )();
  },
});
