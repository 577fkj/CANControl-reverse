Component({
  properties: {
    initColor: {
      type: String,
      value: "rgb(255,0,0)"
    },
    maskClosable: {
      type: Boolean,
      value: !0
    },
    mask: {
      type: Boolean,
      value: !0
    },
    show: {
      type: Boolean,
      value: !1
    },
    title: {
      type: String,
      value: "标题栏"
    },
    colorRes: {
      type: String,
      value: "rgb(255,0,0)"
    }
  },
  data: {},
  lifetimes: {
    attached: function () {
      var t = this.data.initColor;
      this.setData({
        hueColor: this.hsv2rgb(this.rgb2hsv(t).h, 100, 100)
      })
    },
    ready: function () {
      var t = this;
      console.log("ready");
      var e = this.createSelectorQuery();
      e.select(".target").boundingClientRect(), e.exec((function (e) {
        var a = e[0];
        if (a) {
          t.SV = {
            W: a.width - 28,
            H: a.height - 28,
            Step: (a.width - 28) / 100
          };
          var s = t.rgb2hsv(t.data.initColor),
            o = s.h,
            i = s.s,
            r = s.v;
          t.setData({
            hsv: {
              h: o,
              s: i,
              v: r
            },
            x: Math.round(i * t.SV.Step),
            y: Math.round((100 - r) * t.SV.Step)
          })
        }
      }))
    }
  },
  methods: {
    areaTap: function (t) {
      var e = this,
        a = this.createSelectorQuery();
      a.select(".target").boundingClientRect(), a.exec((function (a) {
        var s = a[0];
        s && (e.setData({
          x: t.detail.x - s.left - 14,
          y: t.detail.y - s.top - 14
        }), e.changeSV({
          detail: {
            x: e.data.x,
            y: e.data.y
          }
        }), e.onEnd())
      }))
    },
    onEnd: function () {
      this.triggerEvent("changeColor", {
        color: this.data.colorRes
      })
    },
    changeHue: function (t) {
      var e = t.detail.value;
      this.setData({
        "hsv.h": e,
        hueColor: this.hsv2rgb(e, 100, 100),
        colorRes: this.hsv2rgb(e, this.data.hsv.s, this.data.hsv.v)
      })
    },
    changeSV: function (t) {
      var e = t.detail,
        a = e.x,
        s = e.y;
      a = Math.round(a / this.SV.Step), s = 100 - Math.round(s / this.SV.Step), this.setData({
        "hsv.s": a,
        "hsv.v": s,
        colorRes: this.hsv2rgb(this.data.hsv.h, a, s)
      })
    },
    close: function (t) {
      this.data.maskClosable && (this.setData({
        show: !1
      }), this.triggerEvent("close"))
    },
    preventdefault: function () {},
    hsv2rgb: function (t, e, a) {
      var s = (t / 360).toFixed(2),
        o = (e / 100).toFixed(2),
        i = (a / 100).toFixed(2),
        r = Math.floor(6 * s),
        h = 6 * s - r,
        n = i * (1 - o),
        l = i * (1 - h * o),
        c = i * (1 - (1 - h) * o),
        v = 0,
        d = 0,
        u = 0;
      switch (r % 6) {
        case 0:
          v = i, d = c, u = n;
          break;
        case 1:
          v = l, d = i, u = n;
          break;
        case 2:
          v = n, d = i, u = c;
          break;
        case 3:
          v = n, d = l, u = i;
          break;
        case 4:
          v = c, d = n, u = i;
          break;
        case 5:
          v = i, d = n, u = l
      }
      return "rgb(" + Math.floor(255 * v) + "," + Math.floor(255 * d) + "," + Math.floor(255 * u) + ")"
    },
    rgb2hsv: function (t) {
      var e, a, s = t.split(","),
        o = parseInt(s[0].split("(")[1]) / 255,
        i = parseInt(s[1]) / 255,
        r = parseInt(s[2].split(")")[0]) / 255,
        h = Math.max(o, i, r),
        n = Math.min(o, i, r),
        l = h,
        c = h - n;
      if (a = 0 == h ? 0 : c / h, h == n) e = 0;
      else {
        switch (h) {
          case o:
            e = (i - r) / c + (i < r ? 6 : 0);
            break;
          case i:
            e = (r - o) / c + 2;
            break;
          case r:
            e = (o - i) / c + 4
        }
        e /= 6
      }
      return {
        h: (360 * e).toFixed(),
        s: (100 * a).toFixed(),
        v: (100 * l).toFixed()
      }
    }
  }
});