var s = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  f = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes");
var a = t(require("../../8E6659B59E166AAFE80031B2CF74AA85.js")),
  e = t(require("../../B312FEA69E166AAFD57496A1D194AA85.js"));

function t(s) {
  return s && s.__esModule ? s : {
    default: s
  }
}
var u = require("../../C2110F759E166AAFA47767728C64AA85.js"),
  d = "3.48",
  i = null,
  r = ["#bt1", "设置电压", "NV", "V", "", ""],
  l = ["#bt2", "预约开机", "", "", "", ""],
  n = ["#bt3", "缓启设置", "", "S", "", ""],
  o = ["#bt4", "按键设置", "", "", "", ""],
  c = ["#bt5", "设置电流", "NA", "A", "", ""],
  b = ["#bt6", "开关电源", "", "", "", ""],
  m = ["#bt7", "二段设置", "", "A", "", ""],
  x = ["#bt8", "超温限制", "", "", "", ""],
  z = ["#bt9", "功率限制", "MW", "W", "", ""],
  y = ["#bt10", "设置风速", "FS", "", "", ""],
  k = ["#bt11", "延时关机", "", "M", "", ""],
  h = ["#bt12", "累计清零", "", "", "", ""],
  I = ["#BtKS1", "快速设置", "", "串", "", ""],
  p = ["#BtKS2", "快速设置", "", "串", "", ""],
  g = ["#BtKS3", "快速设置", "", "串", "", ""],
  S = ["#BtKS4", "快速设置", "", "串", "", ""],
  w = ["#bt21", "最大电压", "", "", "", ""],
  P = ["#bt22", "电压校正", "", "", "", ""],
  C = ["#bt23", "屏幕驱动", "", "", "", ""],
  v = ["#bt24", "返回上级", "", "", "", ""],
  D = ["#bt25", "最大电流", "", "", "", ""],
  _ = ["#bt26", "电流校正", "", "", "", ""],
  F = ["#bt27", "屏幕方向", "", "", "", ""],
  T = ["#bt28", "固件更新", "", "", "", ""],
  N = ["#bt29", "功率限制", "", "", "", ""],
  M = ["#bt30", "重置设置", "", "", "", ""],
  B = ["#bt31", "协议切换", "", "", "", ""],
  A = ["#bt32", "修改密码", "", "", "", ""],
  W = "APP:1.0",
  G = 8888,
  V = 0,
  q = null,
  E = [null],
  Y = E[0],
  R = E[1],
  j = E[4],
  O = E[6],
  K = E[7],
  $ = E[8],
  L = E[10],
  J = [null],
  X = J[0],
  H = J[1],
  Q = J[2],
  Z = J[3],
  U = J[4],
  ss = J[5],
  fs = J[6],
  as = J[7],
  es = J[8],
  ts = J[9],
  us = [null],
  ds = us[0],
  is = us[1],
  rs = us[2],
  ls = us[3],
  ns = us[4],
  os = us[5],
  cs = us[6],
  bs = [null],
  ms = bs[0],
  xs = bs[1],
  zs = bs[2],
  ys = bs[3],
  ks = bs[4],
  hs = bs[5],
  Is = bs[6],
  ps = bs[7],
  gs = bs[8],
  Ss = [null],
  ws = Ss[1],
  Ps = Ss[3],
  Cs = Ss[4],
  vs = Ss[5],
  Ds = Ss[8],
  _s = Ss[9],
  Fs = [null],
  Ts = Fs[0],
  Ns = (j = Fs[1], Fs[2]),
  Ms = Fs[3],
  Bs = (ds = Fs[5], is = Fs[6], os = Fs[7], [null]),
  As = (ns = Bs[0], ls = Bs[1], rs = Bs[2], Bs[3]),
  Ws = Bs[4],
  Gs = Bs[7],
  Vs = Bs[8],
  qs = Bs[9],
  Es = 0,
  Ys = d,
  Rs = "Cxjdwx";

