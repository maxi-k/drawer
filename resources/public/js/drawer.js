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
function da(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
;function ea(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function fa(a, b) {
  null != a && this.append.apply(this, arguments);
}
fa.prototype.ra = "";
fa.prototype.append = function(a, b, c) {
  this.ra += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.ra += arguments[d];
    }
  }
  return this;
};
fa.prototype.toString = function() {
  return this.ra;
};
var ha = {}, ia, ja = null;
function ka() {
  return new la(null, 5, [ma, !0, na, !0, oa, !1, pa, !1, ra, null], null);
}
function p(a) {
  return null != a && !1 !== a;
}
function sa(a) {
  return p(a) ? !1 : !0;
}
function r(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function ta(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = ta(b), c = p(p(c) ? c.hb : c) ? c.gb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ua(a) {
  var b = a.gb;
  return p(b) ? b : "" + w(a);
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
function va(a) {
  return Array.prototype.slice.call(arguments);
}
var wa = {}, xa = {};
function ya(a) {
  if (a ? a.H : a) {
    return a.H(a);
  }
  var b;
  b = ya[m(null == a ? null : a)];
  if (!b && (b = ya._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function za(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = za[m(null == a ? null : a)];
  if (!b && (b = za._, !b)) {
    throw u("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var Aa = {};
function Ba(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = Ba[m(null == a ? null : a)];
  if (!c && (c = Ba._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ca = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.X : a) {
      return a.X(a, b, c);
    }
    var h;
    h = z[m(null == a ? null : a)];
    if (!h && (h = z._, !h)) {
      throw u("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = z[m(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
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
  c.c = a;
  return c;
}(), Da = {};
function A(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = B[m(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Fa = {}, C = function() {
  function a(a, b, c) {
    if (a ? a.O : a) {
      return a.O(a, b, c);
    }
    var h;
    h = C[m(null == a ? null : a)];
    if (!h && (h = C._, !h)) {
      throw u("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = C[m(null == a ? null : a)];
    if (!c && (c = C._, !c)) {
      throw u("ILookup.-lookup", a);
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
function Ga(a, b, c) {
  if (a ? a.sa : a) {
    return a.sa(a, b, c);
  }
  var d;
  d = Ga[m(null == a ? null : a)];
  if (!d && (d = Ga._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ha = {}, Ia = {};
function Ja(a) {
  if (a ? a.ab : a) {
    return a.ab();
  }
  var b;
  b = Ja[m(null == a ? null : a)];
  if (!b && (b = Ja._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ka(a) {
  if (a ? a.bb : a) {
    return a.bb();
  }
  var b;
  b = Ka[m(null == a ? null : a)];
  if (!b && (b = Ka._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
function La(a) {
  if (a ? a.va : a) {
    return a.va(a);
  }
  var b;
  b = La[m(null == a ? null : a)];
  if (!b && (b = La._, !b)) {
    throw u("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Ma(a) {
  if (a ? a.wa : a) {
    return a.wa(a);
  }
  var b;
  b = Ma[m(null == a ? null : a)];
  if (!b && (b = Ma._, !b)) {
    throw u("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Oa = {};
function Pa(a, b, c) {
  if (a ? a.Xa : a) {
    return a.Xa(a, b, c);
  }
  var d;
  d = Pa[m(null == a ? null : a)];
  if (!d && (d = Pa._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Qa(a) {
  if (a ? a.mb : a) {
    return a.state;
  }
  var b;
  b = Qa[m(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ra = {};
function Sa(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = Sa[m(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Ta = {};
function Ua(a, b) {
  if (a ? a.G : a) {
    return a.G(a, b);
  }
  var c;
  c = Ua[m(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Va = {}, Wa = function() {
  function a(a, b, c) {
    if (a ? a.Q : a) {
      return a.Q(a, b, c);
    }
    var h;
    h = Wa[m(null == a ? null : a)];
    if (!h && (h = Wa._, !h)) {
      throw u("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.P : a) {
      return a.P(a, b);
    }
    var c;
    c = Wa[m(null == a ? null : a)];
    if (!c && (c = Wa._, !c)) {
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
  c.c = a;
  return c;
}();
function Xa(a, b) {
  if (a ? a.u : a) {
    return a.u(a, b);
  }
  var c;
  c = Xa[m(null == a ? null : a)];
  if (!c && (c = Xa._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Ya(a) {
  if (a ? a.A : a) {
    return a.A(a);
  }
  var b;
  b = Ya[m(null == a ? null : a)];
  if (!b && (b = Ya._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Za = {};
function $a(a) {
  if (a ? a.F : a) {
    return a.F(a);
  }
  var b;
  b = $a[m(null == a ? null : a)];
  if (!b && (b = $a._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var ab = {}, bb = {};
function cb(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = cb[m(null == a ? null : a)];
  if (!b && (b = cb._, !b)) {
    throw u("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function D(a, b) {
  if (a ? a.fb : a) {
    return a.fb(0, b);
  }
  var c;
  c = D[m(null == a ? null : a)];
  if (!c && (c = D._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var db = {};
function eb(a, b, c) {
  if (a ? a.v : a) {
    return a.v(a, b, c);
  }
  var d;
  d = eb[m(null == a ? null : a)];
  if (!d && (d = eb._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function fb(a, b, c) {
  if (a ? a.eb : a) {
    return a.eb(0, b, c);
  }
  var d;
  d = fb[m(null == a ? null : a)];
  if (!d && (d = fb._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function gb(a) {
  if (a ? a.ta : a) {
    return a.ta(a);
  }
  var b;
  b = gb[m(null == a ? null : a)];
  if (!b && (b = gb._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function hb(a, b) {
  if (a ? a.Ea : a) {
    return a.Ea(a, b);
  }
  var c;
  c = hb[m(null == a ? null : a)];
  if (!c && (c = hb._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function ib(a) {
  if (a ? a.Fa : a) {
    return a.Fa(a);
  }
  var b;
  b = ib[m(null == a ? null : a)];
  if (!b && (b = ib._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function jb(a, b, c) {
  if (a ? a.xa : a) {
    return a.xa(a, b, c);
  }
  var d;
  d = jb[m(null == a ? null : a)];
  if (!d && (d = jb._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function kb(a, b, c) {
  if (a ? a.cb : a) {
    return a.cb(0, b, c);
  }
  var d;
  d = kb[m(null == a ? null : a)];
  if (!d && (d = kb._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function lb(a) {
  if (a ? a.Ya : a) {
    return a.Ya();
  }
  var b;
  b = lb[m(null == a ? null : a)];
  if (!b && (b = lb._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function mb(a) {
  if (a ? a.Ia : a) {
    return a.Ia(a);
  }
  var b;
  b = mb[m(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function nb(a) {
  if (a ? a.Ja : a) {
    return a.Ja(a);
  }
  var b;
  b = nb[m(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function ob(a) {
  if (a ? a.Ha : a) {
    return a.Ha(a);
  }
  var b;
  b = ob[m(null == a ? null : a)];
  if (!b && (b = ob._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function pb(a) {
  this.Ab = a;
  this.o = 0;
  this.h = 1073741824;
}
pb.prototype.fb = function(a, b) {
  return this.Ab.append(b);
};
function qb(a) {
  var b = new fa;
  a.v(null, new pb(b), ka());
  return "" + w(b);
}
function rb(a, b) {
  if (p(sb.a ? sb.a(a, b) : sb.call(null, a, b))) {
    return 0;
  }
  var c = sa(a.L);
  if (p(c ? b.L : c)) {
    return-1;
  }
  if (p(a.L)) {
    if (sa(b.L)) {
      return 1;
    }
    c = tb.a ? tb.a(a.L, b.L) : tb.call(null, a.L, b.L);
    return 0 === c ? tb.a ? tb.a(a.name, b.name) : tb.call(null, a.name, b.name) : c;
  }
  return ub ? tb.a ? tb.a(a.name, b.name) : tb.call(null, a.name, b.name) : null;
}
function vb(a, b, c, d, e) {
  this.L = a;
  this.name = b;
  this.ha = c;
  this.ia = d;
  this.la = e;
  this.h = 2154168321;
  this.o = 4096;
}
g = vb.prototype;
g.v = function(a, b) {
  return D(b, this.ha);
};
g.A = function() {
  var a = this.ia;
  return null != a ? a : this.ia = a = wb.a ? wb.a(E.b ? E.b(this.L) : E.call(null, this.L), E.b ? E.b(this.name) : E.call(null, this.name)) : wb.call(null, E.b ? E.b(this.L) : E.call(null, this.L), E.b ? E.b(this.name) : E.call(null, this.name));
};
g.G = function(a, b) {
  return new vb(this.L, this.name, this.ha, this.ia, b);
};
g.D = function() {
  return this.la;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.c(c, this, null);
      case 3:
        return C.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.b = function(a) {
  return C.c(a, this, null);
};
g.a = function(a, b) {
  return C.c(a, this, b);
};
g.u = function(a, b) {
  return b instanceof vb ? this.ha === b.ha : !1;
};
g.toString = function() {
  return this.ha;
};
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 8388608 || a.Lb)) {
    return a.F(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new xb(a, 0);
  }
  if (r(Za, a)) {
    return $a(a);
  }
  if (t) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null;
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 64 || a.ua)) {
    return a.R(null);
  }
  a = F(a);
  return null == a ? null : A(a);
}
function I(a) {
  return null != a ? a && (a.h & 64 || a.ua) ? a.S(null) : (a = F(a)) ? B(a) : J : J;
}
function L(a) {
  return null == a ? null : a && (a.h & 128 || a.Jb) ? a.aa(null) : F(I(a));
}
var sb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Xa(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (L(e)) {
            a = d, d = G(e), e = L(e);
          } else {
            return b.a(d, G(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = I(a);
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
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.g = c.g;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
xa["null"] = !0;
ya["null"] = function() {
  return 0;
};
Date.prototype.u = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Xa.number = function(a, b) {
  return a === b;
};
Ra["function"] = !0;
Sa["function"] = function() {
  return null;
};
wa["function"] = !0;
Ya._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
var yb = function() {
  function a(a, b, c, d) {
    for (var l = ya(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = ya(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = ya(a);
    if (0 === c) {
      return b.q ? b.q() : b.call(null);
    }
    for (var d = z.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l)), l += 1;
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
  d.l = a;
  return d;
}(), zb = function() {
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
      return b.q ? b.q() : b.call(null);
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
  d.l = a;
  return d;
}();
function Ab(a) {
  return a ? a.h & 2 || a.lb ? !0 : a.h ? !1 : r(xa, a) : r(xa, a);
}
function Bb(a) {
  return a ? a.h & 16 || a.Za ? !0 : a.h ? !1 : r(Ca, a) : r(Ca, a);
}
function xb(a, b) {
  this.d = a;
  this.j = b;
  this.h = 166199550;
  this.o = 8192;
}
g = xb.prototype;
g.A = function() {
  return Cb.b ? Cb.b(this) : Cb.call(null, this);
};
g.aa = function() {
  return this.j + 1 < this.d.length ? new xb(this.d, this.j + 1) : null;
};
g.C = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
g.Da = function() {
  var a = ya(this);
  return 0 < a ? new Db(this, a - 1, null) : null;
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return zb.l(this.d, b, this.d[this.j], this.j + 1);
};
g.Q = function(a, b, c) {
  return zb.l(this.d, b, c, this.j);
};
g.F = function() {
  return this;
};
g.H = function() {
  return this.d.length - this.j;
};
g.R = function() {
  return this.d[this.j];
};
g.S = function() {
  return this.j + 1 < this.d.length ? new xb(this.d, this.j + 1) : J;
};
g.u = function(a, b) {
  return O.a ? O.a(this, b) : O.call(null, this, b);
};
g.J = function(a, b) {
  var c = b + this.j;
  return c < this.d.length ? this.d[c] : null;
};
g.X = function(a, b, c) {
  a = b + this.j;
  return a < this.d.length ? this.d[a] : c;
};
g.I = function() {
  return J;
};
var Eb = function() {
  function a(a, b) {
    return b < a.length ? new xb(a, b) : null;
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
}(), M = function() {
  function a(a, b) {
    return Eb.a(a, b);
  }
  function b(a) {
    return Eb.a(a, 0);
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
function Db(a, b, c) {
  this.Aa = a;
  this.j = b;
  this.i = c;
  this.h = 32374990;
  this.o = 8192;
}
g = Db.prototype;
g.A = function() {
  return Cb.b ? Cb.b(this) : Cb.call(null, this);
};
g.aa = function() {
  return 0 < this.j ? new Db(this.Aa, this.j - 1, null) : null;
};
g.C = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
g.Q = function(a, b, c) {
  return P.c ? P.c(b, c, this) : P.call(null, b, c, this);
};
g.F = function() {
  return this;
};
g.H = function() {
  return this.j + 1;
};
g.R = function() {
  return z.a(this.Aa, this.j);
};
g.S = function() {
  return 0 < this.j ? new Db(this.Aa, this.j - 1, null) : J;
};
g.u = function(a, b) {
  return O.a ? O.a(this, b) : O.call(null, this, b);
};
g.G = function(a, b) {
  return new Db(this.Aa, this.j, b);
};
g.D = function() {
  return this.i;
};
g.I = function() {
  return Fb.a ? Fb.a(J, this.i) : Fb.call(null, J, this.i);
};
Xa._ = function(a, b) {
  return a === b;
};
var Gb = function() {
  function a(a, b) {
    return null != a ? Ba(a, b) : Ba(J, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (p(e)) {
          a = b.a(a, d), d = G(e), e = L(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.k = 2;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = I(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
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
    if (a && (a.h & 2 || a.lb)) {
      a = a.H(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (r(xa, a)) {
            a = ya(a);
          } else {
            if (t) {
              a: {
                a = F(a);
                for (var b = 0;;) {
                  if (Ab(a)) {
                    a = b + ya(a);
                    break a;
                  }
                  a = L(a);
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
var Hb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return F(a) ? G(a) : c;
      }
      if (Bb(a)) {
        return z.c(a, b, c);
      }
      if (F(a)) {
        a = L(a), b -= 1;
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
        if (F(a)) {
          return G(a);
        }
        throw Error("Index out of bounds");
      }
      if (Bb(a)) {
        return z.a(a, b);
      }
      if (F(a)) {
        var c = L(a), h = b - 1;
        a = c;
        b = h;
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
  c.c = a;
  return c;
}(), R = function() {
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
    if (r(Ca, a)) {
      return z.a(a, b);
    }
    if (a ? a.h & 64 || a.ua || (a.h ? 0 : r(Da, a)) : r(Da, a)) {
      return Hb.c(a, b, c);
    }
    if (t) {
      throw Error([w("nth not supported on this type "), w(ua(ta(a)))].join(""));
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
      return a.J(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(Ca, a)) {
      return z.a(a, b);
    }
    if (a ? a.h & 64 || a.ua || (a.h ? 0 : r(Da, a)) : r(Da, a)) {
      return Hb.a(a, b);
    }
    if (t) {
      throw Error([w("nth not supported on this type "), w(ua(ta(a)))].join(""));
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
}(), Ib = function() {
  function a(a, b, c) {
    return null != a ? a && (a.h & 256 || a.$a) ? a.O(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r(Fa, a) ? C.c(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.h & 256 || a.$a) ? a.N(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : r(Fa, a) ? C.a(a, b) : null;
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
}(), Kb = function() {
  function a(a, b, c) {
    return null != a ? Ga(a, b, c) : Jb.a ? Jb.a([b], [c]) : Jb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), p(l)) {
          d = G(l), e = G(L(l)), l = L(L(l));
        } else {
          return a;
        }
      }
    }
    a.k = 3;
    a.g = function(a) {
      var b = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var l = G(a);
      a = I(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 3;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b;
}();
function Lb(a) {
  var b = "function" == m(a);
  return b ? b : a ? p(p(null) ? null : a.kb) ? !0 : a.yb ? !1 : r(wa, a) : r(wa, a);
}
var Fb = function Mb(b, c) {
  return Lb(b) && !(b ? b.h & 262144 || b.Ob || (b.h ? 0 : r(Ta, b)) : r(Ta, b)) ? Mb(function() {
    "undefined" === typeof ia && (ia = function(b, c, f, h) {
      this.i = b;
      this.za = c;
      this.Cb = f;
      this.zb = h;
      this.o = 0;
      this.h = 393217;
    }, ia.hb = !0, ia.gb = "cljs.core/t5036", ia.xb = function(b) {
      return D(b, "cljs.core/t5036");
    }, ia.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return S.a ? S.a(b.za, d) : S.call(null, b.za, d);
      }
      b.k = 1;
      b.g = function(b) {
        var d = G(b);
        b = I(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ia.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(x(c)));
    }, ia.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return S.a ? S.a(self__.za, b) : S.call(null, self__.za, b);
      }
      b.k = 0;
      b.g = function(b) {
        b = F(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), ia.prototype.kb = !0, ia.prototype.D = function() {
      return this.zb;
    }, ia.prototype.G = function(b, c) {
      return new ia(this.i, this.za, this.Cb, c);
    });
    return new ia(c, b, Mb, null);
  }(), c) : null == b ? null : Ua(b, c);
};
function Nb(a) {
  var b = null != a;
  return(b ? a ? a.h & 131072 || a.pb || (a.h ? 0 : r(Ra, a)) : r(Ra, a) : b) ? Sa(a) : null;
}
var Ob = {}, Pb = 0;
function E(a) {
  if (a && (a.h & 4194304 || a.Hb)) {
    a = a.A(null);
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
            255 < Pb && (Ob = {}, Pb = 0);
            var b = Ob[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Ob[a] = b;
              Pb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : t ? Ya(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Qb(a) {
  return a ? a.h & 16384 || a.Nb ? !0 : a.h ? !1 : r(Oa, a) : r(Oa, a);
}
function Rb(a) {
  return a ? a.o & 512 || a.Db ? !0 : !1 : !1;
}
function Sb(a) {
  var b = [];
  ea(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function Tb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Ub = {};
function Vb(a) {
  return null == a ? !1 : a ? a.h & 64 || a.ua ? !0 : a.h ? !1 : r(Da, a) : r(Da, a);
}
function Wb(a) {
  return p(a) ? !0 : !1;
}
function tb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (ta(a) === ta(b)) {
    return a && (a.o & 2048 || a.Ba) ? a.Ca(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Xb = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = tb(R.a(a, h), R.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = Q(a), h = Q(b);
    return f < h ? -1 : f > h ? 1 : t ? c.l(a, b, f, 0) : null;
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
  c.l = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    for (c = F(c);;) {
      if (c) {
        b = a.a ? a.a(b, G(c)) : a.call(null, b, G(c)), c = L(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = F(b);
    return c ? Yb.c ? Yb.c(a, G(c), L(c)) : Yb.call(null, a, G(c), L(c)) : a.q ? a.q() : a.call(null);
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
}(), Yb = function() {
  function a(a, b, c) {
    return c && (c.h & 524288 || c.rb) ? c.Q(null, a, b) : c instanceof Array ? zb.c(c, a, b) : "string" === typeof c ? zb.c(c, a, b) : r(Va, c) ? Wa.c(c, a, b) : t ? P.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.h & 524288 || b.rb) ? b.P(null, a) : b instanceof Array ? zb.a(b, a) : "string" === typeof b ? zb.a(b, a) : r(Va, b) ? Wa.a(b, a) : t ? P.a(a, b) : null;
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
}(), Zb = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Yb.c(a, b + c, d);
    }
    b.k = 2;
    b.g = function(a) {
      var b = G(a);
      a = L(a);
      var c = G(a);
      a = I(a);
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
        return b.e(a, d, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.g = b.g;
  a.q = function() {
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
function $b(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.b ? Math.floor.b((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.b ? Math.ceil.b((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2);
}
function ac(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new fa(b.b(a)), l = d;;) {
        if (p(l)) {
          e = e.append(b.b(G(l))), l = L(l);
        } else {
          return e.toString();
        }
      }
    }
    a.k = 1;
    a.g = function(a) {
      var b = G(a);
      a = I(a);
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
        return c.e(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.g = c.g;
  b.q = function() {
    return "";
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
function O(a, b) {
  return Wb((b ? b.h & 16777216 || b.Mb || (b.h ? 0 : r(ab, b)) : r(ab, b)) ? function() {
    for (var c = F(a), d = F(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (sb.a(G(c), G(d))) {
        c = L(c), d = L(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function wb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Cb(a) {
  if (F(a)) {
    var b = E(G(a));
    for (a = L(a);;) {
      if (null == a) {
        return b;
      }
      b = wb(b, E(G(a)));
      a = L(a);
    }
  } else {
    return 0;
  }
}
function bc(a) {
  var b = 0;
  for (a = F(a);;) {
    if (a) {
      var c = G(a), b = (b + (E(cc.b ? cc.b(c) : cc.call(null, c)) ^ E(dc.b ? dc.b(c) : dc.call(null, c)))) % 4503599627370496;
      a = L(a);
    } else {
      return b;
    }
  }
}
function ec(a, b, c, d, e) {
  this.i = a;
  this.pa = b;
  this.ea = c;
  this.count = d;
  this.m = e;
  this.h = 65937646;
  this.o = 8192;
}
g = ec.prototype;
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Cb(this);
};
g.aa = function() {
  return 1 === this.count ? null : this.ea;
};
g.C = function(a, b) {
  return new ec(this.i, b, this, this.count + 1, null);
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return P.a(b, this);
};
g.Q = function(a, b, c) {
  return P.c(b, c, this);
};
g.F = function() {
  return this;
};
g.H = function() {
  return this.count;
};
g.va = function() {
  return this.pa;
};
g.wa = function() {
  return B(this);
};
g.R = function() {
  return this.pa;
};
g.S = function() {
  return 1 === this.count ? J : this.ea;
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return new ec(b, this.pa, this.ea, this.count, this.m);
};
g.D = function() {
  return this.i;
};
g.I = function() {
  return J;
};
function fc(a) {
  this.i = a;
  this.h = 65937614;
  this.o = 8192;
}
g = fc.prototype;
g.A = function() {
  return 0;
};
g.aa = function() {
  return null;
};
g.C = function(a, b) {
  return new ec(this.i, b, null, 1, null);
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return P.a(b, this);
};
g.Q = function(a, b, c) {
  return P.c(b, c, this);
};
g.F = function() {
  return null;
};
g.H = function() {
  return 0;
};
g.va = function() {
  return null;
};
g.wa = function() {
  throw Error("Can't pop empty list");
};
g.R = function() {
  return null;
};
g.S = function() {
  return J;
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return new fc(b);
};
g.D = function() {
  return this.i;
};
g.I = function() {
  return this;
};
var J = new fc(null);
function gc(a) {
  return(a ? a.h & 134217728 || a.Kb || (a.h ? 0 : r(bb, a)) : r(bb, a)) ? cb(a) : Yb.c(Gb, J, a);
}
var hc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof xb && 0 === a.j) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.R(null)), a = a.aa(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = J;;) {
      if (0 < a) {
        var f = a - 1, e = e.C(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.k = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ic(a, b, c, d) {
  this.i = a;
  this.pa = b;
  this.ea = c;
  this.m = d;
  this.h = 65929452;
  this.o = 8192;
}
g = ic.prototype;
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Cb(this);
};
g.aa = function() {
  return null == this.ea ? null : F(this.ea);
};
g.C = function(a, b) {
  return new ic(null, b, this, this.m);
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return P.a(b, this);
};
g.Q = function(a, b, c) {
  return P.c(b, c, this);
};
g.F = function() {
  return this;
};
g.R = function() {
  return this.pa;
};
g.S = function() {
  return null == this.ea ? J : this.ea;
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return new ic(b, this.pa, this.ea, this.m);
};
g.D = function() {
  return this.i;
};
g.I = function() {
  return Fb(J, this.i);
};
function N(a, b) {
  var c = null == b;
  return(c ? c : b && (b.h & 64 || b.ua)) ? new ic(null, a, b, null) : new ic(null, a, F(b), null);
}
function T(a, b, c, d) {
  this.L = a;
  this.name = b;
  this.ga = c;
  this.ia = d;
  this.h = 2153775105;
  this.o = 4096;
}
g = T.prototype;
g.v = function(a, b) {
  return D(b, [w(":"), w(this.ga)].join(""));
};
g.A = function() {
  null == this.ia && (this.ia = wb(E(this.L), E(this.name)) + 2654435769);
  return this.ia;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ib.a(c, this);
      case 3:
        return Ib.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.b = function(a) {
  return Ib.a(a, this);
};
g.a = function(a, b) {
  return Ib.c(a, this, b);
};
g.u = function(a, b) {
  return b instanceof T ? this.ga === b.ga : !1;
};
g.toString = function() {
  return[w(":"), w(this.ga)].join("");
};
var kc = function() {
  function a(a, b) {
    return new T(a, b, [w(p(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof T) {
      return a;
    }
    if (a instanceof vb) {
      var b;
      if (a && (a.o & 4096 || a.qb)) {
        b = a.L;
      } else {
        throw Error([w("Doesn't support namespace: "), w(a)].join(""));
      }
      return new T(b, jc.b ? jc.b(a) : jc.call(null, a), a.ha, null);
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
function V(a, b, c, d) {
  this.i = a;
  this.qa = b;
  this.r = c;
  this.m = d;
  this.o = 0;
  this.h = 32374988;
}
g = V.prototype;
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Cb(this);
};
g.aa = function() {
  $a(this);
  return null == this.r ? null : L(this.r);
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return qb(this);
};
function lc(a) {
  null != a.qa && (a.r = a.qa.q ? a.qa.q() : a.qa.call(null), a.qa = null);
  return a.r;
}
g.P = function(a, b) {
  return P.a(b, this);
};
g.Q = function(a, b, c) {
  return P.c(b, c, this);
};
g.F = function() {
  lc(this);
  if (null == this.r) {
    return null;
  }
  for (var a = this.r;;) {
    if (a instanceof V) {
      a = lc(a);
    } else {
      return this.r = a, F(this.r);
    }
  }
};
g.R = function() {
  $a(this);
  return null == this.r ? null : G(this.r);
};
g.S = function() {
  $a(this);
  return null != this.r ? I(this.r) : J;
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return new V(b, this.qa, this.r, this.m);
};
g.D = function() {
  return this.i;
};
g.I = function() {
  return Fb(J, this.i);
};
function mc(a, b) {
  this.Ga = a;
  this.end = b;
  this.o = 0;
  this.h = 2;
}
mc.prototype.H = function() {
  return this.end;
};
mc.prototype.add = function(a) {
  this.Ga[this.end] = a;
  return this.end += 1;
};
mc.prototype.M = function() {
  var a = new nc(this.Ga, 0, this.end);
  this.Ga = null;
  return a;
};
function nc(a, b, c) {
  this.d = a;
  this.s = b;
  this.end = c;
  this.o = 0;
  this.h = 524306;
}
g = nc.prototype;
g.P = function(a, b) {
  return zb.l(this.d, b, this.d[this.s], this.s + 1);
};
g.Q = function(a, b, c) {
  return zb.l(this.d, b, c, this.s);
};
g.Ya = function() {
  if (this.s === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new nc(this.d, this.s + 1, this.end);
};
g.J = function(a, b) {
  return this.d[this.s + b];
};
g.X = function(a, b, c) {
  return 0 <= b && b < this.end - this.s ? this.d[this.s + b] : c;
};
g.H = function() {
  return this.end - this.s;
};
var oc = function() {
  function a(a, b, c) {
    return new nc(a, b, c);
  }
  function b(a, b) {
    return new nc(a, b, a.length);
  }
  function c(a) {
    return new nc(a, 0, a.length);
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
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function pc(a, b, c, d) {
  this.M = a;
  this.ba = b;
  this.i = c;
  this.m = d;
  this.h = 31850732;
  this.o = 1536;
}
g = pc.prototype;
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Cb(this);
};
g.aa = function() {
  if (1 < ya(this.M)) {
    return new pc(lb(this.M), this.ba, this.i, null);
  }
  var a = $a(this.ba);
  return null == a ? null : a;
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return qb(this);
};
g.F = function() {
  return this;
};
g.R = function() {
  return z.a(this.M, 0);
};
g.S = function() {
  return 1 < ya(this.M) ? new pc(lb(this.M), this.ba, this.i, null) : null == this.ba ? J : this.ba;
};
g.Ha = function() {
  return null == this.ba ? null : this.ba;
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return new pc(this.M, this.ba, b, this.m);
};
g.D = function() {
  return this.i;
};
g.I = function() {
  return Fb(J, this.i);
};
g.Ia = function() {
  return this.M;
};
g.Ja = function() {
  return null == this.ba ? J : this.ba;
};
function qc(a, b) {
  return 0 === ya(a) ? b : new pc(a, b, null, null);
}
function rc(a) {
  for (var b = [];;) {
    if (F(a)) {
      b.push(G(a)), a = L(a);
    } else {
      return b;
    }
  }
}
function sc(a, b) {
  if (Ab(a)) {
    return Q(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && F(c)) {
      c = L(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var uc = function tc(b) {
  return null == b ? null : null == L(b) ? F(G(b)) : t ? N(G(b), tc(L(b))) : null;
}, vc = function() {
  function a(a, b) {
    return new V(null, function() {
      var c = F(a);
      return c ? Rb(c) ? qc(mb(c), d.a(nb(c), b)) : N(G(c), d.a(I(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new V(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new V(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function s(a, b) {
        return new V(null, function() {
          var c = F(a);
          return c ? Rb(c) ? qc(mb(c), s(nb(c), b)) : N(G(c), s(I(c), b)) : p(b) ? s(G(b), L(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.k = 2;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = I(a);
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
        return e.e(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 2;
  d.g = e.g;
  d.q = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), wc = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)));
  }
  function b(a, b, c) {
    return N(a, N(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, q) {
      var s = null;
      4 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, s);
    }
    function b(a, c, d, e, f) {
      return N(a, N(c, N(d, N(e, uc(f)))));
    }
    a.k = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var q = G(a);
      a = I(a);
      return b(c, d, e, q, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return F(c);
      case 2:
        return N(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.e(c, f, h, k, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 4;
  c.g = d.g;
  c.b = function(a) {
    return F(a);
  };
  c.a = function(a, b) {
    return N(a, b);
  };
  c.c = b;
  c.l = a;
  c.e = d.e;
  return c;
}();
function xc(a) {
  return ib(a);
}
var yc = function() {
  var a = null, b = function() {
    function a(c, f, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = hb(a, c), p(d)) {
          c = G(d), d = L(d);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var h = G(a);
      a = I(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return hb(a, d);
      default:
        return b.e(a, d, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.g = b.g;
  a.a = function(a, b) {
    return hb(a, b);
  };
  a.e = b.e;
  return a;
}(), zc = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = jb(a, c, d), p(k)) {
          c = G(k), d = G(L(k)), k = L(L(k));
        } else {
          return a;
        }
      }
    }
    a.k = 3;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var h = G(a);
      a = L(a);
      var k = G(a);
      a = I(a);
      return b(c, h, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return jb(a, d, e);
      default:
        return b.e(a, d, e, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 3;
  a.g = b.g;
  a.c = function(a, b, e) {
    return jb(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function Ac(a, b, c) {
  var d = F(c);
  if (0 === b) {
    return a.q ? a.q() : a.call(null);
  }
  c = A(d);
  var e = B(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = A(e), f = B(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = A(f), h = B(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = A(h), k = B(h);
  if (4 === b) {
    return a.l ? a.l(c, d, e, f) : a.l ? a.l(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = A(k), l = B(k);
  if (5 === b) {
    return a.p ? a.p(c, d, e, f, h) : a.p ? a.p(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = A(l), n = B(l);
  if (6 === b) {
    return a.da ? a.da(c, d, e, f, h, k) : a.da ? a.da(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = A(n), q = B(n);
  if (7 === b) {
    return a.ma ? a.ma(c, d, e, f, h, k, l) : a.ma ? a.ma(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var n = A(q), s = B(q);
  if (8 === b) {
    return a.Va ? a.Va(c, d, e, f, h, k, l, n) : a.Va ? a.Va(c, d, e, f, h, k, l, n) : a.call(null, c, d, e, f, h, k, l, n);
  }
  var q = A(s), v = B(s);
  if (9 === b) {
    return a.Wa ? a.Wa(c, d, e, f, h, k, l, n, q) : a.Wa ? a.Wa(c, d, e, f, h, k, l, n, q) : a.call(null, c, d, e, f, h, k, l, n, q);
  }
  var s = A(v), H = B(v);
  if (10 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, l, n, q, s) : a.Ka ? a.Ka(c, d, e, f, h, k, l, n, q, s) : a.call(null, c, d, e, f, h, k, l, n, q, s);
  }
  var v = A(H), y = B(H);
  if (11 === b) {
    return a.La ? a.La(c, d, e, f, h, k, l, n, q, s, v) : a.La ? a.La(c, d, e, f, h, k, l, n, q, s, v) : a.call(null, c, d, e, f, h, k, l, n, q, s, v);
  }
  var H = A(y), K = B(y);
  if (12 === b) {
    return a.Ma ? a.Ma(c, d, e, f, h, k, l, n, q, s, v, H) : a.Ma ? a.Ma(c, d, e, f, h, k, l, n, q, s, v, H) : a.call(null, c, d, e, f, h, k, l, n, q, s, v, H);
  }
  var y = A(K), U = B(K);
  if (13 === b) {
    return a.Na ? a.Na(c, d, e, f, h, k, l, n, q, s, v, H, y) : a.Na ? a.Na(c, d, e, f, h, k, l, n, q, s, v, H, y) : a.call(null, c, d, e, f, h, k, l, n, q, s, v, H, y);
  }
  var K = A(U), W = B(U);
  if (14 === b) {
    return a.Oa ? a.Oa(c, d, e, f, h, k, l, n, q, s, v, H, y, K) : a.Oa ? a.Oa(c, d, e, f, h, k, l, n, q, s, v, H, y, K) : a.call(null, c, d, e, f, h, k, l, n, q, s, v, H, y, K);
  }
  var U = A(W), ga = B(W);
  if (15 === b) {
    return a.Pa ? a.Pa(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U) : a.Pa ? a.Pa(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U) : a.call(null, c, d, e, f, h, k, l, n, q, s, v, H, y, K, U);
  }
  var W = A(ga), qa = B(ga);
  if (16 === b) {
    return a.Qa ? a.Qa(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W) : a.Qa ? a.Qa(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W) : a.call(null, c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W);
  }
  var ga = A(qa), Ea = B(qa);
  if (17 === b) {
    return a.Ra ? a.Ra(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga) : a.Ra ? a.Ra(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga) : a.call(null, c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga);
  }
  var qa = A(Ea), Na = B(Ea);
  if (18 === b) {
    return a.Sa ? a.Sa(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga, qa) : a.Sa ? a.Sa(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga, qa) : a.call(null, c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga, qa);
  }
  Ea = A(Na);
  Na = B(Na);
  if (19 === b) {
    return a.Ta ? a.Ta(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga, qa, Ea) : a.Ta ? a.Ta(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga, qa, Ea) : a.call(null, c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga, qa, Ea);
  }
  var Jc = A(Na);
  B(Na);
  if (20 === b) {
    return a.Ua ? a.Ua(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga, qa, Ea, Jc) : a.Ua ? a.Ua(c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga, qa, Ea, Jc) : a.call(null, c, d, e, f, h, k, l, n, q, s, v, H, y, K, U, W, ga, qa, Ea, Jc);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, f) {
    b = wc.l(b, c, d, f);
    c = a.k;
    return a.g ? (d = sc(b, c + 1), d <= c ? Ac(a, d, b) : a.g(b)) : a.apply(a, rc(b));
  }
  function b(a, b, c, d) {
    b = wc.c(b, c, d);
    c = a.k;
    return a.g ? (d = sc(b, c + 1), d <= c ? Ac(a, d, b) : a.g(b)) : a.apply(a, rc(b));
  }
  function c(a, b, c) {
    b = wc.a(b, c);
    c = a.k;
    if (a.g) {
      var d = sc(b, c + 1);
      return d <= c ? Ac(a, d, b) : a.g(b);
    }
    return a.apply(a, rc(b));
  }
  function d(a, b) {
    var c = a.k;
    if (a.g) {
      var d = sc(b, c + 1);
      return d <= c ? Ac(a, d, b) : a.g(b);
    }
    return a.apply(a, rc(b));
  }
  var e = null, f = function() {
    function a(c, d, f, e, h, H) {
      var y = null;
      5 < arguments.length && (y = M(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, e, h, y);
    }
    function b(a, c, d, f, e, h) {
      c = N(c, N(d, N(f, N(e, uc(h)))));
      d = a.k;
      return a.g ? (f = sc(c, d + 1), f <= d ? Ac(a, f, c) : a.g(c)) : a.apply(a, rc(c));
    }
    a.k = 5;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var f = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var h = G(a);
      a = I(a);
      return b(c, d, f, e, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, q, s) {
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
        return f.e(e, k, l, n, q, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = 5;
  e.g = f.g;
  e.a = d;
  e.c = c;
  e.l = b;
  e.p = a;
  e.e = f.e;
  return e;
}(), Bc = function() {
  function a(a, b) {
    return!sb.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return sa(S.l(sb, a, c, d));
    }
    a.k = 2;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = I(a);
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
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.g = c.g;
  b.b = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Cc(a, b) {
  for (;;) {
    if (null == F(b)) {
      return!0;
    }
    if (p(a.b ? a.b(G(b)) : a.call(null, G(b)))) {
      var c = a, d = L(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function Dc(a) {
  return a;
}
var Ec = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, f);
        }
        function k(d, l, n, q) {
          return a.b ? a.b(b.b ? b.b(S.p(c, d, l, n, q)) : b.call(null, S.p(c, d, l, n, q))) : a.call(null, b.b ? b.b(S.p(c, d, l, n, q)) : b.call(null, S.p(c, d, l, n, q)));
        }
        d.k = 3;
        d.g = function(a) {
          var b = G(a);
          a = L(a);
          var c = G(a);
          a = L(a);
          var d = G(a);
          a = I(a);
          return k(b, c, d, a);
        };
        d.e = k;
        return d;
      }(), d = function(d, k, s, v) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.b ? b.b(c.q ? c.q() : c.call(null)) : b.call(null, c.q ? c.q() : c.call(null))) : a.call(null, b.b ? b.b(c.q ? c.q() : c.call(null)) : b.call(null, c.q ? c.q() : c.call(null)));
          case 1:
            return a.b ? a.b(b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d))) : a.call(null, b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d)));
          case 2:
            return a.b ? a.b(b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k))) : a.call(null, b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k)));
          case 3:
            return a.b ? a.b(b.b ? b.b(c.c ? c.c(d, k, s) : c.call(null, d, k, s)) : b.call(null, c.c ? c.c(d, k, s) : c.call(null, d, k, s))) : a.call(null, b.b ? b.b(c.c ? c.c(d, k, s) : c.call(null, d, k, s)) : b.call(null, c.c ? c.c(d, k, s) : c.call(null, d, k, s)));
          default:
            return l.e(d, k, s, M(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.k = 3;
      d.g = l.g;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var h = null;
          3 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h);
        }
        function d(c, h, k, l) {
          return a.b ? a.b(S.p(b, c, h, k, l)) : a.call(null, S.p(b, c, h, k, l));
        }
        c.k = 3;
        c.g = function(a) {
          var b = G(a);
          a = L(a);
          var c = G(a);
          a = L(a);
          var e = G(a);
          a = I(a);
          return d(b, c, e, a);
        };
        c.e = d;
        return c;
      }(), c = function(c, h, q, s) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.q ? b.q() : b.call(null)) : a.call(null, b.q ? b.q() : b.call(null));
          case 1:
            return a.b ? a.b(b.b ? b.b(c) : b.call(null, c)) : a.call(null, b.b ? b.b(c) : b.call(null, c));
          case 2:
            return a.b ? a.b(b.a ? b.a(c, h) : b.call(null, c, h)) : a.call(null, b.a ? b.a(c, h) : b.call(null, c, h));
          case 3:
            return a.b ? a.b(b.c ? b.c(c, h, q) : b.call(null, c, h, q)) : a.call(null, b.c ? b.c(c, h, q) : b.call(null, c, h, q));
          default:
            return d.e(c, h, q, M(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.k = 3;
      c.g = d.g;
      return c;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, n) {
      var q = null;
      3 < arguments.length && (q = M(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, q);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
            return c.call(this, d);
          }
          function c(b) {
            b = S.a(G(a), b);
            for (var d = L(a);;) {
              if (d) {
                b = G(d).call(null, b), d = L(d);
              } else {
                return b;
              }
            }
          }
          b.k = 0;
          b.g = function(a) {
            a = F(a);
            return c(a);
          };
          b.e = c;
          return b;
        }();
      }(gc(wc.l(a, c, d, e)));
    }
    a.k = 3;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = I(a);
      return b(c, d, e, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, h, k) {
    switch(arguments.length) {
      case 0:
        return Dc;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h);
      default:
        return d.e(c, f, h, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 3;
  c.g = d.g;
  c.q = function() {
    return Dc;
  };
  c.b = function(a) {
    return a;
  };
  c.a = b;
  c.c = a;
  c.e = d.e;
  return c;
}(), Fc = function() {
  function a(a, b, c, e) {
    return new V(null, function() {
      var n = F(b), q = F(c), s = F(e);
      return n && q && s ? N(a.c ? a.c(G(n), G(q), G(s)) : a.call(null, G(n), G(q), G(s)), d.l(a, I(n), I(q), I(s))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new V(null, function() {
      var e = F(b), n = F(c);
      return e && n ? N(a.a ? a.a(G(e), G(n)) : a.call(null, G(e), G(n)), d.c(a, I(e), I(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new V(null, function() {
      var c = F(b);
      if (c) {
        if (Rb(c)) {
          for (var e = mb(c), n = Q(e), q = new mc(Array(n), 0), s = 0;;) {
            if (s < n) {
              var v = a.b ? a.b(z.a(e, s)) : a.call(null, z.a(e, s));
              q.add(v);
              s += 1;
            } else {
              break;
            }
          }
          return qc(q.M(), d.a(a, nb(c)));
        }
        return N(a.b ? a.b(G(c)) : a.call(null, G(c)), d.a(a, I(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var v = null;
      4 < arguments.length && (v = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, e, f, h) {
      var v = function y(a) {
        return new V(null, function() {
          var b = d.a(F, a);
          return Cc(Dc, b) ? N(d.a(G, b), y(d.a(I, b))) : null;
        }, null, null);
      };
      return d.a(function() {
        return function(b) {
          return S.a(a, b);
        };
      }(v), v(Gb.e(h, f, M([e, c], 0))));
    }
    a.k = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var f = G(a);
      a = I(a);
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
        return e.e(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.l = a;
  d.e = e.e;
  return d;
}(), Hc = function Gc(b, c) {
  return new V(null, function() {
    if (0 < b) {
      var d = F(c);
      return d ? N(G(d), Gc(b - 1, I(d))) : null;
    }
    return null;
  }, null, null);
};
function Ic(a, b) {
  return new V(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = F(b);
      if (0 < a && e) {
        var f = a - 1, e = I(e);
        a = f;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function Kc(a, b) {
  return null != a ? a && (a.o & 4 || a.Fb) ? xc(Yb.c(hb, gb(a), b)) : Yb.c(Ba, a, b) : Yb.c(Gb, J, b);
}
var Mc = function() {
  function a(a, b, c, d) {
    return Kc(Lc, Fc.l(a, b, c, d));
  }
  function b(a, b, c) {
    return Kc(Lc, Fc.c(a, b, c));
  }
  function c(a, b) {
    return xc(Yb.c(function(b, c) {
      return yc.a(b, a.b ? a.b(c) : a.call(null, c));
    }, gb(Lc), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var v = null;
      4 < arguments.length && (v = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, d, e, f) {
      return Kc(Lc, S.e(Fc, a, c, d, e, M([f], 0)));
    }
    a.k = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var f = G(a);
      a = I(a);
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
        return e.e(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.l = a;
  d.e = e.e;
  return d;
}(), Nc = function() {
  function a(a, b, c, k) {
    return new V(null, function() {
      var l = F(k);
      if (l) {
        var n = Hc(a, l);
        return a === Q(n) ? N(n, d.l(a, b, c, Ic(b, l))) : Ba(J, Hc(a, vc.a(n, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new V(null, function() {
      var k = F(c);
      if (k) {
        var l = Hc(a, k);
        return a === Q(l) ? N(l, d.c(a, b, Ic(b, k))) : null;
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
  d.l = a;
  return d;
}(), Oc = function() {
  function a(a, b, c) {
    var h = Ub;
    for (b = F(b);;) {
      if (b) {
        var k = a;
        if (k ? k.h & 256 || k.$a || (k.h ? 0 : r(Fa, k)) : r(Fa, k)) {
          a = Ib.c(a, G(b), h);
          if (h === a) {
            return c;
          }
          b = L(b);
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
}(), Qc = function Pc(b, c, d) {
  var e = R.c(c, 0, null), f;
  a: {
    f = 1;
    for (c = F(c);;) {
      if (c && 0 < f) {
        f -= 1, c = L(c);
      } else {
        f = c;
        break a;
      }
    }
    f = void 0;
  }
  return f ? Kb.c(b, e, Pc(Ib.a(b, e), f, d)) : Kb.c(b, e, d);
};
function Rc(a, b) {
  this.n = a;
  this.d = b;
}
function Sc(a) {
  return new Rc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Tc(a) {
  return new Rc(a.n, x(a.d));
}
function Uc(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Vc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Sc(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var Xc = function Wc(b, c, d, e) {
  var f = Tc(d), h = b.f - 1 >>> c & 31;
  5 === c ? f.d[h] = e : (d = d.d[h], b = null != d ? Wc(b, c - 5, d, e) : Vc(null, c - 5, e), f.d[h] = b);
  return f;
};
function Yc(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function Zc(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.d[0];
    } else {
      return b.d;
    }
  }
}
function $c(a, b) {
  if (b >= Uc(a)) {
    return a.B;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.d[b >>> d & 31], d = e
    } else {
      return c.d;
    }
  }
}
function ad(a, b) {
  return 0 <= b && b < a.f ? $c(a, b) : Yc(b, a.f);
}
var cd = function bd(b, c, d, e, f) {
  var h = Tc(d);
  if (0 === c) {
    h.d[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = bd(b, c - 5, d.d[k], e, f);
    h.d[k] = b;
  }
  return h;
}, ed = function dd(b, c, d) {
  var e = b.f - 2 >>> c & 31;
  if (5 < c) {
    b = dd(b, c - 5, d.d[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Tc(d);
    d.d[e] = b;
    return d;
  }
  return 0 === e ? null : t ? (d = Tc(d), d.d[e] = null, d) : null;
};
function X(a, b, c, d, e, f) {
  this.i = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.B = e;
  this.m = f;
  this.o = 8196;
  this.h = 167668511;
}
g = X.prototype;
g.ta = function() {
  return new fd(this.f, this.shift, gd.b ? gd.b(this.root) : gd.call(null, this.root), hd.b ? hd.b(this.B) : hd.call(null, this.B));
};
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Cb(this);
};
g.N = function(a, b) {
  return C.c(this, b, null);
};
g.O = function(a, b, c) {
  return "number" === typeof b ? z.c(this, b, c) : c;
};
g.sa = function(a, b, c) {
  if ("number" === typeof b) {
    return Pa(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.b = function(a) {
  return this.J(null, a);
};
g.a = function(a, b) {
  return this.X(null, a, b);
};
g.C = function(a, b) {
  if (32 > this.f - Uc(this)) {
    for (var c = this.B.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.B[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.i, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Sc(null), d.d[0] = this.root, e = Vc(null, this.shift, new Rc(null, this.B)), d.d[1] = e) : d = Xc(this, this.shift, this.root, new Rc(null, this.B));
  return new X(this.i, this.f + 1, c, d, [b], null);
};
g.Da = function() {
  return 0 < this.f ? new Db(this, this.f - 1, null) : null;
};
g.ab = function() {
  return z.a(this, 0);
};
g.bb = function() {
  return z.a(this, 1);
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return yb.a(this, b);
};
g.Q = function(a, b, c) {
  return yb.c(this, b, c);
};
g.F = function() {
  return 0 === this.f ? null : 32 >= this.f ? new xb(this.B, 0) : t ? Y.l ? Y.l(this, Zc(this), 0, 0) : Y.call(null, this, Zc(this), 0, 0) : null;
};
g.H = function() {
  return this.f;
};
g.va = function() {
  return 0 < this.f ? z.a(this, this.f - 1) : null;
};
g.wa = function() {
  if (0 === this.f) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.f) {
    return Ua(Lc, this.i);
  }
  if (1 < this.f - Uc(this)) {
    return new X(this.i, this.f - 1, this.shift, this.root, this.B.slice(0, -1), null);
  }
  if (t) {
    var a = $c(this, this.f - 2), b = ed(this, this.shift, this.root), b = null == b ? Z : b, c = this.f - 1;
    return 5 < this.shift && null == b.d[1] ? new X(this.i, c, this.shift - 5, b.d[0], a, null) : new X(this.i, c, this.shift, b, a, null);
  }
  return null;
};
g.Xa = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return Uc(this) <= b ? (a = x(this.B), a[b & 31] = c, new X(this.i, this.f, this.shift, this.root, a, null)) : new X(this.i, this.f, this.shift, cd(this, this.shift, this.root, b, c), this.B, null);
  }
  if (b === this.f) {
    return Ba(this, c);
  }
  if (t) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.f), w("]")].join(""));
  }
  return null;
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return new X(b, this.f, this.shift, this.root, this.B, this.m);
};
g.D = function() {
  return this.i;
};
g.J = function(a, b) {
  return ad(this, b)[b & 31];
};
g.X = function(a, b, c) {
  return 0 <= b && b < this.f ? $c(this, b)[b & 31] : c;
};
g.I = function() {
  return Fb(Lc, this.i);
};
var Z = new Rc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Lc = new X(null, 0, 5, Z, [], 0);
function id(a, b) {
  var c = a.length, d = b ? a : x(a);
  if (32 > c) {
    return new X(null, c, 5, Z, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, h = (new X(null, 32, 5, Z, e, null)).ta(null);;) {
    if (f < c) {
      e = f + 1, h = yc.a(h, d[f]), f = e;
    } else {
      return ib(h);
    }
  }
}
function jd(a) {
  return ib(Yb.c(hb, gb(Lc), a));
}
var kd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof xb && 0 === a.j ? id.a ? id.a(a.d, !0) : id.call(null, a.d, !0) : jd(a);
  }
  a.k = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ld(a, b, c, d, e, f) {
  this.t = a;
  this.W = b;
  this.j = c;
  this.s = d;
  this.i = e;
  this.m = f;
  this.h = 32243948;
  this.o = 1536;
}
g = ld.prototype;
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Cb(this);
};
g.aa = function() {
  if (this.s + 1 < this.W.length) {
    var a = Y.l ? Y.l(this.t, this.W, this.j, this.s + 1) : Y.call(null, this.t, this.W, this.j, this.s + 1);
    return null == a ? null : a;
  }
  return ob(this);
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return yb.a(md.c ? md.c(this.t, this.j + this.s, Q(this.t)) : md.call(null, this.t, this.j + this.s, Q(this.t)), b);
};
g.Q = function(a, b, c) {
  return yb.c(md.c ? md.c(this.t, this.j + this.s, Q(this.t)) : md.call(null, this.t, this.j + this.s, Q(this.t)), b, c);
};
g.F = function() {
  return this;
};
g.R = function() {
  return this.W[this.s];
};
g.S = function() {
  if (this.s + 1 < this.W.length) {
    var a = Y.l ? Y.l(this.t, this.W, this.j, this.s + 1) : Y.call(null, this.t, this.W, this.j, this.s + 1);
    return null == a ? J : a;
  }
  return nb(this);
};
g.Ha = function() {
  var a = this.j + this.W.length;
  return a < ya(this.t) ? Y.l ? Y.l(this.t, $c(this.t, a), a, 0) : Y.call(null, this.t, $c(this.t, a), a, 0) : null;
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return Y.p ? Y.p(this.t, this.W, this.j, this.s, b) : Y.call(null, this.t, this.W, this.j, this.s, b);
};
g.I = function() {
  return Fb(Lc, this.i);
};
g.Ia = function() {
  return oc.a(this.W, this.s);
};
g.Ja = function() {
  var a = this.j + this.W.length;
  return a < ya(this.t) ? Y.l ? Y.l(this.t, $c(this.t, a), a, 0) : Y.call(null, this.t, $c(this.t, a), a, 0) : J;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new ld(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new ld(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new ld(a, ad(a, b), b, c, null, null);
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
  d.l = b;
  d.p = a;
  return d;
}();
function nd(a, b, c, d, e) {
  this.i = a;
  this.U = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.h = 166617887;
  this.o = 8192;
}
g = nd.prototype;
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Cb(this);
};
g.N = function(a, b) {
  return C.c(this, b, null);
};
g.O = function(a, b, c) {
  return "number" === typeof b ? z.c(this, b, c) : c;
};
g.sa = function(a, b, c) {
  if ("number" === typeof b) {
    return Pa(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.b = function(a) {
  return this.J(null, a);
};
g.a = function(a, b) {
  return this.X(null, a, b);
};
g.C = function(a, b) {
  return od.p ? od.p(this.i, Pa(this.U, this.end, b), this.start, this.end + 1, null) : od.call(null, this.i, Pa(this.U, this.end, b), this.start, this.end + 1, null);
};
g.Da = function() {
  return this.start !== this.end ? new Db(this, this.end - this.start - 1, null) : null;
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return yb.a(this, b);
};
g.Q = function(a, b, c) {
  return yb.c(this, b, c);
};
g.F = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : N(z.a(a.U, e), new V(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.H = function() {
  return this.end - this.start;
};
g.va = function() {
  return z.a(this.U, this.end - 1);
};
g.wa = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return od.p ? od.p(this.i, this.U, this.start, this.end - 1, null) : od.call(null, this.i, this.U, this.start, this.end - 1, null);
};
g.Xa = function(a, b, c) {
  var d = this, e = d.start + b;
  return od.p ? od.p(d.i, Kb.c(d.U, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : od.call(null, d.i, Kb.c(d.U, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return od.p ? od.p(b, this.U, this.start, this.end, this.m) : od.call(null, b, this.U, this.start, this.end, this.m);
};
g.D = function() {
  return this.i;
};
g.J = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Yc(b, this.end - this.start) : z.a(this.U, this.start + b);
};
g.X = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.c(this.U, this.start + b, c);
};
g.I = function() {
  return Fb(Lc, this.i);
};
function od(a, b, c, d, e) {
  for (;;) {
    if (b instanceof nd) {
      c = b.start + c, d = b.start + d, b = b.U;
    } else {
      var f = Q(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new nd(a, b, c, d, e);
    }
  }
}
var md = function() {
  function a(a, b, c) {
    return od(null, a, b, c, null);
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
function gd(a) {
  return new Rc({}, x(a.d));
}
function hd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Tb(a, 0, b, 0, a.length);
  return b;
}
var qd = function pd(b, c, d, e) {
  d = b.root.n === d.n ? d : new Rc(b.root.n, x(d.d));
  var f = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.d[f];
    b = null != h ? pd(b, c - 5, h, e) : Vc(b.root.n, c - 5, e);
  }
  d.d[f] = b;
  return d;
};
function fd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.B = d;
  this.h = 275;
  this.o = 88;
}
g = fd.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.b = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.O(null, a, b);
};
g.N = function(a, b) {
  return C.c(this, b, null);
};
g.O = function(a, b, c) {
  return "number" === typeof b ? z.c(this, b, c) : c;
};
g.J = function(a, b) {
  if (this.root.n) {
    return ad(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.X = function(a, b, c) {
  return 0 <= b && b < this.f ? z.a(this, b) : c;
};
g.H = function() {
  if (this.root.n) {
    return this.f;
  }
  throw Error("count after persistent!");
};
g.cb = function(a, b, c) {
  var d = this;
  if (d.root.n) {
    if (0 <= b && b < d.f) {
      return Uc(this) <= b ? d.B[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = d.root.n === k.n ? k : new Rc(d.root.n, x(k.d));
          if (0 === a) {
            l.d[b & 31] = c;
          } else {
            var n = b >>> a & 31, q = f(a - 5, l.d[n]);
            l.d[n] = q;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return hb(this, c);
    }
    if (t) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.f)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.xa = function(a, b, c) {
  if ("number" === typeof b) {
    return kb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.Ea = function(a, b) {
  if (this.root.n) {
    if (32 > this.f - Uc(this)) {
      this.B[this.f & 31] = b;
    } else {
      var c = new Rc(this.root.n, this.B), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.B = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Vc(this.root.n, this.shift, c);
        this.root = new Rc(this.root.n, d);
        this.shift = e;
      } else {
        this.root = qd(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Fa = function() {
  if (this.root.n) {
    this.root.n = null;
    var a = this.f - Uc(this), b = Array(a);
    Tb(this.B, 0, b, 0, a);
    return new X(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function rd() {
  this.o = 0;
  this.h = 2097152;
}
rd.prototype.u = function() {
  return!1;
};
var sd = new rd;
function td(a, b) {
  return Wb((null == b ? 0 : b ? b.h & 1024 || b.Ib || (b.h ? 0 : r(Ha, b)) : r(Ha, b)) ? Q(a) === Q(b) ? Cc(Dc, Fc.a(function(a) {
    return sb.a(Ib.c(b, G(a), sd), G(L(a)));
  }, a)) : null : null);
}
function ud(a, b) {
  var c = a.d;
  if (b instanceof T) {
    a: {
      for (var d = c.length, e = b.ga, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof T && e === h.ga) {
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
      if (b instanceof vb) {
        a: {
          d = c.length;
          e = b.ha;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof vb && e === h.ha) {
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
                if (sb.a(b, c[e])) {
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
function vd(a, b, c) {
  this.d = a;
  this.j = b;
  this.la = c;
  this.o = 0;
  this.h = 32374990;
}
g = vd.prototype;
g.A = function() {
  return Cb(this);
};
g.aa = function() {
  return this.j < this.d.length - 2 ? new vd(this.d, this.j + 2, this.la) : null;
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return P.a(b, this);
};
g.Q = function(a, b, c) {
  return P.c(b, c, this);
};
g.F = function() {
  return this;
};
g.H = function() {
  return(this.d.length - this.j) / 2;
};
g.R = function() {
  return new X(null, 2, 5, Z, [this.d[this.j], this.d[this.j + 1]], null);
};
g.S = function() {
  return this.j < this.d.length - 2 ? new vd(this.d, this.j + 2, this.la) : J;
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return new vd(this.d, this.j, b);
};
g.D = function() {
  return this.la;
};
g.I = function() {
  return Fb(J, this.la);
};
function la(a, b, c, d) {
  this.i = a;
  this.f = b;
  this.d = c;
  this.m = d;
  this.o = 8196;
  this.h = 16123663;
}
g = la.prototype;
g.ta = function() {
  return new wd({}, this.d.length, x(this.d));
};
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = bc(this);
};
g.N = function(a, b) {
  return C.c(this, b, null);
};
g.O = function(a, b, c) {
  a = ud(this, b);
  return-1 === a ? c : this.d[a + 1];
};
g.sa = function(a, b, c) {
  a = ud(this, b);
  if (-1 === a) {
    if (this.f < xd) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new la(this.i, this.f + 1, e, null);
    }
    return Ua(Ga(Kc(yd, this), b, c), this.i);
  }
  return c === this.d[a + 1] ? this : t ? (b = x(this.d), b[a + 1] = c, new la(this.i, this.f, b, null)) : null;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.b = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.O(null, a, b);
};
g.C = function(a, b) {
  return Qb(b) ? Ga(this, z.a(b, 0), z.a(b, 1)) : Yb.c(Ba, this, b);
};
g.toString = function() {
  return qb(this);
};
g.F = function() {
  return 0 <= this.d.length - 2 ? new vd(this.d, 0, null) : null;
};
g.H = function() {
  return this.f;
};
g.u = function(a, b) {
  return td(this, b);
};
g.G = function(a, b) {
  return new la(b, this.f, this.d, this.m);
};
g.D = function() {
  return this.i;
};
g.I = function() {
  return Ua(zd, this.i);
};
var zd = new la(null, 0, [], null), xd = 8;
function wd(a, b, c) {
  this.na = a;
  this.ka = b;
  this.d = c;
  this.o = 56;
  this.h = 258;
}
g = wd.prototype;
g.xa = function(a, b, c) {
  if (p(this.na)) {
    a = ud(this, b);
    if (-1 === a) {
      return this.ka + 2 <= 2 * xd ? (this.ka += 2, this.d.push(b), this.d.push(c), this) : zc.c(Ad.a ? Ad.a(this.ka, this.d) : Ad.call(null, this.ka, this.d), b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.Ea = function(a, b) {
  if (p(this.na)) {
    if (b ? b.h & 2048 || b.ob || (b.h ? 0 : r(Ia, b)) : r(Ia, b)) {
      return jb(this, cc.b ? cc.b(b) : cc.call(null, b), dc.b ? dc.b(b) : dc.call(null, b));
    }
    for (var c = F(b), d = this;;) {
      var e = G(c);
      if (p(e)) {
        c = L(c), d = jb(d, cc.b ? cc.b(e) : cc.call(null, e), dc.b ? dc.b(e) : dc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Fa = function() {
  if (p(this.na)) {
    return this.na = !1, new la(null, $b(this.ka), this.d, null);
  }
  throw Error("persistent! called twice");
};
g.N = function(a, b) {
  return C.c(this, b, null);
};
g.O = function(a, b, c) {
  if (p(this.na)) {
    return a = ud(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.H = function() {
  if (p(this.na)) {
    return $b(this.ka);
  }
  throw Error("count after persistent!");
};
function Ad(a, b) {
  for (var c = gb(yd), d = 0;;) {
    if (d < a) {
      c = zc.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Bd() {
  this.ca = !1;
}
function Cd(a, b) {
  return a === b ? !0 : a === b || a instanceof T && b instanceof T && a.ga === b.ga ? !0 : t ? sb.a(a, b) : null;
}
var Dd = function() {
  function a(a, b, c, h, k) {
    a = x(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = x(a);
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
  c.p = a;
  return c;
}(), Ed = function() {
  function a(a, b, c, h, k, l) {
    a = a.oa(b);
    a.d[c] = h;
    a.d[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.oa(b);
    a.d[c] = h;
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
  c.l = b;
  c.da = a;
  return c;
}();
function Fd(a, b, c) {
  this.n = a;
  this.w = b;
  this.d = c;
}
g = Fd.prototype;
g.Z = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = ac(this.w & h - 1);
  if (0 === (this.w & h)) {
    var l = ac(this.w);
    if (2 * l < this.d.length) {
      a = this.oa(a);
      b = a.d;
      f.ca = !0;
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
      a.w |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Gd.Z(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.w >>> d & 1) && (k[d] = null != this.d[e] ? Gd.Z(a, b + 5, E(this.d[e]), this.d[e], this.d[e + 1], f) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Hd(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), Tb(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Tb(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.ca = !0, a = this.oa(a), a.d = b, a.w |= h, a) : null;
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.Z(a, b + 5, c, d, e, f), l === h ? this : Ed.l(this, a, 2 * k + 1, l)) : Cd(d, l) ? e === h ? this : Ed.l(this, a, 2 * k + 1, e) : t ? (f.ca = !0, Ed.da(this, a, 2 * k, null, 2 * k + 1, Id.ma ? Id.ma(a, b + 5, l, h, c, d, e) : Id.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.ya = function() {
  return Jd.b ? Jd.b(this.d) : Jd.call(null, this.d);
};
g.oa = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = ac(this.w), c = Array(0 > b ? 4 : 2 * (b + 1));
  Tb(this.d, 0, c, 0, 2 * b);
  return new Fd(a, this.w, c);
};
g.Y = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = ac(this.w & f - 1);
  if (0 === (this.w & f)) {
    var k = ac(this.w);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Gd.Y(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.w >>> c & 1) && (h[c] = null != this.d[d] ? Gd.Y(a + 5, E(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Hd(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Tb(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Tb(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ca = !0;
    return new Fd(null, this.w | f, a);
  }
  k = this.d[2 * h];
  f = this.d[2 * h + 1];
  return null == k ? (k = f.Y(a + 5, b, c, d, e), k === f ? this : new Fd(null, this.w, Dd.c(this.d, 2 * h + 1, k))) : Cd(c, k) ? d === f ? this : new Fd(null, this.w, Dd.c(this.d, 2 * h + 1, d)) : t ? (e.ca = !0, new Fd(null, this.w, Dd.p(this.d, 2 * h, null, 2 * h + 1, Id.da ? Id.da(a + 5, k, f, b, c, d) : Id.call(null, a + 5, k, f, b, c, d)))) : null;
};
g.ja = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.w & e)) {
    return d;
  }
  var f = ac(this.w & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.ja(a + 5, b, c, d) : Cd(c, e) ? f : t ? d : null;
};
var Gd = new Fd(null, 0, []);
function Hd(a, b, c) {
  this.n = a;
  this.f = b;
  this.d = c;
}
g = Hd.prototype;
g.Z = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.d[h];
  if (null == k) {
    return a = Ed.l(this, a, h, Gd.Z(a, b + 5, c, d, e, f)), a.f += 1, a;
  }
  b = k.Z(a, b + 5, c, d, e, f);
  return b === k ? this : Ed.l(this, a, h, b);
};
g.ya = function() {
  return Kd.b ? Kd.b(this.d) : Kd.call(null, this.d);
};
g.oa = function(a) {
  return a === this.n ? this : new Hd(a, this.f, x(this.d));
};
g.Y = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.d[f];
  if (null == h) {
    return new Hd(null, this.f + 1, Dd.c(this.d, f, Gd.Y(a + 5, b, c, d, e)));
  }
  a = h.Y(a + 5, b, c, d, e);
  return a === h ? this : new Hd(null, this.f, Dd.c(this.d, f, a));
};
g.ja = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.ja(a + 5, b, c, d) : d;
};
function Ld(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Cd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Md(a, b, c, d) {
  this.n = a;
  this.fa = b;
  this.f = c;
  this.d = d;
}
g = Md.prototype;
g.Z = function(a, b, c, d, e, f) {
  if (c === this.fa) {
    b = Ld(this.d, this.f, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.f) {
        return a = Ed.da(this, a, 2 * this.f, d, 2 * this.f + 1, e), f.ca = !0, a.f += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      Tb(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ca = !0;
      f = this.f + 1;
      a === this.n ? (this.d = b, this.f = f, a = this) : a = new Md(this.n, this.fa, f, b);
      return a;
    }
    return this.d[b + 1] === e ? this : Ed.l(this, a, b + 1, e);
  }
  return(new Fd(a, 1 << (this.fa >>> b & 31), [null, this, null, null])).Z(a, b, c, d, e, f);
};
g.ya = function() {
  return Jd.b ? Jd.b(this.d) : Jd.call(null, this.d);
};
g.oa = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  Tb(this.d, 0, b, 0, 2 * this.f);
  return new Md(a, this.fa, this.f, b);
};
g.Y = function(a, b, c, d, e) {
  return b === this.fa ? (a = Ld(this.d, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), Tb(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ca = !0, new Md(null, this.fa, this.f + 1, b)) : sb.a(this.d[a], d) ? this : new Md(null, this.fa, this.f, Dd.c(this.d, a + 1, d))) : (new Fd(null, 1 << (this.fa >>> a & 31), [null, this])).Y(a, b, c, d, e);
};
g.ja = function(a, b, c, d) {
  a = Ld(this.d, this.f, c);
  return 0 > a ? d : Cd(c, this.d[a]) ? this.d[a + 1] : t ? d : null;
};
var Id = function() {
  function a(a, b, c, h, k, l, n) {
    var q = E(c);
    if (q === k) {
      return new Md(null, q, 2, [c, h, l, n]);
    }
    var s = new Bd;
    return Gd.Z(a, b, q, c, h, s).Z(a, b, k, l, n, s);
  }
  function b(a, b, c, h, k, l) {
    var n = E(b);
    if (n === h) {
      return new Md(null, n, 2, [b, c, k, l]);
    }
    var q = new Bd;
    return Gd.Y(a, n, b, c, q).Y(a, h, k, l, q);
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
  c.da = b;
  c.ma = a;
  return c;
}();
function Nd(a, b, c, d, e) {
  this.i = a;
  this.$ = b;
  this.j = c;
  this.r = d;
  this.m = e;
  this.o = 0;
  this.h = 32374860;
}
g = Nd.prototype;
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Cb(this);
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return P.a(b, this);
};
g.Q = function(a, b, c) {
  return P.c(b, c, this);
};
g.F = function() {
  return this;
};
g.R = function() {
  return null == this.r ? new X(null, 2, 5, Z, [this.$[this.j], this.$[this.j + 1]], null) : G(this.r);
};
g.S = function() {
  return null == this.r ? Jd.c ? Jd.c(this.$, this.j + 2, null) : Jd.call(null, this.$, this.j + 2, null) : Jd.c ? Jd.c(this.$, this.j, L(this.r)) : Jd.call(null, this.$, this.j, L(this.r));
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return new Nd(b, this.$, this.j, this.r, this.m);
};
g.D = function() {
  return this.i;
};
g.I = function() {
  return Fb(J, this.i);
};
var Jd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Nd(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (p(h) && (h = h.ya(), p(h))) {
            return new Nd(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Nd(null, a, b, c, null);
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
  c.b = b;
  c.c = a;
  return c;
}();
function Od(a, b, c, d, e) {
  this.i = a;
  this.$ = b;
  this.j = c;
  this.r = d;
  this.m = e;
  this.o = 0;
  this.h = 32374860;
}
g = Od.prototype;
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Cb(this);
};
g.C = function(a, b) {
  return N(b, this);
};
g.toString = function() {
  return qb(this);
};
g.P = function(a, b) {
  return P.a(b, this);
};
g.Q = function(a, b, c) {
  return P.c(b, c, this);
};
g.F = function() {
  return this;
};
g.R = function() {
  return G(this.r);
};
g.S = function() {
  return Kd.l ? Kd.l(null, this.$, this.j, L(this.r)) : Kd.call(null, null, this.$, this.j, L(this.r));
};
g.u = function(a, b) {
  return O(this, b);
};
g.G = function(a, b) {
  return new Od(b, this.$, this.j, this.r, this.m);
};
g.D = function() {
  return this.i;
};
g.I = function() {
  return Fb(J, this.i);
};
var Kd = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (p(k) && (k = k.ya(), p(k))) {
            return new Od(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Od(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.l(null, a, 0, null);
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
  c.b = b;
  c.l = a;
  return c;
}();
function Pd(a, b, c, d, e, f) {
  this.i = a;
  this.f = b;
  this.root = c;
  this.T = d;
  this.V = e;
  this.m = f;
  this.o = 8196;
  this.h = 16123663;
}
g = Pd.prototype;
g.ta = function() {
  return new Qd({}, this.root, this.f, this.T, this.V);
};
g.A = function() {
  var a = this.m;
  return null != a ? a : this.m = a = bc(this);
};
g.N = function(a, b) {
  return C.c(this, b, null);
};
g.O = function(a, b, c) {
  return null == b ? this.T ? this.V : c : null == this.root ? c : t ? this.root.ja(0, E(b), b, c) : null;
};
g.sa = function(a, b, c) {
  if (null == b) {
    return this.T && c === this.V ? this : new Pd(this.i, this.T ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new Bd;
  b = (null == this.root ? Gd : this.root).Y(0, E(b), b, c, a);
  return b === this.root ? this : new Pd(this.i, a.ca ? this.f + 1 : this.f, b, this.T, this.V, null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.O(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.b = function(a) {
  return this.N(null, a);
};
g.a = function(a, b) {
  return this.O(null, a, b);
};
g.C = function(a, b) {
  return Qb(b) ? Ga(this, z.a(b, 0), z.a(b, 1)) : Yb.c(Ba, this, b);
};
g.toString = function() {
  return qb(this);
};
g.F = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.ya() : null;
    return this.T ? N(new X(null, 2, 5, Z, [null, this.V], null), a) : a;
  }
  return null;
};
g.H = function() {
  return this.f;
};
g.u = function(a, b) {
  return td(this, b);
};
g.G = function(a, b) {
  return new Pd(b, this.f, this.root, this.T, this.V, this.m);
};
g.D = function() {
  return this.i;
};
g.I = function() {
  return Ua(yd, this.i);
};
var yd = new Pd(null, 0, null, !1, null, 0);
function Jb(a, b) {
  for (var c = a.length, d = 0, e = gb(yd);;) {
    if (d < c) {
      var f = d + 1, e = e.xa(null, a[d], b[d]), d = f
    } else {
      return ib(e);
    }
  }
}
function Qd(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.T = d;
  this.V = e;
  this.o = 56;
  this.h = 258;
}
g = Qd.prototype;
g.xa = function(a, b, c) {
  return Rd(this, b, c);
};
g.Ea = function(a, b) {
  var c;
  a: {
    if (this.n) {
      if (b ? b.h & 2048 || b.ob || (b.h ? 0 : r(Ia, b)) : r(Ia, b)) {
        c = Rd(this, cc.b ? cc.b(b) : cc.call(null, b), dc.b ? dc.b(b) : dc.call(null, b));
        break a;
      }
      c = F(b);
      for (var d = this;;) {
        var e = G(c);
        if (p(e)) {
          c = L(c), d = Rd(d, cc.b ? cc.b(e) : cc.call(null, e), dc.b ? dc.b(e) : dc.call(null, e));
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
g.Fa = function() {
  var a;
  if (this.n) {
    this.n = null, a = new Pd(null, this.count, this.root, this.T, this.V, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.N = function(a, b) {
  return null == b ? this.T ? this.V : null : null == this.root ? null : this.root.ja(0, E(b), b);
};
g.O = function(a, b, c) {
  return null == b ? this.T ? this.V : c : null == this.root ? c : this.root.ja(0, E(b), b, c);
};
g.H = function() {
  if (this.n) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Rd(a, b, c) {
  if (a.n) {
    if (null == b) {
      a.V !== c && (a.V = c), a.T || (a.count += 1, a.T = !0);
    } else {
      var d = new Bd;
      b = (null == a.root ? Gd : a.root).Z(a.n, 0, E(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ca && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Sd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = F(a);
    for (var b = gb(yd);;) {
      if (a) {
        var e = L(L(a)), b = zc.c(b, G(a), G(L(a)));
        a = e;
      } else {
        return ib(b);
      }
    }
  }
  a.k = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Td = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new la(null, $b(Q(a)), S.a(va, a), null);
  }
  a.k = 0;
  a.g = function(a) {
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function cc(a) {
  return Ja(a);
}
function dc(a) {
  return Ka(a);
}
function jc(a) {
  if (a && (a.o & 4096 || a.qb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
var Ud = function() {
  function a(a, b) {
    for (;;) {
      if (F(b) && 0 < a) {
        var c = a - 1, h = L(b);
        a = c;
        b = h;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (F(a)) {
        a = L(a);
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
}(), Vd = function() {
  function a(a, b) {
    Ud.a(a, b);
    return b;
  }
  function b(a) {
    Ud.b(a);
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
function Wd(a, b, c, d, e, f, h) {
  var k = ja;
  try {
    ja = null == ja ? null : ja - 1;
    if (null != ja && 0 > ja) {
      return D(a, "#");
    }
    D(a, c);
    F(h) && (b.c ? b.c(G(h), a, f) : b.call(null, G(h), a, f));
    for (var l = L(h), n = ra.b(f);l && (null == n || 0 !== n);) {
      D(a, d);
      b.c ? b.c(G(l), a, f) : b.call(null, G(l), a, f);
      var q = L(l);
      c = n - 1;
      l = q;
      n = c;
    }
    p(ra.b(f)) && (D(a, d), b.c ? b.c("...", a, f) : b.call(null, "...", a, f));
    return D(a, e);
  } finally {
    ja = k;
  }
}
var Xd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = F(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.J(null, k);
        D(a, l);
        k += 1;
      } else {
        if (e = F(e)) {
          f = e, Rb(f) ? (e = mb(f), h = nb(f), f = e, l = Q(e), e = h, h = l) : (l = G(f), D(a, l), e = L(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.k = 1;
  a.g = function(a) {
    var d = G(a);
    a = I(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Yd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Zd(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Yd[a];
  })), w('"')].join("");
}
var $ = function $d(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (t) {
    p(function() {
      var c = Ib.a(d, oa);
      return p(c) ? (c = b ? b.h & 131072 || b.pb ? !0 : b.h ? !1 : r(Ra, b) : r(Ra, b)) ? Nb(b) : c : c;
    }()) && (D(c, "^"), $d(Nb(b), c, d), D(c, " "));
    if (null == b) {
      return D(c, "nil");
    }
    if (b.hb) {
      return b.xb(c);
    }
    if (b && (b.h & 2147483648 || b.K)) {
      return b.v(null, c, d);
    }
    if (ta(b) === Boolean || "number" === typeof b) {
      return D(c, "" + w(b));
    }
    if (null != b && b.constructor === Object) {
      return D(c, "#js "), ae.l ? ae.l(Fc.a(function(c) {
        return new X(null, 2, 5, Z, [kc.b(c), b[c]], null);
      }, Sb(b)), $d, c, d) : ae.call(null, Fc.a(function(c) {
        return new X(null, 2, 5, Z, [kc.b(c), b[c]], null);
      }, Sb(b)), $d, c, d);
    }
    if (b instanceof Array) {
      return Wd(c, $d, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return p(na.b(d)) ? D(c, Zd(b)) : D(c, b);
    }
    if (Lb(b)) {
      return Xd.e(c, M(["#\x3c", "" + w(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w(b);;) {
          if (Q(d) < c) {
            d = [w("0"), w(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Xd.e(c, M(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Xd.e(c, M(['#"', b.source, '"'], 0)) : (b ? b.h & 2147483648 || b.K || (b.h ? 0 : r(db, b)) : r(db, b)) ? eb(b, c, d) : t ? Xd.e(c, M(["#\x3c", "" + w(b), "\x3e"], 0)) : null;
  }
  return null;
}, be = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || sa(F(a))) {
      b = "";
    } else {
      b = w;
      var e = ka(), f = new fa;
      a: {
        var h = new pb(f);
        $(G(a), h, e);
        a = F(L(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var q = k.J(null, n);
            D(h, " ");
            $(q, h, e);
            n += 1;
          } else {
            if (a = F(a)) {
              k = a, Rb(k) ? (a = mb(k), l = nb(k), k = a, q = Q(a), a = l, l = q) : (q = G(k), D(h, " "), $(q, h, e), a = L(k), k = null, l = 0), n = 0;
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
    a = F(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ae(a, b, c, d) {
  return Wd(c, function(a, c, d) {
    b.c ? b.c(Ja(a), c, d) : b.call(null, Ja(a), c, d);
    D(c, " ");
    return b.c ? b.c(Ka(a), c, d) : b.call(null, Ka(a), c, d);
  }, "{", ", ", "}", d, F(a));
}
xb.prototype.K = !0;
xb.prototype.v = function(a, b, c) {
  return Wd(b, $, "(", " ", ")", c, this);
};
nd.prototype.K = !0;
nd.prototype.v = function(a, b, c) {
  return Wd(b, $, "[", " ", "]", c, this);
};
pc.prototype.K = !0;
pc.prototype.v = function(a, b, c) {
  return Wd(b, $, "(", " ", ")", c, this);
};
la.prototype.K = !0;
la.prototype.v = function(a, b, c) {
  return ae(this, $, b, c);
};
V.prototype.K = !0;
V.prototype.v = function(a, b, c) {
  return Wd(b, $, "(", " ", ")", c, this);
};
Db.prototype.K = !0;
Db.prototype.v = function(a, b, c) {
  return Wd(b, $, "(", " ", ")", c, this);
};
Nd.prototype.K = !0;
Nd.prototype.v = function(a, b, c) {
  return Wd(b, $, "(", " ", ")", c, this);
};
ld.prototype.K = !0;
ld.prototype.v = function(a, b, c) {
  return Wd(b, $, "(", " ", ")", c, this);
};
Pd.prototype.K = !0;
Pd.prototype.v = function(a, b, c) {
  return ae(this, $, b, c);
};
X.prototype.K = !0;
X.prototype.v = function(a, b, c) {
  return Wd(b, $, "[", " ", "]", c, this);
};
ec.prototype.K = !0;
ec.prototype.v = function(a, b, c) {
  return Wd(b, $, "(", " ", ")", c, this);
};
vd.prototype.K = !0;
vd.prototype.v = function(a, b, c) {
  return Wd(b, $, "(", " ", ")", c, this);
};
fc.prototype.K = !0;
fc.prototype.v = function(a, b) {
  return D(b, "()");
};
ic.prototype.K = !0;
ic.prototype.v = function(a, b, c) {
  return Wd(b, $, "(", " ", ")", c, this);
};
Od.prototype.K = !0;
Od.prototype.v = function(a, b, c) {
  return Wd(b, $, "(", " ", ")", c, this);
};
X.prototype.Ba = !0;
X.prototype.Ca = function(a, b) {
  return Xb.a(this, b);
};
nd.prototype.Ba = !0;
nd.prototype.Ca = function(a, b) {
  return Xb.a(this, b);
};
T.prototype.Ba = !0;
T.prototype.Ca = function(a, b) {
  return rb(this, b);
};
vb.prototype.Ba = !0;
vb.prototype.Ca = function(a, b) {
  return rb(this, b);
};
function ce(a, b) {
  if (a ? a.sb : a) {
    return a.sb(a, b);
  }
  var c;
  c = ce[m(null == a ? null : a)];
  if (!c && (c = ce._, !c)) {
    throw u("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var de = function() {
  function a(a, b, c, d, e) {
    if (a ? a.wb : a) {
      return a.wb(a, b, c, d, e);
    }
    var q;
    q = de[m(null == a ? null : a)];
    if (!q && (q = de._, !q)) {
      throw u("ISwap.-swap!", a);
    }
    return q.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.vb : a) {
      return a.vb(a, b, c, d);
    }
    var e;
    e = de[m(null == a ? null : a)];
    if (!e && (e = de._, !e)) {
      throw u("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.ub : a) {
      return a.ub(a, b, c);
    }
    var d;
    d = de[m(null == a ? null : a)];
    if (!d && (d = de._, !d)) {
      throw u("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.tb : a) {
      return a.tb(a, b);
    }
    var c;
    c = de[m(null == a ? null : a)];
    if (!c && (c = de._, !c)) {
      throw u("ISwap.-swap!", a);
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
  e.l = b;
  e.p = a;
  return e;
}();
function ee(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Bb = c;
  this.jb = d;
  this.h = 2153938944;
  this.o = 16386;
}
g = ee.prototype;
g.A = function() {
  return this[ba] || (this[ba] = ++ca);
};
g.eb = function(a, b, c) {
  a = F(this.jb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.J(null, f), k = R.c(h, 0, null), h = R.c(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = F(a)) {
        Rb(a) ? (d = mb(a), a = nb(a), k = d, e = Q(d), d = k) : (d = G(a), k = R.c(d, 0, null), h = R.c(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = L(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.v = function(a, b, c) {
  D(b, "#\x3cAtom: ");
  $(this.state, b, c);
  return D(b, "\x3e");
};
g.D = function() {
  return this.i;
};
g.mb = function() {
  return this.state;
};
g.u = function(a, b) {
  return this === b;
};
var ge = function() {
  function a(a) {
    return new ee(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Vb(c) ? S.a(Sd, c) : c, e = Ib.a(d, fe), d = Ib.a(d, oa);
      return new ee(a, d, e, null);
    }
    a.k = 1;
    a.g = function(a) {
      var c = G(a);
      a = I(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b;
}();
function he(a, b) {
  if (a instanceof ee) {
    var c = a.Bb;
    if (null != c && !p(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(be.e(M([hc(new vb(null, "validate", "validate", 1233162959, null), new vb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.jb && fb(a, c, b);
    return b;
  }
  return ce(a, b);
}
var ie = function() {
  function a(a, b, c, d) {
    return a instanceof ee ? he(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d)) : de.l(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof ee ? he(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : de.c(a, b, c);
  }
  function c(a, b) {
    return a instanceof ee ? he(a, b.b ? b.b(a.state) : b.call(null, a.state)) : de.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, s) {
      var v = null;
      4 < arguments.length && (v = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, d, e, f) {
      return a instanceof ee ? he(a, S.p(c, a.state, d, e, f)) : de.p(a, c, d, e, f);
    }
    a.k = 4;
    a.g = function(a) {
      var c = G(a);
      a = L(a);
      var d = G(a);
      a = L(a);
      var e = G(a);
      a = L(a);
      var f = G(a);
      a = I(a);
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
        return e.e(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.l = a;
  d.e = e.e;
  return d;
}(), je = {};
function ke(a, b) {
  if (a ? a.nb : a) {
    return a.nb(a, b);
  }
  var c;
  c = ke[m(null == a ? null : a)];
  if (!c && (c = ke._, !c)) {
    throw u("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var me = function() {
  function a(a) {
    return b.e(a, M([new la(null, 1, [le, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? p(p(null) ? null : a.Gb) || (a.yb ? 0 : r(je, a)) : r(je, a)) {
        return ke(a, S.a(Td, c));
      }
      if (F(c)) {
        var d = Vb(c) ? S.a(Sd, c) : c, e = Ib.a(d, le);
        return function(a, b, c, d) {
          return function y(e) {
            return Vb(e) ? Vd.b(Fc.a(y, e)) : (null == e ? 0 : e ? e.h & 8 || e.Eb || (e.h ? 0 : r(Aa, e)) : r(Aa, e)) ? Kc(null == e ? null : za(e), Fc.a(y, e)) : e instanceof Array ? jd(Fc.a(y, e)) : ta(e) === Object ? Kc(zd, function() {
              return function(a, b, c, d) {
                return function Na(f) {
                  return new V(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = F(f);
                        if (a) {
                          if (Rb(a)) {
                            var b = mb(a), c = Q(b), h = new mc(Array(c), 0);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = z.a(b, k), l = new X(null, 2, 5, Z, [d.b ? d.b(l) : d.call(null, l), y(e[l])], null);
                                  h.add(l);
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? qc(h.M(), Na(nb(a))) : qc(h.M(), null);
                          }
                          h = G(a);
                          return N(new X(null, 2, 5, Z, [d.b ? d.b(h) : d.call(null, h), y(e[h])], null), Na(I(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(Sb(e));
            }()) : t ? e : null;
          };
        }(c, d, e, p(e) ? kc : w)(a);
      }
      return null;
    }
    a.k = 1;
    a.g = function(a) {
      var c = G(a);
      a = I(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b;
}();
var pa = new T(null, "dup", "dup"), ub = new T(null, "default", "default"), ne = new T(null, "info", "info"), oe = new T(null, "objects", "objects"), pe = new T(null, "points2d", "points2d"), le = new T(null, "keywordize-keys", "keywordize-keys"), qe = new T(null, "points", "points"), ma = new T(null, "flush-on-newline", "flush-on-newline"), re = new T(null, "x4", "x4"), se = new T(null, "closed", "closed"), te = new T(null, "center", "center"), ue = new T(null, "x3", "x3"), ra = new T(null, "print-length", 
"print-length"), ve = new T(null, "x2", "x2"), t = new T(null, "else", "else"), na = new T(null, "readably", "readably"), we = new T(null, "x1", "x1"), fe = new T(null, "validator", "validator"), oa = new T(null, "meta", "meta"), xe = new T(null, "none", "none"), ye = new T(null, "self", "self"), ze = new T(null, "selected", "selected"), Ae = new T(null, "rotation", "rotation");
var Be = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return Yb.c(function(a, c) {
      var k = R.c(c, 0, null), l = R.c(c, 1, null);
      return Kb.c(a, k, S.c(b, l, e));
    }, zd, a);
  }
  a.k = 2;
  a.g = function(a) {
    var d = G(a);
    a = L(a);
    var e = G(a);
    a = I(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}(), Ce = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = function() {
      return function k(a) {
        return new V(null, function() {
          for (var b = a;;) {
            if (b = F(b)) {
              if (Rb(b)) {
                var c = mb(b), d = Q(c), e = new mc(Array(d), 0);
                a: {
                  for (var f = 0;;) {
                    if (f < d) {
                      var y = z.a(c, f), K = R.c(y, 0, null), y = R.c(y, 1, null);
                      Bc.a(y, null) && (K = [w(" "), w(K), w("\x3d'"), w(y), w("'")].join(""), e.add(K));
                      f += 1;
                    } else {
                      c = !0;
                      break a;
                    }
                  }
                  c = void 0;
                }
                return c ? qc(e.M(), k(nb(b))) : qc(e.M(), null);
              }
              c = G(b);
              e = R.c(c, 0, null);
              c = R.c(c, 1, null);
              if (Bc.a(c, null)) {
                return N([w(" "), w(e), w("\x3d'"), w(c), w("'")].join(""), k(I(b)));
              }
              b = I(b);
            } else {
              return null;
            }
          }
        }, null, null);
      }(Nc.a(2, e));
    }();
    return sb.a(b, se) ? [w("\x3c"), w(a), w(S.a(w, f)), w("/\x3e")].join("") : [w("\x3c"), w(a), w(S.a(w, f)), w("\x3e"), w(b), w("\x3c/"), w(a), w("\x3e")].join("");
  }
  a.k = 2;
  a.g = function(a) {
    var d = G(a);
    a = L(a);
    var e = G(a);
    a = I(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}();
function De(a) {
  sb.a(ta("object-list"), String) ? document.getElementById("object-list").innerHTML = a : "object-list".innerHTML = a;
}
;var Ee = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return S.l(Ce, a, b, e);
  }
  a.k = 2;
  a.g = function(a) {
    var d = G(a);
    a = L(a);
    var e = G(a);
    a = I(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}(), Fe = Ee("br", ha.ib), Ge = function() {
  function a(a, b, c) {
    return Ee.e("input", ha.ib, M(["type", a, "name", b, "value", c], 0));
  }
  function b(a, b) {
    return Ee.e("input", ha.ib, M(["type", a, "name", b], 0));
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
}(), He = [w("x1"), w(Ge.a("text", "x1")), w("x2"), w(Ge.a("text", "x2")), w("x3"), w(Ge.c("text", "x3", 0)), w("x4"), w(Ge.c("text", "x4", 0))].join(""), Ie = new X(null, 3, 5, Z, [Ee("h2", "Element hinzuf\u00fcgen"), Ee.e("div", [w("Objekt-Name"), w(Ge.a("text", "obj-name")), w(Fe), w(Fe), w(He)].join(""), M(["id", "prompt-object-decl"], 0)), Ee.e("a", "Hinzuf\u00fcgen", M("href # class button onclick drawer.api.submitPrompt();".split(" "), 0))], null);
function Je(a) {
  a = null == a ? null : Ma(a);
  return null == a ? null : Ma(a);
}
function Ke(a) {
  return Qc(a, new X(null, 1, 5, Z, [pe], null), Mc.a(Je, a.b ? a.b(qe) : a.call(null, qe)));
}
function Le(a) {
  var b = Vb(a) ? S.a(Sd, a) : a, c = Ib.a(b, qe);
  return Mc.a(function(a, b, c) {
    return function(a) {
      return a / Q(c);
    };
  }(a, b, c), Mc.a(function() {
    return function(a) {
      return Yb.a(Zb, a);
    };
  }(a, b, c), S.c(Fc, kd, c)));
}
function Me(a) {
  var b = Ne, c = a.b ? a.b(pe) : a.call(null, pe), d = c.b ? c.b(0) : c.call(null, 0);
  b.beginPath();
  b.moveTo(d.b ? d.b(0) : d.call(null, 0), d.b ? d.b(1) : d.call(null, 1));
  for (var c = F(c), e = null, f = 0, h = 0;;) {
    if (h < f) {
      var k = e.J(null, h);
      b.lineTo(k.b ? k.b(0) : k.call(null, 0), k.b ? k.b(1) : k.call(null, 1));
      h += 1;
    } else {
      if (c = F(c)) {
        e = c, Rb(e) ? (c = mb(e), h = nb(e), e = c, f = Q(c), c = h) : (c = G(e), b.lineTo(c.b ? c.b(0) : c.call(null, 0), c.b ? c.b(1) : c.call(null, 1)), c = L(e), e = null, f = 0), h = 0;
      } else {
        break;
      }
    }
  }
  b.lineTo(d.b ? d.b(0) : d.call(null, 0), d.b ? d.b(1) : d.call(null, 1));
  b.stroke();
  b.closePath();
  a = Je(Le(a));
  b.beginPath();
  b.arc(a.b ? a.b(0) : a.call(null, 0), a.b ? a.b(1) : a.call(null, 1), 2, 0, 2 * Math.PI);
  b.stroke();
  b.closePath();
}
;function Oe() {
  var a = document.getElementById("prompt");
  document.getElementById("prompt-overlay").style.display = "none";
  return a.innerHTML = "";
}
function Pe(a) {
  var b = function() {
    return function d(b) {
      return new V(null, function() {
        for (;;) {
          var f = F(b);
          if (f) {
            if (Rb(f)) {
              var h = mb(f), k = Q(h), l = new mc(Array(k), 0);
              a: {
                for (var n = 0;;) {
                  if (n < k) {
                    var q = z.a(h, n), s = R.c(q, 0, null);
                    R.c(q, 1, null);
                    q = sb.a(s, Oc.a(a, new X(null, 2, 5, Z, [ne, ze], null)));
                    s = [w("\x3cli\x3e"), w(Ce.e("a", s, M(["href", "#", "id", q ? "selected-obj" : null, "onclick", [w("drawer.api.setSelected(\x26#39;"), w(s), w("\x26#39;)")].join("")], 0))), w("\x3c/li\x3e")].join("");
                    l.add(s);
                    n += 1;
                  } else {
                    h = !0;
                    break a;
                  }
                }
                h = void 0;
              }
              return h ? qc(l.M(), d(nb(f))) : qc(l.M(), null);
            }
            h = G(f);
            l = R.c(h, 0, null);
            R.c(h, 1, null);
            h = sb.a(l, Oc.a(a, new X(null, 2, 5, Z, [ne, ze], null)));
            return N([w("\x3cli\x3e"), w(Ce.e("a", l, M(["href", "#", "id", h ? "selected-obj" : null, "onclick", [w("drawer.api.setSelected(\x26#39;"), w(l), w("\x26#39;)")].join("")], 0))), w("\x3c/li\x3e")].join(""), d(I(f)));
          }
          return null;
        }
      }, null, null);
    }(a.b ? a.b(oe) : a.call(null, oe));
  }();
  De([w("\x3cul\x3e"), w(S.a(w, b)), w("\x3c/ul\x3e")].join(""));
}
;var Qe = 1E3 / 60, Re = document.getElementById("canvas"), Ne = Re.getContext("2d"), Se = document.getElementById("controls");
function Te() {
  var a = window.innerHeight;
  Re.setAttribute("width", window.innerWidth - parseInt(Se.offsetWidth) - 1);
  return Re.setAttribute("height", a);
}
Te();
window.onresize = Te;
var Ue = ge.b(J);
function Ve(a) {
  Ne.save();
  Ne.setTransform(1, 0, 0, 1, 0, 0);
  Ne.clearRect(0, 0, Re.width, Re.height);
  Ne.restore();
  for (var b = F(a.b ? a.b(oe) : a.call(null, oe)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.J(null, e), h = R.c(f, 0, null), f = R.c(f, 1, null);
      sb.a(Oc.a(a, new X(null, 2, 5, Z, [ne, ze], null)), h) ? Ne.strokeStyle = "#f00" : Ne.strokeStyle = "#000";
      Me(f);
      e += 1;
    } else {
      if (b = F(b)) {
        Rb(b) ? (c = mb(b), b = nb(b), h = c, d = Q(c), c = h) : (c = G(b), h = R.c(c, 0, null), f = R.c(c, 1, null), sb.a(Oc.a(a, new X(null, 2, 5, Z, [ne, ze], null)), h) ? Ne.strokeStyle = "#f00" : Ne.strokeStyle = "#000", Me(f), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
}
var Xe = function We(b) {
  window.setTimeout(function() {
    var c;
    c = Qa(Ue);
    c = null == c ? null : La(c);
    p(c) ? (c = S.a(Ec, Qa(Ue)).call(null, b), he(Ue, J), Pe(c)) : c = b;
    var d = new X(null, 1, 5, Z, [oe], null), e = c.b ? c.b(oe) : c.call(null, oe), e = Be(e, Ke);
    c = Qc(c, d, e);
    return We(c);
  }, Qe);
  return Ve(b);
};
da("drawer.core.startLoop", function() {
  return Xe(new la(null, 2, [oe, zd, ne, new la(null, 1, [ze, xe], null)], null));
});
function Ye(a, b) {
  return ie.c(Ue, Gb, function(c) {
    var d = new X(null, 2, 5, Z, [oe, a], null), e = me.b(b);
    return Qc(c, d, new la(null, 3, [qe, e, pe, null, Ae, new la(null, 5, [we, 0, ve, 0, ue, 0, re, 0, te, ye], null)], null));
  });
}
da("drawer.api.addObject", Ye);
Ye("Linie", new X(null, 2, 5, Z, [new X(null, 4, 5, Z, [100, 100, 0, 0], null), new X(null, 4, 5, Z, [150, 300, 0, 0], null)], null));
Ye("Dreieck", new X(null, 3, 5, Z, [new X(null, 4, 5, Z, [300, 200, 0, 0], null), new X(null, 4, 5, Z, [400, 400, 0, 0], null), new X(null, 4, 5, Z, [200, 400, 0, 0], null)], null));
da("drawer.api.setSelected", function(a) {
  return ie.c(Ue, Gb, function(b) {
    return Qc(b, new X(null, 2, 5, Z, [ne, ze], null), a);
  });
});
da("drawer.api.displayPrompt", function() {
  var a = document.getElementById("prompt");
  document.getElementById("prompt-overlay").style.display = "block";
  return a.innerHTML = S.a(w, Ie);
});
da("drawer.api.closePrompt", function() {
  return Oe();
});
da("drawer.api.submitPrompt", function() {
  return Oe();
});

})();
