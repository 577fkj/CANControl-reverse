Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.default = void 0;
var r = {};

function n(r, n) {
  r[n >> 5] |= 128 << n % 32, r[14 + (n + 64 >>> 9 << 4)] = n;
  for (var t = 1732584193, c = -271733879, h = -1732584194, i = 271733878, l = 0; l < r.length; l += 16) {
    var v = t,
      d = c,
      g = h,
      m = i;
    t = e(t, c, h, i, r[l + 0], 7, -680876936), i = e(i, t, c, h, r[l + 1], 12, -389564586), h = e(h, i, t, c, r[l + 2], 17, 606105819), c = e(c, h, i, t, r[l + 3], 22, -1044525330), t = e(t, c, h, i, r[l + 4], 7, -176418897), i = e(i, t, c, h, r[l + 5], 12, 1200080426), h = e(h, i, t, c, r[l + 6], 17, -1473231341), c = e(c, h, i, t, r[l + 7], 22, -45705983), t = e(t, c, h, i, r[l + 8], 7, 1770035416), i = e(i, t, c, h, r[l + 9], 12, -1958414417), h = e(h, i, t, c, r[l + 10], 17, -42063), c = e(c, h, i, t, r[l + 11], 22, -1990404162), t = e(t, c, h, i, r[l + 12], 7, 1804603682), i = e(i, t, c, h, r[l + 13], 12, -40341101), h = e(h, i, t, c, r[l + 14], 17, -1502002290), t = u(t, c = e(c, h, i, t, r[l + 15], 22, 1236535329), h, i, r[l + 1], 5, -165796510), i = u(i, t, c, h, r[l + 6], 9, -1069501632), h = u(h, i, t, c, r[l + 11], 14, 643717713), c = u(c, h, i, t, r[l + 0], 20, -373897302), t = u(t, c, h, i, r[l + 5], 5, -701558691), i = u(i, t, c, h, r[l + 10], 9, 38016083), h = u(h, i, t, c, r[l + 15], 14, -660478335), c = u(c, h, i, t, r[l + 4], 20, -405537848), t = u(t, c, h, i, r[l + 9], 5, 568446438), i = u(i, t, c, h, r[l + 14], 9, -1019803690), h = u(h, i, t, c, r[l + 3], 14, -187363961), c = u(c, h, i, t, r[l + 8], 20, 1163531501), t = u(t, c, h, i, r[l + 13], 5, -1444681467), i = u(i, t, c, h, r[l + 2], 9, -51403784), h = u(h, i, t, c, r[l + 7], 14, 1735328473), t = o(t, c = u(c, h, i, t, r[l + 12], 20, -1926607734), h, i, r[l + 5], 4, -378558), i = o(i, t, c, h, r[l + 8], 11, -2022574463), h = o(h, i, t, c, r[l + 11], 16, 1839030562), c = o(c, h, i, t, r[l + 14], 23, -35309556), t = o(t, c, h, i, r[l + 1], 4, -1530992060), i = o(i, t, c, h, r[l + 4], 11, 1272893353), h = o(h, i, t, c, r[l + 7], 16, -155497632), c = o(c, h, i, t, r[l + 10], 23, -1094730640), t = o(t, c, h, i, r[l + 13], 4, 681279174), i = o(i, t, c, h, r[l + 0], 11, -358537222), h = o(h, i, t, c, r[l + 3], 16, -722521979), c = o(c, h, i, t, r[l + 6], 23, 76029189), t = o(t, c, h, i, r[l + 9], 4, -640364487), i = o(i, t, c, h, r[l + 12], 11, -421815835), h = o(h, i, t, c, r[l + 15], 16, 530742520), t = a(t, c = o(c, h, i, t, r[l + 2], 23, -995338651), h, i, r[l + 0], 6, -198630844), i = a(i, t, c, h, r[l + 7], 10, 1126891415), h = a(h, i, t, c, r[l + 14], 15, -1416354905), c = a(c, h, i, t, r[l + 5], 21, -57434055), t = a(t, c, h, i, r[l + 12], 6, 1700485571), i = a(i, t, c, h, r[l + 3], 10, -1894986606), h = a(h, i, t, c, r[l + 10], 15, -1051523), c = a(c, h, i, t, r[l + 1], 21, -2054922799), t = a(t, c, h, i, r[l + 8], 6, 1873313359), i = a(i, t, c, h, r[l + 15], 10, -30611744), h = a(h, i, t, c, r[l + 6], 15, -1560198380), c = a(c, h, i, t, r[l + 13], 21, 1309151649), t = a(t, c, h, i, r[l + 4], 6, -145523070), i = a(i, t, c, h, r[l + 11], 10, -1120210379), h = a(h, i, t, c, r[l + 2], 15, 718787259), c = a(c, h, i, t, r[l + 9], 21, -343485551), t = f(t, v), c = f(c, d), h = f(h, g), i = f(i, m)
  }
  return Array(t, c, h, i)
}

