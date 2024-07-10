var e = require("@babel/runtime/helpers/regeneratorRuntime.js"),
  r = require("@babel/runtime/helpers/asyncToGenerator.js"),
  n = require("F55BAF819E166AAF933DC78618273E81.js"),
  t = [],
  o = "",
  s = "",
  i = "",
  c = "",
  a = function () {
    return new Promise((function (e, r) {
      wx.openBluetoothAdapter({
        success: function (r) {
          (0, n.print)("BLE:", "Open BLE OK"), e({
            ok: !0,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (r) {
          (0, n.print)("BLE:", r.errMsg), e({
            ok: !1,
            errCode: r.errCode,
            errMsg: r.errMsg
          })
        }
      })
    }))
  },
  u = function () {
    return new Promise((function (e, r) {
      wx.closeBluetoothAdapter({
        success: function (r) {
          e({
            ok: !0,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (r) {
          e({
            ok: !1,
            errCode: r.errCode,
            errMsg: r.errMsg
          })
        }
      })
    }))
  },
  d = function (e) {
    return new Promise((function (r, s) {
      for (var i = !1, c = 0, a = t; c < a.length; c++) {
        var u = a[c];
        if (u.name === e) {
          i = !0, o = u.deviceId;
          break
        }
      }
      i ? wx.createBLEConnection({
        deviceId: o,
        success: function (e) {
          (0, n.print)("BLE:", "Device Connection OK"), r({
            ok: !0,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (e) {
          (0, n.print)("BLE:", e.errMsg), r({
            ok: !1,
            errCode: e.errCode,
            errMsg: e.errMsg
          })
        }
      }) : r({
        ok: !1,
        errCode: -1,
        errMsg: "Name error,Device does not exist"
      })
    }))
  },
  f = function () {
    return new Promise((function (e, r) {
      wx.closeBLEConnection({
        deviceId: o,
        success: function (r) {
          e({
            ok: !0,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (r) {
          e({
            ok: !1,
            errCode: r.errCode,
            errMsg: r.errMsg
          })
        }
      })
    }))
  },
  g = function (e) {
    return new Promise((function (r, n) {
      wx.setBLEMTU({
        deviceId: o,
        mtu: e,
        success: function (e) {
          r({
            ok: !0,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (e) {
          r({
            ok: !1,
            errCode: e.errCode,
            errMsg: e.errMsg
          })
        }
      })
    }))
  },
  C = function () {
    var t = r(e().mark((function r(t, C) {
      var p;
      return e().wrap((function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return p = {}, e.next = 3, u();
          case 3:
            return e.next = 5, a();
          case 5:
            return e.next = 7, d(t);
          case 7:
            if ((p = e.sent).ok) {
              e.next = 12;
              break
            }
            return p = {
              ok: !1,
              errMsg: "蓝牙连接失败|" + p.errCode + "|" + p.errMsg,
              errCode: 10001
            }, C(p), e.abrupt("return", p);
          case 12:
            return e.next = 14, new Promise((function (e, r) {
              wx.getBLEDeviceServices({
                deviceId: o,
                success: function (r) {
                  (0, n.print)("BLE:", "Get BLE Device Services OK");
                  for (var t = 0; t < r.services.length; t++) {
                    var o;
                    if ((0, n.print)("BLE:", r.services[t].uuid), "0000FFF0-0000-1000-8000-00805F9B34FB" === (o = r.services[t].uuid.toUpperCase())) return s = "0000FFF0-0000-1000-8000-00805F9B34FB", e({
                      ok: !0,
                      errCode: 0,
                      errMsg: ""
                    });
                    if ("FFF0" === o) return s = "FFF0", e({
                      ok: !0,
                      errCode: 0,
                      errMsg: ""
                    })
                  }
                  e({
                    ok: !1,
                    errCode: 2e4,
                    errMsg: "服务未找到"
                  })
                },
                fail: function (r) {
                  (0, n.print)("BLE:", r.errMsg), e({
                    ok: !1,
                    errCode: r.errCode,
                    errMsg: r.errMsg
                  })
                }
              })
            }));
          case 14:
            if ((p = e.sent).ok) {
              e.next = 20;
              break
            }
            return f(), p = {
              ok: !1,
              errMsg: "获取服务失败|" + p.errCode + "|" + p.errMsg,
              errCode: 10002
            }, C(p), e.abrupt("return", p);
          case 20:
            return e.next = 22, new Promise((function (e, r) {
              wx.getBLEDeviceCharacteristics({
                deviceId: o,
                serviceId: s,
                success: function (r) {
                  if ((0, n.print)("BLE:", "Get BLE Device Characteristics OK"), r.characteristics.length < 2) return (0, n.print)("BLE:", "BLE Device Characteristics Error"), void e({
                    ok: !1,
                    errCode: 2e4,
                    errMsg: "特征值出错"
                  });
                  var t, o;
                  t = r.characteristics[0].uuid.toUpperCase(), o = r.characteristics[1].uuid.toUpperCase(), "0000FFF2-0000-1000-8000-00805F9B34FB" === t && "0000FFF1-0000-1000-8000-00805F9B34FB" === o || "0000FFF1-0000-1000-8000-00805F9B34FB" === t && "0000FFF2-0000-1000-8000-00805F9B34FB" === o ? (i = "0000FFF2-0000-1000-8000-00805F9B34FB", c = "0000FFF1-0000-1000-8000-00805F9B34FB", e({
                    ok: !0,
                    errCode: 0,
                    errMsg: ""
                  })) : "FFF2" === t && "FFF1" === o || "FFF1" === t && "FFF2" === o ? (i = "FFF2", c = "FFF1", e({
                    ok: !0,
                    errCode: 0,
                    errMsg: ""
                  })) : ((0, n.print)("BLE:", r.errMsg), e({
                    ok: !1,
                    errCode: 2e4,
                    errMsg: "特征值出错"
                  }))
                },
                fail: function (r) {
                  (0, n.print)("BLE:", r.errMsg), e({
                    ok: !1,
                    errCode: r.errCode,
                    errMsg: r.errMsg
                  })
                }
              })
            }));
          case 22:
            if ((p = e.sent).ok) {
              e.next = 28;
              break
            }
            return f(), p = {
              ok: !1,
              errMsg: "获取特性失败|" + p.errCode + "|" + p.errMsg,
              errCode: 10003
            }, C(p), e.abrupt("return", p);
          case 28:
            return e.next = 30, new Promise((function (e, r) {
              wx.notifyBLECharacteristicValueChange({
                state: !0,
                deviceId: o,
                serviceId: s,
                characteristicId: c,
                success: function (r) {
                  e({
                    ok: !0,
                    errCode: 0,
                    errMsg: ""
                  })
                },
                fail: function (r) {
                  e({
                    ok: !1,
                    errCode: r.errCode,
                    errMsg: r.errMsg
                  })
                }
              })
            }));
          case 30:
            if ((p = e.sent).ok) {
              e.next = 36;
              break
            }
            return f(), p = {
              ok: !1,
              errMsg: "订阅失败|" + p.errCode + "|" + p.errMsg,
              errCode: 10004
            }, C(p), e.abrupt("return", p);
          case 36:
            return e.next = 38, g(250);
          case 38:
            return C(p = {
              ok: !0,
              errMsg: "",
              errCode: 0
            }), e.abrupt("return", p);
          case 41:
          case "end":
            return e.stop()
        }
      }), r)
    })));
    return function (e, r) {
      return t.apply(this, arguments)
    }
  }(),
  p = function (e) {
    return new Promise((function (r, n) {
      wx.writeBLECharacteristicValue({
        deviceId: o,
        serviceId: s,
        characteristicId: i,
        value: e,
        success: function (e) {
          r({
            ok: !0,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (e) {
          r({
            ok: !1,
            errCode: e.errCode,
            errMsg: e.errMsg
          })
        }
      })
    }))
  },
  l = function () {
    var n = r(e().mark((function r(n, t) {
      var o, s, i, c, a, u;
      return e().wrap((function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (0 !== n.length) {
              e.next = 2;
              break
            }
            return e.abrupt("return");
          case 2:
            if (!t) {
              e.next = 12;
              break
            }
            for (n = unescape(encodeURIComponent(n)), o = new ArrayBuffer(2 * n.length), s = new Uint8Array(o), i = 0; i < s.length; i++) s[i] = n.charCodeAt(i);
            return e.next = 9, p(o);
          case 9:
            return e.abrupt("return", e.sent);
          case 12:
            for (c = new ArrayBuffer(n.length), a = new Uint8Array(c), u = 0; u < a.length; u++) a[u] = n.charCodeAt(u);
            return e.next = 17, p(c);
          case 17:
            return e.abrupt("return", e.sent);
          case 18:
          case "end":
            return e.stop()
        }
      }), r)
    })));
    return function (e, r) {
      return n.apply(this, arguments)
    }
  }(),
  v = function () {
    var n = r(e().mark((function r(n, t) {
      var o, s, i, c, a, u;
      return e().wrap((function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (0 !== n.length) {
              e.next = 2;
              break
            }
            return e.abrupt("return");
          case 2:
            if (!t) {
              e.next = 11;
              break
            }
            for (o = new ArrayBuffer(n.length / 2), s = new Uint8Array(o), i = 0; i < s.length; i++) s[i] = parseInt(n.substr(2 * i, 2), 16);
            return e.next = 8, p(o);
          case 8:
            return e.abrupt("return", e.sent);
          case 11:
            for (c = new ArrayBuffer(n.length), a = new Uint8Array(c), u = 0; u < a.length; u++) a[u] = n.charCodeAt(u);
            return e.next = 16, p(c);
          case 16:
            return e.abrupt("return", e.sent);
          case 17:
          case "end":
            return e.stop()
        }
      }), r)
    })));
    return function (e, r) {
      return n.apply(this, arguments)
    }
  }();
module.exports = {
  openBluetoothAdapter: a,
  closeBluetoothAdapter: u,
  getBluetoothAdapterState: function () {
    return new Promise((function (e, r) {
      wx.getBluetoothAdapterState({
        success: function (r) {
          r.available ? ((0, n.print)("BLE:", "Get BLE Adapter State OK"), e({
            ok: !0,
            errCode: 0,
            errMsg: ""
          })) : ((0, n.print)("BLE:", r.errMsg), e({
            ok: !1,
            errCode: 2e4,
            errMsg: "蓝牙适配器关闭"
          }))
        },
        fail: function (r) {
          (0, n.print)("BLE:", r.errMsg), e({
            ok: !1,
            errCode: r.errCode,
            errMsg: r.errMsg
          })
        }
      })
    }))
  },
  startBluetoothDevicesDiscovery: function (e) {
    t = [], wx.onBluetoothDeviceFound((function (r) {
      var n = r.devices[0].name ? r.devices[0].name : r.devices[0].localName;
      if (n) {
        for (var o = 0, s = t; o < s.length; o++) {
          var i = s[o];
          if (i.name === n) return i.rssi = r.devices[0].RSSI, void e(n, i.rssi)
        }
        t.push({
          name: n,
          rssi: r.devices[0].RSSI,
          deviceId: r.devices[0].deviceId
        }), e(n, r.devices[0].RSSI)
      }
    })), wx.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: !0,
      success: function (e) {
        (0, n.print)("BLE:", "Start BLE Devices Discovery OK")
      },
      fail: function (e) {
        (0, n.print)("BLE:", e.errMsg), wx.showModal({
          showCancel: "false",
          confirmText: "我知道了",
          title: "调用蓝牙失败",
          content: "请检查权限中定位及蓝牙是否开启"
        })
      }
    })
  },
  stopBluetoothDevicesDiscovery: function () {
    return new Promise((function (e, r) {
      wx.stopBluetoothDevicesDiscovery({
        success: function (r) {
          e({
            ok: !0,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (r) {
          e({
            ok: !1,
            errCode: r.errCode,
            errMsg: r.errMsg
          })
        }
      })
    }))
  },
  easyConnect: C,
  closeBLEConnection: f,
  onBLEConnectionStateChange: function (e) {
    wx.onBLEConnectionStateChange((function (r) {
      r.connected || e()
    }))
  },
  onBLECharacteristicValueChange: function (e) {
    wx.onBLECharacteristicValueChange((function (r) {
      for (var n = new Uint8Array(r.value), t = "", o = "", s = 0; s < n.length; s++) t += n[s].toString(16).padStart(2, "0"), o += String.fromCharCode(n[s]);
      e(decodeURIComponent(escape(o)), t)
    }))
  },
  onBLECharacteristicValueChange1: function (e) {
    wx.onBLECharacteristicValueChange((function (r) {
      for (var n = new Uint8Array(r.value), t = "", o = 0; o < n.length; o++) t += n[o].toString(16).padStart(2, "0"), String.fromCharCode(n[o]);
      e(0, t.toUpperCase())
    }))
  },
  easySendData: l,
  easySendData1: v
};