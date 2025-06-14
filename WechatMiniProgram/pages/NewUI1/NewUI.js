var t, e, n, a, i, o, r, s, c, u, f, F, h, l, C, S, d, g, B, T, p, D, m, G, v, A, w, E, U, b, I, O, x, N, M, W, V, P, R, L, K, y, k, H, Y, $, j, z, Z, _, q, Q, J, X, tt, et, nt, at, it, ot, rt, st, ct, ut, ft, Ft, ht, lt, Ct, St, dt, gt, Bt, Tt, pt, Dt, mt, Gt, vt, At, wt, Et, Ut, bt, It, Ot, xt, Nt, Mt, Wt, Vt, Pt, Rt, Lt, Kt, yt, kt, Ht, Yt, $t, jt, zt, Zt, _t, qt = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  Qt = require("../../@babel/runtime/helpers/asyncToGenerator"),
  Jt = require("../../1D3746269E166AAF7B512E21F3E81D62.js"),
  Xt = require("../../E0B6CAE39E166AAF86D0A2E4CEE81D62.js"),
  te = 1,
  ee = 0,
  ne = 0,
  ae = 0,
  ie = 0,
  oe = 0,
  re = "设备连接成功",
  se = 0,
  ce = 0,
  ue = 0,
  fe = 30,
  Fe = 0,
  he = 0,
  le = 0,
  Ce = 0,
  Se = 0,
  de = 1,
  ge = "欢迎使用",
  Be = "1,27,30,欢迎",
  Te = "1,57,30,使用",
  pe = 0,
  De = "ff",
  me = "ff",
  Ge = "ff",
  ve = ["/img/bc1.gif", "", "", "", ""],
  Ae = 0,
  we = "80",
  Ee = 0,
  Ue = wx,
  be = "#ffffff",
  Ie = ["1", "2", "3", "4"],
  Oe = 0;

function xe() {
  return 0 == Oe && 0 == (Oe = (0, Jt.GetCFG)("RSID")) && (Oe = function () {
    for (var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", e = "", n = 0; n < 12; n++) {
      var a = Math.floor(Math.random() * t.length);
      e += t[a]
    }
    return e
  }(), (0, Jt.SetCFG)("RSID", Oe)), Oe
}

function Ne() {
  var t = new Date;
  _e("FD48" + on(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()))
}

function Me(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  Ue.showModal({
    title: t,
    editable: !0,
    placeholderText: e,
    confirmText: H ? "YES" : "确定",
    cancelText: H ? "NO" : "取消",
    success: function (t) {
      t.confirm && n(t.content)
    }
  })
}

function We(t, e, n, a) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ue.showModal({
    title: H ? e : t,
    editable: !0,
    placeholderText: (H ? "Range:" : "范围:") + n + "-" + a,
    confirmText: H ? "YES" : "确定",
    cancelText: H ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(a) || e < Number(n) || !isFinite(e)) && 2 != ie) return void(0, Jt.Toast)(H ? "Beyond the set range!" : "超出设置范围!");
        i(e)
      }
    }
  })
}

function Ve(t, e, n, a) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ue.showModal({
    title: H ? e : t,
    editable: !0,
    placeholderText: H ? a : n,
    confirmText: H ? "YES" : "确定",
    cancelText: H ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, Jt.Toast)(H ? "Input Cannot Be Empty!" : "输入不能为空!");
        i(e)
      }
    }
  })
}

function Pe(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ue.showModal({
    title: H ? e : t,
    content: H ? a : n,
    confirmText: H ? "YES" : "确定",
    cancelText: H ? "NO" : "取消",
    success: function (t) {
      t.confirm && i(t)
    }
  })
}

function Re(t, e, n, a, i, o) {
  var r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function () {};
  Ue.showModal({
    title: H ? e : t,
    content: H ? a : n,
    confirmText: H ? o : i,
    showCancel: !1,
    success: function (t) {
      r(t)
    }
  })
}
var Le = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "温度 异常", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"],
  Ke = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ye = [1, 1, 1, 1, 1, 1, 1, 1];

function ke(t) {
  for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, n = 0, a = 0; a < 12; a++)
    if (Le[a] == t) {
      Ke[a] = e, n = 1;
      break
    } if (!n && e)
    for (var i = 1; i < 11; i++)
      if (6 != i && 0 == Ke[i]) {
        Le[i] = t, Ke[i] = e;
        break
      }
}

function He() {
  var t = [Le[0].split(" "), Le[1].split(" "), Le[2].split(" "), Le[3].split(" "), Le[4].split(" "), Le[5].split(" "), Le[6].split(" "), Le[7].split(" "), Le[8].split(" "), Le[9].split(" "), Le[10].split(" "), Le[11].split(" ")];
  n.setData({
    E1S: Ke[0],
    E1A: t[0][0],
    E1B: t[0][1],
    E2S: Ke[1],
    E2A: t[1][0],
    E2B: t[1][1],
    E3S: Ke[2],
    E3A: t[2][0],
    E3B: t[2][1],
    E4S: Ke[3],
    E4A: t[3][0],
    E4B: t[3][1],
    E5S: Ke[4],
    E5A: t[4][0],
    E5B: t[4][1],
    E6S: Ke[5],
    E6A: t[5][0],
    E6B: t[5][1],
    E7S: Ke[6],
    E7A: t[6][0],
    E7B: t[6][1],
    E8S: Ke[7],
    E8A: t[7][0],
    E8B: t[7][1],
    E9S: Ke[8],
    E9A: t[8][0],
    E9B: t[8][1],
    EAS: Ke[9],
    EAA: t[9][0],
    EAB: t[9][1],
    EBS: Ke[10],
    EBA: t[10][0],
    EBB: t[10][1],
    ECS: Ke[11],
    ECA: t[11][0],
    ECB: t[11][1]
  })
}

function Ye() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  ye[0] == t && ye[1] == e && ye[2] == n && ye[3] == a && ye[4] == i && ye[5] == o && ye[6] == r || (Ke = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ye[0] = t, ye[1] = e, ye[2] = n, ye[3] = a, ye[4] = i, ye[5] = o, ye[6] = r, Le = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"], 128 & t && ke("测试 模式"), 64 & t && ke("负载 震荡"), 32 & t && ke("输出 继电器"), 16 & t && ke("放电 电路"), 8 & t && ke("继电器 电路"), 4 & t && ke("短路 锁死"), 2 & t && ke("硬件 地址"), 1 & t && ke("放电 电路"), 128 & e && ke("更换 地址"), 64 & e && ke("地址 冲突"), 32 & e && ke("均流 屏蔽"), 16 & e && ke("通讯 异常"), 8 & e && ke("电容 电压"), 4 & e && ke("输出 过压"), 2 & e && ke("输出 模式"), 1 & e && ke("插座 异常"), 128 & n && ke("母线 电压"), 64 & n && ke("母线 平衡"), 32 & n && ke("输入 停电"), 16 & n && ke("恒流 状态"), 8 & n && ke("输出 短路"), 4 & n && ke("内部 通讯"), 2 & n && ke("效率 寻优"), 1 & n && ke("均流 异常"), 128 & a && ke("PFC 故障"), 64 & a && ke("输入 过压"), 32 & a && ke("ID 重复"), 16 & a && ke("严重 均流"), 8 & a && ke("交流 缺相"), 4 & a && ke("三项 平衡"), 2 & a && ke("输入 欠压"), 1 & a && ke("顺序 启机"), 128 & i && ke("通讯 质量"), 64 & i && ke("自动 模式"), 32 & i && ke("地址 重排"), 16 & i && ke("内部 过温"), 2 & i && ke("模块 关机"), 1 & i && ke("低温 保护"), 128 & o && ke("输出 欠压"), 64 & o && ke("输出 过流"), 32 & o && ke("存储 芯片"), 16 & o && ke("风机 故障"), 8 & o && ke("模块 保护"), 4 & o && ke("模块 故障"), 2 & o && ke("超温 保护"), 1 & o && ke("过压 锁死"), He())
}

function $e() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  ye[0] == t && ye[1] == e && ye[2] == n && ye[3] == a && ye[4] == i && ye[5] == o && ye[6] == r || (Ke = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ye[0] = t, ye[1] = e, ye[2] = n, ye[3] = a, ye[4] = i, ye[5] = o, ye[6] = r, Le = ["超温 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "恒流 状态", "输出 过流", "输出 欠压", "输出 过压", "输出 过载", "模块 关机"], 128 & t && ke("输出 保险"), 64 & t && ke("内部 过温"), 32 & t && ke("输出 过流"), 16 & t && ke("输出 高关"), 8 & t && ke("输入 低关"), 4 & t && ke("输入 高关"), 2 & t && ke("过温 关机"), 1 & t && ke("风机 异常"), 128 & e && ke("PFC 过流"), 64 & e && ke("原边 过流"), 32 & e && ke("内部 通讯"), 16 & e && ke("EEP ROM"), 8 & e && ke("PFC 欠压"), 4 & e && ke("PFC 过压"), 1 & e && ke("均流 异常"), 32 & n && ke("输出 过载"), 16 & n && ke("PFC 故障"), 8 & n && ke("输出 欠压"), 4 & n && ke("输入 频率"), 2 & n && ke("输入 熔断"), 1 & n && ke("启动 异常"), 128 & a && ke("DUS4 欠压"), 64 & a && ke("BUS3 欠压"), 32 & a && ke("BUS2 欠压"), 16 & a && ke("BUS1 欠压"), 8 & a && ke("启动 电阻"), 4 & a && ke("机外 过温"), 2 & a && ke("匹配 异常"), 128 & i && ke("输入 停电"), 64 & i && ke("输入 欠压"), 32 & i && ke("输入 过压"), 16 & i && ke("BUS 平衡"), 8 & i && ke("BUS4 过压"), 4 & i && ke("BUS3 过压"), 2 & i && ke("BUS2 过压"), 1 & i && ke("BUS1 过压"), 64 & o && ke("模块 关机"), 32 & o && ke("模块 休眠"), 8 & o && ke("输入 功率"), 4 & o && ke("超温 功率"), 2 & o && ke("恒流 状态"), 1 & o && ke("输出 功率"), 128 & r && ke("启动 未接"), 32 & r && ke("插座 过温"), 16 & r && ke("输入 反接"), 8 & r && ke("机内 过温"), 4 & r && ke("输出 过流"), 2 & r && ke("输出 欠压"), 1 & r && ke("输出 过压"), He())
}

function je() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
    s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
  ye[0] == t && ye[1] == e && ye[2] == n && ye[3] == a && ye[4] == i && ye[5] == o && ye[6] == r && ye[7] == s || (Ke = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ye[0] = t, ye[1] = e, ye[2] = n, ye[3] = a, ye[4] = i, ye[5] = o, ye[6] = r, ye[7] = s, Le = ["正常 中止", "电桩 温度", "枪头 异常", "内部 过温", "充电 异常", "电桩 急停", "其他 异常", "自检 异常", "预充 异常", "电流 异常", "电压 异常", "参数 异常"], 3 & t ? ke("正常 中止") : t >> 2 & 3 ? ke("人工 中止") : t >> 4 & 3 ? ke("故障 中止") : t >> 6 & 3 && ke("车辆 中止"), 3 & e ? ke("电桩 温度") : e >> 2 & 3 ? ke("枪头 异常") : e >> 4 & 3 ? ke("内部 过温") : e >> 6 & 3 && ke("充电 异常"), 3 & n ? ke("电桩 急停") : n >> 2 & 3 ? ke("其他 异常") : n >> 4 & 3 ? ke("自检 异常") : n >> 6 & 3 && ke("预充 异常"), 3 & a ? ke("电流 异常") : a >> 2 & 3 ? ke("电压 异常") : a >> 4 & 3 && ke("参数 异常"), 3 & i && ke("BRM 超时"), 3 & o && ke("BCP 超时"), o >> 2 & 3 && ke("BRO 超时"), 3 & r && ke("BCS 超时"), r >> 2 & 3 && ke("BCL 超时"), r >> 4 & 3 && ke("BST 超时"), 3 & s && ke("BSD 超时"), s >> 2 & 3 && ke("BSM 超时"), s >> 4 & 3 && ke("其他 超时"), He())
}

