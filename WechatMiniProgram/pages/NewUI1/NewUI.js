var t, e, a, n, i, r, o, s, c, f, u, F, S, h, l, C, d, g, B, T, E, p, D, m, A, G, w, v, b, O, I, U, x, N, M, V, W, R, P, L, K, y, k, $, Y, H, j, _, z, Z, q, Q, J, X, tt, et, at, nt, it, rt, ot, st, ct, ft, ut, Ft, St, ht, lt, Ct, dt, gt, Bt, Tt, Et, pt, Dt, mt, At, Gt, wt, vt, bt, Ot, It, Ut, xt, Nt, Mt, Vt, Wt, Rt, Pt, Lt, Kt, yt, kt, $t, Yt, Ht, jt, _t, zt = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  Zt = require("../../@babel/runtime/helpers/asyncToGenerator"),
  qt = require("../../4E08A4649E166AAF286ECC635736D4C0.js"),
  Qt = require("../../1C192C069E166AAF7A7F4401A546D4C0.js"),
  Jt = 10,
  Xt = 0,
  te = 0,
  ee = 0,
  ae = 0,
  ne = 0,
  ie = "设备连接成功",
  re = 0,
  oe = 30,
  se = 1,
  ce = "欢迎使用",
  fe = "1,27,30,欢迎",
  ue = "1,57,30,使用",
  Fe = 0,
  Se = "ff",
  he = "ff",
  le = "ff",
  Ce = ["/img/bc1.gif", "", "", "", ""],
  de = 0,
  ge = "80",
  Be = 0,
  Te = wx,
  Ee = "#ffffff",
  pe = ["1", "2", "3", "4"],
  De = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "温度 异常", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"],
  me = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Ae(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  Te.showModal({
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

function Ge(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Te.showModal({
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

function we(t, e, a, n) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Te.showModal({
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

function ve(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Te.showModal({
    title: k ? e : t,
    content: k ? n : a,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      t.confirm && i(t)
    }
  })
}

function be(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function Oe(t) {
  var e = Math.floor(t / 3600),
    a = Math.floor(t % 3600 / 60),
    n = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(a).padStart(2, "0") + ":" + String(n).padStart(2, "0")
}

function Ie(t) {
  return Ue.apply(this, arguments)
}

function Ue() {
  return (Ue = Zt(zt().mark((function t(e) {
    return zt().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (1 == ee && console.log("Send", e), 0 == Ne) {
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
var xe = [""],
  Ne = 0;

function Me(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  0 == Ne ? Te.showModal({
    title: k ? "Confirm Whether To Send" : "确认是否发送",
    editable: false,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (n) {
      if (n.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), Ne = 0, (xe = [])[0] = "F1" + (a ? RegExp.$1 : Re(RegExp.$1));
        for (var i = e ? RegExp.$2 : We(RegExp.$2), r = 0; r < i.length; r += 240) Ne++, xe[Ne] = "F2" + i.slice(r, r + 240);
        xe[xe.length] = "F3", Ne = 0, Ve()
      }
    }
  }) : (0, qt.Toast)(k ? "There Are Unfinished Sending Tasks" : "有发送任务未完成")
}

function Ve(t) {
  var e = xe[Ne];
  Qt.easySendData1(e, true), (0, qt.Toast)((k ? "Sending:" : "发送进度:") + (Ne / xe.length * 100).toFixed(2) + "%"), Ne++
}

function We(t) {
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

function Re(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString(16).padStart(2, "0");
  return e && (a = a.padEnd(2 * e, "0")), a
}

function Pe(t) {
  for (var e = "", a = 0, n = "", i = 0; i < t.length / 2; i++) {
    var r = t.substr(2 * i, 2),
      o = parseInt(r, 16);
    if (0 == o) break;
    a && o ? (n += "%" + r, (a -= 1) || (e += decodeURIComponent(n), n = "")) : o >= 224 & o <= 239 ? (n += "%" + r, a = 2) : o && (e += String.fromCharCode(o))
  }
  return e
}

function Le(t) {
  return Math.floor(100 * t).toString(16).padStart(8, "0")
}

function Ke(t) {
  return Math.floor(t).toString(16).padStart(4, "0")
}

function ye(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function ke(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    i = t.getFloat32(e, true).toFixed(a);
  return n ? parseFloat(i) : i
}

function $e(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    n = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return a ? parseFloat(n) : n
}

function Ye(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}

function He(t) {
  for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, a = 0, n = 0; n < 12; n++)
    if (De[n] == t) {
      me[n] = e, a = 1;
      break
    } if (!a && e)
    for (var i = 1; i < 11; i++)
      if (6 != i && 0 == me[i]) {
        De[i] = t, me[i] = e;
        break
      }
}
Page({
  data: {
    nbsp: "　",
    Cr0: Ee,
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: Ee,
    Cr4: "#60ffc8",
    Cr5: Ee,
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: Ee,
    Cr10: Ee,
    Cr11: "#00ff00",
    Cr12: "#00c8ff",
    Cr13: "#ff9430",
    Cr14: "#60ffc8",
    Cr15: Ee,
    Cr16: "#f80ca0",
    Cr17: Ee,
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
  uset: function (t) {
    Ie("FF01"), (2 == ne || ae) && this.setData({
      Panel: ae ? 2 : 3,
      ShowBar: ae ? 0 : Jt < Number("5.40") ? 4 : 25,
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
    we("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      Ie("FA75" + Re(t))
    }))
  },
  BTRST: function (t) {
    ve("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      Ie("F60100"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Te.navigateBack({
        delta: 0
      })
    }))
  },
  BTRST1: function (t) {
    ve("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置并重启", "Exception repair will detect and reset certain settings", (function (t) {
      Ie("F60001"), (0, qt.Toast)(k ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), Te.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    ve("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      Ie("F001"), (0, qt.Toast)(k ? "The device is restarting" : "设备正在重启!"), Te.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    ve("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      Ie("AA01"), (0, qt.Toast)(k ? "Data cleared to zero" : "数据已清零!"), Te.navigateBack({
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
    Ie("AC00"), Ie("FF18")
  },
  DST2: function (t) {
    Ie("AC01"), Ie("FF18")
  },
  DST3: function (t) {
    Ie("AC02"), Ie("FF18")
  },
  DST4: function (t) {
    Ie("AC03"), Ie("FF18")
  },
  BTKT1: function (t) {
    Ie("A4" + ye(1 - H))
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), Ge("设置输出最大功率", "Set maximum output power", "500", "10000", (function (t) {
      Ie("F84E" + Le(t)), Ie("F84D" + Le(t)), Ie("FF12")
    }))
  },
  BTLOGO0: function (t) {
    if ("预览" == a.data.LOGO || "Preview" == a.data.LOGO) Te.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: true
    }), a.SetLOGO(fe + "|" + ue, a);
    else if ("发送" == a.data.LOGO || "Send" == a.data.LOGO) {
      return Me(o, 1), void Ie("FAD2" + Re(unescape(encodeURIComponent(ce))))
    }
    a.setData({
      ShowBar: 20,
      LOGO: k ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (t) {
    we("设置第一行LOGO", "Set the first line logo", fe, fe, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) fe = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) fe = "1,27,30," + RegExp.$1, ue = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, qt.Toast)(k ? "Input format error" : "输入格式错误");
        fe = "1,27,30," + RegExp.$1
      }
      a.setData({
        LOGO1: fe,
        LOGO2: ue,
        LOGO: k ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO2: function (t) {
    we("设置第二行LOGO", "Set second line logo", ue, ue, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) ue = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) fe = "1,27,30," + RegExp.$1, ue = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, qt.Toast)(k ? "Input format error" : "输入格式错误");
        ue = "1,57,30," + RegExp.$1
      }
      a.setData({
        LOGO1: fe,
        LOGO2: ue,
        LOGO: k ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO3: function (t) {
    Ie("F9C0" + ye(1 - xt)), Ie("FF17")
  },
  BTLOGO4: function (t) {
    we("设置简约模式文字", "Set the first line logo", "最多6个汉字或者12个英文", fe, (function (t) {
      Ie("FAD2" + Re(t = unescape(encodeURIComponent(t)))), Ie("F7")
    }))
  },
  SetLOGO: function (t, e) {
    Te.createSelectorQuery().select("#LOGO").fields({
      node: true,
      size: true
    }).exec((function (a) {
      var n = a[0].node,
        i = n.getContext("2d");
      n.width = 60, n.height = 60, i.fillStyle = "#000", i.scale(1, 1), i.fillRect(0, 0, 60, 60), i.fillStyle = "#fff";
      var r = t.split("|");
      ce = "";
      for (var s = 0; s < r.length; s += 1) {
        var c = r[s].split(",");
        ce += c[3];
        var f = c[0],
          u = c[1],
          F = c[2],
          S = c[3];
        i.font = "normal " + F + "px Kaiti", i.fillText(S, f, u)
      }
      var h = [0],
        l = -1;
      o = "DataStart=LOGO{";
      for (var C = 0; C < 60; C += 1) {
        for (var d = i.getImageData(0, C, 60, 1).data, g = 0; g < 60; g += 1) {
          g % 8 == 0 && (g && (o += h[l].toString(16).padStart(2, "0")), l += 1);
          var B = .299 * d[4 * g] + .587 * d[4 * g + 1] + .114 * d[4 * g + 2];
          h[l] = h[l] >> 1, h[l] = h[l] | (B < 100 ? 0 : 128)
        }
        o += (h[l] >> 4).toString(16).padStart(2, "0")
      }
      o += "}DataEnd", Te.hideToast(), e.setData({
        LOGO: k ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    Ie("F962" + ye(1 - Gt)), Ie("FF16")
  },
  BTCAN1: function (t) {
    ve("确认是否切换为华为", "Switch to Huawei", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Ie("FC530101"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Te.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN2: function (t) {
    ve("确认是否切换为英可瑞", "Switch to Increase", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Ie("FC530201"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Te.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN4: function (t) {
    ve("确认是否切换为中兴3000", "Switch to ZTE3000", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Ie("FC530401"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Te.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN8: function (t) {
    ve("确认是否切换为英飞源", "Switch to Infy", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Ie("FC530801"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Te.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN16: function (t) {
    ve("确认是否切换为EPS6020", "Switch to EPS6020", "将会清除所有设置", "All settings will be cleared", (function (t) {
      Ie("FC531001"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Te.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN32: function (t) {
    ve("确认是否切换为中兴4875", "Switch to ZTE4875", "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == ae) {
        for (var e = parseInt(p, 16), a = e.toString(), n = 0, i = 0; i < a.length; i++) n += a.charCodeAt(i);
        Ie("C83F" + Math.floor(Math.floor(e / 611) * n).toString(16).slice(-6)), Ie("FC532001")
      } else Ie("FC532001"), (0, qt.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), Te.navigateBack({
        delta: 0
      })
    }))
  },
  BTLEDK2: function (t) {
    Ge("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      Ie("F968" + ye(t)), Ie("FF13")
    }))
  },
  BTLEDK1: function (t) {
    Ge("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      Ie("F969" + ye(t)), Ie("FF13")
    }))
  },
  BTLEDKS1: function (t) {
    Ge("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      Ie("F96D" + ye(t)), Ie("FF12")
    }))
  },
  BTLEDKS2: function (t) {
    Ge("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      Ie("F96A" + ye(t)), Ie("FF13")
    }))
  },
  BTStart1: function (t) {
    Ge("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      Ie("F96B" + ye(t)), Ie("FF12")
    }))
  },
  BTStart2: function (t) {
    Ie("F96C" + ye(1 - Q)), Ie("FF12")
  },
  BTGIF1: function (t) {
    Ie("F96F" + ye(1 - Tt)), Ie("FF15")
  },
  BT_GIF1: function (t) {
    Me((0, qt.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    Me((0, qt.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    Me((0, qt.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    Me((0, qt.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    Me((0, qt.GetGIF)(5))
  },
  BTUI: function (t) {
    a.setData({
      CVer: Jt.toFixed(2),
      SCAN: y,
      ID: p,
      ACT: n
    }), Ie("F9C8" + ye(1 - Yt)), Ie("FF19")
  },
  Scr1: function (t) {
    se = 1, a.setData({
      Cr0: Ee,
      Cr1: "#00ff00",
      Cr2: "#00c8ff",
      Cr3: Ee,
      Cr4: "#60ffc8",
      Cr5: Ee,
      Cr6: "#ff9430",
      Cr7: "#f80ca0",
      Cr8: Ee,
      Cr10: Ee,
      Cr11: "#00ff00",
      Cr12: "#00c8ff",
      Cr13: "#ff9430",
      Cr14: "#60ffc8",
      Cr15: Ee,
      Cr16: "#f80ca0",
      Cr17: Ee,
      Crs: se
    })
  },
  Scr2: function (t) {
    se = 2, a.setData({
      Cr0: Ee,
      Cr1: Ee,
      Cr2: Ee,
      Cr3: Ee,
      Cr4: Ee,
      Cr5: Ee,
      Cr6: Ee,
      Cr7: Ee,
      Cr8: Ee,
      Cr10: Ee,
      Cr11: Ee,
      Cr12: Ee,
      Cr13: Ee,
      Cr14: Ee,
      Cr15: Ee,
      Cr16: Ee,
      Cr17: Ee,
      Crs: se
    })
  },
  Scr3: function (t) {
    se = 3, a.setData({
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
      Crs: se
    })
  },
  Scr4: function (t) {
    se = 0, a.setData({
      Cr0: (0, qt.GetCFG)("Cr0", Ee),
      Cr1: (0, qt.GetCFG)("Cr1", "#00ff00"),
      Cr2: (0, qt.GetCFG)("Cr2", "#00c8ff"),
      Cr3: (0, qt.GetCFG)("Cr3", Ee),
      Cr4: (0, qt.GetCFG)("Cr4", "#60ffc8"),
      Cr5: (0, qt.GetCFG)("Cr5", Ee),
      Cr6: (0, qt.GetCFG)("Cr6", "#ff9430"),
      Cr7: (0, qt.GetCFG)("Cr7", "#f80ca0"),
      Cr8: (0, qt.GetCFG)("Cr8", Ee),
      Cr10: (0, qt.GetCFG)("Cr10", Ee),
      Cr11: (0, qt.GetCFG)("Cr11", "#00ff00"),
      Cr12: (0, qt.GetCFG)("Cr12", "#00c8ff"),
      Cr13: (0, qt.GetCFG)("Cr13", "#ff9430"),
      Cr14: (0, qt.GetCFG)("Cr14", "#60ffc8"),
      Cr15: (0, qt.GetCFG)("Cr15", Ee),
      Cr16: (0, qt.GetCFG)("Cr16", "#f80ca0"),
      Cr17: (0, qt.GetCFG)("Cr17", Ee),
      Crs: se
    })
  },
  BTCr1: function (t) {
    0 == a.data.UI ? (Ie("F53000" + be(this.data.Cr0) + "0000f01c"), Ie("F53100" + be(this.data.Cr1) + "00209F26"), Ie("F53200" + be(this.data.Cr2) + "00479F26"), Ie("F53300" + be(this.data.Cr3) + "006e9F27"), Ie("F53400" + be(this.data.Cr4) + "00969F3f"), Ie("F53500" + be(this.data.Cr5) + "A3204d4d"), Ie("F53600" + be(this.data.Cr6) + "50d64f1A"), Ie("F53700" + be(this.data.Cr7) + "00d64f1A"), Ie("F53801" + be(this.data.Cr8) + "A3774d68")) : 1 == a.data.UI && (Ie("F52000" + be(this.data.Cr10) + "0000781c"), Ie("F52100" + be(this.data.Cr11) + "001cf02e"), Ie("F52200" + be(this.data.Cr12) + "004af02e"), Ie("F52300" + be(this.data.Cr13) + "0078f02e"), Ie("F52400" + be(this.data.Cr14) + "00a6f02e"), Ie("F52500" + be(this.data.Cr15) + "7800781c"), Ie("F52600" + be(this.data.Cr16) + "00d4781b"), Ie("F52701" + be(this.data.Cr17) + "78d4781b"))
  },
  CK0: function (t) {
    Fe = 0, this.CRSet(this.data.Cr0)
  },
  CK1: function (t) {
    Fe = 1, this.CRSet(this.data.Cr1)
  },
  CK2: function (t) {
    Fe = 2, this.CRSet(this.data.Cr2)
  },
  CK3: function (t) {
    Fe = 3, this.CRSet(this.data.Cr3)
  },
  CK4: function (t) {
    Fe = 4, this.CRSet(this.data.Cr4)
  },
  CK5: function (t) {
    Fe = 5, this.CRSet(this.data.Cr5)
  },
  CK6: function (t) {
    Fe = 6, this.CRSet(this.data.Cr6)
  },
  CK7: function (t) {
    Fe = 7, this.CRSet(this.data.Cr7)
  },
  CK8: function (t) {
    Fe = 8, this.CRSet(this.data.Cr8)
  },
  CK10: function (t) {
    Fe = 10, this.CRSet(this.data.Cr10)
  },
  CK11: function (t) {
    Fe = 11, this.CRSet(this.data.Cr11)
  },
  CK12: function (t) {
    Fe = 12, this.CRSet(this.data.Cr12)
  },
  CK13: function (t) {
    Fe = 13, this.CRSet(this.data.Cr13)
  },
  CK14: function (t) {
    Fe = 14, this.CRSet(this.data.Cr14)
  },
  CK15: function (t) {
    Fe = 15, this.CRSet(this.data.Cr15)
  },
  CK16: function (t) {
    Fe = 16, this.CRSet(this.data.Cr16)
  },
  CK17: function (t) {
    Fe = 17, this.CRSet(this.data.Cr17)
  },
  CRSet: function (t) {
    t.match(/#(..)(..)(..)/), Se = RegExp.$1, he = RegExp.$2, le = RegExp.$3, this.setData({
      CR: parseInt(Se, 16),
      CG: parseInt(he, 16),
      CB: parseInt(le, 16)
    })
  },
  SetCr: function () {
    0 == a.data.UI && Fe >= 10 && (Fe = 0), 1 == a.data.UI && Fe < 10 && (Fe = 10), 0 == Fe ? a.setData({
      Cr0: "#" + Se + he + le
    }) : 1 == Fe ? a.setData({
      Cr1: "#" + Se + he + le
    }) : 2 == Fe ? a.setData({
      Cr2: "#" + Se + he + le
    }) : 3 == Fe ? a.setData({
      Cr3: "#" + Se + he + le
    }) : 4 == Fe ? a.setData({
      Cr4: "#" + Se + he + le
    }) : 5 == Fe ? a.setData({
      Cr5: "#" + Se + he + le
    }) : 6 == Fe ? a.setData({
      Cr6: "#" + Se + he + le
    }) : 7 == Fe ? a.setData({
      Cr7: "#" + Se + he + le
    }) : 8 == Fe ? a.setData({
      Cr8: "#" + Se + he + le
    }) : 10 == Fe ? a.setData({
      Cr10: "#" + Se + he + le
    }) : 11 == Fe ? a.setData({
      Cr11: "#" + Se + he + le
    }) : 12 == Fe ? a.setData({
      Cr12: "#" + Se + he + le
    }) : 13 == Fe ? a.setData({
      Cr13: "#" + Se + he + le
    }) : 14 == Fe ? a.setData({
      Cr14: "#" + Se + he + le
    }) : 15 == Fe ? a.setData({
      Cr15: "#" + Se + he + le
    }) : 16 == Fe ? a.setData({
      Cr16: "#" + Se + he + le
    }) : 17 == Fe && a.setData({
      Cr17: "#" + Se + he + le
    })
  },
  CSC: function (t) {
    0 == se && (0, qt.SetCFG)("Cr" + Fe, "#" + Se + he + le)
  },
  CRC: function (t) {
    Se = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CGC: function (t) {
    he = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CBC: function (t) {
    le = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CTC1: function (t) {
    ge = t.detail.value.toString(16).padStart(2, "0"), (0, qt.SetCFG)("BGT", ge), a.setData({
      BGC: "#000000" + ge
    })
  },
  BTBGP1: function (t) {
    we("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, qt.SetCFG)("BGI", 1), (0, qt.SetCFG)("BGP1", t), a.setData({
        BGP1: t,
        BGP: t,
        BGI: 1
      })
    }))
  },
  BTBGP2: function (t) {
    we("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, qt.SetCFG)("BGI", 2), (0, qt.SetCFG)("BGP2", t), a.setData({
        BGP2: t,
        BGP: t,
        BGI: 2
      })
    }))
  },
  BTBGP3: function (t) {
    we("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, qt.SetCFG)("BGI", 3), (0, qt.SetCFG)("BGP3", t), a.setData({
        BGP3: t,
        BGP: t,
        BGI: 3
      })
    }))
  },
  BTBGP4: function (t) {
    we("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, qt.SetCFG)("BGI", 4), (0, qt.SetCFG)("BGP4", t), a.setData({
        BGP4: t,
        BGP: t,
        BGI: 4
      })
    }))
  },
  BTBGP0: function (t) {
    5 == ++de && (de = 0), a.setData({
      BGP: Ce[de],
      BGI: de
    }), (0, qt.SetCFG)("BGI", de)
  },
  BTCKA2: function (t) {
    Ie("F972" + ye(1 - Et)), Ie("FF15")
  },
  BTEN1: function (t) {
    te && this.MSG("", "1100001BE4000005DC000020D0000005DC010" + (1 - k) + "00"), (0, qt.SetCFG)("UEN", 1 - k), Ie("F970" + ye(1 - k)), Ie("FF11")
  },
  BTBLE1: function (t) {
    we("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      Ie("FA73" + Re(t = unescape(encodeURIComponent(t)))), Ie("FF20")
    }))
  },
  BTBLE2: function (t) {
    we("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      Ie("FA74" + Re(t)), Ie("FF21")
    }))
  },
  BTVIN: function (t) {
    we("设置取电器VIN码", "Set VIN", "标准17位英文和数字", "Up to 17 characters", (function (t) {
      return (t = t.toUpperCase()).match(/^[A-HJ-NPR-Z0-9]{14}\d\d\d$/) ? (Ie("FAD3" + Re(t = unescape(encodeURIComponent(t)))), void Ie("FF25")) : void(0, qt.Toast)(k ? "Incorrect VIN input!" : "输入VIN不正确!")
    }))
  },
  BTTCH1: function (t) {
    we("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return Ie("FAD1" + Re(t)), void Ie("FF24");
      (0, qt.Toast)(k ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    Ge("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      Ie("F9C7" + ye(t)), Ie("FF18")
    }))
  },
  BTKEY1: function (t) {
    Ie("F967" + ye(1 - W)), Ie("FF10")
  },
  BTKEY2: function (t) {
    Ie("F966" + ye(1 - $)), Ie("FF11")
  },
  BTDDT1: function (t) {
    Ie("F96E" + ye(wt >= 3 ? 0 : wt + 1)), Ie("FF16")
  },
  BTUP6: function (t) {
    we("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, qt.SetCFG)("WID", t), Ie("AB00" + Re(t = unescape(encodeURIComponent(t)))), Ie("FF22")
    }))
  },
  BTUP7: function (t) {
    we("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, qt.SetCFG)("WPD", t), Ie("AB01" + Re(t = unescape(encodeURIComponent(t)))), Ie("FF23")
    }))
  },
  BTUP1: function (t) {
    Be || this.data.CVer >= this.data.UPDate && !ae || Te.showModal({
      title: k ? "Start Upgrade" : "开始升级",
      editable: false,
      confirmText: k ? "YES" : "确定",
      cancelText: k ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Ie("A700000000" + Re("NewUI")), void(0, qt.Toast)(k ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP5: function (t) {
    2 == ae && ve("确认清除日期", "Confirm clearance date", "", "", (function (t) {
      Ie("FD48" + Re("Cxjdwx"))
    }))
  },
  BTUP8: function (t) {
    Te.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    Te.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    Te.setClipboardData({
      data: "设备ID:" + p
    })
  },
  BTUP0: function (t) {
    Te.showModal({
      title: k ? "Firmware rollback" : "固件回退",
      editable: false,
      confirmText: k ? "YES" : "确定",
      cancelText: k ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Xt && Ie("A700000000" + Re("CEVRollBack")), Xt || Ie("A700000000" + Re("CANRollBack")), void(0, qt.Toast)(k ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP9: function (t) {
    Te.showModal({
      title: k ? "Write Test Firmware" : "刷入测试固件",
      editable: false,
      confirmText: k ? "YES" : "确定",
      cancelText: k ? "NO" : "取消",
      success: function (t) {
        if (t.confirm) return Ie("A700000000" + Re("NewTest")), void(0, qt.Toast)(k ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUFS: function (t) {
    Ge("设置温度加速值", "Set temperature acceleration value", "2", "20", (function (t) {
      Ie("F963" + ye(t)), Ie("FF14")
    }))
  },
  BTAFS: function (t) {
    Ge("设置电流加速值", "Set current acceleration value", "0.1", "3.0", (function (t) {
      Ie("F964" + ye(10 * t)), Ie("FF14")
    }))
  },
  BTLFS: function (t) {
    Ge("设置初始风速值", "Set initial wind speed value", "20", "200", (function (t) {
      Ie("F965" + ye(t)), Ie("FF14")
    }))
  },
  BTMFS: function (t) {
    Ge("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      Ie("F9C5" + ye(t)), Ie("FF14")
    }))
  },
  BTTMC: function (t) {
    Ge("设置超温进入温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      Ie("F84A" + Le(t)), Ie("FF13")
    }))
  },
  BTTMC1: function (t) {
    Ge("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      Ie("F84B" + Le(t)), Ie("FF13")
    }))
  },
  BTOST: function (t) {
    Ge("设置超温关机温度", "Set the exit temperature for over temperature", "50", "120", (function (t) {
      Ie("F8F7" + Le(t)), Ie("FF18")
    }))
  },
  BTTMW: function (t) {
    Ge("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      Ie("F84C" + Le(t)), Ie("FF13")
    }))
  },
  BTMMV: function (t) {
    Ge("设置最高电压限制", "Set maximum voltage limit", "100", "1000", (function (t) {
      Ie("F8FA" + Le(t)), Ie("FF19"), Ie("FF14")
    }))
  },
  BTMMA: function (t) {
    Ge("设置最高电流限制", "Set maximum current limit", "10", "400", (function (t) {
      Ie("F8F9" + Le(t)), Ie("FF19"), Ie("FF14")
    }))
  },
  BTRDY: function (t) {
    Ge("设置就绪电压范围", "Set the ready voltage range", "1", "20", (function (t) {
      Ie("F9CD" + ye(t)), Ie("FF19")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), wx.pageScrollTo({
      scrollTop: 95,
      duration: 300
    }), c > 0 && c < 5 ? ve("检测到输出电流", "Detected output current", "如有负载请点取消后断开负载再开始校正,如无负载则为空载电流,点击确定将会设置为最小电流过滤(可在输出电流校正页面中设置).", "If there is a load detected in the output current, please click NO and disconnect the load before starting the calibration. If there is no load, Click YES will set it as the minimum current filter (which can be set on the output current calibration page)", (function (t) {
      Ie("F848" + Le(Number(c) + .05)), Ie("FF16")
    })) : s < 10 || c > 0 ? (0, qt.Toast)(k ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Ie("C1"), Ie("FF"), Ge("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / s).toFixed(4),
        a = Number(t / X).toFixed(4);
      Ie("C3" + Le(100 * a) + Le(100 * e)), 2 == y ? (Ie("F876" + Le(20 * a)), Ie("F877" + Le(100 * a))) : 1 == y ? (Ie("F876" + Le(41 * a)), Ie("F877" + Le(58.5 * a))) : 4 == y ? (Ie("F876" + Le(41 * a)), Ie("F877" + Le(59 * a))) : 16 == y ? (Ie("F876" + Le(44 * a)), Ie("F877" + Le(61 * a))) : 32 == y && (Ie("F876" + Le(41.2 * a)), Ie("F877" + Le(59.4 * a))), Ie("FF"), Ie("A80" + M + Le(50 * a) + Le(tt)), Ie("FF")
    })))
  },
  BTOVT1: function (t) {
    Xt ? Ge("升压采样补偿", "Boost voltage compensation", "0.1", "1", (function (t) {
      t > 999.99 ? t *= 1e-4 : t > 99.99 && (t *= .001), Ie("FB47" + Le(100 * t)), Ie("FF")
    })) : Ge("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      Ie("FB47" + Le(100 * t)), Ie("FF")
    }))
  },
  BTOVTU: function (t) {
    Ie("FB47" + Le(100 * (Number(lt) + 5e-4))), Ie("FF")
  },
  BTOVTD: function (t) {
    Ie("FB47" + Le(100 * (Number(lt) - 5e-4))), Ie("FF")
  },
  BTOVD1: function (t) {
    Xt ? Ge("基础电压补偿", "Basic voltage compensation", "10", "40", (function (t) {
      Ie("FB46" + Le(100 * t)), Ie("FF")
    })) : Ge("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      Ie("FB46" + Le(100 * t)), Ie("FF")
    }))
  },
  BTOVDU: function (t) {
    Ie("FB46" + Le(100 * (Number(dt) + .001))), Ie("FF")
  },
  BTOVDD: function (t) {
    Ie("FB46" + Le(100 * (Number(dt) - .001))), Ie("FF")
  },
  BTOVS: function (t) {
    Ae(k ? "Set voltage range" : "设置电压范围", (k ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Ie("F876" + Le(Number(RegExp.$1))), Ie("F877" + Le(Number(RegExp.$2))), Ie("FF")) : (0, qt.Toast)(k ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    Ge("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      Ie("F8F3" + Le(t)), Ie("FF")
    }))
  },
  BTOVT3: function (t) {
    s < 10 || c > 0 ? (0, qt.Toast)(k ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Ie("C2"), Ie("FF"), Ge("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / s).toFixed(4);
      Ie("C4" + Le(100 * Number(t / X).toFixed(4)) + Le(100 * e)), Ie("FF")
    })))
  },
  BTOVT2: function (t) {
    Ge("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      Ie("FBF2" + Le(100 * t)), Ie("FF")
    }))
  },
  BTO2TU: function (t) {
    Ie("FBF2" + Le(100 * (Number(bt) + .001))), Ie("FF")
  },
  BTO2TD: function (t) {
    Ie("FBF2" + Le(100 * (Number(bt) - .001))), Ie("FF")
  },
  BTOVD2: function (t) {
    Ge("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      Ie("FBF1" + Le(100 * t)), Ie("FF")
    }))
  },
  BTO2DU: function (t) {
    Ie("FBF1" + Le(100 * (Number(Ot) + .001))), Ie("FF")
  },
  BTO2DD: function (t) {
    Ie("FBF1" + Le(100 * (Number(Ot) - .001))), Ie("FF")
  },
  BTIVD1: function (t) {
    Ge("输入电压补偿值", "Input voltage compensation value", "0.1", "5", (function (t) {
      Ie("F8FB" + Le(t)), Ie("FF")
    }))
  },
  BTIVD2: function (t) {
    Ie("F8FB" + Le(1)), Ie("FF"), Ge("输入实际测量出的输入电压", "Input the actual measured input voltage", "10", "1000", (function (t) {
      Ie("F8FB" + Le(Number(t / l))), Ie("FF")
    }))
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 145,
      duration: 300
    }), c < 5 || X - s < .2 ? (0, qt.Toast)(k ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (Ie("C0"), Ie("FF"), Ge("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / c).toFixed(4);
      Ie("C5" + Le(100 * Number(t / tt).toFixed(4)) + Le(100 * e)), Ie("FF")
    })))
  },
  BTOAT1: function (t) {
    Ge("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      Ie("FB45" + Le(100 * t)), Ie("FF")
    }))
  },
  BTOAT2: function (t) {
    Ie("FB45" + Le(100 * (Number(Ct) - .001))), Ie("FF")
  },
  BTOAT3: function (t) {
    Ie("FB45" + Le(100 * (Number(Ct) + .003))), Ie("FF")
  },
  BTOAS1: function (t) {
    Ge("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      Ie("F8F4" + Le(t)), Ie("FF")
    }))
  },
  BTCLV: function (t) {
    Ge("设置最小电流过滤", "Set minimum current filtering", "0.00", "3.00", (function (t) {
      Ie("F848" + Le(t)), Ie("FF")
    }))
  },
  BTOAD1: function (t) {
    Ge("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      Ie("FB44" + Le(100 * t)), Ie("FF")
    }))
  },
  BTOAD2: function (t) {
    Ie("FB44" + Le(100 * (Number(gt) - .001))), Ie("FF")
  },
  BTOAD3: function (t) {
    Ie("FB44" + Le(100 * (Number(gt) + .001))), Ie("FF")
  },
  BTOAS: function (t) {
    Ae(k ? "Set current range" : "设置电流范围", (k ? "Now:" : "当前范围:") + st + "-" + ct, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Ie("F878" + Le(Number(RegExp.$1))), Ie("F879" + Le(Number(RegExp.$2))), Ie("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (Ie("F879" + Le(t)), Ie("FF")) : (0, qt.Toast)(k ? "Input format error" : "输入格式错误!"))
    }))
  },
  pwrbt: function (t) {
    Ie("A6" + ye(1 - V)), Ie("FF10")
  },
  BTUCF1: function (t) {
    Ie("F9CF" + ye(1 - _t)), Ie("FF10")
  },
  owbt: function (t) {
    Ge("设置输出功率限制", "Set output power limit", "300", z, (function (t) {
      Ie("F84D" + Le(t)), Ie("FF")
    }))
  },
  tibt: function (t) {
    Ge("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      Ie("A9" + Ke(t)), Ie("FF")
    }))
  },
  BTYC1: function (t) {
    Ge("设置预充电压", "Set pre charge voltage", "0", ut, (function (t) {
      Ie("F8F6" + Le(t)), Ie("FF")
    }))
  },
  BTYC2: function (t) {
    Ge("设置预充电流", "Set pre charge current", st, ct, (function (t) {
      Ie("F8F5" + Le(t)), Ie("FF")
    }))
  },
  SetVA: function (t, e, a) {
    M != t && (e > ut || e < ft ? Ge("设置输出电压", "Set output voltage", ft, ut, (function (e) {
      Ie("A80" + (M = t) + Le(e) + Le(a)), Ie(t <= 2 ? "FF10" : "FF11")
    })) : ve("快捷设置电压电流切换", "Switch confirmation", "为避免误触,请确认切换电压电流", "To avoid accidental contact, please confirm the switching voltage and current", (function (n) {
      Ie("A80" + (M = t) + Le(e) + Le(a)), Ie(t <= 2 ? "FF10" : "FF11")
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
    Xt ? Jt >= 5.39 ? Ge("设置超温关机倒计时", "设置超温关机倒计时", 3, 60, (function (t) {
      Ie("F961" + ye(t)), Ie("FF15")
    })) : (0, qt.Toast)(k ? "The current firmware version is not adjustable. If you need to modify it, please upgrade the firmware!" : "当前固件版本不可调,如需修改请升级固件!") : Ge("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      Ie("F961" + ye(t)), Ie("FF15")
    }))
  },
  hqbt0: function (t) {
    Ie("F961" + ye(0 == Bt ? Xt ? 30 : 10 : 0)), Ie("FF15")
  },
  nvbt: function (t) {
    Ae(k ? "Set Output Voltage" : "设置输出电压", (k ? "Range:" : "范围:") + ft + "-" + ut, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) Ie(t.substr(2, 4) + Le(t.substr(6))), Ie("FF");
        else {
          if (t.startsWith("FFF9")) return Ie(t.substr(2)), void Ie("FF");
          if ("DEBUG=0" == t)(0, qt.SetCFG)("DEBUG", 0), ee = 0, Ie("F9C900"), Ie("F9CA01"), Ie("F9CB01"), Ie("F9CC01");
          else if ("DEBUG=1" == t)(0, qt.SetCFG)("DEBUG", 1), ee = 1, Ie("F9C900"), Ie("F9CA01"), Ie("F9CB01"), Ie("F9CC01");
          else if ("DEBUG=2" == t)(0, qt.SetCFG)("DEBUG", 2), ee = 2, Ie("F9C9FF"), Ie("F9CA01"), Ie("F9CB01"), Ie("F9CC01");
          else if ("DEBUG=3" == t)(0, qt.SetCFG)("DEBUG", 2), ee = 2, Ie("F9C9FF"), Ie("F9CA01"), Ie("F9CB01"), Ie("F9CC00");
          else if (t.startsWith("FFC8")) Ie(t.substr(2, 4) + t.substr(6)), Ie("FF");
          else if ("异常修复" == t && Jt >= 5.39) ve("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置", "Exception repair will detect and reset certain settings", (function (t) {
            Ie("F60001"), (0, qt.Toast)(k ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), Te.navigateBack({
              delta: 0
            })
          }));
          else if ("强制升级" == t || "测试版" == t) Te.showModal({
            title: k ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: k ? "YES" : "确定",
            cancelText: k ? "NO" : "取消",
            success: function (e) {
              if (e.confirm) return Ie("A700000000" + Re("测试版" == t ? "NewTest" : "NewUI")), void(0, qt.Toast)(k ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
            }
          });
          else if ("测试二" == t) Te.showModal({
            title: k ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: k ? "YES" : "确定",
            cancelText: k ? "NO" : "取消",
            success: function (t) {
              if (t.confirm) return Ie("A700000000" + Re("Test2")), void(0, qt.Toast)(k ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
            }
          });
          else if (t.startsWith("DataStart=")) wx.getClipboardData({
            success: function (t) {
              var e = t.data;
              e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && Me(e)
            }
          });
          else {
            if (Ie("A1" + Re(t)), (t = parseFloat(t)) > ut || t < ft && 0 == _t || !isFinite(t)) return void(0, qt.Toast)(k ? "Beyond the set range!" : "超出设置范围!");
            Ie("A80" + M + Le(t) + Le(tt)), Ie("FF")
          }
        }
      else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && Me(e)
        }
      })
    }))
  },
  nabt: function (t) {
    Ge("设置输出电流", "Set output current", st, ct, (function (t) {
      Ie("A80" + M + Le(X) + Le(t)), Ie("FF")
    }))
  },
  sa2bt3: function (t) {
    Ge("设置充电时间(分钟)", "Set charging time(Minute)", 0, 600, (function (t) {
      Ie("A9" + Ke(t)), Ie("FF")
    }))
  },
  SetSGK: function () {
    if (Jt >= 5.39) {
      var t = 0 == jt ? "1" : "0";
      Ie("A50" + t), Ie("A40" + t), Ie("FF19")
    } else Ie("F857" + Le(0 == _ ? 1 : 0)), Ie("FF12")
  },
  sa2bt2: function (t) {
    Ge("设置二段电流", "Set second stage current", st, ct, (function (t) {
      Ie("F857" + Le(t)), Ie("FF12")
    }))
  },
  sa2bt1: function (t) {
    Ge("设置二段电压", "Set second stage voltage", ft, ut, (function (t) {
      Ie("F858" + Le(t)), Ie("FF12")
    }))
  },
  sa2bt0: function (t) {
    Xt && (Jt < 5.39 || X > 126) ? Ie("A9" + Ke(re ? 0 : 60)) : (Ie("F858" + (0 == _ ? Le(X - 3) : "00000000")), Ie("F857" + (0 == _ ? Le(10) : "00000000")), Ie("FF12"))
  },
  sdbt1: function (t) {
    Ge("设置延时时间(分钟)", "Set delay time (Minutes)", 1, 600, (function (t) {
      Ie("F859" + Le(t)), Ie("FF16")
    }))
  },
  sdbt2: function (t) {
    Ge("设置关机电流", "SSet startup delay current", "0.00", "10.00", (function (t) {
      Ie("F8F0" + Le(t)), Ie("FF")
    }))
  },
  sdbt0: function (t) {
    Ie("F859" + (0 == mt ? Le(1) : "00000000")), Ie("FF16")
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
        Ie("FD48" + Re(o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate()))
      }
      Jt <= 5.28 && Ie("FF")
    } else if (e.startsWith("A000")) {
      if (ne) return;
      ne = 1, (0, qt.Toast)(k ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Te.showModal({
          title: k ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + p,
          confirmText: k ? "YES" : "确定",
          cancelText: k ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, qt.SetCFG)(p, t.content), Ie("A0" + Re(t.content)), ne = 0)
          }
        })
      }), 1e3)
    } else if (e.startsWith("F101")) Ve();
    else if (e.startsWith("F201")) Ve();
    else if (e.startsWith("F301")) Ne = 0, xe = [], (0, qt.Toast)(k ? "Send End!" : "发送完成!");
    else if (e.startsWith("FF")) {
      var zt = new DataView(t);
      if (zt.getUint8(1)) {
        if (2 != ne && (ne = 2, ("Cxjdwx" == n || "未激活" == n) && !ae)) {
          var Zt = new Date;
          Ie("FD48" + Re(Zt.getFullYear() + "-" + (Zt.getMonth() + 1) + "-" + Zt.getDate()))
        }
      } else(0, qt.Toast)(k ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Te.showModal({
          title: k ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + p,
          confirmText: k ? "YES" : "确定",
          cancelText: k ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, qt.SetCFG)(p, t.content), Ie("FF" + Re(t.content)), ne = 0)
          }
        })
      }), 1e3);
      V = zt.getUint8(2), W = zt.getUint8(3), y = zt.getUint8(4), k = zt.getUint8(5), $ = zt.getUint8(6), q = zt.getUint8(7), J = zt.getUint8(8), it = zt.getUint8(9), rt = zt.getUint8(10), ot = zt.getUint8(11), Ft = zt.getUint8(12), St = zt.getUint8(13), ht = zt.getUint8(14) / 10, Bt = zt.getUint8(15), Tt = zt.getUint8(16), Et = zt.getUint8(17), Gt = zt.getUint8(18), wt = zt.getUint8(19), vt = .01 * zt.getUint8(20), xt = zt.getUint8(21), Nt = zt.getUint8(22), Mt = zt.getUint8(23), Lt = zt.getUint8(24), Kt = zt.getUint8(25), yt = zt.getUint8(26), Yt = zt.getUint8(27), Ht = zt.getUint8(28), jt = zt.getUint8(29), Q = zt.getUint8(30), M = zt.getUint8(31), _t = zt.getUint8(32), Pt = zt.getUint8(33);
      var Qt = 51;
      x = [ke(zt, Qt, 2, 1), ke(zt, Qt + 4, 2, 1)], N = [ke(zt, Qt += 8, 2, 1), ke(zt, Qt + 4, 2, 1)], L = [ke(zt, Qt += 8, 2, 1), ke(zt, Qt + 4, 2, 1)], K = [ke(zt, Qt += 8, 2, 1), ke(zt, Qt + 4, 2, 1)], j = ke(zt, Qt += 8), _ = ke(zt, Qt += 4), z = ke(zt, Qt += 4), Z = ke(zt, Qt += 4), et = ke(zt, Qt += 4), at = ke(zt, Qt += 4), nt = ke(zt, Qt += 4), R = ke(zt, Qt += 4), st = ke(zt, Qt += 4), ct = ke(zt, Qt += 4), ft = ke(zt, Qt += 4), ut = ke(zt, Qt += 4), lt = ke(zt, Qt += 4, 4), Ct = ke(zt, Qt += 4, 4), dt = ke(zt, Qt += 4, 4), gt = ke(zt, Qt += 4, 4), pt = ke(zt, Qt += 4), Dt = ke(zt, Qt += 4), mt = ke(zt, Qt += 4), At = ke(zt, Qt += 4), bt = ke(zt, Qt += 4, 4), Ot = ke(zt, Qt += 4, 4), It = ke(zt, Qt += 4), Ut = ke(zt, Qt += 4), Vt = ke(zt, Qt += 4), Wt = ke(zt, Qt += 4), Rt = ke(zt, Qt += 4), kt = ke(zt, Qt += 4), $t = ke(zt, Qt += 4), P = ke(zt, Qt += 4, 4), Qt += 4, 1 == M ? (tt = x[1], X = x[0]) : 2 == M ? (tt = N[1], X = N[0]) : 3 == M ? (tt = L[1], X = L[0]) : 4 == M && (tt = K[1], X = K[0]), a.setData({
        PON: V,
        KON: W,
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
        IVD: P,
        UFS: Ft,
        LFS: St,
        AFS: ht,
        UHQ: Bt,
        GIF: Tt,
        CKA2: Et,
        NTC: Gt,
        DDT: wt,
        CLV: vt,
        UEG: xt,
        UCN: Nt,
        MFS: Mt,
        DOL: Lt,
        DST: Kt,
        LKS: yt,
        UI: Yt,
        RDY: Ht,
        SGK: jt,
        ETi: Q,
        KSi: M,
        UCF: _t,
        TCH: Pt,
        KS1: x,
        KS2: N,
        KS3: L,
        KS4: K,
        SV2: j,
        SA2: _,
        SMW: z,
        UMW: Z,
        TMW: et,
        UMT: at,
        OMT: nt,
        MA: R,
        LSA: st,
        HSA: ct,
        LSV: ft,
        HSV: ut,
        OVT: lt,
        OAT: Ct,
        OVD: dt,
        OAD: gt,
        L2V: pt,
        H2V: Dt,
        USD: mt,
        SDU: At,
        O2T: bt,
        O2D: Ot,
        OVS: It,
        OAS: Ut,
        YCA: Vt,
        YCV: Wt,
        OST: Rt,
        MMA: kt,
        MMV: $t
      })
    } else if (e.startsWith("FE") || e.startsWith("EE")) {
      if (0 == y) {
        n = Pe(e.substring(20, 40)), Jt = .01 * parseInt(e.substring(16, 20), 16), y = Ye(e, 14), Xt = 0, p = e.substring(2, 14), 1 == y ? r = "Huawei" : 2 == y ? r = "Increase" : 4 == y ? r = "ZTE3000" : 8 == y ? r = "INFY" : 12 == y ? (r = "EV_Station", Xt = 2) : 14 == y ? (r = "EV_Charger", Xt = 1) : 16 == y ? r = "EPS6020" : 32 == y ? r = "ZTE4875" : 64 == y && (r = "Sinexcel"), "EV_Charger" == r ? a.setData({
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
        }), n.startsWith("Cxjdwx") && (n = "未激活"), (new Date).getTime() > 17486208e5 && (Date.parse(n) < 17486208e5 || (0, qt.CheckID)(p) || (i = 1, Te.showModal({
          title: k ? "Abnormal device authorization" : "设备授权异常",
          content: "",
          confirmText: k ? "Yes I Kown" : "我知道了",
          showCancel: false,
          success: function (t) {
            Te.navigateBack({
              delta: 0
            })
          }
        }))), p = "0x" + p, a.setData({
          CVer: Jt.toFixed(2),
          CEV: Xt,
          SCAN: r,
          ID: p,
          ACT: n
        });
        var te = (0, qt.GetCFG)(p, "0000");
        ae && (te = (Number(p) + 19880914).toString(16).substring(4, 8)), e.startsWith("EE") ? 0 != ne && 3 != ne || Ie("A0" + Re(te)) : (Ie("FF" + Re(te)), setTimeout((function () {
          3 == ne && (ne = 0, Ie("FF" + Re(te)))
        }), 1500))
      }
      e.startsWith("FE") && a.setData({
        VIN: Pe(e.substring(100, 140)),
        SSID: Pe(e.substring(140, 180)),
        UPWD: Pe(e.substring(180, 220)),
        LKV: Pe(e.substring(220, 260))
      })
    } else if (e.startsWith("FA")) {
      var se = new DataView(t);
      s = ke(se, 1), c = ke(se, 5), f = ke(se, 9), l = ke(se, 13), C = ke(se, 17), d = ke(se, 21), a.setData({
        IV: l,
        IA: C,
        IW: d,
        OV: s,
        OA: c,
        OW: f
      })
    } else if (e.startsWith("FB")) {
      var ce = new DataView(t);
      F = ce.getUint8(1), S = ce.getUint8(2), h = ce.getUint8(3), B = ce.getUint8(4), T = ce.getUint8(5), E = ce.getUint8(6), w = ce.getUint8(7), v = ce.getUint8(8), Y = ce.getUint8(9), re = ce.getUint8(10), re += ce.getUint8(11) << 8, oe = ce.getUint8(12), H = ce.getUint8(13);
      var fe = 31;
      s = ke(ce, fe), c = ke(ce, fe += 4), f = ke(ce, fe += 4), u = ke(ce, fe += 4), l = ke(ce, fe += 4), C = ke(ce, fe += 4), d = ke(ce, fe += 4), g = ke(ce, fe += 4), D = ke(ce, fe += 4), m = ke(ce, fe += 4), A = ke(ce, fe += 4), G = ke(ce, fe += 4), b = ke(ce, fe += 4), O = ke(ce, fe += 4), I = ke(ce, fe += 4), U = ke(ce, fe += 4), fe += 4;
      var ue = Number(f / d * 100).toFixed(2),
        Fe = Number(d - f).toFixed(2);
      60 == F ? ie = k ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == h ? ie = 0 == Y ? k ? "Communication Abnormality" : "CAN通讯异常" : 39 == Y ? k ? "Abnormal Insulation Test" : "绝缘测试未通过" : Y < 6 ? k ? "Handshake message failed" : "握手信息未通过" : Y < 9 ? k ? "Vehicle information not pass" : "车辆信息未通过" : 16 == Y ? k ? "Charging station not ready" : "电压检测未通过" : k ? "Other abnormal interruptions" : "其它异常中止" : 50 == F ? ie = k ? "Stop Charging" : "中 止 充 电" : 51 == F ? ie = k ? "Charging Error" : "充 电 错 误" : 52 == F ? ie = k ? "Seting Handshake Information" : "配置握手信息" : 53 == F ? ie = k ? "Seting Charging Information" : "配置充电信息" : 54 == F ? ie = k ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == F ? ie = k ? "Ready For Use" : "已准备就绪" : 56 == F ? ie = k ? "Charging" : "正在充电中" : 57 == F ? ie = k ? "Charging Completed" : "充电完成" : 58 == F ? ie = k ? "Overtemperature shutdown" : "超温关机(" + oe + ")" : 59 == F ? ie = k ? "Insulation testing" : "绝缘测试" : 0 == s ? ie = k ? "Charger Output Abnormality" : "充电器输出异常" : 4 == F ? ie = k ? "Charger Shutdown" : "充电器已关机" : 0 == F ? ie = k ? "Waiting For Battery Connection" : "等待接入电池" : 1 == F ? ie = k ? "Charging" : "正在充电中" : 2 == F ? ie = k ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == F ? ie = k ? "Precharging" : "正在预充" : 40 == F ? ie = k ? "Appointment Waiting" : "预约等待中" : 3 == F ? ie = k ? "Charging Completed" : "充电完成" : 43 == F ? ie = k ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == F && (ie = k ? "Over Temperature Shutdown" : "超温保护关机");
      var Se = .65 * wx.getWindowInfo().windowWidth,
        he = Math.max(15, Math.min(30, Se / (k ? ie.length : 1.8 * ie.length) * 1.5));
      a.setData({
        Ah: D,
        Wh: m,
        AH: A,
        WH: G,
        SWT: w,
        SMT: v,
        IV: l,
        IA: C,
        IW: d,
        IT: g,
        ST0: B,
        ST1: T,
        ST2: E,
        EEI: d ? ue : "0.00",
        EES: d ? Fe : "0.00",
        YS: Oe(re),
        STR: ie,
        NFS: S,
        OL: h,
        OV: s,
        OA: c,
        OW: f,
        OT: u,
        FSize: he,
        KT1: H,
        Ti: Oe(b),
        TI: Oe(O),
        NSD: Oe(I),
        SOC: Number(U).toFixed(0)
      })
    } else if (e.startsWith("01")) {
      s = $e(e, 2), c = $e(e, 10), f = $e(e, 18), u = $e(e, 26), F = Ye(e, 34), S = Ye(e, 36), h = Ye(e, 38), 60 == F ? ie = k ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == h ? ie = k ? "Communication Abnormality" : "CAN通讯异常" : 50 == F ? ie = k ? "Stop Charging" : "中 止 充 电" : 51 == F ? ie = k ? "Charging Error" : "充 电 错 误" : 52 == F ? ie = k ? "Seting Handshake Information" : "配置握手信息" : 53 == F ? ie = k ? "Seting Charging Information" : "配置充电信息" : 54 == F ? ie = k ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == F ? ie = k ? "Ready For Use" : "已准备就绪" : 56 == F ? ie = k ? "Charging" : "正在充电中" : 57 == F ? ie = k ? "Charging Completed" : "充电完成" : 58 == F ? ie = k ? "Overtemperature shutdown" : "超温关机(" + oe + ")" : 59 == F ? ie = k ? "Insulation testing" : "绝缘测试" : 0 == s ? ie = k ? "Charger Output Abnormality" : "充电器输出异常" : 4 == F ? ie = k ? "Charger Shutdown" : "充电器已关机" : 0 == F ? ie = k ? "Waiting For Battery Connection" : "等待接入电池" : 1 == F ? ie = k ? "Charging" : "正在充电中" : 2 == F ? ie = k ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == F ? ie = k ? "Precharging" : "正在预充" : 40 == F ? ie = k ? "Appointment Waiting" : "预约等待中" : 3 == F ? ie = k ? "Charging Completed" : "充电完成" : 43 == F ? ie = k ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == F && (ie = k ? "Over Temperature Shutdown" : "超温保护关机");
      var le = .65 * wx.getWindowInfo().windowWidth;
      he = Math.max(15, Math.min(30, le / (k ? ie.length : 1.8 * ie.length) * 1.5));
      a.setData({
        STR: ie,
        NFS: S,
        OL: h,
        OV: s,
        OA: c,
        OW: f,
        OT: u,
        FSize: he
      })
    } else if (e.startsWith("02")) {
      l = $e(e, 2), C = $e(e, 10), d = $e(e, 18), g = $e(e, 26), B = Ye(e, 34), T = Ye(e, 36), E = Ye(e, 38);
      var Ce = Number(f / d * 100).toFixed(2),
        de = Number(d - f).toFixed(2);
      a.setData({
        IV: l,
        IA: C,
        IW: d,
        IT: g,
        ST0: B,
        ST1: T,
        ST2: E,
        EEI: d ? Ce : "0.00",
        EES: d ? de : "0.00"
      })
    } else if (e.startsWith("03")) D = $e(e, 2), m = $e(e, 10), A = $e(e, 18), G = $e(e, 26), w = Ye(e, 34), v = Ye(e, 36), a.setData({
      Ah: D,
      Wh: m,
      AH: A,
      WH: G,
      SWT: w,
      SMT: v
    });
    else if (e.startsWith("04")) re = Ye(e, 34), re += Ye(e, 36) << 8, oe = Ye(e, 38), a.setData({
      YS: Oe(re),
      Ti: Oe($e(e, 2)),
      TI: Oe($e(e, 10)),
      NSD: Oe($e(e, 18)),
      SOC: Number($e(e, 26)).toFixed(0)
    });
    else if (e.startsWith("10")) x = [$e(e, 2, 1), $e(e, 10, 1)], N = [$e(e, 18, 1), $e(e, 26, 1)], M = Ye(e, 34), V = Ye(e, 36), W = Ye(e, 38), 1 == M ? (tt = x[1], X = x[0]) : 2 == M && (tt = N[1], X = N[0]), 3 == M ? (tt = L[1], X = L[0]) : 4 == M && (tt = K[1], X = K[0]), a.setData({
      KS1: x,
      KS2: N,
      KSi: M,
      PON: V,
      KON: W,
      SV: X.toFixed(2),
      SA: tt.toFixed(2)
    });
    else if (e.startsWith("11")) L = [$e(e, 2, 1), $e(e, 10, 1)], K = [$e(e, 18, 1), $e(e, 26, 1)], k = Ye(e, 36), $ = Ye(e, 38), (0, qt.SetCFG)("UEN", k), 1 == M ? (tt = x[1], X = x[0]) : 2 == M && (tt = N[1], X = N[0]), 3 == M ? (tt = L[1], X = L[0]) : 4 == M && (tt = K[1], X = K[0]), a.setData({
      KS3: L,
      KS4: K,
      CAN: y,
      UEN: k,
      KRC: $,
      SV: X.toFixed(2),
      SA: tt.toFixed(2),
      KSi: M
    });
    else if (e.startsWith("12")) j = $e(e, 2), _ = $e(e, 10), z = $e(e, 18), Z = $e(e, 26), q = Ye(e, 34), Q = Ye(e, 36), J = Ye(e, 38), a.setData({
      SV2: j,
      SA2: _,
      SMW: z,
      UMW: Z,
      WTi: q,
      ETi: Q,
      Sleep: J
    });
    else if (e.startsWith("13")) {
      et = $e(e, 2), at = $e(e, 10), nt = $e(e, 18);
      $e(e, 26);
      it = Ye(e, 34), rt = Ye(e, 36), ot = Ye(e, 38), a.setData({
        TMW: et,
        UMT: at,
        OMT: nt,
        LEDK0: it,
        LEDK1: rt,
        LEDK2: ot
      })
    } else if (e.startsWith("14")) st = $e(e, 2), ct = $e(e, 10), ft = $e(e, 18), ut = $e(e, 26), Ft = Ye(e, 34), St = Ye(e, 36), ht = .1 * Ye(e, 38), a.setData({
      LSA: st,
      HSA: ct,
      LSV: ft,
      HSV: ut,
      UFS: Ft,
      LFS: St,
      AFS: ht.toFixed(1)
    }), st = Number(st), ft = Number(ft), ct = Number(ct), ut = Number(ut);
    else if (e.startsWith("15")) lt = .01 * $e(e, 2), Ct = .01 * $e(e, 10), dt = .01 * $e(e, 18), gt = .01 * $e(e, 26), Bt = Ye(e, 34), Tt = Ye(e, 36), Et = Ye(e, 38), a.setData({
      OVT: lt.toFixed(4),
      OAT: Ct.toFixed(4),
      OVD: dt.toFixed(4),
      OAD: gt.toFixed(4),
      UHQ: Bt,
      GIF: Tt,
      CKA2: Et
    });
    else if (e.startsWith("16")) pt = $e(e, 2), Dt = $e(e, 10), mt = $e(e, 18), At = $e(e, 26), Gt = Ye(e, 34), wt = Ye(e, 36), vt = .01 * Ye(e, 38), a.setData({
      L2V: pt,
      H2V: Dt,
      USD: mt,
      NTC: Gt,
      DDT: wt,
      CLV: vt,
      SDU: At
    });
    else if (e.startsWith("17")) bt = .01 * $e(e, 2), Ot = .01 * $e(e, 10), It = $e(e, 18), Ut = $e(e, 26), xt = Ye(e, 34), Nt = Ye(e, 36), Mt = Ye(e, 38), a.setData({
      O2D: Ot.toFixed(4),
      O2T: bt.toFixed(4),
      OVS: It,
      OAS: Ut,
      UEG: xt,
      UCN: Nt,
      MFS: Mt
    });
    else if (e.startsWith("18")) Vt = $e(e, 2), Wt = $e(e, 10), Rt = $e(e, 18), Pt = $e(e, 26), Lt = Ye(e, 34), Kt = Ye(e, 36), yt = Ye(e, 38), a.setData({
      YCA: Vt,
      YCV: Wt,
      DOL: Lt,
      DST: Kt,
      LKS: yt,
      TCH: Pt,
      OST: Rt
    });
    else if (e.startsWith("19")) kt = $e(e, 2), $t = $e(e, 10), Yt = Ye(e, 34), Ht = Ye(e, 36), jt = Ye(e, 38), a.setData({
      UI: Yt,
      MMA: kt,
      MMV: $t,
      RDY: Ht,
      SGK: jt
    });
    else if (e.startsWith("20")) {
      var ge = Pe(e.substring(2, 40));
      a.setData({
        SSID: ge
      })
    } else if (e.startsWith("21")) a.setData({
      UPWD: Pe(e.substring(2, 40))
    });
    else if (e.startsWith("22")) {
      var Be = Pe(e.substring(2, 40)),
        Ee = (0, qt.GetCFG)("WID", Be);
      Be != Ee && Ie("AB00" + Re(Be = unescape(encodeURIComponent(Ee)))), a.setData({
        WID: Ee
      })
    } else if (e.startsWith("23")) {
      var pe = Pe(e.substring(2, 40)),
        Ae = (0, qt.GetCFG)("WPD", pe);
      pe != Ae && Ie("AB01" + Re(pe = unescape(encodeURIComponent(Ae)))), a.setData({
        WPD: Ae
      })
    } else if (e.startsWith("24")) a.setData({
      LKV: Pe(e.substring(2, 40))
    });
    else if (e.startsWith("25")) a.setData({
      VIN: Pe(e.substring(2, 40))
    });
    else if (e.startsWith("50")) {
      0;
      var Ge = Ye(e, 2);
      3 & Ge ? a.setData({
        E1A: "正常",
        E1S: 3 & Ge
      }) : Ge >> 2 & 3 ? a.setData({
        E1A: "人工",
        E1S: Ge >> 2 & 3
      }) : Ge >> 4 & 3 ? a.setData({
        E1A: "故障",
        E1S: Ge >> 4 & 3
      }) : Ge >> 6 & 3 && a.setData({
        E1A: "车辆",
        E1S: Ge >> 6 & 3
      }), 3 & (Ge = Ye(e, 4)) ? a.setData({
        E2S: 3 & Ge
      }) : Ge >> 2 & 3 ? a.setData({
        E3S: Ge >> 2 & 3
      }) : Ge >> 4 & 3 ? a.setData({
        E4S: Ge >> 4 & 3
      }) : Ge >> 6 & 3 && a.setData({
        E5S: Ge >> 6 & 3
      }), 3 & (Ge = Ye(e, 6)) ? a.setData({
        E6S: 3 & Ge
      }) : Ge >> 2 & 3 ? a.setData({
        E7S: Ge >> 2 & 3
      }) : Ge >> 4 & 3 ? a.setData({
        E8S: Ge >> 4 & 3
      }) : Ge >> 6 & 3 && a.setData({
        E9S: Ge >> 6 & 3
      }), 3 & (Ge = Ye(e, 8)) ? a.setData({
        EAS: 3 & Ge
      }) : Ge >> 2 & 3 ? a.setData({
        EBS: Ge >> 2 & 3
      }) : Ge >> 4 & 3 && a.setData({
        ECS: Ge >> 4 & 3
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
      var we = Ye(e, 2);
      3 & we && a.setData({
        E4S: 3 & we
      }), 3 & (we = Ye(e, 4)) && a.setData({
        E5S: 3 & we
      }), we >> 2 & 3 && a.setData({
        E6S: we >> 2 & 3
      }), 3 & (we = Ye(e, 6)) && a.setData({
        E7S: 3 & we
      }), we >> 2 & 3 && a.setData({
        E8S: we >> 2 & 3
      }), we >> 4 & 3 && a.setData({
        E9S: we >> 4 & 3
      }), 3 & (we = Ye(e, 8)) && a.setData({
        EAS: 3 & we
      }), we >> 2 & 3 && (we >> 2 & 3) < 3 && a.setData({
        EBS: we >> 2 & 3
      }), we >> 4 & 3 && (we >> 4 & 3) < 3 && a.setData({
        ECS: we >> 4 & 3
      })
    } else if (e.startsWith("40")) {
      De = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"], me = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var ve = Ye(e, 2);
      128 & ve && He("测试 模式"), 64 & ve && He("负载 震荡"), 32 & ve && He("输出 继电器"), 16 & ve && He("放电 电路"), 8 & ve && He("继电器 电路"), 4 & ve && He("短路 锁死"), 2 & ve && He("硬件 地址"), 1 & ve && He("放电 电路"), 128 & (ve = Ye(e, 4)) && He("更换 地址"), 64 & ve && He("地址 冲突"), 32 & ve && He("均流 屏蔽"), 16 & ve && He("通讯 异常"), 8 & ve && He("电容 电压"), 4 & ve && He("输出 过压"), 2 & ve && He("输出 模式"), 1 & ve && He("插座 异常"), 128 & (ve = Ye(e, 6)) && He("母线 电压"), 64 & ve && He("母线 平衡"), 32 & ve && He("输入 停电"), 16 & ve && He("恒流 状态"), 8 & ve && He("输出 短路"), 4 & ve && He("内部 通讯"), 2 & ve && He("效率 寻优"), 1 & ve && He("均流 异常"), 128 & (ve = Ye(e, 8)) && He("PFC 故障"), 64 & ve && He("输入 过压"), 32 & ve && He("ID 重复"), 16 & ve && He("严重 均流"), 8 & ve && He("交流 缺相"), 4 & ve && He("三项 平衡"), 2 & ve && He("输入 欠压"), 1 & ve && He("顺序 启机"), 128 & (ve = Ye(e, 10)) && He("通讯 质量"), 64 & ve && He("自动 模式"), 32 & ve && He("地址 重排"), 16 & ve && He("内部 过温"), 4 & ve && He("风机 异常"), 2 & ve && He("模块 关机"), 1 & ve && He("低温 保护"), 128 & (ve = Ye(e, 12)) && He("输出 欠压"), 64 & ve && He("输出 过流"), 32 & ve && He("存储 芯片"), 16 & ve && He("风机 故障"), 8 & ve && He("模块 保护"), 4 & ve && He("模块 故障"), 2 & ve && He("超温 保护"), 1 & ve && He("过压 锁死");
      var be = [De[0].split(" "), De[1].split(" "), De[2].split(" "), De[3].split(" "), De[4].split(" "), De[5].split(" "), De[6].split(" "), De[7].split(" "), De[8].split(" "), De[9].split(" "), De[10].split(" "), De[11].split(" ")];
      a.setData({
        E1S: me[0],
        E1A: be[0][0],
        E1B: be[0][1],
        E2S: me[1],
        E2A: be[1][0],
        E2B: be[1][1],
        E3S: me[2],
        E3A: be[2][0],
        E3B: be[2][1],
        E4S: me[3],
        E4A: be[3][0],
        E4B: be[3][1],
        E5S: me[4],
        E5A: be[4][0],
        E5B: be[4][1],
        E6S: me[5],
        E6A: be[5][0],
        E6B: be[5][1],
        E7S: me[6],
        E7A: be[6][0],
        E7B: be[6][1],
        E8S: me[7],
        E8A: be[7][0],
        E8B: be[7][1],
        E9S: me[8],
        E9A: be[8][0],
        E9B: be[8][1],
        EAS: me[9],
        EAA: be[9][0],
        EAB: be[9][1],
        EBS: me[10],
        EBA: be[10][0],
        EBB: be[10][1],
        ECS: me[11],
        ECA: be[11][0],
        ECB: be[11][1]
      })
    } else if (e.startsWith("D1") || e.startsWith("D0")) {
      if (2 != ee) return;
      var Ue = e.substring(2, 10),
        Me = [e.substring(10, 12), e.substring(12, 14), e.substring(14, 16), e.substring(16, 18), e.substring(18, 20), e.substring(20, 22), e.substring(22, 24), e.substring(24, 26)],
        We = parseInt(Ue, 16);
      if (405206102 == We) 38, console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "电桩", "握手信息");
      else if (402781270 == We) console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "电桩", "车辆识别" + Me[0]);
      else if (485291094 == We) "11" == Me[0] ? console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "电桩", "同意收包" + Me[6]) : "13" == Me[0] && console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "电桩", "收包完成" + Me[6]);
      else if (403174486 == We) console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "电桩", "同步时间" + Me[0] + Me[1]);
      else if (403240022 == We) {
        9;
        var Le = parseInt(Me[1] + Me[0], 16),
          Ke = parseInt(Me[3] + Me[2], 16),
          ye = parseInt(Me[5] + Me[4], 16),
          je = parseInt(Me[7] + Me[6], 16);
        console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "电桩", "充电范围:电压" + Ke + "-" + Le + " 电流" + je + "-" + ye)
      } else if (269153366 == We) console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "电桩", "准备就绪" + Me[0]);
      else if (403895382 == We) {
        var _e = parseInt(Me[1] + Me[0], 16),
          ze = parseInt(Me[3] + Me[2], 16),
          Ze = parseInt(Me[5] + Me[4], 16);
        console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "电桩", "输出信息:V" + _e + " A" + ze + " T" + Ze)
      } else if (270201942 == We) 26, console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "电桩", "中止充电");
      else if (136311894 == We) 31, console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "电桩", "充电器错");
      else if (405231348 == We) {
        var qe = parseInt(Me[1] + Me[0], 16);
        console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "取电器", "绝缘信息:" + qe)
      } else if (269047540 == We) console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "取电器", "电池就绪:" + Me[0]);
      else if (403724020 == We) {
        var Qe = .1 * parseInt(Me[1] + Me[0], 16),
          Je = .1 * parseInt(Me[3] + Me[2], 16);
        console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "取电器", "需求信息:V" + Qe + " A" + Je)
      } else if (485250804 == We) console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "取电器", "请求多包:" + Me[6]);
      else if (485185268 == We) console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "取电器", "多包数据");
      else if (403920628 == We) console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], "取电器", "车辆状态");
      else {
        var Xe = 244 == (255 & We) ? "取电器" : "电桩";
        console.log(Ue, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5], Me[6], Me[7], Xe, "未知")
      }
    }
  },
  onLoad: function (n) {
    a = this, ne = 0, Ne = 0, i = 0, y = 0, te = Number(n.Test), ae = Number(n.GM), Xt = Number(n.CEV), Be = 0;
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
    k = (0, qt.GetCFG)("UEN"), ee = (0, qt.GetCFG)("DEBUG"), de = (0, qt.GetCFG)("BGI", 0), ge = (0, qt.GetCFG)("BGT", "80"), t = (0, qt.GetCFG)("WID", "config"), e = (0, qt.GetCFG)("WPD", "88888888"), a.setData({
      WID: t,
      WPD: e
    }), Ce[1] = (0, qt.GetCFG)("BGP1", "https://dingyue.ws.126.net/2022/0808/701db340g00rg9pym02h5d200cs00leg00it00vh.gif"), Ce[2] = (0, qt.GetCFG)("BGP2", "https://img2.baidu.com/it/u=2215745416,4118415336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422"), Ce[3] = (0, qt.GetCFG)("BGP3", "https://c-ssl.dtstatic.com/uploads/item/201912/08/20191208175320_skjmi.thumb.1000_0.jpg"), Ce[4] = (0, qt.GetCFG)("BGP4", "https://wx4.sinaimg.cn/mw690/9f2299eegy1hqwec2a3ncj21kw2dcx6p.jpg");
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
      TestV: "5.41(测试一)",
      RoCEV: "5.39",
      UPDate: "5.40",
      APP: "1.26",
      GM: ae,
      ADD: Be,
      CAN: Jt,
      CEV: Xt,
      BGI: de,
      BGT: parseInt(ge, 16),
      BGC: "#000000" + ge,
      BGP: Ce[de],
      BGP1: Ce[1],
      BGP2: Ce[2],
      BGP3: Ce[3],
      BGP4: Ce[4]
    }), te && (pe[0] = "1", pe[1] = "2", pe[2] = "3", pe[3] = "4", Xt ? this.MSG("", "EEA47210A4AE300E0" + 541..toString(16) + "43786A64777800000000") : this.MSG("", "EEA47210A4AE30010" + 541..toString(16) + "323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000021340000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), Qt.onBLEConnectionStateChange((function () {
      i || (i = 1, Te.showModal({
        title: k ? "Bluetooth Disconnected" : "蓝牙信号丢失",
        content: k ? "Blue abnormal interruption is usually caused by shutdown, weak signal, or significant signal interference" : "通常是关机或信号弱或干扰大导致",
        confirmText: k ? "Yes I Kown" : "我知道了",
        showCancel: false,
        success: function (t) {
          Te.navigateBack({
            delta: 0
          })
        }
      })), Te.navigateBack({
        delta: 0
      })
    })), Qt.onBLECharacteristicValueChange1(this.MSG), ne = 3, Ie("A0" + Re("0000")), Ie("EE"), setTimeout((function () {
      3 == ne && (ne = 0, Ie("A0" + Re((0, qt.GetCFG)(p, "0000"))), console.log("Re login:1")), "0" == y && Ie("EE")
    }), 1500), setTimeout((function () {
      3 == ne && (ne = 0, Ie("A0" + Re((0, qt.GetCFG)(p, "0000"))), console.log("Re login:1")), "0" == y && Ie("EE")
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