function js(s) {
  for (var f = function (f) {
      wx.createSelectorQuery().select(s[f][0]).fields({
        node: true,
        size: true
      }).exec((function (a) {
        var e = a[0].node,
          t = e.getContext("2d"),
          u = wx.getSystemInfoSync().pixelRatio;
        e.width = a[0].width * u, e.height = a[0].height * u, t.scale(u, u), t.font = "normal bold 16px PingFangSC-Regular", t.fillStyle = "#ff9900", t.textAlign = "center", t.fillText(s[f][1], a[0].width / 2, 27), t.font = "normal bold 9px PingFangSC-Regular", t.textAlign = "left", t.fillStyle = "#22aa22", t.fillText(s[f][2] + s[f][3], 3, 9), t.textAlign = "right", t.fillStyle = "#dd0000", "" != s[f][4] && t.fillText(s[f][4], a[0].width - 3, 9), t.textAlign = "center", t.fillStyle = "#cc0088", "" != s[f][5] && t.fillText(s[f][5], a[0].width / 2, a[0].height - 3), t.strokeStyle = "#eee", t.rect(0, 0, a[0].width, a[0].height), t.stroke()
      }))
    }, a = 0; a < s.length; a++) f(a)
}
Page({
  data: {
    title: "设备连接失败,点击重试",
    text: "",
    CMD: "",
    ShowPan: 1,
    Ver: " APP:3.48 CAN:Unknown",
    TIP: "点击需要设置参数",
    CKStr: "设备认证失败,请输入设备认证码",
    SOC: 100,
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
    STS0: 0,
    IsICR: 0,
    fontFamily: "Bitstream Vera Serif Bold"
  },
  CMDInput: function (s) {
    this.setData({
      CMD: s.detail.value
    })
  },
  Send: function () {
    var s = this;
    this.data.CMD.match(/^([^=]+)=([\d\.]+)/);
    var f = RegExp.$1,
      t = RegExp.$2,
      u = this.data.CMD;
    if (3 == this.data.ShowPan)
      if ("打开WIFI" == u) u = "Dofile('Wifi.lua')";
      else if (u.startsWith("0x")) {
      a.default.hex_md5("Check" + u + "@t*s$e#T.'1)`").match(/(........)$/), 1 == Es && wx.setClipboardData({
        data: RegExp.$1
      })
    } else "重置设置" == u ? (u = "CFile.remove('Huawei.inf');CFile.remove('ZTE.inf');CFile.remove('Increase.inf');CXJDWX.restart()", ff("重置已发送,设备正在重启!"), wx.navigateBack({
      delta: 0
    })) : Zs('<C>print("Reg=' + this.data.CMD + ' Key="..CXJDWX.chipid())');
    else if (1 == this.data.ShowPan) {
      if ("系统设置" == u) Es >= 1 && this.setData({
        ShowPan: 2
      });
      else {
        if (u.startsWith("<C>")) return Zs(u), void Zs("<C>GetINF()");
        if (u.startsWith("0x")) af(u, 1, this);
        else if ("对调加减按键" == u) u = "SetCFG('KUP',KUP==2 and 15 or 2,1)";
        else if ("重启" == u) u = "CXJDWX.restart()", ff("重启已发送,设备正在重启!"), wx.navigateBack({
          delta: 0
        });
        else if ("重置设置" == u) u = "CFile.remove('Huawei.inf');CFile.remove('ZTE.inf');CFile.remove('Increase.inf');CXJDWX.restart()", ff("重置已发送,设备正在重启!"), wx.navigateBack({
          delta: 0
        });
        else if ("清除累计数据" == u) u = "SetCFG('MAH',0);SetCFG('MWH',0);SetCFG('MTi',0,1)";
        else if ("关闭电源输出" == u) u = "TurnON(1)";
        else if ("关机息屏" == u) u = "SetCFG('SDP',1,1)", Qs("屏幕已设置为关机后息灭");
        else if ("关机亮屏" == u) u = "SetCFG('SDP',0,1)", Qs("屏幕已设置为关机后常亮");
        else if ("打开电源输出" == u) u = "Mode='WT';YS=0;TurnON(0)";
        else if ("打开WIFI" == u) u = "Setcfg('WFi',1,1);CXJDWX.restart()", ff("WIFI已设置为打开,设备正在重启!"), wx.navigateBack({
          delta: 0
        });
        else if ("关闭WIFI" == u) u = "Setcfg('WFi',0,1)", Qs("WIFI已设置为长期关闭模式\n重启生效");
        else if ("打开按键功能" == u) u = "SetCFG('KEY',1,1)";
        else if ("关闭按键功能" == u) u = "SetCFG('KEY',0,1)", wx.showModal({
          title: "提示",
          content: "是否录入按键解锁?",
          success: function (s) {
            s.confirm && (Qs("请在10秒内录入解锁按键"), u = "SetCFG('KEY',0,1);RegKey(10)")
          }
        });
        else if (u.startsWith("SetGM")) {
          u = u.replace("SetGM=", "");
          var d = (new Date).getFullYear() + "-" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + "-" + (new Date).getMinutes();
          d = "Cxjdwx-GM " + d;
          var i = e.default.sha(d);
          u == i ? (Qs("管理员权限设置成功"), tf("GM", "1")) : (d = "Cxjdwx-GM " + (d = (new Date).getFullYear() + "-" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + "-" + ((new Date).getMinutes() - 1)), i = e.default.sha(d), u == i ? (Qs("管理员权限设置成功"), tf("GM", "1")) : Qs("管理员权限设置失败"))
        } else if (u.startsWith("设置信息=")) {
          if (Es >= 1) return Zs("<C>" + (u = "Setcfg('QQ','" + u.replace("设置信息=", "") + "',1)")), Zs("<C>BSend('CAN:'..Ver..' QQ:'..QQ)"), this.setData({
            CMD: ""
          }), void Qs("设置已发送")
        } else {
          if ("LOGO" == f) {
            if (t = u.match(/=(0\d\d\d[\u4e00-\u9fa5\w]{4,6})$/), console.log(t), null != t) t = RegExp.$1, wx.createSelectorQuery().select("#myCanvas").fields({
              node: true,
              size: true
            }).exec((function (f) {
              var a = f[0].node,
                e = a.getContext("2d");
              a.width = 16, a.height = 16, e.scale(2, 2), e.font = "normal bold 8px SimSun", e.fillStyle = "#fff";
              for (var u = [t.slice(0, 2), t.slice(2, 4), t.slice(4)], d = u[0], i = u[1], r = u[2], l = "", n = "", o = 0; o < r.length; o += 1) {
                e.clearRect(0, 0, 16, 16), e.fillText(r.charAt(o), 0, 7);
                for (var c = "", b = "", m = "", x = "", z = 0; z < 16; z += 1) {
                  for (var y = 0; y < 16; y += 1) {
                    var k = e.getImageData(y, z, 1, 1).data;
                    y > 7 ? b = (k[3] < 140 ? "0" : "1") + b : c = (k[3] < 140 ? "0" : "1") + c
                  }
                  m = m + "0x" + parseInt(Number(c), 2).toString(16) + ",", c = "", m = m + "0x" + parseInt(Number(b), 2).toString(16) + ",", b = ""
                }
                for (var h = 15; h > -1; h -= 1) {
                  for (var I = 15; I > -1; I -= 1) {
                    var p = e.getImageData(I, h, 1, 1).data;
                    I > 7 ? c = (p[3] < 140 ? "0" : "1") + c : b = (p[3] < 140 ? "0" : "1") + b
                  }
                  x = x + "0x" + parseInt(Number(c), 2).toString(16) + ",", c = "", x = x + "0x" + parseInt(Number(b), 2).toString(16) + ",", b = ""
                }
                l = l + "Tx" + (o + 1) + "=string.char(" + m.slice(0, -1) + ")\n", n = n + "Tx" + (r.length - o) + "=string.char(" + x.slice(0, -1) + ")\n"
              }
              var g = 11,
                S = 41,
                w = 71,
                P = 101,
                C = 0,
                v = 0;
              5 == r.length && (g = 6, S = 31, w = 56, P = 81, C = 106), 6 == r.length && (g = 3, S = 24, w = 45, P = 66, C = 87, v = 108);
              var D = "<S>Logo.run\nVT=" + Number(i) + ";if SR==0 then\n" + l + "else\n" + n + "end ";
              D = (D = (D = (D = (D += "function ShowLogo(disp) disp:clearBuffer()\n") + "disp:drawXBM(" + g + ",(SR==0 and 25 or 30),16,16,Tx1)\n") + "disp:drawXBM(" + S + ",(SR==0 and 25 or 30),16,16,Tx2)\n") + "disp:drawXBM(" + w + ",(SR==0 and 25 or 30),16,16,Tx3)\n") + "disp:drawXBM(" + P + ",(SR==0 and 25 or 30),16,16,Tx4)\n", 0 != C && (D = D + "disp:drawXBM(" + C + ",(SR==0 and 25 or 30),16,16,Tx5)\n"), 0 != v && (D = D + "disp:drawXBM(" + v + ",(SR==0 and 25 or 30),16,16,Tx6)\n"), "01" == d && (D += "disp:drawStr((SR==0 and 80 or 50),(SR==0 and 63 or 5),'Ver:'..Ver:match('-(.+)'))\n"), Ls = 0, Ks = 0, Os = [], Js = 0;
              var _ = (D += "disp:sendBuffer();end|<E>Logo.run").replace(/\n/g, "|<W>");
              Os[Os.length] = _.split("|"), Js += Os[Os.length - 1].length, Xs(s), Qs("正在发送设置参数")
            }));
            else Qs("设置参数错误");
            return this.setData({
              CMD: ""
            }), void(u = "")
          }
          if ("设置输出电流" == f) t > Y || t < 1 ? Qs("超出限制范围") : u = "SetVA(SV," + t + ",KSi,1)";
          else if ("设置输出电压" == f) t > (0 == R ? X : R) || t < (L < H ? L : H) ? Qs("超出限制范围") : u = "SetVA(" + t + ",SA,KSi,1)";
          else if ("设置PWM加速值" == f) t > 1 && t <= 35 && (u = 'SetCFG("FS",' + t + ",1)");
          else if ("设置最小风速" == f) t >= 300 && t <= 800 && (u = 'SetCFG("MFs",' + t + ",1);SetFan(0)");
          else if ("充满延时关机" == f) t >= 0 && t < 1200 && (u = 'SetCFG("SD",' + t + ",1);SDT=SD*60");
          else if ("设置功率限制" == f) t > j || t < 100 ? Qs("超出设置范围") : u = 'SetCFG("MW",' + t + ",1)";
          else if ("设置缓启时间" == f) t < 0 || t > 60 ? Qs("设置范围0-60") : u = 'SetCFG("HQ",' + t + ",1)";
          else if ("设置预约时间" == f) t < 0 || t > 1200 ? Qs("设置范围0-1200") : u = "Mode='T';YS=" + 60 * t;
          else if ("设置过滤电流" == f) u = "SetCFG('CLV'," + t + ",1)";
          else if ("设置二段充电" == f)
            if (u.match(/([\d\.]+)V([\d\.]+)A/)) {
              var r = Number(RegExp.$1),
                l = Number(RegExp.$2);
              r > (R > X ? X : R) || r < (L < H ? L : H) || l > Y ? Qs("超出设置范围") : u = "SetCFG('GV'," + r + ");SetCFG('SA2'," + l + ",1)"
            } else Qs("参数设置错误");
          else if ("最低电压" == f) u = "SetCFG('DBL'," + t + ",1)";
          else if ("设置超温限制" == f)
            if (u.match(/([\d\.]+)C([\d\.]+)W/)) {
              var n = Number(RegExp.$1),
                o = Number(RegExp.$2);
              n < 50 || n > 150 || o < 500 || o > 1e4 ? Qs("超出设置范围") : u = "SetCFG('TMC'," + n + ");SetCFG('TMW'," + o + ",1)"
            } else Qs("参数设置错误");
          else if ("快速设置电压电流" == f)
            if (u.match(/([\d\.]+)V([\d\.]+)A([\d\.]+)[串S]/)) {
              var c = Number(RegExp.$1),
                b = Number(RegExp.$2),
                m = Number(RegExp.$3);
              c > (R > X ? X : R) || c < (L < H ? L : H) || b > Y || b < 1 ? Qs("超出设置范围") : u = (u = "SetVA(" + c + "," + b + "," + gs + ",1)") + ";SetCFG('DC" + gs + "'," + m + ",1);DCA[" + gs + "]=" + m
            } else Qs("参数设置错误");
          else "系统设置" == f && (u = 'print("PWD="..(PWD or "18888"))', G = "1" + t)
        }
      }
      Zs("<C>" + u), Zs("<C>GetINF()"), this.setData({
        CMD: ""
      })
    } else if (2 == this.data.ShowPan) {
      if ("设置最高限压" == f) u = 'SetCFG("LSV",' + t + ",1)";
      else if (u.startsWith("升级码=")) u = "Unlock('" + u.replace("升级码=", "") + "')";
      else if ("设置最低限压" == f) u = 'SetCFG("MSV",' + t + ",1)";
      else if ("强制升级" == u);
      else if ("修改密码" == f) u = 'Setcfg("PWD","' + G + '",1)', G = "1" + t;
      else if ("设置最大功率" == f) u = 'SetCFG("LMW",' + t + ",1)";
      else if ("实际输出电压" == f)
        if (as < 10) Qs("当前电压小于10V 不能进行校正");
        else {
          var x = Number(t / as).toFixed(6),
            z = Number(t / vs).toFixed(6);
          Ys.includes("Increase") ? u = "SetCFG('OVT'," + x + ");SetCFG('OVD'," + z + ");SetCFG('LSV'," + (100 * z).toFixed(2) + ");SetCFG('MSV'," + (20 * z).toFixed(2) + ",1)" : Ys.includes("Huawei") ? u = "SetCFG('OVT'," + x + ");SetCFG('OVD'," + z + ");SetCFG('LSV'," + (58.5 * z).toFixed(2) + ");SetCFG('MSV'," + (41 * z).toFixed(2) + ",1);Set.OV[3]=" + 1024 / x : Ys.includes("ZTE") && (u = "SetCFG('OVT'," + x + ");SetCFG('OVD'," + z + ");SetCFG('LSV'," + (59 * z).toFixed(2) + ");SetCFG('MSV'," + (41.5 * z).toFixed(2) + ",1)")
        }
      else if ("实际输出电流" == f)
        if (es < 5) Qs("输出电流必须大于5A且处于恒流状态");
        else {
          var y = Number(t / es).toFixed(6),
            k = Number(t / Ps).toFixed(6);
          u = "SetCFG('OAT'," + y + ");SetCFG('OAD'," + k + ",1);Set.OA[3]=" + 1024 / y
        }
      else if ("实际输入电流" == f)
        if (fs < 2) Qs("电流校正时 输入电流必须大于2A 否则不能进行校正");
        else {
          var h = Number(t / fs).toFixed(6);
          u = "SetCFG('IAT'," + h + ",1)"
        }
      else "设置最大限流" == f ? u = 'SetCFG("LSA",' + t + ",1)" : "重置设置" == u && (u = "CFile.remove('Huawei.inf');CFile.remove('ZTE.inf');CFile.remove('Increase.inf');CXJDWX.restart()", ff("重置已发送,设备正在重启!"), wx.navigateBack({
        delta: 0
      }));
      Zs("<C>" + u), Zs("<C>GetINF()"), this.setData({
        CMD: ""
      })
    } else Qs("输入错误,参数值只允许数字")
  },
  bt1: function () {
    this.setData({
      CMD: "设置输出电压="
    }), Qs("输入需要设置的电压")
  },
  bt2: function () {
    this.setData({
      CMD: "设置预约时间=30"
    }), Qs("预约充电功能 启用后会关闭电源 单位分钟")
  },
  bt3: function () {
    this.setData({
      CMD: "设置缓启时间=15"
    }), Qs("电流缓启设置 输入0关闭缓启功能 单位秒")
  },
  bt4: function () {
    this.data.CMD.includes("按键功能") ? this.setData({
      CMD: "对调加减按键"
    }) : (this.setData({
      CMD: (1 == As ? "关闭" : "打开") + "按键功能"
    }), Qs("打开或者关闭按键功能"))
  },
  bt5: function () {
    this.setData({
      CMD: "设置输出电流="
    }), Qs("输入需要设置的电流")
  },
  bt6: function () {
    this.setData({
      CMD: (0 == Ts ? "关闭" : "打开") + "电源输出"
    }), Qs("打开或者关闭电源输出")
  },
  bt7: function () {
    this.setData({
      CMD: "设置二段充电=" + Ms + "V" + Ds + "A"
    }), Qs("设置0A关闭二段功能")
  },
  bt8: function () {
    this.setData({
      CMD: "设置超温限制=" + Gs
    })
  },
  bt9: function () {
    this.setData({
      CMD: "设置功率限制=3000"
    })
  },
  bt10: function () {
    this.data.CMD.startsWith("设置PWM加速值") ? this.setData({
      CMD: "设置最小风速=500"
    }) : this.setData({
      CMD: "设置PWM加速值=20"
    }), Qs("每升温一度风速PWM\n范围1-35")
  },
  bt11: function () {
    this.setData({
      CMD: "充满延时关机=30"
    }), Qs("输入0关闭关机功能")
  },
  bt12: function () {
    this.setData({
      CMD: "清除累计数据"
    })
  },
  BtKS1: function () {
    this.setData({
      CMD: "快速设置电压电流=" + ms + ks + "串"
    }), gs = 1
  },
  BtKS2: function () {
    this.setData({
      CMD: "快速设置电压电流=" + xs + hs + "串"
    }), gs = 2
  },
  BtKS3: function () {
    this.setData({
      CMD: "快速设置电压电流=" + zs + Is + "串"
    }), gs = 3
  },
  BtKS4: function () {
    this.setData({
      CMD: "快速设置电压电流=" + ys + ps + "串"
    }), gs = 4
  },
  bt21: function () {
    this.data.CMD.startsWith("设置最高限压") ? (this.setData({
      CMD: "设置最低限压="
    }), Qs("设置最低限制电压")) : (this.setData({
      CMD: "设置最高限压="
    }), Qs("设置最高限制电压"))
  },
  bt22: function () {
    this.setData({
      CMD: "实际输出电压="
    }), Zs("<C>OVT=1;OVD=1;Set.OV[3]=1024"), W.match("[中华]") || W.match("Huawei") || W.match("ZTE") ? Zs("<C>SetVA(55,SA,KSi)") : Zs("<C>SetVA(SV,SA,KSi)"), Zs("<C>GetINF()")
  },
  bt23: function () {
    1 == os ? (Zs("<C>SetDV(" + (1 - rs) + ")"), Zs("<C>GetINF()"), Qs("显示驱动切换需断电重启后生效")) : Qs("此为无屏版 未解锁此功能\n" + q)
  },
  bt24: function () {
    this.setData({
      ShowPan: 1,
      TIP: "点击需要设置的参数"
    }), Zs("<C>Setcfg('CAN',1,1)"), Zs("<C>GetINF()")
  },
  bt25: function () {
    this.setData({
      CMD: "设置最大限流="
    })
  },
  bt26: function () {
    this.setData({
      CMD: "实际输出电流="
    }), Zs("<C>OAT=1;OAD=1;Set.OA[3]=1024"), Zs("<C>GetINF()")
  },
  bt27: function () {
    1 == os ? (Zs("<C>SetSR(" + (ls = 2 == ls ? 0 : ls + 1) + ");disp:setFontDirection(SR)"), Zs("<C>GetINF()"), Qs("屏幕倒转需断电重启后生效")) : Qs("此为无屏版 未解锁此功能\n" + q)
  },
  bt28: function () {
    var s = Number(Ys.match(/-([\d\.]+)/)[1]);
    if (s < 3.37) ff("当前固件版本过低 需要用WIFI安卓APP升级！");
    else if ("强制升级" == this.data.CMD) this.setData({
      ShowPan: 4
    }), Hs();
    else {
      if (s >= Number(d)) return void ff("当前固件已是最新版本！");
      this.setData({
        ShowPan: 4
      }), Hs()
    }
  },
  bt29: function () {
    this.setData({
      CMD: "设置最大功率="
    })
  },
  bt30: function () {
    this.setData({
      CMD: "重置设置"
    })
  },
  bt31: function () {
    ds + is + Ws > 1 ? (Zs("<C>SetDR(" + (0 == ns ? 1 : 1 == ns ? 2 : 0) + ")"), Zs("<C>GetINF()"), Qs("协议切换需断电重启后生效")) : Qs("此为单协议版 未解锁此功能\n" + q)
  },
  bt32: function () {
    this.setData({
      CMD: "修改密码="
    }), Qs("密码只允许数字")
  },
  Check5: function () {
    Es >= 2 && (this.setData({
      ShowPan: 4
    }), Hs())
  },
  onLoad: function (s) {
    Es = 1 == s.GM ? 1 : ef("GM"), wx.createSelectorQuery().select("#canvas").fields({
      node: true,
      size: true
    }).exec((function (s) {
      var f = s[0].node;
      i = f.getContext("2d");
      var a = wx.getSystemInfoSync().pixelRatio;
      f.width = s[0].width * a, f.height = s[0].height * a, i.scale(a, a)
    }));
    var f = this;
    f.setData({
      title: "设备连接成功",
      CKStr: "设备认证失败,请输入设备认证码",
      ShowPan: 3,
      TIP: "输入认证码"
    }), u.onBLEConnectionStateChange((function () {
      wx.navigateBack({
        delta: 0
      })
    })), u.onBLECharacteristicValueChange((function (s, t) {
      s.trim().split("\n").forEach((function (s) {
        if (console.log("Msg:" + s), s.match(/(<R><S>|<R><W>)/)) Xs(f);
        else if (s.startsWith("<R><E>")) {
          if ($s < Os.length - 1) $s += 1, Ks = 0, Xs(f);
          else null == s.match("Logo.run") ? (Zs("<C>CFile.rename('UPData.UP','UPData');CXJDWX.restart()"), ff("固件升级完成，设备正在重启!"), wx.navigateBack({
            delta: 0
          })) : (Zs("<C>CFile.remove('Logo.run');CFile.rename('Logo.run.UP','Logo.run');CXJDWX.restart()"), ff("开机Logo设置完成，设备正在重启!"), wx.navigateBack({
            delta: 0
          }))
        } else if (s.startsWith("CK")) setTimeout((function () {
          Zs(e.default.sha(s + "@t*s$e#T.'1)`"))
        }), 200);
        else if (s.startsWith("CAN")) Rs = sf(s, "QQ", "Cxjdwx"), Ys = sf(s, "CAN"), W = " APP:3.48 CAN:" + Ys + " TAG:" + Rs, f.setData({
          Ver: W
        });
        else if (s.startsWith("CheckOK")) Zs("<C>print('CHIP=0 Key='..CXJDWX.chipid())");
        else if (s.startsWith("Reg")) {
          var t = sf(s, "Reg", "1");
          af(q = sf(s, "Key"), t, f)
        } else if (s.startsWith("PWD")) G == sf(s, "PWD") ? f.setData({
          ShowPan: 2,
          TIP: "输入0取消限制",
          CMD: ""
        }) : Qs("密码错误,请重试");
        else if (s.startsWith("CHIP")) q = sf(s, "Key", "1"), f.setData({
          CKStr: "设备认证失败,请输入设备认证码\n" + q
        }), rf = q, lf = a.default.hex_md5("Check" + rf + "@t*s$e#T.'1)`"), lf = e.default.sha(lf), ef("CFG").match(lf) || 1 == Es ? (f.setData({
          title: "设备认证成功",
          ShowPan: 1,
          TIP: "点击需要设置的参数"
        }), 1 == Es ? (a.default.hex_md5("Check" + q + "@t*s$e#T.'1)`").match(/(....)$/), Zs("<C>GetINF()"), Qs("设备认证成功" + RegExp.$1)) : (Zs("<C>GetINF()"), Qs("设备认证成功"))) : (f.setData({
          title: "设备认证失败"
        }), Qs("设备认证失败\n" + q));
        else if (s.startsWith("Mode")) {
          var u = sf(s, "Mode", "");
          "0" == sf(s, "OL") ? f.setData({
            title: "CAN通讯异常"
          }) : "SP" == u ? f.setData({
            title: "充电器已关机"
          }) : "WT" == u ? f.setData({
            title: "等待接入电池"
          }) : "A" == u ? f.setData({
            title: "第一段充电中"
          }) : "B" == u ? f.setData({
            title: "第二段充电中"
          }) : "T" == u ? f.setData({
            title: "预约等待中"
          }) : "C" == u ? f.setData({
            title: "充电完成"
          }) : "S" == u && f.setData({
            title: "充电完成(已关机)"
          }), i.clearRect(0, 0, V, 300), i.font = "normal normal 15px sans-serif", Z = Number(sf(s, "OW")), ss = Number(sf(s, "IW")), Q = sf(s, "SDT"), U = sf(s, "Fan"), as = Number(sf(s, "OV")), es = Number(sf(s, "OA")), fs = Number(sf(s, "IA")), cs = sf(s, "SOC", "100"), 0 == (ts = Number(sf(s, "IV", "0"))) && (ts = Number(sf(s, "IV1", "0"))), as * es - Z > 50 && 0 != Z && (0 != ss && ss > Z && (ss *= as * es / Z), Z = as * es, fs = ss / ts);
          var d = 0,
            E = 0;
          ss > 0 && (d = Z / ss * 100, E = ss - Z);
          var J = ["输入电压", "输入电流", "输入功率", "输入温度", "转换效率", "本次充电", "本次电量", "本次时间"],
            us = ["输出电压", "输出电流", "输出功率", "输出温度", "转换损耗", "累计充电", "累计电量", "累计时间"],
            bs = [ts, fs, ss, "IT", d, "AH", "WH", "Ti"],
            gs = [as, es, Z, "OT", E, "MAH", "MWH", "MTi"],
            Ss = ["V", "A", "W", "℃", "%", "Ah", "Wh", ""],
            Fs = ["V", "A", "W", "℃", "W", "Ah", "Wh", ""],
            Bs = V / 2,
            Ls = 25;
          if (i.strokeStyle = "#eee", i.moveTo(0, 0), i.lineTo(V, 0), i.moveTo(Bs, 0), i.lineTo(Bs, 300), 1 == f.data.IsICR) {
            var Js = sf(s, "ST0", "0"),
              Hs = sf(s, "ST1", "0");
            Js = uf(Number(Js).toString(2), 8), Hs = uf(Number(Hs).toString(2), 8), f.setData({
              STS0: Js.charAt(7),
              STS1: Js.charAt(6),
              STS2: Js.charAt(5),
              STS3: Js.charAt(4),
              STS4: Js.charAt(3),
              STS5: Js.charAt(2),
              STS6: Js.charAt(1),
              STS7: Js.charAt(0),
              STS8: Hs.charAt(7),
              STS9: Hs.charAt(6),
              STS10: Hs.charAt(5)
            })
          }
          f.setData({
            SOC: cs
          }), l[5] = "T" == u ? sf(s, "Ti", "") : "", z[5] = Z.toFixed(2), y[5] = U, k[5] = 0 == _s ? "关闭" : Q, js([k, z, y, l]);
          for (var Us = 0; Us < 8; Us++) {
            i.fillStyle = "#2222ff", i.textAlign = "left", i.fillText(J[Us], 5, Us * Ls + 22), i.fillText(us[Us], Bs + 5, Us * Ls + 22), i.moveTo(0, Us * Ls + 29), i.lineTo(V, Us * Ls + 29), i.fillStyle = "#ffa000", i.textAlign = "right";
            var tf = "string" == typeof bs[Us] ? Number(sf(s, bs[Us])) : bs[Us],
              df = "string" == typeof gs[Us] ? Number(sf(s, gs[Us])) : gs[Us];
            "Ti" == bs[Us] ? (tf = sf(s, bs[Us]), df = sf(s, gs[Us])) : (tf = tf.toFixed(2), df = df.toFixed(2)), i.fillText(tf, Bs - 30, Us * Ls + 22), i.fillText(df, V - 30, Us * Ls + 22), i.fillStyle = "#aaaaaa", i.fillText(Ss[Us], Bs - 2, Us * Ls + 22), i.fillText(Fs[Us], V - 2, Us * Ls + 22), i.stroke()
          }
        } else s.startsWith("SA=") ? (ms = sf(s, "KS1", "58.8V15A") + "A", xs = sf(s, "KS2", "67.2V15A") + "A", zs = sf(s, "KS3", "71.4V15A") + "A", ys = sf(s, "KS4", "84V15A") + "A", (Gs = sf(s, "TMS", "70C3000W")).match(/([\d\.]+)C([\d\.]+)W/), Vs = Number(RegExp.$1), qs = Number(RegExp.$2), ks = Number(sf(s, "DC1", "13")), hs = Number(sf(s, "DC2", "14")), Is = Number(sf(s, "DC3", "17")), ps = Number(sf(s, "DC4", "20")), Number(sf(s, "DBL", "3.0")), ws = Number(sf(s, "FS", "0")), Number(sf(s, "AJH", "0")), Ps = Number(sf(s, "SA", es)), Cs = Number(sf(s, "MW", "0")), vs = Number(sf(s, "SV", as)), Number(sf(s, "FON", 0)), Number(sf(s, "SPM", "0")), Ds = Number(sf(s, "SA2", "0")), _s = Number(sf(s, "SD", "0")), Ts = Number(sf(s, "PON", "0")), j = Number(sf(s, "LMW", "0")), Ns = Number(sf(s, "HQ", "0")), Ms = Number(sf(s, "GV", "0")), Number(sf(s, "LFS", "0")), R = Number(sf(s, "LSV", "0")), Y = Number(sf(s, "LSA", "0")), As = Number(sf(s, "KEY", "1")), L = Number(sf(s, "MSV", "20")), Number(sf(s, "FMT", "45")), Number(sf(s, "FMW", "1500")), O = Number(sf(s, "OVT", "0")), $ = Number(sf(s, "OAT", "0")), K = Number(sf(s, "OVD", "0")), Number(sf(s, "OAD", "0")), f.data.Ver.includes("Increase") ? (as > 532 ? (X = 750, H = 200) : as > 422 ? (X = 530, H = 200) : as > 120 ? (X = 420, H = 200) : (X = 100, H = 20), f.setData({
          IsICR: 1
        })) : f.data.Ver.includes("Huawei") ? (X = (58.5 * K).toFixed(2), H = (41.5 * K).toFixed(2)) : f.data.Ver.includes("ZTE") ? (X = (59 * K).toFixed(2), H = (41.5 * K).toFixed(2)) : (X = R, H = L), X = Number(X), H = Number(H), r[2] = vs, n[2] = Ns, c[2] = Ps, m[2] = Ds, x[2] = Vs + "°C", z[2] = Cs, y[2] = ws, k[2] = _s, r[5] = H + "-" + X, r[4] = R > 0 ? R + "🔒" : "", c[4] = Y > 0 ? Y + "🔒" : "", n[5] = 0 == Ns ? "关闭" : "开启", o[5] = 0 == As ? "关闭" : "开启", b[5] = 1 == Ts ? "关机" : "开机", m[5] = 0 == Ds ? "关闭" : Ms, x[5] = qs + "W", z[4] = j > 0 ? j + "🔒" : "", k[5] = 0 == _s ? "关闭" : 60 * _s, I[2] = ks, p[2] = hs, g[2] = Is, S[2] = ps, I[5] = ms, p[5] = xs, g[5] = zs, S[5] = ys, js([r, l, n, o, c, b, m, x, z, y, k, h, I, p, g, S])) : s.startsWith(" SYS=") && (os = Number(sf(s, "DSP", "0")), ns = Number(sf(s, "DR", "0")), ls = Number(sf(s, "SR", "0")), ds = Number(sf(s, "ZTE", "0")), is = Number(sf(s, "Huawei", "0")), rs = Number(sf(s, "DV", "1")), Ws = Number(sf(s, "Increase", "0")), w[4] = r[4], P[5] = O, C[5] = 1 == rs ? "IIC1306" : 0 == rs ? "IIC1106" : 3 == rs ? "SPI1309" : "SPI7567", D[4] = c[4], _[5] = $, F[5] = 1 == ls ? "竖显" : 0 == ls ? "倒显" : "正显", N[4] = z[4], M[4] = y[4], B[5] = ds + is + Ws == 1 ? "单协议版" : 1 == ns ? "华为" : 2 == ns ? "英可瑞" : "中兴", js([w, P, C, v, D, _, F, T, N, M, B, A]));
        var rf, lf
      }))
    }))
  },
  onUnload: function () {
    u.onBLEConnectionStateChange((function () {})), u.closeBLEConnection(), console.log("Unload device")
  }
});
var Os = [],
  Ks = 0,
  $s = 0,
  Ls = 0,
  Js = 0;

function Xs(s) {
  u.easySendData(Os[$s][Ks] + "\n", false), Ks += 1, Ls += 1, s.setData({
    SOC: (Ls / Js * 100).toFixed(2)
  })
}