function ze() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  ye[0] == t && ye[1] == e && ye[2] == n || (Ke = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ye[0] = t, ye[1] = e, ye[2] = n, Le = ["输入 过压", "输出 过压", "恒压 状态", "过热 保护", "风机 故障", "模块 关机", "输入 欠压", "输出 欠压", "恒流 状态", "过流 保护", "模块 故障", "设置 关机"], 128 & t && ke("输出 欠压"), 64 & t && ke("输出 过压"), 32 & t && ke("输入 欠压"), 16 & t && ke("输入 过压"), 8 & t && ke("风机 故障"), 4 & t && ke("恒流 状态"), 2 & t && ke("模块 故障"), 1 & t && ke("模块 关机"), 0 == t && c > 20 && ke("恒压 状态"), 4 & e && ke("设置 关机"), 2 & e && ke("过热 保护"), 1 & e && ke("过流 保护"), He())
}

function Ze() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  ye[0] == t && ye[1] == e && ye[2] == n || (Ke = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ye[0] = t, ye[1] = e, ye[2] = n, Le = ["输入 过压", "输出 过压", "功率 限制", "过热 保护", "风机 故障", "模块 关机", "输入 欠压", "输出 欠压", "恒流 状态", "过流 保护", "模块 故障", "设置 关机"], 32 & t && ke("放电 异常"), 16 & t && ke("模块 休眠"), 8 & t && ke("输入 异常"), 4 & t && ke("内部 通讯"), 1 & t && ke("输出 短路"), 128 & e && ke("通讯 异常"), 64 & e && ke("缓启 打开"), 32 & e && ke("输出 过压"), 16 & e && ke("过温 告警"), 8 & e && ke("风机 故障"), 4 & e && ke("模块 保护"), 2 & e && ke("模块 故障"), 1 & e && ke("模块 关机"), 128 & n && ke("PFC 关机"), 64 & n && ke("输入 过压"), 32 & n && ke("输入 欠压"), 16 & n && ke("三相 平衡"), 8 & n && ke("三相 缺相"), 4 & n && ke("均流 异常"), 2 & n && ke("ID 重复"), 1 & n && ke("恒流 状态"), He())
}

function _e(t) {
  return qe.apply(this, arguments)
}

