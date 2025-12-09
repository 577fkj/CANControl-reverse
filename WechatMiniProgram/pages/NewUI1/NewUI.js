var t, e, n, i, a, o, r, s, c, u, f, F, h, C, S, l, d, g, B, T, D, m, p, G, A, v, E, U, w, I, b, O, N, x, M, P, V, W, R, L, K, y, H, Y, $, k, Z, j, z, J, _, q, X, Q, tt, et, nt, it, at, ot, rt, st, ct, ut, ft, Ft, ht, Ct, St, lt, dt, gt, Bt, Tt, Dt, mt, pt, Gt, At, vt, Et, Ut, wt, It, bt, Ot, Nt, xt, Mt, Pt, Vt, Wt, Rt, Lt, Kt, yt, Ht, Yt, $t, kt, Zt, jt, zt, Jt, _t, qt, Xt, Qt, te, ee, ne, ie, ae, oe, re = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  se = require("../../@babel/runtime/helpers/asyncToGenerator"),
  ce = require("../../FE63B1F29E166AAF9805D9F5547EDA65.js"),
  ue = require("../../7D5E3DB09E166AAF1B3855B7208EDA65.js"),
  fe = 1,
  Fe = 0,
  he = 0,
  Ce = 0,
  Se = 0,
  le = 0,
  de = "设备连接成功",
  ge = 0,
  Be = 0,
  Te = 0,
  De = 30,
  me = 0,
  pe = 0,
  Ge = 0,
  Ae = 0,
  ve = 0,
  Ee = 0,
  Ue = 0,
  we = 0,
  Ie = 0,
  be = 0,
  Oe = 0,
  Ne = 0,
  xe = 1,
  Me = 126,
  Pe = "欢迎使用",
  Ve = "1,27,30,欢迎",
  We = "1,57,30,使用",
  Re = 0,
  Le = "ff",
  Ke = "ff",
  ye = "ff",
  He = ["/img/bc1.gif", "", "", "", ""],
  Ye = 0,
  $e = "80",
  ke = 0,
  Ze = wx,
  je = "#ffffff",
  ze = ["1", "2", "3", "4"],
  Je = 0;

function _e() {
  return 0 == Je && 0 == (Je = (0, ce.GetCFG)("RSID")) && (Je = function () {
    for (var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", e = "", n = 0; n < 12; n++) {
      var i = Math.floor(Math.random() * t.length);
      e += t[i]
    }
    return e
  }(), (0, ce.SetCFG)("RSID", Je)), Je
}

function qe() {
  var t = new Date;
  gn("FD48" + En(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()))
}

function Xe(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  Ze.showModal({
    title: t,
    editable: true,
    placeholderText: e,
    confirmText: Y ? "YES" : "确定",
    cancelText: Y ? "NO" : "取消",
    success: function (t) {
      t.confirm && n(t.content)
    }
  })
}

function Qe(t, e, n, i) {
  var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ze.showModal({
    title: Y ? e : t,
    editable: true,
    placeholderText: (Y ? "Range:" : "范围:") + n + "-" + i,
    confirmText: Y ? "YES" : "确定",
    cancelText: Y ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(i) || e < Number(n) || !isFinite(e)) && 2 != Se) return void(0, ce.Toast)(Y ? "Beyond the set range!" : "超出设置范围!");
        a(e)
      }
    }
  })
}

function tn(t, e, n, i) {
  var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ze.showModal({
    title: Y ? e : t,
    editable: true,
    placeholderText: Y ? i : n,
    confirmText: Y ? "YES" : "确定",
    cancelText: Y ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, ce.Toast)(Y ? "Input Cannot Be Empty!" : "输入不能为空!");
        a(e)
      }
    }
  })
}

function en(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ze.showModal({
    title: Y ? e : t,
    content: Y ? i : n,
    confirmText: Y ? "YES" : "确定",
    cancelText: Y ? "NO" : "取消",
    success: function (t) {
      t.confirm && a(t)
    }
  })
}

function nn(t, e, n, i, a, o) {
  var r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function () {};
  Ze.showModal({
    title: Y ? e : t,
    content: Y ? i : n,
    confirmText: Y ? o : a,
    showCancel: false,
    success: function (t) {
      r(t)
    }
  })
}
var an = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "温度 异常", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"],
  on = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  rn = [1, 1, 1, 1, 1, 1, 1, 1];

function sn(t) {
  for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, n = 0, i = 0; i < 12; i++)
    if (an[i] == t) {
      on[i] = e, n = 1;
      break
    } if (!n && e)
    for (var a = 1; a < 11; a++)
      if (6 != a && 0 == on[a]) {
        an[a] = t, on[a] = e;
        break
      }
}

function cn() {
  var t = [an[0].split(" "), an[1].split(" "), an[2].split(" "), an[3].split(" "), an[4].split(" "), an[5].split(" "), an[6].split(" "), an[7].split(" "), an[8].split(" "), an[9].split(" "), an[10].split(" "), an[11].split(" ")];
  n.setData({
    E1S: on[0],
    E1A: t[0][0],
    E1B: t[0][1],
    E2S: on[1],
    E2A: t[1][0],
    E2B: t[1][1],
    E3S: on[2],
    E3A: t[2][0],
    E3B: t[2][1],
    E4S: on[3],
    E4A: t[3][0],
    E4B: t[3][1],
    E5S: on[4],
    E5A: t[4][0],
    E5B: t[4][1],
    E6S: on[5],
    E6A: t[5][0],
    E6B: t[5][1],
    E7S: on[6],
    E7A: t[6][0],
    E7B: t[6][1],
    E8S: on[7],
    E8A: t[7][0],
    E8B: t[7][1],
    E9S: on[8],
    E9A: t[8][0],
    E9B: t[8][1],
    EAS: on[9],
    EAA: t[9][0],
    EAB: t[9][1],
    EBS: on[10],
    EBA: t[10][0],
    EBB: t[10][1],
    ECS: on[11],
    ECA: t[11][0],
    ECB: t[11][1]
  })
}

function un() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  rn[0] == t && rn[1] == e && rn[2] == n && rn[3] == i && rn[4] == a && rn[5] == o && rn[6] == r || (on = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], rn[0] = t, rn[1] = e, rn[2] = n, rn[3] = i, rn[4] = a, rn[5] = o, rn[6] = r, an = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"], 128 & t && sn("测试 模式"), 64 & t && sn("负载 震荡"), 32 & t && sn("输出 继电器"), 16 & t && sn("放电 电路"), 8 & t && sn("继电器 电路"), 4 & t && sn("短路 锁死"), 2 & t && sn("硬件 地址"), 1 & t && sn("放电 电路"), 128 & e && sn("更换 地址"), 64 & e && sn("地址 冲突"), 32 & e && sn("均流 屏蔽"), 16 & e && sn("通讯 异常"), 8 & e && sn("电容 电压"), 4 & e && sn("输出 过压"), 2 & e && sn("输出 模式"), 1 & e && sn("插座 异常"), 128 & n && sn("母线 电压"), 64 & n && sn("母线 平衡"), 32 & n && sn("输入 停电"), 16 & n && sn("恒流 状态"), 8 & n && sn("输出 短路"), 4 & n && sn("内部 通讯"), 2 & n && sn("效率 寻优"), 1 & n && sn("均流 异常"), 128 & i && sn("PFC 故障"), 64 & i && sn("输入 过压"), 32 & i && sn("ID 重复"), 16 & i && sn("严重 均流"), 8 & i && sn("交流 缺相"), 4 & i && sn("三项 平衡"), 2 & i && sn("输入 欠压"), 1 & i && sn("顺序 启机"), 128 & a && sn("通讯 质量"), 64 & a && sn("自动 模式"), 32 & a && sn("地址 重排"), 16 & a && sn("内部 过温"), 2 & a && sn("模块 关机"), 1 & a && sn("低温 保护"), 4 & a && sn("风机 低速"), 8 & a && sn("其它 异常"), 128 & o && sn("输出 欠压"), 64 & o && sn("输出 过流"), 32 & o && sn("存储 芯片"), 16 & o && sn("风机 故障"), 8 & o && sn("模块 保护"), 4 & o && sn("模块 故障"), 2 & o && sn("超温 保护"), 1 & o && sn("过压 锁死"), cn())
}

function fn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  rn[0] == t && rn[1] == e && rn[2] == n && rn[3] == i && rn[4] == a && rn[5] == o && rn[6] == r || (on = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], rn[0] = t, rn[1] = e, rn[2] = n, rn[3] = i, rn[4] = a, rn[5] = o, rn[6] = r, an = ["超温 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "恒流 状态", "输出 过流", "输出 欠压", "输出 过压", "输出 过载", "模块 关机"], 128 & t && sn("输出 保险"), 64 & t && sn("内部 过温"), 32 & t && sn("输出 过流"), 16 & t && sn("输出 高关"), 8 & t && sn("输入 低关"), 4 & t && sn("输入 高关"), 2 & t && sn("过温 关机"), 1 & t && sn("风机 异常"), 128 & e && sn("PFC 过流"), 64 & e && sn("原边 过流"), 32 & e && sn("内部 通讯"), 16 & e && sn("EEP ROM"), 8 & e && sn("PFC 欠压"), 4 & e && sn("PFC 过压"), 1 & e && sn("均流 异常"), 32 & n && sn("输出 过载"), 16 & n && sn("PFC 故障"), 8 & n && sn("输出 欠压"), 4 & n && sn("输入 频率"), 2 & n && sn("输入 熔断"), 1 & n && sn("启动 异常"), 128 & i && sn("DUS4 欠压"), 64 & i && sn("BUS3 欠压"), 32 & i && sn("BUS2 欠压"), 16 & i && sn("BUS1 欠压"), 8 & i && sn("启动 电阻"), 4 & i && sn("机外 过温"), 2 & i && sn("匹配 异常"), 128 & a && sn("输入 停电"), 64 & a && sn("输入 欠压"), 32 & a && sn("输入 过压"), 16 & a && sn("BUS 平衡"), 8 & a && sn("BUS4 过压"), 4 & a && sn("BUS3 过压"), 2 & a && sn("BUS2 过压"), 1 & a && sn("BUS1 过压"), 64 & o && sn("模块 关机"), 32 & o && sn("模块 休眠"), 8 & o && sn("输入 功率"), 4 & o && sn("超温 功率"), 2 & o && sn("恒流 状态"), 1 & o && sn("输出 功率"), 128 & r && sn("启动 未接"), 64 & r && sn("风机 低速"), 32 & r && sn("插座 过温"), 16 & r && sn("输入 反接"), 8 & r && sn("机内 过温"), 4 & r && sn("输出 过流"), 2 & r && sn("输出 欠压"), 1 & r && sn("输出 过压"), cn())
}

function Fn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  console.log(t, e, n, i), rn[0] == t && rn[1] == e && rn[2] == n && rn[3] == i && rn[4] == a && rn[5] == o && rn[6] == r || (on = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], rn[0] = t, rn[1] = e, rn[2] = n, rn[3] = i, rn[4] = a, rn[5] = o, rn[6] = r, an = ["超温 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "恒流 状态", "输出 过流", "输出 欠压", "输出 过压", "输出 过载", "模块 关机"], 128 & t && sn("未知 0A80"), 64 & t && sn("未知 0A40"), 32 & t && sn("未知 0A20"), 16 & t && sn("未知 0A10"), 8 & t && sn("未知 0A08"), 4 & t && sn("未知 0A04"), 2 & t && sn("模块 异常"), 1 & t && sn("模块 关机"), 128 & e && sn("未知 0B80"), 64 & e && sn("未知 0B40"), 32 & e && sn("未知 0B20"), 16 & e && sn("未知 0B10"), 8 & e && sn("未知 0B08"), 4 & e && sn("未知 0B04"), 2 & e && sn("未知 0B02"), 1 & e && sn("未知 0B01"), 128 & n && sn("未知 0C80"), 64 & n && sn("未知 0C40"), 32 & n && sn("未知 0C20"), 16 & n && sn("未知 0C10"), 8 & n && sn("未知 0C08"), 4 & n && sn("未知 0C04"), 2 & n && sn("未知 0C02"), 1 & n && sn("未知 0C01"), 128 & i && sn("未知 0D80"), 64 & i && sn("未知 0D40"), 32 & i && sn("风机 异常"), 16 & i && sn("输入 异常"), 8 & i && sn("未知 0D08"), 4 & i && sn("未知 0D04"), 2 & i && sn("未知 0D02"), 1 & i && sn("未知 0D01"), cn())
}

