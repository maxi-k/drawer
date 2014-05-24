;(function(){
var g, aa = this;
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function ea(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
;function fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ga(a, b) {
  null != a && this.append.apply(this, arguments);
}
ga.prototype.qa = "";
ga.prototype.append = function(a, b, c) {
  this.qa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.qa += arguments[d];
    }
  }
  return this;
};
ga.prototype.toString = function() {
  return this.qa;
};
var ha, ia = null;
function ja() {
  return new p(null, 5, [ka, !0, la, !0, ma, !1, na, !1, oa, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function pa(a) {
  return r(a) ? !1 : !0;
}
function s(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null;
}
function qa(a) {
  return null == a ? null : a.constructor;
}
function w(a, b) {
  var c = qa(b), c = r(r(c) ? c.ib : c) ? c.hb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function sa(a) {
  var b = a.hb;
  return r(b) ? b : "" + x(a);
}
function y(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function ta(a) {
  return Array.prototype.slice.call(arguments);
}
var ua = {}, va = {};
function wa(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = wa[m(null == a ? null : a)];
  if (!b && (b = wa._, !b)) {
    throw w("ICounted.-count", a);
  }
  return b.call(null, a);
}
function xa(a) {
  if (a ? a.K : a) {
    return a.K(a);
  }
  var b;
  b = xa[m(null == a ? null : a)];
  if (!b && (b = xa._, !b)) {
    throw w("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var ya = {};
function za(a, b) {
  if (a ? a.B : a) {
    return a.B(a, b);
  }
  var c;
  c = za[m(null == a ? null : a)];
  if (!c && (c = za._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Aa = {}, A = function() {
  function a(a, b, c) {
    if (a ? a.X : a) {
      return a.X(a, b, c);
    }
    var h;
    h = A[m(null == a ? null : a)];
    if (!h && (h = A._, !h)) {
      throw w("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.C : a) {
      return a.C(a, b);
    }
    var c;
    c = A[m(null == a ? null : a)];
    if (!c && (c = A._, !c)) {
      throw w("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Ba = {};
function B(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = B[m(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a);
}
function C(a) {
  if (a ? a.U : a) {
    return a.U(a);
  }
  var b;
  b = C[m(null == a ? null : a)];
  if (!b && (b = C._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ca = {}, D = function() {
  function a(a, b, c) {
    if (a ? a.M : a) {
      return a.M(a, b, c);
    }
    var h;
    h = D[m(null == a ? null : a)];
    if (!h && (h = D._, !h)) {
      throw w("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.L : a) {
      return a.L(a, b);
    }
    var c;
    c = D[m(null == a ? null : a)];
    if (!c && (c = D._, !c)) {
      throw w("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Da(a, b, c) {
  if (a ? a.ra : a) {
    return a.ra(a, b, c);
  }
  var d;
  d = Da[m(null == a ? null : a)];
  if (!d && (d = Da._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ea = {};
function Fa(a, b) {
  if (a ? a.Wa : a) {
    return a.Wa(a, b);
  }
  var c;
  c = Fa[m(null == a ? null : a)];
  if (!c && (c = Fa._, !c)) {
    throw w("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Ga = {};
function Ia(a) {
  if (a ? a.ab : a) {
    return a.ab();
  }
  var b;
  b = Ia[m(null == a ? null : a)];
  if (!b && (b = Ia._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ja(a) {
  if (a ? a.bb : a) {
    return a.bb();
  }
  var b;
  b = Ja[m(null == a ? null : a)];
  if (!b && (b = Ja._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
function Ka(a) {
  if (a ? a.ua : a) {
    return a.ua(a);
  }
  var b;
  b = Ka[m(null == a ? null : a)];
  if (!b && (b = Ka._, !b)) {
    throw w("IStack.-pop", a);
  }
  return b.call(null, a);
}
var La = {};
function Ma(a, b, c) {
  if (a ? a.Xa : a) {
    return a.Xa(a, b, c);
  }
  var d;
  d = Ma[m(null == a ? null : a)];
  if (!d && (d = Ma._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Na(a) {
  if (a ? a.lb : a) {
    return a.state;
  }
  var b;
  b = Na[m(null == a ? null : a)];
  if (!b && (b = Na._, !b)) {
    throw w("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Oa = {};
function Qa(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = Qa[m(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw w("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Ra = {};
function Sa(a, b) {
  if (a ? a.G : a) {
    return a.G(a, b);
  }
  var c;
  c = Sa[m(null == a ? null : a)];
  if (!c && (c = Sa._, !c)) {
    throw w("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Ta = {}, Ua = function() {
  function a(a, b, c) {
    if (a ? a.Q : a) {
      return a.Q(a, b, c);
    }
    var h;
    h = Ua[m(null == a ? null : a)];
    if (!h && (h = Ua._, !h)) {
      throw w("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.P : a) {
      return a.P(a, b);
    }
    var c;
    c = Ua[m(null == a ? null : a)];
    if (!c && (c = Ua._, !c)) {
      throw w("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Va(a, b) {
  if (a ? a.t : a) {
    return a.t(a, b);
  }
  var c;
  c = Va[m(null == a ? null : a)];
  if (!c && (c = Va._, !c)) {
    throw w("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Wa(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = Wa[m(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw w("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Xa = {};
function Ya(a) {
  if (a ? a.F : a) {
    return a.F(a);
  }
  var b;
  b = Ya[m(null == a ? null : a)];
  if (!b && (b = Ya._, !b)) {
    throw w("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Za = {};
function E(a, b) {
  if (a ? a.gb : a) {
    return a.gb(0, b);
  }
  var c;
  c = E[m(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var $a = {};
function ab(a, b, c) {
  if (a ? a.v : a) {
    return a.v(a, b, c);
  }
  var d;
  d = ab[m(null == a ? null : a)];
  if (!d && (d = ab._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function bb(a, b, c) {
  if (a ? a.fb : a) {
    return a.fb(0, b, c);
  }
  var d;
  d = bb[m(null == a ? null : a)];
  if (!d && (d = bb._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function cb(a, b, c) {
  if (a ? a.eb : a) {
    return a.eb(0, b, c);
  }
  var d;
  d = cb[m(null == a ? null : a)];
  if (!d && (d = cb._, !d)) {
    throw w("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function db(a) {
  if (a ? a.sa : a) {
    return a.sa(a);
  }
  var b;
  b = db[m(null == a ? null : a)];
  if (!b && (b = db._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function eb(a, b) {
  if (a ? a.Ca : a) {
    return a.Ca(a, b);
  }
  var c;
  c = eb[m(null == a ? null : a)];
  if (!c && (c = eb._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function fb(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = fb[m(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function gb(a, b, c) {
  if (a ? a.va : a) {
    return a.va(a, b, c);
  }
  var d;
  d = gb[m(null == a ? null : a)];
  if (!d && (d = gb._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function hb(a, b, c) {
  if (a ? a.cb : a) {
    return a.cb(0, b, c);
  }
  var d;
  d = hb[m(null == a ? null : a)];
  if (!d && (d = hb._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function ib(a) {
  if (a ? a.Ya : a) {
    return a.Ya();
  }
  var b;
  b = ib[m(null == a ? null : a)];
  if (!b && (b = ib._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function jb(a) {
  if (a ? a.Ha : a) {
    return a.Ha(a);
  }
  var b;
  b = jb[m(null == a ? null : a)];
  if (!b && (b = jb._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function kb(a) {
  if (a ? a.Ia : a) {
    return a.Ia(a);
  }
  var b;
  b = kb[m(null == a ? null : a)];
  if (!b && (b = kb._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function lb(a) {
  if (a ? a.Ga : a) {
    return a.Ga(a);
  }
  var b;
  b = lb[m(null == a ? null : a)];
  if (!b && (b = lb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function mb(a) {
  this.zb = a;
  this.o = 0;
  this.h = 1073741824;
}
mb.prototype.gb = function(a, b) {
  return this.zb.append(b);
};
function nb(a) {
  var b = new ga;
  a.v(null, new mb(b), ja());
  return "" + x(b);
}
function ob(a, b) {
  if (r(F.a ? F.a(a, b) : F.call(null, a, b))) {
    return 0;
  }
  var c = pa(a.H);
  if (r(c ? b.H : c)) {
    return-1;
  }
  if (r(a.H)) {
    if (pa(b.H)) {
      return 1;
    }
    c = pb.a ? pb.a(a.H, b.H) : pb.call(null, a.H, b.H);
    return 0 === c ? pb.a ? pb.a(a.name, b.name) : pb.call(null, a.name, b.name) : c;
  }
  return qb ? pb.a ? pb.a(a.name, b.name) : pb.call(null, a.name, b.name) : null;
}
function rb(a, b, c, d, e) {
  this.H = a;
  this.name = b;
  this.ha = c;
  this.ia = d;
  this.la = e;
  this.h = 2154168321;
  this.o = 4096;
}
g = rb.prototype;
g.v = function(a, b) {
  return E(b, this.ha);
};
g.w = function() {
  var a = this.ia;
  return null != a ? a : this.ia = a = sb.a ? sb.a(H.d ? H.d(this.H) : H.call(null, this.H), H.d ? H.d(this.name) : H.call(null, this.name)) : sb.call(null, H.d ? H.d(this.H) : H.call(null, this.H), H.d ? H.d(this.name) : H.call(null, this.name));
};
g.G = function(a, b) {
  return new rb(this.H, this.name, this.ha, this.ia, b);
};
g.D = function() {
  return this.la;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.c(c, this, null);
      case 3:
        return D.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return D.c(a, this, null);
};
g.a = function(a, b) {
  return D.c(a, this, b);
};
g.t = function(a, b) {
  return b instanceof rb ? this.ha === b.ha : !1;
};
g.toString = function() {
  return this.ha;
};
function J(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 8388608 || a.Jb)) {
    return a.F(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new tb(a, 0);
  }
  if (s(Xa, a)) {
    return Ya(a);
  }
  if (u) {
    throw Error([x(a), x("is not ISeqable")].join(""));
  }
  return null;
}
function K(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 64 || a.ta)) {
    return a.R(null);
  }
  a = J(a);
  return null == a ? null : B(a);
}
function L(a) {
  return null != a ? a && (a.h & 64 || a.ta) ? a.U(null) : (a = J(a)) ? C(a) : M : M;
}
function N(a) {
  return null == a ? null : a && (a.h & 128 || a.Ib) ? a.da(null) : J(L(a));
}
var F = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Va(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (N(e)) {
            a = d, d = K(e), e = N(e);
          } else {
            return b.a(d, K(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.g = function(a) {
      var b = K(a);
      a = N(a);
      var d = K(a);
      a = L(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.g = c.g;
  b.d = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
va["null"] = !0;
wa["null"] = function() {
  return 0;
};
Date.prototype.t = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Va.number = function(a, b) {
  return a === b;
};
Oa["function"] = !0;
Qa["function"] = function() {
  return null;
};
ua["function"] = !0;
Wa._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
var ub = function() {
  function a(a, b, c, d) {
    for (var l = wa(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, A.a(a, d)) : b.call(null, c, A.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = wa(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, A.a(a, l)) : b.call(null, c, A.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = wa(a);
    if (0 === c) {
      return b.T ? b.T() : b.call(null);
    }
    for (var d = A.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, A.a(a, l)) : b.call(null, d, A.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.j = a;
  return d;
}(), vb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.T ? b.T() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.j = a;
  return d;
}();
function wb(a) {
  return a ? a.h & 2 || a.kb ? !0 : a.h ? !1 : s(va, a) : s(va, a);
}
function xb(a) {
  return a ? a.h & 16 || a.Za ? !0 : a.h ? !1 : s(Aa, a) : s(Aa, a);
}
function tb(a, b) {
  this.b = a;
  this.l = b;
  this.h = 166199550;
  this.o = 8192;
}
g = tb.prototype;
g.w = function() {
  return yb.d ? yb.d(this) : yb.call(null, this);
};
g.da = function() {
  return this.l + 1 < this.b.length ? new tb(this.b, this.l + 1) : null;
};
g.B = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
g.toString = function() {
  return nb(this);
};
g.P = function(a, b) {
  return vb.j(this.b, b, this.b[this.l], this.l + 1);
};
g.Q = function(a, b, c) {
  return vb.j(this.b, b, c, this.l);
};
g.F = function() {
  return this;
};
g.J = function() {
  return this.b.length - this.l;
};
g.R = function() {
  return this.b[this.l];
};
g.U = function() {
  return this.l + 1 < this.b.length ? new tb(this.b, this.l + 1) : M;
};
g.t = function(a, b) {
  return zb.a ? zb.a(this, b) : zb.call(null, this, b);
};
g.C = function(a, b) {
  var c = b + this.l;
  return c < this.b.length ? this.b[c] : null;
};
g.X = function(a, b, c) {
  a = b + this.l;
  return a < this.b.length ? this.b[a] : c;
};
g.K = function() {
  return M;
};
var Ab = function() {
  function a(a, b) {
    return b < a.length ? new tb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), O = function() {
  function a(a, b) {
    return Ab.a(a, b);
  }
  function b(a) {
    return Ab.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
Va._ = function(a, b) {
  return a === b;
};
var Bb = function() {
  function a(a, b) {
    return null != a ? za(a, b) : za(M, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.a(a, d), d = K(e), e = N(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.k = 2;
    a.g = function(a) {
      var b = K(a);
      a = N(a);
      var d = K(a);
      a = L(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b;
}();
function Q(a) {
  if (null != a) {
    if (a && (a.h & 2 || a.kb)) {
      a = a.J(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(va, a)) {
            a = wa(a);
          } else {
            if (u) {
              a: {
                a = J(a);
                for (var b = 0;;) {
                  if (wb(a)) {
                    a = b + wa(a);
                    break a;
                  }
                  a = N(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var Cb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return J(a) ? K(a) : c;
      }
      if (xb(a)) {
        return A.c(a, b, c);
      }
      if (J(a)) {
        a = N(a), b -= 1;
      } else {
        return u ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (J(a)) {
          return K(a);
        }
        throw Error("Index out of bounds");
      }
      if (xb(a)) {
        return A.a(a, b);
      }
      if (J(a)) {
        var c = N(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (u) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.h & 16 || a.Za)) {
      return a.X(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (s(Aa, a)) {
      return A.a(a, b);
    }
    if (a ? a.h & 64 || a.ta || (a.h ? 0 : s(Ba, a)) : s(Ba, a)) {
      return Cb.c(a, b, c);
    }
    if (u) {
      throw Error([x("nth not supported on this type "), x(sa(qa(a)))].join(""));
    }
    return null;
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.h & 16 || a.Za)) {
      return a.C(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s(Aa, a)) {
      return A.a(a, b);
    }
    if (a ? a.h & 64 || a.ta || (a.h ? 0 : s(Ba, a)) : s(Ba, a)) {
      return Cb.a(a, b);
    }
    if (u) {
      throw Error([x("nth not supported on this type "), x(sa(qa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Db = function() {
  function a(a, b, c) {
    return null != a ? a && (a.h & 256 || a.$a) ? a.M(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(Ca, a) ? D.c(a, b, c) : u ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.h & 256 || a.$a) ? a.L(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(Ca, a) ? D.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Fb = function() {
  function a(a, b, c) {
    return null != a ? Da(a, b, c) : Eb.a ? Eb.a([b], [c]) : Eb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = O(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), r(l)) {
          d = K(l), e = K(N(l)), l = N(N(l));
        } else {
          return a;
        }
      }
    }
    a.k = 3;
    a.g = function(a) {
      var b = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var l = K(a);
      a = L(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 3;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b;
}(), Gb = function() {
  function a(a, b) {
    return null == a ? null : Fa(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (r(e)) {
          d = K(e), e = N(e);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.g = function(a) {
      var b = K(a);
      a = N(a);
      var d = K(a);
      a = L(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.g = c.g;
  b.d = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Hb(a) {
  var b = "function" == m(a);
  return b ? b : a ? r(r(null) ? null : a.jb) ? !0 : a.xb ? !1 : s(ua, a) : s(ua, a);
}
var Jb = function Ib(b, c) {
  return Hb(b) && !(b ? b.h & 262144 || b.Mb || (b.h ? 0 : s(Ra, b)) : s(Ra, b)) ? Ib(function() {
    "undefined" === typeof ha && (ha = function(b, c, f, h) {
      this.i = b;
      this.za = c;
      this.Bb = f;
      this.yb = h;
      this.o = 0;
      this.h = 393217;
    }, ha.ib = !0, ha.hb = "cljs.core/t5036", ha.wb = function(b) {
      return E(b, "cljs.core/t5036");
    }, ha.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return T.a ? T.a(b.za, d) : T.call(null, b.za, d);
      }
      b.k = 1;
      b.g = function(b) {
        var d = K(b);
        b = L(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(y(c)));
    }, ha.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = O(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return T.a ? T.a(self__.za, b) : T.call(null, self__.za, b);
      }
      b.k = 0;
      b.g = function(b) {
        b = J(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.jb = !0, ha.prototype.D = function() {
      return this.yb;
    }, ha.prototype.G = function(b, c) {
      return new ha(this.i, this.za, this.Bb, c);
    });
    return new ha(c, b, Ib, null);
  }(), c) : null == b ? null : Sa(b, c);
};
function Kb(a) {
  var b = null != a;
  return(b ? a ? a.h & 131072 || a.ob || (a.h ? 0 : s(Oa, a)) : s(Oa, a) : b) ? Qa(a) : null;
}
var Lb = {}, Mb = 0;
function H(a) {
  if (a && (a.h & 4194304 || a.Gb)) {
    a = a.w(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < Mb && (Lb = {}, Mb = 0);
            var b = Lb[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Lb[a] = b;
              Mb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : u ? Wa(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Nb(a) {
  return a ? a.h & 16384 || a.Lb ? !0 : a.h ? !1 : s(La, a) : s(La, a);
}
function Ob(a) {
  return a ? a.o & 512 || a.Cb ? !0 : !1 : !1;
}
function Pb(a) {
  var b = [];
  fa(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function Qb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Rb = {};
function Sb(a) {
  return null == a ? !1 : a ? a.h & 64 || a.ta ? !0 : a.h ? !1 : s(Ba, a) : s(Ba, a);
}
function Tb(a) {
  return r(a) ? !0 : !1;
}
function pb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (qa(a) === qa(b)) {
    return a && (a.o & 2048 || a.Aa) ? a.Ba(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Ub = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = pb(S.a(a, h), S.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = Q(a), h = Q(b);
    return f < h ? -1 : f > h ? 1 : u ? c.j(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.j = a;
  return c;
}(), Wb = function() {
  function a(a, b, c) {
    for (c = J(c);;) {
      if (c) {
        b = a.a ? a.a(b, K(c)) : a.call(null, b, K(c)), c = N(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = J(b);
    return c ? Vb.c ? Vb.c(a, K(c), N(c)) : Vb.call(null, a, K(c), N(c)) : a.T ? a.T() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Vb = function() {
  function a(a, b, c) {
    return c && (c.h & 524288 || c.qb) ? c.Q(null, a, b) : c instanceof Array ? vb.c(c, a, b) : "string" === typeof c ? vb.c(c, a, b) : s(Ta, c) ? Ua.c(c, a, b) : u ? Wb.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.h & 524288 || b.qb) ? b.P(null, a) : b instanceof Array ? vb.a(b, a) : "string" === typeof b ? vb.a(b, a) : s(Ta, b) ? Ua.a(b, a) : u ? Wb.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Xb = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Vb.c(a, b + c, d);
    }
    b.k = 2;
    b.g = function(a) {
      var b = K(a);
      a = N(a);
      var c = K(a);
      a = L(a);
      return d(b, c, a);
    };
    b.e = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.e(a, d, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.g = b.g;
  a.T = function() {
    return 0;
  };
  a.d = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a + b;
  };
  a.e = b.e;
  return a;
}();
function Yb(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.d ? Math.floor.d((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.d ? Math.ceil.d((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2);
}
function Zb(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var x = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ga(b.d(a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.d(K(l))), l = N(l);
        } else {
          return e.toString();
        }
      }
    }
    a.k = 1;
    a.g = function(a) {
      var b = K(a);
      a = L(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, O(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.g = c.g;
  b.T = function() {
    return "";
  };
  b.d = a;
  b.e = c.e;
  return b;
}();
function zb(a, b) {
  return Tb((b ? b.h & 16777216 || b.Kb || (b.h ? 0 : s(Za, b)) : s(Za, b)) ? function() {
    for (var c = J(a), d = J(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (F.a(K(c), K(d))) {
        c = N(c), d = N(d);
      } else {
        return u ? !1 : null;
      }
    }
  }() : null);
}
function sb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function yb(a) {
  if (J(a)) {
    var b = H(K(a));
    for (a = N(a);;) {
      if (null == a) {
        return b;
      }
      b = sb(b, H(K(a)));
      a = N(a);
    }
  } else {
    return 0;
  }
}
function $b(a) {
  var b = 0;
  for (a = J(a);;) {
    if (a) {
      var c = K(a), b = (b + (H(ac.d ? ac.d(c) : ac.call(null, c)) ^ H(bc.d ? bc.d(c) : bc.call(null, c)))) % 4503599627370496;
      a = N(a);
    } else {
      return b;
    }
  }
}
function cc(a, b, c, d, e) {
  this.i = a;
  this.wa = b;
  this.fa = c;
  this.count = d;
  this.m = e;
  this.h = 65937646;
  this.o = 8192;
}
g = cc.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = yb(this);
};
g.da = function() {
  return 1 === this.count ? null : this.fa;
};
g.B = function(a, b) {
  return new cc(this.i, b, this, this.count + 1, null);
};
g.toString = function() {
  return nb(this);
};
g.P = function(a, b) {
  return Wb.a(b, this);
};
g.Q = function(a, b, c) {
  return Wb.c(b, c, this);
};
g.F = function() {
  return this;
};
g.J = function() {
  return this.count;
};
g.ua = function() {
  return C(this);
};
g.R = function() {
  return this.wa;
};
g.U = function() {
  return 1 === this.count ? M : this.fa;
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return new cc(b, this.wa, this.fa, this.count, this.m);
};
g.D = function() {
  return this.i;
};
g.K = function() {
  return M;
};
function dc(a) {
  this.i = a;
  this.h = 65937614;
  this.o = 8192;
}
g = dc.prototype;
g.w = function() {
  return 0;
};
g.da = function() {
  return null;
};
g.B = function(a, b) {
  return new cc(this.i, b, null, 1, null);
};
g.toString = function() {
  return nb(this);
};
g.P = function(a, b) {
  return Wb.a(b, this);
};
g.Q = function(a, b, c) {
  return Wb.c(b, c, this);
};
g.F = function() {
  return null;
};
g.J = function() {
  return 0;
};
g.ua = function() {
  throw Error("Can't pop empty list");
};
g.R = function() {
  return null;
};
g.U = function() {
  return M;
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return new dc(b);
};
g.D = function() {
  return this.i;
};
g.K = function() {
  return this;
};
var M = new dc(null), ec = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof tb && 0 === a.l) {
      b = a.b;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.R(null)), a = a.da(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = M;;) {
      if (0 < a) {
        var f = a - 1, e = e.B(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.k = 0;
  a.g = function(a) {
    a = J(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function fc(a, b, c, d) {
  this.i = a;
  this.wa = b;
  this.fa = c;
  this.m = d;
  this.h = 65929452;
  this.o = 8192;
}
g = fc.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = yb(this);
};
g.da = function() {
  return null == this.fa ? null : J(this.fa);
};
g.B = function(a, b) {
  return new fc(null, b, this, this.m);
};
g.toString = function() {
  return nb(this);
};
g.P = function(a, b) {
  return Wb.a(b, this);
};
g.Q = function(a, b, c) {
  return Wb.c(b, c, this);
};
g.F = function() {
  return this;
};
g.R = function() {
  return this.wa;
};
g.U = function() {
  return null == this.fa ? M : this.fa;
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return new fc(b, this.wa, this.fa, this.m);
};
g.D = function() {
  return this.i;
};
g.K = function() {
  return Jb(M, this.i);
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.h & 64 || b.ta)) ? new fc(null, a, b, null) : new fc(null, a, J(b), null);
}
function U(a, b, c, d) {
  this.H = a;
  this.name = b;
  this.ga = c;
  this.ia = d;
  this.h = 2153775105;
  this.o = 4096;
}
g = U.prototype;
g.v = function(a, b) {
  return E(b, [x(":"), x(this.ga)].join(""));
};
g.w = function() {
  null == this.ia && (this.ia = sb(H(this.H), H(this.name)) + 2654435769);
  return this.ia;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Db.a(c, this);
      case 3:
        return Db.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return Db.a(a, this);
};
g.a = function(a, b) {
  return Db.c(a, this, b);
};
g.t = function(a, b) {
  return b instanceof U ? this.ga === b.ga : !1;
};
g.toString = function() {
  return[x(":"), x(this.ga)].join("");
};
var hc = function() {
  function a(a, b) {
    return new U(a, b, [x(r(a) ? [x(a), x("/")].join("") : null), x(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof rb) {
      var b;
      if (a && (a.o & 4096 || a.pb)) {
        b = a.H;
      } else {
        throw Error([x("Doesn't support namespace: "), x(a)].join(""));
      }
      return new U(b, gc.d ? gc.d(a) : gc.call(null, a), a.ha, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function W(a, b, c, d) {
  this.i = a;
  this.pa = b;
  this.q = c;
  this.m = d;
  this.o = 0;
  this.h = 32374988;
}
g = W.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = yb(this);
};
g.da = function() {
  Ya(this);
  return null == this.q ? null : N(this.q);
};
g.B = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return nb(this);
};
function ic(a) {
  null != a.pa && (a.q = a.pa.T ? a.pa.T() : a.pa.call(null), a.pa = null);
  return a.q;
}
g.P = function(a, b) {
  return Wb.a(b, this);
};
g.Q = function(a, b, c) {
  return Wb.c(b, c, this);
};
g.F = function() {
  ic(this);
  if (null == this.q) {
    return null;
  }
  for (var a = this.q;;) {
    if (a instanceof W) {
      a = ic(a);
    } else {
      return this.q = a, J(this.q);
    }
  }
};
g.R = function() {
  Ya(this);
  return null == this.q ? null : K(this.q);
};
g.U = function() {
  Ya(this);
  return null != this.q ? L(this.q) : M;
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return new W(b, this.pa, this.q, this.m);
};
g.D = function() {
  return this.i;
};
g.K = function() {
  return Jb(M, this.i);
};
function jc(a, b) {
  this.Fa = a;
  this.end = b;
  this.o = 0;
  this.h = 2;
}
jc.prototype.J = function() {
  return this.end;
};
jc.prototype.add = function(a) {
  this.Fa[this.end] = a;
  return this.end += 1;
};
jc.prototype.I = function() {
  var a = new kc(this.Fa, 0, this.end);
  this.Fa = null;
  return a;
};
function kc(a, b, c) {
  this.b = a;
  this.r = b;
  this.end = c;
  this.o = 0;
  this.h = 524306;
}
g = kc.prototype;
g.P = function(a, b) {
  return vb.j(this.b, b, this.b[this.r], this.r + 1);
};
g.Q = function(a, b, c) {
  return vb.j(this.b, b, c, this.r);
};
g.Ya = function() {
  if (this.r === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new kc(this.b, this.r + 1, this.end);
};
g.C = function(a, b) {
  return this.b[this.r + b];
};
g.X = function(a, b, c) {
  return 0 <= b && b < this.end - this.r ? this.b[this.r + b] : c;
};
g.J = function() {
  return this.end - this.r;
};
var lc = function() {
  function a(a, b, c) {
    return new kc(a, b, c);
  }
  function b(a, b) {
    return new kc(a, b, a.length);
  }
  function c(a) {
    return new kc(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.c = a;
  return d;
}();
function mc(a, b, c, d) {
  this.I = a;
  this.aa = b;
  this.i = c;
  this.m = d;
  this.h = 31850732;
  this.o = 1536;
}
g = mc.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = yb(this);
};
g.da = function() {
  if (1 < wa(this.I)) {
    return new mc(ib(this.I), this.aa, this.i, null);
  }
  var a = Ya(this.aa);
  return null == a ? null : a;
};
g.B = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return nb(this);
};
g.F = function() {
  return this;
};
g.R = function() {
  return A.a(this.I, 0);
};
g.U = function() {
  return 1 < wa(this.I) ? new mc(ib(this.I), this.aa, this.i, null) : null == this.aa ? M : this.aa;
};
g.Ga = function() {
  return null == this.aa ? null : this.aa;
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return new mc(this.I, this.aa, b, this.m);
};
g.D = function() {
  return this.i;
};
g.K = function() {
  return Jb(M, this.i);
};
g.Ha = function() {
  return this.I;
};
g.Ia = function() {
  return null == this.aa ? M : this.aa;
};
function nc(a, b) {
  return 0 === wa(a) ? b : new mc(a, b, null, null);
}
function oc(a) {
  for (var b = [];;) {
    if (J(a)) {
      b.push(K(a)), a = N(a);
    } else {
      return b;
    }
  }
}
function pc(a, b) {
  if (wb(a)) {
    return Q(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && J(c)) {
      c = N(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var rc = function qc(b) {
  return null == b ? null : null == N(b) ? J(K(b)) : u ? P(K(b), qc(N(b))) : null;
}, sc = function() {
  function a(a, b) {
    return new W(null, function() {
      var c = J(a);
      return c ? Ob(c) ? nc(jb(c), d.a(kb(c), b)) : P(K(c), d.a(L(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new W(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new W(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function t(a, b) {
        return new W(null, function() {
          var c = J(a);
          return c ? Ob(c) ? nc(jb(c), t(kb(c), b)) : P(K(c), t(L(c), b)) : r(b) ? t(K(b), N(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.k = 2;
    a.g = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = L(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 2;
  d.g = e.g;
  d.T = c;
  d.d = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), tc = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)));
  }
  function b(a, b, c) {
    return P(a, P(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, q) {
      var t = null;
      4 < arguments.length && (t = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, t);
    }
    function b(a, c, d, e, f) {
      return P(a, P(c, P(d, P(e, rc(f)))));
    }
    a.k = 4;
    a.g = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var e = K(a);
      a = N(a);
      var q = K(a);
      a = L(a);
      return b(c, d, e, q, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return J(c);
      case 2:
        return P(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.e(c, f, h, k, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 4;
  c.g = d.g;
  c.d = function(a) {
    return J(a);
  };
  c.a = function(a, b) {
    return P(a, b);
  };
  c.c = b;
  c.j = a;
  c.e = d.e;
  return c;
}();
function uc(a) {
  return fb(a);
}
var vc = function() {
  var a = null, b = function() {
    function a(c, f, h) {
      var k = null;
      2 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = eb(a, c), r(d)) {
          c = K(d), d = N(d);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.g = function(a) {
      var c = K(a);
      a = N(a);
      var h = K(a);
      a = L(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return eb(a, d);
      default:
        return b.e(a, d, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.g = b.g;
  a.a = function(a, b) {
    return eb(a, b);
  };
  a.e = b.e;
  return a;
}(), wc = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      3 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = gb(a, c, d), r(k)) {
          c = K(k), d = K(N(k)), k = N(N(k));
        } else {
          return a;
        }
      }
    }
    a.k = 3;
    a.g = function(a) {
      var c = K(a);
      a = N(a);
      var h = K(a);
      a = N(a);
      var k = K(a);
      a = L(a);
      return b(c, h, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return gb(a, d, e);
      default:
        return b.e(a, d, e, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 3;
  a.g = b.g;
  a.c = function(a, b, e) {
    return gb(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function xc(a, b, c) {
  var d = J(c);
  if (0 === b) {
    return a.T ? a.T() : a.call(null);
  }
  c = B(d);
  var e = C(d);
  if (1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c);
  }
  var d = B(e), f = C(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = B(f), h = C(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = B(h), k = C(h);
  if (4 === b) {
    return a.j ? a.j(c, d, e, f) : a.j ? a.j(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = B(k), l = C(k);
  if (5 === b) {
    return a.u ? a.u(c, d, e, f, h) : a.u ? a.u(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = B(l), n = C(l);
  if (6 === b) {
    return a.ca ? a.ca(c, d, e, f, h, k) : a.ca ? a.ca(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = B(n), q = C(n);
  if (7 === b) {
    return a.ma ? a.ma(c, d, e, f, h, k, l) : a.ma ? a.ma(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var n = B(q), t = C(q);
  if (8 === b) {
    return a.Ua ? a.Ua(c, d, e, f, h, k, l, n) : a.Ua ? a.Ua(c, d, e, f, h, k, l, n) : a.call(null, c, d, e, f, h, k, l, n);
  }
  var q = B(t), v = C(t);
  if (9 === b) {
    return a.Va ? a.Va(c, d, e, f, h, k, l, n, q) : a.Va ? a.Va(c, d, e, f, h, k, l, n, q) : a.call(null, c, d, e, f, h, k, l, n, q);
  }
  var t = B(v), G = C(v);
  if (10 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, l, n, q, t) : a.Ja ? a.Ja(c, d, e, f, h, k, l, n, q, t) : a.call(null, c, d, e, f, h, k, l, n, q, t);
  }
  var v = B(G), z = C(G);
  if (11 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, l, n, q, t, v) : a.Ka ? a.Ka(c, d, e, f, h, k, l, n, q, t, v) : a.call(null, c, d, e, f, h, k, l, n, q, t, v);
  }
  var G = B(z), I = C(z);
  if (12 === b) {
    return a.La ? a.La(c, d, e, f, h, k, l, n, q, t, v, G) : a.La ? a.La(c, d, e, f, h, k, l, n, q, t, v, G) : a.call(null, c, d, e, f, h, k, l, n, q, t, v, G);
  }
  var z = B(I), R = C(I);
  if (13 === b) {
    return a.Ma ? a.Ma(c, d, e, f, h, k, l, n, q, t, v, G, z) : a.Ma ? a.Ma(c, d, e, f, h, k, l, n, q, t, v, G, z) : a.call(null, c, d, e, f, h, k, l, n, q, t, v, G, z);
  }
  var I = B(R), V = C(R);
  if (14 === b) {
    return a.Na ? a.Na(c, d, e, f, h, k, l, n, q, t, v, G, z, I) : a.Na ? a.Na(c, d, e, f, h, k, l, n, q, t, v, G, z, I) : a.call(null, c, d, e, f, h, k, l, n, q, t, v, G, z, I);
  }
  var R = B(V), da = C(V);
  if (15 === b) {
    return a.Oa ? a.Oa(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R) : a.Oa ? a.Oa(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R) : a.call(null, c, d, e, f, h, k, l, n, q, t, v, G, z, I, R);
  }
  var V = B(da), ra = C(da);
  if (16 === b) {
    return a.Pa ? a.Pa(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V) : a.Pa ? a.Pa(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V) : a.call(null, c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V);
  }
  var da = B(ra), Ha = C(ra);
  if (17 === b) {
    return a.Qa ? a.Qa(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da) : a.Qa ? a.Qa(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da) : a.call(null, c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da);
  }
  var ra = B(Ha), Pa = C(Ha);
  if (18 === b) {
    return a.Ra ? a.Ra(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da, ra) : a.Ra ? a.Ra(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da, ra) : a.call(null, c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da, ra);
  }
  Ha = B(Pa);
  Pa = C(Pa);
  if (19 === b) {
    return a.Sa ? a.Sa(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da, ra, Ha) : a.Sa ? a.Sa(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da, ra, Ha) : a.call(null, c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da, ra, Ha);
  }
  var Bc = B(Pa);
  C(Pa);
  if (20 === b) {
    return a.Ta ? a.Ta(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da, ra, Ha, Bc) : a.Ta ? a.Ta(c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da, ra, Ha, Bc) : a.call(null, c, d, e, f, h, k, l, n, q, t, v, G, z, I, R, V, da, ra, Ha, Bc);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function a(a, b, c, d, e) {
    b = tc.j(b, c, d, e);
    c = a.k;
    return a.g ? (d = pc(b, c + 1), d <= c ? xc(a, d, b) : a.g(b)) : a.apply(a, oc(b));
  }
  function b(a, b, c, d) {
    b = tc.c(b, c, d);
    c = a.k;
    return a.g ? (d = pc(b, c + 1), d <= c ? xc(a, d, b) : a.g(b)) : a.apply(a, oc(b));
  }
  function c(a, b, c) {
    b = tc.a(b, c);
    c = a.k;
    if (a.g) {
      var d = pc(b, c + 1);
      return d <= c ? xc(a, d, b) : a.g(b);
    }
    return a.apply(a, oc(b));
  }
  function d(a, b) {
    var c = a.k;
    if (a.g) {
      var d = pc(b, c + 1);
      return d <= c ? xc(a, d, b) : a.g(b);
    }
    return a.apply(a, oc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, G) {
      var z = null;
      5 < arguments.length && (z = O(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, z);
    }
    function b(a, c, d, e, f, h) {
      c = P(c, P(d, P(e, P(f, rc(h)))));
      d = a.k;
      return a.g ? (e = pc(c, d + 1), e <= d ? xc(a, e, c) : a.g(c)) : a.apply(a, oc(c));
    }
    a.k = 5;
    a.g = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var e = K(a);
      a = N(a);
      var f = K(a);
      a = N(a);
      var h = K(a);
      a = L(a);
      return b(c, d, e, f, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, q, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, q);
      default:
        return f.e(e, k, l, n, q, O(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = 5;
  e.g = f.g;
  e.a = d;
  e.c = c;
  e.j = b;
  e.u = a;
  e.e = f.e;
  return e;
}(), yc = function() {
  function a(a, b) {
    return!F.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return pa(T.j(F, a, c, d));
    }
    a.k = 2;
    a.g = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = L(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.g = c.g;
  b.d = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function zc(a, b) {
  for (;;) {
    if (null == J(b)) {
      return!0;
    }
    if (r(a.d ? a.d(K(b)) : a.call(null, K(b)))) {
      var c = a, d = N(b);
      a = c;
      b = d;
    } else {
      return u ? !1 : null;
    }
  }
}
function Ac(a) {
  return a;
}
var Cc = function() {
  function a(a, b, c, e) {
    return new W(null, function() {
      var n = J(b), q = J(c), t = J(e);
      return n && q && t ? P(a.c ? a.c(K(n), K(q), K(t)) : a.call(null, K(n), K(q), K(t)), d.j(a, L(n), L(q), L(t))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new W(null, function() {
      var e = J(b), n = J(c);
      return e && n ? P(a.a ? a.a(K(e), K(n)) : a.call(null, K(e), K(n)), d.c(a, L(e), L(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new W(null, function() {
      var c = J(b);
      if (c) {
        if (Ob(c)) {
          for (var e = jb(c), n = Q(e), q = new jc(Array(n), 0), t = 0;;) {
            if (t < n) {
              var v = a.d ? a.d(A.a(e, t)) : a.call(null, A.a(e, t));
              q.add(v);
              t += 1;
            } else {
              break;
            }
          }
          return nc(q.I(), d.a(a, kb(c)));
        }
        return P(a.d ? a.d(K(c)) : a.call(null, K(c)), d.a(a, L(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var v = null;
      4 < arguments.length && (v = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, e, f, h) {
      var v = function z(a) {
        return new W(null, function() {
          var b = d.a(J, a);
          return zc(Ac, b) ? P(d.a(K, b), z(d.a(L, b))) : null;
        }, null, null);
      };
      return d.a(function() {
        return function(b) {
          return T.a(a, b);
        };
      }(v), v(Bb.e(h, f, O([e, c], 0))));
    }
    a.k = 4;
    a.g = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var e = K(a);
      a = N(a);
      var f = K(a);
      a = L(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.j = a;
  d.e = e.e;
  return d;
}(), Ec = function Dc(b, c) {
  return new W(null, function() {
    if (0 < b) {
      var d = J(c);
      return d ? P(K(d), Dc(b - 1, L(d))) : null;
    }
    return null;
  }, null, null);
};
function Fc(a, b) {
  return new W(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = J(b);
      if (0 < a && e) {
        var f = a - 1, e = L(e);
        a = f;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function Gc(a, b) {
  return null != a ? a && (a.o & 4 || a.Eb) ? uc(Vb.c(eb, db(a), b)) : Vb.c(za, a, b) : Vb.c(Bb, M, b);
}
var Ic = function() {
  function a(a, b, c, d) {
    return Gc(Hc, Cc.j(a, b, c, d));
  }
  function b(a, b, c) {
    return Gc(Hc, Cc.c(a, b, c));
  }
  function c(a, b) {
    return uc(Vb.c(function(b, c) {
      return vc.a(b, a.d ? a.d(c) : a.call(null, c));
    }, db(Hc), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var v = null;
      4 < arguments.length && (v = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, d, e, f) {
      return Gc(Hc, T.e(Cc, a, c, d, e, O([f], 0)));
    }
    a.k = 4;
    a.g = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var e = K(a);
      a = N(a);
      var f = K(a);
      a = L(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.j = a;
  d.e = e.e;
  return d;
}(), Jc = function() {
  function a(a, b, c, k) {
    return new W(null, function() {
      var l = J(k);
      if (l) {
        var n = Ec(a, l);
        return a === Q(n) ? P(n, d.j(a, b, c, Fc(b, l))) : za(M, Ec(a, sc.a(n, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new W(null, function() {
      var k = J(c);
      if (k) {
        var l = Ec(a, k);
        return a === Q(l) ? P(l, d.c(a, b, Fc(b, k))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.c(a, a, b);
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.j = a;
  return d;
}(), Kc = function() {
  function a(a, b, c) {
    var h = Rb;
    for (b = J(b);;) {
      if (b) {
        var k = a;
        if (k ? k.h & 256 || k.$a || (k.h ? 0 : s(Ca, k)) : s(Ca, k)) {
          a = Db.c(a, K(b), h);
          if (h === a) {
            return c;
          }
          b = N(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.c(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Mc = function Lc(b, c, d) {
  var e = S.c(c, 0, null), f;
  a: {
    f = 1;
    for (c = J(c);;) {
      if (c && 0 < f) {
        f -= 1, c = N(c);
      } else {
        f = c;
        break a;
      }
    }
    f = void 0;
  }
  return f ? Fb.c(b, e, Lc(Db.a(b, e), f, d)) : Fb.c(b, e, d);
};
function Nc(a, b) {
  this.n = a;
  this.b = b;
}
function Oc(a) {
  return new Nc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Pc(a) {
  return new Nc(a.n, y(a.b));
}
function Qc(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Rc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Oc(a);
    d.b[0] = c;
    c = d;
    b -= 5;
  }
}
var Tc = function Sc(b, c, d, e) {
  var f = Pc(d), h = b.f - 1 >>> c & 31;
  5 === c ? f.b[h] = e : (d = d.b[h], b = null != d ? Sc(b, c - 5, d, e) : Rc(null, c - 5, e), f.b[h] = b);
  return f;
};
function Uc(a, b) {
  throw Error([x("No item "), x(a), x(" in vector of length "), x(b)].join(""));
}
function Vc(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.b[0];
    } else {
      return b.b;
    }
  }
}
function Wc(a, b) {
  if (b >= Qc(a)) {
    return a.A;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.b[b >>> d & 31], d = e
    } else {
      return c.b;
    }
  }
}
function Xc(a, b) {
  return 0 <= b && b < a.f ? Wc(a, b) : Uc(b, a.f);
}
var Zc = function Yc(b, c, d, e, f) {
  var h = Pc(d);
  if (0 === c) {
    h.b[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Yc(b, c - 5, d.b[k], e, f);
    h.b[k] = b;
  }
  return h;
}, ad = function $c(b, c, d) {
  var e = b.f - 2 >>> c & 31;
  if (5 < c) {
    b = $c(b, c - 5, d.b[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Pc(d);
    d.b[e] = b;
    return d;
  }
  return 0 === e ? null : u ? (d = Pc(d), d.b[e] = null, d) : null;
};
function X(a, b, c, d, e, f) {
  this.i = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.A = e;
  this.m = f;
  this.o = 8196;
  this.h = 167668511;
}
g = X.prototype;
g.sa = function() {
  return new bd(this.f, this.shift, cd.d ? cd.d(this.root) : cd.call(null, this.root), dd.d ? dd.d(this.A) : dd.call(null, this.A));
};
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = yb(this);
};
g.L = function(a, b) {
  return D.c(this, b, null);
};
g.M = function(a, b, c) {
  return "number" === typeof b ? A.c(this, b, c) : c;
};
g.ra = function(a, b, c) {
  if ("number" === typeof b) {
    return Ma(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return this.C(null, a);
};
g.a = function(a, b) {
  return this.X(null, a, b);
};
g.B = function(a, b) {
  if (32 > this.f - Qc(this)) {
    for (var c = this.A.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.A[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.i, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Oc(null), d.b[0] = this.root, e = Rc(null, this.shift, new Nc(null, this.A)), d.b[1] = e) : d = Tc(this, this.shift, this.root, new Nc(null, this.A));
  return new X(this.i, this.f + 1, c, d, [b], null);
};
g.ab = function() {
  return A.a(this, 0);
};
g.bb = function() {
  return A.a(this, 1);
};
g.toString = function() {
  return nb(this);
};
g.P = function(a, b) {
  return ub.a(this, b);
};
g.Q = function(a, b, c) {
  return ub.c(this, b, c);
};
g.F = function() {
  return 0 === this.f ? null : 32 >= this.f ? new tb(this.A, 0) : u ? Y.j ? Y.j(this, Vc(this), 0, 0) : Y.call(null, this, Vc(this), 0, 0) : null;
};
g.J = function() {
  return this.f;
};
g.ua = function() {
  if (0 === this.f) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.f) {
    return Sa(Hc, this.i);
  }
  if (1 < this.f - Qc(this)) {
    return new X(this.i, this.f - 1, this.shift, this.root, this.A.slice(0, -1), null);
  }
  if (u) {
    var a = Wc(this, this.f - 2), b = ad(this, this.shift, this.root), b = null == b ? Z : b, c = this.f - 1;
    return 5 < this.shift && null == b.b[1] ? new X(this.i, c, this.shift - 5, b.b[0], a, null) : new X(this.i, c, this.shift, b, a, null);
  }
  return null;
};
g.Xa = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return Qc(this) <= b ? (a = y(this.A), a[b & 31] = c, new X(this.i, this.f, this.shift, this.root, a, null)) : new X(this.i, this.f, this.shift, Zc(this, this.shift, this.root, b, c), this.A, null);
  }
  if (b === this.f) {
    return za(this, c);
  }
  if (u) {
    throw Error([x("Index "), x(b), x(" out of bounds  [0,"), x(this.f), x("]")].join(""));
  }
  return null;
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return new X(b, this.f, this.shift, this.root, this.A, this.m);
};
g.D = function() {
  return this.i;
};
g.C = function(a, b) {
  return Xc(this, b)[b & 31];
};
g.X = function(a, b, c) {
  return 0 <= b && b < this.f ? Wc(this, b)[b & 31] : c;
};
g.K = function() {
  return Jb(Hc, this.i);
};
var Z = new Nc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Hc = new X(null, 0, 5, Z, [], 0);
function ed(a, b) {
  var c = a.length, d = b ? a : y(a);
  if (32 > c) {
    return new X(null, c, 5, Z, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, h = (new X(null, 32, 5, Z, e, null)).sa(null);;) {
    if (f < c) {
      e = f + 1, h = vc.a(h, d[f]), f = e;
    } else {
      return fb(h);
    }
  }
}
function fd(a) {
  return fb(Vb.c(eb, db(Hc), a));
}
var gd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof tb && 0 === a.l ? ed.a ? ed.a(a.b, !0) : ed.call(null, a.b, !0) : fd(a);
  }
  a.k = 0;
  a.g = function(a) {
    a = J(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function hd(a, b, c, d, e, f) {
  this.s = a;
  this.V = b;
  this.l = c;
  this.r = d;
  this.i = e;
  this.m = f;
  this.h = 32243948;
  this.o = 1536;
}
g = hd.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = yb(this);
};
g.da = function() {
  if (this.r + 1 < this.V.length) {
    var a = Y.j ? Y.j(this.s, this.V, this.l, this.r + 1) : Y.call(null, this.s, this.V, this.l, this.r + 1);
    return null == a ? null : a;
  }
  return lb(this);
};
g.B = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return nb(this);
};
g.P = function(a, b) {
  return ub.a(id.c ? id.c(this.s, this.l + this.r, Q(this.s)) : id.call(null, this.s, this.l + this.r, Q(this.s)), b);
};
g.Q = function(a, b, c) {
  return ub.c(id.c ? id.c(this.s, this.l + this.r, Q(this.s)) : id.call(null, this.s, this.l + this.r, Q(this.s)), b, c);
};
g.F = function() {
  return this;
};
g.R = function() {
  return this.V[this.r];
};
g.U = function() {
  if (this.r + 1 < this.V.length) {
    var a = Y.j ? Y.j(this.s, this.V, this.l, this.r + 1) : Y.call(null, this.s, this.V, this.l, this.r + 1);
    return null == a ? M : a;
  }
  return kb(this);
};
g.Ga = function() {
  var a = this.l + this.V.length;
  return a < wa(this.s) ? Y.j ? Y.j(this.s, Wc(this.s, a), a, 0) : Y.call(null, this.s, Wc(this.s, a), a, 0) : null;
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return Y.u ? Y.u(this.s, this.V, this.l, this.r, b) : Y.call(null, this.s, this.V, this.l, this.r, b);
};
g.K = function() {
  return Jb(Hc, this.i);
};
g.Ha = function() {
  return lc.a(this.V, this.r);
};
g.Ia = function() {
  var a = this.l + this.V.length;
  return a < wa(this.s) ? Y.j ? Y.j(this.s, Wc(this.s, a), a, 0) : Y.call(null, this.s, Wc(this.s, a), a, 0) : M;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new hd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new hd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new hd(a, Xc(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.j = b;
  d.u = a;
  return d;
}();
function jd(a, b, c, d, e) {
  this.i = a;
  this.W = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.h = 166617887;
  this.o = 8192;
}
g = jd.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = yb(this);
};
g.L = function(a, b) {
  return D.c(this, b, null);
};
g.M = function(a, b, c) {
  return "number" === typeof b ? A.c(this, b, c) : c;
};
g.ra = function(a, b, c) {
  if ("number" === typeof b) {
    return Ma(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return this.C(null, a);
};
g.a = function(a, b) {
  return this.X(null, a, b);
};
g.B = function(a, b) {
  return kd.u ? kd.u(this.i, Ma(this.W, this.end, b), this.start, this.end + 1, null) : kd.call(null, this.i, Ma(this.W, this.end, b), this.start, this.end + 1, null);
};
g.toString = function() {
  return nb(this);
};
g.P = function(a, b) {
  return ub.a(this, b);
};
g.Q = function(a, b, c) {
  return ub.c(this, b, c);
};
g.F = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : P(A.a(a.W, e), new W(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.J = function() {
  return this.end - this.start;
};
g.ua = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return kd.u ? kd.u(this.i, this.W, this.start, this.end - 1, null) : kd.call(null, this.i, this.W, this.start, this.end - 1, null);
};
g.Xa = function(a, b, c) {
  var d = this, e = d.start + b;
  return kd.u ? kd.u(d.i, Fb.c(d.W, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : kd.call(null, d.i, Fb.c(d.W, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return kd.u ? kd.u(b, this.W, this.start, this.end, this.m) : kd.call(null, b, this.W, this.start, this.end, this.m);
};
g.D = function() {
  return this.i;
};
g.C = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Uc(b, this.end - this.start) : A.a(this.W, this.start + b);
};
g.X = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : A.c(this.W, this.start + b, c);
};
g.K = function() {
  return Jb(Hc, this.i);
};
function kd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof jd) {
      c = b.start + c, d = b.start + d, b = b.W;
    } else {
      var f = Q(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new jd(a, b, c, d, e);
    }
  }
}
var id = function() {
  function a(a, b, c) {
    return kd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, Q(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function cd(a) {
  return new Nc({}, y(a.b));
}
function dd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Qb(a, 0, b, 0, a.length);
  return b;
}
var md = function ld(b, c, d, e) {
  d = b.root.n === d.n ? d : new Nc(b.root.n, y(d.b));
  var f = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.b[f];
    b = null != h ? ld(b, c - 5, h, e) : Rc(b.root.n, c - 5, e);
  }
  d.b[f] = b;
  return d;
};
function bd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.A = d;
  this.h = 275;
  this.o = 88;
}
g = bd.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.M(null, a, b);
};
g.L = function(a, b) {
  return D.c(this, b, null);
};
g.M = function(a, b, c) {
  return "number" === typeof b ? A.c(this, b, c) : c;
};
g.C = function(a, b) {
  if (this.root.n) {
    return Xc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.X = function(a, b, c) {
  return 0 <= b && b < this.f ? A.a(this, b) : c;
};
g.J = function() {
  if (this.root.n) {
    return this.f;
  }
  throw Error("count after persistent!");
};
g.cb = function(a, b, c) {
  var d = this;
  if (d.root.n) {
    if (0 <= b && b < d.f) {
      return Qc(this) <= b ? d.A[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = d.root.n === k.n ? k : new Nc(d.root.n, y(k.b));
          if (0 === a) {
            l.b[b & 31] = c;
          } else {
            var n = b >>> a & 31, q = f(a - 5, l.b[n]);
            l.b[n] = q;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return eb(this, c);
    }
    if (u) {
      throw Error([x("Index "), x(b), x(" out of bounds for TransientVector of length"), x(d.f)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.va = function(a, b, c) {
  if ("number" === typeof b) {
    return hb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.Ca = function(a, b) {
  if (this.root.n) {
    if (32 > this.f - Qc(this)) {
      this.A[this.f & 31] = b;
    } else {
      var c = new Nc(this.root.n, this.A), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.A = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Rc(this.root.n, this.shift, c);
        this.root = new Nc(this.root.n, d);
        this.shift = e;
      } else {
        this.root = md(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Da = function() {
  if (this.root.n) {
    this.root.n = null;
    var a = this.f - Qc(this), b = Array(a);
    Qb(this.A, 0, b, 0, a);
    return new X(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function nd() {
  this.o = 0;
  this.h = 2097152;
}
nd.prototype.t = function() {
  return!1;
};
var od = new nd;
function pd(a, b) {
  return Tb((null == b ? 0 : b ? b.h & 1024 || b.Hb || (b.h ? 0 : s(Ea, b)) : s(Ea, b)) ? Q(a) === Q(b) ? zc(Ac, Cc.a(function(a) {
    return F.a(Db.c(b, K(a), od), K(N(a)));
  }, a)) : null : null);
}
function qd(a, b) {
  var c = a.b;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.ga, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof U && e === h.ga) {
          c = f;
          break a;
        }
        if (u) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (u) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof rb) {
        a: {
          d = c.length;
          e = b.ha;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof rb && e === h.ha) {
              c = f;
              break a;
            }
            if (u) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (u) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (u) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (F.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (u) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function rd(a, b, c) {
  this.b = a;
  this.l = b;
  this.la = c;
  this.o = 0;
  this.h = 32374990;
}
g = rd.prototype;
g.w = function() {
  return yb(this);
};
g.da = function() {
  return this.l < this.b.length - 2 ? new rd(this.b, this.l + 2, this.la) : null;
};
g.B = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return nb(this);
};
g.P = function(a, b) {
  return Wb.a(b, this);
};
g.Q = function(a, b, c) {
  return Wb.c(b, c, this);
};
g.F = function() {
  return this;
};
g.J = function() {
  return(this.b.length - this.l) / 2;
};
g.R = function() {
  return new X(null, 2, 5, Z, [this.b[this.l], this.b[this.l + 1]], null);
};
g.U = function() {
  return this.l < this.b.length - 2 ? new rd(this.b, this.l + 2, this.la) : M;
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return new rd(this.b, this.l, b);
};
g.D = function() {
  return this.la;
};
g.K = function() {
  return Jb(M, this.la);
};
function p(a, b, c, d) {
  this.i = a;
  this.f = b;
  this.b = c;
  this.m = d;
  this.o = 8196;
  this.h = 16123663;
}
g = p.prototype;
g.sa = function() {
  return new sd({}, this.b.length, y(this.b));
};
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = $b(this);
};
g.L = function(a, b) {
  return D.c(this, b, null);
};
g.M = function(a, b, c) {
  a = qd(this, b);
  return-1 === a ? c : this.b[a + 1];
};
g.ra = function(a, b, c) {
  a = qd(this, b);
  if (-1 === a) {
    if (this.f < td) {
      a = this.b;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new p(this.i, this.f + 1, e, null);
    }
    return Sa(Da(Gc(ud, this), b, c), this.i);
  }
  return c === this.b[a + 1] ? this : u ? (b = y(this.b), b[a + 1] = c, new p(this.i, this.f, b, null)) : null;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.M(null, a, b);
};
g.B = function(a, b) {
  return Nb(b) ? Da(this, A.a(b, 0), A.a(b, 1)) : Vb.c(za, this, b);
};
g.toString = function() {
  return nb(this);
};
g.F = function() {
  return 0 <= this.b.length - 2 ? new rd(this.b, 0, null) : null;
};
g.J = function() {
  return this.f;
};
g.t = function(a, b) {
  return pd(this, b);
};
g.G = function(a, b) {
  return new p(b, this.f, this.b, this.m);
};
g.D = function() {
  return this.i;
};
g.K = function() {
  return Sa(vd, this.i);
};
g.Wa = function(a, b) {
  if (0 <= qd(this, b)) {
    var c = this.b.length, d = c - 2;
    if (0 === d) {
      return xa(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new p(this.i, this.f - 1, d, null);
      }
      if (F.a(b, this.b[e])) {
        e += 2;
      } else {
        if (u) {
          d[f] = this.b[e], d[f + 1] = this.b[e + 1], f += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var vd = new p(null, 0, [], null), td = 8;
function sd(a, b, c) {
  this.na = a;
  this.ka = b;
  this.b = c;
  this.o = 56;
  this.h = 258;
}
g = sd.prototype;
g.va = function(a, b, c) {
  if (r(this.na)) {
    a = qd(this, b);
    if (-1 === a) {
      return this.ka + 2 <= 2 * td ? (this.ka += 2, this.b.push(b), this.b.push(c), this) : wc.c(wd.a ? wd.a(this.ka, this.b) : wd.call(null, this.ka, this.b), b, c);
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.Ca = function(a, b) {
  if (r(this.na)) {
    if (b ? b.h & 2048 || b.nb || (b.h ? 0 : s(Ga, b)) : s(Ga, b)) {
      return gb(this, ac.d ? ac.d(b) : ac.call(null, b), bc.d ? bc.d(b) : bc.call(null, b));
    }
    for (var c = J(b), d = this;;) {
      var e = K(c);
      if (r(e)) {
        c = N(c), d = gb(d, ac.d ? ac.d(e) : ac.call(null, e), bc.d ? bc.d(e) : bc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Da = function() {
  if (r(this.na)) {
    return this.na = !1, new p(null, Yb(this.ka), this.b, null);
  }
  throw Error("persistent! called twice");
};
g.L = function(a, b) {
  return D.c(this, b, null);
};
g.M = function(a, b, c) {
  if (r(this.na)) {
    return a = qd(this, b), -1 === a ? c : this.b[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.J = function() {
  if (r(this.na)) {
    return Yb(this.ka);
  }
  throw Error("count after persistent!");
};
function wd(a, b) {
  for (var c = db(ud), d = 0;;) {
    if (d < a) {
      c = wc.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function xd() {
  this.ba = !1;
}
function yd(a, b) {
  return a === b ? !0 : a === b || a instanceof U && b instanceof U && a.ga === b.ga ? !0 : u ? F.a(a, b) : null;
}
var zd = function() {
  function a(a, b, c, h, k) {
    a = y(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = y(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.u = a;
  return c;
}();
function Ad(a, b) {
  var c = Array(a.length - 2);
  Qb(a, 0, c, 0, 2 * b);
  Qb(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var Bd = function() {
  function a(a, b, c, h, k, l) {
    a = a.oa(b);
    a.b[c] = h;
    a.b[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.oa(b);
    a.b[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.ca = a;
  return c;
}();
function Cd(a, b, c) {
  this.n = a;
  this.p = b;
  this.b = c;
}
g = Cd.prototype;
g.Z = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Zb(this.p & h - 1);
  if (0 === (this.p & h)) {
    var l = Zb(this.p);
    if (2 * l < this.b.length) {
      a = this.oa(a);
      b = a.b;
      f.ba = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.p |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Dd.Z(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.p >>> d & 1) && (k[d] = null != this.b[e] ? Dd.Z(a, b + 5, H(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Ed(a, l + 1, k);
    }
    return u ? (b = Array(2 * (l + 4)), Qb(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Qb(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.ba = !0, a = this.oa(a), a.b = b, a.p |= h, a) : null;
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  return null == l ? (l = h.Z(a, b + 5, c, d, e, f), l === h ? this : Bd.j(this, a, 2 * k + 1, l)) : yd(d, l) ? e === h ? this : Bd.j(this, a, 2 * k + 1, e) : u ? (f.ba = !0, Bd.ca(this, a, 2 * k, null, 2 * k + 1, Fd.ma ? Fd.ma(a, b + 5, l, h, c, d, e) : Fd.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.xa = function() {
  return Gd.d ? Gd.d(this.b) : Gd.call(null, this.b);
};
g.oa = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Zb(this.p), c = Array(0 > b ? 4 : 2 * (b + 1));
  Qb(this.b, 0, c, 0, 2 * b);
  return new Cd(a, this.p, c);
};
g.ya = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.p & d)) {
    return this;
  }
  var e = Zb(this.p & d - 1), f = this.b[2 * e], h = this.b[2 * e + 1];
  return null == f ? (a = h.ya(a + 5, b, c), a === h ? this : null != a ? new Cd(null, this.p, zd.c(this.b, 2 * e + 1, a)) : this.p === d ? null : u ? new Cd(null, this.p ^ d, Ad(this.b, e)) : null) : yd(c, f) ? new Cd(null, this.p ^ d, Ad(this.b, e)) : u ? this : null;
};
g.Y = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Zb(this.p & f - 1);
  if (0 === (this.p & f)) {
    var k = Zb(this.p);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Dd.Y(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.p >>> c & 1) && (h[c] = null != this.b[d] ? Dd.Y(a + 5, H(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Ed(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Qb(this.b, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Qb(this.b, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ba = !0;
    return new Cd(null, this.p | f, a);
  }
  k = this.b[2 * h];
  f = this.b[2 * h + 1];
  return null == k ? (k = f.Y(a + 5, b, c, d, e), k === f ? this : new Cd(null, this.p, zd.c(this.b, 2 * h + 1, k))) : yd(c, k) ? d === f ? this : new Cd(null, this.p, zd.c(this.b, 2 * h + 1, d)) : u ? (e.ba = !0, new Cd(null, this.p, zd.u(this.b, 2 * h, null, 2 * h + 1, Fd.ca ? Fd.ca(a + 5, k, f, b, c, d) : Fd.call(null, a + 5, k, f, b, c, d)))) : null;
};
g.ja = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.p & e)) {
    return d;
  }
  var f = Zb(this.p & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.ja(a + 5, b, c, d) : yd(c, e) ? f : u ? d : null;
};
var Dd = new Cd(null, 0, []);
function Ed(a, b, c) {
  this.n = a;
  this.f = b;
  this.b = c;
}
g = Ed.prototype;
g.Z = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.b[h];
  if (null == k) {
    return a = Bd.j(this, a, h, Dd.Z(a, b + 5, c, d, e, f)), a.f += 1, a;
  }
  b = k.Z(a, b + 5, c, d, e, f);
  return b === k ? this : Bd.j(this, a, h, b);
};
g.xa = function() {
  return Hd.d ? Hd.d(this.b) : Hd.call(null, this.b);
};
g.oa = function(a) {
  return a === this.n ? this : new Ed(a, this.f, y(this.b));
};
g.ya = function(a, b, c) {
  var d = b >>> a & 31, e = this.b[d];
  if (null != e) {
    a = e.ya(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.f) {
          a: {
            e = this.b;
            a = 2 * (this.f - 1);
            b = Array(a);
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new Cd(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new Ed(null, this.f - 1, zd.c(this.b, d, a));
        }
      } else {
        d = u ? new Ed(null, this.f, zd.c(this.b, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
g.Y = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.b[f];
  if (null == h) {
    return new Ed(null, this.f + 1, zd.c(this.b, f, Dd.Y(a + 5, b, c, d, e)));
  }
  a = h.Y(a + 5, b, c, d, e);
  return a === h ? this : new Ed(null, this.f, zd.c(this.b, f, a));
};
g.ja = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.ja(a + 5, b, c, d) : d;
};
function Id(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (yd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Jd(a, b, c, d) {
  this.n = a;
  this.ea = b;
  this.f = c;
  this.b = d;
}
g = Jd.prototype;
g.Z = function(a, b, c, d, e, f) {
  if (c === this.ea) {
    b = Id(this.b, this.f, d);
    if (-1 === b) {
      if (this.b.length > 2 * this.f) {
        return a = Bd.ca(this, a, 2 * this.f, d, 2 * this.f + 1, e), f.ba = !0, a.f += 1, a;
      }
      c = this.b.length;
      b = Array(c + 2);
      Qb(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ba = !0;
      f = this.f + 1;
      a === this.n ? (this.b = b, this.f = f, a = this) : a = new Jd(this.n, this.ea, f, b);
      return a;
    }
    return this.b[b + 1] === e ? this : Bd.j(this, a, b + 1, e);
  }
  return(new Cd(a, 1 << (this.ea >>> b & 31), [null, this, null, null])).Z(a, b, c, d, e, f);
};
g.xa = function() {
  return Gd.d ? Gd.d(this.b) : Gd.call(null, this.b);
};
g.oa = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  Qb(this.b, 0, b, 0, 2 * this.f);
  return new Jd(a, this.ea, this.f, b);
};
g.ya = function(a, b, c) {
  a = Id(this.b, this.f, c);
  return-1 === a ? this : 1 === this.f ? null : u ? new Jd(null, this.ea, this.f - 1, Ad(this.b, Yb(a))) : null;
};
g.Y = function(a, b, c, d, e) {
  return b === this.ea ? (a = Id(this.b, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), Qb(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ba = !0, new Jd(null, this.ea, this.f + 1, b)) : F.a(this.b[a], d) ? this : new Jd(null, this.ea, this.f, zd.c(this.b, a + 1, d))) : (new Cd(null, 1 << (this.ea >>> a & 31), [null, this])).Y(a, b, c, d, e);
};
g.ja = function(a, b, c, d) {
  a = Id(this.b, this.f, c);
  return 0 > a ? d : yd(c, this.b[a]) ? this.b[a + 1] : u ? d : null;
};
var Fd = function() {
  function a(a, b, c, h, k, l, n) {
    var q = H(c);
    if (q === k) {
      return new Jd(null, q, 2, [c, h, l, n]);
    }
    var t = new xd;
    return Dd.Z(a, b, q, c, h, t).Z(a, b, k, l, n, t);
  }
  function b(a, b, c, h, k, l) {
    var n = H(b);
    if (n === h) {
      return new Jd(null, n, 2, [b, c, k, l]);
    }
    var q = new xd;
    return Dd.Y(a, n, b, c, q).Y(a, h, k, l, q);
  }
  var c = null, c = function(c, e, f, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ca = b;
  c.ma = a;
  return c;
}();
function Kd(a, b, c, d, e) {
  this.i = a;
  this.$ = b;
  this.l = c;
  this.q = d;
  this.m = e;
  this.o = 0;
  this.h = 32374860;
}
g = Kd.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = yb(this);
};
g.B = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return nb(this);
};
g.P = function(a, b) {
  return Wb.a(b, this);
};
g.Q = function(a, b, c) {
  return Wb.c(b, c, this);
};
g.F = function() {
  return this;
};
g.R = function() {
  return null == this.q ? new X(null, 2, 5, Z, [this.$[this.l], this.$[this.l + 1]], null) : K(this.q);
};
g.U = function() {
  return null == this.q ? Gd.c ? Gd.c(this.$, this.l + 2, null) : Gd.call(null, this.$, this.l + 2, null) : Gd.c ? Gd.c(this.$, this.l, N(this.q)) : Gd.call(null, this.$, this.l, N(this.q));
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return new Kd(b, this.$, this.l, this.q, this.m);
};
g.D = function() {
  return this.i;
};
g.K = function() {
  return Jb(M, this.i);
};
var Gd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Kd(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (r(h) && (h = h.xa(), r(h))) {
            return new Kd(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Kd(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.c = a;
  return c;
}();
function Ld(a, b, c, d, e) {
  this.i = a;
  this.$ = b;
  this.l = c;
  this.q = d;
  this.m = e;
  this.o = 0;
  this.h = 32374860;
}
g = Ld.prototype;
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = yb(this);
};
g.B = function(a, b) {
  return P(b, this);
};
g.toString = function() {
  return nb(this);
};
g.P = function(a, b) {
  return Wb.a(b, this);
};
g.Q = function(a, b, c) {
  return Wb.c(b, c, this);
};
g.F = function() {
  return this;
};
g.R = function() {
  return K(this.q);
};
g.U = function() {
  return Hd.j ? Hd.j(null, this.$, this.l, N(this.q)) : Hd.call(null, null, this.$, this.l, N(this.q));
};
g.t = function(a, b) {
  return zb(this, b);
};
g.G = function(a, b) {
  return new Ld(b, this.$, this.l, this.q, this.m);
};
g.D = function() {
  return this.i;
};
g.K = function() {
  return Jb(M, this.i);
};
var Hd = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (r(k) && (k = k.xa(), r(k))) {
            return new Ld(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Ld(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.j(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.j = a;
  return c;
}();
function Md(a, b, c, d, e, f) {
  this.i = a;
  this.f = b;
  this.root = c;
  this.O = d;
  this.S = e;
  this.m = f;
  this.o = 8196;
  this.h = 16123663;
}
g = Md.prototype;
g.sa = function() {
  return new Nd({}, this.root, this.f, this.O, this.S);
};
g.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = $b(this);
};
g.L = function(a, b) {
  return D.c(this, b, null);
};
g.M = function(a, b, c) {
  return null == b ? this.O ? this.S : c : null == this.root ? c : u ? this.root.ja(0, H(b), b, c) : null;
};
g.ra = function(a, b, c) {
  if (null == b) {
    return this.O && c === this.S ? this : new Md(this.i, this.O ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new xd;
  b = (null == this.root ? Dd : this.root).Y(0, H(b), b, c, a);
  return b === this.root ? this : new Md(this.i, a.ba ? this.f + 1 : this.f, b, this.O, this.S, null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.L(null, c);
      case 3:
        return this.M(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(y(b)));
};
g.d = function(a) {
  return this.L(null, a);
};
g.a = function(a, b) {
  return this.M(null, a, b);
};
g.B = function(a, b) {
  return Nb(b) ? Da(this, A.a(b, 0), A.a(b, 1)) : Vb.c(za, this, b);
};
g.toString = function() {
  return nb(this);
};
g.F = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.xa() : null;
    return this.O ? P(new X(null, 2, 5, Z, [null, this.S], null), a) : a;
  }
  return null;
};
g.J = function() {
  return this.f;
};
g.t = function(a, b) {
  return pd(this, b);
};
g.G = function(a, b) {
  return new Md(b, this.f, this.root, this.O, this.S, this.m);
};
g.D = function() {
  return this.i;
};
g.K = function() {
  return Sa(ud, this.i);
};
g.Wa = function(a, b) {
  if (null == b) {
    return this.O ? new Md(this.i, this.f - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (u) {
    var c = this.root.ya(0, H(b), b);
    return c === this.root ? this : new Md(this.i, this.f - 1, c, this.O, this.S, null);
  }
  return null;
};
var ud = new Md(null, 0, null, !1, null, 0);
function Eb(a, b) {
  for (var c = a.length, d = 0, e = db(ud);;) {
    if (d < c) {
      var f = d + 1, e = e.va(null, a[d], b[d]), d = f
    } else {
      return fb(e);
    }
  }
}
function Nd(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.O = d;
  this.S = e;
  this.o = 56;
  this.h = 258;
}
g = Nd.prototype;
g.va = function(a, b, c) {
  return Od(this, b, c);
};
g.Ca = function(a, b) {
  var c;
  a: {
    if (this.n) {
      if (b ? b.h & 2048 || b.nb || (b.h ? 0 : s(Ga, b)) : s(Ga, b)) {
        c = Od(this, ac.d ? ac.d(b) : ac.call(null, b), bc.d ? bc.d(b) : bc.call(null, b));
        break a;
      }
      c = J(b);
      for (var d = this;;) {
        var e = K(c);
        if (r(e)) {
          c = N(c), d = Od(d, ac.d ? ac.d(e) : ac.call(null, e), bc.d ? bc.d(e) : bc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
g.Da = function() {
  var a;
  if (this.n) {
    this.n = null, a = new Md(null, this.count, this.root, this.O, this.S, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.L = function(a, b) {
  return null == b ? this.O ? this.S : null : null == this.root ? null : this.root.ja(0, H(b), b);
};
g.M = function(a, b, c) {
  return null == b ? this.O ? this.S : c : null == this.root ? c : this.root.ja(0, H(b), b, c);
};
g.J = function() {
  if (this.n) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Od(a, b, c) {
  if (a.n) {
    if (null == b) {
      a.S !== c && (a.S = c), a.O || (a.count += 1, a.O = !0);
    } else {
      var d = new xd;
      b = (null == a.root ? Dd : a.root).Z(a.n, 0, H(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ba && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Pd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = J(a);
    for (var b = db(ud);;) {
      if (a) {
        var e = N(N(a)), b = wc.c(b, K(a), K(N(a)));
        a = e;
      } else {
        return fb(b);
      }
    }
  }
  a.k = 0;
  a.g = function(a) {
    a = J(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Qd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new p(null, Yb(Q(a)), T.a(ta, a), null);
  }
  a.k = 0;
  a.g = function(a) {
    a = J(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ac(a) {
  return Ia(a);
}
function bc(a) {
  return Ja(a);
}
function gc(a) {
  if (a && (a.o & 4096 || a.pb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([x("Doesn't support name: "), x(a)].join(""));
}
var Rd = function() {
  function a(a, b) {
    for (;;) {
      if (J(b) && 0 < a) {
        var c = a - 1, h = N(b);
        a = c;
        b = h;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (J(a)) {
        a = N(a);
      } else {
        return null;
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), Sd = function() {
  function a(a, b) {
    Rd.a(a, b);
    return b;
  }
  function b(a) {
    Rd.d(a);
    return a;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function Td(a, b, c, d, e, f, h) {
  var k = ia;
  try {
    ia = null == ia ? null : ia - 1;
    if (null != ia && 0 > ia) {
      return E(a, "#");
    }
    E(a, c);
    J(h) && (b.c ? b.c(K(h), a, f) : b.call(null, K(h), a, f));
    for (var l = N(h), n = oa.d(f);l && (null == n || 0 !== n);) {
      E(a, d);
      b.c ? b.c(K(l), a, f) : b.call(null, K(l), a, f);
      var q = N(l);
      c = n - 1;
      l = q;
      n = c;
    }
    r(oa.d(f)) && (E(a, d), b.c ? b.c("...", a, f) : b.call(null, "...", a, f));
    return E(a, e);
  } finally {
    ia = k;
  }
}
var Ud = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = O(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = J(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.C(null, k);
        E(a, l);
        k += 1;
      } else {
        if (e = J(e)) {
          f = e, Ob(f) ? (e = jb(f), h = kb(f), f = e, l = Q(e), e = h, h = l) : (l = K(f), E(a, l), e = N(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.k = 1;
  a.g = function(a) {
    var d = K(a);
    a = L(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Vd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Wd(a) {
  return[x('"'), x(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Vd[a];
  })), x('"')].join("");
}
var $ = function Xd(b, c, d) {
  if (null == b) {
    return E(c, "nil");
  }
  if (void 0 === b) {
    return E(c, "#\x3cundefined\x3e");
  }
  if (u) {
    r(function() {
      var c = Db.a(d, ma);
      return r(c) ? (c = b ? b.h & 131072 || b.ob ? !0 : b.h ? !1 : s(Oa, b) : s(Oa, b)) ? Kb(b) : c : c;
    }()) && (E(c, "^"), Xd(Kb(b), c, d), E(c, " "));
    if (null == b) {
      return E(c, "nil");
    }
    if (b.ib) {
      return b.wb(c);
    }
    if (b && (b.h & 2147483648 || b.N)) {
      return b.v(null, c, d);
    }
    if (qa(b) === Boolean || "number" === typeof b) {
      return E(c, "" + x(b));
    }
    if (null != b && b.constructor === Object) {
      return E(c, "#js "), Yd.j ? Yd.j(Cc.a(function(c) {
        return new X(null, 2, 5, Z, [hc.d(c), b[c]], null);
      }, Pb(b)), Xd, c, d) : Yd.call(null, Cc.a(function(c) {
        return new X(null, 2, 5, Z, [hc.d(c), b[c]], null);
      }, Pb(b)), Xd, c, d);
    }
    if (b instanceof Array) {
      return Td(c, Xd, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return r(la.d(d)) ? E(c, Wd(b)) : E(c, b);
    }
    if (Hb(b)) {
      return Ud.e(c, O(["#\x3c", "" + x(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + x(b);;) {
          if (Q(d) < c) {
            d = [x("0"), x(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Ud.e(c, O(['#inst "', "" + x(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Ud.e(c, O(['#"', b.source, '"'], 0)) : (b ? b.h & 2147483648 || b.N || (b.h ? 0 : s($a, b)) : s($a, b)) ? ab(b, c, d) : u ? Ud.e(c, O(["#\x3c", "" + x(b), "\x3e"], 0)) : null;
  }
  return null;
}, Zd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || pa(J(a))) {
      b = "";
    } else {
      b = x;
      var e = ja(), f = new ga;
      a: {
        var h = new mb(f);
        $(K(a), h, e);
        a = J(N(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var q = k.C(null, n);
            E(h, " ");
            $(q, h, e);
            n += 1;
          } else {
            if (a = J(a)) {
              k = a, Ob(k) ? (a = jb(k), l = kb(k), k = a, q = Q(a), a = l, l = q) : (q = K(k), E(h, " "), $(q, h, e), a = N(k), k = null, l = 0), n = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(f);
    }
    return b;
  }
  a.k = 0;
  a.g = function(a) {
    a = J(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Yd(a, b, c, d) {
  return Td(c, function(a, c, d) {
    b.c ? b.c(Ia(a), c, d) : b.call(null, Ia(a), c, d);
    E(c, " ");
    return b.c ? b.c(Ja(a), c, d) : b.call(null, Ja(a), c, d);
  }, "{", ", ", "}", d, J(a));
}
tb.prototype.N = !0;
tb.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
jd.prototype.N = !0;
jd.prototype.v = function(a, b, c) {
  return Td(b, $, "[", " ", "]", c, this);
};
mc.prototype.N = !0;
mc.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
p.prototype.N = !0;
p.prototype.v = function(a, b, c) {
  return Yd(this, $, b, c);
};
W.prototype.N = !0;
W.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
Kd.prototype.N = !0;
Kd.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
hd.prototype.N = !0;
hd.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
Md.prototype.N = !0;
Md.prototype.v = function(a, b, c) {
  return Yd(this, $, b, c);
};
X.prototype.N = !0;
X.prototype.v = function(a, b, c) {
  return Td(b, $, "[", " ", "]", c, this);
};
cc.prototype.N = !0;
cc.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
rd.prototype.N = !0;
rd.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
dc.prototype.N = !0;
dc.prototype.v = function(a, b) {
  return E(b, "()");
};
fc.prototype.N = !0;
fc.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
Ld.prototype.N = !0;
Ld.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
X.prototype.Aa = !0;
X.prototype.Ba = function(a, b) {
  return Ub.a(this, b);
};
jd.prototype.Aa = !0;
jd.prototype.Ba = function(a, b) {
  return Ub.a(this, b);
};
U.prototype.Aa = !0;
U.prototype.Ba = function(a, b) {
  return ob(this, b);
};
rb.prototype.Aa = !0;
rb.prototype.Ba = function(a, b) {
  return ob(this, b);
};
function $d(a, b) {
  if (a ? a.rb : a) {
    return a.rb(a, b);
  }
  var c;
  c = $d[m(null == a ? null : a)];
  if (!c && (c = $d._, !c)) {
    throw w("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var ae = function() {
  function a(a, b, c, d, e) {
    if (a ? a.vb : a) {
      return a.vb(a, b, c, d, e);
    }
    var q;
    q = ae[m(null == a ? null : a)];
    if (!q && (q = ae._, !q)) {
      throw w("ISwap.-swap!", a);
    }
    return q.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.ub : a) {
      return a.ub(a, b, c, d);
    }
    var e;
    e = ae[m(null == a ? null : a)];
    if (!e && (e = ae._, !e)) {
      throw w("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.tb : a) {
      return a.tb(a, b, c);
    }
    var d;
    d = ae[m(null == a ? null : a)];
    if (!d && (d = ae._, !d)) {
      throw w("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.sb : a) {
      return a.sb(a, b);
    }
    var c;
    c = ae[m(null == a ? null : a)];
    if (!c && (c = ae._, !c)) {
      throw w("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
      case 4:
        return b.call(this, e, h, k, l);
      case 5:
        return a.call(this, e, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.c = c;
  e.j = b;
  e.u = a;
  return e;
}();
function be(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Ab = c;
  this.Ea = d;
  this.h = 2153938944;
  this.o = 16386;
}
g = be.prototype;
g.w = function() {
  return this[ba] || (this[ba] = ++ca);
};
g.fb = function(a, b, c) {
  a = J(this.Ea);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.C(null, f), k = S.c(h, 0, null), h = S.c(h, 1, null);
      h.j ? h.j(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = J(a)) {
        Ob(a) ? (d = jb(a), a = kb(a), k = d, e = Q(d), d = k) : (d = K(a), k = S.c(d, 0, null), h = S.c(d, 1, null), h.j ? h.j(k, this, b, c) : h.call(null, k, this, b, c), a = N(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.eb = function(a, b, c) {
  return this.Ea = Fb.c(this.Ea, b, c);
};
g.v = function(a, b, c) {
  E(b, "#\x3cAtom: ");
  $(this.state, b, c);
  return E(b, "\x3e");
};
g.D = function() {
  return this.i;
};
g.lb = function() {
  return this.state;
};
g.t = function(a, b) {
  return this === b;
};
var de = function() {
  function a(a) {
    return new be(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Sb(c) ? T.a(Pd, c) : c, e = Db.a(d, ce), d = Db.a(d, ma);
      return new be(a, d, e, null);
    }
    a.k = 1;
    a.g = function(a) {
      var c = K(a);
      a = L(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, O(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.g = c.g;
  b.d = a;
  b.e = c.e;
  return b;
}();
function ee(a, b) {
  if (a instanceof be) {
    var c = a.Ab;
    if (null != c && !r(c.d ? c.d(b) : c.call(null, b))) {
      throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(Zd.e(O([ec(new rb(null, "validate", "validate", 1233162959, null), new rb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Ea && bb(a, c, b);
    return b;
  }
  return $d(a, b);
}
var fe = function() {
  function a(a, b, c, d) {
    return a instanceof be ? ee(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d)) : ae.j(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof be ? ee(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : ae.c(a, b, c);
  }
  function c(a, b) {
    return a instanceof be ? ee(a, b.d ? b.d(a.state) : b.call(null, a.state)) : ae.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var v = null;
      4 < arguments.length && (v = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, d, e, f) {
      return a instanceof be ? ee(a, T.u(c, a.state, d, e, f)) : ae.u(a, c, d, e, f);
    }
    a.k = 4;
    a.g = function(a) {
      var c = K(a);
      a = N(a);
      var d = K(a);
      a = N(a);
      var e = K(a);
      a = N(a);
      var f = K(a);
      a = L(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.j = a;
  d.e = e.e;
  return d;
}(), ge = {};
function he(a, b) {
  if (a ? a.mb : a) {
    return a.mb(a, b);
  }
  var c;
  c = he[m(null == a ? null : a)];
  if (!c && (c = he._, !c)) {
    throw w("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var je = function() {
  function a(a) {
    return b.e(a, O([new p(null, 1, [ie, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? r(r(null) ? null : a.Fb) || (a.xb ? 0 : s(ge, a)) : s(ge, a)) {
        return he(a, T.a(Qd, c));
      }
      if (J(c)) {
        var d = Sb(c) ? T.a(Pd, c) : c, e = Db.a(d, ie);
        return function(a, b, c, d) {
          return function z(e) {
            return Sb(e) ? Sd.d(Cc.a(z, e)) : (null == e ? 0 : e ? e.h & 8 || e.Db || (e.h ? 0 : s(ya, e)) : s(ya, e)) ? Gc(null == e ? null : xa(e), Cc.a(z, e)) : e instanceof Array ? fd(Cc.a(z, e)) : qa(e) === Object ? Gc(vd, function() {
              return function(a, b, c, d) {
                return function Pa(f) {
                  return new W(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = J(f);
                        if (a) {
                          if (Ob(a)) {
                            var b = jb(a), c = Q(b), h = new jc(Array(c), 0);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = A.a(b, k), l = new X(null, 2, 5, Z, [d.d ? d.d(l) : d.call(null, l), z(e[l])], null);
                                  h.add(l);
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? nc(h.I(), Pa(kb(a))) : nc(h.I(), null);
                          }
                          h = K(a);
                          return P(new X(null, 2, 5, Z, [d.d ? d.d(h) : d.call(null, h), z(e[h])], null), Pa(L(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(Pb(e));
            }()) : u ? e : null;
          };
        }(c, d, e, r(e) ? hc : x)(a);
      }
      return null;
    }
    a.k = 1;
    a.g = function(a) {
      var c = K(a);
      a = L(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, O(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.g = c.g;
  b.d = a;
  b.e = c.e;
  return b;
}();
var na = new U(null, "dup", "dup"), qb = new U(null, "default", "default"), ie = new U(null, "keywordize-keys", "keywordize-keys"), ke = new U(null, "points", "points"), ka = new U(null, "flush-on-newline", "flush-on-newline"), le = new U(null, "closed", "closed"), oa = new U(null, "print-length", "print-length"), u = new U(null, "else", "else"), la = new U(null, "readably", "readably"), ce = new U(null, "validator", "validator"), ma = new U(null, "meta", "meta"), me = new U(null, "redraw", "redraw"), 
ne = new U(null, "focal-length", "focal-length");
var oe = de.d(new p(null, 1, [le, "none"], null));
function pe(a, b) {
  return fe.j(oe, Mc, a, b);
}
var qe = de.d(vd);
ea("drawer.api.state.getInfo", function(a) {
  return Kc.a(Na(oe), je.d(a));
});
ea("drawer.api.state.changeInfo", function(a, b) {
  return pe(Cc.a(function(a) {
    return hc.d(a);
  }, a), b);
});
ea("drawer.api.state.getSelected", function() {
  return Na(oe).call(null, le);
});
ea("drawer.api.state.setSelected", function(a) {
  return pe(new X(null, 1, 5, Z, [le], null), a);
});
ea("drawer.api.state.addObject", function(a, b) {
  var c = je.d(b);
  return fe.j(qe, Fb, a, new p(null, 1, [ke, c], null));
});
ea("drawer.api.state.removeObject", function(a) {
  return fe.c(qe, Gb, a);
});
var re = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = O(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = function() {
      return function k(a) {
        return new W(null, function() {
          for (var b = a;;) {
            if (b = J(b)) {
              if (Ob(b)) {
                var c = jb(b), d = Q(c), e = new jc(Array(d), 0);
                a: {
                  for (var f = 0;;) {
                    if (f < d) {
                      var z = A.a(c, f), I = S.c(z, 0, null), z = S.c(z, 1, null);
                      yc.a(z, null) && (I = [x(" "), x(I), x("\x3d'"), x(z), x("'")].join(""), e.add(I));
                      f += 1;
                    } else {
                      c = !0;
                      break a;
                    }
                  }
                  c = void 0;
                }
                return c ? nc(e.I(), k(kb(b))) : nc(e.I(), null);
              }
              c = K(b);
              e = S.c(c, 0, null);
              c = S.c(c, 1, null);
              if (yc.a(c, null)) {
                return P([x(" "), x(e), x("\x3d'"), x(c), x("'")].join(""), k(L(b)));
              }
              b = L(b);
            } else {
              return null;
            }
          }
        }, null, null);
      }(Jc.a(2, e));
    }();
    return F.a(b, me) ? [x("\x3c"), x(a), x(T.a(x, f)), x("/\x3e")].join("") : [x("\x3c"), x(a), x(T.a(x, f)), x("\x3e"), x(b), x("\x3c/"), x(a), x("\x3e")].join("");
  }
  a.k = 2;
  a.g = function(a) {
    var d = K(a);
    a = N(a);
    var e = K(a);
    a = L(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}();
var se = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = O(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return T.j(re, a, b, e);
  }
  a.k = 2;
  a.g = function(a) {
    var d = K(a);
    a = N(a);
    var e = K(a);
    a = L(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}(), te = se("br", me), ue = function() {
  function a(a, b, c) {
    return se.e("input", me, O(["type", a, "name", b, "value", c], 0));
  }
  function b(a, b) {
    return se.e("input", me, O(["type", a, "name", b], 0));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), ve = [x("x1"), x(ue.a("text", "x1")), x("x2"), x(ue.a("text", "x2")), x("x3"), x(ue.c("text", "x3", 0)), x("x4"), x(ue.c("text", "x4", 0))].join(""), we = new X(null, 3, 5, Z, [se("h2", "Element hinzuf\u00fcgen"), se.e("div", [x("Objekt-Name"), x(ue.a("text", "obj-name")), x(te), x(te), x(ve)].join(""), O(["id", "prompt-object-decl"], 0)), se.e("a", "Hinzuf\u00fcgen", O("href # class button onclick drawer.api.gui.submitPrompt();".split(" "), 0))], null);
function xe(a) {
  return F.a(qa("object-list"), String) ? document.getElementById("object-list").innerHTML = a : "object-list".innerHTML = a;
}
function ye() {
  var a = document.getElementById("prompt");
  document.getElementById("prompt-overlay").style.display = "none";
  return a.innerHTML = "";
}
;ea("drawer.api.gui.displayPrompt", function() {
  var a = document.getElementById("prompt");
  document.getElementById("prompt-overlay").style.display = "block";
  return a.innerHTML = T.a(x, we);
});
ea("drawer.api.gui.closePrompt", function() {
  return ye();
});
ea("drawer.api.gui.submitPrompt", function() {
  return ye();
});
function ze(a) {
  var b = Sb(a) ? T.a(Pd, a) : a, c = Db.a(b, ke);
  return Ic.a(function(a, b, c) {
    return function(a) {
      return a / Q(c);
    };
  }(a, b, c), Ic.a(function() {
    return function(a) {
      return Vb.a(Xb, a);
    };
  }(a, b, c), T.c(Cc, gd, c)));
}
function Ae(a, b) {
  var c = ze(a);
  b.beginPath();
  b.arc(c.d ? c.d(0) : c.call(null, 0), c.d ? c.d(1) : c.call(null, 1), 2, 0, 2 * Math.PI);
  b.stroke();
  b.closePath();
}
function Be(a, b) {
  var c = Ic.a(function(a) {
    a = null == a ? null : Ka(a);
    return null == a ? null : Ka(a);
  }, a.d ? a.d(ke) : a.call(null, ke)), d = c.d ? c.d(0) : c.call(null, 0);
  b.beginPath();
  b.moveTo(d.d ? d.d(0) : d.call(null, 0), d.d ? d.d(1) : d.call(null, 1));
  for (var c = J(c), e = null, f = 0, h = 0;;) {
    if (h < f) {
      var k = e.C(null, h);
      b.lineTo(k.d ? k.d(0) : k.call(null, 0), k.d ? k.d(1) : k.call(null, 1));
      h += 1;
    } else {
      if (c = J(c)) {
        e = c, Ob(e) ? (c = jb(e), h = kb(e), e = c, f = Q(c), c = h) : (c = K(e), b.lineTo(c.d ? c.d(0) : c.call(null, 0), c.d ? c.d(1) : c.call(null, 1)), c = N(e), e = null, f = 0), h = 0;
      } else {
        break;
      }
    }
  }
  b.lineTo(d.d ? d.d(0) : d.call(null, 0), d.d ? d.d(1) : d.call(null, 1));
  b.stroke();
  b.closePath();
  Ae(a, b);
}
;function Ce() {
  var a = function() {
    return function c(a) {
      return new W(null, function() {
        for (;;) {
          var e = J(a);
          if (e) {
            if (Ob(e)) {
              var f = jb(e), h = Q(f), k = new jc(Array(h), 0);
              a: {
                for (var l = 0;;) {
                  if (l < h) {
                    var n = A.a(f, l), q = S.c(n, 0, null);
                    S.c(n, 1, null);
                    n = F.a(q, Na(oe).call(null, le));
                    q = [x("\x3cli\x3e"), x(re.e("a", q, O(["href", "#", "id", n ? "selected-obj" : null, "onclick", [x("drawer.api.state.setSelected(\x26#39;"), x(q), x("\x26#39;)")].join("")], 0))), x("\x3c/li\x3e")].join("");
                    k.add(q);
                    l += 1;
                  } else {
                    f = !0;
                    break a;
                  }
                }
                f = void 0;
              }
              return f ? nc(k.I(), c(kb(e))) : nc(k.I(), null);
            }
            f = K(e);
            k = S.c(f, 0, null);
            S.c(f, 1, null);
            f = F.a(k, Na(oe).call(null, le));
            return P([x("\x3cli\x3e"), x(re.e("a", k, O(["href", "#", "id", f ? "selected-obj" : null, "onclick", [x("drawer.api.state.setSelected(\x26#39;"), x(k), x("\x26#39;)")].join("")], 0))), x("\x3c/li\x3e")].join(""), c(L(e)));
          }
          return null;
        }
      }, null, null);
    }(Na(qe));
  }();
  return xe([x("\x3cul\x3e"), x(T.a(x, a)), x("\x3c/ul\x3e")].join(""));
}
;var De, Ee, Fe;
ea("drawer.init.initView", function() {
  var a = document.getElementById("canvas"), b = a.getContext("2d"), c = document.getElementById("controls");
  De = function(a, b, c) {
    return function() {
      var b = window.innerHeight;
      a.setAttribute("width", window.innerWidth - parseInt(c.offsetWidth) - 1);
      return a.setAttribute("height", b);
    };
  }(a, b, c);
  De();
  window.onresize = De;
  Ee = function(a, b) {
    return function() {
      b.save();
      b.setTransform(1, 0, 0, 1, 0, 0);
      b.clearRect(0, 0, a.width, a.height);
      return b.restore();
    };
  }(a, b, c);
  Fe = function(a, b) {
    return function() {
      Ee();
      for (var a = J(Na(qe)), c = null, d = 0, l = 0;;) {
        if (l < d) {
          var n = c.C(null, l), q = S.c(n, 0, null), n = S.c(n, 1, null);
          F.a(Na(oe).call(null, le), q) ? b.strokeStyle = "#f00" : b.strokeStyle = "#000";
          Be(n, b);
          l += 1;
        } else {
          if (a = J(a)) {
            Ob(a) ? (c = jb(a), a = kb(a), q = c, d = Q(c), c = q) : (c = K(a), q = S.c(c, 0, null), n = S.c(c, 1, null), F.a(Na(oe).call(null, le), q) ? b.strokeStyle = "#f00" : b.strokeStyle = "#000", Be(n, b), a = N(a), c = null, d = 0), l = 0;
          } else {
            return null;
          }
        }
      }
    };
  }(a, b, c);
  return window.setInterval(Fe, 1E3 / 60);
});
ea("drawer.init.initState", function() {
  cb(oe, ne, Ce);
  cb(qe, ne, Ce);
  fe.j(qe, Fb, "Linie", new p(null, 1, [ke, new X(null, 2, 5, Z, [new X(null, 4, 5, Z, [100, 100, 0, 0], null), new X(null, 4, 5, Z, [150, 300, 0, 0], null)], null)], null));
  return fe.j(qe, Fb, "Dreieck", new p(null, 1, [ke, new X(null, 3, 5, Z, [new X(null, 4, 5, Z, [300, 200, 0, 0], null), new X(null, 4, 5, Z, [400, 400, 0, 0], null), new X(null, 4, 5, Z, [200, 400, 0, 0], null)], null)], null));
});

})();
