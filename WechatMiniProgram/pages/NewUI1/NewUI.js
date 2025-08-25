var t, e, n, a, i, o, r, s, c, u, f, F, h, C, S, l, d, g, B, T, D, m, p, G, A, E, v, U, w, I, b, O, x, N, M, P, V, W, R, L, K, y, Y, k, H, $, j, Z, z, _, J, q, Q, X, tt, et, nt, at, it, ot, rt, st, ct, ut, ft, Ft, ht, Ct, St, lt, dt, gt, Bt, Tt, Dt, mt, pt, Gt, At, Et, vt, Ut, wt, It, bt, Ot, xt, Nt, Mt, Pt, Vt, Wt, Rt, Lt, Kt, yt, Yt, kt, Ht, $t, jt, Zt, zt, _t, Jt, qt, Qt, Xt, te, ee, ne, ae, ie = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  oe = require("../../@babel/runtime/helpers/asyncToGenerator"),
  re = require("../../4186A4619E166AAF27E0CC66B95456D5.js"),
  se = require("../../6AF67F959E166AAF0C901792E56456D5.js"),
  ce = 1,
  ue = 0,
  fe = 0,
  Fe = 0,
  he = 0,
  Ce = 0,
  Se = "设备连接成功",
  le = 0,
  de = 0,
  ge = 0,
  Be = 30,
  Te = 0,
  De = 0,
  me = 0,
  pe = 0,
  Ge = 0,
  Ae = 1,
  Ee = "欢迎使用",
  ve = "1,27,30,欢迎",
  Ue = "1,57,30,使用",
  we = 0,
  Ie = "ff",
  be = "ff",
  Oe = "ff",
  xe = ["/img/bc1.gif", "", "", "", ""],
  Ne = 0,
  Me = "80",
  Pe = 0,
  Ve = wx,
  We = "#ffffff",
  Re = ["1", "2", "3", "4"],
  Le = 0;

function Ke() {
  return 0 == Le && 0 == (Le = (0, re.GetCFG)("RSID")) && (Le = function () {
    for (var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", e = "", n = 0; n < 12; n++) {
      var a = Math.floor(Math.random() * t.length);
      e += t[a]
    }
    return e
  }(), (0, re.SetCFG)("RSID", Le)), Le
}

function ye() {
  var t = new Date;
  an("FD48" + Cn(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()))
}

function Ye(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  Ve.showModal({
    title: t,
    editable: true,
    placeholderText: e,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      t.confirm && n(t.content)
    }
  })
}

function ke(t, e, n, a) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ve.showModal({
    title: k ? e : t,
    editable: true,
    placeholderText: (k ? "Range:" : "范围:") + n + "-" + a,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(a) || e < Number(n) || !isFinite(e)) && 2 != he) return void(0, re.Toast)(k ? "Beyond the set range!" : "超出设置范围!");
        i(e)
      }
    }
  })
}

function He(t, e, n, a) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ve.showModal({
    title: k ? e : t,
    editable: true,
    placeholderText: k ? a : n,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, re.Toast)(k ? "Input Cannot Be Empty!" : "输入不能为空!");
        i(e)
      }
    }
  })
}

function $e(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ve.showModal({
    title: k ? e : t,
    content: k ? a : n,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      t.confirm && i(t)
    }
  })
}

function je(t, e, n, a, i, o) {
  var r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function () {};
  Ve.showModal({
    title: k ? e : t,
    content: k ? a : n,
    confirmText: k ? o : i,
    showCancel: false,
    success: function (t) {
      r(t)
    }
  })
}
var Ze = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "温度 异常", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"],
  ze = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  _e = [1, 1, 1, 1, 1, 1, 1, 1];

function Je(t) {
  for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, n = 0, a = 0; a < 12; a++)
    if (Ze[a] == t) {
      ze[a] = e, n = 1;
      break
    } if (!n && e)
    for (var i = 1; i < 11; i++)
      if (6 != i && 0 == ze[i]) {
        Ze[i] = t, ze[i] = e;
        break
      }
}

function qe() {
  var t = [Ze[0].split(" "), Ze[1].split(" "), Ze[2].split(" "), Ze[3].split(" "), Ze[4].split(" "), Ze[5].split(" "), Ze[6].split(" "), Ze[7].split(" "), Ze[8].split(" "), Ze[9].split(" "), Ze[10].split(" "), Ze[11].split(" ")];
  n.setData({
    E1S: ze[0],
    E1A: t[0][0],
    E1B: t[0][1],
    E2S: ze[1],
    E2A: t[1][0],
    E2B: t[1][1],
    E3S: ze[2],
    E3A: t[2][0],
    E3B: t[2][1],
    E4S: ze[3],
    E4A: t[3][0],
    E4B: t[3][1],
    E5S: ze[4],
    E5A: t[4][0],
    E5B: t[4][1],
    E6S: ze[5],
    E6A: t[5][0],
    E6B: t[5][1],
    E7S: ze[6],
    E7A: t[6][0],
    E7B: t[6][1],
    E8S: ze[7],
    E8A: t[7][0],
    E8B: t[7][1],
    E9S: ze[8],
    E9A: t[8][0],
    E9B: t[8][1],
    EAS: ze[9],
    EAA: t[9][0],
    EAB: t[9][1],
    EBS: ze[10],
    EBA: t[10][0],
    EBB: t[10][1],
    ECS: ze[11],
    ECA: t[11][0],
    ECB: t[11][1]
  })
}

function Qe() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  _e[0] == t && _e[1] == e && _e[2] == n && _e[3] == a && _e[4] == i && _e[5] == o && _e[6] == r || (ze = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], _e[0] = t, _e[1] = e, _e[2] = n, _e[3] = a, _e[4] = i, _e[5] = o, _e[6] = r, Ze = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"], 128 & t && Je("测试 模式"), 64 & t && Je("负载 震荡"), 32 & t && Je("输出 继电器"), 16 & t && Je("放电 电路"), 8 & t && Je("继电器 电路"), 4 & t && Je("短路 锁死"), 2 & t && Je("硬件 地址"), 1 & t && Je("放电 电路"), 128 & e && Je("更换 地址"), 64 & e && Je("地址 冲突"), 32 & e && Je("均流 屏蔽"), 16 & e && Je("通讯 异常"), 8 & e && Je("电容 电压"), 4 & e && Je("输出 过压"), 2 & e && Je("输出 模式"), 1 & e && Je("插座 异常"), 128 & n && Je("母线 电压"), 64 & n && Je("母线 平衡"), 32 & n && Je("输入 停电"), 16 & n && Je("恒流 状态"), 8 & n && Je("输出 短路"), 4 & n && Je("内部 通讯"), 2 & n && Je("效率 寻优"), 1 & n && Je("均流 异常"), 128 & a && Je("PFC 故障"), 64 & a && Je("输入 过压"), 32 & a && Je("ID 重复"), 16 & a && Je("严重 均流"), 8 & a && Je("交流 缺相"), 4 & a && Je("三项 平衡"), 2 & a && Je("输入 欠压"), 1 & a && Je("顺序 启机"), 128 & i && Je("通讯 质量"), 64 & i && Je("自动 模式"), 32 & i && Je("地址 重排"), 16 & i && Je("内部 过温"), 2 & i && Je("模块 关机"), 1 & i && Je("低温 保护"), 128 & o && Je("输出 欠压"), 64 & o && Je("输出 过流"), 32 & o && Je("存储 芯片"), 16 & o && Je("风机 故障"), 8 & o && Je("模块 保护"), 4 & o && Je("模块 故障"), 2 & o && Je("超温 保护"), 1 & o && Je("过压 锁死"), qe())
}

function Xe() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  _e[0] == t && _e[1] == e && _e[2] == n && _e[3] == a && _e[4] == i && _e[5] == o && _e[6] == r || (ze = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], _e[0] = t, _e[1] = e, _e[2] = n, _e[3] = a, _e[4] = i, _e[5] = o, _e[6] = r, Ze = ["超温 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "恒流 状态", "输出 过流", "输出 欠压", "输出 过压", "输出 过载", "模块 关机"], 128 & t && Je("输出 保险"), 64 & t && Je("内部 过温"), 32 & t && Je("输出 过流"), 16 & t && Je("输出 高关"), 8 & t && Je("输入 低关"), 4 & t && Je("输入 高关"), 2 & t && Je("过温 关机"), 1 & t && Je("风机 异常"), 128 & e && Je("PFC 过流"), 64 & e && Je("原边 过流"), 32 & e && Je("内部 通讯"), 16 & e && Je("EEP ROM"), 8 & e && Je("PFC 欠压"), 4 & e && Je("PFC 过压"), 1 & e && Je("均流 异常"), 32 & n && Je("输出 过载"), 16 & n && Je("PFC 故障"), 8 & n && Je("输出 欠压"), 4 & n && Je("输入 频率"), 2 & n && Je("输入 熔断"), 1 & n && Je("启动 异常"), 128 & a && Je("DUS4 欠压"), 64 & a && Je("BUS3 欠压"), 32 & a && Je("BUS2 欠压"), 16 & a && Je("BUS1 欠压"), 8 & a && Je("启动 电阻"), 4 & a && Je("机外 过温"), 2 & a && Je("匹配 异常"), 128 & i && Je("输入 停电"), 64 & i && Je("输入 欠压"), 32 & i && Je("输入 过压"), 16 & i && Je("BUS 平衡"), 8 & i && Je("BUS4 过压"), 4 & i && Je("BUS3 过压"), 2 & i && Je("BUS2 过压"), 1 & i && Je("BUS1 过压"), 64 & o && Je("模块 关机"), 32 & o && Je("模块 休眠"), 8 & o && Je("输入 功率"), 4 & o && Je("超温 功率"), 2 & o && Je("恒流 状态"), 1 & o && Je("输出 功率"), 128 & r && Je("启动 未接"), 32 & r && Je("插座 过温"), 16 & r && Je("输入 反接"), 8 & r && Je("机内 过温"), 4 & r && Je("输出 过流"), 2 & r && Je("输出 欠压"), 1 & r && Je("输出 过压"), qe())
}

function tn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
    s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
  _e[0] == t && _e[1] == e && _e[2] == n && _e[3] == a && _e[4] == i && _e[5] == o && _e[6] == r && _e[7] == s || (ze = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], _e[0] = t, _e[1] = e, _e[2] = n, _e[3] = a, _e[4] = i, _e[5] = o, _e[6] = r, _e[7] = s, Ze = ["正常 中止", "电桩 温度", "枪头 异常", "内部 过温", "充电 异常", "电桩 急停", "其他 异常", "自检 异常", "预充 异常", "电流 异常", "电压 异常", "参数 异常"], 3 & t ? Je("正常 中止") : t >> 2 & 3 ? Je("人工 中止") : t >> 4 & 3 ? Je("故障 中止") : t >> 6 & 3 && Je("车辆 中止"), 3 & e ? Je("电桩 温度") : e >> 2 & 3 ? Je("枪头 异常") : e >> 4 & 3 ? Je("内部 过温") : e >> 6 & 3 && Je("充电 异常"), 3 & n ? Je("电桩 急停") : n >> 2 & 3 ? Je("其他 异常") : n >> 4 & 3 ? Je("自检 异常") : n >> 6 & 3 && Je("预充 异常"), 3 & a ? Je("电流 异常") : a >> 2 & 3 ? Je("电压 异常") : a >> 4 & 3 && Je("参数 异常"), 3 & i && Je("BRM 超时"), 3 & o && Je("BCP 超时"), o >> 2 & 3 && Je("BRO 超时"), 3 & r && Je("BCS 超时"), r >> 2 & 3 && Je("BCL 超时"), r >> 4 & 3 && Je("BST 超时"), 3 & s && Je("BSD 超时"), s >> 2 & 3 && Je("BSM 超时"), s >> 4 & 3 && Je("其他 超时"), qe())
}