function Hs() {
  var s = ["<S>convert.run~30~51 ~c~m~f~56~d~57~30~54 not ~d ~26 ~32 `s ~27~30~54 type~56~d~57==~u~14~u ~26 ~d=tonumber~56~d~3`f`c~57 ~27~30~50 sign = ~62~6floor~56~d/~56`z^`y`f~57~57~30~50 exp = ~d % ~56`z^`y`f~57~30exp = ~62~6floor~56exp/~56`z^`z`y~57~57~2`f`z`b~30~50 man = ~d % ~56`z^`z`y~57~30~37 i=`f~3`z`y do man=man/`z ~27~30~50 result = ~56~2`f~57^sign * ~56`f~1man~57 * `z^exp~30~32 result~30~27~30~51 ~f~m~c~56~d~57~30~50 ~a~3~p~3~h~3~o~3~k=`s~3`s~3`s~3`s~3`s~30~54 ~d==`s ~26 ~32 ~u`s`s`s`s`s`s`s`s~u ~27~30~50 ~t=~62~6floor~56~d~57~30~50 ~f~3P=~56~d~2~t~57~3~t~30~a=~56~d>`s ~58 `s or `f~57 * `z^`y`f~30repeat  ~t=~62~6floor~56~t/`z~57~7~k=~k~1`f until~56~t==`s~57~30~p=~k~2`f~7~o=`z`y~2~p~7P=P % ~56`z^~p~57~30P=P*~56`z^~o~57~7~p=~p~1`f`z`b~7~p=~p*`z^`z`y~30~37 i=`f~3~o do~30~f=~f*`z~7~t=~62~6floor~56~f~57~7~f=~56~f~2~t~57~30~h = ~h ~1 ~t*`z^~56~o~2i~57~30~27~30~32 ~14~6~15~56~u%`s`d~q~u~3~56~a~1~p~1~56P~1~h~57~57~57~30~27|<E>convert.run", "<S>Display~30~50 Y~3~k~3~q=~4`y~3`f`w~3`a`d~5~3`f~3`s~30~50 ~s~k~t`f~3~s~p~t`z=`z`f~3`f`a~30~50 ~s`f~3~s`z~3P`f~3P`z~3P`y~3P`a~3~f`f~3~f`z~3~f`y~3~f`a~3~f`e~3~f`b~3B`f~3~f`d=`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~3`f~30~d~m=~d~m or `s~30~38~6~65~56~4~38=`f`w~3dir=~38~6I~o~3 pull=~38~6P~r~s~s_~rP~5~57~30~38~6~65~56~4~38=`z`y~3dir=~38~6I~o~3 pull=~38~6P~r~s~s_~rP~5~57~30~54 ~t~d>=`z ~26 ~q=`a~30bus = spi~6master~56spi~6~c~aPI~3 ~4sclk=`f`w~3 mosi=`z`y~5~57~30~54 ~t~d==`z ~58 u`dg`z~6st`b`e`c`b_pi_`f`y`zx`c`a ~26 ~25 = u`dg`z~6st`b`e`c`b_pi_`f`y`zx`c`a~56bus~3 `z`z~3 `f`c~3 `f`b~57 ~27~30~54 ~t~d==`y ~58 u`dg`z~6ssd`f`y`s`w_`f`z`dx`c`a_noname`s ~26 ~25 = u`dg`z~6ssd`f`y`s`w_`f`z`dx`c`a_noname`s~56bus~3 `z`z~3 `f`c~3 `f`b~57 ~27~30~38~6~65~56~4~38=~s~p~t`z~3dir=~38~6~b~r~m~5~57~7~38~6~39~56~s~p~t`z~3`f~57~30~s~k~t`f=ledc~6new~khannel~56~4~38=~s~k~t`f~3bits=`f`s~3mode=`s~3timer=`f~3channel=`z~3frequency=`e`s`s`s~3duty=`e`e`s~5~57~30~48~30~38~6~65~56~4~38=~4`f`c~3`f`b~5~3dir=~38~6I~o~3 pull=~38~6P~r~s~s_~rP~5~57~30i`zc~6setup~56i`zc~6~c~e`s~3 `f`c~3 `f`b~3 i`zc~6~f~l~a~m~57~30~54 ~t~d==`s ~26 ~25=u`dg`z~6sh`f`f`s`c_i`zc_`f`z`dx`c`a_noname~56i`zc~6~c~e`s~3 `sx`yc~57 ~27~30~54 ~t~d==`f ~26 ~25=u`dg`z~6ssd`f`y`s`c_i`zc_`f`z`dx`c`a_noname~56i`zc~6~c~e`s~3 `sx`yc~57 ~27~30~27~30~25:set~font~56u`dg`z~6font_`cx`f`s_tf~57~30~25:set~font~tirection~56~a~n~57~30~54 ~d~m>`s ~58 ~ahow~sogo ~26 ~ahow~sogo~56~25~57 ~27~30~51 ~42~56x~3y~3x`f~3y`f~3x`z~3y`z~57 ~54 ~a~n==`f ~26 ~tr~24~56`f`z`d~2y~3x~3`f`z`d~2y`f~3x`f~57 ~48 ~tr~24~56x~3y~3x`f~3y`f~57 ~27 ~27~30~51 ~42x~56x~3y~3z~3t~57~54 ~a~n==`f ~26 ~tr~24~56`f`z`d~2y~3x~3`f`z`d~2t~3z~57~7~tr~24~56`f`z`d~2y~3x~1`f~3`f`z`d~2t~3z~1`f~57 ~48 ~tr~24~56x~3y~3z~3t~57~7~tr~24~56x~1`f~3y~3z~1`f~3t~57 ~27 ~27~30~51 ~42y~56x~3y~3z~3t~57~54 ~a~n==`f ~26 ~tr~24~56`f`z`d~2y~3x~3`f`z`d~2t~3z~57~7~tr~24~56`f`z`b~2y~3x~3`f`z`b~2t~3z~57 ~48 ~tr~24~56x~3y~3z~3t~57~7~tr~24~56x~3y~1`f~3z~3t~1`f~57 ~27 ~27~30~50 ~51 ~18~atr~56x~3y~3t~57~30~25:clearBuffer~56~57~30~54 ~a~n==`z ~26 t=~14~6reverse~56t~57 ~27~30~37 i = `f ~3#t~3`f do~30v=t:~61~56i~3i~57~30~54 v==~u~6~u ~26 x=x~1`a ~48 x=x~1`c~1`a ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`f`y`a`e`c`b`d`w`s~8~u or ~u~9`a`e`c`d`w`s~8~u~57 ~26 ~42x~56x~3 y~3 x~3y~1`c~57 ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`z`y`e`c`d`s~8~u or ~u~9`z`y`e`c`b`d`w`s~8~u~57 ~26 ~42y~56x~3 y~3 x~1`b~3y~57 ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`z`c`d`s~8~u or ~u~9`f`z`y`a`b`d`w`s~8~u~57 ~26 ~42x~56x~1`c~3 y~3 x~1`c~3y~1`c~57 ~27~30~54 v:~47~56~u~9`z`y`a`e`c`d`w~8~u~57 ~26 ~42y~56x~3 y~1`c~3 x~1`b~3y~1`c~57 ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`f`z`y`a`b`d`w`s~8~u or ~u~9`z`c`d`s~8~u~57 ~26 ~42x~56x~3 y~1`c~3 x~3y~1`f`y~57 ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`z`y`e`c`b`d`w`s~8~u or ~u~9`z`y`e`c`d`s~8~u~57 ~26 ~42y~56x~3 y~1`f`z~3 x~1`b~3y~1`f`z~57 ~27~30~54 v:~47~56~a~n==`z ~58 ~u~9`a`e`c`d`w`s~8~u or ~u~9`f`y`a`e`c`b`d`w`s~8~u~57 ~26 ~42x~56x~1`c~3 y~1`c~3 x~1`c~3y~1`f`y~57 ~27~30~54 v==~u~6~u ~26 ~54 ~a~n==`z ~26 ~42y~56x~1`c~3 y~3 x~1`b~3y~57 ~48 ~42y~56x~1`c~3 y~1`f`z~3 x~1`b~3y~1`f`z~57 ~27 ~27~30~54 v==~ua~u ~26~30~54 ~a~n==`z ~26~30~42~56x~3 y~1`f~3 x~3y~1`c~57~7~42~56x~1`c~3 y~1`f~3 x~1`c~3y~1`c~57~7~42~56x~3y~1`y~3x~1`c~3y~1`y~57~30~42~56x~3 y~1`e~3 x~1`y~3y~1`f`f~57~7~42~56x~1`c~3 y~1`e~3 x~1`y~3y~1`f`f~57~30~48~30~42~56x~3 y~1`d~3 x~3y~1`f`y~57~7~42~56x~1`c~3 y~1`d~3 x~1`c~3y~1`f`y~57~7~42~56x~3y~1`f`s~3x~1`c~3y~1`f`s~57~30~42~56x~3 y~1`d~3 x~1`y~3y~1`z~57~7~42~56x~1`y~3 y~1`z~3 x~1`c~3y~1`d~57~30~27~30~27~30~54 v==~uv~u ~26~30~54 ~a~n==`z ~26~30~42~56x~3 y~1`d~3 x~3y~1`f`z~57~7~42~56x~1`c~3 y~1`d~3 x~1`c~3y~1`f`z~57~30~42~56x~3 y~1`d~3 x~1`y~3y~1`z~57~7~42~56x~1`y~3 y~1`z~3 x~1`c~3y~1`d~57~30~48~30~42~56x~3 y~1`z~3 x~3y~1`b~57~7~42~56x~1`c~3 y~1`z~3 x~1`c~3y~1`b~57~30~42~56x~3 y~1`c~3 x~1`y~3y~1`f`z~57~7~42~56x~1`c~3 y~1`c~3 x~1`y~3y~1`f`z~57~30~54 ~a~n==`f ~26 x=~2`f`y ~7 y=y~1`f`w ~27~30~27~30~27~30~27~30~tr~24~56~f`f~9`f~8~3~f`f~9`z~8~3~f`f~9`y~8~3~f`f~9`a~8~57~30~tr~24~56~f`z~9`f~8~3~f`z~9`z~8~3~f`z~9`y~8~3~f`z~9`a~8~57~30~tr~24~56~f`y~9`f~8~3~f`y~9`z~8~3~f`y~9`y~8~3~f`y~9`a~8~57~30~54 ~a~n==`f ~26~30~a`a_=~uI~o  ~u~6~6~63~56~u%`s`ad~u~3I~e~57~6~6~u~e~u~30~20~56`e`s~3`e~3~u~b~r~m ~u~6~6~a~b~e_~6~6~u~e~u~57~30~20~56`a`s~3`e~3~u~o~m~k ~u~6~6~63~56~u%`e~6`zf~u~3~b~m~57~57~30~48~54 ~a~t~s==`f ~26~30~25:~44Box~56~56~a~n==`z ~58 ~56~t~d>`f ~58 `f`y`f or `f`z`d~57~2~a~b~k or B`f~9`f~8~1~56~t~d>`f ~58 `s or ~2`y~57~57~3B`f~9`z~8~3~a~b~k~1`e~3B`f~9`a~8~57~30~tr~64~56~f`b~9`f~8~3~f`b~9`z~8~3~f`b~9`y~8~3~f`b~9`a~8~57~30~tr~24~56~f`d~9`f~8~3~f`d~9`z~8~3~f`d~9`y~8~3~f`d~9`a~8~57~30~20~56~s`y~9`f~8~3~s`y~9`z~8~3~63~56~u%`y~6`sf~u~3~a~b~k~3~u%~u~57~57~30~27~30~54 ~66==`f ~26 ~tr~64~56~f`a~9`f~8~3~f`a~9`z~8~3~f`a~9`y~8~3~f`a~9`a~8~57~30~48~54 ~66==`z ~26 ~tr~64~56~f`e~9`f~8~3~f`e~9`z~8~3~f`e~9`y~8~3~f`e~9`a~8~57~30~48~54 ~66==`y ~26 ~tr~64~56~f`c~9`f~8~3~f`c~9`z~8~3~f`c~9`y~8~3~f`c~9`a~8~57 ~27~30~20~56~s`f~9`f~8~3~s`f~9`z~8~3~a~a~d_~6~6~a`y_~6~6~a~a~l_~57~7~20~56~s`z~9`f~8~3~s`z~9`z~8~3~a`a_~57~30~20~56P`z~9`f~8~3P`z~9`z~8~3~a~e~c_~57~7~20~56P`y~9`f~8~3P`y~9`z~8~3~a~l~c_~57~7~20~56P`a~9`f~8~3P`a~9`z~8~3~a~mI_~57~30~25:s~27Buffer~56~57~30~27~30~51 ~53~a~n~56~d~3~a~57~30~54 ~d==`f ~26~30~f`a~3~f`e~3~f`c=~4`f`f`e~3`z~3`f`f~3`y`e~5~3~4`f`f`e~3`z`c~3`f`f~3`y`c~5~3~4`f`f`e~3`z~3`f`f~3`c`s~5~30~s`f~3~s`z=~4`f`f`c~3`e~5~3~4`c`s~3`e~5~30P`f~3P`z~3P`y~3P`a=~4`z`d~3`z~5~3~4`z`y~3`f`s~5~3~4`f`y~3`f`s~5~3~4`z~3`f`s~5~30~f`f~3~f`z~3~f`y=~4`f`f`y~3`s~3`f`f`y~3`c`a~5~3~4`b`y~3`s~3`b`y~3`c`a~5~3~4`y`e~3`s~3`y`e~3`c`a~5~30~48~54 ~a~t~s==`s ~26~30~54 ~d==`s ~26~30~f`a~3~f`e~3~f`c=~4`z~3`z`w~3`y`y~3`f`f~5~3~4`y`d~3`z`w~3`y`y~3`f`f~5~3~4`z~3`z`w~3`c`w~3`f`f~5~30~s`f~3~s`z=~4`a~3`y`d~5~3~4`a~3`e`b~5~30P`f~3P`z~3P`y~3P`a=~4`b`e~3`z`d~5~3~4`b`b~3`y`e~5~3~4`b`b~3`a`b~5~3~4`b`b~3`e`w~5~30~f`f~3~f`z~3~f`y=~4`s~3`z`a~3`f`z`d~3`z`a~5~3~4`s~3`a`a~3`b`y~3`a`a~5~3~4`b`y~3`z`a~3`b`y~3`c`a~5~30~48~54 ~d==`z ~26~30~f`a~3~f`e~3~f`c=~4`w`y~3`z`e~3`y`y~3`f`f~5~3~4`e`b~3`z`e~3`y`y~3`f`f~5~3~4`e`b~3`z`e~3`c`w~3`f`f~5~30~s`f~3~s`z=~4`f`z`y~3`z`c~5~3~4`f`z`a~3`b~5~30P`f~3P`z~3P`y~3P`a=~4`a`w~3`y`e~5~3~4`e`f~3`z`w~5~3~4`e`f~3`f`b~5~3~4`e`f~3`e~5~30~f`f~3~f`z~3~f`y=~4`s~3`a`s~3`f`z`d~3`a`s~5~3~4`e`e~3`z`s~3`f`z`d~3`z`s~5~3~4`e`e~3`s~3`e`e~3`a`s~5~30~27~30~48~30~54 ~d==`s ~26~30~f`a~3~f`e~3~f`c=~4`z~3`z`e~3`y`y~3`f`f~5~3~4`y`d~3`z`e~3`y`y~3`f`f~5~3~4`z~3`z`e~3`c`w~3`f`f~5~30~s`f~3~s`z~3~s`y=~4`a~3`y`a~5~3~4`a~3`e`s~5~3~4`f`s`e~3`c`a~5~30P`f~3P`z~3P`y~3P`a=~4`b`e~3`z`f~5~3~4`d`s~3`y`f~5~3~4`d`s~3`a`f~5~3~4`d`s~3`e`f~5~30~f`f~3~f`z~3~f`y=~4`s~3`z`s~3`f`z`d~3`z`s~5~3~4`s~3`y`d~3`b`y~3`y`d~5~3~4`b`y~3`z`s~3`b`y~3`e`a~5~30~f`b~3B`f~3~f`d=~4`s~3`e`c~3`f`s`z~3`d~5~3~4`s~3`e`c~3`c`s~3`d~5~3~4`s~3`e`a~3`f`z`d~3`e`a~5~30~48~54 ~d==`z ~26~30~f`a~3~f`e~3~f`c=~4`w`y~3`y`s~3`y`y~3`f`f~5~3~4`e`b~3`y`s~3`y`y~3`f`f~5~3~4`e`b~3`y`s~3`c`w~3`f`f~5~30~s`f~3~s`z~3~s`y=~4`f`z`y~3`y`f~5~3~4`f`z`a~3`f`a~5~3~4`z`z~3`s~5~30P`f~3P`z~3P`y~3P`a=~4`a`w~3`y`e~5~3~4`a`d~3`y`a~5~3~4`a`d~3`z`a~5~3~4`a`d~3`f`a~5~30~f`f~3~f`z~3~f`y=~4`s~3`a`e~3`f`z`d~3`a`e~5~3~4`e`e~3`z`c~3`f`z`d~3`z`c~5~3~4`e`e~3`f`s~3`e`e~3`a`e~5~30~f`b~3B`f~3~f`d=~4`z`c~3`s~3`f`s`z~3`d~5~3~4`b`z~3`s~3`c`s~3`d~5~3~4`s~3`f`s~3`f`z`d~3`f`s~5~30~27~30~27~30~a~n=~d~7~25:set~font~tirection~56~a~n~57~30~54 ~a==~60 ~26 ~53cfg~56~u~a~n~u~3~d~3`f~57 ~27~30~27~30~51 ~tr~64~56x~3y~3x`f~3y`f~57 ~25:~44~64~56x~1~q~3y~3x`f~3y`f~57 ~27~30~51 ~20~56x~3y~3s~57 ~25:~44~atr~56x~1~q~3y~3s~57 ~27~30~51 ~tr~24~56x~3y~3x`f~3y`f~57 ~25:~44~24~56x~1~q~3y~3x`f~1~q~3y`f~57 ~27~30~51 ~63~56~a~3~d~3~b~57 ~32 ~14~6~15~56~a~3~d~57~6~6~56~b or ~u~u~57 ~27~30~a~l~c_~3~a~e~c_~3~a~b~e_~3~a~b~m_~3~a~b~d_~3~a~b~l_~3~a~mI_~3~a~a~l_~3~a~a~d_~3~aI~o~f_=~u~u~30~a`f_~3~a`z_~3~a`y_~3~a`a_=~u%`z~6`ff~u~3~u%`z~6`ff~u~3~u~u~30~a~t~s=`s~30~51 ~69~56~a~3~n~57~30~54 ~d~m>`s ~26 ~d~m=~d~m~2`f~7~32 ~27~30~54 P~b~o==`f ~58 ~a~tP==`f ~26 ~25:clearBuffer~56~57~7~25:s~27Buffer~56~57~7~32 ~27~30~54 ~t~k~l~9~i~ai~8~=`s ~26 ~54 ~a~t~s==`s ~26 ~a~t~s=`f~7~53~a~n~56~a~n~57 ~27~30~48 ~54 ~a~t~s==`f ~26 ~a~t~s=`s~7~53~a~n~56~a~n~57 ~27  ~27~30~a`f_~3~a`z_~3~a`y_=~u%`z~6`ff~u~3~u%`z~6`ff~u~3~u~u~30~54 ~a~b~d_==~60 ~58 ~n ~26 ~32 ~27~30~54 ~a~n==`f ~26~30~54 ~66==`f ~26 ~a`z_=~u%`s`zd~u ~48~54 ~66==`z ~26 ~a`f_=~u%`s`zd~u ~48 ~a`f_=~u%`s`zd~u~7~a`z_=~a`f_~7~a`y_=~u  ~u~27~30~27~30~54 ~n==~60 ~26~30~a~b~d_=~63~56~b~d>=`f`s`s ~58 ~u%`e~6`ff~u or ~u%`e~6`zf~u~3~b~d~3~uv ~u~57~30~a~b~l_=~63~56~u%`e~6`zf~u~3~b~l~3~ua~u~57~30~a~e~c_=~63~56~u%`c~6`sf~u~3~e~c~3~u~e~c~u~57~30~a~l~c_=~63~56~u%`c~6`zf~u~3~l~c~3~u~l~c~u~57~30~a~mI_=~mo~a~56~mi~57~30~a~b~e_=~63~56~u%`s`ad~u~3~b~e~57~30~a~b~m_=~63~56~u%`s`zd~u~3~b~m~57~30~a`a_=~u~m=~u~6~6~a~b~m_~6~6~u ~e=~u~6~6~a~b~e_~30~27~30~a~a~d_=~63~56~a`f_~3~a~d~3~56~a~d>=`f`s`s ~58 ~u ~u or ~u~d ~u~57~57~30~a~a~l_=~63~56~a`z_~3~a~l~3~u~l~u~57~30~18~atr~56~2`y~3Y~9~a~n~1`f~8 ~3~a~b~d_~6~6~a~b~l_~57~30~27~30~53~a~n~56~a~n~3`f~57~7~19~56~u~iey~u~57|<E>Display", "<S>EPS6020~30~der=~u~pP~a`c`s`z`s~2~u~6~6~der~7~a~aI~t=~a~aI~t:~59~56~u~kontrol~u~3~der~57~30~b~d~3~b~l~3~b~e~3I~e~3~b~m~3I~m~3~o~m~k~3~q`s=`s~3`s~3`s~3`s~3`s~3`s~3`s~3~13~6~12~56~u`s`s`s`s`s`s`s`s`s`s`s`s`s`s`s`s~u~57~30id=~2`f~30~mi~3~l~c~3~e~c~3~o~m~k~3Y~a~3~t~a~3~b~s=`s~3~u`s~6`s`s~u~3~u`s~6`s`s~u~3`s~3`s~3`f~3`s~30~53=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`z=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~51 Init~56~57~30~m~h~e~3~h~a~d~3~s~a~d~3~s~a~l~3~s~h~e=`f`s`s`s~3`a`a~3`b`s~3`z`s~3`f`z`s`s~30~27~30Init~56~57~30~51 ~53~d~l~56~d~3~l~3~a~3~k~57~30~50 ~d`f~3~d`z=~56~d or ~a~d~57/~b~d~t*`f`s`s`s~3~56~l or ~a~l~57/~b~l~t*`f`s`s`s~30can~6s~27~56`f~3~56`sx`s`z`w~k`s`s~f`s~1id*`z`e`c~57~3~13~6~12~56~t~m~c~56~d`f~3~u%`s`d~q~u~57~6~6~t~m~c~56~d`z~3~u%`s`d~q~u~57~57~57~30~54 ~a ~26~30~i~a~l~3~i~ai~3~a~l~3~a~d=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~a~3~l~3~d~30~53~k~f~g~56~u~i~ai~u~3~i~ai~57~7~53~k~f~g~56~u~i~a~u~6~6~a~3~4~d~3~l~5~3~k~57~30~27~30~27~30~51 ~67~b~o~56~d~57 P~b~o=~56~d or `s~57~30can~6s~27~56`f~3~56`sx`s`z`w~l`s`s~f`s~1id*`z`e`c~57~3~13~6~12~56~t~m~c~56P~b~o~3~u%`s`z~q~u~57~6~6~u`s`s`s`s`s`s`s`s`s`s`s`s`s`s~u~57~57~30~49=P~b~o==`s ~58 ~u~e~m~u or ~56~49==~u~m~u ~58 ~u~m~u or ~u~aP~u~57~30~27~30~51 ~23~56~format~3I~t~3~tata~57 ~b~s=`e~30~54 id==~2`f ~26 id=~c~m~t~56~t~m~c~56I~t~57:~47~56~u~6~6$~u~57~57 ~27~30~54 ~g~h ~26 ~17~56~t~m~c~56I~t~57 ~6~6~u  ~u~6~6~p~m~c~56~tata~57~6~6~u  ~u~6~6id~57 ~27~30~54 ~rP~tate ~26 ~32 ~27~30~54 I~t~=~56`sx`s`z`d`cf`s`s`s~1id~57 ~58 I~t~=`sx`s`z`d`ff`s`yf ~58 I~t~=~56`sx`s`z`d`wf`s`s`s~1id~57 ~58 I~t~=~56`sx`s`z`d~l~f`s`s`s~1id~57 ~26 ~32 ~27~30~50 ~m~3~k~3~i=~13~6~41~56~tata~57~3~k~3~i~30~54 I~t==~56`sx`s`z`d`wf`s`s`s~1id~57 ~26~30~k=~m:~61~56`f~3`d~57~7~i=~m:~61~56`w~3`f`c~57~30~b~d=~56~c~m~t~56~k~57/`f`s`s`s*~b~d~m~57~7~b~l=~56~c~m~t~56~i~57/`f`s`s`s*~b~l~m~57~30~54 ~b~l<~k~s~d ~26 ~b~l=`s ~27~30~53~6~b~d=~b~d~7~53~6~b~l=~b~l~30~b~e=~b~d*~b~l~7~53~6~b~e=~b~e~30can~6s~27~56`f~3`sx`s`z`d`d`y~f~f`s~3~q`s~57~30~27~30~27~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~b~s=~b~s~2~56~b~s>`s ~58 `f or `s~57~30~54 ~rP~tate ~26 ~32 ~27~30~50 ~36=~u~u~7 ~37 ~i~3~m ~55 pairs~56~53~57 do ~36=~36~6~6~u ~u~6~6~i~6~6~u=~u~6~6~m ~27~30~ahow~h~a~g~56~36~57~7 can~6s~27~56`f~3~56`sx`s`z`d`w`s`s~f`s~1id*`z`e`c~57~3~q`s~57~30~27~57~30can~6setup~56~4speed=`f`z`e~3tx=`e~3rx=`a~3dual_filter=~34~3code=`s~3mask=`sxffffffff~5~3~23~57~7can~6start~56~57~30~46~6~45~56~57:~33~56`z`s`s`s~3 `s~3 ~51~56~57 ~67~b~o~56`s~57 ~27~57~30~46~6~45~56~57:~33~56`z`e`s`s~3 `s~3 ~51~56~57 ~53~d~l~56~a~d~3~56~c~j==`s ~58 ~a~l or `f~57~57 ~27~57~30~46~6~45~56~57:~33~56`y`s`s`s~3 `s~3 ~51~56~57 can~6s~27~56`f~3~56`sx`s`z`d~l`s`s~f`s~1id*`z`e`c~57~3~q`s~57 ~27~57|<E>EPS6020", "<S>Huawei~30~der=~u~35~2~u~6~6~der~7~a~aI~t=~a~aI~t:~59~56~u~kontrol~u~3~der~57~30~b~d~3~b~l~3~b~e~3I~e~3~b~m~3Init=`s~3`s~3`s~3`s~3`s~3`s~30~s~a~d=~s~a~d or ~56`e`d~6`e*~b~d~t~57~7~h~a~d=~h~a~d or ~56`a`f*~b~d~t~57~30~mi~3~l~c~3~e~c~3~o~m~k~3Y~a~3~b~s=`s~3~u`s~6`s`s~u~3~u`s~6`s`s~u~3`s~3`s~3`s~30~53=~4I~d=~4~u`s`f`b`d`s`s`s`s~u~3`s~5~3I~e=~4~u`s`f`b`s`s`s`s`s~u~3`s~3`f`s`z`a/~b~d~m~5~3~b~l=~4~u`s`f`d`f`s`s`s`s~u~3`s~3`f`s`z`a/~b~l~m~5~3I~d`f=~4~u`s`f`b`d`s`s`s`y~u~3`s~5~3~b~l`z=~4~u`s`s`s`f`s`s`s`s~u~3`s~3`z`s/~b~l~m~5~3~30~b~d=~4~u`s`f`b`e`s`s`s`s~u~3`s~3`f`s`z`a/~b~d~m~5~3I~l=~4~u`s`f`b`z`s`s`s`s~u~3`s~3`f`s`z`a/~b~d~m~5~3~h~l=~4~u`s`f`b`c`s`s`s`s~u~3`s~3`z`s/~b~l~m~5~3~b~l`f=~4~u`s`f`d`z`s`s`s`s~u~3`s~3`f`s`z`a/~b~l~m~5~3~30I~m=~4~u`s`f`d`s`s`s`s`s~u~3`s~5~3~b~m=~4~u`s`f`bf`s`s`s`s~u~3`s~5~3~b~e=~4~u`s`f`b`y`s`s`s`s~u~3`s~3`f`s`z`a/~b~d~m~5~3~q~e=~4~u`s`f`s`e`s`s`s`s~u~3`s~3`f`s`z`a/~b~d~m~5~5~30~51 ~16~56I~t~3~i~3~d~57 can~6s~27~56`f~3I~t~3~13~6~12~56~i~6~6~14~6~15~56~u%`s`d~q~u~3~d~57~57~57 ~27~30~51 ~53~d~l~56~d~3~l~3~a~3~k~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`s`s`s`s`s~u~3~d/~b~d~t*`f`s`z`a~57~7~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`f`s`s`s`s~u~3~d/~b~d~t*`f`s`z`a~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`y`s`s`s`s~u~3~l/~b~l~t*`z`s~57~7~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`a`s`s`s`s~u~3~l/~b~l~t*`z`s~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`e`s`s`s`s~u~3~a~h~e*`f`s`z`a~57~30~54 ~a ~26~30~i~a~l~3~i~ai~3~a~l~3~a~d=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~a~3~l~3~d~30~53~k~f~g~56~u~i~ai~u~3~i~ai~57~7~53~k~f~g~56~u~i~a~u~6~6~a~3~4~d~3~l~5~3~k~57~30~27~30~27~30~51 ~53~a~10~56~d~57  ~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`y`a`s`s`s~u~6~6~56~d==`s ~58 `s or `f~57~3`s~57~7~f~b~o=~d ~27~30~51 ~67~b~o~56~d~57 P~b~o=~d or `f~30~49=P~b~o==`s ~58 ~u~e~m~u or ~56~49==~u~m~u ~58 ~u~m~u or ~u~aP~u~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`y`z`s`s`s~u~6~6~56~d or `f~57~3`s~57~7~53~10~56`s~57~30~27~30~51 Init`f~56~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`s`z`s`s`s`s~u~3`c`s`a`f`c~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`s`w`s`s`s`s~u~3`s~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`sc`s`s`s`s~u~3`s~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`sd`s`s`s`s~u~3`s~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`s`f`s`s`s`s~u~3`e`a`b`d`a~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`s`a`s`s`s`s~u~3`f`a`d~57~30~16~56`sx`f`s`d`f`d`f~f~p~3~u`s`f`s`c`s`s`s`s~u~3`f`s`z`a~57~30~27~30~51 ~23~56~format~3I~t~3~tata~57 ~b~s=`y~30~54 ~56~rP~tate ~58 ~g~h==~60~57 or I~t==`sx`f`s`s`f`f`f`b~p ~26 ~32 ~60 ~27~30~50 ~m~3I~3~d=`s~3`s~3`s~30~54 I~t==`sx`f`s`d`f`a`s`b~f or I~t==`sx`f`s`d`f`d`s`b~p or I~t==`sx`f`s`s`f`f`f`b~p ~26~30~m=~p~m~c~56~tata~57~7I=~m:~61~56`f~3`d~57~7~d=~c~m~t~56~m:~61~56`w~3`f`c~57~57~30~37 ~i~3~m ~55 pairs~56~53~57 do~30~54 I==~m~9`f~8 ~26 ~m~9`z~8=~14~6~15~56~u%`s~6`zf~u~3~56~d/~56~m~9`y~8 or `f`s`z`a~57~57~57~7break ~27~30~27~30~48~54 I~t==`sx`f`s`d`f`e`s`b~f ~26~30~54 Init ~26 ~17~56~uInit~u~57~7Init`f~56~57~7Init=~60~7~17~56~uInit~u~57 ~27~30~27~30~54 ~g~h ~26 ~17~56~t~m~c~56I~t~57~6~6~u  ~u~6~6~56~m==`s ~58 ~p~m~c~56~tata~57 or ~56I~6~6~u  ~u~6~6~d~57~57~57 ~27~30~27~30~m~b~l=~4`s~3`s~3`s~3`s~3`s~3`s~5~30~51 ~lvg~56~d~57~30~50 ~lve=`s~30~37 i = `f~3#~m~b~l~3`f do~30~m~b~l~9i~8=~56i==#~m~b~l ~58 ~d or ~m~b~l~9i~1`f~8~57~30~lve = ~lve ~1 ~m~b~l~9i~8~30~27~30~2~2~lve = ~lve / #~m~b~l~30~32 ~56~d==`s ~58 `s or ~56~lve / #~m~b~l~57~57~30~27~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~b~s=~b~s~2~56~b~s>`s ~58 `f or `s~57~7 ~54 ~rP~tate ~26 ~32 ~27~30~54 ~56~53~6~b~m~9`z~8~1`s~57<=`s or ~56~53~6~b~m~9`z~8~1`s~57>`f`e`s ~26 ~53~6~b~m~9`z~8=`s ~27~30~b~d=~53~6~b~d~9`z~8~1`s~7I~e=~53~6I~e~9`z~8~1`s~7~b~m=~53~6~b~m~9`z~8~1`s~7~b~e=~53~6~b~e~9`z~8~1`s~30~b~l=~56~53~6~b~l~9`z~8~1`s~57~7~53~6~b~l~9`z~8=~b~l~30~50 ~36=~u~u~30~37 ~i~3~m ~55 pairs~56~53~57 do ~36=~36~6~6~u ~u~6~6~i~6~6~u=~u~6~6~m~9`z~8 ~27~30~ahow~h~a~g~56~36~57~30~54 ~b~e>=~f~h~e ~26 ~53~a~10~56`f~57 ~48~54 ~b~m>=~f~h~m ~26 ~53~a~10~56`z~57 ~48  ~53~a~10~56`s~57 ~27~30~54 Init ~26 ~16~56`sx`f`s`d`f`e`s~f~p~3~u`s`s`s`s`s`s`s`s~u~3`s~57 ~27~30~16~56`sx`f`s`d`f`a`s~f~p~3~u`s`s`s`s`s`s`s`s~u~3`s~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`s`s`s`s`s~u~3~a~d/~b~d~t*`f`s`z`a~57~7~30~27~57~30can~6setup~56~4speed=`f`z`e~3tx=`e~3rx=`a~3dual_filter=~34~3code=`s~3mask=`sxffffffff~5~3~23~57~7can~6start~56~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`e`s`s`s`s~u~3~a~h~e*`f`s`z`a~57~30~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`s`s`s`s`s~u~3~a~d/~b~d~t*`f`s`z`a~57~30~46~6~45~56~57:~33~56`z`s`s`s~3 `s~3 ~51~56~57 ~53~d~l~56~a~d~3~56~c~j==`s ~58 ~a~l or `f~57~57~7 ~16~56`sx`f`s`d`f`d`s~f~p~3~u`s`f`s`e`s`s`s`s~u~3~a~h~e*`f`s`z`a~57 ~27~57|<E>Huawei", "<S>Increase~30~der=~uIncrease~2~u~6~6~der~7~a~aI~t=~a~aI~t:~59~56~u~kontrol~u~3~der~57~30~b~d~3~b~l~3~b~e~3I~e~3~b~m~3~o~m~k=`s~3`s~3`s~3`s~3`s~3`s~30~s~a~d=~s~a~d or ~56`f`s`s*~b~d~t~57~7~h~a~d=~h~a~d or ~56`z`s*~b~d~t~57~30~mi~3~l~c~3~e~c~3~kI~t~3~o~m~k~3Y~a~3~t~a~3~b~s=`s~3~u`s~6`s`s~u~3~u`s~6`s`s~u~3`sx`f`y`s`b~k`s`d`s~3`s~3`s~3`f~3`s~30~53`f=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~53`z=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~53`y=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~53`a=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~53`s=~4~53`f~3~53`z~3~53`y~3~53`a~5~7~53=~53`s~9~t~a~8~30~51 ~a~27`f~56~57~30can~6s~27~56`f~3`sx`f`y`s`s`d`s`d`f~3~u~u~57~30can~6s~27~56`f~3`sx`f`y`s`b~l`s`d`f~3~13~6~12~56~u`y`f`s`s`s`s`s`s`s`s`s`s`s`s`s`s~u~57~57~30~27~30~51 ~16~56~k~3~d`f~3~d`z~3~d`y~57~30~d`f=~14~6~15~56~u%`s`a~q~u~3~d`f~57~7~d`z=~14~6~15~56~u%`s`d~q~u~3~d`z~57~30~k=~13~6~12~56~k~6~6~d`f~6~6~d`z~57~7can~6s~27~56`f~3~kI~t~1~56~d`y or ~t~a~57~3~k~57~30~27~30~51 ~53~d~l~56~d~3~l~3~a~3~k~57~30~16~56~u`s`s`s`s~u~3~56~l or ~a~l~57/~b~l~t*`f`s`s`s~3~56~d or ~a~d~57/~b~d~t*`f`s`s`s~57~30~54 ~a ~26~30~i~a~l~3~i~ai~3~a~l~3~a~d=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~a~3~l~3~d~30~53~k~f~g~56~u~i~ai~u~3~i~ai~57~7~53~k~f~g~56~u~i~a~u~6~6~a~3~4~d~3~l~5~3~k~57~30~27~30~27~30~51 ~67~b~o~56~d~57 P~b~o=~56~d or `s~57~30~16~56~u`s`z`s`s~u~3`s~3P~b~o==`f ~58 `f`b`s or `d`e~57~30~49=P~b~o==`s ~58 ~u~e~m~u or ~56~49==~u~m~u ~58 ~u~m~u or ~u~aP~u~57~30~27~30~51 ~23~56~format~3I~t~3~tata~57 ~b~s=`y~30~54 ~g~h ~26 ~17~56~t~m~c~56I~t~57 ~6~6~u  ~u~6~6~p~m~c~56~tata~57~57 ~27~30~54 ~rP~tate ~26 ~32 ~27~30~54 I~t~=`sx`f`z`s`b~k`s`d`f ~58 I~t~=`sx`f`z`s`b~l`s`d`f ~58 I~t~=`sx`f`z`s`s`d`s`d`f ~26 ~32 ~27~30~50 ~m=~13~6~41~56~tata~57~30~50 ~k~3i~3J~3~i=~m:~61~56`f~3`z~57~1`s~3`f~30~54 I~t==`sx`f`z`s`b~k`s`d`f ~58 ~k==`f ~26~30J~3~i=~c~m~t~56~m:~61~56`e~3`d~57~57~3~c~m~t~56~m:~61~56`w~3`f`z~57~57~30~53`s~9i~8~6~a~m`f=~c~m~t~56~m:~61~56`f`y~3`f`a~57~57~30~53`s~9i~8~6~a~m`s=~c~m~t~56~m:~61~56`f`e~3`f`c~57~57~30~b~l=~56J/`f`s*~b~l~m~57~7~b~d=~i/`f`s*~b~d~m~30~54 ~b~l<~k~s~d ~26 ~b~l=`s ~27~30~53`s~9i~8~6~b~l=~b~l~7~53`s~9i~8~6~b~d=~b~d~30~b~e=~b~d*~b~l~7~53~6~b~e=~b~e~30~48~54 I~t==`sx`f`z`s`s`d`s`d`f ~26 ~b~m=~c~m~t~56~m:~61~56`w~3`f`z~57~57/`f`s~7~53`s~9i~8~6~b~m=~b~m~30~48~54 I~t==`sx`f`z`s`b~l`s`d`f ~26 I~d=~c~m~t~56~m:~61~56`e~3`d~57~57/`y`z~7~53`s~9i~8~6I~d=I~d ~27~30~27~30~m~b~l=~4`s~3`s~3`s~3`s~3`s~3`s~5~30~51 ~lvg~56~d~57~30~50 ~lve=`s~30~37 i = `f~3#~m~b~l~3`f do~30~m~b~l~9i~8=~56i==#~m~b~l ~58 ~d or ~m~b~l~9i~1`f~8~57~30~lve = ~lve ~1 ~m~b~l~9i~8~30~27~30~lve = ~lve / #~m~b~l~30~32 ~56~d==`s ~58 `s or ~lve~57~30~27~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~b~s=~b~s~2~56~b~s>`s ~58 `f or `s~57~7~53=~53`s~9~t~a~8~30~54 ~rP~tate ~26 ~32 ~27~30~50 ~36=~u~u~30~37 ~i~3~m ~55 pairs~56~53~57 do ~36=~36~6~6~u ~u~6~6~i~6~6~u=~u~6~6~m ~27~30~16~56~u`s`f`s`s~u~3`s~3`s~57~30~ahow~h~a~g~56~36~57~30~a~27`f~56~57~30~27~57~30can~6setup~56~4speed=`f`z`e~3tx=`e~3rx=`a~3dual_filter=~34~3code=`s~3mask=`sxffffffff~5~3~23~57~7can~6start~56~57~30~46~6~45~56~57:~33~56`z`s`s`s~3 `s~3 ~51~56~57 ~53~d~l~56~a~d~3~56~c~j==`s ~58 ~a~l or `f~6`d~57~57~7~67~b~o~56`s~57 ~27~57|<E>Increase", "<S>INFY~30~der=~uI~o~fY~2~u~6~6~der~7~a~aI~t=~a~aI~t:~59~56~u~kontrol~u~3~der~57~30~b~d~3~b~l~3~b~e~3I~e~3~b~m~3I~m~3~o~m~k~3~q`s=`s~3`s~3`s~3`s~3`s~3`s~3`s~3~13~6~12~56~u`s`s`s`s`s`s`s`s`s`s`s`s`s`s`s`s~u~57~30~s~a~d=~s~a~d or ~56`b`e`s*~b~d~t~57~7~h~a~d=~h~a~d or ~56`z`s`s*~b~d~t~57~30~mi~3~l~c~3~e~c~3~o~m~k~3Y~a~3~t~a~3~b~s=`s~3~u`s~6`s`s~u~3~u`s~6`s`s~u~3`s~3`s~3`f~3`s~30~53=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~3~a~m`z=`s~3~a~m`f=`s~3~a~m`s=`s~5~30~51 ~53~d~l~56~d~3~l~3~a~3~k~57~30~50 ~d`f~3~d`z=~56~d or ~a~d~57/~b~d~t*`f`s`s`s~3~56~l or ~a~l~57/~b~l~t*`f`s`s`s~30can~6s~27~56`f~3`sx`s`z`wB`y~f~f`s~3~13~6~12~56~t~m~c~56~d`f~3~u%`s`d~q~u~57~6~6~t~m~c~56~d`z~3~u%`s`d~q~u~57~57~57~30~54 ~a ~26~30~i~a~l~3~i~ai~3~a~l~3~a~d=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~a~3~l~3~d~30~53~k~f~g~56~u~i~ai~u~3~i~ai~57~7~53~k~f~g~56~u~i~a~u~6~6~a~3~4~d~3~l~5~3~k~57~30~27~30~27~30~51 ~67~b~o~56~d~57 P~b~o=~56~d or `s~57~30can~6s~27~56`f~3`sx`s`z`w~l`y~f~f`s~3~13~6~12~56~t~m~c~56P~b~o~3~u%`s`z~q~u~57~6~6~u`s`s`s`s`s`s`s`s`s`s`s`s`s`s~u~57~57~30~49=P~b~o==`s ~58 ~u~e~m~u or ~56~49==~u~m~u ~58 ~u~m~u or ~u~aP~u~57~30~27~30~51 ~23~56~format~3I~t~3~tata~57 ~b~s=`e~30~54 ~g~h ~26 ~17~56~t~m~c~56I~t~57 ~6~6~u  ~u~6~6~p~m~c~56~tata~57~57 ~27~30~54 ~rP~tate ~26 ~32 ~27~30~54 I~t~=`sx`s`z`d`cf`s`s`s ~58 I~t~=`sx`s`z`d`ff`s`yf ~58 I~t~=`sx`s`z`d`a~f`s`s`s ~58 I~t~=`sx`s`z`d~l~f`s`s`s ~26 ~32 ~27~30~50 ~m~3~k~3~i=~13~6~41~56~tata~57~3~k~3~i~30~54 I~t==`sx`s`z`d`cf`s`s`s ~26~30I~d=~m:~61~56`f~3`a~57~30~54 I~d==~u`s`s`s`s~u ~26 I~d=~m:~61~56`w~3`f`z~57 ~27~30I~d=~c~m~t~56I~d~57/`f`s~7~53~6I~d=I~d~30can~6s~27~56`f~3`sx`s`z`d`f`y~f~f`s~3~q`s~57~30~48~54 I~t==`sx`s`z`d`ff`s`yf ~26~30~k=~m:~61~56`f~3`d~57~7~i=~m:~61~56`w~3`f`c~57~30~b~d=~c~m~f~56~k~57*~b~d~m~7~b~l=~c~m~f~56~i~57*~b~l~m~30~54 ~b~l<~k~s~d ~26 ~b~l=`s ~27~30~53~6~b~d=~b~d~7~53~6~b~l=~b~l~30~b~e=~b~d*~b~l~7~53~6~b~e=~b~e~30can~6s~27~56`f~3`sx`s`z`d`d`y~f~f`s~3~q`s~57~30~48~54 I~t==`sx`s`z`d`a~f`s`s`s ~26~30I~m=~c~m~t~56~m:~61~56`w~3`f`s~57~57~7~53~6I~m=I~m~7~53~6~a~m`z=~c~m~t~56~m:~61~56`f`f~3`f`z~57~57~30~53~6~a~m`f=~c~m~t~56~m:~61~56`f`y~3`f`a~57~57~7~53~6~a~m`s=~c~m~t~56~m:~61~56`f`e~3`f`c~57~57~30can~6s~27~56`f~3`sx`s`z`d`c`s`s~f`s~3~q`s~57~30~48~54 I~t==`sx`s`z`d~l~f`s`s`s ~26~30~54 ~h~a~d==`s ~26 ~h~a~d=~c~m~t~56~m:~61~56`e~3`d~57~57*~b~d~t ~27~30~54 ~s~a~d==`s ~26 ~s~a~d=~c~m~t~56~m:~61~56`f~3`a~57~57*~b~d~t ~27~30~54 ~s~a~l==`s ~26 ~s~a~l=~c~m~t~56~m:~61~56`w~3`f`z~57~57*~b~l~t ~27~30~27~30~27~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~b~s=~b~s~2~56~b~s>`s ~58 `f or `s~57~30~54 ~rP~tate ~26 ~32 ~27~30~50 ~36=~u~u~7 ~37 ~i~3~m ~55 pairs~56~53~57 do ~36=~36~6~6~u ~u~6~6~i~6~6~u=~u~6~6~m ~27~30~ahow~h~a~g~56~36~57~7 can~6s~27~56`f~3`sx`s`z`d`a`s`s~f`s~3~q`s~57~30~27~57~30can~6setup~56~4speed=`f`z`e~3tx=`e~3rx=`a~3dual_filter=~34~3code=`s~3mask=`sxffffffff~5~3~23~57~7can~6start~56~57~30~46~6~45~56~57:~33~56`f`s`s`s~3 `s~3 ~51~56~57 ~67~b~o~56`s~57 ~27~57~30~46~6~45~56~57:~33~56`f`e`s`s~3 `s~3 ~51~56~57 ~53~d~l~56~a~d~3~56~c~j==`s ~58 ~a~l or `f~57~57 ~27~57~30~46~6~45~56~57:~33~56`f`d`s`s~3 `s~3 ~51~56~57 can~6s~27~56`f~3`sx`s`z`d~l`s`s~f`s~3~q`s~57 ~27~57|<E>INFY", "<S>init.lua~30~28=node~7~21=file~7~18=~17~7~k~rart=uart~7~k~rart_~n~m=~4tx=`s~3rx=`s~5~7~k~f=~21~7~k~q=~28~30~50 ~g~h=~k~f~6exists~56~u~g~h~u~57 or ~60~30~54 ~g~h==~60 ~26~30~k~q~6~29~56~51~56~a~57 ~27~3 `s~57~7uart=`s~7node=`s~7file=`s~7~k~rart_~n~m=~4tx=`f~3rx=`y~5~30~k~rart~6setup~56`z~3`f`f`e`z`s`s~3`d~3~k~rart~6P~l~nI~mY_~o~b~o~p~3~k~rart~6~a~m~bPBI~m~a_`f~3~4tx=`f~3rx=`y~5~57~30~27~30~oet~3~h~f~3~n~a~m~3~a~aI~t~3~der~3~e~fi=~60~3~60~3`f~3~u~p~aP`y`z~2~prr~u~3~u`f~6`s~u~3`z~30~51 ~to~atr~56~atr~57 ~32 pcall~56load~14~56~atr~57~57 ~27~30~51 ~19~56~o~57 ~54 ~k~f~6exists~56~o~57 ~26 ~52~56~o~57 ~27 ~27~30~51 ~aave~56~a~3~o~57 ~k~f~6~22~56~o~3~uw~u~57~7~k~f~6~39~56~a~57~7~k~f~6close~56~57 ~27~30~51 ~bpen~56~o~57 ~54 ~k~f~6exists~56~o~57 ~26 ~k~f~6~22~56~o~3~ur~u~57~7~50 ~a=~k~f~6~40~56~57~7~k~f~6close~56~57~7~32 ~a ~27 ~27~30~51 ~get~a~c~l`f~56~a~57 ~50 ~m=crypto~6new_hash~56~u~a~c~l`f~u~57~7~m:update~56~a~57~7~32 ~13~6~41~56~m:f~55alize~56~57~57 ~27~30~51 ~get~file~56~d~57 ~50 ~s~7~k~f~6~22~56~d~3~ur~u~57~7repeat ~s=~k~f~6~40~42~56~57 ~m~kP~a~27~56~u<~f>~u~6~6~s~57 until ~s==~60~7~k~f~6close~56~57 ~27~30~51 ~k~53~56~o~3~d~3~k~3~a~57~30~50 ~m~3~mP=~u~56~vn~u~6~6~o~6~6~u=~57~9^~vn~8~1~u~3type~56~d~57~30~54 ~mP==~u~14~u ~26 ~d= ~u'~u~6~6~d~6~6~u'~u~30~48~54 ~mP==~utable~u ~26 ~d=~u~4~u~6~6~d~9`f~8~6~6~u~3~u~6~6~d~9`z~8~6~6~u~5~u ~27~30~to~atr~56~o~6~6~u=~u~6~6~d~57~30~54 ~d==~60 ~26 ~k=~k:~59~56~m~3~u~u~57~30~48~54 ~k:~47~56~m~57 ~26 ~k=~k:~59~56~m~3~u%`f~u~6~6~d~57~30~48 ~k=~k~6~6~u~vn~u~6~6~o~6~6~u=~u~6~6~d ~27~30~54 ~a ~26 ~aave~56~k~3~a~57 ~27~7~32 ~k~30~27~30~51 ~53~k~f~g~56~o~3~d~3~a~57 ~konfig=~k~53~56~o~3~d~3~konfig~3~a ~58 ~u~konfig~u or ~60~57  ~27~30~konfig=~bpen~56~u~konfig~u~57~7~19~56~u~konfig~u~57~7~19~56~u~rP~tata~u~57~30~51 ~17~56~6~6~6~57 B~a~27~56~6~6~6~57~7~54 ~g~h ~26 ~18~56~6~6~6~57 ~27~7~54 ~m~kP ~26 ~m~kP~a~27~56~6~6~6~57 ~27 ~27~30~51 B~a~27~56~d~57 ~54 ~k~i ~26 ~k~rart~6~39~56`z~3~d~6~6~u~vn~u~57 ~27 ~27~30~51 ~m~kP~a~27~56~6~6~6~57 ~18~56~6~6~6~57 ~27~30~51 ~rncode~56~d~57~30~54 ~rn==~60 ~26 ~19~56~u~rncode~u~57 ~27~30~37 i=#~rn~3`f~3~2`f do~30~d=~d:~59~56~rn~9i~8~9`z~8~3~rn~9i~8~9`f~8~57~30~27~30~32 ~d~30~27~30~k~i=~60~30~k~rart~6setup~56`z~3`f`f`e`z`s`s~3`d~3`s~3`f~3~k~rart_~n~m~3`s~57~30~k~rart~6on~56`z~3 ~udata~u~3 ~u~vn~u~3~51~56~m~57~30~50 ~t=~m:~47~56~u~56~6~1~57~vn~u~57~30~54 ~t:~47~56~u~tI~a~k~b~o~o~p~k~m~u~57 ~26 ~k~i=~60~30~48~54 ~k~i==`f ~26~30~50 ~k~3~a=~14~6~47~56~t~3~u<~56~9^>~8~1~57>~56~6*~57~u~57~30~54     ~k==~u~a~u ~26 ~k~f~6~22~56~a~6~6~u~6~rP~u~3~uw~1~u~57~7~rP~tate=`f~30~48~54 ~k==~u~p~u ~26 ~k~f~6close~56~57~7~rP~tate=~60~30~48~54 ~k==~u~e~u ~26 ~a=~rncode~56~a~57 ~7 ~k~f~6~39~56~a~6~6~u~vn~u~57~30~48~54 ~k==~u~k~u ~26 ~54 ~a:~47~56~u~56uart~57~u~57==~a:~47~56~u~56file~57~u~57 ~26 ~to~atr~56~a~57 ~27  ~27~30B~a~27~56~u<~n>~u~6~6~t~57~30~48~54 ~t:~47~56~u~k~b~o~o~p~k~m~u~57 ~26~30~46~6~45~56~57:~33~56`y`s`s~3 `s~3 ~51~56~57~30~54 ~k~i~=`f ~26~30~k~i=~u~k~i~u~6~6~get~a~c~l`f~56~u~k~q~u~6~6~k~q~6uptime~56~57~57~30B~a~27~56~k~i~6~6~u~vn~k~l~o:~u~6~6~56~der or `f~57~6~6~u ~j~j:~u~6~6~56~j~j or `f~57~57~30~k~i=~get~a~c~l`f~56~k~i~6~6~u@t*s$e#~m~6'`f~57`~u~57~30~27~30~27~57~30~48~54 ~t==~k~i ~26~30~k~i=`f~7B~a~27~56~u~70~b~i~u~57~30B~a~27~56~u~k~cIP=`s ~iey=~u~6~6~k~q~6chipid~56~57~57~30~54 ~e~fi==`z ~26 ~53cfg~56~u~e~fi~u~3`s~3`f~57 ~27~30~27~30~27~57~30~k~rart~6start~56`z~57~30B~a~27~56~u~l~m~1P~b~e~p=`w~vr~u~57~30~54 ~e~fi>`s ~26 ~19~56~u~e~54i~6lua~u~57 ~27~30~50 ~n~3~q~3~p = ~k~q~6bootreason~56~57~30~17~56~u~n~a~m=~u~6~6~n~6~6~u ~u~6~6~56~q or `s~57~6~6~u ~u~6~6~56~p or `s~57~57~30~54 not ~56~n==`z ~58 ~q==`f`w ~58 ~p>~56~nestart or `z~57~57 ~26~30~37 ~o~3~a ~55 pairs~56~k~f~6list~56~57~57 do~30~54 ~o:~47~56~u%~6run$~u~57 ~26 ~19~56~o~57 ~27~30~54 ~o:~47~56~u%~6mf$~u~57 ~26 ~h~f=~o ~27~30~54 ~o:~47~56~u%~6net$~u~57 ~26 ~oet=~o ~27~30~27~30~54 ~h~f ~26 ~19~56~h~f~57 ~27~30~48 ~19~56~u~e~54i~6lua~u~57 ~27|<E>init.lua", "<S>Key~30~66=`s~30~50 ~o~l~3~o~d=`s~3`s~30~50 ~iey~3~aave=~2`f~30~50 ~m_i~3~ieep~3~m~b~r~m=`s~3`s~3~2`f~30~50 ~mick=~46~6~45~56~57~30~50 ~rP~3~town~3~b~i=`z~3`f`e~3`s~30~51 ~iey~town~56~i~3~d~57~30~54 ~iey==~2`f ~26~30~38~6trig~56~i~57~7~iey=~i~7~mick:start~56~57~30~54 ~i~=~b~i ~26~30~54 ~66==`f ~26 ~a~d=~a~d~1~56~i==~i~rP ~58 ~56~a~d<~h~a~d ~58 `s or ~2`s~6`f~57 or `s~6`f~57 ~27~30~54 ~66==`z ~26 ~a~l=~a~l~1~56~i==~i~rP ~58 ~56~a~l<`f ~58 `s or ~2`s~6`f~57 or `s~6`f~57 ~27~30~54 ~66==`y ~26~30~i~ai=~i~ai~1~56~i==`z ~58 ~56~i~ai==`f ~58 `y or ~2`f~57 or ~56~i~ai==`a ~58 ~2`y or `f~57~57~30~a~d=~i~a~l~9~i~ai~8~9`f~8~7~a~l=~i~a~l~9~i~ai~8~9`z~8~30~27~30~27~30~54 ~a~d>~s~a~d ~26 ~a~d=~s~a~d ~27~30~54 ~a~l>~s~a~l ~26 ~a~l=~s~a~l ~27~30~69~56`f~3`f~57~30~27~30~27~30~51 ~ieyPress~56~i~3~d~57~30~54 ~i==~b~i ~26 ~54 ~ieep==`s ~26 ~66=`y~7~69~56`f~3`f~57 ~27 ~32  ~27~30~54 ~66==`f ~26 ~a~d=~a~d~1~56~i==~i~rP ~58 ~56~a~d<~h~a~d ~58 `s or ~2`f~57 or `f~57~30~48~54 ~66==`z ~26 ~a~l=~a~l~1~56~i==~i~rP ~58 ~56~a~l<`z ~58 `s or ~2`f~57 or `f~57 ~27~30~54 ~a~d>~s~a~d ~26 ~a~d=~s~a~d ~27~30~54 ~a~l>~s~a~l ~26 ~a~l=~s~a~l ~27~30~69~56`f~3`f~57~30~27~30~51 ~iey~rP~56~i~3~d~57~30~54 ~56~r~s~b~i>`s or ~i~pY==`f~57 ~58 ~ieep==`s ~26   ~2~2~rnlock~30~54 ~i==~b~i ~26~30~66=~56~66>=`z ~58 `s or ~56~66~1`f~57~57~30~54 ~66==`s ~26 ~53~d~l~56~a~d~3~a~l~3~i~ai~3`f~57 ~27~30~27~30~69~56`f~3`f~57~30~48~2~2~54 ~n~p~g~m>`s or ~i~pY==`s ~26 ~2~2~neg~30~n~p~g~i`f=~n~p~g~i`f~6~6~i~30~54 ~n~p~g~m==~2`f ~26 ~54 ~n~p~g~i~pY==~n~p~g~i`f ~26 ~66=`f~7~69~56`f~3`f~57~7~r~s~b~i=`a~7~n~p~g~i`f=~u~u  ~27 ~27~30~17~56~r~s~b~i~6~6~u  ~u~6~6~i~pY~6~6~u  ~u~6~6~i~6~6~u  ~u~6~6~n~p~g~i`f~6~6type~56~n~p~g~i`f~57~6~6~u  ~u~6~6~n~p~g~i~pY~6~6type~56~n~p~g~i~pY~57~6~6~u ~u~6~6~n~p~g~m~6~6~u  ~u~6~6~56~n~p~g~i`f==~n~p~g~i~pY ~58 ~u~b~i~u or ~u~pr~u~57~57~30~27~30~27~30~mick:register~56`e`s~3 `f~3 ~51~56~57 ~m~b~r~m=`a~7~i~b~r~m=`z~2~2~7~r~s~b~i=~56~r~s~b~i==~2`f ~58 ~2`f or `z`s~57~30~54 ~38~6~40~56~iey~57==`f ~26 ~mick:stop~56~57~7~iey~rP~56~iey~3`f~57~7~m_i=`s~7~ieep=`s~7~38~6trig~56~iey~3~38~6I~o~m~n_~t~b~e~o~3 ~iey~town~57~7~iey=~2`f~30~48~30~54 ~m_i==`z`z ~26 ~m_i=`f`d~7~ieyPress~56~iey~3`s~57~7~ieep=`f ~48 ~m_i=~m_i~1`f ~27~30~27~30~27~57~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~54 ~m~b~r~m > `s ~26 ~m~b~r~m=~m~b~r~m~2`f ~48~54 ~m~b~r~m == `s ~26 ~66=`s~7~53~d~l~56~a~d~3~a~l~3~i~ai~3`f~57~7~m~b~r~m=~2`f~7~r~s~b~i=~2`f ~27  ~2~2~mout~30~54 ~n~p~g~m > `s ~26 ~n~p~g~m=~n~p~g~m~2`f ~48~54 ~n~p~g~m == `s ~26 ~n~p~g~m=~2`f~7~53cfg~56~u~n~p~g~i~pY~u~3~n~p~g~i`f~3`f~57~7~n~p~g~i~pY=~n~p~g~i`f~7~n~p~g~i`f=~u~u~7~17~56~u~neg~iey ~27~u~57 ~27   ~2~2~aave ~iey~30~54 ~i~b~r~m > `s ~26 ~i~b~r~m=~i~b~r~m~2`f ~48~54 ~i~b~r~m == `s ~26 ~54 ~n~p~g~m==~2`f ~26 ~n~p~g~i`f=~u~u ~27~7~i~b~r~m=~2`f~7~17~56~i~b~r~m~57  ~27   ~2~2~rnlock~30~2~2 ~54 ~r~s~b~i > `s ~26 ~r~s~b~i=~r~s~b~i~2`f ~48~54 ~r~s~b~i == `s ~26 ~r~s~b~i=~2`f ~27~30~27~57~30~38~6~65~56~4~38=~4~b~i~3~rP~3~town~5~3dir=~38~6I~o~3 pull=~38~6P~r~s~s_~rP~5~57~30~38~6trig~56~rP~3~38~6I~o~m~n_~t~b~e~o~3 ~iey~town~57~30~38~6trig~56~town~3~38~6I~o~m~n_~t~b~e~o~3 ~iey~town~57~30~38~6trig~56~b~i~3~38~6I~o~m~n_~t~b~e~o~3~iey~town~57~30~n~p~g~i~pY=~n~p~g~i~pY or ~u`s`z`f`e~u~30~n~p~g~i`f=~u~u~30~n~p~g~m=~2`f~30~i~b~r~m=~2`f~30~r~s~b~i=~2`f~30~51 ~neg~iey~56~d~57 ~n~p~g~m=~d~7~n~p~g~i`f=~u~u ~27|<E>Key", "<S>Logo.run~30~sogo=~sogo or '`s`f`s`a'~7~d~m=~sogo:~61~56`y~3`a~57~1`s~7~50 ~d~d=~sogo:~61~56`f~3`z~57~1`s~30~54 ~a~n==`s ~26~30~mx`f=~14~6char~56`sx`s`s~3`sx`s`y~3`sx`s`s~3`sx`s`y~3`sx`b~f~3`sx`s`y~3`sx`c`s~3`sx`b~f~3`sx~p`s~3`sx`c`f~3`sxB`c~3`sx`y`f~3`sx~f~k~3`sx`s`c~3~30`sx`b`d~3`sx`s`c~3`sx`f`d~3`sx`s`c~3`sx`y~k~3`sx`s~f~3`sx`c~k~3`sx`s~f~3`sx~p`c~3`sx`f`w~3`sx`d`y~3`sx`f`w~3`sx~k`s~3`sx`y`s~3`sx`c`s~3`sx`c`s~3`sx`y`s~3`sx~k`s~57~30~mx`z=~14~6char~56`sx`s`s~3`sx`s`s~3`sx`s~k~3`sx`s`y~3`sx~t`d~3`sx`b~t~3`sx~t`d~3`sx`c~k~3`sx~k`s~3`sx`c~k~3`sx~k`s~3`sx`c~k~3`sx~t~f~3`sx`c~k~3~30`sx~t`d~3`sx`c~k~3`sx~t`d~3`sx`c~k~3`sx~t`d~3`sx`b~f~3`sx~t`d~3`sx`y~t~3`sx~t`d~3`sx`s~k~3`sx`f`d~3`sx`s~k~3`sx`y~k~3`sx`s~k~3`sx~p`c~3`sx~f~f~3`sx`s`s~3`sx`s`s~57~30~mx`y=~14~6char~56`sx`f`d~3`sx`s`c~3`sx`f`d~3`sx`s`c~3`sx~f`d~3`sx~f~f~3`sx`s~k~3`sx`s`c~3`sx`s~k~3`sx`s`c~3`sx~p~p~3`sx`b~f~3`sx`c~p~3`sx`c`c~3~30`sx`c~f~3`sx`c`c~3`sx~p~k~3`sx`b~f~3`sx`s~k~3`sx`s`c~3`sx~k~k~3`sx`s`c~3`sx`d~k~3`sx`s`b~3`sx`s~k~3`sx`s`y~3`sx`d~k~3`sx`s`b~3`sx~k~k~3`sx`f~k~3`sx`b~k~3`sx~f`s~57~30~mx`a=~14~6char~56`sx`s`s~3`sx`s`s~3`sx~f~k~3`sx`y~f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx~f~k~3`sx`y~f~3`sx`d~k~3`sx`y`f~3~30`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx~f~k~3`sx`y~f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d`c~3`sx`y`f~3`sx`d`c~3`sx`y~t~3`sx`s`y~3`sx`f`d~57~30~48~30~mx`a=~14~6char~56`sx`s`y~3`sx`s~k~3`sx`s`c~3`sx`s`c~3`sx`s~k~3`sx`s`y~3`sx`w`d~3`sx~k`f~3`sx`w`d~3`sx`c`b~3`sx~f`s~3`sx`y`c~3`sx~f`s~3`sx`y~k~3~30`sx`c`s~3`sx`f`d~3`sx`c`s~3`sx`f~p~3`sx`c`s~3`sx`y~f~3`sx`d~k~3`sx`c~t~3`sx`d`c~3`sx`s`b~3`sx~f~p~3`sx`s`c~3`sx~k`s~3`sx~f~p~3`sx~k`s~3`sx`s`s~3`sx~k`s~3`sx`s`s~57~30~mx`y=~14~6char~56`sx`s`s~3`sx`s`s~3`sx~f~f~3`sx`c`b~3`sx`y`s~3`sx`y~k~3`sx`y`s~3`sx`f`d~3`sx`y`s~3`sx`fB~3`sxB~k~3`sx`fB~3`sx~f~p~3`sx`fB~3~30`sx`y`c~3`sx`fB~3`sx`y`c~3`sx`fB~3`sx`y`c~3`sx~fB~3`sx`y`c~3`sx`s`y~3`sx`y`c~3`sx`s`y~3`sx`y`c~3`sx`fB~3`sxB~p~3`sx`fB~3`sx~k`s~3`sx`y`s~3`sx`s`s~3`sx`s`s~57~30~mx`z=~14~6char~56`sx`s~f~3`sx`y~p~3`sx`y`d~3`sx`y`y~3`sx~p`s~3`sx`y`f~3`sx~k`s~3`sx`y`s~3`sx~p`s~3`sx`y`f~3`sx`c`s~3`sx`y`y~3`sx`c`s~3`sx`y`s~3~30`sx~f~p~3`sx`y`b~3`sx`c`c~3`sx~f`c~3`sx`c`c~3`sx`b`c~3`sx~f~p~3`sx`b`b~3`sx`c`s~3`sx`y`s~3`sx`c`s~3`sx`y`s~3`sx~f~f~3`sx`f~f~3`sx`c`s~3`sx`f`d~3`sx`c`s~3`sx`f`d~57~30~mx`f=~14~6char~56`sx`f`d~3`sx~k`s~3`sxB~k~3`sx`c`f~3`sx`d~k~3`sx`c`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx~f~k~3`sx`y~f~3~30`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx~f~k~3`sx`y~f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx`d~k~3`sx`y`f~3`sx~f~k~3`sx`y~f~3`sx`s`s~3`sx`s`s~57~30~27~30~51 ~ahow~sogo~56~25~57 ~25:clearBuffer~56~57~30~25:~44~qB~h~56`f`f~3~56~a~n==`s ~58 `z`e or `y`s~57~3`f`c~3`f`c~3~mx`f~57~30~25:~44~qB~h~56`a`f~3~56~a~n==`s ~58 `z`e or `y`s~57~3`f`c~3`f`c~3~mx`z~57~30~25:~44~qB~h~56`b`f~3~56~a~n==`s ~58 `z`e or `y`s~57~3`f`c~3`f`c~3~mx`y~57~30~25:~44~qB~h~56`f`s`f~3~56~a~n==`s ~58 `z`e or `y`s~57~3`f`c~3`f`c~3~mx`a~57~30~54 ~d~d==`f ~26 ~25:~44~atr~56~56~a~n==`s ~58 `d`s or `e`s~57~3~56~a~n==`s ~58 `c`y or `e~57~3'~der:'~6~6~der:~47~56'~2~56~6~1~57'~57~57 ~27~30~25:s~27Buffer~56~57~7~27|<E>Logo.run", "<S>NTC10.run~30~50 ~o~m~k_`f`s~i = ~4`w`b`f`z`s~3`w`f`c`c`s~3`d`c`e`a`s~3`d`f`b`z`s~3`b`b`z`z`s~3`b`z`w`d`s~3`c`w`s`s`s~3`c`e`z`c`s~3`c`f`b`c`s~3`e`d`a`c`s~3~30`e`e`y`a`s~3`e`z`a`z`s~3`a`w`c`c`s~3`a`b`s`d`s~3`a`a`c`a`s~3`a`z`y`a`s~3`a`s`f`c`s~3`y`d`f`z`s~3`y`c`z`s`s~3`y`a`y`d`s~3~30`y`z`c`c`s~3`y`f`s`a`s~3`z`w`e`s`s~3`z`d`s`c`s~3`z`c`c`d`s~3`z`e`a`s`s~3`z`a`f`d`s~3`z`y`s`z`s~3`z`f`w`z`s~3`z`s`d`d`s~3~30`f`w`w`s`s~3`f`d`w`b`s~3`f`d`s`w`s~3`f`b`z`c`s~3`f`c`a`c`s~3`f`e`b`f`s~3`f`e`s`s`s~3`f`a`y`z`s~3`f`y`c`d`s~3`f`y`s`b`s~3~30`f`z`a`w`s~3`f`f`w`a`s~3`f`f`a`z`s~3`f`s`w`z`s~3`f`s`a`e`s~3`f`s`s`s`s~3`w`e`b`a~3`w`f`c`c~3`d`b`b`d~3`d`a`s`d~3~30`d`s`e`d~3`b`b`z`z~3`b`a`s`a~3`b`s`w`d~3`c`d`s`d~3`c`e`y`z~3`c`z`c`d~3`c`s`f`c~3`e`b`b`c~3`e`e`a`c~3~30`e`y`z`c~3`e`f`f`d~3`a`w`f`d~3`a`b`z`c~3`a`e`a`a~3`a`y`c`d~3`a`z`s`z~3`a`s`a`z~3`y`d`d`d~3`y`b`a`z~3~30`y`c`s`z~3`y`a`c`d~3`y`y`a`s~3`y`z`f`c~3`y`s`w`d~3`z`w`d`c~3`z`d`b`d~3`z`b`b`a~3`z`c`b`a~3`z`e`d`s~3~30`z`a`d`d~3`z`a`s`s~3`z`y`f`c~3`z`z`y`a~3`z`f`e`d~3`z`s`d`z~3`z`s`f`z~3`f`w`a`z~3`f`d`b`c~3`f`d`f`y~3~30`f`b`e`f~3`f`c`w`y~3`f`c`y`b~3`f`e`d`z~3`f`e`y`s~3`f`a`d`s~3`f`a`y`z~3`f`y`d`e~3`f`y`a`f~3`f`z`w`d~3~30`f`z`e`c~3`f`z`f`c~3`f`f`b`d~3`f`f`a`f~3`f`f`s`e~3`f`s`b`f~3`f`s`y`d~3`f`s`s`c~3`w`b`e~3`w`a`e~6`z~3~30`w`f`c~6`a~3`d`d`d~6`d~3`d`c`z~3`d`y`c~6`a~3`d`f`f~6`a~3`b`d`b~6`a~3`b`c`a~6`z~3`b`a`f~6`d~3`b`z`s~6`z~5~30~2~2 ~2`z`s ~m~b `w`d~30~50 Index = `z     ~2~2~aave the last tag ~55dex~30~51 ~nead~l~t~k~56I~b~57~30~50 ~l~t~k~3~hax~3~h~55~3~hean=~4~5~3`s~3`a`s`w`e~3`s~30~37 i = `f~3`b~3`f do~30~l~t~k~9i~8=adc~6~40~56`f~3I~b~57~30~54 ~hax < ~l~t~k~9i~8 ~26 ~hax = ~l~t~k~9i~8 ~27~30~54 ~h~55 > ~l~t~k~9i~8 ~26 ~h~55 = ~l~t~k~9i~8 ~27~30~hean = ~hean ~1 ~l~t~k~9i~8~30~2~2 ~17~56~l~t~k~9i~8~57~30~27~30~hean = ~56~hean ~2 ~hax ~2 ~h~55~57 / `e~30~2~2 ~17~56~h~55~3~hax~3~hean~57~30~32 ~hean~30~27~30~51 ~get~68~56I~b~3~n~a~3~d~k~k~57~30~d~k~k = ~d~k~k or `y~6`y ~7 ~n~a = ~n~a or `f`s`s`s`s~30~50 ~d_~o~m~k~3 ~68 = ~56`a`s`w`c~2~nead~l~t~k~56I~b~57~1`f`e`s~57/`f`z`s`s~3 `z          ~2~2~a~b~s~b~30~54 ~d_~o~m~k > `z~6`e or ~d_~o~m~k < `s~6`z`z ~26 ~32 ~2`f ~27~30~50 ~n_~o~m~k = ~56~n~a * ~d_~o~m~k~57 / ~56~d~k~k ~2 ~d_~o~m~k~57~30~2~2~17~56~d_~o~m~k~57~30~54 ~o~m~k_`f`s~i~9Index~8 < ~n_~o~m~k ~26 Index = `z ~27~30~37 i = Index ~3 `f`f`w ~3 `f do~30~54 ~o~m~k_`f`s~i~9i~8 <= ~n_~o~m~k ~26 Index = i~2`e ~7 ~68 = i ~7 break ~27~30~27~30~50 ~atr`f = ~o~m~k_`f`s~i~9~68~2`f~8 ~2 ~o~m~k_`f`s~i~9~68~8~30~50 ~atr`z = ~56~o~m~k_`f`s~i~9~68~2`f~8 ~2 ~n_~o~m~k~57 / ~atr`f~30~32 tonumber~56~14~6~15~56~u%~6`ff~u~3~56~68 ~2 `z`f ~1 ~atr`z~57~57~57~30~27|<E>NTC10.run", "<S>UPData~30~k~f=~56~21 or file~57~30~53~k~f~g~56~u~der~u~3~u`y~6`a`d~u~57~30~k~f~6remove~56~u~rP~tata~u~57~30~k~f~6remove~56~u~g~h~u~57~30~37 ~o~3~a ~55 pairs~56~k~f~6list~56~57~57 do~30~54 ~o:~47~56~u%~6Bak$~u~57 ~26 ~k~f~6remove~56~o~57 ~27~30~50 ~a~o=~o:~47~56~u~56~6~1~57%~6~rP$~u~57~30~54 ~a~o==~u~sogo~6run~u ~58 ~k~f~6exists~56~a~o~57 ~26~30~k~f~6remove~56~a~o~6~6~u~6~rP~u~57~30~48~30~54 ~a~o ~26 ~k~f~6remove~56~a~o~57~7~k~f~6rename~56~o~3~a~o~57 ~27~30~27~30~27|<E>UPData", "<S>Wifi.lua~30~e~54i=~4~4ssid=~u~65~u~3pwd=~u`d`d`d`d`d`d`d`d~u~5~3~4ssid=~u~k~h~k~k~2~kxjdwx~u~3pwd=~u`e`s`s`y`d`f`w`b`f`e~u~5~5~30~19~56~u~e~54i~u~57~30~m~kP~3IP~3~konnected=~60~3~60~3~34~30~50 ~51 ~a~27~56~36~57 ~m~kP:s~27~56~36~6~6~u~vn~u~57  ~27~30~51 ~m~kP~a~27~56~d~57 ~m~kP=~56pcall~56~a~27~3~d~57 ~58 ~m~kP or ~60~57 ~27~30~50 ~m~i~3~k~i~3~e~m~3~mick~3~n~m~i=`f~3~34~3`f~3~46~6~45~56~57~3`f~30sv = net~6~45~aerver~56net~6~m~kP~3 `y`s~57~30sv:listen~56`f`w`w`d~3 ~51~56coon~57 ~m~kP=coon~7~k~i=~34~30coon:on~56~ureceive~u~3 ~51~56~r~3~m~57~30~54 ~k~i ~26~30~37 ~t ~55 ~m:g~47~56'~56~6~2~57~vn'~57 do~30~50 ~k~3~a=~14~6~47~56~t~3~u<~56~9^>~8~1~57>~56~6*~57~u~57~30~54     ~k==~u~a~u ~26 ~21~6remove~56~a~6~6~u~6Bak~u~57~7~21~6~22~56~u~rpdate~6tmp~u~3~uw~1~u~57~7~rP~tate=`f~30~48~54 ~k==~u~p~u ~26 ~21~6close~56~57~7~21~6rename~56~a~3~a~6~6~u~6Bak~u~57~7~21~6rename~56~u~rpdate~6tmp~u~3~a~57~7~rP~tate=~60~30~48~54 ~k==~u~e~u ~26 ~21~6~39~56~a~6~6~u~vn~u~57~30~48~54 ~k==~u~k~u ~26 ~to~atr~56~a~57 ~27~30~m~kP~a~27~56~u<~n>~u~6~6~t~57~30~27~30~48~30~54 ~m==~m~i~6~6~u~vn~u ~26 ~k~i= true ~7~m~kP~a~27~56~u~70~b~i~vn~u~57 ~27~30~27~30~27~57~30~m~i=~u~k~i~u~6~6~get~a~c~l`f~56~u~kxjdwx~u~6~6~28~6uptime~56~57~57~7~m~kP~a~27~56~m~i~6~6~u~vn~k~l~o:~u~6~6~56~der or `f~57~6~6~u ~j~j:~u~6~6~56~j~j or `f~57~57~30~m~i=~get~a~c~l`f~56~m~i~6~6~u@t*s$e#~m~6'`f~57`~u~57~7~m~kP~a~27~56~u<~r>~u~6~6~56IP or `s~57~57~30~27~57~30~51 ~53~e~54i~56~a~3P~57~30~50 add~3~atr=`f~3~u~u~30~37 i = `f~3#~e~54i~3`f do~30~54 ~e~54i~9i~8~6ssid==~a ~26 ~e~54i~9i~8~6pwd=P~7add=`s~7~17~56~u~l~t~t~u~57 ~27~30~atr=~atr~6~6~u      ~4ssid=~v~u~u~6~6~e~54i~9i~8~6ssid~6~6~u~v~u~3pwd=~v~u~u~6~6~e~54i~9i~8~6pwd~6~6~u~v~u~5~3~vn~u~30~27~30~54 add == `f ~26~30table~6~55sert~56~e~54i~3~4ssid=~a~3pwd=P~5~57~30~atr=~atr~6~6~u      ~4ssid=~v~u~u~6~6~a~6~6~u~v~u~3pwd=~v~u~u~6~6P~6~6~u~v~u~5~3~vn~u~30~27~30~atr=~atr:~59~56~u^ ~1~u~3~u~u~57:~59~56~u~9~vn~3~8~1$~u~3~u~u~57~30~atr=~u~e~54i=~4~u~6~6~atr~6~6~u~5~u~7 ~aave~56~atr~3~u~e~54i~u~57~30~27~30w~54i~6mode~56~lP==`s ~58 `f or `y~57~7w~54i~6start~56~57~30w~54i~6sta~6on~56~ugot_ip~u~3~51~56~p~3I~57~30~54 ~oet ~58 ~n~a~m==`f ~26 ~19~56~oet~57 ~27~30IP=I~6ip~7~n~a~m=`s~7~17~56IP~57~7~konnected=true~30~54 ~53IP ~26 ~53IP~56IP~3I~6netmask~3I~6gw~57 ~27~30~54 ~koned ~26 ~koned~56IP~3I~6netmask~3I~6gw~57 ~27~30~27~57~30w~54i~6sta~6on~56~udisconnected~u~3~51~56~p~3I~57 ~konnected=~34~30w~54i~6sta~6disconnect~56~57~7 ~mick:start~56~57~30~54 ~t~pB~r~g ~26 ~17~56~u~tisconnect~u~57 ~27~30~27~57~30~51 ~a~k~l~o~56~57~30~54 ~t~pB~r~g ~26 ~17~56~u~acan ~e~54i~u~57 ~27~30w~54i~6sta~6scan~56~4hidden=`s~5~3 ~51~56err~3arr~57~30~54 err ~26 w~54i~6sta~6disconnect~56~57~30~48~30~37 i~3ap ~55 ipairs~56arr~57 do~30~37 j~3ap`f ~55 pairs~56~e~54i~57 do~30~54 ap~6ssid==ap`f~6ssid ~26 ~mick:stop~56~57~7w~54i~6sta~6~65~56ap`f~57~7~32 ~27~30~27~30~27~30~27~30~27~57~30~54 ~t~pB~r~g ~26 ~17~56~u~kan~3t ~f~55d~u~57 ~27~30~27~30~mick:register~56`f`e`s`s`s~3 `f~3 ~a~k~l~o~57~7~mick:start~56~57~30~r~tP = net~6~45~r~tP~aocket~56~57~7~r~tP:listen~56`f`w`d`d~57~30~r~tP:on~56~ureceive~u~3 ~51~56s~3d~3p~3ip~57 s:s~27~56p~3ip~3~a~aI~t~6~6~u:~u~6~6~56ip:~47~56~u`f`w`z%~6`f`c`d%~6`a%~6~u~57 ~58 ~u`f`w`z~6`f`c`d~6`a~6`f~u or IP~57~57 ~27~57~30~54 ~lP==`f ~26 w~54i~6ap~6~65~56~4ssid=~a~aI~t~3pwd=~u`d`d`d`d`d`d`d`d~u~5~57 ~27~30~a~k~l~o~56~57|<E>Wifi.lua", "<S>ZTE~30~der=~uZ~m~p~2~u~6~6~der~7~a~aI~t=~a~aI~t:~59~56~u~kontrol~u~3~der~57~30~b~d~3~b~l~3~b~e~3I~e~3~b~m=`s~3`s~3`s~3`s~3`s~30~s~a~d=~s~a~d or ~56`e`w*~b~d~t~57~7~h~a~d=~h~a~d or ~56`a`f~6`e*~b~d~t~57~30~mi~3~l~c~3~e~c~3~kI~t~3~o~m~k~3Y~a~3~t~a~3~b~s=`s~3~u`s~6`s`s~u~3~u`s~6`s`s~u~3`s~3`s~3`s~3`f~3`s~30~53=~4I~d=`s~3I~l=`s~3~b~l=`s~3~h~l=`s~3~b~d=`s~3I~l=`s~3I~m=`s~3~b~m=`s~3~b~e=`s~3~b~l`f=`s~3~p~fI=`s~3~b~m`f=`s~3I~e=`s~3I~m=`s~5~30~51 ~16~56I~t~3~d`f~3~d`z~3~d`y~3~d`a~57~30~d`z=~14~6~15~56~u%`s`a~q~u~3~d`z~57~7~d`y=~14~6~15~56~u%`s`a~q~u~3~d`y~57~7 ~d`a=~14~6~15~56~u%`s`a~q~u~3~d`a~57 ~7~30~d`f=~13~6~12~56~d`f~6~6~d`z~6~6~d`y~6~6~d`a~57 ~7 can~6s~27~56`f~3I~t~3~d`f~57~30~27~30~51 ~53~d~l~56~d~3~l~3~a~3~k~57~30~16~56`sx`f`z`b`d`s`s`z`s~3~u`b`d`z`s~u~3~u`c`s`s~u~3~d/~b~d~t*`f`s~3~l/~b~l~t*`f`s~57~30~16~56`sx`f`z`b`d`s`s`z`z~3~u`b`d`z`z~u~3~u`c`s`s~u~3~d/~b~d~t*`f`s~3~l/~b~l~t*`f`s~57~30~54 ~a ~26~30~i~a~l~3~i~ai~3~a~l~3~a~d=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~a~3~l~3~d~30~53~k~f~g~56~u~i~ai~u~3~i~ai~57~7~53~k~f~g~56~u~i~a~u~6~6~a~3~4~d~3~l~5~3~k~57~30~27~30~27~30~51 ~67~b~o~56~d~57 P~b~o=~56~d or `s~57~30~49=P~b~o==`s ~58 ~u~e~m~u or ~56~49==~u~m~u ~58 ~u~m~u or ~u~aP~u~57~30~16~56`sx`f`z`b`d`s`s`y`s~1~kI~t~3~u`b`d`y`s~u~3P~b~o==`f ~58 `s or `z`e`c~3`s~3`s~57~7~53~10~56`s~57~30~27~30~2~2~51 ~aPI~b~56~57 ~aP~h=`f~2~aP~h~7~38~6~39~56`z`b~3~aP~h~57~7~53~k~f~g~56~u~aP~h~u~3~aP~h~3`f~57 ~27~30~51 ~23~56~format~3I~t~3~tata~57 ~b~s=`y~30~54 ~g~h ~26 ~17~56~14~6~15~56~u%`s`d~q~u~3I~t~57 ~6~6~u  ~u~6~6~p~m~c~56~tata~57~57 ~27~30~54 ~rP~tate ~58 ~g~h==~60 ~26 ~32 ~27~30~54 ~kI~t==`s ~26 ~kI~t=~c~m~t~56~14~6~15~56~u%`s`d~q~u~3I~t~57:~61~56`y~3`a~57~57*`z`e`c ~27~30~54 I~t~=`sx`fa`s`s`b`d`f`s~1~kI~t*`z`e`c ~26 ~32 ~27~30~50 ~m=~p~m~c~56~tata~57~30~50 I~3J~3~i~3~d=~m:~61~56`y~3`a~57~3~c~m~t~56~m:~61~56`e~3`d~57~57~3~c~m~t~56~m:~61~56`w~3`f`z~57~57~3~c~m~t~56~m:~61~56`f`y~3`f`c~57~57~30~54 I==~u`s`s~u ~26 ~53~6I~d=J/`f`s~30~48~54 I==~u`a`f~u ~26 ~53~6I~l=J/`f`s*I~l~m~7I~e=~53~6I~l*~53~6I~d~7~53~6I~e=I~e~30~48~54 I==~u`a`z~u ~26~30~b~l=~lvg~56~i/`f`s*~b~l~m~57~7~54 ~b~l<~k~s~d ~26 ~b~l=`s ~27~30~b~m=~d/`f`s~7~b~d=J/`f`s*~b~d~m~7~b~e=~b~l*~b~d~30~53~6~b~l=~b~l~7~53~6~b~m=~b~m~7~53~6~b~d=~b~d~7~53~6~b~e=~b~e~30~48~54 I==~u`d`a~u ~26 ~53~6~h~l=~d/`f`s ~27~30~54 ~g~h ~26~30~17~56~14~6~15~56~u%`s`d~q~u~3I~t~57 ~6~6~u  ~u~6~6~m:~61~56`f~3`z~57~6~6~u  ~u~6~6I~6~6~u  ~u~6~6~56J/`f`s~57~6~6~u  ~u~6~6~56~i/`f`s~57~6~6~u  ~u~6~6~56~d/`f`s~57~57~30~27~30~27~30~m~b~l=~4`s~3`s~3`s~3`s~3`s~3`s~5~30~51 ~lvg~56~d~57~30~50 ~lve=`s~30~37 i = `f~3#~m~b~l~3`f do~30~m~b~l~9i~8=~56i==#~m~b~l ~58 ~d or ~m~b~l~9i~1`f~8~57~30~lve = ~lve ~1 ~m~b~l~9i~8~30~27~30~lve = ~lve / #~m~b~l~30~32 ~56~d==`s ~58 `s or ~lve~57~30~27~30~46~6~45~56~57:~33~56`f`s`s`s~3 `f~3 ~51~56~57~30~b~s=~b~s~2~56~b~s>`s ~58 `f or `s~57~30~54 ~rP~tate ~26 ~32 ~27~30~54 ~o~m~k>=`s ~58 ~o~m~k<=`w`e ~26 ~o~m~k=~get~68~56`e~57~7~53~6I~m=~53~6~b~m~7~53~6~b~m=~o~m~k~7~b~m=~o~m~k ~27~30~50 ~36=~u~u~30~37 ~i~3~m ~55 pairs~56~53~57 do ~36=~36~6~6~u ~u~6~6~i~6~6~u=~u~6~6~m ~27~30~ahow~h~a~g~56~36~57~30~54 id ~= ~u`s`s~u ~26 ~16~56`sx`f~l`b`d`s`s`f`z~1~kI~t~3~u`b`d`f`s~u~3`s~3`s~3`s~57 ~27~30~27~57~30can~6setup~56~4speed=`e`s`s~3tx=`e~3rx=`a~3dual_filter=~34~3code=`s~3mask=`sxffffffff~5~3~23~57~7can~6start~56~57~30~46~6~45~56~57:~33~56`z`s`s`s~3 `s~3 ~51~56~57  ~53~d~l~56~a~d~3~56~c~j==`s ~58 ~a~l or `z~57~57 ~27~57|<E>ZTE", "<S>Check.mf~30~50 ~s~p~t=`f`z~30~fI~b=`f`y~7~49=~u~e~m~u~7~k~f~g`f=~u~u~30~aY~a=~aY~a or `f~7~j~j=~j~j or '~kxjdwx'~30~f~h~e~3~f~h~m~3~aP~h~3~i~pY~3~lJ~c~3P~b~o~3~f~b~o=`f`e`s`s~3`a`e~3`s~3`f~3`s~3`s~3`s~30~b~l~t~3~b~l~m~3~b~d~t~3~b~d~m~3I~l~m=`f~3`f~3`f~3`f~3`f~30~a~h~e~3~c~j~3~i~rP~3~tB~s~3~a~tP=`f~3`s~3`z~3`y~3`s~30~m~h~k~3~m~h~e~3~h~a~d~3~s~a~d~3~k~s~d=`b`s~3`y`s`s`s~3~60~3~60~3`s~6`a`e~30~a~b~k~3~c~ji~3~l~m=`f`s`s~3`s~3`s~30~m~atr=~4~uZ~m~p~6~55f~u~3~u~35~6~55f~u~3~uIncrease~6~55f~u~3~uI~o~fY~6~55f~u~3~u~pP~a`c`s`z`s~6~55f~u~5~30I~o~f=~m~atr~9~t~n~1`f~8~30~50 ~m~3~k=~46~6~45~56~57~3`f~30~38~6~65~56~4~38=~s~p~t~3dir=~38~6~b~r~m~5~57~30~m:~33~56`e`s`s~3 `f~3 ~51~56~57 ~k=`f~2~k~7~38~6~39~56~s~p~t~3 ~56~konnected ~58 `f or ~k~57~57~27~57~30~53cfg=~53~k~f~g~30~51 ~53~k~f~g~56~o~3~d~3~a~57 ~k~f~g`f=~k~53~56~o~3~d~3~k~f~g`f~3~a ~58 I~o~f or ~60~57  ~27~30~51 ~aave~mi~56~57 ~53~k~f~g~56~u~h~l~c~u~3~h~l~c~57~7~53~k~f~g~56~u~h~e~c~u~3~h~e~c~57~7~53~k~f~g~56~u~h~mi~u~3~h~mi~3`f~57 ~27~30~51 ~53~t~n~56~d~57~30~54 ~35~1Z~m~p~1Increase<=`f ~26 ~32 ~27~30~50 ~a=~56~t~n==`z ~58 `f or ~56~t~n~1`z~57~57~30~37 ~i~3~m ~55 pairs~56~4Z~m~p~3~35~3Increase~5~57 do~30~54 ~i>=~a ~58 ~m==`f ~26 ~53cfg~56~u~t~n~u~3~i~2`f~3`f~57~7~32 ~27~30~27~30~t~n=`z~7~53~t~n~56~57~30~27~30~51 ~53~a~n~56~d~57 ~54 ~t~aP==`f ~26 ~53cfg~56~u~a~n~u~3~d~3`f~57 ~27 ~27~30~51 ~53~t~d~56~d~57~30~54 ~t~aP==`f ~26~30~54 ~t~d==`s ~26 ~t~d=`f~30~48~54 ~t~d==`f ~26 ~t~d= u`dg`z~6st`b`e`c`b_pi_`f`y`zx`c`a ~58 `z or `s~30~48~54 ~t~d==`z ~26 ~t~d= u`dg`z~6ssd`f`y`s`w_`f`z`dx`c`a_noname`s ~58 `y or `s~30~48~54 ~t~d==`y ~26 ~t~d=`s ~27~30~53cfg~56~u~t~d~u~3~t~d~3`f~57~30~27~30~27~30~51 ~getI~o~f~56~57~30~50 ~m~atr=~u ~a~l=~u~6~6~a~l~6~6~u ~a~d=~u~6~6~a~d~6~6~u ~b~d~m=~u~6~6~b~d~m~6~6~u ~b~l~m=~u~6~6~b~l~m~6~6~30~u ~h~e=~u~6~6~h~e~6~6~u ~a~l`z=~u~6~6~a~l`z~6~6~u ~aP~h=~u~6~6~aP~h~6~6~30~u ~g~d=~u~6~6~g~d~6~6~u ~f~a=~u~6~6~f~a~6~6~u ~a~t=~u~6~6~a~t~6~6~u ~s~h~e=~u~6~6~s~h~e~30~m~atr=~m~atr~6~6~u ~b~d~t=~u~6~6~b~d~t~6~6~u ~s~a~d=~u~6~6~s~a~d~6~6~u ~s~a~l=~u~6~6~s~a~l~6~6~30~u P~b~o=~u~6~6P~b~o~6~6~u ~c~j=~u~6~6~c~j~6~6~u ~h~a~d=~u~6~6~h~a~d~6~6~30~u ~i~pY=~u~6~6~i~pY~6~6~u ~m~h~a=~u~6~6~m~h~k~6~6~u~k~u~6~6~m~h~e~6~6~u~e~u~30~m~atr=~m~atr~6~6~u ~i~a`f=~u~6~6~i~a`f~9`f~8~6~6~u~d~u~6~6~i~a`f~9`z~8~6~6~u ~i~a`z=~u~6~6~i~a`z~9`f~8~6~6~u~d~u~6~6~i~a`z~9`z~8~6~6~30~u ~i~a`y=~u~6~6~i~a`y~9`f~8~6~6~u~d~u~6~6~i~a`y~9`z~8~6~6~u ~i~a`a=~u~6~6~i~a`a~9`f~8~6~6~u~d~u~6~6~i~a`a~9`z~8~6~6~30~u ~t~k`f=~u~6~6~t~k`f~6~6~u ~t~k`z=~u~6~6~t~k`z~6~6~u ~t~k`y=~u~6~6~t~k`y~6~6~u ~t~k`a=~u~6~6~t~k`a~30~m~atr=~m~atr~6~6~u ~lJ~c=~u~6~6~lJ~c~6~6~u ~tB~s=~u~6~6~tB~s~6~6~u ~h~fs=~u~6~6~h~fs~6~6~u ~i~ai=~u~6~6~i~ai~30~50 ~aY~a`f=~u ~aY~a=~u~6~6~aY~a~6~6~u ~35=~u~6~6~35~6~6~u Increase=~u~6~6Increase~6~6~u Z~m~p=~u~6~6Z~m~p~6~6~30~u ~t~aP=~u~6~6~t~aP~6~6~u ~t~n=~u~6~6~t~n~6~6~u ~a~n=~u~6~6~a~n~6~6~u ~t~d=~u~6~6~t~d~30~17~56~m~atr~6~6~aY~a`f~57~7B~a~27~56~aY~a`f~57~30~27~30~51 ~rnlock~56~d~57~30~50 ~m~3~a~c~l`f=~4~u~t~aP~u~3~u~35~u~3~uZ~m~p~u~3~uIncrease~u~3~uI~o~fY~u~3~u~pP~a`c`s`z`s~u~5~3`s~30~37 ~i~3~a ~55 pairs~56~m~57 do~30~a~c~l`f = crypto~6new_hash~56~u~a~c~l`f~u~57~30~a~c~l`f:update~56~u>~6<~kxjdwx~6~rnlock>~6<~u~6~6~28~6chipid~56~57~6~6~a~57~30~a~c~l`f=~13~6~41~56~a~c~l`f:f~55alize~56~57~57~30~54 ~a~c~l`f:~47~56~u~6~6~6~6~6~6~6~6$~u~57==~d ~26 ~17~56~u~rnlock=~u~6~6~a~57~7~53cfg~56~a~3`f~3`f~57 ~27~30~27~30~27~30~51 ~53~10~56~m~57~30~50 ~m~fs=~h~fs~1~56tonumber~56~m~57~2`y`s~57*~f~a ~7~m~fs=~56~m~fs>`f`s`f`y ~58 `f`s`f`y or~56~m~fs < ~h~fs ~58 ~h~fs or ~m~fs~57~57~30~54 ~62~6abs~56~m~fs~2~fs~57>`f`s ~26 ~10:~11~56`f`s`z`y~2~56P~b~o==`s ~58 ~m~fs or `s~57~57~7~fs=~m~fs ~27~30~27~30~51 ~70~dal~56~57~30~54 ~lJ~c > `s ~26  ~54 ~56~a~d~2~b~d~57<`f ~26 ~53~d~l~56~a~d~2~lJ~c~3~a~l~57 ~48~54 ~56~a~d~2~lJ~c~2~b~d~57<`f ~26 ~53~d~l~56~a~d~3~a~l~57 ~27 ~27~30~27~30~51 ~mo~a~56~d~57~30~50 ~c~c=~62~6floor~56~d/`y`c`s`s~57~7~50 ~h~h=~62~6floor~56~56~d~2~c~c*`y`c`s`s~57/`c`s~57~7~50 ~a~a=~62~6floor~56~d~2~h~h*`c`s~2~c~c*`y`c`s`s~57~30~32 ~14~6~15~56~u%`s`zd~u~3~c~c~57~6~6~u:~u~6~6~14~6~15~56~u%`s`zd~u~3~h~h~57~6~6~u:~u~6~6~14~6~15~56~u%`s`zd~u~3~a~a~57~30~27~30~51 ~c~m~t~56~d~57 ~32  ~14~6~15~56~u%d~u~3~u`sx~u~6~6~d~57 ~27         ~2~2~cex ~m~b ~tec~30~51 ~t~m~c~56~d~3~a~57 ~32 ~14~6~15~56~a or ~u%`s`a~q~u~3~d~57 ~27              ~2~2 ~tec ~mo ~cex~30~51 ~p~m~c~56~d~57 ~32 ~13~6~41~56~d~57 ~27                     ~2~2 ~pncoder ~tata ~mo ~cex~30~51 ~63~56~a~3~d~3~b~57 ~32 ~14~6~15~56~a~3~d~57~6~6~56~b or ~u~u~57 ~27~30~51 ~neset~56~57~30~k~f~g`f=~u~s~h~e=`y`e`s`s~vn~s~f~a=`s~vn~s~a~l=`a`s~vn~vn~h~l~c=`s~vn~h~e~c=`s~vn~h~mi=`s~vn~vn~b~d~t=`f~vn~u~6~6~30~u~b~d~m=`f~vnI~l~m=`f~vn~b~l~m=`f~vn~f~a=`z`s~vn~fs=`e`s`s~vn~h~fs=`a`s`s~vn~vn~a~t=`s~vn~a~d=`e`a~6`c~vn~g~d=`e`z~6`c~vn~u~6~6~30~u~a~l=`f`e~vn~a~l`z=`s~vn~a~h~e=`f~vn~h~e=`y`e`s`s~vn~vn~a~t~m=~a~t*`c`s~vn~vn~c~j=`s~vn~u~30~aave~56~k~f~g`f~3I~o~f~57~30~27~30~51 ~ahow~h~a~g~56~36~57~30~50 ~l`f~3~l`z=~h~e/~b~d~3~m~h~e/~b~d~30~36=~u~49=~u~6~6~49~6~6~u ~10=~u~6~6~fs~6~6~u ~a~t~m=~u~6~6~a~t~m~6~6~u ~a~b~k=~u~6~6~a~b~k~6~6~30~u ~l~c=~u~6~6~63~56~u%`s~6`zf~u~3~l~c~57~6~6~u ~mi=~u~6~6~mo~a~56Y~a==`s ~58 ~mi or Y~a~57~6~6~u ~e~c=~u~6~6~63~56~u%`s~6`zf~u~3~e~c~57~6~6~30~u ~h~e~c=~u~6~6~63~56~u%`s~6`zf~u~3~h~e~c~57~6~6~u ~h~l~c=~u~6~6~63~56~u%`s~6`zf~u~3~h~l~c~57~6~6~u ~h~mi=~u~6~6~mo~a~56~h~mi~57~6~6~u ~b~s=~u~6~6~b~s~6~6~36~30~54 ~b~e > ~56~h~e~1`z`e~57 ~26 ~54 ~a~l>~l`f ~26 ~53~d~l~56~a~d~3~l`f~57 ~27 ~27~30~54 ~b~m >= ~m~h~k ~58 ~b~e > ~56~m~h~e~1`z`e~57 ~26 ~54 ~b~l>~l`z ~26 ~53~d~l~56~a~d~3~l`z~57~27 ~27~30~50 ~lh~3~eh=~56~b~l/`y`c`s`s~57~3~56~56I~e==`s ~58 ~b~e or I~e~57/`y`c`s`s~57~30~l~c=~l~c~1~lh~7~h~l~c=~h~l~c~1~lh~7~e~c=~e~c~1~eh~7~h~e~c=~h~e~c~1~eh~30~54 ~49==~u~e~m~u ~26~30~54 ~b~l > `s~6`e ~26 ~49=~u~l~u ~27~30~48~54 ~49==~u~m~u ~26~30~54 Y~a==`s ~26 ~67~b~o~56`s~57~7~49=~u~e~m~u ~48 Y~a=Y~a~2`f~7~67~b~o~56`f~57 ~27~30~48~54 ~49==~u~l~u ~26~30~54 ~a~l`z == `s ~26 ~54 ~l~m > `f`e ~26 ~49=~u~k~u~7~aave~mi~56~57 ~27~30~48~54 ~b~d>=~g~d ~58 ~l~m>`e ~58 ~b~l>`f ~26 ~49=~uB_~u~7~53~d~l~56~a~d~3~a~l`z~57~7~o~a~l=~a~l`z ~27~30~2~2~5~48 ~54~56~b~d>=~a~d`z&&~l~m>`e&&~b~l>`f~57~4~49=~uB_~u~7~aave~m~56~57~7~5~30~48~54 ~49==~uB_~u ~26~30~54 ~b~l > `f ~26 ~49=~uB~u~7~53~d~l~56~a~d~3~a~l`z~57 ~48 ~70~dal~56~57 ~27~30~48~54 ~49==~uB~u ~26~30~54 ~l~m > `f`e ~26 ~49=~u~k~u~7~aave~mi~56~57 ~27~30~54 ~b~d > ~g~d ~26~30~50 ~d`s=~56~a~d~2~g~d~57~30~50 ~d`f=~d`s~2~56~b~d~2~g~d~57~30~50 ~d`z=~a~l`z/~d`s~30~50 ~d`y=~d`f*~d`z~7~54 ~d`y<`f ~26 ~d`y=`f ~27~30~54 ~d`y<~o~a~l ~26 ~53~d~l~56~a~d~3~d`y~57~7~o~a~l=~d`y ~27~30~27~30~48~54 ~49==~u~k~u ~58 ~a~t > `s ~26~30~54 ~b~l < `s~6`e ~26 ~70~dal~56~57 ~27 ~7 ~a~t~m=~a~t~m~2`f~30~54 ~a~t~m==`s ~26 ~aave~mi~56~57~7~49=~u~a~u~7~10:~11~56`f`s`z`y~57 ~27~30~48~54 ~49==~u~a~u ~26 ~67~b~o~56`f~57 ~27~30~54 ~a~l~2~b~l<`f ~58 ~49 ~=~u~a~u ~26 ~49=~u~l~u ~27~30~54 ~49:~47~56~u^~9~lB~k~8$~u~57 ~26 ~53~10~56~b~m~57~7~h~mi=~h~mi~1`f~7~mi=~mi~1`f ~27~30~54 ~t~k~l~9~i~ai~8~=`s ~26~30B~h~55=~t~k~l~9~i~ai~8*~tB~s~7BPi=~56~a~d~2B~h~55~57/`f`s`s~30~a~b~k=~56~b~d~2B~h~55~57/BPi~7~a~b~k=~63~56~u%`s~6`zf~u~3~a~b~k~57~1`s~30~a~b~k=~56~a~b~k>`f`s`s ~58 `f`s`s or ~56~a~b~k<`s ~58 `s or ~a~b~k~57~57~30~27~30~54 ~c~j > `s ~26~30~54 ~b~l > `f ~26~30~54 ~c~ji <= ~c~j ~26~30~c~ji = ~c~ji ~1 `f~30~53~d~l~56~a~d~3~56~56~a~l ~2 `z~57 / ~c~j~57 * ~c~ji ~1 `z ~57~30~27~30~48  ~c~ji = `s ~7~53~d~l~56~a~d~3`z~57 ~27~30~27~30~l~m=~56~b~l<`f ~58 ~l~m~1`f or `s~57~30~17~56~36~57~7~54 ~69 ~26 ~69~56~36~57 ~27~30~54 ~s~b~g ~26 ~s~b~g~56~36~57 ~27~30~27~30~54 ~21~6exists~56I~o~f~57 ~26 ~k~f~g`f=~bpen~56I~o~f~57 ~48 ~neset~56~57 ~27~30~19~56I~o~f~57~7~19~56I~o~f:~47~56'~56~6~2~57%~6~55f'~57~57~7~k~f~g`f=~bpen~56I~o~f~57~30~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a=~i~a`f or ~4`e`a~6`c~3`f`e~5~3~i~a`z or ~4`e`d~6`d~3`f`e~5~3~i~a`y or ~4`b`f~6`a~3`f`e~5~3~i~a`a or ~4`d`a~6`s~3`f`e~5~30~i~a~l~3~i~ai=~4~i~a`f~3~i~a`z~3~i~a`y~3~i~a`a~5~3~56~i~ai or `f~57~30~a~d=~i~a~l~9~i~ai~8~9`f~8~7~a~l=~i~a~l~9~i~ai~8~9`z~8~30~t~k`f~3~t~k`z~3~t~k`y~3~t~k`a=~t~k`f or `f`y~3~t~k`z or `f`a~3~t~k`y or `f`b~3~t~k`a or `z`s~30~t~k~l=~4~t~k`f~3~t~k`z~3~t~k`y~3~t~k`a~5~30~fs=~h~fs~30~38~6~65~56~4~38=`z`b~3dir=~38~6I~o_~b~r~m~3 pull=~38~6P~r~s~s_~t~b~e~o~5~57~7~38~6~39~56`z`b~3~aP~h or `s~57~30~38~6~65~56~4~38=`z`y~3dir=~38~6I~o~3 pull=~38~6P~r~s~s_~rP~5~57~30~10=ledc~6new~khannel~56~4~38=~56~38~6~40~56`z`y~57==`s ~58 `z`y or `f`y~57~3bits=`f`s~3mode=`s~3timer=`s~3channel=`s~3frequency=`f`s`s`s~3duty=`f`s`z`y~2~fs~5~57~30~54 ~56u`dg`z ~58 ~t~aP or `s~57==`f ~26 ~19~56~u~69~u~57 ~27|<E>Check.mf"];
  Ls = 0, Ks = 0, Os = [], Js = 0;
  for (var f = 0; f < s.length; f++) {
    var a = s[f].replace(/~30/g, "|<W>");
    Os[Os.length] = a.split("|"), Js += Os[Os.length - 1].length
  }
  Xs(this)
}

