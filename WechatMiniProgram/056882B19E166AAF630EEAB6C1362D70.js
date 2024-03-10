var e = require("@babel/runtime/helpers/regeneratorRuntime.js"),
  r = require("@babel/runtime/helpers/asyncToGenerator.js"),
  n = (require("89A1EFA29E166AAFEFC787A556762D70.js"), []),
  t = "",
  o = "",
  s = "",
  c = "",
  i = function (e) {
    console.log(e);
  },
  a = function () {
    return new Promise(function (e, r) {
      wx.openBluetoothAdapter({
        success: function (r) {
          e({ ok: !0, errCode: 0, errMsg: "" });
        },
        fail: function (r) {
          i(r), e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
        },
      });
    });
  },
  u = function () {
    return new Promise(function (e, r) {
      wx.closeBluetoothAdapter({
        success: function (r) {
          e({ ok: !0, errCode: 0, errMsg: "" });
        },
        fail: function (r) {
          e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
        },
      });
    });
  },
  d = function (e) {
    return new Promise(function (r, o) {
      for (var s = !1, c = 0, a = n; c < a.length; c++) {
        var u = a[c];
        if (u.name === e) {
          (s = !0), (t = u.deviceId);
          break;
        }
      }
      s
        ? wx.createBLEConnection({
            deviceId: t,
            success: function (e) {
              i(e), r({ ok: !0, errCode: 0, errMsg: "" });
            },
            fail: function (e) {
              i("connect fail"),
                i(e),
                r({ ok: !1, errCode: e.errCode, errMsg: e.errMsg });
            },
          })
        : r({
            ok: !1,
            errCode: -1,
            errMsg: "Name error,Device does not exist",
          });
    });
  },
  f = function () {
    return new Promise(function (e, r) {
      wx.closeBLEConnection({
        deviceId: t,
        success: function (r) {
          e({ ok: !0, errCode: 0, errMsg: "" });
        },
        fail: function (r) {
          e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
        },
      });
    });
  },
  g = function (e) {
    return new Promise(function (r, n) {
      wx.setBLEMTU({
        deviceId: t,
        mtu: e,
        success: function (e) {
          r({ ok: !0, errCode: 0, errMsg: "" });
        },
        fail: function (e) {
          r({ ok: !1, errCode: e.errCode, errMsg: e.errMsg });
        },
      });
    });
  },
  C = (function () {
    var n = r(
      e().mark(function r(n, C) {
        var l;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (l = {}), (e.next = 3), u();
              case 3:
                return (e.next = 5), a();
              case 5:
                return (e.next = 7), d(n);
              case 7:
                if ((l = e.sent).ok) {
                  e.next = 12;
                  break;
                }
                return (
                  (l = {
                    ok: !1,
                    errMsg: "蓝牙连接失败|" + l.errCode + "|" + l.errMsg,
                    errCode: 10001,
                  }),
                  C(l),
                  e.abrupt("return", l)
                );
              case 12:
                return (
                  (e.next = 14),
                  new Promise(function (e, r) {
                    wx.getBLEDeviceServices({
                      deviceId: t,
                      success: function (r) {
                        i("device services:"), i(r.services);
                        for (var n = 0; n < r.services.length; n++) {
                          var t;
                          if (
                            (i(r.services[n].uuid),
                            "0000FFF0-0000-1000-8000-00805F9B34FB" ===
                              (t = r.services[n].uuid.toUpperCase()))
                          )
                            return (
                              (o = "0000FFF0-0000-1000-8000-00805F9B34FB"),
                              e({ ok: !0, errCode: 0, errMsg: "" })
                            );
                          if ("FFF0" === t)
                            return (
                              (o = "FFF0"),
                              e({ ok: !0, errCode: 0, errMsg: "" })
                            );
                        }
                        e({ ok: !1, errCode: 2e4, errMsg: "服务未找到" });
                      },
                      fail: function (r) {
                        e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
                      },
                    });
                  })
                );
              case 14:
                if ((l = e.sent).ok) {
                  e.next = 20;
                  break;
                }
                return (
                  f(),
                  (l = {
                    ok: !1,
                    errMsg: "获取服务失败|" + l.errCode + "|" + l.errMsg,
                    errCode: 10002,
                  }),
                  C(l),
                  e.abrupt("return", l)
                );
              case 20:
                return (
                  (e.next = 22),
                  new Promise(function (e, r) {
                    wx.getBLEDeviceCharacteristics({
                      deviceId: t,
                      serviceId: o,
                      success: function (r) {
                        var n, t;
                        (i("device getBLEDeviceCharacteristics:"),
                        i(r.characteristics),
                        r.characteristics.length < 2)
                          ? e({ ok: !1, errCode: 2e4, errMsg: "特征值出错" })
                          : ((n = r.characteristics[0].uuid.toUpperCase()),
                            (t = r.characteristics[1].uuid.toUpperCase()),
                            ("0000FFF2-0000-1000-8000-00805F9B34FB" === n &&
                              "0000FFF1-0000-1000-8000-00805F9B34FB" === t) ||
                            ("0000FFF1-0000-1000-8000-00805F9B34FB" === n &&
                              "0000FFF2-0000-1000-8000-00805F9B34FB" === t)
                              ? ((s = "0000FFF2-0000-1000-8000-00805F9B34FB"),
                                (c = "0000FFF1-0000-1000-8000-00805F9B34FB"),
                                e({ ok: !0, errCode: 0, errMsg: "" }))
                              : ("FFF2" === n && "FFF1" === t) ||
                                ("FFF1" === n && "FFF2" === t)
                              ? ((s = "FFF2"),
                                (c = "FFF1"),
                                e({ ok: !0, errCode: 0, errMsg: "" }))
                              : e({
                                  ok: !1,
                                  errCode: 2e4,
                                  errMsg: "特征值出错",
                                }));
                      },
                      fail: function (r) {
                        e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
                      },
                    });
                  })
                );
              case 22:
                if ((l = e.sent).ok) {
                  e.next = 28;
                  break;
                }
                return (
                  f(),
                  (l = {
                    ok: !1,
                    errMsg: "获取特性失败|" + l.errCode + "|" + l.errMsg,
                    errCode: 10003,
                  }),
                  C(l),
                  e.abrupt("return", l)
                );
              case 28:
                return (
                  (e.next = 30),
                  new Promise(function (e, r) {
                    wx.notifyBLECharacteristicValueChange({
                      state: !0,
                      deviceId: t,
                      serviceId: o,
                      characteristicId: c,
                      success: function (r) {
                        e({ ok: !0, errCode: 0, errMsg: "" });
                      },
                      fail: function (r) {
                        e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
                      },
                    });
                  })
                );
              case 30:
                if ((l = e.sent).ok) {
                  e.next = 36;
                  break;
                }
                return (
                  f(),
                  (l = {
                    ok: !1,
                    errMsg: "订阅失败|" + l.errCode + "|" + l.errMsg,
                    errCode: 10004,
                  }),
                  C(l),
                  e.abrupt("return", l)
                );
              case 36:
                return (e.next = 38), g(250);
              case 38:
                return (
                  C((l = { ok: !0, errMsg: "", errCode: 0 })),
                  e.abrupt("return", l)
                );
              case 41:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
    return function (e, r) {
      return n.apply(this, arguments);
    };
  })(),
  l = function (e) {
    return new Promise(function (r, n) {
      wx.writeBLECharacteristicValue({
        deviceId: t,
        serviceId: o,
        characteristicId: s,
        value: e,
        success: function (e) {
          r({ ok: !0, errCode: 0, errMsg: "" });
        },
        fail: function (e) {
          r({ ok: !1, errCode: e.errCode, errMsg: e.errMsg });
        },
      });
    });
  },
  v = (function () {
    var n = r(
      e().mark(function r(n, t) {
        var o, s, c, i, a, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (0 !== n.length) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if (!t) {
                  e.next = 12;
                  break;
                }
                for (
                  n = unescape(encodeURIComponent(n)),
                    o = new ArrayBuffer(2 * n.length),
                    s = new Uint8Array(o),
                    c = 0;
                  c < s.length;
                  c++
                )
                  s[c] = n.charCodeAt(c);
                return (e.next = 9), l(o);
              case 9:
                return e.abrupt("return", e.sent);
              case 12:
                for (
                  i = new ArrayBuffer(n.length), a = new Uint8Array(i), u = 0;
                  u < a.length;
                  u++
                )
                  a[u] = n.charCodeAt(u);
                return (e.next = 17), l(i);
              case 17:
                return e.abrupt("return", e.sent);
              case 18:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
    return function (e, r) {
      return n.apply(this, arguments);
    };
  })(),
  F = (function () {
    var n = r(
      e().mark(function r(n, t) {
        var o, s, c, i, a, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (0 !== n.length) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if (!t) {
                  e.next = 11;
                  break;
                }
                for (
                  o = new ArrayBuffer(n.length / 2),
                    s = new Uint8Array(o),
                    c = 0;
                  c < s.length;
                  c++
                )
                  s[c] = parseInt(n.substr(2 * c, 2), 16);
                return (e.next = 8), l(o);
              case 8:
                return e.abrupt("return", e.sent);
              case 11:
                for (
                  i = new ArrayBuffer(n.length), a = new Uint8Array(i), u = 0;
                  u < a.length;
                  u++
                )
                  a[u] = n.charCodeAt(u);
                return (e.next = 16), l(i);
              case 16:
                return e.abrupt("return", e.sent);
              case 17:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
    return function (e, r) {
      return n.apply(this, arguments);
    };
  })();
module.exports = {
  openBluetoothAdapter: a,
  closeBluetoothAdapter: u,
  getBluetoothAdapterState: function () {
    return new Promise(function (e, r) {
      wx.getBluetoothAdapterState({
        success: function (r) {
          r.available
            ? e({ ok: !0, errCode: 0, errMsg: "" })
            : (i(r), e({ ok: !1, errCode: 2e4, errMsg: "蓝牙适配器关闭" }));
        },
        fail: function (r) {
          i(r), e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
        },
      });
    });
  },
  startBluetoothDevicesDiscovery: function (e) {
    (n = []),
      wx.onBluetoothDeviceFound(function (r) {
        var t = r.devices[0].name ? r.devices[0].name : r.devices[0].localName;
        if (t) {
          for (var o = 0, s = n; o < s.length; o++) {
            var c = s[o];
            if (c.name === t)
              return (c.rssi = r.devices[0].RSSI), void e(t, c.rssi);
          }
          n.push({
            name: t,
            rssi: r.devices[0].RSSI,
            deviceId: r.devices[0].deviceId,
          }),
            e(t, r.devices[0].RSSI);
        }
      }),
      wx.startBluetoothDevicesDiscovery({
        allowDuplicatesKey: !0,
        success: function (e) {},
        fail: function (e) {},
      });
  },
  stopBluetoothDevicesDiscovery: function () {
    return new Promise(function (e, r) {
      wx.stopBluetoothDevicesDiscovery({
        success: function (r) {
          e({ ok: !0, errCode: 0, errMsg: "" });
        },
        fail: function (r) {
          e({ ok: !1, errCode: r.errCode, errMsg: r.errMsg });
        },
      });
    });
  },
  easyConnect: C,
  closeBLEConnection: f,
  onBLEConnectionStateChange: function (e) {
    wx.onBLEConnectionStateChange(function (r) {
      r.connected || e();
    });
  },
  onBLECharacteristicValueChange: function (e) {
    wx.onBLECharacteristicValueChange(function (r) {
      for (
        var n = new Uint8Array(r.value), t = "", o = "", s = 0;
        s < n.length;
        s++
      )
        (t += n[s].toString(16).padStart(2, "0")),
          (o += String.fromCharCode(n[s]));
      e(decodeURIComponent(escape(o)), t);
    });
  },
  onBLECharacteristicValueChange1: function (e) {
    wx.onBLECharacteristicValueChange(function (r) {
      for (var n = new Uint8Array(r.value), t = "", o = 0; o < n.length; o++)
        (t += n[o].toString(16).padStart(2, "0")), String.fromCharCode(n[o]);
      e(0, t.toUpperCase());
    });
  },
  easySendData: v,
  easySendData1: F,
};
