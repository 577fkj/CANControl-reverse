var t, e, n, i, a, o, r, s, c, u, f, F, h, C, l, S, d, g, B, T, D, m, p, G, A, E, v, U, w, I, b, O, x, N, M, P, V, W, R, L, K, y, Y, k, H, $, j, Z, z, J, _, q, Q, X, tt, et, nt, it, at, ot, rt, st, ct, ut, ft, Ft, ht, Ct, lt, St, dt, gt, Bt, Tt, Dt, mt, pt, Gt, At, Et, vt, Ut, wt, It, bt, Ot, xt, Nt, Mt, Pt, Vt, Wt, Rt, Lt, Kt, yt, Yt, kt, Ht, $t, jt, Zt, zt, Jt, _t, qt, Qt, Xt, te, ee, ne, ie, ae, oe, re, se = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  ce = require("../../@babel/runtime/helpers/asyncToGenerator"),
  ue = require("../../344A46559E166AAF522C2E52CC455FC7.js"),
  fe = require("../../52CBC4459E166AAF34ADAC42D5555FC7.js"),
  Fe = 1,
  he = 0,
  Ce = 0,
  le = 0,
  Se = 0,
  de = 0,
  ge = "设备连接成功",
  Be = 0,
  Te = 0,
  De = 0,
  me = 30,
  pe = 0,
  Ge = 0,
  Ae = 0,
  Ee = 0,
  ve = 0,
  Ue = 1,
  we = 126,
  Ie = "欢迎使用",
  be = "1,27,30,欢迎",
  Oe = "1,57,30,使用",
  xe = 0,
  Ne = "ff",
  Me = "ff",
  Pe = "ff",
  Ve = ["/img/bc1.gif", "", "", "", ""],
  We = 0,
  Re = "80",
  Le = 0,
  Ke = wx,
  ye = "#ffffff",
  Ye = ["1", "2", "3", "4"],
  ke = 0;

function He() {
  return 0 == ke && 0 == (ke = (0, ue.GetCFG)("RSID")) && (ke = function () {
    for (var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", e = "", n = 0; n < 12; n++) {
      var i = Math.floor(Math.random() * t.length);
      e += t[i]
    }
    return e
  }(), (0, ue.SetCFG)("RSID", ke)), ke
}

function $e() {
  var t = new Date;
  cn("FD48" + gn(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()))
}

function je(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  Ke.showModal({
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

function Ze(t, e, n, i) {
  var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ke.showModal({
    title: k ? e : t,
    editable: true,
    placeholderText: (k ? "Range:" : "范围:") + n + "-" + i,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(i) || e < Number(n) || !isFinite(e)) && 2 != Se) return void(0, ue.Toast)(k ? "Beyond the set range!" : "超出设置范围!");
        a(e)
      }
    }
  })
}

function ze(t, e, n, i) {
  var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ke.showModal({
    title: k ? e : t,
    editable: true,
    placeholderText: k ? i : n,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, ue.Toast)(k ? "Input Cannot Be Empty!" : "输入不能为空!");
        a(e)
      }
    }
  })
}

function Je(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ke.showModal({
    title: k ? e : t,
    content: k ? i : n,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (t) {
      t.confirm && a(t)
    }
  })
}

function _e(t, e, n, i, a, o) {
  var r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function () {};
  Ke.showModal({
    title: k ? e : t,
    content: k ? i : n,
    confirmText: k ? o : a,
    showCancel: false,
    success: function (t) {
      r(t)
    }
  })
}
var qe = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "温度 异常", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"],
  Qe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Xe = [1, 1, 1, 1, 1, 1, 1, 1];

function tn(t) {
  for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, n = 0, i = 0; i < 12; i++)
    if (qe[i] == t) {
      Qe[i] = e, n = 1;
      break
    } if (!n && e)
    for (var a = 1; a < 11; a++)
      if (6 != a && 0 == Qe[a]) {
        qe[a] = t, Qe[a] = e;
        break
      }
}

function en() {
  var t = [qe[0].split(" "), qe[1].split(" "), qe[2].split(" "), qe[3].split(" "), qe[4].split(" "), qe[5].split(" "), qe[6].split(" "), qe[7].split(" "), qe[8].split(" "), qe[9].split(" "), qe[10].split(" "), qe[11].split(" ")];
  n.setData({
    E1S: Qe[0],
    E1A: t[0][0],
    E1B: t[0][1],
    E2S: Qe[1],
    E2A: t[1][0],
    E2B: t[1][1],
    E3S: Qe[2],
    E3A: t[2][0],
    E3B: t[2][1],
    E4S: Qe[3],
    E4A: t[3][0],
    E4B: t[3][1],
    E5S: Qe[4],
    E5A: t[4][0],
    E5B: t[4][1],
    E6S: Qe[5],
    E6A: t[5][0],
    E6B: t[5][1],
    E7S: Qe[6],
    E7A: t[6][0],
    E7B: t[6][1],
    E8S: Qe[7],
    E8A: t[7][0],
    E8B: t[7][1],
    E9S: Qe[8],
    E9A: t[8][0],
    E9B: t[8][1],
    EAS: Qe[9],
    EAA: t[9][0],
    EAB: t[9][1],
    EBS: Qe[10],
    EBA: t[10][0],
    EBB: t[10][1],
    ECS: Qe[11],
    ECA: t[11][0],
    ECB: t[11][1]
  })
}

function nn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  Xe[0] == t && Xe[1] == e && Xe[2] == n && Xe[3] == i && Xe[4] == a && Xe[5] == o && Xe[6] == r || (Qe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], Xe[0] = t, Xe[1] = e, Xe[2] = n, Xe[3] = i, Xe[4] = a, Xe[5] = o, Xe[6] = r, qe = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"], 128 & t && tn("测试 模式"), 64 & t && tn("负载 震荡"), 32 & t && tn("输出 继电器"), 16 & t && tn("放电 电路"), 8 & t && tn("继电器 电路"), 4 & t && tn("短路 锁死"), 2 & t && tn("硬件 地址"), 1 & t && tn("放电 电路"), 128 & e && tn("更换 地址"), 64 & e && tn("地址 冲突"), 32 & e && tn("均流 屏蔽"), 16 & e && tn("通讯 异常"), 8 & e && tn("电容 电压"), 4 & e && tn("输出 过压"), 2 & e && tn("输出 模式"), 1 & e && tn("插座 异常"), 128 & n && tn("母线 电压"), 64 & n && tn("母线 平衡"), 32 & n && tn("输入 停电"), 16 & n && tn("恒流 状态"), 8 & n && tn("输出 短路"), 4 & n && tn("内部 通讯"), 2 & n && tn("效率 寻优"), 1 & n && tn("均流 异常"), 128 & i && tn("PFC 故障"), 64 & i && tn("输入 过压"), 32 & i && tn("ID 重复"), 16 & i && tn("严重 均流"), 8 & i && tn("交流 缺相"), 4 & i && tn("三项 平衡"), 2 & i && tn("输入 欠压"), 1 & i && tn("顺序 启机"), 128 & a && tn("通讯 质量"), 64 & a && tn("自动 模式"), 32 & a && tn("地址 重排"), 16 & a && tn("内部 过温"), 2 & a && tn("模块 关机"), 1 & a && tn("低温 保护"), 128 & o && tn("输出 欠压"), 64 & o && tn("输出 过流"), 32 & o && tn("存储 芯片"), 16 & o && tn("风机 故障"), 8 & o && tn("模块 保护"), 4 & o && tn("模块 故障"), 2 & o && tn("超温 保护"), 1 & o && tn("过压 锁死"), en())
}

function an() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  Xe[0] == t && Xe[1] == e && Xe[2] == n && Xe[3] == i && Xe[4] == a && Xe[5] == o && Xe[6] == r || (Qe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], Xe[0] = t, Xe[1] = e, Xe[2] = n, Xe[3] = i, Xe[4] = a, Xe[5] = o, Xe[6] = r, qe = ["超温 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "恒流 状态", "输出 过流", "输出 欠压", "输出 过压", "输出 过载", "模块 关机"], 128 & t && tn("输出 保险"), 64 & t && tn("内部 过温"), 32 & t && tn("输出 过流"), 16 & t && tn("输出 高关"), 8 & t && tn("输入 低关"), 4 & t && tn("输入 高关"), 2 & t && tn("过温 关机"), 1 & t && tn("风机 异常"), 128 & e && tn("PFC 过流"), 64 & e && tn("原边 过流"), 32 & e && tn("内部 通讯"), 16 & e && tn("EEP ROM"), 8 & e && tn("PFC 欠压"), 4 & e && tn("PFC 过压"), 1 & e && tn("均流 异常"), 32 & n && tn("输出 过载"), 16 & n && tn("PFC 故障"), 8 & n && tn("输出 欠压"), 4 & n && tn("输入 频率"), 2 & n && tn("输入 熔断"), 1 & n && tn("启动 异常"), 128 & i && tn("DUS4 欠压"), 64 & i && tn("BUS3 欠压"), 32 & i && tn("BUS2 欠压"), 16 & i && tn("BUS1 欠压"), 8 & i && tn("启动 电阻"), 4 & i && tn("机外 过温"), 2 & i && tn("匹配 异常"), 128 & a && tn("输入 停电"), 64 & a && tn("输入 欠压"), 32 & a && tn("输入 过压"), 16 & a && tn("BUS 平衡"), 8 & a && tn("BUS4 过压"), 4 & a && tn("BUS3 过压"), 2 & a && tn("BUS2 过压"), 1 & a && tn("BUS1 过压"), 64 & o && tn("模块 关机"), 32 & o && tn("模块 休眠"), 8 & o && tn("输入 功率"), 4 & o && tn("超温 功率"), 2 & o && tn("恒流 状态"), 1 & o && tn("输出 功率"), 128 & r && tn("启动 未接"), 32 & r && tn("插座 过温"), 16 & r && tn("输入 反接"), 8 & r && tn("机内 过温"), 4 & r && tn("输出 过流"), 2 & r && tn("输出 欠压"), 1 & r && tn("输出 过压"), en())
}

function on() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
    s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
  Xe[0] == t && Xe[1] == e && Xe[2] == n && Xe[3] == i && Xe[4] == a && Xe[5] == o && Xe[6] == r && Xe[7] == s || (Qe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], Xe[0] = t, Xe[1] = e, Xe[2] = n, Xe[3] = i, Xe[4] = a, Xe[5] = o, Xe[6] = r, Xe[7] = s, qe = ["正常 中止", "电桩 温度", "枪头 异常", "内部 过温", "充电 异常", "电桩 急停", "其他 异常", "自检 异常", "预充 异常", "电流 异常", "电压 异常", "参数 异常"], 3 & t ? tn("正常 中止") : t >> 2 & 3 ? tn("人工 中止") : t >> 4 & 3 ? tn("故障 中止") : t >> 6 & 3 && tn("车辆 中止"), 3 & e ? tn("电桩 温度") : e >> 2 & 3 ? tn("枪头 异常") : e >> 4 & 3 ? tn("内部 过温") : e >> 6 & 3 && tn("充电 异常"), 3 & n ? tn("电桩 急停") : n >> 2 & 3 ? tn("其他 异常") : n >> 4 & 3 ? tn("自检 异常") : n >> 6 & 3 && tn("预充 异常"), 3 & i ? tn("电流 异常") : i >> 2 & 3 ? tn("电压 异常") : i >> 4 & 3 && tn("参数 异常"), 3 & a && tn("BRM 超时"), 3 & o && tn("BCP 超时"), o >> 2 & 3 && tn("BRO 超时"), 3 & r && tn("BCS 超时"), r >> 2 & 3 && tn("BCL 超时"), r >> 4 & 3 && tn("BST 超时"), 3 & s && tn("BSD 超时"), s >> 2 & 3 && tn("BSM 超时"), s >> 4 & 3 && tn("其他 超时"), en())
}