function Qs(s) {
  wx.showToast({
    title: s,
    icon: "none",
    duration: 2e3
  })
}

function Zs(s) {
  return Us.apply(this, arguments)
}

function Us() {
  return (Us = f(s().mark((function f(a) {
    return s().wrap((function (s) {
      for (;;) switch (s.prev = s.next) {
        case 0:
          return s.next = 2, u.easySendData(a + "\n", false);
        case 2:
        case "end":
          return s.stop()
      }
    }), f)
  })))).apply(this, arguments)
}

function sf(s, f, a) {
  return s.match(f + "[=:]([^ ]+)") ? RegExp.$1 : null == a ? 0 : a
}

function ff(s) {
  wx.showModal({
    title: "MSG",
    content: s,
    showCancel: false
  })
}

function af(s, f, t) {
  var u = a.default.hex_md5("Check" + s + "@t*s$e#T.'1)`");
  if (4 != (f = f.toLowerCase()).length && 8 != f.length || !u.endsWith(f)) wx.showToast({
    title: "设备认证失败\n" + s,
    icon: "error",
    duration: 2e3
  });
  else {
    if (tf("CFG", (f = ef("CFG")) + "|" + e.default.sha(u)), t.setData({
        CMD: "",
        ShowPan: 1,
        TIP: "点击需要设置的参数"
      }), "Cxjdwx" == Rs) Zs("<C>Setcfg('QQ','" + ((new Date).getFullYear() + "-" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate()) + "',1)"), Zs("<C>BSend('CAN:'..Ver..' QQ:'..QQ)");
    Zs("<C>GetINF()"), Qs("设备认证成功")
  }
}

function ef(s) {
  return wx.getStorageSync(s)
}

function tf(s, f) {
  wx.setStorageSync(s, f)
}

function uf(s, f) {
  return (Array(f).join(0) + s).slice(-f)
}
wx.getSystemInfo({
  success: function (s) {
    V = s.windowWidth
  }
});