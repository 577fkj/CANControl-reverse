var e = function (e) {
  return (e = e.toString())[1] ? e : "0" + e
};
module.exports = {
  formatTime: function (t) {
    var n = t.getFullYear(),
      r = t.getMonth() + 1,
      o = t.getDate(),
      a = t.getHours(),
      u = t.getMinutes(),
      i = t.getSeconds();
    return [n, r, o].map(e).join("/") + " " + [a, u, i].map(e).join(":")
  },
  newAb2Str: function (e) {
    var t = new Uint8Array(e),
      n = String.fromCharCode.apply(null, t);
    return decodeURIComponent(escape(n))
  }
};