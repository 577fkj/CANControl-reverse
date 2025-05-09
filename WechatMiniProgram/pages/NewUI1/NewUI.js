var t, e, a, n, i, r, o, s, c, f, u, F, S, h, C, l, d, B, g, T, E, D, p, m, A, G, w, b, v, I, O, U, x, N, W, M, V, P, R, L, K, y, k, $, Y, H, j, z, _, Z, q, Q, J, X, tt, et, at, nt, it, rt, ot, st, ct, ft, ut, Ft, St, ht, Ct, lt, dt, Bt, gt, Tt, Et, Dt, pt, mt, At, Gt, wt, bt, vt, It, Ot, Ut, xt, Nt, Wt, Mt, Vt, Pt, Rt, Lt, Kt, yt, kt, $t, Yt, Ht, jt, zt, _t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  Zt = require("../../@babel/runtime/helpers/asyncToGenerator"),
  qt = require("../../D6700B049E166AAFB0166303AB656D63.js"),
  Qt = require("../../9236B3819E166AAFF450DB86EB756D63.js"),
  Jt = 1,
  Xt = 0,
  te = 0,
  ee = 0,
  ae = 0,
  ne = 0,
  ie = "设备连接成功",
  re = 0,
  oe = 0,
  se = 30,
  ce = 0,
  fe = 0,
  ue = 0,
  Fe = 0,
  Se = 0,
  he = 1,
  Ce = "欢迎使用",
  le = "1,27,30,欢迎",
  de = "1,57,30,使用",
  Be = 0,
  ge = "ff",
  Te = "ff",
  Ee = "ff",
  De = ["/img/bc1.gif", "", "", "", ""],
  pe = 0,
  me = "80",
  Ae = 0,
  Ge = wx,
  we = "#ffffff",
  be = ["1", "2", "3", "4"],
  ve = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "温度 异常", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"],
  Ie = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Oe(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  Ge.showModal({
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

function Ue(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ge.showModal({
    title: k ? e : t,
    editable: true,
    placeholderText: (k ? "Range:" : "范围:") + a + "-" + n,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(n) || e < Number(a) || !isFinite(e)) && 2 != ae) return void(0, qt.Toast)(k ? "Beyond the set range!" : "超出设置范围!");
        i(e)
      }
    }
  })
}

function xe(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ge.showModal({
    title: k ? e : t,
    editable: true,
    placeholderText: k ? n : a,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, qt.Toast)(k ? "Input Cannot Be Empty!" : "输入不能为空!");
        i(e)
      }
    }
  })
}

