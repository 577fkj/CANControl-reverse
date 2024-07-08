var t, e, a, n, i, o, r, s, c, u, f, F, h, S, d, l, T, p, g, B, C, D, m, w, A, O, v, E, x, G, I, b, M, R, N, W, U, L, $, V, K, P, y, k, Y, H, j, q, Z, _, z, Q, J, X, tt, et, at, nt, it, ot, rt, st, ct, ut, ft, Ft, ht, St, dt, lt, Tt, pt, gt, Bt, Ct, Dt, mt, wt, At, Ot, vt, Et, xt, Gt, It = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  bt = require("../../@babel/runtime/helpers/asyncToGenerator"),
  Mt = require("../../F55BAF819E166AAF933DC78618273E81.js"),
  Rt = require("../../680F81F39E166AAF0E69E9F490373E81.js"),
  Nt = 0,
  Wt = 0,
  Ut = 0,
  Lt = "设备连接成功",
  $t = "1,27,30,欢迎",
  Vt = "1,57,30,使用",
  Kt = 0,
  Pt = "ff",
  yt = "ff",
  kt = "ff",
  Yt = 0,
  Ht = wx;

function jt(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  Ht.showModal({
    title: t,
    editable: !0,
    placeholderText: e,
    confirmText: R ? "YES" : "确定",
    cancelText: R ? "NO" : "取消",
    success: function (t) {
      t.confirm && a(t.content)
    }
  })
}

function qt(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ht.showModal({
    title: R ? e : t,
    editable: !0,
    placeholderText: (R ? "Range:" : "范围:") + a + "-" + n,
    confirmText: R ? "YES" : "确定",
    cancelText: R ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(n) || e < Number(a) || !isFinite(e)) && 2 != Wt) return void(0, Mt.Toast)(R ? "Beyond the set range!" : "超出设置范围!");
        i(e)
      }
    }
  })
}

function Zt(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ht.showModal({
    title: R ? e : t,
    editable: !0,
    placeholderText: R ? n : a,
    confirmText: R ? "YES" : "确定",
    cancelText: R ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, Mt.Toast)(R ? "Input cannot be empty!" : "输入不能为空!");
        i(e)
      }
    }
  })
}

function _t(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ht.showModal({
    title: R ? e : t,
    content: R ? n : a,
    confirmText: R ? "YES" : "确定",
    cancelText: R ? "NO" : "取消",
    success: function (t) {
      t.confirm && i(t)
    }
  })
}

