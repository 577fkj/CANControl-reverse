var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/defineProperty");
require("../../@babel/runtime/helpers/Arrayincludes");
var i, n, a, o, r, l, s, c, f, d = require("../../@babel/runtime/helpers/asyncToGenerator"),
  u = require("../../1D3746269E166AAF7B512E21F3E81D62.js"),
  h = require("../../E0B6CAE39E166AAF86D0A2E4CEE81D62.js"),
  S = 0,
  F = 0,
  g = 0,
  x = 0,
  b = "设备连接成功",
  m = 1,
  w = 1,
  N = "WT",
  T = 0,
  C = 220,
  p = 0,
  D = 35.21,
  I = 3156,
  G = 15,
  B = 1,
  v = 30.5,
  A = 84,
  y = 83.14,
  W = 23.45,
  M = 16.15,
  V = "00:02:30",
  E = 10.01,
  K = 72.25,
  O = 1,
  P = 60,
  k = 2,
  R = ["54.6", "15.00"],
  U = ["64.8", "15.00"],
  L = ["72.4", "15.00"],
  $ = ["84.0", "15.00"],
  z = 1,
  H = 100;

function Q(t) {
  return t.match(/rgb\((\d+),(\d+),(\d+)\)/), ((RegExp.$1 >> 3 << 11) + (RegExp.$2 >> 2 << 5) + (RegExp.$3 >> 3)).toString(16)
}

function Z(t) {
  return wx.getStorageSync(t)
}

function Y(t, e) {
  wx.setStorageSync(t, e)
}

function q(t) {
  wx.showToast({
    title: t,
    icon: "none",
    duration: 2e3
  })
}

function j(t, e, i) {
  return t.match(e + "[=:]([^ ]+)") ? RegExp.$1 : null == i ? 0 : i
}

function _(t) {
  var e = Math.floor(t / 3600),
    i = Math.floor((t - 3600 * e) / 60),
    n = t - 60 * i - 3600 * e;
  return (1 == e.toString().length ? "0" + e : e) + ":" + (1 == i.toString().length ? "0" + i : i) + ":" + (1 == n.toString().length ? "0" + n : n)
}

function J(t) {
  return X.apply(this, arguments)
}

function X() {
  return (X = d(t().mark((function e(i) {
    return t().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (0 == Dt) {
            t.next = 3;
            break
          }
          return q("有发送任务正在进行中"), t.abrupt("return");
        case 3:
          return t.next = 5, h.easySendData(i + "\n", !1);
        case 5:
        case "end":
          return t.stop()
      }
    }), e)
  })))).apply(this, arguments)
}

function tt(t, e) {
  var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  wx.showModal({
    title: t,
    editable: !0,
    placeholderText: e,
    success: function (t) {
      t.confirm && i(t.content)
    }
  })
}
var et, it, nt, at, ot, rt, lt, st, ct, ft, dt, ut, ht, St, Ft, gt, xt, bt, mt, wt, Nt, Tt, Ct, pt = [],
  Dt = 0;

function It(t) {
  0 == Dt ? wx.showModal({
    title: "确认是否修改充电动画",
    editable: !1,
    placeholderText: "",
    success: function (e) {
      if (e.confirm) {
        t.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
        var i = RegExp.$2;
        (pt = [])[0] = RegExp.$1, Dt = 0;
        for (var n = 0; n < i.length; n += 252) Dt++, pt[Dt] = i.slice(n, n + 252);
        pt[pt.length] = "DataEnd", Dt = 0, Gt()
      }
    }
  }) : q("有发送任务正在进行中")
}

function Gt(t) {
  h.easySendData(pt[Dt], !1), q("发送进度:" + (Dt / pt.length * 100).toFixed(2) + "%"), console.log("ID=" + Dt + "  Str=" + pt[Dt]), Dt++
}

function Bt(t, e, i, n, a, o) {
  o.moveTo(t + a, e), o.lineTo(t + i - a, e), o.arc(t + i - a, e + a, a, Math.PI / 180 * 270, 0, !1), o.lineTo(t + i, e + n - a), o.arc(t + i - a, e + n - a, a, 0, Math.PI / 180 * 90, 0, !1), o.lineTo(t + a, e + n), o.arc(t + a, e + n - a, a, Math.PI / 180 * 90, Math.PI / 180 * 180, !1), o.lineTo(t, e + a), o.arc(t + a, e + a, a, Math.PI / 180 * 180, Math.PI / 180 * 270, !1), o.stroke()
}

