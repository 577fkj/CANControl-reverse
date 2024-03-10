var t,
  e,
  a,
  n,
  i,
  o,
  r,
  s,
  c,
  u,
  f,
  h,
  F,
  d,
  S,
  l,
  p,
  g,
  T,
  C,
  B,
  x,
  D,
  m,
  w,
  E,
  O,
  v,
  I,
  A,
  G,
  b,
  R,
  $,
  N,
  L,
  W,
  M,
  U,
  K,
  V,
  P,
  y,
  k,
  Y,
  H,
  j,
  q,
  _,
  Q,
  Z,
  z,
  X,
  J,
  tt,
  et,
  at,
  nt,
  it,
  ot,
  rt,
  st,
  ct,
  ut,
  ft,
  ht,
  Ft,
  dt,
  St,
  lt,
  pt,
  gt = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  Tt = require("../../@babel/runtime/helpers/asyncToGenerator"),
  Ct = require("../../445F65219E166AAF22390D2641262D70.js"),
  Bt = require("../../056882B19E166AAF630EEAB6C1362D70.js"),
  xt = 0,
  Dt = 0,
  mt = "设备连接成功",
  wt = "1,27,30,欢迎",
  Et = "1,57,30,使用",
  Ot = 0,
  vt = "ff",
  It = "ff",
  At = "ff",
  Gt = wx;
