var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes");
i(require("../../4E32DEC39E166AAF2854B6C471091D62.js"));
var a = i(require("../../578207C49E166AAF31E46FC305191D62.js"));

function i(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}
var s = require("../../E0B6CAE39E166AAF86D0A2E4CEE81D62.js"),
  n = "5.13",
  r = 1,
  l = null,
  S = ["#bt1", "设置电压", "NV", "V", "", ""],
  o = ["#bt2", "预约开机", "", "", "", ""],
  h = ["#bt3", "缓启设置", "", "S", "", ""],
  f = ["#bt4", "蓝牙名称", "", "", "", ""],
  u = ["#bt5", "设置电流", "NA", "A", "", ""],
  c = ["#bt6", "开关电源", "", "", "", ""],
  D = ["#bt7", "二段设置", "", "A", "", ""],
  d = ["#bt8", "蓝牙密码", "", "", "", ""],
  b = ["#bt9", "功率限制", "MW", "W", "", ""],
  C = ["#bt10", "按键设置", "", "", "", ""],
  T = ["#bt11", "延时关机", "", "M", "", ""],
  g = ["#bt12", "累计清零", "", "", "", ""],
  m = ["#BtKS1", "快速设置", "", "", "", ""],
  x = ["#BtKS2", "快速设置", "", "", "", ""],
  M = ["#BtKS3", "快速设置", "", "", "", ""],
  N = ["#BtKS4", "快速设置", "", "", "", ""],
  A = ["#bt21", "电压范围", "", "", "", ""],
  w = ["#bt22", "电压校正", "", "", "", ""],
  F = ["#bt23", "屏幕驱动", "", "", "", ""],
  v = ["#bt24", "返回上级", "", "", "", ""],
  I = ["#bt25", "最大电流", "", "", "", ""],
  W = ["#bt26", "电流校正", "", "", "", ""],
  G = ["#bt27", "屏幕方向", "", "", "", ""],
  p = ["#bt28", "重置设置", "", "", "", ""],
  P = ["#bt29", "功率限制", "", "", "", ""],
  O = ["#bt30", "超温限制", "", "", "", ""],
  R = ["#bt31", "风速设置", "", "", "", ""],
  L = ["#bt32", "系统密码", "", "", "", ""],
  V = "APP:1.0",
  y = 0,
  E = "",
  K = [null],
  B = K[0],
  k = K[1],
  U = K[5],
  $ = K[7],
  H = K[8],
  Q = [null],
  Y = Q[0],
  _ = Q[1],
  j = Q[2],
  q = Q[3],
  X = Q[4],
  z = Q[5],
  Z = Q[6],
  J = Q[7],
  tt = Q[8],
  et = Q[9],
  at = [null],
  it = at[2],
  st = at[3],
  nt = at[6],
  rt = [null],
  lt = rt[0],
  St = rt[1],
  ot = [null],
  ht = ot[0],
  ft = ot[1],
  ut = ot[2],
  ct = ot[3],
  Dt = ot[8],
  dt = [null],
  bt = dt[1],
  Ct = dt[3],
  Tt = dt[4],
  gt = dt[5],
  mt = dt[8],
  xt = dt[9],
  Mt = [null],
  Nt = Mt[0],
  At = Mt[1],
  wt = Mt[2],
  Ft = Mt[3],
  vt = [null],
  It = (st = vt[1], it = vt[2], vt[3]),
  Wt = vt[8],
  Gt = vt[9],
  pt = "",
  Pt = 0,
  Ot = n,
  Rt = "Cxjdwx",
  Lt = "",
  Vt = 0;

function yt(t, e) {
  wx.createSelectorQuery().select("#myCanvas").fields({
    node: !0,
    size: !0
  }).exec((function (e) {
    var a = e[0].node,
      i = a.getContext("2d");
    a.width = 60, a.height = 60, i.scale(1, 1), i.font = "normal bold 18px SimSun", i.fillStyle = "#000", i.fillRect(0, 0, 60, 60), i.fillStyle = "#fff";
    for (var s = t.split("|"), n = 0; n < s.length; n += 1) {
      var r = s[n].split(","),
        l = r[0],
        S = r[1],
        o = r[2],
        h = r[3];
      i.font = "normal bold " + o + "px Kaiti", i.fillText(h, l, S)
    }
    for (var f = "", u = [], c = -1, D = 0; D < 60; D += 1)
      for (var d = 0; d < 60; d += 1) {
        d % 8 == 0 && (c += 1);
        var b = i.getImageData(d, D, 1, 1).data,
          C = .299 * b[0] + .587 * b[1] + .114 * b[2];
        u[c] = (C < 140 ? "0" : "1") + (null == u[c] ? "" : u[c])
      }
    for (var T = 0; T < u.length; T++) f = f + parseInt(Number(u[T]), 2) + ",";
    Lt = f.slice(0, -1)
  }))
}
var Et = [],
  Kt = 0;