function t(r, n, t, e, u, o) {
  return f((a = f(f(n, r), f(e, o))) << (c = u) | a >>> 32 - c, t);
  var a, c
}

function e(r, n, e, u, o, a, c) {
  return t(n & e | ~n & u, r, n, o, a, c)
}

function u(r, n, e, u, o, a, c) {
  return t(n & u | e & ~u, r, n, o, a, c)
}

function o(r, n, e, u, o, a, c) {
  return t(n ^ e ^ u, r, n, o, a, c)
}

function a(r, n, e, u, o, a, c) {
  return t(e ^ (n | ~u), r, n, o, a, c)
}

function c(r, t) {
  var e = h(r);
  e.length > 16 && (e = n(e, 8 * r.length));
  for (var u = Array(16), o = Array(16), a = 0; a < 16; a++) u[a] = 909522486 ^ e[a], o[a] = 1549556828 ^ e[a];
  var c = n(u.concat(h(t)), 512 + 8 * t.length);
  return n(o.concat(c), 640)
}

function f(r, n) {
  var t = (65535 & r) + (65535 & n);
  return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
}

function h(r) {
  for (var n = Array(), t = 0; t < 8 * r.length; t += 8) n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << t % 32;
  return n
}

function i(r) {
  for (var n = "", t = 0; t < 32 * r.length; t += 8) n += String.fromCharCode(r[t >> 5] >>> t % 32 & 255);
  return n
}

function l(r) {
  for (var n = "0123456789abcdef", t = "", e = 0; e < 4 * r.length; e++) t += n.charAt(r[e >> 2] >> e % 4 * 8 + 4 & 15) + n.charAt(r[e >> 2] >> e % 4 * 8 & 15);
  return t
}

function v(r) {
  for (var n = "", t = 0; t < 4 * r.length; t += 3)
    for (var e = (r[t >> 2] >> t % 4 * 8 & 255) << 16 | (r[t + 1 >> 2] >> (t + 1) % 4 * 8 & 255) << 8 | r[t + 2 >> 2] >> (t + 2) % 4 * 8 & 255, u = 0; u < 4; u++) 8 * t + 6 * u > 32 * r.length ? n += "" : n += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >> 6 * (3 - u) & 63);
  return n
}
r.hex_md5 = function (r) {
  return l(n(h(r), 8 * r.length))
}, r.b64_md5 = function (r) {
  return v(n(h(r), 8 * r.length))
}, r.str_md5 = function (r) {
  return i(n(h(r), 8 * r.length))
}, r.hex_hmac_md5 = function (r, n) {
  return l(c(r, n))
}, r.b64_hmac_md5 = function (r, n) {
  return v(c(r, n))
}, r.str_hmac_md5 = function (r, n) {
  return i(c(r, n))
};
var d = r;
exports.default = d;