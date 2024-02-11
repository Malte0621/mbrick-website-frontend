(() => {
  (self.webpackChunk = self.webpackChunk || []).push([
    [736],
    {
      296: (ye) => {
        function be(ce, re, M) {
          var te, S, C, i, s;
          re == null && (re = 100);
          function c() {
            var g = Date.now() - i;
            g < re && g >= 0
              ? (te = setTimeout(c, re - g))
              : ((te = null), M || ((s = ce.apply(C, S)), (C = S = null)));
          }
          var p = function () {
            (C = this), (S = arguments), (i = Date.now());
            var g = M && !te;
            return (
              te || (te = setTimeout(c, re)),
              g && ((s = ce.apply(C, S)), (C = S = null)),
              s
            );
          };
          return (
            (p.clear = function () {
              te && (clearTimeout(te), (te = null));
            }),
            (p.flush = function () {
              te &&
                ((s = ce.apply(C, S)),
                (C = S = null),
                clearTimeout(te),
                (te = null));
            }),
            p
          );
        }
        (be.debounce = be), (ye.exports = be);
      },
      1541: (ye, be, ce) => {
        "use strict";
        (window.$ = ce(9755)),
          (window.debounce = ce(296)),
          (window.slick = ce(9154));
      },
      9755: function (ye, be) {
        var ce, re;
        /*!
         * jQuery JavaScript Library v3.7.0
         * https://jquery.com/
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2023-05-11T18:29Z
         */ (function (M, te) {
          "use strict";
          typeof ye.exports == "object"
            ? (ye.exports = M.document
                ? te(M, !0)
                : function (S) {
                    if (!S.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return te(S);
                  })
            : te(M);
        })(typeof window != "undefined" ? window : this, function (M, te) {
          "use strict";
          var S = [],
            C = Object.getPrototypeOf,
            i = S.slice,
            s = S.flat
              ? function (e) {
                  return S.flat.call(e);
                }
              : function (e) {
                  return S.concat.apply([], e);
                },
            c = S.push,
            p = S.indexOf,
            g = {},
            D = g.toString,
            H = g.hasOwnProperty,
            B = H.toString,
            E = B.call(Object),
            N = {},
            W = function (t) {
              return (
                typeof t == "function" &&
                typeof t.nodeType != "number" &&
                typeof t.item != "function"
              );
            },
            oe = function (t) {
              return t != null && t === t.window;
            },
            q = M.document,
            ut = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function Ke(e, t, n) {
            n = n || q;
            var r,
              a,
              l = n.createElement("script");
            if (((l.text = e), t))
              for (r in ut)
                (a = t[r] || (t.getAttribute && t.getAttribute(r))),
                  a && l.setAttribute(r, a);
            n.head.appendChild(l).parentNode.removeChild(l);
          }
          function we(e) {
            return e == null
              ? e + ""
              : typeof e == "object" || typeof e == "function"
              ? g[D.call(e)] || "object"
              : typeof e;
          }
          var Vt = "3.7.0",
            ji = /HTML$/i,
            o = function (e, t) {
              return new o.fn.init(e, t);
            };
          (o.fn = o.prototype =
            {
              jquery: Vt,
              constructor: o,
              length: 0,
              toArray: function () {
                return i.call(this);
              },
              get: function (e) {
                return e == null
                  ? i.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = o.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return o.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  o.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(i.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  o.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  o.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: S.sort,
              splice: S.splice,
            }),
            (o.extend = o.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  a,
                  l,
                  u = arguments[0] || {},
                  h = 1,
                  d = arguments.length,
                  v = !1;
                for (
                  typeof u == "boolean" &&
                    ((v = u), (u = arguments[h] || {}), h++),
                    typeof u != "object" && !W(u) && (u = {}),
                    h === d && ((u = this), h--);
                  h < d;
                  h++
                )
                  if ((e = arguments[h]) != null)
                    for (t in e)
                      (r = e[t]),
                        !(t === "__proto__" || u === r) &&
                          (v &&
                          r &&
                          (o.isPlainObject(r) || (a = Array.isArray(r)))
                            ? ((n = u[t]),
                              a && !Array.isArray(n)
                                ? (l = [])
                                : !a && !o.isPlainObject(n)
                                ? (l = {})
                                : (l = n),
                              (a = !1),
                              (u[t] = o.extend(v, l, r)))
                            : r !== void 0 && (u[t] = r));
                return u;
              }),
            o.extend({
              expando: "jQuery" + (Vt + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !e || D.call(e) !== "[object Object]"
                  ? !1
                  : ((t = C(e)),
                    t
                      ? ((n = H.call(t, "constructor") && t.constructor),
                        typeof n == "function" && B.call(n) === E)
                      : !0);
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                Ke(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (St(e))
                  for (
                    n = e.length;
                    r < n && t.call(e[r], r, e[r]) !== !1;
                    r++
                  );
                else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
                return e;
              },
              text: function (e) {
                var t,
                  n = "",
                  r = 0,
                  a = e.nodeType;
                if (a) {
                  if (a === 1 || a === 9 || a === 11) return e.textContent;
                  if (a === 3 || a === 4) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += o.text(t);
                return n;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  e != null &&
                    (St(Object(e))
                      ? o.merge(n, typeof e == "string" ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return t == null ? -1 : p.call(t, e, n);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !ji.test(t || (n && n.nodeName) || "HTML");
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, a = e.length; r < n; r++)
                  e[a++] = t[r];
                return (e.length = a), e;
              },
              grep: function (e, t, n) {
                for (var r, a = [], l = 0, u = e.length, h = !n; l < u; l++)
                  (r = !t(e[l], l)), r !== h && a.push(e[l]);
                return a;
              },
              map: function (e, t, n) {
                var r,
                  a,
                  l = 0,
                  u = [];
                if (St(e))
                  for (r = e.length; l < r; l++)
                    (a = t(e[l], l, n)), a != null && u.push(a);
                else for (l in e) (a = t(e[l], l, n)), a != null && u.push(a);
                return s(u);
              },
              guid: 1,
              support: N,
            }),
            typeof Symbol == "function" &&
              (o.fn[Symbol.iterator] = S[Symbol.iterator]),
            o.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                g["[object " + t + "]"] = t.toLowerCase();
              }
            );
          function St(e) {
            var t = !!e && "length" in e && e.length,
              n = we(e);
            return W(e) || oe(e)
              ? !1
              : n === "array" ||
                  t === 0 ||
                  (typeof t == "number" && t > 0 && t - 1 in e);
          }
          function Z(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var Ni = S.pop,
            Li = S.sort,
            Mi = S.splice,
            Q = "[\\x20\\t\\r\\n\\f]",
            Je = new RegExp(
              "^" + Q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Q + "+$",
              "g"
            );
          o.contains = function (e, t) {
            var n = t && t.parentNode;
            return (
              e === n ||
              !!(
                n &&
                n.nodeType === 1 &&
                (e.contains
                  ? e.contains(n)
                  : e.compareDocumentPosition &&
                    e.compareDocumentPosition(n) & 16)
              )
            );
          };
          var qi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function Ii(e, t) {
            return t
              ? e === "\0"
                ? "\uFFFD"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
          o.escapeSelector = function (e) {
            return (e + "").replace(qi, Ii);
          };
          var De = q,
            kt = c;
          (function () {
            var e,
              t,
              n,
              r,
              a,
              l = kt,
              u,
              h,
              d,
              v,
              T,
              x = o.expando,
              b = 0,
              A = 0,
              z = vt(),
              Y = vt(),
              F = vt(),
              ne = vt(),
              ie = function (f, y) {
                return f === y && (a = !0), 0;
              },
              ke =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              xe =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                Q +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              V =
                "\\[" +
                Q +
                "*(" +
                xe +
                ")(?:" +
                Q +
                "*([*^$|!~]?=)" +
                Q +
                `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
                xe +
                "))|)" +
                Q +
                "*\\]",
              Ie =
                ":(" +
                xe +
                `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
                V +
                ")*)|.*)\\)|)",
              G = new RegExp(Q + "+", "g"),
              ee = new RegExp("^" + Q + "*," + Q + "*"),
              at = new RegExp("^" + Q + "*([>+~]|" + Q + ")" + Q + "*"),
              Wt = new RegExp(Q + "|>"),
              Ce = new RegExp(Ie),
              lt = new RegExp("^" + xe + "$"),
              Ae = {
                ID: new RegExp("^#(" + xe + ")"),
                CLASS: new RegExp("^\\.(" + xe + ")"),
                TAG: new RegExp("^(" + xe + "|[*])"),
                ATTR: new RegExp("^" + V),
                PSEUDO: new RegExp("^" + Ie),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    Q +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    Q +
                    "*(?:([+-]|)" +
                    Q +
                    "*(\\d+)|))" +
                    Q +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + ke + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    Q +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    Q +
                    "*((?:-\\d)?\\d*)" +
                    Q +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Pe = /^(?:input|select|textarea|button)$/i,
              je = /^h\d$/i,
              he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              zt = /[+~]/,
              _e = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + Q + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              He = function (f, y) {
                var m = "0x" + f.slice(1) - 65536;
                return (
                  y ||
                  (m < 0
                    ? String.fromCharCode(m + 65536)
                    : String.fromCharCode(
                        (m >> 10) | 55296,
                        (m & 1023) | 56320
                      ))
                );
              },
              Nn = function () {
                Ne();
              },
              Ln = wt(
                function (f) {
                  return f.disabled === !0 && Z(f, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
              );
            function Mn() {
              try {
                return u.activeElement;
              } catch (f) {}
            }
            try {
              l.apply((S = i.call(De.childNodes)), De.childNodes),
                S[De.childNodes.length].nodeType;
            } catch (f) {
              l = {
                apply: function (y, m) {
                  kt.apply(y, i.call(m));
                },
                call: function (y) {
                  kt.apply(y, i.call(arguments, 1));
                },
              };
            }
            function K(f, y, m, w) {
              var k,
                $,
                O,
                P,
                _,
                U,
                I,
                R = y && y.ownerDocument,
                X = y ? y.nodeType : 9;
              if (
                ((m = m || []),
                typeof f != "string" || !f || (X !== 1 && X !== 9 && X !== 11))
              )
                return m;
              if (!w && (Ne(y), (y = y || u), d)) {
                if (X !== 11 && (_ = he.exec(f)))
                  if ((k = _[1])) {
                    if (X === 9)
                      if ((O = y.getElementById(k))) {
                        if (O.id === k) return l.call(m, O), m;
                      } else return m;
                    else if (
                      R &&
                      (O = R.getElementById(k)) &&
                      K.contains(y, O) &&
                      O.id === k
                    )
                      return l.call(m, O), m;
                  } else {
                    if (_[2]) return l.apply(m, y.getElementsByTagName(f)), m;
                    if ((k = _[3]) && y.getElementsByClassName)
                      return l.apply(m, y.getElementsByClassName(k)), m;
                  }
                if (!ne[f + " "] && (!v || !v.test(f))) {
                  if (
                    ((I = f), (R = y), X === 1 && (Wt.test(f) || at.test(f)))
                  ) {
                    for (
                      R = (zt.test(f) && Rt(y.parentNode)) || y,
                        (R != y || !N.scope) &&
                          ((P = y.getAttribute("id"))
                            ? (P = o.escapeSelector(P))
                            : y.setAttribute("id", (P = x))),
                        U = mt(f),
                        $ = U.length;
                      $--;

                    )
                      U[$] = (P ? "#" + P : ":scope") + " " + bt(U[$]);
                    I = U.join(",");
                  }
                  try {
                    return l.apply(m, R.querySelectorAll(I)), m;
                  } catch (L) {
                    ne(f, !0);
                  } finally {
                    P === x && y.removeAttribute("id");
                  }
                }
              }
              return Pi(f.replace(Je, "$1"), y, m, w);
            }
            function vt() {
              var f = [];
              function y(m, w) {
                return (
                  f.push(m + " ") > t.cacheLength && delete y[f.shift()],
                  (y[m + " "] = w)
                );
              }
              return y;
            }
            function me(f) {
              return (f[x] = !0), f;
            }
            function Ge(f) {
              var y = u.createElement("fieldset");
              try {
                return !!f(y);
              } catch (m) {
                return !1;
              } finally {
                y.parentNode && y.parentNode.removeChild(y), (y = null);
              }
            }
            function qn(f) {
              return function (y) {
                return Z(y, "input") && y.type === f;
              };
            }
            function In(f) {
              return function (y) {
                return (Z(y, "input") || Z(y, "button")) && y.type === f;
              };
            }
            function _i(f) {
              return function (y) {
                return "form" in y
                  ? y.parentNode && y.disabled === !1
                    ? "label" in y
                      ? "label" in y.parentNode
                        ? y.parentNode.disabled === f
                        : y.disabled === f
                      : y.isDisabled === f ||
                        (y.isDisabled !== !f && Ln(y) === f)
                    : y.disabled === f
                  : "label" in y
                  ? y.disabled === f
                  : !1;
              };
            }
            function We(f) {
              return me(function (y) {
                return (
                  (y = +y),
                  me(function (m, w) {
                    for (var k, $ = f([], m.length, y), O = $.length; O--; )
                      m[(k = $[O])] && (m[k] = !(w[k] = m[k]));
                  })
                );
              });
            }
            function Rt(f) {
              return f && typeof f.getElementsByTagName != "undefined" && f;
            }
            function Ne(f) {
              var y,
                m = f ? f.ownerDocument || f : De;
              return (
                m == u ||
                  m.nodeType !== 9 ||
                  !m.documentElement ||
                  ((u = m),
                  (h = u.documentElement),
                  (d = !o.isXMLDoc(u)),
                  (T =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.msMatchesSelector),
                  De != u &&
                    (y = u.defaultView) &&
                    y.top !== y &&
                    y.addEventListener("unload", Nn),
                  (N.getById = Ge(function (w) {
                    return (
                      (h.appendChild(w).id = o.expando),
                      !u.getElementsByName ||
                        !u.getElementsByName(o.expando).length
                    );
                  })),
                  (N.disconnectedMatch = Ge(function (w) {
                    return T.call(w, "*");
                  })),
                  (N.scope = Ge(function () {
                    return u.querySelectorAll(":scope");
                  })),
                  (N.cssHas = Ge(function () {
                    try {
                      return u.querySelector(":has(*,:jqfake)"), !1;
                    } catch (w) {
                      return !0;
                    }
                  })),
                  N.getById
                    ? ((t.filter.ID = function (w) {
                        var k = w.replace(_e, He);
                        return function ($) {
                          return $.getAttribute("id") === k;
                        };
                      }),
                      (t.find.ID = function (w, k) {
                        if (typeof k.getElementById != "undefined" && d) {
                          var $ = k.getElementById(w);
                          return $ ? [$] : [];
                        }
                      }))
                    : ((t.filter.ID = function (w) {
                        var k = w.replace(_e, He);
                        return function ($) {
                          var O =
                            typeof $.getAttributeNode != "undefined" &&
                            $.getAttributeNode("id");
                          return O && O.value === k;
                        };
                      }),
                      (t.find.ID = function (w, k) {
                        if (typeof k.getElementById != "undefined" && d) {
                          var $,
                            O,
                            P,
                            _ = k.getElementById(w);
                          if (_) {
                            if (
                              (($ = _.getAttributeNode("id")),
                              $ && $.value === w)
                            )
                              return [_];
                            for (
                              P = k.getElementsByName(w), O = 0;
                              (_ = P[O++]);

                            )
                              if (
                                (($ = _.getAttributeNode("id")),
                                $ && $.value === w)
                              )
                                return [_];
                          }
                          return [];
                        }
                      })),
                  (t.find.TAG = function (w, k) {
                    return typeof k.getElementsByTagName != "undefined"
                      ? k.getElementsByTagName(w)
                      : k.querySelectorAll(w);
                  }),
                  (t.find.CLASS = function (w, k) {
                    if (typeof k.getElementsByClassName != "undefined" && d)
                      return k.getElementsByClassName(w);
                  }),
                  (v = []),
                  Ge(function (w) {
                    var k;
                    (h.appendChild(w).innerHTML =
                      "<a id='" +
                      x +
                      "' href='' disabled='disabled'></a><select id='" +
                      x +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      w.querySelectorAll("[selected]").length ||
                        v.push("\\[" + Q + "*(?:value|" + ke + ")"),
                      w.querySelectorAll("[id~=" + x + "-]").length ||
                        v.push("~="),
                      w.querySelectorAll("a#" + x + "+*").length ||
                        v.push(".#.+[+~]"),
                      w.querySelectorAll(":checked").length ||
                        v.push(":checked"),
                      (k = u.createElement("input")),
                      k.setAttribute("type", "hidden"),
                      w.appendChild(k).setAttribute("name", "D"),
                      (h.appendChild(w).disabled = !0),
                      w.querySelectorAll(":disabled").length !== 2 &&
                        v.push(":enabled", ":disabled"),
                      (k = u.createElement("input")),
                      k.setAttribute("name", ""),
                      w.appendChild(k),
                      w.querySelectorAll("[name='']").length ||
                        v.push(
                          "\\[" + Q + "*name" + Q + "*=" + Q + `*(?:''|"")`
                        );
                  }),
                  N.cssHas || v.push(":has"),
                  (v = v.length && new RegExp(v.join("|"))),
                  (ie = function (w, k) {
                    if (w === k) return (a = !0), 0;
                    var $ =
                      !w.compareDocumentPosition - !k.compareDocumentPosition;
                    return (
                      $ ||
                      (($ =
                        (w.ownerDocument || w) == (k.ownerDocument || k)
                          ? w.compareDocumentPosition(k)
                          : 1),
                      $ & 1 ||
                      (!N.sortDetached && k.compareDocumentPosition(w) === $)
                        ? w === u ||
                          (w.ownerDocument == De && K.contains(De, w))
                          ? -1
                          : k === u ||
                            (k.ownerDocument == De && K.contains(De, k))
                          ? 1
                          : r
                          ? p.call(r, w) - p.call(r, k)
                          : 0
                        : $ & 4
                        ? -1
                        : 1)
                    );
                  })),
                u
              );
            }
            (K.matches = function (f, y) {
              return K(f, null, null, y);
            }),
              (K.matchesSelector = function (f, y) {
                if ((Ne(f), d && !ne[y + " "] && (!v || !v.test(y))))
                  try {
                    var m = T.call(f, y);
                    if (
                      m ||
                      N.disconnectedMatch ||
                      (f.document && f.document.nodeType !== 11)
                    )
                      return m;
                  } catch (w) {
                    ne(y, !0);
                  }
                return K(y, u, null, [f]).length > 0;
              }),
              (K.contains = function (f, y) {
                return (f.ownerDocument || f) != u && Ne(f), o.contains(f, y);
              }),
              (K.attr = function (f, y) {
                (f.ownerDocument || f) != u && Ne(f);
                var m = t.attrHandle[y.toLowerCase()],
                  w =
                    m && H.call(t.attrHandle, y.toLowerCase())
                      ? m(f, y, !d)
                      : void 0;
                return w !== void 0 ? w : f.getAttribute(y);
              }),
              (K.error = function (f) {
                throw new Error("Syntax error, unrecognized expression: " + f);
              }),
              (o.uniqueSort = function (f) {
                var y,
                  m = [],
                  w = 0,
                  k = 0;
                if (
                  ((a = !N.sortStable),
                  (r = !N.sortStable && i.call(f, 0)),
                  Li.call(f, ie),
                  a)
                ) {
                  for (; (y = f[k++]); ) y === f[k] && (w = m.push(k));
                  for (; w--; ) Mi.call(f, m[w], 1);
                }
                return (r = null), f;
              }),
              (o.fn.uniqueSort = function () {
                return this.pushStack(o.uniqueSort(i.apply(this)));
              }),
              (t = o.expr =
                {
                  cacheLength: 50,
                  createPseudo: me,
                  match: Ae,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                  },
                  preFilter: {
                    ATTR: function (f) {
                      return (
                        (f[1] = f[1].replace(_e, He)),
                        (f[3] = (f[3] || f[4] || f[5] || "").replace(_e, He)),
                        f[2] === "~=" && (f[3] = " " + f[3] + " "),
                        f.slice(0, 4)
                      );
                    },
                    CHILD: function (f) {
                      return (
                        (f[1] = f[1].toLowerCase()),
                        f[1].slice(0, 3) === "nth"
                          ? (f[3] || K.error(f[0]),
                            (f[4] = +(f[4]
                              ? f[5] + (f[6] || 1)
                              : 2 * (f[3] === "even" || f[3] === "odd"))),
                            (f[5] = +(f[7] + f[8] || f[3] === "odd")))
                          : f[3] && K.error(f[0]),
                        f
                      );
                    },
                    PSEUDO: function (f) {
                      var y,
                        m = !f[6] && f[2];
                      return Ae.CHILD.test(f[0])
                        ? null
                        : (f[3]
                            ? (f[2] = f[4] || f[5] || "")
                            : m &&
                              Ce.test(m) &&
                              (y = mt(m, !0)) &&
                              (y = m.indexOf(")", m.length - y) - m.length) &&
                              ((f[0] = f[0].slice(0, y)),
                              (f[2] = m.slice(0, y))),
                          f.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (f) {
                      var y = f.replace(_e, He).toLowerCase();
                      return f === "*"
                        ? function () {
                            return !0;
                          }
                        : function (m) {
                            return Z(m, y);
                          };
                    },
                    CLASS: function (f) {
                      var y = z[f + " "];
                      return (
                        y ||
                        ((y = new RegExp(
                          "(^|" + Q + ")" + f + "(" + Q + "|$)"
                        )) &&
                          z(f, function (m) {
                            return y.test(
                              (typeof m.className == "string" && m.className) ||
                                (typeof m.getAttribute != "undefined" &&
                                  m.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (f, y, m) {
                      return function (w) {
                        var k = K.attr(w, f);
                        return k == null
                          ? y === "!="
                          : y
                          ? ((k += ""),
                            y === "="
                              ? k === m
                              : y === "!="
                              ? k !== m
                              : y === "^="
                              ? m && k.indexOf(m) === 0
                              : y === "*="
                              ? m && k.indexOf(m) > -1
                              : y === "$="
                              ? m && k.slice(-m.length) === m
                              : y === "~="
                              ? (" " + k.replace(G, " ") + " ").indexOf(m) > -1
                              : y === "|="
                              ? k === m || k.slice(0, m.length + 1) === m + "-"
                              : !1)
                          : !0;
                      };
                    },
                    CHILD: function (f, y, m, w, k) {
                      var $ = f.slice(0, 3) !== "nth",
                        O = f.slice(-4) !== "last",
                        P = y === "of-type";
                      return w === 1 && k === 0
                        ? function (_) {
                            return !!_.parentNode;
                          }
                        : function (_, U, I) {
                            var R,
                              X,
                              L,
                              J,
                              de,
                              se = $ !== O ? "nextSibling" : "previousSibling",
                              ge = _.parentNode,
                              Ee = P && _.nodeName.toLowerCase(),
                              Qe = !I && !P,
                              ae = !1;
                            if (ge) {
                              if ($) {
                                for (; se; ) {
                                  for (L = _; (L = L[se]); )
                                    if (P ? Z(L, Ee) : L.nodeType === 1)
                                      return !1;
                                  de = se =
                                    f === "only" && !de && "nextSibling";
                                }
                                return !0;
                              }
                              if (
                                ((de = [O ? ge.firstChild : ge.lastChild]),
                                O && Qe)
                              ) {
                                for (
                                  X = ge[x] || (ge[x] = {}),
                                    R = X[f] || [],
                                    J = R[0] === b && R[1],
                                    ae = J && R[2],
                                    L = J && ge.childNodes[J];
                                  (L =
                                    (++J && L && L[se]) ||
                                    (ae = J = 0) ||
                                    de.pop());

                                )
                                  if (L.nodeType === 1 && ++ae && L === _) {
                                    X[f] = [b, J, ae];
                                    break;
                                  }
                              } else if (
                                (Qe &&
                                  ((X = _[x] || (_[x] = {})),
                                  (R = X[f] || []),
                                  (J = R[0] === b && R[1]),
                                  (ae = J)),
                                ae === !1)
                              )
                                for (
                                  ;
                                  (L =
                                    (++J && L && L[se]) ||
                                    (ae = J = 0) ||
                                    de.pop()) &&
                                  !(
                                    (P ? Z(L, Ee) : L.nodeType === 1) &&
                                    ++ae &&
                                    (Qe &&
                                      ((X = L[x] || (L[x] = {})),
                                      (X[f] = [b, ae])),
                                    L === _)
                                  );

                                );
                              return (
                                (ae -= k),
                                ae === w || (ae % w === 0 && ae / w >= 0)
                              );
                            }
                          };
                    },
                    PSEUDO: function (f, y) {
                      var m,
                        w =
                          t.pseudos[f] ||
                          t.setFilters[f.toLowerCase()] ||
                          K.error("unsupported pseudo: " + f);
                      return w[x]
                        ? w(y)
                        : w.length > 1
                        ? ((m = [f, f, "", y]),
                          t.setFilters.hasOwnProperty(f.toLowerCase())
                            ? me(function (k, $) {
                                for (var O, P = w(k, y), _ = P.length; _--; )
                                  (O = p.call(k, P[_])),
                                    (k[O] = !($[O] = P[_]));
                              })
                            : function (k) {
                                return w(k, 0, m);
                              })
                        : w;
                    },
                  },
                  pseudos: {
                    not: me(function (f) {
                      var y = [],
                        m = [],
                        w = Xt(f.replace(Je, "$1"));
                      return w[x]
                        ? me(function (k, $, O, P) {
                            for (
                              var _, U = w(k, null, P, []), I = k.length;
                              I--;

                            )
                              (_ = U[I]) && (k[I] = !($[I] = _));
                          })
                        : function (k, $, O) {
                            return (
                              (y[0] = k),
                              w(y, null, O, m),
                              (y[0] = null),
                              !m.pop()
                            );
                          };
                    }),
                    has: me(function (f) {
                      return function (y) {
                        return K(f, y).length > 0;
                      };
                    }),
                    contains: me(function (f) {
                      return (
                        (f = f.replace(_e, He)),
                        function (y) {
                          return (y.textContent || o.text(y)).indexOf(f) > -1;
                        }
                      );
                    }),
                    lang: me(function (f) {
                      return (
                        lt.test(f || "") || K.error("unsupported lang: " + f),
                        (f = f.replace(_e, He).toLowerCase()),
                        function (y) {
                          var m;
                          do
                            if (
                              (m = d
                                ? y.lang
                                : y.getAttribute("xml:lang") ||
                                  y.getAttribute("lang"))
                            )
                              return (
                                (m = m.toLowerCase()),
                                m === f || m.indexOf(f + "-") === 0
                              );
                          while ((y = y.parentNode) && y.nodeType === 1);
                          return !1;
                        }
                      );
                    }),
                    target: function (f) {
                      var y = M.location && M.location.hash;
                      return y && y.slice(1) === f.id;
                    },
                    root: function (f) {
                      return f === h;
                    },
                    focus: function (f) {
                      return (
                        f === Mn() &&
                        u.hasFocus() &&
                        !!(f.type || f.href || ~f.tabIndex)
                      );
                    },
                    enabled: _i(!1),
                    disabled: _i(!0),
                    checked: function (f) {
                      return (
                        (Z(f, "input") && !!f.checked) ||
                        (Z(f, "option") && !!f.selected)
                      );
                    },
                    selected: function (f) {
                      return (
                        f.parentNode && f.parentNode.selectedIndex,
                        f.selected === !0
                      );
                    },
                    empty: function (f) {
                      for (f = f.firstChild; f; f = f.nextSibling)
                        if (f.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (f) {
                      return !t.pseudos.empty(f);
                    },
                    header: function (f) {
                      return je.test(f.nodeName);
                    },
                    input: function (f) {
                      return Pe.test(f.nodeName);
                    },
                    button: function (f) {
                      return (
                        (Z(f, "input") && f.type === "button") || Z(f, "button")
                      );
                    },
                    text: function (f) {
                      var y;
                      return (
                        Z(f, "input") &&
                        f.type === "text" &&
                        ((y = f.getAttribute("type")) == null ||
                          y.toLowerCase() === "text")
                      );
                    },
                    first: We(function () {
                      return [0];
                    }),
                    last: We(function (f, y) {
                      return [y - 1];
                    }),
                    eq: We(function (f, y, m) {
                      return [m < 0 ? m + y : m];
                    }),
                    even: We(function (f, y) {
                      for (var m = 0; m < y; m += 2) f.push(m);
                      return f;
                    }),
                    odd: We(function (f, y) {
                      for (var m = 1; m < y; m += 2) f.push(m);
                      return f;
                    }),
                    lt: We(function (f, y, m) {
                      var w;
                      for (
                        m < 0 ? (w = m + y) : m > y ? (w = y) : (w = m);
                        --w >= 0;

                      )
                        f.push(w);
                      return f;
                    }),
                    gt: We(function (f, y, m) {
                      for (var w = m < 0 ? m + y : m; ++w < y; ) f.push(w);
                      return f;
                    }),
                  },
                }),
              (t.pseudos.nth = t.pseudos.eq);
            for (e in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0,
            })
              t.pseudos[e] = qn(e);
            for (e in { submit: !0, reset: !0 }) t.pseudos[e] = In(e);
            function Hi() {}
            (Hi.prototype = t.filters = t.pseudos), (t.setFilters = new Hi());
            function mt(f, y) {
              var m,
                w,
                k,
                $,
                O,
                P,
                _,
                U = Y[f + " "];
              if (U) return y ? 0 : U.slice(0);
              for (O = f, P = [], _ = t.preFilter; O; ) {
                (!m || (w = ee.exec(O))) &&
                  (w && (O = O.slice(w[0].length) || O), P.push((k = []))),
                  (m = !1),
                  (w = at.exec(O)) &&
                    ((m = w.shift()),
                    k.push({ value: m, type: w[0].replace(Je, " ") }),
                    (O = O.slice(m.length)));
                for ($ in t.filter)
                  (w = Ae[$].exec(O)) &&
                    (!_[$] || (w = _[$](w))) &&
                    ((m = w.shift()),
                    k.push({ value: m, type: $, matches: w }),
                    (O = O.slice(m.length)));
                if (!m) break;
              }
              return y ? O.length : O ? K.error(f) : Y(f, P).slice(0);
            }
            function bt(f) {
              for (var y = 0, m = f.length, w = ""; y < m; y++) w += f[y].value;
              return w;
            }
            function wt(f, y, m) {
              var w = y.dir,
                k = y.next,
                $ = k || w,
                O = m && $ === "parentNode",
                P = A++;
              return y.first
                ? function (_, U, I) {
                    for (; (_ = _[w]); )
                      if (_.nodeType === 1 || O) return f(_, U, I);
                    return !1;
                  }
                : function (_, U, I) {
                    var R,
                      X,
                      L = [b, P];
                    if (I) {
                      for (; (_ = _[w]); )
                        if ((_.nodeType === 1 || O) && f(_, U, I)) return !0;
                    } else
                      for (; (_ = _[w]); )
                        if (_.nodeType === 1 || O)
                          if (((X = _[x] || (_[x] = {})), k && Z(_, k)))
                            _ = _[w] || _;
                          else {
                            if ((R = X[$]) && R[0] === b && R[1] === P)
                              return (L[2] = R[2]);
                            if (((X[$] = L), (L[2] = f(_, U, I)))) return !0;
                          }
                    return !1;
                  };
            }
            function Ft(f) {
              return f.length > 1
                ? function (y, m, w) {
                    for (var k = f.length; k--; ) if (!f[k](y, m, w)) return !1;
                    return !0;
                  }
                : f[0];
            }
            function Wn(f, y, m) {
              for (var w = 0, k = y.length; w < k; w++) K(f, y[w], m);
              return m;
            }
            function Tt(f, y, m, w, k) {
              for (
                var $, O = [], P = 0, _ = f.length, U = y != null;
                P < _;
                P++
              )
                ($ = f[P]) && (!m || m($, w, k)) && (O.push($), U && y.push(P));
              return O;
            }
            function Bt(f, y, m, w, k, $) {
              return (
                w && !w[x] && (w = Bt(w)),
                k && !k[x] && (k = Bt(k, $)),
                me(function (O, P, _, U) {
                  var I,
                    R,
                    X,
                    L,
                    J = [],
                    de = [],
                    se = P.length,
                    ge = O || Wn(y || "*", _.nodeType ? [_] : _, []),
                    Ee = f && (O || !y) ? Tt(ge, J, f, _, U) : ge;
                  if (
                    (m
                      ? ((L = k || (O ? f : se || w) ? [] : P), m(Ee, L, _, U))
                      : (L = Ee),
                    w)
                  )
                    for (I = Tt(L, de), w(I, [], _, U), R = I.length; R--; )
                      (X = I[R]) && (L[de[R]] = !(Ee[de[R]] = X));
                  if (O) {
                    if (k || f) {
                      if (k) {
                        for (I = [], R = L.length; R--; )
                          (X = L[R]) && I.push((Ee[R] = X));
                        k(null, (L = []), I, U);
                      }
                      for (R = L.length; R--; )
                        (X = L[R]) &&
                          (I = k ? p.call(O, X) : J[R]) > -1 &&
                          (O[I] = !(P[I] = X));
                    }
                  } else (L = Tt(L === P ? L.splice(se, L.length) : L)), k ? k(null, P, L, U) : l.apply(P, L);
                })
              );
            }
            function Ut(f) {
              for (
                var y,
                  m,
                  w,
                  k = f.length,
                  $ = t.relative[f[0].type],
                  O = $ || t.relative[" "],
                  P = $ ? 1 : 0,
                  _ = wt(
                    function (R) {
                      return R === y;
                    },
                    O,
                    !0
                  ),
                  U = wt(
                    function (R) {
                      return p.call(y, R) > -1;
                    },
                    O,
                    !0
                  ),
                  I = [
                    function (R, X, L) {
                      var J =
                        (!$ && (L || X != n)) ||
                        ((y = X).nodeType ? _(R, X, L) : U(R, X, L));
                      return (y = null), J;
                    },
                  ];
                P < k;
                P++
              )
                if ((m = t.relative[f[P].type])) I = [wt(Ft(I), m)];
                else {
                  if (
                    ((m = t.filter[f[P].type].apply(null, f[P].matches)), m[x])
                  ) {
                    for (w = ++P; w < k && !t.relative[f[w].type]; w++);
                    return Bt(
                      P > 1 && Ft(I),
                      P > 1 &&
                        bt(
                          f
                            .slice(0, P - 1)
                            .concat({ value: f[P - 2].type === " " ? "*" : "" })
                        ).replace(Je, "$1"),
                      m,
                      P < w && Ut(f.slice(P, w)),
                      w < k && Ut((f = f.slice(w))),
                      w < k && bt(f)
                    );
                  }
                  I.push(m);
                }
              return Ft(I);
            }
            function zn(f, y) {
              var m = y.length > 0,
                w = f.length > 0,
                k = function ($, O, P, _, U) {
                  var I,
                    R,
                    X,
                    L = 0,
                    J = "0",
                    de = $ && [],
                    se = [],
                    ge = n,
                    Ee = $ || (w && t.find.TAG("*", U)),
                    Qe = (b += ge == null ? 1 : Math.random() || 0.1),
                    ae = Ee.length;
                  for (
                    U && (n = O == u || O || U);
                    J !== ae && (I = Ee[J]) != null;
                    J++
                  ) {
                    if (w && I) {
                      for (
                        R = 0, !O && I.ownerDocument != u && (Ne(I), (P = !d));
                        (X = f[R++]);

                      )
                        if (X(I, O || u, P)) {
                          l.call(_, I);
                          break;
                        }
                      U && (b = Qe);
                    }
                    m && ((I = !X && I) && L--, $ && de.push(I));
                  }
                  if (((L += J), m && J !== L)) {
                    for (R = 0; (X = y[R++]); ) X(de, se, O, P);
                    if ($) {
                      if (L > 0)
                        for (; J--; ) de[J] || se[J] || (se[J] = Ni.call(_));
                      se = Tt(se);
                    }
                    l.apply(_, se),
                      U &&
                        !$ &&
                        se.length > 0 &&
                        L + y.length > 1 &&
                        o.uniqueSort(_);
                  }
                  return U && ((b = Qe), (n = ge)), de;
                };
              return m ? me(k) : k;
            }
            function Xt(f, y) {
              var m,
                w = [],
                k = [],
                $ = F[f + " "];
              if (!$) {
                for (y || (y = mt(f)), m = y.length; m--; )
                  ($ = Ut(y[m])), $[x] ? w.push($) : k.push($);
                ($ = F(f, zn(k, w))), ($.selector = f);
              }
              return $;
            }
            function Pi(f, y, m, w) {
              var k,
                $,
                O,
                P,
                _,
                U = typeof f == "function" && f,
                I = !w && mt((f = U.selector || f));
              if (((m = m || []), I.length === 1)) {
                if (
                  (($ = I[0] = I[0].slice(0)),
                  $.length > 2 &&
                    (O = $[0]).type === "ID" &&
                    y.nodeType === 9 &&
                    d &&
                    t.relative[$[1].type])
                ) {
                  if (
                    ((y = (t.find.ID(O.matches[0].replace(_e, He), y) ||
                      [])[0]),
                    y)
                  )
                    U && (y = y.parentNode);
                  else return m;
                  f = f.slice($.shift().value.length);
                }
                for (
                  k = Ae.needsContext.test(f) ? 0 : $.length;
                  k-- && ((O = $[k]), !t.relative[(P = O.type)]);

                )
                  if (
                    (_ = t.find[P]) &&
                    (w = _(
                      O.matches[0].replace(_e, He),
                      (zt.test($[0].type) && Rt(y.parentNode)) || y
                    ))
                  ) {
                    if (($.splice(k, 1), (f = w.length && bt($)), !f))
                      return l.apply(m, w), m;
                    break;
                  }
              }
              return (
                (U || Xt(f, I))(
                  w,
                  y,
                  !d,
                  m,
                  !y || (zt.test(f) && Rt(y.parentNode)) || y
                ),
                m
              );
            }
            (N.sortStable = x.split("").sort(ie).join("") === x),
              Ne(),
              (N.sortDetached = Ge(function (f) {
                return (
                  f.compareDocumentPosition(u.createElement("fieldset")) & 1
                );
              })),
              (o.find = K),
              (o.expr[":"] = o.expr.pseudos),
              (o.unique = o.uniqueSort),
              (K.compile = Xt),
              (K.select = Pi),
              (K.setDocument = Ne),
              (K.escape = o.escapeSelector),
              (K.getText = o.text),
              (K.isXML = o.isXMLDoc),
              (K.selectors = o.expr),
              (K.support = o.support),
              (K.uniqueSort = o.uniqueSort);
          })();
          var ze = function (e, t, n) {
              for (
                var r = [], a = n !== void 0;
                (e = e[t]) && e.nodeType !== 9;

              )
                if (e.nodeType === 1) {
                  if (a && o(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            Yt = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
              return n;
            },
            Gt = o.expr.match.needsContext,
            Qt =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function xt(e, t, n) {
            return W(t)
              ? o.grep(e, function (r, a) {
                  return !!t.call(r, a, r) !== n;
                })
              : t.nodeType
              ? o.grep(e, function (r) {
                  return (r === t) !== n;
                })
              : typeof t != "string"
              ? o.grep(e, function (r) {
                  return p.call(t, r) > -1 !== n;
                })
              : o.filter(t, e, n);
          }
          (o.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              t.length === 1 && r.nodeType === 1
                ? o.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : o.find.matches(
                    e,
                    o.grep(t, function (a) {
                      return a.nodeType === 1;
                    })
                  )
            );
          }),
            o.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  a = this;
                if (typeof e != "string")
                  return this.pushStack(
                    o(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (o.contains(a[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  o.find(e, a[t], n);
                return r > 1 ? o.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(xt(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(xt(this, e || [], !0));
              },
              is: function (e) {
                return !!xt(
                  this,
                  typeof e == "string" && Gt.test(e) ? o(e) : e || [],
                  !1
                ).length;
              },
            });
          var Kt,
            Wi = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            zi = (o.fn.init = function (e, t, n) {
              var r, a;
              if (!e) return this;
              if (((n = n || Kt), typeof e == "string"))
                if (
                  (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
                    ? (r = [null, e, null])
                    : (r = Wi.exec(e)),
                  r && (r[1] || !t))
                )
                  if (r[1]) {
                    if (
                      ((t = t instanceof o ? t[0] : t),
                      o.merge(
                        this,
                        o.parseHTML(
                          r[1],
                          t && t.nodeType ? t.ownerDocument || t : q,
                          !0
                        )
                      ),
                      Qt.test(r[1]) && o.isPlainObject(t))
                    )
                      for (r in t)
                        W(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                  } else
                    return (
                      (a = q.getElementById(r[2])),
                      a && ((this[0] = a), (this.length = 1)),
                      this
                    );
                else
                  return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
              else {
                if (e.nodeType) return (this[0] = e), (this.length = 1), this;
                if (W(e)) return n.ready !== void 0 ? n.ready(e) : e(o);
              }
              return o.makeArray(e, this);
            });
          (zi.prototype = o.fn), (Kt = o(q));
          var Ri = /^(?:parents|prev(?:Until|All))/,
            Fi = { children: !0, contents: !0, next: !0, prev: !0 };
          o.fn.extend({
            has: function (e) {
              var t = o(e, this),
                n = t.length;
              return this.filter(function () {
                for (var r = 0; r < n; r++)
                  if (o.contains(this, t[r])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                a = this.length,
                l = [],
                u = typeof e != "string" && o(e);
              if (!Gt.test(e)) {
                for (; r < a; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (u
                        ? u.index(n) > -1
                        : n.nodeType === 1 && o.find.matchesSelector(n, e))
                    ) {
                      l.push(n);
                      break;
                    }
              }
              return this.pushStack(l.length > 1 ? o.uniqueSort(l) : l);
            },
            index: function (e) {
              return e
                ? typeof e == "string"
                  ? p.call(o(e), this[0])
                  : p.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(o.uniqueSort(o.merge(this.get(), o(e, t))));
            },
            addBack: function (e) {
              return this.add(
                e == null ? this.prevObject : this.prevObject.filter(e)
              );
            },
          });
          function Jt(e, t) {
            for (; (e = e[t]) && e.nodeType !== 1; );
            return e;
          }
          o.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null;
              },
              parents: function (e) {
                return ze(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return ze(e, "parentNode", n);
              },
              next: function (e) {
                return Jt(e, "nextSibling");
              },
              prev: function (e) {
                return Jt(e, "previousSibling");
              },
              nextAll: function (e) {
                return ze(e, "nextSibling");
              },
              prevAll: function (e) {
                return ze(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return ze(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return ze(e, "previousSibling", n);
              },
              siblings: function (e) {
                return Yt((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return Yt(e.firstChild);
              },
              contents: function (e) {
                return e.contentDocument != null && C(e.contentDocument)
                  ? e.contentDocument
                  : (Z(e, "template") && (e = e.content || e),
                    o.merge([], e.childNodes));
              },
            },
            function (e, t) {
              o.fn[e] = function (n, r) {
                var a = o.map(this, t, n);
                return (
                  e.slice(-5) !== "Until" && (r = n),
                  r && typeof r == "string" && (a = o.filter(r, a)),
                  this.length > 1 &&
                    (Fi[e] || o.uniqueSort(a), Ri.test(e) && a.reverse()),
                  this.pushStack(a)
                );
              };
            }
          );
          var Te = /[^\x20\t\r\n\f]+/g;
          function Bi(e) {
            var t = {};
            return (
              o.each(e.match(Te) || [], function (n, r) {
                t[r] = !0;
              }),
              t
            );
          }
          o.Callbacks = function (e) {
            e = typeof e == "string" ? Bi(e) : o.extend({}, e);
            var t,
              n,
              r,
              a,
              l = [],
              u = [],
              h = -1,
              d = function () {
                for (a = a || e.once, r = t = !0; u.length; h = -1)
                  for (n = u.shift(); ++h < l.length; )
                    l[h].apply(n[0], n[1]) === !1 &&
                      e.stopOnFalse &&
                      ((h = l.length), (n = !1));
                e.memory || (n = !1), (t = !1), a && (n ? (l = []) : (l = ""));
              },
              v = {
                add: function () {
                  return (
                    l &&
                      (n && !t && ((h = l.length - 1), u.push(n)),
                      (function T(x) {
                        o.each(x, function (b, A) {
                          W(A)
                            ? (!e.unique || !v.has(A)) && l.push(A)
                            : A && A.length && we(A) !== "string" && T(A);
                        });
                      })(arguments),
                      n && !t && d()),
                    this
                  );
                },
                remove: function () {
                  return (
                    o.each(arguments, function (T, x) {
                      for (var b; (b = o.inArray(x, l, b)) > -1; )
                        l.splice(b, 1), b <= h && h--;
                    }),
                    this
                  );
                },
                has: function (T) {
                  return T ? o.inArray(T, l) > -1 : l.length > 0;
                },
                empty: function () {
                  return l && (l = []), this;
                },
                disable: function () {
                  return (a = u = []), (l = n = ""), this;
                },
                disabled: function () {
                  return !l;
                },
                lock: function () {
                  return (a = u = []), !n && !t && (l = n = ""), this;
                },
                locked: function () {
                  return !!a;
                },
                fireWith: function (T, x) {
                  return (
                    a ||
                      ((x = x || []),
                      (x = [T, x.slice ? x.slice() : x]),
                      u.push(x),
                      t || d()),
                    this
                  );
                },
                fire: function () {
                  return v.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return v;
          };
          function Re(e) {
            return e;
          }
          function ft(e) {
            throw e;
          }
          function Zt(e, t, n, r) {
            var a;
            try {
              e && W((a = e.promise))
                ? a.call(e).done(t).fail(n)
                : e && W((a = e.then))
                ? a.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (l) {
              n.apply(void 0, [l]);
            }
          }
          o.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    o.Callbacks("memory"),
                    o.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    o.Callbacks("once memory"),
                    o.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    o.Callbacks("once memory"),
                    o.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                n = "pending",
                r = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return a.done(arguments).fail(arguments), this;
                  },
                  catch: function (l) {
                    return r.then(null, l);
                  },
                  pipe: function () {
                    var l = arguments;
                    return o
                      .Deferred(function (u) {
                        o.each(t, function (h, d) {
                          var v = W(l[d[4]]) && l[d[4]];
                          a[d[1]](function () {
                            var T = v && v.apply(this, arguments);
                            T && W(T.promise)
                              ? T.promise()
                                  .progress(u.notify)
                                  .done(u.resolve)
                                  .fail(u.reject)
                              : u[d[0] + "With"](this, v ? [T] : arguments);
                          });
                        }),
                          (l = null);
                      })
                      .promise();
                  },
                  then: function (l, u, h) {
                    var d = 0;
                    function v(T, x, b, A) {
                      return function () {
                        var z = this,
                          Y = arguments,
                          F = function () {
                            var ie, ke;
                            if (!(T < d)) {
                              if (((ie = b.apply(z, Y)), ie === x.promise()))
                                throw new TypeError("Thenable self-resolution");
                              (ke =
                                ie &&
                                (typeof ie == "object" ||
                                  typeof ie == "function") &&
                                ie.then),
                                W(ke)
                                  ? A
                                    ? ke.call(
                                        ie,
                                        v(d, x, Re, A),
                                        v(d, x, ft, A)
                                      )
                                    : (d++,
                                      ke.call(
                                        ie,
                                        v(d, x, Re, A),
                                        v(d, x, ft, A),
                                        v(d, x, Re, x.notifyWith)
                                      ))
                                  : (b !== Re && ((z = void 0), (Y = [ie])),
                                    (A || x.resolveWith)(z, Y));
                            }
                          },
                          ne = A
                            ? F
                            : function () {
                                try {
                                  F();
                                } catch (ie) {
                                  o.Deferred.exceptionHook &&
                                    o.Deferred.exceptionHook(ie, ne.error),
                                    T + 1 >= d &&
                                      (b !== ft && ((z = void 0), (Y = [ie])),
                                      x.rejectWith(z, Y));
                                }
                              };
                        T
                          ? ne()
                          : (o.Deferred.getErrorHook
                              ? (ne.error = o.Deferred.getErrorHook())
                              : o.Deferred.getStackHook &&
                                (ne.error = o.Deferred.getStackHook()),
                            M.setTimeout(ne));
                      };
                    }
                    return o
                      .Deferred(function (T) {
                        t[0][3].add(v(0, T, W(h) ? h : Re, T.notifyWith)),
                          t[1][3].add(v(0, T, W(l) ? l : Re)),
                          t[2][3].add(v(0, T, W(u) ? u : ft));
                      })
                      .promise();
                  },
                  promise: function (l) {
                    return l != null ? o.extend(l, r) : r;
                  },
                },
                a = {};
              return (
                o.each(t, function (l, u) {
                  var h = u[2],
                    d = u[5];
                  (r[u[1]] = h.add),
                    d &&
                      h.add(
                        function () {
                          n = d;
                        },
                        t[3 - l][2].disable,
                        t[3 - l][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    h.add(u[3].fire),
                    (a[u[0]] = function () {
                      return (
                        a[u[0] + "With"](this === a ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (a[u[0] + "With"] = h.fireWith);
                }),
                r.promise(a),
                e && e.call(a, a),
                a
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                a = i.call(arguments),
                l = o.Deferred(),
                u = function (h) {
                  return function (d) {
                    (r[h] = this),
                      (a[h] = arguments.length > 1 ? i.call(arguments) : d),
                      --t || l.resolveWith(r, a);
                  };
                };
              if (
                t <= 1 &&
                (Zt(e, l.done(u(n)).resolve, l.reject, !t),
                l.state() === "pending" || W(a[n] && a[n].then))
              )
                return l.then();
              for (; n--; ) Zt(a[n], u(n), l.reject);
              return l.promise();
            },
          });
          var Ui = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (o.Deferred.exceptionHook = function (e, t) {
            M.console &&
              M.console.warn &&
              e &&
              Ui.test(e.name) &&
              M.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (o.readyException = function (e) {
              M.setTimeout(function () {
                throw e;
              });
            });
          var Ct = o.Deferred();
          (o.fn.ready = function (e) {
            return (
              Ct.then(e).catch(function (t) {
                o.readyException(t);
              }),
              this
            );
          }),
            o.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (e === !0 ? --o.readyWait : o.isReady) ||
                  ((o.isReady = !0),
                  !(e !== !0 && --o.readyWait > 0) && Ct.resolveWith(q, [o]));
              },
            }),
            (o.ready.then = Ct.then);
          function dt() {
            q.removeEventListener("DOMContentLoaded", dt),
              M.removeEventListener("load", dt),
              o.ready();
          }
          q.readyState === "complete" ||
          (q.readyState !== "loading" && !q.documentElement.doScroll)
            ? M.setTimeout(o.ready)
            : (q.addEventListener("DOMContentLoaded", dt),
              M.addEventListener("load", dt));
          var $e = function (e, t, n, r, a, l, u) {
              var h = 0,
                d = e.length,
                v = n == null;
              if (we(n) === "object") {
                a = !0;
                for (h in n) $e(e, t, h, n[h], !0, l, u);
              } else if (
                r !== void 0 &&
                ((a = !0),
                W(r) || (u = !0),
                v &&
                  (u
                    ? (t.call(e, r), (t = null))
                    : ((v = t),
                      (t = function (T, x, b) {
                        return v.call(o(T), b);
                      }))),
                t)
              )
                for (; h < d; h++)
                  t(e[h], n, u ? r : r.call(e[h], h, t(e[h], n)));
              return a ? e : v ? t.call(e) : d ? t(e[0], n) : l;
            },
            Xi = /^-ms-/,
            Vi = /-([a-z])/g;
          function Yi(e, t) {
            return t.toUpperCase();
          }
          function Se(e) {
            return e.replace(Xi, "ms-").replace(Vi, Yi);
          }
          var Ze = function (e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
          };
          function et() {
            this.expando = o.expando + et.uid++;
          }
          (et.uid = 1),
            (et.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Ze(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  a = this.cache(e);
                if (typeof t == "string") a[Se(t)] = n;
                else for (r in t) a[Se(r)] = t[r];
                return a;
              },
              get: function (e, t) {
                return t === void 0
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Se(t)];
              },
              access: function (e, t, n) {
                return t === void 0 ||
                  (t && typeof t == "string" && n === void 0)
                  ? this.get(e, t)
                  : (this.set(e, t, n), n !== void 0 ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (r !== void 0) {
                  if (t !== void 0)
                    for (
                      Array.isArray(t)
                        ? (t = t.map(Se))
                        : ((t = Se(t)),
                          (t = (t in r) ? [t] : t.match(Te) || [])),
                        n = t.length;
                      n--;

                    )
                      delete r[t[n]];
                  (t === void 0 || o.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return t !== void 0 && !o.isEmptyObject(t);
              },
            });
          var j = new et(),
            le = new et(),
            Gi = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Qi = /[A-Z]/g;
          function Ki(e) {
            return e === "true"
              ? !0
              : e === "false"
              ? !1
              : e === "null"
              ? null
              : e === +e + ""
              ? +e
              : Gi.test(e)
              ? JSON.parse(e)
              : e;
          }
          function ei(e, t, n) {
            var r;
            if (n === void 0 && e.nodeType === 1)
              if (
                ((r = "data-" + t.replace(Qi, "-$&").toLowerCase()),
                (n = e.getAttribute(r)),
                typeof n == "string")
              ) {
                try {
                  n = Ki(n);
                } catch (a) {}
                le.set(e, t, n);
              } else n = void 0;
            return n;
          }
          o.extend({
            hasData: function (e) {
              return le.hasData(e) || j.hasData(e);
            },
            data: function (e, t, n) {
              return le.access(e, t, n);
            },
            removeData: function (e, t) {
              le.remove(e, t);
            },
            _data: function (e, t, n) {
              return j.access(e, t, n);
            },
            _removeData: function (e, t) {
              j.remove(e, t);
            },
          }),
            o.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  a,
                  l = this[0],
                  u = l && l.attributes;
                if (e === void 0) {
                  if (
                    this.length &&
                    ((a = le.get(l)),
                    l.nodeType === 1 && !j.get(l, "hasDataAttrs"))
                  ) {
                    for (n = u.length; n--; )
                      u[n] &&
                        ((r = u[n].name),
                        r.indexOf("data-") === 0 &&
                          ((r = Se(r.slice(5))), ei(l, r, a[r])));
                    j.set(l, "hasDataAttrs", !0);
                  }
                  return a;
                }
                return typeof e == "object"
                  ? this.each(function () {
                      le.set(this, e);
                    })
                  : $e(
                      this,
                      function (h) {
                        var d;
                        if (l && h === void 0)
                          return (
                            (d = le.get(l, e)),
                            d !== void 0 || ((d = ei(l, e)), d !== void 0)
                              ? d
                              : void 0
                          );
                        this.each(function () {
                          le.set(this, e, h);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  le.remove(this, e);
                });
              },
            }),
            o.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = j.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = j.access(e, t, o.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = o.queue(e, t),
                  r = n.length,
                  a = n.shift(),
                  l = o._queueHooks(e, t),
                  u = function () {
                    o.dequeue(e, t);
                  };
                a === "inprogress" && ((a = n.shift()), r--),
                  a &&
                    (t === "fx" && n.unshift("inprogress"),
                    delete l.stop,
                    a.call(e, u, l)),
                  !r && l && l.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  j.get(e, n) ||
                  j.access(e, n, {
                    empty: o.Callbacks("once memory").add(function () {
                      j.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            o.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  typeof e != "string" && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? o.queue(this[0], e)
                    : t === void 0
                    ? this
                    : this.each(function () {
                        var r = o.queue(this, e, t);
                        o._queueHooks(this, e),
                          e === "fx" &&
                            r[0] !== "inprogress" &&
                            o.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  o.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  a = o.Deferred(),
                  l = this,
                  u = this.length,
                  h = function () {
                    --r || a.resolveWith(l, [l]);
                  };
                for (
                  typeof e != "string" && ((t = e), (e = void 0)),
                    e = e || "fx";
                  u--;

                )
                  (n = j.get(l[u], e + "queueHooks")),
                    n && n.empty && (r++, n.empty.add(h));
                return h(), a.promise(t);
              },
            });
          var ti = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            tt = new RegExp("^(?:([+-])=|)(" + ti + ")([a-z%]*)$", "i"),
            Oe = ["Top", "Right", "Bottom", "Left"],
            Le = q.documentElement,
            Fe = function (e) {
              return o.contains(e.ownerDocument, e);
            },
            Ji = { composed: !0 };
          Le.getRootNode &&
            (Fe = function (e) {
              return (
                o.contains(e.ownerDocument, e) ||
                e.getRootNode(Ji) === e.ownerDocument
              );
            });
          var ct = function (e, t) {
            return (
              (e = t || e),
              e.style.display === "none" ||
                (e.style.display === "" &&
                  Fe(e) &&
                  o.css(e, "display") === "none")
            );
          };
          function ii(e, t, n, r) {
            var a,
              l,
              u = 20,
              h = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return o.css(e, t, "");
                  },
              d = h(),
              v = (n && n[3]) || (o.cssNumber[t] ? "" : "px"),
              T =
                e.nodeType &&
                (o.cssNumber[t] || (v !== "px" && +d)) &&
                tt.exec(o.css(e, t));
            if (T && T[3] !== v) {
              for (d = d / 2, v = v || T[3], T = +d || 1; u--; )
                o.style(e, t, T + v),
                  (1 - l) * (1 - (l = h() / d || 0.5)) <= 0 && (u = 0),
                  (T = T / l);
              (T = T * 2), o.style(e, t, T + v), (n = n || []);
            }
            return (
              n &&
                ((T = +T || +d || 0),
                (a = n[1] ? T + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = v), (r.start = T), (r.end = a))),
              a
            );
          }
          var ni = {};
          function Zi(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              a = ni[r];
            return (
              a ||
              ((t = n.body.appendChild(n.createElement(r))),
              (a = o.css(t, "display")),
              t.parentNode.removeChild(t),
              a === "none" && (a = "block"),
              (ni[r] = a),
              a)
            );
          }
          function Be(e, t) {
            for (var n, r, a = [], l = 0, u = e.length; l < u; l++)
              (r = e[l]),
                r.style &&
                  ((n = r.style.display),
                  t
                    ? (n === "none" &&
                        ((a[l] = j.get(r, "display") || null),
                        a[l] || (r.style.display = "")),
                      r.style.display === "" && ct(r) && (a[l] = Zi(r)))
                    : n !== "none" &&
                      ((a[l] = "none"), j.set(r, "display", n)));
            for (l = 0; l < u; l++) a[l] != null && (e[l].style.display = a[l]);
            return e;
          }
          o.fn.extend({
            show: function () {
              return Be(this, !0);
            },
            hide: function () {
              return Be(this);
            },
            toggle: function (e) {
              return typeof e == "boolean"
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ct(this) ? o(this).show() : o(this).hide();
                  });
            },
          });
          var it = /^(?:checkbox|radio)$/i,
            ri = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            si = /^$|^module$|\/(?:java|ecma)script/i;
          (function () {
            var e = q.createDocumentFragment(),
              t = e.appendChild(q.createElement("div")),
              n = q.createElement("input");
            n.setAttribute("type", "radio"),
              n.setAttribute("checked", "checked"),
              n.setAttribute("name", "t"),
              t.appendChild(n),
              (N.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (t.innerHTML = "<textarea>x</textarea>"),
              (N.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
              (t.innerHTML = "<option></option>"),
              (N.option = !!t.lastChild);
          })();
          var pe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead),
            (pe.th = pe.td),
            N.option ||
              (pe.optgroup = pe.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          function ue(e, t) {
            var n;
            return (
              typeof e.getElementsByTagName != "undefined"
                ? (n = e.getElementsByTagName(t || "*"))
                : typeof e.querySelectorAll != "undefined"
                ? (n = e.querySelectorAll(t || "*"))
                : (n = []),
              t === void 0 || (t && Z(e, t)) ? o.merge([e], n) : n
            );
          }
          function At(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              j.set(e[n], "globalEval", !t || j.get(t[n], "globalEval"));
          }
          var en = /<|&#?\w+;/;
          function oi(e, t, n, r, a) {
            for (
              var l,
                u,
                h,
                d,
                v,
                T,
                x = t.createDocumentFragment(),
                b = [],
                A = 0,
                z = e.length;
              A < z;
              A++
            )
              if (((l = e[A]), l || l === 0))
                if (we(l) === "object") o.merge(b, l.nodeType ? [l] : l);
                else if (!en.test(l)) b.push(t.createTextNode(l));
                else {
                  for (
                    u = u || x.appendChild(t.createElement("div")),
                      h = (ri.exec(l) || ["", ""])[1].toLowerCase(),
                      d = pe[h] || pe._default,
                      u.innerHTML = d[1] + o.htmlPrefilter(l) + d[2],
                      T = d[0];
                    T--;

                  )
                    u = u.lastChild;
                  o.merge(b, u.childNodes),
                    (u = x.firstChild),
                    (u.textContent = "");
                }
            for (x.textContent = "", A = 0; (l = b[A++]); ) {
              if (r && o.inArray(l, r) > -1) {
                a && a.push(l);
                continue;
              }
              if (
                ((v = Fe(l)),
                (u = ue(x.appendChild(l), "script")),
                v && At(u),
                n)
              )
                for (T = 0; (l = u[T++]); ) si.test(l.type || "") && n.push(l);
            }
            return x;
          }
          var ai = /^([^.]*)(?:\.(.+)|)/;
          function Ue() {
            return !0;
          }
          function Xe() {
            return !1;
          }
          function Et(e, t, n, r, a, l) {
            var u, h;
            if (typeof t == "object") {
              typeof n != "string" && ((r = r || n), (n = void 0));
              for (h in t) Et(e, h, n, r, t[h], l);
              return e;
            }
            if (
              (r == null && a == null
                ? ((a = n), (r = n = void 0))
                : a == null &&
                  (typeof n == "string"
                    ? ((a = r), (r = void 0))
                    : ((a = r), (r = n), (n = void 0))),
              a === !1)
            )
              a = Xe;
            else if (!a) return e;
            return (
              l === 1 &&
                ((u = a),
                (a = function (d) {
                  return o().off(d), u.apply(this, arguments);
                }),
                (a.guid = u.guid || (u.guid = o.guid++))),
              e.each(function () {
                o.event.add(this, t, a, r, n);
              })
            );
          }
          o.event = {
            global: {},
            add: function (e, t, n, r, a) {
              var l,
                u,
                h,
                d,
                v,
                T,
                x,
                b,
                A,
                z,
                Y,
                F = j.get(e);
              if (Ze(e))
                for (
                  n.handler && ((l = n), (n = l.handler), (a = l.selector)),
                    a && o.find.matchesSelector(Le, a),
                    n.guid || (n.guid = o.guid++),
                    (d = F.events) || (d = F.events = Object.create(null)),
                    (u = F.handle) ||
                      (u = F.handle =
                        function (ne) {
                          return typeof o != "undefined" &&
                            o.event.triggered !== ne.type
                            ? o.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    t = (t || "").match(Te) || [""],
                    v = t.length;
                  v--;

                )
                  (h = ai.exec(t[v]) || []),
                    (A = Y = h[1]),
                    (z = (h[2] || "").split(".").sort()),
                    A &&
                      ((x = o.event.special[A] || {}),
                      (A = (a ? x.delegateType : x.bindType) || A),
                      (x = o.event.special[A] || {}),
                      (T = o.extend(
                        {
                          type: A,
                          origType: Y,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: a,
                          needsContext: a && o.expr.match.needsContext.test(a),
                          namespace: z.join("."),
                        },
                        l
                      )),
                      (b = d[A]) ||
                        ((b = d[A] = []),
                        (b.delegateCount = 0),
                        (!x.setup || x.setup.call(e, r, z, u) === !1) &&
                          e.addEventListener &&
                          e.addEventListener(A, u)),
                      x.add &&
                        (x.add.call(e, T),
                        T.handler.guid || (T.handler.guid = n.guid)),
                      a ? b.splice(b.delegateCount++, 0, T) : b.push(T),
                      (o.event.global[A] = !0));
            },
            remove: function (e, t, n, r, a) {
              var l,
                u,
                h,
                d,
                v,
                T,
                x,
                b,
                A,
                z,
                Y,
                F = j.hasData(e) && j.get(e);
              if (!(!F || !(d = F.events))) {
                for (t = (t || "").match(Te) || [""], v = t.length; v--; ) {
                  if (
                    ((h = ai.exec(t[v]) || []),
                    (A = Y = h[1]),
                    (z = (h[2] || "").split(".").sort()),
                    !A)
                  ) {
                    for (A in d) o.event.remove(e, A + t[v], n, r, !0);
                    continue;
                  }
                  for (
                    x = o.event.special[A] || {},
                      A = (r ? x.delegateType : x.bindType) || A,
                      b = d[A] || [],
                      h =
                        h[2] &&
                        new RegExp(
                          "(^|\\.)" + z.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      u = l = b.length;
                    l--;

                  )
                    (T = b[l]),
                      (a || Y === T.origType) &&
                        (!n || n.guid === T.guid) &&
                        (!h || h.test(T.namespace)) &&
                        (!r ||
                          r === T.selector ||
                          (r === "**" && T.selector)) &&
                        (b.splice(l, 1),
                        T.selector && b.delegateCount--,
                        x.remove && x.remove.call(e, T));
                  u &&
                    !b.length &&
                    ((!x.teardown || x.teardown.call(e, z, F.handle) === !1) &&
                      o.removeEvent(e, A, F.handle),
                    delete d[A]);
                }
                o.isEmptyObject(d) && j.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                a,
                l,
                u,
                h = new Array(arguments.length),
                d = o.event.fix(e),
                v =
                  (j.get(this, "events") || Object.create(null))[d.type] || [],
                T = o.event.special[d.type] || {};
              for (h[0] = d, t = 1; t < arguments.length; t++)
                h[t] = arguments[t];
              if (
                ((d.delegateTarget = this),
                !(T.preDispatch && T.preDispatch.call(this, d) === !1))
              ) {
                for (
                  u = o.event.handlers.call(this, d, v), t = 0;
                  (a = u[t++]) && !d.isPropagationStopped();

                )
                  for (
                    d.currentTarget = a.elem, n = 0;
                    (l = a.handlers[n++]) && !d.isImmediatePropagationStopped();

                  )
                    (!d.rnamespace ||
                      l.namespace === !1 ||
                      d.rnamespace.test(l.namespace)) &&
                      ((d.handleObj = l),
                      (d.data = l.data),
                      (r = (
                        (o.event.special[l.origType] || {}).handle || l.handler
                      ).apply(a.elem, h)),
                      r !== void 0 &&
                        (d.result = r) === !1 &&
                        (d.preventDefault(), d.stopPropagation()));
                return T.postDispatch && T.postDispatch.call(this, d), d.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                a,
                l,
                u,
                h = [],
                d = t.delegateCount,
                v = e.target;
              if (d && v.nodeType && !(e.type === "click" && e.button >= 1)) {
                for (; v !== this; v = v.parentNode || this)
                  if (
                    v.nodeType === 1 &&
                    !(e.type === "click" && v.disabled === !0)
                  ) {
                    for (l = [], u = {}, n = 0; n < d; n++)
                      (r = t[n]),
                        (a = r.selector + " "),
                        u[a] === void 0 &&
                          (u[a] = r.needsContext
                            ? o(a, this).index(v) > -1
                            : o.find(a, this, null, [v]).length),
                        u[a] && l.push(r);
                    l.length && h.push({ elem: v, handlers: l });
                  }
              }
              return (
                (v = this),
                d < t.length && h.push({ elem: v, handlers: t.slice(d) }),
                h
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(o.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: W(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (n) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n,
                  });
                },
              });
            },
            fix: function (e) {
              return e[o.expando] ? e : new o.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    it.test(t.type) &&
                      t.click &&
                      Z(t, "input") &&
                      pt(t, "click", !0),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    it.test(t.type) &&
                      t.click &&
                      Z(t, "input") &&
                      pt(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (it.test(t.type) &&
                      t.click &&
                      Z(t, "input") &&
                      j.get(t, "click")) ||
                    Z(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  e.result !== void 0 &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          };
          function pt(e, t, n) {
            if (!n) {
              j.get(e, t) === void 0 && o.event.add(e, t, Ue);
              return;
            }
            j.set(e, t, !1),
              o.event.add(e, t, {
                namespace: !1,
                handler: function (r) {
                  var a,
                    l = j.get(this, t);
                  if (r.isTrigger & 1 && this[t]) {
                    if (l)
                      (o.event.special[t] || {}).delegateType &&
                        r.stopPropagation();
                    else if (
                      ((l = i.call(arguments)),
                      j.set(this, t, l),
                      this[t](),
                      (a = j.get(this, t)),
                      j.set(this, t, !1),
                      l !== a)
                    )
                      return (
                        r.stopImmediatePropagation(), r.preventDefault(), a
                      );
                  } else
                    l &&
                      (j.set(this, t, o.event.trigger(l[0], l.slice(1), this)),
                      r.stopPropagation(),
                      (r.isImmediatePropagationStopped = Ue));
                },
              });
          }
          (o.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
            (o.Event = function (e, t) {
              if (!(this instanceof o.Event)) return new o.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (e.defaultPrevented === void 0 && e.returnValue === !1)
                      ? Ue
                      : Xe),
                  (this.target =
                    e.target && e.target.nodeType === 3
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && o.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[o.expando] = !0);
            }),
            (o.Event.prototype = {
              constructor: o.Event,
              isDefaultPrevented: Xe,
              isPropagationStopped: Xe,
              isImmediatePropagationStopped: Xe,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ue),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ue),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ue),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            o.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              o.event.addProp
            ),
            o.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              function n(r) {
                if (q.documentMode) {
                  var a = j.get(this, "handle"),
                    l = o.event.fix(r);
                  (l.type = r.type === "focusin" ? "focus" : "blur"),
                    (l.isSimulated = !0),
                    a(r),
                    l.target === l.currentTarget && a(l);
                } else o.event.simulate(t, r.target, o.event.fix(r));
              }
              (o.event.special[e] = {
                setup: function () {
                  var r;
                  if ((pt(this, e, !0), q.documentMode))
                    (r = j.get(this, t)),
                      r || this.addEventListener(t, n),
                      j.set(this, t, (r || 0) + 1);
                  else return !1;
                },
                trigger: function () {
                  return pt(this, e), !0;
                },
                teardown: function () {
                  var r;
                  if (q.documentMode)
                    (r = j.get(this, t) - 1),
                      r
                        ? j.set(this, t, r)
                        : (this.removeEventListener(t, n), j.remove(this, t));
                  else return !1;
                },
                _default: function (r) {
                  return j.get(r.target, e);
                },
                delegateType: t,
              }),
                (o.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      a = q.documentMode ? this : r,
                      l = j.get(a, t);
                    l ||
                      (q.documentMode
                        ? this.addEventListener(t, n)
                        : r.addEventListener(e, n, !0)),
                      j.set(a, t, (l || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      a = q.documentMode ? this : r,
                      l = j.get(a, t) - 1;
                    l
                      ? j.set(a, t, l)
                      : (q.documentMode
                          ? this.removeEventListener(t, n)
                          : r.removeEventListener(e, n, !0),
                        j.remove(a, t));
                  },
                });
            }),
            o.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                o.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (n) {
                    var r,
                      a = this,
                      l = n.relatedTarget,
                      u = n.handleObj;
                    return (
                      (!l || (l !== a && !o.contains(a, l))) &&
                        ((n.type = u.origType),
                        (r = u.handler.apply(this, arguments)),
                        (n.type = t)),
                      r
                    );
                  },
                };
              }
            ),
            o.fn.extend({
              on: function (e, t, n, r) {
                return Et(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Et(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, a;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    o(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if (typeof e == "object") {
                  for (a in e) this.off(a, t, e[a]);
                  return this;
                }
                return (
                  (t === !1 || typeof t == "function") &&
                    ((n = t), (t = void 0)),
                  n === !1 && (n = Xe),
                  this.each(function () {
                    o.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var tn = /<script|<style|<link/i,
            nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rn = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function li(e, t) {
            return (
              (Z(e, "table") &&
                Z(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
                o(e).children("tbody")[0]) ||
              e
            );
          }
          function sn(e) {
            return (
              (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e
            );
          }
          function on(e) {
            return (
              (e.type || "").slice(0, 5) === "true/"
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function ui(e, t) {
            var n, r, a, l, u, h, d;
            if (t.nodeType === 1) {
              if (j.hasData(e) && ((l = j.get(e)), (d = l.events), d)) {
                j.remove(t, "handle events");
                for (a in d)
                  for (n = 0, r = d[a].length; n < r; n++)
                    o.event.add(t, a, d[a][n]);
              }
              le.hasData(e) &&
                ((u = le.access(e)), (h = o.extend({}, u)), le.set(t, h));
            }
          }
          function an(e, t) {
            var n = t.nodeName.toLowerCase();
            n === "input" && it.test(e.type)
              ? (t.checked = e.checked)
              : (n === "input" || n === "textarea") &&
                (t.defaultValue = e.defaultValue);
          }
          function Ve(e, t, n, r) {
            t = s(t);
            var a,
              l,
              u,
              h,
              d,
              v,
              T = 0,
              x = e.length,
              b = x - 1,
              A = t[0],
              z = W(A);
            if (
              z ||
              (x > 1 && typeof A == "string" && !N.checkClone && nn.test(A))
            )
              return e.each(function (Y) {
                var F = e.eq(Y);
                z && (t[0] = A.call(this, Y, F.html())), Ve(F, t, n, r);
              });
            if (
              x &&
              ((a = oi(t, e[0].ownerDocument, !1, e, r)),
              (l = a.firstChild),
              a.childNodes.length === 1 && (a = l),
              l || r)
            ) {
              for (u = o.map(ue(a, "script"), sn), h = u.length; T < x; T++)
                (d = a),
                  T !== b &&
                    ((d = o.clone(d, !0, !0)),
                    h && o.merge(u, ue(d, "script"))),
                  n.call(e[T], d, T);
              if (h)
                for (
                  v = u[u.length - 1].ownerDocument, o.map(u, on), T = 0;
                  T < h;
                  T++
                )
                  (d = u[T]),
                    si.test(d.type || "") &&
                      !j.access(d, "globalEval") &&
                      o.contains(v, d) &&
                      (d.src && (d.type || "").toLowerCase() !== "module"
                        ? o._evalUrl &&
                          !d.noModule &&
                          o._evalUrl(
                            d.src,
                            { nonce: d.nonce || d.getAttribute("nonce") },
                            v
                          )
                        : Ke(d.textContent.replace(rn, ""), d, v));
            }
            return e;
          }
          function fi(e, t, n) {
            for (
              var r, a = t ? o.filter(t, e) : e, l = 0;
              (r = a[l]) != null;
              l++
            )
              !n && r.nodeType === 1 && o.cleanData(ue(r)),
                r.parentNode &&
                  (n && Fe(r) && At(ue(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          o.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                a,
                l,
                u,
                h = e.cloneNode(!0),
                d = Fe(e);
              if (
                !N.noCloneChecked &&
                (e.nodeType === 1 || e.nodeType === 11) &&
                !o.isXMLDoc(e)
              )
                for (u = ue(h), l = ue(e), r = 0, a = l.length; r < a; r++)
                  an(l[r], u[r]);
              if (t)
                if (n)
                  for (
                    l = l || ue(e), u = u || ue(h), r = 0, a = l.length;
                    r < a;
                    r++
                  )
                    ui(l[r], u[r]);
                else ui(e, h);
              return (
                (u = ue(h, "script")),
                u.length > 0 && At(u, !d && ue(e, "script")),
                h
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, a = o.event.special, l = 0;
                (n = e[l]) !== void 0;
                l++
              )
                if (Ze(n)) {
                  if ((t = n[j.expando])) {
                    if (t.events)
                      for (r in t.events)
                        a[r]
                          ? o.event.remove(n, r)
                          : o.removeEvent(n, r, t.handle);
                    n[j.expando] = void 0;
                  }
                  n[le.expando] && (n[le.expando] = void 0);
                }
            },
          }),
            o.fn.extend({
              detach: function (e) {
                return fi(this, e, !0);
              },
              remove: function (e) {
                return fi(this, e);
              },
              text: function (e) {
                return $e(
                  this,
                  function (t) {
                    return t === void 0
                      ? o.text(this)
                      : this.empty().each(function () {
                          (this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9) &&
                            (this.textContent = t);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Ve(this, arguments, function (e) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    var t = li(this, e);
                    t.appendChild(e);
                  }
                });
              },
              prepend: function () {
                return Ve(this, arguments, function (e) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    var t = li(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ve(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ve(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; (e = this[t]) != null; t++)
                  e.nodeType === 1 &&
                    (o.cleanData(ue(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = e == null ? !1 : e),
                  (t = t == null ? e : t),
                  this.map(function () {
                    return o.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return $e(
                  this,
                  function (t) {
                    var n = this[0] || {},
                      r = 0,
                      a = this.length;
                    if (t === void 0 && n.nodeType === 1) return n.innerHTML;
                    if (
                      typeof t == "string" &&
                      !tn.test(t) &&
                      !pe[(ri.exec(t) || ["", ""])[1].toLowerCase()]
                    ) {
                      t = o.htmlPrefilter(t);
                      try {
                        for (; r < a; r++)
                          (n = this[r] || {}),
                            n.nodeType === 1 &&
                              (o.cleanData(ue(n, !1)), (n.innerHTML = t));
                        n = 0;
                      } catch (l) {}
                    }
                    n && this.empty().append(t);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Ve(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    o.inArray(this, e) < 0 &&
                      (o.cleanData(ue(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            o.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                o.fn[e] = function (n) {
                  for (
                    var r, a = [], l = o(n), u = l.length - 1, h = 0;
                    h <= u;
                    h++
                  )
                    (r = h === u ? this : this.clone(!0)),
                      o(l[h])[t](r),
                      c.apply(a, r.get());
                  return this.pushStack(a);
                };
              }
            );
          var Dt = new RegExp("^(" + ti + ")(?!px)[a-z%]+$", "i"),
            $t = /^--/,
            ht = function (e) {
              var t = e.ownerDocument.defaultView;
              return (!t || !t.opener) && (t = M), t.getComputedStyle(e);
            },
            di = function (e, t, n) {
              var r,
                a,
                l = {};
              for (a in t) (l[a] = e.style[a]), (e.style[a] = t[a]);
              r = n.call(e);
              for (a in t) e.style[a] = l[a];
              return r;
            },
            ln = new RegExp(Oe.join("|"), "i");
          (function () {
            function e() {
              if (v) {
                (d.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (v.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  Le.appendChild(d).appendChild(v);
                var T = M.getComputedStyle(v);
                (n = T.top !== "1%"),
                  (h = t(T.marginLeft) === 12),
                  (v.style.right = "60%"),
                  (l = t(T.right) === 36),
                  (r = t(T.width) === 36),
                  (v.style.position = "absolute"),
                  (a = t(v.offsetWidth / 3) === 12),
                  Le.removeChild(d),
                  (v = null);
              }
            }
            function t(T) {
              return Math.round(parseFloat(T));
            }
            var n,
              r,
              a,
              l,
              u,
              h,
              d = q.createElement("div"),
              v = q.createElement("div");
            v.style &&
              ((v.style.backgroundClip = "content-box"),
              (v.cloneNode(!0).style.backgroundClip = ""),
              (N.clearCloneStyle = v.style.backgroundClip === "content-box"),
              o.extend(N, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), l;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), h;
                },
                scrollboxSize: function () {
                  return e(), a;
                },
                reliableTrDimensions: function () {
                  var T, x, b, A;
                  return (
                    u == null &&
                      ((T = q.createElement("table")),
                      (x = q.createElement("tr")),
                      (b = q.createElement("div")),
                      (T.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (x.style.cssText = "border:1px solid"),
                      (x.style.height = "1px"),
                      (b.style.height = "9px"),
                      (b.style.display = "block"),
                      Le.appendChild(T).appendChild(x).appendChild(b),
                      (A = M.getComputedStyle(x)),
                      (u =
                        parseInt(A.height, 10) +
                          parseInt(A.borderTopWidth, 10) +
                          parseInt(A.borderBottomWidth, 10) ===
                        x.offsetHeight),
                      Le.removeChild(T)),
                    u
                  );
                },
              }));
          })();
          function nt(e, t, n) {
            var r,
              a,
              l,
              u,
              h = $t.test(t),
              d = e.style;
            return (
              (n = n || ht(e)),
              n &&
                ((u = n.getPropertyValue(t) || n[t]),
                h && u && (u = u.replace(Je, "$1") || void 0),
                u === "" && !Fe(e) && (u = o.style(e, t)),
                !N.pixelBoxStyles() &&
                  Dt.test(u) &&
                  ln.test(t) &&
                  ((r = d.width),
                  (a = d.minWidth),
                  (l = d.maxWidth),
                  (d.minWidth = d.maxWidth = d.width = u),
                  (u = n.width),
                  (d.width = r),
                  (d.minWidth = a),
                  (d.maxWidth = l))),
              u !== void 0 ? u + "" : u
            );
          }
          function ci(e, t) {
            return {
              get: function () {
                if (e()) {
                  delete this.get;
                  return;
                }
                return (this.get = t).apply(this, arguments);
              },
            };
          }
          var pi = ["Webkit", "Moz", "ms"],
            hi = q.createElement("div").style,
            gi = {};
          function un(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = pi.length; n--; )
              if (((e = pi[n] + t), e in hi)) return e;
          }
          function Ot(e) {
            var t = o.cssProps[e] || gi[e];
            return t || (e in hi ? e : (gi[e] = un(e) || e));
          }
          var fn = /^(none|table(?!-c[ea]).+)/,
            dn = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            yi = { letterSpacing: "0", fontWeight: "400" };
          function vi(e, t, n) {
            var r = tt.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function _t(e, t, n, r, a, l) {
            var u = t === "width" ? 1 : 0,
              h = 0,
              d = 0,
              v = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; u < 4; u += 2)
              n === "margin" && (v += o.css(e, n + Oe[u], !0, a)),
                r
                  ? (n === "content" &&
                      (d -= o.css(e, "padding" + Oe[u], !0, a)),
                    n !== "margin" &&
                      (d -= o.css(e, "border" + Oe[u] + "Width", !0, a)))
                  : ((d += o.css(e, "padding" + Oe[u], !0, a)),
                    n !== "padding"
                      ? (d += o.css(e, "border" + Oe[u] + "Width", !0, a))
                      : (h += o.css(e, "border" + Oe[u] + "Width", !0, a)));
            return (
              !r &&
                l >= 0 &&
                (d +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        l -
                        d -
                        h -
                        0.5
                    )
                  ) || 0),
              d + v
            );
          }
          function mi(e, t, n) {
            var r = ht(e),
              a = !N.boxSizingReliable() || n,
              l = a && o.css(e, "boxSizing", !1, r) === "border-box",
              u = l,
              h = nt(e, t, r),
              d = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Dt.test(h)) {
              if (!n) return h;
              h = "auto";
            }
            return (
              ((!N.boxSizingReliable() && l) ||
                (!N.reliableTrDimensions() && Z(e, "tr")) ||
                h === "auto" ||
                (!parseFloat(h) && o.css(e, "display", !1, r) === "inline")) &&
                e.getClientRects().length &&
                ((l = o.css(e, "boxSizing", !1, r) === "border-box"),
                (u = d in e),
                u && (h = e[d])),
              (h = parseFloat(h) || 0),
              h + _t(e, t, n || (l ? "border" : "content"), u, r, h) + "px"
            );
          }
          o.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = nt(e, "opacity");
                    return n === "" ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
                var a,
                  l,
                  u,
                  h = Se(t),
                  d = $t.test(t),
                  v = e.style;
                if (
                  (d || (t = Ot(h)),
                  (u = o.cssHooks[t] || o.cssHooks[h]),
                  n !== void 0)
                ) {
                  if (
                    ((l = typeof n),
                    l === "string" &&
                      (a = tt.exec(n)) &&
                      a[1] &&
                      ((n = ii(e, t, a)), (l = "number")),
                    n == null || n !== n)
                  )
                    return;
                  l === "number" &&
                    !d &&
                    (n += (a && a[3]) || (o.cssNumber[h] ? "" : "px")),
                    !N.clearCloneStyle &&
                      n === "" &&
                      t.indexOf("background") === 0 &&
                      (v[t] = "inherit"),
                    (!u || !("set" in u) || (n = u.set(e, n, r)) !== void 0) &&
                      (d ? v.setProperty(t, n) : (v[t] = n));
                } else
                  return u && "get" in u && (a = u.get(e, !1, r)) !== void 0
                    ? a
                    : v[t];
              }
            },
            css: function (e, t, n, r) {
              var a,
                l,
                u,
                h = Se(t),
                d = $t.test(t);
              return (
                d || (t = Ot(h)),
                (u = o.cssHooks[t] || o.cssHooks[h]),
                u && "get" in u && (a = u.get(e, !0, n)),
                a === void 0 && (a = nt(e, t, r)),
                a === "normal" && t in yi && (a = yi[t]),
                n === "" || n
                  ? ((l = parseFloat(a)), n === !0 || isFinite(l) ? l || 0 : a)
                  : a
              );
            },
          }),
            o.each(["height", "width"], function (e, t) {
              o.cssHooks[t] = {
                get: function (n, r, a) {
                  if (r)
                    return fn.test(o.css(n, "display")) &&
                      (!n.getClientRects().length ||
                        !n.getBoundingClientRect().width)
                      ? di(n, dn, function () {
                          return mi(n, t, a);
                        })
                      : mi(n, t, a);
                },
                set: function (n, r, a) {
                  var l,
                    u = ht(n),
                    h = !N.scrollboxSize() && u.position === "absolute",
                    d = h || a,
                    v = d && o.css(n, "boxSizing", !1, u) === "border-box",
                    T = a ? _t(n, t, a, v, u) : 0;
                  return (
                    v &&
                      h &&
                      (T -= Math.ceil(
                        n["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(u[t]) -
                          _t(n, t, "border", !1, u) -
                          0.5
                      )),
                    T &&
                      (l = tt.exec(r)) &&
                      (l[3] || "px") !== "px" &&
                      ((n.style[t] = r), (r = o.css(n, t))),
                    vi(n, r, T)
                  );
                },
              };
            }),
            (o.cssHooks.marginLeft = ci(N.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(nt(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      di(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            o.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (o.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        a = {},
                        l = typeof n == "string" ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      a[e + Oe[r] + t] = l[r] || l[r - 2] || l[0];
                    return a;
                  },
                }),
                  e !== "margin" && (o.cssHooks[e + t].set = vi);
              }
            ),
            o.fn.extend({
              css: function (e, t) {
                return $e(
                  this,
                  function (n, r, a) {
                    var l,
                      u,
                      h = {},
                      d = 0;
                    if (Array.isArray(r)) {
                      for (l = ht(n), u = r.length; d < u; d++)
                        h[r[d]] = o.css(n, r[d], !1, l);
                      return h;
                    }
                    return a !== void 0 ? o.style(n, r, a) : o.css(n, r);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            });
          function fe(e, t, n, r, a) {
            return new fe.prototype.init(e, t, n, r, a);
          }
          (o.Tween = fe),
            (fe.prototype = {
              constructor: fe,
              init: function (e, t, n, r, a, l) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = a || o.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = l || (o.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = fe.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : fe.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = fe.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        o.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : fe.propHooks._default.set(this),
                  this
                );
              },
            }),
            (fe.prototype.init.prototype = fe.prototype),
            (fe.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return e.elem.nodeType !== 1 ||
                    (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
                    ? e.elem[e.prop]
                    : ((t = o.css(e.elem, e.prop, "")),
                      !t || t === "auto" ? 0 : t);
                },
                set: function (e) {
                  o.fx.step[e.prop]
                    ? o.fx.step[e.prop](e)
                    : e.elem.nodeType === 1 &&
                      (o.cssHooks[e.prop] || e.elem.style[Ot(e.prop)] != null)
                    ? o.style(e.elem, e.prop, e.now + e.unit)
                    : (e.elem[e.prop] = e.now);
                },
              },
            }),
            (fe.propHooks.scrollTop = fe.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (o.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (o.fx = fe.prototype.init),
            (o.fx.step = {});
          var Ye,
            gt,
            cn = /^(?:toggle|show|hide)$/,
            pn = /queueHooks$/;
          function Ht() {
            gt &&
              (q.hidden === !1 && M.requestAnimationFrame
                ? M.requestAnimationFrame(Ht)
                : M.setTimeout(Ht, o.fx.interval),
              o.fx.tick());
          }
          function bi() {
            return (
              M.setTimeout(function () {
                Ye = void 0;
              }),
              (Ye = Date.now())
            );
          }
          function yt(e, t) {
            var n,
              r = 0,
              a = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              (n = Oe[r]), (a["margin" + n] = a["padding" + n] = e);
            return t && (a.opacity = a.width = e), a;
          }
          function wi(e, t, n) {
            for (
              var r,
                a = (ve.tweeners[t] || []).concat(ve.tweeners["*"]),
                l = 0,
                u = a.length;
              l < u;
              l++
            )
              if ((r = a[l].call(n, t, e))) return r;
          }
          function hn(e, t, n) {
            var r,
              a,
              l,
              u,
              h,
              d,
              v,
              T,
              x = "width" in t || "height" in t,
              b = this,
              A = {},
              z = e.style,
              Y = e.nodeType && ct(e),
              F = j.get(e, "fxshow");
            n.queue ||
              ((u = o._queueHooks(e, "fx")),
              u.unqueued == null &&
                ((u.unqueued = 0),
                (h = u.empty.fire),
                (u.empty.fire = function () {
                  u.unqueued || h();
                })),
              u.unqueued++,
              b.always(function () {
                b.always(function () {
                  u.unqueued--, o.queue(e, "fx").length || u.empty.fire();
                });
              }));
            for (r in t)
              if (((a = t[r]), cn.test(a))) {
                if (
                  (delete t[r],
                  (l = l || a === "toggle"),
                  a === (Y ? "hide" : "show"))
                )
                  if (a === "show" && F && F[r] !== void 0) Y = !0;
                  else continue;
                A[r] = (F && F[r]) || o.style(e, r);
              }
            if (((d = !o.isEmptyObject(t)), !(!d && o.isEmptyObject(A)))) {
              x &&
                e.nodeType === 1 &&
                ((n.overflow = [z.overflow, z.overflowX, z.overflowY]),
                (v = F && F.display),
                v == null && (v = j.get(e, "display")),
                (T = o.css(e, "display")),
                T === "none" &&
                  (v
                    ? (T = v)
                    : (Be([e], !0),
                      (v = e.style.display || v),
                      (T = o.css(e, "display")),
                      Be([e]))),
                (T === "inline" || (T === "inline-block" && v != null)) &&
                  o.css(e, "float") === "none" &&
                  (d ||
                    (b.done(function () {
                      z.display = v;
                    }),
                    v == null &&
                      ((T = z.display), (v = T === "none" ? "" : T))),
                  (z.display = "inline-block"))),
                n.overflow &&
                  ((z.overflow = "hidden"),
                  b.always(function () {
                    (z.overflow = n.overflow[0]),
                      (z.overflowX = n.overflow[1]),
                      (z.overflowY = n.overflow[2]);
                  })),
                (d = !1);
              for (r in A)
                d ||
                  (F
                    ? "hidden" in F && (Y = F.hidden)
                    : (F = j.access(e, "fxshow", { display: v })),
                  l && (F.hidden = !Y),
                  Y && Be([e], !0),
                  b.done(function () {
                    Y || Be([e]), j.remove(e, "fxshow");
                    for (r in A) o.style(e, r, A[r]);
                  })),
                  (d = wi(Y ? F[r] : 0, r, b)),
                  r in F ||
                    ((F[r] = d.start), Y && ((d.end = d.start), (d.start = 0)));
            }
          }
          function gn(e, t) {
            var n, r, a, l, u;
            for (n in e)
              if (
                ((r = Se(n)),
                (a = t[r]),
                (l = e[n]),
                Array.isArray(l) && ((a = l[1]), (l = e[n] = l[0])),
                n !== r && ((e[r] = l), delete e[n]),
                (u = o.cssHooks[r]),
                u && "expand" in u)
              ) {
                (l = u.expand(l)), delete e[r];
                for (n in l) n in e || ((e[n] = l[n]), (t[n] = a));
              } else t[r] = a;
          }
          function ve(e, t, n) {
            var r,
              a,
              l = 0,
              u = ve.prefilters.length,
              h = o.Deferred().always(function () {
                delete d.elem;
              }),
              d = function () {
                if (a) return !1;
                for (
                  var x = Ye || bi(),
                    b = Math.max(0, v.startTime + v.duration - x),
                    A = b / v.duration || 0,
                    z = 1 - A,
                    Y = 0,
                    F = v.tweens.length;
                  Y < F;
                  Y++
                )
                  v.tweens[Y].run(z);
                return (
                  h.notifyWith(e, [v, z, b]),
                  z < 1 && F
                    ? b
                    : (F || h.notifyWith(e, [v, 1, 0]),
                      h.resolveWith(e, [v]),
                      !1)
                );
              },
              v = h.promise({
                elem: e,
                props: o.extend({}, t),
                opts: o.extend(
                  !0,
                  { specialEasing: {}, easing: o.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: Ye || bi(),
                duration: n.duration,
                tweens: [],
                createTween: function (x, b) {
                  var A = o.Tween(
                    e,
                    v.opts,
                    x,
                    b,
                    v.opts.specialEasing[x] || v.opts.easing
                  );
                  return v.tweens.push(A), A;
                },
                stop: function (x) {
                  var b = 0,
                    A = x ? v.tweens.length : 0;
                  if (a) return this;
                  for (a = !0; b < A; b++) v.tweens[b].run(1);
                  return (
                    x
                      ? (h.notifyWith(e, [v, 1, 0]), h.resolveWith(e, [v, x]))
                      : h.rejectWith(e, [v, x]),
                    this
                  );
                },
              }),
              T = v.props;
            for (gn(T, v.opts.specialEasing); l < u; l++)
              if (((r = ve.prefilters[l].call(v, e, T, v.opts)), r))
                return (
                  W(r.stop) &&
                    (o._queueHooks(v.elem, v.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              o.map(T, wi, v),
              W(v.opts.start) && v.opts.start.call(e, v),
              v
                .progress(v.opts.progress)
                .done(v.opts.done, v.opts.complete)
                .fail(v.opts.fail)
                .always(v.opts.always),
              o.fx.timer(
                o.extend(d, { elem: e, anim: v, queue: v.opts.queue })
              ),
              v
            );
          }
          (o.Animation = o.extend(ve, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ii(n.elem, e, tt.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              W(e) ? ((t = e), (e = ["*"])) : (e = e.match(Te));
              for (var n, r = 0, a = e.length; r < a; r++)
                (n = e[r]),
                  (ve.tweeners[n] = ve.tweeners[n] || []),
                  ve.tweeners[n].unshift(t);
            },
            prefilters: [hn],
            prefilter: function (e, t) {
              t ? ve.prefilters.unshift(e) : ve.prefilters.push(e);
            },
          })),
            (o.speed = function (e, t, n) {
              var r =
                e && typeof e == "object"
                  ? o.extend({}, e)
                  : {
                      complete: n || (!n && t) || (W(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !W(t) && t),
                    };
              return (
                o.fx.off
                  ? (r.duration = 0)
                  : typeof r.duration != "number" &&
                    (r.duration in o.fx.speeds
                      ? (r.duration = o.fx.speeds[r.duration])
                      : (r.duration = o.fx.speeds._default)),
                (r.queue == null || r.queue === !0) && (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  W(r.old) && r.old.call(this),
                    r.queue && o.dequeue(this, r.queue);
                }),
                r
              );
            }),
            o.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ct)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var a = o.isEmptyObject(e),
                  l = o.speed(t, n, r),
                  u = function () {
                    var h = ve(this, o.extend({}, e), l);
                    (a || j.get(this, "finish")) && h.stop(!0);
                  };
                return (
                  (u.finish = u),
                  a || l.queue === !1 ? this.each(u) : this.queue(l.queue, u)
                );
              },
              stop: function (e, t, n) {
                var r = function (a) {
                  var l = a.stop;
                  delete a.stop, l(n);
                };
                return (
                  typeof e != "string" && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var a = !0,
                      l = e != null && e + "queueHooks",
                      u = o.timers,
                      h = j.get(this);
                    if (l) h[l] && h[l].stop && r(h[l]);
                    else
                      for (l in h) h[l] && h[l].stop && pn.test(l) && r(h[l]);
                    for (l = u.length; l--; )
                      u[l].elem === this &&
                        (e == null || u[l].queue === e) &&
                        (u[l].anim.stop(n), (a = !1), u.splice(l, 1));
                    (a || !n) && o.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  e !== !1 && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = j.get(this),
                      r = n[e + "queue"],
                      a = n[e + "queueHooks"],
                      l = o.timers,
                      u = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        o.queue(this, e, []),
                        a && a.stop && a.stop.call(this, !0),
                        t = l.length;
                      t--;

                    )
                      l[t].elem === this &&
                        l[t].queue === e &&
                        (l[t].anim.stop(!0), l.splice(t, 1));
                    for (t = 0; t < u; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            o.each(["toggle", "show", "hide"], function (e, t) {
              var n = o.fn[t];
              o.fn[t] = function (r, a, l) {
                return r == null || typeof r == "boolean"
                  ? n.apply(this, arguments)
                  : this.animate(yt(t, !0), r, a, l);
              };
            }),
            o.each(
              {
                slideDown: yt("show"),
                slideUp: yt("hide"),
                slideToggle: yt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                o.fn[e] = function (n, r, a) {
                  return this.animate(t, n, r, a);
                };
              }
            ),
            (o.timers = []),
            (o.fx.tick = function () {
              var e,
                t = 0,
                n = o.timers;
              for (Ye = Date.now(); t < n.length; t++)
                (e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
              n.length || o.fx.stop(), (Ye = void 0);
            }),
            (o.fx.timer = function (e) {
              o.timers.push(e), o.fx.start();
            }),
            (o.fx.interval = 13),
            (o.fx.start = function () {
              gt || ((gt = !0), Ht());
            }),
            (o.fx.stop = function () {
              gt = null;
            }),
            (o.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (o.fn.delay = function (e, t) {
              return (
                (e = (o.fx && o.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (n, r) {
                  var a = M.setTimeout(n, e);
                  r.stop = function () {
                    M.clearTimeout(a);
                  };
                })
              );
            }),
            (function () {
              var e = q.createElement("input"),
                t = q.createElement("select"),
                n = t.appendChild(q.createElement("option"));
              (e.type = "checkbox"),
                (N.checkOn = e.value !== ""),
                (N.optSelected = n.selected),
                (e = q.createElement("input")),
                (e.value = "t"),
                (e.type = "radio"),
                (N.radioValue = e.value === "t");
            })();
          var Ti,
            rt = o.expr.attrHandle;
          o.fn.extend({
            attr: function (e, t) {
              return $e(this, o.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                o.removeAttr(this, e);
              });
            },
          }),
            o.extend({
              attr: function (e, t, n) {
                var r,
                  a,
                  l = e.nodeType;
                if (!(l === 3 || l === 8 || l === 2)) {
                  if (typeof e.getAttribute == "undefined")
                    return o.prop(e, t, n);
                  if (
                    ((l !== 1 || !o.isXMLDoc(e)) &&
                      (a =
                        o.attrHooks[t.toLowerCase()] ||
                        (o.expr.match.bool.test(t) ? Ti : void 0)),
                    n !== void 0)
                  ) {
                    if (n === null) {
                      o.removeAttr(e, t);
                      return;
                    }
                    return a && "set" in a && (r = a.set(e, n, t)) !== void 0
                      ? r
                      : (e.setAttribute(t, n + ""), n);
                  }
                  return a && "get" in a && (r = a.get(e, t)) !== null
                    ? r
                    : ((r = o.find.attr(e, t)), r == null ? void 0 : r);
                }
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!N.radioValue && t === "radio" && Z(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  a = t && t.match(Te);
                if (a && e.nodeType === 1)
                  for (; (n = a[r++]); ) e.removeAttribute(n);
              },
            }),
            (Ti = {
              set: function (e, t, n) {
                return t === !1 ? o.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            o.each(o.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = rt[t] || o.find.attr;
              rt[t] = function (r, a, l) {
                var u,
                  h,
                  d = a.toLowerCase();
                return (
                  l ||
                    ((h = rt[d]),
                    (rt[d] = u),
                    (u = n(r, a, l) != null ? d : null),
                    (rt[d] = h)),
                  u
                );
              };
            });
          var yn = /^(?:input|select|textarea|button)$/i,
            vn = /^(?:a|area)$/i;
          o.fn.extend({
            prop: function (e, t) {
              return $e(this, o.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[o.propFix[e] || e];
              });
            },
          }),
            o.extend({
              prop: function (e, t, n) {
                var r,
                  a,
                  l = e.nodeType;
                if (!(l === 3 || l === 8 || l === 2))
                  return (
                    (l !== 1 || !o.isXMLDoc(e)) &&
                      ((t = o.propFix[t] || t), (a = o.propHooks[t])),
                    n !== void 0
                      ? a && "set" in a && (r = a.set(e, n, t)) !== void 0
                        ? r
                        : (e[t] = n)
                      : a && "get" in a && (r = a.get(e, t)) !== null
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = o.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : yn.test(e.nodeName) || (vn.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            N.optSelected ||
              (o.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            o.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                o.propFix[this.toLowerCase()] = this;
              }
            );
          function Me(e) {
            var t = e.match(Te) || [];
            return t.join(" ");
          }
          function qe(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function Pt(e) {
            return Array.isArray(e)
              ? e
              : typeof e == "string"
              ? e.match(Te) || []
              : [];
          }
          o.fn.extend({
            addClass: function (e) {
              var t, n, r, a, l, u;
              return W(e)
                ? this.each(function (h) {
                    o(this).addClass(e.call(this, h, qe(this)));
                  })
                : ((t = Pt(e)),
                  t.length
                    ? this.each(function () {
                        if (
                          ((r = qe(this)),
                          (n = this.nodeType === 1 && " " + Me(r) + " "),
                          n)
                        ) {
                          for (l = 0; l < t.length; l++)
                            (a = t[l]),
                              n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                          (u = Me(n)), r !== u && this.setAttribute("class", u);
                        }
                      })
                    : this);
            },
            removeClass: function (e) {
              var t, n, r, a, l, u;
              return W(e)
                ? this.each(function (h) {
                    o(this).removeClass(e.call(this, h, qe(this)));
                  })
                : arguments.length
                ? ((t = Pt(e)),
                  t.length
                    ? this.each(function () {
                        if (
                          ((r = qe(this)),
                          (n = this.nodeType === 1 && " " + Me(r) + " "),
                          n)
                        ) {
                          for (l = 0; l < t.length; l++)
                            for (a = t[l]; n.indexOf(" " + a + " ") > -1; )
                              n = n.replace(" " + a + " ", " ");
                          (u = Me(n)), r !== u && this.setAttribute("class", u);
                        }
                      })
                    : this)
                : this.attr("class", "");
            },
            toggleClass: function (e, t) {
              var n,
                r,
                a,
                l,
                u = typeof e,
                h = u === "string" || Array.isArray(e);
              return W(e)
                ? this.each(function (d) {
                    o(this).toggleClass(e.call(this, d, qe(this), t), t);
                  })
                : typeof t == "boolean" && h
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : ((n = Pt(e)),
                  this.each(function () {
                    if (h)
                      for (l = o(this), a = 0; a < n.length; a++)
                        (r = n[a]),
                          l.hasClass(r) ? l.removeClass(r) : l.addClass(r);
                    else
                      (e === void 0 || u === "boolean") &&
                        ((r = qe(this)),
                        r && j.set(this, "__className__", r),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            r || e === !1
                              ? ""
                              : j.get(this, "__className__") || ""
                          ));
                  }));
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); )
                if (n.nodeType === 1 && (" " + Me(qe(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
          var mn = /\r/g;
          o.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                a = this[0];
              return arguments.length
                ? ((r = W(e)),
                  this.each(function (l) {
                    var u;
                    this.nodeType === 1 &&
                      (r ? (u = e.call(this, l, o(this).val())) : (u = e),
                      u == null
                        ? (u = "")
                        : typeof u == "number"
                        ? (u += "")
                        : Array.isArray(u) &&
                          (u = o.map(u, function (h) {
                            return h == null ? "" : h + "";
                          })),
                      (t =
                        o.valHooks[this.type] ||
                        o.valHooks[this.nodeName.toLowerCase()]),
                      (!t ||
                        !("set" in t) ||
                        t.set(this, u, "value") === void 0) &&
                        (this.value = u));
                  }))
                : a
                ? ((t =
                    o.valHooks[a.type] || o.valHooks[a.nodeName.toLowerCase()]),
                  t && "get" in t && (n = t.get(a, "value")) !== void 0
                    ? n
                    : ((n = a.value),
                      typeof n == "string"
                        ? n.replace(mn, "")
                        : n == null
                        ? ""
                        : n))
                : void 0;
            },
          }),
            o.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = o.find.attr(e, "value");
                    return t != null ? t : Me(o.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      a = e.options,
                      l = e.selectedIndex,
                      u = e.type === "select-one",
                      h = u ? null : [],
                      d = u ? l + 1 : a.length;
                    for (l < 0 ? (r = d) : (r = u ? l : 0); r < d; r++)
                      if (
                        ((n = a[r]),
                        (n.selected || r === l) &&
                          !n.disabled &&
                          (!n.parentNode.disabled ||
                            !Z(n.parentNode, "optgroup")))
                      ) {
                        if (((t = o(n).val()), u)) return t;
                        h.push(t);
                      }
                    return h;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, a = e.options, l = o.makeArray(t), u = a.length;
                      u--;

                    )
                      (r = a[u]),
                        (r.selected =
                          o.inArray(o.valHooks.option.get(r), l) > -1) &&
                          (n = !0);
                    return n || (e.selectedIndex = -1), l;
                  },
                },
              },
            }),
            o.each(["radio", "checkbox"], function () {
              (o.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = o.inArray(o(e).val(), t) > -1);
                },
              }),
                N.checkOn ||
                  (o.valHooks[this].get = function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value;
                  });
            });
          var st = M.location,
            Si = { guid: Date.now() },
            jt = /\?/;
          o.parseXML = function (e) {
            var t, n;
            if (!e || typeof e != "string") return null;
            try {
              t = new M.DOMParser().parseFromString(e, "text/xml");
            } catch (r) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (!t || n) &&
                o.error(
                  "Invalid XML: " +
                    (n
                      ? o.map(n.childNodes, function (r) {
                          return r.textContent;
                        }).join(`
`)
                      : e)
                ),
              t
            );
          };
          var ki = /^(?:focusinfocus|focusoutblur)$/,
            xi = function (e) {
              e.stopPropagation();
            };
          o.extend(o.event, {
            trigger: function (e, t, n, r) {
              var a,
                l,
                u,
                h,
                d,
                v,
                T,
                x,
                b = [n || q],
                A = H.call(e, "type") ? e.type : e,
                z = H.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((l = x = u = n = n || q),
                !(n.nodeType === 3 || n.nodeType === 8) &&
                  !ki.test(A + o.event.triggered) &&
                  (A.indexOf(".") > -1 &&
                    ((z = A.split(".")), (A = z.shift()), z.sort()),
                  (d = A.indexOf(":") < 0 && "on" + A),
                  (e = e[o.expando]
                    ? e
                    : new o.Event(A, typeof e == "object" && e)),
                  (e.isTrigger = r ? 2 : 3),
                  (e.namespace = z.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + z.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = t == null ? [e] : o.makeArray(t, [e])),
                  (T = o.event.special[A] || {}),
                  !(!r && T.trigger && T.trigger.apply(n, t) === !1)))
              ) {
                if (!r && !T.noBubble && !oe(n)) {
                  for (
                    h = T.delegateType || A,
                      ki.test(h + A) || (l = l.parentNode);
                    l;
                    l = l.parentNode
                  )
                    b.push(l), (u = l);
                  u === (n.ownerDocument || q) &&
                    b.push(u.defaultView || u.parentWindow || M);
                }
                for (a = 0; (l = b[a++]) && !e.isPropagationStopped(); )
                  (x = l),
                    (e.type = a > 1 ? h : T.bindType || A),
                    (v =
                      (j.get(l, "events") || Object.create(null))[e.type] &&
                      j.get(l, "handle")),
                    v && v.apply(l, t),
                    (v = d && l[d]),
                    v &&
                      v.apply &&
                      Ze(l) &&
                      ((e.result = v.apply(l, t)),
                      e.result === !1 && e.preventDefault());
                return (
                  (e.type = A),
                  !r &&
                    !e.isDefaultPrevented() &&
                    (!T._default || T._default.apply(b.pop(), t) === !1) &&
                    Ze(n) &&
                    d &&
                    W(n[A]) &&
                    !oe(n) &&
                    ((u = n[d]),
                    u && (n[d] = null),
                    (o.event.triggered = A),
                    e.isPropagationStopped() && x.addEventListener(A, xi),
                    n[A](),
                    e.isPropagationStopped() && x.removeEventListener(A, xi),
                    (o.event.triggered = void 0),
                    u && (n[d] = u)),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = o.extend(new o.Event(), n, { type: e, isSimulated: !0 });
              o.event.trigger(r, null, t);
            },
          }),
            o.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  o.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return o.event.trigger(e, t, n, !0);
              },
            });
          var bn = /\[\]$/,
            Ci = /\r?\n/g,
            wn = /^(?:submit|button|image|reset|file)$/i,
            Tn = /^(?:input|select|textarea|keygen)/i;
          function Nt(e, t, n, r) {
            var a;
            if (Array.isArray(t))
              o.each(t, function (l, u) {
                n || bn.test(e)
                  ? r(e, u)
                  : Nt(
                      e +
                        "[" +
                        (typeof u == "object" && u != null ? l : "") +
                        "]",
                      u,
                      n,
                      r
                    );
              });
            else if (!n && we(t) === "object")
              for (a in t) Nt(e + "[" + a + "]", t[a], n, r);
            else r(e, t);
          }
          (o.param = function (e, t) {
            var n,
              r = [],
              a = function (l, u) {
                var h = W(u) ? u() : u;
                r[r.length] =
                  encodeURIComponent(l) +
                  "=" +
                  encodeURIComponent(h == null ? "" : h);
              };
            if (e == null) return "";
            if (Array.isArray(e) || (e.jquery && !o.isPlainObject(e)))
              o.each(e, function () {
                a(this.name, this.value);
              });
            else for (n in e) Nt(n, e[n], t, a);
            return r.join("&");
          }),
            o.fn.extend({
              serialize: function () {
                return o.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = o.prop(this, "elements");
                  return e ? o.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !o(this).is(":disabled") &&
                      Tn.test(this.nodeName) &&
                      !wn.test(e) &&
                      (this.checked || !it.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = o(this).val();
                    return n == null
                      ? null
                      : Array.isArray(n)
                      ? o.map(n, function (r) {
                          return {
                            name: t.name,
                            value: r.replace(
                              Ci,
                              `\r
`
                            ),
                          };
                        })
                      : {
                          name: t.name,
                          value: n.replace(
                            Ci,
                            `\r
`
                          ),
                        };
                  })
                  .get();
              },
            });
          var Sn = /%20/g,
            kn = /#.*$/,
            xn = /([?&])_=[^&]*/,
            Cn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            An = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            En = /^(?:GET|HEAD)$/,
            Dn = /^\/\//,
            Ai = {},
            Lt = {},
            Ei = "*/".concat("*"),
            Mt = q.createElement("a");
          Mt.href = st.href;
          function Di(e) {
            return function (t, n) {
              typeof t != "string" && ((n = t), (t = "*"));
              var r,
                a = 0,
                l = t.toLowerCase().match(Te) || [];
              if (W(n))
                for (; (r = l[a++]); )
                  r[0] === "+"
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function $i(e, t, n, r) {
            var a = {},
              l = e === Lt;
            function u(h) {
              var d;
              return (
                (a[h] = !0),
                o.each(e[h] || [], function (v, T) {
                  var x = T(t, n, r);
                  if (typeof x == "string" && !l && !a[x])
                    return t.dataTypes.unshift(x), u(x), !1;
                  if (l) return !(d = x);
                }),
                d
              );
            }
            return u(t.dataTypes[0]) || (!a["*"] && u("*"));
          }
          function qt(e, t) {
            var n,
              r,
              a = o.ajaxSettings.flatOptions || {};
            for (n in t)
              t[n] !== void 0 && ((a[n] ? e : r || (r = {}))[n] = t[n]);
            return r && o.extend(!0, e, r), e;
          }
          function $n(e, t, n) {
            for (
              var r, a, l, u, h = e.contents, d = e.dataTypes;
              d[0] === "*";

            )
              d.shift(),
                r === void 0 &&
                  (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r) {
              for (a in h)
                if (h[a] && h[a].test(r)) {
                  d.unshift(a);
                  break;
                }
            }
            if (d[0] in n) l = d[0];
            else {
              for (a in n) {
                if (!d[0] || e.converters[a + " " + d[0]]) {
                  l = a;
                  break;
                }
                u || (u = a);
              }
              l = l || u;
            }
            if (l) return l !== d[0] && d.unshift(l), n[l];
          }
          function On(e, t, n, r) {
            var a,
              l,
              u,
              h,
              d,
              v = {},
              T = e.dataTypes.slice();
            if (T[1])
              for (u in e.converters) v[u.toLowerCase()] = e.converters[u];
            for (l = T.shift(); l; )
              if (
                (e.responseFields[l] && (n[e.responseFields[l]] = t),
                !d && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (d = l),
                (l = T.shift()),
                l)
              ) {
                if (l === "*") l = d;
                else if (d !== "*" && d !== l) {
                  if (((u = v[d + " " + l] || v["* " + l]), !u)) {
                    for (a in v)
                      if (
                        ((h = a.split(" ")),
                        h[1] === l &&
                          ((u = v[d + " " + h[0]] || v["* " + h[0]]), u))
                      ) {
                        u === !0
                          ? (u = v[a])
                          : v[a] !== !0 && ((l = h[0]), T.unshift(h[1]));
                        break;
                      }
                  }
                  if (u !== !0)
                    if (u && e.throws) t = u(t);
                    else
                      try {
                        t = u(t);
                      } catch (x) {
                        return {
                          state: "parsererror",
                          error: u ? x : "No conversion from " + d + " to " + l,
                        };
                      }
                }
              }
            return { state: "success", data: t };
          }
          o.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: st.href,
              type: "GET",
              isLocal: An.test(st.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Ei,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": o.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? qt(qt(e, o.ajaxSettings), t) : qt(o.ajaxSettings, e);
            },
            ajaxPrefilter: Di(Ai),
            ajaxTransport: Di(Lt),
            ajax: function (e, t) {
              typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
              var n,
                r,
                a,
                l,
                u,
                h,
                d,
                v,
                T,
                x,
                b = o.ajaxSetup({}, t),
                A = b.context || b,
                z = b.context && (A.nodeType || A.jquery) ? o(A) : o.event,
                Y = o.Deferred(),
                F = o.Callbacks("once memory"),
                ne = b.statusCode || {},
                ie = {},
                ke = {},
                xe = "canceled",
                V = {
                  readyState: 0,
                  getResponseHeader: function (G) {
                    var ee;
                    if (d) {
                      if (!l)
                        for (l = {}; (ee = Cn.exec(a)); )
                          l[ee[1].toLowerCase() + " "] = (
                            l[ee[1].toLowerCase() + " "] || []
                          ).concat(ee[2]);
                      ee = l[G.toLowerCase() + " "];
                    }
                    return ee == null ? null : ee.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return d ? a : null;
                  },
                  setRequestHeader: function (G, ee) {
                    return (
                      d == null &&
                        ((G = ke[G.toLowerCase()] = ke[G.toLowerCase()] || G),
                        (ie[G] = ee)),
                      this
                    );
                  },
                  overrideMimeType: function (G) {
                    return d == null && (b.mimeType = G), this;
                  },
                  statusCode: function (G) {
                    var ee;
                    if (G)
                      if (d) V.always(G[V.status]);
                      else for (ee in G) ne[ee] = [ne[ee], G[ee]];
                    return this;
                  },
                  abort: function (G) {
                    var ee = G || xe;
                    return n && n.abort(ee), Ie(0, ee), this;
                  },
                };
              if (
                (Y.promise(V),
                (b.url = ((e || b.url || st.href) + "").replace(
                  Dn,
                  st.protocol + "//"
                )),
                (b.type = t.method || t.type || b.method || b.type),
                (b.dataTypes = (b.dataType || "*").toLowerCase().match(Te) || [
                  "",
                ]),
                b.crossDomain == null)
              ) {
                h = q.createElement("a");
                try {
                  (h.href = b.url),
                    (h.href = h.href),
                    (b.crossDomain =
                      Mt.protocol + "//" + Mt.host !=
                      h.protocol + "//" + h.host);
                } catch (G) {
                  b.crossDomain = !0;
                }
              }
              if (
                (b.data &&
                  b.processData &&
                  typeof b.data != "string" &&
                  (b.data = o.param(b.data, b.traditional)),
                $i(Ai, b, t, V),
                d)
              )
                return V;
              (v = o.event && b.global),
                v && o.active++ === 0 && o.event.trigger("ajaxStart"),
                (b.type = b.type.toUpperCase()),
                (b.hasContent = !En.test(b.type)),
                (r = b.url.replace(kn, "")),
                b.hasContent
                  ? b.data &&
                    b.processData &&
                    (b.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) === 0 &&
                    (b.data = b.data.replace(Sn, "+"))
                  : ((x = b.url.slice(r.length)),
                    b.data &&
                      (b.processData || typeof b.data == "string") &&
                      ((r += (jt.test(r) ? "&" : "?") + b.data), delete b.data),
                    b.cache === !1 &&
                      ((r = r.replace(xn, "$1")),
                      (x = (jt.test(r) ? "&" : "?") + "_=" + Si.guid++ + x)),
                    (b.url = r + x)),
                b.ifModified &&
                  (o.lastModified[r] &&
                    V.setRequestHeader("If-Modified-Since", o.lastModified[r]),
                  o.etag[r] && V.setRequestHeader("If-None-Match", o.etag[r])),
                ((b.data && b.hasContent && b.contentType !== !1) ||
                  t.contentType) &&
                  V.setRequestHeader("Content-Type", b.contentType),
                V.setRequestHeader(
                  "Accept",
                  b.dataTypes[0] && b.accepts[b.dataTypes[0]]
                    ? b.accepts[b.dataTypes[0]] +
                        (b.dataTypes[0] !== "*" ? ", " + Ei + "; q=0.01" : "")
                    : b.accepts["*"]
                );
              for (T in b.headers) V.setRequestHeader(T, b.headers[T]);
              if (b.beforeSend && (b.beforeSend.call(A, V, b) === !1 || d))
                return V.abort();
              if (
                ((xe = "abort"),
                F.add(b.complete),
                V.done(b.success),
                V.fail(b.error),
                (n = $i(Lt, b, t, V)),
                !n)
              )
                Ie(-1, "No Transport");
              else {
                if (((V.readyState = 1), v && z.trigger("ajaxSend", [V, b]), d))
                  return V;
                b.async &&
                  b.timeout > 0 &&
                  (u = M.setTimeout(function () {
                    V.abort("timeout");
                  }, b.timeout));
                try {
                  (d = !1), n.send(ie, Ie);
                } catch (G) {
                  if (d) throw G;
                  Ie(-1, G);
                }
              }
              function Ie(G, ee, at, Wt) {
                var Ce,
                  lt,
                  Ae,
                  Pe,
                  je,
                  he = ee;
                d ||
                  ((d = !0),
                  u && M.clearTimeout(u),
                  (n = void 0),
                  (a = Wt || ""),
                  (V.readyState = G > 0 ? 4 : 0),
                  (Ce = (G >= 200 && G < 300) || G === 304),
                  at && (Pe = $n(b, V, at)),
                  !Ce &&
                    o.inArray("script", b.dataTypes) > -1 &&
                    o.inArray("json", b.dataTypes) < 0 &&
                    (b.converters["text script"] = function () {}),
                  (Pe = On(b, Pe, V, Ce)),
                  Ce
                    ? (b.ifModified &&
                        ((je = V.getResponseHeader("Last-Modified")),
                        je && (o.lastModified[r] = je),
                        (je = V.getResponseHeader("etag")),
                        je && (o.etag[r] = je)),
                      G === 204 || b.type === "HEAD"
                        ? (he = "nocontent")
                        : G === 304
                        ? (he = "notmodified")
                        : ((he = Pe.state),
                          (lt = Pe.data),
                          (Ae = Pe.error),
                          (Ce = !Ae)))
                    : ((Ae = he),
                      (G || !he) && ((he = "error"), G < 0 && (G = 0))),
                  (V.status = G),
                  (V.statusText = (ee || he) + ""),
                  Ce
                    ? Y.resolveWith(A, [lt, he, V])
                    : Y.rejectWith(A, [V, he, Ae]),
                  V.statusCode(ne),
                  (ne = void 0),
                  v &&
                    z.trigger(Ce ? "ajaxSuccess" : "ajaxError", [
                      V,
                      b,
                      Ce ? lt : Ae,
                    ]),
                  F.fireWith(A, [V, he]),
                  v &&
                    (z.trigger("ajaxComplete", [V, b]),
                    --o.active || o.event.trigger("ajaxStop")));
              }
              return V;
            },
            getJSON: function (e, t, n) {
              return o.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return o.get(e, void 0, t, "script");
            },
          }),
            o.each(["get", "post"], function (e, t) {
              o[t] = function (n, r, a, l) {
                return (
                  W(r) && ((l = l || a), (a = r), (r = void 0)),
                  o.ajax(
                    o.extend(
                      { url: n, type: t, dataType: l, data: r, success: a },
                      o.isPlainObject(n) && n
                    )
                  )
                );
              };
            }),
            o.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                t.toLowerCase() === "content-type" &&
                  (e.contentType = e.headers[t] || "");
            }),
            (o._evalUrl = function (e, t, n) {
              return o.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (r) {
                  o.globalEval(r, t, n);
                },
              });
            }),
            o.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (W(e) && (e = e.call(this[0])),
                    (t = o(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var n = this; n.firstElementChild; )
                          n = n.firstElementChild;
                        return n;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return W(e)
                  ? this.each(function (t) {
                      o(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = o(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = W(e);
                return this.each(function (n) {
                  o(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      o(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (o.expr.pseudos.hidden = function (e) {
              return !o.expr.pseudos.visible(e);
            }),
            (o.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (o.ajaxSettings.xhr = function () {
              try {
                return new M.XMLHttpRequest();
              } catch (e) {}
            });
          var _n = { 0: 200, 1223: 204 },
            ot = o.ajaxSettings.xhr();
          (N.cors = !!ot && "withCredentials" in ot),
            (N.ajax = ot = !!ot),
            o.ajaxTransport(function (e) {
              var t, n;
              if (N.cors || (ot && !e.crossDomain))
                return {
                  send: function (r, a) {
                    var l,
                      u = e.xhr();
                    if (
                      (u.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (l in e.xhrFields) u[l] = e.xhrFields[l];
                    e.mimeType &&
                      u.overrideMimeType &&
                      u.overrideMimeType(e.mimeType),
                      !e.crossDomain &&
                        !r["X-Requested-With"] &&
                        (r["X-Requested-With"] = "XMLHttpRequest");
                    for (l in r) u.setRequestHeader(l, r[l]);
                    (t = function (h) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            u.onload =
                            u.onerror =
                            u.onabort =
                            u.ontimeout =
                            u.onreadystatechange =
                              null),
                          h === "abort"
                            ? u.abort()
                            : h === "error"
                            ? typeof u.status != "number"
                              ? a(0, "error")
                              : a(u.status, u.statusText)
                            : a(
                                _n[u.status] || u.status,
                                u.statusText,
                                (u.responseType || "text") !== "text" ||
                                  typeof u.responseText != "string"
                                  ? { binary: u.response }
                                  : { text: u.responseText },
                                u.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (u.onload = t()),
                      (n = u.onerror = u.ontimeout = t("error")),
                      u.onabort !== void 0
                        ? (u.onabort = n)
                        : (u.onreadystatechange = function () {
                            u.readyState === 4 &&
                              M.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      u.send((e.hasContent && e.data) || null);
                    } catch (h) {
                      if (t) throw h;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            o.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            o.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return o.globalEval(e), e;
                },
              },
            }),
            o.ajaxPrefilter("script", function (e) {
              e.cache === void 0 && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            o.ajaxTransport("script", function (e) {
              if (e.crossDomain || e.scriptAttrs) {
                var t, n;
                return {
                  send: function (r, a) {
                    (t = o("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (l) {
                          t.remove(),
                            (n = null),
                            l && a(l.type === "error" ? 404 : 200, l.type);
                        })
                      )),
                      q.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
              }
            });
          var Oi = [],
            It = /(=)\?(?=&|$)|\?\?/;
          o.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Oi.pop() || o.expando + "_" + Si.guid++;
              return (this[e] = !0), e;
            },
          }),
            o.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                a,
                l,
                u =
                  e.jsonp !== !1 &&
                  (It.test(e.url)
                    ? "url"
                    : typeof e.data == "string" &&
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) === 0 &&
                      It.test(e.data) &&
                      "data");
              if (u || e.dataTypes[0] === "jsonp")
                return (
                  (r = e.jsonpCallback =
                    W(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  u
                    ? (e[u] = e[u].replace(It, "$1" + r))
                    : e.jsonp !== !1 &&
                      (e.url +=
                        (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return l || o.error(r + " was not called"), l[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (a = M[r]),
                  (M[r] = function () {
                    l = arguments;
                  }),
                  n.always(function () {
                    a === void 0 ? o(M).removeProp(r) : (M[r] = a),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Oi.push(r)),
                      l && W(a) && a(l[0]),
                      (l = a = void 0);
                  }),
                  "script"
                );
            }),
            (N.createHTMLDocument = (function () {
              var e = q.implementation.createHTMLDocument("").body;
              return (
                (e.innerHTML = "<form></form><form></form>"),
                e.childNodes.length === 2
              );
            })()),
            (o.parseHTML = function (e, t, n) {
              if (typeof e != "string") return [];
              typeof t == "boolean" && ((n = t), (t = !1));
              var r, a, l;
              return (
                t ||
                  (N.createHTMLDocument
                    ? ((t = q.implementation.createHTMLDocument("")),
                      (r = t.createElement("base")),
                      (r.href = q.location.href),
                      t.head.appendChild(r))
                    : (t = q)),
                (a = Qt.exec(e)),
                (l = !n && []),
                a
                  ? [t.createElement(a[1])]
                  : ((a = oi([e], t, l)),
                    l && l.length && o(l).remove(),
                    o.merge([], a.childNodes))
              );
            }),
            (o.fn.load = function (e, t, n) {
              var r,
                a,
                l,
                u = this,
                h = e.indexOf(" ");
              return (
                h > -1 && ((r = Me(e.slice(h))), (e = e.slice(0, h))),
                W(t)
                  ? ((n = t), (t = void 0))
                  : t && typeof t == "object" && (a = "POST"),
                u.length > 0 &&
                  o
                    .ajax({
                      url: e,
                      type: a || "GET",
                      dataType: "html",
                      data: t,
                    })
                    .done(function (d) {
                      (l = arguments),
                        u.html(
                          r ? o("<div>").append(o.parseHTML(d)).find(r) : d
                        );
                    })
                    .always(
                      n &&
                        function (d, v) {
                          u.each(function () {
                            n.apply(this, l || [d.responseText, v, d]);
                          });
                        }
                    ),
                this
              );
            }),
            (o.expr.pseudos.animated = function (e) {
              return o.grep(o.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (o.offset = {
              setOffset: function (e, t, n) {
                var r,
                  a,
                  l,
                  u,
                  h,
                  d,
                  v,
                  T = o.css(e, "position"),
                  x = o(e),
                  b = {};
                T === "static" && (e.style.position = "relative"),
                  (h = x.offset()),
                  (l = o.css(e, "top")),
                  (d = o.css(e, "left")),
                  (v =
                    (T === "absolute" || T === "fixed") &&
                    (l + d).indexOf("auto") > -1),
                  v
                    ? ((r = x.position()), (u = r.top), (a = r.left))
                    : ((u = parseFloat(l) || 0), (a = parseFloat(d) || 0)),
                  W(t) && (t = t.call(e, n, o.extend({}, h))),
                  t.top != null && (b.top = t.top - h.top + u),
                  t.left != null && (b.left = t.left - h.left + a),
                  "using" in t ? t.using.call(e, b) : x.css(b);
              },
            }),
            o.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return e === void 0
                    ? this
                    : this.each(function (a) {
                        o.offset.setOffset(this, e, a);
                      });
                var t,
                  n,
                  r = this[0];
                if (r)
                  return r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 };
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    a = { top: 0, left: 0 };
                  if (o.css(r, "position") === "fixed")
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      o.css(e, "position") === "static";

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      e.nodeType === 1 &&
                      ((a = o(e).offset()),
                      (a.top += o.css(e, "borderTopWidth", !0)),
                      (a.left += o.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - a.top - o.css(r, "marginTop", !0),
                    left: t.left - a.left - o.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && o.css(e, "position") === "static";

                  )
                    e = e.offsetParent;
                  return e || Le;
                });
              },
            }),
            o.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = t === "pageYOffset";
                o.fn[e] = function (r) {
                  return $e(
                    this,
                    function (a, l, u) {
                      var h;
                      if (
                        (oe(a)
                          ? (h = a)
                          : a.nodeType === 9 && (h = a.defaultView),
                        u === void 0)
                      )
                        return h ? h[t] : a[l];
                      h
                        ? h.scrollTo(
                            n ? h.pageXOffset : u,
                            n ? u : h.pageYOffset
                          )
                        : (a[l] = u);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            o.each(["top", "left"], function (e, t) {
              o.cssHooks[t] = ci(N.pixelPosition, function (n, r) {
                if (r)
                  return (
                    (r = nt(n, t)), Dt.test(r) ? o(n).position()[t] + "px" : r
                  );
              });
            }),
            o.each({ Height: "height", Width: "width" }, function (e, t) {
              o.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  o.fn[r] = function (a, l) {
                    var u = arguments.length && (n || typeof a != "boolean"),
                      h = n || (a === !0 || l === !0 ? "margin" : "border");
                    return $e(
                      this,
                      function (d, v, T) {
                        var x;
                        return oe(d)
                          ? r.indexOf("outer") === 0
                            ? d["inner" + e]
                            : d.document.documentElement["client" + e]
                          : d.nodeType === 9
                          ? ((x = d.documentElement),
                            Math.max(
                              d.body["scroll" + e],
                              x["scroll" + e],
                              d.body["offset" + e],
                              x["offset" + e],
                              x["client" + e]
                            ))
                          : T === void 0
                          ? o.css(d, v, h)
                          : o.style(d, v, T, h);
                      },
                      t,
                      u ? a : void 0,
                      u
                    );
                  };
                }
              );
            }),
            o.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                o.fn[t] = function (n) {
                  return this.on(t, n);
                };
              }
            ),
            o.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return arguments.length === 1
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            o.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                o.fn[t] = function (n, r) {
                  return arguments.length > 0
                    ? this.on(t, null, n, r)
                    : this.trigger(t);
                };
              }
            );
          var Hn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (o.proxy = function (e, t) {
            var n, r, a;
            if (
              (typeof t == "string" && ((n = e[t]), (t = e), (e = n)), !!W(e))
            )
              return (
                (r = i.call(arguments, 2)),
                (a = function () {
                  return e.apply(t || this, r.concat(i.call(arguments)));
                }),
                (a.guid = e.guid = e.guid || o.guid++),
                a
              );
          }),
            (o.holdReady = function (e) {
              e ? o.readyWait++ : o.ready(!0);
            }),
            (o.isArray = Array.isArray),
            (o.parseJSON = JSON.parse),
            (o.nodeName = Z),
            (o.isFunction = W),
            (o.isWindow = oe),
            (o.camelCase = Se),
            (o.type = we),
            (o.now = Date.now),
            (o.isNumeric = function (e) {
              var t = o.type(e);
              return (
                (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
              );
            }),
            (o.trim = function (e) {
              return e == null ? "" : (e + "").replace(Hn, "$1");
            }),
            (ce = []),
            (re = function () {
              return o;
            }.apply(be, ce)),
            re !== void 0 && (ye.exports = re);
          var Pn = M.jQuery,
            jn = M.$;
          return (
            (o.noConflict = function (e) {
              return (
                M.$ === o && (M.$ = jn),
                e && M.jQuery === o && (M.jQuery = Pn),
                o
              );
            }),
            typeof te == "undefined" && (M.jQuery = M.$ = o),
            o
          );
        });
      },
      9154: (ye, be, ce) => {
        var re, M, te;
        (function (S) {
          "use strict";
          (M = [ce(9755)]),
            (re = S),
            (te = typeof re == "function" ? re.apply(be, M) : re),
            te !== void 0 && (ye.exports = te);
        })(function (S) {
          "use strict";
          var C = window.Slick || {};
          (C = (function () {
            var i = 0;
            function s(c, p) {
              var g = this,
                D;
              (g.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: S(c),
                appendDots: S(c),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                  '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                  '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (H, B) {
                  return S('<button type="button" />').text(B + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
              }),
                (g.initials = {
                  animating: !1,
                  dragging: !1,
                  autoPlayTimer: null,
                  currentDirection: 0,
                  currentLeft: null,
                  currentSlide: 0,
                  direction: 1,
                  $dots: null,
                  listWidth: null,
                  listHeight: null,
                  loadIndex: 0,
                  $nextArrow: null,
                  $prevArrow: null,
                  scrolling: !1,
                  slideCount: null,
                  slideWidth: null,
                  $slideTrack: null,
                  $slides: null,
                  sliding: !1,
                  slideOffset: 0,
                  swipeLeft: null,
                  swiping: !1,
                  $list: null,
                  touchObject: {},
                  transformsEnabled: !1,
                  unslicked: !1,
                }),
                S.extend(g, g.initials),
                (g.activeBreakpoint = null),
                (g.animType = null),
                (g.animProp = null),
                (g.breakpoints = []),
                (g.breakpointSettings = []),
                (g.cssTransitions = !1),
                (g.focussed = !1),
                (g.interrupted = !1),
                (g.hidden = "hidden"),
                (g.paused = !0),
                (g.positionProp = null),
                (g.respondTo = null),
                (g.rowCount = 1),
                (g.shouldClick = !0),
                (g.$slider = S(c)),
                (g.$slidesCache = null),
                (g.transformType = null),
                (g.transitionType = null),
                (g.visibilityChange = "visibilitychange"),
                (g.windowWidth = 0),
                (g.windowTimer = null),
                (D = S(c).data("slick") || {}),
                (g.options = S.extend({}, g.defaults, p, D)),
                (g.currentSlide = g.options.initialSlide),
                (g.originalSettings = g.options),
                typeof document.mozHidden != "undefined"
                  ? ((g.hidden = "mozHidden"),
                    (g.visibilityChange = "mozvisibilitychange"))
                  : typeof document.webkitHidden != "undefined" &&
                    ((g.hidden = "webkitHidden"),
                    (g.visibilityChange = "webkitvisibilitychange")),
                (g.autoPlay = S.proxy(g.autoPlay, g)),
                (g.autoPlayClear = S.proxy(g.autoPlayClear, g)),
                (g.autoPlayIterator = S.proxy(g.autoPlayIterator, g)),
                (g.changeSlide = S.proxy(g.changeSlide, g)),
                (g.clickHandler = S.proxy(g.clickHandler, g)),
                (g.selectHandler = S.proxy(g.selectHandler, g)),
                (g.setPosition = S.proxy(g.setPosition, g)),
                (g.swipeHandler = S.proxy(g.swipeHandler, g)),
                (g.dragHandler = S.proxy(g.dragHandler, g)),
                (g.keyHandler = S.proxy(g.keyHandler, g)),
                (g.instanceUid = i++),
                (g.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                g.registerBreakpoints(),
                g.init(!0);
            }
            return s;
          })()),
            (C.prototype.activateADA = function () {
              var i = this;
              i.$slideTrack
                .find(".slick-active")
                .attr({ "aria-hidden": "false" })
                .find("a, input, button, select")
                .attr({ tabindex: "0" });
            }),
            (C.prototype.addSlide = C.prototype.slickAdd =
              function (i, s, c) {
                var p = this;
                if (typeof s == "boolean") (c = s), (s = null);
                else if (s < 0 || s >= p.slideCount) return !1;
                p.unload(),
                  typeof s == "number"
                    ? s === 0 && p.$slides.length === 0
                      ? S(i).appendTo(p.$slideTrack)
                      : c
                      ? S(i).insertBefore(p.$slides.eq(s))
                      : S(i).insertAfter(p.$slides.eq(s))
                    : c === !0
                    ? S(i).prependTo(p.$slideTrack)
                    : S(i).appendTo(p.$slideTrack),
                  (p.$slides = p.$slideTrack.children(this.options.slide)),
                  p.$slideTrack.children(this.options.slide).detach(),
                  p.$slideTrack.append(p.$slides),
                  p.$slides.each(function (g, D) {
                    S(D).attr("data-slick-index", g);
                  }),
                  (p.$slidesCache = p.$slides),
                  p.reinit();
              }),
            (C.prototype.animateHeight = function () {
              var i = this;
              if (
                i.options.slidesToShow === 1 &&
                i.options.adaptiveHeight === !0 &&
                i.options.vertical === !1
              ) {
                var s = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: s }, i.options.speed);
              }
            }),
            (C.prototype.animateSlide = function (i, s) {
              var c = {},
                p = this;
              p.animateHeight(),
                p.options.rtl === !0 && p.options.vertical === !1 && (i = -i),
                p.transformsEnabled === !1
                  ? p.options.vertical === !1
                    ? p.$slideTrack.animate(
                        { left: i },
                        p.options.speed,
                        p.options.easing,
                        s
                      )
                    : p.$slideTrack.animate(
                        { top: i },
                        p.options.speed,
                        p.options.easing,
                        s
                      )
                  : p.cssTransitions === !1
                  ? (p.options.rtl === !0 && (p.currentLeft = -p.currentLeft),
                    S({ animStart: p.currentLeft }).animate(
                      { animStart: i },
                      {
                        duration: p.options.speed,
                        easing: p.options.easing,
                        step: function (g) {
                          (g = Math.ceil(g)),
                            p.options.vertical === !1
                              ? ((c[p.animType] =
                                  "translate(" + g + "px, 0px)"),
                                p.$slideTrack.css(c))
                              : ((c[p.animType] = "translate(0px," + g + "px)"),
                                p.$slideTrack.css(c));
                        },
                        complete: function () {
                          s && s.call();
                        },
                      }
                    ))
                  : (p.applyTransition(),
                    (i = Math.ceil(i)),
                    p.options.vertical === !1
                      ? (c[p.animType] = "translate3d(" + i + "px, 0px, 0px)")
                      : (c[p.animType] = "translate3d(0px," + i + "px, 0px)"),
                    p.$slideTrack.css(c),
                    s &&
                      setTimeout(function () {
                        p.disableTransition(), s.call();
                      }, p.options.speed));
            }),
            (C.prototype.getNavTarget = function () {
              var i = this,
                s = i.options.asNavFor;
              return s && s !== null && (s = S(s).not(i.$slider)), s;
            }),
            (C.prototype.asNavFor = function (i) {
              var s = this,
                c = s.getNavTarget();
              c !== null &&
                typeof c == "object" &&
                c.each(function () {
                  var p = S(this).slick("getSlick");
                  p.unslicked || p.slideHandler(i, !0);
                });
            }),
            (C.prototype.applyTransition = function (i) {
              var s = this,
                c = {};
              s.options.fade === !1
                ? (c[s.transitionType] =
                    s.transformType +
                    " " +
                    s.options.speed +
                    "ms " +
                    s.options.cssEase)
                : (c[s.transitionType] =
                    "opacity " + s.options.speed + "ms " + s.options.cssEase),
                s.options.fade === !1
                  ? s.$slideTrack.css(c)
                  : s.$slides.eq(i).css(c);
            }),
            (C.prototype.autoPlay = function () {
              var i = this;
              i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow &&
                  (i.autoPlayTimer = setInterval(
                    i.autoPlayIterator,
                    i.options.autoplaySpeed
                  ));
            }),
            (C.prototype.autoPlayClear = function () {
              var i = this;
              i.autoPlayTimer && clearInterval(i.autoPlayTimer);
            }),
            (C.prototype.autoPlayIterator = function () {
              var i = this,
                s = i.currentSlide + i.options.slidesToScroll;
              !i.paused &&
                !i.interrupted &&
                !i.focussed &&
                (i.options.infinite === !1 &&
                  (i.direction === 1 && i.currentSlide + 1 === i.slideCount - 1
                    ? (i.direction = 0)
                    : i.direction === 0 &&
                      ((s = i.currentSlide - i.options.slidesToScroll),
                      i.currentSlide - 1 === 0 && (i.direction = 1))),
                i.slideHandler(s));
            }),
            (C.prototype.buildArrows = function () {
              var i = this;
              i.options.arrows === !0 &&
                ((i.$prevArrow = S(i.options.prevArrow).addClass(
                  "slick-arrow"
                )),
                (i.$nextArrow = S(i.options.nextArrow).addClass("slick-arrow")),
                i.slideCount > i.options.slidesToShow
                  ? (i.$prevArrow
                      .removeClass("slick-hidden")
                      .removeAttr("aria-hidden tabindex"),
                    i.$nextArrow
                      .removeClass("slick-hidden")
                      .removeAttr("aria-hidden tabindex"),
                    i.htmlExpr.test(i.options.prevArrow) &&
                      i.$prevArrow.prependTo(i.options.appendArrows),
                    i.htmlExpr.test(i.options.nextArrow) &&
                      i.$nextArrow.appendTo(i.options.appendArrows),
                    i.options.infinite !== !0 &&
                      i.$prevArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"))
                  : i.$prevArrow
                      .add(i.$nextArrow)
                      .addClass("slick-hidden")
                      .attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (C.prototype.buildDots = function () {
              var i = this,
                s,
                c;
              if (
                i.options.dots === !0 &&
                i.slideCount > i.options.slidesToShow
              ) {
                for (
                  i.$slider.addClass("slick-dotted"),
                    c = S("<ul />").addClass(i.options.dotsClass),
                    s = 0;
                  s <= i.getDotCount();
                  s += 1
                )
                  c.append(
                    S("<li />").append(i.options.customPaging.call(this, i, s))
                  );
                (i.$dots = c.appendTo(i.options.appendDots)),
                  i.$dots.find("li").first().addClass("slick-active");
              }
            }),
            (C.prototype.buildOut = function () {
              var i = this;
              (i.$slides = i.$slider
                .children(i.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (i.slideCount = i.$slides.length),
                i.$slides.each(function (s, c) {
                  S(c)
                    .attr("data-slick-index", s)
                    .data("originalStyling", S(c).attr("style") || "");
                }),
                i.$slider.addClass("slick-slider"),
                (i.$slideTrack =
                  i.slideCount === 0
                    ? S('<div class="slick-track"/>').appendTo(i.$slider)
                    : i.$slides.wrapAll('<div class="slick-track"/>').parent()),
                (i.$list = i.$slideTrack
                  .wrap('<div class="slick-list"/>')
                  .parent()),
                i.$slideTrack.css("opacity", 0),
                (i.options.centerMode === !0 ||
                  i.options.swipeToSlide === !0) &&
                  (i.options.slidesToScroll = 1),
                S("img[data-lazy]", i.$slider)
                  .not("[src]")
                  .addClass("slick-loading"),
                i.setupInfinite(),
                i.buildArrows(),
                i.buildDots(),
                i.updateDots(),
                i.setSlideClasses(
                  typeof i.currentSlide == "number" ? i.currentSlide : 0
                ),
                i.options.draggable === !0 && i.$list.addClass("draggable");
            }),
            (C.prototype.buildRows = function () {
              var i = this,
                s,
                c,
                p,
                g,
                D,
                H,
                B;
              if (
                ((g = document.createDocumentFragment()),
                (H = i.$slider.children()),
                i.options.rows > 0)
              ) {
                for (
                  B = i.options.slidesPerRow * i.options.rows,
                    D = Math.ceil(H.length / B),
                    s = 0;
                  s < D;
                  s++
                ) {
                  var E = document.createElement("div");
                  for (c = 0; c < i.options.rows; c++) {
                    var N = document.createElement("div");
                    for (p = 0; p < i.options.slidesPerRow; p++) {
                      var W = s * B + (c * i.options.slidesPerRow + p);
                      H.get(W) && N.appendChild(H.get(W));
                    }
                    E.appendChild(N);
                  }
                  g.appendChild(E);
                }
                i.$slider.empty().append(g),
                  i.$slider
                    .children()
                    .children()
                    .children()
                    .css({
                      width: 100 / i.options.slidesPerRow + "%",
                      display: "inline-block",
                    });
              }
            }),
            (C.prototype.checkResponsive = function (i, s) {
              var c = this,
                p,
                g,
                D,
                H = !1,
                B = c.$slider.width(),
                E = window.innerWidth || S(window).width();
              if (
                (c.respondTo === "window"
                  ? (D = E)
                  : c.respondTo === "slider"
                  ? (D = B)
                  : c.respondTo === "min" && (D = Math.min(E, B)),
                c.options.responsive &&
                  c.options.responsive.length &&
                  c.options.responsive !== null)
              ) {
                g = null;
                for (p in c.breakpoints)
                  c.breakpoints.hasOwnProperty(p) &&
                    (c.originalSettings.mobileFirst === !1
                      ? D < c.breakpoints[p] && (g = c.breakpoints[p])
                      : D > c.breakpoints[p] && (g = c.breakpoints[p]));
                g !== null
                  ? c.activeBreakpoint !== null
                    ? (g !== c.activeBreakpoint || s) &&
                      ((c.activeBreakpoint = g),
                      c.breakpointSettings[g] === "unslick"
                        ? c.unslick(g)
                        : ((c.options = S.extend(
                            {},
                            c.originalSettings,
                            c.breakpointSettings[g]
                          )),
                          i === !0 && (c.currentSlide = c.options.initialSlide),
                          c.refresh(i)),
                      (H = g))
                    : ((c.activeBreakpoint = g),
                      c.breakpointSettings[g] === "unslick"
                        ? c.unslick(g)
                        : ((c.options = S.extend(
                            {},
                            c.originalSettings,
                            c.breakpointSettings[g]
                          )),
                          i === !0 && (c.currentSlide = c.options.initialSlide),
                          c.refresh(i)),
                      (H = g))
                  : c.activeBreakpoint !== null &&
                    ((c.activeBreakpoint = null),
                    (c.options = c.originalSettings),
                    i === !0 && (c.currentSlide = c.options.initialSlide),
                    c.refresh(i),
                    (H = g)),
                  !i && H !== !1 && c.$slider.trigger("breakpoint", [c, H]);
              }
            }),
            (C.prototype.changeSlide = function (i, s) {
              var c = this,
                p = S(i.currentTarget),
                g,
                D,
                H;
              switch (
                (p.is("a") && i.preventDefault(),
                p.is("li") || (p = p.closest("li")),
                (H = c.slideCount % c.options.slidesToScroll !== 0),
                (g = H
                  ? 0
                  : (c.slideCount - c.currentSlide) % c.options.slidesToScroll),
                i.data.message)
              ) {
                case "previous":
                  (D =
                    g === 0
                      ? c.options.slidesToScroll
                      : c.options.slidesToShow - g),
                    c.slideCount > c.options.slidesToShow &&
                      c.slideHandler(c.currentSlide - D, !1, s);
                  break;
                case "next":
                  (D = g === 0 ? c.options.slidesToScroll : g),
                    c.slideCount > c.options.slidesToShow &&
                      c.slideHandler(c.currentSlide + D, !1, s);
                  break;
                case "index":
                  var B =
                    i.data.index === 0
                      ? 0
                      : i.data.index || p.index() * c.options.slidesToScroll;
                  c.slideHandler(c.checkNavigable(B), !1, s),
                    p.children().trigger("focus");
                  break;
                default:
                  return;
              }
            }),
            (C.prototype.checkNavigable = function (i) {
              var s = this,
                c,
                p;
              if (((c = s.getNavigableIndexes()), (p = 0), i > c[c.length - 1]))
                i = c[c.length - 1];
              else
                for (var g in c) {
                  if (i < c[g]) {
                    i = p;
                    break;
                  }
                  p = c[g];
                }
              return i;
            }),
            (C.prototype.cleanUpEvents = function () {
              var i = this;
              i.options.dots &&
                i.$dots !== null &&
                (S("li", i.$dots)
                  .off("click.slick", i.changeSlide)
                  .off("mouseenter.slick", S.proxy(i.interrupt, i, !0))
                  .off("mouseleave.slick", S.proxy(i.interrupt, i, !1)),
                i.options.accessibility === !0 &&
                  i.$dots.off("keydown.slick", i.keyHandler)),
                i.$slider.off("focus.slick blur.slick"),
                i.options.arrows === !0 &&
                  i.slideCount > i.options.slidesToShow &&
                  (i.$prevArrow &&
                    i.$prevArrow.off("click.slick", i.changeSlide),
                  i.$nextArrow &&
                    i.$nextArrow.off("click.slick", i.changeSlide),
                  i.options.accessibility === !0 &&
                    (i.$prevArrow &&
                      i.$prevArrow.off("keydown.slick", i.keyHandler),
                    i.$nextArrow &&
                      i.$nextArrow.off("keydown.slick", i.keyHandler))),
                i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler),
                i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler),
                i.$list.off("touchend.slick mouseup.slick", i.swipeHandler),
                i.$list.off(
                  "touchcancel.slick mouseleave.slick",
                  i.swipeHandler
                ),
                i.$list.off("click.slick", i.clickHandler),
                S(document).off(i.visibilityChange, i.visibility),
                i.cleanUpSlideEvents(),
                i.options.accessibility === !0 &&
                  i.$list.off("keydown.slick", i.keyHandler),
                i.options.focusOnSelect === !0 &&
                  S(i.$slideTrack)
                    .children()
                    .off("click.slick", i.selectHandler),
                S(window).off(
                  "orientationchange.slick.slick-" + i.instanceUid,
                  i.orientationChange
                ),
                S(window).off("resize.slick.slick-" + i.instanceUid, i.resize),
                S("[draggable!=true]", i.$slideTrack).off(
                  "dragstart",
                  i.preventDefault
                ),
                S(window).off(
                  "load.slick.slick-" + i.instanceUid,
                  i.setPosition
                );
            }),
            (C.prototype.cleanUpSlideEvents = function () {
              var i = this;
              i.$list.off("mouseenter.slick", S.proxy(i.interrupt, i, !0)),
                i.$list.off("mouseleave.slick", S.proxy(i.interrupt, i, !1));
            }),
            (C.prototype.cleanUpRows = function () {
              var i = this,
                s;
              i.options.rows > 0 &&
                ((s = i.$slides.children().children()),
                s.removeAttr("style"),
                i.$slider.empty().append(s));
            }),
            (C.prototype.clickHandler = function (i) {
              var s = this;
              s.shouldClick === !1 &&
                (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault());
            }),
            (C.prototype.destroy = function (i) {
              var s = this;
              s.autoPlayClear(),
                (s.touchObject = {}),
                s.cleanUpEvents(),
                S(".slick-cloned", s.$slider).detach(),
                s.$dots && s.$dots.remove(),
                s.$prevArrow &&
                  s.$prevArrow.length &&
                  (s.$prevArrow
                    .removeClass("slick-disabled slick-arrow slick-hidden")
                    .removeAttr("aria-hidden aria-disabled tabindex")
                    .css("display", ""),
                  s.htmlExpr.test(s.options.prevArrow) &&
                    s.$prevArrow.remove()),
                s.$nextArrow &&
                  s.$nextArrow.length &&
                  (s.$nextArrow
                    .removeClass("slick-disabled slick-arrow slick-hidden")
                    .removeAttr("aria-hidden aria-disabled tabindex")
                    .css("display", ""),
                  s.htmlExpr.test(s.options.nextArrow) &&
                    s.$nextArrow.remove()),
                s.$slides &&
                  (s.$slides
                    .removeClass(
                      "slick-slide slick-active slick-center slick-visible slick-current"
                    )
                    .removeAttr("aria-hidden")
                    .removeAttr("data-slick-index")
                    .each(function () {
                      S(this).attr("style", S(this).data("originalStyling"));
                    }),
                  s.$slideTrack.children(this.options.slide).detach(),
                  s.$slideTrack.detach(),
                  s.$list.detach(),
                  s.$slider.append(s.$slides)),
                s.cleanUpRows(),
                s.$slider.removeClass("slick-slider"),
                s.$slider.removeClass("slick-initialized"),
                s.$slider.removeClass("slick-dotted"),
                (s.unslicked = !0),
                i || s.$slider.trigger("destroy", [s]);
            }),
            (C.prototype.disableTransition = function (i) {
              var s = this,
                c = {};
              (c[s.transitionType] = ""),
                s.options.fade === !1
                  ? s.$slideTrack.css(c)
                  : s.$slides.eq(i).css(c);
            }),
            (C.prototype.fadeSlide = function (i, s) {
              var c = this;
              c.cssTransitions === !1
                ? (c.$slides.eq(i).css({ zIndex: c.options.zIndex }),
                  c.$slides
                    .eq(i)
                    .animate(
                      { opacity: 1 },
                      c.options.speed,
                      c.options.easing,
                      s
                    ))
                : (c.applyTransition(i),
                  c.$slides.eq(i).css({ opacity: 1, zIndex: c.options.zIndex }),
                  s &&
                    setTimeout(function () {
                      c.disableTransition(i), s.call();
                    }, c.options.speed));
            }),
            (C.prototype.fadeSlideOut = function (i) {
              var s = this;
              s.cssTransitions === !1
                ? s.$slides
                    .eq(i)
                    .animate(
                      { opacity: 0, zIndex: s.options.zIndex - 2 },
                      s.options.speed,
                      s.options.easing
                    )
                : (s.applyTransition(i),
                  s.$slides
                    .eq(i)
                    .css({ opacity: 0, zIndex: s.options.zIndex - 2 }));
            }),
            (C.prototype.filterSlides = C.prototype.slickFilter =
              function (i) {
                var s = this;
                i !== null &&
                  ((s.$slidesCache = s.$slides),
                  s.unload(),
                  s.$slideTrack.children(this.options.slide).detach(),
                  s.$slidesCache.filter(i).appendTo(s.$slideTrack),
                  s.reinit());
              }),
            (C.prototype.focusHandler = function () {
              var i = this;
              i.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*", function (s) {
                  s.stopImmediatePropagation();
                  var c = S(this);
                  setTimeout(function () {
                    i.options.pauseOnFocus &&
                      ((i.focussed = c.is(":focus")), i.autoPlay());
                  }, 0);
                });
            }),
            (C.prototype.getCurrent = C.prototype.slickCurrentSlide =
              function () {
                var i = this;
                return i.currentSlide;
              }),
            (C.prototype.getDotCount = function () {
              var i = this,
                s = 0,
                c = 0,
                p = 0;
              if (i.options.infinite === !0)
                if (i.slideCount <= i.options.slidesToShow) ++p;
                else
                  for (; s < i.slideCount; )
                    ++p,
                      (s = c + i.options.slidesToScroll),
                      (c +=
                        i.options.slidesToScroll <= i.options.slidesToShow
                          ? i.options.slidesToScroll
                          : i.options.slidesToShow);
              else if (i.options.centerMode === !0) p = i.slideCount;
              else if (!i.options.asNavFor)
                p =
                  1 +
                  Math.ceil(
                    (i.slideCount - i.options.slidesToShow) /
                      i.options.slidesToScroll
                  );
              else
                for (; s < i.slideCount; )
                  ++p,
                    (s = c + i.options.slidesToScroll),
                    (c +=
                      i.options.slidesToScroll <= i.options.slidesToShow
                        ? i.options.slidesToScroll
                        : i.options.slidesToShow);
              return p - 1;
            }),
            (C.prototype.getLeft = function (i) {
              var s = this,
                c,
                p,
                g = 0,
                D,
                H;
              return (
                (s.slideOffset = 0),
                (p = s.$slides.first().outerHeight(!0)),
                s.options.infinite === !0
                  ? (s.slideCount > s.options.slidesToShow &&
                      ((s.slideOffset =
                        s.slideWidth * s.options.slidesToShow * -1),
                      (H = -1),
                      s.options.vertical === !0 &&
                        s.options.centerMode === !0 &&
                        (s.options.slidesToShow === 2
                          ? (H = -1.5)
                          : s.options.slidesToShow === 1 && (H = -2)),
                      (g = p * s.options.slidesToShow * H)),
                    s.slideCount % s.options.slidesToScroll !== 0 &&
                      i + s.options.slidesToScroll > s.slideCount &&
                      s.slideCount > s.options.slidesToShow &&
                      (i > s.slideCount
                        ? ((s.slideOffset =
                            (s.options.slidesToShow - (i - s.slideCount)) *
                            s.slideWidth *
                            -1),
                          (g =
                            (s.options.slidesToShow - (i - s.slideCount)) *
                            p *
                            -1))
                        : ((s.slideOffset =
                            (s.slideCount % s.options.slidesToScroll) *
                            s.slideWidth *
                            -1),
                          (g =
                            (s.slideCount % s.options.slidesToScroll) *
                            p *
                            -1))))
                  : i + s.options.slidesToShow > s.slideCount &&
                    ((s.slideOffset =
                      (i + s.options.slidesToShow - s.slideCount) *
                      s.slideWidth),
                    (g = (i + s.options.slidesToShow - s.slideCount) * p)),
                s.slideCount <= s.options.slidesToShow &&
                  ((s.slideOffset = 0), (g = 0)),
                s.options.centerMode === !0 &&
                s.slideCount <= s.options.slidesToShow
                  ? (s.slideOffset =
                      (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 -
                      (s.slideWidth * s.slideCount) / 2)
                  : s.options.centerMode === !0 && s.options.infinite === !0
                  ? (s.slideOffset +=
                      s.slideWidth * Math.floor(s.options.slidesToShow / 2) -
                      s.slideWidth)
                  : s.options.centerMode === !0 &&
                    ((s.slideOffset = 0),
                    (s.slideOffset +=
                      s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
                s.options.vertical === !1
                  ? (c = i * s.slideWidth * -1 + s.slideOffset)
                  : (c = i * p * -1 + g),
                s.options.variableWidth === !0 &&
                  (s.slideCount <= s.options.slidesToShow ||
                  s.options.infinite === !1
                    ? (D = s.$slideTrack.children(".slick-slide").eq(i))
                    : (D = s.$slideTrack
                        .children(".slick-slide")
                        .eq(i + s.options.slidesToShow)),
                  s.options.rtl === !0
                    ? D[0]
                      ? (c =
                          (s.$slideTrack.width() -
                            D[0].offsetLeft -
                            D.width()) *
                          -1)
                      : (c = 0)
                    : (c = D[0] ? D[0].offsetLeft * -1 : 0),
                  s.options.centerMode === !0 &&
                    (s.slideCount <= s.options.slidesToShow ||
                    s.options.infinite === !1
                      ? (D = s.$slideTrack.children(".slick-slide").eq(i))
                      : (D = s.$slideTrack
                          .children(".slick-slide")
                          .eq(i + s.options.slidesToShow + 1)),
                    s.options.rtl === !0
                      ? D[0]
                        ? (c =
                            (s.$slideTrack.width() -
                              D[0].offsetLeft -
                              D.width()) *
                            -1)
                        : (c = 0)
                      : (c = D[0] ? D[0].offsetLeft * -1 : 0),
                    (c += (s.$list.width() - D.outerWidth()) / 2))),
                c
              );
            }),
            (C.prototype.getOption = C.prototype.slickGetOption =
              function (i) {
                var s = this;
                return s.options[i];
              }),
            (C.prototype.getNavigableIndexes = function () {
              var i = this,
                s = 0,
                c = 0,
                p = [],
                g;
              for (
                i.options.infinite === !1
                  ? (g = i.slideCount)
                  : ((s = i.options.slidesToScroll * -1),
                    (c = i.options.slidesToScroll * -1),
                    (g = i.slideCount * 2));
                s < g;

              )
                p.push(s),
                  (s = c + i.options.slidesToScroll),
                  (c +=
                    i.options.slidesToScroll <= i.options.slidesToShow
                      ? i.options.slidesToScroll
                      : i.options.slidesToShow);
              return p;
            }),
            (C.prototype.getSlick = function () {
              return this;
            }),
            (C.prototype.getSlideCount = function () {
              var i = this,
                s,
                c,
                p;
              return (
                (p =
                  i.options.centerMode === !0
                    ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
                    : 0),
                i.options.swipeToSlide === !0
                  ? (i.$slideTrack.find(".slick-slide").each(function (g, D) {
                      if (
                        D.offsetLeft - p + S(D).outerWidth() / 2 >
                        i.swipeLeft * -1
                      )
                        return (c = D), !1;
                    }),
                    (s =
                      Math.abs(
                        S(c).attr("data-slick-index") - i.currentSlide
                      ) || 1),
                    s)
                  : i.options.slidesToScroll
              );
            }),
            (C.prototype.goTo = C.prototype.slickGoTo =
              function (i, s) {
                var c = this;
                c.changeSlide(
                  { data: { message: "index", index: parseInt(i) } },
                  s
                );
              }),
            (C.prototype.init = function (i) {
              var s = this;
              S(s.$slider).hasClass("slick-initialized") ||
                (S(s.$slider).addClass("slick-initialized"),
                s.buildRows(),
                s.buildOut(),
                s.setProps(),
                s.startLoad(),
                s.loadSlider(),
                s.initializeEvents(),
                s.updateArrows(),
                s.updateDots(),
                s.checkResponsive(!0),
                s.focusHandler()),
                i && s.$slider.trigger("init", [s]),
                s.options.accessibility === !0 && s.initADA(),
                s.options.autoplay && ((s.paused = !1), s.autoPlay());
            }),
            (C.prototype.initADA = function () {
              var i = this,
                s = Math.ceil(i.slideCount / i.options.slidesToShow),
                c = i.getNavigableIndexes().filter(function (D) {
                  return D >= 0 && D < i.slideCount;
                });
              i.$slides
                .add(i.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                i.$dots !== null &&
                  (i.$slides
                    .not(i.$slideTrack.find(".slick-cloned"))
                    .each(function (D) {
                      var H = c.indexOf(D);
                      if (
                        (S(this).attr({
                          role: "tabpanel",
                          id: "slick-slide" + i.instanceUid + D,
                          tabindex: -1,
                        }),
                        H !== -1)
                      ) {
                        var B = "slick-slide-control" + i.instanceUid + H;
                        S("#" + B).length &&
                          S(this).attr({ "aria-describedby": B });
                      }
                    }),
                  i.$dots
                    .attr("role", "tablist")
                    .find("li")
                    .each(function (D) {
                      var H = c[D];
                      S(this).attr({ role: "presentation" }),
                        S(this)
                          .find("button")
                          .first()
                          .attr({
                            role: "tab",
                            id: "slick-slide-control" + i.instanceUid + D,
                            "aria-controls": "slick-slide" + i.instanceUid + H,
                            "aria-label": D + 1 + " of " + s,
                            "aria-selected": null,
                            tabindex: "-1",
                          });
                    })
                    .eq(i.currentSlide)
                    .find("button")
                    .attr({ "aria-selected": "true", tabindex: "0" })
                    .end());
              for (
                var p = i.currentSlide, g = p + i.options.slidesToShow;
                p < g;
                p++
              )
                i.options.focusOnChange
                  ? i.$slides.eq(p).attr({ tabindex: "0" })
                  : i.$slides.eq(p).removeAttr("tabindex");
              i.activateADA();
            }),
            (C.prototype.initArrowEvents = function () {
              var i = this;
              i.options.arrows === !0 &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow
                  .off("click.slick")
                  .on("click.slick", { message: "previous" }, i.changeSlide),
                i.$nextArrow
                  .off("click.slick")
                  .on("click.slick", { message: "next" }, i.changeSlide),
                i.options.accessibility === !0 &&
                  (i.$prevArrow.on("keydown.slick", i.keyHandler),
                  i.$nextArrow.on("keydown.slick", i.keyHandler)));
            }),
            (C.prototype.initDotEvents = function () {
              var i = this;
              i.options.dots === !0 &&
                i.slideCount > i.options.slidesToShow &&
                (S("li", i.$dots).on(
                  "click.slick",
                  { message: "index" },
                  i.changeSlide
                ),
                i.options.accessibility === !0 &&
                  i.$dots.on("keydown.slick", i.keyHandler)),
                i.options.dots === !0 &&
                  i.options.pauseOnDotsHover === !0 &&
                  i.slideCount > i.options.slidesToShow &&
                  S("li", i.$dots)
                    .on("mouseenter.slick", S.proxy(i.interrupt, i, !0))
                    .on("mouseleave.slick", S.proxy(i.interrupt, i, !1));
            }),
            (C.prototype.initSlideEvents = function () {
              var i = this;
              i.options.pauseOnHover &&
                (i.$list.on("mouseenter.slick", S.proxy(i.interrupt, i, !0)),
                i.$list.on("mouseleave.slick", S.proxy(i.interrupt, i, !1)));
            }),
            (C.prototype.initializeEvents = function () {
              var i = this;
              i.initArrowEvents(),
                i.initDotEvents(),
                i.initSlideEvents(),
                i.$list.on(
                  "touchstart.slick mousedown.slick",
                  { action: "start" },
                  i.swipeHandler
                ),
                i.$list.on(
                  "touchmove.slick mousemove.slick",
                  { action: "move" },
                  i.swipeHandler
                ),
                i.$list.on(
                  "touchend.slick mouseup.slick",
                  { action: "end" },
                  i.swipeHandler
                ),
                i.$list.on(
                  "touchcancel.slick mouseleave.slick",
                  { action: "end" },
                  i.swipeHandler
                ),
                i.$list.on("click.slick", i.clickHandler),
                S(document).on(i.visibilityChange, S.proxy(i.visibility, i)),
                i.options.accessibility === !0 &&
                  i.$list.on("keydown.slick", i.keyHandler),
                i.options.focusOnSelect === !0 &&
                  S(i.$slideTrack)
                    .children()
                    .on("click.slick", i.selectHandler),
                S(window).on(
                  "orientationchange.slick.slick-" + i.instanceUid,
                  S.proxy(i.orientationChange, i)
                ),
                S(window).on(
                  "resize.slick.slick-" + i.instanceUid,
                  S.proxy(i.resize, i)
                ),
                S("[draggable!=true]", i.$slideTrack).on(
                  "dragstart",
                  i.preventDefault
                ),
                S(window).on(
                  "load.slick.slick-" + i.instanceUid,
                  i.setPosition
                ),
                S(i.setPosition);
            }),
            (C.prototype.initUI = function () {
              var i = this;
              i.options.arrows === !0 &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.show(), i.$nextArrow.show()),
                i.options.dots === !0 &&
                  i.slideCount > i.options.slidesToShow &&
                  i.$dots.show();
            }),
            (C.prototype.keyHandler = function (i) {
              var s = this;
              i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (i.keyCode === 37 && s.options.accessibility === !0
                  ? s.changeSlide({
                      data: {
                        message: s.options.rtl === !0 ? "next" : "previous",
                      },
                    })
                  : i.keyCode === 39 &&
                    s.options.accessibility === !0 &&
                    s.changeSlide({
                      data: {
                        message: s.options.rtl === !0 ? "previous" : "next",
                      },
                    }));
            }),
            (C.prototype.lazyLoad = function () {
              var i = this,
                s,
                c,
                p,
                g;
              function D(W) {
                S("img[data-lazy]", W).each(function () {
                  var oe = S(this),
                    q = S(this).attr("data-lazy"),
                    ut = S(this).attr("data-srcset"),
                    Ke =
                      S(this).attr("data-sizes") ||
                      i.$slider.attr("data-sizes"),
                    we = document.createElement("img");
                  (we.onload = function () {
                    oe.animate({ opacity: 0 }, 100, function () {
                      ut && (oe.attr("srcset", ut), Ke && oe.attr("sizes", Ke)),
                        oe
                          .attr("src", q)
                          .animate({ opacity: 1 }, 200, function () {
                            oe.removeAttr(
                              "data-lazy data-srcset data-sizes"
                            ).removeClass("slick-loading");
                          }),
                        i.$slider.trigger("lazyLoaded", [i, oe, q]);
                    });
                  }),
                    (we.onerror = function () {
                      oe
                        .removeAttr("data-lazy")
                        .removeClass("slick-loading")
                        .addClass("slick-lazyload-error"),
                        i.$slider.trigger("lazyLoadError", [i, oe, q]);
                    }),
                    (we.src = q);
                });
              }
              if (
                (i.options.centerMode === !0
                  ? i.options.infinite === !0
                    ? ((p = i.currentSlide + (i.options.slidesToShow / 2 + 1)),
                      (g = p + i.options.slidesToShow + 2))
                    : ((p = Math.max(
                        0,
                        i.currentSlide - (i.options.slidesToShow / 2 + 1)
                      )),
                      (g =
                        2 + (i.options.slidesToShow / 2 + 1) + i.currentSlide))
                  : ((p = i.options.infinite
                      ? i.options.slidesToShow + i.currentSlide
                      : i.currentSlide),
                    (g = Math.ceil(p + i.options.slidesToShow)),
                    i.options.fade === !0 &&
                      (p > 0 && p--, g <= i.slideCount && g++)),
                (s = i.$slider.find(".slick-slide").slice(p, g)),
                i.options.lazyLoad === "anticipated")
              )
                for (
                  var H = p - 1,
                    B = g,
                    E = i.$slider.find(".slick-slide"),
                    N = 0;
                  N < i.options.slidesToScroll;
                  N++
                )
                  H < 0 && (H = i.slideCount - 1),
                    (s = s.add(E.eq(H))),
                    (s = s.add(E.eq(B))),
                    H--,
                    B++;
              D(s),
                i.slideCount <= i.options.slidesToShow
                  ? ((c = i.$slider.find(".slick-slide")), D(c))
                  : i.currentSlide >= i.slideCount - i.options.slidesToShow
                  ? ((c = i.$slider
                      .find(".slick-cloned")
                      .slice(0, i.options.slidesToShow)),
                    D(c))
                  : i.currentSlide === 0 &&
                    ((c = i.$slider
                      .find(".slick-cloned")
                      .slice(i.options.slidesToShow * -1)),
                    D(c));
            }),
            (C.prototype.loadSlider = function () {
              var i = this;
              i.setPosition(),
                i.$slideTrack.css({ opacity: 1 }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
                i.options.lazyLoad === "progressive" && i.progressiveLazyLoad();
            }),
            (C.prototype.next = C.prototype.slickNext =
              function () {
                var i = this;
                i.changeSlide({ data: { message: "next" } });
              }),
            (C.prototype.orientationChange = function () {
              var i = this;
              i.checkResponsive(), i.setPosition();
            }),
            (C.prototype.pause = C.prototype.slickPause =
              function () {
                var i = this;
                i.autoPlayClear(), (i.paused = !0);
              }),
            (C.prototype.play = C.prototype.slickPlay =
              function () {
                var i = this;
                i.autoPlay(),
                  (i.options.autoplay = !0),
                  (i.paused = !1),
                  (i.focussed = !1),
                  (i.interrupted = !1);
              }),
            (C.prototype.postSlide = function (i) {
              var s = this;
              if (
                !s.unslicked &&
                (s.$slider.trigger("afterChange", [s, i]),
                (s.animating = !1),
                s.slideCount > s.options.slidesToShow && s.setPosition(),
                (s.swipeLeft = null),
                s.options.autoplay && s.autoPlay(),
                s.options.accessibility === !0 &&
                  (s.initADA(), s.options.focusOnChange))
              ) {
                var c = S(s.$slides.get(s.currentSlide));
                c.attr("tabindex", 0).focus();
              }
            }),
            (C.prototype.prev = C.prototype.slickPrev =
              function () {
                var i = this;
                i.changeSlide({ data: { message: "previous" } });
              }),
            (C.prototype.preventDefault = function (i) {
              i.preventDefault();
            }),
            (C.prototype.progressiveLazyLoad = function (i) {
              i = i || 1;
              var s = this,
                c = S("img[data-lazy]", s.$slider),
                p,
                g,
                D,
                H,
                B;
              c.length
                ? ((p = c.first()),
                  (g = p.attr("data-lazy")),
                  (D = p.attr("data-srcset")),
                  (H = p.attr("data-sizes") || s.$slider.attr("data-sizes")),
                  (B = document.createElement("img")),
                  (B.onload = function () {
                    D && (p.attr("srcset", D), H && p.attr("sizes", H)),
                      p
                        .attr("src", g)
                        .removeAttr("data-lazy data-srcset data-sizes")
                        .removeClass("slick-loading"),
                      s.options.adaptiveHeight === !0 && s.setPosition(),
                      s.$slider.trigger("lazyLoaded", [s, p, g]),
                      s.progressiveLazyLoad();
                  }),
                  (B.onerror = function () {
                    i < 3
                      ? setTimeout(function () {
                          s.progressiveLazyLoad(i + 1);
                        }, 500)
                      : (p
                          .removeAttr("data-lazy")
                          .removeClass("slick-loading")
                          .addClass("slick-lazyload-error"),
                        s.$slider.trigger("lazyLoadError", [s, p, g]),
                        s.progressiveLazyLoad());
                  }),
                  (B.src = g))
                : s.$slider.trigger("allImagesLoaded", [s]);
            }),
            (C.prototype.refresh = function (i) {
              var s = this,
                c,
                p;
              (p = s.slideCount - s.options.slidesToShow),
                !s.options.infinite &&
                  s.currentSlide > p &&
                  (s.currentSlide = p),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (c = s.currentSlide),
                s.destroy(!0),
                S.extend(s, s.initials, { currentSlide: c }),
                s.init(),
                i ||
                  s.changeSlide({ data: { message: "index", index: c } }, !1);
            }),
            (C.prototype.registerBreakpoints = function () {
              var i = this,
                s,
                c,
                p,
                g = i.options.responsive || null;
              if (S.type(g) === "array" && g.length) {
                i.respondTo = i.options.respondTo || "window";
                for (s in g)
                  if (((p = i.breakpoints.length - 1), g.hasOwnProperty(s))) {
                    for (c = g[s].breakpoint; p >= 0; )
                      i.breakpoints[p] &&
                        i.breakpoints[p] === c &&
                        i.breakpoints.splice(p, 1),
                        p--;
                    i.breakpoints.push(c),
                      (i.breakpointSettings[c] = g[s].settings);
                  }
                i.breakpoints.sort(function (D, H) {
                  return i.options.mobileFirst ? D - H : H - D;
                });
              }
            }),
            (C.prototype.reinit = function () {
              var i = this;
              (i.$slides = i.$slideTrack
                .children(i.options.slide)
                .addClass("slick-slide")),
                (i.slideCount = i.$slides.length),
                i.currentSlide >= i.slideCount &&
                  i.currentSlide !== 0 &&
                  (i.currentSlide = i.currentSlide - i.options.slidesToScroll),
                i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
                i.registerBreakpoints(),
                i.setProps(),
                i.setupInfinite(),
                i.buildArrows(),
                i.updateArrows(),
                i.initArrowEvents(),
                i.buildDots(),
                i.updateDots(),
                i.initDotEvents(),
                i.cleanUpSlideEvents(),
                i.initSlideEvents(),
                i.checkResponsive(!1, !0),
                i.options.focusOnSelect === !0 &&
                  S(i.$slideTrack)
                    .children()
                    .on("click.slick", i.selectHandler),
                i.setSlideClasses(
                  typeof i.currentSlide == "number" ? i.currentSlide : 0
                ),
                i.setPosition(),
                i.focusHandler(),
                (i.paused = !i.options.autoplay),
                i.autoPlay(),
                i.$slider.trigger("reInit", [i]);
            }),
            (C.prototype.resize = function () {
              var i = this;
              S(window).width() !== i.windowWidth &&
                (clearTimeout(i.windowDelay),
                (i.windowDelay = window.setTimeout(function () {
                  (i.windowWidth = S(window).width()),
                    i.checkResponsive(),
                    i.unslicked || i.setPosition();
                }, 50)));
            }),
            (C.prototype.removeSlide = C.prototype.slickRemove =
              function (i, s, c) {
                var p = this;
                if (
                  (typeof i == "boolean"
                    ? ((s = i), (i = s === !0 ? 0 : p.slideCount - 1))
                    : (i = s === !0 ? --i : i),
                  p.slideCount < 1 || i < 0 || i > p.slideCount - 1)
                )
                  return !1;
                p.unload(),
                  c === !0
                    ? p.$slideTrack.children().remove()
                    : p.$slideTrack.children(this.options.slide).eq(i).remove(),
                  (p.$slides = p.$slideTrack.children(this.options.slide)),
                  p.$slideTrack.children(this.options.slide).detach(),
                  p.$slideTrack.append(p.$slides),
                  (p.$slidesCache = p.$slides),
                  p.reinit();
              }),
            (C.prototype.setCSS = function (i) {
              var s = this,
                c = {},
                p,
                g;
              s.options.rtl === !0 && (i = -i),
                (p = s.positionProp == "left" ? Math.ceil(i) + "px" : "0px"),
                (g = s.positionProp == "top" ? Math.ceil(i) + "px" : "0px"),
                (c[s.positionProp] = i),
                s.transformsEnabled === !1
                  ? s.$slideTrack.css(c)
                  : ((c = {}),
                    s.cssTransitions === !1
                      ? ((c[s.animType] = "translate(" + p + ", " + g + ")"),
                        s.$slideTrack.css(c))
                      : ((c[s.animType] =
                          "translate3d(" + p + ", " + g + ", 0px)"),
                        s.$slideTrack.css(c)));
            }),
            (C.prototype.setDimensions = function () {
              var i = this;
              i.options.vertical === !1
                ? i.options.centerMode === !0 &&
                  i.$list.css({ padding: "0px " + i.options.centerPadding })
                : (i.$list.height(
                    i.$slides.first().outerHeight(!0) * i.options.slidesToShow
                  ),
                  i.options.centerMode === !0 &&
                    i.$list.css({ padding: i.options.centerPadding + " 0px" })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                i.options.vertical === !1 && i.options.variableWidth === !1
                  ? ((i.slideWidth = Math.ceil(
                      i.listWidth / i.options.slidesToShow
                    )),
                    i.$slideTrack.width(
                      Math.ceil(
                        i.slideWidth *
                          i.$slideTrack.children(".slick-slide").length
                      )
                    ))
                  : i.options.variableWidth === !0
                  ? i.$slideTrack.width(5e3 * i.slideCount)
                  : ((i.slideWidth = Math.ceil(i.listWidth)),
                    i.$slideTrack.height(
                      Math.ceil(
                        i.$slides.first().outerHeight(!0) *
                          i.$slideTrack.children(".slick-slide").length
                      )
                    ));
              var s =
                i.$slides.first().outerWidth(!0) - i.$slides.first().width();
              i.options.variableWidth === !1 &&
                i.$slideTrack.children(".slick-slide").width(i.slideWidth - s);
            }),
            (C.prototype.setFade = function () {
              var i = this,
                s;
              i.$slides.each(function (c, p) {
                (s = i.slideWidth * c * -1),
                  i.options.rtl === !0
                    ? S(p).css({
                        position: "relative",
                        right: s,
                        top: 0,
                        zIndex: i.options.zIndex - 2,
                        opacity: 0,
                      })
                    : S(p).css({
                        position: "relative",
                        left: s,
                        top: 0,
                        zIndex: i.options.zIndex - 2,
                        opacity: 0,
                      });
              }),
                i.$slides
                  .eq(i.currentSlide)
                  .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
            }),
            (C.prototype.setHeight = function () {
              var i = this;
              if (
                i.options.slidesToShow === 1 &&
                i.options.adaptiveHeight === !0 &&
                i.options.vertical === !1
              ) {
                var s = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", s);
              }
            }),
            (C.prototype.setOption = C.prototype.slickSetOption =
              function () {
                var i = this,
                  s,
                  c,
                  p,
                  g,
                  D = !1,
                  H;
                if (
                  (S.type(arguments[0]) === "object"
                    ? ((p = arguments[0]), (D = arguments[1]), (H = "multiple"))
                    : S.type(arguments[0]) === "string" &&
                      ((p = arguments[0]),
                      (g = arguments[1]),
                      (D = arguments[2]),
                      arguments[0] === "responsive" &&
                      S.type(arguments[1]) === "array"
                        ? (H = "responsive")
                        : typeof arguments[1] != "undefined" && (H = "single")),
                  H === "single")
                )
                  i.options[p] = g;
                else if (H === "multiple")
                  S.each(p, function (B, E) {
                    i.options[B] = E;
                  });
                else if (H === "responsive")
                  for (c in g)
                    if (S.type(i.options.responsive) !== "array")
                      i.options.responsive = [g[c]];
                    else {
                      for (s = i.options.responsive.length - 1; s >= 0; )
                        i.options.responsive[s].breakpoint ===
                          g[c].breakpoint && i.options.responsive.splice(s, 1),
                          s--;
                      i.options.responsive.push(g[c]);
                    }
                D && (i.unload(), i.reinit());
              }),
            (C.prototype.setPosition = function () {
              var i = this;
              i.setDimensions(),
                i.setHeight(),
                i.options.fade === !1
                  ? i.setCSS(i.getLeft(i.currentSlide))
                  : i.setFade(),
                i.$slider.trigger("setPosition", [i]);
            }),
            (C.prototype.setProps = function () {
              var i = this,
                s = document.body.style;
              (i.positionProp = i.options.vertical === !0 ? "top" : "left"),
                i.positionProp === "top"
                  ? i.$slider.addClass("slick-vertical")
                  : i.$slider.removeClass("slick-vertical"),
                (s.WebkitTransition !== void 0 ||
                  s.MozTransition !== void 0 ||
                  s.msTransition !== void 0) &&
                  i.options.useCSS === !0 &&
                  (i.cssTransitions = !0),
                i.options.fade &&
                  (typeof i.options.zIndex == "number"
                    ? i.options.zIndex < 3 && (i.options.zIndex = 3)
                    : (i.options.zIndex = i.defaults.zIndex)),
                s.OTransform !== void 0 &&
                  ((i.animType = "OTransform"),
                  (i.transformType = "-o-transform"),
                  (i.transitionType = "OTransition"),
                  s.perspectiveProperty === void 0 &&
                    s.webkitPerspective === void 0 &&
                    (i.animType = !1)),
                s.MozTransform !== void 0 &&
                  ((i.animType = "MozTransform"),
                  (i.transformType = "-moz-transform"),
                  (i.transitionType = "MozTransition"),
                  s.perspectiveProperty === void 0 &&
                    s.MozPerspective === void 0 &&
                    (i.animType = !1)),
                s.webkitTransform !== void 0 &&
                  ((i.animType = "webkitTransform"),
                  (i.transformType = "-webkit-transform"),
                  (i.transitionType = "webkitTransition"),
                  s.perspectiveProperty === void 0 &&
                    s.webkitPerspective === void 0 &&
                    (i.animType = !1)),
                s.msTransform !== void 0 &&
                  ((i.animType = "msTransform"),
                  (i.transformType = "-ms-transform"),
                  (i.transitionType = "msTransition"),
                  s.msTransform === void 0 && (i.animType = !1)),
                s.transform !== void 0 &&
                  i.animType !== !1 &&
                  ((i.animType = "transform"),
                  (i.transformType = "transform"),
                  (i.transitionType = "transition")),
                (i.transformsEnabled =
                  i.options.useTransform &&
                  i.animType !== null &&
                  i.animType !== !1);
            }),
            (C.prototype.setSlideClasses = function (i) {
              var s = this,
                c,
                p,
                g,
                D;
              if (
                ((p = s.$slider
                  .find(".slick-slide")
                  .removeClass("slick-active slick-center slick-current")
                  .attr("aria-hidden", "true")),
                s.$slides.eq(i).addClass("slick-current"),
                s.options.centerMode === !0)
              ) {
                var H = s.options.slidesToShow % 2 === 0 ? 1 : 0;
                (c = Math.floor(s.options.slidesToShow / 2)),
                  s.options.infinite === !0 &&
                    (i >= c && i <= s.slideCount - 1 - c
                      ? s.$slides
                          .slice(i - c + H, i + c + 1)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : ((g = s.options.slidesToShow + i),
                        p
                          .slice(g - c + 1 + H, g + c + 2)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")),
                    i === 0
                      ? p
                          .eq(p.length - 1 - s.options.slidesToShow)
                          .addClass("slick-center")
                      : i === s.slideCount - 1 &&
                        p.eq(s.options.slidesToShow).addClass("slick-center")),
                  s.$slides.eq(i).addClass("slick-center");
              } else
                i >= 0 && i <= s.slideCount - s.options.slidesToShow
                  ? s.$slides
                      .slice(i, i + s.options.slidesToShow)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : p.length <= s.options.slidesToShow
                  ? p.addClass("slick-active").attr("aria-hidden", "false")
                  : ((D = s.slideCount % s.options.slidesToShow),
                    (g =
                      s.options.infinite === !0
                        ? s.options.slidesToShow + i
                        : i),
                    s.options.slidesToShow == s.options.slidesToScroll &&
                    s.slideCount - i < s.options.slidesToShow
                      ? p
                          .slice(g - (s.options.slidesToShow - D), g + D)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : p
                          .slice(g, g + s.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false"));
              (s.options.lazyLoad === "ondemand" ||
                s.options.lazyLoad === "anticipated") &&
                s.lazyLoad();
            }),
            (C.prototype.setupInfinite = function () {
              var i = this,
                s,
                c,
                p;
              if (
                (i.options.fade === !0 && (i.options.centerMode = !1),
                i.options.infinite === !0 &&
                  i.options.fade === !1 &&
                  ((c = null), i.slideCount > i.options.slidesToShow))
              ) {
                for (
                  i.options.centerMode === !0
                    ? (p = i.options.slidesToShow + 1)
                    : (p = i.options.slidesToShow),
                    s = i.slideCount;
                  s > i.slideCount - p;
                  s -= 1
                )
                  (c = s - 1),
                    S(i.$slides[c])
                      .clone(!0)
                      .attr("id", "")
                      .attr("data-slick-index", c - i.slideCount)
                      .prependTo(i.$slideTrack)
                      .addClass("slick-cloned");
                for (s = 0; s < p + i.slideCount; s += 1)
                  (c = s),
                    S(i.$slides[c])
                      .clone(!0)
                      .attr("id", "")
                      .attr("data-slick-index", c + i.slideCount)
                      .appendTo(i.$slideTrack)
                      .addClass("slick-cloned");
                i.$slideTrack
                  .find(".slick-cloned")
                  .find("[id]")
                  .each(function () {
                    S(this).attr("id", "");
                  });
              }
            }),
            (C.prototype.interrupt = function (i) {
              var s = this;
              i || s.autoPlay(), (s.interrupted = i);
            }),
            (C.prototype.selectHandler = function (i) {
              var s = this,
                c = S(i.target).is(".slick-slide")
                  ? S(i.target)
                  : S(i.target).parents(".slick-slide"),
                p = parseInt(c.attr("data-slick-index"));
              if ((p || (p = 0), s.slideCount <= s.options.slidesToShow)) {
                s.slideHandler(p, !1, !0);
                return;
              }
              s.slideHandler(p);
            }),
            (C.prototype.slideHandler = function (i, s, c) {
              var p,
                g,
                D,
                H,
                B = null,
                E = this,
                N;
              if (
                ((s = s || !1),
                !(E.animating === !0 && E.options.waitForAnimate === !0) &&
                  !(E.options.fade === !0 && E.currentSlide === i))
              ) {
                if (
                  (s === !1 && E.asNavFor(i),
                  (p = i),
                  (B = E.getLeft(p)),
                  (H = E.getLeft(E.currentSlide)),
                  (E.currentLeft = E.swipeLeft === null ? H : E.swipeLeft),
                  E.options.infinite === !1 &&
                    E.options.centerMode === !1 &&
                    (i < 0 || i > E.getDotCount() * E.options.slidesToScroll))
                ) {
                  E.options.fade === !1 &&
                    ((p = E.currentSlide),
                    c !== !0 && E.slideCount > E.options.slidesToShow
                      ? E.animateSlide(H, function () {
                          E.postSlide(p);
                        })
                      : E.postSlide(p));
                  return;
                } else if (
                  E.options.infinite === !1 &&
                  E.options.centerMode === !0 &&
                  (i < 0 || i > E.slideCount - E.options.slidesToScroll)
                ) {
                  E.options.fade === !1 &&
                    ((p = E.currentSlide),
                    c !== !0 && E.slideCount > E.options.slidesToShow
                      ? E.animateSlide(H, function () {
                          E.postSlide(p);
                        })
                      : E.postSlide(p));
                  return;
                }
                if (
                  (E.options.autoplay && clearInterval(E.autoPlayTimer),
                  p < 0
                    ? E.slideCount % E.options.slidesToScroll !== 0
                      ? (g =
                          E.slideCount -
                          (E.slideCount % E.options.slidesToScroll))
                      : (g = E.slideCount + p)
                    : p >= E.slideCount
                    ? E.slideCount % E.options.slidesToScroll !== 0
                      ? (g = 0)
                      : (g = p - E.slideCount)
                    : (g = p),
                  (E.animating = !0),
                  E.$slider.trigger("beforeChange", [E, E.currentSlide, g]),
                  (D = E.currentSlide),
                  (E.currentSlide = g),
                  E.setSlideClasses(E.currentSlide),
                  E.options.asNavFor &&
                    ((N = E.getNavTarget()),
                    (N = N.slick("getSlick")),
                    N.slideCount <= N.options.slidesToShow &&
                      N.setSlideClasses(E.currentSlide)),
                  E.updateDots(),
                  E.updateArrows(),
                  E.options.fade === !0)
                ) {
                  c !== !0
                    ? (E.fadeSlideOut(D),
                      E.fadeSlide(g, function () {
                        E.postSlide(g);
                      }))
                    : E.postSlide(g),
                    E.animateHeight();
                  return;
                }
                c !== !0 && E.slideCount > E.options.slidesToShow
                  ? E.animateSlide(B, function () {
                      E.postSlide(g);
                    })
                  : E.postSlide(g);
              }
            }),
            (C.prototype.startLoad = function () {
              var i = this;
              i.options.arrows === !0 &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.hide(), i.$nextArrow.hide()),
                i.options.dots === !0 &&
                  i.slideCount > i.options.slidesToShow &&
                  i.$dots.hide(),
                i.$slider.addClass("slick-loading");
            }),
            (C.prototype.swipeDirection = function () {
              var i,
                s,
                c,
                p,
                g = this;
              return (
                (i = g.touchObject.startX - g.touchObject.curX),
                (s = g.touchObject.startY - g.touchObject.curY),
                (c = Math.atan2(s, i)),
                (p = Math.round((c * 180) / Math.PI)),
                p < 0 && (p = 360 - Math.abs(p)),
                (p <= 45 && p >= 0) || (p <= 360 && p >= 315)
                  ? g.options.rtl === !1
                    ? "left"
                    : "right"
                  : p >= 135 && p <= 225
                  ? g.options.rtl === !1
                    ? "right"
                    : "left"
                  : g.options.verticalSwiping === !0
                  ? p >= 35 && p <= 135
                    ? "down"
                    : "up"
                  : "vertical"
              );
            }),
            (C.prototype.swipeEnd = function (i) {
              var s = this,
                c,
                p;
              if (((s.dragging = !1), (s.swiping = !1), s.scrolling))
                return (s.scrolling = !1), !1;
              if (
                ((s.interrupted = !1),
                (s.shouldClick = !(s.touchObject.swipeLength > 10)),
                s.touchObject.curX === void 0)
              )
                return !1;
              if (
                (s.touchObject.edgeHit === !0 &&
                  s.$slider.trigger("edge", [s, s.swipeDirection()]),
                s.touchObject.swipeLength >= s.touchObject.minSwipe)
              ) {
                switch (((p = s.swipeDirection()), p)) {
                  case "left":
                  case "down":
                    (c = s.options.swipeToSlide
                      ? s.checkNavigable(s.currentSlide + s.getSlideCount())
                      : s.currentSlide + s.getSlideCount()),
                      (s.currentDirection = 0);
                    break;
                  case "right":
                  case "up":
                    (c = s.options.swipeToSlide
                      ? s.checkNavigable(s.currentSlide - s.getSlideCount())
                      : s.currentSlide - s.getSlideCount()),
                      (s.currentDirection = 1);
                    break;
                  default:
                }
                p != "vertical" &&
                  (s.slideHandler(c),
                  (s.touchObject = {}),
                  s.$slider.trigger("swipe", [s, p]));
              } else
                s.touchObject.startX !== s.touchObject.curX &&
                  (s.slideHandler(s.currentSlide), (s.touchObject = {}));
            }),
            (C.prototype.swipeHandler = function (i) {
              var s = this;
              if (
                !(
                  s.options.swipe === !1 ||
                  ("ontouchend" in document && s.options.swipe === !1)
                ) &&
                !(s.options.draggable === !1 && i.type.indexOf("mouse") !== -1)
              )
                switch (
                  ((s.touchObject.fingerCount =
                    i.originalEvent && i.originalEvent.touches !== void 0
                      ? i.originalEvent.touches.length
                      : 1),
                  (s.touchObject.minSwipe =
                    s.listWidth / s.options.touchThreshold),
                  s.options.verticalSwiping === !0 &&
                    (s.touchObject.minSwipe =
                      s.listHeight / s.options.touchThreshold),
                  i.data.action)
                ) {
                  case "start":
                    s.swipeStart(i);
                    break;
                  case "move":
                    s.swipeMove(i);
                    break;
                  case "end":
                    s.swipeEnd(i);
                    break;
                }
            }),
            (C.prototype.swipeMove = function (i) {
              var s = this,
                c = !1,
                p,
                g,
                D,
                H,
                B,
                E;
              if (
                ((B =
                  i.originalEvent !== void 0 ? i.originalEvent.touches : null),
                !s.dragging || s.scrolling || (B && B.length !== 1))
              )
                return !1;
              if (
                ((p = s.getLeft(s.currentSlide)),
                (s.touchObject.curX = B !== void 0 ? B[0].pageX : i.clientX),
                (s.touchObject.curY = B !== void 0 ? B[0].pageY : i.clientY),
                (s.touchObject.swipeLength = Math.round(
                  Math.sqrt(
                    Math.pow(s.touchObject.curX - s.touchObject.startX, 2)
                  )
                )),
                (E = Math.round(
                  Math.sqrt(
                    Math.pow(s.touchObject.curY - s.touchObject.startY, 2)
                  )
                )),
                !s.options.verticalSwiping && !s.swiping && E > 4)
              )
                return (s.scrolling = !0), !1;
              if (
                (s.options.verticalSwiping === !0 &&
                  (s.touchObject.swipeLength = E),
                (g = s.swipeDirection()),
                i.originalEvent !== void 0 &&
                  s.touchObject.swipeLength > 4 &&
                  ((s.swiping = !0), i.preventDefault()),
                (H =
                  (s.options.rtl === !1 ? 1 : -1) *
                  (s.touchObject.curX > s.touchObject.startX ? 1 : -1)),
                s.options.verticalSwiping === !0 &&
                  (H = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
                (D = s.touchObject.swipeLength),
                (s.touchObject.edgeHit = !1),
                s.options.infinite === !1 &&
                  ((s.currentSlide === 0 && g === "right") ||
                    (s.currentSlide >= s.getDotCount() && g === "left")) &&
                  ((D = s.touchObject.swipeLength * s.options.edgeFriction),
                  (s.touchObject.edgeHit = !0)),
                s.options.vertical === !1
                  ? (s.swipeLeft = p + D * H)
                  : (s.swipeLeft =
                      p + D * (s.$list.height() / s.listWidth) * H),
                s.options.verticalSwiping === !0 && (s.swipeLeft = p + D * H),
                s.options.fade === !0 || s.options.touchMove === !1)
              )
                return !1;
              if (s.animating === !0) return (s.swipeLeft = null), !1;
              s.setCSS(s.swipeLeft);
            }),
            (C.prototype.swipeStart = function (i) {
              var s = this,
                c;
              if (
                ((s.interrupted = !0),
                s.touchObject.fingerCount !== 1 ||
                  s.slideCount <= s.options.slidesToShow)
              )
                return (s.touchObject = {}), !1;
              i.originalEvent !== void 0 &&
                i.originalEvent.touches !== void 0 &&
                (c = i.originalEvent.touches[0]),
                (s.touchObject.startX = s.touchObject.curX =
                  c !== void 0 ? c.pageX : i.clientX),
                (s.touchObject.startY = s.touchObject.curY =
                  c !== void 0 ? c.pageY : i.clientY),
                (s.dragging = !0);
            }),
            (C.prototype.unfilterSlides = C.prototype.slickUnfilter =
              function () {
                var i = this;
                i.$slidesCache !== null &&
                  (i.unload(),
                  i.$slideTrack.children(this.options.slide).detach(),
                  i.$slidesCache.appendTo(i.$slideTrack),
                  i.reinit());
              }),
            (C.prototype.unload = function () {
              var i = this;
              S(".slick-cloned", i.$slider).remove(),
                i.$dots && i.$dots.remove(),
                i.$prevArrow &&
                  i.htmlExpr.test(i.options.prevArrow) &&
                  i.$prevArrow.remove(),
                i.$nextArrow &&
                  i.htmlExpr.test(i.options.nextArrow) &&
                  i.$nextArrow.remove(),
                i.$slides
                  .removeClass(
                    "slick-slide slick-active slick-visible slick-current"
                  )
                  .attr("aria-hidden", "true")
                  .css("width", "");
            }),
            (C.prototype.unslick = function (i) {
              var s = this;
              s.$slider.trigger("unslick", [s, i]), s.destroy();
            }),
            (C.prototype.updateArrows = function () {
              var i = this,
                s;
              (s = Math.floor(i.options.slidesToShow / 2)),
                i.options.arrows === !0 &&
                  i.slideCount > i.options.slidesToShow &&
                  !i.options.infinite &&
                  (i.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"),
                  i.$nextArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"),
                  i.currentSlide === 0
                    ? (i.$prevArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"),
                      i.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"))
                    : ((i.currentSlide >=
                        i.slideCount - i.options.slidesToShow &&
                        i.options.centerMode === !1) ||
                        (i.currentSlide >= i.slideCount - 1 &&
                          i.options.centerMode === !0)) &&
                      (i.$nextArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"),
                      i.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false")));
            }),
            (C.prototype.updateDots = function () {
              var i = this;
              i.$dots !== null &&
                (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots
                  .find("li")
                  .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                  .addClass("slick-active"));
            }),
            (C.prototype.visibility = function () {
              var i = this;
              i.options.autoplay &&
                (document[i.hidden]
                  ? (i.interrupted = !0)
                  : (i.interrupted = !1));
            }),
            (S.fn.slick = function () {
              var i = this,
                s = arguments[0],
                c = Array.prototype.slice.call(arguments, 1),
                p = i.length,
                g,
                D;
              for (g = 0; g < p; g++)
                if (
                  (typeof s == "object" || typeof s == "undefined"
                    ? (i[g].slick = new C(i[g], s))
                    : (D = i[g].slick[s].apply(i[g].slick, c)),
                  typeof D != "undefined")
                )
                  return D;
              return i;
            });
        });
      },
    },
    (ye) => {
      var be = (re) => ye((ye.s = re)),
        ce = be(1541);
    },
  ]);
})();