function Bt(t) {
  s.easySendData(Et[Kt], !1), Ut("发送进度:" + (Kt / Et.length * 100).toFixed(2) + "%"), console.log("ID=" + Kt + "  Str=" + Et[Kt]), Kt++
}

function kt(t) {
  for (var e = function (e) {
      wx.createSelectorQuery().select(t[e][0]).fields({
        node: !0,
        size: !0
      }).exec((function (a) {
        var i = a[0].node,
          s = i.getContext("2d"),
          n = wx.getSystemInfoSync().pixelRatio;
        i.width = a[0].width * n, i.height = a[0].height * n, s.scale(n, n), s.fillStyle = "#ddFFdd", t[e][0] == "#BtKS" + Dt && s.fillRect(0, 0, a[0].width, a[0].height), s.fillStyle = "#ddFFdd", "#bt9" == t[e][0] && 1 == St && s.fillRect(0, 0, a[0].width, a[0].height), s.fillStyle = "#ffdddd", "#bt9" == t[e][0] && 1 == lt && s.fillRect(0, 0, a[0].width, a[0].height), s.font = "normal bold 16px PingFangSC-Regular", s.fillStyle = "#ff9900", s.textAlign = "center", s.fillText(t[e][1], a[0].width / 2, 27), s.font = "normal bold 9px PingFangSC-Regular", s.textAlign = "left", s.fillStyle = "#22aa22", s.fillText(t[e][2] + t[e][3], 3, 9), s.textAlign = "right", s.fillStyle = "#dd0000", "" != t[e][4] && s.fillText(t[e][4], a[0].width - 3, 9), s.textAlign = "center", s.fillStyle = "#cc0088", "" != t[e][5] && s.fillText(t[e][5], a[0].width / 2, a[0].height - 3), s.strokeStyle = "#eee", s.rect(0, 0, a[0].width, a[0].height), s.stroke()
      }))
    }, a = 0; a < t.length; a++) e(a)
}
Page({
  data: {
    title: "设备连接失败,点击重试",
    text: "",
    CMD: "",
    ShowPan: 1,
    Ver: " APP:5.13 CAN:Unknown",
    TIP: "点击需要设置参数",
    CKStr: "密码验证失败,请输入设备密码",
    SOC: 100,
    ID: "",
    XBM: "1",
    STX: "发送",
    STS1: 0,
    STS2: 0,
    STS3: 0,
    STS4: 0,
    STS5: 0,
    STS6: 0,
    STS7: 0,
    STS8: 0,
    STS9: 0,
    STS10: 0,
    STS11: 0,
    STS0: 0,
    IsICR: 0,
    IsIFY: 0,
    LG_T1: "1,26,26,创 新",
    LG_T2: "1,55,26,科 技",
    LG_FT: "Kaiti",
    fontFamily: "Bitstream Vera Serif Bold"
  },
  LGT1: function (t) {
    this.setData({
      LG_T1: t.detail.value
    }), SetUI(this, this.data.LG_T1, this.data.LG_T2)
  },
  LGT2: function (t) {
    this.setData({
      LG_T2: t.detail.value
    }), SetUI(this, this.data.LG_T1, this.data.LG_T2)
  },
  CheckLOGO: function (t) {
    wx.getClipboardData({
      success: function (t) {
        var e = t.data;
        e.startsWith("SetLOGO=") && (e.match(/SetLOGO=(.+)$/), Lt = RegExp.$1, Ut("已成功导入剪切板数据 点击发送生效"), console.log(Lt))
      }
    })
  },
  CMDInput: function (t) {
    4 == this.data.ShowPan && this.setData({
      STX: "预览"
    }), this.setData({
      CMD: t.detail.value
    })
  },
  Send: function () {
    var t = this.data.CMD;
    "" == t && wx.getClipboardData({
      success: function (t) {
        var e = t.data;
        if (e.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/)) wx.showModal({
          title: "是否发送剪切板中的设置代码",
          editable: !1,
          placeholderText: "",
          success: function (t) {
            t.confirm && function (t) {
              if (0 == Kt) {
                t.match(/(DataStart=[^\{]+)\{(.+)\}(DataEnd)$/);
                var e = RegExp.$2;
                (Et = [])[0] = RegExp.$1, Kt = 0;
                for (var a = 0; a < e.length; a += 252) Kt++, Et[Kt] = e.slice(a, a + 252);
                Et[Et.length] = "DataEnd", Kt = 0, Bt()
              } else Ut("有发送任务正在进行中")
            }(e)
          }
        });
        else
          for (var a = e.split("\n"), i = 0; i < a.length; i++)
            if (a[i].startsWith("SetMSG=")) s.easySendData(a[i] + "\n", !0), Ut("信息已发送");
            else if (a[i].startsWith("SetLOGO=")) {
          if (a[i].match(/SetLOGO=(.+)$/), "" != (Lt = RegExp.$1)) {
            $t("SetLOGO=S");
            for (var n = 0; n < Lt.length; n += 200) $t("SetLOGO=" + Lt.slice(n, n + 200));
            $t("SetLOGO=E"), Ut("信息已发送")
          }
        } else a[i].startsWith("Restart") && $t("Restart")
      }
    }), this.data.CMD.match(/^([^=]+)=(.+)/);
    var e = RegExp.$1,
      i = RegExp.$2;
    if (3 == this.data.ShowPan) "SetMSG" == e ? (s.easySendData(t + "\n", !0), Yt("设置已发送,重启生效!")) : (pt = this.data.CMD.toLowerCase(), jt(E, pt), $t("CheckUPWD=" + pt));
    else if (4 == this.data.ShowPan) {
      if ("预览" == this.data.STX) yt(this.data.CMD), this.setData({
        STX: "发送"
      });
      else if ("" != Lt) {
        $t("SetLOGO=S");
        for (var n = 0; n < Lt.length; n += 200) $t("SetLOGO=" + Lt.slice(n, n + 200));
        $t("SetLOGO=E"), Ut("LOGO信息已发送"), this.setData({
          CMD: "",
          STX: "发送",
          ShowPan: 1
        })
      }
    } else if (1 == this.data.ShowPan) {
      if ("系统设置" == t) t = "CheckGPWD=8888";
      else if ("重启" == t) t = "Restart", Yt("重启已发送,设备正在重启!"), wx.navigateBack({
        delta: 0
      });
      else if ("重置设置" == t) t = "Reset", Yt("重置已发送,设备正在重启!"), wx.navigateBack({
        delta: 0
      });
      else if ("关闭电源输出" == t) t = "SetPWR=0";
      else if ("清除累计数据" == t) t = "Clear";
      else if ("打开电源输出" == t) t = "SetPWR=1";
      else if ("打开按键功能" == t) t = "SetKEY=1";
      else if ("关闭按键功能" == t) t = "SetKEY=0";
      else if ("打开wifi" == t.toLowerCase()) $t("SetWIFI=1"), t = "Restart", Yt("WIFI已设置为打开,设备正在重启!"), wx.navigateBack({
        delta: 0
      });
      else if ("关闭wifi" == t.toLowerCase()) t = "SetWIFI=0", Ut("WIFI已设置为长期关闭模式\n重启生效");
      else if (t.startsWith("setgm")) {
        t = t.replace("SetGM=", "");
        var r = (new Date).getFullYear() + "-" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + "-" + (new Date).getMinutes();
        r = "Cxjdwx-GM " + r;
        var l = a.default.sha(r);
        t == l ? (Ut("管理员权限设置成功"), jt("GM", "1")) : (r = "Cxjdwx-GM " + (r = (new Date).getFullYear() + "-" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + "-" + ((new Date).getMinutes() - 1)), t == (l = a.default.sha(r)) ? (Ut("管理员权限设置成功"), jt("GM", "1")) : Ut("管理员权限设置失败"))
      } else if (t.startsWith("设置信息=")) {
        if (Pt >= 1) return $t("<C>" + (t = "Setcfg('QQ','" + t.replace("设置信息=", "") + "',1)")), $t("<C>BSend('CAN:'..Ver..' QQ:'..QQ)"), this.setData({
          CMD: ""
        }), void Ut("设置已发送")
      } else if ("LOGO" == e) {
        if (it > 1) return i = i.replace("0104", ""), this.setData({
          ShowPan: 4,
          CMD: "1,27,30," + i.substring(0, 2) + "|1,57,30," + i.substring(2)
        }), void yt(this.data.CMD);
        t = t.replace("0104", ""), s.easySendData(t + "\n", !0), t = "Restart", Yt("设置已发送,设备正在重启!"), wx.navigateBack({
          delta: 0
        })
      } else {
        if ("LOGO" == t) return this.setData({
          ShowPan: 4,
          CMD: "1,27,30,创新|1,57,30,科技"
        }), void yt(this.data.CMD);
        if ("设置输出电流" == e) i > k || i < B ? Ut("超出限制范围") : t = "SetVA=" + gt + "," + i + ",KSi";
        else if ("设置输出电压" == e) i > Y || i < _ ? Ut("超出限制范围") : t = "SetVA=" + i + "," + Ct + ",KSi,1";
        else if ("设置蓝牙名称" == e) s.easySendData("SetCFG=SSID," + function (t) {
          for (var e = 0, a = "CAN-", i = 0; i < t.length; i++)
            if (a += t[i], t[i].match(/[\u4e00-\u9fa5]/g) ? e += 3 : e++, e >= 24) return a;
          return a
        }(i) + "\n", !0), $t("GetINF"), Ut("名称已修改 重启生效");
        else if ("设置蓝牙密码" == e) t = "SetUPWD=" + i.toLowerCase(), jt(E, ""), Ut("密码已修改 重启生效");
        else if ("充满延时关机" == e) i >= 0 && i < 1200 && (t = "SetUSD=" + i);
        else if ("设置功率限制" == e) i > At || i < 100 ? Ut("超出设置范围") : t = "SetUMW=" + i;
        else if ("设置缓启时间" == e) i < 0 || i > 20 ? Ut("设置范围0-20,单位秒") : t = "SetHQ=" + i;
        else if ("设置预约时间" == e) i < 0 || i > 1200 ? Ut("设置范围0-1200") : t = "SetYS=" + i;
        else if ("设置过滤电流" == e) t = "SetCLV=" + i;
        else if ("设置二段充电" == e)
          if (t.match(/([\d\.]+)V([\d\.]+)A/)) {
            var S = Number(RegExp.$1),
              o = Number(RegExp.$2);
            0 == S || 0 == o ? t = "SetVA2=" + S + ",0" : S > Y || S < _ || o > k || o < B ? Ut("超出设置范围") : t = "SetVA2=" + S + "," + o
          } else Ut("参数设置错误");
        else if ("快速设置电压电流" == e)
          if (t.match(/([\d\.]+)V([\d\.]+)A/)) {
            var h = Number(RegExp.$1),
              f = Number(RegExp.$2);
            h > Y || h < _ || f > k || f < B ? Ut("超出设置范围") : t = "SetKS=" + h + "," + f + "," + Dt
          } else Ut("参数设置错误");
        else "系统设置" == e && (t = "CheckGPWD=" + i)
      }
      $t(t), $t("GetINF"), this.setData({
        CMD: ""
      })
    } else if (2 == this.data.ShowPan) {
      if ("设置调压范围" == e) {
        if (t.match(/([\d\.]+)-([\d\.]+)/)) t = "SetSVF=" + Number(RegExp.$1) + "," + Number(RegExp.$2)
      } else if ("修改系统密码" == e) t = "SetGPWD=" + i;
      else if ("设置最大功率" == e) t = "SetSMW=" + i;
      else if ("设置每度加速值" == e) i >= 3 && i <= 15 && (t = "SetUFS=" + i);
      else if ("设置电流加速值" == e) i >= 0 && i <= 3 && (t = "SetUFS=" + bt + "," + i);
      else if ("设置最小风速" == e) i >= 30 && i <= 120 && (t = "SetLFS=" + i);
      else if ("实际输出电压" == e)
        if (J < 10) Ut("当前电压小于10V 不能进行校正");
        else {
          var u = Number(i / J).toFixed(6),
            c = Number(i / gt).toFixed(6);
          t = "SetOVD=" + c + "," + u, Ot.includes("Increase") ? $t("SetSVF=" + (20 * c).toFixed(2) + "," + (100 * c).toFixed(2)) : Ot.includes("Huawei") ? $t("SetSVF=" + (41 * c).toFixed(2) + "," + (58.5 * c).toFixed(2)) : Ot.includes("ZTE") ? $t("SetSVF=" + (41.5 * c).toFixed(2) + "," + (59 * c).toFixed(2)) : Ot.includes("EPS") ? $t("SetSVF=" + (44 * c).toFixed(2) + "," + (61 * c).toFixed(2)) : Ot.includes("INFY")
        }
      else if ("实际输出电流" == e)
        if (tt < 5) Ut("输出电流必须大于5A且处于恒流状态");
        else {
          var D = Number(i / tt).toFixed(6);
          t = "SetOAD=" + Number(i / Ct).toFixed(6) + "," + D
        }
      else if ("实际输入电流" == e) {
        if (tt < 2) Ut("电流校正时 输入电流必须大于2A 否则不能进行校正");
        else t = "SetCFG('IAT'," + Number(i / Z).toFixed(6) + ",1)"
      } else if ("设置超温限制" == e)
        if (t.match(/([\d\.]+)℃([\d\.]+)W/)) {
          var d = Number(RegExp.$1),
            b = Number(RegExp.$2);
          d < 30 || d > 100 || b < 500 || b > 1e4 ? Ut("超出设置范围") : t = "SetUMT=" + d + "," + b
        } else Ut("参数设置错误");
      else "设置最大限流" == e ? t = "SetHSA=" + i : "重置设置" == t && (t = "Reset", Yt("重置已发送,设备正在重启!"), wx.navigateBack({
        delta: 0
      }));
      $t(t), $t("GetINF"), this.setData({
        CMD: ""
      })
    } else Ut("输入错误,参数值只允许数字")
  },
  bt1: function () {
    this.setData({
      CMD: "设置输出电压="
    }), Ut("输入需要设置的电压")
  },
  bt2: function () {
    this.setData({
      CMD: "设置预约时间=30"
    }), Ut("预约充电功能 启用后会关闭电源 单位分钟")
  },
  bt3: function () {
    this.setData({
      CMD: "设置缓启时间=15"
    }), Ut("电流缓启设置 输入0关闭缓启功能 单位秒")
  },
  bt4: function () {
    this.setData({
      CMD: "设置蓝牙名称="
    }), Ut("设置设备蓝牙名字 重启后生效")
  },
  bt5: function () {
    this.setData({
      CMD: "设置输出电流="
    }), Ut("输入需要设置的电流")
  },
  bt6: function () {
    this.setData({
      CMD: (0 == Nt ? "打开" : "关闭") + "电源输出"
    }), Ut("打开或者关闭电源输出")
  },
  bt7: function () {
    this.setData({
      CMD: "设置二段充电=" + (0 == Ft ? gt - 4 : Ft) + "V" + (0 == mt ? 10 : mt) + "A"
    }), Ut("设置0A关闭二段功能")
  },
  bt8: function () {
    this.setData({
      CMD: "设置蓝牙密码="
    }), Ut("设置用户蓝牙密码")
  },
  bt9: function () {
    this.setData({
      CMD: "设置功率限制=3000"
    })
  },
  bt10: function () {
    this.data.CMD.includes("按键功能") ? this.setData({
      CMD: "对调加减按键"
    }) : (this.setData({
      CMD: (1 == It ? "关闭" : "打开") + "按键功能"
    }), Ut("打开或者关闭按键功能"))
  },
  bt11: function () {
    this.setData({
      CMD: "充满延时关机=30"
    }), Ut("输入0关闭关机功能")
  },
  bt12: function () {
    this.setData({
      CMD: "清除累计数据"
    })
  },
  BtKS1: function () {
    this.setData({
      CMD: "快速设置电压电流=" + ht
    }), Dt = 1
  },
  BtKS2: function () {
    this.setData({
      CMD: "快速设置电压电流=" + ft
    }), Dt = 2
  },
  BtKS3: function () {
    this.setData({
      CMD: "快速设置电压电流=" + ut
    }), Dt = 3
  },
  BtKS4: function () {
    this.setData({
      CMD: "快速设置电压电流=" + ct
    }), Dt = 4
  },
  bt21: function () {
    this.setData({
      CMD: "设置调压范围=" + _ + "-" + Y
    }), Ut("请按照电压型号允许的电压范围设置")
  },
  bt22: function () {
    this.setData({
      CMD: "实际输出电压="
    }), $t("ResetOVD"), $t("GetINF")
  },
  bt23: function () {
    $t("SetDDV=1306"), $t("GetINF"), Ut("显示驱动切换需断电重启后生效")
  },
  bt24: function () {
    this.setData({
      ShowPan: 1,
      TIP: "点击需要设置的参数"
    }), $t("GetINF")
  },
  bt25: function () {
    this.setData({
      CMD: "设置最大限流="
    })
  },
  bt26: function () {
    this.setData({
      CMD: "实际输出电流="
    }), $t("ResetOAD"), $t("GetINF")
  },
  bt27: function () {
    $t("SetDDT=" + (st = 2 == st ? 0 : st + 1)), $t("GetINF"), Ut("屏幕倒转需断电重启后生效")
  },
  bt28: function () {
    this.setData({
      CMD: "重置设置"
    })
  },
  bt29: function () {
    this.setData({
      CMD: "设置最大功率="
    })
  },
  bt30: function () {
    this.setData({
      CMD: "设置超温限制=" + Wt + "℃" + Gt + "W"
    })
  },
  bt31: function () {
    this.data.CMD.startsWith("设置每度加速值") ? (this.setData({
      CMD: "设置电流加速值=1"
    }), Ut("电流每A增加PWM值\n范围0-3")) : this.data.CMD.startsWith("设置电流加速值") ? (this.setData({
      CMD: "设置最小风速=50"
    }), Ut("设置初始风速PWM值\\n范围30-120")) : (this.setData({
      CMD: "设置每度加速值=10"
    }), Ut("温度每度增加PWM值\n范围3-15"))
  },
  bt32: function () {
    this.setData({
      CMD: "修改系统密码="
    }), Ut("密码只允许数字")
  },
  onLoad: function (t) {
    Pt = 1 == t.GM ? 1 : _t("GM"), Vt = 0, wx.createSelectorQuery().select("#canvas").fields({
      node: !0,
      size: !0
    }).exec((function (t) {
      var e = t[0].node;
      l = e.getContext("2d");
      var a = wx.getSystemInfoSync().pixelRatio;
      e.width = t[0].width * a, e.height = t[0].height * a, l.scale(a, a)
    }));
    var e = this;
    e.setData({
      title: "设备连接成功",
      CKStr: "密码验证失败,请输入设备密码",
      ShowPan: 3,
      TIP: "请输入设备密码"
    }), s.onBLEConnectionStateChange((function () {
      wx.navigateBack({
        delta: 0
      })
    })), s.onBLECharacteristicValueChange((function (t, a) {
      r || t.trim().split("\n").forEach((function (t) {
        if (console.log("Msg:" + t), t.match(/Receive Data End/)) Kt = 0, Et = [], Ut("发送完成!");
        else if (t.startsWith("Receive")) Bt();
        else if (t.startsWith("CAN") && 0 == Vt)
          if (Vt = 1, Rt = Qt(t, "TAG", "Cxjdwx"), Ot = Qt(t, "CAN"), E = Qt(t, "CHIP"), V = " APP:5.13 CAN:" + Ot + " TAG:" + Rt, e.setData({
              Ver: V,
              ID: E
            }), Ot.startsWith("Increase") && e.setData({
              IsICR: 1
            }), Ot.startsWith("INFY") && e.setData({
              IsIFY: 1
            }), Pt) {
            var a = (Number(E) + 19880914).toString(16).substring(4, 8);
            $t("CheckUPWD=" + a), Ut(a)
          } else e.setData({
            CKStr: "密码验证失败,请输入设备密码"
          }), $t("CheckUPWD=" + _t(E));
        else if (t.startsWith("Admin Password Check Passed")) e.setData({
          ShowPan: 2,
          TIP: "点击需要设置的参数",
          CMD: ""
        });
        else if (t.startsWith("Admin Password Check Failed")) Ut("系统设置密码错误!");
        else if (t.startsWith("User Password Check Failed!")) e.setData({
          CMD: ""
        }), Ut("密码错误,请重试");
        else if (t.startsWith("User Password Check Passed!")) {
          if ("Cxjdwx" == Rt && !Pt) {
            var i = new Date;
            $t("SetTAG=" + i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate())
          }
          pt = "", $t("GetINF"), e.setData({
            title: "密码验证成功",
            ShowPan: 1,
            TIP: "点击需要设置的参数",
            CMD: ""
          })
        } else if (t.startsWith("Mode")) {
          var s = Qt(t, "Mode", "");
          "0" == Qt(t, "OL") ? e.setData({
            title: "CAN通讯异常"
          }) : "SP" == s ? e.setData({
            title: "充电器已关机"
          }) : "WT" == s ? e.setData({
            title: "等待接入电池"
          }) : "A" == s ? e.setData({
            title: "第一段充电中"
          }) : "B" == s ? e.setData({
            title: "第二段充电中"
          }) : "T" == s ? e.setData({
            title: "预约等待中"
          }) : "C" == s ? e.setData({
            title: "充电完成"
          }) : "S" == s && e.setData({
            title: "充电完成(已关机)"
          }), l.clearRect(0, 0, y, 300), l.font = "normal normal 15px sans-serif", q = Number(Qt(t, "OW")), z = Number(Qt(t, "IW")), j = Qt(t, "SDT"), X = Qt(t, "NFS"), J = Number(Qt(t, "OV")), tt = Number(Qt(t, "OA")), Z = Number(Qt(t, "IA")), St = Number(Qt(t, "SWT", "0")), lt = Number(Qt(t, "SMT", "0")), nt = Qt(t, "SOC", "100"), et = Number(Qt(t, "IV", "0")), Ot.startsWith("ZTE") && (z = (Z *= H) * H), 0 != z && 0 != et && (Z = z / et);
          var n = 0,
            r = 0;
          z > 0 && (n = q / z * 100, r = z - q);
          var K = ["输入电压", "输入电流", "输入功率", "输入温度", "转换效率", "本次充电", "本次电量", "本次时间"],
            Q = ["输出电压", "输出电流", "输出功率", "输出温度", "转换损耗", "累计充电", "累计电量", "累计时间"],
            at = [et, Z, z, "IT", n, "AH", "WH", "Ti"],
            rt = [J, tt, q, "OT", r, "MAH", "MWH", "MTi"],
            ot = ["V", "A", "W", "℃", "%", "Ah", "Wh", ""],
            dt = ["V", "A", "W", "℃", "W", "Ah", "Wh", ""],
            Mt = y / 2,
            vt = 25;
          if (l.strokeStyle = "#eee", l.moveTo(0, 0), l.lineTo(y, 0), l.moveTo(Mt, 0), l.lineTo(Mt, 300), 1 == e.data.IsICR) {
            var Lt = Qt(t, "ST0", "0"),
              yt = Qt(t, "ST1", "0");
            Lt = qt(Number(Lt).toString(2), 8), yt = qt(Number(yt).toString(2), 8), e.setData({
              STS0: Lt.charAt(7),
              STS1: Lt.charAt(6),
              STS2: Lt.charAt(5),
              STS3: Lt.charAt(4),
              STS4: Lt.charAt(3),
              STS5: Lt.charAt(2),
              STS6: Lt.charAt(1),
              STS7: Lt.charAt(0),
              STS8: yt.charAt(7),
              STS9: yt.charAt(6),
              STS10: yt.charAt(5)
            })
          }
          if (1 == e.data.IsIFY) {
            var Ht = Qt(t, "ST0", "0"),
              Yt = Qt(t, "ST1", "0"),
              jt = Qt(t, "ST2", "0");
            Ht = qt(Number(Ht).toString(2), 8), Yt = qt(Number(Yt).toString(2), 8), jt = qt(Number(jt).toString(2), 8), e.setData({
              STS0: Yt.charAt(7),
              STS1: Yt.charAt(6),
              STS2: Yt.charAt(5),
              STS3: Yt.charAt(4),
              STS4: jt.charAt(1),
              STS5: jt.charAt(2),
              STS6: Yt.charAt(2),
              STS7: jt.charAt(4),
              STS8: jt.charAt(7),
              STS9: Yt.charAt(3),
              STS10: Ht.charAt(2),
              STS11: Ht.charAt(7)
            })
          }
          e.setData({
            SOC: nt
          }), o[5] = "T" == s ? Qt(t, "Ti", "") : "", b[5] = q.toFixed(2), R[5] = X, T[5] = 0 == xt ? "关闭" : j, kt([T, b, R, o]);
          for (var Xt = 0; Xt < 8; Xt++) {
            l.fillStyle = "#2222ff", l.textAlign = "left", l.fillText(K[Xt], 5, Xt * vt + 22), l.fillText(Q[Xt], Mt + 5, Xt * vt + 22), l.moveTo(0, Xt * vt + 29), l.lineTo(y, Xt * vt + 29), l.fillStyle = "#ffa000", l.textAlign = "right";
            var zt = "string" == typeof at[Xt] ? Number(Qt(t, at[Xt])) : at[Xt],
              Zt = "string" == typeof rt[Xt] ? Number(Qt(t, rt[Xt])) : rt[Xt];
            "Ti" == at[Xt] ? (zt = Qt(t, at[Xt]), Zt = Qt(t, rt[Xt])) : (zt = zt.toFixed(2), Zt = Zt.toFixed(2)), l.fillText(zt, Mt - 30, Xt * vt + 22), l.fillText(Zt, y - 30, Xt * vt + 22), l.fillStyle = "#aaaaaa", l.fillText(ot[Xt], Mt - 2, Xt * vt + 22), l.fillText(dt[Xt], y - 2, Xt * vt + 22), l.stroke()
          }
        } else t.startsWith("USV=") ? (Dt = Number(Qt(t, "KSV", "1")), Wt = Number(Qt(t, "UMT", "75")), Gt = Number(Qt(t, "TMW", "3000")), bt = Number(Qt(t, "UFS", "0")), Number(Qt(t, "AJH", "0")), Ct = Number(Qt(t, "USA", tt)), Tt = Number(Qt(t, "UMW", "0")), gt = Number(Qt(t, "USV", J)), Number(Qt(t, "FON", 0)), Number(Qt(t, "SPM", "0")), mt = Number(Qt(t, "SA2", "0")), xt = Number(Qt(t, "SD", "0")), Nt = Number(Qt(t, "PON", "0")), At = Number(Qt(t, "SMW", "0")), wt = Number(Qt(t, "HQ", "0")), Ft = Number(Qt(t, "SV2", "0")), Number(Qt(t, "LFS", "0")), Y = Number(Qt(t, "HSV", "100")), B = Number(Qt(t, "LSA", "1")), k = Number(Qt(t, "HSA", "35")), It = Number(Qt(t, "KON", "1")), _ = Number(Qt(t, "LSV", "20")), Number(Qt(t, "FMT", "45")), Number(Qt(t, "FMW", "1500")), U = Number(Qt(t, "OVT", "0")), $ = Number(Qt(t, "OAT", "0")), Number(Qt(t, "OVD", "0")), H = Number(Qt(t, "OAD", "0")), S[2] = gt, h[2] = wt, u[2] = Ct, D[2] = mt, O[2] = Wt + "°C", b[2] = Tt, R[2] = bt, T[2] = xt, S[5] = _ + "-" + Y, A[5] = _ + "-" + Y, u[5] = B + "-" + k, h[5] = 0 == wt ? "关闭" : "开启", C[5] = 0 == It ? "关闭" : "开启", c[5] = 0 == Nt ? "关机" : "开机", D[5] = 0 == mt ? "关闭" : Ft, O[5] = Gt + "W", b[4] = At, T[5] = 0 == xt ? "关闭" : 60 * xt, kt([S, o, h, f, u, c, D, d, b, C, T, g])) : t.startsWith("KS1=") && (Number(Qt(t, "DSP", "0")), Number(Qt(t, "DR", "0")), st = Number(Qt(t, "DDT", "0")), Number(Qt(t, "ZTE", "0")), Number(Qt(t, "HW", "0")), it = Number(Qt(t, "DDV", "1")), Number(Qt(t, "ICR", "0")), ht = Qt(t, "KS1", "58.8,15").replace(",", "V") + "A", ft = Qt(t, "KS2", "67.2,15").replace(",", "V") + "A", ut = Qt(t, "KS3", "71.4,15").replace(",", "V") + "A", ct = Qt(t, "KS4", "84,15").replace(",", "V") + "A", A[4] = S[4], w[5] = U, F[5] = 1 == it ? "IIC1306" : 0 == it ? "IIC1106" : 2 == it ? "ST7789" : "GC9107", I[5] = k, W[5] = $, G[5] = "方向" + st, P[5] = At, O[4] = C[4], m[5] = ht, x[5] = ft, M[5] = ut, N[5] = ct, kt([A, w, F, v, I, W, G, p, P, O, R, L, m, x, M, N]))
      }))
    }))
  },
  onUnload: function () {
    s.onBLEConnectionStateChange((function () {})), s.closeBLEConnection()
  },
  onShow: function () {
    r = 0, console.log("Show")
  },
  onHide: function () {
    r = 1, console.log("Hide")
  }
});

function Ut(t) {
  wx.showToast({
    title: t,
    icon: "none",
    duration: 2e3
  })
}

function $t(t) {
  return Ht.apply(this, arguments)
}

function Ht() {
  return (Ht = e(t().mark((function e(a) {
    return t().wrap((function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          return t.next = 2, s.easySendData(a + "\n", !1);
        case 2:
        case "end":
          return t.stop()
      }
    }), e)
  })))).apply(this, arguments)
}

function Qt(t, e, a) {
  return t.match(e + "[=:]([^ ]+)") ? RegExp.$1 : null == a ? 0 : a
}

function Yt(t) {
  wx.showModal({
    title: "MSG",
    content: t,
    showCancel: !1
  })
}

function _t(t) {
  return wx.getStorageSync(t)
}

function jt(t, e) {
  wx.setStorageSync(t, e)
}

function qt(t, e) {
  return (Array(e).join(0) + t).slice(-e)
}
wx.getSystemInfo({
  success: function (t) {
    y = t.windowWidth
  }
});