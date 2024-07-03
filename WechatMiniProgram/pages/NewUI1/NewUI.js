var t, e, a, n, i, o, r, s, c, u, f, F, h, d, S, l, T, p, g, B, C, D, m, w, O, v, x, A, E, b, I, G, R, N, L, $, W, U, M, V, K, P, y, k, Y, H, j, q, Z, _, z, Q, J, X, tt, et, at, nt, it, ot, rt, st, ct, ut, ft, Ft, ht, dt, St, lt, Tt, pt, gt, Bt, Ct, Dt, mt, wt, Ot, vt, xt, At, Et = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  bt = require("../../@babel/runtime/helpers/asyncToGenerator"),
  It = require("../../6754D5619E166AAF0132BD66E613EFC4.js"),
  Gt = require("../../2E18F0939E166AAF487E98946523EFC4.js"),
  Rt = 0,
  Nt = 0,
  Lt = 0,
  $t = "设备连接成功",
  Wt = "1,27,30,欢迎",
  Ut = "1,57,30,使用",
  Mt = 0,
  Vt = "ff",
  Kt = "ff",
  Pt = "ff",
  yt = 0,
  kt = wx;

function Yt(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  kt.showModal({
    title: t,
    editable: !0,
    placeholderText: e,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      t.confirm && a(t.content)
    }
  })
}

function Ht(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  kt.showModal({
    title: N ? e : t,
    editable: !0,
    placeholderText: (N ? "Range:" : "范围:") + a + "-" + n,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(n) || e < Number(a) || !isFinite(e)) && 2 != Nt) return void(0, It.Toast)(N ? "Beyond the set range!" : "超出设置范围!");
        i(e)
      }
    }
  })
}

function jt(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  kt.showModal({
    title: N ? e : t,
    editable: !0,
    placeholderText: N ? n : a,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, It.Toast)(N ? "Input cannot be empty!" : "输入不能为空!");
        i(e)
      }
    }
  })
}

function qt(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  kt.showModal({
    title: N ? e : t,
    content: N ? n : a,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      t.confirm && i(t)
    }
  })
}

