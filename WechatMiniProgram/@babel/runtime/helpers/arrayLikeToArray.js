function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = new Array(a); e < a; e++) n[e] = r[e];
  return n
}
module.exports = _arrayLikeToArray;