function rn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  Xe[0] == t && Xe[1] == e && Xe[2] == n || (Qe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], Xe[0] = t, Xe[1] = e, Xe[2] = n, qe = ["输入 过压", "输出 过压", "恒压 状态", "过热 保护", "风机 故障", "模块 关机", "输入 欠压", "输出 欠压", "恒流 状态", "过流 保护", "模块 故障", "设置 关机"], 128 & t && tn("输出 欠压"), 64 & t && tn("输出 过压"), 32 & t && tn("输入 欠压"), 16 & t && tn("输入 过压"), 8 & t && tn("风机 故障"), 4 & t && tn("恒流 状态"), 2 & t && tn("模块 故障"), 1 & t && tn("模块 关机"), 0 == t && c > 20 && tn("恒压 状态"), 4 & e && tn("设置 关机"), 2 & e && tn("过热 保护"), 1 & e && tn("过流 保护"), en())
}

function sn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  Xe[0] == t && Xe[1] == e && Xe[2] == n || (Qe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], Xe[0] = t, Xe[1] = e, Xe[2] = n, qe = ["输入 过压", "输出 过压", "功率 限制", "过热 保护", "风机 故障", "模块 关机", "输入 欠压", "输出 欠压", "恒流 状态", "过流 保护", "模块 故障", "设置 关机"], 32 & t && tn("放电 异常"), 16 & t && tn("模块 休眠"), 8 & t && tn("输入 异常"), 4 & t && tn("内部 通讯"), 1 & t && tn("输出 短路"), 128 & e && tn("通讯 异常"), 64 & e && tn("缓启 打开"), 32 & e && tn("输出 过压"), 16 & e && tn("过温 告警"), 8 & e && tn("风机 故障"), 4 & e && tn("模块 保护"), 2 & e && tn("模块 故障"), 1 & e && tn("模块 关机"), 128 & n && tn("PFC 关机"), 64 & n && tn("输入 过压"), 32 & n && tn("输入 欠压"), 16 & n && tn("三相 平衡"), 8 & n && tn("三相 缺相"), 4 & n && tn("均流 异常"), 2 & n && tn("ID 重复"), 1 & n && tn("恒流 状态"), en())
}

function cn(t) {
  return un.apply(this, arguments)
}

