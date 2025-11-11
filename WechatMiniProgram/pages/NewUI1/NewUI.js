var t, e, n, i, a, o, r, s, c, u, f, F, h, C, S, l, d, g, B, T, D, m, p, G, A, E, U, v, w, I, b, O, x, N, M, P, V, W, R, L, K, y, H, Y, $, k, j, Z, z, J, _, X, q, Q, tt, et, nt, it, at, ot, rt, st, ct, ut, ft, Ft, ht, Ct, St, lt, dt, gt, Bt, Tt, Dt, mt, pt, Gt, At, Et, Ut, vt, wt, It, bt, Ot, xt, Nt, Mt, Pt, Vt, Wt, Rt, Lt, Kt, yt, Ht, Yt, $t, kt, jt, Zt, zt, Jt, _t, Xt, qt, Qt, te, ee, ne, ie, ae, oe, re, se, ce, ue = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  fe = require("../../@babel/runtime/helpers/asyncToGenerator"),
  Fe = require("../../A4E096D79E166AAFC286FED0C77AF4C6.js"),
  he = require("../../C80AA4029E166AAFAE6CCC05648AF4C6.js"),
  Ce = 1,
  Se = 0,
  le = 0,
  de = 0,
  ge = 0,
  Be = 0,
  Te = "设备连接成功",
  De = 0,
  me = 0,
  pe = 0,
  Ge = 30,
  Ae = 0,
  Ee = 0,
  Ue = 0,
  ve = 0,
  we = 0,
  Ie = 0,
  be = 1,
  Oe = 126,
  xe = "欢迎使用",
  Ne = "1,27,30,欢迎",
  Me = "1,57,30,使用",
  Pe = 0,
  Ve = "ff",
  We = "ff",
  Re = "ff",
  Le = ["/img/bc1.gif", "", "", "", ""],
  Ke = 0,
  ye = "80",
  He = 0,
  Ye = wx,
  $e = "#ffffff",
  ke = ["1", "2", "3", "4"],
  je = 0;

function Ze() {
  return 0 == je && 0 == (je = (0, Fe.GetCFG)("RSID")) && (je = function () {
    for (var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", e = "", n = 0; n < 12; n++) {
      var i = Math.floor(Math.random() * t.length);
      e += t[i]
    }
    return e
  }(), (0, Fe.SetCFG)("RSID", je)), je
}

function ze() {
  var t = new Date;
  Cn("FD48" + pn(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()))
}

function Je(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
  Ye.showModal({
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

function _e(t, e, n, i) {
  var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ye.showModal({
    title: Y ? e : t,
    editable: true,
    placeholderText: (Y ? "Range:" : "范围:") + n + "-" + i,
    confirmText: Y ? "YES" : "确定",
    cancelText: Y ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = parseFloat(t.content);
        if ((e > Number(i) || e < Number(n) || !isFinite(e)) && 2 != ge) return void(0, Fe.Toast)(Y ? "Beyond the set range!" : "超出设置范围!");
        a(e)
      }
    }
  })
}

function Xe(t, e, n, i) {
  var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ye.showModal({
    title: Y ? e : t,
    editable: true,
    placeholderText: Y ? i : n,
    confirmText: Y ? "YES" : "确定",
    cancelText: Y ? "NO" : "取消",
    success: function (t) {
      if (t.confirm) {
        var e = t.content.trim();
        if ("" == e) return void(0, Fe.Toast)(Y ? "Input Cannot Be Empty!" : "输入不能为空!");
        a(e)
      }
    }
  })
}

function qe(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {};
  Ye.showModal({
    title: Y ? e : t,
    content: Y ? i : n,
    confirmText: Y ? "YES" : "确定",
    cancelText: Y ? "NO" : "取消",
    success: function (t) {
      t.confirm && a(t)
    }
  })
}

function Qe(t, e, n, i, a, o) {
  var r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : function () {};
  Ye.showModal({
    title: Y ? e : t,
    content: Y ? i : n,
    confirmText: Y ? o : a,
    showCancel: false,
    success: function (t) {
      r(t)
    }
  })
}
var tn = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "温度 异常", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"],
  en = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  nn = [1, 1, 1, 1, 1, 1, 1, 1];

function an(t) {
  for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, n = 0, i = 0; i < 12; i++)
    if (tn[i] == t) {
      en[i] = e, n = 1;
      break
    } if (!n && e)
    for (var a = 1; a < 11; a++)
      if (6 != a && 0 == en[a]) {
        tn[a] = t, en[a] = e;
        break
      }
}

function on() {
  var t = [tn[0].split(" "), tn[1].split(" "), tn[2].split(" "), tn[3].split(" "), tn[4].split(" "), tn[5].split(" "), tn[6].split(" "), tn[7].split(" "), tn[8].split(" "), tn[9].split(" "), tn[10].split(" "), tn[11].split(" ")];
  n.setData({
    E1S: en[0],
    E1A: t[0][0],
    E1B: t[0][1],
    E2S: en[1],
    E2A: t[1][0],
    E2B: t[1][1],
    E3S: en[2],
    E3A: t[2][0],
    E3B: t[2][1],
    E4S: en[3],
    E4A: t[3][0],
    E4B: t[3][1],
    E5S: en[4],
    E5A: t[4][0],
    E5B: t[4][1],
    E6S: en[5],
    E6A: t[5][0],
    E6B: t[5][1],
    E7S: en[6],
    E7A: t[6][0],
    E7B: t[6][1],
    E8S: en[7],
    E8A: t[7][0],
    E8B: t[7][1],
    E9S: en[8],
    E9A: t[8][0],
    E9B: t[8][1],
    EAS: en[9],
    EAA: t[9][0],
    EAB: t[9][1],
    EBS: en[10],
    EBA: t[10][0],
    EBB: t[10][1],
    ECS: en[11],
    ECA: t[11][0],
    ECB: t[11][1]
  })
}

function rn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  nn[0] == t && nn[1] == e && nn[2] == n && nn[3] == i && nn[4] == a && nn[5] == o && nn[6] == r || (en = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], nn[0] = t, nn[1] = e, nn[2] = n, nn[3] = i, nn[4] = a, nn[5] = o, nn[6] = r, tn = ["模块 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "模块 故障", "输出 过流", "输出 欠压", "输出 过压", "输出 短路", "模块 关机"], 128 & t && an("测试 模式"), 64 & t && an("负载 震荡"), 32 & t && an("输出 继电器"), 16 & t && an("放电 电路"), 8 & t && an("继电器 电路"), 4 & t && an("短路 锁死"), 2 & t && an("硬件 地址"), 1 & t && an("放电 电路"), 128 & e && an("更换 地址"), 64 & e && an("地址 冲突"), 32 & e && an("均流 屏蔽"), 16 & e && an("通讯 异常"), 8 & e && an("电容 电压"), 4 & e && an("输出 过压"), 2 & e && an("输出 模式"), 1 & e && an("插座 异常"), 128 & n && an("母线 电压"), 64 & n && an("母线 平衡"), 32 & n && an("输入 停电"), 16 & n && an("恒流 状态"), 8 & n && an("输出 短路"), 4 & n && an("内部 通讯"), 2 & n && an("效率 寻优"), 1 & n && an("均流 异常"), 128 & i && an("PFC 故障"), 64 & i && an("输入 过压"), 32 & i && an("ID 重复"), 16 & i && an("严重 均流"), 8 & i && an("交流 缺相"), 4 & i && an("三项 平衡"), 2 & i && an("输入 欠压"), 1 & i && an("顺序 启机"), 128 & a && an("通讯 质量"), 64 & a && an("自动 模式"), 32 & a && an("地址 重排"), 16 & a && an("内部 过温"), 2 & a && an("模块 关机"), 1 & a && an("低温 保护"), 128 & o && an("输出 欠压"), 64 & o && an("输出 过流"), 32 & o && an("存储 芯片"), 16 & o && an("风机 故障"), 8 & o && an("模块 保护"), 4 & o && an("模块 故障"), 2 & o && an("超温 保护"), 1 & o && an("过压 锁死"), on())
}

function sn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
  console.log("ZX48XX_Err", t, e, n, i, a, o, r), nn[0] == t && nn[1] == e && nn[2] == n && nn[3] == i && nn[4] == a && nn[5] == o && nn[6] == r || (en = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], nn[0] = t, nn[1] = e, nn[2] = n, nn[3] = i, nn[4] = a, nn[5] = o, nn[6] = r, tn = ["超温 保护", "风机 异常", "输入 欠压", "输入 过压", "输入 停电", "内部 过温", "恒流 状态", "输出 过流", "输出 欠压", "输出 过压", "输出 过载", "模块 关机"], 128 & t && an("输出 保险"), 64 & t && an("内部 过温"), 32 & t && an("输出 过流"), 16 & t && an("输出 高关"), 8 & t && an("输入 低关"), 4 & t && an("输入 高关"), 2 & t && an("过温 关机"), 1 & t && an("风机 异常"), 128 & e && an("PFC 过流"), 64 & e && an("原边 过流"), 32 & e && an("内部 通讯"), 16 & e && an("EEP ROM"), 8 & e && an("PFC 欠压"), 4 & e && an("PFC 过压"), 1 & e && an("均流 异常"), 32 & n && an("输出 过载"), 16 & n && an("PFC 故障"), 8 & n && an("输出 欠压"), 4 & n && an("输入 频率"), 2 & n && an("输入 熔断"), 1 & n && an("启动 异常"), 128 & i && an("DUS4 欠压"), 64 & i && an("BUS3 欠压"), 32 & i && an("BUS2 欠压"), 16 & i && an("BUS1 欠压"), 8 & i && an("启动 电阻"), 4 & i && an("机外 过温"), 2 & i && an("匹配 异常"), 128 & a && an("输入 停电"), 64 & a && an("输入 欠压"), 32 & a && an("输入 过压"), 16 & a && an("BUS 平衡"), 8 & a && an("BUS4 过压"), 4 & a && an("BUS3 过压"), 2 & a && an("BUS2 过压"), 1 & a && an("BUS1 过压"), 64 & o && an("模块 关机"), 32 & o && an("模块 休眠"), 8 & o && an("输入 功率"), 4 & o && an("超温 功率"), 2 & o && an("恒流 状态"), 1 & o && an("输出 功率"), 128 & r && an("启动 未接"), 64 & r && 2 == ge && an("风速 异常"), 32 & r && an("插座 过温"), 16 & r && an("输入 反接"), 8 & r && an("机内 过温"), 4 & r && an("输出 过流"), 2 & r && an("输出 欠压"), 1 & r && an("输出 过压"), on())
}

function cn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
    r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
    s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
  nn[0] == t && nn[1] == e && nn[2] == n && nn[3] == i && nn[4] == a && nn[5] == o && nn[6] == r && nn[7] == s || (en = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], nn[0] = t, nn[1] = e, nn[2] = n, nn[3] = i, nn[4] = a, nn[5] = o, nn[6] = r, nn[7] = s, tn = ["正常 中止", "电桩 温度", "枪头 异常", "内部 过温", "充电 异常", "电桩 急停", "其他 异常", "自检 异常", "预充 异常", "电流 异常", "电压 异常", "参数 异常"], 3 & t ? an("正常 中止") : t >> 2 & 3 ? an("人工 中止") : t >> 4 & 3 ? an("故障 中止") : t >> 6 & 3 && an("车辆 中止"), 3 & e ? an("电桩 温度") : e >> 2 & 3 ? an("枪头 异常") : e >> 4 & 3 ? an("内部 过温") : e >> 6 & 3 && an("充电 异常"), 3 & n ? an("电桩 急停") : n >> 2 & 3 ? an("其他 异常") : n >> 4 & 3 ? an("自检 异常") : n >> 6 & 3 && an("预充 异常"), 3 & i ? an("电流 异常") : i >> 2 & 3 ? an("电压 异常") : i >> 4 & 3 && an("参数 异常"), 3 & a && an("BRM 超时"), 3 & o && an("BCP 超时"), o >> 2 & 3 && an("BRO 超时"), 3 & r && an("BCS 超时"), r >> 2 & 3 && an("BCL 超时"), r >> 4 & 3 && an("BST 超时"), 3 & s && an("BSD 超时"), s >> 2 & 3 && an("BSM 超时"), s >> 4 & 3 && an("其他 超时"), on())
}

