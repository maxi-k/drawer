;(function(){
var h, aa = this;
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
ga.prototype.xa = "";
ga.prototype.append = function(a, b, c) {
  this.xa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.xa += arguments[d];
    }
  }
  return this;
};
ga.prototype.toString = function() {
  return this.xa;
};
var ha, ia = null;
function ja() {
  return new ka(null, 5, [la, !0, ma, !0, na, !1, oa, !1, pa, null], null);
}
function n(a) {
  return null != a && !1 !== a;
}
function qa(a) {
  return n(a) ? !1 : !0;
}
function s(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function sa(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = sa(b), c = n(n(c) ? c.na : c) ? c.ma : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ta(a) {
  var b = a.ma;
  return n(b) ? b : "" + v(a);
}
function x(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function ua(a) {
  return Array.prototype.slice.call(arguments);
}
var va = {}, wa = {};
function xa(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = xa[m(null == a ? null : a)];
  if (!b && (b = xa._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function ya(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = ya[m(null == a ? null : a)];
  if (!b && (b = ya._, !b)) {
    throw u("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var za = {};
function Aa(a, b) {
  if (a ? a.I : a) {
    return a.I(a, b);
  }
  var c;
  c = Aa[m(null == a ? null : a)];
  if (!c && (c = Aa._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ba = {}, y = function() {
  function a(a, b, c) {
    if (a ? a.aa : a) {
      return a.aa(a, b, c);
    }
    var g;
    g = y[m(null == a ? null : a)];
    if (!g && (g = y._, !g)) {
      throw u("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.K : a) {
      return a.K(a, b);
    }
    var c;
    c = y[m(null == a ? null : a)];
    if (!c && (c = y._, !c)) {
      throw u("IIndexed.-nth", a);
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
  c.d = a;
  return c;
}(), Ca = {};
function z(a) {
  if (a ? a.U : a) {
    return a.U(a);
  }
  var b;
  b = z[m(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.W : a) {
    return a.W(a);
  }
  var b;
  b = B[m(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Da = {}, C = function() {
  function a(a, b, c) {
    if (a ? a.Q : a) {
      return a.Q(a, b, c);
    }
    var g;
    g = C[m(null == a ? null : a)];
    if (!g && (g = C._, !g)) {
      throw u("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.P : a) {
      return a.P(a, b);
    }
    var c;
    c = C[m(null == a ? null : a)];
    if (!c && (c = C._, !c)) {
      throw u("ILookup.-lookup", a);
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
  c.d = a;
  return c;
}();
function Ea(a, b, c) {
  if (a ? a.ya : a) {
    return a.ya(a, b, c);
  }
  var d;
  d = Ea[m(null == a ? null : a)];
  if (!d && (d = Ea._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Fa = {}, Ga = {};
function Ha(a) {
  if (a ? a.pb : a) {
    return a.pb();
  }
  var b;
  b = Ha[m(null == a ? null : a)];
  if (!b && (b = Ha._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ia(a) {
  if (a ? a.qb : a) {
    return a.qb();
  }
  var b;
  b = Ia[m(null == a ? null : a)];
  if (!b && (b = Ia._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
function Ja(a) {
  if (a ? a.Ba : a) {
    return a.Ba(a);
  }
  var b;
  b = Ja[m(null == a ? null : a)];
  if (!b && (b = Ja._, !b)) {
    throw u("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Ka = {};
function Ma(a, b, c) {
  if (a ? a.gb : a) {
    return a.gb(a, b, c);
  }
  var d;
  d = Ma[m(null == a ? null : a)];
  if (!d && (d = Ma._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Na(a) {
  if (a ? a.Sa : a) {
    return a.Sa(a);
  }
  var b;
  b = Na[m(null == a ? null : a)];
  if (!b && (b = Na._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Oa = {};
function Pa(a) {
  if (a ? a.u : a) {
    return a.u(a);
  }
  var b;
  b = Pa[m(null == a ? null : a)];
  if (!b && (b = Pa._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Qa = {};
function Ra(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = Ra[m(null == a ? null : a)];
  if (!c && (c = Ra._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Sa = {}, Ta = function() {
  function a(a, b, c) {
    if (a ? a.T : a) {
      return a.T(a, b, c);
    }
    var g;
    g = Ta[m(null == a ? null : a)];
    if (!g && (g = Ta._, !g)) {
      throw u("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.S : a) {
      return a.S(a, b);
    }
    var c;
    c = Ta[m(null == a ? null : a)];
    if (!c && (c = Ta._, !c)) {
      throw u("IReduce.-reduce", a);
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
  c.d = a;
  return c;
}();
function Ua(a, b) {
  if (a ? a.B : a) {
    return a.B(a, b);
  }
  var c;
  c = Ua[m(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Wa(a) {
  if (a ? a.C : a) {
    return a.C(a);
  }
  var b;
  b = Wa[m(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Xa = {};
function Ya(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = Ya[m(null == a ? null : a)];
  if (!b && (b = Ya._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Za = {};
function D(a, b) {
  if (a ? a.tb : a) {
    return a.tb(0, b);
  }
  var c;
  c = D[m(null == a ? null : a)];
  if (!c && (c = D._, !c)) {
    throw u("IWriter.-write", a);
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
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function bb(a, b, c) {
  if (a ? a.sb : a) {
    return a.sb(0, b, c);
  }
  var d;
  d = bb[m(null == a ? null : a)];
  if (!d && (d = bb._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function cb(a) {
  if (a ? a.za : a) {
    return a.za(a);
  }
  var b;
  b = cb[m(null == a ? null : a)];
  if (!b && (b = cb._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function db(a, b) {
  if (a ? a.La : a) {
    return a.La(a, b);
  }
  var c;
  c = db[m(null == a ? null : a)];
  if (!c && (c = db._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function eb(a) {
  if (a ? a.Ma : a) {
    return a.Ma(a);
  }
  var b;
  b = eb[m(null == a ? null : a)];
  if (!b && (b = eb._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function fb(a, b, c) {
  if (a ? a.Ca : a) {
    return a.Ca(a, b, c);
  }
  var d;
  d = fb[m(null == a ? null : a)];
  if (!d && (d = fb._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function gb(a, b, c) {
  if (a ? a.rb : a) {
    return a.rb(0, b, c);
  }
  var d;
  d = gb[m(null == a ? null : a)];
  if (!d && (d = gb._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function hb(a) {
  if (a ? a.mb : a) {
    return a.mb();
  }
  var b;
  b = hb[m(null == a ? null : a)];
  if (!b && (b = hb._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function ib(a) {
  if (a ? a.Qa : a) {
    return a.Qa(a);
  }
  var b;
  b = ib[m(null == a ? null : a)];
  if (!b && (b = ib._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function jb(a) {
  if (a ? a.Ra : a) {
    return a.Ra(a);
  }
  var b;
  b = jb[m(null == a ? null : a)];
  if (!b && (b = jb._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function kb(a) {
  if (a ? a.Pa : a) {
    return a.Pa(a);
  }
  var b;
  b = kb[m(null == a ? null : a)];
  if (!b && (b = kb._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function lb(a) {
  this.Rb = a;
  this.o = 0;
  this.g = 1073741824;
}
lb.prototype.tb = function(a, b) {
  return this.Rb.append(b);
};
function mb(a) {
  var b = new ga;
  a.v(null, new lb(b), ja());
  return "" + v(b);
}
function nb(a, b) {
  if (n(E.a ? E.a(a, b) : E.call(null, a, b))) {
    return 0;
  }
  var c = qa(a.M);
  if (n(c ? b.M : c)) {
    return-1;
  }
  if (n(a.M)) {
    if (qa(b.M)) {
      return 1;
    }
    c = ob.a ? ob.a(a.M, b.M) : ob.call(null, a.M, b.M);
    return 0 === c ? ob.a ? ob.a(a.name, b.name) : ob.call(null, a.name, b.name) : c;
  }
  return pb ? ob.a ? ob.a(a.name, b.name) : ob.call(null, a.name, b.name) : null;
}
function F(a, b, c, d, e) {
  this.M = a;
  this.name = b;
  this.ka = c;
  this.la = d;
  this.ra = e;
  this.g = 2154168321;
  this.o = 4096;
}
h = F.prototype;
h.v = function(a, b) {
  return D(b, this.ka);
};
h.C = function() {
  var a = this.la;
  return null != a ? a : this.la = a = qb.a ? qb.a(G.b ? G.b(this.M) : G.call(null, this.M), G.b ? G.b(this.name) : G.call(null, this.name)) : qb.call(null, G.b ? G.b(this.M) : G.call(null, this.M), G.b ? G.b(this.name) : G.call(null, this.name));
};
h.w = function(a, b) {
  return new F(this.M, this.name, this.ka, this.la, b);
};
h.u = function() {
  return this.ra;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.d(c, this, null);
      case 3:
        return C.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.b = function(a) {
  return C.d(a, this, null);
};
h.a = function(a, b) {
  return C.d(a, this, b);
};
h.B = function(a, b) {
  return b instanceof F ? this.ka === b.ka : !1;
};
h.toString = function() {
  return this.ka;
};
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.ac)) {
    return a.G(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new rb(a, 0);
  }
  if (s(Xa, a)) {
    return Ya(a);
  }
  if (t) {
    throw Error([v(a), v("is not ISeqable")].join(""));
  }
  return null;
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.Aa)) {
    return a.U(null);
  }
  a = H(a);
  return null == a ? null : z(a);
}
function L(a) {
  return null != a ? a && (a.g & 64 || a.Aa) ? a.W(null) : (a = H(a)) ? B(a) : M : M;
}
function N(a) {
  return null == a ? null : a && (a.g & 128 || a.$b) ? a.ga(null) : H(L(a));
}
var E = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Ua(a, b);
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
            a = d, d = I(e), e = N(e);
          } else {
            return b.a(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
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
  b.l = 2;
  b.h = c.h;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
wa["null"] = !0;
xa["null"] = function() {
  return 0;
};
Date.prototype.B = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Ua.number = function(a, b) {
  return a === b;
};
Oa["function"] = !0;
Pa["function"] = function() {
  return null;
};
va["function"] = !0;
Wa._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
var sb = function() {
  function a(a, b, c, d) {
    for (var l = xa(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, y.a(a, d)) : b.call(null, c, y.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = xa(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, y.a(a, l)) : b.call(null, c, y.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = xa(a);
    if (0 === c) {
      return b.n ? b.n() : b.call(null);
    }
    for (var d = y.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, y.a(a, l)) : b.call(null, d, y.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.d = b;
  d.j = a;
  return d;
}(), tb = function() {
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
      return b.n ? b.n() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.d = b;
  d.j = a;
  return d;
}();
function ub(a) {
  return a ? a.g & 2 || a.Bb ? !0 : a.g ? !1 : s(wa, a) : s(wa, a);
}
function vb(a) {
  return a ? a.g & 16 || a.nb ? !0 : a.g ? !1 : s(Ba, a) : s(Ba, a);
}
function rb(a, b) {
  this.c = a;
  this.k = b;
  this.g = 166199550;
  this.o = 8192;
}
h = rb.prototype;
h.C = function() {
  return wb.b ? wb.b(this) : wb.call(null, this);
};
h.ga = function() {
  return this.k + 1 < this.c.length ? new rb(this.c, this.k + 1) : null;
};
h.I = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
h.toString = function() {
  return mb(this);
};
h.S = function(a, b) {
  return tb.j(this.c, b, this.c[this.k], this.k + 1);
};
h.T = function(a, b, c) {
  return tb.j(this.c, b, c, this.k);
};
h.G = function() {
  return this;
};
h.J = function() {
  return this.c.length - this.k;
};
h.U = function() {
  return this.c[this.k];
};
h.W = function() {
  return this.k + 1 < this.c.length ? new rb(this.c, this.k + 1) : M;
};
h.B = function(a, b) {
  return xb.a ? xb.a(this, b) : xb.call(null, this, b);
};
h.K = function(a, b) {
  var c = b + this.k;
  return c < this.c.length ? this.c[c] : null;
};
h.aa = function(a, b, c) {
  a = b + this.k;
  return a < this.c.length ? this.c[a] : c;
};
h.O = function() {
  return M;
};
var yb = function() {
  function a(a, b) {
    return b < a.length ? new rb(a, b) : null;
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
  c.b = b;
  c.a = a;
  return c;
}(), O = function() {
  function a(a, b) {
    return yb.a(a, b);
  }
  function b(a) {
    return yb.a(a, 0);
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
  c.b = b;
  c.a = a;
  return c;
}();
Ua._ = function(a, b) {
  return a === b;
};
var zb = function() {
  function a(a, b) {
    return null != a ? Aa(a, b) : Aa(M, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (n(e)) {
          a = b.a(a, d), d = I(e), e = N(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
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
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function Q(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.Bb)) {
      a = a.J(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(wa, a)) {
            a = xa(a);
          } else {
            if (t) {
              a: {
                a = H(a);
                for (var b = 0;;) {
                  if (ub(a)) {
                    a = b + xa(a);
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
var Ab = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return H(a) ? I(a) : c;
      }
      if (vb(a)) {
        return y.d(a, b, c);
      }
      if (H(a)) {
        a = N(a), b -= 1;
      } else {
        return t ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (H(a)) {
          return I(a);
        }
        throw Error("Index out of bounds");
      }
      if (vb(a)) {
        return y.a(a, b);
      }
      if (H(a)) {
        var c = N(a), g = b - 1;
        a = c;
        b = g;
      } else {
        if (t) {
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
  c.d = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.g & 16 || a.nb)) {
      return a.aa(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (s(Ba, a)) {
      return y.a(a, b);
    }
    if (a ? a.g & 64 || a.Aa || (a.g ? 0 : s(Ca, a)) : s(Ca, a)) {
      return Ab.d(a, b, c);
    }
    if (t) {
      throw Error([v("nth not supported on this type "), v(ta(sa(a)))].join(""));
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
    if (a && (a.g & 16 || a.nb)) {
      return a.K(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s(Ba, a)) {
      return y.a(a, b);
    }
    if (a ? a.g & 64 || a.Aa || (a.g ? 0 : s(Ca, a)) : s(Ca, a)) {
      return Ab.a(a, b);
    }
    if (t) {
      throw Error([v("nth not supported on this type "), v(ta(sa(a)))].join(""));
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
  c.d = a;
  return c;
}(), Bb = function() {
  function a(a, b, c) {
    return null != a ? a && (a.g & 256 || a.ob) ? a.Q(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(Da, a) ? C.d(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.g & 256 || a.ob) ? a.P(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(Da, a) ? C.a(a, b) : null;
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
  c.d = a;
  return c;
}(), Db = function() {
  function a(a, b, c) {
    return null != a ? Ea(a, b, c) : Cb.a ? Cb.a([b], [c]) : Cb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = O(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.d(a, d, e), n(l)) {
          d = I(l), e = I(N(l)), l = N(N(l));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var l = I(a);
      a = L(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.h = c.h;
  b.d = a;
  b.e = c.e;
  return b;
}();
function Eb(a) {
  var b = "function" == m(a);
  return b ? b : a ? n(n(null) ? null : a.Ab) ? !0 : a.Jb ? !1 : s(va, a) : s(va, a);
}
var Gb = function Fb(b, c) {
  return Eb(b) && !(b ? b.g & 262144 || b.dc || (b.g ? 0 : s(Qa, b)) : s(Qa, b)) ? Fb(function() {
    "undefined" === typeof ha && (ha = function(b, c, f, g) {
      this.i = b;
      this.Ga = c;
      this.Tb = f;
      this.Mb = g;
      this.o = 0;
      this.g = 393217;
    }, ha.na = !0, ha.ma = "cljs.core/t5036", ha.ta = function(b, c) {
      return D(c, "cljs.core/t5036");
    }, ha.prototype.call = function() {
      function b(d, g) {
        d = this;
        var k = null;
        1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return S.a ? S.a(b.Ga, d) : S.call(null, b.Ga, d);
      }
      b.l = 1;
      b.h = function(b) {
        var d = I(b);
        b = L(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(x(c)));
    }, ha.prototype.a = function() {
      function b(d) {
        var g = null;
        0 < arguments.length && (g = O(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, g);
      }
      function c(b) {
        return S.a ? S.a(self__.Ga, b) : S.call(null, self__.Ga, b);
      }
      b.l = 0;
      b.h = function(b) {
        b = H(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.Ab = !0, ha.prototype.u = function() {
      return this.Mb;
    }, ha.prototype.w = function(b, c) {
      return new ha(this.i, this.Ga, this.Tb, c);
    });
    return new ha(c, b, Fb, null);
  }(), c) : null == b ? null : Ra(b, c);
};
function Hb(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.Eb || (a.g ? 0 : s(Oa, a)) : s(Oa, a) : b) ? Pa(a) : null;
}
var Ib = {}, Jb = 0;
function G(a) {
  if (a && (a.g & 4194304 || a.Yb)) {
    a = a.C(null);
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
            255 < Jb && (Ib = {}, Jb = 0);
            var b = Ib[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Ib[a] = b;
              Jb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : t ? Wa(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Kb(a) {
  return a ? a.g & 16384 || a.cc ? !0 : a.g ? !1 : s(Ka, a) : s(Ka, a);
}
function Lb(a) {
  return a ? a.o & 512 || a.Ub ? !0 : !1 : !1;
}
function Mb(a) {
  var b = [];
  fa(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function Nb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Ob = {};
function Pb(a) {
  return null == a ? !1 : a ? a.g & 64 || a.Aa ? !0 : a.g ? !1 : s(Ca, a) : s(Ca, a);
}
function Qb(a) {
  return n(a) ? !0 : !1;
}
function ob(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (sa(a) === sa(b)) {
    return a && (a.o & 2048 || a.Ja) ? a.Ka(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Rb = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = ob(R.a(a, g), R.a(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = Q(a), g = Q(b);
    return f < g ? -1 : f > g ? 1 : t ? c.j(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.j = a;
  return c;
}(), Tb = function() {
  function a(a, b, c) {
    for (c = H(c);;) {
      if (c) {
        b = a.a ? a.a(b, I(c)) : a.call(null, b, I(c)), c = N(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = H(b);
    return c ? Sb.d ? Sb.d(a, I(c), N(c)) : Sb.call(null, a, I(c), N(c)) : a.n ? a.n() : a.call(null);
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
  c.d = a;
  return c;
}(), Sb = function() {
  function a(a, b, c) {
    return c && (c.g & 524288 || c.Gb) ? c.T(null, a, b) : c instanceof Array ? tb.d(c, a, b) : "string" === typeof c ? tb.d(c, a, b) : s(Sa, c) ? Ta.d(c, a, b) : t ? Tb.d(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.g & 524288 || b.Gb) ? b.S(null, a) : b instanceof Array ? tb.a(b, a) : "string" === typeof b ? tb.a(b, a) : s(Sa, b) ? Ta.a(b, a) : t ? Tb.a(a, b) : null;
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
  c.d = a;
  return c;
}(), Ub = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var k = null;
      2 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Sb.d(a, b + c, d);
    }
    b.l = 2;
    b.h = function(a) {
      var b = I(a);
      a = N(a);
      var c = I(a);
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
  a.l = 2;
  a.h = b.h;
  a.n = function() {
    return 0;
  };
  a.b = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a + b;
  };
  a.e = b.e;
  return a;
}();
function Vb(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function Wb(a) {
  return Vb((a - a % 2) / 2);
}
var Xb = function() {
  function a(a) {
    return a * c.n();
  }
  function b() {
    return Math.random.n ? Math.random.n() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = b;
  c.b = a;
  return c;
}();
function Yb(a) {
  return Vb(Xb.b(a));
}
function Zb(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var v = function() {
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
      for (var e = new ga(b.b(a)), l = d;;) {
        if (n(l)) {
          e = e.append(b.b(I(l))), l = N(l);
        } else {
          return e.toString();
        }
      }
    }
    a.l = 1;
    a.h = function(a) {
      var b = I(a);
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
  b.l = 1;
  b.h = c.h;
  b.n = function() {
    return "";
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
function xb(a, b) {
  return Qb((b ? b.g & 16777216 || b.bc || (b.g ? 0 : s(Za, b)) : s(Za, b)) ? function() {
    for (var c = H(a), d = H(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (E.a(I(c), I(d))) {
        c = N(c), d = N(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function qb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function wb(a) {
  if (H(a)) {
    var b = G(I(a));
    for (a = N(a);;) {
      if (null == a) {
        return b;
      }
      b = qb(b, G(I(a)));
      a = N(a);
    }
  } else {
    return 0;
  }
}
function $b(a) {
  var b = 0;
  for (a = H(a);;) {
    if (a) {
      var c = I(a), b = (b + (G(ac.b ? ac.b(c) : ac.call(null, c)) ^ G(bc.b ? bc.b(c) : bc.call(null, c)))) % 4503599627370496;
      a = N(a);
    } else {
      return b;
    }
  }
}
function cc(a, b, c, d, e) {
  this.i = a;
  this.Ea = b;
  this.ha = c;
  this.count = d;
  this.m = e;
  this.g = 65937646;
  this.o = 8192;
}
h = cc.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = wb(this);
};
h.ga = function() {
  return 1 === this.count ? null : this.ha;
};
h.I = function(a, b) {
  return new cc(this.i, b, this, this.count + 1, null);
};
h.toString = function() {
  return mb(this);
};
h.S = function(a, b) {
  return Tb.a(b, this);
};
h.T = function(a, b, c) {
  return Tb.d(b, c, this);
};
h.G = function() {
  return this;
};
h.J = function() {
  return this.count;
};
h.Ba = function() {
  return B(this);
};
h.U = function() {
  return this.Ea;
};
h.W = function() {
  return 1 === this.count ? M : this.ha;
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return new cc(b, this.Ea, this.ha, this.count, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return M;
};
function dc(a) {
  this.i = a;
  this.g = 65937614;
  this.o = 8192;
}
h = dc.prototype;
h.C = function() {
  return 0;
};
h.ga = function() {
  return null;
};
h.I = function(a, b) {
  return new cc(this.i, b, null, 1, null);
};
h.toString = function() {
  return mb(this);
};
h.S = function(a, b) {
  return Tb.a(b, this);
};
h.T = function(a, b, c) {
  return Tb.d(b, c, this);
};
h.G = function() {
  return null;
};
h.J = function() {
  return 0;
};
h.Ba = function() {
  throw Error("Can't pop empty list");
};
h.U = function() {
  return null;
};
h.W = function() {
  return M;
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return new dc(b);
};
h.u = function() {
  return this.i;
};
h.O = function() {
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
    if (a instanceof rb && 0 === a.k) {
      b = a.c;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.U(null)), a = a.ga(null);
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
        var f = a - 1, e = e.I(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function fc(a, b, c, d) {
  this.i = a;
  this.Ea = b;
  this.ha = c;
  this.m = d;
  this.g = 65929452;
  this.o = 8192;
}
h = fc.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = wb(this);
};
h.ga = function() {
  return null == this.ha ? null : H(this.ha);
};
h.I = function(a, b) {
  return new fc(null, b, this, this.m);
};
h.toString = function() {
  return mb(this);
};
h.S = function(a, b) {
  return Tb.a(b, this);
};
h.T = function(a, b, c) {
  return Tb.d(b, c, this);
};
h.G = function() {
  return this;
};
h.U = function() {
  return this.Ea;
};
h.W = function() {
  return null == this.ha ? M : this.ha;
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return new fc(b, this.Ea, this.ha, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Gb(M, this.i);
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Aa)) ? new fc(null, a, b, null) : new fc(null, a, H(b), null);
}
function T(a, b, c, d) {
  this.M = a;
  this.name = b;
  this.ja = c;
  this.la = d;
  this.g = 2153775105;
  this.o = 4096;
}
h = T.prototype;
h.v = function(a, b) {
  return D(b, [v(":"), v(this.ja)].join(""));
};
h.C = function() {
  null == this.la && (this.la = qb(G(this.M), G(this.name)) + 2654435769);
  return this.la;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Bb.a(c, this);
      case 3:
        return Bb.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.b = function(a) {
  return Bb.a(a, this);
};
h.a = function(a, b) {
  return Bb.d(a, this, b);
};
h.B = function(a, b) {
  return b instanceof T ? this.ja === b.ja : !1;
};
h.toString = function() {
  return[v(":"), v(this.ja)].join("");
};
function gc(a, b) {
  return a === b ? !0 : a instanceof T && b instanceof T ? a.ja === b.ja : !1;
}
var ic = function() {
  function a(a, b) {
    return new T(a, b, [v(n(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof T) {
      return a;
    }
    if (a instanceof F) {
      var b;
      if (a && (a.o & 4096 || a.Fb)) {
        b = a.M;
      } else {
        throw Error([v("Doesn't support namespace: "), v(a)].join(""));
      }
      return new T(b, hc.b ? hc.b(a) : hc.call(null, a), a.ka, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new T(b[0], b[1], a, null) : new T(null, b[0], a, null)) : null;
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
  c.b = b;
  c.a = a;
  return c;
}();
function U(a, b, c, d) {
  this.i = a;
  this.wa = b;
  this.r = c;
  this.m = d;
  this.o = 0;
  this.g = 32374988;
}
h = U.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = wb(this);
};
h.ga = function() {
  Ya(this);
  return null == this.r ? null : N(this.r);
};
h.I = function(a, b) {
  return P(b, this);
};
h.toString = function() {
  return mb(this);
};
function jc(a) {
  null != a.wa && (a.r = a.wa.n ? a.wa.n() : a.wa.call(null), a.wa = null);
  return a.r;
}
h.S = function(a, b) {
  return Tb.a(b, this);
};
h.T = function(a, b, c) {
  return Tb.d(b, c, this);
};
h.G = function() {
  jc(this);
  if (null == this.r) {
    return null;
  }
  for (var a = this.r;;) {
    if (a instanceof U) {
      a = jc(a);
    } else {
      return this.r = a, H(this.r);
    }
  }
};
h.U = function() {
  Ya(this);
  return null == this.r ? null : I(this.r);
};
h.W = function() {
  Ya(this);
  return null != this.r ? L(this.r) : M;
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return new U(b, this.wa, this.r, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Gb(M, this.i);
};
function kc(a, b) {
  this.H = a;
  this.end = b;
  this.o = 0;
  this.g = 2;
}
kc.prototype.J = function() {
  return this.end;
};
kc.prototype.add = function(a) {
  this.H[this.end] = a;
  return this.end += 1;
};
kc.prototype.N = function() {
  var a = new lc(this.H, 0, this.end);
  this.H = null;
  return a;
};
function lc(a, b, c) {
  this.c = a;
  this.s = b;
  this.end = c;
  this.o = 0;
  this.g = 524306;
}
h = lc.prototype;
h.S = function(a, b) {
  return tb.j(this.c, b, this.c[this.s], this.s + 1);
};
h.T = function(a, b, c) {
  return tb.j(this.c, b, c, this.s);
};
h.mb = function() {
  if (this.s === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new lc(this.c, this.s + 1, this.end);
};
h.K = function(a, b) {
  return this.c[this.s + b];
};
h.aa = function(a, b, c) {
  return 0 <= b && b < this.end - this.s ? this.c[this.s + b] : c;
};
h.J = function() {
  return this.end - this.s;
};
var mc = function() {
  function a(a, b, c) {
    return new lc(a, b, c);
  }
  function b(a, b) {
    return new lc(a, b, a.length);
  }
  function c(a) {
    return new lc(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.d = a;
  return d;
}();
function nc(a, b, c, d) {
  this.N = a;
  this.ea = b;
  this.i = c;
  this.m = d;
  this.g = 31850732;
  this.o = 1536;
}
h = nc.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = wb(this);
};
h.ga = function() {
  if (1 < xa(this.N)) {
    return new nc(hb(this.N), this.ea, this.i, null);
  }
  var a = Ya(this.ea);
  return null == a ? null : a;
};
h.I = function(a, b) {
  return P(b, this);
};
h.toString = function() {
  return mb(this);
};
h.G = function() {
  return this;
};
h.U = function() {
  return y.a(this.N, 0);
};
h.W = function() {
  return 1 < xa(this.N) ? new nc(hb(this.N), this.ea, this.i, null) : null == this.ea ? M : this.ea;
};
h.Pa = function() {
  return null == this.ea ? null : this.ea;
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return new nc(this.N, this.ea, b, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Gb(M, this.i);
};
h.Qa = function() {
  return this.N;
};
h.Ra = function() {
  return null == this.ea ? M : this.ea;
};
function oc(a, b) {
  return 0 === xa(a) ? b : new nc(a, b, null, null);
}
function pc(a) {
  for (var b = [];;) {
    if (H(a)) {
      b.push(I(a)), a = N(a);
    } else {
      return b;
    }
  }
}
function qc(a, b) {
  if (ub(a)) {
    return Q(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && H(c)) {
      c = N(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var sc = function rc(b) {
  return null == b ? null : null == N(b) ? H(I(b)) : t ? P(I(b), rc(N(b))) : null;
}, tc = function() {
  function a(a, b) {
    return new U(null, function() {
      var c = H(a);
      return c ? Lb(c) ? oc(ib(c), d.a(jb(c), b)) : P(I(c), d.a(L(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new U(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new U(null, function() {
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
      return function r(a, b) {
        return new U(null, function() {
          var c = H(a);
          return c ? Lb(c) ? oc(ib(c), r(jb(c), b)) : P(I(c), r(L(c), b)) : n(b) ? r(I(b), N(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.l = 2;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = L(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.e(d, g, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 2;
  d.h = e.h;
  d.n = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), uc = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)));
  }
  function b(a, b, c) {
    return P(a, P(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, q) {
      var r = null;
      4 < arguments.length && (r = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, r);
    }
    function b(a, c, d, e, f) {
      return P(a, P(c, P(d, P(e, sc(f)))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var q = I(a);
      a = L(a);
      return b(c, d, e, q, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return H(c);
      case 2:
        return P(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.e(c, f, g, k, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 4;
  c.h = d.h;
  c.b = function(a) {
    return H(a);
  };
  c.a = function(a, b) {
    return P(a, b);
  };
  c.d = b;
  c.j = a;
  c.e = d.e;
  return c;
}();
function vc(a) {
  return eb(a);
}
var wc = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var k = null;
      2 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = db(a, c), n(d)) {
          c = I(d), d = N(d);
        } else {
          return a;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var g = I(a);
      a = L(a);
      return b(c, g, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return db(a, d);
      default:
        return b.e(a, d, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.h = b.h;
  a.a = function(a, b) {
    return db(a, b);
  };
  a.e = b.e;
  return a;
}(), xc = function() {
  var a = null, b = function() {
    function a(c, f, g, k) {
      var l = null;
      3 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = fb(a, c, d), n(k)) {
          c = I(k), d = I(N(k)), k = N(N(k));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var g = I(a);
      a = N(a);
      var k = I(a);
      a = L(a);
      return b(c, g, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return fb(a, d, e);
      default:
        return b.e(a, d, e, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 3;
  a.h = b.h;
  a.d = function(a, b, e) {
    return fb(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function yc(a, b, c) {
  var d = H(c);
  if (0 === b) {
    return a.n ? a.n() : a.call(null);
  }
  c = z(d);
  var e = B(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = z(e), f = B(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = z(f), g = B(f);
  if (3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e);
  }
  var f = z(g), k = B(g);
  if (4 === b) {
    return a.j ? a.j(c, d, e, f) : a.j ? a.j(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = z(k), l = B(k);
  if (5 === b) {
    return a.F ? a.F(c, d, e, f, g) : a.F ? a.F(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = z(l), p = B(l);
  if (6 === b) {
    return a.fa ? a.fa(c, d, e, f, g, k) : a.fa ? a.fa(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = z(p), q = B(p);
  if (7 === b) {
    return a.sa ? a.sa(c, d, e, f, g, k, l) : a.sa ? a.sa(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var p = z(q), r = B(q);
  if (8 === b) {
    return a.eb ? a.eb(c, d, e, f, g, k, l, p) : a.eb ? a.eb(c, d, e, f, g, k, l, p) : a.call(null, c, d, e, f, g, k, l, p);
  }
  var q = z(r), w = B(r);
  if (9 === b) {
    return a.fb ? a.fb(c, d, e, f, g, k, l, p, q) : a.fb ? a.fb(c, d, e, f, g, k, l, p, q) : a.call(null, c, d, e, f, g, k, l, p, q);
  }
  var r = z(w), J = B(w);
  if (10 === b) {
    return a.Ta ? a.Ta(c, d, e, f, g, k, l, p, q, r) : a.Ta ? a.Ta(c, d, e, f, g, k, l, p, q, r) : a.call(null, c, d, e, f, g, k, l, p, q, r);
  }
  var w = z(J), A = B(J);
  if (11 === b) {
    return a.Ua ? a.Ua(c, d, e, f, g, k, l, p, q, r, w) : a.Ua ? a.Ua(c, d, e, f, g, k, l, p, q, r, w) : a.call(null, c, d, e, f, g, k, l, p, q, r, w);
  }
  var J = z(A), K = B(A);
  if (12 === b) {
    return a.Va ? a.Va(c, d, e, f, g, k, l, p, q, r, w, J) : a.Va ? a.Va(c, d, e, f, g, k, l, p, q, r, w, J) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, J);
  }
  var A = z(K), V = B(K);
  if (13 === b) {
    return a.Wa ? a.Wa(c, d, e, f, g, k, l, p, q, r, w, J, A) : a.Wa ? a.Wa(c, d, e, f, g, k, l, p, q, r, w, J, A) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, J, A);
  }
  var K = z(V), X = B(V);
  if (14 === b) {
    return a.Xa ? a.Xa(c, d, e, f, g, k, l, p, q, r, w, J, A, K) : a.Xa ? a.Xa(c, d, e, f, g, k, l, p, q, r, w, J, A, K) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, J, A, K);
  }
  var V = z(X), da = B(X);
  if (15 === b) {
    return a.Ya ? a.Ya(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V) : a.Ya ? a.Ya(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, J, A, K, V);
  }
  var X = z(da), ra = B(da);
  if (16 === b) {
    return a.Za ? a.Za(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X) : a.Za ? a.Za(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X);
  }
  var da = z(ra), La = B(ra);
  if (17 === b) {
    return a.$a ? a.$a(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da) : a.$a ? a.$a(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da);
  }
  var ra = z(La), Va = B(La);
  if (18 === b) {
    return a.ab ? a.ab(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da, ra) : a.ab ? a.ab(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da, ra) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da, ra);
  }
  La = z(Va);
  Va = B(Va);
  if (19 === b) {
    return a.bb ? a.bb(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da, ra, La) : a.bb ? a.bb(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da, ra, La) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da, ra, La);
  }
  var bd = z(Va);
  B(Va);
  if (20 === b) {
    return a.cb ? a.cb(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da, ra, La, bd) : a.cb ? a.cb(c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da, ra, La, bd) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, J, A, K, V, X, da, ra, La, bd);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, e) {
    b = uc.j(b, c, d, e);
    c = a.l;
    return a.h ? (d = qc(b, c + 1), d <= c ? yc(a, d, b) : a.h(b)) : a.apply(a, pc(b));
  }
  function b(a, b, c, d) {
    b = uc.d(b, c, d);
    c = a.l;
    return a.h ? (d = qc(b, c + 1), d <= c ? yc(a, d, b) : a.h(b)) : a.apply(a, pc(b));
  }
  function c(a, b, c) {
    b = uc.a(b, c);
    c = a.l;
    if (a.h) {
      var d = qc(b, c + 1);
      return d <= c ? yc(a, d, b) : a.h(b);
    }
    return a.apply(a, pc(b));
  }
  function d(a, b) {
    var c = a.l;
    if (a.h) {
      var d = qc(b, c + 1);
      return d <= c ? yc(a, d, b) : a.h(b);
    }
    return a.apply(a, pc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, J) {
      var A = null;
      5 < arguments.length && (A = O(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, A);
    }
    function b(a, c, d, e, f, g) {
      c = P(c, P(d, P(e, P(f, sc(g)))));
      d = a.l;
      return a.h ? (e = qc(c, d + 1), e <= d ? yc(a, e, c) : a.h(c)) : a.apply(a, pc(c));
    }
    a.l = 5;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = N(a);
      var g = I(a);
      a = L(a);
      return b(c, d, e, f, g, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, p, q, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, q);
      default:
        return f.e(e, k, l, p, q, O(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 5;
  e.h = f.h;
  e.a = d;
  e.d = c;
  e.j = b;
  e.F = a;
  e.e = f.e;
  return e;
}(), zc = function() {
  function a(a, b) {
    return!E.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return qa(S.j(E, a, c, d));
    }
    a.l = 2;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
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
  b.l = 2;
  b.h = c.h;
  b.b = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Ac(a, b) {
  for (;;) {
    if (null == H(b)) {
      return!0;
    }
    if (n(a.b ? a.b(I(b)) : a.call(null, I(b)))) {
      var c = a, d = N(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function Bc(a) {
  return a;
}
var Cc = function() {
  function a(a, b, c, e) {
    return new U(null, function() {
      var p = H(b), q = H(c), r = H(e);
      return p && q && r ? P(a.d ? a.d(I(p), I(q), I(r)) : a.call(null, I(p), I(q), I(r)), d.j(a, L(p), L(q), L(r))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new U(null, function() {
      var e = H(b), p = H(c);
      return e && p ? P(a.a ? a.a(I(e), I(p)) : a.call(null, I(e), I(p)), d.d(a, L(e), L(p))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new U(null, function() {
      var c = H(b);
      if (c) {
        if (Lb(c)) {
          for (var e = ib(c), p = Q(e), q = new kc(Array(p), 0), r = 0;;) {
            if (r < p) {
              var w = a.b ? a.b(y.a(e, r)) : a.call(null, y.a(e, r));
              q.add(w);
              r += 1;
            } else {
              break;
            }
          }
          return oc(q.N(), d.a(a, jb(c)));
        }
        return P(a.b ? a.b(I(c)) : a.call(null, I(c)), d.a(a, L(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var w = null;
      4 < arguments.length && (w = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, e, f, g) {
      var w = function A(a) {
        return new U(null, function() {
          var b = d.a(H, a);
          return Ac(Bc, b) ? P(d.a(I, b), A(d.a(L, b))) : null;
        }, null, null);
      };
      return d.a(function() {
        return function(b) {
          return S.a(a, b);
        };
      }(w), w(zb.e(g, f, O([e, c], 0))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = L(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.e(d, g, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.a = c;
  d.d = b;
  d.j = a;
  d.e = e.e;
  return d;
}(), Ec = function Dc(b, c) {
  return new U(null, function() {
    if (0 < b) {
      var d = H(c);
      return d ? P(I(d), Dc(b - 1, L(d))) : null;
    }
    return null;
  }, null, null);
};
function Fc(a, b) {
  return new U(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = H(b);
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
  return null != a ? a && (a.o & 4 || a.Wb) ? vc(Sb.d(db, cb(a), b)) : Sb.d(Aa, a, b) : Sb.d(zb, M, b);
}
var Ic = function() {
  function a(a, b, c, d) {
    return Gc(Hc, Cc.j(a, b, c, d));
  }
  function b(a, b, c) {
    return Gc(Hc, Cc.d(a, b, c));
  }
  function c(a, b) {
    return vc(Sb.d(function(b, c) {
      return wc.a(b, a.b ? a.b(c) : a.call(null, c));
    }, cb(Hc), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var w = null;
      4 < arguments.length && (w = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return Gc(Hc, S.e(Cc, a, c, d, e, O([f], 0)));
    }
    a.l = 4;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = L(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.e(d, g, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.a = c;
  d.d = b;
  d.j = a;
  d.e = e.e;
  return d;
}(), Jc = function() {
  function a(a, b, c, k) {
    return new U(null, function() {
      var l = H(k);
      if (l) {
        var p = Ec(a, l);
        return a === Q(p) ? P(p, d.j(a, b, c, Fc(b, l))) : Aa(M, Ec(a, tc.a(p, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new U(null, function() {
      var k = H(c);
      if (k) {
        var l = Ec(a, k);
        return a === Q(l) ? P(l, d.d(a, b, Fc(b, k))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.d(a, a, b);
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.d = b;
  d.j = a;
  return d;
}(), Kc = function() {
  function a(a, b, c) {
    var g = Ob;
    for (b = H(b);;) {
      if (b) {
        var k = a;
        if (k ? k.g & 256 || k.ob || (k.g ? 0 : s(Da, k)) : s(Da, k)) {
          a = Bb.d(a, I(b), g);
          if (g === a) {
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
    return c.d(a, b, null);
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
  c.d = a;
  return c;
}(), Mc = function Lc(b, c, d) {
  var e = R.d(c, 0, null), f;
  a: {
    f = 1;
    for (c = H(c);;) {
      if (c && 0 < f) {
        f -= 1, c = N(c);
      } else {
        f = c;
        break a;
      }
    }
    f = void 0;
  }
  return f ? Db.d(b, e, Lc(Bb.a(b, e), f, d)) : Db.d(b, e, d);
};
function Nc(a, b) {
  this.q = a;
  this.c = b;
}
function Oc(a) {
  return new Nc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Pc(a) {
  return new Nc(a.q, x(a.c));
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
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Tc = function Sc(b, c, d, e) {
  var f = Pc(d), g = b.f - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? Sc(b, c - 5, d, e) : Rc(null, c - 5, e), f.c[g] = b);
  return f;
};
function Uc(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function Vc(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.c[0];
    } else {
      return b.c;
    }
  }
}
function Wc(a, b) {
  if (b >= Qc(a)) {
    return a.p;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function Xc(a, b) {
  return 0 <= b && b < a.f ? Wc(a, b) : Uc(b, a.f);
}
var Zc = function Yc(b, c, d, e, f) {
  var g = Pc(d);
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Yc(b, c - 5, d.c[k], e, f);
    g.c[k] = b;
  }
  return g;
}, ad = function $c(b, c, d) {
  var e = b.f - 2 >>> c & 31;
  if (5 < c) {
    b = $c(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Pc(d);
    d.c[e] = b;
    return d;
  }
  return 0 === e ? null : t ? (d = Pc(d), d.c[e] = null, d) : null;
};
function W(a, b, c, d, e, f) {
  this.i = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.p = e;
  this.m = f;
  this.o = 8196;
  this.g = 167668511;
}
h = W.prototype;
h.za = function() {
  return new cd(this.f, this.shift, dd.b ? dd.b(this.root) : dd.call(null, this.root), ed.b ? ed.b(this.p) : ed.call(null, this.p));
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = wb(this);
};
h.P = function(a, b) {
  return C.d(this, b, null);
};
h.Q = function(a, b, c) {
  return "number" === typeof b ? y.d(this, b, c) : c;
};
h.ya = function(a, b, c) {
  if ("number" === typeof b) {
    return Ma(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.aa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.aa(null, a, b);
};
h.I = function(a, b) {
  if (32 > this.f - Qc(this)) {
    for (var c = this.p.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.p[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new W(this.i, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Oc(null), d.c[0] = this.root, e = Rc(null, this.shift, new Nc(null, this.p)), d.c[1] = e) : d = Tc(this, this.shift, this.root, new Nc(null, this.p));
  return new W(this.i, this.f + 1, c, d, [b], null);
};
h.pb = function() {
  return y.a(this, 0);
};
h.qb = function() {
  return y.a(this, 1);
};
h.toString = function() {
  return mb(this);
};
h.S = function(a, b) {
  return sb.a(this, b);
};
h.T = function(a, b, c) {
  return sb.d(this, b, c);
};
h.G = function() {
  return 0 === this.f ? null : 32 >= this.f ? new rb(this.p, 0) : t ? Y.j ? Y.j(this, Vc(this), 0, 0) : Y.call(null, this, Vc(this), 0, 0) : null;
};
h.J = function() {
  return this.f;
};
h.Ba = function() {
  if (0 === this.f) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.f) {
    return Ra(Hc, this.i);
  }
  if (1 < this.f - Qc(this)) {
    return new W(this.i, this.f - 1, this.shift, this.root, this.p.slice(0, -1), null);
  }
  if (t) {
    var a = Wc(this, this.f - 2), b = ad(this, this.shift, this.root), b = null == b ? Z : b, c = this.f - 1;
    return 5 < this.shift && null == b.c[1] ? new W(this.i, c, this.shift - 5, b.c[0], a, null) : new W(this.i, c, this.shift, b, a, null);
  }
  return null;
};
h.gb = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return Qc(this) <= b ? (a = x(this.p), a[b & 31] = c, new W(this.i, this.f, this.shift, this.root, a, null)) : new W(this.i, this.f, this.shift, Zc(this, this.shift, this.root, b, c), this.p, null);
  }
  if (b === this.f) {
    return Aa(this, c);
  }
  if (t) {
    throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.f), v("]")].join(""));
  }
  return null;
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return new W(b, this.f, this.shift, this.root, this.p, this.m);
};
h.u = function() {
  return this.i;
};
h.K = function(a, b) {
  return Xc(this, b)[b & 31];
};
h.aa = function(a, b, c) {
  return 0 <= b && b < this.f ? Wc(this, b)[b & 31] : c;
};
h.O = function() {
  return Gb(Hc, this.i);
};
var Z = new Nc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Hc = new W(null, 0, 5, Z, [], 0);
function fd(a, b) {
  var c = a.length, d = b ? a : x(a);
  if (32 > c) {
    return new W(null, c, 5, Z, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, g = (new W(null, 32, 5, Z, e, null)).za(null);;) {
    if (f < c) {
      e = f + 1, g = wc.a(g, d[f]), f = e;
    } else {
      return eb(g);
    }
  }
}
function gd(a) {
  return eb(Sb.d(db, cb(Hc), a));
}
var hd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof rb && 0 === a.k ? fd.a ? fd.a(a.c, !0) : fd.call(null, a.c, !0) : gd(a);
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function id(a, b, c, d, e, f) {
  this.t = a;
  this.Z = b;
  this.k = c;
  this.s = d;
  this.i = e;
  this.m = f;
  this.g = 32243948;
  this.o = 1536;
}
h = id.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = wb(this);
};
h.ga = function() {
  if (this.s + 1 < this.Z.length) {
    var a = Y.j ? Y.j(this.t, this.Z, this.k, this.s + 1) : Y.call(null, this.t, this.Z, this.k, this.s + 1);
    return null == a ? null : a;
  }
  return kb(this);
};
h.I = function(a, b) {
  return P(b, this);
};
h.toString = function() {
  return mb(this);
};
h.S = function(a, b) {
  return sb.a(jd.d ? jd.d(this.t, this.k + this.s, Q(this.t)) : jd.call(null, this.t, this.k + this.s, Q(this.t)), b);
};
h.T = function(a, b, c) {
  return sb.d(jd.d ? jd.d(this.t, this.k + this.s, Q(this.t)) : jd.call(null, this.t, this.k + this.s, Q(this.t)), b, c);
};
h.G = function() {
  return this;
};
h.U = function() {
  return this.Z[this.s];
};
h.W = function() {
  if (this.s + 1 < this.Z.length) {
    var a = Y.j ? Y.j(this.t, this.Z, this.k, this.s + 1) : Y.call(null, this.t, this.Z, this.k, this.s + 1);
    return null == a ? M : a;
  }
  return jb(this);
};
h.Pa = function() {
  var a = this.k + this.Z.length;
  return a < xa(this.t) ? Y.j ? Y.j(this.t, Wc(this.t, a), a, 0) : Y.call(null, this.t, Wc(this.t, a), a, 0) : null;
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return Y.F ? Y.F(this.t, this.Z, this.k, this.s, b) : Y.call(null, this.t, this.Z, this.k, this.s, b);
};
h.O = function() {
  return Gb(Hc, this.i);
};
h.Qa = function() {
  return mc.a(this.Z, this.s);
};
h.Ra = function() {
  var a = this.k + this.Z.length;
  return a < xa(this.t) ? Y.j ? Y.j(this.t, Wc(this.t, a), a, 0) : Y.call(null, this.t, Wc(this.t, a), a, 0) : M;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new id(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new id(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new id(a, Xc(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.j = b;
  d.F = a;
  return d;
}();
function kd(a, b, c, d, e) {
  this.i = a;
  this.$ = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.g = 166617887;
  this.o = 8192;
}
h = kd.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = wb(this);
};
h.P = function(a, b) {
  return C.d(this, b, null);
};
h.Q = function(a, b, c) {
  return "number" === typeof b ? y.d(this, b, c) : c;
};
h.ya = function(a, b, c) {
  if ("number" === typeof b) {
    return Ma(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.aa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.b = function(a) {
  return this.K(null, a);
};
h.a = function(a, b) {
  return this.aa(null, a, b);
};
h.I = function(a, b) {
  return ld.F ? ld.F(this.i, Ma(this.$, this.end, b), this.start, this.end + 1, null) : ld.call(null, this.i, Ma(this.$, this.end, b), this.start, this.end + 1, null);
};
h.toString = function() {
  return mb(this);
};
h.S = function(a, b) {
  return sb.a(this, b);
};
h.T = function(a, b, c) {
  return sb.d(this, b, c);
};
h.G = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : P(y.a(a.$, e), new U(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.J = function() {
  return this.end - this.start;
};
h.Ba = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return ld.F ? ld.F(this.i, this.$, this.start, this.end - 1, null) : ld.call(null, this.i, this.$, this.start, this.end - 1, null);
};
h.gb = function(a, b, c) {
  var d = this, e = d.start + b;
  return ld.F ? ld.F(d.i, Db.d(d.$, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : ld.call(null, d.i, Db.d(d.$, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return ld.F ? ld.F(b, this.$, this.start, this.end, this.m) : ld.call(null, b, this.$, this.start, this.end, this.m);
};
h.u = function() {
  return this.i;
};
h.K = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Uc(b, this.end - this.start) : y.a(this.$, this.start + b);
};
h.aa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.d(this.$, this.start + b, c);
};
h.O = function() {
  return Gb(Hc, this.i);
};
function ld(a, b, c, d, e) {
  for (;;) {
    if (b instanceof kd) {
      c = b.start + c, d = b.start + d, b = b.$;
    } else {
      var f = Q(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new kd(a, b, c, d, e);
    }
  }
}
var jd = function() {
  function a(a, b, c) {
    return ld(null, a, b, c, null);
  }
  function b(a, b) {
    return c.d(a, b, Q(a));
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
  c.d = a;
  return c;
}();
function dd(a) {
  return new Nc({}, x(a.c));
}
function ed(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Nb(a, 0, b, 0, a.length);
  return b;
}
var nd = function md(b, c, d, e) {
  d = b.root.q === d.q ? d : new Nc(b.root.q, x(d.c));
  var f = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? md(b, c - 5, g, e) : Rc(b.root.q, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function cd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.p = d;
  this.g = 275;
  this.o = 88;
}
h = cd.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.b = function(a) {
  return this.P(null, a);
};
h.a = function(a, b) {
  return this.Q(null, a, b);
};
h.P = function(a, b) {
  return C.d(this, b, null);
};
h.Q = function(a, b, c) {
  return "number" === typeof b ? y.d(this, b, c) : c;
};
h.K = function(a, b) {
  if (this.root.q) {
    return Xc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.aa = function(a, b, c) {
  return 0 <= b && b < this.f ? y.a(this, b) : c;
};
h.J = function() {
  if (this.root.q) {
    return this.f;
  }
  throw Error("count after persistent!");
};
h.rb = function(a, b, c) {
  var d = this;
  if (d.root.q) {
    if (0 <= b && b < d.f) {
      return Qc(this) <= b ? d.p[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = d.root.q === k.q ? k : new Nc(d.root.q, x(k.c));
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var p = b >>> a & 31, q = f(a - 5, l.c[p]);
            l.c[p] = q;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return db(this, c);
    }
    if (t) {
      throw Error([v("Index "), v(b), v(" out of bounds for TransientVector of length"), v(d.f)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
h.Ca = function(a, b, c) {
  if ("number" === typeof b) {
    return gb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.La = function(a, b) {
  if (this.root.q) {
    if (32 > this.f - Qc(this)) {
      this.p[this.f & 31] = b;
    } else {
      var c = new Nc(this.root.q, this.p), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.p = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Rc(this.root.q, this.shift, c);
        this.root = new Nc(this.root.q, d);
        this.shift = e;
      } else {
        this.root = nd(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Ma = function() {
  if (this.root.q) {
    this.root.q = null;
    var a = this.f - Qc(this), b = Array(a);
    Nb(this.p, 0, b, 0, a);
    return new W(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function od() {
  this.o = 0;
  this.g = 2097152;
}
od.prototype.B = function() {
  return!1;
};
var pd = new od;
function qd(a, b) {
  return Qb((null == b ? 0 : b ? b.g & 1024 || b.Zb || (b.g ? 0 : s(Fa, b)) : s(Fa, b)) ? Q(a) === Q(b) ? Ac(Bc, Cc.a(function(a) {
    return E.a(Bb.d(b, I(a), pd), I(N(a)));
  }, a)) : null : null);
}
function rd(a, b) {
  var c = a.c;
  if (b instanceof T) {
    a: {
      for (var d = c.length, e = b.ja, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof T && e === g.ja) {
          c = f;
          break a;
        }
        if (t) {
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
          if (t) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof F) {
        a: {
          d = c.length;
          e = b.ka;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof F && e === g.ka) {
              c = f;
              break a;
            }
            if (t) {
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
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (t) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (E.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (t) {
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
function sd(a, b, c) {
  this.c = a;
  this.k = b;
  this.ra = c;
  this.o = 0;
  this.g = 32374990;
}
h = sd.prototype;
h.C = function() {
  return wb(this);
};
h.ga = function() {
  return this.k < this.c.length - 2 ? new sd(this.c, this.k + 2, this.ra) : null;
};
h.I = function(a, b) {
  return P(b, this);
};
h.toString = function() {
  return mb(this);
};
h.S = function(a, b) {
  return Tb.a(b, this);
};
h.T = function(a, b, c) {
  return Tb.d(b, c, this);
};
h.G = function() {
  return this;
};
h.J = function() {
  return(this.c.length - this.k) / 2;
};
h.U = function() {
  return new W(null, 2, 5, Z, [this.c[this.k], this.c[this.k + 1]], null);
};
h.W = function() {
  return this.k < this.c.length - 2 ? new sd(this.c, this.k + 2, this.ra) : M;
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return new sd(this.c, this.k, b);
};
h.u = function() {
  return this.ra;
};
h.O = function() {
  return Gb(M, this.ra);
};
function ka(a, b, c, d) {
  this.i = a;
  this.f = b;
  this.c = c;
  this.m = d;
  this.o = 8196;
  this.g = 16123663;
}
h = ka.prototype;
h.za = function() {
  return new td({}, this.c.length, x(this.c));
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = $b(this);
};
h.P = function(a, b) {
  return C.d(this, b, null);
};
h.Q = function(a, b, c) {
  a = rd(this, b);
  return-1 === a ? c : this.c[a + 1];
};
h.ya = function(a, b, c) {
  a = rd(this, b);
  if (-1 === a) {
    if (this.f < ud) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new ka(this.i, this.f + 1, e, null);
    }
    return Ra(Ea(Gc(vd, this), b, c), this.i);
  }
  return c === this.c[a + 1] ? this : t ? (b = x(this.c), b[a + 1] = c, new ka(this.i, this.f, b, null)) : null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.b = function(a) {
  return this.P(null, a);
};
h.a = function(a, b) {
  return this.Q(null, a, b);
};
h.I = function(a, b) {
  return Kb(b) ? Ea(this, y.a(b, 0), y.a(b, 1)) : Sb.d(Aa, this, b);
};
h.toString = function() {
  return mb(this);
};
h.G = function() {
  return 0 <= this.c.length - 2 ? new sd(this.c, 0, null) : null;
};
h.J = function() {
  return this.f;
};
h.B = function(a, b) {
  return qd(this, b);
};
h.w = function(a, b) {
  return new ka(b, this.f, this.c, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Ra(wd, this.i);
};
var wd = new ka(null, 0, [], null), ud = 8;
function td(a, b, c) {
  this.ua = a;
  this.qa = b;
  this.c = c;
  this.o = 56;
  this.g = 258;
}
h = td.prototype;
h.Ca = function(a, b, c) {
  if (n(this.ua)) {
    a = rd(this, b);
    if (-1 === a) {
      return this.qa + 2 <= 2 * ud ? (this.qa += 2, this.c.push(b), this.c.push(c), this) : xc.d(xd.a ? xd.a(this.qa, this.c) : xd.call(null, this.qa, this.c), b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.La = function(a, b) {
  if (n(this.ua)) {
    if (b ? b.g & 2048 || b.Db || (b.g ? 0 : s(Ga, b)) : s(Ga, b)) {
      return fb(this, ac.b ? ac.b(b) : ac.call(null, b), bc.b ? bc.b(b) : bc.call(null, b));
    }
    for (var c = H(b), d = this;;) {
      var e = I(c);
      if (n(e)) {
        c = N(c), d = fb(d, ac.b ? ac.b(e) : ac.call(null, e), bc.b ? bc.b(e) : bc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Ma = function() {
  if (n(this.ua)) {
    return this.ua = !1, new ka(null, Wb(this.qa), this.c, null);
  }
  throw Error("persistent! called twice");
};
h.P = function(a, b) {
  return C.d(this, b, null);
};
h.Q = function(a, b, c) {
  if (n(this.ua)) {
    return a = rd(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.J = function() {
  if (n(this.ua)) {
    return Wb(this.qa);
  }
  throw Error("count after persistent!");
};
function xd(a, b) {
  for (var c = cb(vd), d = 0;;) {
    if (d < a) {
      c = xc.d(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function yd() {
  this.D = !1;
}
function zd(a, b) {
  return a === b ? !0 : gc(a, b) ? !0 : t ? E.a(a, b) : null;
}
var Ad = function() {
  function a(a, b, c, g, k) {
    a = x(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function b(a, b, c) {
    a = x(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.F = a;
  return c;
}(), Bd = function() {
  function a(a, b, c, g, k, l) {
    a = a.va(b);
    a.c[c] = g;
    a.c[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.va(b);
    a.c[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.fa = a;
  return c;
}();
function Cd(a, b, c) {
  this.q = a;
  this.A = b;
  this.c = c;
}
h = Cd.prototype;
h.ca = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = Zb(this.A & g - 1);
  if (0 === (this.A & g)) {
    var l = Zb(this.A);
    if (2 * l < this.c.length) {
      a = this.va(a);
      b = a.c;
      f.D = !0;
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
      a.A |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Dd.ca(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.A >>> d & 1) && (k[d] = null != this.c[e] ? Dd.ca(a, b + 5, G(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Ed(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), Nb(this.c, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Nb(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.D = !0, a = this.va(a), a.c = b, a.A |= g, a) : null;
  }
  l = this.c[2 * k];
  g = this.c[2 * k + 1];
  return null == l ? (l = g.ca(a, b + 5, c, d, e, f), l === g ? this : Bd.j(this, a, 2 * k + 1, l)) : zd(d, l) ? e === g ? this : Bd.j(this, a, 2 * k + 1, e) : t ? (f.D = !0, Bd.fa(this, a, 2 * k, null, 2 * k + 1, Fd.sa ? Fd.sa(a, b + 5, l, g, c, d, e) : Fd.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.Fa = function() {
  return Gd.b ? Gd.b(this.c) : Gd.call(null, this.c);
};
h.va = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = Zb(this.A), c = Array(0 > b ? 4 : 2 * (b + 1));
  Nb(this.c, 0, c, 0, 2 * b);
  return new Cd(a, this.A, c);
};
h.ba = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Zb(this.A & f - 1);
  if (0 === (this.A & f)) {
    var k = Zb(this.A);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Dd.ba(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.A >>> c & 1) && (g[c] = null != this.c[d] ? Dd.ba(a + 5, G(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Ed(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Nb(this.c, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Nb(this.c, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.D = !0;
    return new Cd(null, this.A | f, a);
  }
  k = this.c[2 * g];
  f = this.c[2 * g + 1];
  return null == k ? (k = f.ba(a + 5, b, c, d, e), k === f ? this : new Cd(null, this.A, Ad.d(this.c, 2 * g + 1, k))) : zd(c, k) ? d === f ? this : new Cd(null, this.A, Ad.d(this.c, 2 * g + 1, d)) : t ? (e.D = !0, new Cd(null, this.A, Ad.F(this.c, 2 * g, null, 2 * g + 1, Fd.fa ? Fd.fa(a + 5, k, f, b, c, d) : Fd.call(null, a + 5, k, f, b, c, d)))) : null;
};
h.pa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.A & e)) {
    return d;
  }
  var f = Zb(this.A & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.pa(a + 5, b, c, d) : zd(c, e) ? f : t ? d : null;
};
var Dd = new Cd(null, 0, []);
function Ed(a, b, c) {
  this.q = a;
  this.f = b;
  this.c = c;
}
h = Ed.prototype;
h.ca = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.c[g];
  if (null == k) {
    return a = Bd.j(this, a, g, Dd.ca(a, b + 5, c, d, e, f)), a.f += 1, a;
  }
  b = k.ca(a, b + 5, c, d, e, f);
  return b === k ? this : Bd.j(this, a, g, b);
};
h.Fa = function() {
  return Hd.b ? Hd.b(this.c) : Hd.call(null, this.c);
};
h.va = function(a) {
  return a === this.q ? this : new Ed(a, this.f, x(this.c));
};
h.ba = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new Ed(null, this.f + 1, Ad.d(this.c, f, Dd.ba(a + 5, b, c, d, e)));
  }
  a = g.ba(a + 5, b, c, d, e);
  return a === g ? this : new Ed(null, this.f, Ad.d(this.c, f, a));
};
h.pa = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.pa(a + 5, b, c, d) : d;
};
function Id(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (zd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Jd(a, b, c, d) {
  this.q = a;
  this.ia = b;
  this.f = c;
  this.c = d;
}
h = Jd.prototype;
h.ca = function(a, b, c, d, e, f) {
  if (c === this.ia) {
    b = Id(this.c, this.f, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.f) {
        return a = Bd.fa(this, a, 2 * this.f, d, 2 * this.f + 1, e), f.D = !0, a.f += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Nb(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.D = !0;
      f = this.f + 1;
      a === this.q ? (this.c = b, this.f = f, a = this) : a = new Jd(this.q, this.ia, f, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Bd.j(this, a, b + 1, e);
  }
  return(new Cd(a, 1 << (this.ia >>> b & 31), [null, this, null, null])).ca(a, b, c, d, e, f);
};
h.Fa = function() {
  return Gd.b ? Gd.b(this.c) : Gd.call(null, this.c);
};
h.va = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  Nb(this.c, 0, b, 0, 2 * this.f);
  return new Jd(a, this.ia, this.f, b);
};
h.ba = function(a, b, c, d, e) {
  return b === this.ia ? (a = Id(this.c, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), Nb(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.D = !0, new Jd(null, this.ia, this.f + 1, b)) : E.a(this.c[a], d) ? this : new Jd(null, this.ia, this.f, Ad.d(this.c, a + 1, d))) : (new Cd(null, 1 << (this.ia >>> a & 31), [null, this])).ba(a, b, c, d, e);
};
h.pa = function(a, b, c, d) {
  a = Id(this.c, this.f, c);
  return 0 > a ? d : zd(c, this.c[a]) ? this.c[a + 1] : t ? d : null;
};
var Fd = function() {
  function a(a, b, c, g, k, l, p) {
    var q = G(c);
    if (q === k) {
      return new Jd(null, q, 2, [c, g, l, p]);
    }
    var r = new yd;
    return Dd.ca(a, b, q, c, g, r).ca(a, b, k, l, p, r);
  }
  function b(a, b, c, g, k, l) {
    var p = G(b);
    if (p === g) {
      return new Jd(null, p, 2, [b, c, k, l]);
    }
    var q = new yd;
    return Dd.ba(a, p, b, c, q).ba(a, g, k, l, q);
  }
  var c = null, c = function(c, e, f, g, k, l, p) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.fa = b;
  c.sa = a;
  return c;
}();
function Kd(a, b, c, d, e) {
  this.i = a;
  this.da = b;
  this.k = c;
  this.r = d;
  this.m = e;
  this.o = 0;
  this.g = 32374860;
}
h = Kd.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = wb(this);
};
h.I = function(a, b) {
  return P(b, this);
};
h.toString = function() {
  return mb(this);
};
h.S = function(a, b) {
  return Tb.a(b, this);
};
h.T = function(a, b, c) {
  return Tb.d(b, c, this);
};
h.G = function() {
  return this;
};
h.U = function() {
  return null == this.r ? new W(null, 2, 5, Z, [this.da[this.k], this.da[this.k + 1]], null) : I(this.r);
};
h.W = function() {
  return null == this.r ? Gd.d ? Gd.d(this.da, this.k + 2, null) : Gd.call(null, this.da, this.k + 2, null) : Gd.d ? Gd.d(this.da, this.k, N(this.r)) : Gd.call(null, this.da, this.k, N(this.r));
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return new Kd(b, this.da, this.k, this.r, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Gb(M, this.i);
};
var Gd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Kd(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (n(g) && (g = g.Fa(), n(g))) {
            return new Kd(null, a, b + 2, g, null);
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
    return c.d(a, 0, null);
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
  c.b = b;
  c.d = a;
  return c;
}();
function Ld(a, b, c, d, e) {
  this.i = a;
  this.da = b;
  this.k = c;
  this.r = d;
  this.m = e;
  this.o = 0;
  this.g = 32374860;
}
h = Ld.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = wb(this);
};
h.I = function(a, b) {
  return P(b, this);
};
h.toString = function() {
  return mb(this);
};
h.S = function(a, b) {
  return Tb.a(b, this);
};
h.T = function(a, b, c) {
  return Tb.d(b, c, this);
};
h.G = function() {
  return this;
};
h.U = function() {
  return I(this.r);
};
h.W = function() {
  return Hd.j ? Hd.j(null, this.da, this.k, N(this.r)) : Hd.call(null, null, this.da, this.k, N(this.r));
};
h.B = function(a, b) {
  return xb(this, b);
};
h.w = function(a, b) {
  return new Ld(b, this.da, this.k, this.r, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Gb(M, this.i);
};
var Hd = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (n(k) && (k = k.Fa(), n(k))) {
            return new Ld(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Ld(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.j(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.j = a;
  return c;
}();
function Md(a, b, c, d, e, f) {
  this.i = a;
  this.f = b;
  this.root = c;
  this.V = d;
  this.Y = e;
  this.m = f;
  this.o = 8196;
  this.g = 16123663;
}
h = Md.prototype;
h.za = function() {
  return new Nd({}, this.root, this.f, this.V, this.Y);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = $b(this);
};
h.P = function(a, b) {
  return C.d(this, b, null);
};
h.Q = function(a, b, c) {
  return null == b ? this.V ? this.Y : c : null == this.root ? c : t ? this.root.pa(0, G(b), b, c) : null;
};
h.ya = function(a, b, c) {
  if (null == b) {
    return this.V && c === this.Y ? this : new Md(this.i, this.V ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new yd;
  b = (null == this.root ? Dd : this.root).ba(0, G(b), b, c, a);
  return b === this.root ? this : new Md(this.i, a.D ? this.f + 1 : this.f, b, this.V, this.Y, null);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.Q(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.b = function(a) {
  return this.P(null, a);
};
h.a = function(a, b) {
  return this.Q(null, a, b);
};
h.I = function(a, b) {
  return Kb(b) ? Ea(this, y.a(b, 0), y.a(b, 1)) : Sb.d(Aa, this, b);
};
h.toString = function() {
  return mb(this);
};
h.G = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.Fa() : null;
    return this.V ? P(new W(null, 2, 5, Z, [null, this.Y], null), a) : a;
  }
  return null;
};
h.J = function() {
  return this.f;
};
h.B = function(a, b) {
  return qd(this, b);
};
h.w = function(a, b) {
  return new Md(b, this.f, this.root, this.V, this.Y, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Ra(vd, this.i);
};
var vd = new Md(null, 0, null, !1, null, 0);
function Cb(a, b) {
  for (var c = a.length, d = 0, e = cb(vd);;) {
    if (d < c) {
      var f = d + 1, e = e.Ca(null, a[d], b[d]), d = f
    } else {
      return eb(e);
    }
  }
}
function Nd(a, b, c, d, e) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.V = d;
  this.Y = e;
  this.o = 56;
  this.g = 258;
}
h = Nd.prototype;
h.Ca = function(a, b, c) {
  return Od(this, b, c);
};
h.La = function(a, b) {
  var c;
  a: {
    if (this.q) {
      if (b ? b.g & 2048 || b.Db || (b.g ? 0 : s(Ga, b)) : s(Ga, b)) {
        c = Od(this, ac.b ? ac.b(b) : ac.call(null, b), bc.b ? bc.b(b) : bc.call(null, b));
        break a;
      }
      c = H(b);
      for (var d = this;;) {
        var e = I(c);
        if (n(e)) {
          c = N(c), d = Od(d, ac.b ? ac.b(e) : ac.call(null, e), bc.b ? bc.b(e) : bc.call(null, e));
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
h.Ma = function() {
  var a;
  if (this.q) {
    this.q = null, a = new Md(null, this.count, this.root, this.V, this.Y, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.P = function(a, b) {
  return null == b ? this.V ? this.Y : null : null == this.root ? null : this.root.pa(0, G(b), b);
};
h.Q = function(a, b, c) {
  return null == b ? this.V ? this.Y : c : null == this.root ? c : this.root.pa(0, G(b), b, c);
};
h.J = function() {
  if (this.q) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Od(a, b, c) {
  if (a.q) {
    if (null == b) {
      a.Y !== c && (a.Y = c), a.V || (a.count += 1, a.V = !0);
    } else {
      var d = new yd;
      b = (null == a.root ? Dd : a.root).ca(a.q, 0, G(b), b, c, d);
      b !== a.root && (a.root = b);
      d.D && (a.count += 1);
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
    a = H(a);
    for (var b = cb(vd);;) {
      if (a) {
        var e = N(N(a)), b = xc.d(b, I(a), I(N(a)));
        a = e;
      } else {
        return eb(b);
      }
    }
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
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
    return new ka(null, Wb(Q(a)), S.a(ua, a), null);
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ac(a) {
  return Ha(a);
}
function bc(a) {
  return Ia(a);
}
function hc(a) {
  if (a && (a.o & 4096 || a.Fb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
var Rd = function() {
  function a(a, b) {
    for (;;) {
      if (H(b) && 0 < a) {
        var c = a - 1, g = N(b);
        a = c;
        b = g;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (H(a)) {
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
  c.b = b;
  c.a = a;
  return c;
}(), Sd = function() {
  function a(a, b) {
    Rd.a(a, b);
    return b;
  }
  function b(a) {
    Rd.b(a);
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
  c.b = b;
  c.a = a;
  return c;
}();
function Td(a, b, c, d, e, f, g) {
  var k = ia;
  try {
    ia = null == ia ? null : ia - 1;
    if (null != ia && 0 > ia) {
      return D(a, "#");
    }
    D(a, c);
    H(g) && (b.d ? b.d(I(g), a, f) : b.call(null, I(g), a, f));
    for (var l = N(g), p = pa.b(f);l && (null == p || 0 !== p);) {
      D(a, d);
      b.d ? b.d(I(l), a, f) : b.call(null, I(l), a, f);
      var q = N(l);
      c = p - 1;
      l = q;
      p = c;
    }
    n(pa.b(f)) && (D(a, d), b.d ? b.d("...", a, f) : b.call(null, "...", a, f));
    return D(a, e);
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
    for (var e = H(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.K(null, k);
        D(a, l);
        k += 1;
      } else {
        if (e = H(e)) {
          f = e, Lb(f) ? (e = ib(f), g = jb(f), f = e, l = Q(e), e = g, g = l) : (l = I(f), D(a, l), e = N(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.l = 1;
  a.h = function(a) {
    var d = I(a);
    a = L(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Vd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Wd(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Vd[a];
  })), v('"')].join("");
}
var $ = function Xd(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (t) {
    n(function() {
      var c = Bb.a(d, na);
      return n(c) ? (c = b ? b.g & 131072 || b.Eb ? !0 : b.g ? !1 : s(Oa, b) : s(Oa, b)) ? Hb(b) : c : c;
    }()) && (D(c, "^"), Xd(Hb(b), c, d), D(c, " "));
    if (null == b) {
      return D(c, "nil");
    }
    if (b.na) {
      return b.ta(b, c, d);
    }
    if (b && (b.g & 2147483648 || b.R)) {
      return b.v(null, c, d);
    }
    if (sa(b) === Boolean || "number" === typeof b) {
      return D(c, "" + v(b));
    }
    if (null != b && b.constructor === Object) {
      return D(c, "#js "), Yd.j ? Yd.j(Cc.a(function(c) {
        return new W(null, 2, 5, Z, [ic.b(c), b[c]], null);
      }, Mb(b)), Xd, c, d) : Yd.call(null, Cc.a(function(c) {
        return new W(null, 2, 5, Z, [ic.b(c), b[c]], null);
      }, Mb(b)), Xd, c, d);
    }
    if (b instanceof Array) {
      return Td(c, Xd, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return n(ma.b(d)) ? D(c, Wd(b)) : D(c, b);
    }
    if (Eb(b)) {
      return Ud.e(c, O(["#\x3c", "" + v(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + v(b);;) {
          if (Q(d) < c) {
            d = [v("0"), v(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Ud.e(c, O(['#inst "', "" + v(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Ud.e(c, O(['#"', b.source, '"'], 0)) : (b ? b.g & 2147483648 || b.R || (b.g ? 0 : s($a, b)) : s($a, b)) ? ab(b, c, d) : t ? Ud.e(c, O(["#\x3c", "" + v(b), "\x3e"], 0)) : null;
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
    if (null == a || qa(H(a))) {
      b = "";
    } else {
      b = v;
      var e = ja(), f = new ga;
      a: {
        var g = new lb(f);
        $(I(a), g, e);
        a = H(N(a));
        for (var k = null, l = 0, p = 0;;) {
          if (p < l) {
            var q = k.K(null, p);
            D(g, " ");
            $(q, g, e);
            p += 1;
          } else {
            if (a = H(a)) {
              k = a, Lb(k) ? (a = ib(k), l = jb(k), k = a, q = Q(a), a = l, l = q) : (q = I(k), D(g, " "), $(q, g, e), a = N(k), k = null, l = 0), p = 0;
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
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Yd(a, b, c, d) {
  return Td(c, function(a, c, d) {
    b.d ? b.d(Ha(a), c, d) : b.call(null, Ha(a), c, d);
    D(c, " ");
    return b.d ? b.d(Ia(a), c, d) : b.call(null, Ia(a), c, d);
  }, "{", ", ", "}", d, H(a));
}
rb.prototype.R = !0;
rb.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
kd.prototype.R = !0;
kd.prototype.v = function(a, b, c) {
  return Td(b, $, "[", " ", "]", c, this);
};
nc.prototype.R = !0;
nc.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
ka.prototype.R = !0;
ka.prototype.v = function(a, b, c) {
  return Yd(this, $, b, c);
};
U.prototype.R = !0;
U.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
Kd.prototype.R = !0;
Kd.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
id.prototype.R = !0;
id.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
Md.prototype.R = !0;
Md.prototype.v = function(a, b, c) {
  return Yd(this, $, b, c);
};
W.prototype.R = !0;
W.prototype.v = function(a, b, c) {
  return Td(b, $, "[", " ", "]", c, this);
};
cc.prototype.R = !0;
cc.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
sd.prototype.R = !0;
sd.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
dc.prototype.R = !0;
dc.prototype.v = function(a, b) {
  return D(b, "()");
};
fc.prototype.R = !0;
fc.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
Ld.prototype.R = !0;
Ld.prototype.v = function(a, b, c) {
  return Td(b, $, "(", " ", ")", c, this);
};
W.prototype.Ja = !0;
W.prototype.Ka = function(a, b) {
  return Rb.a(this, b);
};
kd.prototype.Ja = !0;
kd.prototype.Ka = function(a, b) {
  return Rb.a(this, b);
};
T.prototype.Ja = !0;
T.prototype.Ka = function(a, b) {
  return nb(this, b);
};
F.prototype.Ja = !0;
F.prototype.Ka = function(a, b) {
  return nb(this, b);
};
function $d(a, b) {
  if (a ? a.Hb : a) {
    return a.Hb(a, b);
  }
  var c;
  c = $d[m(null == a ? null : a)];
  if (!c && (c = $d._, !c)) {
    throw u("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
function ae(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Sb = c;
  this.wb = d;
  this.g = 2153938944;
  this.o = 16386;
}
h = ae.prototype;
h.C = function() {
  return this[ba] || (this[ba] = ++ca);
};
h.sb = function(a, b, c) {
  a = H(this.wb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.K(null, f), k = R.d(g, 0, null), g = R.d(g, 1, null);
      g.j ? g.j(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = H(a)) {
        Lb(a) ? (d = ib(a), a = jb(a), k = d, e = Q(d), d = k) : (d = I(a), k = R.d(d, 0, null), g = R.d(d, 1, null), g.j ? g.j(k, this, b, c) : g.call(null, k, this, b, c), a = N(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.v = function(a, b, c) {
  D(b, "#\x3cAtom: ");
  $(this.state, b, c);
  return D(b, "\x3e");
};
h.u = function() {
  return this.i;
};
h.Sa = function() {
  return this.state;
};
h.B = function(a, b) {
  return this === b;
};
var ce = function() {
  function a(a) {
    return new ae(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Pb(c) ? S.a(Pd, c) : c, e = Bb.a(d, be), d = Bb.a(d, na);
      return new ae(a, d, e, null);
    }
    a.l = 1;
    a.h = function(a) {
      var c = I(a);
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
  b.l = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}(), de = {};
function ee(a, b) {
  if (a ? a.Cb : a) {
    return a.Cb(a, b);
  }
  var c;
  c = ee[m(null == a ? null : a)];
  if (!c && (c = ee._, !c)) {
    throw u("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var ge = function() {
  function a(a) {
    return b.e(a, O([new ka(null, 1, [fe, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? n(n(null) ? null : a.Xb) || (a.Jb ? 0 : s(de, a)) : s(de, a)) {
        return ee(a, S.a(Qd, c));
      }
      if (H(c)) {
        var d = Pb(c) ? S.a(Pd, c) : c, e = Bb.a(d, fe);
        return function(a, b, c, d) {
          return function A(e) {
            return Pb(e) ? Sd.b(Cc.a(A, e)) : (null == e ? 0 : e ? e.g & 8 || e.Vb || (e.g ? 0 : s(za, e)) : s(za, e)) ? Gc(null == e ? null : ya(e), Cc.a(A, e)) : e instanceof Array ? gd(Cc.a(A, e)) : sa(e) === Object ? Gc(wd, function() {
              return function(a, b, c, d) {
                return function Va(f) {
                  return new U(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = H(f);
                        if (a) {
                          if (Lb(a)) {
                            var b = ib(a), c = Q(b), g = new kc(Array(c), 0);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = y.a(b, k), l = new W(null, 2, 5, Z, [d.b ? d.b(l) : d.call(null, l), A(e[l])], null);
                                  g.add(l);
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? oc(g.N(), Va(jb(a))) : oc(g.N(), null);
                          }
                          g = I(a);
                          return P(new W(null, 2, 5, Z, [d.b ? d.b(g) : d.call(null, g), A(e[g])], null), Va(L(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(Mb(e));
            }()) : t ? e : null;
          };
        }(c, d, e, n(e) ? ic : v)(a);
      }
      return null;
    }
    a.l = 1;
    a.h = function(a) {
      var c = I(a);
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
  b.l = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}(), Xb = function() {
  function a(a) {
    return(Math.random.n ? Math.random.n() : Math.random.call(null)) * a;
  }
  function b() {
    return c.b(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = b;
  c.b = a;
  return c;
}(), Yb = function(a) {
  return Math.floor.b ? Math.floor.b((Math.random.n ? Math.random.n() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.n ? Math.random.n() : Math.random.call(null)) * a);
};
var oa = new T(null, "dup", "dup"), pb = new T(null, "default", "default"), he = new T(null, "recur", "recur"), ie = new T(null, "info", "info"), je = new T(null, "objects", "objects"), ke = new T(null, "finally-block", "finally-block"), le = new T(null, "points2d", "points2d"), me = new T(null, "catch-block", "catch-block"), ne = new T(null, "speed", "speed"), fe = new T(null, "keywordize-keys", "keywordize-keys"), oe = new T(null, "points", "points"), la = new T(null, "flush-on-newline", "flush-on-newline"), 
pe = new T(null, "catch-exception", "catch-exception"), qe = new T(null, "continue-block", "continue-block"), re = new T(null, "prev", "prev"), se = new T(null, "closed", "closed"), te = new T(null, "center", "center"), pa = new T(null, "print-length", "print-length"), t = new T(null, "else", "else"), ma = new T(null, "readably", "readably"), be = new T(null, "validator", "validator"), na = new T(null, "meta", "meta"), ue = new T(null, "none", "none"), ve = new T(null, "self", "self"), we = new T(null, 
"selected", "selected"), xe = new T(null, "rotation", "rotation"), ye = new T(null, "priority", "priority");
var ze = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = O(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return Sb.d(function(a, c) {
      var k = R.d(c, 0, null), l = R.d(c, 1, null);
      return Db.d(a, k, S.d(b, l, e));
    }, wd, a);
  }
  a.l = 2;
  a.h = function(a) {
    var d = I(a);
    a = N(a);
    var e = I(a);
    a = L(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}(), Ae = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = O(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = function() {
      return function k(a) {
        return new U(null, function() {
          for (var b = a;;) {
            if (b = H(b)) {
              if (Lb(b)) {
                var c = ib(b), d = Q(c), e = new kc(Array(d), 0);
                a: {
                  for (var f = 0;;) {
                    if (f < d) {
                      var A = y.a(c, f), K = R.d(A, 0, null), A = R.d(A, 1, null);
                      zc.a(A, null) && (K = [v(" "), v(K), v("\x3d'"), v(A), v("'")].join(""), e.add(K));
                      f += 1;
                    } else {
                      c = !0;
                      break a;
                    }
                  }
                  c = void 0;
                }
                return c ? oc(e.N(), k(jb(b))) : oc(e.N(), null);
              }
              c = I(b);
              e = R.d(c, 0, null);
              c = R.d(c, 1, null);
              if (zc.a(c, null)) {
                return P([v(" "), v(e), v("\x3d'"), v(c), v("'")].join(""), k(L(b)));
              }
              b = L(b);
            } else {
              return null;
            }
          }
        }, null, null);
      }(Jc.a(2, e));
    }();
    return E.a(b, se) ? [v("\x3c"), v(a), v(S.a(v, f)), v("/\x3e")].join("") : [v("\x3c"), v(a), v(S.a(v, f)), v("\x3e"), v(b), v("\x3c/"), v(a), v("\x3e")].join("");
  }
  a.l = 2;
  a.h = function(a) {
    var d = I(a);
    a = N(a);
    var e = I(a);
    a = L(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}();
function Be(a) {
  E.a(sa("object-list"), String) ? document.getElementById("object-list").innerHTML = a : "object-list".innerHTML = a;
}
;var Ce, De, Ee;
function Fe(a, b) {
  if (a ? a.vb : a) {
    return a.vb(0, b);
  }
  var c;
  c = Fe[m(null == a ? null : a)];
  if (!c && (c = Fe._, !c)) {
    throw u("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function Ge(a, b, c) {
  if (a ? a.ib : a) {
    return a.ib(0, b, c);
  }
  var d;
  d = Ge[m(null == a ? null : a)];
  if (!d && (d = Ge._, !d)) {
    throw u("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function He(a) {
  if (a ? a.X : a) {
    return a.X(a);
  }
  var b;
  b = He[m(null == a ? null : a)];
  if (!b && (b = He._, !b)) {
    throw u("Handler.active?", a);
  }
  return b.call(null, a);
}
function Ie(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = Ie[m(null == a ? null : a)];
  if (!b && (b = Ie._, !b)) {
    throw u("Handler.commit", a);
  }
  return b.call(null, a);
}
function Je(a) {
  if (a ? a.hb : a) {
    return a.hb();
  }
  var b;
  b = Je[m(null == a ? null : a)];
  if (!b && (b = Je._, !b)) {
    throw u("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function Ke(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Le(a, b, c, d) {
  this.head = a;
  this.p = b;
  this.length = c;
  this.c = d;
}
Le.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.c[this.p];
  this.c[this.p] = null;
  this.p = (this.p + 1) % this.c.length;
  this.length -= 1;
  return a;
};
Le.prototype.unshift = function(a) {
  this.c[this.head] = a;
  this.head = (this.head + 1) % this.c.length;
  this.length += 1;
  return null;
};
function Me(a, b) {
  a.length + 1 === a.c.length && a.resize();
  a.unshift(b);
}
Le.prototype.resize = function() {
  var a = Array(2 * this.c.length);
  return this.p < this.head ? (Ke(this.c, this.p, a, 0, this.length), this.p = 0, this.head = this.length, this.c = a) : this.p > this.head ? (Ke(this.c, this.p, a, 0, this.c.length - this.p), Ke(this.c, 0, a, this.c.length - this.p, this.head), this.p = 0, this.head = this.length, this.c = a) : this.p === this.head ? (this.head = this.p = 0, this.c = a) : null;
};
function Ne(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop();
      (b.b ? b.b(e) : b.call(null, e)) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function Oe(a) {
  if (!(0 < a)) {
    throw Error([v("Assert failed: "), v("Can't create a ring buffer of size 0"), v("\n"), v(Zd.e(O([ec(new F(null, "\x3e", "\x3e", -1640531465, null), new F(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new Le(0, 0, 0, Array(a));
}
function Pe(a, b) {
  this.H = a;
  this.Qb = b;
  this.o = 0;
  this.g = 2;
}
Pe.prototype.J = function() {
  return this.H.length;
};
Pe.prototype.hb = function() {
  return this.H.length === this.Qb;
};
Pe.prototype.Ib = function() {
  return this.H.pop();
};
function Qe(a, b) {
  if (!qa(Je(a))) {
    throw Error([v("Assert failed: "), v("Can't add to a full buffer"), v("\n"), v(Zd.e(O([ec(new F(null, "not", "not", -1640422260, null), ec(new F("impl", "full?", "impl/full?", -1337857039, null), new F(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.H.unshift(b);
}
;var Re = null, Se = Oe(32), Te = !1, Ue = !1;
function Ve() {
  Te = !0;
  Ue = !1;
  for (var a = 0;;) {
    var b = Se.pop();
    if (null != b && (b.n ? b.n() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Te = !1;
  return 0 < Se.length ? We.n ? We.n() : We.call(null) : null;
}
"undefined" !== typeof MessageChannel && (Re = new MessageChannel, Re.port1.onmessage = function() {
  return Ve();
});
function We() {
  var a = Ue;
  if (n(a ? Te : a)) {
    return null;
  }
  Ue = !0;
  return "undefined" !== typeof MessageChannel ? Re.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(Ve) : t ? setTimeout(Ve, 0) : null;
}
function Xe(a) {
  Me(Se, a);
  We();
}
;var Ye = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = O(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return S.j(Ae, a, b, e);
  }
  a.l = 2;
  a.h = function(a) {
    var d = I(a);
    a = N(a);
    var e = I(a);
    a = L(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}(), Ze = Ye("br", se), $e = function() {
  function a(a, b, c) {
    return Ye.e("input", se, O(["type", a, "name", b, "value", c], 0));
  }
  function b(a, b) {
    return Ye.e("input", se, O(["type", a, "name", b], 0));
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
  c.d = a;
  return c;
}(), af = [v("x1"), v($e.a("text", "x1")), v("x2"), v($e.a("text", "x2")), v("x3"), v($e.d("text", "x3", 0)), v("x4"), v($e.d("text", "x4", 0))].join(""), bf = new W(null, 3, 5, Z, [Ye("h2", "Element hinzuf\u00fcgen (Funktioniert noch nicht!)"), Ye.e("div", [v("Objekt-Name"), v($e.a("text", "obj-name")), v(Ze), v(Ze), v(af)].join(""), O(["id", "prompt-object-decl"], 0)), Ye.e("a", "Hinzuf\u00fcgen", O("href # class button onclick drawer.api.submitPrompt();".split(" "), 0))], null);
var cf, ef = function df(b) {
  "undefined" === typeof cf && (cf = function(b, d, e) {
    this.Da = b;
    this.jb = d;
    this.Lb = e;
    this.o = 0;
    this.g = 393216;
  }, cf.na = !0, cf.ma = "cljs.core.async.impl.ioc-helpers/t11360", cf.ta = function(b, d) {
    return D(d, "cljs.core.async.impl.ioc-helpers/t11360");
  }, cf.prototype.X = function() {
    return!0;
  }, cf.prototype.L = function() {
    return this.Da;
  }, cf.prototype.u = function() {
    return this.Lb;
  }, cf.prototype.w = function(b, d) {
    return new cf(this.Da, this.jb, d);
  });
  return new cf(b, df, null);
};
function ff(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].ub(), b;
    }
    if (t) {
      throw b;
    }
    return null;
  }
}
var hf = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = O(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    var g = Pb(f) ? S.a(Pd, f) : f;
    a[1] = b;
    b = gf(function() {
      return function(b) {
        a[2] = b;
        return ff(a);
      };
    }(f, g, g), e, g);
    return n(b) ? (a[2] = Na(b), he) : null;
  }
  a.l = 3;
  a.h = function(a) {
    var d = I(a);
    a = N(a);
    var e = I(a);
    a = N(a);
    var f = I(a);
    a = L(a);
    return b(d, e, f, a);
  };
  a.e = b;
  return a;
}();
function jf(a, b) {
  var c = a[6];
  null != b && c.ib(0, b, ef(function() {
    return function() {
      return null;
    };
  }(c)));
  c.ub();
  return c;
}
function kf(a) {
  for (;;) {
    var b = a[4], c = me.b(b), d = pe.b(b), e = a[5];
    if (n(function() {
      var a = e;
      return n(a) ? qa(b) : a;
    }())) {
      throw e;
    }
    if (n(function() {
      var a = e;
      return n(a) ? (a = c, n(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = Db.e(b, me, null, O([pe, null], 0));
      break;
    }
    if (n(function() {
      var a = e;
      return n(a) ? qa(c) && qa(ke.b(b)) : a;
    }())) {
      a[4] = re.b(b);
    } else {
      if (n(function() {
        var a = e;
        return n(a) ? (a = qa(c)) ? ke.b(b) : a : a;
      }())) {
        a[1] = ke.b(b);
        a[4] = Db.d(b, ke, null);
        break;
      }
      if (n(function() {
        var a = qa(e);
        return a ? ke.b(b) : a;
      }())) {
        a[1] = ke.b(b);
        a[4] = Db.d(b, ke, null);
        break;
      }
      if (qa(e) && qa(ke.b(b))) {
        a[1] = qe.b(b);
        a[4] = re.b(b);
        break;
      }
      if (t) {
        throw Error([v("Assert failed: "), v("No matching clause"), v("\n"), v(Zd.e(O([!1], 0)))].join(""));
      }
      break;
    }
  }
}
;var lf, nf = function mf(b) {
  "undefined" === typeof lf && (lf = function(b, d, e) {
    this.D = b;
    this.zb = d;
    this.Kb = e;
    this.o = 0;
    this.g = 425984;
  }, lf.na = !0, lf.ma = "cljs.core.async.impl.channels/t11344", lf.ta = function(b, d) {
    return D(d, "cljs.core.async.impl.channels/t11344");
  }, lf.prototype.Sa = function() {
    return this.D;
  }, lf.prototype.u = function() {
    return this.Kb;
  }, lf.prototype.w = function(b, d) {
    return new lf(this.D, this.zb, d);
  });
  return new lf(b, mf, null);
};
function of(a, b) {
  this.kb = a;
  this.D = b;
}
function pf(a) {
  return He(a.kb);
}
function qf(a, b, c, d, e, f) {
  this.Ia = a;
  this.Oa = b;
  this.Ha = c;
  this.Na = d;
  this.H = e;
  this.closed = f;
}
qf.prototype.ub = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.Ia.pop();
      if (null != a) {
        if (a.X(null)) {
          var b = a.L(null);
          Xe(function(a) {
            return function() {
              return a.b ? a.b(null) : a.call(null, null);
            };
          }(b, a, this));
        }
      } else {
        break;
      }
    }
  }
};
qf.prototype.vb = function(a, b) {
  if (b.X(null)) {
    if (null != this.H && 0 < Q(this.H)) {
      for (var c = b.L(null), d = nf(this.H.Ib());;) {
        var e = this.Ha.pop();
        if (null != e) {
          var f = e.kb, g = e.D;
          if (f.X(null)) {
            var k = f.L(null), l = b.L(null);
            Xe(function(a) {
              return function() {
                return a.b ? a.b(!0) : a.call(null, !0);
              };
            }(k, l, f, g, e, c, d, this));
            Qe(this.H, g);
          } else {
            continue;
          }
        }
        break;
      }
      return d;
    }
    for (;;) {
      if (d = this.Ha.pop(), null != d) {
        if (e = d.kb, f = d.D, e.X(null)) {
          return g = e.L(null), c = b.L(null), Xe(function(a) {
            return function() {
              return a.b ? a.b(!0) : a.call(null, !0);
            };
          }(g, c, e, f, d, this)), nf(f);
        }
      } else {
        if (this.closed) {
          return c = b.L(null), nf(null);
        }
        64 < this.Oa ? (this.Oa = 0, Ne(this.Ia, He)) : this.Oa += 1;
        if (!(1024 > this.Ia.length)) {
          throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending takes are allowed on a single channel.")].join("")), v("\n"), v(Zd.e(O([ec(new F(null, "\x3c", "\x3c", -1640531467, null), ec(new F(null, ".-length", ".-length", 1395928862, null), new F(null, "takes", "takes", -1530407291, null)), new F("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        Me(this.Ia, b);
        return null;
      }
    }
  } else {
    return null;
  }
};
qf.prototype.ib = function(a, b, c) {
  if (null == b) {
    throw Error([v("Assert failed: "), v("Can't put nil in on a channel"), v("\n"), v(Zd.e(O([ec(new F(null, "not", "not", -1640422260, null), ec(new F(null, "nil?", "nil?", -1637150201, null), new F(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if ((a = this.closed) || !c.X(null)) {
    return nf(!a);
  }
  for (;;) {
    var d = this.Ia.pop();
    if (null != d) {
      if (d.X(null)) {
        var e = d.L(null);
        c = c.L(null);
        Xe(function(a) {
          return function() {
            return a.b ? a.b(b) : a.call(null, b);
          };
        }(e, c, d, a, this));
        return nf(!0);
      }
    } else {
      if (null == this.H || this.H.hb()) {
        64 < this.Na ? (this.Na = 0, Ne(this.Ha, pf)) : this.Na += 1;
        if (!(1024 > this.Ha.length)) {
          throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending puts are allowed on a single channel."), v(" Consider using a windowed buffer.")].join("")), v("\n"), v(Zd.e(O([ec(new F(null, "\x3c", "\x3c", -1640531467, null), ec(new F(null, ".-length", ".-length", 1395928862, null), new F(null, "puts", "puts", -1637078787, null)), new F("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        Me(this.Ha, new of(c, b));
        return null;
      }
      c = c.L(null);
      Qe(this.H, b);
      return nf(!0);
    }
  }
};
function rf(a, b, c) {
  this.key = a;
  this.D = b;
  this.forward = c;
  this.o = 0;
  this.g = 2155872256;
}
rf.prototype.v = function(a, b, c) {
  return Td(b, $, "[", " ", "]", c, this);
};
rf.prototype.G = function() {
  return Aa(Aa(M, this.D), this.key);
};
(function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new rf(a, b, c);
  }
  function b(a) {
    return c.d(null, null, a);
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
  c.b = b;
  c.d = a;
  return c;
})().b(0);
var tf = function sf(b) {
  "undefined" === typeof Ce && (Ce = function(b, d, e) {
    this.Da = b;
    this.jb = d;
    this.Nb = e;
    this.o = 0;
    this.g = 393216;
  }, Ce.na = !0, Ce.ma = "cljs.core.async/t8653", Ce.ta = function(b, d) {
    return D(d, "cljs.core.async/t8653");
  }, Ce.prototype.X = function() {
    return!0;
  }, Ce.prototype.L = function() {
    return this.Da;
  }, Ce.prototype.u = function() {
    return this.Nb;
  }, Ce.prototype.w = function(b, d) {
    return new Ce(this.Da, this.jb, d);
  });
  return new Ce(b, sf, null);
}, uf = function() {
  function a(a) {
    a = E.a(a, 0) ? null : a;
    a = "number" === typeof a ? new Pe(Oe(a), a) : a;
    return new qf(Oe(32), 0, Oe(32), 0, a, !1);
  }
  function b() {
    return c.b(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = b;
  c.b = a;
  return c;
}(), vf = tf(function() {
  return null;
}), wf = function() {
  function a(a, b, c, d) {
    a = Ge(a, b, tf(c));
    return n(a) ? (b = Na(a), n(d) ? c.b ? c.b(b) : c.call(null, b) : Xe(function(a) {
      return function() {
        return c.b ? c.b(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.j(a, b, c, !0);
  }
  function c(a, b) {
    var c = Ge(a, b, vf);
    return n(c) ? Na(c) : !0;
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.d = b;
  d.j = a;
  return d;
}();
function xf(a) {
  for (var b = Array(a), c = 0;;) {
    if (c < a) {
      b[c] = 0, c += 1;
    } else {
      break;
    }
  }
  for (c = 1;;) {
    if (E.a(c, a)) {
      return b;
    }
    var d = Yb(c);
    b[c] = b[d];
    b[d] = c;
    c += 1;
  }
}
var zf = function yf() {
  var b = ce.b(!0);
  "undefined" === typeof De && (De = function(b, d, e) {
    this.oa = b;
    this.xb = d;
    this.Ob = e;
    this.o = 0;
    this.g = 393216;
  }, De.na = !0, De.ma = "cljs.core.async/t8666", De.ta = function() {
    return function(b, d) {
      return D(d, "cljs.core.async/t8666");
    };
  }(b), De.prototype.X = function() {
    return function() {
      return Na(this.oa);
    };
  }(b), De.prototype.L = function() {
    return function() {
      var b = this.oa;
      if (b instanceof ae) {
        var d = b.Sb;
        if (null != d && !n(d.b ? d.b(null) : d.call(null, null))) {
          throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(Zd.e(O([ec(new F(null, "validate", "validate", 1233162959, null), new F(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
        }
        d = b.state;
        b.state = null;
        null != b.wb && bb(b, d, null);
      } else {
        $d(b, null);
      }
      return!0;
    };
  }(b), De.prototype.u = function() {
    return function() {
      return this.Ob;
    };
  }(b), De.prototype.w = function() {
    return function(b, d) {
      return new De(this.oa, this.xb, d);
    };
  }(b));
  return new De(b, yf, null);
}, Bf = function Af(b, c) {
  "undefined" === typeof Ee && (Ee = function(b, c, f, g) {
    this.lb = b;
    this.oa = c;
    this.yb = f;
    this.Pb = g;
    this.o = 0;
    this.g = 393216;
  }, Ee.na = !0, Ee.ma = "cljs.core.async/t8672", Ee.ta = function(b, c) {
    return D(c, "cljs.core.async/t8672");
  }, Ee.prototype.X = function() {
    return He(this.oa);
  }, Ee.prototype.L = function() {
    Ie(this.oa);
    return this.lb;
  }, Ee.prototype.u = function() {
    return this.Pb;
  }, Ee.prototype.w = function(b, c) {
    return new Ee(this.lb, this.oa, this.yb, c);
  });
  return new Ee(c, b, Af, null);
};
function gf(a, b, c) {
  var d = zf(), e = Q(b), f = xf(e), g = ye.b(c), k = function() {
    for (var c = 0;;) {
      if (c < e) {
        var k = n(g) ? c : f[c], q = R.a(b, k), r = Kb(q) ? q.b ? q.b(0) : q.call(null, 0) : null, w = n(r) ? function() {
          var b = q.b ? q.b(1) : q.call(null, 1);
          return Ge(r, b, Bf(d, function(b, c, d, e, f) {
            return function(b) {
              return a.b ? a.b(new W(null, 2, 5, Z, [b, f], null)) : a.call(null, new W(null, 2, 5, Z, [b, f], null));
            };
          }(c, b, k, q, r, d, e, f, g)));
        }() : Fe(q, Bf(d, function(b, c, d) {
          return function(b) {
            return a.b ? a.b(new W(null, 2, 5, Z, [b, d], null)) : a.call(null, new W(null, 2, 5, Z, [b, d], null));
          };
        }(c, k, q, r, d, e, f, g)));
        if (n(w)) {
          return nf(new W(null, 2, 5, Z, [Na(w), function() {
            var a = r;
            return n(a) ? a : q;
          }()], null));
        }
        c += 1;
      } else {
        return null;
      }
    }
  }();
  return n(k) ? k : Bb.d(c, pb, Ob) !== Ob && (k = function() {
    var a = d.X(null);
    return n(a) ? d.L(null) : a;
  }(), n(k)) ? nf(new W(null, 2, 5, Z, [pb.b(c), pb], null)) : null;
}
;function Cf(a) {
  ze(a, function(a) {
    return a;
  });
  return a;
}
function Df(a) {
  a = null == a ? null : Ja(a);
  return null == a ? null : Ja(a);
}
function Ef(a) {
  return Mc(a, new W(null, 1, 5, Z, [le], null), Ic.a(Df, a.b ? a.b(oe) : a.call(null, oe)));
}
function Ff(a) {
  return ze(a, Ef);
}
function Gf(a) {
  var b = Pb(a) ? S.a(Pd, a) : a, c = Bb.a(b, oe);
  return Ic.a(function(a, b, c) {
    return function(a) {
      return a / Q(c);
    };
  }(a, b, c), Ic.a(function() {
    return function(a) {
      return Sb.a(Ub, a);
    };
  }(a, b, c), S.d(Cc, hd, c)));
}
function Hf(a) {
  var b = If, c = a.b ? a.b(le) : a.call(null, le), d = c.b ? c.b(0) : c.call(null, 0);
  b.beginPath();
  b.moveTo(d.b ? d.b(0) : d.call(null, 0), d.b ? d.b(1) : d.call(null, 1));
  for (var c = H(c), e = null, f = 0, g = 0;;) {
    if (g < f) {
      var k = e.K(null, g);
      b.lineTo(k.b ? k.b(0) : k.call(null, 0), k.b ? k.b(1) : k.call(null, 1));
      g += 1;
    } else {
      if (c = H(c)) {
        e = c, Lb(e) ? (c = ib(e), g = jb(e), e = c, f = Q(c), c = g) : (c = I(e), b.lineTo(c.b ? c.b(0) : c.call(null, 0), c.b ? c.b(1) : c.call(null, 1)), c = N(e), e = null, f = 0), g = 0;
      } else {
        break;
      }
    }
  }
  b.lineTo(d.b ? d.b(0) : d.call(null, 0), d.b ? d.b(1) : d.call(null, 1));
  b.stroke();
  b.closePath();
  a = Df(Gf(a));
  b.beginPath();
  b.arc(a.b ? a.b(0) : a.call(null, 0), a.b ? a.b(1) : a.call(null, 1), 2, 0, 2 * Math.PI);
  b.stroke();
  b.closePath();
}
;function Jf() {
  var a = document.getElementById("prompt");
  document.getElementById("prompt-overlay").style.display = "none";
  return a.innerHTML = "";
}
function Kf(a) {
  var b = function() {
    return function d(b) {
      return new U(null, function() {
        for (;;) {
          var f = H(b);
          if (f) {
            if (Lb(f)) {
              var g = ib(f), k = Q(g), l = new kc(Array(k), 0);
              a: {
                for (var p = 0;;) {
                  if (p < k) {
                    var q = y.a(g, p), r = R.d(q, 0, null);
                    R.d(q, 1, null);
                    q = E.a(r, Kc.a(a, new W(null, 2, 5, Z, [ie, we], null)));
                    r = [v("\x3cli\x3e"), v(Ae.e("a", r, O(["href", "#", "id", q ? "selected-obj" : null, "onclick", [v("drawer.api.setSelected(\x26#39;"), v(r), v("\x26#39;)")].join("")], 0))), v("\x3c/li\x3e")].join("");
                    l.add(r);
                    p += 1;
                  } else {
                    g = !0;
                    break a;
                  }
                }
                g = void 0;
              }
              return g ? oc(l.N(), d(jb(f))) : oc(l.N(), null);
            }
            g = I(f);
            l = R.d(g, 0, null);
            R.d(g, 1, null);
            g = E.a(l, Kc.a(a, new W(null, 2, 5, Z, [ie, we], null)));
            return P([v("\x3cli\x3e"), v(Ae.e("a", l, O(["href", "#", "id", g ? "selected-obj" : null, "onclick", [v("drawer.api.setSelected(\x26#39;"), v(l), v("\x26#39;)")].join("")], 0))), v("\x3c/li\x3e")].join(""), d(L(f)));
          }
          return null;
        }
      }, null, null);
    }(a.b ? a.b(je) : a.call(null, je));
  }();
  Be([v("\x3cul\x3e"), v(S.a(v, b)), v("\x3c/ul\x3e")].join(""));
  return a;
}
;var Lf = document.getElementById("canvas"), If = Lf.getContext("2d"), Mf = document.getElementById("controls");
function Nf(a) {
  If.save();
  If.setTransform(1, 0, 0, 1, 0, 0);
  If.clearRect(0, 0, Lf.width, Lf.height);
  If.restore();
  for (var b = H(a.b ? a.b(je) : a.call(null, je)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.K(null, e), g = R.d(f, 0, null), f = R.d(f, 1, null);
      E.a(Kc.a(a, new W(null, 2, 5, Z, [ie, we], null)), g) ? If.strokeStyle = "#f00" : If.strokeStyle = "#000";
      Hf(f);
      e += 1;
    } else {
      if (b = H(b)) {
        Lb(b) ? (d = ib(b), b = jb(b), c = d, d = Q(d)) : (d = I(b), c = R.d(d, 0, null), d = R.d(d, 1, null), E.a(Kc.a(a, new W(null, 2, 5, Z, [ie, we], null)), c) ? If.strokeStyle = "#f00" : If.strokeStyle = "#000", Hf(d), b = N(b), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
  return a;
}
var Of = uf.n(), Pf = function() {
  function a(a) {
    return wf.a(Of, a);
  }
  function b() {
    return wf.a(Of, Bc);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = b;
  c.b = a;
  return c;
}();
Pf.n();
var Qf = uf.n(), Rf = function() {
  function a(a) {
    return wf.a(Qf, a);
  }
  function b() {
    return wf.a(Qf, Bc);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = b;
  c.b = a;
  return c;
}(), Sf = uf.b(1);
Xe(function(a) {
  return function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!gc(b, he)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, kf(c), he;
                  }
                  if (t) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!gc(e, he)) {
                return e;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null];
            a[0] = g;
            a[1] = 1;
            return a;
          }
          var g = null, g = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          g.n = c;
          g.b = b;
          return g;
        }();
      }(function(a) {
        return function(b) {
          var c = b[1];
          if (1 === c) {
            var g = [je, ie], k = [we], l = [ue], k = Cb.a ? Cb.a(k, l) : Cb.call(null, k, l), k = [vd, k], p = Cb.a ? Cb.a(g, k) : Cb.call(null, g, k);
            b[7] = p;
            b[2] = null;
            b[1] = 2;
            return he;
          }
          if (2 === c) {
            return g = new W(null, 2, 5, Z, [Of, Qf], null), hf.e(b, 4, g, O([ye, !0], 0));
          }
          if (3 === c) {
            return g = b[2], jf(b, g);
          }
          if (4 === c) {
            var q = b[8], r = b[9], g = b[2], w = R.d(g, 0, null), k = R.d(g, 1, null), l = E.a(Of, k);
            b[8] = g;
            b[9] = k;
            b[10] = w;
            b[1] = l ? 5 : 6;
            return he;
          }
          if (5 === c) {
            return q = b[8], r = b[9], w = b[10], p = b[7], b[2] = function() {
              return function() {
                return function(a) {
                  return Kf(a);
                };
              }(r, E, r, w, q, p, q, r, w, p, c, a);
            }(), b[1] = 7, he;
          }
          if (6 === c) {
            return r = b[9], g = E.a(Qf, r), b[1] = g ? 8 : 9, he;
          }
          if (7 === c) {
            return w = b[10], p = b[7], g = b[2], k = w.b ? w.b(p) : w.call(null, p), k = Mc(k, new W(null, 1, 5, Z, [je], null), Ff(Cf(k.b ? k.b(je) : k.call(null, je)))), k = Nf(k), g = g.b ? g.b(k) : g.call(null, k), b[7] = g, b[2] = null, b[1] = 2, he;
          }
          if (8 === c) {
            return q = b[8], r = b[9], w = b[10], p = b[7], b[2] = function() {
              return function() {
                return function(a) {
                  return a;
                };
              }(r, E, r, w, q, p, q, r, w, p, c, a);
            }(), b[1] = 10, he;
          }
          if (9 === c) {
            throw r = b[9], b = [v("No matching clause: "), v(r)].join(""), Error(b);
          }
          return 10 === c ? (g = b[2], b[2] = g, b[1] = 7, he) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.n ? b.n() : b.call(null);
      c[6] = a;
      return c;
    }();
    return ff(c);
  };
}(Sf));
function Tf() {
  var a = window.innerHeight;
  Lf.setAttribute("width", window.innerWidth - parseInt(Mf.offsetWidth) - 1);
  Lf.setAttribute("height", a);
  return Rf.n();
}
Tf();
window.onresize = Tf;
function Uf(a, b) {
  return Pf(function(c) {
    var d = new W(null, 2, 5, Z, [je, a], null), e;
    e = ge.b(b);
    e = new ka(null, 3, [oe, e, le, Ic.a(Df, e), xe, new ka(null, 2, [ne, new W(null, 4, 5, Z, [0, 0, 0, 0], null), te, ve], null)], null);
    return Mc(c, d, e);
  });
}
ea("drawer.api.addObject", Uf);
Uf("Linie", new W(null, 2, 5, Z, [new W(null, 4, 5, Z, [100, 100, 0, 0], null), new W(null, 4, 5, Z, [150, 300, 0, 0], null)], null));
Uf("Dreieck", new W(null, 3, 5, Z, [new W(null, 4, 5, Z, [300, 200, 0, 0], null), new W(null, 4, 5, Z, [400, 400, 0, 0], null), new W(null, 4, 5, Z, [200, 400, 0, 0], null)], null));
ea("drawer.api.setSelected", function(a) {
  return Pf(function(b) {
    return Mc(b, new W(null, 2, 5, Z, [ie, we], null), a);
  });
});
ea("drawer.api.displayPrompt", function() {
  var a = document.getElementById("prompt");
  document.getElementById("prompt-overlay").style.display = "block";
  return a.innerHTML = S.a(v, bf);
});
ea("drawer.api.closePrompt", function() {
  return Jf();
});
ea("drawer.api.submitPrompt", function() {
  return Jf();
});

})();
