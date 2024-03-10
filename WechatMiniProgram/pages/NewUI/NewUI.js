var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/defineProperty");
require("../../@babel/runtime/helpers/Arrayincludes");
var i,
  n,
  a,
  o,
  r,
  l,
  s,
  c,
  f,
  d = require("../../@babel/runtime/helpers/asyncToGenerator"),
  u = require("../../445F65219E166AAF22390D2641262D70.js"),
  h = require("../../056882B19E166AAF630EEAB6C1362D70.js"),
  S = 0,
  F = 0,
  g = 0,
  x = "设备连接成功",
  m = 1,
  b = 1,
  w = "WT",
  N = 0,
  T = 220,
  C = 0,
  p = 35.21,
  I = 3156,
  D = 15,
  G = 1,
  B = 30.5,
  v = 84,
  A = 83.14,
  y = 23.45,
  V = 16.15,
  W = "00:02:30",
  E = 10.01,
  M = 72.25,
  K = 1,
  O = 60,
  P = 2,
  k = ["54.6", "15.00"],
  R = ["64.8", "15.00"],
  L = ["72.4", "15.00"],
  U = ["84.0", "15.00"],
  $ = 1,
  Q = 100;
function z(t) {
  return (
    t.match(/rgb\((\d+),(\d+),(\d+)\)/),
    (
      ((RegExp.$1 >> 3) << 11) +
      ((RegExp.$2 >> 2) << 5) +
      (RegExp.$3 >> 3)
    ).toString(16)
  );
}
function H(t) {
  return wx.getStorageSync(t);
}
function Y(t, e) {
  wx.setStorageSync(t, e);
}
function Z(t) {
  wx.showToast({ title: t, icon: "none", duration: 2e3 });
}
function q(t, e, i) {
  return t.match(e + "[=:]([^ ]+)") ? RegExp.$1 : null == i ? 0 : i;
}
function j(t) {
  var e = Math.floor(t / 3600),
    i = Math.floor((t - 3600 * e) / 60),
    n = t - 60 * i - 3600 * e;
  return (
    (1 == e.toString().length ? "0" + e : e) +
    ":" +
    (1 == i.toString().length ? "0" + i : i) +
    ":" +
    (1 == n.toString().length ? "0" + n : n)
  );
}
function _(t) {
  return J.apply(this, arguments);
}
function J() {
  return (J = d(
    t().mark(function e(i) {
      return t().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              if (0 == pt) {
                t.next = 3;
                break;
              }
              return Z("有发送任务正在进行中"), t.abrupt("return");
            case 3:
              return (t.next = 5), h.easySendData(i + "\n", !1);
            case 5:
            case "end":
              return t.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function X(t, e) {
  var i =
    arguments.length > 2 && void 0 !== arguments[2]
      ? arguments[2]
      : function () {};
  wx.showModal({
    title: t,
    editable: !0,
    placeholderText: e,
    success: function (t) {
      t.confirm && i(t.content);
    },
  });
}
var tt,
  et,
  it,
  nt,
  at,
  ot,
  rt,
  lt,
  st,
  ct,
  ft,
  dt,
  ut,
  ht,
  St,
  Ft,
  gt,
  xt,
  mt,
  bt,
  wt,
  Nt,
  Tt,
  Ct = [],
  pt = 0;
function It(t) {
  0 == pt
    ? wx.showModal({
        title: "确认是否修改充电动画",
        editable: !1,
        placeholderText: "",
        success: function (e) {
          if (e.confirm) {
            t.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
            var i = RegExp.$2;
            ((Ct = [])[0] = RegExp.$1), (pt = 0);
            for (var n = 0; n < i.length; n += 252)
              pt++, (Ct[pt] = i.slice(n, n + 252));
            (Ct[Ct.length] = "DataEnd"), (pt = 0), Dt();
          }
        },
      })
    : Z("有发送任务正在进行中");
}
function Dt(t) {
  h.easySendData(Ct[pt], !1),
    Z("发送进度:" + ((pt / Ct.length) * 100).toFixed(2) + "%"),
    console.log("ID=" + pt + "  Str=" + Ct[pt]),
    pt++;
}
function Gt(t, e, i, n, a, o) {
  o.moveTo(t + a, e),
    o.lineTo(t + i - a, e),
    o.arc(t + i - a, e + a, a, (Math.PI / 180) * 270, 0, !1),
    o.lineTo(t + i, e + n - a),
    o.arc(t + i - a, e + n - a, a, 0, (Math.PI / 180) * 90, 0, !1),
    o.lineTo(t + a, e + n),
    o.arc(t + a, e + n - a, a, (Math.PI / 180) * 90, (Math.PI / 180) * 180, !1),
    o.lineTo(t, e + a),
    o.arc(t + a, e + a, a, (Math.PI / 180) * 180, (Math.PI / 180) * 270, !1),
    o.stroke();
}
function Bt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
  m ||
    S ||
    ((S = 1),
    (et != w || lt != N || t) &&
      wx
        .createSelectorQuery()
        .select("#btbt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            o = e.getContext("2d"),
            r = wx.getWindowInfo().pixelRatio;
          (e.width = i * r), (e.height = n * r), o.scale(r, r);
          var l = e.createImage();
          (l.src = "/img/bt.png"),
            (l.onload = function () {
              o.drawImage(l, 0, 0, i, n),
                (o.fillStyle =
                  N < 30
                    ? "rgba(250, 0, 0, 0.9)"
                    : N < 80
                    ? "rgba(200, 255, 0, 0.9)"
                    : "rgba(0, 255, 0, 0.9)"),
                o.fillRect(
                  0.115 * i,
                  0.19 * n,
                  0.76 * i * (0.01 * N),
                  0.61 * n
                ),
                (o.lineWidth = 6),
                (o.strokeStyle = "#fff"),
                Gt(0.11 * i, 0.18 * n, 0.77 * i, 0.63 * n, 15, o),
                o.strokeRect(0.89 * i, n / 2 - 15, 5, 27),
                (o.fillStyle = "#fff"),
                (o.textAlign = "center"),
                (o.font = "normal bold 30px Kaiti"),
                o.fillText(x, i / 2, n / 2 - 20),
                (o.font = "normal bold 50px Kaiti"),
                o.fillText(N + "%", i / 2, n / 2 + 40),
                (o.font = "normal bold 15px Kaiti"),
                (o.fillStyle = "#666"),
                o.fillText(a, i / 2, 0.95 * n),
                o.fillText("APP-1.08", i / 2, 0.12 * n);
            });
        }),
    (st != A || nt != v || t) &&
      wx
        .createSelectorQuery()
        .select("#nvbt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o),
            (e.height = n * o),
            a.scale(o, o),
            (a.fillStyle = "#f00"),
            (a.textAlign = "left"),
            (a.font = "normal bold 30px Kaiti");
          var r = e.createImage();
          (r.src = "/img/vt.png"),
            (r.onload = function () {
              a.drawImage(r, 1, 0, i, n),
                (a.fillStyle = "#fff"),
                (a.textAlign = "center"),
                (a.font = "normal bold 30px Kaiti"),
                a.fillText(A.toFixed(2) + "V", i / 2, 50),
                (a.textAlign = "right"),
                (a.font = "normal bold 15px Kaiti"),
                a.fillText(v.toFixed(2) + "V", i - 15, 80);
            });
        }),
    (ct != D || it != B || t) &&
      wx
        .createSelectorQuery()
        .select("#nabt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = "/img/cu.png"),
            (r.onload = function () {
              a.drawImage(r, 1, 0, i, n),
                (a.fillStyle = "#fff"),
                (a.textAlign = "center"),
                (a.font = "normal bold 30px Kaiti"),
                a.fillText(D.toFixed(2) + "A", i / 2, 50),
                (a.textAlign = "left"),
                (a.font = "normal bold 15px Kaiti"),
                a.fillText(B.toFixed(2) + "A", 15, 80);
            });
        }),
    (at != T || tt != b || t) &&
      wx
        .createSelectorQuery()
        .select("#ivbt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = b ? "/img/iv.png" : "/img/iv1.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 18px Kaiti"),
                (a.fillStyle = "#fff"),
                a.fillText(Math.trunc(T) + "V", i / 2, n - 28);
            });
        }),
    (rt != p || t) &&
      wx
        .createSelectorQuery()
        .select("#otbt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = "/img/ot.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 18px Kaiti"),
                (a.fillStyle = "#fff"),
                a.fillText(
                  Number(0 == p ? C : p).toFixed(1) + "℃",
                  i / 2,
                  n - 28
                );
            });
        }),
    (ot != I || t) &&
      wx
        .createSelectorQuery()
        .select("#owbt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = "/img/ow.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 18px Kaiti"),
                (a.fillStyle = "#fff"),
                a.fillText(Math.trunc(I) + "W", i / 2, n - 28);
            });
        }),
    (ft != y || t) &&
      wx
        .createSelectorQuery()
        .select("#ahbt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = "/img/ah.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 18px Kaiti"),
                (a.fillStyle = "#fff"),
                a.fillText(Number(y).toFixed(2), i / 2, n - 28);
            });
        }),
    (dt != V || t) &&
      wx
        .createSelectorQuery()
        .select("#whbt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = "/img/wh.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 18px Kaiti"),
                (a.fillStyle = "#fff"),
                a.fillText(Number(V).toFixed(2), i / 2, n - 28);
            });
        }),
    (ut != W || t) &&
      wx
        .createSelectorQuery()
        .select("#tibt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = "/img/ti.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 18px Kaiti"),
                (a.fillStyle = "#fff"),
                a.fillText(W, i / 2, n - 28);
            });
        }),
    (ht != G || t) &&
      wx
        .createSelectorQuery()
        .select("#hqbt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = "/img/sb.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 18px Kaiti"),
                (a.fillStyle = "#fff"),
                a.fillText(G + "秒", i / 2, 0.4 * n),
                (a.font = "normal bold 13px Kaiti"),
                (a.fillStyle = "#00deff"),
                a.fillText("电流缓启", i / 2 + 7, 0.73 * n),
                a.arc(0.25 * i, 0.69 * n, 0.08 * i, 0, 2 * Math.PI),
                (a.fillStyle = 0 == G ? "#888" : "#0f0"),
                a.fill(),
                (a.lineWidth = 1.5),
                (a.strokeStyle = "#00deff"),
                Gt(0.15 * i, 0.59 * n, 0.7 * i, 0.2 * n, 10, a);
            });
        }),
    (St != E || Ft != M || t) &&
      wx
        .createSelectorQuery()
        .select("#sa2bt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = "/img/sb.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 18px Kaiti"),
                (a.fillStyle = "#fff"),
                a.fillText(Number(M).toFixed(2) + "V", i / 2, 0.3 * n),
                (a.fillStyle = "#fff"),
                a.fillText(Number(E).toFixed(2) + "A", i / 2, 0.5 * n),
                (a.font = "normal bold 13px Kaiti"),
                (a.fillStyle = "#00deff"),
                a.fillText("二段功能", i / 2 + 7, 0.73 * n),
                a.arc(0.25 * i, 0.69 * n, 0.08 * i, 0, 2 * Math.PI),
                (a.fillStyle = 0 == E ? "#888" : "#0f0"),
                a.fill(),
                (a.lineWidth = 1.5),
                (a.strokeStyle = "#00deff"),
                Gt(0.15 * i, 0.59 * n, 0.7 * i, 0.2 * n, 10, a);
            });
        }),
    (gt != K || xt != O || t) &&
      wx
        .createSelectorQuery()
        .select("#sdbt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = "/img/sb.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 16px Kaiti"),
                (a.fillStyle = "#fff"),
                a.fillText(j(O), i / 2, 0.4 * n),
                (a.font = "normal bold 13px Kaiti"),
                (a.fillStyle = "#00deff"),
                a.fillText("充满关机", i / 2 + 7, 0.73 * n),
                a.arc(0.25 * i, 0.69 * n, 0.08 * i, 0, 2 * Math.PI),
                (a.fillStyle = 0 == K ? "#888" : "#0f0"),
                a.fill(),
                (a.lineWidth = 1.5),
                (a.strokeStyle = "#00deff"),
                Gt(0.15 * i, 0.59 * n, 0.7 * i, 0.2 * n, 10, a);
            });
        }),
    (mt != P || bt != k || t) &&
      wx
        .createSelectorQuery()
        .select("#ks1bt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = 1 == P ? "/img/ks2.png" : "/img/ks1.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 13px Kaiti"),
                (a.fillStyle = 1 == P ? "#fff" : "#999"),
                a.fillText(Number(k[0]).toFixed(2) + "V", i / 2, 0.35 * n),
                a.fillText(Number(k[1]).toFixed(2) + "A", i / 2, 0.6 * n);
            });
        }),
    (mt != P || wt != R || t) &&
      wx
        .createSelectorQuery()
        .select("#ks2bt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = 2 == P ? "/img/ks2.png" : "/img/ks1.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 13px Kaiti"),
                (a.fillStyle = 2 == P ? "#fff" : "#999"),
                a.fillText(Number(R[0]).toFixed(2) + "V", i / 2, 0.35 * n),
                a.fillText(Number(R[1]).toFixed(2) + "A", i / 2, 0.6 * n);
            });
        }),
    (tt = b),
    (mt != P || Nt != L || t) &&
      wx
        .createSelectorQuery()
        .select("#ks3bt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = 3 == P ? "/img/ks2.png" : "/img/ks1.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 13px Kaiti"),
                (a.fillStyle = 3 == P ? "#fff" : "#999"),
                a.fillText(Number(L[0]).toFixed(2) + "V", i / 2, 0.35 * n),
                a.fillText(Number(L[1]).toFixed(2) + "A", i / 2, 0.6 * n);
            });
        }),
    (tt = b),
    (mt != P || Tt != U || t) &&
      wx
        .createSelectorQuery()
        .select("#ks4bt")
        .fields({ node: !0, size: !0 })
        .exec(function (t) {
          var e = t[0].node,
            i = t[0].width,
            n = t[0].height,
            a = e.getContext("2d"),
            o = wx.getWindowInfo().pixelRatio;
          (e.width = i * o), (e.height = n * o), a.scale(o, o);
          var r = e.createImage();
          (r.src = 4 == P ? "/img/ks2.png" : "/img/ks1.png"),
            (r.onload = function () {
              a.drawImage(r, 0, 0, i, n),
                (a.fillStyle = "#f00"),
                (a.textAlign = "center"),
                (a.font = "normal bold 13px Kaiti"),
                (a.fillStyle = 4 == P ? "#fff" : "#999"),
                a.fillText(Number(U[0]).toFixed(2) + "V", i / 2, 0.35 * n),
                a.fillText(Number(U[1]).toFixed(2) + "A", i / 2, 0.6 * n);
            });
        }),
    (tt = b),
    (gt = K),
    (xt = O),
    (St = E),
    (Ft = M),
    (ht = G),
    (ut = W),
    (dt = V),
    (ft = y),
    (ot = I),
    (rt = p),
    (tt = b),
    (at = T),
    (it = B),
    (ct = D),
    (st = A),
    (nt = v),
    (et = w),
    (lt = N),
    (bt = k),
    (wt = R),
    (Nt = L),
    (Tt = U),
    (mt = P),
    (S = 0));
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
  uset: function (t) {
    this.setData({ Panel: 3, ShowBar: 8 });
  },
  BTSMW1: function (t) {
    X("设置输出最大功率", "范围500-10000", function (t) {
      return (t = parseFloat(t)) > 1e4 || t < 500 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetSMW=" + t), void _("GetINF"));
    });
  },
  BTNTC1: function (t) {
    _("SetCFG=NTC," + (1 == this.data.NTC ? -1 : this.data.NTC + 1)),
      _("GetINF");
  },
  BTCAN1: function (t) {
    wx.showModal({
      title: "确认是否切换为华为",
      editable: !1,
      success: function (t) {
        t.confirm &&
          (_("SetCAN=1"),
          MSG("设置已发送,设备正在重启!"),
          wx.navigateBack({ delta: 0 }));
      },
    });
  },
  BTCAN2: function (t) {
    wx.showModal({
      title: "确认是否切换为英可瑞",
      editable: !1,
      success: function (t) {
        t.confirm &&
          (_("SetCAN=2"),
          MSG("设置已发送,设备正在重启!"),
          wx.navigateBack({ delta: 0 }));
      },
    });
  },
  BTCAN4: function (t) {
    wx.showModal({
      title: "确认是否切换为中兴",
      editable: !1,
      success: function (t) {
        t.confirm &&
          (_("SetCAN=4"),
          MSG("设置已发送,设备正在重启!"),
          wx.navigateBack({ delta: 0 }));
      },
    });
  },
  BTCAN8: function (t) {
    wx.showModal({
      title: "确认是否切换为英飞源",
      editable: !1,
      success: function (t) {
        t.confirm &&
          (_("SetCAN=8"),
          MSG("设置已发送,设备正在重启!"),
          wx.navigateBack({ delta: 0 }));
      },
    });
  },
  BTCAN16: function (t) {
    wx.showModal({
      title: "确认是否切换为EPS6020",
      editable: !1,
      success: function (t) {
        t.confirm &&
          (_("SetCAN=16"),
          MSG("设置已发送,设备正在重启!"),
          wx.navigateBack({ delta: 0 }));
      },
    });
  },
  BTLEDK2: function (t) {
    X("设置关机屏幕亮度", "范围0-255", function (t) {
      return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=LEDK0," + t), void _("GetINF"));
    });
  },
  BTLEDK1: function (t) {
    X("设置开机屏幕亮度", "范围0-255", function (t) {
      return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=LEDK1," + t), void _("GetINF"));
    });
  },
  BTLEDKS1: function (t) {
    X("设置息屏时间", "范围0-255(秒)", function (t) {
      return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=Sleep," + t), void _("GetINF"));
    });
  },
  BTLEDKS2: function (t) {
    X("设置息屏屏幕亮度", "范围0-255", function (t) {
      return (t = parseFloat(t)) > 255 || t < 0 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=LEDK2," + t), void _("GetINF"));
    });
  },
  BTStart1: function (t) {
    X("设置初始页面时间", "范围3-15(秒)", function (t) {
      return (t = parseFloat(t)) > 15 || t < 3 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=WTi," + t), void _("GetINF"));
    });
  },
  BTStart2: function (t) {
    _("SetCFG=WTs," + (1 - this.data.WTs)), _("GetINF");
  },
  BTGIF1: function (t) {
    _("SetCFG=GIF," + (1 - this.data.GIF)), _("GetINF");
  },
  BT_GIF1: function (t) {
    It(GIF1);
  },
  BT_GIF2: function (t) {
    It(GIF2);
  },
  BT_GIF3: function (t) {
    It(GIF3);
  },
  BT_GIF4: function (t) {
    It(GIF4);
  },
  BT_GIF5: function (t) {
    It(GIF5);
  },
  pickColor: function (t) {
    "顶部标题" == this.data.title
      ? this.setData({ Cr0: t.detail.color })
      : "输出电压" == this.data.title
      ? this.setData({ Cr1: t.detail.color })
      : "输出电流" == this.data.title
      ? this.setData({ Cr2: t.detail.color })
      : "设置信息" == this.data.title
      ? this.setData({ Cr3: t.detail.color })
      : "统计信息" == this.data.title
      ? this.setData({ Cr4: t.detail.color })
      : "LOGO显示" == this.data.title
      ? this.setData({ Cr5: t.detail.color })
      : "功率显示" == this.data.title
      ? this.setData({ Cr6: t.detail.color })
      : "温度显示" == this.data.title
      ? this.setData({ Cr7: t.detail.color })
      : "电量显示" == this.data.title && this.setData({ Cr8: t.detail.color });
  },
  Cr0: function () {
    this.setData({ pick: !0, title: "顶部标题", rgb: this.data.Cr0 });
  },
  Cr1: function () {
    this.setData({ rgb: this.data.Cr1, title: "输出电压", pick: !0 });
  },
  Cr2: function () {
    this.setData({ pick: !0, title: "输出电流", rgb: this.data.Cr2 });
  },
  Cr3: function () {
    this.setData({ pick: !0, title: "设置信息", rgb: this.data.Cr3 });
  },
  Cr4: function () {
    this.setData({ pick: !0, title: "统计信息", rgb: this.data.Cr4 });
  },
  Cr5: function () {
    this.setData({ pick: !0, title: "LOGO显示", rgb: this.data.Cr5 });
  },
  Cr6: function () {
    this.setData({ pick: !0, title: "功率显示", rgb: this.data.Cr6 });
  },
  Cr7: function () {
    this.setData({ pick: !0, title: "温度显示", rgb: this.data.Cr7 });
  },
  Cr8: function () {
    this.setData({ pick: !0, title: "电量显示", rgb: this.data.Cr8 });
  },
  BTCr1: function (t) {
    _("SetCFG=P0,00" + z(this.data.Cr0) + "0000 f01c"),
      _("SetCFG=P1,01" + z(this.data.Cr1) + "0020 9F26"),
      _("SetCFG=P2,02" + z(this.data.Cr2) + "0047 9F26"),
      _("SetCFG=P3,03" + z(this.data.Cr3) + "006e 9F26"),
      _("SetCFG=P4,04" + z(this.data.Cr4) + "0096 9F3e"),
      _("SetCFG=P5,05" + z(this.data.Cr5) + "A320 4d4d"),
      _("SetCFG=P6,06" + z(this.data.Cr6) + "50d6 4f1A"),
      _("SetCFG=P7,07" + z(this.data.Cr7) + "00d6 4f1A"),
      _("SetUI=08" + z(this.data.Cr8) + "A377 4d68");
  },
  BTEN1: function (t) {
    _("SetCFG=EN," + (1 - this.data.EN)), _("GetINF");
  },
  BTBLE1: function (t) {
    X("设置蓝牙名称", "", function (t) {
      return "" == t
        ? void Z("名字不能为空")
        : (h.easySendData(
            "SetCFG=SSID," +
              (function (t) {
                for (var e = 0, i = "CAN-", n = 0; n < t.length; n++)
                  if (
                    ((i += t[n]),
                    t[n].match(/[\u4e00-\u9fa5]/g) ? (e += 3) : e++,
                    e >= 24)
                  )
                    return i;
                return i;
              })(t) +
              "\n",
            !0
          ),
          void _("GetINF"));
    });
  },
  BTBLE2: function (t) {
    X("设置蓝牙密码", "", function (t) {
      return "" == t
        ? void Z("密码不能为空")
        : (_("SetCFG=UPWD," + t), _("GetINF"), void Y(o, ""));
    });
  },
  BTKEY1: function (t) {
    _("SetKEY=" + (1 - this.data.KEY)), _("GetINF");
  },
  BTKEY2: function (t) {
    _("SetCFG=KRC," + (1 - this.data.KRC)), _("GetINF");
  },
  BTDDT1: function (t) {
    _("SetCFG=DDT," + (this.data.DDT >= 3 ? 0 : this.data.DDT + 1)),
      _("GetINF");
  },
  BTUP1: function (t) {
    this.data.CAN >= this.data.UPDate ||
      wx.showModal({
        title: "确认是否开始固件升级",
        editable: !1,
        content: "新版本不再支持专业版,所有功能已迁入炫酷版,已支持中英双语.",
        success: function (t) {
          if (t.confirm)
            return (
              _(
                "UPDate=http://bin.bemfa.com/b/3BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin"
              ),
              void Z("已进入升级状态,请观察屏幕显示.")
            );
        },
      });
  },
  BTUP2: function (t) {
    wx.setClipboardData({ data: "设备ID:" + o });
  },
  BTUP0: function (t) {
    wx.showModal({
      title: "确认是否开始固件回退",
      editable: !1,
      success: function (t) {
        if (t.confirm)
          return (
            _(
              "UPDate=http://bin.bemfa.com/b/233BcOGM0ZDJiN2ZkMGU3NDk0ZWEwMzkwNGU2ZDBmYWNhZDc=CANControl.bin"
            ),
            void Z("已进入升级状态,请观察屏幕显示.")
          );
      },
    });
  },
  BTUFS: function (t) {
    X("设置温度加速值", "范围3-15", function (t) {
      return (t = parseFloat(t)) > 15 || t < 3 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=UFS," + t), void _("GetINF"));
    });
  },
  BTAFS: function (t) {
    X("设置电流加速值", "范围0.1-2.0", function (t) {
      return (t = parseFloat(t)) > 2 || t < 0.1 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=AFS," + t), void _("GetINF"));
    });
  },
  BTLFS: function (t) {
    X("设置初始风速值", "范围30-100", function (t) {
      return (t = parseFloat(t)) > 100 || t < 30 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=LFS," + t), void _("GetINF"));
    });
  },
  BTTMC: function (t) {
    X("设置超温限制温度", "范围50-90", function (t) {
      return (t = parseFloat(t)) > 90 || t < 50 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=UMT," + t), void _("GetINF"));
    });
  },
  BTTMC1: function (t) {
    X("设置超温退出温度", "范围40-90", function (t) {
      return (t = parseFloat(t)) > 90 || t < 40 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=OMT," + t), void _("GetINF"));
    });
  },
  BTTMW: function (t) {
    X("设置超温限制功率", "范围500-4000", function (t) {
      return (t = parseFloat(t)) > 4e3 || t < 500 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=TMW," + t), void _("GetINF"));
    });
  },
  BTOAF1: function (t) {
    X("设置输出电流补偿系数", "范围0.1-5.0", function (t) {
      return (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=OAF," + t), void _("GetINF"));
    });
  },
  BTOVF1: function (t) {
    X("设置输出电压补偿系数", "范围0.1-5.0", function (t) {
      return (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetCFG=OVF," + t), void _("GetINF"));
    });
  },
  BTOVT0: function (t) {
    A < 10
      ? Z("当前电压小于10V 不能进行校正")
      : (_("ResetOVD"),
        _("GetINF"),
        X("输入实际测量出的输出电压", "", function (t) {
          if ((t = parseFloat(t)) > 1e3 || t < 0.1 || !isFinite(t))
            Z("超出设置范围");
          else {
            var e = Number(t / A).toFixed(6),
              i = Number(t / v).toFixed(6);
            _("SetOVD=" + i + "," + e),
              a.includes("Increase")
                ? _(
                    "SetSVF=" + (20 * i).toFixed(2) + "," + (100 * i).toFixed(2)
                  )
                : a.includes("Huawei")
                ? _(
                    "SetSVF=" +
                      (41 * i).toFixed(2) +
                      "," +
                      (58.5 * i).toFixed(2)
                  )
                : a.includes("ZTE")
                ? _("SetSVF=" + (41 * i).toFixed(2) + "," + (59 * i).toFixed(2))
                : a.includes("EPS")
                ? _("SetSVF=" + (44 * i).toFixed(2) + "," + (61 * i).toFixed(2))
                : a.includes("INFY"),
              _("GetINF");
          }
        }));
  },
  BTOVT1: function (t) {
    X("显示电压补偿", "当前补偿值:" + this.data.OVT, function (t) {
      (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
        ? Z("超出设置范围")
        : (_("SetCFG=OVT," + t), _("GetINF"));
    });
  },
  BTOVD1: function (t) {
    X("设置电压补偿", "当前补偿值:" + this.data.OVD, function (t) {
      (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
        ? Z("超出设置范围")
        : (_("SetCFG=OVD," + t), _("GetINF"));
    });
  },
  BTOVS: function (t) {
    X(
      "设置电压范围",
      "当前范围:" + this.data.LSV + "-" + this.data.HSV,
      function (t) {
        (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/)
          ? (_("SetSVF=" + RegExp.$1 + "," + RegExp.$2), _("GetINF"))
          : Z("输入格式错误!");
      }
    );
  },
  BTOST0: function (t) {
    A < 10
      ? Z("当前电压小于10V 不能进行校正")
      : (_("ResetO2D"),
        _("GetINF"),
        X("输入实际测量出的输出电压", "", function (t) {
          if ((t = parseFloat(t)) > 1e3 || t < 0.1 || !isFinite(t))
            Z("超出设置范围");
          else {
            var e = Number(t / A).toFixed(6),
              i = Number(t / v).toFixed(6);
            _("SetO2D=" + i + "," + e),
              _("SetS2F=" + (41 * i).toFixed(2) + "," + (58.5 * i).toFixed(2)),
              _("GetINF");
          }
        }));
  },
  BTOAT0: function (t) {
    D < 5
      ? Z("电流校正时输出电流必须大于5A且处于恒流状态")
      : (_("ResetOAD"),
        _("GetINF"),
        X("输入实际测量出的输出电流", "", function (t) {
          if ((t = parseFloat(t)) > 100 || t < 0.1 || !isFinite(t))
            Z("超出设置范围");
          else {
            var e = Number(t / D).toFixed(4);
            _("SetOAD=" + Number(t / B).toFixed(4) + "," + e), _("GetINF");
          }
        }));
  },
  BTOAT1: function (t) {
    X("显示电流补偿", "当前补偿值:" + this.data.OAT, function (t) {
      (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
        ? Z("超出设置范围")
        : (_("SetCFG=OAT," + t), _("GetINF"));
    });
  },
  BTOAD1: function (t) {
    X("设置电流补偿", "当前补偿值:" + this.data.OAD, function (t) {
      (t = parseFloat(t)) > 5 || t < 0.1 || !isFinite(t)
        ? Z("超出设置范围")
        : (_("SetCFG=OAD," + t), _("GetINF"));
    });
  },
  BTOAS: function (t) {
    X(
      "设置流范围",
      "当前范围:" + this.data.LSA + "-" + this.data.HSA,
      function (t) {
        (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/)
          ? (_("SetCFG=LSA," + RegExp.$1 + ",0"),
            _("SetCFG=HSA," + RegExp.$2),
            _("GetINF"))
          : Z("输入格式错误!");
      }
    );
  },
  BTGPWD: function (t) {
    X("修改系统设置密码", "", function (t) {
      "" != (t = t.trim())
        ? (_("SetGPWD=" + t), _("GetINF"))
        : Z("输入格式错误!");
    });
  },
  BTRST: function (t) {
    wx.showModal({
      title: "确认是否重置设置",
      editable: !1,
      success: function (t) {
        t.confirm &&
          (_("Reset"),
          MSG("重置已发送,设备正在重启!"),
          wx.navigateBack({ delta: 0 }));
      },
    });
  },
  BTBC: function (t) {
    this.setData({ Panel: 1 }), Bt(1);
  },
  pwrbt: function (t) {
    _("SetPWR=" + (1 - b)), _("GetINF");
  },
  owbt: function (t) {
    X("设置输出功率限制", "范围300-" + this.data.SMW + "W", function (t) {
      return (t = parseFloat(t)) > i.data.SMW || t < 300 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetUMW=" + t), void _("GetINF"));
    });
  },
  tibt: function (t) {
    X("设置预约时间", "范围0-1200分钟", function (t) {
      return (t = parseFloat(t)) > 1200 || t < 0 || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetYS=" + t), void _("GetINF"));
    });
  },
  ks1bt: function (t) {
    var e = Number(k[0]),
      i = Number(k[1]);
    e > r || e < l
      ? X("设置输出电压", "范围" + l + "-" + r + "V", function (t) {
          return (t = parseFloat(t)) > r || t < l || !isFinite(t)
            ? void Z("超出设置范围")
            : ((P = 1),
              Bt(),
              _("SetKS=" + t + "," + (i > Q || i < $ ? 15 : i) + ",1"),
              void _("GetINF"));
        })
      : ((P = 1), Bt(), _("SetKS=" + e + "," + i + ",1"), _("GetINF"));
  },
  ks2bt: function (t) {
    var e = Number(R[0]),
      i = Number(R[1]);
    e > r || e < l
      ? X("设置输出电压", "范围" + l + "-" + r + "V", function (t) {
          return (t = parseFloat(t)) > r || t < l || !isFinite(t)
            ? void Z("超出设置范围")
            : ((P = 2),
              Bt(),
              _("SetKS=" + t + "," + (i > Q || i < $ ? 15 : i) + ",2"),
              void _("GetINF"));
        })
      : ((P = 2), Bt(), _("SetKS=" + e + "," + i + ",2"), _("GetINF"));
  },
  ks3bt: function (t) {
    var e = Number(L[0]),
      i = Number(L[1]);
    e > r || e < l
      ? X("设置输出电压", "范围" + l + "-" + r + "V", function (t) {
          return (t = parseFloat(t)) > r || t < l || !isFinite(t)
            ? void Z("超出设置范围")
            : ((P = 4),
              Bt(),
              _("SetKS=" + t + "," + (i > Q || i < $ ? 15 : i) + ",3"),
              void _("GetINF"));
        })
      : ((P = 3), Bt(), _("SetKS=" + e + "," + i + ",3"), _("GetINF"));
  },
  ks4bt: function (t) {
    var e = Number(U[0]),
      i = Number(U[1]);
    e > r || e < l
      ? X("设置输出电压", "范围" + l + "-" + r + "V", function (t) {
          return (t = parseFloat(t)) > r || t < l || !isFinite(t)
            ? void Z("超出设置范围")
            : ((P = 4),
              Bt(),
              _("SetKS=" + t + "," + (i > Q || i < $ ? 15 : i) + ",4"),
              void _("GetINF"));
        })
      : ((P = 4), Bt(), _("SetKS=" + e + "," + i + ",4"), _("GetINF"));
  },
  hqbt2: function (t) {
    s = t.touches[0];
  },
  hqbt1: function (t) {
    s = t.touches[0];
  },
  hqbt0: function (t) {
    s.y < 0 ||
      s.y > 120 ||
      s.x < 0 ||
      s.x > 120 ||
      (s.y > 70
        ? (_("SetHQ=" + (0 == G ? 10 : 0)), _("GetINF"))
        : X("设置缓启时间", "范围0-20秒", function (t) {
            (t = parseFloat(t)) >= 0 && t <= 20 && isFinite(t)
              ? (_("SetHQ=" + t), _("GetINF"))
              : Z("输入错误");
          }));
  },
  nvbt: function (t) {
    X("设置输出电压", "范围" + l + "-" + r + "V", function (t) {
      return (
        _("CheckGPWD=" + t),
        (t = parseFloat(t)) > r || t < l || !isFinite(t)
          ? void Z("超出设置范围")
          : (_("SetVA=" + t + "," + B), void _("GetINF"))
      );
    });
  },
  nabt: function (t) {
    X("设置输出电流", "范围" + $ + "-" + Q + "A", function (t) {
      return (t = parseFloat(t)) > Q || t < $ || !isFinite(t)
        ? void Z("超出设置范围")
        : (_("SetVA=" + v + "," + t), void _("GetINF"));
    });
  },
  sa2bt2: function (t) {
    c = t.touches[0];
  },
  sa2bt1: function (t) {
    c = t.touches[0];
  },
  sa2bt0: function (t) {
    c.y < 0 ||
      c.y > 120 ||
      c.x < 0 ||
      c.x > 120 ||
      (c.y > 70
        ? (_("SetVA2=" + (v - 3) + "," + (0 == E ? 10 : 0)), _("GetINF"))
        : c.y > 40
        ? X("设置二段电流", "范围" + $ + "-" + Q + "A", function (t) {
            return (t = parseFloat(t)) > Q || t < $ || !isFinite(t)
              ? void Z("超出设置范围")
              : (_("SetVA2=" + M + "," + t), void _("GetINF"));
          })
        : c.y > 0 &&
          X("设置二段电压", "范围" + l + "-" + r + "V", function (t) {
            return (t = parseFloat(t)) > r || t < l || !isFinite(t)
              ? void Z("超出设置范围")
              : (_("SetVA2=" + t + "," + E), void _("GetINF"));
          }));
  },
  sdbt2: function (t) {
    f = t.touches[0];
  },
  sdbt1: function (t) {
    f = t.touches[0];
  },
  sdbt0: function (t) {
    f.y < 0 ||
      f.y > 120 ||
      f.x < 0 ||
      f.x > 120 ||
      (f.y > 70
        ? (_("SetUSD=" + (0 == K ? 30 : 0)), _("GetINF"))
        : X("设置延时时间(分钟)", "电流小于0.5A时倒计时", function (t) {
            (t = parseFloat(t)) >= 0 && t <= 600 && isFinite(t)
              ? (_("SetUSD=" + t), _("GetINF"))
              : Z("输入错误");
          }));
  },
  onLoad: function (t) {
    (F = 1 == t.GM ? 1 : H("GM")),
      (g = 0),
      (i = this).setData({ UPDate: "5.25", APP: "1.08" });
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
    }),
      h.onBLEConnectionStateChange(function () {
        wx.navigateBack({ delta: 0 });
      }),
      h.onBLECharacteristicValueChange(function (t, s) {
        t.trim()
          .split("\n")
          .forEach(function (t) {
            if ((console.log("Msg:" + t), t.match(/Receive Data End/)))
              (pt = 0), (Ct = []), Z("发送完成!");
            else if (t.startsWith("Receive")) Dt();
            else if (t.startsWith("CAN") && 0 == g) {
              (g = 1),
                (n = q(t, "TAG", "Cxjdwx")),
                (a = q(t, "CAN")),
                (o = q(t, "CHIP")),
                Bt(1),
                "Cxjdwx" == n && (n = "未激活"),
                a.match(/([^-]+)-([\d\.]+)/),
                i.setData({ CAN: RegExp.$2, SCAN: RegExp.$1, ID: o, ACT: n });
              var s = H(o);
              F && (s = (Number(o) + 19880914).toString(16).substring(4, 8)),
                _("CheckUPWD=" + s);
            } else if (t.startsWith("Admin Password Check Passed"))
              i.setData({ Panel: 2 });
            else if (t.startsWith("User Password Check Failed!"))
              wx.showModal({
                title: "输入蓝牙密码",
                editable: !0,
                showCancel: !1,
                placeholderText: "设备ID:" + o,
                success: function (t) {
                  t.confirm && (Y(o, t.content), _("CheckUPWD=" + t.content));
                },
              });
            else if (t.startsWith("User Password Check Passed!")) {
              if (("Cxjdwx" == n || "未激活" == n) && !F) {
                var c = new Date();
                _(
                  "SetTAG=" +
                    c.getFullYear() +
                    "-" +
                    (c.getMonth() + 1) +
                    "-" +
                    c.getDate()
                );
              }
              _("GetINF");
            } else if (t.startsWith("Mode")) {
              (w = q(t, "Mode", "")),
                "0" == q(t, "OL")
                  ? (x = "CAN通讯异常")
                  : "SP" == w
                  ? (x = "充电器已关机")
                  : "WT" == w
                  ? (x = "等待接入电池")
                  : "A" == w
                  ? (x = "正在充电中")
                  : "B" == w
                  ? (x = "第二段充电中")
                  : "T" == w
                  ? (x = "预约等待中")
                  : "C" == w
                  ? (x = "充电完成")
                  : "S" == w && (x = "充电完成(已关机)"),
                (I = Number(q(t, "OW"))),
                Number(q(t, "IW")),
                (O = q(t, "SDT")),
                (A = Number(q(t, "OV"))),
                (D = Number(q(t, "OA"))),
                (y = q(t, "AH")),
                (V = q(t, "WH")),
                (N = Math.trunc(q(t, "SOC", "100"))),
                (T = Number(q(t, "IV", "0"))),
                (C = Number(q(t, "IT"))),
                (p = Number(q(t, "OT"))),
                (W = q(t, "Ti", "")),
                i.setData({ NFS: Number(q(t, "NFS", "1")) }),
                Bt();
            } else
              t.startsWith("OV=")
                ? ((A = Number(q(t, "OV"))),
                  (D = Number(q(t, "OA"))),
                  (I = Number(q(t, "OW"))),
                  Bt())
                : t.startsWith("USV=")
                ? ((P = Number(q(t, "KSV", "1"))),
                  (G = Number(q(t, "HQ", "0"))),
                  (r = Number(q(t, "HSV", "100"))),
                  (l = Number(q(t, "LSV", "20"))),
                  ($ = Number(q(t, "LSA", "1"))),
                  (Q = Number(q(t, "HSA", "35"))),
                  (B = Number(q(t, "USA", D))),
                  (v = Number(q(t, "USV", A))),
                  (M = Number(q(t, "SV2", A))),
                  (E = Number(q(t, "SA2", "0"))),
                  (K = Number(q(t, "SD", "0"))),
                  (b = Number(q(t, "PON", "0"))),
                  i.setData({
                    OVT: Number(q(t, "OVT", "1")),
                    OVD: Number(q(t, "OVD", "1")),
                    OAT: Number(q(t, "OAT", "1")),
                    OAD: Number(q(t, "OAD", "1")),
                    UFS: Number(q(t, "UFS", "1")),
                    UMT: Number(q(t, "UMT", "1")),
                    TMW: Number(q(t, "TMW", "1")),
                    KEY: Number(q(t, "KON", "1")),
                    NTC: Number(q(t, "NTC", "-1")),
                    SMW: Number(q(t, "SMW", "0")),
                    EN: Number(q(t, "EN", "0")),
                    LSA: $,
                    HSA: Q,
                    LSV: l,
                    HSV: r,
                  }))
                : t.startsWith("KS1=") &&
                  ((k = q(t, "KS1", "58.8,15").replace("V", ",").split(",")),
                  (R = q(t, "KS2", "67.2,15").replace("V", ",").split(",")),
                  (L = q(t, "KS3", "71.4,15").replace("V", ",").split(",")),
                  (U = q(t, "KS4", "84,15").replace("V", ",").split(",")),
                  i.setData(
                    e(
                      e(
                        e(
                          e(
                            e(
                              e(
                                e(
                                  e(
                                    e(
                                      {
                                        L2V: Number(q(t, "L2V", "1")),
                                        H2V: Number(q(t, "H2V", "35")),
                                        CKUD: Number(q(t, "CKUD", "0")),
                                        CKA2: Number(q(t, "CKA2", "0")),
                                        KRC: Number(q(t, "KRC", "0")),
                                        DDT: Number(q(t, "DDT", "1")),
                                        GIF: Number(q(t, "GIF", "0")),
                                        O2D: Number(q(t, "O2D", "1")),
                                        SWV: Number(q(t, "SWV", "0")),
                                        AFS: Number(q(t, "AFS", "0")),
                                        LFS: Number(q(t, "LFS", "0")),
                                        OMT: Number(q(t, "OMT", "0")),
                                      },
                                      "KRC",
                                      Number(q(t, "KRC", "1"))
                                    ),
                                    "LEDK0",
                                    Number(q(t, "LED0", "0"))
                                  ),
                                  "LEDK1",
                                  Number(q(t, "LED1", "0"))
                                ),
                                "LEDK2",
                                Number(q(t, "LED2", "0"))
                              ),
                              "Sleep",
                              Number(q(t, "SLP", "0"))
                            ),
                            "StartTi",
                            Number(q(t, "STi", "0"))
                          ),
                          "WTs",
                          Number(q(t, "WTs", "0"))
                        ),
                        "UBLE",
                        q(t, "UBLE", "")
                      ),
                      "UPWD",
                      q(t, "UPWD", "")
                    )
                  ),
                  Bt());
          });
      });
  },
  onReady: function () {},
  onShow: function () {
    (m = 0), Bt(1);
  },
  onHide: function () {
    m = 1;
  },
  onUnload: function () {
    h.onBLEConnectionStateChange(function () {}), h.closeBLEConnection();
  },
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
});