function un() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  nn[0] == t && nn[1] == e && nn[2] == n || (en = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], nn[0] = t, nn[1] = e, nn[2] = n, tn = ["输入 过压", "输出 过压", "恒压 状态", "过热 保护", "风机 故障", "模块 关机", "输入 欠压", "输出 欠压", "恒流 状态", "过流 保护", "模块 故障", "设置 关机"], 128 & t && an("输出 欠压"), 64 & t && an("输出 过压"), 32 & t && an("输入 欠压"), 16 & t && an("输入 过压"), 8 & t && an("风机 故障"), 4 & t && an("恒流 状态"), 2 & t && an("模块 故障"), 1 & t && an("模块 关机"), 0 == t && c > 20 && an("恒压 状态"), 4 & e && an("设置 关机"), 2 & e && an("过热 保护"), 1 & e && an("过流 保护"), on())
}

function fn() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  nn[0] == t && nn[1] == e && nn[2] == n || (en = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], nn[0] = t, nn[1] = e, nn[2] = n, tn = ["输入 过压", "输出 过压", "功率 限制", "过热 保护", "风机 故障", "模块 关机", "输入 欠压", "输出 欠压", "恒流 状态", "过流 保护", "模块 故障", "设置 关机"], 32 & t && an("放电 异常"), 16 & t && an("模块 休眠"), 8 & t && an("输入 异常"), 4 & t && an("内部 通讯"), 1 & t && an("输出 短路"), 128 & e && an("通讯 异常"), 64 & e && an("缓启 打开"), 32 & e && an("输出 过压"), 16 & e && an("过温 告警"), 8 & e && an("风机 故障"), 4 & e && an("模块 保护"), 2 & e && an("模块 故障"), 1 & e && an("模块 关机"), 128 & n && an("PFC 关机"), 64 & n && an("输入 过压"), 32 & n && an("输入 欠压"), 16 & n && an("三相 平衡"), 8 & n && an("三相 缺相"), 4 & n && an("均流 异常"), 2 & n && an("ID 重复"), 1 & n && an("恒流 状态"), on())
}
var Fn = new Array,
  hn = 0;

function Cn(t) {
  return Sn.apply(this, arguments)
}

function Sn() {
  return (Sn = fe(ue().mark((function t(e) {
    return ue().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          if (1 == de && console.log("Send", e), 0 == dn) {
            t.next = 4;
            break
          }
          return (0, Fe.Toast)(Y ? "There Are Unfinished Sending Tasks" : "有发送任务未完成"), t.abrupt("return");
        case 4:
          Fn.push(e), 0 == hn && (hn = 1, setInterval((function () {
            Fn.length > 0 && (he.easySendData1(Fn[0], true), Fn.shift())
          }), 100));
        case 6:
        case "end":
          return t.stop()
      }
    }), t)
  })))).apply(this, arguments)
}
var ln = [""],
  dn = 0;

