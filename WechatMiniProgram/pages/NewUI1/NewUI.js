var t, e, a, n, i, r, o, s, c, u, f, F, S, h, C, l, d, B, g, T, E, D, p, A, m, G, w, b, v, I, O, U, x, N, M, W, V, P, R, L, K, y, k, $, H, Y, j, z, _, Z, q, Q, J, X, tt, et, at, nt, it, rt, ot, st, ct, ut, ft, Ft, St, ht, Ct, lt, dt, Bt, gt, Tt, Et, Dt, pt, At, mt, Gt, wt, bt, vt, It, Ot, Ut, xt, Nt, Mt, Wt, Vt, Pt, Rt, Lt, Kt, yt, kt, $t, Ht, Yt, jt, zt, _t, Zt = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  qt = require("../../@babel/runtime/helpers/asyncToGenerator"),
  Qt = require("../../02BB97E59E166AAF64DDFFE25164AA85.js"),
  Jt = require("../../C2110F759E166AAFA47767728C64AA85.js"),
  Xt = 1,
  te = 0,
  ee = 0,
  ae = 0,
  ne = 0,
  ie = 0,
  re = "设备连接成功",
  oe = 0,
  se = 0,
  ce = 30,
  ue = 0,
  fe = 0,
  Fe = 0,
  Se = 0,
  he = 0,
  Ce = 1,
  le = "欢迎使用",
  de = "1,27,30,欢迎",
  Be = "1,57,30,使用",
  ge = 0,
  Te = "ff",
  Ee = "ff",
  De = "ff",
  pe = ["/img/bc1.gif", "", "", "", ""],
  Ae = 0,
  me = "80",
  Ge = 0,
  we = wx,
  be = "#ffffff",
  ve = ["1", "2", "3", "4"],
  Ie = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "温度 异常", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"],
  Oe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Ue(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  we.showModal({
    title: t,
    editable: true,
    placeholderText: e,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      t.confirm && a(t.content)
    }
  })
}

function xe(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  we.showModal({
    title: k ? e : t,
    editable: true,
    placeholderText: (k ? "Range:" : "范围:") + a + "-" + n,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(n) || e < Number(a) || !isFinite(e)) && 2 != ne) return void(0, Qt.Toast)(k ? "Beyond the set range!" : "超出设置范围!");
        i(e)
      }
    }
  })
}

function Ne(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  we.showModal({
    title: k ? e : t,
    editable: true,
    placeholderText: k ? n : a,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, Qt.Toast)(k ? "Input Cannot Be Empty!" : "输入不能为空!");
        i(e)
      }
    }
  })
}

function Me(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  we.showModal({
    title: k ? e : t,
    content: k ? n : a,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      t.confirm && i(t)
    }
  })
}

