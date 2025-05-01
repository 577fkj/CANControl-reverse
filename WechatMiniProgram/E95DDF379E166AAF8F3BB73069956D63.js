function r(r) {
  var n,
    t,
    e = new Uint8Array(
      (function (r) {
        var n,
          t,
          e,
          u = [];
        for (n = 0; n < r.length; n++)
          (t = r.charCodeAt(n)) < 128 ?
          u.push(t) :
          t < 2048 ?
          u.push(192 + ((t >> 6) & 31), 128 + (63 & t)) :
          ((e = 55296 ^ t) >> 10 == 0 ?
            ((t = (e << 10) + (56320 ^ r.charCodeAt(++n)) + 65536),
              u.push(240 + ((t >> 18) & 7), 128 + ((t >> 12) & 63))) :
            u.push(224 + ((t >> 12) & 15)),
            u.push(128 + ((t >> 6) & 63), 128 + (63 & t)));
        return u;
      })(r)
    ),
    u = 16 + (((e.length + 8) >>> 6) << 4);
  for (
    (r = new Uint8Array(u << 2)).set(new Uint8Array(e.buffer)),
    r = new Uint32Array(r.buffer),
    t = new DataView(r.buffer),
    h = 0; h < u; h++
  )
    r[h] = t.getUint32(h << 2);
  (r[e.length >> 2] |= 128 << (24 - 8 * (3 & e.length))),
  (r[u - 1] = e.length << 3);
  var f = [],
    o = [
      function () {
        return (l[1] & l[2]) | (~l[1] & l[3]);
      },
      function () {
        return l[1] ^ l[2] ^ l[3];
      },
      function () {
        return (l[1] & l[2]) | (l[1] & l[3]) | (l[2] & l[3]);
      },
      function () {
        return l[1] ^ l[2] ^ l[3];
      },
    ],
    i = function (r, n) {
      return (r << n) | (r >>> (32 - n));
    },
    a = [1518500249, 1859775393, -1894007588, -899497514],
    l = [1732584193, -271733879, null, null, -1009589776];
  for (l[2] = ~l[0], l[3] = ~l[1], h = 0; h < r.length; h += 16) {
    var c = l.slice(0);
    for (n = 0; n < 80; n++)
      (f[n] =
        n < 16 ? r[h + n] : i(f[n - 3] ^ f[n - 8] ^ f[n - 14] ^ f[n - 16], 1)),
      (t =
        (i(l[0], 5) + o[(n / 20) | 0]() + l[4] + f[n] + a[(n / 20) | 0]) | 0),
      (l[1] = i(l[1], 30)),
      l.pop(),
      l.unshift(t);
    for (n = 0; n < 5; n++) l[n] = (l[n] + c[n]) | 0;
  }
  t = new DataView(new Uint32Array(l).buffer);
  for (var h = 0; h < 5; h++) l[h] = t.getUint32(h << 2);
  return Array.prototype.map
    .call(new Uint8Array(new Uint32Array(l).buffer), function (r) {
      return (r < 16 ? "0" : "") + r.toString(16);
    })
    .join("");
}
Object.defineProperty(exports, "__esModule", {
    value: true
  }),
  (exports.default = void 0),
  (r.sha = function (n) {
    return r(n);
  });
var n = r;
exports.default = n;