function hn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
    s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
  rn[0] == t && rn[1] == e && rn[2] == n && rn[3] == i && rn[4] == a && rn[5] == o && rn[6] == r && rn[7] == s || (on = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], rn[0] = t, rn[1] = e, rn[2] = n, rn[3] = i, rn[4] = a, rn[5] = o, rn[6] = r, rn[7] = s, an = ["正常 中止", "电桩 温度", "枪头 异常", "内部 过温", "充电 异常", "电桩 急停", "其他 异常", "自检 异常", "预充 异常", "电流 异常", "电压 异常", "参数 异常"], 3 & t ? sn("正常 中止") : t >> 2 & 3 ? sn("人工 中止") : t >> 4 & 3 ? sn("故障 中止") : t >> 6 & 3 && sn("车辆 中止"), 3 & e ? sn("电桩 温度") : e >> 2 & 3 ? sn("枪头 异常") : e >> 4 & 3 ? sn("内部 过温") : e >> 6 & 3 && sn("充电 异常"), 3 & n ? sn("电桩 急停") : n >> 2 & 3 ? sn("其他 异常") : n >> 4 & 3 ? sn("自检 异常") : n >> 6 & 3 && sn("预充 异常"), 3 & i ? sn("电流 异常") : i >> 2 & 3 ? sn("电压 异常") : i >> 4 & 3 && sn("参数 异常"), 3 & a && sn("BRM 超时"), 3 & o && sn("BCP 超时"), o >> 2 & 3 && sn("BRO 超时"), 3 & r && sn("BCS 超时"), r >> 2 & 3 && sn("BCL 超时"), r >> 4 & 3 && sn("BST 超时"), 3 & s && sn("BSD 超时"), s >> 2 & 3 && sn("BSM 超时"), s >> 4 & 3 && sn("其他 超时"), cn())
}

function Cn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  rn[0] == t && rn[1] == e && rn[2] == n || (on = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], rn[0] = t, rn[1] = e, rn[2] = n, an = ["输入 过压", "输出 过压", "恒压 状态", "过热 保护", "风机 故障", "模块 关机", "输入 欠压", "输出 欠压", "恒流 状态", "过流 保护", "模块 故障", "设置 关机"], 128 & t && sn("输出 欠压"), 64 & t && sn("输出 过压"), 32 & t && sn("输入 欠压"), 16 & t && sn("输入 过压"), 8 & t && sn("风机 故障"), 4 & t && sn("恒流 状态"), 2 & t && sn("模块 故障"), 1 & t && sn("模块 关机"), 0 == t && c > 20 && sn("恒压 状态"), 4 & e && sn("设置 关机"), 2 & e && sn("过热 保护"), 1 & e && sn("过流 保护"), cn())
}

function Sn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  rn[0] == t && rn[1] == e && rn[2] == n || (on = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], rn[0] = t, rn[1] = e, rn[2] = n, an = ["输入 过压", "输出 过压", "功率 限制", "过热 保护", "风机 故障", "模块 关机", "输入 欠压", "输出 欠压", "恒流 状态", "过流 保护", "模块 故障", "设置 关机"], 32 & t && sn("放电 异常"), 16 & t && sn("模块 休眠"), 8 & t && sn("输入 异常"), 4 & t && sn("内部 通讯"), 1 & t && sn("输出 短路"), 128 & e && sn("通讯 异常"), 64 & e && sn("缓启 打开"), 32 & e && sn("输出 过压"), 16 & e && sn("过温 告警"), 8 & e && sn("风机 故障"), 4 & e && sn("模块 保护"), 2 & e && sn("模块 故障"), 1 & e && sn("模块 关机"), 128 & n && sn("PFC 关机"), 64 & n && sn("输入 过压"), 32 & n && sn("输入 欠压"), 16 & n && sn("三相 平衡"), 8 & n && sn("三相 缺相"), 4 & n && sn("均流 异常"), 2 & n && sn("ID 重复"), 1 & n && sn("恒流 状态"), cn())
}
var ln = new Array,
  dn = 0;

function gn(t) {
  return Bn.apply(this, arguments)
}