function en() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  _e[0] == t && _e[1] == e && _e[2] == n || (ze = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], _e[0] = t, _e[1] = e, _e[2] = n, Ze = ["输入 过压", "输出 过压", "恒压 状态", "过热 保护", "风机 故障", "模块 关机", "输入 欠压", "输出 欠压", "恒流 状态", "过流 保护", "模块 故障", "设置 关机"], 128 & t && Je("输出 欠压"), 64 & t && Je("输出 过压"), 32 & t && Je("输入 欠压"), 16 & t && Je("输入 过压"), 8 & t && Je("风机 故障"), 4 & t && Je("恒流 状态"), 2 & t && Je("模块 故障"), 1 & t && Je("模块 关机"), 0 == t && c > 20 && Je("恒压 状态"), 4 & e && Je("设置 关机"), 2 & e && Je("过热 保护"), 1 & e && Je("过流 保护"), qe())
}

function nn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  _e[0] == t && _e[1] == e && _e[2] == n || (ze = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], _e[0] = t, _e[1] = e, _e[2] = n, Ze = ["输入 过压", "输出 过压", "功率 限制", "过热 保护", "风机 故障", "模块 关机", "输入 欠压", "输出 欠压", "恒流 状态", "过流 保护", "模块 故障", "设置 关机"], 32 & t && Je("放电 异常"), 16 & t && Je("模块 休眠"), 8 & t && Je("输入 异常"), 4 & t && Je("内部 通讯"), 1 & t && Je("输出 短路"), 128 & e && Je("通讯 异常"), 64 & e && Je("缓启 打开"), 32 & e && Je("输出 过压"), 16 & e && Je("过温 告警"), 8 & e && Je("风机 故障"), 4 & e && Je("模块 保护"), 2 & e && Je("模块 故障"), 1 & e && Je("模块 关机"), 128 & n && Je("PFC 关机"), 64 & n && Je("输入 过压"), 32 & n && Je("输入 欠压"), 16 & n && Je("三相 平衡"), 8 & n && Je("三相 缺相"), 4 & n && Je("均流 异常"), 2 & n && Je("ID 重复"), 1 & n && Je("恒流 状态"), qe())
}

function an(t) {
  return on.apply(this, arguments)
}

