var t, e, a, n, i, o, r, s, c, u, f, F, h, d, l, S, p, T, g, B, C, D, m, w, O, v, x, E, A, I, b, G, R, N, $, L, M, U, W, V, K, P, y, k, Y, H, j, q, Z, _, z, Q, J, X, tt, et, at, nt, it, ot, rt, st, ct, ut, ft, Ft, ht, dt, lt, St, pt, Tt, gt, Bt, Ct, Dt, mt, wt, Ot, vt, xt = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  Et = require("../../@babel/runtime/helpers/asyncToGenerator"),
  At = require("../../6CA8B5449E166AAF0ACEDD43BE69AD44.js"),
  It = require("../../CCB772C49E166AAFAAD11AC3E189AD44.js"),
  bt = 0,
  Gt = 0,
  Rt = 0,
  Nt = "设备连接成功",
  $t = "1,27,30,欢迎",
  Lt = "1,57,30,使用",
  Mt = 0,
  Ut = "ff",
  Wt = "ff",
  Vt = "ff",
  Kt = 0,
  Pt = wx;

function yt(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  Pt.showModal({
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

function kt(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Pt.showModal({
    title: N ? e : t,
    editable: !0,
    placeholderText: (N ? "Range:" : "范围:") + a + "-" + n,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(n) || e < Number(a) || !isFinite(e)) && 2 != Gt) return void(0, At.Toast)(N ? "Beyond the set range!" : "超出设置范围!");
        i(e)
      }
    }
  })
}

function Yt(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Pt.showModal({
    title: N ? e : t,
    editable: !0,
    placeholderText: N ? n : a,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, At.Toast)(N ? "Input cannot be empty!" : "输入不能为空!");
        i(e)
      }
    }
  })
}

function Ht(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Pt.showModal({
    title: N ? e : t,
    content: N ? n : a,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      t.confirm && i(t)
    }
  })
}

