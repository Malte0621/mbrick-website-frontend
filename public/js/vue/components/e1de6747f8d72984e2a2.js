(() => {
  (self.webpackChunk = self.webpackChunk || []).push([
    [397],
    {
      5610: () => {},
      3744: (S, p) => {
        "use strict";
        var e;
        (e = { value: !0 }),
          (p.Z = (t, i) => {
            const d = t.__vccOpts || t;
            for (const [v, h] of i) d[v] = h;
            return d;
          });
      },
      3778: (S, p, e) => {
        "use strict";
        e.r(p), e.d(p, { default: () => tt });
        var t = e(3518),
          i = e(2861),
          d = e(8848),
          v = e(9929),
          h = e(8393);
        const x = (m) => (
            (0, t.dD)("data-v-0647090f"), (m = m()), (0, t.Cn)(), m
          ),
          A = { class: "col-10-12 push-1-12 new-theme" },
          I = x(() =>
            (0, t._)(
              "div",
              { class: "header" },
              [
                (0, t.Uk)(" DESIGNER MENU "),
                (0, t._)(
                  "a",
                  {
                    href: "/shop",
                    class: "button clear",
                    style: { float: "right" },
                  },
                  "Cancel"
                ),
              ],
              -1
            )
          ),
          U = { class: "col-1-2 left-container" },
          C = { class: "col-1-2", style: { "padding-left": "20px" } },
          D = { class: "center-text", style: { margin: "0 30px" } },
          E = ["src"],
          H = { style: { margin: "0 20px" } },
          b = {
            class: "col-2-3",
            style: { "margin-top": "20px", position: "relative" },
          },
          w = { class: "mb-10" },
          Z = {
            class: "button yellow width-100 upload-file",
            style: { padding: "10px 18px" },
            for: "upload-file-img",
          },
          W = x(() =>
            (0, t._)(
              "div",
              null,
              [
                (0, t._)(
                  "a",
                  {
                    class: "button clear width-100",
                    href: "https://multi-brick.com/default/template.png",
                  },
                  " Get Template "
                ),
              ],
              -1
            )
          ),
          F = {
            style: {
              position: "absolute",
              "margin-top": "5px",
              "margin-left": "-8px",
            },
          },
          L = { class: "col-1-3 center-text" },
          P = { class: "checkerboard mb-10" },
          j = ["src"],
          z = { class: "ellipsis" },
          R = (0, t.aZ)({
            __name: "UploadItem",
            setup(m) {
              const r = (0, t.iH)("shirt"),
                dt = (0, t.qj)({
                  leftArm: !1,
                  rightArm: !1,
                  torso: !1,
                  leftLeg: !1,
                  rightLeg: !1,
                }),
                rt = (0, t.iH)(!1),
                u = (0, t.iH)({}),
                g = (0, t.iH)(""),
                n = (0, t.iH)(""),
                y = (0, t.iH)("");
              function et(l) {
                const s = l.target.files;
                if (!s || s.length == 0) return;
                u.value = s.item(0);
                let a = new FileReader();
                (a.onload = (c) => {
                  var T;
                  return (g.value = (T = c.target) == null ? void 0 : T.result);
                }),
                  a.readAsDataURL(s.item(0));
              }
              function st(l) {
                let s = l.currentTarget,
                  a = s.naturalHeight,
                  c = s.naturalWidth;
                if (a != c) {
                  n.value = "Template must be square";
                  return;
                }
                if (a < 128) {
                  n.value = "Template must be greater than 128x128";
                  return;
                }
                if (a > 1024) {
                  n.value = "Template must be smaller than 1024x1024";
                  return;
                }
                (n.value = ""), _();
              }
              function _() {
                if (n.value || !u.value.text) return;
                let l = new FormData();
                l.append("type", r.value),
                  l.append("texture", u.value),
                  i.Z.post("/api/shop/render/preview", l, {
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                    .then(({ data: s }) => {
                      y.value = s;
                    })
                    .catch(d.s_);
              }
              function lt(l) {
                let s = new FormData();
                s.append("title", l.title),
                  s.append("type", r.value),
                  s.append("file", u.value),
                  i.Z.post("/shop/create/upload", s, {
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                    .then(({ data: a }) => {
                      at(l, a.success);
                    })
                    .catch(d.s_);
              }
              function at(l, s) {
                i.Z.post(`/shop/${s}/edit`, {
                  title: l.title,
                  description: l.description,
                  bucks: l.bucks,
                  bits: l.bits,
                  offsale: l.offsale,
                  free: l.free,
                })
                  .then(() => {
                    window.location.href = `/shop/${s}`;
                  })
                  .catch(() => {
                    window.location.href = `/shop/${s}`;
                  });
              }
              return (
                (0, t.YP)(r, () => {
                  _();
                }),
                (l, s) => {
                  var a;
                  return (
                    (0, t.wg)(),
                    (0, t.iD)("div", A, [
                      I,
                      (0, t._)("div", U, [
                        (0, t.Wm)(
                          h.Z,
                          {
                            "edit-page": !1,
                            "external-valid":
                              n.value.length > 0 || g.value.length == 0,
                            modelValue: r.value,
                            "onUpdate:modelValue":
                              s[0] || (s[0] = (c) => (r.value = c)),
                            onSaved: lt,
                          },
                          null,
                          8,
                          ["external-valid", "modelValue"]
                        ),
                      ]),
                      (0, t._)("div", C, [
                        (0, t._)("div", D, [
                          (0, t._)(
                            "img",
                            {
                              style: { "margin-bottom": "20px" },
                              class: (0, t.C_)([
                                "preview-img",
                                { empty: !y.value },
                              ]),
                              src: y.value,
                            },
                            null,
                            10,
                            E
                          ),
                          (0, t._)("div", H, [
                            (0, t._)("div", b, [
                              (0, t._)("div", w, [
                                (0, t._)("label", Z, [
                                  (0, t.Wm)(v.default, {
                                    class: "svg-icon",
                                    square: "20",
                                    svg: "shop/upload/template.svg",
                                  }),
                                  (0, t.Uk)(" Open Template "),
                                ]),
                                (0, t._)(
                                  "input",
                                  {
                                    onChange: et,
                                    name: "img",
                                    style: { display: "none" },
                                    id: "upload-file-img",
                                    accept: "image/jpeg, image/png",
                                    type: "file",
                                  },
                                  null,
                                  32
                                ),
                              ]),
                              W,
                              (0, t.wy)(
                                (0, t._)(
                                  "div",
                                  F,
                                  [
                                    (0, t.Wm)(v.default, {
                                      class: "svg-icon svg-notif-icon",
                                      square: "16",
                                      svg: "notifications/error.svg",
                                    }),
                                    (0, t._)(
                                      "span",
                                      null,
                                      (0, t.zw)(n.value),
                                      1
                                    ),
                                  ],
                                  512
                                ),
                                [[t.F8, n.value]]
                              ),
                            ]),
                            (0, t._)("div", L, [
                              (0, t._)("div", P, [
                                (0, t._)(
                                  "img",
                                  {
                                    style: { width: "100%" },
                                    onLoad: st,
                                    src: g.value,
                                  },
                                  null,
                                  40,
                                  j
                                ),
                              ]),
                              (0, t._)(
                                "div",
                                z,
                                (0, t.zw)(
                                  (a = u.value) == null ? void 0 : a.name
                                ),
                                1
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ])
                  );
                }
              );
            },
          });
        var V = e(3379),
          $ = e.n(V),
          B = e(7795),
          G = e.n(B),
          N = e(569),
          O = e.n(N),
          M = e(3565),
          Y = e.n(M),
          J = e(9216),
          K = e.n(J),
          Q = e(4589),
          X = e.n(Q),
          k = e(5610),
          f = e.n(k),
          o = {};
        (o.styleTagTransform = X()),
          (o.setAttributes = Y()),
          (o.insert = O().bind(null, "head")),
          (o.domAPI = G()),
          (o.insertStyleElement = K());
        var nt = $()(f(), o);
        const ot = f() && f().locals ? f().locals : void 0;
        var q = e(3744);
        const tt = (0, q.Z)(R, [["__scopeId", "data-v-0647090f"]]);
      },
    },
  ]);
})();