function We(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function Ve(t) {
  var e = Math.floor(t / 3600),
    a = Math.floor(t % 3600 / 60),
    n = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(a).padStart(2, "0") + ":" + String(n).padStart(2, "0")
}

function Pe(t) {
  return Re.apply(this, arguments)
}

function Re() {
  return (Re = qt(Zt().mark((function t(e) {
    return Zt().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (1 == ae && console.log("Send", e), 0 == Ke) {
            t.next = 4;
            break
          }
          return (0, Qt.Toast)(k ? "There Are Unfinished Sending Tasks" : "有发送任务未完成"), t.abrupt("return");
        case 4:
          return e = e.substring(0, 40), t.next = 7, Jt.easySendData1(e, true);
        case 7:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var Le = [""],
  Ke = 0;

function ye(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  0 == Ke ? we.showModal({
    title: k ? "Confirm Whether To Send" : "确认是否发送",
    editable: false,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (n) {
      if (n.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), Ke = 0, (Le = [])[0] = "F1" + (a ? RegExp.$1 : He(RegExp.$1));
        for (var i = e ? RegExp.$2 : $e(RegExp.$2), r = 0; r < i.length; r += 240) Ke++, Le[Ke] = "F2" + i.slice(r, r + 240);
        Le[Le.length] = "F3", Ke = 0, ke()
      }
    }
  }) : (0, Qt.Toast)(k ? "There Are Unfinished Sending Tasks" : "有发送任务未完成")
}

function ke(t) {
  var e = Le[Ke];
  Jt.easySendData1(e, true), (0, Qt.Toast)((k ? "Sending:" : "发送进度:") + (Ke / Le.length * 100).toFixed(2) + "%"), Ke++
}

function $e(t) {
  if (!t) return t;
  var e, a, n, i, r, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    c = 0,
    u = 0,
    f = [];
  t += "";
  do {
    e = (o = s.indexOf(t.charAt(c++)) << 18 | s.indexOf(t.charAt(c++)) << 12 | (i = s.indexOf(t.charAt(c++))) << 6 | (r = s.indexOf(t.charAt(c++)))) >> 16 & 255, a = o >> 8 & 255, n = 255 & o, f[u++] = 64 === i ? e.toString(16).padStart(2, "0") : 64 === r ? e.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0") : e.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0")
  } while (c < t.length);
  return f.join("")
}

function He(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString(16).padStart(2, "0");
  return e && (a = a.padEnd(2 * e, "0")), a
}

function Ye(t) {
  for (var e = "", a = 0, n = "", i = 0; i < t.length / 2; i++) {
    var r = t.substr(2 * i, 2),
      o = parseInt(r, 16);
    if (0 == o) break;
    a && o ? (n += "%" + r, (a -= 1) || (e += decodeURIComponent(n), n = "")) : o >= 224 & o <= 239 ? (n += "%" + r, a = 2) : o && (e += String.fromCharCode(o))
  }
  return e
}

function je(t) {
  return Math.floor(100 * t).toString(16).padStart(8, "0")
}

function ze(t) {
  return Math.floor(t).toString(16).padStart(4, "0")
}

function _e(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function Ze(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    i = t.getFloat32(e, true).toFixed(a);
  return n ? parseFloat(i) : i
}

function qe(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    n = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return a ? parseFloat(n) : n
}

function Qe(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}

function Je(t) {
  for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, a = 0, n = 0; n < 12; n++)
    if (Ie[n] == t) {
      Oe[n] = e, a = 1;
      break
    } if (!a && e)
    for (var i = 1; i < 11; i++)
      if (6 != i && 0 == Oe[i]) {
        Ie[i] = t, Oe[i] = e;
        break
      }
}
Page({
  data: {
    nbsp: "　",
    Cr0: be,
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: be,
    Cr4: "#60ffc8",
    Cr5: be,
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: be,
    Cr10: be,
    Cr11: "#00ff00",
    Cr12: "#00c8ff",
    Cr13: "#ff9430",
    Cr14: "#60ffc8",
    Cr15: be,
    Cr16: "#f80ca0",
    Cr17: be,
    Cri: 0,
    CR: 255,
    CG: 255,
    CB: 255,
    CR1: 0,
    CG1: 0,
    CB1: 0,
    CT1: 160,
    Crs: 1,
    LOGO: "欢迎使用",
    LOGO1: "1,27,30,欢迎",
    LOGO2: "1,57,30,使用",
    BGP: "/img/bc1.gif",
    BGC: "#00000080",
    BGI: 0,
    SA: "0.00",
    SV: "0.00",
    Sv: "0.00",
    Sa: "0.00",
    SOC: 0,
    Sd: "00:00:00",
    SD: 0,
    EEI: "0.00",
    EES: "0.00",
    IV: "0.00",
    IA: "0.00",
    IT: "0.00",
    IW: "0.00",
    Ah: "0.00",
    Wh: "0.00",
    Ti: "00:00:00",
    KS1: [54.6, 15],
    KS2: [64.8, 15],
    KS3: [72.4, 15],
    KS4: [84, 15],
    KSi: 1,
    OV: "0.00",
    OA: "0.00",
    OT: "0.00",
    OW: "0.00",
    AH: "0.00",
    WH: "0.00",
    TI: "00:00:00",
    UHQ: 0,
    SA2: "0.00",
    SV2: "0.00",
    NSD: "00:00:00",
    SDU: "0.00",
    UMW: "0000",
    ShowM: 0,
    LST: 0,
    APP: "1.09",
    STR: "设备连接异常",
    CVer: 10,
    UI: 0,
    UPS: 0,
    UPV: 0,
    FSize: 30,
    Panel: 1,
    CEV: 0,
    YS: "00:00:00",
    CAN: 10,
    SCAN: "请重启小程序或手机再试",
    Mode: "A",
    OVT: 1,
    OAT: 1,
    OVF: 1,
    OAF: 1,
    FAN: 50,
    ShowBar: 25,
    TMW: "75℃3000W",
    UPDate: 5.2,
    VIN: "LGXC76C43M0044948",
    ERC: 0,
    EAS: [],
    EBS: [],
    ESS: [],
    DEV: 0,
    DET: ""
  },
  BTUP: function (t) {
    this.setData({
      ShowBar: 4 != this.data.ShowBar ? 4 : -1
    })
  },
  BTDDT: function (t) {
    this.setData({
      ShowBar: 7 != this.data.ShowBar ? 7 : -1
    })
  },
  BTKEY: function (t) {
    this.setData({
      ShowBar: 8 != this.data.ShowBar ? 8 : -1
    })
  },
  BTBLE: function (t) {
    this.setData({
      ShowBar: 9 != this.data.ShowBar ? 9 : -1
    })
  },
  BTCr: function (t) {
    this.setData({
      ShowBar: 10 != this.data.ShowBar ? 10 : -1
    })
  },
  BTLEDK: function (t) {
    this.setData({
      ShowBar: 11 != this.data.ShowBar ? 11 : -1
    })
  },
  BTLEDKS: function (t) {
    this.setData({
      ShowBar: 12 != this.data.ShowBar ? 12 : -1
    })
  },
  BTStart: function (t) {
    this.setData({
      ShowBar: 13 != this.data.ShowBar ? 13 : -1
    })
  },
  BTGIF: function (t) {
    this.setData({
      ShowBar: 14 != this.data.ShowBar ? 14 : -1
    })
  },
  BTOVT: function (t) {
    var e = this.data.ShowBar;
    this.setData({
      ShowBar: 0 != e ? 0 : -1
    })
  },
  BTOAT: function (t) {
    var e = this.data.ShowBar;
    this.setData({
      ShowBar: 1 != e ? 1 : -1
    }), wx.pageScrollTo({
      scrollTop: 1 != e ? 50 : 0,
      duration: 300
    })
  },
  BTOVF: function (t) {
    this.setData({
      ShowBar: 2 != this.data.ShowBar ? 2 : -1
    })
  },
  BTOAF: function (t) {
    this.setData({
      ShowBar: 3 != this.data.ShowBar ? 3 : -1
    })
  },
  BTUMT: function (t) {
    this.setData({
      ShowBar: 5 != this.data.ShowBar ? 5 : -1
    })
  },
  BTFAN: function (t) {
    this.setData({
      ShowBar: 6 != this.data.ShowBar ? 6 : -1
    })
  },
  BTCAN: function (t) {
    this.setData({
      ShowBar: 16 != this.data.ShowBar ? 16 : -1
    })
  },
  BTNTC: function (t) {
    this.setData({
      ShowBar: 17 != this.data.ShowBar ? 17 : -1
    })
  },
  BTSMW: function (t) {
    this.setData({
      ShowBar: 18 != this.data.ShowBar ? 18 : -1
    })
  },
  BTEN: function (t) {
    this.setData({
      ShowBar: 19 != this.data.ShowBar ? 19 : -1
    })
  },
  BTLOGO: function (t) {
    this.setData({
      ShowBar: 20 != this.data.ShowBar ? 20 : -1
    })
  },
  BTCKA: function (t) {
    this.setData({
      ShowBar: 21 != this.data.ShowBar ? 21 : -1
    })
  },
  BTHELP: function (t) {
    this.setData({
      ShowBar: 22 != this.data.ShowBar ? 22 : -1
    })
  },
  BTYC: function (t) {
    this.setData({
      ShowBar: 23 != this.data.ShowBar ? 23 : -1
    })
  },
  BTTCH: function (t) {
    this.setData({
      ShowBar: 24 != this.data.ShowBar ? 24 : -1
    })
  },
  BTBGP: function (t) {
    this.setData({
      ShowBar: 25 != this.data.ShowBar ? 25 : -1
    })
  },
  BTRST0: function (t) {
    this.setData({
      ShowBar: 26 != this.data.ShowBar ? 26 : -1
    })
  },
  BTUCF: function (t) {
    this.setData({
      ShowBar: 27 != this.data.ShowBar ? 27 : -1
    })
  },
  BTKT: function (t) {
    this.setData({
      ShowBar: 28 != this.data.ShowBar ? 28 : -1
    })
  },
  BTUIW: function (t) {
    this.setData({
      ShowBar: 29 != this.data.ShowBar ? 29 : -1
    })
  },
  uset: function (t) {
    Pe("FF01"), (2 == ie || ne) && this.setData({
      Panel: ne ? 2 : 3,
      ShowBar: ne ? 0 : Xt < Number("5.42") ? 4 : 25,
      LOGO: k ? "Preview" : "预览"
    })
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, Qt.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    Ne("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      Pe("FA75" + He(t))
    }))
  },
  BTRST: function (t) {
    Me("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      Pe("F60100"), (0, Qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTRST1: function (t) {
    Me("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置并重启", "Exception repair will detect and reset certain settings", (function (t) {
      Pe("F60001"), (0, Qt.Toast)(k ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    Me("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      Pe("F001"), (0, Qt.Toast)(k ? "The device is restarting" : "设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    Me("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      Pe("AA01"), (0, Qt.Toast)(k ? "Data cleared to zero" : "数据已清零!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTBC: function (t) {
    this.setData({
      Panel: 1
    })
  },
  DST1: function (t) {
    Pe("AC00"), Pe("FF18")
  },
  DST2: function (t) {
    Pe("AC01"), Pe("FF18")
  },
  DST3: function (t) {
    Pe("AC02"), Pe("FF18")
  },
  DST4: function (t) {
    Pe("AC03"), Pe("FF18")
  },
  BTKT1: function (t) {
    Pe("A4" + _e(1 - Y))
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), xe("设置输出最大功率", "Set maximum output power", "500", "10000", (function (t) {
      Pe("F84E" + je(t)), Pe("F84D" + je(t)), Pe("FF12")
    }))
  },
  BTLOGO0: function (t) {
    if ("预览" == a.data.LOGO || "Preview" == a.data.LOGO) we.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: true
    }), a.SetLOGO(de + "|" + Be, a);
    else if ("发送" == a.data.LOGO || "Send" == a.data.LOGO) {
      return ye(o, 1), void Pe("FAD2" + He(unescape(encodeURIComponent(le))))
    }
    a.setData({
      ShowBar: 20,
      LOGO: k ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (t) {
    Ne("设置第一行LOGO", "Set the first line logo", de, de, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) de = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) de = "1,27,30," + RegExp.$1, Be = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Qt.Toast)(k ? "Input format error" : "输入格式错误");
        de = "1,27,30," + RegExp.$1
      }
      a.setData({
        LOGO1: de,
        LOGO2: Be,
        LOGO: k ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO2: function (t) {
    Ne("设置第二行LOGO", "Set second line logo", Be, Be, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Be = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) de = "1,27,30," + RegExp.$1, Be = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Qt.Toast)(k ? "Input format error" : "输入格式错误");
        Be = "1,57,30," + RegExp.$1
      }
      a.setData({
        LOGO1: de,
        LOGO2: Be,
        LOGO: k ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO3: function (t) {
    Pe("F9C0" + _e(1 - Nt)), Pe("FF17")
  },
  BTLOGO4: function (t) {
    Ne("设置简约模式文字", "Set the first line logo", "最多6个汉字或者12个英文", de, (function (t) {
      Pe("FAD2" + He(t = unescape(encodeURIComponent(t)))), Pe("F7")
    }))
  },
  SetLOGO: function (t, e) {
    we.createSelectorQuery().select("#LOGO").fields({
      node: true,
      size: true
    }).exec((function (a) {
      var n = a[0].node,
        i = n.getContext("2d");
      n.width = 60, n.height = 60, i.fillStyle = "#000", i.scale(1, 1), i.fillRect(0, 0, 60, 60), i.fillStyle = "#fff";
      var r = t.split("|");
      le = "";
      for (var s = 0; s < r.length; s += 1) {
        var c = r[s].split(",");
        le += c[3];
        var u = c[0],
          f = c[1],
          F = c[2],
          S = c[3];
        i.font = "normal " + F + "px Kaiti", i.fillText(S, u, f)
      }
      var h = [0],
        C = -1;
      o = "DataStart=LOGO{";
      for (var l = 0; l < 60; l += 1) {
        for (var d = i.getImageData(0, l, 60, 1).data, B = 0; B < 60; B += 1) {
          B % 8 == 0 && (B && (o += h[C].toString(16).padStart(2, "0")), C += 1);
          var g = .299 * d[4 * B] + .587 * d[4 * B + 1] + .114 * d[4 * B + 2];
          h[C] = h[C] >> 1, h[C] = h[C] | (g < 100 ? 0 : 128)
        }
        o += (h[C] >> 4).toString(16).padStart(2, "0")
      }
      o += "}DataEnd", we.hideToast(), e.setData({
        LOGO: k ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    Pe("F962" + _e(1 - wt)), Pe("FF16")
  },
  BTCAN1: function (t) {
    Me("确认是否切换为华为", "Switch to Huawei", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Pe("FC530101"), (0, Qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN2: function (t) {
    Me("确认是否切换为英可瑞", "Switch to Increase", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Pe("FC530201"), (0, Qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN4: function (t) {
    Me("确认是否切换为中兴3000", "Switch to ZTE3000", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Pe("FC530401"), (0, Qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN8: function (t) {
    Me("确认是否切换为英飞源", "Switch to Infy", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Pe("FC530801"), (0, Qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN16: function (t) {
    Me("确认是否切换为EPS6020", "Switch to EPS6020", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Pe("FC531001"), (0, Qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN32: function (t) {
    Me("确认是否切换为中兴4875", "Switch to ZTE4875", "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == ne) {
        for (var e = parseInt(D, 16), a = e.toString(), n = 0, i = 0; i < a.length; i++) n += a.charCodeAt(i);
        Pe("C83F" + Math.floor(Math.floor(e / 611) * n).toString(16).slice(-6)), Pe("FC532001")
      } else Pe("FC532001"), (0, Qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN64: function (t) {
    Me("确认是否切换为SER10010K", "Switch to SER10010K", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Pe("FC534001"), (0, Qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN65: function (t) {
    Me("确认是否切换为BH10M100", "Switch to BH10M100", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Pe("FC534101"), (0, Qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN66: function (t) {
    Me("确认是否切换为MC1503N5R", "Switch to MC1503N5R", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Pe("FC534201"), (0, Qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), we.navigateBack({
        delta: 0
      })
    }))
  },
  BTLEDK2: function (t) {
    xe("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      Pe("F968" + _e(t)), Pe("FF13")
    }))
  },
  BTLEDK1: function (t) {
    xe("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      Pe("F969" + _e(t)), Pe("FF13")
    }))
  },
  BTLEDKS1: function (t) {
    xe("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      Pe("F96D" + _e(t)), Pe("FF12")
    }))
  },
  BTLEDKS2: function (t) {
    xe("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      Pe("F96A" + _e(t)), Pe("FF13")
    }))
  },
  BTStart1: function (t) {
    xe("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      Pe("F96B" + _e(t)), Pe("FF12")
    }))
  },
  BTStart2: function (t) {
    Pe("F96C" + _e(1 - J)), Pe("FF12")
  },
  BTGIF1: function (t) {
    Pe("F96F" + _e(1 - Et)), Pe("FF15")
  },
  BT_GIF1: function (t) {
    ye((0, Qt.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    ye((0, Qt.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    ye((0, Qt.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    ye((0, Qt.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    ye((0, Qt.GetGIF)(5))
  },
  BTUI: function (t) {
    a.setData({
      CVer: Xt.toFixed(2),
      SCAN: y,
      ID: D,
      ACT: n
    }), Pe("F9C8" + _e(1 - Yt)), Pe("FF19")
  },
  Scr1: function (t) {
    Ce = 1, a.setData({
      Cr0: be,
      Cr1: "#00ff00",
      Cr2: "#00c8ff",
      Cr3: be,
      Cr4: "#60ffc8",
      Cr5: be,
      Cr6: "#ff9430",
      Cr7: "#f80ca0",
      Cr8: be,
      Cr10: be,
      Cr11: "#00ff00",
      Cr12: "#00c8ff",
      Cr13: "#ff9430",
      Cr14: "#60ffc8",
      Cr15: be,
      Cr16: "#f80ca0",
      Cr17: be,
      Crs: Ce
    })
  },
  Scr2: function (t) {
    Ce = 2, a.setData({
      Cr0: be,
      Cr1: be,
      Cr2: be,
      Cr3: be,
      Cr4: be,
      Cr5: be,
      Cr6: be,
      Cr7: be,
      Cr8: be,
      Cr10: be,
      Cr11: be,
      Cr12: be,
      Cr13: be,
      Cr14: be,
      Cr15: be,
      Cr16: be,
      Cr17: be,
      Crs: Ce
    })
  },
  Scr3: function (t) {
    Ce = 3, a.setData({
      Cr0: "#ffffff",
      Cr1: "#00ff00",
      Cr2: "#ffbbff",
      Cr3: "#40ffbb",
      Cr4: "#ffff70",
      Cr5: "#ffffff",
      Cr6: "#40ffbb",
      Cr7: "#bbeeff",
      Cr8: "#aaffcc",
      Cr10: "#00ffff",
      Cr11: "#00ff00",
      Cr12: "#ffbbff",
      Cr13: "#ff8000",
      Cr14: "#aaeecc",
      Cr15: "#aaeecc",
      Cr16: "#eeccaa",
      Cr17: "#bbeeff",
      Crs: Ce
    })
  },
  Scr4: function (t) {
    Ce = 0, a.setData({
      Cr0: (0, Qt.GetCFG)("Cr0", be),
      Cr1: (0, Qt.GetCFG)("Cr1", "#00ff00"),
      Cr2: (0, Qt.GetCFG)("Cr2", "#00c8ff"),
      Cr3: (0, Qt.GetCFG)("Cr3", be),
      Cr4: (0, Qt.GetCFG)("Cr4", "#60ffc8"),
      Cr5: (0, Qt.GetCFG)("Cr5", be),
      Cr6: (0, Qt.GetCFG)("Cr6", "#ff9430"),
      Cr7: (0, Qt.GetCFG)("Cr7", "#f80ca0"),
      Cr8: (0, Qt.GetCFG)("Cr8", be),
      Cr10: (0, Qt.GetCFG)("Cr10", be),
      Cr11: (0, Qt.GetCFG)("Cr11", "#00ff00"),
      Cr12: (0, Qt.GetCFG)("Cr12", "#00c8ff"),
      Cr13: (0, Qt.GetCFG)("Cr13", "#ff9430"),
      Cr14: (0, Qt.GetCFG)("Cr14", "#60ffc8"),
      Cr15: (0, Qt.GetCFG)("Cr15", be),
      Cr16: (0, Qt.GetCFG)("Cr16", "#f80ca0"),
      Cr17: (0, Qt.GetCFG)("Cr17", be),
      Crs: Ce
    })
  },
  BTCr1: function (t) {
    0 == a.data.UI ? (Pe("F53000" + We(this.data.Cr0) + "0000f01c"), Pe("F53100" + We(this.data.Cr1) + "00209F26"), Pe("F53200" + We(this.data.Cr2) + "00479F26"), Pe("F53300" + We(this.data.Cr3) + "006e9F27"), Pe("F53400" + We(this.data.Cr4) + "00969F3f"), Pe("F53500" + We(this.data.Cr5) + "A3204d4d"), Pe("F53600" + We(this.data.Cr6) + "50d64f1A"), Pe("F53700" + We(this.data.Cr7) + "00d64f1A"), Pe("F53801" + We(this.data.Cr8) + "A3774d68")) : 1 == a.data.UI && (Pe("F52000" + We(this.data.Cr10) + "0000781c"), Pe("F52100" + We(this.data.Cr11) + "001cf02e"), Pe("F52200" + We(this.data.Cr12) + "004af02e"), Pe("F52300" + We(this.data.Cr13) + "0078f02e"), Pe("F52400" + We(this.data.Cr14) + "00a6f02e"), Pe("F52500" + We(this.data.Cr15) + "7800781c"), Pe("F52600" + We(this.data.Cr16) + "00d4781b"), Pe("F52701" + We(this.data.Cr17) + "78d4781b"))
  },
  CK0: function (t) {
    ge = 0, this.CRSet(this.data.Cr0)
  },
  CK1: function (t) {
    ge = 1, this.CRSet(this.data.Cr1)
  },
  CK2: function (t) {
    ge = 2, this.CRSet(this.data.Cr2)
  },
  CK3: function (t) {
    ge = 3, this.CRSet(this.data.Cr3)
  },
  CK4: function (t) {
    ge = 4, this.CRSet(this.data.Cr4)
  },
  CK5: function (t) {
    ge = 5, this.CRSet(this.data.Cr5)
  },
  CK6: function (t) {
    ge = 6, this.CRSet(this.data.Cr6)
  },
  CK7: function (t) {
    ge = 7, this.CRSet(this.data.Cr7)
  },
  CK8: function (t) {
    ge = 8, this.CRSet(this.data.Cr8)
  },
  CK10: function (t) {
    ge = 10, this.CRSet(this.data.Cr10)
  },
  CK11: function (t) {
    ge = 11, this.CRSet(this.data.Cr11)
  },
  CK12: function (t) {
    ge = 12, this.CRSet(this.data.Cr12)
  },
  CK13: function (t) {
    ge = 13, this.CRSet(this.data.Cr13)
  },
  CK14: function (t) {
    ge = 14, this.CRSet(this.data.Cr14)
  },
  CK15: function (t) {
    ge = 15, this.CRSet(this.data.Cr15)
  },
  CK16: function (t) {
    ge = 16, this.CRSet(this.data.Cr16)
  },
  CK17: function (t) {
    ge = 17, this.CRSet(this.data.Cr17)
  },
  CRSet: function (t) {
    t.match(/#(..)(..)(..)/), Te = RegExp.$1, Ee = RegExp.$2, De = RegExp.$3, this.setData({
      CR: parseInt(Te, 16),
      CG: parseInt(Ee, 16),
      CB: parseInt(De, 16)
    })
  },
  SetCr: function () {
    0 == a.data.UI && ge >= 10 && (ge = 0), 1 == a.data.UI && ge < 10 && (ge = 10), 0 == ge ? a.setData({
      Cr0: "#" + Te + Ee + De
    }) : 1 == ge ? a.setData({
      Cr1: "#" + Te + Ee + De
    }) : 2 == ge ? a.setData({
      Cr2: "#" + Te + Ee + De
    }) : 3 == ge ? a.setData({
      Cr3: "#" + Te + Ee + De
    }) : 4 == ge ? a.setData({
      Cr4: "#" + Te + Ee + De
    }) : 5 == ge ? a.setData({
      Cr5: "#" + Te + Ee + De
    }) : 6 == ge ? a.setData({
      Cr6: "#" + Te + Ee + De
    }) : 7 == ge ? a.setData({
      Cr7: "#" + Te + Ee + De
    }) : 8 == ge ? a.setData({
      Cr8: "#" + Te + Ee + De
    }) : 10 == ge ? a.setData({
      Cr10: "#" + Te + Ee + De
    }) : 11 == ge ? a.setData({
      Cr11: "#" + Te + Ee + De
    }) : 12 == ge ? a.setData({
      Cr12: "#" + Te + Ee + De
    }) : 13 == ge ? a.setData({
      Cr13: "#" + Te + Ee + De
    }) : 14 == ge ? a.setData({
      Cr14: "#" + Te + Ee + De
    }) : 15 == ge ? a.setData({
      Cr15: "#" + Te + Ee + De
    }) : 16 == ge ? a.setData({
      Cr16: "#" + Te + Ee + De
    }) : 17 == ge && a.setData({
      Cr17: "#" + Te + Ee + De
    })
  },
  CSC: function (t) {
    0 == Ce && (0, Qt.SetCFG)("Cr" + ge, "#" + Te + Ee + De)
  },
  CRC: function (t) {
    Te = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CGC: function (t) {
    Ee = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CBC: function (t) {
    De = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CTC1: function (t) {
    me = t.detail.value.toString(16).padStart(2, "0"), (0, Qt.SetCFG)("BGT", me), a.setData({
      BGC: "#000000" + me
    })
  },
  BTBGP1: function (t) {
    Ne("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Qt.SetCFG)("BGI", 1), (0, Qt.SetCFG)("BGP1", t), a.setData({
        BGP1: t,
        BGP: t,
        BGI: 1
      })
    }))
  },
  BTBGP2: function (t) {
    Ne("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Qt.SetCFG)("BGI", 2), (0, Qt.SetCFG)("BGP2", t), a.setData({
        BGP2: t,
        BGP: t,
        BGI: 2
      })
    }))
  },
  BTBGP3: function (t) {
    Ne("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Qt.SetCFG)("BGI", 3), (0, Qt.SetCFG)("BGP3", t), a.setData({
        BGP3: t,
        BGP: t,
        BGI: 3
      })
    }))
  },
  BTBGP4: function (t) {
    Ne("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Qt.SetCFG)("BGI", 4), (0, Qt.SetCFG)("BGP4", t), a.setData({
        BGP4: t,
        BGP: t,
        BGI: 4
      })
    }))
  },
  BTBGP0: function (t) {
    5 == ++Ae && (Ae = 0), a.setData({
      BGP: pe[Ae],
      BGI: Ae
    }), (0, Qt.SetCFG)("BGI", Ae)
  },
  BTCKA2: function (t) {
    Pe("F972" + _e(1 - Dt)), Pe("FF15")
  },
  BTEN1: function (t) {
    ee && this.MSG("", "1100001BE4000005DC000020D0000005DC010" + (1 - k) + "00"), (0, Qt.SetCFG)("UEN", 1 - k), Pe("F970" + _e(1 - k)), Pe("FF11")
  },
  BTBLE1: function (t) {
    Ne("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      Pe("FA73" + He(t = unescape(encodeURIComponent(t)))), Pe("FF20")
    }))
  },
  BTBLE2: function (t) {
    Ne("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      Pe("FA74" + He(t)), Pe("FF21")
    }))
  },
  BTVIN: function (t) {
    Ne("设置取电器VIN码", "Set VIN", "标准17位英文和数字", "Up to 17 characters", (function (t) {
      return (t = t.toUpperCase()).match(/^[A-HJ-NPR-Z0-9]{14}\d\d\d$/) ? (Pe("FAD3" + He(t = unescape(encodeURIComponent(t)))), void Pe("FF25")) : void(0, Qt.Toast)(k ? "Incorrect VIN input!" : "输入VIN不正确!")
    }))
  },
  BTTCH1: function (t) {
    Ne("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return Pe("FAD1" + He(t)), void Pe("FF24");
      (0, Qt.Toast)(k ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    xe("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      Pe("F9C7" + _e(t)), Pe("FF18")
    }))
  },
  BTKEY1: function (t) {
    Pe("F967" + _e(1 - V)), Pe("FF10")
  },
  BTKEY2: function (t) {
    Pe("F966" + _e(1 - $)), Pe("FF11")
  },
  BTDDT1: function (t) {
    Pe("F96E" + _e(bt >= 3 ? 0 : bt + 1)), Pe("FF16")
  },
  UPDate: function (a, n) {
    Pe("AB00" + He(unescape(encodeURIComponent(t)))), Pe("AB01" + He(unescape(encodeURIComponent(e)))), Pe(a + He(n)), (0, Qt.Toast)(k ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
  },
  BTLST: function (t) {
    this.setData({
      LST: 1 - this.data.LST
    })
  },
  BTUP6: function (t) {
    Ne("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Qt.SetCFG)("WID", t), Pe("AB00" + He(t = unescape(encodeURIComponent(t)))), Pe("FF22")
    }))
  },
  BTUP7: function (t) {
    Ne("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Qt.SetCFG)("WPD", t), Pe("AB01" + He(t = unescape(encodeURIComponent(t)))), Pe("FF23")
    }))
  },
  BTUP1: function (t) {
    if (!Ge)
      if (this.data.CVer >= this.data.UPDate) {
        if (oe) return;
        Me("升级确认", "Confirm clearance date", "当前已经是最新版,确定是否重新升级固件", "", (function (t) {
          a.UPDate("A700000000", "NewUI")
        }))
      } else we.showModal({
        title: k ? "Start Upgrade" : "开始升级",
        editable: false,
        confirmText: k ? "YES" : "确定",
        cancelText: k ? "NO" : "取消",
        success: function (t) {
          t.confirm && a.UPDate("A700000000", "NewUI")
        }
      })
  },
  BTUP5: function (t) {
    2 == ne && Me("确认清除日期", "Confirm clearance date", "", "", (function (t) {
      Pe("FD48" + He("Cxjdwx"))
    }))
  },
  BTUP8: function (t) {
    we.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    we.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    we.setClipboardData({
      data: "设备ID:" + D
    })
  },
  BTUP0: function (t) {
    we.showModal({
      title: k ? "Firmware rollback" : "固件回退",
      editable: false,
      confirmText: k ? "YES" : "确定",
      cancelText: k ? "NO" : "取消",
      success: function (t) {
        t.confirm && (te && a.UPDate("A700000000", "CEVRollBack"), te || a.UPDate("A700000000", "CANRollBack"))
      }
    })
  },
  BTUP9: function (t) {
    we.showModal({
      title: k ? "Write Test Firmware" : "升级测试固件",
      content: "测试版本固件可能会有未知的BUG,如遇到BUG可以升级到正式版或者退回稳定版",
      editable: false,
      confirmText: "确定",
      cancelText: "取消",
      success: function (t) {
        t.confirm && a.UPDate("A700000000", "NewTest")
      }
    })
  },
  BTUFS: function (t) {
    xe("设置温度加速值", "Set temperature acceleration value", "2", "20", (function (t) {
      Pe("F963" + _e(t)), Pe("FF14")
    }))
  },
  BTAFS: function (t) {
    xe("设置电流加速值", "Set current acceleration value", "0.1", "3.0", (function (t) {
      Pe("F964" + _e(10 * t)), Pe("FF14")
    }))
  },
  BTLFS: function (t) {
    xe("设置初始风速值", "Set initial wind speed value", "20", "200", (function (t) {
      Pe("F965" + _e(t)), Pe("FF14")
    }))
  },
  BTMFS: function (t) {
    xe("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      Pe("F9C5" + _e(t)), Pe("FF14")
    }))
  },
  BTTMC: function (t) {
    xe("设置超温进入温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      Pe("F84A" + je(t)), Pe("FF13")
    }))
  },
  BTTMC1: function (t) {
    xe("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      Pe("F84B" + je(t)), Pe("FF13")
    }))
  },
  BTOST: function (t) {
    xe("设置超温关机温度", "Set the exit temperature for over temperature", "50", "120", (function (t) {
      Pe("F8F7" + je(t)), Pe("FF18")
    }))
  },
  BTTMW: function (t) {
    xe("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      Pe("F84C" + je(t)), Pe("FF13")
    }))
  },
  BTMMV: function (t) {
    xe("设置最高电压限制", "Set maximum voltage limit", "100", "1000", (function (t) {
      Pe("F8FA" + je(t)), Pe("FF19"), Pe("FF14")
    }))
  },
  BTMMA: function (t) {
    xe("设置最高电流限制", "Set maximum current limit", "10", "400", (function (t) {
      Pe("F8F9" + je(t)), Pe("FF19"), Pe("FF14")
    }))
  },
  BTRDY: function (t) {
    xe("设置就绪电压范围", "Set the ready voltage range", "1", "20", (function (t) {
      Pe("F9CD" + _e(t)), Pe("FF19")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), c > 0 && c < 5 ? Me("检测到输出电流", "Detected output current", "如有负载请点取消后断开负载再开始校正,如无负载则为空载电流,点击确定将会设置为最小电流过滤(可在输出电流校正页面中设置).", "If there is a load detected in the output current, please click NO and disconnect the load before starting the calibration. If there is no load, Click YES will set it as the minimum current filter (which can be set on the output current calibration page)", (function (t) {
      Pe("F848" + je(Number(c) + .05)), Pe("FF16")
    })) : s < 10 || c > 0 ? (0, Qt.Toast)(k ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Pe("C1"), Pe("FF"), xe("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / s).toFixed(4),
        a = Number(t / tt).toFixed(4);
      Pe("C3" + je(100 * a) + je(100 * e)), 2 == y ? (Pe("F876" + je(20 * a)), Pe("F877" + je(100 * a))) : 1 == y ? (Pe("F876" + je(41 * a)), Pe("F877" + je(58.5 * a))) : 4 == y ? (Pe("F876" + je(41 * a)), Pe("F877" + je(59 * a))) : 16 == y ? (Pe("F876" + je(44 * a)), Pe("F877" + je(61 * a))) : 32 == y && (Pe("F876" + je(41.2 * a)), Pe("F877" + je(59.4 * a))), Pe("FF"), Pe("A80" + M + je(50 * a) + je(et)), Pe("FF")
    })))
  },
  BTOVT1: function (t) {
    te ? xe("升压采样补偿", "Boost voltage compensation", "0.1", "1", (function (t) {
      t > 999.99 ? t *= 1e-4 : t > 99.99 && (t *= .001), Pe("FB47" + je(100 * t)), Pe("FF")
    })) : xe("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      Pe("FB47" + je(100 * t)), Pe("FF")
    }))
  },
  BTOVTU: function (t) {
    Pe("FB47" + je(100 * (Number(lt) + 5e-4))), Pe("FF")
  },
  BTOVTD: function (t) {
    Pe("FB47" + je(100 * (Number(lt) - 5e-4))), Pe("FF")
  },
  BTOVD1: function (t) {
    te ? xe("基础电压补偿", "Basic voltage compensation", "10", "40", (function (t) {
      Pe("FB46" + je(100 * t)), Pe("FF")
    })) : xe("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      Pe("FB46" + je(100 * t)), Pe("FF")
    }))
  },
  BTOVDU: function (t) {
    Pe("FB46" + je(100 * (Number(Bt) + .001))), Pe("FF")
  },
  BTOVDD: function (t) {
    Pe("FB46" + je(100 * (Number(Bt) - .001))), Pe("FF")
  },
  BTOVS: function (t) {
    Ue(k ? "Set voltage range" : "设置电压范围", (k ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Pe("F876" + je(Number(RegExp.$1))), Pe("F877" + je(Number(RegExp.$2))), Pe("FF")) : (0, Qt.Toast)(k ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    xe("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      Pe("F8F3" + je(t)), Pe("FF")
    }))
  },
  BTOVT3: function (t) {
    s < 10 || c > 0 ? (0, Qt.Toast)(k ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Pe("C2"), Pe("FF"), xe("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / s).toFixed(4);
      Pe("C4" + je(100 * Number(t / tt).toFixed(4)) + je(100 * e)), Pe("FF")
    })))
  },
  BTOVT2: function (t) {
    xe("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      Pe("FBF2" + je(100 * t)), Pe("FF")
    }))
  },
  BTO2TU: function (t) {
    Pe("FBF2" + je(100 * (Number(It) + .001))), Pe("FF")
  },
  BTO2TD: function (t) {
    Pe("FBF2" + je(100 * (Number(It) - .001))), Pe("FF")
  },
  BTOVD2: function (t) {
    xe("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      Pe("FBF1" + je(100 * t)), Pe("FF")
    }))
  },
  BTO2DU: function (t) {
    Pe("FBF1" + je(100 * (Number(Ot) + .001))), Pe("FF")
  },
  BTO2DD: function (t) {
    Pe("FBF1" + je(100 * (Number(Ot) - .001))), Pe("FF")
  },
  BTIVD1: function (t) {
    xe("输入电压补偿值", "Input voltage compensation value", "0.1", "5", (function (t) {
      Pe("F8FB" + je(t)), Pe("FF")
    }))
  },
  BTIVD2: function (t) {
    Pe("F8FB" + je(1)), Pe("FF"), xe("输入实际测量出的输入电压", "Input the actual measured input voltage", "10", "1000", (function (t) {
      Pe("F8FB" + je(Number(t / C))), Pe("FF")
    }))
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 50,
      duration: 300
    }), c < 5 || tt - s < .2 ? (0, Qt.Toast)(k ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (Pe("C0"), Pe("FF"), xe("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / c).toFixed(4);
      Pe("C5" + je(100 * Number(t / et).toFixed(4)) + je(100 * e)), Pe("FF")
    })))
  },
  BTOAT1: function (t) {
    xe("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      Pe("FB45" + je(100 * t)), Pe("FF")
    }))
  },
  BTOAT2: function (t) {
    Pe("FB45" + je(100 * (Number(dt) - .001))), Pe("FF")
  },
  BTOAT3: function (t) {
    Pe("FB45" + je(100 * (Number(dt) + .003))), Pe("FF")
  },
  BTOAS1: function (t) {
    xe("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      Pe("F8F4" + je(t)), Pe("FF")
    }))
  },
  BTCLV: function (t) {
    xe("设置最小电流过滤", "Set minimum current filtering", "0.00", "3.00", (function (t) {
      Pe("F848" + je(t)), Pe("FF")
    }))
  },
  BTOAD1: function (t) {
    xe("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      Pe("FB44" + je(100 * t)), Pe("FF")
    }))
  },
  BTOAD2: function (t) {
    Pe("FB44" + je(100 * (Number(gt) - .001))), Pe("FF")
  },
  BTOAD3: function (t) {
    Pe("FB44" + je(100 * (Number(gt) + .001))), Pe("FF")
  },
  BTOAS: function (t) {
    Ue(k ? "Set current range" : "设置电流范围", (k ? "Now:" : "当前范围:") + ct + "-" + ut, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Pe("F878" + je(Number(RegExp.$1))), Pe("F879" + je(Number(RegExp.$2))), Pe("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (Pe("F879" + je(t)), Pe("FF")) : (0, Qt.Toast)(k ? "Input format error" : "输入格式错误!"))
    }))
  },
  BTIAD1: function (t) {
    xe("输入电流补偿值", "Input current compensation value", "0.1", "5", (function (t) {
      Pe("F8FC" + je(t)), Pe("FF")
    }))
  },
  BTIAD2: function (t) {
    Pe("F8FB" + je(1)), Pe("FF"), xe("输入实际测量出的输入电流", "Input the actual measured input current", "3", "50", (function (t) {
      Pe("F8FC" + je(Number(t / l))), Pe("FF")
    }))
  },
  pwrbt: function (t) {
    Pe("A6" + _e(1 - W)), Pe("FF10")
  },
  BTUCF1: function (t) {
    Pe("F9CF" + _e(1 - _t)), Pe("FF10")
  },
  owbt: function (t) {
    xe("设置功率限制", "Set power limit", "300", Z, (function (t) {
      Pe("F84D" + je(t)), Pe("FF")
    }))
  },
  BTUIW1: function (t) {
    Pe("F9E1" + _e(1 - Fe)), Pe("FF")
  },
  tibt: function (t) {
    xe("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      Pe("A9" + ze(t)), Pe("FF")
    }))
  },
  BTYC1: function (t) {
    xe("设置预充电压", "Set pre charge voltage", "0", Ft, (function (t) {
      Pe("F8F6" + je(t)), Pe("FF")
    }))
  },
  BTYC2: function (t) {
    xe("设置预充电流", "Set pre charge current", ct, ut, (function (t) {
      Pe("F8F5" + je(t)), Pe("FF")
    }))
  },
  SetVA: function (t, e, a) {
    M != t && (e > Ft || e < ft ? xe("设置输出电压", "Set output voltage", ft, Ft, (function (e) {
      Pe("A80" + (M = t) + je(e) + je(a)), Pe(t <= 2 ? "FF10" : "FF11")
    })) : Me("快捷设置电压电流切换", "Switch confirmation", "为避免误触,请确认切换电压电流", "To avoid accidental contact, please confirm the switching voltage and current", (function (n) {
      Pe("A80" + (M = t) + je(e) + je(a)), Pe(t <= 2 ? "FF10" : "FF11")
    })))
  },
  ks1bt: function (t) {
    this.SetVA(1, x[0], x[1] > ut ? ut : x[1])
  },
  ks2bt: function (t) {
    this.SetVA(2, N[0], N[1] > ut ? ut : N[1])
  },
  ks3bt: function (t) {
    this.SetVA(3, L[0], L[1] > ut ? ut : L[1])
  },
  ks4bt: function (t) {
    this.SetVA(4, K[0], K[1] > ut ? ut : K[1])
  },
  hqbt1: function (t) {
    te ? Xt >= 5.39 ? xe("设置超温关机倒计时", "设置超温关机倒计时", 3, 60, (function (t) {
      Pe("F961" + _e(t)), Pe("FF15")
    })) : (0, Qt.Toast)(k ? "The current firmware version is not adjustable. If you need to modify it, please upgrade the firmware!" : "当前固件版本不可调,如需修改请升级固件!") : xe("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      Pe("F961" + _e(t)), Pe("FF15")
    }))
  },
  hqbt0: function (t) {
    Pe("F961" + _e(0 == Tt ? te ? 30 : 10 : 0)), Pe("FF15")
  },
  btbt1: function (t) {
    ne && wx.getClipboardData({
      success: function (t) {
        var e = t.data;
        e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (Pe("F96B" + _e(3)), Pe("F96C" + _e(0)), ye(e))
      }
    })
  },
  nvbt: function (t) {
    Ue(k ? "Set Output Voltage" : "设置输出电压", (k ? "Range:" : "范围:") + ft + "-" + Ft, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) Pe(t.substr(2, 4) + je(t.substr(6))), Pe("FF");
        else {
          if (t.startsWith("FFF9")) return Pe(t.substr(2)), void Pe("FF");
          if ("DEBUG=0" == t)(0, Qt.SetCFG)("DEBUG", 0), ae = 0, Pe("F9C900"), Pe("F9CA01"), Pe("F9CB01"), Pe("F9CC01");
          else if ("DEBUG=1" == t)(0, Qt.SetCFG)("DEBUG", 1), ae = 1, Pe("F9C900"), Pe("F9CA01"), Pe("F9CB01"), Pe("F9CC01");
          else if ("DEBUG=2" == t)(0, Qt.SetCFG)("DEBUG", 2), ae = 2, Pe("F9C9FF"), Pe("F9CA01"), Pe("F9CB01"), Pe("F9CC01");
          else if ("DEBUG=3" == t)(0, Qt.SetCFG)("DEBUG", 2), ae = 2, Pe("F9C9FF"), Pe("F9CA01"), Pe("F9CB01"), Pe("F9CC00");
          else if (t.startsWith("FFC8")) Pe(t.substr(2, 4) + t.substr(6)), Pe("FF");
          else if (t.startsWith("FFC9")) {
            var e = "C9" + t.substr(4, 4) + He(t.substr(8));
            console.log(e), Pe(e)
          } else if ("异常修复" == t && Xt >= 5.39) Me("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置", "Exception repair will detect and reset certain settings", (function (t) {
            Pe("F60001"), (0, Qt.Toast)(k ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), we.navigateBack({
              delta: 0
            })
          }));
          else if ("强制升级" == t || "测试版" == t) we.showModal({
            title: k ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: k ? "YES" : "确定",
            cancelText: k ? "NO" : "取消",
            success: function (e) {
              e.confirm && a.UPDate("A700000000", "测试版" == t ? "NewTest" : "NewUI")
            }
          });
          else if ("测试二" == t) we.showModal({
            title: k ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: k ? "YES" : "确定",
            cancelText: k ? "NO" : "取消",
            success: function (t) {
              t.confirm && a.UPDate("A700000000", "Test2")
            }
          });
          else if (t.startsWith("DataStart=")) wx.getClipboardData({
            success: function (t) {
              var e = t.data;
              e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && ye(e)
            }
          });
          else {
            if (Pe("A1" + He(t)), (t = parseFloat(t)) > Ft || t < ft && 0 == _t || !isFinite(t)) return void(0, Qt.Toast)(k ? "Beyond the set range!" : "超出设置范围!");
            Pe("A80" + M + je(t) + je(et)), Pe("FF")
          }
        }
      else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (Pe("F96B" + _e(3)), ye(e))
        }
      })
    }))
  },
  nabt: function (t) {
    xe("设置输出电流", "Set output current", ct, ut, (function (t) {
      Pe("A80" + M + je(tt) + je(t)), Pe("FF")
    }))
  },
  sa2bt3: function (t) {
    xe("设置充电时间(分钟)", "Set charging time(Minute)", 0, 600, (function (t) {
      Pe("A9" + ze(t)), Pe("FF")
    }))
  },
  SetSGK: function () {
    if (Xt >= 5.39) {
      var t = 0 == zt ? "1" : "0";
      Pe("A50" + t), Pe("A40" + t), Pe("FF19")
    } else Pe("F857" + je(0 == _ ? 1 : 0)), Pe("FF12")
  },
  sa2bt2: function (t) {
    xe("设置二段电流", "Set second stage current", ct, ut, (function (t) {
      Pe("F857" + je(t)), Pe("FF12")
    }))
  },
  sa2bt1: function (t) {
    xe("设置二段电压", "Set second stage voltage", ft, Ft, (function (t) {
      Pe("F858" + je(t)), Pe("FF12")
    }))
  },
  sa2bt0: function (t) {
    te && (Xt < 5.39 || tt > 126) ? Pe("A9" + ze(se ? 0 : 60)) : (Pe("F858" + (0 == _ ? je(tt - 3) : "00000000")), Pe("F857" + (0 == _ ? je(10) : "00000000")), Pe("FF12"))
  },
  sdbt1: function (t) {
    xe("设置延时时间(分钟)", "Set delay time (Minutes)", 1, 600, (function (t) {
      Pe("F859" + je(t)), Pe("FF16")
    }))
  },
  sdbt2: function (t) {
    xe("设置关机电流", "SSet startup delay current", "0.00", "10.00", (function (t) {
      Pe("F8F0" + je(t)), Pe("FF")
    }))
  },
  sdbt0: function (t) {
    Pe("F859" + (0 == mt ? je(1) : "00000000")), Pe("FF16")
  },
  MSG: function (t, e) {
    if (!i)
      if (1 != ae || e.startsWith("D") || (0, Qt.print)("MSG:", e), e.startsWith("A101")) a.setData({
        ShowBar: 0,
        Panel: 2,
        LOGO: k ? "Preview" : "预览"
      });
      else if (e.startsWith("A001")) {
      if (ie = 2, ("Cxjdwx" == n || "未激活" == n) && !ne) {
        var o = new Date;
        Pe("FD48" + He(o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate()))
      }
      Xt <= 5.28 && Pe("FF")
    } else if (e.startsWith("A000")) {
      if (ie) return;
      ie = 1, (0, Qt.Toast)(k ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        we.showModal({
          title: k ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + D,
          confirmText: k ? "YES" : "确定",
          cancelText: k ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, Qt.SetCFG)(D, t.content), Pe("A0" + He(t.content)), ie = 0)
          }
        })
      }), 1e3)
    } else if (e.startsWith("F101")) ke();
    else if (e.startsWith("F201")) ke();
    else if (e.startsWith("F301")) Ke = 0, Le = [], (0, Qt.Toast)(k ? "Send End!" : "发送完成!");
    else if (e.startsWith("FF")) {
      var Zt = new DataView(t);
      if (Zt.getUint8(1)) {
        if (2 != ie && (ie = 2, ("Cxjdwx" == n || "未激活" == n) && !ne)) {
          var qt = new Date;
          Pe("FD48" + He(qt.getFullYear() + "-" + (qt.getMonth() + 1) + "-" + qt.getDate()))
        }
      } else(0, Qt.Toast)(k ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        we.showModal({
          title: k ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + D,
          confirmText: k ? "YES" : "确定",
          cancelText: k ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, Qt.SetCFG)(D, t.content), Pe("FF" + He(t.content)), ie = 0)
          }
        })
      }), 1e3);
      W = Zt.getUint8(2), V = Zt.getUint8(3), y = Zt.getUint8(4), k = Zt.getUint8(5), $ = Zt.getUint8(6), Q = Zt.getUint8(7), X = Zt.getUint8(8), rt = Zt.getUint8(9), ot = Zt.getUint8(10), st = Zt.getUint8(11), St = Zt.getUint8(12), ht = Zt.getUint8(13), Ct = Zt.getUint8(14) / 10, Tt = Zt.getUint8(15), Et = Zt.getUint8(16), Dt = Zt.getUint8(17), wt = Zt.getUint8(18), bt = Zt.getUint8(19), vt = .01 * Zt.getUint8(20), Nt = Zt.getUint8(21), Mt = Zt.getUint8(22), Wt = Zt.getUint8(23), Kt = Zt.getUint8(24), yt = Zt.getUint8(25), kt = Zt.getUint8(26), Yt = Zt.getUint8(27), jt = Zt.getUint8(28), zt = Zt.getUint8(29), J = Zt.getUint8(30), M = Zt.getUint8(31), _t = Zt.getUint8(32), Lt = Zt.getUint8(33), Fe = Zt.getUint8(34), Se = Zt.getUint8(35), he = Zt.getUint8(36);
      var Jt = 51;
      x = [Ze(Zt, Jt, 2, 1), Ze(Zt, Jt + 4, 2, 1)], N = [Ze(Zt, Jt += 8, 2, 1), Ze(Zt, Jt + 4, 2, 1)], L = [Ze(Zt, Jt += 8, 2, 1), Ze(Zt, Jt + 4, 2, 1)], K = [Ze(Zt, Jt += 8, 2, 1), Ze(Zt, Jt + 4, 2, 1)], z = Ze(Zt, Jt += 8), _ = Ze(Zt, Jt += 4), Z = Ze(Zt, Jt += 4), q = Ze(Zt, Jt += 4), at = Ze(Zt, Jt += 4), nt = Ze(Zt, Jt += 4), it = Ze(Zt, Jt += 4), P = Ze(Zt, Jt += 4), ct = Ze(Zt, Jt += 4), ut = Ze(Zt, Jt += 4), ft = Ze(Zt, Jt += 4), Ft = Ze(Zt, Jt += 4), lt = Ze(Zt, Jt += 4, 4), dt = Ze(Zt, Jt += 4, 4), Bt = Ze(Zt, Jt += 4, 4), gt = Ze(Zt, Jt += 4, 4), pt = Ze(Zt, Jt += 4), At = Ze(Zt, Jt += 4), mt = Ze(Zt, Jt += 4), Gt = Ze(Zt, Jt += 4), It = Ze(Zt, Jt += 4, 4), Ot = Ze(Zt, Jt += 4, 4), Ut = Ze(Zt, Jt += 4), xt = Ze(Zt, Jt += 4), Vt = Ze(Zt, Jt += 4), Pt = Ze(Zt, Jt += 4), Rt = Ze(Zt, Jt += 4), $t = Ze(Zt, Jt += 4), Ht = Ze(Zt, Jt += 4), R = Ze(Zt, Jt += 4, 4), Jt += 4, Xt >= 5.43 && (j = Ze(Zt, Jt, 4)), Jt += 4, 1 == M ? (et = x[1], tt = x[0]) : 2 == M ? (et = N[1], tt = N[0]) : 3 == M ? (et = L[1], tt = L[0]) : 4 == M && (et = K[1], tt = K[0]), a.setData({
        PON: W,
        KON: V,
        CAN: y,
        UEN: k,
        KRC: $,
        SV: tt.toFixed(2),
        SA: et.toFixed(2),
        WTi: Q,
        Sleep: X,
        LEDK0: rt,
        LEDK1: ot,
        LEDK2: st,
        IVD: R,
        IAD: j,
        UFS: St,
        LFS: ht,
        AFS: Ct,
        UHQ: Tt,
        GIF: Et,
        CKA2: Dt,
        NTC: wt,
        DDT: bt,
        CLV: vt,
        UEG: Nt,
        UCN: Mt,
        MFS: Wt,
        DOL: Kt,
        DST: yt,
        LKS: kt,
        UI: Yt,
        RDY: jt,
        SGK: zt,
        ETi: J,
        KSi: M,
        UCF: _t,
        TCH: Lt,
        UIW: Fe,
        ACK: Se,
        CCK: he,
        KS1: x,
        KS2: N,
        KS3: L,
        KS4: K,
        SV2: z,
        SA2: _,
        SMW: Z,
        UMW: q,
        TMW: at,
        UMT: nt,
        OMT: it,
        MA: P,
        LSA: ct,
        HSA: ut,
        LSV: ft,
        HSV: Ft,
        OVT: lt,
        OAT: dt,
        OVD: Bt,
        OAD: gt,
        L2V: pt,
        H2V: At,
        USD: mt,
        SDU: Gt,
        O2T: It,
        O2D: Ot,
        OVS: Ut,
        OAS: xt,
        YCA: Vt,
        YCV: Pt,
        OST: Rt,
        MMA: $t,
        MMV: Ht
      })
    } else if (e.startsWith("FE") || e.startsWith("EE")) {
      if (0 == y) {
        n = Ye(e.substring(20, 40)), Xt = .01 * parseInt(e.substring(16, 20), 16), y = Qe(e, 14), te = 0, D = e.substring(2, 14), 1 == y ? r = "Huawei" : 2 == y ? r = "Increase" : 4 == y ? r = "ZTE3000" : 8 == y ? r = "INFY" : 12 == y ? (r = "EV_Station", te = 2) : 14 == y ? (r = "EV_Charger", te = 1) : 16 == y ? r = "EPS6020" : 32 == y ? r = "ZTE4875" : 64 == y ? r = "Sinexcel" : 65 == y ? r = "BH10M100" : 66 == y && (r = "MC1503N5R"), "EV_Charger" == r ? a.setData({
          E1S: 0,
          E1A: "正常",
          E1B: "中止",
          E2S: 0,
          E2A: "电桩",
          E2B: "温度",
          E3S: 0,
          E3A: "枪头",
          E3B: "异常",
          E4S: 0,
          E4A: "内部",
          E4B: "过温",
          E5S: 0,
          E5A: "充电",
          E5B: "异常",
          E6S: 0,
          E6A: "电桩",
          E6B: "急停",
          E7S: 0,
          E7A: "其他",
          E7B: "异常",
          E8S: 0,
          E8A: "自检",
          E8B: "异常",
          E9S: 0,
          E9A: "预充",
          E9B: "异常",
          EAS: 0,
          EAA: "电流",
          EAB: "异常",
          EBS: 0,
          EBA: "电压",
          EBB: "异常",
          ECS: 0,
          ECA: "参数",
          ECB: "异常"
        }) : "Huawei" == r && a.setData({
          E1S: 0,
          E1A: "模块",
          E1B: "保护",
          E2S: 0,
          E2A: "风扇",
          E2B: "异常",
          E3S: 0,
          E3A: "输入",
          E3B: "欠压",
          E4S: 0,
          E4A: "输入",
          E4B: "过压",
          E5S: 0,
          E5A: "输入",
          E5B: "停电",
          E6S: 0,
          E6A: "温度",
          E6B: "异常",
          E7S: 0,
          E7A: "模块",
          E7B: "故障",
          E8S: 0,
          E8A: "输出",
          E8B: "过流",
          E9S: 0,
          E9A: "输出",
          E9B: "欠压",
          EAS: 0,
          EAA: "输出",
          EAB: "过压",
          EBS: 0,
          EBA: "输出",
          EBB: "过流",
          ECS: 0,
          ECA: "模块",
          ECB: "关机"
        }), n.startsWith("Cxjdwx") && (n = "未激活"), (new Date).getTime() > 1756621705e3 && (Date.parse(n) < 1756621705e3 || (0, Qt.CheckID)(D) || (i = 1, we.showModal({
          title: k ? "Abnormal device authorization" : "设备授权异常",
          content: "",
          confirmText: k ? "Yes I Kown" : "我知道了",
          showCancel: false,
          success: function (t) {
            we.navigateBack({
              delta: 0
            })
          }
        }))), D = "0x" + D, a.setData({
          CVer: Xt.toFixed(2),
          CEV: te,
          SCAN: r,
          ID: D,
          ACT: n
        });
        var ee = (0, Qt.GetCFG)(D, "0000");
        ne && (ee = (Number(D) + 19880914).toString(16).substring(4, 8)), e.startsWith("EE") ? 0 != ie && 3 != ie || Pe("A0" + He(ee)) : (Pe("FF" + He(ee)), setTimeout((function () {
          3 == ie && (ie = 0, Pe("FF" + He(ee)))
        }), 1500))
      }
      if (e.startsWith("FE")) {
        var oe = Ye(e.substring(260, 300)),
          Ce = Ye(e.substring(300, 340));
        "config" != oe && "" != oe || (oe = (0, Qt.GetCFG)("WID", "config")), "88888888" != Ce && "" != Ce || (Ce = (0, Qt.GetCFG)("WPD", "88888888")), a.setData({
          VIN: Ye(e.substring(100, 140)),
          SSID: Ye(e.substring(140, 180)),
          UPWD: Ye(e.substring(180, 220)),
          LKV: Ye(e.substring(220, 260)),
          WID: oe,
          WPD: Ce
        })
      }
    } else if (e.startsWith("FA")) {
      var le = new DataView(t);
      s = Ze(le, 1), c = Ze(le, 5), u = Ze(le, 9), C = Ze(le, 13), l = Ze(le, 17), d = Ze(le, 21), a.setData({
        IV: C,
        IA: l,
        IW: d,
        OV: s,
        OA: c,
        OW: u
      })
    } else if (e.startsWith("FB")) {
      var de = new DataView(t);
      F = de.getUint8(1), S = de.getUint8(2), h = de.getUint8(3), g = de.getUint8(4), T = de.getUint8(5), E = de.getUint8(6), w = de.getUint8(7), b = de.getUint8(8), H = de.getUint8(9), se = de.getUint8(10), se += de.getUint8(11) << 8, ce = de.getUint8(12), Y = de.getUint8(13);
      var Be = 31;
      s = Ze(de, Be), c = Ze(de, Be += 4), u = Ze(de, Be += 4), f = Ze(de, Be += 4), C = Ze(de, Be += 4), l = Ze(de, Be += 4), d = Ze(de, Be += 4), B = Ze(de, Be += 4), p = Ze(de, Be += 4), A = Ze(de, Be += 4), m = Ze(de, Be += 4), G = Ze(de, Be += 4), v = Ze(de, Be += 4), I = Ze(de, Be += 4), O = Ze(de, Be += 4), U = Ze(de, Be += 4), Be += 4, Xt >= 5.42 && (ue = de.getUint8(14), fe = Ze(de, Be), Be += 4);
      var ge = Number(u / d * 100).toFixed(2),
        Te = Number(d - u).toFixed(2);
      (0 == Se || 0 == he) && Xt >= 5.42 ? re = k ? "Device unauthorized" : "设备未授权" : 60 == F ? re = k ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == h ? re = 0 == H ? k ? "Communication Abnormality" : "CAN通讯异常" : 39 == H ? k ? "Abnormal Insulation Test" : "绝缘测试未通过" : H < 6 ? k ? "Handshake message failed" : "握手信息未通过" : H < 9 ? k ? "Vehicle information not pass" : "车辆信息未通过" : 16 == H ? k ? "Charging station not ready" : "电压检测未通过" : k ? "Other abnormal interruptions" : "其它异常中止" : 50 == F ? re = k ? "Stop Charging" : "中 止 充 电" : 51 == F ? re = k ? "Charging Error" : "充 电 错 误" : 52 == F ? re = k ? "Seting Handshake Information" : "配置握手信息" : 53 == F ? re = k ? "Seting Charging Information" : "配置充电信息" : 54 == F ? re = k ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == F ? re = k ? "Ready For Use" : "已准备就绪" : 56 == F ? re = k ? "Charging" : "正在充电中" : 57 == F ? re = k ? "Charging Completed" : "充电完成" : 58 == F ? re = k ? "Overtemperature shutdown" : "超温关机(" + ce + ")" : 59 == F ? re = k ? "Insulation testing" : "绝缘测试" : 0 == s ? re = k ? "Charger Output Abnormality" : "充电器输出异常" : 4 == F ? re = k ? "Charger Shutdown" : "充电器已关机" : 0 == F ? re = k ? "Waiting For Battery Connection" : "等待接入电池" : 1 == F ? re = k ? "Charging" : "正在充电中" : 2 == F ? re = k ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == F ? re = k ? "Precharging" : "正在预充" : 40 == F ? re = k ? "Appointment Waiting" : "预约等待中" : 3 == F ? re = k ? "Charging Completed" : "充电完成" : 43 == F ? re = k ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == F && (re = k ? "Over Temperature Shutdown" : "超温保护关机");
      var Ee = .65 * wx.getWindowInfo().windowWidth,
        De = Math.max(15, Math.min(30, Ee / (k ? re.length : 1.8 * re.length) * 1.5));
      a.setData({
        Ah: p,
        Wh: A,
        AH: m,
        WH: G,
        SWT: w,
        SMT: b,
        IV: C,
        IA: l,
        IW: d,
        IT: B,
        ST0: g,
        ST1: T,
        ST2: E,
        EEI: d ? ge : "0.00",
        EES: d ? Te : "0.00",
        YS: Ve(se),
        STR: re,
        NFS: S,
        OL: h,
        OV: s,
        OA: c,
        OW: u,
        OT: f,
        FSize: De,
        KT1: Y,
        Ti: Ve(v),
        TI: Ve(I),
        NSD: Ve(O),
        UPS: ue,
        SOC: Number(U).toFixed(0),
        UPV: Number(fe).toFixed(0)
      })
    } else if (e.startsWith("01")) {
      s = qe(e, 2), c = qe(e, 10), u = qe(e, 18), f = qe(e, 26), F = Qe(e, 34), S = Qe(e, 36), h = Qe(e, 38), 60 == F ? re = k ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == h ? re = k ? "Communication Abnormality" : "CAN通讯异常" : 50 == F ? re = k ? "Stop Charging" : "中 止 充 电" : 51 == F ? re = k ? "Charging Error" : "充 电 错 误" : 52 == F ? re = k ? "Seting Handshake Information" : "配置握手信息" : 53 == F ? re = k ? "Seting Charging Information" : "配置充电信息" : 54 == F ? re = k ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == F ? re = k ? "Ready For Use" : "已准备就绪" : 56 == F ? re = k ? "Charging" : "正在充电中" : 57 == F ? re = k ? "Charging Completed" : "充电完成" : 58 == F ? re = k ? "Overtemperature shutdown" : "超温关机(" + ce + ")" : 59 == F ? re = k ? "Insulation testing" : "绝缘测试" : 0 == s ? re = k ? "Charger Output Abnormality" : "充电器输出异常" : 4 == F ? re = k ? "Charger Shutdown" : "充电器已关机" : 0 == F ? re = k ? "Waiting For Battery Connection" : "等待接入电池" : 1 == F ? re = k ? "Charging" : "正在充电中" : 2 == F ? re = k ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == F ? re = k ? "Precharging" : "正在预充" : 40 == F ? re = k ? "Appointment Waiting" : "预约等待中" : 3 == F ? re = k ? "Charging Completed" : "充电完成" : 43 == F ? re = k ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == F && (re = k ? "Over Temperature Shutdown" : "超温保护关机");
      var pe = .65 * wx.getWindowInfo().windowWidth;
      De = Math.max(15, Math.min(30, pe / (k ? re.length : 1.8 * re.length) * 1.5));
      a.setData({
        STR: re,
        NFS: S,
        OL: h,
        OV: s,
        OA: c,
        OW: u,
        OT: f,
        FSize: De
      })
    } else if (e.startsWith("02")) {
      C = qe(e, 2), l = qe(e, 10), d = qe(e, 18), B = qe(e, 26), g = Qe(e, 34), T = Qe(e, 36), E = Qe(e, 38);
      var Ae = Number(u / d * 100).toFixed(2),
        me = Number(d - u).toFixed(2);
      a.setData({
        IV: C,
        IA: l,
        IW: d,
        IT: B,
        ST0: g,
        ST1: T,
        ST2: E,
        EEI: d ? Ae : "0.00",
        EES: d ? me : "0.00"
      })
    } else if (e.startsWith("03")) p = qe(e, 2), A = qe(e, 10), m = qe(e, 18), G = qe(e, 26), w = Qe(e, 34), b = Qe(e, 36), a.setData({
      Ah: p,
      Wh: A,
      AH: m,
      WH: G,
      SWT: w,
      SMT: b
    });
    else if (e.startsWith("04")) se = Qe(e, 34), se += Qe(e, 36) << 8, ce = Qe(e, 38), a.setData({
      YS: Ve(se),
      Ti: Ve(qe(e, 2)),
      TI: Ve(qe(e, 10)),
      NSD: Ve(qe(e, 18)),
      SOC: Number(qe(e, 26)).toFixed(0)
    });
    else if (e.startsWith("10")) x = [qe(e, 2, 1), qe(e, 10, 1)], N = [qe(e, 18, 1), qe(e, 26, 1)], M = Qe(e, 34), W = Qe(e, 36), V = Qe(e, 38), 1 == M ? (et = x[1], tt = x[0]) : 2 == M && (et = N[1], tt = N[0]), 3 == M ? (et = L[1], tt = L[0]) : 4 == M && (et = K[1], tt = K[0]), a.setData({
      KS1: x,
      KS2: N,
      KSi: M,
      PON: W,
      KON: V,
      SV: tt.toFixed(2),
      SA: et.toFixed(2)
    });
    else if (e.startsWith("11")) L = [qe(e, 2, 1), qe(e, 10, 1)], K = [qe(e, 18, 1), qe(e, 26, 1)], k = Qe(e, 36), $ = Qe(e, 38), (0, Qt.SetCFG)("UEN", k), 1 == M ? (et = x[1], tt = x[0]) : 2 == M && (et = N[1], tt = N[0]), 3 == M ? (et = L[1], tt = L[0]) : 4 == M && (et = K[1], tt = K[0]), a.setData({
      KS3: L,
      KS4: K,
      CAN: y,
      UEN: k,
      KRC: $,
      SV: tt.toFixed(2),
      SA: et.toFixed(2),
      KSi: M
    });
    else if (e.startsWith("12")) z = qe(e, 2), _ = qe(e, 10), Z = qe(e, 18), q = qe(e, 26), Q = Qe(e, 34), J = Qe(e, 36), X = Qe(e, 38), a.setData({
      SV2: z,
      SA2: _,
      SMW: Z,
      UMW: q,
      WTi: Q,
      ETi: J,
      Sleep: X
    });
    else if (e.startsWith("13")) {
      at = qe(e, 2), nt = qe(e, 10), it = qe(e, 18);
      qe(e, 26);
      rt = Qe(e, 34), ot = Qe(e, 36), st = Qe(e, 38), a.setData({
        TMW: at,
        UMT: nt,
        OMT: it,
        LEDK0: rt,
        LEDK1: ot,
        LEDK2: st
      })
    } else if (e.startsWith("14")) ct = qe(e, 2), ut = qe(e, 10), ft = qe(e, 18), Ft = qe(e, 26), St = Qe(e, 34), ht = Qe(e, 36), Ct = .1 * Qe(e, 38), a.setData({
      LSA: ct,
      HSA: ut,
      LSV: ft,
      HSV: Ft,
      UFS: St,
      LFS: ht,
      AFS: Ct.toFixed(1)
    }), ct = Number(ct), ft = Number(ft), ut = Number(ut), Ft = Number(Ft);
    else if (e.startsWith("15")) lt = .01 * qe(e, 2), dt = .01 * qe(e, 10), Bt = .01 * qe(e, 18), gt = .01 * qe(e, 26), Tt = Qe(e, 34), Et = Qe(e, 36), Dt = Qe(e, 38), a.setData({
      OVT: lt.toFixed(4),
      OAT: dt.toFixed(4),
      OVD: Bt.toFixed(4),
      OAD: gt.toFixed(4),
      UHQ: Tt,
      GIF: Et,
      CKA2: Dt
    });
    else if (e.startsWith("16")) pt = qe(e, 2), At = qe(e, 10), mt = qe(e, 18), Gt = qe(e, 26), wt = Qe(e, 34), bt = Qe(e, 36), vt = .01 * Qe(e, 38), a.setData({
      L2V: pt,
      H2V: At,
      USD: mt,
      NTC: wt,
      DDT: bt,
      CLV: vt,
      SDU: Gt
    });
    else if (e.startsWith("17")) It = .01 * qe(e, 2), Ot = .01 * qe(e, 10), Ut = qe(e, 18), xt = qe(e, 26), Nt = Qe(e, 34), Mt = Qe(e, 36), Wt = Qe(e, 38), a.setData({
      O2D: Ot.toFixed(4),
      O2T: It.toFixed(4),
      OVS: Ut,
      OAS: xt,
      UEG: Nt,
      UCN: Mt,
      MFS: Wt
    });
    else if (e.startsWith("18")) Vt = qe(e, 2), Pt = qe(e, 10), Rt = qe(e, 18), Lt = qe(e, 26), Kt = Qe(e, 34), yt = Qe(e, 36), kt = Qe(e, 38), a.setData({
      YCA: Vt,
      YCV: Pt,
      DOL: Kt,
      DST: yt,
      LKS: kt,
      TCH: Lt,
      OST: Rt
    });
    else if (e.startsWith("19")) $t = qe(e, 2), Ht = qe(e, 10), Yt = Qe(e, 34), jt = Qe(e, 36), zt = Qe(e, 38), a.setData({
      UI: Yt,
      MMA: $t,
      MMV: Ht,
      RDY: jt,
      SGK: zt
    });
    else if (e.startsWith("20")) {
      var Ge = Ye(e.substring(2, 40));
      a.setData({
        SSID: Ge
      })
    } else if (e.startsWith("21")) a.setData({
      UPWD: Ye(e.substring(2, 40))
    });
    else if (e.startsWith("22")) {
      var be = Ye(e.substring(2, 40)),
        ve = (0, Qt.GetCFG)("WID", be);
      be != ve && Pe("AB00" + He(be = unescape(encodeURIComponent(ve)))), a.setData({
        WID: ve
      })
    } else if (e.startsWith("23")) {
      var Ue = Ye(e.substring(2, 40)),
        xe = (0, Qt.GetCFG)("WPD", Ue);
      Ue != xe && Pe("AB01" + He(Ue = unescape(encodeURIComponent(xe)))), a.setData({
        WPD: xe
      })
    } else if (e.startsWith("24")) a.setData({
      LKV: Ye(e.substring(2, 40))
    });
    else if (e.startsWith("25")) a.setData({
      VIN: Ye(e.substring(2, 40))
    });
    else if (e.startsWith("50")) {
      0;
      var Ne = Qe(e, 2);
      3 & Ne ? a.setData({
        E1A: "正常",
        E1S: 3 & Ne
      }) : Ne >> 2 & 3 ? a.setData({
        E1A: "人工",
        E1S: Ne >> 2 & 3
      }) : Ne >> 4 & 3 ? a.setData({
        E1A: "故障",
        E1S: Ne >> 4 & 3
      }) : Ne >> 6 & 3 && a.setData({
        E1A: "车辆",
        E1S: Ne >> 6 & 3
      }), 3 & (Ne = Qe(e, 4)) ? a.setData({
        E2S: 3 & Ne
      }) : Ne >> 2 & 3 ? a.setData({
        E3S: Ne >> 2 & 3
      }) : Ne >> 4 & 3 ? a.setData({
        E4S: Ne >> 4 & 3
      }) : Ne >> 6 & 3 && a.setData({
        E5S: Ne >> 6 & 3
      }), 3 & (Ne = Qe(e, 6)) ? a.setData({
        E6S: 3 & Ne
      }) : Ne >> 2 & 3 ? a.setData({
        E7S: Ne >> 2 & 3
      }) : Ne >> 4 & 3 ? a.setData({
        E8S: Ne >> 4 & 3
      }) : Ne >> 6 & 3 && a.setData({
        E9S: Ne >> 6 & 3
      }), 3 & (Ne = Qe(e, 8)) ? a.setData({
        EAS: 3 & Ne
      }) : Ne >> 2 & 3 ? a.setData({
        EBS: Ne >> 2 & 3
      }) : Ne >> 4 & 3 && a.setData({
        ECS: Ne >> 4 & 3
      })
    } else if (e.startsWith("51")) {
      a.setData({
        E1S: 0,
        E1A: "正常",
        E1B: "中止",
        E2S: 0,
        E2A: "电桩",
        E2B: "温度",
        E3S: 0,
        E3A: "枪头",
        E3B: "异常",
        E4S: 0,
        E4A: "BRM",
        E4B: "超时",
        E5S: 0,
        E5A: "BCP",
        E5B: "超时",
        E6S: 0,
        E6A: "BRO",
        E6B: "超时",
        E7S: 0,
        E7A: "BCS",
        E7B: "超时",
        E8S: 0,
        E8A: "BCL",
        E8B: "超时",
        E9S: 0,
        E9A: "BST",
        E9B: "超时",
        EAS: 0,
        EAA: "BSD",
        EAB: "超时",
        EBS: 0,
        EBA: "BSM",
        EBB: "超时",
        ECS: 0,
        ECA: "其他",
        ECB: "超时"
      });
      var Me = Qe(e, 2);
      3 & Me && a.setData({
        E4S: 3 & Me
      }), 3 & (Me = Qe(e, 4)) && a.setData({
        E5S: 3 & Me
      }), Me >> 2 & 3 && a.setData({
        E6S: Me >> 2 & 3
      }), 3 & (Me = Qe(e, 6)) && a.setData({
        E7S: 3 & Me
      }), Me >> 2 & 3 && a.setData({
        E8S: Me >> 2 & 3
      }), Me >> 4 & 3 && a.setData({
        E9S: Me >> 4 & 3
      }), 3 & (Me = Qe(e, 8)) && a.setData({
        EAS: 3 & Me
      }), Me >> 2 & 3 && (Me >> 2 & 3) < 3 && a.setData({
        EBS: Me >> 2 & 3
      }), Me >> 4 & 3 && (Me >> 4 & 3) < 3 && a.setData({
        ECS: Me >> 4 & 3
      })
    } else if (e.startsWith("40")) {
      Ie = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"], Oe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var We = Qe(e, 2);
      128 & We && Je("测试 模式"), 64 & We && Je("负载 震荡"), 32 & We && Je("输出 继电器"), 16 & We && Je("放电 电路"), 8 & We && Je("继电器 电路"), 4 & We && Je("短路 锁死"), 2 & We && Je("硬件 地址"), 1 & We && Je("放电 电路"), 128 & (We = Qe(e, 4)) && Je("更换 地址"), 64 & We && Je("地址 冲突"), 32 & We && Je("均流 屏蔽"), 16 & We && Je("通讯 异常"), 8 & We && Je("电容 电压"), 4 & We && Je("输出 过压"), 2 & We && Je("输出 模式"), 1 & We && Je("插座 异常"), 128 & (We = Qe(e, 6)) && Je("母线 电压"), 64 & We && Je("母线 平衡"), 32 & We && Je("输入 停电"), 16 & We && Je("恒流 状态"), 8 & We && Je("输出 短路"), 4 & We && Je("内部 通讯"), 2 & We && Je("效率 寻优"), 1 & We && Je("均流 异常"), 128 & (We = Qe(e, 8)) && Je("PFC 故障"), 64 & We && Je("输入 过压"), 32 & We && Je("ID 重复"), 16 & We && Je("严重 均流"), 8 & We && Je("交流 缺相"), 4 & We && Je("三项 平衡"), 2 & We && Je("输入 欠压"), 1 & We && Je("顺序 启机"), 128 & (We = Qe(e, 10)) && Je("通讯 质量"), 64 & We && Je("自动 模式"), 32 & We && Je("地址 重排"), 16 & We && Je("内部 过温"), 4 & We && Je("风机 异常"), 2 & We && Je("模块 关机"), 1 & We && Je("低温 保护"), 128 & (We = Qe(e, 12)) && Je("输出 欠压"), 64 & We && Je("输出 过流"), 32 & We && Je("存储 芯片"), 16 & We && Je("风机 故障"), 8 & We && Je("模块 保护"), 4 & We && Je("模块 故障"), 2 & We && Je("超温 保护"), 1 & We && Je("过压 锁死");
      var Re = [Ie[0].split(" "), Ie[1].split(" "), Ie[2].split(" "), Ie[3].split(" "), Ie[4].split(" "), Ie[5].split(" "), Ie[6].split(" "), Ie[7].split(" "), Ie[8].split(" "), Ie[9].split(" "), Ie[10].split(" "), Ie[11].split(" ")];
      a.setData({
        E1S: Oe[0],
        E1A: Re[0][0],
        E1B: Re[0][1],
        E2S: Oe[1],
        E2A: Re[1][0],
        E2B: Re[1][1],
        E3S: Oe[2],
        E3A: Re[2][0],
        E3B: Re[2][1],
        E4S: Oe[3],
        E4A: Re[3][0],
        E4B: Re[3][1],
        E5S: Oe[4],
        E5A: Re[4][0],
        E5B: Re[4][1],
        E6S: Oe[5],
        E6A: Re[5][0],
        E6B: Re[5][1],
        E7S: Oe[6],
        E7A: Re[6][0],
        E7B: Re[6][1],
        E8S: Oe[7],
        E8A: Re[7][0],
        E8B: Re[7][1],
        E9S: Oe[8],
        E9A: Re[8][0],
        E9B: Re[8][1],
        EAS: Oe[9],
        EAA: Re[9][0],
        EAB: Re[9][1],
        EBS: Oe[10],
        EBA: Re[10][0],
        EBB: Re[10][1],
        ECS: Oe[11],
        ECA: Re[11][0],
        ECB: Re[11][1]
      })
    } else if (e.startsWith("D1") || e.startsWith("D0")) {
      if (2 != ae) return;
      var ye = e.substring(2, 10),
        $e = [e.substring(10, 12), e.substring(12, 14), e.substring(14, 16), e.substring(16, 18), e.substring(18, 20), e.substring(20, 22), e.substring(22, 24), e.substring(24, 26)],
        je = parseInt(ye, 16);
      if (405206102 == je) 38, console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "电桩", "握手信息");
      else if (402781270 == je) console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "电桩", "车辆识别" + $e[0]);
      else if (485291094 == je) "11" == $e[0] ? console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "电桩", "同意收包" + $e[6]) : "13" == $e[0] && console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "电桩", "收包完成" + $e[6]);
      else if (403174486 == je) console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "电桩", "同步时间" + $e[0] + $e[1]);
      else if (403240022 == je) {
        9;
        var ze = parseInt($e[1] + $e[0], 16),
          _e = parseInt($e[3] + $e[2], 16),
          Xe = parseInt($e[5] + $e[4], 16),
          ta = parseInt($e[7] + $e[6], 16);
        console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "电桩", "充电范围:电压" + _e + "-" + ze + " 电流" + ta + "-" + Xe)
      } else if (269153366 == je) console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "电桩", "准备就绪" + $e[0]);
      else if (403895382 == je) {
        var ea = parseInt($e[1] + $e[0], 16),
          aa = parseInt($e[3] + $e[2], 16),
          na = parseInt($e[5] + $e[4], 16);
        console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "电桩", "输出信息:V" + ea + " A" + aa + " T" + na)
      } else if (270201942 == je) 26, console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "电桩", "中止充电");
      else if (136311894 == je) 31, console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "电桩", "充电器错");
      else if (405231348 == je) {
        var ia = parseInt($e[1] + $e[0], 16);
        console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "取电器", "绝缘信息:" + ia)
      } else if (269047540 == je) console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "取电器", "电池就绪:" + $e[0]);
      else if (403724020 == je) {
        var ra = .1 * parseInt($e[1] + $e[0], 16),
          oa = .1 * parseInt($e[3] + $e[2], 16);
        console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "取电器", "需求信息:V" + ra + " A" + oa)
      } else if (485250804 == je) console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "取电器", "请求多包:" + $e[6]);
      else if (485185268 == je) console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "取电器", "多包数据");
      else if (403920628 == je) console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], "取电器", "车辆状态");
      else {
        var sa = 244 == (255 & je) ? "取电器" : "电桩";
        console.log(ye, $e[0], $e[1], $e[2], $e[3], $e[4], $e[5], $e[6], $e[7], sa, "未知")
      }
    }
  },
  onLoad: function (n) {
    a = this, ie = 0, Ke = 0, i = 0, y = 0, oe = 0, ue = 0, fe = 0, ee = Number(n.Test) || 0, ne = Number(n.GM) || 0, te = Number(n.CEV) || 0, oe = Number(n.ODM) || 0, Ge = 0;
    var r = (0, Qt.GetGIF)(1);
    r.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var o = RegExp.$2;
    (r = (0, Qt.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var s = RegExp.$2;
    (r = (0, Qt.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var c = RegExp.$2;
    (r = (0, Qt.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var u = RegExp.$2;
    (r = (0, Qt.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var f = RegExp.$2;
    k = (0, Qt.GetCFG)("UEN"), ae = (0, Qt.GetCFG)("DEBUG"), Ae = (0, Qt.GetCFG)("BGI", 0), me = (0, Qt.GetCFG)("BGT", "80"), t = (0, Qt.GetCFG)("WID", "config"), e = (0, Qt.GetCFG)("WPD", "88888888"), a.setData({
      WID: t,
      WPD: e
    }), pe[1] = (0, Qt.GetCFG)("BGP1", "https://dingyue.ws.126.net/2022/0808/701db340g00rg9pym02h5d200cs00leg00it00vh.gif"), pe[2] = (0, Qt.GetCFG)("BGP2", "https://img2.baidu.com/it/u=2215745416,4118415336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422"), pe[3] = (0, Qt.GetCFG)("BGP3", "https://c-ssl.dtstatic.com/uploads/item/201912/08/20191208175320_skjmi.thumb.1000_0.jpg"), pe[4] = (0, Qt.GetCFG)("BGP4", "https://wx4.sinaimg.cn/mw690/9f2299eegy1hqwec2a3ncj21kw2dcx6p.jpg");
    var F = (0, Qt.GetCFG)("ShowM");
    a.setData({
      GIF1: "data:image/gif;base64," + o,
      GIF2: "data:image/gif;base64," + s,
      GIF3: "data:image/gif;base64," + c,
      GIF4: "data:image/gif;base64," + u,
      GIF5: "data:image/gif;base64," + f,
      UEN: k,
      ShowM: F,
      RollV: "5.35(稳定版)",
      TestV: "5.43(测试一)",
      RoCEV: "5.40",
      UPDate: "5.42",
      APP: "1.28",
      GM: ne,
      ADD: Ge,
      CAN: Xt,
      CEV: te,
      BGI: Ae,
      BGT: parseInt(me, 16),
      BGC: "#000000" + me,
      ODM: oe,
      BGP: pe[Ae],
      BGP1: pe[1],
      BGP2: pe[2],
      BGP3: pe[3],
      BGP4: pe[4]
    }), ee && (ve[0] = "1", ve[1] = "2", ve[2] = "3", ve[3] = "4", te ? this.MSG("", "EEA47210A4AE300E0" + 543..toString(16) + "43786A64777800000000") : this.MSG("", "EEA47210A4AE30010" + 543..toString(16) + "323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000021340000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), Jt.onBLEConnectionStateChange((function () {
      i || (i = 1, we.showModal({
        title: k ? "Bluetooth Disconnected" : "蓝牙信号丢失",
        content: k ? "Blue abnormal interruption is usually caused by shutdown, weak signal, or significant signal interference" : "通常是关机或信号弱或干扰大导致",
        confirmText: k ? "Yes I Kown" : "我知道了",
        showCancel: false,
        success: function (t) {
          we.navigateBack({
            delta: 0
          })
        }
      })), we.navigateBack({
        delta: 0
      })
    })), Jt.onBLECharacteristicValueChange1(this.MSG), ie = 3, Pe("A0" + He("0000")), Pe("EE"), setTimeout((function () {
      3 == ie && (ie = 0, Pe("A0" + He((0, Qt.GetCFG)(D, "0000"))), console.log("Re login:1")), "0" == y && Pe("EE")
    }), 1500), setTimeout((function () {
      3 == ie && (ie = 0, Pe("A0" + He((0, Qt.GetCFG)(D, "0000"))), console.log("Re login:1")), "0" == y && Pe("EE")
    }), 2500)
  },
  onUnload: function () {
    i = 1, Jt.closeBLEConnection()
  },
  onShow: function (t) {
    i = 0
  },
  onHide: function () {
    i = 1
  }
});