function jt(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function qt(t) {
  var e = Math.floor(t / 3600),
    a = Math.floor(t % 3600 / 60),
    n = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(a).padStart(2, "0") + ":" + String(n).padStart(2, "0")
}

function Zt(t) {
  return _t.apply(this, arguments)
}

function _t() {
  return (_t = Et(xt().mark((function t(e) {
    return xt().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (0 == Qt) {
            t.next = 3;
            break
          }
          return (0, At.Toast)(N ? "There are unfinished sending tasks" : "有发送任务未完成"), t.abrupt("return");
        case 3:
          return e = e.substring(0, 40), t.next = 6, It.easySendData1(e, !0);
        case 6:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var zt = [""],
  Qt = 0;

function Jt(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  0 == Qt ? Pt.showModal({
    title: N ? "Confirm whether to send" : "确认是否发送",
    editable: !1,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (a) {
      if (a.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), Qt = 0, (zt = [])[0] = "F1" + ae(RegExp.$1);
        for (var n = e ? RegExp.$2 : te(RegExp.$2), i = 0; i < n.length; i += 240) Qt++, zt[Qt] = "F2" + n.slice(i, i + 240);
        zt[zt.length] = "F3", Qt = 0, Xt()
      }
    }
  }) : (0, At.Toast)(N ? "There are unfinished sending tasks" : "有发送任务未完成")
}

function Xt(t) {
  var e = zt[Qt];
  It.easySendData1(e, !0), (0, At.Toast)((N ? "Sending:" : "发送进度:") + (Qt / zt.length * 100).toFixed(2) + "%"), Qt++
}

function te(t) {
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

function ee() {
  0 == Mt ? t.setData({
    Cr0: "#" + Ut + Wt + Vt
  }) : 1 == Mt ? t.setData({
    Cr1: "#" + Ut + Wt + Vt
  }) : 2 == Mt ? t.setData({
    Cr2: "#" + Ut + Wt + Vt
  }) : 3 == Mt ? t.setData({
    Cr3: "#" + Ut + Wt + Vt
  }) : 4 == Mt ? t.setData({
    Cr4: "#" + Ut + Wt + Vt
  }) : 5 == Mt ? t.setData({
    Cr5: "#" + Ut + Wt + Vt
  }) : 6 == Mt ? t.setData({
    Cr6: "#" + Ut + Wt + Vt
  }) : 7 == Mt ? t.setData({
    Cr7: "#" + Ut + Wt + Vt
  }) : 8 == Mt && t.setData({
    Cr8: "#" + Ut + Wt + Vt
  })
}

function ae(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString(16).padStart(2, "0");
  return e && (a = a.padEnd(2 * e, "0")), a
}

function ne(t) {
  for (var e = "", a = 0, n = "", i = 0; i < t.length / 2; i++) {
    var o = t.substr(2 * i, 2),
      r = parseInt(o, 16);
    a && r ? (n += "%" + o, (a -= 1) || (e += decodeURIComponent(n), n = "")) : r >= 224 & r <= 239 ? (n += "%" + o, a = 2) : r && (e += String.fromCharCode(r))
  }
  return e
}

function ie(t) {
  return Math.floor(100 * t).toString(16).padStart(8, "0")
}

function oe(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function re(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    n = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return a ? parseFloat(n) : n
}

function se(t, e) {
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
    Zt("FF"), (2 == Rt || Gt) && this.setData({
      Panel: 2 == Gt ? 2 : 3,
      ShowBar: 2 == Gt ? 0 : bt < Number("5.31") ? 4 : 8,
      LOGO: N ? "Preview" : "预览"
    })
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, At.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    Yt("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      Zt("FA75" + ae(t)), Zt("FF")
    }))
  },
  BTRST: function (t) {
    Ht("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      Zt("F601"), (0, At.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Pt.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    Ht("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      Zt("F001"), (0, At.Toast)(N ? "The device is restarting" : "设备正在重启!"), Pt.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    Ht("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      Zt("AA01"), (0, At.Toast)(N ? "Data cleared to zero" : "数据已清零!"), Pt.navigateBack({
        delta: 0
      })
    }))
  },
  BTBC: function (t) {
    this.setData({
      Panel: 1
    })
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), kt("设置输出最大功率", "Set maximum output power", "500", "10000", (function (t) {
      Zt("F84E" + ie(t)), Zt("F84D" + ie(t)), Zt("FF")
    }))
  },
  BTLOGO0: function (e) {
    "预览" == t.data.LOGO || "Preview" == t.data.LOGO ? (Pt.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: !0
    }), t.SetLOGO($t + "|" + Lt, t)) : "发送" != t.data.LOGO && "Send" != t.data.LOGO || Jt(n, 1), t.setData({
      ShowBar: 20,
      LOGO: N ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (e) {
    Yt("设置第一行LOGO", "Set the first line logo", $t, $t, (function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) $t = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) $t = "1,27,30," + RegExp.$1, Lt = "1,57,30," + RegExp.$2;
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, At.Toast)(N ? "Input format error" : "输入格式错误");
        $t = "1,27,30," + RegExp.$1
      }
      t.setData({
        LOGO1: $t,
        LOGO2: Lt,
        LOGO: N ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO2: function (e) {
    Yt("设置第二行LOGO", "Set second line logo", Lt, Lt, (function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Lt = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) $t = "1,27,30," + RegExp.$1, Lt = "1,57,30," + RegExp.$2;
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, At.Toast)(N ? "Input format error" : "输入格式错误");
        Lt = "1,57,30," + RegExp.$1
      }
      t.setData({
        LOGO1: $t,
        LOGO2: Lt,
        LOGO: N ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO3: function (t) {
    Zt("F9C0" + oe(1 - Dt)), Zt("FF")
  },
  SetLOGO: function (t, e) {
    Pt.createSelectorQuery().select("#LOGO").fields({
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
        l = -1;
      n = "DataStart=LOGO{";
      for (var S = 0; S < 60; S += 1) {
        for (var p = o.getImageData(0, S, 60, 1).data, T = 0; T < 60; T += 1) {
          T % 8 == 0 && (T && (n += d[l].toString(16).padStart(2, "0")), l += 1);
          var g = .299 * p[4 * T] + .587 * p[4 * T + 1] + .114 * p[4 * T + 2];
          d[l] = d[l] >> 1, d[l] = d[l] | (g < 100 ? 0 : 128)
        }
        n += (d[l] >> 4).toString(16).padStart(2, "0")
      }
      n += "}DataEnd", Pt.hideToast(), e.setData({
        LOGO: N ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    Zt("F962" + oe(1 - lt)), Zt("FF")
  },
  BTCAN1: function (t) {
    Ht("确认是否切换为华为", "Switch to Huawei", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Zt("FC530101"), (0, At.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Pt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN2: function (t) {
    Ht("确认是否切换为英可瑞", "Switch to Increase", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Zt("FC530201"), (0, At.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Pt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN4: function (t) {
    Ht("确认是否切换为中兴3000", "Switch to ZTE3000", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Zt("FC530401"), (0, At.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Pt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN8: function (t) {
    Ht("确认是否切换为英飞源", "Switch to Infy", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Zt("FC530801"), (0, At.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Pt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN16: function (t) {
    Ht("确认是否切换为EPS6020", "Switch to EPS6020", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Zt("FC531001"), (0, At.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Pt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN32: function (t) {
    Ht("确认是否切换为中兴4875", "Switch to ZTE4875", "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == Gt) {
        for (var e = parseInt(g, 16), a = e.toString(), n = 0, i = 0; i < a.length; i++) n += a.charCodeAt(i);
        Zt("C83F" + Math.floor(Math.floor(e / 611) * n).toString(16).slice(-6)), Zt("FC532001"), Zt("FF")
      } else Zt("FC532001"), (0, At.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Pt.navigateBack({
        delta: 0
      })
    }))
  },
  BTLEDK2: function (t) {
    kt("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      Zt("F968" + oe(t)), Zt("FF")
    }))
  },
  BTLEDK1: function (t) {
    kt("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      Zt("F969" + oe(t)), Zt("FF")
    }))
  },
  BTLEDKS1: function (t) {
    kt("设置息屏时间", "Set screen rest time", "5", "255", (function (t) {
      Zt("F96D" + oe(t)), Zt("FF")
    }))
  },
  BTLEDKS2: function (t) {
    kt("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      Zt("F96A" + oe(t)), Zt("FF")
    }))
  },
  BTStart1: function (t) {
    kt("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      Zt("F96B" + oe(t)), Zt("FF")
    }))
  },
  BTStart2: function (t) {
    Zt("F96C" + oe(1 - K)), Zt("FF")
  },
  BTGIF1: function (t) {
    Zt("F96F" + oe(1 - ct)), Zt("FF")
  },
  BT_GIF1: function (t) {
    Jt((0, At.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    Jt((0, At.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    Jt((0, At.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    Jt((0, At.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    Jt((0, At.GetGIF)(5))
  },
  BTCr1: function (t) {
    Zt("F53000" + jt(this.data.Cr0) + "0000f01c"), Zt("F53100" + jt(this.data.Cr1) + "00209F26"), Zt("F53200" + jt(this.data.Cr2) + "00479F26"), Zt("F53300" + jt(this.data.Cr3) + "006e9F26"), Zt("F53400" + jt(this.data.Cr4) + "00969F3e"), Zt("F53500" + jt(this.data.Cr5) + "A3204d4d"), Zt("F53600" + jt(this.data.Cr6) + "50d64f1A"), Zt("F53700" + jt(this.data.Cr7) + "00d64f1A"), Zt("F53801" + jt(this.data.Cr8) + "A3774d68")
  },
  CK0: function (t) {
    Mt = 0, this.data.Cr0.match(/#(..)(..)(..)/), Ut = RegExp.$1, Wt = RegExp.$2, Vt = RegExp.$3, this.setData({
      CR: parseInt(Ut, 16),
      CG: parseInt(Wt, 16),
      CB: parseInt(Vt, 16)
    })
  },
  CK1: function (t) {
    Mt = 1, this.data.Cr1.match(/#(..)(..)(..)/), Ut = RegExp.$1, Wt = RegExp.$2, Vt = RegExp.$3, this.setData({
      CR: parseInt(Ut, 16),
      CG: parseInt(Wt, 16),
      CB: parseInt(Vt, 16)
    })
  },
  CK2: function (t) {
    Mt = 2, this.data.Cr2.match(/#(..)(..)(..)/), Ut = RegExp.$1, Wt = RegExp.$2, Vt = RegExp.$3, this.setData({
      CR: parseInt(Ut, 16),
      CG: parseInt(Wt, 16),
      CB: parseInt(Vt, 16)
    })
  },
  CK3: function (t) {
    Mt = 3, this.data.Cr3.match(/#(..)(..)(..)/), Ut = RegExp.$1, Wt = RegExp.$2, Vt = RegExp.$3, this.setData({
      CR: parseInt(Ut, 16),
      CG: parseInt(Wt, 16),
      CB: parseInt(Vt, 16)
    })
  },
  CK4: function (t) {
    Mt = 4, this.data.Cr4.match(/#(..)(..)(..)/), Ut = RegExp.$1, Wt = RegExp.$2, Vt = RegExp.$3, this.setData({
      CR: parseInt(Ut, 16),
      CG: parseInt(Wt, 16),
      CB: parseInt(Vt, 16)
    })
  },
  CK5: function (t) {
    Mt = 5, this.data.Cr5.match(/#(..)(..)(..)/), Ut = RegExp.$1, Wt = RegExp.$2, Vt = RegExp.$3, this.setData({
      CR: parseInt(Ut, 16),
      CG: parseInt(Wt, 16),
      CB: parseInt(Vt, 16)
    })
  },
  CK6: function (t) {
    Mt = 6, this.data.Cr6.match(/#(..)(..)(..)/), Ut = RegExp.$1, Wt = RegExp.$2, Vt = RegExp.$3, this.setData({
      CR: parseInt(Ut, 16),
      CG: parseInt(Wt, 16),
      CB: parseInt(Vt, 16)
    })
  },
  CK7: function (t) {
    Mt = 7, this.data.Cr7.match(/#(..)(..)(..)/), Ut = RegExp.$1, Wt = RegExp.$2, Vt = RegExp.$3, this.setData({
      CR: parseInt(Ut, 16),
      CG: parseInt(Wt, 16),
      CB: parseInt(Vt, 16)
    })
  },
  CK8: function (t) {
    Mt = 8, this.data.Cr8.match(/#(..)(..)(..)/), Ut = RegExp.$1, Wt = RegExp.$2, Vt = RegExp.$3, this.setData({
      CR: parseInt(Ut, 16),
      CG: parseInt(Wt, 16),
      CB: parseInt(Vt, 16)
    })
  },
  CRC: function (t) {
    Ut = t.detail.value.toString(16).padStart(2, "0"), ee()
  },
  CGC: function (t) {
    Wt = t.detail.value.toString(16).padStart(2, "0"), ee()
  },
  CBC: function (t) {
    Vt = t.detail.value.toString(16).padStart(2, "0"), ee()
  },
  BTCKA2: function (t) {
    Zt("F972" + oe(1 - ut)), Zt("FF")
  },
  BTEN1: function (t) {
    (0, At.SetCFG)("UEN", 1 - N), Zt("F970" + oe(1 - N)), Zt("FF")
  },
  BTBLE1: function (t) {
    Yt("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      Zt("FA73" + ae(t = unescape(encodeURIComponent(t)))), Zt("FF")
    }))
  },
  BTBLE2: function (t) {
    Yt("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      Zt("FA74" + ae(t)), Zt("FF")
    }))
  },
  BTKEY1: function (t) {
    Zt("F967" + oe(1 - I)), Zt("FF")
  },
  BTKEY2: function (t) {
    Zt("F966" + oe(1 - $)), Zt("FF")
  },
  BTDDT1: function (t) {
    Zt("F96E" + oe(St >= 3 ? 0 : St + 1)), Zt("FF")
  },
  BTUP6: function (t) {
    Yt("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      Zt("AB00" + ae(t = unescape(encodeURIComponent(t)))), Zt("FF")
    }))
  },
  BTUP7: function (t) {
    Yt("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      Zt("AB01" + ae(t = unescape(encodeURIComponent(t)))), Zt("FF")
    }))
  },
  BTUP1: function (t) {
    Kt || this.data.CVer >= this.data.UPDate && !Gt || Pt.showModal({
      title: N ? "Start Upgrade" : "开始升级",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Zt("A700000000" + ae("NewUI")), void(0, At.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP8: function (t) {
    Pt.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    Pt.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    Pt.setClipboardData({
      data: "设备ID:" + g
    })
  },
  BTUP0: function (t) {
    Pt.showModal({
      title: N ? "Firmware rollback" : "固件回退",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Zt("A7" + ae("8", 4) + ae("NewUI")), void(0, At.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP9: function (t) {
    Pt.showModal({
      title: N ? "Write Test Firmware" : "刷入测试固件",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Zt("A700000000" + ae("NewTest")), void(0, At.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUFS: function (t) {
    kt("设置温度加速值", "Set temperature acceleration value", "3", "15", (function (t) {
      Zt("F963" + oe(t)), Zt("FF")
    }))
  },
  BTAFS: function (t) {
    kt("设置电流加速值", "Set current acceleration value", "0.1", "2.0", (function (t) {
      Zt("F964" + oe(10 * t)), Zt("FF")
    }))
  },
  BTLFS: function (t) {
    kt("设置初始风速值", "Set initial wind speed value", "30", "150", (function (t) {
      Zt("F965" + oe(t)), Zt("FF")
    }))
  },
  BTMFS: function (t) {
    kt("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      Zt("F9C5" + oe(t)), Zt("FF")
    }))
  },
  BTTMC: function (t) {
    kt("设置超温限制温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      Zt("F84A" + ie(t)), Zt("FF")
    }))
  },
  BTTMC1: function (t) {
    kt("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      Zt("F84B" + ie(t)), Zt("FF")
    }))
  },
  BTTMW: function (t) {
    kt("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      Zt("F84C" + ie(t)), Zt("FF")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), wx.pageScrollTo({
      scrollTop: 95,
      duration: 300
    }), i < 10 || o > 0 ? (0, At.Toast)(N ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Zt("C1"), Zt("FF"), kt("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / i).toFixed(4),
        a = Number(t / y).toFixed(4);
      Zt("C3" + ie(100 * a) + ie(100 * e)), 2 == R ? (Zt("F876" + ie(20 * a)), Zt("F877" + ie(100 * a))) : 1 == R ? (Zt("F876" + ie(41 * a)), Zt("F877" + ie(58.5 * a))) : 4 == R ? (Zt("F876" + ie(41 * a)), Zt("F877" + ie(59 * a))) : 16 == R ? (Zt("F876" + ie(44 * a)), Zt("F877" + ie(61 * a))) : 32 == R && (Zt("F876" + ie(41.2 * a)), Zt("F877" + ie(59.4 * a))), Zt("FF"), Zt("A80" + E + ie(50 * a) + ie(k)), Zt("FF")
    })))
  },
  BTOVT1: function (t) {
    kt("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      Zt("FB47" + ie(100 * t)), Zt("FF")
    }))
  },
  BTOVTU: function (t) {
    Zt("FB47" + ie(100 * (nt + .003))), Zt("FF")
  },
  BTOVTD: function (t) {
    Zt("FB47" + ie(100 * (nt - .003))), Zt("FF")
  },
  BTOVD1: function (t) {
    kt("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      Zt("FB46" + ie(100 * t)), Zt("FF")
    }))
  },
  BTOVDU: function (t) {
    Zt("FB46" + ie(100 * (ot + .003))), Zt("FF")
  },
  BTOVDD: function (t) {
    Zt("FB46" + ie(100 * (ot - .003))), Zt("FF")
  },
  BTOVS: function (t) {
    yt(N ? "Set voltage range" : "设置电压范围", (N ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Zt("F876" + ie(Number(RegExp.$1))), Zt("F877" + ie(Number(RegExp.$2))), Zt("FF")) : (0, At.Toast)(N ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    kt("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      Zt("F8F3" + ie(t)), Zt("FF")
    }))
  },
  BTOVT3: function (t) {
    i < 10 || o > 0 ? (0, At.Toast)(N ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Zt("C2"), Zt("FF"), kt("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / i).toFixed(4);
      Zt("C4" + ie(100 * Number(t / y).toFixed(4)) + ie(100 * e)), Zt("FF")
    })))
  },
  BTOVT2: function (t) {
    kt("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      Zt("FBF2" + ie(100 * t)), Zt("FF")
    }))
  },
  BTO2TU: function (t) {
    Zt("FBF2" + ie(100 * (Tt + .003))), Zt("FF")
  },
  BTO2TD: function (t) {
    Zt("FBF2" + ie(100 * (Tt - .003))), Zt("FF")
  },
  BTOVD2: function (t) {
    kt("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      Zt("FBF1" + ie(100 * t)), Zt("FF")
    }))
  },
  BTO2DU: function (t) {
    Zt("FBF1" + ie(100 * (gt + .003))), Zt("FF")
  },
  BTO2DD: function (t) {
    Zt("FBF1" + ie(100 * (gt - .003))), Zt("FF")
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 145,
      duration: 300
    }), o < 5 || y - i < .2 ? (0, At.Toast)(N ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (Zt("C0"), Zt("FF"), kt("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / o).toFixed(4);
      Zt("C5" + ie(100 * Number(t / k).toFixed(4)) + ie(100 * e)), Zt("FF")
    })))
  },
  BTOAT1: function (t) {
    kt("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      Zt("FB45" + ie(100 * t)), Zt("FF")
    }))
  },
  BTOAT2: function (t) {
    Zt("FB45" + ie(100 * (it - .003))), Zt("FF")
  },
  BTOAT3: function (t) {
    Zt("FB45" + ie(100 * (it + .003))), Zt("FF")
  },
  BTOAS1: function (t) {
    kt("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      Zt("F8F4" + ie(t)), Zt("FF")
    }))
  },
  BTCLV: function (t) {
    kt("设置最小电流过滤", "Set minimum current filtering", "0.00", "2.00", (function (t) {
      Zt("F848" + ie(t)), Zt("FF")
    }))
  },
  BTOAD1: function (t) {
    kt("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      Zt("FB44" + ie(100 * t)), Zt("FF")
    }))
  },
  BTOAD2: function (t) {
    Zt("FB44" + ie(100 * (rt - .003))), Zt("FF")
  },
  BTOAD3: function (t) {
    Zt("FB44" + ie(100 * (rt + .003))), Zt("FF")
  },
  BTOAS: function (t) {
    yt(N ? "Set current range" : "设置电流范围", (N ? "Now:" : "当前范围:") + z + "-" + Q, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Zt("F878" + ie(Number(RegExp.$1))), Zt("F879" + ie(Number(RegExp.$2))), Zt("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (Zt("F879" + ie(t)), Zt("FF")) : (0, At.Toast)(N ? "Input format error" : "输入格式错误!"))
    }))
  },
  pwrbt: function (t) {
    Zt("A6" + oe(1 - A)), Zt("FF")
  },
  owbt: function (t) {
    kt("设置输出功率限制", "Set output power limit", "300", U, (function (t) {
      Zt("F84D" + ie(t)), Zt("FF")
    }))
  },
  tibt: function (t) {
    kt("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      Zt("A9" + function (t) {
        return Math.floor(t).toString(16).padStart(4, "0")
      }(t)), Zt("FF")
    }))
  },
  BTYC1: function (t) {
    kt("设置预充电压", "Set pre charge voltage", "0", X, (function (t) {
      Zt("F8F6" + ie(t)), Zt("FF")
    }))
  },
  BTYC2: function (t) {
    kt("设置预充电流", "Set pre charge current", z, Q, (function (t) {
      Zt("F8F5" + ie(t)), Zt("FF")
    }))
  },
  ks1bt: function (t) {
    var e = v[0],
      a = v[1] > Q ? Q : v[1];
    e > X || e < J ? kt("设置输出电压", "Set output voltage", J, X, (function (t) {
      Zt("A80" + (E = 1) + ie(t) + ie(a)), Zt("FF")
    })) : (Zt("A80" + (E = 1) + ie(e) + ie(a)), Zt("FF"))
  },
  ks2bt: function (t) {
    var e = x[0],
      a = x[1] > Q ? Q : x[1];
    e > X || e < J ? kt("设置输出电压", "Set output voltage", J, X, (function (t) {
      Zt("A80" + (E = 2) + ie(t) + ie(a)), Zt("FF")
    })) : (Zt("A80" + (E = 2) + ie(e) + ie(a)), Zt("FF"))
  },
  ks3bt: function (t) {
    var e = b[0],
      a = b[1] > Q ? Q : b[1];
    e > X || e < J ? kt("设置输出电压", "Set output voltage", J, X, (function (t) {
      Zt("A80" + (E = 3) + ie(t) + ie(a)), Zt("FF")
    })) : (Zt("A80" + (E = 3) + ie(e) + ie(a)), Zt("FF"))
  },
  ks4bt: function (t) {
    var e = G[0],
      a = G[1] > Q ? Q : G[1];
    e > X || e < J ? kt("设置输出电压", "Set output voltage", J, X, (function (t) {
      Zt("A80" + (E = 4) + ie(t) + ie(a)), Zt("FF")
    })) : (Zt("A80" + (E = 4) + ie(e) + ie(a)), Zt("FF"))
  },
  hqbt1: function (t) {
    kt("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      Zt("F961" + oe(t)), Zt("FF")
    }))
  },
  hqbt0: function (t) {
    Zt("F961" + oe(0 == st ? 10 : 0)), Zt("FF")
  },
  nvbt: function (t) {
    yt(N ? "Set Output Voltage" : "设置输出电压", (N ? "Range:" : "范围:") + J + "-" + X, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) Zt(t.substr(2, 4) + ie(t.substr(6))), Zt("FF");
        else if (t.startsWith("FFC8")) Zt(t.substr(2, 4) + t.substr(6)), Zt("FF");
      else {
        if (Zt("A1" + ae(t)), (t = parseFloat(t)) > X || t < J || !isFinite(t)) return void(0, At.Toast)(N ? "Beyond the set range!" : "超出设置范围!");
        Zt("A80" + E + ie(t) + ie(k)), Zt("FF")
      } else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && Jt(e)
        }
      })
    }))
  },
  nabt: function (t) {
    kt("设置输出电流", "Set output current", z, Q, (function (t) {
      Zt("A80" + E + ie(y) + ie(t)), Zt("FF")
    }))
  },
  sa2bt2: function (t) {
    kt("设置二段电流", "Set second stage current", z, Q, (function (t) {
      Zt("F857" + ie(t)), Zt("FF")
    }))
  },
  sa2bt1: function (t) {
    kt("设置二段电压", "Set second stage voltage", J, X, (function (t) {
      Zt("F858" + ie(t)), Zt("FF")
    }))
  },
  sa2bt0: function (t) {
    Zt("F858" + (0 == M ? ie(y - 3) : "00000000")), Zt("F857" + (0 == M ? ie(10) : "00000000")), Zt("FF")
  },
  sdbt1: function (t) {
    kt("设置延时时间(分钟)", "Set delay time (minutes)", 1, 600, (function (t) {
      Zt("F859" + ie(t)), Zt("FF")
    }))
  },
  sdbt2: function (t) {
    kt("设置关机电流", "SSet startup delay current", "0.00", "2.00", (function (t) {
      Zt("F8F0" + ie(t)), Zt("FF")
    }))
  },
  sdbt0: function (t) {
    Zt("F859" + (0 == ht ? ie(30) : "00000000")), Zt("FF")
  },
  onLoad: function (n) {
    var xt = this;
    t = this, Rt = 0, Qt = 0, Gt = n.GM ? n.GM : (0, At.GetCFG)("GM"), Kt = 0;
    var Et = (0, At.GetGIF)(1);
    Et.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var $t = RegExp.$2;
    (Et = (0, At.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Lt = RegExp.$2;
    (Et = (0, At.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Mt = RegExp.$2;
    (Et = (0, At.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Ut = RegExp.$2;
    (Et = (0, At.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Wt = RegExp.$2;
    N = (0, At.GetCFG)("UEN");
    var Vt = (0, At.GetCFG)("ShowM");
    t.setData({
      GIF1: "data:image/gif;base64," + $t,
      GIF2: "data:image/gif;base64," + Lt,
      GIF3: "data:image/gif;base64," + Mt,
      GIF4: "data:image/gif;base64," + Ut,
      GIF5: "data:image/gif;base64," + Wt,
      UEN: N,
      ShowM: Vt,
      RollV: 5.3,
      TestV: "5.31测试一",
      UPDate: "5.31",
      APP: "1.15",
      GM: Gt,
      ADD: Kt,
      CAN: bt,
      BackIMG: (0, At.GetCFG)("BIMG", "/img/bc1.gif")
    }), "5.31测试一" != (0, At.GetCFG)("TVer") && Gt && ((0, At.SetCFG)("TVer", "5.31测试一"), wx.showModal({
      title: "有新测试固件:5.31测试一",
      editable: !1,
      confirmText: "知道了",
      showCancel: !1
    })), It.onBLEConnectionStateChange((function () {
      Pt.navigateBack({
        delta: 0
      })
    })), It.onBLECharacteristicValueChange1((function (n, Et) {
      if (!a) {
        (0, At.print)("NewUI:", "Msg:" + Et);
        var It = Et;
        if ("EE" == It.substring(0, 2)) {
          e = ne(It.substring(20, 40)), bt = .01 * parseInt(It.substring(16, 20), 16), R = 32 == (R = 16 == (R = 8 == (R = 4 == (R = 2 == (R = 1 == (R = se(It, 14)) ? "Huawei" : R) ? "Increase" : R) ? "ZTE3000" : R) ? "INFY" : R) ? "EPS6020" : R) ? "ZTE4875" : R, g = "0x" + It.substring(2, 14), e.startsWith("Cxjdwx") && (e = "未激活"), t.setData({
            CVer: bt.toFixed(2),
            SCAN: R,
            ID: g,
            ACT: e
          });
          var $t = (0, At.GetCFG)(g);
          Gt && ($t = (Number(g) + 19880914).toString(16).substring(4, 8)), Rt || Zt("A0" + ae($t))
        } else if (It.startsWith("A101")) t.setData({
          ShowBar: 0,
          Panel: 2,
          LOGO: N ? "Preview" : "预览"
        });
        else if (It.startsWith("A001")) {
          if (Rt = 2, ("Cxjdwx" == e || "未激活" == e) && !Gt) {
            var Lt = new Date;
            Zt("FD48" + ae(Lt.getFullYear() + "-" + (Lt.getMonth() + 1) + "-" + Lt.getDate()))
          }
          bt <= 5.28 && Zt("FF")
        } else if (It.startsWith("A000")) {
          if (Rt) return;
          Rt = 1, Pt.showModal({
            title: N ? "Enter Bluetooth password" : "输入蓝牙密码",
            editable: !0,
            placeholderText: "ID:" + g,
            confirmText: N ? "YES" : "确定",
            cancelText: N ? "Observer" : "我只看看",
            success: function (t) {
              t.confirm && ((0, At.SetCFG)(g, t.content), Zt("A0" + ae(t.content)), Rt = 0)
            }
          })
        } else if (It.startsWith("F101")) Xt();
        else if (It.startsWith("F201")) Xt();
        else if (It.startsWith("F301")) Qt = 0, zt = [], (0, At.Toast)(N ? "Send End!" : "发送完成!");
        else if (It.startsWith("01")) i = re(It, 2), o = re(It, 10), r = re(It, 18), s = re(It, 26), c = se(It, 34), u = se(It, 36), f = se(It, 38), xt.data.UEN ? "0" == f ? Nt = "Communication Abnormality" : 0 == i ? Nt = "Charger Output Abnormality" : 4 == c ? Nt = "Charger Shutdown" : 0 == c ? Nt = "Waiting For Battery Connection" : 1 == c ? Nt = "Charging" : 2 == c ? Nt = "In The Second Stage Of Charging" : 5 == c ? Nt = "Precharging" : 40 == c ? Nt = "Appointment Waiting" : 3 == c ? Nt = "Charging Completed" : 43 == c && (Nt = "Charging Completed(Turned Off)") : "0" == f ? Nt = "CAN通讯异常" : 0 == i ? Nt = "充电器输出异常" : 4 == c ? Nt = "充电器已关机" : 0 == c ? Nt = "等待接入电池" : 1 == c ? Nt = "正在充电中" : 5 == c ? Nt = "正在预充" : 2 == c ? Nt = "第二段充电中" : 40 == c ? Nt = "预约等待中" : 3 == c ? Nt = "充电完成" : 43 == c && (Nt = "充电完成(已关机)"), t.setData({
          STR: Nt,
          NFS: u,
          OL: f,
          OV: i,
          OA: o,
          OW: r,
          OT: s
        });
        else if (It.startsWith("02")) {
          F = re(It, 2), h = re(It, 10), d = re(It, 18), l = re(It, 26), S = se(It, 34), p = se(It, 36), T = se(It, 38);
          var Mt = Number(r / d * 100).toFixed(2),
            Ut = Number(d - r).toFixed(2);
          t.setData({
            IV: F,
            IA: h,
            IW: d,
            IT: l,
            ST0: S,
            ST1: p,
            ST2: T,
            EEI: d ? Mt : "0.00",
            EES: d ? Ut : "0.00"
          })
        } else if (It.startsWith("03")) B = re(It, 2), C = re(It, 10), D = re(It, 18), m = re(It, 26), w = se(It, 34), O = se(It, 36), t.setData({
          Ah: B,
          Wh: C,
          AH: D,
          WH: m,
          SWT: w,
          SMT: O
        });
        else if (It.startsWith("04")) t.setData({
          Ti: qt(re(It, 2)),
          TI: qt(re(It, 10)),
          NSD: qt(re(It, 18)),
          SOC: Number(re(It, 26)).toFixed(0)
        });
        else if (It.startsWith("10")) v = [re(It, 2, 1), re(It, 10, 1)], x = [re(It, 18, 1), re(It, 26, 1)], E = se(It, 34), A = se(It, 36), I = se(It, 38), 1 == E ? (k = v[1], y = v[0]) : 2 == E && (k = x[1], y = x[0]), 3 == E ? (k = b[1], y = b[0]) : 4 == E && (k = G[1], y = G[0]), t.setData({
          KS1: v,
          KS2: x,
          KSi: E,
          PON: A,
          KON: I,
          SV: y.toFixed(2),
          SA: k.toFixed(2)
        });
        else if (It.startsWith("11")) b = [re(It, 2, 1), re(It, 10, 1)], G = [re(It, 18, 1), re(It, 26, 1)], R = se(It, 34), N = se(It, 36), $ = se(It, 38), (0, At.SetCFG)("UEN", N), 1 == E ? (k = v[1], y = v[0]) : 2 == E && (k = x[1], y = x[0]), 3 == E ? (k = b[1], y = b[0]) : 4 == E && (k = G[1], y = G[0]), t.setData({
          KS3: b,
          KS4: G,
          CAN: R,
          UEN: N,
          KRC: $,
          SV: y.toFixed(2),
          SA: k.toFixed(2)
        });
        else if (It.startsWith("12")) L = re(It, 2), M = re(It, 10), U = re(It, 18), W = re(It, 26), V = se(It, 34), K = se(It, 36), P = se(It, 38), t.setData({
          SV2: L,
          SA2: M,
          SMW: U,
          UMW: W,
          WTi: V,
          ETi: K,
          Sleep: P
        });
        else if (It.startsWith("13")) Y = re(It, 2), H = re(It, 10), j = re(It, 18), q = se(It, 34), Z = se(It, 36), _ = se(It, 38), t.setData({
          TMW: Y,
          UMT: H,
          OMT: j,
          LEDK0: q,
          LEDK1: Z,
          LEDK2: _
        });
        else if (It.startsWith("14")) z = re(It, 2), Q = re(It, 10), J = re(It, 18), X = re(It, 26), tt = se(It, 34), et = se(It, 36), at = .1 * se(It, 38), t.setData({
          LSA: z,
          HSA: Q,
          LSV: J,
          HSV: X,
          UFS: tt,
          LFS: et,
          AFS: at.toFixed(1)
        }), z = Number(z), J = Number(J), Q = Number(Q), X = Number(X);
        else if (It.startsWith("15")) nt = .01 * re(It, 2), it = .01 * re(It, 10), ot = .01 * re(It, 18), rt = .01 * re(It, 26), st = se(It, 34), ct = se(It, 36), ut = se(It, 38), t.setData({
          OVT: nt.toFixed(4),
          OAT: it.toFixed(4),
          OVD: ot.toFixed(4),
          OAD: rt.toFixed(4),
          UHQ: st,
          GIF: ct,
          CKA2: ut
        });
        else if (It.startsWith("16")) ft = re(It, 2), Ft = re(It, 10), ht = re(It, 18), dt = re(It, 26), lt = se(It, 34), St = se(It, 36), pt = .01 * se(It, 38), t.setData({
          L2V: ft,
          H2V: Ft,
          USD: ht,
          NTC: lt,
          DDT: St,
          CLV: pt,
          SDU: dt
        });
        else if (It.startsWith("17")) Tt = .01 * re(It, 2), gt = .01 * re(It, 10), Bt = re(It, 18), Ct = re(It, 26), Dt = se(It, 34), mt = se(It, 36), wt = se(It, 38), t.setData({
          O2D: gt.toFixed(4),
          O2T: Tt.toFixed(4),
          OVS: Bt,
          OAS: Ct,
          UEG: Dt,
          UCN: mt,
          MFS: wt
        });
        else if (It.startsWith("18")) Ot = re(It, 2), vt = re(It, 10), t.setData({
          YCA: Ot,
          YCV: vt
        });
        else if (It.startsWith("20")) {
          var Wt = ne(It.substring(2, 40));
          t.setData({
            SSID: Wt
          })
        } else It.startsWith("21") ? t.setData({
          UPWD: ne(It.substring(2, 40))
        }) : It.startsWith("22") ? t.setData({
          WID: ne(It.substring(2, 40))
        }) : It.startsWith("23") && t.setData({
          WPD: ne(It.substring(2, 40))
        })
      }
    }))
  },
  onUnload: function () {
    It.onBLEConnectionStateChange((function () {})), It.closeBLEConnection()
  },
  onShow: function (t) {
    a = 0
  },
  onHide: function () {
    a = 1
  }
});