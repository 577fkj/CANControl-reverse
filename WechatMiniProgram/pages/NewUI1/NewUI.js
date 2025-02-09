var t, e, a, n, i, o, r, s, c, f, u, F, S, h, l, d, C, B, E, g, T, p, D, A, m, G, w, v, b, O, I, x, M, N, U, R, W, P, V, L, K, y, $, k, Y, H, j, _, q, z, Z, Q, J, X, tt, et, at, nt, it, ot, rt, st, ct, ft, ut, Ft, St, ht, lt, dt, Ct, Bt, Et, gt, Tt, pt, Dt, At, mt, Gt, wt, vt, bt, Ot, It, xt, Mt, Nt, Ut, Rt, Wt = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  Pt = require("../../@babel/runtime/helpers/asyncToGenerator"),
  Vt = require("../../B90FE0219E166AAFDF69882689C18510.js"),
  Lt = require("../../AF3078509E166AAFC956105707D18510.js"),
  Kt = 10,
  yt = 0,
  $t = 0,
  kt = 0,
  Yt = 0,
  Ht = 0,
  jt = "设备连接成功",
  _t = 0,
  qt = 30,
  zt = "欢迎使用",
  Zt = "1,27,30,欢迎",
  Qt = "1,57,30,使用",
  Jt = 0,
  Xt = "ff",
  te = "ff",
  ee = "ff",
  ae = ["/img/bc1.gif", "", "", "", ""],
  ne = 0,
  ie = "80",
  oe = 0,
  re = wx,
  se = "#ffffff",
  ce = ["1", "2", "3", "4"],
  fe = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "温度 异常", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"],
  ue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Fe(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  re.showModal({
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

function Se(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  re.showModal({
    title: N ? e : t,
    editable: !0,
    placeholderText: (N ? "Range:" : "范围:") + a + "-" + n,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(n) || e < Number(a) || !isFinite(e)) && 2 != Yt) return void(0, Vt.Toast)(N ? "Beyond the set range!" : "超出设置范围!");
        i(e)
      }
    }
  })
}

function he(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  re.showModal({
    title: N ? e : t,
    editable: !0,
    placeholderText: N ? n : a,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, Vt.Toast)(N ? "Input Cannot Be Empty!" : "输入不能为空!");
        i(e)
      }
    }
  })
}

function le(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  re.showModal({
    title: N ? e : t,
    content: N ? n : a,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (t) {
      t.confirm && i(t)
    }
  })
}