function Ne(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ge.showModal({
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

function Me(t) {
  var e = Math.floor(t / 3600),
    a = Math.floor(t % 3600 / 60),
    n = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(a).padStart(2, "0") + ":" + String(n).padStart(2, "0")
}

function Ve(t) {
  return Pe.apply(this, arguments)
}

function Pe() {
  return (Pe = Zt(_t().mark((function t(e) {
    return _t().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (1 == ee && console.log("Send", e), 0 == Le) {
            t.next = 4;
            break
          }
          return (0, qt.Toast)(k ? "There Are Unfinished Sending Tasks" : "有发送任务未完成"), t.abrupt("return");
        case 4:
          return e = e.substring(0, 40), t.next = 7, Qt.easySendData1(e, true);
        case 7:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var Re = [""],
  Le = 0;

function Ke(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  0 == Le ? Ge.showModal({
    title: k ? "Confirm Whether To Send" : "确认是否发送",
    editable: false,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (n) {
      if (n.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), Le = 0, (Re = [])[0] = "F1" + (a ? RegExp.$1 : $e(RegExp.$1));
        for (var i = e ? RegExp.$2 : ke(RegExp.$2), r = 0; r < i.length; r += 240) Le++, Re[Le] = "F2" + i.slice(r, r + 240);
        Re[Re.length] = "F3", Le = 0, ye()
      }
    }
  }) : (0, qt.Toast)(k ? "There Are Unfinished Sending Tasks" : "有发送任务未完成")
}

function ye(t) {
  var e = Re[Le];
  Qt.easySendData1(e, true), (0, qt.Toast)((k ? "Sending:" : "发送进度:") + (Le / Re.length * 100).toFixed(2) + "%"), Le++
}

function ke(t) {
  if (!t) return t;
  var e, a, n, i, r, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    c = 0,
    f = 0,
    u = [];
  t += "";
  do {
    e = (o = s.indexOf(t.charAt(c++)) << 18 | s.indexOf(t.charAt(c++)) << 12 | (i = s.indexOf(t.charAt(c++))) << 6 | (r = s.indexOf(t.charAt(c++)))) >> 16 & 255, a = o >> 8 & 255, n = 255 & o, u[f++] = 64 === i ? e.toString(16).padStart(2, "0") : 64 === r ? e.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0") : e.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0")
  } while (c < t.length);
  return u.join("")
}

function $e(t) {
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

function He(t) {
  return Math.floor(100 * t).toString(16).padStart(8, "0")
}

function je(t) {
  return Math.floor(t).toString(16).padStart(4, "0")
}

function ze(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function _e(view, offset, decimals = 2, asNumber = false) {
  const rawValue = view.getFloat32(offset, true);
  const formatted = rawValue.toFixed(decimals);
  return asNumber ? parseFloat(formatted) : formatted;
}

function Ze(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    n = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return a ? parseFloat(n) : n
}

function qe(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}

function Qe(t) {
  for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, a = 0, n = 0; n < 12; n++)
    if (ve[n] == t) {
      Ie[n] = e, a = 1;
      break
    } if (!a && e)
    for (var i = 1; i < 11; i++)
      if (6 != i && 0 == Ie[i]) {
        ve[i] = t, Ie[i] = e;
        break
      }
}
Page({
  data: {
    nbsp: "　",
    Cr0: we,
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: we,
    Cr4: "#60ffc8",
    Cr5: we,
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: we,
    Cr10: we,
    Cr11: "#00ff00",
    Cr12: "#00c8ff",
    Cr13: "#ff9430",
    Cr14: "#60ffc8",
    Cr15: we,
    Cr16: "#f80ca0",
    Cr17: we,
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
    Ve("FF01"), (2 == ne || ae) && this.setData({
      Panel: ae ? 2 : 3,
      ShowBar: ae ? 0 : Jt < Number("5.41") ? 4 : 25,
      LOGO: k ? "Preview" : "预览"
    })
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, qt.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    xe("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      Ve("FA75" + $e(t))
    }))
  },
  BTRST: function (t) {
    Ne("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      Ve("F60100"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Ge.navigateBack({
        delta: 0
      })
    }))
  },
  BTRST1: function (t) {
    Ne("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置并重启", "Exception repair will detect and reset certain settings", (function (t) {
      Ve("F60001"), (0, qt.Toast)(k ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), Ge.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    Ne("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      Ve("F001"), (0, qt.Toast)(k ? "The device is restarting" : "设备正在重启!"), Ge.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    Ne("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      Ve("AA01"), (0, qt.Toast)(k ? "Data cleared to zero" : "数据已清零!"), Ge.navigateBack({
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
    Ve("AC00"), Ve("FF18")
  },
  DST2: function (t) {
    Ve("AC01"), Ve("FF18")
  },
  DST3: function (t) {
    Ve("AC02"), Ve("FF18")
  },
  DST4: function (t) {
    Ve("AC03"), Ve("FF18")
  },
  BTKT1: function (t) {
    Ve("A4" + ze(1 - H))
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), Ue("设置输出最大功率", "Set maximum output power", "500", "10000", (function (t) {
      Ve("F84E" + He(t)), Ve("F84D" + He(t)), Ve("FF12")
    }))
  },
  BTLOGO0: function (t) {
    if ("预览" == a.data.LOGO || "Preview" == a.data.LOGO) Ge.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: true
    }), a.SetLOGO(le + "|" + de, a);
    else if ("发送" == a.data.LOGO || "Send" == a.data.LOGO) {
      return Ke(o, 1), void Ve("FAD2" + $e(unescape(encodeURIComponent(Ce))))
    }
    a.setData({
      ShowBar: 20,
      LOGO: k ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (t) {
    xe("设置第一行LOGO", "Set the first line logo", le, le, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) le = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) le = "1,27,30," + RegExp.$1, de = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, qt.Toast)(k ? "Input format error" : "输入格式错误");
        le = "1,27,30," + RegExp.$1
      }
      a.setData({
        LOGO1: le,
        LOGO2: de,
        LOGO: k ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO2: function (t) {
    xe("设置第二行LOGO", "Set second line logo", de, de, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) de = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) le = "1,27,30," + RegExp.$1, de = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, qt.Toast)(k ? "Input format error" : "输入格式错误");
        de = "1,57,30," + RegExp.$1
      }
      a.setData({
        LOGO1: le,
        LOGO2: de,
        LOGO: k ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO3: function (t) {
    Ve("F9C0" + ze(1 - xt)), Ve("FF17")
  },
  BTLOGO4: function (t) {
    xe("设置简约模式文字", "Set the first line logo", "最多6个汉字或者12个英文", le, (function (t) {
      Ve("FAD2" + $e(t = unescape(encodeURIComponent(t)))), Ve("F7")
    }))
  },
  SetLOGO: function (t, e) {
    Ge.createSelectorQuery().select("#LOGO").fields({
      node: true,
      size: true
    }).exec((function (a) {
      var n = a[0].node,
        i = n.getContext("2d");
      n.width = 60, n.height = 60, i.fillStyle = "#000", i.scale(1, 1), i.fillRect(0, 0, 60, 60), i.fillStyle = "#fff";
      var r = t.split("|");
      Ce = "";
      for (var s = 0; s < r.length; s += 1) {
        var c = r[s].split(",");
        Ce += c[3];
        var f = c[0],
          u = c[1],
          F = c[2],
          S = c[3];
        i.font = "normal " + F + "px Kaiti", i.fillText(S, f, u)
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
      o += "}DataEnd", Ge.hideToast(), e.setData({
        LOGO: k ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    Ve("F962" + ze(1 - Gt)), Ve("FF16")
  },
  BTCAN1: function (t) {
    Ne("确认是否切换为华为", "Switch to Huawei", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Ve("FC530101"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Ge.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN2: function (t) {
    Ne("确认是否切换为英可瑞", "Switch to Increase", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Ve("FC530201"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Ge.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN4: function (t) {
    Ne("确认是否切换为中兴3000", "Switch to ZTE3000", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Ve("FC530401"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Ge.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN8: function (t) {
    Ne("确认是否切换为英飞源", "Switch to Infy", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Ve("FC530801"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Ge.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN16: function (t) {
    Ne("确认是否切换为EPS6020", "Switch to EPS6020", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Ve("FC531001"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Ge.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN32: function (t) {
    Ne("确认是否切换为中兴4875", "Switch to ZTE4875", "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == ae) {
        for (var e = parseInt(D, 16), a = e.toString(), n = 0, i = 0; i < a.length; i++) n += a.charCodeAt(i);
        Ve("C83F" + Math.floor(Math.floor(e / 611) * n).toString(16).slice(-6)), Ve("FC532001")
      } else Ve("FC532001"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Ge.navigateBack({
        delta: 0
      })
    }))
  },
  BTLEDK2: function (t) {
    Ue("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      Ve("F968" + ze(t)), Ve("FF13")
    }))
  },
  BTLEDK1: function (t) {
    Ue("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      Ve("F969" + ze(t)), Ve("FF13")
    }))
  },
  BTLEDKS1: function (t) {
    Ue("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      Ve("F96D" + ze(t)), Ve("FF12")
    }))
  },
  BTLEDKS2: function (t) {
    Ue("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      Ve("F96A" + ze(t)), Ve("FF13")
    }))
  },
  BTStart1: function (t) {
    Ue("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      Ve("F96B" + ze(t)), Ve("FF12")
    }))
  },
  BTStart2: function (t) {
    Ve("F96C" + ze(1 - Q)), Ve("FF12")
  },
  BTGIF1: function (t) {
    Ve("F96F" + ze(1 - Tt)), Ve("FF15")
  },
  BT_GIF1: function (t) {
    Ke((0, qt.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    Ke((0, qt.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    Ke((0, qt.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    Ke((0, qt.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    Ke((0, qt.GetGIF)(5))
  },
  BTUI: function (t) {
    a.setData({
      CVer: Jt.toFixed(2),
      SCAN: y,
      ID: D,
      ACT: n
    }), Ve("F9C8" + ze(1 - Yt)), Ve("FF19")
  },
  Scr1: function (t) {
    he = 1, a.setData({
      Cr0: we,
      Cr1: "#00ff00",
      Cr2: "#00c8ff",
      Cr3: we,
      Cr4: "#60ffc8",
      Cr5: we,
      Cr6: "#ff9430",
      Cr7: "#f80ca0",
      Cr8: we,
      Cr10: we,
      Cr11: "#00ff00",
      Cr12: "#00c8ff",
      Cr13: "#ff9430",
      Cr14: "#60ffc8",
      Cr15: we,
      Cr16: "#f80ca0",
      Cr17: we,
      Crs: he
    })
  },
  Scr2: function (t) {
    he = 2, a.setData({
      Cr0: we,
      Cr1: we,
      Cr2: we,
      Cr3: we,
      Cr4: we,
      Cr5: we,
      Cr6: we,
      Cr7: we,
      Cr8: we,
      Cr10: we,
      Cr11: we,
      Cr12: we,
      Cr13: we,
      Cr14: we,
      Cr15: we,
      Cr16: we,
      Cr17: we,
      Crs: he
    })
  },
  Scr3: function (t) {
    he = 3, a.setData({
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
      Crs: he
    })
  },
  Scr4: function (t) {
    he = 0, a.setData({
      Cr0: (0, qt.GetCFG)("Cr0", we),
      Cr1: (0, qt.GetCFG)("Cr1", "#00ff00"),
      Cr2: (0, qt.GetCFG)("Cr2", "#00c8ff"),
      Cr3: (0, qt.GetCFG)("Cr3", we),
      Cr4: (0, qt.GetCFG)("Cr4", "#60ffc8"),
      Cr5: (0, qt.GetCFG)("Cr5", we),
      Cr6: (0, qt.GetCFG)("Cr6", "#ff9430"),
      Cr7: (0, qt.GetCFG)("Cr7", "#f80ca0"),
      Cr8: (0, qt.GetCFG)("Cr8", we),
      Cr10: (0, qt.GetCFG)("Cr10", we),
      Cr11: (0, qt.GetCFG)("Cr11", "#00ff00"),
      Cr12: (0, qt.GetCFG)("Cr12", "#00c8ff"),
      Cr13: (0, qt.GetCFG)("Cr13", "#ff9430"),
      Cr14: (0, qt.GetCFG)("Cr14", "#60ffc8"),
      Cr15: (0, qt.GetCFG)("Cr15", we),
      Cr16: (0, qt.GetCFG)("Cr16", "#f80ca0"),
      Cr17: (0, qt.GetCFG)("Cr17", we),
      Crs: he
    })
  },
  BTCr1: function (t) {
    if (a.data.UI === 0) {
      Ve("F53000" + We(this.data.Cr0) + "0000f01c");
      Ve("F53100" + We(this.data.Cr1) + "00209F26");
      Ve("F53200" + We(this.data.Cr2) + "00479F26");
      Ve("F53300" + We(this.data.Cr3) + "006e9F27");
      Ve("F53400" + We(this.data.Cr4) + "00969F3f");
      Ve("F53500" + We(this.data.Cr5) + "A3204d4d");
      Ve("F53600" + We(this.data.Cr6) + "50d64f1A");
      Ve("F53700" + We(this.data.Cr7) + "00d64f1A");
      Ve("F53801" + We(this.data.Cr8) + "A3774d68");
    } else if (a.data.UI === 1) {
      Ve("F52000" + We(this.data.Cr10) + "0000781c");
      Ve("F52100" + We(this.data.Cr11) + "001cf02e");
      Ve("F52200" + We(this.data.Cr12) + "004af02e");
      Ve("F52300" + We(this.data.Cr13) + "0078f02e");
      Ve("F52400" + We(this.data.Cr14) + "00a6f02e");
      Ve("F52500" + We(this.data.Cr15) + "7800781c");
      Ve("F52600" + We(this.data.Cr16) + "00d4781b");
      Ve("F52701" + We(this.data.Cr17) + "78d4781b");
    }  
  },
  CK0: function (t) {
    Be = 0, this.CRSet(this.data.Cr0)
  },
  CK1: function (t) {
    Be = 1, this.CRSet(this.data.Cr1)
  },
  CK2: function (t) {
    Be = 2, this.CRSet(this.data.Cr2)
  },
  CK3: function (t) {
    Be = 3, this.CRSet(this.data.Cr3)
  },
  CK4: function (t) {
    Be = 4, this.CRSet(this.data.Cr4)
  },
  CK5: function (t) {
    Be = 5, this.CRSet(this.data.Cr5)
  },
  CK6: function (t) {
    Be = 6, this.CRSet(this.data.Cr6)
  },
  CK7: function (t) {
    Be = 7, this.CRSet(this.data.Cr7)
  },
  CK8: function (t) {
    Be = 8, this.CRSet(this.data.Cr8)
  },
  CK10: function (t) {
    Be = 10, this.CRSet(this.data.Cr10)
  },
  CK11: function (t) {
    Be = 11, this.CRSet(this.data.Cr11)
  },
  CK12: function (t) {
    Be = 12, this.CRSet(this.data.Cr12)
  },
  CK13: function (t) {
    Be = 13, this.CRSet(this.data.Cr13)
  },
  CK14: function (t) {
    Be = 14, this.CRSet(this.data.Cr14)
  },
  CK15: function (t) {
    Be = 15, this.CRSet(this.data.Cr15)
  },
  CK16: function (t) {
    Be = 16, this.CRSet(this.data.Cr16)
  },
  CK17: function (t) {
    Be = 17, this.CRSet(this.data.Cr17)
  },
  CRSet: function (t) {
    t.match(/#(..)(..)(..)/), ge = RegExp.$1, Te = RegExp.$2, Ee = RegExp.$3, this.setData({
      CR: parseInt(ge, 16),
      CG: parseInt(Te, 16),
      CB: parseInt(Ee, 16)
    })
  },
  SetCr: function () {
    0 == a.data.UI && Be >= 10 && (Be = 0), 1 == a.data.UI && Be < 10 && (Be = 10), 0 == Be ? a.setData({
      Cr0: "#" + ge + Te + Ee
    }) : 1 == Be ? a.setData({
      Cr1: "#" + ge + Te + Ee
    }) : 2 == Be ? a.setData({
      Cr2: "#" + ge + Te + Ee
    }) : 3 == Be ? a.setData({
      Cr3: "#" + ge + Te + Ee
    }) : 4 == Be ? a.setData({
      Cr4: "#" + ge + Te + Ee
    }) : 5 == Be ? a.setData({
      Cr5: "#" + ge + Te + Ee
    }) : 6 == Be ? a.setData({
      Cr6: "#" + ge + Te + Ee
    }) : 7 == Be ? a.setData({
      Cr7: "#" + ge + Te + Ee
    }) : 8 == Be ? a.setData({
      Cr8: "#" + ge + Te + Ee
    }) : 10 == Be ? a.setData({
      Cr10: "#" + ge + Te + Ee
    }) : 11 == Be ? a.setData({
      Cr11: "#" + ge + Te + Ee
    }) : 12 == Be ? a.setData({
      Cr12: "#" + ge + Te + Ee
    }) : 13 == Be ? a.setData({
      Cr13: "#" + ge + Te + Ee
    }) : 14 == Be ? a.setData({
      Cr14: "#" + ge + Te + Ee
    }) : 15 == Be ? a.setData({
      Cr15: "#" + ge + Te + Ee
    }) : 16 == Be ? a.setData({
      Cr16: "#" + ge + Te + Ee
    }) : 17 == Be && a.setData({
      Cr17: "#" + ge + Te + Ee
    })
  },
  CSC: function (t) {
    0 == he && (0, qt.SetCFG)("Cr" + Be, "#" + ge + Te + Ee)
  },
  CRC: function (t) {
    ge = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CGC: function (t) {
    Te = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CBC: function (t) {
    Ee = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CTC1: function (t) {
    me = t.detail.value.toString(16).padStart(2, "0"), (0, qt.SetCFG)("BGT", me), a.setData({
      BGC: "#000000" + me
    })
  },
  BTBGP1: function (t) {
    xe("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, qt.SetCFG)("BGI", 1), (0, qt.SetCFG)("BGP1", t), a.setData({
        BGP1: t,
        BGP: t,
        BGI: 1
      })
    }))
  },
  BTBGP2: function (t) {
    xe("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, qt.SetCFG)("BGI", 2), (0, qt.SetCFG)("BGP2", t), a.setData({
        BGP2: t,
        BGP: t,
        BGI: 2
      })
    }))
  },
  BTBGP3: function (t) {
    xe("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, qt.SetCFG)("BGI", 3), (0, qt.SetCFG)("BGP3", t), a.setData({
        BGP3: t,
        BGP: t,
        BGI: 3
      })
    }))
  },
  BTBGP4: function (t) {
    xe("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, qt.SetCFG)("BGI", 4), (0, qt.SetCFG)("BGP4", t), a.setData({
        BGP4: t,
        BGP: t,
        BGI: 4
      })
    }))
  },
  BTBGP0: function (t) {
    5 == ++pe && (pe = 0), a.setData({
      BGP: De[pe],
      BGI: pe
    }), (0, qt.SetCFG)("BGI", pe)
  },
  BTCKA2: function (t) {
    Ve("F972" + ze(1 - Et)), Ve("FF15")
  },
  BTEN1: function (t) {
    te && this.MSG("", "1100001BE4000005DC000020D0000005DC010" + (1 - k) + "00"), (0, qt.SetCFG)("UEN", 1 - k), Ve("F970" + ze(1 - k)), Ve("FF11")
  },
  BTBLE1: function (t) {
    xe("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      Ve("FA73" + $e(t = unescape(encodeURIComponent(t)))), Ve("FF20")
    }))
  },
  BTBLE2: function (t) {
    xe("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      Ve("FA74" + $e(t)), Ve("FF21")
    }))
  },
  BTVIN: function (t) {
    xe("设置取电器VIN码", "Set VIN", "标准17位英文和数字", "Up to 17 characters", (function (t) {
      return (t = t.toUpperCase()).match(/^[A-HJ-NPR-Z0-9]{14}\d\d\d$/) ? (Ve("FAD3" + $e(t = unescape(encodeURIComponent(t)))), void Ve("FF25")) : void(0, qt.Toast)(k ? "Incorrect VIN input!" : "输入VIN不正确!")
    }))
  },
  BTTCH1: function (t) {
    xe("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return Ve("FAD1" + $e(t)), void Ve("FF24");
      (0, qt.Toast)(k ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    Ue("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      Ve("F9C7" + ze(t)), Ve("FF18")
    }))
  },
  BTKEY1: function (t) {
    Ve("F967" + ze(1 - V)), Ve("FF10")
  },
  BTKEY2: function (t) {
    Ve("F966" + ze(1 - $)), Ve("FF11")
  },
  BTDDT1: function (t) {
    Ve("F96E" + ze(wt >= 3 ? 0 : wt + 1)), Ve("FF16")
  },
  UPDate: function (a, n) {
    Ve("AB00" + $e(unescape(encodeURIComponent(t)))), Ve("AB01" + $e(unescape(encodeURIComponent(e)))), Ve(a + $e(n)), (0, qt.Toast)(k ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
  },
  BTLST: function (t) {
    this.setData({
      LST: 1 - this.data.LST
    })
  },
  BTUP6: function (t) {
    xe("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, qt.SetCFG)("WID", t), Ve("AB00" + $e(t = unescape(encodeURIComponent(t)))), Ve("FF22")
    }))
  },
  BTUP7: function (t) {
    xe("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, qt.SetCFG)("WPD", t), Ve("AB01" + $e(t = unescape(encodeURIComponent(t)))), Ve("FF23")
    }))
  },
  BTUP1: function (t) {
    if (!Ae)
      if (this.data.CVer >= this.data.UPDate) {
        if (re) return;
        Ne("升级确认", "Confirm clearance date", "当前已经是最新版,确定是否重新升级固件", "", (function (t) {
          a.UPDate("A700000000", "NewUI")
        }))
      } else Ge.showModal({
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
    2 == ae && Ne("确认清除日期", "Confirm clearance date", "", "", (function (t) {
      Ve("FD48" + $e("Cxjdwx"))
    }))
  },
  BTUP8: function (t) {
    Ge.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    Ge.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    Ge.setClipboardData({
      data: "设备ID:" + D
    })
  },
  BTUP0: function (t) {
    Ge.showModal({
      title: k ? "Firmware rollback" : "固件回退",
      editable: false,
      confirmText: k ? "YES" : "确定",
      cancelText: k ? "NO" : "取消",
      success: function (t) {
        t.confirm && (Xt && a.UPDate("A700000000", "CEVRollBack"), Xt || a.UPDate("A700000000", "CANRollBack"))
      }
    })
  },
  BTUP9: function (t) {
    Ge.showModal({
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
    Ue("设置温度加速值", "Set temperature acceleration value", "2", "20", (function (t) {
      Ve("F963" + ze(t)), Ve("FF14")
    }))
  },
  BTAFS: function (t) {
    Ue("设置电流加速值", "Set current acceleration value", "0.1", "3.0", (function (t) {
      Ve("F964" + ze(10 * t)), Ve("FF14")
    }))
  },
  BTLFS: function (t) {
    Ue("设置初始风速值", "Set initial wind speed value", "20", "200", (function (t) {
      Ve("F965" + ze(t)), Ve("FF14")
    }))
  },
  BTMFS: function (t) {
    Ue("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      Ve("F9C5" + ze(t)), Ve("FF14")
    }))
  },
  BTTMC: function (t) {
    Ue("设置超温进入温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      Ve("F84A" + He(t)), Ve("FF13")
    }))
  },
  BTTMC1: function (t) {
    Ue("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      Ve("F84B" + He(t)), Ve("FF13")
    }))
  },
  BTOST: function (t) {
    Ue("设置超温关机温度", "Set the exit temperature for over temperature", "50", "120", (function (t) {
      Ve("F8F7" + He(t)), Ve("FF18")
    }))
  },
  BTTMW: function (t) {
    Ue("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      Ve("F84C" + He(t)), Ve("FF13")
    }))
  },
  BTMMV: function (t) {
    Ue("设置最高电压限制", "Set maximum voltage limit", "100", "1000", (function (t) {
      Ve("F8FA" + He(t)), Ve("FF19"), Ve("FF14")
    }))
  },
  BTMMA: function (t) {
    Ue("设置最高电流限制", "Set maximum current limit", "10", "400", (function (t) {
      Ve("F8F9" + He(t)), Ve("FF19"), Ve("FF14")
    }))
  },
  BTRDY: function (t) {
    Ue("设置就绪电压范围", "Set the ready voltage range", "1", "20", (function (t) {
      Ve("F9CD" + ze(t)), Ve("FF19")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), c > 0 && c < 5 ? Ne("检测到输出电流", "Detected output current", "如有负载请点取消后断开负载再开始校正,如无负载则为空载电流,点击确定将会设置为最小电流过滤(可在输出电流校正页面中设置).", "If there is a load detected in the output current, please click NO and disconnect the load before starting the calibration. If there is no load, Click YES will set it as the minimum current filter (which can be set on the output current calibration page)", (function (t) {
      Ve("F848" + He(Number(c) + .05)), Ve("FF16")
    })) : s < 10 || c > 0 ? (0, qt.Toast)(k ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Ve("C1"), Ve("FF"), Ue("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / s).toFixed(4),
        a = Number(t / X).toFixed(4);
      Ve("C3" + He(100 * a) + He(100 * e)), 2 == y ? (Ve("F876" + He(20 * a)), Ve("F877" + He(100 * a))) : 1 == y ? (Ve("F876" + He(41 * a)), Ve("F877" + He(58.5 * a))) : 4 == y ? (Ve("F876" + He(41 * a)), Ve("F877" + He(59 * a))) : 16 == y ? (Ve("F876" + He(44 * a)), Ve("F877" + He(61 * a))) : 32 == y && (Ve("F876" + He(41.2 * a)), Ve("F877" + He(59.4 * a))), Ve("FF"), Ve("A80" + W + He(50 * a) + He(tt)), Ve("FF")
    })))
  },
  BTOVT1: function (t) {
    Xt ? Ue("升压采样补偿", "Boost voltage compensation", "0.1", "1", (function (t) {
      t > 999.99 ? t *= 1e-4 : t > 99.99 && (t *= .001), Ve("FB47" + He(100 * t)), Ve("FF")
    })) : Ue("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      Ve("FB47" + He(100 * t)), Ve("FF")
    }))
  },
  BTOVTU: function (t) {
    Ve("FB47" + He(100 * (Number(Ct) + 5e-4))), Ve("FF")
  },
  BTOVTD: function (t) {
    Ve("FB47" + He(100 * (Number(Ct) - 5e-4))), Ve("FF")
  },
  BTOVD1: function (t) {
    Xt ? Ue("基础电压补偿", "Basic voltage compensation", "10", "40", (function (t) {
      Ve("FB46" + He(100 * t)), Ve("FF")
    })) : Ue("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      Ve("FB46" + He(100 * t)), Ve("FF")
    }))
  },
  BTOVDU: function (t) {
    Ve("FB46" + He(100 * (Number(dt) + .001))), Ve("FF")
  },
  BTOVDD: function (t) {
    Ve("FB46" + He(100 * (Number(dt) - .001))), Ve("FF")
  },
  BTOVS: function (t) {
    Oe(k ? "Set voltage range" : "设置电压范围", (k ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Ve("F876" + He(Number(RegExp.$1))), Ve("F877" + He(Number(RegExp.$2))), Ve("FF")) : (0, qt.Toast)(k ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    Ue("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      Ve("F8F3" + He(t)), Ve("FF")
    }))
  },
  BTOVT3: function (t) {
    s < 10 || c > 0 ? (0, qt.Toast)(k ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Ve("C2"), Ve("FF"), Ue("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / s).toFixed(4);
      Ve("C4" + He(100 * Number(t / X).toFixed(4)) + He(100 * e)), Ve("FF")
    })))
  },
  BTOVT2: function (t) {
    Ue("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      Ve("FBF2" + He(100 * t)), Ve("FF")
    }))
  },
  BTO2TU: function (t) {
    Ve("FBF2" + He(100 * (Number(vt) + .001))), Ve("FF")
  },
  BTO2TD: function (t) {
    Ve("FBF2" + He(100 * (Number(vt) - .001))), Ve("FF")
  },
  BTOVD2: function (t) {
    Ue("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      Ve("FBF1" + He(100 * t)), Ve("FF")
    }))
  },
  BTO2DU: function (t) {
    Ve("FBF1" + He(100 * (Number(It) + .001))), Ve("FF")
  },
  BTO2DD: function (t) {
    Ve("FBF1" + He(100 * (Number(It) - .001))), Ve("FF")
  },
  BTIVD1: function (t) {
    Ue("输入电压补偿值", "Input voltage compensation value", "0.1", "5", (function (t) {
      Ve("F8FB" + He(t)), Ve("FF")
    }))
  },
  BTIVD2: function (t) {
    Ve("F8FB" + He(1)), Ve("FF"), Ue("输入实际测量出的输入电压", "Input the actual measured input voltage", "10", "1000", (function (t) {
      Ve("F8FB" + He(Number(t / C))), Ve("FF")
    }))
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 50,
      duration: 300
    }), c < 5 || X - s < .2 ? (0, qt.Toast)(k ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (Ve("C0"), Ve("FF"), Ue("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / c).toFixed(4);
      Ve("C5" + He(100 * Number(t / tt).toFixed(4)) + He(100 * e)), Ve("FF")
    })))
  },
  BTOAT1: function (t) {
    Ue("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      Ve("FB45" + He(100 * t)), Ve("FF")
    }))
  },
  BTOAT2: function (t) {
    Ve("FB45" + He(100 * (Number(lt) - .001))), Ve("FF")
  },
  BTOAT3: function (t) {
    Ve("FB45" + He(100 * (Number(lt) + .003))), Ve("FF")
  },
  BTOAS1: function (t) {
    Ue("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      Ve("F8F4" + He(t)), Ve("FF")
    }))
  },
  BTCLV: function (t) {
    Ue("设置最小电流过滤", "Set minimum current filtering", "0.00", "3.00", (function (t) {
      Ve("F848" + He(t)), Ve("FF")
    }))
  },
  BTOAD1: function (t) {
    Ue("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      Ve("FB44" + He(100 * t)), Ve("FF")
    }))
  },
  BTOAD2: function (t) {
    Ve("FB44" + He(100 * (Number(Bt) - .001))), Ve("FF")
  },
  BTOAD3: function (t) {
    Ve("FB44" + He(100 * (Number(Bt) + .001))), Ve("FF")
  },
  BTOAS: function (t) {
    Oe(k ? "Set current range" : "设置电流范围", (k ? "Now:" : "当前范围:") + st + "-" + ct, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Ve("F878" + He(Number(RegExp.$1))), Ve("F879" + He(Number(RegExp.$2))), Ve("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (Ve("F879" + He(t)), Ve("FF")) : (0, qt.Toast)(k ? "Input format error" : "输入格式错误!"))
    }))
  },
  pwrbt: function (t) {
    Ve("A6" + ze(1 - M)), Ve("FF10")
  },
  BTUCF1: function (t) {
    Ve("F9CF" + ze(1 - zt)), Ve("FF10")
  },
  owbt: function (t) {
    Ue("设置功率限制", "Set power limit", "300", _, (function (t) {
      Ve("F84D" + He(t)), Ve("FF")
    }))
  },
  BTUIW1: function (t) {
    Ve("F9E1" + ze(1 - ue)), Ve("FF")
  },
  tibt: function (t) {
    Ue("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      Ve("A9" + je(t)), Ve("FF")
    }))
  },
  BTYC1: function (t) {
    Ue("设置预充电压", "Set pre charge voltage", "0", ut, (function (t) {
      Ve("F8F6" + He(t)), Ve("FF")
    }))
  },
  BTYC2: function (t) {
    Ue("设置预充电流", "Set pre charge current", st, ct, (function (t) {
      Ve("F8F5" + He(t)), Ve("FF")
    }))
  },
  SetVA: function (t, e, a) {
    W != t && (e > ut || e < ft ? Ue("设置输出电压", "Set output voltage", ft, ut, (function (e) {
      Ve("A80" + (W = t) + He(e) + He(a)), Ve(t <= 2 ? "FF10" : "FF11")
    })) : Ne("快捷设置电压电流切换", "Switch confirmation", "为避免误触,请确认切换电压电流", "To avoid accidental contact, please confirm the switching voltage and current", (function (n) {
      Ve("A80" + (W = t) + He(e) + He(a)), Ve(t <= 2 ? "FF10" : "FF11")
    })))
  },
  ks1bt: function (t) {
    this.SetVA(1, x[0], x[1] > ct ? ct : x[1])
  },
  ks2bt: function (t) {
    this.SetVA(2, N[0], N[1] > ct ? ct : N[1])
  },
  ks3bt: function (t) {
    this.SetVA(3, L[0], L[1] > ct ? ct : L[1])
  },
  ks4bt: function (t) {
    this.SetVA(4, K[0], K[1] > ct ? ct : K[1])
  },
  hqbt1: function (t) {
    Xt ? Jt >= 5.39 ? Ue("设置超温关机倒计时", "设置超温关机倒计时", 3, 60, (function (t) {
      Ve("F961" + ze(t)), Ve("FF15")
    })) : (0, qt.Toast)(k ? "The current firmware version is not adjustable. If you need to modify it, please upgrade the firmware!" : "当前固件版本不可调,如需修改请升级固件!") : Ue("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      Ve("F961" + ze(t)), Ve("FF15")
    }))
  },
  hqbt0: function (t) {
    Ve("F961" + ze(0 == gt ? Xt ? 30 : 10 : 0)), Ve("FF15")
  },
  nvbt: function (t) {
    Oe(k ? "Set Output Voltage" : "设置输出电压", (k ? "Range:" : "范围:") + ft + "-" + ut, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) Ve(t.substr(2, 4) + He(t.substr(6))), Ve("FF");
        else {
          if (t.startsWith("FFF9")) return Ve(t.substr(2)), void Ve("FF");
          if (t === "DEBUG=0") {
            qt.SetCFG("DEBUG", 0);
            ee = 0;
            Ve("F9C900");
            Ve("F9CA01");
            Ve("F9CB01");
            Ve("F9CC01");
          } else if (t === "DEBUG=1") {
            qt.SetCFG("DEBUG", 1);
            ee = 1;
            Ve("F9C900");
            Ve("F9CA01");
            Ve("F9CB01");
            Ve("F9CC01");
          } else if (t === "DEBUG=2") {
            qt.SetCFG("DEBUG", 2);
            ee = 2;
            Ve("F9C9FF");
            Ve("F9CA01");
            Ve("F9CB01");
            Ve("F9CC01");
          } else if (t === "DEBUG=3") {
            qt.SetCFG("DEBUG", 2);
            ee = 2;
            Ve("F9C9FF");
            Ve("F9CA01");
            Ve("F9CB01");
            Ve("F9CC00");
          } else if (t.startsWith("FFC8")) Ve(t.substr(2, 4) + t.substr(6)), Ve("FF");
          else if (t.startsWith("FFC9")) {
            var e = "C9" + t.substr(4, 4) + $e(t.substr(8));
            console.log(e), Ve(e)
          } else if ("异常修复" == t && Jt >= 5.39) Ne("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置", "Exception repair will detect and reset certain settings", (function (t) {
            Ve("F60001"), (0, qt.Toast)(k ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), Ge.navigateBack({
              delta: 0
            })
          }));
          else if ("强制升级" == t || "测试版" == t) Ge.showModal({
            title: k ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: k ? "YES" : "确定",
            cancelText: k ? "NO" : "取消",
            success: function (e) {
              e.confirm && a.UPDate("A700000000", "测试版" == t ? "NewTest" : "NewUI")
            }
          });
          else if ("测试二" == t) Ge.showModal({
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
              e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && Ke(e)
            }
          });
          else {
            if (Ve("A1" + $e(t)), (t = parseFloat(t)) > ut || t < ft && 0 == zt || !isFinite(t)) return void(0, qt.Toast)(k ? "Beyond the set range!" : "超出设置范围!");
            Ve("A80" + W + He(t) + He(tt)), Ve("FF")
          }
        }
      else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && Ke(e)
        }
      })
    }))
  },
  nabt: function (t) {
    Ue("设置输出电流", "Set output current", st, ct, (function (t) {
      Ve("A80" + W + He(X) + He(t)), Ve("FF")
    }))
  },
  sa2bt3: function (t) {
    Ue("设置充电时间(分钟)", "Set charging time(Minute)", 0, 600, (function (t) {
      Ve("A9" + je(t)), Ve("FF")
    }))
  },
  SetSGK: function () {
    if (Jt >= 5.39) {
      var t = 0 == jt ? "1" : "0";
      Ve("A50" + t), Ve("A40" + t), Ve("FF19")
    } else Ve("F857" + He(0 == z ? 1 : 0)), Ve("FF12")
  },
  sa2bt2: function (t) {
    Ue("设置二段电流", "Set second stage current", st, ct, (function (t) {
      Ve("F857" + He(t)), Ve("FF12")
    }))
  },
  sa2bt1: function (t) {
    Ue("设置二段电压", "Set second stage voltage", ft, ut, (function (t) {
      Ve("F858" + He(t)), Ve("FF12")
    }))
  },
  sa2bt0: function (t) {
    Xt && (Jt < 5.39 || X > 126) ? Ve("A9" + je(oe ? 0 : 60)) : (Ve("F858" + (0 == z ? He(X - 3) : "00000000")), Ve("F857" + (0 == z ? He(10) : "00000000")), Ve("FF12"))
  },
  sdbt1: function (t) {
    Ue("设置延时时间(分钟)", "Set delay time (Minutes)", 1, 600, (function (t) {
      Ve("F859" + He(t)), Ve("FF16")
    }))
  },
  sdbt2: function (t) {
    Ue("设置关机电流", "SSet startup delay current", "0.00", "10.00", (function (t) {
      Ve("F8F0" + He(t)), Ve("FF")
    }))
  },
  sdbt0: function (t) {
    Ve("F859" + (0 == mt ? He(1) : "00000000")), Ve("FF16")
  },
  MSG: function (t, e) {
    if (!i)
      if (1 != ee || e.startsWith("D") || (0, qt.print)("MSG:", e), e.startsWith("A101")) a.setData({
        ShowBar: 0,
        Panel: 2,
        LOGO: k ? "Preview" : "预览"
      });
      else if (e.startsWith("A001")) {
      if (ne = 2, ("Cxjdwx" == n || "未激活" == n) && !ae) {
        var o = new Date;
        Ve("FD48" + $e(o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate()))
      }
      Jt <= 5.28 && Ve("FF")
    } else if (e.startsWith("A000")) {
      if (ne) return;
      ne = 1, (0, qt.Toast)(k ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ge.showModal({
          title: k ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + D,
          confirmText: k ? "YES" : "确定",
          cancelText: k ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, qt.SetCFG)(D, t.content), Ve("A0" + $e(t.content)), ne = 0)
          }
        })
      }), 1e3)
    } else if (e.startsWith("F101")) ye();
    else if (e.startsWith("F201")) ye();
    else if (e.startsWith("F301")) Le = 0, Re = [], (0, qt.Toast)(k ? "Send End!" : "发送完成!");
    else if (e.startsWith("FF")) {
      var _t = new DataView(t);
      if (_t.getUint8(1)) {
        if (2 != ne && (ne = 2, ("Cxjdwx" == n || "未激活" == n) && !ae)) {
          var Zt = new Date;
          Ve("FD48" + $e(Zt.getFullYear() + "-" + (Zt.getMonth() + 1) + "-" + Zt.getDate()))
        }
      } else {
        (0, qt.Toast)(k ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3)
        setTimeout((function () {
          Ge.showModal({
            title: k ? "Enter Bluetooth password" : "输入蓝牙密码",
            editable: true,
            placeholderText: "ID:" + D,
            confirmText: k ? "YES" : "确定",
            cancelText: k ? "Observer" : "我只看看",
            success: function (t) {
              t.confirm && ((0, qt.SetCFG)(D, t.content), Ve("FF" + $e(t.content)), ne = 0)
            }
          })
        }), 1e3);
      }
      M = _t.getUint8(2);
      V = _t.getUint8(3);
      y = _t.getUint8(4);
      k = _t.getUint8(5);
      $ = _t.getUint8(6);
      q = _t.getUint8(7);
      J = _t.getUint8(8);
      it = _t.getUint8(9);
      rt = _t.getUint8(10);
      ot = _t.getUint8(11);
      Ft = _t.getUint8(12);
      St = _t.getUint8(13);
      ht = _t.getUint8(14) / 10;
      gt = _t.getUint8(15);
      Tt = _t.getUint8(16);
      Et = _t.getUint8(17);
      Gt = _t.getUint8(18);
      wt = _t.getUint8(19);
      bt = _t.getUint8(20) * .01;
      xt = _t.getUint8(21);
      Nt = _t.getUint8(22);
      Wt = _t.getUint8(23);
      Lt = _t.getUint8(24);
      Kt = _t.getUint8(25);
      yt = _t.getUint8(26);
      Yt = _t.getUint8(27);
      Ht = _t.getUint8(28);
      jt = _t.getUint8(29);
      Q = _t.getUint8(30);
      W = _t.getUint8(31);
      zt = _t.getUint8(32);
      Rt = _t.getUint8(33);
      ue = _t.getUint8(34);
      Fe = _t.getUint8(35);
      Se = _t.getUint8(36);
      var Qt = 51;
      x = [_e(_t, Qt, 2, 1), _e(_t, Qt + 4, 2, 1)]
      N = [_e(_t, Qt += 8, 2, 1), _e(_t, Qt + 4, 2, 1)]
      L = [_e(_t, Qt += 8, 2, 1), _e(_t, Qt + 4, 2, 1)]
      K = [_e(_t, Qt += 8, 2, 1), _e(_t, Qt + 4, 2, 1)]
      j = _e(_t, Qt += 8)
      z = _e(_t, Qt += 4)
      _ = _e(_t, Qt += 4)
      Z = _e(_t, Qt += 4)
      et = _e(_t, Qt += 4)
      at = _e(_t, Qt += 4)
      nt = _e(_t, Qt += 4)
      P = _e(_t, Qt += 4)
      st = _e(_t, Qt += 4)
      ct = _e(_t, Qt += 4)
      ft = _e(_t, Qt += 4)
      ut = _e(_t, Qt += 4)
      Ct = _e(_t, Qt += 4, 4)
      lt = _e(_t, Qt += 4, 4)
      dt = _e(_t, Qt += 4, 4)
      Bt = _e(_t, Qt += 4, 4)
      Dt = _e(_t, Qt += 4)
      pt = _e(_t, Qt += 4)
      mt = _e(_t, Qt += 4)
      At = _e(_t, Qt += 4)
      vt = _e(_t, Qt += 4, 4)
      It = _e(_t, Qt += 4, 4)
      Ot = _e(_t, Qt += 4)
      Ut = _e(_t, Qt += 4)
      Mt = _e(_t, Qt += 4)
      Vt = _e(_t, Qt += 4)
      Pt = _e(_t, Qt += 4)
      kt = _e(_t, Qt += 4)
      $t = _e(_t, Qt += 4)
      R = _e(_t, Qt += 4, 4)
      Qt += 4
      1 == W ? (tt = x[1], X = x[0]) : 2 == W ? (tt = N[1], X = N[0]) : 3 == W ? (tt = L[1], X = L[0]) : 4 == W && (tt = K[1], X = K[0])
      a.setData({
        PON: M,
        KON: V,
        CAN: y,
        UEN: k,
        KRC: $,
        SV: X.toFixed(2),
        SA: tt.toFixed(2),
        WTi: q,
        Sleep: J,
        LEDK0: it,
        LEDK1: rt,
        LEDK2: ot,
        IVD: R,
        UFS: Ft,
        LFS: St,
        AFS: ht,
        UHQ: gt,
        GIF: Tt,
        CKA2: Et,
        NTC: Gt,
        DDT: wt,
        CLV: bt,
        UEG: xt,
        UCN: Nt,
        MFS: Wt,
        DOL: Lt,
        DST: Kt,
        LKS: yt,
        UI: Yt,
        RDY: Ht,
        SGK: jt,
        ETi: Q,
        KSi: W,
        UCF: zt,
        TCH: Rt,
        UIW: ue,
        ACK: Fe,
        CCK: Se,
        KS1: x,
        KS2: N,
        KS3: L,
        KS4: K,
        SV2: j,
        SA2: z,
        SMW: _,
        UMW: Z,
        TMW: et,
        UMT: at,
        OMT: nt,
        MA: P,
        LSA: st,
        HSA: ct,
        LSV: ft,
        HSV: ut,
        OVT: Ct,
        OAT: lt,
        OVD: dt,
        OAD: Bt,
        L2V: Dt,
        H2V: pt,
        USD: mt,
        SDU: At,
        O2T: vt,
        O2D: It,
        OVS: Ot,
        OAS: Ut,
        YCA: Mt,
        YCV: Vt,
        OST: Pt,
        MMA: kt,
        MMV: $t
      })
    } else if (e.startsWith("FE") || e.startsWith("EE")) {
      if (0 == y) {
        n = Ye(e.substring(20, 40))
        Jt = .01 * parseInt(e.substring(16, 20), 16)
        y = qe(e, 14)
        Xt = 0
        D = e.substring(2, 14)
        if (y === 1) {
          r = "Huawei";
        } else if (y === 2) {
          r = "Increase";
        } else if (y === 4) {
          r = "ZTE3000";
        } else if (y === 8) {
          r = "INFY";
        } else if (y === 12) {
          r = "EV_Station";
          Xt = 2;
        } else if (y === 14) {
          r = "EV_Charger";
          Xt = 1;
        } else if (y === 16) {
          r = "EPS6020";
        } else if (y === 32) {
          r = "ZTE4875";
        } else if (y === 64) {
          r = "Sinexcel";
        }

        if (r === "EV_Charger") {
          a.setData({
            E1S: 0,   E1A: "正常",   E1B: "中止",
            E2S: 0,   E2A: "电桩",   E2B: "温度",
            E3S: 0,   E3A: "枪头",   E3B: "异常",
            E4S: 0,   E4A: "内部",   E4B: "过温",
            E5S: 0,   E5A: "充电",   E5B: "异常",
            E6S: 0,   E6A: "电桩",   E6B: "急停",
            E7S: 0,   E7A: "其他",   E7B: "异常",
            E8S: 0,   E8A: "自检",   E8B: "异常",
            E9S: 0,   E9A: "预充",   E9B: "异常",
            EAS: 0,   EAA: "电流",   EAB: "异常",
            EBS: 0,   EBA: "电压",   EBB: "异常",
            ECS: 0,   ECA: "参数",   ECB: "异常"
          });
        } else if (r === "Huawei") {
          a.setData({
            E1S: 0,   E1A: "模块",   E1B: "保护",
            E2S: 0,   E2A: "风扇",   E2B: "异常",
            E3S: 0,   E3A: "输入",   E3B: "欠压",
            E4S: 0,   E4A: "输入",   E4B: "过压",
            E5S: 0,   E5A: "输入",   E5B: "停电",
            E6S: 0,   E6A: "温度",   E6B: "异常",
            E7S: 0,   E7A: "模块",   E7B: "故障",
            E8S: 0,   E8A: "输出",   E8B: "过流",
            E9S: 0,   E9A: "输出",   E9B: "欠压",
            EAS: 0,   EAA: "输出",   EAB: "过压",
            EBS: 0,   EBA: "输出",   EBB: "过流",
            ECS: 0,   ECA: "模块",   ECB: "关机"
          });
        }
        n.startsWith("Cxjdwx") && (n = "未激活")
        (new Date).getTime() > 1756621705e3 && (Date.parse(n) < 1756621705e3 || (0, qt.CheckID)(D) || (i = 1, Ge.showModal({
          title: k ? "Abnormal device authorization" : "设备授权异常",
          content: "",
          confirmText: k ? "Yes I Kown" : "我知道了",
          showCancel: false,
          success: function (t) {
            Ge.navigateBack({
              delta: 0
            })
          }
        })))
        D = "0x" + D
        a.setData({
          CVer: Jt.toFixed(2),
          CEV: Xt,
          SCAN: r,
          ID: D,
          ACT: n
        });
        var te = (0, qt.GetCFG)(D, "0000");
        ae && (te = (Number(D) + 19880914).toString(16).substring(4, 8)), e.startsWith("EE") ? 0 != ne && 3 != ne || Ve("A0" + $e(te)) : (Ve("FF" + $e(te)), setTimeout((function () {
          3 == ne && (ne = 0, Ve("FF" + $e(te)))
        }), 1500))
      }
      if (e.startsWith("FE")) {
        var re = Ye(e.substring(260, 300));
        var he = Ye(e.substring(300, 340));
        
        if (re === "config" || re === "") {
          re = (0, qt.GetCFG)("WID", "config");
        }
        
        if (he === "88888888" || he === "") {
          he = (0, qt.GetCFG)("WPD", "88888888");
        }
        
        a.setData({
          VIN : Ye(e.substring(100, 140)),   // Vehicle Identification Number
          SSID: Ye(e.substring(140, 180)),   // BLE SSID
          UPWD: Ye(e.substring(180, 220)),   // BLE Password
          LKV : Ye(e.substring(220, 260)),   // Touch Password
          WID : re,                          // Wireless ID (possibly from config)
          WPD : he                           // Wireless Password (possibly from config)
        });
      }
    } else if (e.startsWith("FA")) {
      var Ce = new DataView(t);
      s = _e(Ce, 1)
      c = _e(Ce, 5)
      f = _e(Ce, 9)
      C = _e(Ce, 13)
      l = _e(Ce, 17)
      d = _e(Ce, 21)
      a.setData({
        IV: C,
        IA: l,
        IW: d,
        OV: s,
        OA: c,
        OW: f
      })
    } else if (e.startsWith("FB")) {
      // Step 1: Read header fields using DataView
      var le = new DataView(t);
      F  = le.getUint8(1);
      S  = le.getUint8(2);
      h  = le.getUint8(3);
      g  = le.getUint8(4);
      T  = le.getUint8(5);
      E  = le.getUint8(6);
      w  = le.getUint8(7);
      b  = le.getUint8(8);
      Y  = le.getUint8(9);
      oe = le.getUint8(10) + (le.getUint8(11) << 8); // Combined 2 bytes
      se = le.getUint8(12);
      H  = le.getUint8(13);

      // Step 2: Read 4-byte float values starting from offset 31
      var de = 31;
      s  = _e(le, de);      de += 4;
      c  = _e(le, de);      de += 4;
      f  = _e(le, de);      de += 4;
      u  = _e(le, de);      de += 4;
      C  = _e(le, de);      de += 4;
      l  = _e(le, de);      de += 4;
      d  = _e(le, de);      de += 4;
      B  = _e(le, de);      de += 4;
      p  = _e(le, de);      de += 4;
      m  = _e(le, de);      de += 4;
      A  = _e(le, de);      de += 4;
      G  = _e(le, de);      de += 4;
      v  = _e(le, de);      de += 4;
      I  = _e(le, de);      de += 4;
      O  = _e(le, de);      de += 4;
      U  = _e(le, de);      de += 4;
      de += 4;

      // Step 3: Optional version-dependent parsing
      if (Jt >= 5.42) {
        ce = le.getUint8(14);
        fe = _e(le, de);
        de += 4;
      }

      // Step 4: Calculate derived values
      var Be = d ? Number(f / d * 100).toFixed(2) : "0.00";  // Efficiency
      var ge = d ? Number(d - f).toFixed(2) : "0.00";        // Energy difference

      // Step 5: Determine STR message (status text) based on flags
      if ((Fe === 0 || Se === 0) && Jt >= 5.42) {
        ie = k ? "Device unauthorized" : "设备未授权";
      } else if (F === 60) {
        ie = k ? "Simulate high voltage anomaly" : "模拟电池升压异常";
      } else if (h == "0") {
        if (Y === 0) {
          ie = k ? "Communication Abnormality" : "CAN通讯异常";
        } else if (Y === 39) {
          ie = k ? "Abnormal Insulation Test" : "绝缘测试未通过";
        } else if (Y < 6) {
          ie = k ? "Handshake message failed" : "握手信息未通过";
        } else if (Y < 9) {
          ie = k ? "Vehicle information not pass" : "车辆信息未通过";
        } else if (Y === 16) {
          ie = k ? "Charging station not ready" : "电压检测未通过";
        } else {
          ie = k ? "Other abnormal interruptions" : "其它异常中止";
        }
      } else {
        // Various charging states
        switch (F) {
          case 50: ie = k ? "Stop Charging" : "中 止 充 电"; break;
          case 51: ie = k ? "Charging Error" : "充 电 错 误"; break;
          case 52: ie = k ? "Seting Handshake Information" : "配置握手信息"; break;
          case 53: ie = k ? "Seting Charging Information" : "配置充电信息"; break;
          case 54: ie = k ? "Waiting Output Set Voltage" : "等待输出设定电压"; break;
          case 55: ie = k ? "Ready For Use" : "已准备就绪"; break;
          case 56: ie = k ? "Charging" : "正在充电中"; break;
          case 57: ie = k ? "Charging Completed" : "充电完成"; break;
          case 58: ie = k ? "Overtemperature shutdown" : `超温关机(${se})`; break;
          case 59: ie = k ? "Insulation testing" : "绝缘测试"; break;
          case 4:  ie = k ? "Charger Shutdown" : "充电器已关机"; break;
          case 0:  ie = k ? "Waiting For Battery Connection" : "等待接入电池"; break;
          case 1:  ie = k ? "Charging" : "正在充电中"; break;
          case 2:  ie = k ? "In The Second Stage Of Charging" : "第二段充电中"; break;
          case 5:  ie = k ? "Precharging" : "正在预充"; break;
          case 40: ie = k ? "Appointment Waiting" : "预约等待中"; break;
          case 3:  ie = k ? "Charging Completed" : "充电完成"; break;
          case 43: ie = k ? "Charging Completed(Turned Off)" : "充电完成(已关机)"; break;
          case 44: ie = k ? "Over Temperature Shutdown" : "超温保护关机"; break;
          default:
            ie = s === 0 ? (k ? "Charger Output Abnormality" : "充电器输出异常") : "";
            break;
        }
      }

      // Step 6: Calculate font size based on text length
      var Te = 0.65 * wx.getWindowInfo().windowWidth;
      var Ee = Math.max(15, Math.min(30, Te / (k ? ie.length : 1.8 * ie.length) * 1.5));

      // Step 7: Set all the final data values
      a.setData({
        Ah: p,
        Wh: m,
        AH: A,
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
        EEI: Be,
        EES: ge,
        YS: Me(oe),
        STR: ie,
        NFS: S,
        OL: h,
        OV: s,
        OA: c,
        OW: f,
        OT: u,
        FSize: Ee,
        KT1: H,
        Ti: Me(v),
        TI: Me(I),
        NSD: Me(O),
        UPS: ce,
        SOC: Number(U).toFixed(0),
        UPV: Number(fe).toFixed(0)
      });

    } else if (e.startsWith("01")) {
      s = Ze(e, 2), c = Ze(e, 10), f = Ze(e, 18), u = Ze(e, 26), F = qe(e, 34), S = qe(e, 36), h = qe(e, 38), 60 == F ? ie = k ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == h ? ie = k ? "Communication Abnormality" : "CAN通讯异常" : 50 == F ? ie = k ? "Stop Charging" : "中 止 充 电" : 51 == F ? ie = k ? "Charging Error" : "充 电 错 误" : 52 == F ? ie = k ? "Seting Handshake Information" : "配置握手信息" : 53 == F ? ie = k ? "Seting Charging Information" : "配置充电信息" : 54 == F ? ie = k ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == F ? ie = k ? "Ready For Use" : "已准备就绪" : 56 == F ? ie = k ? "Charging" : "正在充电中" : 57 == F ? ie = k ? "Charging Completed" : "充电完成" : 58 == F ? ie = k ? "Overtemperature shutdown" : "超温关机(" + se + ")" : 59 == F ? ie = k ? "Insulation testing" : "绝缘测试" : 0 == s ? ie = k ? "Charger Output Abnormality" : "充电器输出异常" : 4 == F ? ie = k ? "Charger Shutdown" : "充电器已关机" : 0 == F ? ie = k ? "Waiting For Battery Connection" : "等待接入电池" : 1 == F ? ie = k ? "Charging" : "正在充电中" : 2 == F ? ie = k ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == F ? ie = k ? "Precharging" : "正在预充" : 40 == F ? ie = k ? "Appointment Waiting" : "预约等待中" : 3 == F ? ie = k ? "Charging Completed" : "充电完成" : 43 == F ? ie = k ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == F && (ie = k ? "Over Temperature Shutdown" : "超温保护关机");
      var De = .65 * wx.getWindowInfo().windowWidth;
      Ee = Math.max(15, Math.min(30, De / (k ? ie.length : 1.8 * ie.length) * 1.5));
      a.setData({
        STR: ie,
        NFS: S,
        OL: h,
        OV: s,
        OA: c,
        OW: f,
        OT: u,
        FSize: Ee
      })
    } else if (e.startsWith("02")) {
      C = Ze(e, 2), l = Ze(e, 10), d = Ze(e, 18), B = Ze(e, 26), g = qe(e, 34), T = qe(e, 36), E = qe(e, 38);
      var pe = Number(f / d * 100).toFixed(2),
        me = Number(d - f).toFixed(2);
      a.setData({
        IV: C,
        IA: l,
        IW: d,
        IT: B,
        ST0: g,
        ST1: T,
        ST2: E,
        EEI: d ? pe : "0.00",
        EES: d ? me : "0.00"
      })
    } else if (e.startsWith("03")) p = Ze(e, 2), m = Ze(e, 10), A = Ze(e, 18), G = Ze(e, 26), w = qe(e, 34), b = qe(e, 36), a.setData({
      Ah: p,
      Wh: m,
      AH: A,
      WH: G,
      SWT: w,
      SMT: b
    });
    else if (e.startsWith("04")) oe = qe(e, 34), oe += qe(e, 36) << 8, se = qe(e, 38), a.setData({
      YS: Me(oe),
      Ti: Me(Ze(e, 2)),
      TI: Me(Ze(e, 10)),
      NSD: Me(Ze(e, 18)),
      SOC: Number(Ze(e, 26)).toFixed(0)
    });
    else if (e.startsWith("10")) x = [Ze(e, 2, 1), Ze(e, 10, 1)], N = [Ze(e, 18, 1), Ze(e, 26, 1)], W = qe(e, 34), M = qe(e, 36), V = qe(e, 38), 1 == W ? (tt = x[1], X = x[0]) : 2 == W && (tt = N[1], X = N[0]), 3 == W ? (tt = L[1], X = L[0]) : 4 == W && (tt = K[1], X = K[0]), a.setData({
      KS1: x,
      KS2: N,
      KSi: W,
      PON: M,
      KON: V,
      SV: X.toFixed(2),
      SA: tt.toFixed(2)
    });
    else if (e.startsWith("11")) L = [Ze(e, 2, 1), Ze(e, 10, 1)], K = [Ze(e, 18, 1), Ze(e, 26, 1)], k = qe(e, 36), $ = qe(e, 38), (0, qt.SetCFG)("UEN", k), 1 == W ? (tt = x[1], X = x[0]) : 2 == W && (tt = N[1], X = N[0]), 3 == W ? (tt = L[1], X = L[0]) : 4 == W && (tt = K[1], X = K[0]), a.setData({
      KS3: L,
      KS4: K,
      CAN: y,
      UEN: k,
      KRC: $,
      SV: X.toFixed(2),
      SA: tt.toFixed(2),
      KSi: W
    });
    else if (e.startsWith("12")) j = Ze(e, 2), z = Ze(e, 10), _ = Ze(e, 18), Z = Ze(e, 26), q = qe(e, 34), Q = qe(e, 36), J = qe(e, 38), a.setData({
      SV2: j,
      SA2: z,
      SMW: _,
      UMW: Z,
      WTi: q,
      ETi: Q,
      Sleep: J
    });
    else if (e.startsWith("13")) {
      et = Ze(e, 2), at = Ze(e, 10), nt = Ze(e, 18);
      Ze(e, 26);
      it = qe(e, 34), rt = qe(e, 36), ot = qe(e, 38), a.setData({
        TMW: et,
        UMT: at,
        OMT: nt,
        LEDK0: it,
        LEDK1: rt,
        LEDK2: ot
      })
    } else if (e.startsWith("14")) st = Ze(e, 2), ct = Ze(e, 10), ft = Ze(e, 18), ut = Ze(e, 26), Ft = qe(e, 34), St = qe(e, 36), ht = .1 * qe(e, 38), a.setData({
      LSA: st,
      HSA: ct,
      LSV: ft,
      HSV: ut,
      UFS: Ft,
      LFS: St,
      AFS: ht.toFixed(1)
    }), st = Number(st), ft = Number(ft), ct = Number(ct), ut = Number(ut);
    else if (e.startsWith("15")) Ct = .01 * Ze(e, 2), lt = .01 * Ze(e, 10), dt = .01 * Ze(e, 18), Bt = .01 * Ze(e, 26), gt = qe(e, 34), Tt = qe(e, 36), Et = qe(e, 38), a.setData({
      OVT: Ct.toFixed(4),
      OAT: lt.toFixed(4),
      OVD: dt.toFixed(4),
      OAD: Bt.toFixed(4),
      UHQ: gt,
      GIF: Tt,
      CKA2: Et
    });
    else if (e.startsWith("16")) Dt = Ze(e, 2), pt = Ze(e, 10), mt = Ze(e, 18), At = Ze(e, 26), Gt = qe(e, 34), wt = qe(e, 36), bt = .01 * qe(e, 38), a.setData({
      L2V: Dt,
      H2V: pt,
      USD: mt,
      NTC: Gt,
      DDT: wt,
      CLV: bt,
      SDU: At
    });
    else if (e.startsWith("17")) vt = .01 * Ze(e, 2), It = .01 * Ze(e, 10), Ot = Ze(e, 18), Ut = Ze(e, 26), xt = qe(e, 34), Nt = qe(e, 36), Wt = qe(e, 38), a.setData({
      O2D: It.toFixed(4),
      O2T: vt.toFixed(4),
      OVS: Ot,
      OAS: Ut,
      UEG: xt,
      UCN: Nt,
      MFS: Wt
    });
    else if (e.startsWith("18")) Mt = Ze(e, 2), Vt = Ze(e, 10), Pt = Ze(e, 18), Rt = Ze(e, 26), Lt = qe(e, 34), Kt = qe(e, 36), yt = qe(e, 38), a.setData({
      YCA: Mt,
      YCV: Vt,
      DOL: Lt,
      DST: Kt,
      LKS: yt,
      TCH: Rt,
      OST: Pt
    });
    else if (e.startsWith("19")) kt = Ze(e, 2), $t = Ze(e, 10), Yt = qe(e, 34), Ht = qe(e, 36), jt = qe(e, 38), a.setData({
      UI: Yt,
      MMA: kt,
      MMV: $t,
      RDY: Ht,
      SGK: jt
    });
    else if (e.startsWith("20")) {
      var Ae = Ye(e.substring(2, 40));
      a.setData({
        SSID: Ae
      })
    } else if (e.startsWith("21")) a.setData({
      UPWD: Ye(e.substring(2, 40))
    });
    else if (e.startsWith("22")) {
      var we = Ye(e.substring(2, 40)),
        be = (0, qt.GetCFG)("WID", we);
      we != be && Ve("AB00" + $e(we = unescape(encodeURIComponent(be)))), a.setData({
        WID: be
      })
    } else if (e.startsWith("23")) {
      var Oe = Ye(e.substring(2, 40)),
        Ue = (0, qt.GetCFG)("WPD", Oe);
      Oe != Ue && Ve("AB01" + $e(Oe = unescape(encodeURIComponent(Ue)))), a.setData({
        WPD: Ue
      })
    } else if (e.startsWith("24")) a.setData({
      LKV: Ye(e.substring(2, 40))
    });
    else if (e.startsWith("25")) a.setData({
      VIN: Ye(e.substring(2, 40))
    });
    else if (e.startsWith("50")) {
      0;
      var xe = qe(e, 2);
      3 & xe ? a.setData({
        E1A: "正常",
        E1S: 3 & xe
      }) : xe >> 2 & 3 ? a.setData({
        E1A: "人工",
        E1S: xe >> 2 & 3
      }) : xe >> 4 & 3 ? a.setData({
        E1A: "故障",
        E1S: xe >> 4 & 3
      }) : xe >> 6 & 3 && a.setData({
        E1A: "车辆",
        E1S: xe >> 6 & 3
      }), 3 & (xe = qe(e, 4)) ? a.setData({
        E2S: 3 & xe
      }) : xe >> 2 & 3 ? a.setData({
        E3S: xe >> 2 & 3
      }) : xe >> 4 & 3 ? a.setData({
        E4S: xe >> 4 & 3
      }) : xe >> 6 & 3 && a.setData({
        E5S: xe >> 6 & 3
      }), 3 & (xe = qe(e, 6)) ? a.setData({
        E6S: 3 & xe
      }) : xe >> 2 & 3 ? a.setData({
        E7S: xe >> 2 & 3
      }) : xe >> 4 & 3 ? a.setData({
        E8S: xe >> 4 & 3
      }) : xe >> 6 & 3 && a.setData({
        E9S: xe >> 6 & 3
      }), 3 & (xe = qe(e, 8)) ? a.setData({
        EAS: 3 & xe
      }) : xe >> 2 & 3 ? a.setData({
        EBS: xe >> 2 & 3
      }) : xe >> 4 & 3 && a.setData({
        ECS: xe >> 4 & 3
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
      var Ne = qe(e, 2);
      3 & Ne && a.setData({
        E4S: 3 & Ne
      }), 3 & (Ne = qe(e, 4)) && a.setData({
        E5S: 3 & Ne
      }), Ne >> 2 & 3 && a.setData({
        E6S: Ne >> 2 & 3
      }), 3 & (Ne = qe(e, 6)) && a.setData({
        E7S: 3 & Ne
      }), Ne >> 2 & 3 && a.setData({
        E8S: Ne >> 2 & 3
      }), Ne >> 4 & 3 && a.setData({
        E9S: Ne >> 4 & 3
      }), 3 & (Ne = qe(e, 8)) && a.setData({
        EAS: 3 & Ne
      }), Ne >> 2 & 3 && (Ne >> 2 & 3) < 3 && a.setData({
        EBS: Ne >> 2 & 3
      }), Ne >> 4 & 3 && (Ne >> 4 & 3) < 3 && a.setData({
        ECS: Ne >> 4 & 3
      })
    } else if (e.startsWith("40")) {
      ve = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"], Ie = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var We = qe(e, 2);
      128 & We && Qe("测试 模式"), 64 & We && Qe("负载 震荡"), 32 & We && Qe("输出 继电器"), 16 & We && Qe("放电 电路"), 8 & We && Qe("继电器 电路"), 4 & We && Qe("短路 锁死"), 2 & We && Qe("硬件 地址"), 1 & We && Qe("放电 电路"), 128 & (We = qe(e, 4)) && Qe("更换 地址"), 64 & We && Qe("地址 冲突"), 32 & We && Qe("均流 屏蔽"), 16 & We && Qe("通讯 异常"), 8 & We && Qe("电容 电压"), 4 & We && Qe("输出 过压"), 2 & We && Qe("输出 模式"), 1 & We && Qe("插座 异常"), 128 & (We = qe(e, 6)) && Qe("母线 电压"), 64 & We && Qe("母线 平衡"), 32 & We && Qe("输入 停电"), 16 & We && Qe("恒流 状态"), 8 & We && Qe("输出 短路"), 4 & We && Qe("内部 通讯"), 2 & We && Qe("效率 寻优"), 1 & We && Qe("均流 异常"), 128 & (We = qe(e, 8)) && Qe("PFC 故障"), 64 & We && Qe("输入 过压"), 32 & We && Qe("ID 重复"), 16 & We && Qe("严重 均流"), 8 & We && Qe("交流 缺相"), 4 & We && Qe("三项 平衡"), 2 & We && Qe("输入 欠压"), 1 & We && Qe("顺序 启机"), 128 & (We = qe(e, 10)) && Qe("通讯 质量"), 64 & We && Qe("自动 模式"), 32 & We && Qe("地址 重排"), 16 & We && Qe("内部 过温"), 4 & We && Qe("风机 异常"), 2 & We && Qe("模块 关机"), 1 & We && Qe("低温 保护"), 128 & (We = qe(e, 12)) && Qe("输出 欠压"), 64 & We && Qe("输出 过流"), 32 & We && Qe("存储 芯片"), 16 & We && Qe("风机 故障"), 8 & We && Qe("模块 保护"), 4 & We && Qe("模块 故障"), 2 & We && Qe("超温 保护"), 1 & We && Qe("过压 锁死");
      var Pe = [ve[0].split(" "), ve[1].split(" "), ve[2].split(" "), ve[3].split(" "), ve[4].split(" "), ve[5].split(" "), ve[6].split(" "), ve[7].split(" "), ve[8].split(" "), ve[9].split(" "), ve[10].split(" "), ve[11].split(" ")];
      a.setData({
        E1S: Ie[0],
        E1A: Pe[0][0],
        E1B: Pe[0][1],
        E2S: Ie[1],
        E2A: Pe[1][0],
        E2B: Pe[1][1],
        E3S: Ie[2],
        E3A: Pe[2][0],
        E3B: Pe[2][1],
        E4S: Ie[3],
        E4A: Pe[3][0],
        E4B: Pe[3][1],
        E5S: Ie[4],
        E5A: Pe[4][0],
        E5B: Pe[4][1],
        E6S: Ie[5],
        E6A: Pe[5][0],
        E6B: Pe[5][1],
        E7S: Ie[6],
        E7A: Pe[6][0],
        E7B: Pe[6][1],
        E8S: Ie[7],
        E8A: Pe[7][0],
        E8B: Pe[7][1],
        E9S: Ie[8],
        E9A: Pe[8][0],
        E9B: Pe[8][1],
        EAS: Ie[9],
        EAA: Pe[9][0],
        EAB: Pe[9][1],
        EBS: Ie[10],
        EBA: Pe[10][0],
        EBB: Pe[10][1],
        ECS: Ie[11],
        ECA: Pe[11][0],
        ECB: Pe[11][1]
      })
    } else if (e.startsWith("D1") || e.startsWith("D0")) {
      if (2 != ee) return;
      var Ke = e.substring(2, 10),
        ke = [e.substring(10, 12), e.substring(12, 14), e.substring(14, 16), e.substring(16, 18), e.substring(18, 20), e.substring(20, 22), e.substring(22, 24), e.substring(24, 26)],
        He = parseInt(Ke, 16);
      if (405206102 == He) 38, console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "握手信息");
      else if (402781270 == He) console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "车辆识别" + ke[0]);
      else if (485291094 == He) "11" == ke[0] ? console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "同意收包" + ke[6]) : "13" == ke[0] && console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "收包完成" + ke[6]);
      else if (403174486 == He) console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "同步时间" + ke[0] + ke[1]);
      else if (403240022 == He) {
        9;
        var je = parseInt(ke[1] + ke[0], 16),
          ze = parseInt(ke[3] + ke[2], 16),
          Je = parseInt(ke[5] + ke[4], 16),
          Xe = parseInt(ke[7] + ke[6], 16);
        console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "充电范围:电压" + ze + "-" + je + " 电流" + Xe + "-" + Je)
      } else if (269153366 == He) console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "准备就绪" + ke[0]);
      else if (403895382 == He) {
        var ta = parseInt(ke[1] + ke[0], 16),
          ea = parseInt(ke[3] + ke[2], 16),
          aa = parseInt(ke[5] + ke[4], 16);
        console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "输出信息:V" + ta + " A" + ea + " T" + aa)
      } else if (270201942 == He) 26, console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "中止充电");
      else if (136311894 == He) 31, console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "充电器错");
      else if (405231348 == He) {
        var na = parseInt(ke[1] + ke[0], 16);
        console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "绝缘信息:" + na)
      } else if (269047540 == He) console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "电池就绪:" + ke[0]);
      else if (403724020 == He) {
        var ia = .1 * parseInt(ke[1] + ke[0], 16),
          ra = .1 * parseInt(ke[3] + ke[2], 16);
        console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "需求信息:V" + ia + " A" + ra)
      } else if (485250804 == He) console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "请求多包:" + ke[6]);
      else if (485185268 == He) console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "多包数据");
      else if (403920628 == He) console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "车辆状态");
      else {
        var oa = 244 == (255 & He) ? "取电器" : "电桩";
        console.log(Ke, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], oa, "未知")
      }
    }
  },
  onLoad: function (n) {
    a = this, ne = 0, Le = 0, i = 0, y = 0, re = 0, ce = 0, fe = 0, te = Number(n.Test) || 0, ae = Number(n.GM) || 0, Xt = Number(n.CEV) || 0, re = Number(n.ODM) || 0, Ae = 0;
    var r = (0, qt.GetGIF)(1);
    r.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var o = RegExp.$2;
    (r = (0, qt.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var s = RegExp.$2;
    (r = (0, qt.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var c = RegExp.$2;
    (r = (0, qt.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var f = RegExp.$2;
    (r = (0, qt.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var u = RegExp.$2;
    k = (0, qt.GetCFG)("UEN"), ee = (0, qt.GetCFG)("DEBUG"), pe = (0, qt.GetCFG)("BGI", 0), me = (0, qt.GetCFG)("BGT", "80"), t = (0, qt.GetCFG)("WID", "config"), e = (0, qt.GetCFG)("WPD", "88888888"), a.setData({
      WID: t,
      WPD: e
    }), De[1] = (0, qt.GetCFG)("BGP1", "https://dingyue.ws.126.net/2022/0808/701db340g00rg9pym02h5d200cs00leg00it00vh.gif"), De[2] = (0, qt.GetCFG)("BGP2", "https://img2.baidu.com/it/u=2215745416,4118415336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422"), De[3] = (0, qt.GetCFG)("BGP3", "https://c-ssl.dtstatic.com/uploads/item/201912/08/20191208175320_skjmi.thumb.1000_0.jpg"), De[4] = (0, qt.GetCFG)("BGP4", "https://wx4.sinaimg.cn/mw690/9f2299eegy1hqwec2a3ncj21kw2dcx6p.jpg");
    var F = (0, qt.GetCFG)("ShowM");
    a.setData({
      GIF1: "data:image/gif;base64," + o,
      GIF2: "data:image/gif;base64," + s,
      GIF3: "data:image/gif;base64," + c,
      GIF4: "data:image/gif;base64," + f,
      GIF5: "data:image/gif;base64," + u,
      UEN: k,
      ShowM: F,
      RollV: "5.35(稳定版)",
      TestV: "5.42(测试一)",
      RoCEV: "5.40",
      UPDate: "5.41",
      APP: "1.27",
      GM: ae,
      ADD: Ae,
      CAN: Jt,
      CEV: Xt,
      BGI: pe,
      BGT: parseInt(me, 16),
      BGC: "#000000" + me,
      ODM: re,
      BGP: De[pe],
      BGP1: De[1],
      BGP2: De[2],
      BGP3: De[3],
      BGP4: De[4]
    }), te && (be[0] = "1", be[1] = "2", be[2] = "3", be[3] = "4", Xt ? this.MSG("", "EEA47210A4AE300E0" + 542..toString(16) + "43786A64777800000000") : this.MSG("", "EEA47210A4AE30010" + 542..toString(16) + "323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000021340000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), Qt.onBLEConnectionStateChange((function () {
      i || (i = 1, Ge.showModal({
        title: k ? "Bluetooth Disconnected" : "蓝牙信号丢失",
        content: k ? "Blue abnormal interruption is usually caused by shutdown, weak signal, or significant signal interference" : "通常是关机或信号弱或干扰大导致",
        confirmText: k ? "Yes I Kown" : "我知道了",
        showCancel: false,
        success: function (t) {
          Ge.navigateBack({
            delta: 0
          })
        }
      })), Ge.navigateBack({
        delta: 0
      })
    })), Qt.onBLECharacteristicValueChange1(this.MSG), ne = 3, Ve("A0" + $e("0000")), Ve("EE"), setTimeout((function () {
      3 == ne && (ne = 0, Ve("A0" + $e((0, qt.GetCFG)(D, "0000"))), console.log("Re login:1")), "0" == y && Ve("EE")
    }), 1500), setTimeout((function () {
      3 == ne && (ne = 0, Ve("A0" + $e((0, qt.GetCFG)(D, "0000"))), console.log("Re login:1")), "0" == y && Ve("EE")
    }), 2500)
  },
  onUnload: function () {
    i = 1, Qt.closeBLEConnection()
  },
  onShow: function (t) {
    i = 0
  },
  onHide: function () {
    i = 1
  }
});