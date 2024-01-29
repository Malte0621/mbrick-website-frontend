(() => {
  (self.webpackChunk = self.webpackChunk || []).push([
    [311],
    {
      362: (i, u, t) => {
        "use strict";
        t.d(u, {
          Eo: () => r,
          Kg: () => e,
          Zr: () => n,
          kX: () => l,
          t3: () => d,
          tU: () => a,
        });
        function e(s) {
          const o = s instanceof Date ? s : new Date(s),
            h = new Intl.RelativeTimeFormat("en"),
            f = {
              years: 3600 * 24 * 365,
              months: 3600 * 24 * 30,
              weeks: 3600 * 24 * 7,
              days: 3600 * 24,
              hours: 3600,
              minutes: 60,
              seconds: 1,
            },
            m = (o.getTime() - Date.now()) / 1e3;
          for (let c in f)
            if (f[c] < Math.abs(m)) {
              const p = m / f[c];
              return h.format(Math.round(p), c);
            }
          return "Never";
        }
        function l(s, o) {
          return new Date(s).toLocaleDateString("en-gb", o);
        }
        function n(s) {
          let o = new Date(s);
          return `${o.toLocaleDateString("en-gb")} ${o.toLocaleTimeString(
            "en-us"
          )}`;
        }
        function r(s) {
          return new Intl.DateTimeFormat("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hourCycle: "h12",
          }).format(new Date(s));
        }
        function a(s) {
          return new Intl.NumberFormat("en", { notation: "compact" }).format(s);
        }
        function d(s) {
          return new Intl.NumberFormat("en").format(s);
        }
      },
      8882: () => {},
      3379: (i) => {
        "use strict";
        var u = [];
        function t(n) {
          for (var r = -1, a = 0; a < u.length; a++)
            if (u[a].identifier === n) {
              r = a;
              break;
            }
          return r;
        }
        function e(n, r) {
          for (var a = {}, d = [], s = 0; s < n.length; s++) {
            var o = n[s],
              h = r.base ? o[0] + r.base : o[0],
              f = a[h] || 0,
              m = "".concat(h, " ").concat(f);
            a[h] = f + 1;
            var c = t(m),
              p = {
                css: o[1],
                media: o[2],
                sourceMap: o[3],
                supports: o[4],
                layer: o[5],
              };
            if (c !== -1) u[c].references++, u[c].updater(p);
            else {
              var y = l(p, r);
              (r.byIndex = s),
                u.splice(s, 0, { identifier: m, updater: y, references: 1 });
            }
            d.push(m);
          }
          return d;
        }
        function l(n, r) {
          var a = r.domAPI(r);
          a.update(n);
          var d = function (o) {
            if (o) {
              if (
                o.css === n.css &&
                o.media === n.media &&
                o.sourceMap === n.sourceMap &&
                o.supports === n.supports &&
                o.layer === n.layer
              )
                return;
              a.update((n = o));
            } else a.remove();
          };
          return d;
        }
        i.exports = function (n, r) {
          (r = r || {}), (n = n || []);
          var a = e(n, r);
          return function (s) {
            s = s || [];
            for (var o = 0; o < a.length; o++) {
              var h = a[o],
                f = t(h);
              u[f].references--;
            }
            for (var m = e(s, r), c = 0; c < a.length; c++) {
              var p = a[c],
                y = t(p);
              u[y].references === 0 && (u[y].updater(), u.splice(y, 1));
            }
            a = m;
          };
        };
      },
      569: (i) => {
        "use strict";
        var u = {};
        function t(l) {
          if (typeof u[l] == "undefined") {
            var n = document.querySelector(l);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (r) {
                n = null;
              }
            u[l] = n;
          }
          return u[l];
        }
        function e(l, n) {
          var r = t(l);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        }
        i.exports = e;
      },
      9216: (i) => {
        "use strict";
        function u(t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        }
        i.exports = u;
      },
      3565: (i, u, t) => {
        "use strict";
        function e(l) {
          var n = t.nc;
          n && l.setAttribute("nonce", n);
        }
        i.exports = e;
      },
      7795: (i) => {
        "use strict";
        function u(l, n, r) {
          var a = "";
          r.supports && (a += "@supports (".concat(r.supports, ") {")),
            r.media && (a += "@media ".concat(r.media, " {"));
          var d = typeof r.layer != "undefined";
          d &&
            (a += "@layer".concat(
              r.layer.length > 0 ? " ".concat(r.layer) : "",
              " {"
            )),
            (a += r.css),
            d && (a += "}"),
            r.media && (a += "}"),
            r.supports && (a += "}");
          var s = r.sourceMap;
          s &&
            typeof btoa != "undefined" &&
            (a += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
              " */"
            )),
            n.styleTagTransform(a, l, n.options);
        }
        function t(l) {
          if (l.parentNode === null) return !1;
          l.parentNode.removeChild(l);
        }
        function e(l) {
          if (typeof document == "undefined")
            return { update: function () {}, remove: function () {} };
          var n = l.insertStyleElement(l);
          return {
            update: function (a) {
              u(n, l, a);
            },
            remove: function () {
              t(n);
            },
          };
        }
        i.exports = e;
      },
      4589: (i) => {
        "use strict";
        function u(t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        }
        i.exports = u;
      },
      1311: (i, u, t) => {
        "use strict";
        t.r(u), t.d(u, { default: () => Z });
        var e = t(3518),
          l = t(2861),
          n = t(362),
          r = (B, I, g) =>
            new Promise((A, D) => {
              var x = (S) => {
                  try {
                    M(g.next(S));
                  } catch (P) {
                    D(P);
                  }
                },
                v = (S) => {
                  try {
                    M(g.throw(S));
                  } catch (P) {
                    D(P);
                  }
                },
                M = (S) =>
                  S.done ? A(S.value) : Promise.resolve(S.value).then(x, v);
              M((g = g.apply(B, I)).next());
            });
        const a = { class: "card no-rounded no-shadow flex blog-holder" },
          d = ["href"],
          s = ["src"],
          o = { key: 1, class: "feature-image no-feature flex flex-column" },
          h = { class: "info flex flex-column" },
          f = { class: "bold ellipsis title" },
          m = { class: "author ellipsis smaller-text" },
          c = "https://blog.multi-brick.com",
          p = "16a6bc5197c1f4ef1a2b9d84ae",
          y = (0, e.aZ)({
            __name: "BlogCard",
            setup(B) {
              const I = `${c}/ghost/api/content/posts/?fields=title,url,feature_image,published_at&limit=3&include=authors&key=${p}`,
                g = (0, e.iH)([]);
              function A() {
                return r(this, null, function* () {
                  let D = (yield l.Z.get(I, { withCredentials: !1 })).data
                    .posts;
                  D.forEach((x) => {
                    x.author = x.authors.map((v) => v.name).join(" & ");
                  }),
                    (g.value = D);
                });
              }
              return (
                A(),
                (D, x) => (
                  (0, e.wg)(),
                  (0, e.iD)("div", a, [
                    ((0, e.wg)(!0),
                    (0, e.iD)(
                      e.HY,
                      null,
                      (0, e.Ko)(
                        g.value,
                        (v) => (
                          (0, e.wg)(),
                          (0, e.iD)(
                            "a",
                            { class: "blog-card ellipsis", href: v.url },
                            [
                              v.feature_image !== null
                                ? ((0, e.wg)(),
                                  (0, e.iD)(
                                    "img",
                                    {
                                      key: 0,
                                      src: v.feature_image,
                                      class: "feature-image flex flex-column",
                                    },
                                    null,
                                    8,
                                    s
                                  ))
                                : ((0, e.wg)(), (0, e.iD)("div", o)),
                              (0, e._)("div", h, [
                                (0, e._)("div", f, (0, e.zw)(v.title), 1),
                                (0, e._)(
                                  "div",
                                  m,
                                  (0, e.zw)(v.author) +
                                    " \u2022 " +
                                    (0, e.zw)(
                                      (0, e.SU)(n.kX)(v.published_at, {
                                        month: "long",
                                        day: "numeric",
                                      })
                                    ),
                                  1
                                ),
                              ]),
                            ],
                            8,
                            d
                          )
                        )
                      ),
                      256
                    )),
                  ])
                )
              );
            },
          });
        var E = t(3379),
          L = t.n(E),
          N = t(7795),
          w = t.n(N),
          F = t(569),
          H = t.n(F),
          U = t(3565),
          $ = t.n(U),
          z = t(9216),
          G = t.n(z),
          K = t(4589),
          R = t.n(K),
          W = t(8882),
          C = t.n(W),
          T = {};
        (T.styleTagTransform = R()),
          (T.setAttributes = $()),
          (T.insert = H().bind(null, "head")),
          (T.domAPI = w()),
          (T.insertStyleElement = G());
        var X = L()(C(), T);
        const Y = C() && C().locals ? C().locals : void 0,
          Z = y;
      },
    },
  ]);
})();