function gn(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  0 == dn ? Ye.showModal({
    title: Y ? "Confirm Whether To Send" : "确认是否发送",
    editable: false,
    confirmText: Y ? "YES" : "确定",
    cancelText: Y ? "NO" : "取消",
    success: function (i) {
      if (i.confirm) {
        t.match(/DataStart=([^{]+){(.+)}(DataEnd)/), dn = 0, (ln = [])[0] = "F1" + (n ? RegExp.$1 : pn(RegExp.$1));
        for (var a = e ? RegExp.$2 : Tn(RegExp.$2), o = 0; o < a.length; o += 240) dn++, ln[dn] = "F2" + a.slice(o, o + 240);
        ln[ln.length] = "F3", dn = 0, Bn()
      }
    }
  }) : (0, Fe.Toast)(Y ? "There Are Unfinished Sending Tasks" : "有发送任务未完成")
}

function Bn(t) {
  var e = ln[dn];
  he.easySendData1(e, true), (0, Fe.Toast)((Y ? "Sending:" : "发送进度:") + (dn / ln.length * 100).toFixed(2) + "%"), dn++
}

function Tn(t) {
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

function Dn(t) {
  return t.match(/#(..)(..)(..)/), ((parseInt(RegExp.$1, 16) >> 3 << 11) + (parseInt(RegExp.$2, 16) >> 2 << 5) + (parseInt(RegExp.$3, 16) >> 3)).toString(16).padStart(4, "0")
}

function mn(t) {
  var e = Math.floor(t / 3600),
    n = Math.floor(t % 3600 / 60),
    i = Math.floor(t % 60);
  return String(e).padStart(2, "0") + ":" + String(n).padStart(2, "0") + ":" + String(i).padStart(2, "0")
}

function pn(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  t = String(t);
  for (var n = "", i = 0; i < t.length; i++) n += t.charCodeAt(i).toString(16).padStart(2, "0");
  return e && (n = n.padEnd(2 * e, "0")), n
}

function Gn(t) {
  for (var e = "", n = 0, i = "", a = 0; a < t.length / 2; a++) {
    var o = t.substr(2 * a, 2),
      r = parseInt(o, 16);
    if (0 == r) break;
    n && r ? (i += "%" + o, (n -= 1) || (e += decodeURIComponent(i), i = "")) : r >= 224 & r <= 239 ? (i += "%" + o, n = 2) : r && (e += String.fromCharCode(r))
  }
  return e
}

function An(t) {
  return Math.round(100 * t).toString(16).padStart(8, "0")
}

function En(t) {
  return Math.floor(t).toString(16).padStart(4, "0")
}

function Un(t) {
  return Math.floor(t).toString(16).padStart(2, "0")
}

function vn(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    a = t.getFloat32(e, true).toFixed(n);
  return i ? parseFloat(a) : a
}

function wn(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    i = (.01 * parseInt(t.substring(e, e + 8), 16)).toFixed(2);
  return n ? parseFloat(i) : i
}

function In(t, e) {
  return parseInt(t.substring(e, e + 2), 16)
}

function bn() {
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
    Cr0: $e,
    Cr1: "#00ff00",
    Cr2: "#00c8ff",
    Cr3: $e,
    Cr4: "#60ffc8",
    Cr5: $e,
    Cr6: "#ff9430",
    Cr7: "#f80ca0",
    Cr8: $e,
    Cr10: $e,
    Cr11: "#00ff00",
    Cr12: "#00c8ff",
    Cr13: "#ff9430",
    Cr14: "#60ffc8",
    Cr15: $e,
    Cr16: "#f80ca0",
    Cr17: $e,
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
  BTUSC: function (t) {
    this.setData({
      ShowBar: 33 != this.data.ShowBar ? 33 : -1
    })
  },
  uset: function (t) {
    (2 == Be || ge) && (Cn("F401"), Cn("FF01"), this.setData({
      Panel: ge ? 2 : 3,
      ShowBar: ge ? 0 : 25,
      LOGO: Y ? "Preview" : "预览"
    }))
  },
  SetSM: function (t) {
    0 == this.data.ShowM ? this.setData({
      ShowM: 1
    }) : (this.data.ShowM, this.setData({
      ShowM: 0
    })), (0, Fe.SetCFG)("ShowM", this.data.ShowM)
  },
  BTGPWD: function (t) {
    2 == ge ? (Cn("CA"), bn()) : Xe("设置系统密码", "Set System password", "最多18个字符", "Up to 18 characters", (function (t) {
      Cn("FA75" + pn(t))
    }))
  },
  BTRST: function (t) {
    qe("确认是否重置设置", "Confirm whether to restart control", "将会清除所有图片和设置", "All images and settings will be cleared", (function (t) {
      Cn("F60100"), (0, Fe.Toast)(Y ? "The device is restarting" : "重置已发送,设备正在重启!"), bn()
    }))
  },
  BTRST1: function (t) {
    Ce > 5.39 && qe("异常修复确认", "Abnormal repair confirmation", "异常修复会检测并重置掉某些设置并重启", "Exception repair will detect and reset certain settings", (function (t) {
      Cn("F60001"), (0, Fe.Toast)(Y ? "Repair completed, device is restarting!" : "修复完成,设备正在重启!"), bn()
    }))
  },
  BTRstart: function (t) {
    qe("确认是否重启设备", "Confirm whether to restart the device", "", "", (function (t) {
      Cn("F001"), (0, Fe.Toast)(Y ? "The device is restarting" : "设备正在重启!"), bn()
    }))
  },
  BTClean: function (t) {
    qe("确认是否清除数据", "Confirm whether to clear data", "将会清零累计安时瓦时和工作时间", "Accumulated ampere hours, watt hours, and working hours will be reset to zero", (function (t) {
      Cn("AA01"), (0, Fe.Toast)(Y ? "Data cleared to zero" : "数据已清零!"), bn()
    }))
  },
  BTBC: function (t) {
    Cn("F400"), this.setData({
      Panel: 1
    })
  },
  DST1: function (t) {
    Cn("AC00"), Cn("FF18")
  },
  DST2: function (t) {
    Cn("AC01"), Cn("FF18")
  },
  DST3: function (t) {
    Cn("AC02"), Cn("FF18")
  },
  DST4: function (t) {
    Cn("AC03"), Cn("FF18")
  },
  BTUJY1: function (t) {
    Cn("F9E3" + Un(1 - ee)), Cn("FF10")
  },
  BTUJY2: function (t) {
    _e("设置静音模式最大电流", "Set the maximum current for silent mode", "5", "255", (function (t) {
      Cn("F9E6" + Un(t)), Cn("FF10")
    }))
  },
  BTUJY3: function (t) {
    _e("设置静音模式最大风速", "Set the maximum wind speed for silent mode", "50", "200", (function (t) {
      Cn("F9E4" + Un(t)), Cn("FF10")
    }))
  },
  BTUJY4: function (t) {
    Cn("F9E5" + Un(1 - ie)), Cn("FF10")
  },
  BTUJY5: function (t) {
    ie && ee && n.BTUJY3()
  },
  BTER1D: function (t) {
    Cn("F4" + Un(re > 1 ? re - 1 : 1))
  },
  BTER1U: function (t) {
    Cn("F4" + Un(re < se ? re + 1 : se))
  },
  BTER1S: function (t) {
    _e("输入要查询的记录编号", "Input the record number to be queried", 1, se, (function (t) {
      Cn("F4" + Un(t))
    }))
  },
  BTER1C: function (t) {
    this.setData({
      ShowBar: 32
    }), se && qe("确认是否清除故障记录", "Confirm whether to clear the fault record", "", "", (function (t) {
      Cn("F40001"), (0, Fe.Toast)(Y ? "Records have been cleared!" : "记录已清除!")
    }))
  },
  BTUSC1: function (t) {
    Cn("F9E9" + Un(2 == Ie ? 1 : 2)), Cn("FF10")
  },
  BTKT1: function (t) {
    Cn("A4" + Un(1 - j))
  },
  BTSMW1: function (t) {
    this.setData({
      ShowBar: 18
    }), _e("设置输出最大功率", "Set maximum output power", "500", "50000", (function (t) {
      Cn("F84E" + An(t)), Cn("F84D" + An(t)), Cn("FF12")
    }))
  },
  IMGBT: function (t) {},
  BTLOGO0: function (t) {
    if ("预览" == n.data.LOGO || "Preview" == n.data.LOGO) Ye.showToast({
      content: "正在生成预览",
      title: "正在生成预览",
      type: "loading",
      icon: "loading",
      duration: 46e5,
      mask: true
    }), n.SetLOGO(Ne + "|" + Me, n);
    else if ("发送" == n.data.LOGO || "Send" == n.data.LOGO) {
      return gn(s, 1), void Cn("FAD2" + pn(unescape(encodeURIComponent(xe))))
    }
    n.setData({
      ShowBar: 20,
      LOGO: Y ? "Preview" : "预览"
    })
  },
  BTLOGO1: function (t) {
    Xe("设置第一行LOGO", "Set the first line logo", Ne, Ne, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Ne = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) Ne = "1,27,30," + RegExp.$1, Me = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Fe.Toast)(Y ? "Input format error" : "输入格式错误");
        Ne = "1,27,30," + RegExp.$1
      }
      n.setData({
        LOGO1: Ne,
        LOGO2: Me,
        LOGO: Y ? "Preview" : "预览"
      }), n.BTLOGO0()
    }))
  },
  BTLOGO2: function (t) {
    Xe("设置第二行LOGO", "Set second line logo", Me, Me, (function (t) {
      if (t.match(/(^\d{1,2}),(\d{1,2}),(\d{1,2}),(.{1,10})$/)) Me = t;
      else if (t.match(/^([\u4e00-\u9fa5]{2})([\u4e00-\u9fa5]{2})$/)) Ne = "1,27,30," + RegExp.$1, Me = "1,57,30," + RegExp.$2;
      else {
        if (!t.match(/^([\u4e00-\u9fa5]{2})$/)) return void(0, Fe.Toast)(Y ? "Input format error" : "输入格式错误");
        Me = "1,57,30," + RegExp.$1
      }
      n.setData({
        LOGO1: Ne,
        LOGO2: Me,
        LOGO: Y ? "Preview" : "预览"
      }), n.BTLOGO0()
    }))
  },
  BTLOGO3: function (t) {
    Cn("F9C0" + Un(1 - Wt)), Cn("FF17")
  },
  BTLOGO4: function (t) {
    Xe("设置简约模式文字", "Set the first line logo", "最多6个汉字或者12个英文", Ne, (function (t) {
      Cn("FAD2" + pn(t = unescape(encodeURIComponent(t)))), Cn("F7")
    }))
  },
  SetLOGO: function (t, e) {
    Ye.createSelectorQuery().select("#LOGO").fields({
      node: true,
      size: true
    }).exec((function (n) {
      var i = n[0].node,
        a = i.getContext("2d");
      i.width = 60, i.height = 60, a.fillStyle = "#000", a.scale(1, 1), a.fillRect(0, 0, 60, 60), a.fillStyle = "#fff";
      var o = t.split("|");
      xe = "";
      for (var r = 0; r < o.length; r += 1) {
        var c = o[r].split(",");
        xe += c[3];
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
      s += "}DataEnd", Ye.hideToast(), e.setData({
        LOGO: Y ? "Send" : "发送"
      })
    }))
  },
  BTNTC1: function (t) {
    qe("是否切温度采集点", "Confirm whether to switch temperature collection points", "无特殊情况请勿修改此值", "Under normal circumstances, there is no need to modify this value", (function (t) {
      Cn("F962" + Un(1 - wt)), Cn("FF16")
    }))
  },
  SetCAN: function (t, e, n) {
    qe("确认是否切换为" + t, "Switch to " + e, "将会清除所有设置", "All settings will be cleared", (function (t) {
      if (2 == ge) {
        for (var e = parseInt(G, 16), i = e.toString(), a = 0, o = 0; o < i.length; o++) a += i.charCodeAt(o);
        Cn("C8FF" + Math.floor(Math.floor(e / 611) * a).toString(16).slice(-6) + n)
      }
      Cn("FC53" + n + "01"), (0, Fe.Toast)(Y ? "The device is restarting" : "重置已发送,设备正在重启!"), bn()
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
    _e("设置关机屏幕亮度", "Set shutdown screen brightness", "0", "255", (function (t) {
      Cn("F968" + Un(t)), Cn("FF13")
    }))
  },
  BTLEDK1: function (t) {
    _e("设置开机屏幕亮度", "Set the brightness of the startup screen", "10", "255", (function (t) {
      Cn("F969" + Un(t)), Cn("FF13")
    }))
  },
  BTLEDKS1: function (t) {
    _e("设置息屏时间", "Set screen rest time", "0", "255", (function (t) {
      Cn("F96D" + Un(t)), Cn("FF12")
    }))
  },
  BTLEDKS2: function (t) {
    _e("设置息屏屏幕亮度", "Set the brightness of the breath screen", "0", "255", (function (t) {
      Cn("F96A" + Un(t)), Cn("FF13")
    }))
  },
  BTStart1: function (t) {
    _e("设置初始页面时间", "Set initial page time", "3", "15", (function (t) {
      Cn("F96B" + Un(t)), Cn("FF12")
    }))
  },
  BTStart2: function (t) {
    Cn("F96C" + Un(1 - Q)), Cn("FF12")
  },
  BTGIF1: function (t) {
    Cn("F96F" + Un(1 - pt)), Cn("FF15")
  },
  BT_GIF1: function (t) {
    gn((0, Fe.GetGIF)(1))
  },
  BT_GIF2: function (t) {
    gn((0, Fe.GetGIF)(2))
  },
  BT_GIF3: function (t) {
    gn((0, Fe.GetGIF)(3))
  },
  BT_GIF4: function (t) {
    gn((0, Fe.GetGIF)(4))
  },
  BT_GIF5: function (t) {
    gn((0, Fe.GetGIF)(5))
  },
  BTUI: function (t) {
    n.setData({
      CVer: Ce.toFixed(2),
      SCAN: o,
      ID: G,
      ACT: i
    }), Cn("F9C8" + Un(1 - Xt)), Cn("FF19")
  },
  Scr1: function (t) {
    be = 1, n.setData({
      Cr0: $e,
      Cr1: "#00ff00",
      Cr2: "#00c8ff",
      Cr3: $e,
      Cr4: "#60ffc8",
      Cr5: $e,
      Cr6: "#ff9430",
      Cr7: "#f80ca0",
      Cr8: $e,
      Cr10: $e,
      Cr11: "#00ff00",
      Cr12: "#00c8ff",
      Cr13: "#ff9430",
      Cr14: "#60ffc8",
      Cr15: $e,
      Cr16: "#f80ca0",
      Cr17: $e,
      Crs: be
    })
  },
  Scr2: function (t) {
    be = 2, n.setData({
      Cr0: $e,
      Cr1: $e,
      Cr2: $e,
      Cr3: $e,
      Cr4: $e,
      Cr5: $e,
      Cr6: $e,
      Cr7: $e,
      Cr8: $e,
      Cr10: $e,
      Cr11: $e,
      Cr12: $e,
      Cr13: $e,
      Cr14: $e,
      Cr15: $e,
      Cr16: $e,
      Cr17: $e,
      Crs: be
    })
  },
  Scr3: function (t) {
    be = 3, n.setData({
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
      Crs: be
    })
  },
  Scr4: function (t) {
    be = 0, n.setData({
      Cr0: (0, Fe.GetCFG)("Cr0", $e),
      Cr1: (0, Fe.GetCFG)("Cr1", "#00ff00"),
      Cr2: (0, Fe.GetCFG)("Cr2", "#00c8ff"),
      Cr3: (0, Fe.GetCFG)("Cr3", $e),
      Cr4: (0, Fe.GetCFG)("Cr4", "#60ffc8"),
      Cr5: (0, Fe.GetCFG)("Cr5", $e),
      Cr6: (0, Fe.GetCFG)("Cr6", "#ff9430"),
      Cr7: (0, Fe.GetCFG)("Cr7", "#f80ca0"),
      Cr8: (0, Fe.GetCFG)("Cr8", $e),
      Cr10: (0, Fe.GetCFG)("Cr10", $e),
      Cr11: (0, Fe.GetCFG)("Cr11", "#00ff00"),
      Cr12: (0, Fe.GetCFG)("Cr12", "#00c8ff"),
      Cr13: (0, Fe.GetCFG)("Cr13", "#ff9430"),
      Cr14: (0, Fe.GetCFG)("Cr14", "#60ffc8"),
      Cr15: (0, Fe.GetCFG)("Cr15", $e),
      Cr16: (0, Fe.GetCFG)("Cr16", "#f80ca0"),
      Cr17: (0, Fe.GetCFG)("Cr17", $e),
      Crs: be
    })
  },
  BTCr1: function (t) {
    0 == n.data.UI ? (Cn("F5280000000000" + Dn(this.data.Cr50)), Cn("F53000" + Dn(this.data.Cr0) + "0000f01c"), Cn("F53100" + Dn(this.data.Cr1) + "00209F26"), Cn("F53200" + Dn(this.data.Cr2) + "00479F26"), Cn("F53300" + Dn(this.data.Cr3) + "006e9F27"), Cn("F53400" + Dn(this.data.Cr4) + "00969F3f"), Cn("F53500" + Dn(this.data.Cr5) + "A3204d4d"), Cn("F53600" + Dn(this.data.Cr6) + "50d64f1A"), Cn("F53700" + Dn(this.data.Cr7) + "00d64f1A"), Cn("F53801" + Dn(this.data.Cr8) + "A3774d68")) : 1 == n.data.UI && (Cn("F52000" + Dn(this.data.Cr10) + "0000781c"), Cn("F52100" + Dn(this.data.Cr11) + "001cf02e"), Cn("F52200" + Dn(this.data.Cr12) + "004af02e"), Cn("F52300" + Dn(this.data.Cr13) + "0078f02e"), Cn("F52400" + Dn(this.data.Cr14) + "00a6f02e"), Cn("F52500" + Dn(this.data.Cr15) + "7800781c"), Cn("F52600" + Dn(this.data.Cr16) + "00d4781b"), Cn("F52701" + Dn(this.data.Cr17) + "78d4781b"))
  },
  CKA: function (t) {
    Pe = 50, this.CRSet(this.data.Cr50)
  },
  CK0: function (t) {
    Pe = 0, this.CRSet(this.data.Cr0)
  },
  CK1: function (t) {
    Pe = 1, this.CRSet(this.data.Cr1)
  },
  CK2: function (t) {
    Pe = 2, this.CRSet(this.data.Cr2)
  },
  CK3: function (t) {
    Pe = 3, this.CRSet(this.data.Cr3)
  },
  CK4: function (t) {
    Pe = 4, this.CRSet(this.data.Cr4)
  },
  CK5: function (t) {
    Pe = 5, this.CRSet(this.data.Cr5)
  },
  CK6: function (t) {
    Pe = 6, this.CRSet(this.data.Cr6)
  },
  CK7: function (t) {
    Pe = 7, this.CRSet(this.data.Cr7)
  },
  CK8: function (t) {
    Pe = 8, this.CRSet(this.data.Cr8)
  },
  CK10: function (t) {
    Pe = 10, this.CRSet(this.data.Cr10)
  },
  CK11: function (t) {
    Pe = 11, this.CRSet(this.data.Cr11)
  },
  CK12: function (t) {
    Pe = 12, this.CRSet(this.data.Cr12)
  },
  CK13: function (t) {
    Pe = 13, this.CRSet(this.data.Cr13)
  },
  CK14: function (t) {
    Pe = 14, this.CRSet(this.data.Cr14)
  },
  CK15: function (t) {
    Pe = 15, this.CRSet(this.data.Cr15)
  },
  CK16: function (t) {
    Pe = 16, this.CRSet(this.data.Cr16)
  },
  CK17: function (t) {
    Pe = 17, this.CRSet(this.data.Cr17)
  },
  CRSet: function (t) {
    t.match(/#(..)(..)(..)/), Ve = RegExp.$1, We = RegExp.$2, Re = RegExp.$3, this.setData({
      CR: parseInt(Ve, 16),
      CG: parseInt(We, 16),
      CB: parseInt(Re, 16)
    })
  },
  SetCr: function () {
    0 == n.data.UI && Pe >= 10 && 50 != Pe && (Pe = 0), 1 == n.data.UI && Pe < 10 && (Pe = 10), 0 == Pe ? n.setData({
      Cr0: "#" + Ve + We + Re
    }) : 1 == Pe ? n.setData({
      Cr1: "#" + Ve + We + Re
    }) : 2 == Pe ? n.setData({
      Cr2: "#" + Ve + We + Re
    }) : 3 == Pe ? n.setData({
      Cr3: "#" + Ve + We + Re
    }) : 4 == Pe ? n.setData({
      Cr4: "#" + Ve + We + Re
    }) : 5 == Pe ? n.setData({
      Cr5: "#" + Ve + We + Re
    }) : 6 == Pe ? n.setData({
      Cr6: "#" + Ve + We + Re
    }) : 7 == Pe ? n.setData({
      Cr7: "#" + Ve + We + Re
    }) : 8 == Pe ? n.setData({
      Cr8: "#" + Ve + We + Re
    }) : 10 == Pe ? n.setData({
      Cr10: "#" + Ve + We + Re
    }) : 11 == Pe ? n.setData({
      Cr11: "#" + Ve + We + Re
    }) : 12 == Pe ? n.setData({
      Cr12: "#" + Ve + We + Re
    }) : 13 == Pe ? n.setData({
      Cr13: "#" + Ve + We + Re
    }) : 14 == Pe ? n.setData({
      Cr14: "#" + Ve + We + Re
    }) : 15 == Pe ? n.setData({
      Cr15: "#" + Ve + We + Re
    }) : 16 == Pe ? n.setData({
      Cr16: "#" + Ve + We + Re
    }) : 17 == Pe ? n.setData({
      Cr17: "#" + Ve + We + Re
    }) : 50 == Pe && n.setData({
      Cr50: "#" + Ve + We + Re
    })
  },
  CSC: function (t) {
    0 == be && (0, Fe.SetCFG)("Cr" + Pe, "#" + Ve + We + Re)
  },
  CRC: function (t) {
    Ve = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CGC: function (t) {
    We = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CBC: function (t) {
    Re = t.detail.value.toString(16).padStart(2, "0"), this.SetCr()
  },
  CTC1: function (t) {
    ye = t.detail.value.toString(16).padStart(2, "0"), (0, Fe.SetCFG)("BGT", ye), n.setData({
      BGC: "#000000" + ye
    })
  },
  BTBGP10: function (t) {
    n.setData({
      BGP: Le[1],
      BGI: 1
    }), (0, Fe.SetCFG)("BGI", 1)
  },
  BTBGP1: function (t) {
    Xe("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Fe.SetCFG)("BGI", 1), (0, Fe.SetCFG)("BGP1", t), n.setData({
        BGP1: t,
        BGP: t,
        BGI: 1
      })
    }))
  },
  BTBGP20: function (t) {
    n.setData({
      BGP: Le[2],
      BGI: 2
    }), (0, Fe.SetCFG)("BGI", 2)
  },
  BTBGP2: function (t) {
    Xe("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Fe.SetCFG)("BGI", 2), (0, Fe.SetCFG)("BGP2", t), n.setData({
        BGP2: t,
        BGP: t,
        BGI: 2
      })
    }))
  },
  BTBGP30: function (t) {
    n.setData({
      BGP: Le[3],
      BGI: 3
    }), (0, Fe.SetCFG)("BGI", 3)
  },
  BTBGP3: function (t) {
    Xe("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Fe.SetCFG)("BGI", 3), (0, Fe.SetCFG)("BGP3", t), n.setData({
        BGP3: t,
        BGP: t,
        BGI: 3
      })
    }))
  },
  BTBGP40: function (t) {
    n.setData({
      BGP: Le[4],
      BGI: 4
    }), (0, Fe.SetCFG)("BGI", 4)
  },
  BTBGP4: function (t) {
    Xe("输入图片连接", "Display voltage compensation", "", "", (function (t) {
      (0, Fe.SetCFG)("BGI", 4), (0, Fe.SetCFG)("BGP4", t), n.setData({
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
            Le[5] = t.savedFilePath, n.setData({
              BGP: Le[5],
              BGI: 5
            }), (0, Fe.SetCFG)("BGI", 5), (0, Fe.SetCFG)("BGP5", Le[5])
          }
        })
      }
    })
  },
  BTCKA2: function (t) {
    Cn("F972" + Un(1 - Gt)), Cn("FF15")
  },
  BTEN1: function (t) {
    le && this.MSG("", "1100001BE4000005DC000020D0000005DC010" + (1 - Y) + "00"), (0, Fe.SetCFG)("UEN", 1 - Y), Cn("F970" + Un(1 - Y)), Cn("FF11")
  },
  BTBLE1: function (t) {
    Xe("设置蓝牙名称", "Set Bluetooth name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      Cn(t = (t = "FA73" + pn(t = unescape(encodeURIComponent(t)))).substring(0, 40)), Cn("FF20")
    }))
  },
  BTBLE2: function (t) {
    Xe("设置蓝牙密码", "Set Bluetooth password", "最多18个字符", "Up to 18 characters", (function (t) {
      Cn("FA74" + pn(t)), Cn("FF21")
    }))
  },
  BTVIN: function (t) {
    Xe("设置取电器VIN码", "Set VIN", "标准17位英文和数字", "Up to 17 characters", (function (t) {
      return (t = t.toUpperCase()).match(/^[A-HJ-NPR-Z0-9]{14}\d\d\d$/) ? (Cn("FAD3" + pn(t = unescape(encodeURIComponent(t)))), void Cn("FF25")) : void(0, Fe.Toast)(Y ? "Incorrect VIN input!" : "输入VIN不正确!")
    }))
  },
  BTTCH1: function (t) {
    Xe("设置触屏密码", "Set touch screen password", "仅限4-6个数字", "Only 4-6 digits", (function (t) {
      if ((t = String(t)).match(/^[0-9]{4,6}$/)) return Cn("FAD1" + pn(t)), void Cn("FF24");
      (0, Fe.Toast)(Y ? "input error" : "输入错误")
    }))
  },
  BTTCH2: function (t) {
    _e("设置触屏锁屏时间", "Set touch screen lock time", "5", "255", (function (t) {
      Cn("F9C7" + Un(t)), Cn("FF18")
    }))
  },
  BTDDV1: function (t) {
    0 != dt && qe("是否切换驱动ST7789 1.54", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      Cn("CD02")
    }))
  },
  BTDDV2: function (t) {
    1 != dt && qe("是否切换驱动JD9853 1.83(14P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      Cn("CD03")
    }))
  },
  BTDDV3: function (t) {
    2 != dt && qe("是否切换驱动JD9853 1.83(18P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      Cn("CD04")
    }))
  },
  BTDDV4: function (t) {
    3 != dt && qe("是否切换驱动ST7789 1.69(18P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      Cn("CD05")
    }))
  },
  BTDDV5: function (t) {
    4 != dt && qe("是否切换驱动ST7789 1.83(14P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      Cn("CD06")
    }))
  },
  BTDDV6: function (t) {
    5 != dt && qe("是否切换驱动ST7789 1.83(18P)", "Confirm switch the screen driver", "如果屏幕显示正常请勿修改!!!", "If the screen display is normal, please do not modify it!!!", (function (t) {
      Cn("CD07")
    }))
  },
  BTKEY1: function (t) {
    Cn("F967" + Un(1 - R)), Cn("FF10")
  },
  BTKEY2: function (t) {
    Cn("F966" + Un(1 - $)), Cn("FF11")
  },
  BTKEY3: function (t) {
    Cn("F9E8" + Un(1 - zt)), Cn("FF11")
  },
  BTDDT1: function (t) {
    Cn("F96E" + Un(It >= 3 ? 0 : It + 1)), Cn("FF16")
  },
  UPDate: function (n, i) {
    return Number(u) ? void(0, Fe.Toast)(Y ? "Upgrading is prohibited while charging" : "充电中禁止升级,升级需断开电池连接线.") : (Cn("A600"), Cn("FF10"), Cn("AB00" + pn(unescape(encodeURIComponent(t)))), Cn("AB01" + pn(unescape(encodeURIComponent(e)))), Cn(n + pn(i)), void(0, Fe.Toast)(Y ? "Upgrading, please pay attention to the screen display" : "已进入升级状态,请观察屏幕显示."))
  },
  BTLST: function (t) {
    this.setData({
      LST: 1 - this.data.LST
    })
  },
  BTUP6: function (t) {
    Xe("设置WIFI热点名称", "Set WIFI name", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Fe.SetCFG)("WID", t), Cn("AB00" + pn(t = unescape(encodeURIComponent(t)))), Cn("FF22")
    }))
  },
  BTUP7: function (t) {
    Xe("设置WIFI热点密码", "Set WIFI password", "最多6个汉字或18个字符", "Up to 18 characters", (function (t) {
      (0, Fe.SetCFG)("WPD", t), Cn("AB01" + pn(t = unescape(encodeURIComponent(t)))), Cn("FF23")
    }))
  },
  BTUP1: function (t) {
    if (!He)
      if (this.data.CVer >= this.data.UPDate) {
        if (De) return;
        qe("升级确认", "Confirm clearance date", "当前已经是最新版,确定是否重新升级固件", "", (function (t) {
          n.UPDate("A700000000", "NewUI")
        }))
      } else Ye.showModal({
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
    ge && qe("确认清除激活日期", "Confirm clearance date", "", "", (function (t) {
      Cn("FD48" + pn("Cxjdwx"))
    }))
  },
  BTUP8: function (t) {
    Ye.setClipboardData({
      data: "https://pan.baidu.com/s/1jBd_YuCspcfbpbW4U28xsw?pwd=8888"
    })
  },
  BTUP10: function (t) {
    Ye.setClipboardData({
      data: "https://pan.baidu.com/s/13F3LDHDZiUg2BGerHsMUMw?pwd=8888"
    })
  },
  BTUP2: function (t) {
    Ye.setClipboardData({
      data: "设备ID:" + G
    })
  },
  BTUP0: function (t) {
    Ye.showModal({
      title: Y ? "Firmware rollback" : "固件回退",
      editable: false,
      confirmText: Y ? "YES" : "确定",
      cancelText: Y ? "NO" : "取消",
      success: function (t) {
        t.confirm && (Se && n.UPDate("A700000000", "CEVRollBack"), Se || n.UPDate("A700000000", "CANRollBack"))
      }
    })
  },
  BTUP9: function (t) {
    Ye.showModal({
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
    qe("是否切换风速控制方式", "Confirm whether to switch the wind speed control mode", "如采用标配风机小板请勿修改此值", "If using the standard fan board, please do not modify this value", (function (t) {
      Cn("F9E2" + Un(1 - p)), Cn("FF")
    }))
  },
  BTUFS: function (t) {
    _e("设置温度加速值", "Set temperature acceleration value", "2", "20", (function (t) {
      Cn("F963" + Un(t)), Cn("FF14")
    }))
  },
  BTAFS: function (t) {
    _e("设置电流加速值", "Set current acceleration value", "0.1", "3.0", (function (t) {
      Cn("F964" + Un(10 * t)), Cn("FF14")
    }))
  },
  BTLFS: function (t) {
    _e("设置初始风速值", "Set initial wind speed value", "20", "200", (function (t) {
      Cn("F965" + Un(t)), Cn("FF14")
    }))
  },
  BTMFS: function (t) {
    _e("设置最大风速值", "Set Maximum wind speed value", "200", "255", (function (t) {
      Cn("F9C5" + Un(t)), Cn("FF14")
    }))
  },
  BTTMC: function (t) {
    _e("设置超温进入温度", "Set over temperature limit temperature", "40", "90", (function (t) {
      Cn("F84A" + An(t)), Cn("FF13")
    }))
  },
  BTTMC1: function (t) {
    Ce >= 5.46 ? _e("设置电流加减幅度", "Set the current step amplitude", "0.01", "1", (function (t) {
      Cn("F84B" + An(t)), Cn("FF13")
    })) : _e("设置超温退出温度", "Set the exit temperature for over temperature", "40", "90", (function (t) {
      Cn("F84B" + An(t)), Cn("FF13")
    }))
  },
  BTOST: function (t) {
    _e("设置超温关机温度", "Set the exit temperature for over temperature", "50", "120", (function (t) {
      Cn("F8F7" + An(t)), Cn("FF18")
    }))
  },
  BTTMW: function (t) {
    Ce >= 5.46 ? _e("电流最低值", "Minimum current value", "5", "50", (function (t) {
      Cn("F84C" + An(t)), Cn("FF13")
    })) : _e("设置超温限制功率", "Set over temperature limit power", "500", "4000", (function (t) {
      Cn("F84C" + An(t)), Cn("FF13")
    }))
  },
  BTMMV: function (t) {
    _e("设置最高电压限制", "Set maximum voltage limit", "100", "1000", (function (t) {
      Cn("F8FA" + An(t)), Cn("FF19"), Cn("FF14")
    }))
  },
  BTMMA: function (t) {
    _e("设置最高电流限制", "Set maximum current limit", "10", "400", (function (t) {
      Cn("F8F9" + An(t)), Cn("FF19"), Cn("FF14")
    }))
  },
  BTRDY: function (t) {
    _e("设置就绪电压范围", "Set the ready voltage range", "1", "20", (function (t) {
      Cn("F9CD" + Un(t)), Cn("FF19")
    }))
  },
  BTOVT0: function (t) {
    this.setData({
      ShowBar: 0
    }), u > 0 && u < 5 ? qe("检测到输出电流", "Detected output current", "如有负载请点取消后断开负载再开始校正,如无负载则为空载电流,点击确定将会设置为最小电流过滤(可在输出电流校正页面中设置).", "If there is a load detected in the output current, please click NO and disconnect the load before starting the calibration. If there is no load, Click YES will set it as the minimum current filter (which can be set on the output current calibration page)", (function (t) {
      Cn("F848" + An(Number(u) + .05)), Cn("FF16")
    })) : c < 10 || u > 0 ? (0, Fe.Toast)(Y ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Cn("C1"), Cn("FF"), _e("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / c).toFixed(4),
        n = Number(t / et).toFixed(4);
      Cn("C3" + An(100 * n) + An(100 * e)), 2 == o ? (Cn("F876" + An(20 * n)), Cn("F877" + An(100 * n))) : 1 == o ? (Cn("F876" + An(41 * n)), Cn("F877" + An(58.5 * n))) : 4 == o ? (Cn("F876" + An(41.2 * n)), Cn("F877" + An(59.3 * n))) : 16 == o ? (Cn("F876" + An(44 * n)), Cn("F877" + An(61 * n))) : 32 == o && (Cn("F876" + An(41.2 * n)), Cn("F877" + An(59.4 * n))), Cn("FF"), Cn("A80" + V + An(50 * n) + An(nt)), Cn("FF")
    })))
  },
  BTOVT1: function (t) {
    Se ? _e("升压采样补偿", "Boost voltage compensation", "0.1", "1", (function (t) {
      t > 999.99 ? t *= 1e-4 : t > 99.99 && (t *= .001), Cn("FB47" + An(100 * t)), Cn("FF")
    })) : _e("显示电压补偿", "Display voltage compensation", "0.1", "5", (function (t) {
      Cn("FB47" + An(100 * t)), Cn("FF")
    }))
  },
  BTOVTU: function (t) {
    Cn("FB47" + An(100 * (Number(gt) + 3e-4))), Cn("FF")
  },
  BTOVTD: function (t) {
    Cn("FB47" + An(100 * (Number(gt) - 3e-4))), Cn("FF")
  },
  BTOVD1: function (t) {
    Se ? _e("基础电压补偿", "Basic voltage compensation", "10", "40", (function (t) {
      Cn("FB46" + An(100 * t)), Cn("FF")
    })) : _e("设置电压补偿", "Set voltage compensation", "0.1", "5", (function (t) {
      Cn("FB46" + An(100 * t)), Cn("FF")
    }))
  },
  BTOVDU: function (t) {
    Cn("FB46" + An(100 * (Number(Tt) + 3e-4))), Cn("FF")
  },
  BTOVDD: function (t) {
    Cn("FB46" + An(100 * (Number(Tt) - 3e-4))), Cn("FF")
  },
  BTOVS: function (t) {
    Je(Y ? "Set voltage range" : "设置电压范围", (Y ? "Now:" : "当前范围:") + this.data.LSV + "-" + this.data.HSV, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Cn("F876" + An(Number(RegExp.$1))), Cn("F877" + An(Number(RegExp.$2))), Cn("FF")) : (0, Fe.Toast)(Y ? "Input format error" : "输入格式错误!")
    }))
  },
  BTOVS1: function (t) {
    _e("设置电压跳动缓冲", "Set voltage jump buffer", "0.00", "1.00", (function (t) {
      Cn("F8F3" + An(t)), Cn("FF")
    }))
  },
  BTOVT3: function (t) {
    c < 10 || u > 0 ? (0, Fe.Toast)(Y ? "Voltage correction must have an output voltage higher than 10V and an output current of 0A" : "电压校正必须要输出电压高于10V且输出电流为0A") : (Cn("C2"), Cn("FF"), _e("输入实际测量出的输出电压", "Input the actual measured output voltage", "10", "1000", (function (t) {
      var e = Number(t / c).toFixed(4);
      Cn("C4" + An(100 * Number(t / et).toFixed(4)) + An(100 * e)), Cn("FF")
    })))
  },
  BTOVT2: function (t) {
    _e("显示电压补偿二", "Display voltage compensation 2", "0.1", "5", (function (t) {
      Cn("FBF2" + An(100 * t)), Cn("FF")
    }))
  },
  BTO2TU: function (t) {
    Cn("FBF2" + An(100 * (Number(Nt) + 3e-4))), Cn("FF")
  },
  BTO2TD: function (t) {
    Cn("FBF2" + An(100 * (Number(Nt) - 3e-4))), Cn("FF")
  },
  BTOVD2: function (t) {
    _e("设置电压补偿二", "Set voltage compensation 2", "0.1", "5", (function (t) {
      Cn("FBF1" + An(100 * t)), Cn("FF")
    }))
  },
  BTO2DU: function (t) {
    Cn("FBF1" + An(100 * (Number(Mt) + 3e-4))), Cn("FF")
  },
  BTO2DD: function (t) {
    Cn("FBF1" + An(100 * (Number(Mt) - 3e-4))), Cn("FF")
  },
  BTIVD1: function (t) {
    _e("输入电压补偿值", "Input voltage compensation value", "0.1", "5", (function (t) {
      Cn("F8FB" + An(t)), Cn("FF")
    }))
  },
  BTIVD2: function (t) {
    Cn("F8FB" + An(1)), Cn("FF"), _e("输入实际测量出的输入电压", "Input the actual measured input voltage", "10", "1000", (function (t) {
      Cn("F8FB" + An(Number(t / l))), Cn("FF")
    }))
  },
  BTOAT0: function (t) {
    this.setData({
      ShowBar: 1
    }), wx.pageScrollTo({
      scrollTop: 50,
      duration: 300
    }), u < 5 || et - c < .2 ? (0, Fe.Toast)(Y ? "During current correction, the output current must be greater than 5A and in a constant current state" : "电流校正时输出电流必须大于5A且处于恒流状态") : (Cn("C0"), Cn("FF"), _e("输入实际测量出的输出电流", "Input the actual measured output current", "3", "100", (function (t) {
      var e = Number(t / u).toFixed(4);
      Cn("C5" + An(100 * Number(t / nt).toFixed(4)) + An(100 * e)), Cn("FF")
    })))
  },
  BTOAT1: function (t) {
    _e("显示电流补偿", "Display current compensation", "0.1", "5", (function (t) {
      Cn("FB45" + An(100 * t)), Cn("FF")
    }))
  },
  BTOAT2: function (t) {
    Cn("FB45" + An(100 * (Number(Bt) - .001))), Cn("FF")
  },
  BTOAT3: function (t) {
    Cn("FB45" + An(100 * (Number(Bt) + .003))), Cn("FF")
  },
  BTOAS1: function (t) {
    _e("设置电流跳动缓冲", "Set current jump buffer", "0.00", "1.00", (function (t) {
      Cn("F8F4" + An(t)), Cn("FF")
    }))
  },
  BTCLV: function (t) {
    _e("设置最小电流过滤", "Set minimum current filtering", "0.00", "5.00", (function (t) {
      Cn("F848" + An(t)), Cn("FF")
    }))
  },
  BTOAD1: function (t) {
    _e("设置电流补偿", "Set current compensation", "0.1", "5", (function (t) {
      Cn("FB44" + An(100 * t)), Cn("FF")
    }))
  },
  BTOAD2: function (t) {
    Cn("FB44" + An(100 * (Number(Dt) - .001))), Cn("FF")
  },
  BTOAD3: function (t) {
    Cn("FB44" + An(100 * (Number(Dt) + .001))), Cn("FF")
  },
  BTOAS: function (t) {
    Je(Y ? "Set current range" : "设置电流范围", (Y ? "Now:" : "当前范围:") + ut + "-" + ft, (function (t) {
      (t = t.trim()).match(/([\d\.]+)-([\d\.]+)/) ? (Cn("F878" + An(Number(RegExp.$1))), Cn("F879" + An(Number(RegExp.$2))), Cn("FF")) : (t = parseFloat(t), isFinite(t) && t > 1 ? (Cn("F879" + An(t)), Cn("FF")) : (0, Fe.Toast)(Y ? "Input format error" : "输入格式错误!"))
    }))
  },
  BTIVH: function (t) {
    _e("设置高压直流输入判定值", "Set high-voltage direct current input", 300, 500, (function (t) {
      Cn("F8FF" + An(t)), Cn("FF")
    }))
  },
  BTHHA: function (t) {
    _e("设置高压直流输入最大电流", "Set the max current for high-voltage input", 10, 200, (function (t) {
      Cn("F8FE" + An(t)), Cn("FF")
    }))
  },
  BTIAD1: function (t) {
    _e("输入电流补偿值", "Input current compensation value", "0.1", "5", (function (t) {
      Cn("F8FC" + An(t)), Cn("FF")
    }))
  },
  BTIAD2: function (t) {
    Cn("F8FB" + An(1)), Cn("FF"), _e("输入实际测量出的输入电流", "Input the actual measured input current", "3", "50", (function (t) {
      Cn("F8FC" + An(Number(t / d))), Cn("FF")
    }))
  },
  pwrbt: function (t) {
    Cn("A6" + Un(1 - W)), Cn("FF10")
  },
  BTUCF1: function (t) {
    Cn("F9CF" + Un(1 - te)), Cn("FF10")
  },
  owbt: function (t) {
    _e("设置功率限制", "Set power limit", "300", _, (function (t) {
      Cn("F84D" + An(t)), Cn("FF")
    }))
  },
  BTUIW1: function (t) {
    Cn("F9E1" + Un(1 - Ue)), Cn("FF")
  },
  tibt: function (t) {
    _e("设置预约时间", "Set appointment time", "0", 1200, (function (t) {
      Cn("A9" + En(t)), Cn("FF")
    }))
  },
  BTYC1: function (t) {
    _e("设置预充电压", "Set pre charge voltage", "0", ht, (function (t) {
      Cn("F8F6" + An(t)), Cn("FF")
    }))
  },
  BTYC2: function (t) {
    _e("设置预充电流", "Set pre charge current", ut, ft, (function (t) {
      Cn("F8F5" + An(t)), Cn("FF")
    }))
  },
  SetVA: function (t, e, n) {
    V != t && (e > ht || e < Ft ? _e("设置输出电压", "Set output voltage", Ft, ht, (function (e) {
      Cn("A80" + (V = t) + An(e) + An(n)), Cn(t <= 2 ? "FF10" : "FF11")
    })) : qe("快捷设置电压电流切换", "Switch confirmation", "为避免误触,请确认切换电压电流", "To avoid accidental contact, please confirm the switching voltage and current", (function (i) {
      Cn("A80" + (V = t) + An(e) + An(n)), Cn(t <= 2 ? "FF10" : "FF11")
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
    this.SetVA(4, H[0], H[1] > ft ? ft : H[1])
  },
  hqbt1: function (t) {
    Se ? Ce >= 5.39 ? _e("设置超温关机倒计时", "设置超温关机倒计时", 3, 60, (function (t) {
      Cn("F961" + Un(t)), Cn("FF15")
    })) : (0, Fe.Toast)(Y ? "The current firmware version is not adjustable. If you need to modify it, please upgrade the firmware!" : "当前固件版本不可调,如需修改请升级固件!") : _e("设置软启时间", "Set soft start time", 5, 20, (function (t) {
      Cn("F961" + Un(t)), Cn("FF15")
    }))
  },
  hqbt0: function (t) {
    Cn("F961" + Un(0 == mt ? Se ? 30 : 5 : 0)), Cn("FF15")
  },
  btbt1: function (t) {
    ge && wx.getClipboardData({
      success: function (t) {
        var e = t.data;
        e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (Cn("F96B" + Un(3)), Cn("F96C" + Un(0)), gn(e))
      }
    })
  },
  nvbt: function (t) {
    Je(Y ? "Set Output Voltage" : "设置输出电压", (Y ? "Range:" : "范围:") + Ft + "-" + ht, (function (t) {
      if (t)
        if (t.startsWith("FFF8")) Cn(t.substr(2, 4) + An(t.substr(6))), Cn("FF");
        else {
          if (t.startsWith("FFF9")) return Cn(t.substr(2)), void Cn("FF");
          if ("DEBUG=0" == t)(0, Fe.SetCFG)("DEBUG", 0), de = 0, Cn("F9C900"), Cn("F9CA01"), Cn("F9CB01"), Cn("F9CC01");
          else if ("DEBUG=1" == t)(0, Fe.SetCFG)("DEBUG", 1), de = 1, Cn("F9C900"), Cn("F9CA01"), Cn("F9CB01"), Cn("F9CC01");
          else if ("DEBUG=2" == t)(0, Fe.SetCFG)("DEBUG", 2), de = 2, Cn("F9C9FF"), Cn("F9CA01"), Cn("F9CB01"), Cn("F9CC01");
          else if ("DEBUG=3" == t)(0, Fe.SetCFG)("DEBUG", 2), de = 2, Cn("F9C9FF"), Cn("F9CA01"), Cn("F9CB01"), Cn("F9CC00");
          else if (t.startsWith("FFC8")) Cn(t.substr(2, 4) + t.substr(6)), Cn("FF");
          else if (t.startsWith("FFC9")) {
            Cn("C9" + t.substr(4, 4) + pn(t.substr(8)))
          } else if ("异常修复" == t) n.BTRST1();
          else if ("强制升级" == t || "测试版" == t) Ye.showModal({
            title: Y ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: Y ? "YES" : "确定",
            cancelText: Y ? "NO" : "取消",
            success: function (e) {
              e.confirm && n.UPDate("A700000000", "测试版" == t ? "Test1" : "NewUI")
            }
          });
          else if ("测试二" == t) Ye.showModal({
            title: Y ? "Start Upgrade" : "开始升级",
            editable: false,
            confirmText: Y ? "YES" : "确定",
            cancelText: Y ? "NO" : "取消",
            success: function (t) {
              t.confirm && n.UPDate("A700000000", "Test2")
            }
          });
          else if ("测试零" == t) {
            if (2 != ge) return;
            Ye.showModal({
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
              e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && gn(e)
            }
          });
          else {
            if (Cn("A1" + pn(t)), (t = parseFloat(t)) > ht || t < Ft && 0 == te || !isFinite(t)) return void(0, Fe.Toast)(Y ? "Beyond the set range!" : "超出设置范围!");
            Cn("A80" + V + An(t) + An(nt)), Cn("FF11")
          }
        }
      else wx.getClipboardData({
        success: function (t) {
          var e = t.data;
          e.match(/(DataStart=[^\{]+)\{([A-Za-z0-9+=\/]+)\}DataEnd/) && (Cn("F96B" + Un(3)), gn(e))
        }
      })
    }))
  },
  nabt: function (t) {
    _e("设置输出电流", "Set output current", ut, ft, (function (t) {
      Cn("A80" + V + An(et) + An(t)), Cn("FF")
    }))
  },
  sa2bt3: function (t) {
    _e("设置充电时间(分钟)", "Set charging time(Minute)", 0, 600, (function (t) {
      Cn("A9" + En(t)), Cn("FF")
    }))
  },
  SetS2V: function () {
    qe("无特殊情况请勿修改此值", "Modify this value without special circumstances", "此值限定二段功能使用电压,二段功能只能直充使用,如果使用充电器充电时打开二段功能可能会导致充电失败", "This value is limited to the two-stage voltage, and the two-stage function can only be used directly. If the two-stage function is turned on while charging with a charger, it may cause charging failure", (function (t) {
      _e("设置二段允许最大电压", "Set the maximum allowable voltage for the second stage", 50, ht, (function (t) {
        Cn("F8FD" + An(t)), Cn("FF12")
      }))
    }))
  },
  SetSGK: function () {
    if (Ce >= 5.39) {
      var t = 0 == Qt ? "1" : "0";
      Cn("A50" + t), Cn("A40" + t), Cn("FF19")
    } else Cn("F857" + An(0 == J ? 1 : 0)), Cn("FF12")
  },
  SetSGV: function () {
    Cn("F9E7" + Un(1 - Zt)), Cn("FF10")
  },
  sa2bt2: function (t) {
    _e("设置二段电流", "Set second stage current", ut, ft, (function (t) {
      Cn("F857" + An(t)), Cn("FF12")
    }))
  },
  sa2bt1: function (t) {
    _e("设置二段电压", "Set second stage voltage", Ft, ht, (function (t) {
      Cn("F858" + An(t)), Cn("FF12")
    }))
  },
  sa2bt0: function (t) {
    Se && (Ce < 5.39 || et > Oe) ? Cn("A9" + En(pe ? 0 : 60)) : (Cn("F858" + (0 == J ? An(et - 3) : "00000000")), Cn("F857" + (0 == J ? An(10) : "00000000")), Cn("FF12"))
  },
  sdbt1: function (t) {
    _e("设置延时时间(分钟)", "Set delay time (Minutes)", 1, 600, (function (t) {
      Cn("F859" + An(t)), Cn("FF16")
    }))
  },
  sdbt2: function (t) {
    _e("设置关机电流", "SSet startup delay current", "0.00", "10.00", (function (t) {
      Cn("F8F0" + An(t)), Cn("FF")
    }))
  },
  sdbt0: function (t) {
    Cn("F859" + (0 == Ut ? An(1) : "00000000")), Cn("FF16")
  },
  MSG: function (t, e) {
    if (!a)
      if (1 != de || e.startsWith("D") || (0, Fe.print)("MSG:", e), e.startsWith("A101")) wx.hideToast(), n.setData({
        ShowBar: 0,
        Panel: 2,
        LOGO: Y ? "Preview" : "预览"
      });
      else if (e.startsWith("A001")) Be = 2, "未激活" != i || ge || ze(), Ce <= 5.28 && Cn("FF");
    else if (e.startsWith("A000")) {
      if (Be) return;
      Be = 1, (0, Fe.Toast)(Y ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ye.showModal({
          title: Y ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + G,
          confirmText: Y ? "YES" : "确定",
          cancelText: Y ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, Fe.SetCFG)(G, t.content), Cn("A0" + pn(t.content)), Be = 0)
          }
        })
      }), 1e3)
    } else if (e.startsWith("F101")) Bn();
    else if (e.startsWith("F201")) Bn();
    else if (e.startsWith("F301")) dn = 0, ln = [], (0, Fe.Toast)(Y ? "Send End!" : "发送完成!");
    else if (e.startsWith("FF")) {
      var s = new DataView(t);
      s.getUint8(1) ? 2 != Be && (Be = 2, "未激活" != i || ge || ze()) : ((0, Fe.Toast)(Y ? "Password error, please re-enter" : "密码错误,请重新输入!!!", 2e3), setTimeout((function () {
        Ye.showModal({
          title: Y ? "Enter Bluetooth password" : "输入蓝牙密码",
          editable: true,
          placeholderText: "ID:" + G,
          confirmText: Y ? "YES" : "确定",
          cancelText: Y ? "Observer" : "我只看看",
          success: function (t) {
            t.confirm && ((0, Fe.SetCFG)(G, t.content), Cn("FF" + pn(t.content)), Be = 0)
          }
        })
      }), 1e3)), W = s.getUint8(2), R = s.getUint8(3), o = s.getUint8(4), Y = s.getUint8(5), $ = s.getUint8(6), q = s.getUint8(7), tt = s.getUint8(8), rt = s.getUint8(9), st = s.getUint8(10), ct = s.getUint8(11), Ct = s.getUint8(12), St = s.getUint8(13), lt = s.getUint8(14) / 10, mt = s.getUint8(15), pt = s.getUint8(16), Gt = s.getUint8(17), wt = s.getUint8(18), It = s.getUint8(19), bt = .01 * s.getUint8(20), Wt = s.getUint8(21), Rt = s.getUint8(22), Lt = s.getUint8(23), $t = s.getUint8(24), kt = s.getUint8(25), jt = s.getUint8(26), Xt = s.getUint8(27), qt = s.getUint8(28), Qt = s.getUint8(29), Q = s.getUint8(30), V = s.getUint8(31), te = s.getUint8(32), Yt = s.getUint8(33), Ue = s.getUint8(34), ve = s.getUint8(35), we = s.getUint8(36), p = s.getUint8(37), ee = s.getUint8(38), ne = s.getUint8(39), ie = s.getUint8(40), ae = s.getUint8(41), Zt = s.getUint8(42), zt = s.getUint8(43), dt = s.getUint8(44), Ie = s.getUint8(45);
      var ue = 51;
      M = [vn(s, ue, 2, 1), vn(s, ue + 4, 2, 1)], P = [vn(s, ue += 8, 2, 1), vn(s, ue + 4, 2, 1)], y = [vn(s, ue += 8, 2, 1), vn(s, ue + 4, 2, 1)], H = [vn(s, ue += 8, 2, 1), vn(s, ue + 4, 2, 1)], z = vn(s, ue += 8), J = vn(s, ue += 4), _ = vn(s, ue += 4), X = vn(s, ue += 4), it = vn(s, ue += 4), at = vn(s, ue += 4), ot = vn(s, ue += 4), L = vn(s, ue += 4), ut = vn(s, ue += 4), ft = vn(s, ue += 4), Ft = vn(s, ue += 4), ht = vn(s, ue += 4), gt = vn(s, ue += 4, 4), Bt = vn(s, ue += 4, 4), Tt = vn(s, ue += 4, 4), Dt = vn(s, ue += 4, 4), At = vn(s, ue += 4), Et = vn(s, ue += 4), Ut = vn(s, ue += 4), vt = vn(s, ue += 4), Nt = vn(s, ue += 4, 4), Mt = vn(s, ue += 4, 4), Pt = vn(s, ue += 4), Vt = vn(s, ue += 4), Kt = vn(s, ue += 4), yt = vn(s, ue += 4), Ht = vn(s, ue += 4), Jt = vn(s, ue += 4), _t = vn(s, ue += 4), K = vn(s, ue += 4, 4), ue += 4, Ce >= 5.43 && (Z = vn(s, ue, 4), ue += 4), Ce >= 5.49 && (Oe = vn(s, ue), ue += 4), Ce >= 5.5 && (Ot = vn(s, ue), xt = vn(s, ue += 4), ue += 4), 1 == V ? (nt = M[1], et = M[0]) : 2 == V ? (nt = P[1], et = P[0]) : 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = H[1], et = H[0]), n.setData({
        PON: W,
        KON: R,
        CAN: o,
        UEN: Y,
        KRC: $,
        SV: et.toFixed(2),
        SA: nt.toFixed(2),
        WTi: q,
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
        SGV: Zt,
        KPR: zt,
        CKA2: Gt,
        NTC: wt,
        DDT: It,
        CLV: bt,
        UEG: Wt,
        S2V: Oe,
        UCN: Rt,
        MFS: Lt,
        DOL: $t,
        DST: kt,
        LKS: jt,
        USC: Ie,
        UI: Xt,
        RDY: qt,
        SGK: Qt,
        ETi: Q,
        KSi: V,
        DSP: dt,
        UCF: te,
        TCH: Yt,
        UIW: Ue,
        ACK: ve,
        CCK: we,
        IVH: Ot,
        HHA: xt,
        UFN: p,
        MUE: ee,
        MUF: ne,
        UME: ie,
        MUA: ae,
        KS1: M,
        KS2: P,
        KS3: y,
        KS4: H,
        SV2: z,
        SA2: J,
        SMW: _,
        UMW: X,
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
        USD: Ut,
        SDU: vt,
        O2T: Nt,
        O2D: Mt,
        OVS: Pt,
        OAS: Vt,
        YCA: Kt,
        YCV: yt,
        OST: Ht,
        MMA: Jt,
        MMV: _t
      })
    } else if (e.startsWith("FE") || e.startsWith("EE")) {
      var fe = Gn(e.substring(20, 40));
      if (i = fe.startsWith("20") ? fe : "未激活", 0 == o) {
        Ce = .01 * parseInt(e.substring(16, 20), 16), o = In(e, 14), Se = 0, G = e.substring(2, 14), 1 == o ? (r = "HW48XX", Ce >= 5.36 && (n.setData({
          Err: 1
        }), rn()), Ce >= 5.46 && (oe = 1)) : 2 == o ? (r = "Increase", n.setData({
          Err: 1
        }), un()) : 4 == o ? (r = "ZX3000", Ce >= 5.46 && (oe = 1)) : 8 == o ? (r = "INFY", n.setData({
          Err: 1
        }), fn()) : 12 == o ? (r = "EV_Station", Se = 2) : 13 == o ? r = "ZEEHO" : 14 == o ? (r = "EV_Charger", n.setData({
          Err: 1
        }), cn(), Se = 1) : 16 == o ? r = "EPS6020" : 32 == o ? (r = "ZX48XX", Ce >= 5.44 && (n.setData({
          Err: 1
        }), sn()), Ce >= 5.46 && (oe = 1)) : 64 == o ? r = "Sinexcel" : 65 == o ? r = "BH10M100" : 66 == o ? r = "MC1503N5R" : 67 == o && (r = "R24-2200");
        var he = wx.getDeviceInfo();
        (0, Fe.Check)(G, je, ge, r, Ce.toFixed(2), i, he.model, he.system, (function (t) {
          "0" == t[0] && (a = 1, Cn("CC"), Qe("设备授权异常", "Abnormal device authorization", "ID:0x" + G, "ID:0x" + G, "我知道了", "Yes I Kown", (function (t) {
            bn()
          }))), "1" == t[1] && Cn("CB"), "1" == t[2] && ze()
        })), G = "0x" + G, n.setData({
          CVer: Ce.toFixed(2),
          CEV: Se,
          SCAN: r,
          ID: G,
          ACT: i,
          MUS: oe
        });
        var le = (0, Fe.GetCFG)(G, "0000");
        ge && (le = (Number(G) + 19880914).toString(16).substring(4, 8)), e.startsWith("EE") ? 0 != Be && 3 != Be || Cn("A0" + pn(le)) : (Cn("FF" + pn(le)), setTimeout((function () {
          3 == Be && (Be = 0, Cn("FF" + pn(le)))
        }), 1500))
      }
      if (e.startsWith("FE")) {
        var De = Gn(e.substring(260, 300)),
          me = Gn(e.substring(300, 340));
        "config" != De && "" != De || (De = (0, Fe.GetCFG)("WID", "config")), "88888888" != me && "" != me || (me = (0, Fe.GetCFG)("WPD", "88888888")), n.setData({
          VIN: Gn(e.substring(100, 140)),
          SSID: Gn(e.substring(140, 180)),
          UPWD: Gn(e.substring(180, 220)),
          LKV: Gn(e.substring(220, 260)),
          WID: De,
          WPD: me
        })
      }
    } else if (e.startsWith("FA")) {
      var be = new DataView(t);
      c = vn(be, 1), u = vn(be, 5), f = vn(be, 9), l = vn(be, 13), d = vn(be, 17), g = vn(be, 21), n.setData({
        IA: d,
        OV: c,
        OA: u,
        OW: f
      })
    } else if (e.startsWith("FB")) {
      var xe = new DataView(t);
      h = xe.getUint8(1), C = xe.getUint8(2), S = xe.getUint8(3), T = xe.getUint8(4), D = xe.getUint8(5), m = xe.getUint8(6), w = xe.getUint8(7), I = xe.getUint8(8), k = xe.getUint8(9), pe = xe.getUint8(10), pe += xe.getUint8(11) << 8, Ge = xe.getUint8(12), j = xe.getUint8(13), se = xe.getUint8(20), re = xe.getUint8(21), ce = xe.getUint8(22);
      var Ne = 31;
      c = vn(xe, Ne), u = vn(xe, Ne += 4), f = vn(xe, Ne += 4), F = vn(xe, Ne += 4), l = vn(xe, Ne += 4), d = vn(xe, Ne += 4), g = vn(xe, Ne += 4), B = vn(xe, Ne += 4), A = vn(xe, Ne += 4), E = vn(xe, Ne += 4), U = vn(xe, Ne += 4), v = vn(xe, Ne += 4), b = vn(xe, Ne += 4), O = vn(xe, Ne += 4), x = vn(xe, Ne += 4), N = vn(xe, Ne += 4), Ne += 4, 2 == o ? un(T, D) : 8 == o ? un(T, D, m) : Ce >= 5.44 && (32 == o ? sn(xe.getUint8(23), xe.getUint8(24), xe.getUint8(25), xe.getUint8(26), xe.getUint8(27), xe.getUint8(28), xe.getUint8(29)) : 1 == o ? rn(xe.getUint8(23), xe.getUint8(24), xe.getUint8(25), xe.getUint8(26), xe.getUint8(27), xe.getUint8(28), 0) : 14 == o && cn(xe.getUint8(23), xe.getUint8(24), xe.getUint8(25), xe.getUint8(26), xe.getUint8(27), xe.getUint8(28), xe.getUint8(29), xe.getUint8(30))), Ce >= 5.42 && (Ae = xe.getUint8(14), Ee = vn(xe, Ne), Ne += 4, Ee >= 100 && (bn(), Qe("升级成功", "Upgrade completed!", "", "", "我知道了", "Yes I Kown", (function (t) {}))));
      var Me = Number(f / g * 100).toFixed(2),
        Pe = Number(g - f).toFixed(2);
      0 == ve && Ce >= 5.42 ? Te = Y ? "Device unauthorized" : "设备未授权" : 0 == we && Ce >= 5.42 ? Te = Y ? "Equipment Anomaly" : "设备异常" : 60 == h ? Te = Y ? "Simulate high voltage anomaly" : "模拟电池升压异常" : 0 == S ? Te = 0 == k ? Y ? "Communication Abnormality" : "CAN通讯异常" : 39 == k ? Y ? "Abnormal Insulation Test" : "绝缘测试未通过" : k < 6 ? Y ? "Handshake message failed" : "握手信息未通过" : k < 9 ? Y ? "Vehicle information not pass" : "车辆信息未通过" : 16 == k ? Y ? "Charging station not ready" : "电压检测未通过" : Y ? "Other abnormal interruptions" : "其它异常中止" : 50 == h ? Te = Y ? "Stop Charging" : "中 止 充 电" : 51 == h ? Te = Y ? "Charging Error" : "充 电 错 误" : 52 == h ? Te = Y ? "Seting Handshake Information" : "配置握手信息" : 53 == h ? Te = Y ? "Seting Charging Information" : "配置充电信息" : 54 == h ? Te = et >= Ft && et <= ht ? Y ? "Waiting Output Set Voltage" : "等待输出设定电压" : Y ? "Set Voltage Out Of Range" : "设置电压超范围" : 55 == h ? Te = Y ? "Ready For Use" : "已准备就绪" : 56 == h ? Te = Y ? "Charging" : "正在充电中" : 57 == h ? Te = Y ? "Charging Completed" : "充电完成" : 58 == h ? Te = Y ? "Overtemperature shutdown" : "超温关机(" + Ge + ")" : 59 == h ? Te = Y ? "Insulation testing" : "绝缘测试" : 4 == h ? Te = Y ? "Charger Shutdown" : "充电器已关机" : 43 == h ? Te = Y ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == h ? Te = Y ? "Over Temperature Shutdown" : "超温保护关机" : c <= 10 ? Te = Y ? "Charger Output Abnormality" : "充电器输出异常" : 0 == h ? Te = Y ? "Waiting For Battery Connection" : "等待接入电池" : 1 == h ? Te = Y ? "Charging" : "正在充电中" : 2 == h ? Te = Y ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == h ? Te = Y ? "Precharging" : "正在预充" : 40 == h ? Te = Y ? "Appointment Waiting" : "预约等待中" : 3 == h && (Te = Y ? "Charging Completed" : "充电完成");
      var Ve = .65 * wx.getWindowInfo().windowWidth,
        We = Math.max(15, Math.min(30, Ve / (Y ? Te.length : 1.8 * Te.length) * 1.5));
      n.setData({
        Ah: A,
        Wh: E,
        AH: U,
        WH: v,
        SWT: w,
        SMT: I,
        IV: l,
        IA: d,
        IW: g,
        IT: B,
        ST0: T,
        ST1: D,
        ST2: m,
        EEI: g ? Me : "0.00",
        EES: g ? Pe : "0.00",
        YS: mn(pe),
        STR: Te,
        NFS: C,
        OL: S,
        OV: c,
        OA: u,
        OW: f,
        OT: F,
        FSize: We,
        KT1: j,
        Ti: mn(b),
        TI: mn(O),
        NSD: mn(x),
        UPS: Ae,
        EID: re,
        ERL: se,
        ELN: ce,
        SOC: Number(N).toFixed(0),
        UPV: Number(Ee).toFixed(2)
      })
    } else if (e.startsWith("01")) {
      c = wn(e, 2), u = wn(e, 10), f = wn(e, 18), F = wn(e, 26), h = In(e, 34), C = In(e, 36), S = In(e, 38), 60 == h ? Te = Y ? "Simulate high voltage anomaly" : "模拟电池升压异常" : "0" == S ? Te = Y ? "Communication Abnormality" : "CAN通讯异常" : 50 == h ? Te = Y ? "Stop Charging" : "中 止 充 电" : 51 == h ? Te = Y ? "Charging Error" : "充 电 错 误" : 52 == h ? Te = Y ? "Seting Handshake Information" : "配置握手信息" : 53 == h ? Te = Y ? "Seting Charging Information" : "配置充电信息" : 54 == h ? Te = Y ? "Waiting Output Set Voltage" : "等待输出设定电压" : 55 == h ? Te = Y ? "Ready For Use" : "已准备就绪" : 56 == h ? Te = Y ? "Charging" : "正在充电中" : 57 == h ? Te = Y ? "Charging Completed" : "充电完成" : 58 == h ? Te = Y ? "Overtemperature shutdown" : "超温关机(" + Ge + ")" : 59 == h ? Te = Y ? "Insulation testing" : "绝缘测试" : 0 == c ? Te = Y ? "Charger Output Abnormality" : "充电器输出异常" : 4 == h ? Te = Y ? "Charger Shutdown" : "充电器已关机" : 0 == h ? Te = Y ? "Waiting For Battery Connection" : "等待接入电池" : 1 == h ? Te = Y ? "Charging" : "正在充电中" : 2 == h ? Te = Y ? "In The Second Stage Of Charging" : "第二段充电中" : 5 == h ? Te = Y ? "Precharging" : "正在预充" : 40 == h ? Te = Y ? "Appointment Waiting" : "预约等待中" : 3 == h ? Te = Y ? "Charging Completed" : "充电完成" : 43 == h ? Te = Y ? "Charging Completed(Turned Off)" : "充电完成(已关机)" : 44 == h && (Te = Y ? "Over Temperature Shutdown" : "超温保护关机");
      var Re = .65 * wx.getWindowInfo().windowWidth;
      We = Math.max(15, Math.min(30, Re / (Y ? Te.length : 1.8 * Te.length) * 1.5));
      n.setData({
        STR: Te,
        NFS: C,
        OL: S,
        OV: c,
        OA: u,
        OW: f,
        OT: F,
        FSize: We
      })
    } else if (e.startsWith("02")) {
      l = wn(e, 2), d = wn(e, 10), g = wn(e, 18), B = wn(e, 26), T = In(e, 34), D = In(e, 36), m = In(e, 38);
      var Le = Number(f / g * 100).toFixed(2),
        Ke = Number(g - f).toFixed(2);
      n.setData({
        IV: l,
        IA: d,
        IW: g,
        IT: B,
        ST0: T,
        ST1: D,
        ST2: m,
        EEI: g ? Le : "0.00",
        EES: g ? Ke : "0.00"
      }), 2 == o && un(T, D), 8 == o && fn(T, D, m)
    } else if (e.startsWith("03")) A = wn(e, 2), E = wn(e, 10), U = wn(e, 18), v = wn(e, 26), w = In(e, 34), I = In(e, 36), n.setData({
      Ah: A,
      Wh: E,
      AH: U,
      WH: v,
      SWT: w,
      SMT: I
    });
    else if (e.startsWith("04")) pe = In(e, 34), pe += In(e, 36) << 8, Ge = In(e, 38), n.setData({
      YS: mn(pe),
      Ti: mn(wn(e, 2)),
      TI: mn(wn(e, 10)),
      NSD: mn(wn(e, 18)),
      SOC: Number(wn(e, 26)).toFixed(0)
    });
    else if (e.startsWith("10")) M = [wn(e, 2, 1), wn(e, 10, 1)], P = [wn(e, 18, 1), wn(e, 26, 1)], V = In(e, 34), W = In(e, 36), R = In(e, 38), 1 == V ? (nt = M[1], et = M[0]) : 2 == V && (nt = P[1], et = P[0]), 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = H[1], et = H[0]), n.setData({
      KS1: M,
      KS2: P,
      KSi: V,
      PON: W,
      KON: R,
      SV: et.toFixed(2),
      SA: nt.toFixed(2)
    });
    else if (e.startsWith("11")) y = [wn(e, 2, 1), wn(e, 10, 1)], H = [wn(e, 18, 1), wn(e, 26, 1)], Y = In(e, 36), $ = In(e, 38), (0, Fe.SetCFG)("UEN", Y), 1 == V ? (nt = M[1], et = M[0]) : 2 == V && (nt = P[1], et = P[0]), 3 == V ? (nt = y[1], et = y[0]) : 4 == V && (nt = H[1], et = H[0]), n.setData({
      KS3: y,
      KS4: H,
      CAN: o,
      UEN: Y,
      KRC: $,
      SV: et.toFixed(2),
      SA: nt.toFixed(2),
      KSi: V
    });
    else if (e.startsWith("12")) z = wn(e, 2), J = wn(e, 10), _ = wn(e, 18), X = wn(e, 26), q = In(e, 34), Q = In(e, 36), tt = In(e, 38), n.setData({
      SV2: z,
      SA2: J,
      SMW: _,
      UMW: X,
      WTi: q,
      ETi: Q,
      Sleep: tt
    });
    else if (e.startsWith("13")) {
      it = wn(e, 2), at = wn(e, 10), ot = wn(e, 18);
      wn(e, 26);
      rt = In(e, 34), st = In(e, 36), ct = In(e, 38), n.setData({
        TMW: it,
        UMT: at,
        OMT: ot,
        LEDK0: rt,
        LEDK1: st,
        LEDK2: ct
      })
    } else if (e.startsWith("14")) ut = wn(e, 2), ft = wn(e, 10), Ft = wn(e, 18), ht = wn(e, 26), Ct = In(e, 34), St = In(e, 36), lt = .1 * In(e, 38), n.setData({
      LSA: ut,
      HSA: ft,
      LSV: Ft,
      HSV: ht,
      UFS: Ct,
      LFS: St,
      AFS: lt.toFixed(1)
    }), ut = Number(ut), Ft = Number(Ft), ft = Number(ft), ht = Number(ht);
    else if (e.startsWith("15")) gt = .01 * wn(e, 2), Bt = .01 * wn(e, 10), Tt = .01 * wn(e, 18), Dt = .01 * wn(e, 26), mt = In(e, 34), pt = In(e, 36), Gt = In(e, 38), n.setData({
      OVT: gt.toFixed(4),
      OAT: Bt.toFixed(4),
      OVD: Tt.toFixed(4),
      OAD: Dt.toFixed(4),
      UHQ: mt,
      GIF: pt,
      CKA2: Gt
    });
    else if (e.startsWith("16")) At = wn(e, 2), Et = wn(e, 10), Ut = wn(e, 18), vt = wn(e, 26), wt = In(e, 34), It = In(e, 36), bt = .01 * In(e, 38), n.setData({
      L2V: At,
      H2V: Et,
      USD: Ut,
      NTC: wt,
      DDT: It,
      CLV: bt,
      SDU: vt
    });
    else if (e.startsWith("17")) Nt = .01 * wn(e, 2), Mt = .01 * wn(e, 10), Pt = wn(e, 18), Vt = wn(e, 26), Wt = In(e, 34), Rt = In(e, 36), Lt = In(e, 38), n.setData({
      O2D: Mt.toFixed(4),
      O2T: Nt.toFixed(4),
      OVS: Pt,
      OAS: Vt,
      UEG: Wt,
      UCN: Rt,
      MFS: Lt
    });
    else if (e.startsWith("18")) Kt = wn(e, 2), yt = wn(e, 10), Ht = wn(e, 18), Yt = wn(e, 26), $t = In(e, 34), kt = In(e, 36), jt = In(e, 38), n.setData({
      YCA: Kt,
      YCV: yt,
      DOL: $t,
      DST: kt,
      LKS: jt,
      TCH: Yt,
      OST: Ht
    });
    else if (e.startsWith("19")) Jt = wn(e, 2), _t = wn(e, 10), Xt = In(e, 34), qt = In(e, 36), Qt = In(e, 38), n.setData({
      UI: Xt,
      MMA: Jt,
      MMV: _t,
      RDY: qt,
      SGK: Qt
    });
    else if (e.startsWith("20")) {
      var ye = Gn(e.substring(2, 40));
      n.setData({
        SSID: ye
      })
    } else if (e.startsWith("21")) n.setData({
      UPWD: Gn(e.substring(2, 40))
    });
    else if (e.startsWith("22")) {
      var He = Gn(e.substring(2, 40)),
        $e = (0, Fe.GetCFG)("WID", He);
      He != $e && Cn("AB00" + pn(He = unescape(encodeURIComponent($e)))), n.setData({
        WID: $e
      })
    } else if (e.startsWith("23")) {
      var ke = Gn(e.substring(2, 40)),
        Ze = (0, Fe.GetCFG)("WPD", ke);
      ke != Ze && Cn("AB01" + pn(ke = unescape(encodeURIComponent(Ze)))), n.setData({
        WPD: Ze
      })
    } else if (e.startsWith("24")) n.setData({
      LKV: Gn(e.substring(2, 40))
    });
    else if (e.startsWith("25")) n.setData({
      VIN: Gn(e.substring(2, 40))
    });
    else if (e.startsWith("50")) cn(In(e, 2), In(e, 4), In(e, 6), In(e, 8));
    else if (e.startsWith("51")) cn(0, 0, 0, 0, In(e, 2), In(e, 4), In(e, 6), In(e, 8));
    else if (e.startsWith("40")) rn(In(e, 2), In(e, 4), In(e, 6), In(e, 8), In(e, 10), In(e, 12), 0);
    else if (e.startsWith("D1") || e.startsWith("D0")) {
      if (2 != de) return;
      var Je = e.substring(2, 10),
        _e = [e.substring(10, 12), e.substring(12, 14), e.substring(14, 16), e.substring(16, 18), e.substring(18, 20), e.substring(20, 22), e.substring(22, 24), e.substring(24, 26)],
        Xe = parseInt(Je, 16);
      if (405206102 == Xe) 38, console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "电桩", "握手信息");
      else if (402781270 == Xe) console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "电桩", "车辆识别" + _e[0]);
      else if (485291094 == Xe) "11" == _e[0] ? console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "电桩", "同意收包" + _e[6]) : "13" == _e[0] && console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "电桩", "收包完成" + _e[6]);
      else if (403174486 == Xe) console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "电桩", "同步时间" + _e[0] + _e[1]);
      else if (403240022 == Xe) {
        9;
        var qe = parseInt(_e[1] + _e[0], 16),
          tn = parseInt(_e[3] + _e[2], 16),
          en = parseInt(_e[5] + _e[4], 16),
          nn = parseInt(_e[7] + _e[6], 16);
        console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "电桩", "充电范围:电压" + tn + "-" + qe + " 电流" + nn + "-" + en)
      } else if (269153366 == Xe) console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "电桩", "准备就绪" + _e[0]);
      else if (403895382 == Xe) {
        var an = parseInt(_e[1] + _e[0], 16),
          on = parseInt(_e[3] + _e[2], 16),
          Fn = parseInt(_e[5] + _e[4], 16);
        console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "电桩", "输出信息:V" + an + " A" + on + " T" + Fn)
      } else if (270201942 == Xe) 26, console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "电桩", "中止充电");
      else if (136311894 == Xe) 31, console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "电桩", "充电器错");
      else if (405231348 == Xe) {
        var hn = parseInt(_e[1] + _e[0], 16);
        console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "取电器", "绝缘信息:" + hn)
      } else if (269047540 == Xe) console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "取电器", "电池就绪:" + _e[0]);
      else if (403724020 == Xe) {
        var Sn = .1 * parseInt(_e[1] + _e[0], 16),
          gn = .1 * parseInt(_e[3] + _e[2], 16);
        console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "取电器", "需求信息:V" + Sn + " A" + gn)
      } else if (485250804 == Xe) console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "取电器", "请求多包:" + _e[6]);
      else if (485185268 == Xe) console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "取电器", "多包数据");
      else if (403920628 == Xe) console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], "取电器", "车辆状态");
      else {
        var Tn = 244 == (255 & Xe) ? "取电器" : "电桩";
        console.log(Je, _e[0], _e[1], _e[2], _e[3], _e[4], _e[5], _e[6], _e[7], Tn, "未知")
      }
    }
  },
  onLoad: function (i) {
    n = this, Be = 0, dn = 0, a = 0, o = 0, De = 0, Ae = 0, Ee = 0, oe = 0, nn[0] = 1, nn[1] = 1, nn[2] = 1, nn[3] = 1, nn[4] = 1, nn[5] = 1, nn[6] = 1, nn[7] = 1, le = Number(i.Test) || 0, Se = Number(i.CEV) || 0, De = Number(i.ODM) || 0, Ze();
    var r = wx.getAccountInfoSync();
    ge = "trial" == r.miniProgram.envVersion ? 1 : "develop" == r.miniProgram.envVersion ? 2 : 0, He = 0;
    var s = wx.getDeviceInfo();
    console.log("SYSINF", s.abi, s.benchmarkLevel, s.brand, s.model, s.platform, s.system), (0, Fe.GetGIF)(1).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var c = RegExp.$2;
    (0, Fe.GetGIF)(2).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var u = RegExp.$2;
    (0, Fe.GetGIF)(3).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var f = RegExp.$2;
    (0, Fe.GetGIF)(4).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var F = RegExp.$2;
    (0, Fe.GetGIF)(5).match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
    var h = RegExp.$2;
    Le[5] = (0, Fe.GetCFG)("BGP5", "/img/bc1.gif"), Le[1] = (0, Fe.GetCFG)("BGP1", "https://dingyue.ws.126.net/2022/0808/701db340g00rg9pym02h5d200cs00leg00it00vh.gif"), Le[2] = (0, Fe.GetCFG)("BGP2", "https://img2.baidu.com/it/u=2215745416,4118415336&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422"), Le[3] = (0, Fe.GetCFG)("BGP3", "https://c-ssl.dtstatic.com/uploads/item/201912/08/20191208175320_skjmi.thumb.1000_0.jpg"), Le[4] = (0, Fe.GetCFG)("BGP4", "https://wx4.sinaimg.cn/mw690/9f2299eegy1hqwec2a3ncj21kw2dcx6p.jpg"), Y = (0, Fe.GetCFG)("UEN"), de = (0, Fe.GetCFG)("DEBUG"), Ke = (0, Fe.GetCFG)("BGI", 0), ye = (0, Fe.GetCFG)("BGT", "80"), t = (0, Fe.GetCFG)("WID", "config"), e = (0, Fe.GetCFG)("WPD", "88888888"), n.setData({
      WID: t,
      WPD: e
    });
    var C = (0, Fe.GetCFG)("ShowM");
    n.setData({
      GIF1: "data:image/gif;base64," + c,
      GIF2: "data:image/gif;base64," + u,
      GIF3: "data:image/gif;base64," + f,
      GIF4: "data:image/gif;base64," + F,
      GIF5: "data:image/gif;base64," + h,
      UEN: Y,
      ShowM: C,
      RollV: "5.48",
      TestV: "5.50(抢先版)",
      RoCEV: "5.48",
      UPDate: "5.49",
      APP: "1.35",
      GM: ge,
      ADD: He,
      CAN: Ce,
      CEV: Se,
      MUS: oe,
      BGI: Ke,
      BGT: parseInt(ye, 16),
      BGC: "#000000" + ye,
      ODM: De,
      BGP: Le[Ke],
      BGP1: Le[1],
      BGP2: Le[2],
      BGP3: Le[3],
      BGP4: Le[4],
      BGP5: Le[5]
    }), console.log(Le[Ke]), le && (ke[0] = "1", ke[1] = "2", ke[2] = "3", ke[3] = "4", Se ? this.MSG("", "EEA47210A4AE300E0" + 548..toString(16) + "43786A64777800000000") : this.MSG("", "EEA47210A4AE30010" + 548..toString(16) + "323032342D372D330000"), this.MSG("", "1000001624000001F4000016F8000005DC010101"), this.MSG("", "1100001BE4000005DC000020D0000005DC010000"), this.MSG("", "12000000000000000000061A8000061A800A013C"), this.MSG("", "13000493E000001D4C00001B580000000064FF32"), this.MSG("", "14000000640000138800001004000016DA08320A"), this.MSG("", "1500002710000027100000271000002788000100"), this.MSG("", "160000000000000000000000000000003200012D"), this.MSG("", "1700002710000027100000000500000005001FFF"), this.MSG("", "18000003E800000000000021340000471801000F"), this.MSG("", "2037383736454633413744383000000000000000"), this.MSG("", "2130303030000000000000000000000000000000"), this.MSG("", "2263786A64777800000000000000000000000000"), this.MSG("", "2335303033383139373135000000000000000000"), this.MSG("", "2430303030000000000000000000000000000000"), this.MSG("", "0100001624000001F400006EB400000BB8013703"), this.MSG("", "02000056220000008400007264000009F6000000"), this.MSG("", "0300000004000001030000010800003865000000"), this.MSG("", "0400000CE4000108740000000000002710000000")), me || (me = 1, he.onReconnected((function () {
      n.AutoLogin()
    })), he.onBLEConnectionStateChange((function () {
      a || (a = 1, Qe("蓝牙信号丢失", "Bluetooth Disconnected", "通常是关机或信号弱或干扰大导致", "Blue abnormal interruption is usually caused by shutdown, weak signal, or significant signal interference", "我知道了", "Yes I Kown", (function (t) {
        bn()
      }))), bn()
    })), he.onBLECharacteristicValueChange1(this.MSG)), n.AutoLogin()
  },
  AutoLogin: function () {
    Be = 0, dn = 0, a = 0, o = 0, De = 0, Ae = 0, Ee = 0, Be = 3, Cn("A0" + pn("0000")), Cn("EE"), setTimeout((function () {
      3 == Be && (Be = 0, Cn("A0" + pn((0, Fe.GetCFG)(G, "0000"))), console.log("Re login:1")), "0" == o && Cn("EE")
    }), 1500), setTimeout((function () {
      3 == Be && (Be = 0, Cn("A0" + pn((0, Fe.GetCFG)(G, "0000"))), console.log("Re login:1")), "0" == o && Cn("EE")
    }), 2500)
  },
  navigateBack: function (t) {
    Ye.navigateBack({
      delta: 0
    })
  },
  onUnload: function () {
    a = 1, he.closeBLEConnection(), console.log("Unload")
  },
  onShow: function (t) {
    a = 0, wx.hideHomeButton()
  },
  onHide: function () {
    a = 1
  }
});