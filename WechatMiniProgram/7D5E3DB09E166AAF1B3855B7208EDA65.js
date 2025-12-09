var e, r, n = require("@babel/runtime/helpers/regeneratorRuntime.js"),
  t = require("@babel/runtime/helpers/asyncToGenerator.js"),
  o = require("FE63B1F29E166AAF9805D9F5547EDA65.js"),
  s = [],
  i = "",
  c = "",
  a = "",
  u = "",
  f = -1,
  d = function () {
    return new Promise((function (e, r) {
      wx.openBluetoothAdapter({
        success: function (r) {
          (0, o.print)("BLE:", "Open BLE OK"), e({
            ok: true,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (r) {
          (0, o.print)("BLE:", r.errMsg), e({
            ok: false,
            errCode: r.errCode,
            errMsg: r.errMsg
          })
        }
      })
    }))
  },
  C = function () {
    return new Promise((function (e, r) {
      wx.closeBluetoothAdapter({
        success: function (r) {
          e({
            ok: true,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (r) {
          e({
            ok: false,
            errCode: r.errCode,
            errMsg: r.errMsg
          })
        }
      })
    }))
  },
  g = function (e) {
    s = [], wx.onBluetoothDeviceFound((function (r) {
      var n = r.devices[0].name ? r.devices[0].name : r.devices[0].localName;
      if (n) {
        for (var t = 0, o = s; t < o.length; t++) {
          var i = o[t];
          if (i.name === n) return i.rssi = r.devices[0].RSSI, void e(n, i.rssi)
        }
        s.push({
          name: n,
          rssi: r.devices[0].RSSI,
          deviceId: r.devices[0].deviceId
        }), e(n, r.devices[0].RSSI)
      }
    })), wx.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: true,
      success: function (e) {
        (0, o.print)("BLE:", "Start BLE Devices Discovery OK")
      },
      fail: function (e) {
        (0, o.print)("BLE:", e.errMsg), wx.showModal({
          showCancel: "false",
          confirmText: "我知道了",
          title: "调用蓝牙失败",
          content: "请检查权限中定位及蓝牙是否开启"
        })
      }
    })
  },
  p = function () {
    return new Promise((function (e, r) {
      wx.stopBluetoothDevicesDiscovery({
        success: function (r) {
          e({
            ok: true,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (r) {
          e({
            ok: false,
            errCode: r.errCode,
            errMsg: r.errMsg
          })
        }
      })
    }))
  },
  l = function (e) {
    return new Promise((function (r, n) {
      for (var t = false, c = 0, a = s; c < a.length; c++) {
        var u = a[c];
        if (u.name === e) {
          t = true, i = u.deviceId;
          break
        }
      }
      t ? wx.createBLEConnection({
        deviceId: i,
        timeout: 3e3,
        success: function (e) {
          -1 != f && (f = 1), (0, o.print)("BLE:", "Device Connection OK"), r({
            ok: true,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (e) {
          (0, o.print)("BLE:", e.errCode, "    ", e.errMsg), r({
            ok: false,
            errCode: e.errCode,
            errMsg: e.errMsg
          })
        }
      }) : r({
        ok: false,
        errCode: -1,
        errMsg: "Name error,Device does not exist"
      })
    }))
  },
  v = function () {
    return f = 0, new Promise((function (e, r) {
      wx.closeBLEConnection({
        deviceId: i,
        success: function (r) {
          (0, o.print)("BLE:", "closeBLEConnection OK!!!"), e({
            ok: true,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (r) {
          e({
            ok: false,
            errCode: r.errCode,
            errMsg: r.errMsg
          })
        }
      })
    }))
  },
  B = function () {
    var r = t(n().mark((function r(t) {
      return n().wrap((function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            p(), F(e, t);
          case 2:
          case "end":
            return r.stop()
        }
      }), r)
    })));
    return function (e) {
      return r.apply(this, arguments)
    }
  }(),
  h = function (e) {
    return new Promise((function (r, n) {
      wx.setBLEMTU({
        deviceId: i,
        mtu: e,
        success: function (e) {
          r({
            ok: true,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (e) {
          r({
            ok: false,
            errCode: e.errCode,
            errMsg: e.errMsg
          })
        }
      })
    }))
  },
  F = function () {
    var r = t(n().mark((function r(t, s) {
      var f;
      return n().wrap((function (r) {
        for (;;) switch (r.prev = r.next) {
          case 0:
            return f = {}, e = t, r.next = 4, C();
          case 4:
            return r.next = 6, d();
          case 6:
            return r.next = 8, l(t);
          case 8:
            if ((f = r.sent).ok) {
              r.next = 13;
              break
            }
            return f = {
              ok: false,
              errMsg: "蓝牙连接失败|" + f.errCode + "|" + f.errMsg,
              errCode: 10001
            }, s(f), r.abrupt("return", f);
          case 13:
            return r.next = 15, new Promise((function (e, r) {
              wx.getBLEDeviceServices({
                deviceId: i,
                success: function (r) {
                  (0, o.print)("BLE:", "Get BLE Device Services OK");
                  for (var n = 0; n < r.services.length; n++) {
                    var t;
                    if ((0, o.print)("BLE:", r.services[n].uuid), "0000FFF0-0000-1000-8000-00805F9B34FB" === (t = r.services[n].uuid.toUpperCase())) return c = "0000FFF0-0000-1000-8000-00805F9B34FB", e({
                      ok: true,
                      errCode: 0,
                      errMsg: ""
                    });
                    if ("FFF0" === t) return c = "FFF0", e({
                      ok: true,
                      errCode: 0,
                      errMsg: ""
                    })
                  }
                  e({
                    ok: false,
                    errCode: 2e4,
                    errMsg: "服务未找到"
                  })
                },
                fail: function (r) {
                  (0, o.print)("BLE:", r.errMsg), e({
                    ok: false,
                    errCode: r.errCode,
                    errMsg: r.errMsg
                  })
                }
              })
            }));
          case 15:
            if ((f = r.sent).ok) {
              r.next = 21;
              break
            }
            return v(), f = {
              ok: false,
              errMsg: "获取服务失败|" + f.errCode + "|" + f.errMsg,
              errCode: 10002
            }, s(f), r.abrupt("return", f);
          case 21:
            return r.next = 23, new Promise((function (e, r) {
              wx.getBLEDeviceCharacteristics({
                deviceId: i,
                serviceId: c,
                success: function (r) {
                  if ((0, o.print)("BLE:", "Get BLE Device Characteristics OK"), r.characteristics.length < 2) return (0, o.print)("BLE:", "BLE Device Characteristics Error"), void e({
                    ok: false,
                    errCode: 2e4,
                    errMsg: "特征值出错"
                  });
                  var n, t;
                  n = r.characteristics[0].uuid.toUpperCase(), t = r.characteristics[1].uuid.toUpperCase(), "0000FFF2-0000-1000-8000-00805F9B34FB" === n && "0000FFF1-0000-1000-8000-00805F9B34FB" === t || "0000FFF1-0000-1000-8000-00805F9B34FB" === n && "0000FFF2-0000-1000-8000-00805F9B34FB" === t ? (a = "0000FFF2-0000-1000-8000-00805F9B34FB", u = "0000FFF1-0000-1000-8000-00805F9B34FB", e({
                    ok: true,
                    errCode: 0,
                    errMsg: ""
                  })) : "FFF2" === n && "FFF1" === t || "FFF1" === n && "FFF2" === t ? (a = "FFF2", u = "FFF1", e({
                    ok: true,
                    errCode: 0,
                    errMsg: ""
                  })) : ((0, o.print)("BLE:", r.errMsg), e({
                    ok: false,
                    errCode: 2e4,
                    errMsg: "特征值出错"
                  }))
                },
                fail: function (r) {
                  (0, o.print)("BLE:", r.errMsg), e({
                    ok: false,
                    errCode: r.errCode,
                    errMsg: r.errMsg
                  })
                }
              })
            }));
          case 23:
            if ((f = r.sent).ok) {
              r.next = 29;
              break
            }
            return v(), f = {
              ok: false,
              errMsg: "获取特性失败|" + f.errCode + "|" + f.errMsg,
              errCode: 10003
            }, s(f), r.abrupt("return", f);
          case 29:
            return r.next = 31, new Promise((function (e, r) {
              wx.notifyBLECharacteristicValueChange({
                state: true,
                deviceId: i,
                serviceId: c,
                characteristicId: u,
                success: function (r) {
                  e({
                    ok: true,
                    errCode: 0,
                    errMsg: ""
                  })
                },
                fail: function (r) {
                  e({
                    ok: false,
                    errCode: r.errCode,
                    errMsg: r.errMsg
                  })
                }
              })
            }));
          case 31:
            if ((f = r.sent).ok) {
              r.next = 37;
              break
            }
            return v(), f = {
              ok: false,
              errMsg: "订阅失败|" + f.errCode + "|" + f.errMsg,
              errCode: 10004
            }, s(f), r.abrupt("return", f);
          case 37:
            return r.next = 39, h(250);
          case 39:
            return s(f = {
              ok: true,
              errMsg: "",
              errCode: 0
            }), r.abrupt("return", f);
          case 42:
          case "end":
            return r.stop()
        }
      }), r)
    })));
    return function (e, n) {
      return r.apply(this, arguments)
    }
  }(),
  M = function (e) {
    return new Promise((function (r, n) {
      wx.writeBLECharacteristicValue({
        deviceId: i,
        serviceId: c,
        characteristicId: a,
        value: e,
        success: function (e) {
          r({
            ok: true,
            errCode: 0,
            errMsg: ""
          })
        },
        fail: function (e) {
          r({
            ok: false,
            errCode: e.errCode,
            errMsg: e.errMsg
          })
        }
      })
    }))
  },
  k = function () {
    var e = t(n().mark((function e(r, t) {
      var o, s, i, c, a, u;
      return n().wrap((function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (0 !== r.length) {
              e.next = 2;
              break
            }
            return e.abrupt("return");
          case 2:
            if (!t) {
              e.next = 12;
              break
            }
            for (r = unescape(encodeURIComponent(r)), o = new ArrayBuffer(2 * r.length), s = new Uint8Array(o), i = 0; i < s.length; i++) s[i] = r.charCodeAt(i);
            return e.next = 9, M(o);
          case 9:
            return e.abrupt("return", e.sent);
          case 12:
            for (c = new ArrayBuffer(r.length), a = new Uint8Array(c), u = 0; u < a.length; u++) a[u] = r.charCodeAt(u);
            return e.next = 17, M(c);
          case 17:
            return e.abrupt("return", e.sent);
          case 18:
          case "end":
            return e.stop()
        }
      }), e)
    })));
    return function (r, n) {
      return e.apply(this, arguments)
    }
  }(),
  w = function () {
    var e = t(n().mark((function e(r, t) {
      var o, s, i, c, a, u;
      return n().wrap((function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            if (0 !== r.length) {
              e.next = 2;
              break
            }
            return e.abrupt("return");
          case 2:
            if (!t) {
              e.next = 11;
              break
            }
            for (o = new ArrayBuffer(r.length / 2), s = new Uint8Array(o), i = 0; i < s.length; i++) s[i] = parseInt(r.substr(2 * i, 2), 16);
            return e.next = 8, M(o);
          case 8:
            return e.abrupt("return", e.sent);
          case 11:
            for (c = new ArrayBuffer(r.length), a = new Uint8Array(c), u = 0; u < a.length; u++) a[u] = r.charCodeAt(u);
            return e.next = 16, M(c);
          case 16:
            return e.abrupt("return", e.sent);
          case 17:
          case "end":
            return e.stop()
        }
      }), e)
    })));
    return function (r, n) {
      return e.apply(this, arguments)
    }
  }();
module.exports = {
  openBluetoothAdapter: d,
  closeBluetoothAdapter: C,
  getBluetoothAdapterState: function () {
    return new Promise((function (e, r) {
      wx.getBluetoothAdapterState({
        success: function (r) {
          r.available ? ((0, o.print)("BLE:", "Get BLE Adapter State OK"), e({
            ok: true,
            errCode: 0,
            errMsg: ""
          })) : ((0, o.print)("BLE:", r.errMsg), e({
            ok: false,
            errCode: 2e4,
            errMsg: "蓝牙适配器关闭"
          }))
        },
        fail: function (r) {
          (0, o.print)("BLE:", r.errMsg), e({
            ok: false,
            errCode: r.errCode,
            errMsg: r.errMsg
          })
        }
      })
    }))
  },
  startBluetoothDevicesDiscovery: g,
  stopBluetoothDevicesDiscovery: p,
  easyConnect: F,
  ReConnect: B,
  closeBLEConnection: v,
  onReconnected: function (e) {
    r = e, f = 1
  },
  onBLEConnectionStateChange: function (e) {
    wx.onBLEConnectionStateChange((function (n) {
      n.connected || (1 == f ? (g((function (e, r) {})), setTimeout((function () {
        1 == f && B((function (n) {
          n.ok ? r() : e()
        }))
      }), 2e3)) : e())
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
      e(r.value, t.toUpperCase())
    }))
  },
  easySendData: k,
  easySendData1: w
};