function de(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function Ce(t) {
  var e = Math.floor(t / 3600),
    a = Math.floor(t % 3600 / 60),
    n = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(a).padStart(2, "0") + ":" + String(n).padStart(2, "0")
}

function Be(t) {
  return Ee.apply(this, arguments)
}

function Ee() {
  return (Ee = Pt(Wt().mark((function t(e) {
    return Wt().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (0 == Te) {
            t.next = 3;
            break
          }
          return (0, Vt.Toast)(N ? "There Are Unfinished Sending Tasks" : "有发送任务未完成"), t.abrupt("return");
        case 3:
          return e = e.substring(0, 40), t.next = 6, Lt.easySendData1(e, !0);
        case 6:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var ge = [""],
  Te = 0;

function pe(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  0 == Te ? re.showModal({
    title: N ? "Confirm Whether To Send" : "确认是否发送",
    editable: !1,
    confirmText: N ? "YES" : "确定",
    cancelText: N ? "NO" : "取消",
    success: function (a) {
      if (a.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), Te = 0, (ge = [])[0] = "F1" + Ge(RegExp.$1);
        for (var n = e ? RegExp.$2 : Ae(RegExp.$2), i = 0; i < n.length; i += 240) Te++, ge[Te] = "F2" + n.slice(i, i + 240);
        ge[ge.length] = "F3", Te = 0, De()
      }
    }
  }) : (0, Vt.Toast)(N ? "There Are Unfinished Sending Tasks" : "有发送任务未完成")
}

function De(t) {
  var e = ge[Te];
  Lt.easySendData1(e, !0), (0, Vt.Toast)((N ? "Sending:" : "发送进度:") + (Te / ge.length * 100).toFixed(2) + "%"), Te++
}

function Ae(t) {
  if (!t) return t;
  var e, a, n, i, o, r, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    c = 0,
    f = 0,
    u = [];
  t += "";
  do {
    e = (r = s.indexOf(t.charAt(c++)) << 18 | s.indexOf(t.charAt(c++)) << 12 | (i = s.indexOf(t.charAt(c++))) << 6 | (o = s.indexOf(t.charAt(c++)))) >> 16 & 255, a = r >> 8 & 255, n = 255 & r, u[f++] = 64 === i ? e.toString(16).padStart(2, "0") : 64 === o ? e.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0") : e.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0")
  } while (c < t.length);
  return u.join("")
}

function me() {
  0 == t.data.UI && Jt >= 10 && (Jt = 0), 1 == t.data.UI && Jt < 10 && (Jt = 10), 0 == Jt ? t.setData({
    Cr0: "#" + Xt + te + ee
  }) : 1 == Jt ? t.setData({
    Cr1: "#" + Xt + te + ee
  }) : 2 == Jt ? t.setData({
    Cr2: "#" + Xt + te + ee
  }) : 3 == Jt ? t.setData({
    Cr3: "#" + Xt + te + ee
  }) : 4 == Jt ? t.setData({
    Cr4: "#" + Xt + te + ee
  }) : 5 == Jt ? t.setData({
    Cr5: "#" + Xt + te + ee
  }) : 6 == Jt ? t.setData({
    Cr6: "#" + Xt + te + ee
  }) : 7 == Jt ? t.setData({
    Cr7: "#" + Xt + te + ee
  }) : 8 == Jt ? t.setData({
    Cr8: "#" + Xt + te + ee
  }) : 10 == Jt ? t.setData({
    Cr10: "#" + Xt + te + ee
  }) : 11 == Jt ? t.setData({
    Cr11: "#" + Xt + te + ee
  }) : 12 == Jt ? t.setData({
    Cr12: "#" + Xt + te + ee
  }) : 13 == Jt ? t.setData({
    Cr13: "#" + Xt + te + ee
  }) : 14 == Jt ? t.setData({
    Cr14: "#" + Xt + te + ee
  }) : 15 == Jt ? t.setData({
    Cr15: "#" + Xt + te + ee
  }) : 16 == Jt ? t.setData({
    Cr16: "#" + Xt + te + ee
  }) : 17 == Jt && t.setData({
    Cr17: "#" + Xt + te + ee
  })
}

function Ge(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString(16).padStart(2, "0");
  return e && (a = a.padEnd(2 * e, "0")), a
}

function we(t) {
  for (var e = "", a = 0, n = "", i = 0; i < t.length / 2; i++) {
    var o = t.substr(2 * i, 2),
      r = parseInt(o, 16);
    a && r ? (n += "%" + o, (a -= 1) || (e += decodeURIComponent(n), n = "")) : r >= 224 & r <= 239 ? (n += "%" + o, a = 2) : r && (e += String.fromCharCode(r))
  }
  return e
}

function ve(t) {
  return Math.floor(100 * t).toString(16).padStart(8, "0")
}

function be(t) {
  return Math.floor(t).toString(16).padStart(4, "0")
}

function Oe(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function Ie(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    n = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return a ? parseFloat(n) : n
}

function xe(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}

function Me(t) {
  for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, a = 0, n = 0; n < 12; n++)
    if (fe[n] == t) {
      ue[n] = e, a = 1;
      break
    } if (!a && e)
    for (var i = 1; i < 11; i++)
      if (6 != i && 0 == ue[i]) {
        fe[i] = t, ue[i] = e;
        break
      }
}
Page({
  data: {
    nbsp: "　",
    Cr0: se,
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: se,
    Cr4: "#60ffc8",
    Cr5: se,
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: se,
    Cr10: se,
    Cr11: "#00ff00",
    Cr12: "#00c8ff",
    Cr13: "#ff9430",
    Cr14: "#60ffc8",
    Cr15: se,
    Cr16: "#f80ca0",
    Cr17: se,
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
  uset: function (t) {
    Be("FF01"), (2 == Ht || Yt) && this.setData({
      Panel: Yt ? 2 : 3,
      ShowBar: Yt ? 0 : Kt < Number("5.39") ? 4 : 25,
      LOGO: N ? "Preview" : "预览"
    })
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, Vt.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    he("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      Be("FA75" + Ge(t))
    }))
  },
  BTRST: function (t) {
    le("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      Be("F60100"), (0, Vt.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), re.navigateBack({
        delta: 0
      })
    }))
  },
  BTRST1: function (t) {
    le("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置并重启", "Exception repair will detect and reset certain settings", (function (t) {
      Be("F60001"), (0, Vt.Toast)(N ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), re.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    le("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      Be("F001"), (0, Vt.Toast)(N ? "The device is restarting" : "设备正在重启!"), re.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    le("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      Be("AA01"), (0, Vt.Toast)(N ? "Data cleared to zero" : "数据已清零!"), re.navigateBack({
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
    Be("AC00"), Be("FF18")
  },
  DST2: function (t) {
    Be("AC01"), Be("FF18")
  },
  DST3: function (t) {
    Be("AC02"), Be("FF18")
  },
  DST4: function (t) {
    Be("AC03"), Be("FF18")
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), Se("设置输出最大功率", "Set maximum output power", "500", "10000", (function (t) {
      Be("F84E" + ve(t)), Be("F84D" + ve(t)), Be("FF12")
    }))
  },
  BTLOGO0: function (e) {
    if ("预览" == t.data.LOGO || "Preview" == t.data.LOGO) re.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: !0
    }), t.SetLOGO(Zt + "|" + Qt, t);
    else if ("发送" == t.data.LOGO || "Send" == t.data.LOGO) {
      return pe(n, 1), void Be("FAD2" + Ge(unescape(encodeURIComponent(zt))))
    }
    t.setData({
      ShowBar: 20,
      LOGO: N ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (e) {
    he("设置第一行LOGO", "Set the first line logo", Zt, Zt, (function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Zt = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) Zt = "1,27,30," + RegExp.$1, Qt = "1,57,30," + RegExp.$2;
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Vt.Toast)(N ? "Input format error" : "输入格式错误");
        Zt = "1,27,30," + RegExp.$1
      }
      t.setData({
        LOGO1: Zt,
        LOGO2: Qt,
        LOGO: N ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO2: function (e) {
    he("设置第二行LOGO", "Set second line logo", Qt, Qt, (function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Qt = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) Zt = "1,27,30," + RegExp.$1, Qt = "1,57,30," + RegExp.$2;
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Vt.Toast)(N ? "Input format error" : "输入格式错误");
        Qt = "1,57,30," + RegExp.$1
      }
      t.setData({
        LOGO1: Zt,
        LOGO2: Qt,
        LOGO: N ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO3: function (t) {
    Be("F9C0" + Oe(1 - pt)), Be("FF17")
  },
  BTLOGO4: function (t) {
    he("设置简约模式文字", "Set the first line logo", "最多6个汉字或者12个英文", Zt, (function (t) {
      Be("FAD2" + Ge(t = unescape(encodeURIComponent(t)))), Be("F7")
    }))
  },
  SetLOGO: function (t, e) {
    re.createSelectorQuery().select("#LOGO").fields({
      node: !0,
      size: !0
    }).exec((function (a) {
      var i = a[0].node,
        o = i.getContext("2d");
      i.width = 60, i.height = 60, o.fillStyle = "#000", o.scale(1, 1), o.fillRect(0, 0, 60, 60), o.fillStyle = "#fff";
      var r = t.split("|");
      zt = "";
      for (var s = 0; s < r.length; s += 1) {
        var c = r[s].split(",");
        zt += c[3];
        var f = c[0],
          u = c[1],
          F = c[2],
          S = c[3];
        o.font = "normal " + F + "px Kaiti", o.fillText(S, f, u)
      }
      var h = [0],
        l = -1;
      n = "DataStart=LOGO{";
      for (var d = 0; d < 60; d += 1) {
        for (var C = o.getImageData(0, d, 60, 1).data, B = 0; B < 60; B += 1) {
          B % 8 == 0 && (B && (n += h[l].toString(16).padStart(2, "0")), l += 1);
          var E = .299 * C[4 * B] + .587 * C[4 * B + 1] + .114 * C[4 * B + 2];
          h[l] = h[l] >> 1, h[l] = h[l] | (E < 100 ? 0 : 128)
        }
        n += (h[l] >> 4).toString(16).padStart(2, "0")
      }
      n += "}DataEnd", re.hideToast(), e.setData({
        LOGO: N ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    Be("F962" + Oe(1 - lt)), Be("FF16")
  },
  BTCAN1: function (t) {
    le("确认是否切换为华为", "Switch to Huawei", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Be("FC530101"), (0, Vt.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), re.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN2: function (t) {
    le("确认是否切换为英可瑞", "Switch to Increase", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Be("FC530201"), (0, Vt.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), re.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN4: function (t) {
    le("确认是否切换为中兴3000", "Switch to ZTE3000", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Be("FC530401"), (0, Vt.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), re.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN8: function (t) {
    le("确认是否切换为英飞源", "Switch to Infy", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Be("FC530801"), (0, Vt.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), re.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN16: function (t) {
    le("确认是否切换为EPS6020", "Switch to EPS6020", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Be("FC531001"), (0, Vt.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), re.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN32: function (t) {
    le("确认是否切换为中兴4875", "Switch to ZTE4875", "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == Yt) {
        for (var e = parseInt(E, 16), a = e.toString(), n = 0, i = 0; i < a.length; i++) n += a.charCodeAt(i);
        Be("C83F" + Math.floor(Math.floor(e / 611) * n).toString(16).slice(-6)), Be("FC532001")
      } else Be("FC532001"), (0, Vt.Toast)(N ? "The device is restarting" : "重置已发送,设备正在重启!"), re.navigateBack({
        delta: 0
      })
    }))
  },
  BTLEDK2: function (t) {
    Se("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      Be("F968" + Oe(t)), Be("FF13")
    }))
  },
  BTLEDK1: function (t) {
    Se("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      Be("F969" + Oe(t)), Be("FF13")
    }))
  },
  BTLEDKS1: function (t) {
    Se("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      Be("F96D" + Oe(t)), Be("FF12")
    }))
  },
  BTLEDKS2: function (t) {
    Se("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      Be("F96A" + Oe(t)), Be("FF13")
    }))
  },
  BTStart1: function (t) {
    Se("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      Be("F96B" + Oe(t)), Be("FF12")
    }))
  },
  BTStart2: function (t) {
    Be("F96C" + Oe(1 - K)), Be("FF12")
  },
  BTGIF1: function (t) {
    Be("F96F" + Oe(1 - ct)), Be("FF15")
  },
  BT_GIF1: function (t) {
    pe((0, Vt.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    pe((0, Vt.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    pe((0, Vt.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    pe((0, Vt.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    pe((0, Vt.GetGIF)(5))
  },
  BTUI: function (a) {
    t.setData({
      CVer: Kt.toFixed(2),
      SCAN: M,
      ID: E,
      ACT: e
    }), Be("F9C8" + Oe(1 - Nt)), Be("FF19")
  },
  Scr1: function (e) {
    t.setData({
      Cr0: se,
      Cr1: "#00ff00",
      Cr2: "#00c8ff",
      Cr3: se,
      Cr4: "#60ffc8",
      Cr5: se,
      Cr6: "#ff9430",
      Cr7: "#f80ca0",
      Cr8: se,
      Cr10: se,
      Cr11: "#00ff00",
      Cr12: "#00c8ff",
      Cr13: "#ff9430",
      Cr14: "#60ffc8",
      Cr15: se,
      Cr16: "#f80ca0",
      Cr17: se
    })
  },
  Scr2: function (e) {
    t.setData({
      Cr0: se,
      Cr1: se,
      Cr2: se,
      Cr3: se,
      Cr4: se,
      Cr5: se,
      Cr6: se,
      Cr7: se,
      Cr8: se,
      Cr10: se,
      Cr11: se,
      Cr12: se,
      Cr13: se,
      Cr14: se,
      Cr15: se,
      Cr16: se,
      Cr17: se
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
    0 == t.data.UI ? (Be("F53000" + de(this.data.Cr0) + "0000f01c"), Be("F53100" + de(this.data.Cr1) + "00209F26"), Be("F53200" + de(this.data.Cr2) + "00479F26"), Be("F53300" + de(this.data.Cr3) + "006e9F27"), Be("F53400" + de(this.data.Cr4) + "00969F3f"), Be("F53500" + de(this.data.Cr5) + "A3204d4d"), Be("F53600" + de(this.data.Cr6) + "50d64f1A"), Be("F53700" + de(this.data.Cr7) + "00d64f1A"), Be("F53801" + de(this.data.Cr8) + "A3774d68")) : 1 == t.data.UI && (Be("F52000" + de(this.data.Cr10) + "0000781c"), Be("F52100" + de(this.data.Cr11) + "001cf02e"), Be("F52200" + de(this.data.Cr12) + "004af02e"), Be("F52300" + de(this.data.Cr13) + "0078f02e"), Be("F52400" + de(this.data.Cr14) + "00a6f02e"), Be("F52500" + de(this.data.Cr15) + "7800781c"), Be("F52600" + de(this.data.Cr16) + "00d4781b"), Be("F52701" + de(this.data.Cr17) + "78d4781b"))
  },
  CK0: function (t) {
    Jt = 0, this.CRSet(this.data.Cr0)
  },
  CK1: function (t) {
    Jt = 1, this.CRSet(this.data.Cr1)
  },
  CK2: function (t) {
    Jt = 2, this.CRSet(this.data.Cr2)
  },
  CK3: function (t) {
    Jt = 3, this.CRSet(this.data.Cr3)
  },
  CK4: function (t) {
    Jt = 4, this.CRSet(this.data.Cr4)
  },
  CK5: function (t) {
    Jt = 5, this.CRSet(this.data.Cr5)
  },
  CK6: function (t) {
    Jt = 6, this.CRSet(this.data.Cr6)
  },
  CK7: function (t) {
    Jt = 7, this.CRSet(this.data.Cr7)
  },
  CK8: function (t) {
    Jt = 8, this.CRSet(this.data.Cr8)
  },
  CK10: function (t) {
    Jt = 10, this.CRSet(this.data.Cr10)
  },
  CK11: function (t) {
    Jt = 11, this.CRSet(this.data.Cr11)
  },
  CK12: function (t) {
    Jt = 12, this.CRSet(this.data.Cr12)
  },
  CK13: function (t) {
    Jt = 13, this.CRSet(this.data.Cr13)
  },
  CK14: function (t) {
    Jt = 14, this.CRSet(this.data.Cr14)
  },
  CK15: function (t) {
    Jt = 15, this.CRSet(this.data.Cr15)
  },
  CK16: function (t) {
    Jt = 16, this.CRSet(this.data.Cr16)
  },
  CK17: function (t) {
    Jt = 17, this.CRSet(this.data.Cr17)
  },
  CRSet: function (t) {
    t.match(/#(..)(..)(..)/), Xt = RegExp.$1, te = RegExp.$2, ee = RegExp.$3, this.setData({
      CR: parseInt(Xt, 16),
      CG: parseInt(te, 16),
      CB: parseInt(ee, 16)
    })
  },
  CRC: function (t) {
    Xt = t.detail.value.toString(16).padStart(2, "0"), me()
  },
  CGC: function (t) {
    te = t.detail.value.toString(16).padStart(2, "0"), me()
  },
  CBC: function (t) {
    ee = t.detail.value.toString(16).padStart(2, "0"), me()
  },
  CTC1: function (e) {
    ie = e.detail.value.toString(16).padStart(2, "0"), (0, Vt.SetCFG)("BGT", ie), t.setData({
      BGC: "#000000" + ie
    })
  },
  BTBGP1: function (e) {
    he("输入图片连接", "Display voltage compensation", "", "", (function (e) {
      (0, Vt.SetCFG)("BGI", 1), (0, Vt.SetCFG)("BGP1", e), t.setData({
        BGP1: e,
        BGP: e,
        BGI: 1
      })
    }))
  },
  BTBGP2: function (e) {
    he("输入图片连接", "Display voltage compensation", "", "", (function (e) {
      (0, Vt.SetCFG)("BGI", 2), (0, Vt.SetCFG)("BGP2", e), t.setData({
        BGP2: e,
        BGP: e,
        BGI: 2
      })
    }))
  },
  BTBGP3: function (e) {
    he("输入图片连接", "Display voltage compensation", "", "", (function (e) {
      (0, Vt.SetCFG)("BGI", 3), (0, Vt.SetCFG)("BGP3", e), t.setData({
        BGP3: e,
        BGP: e,
        BGI: 3
      })
    }))
  },
  BTBGP4: function (e) {
    he("输入图片连接", "Display voltage compensation", "", "", (function (e) {
      (0, Vt.SetCFG)("BGI", 4), (0, Vt.SetCFG)("BGP4", e), t.setData({
        BGP4: e,
        BGP: e,
        BGI: 4
      })
    }))
  },
  BTBGP0: function (e) {
    5 == ++ne && (ne = 0), t.setData({
      BGP: ae[ne],
      BGI: ne
    }), (0, Vt.SetCFG)("BGI", ne)
  },
  BTCKA2: function (t) {
    Be("F972" + Oe(1 - ft)), Be("FF15")
  },
  BTEN1: function (t) {
    $t && this.MSG("", "1100001BE4000005DC000020D0000005DC010" + (1 - N) + "00"), (0, Vt.SetCFG)("UEN", 1 - N), Be("F970" + Oe(1 - N)), Be("FF11")
  },
  BTBLE1: function (t) {
    he("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      Be("FA73" + Ge(t = unescape(encodeURIComponent(t)))), Be("FF20")
    }))
  },
  BTBLE2: function (t) {
    he("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      Be("FA74" + Ge(t)), Be("FF21")
    }))
  },
  BTVIN: function (t) {
    he("设置取电器VIN码", "Set VIN", "标准17位英文和数字", "Up to 17 characters", (function (t) {
      return (t = t.toUpperCase()).match(/^[A-HJ-NPR-Z0-9]{14}\d\d\d$/) ? (Be("FAD3" + Ge(t = unescape(encodeURIComponent(t)))), void Be("FF25")) : void(0, Vt.Toast)(N ? "Incorrect VIN input!" : "输入VIN不正确!")
    }))
  },
  BTTCH1: function (t) {
    he("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return Be("FAD1" + Ge(t)), void Be("FF24");
      (0, Vt.Toast)(N ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    Se("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      Be("F9C7" + Oe(t)), Be("FF18")
    }))
  },
  BTKEY1: function (t) {
    Be("F967" + Oe(1 - O)), Be("FF10")
  },
  BTKEY2: function (t) {
    Be("F966" + Oe(1 - U)), Be("FF11")
  },
  BTDDT1: function (t) {
    Be("F96E" + Oe(dt >= 3 ? 0 : dt + 1)), Be("FF16")
  },
  BTUP6: function (t) {
    he("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Vt.SetCFG)("WID", t), Be("AB00" + Ge(t = unescape(encodeURIComponent(t)))), Be("FF22")
    }))
  },
  BTUP7: function (t) {
    he("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Vt.SetCFG)("WPD", t), Be("AB01" + Ge(t = unescape(encodeURIComponent(t)))), Be("FF23")
    }))
  },
  BTUP1: function (t) {
    oe || this.data.CVer >= this.data.UPDate && !Yt || re.showModal({
      title: N ? "Start Upgrade" : "开始升级",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Be("A700000000" + Ge("NewUI")), void(0, Vt.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP5: function (t) {
    2 == Yt && Be("FD48" + Ge("Cxjdwx"))
  },
  BTUP8: function (t) {
    re.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    re.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    re.setClipboardData({
      data: "设备ID:" + E
    })
  },
  BTUP0: function (t) {
    re.showModal({
      title: N ? "Firmware rollback" : "固件回退",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Be("A7" + Ge(yt ? "37" : "22", 4) + Ge("NewUI")), void(0, Vt.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP9: function (t) {
    re.showModal({
      title: N ? "Write Test Firmware" : "刷入测试固件",
      editable: !1,
      confirmText: N ? "YES" : "确定",
      cancelText: N ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Be("A700000000" + Ge("NewTest")), void(0, Vt.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUFS: function (t) {
    Se("设置温度加速值", "Set temperature acceleration value", "2", "20", (function (t) {
      Be("F963" + Oe(t)), Be("FF14")
    }))
  },
  BTAFS: function (t) {
    Se("设置电流加速值", "Set current acceleration value", "0.1", "3.0", (function (t) {
      Be("F964" + Oe(10 * t)), Be("FF14")
    }))
  },
  BTLFS: function (t) {
    Se("设置初始风速值", "Set initial wind speed value", "20", "200", (function (t) {
      Be("F965" + Oe(t)), Be("FF14")
    }))
  },
  BTMFS: function (t) {
    Se("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      Be("F9C5" + Oe(t)), Be("FF14")
    }))
  },
  BTTMC: function (t) {
    Se("设置超温进入温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      Be("F84A" + ve(t)), Be("FF13")
    }))
  },
  BTTMC1: function (t) {
    Se("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      Be("F84B" + ve(t)), Be("FF13")
    }))
  },
  BTOST: function (t) {
    Se("设置超温关机温度", "Set the exit temperature for over temperature", "50", "120", (function (t) {
      Be("F8F7" + ve(t)), Be("FF18")
    }))
  },
  BTTMW: function (t) {
    Se("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      Be("F84C" + ve(t)), Be("FF13")
    }))
  },
  BTMMV: function (t) {
    Se("设置最高电压限制", "Set maximum voltage limit", "100", "1000", (function (t) {
      Be("F8FA" + ve(t)), Be("FF19"), Be("FF14")
    }))
  },
  BTMMA: function (t) {
    Se("设置最高电流限制", "Set maximum current limit", "10", "400", (function (t) {
      Be("F8F9" + ve(t)), Be("FF19"), Be("FF14")
    }))
  },
  BTRDY: function (t) {
    Se("设置就绪电压范围", "Set the ready voltage range", "1", "20", (function (t) {
      Be("F9CD" + Oe(t)), Be("FF19")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), wx.pageScrollTo({
      scrollTop: 95,
      duration: 300
    }), o > 0 && o < 5 ? le("检测到输出电流", "Detected output current", "如有负载请点取消后断开负载再开始校正,如无负载则为空载电流,点击确定将会设置为最小电流过滤(可在输出电流校正页面中设置).", "If there is a load detected in the output current, please click NO and disconnect the load before starting the calibration. If there is no load, Click YES will set it as the minimum current filter (which can be set on the output current calibration page)", (function (t) {
      Be("F848" + ve(Number(o) + .05)), Be("FF16")
    })) : i < 10 || o > 0 ? (0, Vt.Toast)(N ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Be("C1"), Be("FF"), Se("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / i).toFixed(4),
        a = Number(t / $).toFixed(4);
      Be("C3" + ve(100 * a) + ve(100 * e)), 2 == M ? (Be("F876" + ve(20 * a)), Be("F877" + ve(100 * a))) : 1 == M ? (Be("F876" + ve(41 * a)), Be("F877" + ve(58.5 * a))) : 4 == M ? (Be("F876" + ve(41 * a)), Be("F877" + ve(59 * a))) : 16 == M ? (Be("F876" + ve(44 * a)), Be("F877" + ve(61 * a))) : 32 == M && (Be("F876" + ve(41.2 * a)), Be("F877" + ve(59.4 * a))), Be("FF"), Be("A80" + v + ve(50 * a) + ve(k)), Be("FF")
    })))
  },
  BTOVT1: function (t) {
    yt ? Se("升压采样补偿", "Boost voltage compensation", "0.1", "1", (function (t) {
      t > 999.99 ? t *= 1e-4 : t > 99.99 && (t *= .001), Be("FB47" + ve(100 * t)), Be("FF")
    })) : Se("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      Be("FB47" + ve(100 * t)), Be("FF")
    }))
  },
  BTOVTU: function (t) {
    Be("FB47" + ve(100 * (nt + 5e-4))), Be("FF")
  },
  BTOVTD: function (t) {
    Be("FB47" + ve(100 * (nt - 5e-4))), Be("FF")
  },
  BTOVD1: function (t) {
    yt ? Se("基础电压补偿", "Basic voltage compensation", "10", "40", (function (t) {
      Be("FB46" + ve(100 * t)), Be("FF")
    })) : Se("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      Be("FB46" + ve(100 * t)), Be("FF")
    }))
  },
  BTOVDU: function (t) {
    Be("FB46" + ve(100 * (ot + .001))), Be("FF")
  },
  BTOVDD: function (t) {
    Be("FB46" + ve(100 * (ot - .001))), Be("FF")
  },
  BTOVS: function (t) {
    Fe(N ? "Set voltage range" : "设置电压范围", (N ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Be("F876" + ve(Number(RegExp.$1))), Be("F877" + ve(Number(RegExp.$2))), Be("FF")) : (0, Vt.Toast)(N ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    Se("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      Be("F8F3" + ve(t)), Be("FF")
    }))
  },
  BTOVT3: function (t) {
    i < 10 || o > 0 ? (0, Vt.Toast)(N ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Be("C2"), Be("FF"), Se("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / i).toFixed(4);
      Be("C4" + ve(100 * Number(t / $).toFixed(4)) + ve(100 * e)), Be("FF")
    })))
  },
  BTOVT2: function (t) {
    Se("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      Be("FBF2" + ve(100 * t)), Be("FF")
    }))
  },
  BTO2TU: function (t) {
    Be("FBF2" + ve(100 * (Bt + .003))), Be("FF")
  },
  BTO2TD: function (t) {
    Be("FBF2" + ve(100 * (Bt - .003))), Be("FF")
  },
  BTOVD2: function (t) {
    Se("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      Be("FBF1" + ve(100 * t)), Be("FF")
    }))
  },
  BTO2DU: function (t) {
    Be("FBF1" + ve(100 * (Et + .003))), Be("FF")
  },
  BTO2DD: function (t) {
    Be("FBF1" + ve(100 * (Et - .003))), Be("FF")
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 145,
      duration: 300
    }), o < 5 || $ - i < .2 ? (0, Vt.Toast)(N ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (Be("C0"), Be("FF"), Se("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / o).toFixed(4);
      Be("C5" + ve(100 * Number(t / k).toFixed(4)) + ve(100 * e)), Be("FF")
    })))
  },
  BTOAT1: function (t) {
    Se("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      Be("FB45" + ve(100 * t)), Be("FF")
    }))
  },
  BTOAT2: function (t) {
    Be("FB45" + ve(100 * (it - .003))), Be("FF")
  },
  BTOAT3: function (t) {
    Be("FB45" + ve(100 * (it + .003))), Be("FF")
  },
  BTOAS1: function (t) {
    Se("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      Be("F8F4" + ve(t)), Be("FF")
    }))
  },
  BTCLV: function (t) {
    Se("设置最小电流过滤", "Set minimum current filtering", "0.00", "3.00", (function (t) {
      Be("F848" + ve(t)), Be("FF")
    }))
  },
  BTOAD1: function (t) {
    Se("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      Be("FB44" + ve(100 * t)), Be("FF")
    }))
  },
  BTOAD2: function (t) {
    Be("FB44" + ve(100 * (rt - .003))), Be("FF")
  },
  BTOAD3: function (t) {
    Be("FB44" + ve(100 * (rt + .003))), Be("FF")
  },
  BTOAS: function (t) {
    Fe(N ? "Set current range" : "设置电流范围", (N ? "Now:" : "当前范围:") + Z + "-" + Q, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Be("F878" + ve(Number(RegExp.$1))), Be("F879" + ve(Number(RegExp.$2))), Be("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (Be("F879" + ve(t)), Be("FF")) : (0, Vt.Toast)(N ? "Input format error" : "输入格式错误!"))
    }))
  },
  pwrbt: function (t) {
    Be("A6" + Oe(1 - b)), Be("FF10")
  },
  owbt: function (t) {
    Se("设置输出功率限制", "Set output power limit", "300", P, (function (t) {
      Be("F84D" + ve(t)), Be("FF")
    }))
  },
  tibt: function (t) {
    Se("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      Be("A9" + be(t)), Be("FF")
    }))
  },
  BTYC1: function (t) {
    Se("设置预充电压", "Set pre charge voltage", "0", X, (function (t) {
      Be("F8F6" + ve(t)), Be("FF")
    }))
  },
  BTYC2: function (t) {
    Se("设置预充电流", "Set pre charge current", Z, Q, (function (t) {
      Be("F8F5" + ve(t)), Be("FF")
    }))
  },
  ks1bt: function (t) {
    var e = G[0],
      a = G[1] > Q ? Q : G[1];
    e > X || e < J ? Se("设置输出电压", "Set output voltage", J, X, (function (t) {
      Be("A80" + (v = 1) + ve(t) + ve(a)), Be("FF")
    })) : (Be("A80" + (v = 1) + ve(e) + ve(a)), Be("FF"))
  },
  ks2bt: function (t) {
    var e = w[0],
      a = w[1] > Q ? Q : w[1];
    e > X || e < J ? Se("设置输出电压", "Set output voltage", J, X, (function (t) {
      Be("A80" + (v = 2) + ve(t) + ve(a)), Be("FF")
    })) : (Be("A80" + (v = 2) + ve(e) + ve(a)), Be("FF"))
  },
  ks3bt: function (t) {
    var e = I[0],
      a = I[1] > Q ? Q : I[1];
    e > X || e < J ? Se("设置输出电压", "Set output voltage", J, X, (function (t) {
      Be("A80" + (v = 3) + ve(t) + ve(a)), Be("FF")
    })) : (Be("A80" + (v = 3) + ve(e) + ve(a)), Be("FF"))
  },
  ks4bt: function (t) {
    var e = x[0],
      a = x[1] > Q ? Q : x[1];
    e > X || e < J ? Se("设置输出电压", "Set output voltage", J, X, (function (t) {
      Be("A80" + (v = 4) + ve(t) + ve(a)), Be("FF")
    })) : (Be("A80" + (v = 4) + ve(e) + ve(a)), Be("FF"))
  },
  hqbt1: function (t) {
    yt ? Kt >= 5.39 ? Se("设置超温关机倒计时", "设置超温关机倒计时", 3, 60, (function (t) {
      Be("F961" + Oe(t)), Be("FF15")
    })) : (0, Vt.Toast)(N ? "The current firmware version is not adjustable. If you need to modify it, please upgrade the firmware!" : "当前固件版本不可调,如需修改请升级固件!") : Se("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      Be("F961" + Oe(t)), Be("FF15")
    }))
  },
  hqbt0: function (t) {
    Be("F961" + Oe(0 == st ? yt ? 30 : 10 : 0)), Be("FF15")
  },
  nvbt: function (t) {
    Fe(N ? "Set Output Voltage" : "设置输出电压", (N ? "Range:" : "范围:") + J + "-" + X, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) Be(t.substr(2, 4) + ve(t.substr(6))), Be("FF");
        else {
          if (t.startsWith("FFF9")) return Be(t.substr(2)), void Be("FF");
          if ("DEBUG=0" == t)(0, Vt.SetCFG)("DEBUG", 0), kt = 0, Be("F9C900"), Be("F9CA01"), Be("F9CB01");
          else if ("DEBUG=1" == t)(0, Vt.SetCFG)("DEBUG", 1), kt = 1, Be("F9C900"), Be("F9CA01"), Be("F9CB01");
          else if ("DEBUG=2" == t)(0, Vt.SetCFG)("DEBUG", 2), kt = 2, Be("F9C9FF"), Be("F9CA01"), Be("F9CB01");
          else if (t.startsWith("FFC8")) Be(t.substr(2, 4) + t.substr(6)), Be("FF");
          else if ("异常修复" == t && Kt >= 5.39) le("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置", "Exception repair will detect and reset certain settings", (function (t) {
            Be("F60001"), (0, Vt.Toast)(N ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), re.navigateBack({
              delta: 0
            })
          }));
          else if ("强制升级" == t || "测试版" == t) re.showModal({
            title: N ? "Start Upgrade" : "开始升级",
            editable: !1,
            confirmText: N ? "YES" : "确定",
            cancelText: N ? "NO" : "取消",
            success: function (e) {
              if (e.confirm) return Be("A700000000" + Ge("测试版" == t ? "NewTest" : "NewUI")), void(0, Vt.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
            }
          });
          else if ("测试二" == t) re.showModal({
            title: N ? "Start Upgrade" : "开始升级",
            editable: !1,
            confirmText: N ? "YES" : "确定",
            cancelText: N ? "NO" : "取消",
            success: function (t) {
              if (t.confirm) return Be("A700000000" + Ge("Test2")), void(0, Vt.Toast)(N ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
            }
          });
          else {
            if (Be("A1" + Ge(t)), (t = parseFloat(t)) > X || t < J || !isFinite(t)) return void(0, Vt.Toast)(N ? "Beyond the set range!" : "超出设置范围!");
            Be("A80" + v + ve(t) + ve(k)), Be("FF")
          }
        }
      else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && pe(e)
        }
      })
    }))
  },
  nabt: function (t) {
    Se("设置输出电流", "Set output current", Z, Q, (function (t) {
      Be("A80" + v + ve($) + ve(t)), Be("FF")
    }))
  },
  sa2bt3: function (t) {
    Se("设置充电时间(分钟)", "Set charging time(Minute)", 0, 600, (function (t) {
      Be("A9" + be(t)), Be("FF")
    }))
  },
  SetSGK: function () {
    Kt >= 5.39 ? (Be("A50" + (0 == Rt ? "1" : "0")), Be("FF19")) : (Be("F857" + ve(0 == W ? 1 : 0)), Be("FF12"))
  },
  sa2bt2: function (t) {
    Se("设置二段电流", "Set second stage current", Z, Q, (function (t) {
      Be("F857" + ve(t)), Be("FF12")
    }))
  },
  sa2bt1: function (t) {
    Se("设置二段电压", "Set second stage voltage", J, X, (function (t) {
      Be("F858" + ve(t)), Be("FF12")
    }))
  },
  sa2bt0: function (t) {
    yt && (Kt < 5.39 || $ > 126) ? Be("A9" + be(_t ? 0 : 60)) : (Be("F858" + (0 == W ? ve($ - 3) : "00000000")), Be("F857" + (0 == W ? ve(10) : "00000000")), Be("FF12"))
  },
  sdbt1: function (t) {
    Se("设置延时时间(分钟)", "Set delay time (Minutes)", 1, 600, (function (t) {
      Be("F859" + ve(t)), Be("FF16")
    }))
  },
  sdbt2: function (t) {
    Se("设置关机电流", "SSet startup delay current", "0.00", "10.00", (function (t) {
      Be("F8F0" + ve(t)), Be("FF")
    }))
  },
  sdbt0: function (t) {
    Be("F859" + (0 == St ? ve(1) : "00000000")), Be("FF16")
  },
  MSG: function (n, Wt) {
    if (!a)
      if (1 != kt || Wt.startsWith("D") || (0, Vt.print)("MSG:", Wt), "EE" == Wt.substring(0, 2)) {
        e = we(Wt.substring(20, 40)), Kt = .01 * parseInt(Wt.substring(16, 20), 16), M = xe(Wt, 14), yt = 0, 1 == M ? M = "Huawei" : 2 == M ? M = "Increase" : 4 == M ? M = "ZTE3000" : 8 == M ? M = "INFY" : 12 == M ? (M = "EV_Station", yt = 2) : 14 == M ? (M = "EV_Charger", yt = 1) : 16 == M ? M = "EPS6020" : 32 == M ? M = "ZTE4875" : 64 == M && (M = "Sinexcel"), "EV_Charger" == M ? t.setData({
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
        }) : "Huawei" == M && t.setData({
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
        }), E = Wt.substring(2, 14), e.startsWith("Cxjdwx") && (e = "未激活"), (new Date).getTime() > 17486208e5 && (Date.parse(e) < 17486208e5 || (0, Vt.CheckID)(E) || (a = 1, re.showModal({
          title: N ? "Abnormal device authorization" : "设备授权异常",
          content: "",
          confirmText: N ? "Yes I Kown" : "我知道了",
          showCancel: !1,
          success: function (t) {
            re.navigateBack({
              delta: 0
            })
          }
        }))), E = "0x" + E, t.setData({
          CVer: Kt.toFixed(2),
          CEV: yt,
          SCAN: M,
          ID: E,
          ACT: e
        });
        var Pt = (0, Vt.GetCFG)(E, "0000");
        Yt && (Pt = (Number(E) + 19880914).toString(16).substring(4, 8)), 0 != Ht && 3 != Ht || Be("A0" + Ge(Pt))
      } else if (Wt.startsWith("A101")) t.setData({
      ShowBar: 0,
      Panel: 2,
      LOGO: N ? "Preview" : "预览"
    });
    else if (Wt.startsWith("A001")) {
      if (Ht = 2, ("Cxjdwx" == e || "未激活" == e) && !Yt) {
        var Lt = new Date;
        Be("FD48" + Ge(Lt.getFullYear() + "-" + (Lt.getMonth() + 1) + "-" + Lt.getDate()))
      }
      Kt <= 5.28 && Be("FF")
    } else if (Wt.startsWith("A000")) {
      if (Ht) return;
      Ht = 1, (0, Vt.Toast)(N ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        re.showModal({
          title: N ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: !0,
          placeholderText: "ID:" + E,
          confirmText: N ? "YES" : "确定",
          cancelText: N ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, Vt.SetCFG)(E, t.content), Be("A0" + Ge(t.content)), Ht = 0)
          }
        })
      }), 1e3)
    } else if (Wt.startsWith("F101")) De();
    else if (Wt.startsWith("F201")) De();
    else if (Wt.startsWith("F301")) Te = 0, ge = [], (0, Vt.Toast)(N ? "Send End!" : "发送完成!");
    else if (Wt.startsWith("01")) {
      i = Ie(Wt, 2), o = Ie(Wt, 10), r = Ie(Wt, 18), s = Ie(Wt, 26), c = xe(Wt, 34), f = xe(Wt, 36), "0" == (u = xe(Wt, 38)) ? jt = N ? "Communication Abnormality" : "CAN通讯异常" : 50 == c ? jt = N ? "Stop Charging" : "中 止 充 电" : 51 == c ? jt = N ? "Charging Error" : "充 电 错 误" : 52 == c ? jt = N ? "Seting Handshake Information" : "配置握手信息" : 53 == c ? jt = N ? "Seting Charging Information" : "配置充电信息" : 54 == c ? jt = N ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == c ? jt = N ? "Ready For Use" : "已准备就绪" : 56 == c ? jt = N ? "Charging" : "正在充电中" : 57 == c ? jt = N ? "Charging Completed" : "充电完成" : 58 == c ? jt = N ? "Overtemperature shutdown" : "超温关机(" + qt + ")" : 0 == i ? jt = N ? "Charger Output Abnormality" : "充电器输出异常" : 4 == c ? jt = N ? "Charger Shutdown" : "充电器已关机" : 0 == c ? jt = N ? "Waiting For Battery Connection" : "等待接入电池" : 1 == c ? jt = N ? "Charging" : "正在充电中" : 2 == c ? jt = N ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == c ? jt = N ? "Precharging" : "正在预充" : 40 == c ? jt = N ? "Appointment Waiting" : "预约等待中" : 3 == c ? jt = N ? "Charging Completed" : "充电完成" : 43 == c ? jt = N ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == c && (jt = N ? "Over Temperature Shutdown" : "超温保护关机");
      var $t = .65 * wx.getWindowInfo().windowWidth,
        zt = Math.max(15, Math.min(30, $t / (N ? jt.length : 1.8 * jt.length) * 1.5));
      t.setData({
        STR: jt,
        NFS: f,
        OL: u,
        OV: i,
        OA: o,
        OW: r,
        OT: s,
        FSize: zt
      })
    } else if (Wt.startsWith("02")) {
      F = Ie(Wt, 2), S = Ie(Wt, 10), h = Ie(Wt, 18), l = Ie(Wt, 26), d = xe(Wt, 34), C = xe(Wt, 36), B = xe(Wt, 38);
      var Zt = Number(r / h * 100).toFixed(2),
        Qt = Number(h - r).toFixed(2);
      t.setData({
        IV: F,
        IA: S,
        IW: h,
        IT: l,
        ST0: d,
        ST1: C,
        ST2: B,
        EEI: h ? Zt : "0.00",
        EES: h ? Qt : "0.00"
      })
    } else if (Wt.startsWith("03")) g = Ie(Wt, 2), T = Ie(Wt, 10), p = Ie(Wt, 18), D = Ie(Wt, 26), A = xe(Wt, 34), m = xe(Wt, 36), t.setData({
      Ah: g,
      Wh: T,
      AH: p,
      WH: D,
      SWT: A,
      SMT: m
    });
    else if (Wt.startsWith("04")) _t = xe(Wt, 34), _t += xe(Wt, 36) << 8, qt = xe(Wt, 38), t.setData({
      YS: Ce(_t),
      Ti: Ce(Ie(Wt, 2)),
      TI: Ce(Ie(Wt, 10)),
      NSD: Ce(Ie(Wt, 18)),
      SOC: Number(Ie(Wt, 26)).toFixed(0)
    });
    else if (Wt.startsWith("10")) G = [Ie(Wt, 2, 1), Ie(Wt, 10, 1)], w = [Ie(Wt, 18, 1), Ie(Wt, 26, 1)], v = xe(Wt, 34), b = xe(Wt, 36), O = xe(Wt, 38), 1 == v ? (k = G[1], $ = G[0]) : 2 == v && (k = w[1], $ = w[0]), 3 == v ? (k = I[1], $ = I[0]) : 4 == v && (k = x[1], $ = x[0]), t.setData({
      KS1: G,
      KS2: w,
      KSi: v,
      PON: b,
      KON: O,
      SV: $.toFixed(2),
      SA: k.toFixed(2)
    });
    else if (Wt.startsWith("11")) I = [Ie(Wt, 2, 1), Ie(Wt, 10, 1)], x = [Ie(Wt, 18, 1), Ie(Wt, 26, 1)], M = xe(Wt, 34), N = xe(Wt, 36), U = xe(Wt, 38), (0, Vt.SetCFG)("UEN", N), 1 == v ? (k = G[1], $ = G[0]) : 2 == v && (k = w[1], $ = w[0]), 3 == v ? (k = I[1], $ = I[0]) : 4 == v && (k = x[1], $ = x[0]), t.setData({
      KS3: I,
      KS4: x,
      CAN: M,
      UEN: N,
      KRC: U,
      SV: $.toFixed(2),
      SA: k.toFixed(2)
    });
    else if (Wt.startsWith("12")) R = Ie(Wt, 2), W = Ie(Wt, 10), P = Ie(Wt, 18), V = Ie(Wt, 26), L = xe(Wt, 34), K = xe(Wt, 36), y = xe(Wt, 38), t.setData({
      SV2: R,
      SA2: W,
      SMW: P,
      UMW: V,
      WTi: L,
      ETi: K,
      Sleep: y
    });
    else if (Wt.startsWith("13")) {
      Y = Ie(Wt, 2), H = Ie(Wt, 10), j = Ie(Wt, 18);
      Ie(Wt, 26);
      _ = xe(Wt, 34), q = xe(Wt, 36), z = xe(Wt, 38), t.setData({
        TMW: Y,
        UMT: H,
        OMT: j,
        LEDK0: _,
        LEDK1: q,
        LEDK2: z
      })
    } else if (Wt.startsWith("14")) Z = Ie(Wt, 2), Q = Ie(Wt, 10), J = Ie(Wt, 18), X = Ie(Wt, 26), tt = xe(Wt, 34), et = xe(Wt, 36), at = .1 * xe(Wt, 38), t.setData({
      LSA: Z,
      HSA: Q,
      LSV: J,
      HSV: X,
      UFS: tt,
      LFS: et,
      AFS: at.toFixed(1)
    }), Z = Number(Z), J = Number(J), Q = Number(Q), X = Number(X);
    else if (Wt.startsWith("15")) nt = .01 * Ie(Wt, 2), it = .01 * Ie(Wt, 10), ot = .01 * Ie(Wt, 18), rt = .01 * Ie(Wt, 26), st = xe(Wt, 34), ct = xe(Wt, 36), ft = xe(Wt, 38), t.setData({
      OVT: nt.toFixed(4),
      OAT: it.toFixed(4),
      OVD: ot.toFixed(4),
      OAD: rt.toFixed(4),
      UHQ: st,
      GIF: ct,
      CKA2: ft
    });
    else if (Wt.startsWith("16")) ut = Ie(Wt, 2), Ft = Ie(Wt, 10), St = Ie(Wt, 18), ht = Ie(Wt, 26), lt = xe(Wt, 34), dt = xe(Wt, 36), Ct = .01 * xe(Wt, 38), t.setData({
      L2V: ut,
      H2V: Ft,
      USD: St,
      NTC: lt,
      DDT: dt,
      CLV: Ct,
      SDU: ht
    });
    else if (Wt.startsWith("17")) Bt = .01 * Ie(Wt, 2), Et = .01 * Ie(Wt, 10), gt = Ie(Wt, 18), Tt = Ie(Wt, 26), pt = xe(Wt, 34), Dt = xe(Wt, 36), At = xe(Wt, 38), t.setData({
      O2D: Et.toFixed(4),
      O2T: Bt.toFixed(4),
      OVS: gt,
      OAS: Tt,
      UEG: pt,
      UCN: Dt,
      MFS: At
    });
    else if (Wt.startsWith("18")) mt = Ie(Wt, 2), Gt = Ie(Wt, 10), wt = Ie(Wt, 18), vt = Ie(Wt, 26), bt = xe(Wt, 34), Ot = xe(Wt, 36), It = xe(Wt, 38), t.setData({
      YCA: mt,
      YCV: Gt,
      DOL: bt,
      DST: Ot,
      LKS: It,
      TCH: vt,
      OST: wt
    });
    else if (Wt.startsWith("19")) xt = Ie(Wt, 2), Mt = Ie(Wt, 10), Nt = xe(Wt, 34), Ut = xe(Wt, 36), Rt = xe(Wt, 38), t.setData({
      UI: Nt,
      MMA: xt,
      MMV: Mt,
      RDY: Ut,
      SGK: Rt
    });
    else if (Wt.startsWith("20")) {
      var Jt = we(Wt.substring(2, 40));
      t.setData({
        SSID: Jt
      })
    } else if (Wt.startsWith("21")) t.setData({
      UPWD: we(Wt.substring(2, 40))
    });
    else if (Wt.startsWith("22")) {
      var Xt = we(Wt.substring(2, 40)),
        te = (0, Vt.GetCFG)("WID", Xt);
      Xt != te && Be("AB00" + Ge(Xt = unescape(encodeURIComponent(te)))), t.setData({
        WID: te
      })
    } else if (Wt.startsWith("23")) {
      var ee = we(Wt.substring(2, 40)),
        ae = (0, Vt.GetCFG)("WPD", ee);
      ee != ae && Be("AB01" + Ge(ee = unescape(encodeURIComponent(ae)))), t.setData({
        WPD: ae
      })
    } else if (Wt.startsWith("24")) t.setData({
      LKV: we(Wt.substring(2, 40))
    });
    else if (Wt.startsWith("25")) t.setData({
      VIN: we(Wt.substring(2, 40))
    });
    else if (Wt.startsWith("50")) {
      0;
      var ne = xe(Wt, 2);
      3 & ne ? t.setData({
        E1A: "正常",
        E1S: 3 & ne
      }) : ne >> 2 & 3 ? t.setData({
        E1A: "人工",
        E1S: ne >> 2 & 3
      }) : ne >> 4 & 3 ? t.setData({
        E1A: "故障",
        E1S: ne >> 4 & 3
      }) : ne >> 6 & 3 && t.setData({
        E1A: "车辆",
        E1S: ne >> 6 & 3
      }), 3 & (ne = xe(Wt, 4)) ? t.setData({
        E2S: 3 & ne
      }) : ne >> 2 & 3 ? t.setData({
        E3S: ne >> 2 & 3
      }) : ne >> 4 & 3 ? t.setData({
        E4S: ne >> 4 & 3
      }) : ne >> 6 & 3 && t.setData({
        E5S: ne >> 6 & 3
      }), 3 & (ne = xe(Wt, 6)) ? t.setData({
        E6S: 3 & ne
      }) : ne >> 2 & 3 ? t.setData({
        E7S: ne >> 2 & 3
      }) : ne >> 4 & 3 ? t.setData({
        E8S: ne >> 4 & 3
      }) : ne >> 6 & 3 && t.setData({
        E9S: ne >> 6 & 3
      }), 3 & (ne = xe(Wt, 8)) ? t.setData({
        EAS: 3 & ne
      }) : ne >> 2 & 3 ? t.setData({
        EBS: ne >> 2 & 3
      }) : ne >> 4 & 3 && t.setData({
        ECS: ne >> 4 & 3
      })
    } else if (Wt.startsWith("51")) {
      t.setData({
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
      var ie = xe(Wt, 2);
      3 & ie && t.setData({
        E4S: 3 & ie
      }), 3 & (ie = xe(Wt, 4)) && t.setData({
        E5S: 3 & ie
      }), ie >> 2 & 3 && t.setData({
        E6S: ie >> 2 & 3
      }), 3 & (ie = xe(Wt, 6)) && t.setData({
        E7S: 3 & ie
      }), ie >> 2 & 3 && t.setData({
        E8S: ie >> 2 & 3
      }), ie >> 4 & 3 && t.setData({
        E9S: ie >> 4 & 3
      }), 3 & (ie = xe(Wt, 8)) && t.setData({
        EAS: 3 & ie
      }), ie >> 2 & 3 && (ie >> 2 & 3) < 3 && t.setData({
        EBS: ie >> 2 & 3
      }), ie >> 4 & 3 && (ie >> 4 & 3) < 3 && t.setData({
        ECS: ie >> 4 & 3
      })
    } else if (Wt.startsWith("40")) {
      fe = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"], ue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var oe = xe(Wt, 2);
      128 & oe && Me("测试 模式"), 64 & oe && Me("负载 震荡"), 32 & oe && Me("输出 继电器"), 16 & oe && Me("放电 电路"), 8 & oe && Me("继电器 电路"), 4 & oe && Me("短路 锁死"), 2 & oe && Me("硬件 地址"), 1 & oe && Me("放电 电路"), 128 & (oe = xe(Wt, 4)) && Me("更换 地址"), 64 & oe && Me("地址 冲突"), 32 & oe && Me("均流 屏蔽"), 16 & oe && Me("通讯 异常"), 8 & oe && Me("电容 电压"), 4 & oe && Me("输出 过压"), 2 & oe && Me("输出 模式"), 1 & oe && Me("插座 异常"), 128 & (oe = xe(Wt, 6)) && Me("母线 电压"), 64 & oe && Me("母线 平衡"), 32 & oe && Me("输入 停电"), 16 & oe && Me("恒流 状态"), 8 & oe && Me("输出 短路"), 4 & oe && Me("内部 通讯"), 2 & oe && Me("效率 寻优"), 1 & oe && Me("均流 异常"), 128 & (oe = xe(Wt, 8)) && Me("PFC 故障"), 64 & oe && Me("输入 过压"), 32 & oe && Me("ID 重复"), 16 & oe && Me("严重 均流"), 8 & oe && Me("交流 缺相"), 4 & oe && Me("三项 平衡"), 2 & oe && Me("输入 欠压"), 1 & oe && Me("顺序 启机"), 128 & (oe = xe(Wt, 10)) && Me("通讯 质量"), 64 & oe && Me("自动 模式"), 32 & oe && Me("地址 重排"), 16 & oe && Me("内部 过温"), 4 & oe && Me("风机 异常"), 2 & oe && Me("模块 关机"), 1 & oe && Me("低温 保护"), 128 & (oe = xe(Wt, 12)) && Me("输出 欠压"), 64 & oe && Me("输出 过流"), 32 & oe && Me("存储 芯片"), 16 & oe && Me("风机 故障"), 8 & oe && Me("模块 保护"), 4 & oe && Me("模块 故障"), 2 & oe && Me("超温 保护"), 1 & oe && Me("过压 锁死");
      var se = [fe[0].split(" "), fe[1].split(" "), fe[2].split(" "), fe[3].split(" "), fe[4].split(" "), fe[5].split(" "), fe[6].split(" "), fe[7].split(" "), fe[8].split(" "), fe[9].split(" "), fe[10].split(" "), fe[11].split(" ")];
      t.setData({
        E1S: ue[0],
        E1A: se[0][0],
        E1B: se[0][1],
        E2S: ue[1],
        E2A: se[1][0],
        E2B: se[1][1],
        E3S: ue[2],
        E3A: se[2][0],
        E3B: se[2][1],
        E4S: ue[3],
        E4A: se[3][0],
        E4B: se[3][1],
        E5S: ue[4],
        E5A: se[4][0],
        E5B: se[4][1],
        E6S: ue[5],
        E6A: se[5][0],
        E6B: se[5][1],
        E7S: ue[6],
        E7A: se[6][0],
        E7B: se[6][1],
        E8S: ue[7],
        E8A: se[7][0],
        E8B: se[7][1],
        E9S: ue[8],
        E9A: se[8][0],
        E9B: se[8][1],
        EAS: ue[9],
        EAA: se[9][0],
        EAB: se[9][1],
        EBS: ue[10],
        EBA: se[10][0],
        EBB: se[10][1],
        ECS: ue[11],
        ECA: se[11][0],
        ECB: se[11][1]
      })
    } else if (Wt.startsWith("D1") || Wt.startsWith("D0")) {
      if (2 != kt) return;
      var ce = Wt.substring(2, 10),
        Fe = [Wt.substring(10, 12), Wt.substring(12, 14), Wt.substring(14, 16), Wt.substring(16, 18), Wt.substring(18, 20), Wt.substring(20, 22), Wt.substring(22, 24), Wt.substring(24, 26)],
        Se = parseInt(ce, 16);
      if (405206102 == Se) 38, console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "电桩", "握手信息");
      else if (402781270 == Se) console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "电桩", "车辆识别" + Fe[0]);
      else if (485291094 == Se) "11" == Fe[0] ? console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "电桩", "同意收包" + Fe[6]) : "13" == Fe[0] && console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "电桩", "收包完成" + Fe[6]);
      else if (403174486 == Se) console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "电桩", "同步时间" + Fe[0] + Fe[1]);
      else if (403240022 == Se) 9, X = parseInt(Fe[1] + Fe[0], 16), J = parseInt(Fe[3] + Fe[2], 16), Q = parseInt(Fe[5] + Fe[4], 16), Z = parseInt(Fe[7] + Fe[6], 16), console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "电桩", "充电范围:电压" + J + "-" + X + " 电流" + Z + "-" + Q);
      else if (269153366 == Se) console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "电桩", "准备就绪" + Fe[0]);
      else if (403895382 == Se) {
        var he = parseInt(Fe[1] + Fe[0], 16),
          le = parseInt(Fe[3] + Fe[2], 16),
          de = parseInt(Fe[5] + Fe[4], 16);
        console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "电桩", "输出信息:V" + he + " A" + le + " T" + de)
      } else if (270201942 == Se) 26, console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "电桩", "中止充电");
      else if (136311894 == Se) 31, console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "电桩", "充电器错");
      else if (405231348 == Se) {
        var Ee = parseInt(Fe[1] + Fe[0], 16);
        console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "取电器", "绝缘信息:" + Ee)
      } else if (269047540 == Se) console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "取电器", "电池就绪:" + Fe[0]);
      else if (403724020 == Se) {
        var pe = .1 * parseInt(Fe[1] + Fe[0], 16),
          Ae = .1 * parseInt(Fe[3] + Fe[2], 16);
        console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "取电器", "需求信息:V" + pe + " A" + Ae)
      } else if (485250804 == Se) console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "取电器", "请求多包:" + Fe[6]);
      else if (485185268 == Se) console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "取电器", "多包数据");
      else if (403920628 == Se) console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], "取电器", "车辆状态");
      else {
        var me = 244 == (255 & Se) ? "取电器" : "电桩";
        console.log(ce, Fe[0], Fe[1], Fe[2], Fe[3], Fe[4], Fe[5], Fe[6], Fe[7], me, "未知")
      }
    }
  },
  onLoad: function (e) {
    t = this, Ht = 0, Te = 0, a = 0, $t = Number(e.Test), Yt = Number(e.GM), yt = Number(e.CEV), oe = 0;
    var n = (0, Vt.GetGIF)(1);
    n.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var i = RegExp.$2;
    (n = (0, Vt.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var o = RegExp.$2;
    (n = (0, Vt.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var r = RegExp.$2;
    (n = (0, Vt.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var s = RegExp.$2;
    (n = (0, Vt.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var c = RegExp.$2;
    N = (0, Vt.GetCFG)("UEN"), kt = (0, Vt.GetCFG)("DEBUG"), ne = (0, Vt.GetCFG)("BGI", 0), ie = (0, Vt.GetCFG)("BGT", "80"), ae[1] = (0, Vt.GetCFG)("BGP1", "https://dingyue.ws.126.net/2022/0808/701db340g00rg9pym02h5d200cs00leg00it00vh.gif"), ae[2] = (0, Vt.GetCFG)("BGP2", "https://img2.baidu.com/it/u=2215745416,4118415336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422"), ae[3] = (0, Vt.GetCFG)("BGP3", "https://c-ssl.dtstatic.com/uploads/item/201912/08/20191208175320_skjmi.thumb.1000_0.jpg"), ae[4] = (0, Vt.GetCFG)("BGP4", "https://wx4.sinaimg.cn/mw690/9f2299eegy1hqwec2a3ncj21kw2dcx6p.jpg");
    var f = (0, Vt.GetCFG)("ShowM");
    t.setData({
      GIF1: "data:image/gif;base64," + i,
      GIF2: "data:image/gif;base64," + o,
      GIF3: "data:image/gif;base64," + r,
      GIF4: "data:image/gif;base64," + s,
      GIF5: "data:image/gif;base64," + c,
      UEN: N,
      ShowM: f,
      RollV: "5.35(稳定版)",
      TestV: "5.39(测试一)",
      RoCEV: "5.38",
      UPDate: "5.39",
      APP: "1.24",
      GM: Yt,
      ADD: oe,
      CAN: Kt,
      CEV: yt,
      BGI: ne,
      BGT: parseInt(ie, 16),
      BGC: "#000000" + ie,
      BGP: ae[ne],
      BGP1: ae[1],
      BGP2: ae[2],
      BGP3: ae[3],
      BGP4: ae[4]
    }), $t && (ce[0] = "1", ce[1] = "2", ce[2] = "3", ce[3] = "4", yt ? this.MSG("", "EEA47210A4AE300E0" + 535..toString(16) + "43786A64777800000000") : this.MSG("", "EEA47210A4AE30010" + 535..toString(16) + "323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000021340000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), Lt.onBLEConnectionStateChange((function () {
      a || (a = 1, re.showModal({
        title: N ? "Bluetooth Disconnected" : "蓝牙信号丢失",
        content: N ? "Blue abnormal interruption is usually caused by shutdown, weak signal, or significant signal interference" : "通常是关机或信号弱或干扰大导致",
        confirmText: N ? "Yes I Kown" : "我知道了",
        showCancel: !1,
        success: function (t) {
          re.navigateBack({
            delta: 0
          })
        }
      })), re.navigateBack({
        delta: 0
      })
    })), Lt.onBLECharacteristicValueChange1(this.MSG), Ht = 3, Be("A0" + Ge("0000")), setTimeout((function () {
      3 == Ht && (Ht = 0, Be("A0" + Ge((0, Vt.GetCFG)(E, "0000"))), console.log("Re login:1"))
    }), 1500)
  },
  onUnload: function () {
    a = 1, Lt.closeBLEConnection()
  },
  onShow: function (t) {
    a = 0
  },
  onHide: function () {
    a = 1
  }
});