function qe() {
  return (qe = Qt(qt().mark((function t(e) {
    return qt().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (1 == ae && console.log("Send", e), 0 == Je) {
            t.next = 4;
            break
          }
          return (0, Jt.Toast)(H ? "There Are Unfinished Sending Tasks" : "有发送任务未完成"), t.abrupt("return");
        case 4:
          return t.next = 6, Xt.easySendData1(e, !0);
        case 6:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var Qe = [""],
  Je = 0;

function Xe(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  0 == Je ? Ue.showModal({
    title: H ? "Confirm Whether To Send" : "确认是否发送",
    editable: !1,
    confirmText: H ? "YES" : "确定",
    cancelText: H ? "NO" : "取消",
    success: function (a) {
      if (a.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), Je = 0, (Qe = [])[0] = "F1" + (n ? RegExp.$1 : on(RegExp.$1));
        for (var i = e ? RegExp.$2 : en(RegExp.$2), o = 0; o < i.length; o += 240) Je++, Qe[Je] = "F2" + i.slice(o, o + 240);
        Qe[Qe.length] = "F3", Je = 0, tn()
      }
    }
  }) : (0, Jt.Toast)(H ? "There Are Unfinished Sending Tasks" : "有发送任务未完成")
}

function tn(t) {
  var e = Qe[Je];
  Xt.easySendData1(e, !0), (0, Jt.Toast)((H ? "Sending:" : "发送进度:") + (Je / Qe.length * 100).toFixed(2) + "%"), Je++
}

function en(t) {
  if (!t) return t;
  var e, n, a, i, o, r, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    c = 0,
    u = 0,
    f = [];
  t += "";
  do {
    e = (r = s.indexOf(t.charAt(c++)) << 18 | s.indexOf(t.charAt(c++)) << 12 | (i = s.indexOf(t.charAt(c++))) << 6 | (o = s.indexOf(t.charAt(c++)))) >> 16 & 255, n = r >> 8 & 255, a = 255 & r, f[u++] = 64 === i ? e.toString(16).padStart(2, "0") : 64 === o ? e.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0") : e.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0")
  } while (c < t.length);
  return f.join("")
}

function nn(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function an(t) {
  var e = Math.floor(t / 3600),
    n = Math.floor(t % 3600 / 60),
    a = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(n).padStart(2, "0") + ":" + String(a).padStart(2, "0")
}

function on(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var n = "", a = 0; a < t.length; a++) n += t.charCodeAt(a).toString(16).padStart(2, "0");
  return e && (n = n.padEnd(2 * e, "0")), n
}

function rn(t) {
  for (var e = "", n = 0, a = "", i = 0; i < t.length / 2; i++) {
    var o = t.substr(2 * i, 2),
      r = parseInt(o, 16);
    if (0 == r) break;
    n && r ? (a += "%" + o, (n -= 1) || (e += decodeURIComponent(a), a = "")) : r >= 224 & r <= 239 ? (a += "%" + o, n = 2) : r && (e += String.fromCharCode(r))
  }
  return e
}

function sn(t) {
  return Math.floor(100 * t).toString(16).padStart(8, "0")
}

function cn(t) {
  return Math.floor(t).toString(16).padStart(4, "0")
}

function un(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function fn(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    i = t.getFloat32(e, !0).toFixed(n);
  return a ? parseFloat(i) : i
}

function Fn(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    a = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return n ? parseFloat(a) : a
}

function hn(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}
Page({
  data: {
    nbsp: "　",
    Cr0: be,
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: be,
    Cr4: "#60ffc8",
    Cr5: be,
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: be,
    Cr10: be,
    Cr11: "#00ff00",
    Cr12: "#00c8ff",
    Cr13: "#ff9430",
    Cr14: "#60ffc8",
    Cr15: be,
    Cr16: "#f80ca0",
    Cr17: be,
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
    DET: "",
    Err: 0
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
    _e("FF01"), (2 == oe || ie) && this.setData({
      Panel: ie ? 2 : 3,
      ShowBar: ie ? 0 : te < Number("5.43") ? 4 : 25,
      LOGO: H ? "Preview" : "预览"
    })
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, Jt.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    2 == ie ? (_e("CA"), n.navigateBack({
      delta: 0
    })) : Ve("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      _e("FA75" + on(t))
    }))
  },
  BTRST: function (t) {
    Pe("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      _e("F60100"), (0, Jt.Toast)(H ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTRST1: function (t) {
    Pe("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置并重启", "Exception repair will detect and reset certain settings", (function (t) {
      _e("F60001"), (0, Jt.Toast)(H ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    Pe("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      _e("F001"), (0, Jt.Toast)(H ? "The device is restarting" : "设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    Pe("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      _e("AA01"), (0, Jt.Toast)(H ? "Data cleared to zero" : "数据已清零!"), n.navigateBack({
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
    _e("AC00"), _e("FF18")
  },
  DST2: function (t) {
    _e("AC01"), _e("FF18")
  },
  DST3: function (t) {
    _e("AC02"), _e("FF18")
  },
  DST4: function (t) {
    _e("AC03"), _e("FF18")
  },
  BTKT1: function (t) {
    _e("A4" + un(1 - j))
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), We("设置输出最大功率", "Set maximum output power", "500", "50000", (function (t) {
      _e("F84E" + sn(t)), _e("F84D" + sn(t)), _e("FF12")
    }))
  },
  BTLOGO0: function (t) {
    if ("预览" == n.data.LOGO || "Preview" == n.data.LOGO) Ue.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: !0
    }), n.SetLOGO(Be + "|" + Te, n);
    else if ("发送" == n.data.LOGO || "Send" == n.data.LOGO) {
      return Xe(s, 1), void _e("FAD2" + on(unescape(encodeURIComponent(ge))))
    }
    n.setData({
      ShowBar: 20,
      LOGO: H ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (t) {
    Ve("设置第一行LOGO", "Set the first line logo", Be, Be, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Be = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) Be = "1,27,30," + RegExp.$1, Te = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Jt.Toast)(H ? "Input format error" : "输入格式错误");
        Be = "1,27,30," + RegExp.$1
      }
      n.setData({
        LOGO1: Be,
        LOGO2: Te,
        LOGO: H ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO2: function (t) {
    Ve("设置第二行LOGO", "Set second line logo", Te, Te, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Te = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) Be = "1,27,30," + RegExp.$1, Te = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Jt.Toast)(H ? "Input format error" : "输入格式错误");
        Te = "1,57,30," + RegExp.$1
      }
      n.setData({
        LOGO1: Be,
        LOGO2: Te,
        LOGO: H ? "Preview" : "预览"
      })
    }))
  },
  BTLOGO3: function (t) {
    _e("F9C0" + un(1 - Mt)), _e("FF17")
  },
  BTLOGO4: function (t) {
    Ve("设置简约模式文字", "Set the first line logo", "最多6个汉字或者12个英文", Be, (function (t) {
      _e("FAD2" + on(t = unescape(encodeURIComponent(t)))), _e("F7")
    }))
  },
  SetLOGO: function (t, e) {
    Ue.createSelectorQuery().select("#LOGO").fields({
      node: !0,
      size: !0
    }).exec((function (n) {
      var a = n[0].node,
        i = a.getContext("2d");
      a.width = 60, a.height = 60, i.fillStyle = "#000", i.scale(1, 1), i.fillRect(0, 0, 60, 60), i.fillStyle = "#fff";
      var o = t.split("|");
      ge = "";
      for (var r = 0; r < o.length; r += 1) {
        var c = o[r].split(",");
        ge += c[3];
        var u = c[0],
          f = c[1],
          F = c[2],
          h = c[3];
        i.font = "normal " + F + "px Kaiti", i.fillText(h, u, f)
      }
      var l = [0],
        C = -1;
      s = "DataStart=LOGO{";
      for (var S = 0; S < 60; S += 1) {
        for (var d = i.getImageData(0, S, 60, 1).data, g = 0; g < 60; g += 1) {
          g % 8 == 0 && (g && (s += l[C].toString(16).padStart(2, "0")), C += 1);
          var B = .299 * d[4 * g] + .587 * d[4 * g + 1] + .114 * d[4 * g + 2];
          l[C] = l[C] >> 1, l[C] = l[C] | (B < 100 ? 0 : 128)
        }
        s += (l[C] >> 4).toString(16).padStart(2, "0")
      }
      s += "}DataEnd", Ue.hideToast(), e.setData({
        LOGO: H ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    Pe("是否切温度采集点", "Confirm whether to switch temperature collection points", "无特殊情况请勿修改此值", "Under normal circumstances, there is no need to modify this value", (function (t) {
      _e("F962" + un(1 - Et)), _e("FF16")
    }))
  },
  BTCAN1: function (t) {
    Pe("确认是否切换为华为", "Switch to Huawei", "将会清除所有设置", "All settings will be cleared", (function (t) {
      _e("FC530101"), (0, Jt.Toast)(H ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN2: function (t) {
    Pe("确认是否切换为英可瑞", "Switch to Increase", "将会清除所有设置", "All settings will be cleared", (function (t) {
      _e("FC530201"), (0, Jt.Toast)(H ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN4: function (t) {
    Pe("确认是否切换为中兴3000", "Switch to ZTE3000", "将会清除所有设置", "All settings will be cleared", (function (t) {
      _e("FC530401"), (0, Jt.Toast)(H ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN8: function (t) {
    Pe("确认是否切换为英飞源", "Switch to Infy", "将会清除所有设置", "All settings will be cleared", (function (t) {
      _e("FC530801"), (0, Jt.Toast)(H ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN16: function (t) {
    Pe("确认是否切换为EPS6020", "Switch to EPS6020", "将会清除所有设置", "All settings will be cleared", (function (t) {
      _e("FC531001"), (0, Jt.Toast)(H ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN32: function (t) {
    Pe("确认是否切换为中兴4875", "Switch to ZTE4875", "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == ie) {
        for (var e = parseInt(G, 16), a = e.toString(), i = 0, o = 0; o < a.length; o++) i += a.charCodeAt(o);
        _e("C83F" + Math.floor(Math.floor(e / 611) * i).toString(16).slice(-6)), _e("FC532001")
      } else _e("FC532001"), (0, Jt.Toast)(H ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN64: function (t) {
    Pe("确认是否切换为SER10010K", "Switch to SER10010K", "将会清除所有设置", "All settings will be cleared", (function (t) {
      _e("FC534001"), (0, Jt.Toast)(H ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN65: function (t) {
    Pe("确认是否切换为BH10M100", "Switch to BH10M100", "将会清除所有设置", "All settings will be cleared", (function (t) {
      _e("FC534101"), (0, Jt.Toast)(H ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN66: function (t) {
    Pe("确认是否切换为MC1503N5R", "Switch to MC1503N5R", "将会清除所有设置", "All settings will be cleared", (function (t) {
      _e("FC534201"), (0, Jt.Toast)(H ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTLEDK2: function (t) {
    We("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      _e("F968" + un(t)), _e("FF13")
    }))
  },
  BTLEDK1: function (t) {
    We("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      _e("F969" + un(t)), _e("FF13")
    }))
  },
  BTLEDKS1: function (t) {
    We("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      _e("F96D" + un(t)), _e("FF12")
    }))
  },
  BTLEDKS2: function (t) {
    We("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      _e("F96A" + un(t)), _e("FF13")
    }))
  },
  BTStart1: function (t) {
    We("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      _e("F96B" + un(t)), _e("FF12")
    }))
  },
  BTStart2: function (t) {
    _e("F96C" + un(1 - X)), _e("FF12")
  },
  BTGIF1: function (t) {
    _e("F96F" + un(1 - Dt)), _e("FF15")
  },
  BT_GIF1: function (t) {
    Xe((0, Jt.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    Xe((0, Jt.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    Xe((0, Jt.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    Xe((0, Jt.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    Xe((0, Jt.GetGIF)(5))
  },
  BTUI: function (t) {
    n.setData({
      CVer: te.toFixed(2),
      SCAN: o,
      ID: G,
      ACT: a
    }), _e("F9C8" + un(1 - jt)), _e("FF19")
  },
  Scr1: function (t) {
    de = 1, n.setData({
      Cr0: be,
      Cr1: "#00ff00",
      Cr2: "#00c8ff",
      Cr3: be,
      Cr4: "#60ffc8",
      Cr5: be,
      Cr6: "#ff9430",
      Cr7: "#f80ca0",
      Cr8: be,
      Cr10: be,
      Cr11: "#00ff00",
      Cr12: "#00c8ff",
      Cr13: "#ff9430",
      Cr14: "#60ffc8",
      Cr15: be,
      Cr16: "#f80ca0",
      Cr17: be,
      Crs: de
    })
  },
  Scr2: function (t) {
    de = 2, n.setData({
      Cr0: be,
      Cr1: be,
      Cr2: be,
      Cr3: be,
      Cr4: be,
      Cr5: be,
      Cr6: be,
      Cr7: be,
      Cr8: be,
      Cr10: be,
      Cr11: be,
      Cr12: be,
      Cr13: be,
      Cr14: be,
      Cr15: be,
      Cr16: be,
      Cr17: be,
      Crs: de
    })
  },
  Scr3: function (t) {
    de = 3, n.setData({
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
      Crs: de
    })
  },
  Scr4: function (t) {
    de = 0, n.setData({
      Cr0: (0, Jt.GetCFG)("Cr0", be),
      Cr1: (0, Jt.GetCFG)("Cr1", "#00ff00"),
      Cr2: (0, Jt.GetCFG)("Cr2", "#00c8ff"),
      Cr3: (0, Jt.GetCFG)("Cr3", be),
      Cr4: (0, Jt.GetCFG)("Cr4", "#60ffc8"),
      Cr5: (0, Jt.GetCFG)("Cr5", be),
      Cr6: (0, Jt.GetCFG)("Cr6", "#ff9430"),
      Cr7: (0, Jt.GetCFG)("Cr7", "#f80ca0"),
      Cr8: (0, Jt.GetCFG)("Cr8", be),
      Cr10: (0, Jt.GetCFG)("Cr10", be),
      Cr11: (0, Jt.GetCFG)("Cr11", "#00ff00"),
      Cr12: (0, Jt.GetCFG)("Cr12", "#00c8ff"),
      Cr13: (0, Jt.GetCFG)("Cr13", "#ff9430"),
      Cr14: (0, Jt.GetCFG)("Cr14", "#60ffc8"),
      Cr15: (0, Jt.GetCFG)("Cr15", be),
      Cr16: (0, Jt.GetCFG)("Cr16", "#f80ca0"),
      Cr17: (0, Jt.GetCFG)("Cr17", be),
      Crs: de
    })
  },
  BTCr1: function (t) {
    0 == n.data.UI ? (_e("F53000" + nn(this.data.Cr0) + "0000f01c"), _e("F53100" + nn(this.data.Cr1) + "00209F26"), _e("F53200" + nn(this.data.Cr2) + "00479F26"), _e("F53300" + nn(this.data.Cr3) + "006e9F27"), _e("F53400" + nn(this.data.Cr4) + "00969F3f"), _e("F53500" + nn(this.data.Cr5) + "A3204d4d"), _e("F53600" + nn(this.data.Cr6) + "50d64f1A"), _e("F53700" + nn(this.data.Cr7) + "00d64f1A"), _e("F53801" + nn(this.data.Cr8) + "A3774d68")) : 1 == n.data.UI && (_e("F52000" + nn(this.data.Cr10) + "0000781c"), _e("F52100" + nn(this.data.Cr11) + "001cf02e"), _e("F52200" + nn(this.data.Cr12) + "004af02e"), _e("F52300" + nn(this.data.Cr13) + "0078f02e"), _e("F52400" + nn(this.data.Cr14) + "00a6f02e"), _e("F52500" + nn(this.data.Cr15) + "7800781c"), _e("F52600" + nn(this.data.Cr16) + "00d4781b"), _e("F52701" + nn(this.data.Cr17) + "78d4781b"))
  },
  CK0: function (t) {
    pe = 0, this.CRSet(this.data.Cr0)
  },
  CK1: function (t) {
    pe = 1, this.CRSet(this.data.Cr1)
  },
  CK2: function (t) {
    pe = 2, this.CRSet(this.data.Cr2)
  },
  CK3: function (t) {
    pe = 3, this.CRSet(this.data.Cr3)
  },
  CK4: function (t) {
    pe = 4, this.CRSet(this.data.Cr4)
  },
  CK5: function (t) {
    pe = 5, this.CRSet(this.data.Cr5)
  },
  CK6: function (t) {
    pe = 6, this.CRSet(this.data.Cr6)
  },
  CK7: function (t) {
    pe = 7, this.CRSet(this.data.Cr7)
  },
  CK8: function (t) {
    pe = 8, this.CRSet(this.data.Cr8)
  },
  CK10: function (t) {
    pe = 10, this.CRSet(this.data.Cr10)
  },
  CK11: function (t) {
    pe = 11, this.CRSet(this.data.Cr11)
  },
  CK12: function (t) {
    pe = 12, this.CRSet(this.data.Cr12)
  },
  CK13: function (t) {
    pe = 13, this.CRSet(this.data.Cr13)
  },
  CK14: function (t) {
    pe = 14, this.CRSet(this.data.Cr14)
  },
  CK15: function (t) {
    pe = 15, this.CRSet(this.data.Cr15)
  },
  CK16: function (t) {
    pe = 16, this.CRSet(this.data.Cr16)
  },
  CK17: function (t) {
    pe = 17, this.CRSet(this.data.Cr17)
  },
  CRSet: function (t) {
    t.match(/#(..)(..)(..)/), De = RegExp.$1, me = RegExp.$2, Ge = RegExp.$3, this.setData({
      CR: parseInt(De, 16),
      CG: parseInt(me, 16),
      CB: parseInt(Ge, 16)
    })
  },
  SetCr: function () {
    0 == n.data.UI && pe >= 10 && (pe = 0), 1 == n.data.UI && pe < 10 && (pe = 10), 0 == pe ? n.setData({
      Cr0: "#" + De + me + Ge
    }) : 1 == pe ? n.setData({
      Cr1: "#" + De + me + Ge
    }) : 2 == pe ? n.setData({
      Cr2: "#" + De + me + Ge
    }) : 3 == pe ? n.setData({
      Cr3: "#" + De + me + Ge
    }) : 4 == pe ? n.setData({
      Cr4: "#" + De + me + Ge
    }) : 5 == pe ? n.setData({
      Cr5: "#" + De + me + Ge
    }) : 6 == pe ? n.setData({
      Cr6: "#" + De + me + Ge
    }) : 7 == pe ? n.setData({
      Cr7: "#" + De + me + Ge
    }) : 8 == pe ? n.setData({
      Cr8: "#" + De + me + Ge
    }) : 10 == pe ? n.setData({
      Cr10: "#" + De + me + Ge
    }) : 11 == pe ? n.setData({
      Cr11: "#" + De + me + Ge
    }) : 12 == pe ? n.setData({
      Cr12: "#" + De + me + Ge
    }) : 13 == pe ? n.setData({
      Cr13: "#" + De + me + Ge
    }) : 14 == pe ? n.setData({
      Cr14: "#" + De + me + Ge
    }) : 15 == pe ? n.setData({
      Cr15: "#" + De + me + Ge
    }) : 16 == pe ? n.setData({
      Cr16: "#" + De + me + Ge
    }) : 17 == pe && n.setData({
      Cr17: "#" + De + me + Ge
    })
  },
  CSC: function (t) {
    0 == de && (0, Jt.SetCFG)("Cr" + pe, "#" + De + me + Ge)
  },
  CRC: function (t) {
    De = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CGC: function (t) {
    me = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CBC: function (t) {
    Ge = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CTC1: function (t) {
    we = t.detail.value.toString(16).padStart(2, "0"), (0, Jt.SetCFG)("BGT", we), n.setData({
      BGC: "#000000" + we
    })
  },
  BTBGP1: function (t) {
    Ve("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Jt.SetCFG)("BGI", 1), (0, Jt.SetCFG)("BGP1", t), n.setData({
        BGP1: t,
        BGP: t,
        BGI: 1
      })
    }))
  },
  BTBGP2: function (t) {
    Ve("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Jt.SetCFG)("BGI", 2), (0, Jt.SetCFG)("BGP2", t), n.setData({
        BGP2: t,
        BGP: t,
        BGI: 2
      })
    }))
  },
  BTBGP3: function (t) {
    Ve("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Jt.SetCFG)("BGI", 3), (0, Jt.SetCFG)("BGP3", t), n.setData({
        BGP3: t,
        BGP: t,
        BGI: 3
      })
    }))
  },
  BTBGP4: function (t) {
    Ve("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Jt.SetCFG)("BGI", 4), (0, Jt.SetCFG)("BGP4", t), n.setData({
        BGP4: t,
        BGP: t,
        BGI: 4
      })
    }))
  },
  BTBGP0: function (t) {
    5 == ++Ae && (Ae = 0), n.setData({
      BGP: ve[Ae],
      BGI: Ae
    }), (0, Jt.SetCFG)("BGI", Ae)
  },
  BTCKA2: function (t) {
    _e("F972" + un(1 - mt)), _e("FF15")
  },
  BTEN1: function (t) {
    ne && this.MSG("", "1100001BE4000005DC000020D0000005DC010" + (1 - H) + "00"), (0, Jt.SetCFG)("UEN", 1 - H), _e("F970" + un(1 - H)), _e("FF11")
  },
  BTBLE1: function (t) {
    Ve("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      _e(t = (t = "FA73" + on(t = unescape(encodeURIComponent(t)))).substring(0, 40)), _e("FF20")
    }))
  },
  BTBLE2: function (t) {
    Ve("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      _e("FA74" + on(t)), _e("FF21")
    }))
  },
  BTVIN: function (t) {
    Ve("设置取电器VIN码", "Set VIN", "标准17位英文和数字", "Up to 17 characters", (function (t) {
      return (t = t.toUpperCase()).match(/^[A-HJ-NPR-Z0-9]{14}\d\d\d$/) ? (_e("FAD3" + on(t = unescape(encodeURIComponent(t)))), void _e("FF25")) : void(0, Jt.Toast)(H ? "Incorrect VIN input!" : "输入VIN不正确!")
    }))
  },
  BTTCH1: function (t) {
    Ve("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return _e("FAD1" + on(t)), void _e("FF24");
      (0, Jt.Toast)(H ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    We("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      _e("F9C7" + un(t)), _e("FF18")
    }))
  },
  BTKEY1: function (t) {
    _e("F967" + un(1 - R)), _e("FF10")
  },
  BTKEY2: function (t) {
    _e("F966" + un(1 - Y)), _e("FF11")
  },
  BTDDT1: function (t) {
    _e("F96E" + un(Ut >= 3 ? 0 : Ut + 1)), _e("FF16")
  },
  UPDate: function (n, a) {
    _e("AB00" + on(unescape(encodeURIComponent(t)))), _e("AB01" + on(unescape(encodeURIComponent(e)))), _e(n + on(a)), (0, Jt.Toast)(H ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
  },
  BTLST: function (t) {
    this.setData({
      LST: 1 - this.data.LST
    })
  },
  BTUP6: function (t) {
    Ve("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Jt.SetCFG)("WID", t), _e("AB00" + on(t = unescape(encodeURIComponent(t)))), _e("FF22")
    }))
  },
  BTUP7: function (t) {
    Ve("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Jt.SetCFG)("WPD", t), _e("AB01" + on(t = unescape(encodeURIComponent(t)))), _e("FF23")
    }))
  },
  BTUP1: function (t) {
    if (!Ee)
      if (this.data.CVer >= this.data.UPDate) {
        if (se) return;
        Pe("升级确认", "Confirm clearance date", "当前已经是最新版,确定是否重新升级固件", "", (function (t) {
          n.UPDate("A700000000", "NewUI")
        }))
      } else Ue.showModal({
        title: H ? "Start Upgrade" : "开始升级",
        editable: !1,
        confirmText: H ? "YES" : "确定",
        cancelText: H ? "NO" : "取消",
        success: function (t) {
          t.confirm && n.UPDate("A700000000", "NewUI")
        }
      })
  },
  BTUP5: function (t) {
    ie && Pe("确认清除激活日期", "Confirm clearance date", "", "", (function (t) {
      _e("FD48" + on("Cxjdwx"))
    }))
  },
  BTUP8: function (t) {
    Ue.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    Ue.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    Ue.setClipboardData({
      data: "设备ID:" + G
    })
  },
  BTUP0: function (t) {
    Ue.showModal({
      title: H ? "Firmware rollback" : "固件回退",
      editable: !1,
      confirmText: H ? "YES" : "确定",
      cancelText: H ? "NO" : "取消",
      success: function (t) {
        t.confirm && (ee && n.UPDate("A700000000", "CEVRollBack"), ee || n.UPDate("A700000000", "CANRollBack"))
      }
    })
  },
  BTUP9: function (t) {
    Ue.showModal({
      title: H ? "Write Test Firmware" : "升级测试固件",
      content: "测试版本固件可能会有未知的BUG,如遇到BUG可以升级到正式版或者退回稳定版",
      editable: !1,
      confirmText: "确定",
      cancelText: "取消",
      success: function (t) {
        t.confirm && n.UPDate("A700000000", "Test1")
      }
    })
  },
  BTUFN: function (t) {
    Pe("是否切换风速控制方式", "Confirm whether to switch the wind speed control mode", "如采用标配风机小板请勿修改此值", "If using the standard fan board, please do not modify this value", (function (t) {
      _e("F9E2" + un(1 - m)), _e("FF")
    }))
  },
  BTUFS: function (t) {
    We("设置温度加速值", "Set temperature acceleration value", "2", "20", (function (t) {
      _e("F963" + un(t)), _e("FF14")
    }))
  },
  BTAFS: function (t) {
    We("设置电流加速值", "Set current acceleration value", "0.1", "3.0", (function (t) {
      _e("F964" + un(10 * t)), _e("FF14")
    }))
  },
  BTLFS: function (t) {
    We("设置初始风速值", "Set initial wind speed value", "20", "200", (function (t) {
      _e("F965" + un(t)), _e("FF14")
    }))
  },
  BTMFS: function (t) {
    We("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      _e("F9C5" + un(t)), _e("FF14")
    }))
  },
  BTTMC: function (t) {
    We("设置超温进入温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      _e("F84A" + sn(t)), _e("FF13")
    }))
  },
  BTTMC1: function (t) {
    We("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      _e("F84B" + sn(t)), _e("FF13")
    }))
  },
  BTOST: function (t) {
    We("设置超温关机温度", "Set the exit temperature for over temperature", "50", "120", (function (t) {
      _e("F8F7" + sn(t)), _e("FF18")
    }))
  },
  BTTMW: function (t) {
    We("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      _e("F84C" + sn(t)), _e("FF13")
    }))
  },
  BTMMV: function (t) {
    We("设置最高电压限制", "Set maximum voltage limit", "100", "1000", (function (t) {
      _e("F8FA" + sn(t)), _e("FF19"), _e("FF14")
    }))
  },
  BTMMA: function (t) {
    We("设置最高电流限制", "Set maximum current limit", "10", "400", (function (t) {
      _e("F8F9" + sn(t)), _e("FF19"), _e("FF14")
    }))
  },
  BTRDY: function (t) {
    We("设置就绪电压范围", "Set the ready voltage range", "1", "20", (function (t) {
      _e("F9CD" + un(t)), _e("FF19")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), u > 0 && u < 5 ? Pe("检测到输出电流", "Detected output current", "如有负载请点取消后断开负载再开始校正,如无负载则为空载电流,点击确定将会设置为最小电流过滤(可在输出电流校正页面中设置).", "If there is a load detected in the output current, please click NO and disconnect the load before starting the calibration. If there is no load, Click YES will set it as the minimum current filter (which can be set on the output current calibration page)", (function (t) {
      _e("F848" + sn(Number(u) + .05)), _e("FF16")
    })) : c < 10 || u > 0 ? (0, Jt.Toast)(H ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (_e("C1"), _e("FF"), We("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / c).toFixed(4),
        n = Number(t / et).toFixed(4);
      _e("C3" + sn(100 * n) + sn(100 * e)), 2 == o ? (_e("F876" + sn(20 * n)), _e("F877" + sn(100 * n))) : 1 == o ? (_e("F876" + sn(41 * n)), _e("F877" + sn(58.5 * n))) : 4 == o ? (_e("F876" + sn(41.2 * n)), _e("F877" + sn(59.3 * n))) : 16 == o ? (_e("F876" + sn(44 * n)), _e("F877" + sn(61 * n))) : 32 == o && (_e("F876" + sn(41.2 * n)), _e("F877" + sn(59.4 * n))), _e("FF"), _e("A80" + V + sn(50 * n) + sn(nt)), _e("FF")
    })))
  },
  BTOVT1: function (t) {
    ee ? We("升压采样补偿", "Boost voltage compensation", "0.1", "1", (function (t) {
      t > 999.99 ? t *= 1e-4 : t > 99.99 && (t *= .001), _e("FB47" + sn(100 * t)), _e("FF")
    })) : We("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      _e("FB47" + sn(100 * t)), _e("FF")
    }))
  },
  BTOVTU: function (t) {
    _e("FB47" + sn(100 * (Number(dt) + 3e-4))), _e("FF")
  },
  BTOVTD: function (t) {
    _e("FB47" + sn(100 * (Number(dt) - 3e-4))), _e("FF")
  },
  BTOVD1: function (t) {
    ee ? We("基础电压补偿", "Basic voltage compensation", "10", "40", (function (t) {
      _e("FB46" + sn(100 * t)), _e("FF")
    })) : We("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      _e("FB46" + sn(100 * t)), _e("FF")
    }))
  },
  BTOVDU: function (t) {
    _e("FB46" + sn(100 * (Number(Bt) + 3e-4))), _e("FF")
  },
  BTOVDD: function (t) {
    _e("FB46" + sn(100 * (Number(Bt) - 3e-4))), _e("FF")
  },
  BTOVS: function (t) {
    Me(H ? "Set voltage range" : "设置电压范围", (H ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (_e("F876" + sn(Number(RegExp.$1))), _e("F877" + sn(Number(RegExp.$2))), _e("FF")) : (0, Jt.Toast)(H ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    We("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      _e("F8F3" + sn(t)), _e("FF")
    }))
  },
  BTOVT3: function (t) {
    c < 10 || u > 0 ? (0, Jt.Toast)(H ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (_e("C2"), _e("FF"), We("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / c).toFixed(4);
      _e("C4" + sn(100 * Number(t / et).toFixed(4)) + sn(100 * e)), _e("FF")
    })))
  },
  BTOVT2: function (t) {
    We("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      _e("FBF2" + sn(100 * t)), _e("FF")
    }))
  },
  BTO2TU: function (t) {
    _e("FBF2" + sn(100 * (Number(It) + 3e-4))), _e("FF")
  },
  BTO2TD: function (t) {
    _e("FBF2" + sn(100 * (Number(It) - 3e-4))), _e("FF")
  },
  BTOVD2: function (t) {
    We("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      _e("FBF1" + sn(100 * t)), _e("FF")
    }))
  },
  BTO2DU: function (t) {
    _e("FBF1" + sn(100 * (Number(Ot) + 3e-4))), _e("FF")
  },
  BTO2DD: function (t) {
    _e("FBF1" + sn(100 * (Number(Ot) - 3e-4))), _e("FF")
  },
  BTIVD1: function (t) {
    We("输入电压补偿值", "Input voltage compensation value", "0.1", "5", (function (t) {
      _e("F8FB" + sn(t)), _e("FF")
    }))
  },
  BTIVD2: function (t) {
    _e("F8FB" + sn(1)), _e("FF"), We("输入实际测量出的输入电压", "Input the actual measured input voltage", "10", "1000", (function (t) {
      _e("F8FB" + sn(Number(t / S))), _e("FF")
    }))
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 50,
      duration: 300
    }), u < 5 || et - c < .2 ? (0, Jt.Toast)(H ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (_e("C0"), _e("FF"), We("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / u).toFixed(4);
      _e("C5" + sn(100 * Number(t / nt).toFixed(4)) + sn(100 * e)), _e("FF")
    })))
  },
  BTOAT1: function (t) {
    We("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      _e("FB45" + sn(100 * t)), _e("FF")
    }))
  },
  BTOAT2: function (t) {
    _e("FB45" + sn(100 * (Number(gt) - .001))), _e("FF")
  },
  BTOAT3: function (t) {
    _e("FB45" + sn(100 * (Number(gt) + .003))), _e("FF")
  },
  BTOAS1: function (t) {
    We("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      _e("F8F4" + sn(t)), _e("FF")
    }))
  },
  BTCLV: function (t) {
    We("设置最小电流过滤", "Set minimum current filtering", "0.00", "5.00", (function (t) {
      _e("F848" + sn(t)), _e("FF")
    }))
  },
  BTOAD1: function (t) {
    We("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      _e("FB44" + sn(100 * t)), _e("FF")
    }))
  },
  BTOAD2: function (t) {
    _e("FB44" + sn(100 * (Number(Tt) - .001))), _e("FF")
  },
  BTOAD3: function (t) {
    _e("FB44" + sn(100 * (Number(Tt) + .001))), _e("FF")
  },
  BTOAS: function (t) {
    Me(H ? "Set current range" : "设置电流范围", (H ? "Now:" : "当前范围:") + ut + "-" + ft, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (_e("F878" + sn(Number(RegExp.$1))), _e("F879" + sn(Number(RegExp.$2))), _e("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (_e("F879" + sn(t)), _e("FF")) : (0, Jt.Toast)(H ? "Input format error" : "输入格式错误!"))
    }))
  },
  BTIAD1: function (t) {
    We("输入电流补偿值", "Input current compensation value", "0.1", "5", (function (t) {
      _e("F8FC" + sn(t)), _e("FF")
    }))
  },
  BTIAD2: function (t) {
    _e("F8FB" + sn(1)), _e("FF"), We("输入实际测量出的输入电流", "Input the actual measured input current", "3", "50", (function (t) {
      _e("F8FC" + sn(Number(t / d))), _e("FF")
    }))
  },
  pwrbt: function (t) {
    _e("A6" + un(1 - P)), _e("FF10")
  },
  BTUCF1: function (t) {
    _e("F9CF" + un(1 - _t)), _e("FF10")
  },
  owbt: function (t) {
    We("设置功率限制", "Set power limit", "300", q, (function (t) {
      _e("F84D" + sn(t)), _e("FF")
    }))
  },
  BTUIW1: function (t) {
    _e("F9E1" + un(1 - le)), _e("FF")
  },
  tibt: function (t) {
    We("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      _e("A9" + cn(t)), _e("FF")
    }))
  },
  BTYC1: function (t) {
    We("设置预充电压", "Set pre charge voltage", "0", ht, (function (t) {
      _e("F8F6" + sn(t)), _e("FF")
    }))
  },
  BTYC2: function (t) {
    We("设置预充电流", "Set pre charge current", ut, ft, (function (t) {
      _e("F8F5" + sn(t)), _e("FF")
    }))
  },
  SetVA: function (t, e, n) {
    V != t && (e > ht || e < Ft ? We("设置输出电压", "Set output voltage", Ft, ht, (function (e) {
      _e("A80" + (V = t) + sn(e) + sn(n)), _e(t <= 2 ? "FF10" : "FF11")
    })) : Pe("快捷设置电压电流切换", "Switch confirmation", "为避免误触,请确认切换电压电流", "To avoid accidental contact, please confirm the switching voltage and current", (function (a) {
      _e("A80" + (V = t) + sn(e) + sn(n)), _e(t <= 2 ? "FF10" : "FF11")
    })))
  },
  ks1bt: function (t) {
    this.SetVA(1, M[0], M[1] > ft ? ft : M[1])
  },
  ks2bt: function (t) {
    this.SetVA(2, W[0], W[1] > ft ? ft : W[1])
  },
  ks3bt: function (t) {
    this.SetVA(3, y[0], y[1] > ft ? ft : y[1])
  },
  ks4bt: function (t) {
    this.SetVA(4, k[0], k[1] > ft ? ft : k[1])
  },
  hqbt1: function (t) {
    ee ? te >= 5.39 ? We("设置超温关机倒计时", "设置超温关机倒计时", 3, 60, (function (t) {
      _e("F961" + un(t)), _e("FF15")
    })) : (0, Jt.Toast)(H ? "The current firmware version is not adjustable. If you need to modify it, please upgrade the firmware!" : "当前固件版本不可调,如需修改请升级固件!") : We("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      _e("F961" + un(t)), _e("FF15")
    }))
  },
  hqbt0: function (t) {
    _e("F961" + un(0 == pt ? ee ? 30 : 10 : 0)), _e("FF15")
  },
  btbt1: function (t) {
    ie && wx.getClipboardData({
      success: function (t) {
        var e = t.data;
        e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (_e("F96B" + un(3)), _e("F96C" + un(0)), Xe(e))
      }
    })
  },
  nvbt: function (a) {
    Me(H ? "Set Output Voltage" : "设置输出电压", (H ? "Range:" : "范围:") + Ft + "-" + ht, (function (a) {
      if (a)
        if (a.startsWith("FFF8")) _e(a.substr(2, 4) + sn(a.substr(6))), _e("FF");
        else {
          if (a.startsWith("FFF9")) return _e(a.substr(2)), void _e("FF");
          if ("DEBUG=0" == a)(0, Jt.SetCFG)("DEBUG", 0), ae = 0, _e("F9C900"), _e("F9CA01"), _e("F9CB01"), _e("F9CC01");
          else if ("DEBUG=1" == a)(0, Jt.SetCFG)("DEBUG", 1), ae = 1, _e("F9C900"), _e("F9CA01"), _e("F9CB01"), _e("F9CC01");
          else if ("DEBUG=2" == a)(0, Jt.SetCFG)("DEBUG", 2), ae = 2, _e("F9C9FF"), _e("F9CA01"), _e("F9CB01"), _e("F9CC01");
          else if ("DEBUG=3" == a)(0, Jt.SetCFG)("DEBUG", 2), ae = 2, _e("F9C9FF"), _e("F9CA01"), _e("F9CB01"), _e("F9CC00");
          else if (a.startsWith("FFC8")) _e(a.substr(2, 4) + a.substr(6)), _e("FF");
          else if (a.startsWith("FFC9")) {
            _e("C9" + a.substr(4, 4) + on(a.substr(8)))
          } else if ("异常修复" == a && te >= 5.39) Pe("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置", "Exception repair will detect and reset certain settings", (function (t) {
            _e("F60001"), (0, Jt.Toast)(H ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), n.navigateBack({
              delta: 0
            })
          }));
          else if ("强制升级" == a || "测试版" == a) Ue.showModal({
            title: H ? "Start Upgrade" : "开始升级",
            editable: !1,
            confirmText: H ? "YES" : "确定",
            cancelText: H ? "NO" : "取消",
            success: function (t) {
              t.confirm && n.UPDate("A700000000", "测试版" == a ? "Test1" : "NewUI")
            }
          });
          else if ("测试二" == a) Ue.showModal({
            title: H ? "Start Upgrade" : "开始升级",
            editable: !1,
            confirmText: H ? "YES" : "确定",
            cancelText: H ? "NO" : "取消",
            success: function (t) {
              t.confirm && n.UPDate("A700000000", "Test2")
            }
          });
          else if ("测试零" == a) {
            if (2 != ie) return;
            Ue.showModal({
              title: H ? "Start Upgrade" : "开始升级",
              editable: !1,
              confirmText: H ? "YES" : "确定",
              cancelText: H ? "NO" : "取消",
              success: function (n) {
                if (n.confirm) return _e("AB00" + on(unescape(encodeURIComponent(t)))), _e("AB01" + on(unescape(encodeURIComponent(e)))), _e("A3" + on("http://6ud6631us995.vicp.fun/firmware.bin")), void(0, Jt.Toast)(H ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
              }
            })
          } else if (a.startsWith("DataStart=")) wx.getClipboardData({
            success: function (t) {
              var e = t.data;
              e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && Xe(e)
            }
          });
          else {
            if (_e("A1" + on(a)), (a = parseFloat(a)) > ht || a < Ft && 0 == _t || !isFinite(a)) return void(0, Jt.Toast)(H ? "Beyond the set range!" : "超出设置范围!");
            _e("A80" + V + sn(a) + sn(nt)), _e("FF")
          }
        }
      else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (_e("F96B" + un(3)), Xe(e))
        }
      })
    }))
  },
  nabt: function (t) {
    We("设置输出电流", "Set output current", ut, ft, (function (t) {
      _e("A80" + V + sn(et) + sn(t)), _e("FF")
    }))
  },
  sa2bt3: function (t) {
    We("设置充电时间(分钟)", "Set charging time(Minute)", 0, 600, (function (t) {
      _e("A9" + cn(t)), _e("FF")
    }))
  },
  SetSGK: function () {
    if (te >= 5.39) {
      var t = 0 == Zt ? "1" : "0";
      _e("A50" + t), _e("A40" + t), _e("FF19")
    } else _e("F857" + sn(0 == _ ? 1 : 0)), _e("FF12")
  },
  sa2bt2: function (t) {
    We("设置二段电流", "Set second stage current", ut, ft, (function (t) {
      _e("F857" + sn(t)), _e("FF12")
    }))
  },
  sa2bt1: function (t) {
    We("设置二段电压", "Set second stage voltage", Ft, ht, (function (t) {
      _e("F858" + sn(t)), _e("FF12")
    }))
  },
  sa2bt0: function (t) {
    ee && (te < 5.39 || et > 126) ? _e("A9" + cn(ue ? 0 : 60)) : (_e("F858" + (0 == _ ? sn(et - 3) : "00000000")), _e("F857" + (0 == _ ? sn(10) : "00000000")), _e("FF12"))
  },
  sdbt1: function (t) {
    We("设置延时时间(分钟)", "Set delay time (Minutes)", 1, 600, (function (t) {
      _e("F859" + sn(t)), _e("FF16")
    }))
  },
  sdbt2: function (t) {
    We("设置关机电流", "SSet startup delay current", "0.00", "10.00", (function (t) {
      _e("F8F0" + sn(t)), _e("FF")
    }))
  },
  sdbt0: function (t) {
    _e("F859" + (0 == At ? sn(1) : "00000000")), _e("FF16")
  },
  MSG: function (t, e) {
    if (!i)
      if (1 != ae || e.startsWith("D") || (0, Jt.print)("MSG:", e), e.startsWith("A101")) n.setData({
        ShowBar: 0,
        Panel: 2,
        LOGO: H ? "Preview" : "预览"
      });
      else if (e.startsWith("A001")) oe = 2, "未激活" != a || ie || Ne(), te <= 5.28 && _e("FF");
    else if (e.startsWith("A000")) {
      if (oe) return;
      oe = 1, (0, Jt.Toast)(H ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ue.showModal({
          title: H ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: !0,
          placeholderText: "ID:" + G,
          confirmText: H ? "YES" : "确定",
          cancelText: H ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, Jt.SetCFG)(G, t.content), _e("A0" + on(t.content)), oe = 0)
          }
        })
      }), 1e3)
    } else if (e.startsWith("F101")) tn();
    else if (e.startsWith("F201")) tn();
    else if (e.startsWith("F301")) Je = 0, Qe = [], (0, Jt.Toast)(H ? "Send End!" : "发送完成!");
    else if (e.startsWith("FF")) {
      var s = new DataView(t);
      s.getUint8(1) ? 2 != oe && (oe = 2, "未激活" != a || ie || Ne()) : ((0, Jt.Toast)(H ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ue.showModal({
          title: H ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: !0,
          placeholderText: "ID:" + G,
          confirmText: H ? "YES" : "确定",
          cancelText: H ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, Jt.SetCFG)(G, t.content), _e("FF" + on(t.content)), oe = 0)
          }
        })
      }), 1e3)), P = s.getUint8(2), R = s.getUint8(3), o = s.getUint8(4), H = s.getUint8(5), Y = s.getUint8(6), J = s.getUint8(7), tt = s.getUint8(8), rt = s.getUint8(9), st = s.getUint8(10), ct = s.getUint8(11), lt = s.getUint8(12), Ct = s.getUint8(13), St = s.getUint8(14) / 10, pt = s.getUint8(15), Dt = s.getUint8(16), mt = s.getUint8(17), Et = s.getUint8(18), Ut = s.getUint8(19), bt = .01 * s.getUint8(20), Mt = s.getUint8(21), Wt = s.getUint8(22), Vt = s.getUint8(23), yt = s.getUint8(24), kt = s.getUint8(25), Ht = s.getUint8(26), jt = s.getUint8(27), zt = s.getUint8(28), Zt = s.getUint8(29), X = s.getUint8(30), V = s.getUint8(31), _t = s.getUint8(32), Kt = s.getUint8(33), le = s.getUint8(34), Ce = s.getUint8(35), Se = s.getUint8(36), m = s.getUint8(37);
      var qt = 51;
      M = [fn(s, qt, 2, 1), fn(s, qt + 4, 2, 1)], W = [fn(s, qt += 8, 2, 1), fn(s, qt + 4, 2, 1)], y = [fn(s, qt += 8, 2, 1), fn(s, qt + 4, 2, 1)], k = [fn(s, qt += 8, 2, 1), fn(s, qt + 4, 2, 1)], Z = fn(s, qt += 8), _ = fn(s, qt += 4), q = fn(s, qt += 4), Q = fn(s, qt += 4), at = fn(s, qt += 4), it = fn(s, qt += 4), ot = fn(s, qt += 4), L = fn(s, qt += 4), ut = fn(s, qt += 4), ft = fn(s, qt += 4), Ft = fn(s, qt += 4), ht = fn(s, qt += 4), dt = fn(s, qt += 4, 4), gt = fn(s, qt += 4, 4), Bt = fn(s, qt += 4, 4), Tt = fn(s, qt += 4, 4), Gt = fn(s, qt += 4), vt = fn(s, qt += 4), At = fn(s, qt += 4), wt = fn(s, qt += 4), It = fn(s, qt += 4, 4), Ot = fn(s, qt += 4, 4), xt = fn(s, qt += 4), Nt = fn(s, qt += 4), Pt = fn(s, qt += 4), Rt = fn(s, qt += 4), Lt = fn(s, qt += 4), Yt = fn(s, qt += 4), $t = fn(s, qt += 4), K = fn(s, qt += 4, 4), qt += 4, te >= 5.43 && (z = fn(s, qt, 4)), qt += 4, 1 == V ? (nt = M[1], et = M[0]) : 2 == V ? (nt = W[1], et = W[0]) : 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = k[1], et = k[0]), n.setData({
        PON: P,
        KON: R,
        CAN: o,
        UEN: H,
        KRC: Y,
        SV: et.toFixed(2),
        SA: nt.toFixed(2),
        WTi: J,
        Sleep: tt,
        LEDK0: rt,
        LEDK1: st,
        LEDK2: ct,
        IVD: K,
        IAD: z,
        UFS: lt,
        LFS: Ct,
        AFS: St,
        UHQ: pt,
        GIF: Dt,
        CKA2: mt,
        NTC: Et,
        DDT: Ut,
        CLV: bt,
        UEG: Mt,
        UCN: Wt,
        MFS: Vt,
        DOL: yt,
        DST: kt,
        LKS: Ht,
        UI: jt,
        RDY: zt,
        SGK: Zt,
        ETi: X,
        KSi: V,
        UCF: _t,
        TCH: Kt,
        UIW: le,
        ACK: Ce,
        CCK: Se,
        UFN: m,
        KS1: M,
        KS2: W,
        KS3: y,
        KS4: k,
        SV2: Z,
        SA2: _,
        SMW: q,
        UMW: Q,
        TMW: at,
        UMT: it,
        OMT: ot,
        MA: L,
        LSA: ut,
        HSA: ft,
        LSV: Ft,
        HSV: ht,
        OVT: dt,
        OAT: gt,
        OVD: Bt,
        OAD: Tt,
        L2V: Gt,
        H2V: vt,
        USD: At,
        SDU: wt,
        O2T: It,
        O2D: Ot,
        OVS: xt,
        OAS: Nt,
        YCA: Pt,
        YCV: Rt,
        OST: Lt,
        MMA: Yt,
        MMV: $t
      })
    } else if (e.startsWith("FE") || e.startsWith("EE")) {
      var Qt = rn(e.substring(20, 40));
      if (a = Qt.startsWith("20") ? Qt : "未激活", 0 == o) {
        te = .01 * parseInt(e.substring(16, 20), 16), o = hn(e, 14), ee = 0, G = e.substring(2, 14), 1 == o ? (r = "Huawei", te >= 5.36 && (n.setData({
          Err: 1
        }), Ye())) : 2 == o ? (r = "Increase", n.setData({
          Err: 1
        }), ze()) : 4 == o ? r = "ZTE3000" : 8 == o ? (r = "INFY", n.setData({
          Err: 1
        }), Ze()) : 12 == o ? (r = "EV_Station", ee = 2) : 13 == o ? r = "ZEEHO" : 14 == o ? (r = "EV_Charger", n.setData({
          Err: 1
        }), je(), ee = 1) : 16 == o ? r = "EPS6020" : 32 == o ? (r = "ZTE4875", te >= 5.44 && (n.setData({
          Err: 1
        }), $e())) : 64 == o ? r = "Sinexcel" : 65 == o ? r = "BH10M100" : 66 == o ? r = "MC1503N5R" : 67 == o && (r = "R24-2200");
        var Xt = wx.getDeviceInfo();
        (0, Jt.Check)(G, Oe, ie, r, te.toFixed(2), a, Xt.model, Xt.system, (function (t) {
          "0" == t[0] && (i = 1, _e("CC"), Re("设备授权异常", "Abnormal device authorization", "ID:0x" + G, "ID:0x" + G, "我知道了", "Yes I Kown", (function (t) {
            n.navigateBack({
              delta: 0
            })
          }))), "1" == t[1] && _e("CB"), "1" == t[2] && Ne()
        })), G = "0x" + G, n.setData({
          CVer: te.toFixed(2),
          CEV: ee,
          SCAN: r,
          ID: G,
          ACT: a
        });
        var ne = (0, Jt.GetCFG)(G, "0000");
        ie && (ne = (Number(G) + 19880914).toString(16).substring(4, 8)), e.startsWith("EE") ? 0 != oe && 3 != oe || _e("A0" + on(ne)) : (_e("FF" + on(ne)), setTimeout((function () {
          3 == oe && (oe = 0, _e("FF" + on(ne)))
        }), 1500))
      }
      if (e.startsWith("FE")) {
        var se = rn(e.substring(260, 300)),
          ce = rn(e.substring(300, 340));
        "config" != se && "" != se || (se = (0, Jt.GetCFG)("WID", "config")), "88888888" != ce && "" != ce || (ce = (0, Jt.GetCFG)("WPD", "88888888")), n.setData({
          VIN: rn(e.substring(100, 140)),
          SSID: rn(e.substring(140, 180)),
          UPWD: rn(e.substring(180, 220)),
          LKV: rn(e.substring(220, 260)),
          WID: se,
          WPD: ce
        })
      }
    } else if (e.startsWith("FA")) {
      var de = new DataView(t);
      c = fn(de, 1), u = fn(de, 5), f = fn(de, 9), S = fn(de, 13), d = fn(de, 17), g = fn(de, 21), n.setData({
        IV: S,
        IA: d,
        IW: g,
        OV: c,
        OA: u,
        OW: f
      })
    } else if (e.startsWith("FB")) {
      var ge = new DataView(t);
      h = ge.getUint8(1), l = ge.getUint8(2), C = ge.getUint8(3), T = ge.getUint8(4), p = ge.getUint8(5), D = ge.getUint8(6), U = ge.getUint8(7), b = ge.getUint8(8), $ = ge.getUint8(9), ue = ge.getUint8(10), ue += ge.getUint8(11) << 8, fe = ge.getUint8(12), j = ge.getUint8(13);
      var Be = 31;
      c = fn(ge, Be), u = fn(ge, Be += 4), f = fn(ge, Be += 4), F = fn(ge, Be += 4), S = fn(ge, Be += 4), d = fn(ge, Be += 4), g = fn(ge, Be += 4), B = fn(ge, Be += 4), v = fn(ge, Be += 4), A = fn(ge, Be += 4), w = fn(ge, Be += 4), E = fn(ge, Be += 4), I = fn(ge, Be += 4), O = fn(ge, Be += 4), x = fn(ge, Be += 4), N = fn(ge, Be += 4), Be += 4, 2 == o ? ze(T, p) : 8 == o ? ze(T, p, D) : te >= 5.44 && (32 == o ? $e(ge.getUint8(23), ge.getUint8(24), ge.getUint8(25), ge.getUint8(26), ge.getUint8(27), ge.getUint8(28), ge.getUint8(29)) : 1 == o ? Ye(ge.getUint8(23), ge.getUint8(24), ge.getUint8(25), ge.getUint8(26), ge.getUint8(27), ge.getUint8(28), 0) : 14 == o && je(ge.getUint8(23), ge.getUint8(24), ge.getUint8(25), ge.getUint8(26), ge.getUint8(27), ge.getUint8(28), ge.getUint8(29), ge.getUint8(30))), te >= 5.42 && (Fe = ge.getUint8(14), he = fn(ge, Be), Be += 4, he >= 100 && (n.navigateBack({
        delta: 0
      }), Re("升级成功", "Upgrade completed!", "", "", "我知道了", "Yes I Kown", (function (t) {}))));
      var Te = Number(f / g * 100).toFixed(2),
        pe = Number(g - f).toFixed(2);
      0 == Ce && te >= 5.42 ? re = H ? "Device unauthorized" : "设备未授权" : 0 == Se && te >= 5.42 ? re = H ? "The device is locked" : "设备已锁定" : 60 == h ? re = H ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == C ? re = 0 == $ ? H ? "Communication Abnormality" : "CAN通讯异常" : 39 == $ ? H ? "Abnormal Insulation Test" : "绝缘测试未通过" : $ < 6 ? H ? "Handshake message failed" : "握手信息未通过" : $ < 9 ? H ? "Vehicle information not pass" : "车辆信息未通过" : 16 == $ ? H ? "Charging station not ready" : "电压检测未通过" : H ? "Other abnormal interruptions" : "其它异常中止" : 50 == h ? re = H ? "Stop Charging" : "中 止 充 电" : 51 == h ? re = H ? "Charging Error" : "充 电 错 误" : 52 == h ? re = H ? "Seting Handshake Information" : "配置握手信息" : 53 == h ? re = H ? "Seting Charging Information" : "配置充电信息" : 54 == h ? re = et >= Ft && et <= ht ? H ? "Waiting Output Set Voltage" : "等待输出设定电压" : H ? "Set Voltage Out Of Range" : "设置电压超范围" : 55 == h ? re = H ? "Ready For Use" : "已准备就绪" : 56 == h ? re = H ? "Charging" : "正在充电中" : 57 == h ? re = H ? "Charging Completed" : "充电完成" : 58 == h ? re = H ? "Overtemperature shutdown" : "超温关机(" + fe + ")" : 59 == h ? re = H ? "Insulation testing" : "绝缘测试" : 0 == c ? re = H ? "Charger Output Abnormality" : "充电器输出异常" : 4 == h ? re = H ? "Charger Shutdown" : "充电器已关机" : 0 == h ? re = H ? "Waiting For Battery Connection" : "等待接入电池" : 1 == h ? re = H ? "Charging" : "正在充电中" : 2 == h ? re = H ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == h ? re = H ? "Precharging" : "正在预充" : 40 == h ? re = H ? "Appointment Waiting" : "预约等待中" : 3 == h ? re = H ? "Charging Completed" : "充电完成" : 43 == h ? re = H ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == h && (re = H ? "Over Temperature Shutdown" : "超温保护关机");
      var De = .65 * wx.getWindowInfo().windowWidth,
        me = Math.max(15, Math.min(30, De / (H ? re.length : 1.8 * re.length) * 1.5));
      n.setData({
        Ah: v,
        Wh: A,
        AH: w,
        WH: E,
        SWT: U,
        SMT: b,
        IV: S,
        IA: d,
        IW: g,
        IT: B,
        ST0: T,
        ST1: p,
        ST2: D,
        EEI: g ? Te : "0.00",
        EES: g ? pe : "0.00",
        YS: an(ue),
        STR: re,
        NFS: l,
        OL: C,
        OV: c,
        OA: u,
        OW: f,
        OT: F,
        FSize: me,
        KT1: j,
        Ti: an(I),
        TI: an(O),
        NSD: an(x),
        UPS: Fe,
        SOC: Number(N).toFixed(0),
        UPV: Number(he).toFixed(2)
      })
    } else if (e.startsWith("01")) {
      c = Fn(e, 2), u = Fn(e, 10), f = Fn(e, 18), F = Fn(e, 26), h = hn(e, 34), l = hn(e, 36), C = hn(e, 38), 60 == h ? re = H ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == C ? re = H ? "Communication Abnormality" : "CAN通讯异常" : 50 == h ? re = H ? "Stop Charging" : "中 止 充 电" : 51 == h ? re = H ? "Charging Error" : "充 电 错 误" : 52 == h ? re = H ? "Seting Handshake Information" : "配置握手信息" : 53 == h ? re = H ? "Seting Charging Information" : "配置充电信息" : 54 == h ? re = H ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == h ? re = H ? "Ready For Use" : "已准备就绪" : 56 == h ? re = H ? "Charging" : "正在充电中" : 57 == h ? re = H ? "Charging Completed" : "充电完成" : 58 == h ? re = H ? "Overtemperature shutdown" : "超温关机(" + fe + ")" : 59 == h ? re = H ? "Insulation testing" : "绝缘测试" : 0 == c ? re = H ? "Charger Output Abnormality" : "充电器输出异常" : 4 == h ? re = H ? "Charger Shutdown" : "充电器已关机" : 0 == h ? re = H ? "Waiting For Battery Connection" : "等待接入电池" : 1 == h ? re = H ? "Charging" : "正在充电中" : 2 == h ? re = H ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == h ? re = H ? "Precharging" : "正在预充" : 40 == h ? re = H ? "Appointment Waiting" : "预约等待中" : 3 == h ? re = H ? "Charging Completed" : "充电完成" : 43 == h ? re = H ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == h && (re = H ? "Over Temperature Shutdown" : "超温保护关机");
      var Ge = .65 * wx.getWindowInfo().windowWidth;
      me = Math.max(15, Math.min(30, Ge / (H ? re.length : 1.8 * re.length) * 1.5));
      n.setData({
        STR: re,
        NFS: l,
        OL: C,
        OV: c,
        OA: u,
        OW: f,
        OT: F,
        FSize: me
      })
    } else if (e.startsWith("02")) {
      S = Fn(e, 2), d = Fn(e, 10), g = Fn(e, 18), B = Fn(e, 26), T = hn(e, 34), p = hn(e, 36), D = hn(e, 38);
      var ve = Number(f / g * 100).toFixed(2),
        Ae = Number(g - f).toFixed(2);
      n.setData({
        IV: S,
        IA: d,
        IW: g,
        IT: B,
        ST0: T,
        ST1: p,
        ST2: D,
        EEI: g ? ve : "0.00",
        EES: g ? Ae : "0.00"
      }), 2 == o && ze(T, p), 8 == o && Ze(T, p, D)
    } else if (e.startsWith("03")) v = Fn(e, 2), A = Fn(e, 10), w = Fn(e, 18), E = Fn(e, 26), U = hn(e, 34), b = hn(e, 36), n.setData({
      Ah: v,
      Wh: A,
      AH: w,
      WH: E,
      SWT: U,
      SMT: b
    });
    else if (e.startsWith("04")) ue = hn(e, 34), ue += hn(e, 36) << 8, fe = hn(e, 38), n.setData({
      YS: an(ue),
      Ti: an(Fn(e, 2)),
      TI: an(Fn(e, 10)),
      NSD: an(Fn(e, 18)),
      SOC: Number(Fn(e, 26)).toFixed(0)
    });
    else if (e.startsWith("10")) M = [Fn(e, 2, 1), Fn(e, 10, 1)], W = [Fn(e, 18, 1), Fn(e, 26, 1)], V = hn(e, 34), P = hn(e, 36), R = hn(e, 38), 1 == V ? (nt = M[1], et = M[0]) : 2 == V && (nt = W[1], et = W[0]), 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = k[1], et = k[0]), n.setData({
      KS1: M,
      KS2: W,
      KSi: V,
      PON: P,
      KON: R,
      SV: et.toFixed(2),
      SA: nt.toFixed(2)
    });
    else if (e.startsWith("11")) y = [Fn(e, 2, 1), Fn(e, 10, 1)], k = [Fn(e, 18, 1), Fn(e, 26, 1)], H = hn(e, 36), Y = hn(e, 38), (0, Jt.SetCFG)("UEN", H), 1 == V ? (nt = M[1], et = M[0]) : 2 == V && (nt = W[1], et = W[0]), 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = k[1], et = k[0]), n.setData({
      KS3: y,
      KS4: k,
      CAN: o,
      UEN: H,
      KRC: Y,
      SV: et.toFixed(2),
      SA: nt.toFixed(2),
      KSi: V
    });
    else if (e.startsWith("12")) Z = Fn(e, 2), _ = Fn(e, 10), q = Fn(e, 18), Q = Fn(e, 26), J = hn(e, 34), X = hn(e, 36), tt = hn(e, 38), n.setData({
      SV2: Z,
      SA2: _,
      SMW: q,
      UMW: Q,
      WTi: J,
      ETi: X,
      Sleep: tt
    });
    else if (e.startsWith("13")) {
      at = Fn(e, 2), it = Fn(e, 10), ot = Fn(e, 18);
      Fn(e, 26);
      rt = hn(e, 34), st = hn(e, 36), ct = hn(e, 38), n.setData({
        TMW: at,
        UMT: it,
        OMT: ot,
        LEDK0: rt,
        LEDK1: st,
        LEDK2: ct
      })
    } else if (e.startsWith("14")) ut = Fn(e, 2), ft = Fn(e, 10), Ft = Fn(e, 18), ht = Fn(e, 26), lt = hn(e, 34), Ct = hn(e, 36), St = .1 * hn(e, 38), n.setData({
      LSA: ut,
      HSA: ft,
      LSV: Ft,
      HSV: ht,
      UFS: lt,
      LFS: Ct,
      AFS: St.toFixed(1)
    }), ut = Number(ut), Ft = Number(Ft), ft = Number(ft), ht = Number(ht);
    else if (e.startsWith("15")) dt = .01 * Fn(e, 2), gt = .01 * Fn(e, 10), Bt = .01 * Fn(e, 18), Tt = .01 * Fn(e, 26), pt = hn(e, 34), Dt = hn(e, 36), mt = hn(e, 38), n.setData({
      OVT: dt.toFixed(4),
      OAT: gt.toFixed(4),
      OVD: Bt.toFixed(4),
      OAD: Tt.toFixed(4),
      UHQ: pt,
      GIF: Dt,
      CKA2: mt
    });
    else if (e.startsWith("16")) Gt = Fn(e, 2), vt = Fn(e, 10), At = Fn(e, 18), wt = Fn(e, 26), Et = hn(e, 34), Ut = hn(e, 36), bt = .01 * hn(e, 38), n.setData({
      L2V: Gt,
      H2V: vt,
      USD: At,
      NTC: Et,
      DDT: Ut,
      CLV: bt,
      SDU: wt
    });
    else if (e.startsWith("17")) It = .01 * Fn(e, 2), Ot = .01 * Fn(e, 10), xt = Fn(e, 18), Nt = Fn(e, 26), Mt = hn(e, 34), Wt = hn(e, 36), Vt = hn(e, 38), n.setData({
      O2D: Ot.toFixed(4),
      O2T: It.toFixed(4),
      OVS: xt,
      OAS: Nt,
      UEG: Mt,
      UCN: Wt,
      MFS: Vt
    });
    else if (e.startsWith("18")) Pt = Fn(e, 2), Rt = Fn(e, 10), Lt = Fn(e, 18), Kt = Fn(e, 26), yt = hn(e, 34), kt = hn(e, 36), Ht = hn(e, 38), n.setData({
      YCA: Pt,
      YCV: Rt,
      DOL: yt,
      DST: kt,
      LKS: Ht,
      TCH: Kt,
      OST: Lt
    });
    else if (e.startsWith("19")) Yt = Fn(e, 2), $t = Fn(e, 10), jt = hn(e, 34), zt = hn(e, 36), Zt = hn(e, 38), n.setData({
      UI: jt,
      MMA: Yt,
      MMV: $t,
      RDY: zt,
      SGK: Zt
    });
    else if (e.startsWith("20")) {
      var we = rn(e.substring(2, 40));
      n.setData({
        SSID: we
      })
    } else if (e.startsWith("21")) n.setData({
      UPWD: rn(e.substring(2, 40))
    });
    else if (e.startsWith("22")) {
      var Ee = rn(e.substring(2, 40)),
        be = (0, Jt.GetCFG)("WID", Ee);
      Ee != be && _e("AB00" + on(Ee = unescape(encodeURIComponent(be)))), n.setData({
        WID: be
      })
    } else if (e.startsWith("23")) {
      var Ie = rn(e.substring(2, 40)),
        xe = (0, Jt.GetCFG)("WPD", Ie);
      Ie != xe && _e("AB01" + on(Ie = unescape(encodeURIComponent(xe)))), n.setData({
        WPD: xe
      })
    } else if (e.startsWith("24")) n.setData({
      LKV: rn(e.substring(2, 40))
    });
    else if (e.startsWith("25")) n.setData({
      VIN: rn(e.substring(2, 40))
    });
    else if (e.startsWith("50")) je(hn(e, 2), hn(e, 4), hn(e, 6), hn(e, 8));
    else if (e.startsWith("51")) je(0, 0, 0, 0, hn(e, 2), hn(e, 4), hn(e, 6), hn(e, 8));
    else if (e.startsWith("40")) Ye(hn(e, 2), hn(e, 4), hn(e, 6), hn(e, 8), hn(e, 10), hn(e, 12), 0);
    else if (e.startsWith("D1") || e.startsWith("D0")) {
      if (2 != ae) return;
      var Me = e.substring(2, 10),
        We = [e.substring(10, 12), e.substring(12, 14), e.substring(14, 16), e.substring(16, 18), e.substring(18, 20), e.substring(20, 22), e.substring(22, 24), e.substring(24, 26)],
        Ve = parseInt(Me, 16);
      if (405206102 == Ve) 38, console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "电桩", "握手信息");
      else if (402781270 == Ve) console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "电桩", "车辆识别" + We[0]);
      else if (485291094 == Ve) "11" == We[0] ? console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "电桩", "同意收包" + We[6]) : "13" == We[0] && console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "电桩", "收包完成" + We[6]);
      else if (403174486 == Ve) console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "电桩", "同步时间" + We[0] + We[1]);
      else if (403240022 == Ve) {
        9;
        var Pe = parseInt(We[1] + We[0], 16),
          Le = parseInt(We[3] + We[2], 16),
          Ke = parseInt(We[5] + We[4], 16),
          ye = parseInt(We[7] + We[6], 16);
        console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "电桩", "充电范围:电压" + Le + "-" + Pe + " 电流" + ye + "-" + Ke)
      } else if (269153366 == Ve) console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "电桩", "准备就绪" + We[0]);
      else if (403895382 == Ve) {
        var ke = parseInt(We[1] + We[0], 16),
          He = parseInt(We[3] + We[2], 16),
          qe = parseInt(We[5] + We[4], 16);
        console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "电桩", "输出信息:V" + ke + " A" + He + " T" + qe)
      } else if (270201942 == Ve) 26, console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "电桩", "中止充电");
      else if (136311894 == Ve) 31, console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "电桩", "充电器错");
      else if (405231348 == Ve) {
        var Xe = parseInt(We[1] + We[0], 16);
        console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "取电器", "绝缘信息:" + Xe)
      } else if (269047540 == Ve) console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "取电器", "电池就绪:" + We[0]);
      else if (403724020 == Ve) {
        var en = .1 * parseInt(We[1] + We[0], 16),
          nn = .1 * parseInt(We[3] + We[2], 16);
        console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "取电器", "需求信息:V" + en + " A" + nn)
      } else if (485250804 == Ve) console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "取电器", "请求多包:" + We[6]);
      else if (485185268 == Ve) console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "取电器", "多包数据");
      else if (403920628 == Ve) console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], "取电器", "车辆状态");
      else {
        var sn = 244 == (255 & Ve) ? "取电器" : "电桩";
        console.log(Me, We[0], We[1], We[2], We[3], We[4], We[5], We[6], We[7], sn, "未知")
      }
    }
  },
  onLoad: function (a) {
    n = this, oe = 0, Je = 0, i = 0, o = 0, se = 0, Fe = 0, he = 0, ye[0] = 1, ye[1] = 1, ye[2] = 1, ye[3] = 1, ye[4] = 1, ye[5] = 1, ye[6] = 1, ye[7] = 1, ne = Number(a.Test) || 0, ee = Number(a.CEV) || 0, se = Number(a.ODM) || 0, xe();
    var r = wx.getAccountInfoSync();
    ie = "trial" == r.miniProgram.envVersion ? 1 : "develop" == r.miniProgram.envVersion ? 2 : 0, Ee = 0;
    var s = wx.getDeviceInfo();
    console.log("SYSINF", s.abi, s.benchmarkLevel, s.brand, s.model, s.platform, s.system), (0, Jt.GetGIF)(1).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var c = RegExp.$2;
    (0, Jt.GetGIF)(2).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var u = RegExp.$2;
    (0, Jt.GetGIF)(3).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var f = RegExp.$2;
    (0, Jt.GetGIF)(4).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var F = RegExp.$2;
    (0, Jt.GetGIF)(5).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var h = RegExp.$2;
    ve[1] = (0, Jt.GetCFG)("BGP1", "https://dingyue.ws.126.net/2022/0808/701db340g00rg9pym02h5d200cs00leg00it00vh.gif"), ve[2] = (0, Jt.GetCFG)("BGP2", "https://img2.baidu.com/it/u=2215745416,4118415336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422"), ve[3] = (0, Jt.GetCFG)("BGP3", "https://c-ssl.dtstatic.com/uploads/item/201912/08/20191208175320_skjmi.thumb.1000_0.jpg"), ve[4] = (0, Jt.GetCFG)("BGP4", "https://wx4.sinaimg.cn/mw690/9f2299eegy1hqwec2a3ncj21kw2dcx6p.jpg"), H = (0, Jt.GetCFG)("UEN"), ae = (0, Jt.GetCFG)("DEBUG"), Ae = (0, Jt.GetCFG)("BGI", 0), we = (0, Jt.GetCFG)("BGT", "80"), t = (0, Jt.GetCFG)("WID", "config"), e = (0, Jt.GetCFG)("WPD", "88888888"), n.setData({
      WID: t,
      WPD: e
    });
    var l = (0, Jt.GetCFG)("ShowM");
    n.setData({
      GIF1: "data:image/gif;base64," + c,
      GIF2: "data:image/gif;base64," + u,
      GIF3: "data:image/gif;base64," + f,
      GIF4: "data:image/gif;base64," + F,
      GIF5: "data:image/gif;base64," + h,
      UEN: H,
      ShowM: l,
      RollV: "5.35(稳定版)",
      TestV: "5.44(测试一)",
      RoCEV: "5.40",
      UPDate: "5.43",
      APP: "1.29",
      GM: ie,
      ADD: Ee,
      CAN: te,
      CEV: ee,
      BGI: Ae,
      BGT: parseInt(we, 16),
      BGC: "#000000" + we,
      ODM: se,
      BGP: ve[Ae],
      BGP1: ve[1],
      BGP2: ve[2],
      BGP3: ve[3],
      BGP4: ve[4]
    }), ne && (Ie[0] = "1", Ie[1] = "2", Ie[2] = "3", Ie[3] = "4", ee ? this.MSG("", "EEA47210A4AE300E0" + 545..toString(16) + "43786A64777800000000") : this.MSG("", "EEA47210A4AE30010" + 545..toString(16) + "323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000021340000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), ce || (ce = 1, Xt.onReconnected((function () {
      n.AutoLogin()
    })), Xt.onBLEConnectionStateChange((function () {
      i || (i = 1, Re("蓝牙信号丢失", "Bluetooth Disconnected", "通常是关机或信号弱或干扰大导致", "Blue abnormal interruption is usually caused by shutdown, weak signal, or significant signal interference", "我知道了", "Yes I Kown", (function (t) {
        n.navigateBack({
          delta: 0
        })
      }))), n.navigateBack({
        delta: 0
      })
    })), Xt.onBLECharacteristicValueChange1(this.MSG)), n.AutoLogin()
  },
  AutoLogin: function () {
    oe = 0, Je = 0, i = 0, o = 0, se = 0, Fe = 0, he = 0, oe = 3, _e("A0" + on("0000")), _e("EE"), setTimeout((function () {
      3 == oe && (oe = 0, _e("A0" + on((0, Jt.GetCFG)(G, "0000"))), console.log("Re login:1")), "0" == o && _e("EE")
    }), 1500), setTimeout((function () {
      3 == oe && (oe = 0, _e("A0" + on((0, Jt.GetCFG)(G, "0000"))), console.log("Re login:1")), "0" == o && _e("EE")
    }), 2500)
  },
  navigateBack: function (t) {
    Ue.navigateBack({
      delta: 0
    })
  },
  onUnload: function () {
    i = 1, Xt.closeBLEConnection(), console.log("Unload")
  },
  onShow: function (t) {
    i = 0, wx.hideHomeButton()
  },
  onHide: function () {
    i = 1
  }
});