function bt(t, e) {
  var a =
    arguments.length > 2 && void 0 !== arguments[2]
      ? arguments[2]
      : function () {};
  Gt.showModal({
    title: t,
    editable: !0,
    placeholderText: e,
    confirmText: $ ? "YES" : "确定",
    cancelText: $ ? "NO" : "取消",
    success: function (t) {
      t.confirm && a(t.content);
    },
  });
}
function Rt(t, e, a, n) {
  var i =
    arguments.length > 4 && void 0 !== arguments[4]
      ? arguments[4]
      : function () {};
  Gt.showModal({
    title: $ ? e : t,
    editable: !0,
    placeholderText: ($ ? "Range:" : "范围:") + a + "-" + n,
    confirmText: $ ? "YES" : "确定",
    cancelText: $ ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if (e > Number(n) || e < Number(a) || !isFinite(e))
          return void (0, Ct.Toast)(
            $ ? "Beyond the set range" : "超出设置范围"
          );
        i(e);
      }
    },
  });
}
function $t(t, e, a, n) {
  var i =
    arguments.length > 4 && void 0 !== arguments[4]
      ? arguments[4]
      : function () {};
  Gt.showModal({
    title: $ ? e : t,
    editable: !0,
    placeholderText: $ ? n : a,
    confirmText: $ ? "YES" : "确定",
    cancelText: $ ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e)
          return void (0, Ct.Toast)(
            $ ? "Input cannot be empty" : "输入不能为空"
          );
        i(e);
      }
    },
  });
}
function Nt(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i =
      arguments.length > 4 && void 0 !== arguments[4]
        ? arguments[4]
        : function () {};
  Gt.showModal({
    title: $ ? e : t,
    editable: !1,
    placeholderText: $ ? n : a,
    confirmText: $ ? "YES" : "确定",
    cancelText: $ ? "NO" : "取消",
    success: function (t) {
      t.confirm && i(t);
    },
  });
}
function Lt(t) {
  return (
    t.match(/#(..)(..)(..)/),
    (
      ((parseInt(RegExp.$1, 16) >> 3) << 11) +
      ((parseInt(RegExp.$2, 16) >> 2) << 5) +
      (parseInt(RegExp.$3, 16) >> 3)
    )
      .toString(16)
      .padStart(4, "0")
  );
}
function Wt(t) {
  var e = Math.floor(t / 3600),
    a = Math.floor((t % 3600) / 60),
    n = Math.floor(t % 60);
  return (
    String(e).padStart(2, "0") +
    ":" +
    String(a).padStart(2, "0") +
    ":" +
    String(n).padStart(2, "0")
  );
}
function Mt(t) {
  return Ut.apply(this, arguments);
}
function Ut() {
  return (Ut = Tt(
    gt().mark(function t(e) {
      return gt().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              if ((console.log("Send:" + e), 0 == Vt)) {
                t.next = 4;
                break;
              }
              return (
                (0, Ct.Toast)(
                  $ ? "There are unfinished sending tasks" : "有发送任务未完成"
                ),
                t.abrupt("return")
              );
            case 4:
              return (
                (e = e.substring(0, 40)),
                console.log("Send:" + e),
                (t.next = 8),
                Bt.easySendData1(e, !0)
              );
            case 8:
            case "end":
              return t.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
var Kt = [""],
  Vt = 0;
function Pt(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  0 == Vt
    ? Gt.showModal({
        title: $ ? "Confirm whether to send" : "确认是否发送",
        editable: !1,
        confirmText: $ ? "YES" : "确定",
        cancelText: $ ? "NO" : "取消",
        success: function (a) {
          if (a.confirm) {
            t.match(/^DataStart=([^{]+){(.+)}(DataEnd)$/),
              (Vt = 0),
              ((Kt = [])[0] = "F1" + Ht(RegExp.$1));
            for (
              var n = e ? RegExp.$2 : kt(RegExp.$2), i = 0;
              i < n.length;
              i += 240
            )
              Vt++, (Kt[Vt] = "F2" + n.slice(i, i + 240));
            (Kt[Kt.length] = "F3"), (Vt = 0), yt();
          }
        },
      })
    : (0, Ct.Toast)(
        $ ? "There are unfinished sending tasks" : "有发送任务未完成"
      );
}
function yt(t) {
  var e = Kt[Vt];
  Bt.easySendData1(e, !0),
    (0, Ct.Toast)(
      ($ ? "Sending:" : "发送进度:") + ((Vt / Kt.length) * 100).toFixed(2) + "%"
    ),
    Vt++;
}
function kt(t) {
  if (!t) return t;
  var e,
    a,
    n,
    i,
    o,
    r,
    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    c = 0,
    u = 0,
    f = [];
  t += "";
  do {
    (e =
      ((r =
        (s.indexOf(t.charAt(c++)) << 18) |
        (s.indexOf(t.charAt(c++)) << 12) |
        ((i = s.indexOf(t.charAt(c++))) << 6) |
        (o = s.indexOf(t.charAt(c++)))) >>
        16) &
      255),
      (a = (r >> 8) & 255),
      (n = 255 & r),
      (f[u++] =
        64 === i
          ? e.toString(16).padStart(2, "0")
          : 64 === o
          ? e.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0")
          : e.toString(16).padStart(2, "0") +
            a.toString(16).padStart(2, "0") +
            n.toString(16).padStart(2, "0"));
  } while (c < t.length);
  return f.join("");
}
function Yt() {
  0 == Ot
    ? t.setData({ Cr0: "#" + vt + It + At })
    : 1 == Ot
    ? t.setData({ Cr1: "#" + vt + It + At })
    : 2 == Ot
    ? t.setData({ Cr2: "#" + vt + It + At })
    : 3 == Ot
    ? t.setData({ Cr3: "#" + vt + It + At })
    : 4 == Ot
    ? t.setData({ Cr4: "#" + vt + It + At })
    : 5 == Ot
    ? t.setData({ Cr5: "#" + vt + It + At })
    : 6 == Ot
    ? t.setData({ Cr6: "#" + vt + It + At })
    : 7 == Ot
    ? t.setData({ Cr7: "#" + vt + It + At })
    : 8 == Ot && t.setData({ Cr8: "#" + vt + It + At });
}
function Ht(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var a = "", n = 0; n < t.length; n++)
    a += t.charCodeAt(n).toString(16).padStart(2, "0");
  return e && (a = a.padEnd(2 * e, "0")), a;
}
function jt(t) {
  for (var e = "", a = 0, n = "", i = 0; i < t.length / 2; i++) {
    var o = t.substr(2 * i, 2),
      r = parseInt(o, 16);
    a && r
      ? ((n += "%" + o), (a -= 1) || ((e += decodeURIComponent(n)), (n = "")))
      : (r >= 224) & (r <= 239)
      ? ((n += "%" + o), (a = 2))
      : r && (e += String.fromCharCode(r));
  }
  return e;
}
function qt(t) {
  return Math.floor(100 * t)
    .toString(16)
    .padStart(8, "0");
}
function _t(t) {
  return Math.floor(t).toString(16).padStart(2, "0");
}
function Qt(t, e) {
  return 0.01 * parseInt(t.substring(e, e + 8), 16);
}
function Zt(t, e) {
  return parseInt(t.substring(e, e + 2), 16);
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
    HQ: 14,
    ShowM: 0,
    APP: "1.09",
    STR: "设备连接异常",
    CVer: 5.5,
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
    UPDate: 5.2,
  },
  BTUP: function (t) {
    this.setData({ ShowBar: 4 != this.data.ShowBar ? 4 : -1 });
  },
  BTDDT: function (t) {
    this.setData({ ShowBar: 7 != this.data.ShowBar ? 7 : -1 });
  },
  BTKEY: function (t) {
    this.setData({ ShowBar: 8 != this.data.ShowBar ? 8 : -1 });
  },
  BTBLE: function (t) {
    this.setData({ ShowBar: 9 != this.data.ShowBar ? 9 : -1 });
  },
  BTCr: function (t) {
    this.setData({ ShowBar: 10 != this.data.ShowBar ? 10 : -1 });
  },
  BTLEDK: function (t) {
    this.setData({ ShowBar: 11 != this.data.ShowBar ? 11 : -1 });
  },
  BTLEDKS: function (t) {
    this.setData({ ShowBar: 12 != this.data.ShowBar ? 12 : -1 });
  },
  BTStart: function (t) {
    this.setData({ ShowBar: 13 != this.data.ShowBar ? 13 : -1 });
  },
  BTGIF: function (t) {
    this.setData({ ShowBar: 14 != this.data.ShowBar ? 14 : -1 });
  },
  BTOVT: function (t) {
    this.setData({ ShowBar: 0 != this.data.ShowBar ? 0 : -1 });
  },
  BTOAT: function (t) {
    this.setData({ ShowBar: 1 != this.data.ShowBar ? 1 : -1 });
  },
  BTOVF: function (t) {
    this.setData({ ShowBar: 2 != this.data.ShowBar ? 2 : -1 });
  },
  BTOAF: function (t) {
    this.setData({ ShowBar: 3 != this.data.ShowBar ? 3 : -1 });
  },
  BTUMT: function (t) {
    this.setData({ ShowBar: 5 != this.data.ShowBar ? 5 : -1 });
  },
  BTFAN: function (t) {
    this.setData({ ShowBar: 6 != this.data.ShowBar ? 6 : -1 });
  },
  BTCAN: function (t) {
    this.setData({ ShowBar: 16 != this.data.ShowBar ? 16 : -1 });
  },
  BTNTC: function (t) {
    this.setData({ ShowBar: 17 != this.data.ShowBar ? 17 : -1 });
  },
  BTSMW: function (t) {
    this.setData({ ShowBar: 18 != this.data.ShowBar ? 18 : -1 });
  },
  BTEN: function (t) {
    this.setData({ ShowBar: 19 != this.data.ShowBar ? 19 : -1 });
  },
  BTLOGO: function (t) {
    this.setData({ ShowBar: 20 != this.data.ShowBar ? 20 : -1 });
  },
  BTCKA: function (t) {
    this.setData({ ShowBar: 21 != this.data.ShowBar ? 21 : -1 });
  },
  uset: function (t) {
    (2 == Dt || xt) &&
      this.setData({ Panel: 3, ShowBar: 8, LOGO: $ ? "Preview" : "预览" });
  },
  SetSM: function (t) {
    0 == this.data.ShowM
      ? this.setData({ ShowM: 1 })
      : (this.data.ShowM, this.setData({ ShowM: 0 })),
      (0, Ct.SetCFG)("ShowM", this.data.ShowM);
  },
  BTSMW1: function (t) {
    Rt(
      "设置输出最大功率",
      "Set maximum output power",
      "500",
      "10000",
      function (t) {
        Mt("F84E" + qt(t)), Mt("FF");
      }
    );
  },
  BTLOGO0: function (e) {
    "预览" == t.data.LOGO || "Preview" == t.data.LOGO
      ? (Gt.showToast({
          content: "正在生成预览",
          title: "正在生成预览",
          type: "loading",
          icon: "loading",
          duration: 46e5,
          mask: !0,
        }),
        t.SetLOGO(wt + "|" + Et, t))
      : ("发送" != t.data.LOGO && "Send" != t.data.LOGO) || Pt(n, 1),
      t.setData({ ShowBar: 20, LOGO: $ ? "Preview" : "预览" });
  },
  BTLOGO1: function (e) {
    $t("设置第一行LOGO", "Set the first line logo", wt, wt, function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) wt = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/))
        (wt = "1,27,30," + RegExp.$1), (Et = "1,57,30," + RegExp.$2);
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/))
          return void (0, Ct.Toast)($ ? "Input format error" : "输入格式错误");
        wt = "1,27,30," + RegExp.$1;
      }
      t.setData({ LOGO1: wt, LOGO2: Et, LOGO: $ ? "Preview" : "预览" });
    });
  },
  BTLOGO2: function (e) {
    $t("设置第二行LOGO", "Set second line logo", Et, Et, function (e) {
      if (e.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Et = e;
      else if (e.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/))
        (wt = "1,27,30," + RegExp.$1), (Et = "1,57,30," + RegExp.$2);
      else {
        if (!e.match(/^([\u4e00-\u9fa5]{2})$/))
          return void (0, Ct.Toast)($ ? "Input format error" : "输入格式错误");
        Et = "1,57,30," + RegExp.$1;
      }
      t.setData({ LOGO1: wt, LOGO2: Et, LOGO: $ ? "Preview" : "预览" });
    });
  },
  SetLOGO: function (t, e) {
    Gt.createSelectorQuery()
      .select("#LOGO")
      .fields({ node: !0, size: !0 })
      .exec(function (a) {
        var i = a[0].node,
          o = i.getContext("2d");
        (i.width = 60),
          (i.height = 60),
          (o.fillStyle = "#000"),
          o.scale(1, 1),
          o.fillRect(0, 0, 60, 60),
          (o.fillStyle = "#fff");
        var r = t.split("|");
        ("");
        for (var s = 0; s < r.length; s += 1) {
          var c = r[s].split(",");
          c[3];
          var u = c[0],
            f = c[1],
            h = c[2],
            F = c[3];
          (o.font = "normal " + h + "px Kaiti"), o.fillText(F, u, f);
        }
        var d = [0],
          S = -1;
        n = "DataStart=LOGO{";
        for (var l = 0; l < 60; l += 1) {
          for (
            var p = o.getImageData(0, l, 60, 1).data, g = 0;
            g < 60;
            g += 1
          ) {
            g % 8 == 0 &&
              (g && (n += d[S].toString(16).padStart(2, "0")), (S += 1));
            var T =
              0.299 * p[4 * g] + 0.587 * p[4 * g + 1] + 0.114 * p[4 * g + 2];
            (d[S] = d[S] >> 1), (d[S] = d[S] | (T < 100 ? 0 : 128));
          }
          n += (d[S] >> 4).toString(16).padStart(2, "0");
        }
        (n += "}DataEnd"),
          Gt.hideToast(),
          e.setData({ LOGO: $ ? "Send" : "发送" });
      });
  },
  BTNTC1: function (t) {
    Mt("F962" + _t(1 - St)), Mt("FF");
  },
  BTCAN1: function (t) {
    Nt(
      "确认是否切换为华为",
      "Switch to Huawei",
      "将会清除所有设置",
      "All settings will be cleared",
      function (t) {
        Mt("FC530101"),
          (0, Ct.Toast)(
            $ ? "The device is restarting" : "重置已发送,设备正在重启!"
          ),
          Gt.navigateBack({ delta: 0 });
      }
    );
  },
  BTCAN2: function (t) {
    Nt(
      "确认是否切换为英可瑞",
      "Switch to Increase",
      "将会清除所有设置",
      "All settings will be cleared",
      function (t) {
        Mt("FC530201"),
          (0, Ct.Toast)(
            $ ? "The device is restarting" : "重置已发送,设备正在重启!"
          ),
          Gt.navigateBack({ delta: 0 });
      }
    );
  },
  BTCAN4: function (t) {
    Nt(
      "确认是否切换为中兴",
      "Switch to ZTE",
      "将会清除所有设置",
      "All settings will be cleared",
      function (t) {
        Mt("FC530401"),
          (0, Ct.Toast)(
            $ ? "The device is restarting" : "重置已发送,设备正在重启!"
          ),
          Gt.navigateBack({ delta: 0 });
      }
    );
  },
  BTCAN8: function (t) {
    Nt(
      "确认是否切换为英飞源",
      "Switch to Infy",
      "将会清除所有设置",
      "All settings will be cleared",
      function (t) {
        Mt("FC530801"),
          (0, Ct.Toast)(
            $ ? "The device is restarting" : "重置已发送,设备正在重启!"
          ),
          Gt.navigateBack({ delta: 0 });
      }
    );
  },
  BTCAN16: function (t) {
    Nt(
      "确认是否切换为EPS6020",
      "Switch to EPS6020",
      "将会清除所有设置",
      "All settings will be cleared",
      function (t) {
        Mt("FC531001"),
          (0, Ct.Toast)(
            $ ? "The device is restarting" : "重置已发送,设备正在重启!"
          ),
          Gt.navigateBack({ delta: 0 });
      }
    );
  },
  BTLEDK2: function (t) {
    Rt(
      "设置关机屏幕亮度",
      "Set shutdown screen brightness",
      "0",
      "255",
      function (t) {
        Mt("F968" + _t(t)), Mt("FF");
      }
    );
  },
  BTLEDK1: function (t) {
    Rt(
      "设置开机屏幕亮度",
      "Set the brightness of the startup screen",
      "10",
      "255",
      function (t) {
        Mt("F969" + _t(t)), Mt("FF");
      }
    );
  },
  BTLEDKS1: function (t) {
    Rt("设置息屏时间", "Set screen rest time", "5", "255", function (t) {
      Mt("F96D" + _t(t)), Mt("FF");
    });
  },
  BTLEDKS2: function (t) {
    Rt(
      "设置息屏屏幕亮度",
      "Set the brightness of the breath screen",
      "0",
      "255",
      function (t) {
        Mt("F96A" + _t(t)), Mt("FF");
      }
    );
  },
  BTStart1: function (t) {
    Rt("设置初始页面时间", "Set initial page time", "3", "15", function (t) {
      Mt("F96B" + _t(t)), Mt("FF");
    });
  },
  BTStart2: function (t) {
    Mt("F96C" + _t(1 - V)), Mt("FF");
  },
  BTGIF1: function (t) {
    Mt("F96F" + _t(1 - ct)), Mt("FF");
  },
  BT_GIF1: function (t) {
    Pt((0, Ct.GetGIF)(1));
  },
  BT_GIF2: function (t) {
    Pt((0, Ct.GetGIF)(2));
  },
  BT_GIF3: function (t) {
    Pt((0, Ct.GetGIF)(3));
  },
  BT_GIF4: function (t) {
    Pt((0, Ct.GetGIF)(4));
  },
  BT_GIF5: function (t) {
    Pt((0, Ct.GetGIF)(5));
  },
  BTCr1: function (t) {
    Mt("F53000" + Lt(this.data.Cr0) + "0000f01c"),
      Mt("F53100" + Lt(this.data.Cr1) + "00209F26"),
      Mt("F53200" + Lt(this.data.Cr2) + "00479F26"),
      Mt("F53300" + Lt(this.data.Cr3) + "006e9F26"),
      Mt("F53400" + Lt(this.data.Cr4) + "00969F3e"),
      Mt("F53500" + Lt(this.data.Cr5) + "A3204d4d"),
      Mt("F53600" + Lt(this.data.Cr6) + "50d64f1A"),
      Mt("F53700" + Lt(this.data.Cr7) + "00d64f1A"),
      Mt("F53801" + Lt(this.data.Cr8) + "A3774d68");
  },
  CK0: function (t) {
    (Ot = 0),
      this.data.Cr0.match(/#(..)(..)(..)/),
      (vt = RegExp.$1),
      (It = RegExp.$2),
      (At = RegExp.$3),
      this.setData({
        CR: parseInt(vt, 16),
        CG: parseInt(It, 16),
        CB: parseInt(At, 16),
      });
  },
  CK1: function (t) {
    (Ot = 1),
      this.data.Cr1.match(/#(..)(..)(..)/),
      (vt = RegExp.$1),
      (It = RegExp.$2),
      (At = RegExp.$3),
      this.setData({
        CR: parseInt(vt, 16),
        CG: parseInt(It, 16),
        CB: parseInt(At, 16),
      });
  },
  CK2: function (t) {
    (Ot = 2),
      this.data.Cr2.match(/#(..)(..)(..)/),
      (vt = RegExp.$1),
      (It = RegExp.$2),
      (At = RegExp.$3),
      this.setData({
        CR: parseInt(vt, 16),
        CG: parseInt(It, 16),
        CB: parseInt(At, 16),
      });
  },
  CK3: function (t) {
    (Ot = 3),
      this.data.Cr3.match(/#(..)(..)(..)/),
      (vt = RegExp.$1),
      (It = RegExp.$2),
      (At = RegExp.$3),
      this.setData({
        CR: parseInt(vt, 16),
        CG: parseInt(It, 16),
        CB: parseInt(At, 16),
      });
  },
  CK4: function (t) {
    (Ot = 4),
      this.data.Cr4.match(/#(..)(..)(..)/),
      (vt = RegExp.$1),
      (It = RegExp.$2),
      (At = RegExp.$3),
      this.setData({
        CR: parseInt(vt, 16),
        CG: parseInt(It, 16),
        CB: parseInt(At, 16),
      });
  },
  CK5: function (t) {
    (Ot = 5),
      this.data.Cr5.match(/#(..)(..)(..)/),
      (vt = RegExp.$1),
      (It = RegExp.$2),
      (At = RegExp.$3),
      this.setData({
        CR: parseInt(vt, 16),
        CG: parseInt(It, 16),
        CB: parseInt(At, 16),
      });
  },
  CK6: function (t) {
    (Ot = 6),
      this.data.Cr6.match(/#(..)(..)(..)/),
      (vt = RegExp.$1),
      (It = RegExp.$2),
      (At = RegExp.$3),
      this.setData({
        CR: parseInt(vt, 16),
        CG: parseInt(It, 16),
        CB: parseInt(At, 16),
      });
  },
  CK7: function (t) {
    (Ot = 7),
      this.data.Cr7.match(/#(..)(..)(..)/),
      (vt = RegExp.$1),
      (It = RegExp.$2),
      (At = RegExp.$3),
      this.setData({
        CR: parseInt(vt, 16),
        CG: parseInt(It, 16),
        CB: parseInt(At, 16),
      });
  },
  CK8: function (t) {
    (Ot = 8),
      this.data.Cr8.match(/#(..)(..)(..)/),
      (vt = RegExp.$1),
      (It = RegExp.$2),
      (At = RegExp.$3),
      this.setData({
        CR: parseInt(vt, 16),
        CG: parseInt(It, 16),
        CB: parseInt(At, 16),
      });
  },
  CRC: function (t) {
    (vt = t.detail.value.toString(16).padStart(2, "0")), Yt();
  },
  CGC: function (t) {
    (It = t.detail.value.toString(16).padStart(2, "0")), Yt();
  },
  CBC: function (t) {
    (At = t.detail.value.toString(16).padStart(2, "0")), Yt();
  },
  BTCKA2: function (t) {
    Mt("F972" + _t(1 - ut)), Mt("FF");
  },
  BTEN1: function (t) {
    (0, Ct.SetCFG)("UEN", 1 - $), Mt("F970" + _t(1 - $)), Mt("FF");
  },
  BTBLE1: function (t) {
    $t(
      "设置蓝牙名称",
      "Set Bluetooth name",
      "最多6个汉字或18个字符",
      "Up to 18 characters",
      function (t) {
        Mt("FA73" + Ht((t = unescape(encodeURIComponent(t))))), Mt("FF");
      }
    );
  },
  BTBLE2: function (t) {
    $t(
      "设置蓝牙密码",
      "Set Bluetooth password",
      "最多18个字符",
      "Up to 18 characters",
      function (t) {
        Mt("FA74" + Ht(t)), Mt("FF");
      }
    );
  },
  BTKEY1: function (t) {
    Mt("F967" + _t(1 - A)), Mt("FF");
  },
  BTKEY2: function (t) {
    Mt("F966" + _t(1 - N)), Mt("FF");
  },
  BTDDT1: function (t) {
    Mt("F96E" + _t(lt >= 3 ? 0 : lt + 1)), Mt("FF");
  },
  BTUP6: function (t) {
    $t(
      "设置WIFI热点名称",
      "Set WIFI name",
      "最多6个汉字或18个字符",
      "Up to 18 characters",
      function (t) {
        Mt("AB00" + Ht((t = unescape(encodeURIComponent(t))))), Mt("FF");
      }
    );
  },
  BTUP7: function (t) {
    $t(
      "设置WIFI热点密码",
      "Set WIFI password",
      "最多6个汉字或18个字符",
      "Up to 18 characters",
      function (t) {
        Mt("AB01" + Ht((t = unescape(encodeURIComponent(t))))), Mt("FF");
      }
    );
  },
  BTUP1: function (t) {
    (this.data.CVer >= this.data.UPDate && !xt) ||
      Gt.showModal({
        title: $ ? "Start Upgrade" : "开始升级",
        editable: !1,
        confirmText: $ ? "YES" : "确定",
        cancelText: $ ? "NO" : "取消",
        success: function (t) {
          if (t.confirm)
            return (
              Mt("A700000000" + Ht("CANControl")),
              void (0, Ct.Toast)(
                $
                  ? "Upgrading, please pay attention to the screen display"
                  : "已进入升级状态,请观察屏幕显示."
              )
            );
        },
      });
  },
  BTUP8: function (t) {
    Gt.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888",
    });
  },
  BTUP2: function (t) {
    Gt.setClipboardData({ data: "设备ID:" + T });
  },
  BTUP0: function (t) {
    Gt.showModal({
      title: $ ? "Firmware rollback" : "固件回退",
      editable: !1,
      confirmText: $ ? "YES" : "确定",
      cancelText: $ ? "NO" : "取消",
      success: function (t) {
        if (t.confirm)
          return (
            Mt("A7" + Ht("24", 4) + Ht("CANControl")),
            void (0, Ct.Toast)(
              $
                ? "Upgrading, please pay attention to the screen display"
                : "已进入升级状态,请观察屏幕显示."
            )
          );
      },
    });
  },
  BTUFS: function (t) {
    Rt(
      "设置温度加速值",
      "Set temperature acceleration value",
      "3",
      "15",
      function (t) {
        Mt("F963" + _t(t)), Mt("FF");
      }
    );
  },
  BTAFS: function (t) {
    Rt(
      "设置电流加速值",
      "Set current acceleration value",
      "0.1",
      "2.0",
      function (t) {
        Mt("F964" + _t(10 * t)), Mt("FF");
      }
    );
  },
  BTLFS: function (t) {
    Rt(
      "设置初始风速值",
      "Set initial wind speed value",
      "30",
      "120",
      function (t) {
        Mt("F965" + _t(t)), Mt("FF");
      }
    );
  },
  BTTMC: function (t) {
    Rt(
      "设置超温限制温度",
      "Set over temperature limit temperature",
      "40",
      "90",
      function (t) {
        Mt("F84A" + qt(t)), Mt("FF");
      }
    );
  },
  BTTMC1: function (t) {
    Rt(
      "设置超温退出温度",
      "Set the exit temperature for over temperature",
      "40",
      "90",
      function (t) {
        Mt("F84B" + qt(t)), Mt("FF");
      }
    );
  },
  BTTMW: function (t) {
    Rt(
      "设置超温限制功率",
      "Set over temperature limit power",
      "500",
      "4000",
      function (t) {
        Mt("F84C" + qt(t)), Mt("FF");
      }
    );
  },
  BTOVT0: function (t) {
    i < 10 || o > 0
      ? (0, Ct.Toast)(
          $
            ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A"
            : "电压校正必须要输出电压高于10V且输出电流为0A"
        )
      : (Mt("C1"),
        Mt("FF"),
        Rt(
          "输入实际测量出的输出电压",
          "Input the actual measured output voltage",
          "10",
          "1000",
          function (t) {
            var e = Number(t / i).toFixed(4),
              a = Number(t / y).toFixed(4);
            Mt("C3" + qt(100 * a) + qt(100 * e)),
              2 == R
                ? (Mt("F876" + qt(20 * a)), Mt("F877" + qt(100 * a)))
                : 1 == R
                ? (Mt("F876" + qt(41 * a)), Mt("F877" + qt(58.5 * a)))
                : 4 == R
                ? (Mt("F876" + qt(41 * a)), Mt("F877" + qt(59 * a)))
                : 16 == R && (Mt("F876" + qt(44 * a)), Mt("F877" + qt(61 * a))),
              Mt("FF");
          }
        ));
  },
  BTOVT1: function (t) {
    Rt(
      "显示电压补偿",
      "Display voltage compensation",
      "0.1",
      "5",
      function (t) {
        Mt("FB47" + qt(100 * t)), Mt("FF");
      }
    );
  },
  BTOVD1: function (t) {
    Rt("设置电压补偿", "Set voltage compensation", "0.1", "5", function (t) {
      Mt("FB46" + qt(100 * t)), Mt("FF");
    });
  },
  BTOVS: function (t) {
    bt(
      $ ? "Set voltage range" : "设置电压范围",
      ($ ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV,
      function (t) {
        (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/)
          ? (Mt("F876" + qt(Number(RegExp.$1))),
            Mt("F877" + qt(Number(RegExp.$2))),
            Mt("FF"))
          : (0, Ct.Toast)($ ? "Input format error" : "输入格式错误!");
      }
    );
  },
  BTOST0: function (t) {
    i < 10 || o > 0
      ? (0, Ct.Toast)("电压校正必须要输出电压高于10V且输出电流为0A")
      : (Mt("ResetO2D"),
        Mt("FF"),
        Rt(
          "输入实际测量出的输出电压",
          "Input the actual measured output voltage",
          "10",
          "1000",
          function (t) {
            var e = Number(t / i).toFixed(6),
              a = Number(t / y).toFixed(6);
            Mt("SetO2D=" + a + "," + e),
              Mt("SetS2F=" + (41 * a).toFixed(2) + "," + (58.5 * a).toFixed(2)),
              Mt("FF");
          }
        ));
  },
  BTOAT0: function (t) {
    o < 5 || y - i < 0.2
      ? (0, Ct.Toast)(
          $
            ? "During current correction, the output current must be greater than 5A and in a constant current state"
            : "电流校正时输出电流必须大于5A且处于恒流状态"
        )
      : (Mt("C0"),
        Mt("FF"),
        Rt(
          "输入实际测量出的输出电流",
          "Input the actual measured output current",
          "3",
          "100",
          function (t) {
            var e = Number(t / o).toFixed(4);
            Mt("C5" + qt(100 * Number(t / k).toFixed(4)) + qt(100 * e)),
              Mt("FF");
          }
        ));
  },
  BTOAT1: function (t) {
    Rt(
      "显示电流补偿",
      "Display current compensation",
      "0.1",
      "5",
      function (t) {
        Mt("FB45" + qt(100 * t)), Mt("FF");
      }
    );
  },
  BTOAD1: function (t) {
    Rt("设置电流补偿", "Set current compensation", "0.1", "5", function (t) {
      Mt("FB44" + qt(100 * t)), Mt("FF");
    });
  },
  BTOAS: function (t) {
    bt(
      $ ? "Set current range" : "设置电流范围",
      ($ ? "Now:" : "当前范围:") + z + "-" + X,
      function (t) {
        (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/)
          ? (Mt("F878" + qt(Number(RegExp.$1))),
            Mt("F879" + qt(Number(RegExp.$2))),
            Mt("FF"))
          : (0, Ct.Toast)($ ? "Input format error" : "输入格式错误!");
      }
    );
  },
  BTGPWD: function (t) {
    $t(
      "设置系统密码",
      "Set System password",
      "最多18个字符",
      "Up to 18 characters",
      function (t) {
        Mt("FA75" + Ht(t)), Mt("FF");
      }
    );
  },
  BTRST: function (t) {
    Nt(
      "确认是否重置设置",
      "Confirm whether to reset the settings",
      "将会清除所有图片和设置",
      "All images and settings will be cleared",
      function (t) {
        Mt("F601"),
          (0, Ct.Toast)(
            $ ? "The device is restarting" : "重置已发送,设备正在重启!"
          ),
          Gt.navigateBack({ delta: 0 });
      }
    );
  },
  BTBC: function (t) {
    this.setData({ Panel: 1 });
  },
  pwrbt: function (t) {
    Mt("A6" + _t(1 - I)), Mt("FF");
  },
  owbt: function (t) {
    Rt("设置输出功率限制", "Set output power limit", "300", M, function (t) {
      Mt("F84D" + qt(t)), Mt("FF");
    });
  },
  tibt: function (t) {
    Rt("设置预约时间", "Set appointment time", "0", 1200, function (t) {
      Mt(
        "A9" +
          (function (t) {
            return Math.floor(t).toString(16).padStart(4, "0");
          })(t)
      ),
        Mt("FF");
    });
  },
  ks1bt: function (t) {
    var e = E[0],
      a = E[1] > X ? X : E[1];
    e > tt || e < J
      ? Rt("设置输出电压", "Set output voltage", J, tt, function (t) {
          Mt("A80" + (v = 1) + qt(t) + qt(a)), Mt("FF");
        })
      : (Mt("A80" + (v = 1) + qt(e) + qt(a)), Mt("FF"));
  },
  ks2bt: function (t) {
    var e = O[0],
      a = O[1] > X ? X : O[1];
    e > tt || e < J
      ? Rt("设置输出电压", "Set output voltage", J, tt, function (t) {
          Mt("A80" + (v = 2) + qt(t) + qt(a)), Mt("FF");
        })
      : (Mt("A80" + (v = 2) + qt(e) + qt(a)), Mt("FF"));
  },
  ks3bt: function (t) {
    var e = G[0],
      a = G[1] > X ? X : G[1];
    e > tt || e < J
      ? Rt("设置输出电压", "Set output voltage", J, tt, function (t) {
          Mt("A80" + (v = 3) + qt(t) + qt(a)), Mt("FF");
        })
      : (Mt("A80" + (v = 3) + qt(e) + qt(a)), Mt("FF"));
  },
  ks4bt: function (t) {
    var e = b[0],
      a = b[1] > X ? X : b[1];
    e > tt || e < J
      ? Rt("设置输出电压", "Set output voltage", J, tt, function (t) {
          Mt("A80" + (v = 4) + qt(t) + qt(a)), Mt("FF");
        })
      : (Mt("A80" + (v = 4) + qt(e) + qt(a)), Mt("FF"));
  },
  hqbt1: function (t) {
    Rt("设置软启时间", "Set soft start time", 5, 20, function (t) {
      Mt("F961" + _t(t)), Mt("FF");
    });
  },
  hqbt0: function (t) {
    Mt("F961" + _t(0 == st ? 10 : 0)), Mt("FF");
  },
  nvbt: function (t) {
    bt(
      $ ? "Set Output Voltage" : "设置输出电压",
      ($ ? "Range:" : "范围:") + J + "-" + tt,
      function (t) {
        if (t) {
          if (
            (Mt("A1" + Ht(t)),
            (t = parseFloat(t)) > tt || t < J || !isFinite(t))
          )
            return void ERange();
          Mt("A80" + v + qt(t) + qt(k)), Mt("FF");
        } else
          wx.getClipboardData({
            success: function (t) {
              var e = t.data;
              e.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/) &&
                wx.showModal({
                  title: "是否发送剪切板中的设置代码",
                  editable: !1,
                  placeholderText: "",
                  success: function (t) {
                    t.confirm && Pt(e);
                  },
                });
            },
          });
      }
    );
  },
  nabt: function (t) {
    Rt("设置输出电流", "Set output current", z, X, function (t) {
      Mt("A80" + v + qt(y) + qt(t)), Mt("FF");
    });
  },
  sa2bt2: function (t) {
    Rt("设置二段电流", "Set second stage current", z, X, function (t) {
      Mt("F857" + qt(t)), Mt("FF");
    });
  },
  sa2bt1: function (t) {
    Rt("设置二段电压", "Set second stage voltage", J, tt, function (t) {
      Mt("F858" + qt(t)), Mt("FF");
    });
  },
  sa2bt0: function (t) {
    Mt("F858" + (0 == W ? qt(y - 3) : "00000000")),
      Mt("F857" + (0 == W ? qt(10) : "00000000")),
      Mt("FF");
  },
  sdbt1: function (t) {
    Rt("设置延时时间(分钟)", "Set delay time (minutes)", 1, 600, function (t) {
      Mt("F859" + qt(t)), Mt("FF");
    });
  },
  sdbt0: function (t) {
    Mt("F859" + (0 == Ft ? qt(30) : "00000000")), Mt("FF");
  },
  onLoad: function (n) {
    var gt = this;
    (t = this),
      (Dt = 0),
      (Vt = 0),
      (xt = 1 == n.GM || (0, Ct.GetCFG)("GM") ? 1 : 0);
    var Tt = (0, Ct.GetGIF)(1);
    Tt.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var wt = RegExp.$2;
    (Tt = (0, Ct.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Et = RegExp.$2;
    (Tt = (0, Ct.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var Ot = RegExp.$2;
    (Tt = (0, Ct.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var vt = RegExp.$2;
    (Tt = (0, Ct.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var It = RegExp.$2;
    $ = (0, Ct.GetCFG)("UEN") ? 1 : 0;
    var At = (0, Ct.GetCFG)("ShowM") ? 1 : 0;
    t.setData({
      GIF1: "data:image/gif;base64," + wt,
      GIF2: "data:image/gif;base64," + Et,
      GIF3: "data:image/gif;base64," + Ot,
      GIF4: "data:image/gif;base64," + vt,
      GIF5: "data:image/gif;base64," + It,
      UEN: $,
      ShowM: At,
      RollV: 5.24,
      Test: 0,
      UPDate: "5.25",
      APP: "1.08",
    }),
      (0, Ct.GetCFG)("TVer"),
      Bt.onBLEConnectionStateChange(function () {
        Gt.navigateBack({ delta: 0 });
      }),
      Bt.onBLECharacteristicValueChange1(function (n, Tt) {
        if (!a) {
          console.log("Msg:" + Tt);
          var Bt = Tt;
          if ("EE" == Bt.substring(0, 2) && 0 == Dt) {
            (Dt = 1),
              (e = jt(Bt.substring(20, 40))),
              console.log(Bt.substring(16, 20));
            var wt = 0.01 * parseInt(Bt.substring(16, 20), 16);
            (R =
              16 ==
              (R =
                8 ==
                (R =
                  4 ==
                  (R =
                    2 ==
                    (R = 1 == (R = Number(Bt.substring(14, 16))) ? "Huawei" : R)
                      ? "Increase"
                      : R)
                    ? "ZXD3000"
                    : R)
                  ? "INFY"
                  : R)
                ? "EPS6020"
                : R),
              (T = "0x" + Bt.substring(2, 14)),
              e.startsWith("Cxjdwx") && (e = "未激活"),
              t.setData({ CVer: wt.toFixed(2), SCAN: R, ID: T, ACT: e });
            var Et = (0, Ct.GetCFG)(T);
            xt && (Et = (Number(T) + 19880914).toString(16).substring(4, 8)),
              Mt("A0" + Ht(Et));
          } else if (Bt.startsWith("A101"))
            t.setData({ ShowBar: 0, Panel: 2, LOGO: $ ? "Preview" : "预览" });
          else if (Bt.startsWith("A001")) {
            if (((Dt = 2), ("Cxjdwx" == e || "未激活" == e) && !xt)) {
              var Ot = new Date();
              Mt(
                "FD48" +
                  Ht(
                    Ot.getFullYear() +
                      "-" +
                      (Ot.getMonth() + 1) +
                      "-" +
                      Ot.getDate()
                  )
              );
            }
            Mt("FF");
          } else if (Bt.startsWith("A000"))
            Gt.showModal({
              title: $ ? "Enter Bluetooth password" : "输入蓝牙密码",
              editable: !0,
              showCancel: !1,
              placeholderText: "ID:" + T,
              confirmText: $ ? "YES" : "确定",
              cancelText: $ ? "NO" : "取消",
              success: function (t) {
                t.confirm &&
                  ((0, Ct.SetCFG)(T, t.content), Mt("A0" + Ht(t.content)));
              },
            });
          else if (Bt.startsWith("F101")) yt();
          else if (Bt.startsWith("F201")) yt();
          else if (Bt.startsWith("F301"))
            (Vt = 0), (Kt = []), (0, Ct.Toast)($ ? "Send End!" : "发送完成!");
          else if (Bt.startsWith("01"))
            (i = Qt(Bt, 2)),
              (o = Qt(Bt, 10)),
              (r = Qt(Bt, 18)),
              (s = Qt(Bt, 26)),
              (c = Zt(Bt, 34)),
              (u = Zt(Bt, 36)),
              (f = Zt(Bt, 38)),
              gt.data.UEN
                ? "0" == f
                  ? (mt = "Communication Abnormality")
                  : 0 == i
                  ? (mt = "Charger Output Abnormality")
                  : 4 == c
                  ? (mt = "Charger Shutdown")
                  : 0 == c
                  ? (mt = "Waiting For Battery Connection")
                  : 1 == c
                  ? (mt = "Charging")
                  : 2 == c
                  ? (mt = "In The Second Stage Of Charging")
                  : 40 == c
                  ? (mt = "Appointment Waiting")
                  : 3 == c
                  ? (mt = "Charging Completed")
                  : 43 == c && (mt = "Charging Completed(Turned Off)")
                : "0" == f
                ? (mt = "CAN通讯异常")
                : 4 == c
                ? (mt = "充电器已关机")
                : 0 == c
                ? (mt = "等待接入电池")
                : 1 == c
                ? (mt = "正在充电中")
                : 2 == c
                ? (mt = "第二段充电中")
                : 40 == c
                ? (mt = "预约等待中")
                : 3 == c
                ? (mt = "充电完成")
                : 43 == c && (mt = "充电完成(已关机)"),
              t.setData({
                STR: mt,
                NFS: u,
                OL: f,
                OV: i.toFixed(2),
                OA: o.toFixed(2),
                OW: r.toFixed(2),
                OT: s.toFixed(2),
              });
          else if (Bt.startsWith("02")) {
            (h = Qt(Bt, 2)),
              (F = Qt(Bt, 10)),
              (d = Qt(Bt, 18)),
              (S = Qt(Bt, 26)),
              (l = Zt(Bt, 34)),
              (p = Zt(Bt, 36)),
              (g = Zt(Bt, 38));
            var vt = ((r / d) * 100).toFixed(2),
              It = (d - r).toFixed(2);
            t.setData({
              IV: h.toFixed(2),
              IA: F.toFixed(2),
              IW: d.toFixed(2),
              IT: S.toFixed(2),
              ST0: l,
              ST1: p,
              ST2: g,
              EEI: d ? vt : "0.00",
              EES: d ? It : "0.00",
            });
          } else if (Bt.startsWith("03"))
            (C = Qt(Bt, 2)),
              (B = Qt(Bt, 10)),
              (x = Qt(Bt, 18)),
              (D = Qt(Bt, 26)),
              (m = Zt(Bt, 34)),
              (w = Zt(Bt, 36)),
              t.setData({
                Ah: C.toFixed(2),
                Wh: B.toFixed(2),
                AH: x.toFixed(2),
                WH: D.toFixed(2),
                SWT: m,
                SMT: w,
              });
          else if (Bt.startsWith("04"))
            t.setData({
              Ti: Wt(Qt(Bt, 2)),
              TI: Wt(Qt(Bt, 10)),
              NSD: Wt(Qt(Bt, 18)),
              SOC: Qt(Bt, 26).toFixed(0),
            });
          else if (Bt.startsWith("10"))
            (E = [Qt(Bt, 2).toFixed(2), Qt(Bt, 10).toFixed(2)]),
              (O = [Qt(Bt, 18).toFixed(2), Qt(Bt, 26).toFixed(2)]),
              (v = Zt(Bt, 34)),
              (I = Zt(Bt, 36)),
              (A = Zt(Bt, 38)),
              1 == v
                ? ((k = E[1]), (y = E[0]))
                : 2 == v && ((k = O[1]), (y = O[0])),
              3 == v
                ? ((k = G[1]), (y = G[0]))
                : 4 == v && ((k = b[1]), (y = b[0])),
              t.setData({
                KS1: E,
                KS2: O,
                KSi: v,
                PON: I,
                KON: A,
                SV: y,
                SA: k,
              });
          else if (Bt.startsWith("11"))
            (G = [Qt(Bt, 2).toFixed(2), Qt(Bt, 10).toFixed(2)]),
              (b = [Qt(Bt, 18).toFixed(2), Qt(Bt, 26).toFixed(2)]),
              (R = Zt(Bt, 34)),
              ($ = Zt(Bt, 36)),
              (N = Zt(Bt, 38)),
              (0, Ct.SetCFG)("UEN", $),
              1 == v
                ? ((k = E[1]), (y = E[0]))
                : 2 == v && ((k = O[1]), (y = O[0])),
              3 == v
                ? ((k = G[1]), (y = G[0]))
                : 4 == v && ((k = b[1]), (y = b[0])),
              t.setData({
                KS3: G,
                KS4: b,
                CAN: R,
                UEN: $,
                KRC: N,
                SV: y,
                SA: k,
              });
          else if (Bt.startsWith("12"))
            (L = Qt(Bt, 2)),
              (W = Qt(Bt, 10)),
              (M = Qt(Bt, 18)),
              (U = Qt(Bt, 26)),
              (K = Zt(Bt, 34)),
              (V = Zt(Bt, 36)),
              (P = Zt(Bt, 38)),
              t.setData({
                SV2: L.toFixed(2),
                SA2: W.toFixed(2),
                SMW: M,
                UMW: U,
                WTi: K,
                ETi: V,
                Sleep: P,
              });
          else if (Bt.startsWith("13"))
            (Y = Qt(Bt, 2)),
              (H = Qt(Bt, 10)),
              (j = Qt(Bt, 18)),
              (q = 0.01 * Qt(Bt, 26)),
              (_ = Zt(Bt, 34)),
              (Q = Zt(Bt, 36)),
              (Z = Zt(Bt, 38)),
              t.setData({
                TMW: Y,
                UMT: H,
                OMT: j,
                O2D: q,
                LEDK0: _,
                LEDK1: Q,
                LEDK2: Z,
              });
          else if (Bt.startsWith("14"))
            (z = Qt(Bt, 2)),
              (X = Qt(Bt, 10)),
              (J = Qt(Bt, 18)),
              (tt = Qt(Bt, 26)),
              (et = Zt(Bt, 34)),
              (at = Zt(Bt, 36)),
              (nt = 0.1 * Zt(Bt, 38)),
              t.setData({
                LSA: z,
                HSA: X,
                LSV: J,
                HSV: tt,
                UFS: et,
                LFS: at,
                AFS: nt.toFixed(1),
              });
          else if (Bt.startsWith("15"))
            (it = 0.01 * Qt(Bt, 2)),
              (ot = 0.01 * Qt(Bt, 10)),
              (rt = 0.01 * Qt(Bt, 18)),
              (dt = 0.01 * Qt(Bt, 26)),
              (st = Zt(Bt, 34)),
              (ct = Zt(Bt, 36)),
              (ut = Zt(Bt, 38)),
              t.setData({
                OVT: it.toFixed(4),
                OAT: ot.toFixed(4),
                OVD: rt.toFixed(4),
                OAD: dt.toFixed(4),
                UHQ: st,
                GIF: ct,
                CKA2: ut,
              });
          else if (Bt.startsWith("16"))
            (ft = Qt(Bt, 2)),
              (ht = Qt(Bt, 10)),
              (Ft = Qt(Bt, 18)),
              (St = Zt(Bt, 34)),
              (lt = Zt(Bt, 36)),
              (pt = Zt(Bt, 38)),
              t.setData({
                L2V: ft,
                H2V: ht,
                USD: Ft,
                NTC: St,
                DDT: lt,
                DDV: pt,
              });
          else if (Bt.startsWith("20")) {
            var At = jt(Bt.substring(2, 40));
            t.setData({ SSID: At });
          } else
            Bt.startsWith("21")
              ? t.setData({ UPWD: jt(Bt.substring(2, 40)) })
              : Bt.startsWith("22")
              ? t.setData({ WID: jt(Bt.substring(2, 40)) })
              : Bt.startsWith("23") &&
                t.setData({ WPD: jt(Bt.substring(2, 40)) });
        }
      });
  },
  onUnload: function () {
    Bt.onBLEConnectionStateChange(function () {}), Bt.closeBLEConnection();
  },
  onShow: function (t) {
    a = 0;
  },
  onHide: function () {
    a = 1;
  },
});