function Bn() {
  return (Bn = se(re().mark((function t(e) {
    return re().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (1 == Ce && console.log("Send", e), 0 == Dn) {
            t.next = 4;
            break
          }
          return (0, ce.Toast)(Y ? "There Are Unfinished Sending Tasks" : "有发送任务未完成"), t.abrupt("return");
        case 4:
          ln.push(e), 0 == dn && (dn = 1, setInterval((function () {
            ln.length > 0 && (ue.easySendData1(ln[0], true), ln.shift())
          }), 100));
        case 6:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var Tn = [""],
  Dn = 0;

function mn(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  0 == Dn ? Ze.showModal({
    title: Y ? "Confirm Whether To Send" : "确认是否发送",
    editable: false,
    confirmText: Y ? "YES" : "确定",
    cancelText: Y ? "NO" : "取消",
    success: function (i) {
      if (i.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), Dn = 0, (Tn = [])[0] = "F1" + (n ? RegExp.$1 : En(RegExp.$1));
        for (var a = e ? RegExp.$2 : Gn(RegExp.$2), o = 0; o < a.length; o += 240) Dn++, Tn[Dn] = "F2" + a.slice(o, o + 240);
        Tn[Tn.length] = "F3", Dn = 0, pn()
      }
    }
  }) : (0, ce.Toast)(Y ? "There Are Unfinished Sending Tasks" : "有发送任务未完成")
}

function pn(t) {
  var e = Tn[Dn];
  ue.easySendData1(e, true), (0, ce.Toast)((Y ? "Sending:" : "发送进度:") + (Dn / Tn.length * 100).toFixed(2) + "%"), Dn++
}

function Gn(t) {
  if (!t) return t;
  var e, n, i, a, o, r, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    c = 0,
    u = 0,
    f = [];
  t += "";
  do {
    e = (r = s.indexOf(t.charAt(c++)) << 18 | s.indexOf(t.charAt(c++)) << 12 | (a = s.indexOf(t.charAt(c++))) << 6 | (o = s.indexOf(t.charAt(c++)))) >> 16 & 255, n = r >> 8 & 255, i = 255 & r, f[u++] = 64 === a ? e.toString(16).padStart(2, "0") : 64 === o ? e.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0") : e.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0") + i.toString(16).padStart(2, "0")
  } while (c < t.length);
  return f.join("")
}

function An(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function vn(t) {
  var e = Math.floor(t / 3600),
    n = Math.floor(t % 3600 / 60),
    i = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(n).padStart(2, "0") + ":" + String(i).padStart(2, "0")
}

function En(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var n = "", i = 0; i < t.length; i++) n += t.charCodeAt(i).toString(16).padStart(2, "0");
  return e && (n = n.padEnd(2 * e, "0")), n
}

function Un(t) {
  for (var e = "", n = 0, i = "", a = 0; a < t.length / 2; a++) {
    var o = t.substr(2 * a, 2),
      r = parseInt(o, 16);
    if (0 == r) break;
    n && r ? (i += "%" + o, (n -= 1) || (e += decodeURIComponent(i), i = "")) : r >= 224 & r <= 239 ? (i += "%" + o, n = 2) : r && (e += String.fromCharCode(r))
  }
  return e
}

function wn(t) {
  return Math.round(100 * t).toString(16).padStart(8, "0")
}

function In(t) {
  return Math.floor(t).toString(16).padStart(4, "0")
}

function bn(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function On(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = t.getFloat32(e, true).toFixed(n);
  return i ? parseFloat(a) : a
}

function Nn(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return n ? parseFloat(i) : i
}

function xn(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}

function Mn() {
  setTimeout((function () {
    n.navigateBack({
      delta: 0
    })
  }), 500)
}
Page({
  data: {
    nbsp: "　",
    Cr50: "#000000",
    Cr0: je,
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: je,
    Cr4: "#60ffc8",
    Cr5: je,
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: je,
    Cr10: je,
    Cr11: "#00ff00",
    Cr12: "#00c8ff",
    Cr13: "#ff9430",
    Cr14: "#60ffc8",
    Cr15: je,
    Cr16: "#f80ca0",
    Cr17: je,
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
    TMD: 0,
    ShowM: 0,
    LST: 0,
    APP: "1.09",
    CVer: 10,
    TCH: 0,
    STR: "设备连接异常",
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
  BTER0: function (t) {
    this.setData({
      ShowBar: 32 != this.data.ShowBar ? 32 : -1
    })
  },
  BTUSC: function (t) {
    this.setData({
      ShowBar: 33 != this.data.ShowBar ? 33 : -1
    })
  },
  uset: function (t) {
    (2 == le || Se) && (gn("F401"), gn("FF01"), this.setData({
      Panel: Se ? 2 : 3,
      ShowBar: Se ? 0 : 25,
      LOGO: Y ? "Preview" : "预览"
    }))
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, ce.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    2 == Se ? (gn("CA"), Mn()) : tn("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      gn("FA75" + En(t))
    }))
  },
  BTRST: function (t) {
    en("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      gn("F60100"), (0, ce.Toast)(Y ? "The device is restarting" : "重置已发送,设备正在重启!"), Mn()
    }))
  },
  BTRST1: function (t) {
    fe > 5.39 && en("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置并重启", "Exception repair will detect and reset certain settings", (function (t) {
      gn("F60001"), (0, ce.Toast)(Y ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), Mn()
    }))
  },
  BTRstart: function (t) {
    en("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      gn("F001"), (0, ce.Toast)(Y ? "The device is restarting" : "设备正在重启!"), Mn()
    }))
  },
  BTClean: function (t) {
    en("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      gn("AA01"), (0, ce.Toast)(Y ? "Data cleared to zero" : "数据已清零!"), Mn()
    }))
  },
  BTBC: function (t) {
    gn("F400"), this.setData({
      Panel: 1
    })
  },
  DST1: function (t) {
    gn("AC00"), gn("FF18")
  },
  DST2: function (t) {
    gn("AC01"), gn("FF18")
  },
  DST3: function (t) {
    gn("AC02"), gn("FF18")
  },
  DST4: function (t) {
    gn("AC03"), gn("FF18")
  },
  BTUJY1: function (t) {
    gn("F9E3" + bn(1 - Xt)), gn("FF10")
  },
  BTUJY2: function (t) {
    Qe("设置静音模式最大电流", "Set the maximum current for silent mode", "5", "255", (function (t) {
      gn("F9E6" + bn(t)), gn("FF10")
    }))
  },
  BTUJY3: function (t) {
    Qe("设置静音模式最大风速", "Set the maximum wind speed for silent mode", "50", "200", (function (t) {
      gn("F9E4" + bn(t)), gn("FF10")
    }))
  },
  BTUJY4: function (t) {
    gn("F9E5" + bn(1 - te)), gn("FF10")
  },
  BTUJY5: function (t) {
    te && Xt && n.BTUJY3()
  },
  BTER1D: function (t) {
    gn("F4" + bn(ie > 1 ? ie - 1 : 1))
  },
  BTER1U: function (t) {
    gn("F4" + bn(ie < ae ? ie + 1 : ae))
  },
  BTER1S: function (t) {
    Qe("输入要查询的记录编号", "Input the record number to be queried", 1, ae, (function (t) {
      gn("F4" + bn(t))
    }))
  },
  BTER1C: function (t) {
    this.setData({
      ShowBar: 32
    }), ae && en("确认是否清除故障记录", "Confirm whether to clear the fault record", "", "", (function (t) {
      gn("F40001"), (0, ce.Toast)(Y ? "Records have been cleared!" : "记录已清除!")
    }))
  },
  BTUSC1: function (t) {
    gn("F9E9" + bn(2 == Ue ? 1 : 2)), gn("FF10")
  },
  BTKT1: function (t) {
    gn("A4" + bn(1 - Z))
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), Qe("设置输出最大功率", "Set maximum output power", "500", "50000", (function (t) {
      gn("F84E" + wn(t)), gn("F84D" + wn(t)), gn("FF12")
    }))
  },
  IMGBT: function (t) {},
  BTLOGO0: function (t) {
    if ("预览" == n.data.LOGO || "Preview" == n.data.LOGO) Ze.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: true
    }), n.SetLOGO(Ve + "|" + We, n);
    else if ("发送" == n.data.LOGO || "Send" == n.data.LOGO) {
      return mn(s, 1), void gn("FAD2" + En(unescape(encodeURIComponent(Pe))))
    }
    n.setData({
      ShowBar: 20,
      LOGO: Y ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (t) {
    tn("设置第一行LOGO", "Set the first line logo", Ve, Ve, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Ve = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) Ve = "1,27,30," + RegExp.$1, We = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, ce.Toast)(Y ? "Input format error" : "输入格式错误");
        Ve = "1,27,30," + RegExp.$1
      }
      n.setData({
        LOGO1: Ve,
        LOGO2: We,
        LOGO: Y ? "Preview" : "预览"
      }), n.BTLOGO0()
    }))
  },
  BTLOGO2: function (t) {
    tn("设置第二行LOGO", "Set second line logo", We, We, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) We = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) Ve = "1,27,30," + RegExp.$1, We = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, ce.Toast)(Y ? "Input format error" : "输入格式错误");
        We = "1,57,30," + RegExp.$1
      }
      n.setData({
        LOGO1: Ve,
        LOGO2: We,
        LOGO: Y ? "Preview" : "预览"
      }), n.BTLOGO0()
    }))
  },
  BTLOGO3: function (t) {
    gn("F9C0" + bn(1 - Mt)), gn("FF17")
  },
  BTLOGO4: function (t) {
    tn("设置简约模式文字", "Set the first line logo", "最多6个汉字或者12个英文", Ve, (function (t) {
      gn("FAD2" + En(t = unescape(encodeURIComponent(t)))), gn("F7")
    }))
  },
  SetLOGO: function (t, e) {
    Ze.createSelectorQuery().select("#LOGO").fields({
      node: true,
      size: true
    }).exec((function (n) {
      var i = n[0].node,
        a = i.getContext("2d");
      i.width = 60, i.height = 60, a.fillStyle = "#000", a.scale(1, 1), a.fillRect(0, 0, 60, 60), a.fillStyle = "#fff";
      var o = t.split("|");
      Pe = "";
      for (var r = 0; r < o.length; r += 1) {
        var c = o[r].split(",");
        Pe += c[3];
        var u = c[0],
          f = c[1],
          F = c[2],
          h = c[3];
        a.font = "normal " + F + "px Kaiti", a.fillText(h, u, f)
      }
      var C = [0],
        S = -1;
      s = "DataStart=LOGO{";
      for (var l = 0; l < 60; l += 1) {
        for (var d = a.getImageData(0, l, 60, 1).data, g = 0; g < 60; g += 1) {
          g % 8 == 0 && (g && (s += C[S].toString(16).padStart(2, "0")), S += 1);
          var B = .299 * d[4 * g] + .587 * d[4 * g + 1] + .114 * d[4 * g + 2];
          C[S] = C[S] >> 1, C[S] = C[S] | (B < 100 ? 0 : 128)
        }
        s += (C[S] >> 4).toString(16).padStart(2, "0")
      }
      s += "}DataEnd", Ze.hideToast(), e.setData({
        LOGO: Y ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    en("是否切温度采集点", "Confirm whether to switch temperature collection points", "无特殊情况请勿修改此值", "Under normal circumstances, there is no need to modify this value", (function (t) {
      gn("F962" + bn(1 - Ut)), gn("FF16")
    }))
  },
  SetCAN: function (t, e, n) {
    en("确认是否切换为" + t, "Switch to " + e, "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == Se) {
        for (var e = parseInt(G, 16), i = e.toString(), a = 0, o = 0; o < i.length; o++) a += i.charCodeAt(o);
        gn("C8FF" + Math.floor(Math.floor(e / 611) * a).toString(16).slice(-6) + n)
      }
      gn("FC53" + n + "01"), (0, ce.Toast)(Y ? "The device is restarting" : "重置已发送,设备正在重启!"), Mn()
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
    n.SetCAN("ZEEHO", "ZEEHO", "0C")
  },
  BTCAN14: function (t) {
    n.SetCAN("EV_Charger", "EV_Charger", "0E")
  },
  BTLEDK2: function (t) {
    Qe("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      gn("F968" + bn(t)), gn("FF13")
    }))
  },
  BTLEDK1: function (t) {
    Qe("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      gn("F969" + bn(t)), gn("FF13")
    }))
  },
  BTLEDKS1: function (t) {
    Qe("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      gn("F96D" + bn(t)), gn("FF12")
    }))
  },
  BTLEDKS2: function (t) {
    Qe("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      gn("F96A" + bn(t)), gn("FF13")
    }))
  },
  BTStart1: function (t) {
    Qe("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      gn("F96B" + bn(t)), gn("FF12")
    }))
  },
  BTStart2: function (t) {
    gn("F96C" + bn(1 - X)), gn("FF12")
  },
  BTGIF1: function (t) {
    gn("F96F" + bn(1 - mt)), gn("FF15")
  },
  BT_GIF1: function (t) {
    mn((0, ce.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    mn((0, ce.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    mn((0, ce.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    mn((0, ce.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    mn((0, ce.GetGIF)(5))
  },
  BTUI: function (t) {
    n.setData({
      CVer: fe.toFixed(2),
      SCAN: o,
      ID: G,
      ACT: i
    }), gn("F9C8" + bn(0 == Ie ? 1 - zt : 0 == zt ? 1 : 1 == zt ? 2 : 0)), gn("FF19")
  },
  Scr1: function (t) {
    xe = 1, n.setData({
      Cr0: je,
      Cr1: "#00ff00",
      Cr2: "#00c8ff",
      Cr3: je,
      Cr4: "#60ffc8",
      Cr5: je,
      Cr6: "#ff9430",
      Cr7: "#f80ca0",
      Cr8: je,
      Cr10: je,
      Cr11: "#00ff00",
      Cr12: "#00c8ff",
      Cr13: "#ff9430",
      Cr14: "#60ffc8",
      Cr15: je,
      Cr16: "#f80ca0",
      Cr17: je,
      Crs: xe
    })
  },
  Scr2: function (t) {
    xe = 2, n.setData({
      Cr0: je,
      Cr1: je,
      Cr2: je,
      Cr3: je,
      Cr4: je,
      Cr5: je,
      Cr6: je,
      Cr7: je,
      Cr8: je,
      Cr10: je,
      Cr11: je,
      Cr12: je,
      Cr13: je,
      Cr14: je,
      Cr15: je,
      Cr16: je,
      Cr17: je,
      Crs: xe
    })
  },
  Scr3: function (t) {
    xe = 3, n.setData({
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
      Crs: xe
    })
  },
  Scr4: function (t) {
    xe = 0, n.setData({
      Cr0: (0, ce.GetCFG)("Cr0", je),
      Cr1: (0, ce.GetCFG)("Cr1", "#00ff00"),
      Cr2: (0, ce.GetCFG)("Cr2", "#00c8ff"),
      Cr3: (0, ce.GetCFG)("Cr3", je),
      Cr4: (0, ce.GetCFG)("Cr4", "#60ffc8"),
      Cr5: (0, ce.GetCFG)("Cr5", je),
      Cr6: (0, ce.GetCFG)("Cr6", "#ff9430"),
      Cr7: (0, ce.GetCFG)("Cr7", "#f80ca0"),
      Cr8: (0, ce.GetCFG)("Cr8", je),
      Cr10: (0, ce.GetCFG)("Cr10", je),
      Cr11: (0, ce.GetCFG)("Cr11", "#00ff00"),
      Cr12: (0, ce.GetCFG)("Cr12", "#00c8ff"),
      Cr13: (0, ce.GetCFG)("Cr13", "#ff9430"),
      Cr14: (0, ce.GetCFG)("Cr14", "#60ffc8"),
      Cr15: (0, ce.GetCFG)("Cr15", je),
      Cr16: (0, ce.GetCFG)("Cr16", "#f80ca0"),
      Cr17: (0, ce.GetCFG)("Cr17", je),
      Crs: xe
    })
  },
  BTCr1: function (t) {
    0 == n.data.UI ? (gn("F5280000000000" + An(this.data.Cr50)), gn("F53000" + An(this.data.Cr0) + "0000f01c"), gn("F53100" + An(this.data.Cr1) + "00209F26"), gn("F53200" + An(this.data.Cr2) + "00479F26"), gn("F53300" + An(this.data.Cr3) + "006e9F27"), gn("F53400" + An(this.data.Cr4) + "00969F3f"), gn("F53500" + An(this.data.Cr5) + "A3204d4d"), gn("F53600" + An(this.data.Cr6) + "50d64f1A"), gn("F53700" + An(this.data.Cr7) + "00d64f1A"), gn("F53801" + An(this.data.Cr8) + "A3774d68")) : 1 == n.data.UI && (gn("F52000" + An(this.data.Cr10) + "0000781c"), gn("F52100" + An(this.data.Cr11) + "001cf02e"), gn("F52200" + An(this.data.Cr12) + "004af02e"), gn("F52300" + An(this.data.Cr13) + "0078f02e"), gn("F52400" + An(this.data.Cr14) + "00a6f02e"), gn("F52500" + An(this.data.Cr15) + "7800781c"), gn("F52600" + An(this.data.Cr16) + "00d4781b"), gn("F52701" + An(this.data.Cr17) + "78d4781b"))
  },
  CKA: function (t) {
    Re = 50, this.CRSet(this.data.Cr50)
  },
  CK0: function (t) {
    Re = 0, this.CRSet(this.data.Cr0)
  },
  CK1: function (t) {
    Re = 1, this.CRSet(this.data.Cr1)
  },
  CK2: function (t) {
    Re = 2, this.CRSet(this.data.Cr2)
  },
  CK3: function (t) {
    Re = 3, this.CRSet(this.data.Cr3)
  },
  CK4: function (t) {
    Re = 4, this.CRSet(this.data.Cr4)
  },
  CK5: function (t) {
    Re = 5, this.CRSet(this.data.Cr5)
  },
  CK6: function (t) {
    Re = 6, this.CRSet(this.data.Cr6)
  },
  CK7: function (t) {
    Re = 7, this.CRSet(this.data.Cr7)
  },
  CK8: function (t) {
    Re = 8, this.CRSet(this.data.Cr8)
  },
  CK10: function (t) {
    Re = 10, this.CRSet(this.data.Cr10)
  },
  CK11: function (t) {
    Re = 11, this.CRSet(this.data.Cr11)
  },
  CK12: function (t) {
    Re = 12, this.CRSet(this.data.Cr12)
  },
  CK13: function (t) {
    Re = 13, this.CRSet(this.data.Cr13)
  },
  CK14: function (t) {
    Re = 14, this.CRSet(this.data.Cr14)
  },
  CK15: function (t) {
    Re = 15, this.CRSet(this.data.Cr15)
  },
  CK16: function (t) {
    Re = 16, this.CRSet(this.data.Cr16)
  },
  CK17: function (t) {
    Re = 17, this.CRSet(this.data.Cr17)
  },
  CRSet: function (t) {
    t.match(/#(..)(..)(..)/), Le = RegExp.$1, Ke = RegExp.$2, ye = RegExp.$3, this.setData({
      CR: parseInt(Le, 16),
      CG: parseInt(Ke, 16),
      CB: parseInt(ye, 16)
    })
  },
  SetCr: function () {
    0 == n.data.UI && Re >= 10 && 50 != Re && (Re = 0), 1 == n.data.UI && Re < 10 && (Re = 10), 0 == Re ? n.setData({
      Cr0: "#" + Le + Ke + ye
    }) : 1 == Re ? n.setData({
      Cr1: "#" + Le + Ke + ye
    }) : 2 == Re ? n.setData({
      Cr2: "#" + Le + Ke + ye
    }) : 3 == Re ? n.setData({
      Cr3: "#" + Le + Ke + ye
    }) : 4 == Re ? n.setData({
      Cr4: "#" + Le + Ke + ye
    }) : 5 == Re ? n.setData({
      Cr5: "#" + Le + Ke + ye
    }) : 6 == Re ? n.setData({
      Cr6: "#" + Le + Ke + ye
    }) : 7 == Re ? n.setData({
      Cr7: "#" + Le + Ke + ye
    }) : 8 == Re ? n.setData({
      Cr8: "#" + Le + Ke + ye
    }) : 10 == Re ? n.setData({
      Cr10: "#" + Le + Ke + ye
    }) : 11 == Re ? n.setData({
      Cr11: "#" + Le + Ke + ye
    }) : 12 == Re ? n.setData({
      Cr12: "#" + Le + Ke + ye
    }) : 13 == Re ? n.setData({
      Cr13: "#" + Le + Ke + ye
    }) : 14 == Re ? n.setData({
      Cr14: "#" + Le + Ke + ye
    }) : 15 == Re ? n.setData({
      Cr15: "#" + Le + Ke + ye
    }) : 16 == Re ? n.setData({
      Cr16: "#" + Le + Ke + ye
    }) : 17 == Re ? n.setData({
      Cr17: "#" + Le + Ke + ye
    }) : 50 == Re && n.setData({
      Cr50: "#" + Le + Ke + ye
    })
  },
  CSC: function (t) {
    0 == xe && (0, ce.SetCFG)("Cr" + Re, "#" + Le + Ke + ye)
  },
  CRC: function (t) {
    Le = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CGC: function (t) {
    Ke = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CBC: function (t) {
    ye = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CTC1: function (t) {
    $e = t.detail.value.toString(16).padStart(2, "0"), (0, ce.SetCFG)("BGT", $e), n.setData({
      BGC: "#000000" + $e
    })
  },
  BTBGP10: function (t) {
    n.setData({
      BGP: He[1],
      BGI: 1
    }), (0, ce.SetCFG)("BGI", 1)
  },
  BTBGP1: function (t) {
    tn("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, ce.SetCFG)("BGI", 1), (0, ce.SetCFG)("BGP1", t), n.setData({
        BGP1: t,
        BGP: t,
        BGI: 1
      })
    }))
  },
  BTBGP20: function (t) {
    n.setData({
      BGP: He[2],
      BGI: 2
    }), (0, ce.SetCFG)("BGI", 2)
  },
  BTBGP2: function (t) {
    tn("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, ce.SetCFG)("BGI", 2), (0, ce.SetCFG)("BGP2", t), n.setData({
        BGP2: t,
        BGP: t,
        BGI: 2
      })
    }))
  },
  BTBGP30: function (t) {
    n.setData({
      BGP: He[3],
      BGI: 3
    }), (0, ce.SetCFG)("BGI", 3)
  },
  BTBGP3: function (t) {
    tn("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, ce.SetCFG)("BGI", 3), (0, ce.SetCFG)("BGP3", t), n.setData({
        BGP3: t,
        BGP: t,
        BGI: 3
      })
    }))
  },
  BTBGP40: function (t) {
    n.setData({
      BGP: He[4],
      BGI: 4
    }), (0, ce.SetCFG)("BGI", 4)
  },
  BTBGP4: function (t) {
    tn("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, ce.SetCFG)("BGI", 4), (0, ce.SetCFG)("BGP4", t), n.setData({
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
            He[5] = t.savedFilePath, n.setData({
              BGP: He[5],
              BGI: 5
            }), (0, ce.SetCFG)("BGI", 5), (0, ce.SetCFG)("BGP5", He[5])
          }
        })
      }
    })
  },
  BTCKA2: function (t) {
    gn("F972" + bn(1 - pt)), gn("FF15")
  },
  BTEN1: function (t) {
    he && this.MSG("", "1100001BE4000005DC000020D0000005DC010" + (1 - Y) + "00"), (0, ce.SetCFG)("UEN", 1 - Y), gn("F970" + bn(1 - Y)), gn("FF11")
  },
  BTBLE1: function (t) {
    tn("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      gn(t = (t = "FA73" + En(t = unescape(encodeURIComponent(t)))).substring(0, 40)), gn("FF20")
    }))
  },
  BTBLE2: function (t) {
    tn("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      gn("FA74" + En(t)), gn("FF21")
    }))
  },
  BTVIN: function (t) {
    tn("设置取电器VIN码", "Set VIN", "标准17位英文和数字", "Up to 17 characters", (function (t) {
      return (t = t.toUpperCase()).match(/^[A-HJ-NPR-Z0-9]{14}\d\d\d$/) ? (gn("FAD3" + En(t = unescape(encodeURIComponent(t)))), void gn("FF25")) : void(0, ce.Toast)(Y ? "Incorrect VIN input!" : "输入VIN不正确!")
    }))
  },
  BTTCH1: function (t) {
    tn("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return gn("FAD1" + En(t)), void gn("FF24");
      (0, ce.Toast)(Y ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    Qe("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      gn("F9C7" + bn(t)), gn("FF18")
    }))
  },
  BTDDV1: function (t) {
    0 != lt && en("是否切换驱动ST7789 1.54", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      gn("CD02")
    }))
  },
  BTDDV2: function (t) {
    1 != lt && en("是否切换驱动JD9853 1.83(14P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      gn("CD03")
    }))
  },
  BTDDV3: function (t) {
    2 != lt && en("是否切换驱动JD9853 1.83(18P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      gn("CD04")
    }))
  },
  BTDDV4: function (t) {
    3 != lt && en("是否切换驱动ST7789 1.69(18P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      gn("CD05")
    }))
  },
  BTDDV5: function (t) {
    4 != lt && en("是否切换驱动ST7789 1.83(14P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      gn("CD06")
    }))
  },
  BTDDV6: function (t) {
    5 != lt && en("是否切换驱动ST7789 1.83(18P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      gn("CD07")
    }))
  },
  BTKEY1: function (t) {
    gn("F967" + bn(1 - R)), gn("FF10")
  },
  BTKEY2: function (t) {
    gn("F966" + bn(1 - $)), gn("FF11")
  },
  BTKEY3: function (t) {
    gn("F9E8" + bn(1 - kt)), gn("FF11")
  },
  BTKEY4: function (t) {
    gn("F9EA" + bn(2 == Ie ? 1 : 2)), gn("FF11")
  },
  BTDDT1: function (t) {
    gn("F96E" + bn(wt >= 3 ? 0 : wt + 1)), gn("FF16")
  },
  UPDate: function (n, i) {
    return Number(u) && 2 != Se ? void(0, ce.Toast)(Y ? "Upgrading is prohibited while charging" : "充电中禁止升级,升级需断开电池连接线.") : (gn("A600"), gn("FF10"), gn("AB00" + En(unescape(encodeURIComponent(t)))), gn("AB01" + En(unescape(encodeURIComponent(e)))), gn(n + En(i)), void(0, ce.Toast)(Y ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示."))
  },
  BTLST: function (t) {
    this.setData({
      LST: 1 - this.data.LST
    })
  },
  BTUP6: function (t) {
    tn("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, ce.SetCFG)("WID", t), gn("AB00" + En(t = unescape(encodeURIComponent(t)))), gn("FF22")
    }))
  },
  BTUP7: function (t) {
    tn("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, ce.SetCFG)("WPD", t), gn("AB01" + En(t = unescape(encodeURIComponent(t)))), gn("FF23")
    }))
  },
  BTUP1: function (t) {
    if (!ke)
      if (this.data.CVer >= this.data.UPDate) {
        if (ge) return;
        en("升级确认", "Confirm clearance date", "当前已经是最新版,确定是否重新升级固件", "", (function (t) {
          n.UPDate("A700000000", "NewUI")
        }))
      } else Ze.showModal({
        title: Y ? "Start Upgrade" : "开始升级",
        editable: false,
        confirmText: Y ? "YES" : "确定",
        cancelText: Y ? "NO" : "取消",
        success: function (t) {
          t.confirm && n.UPDate("A700000000", "NewUI")
        }
      })
  },
  BTUP5: function (t) {
    Se && en("确认清除激活日期", "Confirm clearance date", "", "", (function (t) {
      gn("FD48" + En("Cxjdwx"))
    }))
  },
  BTUP8: function (t) {
    Ze.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    Ze.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    Ze.setClipboardData({
      data: "设备ID:" + G
    })
  },
  BTUP0: function (t) {
    Ze.showModal({
      title: Y ? "Firmware rollback" : "固件回退",
      editable: false,
      confirmText: Y ? "YES" : "确定",
      cancelText: Y ? "NO" : "取消",
      success: function (t) {
        t.confirm && (Fe && n.UPDate("A700000000", "CEVRollBack"), Fe || n.UPDate("A700000000", "CANRollBack"))
      }
    })
  },
  BTUP9: function (t) {
    Ze.showModal({
      title: Y ? "Write Test Firmware" : "升级测试固件",
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
    en("是否切换风速控制方式", "Confirm whether to switch the wind speed control mode", "如采用标配风机小板请勿修改此值", "If using the standard fan board, please do not modify this value", (function (t) {
      gn("F9E2" + bn(1 - p)), gn("FF")
    }))
  },
  BTUFS: function (t) {
    Qe("设置温度加速值", "Set temperature acceleration value", "2", "20", (function (t) {
      gn("F963" + bn(t)), gn("FF14")
    }))
  },
  BTAFS: function (t) {
    Qe("设置电流加速值", "Set current acceleration value", "0.1", "3.0", (function (t) {
      gn("F964" + bn(10 * t)), gn("FF14")
    }))
  },
  BTLFS: function (t) {
    Qe("设置初始风速值", "Set initial wind speed value", "20", "200", (function (t) {
      gn("F965" + bn(t)), gn("FF14")
    }))
  },
  BTMFS: function (t) {
    Qe("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      gn("F9C5" + bn(t)), gn("FF14")
    }))
  },
  BTTMC: function (t) {
    Qe("设置超温进入温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      gn("F84A" + wn(t)), gn("FF13")
    }))
  },
  BTTMC1: function (t) {
    fe >= 5.46 ? Qe("设置电流加减幅度", "Set the current step amplitude", "0.01", "1", (function (t) {
      gn("F84B" + wn(t)), gn("FF13")
    })) : Qe("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      gn("F84B" + wn(t)), gn("FF13")
    }))
  },
  BTOST: function (t) {
    Qe("设置输出超温关机温度", "Set output over temperature shutdown value", "50", "120", (function (t) {
      gn("F8F7" + wn(t)), gn("FF18")
    }))
  },
  BTIST: function (t) {
    Qe("设置输入超温关机温度", "Set input over temperature shutdown value", "40", "100", (function (t) {
      gn("F811" + wn(t)), gn("FF18")
    }))
  },
  BTTMW: function (t) {
    fe >= 5.46 ? Qe("电流最低值", "Minimum current value", "5", "50", (function (t) {
      gn("F84C" + wn(t)), gn("FF13")
    })) : Qe("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      gn("F84C" + wn(t)), gn("FF13")
    }))
  },
  BTMMV: function (t) {
    Qe("设置最高电压限制", "Set maximum voltage limit", "100", "1000", (function (t) {
      gn("F8FA" + wn(t)), gn("FF19"), gn("FF14")
    }))
  },
  BTMMA: function (t) {
    Qe("设置最高电流限制", "Set maximum current limit", "10", "400", (function (t) {
      gn("F8F9" + wn(t)), gn("FF19"), gn("FF14")
    }))
  },
  BTRDY: function (t) {
    Qe("设置就绪电压范围", "Set the ready voltage range", "1", "20", (function (t) {
      gn("F9CD" + bn(t)), gn("FF19")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), u > 0 && u < 5 ? en("检测到输出电流", "Detected output current", "如有负载请点取消后断开负载再开始校正,如无负载则为空载电流,点击确定将会设置为最小电流过滤(可在输出电流校正页面中设置).", "If there is a load detected in the output current, please click NO and disconnect the load before starting the calibration. If there is no load, Click YES will set it as the minimum current filter (which can be set on the output current calibration page)", (function (t) {
      gn("F848" + wn(Number(u) + .05)), gn("FF16")
    })) : c < 10 || u > 0 ? (0, ce.Toast)(Y ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (gn("C1"), gn("FF"), Qe("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / c).toFixed(4),
        n = Number(t / tt).toFixed(4);
      gn("C3" + wn(100 * n) + wn(100 * e)), 2 == o ? (gn("F876" + wn(20 * n)), gn("F877" + wn(100 * n))) : 1 == o ? (gn("F876" + wn(41 * n)), gn("F877" + wn(58.5 * n))) : 4 == o ? (gn("F876" + wn(41.2 * n)), gn("F877" + wn(59.3 * n))) : 16 == o ? (gn("F876" + wn(44 * n)), gn("F877" + wn(61 * n))) : 32 == o && (gn("F876" + wn(41.2 * n)), gn("F877" + wn(59.4 * n))), gn("FF"), gn("A80" + V + wn(50 * n) + wn(et)), gn("FF")
    })))
  },
  BTOVT1: function (t) {
    Fe ? Qe("升压采样补偿", "Boost voltage compensation", "0.1", "1", (function (t) {
      t > 999.99 ? t *= 1e-4 : t > 99.99 && (t *= .001), gn("FB47" + wn(100 * t)), gn("FF")
    })) : Qe("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      gn("FB47" + wn(100 * t)), gn("FF")
    }))
  },
  BTOVTU: function (t) {
    gn("FB47" + wn(100 * (Number(dt) + 3e-4))), gn("FF")
  },
  BTOVTD: function (t) {
    gn("FB47" + wn(100 * (Number(dt) - 3e-4))), gn("FF")
  },
  BTOVD1: function (t) {
    Fe ? Qe("基础电压补偿", "Basic voltage compensation", "10", "40", (function (t) {
      gn("FB46" + wn(100 * t)), gn("FF")
    })) : Qe("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      gn("FB46" + wn(100 * t)), gn("FF")
    }))
  },
  BTOVDU: function (t) {
    gn("FB46" + wn(100 * (Number(Bt) + 3e-4))), gn("FF")
  },
  BTOVDD: function (t) {
    gn("FB46" + wn(100 * (Number(Bt) - 3e-4))), gn("FF")
  },
  BTOVS: function (t) {
    Xe(Y ? "Set voltage range" : "设置电压范围", (Y ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (gn("F876" + wn(Number(RegExp.$1))), gn("F877" + wn(Number(RegExp.$2))), gn("FF")) : (0, ce.Toast)(Y ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    Qe("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      gn("F8F3" + wn(t)), gn("FF")
    }))
  },
  BTOVT3: function (t) {
    c < 10 || u > 0 ? (0, ce.Toast)(Y ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (gn("C2"), gn("FF"), Qe("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / c).toFixed(4);
      gn("C4" + wn(100 * Number(t / tt).toFixed(4)) + wn(100 * e)), gn("FF")
    })))
  },
  BTOVT2: function (t) {
    Qe("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      gn("FBF2" + wn(100 * t)), gn("FF")
    }))
  },
  BTO2TU: function (t) {
    gn("FBF2" + wn(100 * (Number(bt) + 3e-4))), gn("FF")
  },
  BTO2TD: function (t) {
    gn("FBF2" + wn(100 * (Number(bt) - 3e-4))), gn("FF")
  },
  BTOVD2: function (t) {
    Qe("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      gn("FBF1" + wn(100 * t)), gn("FF")
    }))
  },
  BTO2DU: function (t) {
    gn("FBF1" + wn(100 * (Number(Ot) + 3e-4))), gn("FF")
  },
  BTO2DD: function (t) {
    gn("FBF1" + wn(100 * (Number(Ot) - 3e-4))), gn("FF")
  },
  BTIVD1: function (t) {
    Qe("输入电压补偿值", "Input voltage compensation value", "0.1", "5", (function (t) {
      gn("F8FB" + wn(t)), gn("FF")
    }))
  },
  BTIVD2: function (t) {
    gn("F8FB" + wn(1)), gn("FF"), Qe("输入实际测量出的输入电压", "Input the actual measured input voltage", "10", "1000", (function (t) {
      gn("F8FB" + wn(Number(t / l))), gn("FF")
    }))
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 50,
      duration: 300
    }), u < 5 || tt - c < .2 ? (0, ce.Toast)(Y ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (gn("C0"), gn("FF"), Qe("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / u).toFixed(4);
      gn("C5" + wn(100 * Number(t / et).toFixed(4)) + wn(100 * e)), gn("FF")
    })))
  },
  BTOAT1: function (t) {
    Qe("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      gn("FB45" + wn(100 * t)), gn("FF")
    }))
  },
  BTOAT2: function (t) {
    gn("FB45" + wn(100 * (Number(gt) - .001))), gn("FF")
  },
  BTOAT3: function (t) {
    gn("FB45" + wn(100 * (Number(gt) + .003))), gn("FF")
  },
  BTOAS1: function (t) {
    Qe("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      gn("F8F4" + wn(t)), gn("FF")
    }))
  },
  BTCLV: function (t) {
    Qe("设置最小电流过滤", "Set minimum current filtering", "0.00", "5.00", (function (t) {
      gn("F848" + wn(t)), gn("FF")
    }))
  },
  BTOAD1: function (t) {
    Qe("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      gn("FB44" + wn(100 * t)), gn("FF")
    }))
  },
  BTOAD2: function (t) {
    gn("FB44" + wn(100 * (Number(Tt) - .001))), gn("FF")
  },
  BTOAD3: function (t) {
    gn("FB44" + wn(100 * (Number(Tt) + .001))), gn("FF")
  },
  BTOAS: function (t) {
    Xe(Y ? "Set current range" : "设置电流范围", (Y ? "Now:" : "当前范围:") + ct + "-" + ut, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (gn("F878" + wn(Number(RegExp.$1))), gn("F879" + wn(Number(RegExp.$2))), gn("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (gn("F879" + wn(t)), gn("FF")) : (0, ce.Toast)(Y ? "Input format error" : "输入格式错误!"))
    }))
  },
  BTIVH: function (t) {
    Qe("设置高压直流输入判定值", "Set high-voltage direct current input", 300, 500, (function (t) {
      gn("F8FF" + wn(t)), gn("FF")
    }))
  },
  BTHHA: function (t) {
    Qe("设置高压直流输入最大电流", "Set the max current for high-voltage input", 10, 200, (function (t) {
      gn("F8FE" + wn(t)), gn("FF")
    }))
  },
  SetMDT: function (t) {
    Qe("设置高压升压限流值", "Set high voltage boost current limit value", 300, 1200, (function (t) {
      gn("F810" + wn(t)), gn("FF")
    }))
  },
  BTIAD1: function (t) {
    Qe("输入电流补偿值", "Input current compensation value", "0.1", "5", (function (t) {
      gn("F8FC" + wn(t)), gn("FF")
    }))
  },
  BTIAD2: function (t) {
    gn("F8FB" + wn(1)), gn("FF"), Qe("输入实际测量出的输入电流", "Input the actual measured input current", "3", "50", (function (t) {
      gn("F8FC" + wn(Number(t / d))), gn("FF")
    }))
  },
  pwrbt: function (t) {
    gn("A6" + bn(1 - W)), gn("FF10")
  },
  BTUCF1: function (t) {
    gn("F9CF" + bn(1 - qt)), gn("FF10")
  },
  owbt: function (t) {
    Qe("设置功率限制", "Set power limit", "300", J, (function (t) {
      gn("F84D" + wn(t)), gn("FF")
    }))
  },
  BTUIW1: function (t) {
    gn("F9E1" + bn(1 - Ge)), gn("FF")
  },
  tibt: function (t) {
    Qe("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      gn("A9" + In(t)), gn("FF")
    }))
  },
  BTYC1: function (t) {
    Qe("设置预充电压", "Set pre charge voltage", "0", Ft, (function (t) {
      gn("F8F6" + wn(t)), gn("FF")
    }))
  },
  BTYC2: function (t) {
    Qe("设置预充电流", "Set pre charge current", ct, ut, (function (t) {
      gn("F8F5" + wn(t)), gn("FF")
    }))
  },
  SetVA: function (t, e, n) {
    V != t && (e > Ft || e < ft ? Qe("设置输出电压", "Set output voltage", ft, Ft, (function (e) {
      gn("A80" + (V = t) + wn(e) + wn(n)), gn(t <= 2 ? "FF10" : "FF11")
    })) : en("快捷设置电压电流切换", "Switch confirmation", "为避免误触,请确认切换电压电流", "To avoid accidental contact, please confirm the switching voltage and current", (function (i) {
      gn("A80" + (V = t) + wn(e) + wn(n)), gn(t <= 2 ? "FF10" : "FF11")
    })))
  },
  ks1bt: function (t) {
    this.SetVA(1, M[0], M[1] > ut ? ut : M[1])
  },
  ks2bt: function (t) {
    this.SetVA(2, P[0], P[1] > ut ? ut : P[1])
  },
  ks3bt: function (t) {
    this.SetVA(3, y[0], y[1] > ut ? ut : y[1])
  },
  ks4bt: function (t) {
    this.SetVA(4, H[0], H[1] > ut ? ut : H[1])
  },
  hqbt1: function (t) {
    Fe ? fe >= 5.39 ? Qe("设置超温关机倒计时", "设置超温关机倒计时", 3, 60, (function (t) {
      gn("F961" + bn(t)), gn("FF15")
    })) : (0, ce.Toast)(Y ? "The current firmware version is not adjustable. If you need to modify it, please upgrade the firmware!" : "当前固件版本不可调,如需修改请升级固件!") : Qe("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      gn("F961" + bn(t)), gn("FF15")
    }))
  },
  hqbt0: function (t) {
    gn("F961" + bn(0 == Dt ? Fe ? 30 : 5 : 0)), gn("FF15")
  },
  btbt1: function (t) {
    Se && wx.getClipboardData({
      success: function (t) {
        var e = t.data;
        e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (gn("F96B" + bn(3)), gn("F96C" + bn(0)), mn(e))
      }
    })
  },
  nvbt: function (t) {
    Xe(Y ? "Set Output Voltage" : "设置输出电压", (Y ? "Range:" : "范围:") + ft + "-" + Ft, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) gn(t.substr(2, 4) + wn(t.substr(6))), gn("FF");
        else {
          if (t.startsWith("FFF9")) return gn(t.substr(2)), void gn("FF");
          if ("DEBUG=0" == t)(0, ce.SetCFG)("DEBUG", 0), Ce = 0, gn("F9C900"), gn("F9CA01"), gn("F9CB01"), gn("F9CC01");
          else if ("DEBUG=1" == t)(0, ce.SetCFG)("DEBUG", 1), Ce = 1, gn("F9C900"), gn("F9CA01"), gn("F9CB01"), gn("F9CC01");
          else if ("DEBUG=2" == t)(0, ce.SetCFG)("DEBUG", 2), Ce = 2, gn("F9C9FF"), gn("F9CA01"), gn("F9CB01"), gn("F9CC01");
          else if ("DEBUG=3" == t)(0, ce.SetCFG)("DEBUG", 2), Ce = 2, gn("F9C9FF"), gn("F9CA01"), gn("F9CB01"), gn("F9CC00");
          else if (t.startsWith("FFC8")) gn(t.substr(2, 4) + t.substr(6)), gn("FF");
          else if (t.startsWith("FFC9")) {
            gn("C9" + t.substr(4, 4) + En(t.substr(8)))
          } else {
            if (t.match(/^USID=[A-Za-z0-9]{6}/) && Se) return t = (t = t.toUpperCase()).substr(5, 6), void gn("CE" + En(t = unescape(encodeURIComponent(t))));
            if ("异常修复" == t) n.BTRST1();
            else if ("强制升级" == t || "测试版" == t) Ze.showModal({
              title: Y ? "Start Upgrade" : "开始升级",
              editable: false,
              confirmText: Y ? "YES" : "确定",
              cancelText: Y ? "NO" : "取消",
              success: function (e) {
                e.confirm && n.UPDate("A700000000", "测试版" == t ? "Test1" : "NewUI")
              }
            });
            else if ("测试二" == t) Ze.showModal({
              title: Y ? "Start Upgrade" : "开始升级",
              editable: false,
              confirmText: Y ? "YES" : "确定",
              cancelText: Y ? "NO" : "取消",
              success: function (t) {
                t.confirm && n.UPDate("A700000000", "Test2")
              }
            });
            else if ("测试零" == t) {
              if (2 != Se) return;
              Ze.showModal({
                title: Y ? "Start Upgrade" : "开始升级",
                editable: false,
                confirmText: Y ? "YES" : "确定",
                cancelText: Y ? "NO" : "取消",
                success: function (t) {
                  t.confirm && n.UPDate("A700000000", "LED002")
                }
              })
            } else if (t.startsWith("DataStart=")) wx.getClipboardData({
              success: function (t) {
                var e = t.data;
                e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && mn(e)
              }
            });
            else {
              if (gn("A1" + En(t)), (t = parseFloat(t)) > Ft || t < ft && 0 == qt || !isFinite(t)) return void(0, ce.Toast)(Y ? "Beyond the set range!" : "超出设置范围!");
              gn("A80" + V + wn(t) + wn(et)), gn("FF11")
            }
          }
        }
      else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (gn("F96B" + bn(3)), mn(e))
        }
      })
    }))
  },
  nabt: function (t) {
    Qe("设置输出电流", "Set output current", ct, ut, (function (t) {
      gn("A80" + V + wn(tt) + wn(t)), gn("FF")
    }))
  },
  sa2bt3: function (t) {
    Qe("设置充电时间(分钟)", "Set charging time(Minute)", 0, 600, (function (t) {
      gn("A9" + In(t)), gn("FF")
    }))
  },
  SetS2V: function () {
    en("无特殊情况请勿修改此值", "Modify this value without special circumstances", "此值限定二段功能使用电压,二段功能只能直充使用,如果使用充电器充电时打开二段功能可能会导致充电失败", "This value is limited to the two-stage voltage, and the two-stage function can only be used directly. If the two-stage function is turned on while charging with a charger, it may cause charging failure", (function (t) {
      Qe("设置二段允许最大电压", "Set the maximum allowable voltage for the second stage", 50, Ft, (function (t) {
        gn("F8FD" + wn(t)), gn("FF12")
      }))
    }))
  },
  SetSGK: function () {
    if (fe >= 5.39) {
      var t = 0 == _t ? "1" : "0";
      gn("A50" + t), gn("A40" + t), gn("FF19")
    } else gn("F857" + wn(0 == z ? 1 : 0)), gn("FF12")
  },
  SetSGV: function () {
    gn("F9E7" + bn(1 - $t)), gn("FF10")
  },
  sa2bt2: function (t) {
    Qe("设置二段电流", "Set second stage current", ct, ut, (function (t) {
      gn("F857" + wn(t)), gn("FF12")
    }))
  },
  sa2bt1: function (t) {
    Qe("设置二段电压", "Set second stage voltage", ft, Ft, (function (t) {
      gn("F858" + wn(t)), gn("FF12")
    }))
  },
  sa2bt0: function (t) {
    Fe && (fe < 5.39 || tt > Me) ? gn("A9" + In(Te ? 0 : 60)) : (gn("F858" + (0 == z ? wn(tt - 3) : "00000000")), gn("F857" + (0 == z ? wn(10) : "00000000")), gn("FF12"))
  },
  sdbt1: function (t) {
    Qe("设置延时时间(分钟)", "Set delay time (Minutes)", 1, 600, (function (t) {
      gn("F859" + wn(t)), gn("FF16")
    }))
  },
  sdbt2: function (t) {
    Qe("设置关机电流", "SSet startup delay current", "0.00", "10.00", (function (t) {
      gn("F8F0" + wn(t)), gn("FF")
    }))
  },
  sdbt0: function (t) {
    gn("F859" + (0 == vt ? wn(1) : "00000000")), gn("FF16")
  },
  MSG: function (t, e) {
    if (!a)
      if (1 != Ce || e.startsWith("D") || (0, ce.print)("MSG:", e), e.startsWith("A101")) wx.hideToast(), n.setData({
        ShowBar: 0,
        Panel: 2,
        LOGO: Y ? "Preview" : "预览"
      });
      else if (e.startsWith("A001")) le = 2, "未激活" != i || Se || qe(), fe <= 5.28 && gn("FF");
    else if (e.startsWith("A000")) {
      if (le) return;
      le = 1, (0, ce.Toast)(Y ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ze.showModal({
          title: Y ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + G,
          confirmText: Y ? "YES" : "确定",
          cancelText: Y ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, ce.SetCFG)(G, t.content), gn("A0" + En(t.content)), le = 0)
          }
        })
      }), 1e3)
    } else if (e.startsWith("F101")) pn();
    else if (e.startsWith("F201")) pn();
    else if (e.startsWith("F301")) Dn = 0, Tn = [], (0, ce.Toast)(Y ? "Send End!" : "发送完成!");
    else if (e.startsWith("FF")) {
      var s = new DataView(t);
      s.getUint8(1) ? 2 != le && (le = 2, "未激活" != i || Se || qe()) : ((0, ce.Toast)(Y ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ze.showModal({
          title: Y ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + G,
          confirmText: Y ? "YES" : "确定",
          cancelText: Y ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, ce.SetCFG)(G, t.content), gn("FF" + En(t.content)), le = 0)
          }
        })
      }), 1e3)), W = s.getUint8(2), R = s.getUint8(3), o = s.getUint8(4), Y = s.getUint8(5), $ = s.getUint8(6), q = s.getUint8(7), Q = s.getUint8(8), ot = s.getUint8(9), rt = s.getUint8(10), st = s.getUint8(11), ht = s.getUint8(12), Ct = s.getUint8(13), St = s.getUint8(14) / 10, Dt = s.getUint8(15), mt = s.getUint8(16), pt = s.getUint8(17), Ut = s.getUint8(18), wt = s.getUint8(19), It = .01 * s.getUint8(20), Mt = s.getUint8(21), Pt = s.getUint8(22), Vt = s.getUint8(23), yt = s.getUint8(24), Ht = s.getUint8(25), Yt = s.getUint8(26), zt = s.getUint8(27), Jt = s.getUint8(28), _t = s.getUint8(29), X = s.getUint8(30), V = s.getUint8(31), qt = s.getUint8(32), Kt = s.getUint8(33), Ge = s.getUint8(34), Ae = s.getUint8(35), ve = s.getUint8(36), p = s.getUint8(37), Xt = s.getUint8(38), Qt = s.getUint8(39), te = s.getUint8(40), ee = s.getUint8(41), $t = s.getUint8(42), kt = s.getUint8(43), lt = s.getUint8(44), Ue = s.getUint8(45), Ie = s.getUint8(46);
      var re = 51;
      M = [On(s, re, 2, 1), On(s, re + 4, 2, 1)], P = [On(s, re += 8, 2, 1), On(s, re + 4, 2, 1)], y = [On(s, re += 8, 2, 1), On(s, re + 4, 2, 1)], H = [On(s, re += 8, 2, 1), On(s, re + 4, 2, 1)], j = On(s, re += 8), z = On(s, re += 4), J = On(s, re += 4), _ = On(s, re += 4), nt = On(s, re += 4), it = On(s, re += 4), at = On(s, re += 4), L = On(s, re += 4), ct = On(s, re += 4), ut = On(s, re += 4), ft = On(s, re += 4), Ft = On(s, re += 4), dt = On(s, re += 4, 4), gt = On(s, re += 4, 4), Bt = On(s, re += 4, 4), Tt = On(s, re += 4, 4), Gt = On(s, re += 4), At = On(s, re += 4), vt = On(s, re += 4), Et = On(s, re += 4), bt = On(s, re += 4, 4), Ot = On(s, re += 4, 4), Nt = On(s, re += 4), xt = On(s, re += 4), Wt = On(s, re += 4), Rt = On(s, re += 4), Lt = On(s, re += 4), Zt = On(s, re += 4), jt = On(s, re += 4), K = On(s, re += 4, 4), re += 4, s.byteLength > re && (Ee = On(s, re, 4), re += 4), s.byteLength > re && (Me = On(s, re), re += 4), s.byteLength > re && (be = On(s, re), re += 4), s.byteLength > re && (Oe = On(s, re), re += 4), s.byteLength > re && (Ne = On(s, re), re += 4), s.byteLength > re && (we = On(s, re), re += 4), 1 == V ? (et = M[1], tt = M[0]) : 2 == V ? (et = P[1], tt = P[0]) : 3 == V ? (et = y[1], tt = y[0]) : 4 == V && (et = H[1], tt = H[0]), n.setData({
        PON: W,
        KON: R,
        CAN: o,
        UEN: Y,
        KRC: $,
        SV: tt.toFixed(2),
        SA: et.toFixed(2),
        WTi: q,
        Sleep: Q,
        LEDK0: ot,
        LEDK1: rt,
        LEDK2: st,
        IVD: K,
        IAD: Ee,
        UFS: ht,
        LFS: Ct,
        AFS: St,
        UHQ: Dt,
        GIF: mt,
        SGV: $t,
        KPR: kt,
        CKA2: pt,
        NTC: Ut,
        DDT: wt,
        CLV: It,
        UEG: Mt,
        S2V: Me,
        UCN: Pt,
        MFS: Vt,
        DOL: yt,
        DST: Ht,
        LKS: Yt,
        USC: Ue,
        TMD: Ie,
        UI: zt,
        RDY: Jt,
        SGK: _t,
        ETi: X,
        KSi: V,
        DSP: lt,
        IST: we,
        UCF: qt,
        TCH: Kt,
        UIW: Ge,
        ACK: Ae,
        CCK: ve,
        IVH: be,
        HHA: Oe,
        MDT: Ne,
        UFN: p,
        MUE: Xt,
        MUF: Qt,
        UME: te,
        MUA: ee,
        KS1: M,
        KS2: P,
        KS3: y,
        KS4: H,
        SV2: j,
        SA2: z,
        SMW: J,
        UMW: _,
        TMW: nt,
        UMT: it,
        OMT: at,
        MA: L,
        LSA: ct,
        HSA: ut,
        LSV: ft,
        HSV: Ft,
        OVT: dt,
        OAT: gt,
        OVD: Bt,
        OAD: Tt,
        L2V: Gt,
        H2V: At,
        USD: vt,
        SDU: Et,
        O2T: bt,
        O2D: Ot,
        OVS: Nt,
        OAS: xt,
        YCA: Wt,
        YCV: Rt,
        OST: Lt,
        MMA: Zt,
        MMV: jt
      })
    } else if (e.startsWith("FE") || e.startsWith("EE")) {
      var se = Un(e.substring(20, 40));
      if (i = se.startsWith("20") ? se : "未激活", 0 == o) {
        fe = .01 * parseInt(e.substring(16, 20), 16), o = xn(e, 14), Fe = 0, G = e.substring(2, 14), 1 == o ? (r = "HW48XX", fe >= 5.36 && (n.setData({
          Err: 1
        }), un()), fe >= 5.46 && (ne = 1)) : 2 == o ? (r = "Increase", n.setData({
          Err: 1
        }), Cn()) : 3 == o ? (r = "ZT48XX", n.setData({
          Err: 1
        }), Fn()) : 4 == o ? (r = "ZX3000", fe >= 5.46 && (ne = 1)) : 8 == o ? (r = "INFY", n.setData({
          Err: 1
        }), Sn()) : 12 == o ? (r = "EV_Station", Fe = 2) : 13 == o ? r = "ZEEHO" : 14 == o ? (r = "EV_Charger", n.setData({
          Err: 1
        }), hn(), Fe = 1) : 16 == o ? r = "EPS6020" : 32 == o ? (r = "ZX48XX", fe >= 5.44 && (n.setData({
          Err: 1
        }), fn()), fe >= 5.46 && (ne = 1)) : 64 == o ? r = "Sinexcel" : 65 == o ? r = "BH10M100" : 66 == o ? r = "MC1503N5R" : 67 == o && (r = "R24-2200");
        var ue = wx.getDeviceInfo();
        (0, ce.Check)(G, Je, Se, r, fe.toFixed(2), i, ue.model, ue.system, (function (t) {
          "0" == t[0] && (a = 1, gn("CC"), nn("设备授权异常", "Abnormal device authorization", "ID:0x" + G, "ID:0x" + G, "我知道了", "Yes I Kown", (function (t) {
            Mn()
          }))), "1" == t[1] && gn("CB"), "1" == t[2] && qe()
        })), G = "0x" + G, n.setData({
          CVer: fe.toFixed(2),
          CEV: Fe,
          SCAN: r,
          ID: G,
          ACT: i,
          MUS: ne
        });
        var he = (0, ce.GetCFG)(G, "0000");
        Se && (he = (Number(G) + 19880914).toString(16).substring(4, 8)), e.startsWith("EE") ? 0 != le && 3 != le || gn("A0" + En(he)) : (gn("FF" + En(he)), setTimeout((function () {
          3 == le && (le = 0, gn("FF" + En(he)))
        }), 1500))
      }
      if (e.startsWith("FE")) {
        var ge = Un(e.substring(260, 300)),
          Be = Un(e.substring(300, 340));
        "config" != ge && "" != ge || (ge = (0, ce.GetCFG)("WID", "config")), "88888888" != Be && "" != Be || (Be = (0, ce.GetCFG)("WPD", "88888888")), n.setData({
          VIN: Un(e.substring(100, 140)),
          SSID: Un(e.substring(140, 180)),
          UPWD: Un(e.substring(180, 220)),
          LKV: Un(e.substring(220, 260)),
          WID: ge,
          WPD: Be
        })
      }
    } else if (e.startsWith("FA")) {
      var xe = new DataView(t);
      c = On(xe, 1), u = On(xe, 5), f = On(xe, 9), l = On(xe, 13), d = On(xe, 17), g = On(xe, 21), n.setData({
        IA: d,
        OV: c,
        OA: u,
        OW: f
      })
    } else if (e.startsWith("FB")) {
      var Pe = new DataView(t);
      h = Pe.getUint8(1), C = Pe.getUint8(2), S = Pe.getUint8(3), T = Pe.getUint8(4), D = Pe.getUint8(5), m = Pe.getUint8(6), w = Pe.getUint8(7), I = Pe.getUint8(8), k = Pe.getUint8(9), Te = Pe.getUint8(10), Te += Pe.getUint8(11) << 8, De = Pe.getUint8(12), Z = Pe.getUint8(13), ae = Pe.getUint8(20), ie = Pe.getUint8(21), oe = Pe.getUint8(22);
      var Ve = 31;
      c = On(Pe, Ve), u = On(Pe, Ve += 4), f = On(Pe, Ve += 4), F = On(Pe, Ve += 4), l = On(Pe, Ve += 4), d = On(Pe, Ve += 4), g = On(Pe, Ve += 4), B = On(Pe, Ve += 4), A = On(Pe, Ve += 4), v = On(Pe, Ve += 4), E = On(Pe, Ve += 4), U = On(Pe, Ve += 4), b = On(Pe, Ve += 4), O = On(Pe, Ve += 4), N = On(Pe, Ve += 4), x = On(Pe, Ve += 4), Ve += 4, 2 == o ? Cn(T, D) : 8 == o ? Cn(T, D, m) : fe >= 5.44 && (32 == o ? fn(Pe.getUint8(23), Pe.getUint8(24), Pe.getUint8(25), Pe.getUint8(26), Pe.getUint8(27), Pe.getUint8(28), Pe.getUint8(29)) : 1 == o ? un(Pe.getUint8(23), Pe.getUint8(24), Pe.getUint8(25), Pe.getUint8(26), Pe.getUint8(27), Pe.getUint8(28), 0) : 14 == o ? hn(Pe.getUint8(23), Pe.getUint8(24), Pe.getUint8(25), Pe.getUint8(26), Pe.getUint8(27), Pe.getUint8(28), Pe.getUint8(29), Pe.getUint8(30)) : 3 == o && Fn(Pe.getUint8(23), Pe.getUint8(24), Pe.getUint8(25), Pe.getUint8(26))), fe >= 5.42 && (me = Pe.getUint8(14), pe = On(Pe, Ve), Ve += 4, pe >= 100 && (Mn(), nn("升级成功", "Upgrade completed!", "", "", "我知道了", "Yes I Kown", (function (t) {}))));
      var We = Number(f / g * 100).toFixed(2),
        Re = Number(g - f).toFixed(2);
      0 == Ae && fe >= 5.42 ? de = Y ? "Device unauthorized" : "设备未授权" : 0 == ve && fe >= 5.42 ? de = Y ? "Equipment Anomaly" : "设备异常" : 60 == h ? de = Y ? "Simulate high voltage anomaly" : "模拟电池升压异常" : 0 == S ? de = 0 == k ? Y ? "Communication Abnormality" : "CAN通讯异常" : 39 == k ? Y ? "Abnormal Insulation Test" : "绝缘测试未通过" : k < 6 ? Y ? "Handshake message failed" : "握手信息未通过" : k < 9 ? Y ? "Vehicle information not pass" : "车辆信息未通过" : 16 == k ? Y ? "Charging station not ready" : "电压检测未通过" : Y ? "Other abnormal interruptions" : "其它异常中止" : 50 == h ? de = Y ? "Stop Charging" : "中 止 充 电" : 51 == h ? de = Y ? "Charging Error" : "充 电 错 误" : 52 == h ? de = Y ? "Seting Handshake Information" : "配置握手信息" : 53 == h ? de = Y ? "Seting Charging Information" : "配置充电信息" : 54 == h ? de = tt >= ft && tt <= Ft ? Y ? "Waiting Output Set Voltage" : "等待输出设定电压" : Y ? "Set Voltage Out Of Range" : "设置电压超范围" : 55 == h ? de = Y ? "Ready For Use" : "已准备就绪" : 56 == h ? de = Y ? "Charging" : "正在充电中" : 57 == h ? de = Y ? "Charging Completed" : "充电完成" : 58 == h ? de = Y ? "Overtemperature shutdown" : "超温关机(" + De + ")" : 59 == h ? de = Y ? "Insulation testing" : "绝缘测试" : 4 == h ? de = Y ? "Charger Shutdown" : "充电器已关机" : 43 == h ? de = Y ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == h ? de = Y ? "Over Temperature Shutdown" : "输出超温关机" : 45 == h ? de = Y ? "Over Temperature Shutdown" : "输入超温关机" : c <= 10 ? de = Y ? "Charger Output Abnormality" : "充电器输出异常" : 0 == h ? de = Y ? "Waiting For Battery Connection" : "等待接入电池" : 1 == h ? de = Y ? "Charging" : "正在充电中" : 2 == h ? de = Y ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == h ? de = Y ? "Precharging" : "正在预充" : 40 == h ? de = Y ? "Appointment Waiting" : "预约等待中" : 3 == h && (de = Y ? "Charging Completed" : "充电完成");
      var Le = .65 * wx.getWindowInfo().windowWidth,
        Ke = Math.max(15, Math.min(30, Le / (Y ? de.length : 1.8 * de.length) * 1.5));
      n.setData({
        Ah: A,
        Wh: v,
        AH: E,
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
        EEI: g ? We : "0.00",
        EES: g ? Re : "0.00",
        YS: vn(Te),
        STR: de,
        NFS: C,
        OL: S,
        OV: c,
        OA: u,
        OW: f,
        OT: F,
        FSize: Ke,
        KT1: Z,
        Ti: vn(b),
        TI: vn(O),
        NSD: vn(N),
        UPS: me,
        EID: ie,
        ERL: ae,
        ELN: oe,
        SOC: Number(x).toFixed(0),
        UPV: Number(pe).toFixed(2),
        MT: Number(F) > Number(B) ? F : B
      })
    } else if (e.startsWith("01")) {
      c = Nn(e, 2), u = Nn(e, 10), f = Nn(e, 18), F = Nn(e, 26), h = xn(e, 34), C = xn(e, 36), S = xn(e, 38), 60 == h ? de = Y ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == S ? de = Y ? "Communication Abnormality" : "CAN通讯异常" : 50 == h ? de = Y ? "Stop Charging" : "中 止 充 电" : 51 == h ? de = Y ? "Charging Error" : "充 电 错 误" : 52 == h ? de = Y ? "Seting Handshake Information" : "配置握手信息" : 53 == h ? de = Y ? "Seting Charging Information" : "配置充电信息" : 54 == h ? de = Y ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == h ? de = Y ? "Ready For Use" : "已准备就绪" : 56 == h ? de = Y ? "Charging" : "正在充电中" : 57 == h ? de = Y ? "Charging Completed" : "充电完成" : 58 == h ? de = Y ? "Overtemperature shutdown" : "超温关机(" + De + ")" : 59 == h ? de = Y ? "Insulation testing" : "绝缘测试" : 0 == c ? de = Y ? "Charger Output Abnormality" : "充电器输出异常" : 4 == h ? de = Y ? "Charger Shutdown" : "充电器已关机" : 0 == h ? de = Y ? "Waiting For Battery Connection" : "等待接入电池" : 1 == h ? de = Y ? "Charging" : "正在充电中" : 2 == h ? de = Y ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == h ? de = Y ? "Precharging" : "正在预充" : 40 == h ? de = Y ? "Appointment Waiting" : "预约等待中" : 3 == h ? de = Y ? "Charging Completed" : "充电完成" : 43 == h ? de = Y ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == h && (de = Y ? "Over Temperature Shutdown" : "超温保护关机");
      var ye = .65 * wx.getWindowInfo().windowWidth;
      Ke = Math.max(15, Math.min(30, ye / (Y ? de.length : 1.8 * de.length) * 1.5));
      n.setData({
        STR: de,
        NFS: C,
        OL: S,
        OV: c,
        OA: u,
        OW: f,
        OT: F,
        FSize: Ke
      })
    } else if (e.startsWith("02")) {
      l = Nn(e, 2), d = Nn(e, 10), g = Nn(e, 18), B = Nn(e, 26), T = xn(e, 34), D = xn(e, 36), m = xn(e, 38);
      var He = Number(f / g * 100).toFixed(2),
        Ye = Number(g - f).toFixed(2);
      n.setData({
        IV: l,
        IA: d,
        IW: g,
        IT: B,
        ST0: T,
        ST1: D,
        ST2: m,
        EEI: g ? He : "0.00",
        EES: g ? Ye : "0.00",
        MT: Number(F) > Number(B) ? F : B
      }), 2 == o && Cn(T, D), 8 == o && Sn(T, D, m)
    } else if (e.startsWith("03")) A = Nn(e, 2), v = Nn(e, 10), E = Nn(e, 18), U = Nn(e, 26), w = xn(e, 34), I = xn(e, 36), n.setData({
      Ah: A,
      Wh: v,
      AH: E,
      WH: U,
      SWT: w,
      SMT: I
    });
    else if (e.startsWith("04")) Te = xn(e, 34), Te += xn(e, 36) << 8, De = xn(e, 38), n.setData({
      YS: vn(Te),
      Ti: vn(Nn(e, 2)),
      TI: vn(Nn(e, 10)),
      NSD: vn(Nn(e, 18)),
      SOC: Number(Nn(e, 26)).toFixed(0)
    });
    else if (e.startsWith("10")) M = [Nn(e, 2, 1), Nn(e, 10, 1)], P = [Nn(e, 18, 1), Nn(e, 26, 1)], V = xn(e, 34), W = xn(e, 36), R = xn(e, 38), 1 == V ? (et = M[1], tt = M[0]) : 2 == V && (et = P[1], tt = P[0]), 3 == V ? (et = y[1], tt = y[0]) : 4 == V && (et = H[1], tt = H[0]), n.setData({
      KS1: M,
      KS2: P,
      KSi: V,
      PON: W,
      KON: R,
      SV: tt.toFixed(2),
      SA: et.toFixed(2)
    });
    else if (e.startsWith("11")) y = [Nn(e, 2, 1), Nn(e, 10, 1)], H = [Nn(e, 18, 1), Nn(e, 26, 1)], Y = xn(e, 36), $ = xn(e, 38), (0, ce.SetCFG)("UEN", Y), 1 == V ? (et = M[1], tt = M[0]) : 2 == V && (et = P[1], tt = P[0]), 3 == V ? (et = y[1], tt = y[0]) : 4 == V && (et = H[1], tt = H[0]), n.setData({
      KS3: y,
      KS4: H,
      CAN: o,
      UEN: Y,
      KRC: $,
      SV: tt.toFixed(2),
      SA: et.toFixed(2),
      KSi: V
    });
    else if (e.startsWith("12")) j = Nn(e, 2), z = Nn(e, 10), J = Nn(e, 18), _ = Nn(e, 26), q = xn(e, 34), X = xn(e, 36), Q = xn(e, 38), n.setData({
      SV2: j,
      SA2: z,
      SMW: J,
      UMW: _,
      WTi: q,
      ETi: X,
      Sleep: Q
    });
    else if (e.startsWith("13")) {
      nt = Nn(e, 2), it = Nn(e, 10), at = Nn(e, 18);
      Nn(e, 26);
      ot = xn(e, 34), rt = xn(e, 36), st = xn(e, 38), n.setData({
        TMW: nt,
        UMT: it,
        OMT: at,
        LEDK0: ot,
        LEDK1: rt,
        LEDK2: st
      })
    } else if (e.startsWith("14")) ct = Nn(e, 2), ut = Nn(e, 10), ft = Nn(e, 18), Ft = Nn(e, 26), ht = xn(e, 34), Ct = xn(e, 36), St = .1 * xn(e, 38), n.setData({
      LSA: ct,
      HSA: ut,
      LSV: ft,
      HSV: Ft,
      UFS: ht,
      LFS: Ct,
      AFS: St.toFixed(1)
    }), ct = Number(ct), ft = Number(ft), ut = Number(ut), Ft = Number(Ft);
    else if (e.startsWith("15")) dt = .01 * Nn(e, 2), gt = .01 * Nn(e, 10), Bt = .01 * Nn(e, 18), Tt = .01 * Nn(e, 26), Dt = xn(e, 34), mt = xn(e, 36), pt = xn(e, 38), n.setData({
      OVT: dt.toFixed(4),
      OAT: gt.toFixed(4),
      OVD: Bt.toFixed(4),
      OAD: Tt.toFixed(4),
      UHQ: Dt,
      GIF: mt,
      CKA2: pt
    });
    else if (e.startsWith("16")) Gt = Nn(e, 2), At = Nn(e, 10), vt = Nn(e, 18), Et = Nn(e, 26), Ut = xn(e, 34), wt = xn(e, 36), It = .01 * xn(e, 38), n.setData({
      L2V: Gt,
      H2V: At,
      USD: vt,
      NTC: Ut,
      DDT: wt,
      CLV: It,
      SDU: Et
    });
    else if (e.startsWith("17")) bt = .01 * Nn(e, 2), Ot = .01 * Nn(e, 10), Nt = Nn(e, 18), xt = Nn(e, 26), Mt = xn(e, 34), Pt = xn(e, 36), Vt = xn(e, 38), n.setData({
      O2D: Ot.toFixed(4),
      O2T: bt.toFixed(4),
      OVS: Nt,
      OAS: xt,
      UEG: Mt,
      UCN: Pt,
      MFS: Vt
    });
    else if (e.startsWith("18")) Wt = Nn(e, 2), Rt = Nn(e, 10), Lt = Nn(e, 18), Kt = Nn(e, 26), yt = xn(e, 34), Ht = xn(e, 36), Yt = xn(e, 38), n.setData({
      YCA: Wt,
      YCV: Rt,
      DOL: yt,
      DST: Ht,
      LKS: Yt,
      TCH: Kt,
      OST: Lt
    });
    else if (e.startsWith("19")) Zt = Nn(e, 2), jt = Nn(e, 10), zt = xn(e, 34), Jt = xn(e, 36), _t = xn(e, 38), n.setData({
      UI: zt,
      MMA: Zt,
      MMV: jt,
      RDY: Jt,
      SGK: _t
    });
    else if (e.startsWith("20")) {
      var $e = Un(e.substring(2, 40));
      n.setData({
        SSID: $e
      })
    } else if (e.startsWith("21")) n.setData({
      UPWD: Un(e.substring(2, 40))
    });
    else if (e.startsWith("22")) {
      var ke = Un(e.substring(2, 40)),
        je = (0, ce.GetCFG)("WID", ke);
      ke != je && gn("AB00" + En(ke = unescape(encodeURIComponent(je)))), n.setData({
        WID: je
      })
    } else if (e.startsWith("23")) {
      var ze = Un(e.substring(2, 40)),
        _e = (0, ce.GetCFG)("WPD", ze);
      ze != _e && gn("AB01" + En(ze = unescape(encodeURIComponent(_e)))), n.setData({
        WPD: _e
      })
    } else if (e.startsWith("24")) n.setData({
      LKV: Un(e.substring(2, 40))
    });
    else if (e.startsWith("25")) n.setData({
      VIN: Un(e.substring(2, 40))
    });
    else if (e.startsWith("50")) hn(xn(e, 2), xn(e, 4), xn(e, 6), xn(e, 8));
    else if (e.startsWith("51")) hn(0, 0, 0, 0, xn(e, 2), xn(e, 4), xn(e, 6), xn(e, 8));
    else if (e.startsWith("40")) un(xn(e, 2), xn(e, 4), xn(e, 6), xn(e, 8), xn(e, 10), xn(e, 12), 0);
    else if (e.startsWith("D1") || e.startsWith("D0")) {
      if (2 != Ce) return;
      var Xe = e.substring(2, 10),
        Qe = [e.substring(10, 12), e.substring(12, 14), e.substring(14, 16), e.substring(16, 18), e.substring(18, 20), e.substring(20, 22), e.substring(22, 24), e.substring(24, 26)],
        tn = parseInt(Xe, 16);
      if (405206102 == tn) 38, console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "电桩", "握手信息");
      else if (402781270 == tn) console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "电桩", "车辆识别" + Qe[0]);
      else if (485291094 == tn) "11" == Qe[0] ? console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "电桩", "同意收包" + Qe[6]) : "13" == Qe[0] && console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "电桩", "收包完成" + Qe[6]);
      else if (403174486 == tn) console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "电桩", "同步时间" + Qe[0] + Qe[1]);
      else if (403240022 == tn) {
        9;
        var en = parseInt(Qe[1] + Qe[0], 16),
          an = parseInt(Qe[3] + Qe[2], 16),
          on = parseInt(Qe[5] + Qe[4], 16),
          rn = parseInt(Qe[7] + Qe[6], 16);
        console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "电桩", "充电范围:电压" + an + "-" + en + " 电流" + rn + "-" + on)
      } else if (269153366 == tn) console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "电桩", "准备就绪" + Qe[0]);
      else if (403895382 == tn) {
        var sn = parseInt(Qe[1] + Qe[0], 16),
          cn = parseInt(Qe[3] + Qe[2], 16),
          ln = parseInt(Qe[5] + Qe[4], 16);
        console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "电桩", "输出信息:V" + sn + " A" + cn + " T" + ln)
      } else if (270201942 == tn) 26, console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "电桩", "中止充电");
      else if (136311894 == tn) 31, console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "电桩", "充电器错");
      else if (405231348 == tn) {
        var dn = parseInt(Qe[1] + Qe[0], 16);
        console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "取电器", "绝缘信息:" + dn)
      } else if (269047540 == tn) console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "取电器", "电池就绪:" + Qe[0]);
      else if (403724020 == tn) {
        var Bn = .1 * parseInt(Qe[1] + Qe[0], 16),
          mn = .1 * parseInt(Qe[3] + Qe[2], 16);
        console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "取电器", "需求信息:V" + Bn + " A" + mn)
      } else if (485250804 == tn) console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "取电器", "请求多包:" + Qe[6]);
      else if (485185268 == tn) console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "取电器", "多包数据");
      else if (403920628 == tn) console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], "取电器", "车辆状态");
      else {
        var Gn = 244 == (255 & tn) ? "取电器" : "电桩";
        console.log(Xe, Qe[0], Qe[1], Qe[2], Qe[3], Qe[4], Qe[5], Qe[6], Qe[7], Gn, "未知")
      }
    }
  },
  onLoad: function (i) {
    n = this, le = 0, Dn = 0, a = 0, o = 0, ge = 0, me = 0, pe = 0, ne = 0, rn[0] = 1, rn[1] = 1, rn[2] = 1, rn[3] = 1, rn[4] = 1, rn[5] = 1, rn[6] = 1, rn[7] = 1, he = Number(i.Test) || 0, Fe = Number(i.CEV) || 0, ge = Number(i.ODM) || 0, _e();
    var r = wx.getAccountInfoSync();
    Se = "trial" == r.miniProgram.envVersion ? 1 : "develop" == r.miniProgram.envVersion ? 2 : 0, ke = 0;
    var s = wx.getDeviceInfo();
    console.log("SYSINF", s.abi, s.benchmarkLevel, s.brand, s.model, s.platform, s.system), (0, ce.GetGIF)(1).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var c = RegExp.$2;
    (0, ce.GetGIF)(2).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var u = RegExp.$2;
    (0, ce.GetGIF)(3).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var f = RegExp.$2;
    (0, ce.GetGIF)(4).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var F = RegExp.$2;
    (0, ce.GetGIF)(5).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var h = RegExp.$2;
    He[5] = (0, ce.GetCFG)("BGP5", "/img/bc1.gif"), He[1] = (0, ce.GetCFG)("BGP1", "https://dingyue.ws.126.net/2022/0808/701db340g00rg9pym02h5d200cs00leg00it00vh.gif"), He[2] = (0, ce.GetCFG)("BGP2", "https://img2.baidu.com/it/u=2215745416,4118415336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422"), He[3] = (0, ce.GetCFG)("BGP3", "https://c-ssl.dtstatic.com/uploads/item/201912/08/20191208175320_skjmi.thumb.1000_0.jpg"), He[4] = (0, ce.GetCFG)("BGP4", "https://wx4.sinaimg.cn/mw690/9f2299eegy1hqwec2a3ncj21kw2dcx6p.jpg"), Y = (0, ce.GetCFG)("UEN"), Ce = (0, ce.GetCFG)("DEBUG"), Ye = (0, ce.GetCFG)("BGI", 0), $e = (0, ce.GetCFG)("BGT", "80"), t = (0, ce.GetCFG)("WID", "config"), e = (0, ce.GetCFG)("WPD", "88888888"), n.setData({
      WID: t,
      WPD: e
    });
    var C = (0, ce.GetCFG)("ShowM");
    n.setData({
      GIF1: "data:image/gif;base64," + c,
      GIF2: "data:image/gif;base64," + u,
      GIF3: "data:image/gif;base64," + f,
      GIF4: "data:image/gif;base64," + F,
      GIF5: "data:image/gif;base64," + h,
      UEN: Y,
      ShowM: C,
      RollV: "5.48",
      TestV: "5.51(抢先版)",
      RoCEV: "5.48",
      UPDate: "5.50",
      APP: "1.36",
      GM: Se,
      ADD: ke,
      CAN: fe,
      CEV: Fe,
      MUS: ne,
      BGI: Ye,
      BGT: parseInt($e, 16),
      BGC: "#000000" + $e,
      ODM: ge,
      BGP: He[Ye],
      BGP1: He[1],
      BGP2: He[2],
      BGP3: He[3],
      BGP4: He[4],
      BGP5: He[5]
    }), console.log(He[Ye]), he && (ze[0] = "1", ze[1] = "2", ze[2] = "3", ze[3] = "4", Fe ? this.MSG("", "EEA47210A4AE300E0" + 548..toString(16) + "43786A64777800000000") : this.MSG("", "EEA47210A4AE30010" + 548..toString(16) + "323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000021340000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), Be || (Be = 1, ue.onReconnected((function () {
      n.AutoLogin()
    })), ue.onBLEConnectionStateChange((function () {
      a || (a = 1, nn("蓝牙信号丢失", "Bluetooth Disconnected", "通常是关机或信号弱或干扰大导致", "Blue abnormal interruption is usually caused by shutdown, weak signal, or significant signal interference", "我知道了", "Yes I Kown", (function (t) {
        Mn()
      }))), Mn()
    })), ue.onBLECharacteristicValueChange1(this.MSG)), n.AutoLogin()
  },
  AutoLogin: function () {
    le = 0, Dn = 0, a = 0, o = 0, ge = 0, me = 0, pe = 0, le = 3, gn("A0" + En("0000")), gn("EE"), setTimeout((function () {
      3 == le && (le = 0, gn("A0" + En((0, ce.GetCFG)(G, "0000"))), console.log("Re login:1")), "0" == o && gn("EE")
    }), 1500), setTimeout((function () {
      3 == le && (le = 0, gn("A0" + En((0, ce.GetCFG)(G, "0000"))), console.log("Re login:1")), "0" == o && gn("EE")
    }), 2500)
  },
  navigateBack: function (t) {
    Ze.navigateBack({
      delta: 0
    })
  },
  onUnload: function () {
    a = 1, ue.closeBLEConnection(), console.log("Unload")
  },
  onShow: function (t) {
    a = 0, wx.hideHomeButton()
  },
  onHide: function () {
    a = 1
  }
});