function zt(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function Qt(t) {
  var e = Math.floor(t / 3600),
    a = Math.floor(t % 3600 / 60),
    n = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(a).padStart(2, "0") + ":" + String(n).padStart(2, "0")
}

function Jt(t) {
  return Xt.apply(this, arguments)
}

function Xt() {
  return (Xt = bt(It().mark((function t(e) {
    return It().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (0 == ee) {
            t.next = 3;
            break
          }
          return (0, Mt.Toast)(R ? "There are unfinished sending tasks" : "有发送任务未完成"), t.abrupt("return");
        case 3:
          return e = e.substring(0, 40), t.next = 6, Rt.easySendData1(e, !0);
        case 6:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var te = [""],
  ee = 0;

function ae(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  0 == ee ? Ht.showModal({
    title: R ? "Confirm whether to send" : "确认是否发送",
    editable: !1,
    confirmText: R ? "YES" : "确定",
    cancelText: R ? "NO" : "取消",
    success: function (a) {
      if (a.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), ee = 0, (te = [])[0] = "F1" + re(RegExp.$1);
        for (var n = e ? RegExp.$2 : ie(RegExp.$2), i = 0; i < n.length; i += 240) ee++, te[ee] = "F2" + n.slice(i, i + 240);
        te[te.length] = "F3", ee = 0, ne()
      }
    }
  }) : (0, Mt.Toast)(R ? "There are unfinished sending tasks" : "有发送任务未完成")
}

function ne(t) {
  var e = te[ee];
  Rt.easySendData1(e, !0), (0, Mt.Toast)((R ? "Sending:" : "发送进度:") + (ee / te.length * 100).toFixed(2) + "%"), ee++
}

function ie(t) {
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

function oe() {
  0 == Kt ? t.setData({
    Cr0: "#" + Pt + yt + kt
  }) : 1 == Kt ? t.setData({
    Cr1: "#" + Pt + yt + kt
  }) : 2 == Kt ? t.setData({
    Cr2: "#" + Pt + yt + kt
  }) : 3 == Kt ? t.setData({
    Cr3: "#" + Pt + yt + kt
  }) : 4 == Kt ? t.setData({
    Cr4: "#" + Pt + yt + kt
  }) : 5 == Kt ? t.setData({
    Cr5: "#" + Pt + yt + kt
  }) : 6 == Kt ? t.setData({
    Cr6: "#" + Pt + yt + kt
  }) : 7 == Kt ? t.setData({
    Cr7: "#" + Pt + yt + kt
  }) : 8 == Kt && t.setData({
    Cr8: "#" + Pt + yt + kt
  })
}

function re(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString(16).padStart(2, "0");
  return e && (a = a.padEnd(2 * e, "0")), a
}

function se(t) {
  for (var e = "", a = 0, n = "", i = 0; i < t.length / 2; i++) {
    var o = t.substr(2 * i, 2),
      r = parseInt(o, 16);
    a && r ? (n += "%" + o, (a -= 1) || (e += decodeURIComponent(n), n = "")) : r >= 224 & r <= 239 ? (n += "%" + o, a = 2) : r && (e += String.fromCharCode(r))
  }
  return e
}

function ce(t) {
  return Math.floor(100 * t).toString(16).padStart(8, "0")
}

function ue(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function fe(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    n = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return a ? parseFloat(n) : n
}

function Fe(t, e) {
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
  BTTCH: function (t) {
    this.setData({
      ShowBar: 24 != this.data.ShowBar ? 24 : -1
    })
  },
  uset: function (t) {
    Jt("FF"), (2 == Ut || Wt) && this.setData({
      Panel: 2 == Wt ? 2 : 3,
      ShowBar: 2 == Wt ? 0 : Nt < Number("5.34") ? 4 : 8,
      LOGO: R ? "Preview" : "预览"
    })
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, Mt.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    Zt("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      Jt("FA75" + re(t)), Jt("FF")
    }))
  },
  BTRST: function (t) {
    _t("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      Jt("F601"), (0, Mt.Toast)(R ? "The device is restarting" : "重置已发送,设备正在重启!"), Ht.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    _t("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      Jt("F001"), (0, Mt.Toast)(R ? "The device is restarting" : "设备正在重启!"), Ht.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    _t("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      Jt("AA01"), (0, Mt.Toast)(R ? "Data cleared to zero" : "数据已清零!"), Ht.navigateBack({
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
    Jt("AC00"), Jt("FF")
  },
  DST2: function (t) {
    Jt("AC01"), Jt("FF")
  },
  DST3: function (t) {
    Jt("AC02"), Jt("FF")
  },
  DST4: function (t) {
    Jt("AC03"), Jt("FF")
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), qt("设置输出最大功率", "Set maximum output power", "500", "10000", (function (t) {
      Jt("F84E" + ce(t)), Jt("F84D" + ce(t)), Jt("FF")
    }))
  },
  BTLOGO0: function (e) {
    "预览" == t.data.LOGO || "Preview" == t.data.LOGO ? (Ht.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: !0
    }), t.SetLOGO($t + "|" + Vt, t)) : "发送" != t.data.LOGO && "Send" != t.data.LOGO || ae(n, 1), t.setData({
      ShowBar: 20,
      LOGO: R ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (e) {
    Zt("设置第一行LOGO", "Set the first line logo", $t, $t, (function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) $t = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) $t = "1,27,30," + RegExp.$1, Vt = "1,57,30," + RegExp.$2;
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Mt.Toast)(R ? "Input format error" : "输入格式错误");
        $t = "1,27,30," + RegExp.$1
      }
      t.setData({
        LOGO1: $t,
        LOGO2: Vt,
        LOGO: R ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO2: function (e) {
    Zt("设置第二行LOGO", "Set second line logo", Vt, Vt, (function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Vt = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) $t = "1,27,30," + RegExp.$1, Vt = "1,57,30," + RegExp.$2;
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Mt.Toast)(R ? "Input format error" : "输入格式错误");
        Vt = "1,57,30," + RegExp.$1
      }
      t.setData({
        LOGO1: $t,
        LOGO2: Vt,
        LOGO: R ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO3: function (t) {
    Jt("F9C0" + ue(1 - Dt)), Jt("FF")
  },
  SetLOGO: function (t, e) {
    Ht.createSelectorQuery().select("#LOGO").fields({
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
      var S = [0],
        d = -1;
      n = "DataStart=LOGO{";
      for (var l = 0; l < 60; l += 1) {
        for (var T = o.getImageData(0, l, 60, 1).data, p = 0; p < 60; p += 1) {
          p % 8 == 0 && (p && (n += S[d].toString(16).padStart(2, "0")), d += 1);
          var g = .299 * T[4 * p] + .587 * T[4 * p + 1] + .114 * T[4 * p + 2];
          S[d] = S[d] >> 1, S[d] = S[d] | (g < 100 ? 0 : 128)
        }
        n += (S[d] >> 4).toString(16).padStart(2, "0")
      }
      n += "}DataEnd", Ht.hideToast(), e.setData({
        LOGO: R ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    Jt("F962" + ue(1 - dt)), Jt("FF")
  },
  BTCAN1: function (t) {
    _t("确认是否切换为华为", "Switch to Huawei", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Jt("FC530101"), (0, Mt.Toast)(R ? "The device is restarting" : "重置已发送,设备正在重启!"), Ht.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN2: function (t) {
    _t("确认是否切换为英可瑞", "Switch to Increase", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Jt("FC530201"), (0, Mt.Toast)(R ? "The device is restarting" : "重置已发送,设备正在重启!"), Ht.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN4: function (t) {
    _t("确认是否切换为中兴3000", "Switch to ZTE3000", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Jt("FC530401"), (0, Mt.Toast)(R ? "The device is restarting" : "重置已发送,设备正在重启!"), Ht.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN8: function (t) {
    _t("确认是否切换为英飞源", "Switch to Infy", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Jt("FC530801"), (0, Mt.Toast)(R ? "The device is restarting" : "重置已发送,设备正在重启!"), Ht.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN16: function (t) {
    _t("确认是否切换为EPS6020", "Switch to EPS6020", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Jt("FC531001"), (0, Mt.Toast)(R ? "The device is restarting" : "重置已发送,设备正在重启!"), Ht.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN32: function (t) {
    _t("确认是否切换为中兴4875", "Switch to ZTE4875", "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == Wt) {
        for (var e = parseInt(g, 16), a = e.toString(), n = 0, i = 0; i < a.length; i++) n += a.charCodeAt(i);
        Jt("C83F" + Math.floor(Math.floor(e / 611) * n).toString(16).slice(-6)), Jt("FC532001"), Jt("FF")
      } else Jt("FC532001"), (0, Mt.Toast)(R ? "The device is restarting" : "重置已发送,设备正在重启!"), Ht.navigateBack({
        delta: 0
      })
    }))
  },
  BTLEDK2: function (t) {
    qt("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      Jt("F968" + ue(t)), Jt("FF")
    }))
  },
  BTLEDK1: function (t) {
    qt("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      Jt("F969" + ue(t)), Jt("FF")
    }))
  },
  BTLEDKS1: function (t) {
    qt("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      Jt("F96D" + ue(t)), Jt("FF")
    }))
  },
  BTLEDKS2: function (t) {
    qt("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      Jt("F96A" + ue(t)), Jt("FF")
    }))
  },
  BTStart1: function (t) {
    qt("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      Jt("F96B" + ue(t)), Jt("FF")
    }))
  },
  BTStart2: function (t) {
    Jt("F96C" + ue(1 - K)), Jt("FF")
  },
  BTGIF1: function (t) {
    Jt("F96F" + ue(1 - ct)), Jt("FF")
  },
  BT_GIF1: function (t) {
    ae((0, Mt.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    ae((0, Mt.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    ae((0, Mt.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    ae((0, Mt.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    ae((0, Mt.GetGIF)(5))
  },
  BTCr1: function (t) {
    Jt("F53000" + zt(this.data.Cr0) + "0000f01c"), Jt("F53100" + zt(this.data.Cr1) + "00209F26"), Jt("F53200" + zt(this.data.Cr2) + "00479F26"), Jt("F53300" + zt(this.data.Cr3) + "006e9F27"), Jt("F53400" + zt(this.data.Cr4) + "00969F3f"), Jt("F53500" + zt(this.data.Cr5) + "A3204d4d"), Jt("F53600" + zt(this.data.Cr6) + "50d64f1A"), Jt("F53700" + zt(this.data.Cr7) + "00d64f1A"), Jt("F53801" + zt(this.data.Cr8) + "A3774d68")
  },
  CK0: function (t) {
    Kt = 0, this.data.Cr0.match(/#(..)(..)(..)/), Pt = RegExp.$1, yt = RegExp.$2, kt = RegExp.$3, this.setData({
      CR: parseInt(Pt, 16),
      CG: parseInt(yt, 16),
      CB: parseInt(kt, 16)
    })
  },
  CK1: function (t) {
    Kt = 1, this.data.Cr1.match(/#(..)(..)(..)/), Pt = RegExp.$1, yt = RegExp.$2, kt = RegExp.$3, this.setData({
      CR: parseInt(Pt, 16),
      CG: parseInt(yt, 16),
      CB: parseInt(kt, 16)
    })
  },
  CK2: function (t) {
    Kt = 2, this.data.Cr2.match(/#(..)(..)(..)/), Pt = RegExp.$1, yt = RegExp.$2, kt = RegExp.$3, this.setData({
      CR: parseInt(Pt, 16),
      CG: parseInt(yt, 16),
      CB: parseInt(kt, 16)
    })
  },
  CK3: function (t) {
    Kt = 3, this.data.Cr3.match(/#(..)(..)(..)/), Pt = RegExp.$1, yt = RegExp.$2, kt = RegExp.$3, this.setData({
      CR: parseInt(Pt, 16),
      CG: parseInt(yt, 16),
      CB: parseInt(kt, 16)
    })
  },
  CK4: function (t) {
    Kt = 4, this.data.Cr4.match(/#(..)(..)(..)/), Pt = RegExp.$1, yt = RegExp.$2, kt = RegExp.$3, this.setData({
      CR: parseInt(Pt, 16),
      CG: parseInt(yt, 16),
      CB: parseInt(kt, 16)
    })
  },
  CK5: function (t) {
    Kt = 5, this.data.Cr5.match(/#(..)(..)(..)/), Pt = RegExp.$1, yt = RegExp.$2, kt = RegExp.$3, this.setData({
      CR: parseInt(Pt, 16),
      CG: parseInt(yt, 16),
      CB: parseInt(kt, 16)
    })
  },
  CK6: function (t) {
    Kt = 6, this.data.Cr6.match(/#(..)(..)(..)/), Pt = RegExp.$1, yt = RegExp.$2, kt = RegExp.$3, this.setData({
      CR: parseInt(Pt, 16),
      CG: parseInt(yt, 16),
      CB: parseInt(kt, 16)
    })
  },
  CK7: function (t) {
    Kt = 7, this.data.Cr7.match(/#(..)(..)(..)/), Pt = RegExp.$1, yt = RegExp.$2, kt = RegExp.$3, this.setData({
      CR: parseInt(Pt, 16),
      CG: parseInt(yt, 16),
      CB: parseInt(kt, 16)
    })
  },
  CK8: function (t) {
    Kt = 8, this.data.Cr8.match(/#(..)(..)(..)/), Pt = RegExp.$1, yt = RegExp.$2, kt = RegExp.$3, this.setData({
      CR: parseInt(Pt, 16),
      CG: parseInt(yt, 16),
      CB: parseInt(kt, 16)
    })
  },
  CRC: function (t) {
    Pt = t.detail.value.toString(16).padStart(2, "0"), oe()
  },
  CGC: function (t) {
    yt = t.detail.value.toString(16).padStart(2, "0"), oe()
  },
  CBC: function (t) {
    kt = t.detail.value.toString(16).padStart(2, "0"), oe()
  },
  BTCKA2: function (t) {
    Jt("F972" + ue(1 - ut)), Jt("FF")
  },
  BTEN1: function (t) {
    (0, Mt.SetCFG)("UEN", 1 - R), Jt("F970" + ue(1 - R)), Jt("FF")
  },
  BTBLE1: function (t) {
    Zt("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      Jt("FA73" + re(t = unescape(encodeURIComponent(t)))), Jt("FF")
    }))
  },
  BTBLE2: function (t) {
    Zt("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      Jt("FA74" + re(t)), Jt("FF")
    }))
  },
  BTTCH1: function (t) {
    Zt("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return Jt("FAD1" + re(t)), void Jt("FF");
      (0, Mt.Toast)(R ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    qt("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      Jt("F9C7" + ue(t)), Jt("FF")
    }))
  },
  BTKEY1: function (t) {
    Jt("F967" + ue(1 - G)), Jt("FF")
  },
  BTKEY2: function (t) {
    Jt("F966" + ue(1 - N)), Jt("FF")
  },
  BTDDT1: function (t) {
    Jt("F96E" + ue(lt >= 3 ? 0 : lt + 1)), Jt("FF")
  },
  BTUP6: function (t) {
    Zt("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Mt.SetCFG)("WID", t), Jt("AB00" + re(t = unescape(encodeURIComponent(t)))), Jt("FF")
    }))
  },
  BTUP7: function (t) {
    Zt("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Mt.SetCFG)("WPD", t), Jt("AB01" + re(t = unescape(encodeURIComponent(t)))), Jt("FF")
    }))
  },
  BTUP1: function (t) {
    Yt || this.data.CVer >= this.data.UPDate && !Wt || Ht.showModal({
      title: R ? "Start Upgrade" : "开始升级",
      editable: !1,
      confirmText: R ? "YES" : "确定",
      cancelText: R ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Jt("A700000000" + re("NewUI")), void(0, Mt.Toast)(R ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP8: function (t) {
    Ht.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    Ht.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    Ht.setClipboardData({
      data: "设备ID:" + g
    })
  },
  BTUP0: function (t) {
    Ht.showModal({
      title: R ? "Firmware rollback" : "固件回退",
      editable: !1,
      confirmText: R ? "YES" : "确定",
      cancelText: R ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Jt("A7" + re("14", 4) + re("NewUI")), void(0, Mt.Toast)(R ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP9: function (t) {
    Ht.showModal({
      title: R ? "Write Test Firmware" : "刷入测试固件",
      editable: !1,
      confirmText: R ? "YES" : "确定",
      cancelText: R ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Jt("A700000000" + re("NewTest")), void(0, Mt.Toast)(R ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUFS: function (t) {
    qt("设置温度加速值", "Set temperature acceleration value", "3", "15", (function (t) {
      Jt("F963" + ue(t)), Jt("FF")
    }))
  },
  BTAFS: function (t) {
    qt("设置电流加速值", "Set current acceleration value", "0.1", "2.0", (function (t) {
      Jt("F964" + ue(10 * t)), Jt("FF")
    }))
  },
  BTLFS: function (t) {
    qt("设置初始风速值", "Set initial wind speed value", "30", "150", (function (t) {
      Jt("F965" + ue(t)), Jt("FF")
    }))
  },
  BTMFS: function (t) {
    qt("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      Jt("F9C5" + ue(t)), Jt("FF")
    }))
  },
  BTTMC: function (t) {
    qt("设置超温限制温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      Jt("F84A" + ce(t)), Jt("FF")
    }))
  },
  BTTMC1: function (t) {
    qt("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      Jt("F84B" + ce(t)), Jt("FF")
    }))
  },
  BTTMW: function (t) {
    qt("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      Jt("F84C" + ce(t)), Jt("FF")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), wx.pageScrollTo({
      scrollTop: 95,
      duration: 300
    }), i < 10 || o > 0 ? (0, Mt.Toast)(R ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Jt("C1"), Jt("FF"), qt("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / i).toFixed(4),
        a = Number(t / y).toFixed(4);
      Jt("C3" + ce(100 * a) + ce(100 * e)), 2 == M ? (Jt("F876" + ce(20 * a)), Jt("F877" + ce(100 * a))) : 1 == M ? (Jt("F876" + ce(41 * a)), Jt("F877" + ce(58.5 * a))) : 4 == M ? (Jt("F876" + ce(41 * a)), Jt("F877" + ce(59 * a))) : 16 == M ? (Jt("F876" + ce(44 * a)), Jt("F877" + ce(61 * a))) : 32 == M && (Jt("F876" + ce(41.2 * a)), Jt("F877" + ce(59.4 * a))), Jt("FF"), Jt("A80" + E + ce(50 * a) + ce(k)), Jt("FF")
    })))
  },
  BTOVT1: function (t) {
    qt("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      Jt("FB47" + ce(100 * t)), Jt("FF")
    }))
  },
  BTOVTU: function (t) {
    Jt("FB47" + ce(100 * (nt + .003))), Jt("FF")
  },
  BTOVTD: function (t) {
    Jt("FB47" + ce(100 * (nt - .003))), Jt("FF")
  },
  BTOVD1: function (t) {
    qt("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      Jt("FB46" + ce(100 * t)), Jt("FF")
    }))
  },
  BTOVDU: function (t) {
    Jt("FB46" + ce(100 * (ot + .003))), Jt("FF")
  },
  BTOVDD: function (t) {
    Jt("FB46" + ce(100 * (ot - .003))), Jt("FF")
  },
  BTOVS: function (t) {
    jt(R ? "Set voltage range" : "设置电压范围", (R ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Jt("F876" + ce(Number(RegExp.$1))), Jt("F877" + ce(Number(RegExp.$2))), Jt("FF")) : (0, Mt.Toast)(R ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    qt("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      Jt("F8F3" + ce(t)), Jt("FF")
    }))
  },
  BTOVT3: function (t) {
    i < 10 || o > 0 ? (0, Mt.Toast)(R ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Jt("C2"), Jt("FF"), qt("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / i).toFixed(4);
      Jt("C4" + ce(100 * Number(t / y).toFixed(4)) + ce(100 * e)), Jt("FF")
    })))
  },
  BTOVT2: function (t) {
    qt("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      Jt("FBF2" + ce(100 * t)), Jt("FF")
    }))
  },
  BTO2TU: function (t) {
    Jt("FBF2" + ce(100 * (pt + .003))), Jt("FF")
  },
  BTO2TD: function (t) {
    Jt("FBF2" + ce(100 * (pt - .003))), Jt("FF")
  },
  BTOVD2: function (t) {
    qt("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      Jt("FBF1" + ce(100 * t)), Jt("FF")
    }))
  },
  BTO2DU: function (t) {
    Jt("FBF1" + ce(100 * (gt + .003))), Jt("FF")
  },
  BTO2DD: function (t) {
    Jt("FBF1" + ce(100 * (gt - .003))), Jt("FF")
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 145,
      duration: 300
    }), o < 5 || y - i < .2 ? (0, Mt.Toast)(R ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (Jt("C0"), Jt("FF"), qt("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / o).toFixed(4);
      Jt("C5" + ce(100 * Number(t / k).toFixed(4)) + ce(100 * e)), Jt("FF")
    })))
  },
  BTOAT1: function (t) {
    qt("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      Jt("FB45" + ce(100 * t)), Jt("FF")
    }))
  },
  BTOAT2: function (t) {
    Jt("FB45" + ce(100 * (it - .003))), Jt("FF")
  },
  BTOAT3: function (t) {
    Jt("FB45" + ce(100 * (it + .003))), Jt("FF")
  },
  BTOAS1: function (t) {
    qt("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      Jt("F8F4" + ce(t)), Jt("FF")
    }))
  },
  BTCLV: function (t) {
    qt("设置最小电流过滤", "Set minimum current filtering", "0.00", "2.00", (function (t) {
      Jt("F848" + ce(t)), Jt("FF")
    }))
  },
  BTOAD1: function (t) {
    qt("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      Jt("FB44" + ce(100 * t)), Jt("FF")
    }))
  },
  BTOAD2: function (t) {
    Jt("FB44" + ce(100 * (rt - .003))), Jt("FF")
  },
  BTOAD3: function (t) {
    Jt("FB44" + ce(100 * (rt + .003))), Jt("FF")
  },
  BTOAS: function (t) {
    jt(R ? "Set current range" : "设置电流范围", (R ? "Now:" : "当前范围:") + z + "-" + Q, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Jt("F878" + ce(Number(RegExp.$1))), Jt("F879" + ce(Number(RegExp.$2))), Jt("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (Jt("F879" + ce(t)), Jt("FF")) : (0, Mt.Toast)(R ? "Input format error" : "输入格式错误!"))
    }))
  },
  pwrbt: function (t) {
    Jt("A6" + ue(1 - x)), Jt("FF")
  },
  owbt: function (t) {
    qt("设置输出功率限制", "Set output power limit", "300", L, (function (t) {
      Jt("F84D" + ce(t)), Jt("FF")
    }))
  },
  tibt: function (t) {
    qt("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      Jt("A9" + function (t) {
        return Math.floor(t).toString(16).padStart(4, "0")
      }(t)), Jt("FF")
    }))
  },
  BTYC1: function (t) {
    qt("设置预充电压", "Set pre charge voltage", "0", X, (function (t) {
      Jt("F8F6" + ce(t)), Jt("FF")
    }))
  },
  BTYC2: function (t) {
    qt("设置预充电流", "Set pre charge current", z, Q, (function (t) {
      Jt("F8F5" + ce(t)), Jt("FF")
    }))
  },
  ks1bt: function (t) {
    var e = O[0],
      a = O[1] > Q ? Q : O[1];
    e > X || e < J ? qt("设置输出电压", "Set output voltage", J, X, (function (t) {
      Jt("A80" + (E = 1) + ce(t) + ce(a)), Jt("FF")
    })) : (Jt("A80" + (E = 1) + ce(e) + ce(a)), Jt("FF"))
  },
  ks2bt: function (t) {
    var e = v[0],
      a = v[1] > Q ? Q : v[1];
    e > X || e < J ? qt("设置输出电压", "Set output voltage", J, X, (function (t) {
      Jt("A80" + (E = 2) + ce(t) + ce(a)), Jt("FF")
    })) : (Jt("A80" + (E = 2) + ce(e) + ce(a)), Jt("FF"))
  },
  ks3bt: function (t) {
    var e = I[0],
      a = I[1] > Q ? Q : I[1];
    e > X || e < J ? qt("设置输出电压", "Set output voltage", J, X, (function (t) {
      Jt("A80" + (E = 3) + ce(t) + ce(a)), Jt("FF")
    })) : (Jt("A80" + (E = 3) + ce(e) + ce(a)), Jt("FF"))
  },
  ks4bt: function (t) {
    var e = b[0],
      a = b[1] > Q ? Q : b[1];
    e > X || e < J ? qt("设置输出电压", "Set output voltage", J, X, (function (t) {
      Jt("A80" + (E = 4) + ce(t) + ce(a)), Jt("FF")
    })) : (Jt("A80" + (E = 4) + ce(e) + ce(a)), Jt("FF"))
  },
  hqbt1: function (t) {
    qt("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      Jt("F961" + ue(t)), Jt("FF")
    }))
  },
  hqbt0: function (t) {
    Jt("F961" + ue(0 == st ? 10 : 0)), Jt("FF")
  },
  nvbt: function (t) {
    jt(R ? "Set Output Voltage" : "设置输出电压", (R ? "Range:" : "范围:") + J + "-" + X, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) Jt(t.substr(2, 4) + ce(t.substr(6))), Jt("FF");
        else if (t.startsWith("FFC8")) Jt(t.substr(2, 4) + t.substr(6)), Jt("FF");
      else if ("强制升级" == t) Ht.showModal({
        title: R ? "Start Upgrade" : "开始升级",
        editable: !1,
        confirmText: R ? "YES" : "确定",
        cancelText: R ? "NO" : "取消",
        success: function (t) {
          if (t.confirm) return Jt("A700000000" + re("NewUI")), void(0, Mt.Toast)(R ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
        }
      });
      else {
        if (Jt("A1" + re(t)), (t = parseFloat(t)) > X || t < J || !isFinite(t)) return void(0, Mt.Toast)(R ? "Beyond the set range!" : "超出设置范围!");
        Jt("A80" + E + ce(t) + ce(k)), Jt("FF")
      } else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && ae(e)
        }
      })
    }))
  },
  nabt: function (t) {
    qt("设置输出电流", "Set output current", z, Q, (function (t) {
      Jt("A80" + E + ce(y) + ce(t)), Jt("FF")
    }))
  },
  sa2bt2: function (t) {
    qt("设置二段电流", "Set second stage current", z, Q, (function (t) {
      Jt("F857" + ce(t)), Jt("FF")
    }))
  },
  sa2bt1: function (t) {
    qt("设置二段电压", "Set second stage voltage", J, X, (function (t) {
      Jt("F858" + ce(t)), Jt("FF")
    }))
  },
  sa2bt0: function (t) {
    Jt("F858" + (0 == U ? ce(y - 3) : "00000000")), Jt("F857" + (0 == U ? ce(10) : "00000000")), Jt("FF")
  },
  sdbt1: function (t) {
    qt("设置延时时间(分钟)", "Set delay time (minutes)", 1, 600, (function (t) {
      Jt("F859" + ce(t)), Jt("FF")
    }))
  },
  sdbt2: function (t) {
    qt("设置关机电流", "SSet startup delay current", "0.00", "2.00", (function (t) {
      Jt("F8F0" + ce(t)), Jt("FF")
    }))
  },
  sdbt0: function (t) {
    Jt("F859" + (0 == ht ? ce(30) : "00000000")), Jt("FF")
  },
  MSG: function (n, It) {
    if (!a) {
      (0, Mt.print)("MSG:", It);
      var bt = It;
      if ("EE" == bt.substring(0, 2)) {
        e = se(bt.substring(20, 40)), Nt = .01 * parseInt(bt.substring(16, 20), 16), M = 32 == (M = 16 == (M = 8 == (M = 4 == (M = 2 == (M = 1 == (M = Fe(bt, 14)) ? "Huawei" : M) ? "Increase" : M) ? "ZTE3000" : M) ? "INFY" : M) ? "EPS6020" : M) ? "ZTE4875" : M, g = "0x" + bt.substring(2, 14), e.startsWith("Cxjdwx") && (e = "未激活"), t.setData({
          CVer: Nt.toFixed(2),
          SCAN: M,
          ID: g,
          ACT: e
        });
        var Rt = (0, Mt.GetCFG)(g);
        Wt && (Rt = (Number(g) + 19880914).toString(16).substring(4, 8)), Ut || Jt("A0" + re(Rt))
      } else if (bt.startsWith("A101")) t.setData({
        ShowBar: 0,
        Panel: 2,
        LOGO: R ? "Preview" : "预览"
      });
      else if (bt.startsWith("A001")) {
        if (Ut = 2, ("Cxjdwx" == e || "未激活" == e) && !Wt) {
          var $t = new Date;
          Jt("FD48" + re($t.getFullYear() + "-" + ($t.getMonth() + 1) + "-" + $t.getDate()))
        }
        Nt <= 5.28 && Jt("FF")
      } else if (bt.startsWith("A000")) {
        if (Ut) return;
        Ut = 1, Ht.showModal({
          title: R ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: !0,
          placeholderText: "ID:" + g,
          confirmText: R ? "YES" : "确定",
          cancelText: R ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, Mt.SetCFG)(g, t.content), Jt("A0" + re(t.content)), Ut = 0)
          }
        })
      } else if (bt.startsWith("F101")) ne();
      else if (bt.startsWith("F201")) ne();
      else if (bt.startsWith("F301")) ee = 0, te = [], (0, Mt.Toast)(R ? "Send End!" : "发送完成!");
      else if (bt.startsWith("01")) i = fe(bt, 2), o = fe(bt, 10), r = fe(bt, 18), s = fe(bt, 26), c = Fe(bt, 34), u = Fe(bt, 36), f = Fe(bt, 38), this.data.UEN ? "0" == f ? Lt = "Communication Abnormality" : 0 == i ? Lt = "Charger Output Abnormality" : 4 == c ? Lt = "Charger Shutdown" : 0 == c ? Lt = "Waiting For Battery Connection" : 1 == c ? Lt = "Charging" : 2 == c ? Lt = "In The Second Stage Of Charging" : 5 == c ? Lt = "Precharging" : 40 == c ? Lt = "Appointment Waiting" : 3 == c ? Lt = "Charging Completed" : 43 == c && (Lt = "Charging Completed(Turned Off)") : "0" == f ? Lt = "CAN通讯异常" : 0 == i ? Lt = "充电器输出异常" : 4 == c ? Lt = "充电器已关机" : 0 == c ? Lt = "等待接入电池" : 1 == c ? Lt = "正在充电中" : 5 == c ? Lt = "正在预充" : 2 == c ? Lt = "第二段充电中" : 40 == c ? Lt = "预约等待中" : 3 == c ? Lt = "充电完成" : 43 == c && (Lt = "充电完成(已关机)"), t.setData({
        STR: Lt,
        NFS: u,
        OL: f,
        OV: i,
        OA: o,
        OW: r,
        OT: s
      });
      else if (bt.startsWith("02")) {
        F = fe(bt, 2), h = fe(bt, 10), S = fe(bt, 18), d = fe(bt, 26), l = Fe(bt, 34), T = Fe(bt, 36), p = Fe(bt, 38);
        var Vt = Number(r / S * 100).toFixed(2),
          Kt = Number(S - r).toFixed(2);
        t.setData({
          IV: F,
          IA: h,
          IW: S,
          IT: d,
          ST0: l,
          ST1: T,
          ST2: p,
          EEI: S ? Vt : "0.00",
          EES: S ? Kt : "0.00"
        })
      } else if (bt.startsWith("03")) B = fe(bt, 2), C = fe(bt, 10), D = fe(bt, 18), m = fe(bt, 26), w = Fe(bt, 34), A = Fe(bt, 36), t.setData({
        Ah: B,
        Wh: C,
        AH: D,
        WH: m,
        SWT: w,
        SMT: A
      });
      else if (bt.startsWith("04")) t.setData({
        Ti: Qt(fe(bt, 2)),
        TI: Qt(fe(bt, 10)),
        NSD: Qt(fe(bt, 18)),
        SOC: Number(fe(bt, 26)).toFixed(0)
      });
      else if (bt.startsWith("10")) O = [fe(bt, 2, 1), fe(bt, 10, 1)], v = [fe(bt, 18, 1), fe(bt, 26, 1)], E = Fe(bt, 34), x = Fe(bt, 36), G = Fe(bt, 38), 1 == E ? (k = O[1], y = O[0]) : 2 == E && (k = v[1], y = v[0]), 3 == E ? (k = I[1], y = I[0]) : 4 == E && (k = b[1], y = b[0]), t.setData({
        KS1: O,
        KS2: v,
        KSi: E,
        PON: x,
        KON: G,
        SV: y.toFixed(2),
        SA: k.toFixed(2)
      });
      else if (bt.startsWith("11")) I = [fe(bt, 2, 1), fe(bt, 10, 1)], b = [fe(bt, 18, 1), fe(bt, 26, 1)], M = Fe(bt, 34), R = Fe(bt, 36), N = Fe(bt, 38), (0, Mt.SetCFG)("UEN", R), 1 == E ? (k = O[1], y = O[0]) : 2 == E && (k = v[1], y = v[0]), 3 == E ? (k = I[1], y = I[0]) : 4 == E && (k = b[1], y = b[0]), t.setData({
        KS3: I,
        KS4: b,
        CAN: M,
        UEN: R,
        KRC: N,
        SV: y.toFixed(2),
        SA: k.toFixed(2)
      });
      else if (bt.startsWith("12")) W = fe(bt, 2), U = fe(bt, 10), L = fe(bt, 18), $ = fe(bt, 26), V = Fe(bt, 34), K = Fe(bt, 36), P = Fe(bt, 38), t.setData({
        SV2: W,
        SA2: U,
        SMW: L,
        UMW: $,
        WTi: V,
        ETi: K,
        Sleep: P
      });
      else if (bt.startsWith("13")) Y = fe(bt, 2), H = fe(bt, 10), j = fe(bt, 18), q = Fe(bt, 34), Z = Fe(bt, 36), _ = Fe(bt, 38), t.setData({
        TMW: Y,
        UMT: H,
        OMT: j,
        LEDK0: q,
        LEDK1: Z,
        LEDK2: _
      });
      else if (bt.startsWith("14")) z = fe(bt, 2), Q = fe(bt, 10), J = fe(bt, 18), X = fe(bt, 26), tt = Fe(bt, 34), et = Fe(bt, 36), at = .1 * Fe(bt, 38), t.setData({
        LSA: z,
        HSA: Q,
        LSV: J,
        HSV: X,
        UFS: tt,
        LFS: et,
        AFS: at.toFixed(1)
      }), z = Number(z), J = Number(J), Q = Number(Q), X = Number(X);
      else if (bt.startsWith("15")) nt = .01 * fe(bt, 2), it = .01 * fe(bt, 10), ot = .01 * fe(bt, 18), rt = .01 * fe(bt, 26), st = Fe(bt, 34), ct = Fe(bt, 36), ut = Fe(bt, 38), t.setData({
        OVT: nt.toFixed(4),
        OAT: it.toFixed(4),
        OVD: ot.toFixed(4),
        OAD: rt.toFixed(4),
        UHQ: st,
        GIF: ct,
        CKA2: ut
      });
      else if (bt.startsWith("16")) ft = fe(bt, 2), Ft = fe(bt, 10), ht = fe(bt, 18), St = fe(bt, 26), dt = Fe(bt, 34), lt = Fe(bt, 36), Tt = .01 * Fe(bt, 38), t.setData({
        L2V: ft,
        H2V: Ft,
        USD: ht,
        NTC: dt,
        DDT: lt,
        CLV: Tt,
        SDU: St
      });
      else if (bt.startsWith("17")) pt = .01 * fe(bt, 2), gt = .01 * fe(bt, 10), Bt = fe(bt, 18), Ct = fe(bt, 26), Dt = Fe(bt, 34), mt = Fe(bt, 36), wt = Fe(bt, 38), t.setData({
        O2D: gt.toFixed(4),
        O2T: pt.toFixed(4),
        OVS: Bt,
        OAS: Ct,
        UEG: Dt,
        UCN: mt,
        MFS: wt
      });
      else if (bt.startsWith("18")) At = fe(bt, 2), Ot = fe(bt, 10), vt = fe(bt, 26), Et = Fe(bt, 34), xt = Fe(bt, 36), Gt = Fe(bt, 38), t.setData({
        YCA: At,
        YCV: Ot,
        DOL: Et,
        DST: xt,
        LKS: Gt,
        TCH: vt
      });
      else if (bt.startsWith("20")) {
        var Pt = se(bt.substring(2, 40));
        t.setData({
          SSID: Pt
        })
      } else if (bt.startsWith("21")) t.setData({
        UPWD: se(bt.substring(2, 40))
      });
      else if (bt.startsWith("22")) {
        var yt = se(bt.substring(2, 40)),
          kt = (0, Mt.GetCFG)("WID", yt);
        yt != kt && Jt("AB00" + re(yt = unescape(encodeURIComponent(kt)))), t.setData({
          WID: kt
        })
      } else if (bt.startsWith("23")) {
        var Yt = se(bt.substring(2, 40)),
          jt = (0, Mt.GetCFG)("WPD", Yt);
        Yt != jt && Jt("AB01" + re(Yt = unescape(encodeURIComponent(jt)))), t.setData({
          WPD: jt
        })
      } else bt.startsWith("24") && t.setData({
        LKV: se(bt.substring(2, 40))
      })
    }
  },
  onLoad: function (e) {
    t = this, Ut = 0, ee = 0, Wt = Number(e.GM), Yt = 0;
    var a = (0, Mt.GetGIF)(1);
    a.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var n = RegExp.$2;
    (a = (0, Mt.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var i = RegExp.$2;
    (a = (0, Mt.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var o = RegExp.$2;
    (a = (0, Mt.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var r = RegExp.$2;
    (a = (0, Mt.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var s = RegExp.$2;
    R = (0, Mt.GetCFG)("UEN");
    var c = (0, Mt.GetCFG)("ShowM");
    t.setData({
      GIF1: "data:image/gif;base64," + n,
      GIF2: "data:image/gif;base64," + i,
      GIF3: "data:image/gif;base64," + o,
      GIF4: "data:image/gif;base64," + r,
      GIF5: "data:image/gif;base64," + s,
      UEN: R,
      ShowM: c,
      RollV: 5.33,
      TestV: "5.34测试三",
      UPDate: "5.34",
      APP: "1.19",
      GM: Wt,
      ADD: Yt,
      CAN: Nt,
      BackIMG: (0, Mt.GetCFG)("BIMG", "/img/bc1.gif")
    }), "5.34测试三" != (0, Mt.GetCFG)("TVer") && Wt && ((0, Mt.SetCFG)("TVer", "5.34测试三"), wx.showModal({
      title: "有新测试固件:5.34测试三",
      editable: !1,
      confirmText: "知道了",
      showCancel: !1
    })), 2 != Wt && 1 != Number(e.Test) || (this.MSG("", "EE7876EF3A7D80010216323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000000000000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), Rt.onBLEConnectionStateChange((function () {
      Ht.navigateBack({
        delta: 0
      })
    })), Rt.onBLECharacteristicValueChange1(this.MSG)
  },
  onUnload: function () {
    Rt.onBLEConnectionStateChange((function () {})), Rt.closeBLEConnection()
  },
  onShow: function (t) {
    a = 0
  },
  onHide: function () {
    a = 1
  }
});