function vt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
  m || S || (S = 1, (it != N || st != T || t) && wx.createSelectorQuery().select("#btbt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      o = e.getContext("2d"),
      r = wx.getWindowInfo().pixelRatio;
    e.width = i * r, e.height = n * r, o.scale(r, r);
    var l = e.createImage();
    l.src = "/img/set.png", l.onload = function () {
      o.drawImage(l, 0, 0, 1, 1), o.fillStyle = T < 30 ? "rgba(250, 0, 0, 0.9)" : T < 80 ? "rgba(200, 255, 0, 0.9)" : "rgba(0, 255, 0, 0.9)", o.fillRect(.115 * i, .19 * n, .76 * i * (.01 * T), .61 * n), o.lineWidth = 6, o.strokeStyle = "#fff", Bt(.11 * i, .18 * n, .77 * i, .63 * n, 15, o), o.strokeRect(.89 * i, n / 2 - 15, 5, 27), o.fillStyle = "#fff", o.textAlign = "center", o.font = "normal bold 30px Kaiti", o.fillText(b, i / 2, n / 2 - 20), o.font = "normal bold 50px Kaiti", o.fillText(T + "%", i / 2, n / 2 + 40), o.font = "normal bold 15px Kaiti", o.fillStyle = "#666", o.fillText(a, i / 2, .95 * n), o.fillText("APP-1.08", i / 2, .12 * n)
    }
  })), (ct != y || at != A || t) && wx.createSelectorQuery().select("#nvbt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o), a.fillStyle = "#f00", a.textAlign = "left", a.font = "normal bold 30px Kaiti";
    var r = e.createImage();
    r.src = "/img/vt.png", r.onload = function () {
      a.drawImage(r, 1, 0, i, n), a.fillStyle = "#fff", a.textAlign = "center", a.font = "normal bold 30px Kaiti", a.fillText(y.toFixed(2) + "V", i / 2, 50), a.textAlign = "right", a.font = "normal bold 15px Kaiti", a.fillText(A.toFixed(2) + "V", i - 15, 80)
    }
  })), (ft != G || nt != v || t) && wx.createSelectorQuery().select("#nabt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = "/img/cu.png", r.onload = function () {
      a.drawImage(r, 1, 0, i, n), a.fillStyle = "#fff", a.textAlign = "center", a.font = "normal bold 30px Kaiti", a.fillText(G.toFixed(2) + "A", i / 2, 50), a.textAlign = "left", a.font = "normal bold 15px Kaiti", a.fillText(v.toFixed(2) + "A", 15, 80)
    }
  })), (ot != C || et != w || t) && wx.createSelectorQuery().select("#ivbt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = w ? "/img/iv.png" : "/img/iv1.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 18px Kaiti", a.fillStyle = "#fff", a.fillText(Math.trunc(C) + "V", i / 2, n - 28)
    }
  })), (lt != D || t) && wx.createSelectorQuery().select("#otbt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = "/img/ot.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 18px Kaiti", a.fillStyle = "#fff", a.fillText(Number(0 == D ? p : D).toFixed(1) + "℃", i / 2, n - 28)
    }
  })), (rt != I || t) && wx.createSelectorQuery().select("#owbt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = "/img/ow.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 18px Kaiti", a.fillStyle = "#fff", a.fillText(Math.trunc(I) + "W", i / 2, n - 28)
    }
  })), (dt != W || t) && wx.createSelectorQuery().select("#ahbt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = "/img/ah.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 18px Kaiti", a.fillStyle = "#fff", a.fillText(Number(W).toFixed(2), i / 2, n - 28)
    }
  })), (ut != M || t) && wx.createSelectorQuery().select("#whbt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = "/img/wh.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 18px Kaiti", a.fillStyle = "#fff", a.fillText(Number(M).toFixed(2), i / 2, n - 28)
    }
  })), (ht != V || t) && wx.createSelectorQuery().select("#tibt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = "/img/ti.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 18px Kaiti", a.fillStyle = "#fff", a.fillText(V, i / 2, n - 28)
    }
  })), (St != B || t) && wx.createSelectorQuery().select("#hqbt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = "/img/sb.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 18px Kaiti", a.fillStyle = "#fff", a.fillText(B + "秒", i / 2, .4 * n), a.font = "normal bold 13px Kaiti", a.fillStyle = "#00deff", a.fillText("电流缓启", i / 2 + 7, .73 * n), a.arc(.25 * i, .69 * n, .08 * i, 0, 2 * Math.PI), a.fillStyle = 0 == B ? "#888" : "#0f0", a.fill(), a.lineWidth = 1.5, a.strokeStyle = "#00deff", Bt(.15 * i, .59 * n, .7 * i, .2 * n, 10, a)
    }
  })), (Ft != E || gt != K || t) && wx.createSelectorQuery().select("#sa2bt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = "/img/sb.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 18px Kaiti", a.fillStyle = "#fff", a.fillText(Number(K).toFixed(2) + "V", i / 2, .3 * n), a.fillStyle = "#fff", a.fillText(Number(E).toFixed(2) + "A", i / 2, .5 * n), a.font = "normal bold 13px Kaiti", a.fillStyle = "#00deff", a.fillText("二段功能", i / 2 + 7, .73 * n), a.arc(.25 * i, .69 * n, .08 * i, 0, 2 * Math.PI), a.fillStyle = 0 == E ? "#888" : "#0f0", a.fill(), a.lineWidth = 1.5, a.strokeStyle = "#00deff", Bt(.15 * i, .59 * n, .7 * i, .2 * n, 10, a)
    }
  })), (xt != O || bt != P || t) && wx.createSelectorQuery().select("#sdbt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = "/img/sb.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 16px Kaiti", a.fillStyle = "#fff", a.fillText(_(P), i / 2, .4 * n), a.font = "normal bold 13px Kaiti", a.fillStyle = "#00deff", a.fillText("充满关机", i / 2 + 7, .73 * n), a.arc(.25 * i, .69 * n, .08 * i, 0, 2 * Math.PI), a.fillStyle = 0 == O ? "#888" : "#0f0", a.fill(), a.lineWidth = 1.5, a.strokeStyle = "#00deff", Bt(.15 * i, .59 * n, .7 * i, .2 * n, 10, a)
    }
  })), (mt != k || wt != R || t) && wx.createSelectorQuery().select("#ks1bt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = 1 == k ? "/img/ks2.png" : "/img/ks1.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 13px Kaiti", a.fillStyle = 1 == k ? "#fff" : "#999", a.fillText(Number(R[0]).toFixed(2) + "V", i / 2, .35 * n), a.fillText(Number(R[1]).toFixed(2) + "A", i / 2, .6 * n)
    }
  })), (mt != k || Nt != U || t) && wx.createSelectorQuery().select("#ks2bt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = 2 == k ? "/img/ks2.png" : "/img/ks1.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 13px Kaiti", a.fillStyle = 2 == k ? "#fff" : "#999", a.fillText(Number(U[0]).toFixed(2) + "V", i / 2, .35 * n), a.fillText(Number(U[1]).toFixed(2) + "A", i / 2, .6 * n)
    }
  })), et = w, (mt != k || Tt != L || t) && wx.createSelectorQuery().select("#ks3bt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = 3 == k ? "/img/ks2.png" : "/img/ks1.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 13px Kaiti", a.fillStyle = 3 == k ? "#fff" : "#999", a.fillText(Number(L[0]).toFixed(2) + "V", i / 2, .35 * n), a.fillText(Number(L[1]).toFixed(2) + "A", i / 2, .6 * n)
    }
  })), et = w, (mt != k || Ct != $ || t) && wx.createSelectorQuery().select("#ks4bt").fields({
    node: !0,
    size: !0
  }).exec((function (t) {
    var e = t[0].node,
      i = t[0].width,
      n = t[0].height,
      a = e.getContext("2d"),
      o = wx.getWindowInfo().pixelRatio;
    e.width = i * o, e.height = n * o, a.scale(o, o);
    var r = e.createImage();
    r.src = 4 == k ? "/img/ks2.png" : "/img/ks1.png", r.onload = function () {
      a.drawImage(r, 0, 0, i, n), a.fillStyle = "#f00", a.textAlign = "center", a.font = "normal bold 13px Kaiti", a.fillStyle = 4 == k ? "#fff" : "#999", a.fillText(Number($[0]).toFixed(2) + "V", i / 2, .35 * n), a.fillText(Number($[1]).toFixed(2) + "A", i / 2, .6 * n)
    }
  })), et = w, xt = O, bt = P, Ft = E, gt = K, St = B, ht = V, ut = M, dt = W, rt = I, lt = D, et = w, ot = C, nt = v, ft = G, ct = y, at = A, it = N, st = T, wt = R, Nt = U, Tt = L, Ct = $, mt = k, S = 0)
}
Page({
  data: {
    rgb: "rgb(0,154,97)",
    pick: !1,
    Cr0: "rgb(255,255,255)",
    Cr1: "rgb(0,255,0)",
    Cr2: "rgb(0,200,255)",
    Cr3: "rgb(255,255,255)",
    Cr4: "rgb(96,255,200)",
    Cr5: "rgb(255,255,255)",
    Cr6: "rgb(255,148,48)",
    Cr7: "rgb(248,12,160)",
    Cr8: "rgb(255,255,255)",
    BIMG: "",
    Panel: 1,
    CAN: 10,
    SCAN: "Huawei",
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
    this.setData({
      ShowBar: 0 != this.data.ShowBar ? 0 : -1
    })
  },
  BTOAT: function (t) {
    this.setData({
      ShowBar: 1 != this.data.ShowBar ? 1 : -1
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
  BTHELP: function (t) {
    this.setData({
      ShowBar: 22 != this.data.ShowBar ? 22 : -1
    })
  },
  uset: function (t) {
    this.setData({
      Panel: 3,
      ShowBar: 8
    })
  },
  BTSMW1: function (t) {
    tt("设置输出最大功率", "范围500-10000", (function (t) {
      return (t = parseFloat(t)) > 1e4 || t < 500 || !isFinite(t) ? void q("超出设置范围") : (J("SetSMW=" + t), void J("GetINF"))
    }))
  },
  BTNTC1: function (t) {
    J("SetCFG=NTC," + (1 == this.data.NTC ? -1 : this.data.NTC + 1)), J("GetINF")
  },
  BTCAN1: function (t) {
    wx.showModal({
      title: "确认是否切换为华为",
      editable: !1,
      success: function (t) {
        t.confirm && (J("SetCAN=1"), MSG("设置已发送,设备正在重启!"), wx.navigateBack({
          delta: 0
        }))
      }
    })
  },
  BTCAN2: function (t) {
    wx.showModal({
      title: "确认是否切换为英可瑞",
      editable: !1,
      success: function (t) {
        t.confirm && (J("SetCAN=2"), MSG("设置已发送,设备正在重启!"), wx.navigateBack({
          delta: 0
        }))
      }
    })
  },
  BTCAN4: function (t) {
    wx.showModal({
      title: "确认是否切换为中兴",
      editable: !1,
      success: function (t) {
        t.confirm && (J("SetCAN=4"), MSG("设置已发送,设备正在重启!"), wx.navigateBack({
          delta: 0
        }))
      }
    })
  },
  BTCAN8: function (t) {
    wx.showModal({
      title: "确认是否切换为英飞源",
      editable: !1,
      success: function (t) {
        t.confirm && (J("SetCAN=8"), MSG("设置已发送,设备正在重启!"), wx.navigateBack({
          delta: 0
        }))
      }
    })
  },
  BTCAN16: function (t) {
    wx.showModal({
      title: "确认是否切换为EPS6020",
      editable: !1,
      success: function (t) {
        t.confirm && (J("SetCAN=16"), MSG("设置已发送,设备正在重启!"), wx.navigateBack({
          delta: 0
        }))
      }
    })
  },
  BTLEDK2: function (t) {
    tt("设置关机屏幕亮度", "范围0-255", (function (t) {
      return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=LEDK0," + t), void J("GetINF"))
    }))
  },
  BTLEDK1: function (t) {
    tt("设置开机屏幕亮度", "范围0-255", (function (t) {
      return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=LEDK1," + t), void J("GetINF"))
    }))
  },
  BTLEDKS1: function (t) {
    tt("设置息屏时间", "范围0-255(秒)", (function (t) {
      return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=Sleep," + t), void J("GetINF"))
    }))
  },
  BTLEDKS2: function (t) {
    tt("设置息屏屏幕亮度", "范围0-255", (function (t) {
      return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=LEDK2," + t), void J("GetINF"))
    }))
  },
  BTStart1: function (t) {
    tt("设置初始页面时间", "范围3-15(秒)", (function (t) {
      return (t = parseFloat(t)) > 15 || t < 3 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=WTi," + t), void J("GetINF"))
    }))
  },
  BTStart2: function (t) {
    J("SetCFG=WTs," + (1 - this.data.WTs)), J("GetINF")
  },
  BTGIF1: function (t) {
    J("SetCFG=GIF," + (1 - this.data.GIF)), J("GetINF")
  },
  BT_GIF1: function (t) {
    It(GIF1)
  },
  BT_GIF2: function (t) {
    It(GIF2)
  },
  BT_GIF3: function (t) {
    It(GIF3)
  },
  BT_GIF4: function (t) {
    It(GIF4)
  },
  BT_GIF5: function (t) {
    It(GIF5)
  },
  pickColor: function (t) {
    "顶部标题" == this.data.title ? this.setData({
      Cr0: t.detail.color
    }) : "输出电压" == this.data.title ? this.setData({
      Cr1: t.detail.color
    }) : "输出电流" == this.data.title ? this.setData({
      Cr2: t.detail.color
    }) : "设置信息" == this.data.title ? this.setData({
      Cr3: t.detail.color
    }) : "统计信息" == this.data.title ? this.setData({
      Cr4: t.detail.color
    }) : "LOGO显示" == this.data.title ? this.setData({
      Cr5: t.detail.color
    }) : "功率显示" == this.data.title ? this.setData({
      Cr6: t.detail.color
    }) : "温度显示" == this.data.title ? this.setData({
      Cr7: t.detail.color
    }) : "电量显示" == this.data.title && this.setData({
      Cr8: t.detail.color
    })
  },
  Cr0: function () {
    this.setData({
      pick: !0,
      title: "顶部标题",
      rgb: this.data.Cr0
    })
  },
  Cr1: function () {
    this.setData({
      rgb: this.data.Cr1,
      title: "输出电压",
      pick: !0
    })
  },
  Cr2: function () {
    this.setData({
      pick: !0,
      title: "输出电流",
      rgb: this.data.Cr2
    })
  },
  Cr3: function () {
    this.setData({
      pick: !0,
      title: "设置信息",
      rgb: this.data.Cr3
    })
  },
  Cr4: function () {
    this.setData({
      pick: !0,
      title: "统计信息",
      rgb: this.data.Cr4
    })
  },
  Cr5: function () {
    this.setData({
      pick: !0,
      title: "LOGO显示",
      rgb: this.data.Cr5
    })
  },
  Cr6: function () {
    this.setData({
      pick: !0,
      title: "功率显示",
      rgb: this.data.Cr6
    })
  },
  Cr7: function () {
    this.setData({
      pick: !0,
      title: "温度显示",
      rgb: this.data.Cr7
    })
  },
  Cr8: function () {
    this.setData({
      pick: !0,
      title: "电量显示",
      rgb: this.data.Cr8
    })
  },
  BTCr1: function (t) {
    J("SetCFG=P0,00" + Q(this.data.Cr0) + "0000 f01c"), J("SetCFG=P1,01" + Q(this.data.Cr1) + "0020 9F26"), J("SetCFG=P2,02" + Q(this.data.Cr2) + "0047 9F26"), J("SetCFG=P3,03" + Q(this.data.Cr3) + "006e 9F26"), J("SetCFG=P4,04" + Q(this.data.Cr4) + "0096 9F3e"), J("SetCFG=P5,05" + Q(this.data.Cr5) + "A320 4d4d"), J("SetCFG=P6,06" + Q(this.data.Cr6) + "50d6 4f1A"), J("SetCFG=P7,07" + Q(this.data.Cr7) + "00d6 4f1A"), J("SetUI=08" + Q(this.data.Cr8) + "A377 4d68")
  },
  BTEN1: function (t) {
    J("SetCFG=EN," + (1 - this.data.EN)), J("GetINF")
  },
  BTBLE1: function (t) {
    tt("设置蓝牙名称", "", (function (t) {
      return "" == t ? void q("名字不能为空") : (h.easySendData("SetCFG=SSID," + function (t) {
        for (var e = 0, i = "CAN-", n = 0; n < t.length; n++)
          if (i += t[n], t[n].match(/[\u4e00-\u9fa5]/g) ? e += 3 : e++, e >= 24) return i;
        return i
      }(t) + "\n", !0), void J("GetINF"))
    }))
  },
  BTBLE2: function (t) {
    tt("设置蓝牙密码", "", (function (t) {
      return "" == t ? void q("密码不能为空") : (J("SetCFG=UPWD," + t), J("GetINF"), void Y(o, ""))
    }))
  },
  BTKEY1: function (t) {
    J("SetKEY=" + (1 - this.data.KEY)), J("GetINF")
  },
  BTKEY2: function (t) {
    J("SetCFG=KRC," + (1 - this.data.KRC)), J("GetINF")
  },
  BTDDT1: function (t) {
    J("SetCFG=DDT," + (this.data.DDT >= 3 ? 0 : this.data.DDT + 1)), J("GetINF")
  },
  BTUP1: function (t) {
    F ? this.BTUP6() : this.data.CAN >= this.data.UPDate || wx.showModal({
      title: "确认是否开始固件升级",
      editable: !1,
      content: "",
      success: function (t) {
        if (t.confirm) return J("UPDate=http://bin.bemfa.com/b/243BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin"), void q("已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP6: function (t) {
    x || this.data.CAN >= 5.25 || wx.showModal({
      title: "确认是否开始固件升级",
      editable: !1,
      content: "升级到新版本不再支持专业版且会清除所有设置,升级后不再能退回到当前版本,所有功能已迁入炫酷版,已支持中英双语.",
      success: function (t) {
        if (t.confirm) return J("UPDate=http://bin.bemfa.com/b/3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=NewUI.bin"), void q("已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUP2: function (t) {
    wx.setClipboardData({
      data: "设备ID:" + o
    })
  },
  BTUP0: function (t) {
    wx.showModal({
      title: "确认是否开始固件回退",
      editable: !1,
      success: function (t) {
        if (t.confirm) return J("UPDate=http://bin.bemfa.com/b/233BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin"), void q("已进入升级状态,请观察屏幕显示.")
      }
    })
  },
  BTUFS: function (t) {
    tt("设置温度加速值", "范围3-15", (function (t) {
      return (t = parseFloat(t)) > 15 || t < 3 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=UFS," + t), void J("GetINF"))
    }))
  },
  BTAFS: function (t) {
    tt("设置电流加速值", "范围0.1-2.0", (function (t) {
      return (t = parseFloat(t)) > 2 || t < .1 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=AFS," + t), void J("GetINF"))
    }))
  },
  BTLFS: function (t) {
    tt("设置初始风速值", "范围30-100", (function (t) {
      return (t = parseFloat(t)) > 100 || t < 30 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=LFS," + t), void J("GetINF"))
    }))
  },
  BTTMC: function (t) {
    tt("设置超温限制温度", "范围50-90", (function (t) {
      return (t = parseFloat(t)) > 90 || t < 50 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=UMT," + t), void J("GetINF"))
    }))
  },
  BTTMC1: function (t) {
    tt("设置超温退出温度", "范围40-90", (function (t) {
      return (t = parseFloat(t)) > 90 || t < 40 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=OMT," + t), void J("GetINF"))
    }))
  },
  BTTMW: function (t) {
    tt("设置超温限制功率", "范围500-4000", (function (t) {
      return (t = parseFloat(t)) > 4e3 || t < 500 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=TMW," + t), void J("GetINF"))
    }))
  },
  BTOAF1: function (t) {
    tt("设置输出电流补偿系数", "范围0.1-5.0", (function (t) {
      return (t = parseFloat(t)) > 5 || t < .1 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=OAF," + t), void J("GetINF"))
    }))
  },
  BTOVF1: function (t) {
    tt("设置输出电压补偿系数", "范围0.1-5.0", (function (t) {
      return (t = parseFloat(t)) > 5 || t < .1 || !isFinite(t) ? void q("超出设置范围") : (J("SetCFG=OVF," + t), void J("GetINF"))
    }))
  },
  BTOVT0: function (t) {
    y < 10 ? q("当前电压小于10V 不能进行校正") : (J("ResetOVD"), J("GetINF"), tt("输入实际测量出的输出电压", "", (function (t) {
      if ((t = parseFloat(t)) > 1e3 || t < .1 || !isFinite(t)) q("超出设置范围");
      else {
        var e = Number(t / y).toFixed(6),
          i = Number(t / A).toFixed(6);
        J("SetOVD=" + i + "," + e), a.includes("Increase") ? J("SetSVF=" + (20 * i).toFixed(2) + "," + (100 * i).toFixed(2)) : a.includes("Huawei") ? J("SetSVF=" + (41 * i).toFixed(2) + "," + (58.5 * i).toFixed(2)) : a.includes("ZTE") ? J("SetSVF=" + (41 * i).toFixed(2) + "," + (59 * i).toFixed(2)) : a.includes("EPS") ? J("SetSVF=" + (44 * i).toFixed(2) + "," + (61 * i).toFixed(2)) : a.includes("INFY"), J("GetINF")
      }
    })))
  },
  BTOVT1: function (t) {
    tt("显示电压补偿", "当前补偿值:" + this.data.OVT, (function (t) {
      (t = parseFloat(t)) > 5 || t < .1 || !isFinite(t) ? q("超出设置范围") : (J("SetCFG=OVT," + t), J("GetINF"))
    }))
  },
  BTOVD1: function (t) {
    tt("设置电压补偿", "当前补偿值:" + this.data.OVD, (function (t) {
      (t = parseFloat(t)) > 5 || t < .1 || !isFinite(t) ? q("超出设置范围") : (J("SetCFG=OVD," + t), J("GetINF"))
    }))
  },
  BTOVS: function (t) {
    tt("设置电压范围", "当前范围:" + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (J("SetSVF=" + RegExp.$1 + "," + RegExp.$2), J("GetINF")) : q("输入格式错误!")
    }))
  },
  BTOST0: function (t) {
    y < 10 ? q("当前电压小于10V 不能进行校正") : (J("ResetO2D"), J("GetINF"), tt("输入实际测量出的输出电压", "", (function (t) {
      if ((t = parseFloat(t)) > 1e3 || t < .1 || !isFinite(t)) q("超出设置范围");
      else {
        var e = Number(t / y).toFixed(6),
          i = Number(t / A).toFixed(6);
        J("SetO2D=" + i + "," + e), J("SetS2F=" + (41 * i).toFixed(2) + "," + (58.5 * i).toFixed(2)), J("GetINF")
      }
    })))
  },
  BTOAT0: function (t) {
    G < 5 ? q("电流校正时输出电流必须大于5A且处于恒流状态") : (J("ResetOAD"), J("GetINF"), tt("输入实际测量出的输出电流", "", (function (t) {
      if ((t = parseFloat(t)) > 100 || t < .1 || !isFinite(t)) q("超出设置范围");
      else {
        var e = Number(t / G).toFixed(4);
        J("SetOAD=" + Number(t / v).toFixed(4) + "," + e), J("GetINF")
      }
    })))
  },
  BTOAT1: function (t) {
    tt("显示电流补偿", "当前补偿值:" + this.data.OAT, (function (t) {
      (t = parseFloat(t)) > 5 || t < .1 || !isFinite(t) ? q("超出设置范围") : (J("SetCFG=OAT," + t), J("GetINF"))
    }))
  },
  BTOAD1: function (t) {
    tt("设置电流补偿", "当前补偿值:" + this.data.OAD, (function (t) {
      (t = parseFloat(t)) > 5 || t < .1 || !isFinite(t) ? q("超出设置范围") : (J("SetCFG=OAD," + t), J("GetINF"))
    }))
  },
  BTOAS: function (t) {
    tt("设置流范围", "当前范围:" + this.data.LSA + "-" + this.data.HSA, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (J("SetCFG=LSA," + RegExp.$1 + ",0"), J("SetCFG=HSA," + RegExp.$2), J("GetINF")) : q("输入格式错误!")
    }))
  },
  BTGPWD: function (t) {
    tt("修改系统设置密码", "", (function (t) {
      "" != (t = t.trim()) ? (J("SetGPWD=" + t), J("GetINF")) : q("输入格式错误!")
    }))
  },
  BTRST: function (t) {
    wx.showModal({
      title: "确认是否重置设置",
      editable: !1,
      success: function (t) {
        t.confirm && (J("Reset"), MSG("重置已发送,设备正在重启!"), wx.navigateBack({
          delta: 0
        }))
      }
    })
  },
  BTBC: function (t) {
    this.setData({
      Panel: 1
    }), vt(1)
  },
  pwrbt: function (t) {
    J("SetPWR=" + (1 - w)), J("GetINF")
  },
  owbt: function (t) {
    tt("设置输出功率限制", "范围300-" + this.data.SMW + "W", (function (t) {
      return (t = parseFloat(t)) > i.data.SMW || t < 300 || !isFinite(t) ? void q("超出设置范围") : (J("SetUMW=" + t), void J("GetINF"))
    }))
  },
  tibt: function (t) {
    tt("设置预约时间", "范围0-1200分钟", (function (t) {
      return (t = parseFloat(t)) > 1200 || t < 0 || !isFinite(t) ? void q("超出设置范围") : (J("SetYS=" + t), void J("GetINF"))
    }))
  },
  ks1bt: function (t) {
    var e = Number(R[0]),
      i = Number(R[1]);
    e > r || e < l ? tt("设置输出电压", "范围" + l + "-" + r + "V", (function (t) {
      return (t = parseFloat(t)) > r || t < l || !isFinite(t) ? void q("超出设置范围") : (k = 1, vt(), J("SetKS=" + t + "," + (i > H || i < z ? 15 : i) + ",1"), void J("GetINF"))
    })) : (k = 1, vt(), J("SetKS=" + e + "," + i + ",1"), J("GetINF"))
  },
  ks2bt: function (t) {
    var e = Number(U[0]),
      i = Number(U[1]);
    e > r || e < l ? tt("设置输出电压", "范围" + l + "-" + r + "V", (function (t) {
      return (t = parseFloat(t)) > r || t < l || !isFinite(t) ? void q("超出设置范围") : (k = 2, vt(), J("SetKS=" + t + "," + (i > H || i < z ? 15 : i) + ",2"), void J("GetINF"))
    })) : (k = 2, vt(), J("SetKS=" + e + "," + i + ",2"), J("GetINF"))
  },
  ks3bt: function (t) {
    var e = Number(L[0]),
      i = Number(L[1]);
    e > r || e < l ? tt("设置输出电压", "范围" + l + "-" + r + "V", (function (t) {
      return (t = parseFloat(t)) > r || t < l || !isFinite(t) ? void q("超出设置范围") : (k = 4, vt(), J("SetKS=" + t + "," + (i > H || i < z ? 15 : i) + ",3"), void J("GetINF"))
    })) : (k = 3, vt(), J("SetKS=" + e + "," + i + ",3"), J("GetINF"))
  },
  ks4bt: function (t) {
    var e = Number($[0]),
      i = Number($[1]);
    e > r || e < l ? tt("设置输出电压", "范围" + l + "-" + r + "V", (function (t) {
      return (t = parseFloat(t)) > r || t < l || !isFinite(t) ? void q("超出设置范围") : (k = 4, vt(), J("SetKS=" + t + "," + (i > H || i < z ? 15 : i) + ",4"), void J("GetINF"))
    })) : (k = 4, vt(), J("SetKS=" + e + "," + i + ",4"), J("GetINF"))
  },
  hqbt2: function (t) {
    s = t.touches[0]
  },
  hqbt1: function (t) {
    s = t.touches[0]
  },
  hqbt0: function (t) {
    s.y < 0 || s.y > 120 || s.x < 0 || s.x > 120 || (s.y > 70 ? (J("SetHQ=" + (0 == B ? 10 : 0)), J("GetINF")) : tt("设置缓启时间", "范围0-20秒", (function (t) {
      (t = parseFloat(t)) >= 0 && t <= 20 && isFinite(t) ? (J("SetHQ=" + t), J("GetINF")) : q("输入错误")
    })))
  },
  nvbt: function (t) {
    tt("设置输出电压", "范围" + l + "-" + r + "V", (function (t) {
      if (J("CheckGPWD=" + t), !t.startsWith("FFCF")) return (t = parseFloat(t)) > r || t < l || !isFinite(t) ? void q("超出设置范围") : (J("SetVA=" + t + "," + v), void J("GetINF"));
      J(t.substr(2, 4) + t.substr(6)), J("FF"), String(t.substr(4)).toLowerCase() == (Number(o) + 283548741).toString(16).substring(2, 8) && i.BTUP6()
    }))
  },
  nabt: function (t) {
    tt("设置输出电流", "范围" + z + "-" + H + "A", (function (t) {
      return (t = parseFloat(t)) > H || t < z || !isFinite(t) ? void q("超出设置范围") : (J("SetVA=" + A + "," + t), void J("GetINF"))
    }))
  },
  sa2bt2: function (t) {
    c = t.touches[0]
  },
  sa2bt1: function (t) {
    c = t.touches[0]
  },
  sa2bt0: function (t) {
    c.y < 0 || c.y > 120 || c.x < 0 || c.x > 120 || (c.y > 70 ? (J("SetVA2=" + (A - 3) + "," + (0 == E ? 10 : 0)), J("GetINF")) : c.y > 40 ? tt("设置二段电流", "范围" + z + "-" + H + "A", (function (t) {
      return (t = parseFloat(t)) > H || t < z || !isFinite(t) ? void q("超出设置范围") : (J("SetVA2=" + K + "," + t), void J("GetINF"))
    })) : c.y > 0 && tt("设置二段电压", "范围" + l + "-" + r + "V", (function (t) {
      return (t = parseFloat(t)) > r || t < l || !isFinite(t) ? void q("超出设置范围") : (J("SetVA2=" + t + "," + E), void J("GetINF"))
    })))
  },
  sdbt2: function (t) {
    f = t.touches[0]
  },
  sdbt1: function (t) {
    f = t.touches[0]
  },
  sdbt0: function (t) {
    f.y < 0 || f.y > 120 || f.x < 0 || f.x > 120 || (f.y > 70 ? (J("SetUSD=" + (0 == O ? 30 : 0)), J("GetINF")) : tt("设置延时时间(分钟)", "电流小于0.5A时倒计时", (function (t) {
      (t = parseFloat(t)) >= 0 && t <= 600 && isFinite(t) ? (J("SetUSD=" + t), J("GetINF")) : q("输入错误")
    })))
  },
  onLoad: function (t) {
    F = 1 == t.GM ? 1 : Z("GM"), g = 0, (i = this).setData({
      UPDate: "5.24",
      APP: "1.08"
    }), x = 0;
    var s = (0, u.GetGIF)(1);
    s.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var c = RegExp.$2;
    (s = (0, u.GetGIF)(2)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var f = RegExp.$2;
    (s = (0, u.GetGIF)(3)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var d = RegExp.$2;
    (s = (0, u.GetGIF)(4)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var S = RegExp.$2;
    (s = (0, u.GetGIF)(5)).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var m = RegExp.$2;
    i.setData({
      GIF1: "data:image/gif;base64," + c,
      GIF2: "data:image/gif;base64," + f,
      GIF3: "data:image/gif;base64," + d,
      GIF4: "data:image/gif;base64," + S,
      GIF5: "data:image/gif;base64," + m,
      ADD: x
    }), h.onBLEConnectionStateChange((function () {
      wx.navigateBack({
        delta: 0
      })
    })), h.onBLECharacteristicValueChange((function (t, s) {
      t.trim().split("\n").forEach((function (t) {
        if (console.log("Msg:" + t), t.match(/Receive Data End/)) Dt = 0, pt = [], q("发送完成!");
        else if (t.startsWith("Receive")) Gt();
        else if (t.startsWith("CAN") && 0 == g) {
          g = 1, n = j(t, "TAG", "Cxjdwx"), a = j(t, "CAN"), o = j(t, "CHIP"), vt(1), "Cxjdwx" == n && (n = "未激活"), a.match(/([^-]+)-([\d\.]+)/), i.setData({
            CAN: RegExp.$2,
            SCAN: RegExp.$1,
            ID: o,
            ACT: n
          });
          var s = Z(o);
          F && (s = (Number(o) + 19880914).toString(16).substring(4, 8)), J("CheckUPWD=" + s)
        } else if (t.startsWith("Admin Password Check Passed")) i.setData({
          Panel: 2
        });
        else if (t.startsWith("User Password Check Failed!")) wx.showModal({
          title: "输入蓝牙密码",
          editable: !0,
          showCancel: !1,
          placeholderText: "设备ID:" + o,
          success: function (t) {
            t.confirm && (Y(o, t.content), J("CheckUPWD=" + t.content))
          }
        });
        else if (t.startsWith("User Password Check Passed!")) {
          if (("Cxjdwx" == n || "未激活" == n) && !F) {
            var c = new Date;
            J("SetTAG=" + c.getFullYear() + "-" + (c.getMonth() + 1) + "-" + c.getDate())
          }
          J("GetINF")
        } else if (t.startsWith("Mode")) {
          N = j(t, "Mode", ""), "0" == j(t, "OL") ? b = "CAN通讯异常" : "SP" == N ? b = "充电器已关机" : "WT" == N ? b = "等待接入电池" : "A" == N ? b = "正在充电中" : "B" == N ? b = "第二段充电中" : "T" == N ? b = "预约等待中" : "C" == N ? b = "充电完成" : "S" == N && (b = "充电完成(已关机)"), I = Number(j(t, "OW")), Number(j(t, "IW")), P = j(t, "SDT"), y = Number(j(t, "OV")), G = Number(j(t, "OA")), W = j(t, "AH"), M = j(t, "WH"), T = Math.trunc(j(t, "SOC", "100")), C = Number(j(t, "IV", "0")), p = Number(j(t, "IT")), D = Number(j(t, "OT")), V = j(t, "Ti", ""), i.setData({
            NFS: Number(j(t, "NFS", "1"))
          }), vt()
        } else if (t.startsWith("OV=")) y = Number(j(t, "OV")), G = Number(j(t, "OA")), I = Number(j(t, "OW")), vt();
        else if (t.startsWith("USV=")) k = Number(j(t, "KSV", "1")), B = Number(j(t, "HQ", "0")), r = Number(j(t, "HSV", "100")), l = Number(j(t, "LSV", "20")), z = Number(j(t, "LSA", "1")), H = Number(j(t, "HSA", "35")), v = Number(j(t, "USA", G)), A = Number(j(t, "USV", y)), K = Number(j(t, "SV2", y)), E = Number(j(t, "SA2", "0")), O = Number(j(t, "SD", "0")), w = Number(j(t, "PON", "0")), i.setData({
          OVT: Number(j(t, "OVT", "1")),
          OVD: Number(j(t, "OVD", "1")),
          OAT: Number(j(t, "OAT", "1")),
          OAD: Number(j(t, "OAD", "1")),
          UFS: Number(j(t, "UFS", "1")),
          UMT: Number(j(t, "UMT", "1")),
          TMW: Number(j(t, "TMW", "1")),
          KEY: Number(j(t, "KON", "1")),
          NTC: Number(j(t, "NTC", "-1")),
          SMW: Number(j(t, "SMW", "0")),
          EN: Number(j(t, "EN", "0")),
          LSA: z,
          HSA: H,
          LSV: l,
          HSV: r
        });
        else if (t.startsWith("KS1=")) {
          var f;
          R = j(t, "KS1", "58.8,15").replace("V", ",").split(","), U = j(t, "KS2", "67.2,15").replace("V", ",").split(","), L = j(t, "KS3", "71.4,15").replace("V", ",").split(","), $ = j(t, "KS4", "84,15").replace("V", ",").split(","), i.setData((f = {
            L2V: Number(j(t, "L2V", "1")),
            H2V: Number(j(t, "H2V", "35")),
            CKUD: Number(j(t, "CKUD", "0")),
            CKA2: Number(j(t, "CKA2", "0")),
            KRC: Number(j(t, "KRC", "0")),
            DDT: Number(j(t, "DDT", "1")),
            GIF: Number(j(t, "GIF", "0")),
            O2D: Number(j(t, "O2D", "1")),
            SWV: Number(j(t, "SWV", "0")),
            AFS: Number(j(t, "AFS", "0")),
            LFS: Number(j(t, "LFS", "0")),
            OMT: Number(j(t, "OMT", "0"))
          }, e(f, "KRC", Number(j(t, "KRC", "1"))), e(f, "LEDK0", Number(j(t, "LED0", "0"))), e(f, "LEDK1", Number(j(t, "LED1", "0"))), e(f, "LEDK2", Number(j(t, "LED2", "0"))), e(f, "Sleep", Number(j(t, "SLP", "0"))), e(f, "StartTi", Number(j(t, "STi", "0"))), e(f, "WTs", Number(j(t, "WTs", "0"))), e(f, "UBLE", j(t, "UBLE", "")), e(f, "UPWD", j(t, "UPWD", "")), f)), vt()
        }
      }))
    }))
  },
  onReady: function () {},
  onShow: function () {
    m = 0, vt(1)
  },
  onHide: function () {
    m = 1
  },
  onUnload: function () {
    h.onBLEConnectionStateChange((function () {})), h.closeBLEConnection()
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
});