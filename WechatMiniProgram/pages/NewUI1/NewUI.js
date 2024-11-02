var t, e, a, n, i, r, o, s, c, f, u, F, h, S, d, C, l, B, T, p, g, D, G, m, w, v, O, A, b, I, x, E, M, N, U, P, R, W, L, V, K, y, $, k, Y, H, j, q, _, Z, z, Q, J, X, tt, et, at, nt, it, rt, ot, st, ct, ft, ut, Ft, ht, St, dt, Ct, lt, Bt, Tt, pt, gt, Dt, Gt, mt, wt, vt, Ot, At, bt, It, xt, Et, Mt = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  Nt = require("../../@babel/runtime/helpers/asyncToGenerator"),
  Ut = require("../../91BD48529E166AAFF7DB205549519522.js"),
  Pt = require("../../CC0EEE579E166AAFAA68865089619522.js"),
  Rt = 0,
  Wt = 0,
  Lt = 0,
  Vt = "设备连接成功",
  Kt = "欢迎使用",
  yt = "1,27,30,欢迎",
  $t = "1,57,30,使用",
  kt = 0,
  Yt = "ff",
  Ht = "ff",
  jt = "ff",
  qt = ["/img/bc1.gif", "", "", "", ""],
  _t = 0,
  Zt = "80",
  zt = 0,
  Qt = wx,
  Jt = "#ffffff";

function Xt(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  Qt.showModal({
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

function te(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Qt.showModal({
    title: N ? e : t,
    editable: !0,
    placeholderText: (N ? "Range:" : "范围:") + a + "-" + n,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(n) || e < Number(a) || !isFinite(e)) && 2 != Wt) return void(0, Ut.Toast)(N ? "Beyond the set range!" : "超出设置范围!");
        i(e)
      }
    }
  })
}

function ee(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Qt.showModal({
    title: N ? e : t,
    editable: !0,
    placeholderText: N ? n : a,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, Ut.Toast)(N ? "Input cannot be empty!" : "输入不能为空!");
        i(e)
      }
    }
  })
}

function ae(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Qt.showModal({
    title: N ? e : t,
    content: N ? n : a,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      t.confirm && i(t)
    }
  })
}

