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
function da(a, b) {
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
function ka() {
  return new la(null, 5, [ma, !0, na, !0, oa, !1, pa, !1, qa, null], null);
}
function n(a) {
  return null != a && !1 !== a;
}
function ra(a) {
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
function ua(a) {
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
function va(a) {
  return Array.prototype.slice.call(arguments);
}
var wa = {}, xa = {};
function ya(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = ya[m(null == a ? null : a)];
  if (!b && (b = ya._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function za(a) {
  if (a ? a.O : a) {
    return a.O(a);
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
  if (a ? a.I : a) {
    return a.I(a, b);
  }
  var c;
  c = Ba[m(null == a ? null : a)];
  if (!c && (c = Ba._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ca = {}, y = function() {
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
}(), Da = {};
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
var Ea = {}, Fa = function() {
  function a(a, b, c) {
    if (a ? a.Q : a) {
      return a.Q(a, b, c);
    }
    var g;
    g = Fa[m(null == a ? null : a)];
    if (!g && (g = Fa._, !g)) {
      throw u("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.P : a) {
      return a.P(a, b);
    }
    var c;
    c = Fa[m(null == a ? null : a)];
    if (!c && (c = Fa._, !c)) {
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
function Ga(a, b, c) {
  if (a ? a.ya : a) {
    return a.ya(a, b, c);
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
  if (a ? a.qb : a) {
    return a.qb();
  }
  var b;
  b = Ja[m(null == a ? null : a)];
  if (!b && (b = Ja._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ka(a) {
  if (a ? a.rb : a) {
    return a.rb();
  }
  var b;
  b = Ka[m(null == a ? null : a)];
  if (!b && (b = Ka._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
function La(a) {
  if (a ? a.Ba : a) {
    return a.Ba(a);
  }
  var b;
  b = La[m(null == a ? null : a)];
  if (!b && (b = La._, !b)) {
    throw u("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Ma = {};
function Na(a, b, c) {
  if (a ? a.ib : a) {
    return a.ib(a, b, c);
  }
  var d;
  d = Na[m(null == a ? null : a)];
  if (!d && (d = Na._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Oa(a) {
  if (a ? a.Ua : a) {
    return a.Ua(a);
  }
  var b;
  b = Oa[m(null == a ? null : a)];
  if (!b && (b = Oa._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Pa = {};
function Qa(a) {
  if (a ? a.u : a) {
    return a.u(a);
  }
  var b;
  b = Qa[m(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Ra = {};
function Sa(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = Sa[m(null == a ? null : a)];
  if (!c && (c = Sa._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Ta = {}, Ua = function() {
  function a(a, b, c) {
    if (a ? a.T : a) {
      return a.T(a, b, c);
    }
    var g;
    g = Ua[m(null == a ? null : a)];
    if (!g && (g = Ua._, !g)) {
      throw u("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.S : a) {
      return a.S(a, b);
    }
    var c;
    c = Ua[m(null == a ? null : a)];
    if (!c && (c = Ua._, !c)) {
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
function Va(a, b) {
  if (a ? a.B : a) {
    return a.B(a, b);
  }
  var c;
  c = Va[m(null == a ? null : a)];
  if (!c && (c = Va._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Xa(a) {
  if (a ? a.C : a) {
    return a.C(a);
  }
  var b;
  b = Xa[m(null == a ? null : a)];
  if (!b && (b = Xa._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Ya = {};
function Za(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = Za[m(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var $a = {};
function D(a, b) {
  if (a ? a.ub : a) {
    return a.ub(0, b);
  }
  var c;
  c = D[m(null == a ? null : a)];
  if (!c && (c = D._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var ab = {};
function bb(a, b, c) {
  if (a ? a.v : a) {
    return a.v(a, b, c);
  }
  var d;
  d = bb[m(null == a ? null : a)];
  if (!d && (d = bb._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function cb(a, b, c) {
  if (a ? a.tb : a) {
    return a.tb(0, b, c);
  }
  var d;
  d = cb[m(null == a ? null : a)];
  if (!d && (d = cb._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function db(a) {
  if (a ? a.za : a) {
    return a.za(a);
  }
  var b;
  b = db[m(null == a ? null : a)];
  if (!b && (b = db._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function eb(a, b) {
  if (a ? a.La : a) {
    return a.La(a, b);
  }
  var c;
  c = eb[m(null == a ? null : a)];
  if (!c && (c = eb._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function fb(a) {
  if (a ? a.Ma : a) {
    return a.Ma(a);
  }
  var b;
  b = fb[m(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function gb(a, b, c) {
  if (a ? a.Ca : a) {
    return a.Ca(a, b, c);
  }
  var d;
  d = gb[m(null == a ? null : a)];
  if (!d && (d = gb._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function hb(a, b, c) {
  if (a ? a.sb : a) {
    return a.sb(0, b, c);
  }
  var d;
  d = hb[m(null == a ? null : a)];
  if (!d && (d = hb._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function ib(a) {
  if (a ? a.nb : a) {
    return a.nb();
  }
  var b;
  b = ib[m(null == a ? null : a)];
  if (!b && (b = ib._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function jb(a) {
  if (a ? a.Sa : a) {
    return a.Sa(a);
  }
  var b;
  b = jb[m(null == a ? null : a)];
  if (!b && (b = jb._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function kb(a) {
  if (a ? a.Ta : a) {
    return a.Ta(a);
  }
  var b;
  b = kb[m(null == a ? null : a)];
  if (!b && (b = kb._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function lb(a) {
  if (a ? a.Ra : a) {
    return a.Ra(a);
  }
  var b;
  b = lb[m(null == a ? null : a)];
  if (!b && (b = lb._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function mb(a) {
  this.Rb = a;
  this.o = 0;
  this.g = 1073741824;
}
mb.prototype.ub = function(a, b) {
  return this.Rb.append(b);
};
function nb(a) {
  var b = new ga;
  a.v(null, new mb(b), ka());
  return "" + v(b);
}
function ob(a, b) {
  if (n(E.a ? E.a(a, b) : E.call(null, a, b))) {
    return 0;
  }
  var c = ra(a.M);
  if (n(c ? b.M : c)) {
    return-1;
  }
  if (n(a.M)) {
    if (ra(b.M)) {
      return 1;
    }
    c = pb.a ? pb.a(a.M, b.M) : pb.call(null, a.M, b.M);
    return 0 === c ? pb.a ? pb.a(a.name, b.name) : pb.call(null, a.name, b.name) : c;
  }
  return qb ? pb.a ? pb.a(a.name, b.name) : pb.call(null, a.name, b.name) : null;
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
  return null != a ? a : this.la = a = rb.a ? rb.a(G.b ? G.b(this.M) : G.call(null, this.M), G.b ? G.b(this.name) : G.call(null, this.name)) : rb.call(null, G.b ? G.b(this.M) : G.call(null, this.M), G.b ? G.b(this.name) : G.call(null, this.name));
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
        return Fa.d(c, this, null);
      case 3:
        return Fa.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.b = function(a) {
  return Fa.d(a, this, null);
};
h.a = function(a, b) {
  return Fa.d(a, this, b);
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
    return 0 === a.length ? null : new sb(a, 0);
  }
  if (s(Ya, a)) {
    return Za(a);
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
function J(a) {
  return null != a ? a && (a.g & 64 || a.Aa) ? a.W(null) : (a = H(a)) ? B(a) : K : K;
}
function M(a) {
  return null == a ? null : a && (a.g & 128 || a.$b) ? a.ga(null) : H(J(a));
}
var E = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Va(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (M(e)) {
            a = d, d = I(e), e = M(e);
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
      a = M(a);
      var d = I(a);
      a = J(a);
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
        return c.e(b, e, N(arguments, 2));
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
xa["null"] = !0;
ya["null"] = function() {
  return 0;
};
Date.prototype.B = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Va.number = function(a, b) {
  return a === b;
};
Pa["function"] = !0;
Qa["function"] = function() {
  return null;
};
wa["function"] = !0;
Xa._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
var tb = function() {
  function a(a, b, c, d) {
    for (var l = ya(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, y.a(a, d)) : b.call(null, c, y.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = ya(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, y.a(a, l)) : b.call(null, c, y.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = ya(a);
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
}(), ub = function() {
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
function vb(a) {
  return a ? a.g & 2 || a.Bb ? !0 : a.g ? !1 : s(xa, a) : s(xa, a);
}
function wb(a) {
  return a ? a.g & 16 || a.ob ? !0 : a.g ? !1 : s(Ca, a) : s(Ca, a);
}
function sb(a, b) {
  this.c = a;
  this.k = b;
  this.g = 166199550;
  this.o = 8192;
}
h = sb.prototype;
h.C = function() {
  return xb.b ? xb.b(this) : xb.call(null, this);
};
h.ga = function() {
  return this.k + 1 < this.c.length ? new sb(this.c, this.k + 1) : null;
};
h.I = function(a, b) {
  return O.a ? O.a(b, this) : O.call(null, b, this);
};
h.toString = function() {
  return nb(this);
};
h.S = function(a, b) {
  return ub.j(this.c, b, this.c[this.k], this.k + 1);
};
h.T = function(a, b, c) {
  return ub.j(this.c, b, c, this.k);
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
  return this.k + 1 < this.c.length ? new sb(this.c, this.k + 1) : K;
};
h.B = function(a, b) {
  return yb.a ? yb.a(this, b) : yb.call(null, this, b);
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
  return K;
};
var zb = function() {
  function a(a, b) {
    return b < a.length ? new sb(a, b) : null;
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
}(), N = function() {
  function a(a, b) {
    return zb.a(a, b);
  }
  function b(a) {
    return zb.a(a, 0);
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
Va._ = function(a, b) {
  return a === b;
};
var Ab = function() {
  function a(a, b) {
    return null != a ? Ba(a, b) : Ba(K, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (n(e)) {
          a = b.a(a, d), d = I(e), e = M(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function P(a) {
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
          if (s(xa, a)) {
            a = ya(a);
          } else {
            if (t) {
              a: {
                a = H(a);
                for (var b = 0;;) {
                  if (vb(a)) {
                    a = b + ya(a);
                    break a;
                  }
                  a = M(a);
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
var Bb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return H(a) ? I(a) : c;
      }
      if (wb(a)) {
        return y.d(a, b, c);
      }
      if (H(a)) {
        a = M(a), b -= 1;
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
      if (wb(a)) {
        return y.a(a, b);
      }
      if (H(a)) {
        var c = M(a), g = b - 1;
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
}(), Q = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.g & 16 || a.ob)) {
      return a.aa(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (s(Ca, a)) {
      return y.a(a, b);
    }
    if (a ? a.g & 64 || a.Aa || (a.g ? 0 : s(Da, a)) : s(Da, a)) {
      return Bb.d(a, b, c);
    }
    if (t) {
      throw Error([v("nth not supported on this type "), v(ua(sa(a)))].join(""));
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
    if (a && (a.g & 16 || a.ob)) {
      return a.K(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s(Ca, a)) {
      return y.a(a, b);
    }
    if (a ? a.g & 64 || a.Aa || (a.g ? 0 : s(Da, a)) : s(Da, a)) {
      return Bb.a(a, b);
    }
    if (t) {
      throw Error([v("nth not supported on this type "), v(ua(sa(a)))].join(""));
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
}(), Cb = function() {
  function a(a, b, c) {
    return null != a ? a && (a.g & 256 || a.pb) ? a.Q(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(Ea, a) ? Fa.d(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.g & 256 || a.pb) ? a.P(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(Ea, a) ? Fa.a(a, b) : null;
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
}(), Eb = function() {
  function a(a, b, c) {
    return null != a ? Ga(a, b, c) : Db.a ? Db.a([b], [c]) : Db.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.d(a, d, e), n(l)) {
          d = I(l), e = I(M(l)), l = M(M(l));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var b = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.h = c.h;
  b.d = a;
  b.e = c.e;
  return b;
}();
function Fb(a) {
  var b = "function" == m(a);
  return b ? b : a ? n(n(null) ? null : a.Ab) ? !0 : a.Jb ? !1 : s(wa, a) : s(wa, a);
}
var Hb = function Gb(b, c) {
  return Fb(b) && !(b ? b.g & 262144 || b.dc || (b.g ? 0 : s(Ra, b)) : s(Ra, b)) ? Gb(function() {
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
        1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return R.a ? R.a(b.Ga, d) : R.call(null, b.Ga, d);
      }
      b.l = 1;
      b.h = function(b) {
        var d = I(b);
        b = J(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ha.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(x(c)));
    }, ha.prototype.a = function() {
      function b(d) {
        var g = null;
        0 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, g);
      }
      function c(b) {
        return R.a ? R.a(self__.Ga, b) : R.call(null, self__.Ga, b);
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
    return new ha(c, b, Gb, null);
  }(), c) : null == b ? null : Sa(b, c);
};
function Ib(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.Eb || (a.g ? 0 : s(Pa, a)) : s(Pa, a) : b) ? Qa(a) : null;
}
var Jb = {}, Kb = 0;
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
            255 < Kb && (Jb = {}, Kb = 0);
            var b = Jb[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Jb[a] = b;
              Kb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : t ? Xa(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Lb(a) {
  return a ? a.g & 16384 || a.cc ? !0 : a.g ? !1 : s(Ma, a) : s(Ma, a);
}
function Mb(a) {
  return a ? a.o & 512 || a.Ub ? !0 : !1 : !1;
}
function Nb(a) {
  var b = [];
  fa(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function Ob(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Pb = {};
function Qb(a) {
  return null == a ? !1 : a ? a.g & 64 || a.Aa ? !0 : a.g ? !1 : s(Da, a) : s(Da, a);
}
function Rb(a) {
  return n(a) ? !0 : !1;
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
  if (sa(a) === sa(b)) {
    return a && (a.o & 2048 || a.Ja) ? a.Ka(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Sb = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = pb(Q.a(a, g), Q.a(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = P(a), g = P(b);
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
}(), Ub = function() {
  function a(a, b, c) {
    for (c = H(c);;) {
      if (c) {
        b = a.a ? a.a(b, I(c)) : a.call(null, b, I(c)), c = M(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = H(b);
    return c ? Tb.d ? Tb.d(a, I(c), M(c)) : Tb.call(null, a, I(c), M(c)) : a.n ? a.n() : a.call(null);
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
}(), Tb = function() {
  function a(a, b, c) {
    return c && (c.g & 524288 || c.Gb) ? c.T(null, a, b) : c instanceof Array ? ub.d(c, a, b) : "string" === typeof c ? ub.d(c, a, b) : s(Ta, c) ? Ua.d(c, a, b) : t ? Ub.d(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.g & 524288 || b.Gb) ? b.S(null, a) : b instanceof Array ? ub.a(b, a) : "string" === typeof b ? ub.a(b, a) : s(Ta, b) ? Ua.a(b, a) : t ? Ub.a(a, b) : null;
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
}(), Vb = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Tb.d(a, b + c, d);
    }
    b.l = 2;
    b.h = function(a) {
      var b = I(a);
      a = M(a);
      var c = I(a);
      a = J(a);
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
        return b.e(a, d, N(arguments, 2));
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
function Wb(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function Xb(a) {
  return Wb((a - a % 2) / 2);
}
var Yb = function() {
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
function Zb(a) {
  return Wb(Yb.b(a));
}
function $b(a) {
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
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ga(b.b(a)), l = d;;) {
        if (n(l)) {
          e = e.append(b.b(I(l))), l = M(l);
        } else {
          return e.toString();
        }
      }
    }
    a.l = 1;
    a.h = function(a) {
      var b = I(a);
      a = J(a);
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
        return c.e(b, N(arguments, 1));
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
function yb(a, b) {
  return Rb((b ? b.g & 16777216 || b.bc || (b.g ? 0 : s($a, b)) : s($a, b)) ? function() {
    for (var c = H(a), d = H(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (E.a(I(c), I(d))) {
        c = M(c), d = M(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function rb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function xb(a) {
  if (H(a)) {
    var b = G(I(a));
    for (a = M(a);;) {
      if (null == a) {
        return b;
      }
      b = rb(b, G(I(a)));
      a = M(a);
    }
  } else {
    return 0;
  }
}
function ac(a) {
  var b = 0;
  for (a = H(a);;) {
    if (a) {
      var c = I(a), b = (b + (G(bc.b ? bc.b(c) : bc.call(null, c)) ^ G(cc.b ? cc.b(c) : cc.call(null, c)))) % 4503599627370496;
      a = M(a);
    } else {
      return b;
    }
  }
}
function dc(a, b, c, d, e) {
  this.i = a;
  this.Ea = b;
  this.ha = c;
  this.count = d;
  this.m = e;
  this.g = 65937646;
  this.o = 8192;
}
h = dc.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = xb(this);
};
h.ga = function() {
  return 1 === this.count ? null : this.ha;
};
h.I = function(a, b) {
  return new dc(this.i, b, this, this.count + 1, null);
};
h.toString = function() {
  return nb(this);
};
h.S = function(a, b) {
  return Ub.a(b, this);
};
h.T = function(a, b, c) {
  return Ub.d(b, c, this);
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
  return 1 === this.count ? K : this.ha;
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return new dc(b, this.Ea, this.ha, this.count, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return K;
};
function ec(a) {
  this.i = a;
  this.g = 65937614;
  this.o = 8192;
}
h = ec.prototype;
h.C = function() {
  return 0;
};
h.ga = function() {
  return null;
};
h.I = function(a, b) {
  return new dc(this.i, b, null, 1, null);
};
h.toString = function() {
  return nb(this);
};
h.S = function(a, b) {
  return Ub.a(b, this);
};
h.T = function(a, b, c) {
  return Ub.d(b, c, this);
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
  return K;
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return new ec(b);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return this;
};
var K = new ec(null), fc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof sb && 0 === a.k) {
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
    for (var e = K;;) {
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
function gc(a, b, c, d) {
  this.i = a;
  this.Ea = b;
  this.ha = c;
  this.m = d;
  this.g = 65929452;
  this.o = 8192;
}
h = gc.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = xb(this);
};
h.ga = function() {
  return null == this.ha ? null : H(this.ha);
};
h.I = function(a, b) {
  return new gc(null, b, this, this.m);
};
h.toString = function() {
  return nb(this);
};
h.S = function(a, b) {
  return Ub.a(b, this);
};
h.T = function(a, b, c) {
  return Ub.d(b, c, this);
};
h.G = function() {
  return this;
};
h.U = function() {
  return this.Ea;
};
h.W = function() {
  return null == this.ha ? K : this.ha;
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return new gc(b, this.Ea, this.ha, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Hb(K, this.i);
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Aa)) ? new gc(null, a, b, null) : new gc(null, a, H(b), null);
}
function S(a, b, c, d) {
  this.M = a;
  this.name = b;
  this.ja = c;
  this.la = d;
  this.g = 2153775105;
  this.o = 4096;
}
h = S.prototype;
h.v = function(a, b) {
  return D(b, [v(":"), v(this.ja)].join(""));
};
h.C = function() {
  null == this.la && (this.la = rb(G(this.M), G(this.name)) + 2654435769);
  return this.la;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Cb.a(c, this);
      case 3:
        return Cb.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
h.b = function(a) {
  return Cb.a(a, this);
};
h.a = function(a, b) {
  return Cb.d(a, this, b);
};
h.B = function(a, b) {
  return b instanceof S ? this.ja === b.ja : !1;
};
h.toString = function() {
  return[v(":"), v(this.ja)].join("");
};
function hc(a, b) {
  return a === b ? !0 : a instanceof S && b instanceof S ? a.ja === b.ja : !1;
}
var jc = function() {
  function a(a, b) {
    return new S(a, b, [v(n(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof S) {
      return a;
    }
    if (a instanceof F) {
      var b;
      if (a && (a.o & 4096 || a.Fb)) {
        b = a.M;
      } else {
        throw Error([v("Doesn't support namespace: "), v(a)].join(""));
      }
      return new S(b, ic.b ? ic.b(a) : ic.call(null, a), a.ka, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new S(b[0], b[1], a, null) : new S(null, b[0], a, null)) : null;
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
function T(a, b, c, d) {
  this.i = a;
  this.wa = b;
  this.r = c;
  this.m = d;
  this.o = 0;
  this.g = 32374988;
}
h = T.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = xb(this);
};
h.ga = function() {
  Za(this);
  return null == this.r ? null : M(this.r);
};
h.I = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return nb(this);
};
function kc(a) {
  null != a.wa && (a.r = a.wa.n ? a.wa.n() : a.wa.call(null), a.wa = null);
  return a.r;
}
h.S = function(a, b) {
  return Ub.a(b, this);
};
h.T = function(a, b, c) {
  return Ub.d(b, c, this);
};
h.G = function() {
  kc(this);
  if (null == this.r) {
    return null;
  }
  for (var a = this.r;;) {
    if (a instanceof T) {
      a = kc(a);
    } else {
      return this.r = a, H(this.r);
    }
  }
};
h.U = function() {
  Za(this);
  return null == this.r ? null : I(this.r);
};
h.W = function() {
  Za(this);
  return null != this.r ? J(this.r) : K;
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return new T(b, this.wa, this.r, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Hb(K, this.i);
};
function lc(a, b) {
  this.H = a;
  this.end = b;
  this.o = 0;
  this.g = 2;
}
lc.prototype.J = function() {
  return this.end;
};
lc.prototype.add = function(a) {
  this.H[this.end] = a;
  return this.end += 1;
};
lc.prototype.N = function() {
  var a = new mc(this.H, 0, this.end);
  this.H = null;
  return a;
};
function mc(a, b, c) {
  this.c = a;
  this.s = b;
  this.end = c;
  this.o = 0;
  this.g = 524306;
}
h = mc.prototype;
h.S = function(a, b) {
  return ub.j(this.c, b, this.c[this.s], this.s + 1);
};
h.T = function(a, b, c) {
  return ub.j(this.c, b, c, this.s);
};
h.nb = function() {
  if (this.s === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new mc(this.c, this.s + 1, this.end);
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
var nc = function() {
  function a(a, b, c) {
    return new mc(a, b, c);
  }
  function b(a, b) {
    return new mc(a, b, a.length);
  }
  function c(a) {
    return new mc(a, 0, a.length);
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
function oc(a, b, c, d) {
  this.N = a;
  this.ea = b;
  this.i = c;
  this.m = d;
  this.g = 31850732;
  this.o = 1536;
}
h = oc.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = xb(this);
};
h.ga = function() {
  if (1 < ya(this.N)) {
    return new oc(ib(this.N), this.ea, this.i, null);
  }
  var a = Za(this.ea);
  return null == a ? null : a;
};
h.I = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return nb(this);
};
h.G = function() {
  return this;
};
h.U = function() {
  return y.a(this.N, 0);
};
h.W = function() {
  return 1 < ya(this.N) ? new oc(ib(this.N), this.ea, this.i, null) : null == this.ea ? K : this.ea;
};
h.Ra = function() {
  return null == this.ea ? null : this.ea;
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return new oc(this.N, this.ea, b, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Hb(K, this.i);
};
h.Sa = function() {
  return this.N;
};
h.Ta = function() {
  return null == this.ea ? K : this.ea;
};
function pc(a, b) {
  return 0 === ya(a) ? b : new oc(a, b, null, null);
}
function qc(a) {
  for (var b = [];;) {
    if (H(a)) {
      b.push(I(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function rc(a, b) {
  if (vb(a)) {
    return P(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && H(c)) {
      c = M(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var tc = function sc(b) {
  return null == b ? null : null == M(b) ? H(I(b)) : t ? O(I(b), sc(M(b))) : null;
}, uc = function() {
  function a(a, b) {
    return new T(null, function() {
      var c = H(a);
      return c ? Mb(c) ? pc(jb(c), d.a(kb(c), b)) : O(I(c), d.a(J(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new T(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new T(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function r(a, b) {
        return new T(null, function() {
          var c = H(a);
          return c ? Mb(c) ? pc(jb(c), r(kb(c), b)) : O(I(c), r(J(c), b)) : n(b) ? r(I(b), M(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.l = 2;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
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
        return e.e(d, g, N(arguments, 2));
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
}(), vc = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)));
  }
  function b(a, b, c) {
    return O(a, O(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, q) {
      var r = null;
      4 < arguments.length && (r = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, r);
    }
    function b(a, c, d, e, f) {
      return O(a, O(c, O(d, O(e, tc(f)))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var q = I(a);
      a = J(a);
      return b(c, d, e, q, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return H(c);
      case 2:
        return O(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.e(c, f, g, k, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 4;
  c.h = d.h;
  c.b = function(a) {
    return H(a);
  };
  c.a = function(a, b) {
    return O(a, b);
  };
  c.d = b;
  c.j = a;
  c.e = d.e;
  return c;
}();
function wc(a) {
  return fb(a);
}
var xc = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = eb(a, c), n(d)) {
          c = I(d), d = M(d);
        } else {
          return a;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var g = I(a);
      a = J(a);
      return b(c, g, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return eb(a, d);
      default:
        return b.e(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.h = b.h;
  a.a = function(a, b) {
    return eb(a, b);
  };
  a.e = b.e;
  return a;
}(), yc = function() {
  var a = null, b = function() {
    function a(c, f, g, k) {
      var l = null;
      3 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = gb(a, c, d), n(k)) {
          c = I(k), d = I(M(k)), k = M(M(k));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var g = I(a);
      a = M(a);
      var k = I(a);
      a = J(a);
      return b(c, g, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return gb(a, d, e);
      default:
        return b.e(a, d, e, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 3;
  a.h = b.h;
  a.d = function(a, b, e) {
    return gb(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function zc(a, b, c) {
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
    return a.gb ? a.gb(c, d, e, f, g, k, l, p) : a.gb ? a.gb(c, d, e, f, g, k, l, p) : a.call(null, c, d, e, f, g, k, l, p);
  }
  var q = z(r), w = B(r);
  if (9 === b) {
    return a.hb ? a.hb(c, d, e, f, g, k, l, p, q) : a.hb ? a.hb(c, d, e, f, g, k, l, p, q) : a.call(null, c, d, e, f, g, k, l, p, q);
  }
  var r = z(w), C = B(w);
  if (10 === b) {
    return a.Va ? a.Va(c, d, e, f, g, k, l, p, q, r) : a.Va ? a.Va(c, d, e, f, g, k, l, p, q, r) : a.call(null, c, d, e, f, g, k, l, p, q, r);
  }
  var w = z(C), A = B(C);
  if (11 === b) {
    return a.Wa ? a.Wa(c, d, e, f, g, k, l, p, q, r, w) : a.Wa ? a.Wa(c, d, e, f, g, k, l, p, q, r, w) : a.call(null, c, d, e, f, g, k, l, p, q, r, w);
  }
  var C = z(A), L = B(A);
  if (12 === b) {
    return a.Xa ? a.Xa(c, d, e, f, g, k, l, p, q, r, w, C) : a.Xa ? a.Xa(c, d, e, f, g, k, l, p, q, r, w, C) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, C);
  }
  var A = z(L), W = B(L);
  if (13 === b) {
    return a.Ya ? a.Ya(c, d, e, f, g, k, l, p, q, r, w, C, A) : a.Ya ? a.Ya(c, d, e, f, g, k, l, p, q, r, w, C, A) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, C, A);
  }
  var L = z(W), Y = B(W);
  if (14 === b) {
    return a.Za ? a.Za(c, d, e, f, g, k, l, p, q, r, w, C, A, L) : a.Za ? a.Za(c, d, e, f, g, k, l, p, q, r, w, C, A, L) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, C, A, L);
  }
  var W = z(Y), ea = B(Y);
  if (15 === b) {
    return a.$a ? a.$a(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W) : a.$a ? a.$a(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, C, A, L, W);
  }
  var Y = z(ea), ta = B(ea);
  if (16 === b) {
    return a.ab ? a.ab(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y) : a.ab ? a.ab(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y);
  }
  var ea = z(ta), ja = B(ta);
  if (17 === b) {
    return a.bb ? a.bb(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea) : a.bb ? a.bb(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea);
  }
  var ta = z(ja), Wa = B(ja);
  if (18 === b) {
    return a.cb ? a.cb(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea, ta) : a.cb ? a.cb(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea, ta) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea, ta);
  }
  ja = z(Wa);
  Wa = B(Wa);
  if (19 === b) {
    return a.eb ? a.eb(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea, ta, ja) : a.eb ? a.eb(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea, ta, ja) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea, ta, ja);
  }
  var cd = z(Wa);
  B(Wa);
  if (20 === b) {
    return a.fb ? a.fb(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea, ta, ja, cd) : a.fb ? a.fb(c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea, ta, ja, cd) : a.call(null, c, d, e, f, g, k, l, p, q, r, w, C, A, L, W, Y, ea, ta, ja, cd);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var R = function() {
  function a(a, b, c, d, e) {
    b = vc.j(b, c, d, e);
    c = a.l;
    return a.h ? (d = rc(b, c + 1), d <= c ? zc(a, d, b) : a.h(b)) : a.apply(a, qc(b));
  }
  function b(a, b, c, d) {
    b = vc.d(b, c, d);
    c = a.l;
    return a.h ? (d = rc(b, c + 1), d <= c ? zc(a, d, b) : a.h(b)) : a.apply(a, qc(b));
  }
  function c(a, b, c) {
    b = vc.a(b, c);
    c = a.l;
    if (a.h) {
      var d = rc(b, c + 1);
      return d <= c ? zc(a, d, b) : a.h(b);
    }
    return a.apply(a, qc(b));
  }
  function d(a, b) {
    var c = a.l;
    if (a.h) {
      var d = rc(b, c + 1);
      return d <= c ? zc(a, d, b) : a.h(b);
    }
    return a.apply(a, qc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, C) {
      var A = null;
      5 < arguments.length && (A = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, A);
    }
    function b(a, c, d, e, f, g) {
      c = O(c, O(d, O(e, O(f, tc(g)))));
      d = a.l;
      return a.h ? (e = rc(c, d + 1), e <= d ? zc(a, e, c) : a.h(c)) : a.apply(a, qc(c));
    }
    a.l = 5;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var f = I(a);
      a = M(a);
      var g = I(a);
      a = J(a);
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
        return f.e(e, k, l, p, q, N(arguments, 5));
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
}(), Ac = function() {
  function a(a, b) {
    return!E.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return ra(R.j(E, a, c, d));
    }
    a.l = 2;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = J(a);
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
        return c.e(b, e, N(arguments, 2));
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
function Bc(a, b) {
  for (;;) {
    if (null == H(b)) {
      return!0;
    }
    if (n(a.b ? a.b(I(b)) : a.call(null, I(b)))) {
      var c = a, d = M(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function Cc(a) {
  return a;
}
var Dc = function() {
  function a(a, b, c, e) {
    return new T(null, function() {
      var p = H(b), q = H(c), r = H(e);
      return p && q && r ? O(a.d ? a.d(I(p), I(q), I(r)) : a.call(null, I(p), I(q), I(r)), d.j(a, J(p), J(q), J(r))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new T(null, function() {
      var e = H(b), p = H(c);
      return e && p ? O(a.a ? a.a(I(e), I(p)) : a.call(null, I(e), I(p)), d.d(a, J(e), J(p))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new T(null, function() {
      var c = H(b);
      if (c) {
        if (Mb(c)) {
          for (var e = jb(c), p = P(e), q = new lc(Array(p), 0), r = 0;;) {
            if (r < p) {
              var w = a.b ? a.b(y.a(e, r)) : a.call(null, y.a(e, r));
              q.add(w);
              r += 1;
            } else {
              break;
            }
          }
          return pc(q.N(), d.a(a, kb(c)));
        }
        return O(a.b ? a.b(I(c)) : a.call(null, I(c)), d.a(a, J(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var w = null;
      4 < arguments.length && (w = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, e, f, g) {
      var w = function A(a) {
        return new T(null, function() {
          var b = d.a(H, a);
          return Bc(Cc, b) ? O(d.a(I, b), A(d.a(J, b))) : null;
        }, null, null);
      };
      return d.a(function() {
        return function(b) {
          return R.a(a, b);
        };
      }(w), w(Ab.e(g, f, N([e, c], 0))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var f = I(a);
      a = J(a);
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
        return e.e(d, g, k, l, N(arguments, 4));
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
}(), Fc = function Ec(b, c) {
  return new T(null, function() {
    if (0 < b) {
      var d = H(c);
      return d ? O(I(d), Ec(b - 1, J(d))) : null;
    }
    return null;
  }, null, null);
};
function Gc(a, b) {
  return new T(null, function(c) {
    return function() {
      return c(a, b);
    };
  }(function(a, b) {
    for (;;) {
      var e = H(b);
      if (0 < a && e) {
        var f = a - 1, e = J(e);
        a = f;
        b = e;
      } else {
        return e;
      }
    }
  }), null, null);
}
function Hc(a, b) {
  return null != a ? a && (a.o & 4 || a.Wb) ? wc(Tb.d(eb, db(a), b)) : Tb.d(Ba, a, b) : Tb.d(Ab, K, b);
}
var Jc = function() {
  function a(a, b, c, d) {
    return Hc(Ic, Dc.j(a, b, c, d));
  }
  function b(a, b, c) {
    return Hc(Ic, Dc.d(a, b, c));
  }
  function c(a, b) {
    return wc(Tb.d(function(b, c) {
      return xc.a(b, a.b ? a.b(c) : a.call(null, c));
    }, db(Ic), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var w = null;
      4 < arguments.length && (w = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return Hc(Ic, R.e(Dc, a, c, d, e, N([f], 0)));
    }
    a.l = 4;
    a.h = function(a) {
      var c = I(a);
      a = M(a);
      var d = I(a);
      a = M(a);
      var e = I(a);
      a = M(a);
      var f = I(a);
      a = J(a);
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
        return e.e(d, g, k, l, N(arguments, 4));
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
}();
function Kc(a, b) {
  return wc(Tb.d(function(b, d) {
    return n(a.b ? a.b(d) : a.call(null, d)) ? xc.a(b, d) : b;
  }, db(Ic), b));
}
var Lc = function() {
  function a(a, b, c, k) {
    return new T(null, function() {
      var l = H(k);
      if (l) {
        var p = Fc(a, l);
        return a === P(p) ? O(p, d.j(a, b, c, Gc(b, l))) : Ba(K, Fc(a, uc.a(p, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new T(null, function() {
      var k = H(c);
      if (k) {
        var l = Fc(a, k);
        return a === P(l) ? O(l, d.d(a, b, Gc(b, k))) : null;
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
}(), Mc = function() {
  function a(a, b, c) {
    var g = Pb;
    for (b = H(b);;) {
      if (b) {
        var k = a;
        if (k ? k.g & 256 || k.pb || (k.g ? 0 : s(Ea, k)) : s(Ea, k)) {
          a = Cb.d(a, I(b), g);
          if (g === a) {
            return c;
          }
          b = M(b);
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
}(), Oc = function Nc(b, c, d) {
  var e = Q.d(c, 0, null), f;
  a: {
    f = 1;
    for (c = H(c);;) {
      if (c && 0 < f) {
        f -= 1, c = M(c);
      } else {
        f = c;
        break a;
      }
    }
    f = void 0;
  }
  return f ? Eb.d(b, e, Nc(Cb.a(b, e), f, d)) : Eb.d(b, e, d);
};
function Pc(a, b) {
  this.q = a;
  this.c = b;
}
function Qc(a) {
  return new Pc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Rc(a) {
  return new Pc(a.q, x(a.c));
}
function Sc(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Tc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Qc(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Vc = function Uc(b, c, d, e) {
  var f = Rc(d), g = b.f - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? Uc(b, c - 5, d, e) : Tc(null, c - 5, e), f.c[g] = b);
  return f;
};
function Wc(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function Xc(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.c[0];
    } else {
      return b.c;
    }
  }
}
function Yc(a, b) {
  if (b >= Sc(a)) {
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
function Zc(a, b) {
  return 0 <= b && b < a.f ? Yc(a, b) : Wc(b, a.f);
}
var ad = function $c(b, c, d, e, f) {
  var g = Rc(d);
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = $c(b, c - 5, d.c[k], e, f);
    g.c[k] = b;
  }
  return g;
}, dd = function bd(b, c, d) {
  var e = b.f - 2 >>> c & 31;
  if (5 < c) {
    b = bd(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Rc(d);
    d.c[e] = b;
    return d;
  }
  return 0 === e ? null : t ? (d = Rc(d), d.c[e] = null, d) : null;
};
function U(a, b, c, d, e, f) {
  this.i = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.p = e;
  this.m = f;
  this.o = 8196;
  this.g = 167668511;
}
h = U.prototype;
h.za = function() {
  return new ed(this.f, this.shift, fd.b ? fd.b(this.root) : fd.call(null, this.root), gd.b ? gd.b(this.p) : gd.call(null, this.p));
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = xb(this);
};
h.P = function(a, b) {
  return Fa.d(this, b, null);
};
h.Q = function(a, b, c) {
  return "number" === typeof b ? y.d(this, b, c) : c;
};
h.ya = function(a, b, c) {
  if ("number" === typeof b) {
    return Na(this, b, c);
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
  if (32 > this.f - Sc(this)) {
    for (var c = this.p.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.p[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new U(this.i, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Qc(null), d.c[0] = this.root, e = Tc(null, this.shift, new Pc(null, this.p)), d.c[1] = e) : d = Vc(this, this.shift, this.root, new Pc(null, this.p));
  return new U(this.i, this.f + 1, c, d, [b], null);
};
h.qb = function() {
  return y.a(this, 0);
};
h.rb = function() {
  return y.a(this, 1);
};
h.toString = function() {
  return nb(this);
};
h.S = function(a, b) {
  return tb.a(this, b);
};
h.T = function(a, b, c) {
  return tb.d(this, b, c);
};
h.G = function() {
  return 0 === this.f ? null : 32 >= this.f ? new sb(this.p, 0) : t ? V.j ? V.j(this, Xc(this), 0, 0) : V.call(null, this, Xc(this), 0, 0) : null;
};
h.J = function() {
  return this.f;
};
h.Ba = function() {
  if (0 === this.f) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.f) {
    return Sa(Ic, this.i);
  }
  if (1 < this.f - Sc(this)) {
    return new U(this.i, this.f - 1, this.shift, this.root, this.p.slice(0, -1), null);
  }
  if (t) {
    var a = Yc(this, this.f - 2), b = dd(this, this.shift, this.root), b = null == b ? X : b, c = this.f - 1;
    return 5 < this.shift && null == b.c[1] ? new U(this.i, c, this.shift - 5, b.c[0], a, null) : new U(this.i, c, this.shift, b, a, null);
  }
  return null;
};
h.ib = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return Sc(this) <= b ? (a = x(this.p), a[b & 31] = c, new U(this.i, this.f, this.shift, this.root, a, null)) : new U(this.i, this.f, this.shift, ad(this, this.shift, this.root, b, c), this.p, null);
  }
  if (b === this.f) {
    return Ba(this, c);
  }
  if (t) {
    throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.f), v("]")].join(""));
  }
  return null;
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return new U(b, this.f, this.shift, this.root, this.p, this.m);
};
h.u = function() {
  return this.i;
};
h.K = function(a, b) {
  return Zc(this, b)[b & 31];
};
h.aa = function(a, b, c) {
  return 0 <= b && b < this.f ? Yc(this, b)[b & 31] : c;
};
h.O = function() {
  return Hb(Ic, this.i);
};
var X = new Pc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ic = new U(null, 0, 5, X, [], 0);
function hd(a, b) {
  var c = a.length, d = b ? a : x(a);
  if (32 > c) {
    return new U(null, c, 5, X, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, g = (new U(null, 32, 5, X, e, null)).za(null);;) {
    if (f < c) {
      e = f + 1, g = xc.a(g, d[f]), f = e;
    } else {
      return fb(g);
    }
  }
}
function id(a) {
  return fb(Tb.d(eb, db(Ic), a));
}
var jd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof sb && 0 === a.k ? hd.a ? hd.a(a.c, !0) : hd.call(null, a.c, !0) : id(a);
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function kd(a, b, c, d, e, f) {
  this.t = a;
  this.Z = b;
  this.k = c;
  this.s = d;
  this.i = e;
  this.m = f;
  this.g = 32243948;
  this.o = 1536;
}
h = kd.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = xb(this);
};
h.ga = function() {
  if (this.s + 1 < this.Z.length) {
    var a = V.j ? V.j(this.t, this.Z, this.k, this.s + 1) : V.call(null, this.t, this.Z, this.k, this.s + 1);
    return null == a ? null : a;
  }
  return lb(this);
};
h.I = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return nb(this);
};
h.S = function(a, b) {
  return tb.a(ld.d ? ld.d(this.t, this.k + this.s, P(this.t)) : ld.call(null, this.t, this.k + this.s, P(this.t)), b);
};
h.T = function(a, b, c) {
  return tb.d(ld.d ? ld.d(this.t, this.k + this.s, P(this.t)) : ld.call(null, this.t, this.k + this.s, P(this.t)), b, c);
};
h.G = function() {
  return this;
};
h.U = function() {
  return this.Z[this.s];
};
h.W = function() {
  if (this.s + 1 < this.Z.length) {
    var a = V.j ? V.j(this.t, this.Z, this.k, this.s + 1) : V.call(null, this.t, this.Z, this.k, this.s + 1);
    return null == a ? K : a;
  }
  return kb(this);
};
h.Ra = function() {
  var a = this.k + this.Z.length;
  return a < ya(this.t) ? V.j ? V.j(this.t, Yc(this.t, a), a, 0) : V.call(null, this.t, Yc(this.t, a), a, 0) : null;
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return V.F ? V.F(this.t, this.Z, this.k, this.s, b) : V.call(null, this.t, this.Z, this.k, this.s, b);
};
h.O = function() {
  return Hb(Ic, this.i);
};
h.Sa = function() {
  return nc.a(this.Z, this.s);
};
h.Ta = function() {
  var a = this.k + this.Z.length;
  return a < ya(this.t) ? V.j ? V.j(this.t, Yc(this.t, a), a, 0) : V.call(null, this.t, Yc(this.t, a), a, 0) : K;
};
var V = function() {
  function a(a, b, c, d, l) {
    return new kd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new kd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new kd(a, Zc(a, b), b, c, null, null);
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
function md(a, b, c, d, e) {
  this.i = a;
  this.$ = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.g = 166617887;
  this.o = 8192;
}
h = md.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = xb(this);
};
h.P = function(a, b) {
  return Fa.d(this, b, null);
};
h.Q = function(a, b, c) {
  return "number" === typeof b ? y.d(this, b, c) : c;
};
h.ya = function(a, b, c) {
  if ("number" === typeof b) {
    return Na(this, b, c);
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
  return nd.F ? nd.F(this.i, Na(this.$, this.end, b), this.start, this.end + 1, null) : nd.call(null, this.i, Na(this.$, this.end, b), this.start, this.end + 1, null);
};
h.toString = function() {
  return nb(this);
};
h.S = function(a, b) {
  return tb.a(this, b);
};
h.T = function(a, b, c) {
  return tb.d(this, b, c);
};
h.G = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : O(y.a(a.$, e), new T(null, function() {
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
  return nd.F ? nd.F(this.i, this.$, this.start, this.end - 1, null) : nd.call(null, this.i, this.$, this.start, this.end - 1, null);
};
h.ib = function(a, b, c) {
  var d = this, e = d.start + b;
  return nd.F ? nd.F(d.i, Eb.d(d.$, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : nd.call(null, d.i, Eb.d(d.$, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return nd.F ? nd.F(b, this.$, this.start, this.end, this.m) : nd.call(null, b, this.$, this.start, this.end, this.m);
};
h.u = function() {
  return this.i;
};
h.K = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Wc(b, this.end - this.start) : y.a(this.$, this.start + b);
};
h.aa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : y.d(this.$, this.start + b, c);
};
h.O = function() {
  return Hb(Ic, this.i);
};
function nd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof md) {
      c = b.start + c, d = b.start + d, b = b.$;
    } else {
      var f = P(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new md(a, b, c, d, e);
    }
  }
}
var ld = function() {
  function a(a, b, c) {
    return nd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.d(a, b, P(a));
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
function fd(a) {
  return new Pc({}, x(a.c));
}
function gd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Ob(a, 0, b, 0, a.length);
  return b;
}
var pd = function od(b, c, d, e) {
  d = b.root.q === d.q ? d : new Pc(b.root.q, x(d.c));
  var f = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? od(b, c - 5, g, e) : Tc(b.root.q, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function ed(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.p = d;
  this.g = 275;
  this.o = 88;
}
h = ed.prototype;
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
  return Fa.d(this, b, null);
};
h.Q = function(a, b, c) {
  return "number" === typeof b ? y.d(this, b, c) : c;
};
h.K = function(a, b) {
  if (this.root.q) {
    return Zc(this, b)[b & 31];
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
h.sb = function(a, b, c) {
  var d = this;
  if (d.root.q) {
    if (0 <= b && b < d.f) {
      return Sc(this) <= b ? d.p[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = d.root.q === k.q ? k : new Pc(d.root.q, x(k.c));
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
      return eb(this, c);
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
    return hb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.La = function(a, b) {
  if (this.root.q) {
    if (32 > this.f - Sc(this)) {
      this.p[this.f & 31] = b;
    } else {
      var c = new Pc(this.root.q, this.p), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.p = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Tc(this.root.q, this.shift, c);
        this.root = new Pc(this.root.q, d);
        this.shift = e;
      } else {
        this.root = pd(this, this.shift, this.root, c);
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
    var a = this.f - Sc(this), b = Array(a);
    Ob(this.p, 0, b, 0, a);
    return new U(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function qd() {
  this.o = 0;
  this.g = 2097152;
}
qd.prototype.B = function() {
  return!1;
};
var rd = new qd;
function sd(a, b) {
  return Rb((null == b ? 0 : b ? b.g & 1024 || b.Zb || (b.g ? 0 : s(Ha, b)) : s(Ha, b)) ? P(a) === P(b) ? Bc(Cc, Dc.a(function(a) {
    return E.a(Cb.d(b, I(a), rd), I(M(a)));
  }, a)) : null : null);
}
function td(a, b) {
  var c = a.c;
  if (b instanceof S) {
    a: {
      for (var d = c.length, e = b.ja, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof S && e === g.ja) {
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
function ud(a, b, c) {
  this.c = a;
  this.k = b;
  this.ra = c;
  this.o = 0;
  this.g = 32374990;
}
h = ud.prototype;
h.C = function() {
  return xb(this);
};
h.ga = function() {
  return this.k < this.c.length - 2 ? new ud(this.c, this.k + 2, this.ra) : null;
};
h.I = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return nb(this);
};
h.S = function(a, b) {
  return Ub.a(b, this);
};
h.T = function(a, b, c) {
  return Ub.d(b, c, this);
};
h.G = function() {
  return this;
};
h.J = function() {
  return(this.c.length - this.k) / 2;
};
h.U = function() {
  return new U(null, 2, 5, X, [this.c[this.k], this.c[this.k + 1]], null);
};
h.W = function() {
  return this.k < this.c.length - 2 ? new ud(this.c, this.k + 2, this.ra) : K;
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return new ud(this.c, this.k, b);
};
h.u = function() {
  return this.ra;
};
h.O = function() {
  return Hb(K, this.ra);
};
function la(a, b, c, d) {
  this.i = a;
  this.f = b;
  this.c = c;
  this.m = d;
  this.o = 8196;
  this.g = 16123663;
}
h = la.prototype;
h.za = function() {
  return new vd({}, this.c.length, x(this.c));
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.P = function(a, b) {
  return Fa.d(this, b, null);
};
h.Q = function(a, b, c) {
  a = td(this, b);
  return-1 === a ? c : this.c[a + 1];
};
h.ya = function(a, b, c) {
  a = td(this, b);
  if (-1 === a) {
    if (this.f < wd) {
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
      return new la(this.i, this.f + 1, e, null);
    }
    return Sa(Ga(Hc(xd, this), b, c), this.i);
  }
  return c === this.c[a + 1] ? this : t ? (b = x(this.c), b[a + 1] = c, new la(this.i, this.f, b, null)) : null;
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
  return Lb(b) ? Ga(this, y.a(b, 0), y.a(b, 1)) : Tb.d(Ba, this, b);
};
h.toString = function() {
  return nb(this);
};
h.G = function() {
  return 0 <= this.c.length - 2 ? new ud(this.c, 0, null) : null;
};
h.J = function() {
  return this.f;
};
h.B = function(a, b) {
  return sd(this, b);
};
h.w = function(a, b) {
  return new la(b, this.f, this.c, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Sa(yd, this.i);
};
var yd = new la(null, 0, [], null), wd = 8;
function vd(a, b, c) {
  this.ua = a;
  this.qa = b;
  this.c = c;
  this.o = 56;
  this.g = 258;
}
h = vd.prototype;
h.Ca = function(a, b, c) {
  if (n(this.ua)) {
    a = td(this, b);
    if (-1 === a) {
      return this.qa + 2 <= 2 * wd ? (this.qa += 2, this.c.push(b), this.c.push(c), this) : yc.d(zd.a ? zd.a(this.qa, this.c) : zd.call(null, this.qa, this.c), b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.La = function(a, b) {
  if (n(this.ua)) {
    if (b ? b.g & 2048 || b.Db || (b.g ? 0 : s(Ia, b)) : s(Ia, b)) {
      return gb(this, bc.b ? bc.b(b) : bc.call(null, b), cc.b ? cc.b(b) : cc.call(null, b));
    }
    for (var c = H(b), d = this;;) {
      var e = I(c);
      if (n(e)) {
        c = M(c), d = gb(d, bc.b ? bc.b(e) : bc.call(null, e), cc.b ? cc.b(e) : cc.call(null, e));
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
    return this.ua = !1, new la(null, Xb(this.qa), this.c, null);
  }
  throw Error("persistent! called twice");
};
h.P = function(a, b) {
  return Fa.d(this, b, null);
};
h.Q = function(a, b, c) {
  if (n(this.ua)) {
    return a = td(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.J = function() {
  if (n(this.ua)) {
    return Xb(this.qa);
  }
  throw Error("count after persistent!");
};
function zd(a, b) {
  for (var c = db(xd), d = 0;;) {
    if (d < a) {
      c = yc.d(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ad() {
  this.D = !1;
}
function Bd(a, b) {
  return a === b ? !0 : hc(a, b) ? !0 : t ? E.a(a, b) : null;
}
var Cd = function() {
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
}(), Dd = function() {
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
function Ed(a, b, c) {
  this.q = a;
  this.A = b;
  this.c = c;
}
h = Ed.prototype;
h.ca = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = $b(this.A & g - 1);
  if (0 === (this.A & g)) {
    var l = $b(this.A);
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
      k[c >>> b & 31] = Fd.ca(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.A >>> d & 1) && (k[d] = null != this.c[e] ? Fd.ca(a, b + 5, G(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Gd(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), Ob(this.c, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Ob(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.D = !0, a = this.va(a), a.c = b, a.A |= g, a) : null;
  }
  l = this.c[2 * k];
  g = this.c[2 * k + 1];
  return null == l ? (l = g.ca(a, b + 5, c, d, e, f), l === g ? this : Dd.j(this, a, 2 * k + 1, l)) : Bd(d, l) ? e === g ? this : Dd.j(this, a, 2 * k + 1, e) : t ? (f.D = !0, Dd.fa(this, a, 2 * k, null, 2 * k + 1, Hd.sa ? Hd.sa(a, b + 5, l, g, c, d, e) : Hd.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.Fa = function() {
  return Id.b ? Id.b(this.c) : Id.call(null, this.c);
};
h.va = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = $b(this.A), c = Array(0 > b ? 4 : 2 * (b + 1));
  Ob(this.c, 0, c, 0, 2 * b);
  return new Ed(a, this.A, c);
};
h.ba = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = $b(this.A & f - 1);
  if (0 === (this.A & f)) {
    var k = $b(this.A);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Fd.ba(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.A >>> c & 1) && (g[c] = null != this.c[d] ? Fd.ba(a + 5, G(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Gd(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Ob(this.c, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Ob(this.c, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.D = !0;
    return new Ed(null, this.A | f, a);
  }
  k = this.c[2 * g];
  f = this.c[2 * g + 1];
  return null == k ? (k = f.ba(a + 5, b, c, d, e), k === f ? this : new Ed(null, this.A, Cd.d(this.c, 2 * g + 1, k))) : Bd(c, k) ? d === f ? this : new Ed(null, this.A, Cd.d(this.c, 2 * g + 1, d)) : t ? (e.D = !0, new Ed(null, this.A, Cd.F(this.c, 2 * g, null, 2 * g + 1, Hd.fa ? Hd.fa(a + 5, k, f, b, c, d) : Hd.call(null, a + 5, k, f, b, c, d)))) : null;
};
h.pa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.A & e)) {
    return d;
  }
  var f = $b(this.A & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.pa(a + 5, b, c, d) : Bd(c, e) ? f : t ? d : null;
};
var Fd = new Ed(null, 0, []);
function Gd(a, b, c) {
  this.q = a;
  this.f = b;
  this.c = c;
}
h = Gd.prototype;
h.ca = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.c[g];
  if (null == k) {
    return a = Dd.j(this, a, g, Fd.ca(a, b + 5, c, d, e, f)), a.f += 1, a;
  }
  b = k.ca(a, b + 5, c, d, e, f);
  return b === k ? this : Dd.j(this, a, g, b);
};
h.Fa = function() {
  return Jd.b ? Jd.b(this.c) : Jd.call(null, this.c);
};
h.va = function(a) {
  return a === this.q ? this : new Gd(a, this.f, x(this.c));
};
h.ba = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new Gd(null, this.f + 1, Cd.d(this.c, f, Fd.ba(a + 5, b, c, d, e)));
  }
  a = g.ba(a + 5, b, c, d, e);
  return a === g ? this : new Gd(null, this.f, Cd.d(this.c, f, a));
};
h.pa = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.pa(a + 5, b, c, d) : d;
};
function Kd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Bd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ld(a, b, c, d) {
  this.q = a;
  this.ia = b;
  this.f = c;
  this.c = d;
}
h = Ld.prototype;
h.ca = function(a, b, c, d, e, f) {
  if (c === this.ia) {
    b = Kd(this.c, this.f, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.f) {
        return a = Dd.fa(this, a, 2 * this.f, d, 2 * this.f + 1, e), f.D = !0, a.f += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Ob(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.D = !0;
      f = this.f + 1;
      a === this.q ? (this.c = b, this.f = f, a = this) : a = new Ld(this.q, this.ia, f, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Dd.j(this, a, b + 1, e);
  }
  return(new Ed(a, 1 << (this.ia >>> b & 31), [null, this, null, null])).ca(a, b, c, d, e, f);
};
h.Fa = function() {
  return Id.b ? Id.b(this.c) : Id.call(null, this.c);
};
h.va = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  Ob(this.c, 0, b, 0, 2 * this.f);
  return new Ld(a, this.ia, this.f, b);
};
h.ba = function(a, b, c, d, e) {
  return b === this.ia ? (a = Kd(this.c, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), Ob(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.D = !0, new Ld(null, this.ia, this.f + 1, b)) : E.a(this.c[a], d) ? this : new Ld(null, this.ia, this.f, Cd.d(this.c, a + 1, d))) : (new Ed(null, 1 << (this.ia >>> a & 31), [null, this])).ba(a, b, c, d, e);
};
h.pa = function(a, b, c, d) {
  a = Kd(this.c, this.f, c);
  return 0 > a ? d : Bd(c, this.c[a]) ? this.c[a + 1] : t ? d : null;
};
var Hd = function() {
  function a(a, b, c, g, k, l, p) {
    var q = G(c);
    if (q === k) {
      return new Ld(null, q, 2, [c, g, l, p]);
    }
    var r = new Ad;
    return Fd.ca(a, b, q, c, g, r).ca(a, b, k, l, p, r);
  }
  function b(a, b, c, g, k, l) {
    var p = G(b);
    if (p === g) {
      return new Ld(null, p, 2, [b, c, k, l]);
    }
    var q = new Ad;
    return Fd.ba(a, p, b, c, q).ba(a, g, k, l, q);
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
function Md(a, b, c, d, e) {
  this.i = a;
  this.da = b;
  this.k = c;
  this.r = d;
  this.m = e;
  this.o = 0;
  this.g = 32374860;
}
h = Md.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = xb(this);
};
h.I = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return nb(this);
};
h.S = function(a, b) {
  return Ub.a(b, this);
};
h.T = function(a, b, c) {
  return Ub.d(b, c, this);
};
h.G = function() {
  return this;
};
h.U = function() {
  return null == this.r ? new U(null, 2, 5, X, [this.da[this.k], this.da[this.k + 1]], null) : I(this.r);
};
h.W = function() {
  return null == this.r ? Id.d ? Id.d(this.da, this.k + 2, null) : Id.call(null, this.da, this.k + 2, null) : Id.d ? Id.d(this.da, this.k, M(this.r)) : Id.call(null, this.da, this.k, M(this.r));
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return new Md(b, this.da, this.k, this.r, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Hb(K, this.i);
};
var Id = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Md(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (n(g) && (g = g.Fa(), n(g))) {
            return new Md(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Md(null, a, b, c, null);
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
function Nd(a, b, c, d, e) {
  this.i = a;
  this.da = b;
  this.k = c;
  this.r = d;
  this.m = e;
  this.o = 0;
  this.g = 32374860;
}
h = Nd.prototype;
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = xb(this);
};
h.I = function(a, b) {
  return O(b, this);
};
h.toString = function() {
  return nb(this);
};
h.S = function(a, b) {
  return Ub.a(b, this);
};
h.T = function(a, b, c) {
  return Ub.d(b, c, this);
};
h.G = function() {
  return this;
};
h.U = function() {
  return I(this.r);
};
h.W = function() {
  return Jd.j ? Jd.j(null, this.da, this.k, M(this.r)) : Jd.call(null, null, this.da, this.k, M(this.r));
};
h.B = function(a, b) {
  return yb(this, b);
};
h.w = function(a, b) {
  return new Nd(b, this.da, this.k, this.r, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Hb(K, this.i);
};
var Jd = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (n(k) && (k = k.Fa(), n(k))) {
            return new Nd(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Nd(a, b, c, g, null);
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
function Od(a, b, c, d, e, f) {
  this.i = a;
  this.f = b;
  this.root = c;
  this.V = d;
  this.Y = e;
  this.m = f;
  this.o = 8196;
  this.g = 16123663;
}
h = Od.prototype;
h.za = function() {
  return new Pd({}, this.root, this.f, this.V, this.Y);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.P = function(a, b) {
  return Fa.d(this, b, null);
};
h.Q = function(a, b, c) {
  return null == b ? this.V ? this.Y : c : null == this.root ? c : t ? this.root.pa(0, G(b), b, c) : null;
};
h.ya = function(a, b, c) {
  if (null == b) {
    return this.V && c === this.Y ? this : new Od(this.i, this.V ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new Ad;
  b = (null == this.root ? Fd : this.root).ba(0, G(b), b, c, a);
  return b === this.root ? this : new Od(this.i, a.D ? this.f + 1 : this.f, b, this.V, this.Y, null);
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
  return Lb(b) ? Ga(this, y.a(b, 0), y.a(b, 1)) : Tb.d(Ba, this, b);
};
h.toString = function() {
  return nb(this);
};
h.G = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.Fa() : null;
    return this.V ? O(new U(null, 2, 5, X, [null, this.Y], null), a) : a;
  }
  return null;
};
h.J = function() {
  return this.f;
};
h.B = function(a, b) {
  return sd(this, b);
};
h.w = function(a, b) {
  return new Od(b, this.f, this.root, this.V, this.Y, this.m);
};
h.u = function() {
  return this.i;
};
h.O = function() {
  return Sa(xd, this.i);
};
var xd = new Od(null, 0, null, !1, null, 0);
function Db(a, b) {
  for (var c = a.length, d = 0, e = db(xd);;) {
    if (d < c) {
      var f = d + 1, e = e.Ca(null, a[d], b[d]), d = f
    } else {
      return fb(e);
    }
  }
}
function Pd(a, b, c, d, e) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.V = d;
  this.Y = e;
  this.o = 56;
  this.g = 258;
}
h = Pd.prototype;
h.Ca = function(a, b, c) {
  return Qd(this, b, c);
};
h.La = function(a, b) {
  var c;
  a: {
    if (this.q) {
      if (b ? b.g & 2048 || b.Db || (b.g ? 0 : s(Ia, b)) : s(Ia, b)) {
        c = Qd(this, bc.b ? bc.b(b) : bc.call(null, b), cc.b ? cc.b(b) : cc.call(null, b));
        break a;
      }
      c = H(b);
      for (var d = this;;) {
        var e = I(c);
        if (n(e)) {
          c = M(c), d = Qd(d, bc.b ? bc.b(e) : bc.call(null, e), cc.b ? cc.b(e) : cc.call(null, e));
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
    this.q = null, a = new Od(null, this.count, this.root, this.V, this.Y, null);
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
function Qd(a, b, c) {
  if (a.q) {
    if (null == b) {
      a.Y !== c && (a.Y = c), a.V || (a.count += 1, a.V = !0);
    } else {
      var d = new Ad;
      b = (null == a.root ? Fd : a.root).ca(a.q, 0, G(b), b, c, d);
      b !== a.root && (a.root = b);
      d.D && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Rd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = H(a);
    for (var b = db(xd);;) {
      if (a) {
        var e = M(M(a)), b = yc.d(b, I(a), I(M(a)));
        a = e;
      } else {
        return fb(b);
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
}(), Sd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new la(null, Xb(P(a)), R.a(va, a), null);
  }
  a.l = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function bc(a) {
  return Ja(a);
}
function cc(a) {
  return Ka(a);
}
function ic(a) {
  if (a && (a.o & 4096 || a.Fb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
var Td = function() {
  function a(a, b) {
    for (;;) {
      if (H(b) && 0 < a) {
        var c = a - 1, g = M(b);
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
        a = M(a);
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
}(), Ud = function() {
  function a(a, b) {
    Td.a(a, b);
    return b;
  }
  function b(a) {
    Td.b(a);
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
function Vd(a, b, c, d, e, f, g) {
  var k = ia;
  try {
    ia = null == ia ? null : ia - 1;
    if (null != ia && 0 > ia) {
      return D(a, "#");
    }
    D(a, c);
    H(g) && (b.d ? b.d(I(g), a, f) : b.call(null, I(g), a, f));
    for (var l = M(g), p = qa.b(f);l && (null == p || 0 !== p);) {
      D(a, d);
      b.d ? b.d(I(l), a, f) : b.call(null, I(l), a, f);
      var q = M(l);
      c = p - 1;
      l = q;
      p = c;
    }
    n(qa.b(f)) && (D(a, d), b.d ? b.d("...", a, f) : b.call(null, "...", a, f));
    return D(a, e);
  } finally {
    ia = k;
  }
}
var Wd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
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
          f = e, Mb(f) ? (e = jb(f), g = kb(f), f = e, l = P(e), e = g, g = l) : (l = I(f), D(a, l), e = M(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.l = 1;
  a.h = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Xd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Yd(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Xd[a];
  })), v('"')].join("");
}
var Z = function Zd(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (t) {
    n(function() {
      var c = Cb.a(d, oa);
      return n(c) ? (c = b ? b.g & 131072 || b.Eb ? !0 : b.g ? !1 : s(Pa, b) : s(Pa, b)) ? Ib(b) : c : c;
    }()) && (D(c, "^"), Zd(Ib(b), c, d), D(c, " "));
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
      return D(c, "#js "), $d.j ? $d.j(Dc.a(function(c) {
        return new U(null, 2, 5, X, [jc.b(c), b[c]], null);
      }, Nb(b)), Zd, c, d) : $d.call(null, Dc.a(function(c) {
        return new U(null, 2, 5, X, [jc.b(c), b[c]], null);
      }, Nb(b)), Zd, c, d);
    }
    if (b instanceof Array) {
      return Vd(c, Zd, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return n(na.b(d)) ? D(c, Yd(b)) : D(c, b);
    }
    if (Fb(b)) {
      return Wd.e(c, N(["#\x3c", "" + v(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + v(b);;) {
          if (P(d) < c) {
            d = [v("0"), v(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Wd.e(c, N(['#inst "', "" + v(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Wd.e(c, N(['#"', b.source, '"'], 0)) : (b ? b.g & 2147483648 || b.R || (b.g ? 0 : s(ab, b)) : s(ab, b)) ? bb(b, c, d) : t ? Wd.e(c, N(["#\x3c", "" + v(b), "\x3e"], 0)) : null;
  }
  return null;
}, ae = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || ra(H(a))) {
      b = "";
    } else {
      b = v;
      var e = ka(), f = new ga;
      a: {
        var g = new mb(f);
        Z(I(a), g, e);
        a = H(M(a));
        for (var k = null, l = 0, p = 0;;) {
          if (p < l) {
            var q = k.K(null, p);
            D(g, " ");
            Z(q, g, e);
            p += 1;
          } else {
            if (a = H(a)) {
              k = a, Mb(k) ? (a = jb(k), l = kb(k), k = a, q = P(a), a = l, l = q) : (q = I(k), D(g, " "), Z(q, g, e), a = M(k), k = null, l = 0), p = 0;
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
function $d(a, b, c, d) {
  return Vd(c, function(a, c, d) {
    b.d ? b.d(Ja(a), c, d) : b.call(null, Ja(a), c, d);
    D(c, " ");
    return b.d ? b.d(Ka(a), c, d) : b.call(null, Ka(a), c, d);
  }, "{", ", ", "}", d, H(a));
}
sb.prototype.R = !0;
sb.prototype.v = function(a, b, c) {
  return Vd(b, Z, "(", " ", ")", c, this);
};
md.prototype.R = !0;
md.prototype.v = function(a, b, c) {
  return Vd(b, Z, "[", " ", "]", c, this);
};
oc.prototype.R = !0;
oc.prototype.v = function(a, b, c) {
  return Vd(b, Z, "(", " ", ")", c, this);
};
la.prototype.R = !0;
la.prototype.v = function(a, b, c) {
  return $d(this, Z, b, c);
};
T.prototype.R = !0;
T.prototype.v = function(a, b, c) {
  return Vd(b, Z, "(", " ", ")", c, this);
};
Md.prototype.R = !0;
Md.prototype.v = function(a, b, c) {
  return Vd(b, Z, "(", " ", ")", c, this);
};
kd.prototype.R = !0;
kd.prototype.v = function(a, b, c) {
  return Vd(b, Z, "(", " ", ")", c, this);
};
Od.prototype.R = !0;
Od.prototype.v = function(a, b, c) {
  return $d(this, Z, b, c);
};
U.prototype.R = !0;
U.prototype.v = function(a, b, c) {
  return Vd(b, Z, "[", " ", "]", c, this);
};
dc.prototype.R = !0;
dc.prototype.v = function(a, b, c) {
  return Vd(b, Z, "(", " ", ")", c, this);
};
ud.prototype.R = !0;
ud.prototype.v = function(a, b, c) {
  return Vd(b, Z, "(", " ", ")", c, this);
};
ec.prototype.R = !0;
ec.prototype.v = function(a, b) {
  return D(b, "()");
};
gc.prototype.R = !0;
gc.prototype.v = function(a, b, c) {
  return Vd(b, Z, "(", " ", ")", c, this);
};
Nd.prototype.R = !0;
Nd.prototype.v = function(a, b, c) {
  return Vd(b, Z, "(", " ", ")", c, this);
};
U.prototype.Ja = !0;
U.prototype.Ka = function(a, b) {
  return Sb.a(this, b);
};
md.prototype.Ja = !0;
md.prototype.Ka = function(a, b) {
  return Sb.a(this, b);
};
S.prototype.Ja = !0;
S.prototype.Ka = function(a, b) {
  return ob(this, b);
};
F.prototype.Ja = !0;
F.prototype.Ka = function(a, b) {
  return ob(this, b);
};
function be(a, b) {
  if (a ? a.Hb : a) {
    return a.Hb(a, b);
  }
  var c;
  c = be[m(null == a ? null : a)];
  if (!c && (c = be._, !c)) {
    throw u("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
function ce(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Sb = c;
  this.wb = d;
  this.g = 2153938944;
  this.o = 16386;
}
h = ce.prototype;
h.C = function() {
  return this[ba] || (this[ba] = ++ca);
};
h.tb = function(a, b, c) {
  a = H(this.wb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.K(null, f), k = Q.d(g, 0, null), g = Q.d(g, 1, null);
      g.j ? g.j(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = H(a)) {
        Mb(a) ? (d = jb(a), a = kb(a), k = d, e = P(d), d = k) : (d = I(a), k = Q.d(d, 0, null), g = Q.d(d, 1, null), g.j ? g.j(k, this, b, c) : g.call(null, k, this, b, c), a = M(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.v = function(a, b, c) {
  D(b, "#\x3cAtom: ");
  Z(this.state, b, c);
  return D(b, "\x3e");
};
h.u = function() {
  return this.i;
};
h.Ua = function() {
  return this.state;
};
h.B = function(a, b) {
  return this === b;
};
var ee = function() {
  function a(a) {
    return new ce(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Qb(c) ? R.a(Rd, c) : c, e = Cb.a(d, de), d = Cb.a(d, oa);
      return new ce(a, d, e, null);
    }
    a.l = 1;
    a.h = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}(), fe = {};
function ge(a, b) {
  if (a ? a.Cb : a) {
    return a.Cb(a, b);
  }
  var c;
  c = ge[m(null == a ? null : a)];
  if (!c && (c = ge._, !c)) {
    throw u("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var ie = function() {
  function a(a) {
    return b.e(a, N([new la(null, 1, [he, !1], null)], 0));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? n(n(null) ? null : a.Xb) || (a.Jb ? 0 : s(fe, a)) : s(fe, a)) {
        return ge(a, R.a(Sd, c));
      }
      if (H(c)) {
        var d = Qb(c) ? R.a(Rd, c) : c, e = Cb.a(d, he);
        return function(a, b, c, d) {
          return function A(e) {
            return Qb(e) ? Ud.b(Dc.a(A, e)) : (null == e ? 0 : e ? e.g & 8 || e.Vb || (e.g ? 0 : s(Aa, e)) : s(Aa, e)) ? Hc(null == e ? null : za(e), Dc.a(A, e)) : e instanceof Array ? id(Dc.a(A, e)) : sa(e) === Object ? Hc(yd, function() {
              return function(a, b, c, d) {
                return function Wa(f) {
                  return new T(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = H(f);
                        if (a) {
                          if (Mb(a)) {
                            var b = jb(a), c = P(b), g = new lc(Array(c), 0);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = y.a(b, k), l = new U(null, 2, 5, X, [d.b ? d.b(l) : d.call(null, l), A(e[l])], null);
                                  g.add(l);
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? pc(g.N(), Wa(kb(a))) : pc(g.N(), null);
                          }
                          g = I(a);
                          return O(new U(null, 2, 5, X, [d.b ? d.b(g) : d.call(null, g), A(e[g])], null), Wa(J(a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d)(Nb(e));
            }()) : t ? e : null;
          };
        }(c, d, e, n(e) ? jc : v)(a);
      }
      return null;
    }
    a.l = 1;
    a.h = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}(), Yb = function() {
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
}(), Zb = function(a) {
  return Math.floor.b ? Math.floor.b((Math.random.n ? Math.random.n() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.n ? Math.random.n() : Math.random.call(null)) * a);
};
var pa = new S(null, "dup", "dup"), qb = new S(null, "default", "default"), $ = new S(null, "recur", "recur"), je = new S(null, "info", "info"), ke = new S(null, "objects", "objects"), le = new S(null, "finally-block", "finally-block"), me = new S(null, "points2d", "points2d"), ne = new S(null, "catch-block", "catch-block"), oe = new S(null, "speed", "speed"), he = new S(null, "keywordize-keys", "keywordize-keys"), pe = new S(null, "points", "points"), ma = new S(null, "flush-on-newline", "flush-on-newline"), 
qe = new S(null, "catch-exception", "catch-exception"), re = new S(null, "continue-block", "continue-block"), se = new S(null, "prev", "prev"), te = new S(null, "closed", "closed"), ue = new S(null, "center", "center"), qa = new S(null, "print-length", "print-length"), t = new S(null, "else", "else"), na = new S(null, "readably", "readably"), de = new S(null, "validator", "validator"), oa = new S(null, "meta", "meta"), ve = new S(null, "none", "none"), we = new S(null, "self", "self"), xe = new S(null, 
"selected", "selected"), ye = new S(null, "rotation", "rotation"), ze = new S(null, "priority", "priority");
var Ae = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return Tb.d(function(a, c) {
      var k = Q.d(c, 0, null), l = Q.d(c, 1, null);
      return Eb.d(a, k, R.d(b, l, e));
    }, yd, a);
  }
  a.l = 2;
  a.h = function(a) {
    var d = I(a);
    a = M(a);
    var e = I(a);
    a = J(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}(), Be = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    var f = function() {
      return function k(a) {
        return new T(null, function() {
          for (var b = a;;) {
            if (b = H(b)) {
              if (Mb(b)) {
                var c = jb(b), d = P(c), e = new lc(Array(d), 0);
                a: {
                  for (var f = 0;;) {
                    if (f < d) {
                      var A = y.a(c, f), L = Q.d(A, 0, null), A = Q.d(A, 1, null);
                      Ac.a(A, null) && (L = [v(" "), v(L), v("\x3d'"), v(A), v("'")].join(""), e.add(L));
                      f += 1;
                    } else {
                      c = !0;
                      break a;
                    }
                  }
                  c = void 0;
                }
                return c ? pc(e.N(), k(kb(b))) : pc(e.N(), null);
              }
              c = I(b);
              e = Q.d(c, 0, null);
              c = Q.d(c, 1, null);
              if (Ac.a(c, null)) {
                return O([v(" "), v(e), v("\x3d'"), v(c), v("'")].join(""), k(J(b)));
              }
              b = J(b);
            } else {
              return null;
            }
          }
        }, null, null);
      }(Lc.a(2, e));
    }();
    return E.a(b, te) ? [v("\x3c"), v(a), v(R.a(v, f)), v("/\x3e")].join("") : [v("\x3c"), v(a), v(R.a(v, f)), v("\x3e"), v(b), v("\x3c/"), v(a), v("\x3e")].join("");
  }
  a.l = 2;
  a.h = function(a) {
    var d = I(a);
    a = M(a);
    var e = I(a);
    a = J(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}();
function Ce(a) {
  E.a(sa("object-list"), String) ? document.getElementById("object-list").innerHTML = a : "object-list".innerHTML = a;
}
;var De, Ee, Fe;
function Ge(a, b) {
  if (a ? a.vb : a) {
    return a.vb(0, b);
  }
  var c;
  c = Ge[m(null == a ? null : a)];
  if (!c && (c = Ge._, !c)) {
    throw u("ReadPort.take!", a);
  }
  return c.call(null, a, b);
}
function He(a, b, c) {
  if (a ? a.Oa : a) {
    return a.Oa(0, b, c);
  }
  var d;
  d = He[m(null == a ? null : a)];
  if (!d && (d = He._, !d)) {
    throw u("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function Ie(a) {
  if (a ? a.Na : a) {
    return a.Na();
  }
  var b;
  b = Ie[m(null == a ? null : a)];
  if (!b && (b = Ie._, !b)) {
    throw u("Channel.close!", a);
  }
  return b.call(null, a);
}
function Je(a) {
  if (a ? a.X : a) {
    return a.X(a);
  }
  var b;
  b = Je[m(null == a ? null : a)];
  if (!b && (b = Je._, !b)) {
    throw u("Handler.active?", a);
  }
  return b.call(null, a);
}
function Ke(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = Ke[m(null == a ? null : a)];
  if (!b && (b = Ke._, !b)) {
    throw u("Handler.commit", a);
  }
  return b.call(null, a);
}
function Le(a) {
  if (a ? a.jb : a) {
    return a.jb();
  }
  var b;
  b = Le[m(null == a ? null : a)];
  if (!b && (b = Le._, !b)) {
    throw u("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function Me(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Ne(a, b, c, d) {
  this.head = a;
  this.p = b;
  this.length = c;
  this.c = d;
}
Ne.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.c[this.p];
  this.c[this.p] = null;
  this.p = (this.p + 1) % this.c.length;
  this.length -= 1;
  return a;
};
Ne.prototype.unshift = function(a) {
  this.c[this.head] = a;
  this.head = (this.head + 1) % this.c.length;
  this.length += 1;
  return null;
};
function Oe(a, b) {
  a.length + 1 === a.c.length && a.resize();
  a.unshift(b);
}
Ne.prototype.resize = function() {
  var a = Array(2 * this.c.length);
  return this.p < this.head ? (Me(this.c, this.p, a, 0, this.length), this.p = 0, this.head = this.length, this.c = a) : this.p > this.head ? (Me(this.c, this.p, a, 0, this.c.length - this.p), Me(this.c, 0, a, this.c.length - this.p, this.head), this.p = 0, this.head = this.length, this.c = a) : this.p === this.head ? (this.head = this.p = 0, this.c = a) : null;
};
function Pe(a, b) {
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
function Qe(a) {
  if (!(0 < a)) {
    throw Error([v("Assert failed: "), v("Can't create a ring buffer of size 0"), v("\n"), v(ae.e(N([fc(new F(null, "\x3e", "\x3e", -1640531465, null), new F(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new Ne(0, 0, 0, Array(a));
}
function Re(a, b) {
  this.H = a;
  this.Qb = b;
  this.o = 0;
  this.g = 2;
}
Re.prototype.J = function() {
  return this.H.length;
};
Re.prototype.jb = function() {
  return this.H.length === this.Qb;
};
Re.prototype.Ib = function() {
  return this.H.pop();
};
function Se(a, b) {
  if (!ra(Le(a))) {
    throw Error([v("Assert failed: "), v("Can't add to a full buffer"), v("\n"), v(ae.e(N([fc(new F(null, "not", "not", -1640422260, null), fc(new F("impl", "full?", "impl/full?", -1337857039, null), new F(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.H.unshift(b);
}
;var Te = null, Ue = Qe(32), Ve = !1, We = !1;
function Xe() {
  Ve = !0;
  We = !1;
  for (var a = 0;;) {
    var b = Ue.pop();
    if (null != b && (b.n ? b.n() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Ve = !1;
  return 0 < Ue.length ? Ye.n ? Ye.n() : Ye.call(null) : null;
}
"undefined" !== typeof MessageChannel && (Te = new MessageChannel, Te.port1.onmessage = function() {
  return Xe();
});
function Ye() {
  var a = We;
  if (n(a ? Ve : a)) {
    return null;
  }
  We = !0;
  return "undefined" !== typeof MessageChannel ? Te.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(Xe) : t ? setTimeout(Xe, 0) : null;
}
function Ze(a) {
  Oe(Ue, a);
  Ye();
}
;var $e = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    return R.j(Be, a, b, e);
  }
  a.l = 2;
  a.h = function(a) {
    var d = I(a);
    a = M(a);
    var e = I(a);
    a = J(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}(), af = $e("br", te), bf = function() {
  function a(a, b, c) {
    return $e.e("input", te, N(["type", a, "name", b, "value", c], 0));
  }
  function b(a, b) {
    return $e.e("input", te, N(["type", a, "name", b], 0));
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
}(), cf = [v("x1"), v(bf.a("text", "x1")), v("x2"), v(bf.a("text", "x2")), v("x3"), v(bf.d("text", "x3", 0)), v("x4"), v(bf.d("text", "x4", 0))].join(""), df = new U(null, 3, 5, X, [$e("h2", "Element hinzuf\u00fcgen (Funktioniert noch nicht!)"), $e.e("div", [v("Objekt-Name"), v(bf.a("text", "obj-name")), v(af), v(af), v(cf)].join(""), N(["id", "prompt-object-decl"], 0)), $e.e("a", "Hinzuf\u00fcgen", N("href # class button onclick drawer.api.submitPrompt();".split(" "), 0))], null);
var ef, gf = function ff(b) {
  "undefined" === typeof ef && (ef = function(b, d, e) {
    this.Da = b;
    this.kb = d;
    this.Lb = e;
    this.o = 0;
    this.g = 393216;
  }, ef.na = !0, ef.ma = "cljs.core.async.impl.ioc-helpers/t11360", ef.ta = function(b, d) {
    return D(d, "cljs.core.async.impl.ioc-helpers/t11360");
  }, ef.prototype.X = function() {
    return!0;
  }, ef.prototype.L = function() {
    return this.Da;
  }, ef.prototype.u = function() {
    return this.Lb;
  }, ef.prototype.w = function(b, d) {
    return new ef(this.Da, this.kb, d);
  });
  return new ef(b, ff, null);
};
function hf(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].Na(), b;
    }
    if (t) {
      throw b;
    }
    return null;
  }
}
function jf(a, b, c) {
  b = b.Oa(0, c, gf(function(b) {
    a[2] = b;
    a[1] = 11;
    return hf(a);
  }));
  return n(b) ? (a[2] = Oa(b), a[1] = 11, $) : null;
}
var lf = function() {
  function a(a, d, e, f) {
    var g = null;
    3 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, g);
  }
  function b(a, b, e, f) {
    var g = Qb(f) ? R.a(Rd, f) : f;
    a[1] = b;
    b = kf(function() {
      return function(b) {
        a[2] = b;
        return hf(a);
      };
    }(f, g, g), e, g);
    return n(b) ? (a[2] = Oa(b), $) : null;
  }
  a.l = 3;
  a.h = function(a) {
    var d = I(a);
    a = M(a);
    var e = I(a);
    a = M(a);
    var f = I(a);
    a = J(a);
    return b(d, e, f, a);
  };
  a.e = b;
  return a;
}();
function mf(a, b) {
  var c = a[6];
  null != b && c.Oa(0, b, gf(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Na();
  return c;
}
function nf(a) {
  for (;;) {
    var b = a[4], c = ne.b(b), d = qe.b(b), e = a[5];
    if (n(function() {
      var a = e;
      return n(a) ? ra(b) : a;
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
      a[4] = Eb.e(b, ne, null, N([qe, null], 0));
      break;
    }
    if (n(function() {
      var a = e;
      return n(a) ? ra(c) && ra(le.b(b)) : a;
    }())) {
      a[4] = se.b(b);
    } else {
      if (n(function() {
        var a = e;
        return n(a) ? (a = ra(c)) ? le.b(b) : a : a;
      }())) {
        a[1] = le.b(b);
        a[4] = Eb.d(b, le, null);
        break;
      }
      if (n(function() {
        var a = ra(e);
        return a ? le.b(b) : a;
      }())) {
        a[1] = le.b(b);
        a[4] = Eb.d(b, le, null);
        break;
      }
      if (ra(e) && ra(le.b(b))) {
        a[1] = re.b(b);
        a[4] = se.b(b);
        break;
      }
      if (t) {
        throw Error([v("Assert failed: "), v("No matching clause"), v("\n"), v(ae.e(N([!1], 0)))].join(""));
      }
      break;
    }
  }
}
;var of, qf = function pf(b) {
  "undefined" === typeof of && (of = function(b, d, e) {
    this.D = b;
    this.zb = d;
    this.Kb = e;
    this.o = 0;
    this.g = 425984;
  }, of.na = !0, of.ma = "cljs.core.async.impl.channels/t11344", of.ta = function(b, d) {
    return D(d, "cljs.core.async.impl.channels/t11344");
  }, of.prototype.Ua = function() {
    return this.D;
  }, of.prototype.u = function() {
    return this.Kb;
  }, of.prototype.w = function(b, d) {
    return new of(this.D, this.zb, d);
  });
  return new of(b, pf, null);
};
function rf(a, b) {
  this.lb = a;
  this.D = b;
}
function sf(a) {
  return Je(a.lb);
}
function tf(a, b, c, d, e, f) {
  this.Ia = a;
  this.Qa = b;
  this.Ha = c;
  this.Pa = d;
  this.H = e;
  this.closed = f;
}
tf.prototype.Na = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.Ia.pop();
      if (null != a) {
        if (a.X(null)) {
          var b = a.L(null);
          Ze(function(a) {
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
  return null;
};
tf.prototype.vb = function(a, b) {
  if (b.X(null)) {
    if (null != this.H && 0 < P(this.H)) {
      for (var c = b.L(null), d = qf(this.H.Ib());;) {
        var e = this.Ha.pop();
        if (null != e) {
          var f = e.lb, g = e.D;
          if (f.X(null)) {
            var k = f.L(null), l = b.L(null);
            Ze(function(a) {
              return function() {
                return a.b ? a.b(!0) : a.call(null, !0);
              };
            }(k, l, f, g, e, c, d, this));
            Se(this.H, g);
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
        if (e = d.lb, f = d.D, e.X(null)) {
          return g = e.L(null), c = b.L(null), Ze(function(a) {
            return function() {
              return a.b ? a.b(!0) : a.call(null, !0);
            };
          }(g, c, e, f, d, this)), qf(f);
        }
      } else {
        if (this.closed) {
          return c = b.L(null), qf(null);
        }
        64 < this.Qa ? (this.Qa = 0, Pe(this.Ia, Je)) : this.Qa += 1;
        if (!(1024 > this.Ia.length)) {
          throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending takes are allowed on a single channel.")].join("")), v("\n"), v(ae.e(N([fc(new F(null, "\x3c", "\x3c", -1640531467, null), fc(new F(null, ".-length", ".-length", 1395928862, null), new F(null, "takes", "takes", -1530407291, null)), new F("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        Oe(this.Ia, b);
        return null;
      }
    }
  } else {
    return null;
  }
};
tf.prototype.Oa = function(a, b, c) {
  if (null == b) {
    throw Error([v("Assert failed: "), v("Can't put nil in on a channel"), v("\n"), v(ae.e(N([fc(new F(null, "not", "not", -1640422260, null), fc(new F(null, "nil?", "nil?", -1637150201, null), new F(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if ((a = this.closed) || !c.X(null)) {
    return qf(!a);
  }
  for (;;) {
    var d = this.Ia.pop();
    if (null != d) {
      if (d.X(null)) {
        var e = d.L(null);
        c = c.L(null);
        Ze(function(a) {
          return function() {
            return a.b ? a.b(b) : a.call(null, b);
          };
        }(e, c, d, a, this));
        return qf(!0);
      }
    } else {
      if (null == this.H || this.H.jb()) {
        64 < this.Pa ? (this.Pa = 0, Pe(this.Ha, sf)) : this.Pa += 1;
        if (!(1024 > this.Ha.length)) {
          throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending puts are allowed on a single channel."), v(" Consider using a windowed buffer.")].join("")), v("\n"), v(ae.e(N([fc(new F(null, "\x3c", "\x3c", -1640531467, null), fc(new F(null, ".-length", ".-length", 1395928862, null), new F(null, "puts", "puts", -1637078787, null)), new F("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        Oe(this.Ha, new rf(c, b));
        return null;
      }
      c = c.L(null);
      Se(this.H, b);
      return qf(!0);
    }
  }
};
function uf(a, b, c) {
  this.key = a;
  this.D = b;
  this.forward = c;
  this.o = 0;
  this.g = 2155872256;
}
uf.prototype.v = function(a, b, c) {
  return Vd(b, Z, "[", " ", "]", c, this);
};
uf.prototype.G = function() {
  return Ba(Ba(K, this.D), this.key);
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
    return new uf(a, b, c);
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
var wf = function vf(b) {
  "undefined" === typeof De && (De = function(b, d, e) {
    this.Da = b;
    this.kb = d;
    this.Nb = e;
    this.o = 0;
    this.g = 393216;
  }, De.na = !0, De.ma = "cljs.core.async/t8653", De.ta = function(b, d) {
    return D(d, "cljs.core.async/t8653");
  }, De.prototype.X = function() {
    return!0;
  }, De.prototype.L = function() {
    return this.Da;
  }, De.prototype.u = function() {
    return this.Nb;
  }, De.prototype.w = function(b, d) {
    return new De(this.Da, this.kb, d);
  });
  return new De(b, vf, null);
}, xf = function() {
  function a(a) {
    a = E.a(a, 0) ? null : a;
    a = "number" === typeof a ? new Re(Qe(a), a) : a;
    return new tf(Qe(32), 0, Qe(32), 0, a, !1);
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
}(), yf = wf(function() {
  return null;
}), zf = function() {
  function a(a, b, c, d) {
    a = He(a, b, wf(c));
    return n(a) ? (b = Oa(a), n(d) ? c.b ? c.b(b) : c.call(null, b) : Ze(function(a) {
      return function() {
        return c.b ? c.b(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.j(a, b, c, !0);
  }
  function c(a, b) {
    var c = He(a, b, yf);
    return n(c) ? Oa(c) : !0;
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
function Af(a) {
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
    var d = Zb(c);
    b[c] = b[d];
    b[d] = c;
    c += 1;
  }
}
var Cf = function Bf() {
  var b = ee.b(!0);
  "undefined" === typeof Ee && (Ee = function(b, d, e) {
    this.oa = b;
    this.xb = d;
    this.Ob = e;
    this.o = 0;
    this.g = 393216;
  }, Ee.na = !0, Ee.ma = "cljs.core.async/t8666", Ee.ta = function() {
    return function(b, d) {
      return D(d, "cljs.core.async/t8666");
    };
  }(b), Ee.prototype.X = function() {
    return function() {
      return Oa(this.oa);
    };
  }(b), Ee.prototype.L = function() {
    return function() {
      var b = this.oa;
      if (b instanceof ce) {
        var d = b.Sb;
        if (null != d && !n(d.b ? d.b(null) : d.call(null, null))) {
          throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(ae.e(N([fc(new F(null, "validate", "validate", 1233162959, null), new F(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
        }
        d = b.state;
        b.state = null;
        null != b.wb && cb(b, d, null);
      } else {
        be(b, null);
      }
      return!0;
    };
  }(b), Ee.prototype.u = function() {
    return function() {
      return this.Ob;
    };
  }(b), Ee.prototype.w = function() {
    return function(b, d) {
      return new Ee(this.oa, this.xb, d);
    };
  }(b));
  return new Ee(b, Bf, null);
}, Ef = function Df(b, c) {
  "undefined" === typeof Fe && (Fe = function(b, c, f, g) {
    this.mb = b;
    this.oa = c;
    this.yb = f;
    this.Pb = g;
    this.o = 0;
    this.g = 393216;
  }, Fe.na = !0, Fe.ma = "cljs.core.async/t8672", Fe.ta = function(b, c) {
    return D(c, "cljs.core.async/t8672");
  }, Fe.prototype.X = function() {
    return Je(this.oa);
  }, Fe.prototype.L = function() {
    Ke(this.oa);
    return this.mb;
  }, Fe.prototype.u = function() {
    return this.Pb;
  }, Fe.prototype.w = function(b, c) {
    return new Fe(this.mb, this.oa, this.yb, c);
  });
  return new Fe(c, b, Df, null);
};
function kf(a, b, c) {
  var d = Cf(), e = P(b), f = Af(e), g = ze.b(c), k = function() {
    for (var c = 0;;) {
      if (c < e) {
        var k = n(g) ? c : f[c], q = Q.a(b, k), r = Lb(q) ? q.b ? q.b(0) : q.call(null, 0) : null, w = n(r) ? function() {
          var b = q.b ? q.b(1) : q.call(null, 1);
          return He(r, b, Ef(d, function(b, c, d, e, f) {
            return function(b) {
              return a.b ? a.b(new U(null, 2, 5, X, [b, f], null)) : a.call(null, new U(null, 2, 5, X, [b, f], null));
            };
          }(c, b, k, q, r, d, e, f, g)));
        }() : Ge(q, Ef(d, function(b, c, d) {
          return function(b) {
            return a.b ? a.b(new U(null, 2, 5, X, [b, d], null)) : a.call(null, new U(null, 2, 5, X, [b, d], null));
          };
        }(c, k, q, r, d, e, f, g)));
        if (n(w)) {
          return qf(new U(null, 2, 5, X, [Oa(w), function() {
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
  return n(k) ? k : Cb.d(c, qb, Pb) !== Pb && (k = function() {
    var a = d.X(null);
    return n(a) ? d.L(null) : a;
  }(), n(k)) ? qf(new U(null, 2, 5, X, [qb.b(c), qb], null)) : null;
}
var Ff = function() {
  function a(a, b) {
    var c = xf.b(b), g = xf.b(1);
    Ze(function(b, c) {
      return function() {
        var e = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d = function() {
                    try {
                      for (;;) {
                        var b = a(c);
                        if (!hc(b, $)) {
                          return b;
                        }
                      }
                    } catch (d) {
                      if (d instanceof Object) {
                        return c[5] = d, nf(c), $;
                      }
                      if (t) {
                        throw d;
                      }
                      return null;
                    }
                  }();
                  if (!hc(d, $)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null, null, null, null];
                a[0] = d;
                a[1] = 1;
                return a;
              }
              var d = null, d = function(a) {
                switch(arguments.length) {
                  case 0:
                    return c.call(this);
                  case 1:
                    return b.call(this, a);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              d.n = c;
              d.b = b;
              return d;
            }();
          }(function(b, c) {
            return function(e) {
              var f = e[1];
              if (1 === f) {
                var g = id(a);
                e[7] = g;
                e[2] = null;
                e[1] = 2;
                return $;
              }
              if (2 === f) {
                var g = e[7], k = 0 < P(g);
                e[1] = n(k) ? 4 : 5;
                return $;
              }
              if (3 === f) {
                return k = e[2], mf(e, k);
              }
              if (4 === f) {
                return g = e[7], lf(e, 7, g);
              }
              if (5 === f) {
                return k = Ie(c), e[2] = k, e[1] = 6, $;
              }
              if (6 === f) {
                return k = e[2], e[2] = k, e[1] = 3, $;
              }
              if (7 === f) {
                var l = e[8], p = e[9], k = e[2], q = Q.d(k, 0, null), ja = Q.d(k, 1, null);
                e[8] = k;
                e[9] = q;
                e[10] = ja;
                e[1] = n(null == q) ? 8 : 9;
                return $;
              }
              return 8 === f ? (l = e[8], p = e[9], ja = e[10], g = e[7], k = Kc(function() {
                return function(a) {
                  return function(b) {
                    return Ac.a(a, b);
                  };
                }(ja, p, l, g, l, p, ja, g, f, b, c);
              }(), g), e[7] = k, e[2] = null, e[1] = 2, $) : 9 === f ? (p = e[9], jf(e, c, p)) : 10 === f ? (k = e[2], e[2] = k, e[1] = 6, $) : 11 === f ? (g = e[7], k = e[2], e[7] = g, e[11] = k, e[2] = null, e[1] = 2, $) : null;
            };
          }(b, c), b, c);
        }(), f = function() {
          var a = e.n ? e.n() : e.call(null);
          a[6] = b;
          return a;
        }();
        return hf(f);
      };
    }(g, c));
    return c;
  }
  function b(a) {
    return c.a(a, null);
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
function Gf(a) {
  Ae(a, function(a) {
    return a;
  });
  return a;
}
function Hf(a) {
  a = null == a ? null : La(a);
  return null == a ? null : La(a);
}
function If(a) {
  return Oc(a, new U(null, 1, 5, X, [me], null), Jc.a(Hf, a.b ? a.b(pe) : a.call(null, pe)));
}
function Jf(a) {
  return Ae(a, If);
}
function Kf(a) {
  var b = Qb(a) ? R.a(Rd, a) : a, c = Cb.a(b, pe);
  return Jc.a(function(a, b, c) {
    return function(a) {
      return a / P(c);
    };
  }(a, b, c), Jc.a(function() {
    return function(a) {
      return Tb.a(Vb, a);
    };
  }(a, b, c), R.d(Dc, jd, c)));
}
function Lf(a) {
  var b = Mf, c = a.b ? a.b(me) : a.call(null, me), d = c.b ? c.b(0) : c.call(null, 0);
  b.beginPath();
  b.moveTo(d.b ? d.b(0) : d.call(null, 0), d.b ? d.b(1) : d.call(null, 1));
  for (var c = H(c), e = null, f = 0, g = 0;;) {
    if (g < f) {
      var k = e.K(null, g);
      b.lineTo(k.b ? k.b(0) : k.call(null, 0), k.b ? k.b(1) : k.call(null, 1));
      g += 1;
    } else {
      if (c = H(c)) {
        e = c, Mb(e) ? (c = jb(e), g = kb(e), e = c, f = P(c), c = g) : (c = I(e), b.lineTo(c.b ? c.b(0) : c.call(null, 0), c.b ? c.b(1) : c.call(null, 1)), c = M(e), e = null, f = 0), g = 0;
      } else {
        break;
      }
    }
  }
  b.lineTo(d.b ? d.b(0) : d.call(null, 0), d.b ? d.b(1) : d.call(null, 1));
  b.stroke();
  b.closePath();
  a = Hf(Kf(a));
  b.beginPath();
  b.arc(a.b ? a.b(0) : a.call(null, 0), a.b ? a.b(1) : a.call(null, 1), 2, 0, 2 * Math.PI);
  b.stroke();
  b.closePath();
}
;function Nf() {
  var a = document.getElementById("prompt");
  document.getElementById("prompt-overlay").style.display = "none";
  return a.innerHTML = "";
}
function Of(a) {
  var b = function() {
    return function d(b) {
      return new T(null, function() {
        for (;;) {
          var f = H(b);
          if (f) {
            if (Mb(f)) {
              var g = jb(f), k = P(g), l = new lc(Array(k), 0);
              a: {
                for (var p = 0;;) {
                  if (p < k) {
                    var q = y.a(g, p), r = Q.d(q, 0, null);
                    Q.d(q, 1, null);
                    q = E.a(r, Mc.a(a, new U(null, 2, 5, X, [je, xe], null)));
                    r = [v("\x3cli\x3e"), v(Be.e("a", r, N(["href", "#", "id", q ? "selected-obj" : null, "onclick", [v("drawer.api.setSelected(\x26#39;"), v(r), v("\x26#39;)")].join("")], 0))), v("\x3c/li\x3e")].join("");
                    l.add(r);
                    p += 1;
                  } else {
                    g = !0;
                    break a;
                  }
                }
                g = void 0;
              }
              return g ? pc(l.N(), d(kb(f))) : pc(l.N(), null);
            }
            g = I(f);
            l = Q.d(g, 0, null);
            Q.d(g, 1, null);
            g = E.a(l, Mc.a(a, new U(null, 2, 5, X, [je, xe], null)));
            return O([v("\x3cli\x3e"), v(Be.e("a", l, N(["href", "#", "id", g ? "selected-obj" : null, "onclick", [v("drawer.api.setSelected(\x26#39;"), v(l), v("\x26#39;)")].join("")], 0))), v("\x3c/li\x3e")].join(""), d(J(f)));
          }
          return null;
        }
      }, null, null);
    }(a.b ? a.b(ke) : a.call(null, ke));
  }();
  Ce([v("\x3cul\x3e"), v(R.a(v, b)), v("\x3c/ul\x3e")].join(""));
  return a;
}
;var Pf = document.getElementById("canvas"), Mf = Pf.getContext("2d"), Qf = document.getElementById("controls");
function Rf() {
  var a = window.innerHeight;
  Pf.setAttribute("width", window.innerWidth - parseInt(Qf.offsetWidth) - 1);
  return Pf.setAttribute("height", a);
}
Rf();
window.onresize = Rf;
function Sf(a) {
  Mf.save();
  Mf.setTransform(1, 0, 0, 1, 0, 0);
  Mf.clearRect(0, 0, Pf.width, Pf.height);
  Mf.restore();
  for (var b = H(a.b ? a.b(ke) : a.call(null, ke)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.K(null, e), g = Q.d(f, 0, null), f = Q.d(f, 1, null);
      E.a(Mc.a(a, new U(null, 2, 5, X, [je, xe], null)), g) ? Mf.strokeStyle = "#f00" : Mf.strokeStyle = "#000";
      Lf(f);
      e += 1;
    } else {
      if (b = H(b)) {
        Mb(b) ? (d = jb(b), b = kb(b), c = d, d = P(d)) : (d = I(b), c = Q.d(d, 0, null), d = Q.d(d, 1, null), E.a(Mc.a(a, new U(null, 2, 5, X, [je, xe], null)), c) ? Mf.strokeStyle = "#f00" : Mf.strokeStyle = "#000", Lf(d), b = M(b), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
  return a;
}
var Tf = xf.n();
zf.a(Tf, function(a) {
  return a;
});
var Uf = xf.n();
Ff.b(new U(null, 2, 5, X, [Tf, Uf], null));
(function() {
  var a = xf.b(1);
  Ze(function(a) {
    return function() {
      var c = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!hc(b, $)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, nf(c), $;
                    }
                    if (t) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!hc(d, $)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.n = c;
            d.b = b;
            return d;
          }();
        }(function(a) {
          return function(b) {
            var c = b[1];
            if (1 === c) {
              var d = [ke, je], l = [xe], p = [ve], l = Db.a ? Db.a(l, p) : Db.call(null, l, p), l = [xd, l], q = Db.a ? Db.a(d, l) : Db.call(null, d, l);
              b[7] = q;
              b[2] = null;
              b[1] = 2;
              return $;
            }
            if (2 === c) {
              return d = new U(null, 2, 5, X, [Tf, Uf], null), lf.e(b, 4, d, N([ze, !0], 0));
            }
            if (3 === c) {
              return d = b[2], mf(b, d);
            }
            if (4 === c) {
              var r = b[8], w = b[9], d = b[2], C = Q.d(d, 0, null), l = Q.d(d, 1, null), p = E.a(Tf, l);
              b[8] = l;
              b[9] = d;
              b[10] = C;
              b[1] = p ? 5 : 6;
              return $;
            }
            if (5 === c) {
              return q = b[7], r = b[8], w = b[9], C = b[10], b[2] = function() {
                return function() {
                  return function(a) {
                    return Of(a);
                  };
                }(r, E, r, C, w, q, q, r, w, C, c, a);
              }(), b[1] = 7, $;
            }
            if (6 === c) {
              return r = b[8], d = E.a(Uf, r), b[1] = d ? 8 : 9, $;
            }
            if (7 === c) {
              return q = b[7], C = b[10], d = b[2], l = C.b ? C.b(q) : C.call(null, q), l = Oc(l, new U(null, 1, 5, X, [ke], null), Jf(Gf(l.b ? l.b(ke) : l.call(null, ke)))), l = Sf(l), d = d.b ? d.b(l) : d.call(null, l), b[7] = d, b[2] = null, b[1] = 2, $;
            }
            if (8 === c) {
              return q = b[7], r = b[8], w = b[9], C = b[10], b[2] = function() {
                return function() {
                  return function(a) {
                    return a;
                  };
                }(r, E, r, C, w, q, q, r, w, C, c, a);
              }(), b[1] = 10, $;
            }
            if (9 === c) {
              throw r = b[8], b = [v("No matching clause: "), v(r)].join(""), Error(b);
            }
            return 10 === c ? (d = b[2], b[2] = d, b[1] = 7, $) : null;
          };
        }(a), a);
      }(), d = function() {
        var d = c.n ? c.n() : c.call(null);
        d[6] = a;
        return d;
      }();
      return hf(d);
    };
  }(a));
  return a;
})();
function Vf(a, b) {
  return zf.a(Tf, function(c) {
    var d = new U(null, 2, 5, X, [ke, a], null), e;
    e = ie.b(b);
    e = new la(null, 3, [pe, e, me, Jc.a(Hf, e), ye, new la(null, 2, [oe, new U(null, 4, 5, X, [0, 0, 0, 0], null), ue, we], null)], null);
    return Oc(c, d, e);
  });
}
da("drawer.api.addObject", Vf);
Vf("Linie", new U(null, 2, 5, X, [new U(null, 4, 5, X, [100, 100, 0, 0], null), new U(null, 4, 5, X, [150, 300, 0, 0], null)], null));
Vf("Dreieck", new U(null, 3, 5, X, [new U(null, 4, 5, X, [300, 200, 0, 0], null), new U(null, 4, 5, X, [400, 400, 0, 0], null), new U(null, 4, 5, X, [200, 400, 0, 0], null)], null));
da("drawer.api.setSelected", function(a) {
  return zf.a(Tf, function(b) {
    return Oc(b, new U(null, 2, 5, X, [je, xe], null), a);
  });
});
da("drawer.api.displayPrompt", function() {
  var a = document.getElementById("prompt");
  document.getElementById("prompt-overlay").style.display = "block";
  return a.innerHTML = R.a(v, df);
});
da("drawer.api.closePrompt", function() {
  return Nf();
});
da("drawer.api.submitPrompt", function() {
  return Nf();
});

})();