function on() {
  return (on = oe(ie().mark((function t(e) {
    return ie().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (1 == Fe && console.log("Send", e), 0 == sn) {
            t.next = 4;
            break
          }
          return (0, re.Toast)(k ? "There Are Unfinished Sending Tasks" : "有发送任务未完成"), t.abrupt("return");
        case 4:
          return t.next = 6, se.easySendData1(e, true);
        case 6:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var rn = [""],
  sn = 0;

function cn(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  0 == sn ? Ve.showModal({
    title: k ? "Confirm Whether To Send" : "确认是否发送",
    editable: false,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (a) {
      if (a.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), sn = 0, (rn = [])[0] = "F1" + (n ? RegExp.$1 : Cn(RegExp.$1));
        for (var i = e ? RegExp.$2 : fn(RegExp.$2), o = 0; o < i.length; o += 240) sn++, rn[sn] = "F2" + i.slice(o, o + 240);
        rn[rn.length] = "F3", sn = 0, un()
      }
    }
  }) : (0, re.Toast)(k ? "There Are Unfinished Sending Tasks" : "有发送任务未完成")
}

function un(t) {
  var e = rn[sn];
  se.easySendData1(e, true), (0, re.Toast)((k ? "Sending:" : "发送进度:") + (sn / rn.length * 100).toFixed(2) + "%"), sn++
}

function fn(t) {
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

function Fn(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function hn(t) {
  var e = Math.floor(t / 3600),
    n = Math.floor(t % 3600 / 60),
    a = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(n).padStart(2, "0") + ":" + String(a).padStart(2, "0")
}

function Cn(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var n = "", a = 0; a < t.length; a++) n += t.charCodeAt(a).toString(16).padStart(2, "0");
  return e && (n = n.padEnd(2 * e, "0")), n
}

function Sn(t) {
  for (var e = "", n = 0, a = "", i = 0; i < t.length / 2; i++) {
    var o = t.substr(2 * i, 2),
      r = parseInt(o, 16);
    if (0 == r) break;
    n && r ? (a += "%" + o, (n -= 1) || (e += decodeURIComponent(a), a = "")) : r >= 224 & r <= 239 ? (a += "%" + o, n = 2) : r && (e += String.fromCharCode(r))
  }
  return e
}

function ln(t) {
  return Math.floor(100 * t).toString(16).padStart(8, "0")
}

function dn(t) {
  return Math.floor(t).toString(16).padStart(4, "0")
}

function gn(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function Bn(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    i = t.getFloat32(e, true).toFixed(n);
  return a ? parseFloat(i) : i
}

function Tn(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    a = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return n ? parseFloat(a) : a
}

function Dn(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}
Page({
  data: {
    nbsp: "　",
    Cr50: "#000000",
    Cr0: We,
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: We,
    Cr4: "#60ffc8",
    Cr5: We,
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: We,
    Cr10: We,
    Cr11: "#00ff00",
    Cr12: "#00c8ff",
    Cr13: "#ff9430",
    Cr14: "#60ffc8",
    Cr15: We,
    Cr16: "#f80ca0",
    Cr17: We,
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
  BTUJY: function (t) {
    this.setData({
      ShowBar: 30 != this.data.ShowBar ? 30 : -1
    })
  },
  BTTCH5: function (t) {
    this.setData({
      ShowBar: 31 != this.data.ShowBar ? 31 : -1
    })
  },
  uset: function (t) {
    an("FF01"), (2 == Ce || he) && this.setData({
      Panel: he ? 2 : 3,
      ShowBar: he ? 0 : ce < Number("5.47") ? 4 : 25,
      LOGO: k ? "Preview" : "预览"
    })
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, re.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    2 == he ? (an("CA"), n.navigateBack({
      delta: 0
    })) : He("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      an("FA75" + Cn(t))
    }))
  },
  BTRST: function (t) {
    $e("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      an("F60100"), (0, re.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTRST1: function (t) {
    ce > 5.39 && $e("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置并重启", "Exception repair will detect and reset certain settings", (function (t) {
      an("F60001"), (0, re.Toast)(k ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    $e("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      an("F001"), (0, re.Toast)(k ? "The device is restarting" : "设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    $e("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      an("AA01"), (0, re.Toast)(k ? "Data cleared to zero" : "数据已清零!"), n.navigateBack({
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
    an("AC00"), an("FF18")
  },
  DST2: function (t) {
    an("AC01"), an("FF18")
  },
  DST3: function (t) {
    an("AC02"), an("FF18")
  },
  DST4: function (t) {
    an("AC03"), an("FF18")
  },
  BTUJY1: function (t) {
    an("F9E3" + gn(1 - Xt)), an("FF10")
  },
  BTUJY2: function (t) {
    ke("设置静音模式最大电流", "Set the maximum current for silent mode", "5", "255", (function (t) {
      an("F9E6" + gn(t)), an("FF10")
    }))
  },
  BTUJY3: function (t) {
    ke("设置静音模式最大风速", "Set the maximum wind speed for silent mode", "100", "200", (function (t) {
      an("F9E4" + gn(t)), an("FF10")
    }))
  },
  BTUJY4: function (t) {
    an("F9E5" + gn(1 - ee)), an("FF10")
  },
  BTUJY5: function (t) {
    ee && Xt && n.BTUJY3()
  },
  BTKT1: function (t) {
    an("A4" + gn(1 - j))
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), ke("设置输出最大功率", "Set maximum output power", "500", "50000", (function (t) {
      an("F84E" + ln(t)), an("F84D" + ln(t)), an("FF12")
    }))
  },
  IMGBT: function (t) {},
  BTLOGO0: function (t) {
    if ("预览" == n.data.LOGO || "Preview" == n.data.LOGO) Ve.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: true
    }), n.SetLOGO(ve + "|" + Ue, n);
    else if ("发送" == n.data.LOGO || "Send" == n.data.LOGO) {
      return cn(s, 1), void an("FAD2" + Cn(unescape(encodeURIComponent(Ee))))
    }
    n.setData({
      ShowBar: 20,
      LOGO: k ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (t) {
    He("设置第一行LOGO", "Set the first line logo", ve, ve, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) ve = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) ve = "1,27,30," + RegExp.$1, Ue = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, re.Toast)(k ? "Input format error" : "输入格式错误");
        ve = "1,27,30," + RegExp.$1
      }
      n.setData({
        LOGO1: ve,
        LOGO2: Ue,
        LOGO: k ? "Preview" : "预览"
      }), n.BTLOGO0()
    }))
  },
  BTLOGO2: function (t) {
    He("设置第二行LOGO", "Set second line logo", Ue, Ue, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Ue = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) ve = "1,27,30," + RegExp.$1, Ue = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, re.Toast)(k ? "Input format error" : "输入格式错误");
        Ue = "1,57,30," + RegExp.$1
      }
      n.setData({
        LOGO1: ve,
        LOGO2: Ue,
        LOGO: k ? "Preview" : "预览"
      }), n.BTLOGO0()
    }))
  },
  BTLOGO3: function (t) {
    an("F9C0" + gn(1 - Pt)), an("FF17")
  },
  BTLOGO4: function (t) {
    He("设置简约模式文字", "Set the first line logo", "最多6个汉字或者12个英文", ve, (function (t) {
      an("FAD2" + Cn(t = unescape(encodeURIComponent(t)))), an("F7")
    }))
  },
  SetLOGO: function (t, e) {
    Ve.createSelectorQuery().select("#LOGO").fields({
      node: true,
      size: true
    }).exec((function (n) {
      var a = n[0].node,
        i = a.getContext("2d");
      a.width = 60, a.height = 60, i.fillStyle = "#000", i.scale(1, 1), i.fillRect(0, 0, 60, 60), i.fillStyle = "#fff";
      var o = t.split("|");
      Ee = "";
      for (var r = 0; r < o.length; r += 1) {
        var c = o[r].split(",");
        Ee += c[3];
        var u = c[0],
          f = c[1],
          F = c[2],
          h = c[3];
        i.font = "normal " + F + "px Kaiti", i.fillText(h, u, f)
      }
      var C = [0],
        S = -1;
      s = "DataStart=LOGO{";
      for (var l = 0; l < 60; l += 1) {
        for (var d = i.getImageData(0, l, 60, 1).data, g = 0; g < 60; g += 1) {
          g % 8 == 0 && (g && (s += C[S].toString(16).padStart(2, "0")), S += 1);
          var B = .299 * d[4 * g] + .587 * d[4 * g + 1] + .114 * d[4 * g + 2];
          C[S] = C[S] >> 1, C[S] = C[S] | (B < 100 ? 0 : 128)
        }
        s += (C[S] >> 4).toString(16).padStart(2, "0")
      }
      s += "}DataEnd", Ve.hideToast(), e.setData({
        LOGO: k ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    $e("是否切温度采集点", "Confirm whether to switch temperature collection points", "无特殊情况请勿修改此值", "Under normal circumstances, there is no need to modify this value", (function (t) {
      an("F962" + gn(1 - wt)), an("FF16")
    }))
  },
  SetCAN: function (t, e, a) {
    $e("确认是否切换为" + t, "Switch to " + e, "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == he) {
        for (var e = parseInt(G, 16), i = e.toString(), o = 0, r = 0; r < i.length; r++) o += i.charCodeAt(r);
        an("C8FF" + Math.floor(Math.floor(e / 611) * o).toString(16).slice(-6) + a)
      }
      an("FC53" + a + "01"), (0, re.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTCAN1: function (t) {
    n.SetCAN("华为", "Huawei", "01")
  },
  BTCAN2: function (t) {
    n.SetCAN("英可瑞", "Increase", "02")
  },
  BTCAN4: function (t) {
    n.SetCAN("中兴3000", "ZTE3000", "04")
  },
  BTCAN8: function (t) {
    n.SetCAN("英飞源", "Infy", "08")
  },
  BTCAN16: function (t) {
    n.SetCAN("EPS6020", "EPS6020", "10")
  },
  BTCAN32: function (t) {
    n.SetCAN("中兴4875", "ZTE4875", "20")
  },
  BTCAN64: function (t) {
    n.SetCAN("SER10010K", "SER10010K", "40")
  },
  BTCAN65: function (t) {
    n.SetCAN("BH10M100", "BH10M100", "41")
  },
  BTCAN66: function (t) {
    n.SetCAN("MC1503N5R", "MC1503N5R", "42")
  },
  BTCAN67: function (t) {
    n.SetCAN("R24-2200", "R24-2200", "43")
  },
  BTCAN13: function (t) {
    n.SetCAN("ZEEHO", "ZEEHO", "0D")
  },
  BTCAN14: function (t) {
    n.SetCAN("EV_Charger", "EV_Charger", "0E")
  },
  BTLEDK2: function (t) {
    ke("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      an("F968" + gn(t)), an("FF13")
    }))
  },
  BTLEDK1: function (t) {
    ke("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      an("F969" + gn(t)), an("FF13")
    }))
  },
  BTLEDKS1: function (t) {
    ke("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      an("F96D" + gn(t)), an("FF12")
    }))
  },
  BTLEDKS2: function (t) {
    ke("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      an("F96A" + gn(t)), an("FF13")
    }))
  },
  BTStart1: function (t) {
    ke("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      an("F96B" + gn(t)), an("FF12")
    }))
  },
  BTStart2: function (t) {
    an("F96C" + gn(1 - X)), an("FF12")
  },
  BTGIF1: function (t) {
    an("F96F" + gn(1 - pt)), an("FF15")
  },
  BT_GIF1: function (t) {
    cn((0, re.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    cn((0, re.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    cn((0, re.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    cn((0, re.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    cn((0, re.GetGIF)(5))
  },
  BTUI: function (t) {
    n.setData({
      CVer: ce.toFixed(2),
      SCAN: o,
      ID: G,
      ACT: a
    }), an("F9C8" + gn(1 - _t)), an("FF19")
  },
  Scr1: function (t) {
    Ae = 1, n.setData({
      Cr0: We,
      Cr1: "#00ff00",
      Cr2: "#00c8ff",
      Cr3: We,
      Cr4: "#60ffc8",
      Cr5: We,
      Cr6: "#ff9430",
      Cr7: "#f80ca0",
      Cr8: We,
      Cr10: We,
      Cr11: "#00ff00",
      Cr12: "#00c8ff",
      Cr13: "#ff9430",
      Cr14: "#60ffc8",
      Cr15: We,
      Cr16: "#f80ca0",
      Cr17: We,
      Crs: Ae
    })
  },
  Scr2: function (t) {
    Ae = 2, n.setData({
      Cr0: We,
      Cr1: We,
      Cr2: We,
      Cr3: We,
      Cr4: We,
      Cr5: We,
      Cr6: We,
      Cr7: We,
      Cr8: We,
      Cr10: We,
      Cr11: We,
      Cr12: We,
      Cr13: We,
      Cr14: We,
      Cr15: We,
      Cr16: We,
      Cr17: We,
      Crs: Ae
    })
  },
  Scr3: function (t) {
    Ae = 3, n.setData({
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
      Crs: Ae
    })
  },
  Scr4: function (t) {
    Ae = 0, n.setData({
      Cr0: (0, re.GetCFG)("Cr0", We),
      Cr1: (0, re.GetCFG)("Cr1", "#00ff00"),
      Cr2: (0, re.GetCFG)("Cr2", "#00c8ff"),
      Cr3: (0, re.GetCFG)("Cr3", We),
      Cr4: (0, re.GetCFG)("Cr4", "#60ffc8"),
      Cr5: (0, re.GetCFG)("Cr5", We),
      Cr6: (0, re.GetCFG)("Cr6", "#ff9430"),
      Cr7: (0, re.GetCFG)("Cr7", "#f80ca0"),
      Cr8: (0, re.GetCFG)("Cr8", We),
      Cr10: (0, re.GetCFG)("Cr10", We),
      Cr11: (0, re.GetCFG)("Cr11", "#00ff00"),
      Cr12: (0, re.GetCFG)("Cr12", "#00c8ff"),
      Cr13: (0, re.GetCFG)("Cr13", "#ff9430"),
      Cr14: (0, re.GetCFG)("Cr14", "#60ffc8"),
      Cr15: (0, re.GetCFG)("Cr15", We),
      Cr16: (0, re.GetCFG)("Cr16", "#f80ca0"),
      Cr17: (0, re.GetCFG)("Cr17", We),
      Crs: Ae
    })
  },
  BTCr1: function (t) {
    0 == n.data.UI ? (an("F5280000000000" + Fn(this.data.Cr50)), an("F53000" + Fn(this.data.Cr0) + "0000f01c"), an("F53100" + Fn(this.data.Cr1) + "00209F26"), an("F53200" + Fn(this.data.Cr2) + "00479F26"), an("F53300" + Fn(this.data.Cr3) + "006e9F27"), an("F53400" + Fn(this.data.Cr4) + "00969F3f"), an("F53500" + Fn(this.data.Cr5) + "A3204d4d"), an("F53600" + Fn(this.data.Cr6) + "50d64f1A"), an("F53700" + Fn(this.data.Cr7) + "00d64f1A"), an("F53801" + Fn(this.data.Cr8) + "A3774d68")) : 1 == n.data.UI && (an("F52000" + Fn(this.data.Cr10) + "0000781c"), an("F52100" + Fn(this.data.Cr11) + "001cf02e"), an("F52200" + Fn(this.data.Cr12) + "004af02e"), an("F52300" + Fn(this.data.Cr13) + "0078f02e"), an("F52400" + Fn(this.data.Cr14) + "00a6f02e"), an("F52500" + Fn(this.data.Cr15) + "7800781c"), an("F52600" + Fn(this.data.Cr16) + "00d4781b"), an("F52701" + Fn(this.data.Cr17) + "78d4781b"))
  },
  CKA: function (t) {
    we = 50, this.CRSet(this.data.Cr50)
  },
  CK0: function (t) {
    we = 0, this.CRSet(this.data.Cr0)
  },
  CK1: function (t) {
    we = 1, this.CRSet(this.data.Cr1)
  },
  CK2: function (t) {
    we = 2, this.CRSet(this.data.Cr2)
  },
  CK3: function (t) {
    we = 3, this.CRSet(this.data.Cr3)
  },
  CK4: function (t) {
    we = 4, this.CRSet(this.data.Cr4)
  },
  CK5: function (t) {
    we = 5, this.CRSet(this.data.Cr5)
  },
  CK6: function (t) {
    we = 6, this.CRSet(this.data.Cr6)
  },
  CK7: function (t) {
    we = 7, this.CRSet(this.data.Cr7)
  },
  CK8: function (t) {
    we = 8, this.CRSet(this.data.Cr8)
  },
  CK10: function (t) {
    we = 10, this.CRSet(this.data.Cr10)
  },
  CK11: function (t) {
    we = 11, this.CRSet(this.data.Cr11)
  },
  CK12: function (t) {
    we = 12, this.CRSet(this.data.Cr12)
  },
  CK13: function (t) {
    we = 13, this.CRSet(this.data.Cr13)
  },
  CK14: function (t) {
    we = 14, this.CRSet(this.data.Cr14)
  },
  CK15: function (t) {
    we = 15, this.CRSet(this.data.Cr15)
  },
  CK16: function (t) {
    we = 16, this.CRSet(this.data.Cr16)
  },
  CK17: function (t) {
    we = 17, this.CRSet(this.data.Cr17)
  },
  CRSet: function (t) {
    t.match(/#(..)(..)(..)/), Ie = RegExp.$1, be = RegExp.$2, Oe = RegExp.$3, this.setData({
      CR: parseInt(Ie, 16),
      CG: parseInt(be, 16),
      CB: parseInt(Oe, 16)
    })
  },
  SetCr: function () {
    0 == n.data.UI && we >= 10 && 50 != we && (we = 0), 1 == n.data.UI && we < 10 && (we = 10), 0 == we ? n.setData({
      Cr0: "#" + Ie + be + Oe
    }) : 1 == we ? n.setData({
      Cr1: "#" + Ie + be + Oe
    }) : 2 == we ? n.setData({
      Cr2: "#" + Ie + be + Oe
    }) : 3 == we ? n.setData({
      Cr3: "#" + Ie + be + Oe
    }) : 4 == we ? n.setData({
      Cr4: "#" + Ie + be + Oe
    }) : 5 == we ? n.setData({
      Cr5: "#" + Ie + be + Oe
    }) : 6 == we ? n.setData({
      Cr6: "#" + Ie + be + Oe
    }) : 7 == we ? n.setData({
      Cr7: "#" + Ie + be + Oe
    }) : 8 == we ? n.setData({
      Cr8: "#" + Ie + be + Oe
    }) : 10 == we ? n.setData({
      Cr10: "#" + Ie + be + Oe
    }) : 11 == we ? n.setData({
      Cr11: "#" + Ie + be + Oe
    }) : 12 == we ? n.setData({
      Cr12: "#" + Ie + be + Oe
    }) : 13 == we ? n.setData({
      Cr13: "#" + Ie + be + Oe
    }) : 14 == we ? n.setData({
      Cr14: "#" + Ie + be + Oe
    }) : 15 == we ? n.setData({
      Cr15: "#" + Ie + be + Oe
    }) : 16 == we ? n.setData({
      Cr16: "#" + Ie + be + Oe
    }) : 17 == we ? n.setData({
      Cr17: "#" + Ie + be + Oe
    }) : 50 == we && n.setData({
      Cr50: "#" + Ie + be + Oe
    })
  },
  CSC: function (t) {
    0 == Ae && (0, re.SetCFG)("Cr" + we, "#" + Ie + be + Oe)
  },
  CRC: function (t) {
    Ie = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CGC: function (t) {
    be = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CBC: function (t) {
    Oe = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CTC1: function (t) {
    Me = t.detail.value.toString(16).padStart(2, "0"), (0, re.SetCFG)("BGT", Me), n.setData({
      BGC: "#000000" + Me
    })
  },
  BTBGP10: function (t) {
    n.setData({
      BGP: xe[1],
      BGI: 1
    }), (0, re.SetCFG)("BGI", 1)
  },
  BTBGP1: function (t) {
    He("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, re.SetCFG)("BGI", 1), (0, re.SetCFG)("BGP1", t), n.setData({
        BGP1: t,
        BGP: t,
        BGI: 1
      })
    }))
  },
  BTBGP20: function (t) {
    n.setData({
      BGP: xe[2],
      BGI: 2
    }), (0, re.SetCFG)("BGI", 2)
  },
  BTBGP2: function (t) {
    He("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, re.SetCFG)("BGI", 2), (0, re.SetCFG)("BGP2", t), n.setData({
        BGP2: t,
        BGP: t,
        BGI: 2
      })
    }))
  },
  BTBGP30: function (t) {
    n.setData({
      BGP: xe[3],
      BGI: 3
    }), (0, re.SetCFG)("BGI", 3)
  },
  BTBGP3: function (t) {
    He("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, re.SetCFG)("BGI", 3), (0, re.SetCFG)("BGP3", t), n.setData({
        BGP3: t,
        BGP: t,
        BGI: 3
      })
    }))
  },
  BTBGP40: function (t) {
    n.setData({
      BGP: xe[4],
      BGI: 4
    }), (0, re.SetCFG)("BGI", 4)
  },
  BTBGP4: function (t) {
    He("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, re.SetCFG)("BGI", 4), (0, re.SetCFG)("BGP4", t), n.setData({
        BGP4: t,
        BGP: t,
        BGI: 4
      })
    }))
  },
  BTBGP0: function (t) {
    wx.chooseMedia({
      count: 1,
      mediaType: ["image"],
      sourceType: ["album", "camera"],
      maxDuration: 30,
      camera: "back",
      success: function (t) {
        wx.saveFile({
          tempFilePath: t.tempFiles[0].tempFilePath,
          success: function (t) {
            xe[5] = t.savedFilePath, n.setData({
              BGP: xe[5],
              BGI: 5
            }), (0, re.SetCFG)("BGI", 5), (0, re.SetCFG)("BGP5", xe[5])
          }
        })
      }
    })
  },
  BTCKA2: function (t) {
    an("F972" + gn(1 - Gt)), an("FF15")
  },
  BTEN1: function (t) {
    fe && this.MSG("", "1100001BE4000005DC000020D0000005DC010" + (1 - k) + "00"), (0, re.SetCFG)("UEN", 1 - k), an("F970" + gn(1 - k)), an("FF11")
  },
  BTBLE1: function (t) {
    He("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      an(t = (t = "FA73" + Cn(t = unescape(encodeURIComponent(t)))).substring(0, 40)), an("FF20")
    }))
  },
  BTBLE2: function (t) {
    He("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      an("FA74" + Cn(t)), an("FF21")
    }))
  },
  BTVIN: function (t) {
    He("设置取电器VIN码", "Set VIN", "标准17位英文和数字", "Up to 17 characters", (function (t) {
      return (t = t.toUpperCase()).match(/^[A-HJ-NPR-Z0-9]{14}\d\d\d$/) ? (an("FAD3" + Cn(t = unescape(encodeURIComponent(t)))), void an("FF25")) : void(0, re.Toast)(k ? "Incorrect VIN input!" : "输入VIN不正确!")
    }))
  },
  BTTCH1: function (t) {
    He("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return an("FAD1" + Cn(t)), void an("FF24");
      (0, re.Toast)(k ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    ke("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      an("F9C7" + gn(t)), an("FF18")
    }))
  },
  BTTCH6: function (t) {
    $e("确认是否切换屏幕驱动", "Confirm switch the screen driver", "切换后会重启蓝牙模块", "The Bluetooth module will be restarted after switching", (function (t) {
      an("F9E9" + gn(dt > 2 ? 0 : dt + 1)), an("FF18")
    }))
  },
  BTKEY1: function (t) {
    an("F967" + gn(1 - R)), an("FF10")
  },
  BTKEY2: function (t) {
    an("F966" + gn(1 - H)), an("FF11")
  },
  BTKEY3: function (t) {
    an("F9E8" + gn(1 - jt)), an("FF11")
  },
  BTDDT1: function (t) {
    an("F96E" + gn(It >= 3 ? 0 : It + 1)), an("FF16")
  },
  UPDate: function (n, a) {
    an("AB00" + Cn(unescape(encodeURIComponent(t)))), an("AB01" + Cn(unescape(encodeURIComponent(e)))), an(n + Cn(a)), (0, re.Toast)(k ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
  },
  BTLST: function (t) {
    this.setData({
      LST: 1 - this.data.LST
    })
  },
  BTUP6: function (t) {
    He("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, re.SetCFG)("WID", t), an("AB00" + Cn(t = unescape(encodeURIComponent(t)))), an("FF22")
    }))
  },
  BTUP7: function (t) {
    He("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, re.SetCFG)("WPD", t), an("AB01" + Cn(t = unescape(encodeURIComponent(t)))), an("FF23")
    }))
  },
  BTUP1: function (t) {
    if (!Pe)
      if (this.data.CVer >= this.data.UPDate) {
        if (le) return;
        $e("升级确认", "Confirm clearance date", "当前已经是最新版,确定是否重新升级固件", "", (function (t) {
          n.UPDate("A700000000", "NewUI")
        }))
      } else Ve.showModal({
        title: k ? "Start Upgrade" : "开始升级",
        editable: false,
        confirmText: k ? "YES" : "确定",
        cancelText: k ? "NO" : "取消",
        success: function (t) {
          t.confirm && n.UPDate("A700000000", "NewUI")
        }
      })
  },
  BTUP5: function (t) {
    he && $e("确认清除激活日期", "Confirm clearance date", "", "", (function (t) {
      an("FD48" + Cn("Cxjdwx"))
    }))
  },
  BTUP8: function (t) {
    Ve.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    Ve.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    Ve.setClipboardData({
      data: "设备ID:" + G
    })
  },
  BTUP0: function (t) {
    Ve.showModal({
      title: k ? "Firmware rollback" : "固件回退",
      editable: false,
      confirmText: k ? "YES" : "确定",
      cancelText: k ? "NO" : "取消",
      success: function (t) {
        t.confirm && (ue && n.UPDate("A700000000", "CEVRollBack"), ue || n.UPDate("A700000000", "CANRollBack"))
      }
    })
  },
  BTUP9: function (t) {
    Ve.showModal({
      title: k ? "Write Test Firmware" : "升级测试固件",
      content: "测试版本固件可能会有未知的BUG,如遇到BUG可以升级到正式版或者退回稳定版",
      editable: false,
      confirmText: "确定",
      cancelText: "取消",
      success: function (t) {
        t.confirm && n.UPDate("A700000000", "Test1")
      }
    })
  },
  BTUFN: function (t) {
    $e("是否切换风速控制方式", "Confirm whether to switch the wind speed control mode", "如采用标配风机小板请勿修改此值", "If using the standard fan board, please do not modify this value", (function (t) {
      an("F9E2" + gn(1 - p)), an("FF")
    }))
  },
  BTUFS: function (t) {
    ke("设置温度加速值", "Set temperature acceleration value", "2", "20", (function (t) {
      an("F963" + gn(t)), an("FF14")
    }))
  },
  BTAFS: function (t) {
    ke("设置电流加速值", "Set current acceleration value", "0.1", "3.0", (function (t) {
      an("F964" + gn(10 * t)), an("FF14")
    }))
  },
  BTLFS: function (t) {
    ke("设置初始风速值", "Set initial wind speed value", "20", "200", (function (t) {
      an("F965" + gn(t)), an("FF14")
    }))
  },
  BTMFS: function (t) {
    ke("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      an("F9C5" + gn(t)), an("FF14")
    }))
  },
  BTTMC: function (t) {
    ke("设置超温进入温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      an("F84A" + ln(t)), an("FF13")
    }))
  },
  BTTMC1: function (t) {
    ce >= 5.46 ? ke("设置电流加减幅度", "Set the current step amplitude", "0.01", "1", (function (t) {
      an("F84B" + ln(t)), an("FF13")
    })) : ke("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      an("F84B" + ln(t)), an("FF13")
    }))
  },
  BTOST: function (t) {
    ke("设置超温关机温度", "Set the exit temperature for over temperature", "50", "120", (function (t) {
      an("F8F7" + ln(t)), an("FF18")
    }))
  },
  BTTMW: function (t) {
    ce >= 5.46 ? ke("电流最低值", "Minimum current value", "5", "50", (function (t) {
      an("F84C" + ln(t)), an("FF13")
    })) : ke("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      an("F84C" + ln(t)), an("FF13")
    }))
  },
  BTMMV: function (t) {
    ke("设置最高电压限制", "Set maximum voltage limit", "100", "1000", (function (t) {
      an("F8FA" + ln(t)), an("FF19"), an("FF14")
    }))
  },
  BTMMA: function (t) {
    ke("设置最高电流限制", "Set maximum current limit", "10", "400", (function (t) {
      an("F8F9" + ln(t)), an("FF19"), an("FF14")
    }))
  },
  BTRDY: function (t) {
    ke("设置就绪电压范围", "Set the ready voltage range", "1", "20", (function (t) {
      an("F9CD" + gn(t)), an("FF19")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), u > 0 && u < 5 ? $e("检测到输出电流", "Detected output current", "如有负载请点取消后断开负载再开始校正,如无负载则为空载电流,点击确定将会设置为最小电流过滤(可在输出电流校正页面中设置).", "If there is a load detected in the output current, please click NO and disconnect the load before starting the calibration. If there is no load, Click YES will set it as the minimum current filter (which can be set on the output current calibration page)", (function (t) {
      an("F848" + ln(Number(u) + .05)), an("FF16")
    })) : c < 10 || u > 0 ? (0, re.Toast)(k ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (an("C1"), an("FF"), ke("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / c).toFixed(4),
        n = Number(t / et).toFixed(4);
      an("C3" + ln(100 * n) + ln(100 * e)), 2 == o ? (an("F876" + ln(20 * n)), an("F877" + ln(100 * n))) : 1 == o ? (an("F876" + ln(41 * n)), an("F877" + ln(58.5 * n))) : 4 == o ? (an("F876" + ln(41.2 * n)), an("F877" + ln(59.3 * n))) : 16 == o ? (an("F876" + ln(44 * n)), an("F877" + ln(61 * n))) : 32 == o && (an("F876" + ln(41.2 * n)), an("F877" + ln(59.4 * n))), an("FF"), an("A80" + V + ln(50 * n) + ln(nt)), an("FF")
    })))
  },
  BTOVT1: function (t) {
    ue ? ke("升压采样补偿", "Boost voltage compensation", "0.1", "1", (function (t) {
      t > 999.99 ? t *= 1e-4 : t > 99.99 && (t *= .001), an("FB47" + ln(100 * t)), an("FF")
    })) : ke("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      an("FB47" + ln(100 * t)), an("FF")
    }))
  },
  BTOVTU: function (t) {
    an("FB47" + ln(100 * (Number(gt) + 3e-4))), an("FF")
  },
  BTOVTD: function (t) {
    an("FB47" + ln(100 * (Number(gt) - 3e-4))), an("FF")
  },
  BTOVD1: function (t) {
    ue ? ke("基础电压补偿", "Basic voltage compensation", "10", "40", (function (t) {
      an("FB46" + ln(100 * t)), an("FF")
    })) : ke("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      an("FB46" + ln(100 * t)), an("FF")
    }))
  },
  BTOVDU: function (t) {
    an("FB46" + ln(100 * (Number(Tt) + 3e-4))), an("FF")
  },
  BTOVDD: function (t) {
    an("FB46" + ln(100 * (Number(Tt) - 3e-4))), an("FF")
  },
  BTOVS: function (t) {
    Ye(k ? "Set voltage range" : "设置电压范围", (k ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (an("F876" + ln(Number(RegExp.$1))), an("F877" + ln(Number(RegExp.$2))), an("FF")) : (0, re.Toast)(k ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    ke("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      an("F8F3" + ln(t)), an("FF")
    }))
  },
  BTOVT3: function (t) {
    c < 10 || u > 0 ? (0, re.Toast)(k ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (an("C2"), an("FF"), ke("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / c).toFixed(4);
      an("C4" + ln(100 * Number(t / et).toFixed(4)) + ln(100 * e)), an("FF")
    })))
  },
  BTOVT2: function (t) {
    ke("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      an("FBF2" + ln(100 * t)), an("FF")
    }))
  },
  BTO2TU: function (t) {
    an("FBF2" + ln(100 * (Number(Ot) + 3e-4))), an("FF")
  },
  BTO2TD: function (t) {
    an("FBF2" + ln(100 * (Number(Ot) - 3e-4))), an("FF")
  },
  BTOVD2: function (t) {
    ke("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      an("FBF1" + ln(100 * t)), an("FF")
    }))
  },
  BTO2DU: function (t) {
    an("FBF1" + ln(100 * (Number(xt) + 3e-4))), an("FF")
  },
  BTO2DD: function (t) {
    an("FBF1" + ln(100 * (Number(xt) - 3e-4))), an("FF")
  },
  BTIVD1: function (t) {
    ke("输入电压补偿值", "Input voltage compensation value", "0.1", "5", (function (t) {
      an("F8FB" + ln(t)), an("FF")
    }))
  },
  BTIVD2: function (t) {
    an("F8FB" + ln(1)), an("FF"), ke("输入实际测量出的输入电压", "Input the actual measured input voltage", "10", "1000", (function (t) {
      an("F8FB" + ln(Number(t / l))), an("FF")
    }))
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 50,
      duration: 300
    }), u < 5 || et - c < .2 ? (0, re.Toast)(k ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (an("C0"), an("FF"), ke("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / u).toFixed(4);
      an("C5" + ln(100 * Number(t / nt).toFixed(4)) + ln(100 * e)), an("FF")
    })))
  },
  BTOAT1: function (t) {
    ke("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      an("FB45" + ln(100 * t)), an("FF")
    }))
  },
  BTOAT2: function (t) {
    an("FB45" + ln(100 * (Number(Bt) - .001))), an("FF")
  },
  BTOAT3: function (t) {
    an("FB45" + ln(100 * (Number(Bt) + .003))), an("FF")
  },
  BTOAS1: function (t) {
    ke("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      an("F8F4" + ln(t)), an("FF")
    }))
  },
  BTCLV: function (t) {
    ke("设置最小电流过滤", "Set minimum current filtering", "0.00", "5.00", (function (t) {
      an("F848" + ln(t)), an("FF")
    }))
  },
  BTOAD1: function (t) {
    ke("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      an("FB44" + ln(100 * t)), an("FF")
    }))
  },
  BTOAD2: function (t) {
    an("FB44" + ln(100 * (Number(Dt) - .001))), an("FF")
  },
  BTOAD3: function (t) {
    an("FB44" + ln(100 * (Number(Dt) + .001))), an("FF")
  },
  BTOAS: function (t) {
    Ye(k ? "Set current range" : "设置电流范围", (k ? "Now:" : "当前范围:") + ut + "-" + ft, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (an("F878" + ln(Number(RegExp.$1))), an("F879" + ln(Number(RegExp.$2))), an("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (an("F879" + ln(t)), an("FF")) : (0, re.Toast)(k ? "Input format error" : "输入格式错误!"))
    }))
  },
  BTIAD1: function (t) {
    ke("输入电流补偿值", "Input current compensation value", "0.1", "5", (function (t) {
      an("F8FC" + ln(t)), an("FF")
    }))
  },
  BTIAD2: function (t) {
    an("F8FB" + ln(1)), an("FF"), ke("输入实际测量出的输入电流", "Input the actual measured input current", "3", "50", (function (t) {
      an("F8FC" + ln(Number(t / d))), an("FF")
    }))
  },
  pwrbt: function (t) {
    an("A6" + gn(1 - W)), an("FF10")
  },
  BTUCF1: function (t) {
    an("F9CF" + gn(1 - Qt)), an("FF10")
  },
  owbt: function (t) {
    ke("设置功率限制", "Set power limit", "300", J, (function (t) {
      an("F84D" + ln(t)), an("FF")
    }))
  },
  BTUIW1: function (t) {
    an("F9E1" + gn(1 - me)), an("FF")
  },
  tibt: function (t) {
    ke("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      an("A9" + dn(t)), an("FF")
    }))
  },
  BTYC1: function (t) {
    ke("设置预充电压", "Set pre charge voltage", "0", ht, (function (t) {
      an("F8F6" + ln(t)), an("FF")
    }))
  },
  BTYC2: function (t) {
    ke("设置预充电流", "Set pre charge current", ut, ft, (function (t) {
      an("F8F5" + ln(t)), an("FF")
    }))
  },
  SetVA: function (t, e, n) {
    V != t && (e > ht || e < Ft ? ke("设置输出电压", "Set output voltage", Ft, ht, (function (e) {
      an("A80" + (V = t) + ln(e) + ln(n)), an(t <= 2 ? "FF10" : "FF11")
    })) : $e("快捷设置电压电流切换", "Switch confirmation", "为避免误触,请确认切换电压电流", "To avoid accidental contact, please confirm the switching voltage and current", (function (a) {
      an("A80" + (V = t) + ln(e) + ln(n)), an(t <= 2 ? "FF10" : "FF11")
    })))
  },
  ks1bt: function (t) {
    this.SetVA(1, M[0], M[1] > ft ? ft : M[1])
  },
  ks2bt: function (t) {
    this.SetVA(2, P[0], P[1] > ft ? ft : P[1])
  },
  ks3bt: function (t) {
    this.SetVA(3, y[0], y[1] > ft ? ft : y[1])
  },
  ks4bt: function (t) {
    this.SetVA(4, Y[0], Y[1] > ft ? ft : Y[1])
  },
  hqbt1: function (t) {
    ue ? ce >= 5.39 ? ke("设置超温关机倒计时", "设置超温关机倒计时", 3, 60, (function (t) {
      an("F961" + gn(t)), an("FF15")
    })) : (0, re.Toast)(k ? "The current firmware version is not adjustable. If you need to modify it, please upgrade the firmware!" : "当前固件版本不可调,如需修改请升级固件!") : ke("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      an("F961" + gn(t)), an("FF15")
    }))
  },
  hqbt0: function (t) {
    an("F961" + gn(0 == mt ? ue ? 30 : 5 : 0)), an("FF15")
  },
  btbt1: function (t) {
    he && wx.getClipboardData({
      success: function (t) {
        var e = t.data;
        e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (an("F96B" + gn(3)), an("F96C" + gn(0)), cn(e))
      }
    })
  },
  nvbt: function (t) {
    Ye(k ? "Set Output Voltage" : "设置输出电压", (k ? "Range:" : "范围:") + Ft + "-" + ht, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) an(t.substr(2, 4) + ln(t.substr(6))), an("FF");
        else {
          if (t.startsWith("FFF9")) return an(t.substr(2)), void an("FF");
          if ("DEBUG=0" == t)(0, re.SetCFG)("DEBUG", 0), Fe = 0, an("F9C900"), an("F9CA01"), an("F9CB01"), an("F9CC01");
          else if ("DEBUG=1" == t)(0, re.SetCFG)("DEBUG", 1), Fe = 1, an("F9C900"), an("F9CA01"), an("F9CB01"), an("F9CC01");
          else if ("DEBUG=2" == t)(0, re.SetCFG)("DEBUG", 2), Fe = 2, an("F9C9FF"), an("F9CA01"), an("F9CB01"), an("F9CC01");
          else if ("DEBUG=3" == t)(0, re.SetCFG)("DEBUG", 2), Fe = 2, an("F9C9FF"), an("F9CA01"), an("F9CB01"), an("F9CC00");
          else if (t.startsWith("FFC8")) an(t.substr(2, 4) + t.substr(6)), an("FF");
          else if (t.startsWith("FFC9")) {
            an("C9" + t.substr(4, 4) + Cn(t.substr(8)))
          } else if ("异常修复" == t) n.BTRST1();
          else if ("强制升级" == t || "测试版" == t) Ve.showModal({
            title: k ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: k ? "YES" : "确定",
            cancelText: k ? "NO" : "取消",
            success: function (e) {
              e.confirm && n.UPDate("A700000000", "测试版" == t ? "Test1" : "NewUI")
            }
          });
          else if ("测试二" == t) Ve.showModal({
            title: k ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: k ? "YES" : "确定",
            cancelText: k ? "NO" : "取消",
            success: function (t) {
              t.confirm && n.UPDate("A700000000", "Test2")
            }
          });
          else if ("测试零" == t) {
            if (2 != he) return;
            Ve.showModal({
              title: k ? "Start Upgrade" : "开始升级",
              editable: false,
              confirmText: k ? "YES" : "确定",
              cancelText: k ? "NO" : "取消",
              success: function (t) {
                t.confirm && n.UPDate("A700000000", "LED002")
              }
            })
          } else if (t.startsWith("DataStart=")) wx.getClipboardData({
            success: function (t) {
              var e = t.data;
              e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && cn(e)
            }
          });
          else {
            if (an("A1" + Cn(t)), (t = parseFloat(t)) > ht || t < Ft && 0 == Qt || !isFinite(t)) return void(0, re.Toast)(k ? "Beyond the set range!" : "超出设置范围!");
            an("A80" + V + ln(t) + ln(nt)), an("FF")
          }
        }
      else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (an("F96B" + gn(3)), cn(e))
        }
      })
    }))
  },
  nabt: function (t) {
    ke("设置输出电流", "Set output current", ut, ft, (function (t) {
      an("A80" + V + ln(et) + ln(t)), an("FF")
    }))
  },
  sa2bt3: function (t) {
    ke("设置充电时间(分钟)", "Set charging time(Minute)", 0, 600, (function (t) {
      an("A9" + dn(t)), an("FF")
    }))
  },
  SetSGK: function () {
    if (ce >= 5.39) {
      var t = 0 == qt ? "1" : "0";
      an("A50" + t), an("A40" + t), an("FF19")
    } else an("F857" + ln(0 == _ ? 1 : 0)), an("FF12")
  },
  SetSGV: function () {
    an("F9E7" + gn(1 - $t)), an("FF10")
  },
  sa2bt2: function (t) {
    ke("设置二段电流", "Set second stage current", ut, ft, (function (t) {
      an("F857" + ln(t)), an("FF12")
    }))
  },
  sa2bt1: function (t) {
    ke("设置二段电压", "Set second stage voltage", Ft, ht, (function (t) {
      an("F858" + ln(t)), an("FF12")
    }))
  },
  sa2bt0: function (t) {
    ue && (ce < 5.39 || et > 126) ? an("A9" + dn(ge ? 0 : 60)) : (an("F858" + (0 == _ ? ln(et - 3) : "00000000")), an("F857" + (0 == _ ? ln(10) : "00000000")), an("FF12"))
  },
  sdbt1: function (t) {
    ke("设置延时时间(分钟)", "Set delay time (Minutes)", 1, 600, (function (t) {
      an("F859" + ln(t)), an("FF16")
    }))
  },
  sdbt2: function (t) {
    ke("设置关机电流", "SSet startup delay current", "0.00", "10.00", (function (t) {
      an("F8F0" + ln(t)), an("FF")
    }))
  },
  sdbt0: function (t) {
    an("F859" + (0 == vt ? ln(1) : "00000000")), an("FF16")
  },
  MSG: function (t, e) {
    if (!i)
      if (1 != Fe || e.startsWith("D") || (0, re.print)("MSG:", e), e.startsWith("A101")) n.setData({
        ShowBar: 0,
        Panel: 2,
        LOGO: k ? "Preview" : "预览"
      });
      else if (e.startsWith("A001")) Ce = 2, "未激活" != a || he || ye(), ce <= 5.28 && an("FF");
    else if (e.startsWith("A000")) {
      if (Ce) return;
      Ce = 1, (0, re.Toast)(k ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ve.showModal({
          title: k ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + G,
          confirmText: k ? "YES" : "确定",
          cancelText: k ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, re.SetCFG)(G, t.content), an("A0" + Cn(t.content)), Ce = 0)
          }
        })
      }), 1e3)
    } else if (e.startsWith("F101")) un();
    else if (e.startsWith("F201")) un();
    else if (e.startsWith("F301")) sn = 0, rn = [], (0, re.Toast)(k ? "Send End!" : "发送完成!");
    else if (e.startsWith("FF")) {
      var s = new DataView(t);
      s.getUint8(1) ? 2 != Ce && (Ce = 2, "未激活" != a || he || ye()) : ((0, re.Toast)(k ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ve.showModal({
          title: k ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + G,
          confirmText: k ? "YES" : "确定",
          cancelText: k ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, re.SetCFG)(G, t.content), an("FF" + Cn(t.content)), Ce = 0)
          }
        })
      }), 1e3)), W = s.getUint8(2), R = s.getUint8(3), o = s.getUint8(4), k = s.getUint8(5), H = s.getUint8(6), Q = s.getUint8(7), tt = s.getUint8(8), rt = s.getUint8(9), st = s.getUint8(10), ct = s.getUint8(11), Ct = s.getUint8(12), St = s.getUint8(13), lt = s.getUint8(14) / 10, mt = s.getUint8(15), pt = s.getUint8(16), Gt = s.getUint8(17), wt = s.getUint8(18), It = s.getUint8(19), bt = .01 * s.getUint8(20), Pt = s.getUint8(21), Vt = s.getUint8(22), Wt = s.getUint8(23), Yt = s.getUint8(24), kt = s.getUint8(25), Ht = s.getUint8(26), _t = s.getUint8(27), Jt = s.getUint8(28), qt = s.getUint8(29), X = s.getUint8(30), V = s.getUint8(31), Qt = s.getUint8(32), yt = s.getUint8(33), me = s.getUint8(34), pe = s.getUint8(35), Ge = s.getUint8(36), p = s.getUint8(37), Xt = s.getUint8(38), te = s.getUint8(39), ee = s.getUint8(40), ne = s.getUint8(41), $t = s.getUint8(42), jt = s.getUint8(43), dt = s.getUint8(44);
      var ie = 51;
      M = [Bn(s, ie, 2, 1), Bn(s, ie + 4, 2, 1)], P = [Bn(s, ie += 8, 2, 1), Bn(s, ie + 4, 2, 1)], y = [Bn(s, ie += 8, 2, 1), Bn(s, ie + 4, 2, 1)], Y = [Bn(s, ie += 8, 2, 1), Bn(s, ie + 4, 2, 1)], z = Bn(s, ie += 8), _ = Bn(s, ie += 4), J = Bn(s, ie += 4), q = Bn(s, ie += 4), at = Bn(s, ie += 4), it = Bn(s, ie += 4), ot = Bn(s, ie += 4), L = Bn(s, ie += 4), ut = Bn(s, ie += 4), ft = Bn(s, ie += 4), Ft = Bn(s, ie += 4), ht = Bn(s, ie += 4), gt = Bn(s, ie += 4, 4), Bt = Bn(s, ie += 4, 4), Tt = Bn(s, ie += 4, 4), Dt = Bn(s, ie += 4, 4), At = Bn(s, ie += 4), Et = Bn(s, ie += 4), vt = Bn(s, ie += 4), Ut = Bn(s, ie += 4), Ot = Bn(s, ie += 4, 4), xt = Bn(s, ie += 4, 4), Nt = Bn(s, ie += 4), Mt = Bn(s, ie += 4), Rt = Bn(s, ie += 4), Lt = Bn(s, ie += 4), Kt = Bn(s, ie += 4), Zt = Bn(s, ie += 4), zt = Bn(s, ie += 4), K = Bn(s, ie += 4, 4), ie += 4, ce >= 5.43 && (Z = Bn(s, ie, 4)), ie += 4, 1 == V ? (nt = M[1], et = M[0]) : 2 == V ? (nt = P[1], et = P[0]) : 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = Y[1], et = Y[0]), n.setData({
        PON: W,
        KON: R,
        CAN: o,
        UEN: k,
        KRC: H,
        SV: et.toFixed(2),
        SA: nt.toFixed(2),
        WTi: Q,
        Sleep: tt,
        LEDK0: rt,
        LEDK1: st,
        LEDK2: ct,
        IVD: K,
        IAD: Z,
        UFS: Ct,
        LFS: St,
        AFS: lt,
        UHQ: mt,
        GIF: pt,
        SGV: $t,
        KPR: jt,
        CKA2: Gt,
        NTC: wt,
        DDT: It,
        CLV: bt,
        UEG: Pt,
        UCN: Vt,
        MFS: Wt,
        DOL: Yt,
        DST: kt,
        LKS: Ht,
        UI: _t,
        RDY: Jt,
        SGK: qt,
        ETi: X,
        KSi: V,
        DSP: dt,
        UCF: Qt,
        TCH: yt,
        UIW: me,
        ACK: pe,
        CCK: Ge,
        UFN: p,
        MUE: Xt,
        MUF: te,
        UME: ee,
        MUA: ne,
        KS1: M,
        KS2: P,
        KS3: y,
        KS4: Y,
        SV2: z,
        SA2: _,
        SMW: J,
        UMW: q,
        TMW: at,
        UMT: it,
        OMT: ot,
        MA: L,
        LSA: ut,
        HSA: ft,
        LSV: Ft,
        HSV: ht,
        OVT: gt,
        OAT: Bt,
        OVD: Tt,
        OAD: Dt,
        L2V: At,
        H2V: Et,
        USD: vt,
        SDU: Ut,
        O2T: Ot,
        O2D: xt,
        OVS: Nt,
        OAS: Mt,
        YCA: Rt,
        YCV: Lt,
        OST: Kt,
        MMA: Zt,
        MMV: zt
      })
    } else if (e.startsWith("FE") || e.startsWith("EE")) {
      var oe = Sn(e.substring(20, 40));
      if (a = oe.startsWith("20") ? oe : "未激活", 0 == o) {
        ce = .01 * parseInt(e.substring(16, 20), 16), o = Dn(e, 14), ue = 0, G = e.substring(2, 14), 1 == o ? (r = "Huawei", ce >= 5.36 && (n.setData({
          Err: 1
        }), Qe()), ce >= 5.46 && (ae = 1)) : 2 == o ? (r = "Increase", n.setData({
          Err: 1
        }), en()) : 4 == o ? (r = "ZTE3000", ce >= 5.46 && (ae = 1)) : 8 == o ? (r = "INFY", n.setData({
          Err: 1
        }), nn()) : 12 == o ? (r = "EV_Station", ue = 2) : 13 == o ? r = "ZEEHO" : 14 == o ? (r = "EV_Charger", n.setData({
          Err: 1
        }), tn(), ue = 1) : 16 == o ? r = "EPS6020" : 32 == o ? (r = "ZTE4875", ce >= 5.44 && (n.setData({
          Err: 1
        }), Xe()), ce >= 5.46 && (ae = 1)) : 64 == o ? r = "Sinexcel" : 65 == o ? r = "BH10M100" : 66 == o ? r = "MC1503N5R" : 67 == o && (r = "R24-2200");
        var se = wx.getDeviceInfo();
        (0, re.Check)(G, Le, he, r, ce.toFixed(2), a, se.model, se.system, (function (t) {
          "0" == t[0] && (i = 1, an("CC"), je("设备授权异常", "Abnormal device authorization", "ID:0x" + G, "ID:0x" + G, "我知道了", "Yes I Kown", (function (t) {
            n.navigateBack({
              delta: 0
            })
          }))), "1" == t[1] && an("CB"), "1" == t[2] && ye()
        })), G = "0x" + G, n.setData({
          CVer: ce.toFixed(2),
          CEV: ue,
          SCAN: r,
          ID: G,
          ACT: a,
          MUS: ae
        });
        var fe = (0, re.GetCFG)(G, "0000");
        he && (fe = (Number(G) + 19880914).toString(16).substring(4, 8)), e.startsWith("EE") ? 0 != Ce && 3 != Ce || an("A0" + Cn(fe)) : (an("FF" + Cn(fe)), setTimeout((function () {
          3 == Ce && (Ce = 0, an("FF" + Cn(fe)))
        }), 1500))
      }
      if (e.startsWith("FE")) {
        var le = Sn(e.substring(260, 300)),
          de = Sn(e.substring(300, 340));
        "config" != le && "" != le || (le = (0, re.GetCFG)("WID", "config")), "88888888" != de && "" != de || (de = (0, re.GetCFG)("WPD", "88888888")), n.setData({
          VIN: Sn(e.substring(100, 140)),
          SSID: Sn(e.substring(140, 180)),
          UPWD: Sn(e.substring(180, 220)),
          LKV: Sn(e.substring(220, 260)),
          WID: le,
          WPD: de
        })
      }
    } else if (e.startsWith("FA")) {
      var Ae = new DataView(t);
      c = Bn(Ae, 1), u = Bn(Ae, 5), f = Bn(Ae, 9), l = Bn(Ae, 13), d = Bn(Ae, 17), g = Bn(Ae, 21), n.setData({
        IA: d,
        OV: c,
        OA: u,
        OW: f
      })
    } else if (e.startsWith("FB")) {
      var Ee = new DataView(t);
      h = Ee.getUint8(1), C = Ee.getUint8(2), S = Ee.getUint8(3), T = Ee.getUint8(4), D = Ee.getUint8(5), m = Ee.getUint8(6), w = Ee.getUint8(7), I = Ee.getUint8(8), $ = Ee.getUint8(9), ge = Ee.getUint8(10), ge += Ee.getUint8(11) << 8, Be = Ee.getUint8(12), j = Ee.getUint8(13);
      var ve = 31;
      c = Bn(Ee, ve), u = Bn(Ee, ve += 4), f = Bn(Ee, ve += 4), F = Bn(Ee, ve += 4), l = Bn(Ee, ve += 4), d = Bn(Ee, ve += 4), g = Bn(Ee, ve += 4), B = Bn(Ee, ve += 4), A = Bn(Ee, ve += 4), E = Bn(Ee, ve += 4), v = Bn(Ee, ve += 4), U = Bn(Ee, ve += 4), b = Bn(Ee, ve += 4), O = Bn(Ee, ve += 4), x = Bn(Ee, ve += 4), N = Bn(Ee, ve += 4), ve += 4, 2 == o ? en(T, D) : 8 == o ? en(T, D, m) : ce >= 5.44 && (32 == o ? Xe(Ee.getUint8(23), Ee.getUint8(24), Ee.getUint8(25), Ee.getUint8(26), Ee.getUint8(27), Ee.getUint8(28), Ee.getUint8(29)) : 1 == o ? Qe(Ee.getUint8(23), Ee.getUint8(24), Ee.getUint8(25), Ee.getUint8(26), Ee.getUint8(27), Ee.getUint8(28), 0) : 14 == o && tn(Ee.getUint8(23), Ee.getUint8(24), Ee.getUint8(25), Ee.getUint8(26), Ee.getUint8(27), Ee.getUint8(28), Ee.getUint8(29), Ee.getUint8(30))), ce >= 5.42 && (Te = Ee.getUint8(14), De = Bn(Ee, ve), ve += 4, De >= 100 && (n.navigateBack({
        delta: 0
      }), je("升级成功", "Upgrade completed!", "", "", "我知道了", "Yes I Kown", (function (t) {}))));
      var Ue = Number(f / g * 100).toFixed(2),
        we = Number(g - f).toFixed(2);
      0 == pe && ce >= 5.42 ? Se = k ? "Device unauthorized" : "设备未授权" : 0 == Ge && ce >= 5.42 ? Se = k ? "The device is locked" : "设备已锁定" : 60 == h ? Se = k ? "Simulate high voltage anomaly" : "模拟电池升压异常" : 0 == S ? Se = 0 == $ ? k ? "Communication Abnormality" : "CAN通讯异常" : 39 == $ ? k ? "Abnormal Insulation Test" : "绝缘测试未通过" : $ < 6 ? k ? "Handshake message failed" : "握手信息未通过" : $ < 9 ? k ? "Vehicle information not pass" : "车辆信息未通过" : 16 == $ ? k ? "Charging station not ready" : "电压检测未通过" : k ? "Other abnormal interruptions" : "其它异常中止" : 50 == h ? Se = k ? "Stop Charging" : "中 止 充 电" : 51 == h ? Se = k ? "Charging Error" : "充 电 错 误" : 52 == h ? Se = k ? "Seting Handshake Information" : "配置握手信息" : 53 == h ? Se = k ? "Seting Charging Information" : "配置充电信息" : 54 == h ? Se = et >= Ft && et <= ht ? k ? "Waiting Output Set Voltage" : "等待输出设定电压" : k ? "Set Voltage Out Of Range" : "设置电压超范围" : 55 == h ? Se = k ? "Ready For Use" : "已准备就绪" : 56 == h ? Se = k ? "Charging" : "正在充电中" : 57 == h ? Se = k ? "Charging Completed" : "充电完成" : 58 == h ? Se = k ? "Overtemperature shutdown" : "超温关机(" + Be + ")" : 59 == h ? Se = k ? "Insulation testing" : "绝缘测试" : 4 == h ? Se = k ? "Charger Shutdown" : "充电器已关机" : 43 == h ? Se = k ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == h ? Se = k ? "Over Temperature Shutdown" : "超温保护关机" : c <= 10 ? Se = k ? "Charger Output Abnormality" : "充电器输出异常" : 0 == h ? Se = k ? "Waiting For Battery Connection" : "等待接入电池" : 1 == h ? Se = k ? "Charging" : "正在充电中" : 2 == h ? Se = k ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == h ? Se = k ? "Precharging" : "正在预充" : 40 == h ? Se = k ? "Appointment Waiting" : "预约等待中" : 3 == h && (Se = k ? "Charging Completed" : "充电完成");
      var Ie = .65 * wx.getWindowInfo().windowWidth,
        be = Math.max(15, Math.min(30, Ie / (k ? Se.length : 1.8 * Se.length) * 1.5));
      n.setData({
        Ah: A,
        Wh: E,
        AH: v,
        WH: U,
        SWT: w,
        SMT: I,
        IV: l,
        IA: d,
        IW: g,
        IT: B,
        ST0: T,
        ST1: D,
        ST2: m,
        EEI: g ? Ue : "0.00",
        EES: g ? we : "0.00",
        YS: hn(ge),
        STR: Se,
        NFS: C,
        OL: S,
        OV: c,
        OA: u,
        OW: f,
        OT: F,
        FSize: be,
        KT1: j,
        Ti: hn(b),
        TI: hn(O),
        NSD: hn(x),
        UPS: Te,
        SOC: Number(N).toFixed(0),
        UPV: Number(De).toFixed(2)
      })
    } else if (e.startsWith("01")) {
      c = Tn(e, 2), u = Tn(e, 10), f = Tn(e, 18), F = Tn(e, 26), h = Dn(e, 34), C = Dn(e, 36), S = Dn(e, 38), 60 == h ? Se = k ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == S ? Se = k ? "Communication Abnormality" : "CAN通讯异常" : 50 == h ? Se = k ? "Stop Charging" : "中 止 充 电" : 51 == h ? Se = k ? "Charging Error" : "充 电 错 误" : 52 == h ? Se = k ? "Seting Handshake Information" : "配置握手信息" : 53 == h ? Se = k ? "Seting Charging Information" : "配置充电信息" : 54 == h ? Se = k ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == h ? Se = k ? "Ready For Use" : "已准备就绪" : 56 == h ? Se = k ? "Charging" : "正在充电中" : 57 == h ? Se = k ? "Charging Completed" : "充电完成" : 58 == h ? Se = k ? "Overtemperature shutdown" : "超温关机(" + Be + ")" : 59 == h ? Se = k ? "Insulation testing" : "绝缘测试" : 0 == c ? Se = k ? "Charger Output Abnormality" : "充电器输出异常" : 4 == h ? Se = k ? "Charger Shutdown" : "充电器已关机" : 0 == h ? Se = k ? "Waiting For Battery Connection" : "等待接入电池" : 1 == h ? Se = k ? "Charging" : "正在充电中" : 2 == h ? Se = k ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == h ? Se = k ? "Precharging" : "正在预充" : 40 == h ? Se = k ? "Appointment Waiting" : "预约等待中" : 3 == h ? Se = k ? "Charging Completed" : "充电完成" : 43 == h ? Se = k ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == h && (Se = k ? "Over Temperature Shutdown" : "超温保护关机");
      var Oe = .65 * wx.getWindowInfo().windowWidth;
      be = Math.max(15, Math.min(30, Oe / (k ? Se.length : 1.8 * Se.length) * 1.5));
      n.setData({
        STR: Se,
        NFS: C,
        OL: S,
        OV: c,
        OA: u,
        OW: f,
        OT: F,
        FSize: be
      })
    } else if (e.startsWith("02")) {
      l = Tn(e, 2), d = Tn(e, 10), g = Tn(e, 18), B = Tn(e, 26), T = Dn(e, 34), D = Dn(e, 36), m = Dn(e, 38);
      var xe = Number(f / g * 100).toFixed(2),
        Ne = Number(g - f).toFixed(2);
      n.setData({
        IV: l,
        IA: d,
        IW: g,
        IT: B,
        ST0: T,
        ST1: D,
        ST2: m,
        EEI: g ? xe : "0.00",
        EES: g ? Ne : "0.00"
      }), 2 == o && en(T, D), 8 == o && nn(T, D, m)
    } else if (e.startsWith("03")) A = Tn(e, 2), E = Tn(e, 10), v = Tn(e, 18), U = Tn(e, 26), w = Dn(e, 34), I = Dn(e, 36), n.setData({
      Ah: A,
      Wh: E,
      AH: v,
      WH: U,
      SWT: w,
      SMT: I
    });
    else if (e.startsWith("04")) ge = Dn(e, 34), ge += Dn(e, 36) << 8, Be = Dn(e, 38), n.setData({
      YS: hn(ge),
      Ti: hn(Tn(e, 2)),
      TI: hn(Tn(e, 10)),
      NSD: hn(Tn(e, 18)),
      SOC: Number(Tn(e, 26)).toFixed(0)
    });
    else if (e.startsWith("10")) M = [Tn(e, 2, 1), Tn(e, 10, 1)], P = [Tn(e, 18, 1), Tn(e, 26, 1)], V = Dn(e, 34), W = Dn(e, 36), R = Dn(e, 38), 1 == V ? (nt = M[1], et = M[0]) : 2 == V && (nt = P[1], et = P[0]), 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = Y[1], et = Y[0]), n.setData({
      KS1: M,
      KS2: P,
      KSi: V,
      PON: W,
      KON: R,
      SV: et.toFixed(2),
      SA: nt.toFixed(2)
    });
    else if (e.startsWith("11")) y = [Tn(e, 2, 1), Tn(e, 10, 1)], Y = [Tn(e, 18, 1), Tn(e, 26, 1)], k = Dn(e, 36), H = Dn(e, 38), (0, re.SetCFG)("UEN", k), 1 == V ? (nt = M[1], et = M[0]) : 2 == V && (nt = P[1], et = P[0]), 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = Y[1], et = Y[0]), n.setData({
      KS3: y,
      KS4: Y,
      CAN: o,
      UEN: k,
      KRC: H,
      SV: et.toFixed(2),
      SA: nt.toFixed(2),
      KSi: V
    });
    else if (e.startsWith("12")) z = Tn(e, 2), _ = Tn(e, 10), J = Tn(e, 18), q = Tn(e, 26), Q = Dn(e, 34), X = Dn(e, 36), tt = Dn(e, 38), n.setData({
      SV2: z,
      SA2: _,
      SMW: J,
      UMW: q,
      WTi: Q,
      ETi: X,
      Sleep: tt
    });
    else if (e.startsWith("13")) {
      at = Tn(e, 2), it = Tn(e, 10), ot = Tn(e, 18);
      Tn(e, 26);
      rt = Dn(e, 34), st = Dn(e, 36), ct = Dn(e, 38), n.setData({
        TMW: at,
        UMT: it,
        OMT: ot,
        LEDK0: rt,
        LEDK1: st,
        LEDK2: ct
      })
    } else if (e.startsWith("14")) ut = Tn(e, 2), ft = Tn(e, 10), Ft = Tn(e, 18), ht = Tn(e, 26), Ct = Dn(e, 34), St = Dn(e, 36), lt = .1 * Dn(e, 38), n.setData({
      LSA: ut,
      HSA: ft,
      LSV: Ft,
      HSV: ht,
      UFS: Ct,
      LFS: St,
      AFS: lt.toFixed(1)
    }), ut = Number(ut), Ft = Number(Ft), ft = Number(ft), ht = Number(ht);
    else if (e.startsWith("15")) gt = .01 * Tn(e, 2), Bt = .01 * Tn(e, 10), Tt = .01 * Tn(e, 18), Dt = .01 * Tn(e, 26), mt = Dn(e, 34), pt = Dn(e, 36), Gt = Dn(e, 38), n.setData({
      OVT: gt.toFixed(4),
      OAT: Bt.toFixed(4),
      OVD: Tt.toFixed(4),
      OAD: Dt.toFixed(4),
      UHQ: mt,
      GIF: pt,
      CKA2: Gt
    });
    else if (e.startsWith("16")) At = Tn(e, 2), Et = Tn(e, 10), vt = Tn(e, 18), Ut = Tn(e, 26), wt = Dn(e, 34), It = Dn(e, 36), bt = .01 * Dn(e, 38), n.setData({
      L2V: At,
      H2V: Et,
      USD: vt,
      NTC: wt,
      DDT: It,
      CLV: bt,
      SDU: Ut
    });
    else if (e.startsWith("17")) Ot = .01 * Tn(e, 2), xt = .01 * Tn(e, 10), Nt = Tn(e, 18), Mt = Tn(e, 26), Pt = Dn(e, 34), Vt = Dn(e, 36), Wt = Dn(e, 38), n.setData({
      O2D: xt.toFixed(4),
      O2T: Ot.toFixed(4),
      OVS: Nt,
      OAS: Mt,
      UEG: Pt,
      UCN: Vt,
      MFS: Wt
    });
    else if (e.startsWith("18")) Rt = Tn(e, 2), Lt = Tn(e, 10), Kt = Tn(e, 18), yt = Tn(e, 26), Yt = Dn(e, 34), kt = Dn(e, 36), Ht = Dn(e, 38), n.setData({
      YCA: Rt,
      YCV: Lt,
      DOL: Yt,
      DST: kt,
      LKS: Ht,
      TCH: yt,
      OST: Kt
    });
    else if (e.startsWith("19")) Zt = Tn(e, 2), zt = Tn(e, 10), _t = Dn(e, 34), Jt = Dn(e, 36), qt = Dn(e, 38), n.setData({
      UI: _t,
      MMA: Zt,
      MMV: zt,
      RDY: Jt,
      SGK: qt
    });
    else if (e.startsWith("20")) {
      var Me = Sn(e.substring(2, 40));
      n.setData({
        SSID: Me
      })
    } else if (e.startsWith("21")) n.setData({
      UPWD: Sn(e.substring(2, 40))
    });
    else if (e.startsWith("22")) {
      var Pe = Sn(e.substring(2, 40)),
        We = (0, re.GetCFG)("WID", Pe);
      Pe != We && an("AB00" + Cn(Pe = unescape(encodeURIComponent(We)))), n.setData({
        WID: We
      })
    } else if (e.startsWith("23")) {
      var Re = Sn(e.substring(2, 40)),
        Ke = (0, re.GetCFG)("WPD", Re);
      Re != Ke && an("AB01" + Cn(Re = unescape(encodeURIComponent(Ke)))), n.setData({
        WPD: Ke
      })
    } else if (e.startsWith("24")) n.setData({
      LKV: Sn(e.substring(2, 40))
    });
    else if (e.startsWith("25")) n.setData({
      VIN: Sn(e.substring(2, 40))
    });
    else if (e.startsWith("50")) tn(Dn(e, 2), Dn(e, 4), Dn(e, 6), Dn(e, 8));
    else if (e.startsWith("51")) tn(0, 0, 0, 0, Dn(e, 2), Dn(e, 4), Dn(e, 6), Dn(e, 8));
    else if (e.startsWith("40")) Qe(Dn(e, 2), Dn(e, 4), Dn(e, 6), Dn(e, 8), Dn(e, 10), Dn(e, 12), 0);
    else if (e.startsWith("D1") || e.startsWith("D0")) {
      if (2 != Fe) return;
      var Ye = e.substring(2, 10),
        ke = [e.substring(10, 12), e.substring(12, 14), e.substring(14, 16), e.substring(16, 18), e.substring(18, 20), e.substring(20, 22), e.substring(22, 24), e.substring(24, 26)],
        He = parseInt(Ye, 16);
      if (405206102 == He) 38, console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "握手信息");
      else if (402781270 == He) console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "车辆识别" + ke[0]);
      else if (485291094 == He) "11" == ke[0] ? console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "同意收包" + ke[6]) : "13" == ke[0] && console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "收包完成" + ke[6]);
      else if (403174486 == He) console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "同步时间" + ke[0] + ke[1]);
      else if (403240022 == He) {
        9;
        var $e = parseInt(ke[1] + ke[0], 16),
          Ze = parseInt(ke[3] + ke[2], 16),
          ze = parseInt(ke[5] + ke[4], 16),
          _e = parseInt(ke[7] + ke[6], 16);
        console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "充电范围:电压" + Ze + "-" + $e + " 电流" + _e + "-" + ze)
      } else if (269153366 == He) console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "准备就绪" + ke[0]);
      else if (403895382 == He) {
        var Je = parseInt(ke[1] + ke[0], 16),
          qe = parseInt(ke[3] + ke[2], 16),
          on = parseInt(ke[5] + ke[4], 16);
        console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "输出信息:V" + Je + " A" + qe + " T" + on)
      } else if (270201942 == He) 26, console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "中止充电");
      else if (136311894 == He) 31, console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "电桩", "充电器错");
      else if (405231348 == He) {
        var cn = parseInt(ke[1] + ke[0], 16);
        console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "绝缘信息:" + cn)
      } else if (269047540 == He) console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "电池就绪:" + ke[0]);
      else if (403724020 == He) {
        var fn = .1 * parseInt(ke[1] + ke[0], 16),
          Fn = .1 * parseInt(ke[3] + ke[2], 16);
        console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "需求信息:V" + fn + " A" + Fn)
      } else if (485250804 == He) console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "请求多包:" + ke[6]);
      else if (485185268 == He) console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "多包数据");
      else if (403920628 == He) console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], "取电器", "车辆状态");
      else {
        var ln = 244 == (255 & He) ? "取电器" : "电桩";
        console.log(Ye, ke[0], ke[1], ke[2], ke[3], ke[4], ke[5], ke[6], ke[7], ln, "未知")
      }
    }
  },
  onLoad: function (a) {
    n = this, Ce = 0, sn = 0, i = 0, o = 0, le = 0, Te = 0, De = 0, ae = 0, _e[0] = 1, _e[1] = 1, _e[2] = 1, _e[3] = 1, _e[4] = 1, _e[5] = 1, _e[6] = 1, _e[7] = 1, fe = Number(a.Test) || 0, ue = Number(a.CEV) || 0, le = Number(a.ODM) || 0, Ke();
    var r = wx.getAccountInfoSync();
    he = "trial" == r.miniProgram.envVersion ? 1 : "develop" == r.miniProgram.envVersion ? 2 : 0, Pe = 0;
    var s = wx.getDeviceInfo();
    console.log("SYSINF", s.abi, s.benchmarkLevel, s.brand, s.model, s.platform, s.system), (0, re.GetGIF)(1).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var c = RegExp.$2;
    (0, re.GetGIF)(2).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var u = RegExp.$2;
    (0, re.GetGIF)(3).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var f = RegExp.$2;
    (0, re.GetGIF)(4).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var F = RegExp.$2;
    (0, re.GetGIF)(5).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var h = RegExp.$2;
    xe[5] = (0, re.GetCFG)("BGP5", "/img/bc1.gif"), xe[1] = (0, re.GetCFG)("BGP1", "https://dingyue.ws.126.net/2022/0808/701db340g00rg9pym02h5d200cs00leg00it00vh.gif"), xe[2] = (0, re.GetCFG)("BGP2", "https://img2.baidu.com/it/u=2215745416,4118415336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422"), xe[3] = (0, re.GetCFG)("BGP3", "https://c-ssl.dtstatic.com/uploads/item/201912/08/20191208175320_skjmi.thumb.1000_0.jpg"), xe[4] = (0, re.GetCFG)("BGP4", "https://wx4.sinaimg.cn/mw690/9f2299eegy1hqwec2a3ncj21kw2dcx6p.jpg"), k = (0, re.GetCFG)("UEN"), Fe = (0, re.GetCFG)("DEBUG"), Ne = (0, re.GetCFG)("BGI", 0), Me = (0, re.GetCFG)("BGT", "80"), t = (0, re.GetCFG)("WID", "config"), e = (0, re.GetCFG)("WPD", "88888888"), n.setData({
      WID: t,
      WPD: e
    });
    var C = (0, re.GetCFG)("ShowM");
    n.setData({
      GIF1: "data:image/gif;base64," + c,
      GIF2: "data:image/gif;base64," + u,
      GIF3: "data:image/gif;base64," + f,
      GIF4: "data:image/gif;base64," + F,
      GIF5: "data:image/gif;base64," + h,
      UEN: k,
      ShowM: C,
      RollV: "5.45",
      TestV: "5.48(抢先版)",
      RoCEV: "5.45",
      UPDate: "5.47",
      APP: "1.33",
      GM: he,
      ADD: Pe,
      CAN: ce,
      CEV: ue,
      MUS: ae,
      BGI: Ne,
      BGT: parseInt(Me, 16),
      BGC: "#000000" + Me,
      ODM: le,
      BGP: xe[Ne],
      BGP1: xe[1],
      BGP2: xe[2],
      BGP3: xe[3],
      BGP4: xe[4],
      BGP5: xe[5]
    }), console.log(xe[Ne]), fe && (Re[0] = "1", Re[1] = "2", Re[2] = "3", Re[3] = "4", ue ? this.MSG("", "EEA47210A4AE300E0" + 548..toString(16) + "43786A64777800000000") : this.MSG("", "EEA47210A4AE30010" + 548..toString(16) + "323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000021340000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), de || (de = 1, se.onReconnected((function () {
      n.AutoLogin()
    })), se.onBLEConnectionStateChange((function () {
      i || (i = 1, je("蓝牙信号丢失", "Bluetooth Disconnected", "通常是关机或信号弱或干扰大导致", "Blue abnormal interruption is usually caused by shutdown, weak signal, or significant signal interference", "我知道了", "Yes I Kown", (function (t) {
        n.navigateBack({
          delta: 0
        })
      }))), n.navigateBack({
        delta: 0
      })
    })), se.onBLECharacteristicValueChange1(this.MSG)), n.AutoLogin()
  },
  AutoLogin: function () {
    Ce = 0, sn = 0, i = 0, o = 0, le = 0, Te = 0, De = 0, Ce = 3, an("A0" + Cn("0000")), an("EE"), setTimeout((function () {
      3 == Ce && (Ce = 0, an("A0" + Cn((0, re.GetCFG)(G, "0000"))), console.log("Re login:1")), "0" == o && an("EE")
    }), 1500), setTimeout((function () {
      3 == Ce && (Ce = 0, an("A0" + Cn((0, re.GetCFG)(G, "0000"))), console.log("Re login:1")), "0" == o && an("EE")
    }), 2500)
  },
  navigateBack: function (t) {
    Ve.navigateBack({
      delta: 0
    })
  },
  onUnload: function () {
    i = 1, se.closeBLEConnection(), console.log("Unload")
  },
  onShow: function (t) {
    i = 0, wx.hideHomeButton()
  },
  onHide: function () {
    i = 1
  }
});