function ne(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function ie(t) {
  var e = Math.floor(t / 3600),
    a = Math.floor(t % 3600 / 60),
    n = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(a).padStart(2, "0") + ":" + String(n).padStart(2, "0")
}

function re(t) {
  return oe.apply(this, arguments)
}

function oe() {
  return (oe = Nt(Mt().mark((function t(e) {
    return Mt().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (0 == ce) {
            t.next = 3;
            break
          }
          return (0, Ut.Toast)(N ? "There are unfinished sending tasks" : "有发送任务未完成"), t.abrupt("return");
        case 3:
          return e = e.substring(0, 40), t.next = 6, Pt.easySendData1(e, !0);
        case 6:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var se = [""],
  ce = 0;

function fe(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  0 == ce ? Qt.showModal({
    title: N ? "Confirm whether to send" : "确认是否发送",
    editable: !1,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (a) {
      if (a.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), ce = 0, (se = [])[0] = "F1" + Se(RegExp.$1);
        for (var n = e ? RegExp.$2 : Fe(RegExp.$2), i = 0; i < n.length; i += 240) ce++, se[ce] = "F2" + n.slice(i, i + 240);
        se[se.length] = "F3", ce = 0, ue()
      }
    }
  }) : (0, Ut.Toast)(N ? "There are unfinished sending tasks" : "有发送任务未完成")
}

function ue(t) {
  var e = se[ce];
  Pt.easySendData1(e, !0), (0, Ut.Toast)((N ? "Sending:" : "发送进度:") + (ce / se.length * 100).toFixed(2) + "%"), ce++
}

function Fe(t) {
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

function he() {
  0 == t.data.UI && kt >= 10 && (kt = 0), 1 == t.data.UI && kt < 10 && (kt = 10), 0 == kt ? t.setData({
    Cr0: "#" + Yt + Ht + jt
  }) : 1 == kt ? t.setData({
    Cr1: "#" + Yt + Ht + jt
  }) : 2 == kt ? t.setData({
    Cr2: "#" + Yt + Ht + jt
  }) : 3 == kt ? t.setData({
    Cr3: "#" + Yt + Ht + jt
  }) : 4 == kt ? t.setData({
    Cr4: "#" + Yt + Ht + jt
  }) : 5 == kt ? t.setData({
    Cr5: "#" + Yt + Ht + jt
  }) : 6 == kt ? t.setData({
    Cr6: "#" + Yt + Ht + jt
  }) : 7 == kt ? t.setData({
    Cr7: "#" + Yt + Ht + jt
  }) : 8 == kt ? t.setData({
    Cr8: "#" + Yt + Ht + jt
  }) : 10 == kt ? t.setData({
    Cr10: "#" + Yt + Ht + jt
  }) : 11 == kt ? t.setData({
    Cr11: "#" + Yt + Ht + jt
  }) : 12 == kt ? t.setData({
    Cr12: "#" + Yt + Ht + jt
  }) : 13 == kt ? t.setData({
    Cr13: "#" + Yt + Ht + jt
  }) : 14 == kt ? t.setData({
    Cr14: "#" + Yt + Ht + jt
  }) : 15 == kt ? t.setData({
    Cr15: "#" + Yt + Ht + jt
  }) : 16 == kt ? t.setData({
    Cr16: "#" + Yt + Ht + jt
  }) : 17 == kt && t.setData({
    Cr17: "#" + Yt + Ht + jt
  })
}

function Se(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString(16).padStart(2, "0");
  return e && (a = a.padEnd(2 * e, "0")), a
}

function de(t) {
  for (var e = "", a = 0, n = "", i = 0; i < t.length / 2; i++) {
    var r = t.substr(2 * i, 2),
      o = parseInt(r, 16);
    a && o ? (n += "%" + r, (a -= 1) || (e += decodeURIComponent(n), n = "")) : o >= 224 & o <= 239 ? (n += "%" + r, a = 2) : o && (e += String.fromCharCode(o))
  }
  return e
}

function Ce(t) {
  return Math.floor(100 * t).toString(16).padStart(8, "0")
}

function le(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function Be(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    n = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return a ? parseFloat(n) : n
}

function Te(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}
Page({
  data: {
    nbsp: "　",
    Cr0: Jt,
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: Jt,
    Cr4: "#60ffc8",
    Cr5: Jt,
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: Jt,
    Cr10: Jt,
    Cr11: "#00ff00",
    Cr12: "#00c8ff",
    Cr13: "#ff9430",
    Cr14: "#60ffc8",
    Cr15: Jt,
    Cr16: "#f80ca0",
    Cr17: Jt,
    Cri: 0,
    CR: 255,
    CG: 255,
    CB: 255,
    CR1: 0,
    CG1: 0,
    CB1: 0,
    CT1: 160,
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
    APP: "1.09",
    STR: "设备连接异常",
    CVer: 10,
    UI: 0,
    Panel: 1,
    CAN: 10,
    SCAN: "Unknown",
    Mode: "A",
    OVT: 1,
    OAT: 1,
    OVF: 1,
    OAF: 1,
    FAN: 50,
    ShowBar: 25,
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
  BTBGP: function (t) {
    this.setData({
      ShowBar: 25 != this.data.ShowBar ? 25 : -1
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
      scrollTop: 0 != e ? 50 : 0,
      duration: 300
    })
  },
  BTOAT: function (t) {
    var e = this.data.ShowBar;
    this.setData({
      ShowBar: 1 != e ? 1 : -1
    }), wx.pageScrollTo({
      scrollTop: 1 != e ? 100 : 0,
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
    re("FF"), (2 == Lt || Wt) && this.setData({
      Panel: 2 == Wt ? 2 : 3,
      ShowBar: 2 == Wt ? 0 : Rt < Number("5.35") ? 4 : 25,
      LOGO: N ? "Preview" : "预览"
    })
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, Ut.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    ee("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      re("FA75" + Se(t)), re("FF")
    }))
  },
  BTRST: function (t) {
    ae("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      re("F601"), (0, Ut.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Qt.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    ae("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      re("F001"), (0, Ut.Toast)(N ? "The device is restarting" : "设备正在重启!"), Qt.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    ae("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      re("AA01"), (0, Ut.Toast)(N ? "Data cleared to zero" : "数据已清零!"), Qt.navigateBack({
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
    re("AC00"), re("FF")
  },
  DST2: function (t) {
    re("AC01"), re("FF")
  },
  DST3: function (t) {
    re("AC02"), re("FF")
  },
  DST4: function (t) {
    re("AC03"), re("FF")
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), te("设置输出最大功率", "Set maximum output power", "500", "10000", (function (t) {
      re("F84E" + Ce(t)), re("F84D" + Ce(t)), re("FF")
    }))
  },
  BTLOGO0: function (e) {
    if ("预览" == t.data.LOGO || "Preview" == t.data.LOGO) Qt.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: !0
    }), t.SetLOGO(yt + "|" + $t, t);
    else if ("发送" == t.data.LOGO || "Send" == t.data.LOGO) {
      return fe(n, 1), re("FAD2" + Se(unescape(encodeURIComponent(Kt)))), void re("FF")
    }
    t.setData({
      ShowBar: 20,
      LOGO: N ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (e) {
    ee("设置第一行LOGO", "Set the first line logo", yt, yt, (function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) yt = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) yt = "1,27,30," + RegExp.$1, $t = "1,57,30," + RegExp.$2;
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Ut.Toast)(N ? "Input format error" : "输入格式错误");
        yt = "1,27,30," + RegExp.$1
      }
      t.setData({
        LOGO1: yt,
        LOGO2: $t,
        LOGO: N ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO2: function (e) {
    ee("设置第二行LOGO", "Set second line logo", $t, $t, (function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) $t = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) yt = "1,27,30," + RegExp.$1, $t = "1,57,30," + RegExp.$2;
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Ut.Toast)(N ? "Input format error" : "输入格式错误");
        $t = "1,57,30," + RegExp.$1
      }
      t.setData({
        LOGO1: yt,
        LOGO2: $t,
        LOGO: N ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO3: function (t) {
    re("F9C0" + le(1 - Dt)), re("FF")
  },
  BTLOGO4: function (t) {
    ee("设置简约模式文字", "Set the first line logo", "最多6个汉字或者12个英文", yt, (function (t) {
      re("FAD2" + Se(t = unescape(encodeURIComponent(t)))), re("F7")
    }))
  },
  SetLOGO: function (t, e) {
    Qt.createSelectorQuery().select("#LOGO").fields({
      node: !0,
      size: !0
    }).exec((function (a) {
      var i = a[0].node,
        r = i.getContext("2d");
      i.width = 60, i.height = 60, r.fillStyle = "#000", r.scale(1, 1), r.fillRect(0, 0, 60, 60), r.fillStyle = "#fff";
      var o = t.split("|");
      Kt = "";
      for (var s = 0; s < o.length; s += 1) {
        var c = o[s].split(",");
        Kt += c[3];
        var f = c[0],
          u = c[1],
          F = c[2],
          h = c[3];
        r.font = "normal " + F + "px Kaiti", r.fillText(h, f, u)
      }
      var S = [0],
        d = -1;
      n = "DataStart=LOGO{";
      for (var C = 0; C < 60; C += 1) {
        for (var l = r.getImageData(0, C, 60, 1).data, B = 0; B < 60; B += 1) {
          B % 8 == 0 && (B && (n += S[d].toString(16).padStart(2, "0")), d += 1);
          var T = .299 * l[4 * B] + .587 * l[4 * B + 1] + .114 * l[4 * B + 2];
          S[d] = S[d] >> 1, S[d] = S[d] | (T < 100 ? 0 : 128)
        }
        n += (S[d] >> 4).toString(16).padStart(2, "0")
      }
      n += "}DataEnd", Qt.hideToast(), e.setData({
        LOGO: N ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    re("F962" + le(1 - dt)), re("FF")
  },
  BTCAN1: function (t) {
    ae("确认是否切换为华为", "Switch to Huawei", "将会清除所有设置", "All settings will be cleared", (function (t) {
      re("FC530101"), (0, Ut.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Qt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN2: function (t) {
    ae("确认是否切换为英可瑞", "Switch to Increase", "将会清除所有设置", "All settings will be cleared", (function (t) {
      re("FC530201"), (0, Ut.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Qt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN4: function (t) {
    ae("确认是否切换为中兴3000", "Switch to ZTE3000", "将会清除所有设置", "All settings will be cleared", (function (t) {
      re("FC530401"), (0, Ut.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Qt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN8: function (t) {
    ae("确认是否切换为英飞源", "Switch to Infy", "将会清除所有设置", "All settings will be cleared", (function (t) {
      re("FC530801"), (0, Ut.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Qt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN16: function (t) {
    ae("确认是否切换为EPS6020", "Switch to EPS6020", "将会清除所有设置", "All settings will be cleared", (function (t) {
      re("FC531001"), (0, Ut.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Qt.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN32: function (t) {
    ae("确认是否切换为中兴4875", "Switch to ZTE4875", "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == Wt) {
        for (var e = parseInt(T, 16), a = e.toString(), n = 0, i = 0; i < a.length; i++) n += a.charCodeAt(i);
        re("C83F" + Math.floor(Math.floor(e / 611) * n).toString(16).slice(-6)), re("FC532001"), re("FF")
      } else re("FC532001"), (0, Ut.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), Qt.navigateBack({
        delta: 0
      })
    }))
  },
  BTLEDK2: function (t) {
    te("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      re("F968" + le(t)), re("FF")
    }))
  },
  BTLEDK1: function (t) {
    te("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      re("F969" + le(t)), re("FF")
    }))
  },
  BTLEDKS1: function (t) {
    te("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      re("F96D" + le(t)), re("FF")
    }))
  },
  BTLEDKS2: function (t) {
    te("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      re("F96A" + le(t)), re("FF")
    }))
  },
  BTStart1: function (t) {
    te("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      re("F96B" + le(t)), re("FF")
    }))
  },
  BTStart2: function (t) {
    re("F96C" + le(1 - K)), re("FF")
  },
  BTGIF1: function (t) {
    re("F96F" + le(1 - ct)), re("FF")
  },
  BT_GIF1: function (t) {
    fe((0, Ut.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    fe((0, Ut.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    fe((0, Ut.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    fe((0, Ut.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    fe((0, Ut.GetGIF)(5))
  },
  BTUI: function (a) {
    t.setData({
      CVer: Rt.toFixed(2),
      SCAN: M,
      ID: T,
      ACT: e
    }), re("F9C8" + le(1 - Et)), re("FF")
  },
  Scr1: function (e) {
    t.setData({
      Cr0: Jt,
      Cr1: "#00ff00",
      Cr2: "#00c8ff",
      Cr3: Jt,
      Cr4: "#60ffc8",
      Cr5: Jt,
      Cr6: "#ff9430",
      Cr7: "#f80ca0",
      Cr8: Jt,
      Cr10: Jt,
      Cr11: "#00ff00",
      Cr12: "#00c8ff",
      Cr13: "#ff9430",
      Cr14: "#60ffc8",
      Cr15: Jt,
      Cr16: "#f80ca0",
      Cr17: Jt
    })
  },
  Scr2: function (e) {
    t.setData({
      Cr0: Jt,
      Cr1: Jt,
      Cr2: Jt,
      Cr3: Jt,
      Cr4: Jt,
      Cr5: Jt,
      Cr6: Jt,
      Cr7: Jt,
      Cr8: Jt,
      Cr10: Jt,
      Cr11: Jt,
      Cr12: Jt,
      Cr13: Jt,
      Cr14: Jt,
      Cr15: Jt,
      Cr16: Jt,
      Cr17: Jt
    })
  },
  Scr3: function (e) {
    t.setData({
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
      Cr17: "#bbeeff"
    })
  },
  Scr4: function (e) {
    t.setData({
      Cr0: "#ffff00",
      Cr1: "#00ffff",
      Cr2: "#ff00aa",
      Cr3: "#00ff00",
      Cr4: "#ccaaff",
      Cr5: "#00ff00",
      Cr6: "#ff8000",
      Cr7: "#ff0000",
      Cr8: "#ffffff",
      Cr10: "#00ffff",
      Cr11: "#00ff00",
      Cr12: "#0000ff",
      Cr13: "#ff0000",
      Cr14: "#ffff00",
      Cr15: "#aaeecc",
      Cr16: "#eeccaa",
      Cr17: "#bbeeff"
    })
  },
  BTCr1: function (e) {
    0 == t.data.UI ? (re("F53000" + ne(this.data.Cr0) + "0000f01c"), re("F53100" + ne(this.data.Cr1) + "00209F26"), re("F53200" + ne(this.data.Cr2) + "00479F26"), re("F53300" + ne(this.data.Cr3) + "006e9F27"), re("F53400" + ne(this.data.Cr4) + "00969F3f"), re("F53500" + ne(this.data.Cr5) + "A3204d4d"), re("F53600" + ne(this.data.Cr6) + "50d64f1A"), re("F53700" + ne(this.data.Cr7) + "00d64f1A"), re("F53801" + ne(this.data.Cr8) + "A3774d68")) : 1 == t.data.UI && (re("F52000" + ne(this.data.Cr10) + "0000781c"), re("F52100" + ne(this.data.Cr11) + "001cf02e"), re("F52200" + ne(this.data.Cr12) + "004af02e"), re("F52300" + ne(this.data.Cr13) + "0078f02e"), re("F52400" + ne(this.data.Cr14) + "00a6f02e"), re("F52500" + ne(this.data.Cr15) + "7800781c"), re("F52600" + ne(this.data.Cr16) + "00d4781b"), re("F52701" + ne(this.data.Cr17) + "78d4781b"))
  },
  CK0: function (t) {
    kt = 0, this.CRSet(this.data.Cr0)
  },
  CK1: function (t) {
    kt = 1, this.CRSet(this.data.Cr1)
  },
  CK2: function (t) {
    kt = 2, this.CRSet(this.data.Cr2)
  },
  CK3: function (t) {
    kt = 3, this.CRSet(this.data.Cr3)
  },
  CK4: function (t) {
    kt = 4, this.CRSet(this.data.Cr4)
  },
  CK5: function (t) {
    kt = 5, this.CRSet(this.data.Cr5)
  },
  CK6: function (t) {
    kt = 6, this.CRSet(this.data.Cr6)
  },
  CK7: function (t) {
    kt = 7, this.CRSet(this.data.Cr7)
  },
  CK8: function (t) {
    kt = 8, this.CRSet(this.data.Cr8)
  },
  CK10: function (t) {
    kt = 10, this.CRSet(this.data.Cr10)
  },
  CK11: function (t) {
    kt = 11, this.CRSet(this.data.Cr11)
  },
  CK12: function (t) {
    kt = 12, this.CRSet(this.data.Cr12)
  },
  CK13: function (t) {
    kt = 13, this.CRSet(this.data.Cr13)
  },
  CK14: function (t) {
    kt = 14, this.CRSet(this.data.Cr14)
  },
  CK15: function (t) {
    kt = 15, this.CRSet(this.data.Cr15)
  },
  CK16: function (t) {
    kt = 16, this.CRSet(this.data.Cr16)
  },
  CK17: function (t) {
    kt = 17, this.CRSet(this.data.Cr17)
  },
  CRSet: function (t) {
    t.match(/#(..)(..)(..)/), Yt = RegExp.$1, Ht = RegExp.$2, jt = RegExp.$3, this.setData({
      CR: parseInt(Yt, 16),
      CG: parseInt(Ht, 16),
      CB: parseInt(jt, 16)
    })
  },
  CRC: function (t) {
    Yt = t.detail.value.toString(16).padStart(2, "0"), he()
  },
  CGC: function (t) {
    Ht = t.detail.value.toString(16).padStart(2, "0"), he()
  },
  CBC: function (t) {
    jt = t.detail.value.toString(16).padStart(2, "0"), he()
  },
  CTC1: function (e) {
    Zt = e.detail.value.toString(16).padStart(2, "0"), (0, Ut.SetCFG)("BGT", Zt), t.setData({
      BGC: "#000000" + Zt
    })
  },
  BTBGP1: function (e) {
    ee("输入图片连接", "Display voltage compensation", "", "", (function (e) {
      (0, Ut.SetCFG)("BGI", 1), (0, Ut.SetCFG)("BGP1", e), t.setData({
        BGP1: e,
        BGP: e,
        BGI: 1
      })
    }))
  },
  BTBGP2: function (e) {
    ee("输入图片连接", "Display voltage compensation", "", "", (function (e) {
      (0, Ut.SetCFG)("BGI", 2), (0, Ut.SetCFG)("BGP2", e), t.setData({
        BGP2: e,
        BGP: e,
        BGI: 2
      })
    }))
  },
  BTBGP3: function (e) {
    ee("输入图片连接", "Display voltage compensation", "", "", (function (e) {
      (0, Ut.SetCFG)("BGI", 3), (0, Ut.SetCFG)("BGP3", e), t.setData({
        BGP3: e,
        BGP: e,
        BGI: 3
      })
    }))
  },
  BTBGP4: function (e) {
    ee("输入图片连接", "Display voltage compensation", "", "", (function (e) {
      (0, Ut.SetCFG)("BGI", 4), (0, Ut.SetCFG)("BGP4", e), t.setData({
        BGP4: e,
        BGP: e,
        BGI: 4
      })
    }))
  },
  BTBGP0: function (e) {
    5 == ++_t && (_t = 0), t.setData({
      BGP: qt[_t],
      BGI: _t
    }), (0, Ut.SetCFG)("BGI", _t)
  },
  BTCKA2: function (t) {
    re("F972" + le(1 - ft)), re("FF")
  },
  BTEN1: function (t) {
    (0, Ut.SetCFG)("UEN", 1 - N), re("F970" + le(1 - N)), re("FF")
  },
  BTBLE1: function (t) {
    ee("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      re("FA73" + Se(t = unescape(encodeURIComponent(t)))), re("FF")
    }))
  },
  BTBLE2: function (t) {
    ee("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      re("FA74" + Se(t)), re("FF")
    }))
  },
  BTTCH1: function (t) {
    ee("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return re("FAD1" + Se(t)), void re("FF");
      (0, Ut.Toast)(N ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    te("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      re("F9C7" + le(t)), re("FF")
    }))
  },
  BTKEY1: function (t) {
    re("F967" + le(1 - I)), re("FF")
  },
  BTKEY2: function (t) {
    re("F966" + le(1 - U)), re("FF")
  },
  BTDDT1: function (t) {
    re("F96E" + le(Ct >= 3 ? 0 : Ct + 1)), re("FF")
  },
  BTUP6: function (t) {
    ee("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Ut.SetCFG)("WID", t), re("AB00" + Se(t = unescape(encodeURIComponent(t)))), re("FF")
    }))
  },
  BTUP7: function (t) {
    ee("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Ut.SetCFG)("WPD", t), re("AB01" + Se(t = unescape(encodeURIComponent(t)))), re("FF")
    }))
  },
  BTUP1: function (t) {
    zt || this.data.CVer >= this.data.UPDate && !Wt || Qt.showModal({
      title: N ? "Start Upgrade" : "开始升级",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return re("A700000000" + Se("NewUI")), void(0, Ut.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP5: function (t) {
    2 == Wt && re("FD48" + Se("Cxjdwx"))
  },
  BTUP8: function (t) {
    Qt.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    Qt.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    Qt.setClipboardData({
      data: "设备ID:" + T
    })
  },
  BTUP0: function (t) {
    Qt.showModal({
      title: N ? "Firmware rollback" : "固件回退",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return re("A7" + Se("20", 4) + Se("NewUI")), void(0, Ut.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP9: function (t) {
    Qt.showModal({
      title: N ? "Write Test Firmware" : "刷入测试固件",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return re("A700000000" + Se("NewTest")), void(0, Ut.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUFS: function (t) {
    te("设置温度加速值", "Set temperature acceleration value", "2", "20", (function (t) {
      re("F963" + le(t)), re("FF")
    }))
  },
  BTAFS: function (t) {
    te("设置电流加速值", "Set current acceleration value", "0.1", "3.0", (function (t) {
      re("F964" + le(10 * t)), re("FF")
    }))
  },
  BTLFS: function (t) {
    te("设置初始风速值", "Set initial wind speed value", "20", "200", (function (t) {
      re("F965" + le(t)), re("FF")
    }))
  },
  BTMFS: function (t) {
    te("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      re("F9C5" + le(t)), re("FF")
    }))
  },
  BTTMC: function (t) {
    te("设置超温进入温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      re("F84A" + Ce(t)), re("FF")
    }))
  },
  BTTMC1: function (t) {
    te("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      re("F84B" + Ce(t)), re("FF")
    }))
  },
  BTOST: function (t) {
    te("设置超温关机温度", "Set the exit temperature for over temperature", "70", "120", (function (t) {
      re("F8F7" + Ce(t)), re("FF")
    }))
  },
  BTTMW: function (t) {
    te("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      re("F84C" + Ce(t)), re("FF")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), wx.pageScrollTo({
      scrollTop: 95,
      duration: 300
    }), r > 0 && r < 10 ? ae("检测到输出电流", "Detected output current", "如有负载请点取消后断开负载再开始校正,如无负载则为空载电流,点击确定将会设置为最小电流过滤(可在输出电流校正页面中设置).", "If there is a load detected in the output current, please click NO and disconnect the load before starting the calibration. If there is no load, Click YES will set it as the minimum current filter (which can be set on the output current calibration page)", (function (t) {
      re("F848" + Ce(Number(r) + .05)), re("FF")
    })) : i < 10 || r > 0 ? (0, Ut.Toast)(N ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (re("C1"), re("FF"), te("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / i).toFixed(4),
        a = Number(t / $).toFixed(4);
      re("C3" + Ce(100 * a) + Ce(100 * e)), 2 == M ? (re("F876" + Ce(20 * a)), re("F877" + Ce(100 * a))) : 1 == M ? (re("F876" + Ce(41 * a)), re("F877" + Ce(58.5 * a))) : 4 == M ? (re("F876" + Ce(41 * a)), re("F877" + Ce(59 * a))) : 16 == M ? (re("F876" + Ce(44 * a)), re("F877" + Ce(61 * a))) : 32 == M && (re("F876" + Ce(41.2 * a)), re("F877" + Ce(59.4 * a))), re("FF"), re("A80" + A + Ce(50 * a) + Ce(k)), re("FF")
    })))
  },
  BTOVT1: function (t) {
    te("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      re("FB47" + Ce(100 * t)), re("FF")
    }))
  },
  BTOVTU: function (t) {
    re("FB47" + Ce(100 * (nt + .003))), re("FF")
  },
  BTOVTD: function (t) {
    re("FB47" + Ce(100 * (nt - .003))), re("FF")
  },
  BTOVD1: function (t) {
    te("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      re("FB46" + Ce(100 * t)), re("FF")
    }))
  },
  BTOVDU: function (t) {
    re("FB46" + Ce(100 * (rt + .003))), re("FF")
  },
  BTOVDD: function (t) {
    re("FB46" + Ce(100 * (rt - .003))), re("FF")
  },
  BTOVS: function (t) {
    Xt(N ? "Set voltage range" : "设置电压范围", (N ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (re("F876" + Ce(Number(RegExp.$1))), re("F877" + Ce(Number(RegExp.$2))), re("FF")) : (0, Ut.Toast)(N ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    te("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      re("F8F3" + Ce(t)), re("FF")
    }))
  },
  BTOVT3: function (t) {
    i < 10 || r > 0 ? (0, Ut.Toast)(N ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (re("C2"), re("FF"), te("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / i).toFixed(4);
      re("C4" + Ce(100 * Number(t / $).toFixed(4)) + Ce(100 * e)), re("FF")
    })))
  },
  BTOVT2: function (t) {
    te("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      re("FBF2" + Ce(100 * t)), re("FF")
    }))
  },
  BTO2TU: function (t) {
    re("FBF2" + Ce(100 * (Bt + .003))), re("FF")
  },
  BTO2TD: function (t) {
    re("FBF2" + Ce(100 * (Bt - .003))), re("FF")
  },
  BTOVD2: function (t) {
    te("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      re("FBF1" + Ce(100 * t)), re("FF")
    }))
  },
  BTO2DU: function (t) {
    re("FBF1" + Ce(100 * (Tt + .003))), re("FF")
  },
  BTO2DD: function (t) {
    re("FBF1" + Ce(100 * (Tt - .003))), re("FF")
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 145,
      duration: 300
    }), r < 5 || $ - i < .2 ? (0, Ut.Toast)(N ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (re("C0"), re("FF"), te("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / r).toFixed(4);
      re("C5" + Ce(100 * Number(t / k).toFixed(4)) + Ce(100 * e)), re("FF")
    })))
  },
  BTOAT1: function (t) {
    te("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      re("FB45" + Ce(100 * t)), re("FF")
    }))
  },
  BTOAT2: function (t) {
    re("FB45" + Ce(100 * (it - .003))), re("FF")
  },
  BTOAT3: function (t) {
    re("FB45" + Ce(100 * (it + .003))), re("FF")
  },
  BTOAS1: function (t) {
    te("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      re("F8F4" + Ce(t)), re("FF")
    }))
  },
  BTCLV: function (t) {
    te("设置最小电流过滤", "Set minimum current filtering", "0.00", "3.00", (function (t) {
      re("F848" + Ce(t)), re("FF")
    }))
  },
  BTOAD1: function (t) {
    te("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      re("FB44" + Ce(100 * t)), re("FF")
    }))
  },
  BTOAD2: function (t) {
    re("FB44" + Ce(100 * (ot - .003))), re("FF")
  },
  BTOAD3: function (t) {
    re("FB44" + Ce(100 * (ot + .003))), re("FF")
  },
  BTOAS: function (t) {
    Xt(N ? "Set current range" : "设置电流范围", (N ? "Now:" : "当前范围:") + z + "-" + Q, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (re("F878" + Ce(Number(RegExp.$1))), re("F879" + Ce(Number(RegExp.$2))), re("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (re("F879" + Ce(t)), re("FF")) : (0, Ut.Toast)(N ? "Input format error" : "输入格式错误!"))
    }))
  },
  pwrbt: function (t) {
    re("A6" + le(1 - b)), re("FF")
  },
  owbt: function (t) {
    te("设置输出功率限制", "Set output power limit", "300", W, (function (t) {
      re("F84D" + Ce(t)), re("FF")
    }))
  },
  tibt: function (t) {
    te("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      re("A9" + function (t) {
        return Math.floor(t).toString(16).padStart(4, "0")
      }(t)), re("FF")
    }))
  },
  BTYC1: function (t) {
    te("设置预充电压", "Set pre charge voltage", "0", X, (function (t) {
      re("F8F6" + Ce(t)), re("FF")
    }))
  },
  BTYC2: function (t) {
    te("设置预充电流", "Set pre charge current", z, Q, (function (t) {
      re("F8F5" + Ce(t)), re("FF")
    }))
  },
  ks1bt: function (t) {
    var e = v[0],
      a = v[1] > Q ? Q : v[1];
    e > X || e < J ? te("设置输出电压", "Set output voltage", J, X, (function (t) {
      re("A80" + (A = 1) + Ce(t) + Ce(a)), re("FF")
    })) : (re("A80" + (A = 1) + Ce(e) + Ce(a)), re("FF"))
  },
  ks2bt: function (t) {
    var e = O[0],
      a = O[1] > Q ? Q : O[1];
    e > X || e < J ? te("设置输出电压", "Set output voltage", J, X, (function (t) {
      re("A80" + (A = 2) + Ce(t) + Ce(a)), re("FF")
    })) : (re("A80" + (A = 2) + Ce(e) + Ce(a)), re("FF"))
  },
  ks3bt: function (t) {
    var e = x[0],
      a = x[1] > Q ? Q : x[1];
    e > X || e < J ? te("设置输出电压", "Set output voltage", J, X, (function (t) {
      re("A80" + (A = 3) + Ce(t) + Ce(a)), re("FF")
    })) : (re("A80" + (A = 3) + Ce(e) + Ce(a)), re("FF"))
  },
  ks4bt: function (t) {
    var e = E[0],
      a = E[1] > Q ? Q : E[1];
    e > X || e < J ? te("设置输出电压", "Set output voltage", J, X, (function (t) {
      re("A80" + (A = 4) + Ce(t) + Ce(a)), re("FF")
    })) : (re("A80" + (A = 4) + Ce(e) + Ce(a)), re("FF"))
  },
  hqbt1: function (t) {
    te("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      re("F961" + le(t)), re("FF")
    }))
  },
  hqbt0: function (t) {
    re("F961" + le(0 == st ? 10 : 0)), re("FF")
  },
  nvbt: function (t) {
    Xt(N ? "Set Output Voltage" : "设置输出电压", (N ? "Range:" : "范围:") + J + "-" + X, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) re(t.substr(2, 4) + Ce(t.substr(6))), re("FF");
        else if (t.startsWith("FFC8")) re(t.substr(2, 4) + t.substr(6)), re("FF");
      else if ("强制升级" == t) Qt.showModal({
        title: N ? "Start Upgrade" : "开始升级",
        editable: !1,
        confirmText: N ? "YES" : "确定",
        cancelText: N ? "NO" : "取消",
        success: function (t) {
          if (t.confirm) return re("A700000000" + Se("NewUI")), void(0, Ut.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
        }
      });
      else {
        if (re("A1" + Se(t)), (t = parseFloat(t)) > X || t < J || !isFinite(t)) return void(0, Ut.Toast)(N ? "Beyond the set range!" : "超出设置范围!");
        re("A80" + A + Ce(t) + Ce(k)), re("FF")
      } else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && fe(e)
        }
      })
    }))
  },
  nabt: function (t) {
    te("设置输出电流", "Set output current", z, Q, (function (t) {
      re("A80" + A + Ce($) + Ce(t)), re("FF")
    }))
  },
  sa2bt2: function (t) {
    te("设置二段电流", "Set second stage current", z, Q, (function (t) {
      re("F857" + Ce(t)), re("FF")
    }))
  },
  sa2bt1: function (t) {
    te("设置二段电压", "Set second stage voltage", J, X, (function (t) {
      re("F858" + Ce(t)), re("FF")
    }))
  },
  sa2bt0: function (t) {
    re("F858" + (0 == R ? Ce($ - 3) : "00000000")), re("F857" + (0 == R ? Ce(10) : "00000000")), re("FF")
  },
  sdbt1: function (t) {
    te("设置延时时间(分钟)", "Set delay time (minutes)", 1, 600, (function (t) {
      re("F859" + Ce(t)), re("FF")
    }))
  },
  sdbt2: function (t) {
    te("设置关机电流", "SSet startup delay current", "0.00", "2.00", (function (t) {
      re("F8F0" + Ce(t)), re("FF")
    }))
  },
  sdbt0: function (t) {
    re("F859" + (0 == ht ? Ce(30) : "00000000")), re("FF")
  },
  MSG: function (n, Mt) {
    if (!a) {
      var Nt = Mt;
      if ("EE" == Nt.substring(0, 2)) {
        e = de(Nt.substring(20, 40)), Rt = .01 * parseInt(Nt.substring(16, 20), 16), 1 == (M = Te(Nt, 14)) ? M = "Huawei" : 2 == M ? M = "Increase" : 4 == M ? M = "ZTE3000" : 8 == M ? M = "INFY" : 16 == M ? M = "EPS6020" : 32 == M ? M = "ZTE4875" : 64 == M && (M = "Sinexcel"), T = "0x" + Nt.substring(2, 14), e.startsWith("Cxjdwx") && (e = "未激活"), t.setData({
          CVer: Rt.toFixed(2),
          SCAN: M,
          ID: T,
          ACT: e
        });
        var Pt = (0, Ut.GetCFG)(T);
        Wt && (Pt = (Number(T) + 19880914).toString(16).substring(4, 8)), Lt || re("A0" + Se(Pt))
      } else if (Nt.startsWith("A101")) t.setData({
        ShowBar: 0,
        Panel: 2,
        LOGO: N ? "Preview" : "预览"
      });
      else if (Nt.startsWith("A001")) {
        if (Lt = 2, ("Cxjdwx" == e || "未激活" == e) && !Wt) {
          var Kt = new Date;
          re("FD48" + Se(Kt.getFullYear() + "-" + (Kt.getMonth() + 1) + "-" + Kt.getDate()))
        }
        Rt <= 5.28 && re("FF")
      } else if (Nt.startsWith("A000")) {
        if (Lt) return;
        Lt = 1, Qt.showModal({
          title: N ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: !0,
          placeholderText: "ID:" + T,
          confirmText: N ? "YES" : "确定",
          cancelText: N ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, Ut.SetCFG)(T, t.content), re("A0" + Se(t.content)), Lt = 0)
          }
        })
      } else if (Nt.startsWith("F101")) ue();
      else if (Nt.startsWith("F201")) ue();
      else if (Nt.startsWith("F301")) ce = 0, se = [], (0, Ut.Toast)(N ? "Send End!" : "发送完成!");
      else if (Nt.startsWith("01")) i = Be(Nt, 2), r = Be(Nt, 10), o = Be(Nt, 18), s = Be(Nt, 26), c = Te(Nt, 34), f = Te(Nt, 36), "0" == (u = Te(Nt, 38)) ? Vt = N ? "Communication Abnormality" : "CAN通讯异常" : 0 == i ? Vt = N ? "Charger Output Abnormality" : "充电器输出异常" : 4 == c ? Vt = N ? "Charger Shutdown" : "充电器已关机" : 0 == c ? Vt = N ? "Waiting For Battery Connection" : "等待接入电池" : 1 == c ? Vt = N ? "Charging" : "正在充电中" : 2 == c ? Vt = N ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == c ? Vt = N ? "Precharging" : "正在预充" : 40 == c ? Vt = N ? "Appointment Waiting" : "预约等待中" : 3 == c ? Vt = N ? "Charging Completed" : "充电完成" : 43 == c ? Vt = N ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == c && (Vt = N ? "Over Temperature Shutdown" : "超温保护关机"), t.setData({
        STR: Vt,
        NFS: f,
        OL: u,
        OV: i,
        OA: r,
        OW: o,
        OT: s
      });
      else if (Nt.startsWith("02")) {
        F = Be(Nt, 2), h = Be(Nt, 10), S = Be(Nt, 18), d = Be(Nt, 26), C = Te(Nt, 34), l = Te(Nt, 36), B = Te(Nt, 38);
        var yt = Number(o / S * 100).toFixed(2),
          $t = Number(S - o).toFixed(2);
        t.setData({
          IV: F,
          IA: h,
          IW: S,
          IT: d,
          ST0: C,
          ST1: l,
          ST2: B,
          EEI: S ? yt : "0.00",
          EES: S ? $t : "0.00"
        })
      } else if (Nt.startsWith("03")) p = Be(Nt, 2), g = Be(Nt, 10), D = Be(Nt, 18), G = Be(Nt, 26), m = Te(Nt, 34), w = Te(Nt, 36), t.setData({
        Ah: p,
        Wh: g,
        AH: D,
        WH: G,
        SWT: m,
        SMT: w
      });
      else if (Nt.startsWith("04")) t.setData({
        Ti: ie(Be(Nt, 2)),
        TI: ie(Be(Nt, 10)),
        NSD: ie(Be(Nt, 18)),
        SOC: Number(Be(Nt, 26)).toFixed(0)
      });
      else if (Nt.startsWith("10")) v = [Be(Nt, 2, 1), Be(Nt, 10, 1)], O = [Be(Nt, 18, 1), Be(Nt, 26, 1)], A = Te(Nt, 34), b = Te(Nt, 36), I = Te(Nt, 38), 1 == A ? (k = v[1], $ = v[0]) : 2 == A && (k = O[1], $ = O[0]), 3 == A ? (k = x[1], $ = x[0]) : 4 == A && (k = E[1], $ = E[0]), t.setData({
        KS1: v,
        KS2: O,
        KSi: A,
        PON: b,
        KON: I,
        SV: $.toFixed(2),
        SA: k.toFixed(2)
      });
      else if (Nt.startsWith("11")) x = [Be(Nt, 2, 1), Be(Nt, 10, 1)], E = [Be(Nt, 18, 1), Be(Nt, 26, 1)], M = Te(Nt, 34), N = Te(Nt, 36), U = Te(Nt, 38), (0, Ut.SetCFG)("UEN", N), 1 == A ? (k = v[1], $ = v[0]) : 2 == A && (k = O[1], $ = O[0]), 3 == A ? (k = x[1], $ = x[0]) : 4 == A && (k = E[1], $ = E[0]), t.setData({
        KS3: x,
        KS4: E,
        CAN: M,
        UEN: N,
        KRC: U,
        SV: $.toFixed(2),
        SA: k.toFixed(2)
      });
      else if (Nt.startsWith("12")) P = Be(Nt, 2), R = Be(Nt, 10), W = Be(Nt, 18), L = Be(Nt, 26), V = Te(Nt, 34), K = Te(Nt, 36), y = Te(Nt, 38), t.setData({
        SV2: P,
        SA2: R,
        SMW: W,
        UMW: L,
        WTi: V,
        ETi: K,
        Sleep: y
      });
      else if (Nt.startsWith("13")) {
        Y = Be(Nt, 2), H = Be(Nt, 10), j = Be(Nt, 18);
        var kt = Be(Nt, 26);
        q = Te(Nt, 34), _ = Te(Nt, 36), Z = Te(Nt, 38), t.setData({
          TMW: Y,
          UMT: H,
          OMT: j,
          LEDK0: q,
          LEDK1: _,
          LEDK2: Z
        }), (0, Ut.print)("tip:", kt)
      } else if (Nt.startsWith("14")) z = Be(Nt, 2), Q = Be(Nt, 10), J = Be(Nt, 18), X = Be(Nt, 26), tt = Te(Nt, 34), et = Te(Nt, 36), at = .1 * Te(Nt, 38), t.setData({
        LSA: z,
        HSA: Q,
        LSV: J,
        HSV: X,
        UFS: tt,
        LFS: et,
        AFS: at.toFixed(1)
      }), z = Number(z), J = Number(J), Q = Number(Q), X = Number(X);
      else if (Nt.startsWith("15")) nt = .01 * Be(Nt, 2), it = .01 * Be(Nt, 10), rt = .01 * Be(Nt, 18), ot = .01 * Be(Nt, 26), st = Te(Nt, 34), ct = Te(Nt, 36), ft = Te(Nt, 38), t.setData({
        OVT: nt.toFixed(4),
        OAT: it.toFixed(4),
        OVD: rt.toFixed(4),
        OAD: ot.toFixed(4),
        UHQ: st,
        GIF: ct,
        CKA2: ft
      });
      else if (Nt.startsWith("16")) ut = Be(Nt, 2), Ft = Be(Nt, 10), ht = Be(Nt, 18), St = Be(Nt, 26), dt = Te(Nt, 34), Ct = Te(Nt, 36), lt = .01 * Te(Nt, 38), t.setData({
        L2V: ut,
        H2V: Ft,
        USD: ht,
        NTC: dt,
        DDT: Ct,
        CLV: lt,
        SDU: St
      });
      else if (Nt.startsWith("17")) Bt = .01 * Be(Nt, 2), Tt = .01 * Be(Nt, 10), pt = Be(Nt, 18), gt = Be(Nt, 26), Dt = Te(Nt, 34), Gt = Te(Nt, 36), mt = Te(Nt, 38), t.setData({
        O2D: Tt.toFixed(4),
        O2T: Bt.toFixed(4),
        OVS: pt,
        OAS: gt,
        UEG: Dt,
        UCN: Gt,
        MFS: mt
      });
      else if (Nt.startsWith("18")) wt = Be(Nt, 2), vt = Be(Nt, 10), Ot = Be(Nt, 18), At = Be(Nt, 26), bt = Te(Nt, 34), It = Te(Nt, 36), xt = Te(Nt, 38), t.setData({
        YCA: wt,
        YCV: vt,
        DOL: bt,
        DST: It,
        LKS: xt,
        TCH: At,
        OST: Ot
      });
      else if (Nt.startsWith("19")) Et = Te(Nt, 34), t.setData({
        UI: Et
      });
      else if (Nt.startsWith("20")) {
        var Yt = de(Nt.substring(2, 40));
        t.setData({
          SSID: Yt
        })
      } else if (Nt.startsWith("21")) t.setData({
        UPWD: de(Nt.substring(2, 40))
      });
      else if (Nt.startsWith("22")) {
        var Ht = de(Nt.substring(2, 40)),
          jt = (0, Ut.GetCFG)("WID", Ht);
        Ht != jt && re("AB00" + Se(Ht = unescape(encodeURIComponent(jt)))), t.setData({
          WID: jt
        })
      } else if (Nt.startsWith("23")) {
        var qt = de(Nt.substring(2, 40)),
          _t = (0, Ut.GetCFG)("WPD", qt);
        qt != _t && re("AB01" + Se(qt = unescape(encodeURIComponent(_t)))), t.setData({
          WPD: _t
        })
      } else Nt.startsWith("24") && t.setData({
        LKV: de(Nt.substring(2, 40))
      })
    }
  },
  onLoad: function (e) {
    t = this, Lt = 0, ce = 0, Wt = Number(e.GM), zt = 0;
    var a = (0, Ut.GetGIF)(1);
    a.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var n = RegExp.$2;
    (a = (0, Ut.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var i = RegExp.$2;
    (a = (0, Ut.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var r = RegExp.$2;
    (a = (0, Ut.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var o = RegExp.$2;
    (a = (0, Ut.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var s = RegExp.$2;
    N = (0, Ut.GetCFG)("UEN"), _t = (0, Ut.GetCFG)("BGI", 0), Zt = (0, Ut.GetCFG)("BGT", "80"), qt[1] = (0, Ut.GetCFG)("BGP1", "https://dingyue.ws.126.net/2022/0808/701db340g00rg9pym02h5d200cs00leg00it00vh.gif"), qt[2] = (0, Ut.GetCFG)("BGP2", "https://img2.baidu.com/it/u=2215745416,4118415336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422"), qt[3] = (0, Ut.GetCFG)("BGP3", "https://c-ssl.dtstatic.com/uploads/item/201912/08/20191208175320_skjmi.thumb.1000_0.jpg"), qt[4] = (0, Ut.GetCFG)("BGP4", "https://wx4.sinaimg.cn/mw690/9f2299eegy1hqwec2a3ncj21kw2dcx6p.jpg"), console.log(qt[1]);
    var c = (0, Ut.GetCFG)("ShowM");
    t.setData({
      GIF1: "data:image/gif;base64," + n,
      GIF2: "data:image/gif;base64," + i,
      GIF3: "data:image/gif;base64," + r,
      GIF4: "data:image/gif;base64," + o,
      GIF5: "data:image/gif;base64," + s,
      UEN: N,
      ShowM: c,
      RollV: 5.34,
      TestV: "5.35测试一",
      UPDate: "5.35",
      APP: "1.21",
      GM: Wt,
      ADD: zt,
      CAN: Rt,
      BGI: _t,
      BGT: parseInt(Zt, 16),
      BGC: "#000000" + Zt,
      BGP: qt[_t],
      BGP1: qt[1],
      BGP2: qt[2],
      BGP3: qt[3],
      BGP4: qt[4]
    }), "5.35测试一" != (0, Ut.GetCFG)("TVer") && Wt && ((0, Ut.SetCFG)("TVer", "5.35测试一"), wx.showModal({
      title: "有新测试固件:5.35测试一 依次点击'设置-远程固件升级-测试版固件'中使用",
      editable: !1,
      confirmText: "知道了",
      showCancel: !1
    })), 1 == Number(e.Test) && (this.MSG("", "EE7876EF3A7D80010217323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000021340000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), Pt.onBLEConnectionStateChange((function () {
      Qt.navigateBack({
        delta: 0
      })
    })), Pt.onBLECharacteristicValueChange1(this.MSG)
  },
  onUnload: function () {
    Pt.onBLEConnectionStateChange((function () {})), Pt.closeBLEConnection()
  },
  onShow: function (t) {
    a = 0
  },
  onHide: function () {
    a = 1
  }
});