function un() {
  return (un = ce(se().mark((function t(e) {
    return se().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (1 == le && console.log("Send", e), 0 == Fn) {
            t.next = 4;
            break
          }
          return (0, ue.Toast)(k ? "There Are Unfinished Sending Tasks" : "有发送任务未完成"), t.abrupt("return");
        case 4:
          return t.next = 6, fe.easySendData1(e, true);
        case 6:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var fn = [""],
  Fn = 0;

function hn(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  0 == Fn ? Ke.showModal({
    title: k ? "Confirm Whether To Send" : "确认是否发送",
    editable: false,
    confirmText: k ? "YES" : "确定",
    cancelText: k ? "NO" : "取消",
    success: function (i) {
      if (i.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), Fn = 0, (fn = [])[0] = "F1" + (n ? RegExp.$1 : gn(RegExp.$1));
        for (var a = e ? RegExp.$2 : ln(RegExp.$2), o = 0; o < a.length; o += 240) Fn++, fn[Fn] = "F2" + a.slice(o, o + 240);
        fn[fn.length] = "F3", Fn = 0, Cn()
      }
    }
  }) : (0, ue.Toast)(k ? "There Are Unfinished Sending Tasks" : "有发送任务未完成")
}

function Cn(t) {
  var e = fn[Fn];
  fe.easySendData1(e, true), (0, ue.Toast)((k ? "Sending:" : "发送进度:") + (Fn / fn.length * 100).toFixed(2) + "%"), Fn++
}

function ln(t) {
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

function Sn(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function dn(t) {
  var e = Math.floor(t / 3600),
    n = Math.floor(t % 3600 / 60),
    i = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(n).padStart(2, "0") + ":" + String(i).padStart(2, "0")
}

function gn(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var n = "", i = 0; i < t.length; i++) n += t.charCodeAt(i).toString(16).padStart(2, "0");
  return e && (n = n.padEnd(2 * e, "0")), n
}

function Bn(t) {
  for (var e = "", n = 0, i = "", a = 0; a < t.length / 2; a++) {
    var o = t.substr(2 * a, 2),
      r = parseInt(o, 16);
    if (0 == r) break;
    n && r ? (i += "%" + o, (n -= 1) || (e += decodeURIComponent(i), i = "")) : r >= 224 & r <= 239 ? (i += "%" + o, n = 2) : r && (e += String.fromCharCode(r))
  }
  return e
}

function Tn(t) {
  return Math.round(100 * t).toString(16).padStart(8, "0")
}

function Dn(t) {
  return Math.floor(t).toString(16).padStart(4, "0")
}

function mn(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function pn(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = t.getFloat32(e, true).toFixed(n);
  return i ? parseFloat(a) : a
}

function Gn(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return n ? parseFloat(i) : i
}

function An(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}
Page({
  data: {
    nbsp: "　",
    Cr50: "#000000",
    Cr0: ye,
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: ye,
    Cr4: "#60ffc8",
    Cr5: ye,
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: ye,
    Cr10: ye,
    Cr11: "#00ff00",
    Cr12: "#00c8ff",
    Cr13: "#ff9430",
    Cr14: "#60ffc8",
    Cr15: ye,
    Cr16: "#f80ca0",
    Cr17: ye,
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
  uset: function (t) {
    (2 == de || Se) && (cn("F401"), cn("FF01"), this.setData({
      Panel: Se ? 2 : 3,
      ShowBar: Se ? 0 : Fe < Number("5.48") ? 4 : 25,
      LOGO: k ? "Preview" : "预览"
    }))
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, ue.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    2 == Se ? (cn("CA"), n.navigateBack({
      delta: 0
    })) : ze("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      cn("FA75" + gn(t))
    }))
  },
  BTRST: function (t) {
    Je("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      cn("F60100"), (0, ue.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTRST1: function (t) {
    Fe > 5.39 && Je("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置并重启", "Exception repair will detect and reset certain settings", (function (t) {
      cn("F60001"), (0, ue.Toast)(k ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTRstart: function (t) {
    Je("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      cn("F001"), (0, ue.Toast)(k ? "The device is restarting" : "设备正在重启!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTClean: function (t) {
    Je("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      cn("AA01"), (0, ue.Toast)(k ? "Data cleared to zero" : "数据已清零!"), n.navigateBack({
        delta: 0
      })
    }))
  },
  BTBC: function (t) {
    cn("F400"), this.setData({
      Panel: 1
    })
  },
  DST1: function (t) {
    cn("AC00"), cn("FF18")
  },
  DST2: function (t) {
    cn("AC01"), cn("FF18")
  },
  DST3: function (t) {
    cn("AC02"), cn("FF18")
  },
  DST4: function (t) {
    cn("AC03"), cn("FF18")
  },
  BTUJY1: function (t) {
    cn("F9E3" + mn(1 - Xt)), cn("FF10")
  },
  BTUJY2: function (t) {
    Ze("设置静音模式最大电流", "Set the maximum current for silent mode", "5", "255", (function (t) {
      cn("F9E6" + mn(t)), cn("FF10")
    }))
  },
  BTUJY3: function (t) {
    Ze("设置静音模式最大风速", "Set the maximum wind speed for silent mode", "50", "200", (function (t) {
      cn("F9E4" + mn(t)), cn("FF10")
    }))
  },
  BTUJY4: function (t) {
    cn("F9E5" + mn(1 - ee)), cn("FF10")
  },
  BTUJY5: function (t) {
    ee && Xt && n.BTUJY3()
  },
  BTER1D: function (t) {
    cn("F4" + mn(ae > 1 ? ae - 1 : 1))
  },
  BTER1U: function (t) {
    cn("F4" + mn(ae < oe ? ae + 1 : oe))
  },
  BTER1S: function (t) {
    Ze("输入要查询的记录编号", "Input the record number to be queried", 1, oe, (function (t) {
      cn("F4" + mn(t))
    }))
  },
  BTER1C: function (t) {
    this.setData({
      ShowBar: 32
    }), oe && Je("确认是否清除故障记录", "Confirm whether to clear the fault record", "", "", (function (t) {
      cn("F40001"), (0, ue.Toast)(k ? "Records have been cleared!" : "记录已清除!")
    }))
  },
  BTKT1: function (t) {
    cn("A4" + mn(1 - j))
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), Ze("设置输出最大功率", "Set maximum output power", "500", "50000", (function (t) {
      cn("F84E" + Tn(t)), cn("F84D" + Tn(t)), cn("FF12")
    }))
  },
  IMGBT: function (t) {},
  BTLOGO0: function (t) {
    if ("预览" == n.data.LOGO || "Preview" == n.data.LOGO) Ke.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: true
    }), n.SetLOGO(be + "|" + Oe, n);
    else if ("发送" == n.data.LOGO || "Send" == n.data.LOGO) {
      return hn(s, 1), void cn("FAD2" + gn(unescape(encodeURIComponent(Ie))))
    }
    n.setData({
      ShowBar: 20,
      LOGO: k ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (t) {
    ze("设置第一行LOGO", "Set the first line logo", be, be, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) be = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) be = "1,27,30," + RegExp.$1, Oe = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, ue.Toast)(k ? "Input format error" : "输入格式错误");
        be = "1,27,30," + RegExp.$1
      }
      n.setData({
        LOGO1: be,
        LOGO2: Oe,
        LOGO: k ? "Preview" : "预览"
      }), n.BTLOGO0()
    }))
  },
  BTLOGO2: function (t) {
    ze("设置第二行LOGO", "Set second line logo", Oe, Oe, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Oe = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) be = "1,27,30," + RegExp.$1, Oe = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, ue.Toast)(k ? "Input format error" : "输入格式错误");
        Oe = "1,57,30," + RegExp.$1
      }
      n.setData({
        LOGO1: be,
        LOGO2: Oe,
        LOGO: k ? "Preview" : "预览"
      }), n.BTLOGO0()
    }))
  },
  BTLOGO3: function (t) {
    cn("F9C0" + mn(1 - Pt)), cn("FF17")
  },
  BTLOGO4: function (t) {
    ze("设置简约模式文字", "Set the first line logo", "最多6个汉字或者12个英文", be, (function (t) {
      cn("FAD2" + gn(t = unescape(encodeURIComponent(t)))), cn("F7")
    }))
  },
  SetLOGO: function (t, e) {
    Ke.createSelectorQuery().select("#LOGO").fields({
      node: true,
      size: true
    }).exec((function (n) {
      var i = n[0].node,
        a = i.getContext("2d");
      i.width = 60, i.height = 60, a.fillStyle = "#000", a.scale(1, 1), a.fillRect(0, 0, 60, 60), a.fillStyle = "#fff";
      var o = t.split("|");
      Ie = "";
      for (var r = 0; r < o.length; r += 1) {
        var c = o[r].split(",");
        Ie += c[3];
        var u = c[0],
          f = c[1],
          F = c[2],
          h = c[3];
        a.font = "normal " + F + "px Kaiti", a.fillText(h, u, f)
      }
      var C = [0],
        l = -1;
      s = "DataStart=LOGO{";
      for (var S = 0; S < 60; S += 1) {
        for (var d = a.getImageData(0, S, 60, 1).data, g = 0; g < 60; g += 1) {
          g % 8 == 0 && (g && (s += C[l].toString(16).padStart(2, "0")), l += 1);
          var B = .299 * d[4 * g] + .587 * d[4 * g + 1] + .114 * d[4 * g + 2];
          C[l] = C[l] >> 1, C[l] = C[l] | (B < 100 ? 0 : 128)
        }
        s += (C[l] >> 4).toString(16).padStart(2, "0")
      }
      s += "}DataEnd", Ke.hideToast(), e.setData({
        LOGO: k ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    Je("是否切温度采集点", "Confirm whether to switch temperature collection points", "无特殊情况请勿修改此值", "Under normal circumstances, there is no need to modify this value", (function (t) {
      cn("F962" + mn(1 - wt)), cn("FF16")
    }))
  },
  SetCAN: function (t, e, i) {
    Je("确认是否切换为" + t, "Switch to " + e, "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == Se) {
        for (var e = parseInt(G, 16), a = e.toString(), o = 0, r = 0; r < a.length; r++) o += a.charCodeAt(r);
        cn("C8FF" + Math.floor(Math.floor(e / 611) * o).toString(16).slice(-6) + i)
      }
      cn("FC53" + i + "01"), (0, ue.Toast)(k ? "The device is restarting" : "重置已发送,设备正在重启!"), n.navigateBack({
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
    n.SetCAN("ZEEHO", "ZEEHO", "0C")
  },
  BTCAN14: function (t) {
    n.SetCAN("EV_Charger", "EV_Charger", "0E")
  },
  BTLEDK2: function (t) {
    Ze("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      cn("F968" + mn(t)), cn("FF13")
    }))
  },
  BTLEDK1: function (t) {
    Ze("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      cn("F969" + mn(t)), cn("FF13")
    }))
  },
  BTLEDKS1: function (t) {
    Ze("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      cn("F96D" + mn(t)), cn("FF12")
    }))
  },
  BTLEDKS2: function (t) {
    Ze("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      cn("F96A" + mn(t)), cn("FF13")
    }))
  },
  BTStart1: function (t) {
    Ze("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      cn("F96B" + mn(t)), cn("FF12")
    }))
  },
  BTStart2: function (t) {
    cn("F96C" + mn(1 - X)), cn("FF12")
  },
  BTGIF1: function (t) {
    cn("F96F" + mn(1 - pt)), cn("FF15")
  },
  BT_GIF1: function (t) {
    hn((0, ue.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    hn((0, ue.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    hn((0, ue.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    hn((0, ue.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    hn((0, ue.GetGIF)(5))
  },
  BTUI: function (t) {
    n.setData({
      CVer: Fe.toFixed(2),
      SCAN: o,
      ID: G,
      ACT: i
    }), cn("F9C8" + mn(1 - Jt)), cn("FF19")
  },
  Scr1: function (t) {
    Ue = 1, n.setData({
      Cr0: ye,
      Cr1: "#00ff00",
      Cr2: "#00c8ff",
      Cr3: ye,
      Cr4: "#60ffc8",
      Cr5: ye,
      Cr6: "#ff9430",
      Cr7: "#f80ca0",
      Cr8: ye,
      Cr10: ye,
      Cr11: "#00ff00",
      Cr12: "#00c8ff",
      Cr13: "#ff9430",
      Cr14: "#60ffc8",
      Cr15: ye,
      Cr16: "#f80ca0",
      Cr17: ye,
      Crs: Ue
    })
  },
  Scr2: function (t) {
    Ue = 2, n.setData({
      Cr0: ye,
      Cr1: ye,
      Cr2: ye,
      Cr3: ye,
      Cr4: ye,
      Cr5: ye,
      Cr6: ye,
      Cr7: ye,
      Cr8: ye,
      Cr10: ye,
      Cr11: ye,
      Cr12: ye,
      Cr13: ye,
      Cr14: ye,
      Cr15: ye,
      Cr16: ye,
      Cr17: ye,
      Crs: Ue
    })
  },
  Scr3: function (t) {
    Ue = 3, n.setData({
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
      Crs: Ue
    })
  },
  Scr4: function (t) {
    Ue = 0, n.setData({
      Cr0: (0, ue.GetCFG)("Cr0", ye),
      Cr1: (0, ue.GetCFG)("Cr1", "#00ff00"),
      Cr2: (0, ue.GetCFG)("Cr2", "#00c8ff"),
      Cr3: (0, ue.GetCFG)("Cr3", ye),
      Cr4: (0, ue.GetCFG)("Cr4", "#60ffc8"),
      Cr5: (0, ue.GetCFG)("Cr5", ye),
      Cr6: (0, ue.GetCFG)("Cr6", "#ff9430"),
      Cr7: (0, ue.GetCFG)("Cr7", "#f80ca0"),
      Cr8: (0, ue.GetCFG)("Cr8", ye),
      Cr10: (0, ue.GetCFG)("Cr10", ye),
      Cr11: (0, ue.GetCFG)("Cr11", "#00ff00"),
      Cr12: (0, ue.GetCFG)("Cr12", "#00c8ff"),
      Cr13: (0, ue.GetCFG)("Cr13", "#ff9430"),
      Cr14: (0, ue.GetCFG)("Cr14", "#60ffc8"),
      Cr15: (0, ue.GetCFG)("Cr15", ye),
      Cr16: (0, ue.GetCFG)("Cr16", "#f80ca0"),
      Cr17: (0, ue.GetCFG)("Cr17", ye),
      Crs: Ue
    })
  },
  BTCr1: function (t) {
    0 == n.data.UI ? (cn("F5280000000000" + Sn(this.data.Cr50)), cn("F53000" + Sn(this.data.Cr0) + "0000f01c"), cn("F53100" + Sn(this.data.Cr1) + "00209F26"), cn("F53200" + Sn(this.data.Cr2) + "00479F26"), cn("F53300" + Sn(this.data.Cr3) + "006e9F27"), cn("F53400" + Sn(this.data.Cr4) + "00969F3f"), cn("F53500" + Sn(this.data.Cr5) + "A3204d4d"), cn("F53600" + Sn(this.data.Cr6) + "50d64f1A"), cn("F53700" + Sn(this.data.Cr7) + "00d64f1A"), cn("F53801" + Sn(this.data.Cr8) + "A3774d68")) : 1 == n.data.UI && (cn("F52000" + Sn(this.data.Cr10) + "0000781c"), cn("F52100" + Sn(this.data.Cr11) + "001cf02e"), cn("F52200" + Sn(this.data.Cr12) + "004af02e"), cn("F52300" + Sn(this.data.Cr13) + "0078f02e"), cn("F52400" + Sn(this.data.Cr14) + "00a6f02e"), cn("F52500" + Sn(this.data.Cr15) + "7800781c"), cn("F52600" + Sn(this.data.Cr16) + "00d4781b"), cn("F52701" + Sn(this.data.Cr17) + "78d4781b"))
  },
  CKA: function (t) {
    xe = 50, this.CRSet(this.data.Cr50)
  },
  CK0: function (t) {
    xe = 0, this.CRSet(this.data.Cr0)
  },
  CK1: function (t) {
    xe = 1, this.CRSet(this.data.Cr1)
  },
  CK2: function (t) {
    xe = 2, this.CRSet(this.data.Cr2)
  },
  CK3: function (t) {
    xe = 3, this.CRSet(this.data.Cr3)
  },
  CK4: function (t) {
    xe = 4, this.CRSet(this.data.Cr4)
  },
  CK5: function (t) {
    xe = 5, this.CRSet(this.data.Cr5)
  },
  CK6: function (t) {
    xe = 6, this.CRSet(this.data.Cr6)
  },
  CK7: function (t) {
    xe = 7, this.CRSet(this.data.Cr7)
  },
  CK8: function (t) {
    xe = 8, this.CRSet(this.data.Cr8)
  },
  CK10: function (t) {
    xe = 10, this.CRSet(this.data.Cr10)
  },
  CK11: function (t) {
    xe = 11, this.CRSet(this.data.Cr11)
  },
  CK12: function (t) {
    xe = 12, this.CRSet(this.data.Cr12)
  },
  CK13: function (t) {
    xe = 13, this.CRSet(this.data.Cr13)
  },
  CK14: function (t) {
    xe = 14, this.CRSet(this.data.Cr14)
  },
  CK15: function (t) {
    xe = 15, this.CRSet(this.data.Cr15)
  },
  CK16: function (t) {
    xe = 16, this.CRSet(this.data.Cr16)
  },
  CK17: function (t) {
    xe = 17, this.CRSet(this.data.Cr17)
  },
  CRSet: function (t) {
    t.match(/#(..)(..)(..)/), Ne = RegExp.$1, Me = RegExp.$2, Pe = RegExp.$3, this.setData({
      CR: parseInt(Ne, 16),
      CG: parseInt(Me, 16),
      CB: parseInt(Pe, 16)
    })
  },
  SetCr: function () {
    0 == n.data.UI && xe >= 10 && 50 != xe && (xe = 0), 1 == n.data.UI && xe < 10 && (xe = 10), 0 == xe ? n.setData({
      Cr0: "#" + Ne + Me + Pe
    }) : 1 == xe ? n.setData({
      Cr1: "#" + Ne + Me + Pe
    }) : 2 == xe ? n.setData({
      Cr2: "#" + Ne + Me + Pe
    }) : 3 == xe ? n.setData({
      Cr3: "#" + Ne + Me + Pe
    }) : 4 == xe ? n.setData({
      Cr4: "#" + Ne + Me + Pe
    }) : 5 == xe ? n.setData({
      Cr5: "#" + Ne + Me + Pe
    }) : 6 == xe ? n.setData({
      Cr6: "#" + Ne + Me + Pe
    }) : 7 == xe ? n.setData({
      Cr7: "#" + Ne + Me + Pe
    }) : 8 == xe ? n.setData({
      Cr8: "#" + Ne + Me + Pe
    }) : 10 == xe ? n.setData({
      Cr10: "#" + Ne + Me + Pe
    }) : 11 == xe ? n.setData({
      Cr11: "#" + Ne + Me + Pe
    }) : 12 == xe ? n.setData({
      Cr12: "#" + Ne + Me + Pe
    }) : 13 == xe ? n.setData({
      Cr13: "#" + Ne + Me + Pe
    }) : 14 == xe ? n.setData({
      Cr14: "#" + Ne + Me + Pe
    }) : 15 == xe ? n.setData({
      Cr15: "#" + Ne + Me + Pe
    }) : 16 == xe ? n.setData({
      Cr16: "#" + Ne + Me + Pe
    }) : 17 == xe ? n.setData({
      Cr17: "#" + Ne + Me + Pe
    }) : 50 == xe && n.setData({
      Cr50: "#" + Ne + Me + Pe
    })
  },
  CSC: function (t) {
    0 == Ue && (0, ue.SetCFG)("Cr" + xe, "#" + Ne + Me + Pe)
  },
  CRC: function (t) {
    Ne = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CGC: function (t) {
    Me = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CBC: function (t) {
    Pe = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CTC1: function (t) {
    Re = t.detail.value.toString(16).padStart(2, "0"), (0, ue.SetCFG)("BGT", Re), n.setData({
      BGC: "#000000" + Re
    })
  },
  BTBGP10: function (t) {
    n.setData({
      BGP: Ve[1],
      BGI: 1
    }), (0, ue.SetCFG)("BGI", 1)
  },
  BTBGP1: function (t) {
    ze("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, ue.SetCFG)("BGI", 1), (0, ue.SetCFG)("BGP1", t), n.setData({
        BGP1: t,
        BGP: t,
        BGI: 1
      })
    }))
  },
  BTBGP20: function (t) {
    n.setData({
      BGP: Ve[2],
      BGI: 2
    }), (0, ue.SetCFG)("BGI", 2)
  },
  BTBGP2: function (t) {
    ze("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, ue.SetCFG)("BGI", 2), (0, ue.SetCFG)("BGP2", t), n.setData({
        BGP2: t,
        BGP: t,
        BGI: 2
      })
    }))
  },
  BTBGP30: function (t) {
    n.setData({
      BGP: Ve[3],
      BGI: 3
    }), (0, ue.SetCFG)("BGI", 3)
  },
  BTBGP3: function (t) {
    ze("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, ue.SetCFG)("BGI", 3), (0, ue.SetCFG)("BGP3", t), n.setData({
        BGP3: t,
        BGP: t,
        BGI: 3
      })
    }))
  },
  BTBGP40: function (t) {
    n.setData({
      BGP: Ve[4],
      BGI: 4
    }), (0, ue.SetCFG)("BGI", 4)
  },
  BTBGP4: function (t) {
    ze("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, ue.SetCFG)("BGI", 4), (0, ue.SetCFG)("BGP4", t), n.setData({
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
            Ve[5] = t.savedFilePath, n.setData({
              BGP: Ve[5],
              BGI: 5
            }), (0, ue.SetCFG)("BGI", 5), (0, ue.SetCFG)("BGP5", Ve[5])
          }
        })
      }
    })
  },
  BTCKA2: function (t) {
    cn("F972" + mn(1 - Gt)), cn("FF15")
  },
  BTEN1: function (t) {
    Ce && this.MSG("", "1100001BE4000005DC000020D0000005DC010" + (1 - k) + "00"), (0, ue.SetCFG)("UEN", 1 - k), cn("F970" + mn(1 - k)), cn("FF11")
  },
  BTBLE1: function (t) {
    ze("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      cn(t = (t = "FA73" + gn(t = unescape(encodeURIComponent(t)))).substring(0, 40)), cn("FF20")
    }))
  },
  BTBLE2: function (t) {
    ze("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      cn("FA74" + gn(t)), cn("FF21")
    }))
  },
  BTVIN: function (t) {
    ze("设置取电器VIN码", "Set VIN", "标准17位英文和数字", "Up to 17 characters", (function (t) {
      return (t = t.toUpperCase()).match(/^[A-HJ-NPR-Z0-9]{14}\d\d\d$/) ? (cn("FAD3" + gn(t = unescape(encodeURIComponent(t)))), void cn("FF25")) : void(0, ue.Toast)(k ? "Incorrect VIN input!" : "输入VIN不正确!")
    }))
  },
  BTTCH1: function (t) {
    ze("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return cn("FAD1" + gn(t)), void cn("FF24");
      (0, ue.Toast)(k ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    Ze("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      cn("F9C7" + mn(t)), cn("FF18")
    }))
  },
  BTDDV1: function (t) {
    0 != dt && Je("是否切换驱动ST7789 1.54", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      cn("CD02")
    }))
  },
  BTDDV2: function (t) {
    1 != dt && Je("是否切换驱动JD9853 1.83(14P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      cn("CD03")
    }))
  },
  BTDDV3: function (t) {
    2 != dt && Je("是否切换驱动JD9853 1.83(18P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      cn("CD04")
    }))
  },
  BTDDV4: function (t) {
    3 != dt && Je("是否切换驱动ST7789 1.69(18P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      cn("CD05")
    }))
  },
  BTDDV5: function (t) {
    4 != dt && Je("是否切换驱动ST7789 1.83(14P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      cn("CD06")
    }))
  },
  BTDDV6: function (t) {
    5 != dt && Je("是否切换驱动ST7789 1.83(18P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      cn("CD07")
    }))
  },
  BTKEY1: function (t) {
    cn("F967" + mn(1 - R)), cn("FF10")
  },
  BTKEY2: function (t) {
    cn("F966" + mn(1 - H)), cn("FF11")
  },
  BTKEY3: function (t) {
    cn("F9E8" + mn(1 - jt)), cn("FF11")
  },
  BTDDT1: function (t) {
    cn("F96E" + mn(It >= 3 ? 0 : It + 1)), cn("FF16")
  },
  UPDate: function (n, i) {
    cn("A600"), cn("FF10"), cn("AB00" + gn(unescape(encodeURIComponent(t)))), cn("AB01" + gn(unescape(encodeURIComponent(e)))), cn(n + gn(i)), (0, ue.Toast)(k ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示.")
  },
  BTLST: function (t) {
    this.setData({
      LST: 1 - this.data.LST
    })
  },
  BTUP6: function (t) {
    ze("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, ue.SetCFG)("WID", t), cn("AB00" + gn(t = unescape(encodeURIComponent(t)))), cn("FF22")
    }))
  },
  BTUP7: function (t) {
    ze("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, ue.SetCFG)("WPD", t), cn("AB01" + gn(t = unescape(encodeURIComponent(t)))), cn("FF23")
    }))
  },
  BTUP1: function (t) {
    if (!Le)
      if (this.data.CVer >= this.data.UPDate) {
        if (Be) return;
        Je("升级确认", "Confirm clearance date", "当前已经是最新版,确定是否重新升级固件", "", (function (t) {
          n.UPDate("A700000000", "NewUI")
        }))
      } else Ke.showModal({
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
    Se && Je("确认清除激活日期", "Confirm clearance date", "", "", (function (t) {
      cn("FD48" + gn("Cxjdwx"))
    }))
  },
  BTUP8: function (t) {
    Ke.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    Ke.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    Ke.setClipboardData({
      data: "设备ID:" + G
    })
  },
  BTUP0: function (t) {
    Ke.showModal({
      title: k ? "Firmware rollback" : "固件回退",
      editable: false,
      confirmText: k ? "YES" : "确定",
      cancelText: k ? "NO" : "取消",
      success: function (t) {
        t.confirm && (he && n.UPDate("A700000000", "CEVRollBack"), he || n.UPDate("A700000000", "CANRollBack"))
      }
    })
  },
  BTUP9: function (t) {
    Ke.showModal({
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
    Je("是否切换风速控制方式", "Confirm whether to switch the wind speed control mode", "如采用标配风机小板请勿修改此值", "If using the standard fan board, please do not modify this value", (function (t) {
      cn("F9E2" + mn(1 - p)), cn("FF")
    }))
  },
  BTUFS: function (t) {
    Ze("设置温度加速值", "Set temperature acceleration value", "2", "20", (function (t) {
      cn("F963" + mn(t)), cn("FF14")
    }))
  },
  BTAFS: function (t) {
    Ze("设置电流加速值", "Set current acceleration value", "0.1", "3.0", (function (t) {
      cn("F964" + mn(10 * t)), cn("FF14")
    }))
  },
  BTLFS: function (t) {
    Ze("设置初始风速值", "Set initial wind speed value", "20", "200", (function (t) {
      cn("F965" + mn(t)), cn("FF14")
    }))
  },
  BTMFS: function (t) {
    Ze("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      cn("F9C5" + mn(t)), cn("FF14")
    }))
  },
  BTTMC: function (t) {
    Ze("设置超温进入温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      cn("F84A" + Tn(t)), cn("FF13")
    }))
  },
  BTTMC1: function (t) {
    Fe >= 5.46 ? Ze("设置电流加减幅度", "Set the current step amplitude", "0.01", "1", (function (t) {
      cn("F84B" + Tn(t)), cn("FF13")
    })) : Ze("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      cn("F84B" + Tn(t)), cn("FF13")
    }))
  },
  BTOST: function (t) {
    Ze("设置超温关机温度", "Set the exit temperature for over temperature", "50", "120", (function (t) {
      cn("F8F7" + Tn(t)), cn("FF18")
    }))
  },
  BTTMW: function (t) {
    Fe >= 5.46 ? Ze("电流最低值", "Minimum current value", "5", "50", (function (t) {
      cn("F84C" + Tn(t)), cn("FF13")
    })) : Ze("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      cn("F84C" + Tn(t)), cn("FF13")
    }))
  },
  BTMMV: function (t) {
    Ze("设置最高电压限制", "Set maximum voltage limit", "100", "1000", (function (t) {
      cn("F8FA" + Tn(t)), cn("FF19"), cn("FF14")
    }))
  },
  BTMMA: function (t) {
    Ze("设置最高电流限制", "Set maximum current limit", "10", "400", (function (t) {
      cn("F8F9" + Tn(t)), cn("FF19"), cn("FF14")
    }))
  },
  BTRDY: function (t) {
    Ze("设置就绪电压范围", "Set the ready voltage range", "1", "20", (function (t) {
      cn("F9CD" + mn(t)), cn("FF19")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), u > 0 && u < 5 ? Je("检测到输出电流", "Detected output current", "如有负载请点取消后断开负载再开始校正,如无负载则为空载电流,点击确定将会设置为最小电流过滤(可在输出电流校正页面中设置).", "If there is a load detected in the output current, please click NO and disconnect the load before starting the calibration. If there is no load, Click YES will set it as the minimum current filter (which can be set on the output current calibration page)", (function (t) {
      cn("F848" + Tn(Number(u) + .05)), cn("FF16")
    })) : c < 10 || u > 0 ? (0, ue.Toast)(k ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (cn("C1"), cn("FF"), Ze("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / c).toFixed(4),
        n = Number(t / et).toFixed(4);
      cn("C3" + Tn(100 * n) + Tn(100 * e)), 2 == o ? (cn("F876" + Tn(20 * n)), cn("F877" + Tn(100 * n))) : 1 == o ? (cn("F876" + Tn(41 * n)), cn("F877" + Tn(58.5 * n))) : 4 == o ? (cn("F876" + Tn(41.2 * n)), cn("F877" + Tn(59.3 * n))) : 16 == o ? (cn("F876" + Tn(44 * n)), cn("F877" + Tn(61 * n))) : 32 == o && (cn("F876" + Tn(41.2 * n)), cn("F877" + Tn(59.4 * n))), cn("FF"), cn("A80" + V + Tn(50 * n) + Tn(nt)), cn("FF")
    })))
  },
  BTOVT1: function (t) {
    he ? Ze("升压采样补偿", "Boost voltage compensation", "0.1", "1", (function (t) {
      t > 999.99 ? t *= 1e-4 : t > 99.99 && (t *= .001), cn("FB47" + Tn(100 * t)), cn("FF")
    })) : Ze("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      cn("FB47" + Tn(100 * t)), cn("FF")
    }))
  },
  BTOVTU: function (t) {
    cn("FB47" + Tn(100 * (Number(gt) + 3e-4))), cn("FF")
  },
  BTOVTD: function (t) {
    cn("FB47" + Tn(100 * (Number(gt) - 3e-4))), cn("FF")
  },
  BTOVD1: function (t) {
    he ? Ze("基础电压补偿", "Basic voltage compensation", "10", "40", (function (t) {
      cn("FB46" + Tn(100 * t)), cn("FF")
    })) : Ze("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      cn("FB46" + Tn(100 * t)), cn("FF")
    }))
  },
  BTOVDU: function (t) {
    cn("FB46" + Tn(100 * (Number(Tt) + 3e-4))), cn("FF")
  },
  BTOVDD: function (t) {
    cn("FB46" + Tn(100 * (Number(Tt) - 3e-4))), cn("FF")
  },
  BTOVS: function (t) {
    je(k ? "Set voltage range" : "设置电压范围", (k ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (cn("F876" + Tn(Number(RegExp.$1))), cn("F877" + Tn(Number(RegExp.$2))), cn("FF")) : (0, ue.Toast)(k ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    Ze("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      cn("F8F3" + Tn(t)), cn("FF")
    }))
  },
  BTOVT3: function (t) {
    c < 10 || u > 0 ? (0, ue.Toast)(k ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (cn("C2"), cn("FF"), Ze("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / c).toFixed(4);
      cn("C4" + Tn(100 * Number(t / et).toFixed(4)) + Tn(100 * e)), cn("FF")
    })))
  },
  BTOVT2: function (t) {
    Ze("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      cn("FBF2" + Tn(100 * t)), cn("FF")
    }))
  },
  BTO2TU: function (t) {
    cn("FBF2" + Tn(100 * (Number(Ot) + 3e-4))), cn("FF")
  },
  BTO2TD: function (t) {
    cn("FBF2" + Tn(100 * (Number(Ot) - 3e-4))), cn("FF")
  },
  BTOVD2: function (t) {
    Ze("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      cn("FBF1" + Tn(100 * t)), cn("FF")
    }))
  },
  BTO2DU: function (t) {
    cn("FBF1" + Tn(100 * (Number(xt) + 3e-4))), cn("FF")
  },
  BTO2DD: function (t) {
    cn("FBF1" + Tn(100 * (Number(xt) - 3e-4))), cn("FF")
  },
  BTIVD1: function (t) {
    Ze("输入电压补偿值", "Input voltage compensation value", "0.1", "5", (function (t) {
      cn("F8FB" + Tn(t)), cn("FF")
    }))
  },
  BTIVD2: function (t) {
    cn("F8FB" + Tn(1)), cn("FF"), Ze("输入实际测量出的输入电压", "Input the actual measured input voltage", "10", "1000", (function (t) {
      cn("F8FB" + Tn(Number(t / S))), cn("FF")
    }))
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 50,
      duration: 300
    }), u < 5 || et - c < .2 ? (0, ue.Toast)(k ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (cn("C0"), cn("FF"), Ze("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / u).toFixed(4);
      cn("C5" + Tn(100 * Number(t / nt).toFixed(4)) + Tn(100 * e)), cn("FF")
    })))
  },
  BTOAT1: function (t) {
    Ze("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      cn("FB45" + Tn(100 * t)), cn("FF")
    }))
  },
  BTOAT2: function (t) {
    cn("FB45" + Tn(100 * (Number(Bt) - .001))), cn("FF")
  },
  BTOAT3: function (t) {
    cn("FB45" + Tn(100 * (Number(Bt) + .003))), cn("FF")
  },
  BTOAS1: function (t) {
    Ze("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      cn("F8F4" + Tn(t)), cn("FF")
    }))
  },
  BTCLV: function (t) {
    Ze("设置最小电流过滤", "Set minimum current filtering", "0.00", "5.00", (function (t) {
      cn("F848" + Tn(t)), cn("FF")
    }))
  },
  BTOAD1: function (t) {
    Ze("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      cn("FB44" + Tn(100 * t)), cn("FF")
    }))
  },
  BTOAD2: function (t) {
    cn("FB44" + Tn(100 * (Number(Dt) - .001))), cn("FF")
  },
  BTOAD3: function (t) {
    cn("FB44" + Tn(100 * (Number(Dt) + .001))), cn("FF")
  },
  BTOAS: function (t) {
    je(k ? "Set current range" : "设置电流范围", (k ? "Now:" : "当前范围:") + ut + "-" + ft, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (cn("F878" + Tn(Number(RegExp.$1))), cn("F879" + Tn(Number(RegExp.$2))), cn("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (cn("F879" + Tn(t)), cn("FF")) : (0, ue.Toast)(k ? "Input format error" : "输入格式错误!"))
    }))
  },
  BTIAD1: function (t) {
    Ze("输入电流补偿值", "Input current compensation value", "0.1", "5", (function (t) {
      cn("F8FC" + Tn(t)), cn("FF")
    }))
  },
  BTIAD2: function (t) {
    cn("F8FB" + Tn(1)), cn("FF"), Ze("输入实际测量出的输入电流", "Input the actual measured input current", "3", "50", (function (t) {
      cn("F8FC" + Tn(Number(t / d))), cn("FF")
    }))
  },
  pwrbt: function (t) {
    cn("A6" + mn(1 - W)), cn("FF10")
  },
  BTUCF1: function (t) {
    cn("F9CF" + mn(1 - Qt)), cn("FF10")
  },
  owbt: function (t) {
    Ze("设置功率限制", "Set power limit", "300", _, (function (t) {
      cn("F84D" + Tn(t)), cn("FF")
    }))
  },
  BTUIW1: function (t) {
    cn("F9E1" + mn(1 - Ae)), cn("FF")
  },
  tibt: function (t) {
    Ze("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      cn("A9" + Dn(t)), cn("FF")
    }))
  },
  BTYC1: function (t) {
    Ze("设置预充电压", "Set pre charge voltage", "0", ht, (function (t) {
      cn("F8F6" + Tn(t)), cn("FF")
    }))
  },
  BTYC2: function (t) {
    Ze("设置预充电流", "Set pre charge current", ut, ft, (function (t) {
      cn("F8F5" + Tn(t)), cn("FF")
    }))
  },
  SetVA: function (t, e, n) {
    V != t && (e > ht || e < Ft ? Ze("设置输出电压", "Set output voltage", Ft, ht, (function (e) {
      cn("A80" + (V = t) + Tn(e) + Tn(n)), cn(t <= 2 ? "FF10" : "FF11")
    })) : Je("快捷设置电压电流切换", "Switch confirmation", "为避免误触,请确认切换电压电流", "To avoid accidental contact, please confirm the switching voltage and current", (function (i) {
      cn("A80" + (V = t) + Tn(e) + Tn(n)), cn(t <= 2 ? "FF10" : "FF11")
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
    he ? Fe >= 5.39 ? Ze("设置超温关机倒计时", "设置超温关机倒计时", 3, 60, (function (t) {
      cn("F961" + mn(t)), cn("FF15")
    })) : (0, ue.Toast)(k ? "The current firmware version is not adjustable. If you need to modify it, please upgrade the firmware!" : "当前固件版本不可调,如需修改请升级固件!") : Ze("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      cn("F961" + mn(t)), cn("FF15")
    }))
  },
  hqbt0: function (t) {
    cn("F961" + mn(0 == mt ? he ? 30 : 5 : 0)), cn("FF15")
  },
  btbt1: function (t) {
    Se && wx.getClipboardData({
      success: function (t) {
        var e = t.data;
        e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (cn("F96B" + mn(3)), cn("F96C" + mn(0)), hn(e))
      }
    })
  },
  nvbt: function (t) {
    je(k ? "Set Output Voltage" : "设置输出电压", (k ? "Range:" : "范围:") + Ft + "-" + ht, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) cn(t.substr(2, 4) + Tn(t.substr(6))), cn("FF");
        else {
          if (t.startsWith("FFF9")) return cn(t.substr(2)), void cn("FF");
          if ("DEBUG=0" == t)(0, ue.SetCFG)("DEBUG", 0), le = 0, cn("F9C900"), cn("F9CA01"), cn("F9CB01"), cn("F9CC01");
          else if ("DEBUG=1" == t)(0, ue.SetCFG)("DEBUG", 1), le = 1, cn("F9C900"), cn("F9CA01"), cn("F9CB01"), cn("F9CC01");
          else if ("DEBUG=2" == t)(0, ue.SetCFG)("DEBUG", 2), le = 2, cn("F9C9FF"), cn("F9CA01"), cn("F9CB01"), cn("F9CC01");
          else if ("DEBUG=3" == t)(0, ue.SetCFG)("DEBUG", 2), le = 2, cn("F9C9FF"), cn("F9CA01"), cn("F9CB01"), cn("F9CC00");
          else if (t.startsWith("FFC8")) cn(t.substr(2, 4) + t.substr(6)), cn("FF");
          else if (t.startsWith("FFC9")) {
            cn("C9" + t.substr(4, 4) + gn(t.substr(8)))
          } else if ("异常修复" == t) n.BTRST1();
          else if ("强制升级" == t || "测试版" == t) Ke.showModal({
            title: k ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: k ? "YES" : "确定",
            cancelText: k ? "NO" : "取消",
            success: function (e) {
              e.confirm && n.UPDate("A700000000", "测试版" == t ? "Test1" : "NewUI")
            }
          });
          else if ("测试二" == t) Ke.showModal({
            title: k ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: k ? "YES" : "确定",
            cancelText: k ? "NO" : "取消",
            success: function (t) {
              t.confirm && n.UPDate("A700000000", "Test2")
            }
          });
          else if ("测试零" == t) {
            if (2 != Se) return;
            Ke.showModal({
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
              e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && hn(e)
            }
          });
          else {
            if (cn("A1" + gn(t)), (t = parseFloat(t)) > ht || t < Ft && 0 == Qt || !isFinite(t)) return void(0, ue.Toast)(k ? "Beyond the set range!" : "超出设置范围!");
            cn("A80" + V + Tn(t) + Tn(nt)), cn("FF")
          }
        }
      else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (cn("F96B" + mn(3)), hn(e))
        }
      })
    }))
  },
  nabt: function (t) {
    Ze("设置输出电流", "Set output current", ut, ft, (function (t) {
      cn("A80" + V + Tn(et) + Tn(t)), cn("FF")
    }))
  },
  sa2bt3: function (t) {
    Ze("设置充电时间(分钟)", "Set charging time(Minute)", 0, 600, (function (t) {
      cn("A9" + Dn(t)), cn("FF")
    }))
  },
  SetS2V: function () {
    Je("无特殊情况请勿修改此值", "Modify this value without special circumstances", "此值限定二段功能使用电压,二段功能只能直充使用,如果使用充电器充电时打开二段功能可能会导致充电失败", "This value is limited to the two-stage voltage, and the two-stage function can only be used directly. If the two-stage function is turned on while charging with a charger, it may cause charging failure", (function (t) {
      Ze("设置二段允许最大电压", "Set the maximum allowable voltage for the second stage", 50, ht, (function (t) {
        cn("F8FD" + Tn(t)), cn("FF12")
      }))
    }))
  },
  SetSGK: function () {
    if (Fe >= 5.39) {
      var t = 0 == qt ? "1" : "0";
      cn("A50" + t), cn("A40" + t), cn("FF19")
    } else cn("F857" + Tn(0 == J ? 1 : 0)), cn("FF12")
  },
  SetSGV: function () {
    cn("F9E7" + mn(1 - $t)), cn("FF10")
  },
  sa2bt2: function (t) {
    Ze("设置二段电流", "Set second stage current", ut, ft, (function (t) {
      cn("F857" + Tn(t)), cn("FF12")
    }))
  },
  sa2bt1: function (t) {
    Ze("设置二段电压", "Set second stage voltage", Ft, ht, (function (t) {
      cn("F858" + Tn(t)), cn("FF12")
    }))
  },
  sa2bt0: function (t) {
    he && (Fe < 5.39 || et > we) ? cn("A9" + Dn(De ? 0 : 60)) : (cn("F858" + (0 == J ? Tn(et - 3) : "00000000")), cn("F857" + (0 == J ? Tn(10) : "00000000")), cn("FF12"))
  },
  sdbt1: function (t) {
    Ze("设置延时时间(分钟)", "Set delay time (Minutes)", 1, 600, (function (t) {
      cn("F859" + Tn(t)), cn("FF16")
    }))
  },
  sdbt2: function (t) {
    Ze("设置关机电流", "SSet startup delay current", "0.00", "10.00", (function (t) {
      cn("F8F0" + Tn(t)), cn("FF")
    }))
  },
  sdbt0: function (t) {
    cn("F859" + (0 == vt ? Tn(1) : "00000000")), cn("FF16")
  },
  MSG: function (t, e) {
    if (!a)
      if (1 != le || e.startsWith("D") || (0, ue.print)("MSG:", e), e.startsWith("A101")) n.setData({
        ShowBar: 0,
        Panel: 2,
        LOGO: k ? "Preview" : "预览"
      });
      else if (e.startsWith("A001")) de = 2, "未激活" != i || Se || $e(), Fe <= 5.28 && cn("FF");
    else if (e.startsWith("A000")) {
      if (de) return;
      de = 1, (0, ue.Toast)(k ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ke.showModal({
          title: k ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + G,
          confirmText: k ? "YES" : "确定",
          cancelText: k ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, ue.SetCFG)(G, t.content), cn("A0" + gn(t.content)), de = 0)
          }
        })
      }), 1e3)
    } else if (e.startsWith("F101")) Cn();
    else if (e.startsWith("F201")) Cn();
    else if (e.startsWith("F301")) Fn = 0, fn = [], (0, ue.Toast)(k ? "Send End!" : "发送完成!");
    else if (e.startsWith("FF")) {
      var s = new DataView(t);
      s.getUint8(1) ? 2 != de && (de = 2, "未激活" != i || Se || $e()) : ((0, ue.Toast)(k ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ke.showModal({
          title: k ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + G,
          confirmText: k ? "YES" : "确定",
          cancelText: k ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, ue.SetCFG)(G, t.content), cn("FF" + gn(t.content)), de = 0)
          }
        })
      }), 1e3)), W = s.getUint8(2), R = s.getUint8(3), o = s.getUint8(4), k = s.getUint8(5), H = s.getUint8(6), Q = s.getUint8(7), tt = s.getUint8(8), rt = s.getUint8(9), st = s.getUint8(10), ct = s.getUint8(11), Ct = s.getUint8(12), lt = s.getUint8(13), St = s.getUint8(14) / 10, mt = s.getUint8(15), pt = s.getUint8(16), Gt = s.getUint8(17), wt = s.getUint8(18), It = s.getUint8(19), bt = .01 * s.getUint8(20), Pt = s.getUint8(21), Vt = s.getUint8(22), Wt = s.getUint8(23), Yt = s.getUint8(24), kt = s.getUint8(25), Ht = s.getUint8(26), Jt = s.getUint8(27), _t = s.getUint8(28), qt = s.getUint8(29), X = s.getUint8(30), V = s.getUint8(31), Qt = s.getUint8(32), yt = s.getUint8(33), Ae = s.getUint8(34), Ee = s.getUint8(35), ve = s.getUint8(36), p = s.getUint8(37), Xt = s.getUint8(38), te = s.getUint8(39), ee = s.getUint8(40), ne = s.getUint8(41), $t = s.getUint8(42), jt = s.getUint8(43), dt = s.getUint8(44);
      var se = 51;
      M = [pn(s, se, 2, 1), pn(s, se + 4, 2, 1)], P = [pn(s, se += 8, 2, 1), pn(s, se + 4, 2, 1)], y = [pn(s, se += 8, 2, 1), pn(s, se + 4, 2, 1)], Y = [pn(s, se += 8, 2, 1), pn(s, se + 4, 2, 1)], z = pn(s, se += 8), J = pn(s, se += 4), _ = pn(s, se += 4), q = pn(s, se += 4), it = pn(s, se += 4), at = pn(s, se += 4), ot = pn(s, se += 4), L = pn(s, se += 4), ut = pn(s, se += 4), ft = pn(s, se += 4), Ft = pn(s, se += 4), ht = pn(s, se += 4), gt = pn(s, se += 4, 4), Bt = pn(s, se += 4, 4), Tt = pn(s, se += 4, 4), Dt = pn(s, se += 4, 4), At = pn(s, se += 4), Et = pn(s, se += 4), vt = pn(s, se += 4), Ut = pn(s, se += 4), Ot = pn(s, se += 4, 4), xt = pn(s, se += 4, 4), Nt = pn(s, se += 4), Mt = pn(s, se += 4), Rt = pn(s, se += 4), Lt = pn(s, se += 4), Kt = pn(s, se += 4), Zt = pn(s, se += 4), zt = pn(s, se += 4), K = pn(s, se += 4, 4), se += 4, Fe >= 5.43 && (Z = pn(s, se, 4), se += 4), Fe >= 5.49 && (we = pn(s, se), se += 4), 1 == V ? (nt = M[1], et = M[0]) : 2 == V ? (nt = P[1], et = P[0]) : 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = Y[1], et = Y[0]), n.setData({
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
        LFS: lt,
        AFS: St,
        UHQ: mt,
        GIF: pt,
        SGV: $t,
        KPR: jt,
        CKA2: Gt,
        NTC: wt,
        DDT: It,
        CLV: bt,
        UEG: Pt,
        S2V: we,
        UCN: Vt,
        MFS: Wt,
        DOL: Yt,
        DST: kt,
        LKS: Ht,
        UI: Jt,
        RDY: _t,
        SGK: qt,
        ETi: X,
        KSi: V,
        DSP: dt,
        UCF: Qt,
        TCH: yt,
        UIW: Ae,
        ACK: Ee,
        CCK: ve,
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
        SA2: J,
        SMW: _,
        UMW: q,
        TMW: it,
        UMT: at,
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
      var ce = Bn(e.substring(20, 40));
      if (i = ce.startsWith("20") ? ce : "未激活", 0 == o) {
        Fe = .01 * parseInt(e.substring(16, 20), 16), o = An(e, 14), he = 0, G = e.substring(2, 14), 1 == o ? (r = "Huawei", Fe >= 5.36 && (n.setData({
          Err: 1
        }), nn()), Fe >= 5.46 && (ie = 1)) : 2 == o ? (r = "Increase", n.setData({
          Err: 1
        }), rn()) : 4 == o ? (r = "ZTE3000", Fe >= 5.46 && (ie = 1)) : 8 == o ? (r = "INFY", n.setData({
          Err: 1
        }), sn()) : 12 == o ? (r = "EV_Station", he = 2) : 13 == o ? r = "ZEEHO" : 14 == o ? (r = "EV_Charger", n.setData({
          Err: 1
        }), on(), he = 1) : 16 == o ? r = "EPS6020" : 32 == o ? (r = "ZTE4875", Fe >= 5.44 && (n.setData({
          Err: 1
        }), an()), Fe >= 5.46 && (ie = 1)) : 64 == o ? r = "Sinexcel" : 65 == o ? r = "BH10M100" : 66 == o ? r = "MC1503N5R" : 67 == o && (r = "R24-2200");
        var fe = wx.getDeviceInfo();
        (0, ue.Check)(G, ke, Se, r, Fe.toFixed(2), i, fe.model, fe.system, (function (t) {
          "0" == t[0] && (a = 1, cn("CC"), _e("设备授权异常", "Abnormal device authorization", "ID:0x" + G, "ID:0x" + G, "我知道了", "Yes I Kown", (function (t) {
            n.navigateBack({
              delta: 0
            })
          }))), "1" == t[1] && cn("CB"), "1" == t[2] && $e()
        })), G = "0x" + G, n.setData({
          CVer: Fe.toFixed(2),
          CEV: he,
          SCAN: r,
          ID: G,
          ACT: i,
          MUS: ie
        });
        var Ce = (0, ue.GetCFG)(G, "0000");
        Se && (Ce = (Number(G) + 19880914).toString(16).substring(4, 8)), e.startsWith("EE") ? 0 != de && 3 != de || cn("A0" + gn(Ce)) : (cn("FF" + gn(Ce)), setTimeout((function () {
          3 == de && (de = 0, cn("FF" + gn(Ce)))
        }), 1500))
      }
      if (e.startsWith("FE")) {
        var Be = Bn(e.substring(260, 300)),
          Te = Bn(e.substring(300, 340));
        "config" != Be && "" != Be || (Be = (0, ue.GetCFG)("WID", "config")), "88888888" != Te && "" != Te || (Te = (0, ue.GetCFG)("WPD", "88888888")), n.setData({
          VIN: Bn(e.substring(100, 140)),
          SSID: Bn(e.substring(140, 180)),
          UPWD: Bn(e.substring(180, 220)),
          LKV: Bn(e.substring(220, 260)),
          WID: Be,
          WPD: Te
        })
      }
    } else if (e.startsWith("FA")) {
      var Ue = new DataView(t);
      c = pn(Ue, 1), u = pn(Ue, 5), f = pn(Ue, 9), S = pn(Ue, 13), d = pn(Ue, 17), g = pn(Ue, 21), n.setData({
        IA: d,
        OV: c,
        OA: u,
        OW: f
      })
    } else if (e.startsWith("FB")) {
      var Ie = new DataView(t);
      h = Ie.getUint8(1), C = Ie.getUint8(2), l = Ie.getUint8(3), T = Ie.getUint8(4), D = Ie.getUint8(5), m = Ie.getUint8(6), w = Ie.getUint8(7), I = Ie.getUint8(8), $ = Ie.getUint8(9), De = Ie.getUint8(10), De += Ie.getUint8(11) << 8, me = Ie.getUint8(12), j = Ie.getUint8(13), oe = Ie.getUint8(20), ae = Ie.getUint8(21), re = Ie.getUint8(22);
      var be = 31;
      c = pn(Ie, be), u = pn(Ie, be += 4), f = pn(Ie, be += 4), F = pn(Ie, be += 4), S = pn(Ie, be += 4), d = pn(Ie, be += 4), g = pn(Ie, be += 4), B = pn(Ie, be += 4), A = pn(Ie, be += 4), E = pn(Ie, be += 4), v = pn(Ie, be += 4), U = pn(Ie, be += 4), b = pn(Ie, be += 4), O = pn(Ie, be += 4), x = pn(Ie, be += 4), N = pn(Ie, be += 4), be += 4, 2 == o ? rn(T, D) : 8 == o ? rn(T, D, m) : Fe >= 5.44 && (32 == o ? an(Ie.getUint8(23), Ie.getUint8(24), Ie.getUint8(25), Ie.getUint8(26), Ie.getUint8(27), Ie.getUint8(28), Ie.getUint8(29)) : 1 == o ? nn(Ie.getUint8(23), Ie.getUint8(24), Ie.getUint8(25), Ie.getUint8(26), Ie.getUint8(27), Ie.getUint8(28), 0) : 14 == o && on(Ie.getUint8(23), Ie.getUint8(24), Ie.getUint8(25), Ie.getUint8(26), Ie.getUint8(27), Ie.getUint8(28), Ie.getUint8(29), Ie.getUint8(30))), Fe >= 5.42 && (pe = Ie.getUint8(14), Ge = pn(Ie, be), be += 4, Ge >= 100 && (n.navigateBack({
        delta: 0
      }), _e("升级成功", "Upgrade completed!", "", "", "我知道了", "Yes I Kown", (function (t) {}))));
      var Oe = Number(f / g * 100).toFixed(2),
        xe = Number(g - f).toFixed(2);
      0 == Ee && Fe >= 5.42 ? ge = k ? "Device unauthorized" : "设备未授权" : 0 == ve && Fe >= 5.42 ? ge = k ? "The device is locked" : "设备已锁定" : 60 == h ? ge = k ? "Simulate high voltage anomaly" : "模拟电池升压异常" : 0 == l ? ge = 0 == $ ? k ? "Communication Abnormality" : "CAN通讯异常" : 39 == $ ? k ? "Abnormal Insulation Test" : "绝缘测试未通过" : $ < 6 ? k ? "Handshake message failed" : "握手信息未通过" : $ < 9 ? k ? "Vehicle information not pass" : "车辆信息未通过" : 16 == $ ? k ? "Charging station not ready" : "电压检测未通过" : k ? "Other abnormal interruptions" : "其它异常中止" : 50 == h ? ge = k ? "Stop Charging" : "中 止 充 电" : 51 == h ? ge = k ? "Charging Error" : "充 电 错 误" : 52 == h ? ge = k ? "Seting Handshake Information" : "配置握手信息" : 53 == h ? ge = k ? "Seting Charging Information" : "配置充电信息" : 54 == h ? ge = et >= Ft && et <= ht ? k ? "Waiting Output Set Voltage" : "等待输出设定电压" : k ? "Set Voltage Out Of Range" : "设置电压超范围" : 55 == h ? ge = k ? "Ready For Use" : "已准备就绪" : 56 == h ? ge = k ? "Charging" : "正在充电中" : 57 == h ? ge = k ? "Charging Completed" : "充电完成" : 58 == h ? ge = k ? "Overtemperature shutdown" : "超温关机(" + me + ")" : 59 == h ? ge = k ? "Insulation testing" : "绝缘测试" : 4 == h ? ge = k ? "Charger Shutdown" : "充电器已关机" : 43 == h ? ge = k ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == h ? ge = k ? "Over Temperature Shutdown" : "超温保护关机" : c <= 10 ? ge = k ? "Charger Output Abnormality" : "充电器输出异常" : 0 == h ? ge = k ? "Waiting For Battery Connection" : "等待接入电池" : 1 == h ? ge = k ? "Charging" : "正在充电中" : 2 == h ? ge = k ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == h ? ge = k ? "Precharging" : "正在预充" : 40 == h ? ge = k ? "Appointment Waiting" : "预约等待中" : 3 == h && (ge = k ? "Charging Completed" : "充电完成");
      var Ne = .65 * wx.getWindowInfo().windowWidth,
        Me = Math.max(15, Math.min(30, Ne / (k ? ge.length : 1.8 * ge.length) * 1.5));
      n.setData({
        Ah: A,
        Wh: E,
        AH: v,
        WH: U,
        SWT: w,
        SMT: I,
        IV: S,
        IA: d,
        IW: g,
        IT: B,
        ST0: T,
        ST1: D,
        ST2: m,
        EEI: g ? Oe : "0.00",
        EES: g ? xe : "0.00",
        YS: dn(De),
        STR: ge,
        NFS: C,
        OL: l,
        OV: c,
        OA: u,
        OW: f,
        OT: F,
        FSize: Me,
        KT1: j,
        Ti: dn(b),
        TI: dn(O),
        NSD: dn(x),
        UPS: pe,
        EID: ae,
        ERL: oe,
        ELN: re,
        SOC: Number(N).toFixed(0),
        UPV: Number(Ge).toFixed(2)
      })
    } else if (e.startsWith("01")) {
      c = Gn(e, 2), u = Gn(e, 10), f = Gn(e, 18), F = Gn(e, 26), h = An(e, 34), C = An(e, 36), l = An(e, 38), 60 == h ? ge = k ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == l ? ge = k ? "Communication Abnormality" : "CAN通讯异常" : 50 == h ? ge = k ? "Stop Charging" : "中 止 充 电" : 51 == h ? ge = k ? "Charging Error" : "充 电 错 误" : 52 == h ? ge = k ? "Seting Handshake Information" : "配置握手信息" : 53 == h ? ge = k ? "Seting Charging Information" : "配置充电信息" : 54 == h ? ge = k ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == h ? ge = k ? "Ready For Use" : "已准备就绪" : 56 == h ? ge = k ? "Charging" : "正在充电中" : 57 == h ? ge = k ? "Charging Completed" : "充电完成" : 58 == h ? ge = k ? "Overtemperature shutdown" : "超温关机(" + me + ")" : 59 == h ? ge = k ? "Insulation testing" : "绝缘测试" : 0 == c ? ge = k ? "Charger Output Abnormality" : "充电器输出异常" : 4 == h ? ge = k ? "Charger Shutdown" : "充电器已关机" : 0 == h ? ge = k ? "Waiting For Battery Connection" : "等待接入电池" : 1 == h ? ge = k ? "Charging" : "正在充电中" : 2 == h ? ge = k ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == h ? ge = k ? "Precharging" : "正在预充" : 40 == h ? ge = k ? "Appointment Waiting" : "预约等待中" : 3 == h ? ge = k ? "Charging Completed" : "充电完成" : 43 == h ? ge = k ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == h && (ge = k ? "Over Temperature Shutdown" : "超温保护关机");
      var Pe = .65 * wx.getWindowInfo().windowWidth;
      Me = Math.max(15, Math.min(30, Pe / (k ? ge.length : 1.8 * ge.length) * 1.5));
      n.setData({
        STR: ge,
        NFS: C,
        OL: l,
        OV: c,
        OA: u,
        OW: f,
        OT: F,
        FSize: Me
      })
    } else if (e.startsWith("02")) {
      S = Gn(e, 2), d = Gn(e, 10), g = Gn(e, 18), B = Gn(e, 26), T = An(e, 34), D = An(e, 36), m = An(e, 38);
      var Ve = Number(f / g * 100).toFixed(2),
        We = Number(g - f).toFixed(2);
      n.setData({
        IV: S,
        IA: d,
        IW: g,
        IT: B,
        ST0: T,
        ST1: D,
        ST2: m,
        EEI: g ? Ve : "0.00",
        EES: g ? We : "0.00"
      }), 2 == o && rn(T, D), 8 == o && sn(T, D, m)
    } else if (e.startsWith("03")) A = Gn(e, 2), E = Gn(e, 10), v = Gn(e, 18), U = Gn(e, 26), w = An(e, 34), I = An(e, 36), n.setData({
      Ah: A,
      Wh: E,
      AH: v,
      WH: U,
      SWT: w,
      SMT: I
    });
    else if (e.startsWith("04")) De = An(e, 34), De += An(e, 36) << 8, me = An(e, 38), n.setData({
      YS: dn(De),
      Ti: dn(Gn(e, 2)),
      TI: dn(Gn(e, 10)),
      NSD: dn(Gn(e, 18)),
      SOC: Number(Gn(e, 26)).toFixed(0)
    });
    else if (e.startsWith("10")) M = [Gn(e, 2, 1), Gn(e, 10, 1)], P = [Gn(e, 18, 1), Gn(e, 26, 1)], V = An(e, 34), W = An(e, 36), R = An(e, 38), 1 == V ? (nt = M[1], et = M[0]) : 2 == V && (nt = P[1], et = P[0]), 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = Y[1], et = Y[0]), n.setData({
      KS1: M,
      KS2: P,
      KSi: V,
      PON: W,
      KON: R,
      SV: et.toFixed(2),
      SA: nt.toFixed(2)
    });
    else if (e.startsWith("11")) y = [Gn(e, 2, 1), Gn(e, 10, 1)], Y = [Gn(e, 18, 1), Gn(e, 26, 1)], k = An(e, 36), H = An(e, 38), (0, ue.SetCFG)("UEN", k), 1 == V ? (nt = M[1], et = M[0]) : 2 == V && (nt = P[1], et = P[0]), 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = Y[1], et = Y[0]), n.setData({
      KS3: y,
      KS4: Y,
      CAN: o,
      UEN: k,
      KRC: H,
      SV: et.toFixed(2),
      SA: nt.toFixed(2),
      KSi: V
    });
    else if (e.startsWith("12")) z = Gn(e, 2), J = Gn(e, 10), _ = Gn(e, 18), q = Gn(e, 26), Q = An(e, 34), X = An(e, 36), tt = An(e, 38), n.setData({
      SV2: z,
      SA2: J,
      SMW: _,
      UMW: q,
      WTi: Q,
      ETi: X,
      Sleep: tt
    });
    else if (e.startsWith("13")) {
      it = Gn(e, 2), at = Gn(e, 10), ot = Gn(e, 18);
      Gn(e, 26);
      rt = An(e, 34), st = An(e, 36), ct = An(e, 38), n.setData({
        TMW: it,
        UMT: at,
        OMT: ot,
        LEDK0: rt,
        LEDK1: st,
        LEDK2: ct
      })
    } else if (e.startsWith("14")) ut = Gn(e, 2), ft = Gn(e, 10), Ft = Gn(e, 18), ht = Gn(e, 26), Ct = An(e, 34), lt = An(e, 36), St = .1 * An(e, 38), n.setData({
      LSA: ut,
      HSA: ft,
      LSV: Ft,
      HSV: ht,
      UFS: Ct,
      LFS: lt,
      AFS: St.toFixed(1)
    }), ut = Number(ut), Ft = Number(Ft), ft = Number(ft), ht = Number(ht);
    else if (e.startsWith("15")) gt = .01 * Gn(e, 2), Bt = .01 * Gn(e, 10), Tt = .01 * Gn(e, 18), Dt = .01 * Gn(e, 26), mt = An(e, 34), pt = An(e, 36), Gt = An(e, 38), n.setData({
      OVT: gt.toFixed(4),
      OAT: Bt.toFixed(4),
      OVD: Tt.toFixed(4),
      OAD: Dt.toFixed(4),
      UHQ: mt,
      GIF: pt,
      CKA2: Gt
    });
    else if (e.startsWith("16")) At = Gn(e, 2), Et = Gn(e, 10), vt = Gn(e, 18), Ut = Gn(e, 26), wt = An(e, 34), It = An(e, 36), bt = .01 * An(e, 38), n.setData({
      L2V: At,
      H2V: Et,
      USD: vt,
      NTC: wt,
      DDT: It,
      CLV: bt,
      SDU: Ut
    });
    else if (e.startsWith("17")) Ot = .01 * Gn(e, 2), xt = .01 * Gn(e, 10), Nt = Gn(e, 18), Mt = Gn(e, 26), Pt = An(e, 34), Vt = An(e, 36), Wt = An(e, 38), n.setData({
      O2D: xt.toFixed(4),
      O2T: Ot.toFixed(4),
      OVS: Nt,
      OAS: Mt,
      UEG: Pt,
      UCN: Vt,
      MFS: Wt
    });
    else if (e.startsWith("18")) Rt = Gn(e, 2), Lt = Gn(e, 10), Kt = Gn(e, 18), yt = Gn(e, 26), Yt = An(e, 34), kt = An(e, 36), Ht = An(e, 38), n.setData({
      YCA: Rt,
      YCV: Lt,
      DOL: Yt,
      DST: kt,
      LKS: Ht,
      TCH: yt,
      OST: Kt
    });
    else if (e.startsWith("19")) Zt = Gn(e, 2), zt = Gn(e, 10), Jt = An(e, 34), _t = An(e, 36), qt = An(e, 38), n.setData({
      UI: Jt,
      MMA: Zt,
      MMV: zt,
      RDY: _t,
      SGK: qt
    });
    else if (e.startsWith("20")) {
      var Re = Bn(e.substring(2, 40));
      n.setData({
        SSID: Re
      })
    } else if (e.startsWith("21")) n.setData({
      UPWD: Bn(e.substring(2, 40))
    });
    else if (e.startsWith("22")) {
      var Le = Bn(e.substring(2, 40)),
        ye = (0, ue.GetCFG)("WID", Le);
      Le != ye && cn("AB00" + gn(Le = unescape(encodeURIComponent(ye)))), n.setData({
        WID: ye
      })
    } else if (e.startsWith("23")) {
      var Ye = Bn(e.substring(2, 40)),
        He = (0, ue.GetCFG)("WPD", Ye);
      Ye != He && cn("AB01" + gn(Ye = unescape(encodeURIComponent(He)))), n.setData({
        WPD: He
      })
    } else if (e.startsWith("24")) n.setData({
      LKV: Bn(e.substring(2, 40))
    });
    else if (e.startsWith("25")) n.setData({
      VIN: Bn(e.substring(2, 40))
    });
    else if (e.startsWith("50")) on(An(e, 2), An(e, 4), An(e, 6), An(e, 8));
    else if (e.startsWith("51")) on(0, 0, 0, 0, An(e, 2), An(e, 4), An(e, 6), An(e, 8));
    else if (e.startsWith("40")) nn(An(e, 2), An(e, 4), An(e, 6), An(e, 8), An(e, 10), An(e, 12), 0);
    else if (e.startsWith("D1") || e.startsWith("D0")) {
      if (2 != le) return;
      var je = e.substring(2, 10),
        Ze = [e.substring(10, 12), e.substring(12, 14), e.substring(14, 16), e.substring(16, 18), e.substring(18, 20), e.substring(20, 22), e.substring(22, 24), e.substring(24, 26)],
        ze = parseInt(je, 16);
      if (405206102 == ze) 38, console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "电桩", "握手信息");
      else if (402781270 == ze) console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "电桩", "车辆识别" + Ze[0]);
      else if (485291094 == ze) "11" == Ze[0] ? console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "电桩", "同意收包" + Ze[6]) : "13" == Ze[0] && console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "电桩", "收包完成" + Ze[6]);
      else if (403174486 == ze) console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "电桩", "同步时间" + Ze[0] + Ze[1]);
      else if (403240022 == ze) {
        9;
        var Je = parseInt(Ze[1] + Ze[0], 16),
          qe = parseInt(Ze[3] + Ze[2], 16),
          Qe = parseInt(Ze[5] + Ze[4], 16),
          Xe = parseInt(Ze[7] + Ze[6], 16);
        console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "电桩", "充电范围:电压" + qe + "-" + Je + " 电流" + Xe + "-" + Qe)
      } else if (269153366 == ze) console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "电桩", "准备就绪" + Ze[0]);
      else if (403895382 == ze) {
        var tn = parseInt(Ze[1] + Ze[0], 16),
          en = parseInt(Ze[3] + Ze[2], 16),
          un = parseInt(Ze[5] + Ze[4], 16);
        console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "电桩", "输出信息:V" + tn + " A" + en + " T" + un)
      } else if (270201942 == ze) 26, console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "电桩", "中止充电");
      else if (136311894 == ze) 31, console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "电桩", "充电器错");
      else if (405231348 == ze) {
        var hn = parseInt(Ze[1] + Ze[0], 16);
        console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "取电器", "绝缘信息:" + hn)
      } else if (269047540 == ze) console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "取电器", "电池就绪:" + Ze[0]);
      else if (403724020 == ze) {
        var ln = .1 * parseInt(Ze[1] + Ze[0], 16),
          Sn = .1 * parseInt(Ze[3] + Ze[2], 16);
        console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "取电器", "需求信息:V" + ln + " A" + Sn)
      } else if (485250804 == ze) console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "取电器", "请求多包:" + Ze[6]);
      else if (485185268 == ze) console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "取电器", "多包数据");
      else if (403920628 == ze) console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], "取电器", "车辆状态");
      else {
        var Tn = 244 == (255 & ze) ? "取电器" : "电桩";
        console.log(je, Ze[0], Ze[1], Ze[2], Ze[3], Ze[4], Ze[5], Ze[6], Ze[7], Tn, "未知")
      }
    }
  },
  onLoad: function (i) {
    n = this, de = 0, Fn = 0, a = 0, o = 0, Be = 0, pe = 0, Ge = 0, ie = 0, Xe[0] = 1, Xe[1] = 1, Xe[2] = 1, Xe[3] = 1, Xe[4] = 1, Xe[5] = 1, Xe[6] = 1, Xe[7] = 1, Ce = Number(i.Test) || 0, he = Number(i.CEV) || 0, Be = Number(i.ODM) || 0, He();
    var r = wx.getAccountInfoSync();
    Se = "trial" == r.miniProgram.envVersion ? 1 : "develop" == r.miniProgram.envVersion ? 2 : 0, Le = 0;
    var s = wx.getDeviceInfo();
    console.log("SYSINF", s.abi, s.benchmarkLevel, s.brand, s.model, s.platform, s.system), (0, ue.GetGIF)(1).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var c = RegExp.$2;
    (0, ue.GetGIF)(2).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var u = RegExp.$2;
    (0, ue.GetGIF)(3).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var f = RegExp.$2;
    (0, ue.GetGIF)(4).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var F = RegExp.$2;
    (0, ue.GetGIF)(5).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var h = RegExp.$2;
    Ve[5] = (0, ue.GetCFG)("BGP5", "/img/bc1.gif"), Ve[1] = (0, ue.GetCFG)("BGP1", "https://dingyue.ws.126.net/2022/0808/701db340g00rg9pym02h5d200cs00leg00it00vh.gif"), Ve[2] = (0, ue.GetCFG)("BGP2", "https://img2.baidu.com/it/u=2215745416,4118415336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422"), Ve[3] = (0, ue.GetCFG)("BGP3", "https://c-ssl.dtstatic.com/uploads/item/201912/08/20191208175320_skjmi.thumb.1000_0.jpg"), Ve[4] = (0, ue.GetCFG)("BGP4", "https://wx4.sinaimg.cn/mw690/9f2299eegy1hqwec2a3ncj21kw2dcx6p.jpg"), k = (0, ue.GetCFG)("UEN"), le = (0, ue.GetCFG)("DEBUG"), We = (0, ue.GetCFG)("BGI", 0), Re = (0, ue.GetCFG)("BGT", "80"), t = (0, ue.GetCFG)("WID", "config"), e = (0, ue.GetCFG)("WPD", "88888888"), n.setData({
      WID: t,
      WPD: e
    });
    var C = (0, ue.GetCFG)("ShowM");
    n.setData({
      GIF1: "data:image/gif;base64," + c,
      GIF2: "data:image/gif;base64," + u,
      GIF3: "data:image/gif;base64," + f,
      GIF4: "data:image/gif;base64," + F,
      GIF5: "data:image/gif;base64," + h,
      UEN: k,
      ShowM: C,
      RollV: "5.45",
      TestV: "5.49(抢先版)",
      RoCEV: "5.45",
      UPDate: "5.48",
      APP: "1.34",
      GM: Se,
      ADD: Le,
      CAN: Fe,
      CEV: he,
      MUS: ie,
      BGI: We,
      BGT: parseInt(Re, 16),
      BGC: "#000000" + Re,
      ODM: Be,
      BGP: Ve[We],
      BGP1: Ve[1],
      BGP2: Ve[2],
      BGP3: Ve[3],
      BGP4: Ve[4],
      BGP5: Ve[5]
    }), console.log(Ve[We]), Ce && (Ye[0] = "1", Ye[1] = "2", Ye[2] = "3", Ye[3] = "4", he ? this.MSG("", "EEA47210A4AE300E0" + 549..toString(16) + "43786A64777800000000") : this.MSG("", "EEA47210A4AE30010" + 549..toString(16) + "323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000021340000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), Te || (Te = 1, fe.onReconnected((function () {
      n.AutoLogin()
    })), fe.onBLEConnectionStateChange((function () {
      a || (a = 1, _e("蓝牙信号丢失", "Bluetooth Disconnected", "通常是关机或信号弱或干扰大导致", "Blue abnormal interruption is usually caused by shutdown, weak signal, or significant signal interference", "我知道了", "Yes I Kown", (function (t) {
        n.navigateBack({
          delta: 0
        })
      }))), n.navigateBack({
        delta: 0
      })
    })), fe.onBLECharacteristicValueChange1(this.MSG)), n.AutoLogin()
  },
  AutoLogin: function () {
    de = 0, Fn = 0, a = 0, o = 0, Be = 0, pe = 0, Ge = 0, de = 3, cn("A0" + gn("0000")), cn("EE"), setTimeout((function () {
      3 == de && (de = 0, cn("A0" + gn((0, ue.GetCFG)(G, "0000"))), console.log("Re login:1")), "0" == o && cn("EE")
    }), 1500), setTimeout((function () {
      3 == de && (de = 0, cn("A0" + gn((0, ue.GetCFG)(G, "0000"))), console.log("Re login:1")), "0" == o && cn("EE")
    }), 2500)
  },
  navigateBack: function (t) {
    Ke.navigateBack({
      delta: 0
    })
  },
  onUnload: function () {
    a = 1, fe.closeBLEConnection(), console.log("Unload")
  },
  onShow: function (t) {
    a = 0, wx.hideHomeButton()
  },
  onHide: function () {
    a = 1
  }
});