function Zt(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function _t(t) {
  var e = Math.floor(t / 3600),
    a = Math.floor(t % 3600 / 60),
    n = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(a).padStart(2, "0") + ":" + String(n).padStart(2, "0")
}

function zt(t) {
  return Qt.apply(this, arguments)
}

function Qt() {
  return (Qt = bt(Et().mark((function t(e) {
    return Et().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (0 == Xt) {
            t.next = 3;
            break
          }
          return (0, It.Toast)(N ? "There are unfinished sending tasks" : "有发送任务未完成"), t.abrupt("return");
        case 3:
          return e = e.substring(0, 40), t.next = 6, Gt.easySendData1(e, !0);
        case 6:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var Jt = [""],
  Xt = 0;

function te(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  0 == Xt ? kt.showModal({
    title: N ? "Confirm whether to send" : "确认是否发送",
    editable: !1,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (a) {
      if (a.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), Xt = 0, (Jt = [])[0] = "F1" + ie(RegExp.$1);
        for (var n = e ? RegExp.$2 : ae(RegExp.$2), i = 0; i < n.length; i += 240) Xt++, Jt[Xt] = "F2" + n.slice(i, i + 240);
        Jt[Jt.length] = "F3", Xt = 0, ee()
      }
    }
  }) : (0, It.Toast)(N ? "There are unfinished sending tasks" : "有发送任务未完成")
}

function ee(t) {
  var e = Jt[Xt];
  Gt.easySendData1(e, !0), (0, It.Toast)((N ? "Sending:" : "发送进度:") + (Xt / Jt.length * 100).toFixed(2) + "%"), Xt++
}

function ae(t) {
  if (!t) return t;
  var e, a, n, i, o, r, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    c = 0,
    u = 0,
    f = [];
  t += "";
  do {
    e = (r = s.indexOf(t.charAt(c++)) << 18 | s.indexOf(t.charAt(c++)) << 12 | (i = s.indexOf(t.charAt(c++))) << 6 | (o = s.indexOf(t.charAt(c++)))) >> 16 & 255, a = r >> 8 & 255, n = 255 & r, f[u++] = 64 === i ? e.toString(16).padStart(2, "0") : 64 === o ? e.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0") : e.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0")
  } while (c < t.length);
  return f.join("")
}

function ne() {
  0 == Mt ? t.setData({
    Cr0: "#" + Vt + Kt + Pt
  }) : 1 == Mt ? t.setData({
    Cr1: "#" + Vt + Kt + Pt
  }) : 2 == Mt ? t.setData({
    Cr2: "#" + Vt + Kt + Pt
  }) : 3 == Mt ? t.setData({
    Cr3: "#" + Vt + Kt + Pt
  }) : 4 == Mt ? t.setData({
    Cr4: "#" + Vt + Kt + Pt
  }) : 5 == Mt ? t.setData({
    Cr5: "#" + Vt + Kt + Pt
  }) : 6 == Mt ? t.setData({
    Cr6: "#" + Vt + Kt + Pt
  }) : 7 == Mt ? t.setData({
    Cr7: "#" + Vt + Kt + Pt
  }) : 8 == Mt && t.setData({
    Cr8: "#" + Vt + Kt + Pt
  })
}

function ie(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString(16).padStart(2, "0");
  return e && (a = a.padEnd(2 * e, "0")), a
}

function oe(t) {
  for (var e = "", a = 0, n = "", i = 0; i < t.length / 2; i++) {
    var o = t.substr(2 * i, 2),
      r = parseInt(o, 16);
    a && r ? (n += "%" + o, (a -= 1) || (e += decodeURIComponent(n), n = "")) : r >= 224 & r <= 239 ? (n += "%" + o, a = 2) : r && (e += String.fromCharCode(r))
  }
  return e
}

function re(t) {
  return Math.floor(100 * t).toString(16).padStart(8, "0")
}

function se(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function ce(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    n = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return a ? parseFloat(n) : n
}

function ue(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}
Page({
  data: {
    nbsp: "　",
    Cr0: "#ffffff",
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: "#ffffff",
    Cr4: "#60ffc8",
    Cr5: "#ffffff",
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: "#ffffff",
    Cri: 0,
    CR: 255,
    CG: 255,
    CB: 255,
    LOGO: "欢迎使用",
    LOGO1: "1,27,30,欢迎",
    LOGO2: "1,57,30,使用",
    BIMG: "",
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
    APP: "1.09",
    STR: "设备连接异常",
    CVer: 10,
    Panel: 1,
    CAN: 10,
    SCAN: "Unknown",
    Mode: "A",
    OVT: 1,
    OAT: 1,
    OVF: 1,
    OAF: 1,
    FAN: 50,
    ShowBar: 0,
    TMW: "75℃3000W",
    UPDate: 5.2
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
    }), wx.pageScrollTo({
      scrollTop: 0 != e ? 95 : 0,
      duration: 300
    })
  },
  BTOAT: function (t) {
    var e = this.data.ShowBar;
    this.setData({
      ShowBar: 1 != e ? 1 : -1
    }), wx.pageScrollTo({
      scrollTop: 1 != e ? 145 : 0,
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
  uset: function (t) {
    zt("FF"), (2 == Lt || Nt) && this.setData({
      Panel: 2 == Nt ? 2 : 3,
      ShowBar: 2 == Nt ? 0 : Rt < Number("5.33") ? 4 : 8,
      LOGO: N ? "Preview" : "预览"
    })
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, It.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    jt("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      zt("FA75" + ie(t)), zt("FF")
    }))
  },
  BTRST: function (t) {
    qt("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      zt("F601"), (0, It.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), kt.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    qt("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      zt("F001"), (0, It.Toast)(N ? "The device is restarting" : "设备正在重启!"), kt.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    qt("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      zt("AA01"), (0, It.Toast)(N ? "Data cleared to zero" : "数据已清零!"), kt.navigateBack({
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
    zt("AC00"), zt("FF")
  },
  DST2: function (t) {
    zt("AC01"), zt("FF")
  },
  DST3: function (t) {
    zt("AC02"), zt("FF")
  },
  DST4: function (t) {
    zt("AC03"), zt("FF")
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), Ht("设置输出最大功率", "Set maximum output power", "500", "10000", (function (t) {
      zt("F84E" + re(t)), zt("F84D" + re(t)), zt("FF")
    }))
  },
  BTLOGO0: function (e) {
    "预览" == t.data.LOGO || "Preview" == t.data.LOGO ? (kt.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: !0
    }), t.SetLOGO(Wt + "|" + Ut, t)) : "发送" != t.data.LOGO && "Send" != t.data.LOGO || te(n, 1), t.setData({
      ShowBar: 20,
      LOGO: N ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (e) {
    jt("设置第一行LOGO", "Set the first line logo", Wt, Wt, (function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Wt = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) Wt = "1,27,30," + RegExp.$1, Ut = "1,57,30," + RegExp.$2;
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, It.Toast)(N ? "Input format error" : "输入格式错误");
        Wt = "1,27,30," + RegExp.$1
      }
      t.setData({
        LOGO1: Wt,
        LOGO2: Ut,
        LOGO: N ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO2: function (e) {
    jt("设置第二行LOGO", "Set second line logo", Ut, Ut, (function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Ut = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) Wt = "1,27,30," + RegExp.$1, Ut = "1,57,30," + RegExp.$2;
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, It.Toast)(N ? "Input format error" : "输入格式错误");
        Ut = "1,57,30," + RegExp.$1
      }
      t.setData({
        LOGO1: Wt,
        LOGO2: Ut,
        LOGO: N ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO3: function (t) {
    zt("F9C0" + se(1 - Dt)), zt("FF")
  },
  SetLOGO: function (t, e) {
    kt.createSelectorQuery().select("#LOGO").fields({
      node: !0,
      size: !0
    }).exec((function (a) {
      var i = a[0].node,
        o = i.getContext("2d");
      i.width = 60, i.height = 60, o.fillStyle = "#000", o.scale(1, 1), o.fillRect(0, 0, 60, 60), o.fillStyle = "#fff";
      var r = t.split("|");
      "";
      for (var s = 0; s < r.length; s += 1) {
        var c = r[s].split(",");
        c[3];
        var u = c[0],
          f = c[1],
          F = c[2],
          h = c[3];
        o.font = "normal " + F + "px Kaiti", o.fillText(h, u, f)
      }
      var d = [0],
        S = -1;
      n = "DataStart=LOGO{";
      for (var l = 0; l < 60; l += 1) {
        for (var T = o.getImageData(0, l, 60, 1).data, p = 0; p < 60; p += 1) {
          p % 8 == 0 && (p && (n += d[S].toString(16).padStart(2, "0")), S += 1);
          var g = .299 * T[4 * p] + .587 * T[4 * p + 1] + .114 * T[4 * p + 2];
          d[S] = d[S] >> 1, d[S] = d[S] | (g < 100 ? 0 : 128)
        }
        n += (d[S] >> 4).toString(16).padStart(2, "0")
      }
      n += "}DataEnd", kt.hideToast(), e.setData({
        LOGO: N ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    zt("F962" + se(1 - St)), zt("FF")
  },
  BTCAN1: function (t) {
    qt("确认是否切换为华为", "Switch to Huawei", "将会清除所有设置", "All settings will be cleared", (function (t) {
      zt("FC530101"), (0, It.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), kt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN2: function (t) {
    qt("确认是否切换为英可瑞", "Switch to Increase", "将会清除所有设置", "All settings will be cleared", (function (t) {
      zt("FC530201"), (0, It.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), kt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN4: function (t) {
    qt("确认是否切换为中兴3000", "Switch to ZTE3000", "将会清除所有设置", "All settings will be cleared", (function (t) {
      zt("FC530401"), (0, It.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), kt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN8: function (t) {
    qt("确认是否切换为英飞源", "Switch to Infy", "将会清除所有设置", "All settings will be cleared", (function (t) {
      zt("FC530801"), (0, It.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), kt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN16: function (t) {
    qt("确认是否切换为EPS6020", "Switch to EPS6020", "将会清除所有设置", "All settings will be cleared", (function (t) {
      zt("FC531001"), (0, It.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), kt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN32: function (t) {
    qt("确认是否切换为中兴4875", "Switch to ZTE4875", "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == Nt) {
        for (var e = parseInt(g, 16), a = e.toString(), n = 0, i = 0; i < a.length; i++) n += a.charCodeAt(i);
        zt("C83F" + Math.floor(Math.floor(e / 611) * n).toString(16).slice(-6)), zt("FC532001"), zt("FF")
      } else zt("FC532001"), (0, It.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), kt.navigateBack({
        delta: 0
      })
    }))
  },
  BTLEDK2: function (t) {
    Ht("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      zt("F968" + se(t)), zt("FF")
    }))
  },
  BTLEDK1: function (t) {
    Ht("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      zt("F969" + se(t)), zt("FF")
    }))
  },
  BTLEDKS1: function (t) {
    Ht("设置息屏时间", "Set screen rest time", "5", "255", (function (t) {
      zt("F96D" + se(t)), zt("FF")
    }))
  },
  BTLEDKS2: function (t) {
    Ht("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      zt("F96A" + se(t)), zt("FF")
    }))
  },
  BTStart1: function (t) {
    Ht("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      zt("F96B" + se(t)), zt("FF")
    }))
  },
  BTStart2: function (t) {
    zt("F96C" + se(1 - K)), zt("FF")
  },
  BTGIF1: function (t) {
    zt("F96F" + se(1 - ct)), zt("FF")
  },
  BT_GIF1: function (t) {
    te((0, It.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    te((0, It.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    te((0, It.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    te((0, It.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    te((0, It.GetGIF)(5))
  },
  BTCr1: function (t) {
    zt("F53000" + Zt(this.data.Cr0) + "0000f01c"), zt("F53100" + Zt(this.data.Cr1) + "00209F26"), zt("F53200" + Zt(this.data.Cr2) + "00479F26"), zt("F53300" + Zt(this.data.Cr3) + "006e9F26"), zt("F53400" + Zt(this.data.Cr4) + "00969F3e"), zt("F53500" + Zt(this.data.Cr5) + "A3204d4d"), zt("F53600" + Zt(this.data.Cr6) + "50d64f1A"), zt("F53700" + Zt(this.data.Cr7) + "00d64f1A"), zt("F53801" + Zt(this.data.Cr8) + "A3774d68")
  },
  CK0: function (t) {
    Mt = 0, this.data.Cr0.match(/#(..)(..)(..)/), Vt = RegExp.$1, Kt = RegExp.$2, Pt = RegExp.$3, this.setData({
      CR: parseInt(Vt, 16),
      CG: parseInt(Kt, 16),
      CB: parseInt(Pt, 16)
    })
  },
  CK1: function (t) {
    Mt = 1, this.data.Cr1.match(/#(..)(..)(..)/), Vt = RegExp.$1, Kt = RegExp.$2, Pt = RegExp.$3, this.setData({
      CR: parseInt(Vt, 16),
      CG: parseInt(Kt, 16),
      CB: parseInt(Pt, 16)
    })
  },
  CK2: function (t) {
    Mt = 2, this.data.Cr2.match(/#(..)(..)(..)/), Vt = RegExp.$1, Kt = RegExp.$2, Pt = RegExp.$3, this.setData({
      CR: parseInt(Vt, 16),
      CG: parseInt(Kt, 16),
      CB: parseInt(Pt, 16)
    })
  },
  CK3: function (t) {
    Mt = 3, this.data.Cr3.match(/#(..)(..)(..)/), Vt = RegExp.$1, Kt = RegExp.$2, Pt = RegExp.$3, this.setData({
      CR: parseInt(Vt, 16),
      CG: parseInt(Kt, 16),
      CB: parseInt(Pt, 16)
    })
  },
  CK4: function (t) {
    Mt = 4, this.data.Cr4.match(/#(..)(..)(..)/), Vt = RegExp.$1, Kt = RegExp.$2, Pt = RegExp.$3, this.setData({
      CR: parseInt(Vt, 16),
      CG: parseInt(Kt, 16),
      CB: parseInt(Pt, 16)
    })
  },
  CK5: function (t) {
    Mt = 5, this.data.Cr5.match(/#(..)(..)(..)/), Vt = RegExp.$1, Kt = RegExp.$2, Pt = RegExp.$3, this.setData({
      CR: parseInt(Vt, 16),
      CG: parseInt(Kt, 16),
      CB: parseInt(Pt, 16)
    })
  },
  CK6: function (t) {
    Mt = 6, this.data.Cr6.match(/#(..)(..)(..)/), Vt = RegExp.$1, Kt = RegExp.$2, Pt = RegExp.$3, this.setData({
      CR: parseInt(Vt, 16),
      CG: parseInt(Kt, 16),
      CB: parseInt(Pt, 16)
    })
  },
  CK7: function (t) {
    Mt = 7, this.data.Cr7.match(/#(..)(..)(..)/), Vt = RegExp.$1, Kt = RegExp.$2, Pt = RegExp.$3, this.setData({
      CR: parseInt(Vt, 16),
      CG: parseInt(Kt, 16),
      CB: parseInt(Pt, 16)
    })
  },
  CK8: function (t) {
    Mt = 8, this.data.Cr8.match(/#(..)(..)(..)/), Vt = RegExp.$1, Kt = RegExp.$2, Pt = RegExp.$3, this.setData({
      CR: parseInt(Vt, 16),
      CG: parseInt(Kt, 16),
      CB: parseInt(Pt, 16)
    })
  },
  CRC: function (t) {
    Vt = t.detail.value.toString(16).padStart(2, "0"), ne()
  },
  CGC: function (t) {
    Kt = t.detail.value.toString(16).padStart(2, "0"), ne()
  },
  CBC: function (t) {
    Pt = t.detail.value.toString(16).padStart(2, "0"), ne()
  },
  BTCKA2: function (t) {
    zt("F972" + se(1 - ut)), zt("FF")
  },
  BTEN1: function (t) {
    (0, It.SetCFG)("UEN", 1 - N), zt("F970" + se(1 - N)), zt("FF")
  },
  BTBLE1: function (t) {
    jt("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      zt("FA73" + ie(t = unescape(encodeURIComponent(t)))), zt("FF")
    }))
  },
  BTBLE2: function (t) {
    jt("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      zt("FA74" + ie(t)), zt("FF")
    }))
  },
  BTKEY1: function (t) {
    zt("F967" + se(1 - b)), zt("FF")
  },
  BTKEY2: function (t) {
    zt("F966" + se(1 - L)), zt("FF")
  },
  BTDDT1: function (t) {
    zt("F96E" + se(lt >= 3 ? 0 : lt + 1)), zt("FF")
  },
  BTUP6: function (t) {
    jt("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      zt("AB00" + ie(t = unescape(encodeURIComponent(t)))), zt("FF")
    }))
  },
  BTUP7: function (t) {
    jt("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      zt("AB01" + ie(t = unescape(encodeURIComponent(t)))), zt("FF")
    }))
  },
  BTUP1: function (t) {
    yt || this.data.CVer >= this.data.UPDate && !Nt || kt.showModal({
      title: N ? "Start Upgrade" : "开始升级",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return zt("A700000000" + ie("NewUI")), void(0, It.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP8: function (t) {
    kt.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    kt.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    kt.setClipboardData({
      data: "设备ID:" + g
    })
  },
  BTUP0: function (t) {
    kt.showModal({
      title: N ? "Firmware rollback" : "固件回退",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return zt("A7" + ie("9", 4) + ie("NewUI")), void(0, It.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP9: function (t) {
    kt.showModal({
      title: N ? "Write Test Firmware" : "刷入测试固件",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return zt("A700000000" + ie("NewTest")), void(0, It.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUFS: function (t) {
    Ht("设置温度加速值", "Set temperature acceleration value", "3", "15", (function (t) {
      zt("F963" + se(t)), zt("FF")
    }))
  },
  BTAFS: function (t) {
    Ht("设置电流加速值", "Set current acceleration value", "0.1", "2.0", (function (t) {
      zt("F964" + se(10 * t)), zt("FF")
    }))
  },
  BTLFS: function (t) {
    Ht("设置初始风速值", "Set initial wind speed value", "30", "150", (function (t) {
      zt("F965" + se(t)), zt("FF")
    }))
  },
  BTMFS: function (t) {
    Ht("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      zt("F9C5" + se(t)), zt("FF")
    }))
  },
  BTTMC: function (t) {
    Ht("设置超温限制温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      zt("F84A" + re(t)), zt("FF")
    }))
  },
  BTTMC1: function (t) {
    Ht("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      zt("F84B" + re(t)), zt("FF")
    }))
  },
  BTTMW: function (t) {
    Ht("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      zt("F84C" + re(t)), zt("FF")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), wx.pageScrollTo({
      scrollTop: 95,
      duration: 300
    }), i < 10 || o > 0 ? (0, It.Toast)(N ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (zt("C1"), zt("FF"), Ht("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / i).toFixed(4),
        a = Number(t / y).toFixed(4);
      zt("C3" + re(100 * a) + re(100 * e)), 2 == R ? (zt("F876" + re(20 * a)), zt("F877" + re(100 * a))) : 1 == R ? (zt("F876" + re(41 * a)), zt("F877" + re(58.5 * a))) : 4 == R ? (zt("F876" + re(41 * a)), zt("F877" + re(59 * a))) : 16 == R ? (zt("F876" + re(44 * a)), zt("F877" + re(61 * a))) : 32 == R && (zt("F876" + re(41.2 * a)), zt("F877" + re(59.4 * a))), zt("FF"), zt("A80" + A + re(50 * a) + re(k)), zt("FF")
    })))
  },
  BTOVT1: function (t) {
    Ht("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      zt("FB47" + re(100 * t)), zt("FF")
    }))
  },
  BTOVTU: function (t) {
    zt("FB47" + re(100 * (nt + .003))), zt("FF")
  },
  BTOVTD: function (t) {
    zt("FB47" + re(100 * (nt - .003))), zt("FF")
  },
  BTOVD1: function (t) {
    Ht("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      zt("FB46" + re(100 * t)), zt("FF")
    }))
  },
  BTOVDU: function (t) {
    zt("FB46" + re(100 * (ot + .003))), zt("FF")
  },
  BTOVDD: function (t) {
    zt("FB46" + re(100 * (ot - .003))), zt("FF")
  },
  BTOVS: function (t) {
    Yt(N ? "Set voltage range" : "设置电压范围", (N ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (zt("F876" + re(Number(RegExp.$1))), zt("F877" + re(Number(RegExp.$2))), zt("FF")) : (0, It.Toast)(N ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    Ht("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      zt("F8F3" + re(t)), zt("FF")
    }))
  },
  BTOVT3: function (t) {
    i < 10 || o > 0 ? (0, It.Toast)(N ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (zt("C2"), zt("FF"), Ht("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / i).toFixed(4);
      zt("C4" + re(100 * Number(t / y).toFixed(4)) + re(100 * e)), zt("FF")
    })))
  },
  BTOVT2: function (t) {
    Ht("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      zt("FBF2" + re(100 * t)), zt("FF")
    }))
  },
  BTO2TU: function (t) {
    zt("FBF2" + re(100 * (pt + .003))), zt("FF")
  },
  BTO2TD: function (t) {
    zt("FBF2" + re(100 * (pt - .003))), zt("FF")
  },
  BTOVD2: function (t) {
    Ht("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      zt("FBF1" + re(100 * t)), zt("FF")
    }))
  },
  BTO2DU: function (t) {
    zt("FBF1" + re(100 * (gt + .003))), zt("FF")
  },
  BTO2DD: function (t) {
    zt("FBF1" + re(100 * (gt - .003))), zt("FF")
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 145,
      duration: 300
    }), o < 5 || y - i < .2 ? (0, It.Toast)(N ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (zt("C0"), zt("FF"), Ht("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / o).toFixed(4);
      zt("C5" + re(100 * Number(t / k).toFixed(4)) + re(100 * e)), zt("FF")
    })))
  },
  BTOAT1: function (t) {
    Ht("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      zt("FB45" + re(100 * t)), zt("FF")
    }))
  },
  BTOAT2: function (t) {
    zt("FB45" + re(100 * (it - .003))), zt("FF")
  },
  BTOAT3: function (t) {
    zt("FB45" + re(100 * (it + .003))), zt("FF")
  },
  BTOAS1: function (t) {
    Ht("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      zt("F8F4" + re(t)), zt("FF")
    }))
  },
  BTCLV: function (t) {
    Ht("设置最小电流过滤", "Set minimum current filtering", "0.00", "2.00", (function (t) {
      zt("F848" + re(t)), zt("FF")
    }))
  },
  BTOAD1: function (t) {
    Ht("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      zt("FB44" + re(100 * t)), zt("FF")
    }))
  },
  BTOAD2: function (t) {
    zt("FB44" + re(100 * (rt - .003))), zt("FF")
  },
  BTOAD3: function (t) {
    zt("FB44" + re(100 * (rt + .003))), zt("FF")
  },
  BTOAS: function (t) {
    Yt(N ? "Set current range" : "设置电流范围", (N ? "Now:" : "当前范围:") + z + "-" + Q, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (zt("F878" + re(Number(RegExp.$1))), zt("F879" + re(Number(RegExp.$2))), zt("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (zt("F879" + re(t)), zt("FF")) : (0, It.Toast)(N ? "Input format error" : "输入格式错误!"))
    }))
  },
  pwrbt: function (t) {
    zt("A6" + se(1 - E)), zt("FF")
  },
  owbt: function (t) {
    Ht("设置输出功率限制", "Set output power limit", "300", U, (function (t) {
      zt("F84D" + re(t)), zt("FF")
    }))
  },
  tibt: function (t) {
    Ht("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      zt("A9" + function (t) {
        return Math.floor(t).toString(16).padStart(4, "0")
      }(t)), zt("FF")
    }))
  },
  BTYC1: function (t) {
    Ht("设置预充电压", "Set pre charge voltage", "0", X, (function (t) {
      zt("F8F6" + re(t)), zt("FF")
    }))
  },
  BTYC2: function (t) {
    Ht("设置预充电流", "Set pre charge current", z, Q, (function (t) {
      zt("F8F5" + re(t)), zt("FF")
    }))
  },
  ks1bt: function (t) {
    var e = v[0],
      a = v[1] > Q ? Q : v[1];
    e > X || e < J ? Ht("设置输出电压", "Set output voltage", J, X, (function (t) {
      zt("A80" + (A = 1) + re(t) + re(a)), zt("FF")
    })) : (zt("A80" + (A = 1) + re(e) + re(a)), zt("FF"))
  },
  ks2bt: function (t) {
    var e = x[0],
      a = x[1] > Q ? Q : x[1];
    e > X || e < J ? Ht("设置输出电压", "Set output voltage", J, X, (function (t) {
      zt("A80" + (A = 2) + re(t) + re(a)), zt("FF")
    })) : (zt("A80" + (A = 2) + re(e) + re(a)), zt("FF"))
  },
  ks3bt: function (t) {
    var e = I[0],
      a = I[1] > Q ? Q : I[1];
    e > X || e < J ? Ht("设置输出电压", "Set output voltage", J, X, (function (t) {
      zt("A80" + (A = 3) + re(t) + re(a)), zt("FF")
    })) : (zt("A80" + (A = 3) + re(e) + re(a)), zt("FF"))
  },
  ks4bt: function (t) {
    var e = G[0],
      a = G[1] > Q ? Q : G[1];
    e > X || e < J ? Ht("设置输出电压", "Set output voltage", J, X, (function (t) {
      zt("A80" + (A = 4) + re(t) + re(a)), zt("FF")
    })) : (zt("A80" + (A = 4) + re(e) + re(a)), zt("FF"))
  },
  hqbt1: function (t) {
    Ht("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      zt("F961" + se(t)), zt("FF")
    }))
  },
  hqbt0: function (t) {
    zt("F961" + se(0 == st ? 10 : 0)), zt("FF")
  },
  nvbt: function (t) {
    Yt(N ? "Set Output Voltage" : "设置输出电压", (N ? "Range:" : "范围:") + J + "-" + X, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) zt(t.substr(2, 4) + re(t.substr(6))), zt("FF");
        else if (t.startsWith("FFC8")) zt(t.substr(2, 4) + t.substr(6)), zt("FF");
      else {
        if (zt("A1" + ie(t)), (t = parseFloat(t)) > X || t < J || !isFinite(t)) return void(0, It.Toast)(N ? "Beyond the set range!" : "超出设置范围!");
        zt("A80" + A + re(t) + re(k)), zt("FF")
      } else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && te(e)
        }
      })
    }))
  },
  nabt: function (t) {
    Ht("设置输出电流", "Set output current", z, Q, (function (t) {
      zt("A80" + A + re(y) + re(t)), zt("FF")
    }))
  },
  sa2bt2: function (t) {
    Ht("设置二段电流", "Set second stage current", z, Q, (function (t) {
      zt("F857" + re(t)), zt("FF")
    }))
  },
  sa2bt1: function (t) {
    Ht("设置二段电压", "Set second stage voltage", J, X, (function (t) {
      zt("F858" + re(t)), zt("FF")
    }))
  },
  sa2bt0: function (t) {
    zt("F858" + (0 == W ? re(y - 3) : "00000000")), zt("F857" + (0 == W ? re(10) : "00000000")), zt("FF")
  },
  sdbt1: function (t) {
    Ht("设置延时时间(分钟)", "Set delay time (minutes)", 1, 600, (function (t) {
      zt("F859" + re(t)), zt("FF")
    }))
  },
  sdbt2: function (t) {
    Ht("设置关机电流", "SSet startup delay current", "0.00", "2.00", (function (t) {
      zt("F8F0" + re(t)), zt("FF")
    }))
  },
  sdbt0: function (t) {
    zt("F859" + (0 == ht ? re(30) : "00000000")), zt("FF")
  },
  onLoad: function (n) {
    var Et = this;
    t = this, Lt = 0, Xt = 0, Nt = Number(n.GM), yt = 0;
    var bt = (0, It.GetGIF)(1);
    bt.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Wt = RegExp.$2;
    (bt = (0, It.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Ut = RegExp.$2;
    (bt = (0, It.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Mt = RegExp.$2;
    (bt = (0, It.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Vt = RegExp.$2;
    (bt = (0, It.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Kt = RegExp.$2;
    N = (0, It.GetCFG)("UEN");
    var Pt = (0, It.GetCFG)("ShowM");
    t.setData({
      GIF1: "data:image/gif;base64," + Wt,
      GIF2: "data:image/gif;base64," + Ut,
      GIF3: "data:image/gif;base64," + Mt,
      GIF4: "data:image/gif;base64," + Vt,
      GIF5: "data:image/gif;base64," + Kt,
      UEN: N,
      ShowM: Pt,
      RollV: 5.3,
      TestV: "5.33测试一",
      UPDate: "5.33",
      APP: "1.17",
      GM: Nt,
      ADD: yt,
      CAN: Rt,
      BackIMG: (0, It.GetCFG)("BIMG", "/img/bc1.gif")
    }), "5.33测试一" != (0, It.GetCFG)("TVer") && Nt && ((0, It.SetCFG)("TVer", "5.33测试一"), wx.showModal({
      title: "有新测试固件:5.33测试一",
      editable: !1,
      confirmText: "知道了",
      showCancel: !1
    })), Gt.onBLEConnectionStateChange((function () {
      kt.navigateBack({
        delta: 0
      })
    })), Gt.onBLECharacteristicValueChange1((function (n, bt) {
      if (!a) {
        (0, It.print)("MSG:", bt);
        var Gt = bt;
        if ("EE" == Gt.substring(0, 2)) {
          e = oe(Gt.substring(20, 40)), Rt = .01 * parseInt(Gt.substring(16, 20), 16), R = 32 == (R = 16 == (R = 8 == (R = 4 == (R = 2 == (R = 1 == (R = ue(Gt, 14)) ? "Huawei" : R) ? "Increase" : R) ? "ZTE3000" : R) ? "INFY" : R) ? "EPS6020" : R) ? "ZTE4875" : R, g = "0x" + Gt.substring(2, 14), e.startsWith("Cxjdwx") && (e = "未激活"), t.setData({
            CVer: Rt.toFixed(2),
            SCAN: R,
            ID: g,
            ACT: e
          });
          var Wt = (0, It.GetCFG)(g);
          Nt && (Wt = (Number(g) + 19880914).toString(16).substring(4, 8)), Lt || zt("A0" + ie(Wt))
        } else if (Gt.startsWith("A101")) t.setData({
          ShowBar: 0,
          Panel: 2,
          LOGO: N ? "Preview" : "预览"
        });
        else if (Gt.startsWith("A001")) {
          if (Lt = 2, ("Cxjdwx" == e || "未激活" == e) && !Nt) {
            var Ut = new Date;
            zt("FD48" + ie(Ut.getFullYear() + "-" + (Ut.getMonth() + 1) + "-" + Ut.getDate()))
          }
          Rt <= 5.28 && zt("FF")
        } else if (Gt.startsWith("A000")) {
          if (Lt) return;
          Lt = 1, kt.showModal({
            title: N ? "Enter Bluetooth password" : "输入蓝牙密码",
            editable: !0,
            placeholderText: "ID:" + g,
            confirmText: N ? "YES" : "确定",
            cancelText: N ? "Observer" : "我只看看",
            success: function (t) {
              t.confirm && ((0, It.SetCFG)(g, t.content), zt("A0" + ie(t.content)), Lt = 0)
            }
          })
        } else if (Gt.startsWith("F101")) ee();
        else if (Gt.startsWith("F201")) ee();
        else if (Gt.startsWith("F301")) Xt = 0, Jt = [], (0, It.Toast)(N ? "Send End!" : "发送完成!");
        else if (Gt.startsWith("01")) {
          i = ce(Gt, 2)
          o = ce(Gt, 10)
          r = ce(Gt, 18)
          s = ce(Gt, 26)
          c = ue(Gt, 34)
          u = ue(Gt, 36)
          f = ue(Gt, 38)
          Et.data.UEN ? "0" == f ? $t = "Communication Abnormality" : 0 == i ? $t = "Charger Output Abnormality" : 4 == c ? $t = "Charger Shutdown" : 0 == c ? $t = "Waiting For Battery Connection" : 1 == c ? $t = "Charging" : 2 == c ? $t = "In The Second Stage Of Charging" : 5 == c ? $t = "Precharging" : 40 == c ? $t = "Appointment Waiting" : 3 == c ? $t = "Charging Completed" : 43 == c && ($t = "Charging Completed(Turned Off)") : "0" == f ? $t = "CAN通讯异常" : 0 == i ? $t = "充电器输出异常" : 4 == c ? $t = "充电器已关机" : 0 == c ? $t = "等待接入电池" : 1 == c ? $t = "正在充电中" : 5 == c ? $t = "正在预充" : 2 == c ? $t = "第二段充电中" : 40 == c ? $t = "预约等待中" : 3 == c ? $t = "充电完成" : 43 == c && ($t = "充电完成(已关机)")
          t.setData({
            STR: $t,
            NFS: u,
            OL: f,
            OV: i,
            OA: o,
            OW: r,
            OT: s
          });
        } else if (Gt.startsWith("02")) {
          F = ce(Gt, 2)
          h = ce(Gt, 10)
          d = ce(Gt, 18)
          S = ce(Gt, 26)
          l = ue(Gt, 34)
          T = ue(Gt, 36)
          p = ue(Gt, 38);
          var Mt = Number(r / d * 100).toFixed(2),
            Vt = Number(d - r).toFixed(2);
          t.setData({
            IV: F,
            IA: h,
            IW: d,
            IT: S,
            ST0: l,
            ST1: T,
            ST2: p,
            EEI: d ? Mt : "0.00",
            EES: d ? Vt : "0.00"
          })
        } else if (Gt.startsWith("03")) {
          B = ce(Gt, 2)
          C = ce(Gt, 10)
          D = ce(Gt, 18)
          m = ce(Gt, 26)
          w = ue(Gt, 34)
          O = ue(Gt, 36)
          t.setData({
            Ah: B,
            Wh: C,
            AH: D,
            WH: m,
            SWT: w,
            SMT: O
          });
        } else if (Gt.startsWith("04")) {
          t.setData({
            Ti: _t(ce(Gt, 2)),
            TI: _t(ce(Gt, 10)),
            NSD: _t(ce(Gt, 18)),
            SOC: Number(ce(Gt, 26)).toFixed(0)
          });
        } else if (Gt.startsWith("10")) {
          v = [ce(Gt, 2, 1), ce(Gt, 10, 1)]
          x = [ce(Gt, 18, 1), ce(Gt, 26, 1)]
          A = ue(Gt, 34) // solt
          E = ue(Gt, 36) // power_on
          b = ue(Gt, 38) // enable_custom_background
          1 == A ? (k = v[1], y = v[0]) : 2 == A && (k = x[1], y = x[0])
          3 == A ? (k = I[1], y = I[0]) : 4 == A && (k = G[1], y = G[0])
          t.setData({
            KS1: v,
            KS2: x,
            KSi: A,
            PON: E,
            KON: b,
            SV: y.toFixed(2),
            SA: k.toFixed(2)
          });
        } else if (Gt.startsWith("11")) {
          I = [ce(Gt, 2, 1), ce(Gt, 10, 1)]
          G = [ce(Gt, 18, 1), ce(Gt, 26, 1)]
          R = ue(Gt, 34)
          N = ue(Gt, 36)
          L = ue(Gt, 38)
          It.SetCFG("UEN", N)
          1 == A ? (k = v[1], y = v[0]) : 2 == A && (k = x[1], y = x[0])
          3 == A ? (k = I[1], y = I[0]) : 4 == A && (k = G[1], y = G[0])
          t.setData({
            KS3: I,
            KS4: G,
            CAN: R,
            UEN: N,
            KRC: L,
            SV: y.toFixed(2),
            SA: k.toFixed(2)
          });
        } else if (Gt.startsWith("12")) $ = ce(Gt, 2), W = ce(Gt, 10), U = ce(Gt, 18), M = ce(Gt, 26), V = ue(Gt, 34), K = ue(Gt, 36), P = ue(Gt, 38), t.setData({
          SV2: $,
          SA2: W,
          SMW: U,
          UMW: M,
          WTi: V,
          ETi: K,
          Sleep: P
        });
        else if (Gt.startsWith("13")) Y = ce(Gt, 2), H = ce(Gt, 10), j = ce(Gt, 18), q = ue(Gt, 34), Z = ue(Gt, 36), _ = ue(Gt, 38), t.setData({
          TMW: Y,
          UMT: H,
          OMT: j,
          LEDK0: q,
          LEDK1: Z,
          LEDK2: _
        });
        else if (Gt.startsWith("14")) z = ce(Gt, 2), Q = ce(Gt, 10), J = ce(Gt, 18), X = ce(Gt, 26), tt = ue(Gt, 34), et = ue(Gt, 36), at = .1 * ue(Gt, 38), t.setData({
          LSA: z,
          HSA: Q,
          LSV: J,
          HSV: X,
          UFS: tt,
          LFS: et,
          AFS: at.toFixed(1)
        }), z = Number(z), J = Number(J), Q = Number(Q), X = Number(X);
        else if (Gt.startsWith("15")) nt = .01 * ce(Gt, 2), it = .01 * ce(Gt, 10), ot = .01 * ce(Gt, 18), rt = .01 * ce(Gt, 26), st = ue(Gt, 34), ct = ue(Gt, 36), ut = ue(Gt, 38), t.setData({
          OVT: nt.toFixed(4),
          OAT: it.toFixed(4),
          OVD: ot.toFixed(4),
          OAD: rt.toFixed(4),
          UHQ: st,
          GIF: ct,
          CKA2: ut
        });
        else if (Gt.startsWith("16")) ft = ce(Gt, 2), Ft = ce(Gt, 10), ht = ce(Gt, 18), dt = ce(Gt, 26), St = ue(Gt, 34), lt = ue(Gt, 36), Tt = .01 * ue(Gt, 38), t.setData({
          L2V: ft,
          H2V: Ft,
          USD: ht,
          NTC: St,
          DDT: lt,
          CLV: Tt,
          SDU: dt
        });
        else if (Gt.startsWith("17")) pt = .01 * ce(Gt, 2), gt = .01 * ce(Gt, 10), Bt = ce(Gt, 18), Ct = ce(Gt, 26), Dt = ue(Gt, 34), mt = ue(Gt, 36), wt = ue(Gt, 38), t.setData({
          O2D: gt.toFixed(4),
          O2T: pt.toFixed(4),
          OVS: Bt,
          OAS: Ct,
          UEG: Dt,
          UCN: mt,
          MFS: wt
        });
        else if (Gt.startsWith("18")) Ot = ce(Gt, 2), vt = ce(Gt, 10), xt = ue(Gt, 34), At = ue(Gt, 36), t.setData({
          YCA: Ot,
          YCV: vt,
          DOL: xt,
          DST: At
        });
        else if (Gt.startsWith("20")) {
          var Kt = oe(Gt.substring(2, 40));
          t.setData({
            SSID: Kt
          })
        } else Gt.startsWith("21") ? t.setData({
          UPWD: oe(Gt.substring(2, 40))
        }) : Gt.startsWith("22") ? t.setData({
          WID: oe(Gt.substring(2, 40))
        }) : Gt.startsWith("23") && t.setData({
          WPD: oe(Gt.substring(2, 40))
        })
      }
    }))
  },
  onUnload: function () {
    Gt.onBLEConnectionStateChange((function () {})), Gt.closeBLEConnection()
  },
  onShow: function (t) {
    a = 0
  },
  onHide: function () {
    a = 1
  }
});