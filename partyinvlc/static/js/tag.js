﻿(function () {
  try {
    (function () {
      function Pe(a, c, b, d) {
        var e = this;
        return z(window, "c.i", function () {
          function f(D) {
            (D = Qe(l, m, "", D)(l, m)) && (V(D.then) ? D.then(g) : g(D));
            return D;
          }
          function g(D) {
            D &&
              (V(D)
                ? p.push(D)
                : ia(D) &&
                  x(function (N) {
                    var M = N[0];
                    N = N[1];
                    V(N) && ("u" === M ? p.push(N) : h(N, M));
                  }, Ga(D)));
          }
          function h(D, N, M) {
            e[N] = Bl(l, m, M || q, N, D);
          }
          var k,
            l = window;
          (!l || (isNaN(a) && !a)) && Ld();
          var m = Cl(a, Md, c, b, d),
            p = [],
            q = [ah, Qe, bh];
          q.unshift(Dl);
          var r = B(S, Ua),
            t = J(m);
          m.id || Ra(Na("Invalid Metrika id: " + m.id, !0));
          var y = Yc.C("counters", {});
          if (y[t]) return Db(l, t, "dc", ((k = {}), (k.key = t), k)), y[t];
          El(l, t, ch(a, c, b, d));
          y[t] = e;
          Yc.D("counters", y);
          Yc.Ea("counter", e);
          x(function (D) {
            D(l, m);
          }, Re);
          x(f, Nd);
          f(Fl);
          h(Gl(l, m, p), "destruct", [ah, bh]);
          Nb(l, E([l, r, f, 1, "a.i"], dh));
          x(f, X);
        })();
      }
      function ah(a, c, b, d) {
        return z(a, "cm." + b, d);
      }
      function bh(a, c, b, d) {
        return function () {
          var e = Ja(arguments);
          e = d.apply(void 0, e);
          return Y(e) ? Ca(a, c) : e;
        };
      }
      function Hl(a, c) {
        delete H(a).C("cok", {})[c];
      }
      function El(a, c, b) {
        a = H(a);
        var d = a.C("cok", {});
        d[c] = b;
        a.D("cok", d);
      }
      function Il(a, c) {
        var b = "" + c,
          d = { id: 1, aa: "0" },
          e = Jl(b);
        e
          ? (d.id = e)
          : -1 === lb(b, ":")
          ? ((b = Da(b)), (d.id = b))
          : ((b = b.split(":")),
            (e = b[1]),
            (d.id = Da(b[0])),
            (d.aa = Od(e) ? "1" : "0"));
        return [Ca(a, d), d];
      }
      function eh(a, c, b, d) {
        var e;
        c =
          ((e = {}),
          (e.code = [
            [
              1,
              "ym_debug",
              [
                18,
                ["a", [37, [40, "require"], "loadScript"]],
                ["b", [37, [40, "require"], "callFromWindow"]],
              ],
              [
                2,
                [
                  37,
                  [40, "a"],
                  fh + "/" + c + ".js?ver=" + wa.$a,
                  [
                    24,
                    null,
                    [],
                    [
                      3,
                      [
                        2,
                        [
                          37,
                          [40, "b"],
                          "Ya._metrika.ytmm." + c + ".init",
                          b,
                          Se(d),
                          wa.$a,
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ]),
          e);
        gh(a)(c);
      }
      function Se(a) {
        if (O(a)) return (a = B(Se, a)), lc([22], a);
        if (ia(a))
          return (
            (a = B(function (c) {
              return [c[0], Se(c[1])];
            }, Ga(a))),
            lc([23], a)
          );
        if (hh(a)) return a;
        Ra(Ka("npv"));
      }
      function Kl(a) {
        return ia(a) && O(a.code);
      }
      function Ll(a, c) {
        var b,
          d = c.slice(2),
          e = [
            ((b = {}), (b.require = { kind: 0, value: w(Ml, Ec([a, {}])) }), b),
          ];
        Te(e, lc([3], d));
      }
      function Te(a, c, b) {
        c = c.slice(1);
        a.push(b || {});
        x(function (d) {
          O(d) && 3 === d[0]
            ? Te(a, d)
            : !O(d) || (18 !== d[0] && 19 !== d[0])
            ? O(d) && 2 === d[0] && Ob(a, d[1])
            : Nl(a, d);
        }, c);
        a.pop();
      }
      function Nl(a, c) {
        var b = 18 === c[0];
        x(function (d) {
          var e = d[0],
            f = d[1];
          if (b && 1 === d.length) throw Na("mca");
          d = a[a.length - 1];
          if (Eb(d, e)) throw Na("vr");
          f = Ob(a, f);
          d[e] = { kind: b ? 0 : 1, value: f };
        }, c.slice(1));
      }
      function Ob(a, c) {
        if (hh(c)) return c;
        if (O(c) && 40 === c[0]) {
          a: {
            var b = c[1];
            for (var d = a.length; 0 < d; ) {
              var e = a[--d];
              if (Eb(e, b)) {
                b = e[b];
                break a;
              }
            }
            b = void 0;
          }
          if (!b) throw Na("vnd");
          return b.value;
        }
        if (O(c) && 37 === c[0]) {
          d = c.slice(2);
          b = Ob(a, c[1]);
          if (!V(b)) throw Na("tenf");
          d = B(v(a, Ob), d);
          return b.apply(null, d);
        }
        if (O(c) && 24 === c[0]) return Ol(a, c);
        if (O(c) && 35 === c[0]) {
          d = c[2];
          b = Ob(a, c[1]);
          d = Ob(a, d);
          if (!b) throw Na("noma");
          return b["" + d];
        }
        if (O(c) && 23 === c[0]) return Pl(a, c);
        if (O(c) && 22 === c[0]) return Ql(a, c);
      }
      function Ql(a, c) {
        return B(function (b) {
          return Ob(a, b);
        }, c.slice(1));
      }
      function Pl(a, c) {
        return P(
          function (b, d) {
            var e = d[1],
              f = Ob(a, d[0]);
            e = Ob(a, e);
            b["" + f] = e;
            return b;
          },
          {},
          c.slice(1)
        );
      }
      function hh(a) {
        return (
          fa(a) ||
          "[object Number]" === Object.prototype.toString.call(a) ||
          !!a === a ||
          ba(a)
        );
      }
      function Ol(a, c) {
        var b = c[1],
          d = c[2],
          e = c[3],
          f = B(S, a);
        return function () {
          var g = arguments,
            h = P(
              function (k, l, m) {
                if (k[l]) throw Na("da");
                k[l] = { kind: 1, value: g[m] };
                return k;
              },
              {},
              d
            );
          b && !G(b, d) && (h[b] = { kind: 0, value: b });
          Te(f, e, h);
        };
      }
      function Ml(a) {
        return Rl[a];
      }
      function Ue(a, c) {
        return function () {
          try {
            return c.apply(null, arguments);
          } catch (b) {
            ih(a, b);
          }
        };
      }
      function Sl(a, c, b, d) {
        function e() {
          g.state = 1;
          b();
        }
        function f() {
          g.state = 2;
          d && d();
        }
        var g = Tl(a, c);
        c = g.bi;
        var h = g.state;
        c && 2 !== h
          ? 1 === h
            ? e()
            : ((a = ja(a)), a.F(c, ["load"], e), a.F(c, ["error"], f))
          : f();
      }
      function Tl(a, c) {
        Ve[c] || (Ve[c] = { bi: Fc(a, { src: c }), state: 0 });
        return Ve[c];
      }
      function jh(a, c) {
        if (ba(a)) throw Na("noma");
        if (1 === c.length) return a;
        var b = n(a, L(".", c.slice(0, -1)));
        if (!b) throw Na("noma");
        return b;
      }
      function Ul(a) {
        return P(
          function (c, b) {
            Eb(a, b) && (c[b] = a[b]);
            return c;
          },
          {},
          ea(a)
        );
      }
      function Vl(a, c) {
        if ("*" === c) return !0;
        var b = R(a);
        return c === b.host + b.pathname;
      }
      function Wl(a, c) {
        var b = n(c, "target");
        b && a(b);
      }
      function Xl(a, c, b) {
        var d = n(b, "submitter");
        d || ((b = n(b, "target")) && (d = We(a, b)));
        d && c(d);
      }
      function Yl(a, c, b, d) {
        var e = Xe(a, d);
        e &&
          x(function (f) {
            var g,
              h = null;
            try {
              var k = n(f, "css_selector"),
                l = mc(k, a.document);
              h = kh(l);
            } catch (r) {}
            k = null;
            try {
              var m = n(f, "xpath"),
                p = Zl(m);
              var q = p
                ? n(a, "document.evaluate")
                  ? a.document.evaluate(
                      p,
                      a.document,
                      null,
                      a.XPathResult.FIRST_ORDERED_NODE_TYPE,
                      null
                    ).singleNodeValue
                  : null
                : null;
              k = kh(q);
            } catch (r) {}
            f = ((g = {}), (g.s = [k, h]), (g.b = e), g);
            c(f);
          }, b);
      }
      function kh(a) {
        return (a = Fb(a)) ? Zc(Pd(a)) : null;
      }
      function Zl(a) {
        if (!a) return "";
        a = a.match($l);
        if (!a || 0 === a.length) return "";
        var c = am();
        return (
          "//HTML/BODY/" +
          P(
            function (b, d) {
              var e = d[0],
                f = Da(d.slice(1));
              return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b;
            },
            "",
            a
          )
        );
      }
      function bm(a) {
        x(function (c) {
          var b,
            d = c.event;
          if (G(d, cm)) {
            var e = c.data;
            c = e.auctionId || n(e, "bid.auctionId");
            pa[c] || (pa[c] = ((b = {}), (b.auctionId = c), b));
            b = "auctionInit" === d;
            var f = G(d, lh);
            f ||
              (pa[c].startStamp && !b) ||
              (pa[c].startStamp = b
                ? e.auctionStart || e.timestamp
                : e.auctionStart);
            if (G(d, mh)) {
              b = e.bidderCode;
              if (!b) return;
              pa[c][d] || (pa[c][d] = {});
              if ("bidTimeout" === d) pa[c].bidTimeout[b] = !0;
              else {
                var g = {};
                pa[c][d][b] = g;
                x(function (h) {
                  var k = e[h];
                  ba(k) || (g[h] = k);
                }, dm);
                pa[c].endStamp && (pa[c].Y = !0);
              }
            }
            f
              ? ((b = e.bid.bidderCode),
                pa[c].renderState || (pa[c].renderState = {}),
                (d = "adRenderSucceeded" === d),
                (f = { le: d }),
                d || ((f.reason = e.reason), (f.message = e.message)),
                (pa[c].renderState[b] = f))
              : "auctionEnd" === d &&
                ((pa[c].Y = !0),
                (pa[c].endStamp = e.auctionEnd || e.timestamp),
                (pa[c].requestedBidders = ha(function (h, k, l) {
                  return Ye(h, l) === k;
                }, B(T("bidderCode"), e.bidderRequests))));
          }
        }, a);
      }
      function em(a, c) {
        x(function (b) {
          b.Y && fm(a, c, b.auctionId);
        }, gm(pa));
      }
      function fm(a, c, b) {
        pa[b].Y = !1;
        pa[b].Ga && la(a, pa[b].Ga);
        pa[b].Ga = U(
          a,
          function () {
            var d, e;
            delete pa[b].Ga;
            delete pa[b].Y;
            c(((d = {}), (d.__ym = ((e = {}), (e.pbjs = pa[b]), e)), d));
            delete pa[b];
          },
          2e3
        );
      }
      function hm(a) {
        var c = n(a, "featurePolicy");
        return c
          ? "browsingTopics" in a && c.allowsFeature("browsing-topics")
          : !1;
      }
      function im(a, c, b, d) {
        var e = n(d, "data");
        if (fa(e)) {
          var f = e.split("*");
          e = f[0];
          var g = f[1];
          f = f[2];
          "sc.topics-response" === e
            ? (g &&
                ("1" === g && f
                  ? ((a = Gb(a, f)), O(a) && c.D("cta", a))
                  : c.D("cta.e", g)),
              b())
            : "sc.frame" === e &&
              d.source &&
              d.source.postMessage("sc.topics", "*");
        }
      }
      function jm(a, c) {
        var b;
        if (
          "https://oauth.yandex.ru" === n(c, "origin") &&
          n(c, "source.window") &&
          "_ym_uid_request" === n(c.data, "_ym")
        ) {
          var d = c.source,
            e = ((b = {}), (b._ym_uid = a), b);
          d.postMessage(e, "https://oauth.yandex.ru");
        }
      }
      function nh(a) {
        return {
          O: function (c, b) {
            km(a).then(function (d) {
              c.J || (c.J = {});
              c.J.uah = d;
              b();
            }, b);
          },
        };
      }
      function lm(a) {
        var c = P(
          function (b, d) {
            var e = d[1],
              f = mm(a[d[0]]);
            f && b.push("" + e + "\n" + f);
            return b;
          },
          [],
          Ga(nm)
        );
        return L("\n", c);
      }
      function om(a) {
        return "che\n" + a;
      }
      function mm(a) {
        return fa(a)
          ? a
          : O(a)
          ? L(
              ",",
              B(function (c) {
                return '"' + c.brand + '";v="' + c.version + '"';
              }, a)
            )
          : ba(a)
          ? ""
          : a
          ? "?1"
          : "?0";
      }
      function pm(a, c) {
        var b = qm(a),
          d = [rm(a) || sm(a)];
        tm(a) && d.push(b);
        d.unshift("com");
        var e = ka(a);
        b = Va(a);
        var f = b.C("synced", {});
        d = ha(function (g) {
          if (c[g]) {
            var h = (f[g] || 1) + 1440 < e(mb);
            h && delete f[g];
            return h;
          }
        }, d);
        b.D("synced", f);
        return B(function (g) {
          return { ri: c[g], Jh: g };
        }, d);
      }
      function sm(a) {
        a = um(a);
        return vm[a] || a;
      }
      function qm(a) {
        a = oh(a);
        return wm[a] || "com";
      }
      function xm(a, c, b, d) {
        if (!b.K || Od(c.aa)) d();
        else {
          var e = Qd(a),
            f = v(e, zm),
            g = Rd(a, ""),
            h = function () {
              var q = L(",", B(Am(Ze), Sd(e)));
              q = "" + q + Bm(q, g);
              $e(b, "gdpr", q);
              d();
            };
          if (c.Hi) f("31"), h();
          else if (3 === c.id) h();
          else {
            var k = H(a),
              l = k.C("f1");
            if (l) l(h);
            else if (((l = Sd(e)), Wa(nc(Ze), l))) h();
            else if (g.C("yandex_login")) f("13"), g.D("gdpr", Gc, 525600), h();
            else {
              l = Td(a);
              var m = R(a);
              var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname)
                ? {
                    url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                    version: 2,
                    ff: Cm,
                    nf: "_inversed_buttons",
                  }
                : void 0;
              l || p
                ? ((l = g.C("gdpr")),
                  G(l, oc)
                    ? (f(l === af ? "12" : "3"), h())
                    : bf(a) || Dm(a)
                    ? (f("17"), h())
                    : Em(a)
                        .then(S, F)
                        .then(function (q) {
                          q
                            ? (f("28"), h())
                            : (ph(h),
                              k.D("f1", ph),
                              (0, qh[0])(a)
                                .then(T("params.eu"))
                                .then(function (r) {
                                  if (
                                    r ||
                                    gb(m.href, "yagdprcheck=1") ||
                                    g.C("yaGdprCheck")
                                  ) {
                                    g.D("gdpr_popup", af);
                                    Fm(a, c);
                                    if (rb(a)) return Gm(a, f, c);
                                    var t = rh(a, e);
                                    if (t)
                                      return (
                                        (r = Hm(a, f, t, c, p)),
                                        r.then(E([a, c], Im)),
                                        r
                                      );
                                  }
                                  r || f("8");
                                  return K.resolve({ value: Gc, Dd: !0 });
                                })
                                .then(function (r) {
                                  g.bc("gdpr_popup");
                                  if (r) {
                                    var t = r.value;
                                    r = r.Dd;
                                    G(t, oc) &&
                                      g.D("gdpr", t, r ? void 0 : 525600);
                                  }
                                  t = Yb(sh, qa);
                                  $c(a, t, 20)(Xa(z(a, "gdr"), F));
                                  k.D("f1", qa);
                                })
                                ["catch"](z(a, "gdp.a")));
                        }))
                : (f("14"), h());
            }
          }
        }
      }
      function Im(a, c) {
        if (Td(a)) {
          var b = Qd(a),
            d = Ca(a, c);
          d = d && d.params;
          b = B(v(Jm, n), Sd(b));
          d && b.length && d("gdpr", La(b));
        }
      }
      function Gm(a, c, b) {
        var d = Ud(a, b);
        return new K(function (e) {
          var f;
          if (d) {
            var g = d.X,
              h = w(v("4", c), v(null, e)),
              k = U(a, h, 2e3, "gdp.f.t");
            d.Kf(((f = {}), (f.type = "isYandex"), f))
              .then(function (l) {
                l.isYandex
                  ? (c("5"),
                    g.F(th, function (m) {
                      e({ value: uh(m[1].type) });
                    }))
                  : (c("6"), e(null));
              })
              ["catch"](h)
              .then(E([a, k], la));
          } else e({ value: af, Dd: !0 });
        });
      }
      function Fm(a, c) {
        var b = Ud(a, c);
        b &&
          b.X.F(["isYandex"], function () {
            var d;
            return (d = { type: "isYandex" }), (d.isYandex = Td(a)), d;
          });
        return b;
      }
      function Km(a, c, b) {
        a = b || oh(a);
        return G(a, c) ? a : "en";
      }
      function uh(a) {
        if (G(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Gc;
        a = a.replace("GDPR-ok-view-detailed-", "");
        return G(a, oc) ? a : Gc;
      }
      function vh(a, c, b) {
        var d = n(a, "AppMetricaInitializer"),
          e = n(d, "init");
        if (e)
          try {
            I(e, d)(Hb(a, c));
          } catch (f) {}
        else wh = U(a, E([a, c, 2 * b], vh), b, "ai.d");
        return function () {
          return la(a, wh);
        };
      }
      function xh(a, c, b, d) {
        var e,
          f,
          g,
          h = b.Eh,
          k = b.zh,
          l = b.isTrusted;
        b = b.Ed;
        a = cf(a, k);
        k = k.readOnly;
        d =
          ((e = {}),
          (e.fi = df(
            ((f = {}),
            (f.a = h ? 1 : 0),
            (f.b = a),
            (f.c = d || 0),
            (f.d = k ? 1 : null),
            f)
          ).Da()),
          e);
        ba(l) || (d.ite = sb(l));
        b && (d.ifs = 1);
        c.params(((g = {}), (g.__ym = d), g));
      }
      function yh(a, c) {
        var b = n(c, "target");
        if (b) {
          var d = n(b, "value");
          if ((d = Ya(d)) && !(100 <= Za(d))) {
            var e = "tel" === n(b, "type"),
              f = 0 < lb(d, "@") && !e,
              g = Vd(d),
              h = Za(g);
            if (f || (!f && (e || h))) {
              if (f) {
                if (((d = zh(d)), 5 > Za(d) || 100 < Za(d))) return;
              } else {
                if (Lm(d) || Za(d) - h > h || 10 > Za(g) || 16 < Za(g)) return;
                e = g[0];
                g = d[1];
                if ("+" === d[0] && g !== e) return;
                d = Ah(a, d);
              }
              e = n(c, "isTrusted");
              return { zh: b, Eh: f, Ah: d, isTrusted: e, Ed: c.Ed };
            }
          }
        }
      }
      function Bh(a, c, b, d, e) {
        if (!Wd(a)) return F;
        var f = [],
          g = ja(a);
        pc(a)(
          Xa(F, function () {
            var h = hb(c, a.document.body);
            e && (h = ha(e, h));
            x(function (l) {
              f.push(g.F(l, b, d));
            }, h);
            if (Oa("MutationObserver", a.MutationObserver)) {
              var k = c.toUpperCase();
              h = new a.MutationObserver(
                z(a, "de.m", function (l) {
                  x(function (m) {
                    var p = m.addedNodes;
                    m = m.removedNodes;
                    p &&
                      p.length &&
                      x(function (q) {
                        Xd(
                          a,
                          q,
                          function (r) {
                            r.nodeName !== k ||
                              (e && !e(r)) ||
                              f.push(g.F(r, b, d));
                          },
                          void 0,
                          a.NodeFilter.SHOW_ELEMENT,
                          !0
                        );
                      }, p);
                    m &&
                      m.length &&
                      x(function (q) {
                        Xd(
                          a,
                          q,
                          function (r) {
                            r.nodeName !== k || (e && !e(r)) || g.tb(r, b, d);
                          },
                          void 0,
                          a.NodeFilter.SHOW_ELEMENT,
                          !0
                        );
                      }, m);
                  }, l);
                })
              );
              h.observe(a.document.body, { childList: !0, subtree: !0 });
              f.push(I(h.disconnect, h));
            }
          })
        );
        return E([qa, f], x);
      }
      function Mm(a, c, b, d) {
        c = d.C("cc");
        d = E(["cc", ""], d.D);
        if (c) {
          var e = c.split("&");
          c = e[0];
          (e = (e = e[1]) && Da(e)) && 1440 < ka(a)(mb) - e
            ? d()
            : b.D("cc", c);
        } else Aa(0)(c) || d();
      }
      function Nm(a, c, b, d) {
        return na(c, function (e) {
          if (!ef(e) && !Yd(a))
            if (((e = d.C("zzlc")), Y(e) || $a(e) || "na" === e)) {
              var f = Pb(a);
              if (f && (e = Zb(a))) {
                var g = f("iframe");
                C(g.style, {
                  display: "none",
                  width: "1px",
                  height: "1px",
                  visibility: "hidden",
                });
                f = ff(a, 68);
                var h = gf(a, 79);
                g.src =
                  "https://mc.yandex." +
                  (f || h ? "md" : "ru") +
                  Ch("L21ldHJpa2EvenpsYy5odG1s");
                e.appendChild(g);
                var k = 0,
                  l = ja(a).F(
                    a,
                    ["message"],
                    z(a, "zz.m", function (m) {
                      (m = n(m, "data")) &&
                        m.substr &&
                        "__ym__zz" === m.substr(0, 8) &&
                        (qc(g),
                        (m = m.substr(8)),
                        d.D("zzlc", m),
                        b.D("zzlc", m),
                        l(),
                        la(a, k));
                    })
                  );
                k = U(a, w(l, v(g, qc)), 3e3);
              }
            } else b.D("zzlc", e);
        });
      }
      function Om(a, c, b) {
        var d,
          e = ad(a, c);
        if (e) {
          e.X.F(["gpu-get"], function () {
            var h;
            return (h = {}), (h.type = "gpu-get"), (h.pu = b.C("pu")), h;
          });
          var f = n(a, "opener");
          if (f) {
            var g = U(a, E([a, c, b], Dh), 200, "pu.m");
            e.ae(f, ((d = {}), (d.type = "gpu-get"), d), function (h, k) {
              var l = n(k, "pu");
              l && (la(a, g), b.D("pu", l));
            });
          } else Dh(a, c, b);
        }
      }
      function Dh(a, c, b) {
        var d = n(a, "location.host");
        a = bd(a, c);
        b.D("pu", "" + rc(d) + a);
      }
      function Pm(a, c) {
        if (n(c, "settings.ins")) {
          var b = H(a);
          if (!b.C("scip")) {
            var d = Va(a),
              e = ka(a)(mb),
              f = Zd(d.C("sci"));
            if (!(f && 1440 >= e - f)) {
              f = ra(a, "ci");
              var g = ["sync.cook.int"],
                h = function (l) {
                  l = b.C("scip", "") + l;
                  b.D("scip", l);
                },
                k = v("a", h);
              b.D("scip", "0");
              return f({ Z: { fa: g, Ma: 3e3, wb: !0 } }, [
                "https://yandex.com/an/sync_cookie",
              ])
                .then(function (l) {
                  l = n(l.Gc, "CookieMatchUrls");
                  if (O(l) && Za(l)) {
                    h("1");
                    var m = ra(a, "c");
                    l = B(function (p, q) {
                      return m({ Z: { fa: g, Ma: 3e3 } }, ["https://" + p])[
                        "catch"
                      ](w(v("b", h), v("" + q, h)));
                    }, ha(fa, l));
                    return K.all(l);
                  }
                  k();
                }, k)
                .then(function () {
                  var l = b.C("scip");
                  !l || gb(l, "a") || gb(l, "b") || (d.D("sci", e), h("2"));
                }, F);
            }
          }
        }
      }
      function Eh(a) {
        return {
          O: function (c, b) {
            if (!c.K) return b();
            var d = H(a).C("fid");
            !Fh && d && ($e(c, "fid", d), (Fh = !0));
            return b();
          },
        };
      }
      function Qm(a, c) {
        var b = a.document;
        if (G(b.readyState, ["interactive", "complete"])) Nb(a, c);
        else {
          var d = ja(a),
            e = d.F,
            f = d.tb,
            g = function () {
              f(b, ["DOMContentLoaded"], g);
              f(a, ["load"], g);
              c();
            };
          e(b, ["DOMContentLoaded"], g);
          e(a, ["load"], g);
        }
      }
      function hf(a) {
        return {
          O: function (c, b) {
            var d = c.K;
            if (d) {
              var e = H(a).C("adBlockEnabled");
              e && d.D("adb", e);
            }
            b();
          },
        };
      }
      function Rm(a) {
        var c = z(a, "i.clch", Sm);
        ja(a).F(a.document, ["click"], v(a, c), { passive: !1 });
        return function (b) {
          var d = wa.Oa,
            e = a.Ya[wa.Xb],
            f = !!e._informer;
          e._informer = C({ domain: "informer.yandex.ru" }, b);
          f || Fc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" });
        };
      }
      function Tm(a, c) {
        var b = Va(a),
          d = b.C,
          e = b.D;
        if ("" === d("cc")) {
          e("cc", 0);
          var f = ka(a),
            g = H(a);
          ra(
            a,
            "6",
            c
          )({ Z: { wb: !0, ye: !1 } }, ["https://mc.yandex.md/cc"])
            .then(function (h) {
              h = n(h.Gc, "c");
              e("cc", h + "&" + f(mb));
              g.D("cc", h);
            })
            ["catch"](function (h) {
              var k = f(mb);
              e("cc", "&" + k);
              Hc(a, "cc", h);
            });
        }
      }
      function $d(a, c) {
        if (!c) return !1;
        var b = R(a);
        return new RegExp(c).test("" + b.pathname + b.hash + b.search);
      }
      function Um(a, c) {
        return na(c, function (b) {
          var d = n(b, "settings.dr");
          return { Fg: Vm(a, d), isEnabled: n(b, "settings.auto_goals") };
        });
      }
      function Wm(a, c, b, d, e) {
        b = jf(a.document.body, b);
        d = jf(a.document.body, d);
        G(e.target, [b, d]) && kf(a, c);
      }
      function Gh(a, c, b, d) {
        (b = Xm(a, d, b)) && kf(a, c, b);
      }
      function Hh(a, c) {
        var b = Ih(a, c);
        return Ym(a, b);
      }
      function Ih(a, c) {
        var b = jf(a.document.body, c);
        return b ? Zm(a, b) : "";
      }
      function kf(a, c, b) {
        if ((c = Ca(a, c)))
          (a = ae(["dr", b || "" + Sa(a, 10, 99)])), c.params(ae(["__ym", a]));
      }
      function jf(a, c) {
        var b = null;
        try {
          b = c ? mc(c, a) : b;
        } catch (d) {}
        return b;
      }
      function Jh(a) {
        a = Ma(Ch(a));
        return B(function (c) {
          c = c.charCodeAt(0).toString(2);
          return Kh("0", 8, c);
        }, a);
      }
      function Zm(a, c) {
        if (!c) return "";
        var b = [],
          d = n(a, "document");
        Xd(a, c, function (e) {
          if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
          else
            e instanceof a.HTMLImageElement
              ? (f = e.alt)
              : e instanceof a.HTMLInputElement && (f = e.value);
          (f = f && Ya(f)) && b.push(f);
        });
        return 0 === b.length ? "" : L(" ", b);
      }
      function $m(a, c, b) {
        a = Ja(b);
        b = a[1];
        "track" === a[0] && c({ version: "0", dc: b });
      }
      function an(a, c, b) {
        if (b) {
          var d = b.version;
          (b = n(bn, d + "." + b.dc)) &&
            ((c && G(b, cn)) || a("ym-" + b + "-" + d));
        }
      }
      function dn(a, c, b) {
        if ("rt" === b)
          return "https://" + Lh(a, c) + ".mc.yandex.ru/watch/3/1";
        if ("mf" === b) {
          b = R(a);
          b = be(b.protocol + "//" + b.hostname + b.pathname);
          c = bd(a, c);
          var d = "";
          do d += Sa(a);
          while (d.length < c.length);
          d = d.slice(0, c.length);
          a = "";
          for (var e = 0; e < c.length; e += 1)
            a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
          a = [d, a];
          return (
            "https://adstat.yandex.ru/track?service=metrika&id=" +
            a[1] +
            "&mask=" +
            a[0] +
            "&ref=" +
            b
          );
        }
      }
      function en(a, c, b) {
        var d,
          e = lf(c).Jb;
        return ra(a, "pi", c)({ K: Ea(((d = {}), (d[e] = 1), d)) }, [b]);
      }
      function fn(a, c, b) {
        return new K(function (d, e) {
          if (Mh(a, ce, "isp")) {
            var f = F,
              g = function (h) {
                ("1" === h ? d : e)();
                f();
                Nh(ce, "isp");
              };
            f = ja(a).F(a, ["message"], E([b, g], z(a, "isp.stat.m", gn)));
            U(a, g, 1500);
          } else e();
        });
      }
      function gn(a, c, b) {
        var d = n(b, "data");
        if (fa(d)) {
          var e = d.split("*");
          d = e[0];
          var f = e[1];
          e = e[2];
          "sc.frame" === d && b.source
            ? b.source.postMessage("sc.images*" + a, "*")
            : "sc.image" === d && f === a && c(e);
        }
      }
      function hn(a, c) {
        var b = Va(a),
          d = "wv2rf:" + J(c),
          e = c.Vb,
          f = mf(a),
          g = b.C(d),
          h = c.Ai;
        return Y(f) || $a(g)
          ? Ba(function (k, l) {
              na(c, function (m) {
                var p = !!n(m, "settings.webvisor.forms");
                p = !n(m, "settings.x3") && p;
                f = mf(a) || n(m, "settings.eu");
                b.D(d, sb(p));
                l({ Vb: e, Cd: !!f, rf: p, Vf: h });
              });
            })
          : nf({ Vb: e, Cd: f, rf: !!Da(g), Vf: h });
      }
      function jn() {
        var a = P(
          function (c, b) {
            c[b[0]] = { Uc: 0, pg: 1 / b[1] };
            return c;
          },
          {},
          [
            ["blur", 0.0034],
            ["change", 0.0155],
            ["click", 0.01095],
            ["deviceRotation", 2e-4],
            ["focus", 0.0061],
            ["mousemove", 0.5132],
            ["scroll", 0.4795],
            ["selection", 0.0109],
            ["touchcancel", 2e-4],
            ["touchend", 0.0265],
            ["touchforcechange", 0.0233],
            ["touchmove", 0.1442],
            ["touchstart", 0.027],
            ["zoom", 0.0014],
          ]
        );
        return {
          lg: function (c) {
            if (c.length)
              return {
                type: "activity",
                data: P(
                  function (b, d) {
                    var e = a[d];
                    return Math.round(b + e.Uc * e.pg);
                  },
                  0,
                  ea(a)
                ),
              };
          },
          Oh: function (c) {
            c && (c = a[c.data.type || c.event]) && (c.Uc += 1);
          },
        };
      }
      function kn(a) {
        return {
          Xg: function () {
            var c = a.document.querySelector("base[href]");
            return c ? c.getAttribute("href") : null;
          },
          Zg: function () {
            if (a.document.doctype) {
              var c = C(
                  { name: "html", publicId: "", systemId: "" },
                  a.document.doctype
                ),
                b = c.publicId,
                d = c.systemId;
              return (
                "<!DOCTYPE " +
                L("", [
                  c.name,
                  b ? ' PUBLIC "' + b + '"' : "",
                  !b && d ? " SYSTEM" : "",
                  d ? ' "' + d + '"' : "",
                ]) +
                ">"
              );
            }
            return null;
          },
        };
      }
      function ln(a, c, b) {
        var d = cd(a),
          e = ja(a),
          f = rb(a),
          g = c.nd(),
          h = !n(a, "postMessage") || (f && !n(a, "parent.postMessage")),
          k = v(d, S);
        if (h) {
          if (!g)
            return (
              U(a, I(d.$, d, "i", { sa: !1 }), 10), { md: k, Gf: F, stop: F }
            );
          Ra(Ka());
        }
        d.F(["sr"], function (r) {
          var t,
            y = Oh(a, r.source);
          y &&
            of(
              a,
              r.source,
              ((t = {}), (t.type = "\u043d"), (t.frameId = c.qa().V(y)), t)
            );
        });
        d.F(["sd"], function (r) {
          var t = r.data;
          r = r.source;
          (a === r || Oh(a, r)) &&
            d.$("sdr", { data: t.data, frameId: t.frameId });
        });
        if (f && !g) {
          var l = !1,
            m = 0,
            p = function () {
              var r;
              of(a, a.parent, ((r = {}), (r.type = "sr"), r));
              m = U(a, p, 100, "if.i");
            };
          p();
          var q = function (r) {
            d.ea(["\u043d"], q);
            la(a, m);
            var t = Ic(a, r.origin).host;
            l ||
              r.source !== a.parent ||
              !r.data.frameId ||
              ("about:blank" !== R(a).host && !G(t, b)) ||
              ((l = !0), d.$("i", { frameId: r.data.frameId, sa: !0 }));
          };
          d.F(["\u043d"], q);
          U(
            a,
            function () {
              d.ea(["\u043d"], q);
              la(a, m);
              l || ((l = !0), d.$("i", { sa: !1 }));
            },
            2e3,
            "if.r"
          );
        }
        e = e.F(a, ["message"], function (r) {
          var t = Gb(a, r.data);
          t &&
            t.type &&
            G(t.type, mn) &&
            d.$(t.type, { data: t, source: r.source, origin: r.origin });
        });
        return {
          md: k,
          Gf: function (r) {
            var t;
            return of(
              a,
              a.parent,
              ((t = {}), (t.frameId = c.nd()), (t.data = r), (t.type = "sd"), t)
            );
          },
          stop: e,
        };
      }
      function Oh(a, c) {
        try {
          return Ib(
            w(T("contentWindow"), Aa(c)),
            Ma(a.document.querySelectorAll("iframe"))
          );
        } catch (b) {
          return null;
        }
      }
      function of(a, c, b) {
        c || Ra(Ka());
        a = Hb(a, b);
        c.postMessage(a, "*");
      }
      function Ph() {
        return (
          $b() +
          $b() +
          "-" +
          $b() +
          "-" +
          $b() +
          "-" +
          $b() +
          "-" +
          $b() +
          $b() +
          $b()
        );
      }
      function $b() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      function nn(a, c) {
        if (fa(c)) return c;
        var b = a.textContent;
        if (fa(b)) return b;
        b = a.data;
        if (fa(b)) return b;
        b = a.nodeValue;
        return fa(b) ? b : "";
      }
      function on(a, c, b, d, e) {
        void 0 === d && (d = {});
        void 0 === e && (e = Ha(c));
        var f = C(
          P(
            function (h, k) {
              h[k.name] = k.value;
              return h;
            },
            {},
            Ma(c.attributes)
          ),
          d
        );
        C(f, pn(c, e, f));
        var g =
          (d = tb(
            function (h, k) {
              var l = k[0],
                m = de(a, c, l, k[1], b, e),
                p = m.value;
              ba(p) ? delete f[l] : (f[l] = p);
              return h || m.kb;
            },
            !1,
            Ga(f)
          )) && dd(c);
        g && ((f.width = g.width), (f.height = g.height));
        return { kb: d, mg: f };
      }
      function pn(a, c, b) {
        var d = {};
        pf(a)
          ? (d.value = a.value || b.value)
          : "IMG" !== c || b.src || (d.src = "");
        return d;
      }
      function de(a, c, b, d, e, f) {
        void 0 === f && (f = Ha(c));
        var g = { kb: !1, value: d };
        if (pf(c))
          "value" === b
            ? !ba(d) &&
              "" !== d &&
              ((b = e.Cd),
              (f = e.rf),
              (e = ed(a, c)),
              f
                ? ((b = Jc(a, c, b)),
                  (a = b.lb),
                  (c = b.cb),
                  (b = b.Ta),
                  (g.kb = !c && (e || a)))
                : ((g.kb = e), (b = !(c && ac("ym-record-keys", c)))),
              b || e) &&
              ((d = "" + d),
              (g.value = 0 < d.length ? Qh("\u2022", d.length) : ""))
            : "checked" === b &&
              G((c.getAttribute("type") || "").toLowerCase(), qn)
            ? (g.value = c.checked ? "checked" : null)
            : rn.test(b) && qf(a, c) && (g.value = null);
        else if ("IMG" === f && "src" === b)
          (e = ed(a, c))
            ? ((g.kb = e),
              (g.value =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="))
            : (g.value =
                (c.getAttribute("srcset") ? c.currentSrc : "") || c.src);
        else if ("A" === f && "href" === b) g.value = d ? "#" : "";
        else if (
          G(b, ["srcset", "integrity", "crossorigin", "password"]) ||
          (2 < b.length && 0 === lb(b, "on")) ||
          ("IFRAME" === f && "src" === b) ||
          ("SCRIPT" === f && G(b, ["src", "type"]))
        )
          g.value = null;
        return g;
      }
      function rf(a, c, b, d) {
        void 0 === d && (d = "wv2");
        return {
          H: function (e, f) {
            return z(a, d + "." + b + "." + f, e, void 0, c);
          },
        };
      }
      function sn(a, c, b, d, e) {
        function f() {
          l && l.stop();
        }
        if (!c.vb) return K.resolve(F);
        var g = ra(a, "4", c),
          h = { K: Ea() },
          k = new tn(a, b, function (m, p, q) {
            if (!g) return K.resolve();
            var r = "wv-data=" + Zc(m, !0),
              t = z(a, "m.n.m.s");
            p = {};
            p["wv-part"] = "" + q;
            q = m.length;
            for (var y = 0, D = 255, N = 255, M, sa, ta; q; ) {
              M = 21 < q ? 21 : q;
              q -= M;
              do
                (sa = "string" === typeof m ? m.charCodeAt(y) : m[y]),
                  (y += 1),
                  255 < sa && ((ta = sa >> 8), (sa &= 255), (sa ^= ta)),
                  (D += sa),
                  (N += D);
              while (--M);
              D = (D & 255) + (D >> 8);
              N = (N & 255) + (N >> 8);
            }
            m = (((D & 255) + (D >> 8)) << 8) | ((N & 255) + (N >> 8));
            return g(
              C({}, h, {
                Z: { ba: r },
                J:
                  ((p["wv-check"] = "" + (65535 === m ? 0 : m)),
                  (p["wv-type"] = b.type),
                  p),
              }),
              c
            )["catch"](t);
          }),
          l = un(a, k, d, e);
        return na(c, function (m) {
          m && H(a).D("isEU", n(m, "settings.eu"));
          H(a).C("oo") || (l && Rh(a, m) && l.start());
          return f;
        });
      }
      function un(a, c, b, d) {
        var e = a.document,
          f = [],
          g = ja(a),
          h = ":submit" + Math.random(),
          k = [],
          l = I(c.flush, c),
          m = ua(function (r, t) {
            z(a, "hfv." + r, function () {
              try {
                var y = t.type;
              } catch (D) {
                return;
              }
              y = G(y, d);
              c.push(t, { type: r });
              y && l();
            })();
          }),
          p = z(a, "sfv", function () {
            var r = b(a),
              t = vn(a);
            x(function (y) {
              f.push(g.F(y.target, [y.event], m(y.type)));
            }, r);
            x(function (y) {
              f.push(
                g.F(
                  y.target,
                  [y.event],
                  z(a, "hff." + y.type + "." + y.event, function (D) {
                    x(Ba({ l: a, ja: D, flush: l }), y.N);
                  })
                )
              );
            }, t);
            k = Sh(a, "form", e);
            e.attachEvent &&
              ((r = Sh(a, "form *", e)),
              x(function (y) {
                f.push(g.F(y, ["submit"], m("form")));
              }, k),
              x(function (y) {
                sf(y) && f.push(g.F(y, ["change"], m("formInput")));
              }, r));
            x(function (y) {
              var D = y.submit;
              if (V(D) || ("object" === typeof D && wn.test("" + D)))
                (y[h] = D),
                  (y.submit = z(a, "fv", function () {
                    var N = { target: y, type: "submit" };
                    m("document")(N);
                    return y[h]();
                  }));
            }, k);
          }),
          q = z(a, "ufv", function () {
            x(qa, f);
            x(function (r) {
              r && (r.submit = r[h]);
            }, k);
            c.flush();
          });
        return { start: p, stop: q };
      }
      function xn(a, c) {
        var b = ha(function (e) {
            return 0 < e.N.length;
          }, c),
          d = Th({ target: a.document, type: "document" });
        return B(w(S, d, yn(a)), b);
      }
      function Uh(a, c) {
        var b = a.l,
          d = [],
          e = c.form;
        if (!c[Ta] && e) {
          var f = e.elements;
          e = e.length;
          for (var g = 0; g < e; g += 1) {
            var h = f[g];
            ee(h) && !h[Ta] && xa(d, sc(b, h));
          }
        } else xa(d, sc(b, c));
        return d;
      }
      function tf(a) {
        if (fd) {
          fd = !1;
          var c = ub(a.l),
            b = [];
          ib(a.l, b, 15) ? (a = []) : (Q(b, c), (a = b));
          return a;
        }
      }
      function Vh(a) {
        if (!fd) {
          fd = !0;
          a = ub(a.l);
          var c = [];
          Qb(c, 14);
          Q(c, a);
          return c;
        }
      }
      function zn(a, c, b) {
        var d = c[Ta];
        if (d) {
          a: {
            var e = ub(a),
              f = c[Ta];
            if (0 < f) {
              var g = [];
              c = uf(a, c);
              var h = tc[f],
                k = c[0] + "x" + c[1],
                l = c[2] + "x" + c[3];
              if (k !== h.mf) {
                h.mf = k;
                if (ib(a, g, 9)) {
                  a = [];
                  break a;
                }
                Q(g, e);
                Q(g, f);
                Q(g, c[0]);
                Q(g, c[1]);
              }
              if (l !== h.size) {
                h.size = l;
                if (ib(a, g, 10)) {
                  a = [];
                  break a;
                }
                Q(g, e);
                Q(g, f);
                Q(g, c[2]);
                Q(g, c[3]);
              }
              if (g.length) {
                a = g;
                break a;
              }
            }
            a = [];
          }
          xa(b, a);
        }
        return d;
      }
      function Jc(a, c, b) {
        void 0 === b && (b = !1);
        if (!c) return { Ta: !1, cb: !1, lb: !1 };
        var d = c.getAttribute("type") || c.type;
        if ("button" === d) return { Ta: !1, cb: !1, lb: !1 };
        var e = ha(Wh, [c.className, c.id, c.name]),
          f = c && ac("ym-record-keys", c);
        d = (d && G(d, Xh)) || Wa(cb(An), e);
        var g;
        (g = d) ||
          ((g = c.placeholder),
          (g = Wa(cb(Bn), e) || (Wh(g) && Cn.test(g || ""))));
        e = g;
        return {
          Ta: !f && (vf(a, c) || (e && b) || (e && !d && !b)),
          cb: f,
          lb: e,
        };
      }
      function vf(a, c) {
        return qf(a, c) || gd(a, c) ? !0 : ed(a, c);
      }
      function Wh(a) {
        return !!(a && 2 < a.length);
      }
      function pf(a) {
        try {
          var c = Ha(a);
          if (G(c, wf)) {
            if ("INPUT" === c) {
              var b = a.type;
              return !b || G(b.toLocaleLowerCase(), Dn);
            }
            return !0;
          }
        } catch (d) {}
        return !1;
      }
      function Yh(a, c) {
        return c && ac("(ym-disable-submit|-metrika-noform)", c);
      }
      function En(a, c) {
        return L(
          "",
          B(function (b) {
            return a.isNaN(b)
              ? Fn.test(b)
                ? ((b = b.toUpperCase() === b ? Gn : Hn),
                  String.fromCharCode(Sa(a, b[0], b[1])))
                : b
              : "" + Sa(a, 0, 9);
          }, c.split(""))
        );
      }
      function ed(a, c) {
        if (ba(c)) return !1;
        if (xf(c)) {
          var b = c.parentNode;
          return (ba(b) ? 0 : 11 === b.nodeType) ? !1 : ed(a, c.parentNode);
        }
        b = Zh(a);
        if (!b) return !1;
        var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
        return d &&
          b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *")
          ? !1
          : d;
      }
      function Rh(a, c) {
        var b = Kc(a),
          d = b.C("visorc");
        G(d, ["w", "b"]) || (d = "");
        ($h(a) && ai(a, fe, "visorc") && !In.test(vb(a) || "")) || (d = "b");
        var e = n(c, "settings.webvisor.recp");
        if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
        d || (d = (H(a).C("hitId") % 1e4) / 1e4 < e ? "w" : "b");
        b.D("visorc", d, 30);
        return "w" === d;
      }
      function Jn(a, c) {
        return {
          O: function (b, d) {
            b.K.Nb("we", Jb(c.vb));
            bi(a, c, b, "rn");
            d();
          },
        };
      }
      function ci(a, c, b) {
        if (di.isEnabled(a)) return new di(a, c);
        if (ei.isEnabled(a)) return new ei(a, b);
      }
      function fi(a, c) {
        var b = c[1][3],
          d = 0,
          e = new a.Uint8Array(c[0]);
        return Yb([b], function (f, g) {
          if (!f) return e;
          f[0](a, f[2], e, d);
          d += f[1];
          g.push(f[3]);
          return e;
        });
      }
      function gi(a, c, b) {
        a = c(b);
        c = [F, 0, 0];
        var d = [0, c, c, void 0];
        return Yb(a, function (e, f) {
          var g = e[0],
            h = e[1],
            k = e[2];
          if (0 === g) return k(d, h), d;
          if (void 0 === h || null === h) return d;
          var l = g >> 3;
          if (g & 1) uc(d, W(l)), (h = k(h)), l & 2 && uc(d, W(h[1])), uc(d, h);
          else if (g & 4)
            for (g = h.length - 1; 0 <= g; ) {
              var m = k(h[g]);
              m.push([0, 0, yf]);
              m.push([0, W(l), uc]);
              m.unshift([0, 0, zf]);
              xa(f, m);
              --g;
            }
          else if (g & 2) {
            k = e[2];
            var p = e[3],
              q = e[4],
              r = e[5],
              t = ea(h);
            for (g = t.length - 1; 0 <= g; )
              (m = t[g]),
                (m = [
                  [0, 0, zf],
                  [q, h[m], r],
                  [k, m, p],
                  [0, 0, yf],
                  [0, W(l), uc],
                ]),
                xa(f, m),
                --g;
          } else
            (m = k(h)),
              m.push([0, 0, yf]),
              m.push([0, W(l), uc]),
              m.unshift([0, 0, zf]),
              xa(f, m);
          return d;
        });
      }
      function zf(a) {
        var c = a[1],
          b = a[0],
          d = a[2];
        a[3]
          ? ((a[0] = a[3][0]),
            (a[1] = a[3][1]),
            (a[2] = a[3][2]),
            (a[3] = a[3][3]))
          : ((a[0] = 0), (a[1] = [F, 0, 0]), (a[2] = a[1]));
        uc(a, W(b));
        b && ((a[2][3] = c[3]), (a[2] = d), (a[0] += b));
      }
      function yf(a) {
        a[3] = [a[0], a[1], a[2], a[3]];
        a[1] = [F, 0, 0];
        a[2] = a[1];
        a[0] = 0;
      }
      function uc(a, c) {
        a[0] += c[1];
        a[2][3] = c;
        a[2] = c;
      }
      function hi(a) {
        return [
          [1857, a.partsTotal, W],
          [1793, a.activity, W],
          [1744, a.textChangeMutation, Kn],
          [1680, a.removedNodesMutation, Ln],
          [1616, a.addedNodesMutation, Mn],
          [1552, a.attributesChangeMutation, Nn],
          [1488, a.publishersHeader, On],
          [1424, a.articleInfo, Pn],
          [1360, a.focusEvent, Qn],
          [1296, a.fatalErrorEvent, Rn],
          [1232, a.deviceRotationEvent, Sn],
          [1168, a.keystrokesEvent, Tn],
          [1104, a.resizeEvent, Un],
          [1040, a.zoomEvent, Vn],
          [976, a.touchEvent, Wn],
          [912, a.changeEvent, Xn],
          [848, a.selectionEvent, Yn],
          [784, a.scrollEvent, Zn],
          [720, a.mouseEvent, $n],
          [656, a.kj, ao],
          [592, a.page, bo],
          [513, a.end, vc],
          [449, a.partNum, W],
          [401, a.chunk, co],
          [257, a.frameId, oa],
          [193, a.event, W],
          [129, a.type, W],
          [65, a.stamp, W],
        ];
      }
      function eo(a) {
        return [[84, a.$h, hi]];
      }
      function fo(a) {
        return [
          [129, a.position, oa],
          [81, a.name, ca],
        ];
      }
      function go(a) {
        return [[81, a.name, ca]];
      }
      function ho(a) {
        return [[81, a.name, ca]];
      }
      function Pn(a) {
        return [
          [593, a.updateDate, ca],
          [532, a.rubric, fo],
          [449, a.chars, oa],
          [401, a.publicationDate, ca],
          [340, a.topics, go],
          [276, a.authors, ho],
          [209, a.pageTitle, ca],
          [145, a.pageUrlCanonical, ca],
          [65, a.id, W],
        ];
      }
      function io(a) {
        return [
          [513, a.chars, oa],
          [489, a.maxScrolled, hd],
          [385, a.involvedTime, oa],
          [321, a.height, oa],
          [257, a.width, oa],
          [193, a.y, oa],
          [129, a.x, oa],
          [65, a.id, W],
        ];
      }
      function On(a) {
        return [
          [129, a.involvedTime, oa],
          [84, a.articleMeta, io],
        ];
      }
      function Qn(a) {
        return [[65, a.target, oa]];
      }
      function Rn(a) {
        return [
          [209, a.stack, ca],
          [145, a.Kg, ca],
          [81, a.code, ca],
        ];
      }
      function Sn(a) {
        return [
          [193, a.orientation, oa],
          [129, a.height, W],
          [65, a.width, W],
        ];
      }
      function Tn(a) {
        return [[84, a.keystrokes, jo]];
      }
      function jo(a) {
        return [
          [273, a.modifier, ca],
          [193, a.isMeta, vc],
          [145, a.key, ca],
          [65, a.id, W],
        ];
      }
      function Un(a) {
        return [
          [257, a.pageHeight, W],
          [193, a.pageWidth, W],
          [129, a.height, W],
          [65, a.width, W],
        ];
      }
      function Vn(a) {
        return [
          [193, a.y, oa],
          [129, a.x, oa],
          [105, a.level, hd],
        ];
      }
      function Wn(a) {
        return [
          [129, a.target, oa],
          [84, a.touches, ko],
        ];
      }
      function ko(a) {
        return [
          [297, a.force, hd],
          [233, a.y, hd],
          [169, a.x, hd],
          [81, a.id, ca],
        ];
      }
      function Xn(a) {
        return [
          [257, a.target, oa],
          [193, a.hidden, vc],
          [129, a.checked, vc],
          [81, a.value, ca],
        ];
      }
      function Yn(a) {
        return [
          [257, a.endNode, W],
          [193, a.startNode, W],
          [129, a.end, oa],
          [65, a.start, oa],
        ];
      }
      function Zn(a) {
        return [
          [257, a.target, oa],
          [193, a.page, vc],
          [129, a.y, oa],
          [65, a.x, oa],
        ];
      }
      function $n(a) {
        return [
          [193, a.target, oa],
          [129, a.y, W],
          [65, a.x, W],
        ];
      }
      function ao(a) {
        return [
          [148, a.changes, lo],
          [65, a.target, oa],
        ];
      }
      function lo(a) {
        return [
          [193, a.index, W],
          [145, a.op, ca],
          [81, a.style, ca],
        ];
      }
      function Kn(a) {
        return [
          [209, a.value, ca],
          [129, a.index, W],
          [65, a.target, W],
        ];
      }
      function Ln(a) {
        return [
          [129, a.index, W],
          [69, a.nodes, oa],
        ];
      }
      function Mn(a) {
        return [
          [129, a.index, W],
          [84, a.nodes, ii],
        ];
      }
      function Nn(a) {
        return [
          [210, a.attributes, 81, ca, 145, ca],
          [129, a.index, W],
          [65, a.target, W],
        ];
      }
      function bo(a) {
        return [
          [852, a.content, ii],
          [785, a.tabId, ca],
          [705, a.recordStamp, mo],
          [656, a.location, no],
          [592, a.viewport, ji],
          [528, a.screen, ji],
          [449, a.hasBase, vc],
          [401, a.base, ca],
          [337, a.referrer, ca],
          [273, a.ua, ca],
          [209, a.address, ca],
          [145, a.title, ca],
          [81, a.doctype, ca],
        ];
      }
      function no(a) {
        return [
          [209, a.path, ca],
          [145, a.protocol, ca],
          [81, a.host, ca],
        ];
      }
      function ji(a) {
        return [
          [129, a.height, oa],
          [65, a.width, oa],
        ];
      }
      function ii(a) {
        return [
          [513, a.hidden, vc],
          [449, a.prev, W],
          [385, a.next, W],
          [337, a.content, ca],
          [257, a.parent, W],
          [210, a.attributes, 81, ca, 145, ca],
          [145, a.name, ca],
          [65, a.id, W],
        ];
      }
      function ca(a) {
        var c = oo({}, a, [], 0);
        return c ? [po, c, a] : [ki, 0, 0];
      }
      function co(a) {
        return [qo, a.length, a];
      }
      function vc(a) {
        return [ki, 1, a ? 1 : 0];
      }
      function mo(a) {
        a = li(a);
        var c = a[0],
          b = a[1],
          d = ((b >>> 28) | (c << 4)) >>> 0;
        c >>>= 24;
        return [
          mi,
          0 === c
            ? 0 === d
              ? 16384 > b
                ? 128 > b
                  ? 1
                  : 2
                : 2097152 > b
                ? 3
                : 4
              : 16384 > d
              ? 128 > d
                ? 5
                : 6
              : 2097152 > d
              ? 7
              : 8
            : 128 > c
            ? 9
            : 10,
          a,
        ];
      }
      function hd(a) {
        return [ro, 4, a];
      }
      function oa(a) {
        return 0 > a ? [mi, 10, li(a)] : W(a);
      }
      function W(a) {
        return [
          so,
          128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5,
          a,
        ];
      }
      function so(a, c, b, d) {
        for (a = c; 127 < a; ) (b[d++] = (a & 127) | 128), (a >>>= 7);
        b[d] = a;
      }
      function ki(a, c, b, d) {
        b[d] = c;
      }
      function qo(a, c, b, d) {
        for (a = 0; a < c.length; ++a) b[d + a] = c[a];
      }
      function ni(a) {
        return function (c, b, d, e) {
          for (var f, g = 0, h = 0; h < b.length; ++h)
            if (((c = b.charCodeAt(h)), 128 > c)) a ? (g += 1) : (d[e++] = c);
            else {
              if (2048 > c) {
                if (a) {
                  g += 2;
                  continue;
                }
                d[e++] = (c >> 6) | 192;
              } else {
                if (
                  55296 === (c & 64512) &&
                  56320 === ((f = b.charCodeAt(h + 1)) & 64512)
                ) {
                  if (a) {
                    g += 4;
                    continue;
                  }
                  c = 65536 + ((c & 1023) << 10) + (f & 1023);
                  ++h;
                  d[e++] = (c >> 18) | 240;
                  d[e++] = ((c >> 12) & 63) | 128;
                } else {
                  if (a) {
                    g += 3;
                    continue;
                  }
                  d[e++] = (c >> 12) | 224;
                }
                d[e++] = ((c >> 6) & 63) | 128;
              }
              d[e++] = (c & 63) | 128;
            }
          return a ? g : e;
        };
      }
      function ro(a, c, b, d) {
        return to(a)(a, c, b, d);
      }
      function uo(a, c, b, d) {
        var e = 0 > c ? 1 : 0;
        e && (c = -c);
        if (0 === c) id(0 < 1 / c ? 0 : 2147483648, b, d);
        else if (a.isNaN(c)) id(2143289344, b, d);
        else if (3.4028234663852886e38 < c)
          id(((e << 31) | 2139095040) >>> 0, b, d);
        else if (1.1754943508222875e-38 > c)
          id(((e << 31) | a.Math.round(c / 1.401298464324817e-45)) >>> 0, b, d);
        else {
          var f = a.Math.floor(a.Math.log(c) / Math.LN2);
          id(
            ((e << 31) |
              ((f + 127) << 23) |
              (Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607)) >>>
              0,
            b,
            d
          );
        }
      }
      function id(a, c, b) {
        c[b] = a & 255;
        c[b + 1] = (a >>> 8) & 255;
        c[b + 2] = (a >>> 16) & 255;
        c[b + 3] = a >>> 24;
      }
      function mi(a, c, b, d) {
        a = c[0];
        for (c = c[1]; a; )
          (b[d++] = (c & 127) | 128),
            (c = ((c >>> 7) | (a << 25)) >>> 0),
            (a >>>= 7);
        for (; 127 < c; ) (b[d++] = (c & 127) | 128), (c >>>= 7);
        b[d++] = c;
      }
      function li(a) {
        if (!a) return [0, 0];
        var c = 0 > a;
        c && (a = -a);
        var b = a >>> 0;
        a = ((a - b) / 4294967296) >>> 0;
        c &&
          ((a = ~a >>> 0),
          (b = ~b >>> 0),
          4294967295 < ++b && ((b = 0), 4294967295 < ++a && (a = 0)));
        return [a, b];
      }
      function bi(a, c, b, d) {
        var e,
          f = b.J;
        f.wmode = "0";
        f["wv-hit"] = f["wv-hit"] || "" + wc(a);
        f["page-url"] = f["page-url"] || R(a).href;
        d && (f[d] = f[d] || "" + Sa(a));
        a = {
          ia: { ya: "webvisor/" + c.id },
          Z: C(b.Z || {}, {
            Wa: ((e = {}), (e["Content-Type"] = "text/plain"), e),
            Oc: "POST",
          }),
          J: f,
        };
        C(b, a);
      }
      function vo(a, c) {
        return na(c, function (b) {
          var d = H(a),
            e = d.C,
            f = v("dSync", d.D);
          J(c);
          if (e("dSync", !1)) f(1);
          else
            return (
              f(!0),
              oi(a, b, {
                ab: c,
                Jb: "s",
                Id: "ds",
                Lc: f,
                ni: function (g, h, k) {
                  var l = g.Gc;
                  g = g.host;
                  if (n(l, "settings")) return Ra(Ka("ds.e"));
                  h = h(da) - k;
                  k = g[1];
                  var m, p;
                  l = Ea(((m = {}), (m.di = l), (m.dit = h), (m.dip = k), m));
                  m = ((p = {}), (p["page-url"] = R(a).href), p);
                  return ra(
                    a,
                    "S",
                    pi
                  )({ K: l, J: m }, pi).then(v(10, f), z(a, "ds.rs"));
                },
              })
            );
        });
      }
      function oi(a, c, b) {
        var d,
          e = b.ab,
          f = b.Lc;
        f = void 0 === f ? F : f;
        var g = ka(a),
          h = wo(a, c.userData, e),
          k = xo(a),
          l = w(qi, E([yo, zo], ge))(a),
          m = n(c, "settings.sbp");
        b.Lc = f;
        m && (b.data = C({}, m, ((d = {}), (d.c = e.id), d)));
        return k.length
          ? Ao(a, g, h, c, l, b).then(function () {
              return Bo(a, k, h, g, l, b);
            }, F)
          : (f(2), K.resolve());
      }
      function xo(a) {
        var c = he(a);
        a = w(Af, nc(["iPhone", "iPad"]))(a);
        return c ? Co : a ? Do : [];
      }
      function Bo(a, c, b, d, e, f) {
        e = f.ni;
        var g = void 0 === e ? F : e,
          h = f.Id;
        e = f.Lc;
        var k = void 0 === e ? F : e,
          l = d(da);
        return Eo(
          a,
          c,
          f
        )(
          Xa(
            function (m) {
              k(6);
              x(function (p) {
                p && Hc(a, h + ".s", p);
              }, m);
              m = d(mb);
              b.D(h, m).then(v(7, k));
            },
            function (m) {
              k(8);
              b.D(h, d(mb)).then(v(9, k));
              g(m, d, l);
            }
          )
        );
      }
      function Ao(a, c, b, d, e, f) {
        var g = f.Id,
          h = f.ab,
          k = f.Lc;
        return new K(function (l, m) {
          var p = b.C(g, 0);
          p = parseInt("" + p, 10);
          return c(mb) - p <= e.le
            ? (k(3), m())
            : Fo(a)
            ? l(void 0)
            : ef(d)
            ? (k(4), m())
            : l(Go(a, h)["catch"](w(jd(v(5, k)), Ra)));
        });
      }
      function Eo(a, c, b) {
        var d = b.Jb,
          e = b.data,
          f = ra(a, d, b.ab);
        a = C({}, ri);
        e && C(a.J, e);
        return Ho(
          B(function (g) {
            return Io(
              f(
                C({ Z: { ye: !1, Yd: !0 } }, ri),
                B(function (h) {
                  var k = h[1],
                    l = h[2];
                  h = L(
                    "",
                    B(function (m) {
                      return String.fromCharCode(m.charCodeAt(0) + 10);
                    }, h[0].split(""))
                  );
                  return (
                    "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Jo[d]
                  );
                }, g)
              ).then(function (h) {
                return C({}, h, { host: g[h.Xf] });
              })
            );
          }, c)
        );
      }
      function wo(a, c, b) {
        var d = c || {},
          e = ra(a, "u", b),
          f = Va(a);
        return {
          C: function (g, h) {
            return Y(d[g]) ? f.C(g, h) : d[g];
          },
          D: function (g, h) {
            var k,
              l = "" + h;
            d[g] = l;
            f.D(g, l);
            return e(
              { J: ((k = {}), (k.key = g), (k.value = l), k) },
              [wa.Oa + "//" + bc + "/user_storage_set"],
              {}
            )["catch"](z(a, "u.d.s.s"));
          },
        };
      }
      function Ko(a) {
        return {
          O: function (c, b) {
            H(a).C("oo") || b();
          },
        };
      }
      function Lo(a, c) {
        try {
          var b = c[0];
          var d = b[1];
        } catch (e) {
          return function () {
            return K.resolve();
          };
        }
        return function (e) {
          var f,
            g =
              ((f = {}),
              (f["browser-info"] = Mo),
              (f["page-url"] = a.location && "" + a.location.href),
              f);
          return d && (e = Hb(a, e))
            ? d(No, { Xa: g, fa: [], ba: "site-info=" + be(e) })["catch"](F)
            : K.resolve();
        };
      }
      function Oo(a, c) {
        var b = Bf(function (d, e) {
          return d[1].ca > e[1].ca ? 1 : -1;
        }, Ga(Md));
        b = B(function (d) {
          var e = d[0],
            f = d[1].La;
          d = Eb(c, e) && !ba(c[e]);
          e = c[e] !== (f || S)(void 0);
          return sb(d && e);
        }, b);
        return ie(L("", b));
      }
      function Po(a, c) {
        if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
          var b = J(c);
          delete H(a).C("counters", {})[b];
          Ra(Ka("oo.e"));
        }
      }
      function Qo(a) {
        if (je(a)) return null;
        var c = Ro(a),
          b = c.qf;
        Y(b) &&
          ((c.qf = null),
          So(a).then(function (d) {
            c.qf = d;
          }));
        return b ? 1 : null;
      }
      function To(a, c, b) {
        b = b.J;
        if ((void 0 === b ? {} : b).nohit) return null;
        a = kd(a);
        if (!a) return null;
        var d = (b = null);
        n(a, "getEntriesByType") &&
          (d = n(a.getEntriesByType("navigation"), "0")) &&
          (b = Uo);
        if (!b) {
          var e = n(a, "timing");
          e && ((b = Vo), (d = e));
        }
        if (!b) return null;
        a = Wo(a, d, b);
        c = J(c);
        c = Xo(c);
        return (c = Yo(c, a)) && L(",", c);
      }
      function Yo(a, c) {
        var b = a.length
          ? B(function (d, e) {
              var f = c[e];
              return f === d ? null : f;
            }, a)
          : c;
        a.length = 0;
        x(w(S, db("push", a)), c);
        return ha(Aa(null), b).length === a.length ? null : b;
      }
      function Wo(a, c, b) {
        return B(function (d) {
          var e = d[0],
            f = d[1];
          if (V(e)) return e(a, c) || null;
          if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
          var g;
          !(g = c[e] && c[f]) &&
            (g = 0 === c[e] && 0 === c[f]) &&
            ((g = d[1]), (g = !(si[d[0]] || si[g])));
          if (!g) return null;
          d = Math.round(c[e]) - Math.round(c[f]);
          return 0 > d || 36e5 < d ? null : d;
        }, b);
      }
      function ke(a, c) {
        try {
          var b = c.localStorage.getItem(a);
          return b && Zc(Pd(b));
        } catch (d) {}
        return null;
      }
      function Pd(a) {
        for (var c = [], b = 0; b < a.length; b++) {
          var d = a.charCodeAt(b);
          128 > d
            ? c.push(d)
            : (127 < d && 2048 > d
                ? c.push((d >> 6) | 192)
                : (c.push((d >> 12) | 224), c.push(((d >> 6) & 63) | 128)),
              c.push((d & 63) | 128));
        }
        return c;
      }
      function Zc(a, c) {
        void 0 === c && (c = !1);
        for (var b = a.length, d = b - (b % 3), e = [], f = 0; f < d; f += 3) {
          var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
          e.push(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 18) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 12) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 6) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              g & 63
            ]
          );
        }
        switch (b - d) {
          case 1:
            b = a[d] << 4;
            e.push(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                (b >> 6) & 63
              ],
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                b & 63
              ],
              "=",
              "="
            );
            break;
          case 2:
            (b = (a[d] << 10) + (a[d + 1] << 2)),
              e.push(
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 12) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 6) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  b & 63
                ],
                "="
              );
        }
        e = L("", e);
        return c ? ti(e, !0) : e;
      }
      function Ch(a, c) {
        void 0 === c && (c = !1);
        var b = a,
          d = "",
          e = 0;
        if (!b) return "";
        for (c && (b = ti(b)); b.length % 4; ) b += "=";
        do {
          var f = cc(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              b.charAt(e++)
            ),
            g = cc(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              b.charAt(e++)
            ),
            h = cc(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              b.charAt(e++)
            ),
            k = cc(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              b.charAt(e++)
            );
          if (0 > f || 0 > g || 0 > h || 0 > k) return "";
          var l = (f << 18) | (g << 12) | (h << 6) | k;
          f = (l >> 16) & 255;
          g = (l >> 8) & 255;
          l &= 255;
          d =
            64 === h
              ? d + String.fromCharCode(f)
              : 64 === k
              ? d + String.fromCharCode(f, g)
              : d + String.fromCharCode(f, g, l);
        } while (e < b.length);
        return d;
      }
      function ti(a, c) {
        void 0 === c && (c = !1);
        return a
          ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
              return Zo[b] || b;
            })
          : "";
      }
      function $o(a, c) {
        for (var b = "", d = 0; d < c; d += 1) b += a;
        return b;
      }
      function ap(a, c, b, d, e, f, g, h) {
        var k = b.C(f);
        ba(k) && (b.D(f, g), e(a, c, b, d), (k = b.C(f, g)));
        Y(h) || h.Nb(f, "" + k);
        return k;
      }
      function le(a, c, b) {
        return function (d) {
          var e,
            f,
            g = Ca(c, b);
          g &&
            bp(a, d, c) &&
            ((g = I(g.params, g)),
            (d = Cf({ event: a, Ha: "products", va: dc, mh: "goods" }, d)) &&
              g &&
              g(((e = {}), (e.__ym = ((f = {}), (f.ecommerce = [d]), f)), e)));
        };
      }
      function bp(a, c, b) {
        var d = !1,
          e = "";
        if (!ia(c)) return Db(b, "", "ecomeo"), d;
        var f = c.goods;
        switch (a) {
          case "detail":
          case "add":
          case "remove":
            O(f) && f.length
              ? (d = ui(function (g) {
                  return ia(g) && (fa(g.id) || ec(b, g.id) || fa(g.name));
                }, f)) || (e = "ecomgi")
              : (e = "ecomgei");
            break;
          case "purchase":
            ec(b, c.id) || fa(c.id) ? (d = !0) : (e = "ecompi");
        }
        Db(b, "", e);
        return d;
      }
      function ld(a, c) {
        return {
          O: function (b, d) {
            Df(b)
              ? d()
              : na(c, function (e) {
                  var f;
                  if ((e = n(e, "settings.hittoken")))
                    (e = ((f = {}), (f.hittoken = e), f)),
                      (b.J = C(b.J || {}, e));
                  d();
                });
          },
        };
      }
      function cp(a, c) {
        var b = n(c, "origin"),
          d;
        if ((d = b)) d = dp.test(b) || ep.test(b);
        d &&
          ((b = Gb(a, c.data)),
          "appendremote" === n(b, "action") && fp(a, c, b));
      }
      function vi(a, c, b) {
        var d, e, f;
        void 0 === b && (b = "");
        var g = H(a),
          h = {};
        h.getCachedTags = Ef;
        h.form =
          ((d = {}),
          (d.closest = v(a, wi)),
          (d.select = gp),
          (d.getData = v(a, xi)),
          d);
        h.button =
          ((e = {}),
          (e.closest = v(a, We)),
          (e.select = yi),
          (e.getData = v(a, Xe)),
          e);
        h.status = ((f = {}), (f.checkStatus = E([a, Da(b)], hp)), f);
        g.D("_u", h);
        c && Fc(a, { src: c });
      }
      function zi(a) {
        var c = a.lang;
        c = void 0 === c ? "" : c;
        var b = a.appVersion;
        b = void 0 === b ? "" : b;
        var d = a.fileId;
        d = void 0 === d ? "" : d;
        a = a.beta;
        a = void 0 === a ? !1 : a;
        b = L(".", La(B(w(S, Da), b.split("."))));
        if (!G(d, ip) || !G(c, ["ru", "en", "tr"])) return "";
        c =
          (a
            ? "https://s3.mds.yandex.net/internal-metrika-betas"
            : "https://yastatic.net/s3/metrika") +
          (b ? "/" + b : "") +
          "/form-selector/" +
          (d + "_" + c + ".js");
        return Ai(c) ? c : "";
      }
      function jp(a, c) {
        var b = Pb(a);
        if (b) {
          var d = b("div"),
            e = Zb(a);
          if (e) {
            d.innerHTML =
              '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
            var f = d.firstChild;
            f.onload = function () {
              var h = b("meta");
              h.setAttribute("http-equiv", "Content-Security-Policy");
              h.setAttribute("content", "script-src *");
              f.contentWindow.document.head.appendChild(h);
              Fc(f.contentWindow, { src: c });
            };
            a._ym__remoteIframeEl = f;
            e.appendChild(d);
            d.removeChild(f);
            var g = null;
            d.attachShadow
              ? (g = d.attachShadow({ mode: "open" }))
              : d.createShadowRoot
              ? (g = d.createShadowRoot())
              : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
            g
              ? g.appendChild(f)
              : (e.appendChild(f), (a._ym__remoteIframeContainer = f));
          }
        }
      }
      function hp(a) {
        var c,
          b = Bi(a);
        a = H(a).C("getCounters", md)();
        a = B(T("id"), a);
        return (c = { id: b }), (c.counterFound = !!b && G(b, a)), c;
      }
      function Ci(a, c, b, d) {
        if (c) {
          var e = [];
          c &&
            (a.document.documentElement.contains(c)
              ? Xd(a, c, db("push", e), d)
              : xa(e, Di(a, c, d)));
          x(b, e);
        }
      }
      function Xd(a, c, b, d, e, f) {
        function g(k) {
          return V(d)
            ? d(k)
              ? a.NodeFilter.FILTER_ACCEPT
              : a.NodeFilter.FILTER_REJECT
            : a.NodeFilter.FILTER_ACCEPT;
        }
        void 0 === e && (e = -1);
        void 0 === f && (f = !1);
        var h = g(c);
        if (
          V(b) &&
          (f || h === a.NodeFilter.FILTER_ACCEPT) &&
          (h && b(c), !xf(c))
        )
          for (
            c = a.document.createTreeWalker(
              c,
              e,
              d ? { acceptNode: g } : null,
              !1
            );
            c.nextNode() && !1 !== b(c.currentNode);

          );
      }
      function Di(a, c, b) {
        var d = [],
          e = w(S, db("push", d));
        V(b)
          ? ((b = b(c)), (ba(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c))
          : e(c);
        if (c.childNodes && 0 < c.childNodes.length) {
          c = c.childNodes;
          b = 0;
          for (var f = c.length; b < f; b += 1) {
            var g = Di(a, c[b]);
            x(e, g);
          }
        }
        return d;
      }
      function Ei(a, c, b) {
        var d;
        a = [
          Fi(a, c, function (e) {
            d = e;
            e.xa.F(b);
          }),
          function () {
            d && d.unsubscribe();
          },
        ];
        return E([me, a], x);
      }
      function kp(a, c, b, d) {
        var e, f, g;
        if (b) {
          var h = n(d, "ecommerce") || {};
          var k = n(d, "event") || "";
          h = ia(h) && fa(k) ? Cf(k, h) : void 0;
          if (!h)
            a: {
              var l = d;
              !O(d) && ec(a, Za(d)) && (l = Ja(l));
              if (
                O(l) &&
                ((h = l[0]),
                (k = l[1]),
                (l = l[2]),
                fa(k) && ia(l) && "event" === h)
              ) {
                h = Cf(k, l);
                break a;
              }
              h = void 0;
            }
          if ((d = h || lp(d)))
            nb(
              a,
              ((e = {}),
              (e.counterKey = c),
              (e.name = "ecommerce"),
              (e.data = d),
              e)
            ),
              b(((f = {}), (f.__ym = ((g = {}), (g.ecommerce = [d]), g)), f));
        }
      }
      function lp(a) {
        var c = n(a, "ecommerce");
        if (ia(c))
          return (
            (a = ha(nc(mp), ea(c))),
            (a = P(
              function (b, d) {
                b[d] = c[d];
                return b;
              },
              {},
              a
            )),
            0 === ea(a).length ? void 0 : a
          );
      }
      function Cf(a, c) {
        var b,
          d,
          e = fa(a) ? np[a] : a;
        if (e) {
          var f = e.event,
            g = e.Ha,
            h = e.mh,
            k = void 0 === h ? "items" : h,
            l = c.purchase || c;
          if ((h = l[k])) {
            e = B(v(e.va, op), h);
            var m = ((b = {}), (b[f] = g ? ((d = {}), (d[g] = e), d) : e), b);
            b = ea(l);
            g &&
              1 < b.length &&
              (m[f].actionField = tb(
                function (p, q) {
                  if (q === k) return p;
                  if ("currency" === q) return (m.currencyCode = l.currency), p;
                  p[pp[q] || Ff[q] || q] = l[q];
                  return p;
                },
                {},
                b
              ));
            return m;
          }
        }
      }
      function op(a, c) {
        var b = {};
        x(function (d) {
          var e = a[d] || Ff[d] || d;
          -1 !== lb(d, "item_category")
            ? ((e = Ff.item_category),
              (b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]))
            : (b[e] = c[d]);
        }, ea(c));
        return b;
      }
      function qp(a, c, b) {
        var d,
          e,
          f,
          g = n(b, "target");
        if (g && ((g = We(a, g)), (g = Xe(a, g)))) {
          g = "?" + xc(g);
          var h = fc(a, c, "gbn", ((d = {}), (d.id = c.id), (d.query = g), d));
          b = n(b, "isTrusted");
          b = ba(b)
            ? void 0
            : ((e = {}), (e.__ym = ((f = {}), (f.ite = sb(b)), f)), e);
          ne(a, c, "btn", h).reachGoal(g, b);
        }
      }
      function Qe(a, c, b, d) {
        return function () {
          if (Ca(a, c)) {
            var e = Ja(arguments);
            return d.apply(void 0, e);
          }
        };
      }
      function rp(a, c, b, d) {
        var e = n(d, "target");
        e &&
          ((d = n(d, "isTrusted")),
          (e = gc("button,input", a, e)) &&
            "submit" === e.type &&
            (e = wi(a, e))) &&
          (b.push(e), U(a, E([!1, a, c, b, e, d], Gi), 300));
      }
      function Gi(a, c, b, d, e, f) {
        var g,
          h,
          k,
          l = Kb(c)(e, d),
          m = -1 !== l;
        if (a || m)
          m && d.splice(l, 1),
            (a = xi(c, e)),
            (a = "?" + xc(a)),
            (d = E(
              [c, b, "fg", ((g = {}), (g.id = b.id), (g.query = a), g)],
              Hi
            )),
            (f = ba(f)
              ? void 0
              : ((h = {}), (h.__ym = ((k = {}), (k.ite = sb(f)), k)), h)),
            ne(c, b, "form", d).reachGoal(a, f);
      }
      function Hi(a, c, b, d) {
        return sp(a, c).then(w(E([fc(a, c, b, d), F], ge), qa));
      }
      function xi(a, c, b) {
        return Ii(a, c, ["i", "n", "p"], void 0, b);
      }
      function tp(a, c) {
        var b;
        a(((b = {}), (b.clickmap = Y(c) ? !0 : c), b));
      }
      function up(a, c, b, d, e) {
        var f,
          g = "clmap/" + e.id;
        c = ((f = {}), (f["page-url"] = c), (f["pointer-click"] = b), f);
        f = { K: Ea(), J: c, ia: { ya: g } };
        d(f, e)["catch"](z(a, "c.s.c"));
      }
      function vp(a, c, b, d, e) {
        if (Eb(a, "ymDisabledClickmap") || !c || !c.element) return !1;
        a = Ha(c.element);
        if (
          (e && !e(c.element, a)) ||
          (G(c.button, [2, 3]) && "A" !== a) ||
          Wa(Aa(a), d)
        )
          return !1;
        d = c.element;
        if (c && b) {
          if (50 > c.time - b.time) return !1;
          e = Math.abs(b.position.x - c.position.x);
          a = Math.abs(b.position.y - c.position.y);
          c = c.time - b.time;
          if (b.element === d && 2 > e && 2 > a && 1e3 > c) return !1;
        }
        for (; d; ) {
          if (wp(d)) return !1;
          d = d.parentElement;
        }
        return !0;
      }
      function xp(a, c) {
        var b = null;
        try {
          if ((b = c.target || c.srcElement))
            !b.ownerDocument && b.documentElement
              ? (b = b.documentElement)
              : b.ownerDocument !== a.document && (b = null);
        } catch (d) {}
        return b;
      }
      function yp(a) {
        var c = a.which;
        a = a.button;
        return c || void 0 === a
          ? c
          : 1 === a || 3 === a
          ? 1
          : 2 === a
          ? 3
          : 4 === a
          ? 2
          : 0;
      }
      function Ji(a, c) {
        var b = Zb(a),
          d = Gf(a);
        return {
          x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
          y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0,
        };
      }
      function oe(a, c) {
        return {
          O: function (b, d) {
            var e,
              f = b.K,
              g = b.Fa,
              h = b.J,
              k = b.Z;
            k = void 0 === k ? {} : k;
            if (f && h) {
              var l = ka(a);
              f.Nb("rqnl", 1);
              for (var m = nd(a), p = 1; m[p]; ) p += 1;
              b.M || (b.M = {});
              b.M.Kb = p;
              m[p] =
                ((e = {}),
                (e.protocol = wa.Oa),
                (e.host = bc),
                (e.resource = b.ia.ya),
                (e.postParams = k.ba),
                (e.time = l(da)),
                (e.counterType = c.aa),
                (e.params = h),
                (e.browserInfo = f.l()),
                (e.counterId = c.id),
                (e.ghid = wc(a)),
                e);
              g && (m[p].telemetry = g.l());
              Hf(a);
            }
            d();
          },
          ma: function (b, d) {
            Ki(a, b);
            d();
          },
        };
      }
      function Ki(a, c) {
        var b = nd(a);
        c.K && !$a(b) && c.M && (delete b[c.M.Kb], Hf(a));
      }
      function Hf(a) {
        var c = nd(a);
        Va(a).D("retryReqs", c);
      }
      function zp(a, c) {
        if (a.yi()) {
          var b = Li(c);
          if (b && !ac("ym-disable-tracklink", b)) {
            var d = a.l,
              e = a.Ag,
              f = a.ab,
              g = a.sender,
              h = a.Mg,
              k = f.ic,
              l = b.href;
            var m = Ya(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
            m ||
              (m = (m = b.querySelector("img"))
                ? Ya(m.getAttribute("title") || m.getAttribute("alt"))
                : "");
            m = l === m ? "" : m;
            var p = n(c, "isTrusted");
            if (ac("ym-external-link", b))
              pe(d, f, { url: l, jb: !0, title: m, sc: p, sender: g });
            else {
              k = k ? Ic(d, k).hostname : R(d).hostname;
              h = RegExp("\\.(" + L("|", B(Ap, h)) + ")$", "i");
              var q = b.protocol + "//" + b.hostname + b.pathname;
              h = Mi.test(q) || Mi.test(l) || h.test(l) || h.test(q);
              b = b.hostname;
              qe(k) === qe(b)
                ? h
                  ? pe(d, f, { url: l, qc: !0, sc: p, title: m, sender: g })
                  : m && e.D("il", Ya(m).slice(0, 100))
                : (l && Bp.test(l)) ||
                  pe(d, f, {
                    url: l,
                    vc: !0,
                    jb: !0,
                    qc: h,
                    sc: p,
                    title: m,
                    sender: g,
                  });
            }
          }
        }
      }
      function pe(a, c, b) {
        var d,
          e,
          f,
          g,
          h = Ea();
        void 0 !== b.sc && h.D("ite", sb(b.sc));
        b.qc && h.D("dl", 1);
        b.jb && h.D("ln", 1);
        var k = b.Zf || {};
        h = {
          K: h,
          M: { title: k.title || b.title, vc: !!b.vc, T: k.params },
          J:
            ((d = {}),
            (d["page-url"] = b.url),
            (d["page-ref"] = c.ic || R(a).href),
            d),
        };
        d = "Link";
        b.qc
          ? (d = b.jb ? "Ext link - File" : "File")
          : b.jb && (d = "Ext link");
        nb(
          a,
          ((e = {}),
          (e.counterKey = J(c)),
          (e.name = "event"),
          (e.data =
            ((f = {}),
            (f.schema = "Link click"),
            (f.name = (b.jb ? "external" : "internal") + " url: " + b.url),
            f)),
          e)
        );
        c = b
          .sender(h, c)
          .then(
            fc(
              a,
              c,
              "lcl",
              ((g = {}), (g.prefix = d), (g.id = c.id), (g.url = b.url), g),
              b.Zf
            )
          );
        return Lc(a, "cl.p.s", c, k.callback || F, k.ctx);
      }
      function Cp(a, c) {
        var b,
          d,
          e =
            ((b = {}), (b.string = !0), (b.object = !0), (b["boolean"] = c), b)[
              typeof c
            ] || !1;
        a(((d = {}), (d.trackLinks = e), d));
      }
      function Dp(a, c, b, d) {
        var e = R(a),
          f = e.hostname;
        e = e.href;
        if ((c = od(c).url)) (a = Ic(a, c)), (f = a.hostname), (e = a.href);
        return [d + "://" + f + "/" + b, e || ""];
      }
      function Ni(a) {
        return (a.split(":")[1] || "")
          .replace(/^\/*/, "")
          .replace(/^www\./, "")
          .split("/")[0];
      }
      function Ep(a, c, b, d) {
        var e;
        if ((a = Ca(a, b))) {
          var f = d.data;
          b = "" + b.id;
          var g = d.sended || [];
          d.sended || (d.sended = g);
          G(b, g) ||
            !a.params ||
            (d.counter && "" + d.counter !== b) ||
            (a.params(f),
            g.push(b),
            d.parent && c.Kf(((e = {}), (e.type = "params"), (e.data = f), e)));
        }
      }
      function rh(a, c, b) {
        void 0 === b && (b = S);
        var d = cd(a);
        b(d);
        var e = v(d, Fp);
        re(a, c, function (f) {
          f.xa.F(e);
        });
        return d;
      }
      function Fp(a, c) {
        var b = n(c, "ymetrikaEvent");
        b && a.$(n(b, "type"), b);
      }
      function re(a, c, b, d) {
        void 0 === b && (b = F);
        void 0 === d && (d = !1);
        var e = Oi(a);
        if (c && V(c.push)) {
          var f = c.push;
          c.push = function () {
            var g = Ja(arguments),
              h = g[0];
            d && e.$(h);
            g = f.apply(c, g);
            d || e.$(h);
            return g;
          };
          a = {
            xa: e,
            unsubscribe: function () {
              c.push = f;
            },
          };
          b(a);
          x(e.$, c);
          return a;
        }
      }
      function Qd(a) {
        a = H(a);
        var c = a.C("dataLayer", []);
        a.D("dataLayer", c);
        return c;
      }
      function zm(a, c) {
        var b, d;
        G(c, B(T("ymetrikaEvent.type"), a)) ||
          a.push(
            ((b = {}), (b.ymetrikaEvent = ((d = {}), (d.type = c), d)), b)
          );
      }
      function Pi(a, c) {
        var b = ad(a, c),
          d = [],
          e = [];
        if (!b) return null;
        var f = E([a, b.ae], Gp),
          g = v(f, Hp);
        b.X.F(["initToParent"], function (h) {
          g(d, b.children[h[1].counterId]);
        }).F(["parentConnect"], function (h) {
          g(e, b.Ca[h[1].counterId]);
        });
        return {
          X: b.X,
          jj: function (h, k) {
            return new K(function (l, m) {
              b.ae(h, k, function (p, q) {
                l([p, q]);
              });
              U(a, v(Ka(), m), 5100, "is.o");
            });
          },
          Jf: function (h) {
            var k = { Mf: [], qe: [], data: h };
            d.push(k);
            return f(b.children, k, h);
          },
          Kf: function (h) {
            var k = { Mf: [], qe: [], data: h };
            e.push(k);
            return f(b.Ca, k, h);
          },
        };
      }
      function Hp(a, c, b) {
        c = ha(function (d) {
          return !G(b.info.counterId, d.qe);
        }, c);
        x(function (d) {
          var e;
          b.info.counterId &&
            a(((e = {}), (e[b.info.counterId] = b), e), d, d.data);
        }, c);
      }
      function Gp(a, c, b, d, e) {
        return new K(function (f, g) {
          var h = ea(b),
            k = w(d.resolve || S, jd(f)),
            l = w(d.reject || S, jd(g));
          d.resolve = k;
          d.reject = l;
          x(function (m) {
            var p;
            d.qe.push(+m);
            var q = b[m],
              r = U(a, v(Ka(), l), 5100, "is.m");
            c(
              q.window,
              C(e, ((p = {}), (p.toCounter = Da(m)), p)),
              function (t, y) {
                la(a, r);
                d.Mf.push(m);
                d.resolve && d.resolve(y);
              }
            );
          }, h);
        })["catch"](z(a, "if.b"));
      }
      function Ip(a) {
        var c = F,
          b = null,
          d = a.length;
        if (0 !== a.length && a[0]) {
          var e = a.slice(-1)[0];
          V(e) && ((c = e), (d = a.length + -1));
          var f = a.slice(-2)[0];
          V(f) && ((c = f), (b = e), (d = a.length + -2));
          d = a.slice(0, d);
          return { Cg: b, Sb: c, T: 1 === d.length ? a[0] : ae(d) };
        }
      }
      function Lc(a, c, b, d, e) {
        var f = E([a, d, e], If);
        return b.then(f, function (g) {
          f();
          Hc(a, c, g);
        });
      }
      function Jf(a, c) {
        return {
          O: function (b, d) {
            var e,
              f,
              g = (b.M || {}).T,
              h = b.Z;
            h = void 0 === h ? {} : h;
            if (g && (Qi(c, g), !h.ba && b.K && b.J)) {
              var k = Hb(a, g),
                l = Ri(a),
                m = b.K.C("pv");
              k &&
                !b.J.nohit &&
                (nb(
                  a,
                  ((e = {}),
                  (e.counterKey = J(c)),
                  (e.name = "params"),
                  (e.data = ((f = {}), (f.val = g), f)),
                  e)
                ),
                m
                  ? encodeURIComponent(k).length > wa.dg
                    ? l.push([b.K, g])
                    : (b.J["site-info"] = k)
                  : ((h.ba = k),
                    (b.Z = h),
                    b.Dc || (b.Dc = {}),
                    (b.Dc.Mh = !0)));
            }
            d();
          },
          ma: function (b, d) {
            var e = Ri(a),
              f = Ca(a, c),
              g = f && f.params;
            g &&
              ((f = ha(w(pd, Aa(b.K)), e)),
              x(function (h) {
                g(h[1]);
                h = se(a)(h, e);
                e.splice(h, 1);
              }, f));
            d();
          },
        };
      }
      function te(a, c) {
        return function (b) {
          Kf(a, c, b);
        };
      }
      function Jp(a, c) {
        Lf(a)(function (b) {
          delete b[c];
        });
      }
      function Kf(a, c, b) {
        Lf(a)(function (d) {
          d[c] = C(d[c] || {}, b);
        });
      }
      function Lf(a) {
        a = H(a);
        var c = a.C("dsjf") || Ba({});
        a.Ea("dsjf", c);
        return c;
      }
      function Kp(a, c) {
        return function (b) {
          var d,
            e,
            f = Ca(a, c);
          if (f) {
            var g = hc(a, J(c));
            ia(b)
              ? Za(ea(b))
                ? (b = Si(a, b)) &&
                  Za(b) &&
                  f.params(
                    ((d = {}), (d.__ym = ((e = {}), (e.fpmh = b), e)), d)
                  )
                : g.log("fpeo")
              : g.log("fpno");
          }
        };
      }
      function Si(a, c) {
        return P(
          function (b, d) {
            var e = d[0],
              f = d[1],
              g = f;
            f = ia(f);
            if (!f && (ec(a, g) && (g = "" + g), !fa(g))) return b;
            g = f ? Si(a, g) : g;
            Za(g) && b.push([e, g]);
            return b;
          },
          [],
          Ga(c)
        );
      }
      function Ti(a, c, b) {
        void 0 === b && (b = 0);
        c = Ga(c);
        c = P(
          function (d, e) {
            var f = e[0],
              g = e[1],
              h = ia(g);
            if (!h && (ec(a, g) && (g = "" + g), !fa(g))) return d;
            h
              ? (g = Ti(a, g, b + 1))
              : !b && G(f, Lp)
              ? (g = K.resolve(g))
              : ("phone_number" === f
                  ? (g = Ah(a, g))
                  : "email" === f && (g = zh(g)),
                (g = Ui(a, g)));
            d.push(
              g.then(function (k) {
                return [f, k];
              })
            );
            return d;
          },
          [],
          c
        );
        return K.all(c);
      }
      function zh(a) {
        var c = Ya(a).replace(/^\++/gm, "").toLowerCase(),
          b = c.lastIndexOf("@");
        if (-1 === b) return c;
        a = c.substr(0, b);
        b = c.substr(b + 1);
        if (!b || !Mp(a)) return c;
        b = b.replace("googlemail.com", "gmail.com");
        Vi(b) && (b = "yandex.ru");
        "yandex.ru" === b
          ? (a = a.replace(Mf, "-"))
          : "gmail.com" === b && (a = a.replace(Mf, ""));
        c = lb(a, "+");
        -1 !== c && (a = a.slice(0, c));
        return a + "@" + b;
      }
      function Mp(a) {
        return 1 > a.length || 64 < a.length
          ? !1
          : ui(function (c) {
              if (1 > c.length) c = !1;
              else if ('"' === c[0] && '"' === c[c.length - 1] && 2 < c.length)
                a: {
                  for (var b = 1; b + 2 < c.length; b += 1) {
                    var d = c.charCodeAt(b);
                    if (32 > d || 34 === d || 126 < d) {
                      c = !1;
                      break a;
                    }
                    if (92 === d) {
                      if (b + 2 === c.length || 32 > c.charCodeAt(b + 1)) {
                        c = !1;
                        break a;
                      }
                      b += 1;
                    }
                  }
                  c = !0;
                }
              else c = Np.test(c) ? !0 : !1;
              return c;
            }, a.split("."));
      }
      function Ah(a, c) {
        var b = Op(c),
          d = Vd(c);
        return 10 > d.length || 13 < d.length || b.startsWith("+8")
          ? Ya(c)
          : "8" === b[0]
          ? "7" + d.slice(1)
          : "+" === b[0] || ec(a, +b[0])
          ? d
          : "7" + d;
      }
      function Ui(a, c) {
        return new K(function (b, d) {
          var e = new a.TextEncoder().encode(c);
          a.crypto.subtle.digest("SHA-256", e).then(function (f) {
            f = new a.Blob([f], { type: "application/octet-binary" });
            var g = new a.FileReader();
            g.onload = function (h) {
              h = n(h, "target.result") || "";
              var k = lb(h, ",");
              -1 !== k ? b(h.substring(k + 1)) : d(Na("fpm.i"));
            };
            g.readAsDataURL(f);
          }, d);
        });
      }
      function Dl(a, c, b, d) {
        var e = Wi[b];
        return e
          ? function () {
              var f = Ja(arguments);
              f = d.apply(void 0, f);
              var g = H(a);
              g.Ea("mt", {});
              g = g.C("mt");
              var h = g[e];
              g[e] = h ? h + 1 : 1;
              return f;
            }
          : d;
      }
      function Ca(a, c) {
        var b = H(a).C("counters", {}),
          d = J(c);
        return b[d];
      }
      function fc(a, c, b, d, e) {
        return E([a, J(c), e ? [b + ".p", e] : b, d], Db);
      }
      function Db(a, c, b, d) {
        hc(a, c).log(b, d);
      }
      function Pp(a, c) {
        function b(d, e, f) {
          var g, h;
          nb(
            a,
            ((g = {}),
            (g.name = "log"),
            (g.counterKey = c),
            (g.data =
              ((h = {}),
              (h.args = O(e) ? e : [e]),
              (h.type = d),
              (h.variables = f),
              h)),
            g)
          );
        }
        return { log: v("log", b), error: v("error", b), warn: v("warn", b) };
      }
      function na(a, c) {
        var b = J(a);
        return Xi()(Qp(b)).then(c);
      }
      function Rp(a, c, b) {
        var d, e;
        c = J(c);
        var f = Nf(a);
        b = C({ Og: f(da) }, b);
        nb(
          a,
          ((d = {}),
          (d.counterKey = c),
          (d.name = "counterSettings"),
          (d.data = ((e = {}), (e.settings = b), e)),
          d)
        );
        return Xi()(Sp(c, b));
      }
      function Sp(a, c) {
        return function (b) {
          var d = b[a];
          d
            ? ((d.wf = !0), d.uf(c))
            : (b[a] = { promise: K.resolve(c), wf: !0, uf: F });
        };
      }
      function Of(a) {
        return !je(a) && Pf(a);
      }
      function qd(a) {
        return Pb(a) ? v(a, Tp) : !1;
      }
      function wb(a) {
        if (a.fetch) {
          var c = n(a, "AbortController");
          return E([a, c ? new c() : void 0], Up);
        }
        return !1;
      }
      function Pf(a) {
        var c = n(a, "navigator.sendBeacon");
        return c && Oa("sendBeacon", c)
          ? E([a, I(c, n(a, "navigator"))], Vp)
          : !1;
      }
      function Vp(a, c, b, d) {
        return new K(function (e, f) {
          var g;
          if (!n(a, "navigator.onLine")) return f();
          var h = C(d.Xa, ((g = {}), (g["force-urlencoded"] = 1), g));
          g = b + "?" + xc(h) + (d.ba ? "&" + d.ba : "");
          return 2e3 < g.length ? f(Ka("sb.tlq")) : c(g) ? e("") : f();
        });
      }
      function Tp(a, c, b) {
        return new K(function (d, e) {
          var f,
            g,
            h = "_ymjsp" + Sa(a),
            k = C(((f = {}), (f.callback = h), f), b.Xa),
            l = E([a, h], Wp);
          a[h] = function (p) {
            try {
              l(), qc(m), d(p);
            } catch (q) {
              e(q);
            }
          };
          k.wmode = "5";
          var m = Fc(a, ((g = {}), (g.src = Yi(c, b, k)), g));
          if (!m) return l(), e(Na("jp.s"));
          f = v(m, qc);
          f = w(f, v(Ka(b.fa), e));
          g = rd(a, f, b.Ma || 1e4);
          g = E([a, g], la);
          m.onload = g;
          m.onerror = w(l, g, f);
        });
      }
      function Wp(a, c) {
        try {
          delete a[c];
        } catch (b) {
          a[c] = void 0;
        }
      }
      function Mc(a) {
        var c = Pb(a);
        return c ? E([a, c], Xp) : !1;
      }
      function Xp(a, c, b, d) {
        return new K(function (e, f) {
          var g = Zb(a),
            h = c("img"),
            k = w(v(h, qc), v(Ka(d.fa), f)),
            l = rd(a, k, d.Ma || 3e3);
          h.onerror = k;
          h.onload = w(v(h, qc), v(null, e), E([a, l], la));
          k = C({}, d.Xa);
          delete k.wmode;
          h.src = Yi(b, d, k);
          ue(a) &&
            (C(h.style, {
              position: "absolute",
              visibility: "hidden",
              width: "0px",
              height: "0px",
            }),
            g.appendChild(h));
        });
      }
      function Up(a, c, b, d) {
        var e,
          f = C(d.wb ? ((e = {}), (e.wmode = "7"), e) : {}, d.Xa),
          g = c || { signal: void 0, abort: F },
          h = a.fetch(b + "?" + xc(f), {
            method: d.Oc,
            body: d.ba,
            credentials: !1 === d.ye ? "omit" : "include",
            headers: d.Wa,
            signal: g.signal,
          }),
          k = v(d.fa, Ka);
        return new K(function (l, m) {
          d.Ma &&
            rd(
              a,
              function () {
                try {
                  g.abort();
                } catch (p) {}
                m(k());
              },
              d.Ma
            );
          return h
            .then(function (p) {
              if (!p.ok) {
                if (d.Yd) return Ra(Zi(p));
                Ld(d.fa);
              }
              return d.Yd ? p.text() : d.wb ? p.json() : null;
            })
            .then(l)
            ["catch"](v(k(), m));
        });
      }
      function xb(a) {
        var c;
        if ((c = n(a, "XMLHttpRequest")))
          if ((c = "withCredentials" in new a.XMLHttpRequest())) {
            a: {
              if (
                Yp.test(a.location.host) &&
                a.opera &&
                V(a.opera.version) &&
                ((c = a.opera.version()),
                "string" === typeof c && "12" === c.split(".")[0])
              ) {
                c = !0;
                break a;
              }
              c = !1;
            }
            c = !c;
          }
        return c ? v(a, Zp) : !1;
      }
      function Zp(a, c, b) {
        var d,
          e = new a.XMLHttpRequest(),
          f = b.ba,
          g = C(b.wb ? ((d = {}), (d.wmode = "7"), d) : {}, b.Xa);
        return new K(function (h, k) {
          e.open(b.Oc || "GET", c + "?" + xc(g), !0);
          e.withCredentials = !1 !== b.ye;
          b.Ma && (e.timeout = b.Ma);
          $p(
            Ga,
            Nc(function (m) {
              e.setRequestHeader(m[0], m[1]);
            })
          )(b.Wa);
          var l = E([a, e, Ka(b.fa), b.wb, b.Yd, h, k], aq);
          e.onreadystatechange = l;
          try {
            e.send(f);
          } catch (m) {}
        });
      }
      function aq(a, c, b, d, e, f, g, h) {
        if (4 === c.readyState)
          if ((200 === c.status || e || g(b), e))
            200 === c.status ? f(c.responseText) : g(Zi(c));
          else {
            e = null;
            if (d)
              try {
                (e = Gb(a, c.responseText)) || g(b);
              } catch (k) {
                g(b);
              }
            f(e);
          }
        return h;
      }
      function Yi(a, c, b) {
        (b = xc(b)) && (a += "?" + b);
        c.ba && (a += (b ? "&" : "?") + c.ba);
        return a;
      }
      function bq(a, c, b) {
        var d = B(pd, Rb[c] || Sb);
        x(function (e) {
          return d.unshift(e);
        }, ve);
        return B(w(Ec([a, b]), qa), d);
      }
      function $i(a) {
        return {
          O: function (c, b) {
            var d = c.J;
            if (!c.K || !d) return b();
            var e = d["page-ref"],
              f = d["page-url"];
            e && f !== e ? (d["page-ref"] = aj(a, e)) : delete d["page-ref"];
            d["page-url"] = aj(a, f).slice(0, wa.fg);
            return b();
          },
        };
      }
      function aj(a, c) {
        var b = R(a),
          d = b.href,
          e = b.host,
          f = -1;
        if (!fa(c) || Y(c)) return d;
        b = c.replace(bj, "");
        if (-1 !== b.search(cq)) return b;
        var g = b.charAt(0);
        if (
          ("?" === g && ((f = d.search(/\?/)), -1 === f)) ||
          ("#" === g && ((f = d.search(/#/)), -1 === f))
        )
          return d + b;
        if (-1 !== f) return d.substr(0, f) + b;
        if ("/" === g) {
          if (((f = lb(d, e)), -1 !== f)) return d.substr(0, f + e.length) + b;
        } else return (d = d.split("/")), (d[d.length - 1] = b), L("/", d);
        return "";
      }
      function we(a, c) {
        return {
          O: function (b, d) {
            var e = cj(c);
            e = E([b, e, d], dq);
            eq(a, c, e);
          },
          ma: function (b, d) {
            var e = b.K,
              f = cj(c);
            if (e) {
              var g = f.ra;
              f.Ne === e && g && (x(qa, g), (f.ra = null));
            }
            d();
          },
        };
      }
      function dq(a, c, b) {
        var d = a.K;
        d ? (Df(a) ? ((c.Ne = d), b()) : c.ra ? c.ra.push(b) : b()) : b();
      }
      function Df(a) {
        return (a = a.K) && a.C("pv") && !a.C("ar");
      }
      function eq(a, c, b) {
        if (xe(a) && rb(a)) {
          var d = fq(c);
          if (!d.Ch) {
            d.Ch = !0;
            c = ad(a, c);
            if (!c) {
              b();
              return;
            }
            d.ra = [];
            var e = function () {
              d.ra && (x(qa, d.ra), (d.ra = null));
            };
            U(a, e, 3e3);
            c.X.F(["initToChild"], e);
          }
          d.ra ? d.ra.push(b) : b();
        } else b();
      }
      function dj(a, c) {
        return {
          O: function (b, d) {
            var e = b.K;
            if (e && (!c || c.If)) {
              var f = a.document.title;
              b.M && b.M.title && (f = b.M.title);
              var g = yc("getElementsByTagName", a.document);
              "string" !== typeof f &&
                g &&
                ((f = g("title")), (f = (f = n(f, "0.innerHtml")) ? f : ""));
              f = f.slice(0, wa.eg);
              e.D("t", f);
            }
            d();
          },
        };
      }
      function Lb(a) {
        return function (c, b) {
          return {
            O: function (d, e) {
              var f = d.K,
                g = d.J;
              f &&
                g &&
                x(function (h) {
                  var k = sd[h],
                    l = "bi",
                    m = f;
                  k || ((k = Qf[h]), (l = "tel"), (m = $e(d)));
                  k && ((k = A(l + ":" + h, k, null)(c, b, d)), m.Nb(h, k));
                }, a || gq());
              e();
            },
          };
        };
      }
      function hq(a, c) {
        var b = td(a);
        c.F(["initToParent"], function (d) {
          var e = d[0];
          d = d[1];
          window.window &&
            (b.children[d.counterId] = { info: d, window: e.source });
        })
          .F(["initToChild"], function (d) {
            var e = d[0];
            d = d[1];
            e.source === a.parent && c.$("parentConnect", [e, d]);
          })
          .F(["parentConnect"], function (d) {
            var e = d[1];
            e.counterId &&
              (b.Ca[e.counterId] = { info: e, window: d[0].source });
          });
      }
      function iq(a) {
        if (Oa("MutationObserver", a.MutationObserver)) {
          var c = td(a).children,
            b = new a.MutationObserver(function () {
              x(function (d) {
                n(c[d], "window.window") || delete c[d];
              }, ea(c));
            });
          pc(a)(
            Xa(F, function () {
              b.observe(a.document.body, { subtree: !0, childList: !0 });
            })
          );
        }
      }
      function jq(a, c) {
        return function (b, d) {
          var e,
            f = { $b: ka(a)(da), key: a.Math.random(), dir: 0 };
          b.length &&
            ((f.$b = Da(b[0])), (f.key = parseFloat(b[1])), (f.dir = Da(b[2])));
          C(d, c);
          var g =
            ((e = { data: d }),
            (e.__yminfo = L(":", ["__yminfo", f.$b, f.key, f.dir])),
            e);
          return { meta: f, Pf: Hb(a, g) || "" };
        };
      }
      function pc(a, c) {
        function b(e) {
          n(c, d) ? e() : U(a, v(e, b), 100);
        }
        void 0 === c && (c = a);
        var d = (c.nodeType ? "contentWindow." : "") + "document.body";
        return Ba(function (e, f) {
          b(f);
        });
      }
      function ud(a, c) {
        var b = c.Jd,
          d = b || "uid";
        b = b ? a.location.hostname : void 0;
        var e = Kc(a),
          f = Va(a),
          g = ka(a)(Rf),
          h = ej(a, c),
          k = h[0];
        h = h[1];
        var l = e.C("d");
        fj(a, c);
        var m = !1;
        !h && k && ((h = k), (m = !0));
        if (!h) (h = L("", [g, Sa(a, 1e6, 999999999)])), (m = !0);
        else if (!l || 15768e3 < g - Da(l)) m = !0;
        m && !c.Sa && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
        f.D(d, h);
        return h;
      }
      function kq(a, c) {
        return !c.Sa && fj(a, c);
      }
      function ej(a, c) {
        var b = Va(a),
          d = Kc(a),
          e = c.Jd || "uid";
        return [b.C(e), d.C(e)];
      }
      function wc(a) {
        var c = H(a),
          b = c.C("hitId");
        b || ((b = Sa(a)), c.D("hitId", b));
        return b;
      }
      function Xe(a, c, b) {
        var d = Ha(c);
        return d && Ii(a, c, La(["p", lq[d], "c"]), yi, b);
      }
      function We(a, c) {
        var b = gc(Sf, a, c);
        if (!b) {
          var d = gc("div", a, c);
          d && (hb(Sf + ",div", d).length || (b = d));
        }
        return b;
      }
      function Ii(a, c, b, d, e) {
        return P(
          function (f, g) {
            var h = null;
            g in gj
              ? (h = c.getAttribute && c.getAttribute(gj[g]))
              : g in Oc &&
                (h =
                  "p" === g
                    ? Oc[g](a, c, e)
                    : "c" === g
                    ? Oc[g](a, c, d)
                    : Oc[g](a, c));
            h &&
              ((h = h.slice(0, hj[g] || 100)), (f[g] = Tf[g] ? "" + rc(h) : h));
            return f;
          },
          {},
          b
        );
      }
      function Sh(a, c, b) {
        if (Wd(a)) return Ma(b.querySelectorAll(c));
        var d = ij(c.split(" "), b);
        return ha(function (e, f) {
          return Kb(a)(e, d) === f;
        }, d);
      }
      function ij(a, c) {
        var b = xa([], a),
          d = b.shift();
        if (!d) return [];
        d = c.getElementsByTagName(d);
        return b.length ? vd(v(b, ij), Ma(d)) : Ma(d);
      }
      function mc(a, c) {
        if (c.querySelector) return c.querySelector(a);
        var b = hb(a, c);
        return b && b.length ? b[0] : null;
      }
      function hb(a, c) {
        if (!c || !c.querySelectorAll) return [];
        var b = c.querySelectorAll(a);
        return b ? Ma(b) : [];
      }
      function Li(a) {
        var c = null;
        try {
          c = a.target || a.srcElement;
        } catch (b) {}
        if (c) {
          3 === c.nodeType && (c = c.parentNode);
          for (
            a = c && c.nodeName && ("" + c.nodeName).toLowerCase();
            n(c, "parentNode.nodeName") &&
            (("a" !== a && "area" !== a) ||
              (!c.href && !c.getAttribute("xlink:href")));

          )
            a =
              (c = c.parentNode) &&
              c.nodeName &&
              ("" + c.nodeName).toLowerCase();
          return c.href ? c : null;
        }
        return null;
      }
      function Fc(a, c) {
        var b = Pb(a);
        if (b) {
          var d = a.document,
            e = b("script");
          e.src = c.src;
          e.type = c.type || "text/javascript";
          e.charset = c.charset || "utf-8";
          e.async = c.async || !0;
          try {
            var f = d.getElementsByTagName("head")[0];
            if (!f) {
              var g = d.getElementsByTagName("html")[0];
              f = b("head");
              g && g.appendChild(f);
            }
            f.insertBefore(e, f.firstChild);
            return e;
          } catch (h) {}
        }
      }
      function Nh(a, c) {
        var b = jj(a);
        G(c, b.ob) &&
          ((b.ob = ha(w(Aa(c), zc), b.ob)),
          b.ob.length || (qc(b.eb), (b.eb = null)));
      }
      function Mh(a, c, b) {
        var d = jj(c);
        G(b, d.ob) || d.ob.push(b);
        if ($a(d.eb)) {
          b = Pb(a);
          if (!b) return null;
          b = b("iframe");
          C(b.style, {
            display: "none",
            width: "1px",
            height: "1px",
            visibility: "hidden",
          });
          b.src = c;
          a = Zb(a);
          if (!a) return null;
          a.appendChild(b);
          d.eb = b;
        } else
          (a = n(d.eb, "contentWindow")) && a.postMessage("frameReinit", "*");
        return d.eb;
      }
      function mq(a, c) {
        var b = O(a) ? a : [a];
        c = c || document;
        if (c.querySelectorAll) {
          var d = L(
            ", ",
            B(function (e) {
              return "." + e;
            }, b)
          );
          return Ma(c.querySelectorAll(d));
        }
        if (c.getElementsByClassName)
          return vd(w(db("getElementsByClassName", c), Ma), b);
        d = c.getElementsByTagName("*");
        b = "(" + L("|", b) + ")";
        return ha(v(b, ac), Ma(d));
      }
      function cf(a, c, b) {
        for (
          var d = "", e = Ef(), f = Ha(c) || "*";
          c && c.parentNode && !G(f, ["BODY", "HTML"]);

        )
          (d += e[f] || "*"),
            (d += kj(a, c, b) || ""),
            (c = c.parentElement),
            (f = Ha(c) || "*");
        return Ya(d, 128);
      }
      function kj(a, c, b) {
        if ((a = ye(a, c))) {
          a = a.childNodes;
          for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
            if (d === (a[f] && a[f].nodeName)) {
              if (c === a[f]) return e;
              (b && a[f] === b) || (e += 1);
            }
        }
        return 0;
      }
      function ye(a, c) {
        var b = n(a, "document");
        return c && c !== b.documentElement
          ? c === Ac(a)
            ? b.documentElement
            : n(c, "parentNode")
          : null;
      }
      function uf(a, c) {
        var b = Uf(a, c),
          d = b.left;
        b = b.top;
        var e = ze(a, c);
        return [d, b, e[0], e[1]];
      }
      function ze(a, c) {
        var b = n(a, "document");
        if (c === Ac(a) || c === b.documentElement) {
          b = Zb(a);
          var d = wd(a);
          return [
            Math.max(b.scrollWidth, d[0]),
            Math.max(b.scrollHeight, d[1]),
          ];
        }
        return (b = dd(c))
          ? [b.width, b.height]
          : [c.offsetWidth, c.offsetHeight];
      }
      function Uf(a, c) {
        var b = c,
          d = n(a, "document"),
          e = Ha(b);
        if (
          !b ||
          !b.ownerDocument ||
          "PARAM" === e ||
          b === Ac(a) ||
          b === d.documentElement
        )
          return { left: 0, top: 0 };
        if ((d = dd(b)))
          return (
            (b = Gf(a)),
            { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }
          );
        for (e = d = 0; b; )
          (d += b.offsetLeft), (e += b.offsetTop), (b = b.offsetParent);
        return { left: d, top: e };
      }
      function gc(a, c, b) {
        if (!(c && c.Element && c.Element.prototype && c.document && b))
          return null;
        if (
          c.Element.prototype.closest &&
          Oa("closest", c.Element.prototype.closest) &&
          b.closest
        )
          return b.closest(a);
        var d = Zh(c);
        if (d) {
          for (; b && 1 === b.nodeType && !d.call(b, a); )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        if (Wd(c)) {
          for (
            a = Ma((c.document || c.ownerDocument).querySelectorAll(a));
            b && 1 === b.nodeType && -1 === Kb(c)(b, a);

          )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        return null;
      }
      function Wd(a) {
        return !(
          !Oa("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) ||
          !a.document.querySelectorAll
        );
      }
      function lj(a) {
        return Ae(a) && !Wa(Aa(a.type), nq)
          ? Be(a)
            ? !a.checked
            : !a.value
          : oq(a)
          ? !a.value
          : pq(a)
          ? 0 > a.selectedIndex
          : !0;
      }
      function Ha(a) {
        if (a)
          try {
            var c = a.nodeName;
            if (fa(c)) return c;
            c = a.tagName;
            if (fa(c)) return c;
          } catch (b) {}
      }
      function mj(a, c) {
        var b = a.document.getElementsByTagName("form");
        return Kb(a)(c, Ma(b));
      }
      function qq(a, c, b) {
        b = yc("dispatchEvent", b || a.document);
        var d = null,
          e = n(a, "Event.prototype.constructor");
        if (
          e &&
          (Oa("(Event|Object|constructor)", e) ||
            (Vf(a) && "[object Event]" === "" + e))
        )
          try {
            d = new a.Event(c);
          } catch (f) {
            if ((a = yc("createEvent", n(a, "document"))) && V(a)) {
              try {
                d = a(c);
              } catch (g) {}
              d && d.initEvent && d.initEvent(c, !1, !1);
            }
          }
        d && b(d);
      }
      function dd(a) {
        try {
          return a.getBoundingClientRect && a.getBoundingClientRect();
        } catch (c) {
          return "object" === typeof c &&
            null !== c &&
            16389 === (c.kf && c.kf & 65535)
            ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 }
            : null;
        }
      }
      function Gf(a) {
        var c = Ac(a),
          b = n(a, "document");
        return {
          x:
            a.pageXOffset ||
            (b.documentElement && b.documentElement.scrollLeft) ||
            (c && c.scrollLeft) ||
            0,
          y:
            a.pageYOffset ||
            (b.documentElement && b.documentElement.scrollTop) ||
            (c && c.scrollTop) ||
            0,
        };
      }
      function wd(a) {
        var c = Wf(a);
        if (c) {
          var b = c[2];
          return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)];
        }
        c = Zb(a);
        return [
          n(c, "clientWidth") || a.innerWidth,
          n(c, "clientHeight") || a.innerHeight,
        ];
      }
      function Wf(a) {
        var c = n(a, "visualViewport.width"),
          b = n(a, "visualViewport.height");
        a = n(a, "visualViewport.scale");
        return ba(c) || ba(b) ? null : [Math.floor(c), Math.floor(b), a];
      }
      function Zb(a) {
        var c = n(a, "document") || {},
          b = c.documentElement;
        return "CSS1Compat" === c.compatMode ? b : Ac(a) || b;
      }
      function Ac(a) {
        a = n(a, "document");
        try {
          return a.getElementsByTagName("body")[0];
        } catch (c) {
          return null;
        }
      }
      function ac(a, c) {
        try {
          return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(c.className);
        } catch (b) {
          return !1;
        }
      }
      function Bc(a) {
        var c;
        try {
          if ((c = a.target || a.srcElement))
            !c.ownerDocument && c.documentElement
              ? (c = c.documentElement)
              : c.ownerDocument !== document && (c = null);
        } catch (b) {}
        return c;
      }
      function qc(a) {
        var c = a && a.parentNode;
        c && c.removeChild(a);
      }
      function Fb(a) {
        return a ? a.innerText || "" : "";
      }
      function xf(a) {
        if (ba(a)) return !1;
        a = a.nodeType;
        return 3 === a || 8 === a;
      }
      function nj(a, c, b) {
        void 0 === c && (c = "");
        void 0 === b && (b = "_ym");
        var d = "" + b + c;
        d && (d += "_");
        return {
          Bd: rq(a),
          C: function (e, f) {
            var g = oj(a, "" + d + e);
            return $a(g) && !Y(f) ? f : g;
          },
          D: function (e, f) {
            pj(a, "" + d + e, f);
            return this;
          },
          bc: function (e) {
            qj(a, "" + d + e);
            return this;
          },
        };
      }
      function pj(a, c, b) {
        var d = Xf(a);
        a = Hb(a, b);
        if (!$a(a))
          try {
            d.setItem(c, a);
          } catch (e) {}
      }
      function oj(a, c) {
        var b = Xf(a);
        try {
          return Gb(a, b.getItem(c));
        } catch (d) {}
        return null;
      }
      function qj(a, c) {
        var b = Xf(a);
        try {
          b.removeItem(c);
        } catch (d) {}
      }
      function Xf(a) {
        try {
          return a.localStorage;
        } catch (c) {}
        return null;
      }
      function Hb(a, c, b) {
        try {
          return a.JSON.stringify(c, null, b);
        } catch (d) {
          return null;
        }
      }
      function $e(a, c, b) {
        void 0 === b && (b = null);
        a.Fa || (a.Fa = df());
        c && a.Fa.Nb(c, b);
        return a.Fa;
      }
      function Ce(a) {
        return {
          O: function (c, b) {
            var d = a.document,
              e = c.K;
            if (e && Yf(a)) {
              var f = ja(a),
                g = function (h) {
                  Yf(a) || (f.tb(d, rj, g), b());
                  return h;
                };
              f.F(d, rj, g);
              e.D("pr", "1");
            } else b();
          },
        };
      }
      function xd(a) {
        return function (c, b, d) {
          return function (e, f) {
            var g = B(w(pd, Ec([c, f]), qa), sj[a] || []);
            g = xa(g, d);
            return tj(c, b, g)(e);
          };
        };
      }
      function tj(a, c, b) {
        var d = Tb(a, c);
        return function (e) {
          return uj(b, e, !0)
            .then(function () {
              var f = e.ia || {},
                g = f.th,
                h = void 0 === g ? "" : g;
              g = f.ya;
              var k = void 0 === g ? "" : g;
              f = f.uh;
              f = B(
                function (l) {
                  return wa.Oa + "//" + ("" + h + l || bc) + "/" + k;
                },
                void 0 === f ? [bc] : f
              );
              return d(e, f);
            })
            .then(function (f) {
              var g = f.Gc;
              f = f.Xf;
              e.xf = g;
              e.ij = f;
              return uj(b, e).then(v(g, S));
            });
        };
      }
      function Tb(a, c) {
        return function (b, d) {
          return vj(a, c, d, b);
        };
      }
      function vj(a, c, b, d, e, f) {
        var g;
        void 0 === e && (e = 0);
        void 0 === f && (f = 0);
        var h = C({ fa: [] }, d.Z),
          k = c[f],
          l = k[0];
        k = k[1];
        var m = b[e];
        (h.Wa && h.Wa["Content-Type"]) ||
          !h.ba ||
          ((h.Wa = C(
            {},
            h.Wa,
            ((g = {}),
            (g["Content-Type"] = "application/x-www-form-urlencoded"),
            g)
          )),
          (h.ba = "site-info=" + be(h.ba)));
        h.Oc = h.ba ? "POST" : "GET";
        h.Xa = sq(a, d, l);
        h.ya = (d.ia || {}).ya;
        h.fa.push(l);
        C(d.Z, h);
        g = "" + m + (d.Dc && d.Dc.Mh ? "/1" : "");
        var p = 0;
        p = tq(a, g, h);
        return k(g, h)
          .then(function (q) {
            var r = p,
              t,
              y;
            nb(
              a,
              ((t = {}),
              (t.name = "requestSuccess"),
              (t.data = ((y = {}), (y.body = q), (y.requestId = r), y)),
              t)
            );
            return { Gc: q, Xf: e };
          })
          ["catch"](function (q) {
            var r = p,
              t,
              y;
            nb(
              a,
              ((t = {}),
              (t.name = "requestFail"),
              (t.data = ((y = {}), (y.error = q), (y.requestId = r), y)),
              t)
            );
            r = f + 1 >= c.length;
            t = e + 1 >= b.length;
            r && t && Ra(q);
            return vj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1);
          });
      }
      function sq(a, c, b) {
        var d = C({}, c.J);
        a = ka(a);
        c.K && (d["browser-info"] = Ea(c.K.l()).D("st", a(Rf)).Da());
        !d.t && (c = c.Fa) && (c.D("ti", b), (d.t = c.Da()));
        return d;
      }
      function tq(a, c, b) {
        var d,
          e,
          f,
          g = Sa(a),
          h = b.fa,
          k = b.ba,
          l = b.Wa,
          m = b.Xa;
        b = b.Oc;
        nb(
          a,
          ((d = {}),
          (d.name = "request"),
          (d.data =
            ((e = {}),
            (e.url = c),
            (e.requestId = g),
            (e.senderParams =
              ((f = {}),
              (f.rBody = k),
              (f.debugStack = h),
              (f.rHeaders = l),
              (f.rQuery = m),
              (f.verb = b),
              f)),
            e)),
          d)
        );
        return g;
      }
      function wj(a, c, b, d) {
        a[c] || (a[c] = []);
        b && !ba(d) && xj(a[c], b, d);
      }
      function xj(a, c, b) {
        for (var d = [c, b], e = -1e4, f = 0; f < a.length; f += 1) {
          var g = a[f],
            h = g[0];
          g = g[1];
          if (b === g && h === c) return;
          if (b < g && b >= e) {
            a.splice(f, 0, d);
            return;
          }
          e = g;
        }
        a.push(d);
      }
      function uj(a, c, b) {
        void 0 === b && (b = !1);
        return new K(function (d, e) {
          function f(k, l) {
            l();
            d();
          }
          var g = a.slice();
          g.push({ O: f, ma: f });
          var h = Yb(g, function (k, l) {
            var m = b ? k.O : k.ma;
            if (m)
              try {
                m(c, l);
              } catch (p) {
                h(uq), e(p);
              }
            else l();
          });
          h(yj);
        });
      }
      function Nb(a, c, b) {
        var d = b || "as";
        if (a.postMessage && !a.attachEvent) {
          b = ja(a);
          var e = "__ym__promise_" + Sa(a) + "_" + Sa(a),
            f = F;
          d = z(a, d, function (g) {
            try {
              var h = g.data;
            } catch (k) {
              return;
            }
            h === e && (f(), g.stopPropagation && g.stopPropagation(), c());
          });
          f = b.F(a, ["message"], d);
          a.postMessage(e, "*");
        } else U(a, c, 0, d);
      }
      function dh(a, c, b, d, e) {
        void 0 === d && (d = 1);
        void 0 === e && (e = "itc");
        c = Yb(c, b);
        $c(a, c, d)(Xa(z(a, e), F));
      }
      function $c(a, c, b, d) {
        void 0 === b && (b = 1);
        void 0 === d && (d = zj);
        Zf = Infinity === b;
        return Ba(function (e, f) {
          function g() {
            try {
              var k = c(d(a, b));
              h = h.concat(k);
            } catch (l) {
              return e(l);
            }
            c(vq);
            if (c(yd)) return f(h), Aj(a);
            Zf ? (c(d(a, 1e4)), f(h), Aj(a)) : U(a, g, 100);
          }
          var h = [];
          wq(g);
        });
      }
      function Aj(a) {
        if ($f.length) {
          var c = $f.shift();
          Zf ? c() : U(a, c, 100);
        } else ag = !1;
      }
      function wq(a) {
        ag ? $f.push(a) : ((ag = !0), a());
      }
      function nf(a) {
        return Ba(function (c, b) {
          b(a);
        });
      }
      function Io(a) {
        return Ba(function (c, b) {
          a.then(b, c);
        });
      }
      function xq(a) {
        var c = [],
          b = 0;
        return Ba(function (d, e) {
          x(function (f, g) {
            f(
              Xa(d, function (h) {
                try {
                  (c[g] = h), (b += 1), b === a.length && e(c);
                } catch (k) {
                  d(k);
                }
              })
            );
          }, a);
        });
      }
      function Ho(a) {
        var c = [],
          b = !1;
        return Ba(function (d, e) {
          function f(g) {
            c.push(g) === a.length && d(c);
          }
          x(function (g) {
            g(
              Xa(f, function (h) {
                if (!b)
                  try {
                    e(h), (b = !0);
                  } catch (k) {
                    f(k);
                  }
              })
            );
          }, a);
        });
      }
      function Xa(a, c) {
        return function (b) {
          return b(a, c);
        };
      }
      function Yb(a, c) {
        return Ba({ Ra: a, Fd: c || S, je: !1, ta: 0 });
      }
      function yj(a) {
        function c() {
          function d() {
            b = !0;
            a.ta += 1;
          }
          b = !1;
          a.Fd(a.Ra[a.ta], function () {
            d();
          });
          b || ((a.ta += 1), (d = v(a, yj)));
        }
        for (var b = !0; !yd(a) && b; ) c();
      }
      function zj(a, c) {
        return function (b) {
          var d = ka(a),
            e = d(da);
          return Bj(function (f, g) {
            d(da) - e >= c && g(Cj);
          })(b);
        };
      }
      function bg(a, c) {
        return function (b) {
          var d = ka(a),
            e = d(da);
          return cg(function (f) {
            d(da) - e >= c && Cj(f);
          })(b);
        };
      }
      function cg(a) {
        return function (c) {
          for (var b; c.Ra.length && !yd(c); )
            (b = c.Ra.pop()), (b = c.Fd(b, c.Ra)), a(c);
          return b;
        };
      }
      function yq(a) {
        yd(a) && Ra(Na("i"));
        var c = a.Fd(a.Ra[a.ta]);
        a.ta += 1;
        return c;
      }
      function vq(a) {
        a.je = !1;
      }
      function Cj(a) {
        a.je = !0;
      }
      function uq(a) {
        a.ta = a.Ra.length;
      }
      function yd(a) {
        return a.je || a.Ra.length <= a.ta;
      }
      function ub(a) {
        a = ka(a);
        return Math.round(a(Dj) / 50);
      }
      function Dj(a) {
        var c = a.Cc,
          b = c[1];
        a = c[0] && b ? b() : da(a) - a.vh;
        return Math.round(a);
      }
      function Rf(a) {
        return Math.round(da(a) / 1e3);
      }
      function mb(a) {
        return Math.floor(da(a) / 1e3 / 60);
      }
      function da(a) {
        var c = a.te;
        return 0 !== c ? c : dg(a.l, a.Cc);
      }
      function Nf(a) {
        var c = ja(a),
          b = Ej(a),
          d = { l: a, te: 0, Cc: b, vh: dg(a, b) },
          e = b[1];
        (b[0] && e) ||
          c.F(a, ["beforeunload", "unload"], function () {
            0 === d.te && (d.te = dg(a, d.Cc));
          });
        return Ba(d);
      }
      function zq(a) {
        return (10 > a ? "0" : "") + a;
      }
      function Aq(a, c) {
        return a.clearInterval(c);
      }
      function Bq(a, c, b, d) {
        return a.setInterval(z(a, "i.err." + (d || "def"), c), b);
      }
      function U(a, c, b, d) {
        return rd(a, z(a, "d.err." + (d || "def"), c), b);
      }
      function cd(a) {
        var c = {};
        return {
          F: function (b, d) {
            x(function (e) {
              n(c, e) || (c[e] = Oi(a));
              c[e].F(d);
            }, b);
            return this;
          },
          ea: function (b, d) {
            x(function (e) {
              n(c, e) && c[e].ea(d);
            }, b);
            return this;
          },
          $: function (b, d) {
            return n(c, b) ? z(a, "e." + d, c[b].$)(d) : [];
          },
        };
      }
      function Oi(a) {
        var c = [],
          b = {};
        b.bj = c;
        b.F = w(db("push", c), v(b, S));
        b.ea = w(ob(Kb(a))(c), ob(db("splice", c))(1), v(b, S));
        b.$ = w(S, ob(qa), Cq(c));
        return b;
      }
      function Fj(a, c, b, d, e, f) {
        a = Dq(a);
        var g = a.F,
          h = a.ea;
        f = f ? h : g;
        if (c[f])
          if (a.oi)
            if (e) c[f](b, d, e);
            else c[f](b, d);
          else c[f]("on" + b, d);
      }
      function A(a, c, b) {
        return function () {
          return z(arguments[0], a, c, b).apply(this, arguments);
        };
      }
      function z(a, c, b, d, e) {
        var f = b || Ra;
        return function () {
          var g = d;
          try {
            g = f.apply(e || null, arguments);
          } catch (h) {
            Hc(a, c, h);
          }
          return g;
        };
      }
      function dg(a, c) {
        var b = c || Ej(a),
          d = b[0];
        b = b[1];
        return !isNaN(d) && V(b)
          ? Math.round(b() + d)
          : a.Date.now
          ? a.Date.now()
          : new a.Date().getTime();
      }
      function Ej(a) {
        a = kd(a);
        var c = n(a, "timing.navigationStart"),
          b = n(a, "now");
        b && (b = I(b, a));
        return [c, b];
      }
      function kd(a) {
        return n(a, "performance") || n(a, "webkitPerformance");
      }
      function Hc(a, c, b) {
        var d = "u.a.e",
          e = "";
        b &&
          ("object" === typeof b
            ? (b.unk && Ra(b),
              (d = b.message),
              (e =
                ("string" === typeof b.stack &&
                  b.stack.replace(/\n/g, "\\n")) ||
                "n.s.e.s"))
            : (d = "" + b));
        Eq(d) ||
          Wa(v(d, gb), Fq) ||
          (Gq(d) && 0.1 <= a.Math.random()) ||
          x(w(S, Ec(["jserrs", d, c, e]), qa), Gj);
      }
      function Ld() {
        var a = Ja(arguments);
        return Ra(Ka(a));
      }
      function Ka(a) {
        var c = "";
        O(a) ? (c = L(".", a)) : fa(a) && (c = a);
        return Na("err.kn(" + wa.$a + ")" + c);
      }
      function Zi(a) {
        return Na(
          "http." +
            a.status +
            ".st." +
            a.statusText +
            ".rt." +
            ("" + a.responseText).substring(0, 50)
        );
      }
      function Hq(a) {
        this.message = a;
      }
      function nb(a, c) {
        if (De(a)) {
          var b = c.counterKey;
          if (b) {
            var d = b.split(":");
            b = d[1];
            d = eg(Zd(d[0]));
            if ("1" === b || d) return;
          }
          b = Iq(a);
          1e3 === b.length && b.shift();
          b.push(c);
        }
      }
      function $h(a, c, b) {
        fg(a, "metrika_enabled", "1", 0, c, b, !0);
        var d = Hj(a);
        (d = d && d.metrika_enabled) && Ij(a, "metrika_enabled", c, b, !0);
        return !!d;
      }
      function fg(a, c, b, d, e, f, g) {
        void 0 === g && (g = !1);
        if (ai(a, fe, c)) {
          var h = c + "=" + encodeURIComponent(b) + ";";
          h += "" + Jq(a);
          if (d) {
            var k = new Date();
            k.setTime(k.getTime() + 6e4 * d);
            h += "expires=" + k.toUTCString() + ";";
          }
          e && ((d = e.replace(Kq, "")), (h += "domain=" + d + ";"));
          try {
            (a.document.cookie = h + ("path=" + (f || "/"))),
              g || (Jj(a)[c] = b);
          } catch (l) {}
        }
      }
      function fe(a, c) {
        var b = Jj(a);
        return b ? b[c] || null : null;
      }
      function Hj(a) {
        try {
          var c = a.document.cookie;
          if (!ba(c)) {
            var b = {};
            x(function (d) {
              d = d.split("=");
              var e = d[1];
              b[Ya(d[0])] = Ya(Kj(e));
            }, (c || "").split(";"));
            return b;
          }
        } catch (d) {}
        return null;
      }
      function ai(a, c, b) {
        return !gg.length || G(b, Ee)
          ? !0
          : P(
              function (d, e) {
                return d && e(a, c, b);
              },
              !0,
              gg
            );
      }
      function xc(a) {
        return a
          ? w(
              Ga,
              Lj(function (c, b) {
                var d = b[0],
                  e = b[1];
                Y(e) || ba(e) || c.push(d + "=" + be(e));
                return c;
              }, []),
              Lq("&")
            )(a)
          : "";
      }
      function Mq(a) {
        return a
          ? w(
              Nc(function (c) {
                c = c.split("=");
                var b = c[1];
                return [c[0], ba(b) ? void 0 : Kj(b)];
              }),
              Lj(function (c, b) {
                c[b[0]] = b[1];
                return c;
              }, {})
            )(a.split("&"))
          : {};
      }
      function Kj(a) {
        var c = "";
        try {
          c = decodeURIComponent(a);
        } catch (b) {}
        return c;
      }
      function be(a) {
        try {
          return encodeURIComponent(a);
        } catch (c) {}
        a = L(
          "",
          ha(function (c) {
            return 55296 >= c.charCodeAt(0);
          }, a.split(""))
        );
        return encodeURIComponent(a);
      }
      function Ya(a, c) {
        if (a) {
          var b = Mj ? Mj.call(a) : ("" + a).replace(bj, "");
          return c && b.length > c ? b.substring(0, c) : b;
        }
        return "";
      }
      function Vi(a) {
        var c = a.match(Nj);
        if (c) {
          a = c[1];
          if ((c = c[2])) return G(c, hg) ? c : !1;
          if (a) return hg[0];
        }
        return !1;
      }
      function R(a) {
        return P(
          function (c, b) {
            var d = n(a, "location." + b);
            c[b] = d ? "" + d : "";
            return c;
          },
          {},
          Nq
        );
      }
      function Oj(a) {
        return P(
          function (c, b) {
            c[Md[b[0]].ca] = b[1];
            return c;
          },
          {},
          Ga(a)
        );
      }
      function ic(a) {
        x(function (c) {
          var b = c[1];
          Md[c[0]] = { ca: b.ca, La: b.La };
        }, Ga(a));
      }
      function Cl(a, c, b, d, e) {
        var f = ch(a, b, d, e);
        a = P(
          function (g, h) {
            var k = h[1],
              l = k.La;
            k = f[k.ca];
            g[h[0]] = l ? l(k) : k;
            return g;
          },
          {},
          Ga(c)
        );
        Qi(a, a.T || {});
        return a;
      }
      function ch(a, c, b, d) {
        var e;
        return ia(a)
          ? a
          : ((e = {}),
            (e.id = a),
            (e.type = b),
            (e.defer = d),
            (e.params = c),
            e);
      }
      function Oq(a) {
        a = J(a);
        return (jc[a] && jc[a].xi) || null;
      }
      function Pj(a) {
        a = J(a);
        return jc[a] && jc[a].wi;
      }
      function Qi(a, c) {
        var b = J(a),
          d = n(c, "__ym.turbo_page"),
          e = n(c, "__ym.turbo_page_id");
        jc[b] || (jc[b] = {});
        if (d || e) (jc[b].wi = d), (jc[b].xi = e);
      }
      function ff(a, c) {
        if (Fe(a) && c) {
          var b = vb(a).match(ig);
          if (b && b.length) return +b[1] >= c;
        }
        return !1;
      }
      function gf(a, c) {
        var b = vb(a);
        return b && (b = b.match(Pq)) && 1 < b.length ? Da(b[1]) >= c : !1;
      }
      function Yf(a) {
        return G(
          "prerender",
          B(v(n(a, "document"), n), [
            "webkitVisibilityState",
            "visibilityState",
          ])
        );
      }
      function Sa(a, c, b) {
        var d = Y(b);
        Y(c) && d
          ? ((d = 1), (c = 1073741824))
          : d
          ? (d = 1)
          : ((d = c), (c = b));
        return a.Math.floor(a.Math.random() * (c - d)) + d;
      }
      function Qq() {
        var a = Ja(arguments),
          c = a[0];
        for (a = a.slice(1); a.length; ) {
          var b = a.shift(),
            d;
          for (d in b) Eb(b, d) && (c[d] = b[d]);
          Eb(b, "toString") && (c.toString = b.toString);
        }
        return c;
      }
      function Rq(a) {
        return function (c) {
          return c ? a(c) : [];
        };
      }
      function Qj(a) {
        return Y(a)
          ? []
          : jg(
              function (c, b) {
                c.push([b, a[b]]);
                return c;
              },
              [],
              Rj(a)
            );
      }
      function Rj(a) {
        var c = [],
          b;
        for (b in a) Eb(a, b) && c.push(b);
        return c;
      }
      function Zd(a) {
        try {
          return parseInt(a, 10);
        } catch (c) {
          return null;
        }
      }
      function ec(a, c) {
        return (
          a.isFinite(c) &&
          !a.isNaN(c) &&
          "[object Number]" === Object.prototype.toString.call(c)
        );
      }
      function Sq(a) {
        for (var c = [], b = a.length - 1; 0 <= b; --b)
          c[a.length - 1 - b] = a[b];
        return c;
      }
      function xa(a, c) {
        x(w(S, db("push", a)), c);
        return a;
      }
      function Bf(a, c) {
        return Array.prototype.sort.call(c, a);
      }
      function Ge(a) {
        return a.splice(0, a.length);
      }
      function Ma(a) {
        return a
          ? O(a)
            ? a
            : zd
            ? zd(a)
            : "number" === typeof a.length && 0 <= a.length
            ? Sj(a)
            : []
          : [];
      }
      function Tq(a, c) {
        for (var b = 0; b < c.length; b += 1)
          if (b in c && a.call(c, c[b], b)) return !0;
        return !1;
      }
      function Uq(a, c) {
        return P(
          function (b, d, e) {
            d = a(d, e);
            return b.concat(O(d) ? d : [d]);
          },
          [],
          c
        );
      }
      function Tj(a, c) {
        return P(
          function (b, d, e) {
            b.push(a(d, e));
            return b;
          },
          [],
          c
        );
      }
      function Vq(a, c) {
        if (!Fe(a)) return !0;
        try {
          c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () {
            throw 1;
          });
        } catch (b) {
          return !1;
        }
        return !0;
      }
      function Wq(a, c) {
        for (var b = "", d = 0; d < c.length; d += 1)
          b += "" + (d ? a : "") + c[d];
        return b;
      }
      function Xq(a, c) {
        return 1 <= Uj(Aa(a), c).length;
      }
      function Yq(a, c) {
        for (var b = 0; b < c.length; b += 1)
          if (a.call(c, c[b], b)) return c[b];
      }
      function Uj(a, c) {
        return jg(
          function (b, d, e) {
            a(d, e) && b.push(d);
            return b;
          },
          [],
          c
        );
      }
      function ge(a, c, b) {
        return b ? a : c;
      }
      function Zq(a, c) {
        return P(
          function (b, d, e) {
            return b ? !!a(d, e) : !1;
          },
          !0,
          c
        );
      }
      function If(a, c, b) {
        try {
          if (V(c)) {
            var d = Ja(arguments).slice(3);
            ba(b) ? c.apply(null, d) : c.apply(b, d);
          }
        } catch (e) {
          rd(a, v(e, Ra), 0);
        }
      }
      function Ra(a) {
        throw a;
      }
      function rd(a, c, b) {
        return yc("setTimeout", a)(c, b);
      }
      function la(a, c) {
        return yc("clearTimeout", a)(c);
      }
      function md() {
        return [];
      }
      function Cc() {
        return {};
      }
      function yc(a, c) {
        var b = n(c, a),
          d = n(c, "constructor.prototype." + a) || b;
        try {
          if (d && d.apply)
            return function () {
              return d.apply(c, arguments);
            };
        } catch (e) {
          return b;
        }
        return d;
      }
      function pb(a, c, b) {
        return function () {
          var d = H(arguments[0]),
            e = b ? "global" : "m1360",
            f = d.C(e, {}),
            g = n(f, a);
          g || ((g = u(c)), (f[a] = g), d.D(e, f));
          return g.apply(null, arguments);
        };
      }
      function ae(a, c) {
        void 0 === c && (c = {});
        if (!a || 1 > a.length) return c;
        tb(
          function (b, d, e) {
            if (e === a.length - 1) return b;
            e === a.length - 2 ? (b[d] = a[e + 1]) : Eb(b, d) || (b[d] = {});
            return b[d];
          },
          c,
          a
        );
        return c;
      }
      function Ad(a) {
        a = a.Ya = a.Ya || {};
        var c = (a._metrika = a._metrika || {});
        return {
          Ea: function (b, d) {
            kg.call(c, b) || (c[b] = d);
            return this;
          },
          D: function (b, d) {
            c[b] = d;
            return this;
          },
          C: function (b, d) {
            var e = c[b];
            return kg.call(c, b) || Y(d) ? e : d;
          },
        };
      }
      function Eb(a, c) {
        return ba(a) ? !1 : kg.call(a, c);
      }
      function u(a, c) {
        var b = [],
          d = [];
        var e = c ? c : S;
        return function () {
          var f = Ja(arguments),
            g = e.apply(void 0, f),
            h = Ye(g, d);
          if (-1 !== h) return b[h];
          f = a.apply(void 0, f);
          b.push(f);
          d.push(g);
          return f;
        };
      }
      function Kb(a) {
        if (lg) return lg;
        var c = !1;
        try {
          c = [].indexOf && 0 === [void 0].indexOf(void 0);
        } catch (d) {}
        var b =
          a.Array &&
          a.Array.prototype &&
          va(a.Array.prototype.indexOf, "indexOf");
        a = void 0;
        return (lg = a =
          c && b
            ? function (d, e) {
                return b.call(e, d);
              }
            : $q);
      }
      function $q(a, c) {
        for (var b = 0; b < c.length; b += 1) if (c[b] === a) return b;
        return -1;
      }
      function qa(a, c) {
        return c ? a(c) : a();
      }
      function w() {
        var a = Ja(arguments),
          c = a.shift();
        return function () {
          var b = c.apply(void 0, arguments);
          return P(Vj, b, a);
        };
      }
      function Lj(a, c) {
        return E([a, c], P);
      }
      function jg(a, c, b) {
        for (var d = 0, e = b.length; d < e; ) (c = a(c, b[d], d)), (d += 1);
        return c;
      }
      function cb(a) {
        return db("test", a);
      }
      function db(a, c) {
        return I(c[a], c);
      }
      function v(a, c) {
        return I(c, null, a);
      }
      function E(a, c) {
        return I.apply(void 0, lc([c, null], a));
      }
      function ar(a) {
        return function () {
          var c = Ja(arguments);
          return a.apply(c[0], [c[1]].concat(c.slice(2)));
        };
      }
      function br() {
        var a = Ja(arguments),
          c = a[0],
          b = a[1],
          d = a.slice(2);
        return function () {
          var e = lc(d, Ja(arguments));
          if (Function.prototype.call)
            return Function.prototype.call.apply(c, lc([b], e));
          if (b) {
            for (var f = "_b"; b[f]; ) f += "_" + f.length;
            b[f] = c;
            e = b[f] && Wj(f, e, b);
            delete b[f];
            return e;
          }
          return Wj(c, e);
        };
      }
      function Wj(a, c, b) {
        void 0 === c && (c = []);
        b = b || {};
        var d = c.length,
          e = a;
        V(e) && ((e = "d"), (b[e] = a));
        var f;
        d
          ? 1 === d
            ? (f = b[e](c[0]))
            : 2 === d
            ? (f = b[e](c[0], c[1]))
            : 3 === d
            ? (f = b[e](c[0], c[1], c[2]))
            : 4 === d && (f = b[e](c[0], c[1], c[2], c[3]))
          : (f = b[e]());
        return f;
      }
      function Ja(a) {
        if (zd)
          try {
            return zd(a);
          } catch (c) {}
        return Sj(a);
      }
      function Sj(a) {
        for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
        return b;
      }
      function ia(a) {
        return (
          !$a(a) &&
          !Y(a) &&
          "[object Object]" === Object.prototype.toString.call(a)
        );
      }
      function ba(a) {
        return Y(a) || $a(a);
      }
      function V(a) {
        return "function" === typeof a;
      }
      function ob(a) {
        return function (c) {
          return function (b) {
            return a(b, c);
          };
        };
      }
      function ua(a) {
        return function (c) {
          return function (b) {
            return a(c, b);
          };
        };
      }
      function Vj(a, c) {
        return c(a);
      }
      function Ap(a) {
        return a
          .replace(/\^/g, "\\^")
          .replace(/\$/g, "\\$")
          .replace(Mf, "\\.")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/\|/g, "\\|")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
          .replace(/\?/g, "\\?")
          .replace(/\*/g, "\\*")
          .replace(/\+/g, "\\+")
          .replace(/\{/g, "\\{")
          .replace(/\}/g, "\\}");
      }
      function cr(a) {
        return "" + a;
      }
      function gb(a, c) {
        return !(!a || -1 === lb(a, c));
      }
      function cc(a, c) {
        return lb(a, c);
      }
      function dr(a, c) {
        for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
          b = a[e] === c[b] ? b + 1 : 0;
          if (b === c.length) return e - c.length + 1;
          if (!b && e > d) break;
        }
        return -1;
      }
      function fa(a) {
        return "string" === typeof a;
      }
      function va(a, c) {
        return Oa(c, a) && a;
      }
      function Oa(a, c) {
        var b = He(a, c);
        c && !b && mg.push([a, c]);
        return b;
      }
      function He(a, c) {
        if (!c || "function" !== typeof c) return !1;
        try {
          var b = "" + c;
        } catch (h) {
          return !1;
        }
        var d = b.length;
        if (d > 35 + a.length) return !1;
        for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
          f =
            "[native code]"[f] === b[g] || (7 === f && "-" === b[g])
              ? f + 1
              : 0;
          if (12 === f) return !0;
          if (!f && g > e) break;
        }
        return !1;
      }
      function F() {}
      function ng(a, c) {
        ng =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (b, d) {
              b.__proto__ = d;
            }) ||
          function (b, d) {
            for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]);
          };
        return ng(a, c);
      }
      function zc(a) {
        return !a;
      }
      function eb(a, c) {
        return c;
      }
      function S(a) {
        return a;
      }
      function Ia(a, c) {
        function b() {
          this.constructor = a;
        }
        ng(a, c);
        a.prototype =
          null === c
            ? Object.create(c)
            : ((b.prototype = c.prototype), new b());
      }
      function lc() {
        for (var a = 0, c = 0, b = arguments.length; c < b; c++)
          a += arguments[c].length;
        a = Array(a);
        var d = 0;
        for (c = 0; c < b; c++)
          for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)
            a[d] = e[f];
        return a;
      }
      function n(a, c) {
        return a
          ? P(
              function (b, d) {
                if (ba(b)) return b;
                try {
                  return b[d];
                } catch (e) {}
                return null;
              },
              a,
              c.split(".")
            )
          : null;
      }
      function er(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      }
      function fr() {}
      function gr(a, c) {
        return function () {
          a.apply(c, arguments);
        };
      }
      function Fa(a) {
        if (!(this instanceof Fa))
          throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this.Ia = 0;
        this.ze = !1;
        this.Na = void 0;
        this.xb = [];
        Xj(a, this);
      }
      function Yj(a, c) {
        for (; 3 === a.Ia; ) a = a.Na;
        0 === a.Ia
          ? a.xb.push(c)
          : ((a.ze = !0),
            Fa.Ae(function () {
              var b = 1 === a.Ia ? c.Ph : c.Th;
              if (null === b) (1 === a.Ia ? og : Bd)(c.promise, a.Na);
              else {
                try {
                  var d = b(a.Na);
                } catch (e) {
                  Bd(c.promise, e);
                  return;
                }
                og(c.promise, d);
              }
            }));
      }
      function og(a, c) {
        try {
          if (c === a)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (c && ("object" === typeof c || "function" === typeof c)) {
            var b = c.then;
            if (c instanceof Fa) {
              a.Ia = 3;
              a.Na = c;
              pg(a);
              return;
            }
            if ("function" === typeof b) {
              Xj(gr(b, c), a);
              return;
            }
          }
          a.Ia = 1;
          a.Na = c;
          pg(a);
        } catch (d) {
          Bd(a, d);
        }
      }
      function Bd(a, c) {
        a.Ia = 2;
        a.Na = c;
        pg(a);
      }
      function pg(a) {
        2 === a.Ia &&
          0 === a.xb.length &&
          Fa.Ae(function () {
            a.ze || Fa.kg(a.Na);
          });
        for (var c = 0, b = a.xb.length; c < b; c++) Yj(a, a.xb[c]);
        a.xb = null;
      }
      function hr(a, c, b) {
        this.Ph = "function" === typeof a ? a : null;
        this.Th = "function" === typeof c ? c : null;
        this.promise = b;
      }
      function Xj(a, c) {
        var b = !1;
        try {
          a(
            function (d) {
              b || ((b = !0), og(c, d));
            },
            function (d) {
              b || ((b = !0), Bd(c, d));
            }
          );
        } catch (d) {
          b || ((b = !0), Bd(c, d));
        }
      }
      function Ij(a, c, b, d, e) {
        void 0 === e && (e = !1);
        return fg(a, c, "", -100, b, d, e);
      }
      function Rd(a, c, b) {
        void 0 === c && (c = "_ym_");
        void 0 === b && (b = "");
        var d = ir(a),
          e = 1 === (d || "").split(".").length ? d : "." + d,
          f = b ? "_" + b : "";
        return {
          bc: function (g, h, k) {
            Ij(a, "" + c + g + f, h || e, k);
            return this;
          },
          C: function (g) {
            return fe(a, "" + c + g + f);
          },
          D: function (g, h, k, l, m) {
            fg(a, "" + c + g + f, h, k, l || e, m);
            return this;
          },
        };
      }
      function Gb(a, c) {
        if (!c) return null;
        try {
          return a.JSON.parse(c);
        } catch (b) {
          return null;
        }
      }
      function rc(a) {
        a = "" + a;
        for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
          (c ^= a.charCodeAt(d)),
            (c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24));
        return c >>> 0;
      }
      function Ic(a, c) {
        var b = jr(a);
        return b
          ? ((b.href = c),
            {
              protocol: b.protocol,
              host: b.host,
              port: b.port,
              hostname: b.hostname,
              hash: b.hash,
              search: b.search,
              query: b.search.replace(/^\?/, ""),
              pathname: b.pathname || "/",
              path: (b.pathname || "/") + b.search,
              href: b.href,
            })
          : {};
      }
      function Zj(a) {
        return (a = R(a).hash.split("#")[1]) ? a.split("?")[0] : "";
      }
      function kr(a, c) {
        var b = Zj(a);
        ak = Bq(
          a,
          function () {
            var d = Zj(a);
            d !== b && (c(), (b = d));
          },
          200,
          "t.h"
        );
        return I(Aq, null, a, ak);
      }
      function lr(a, c, b, d) {
        var e,
          f,
          g = c.aa,
          h = c.we,
          k = c.ic,
          l = H(a),
          m = Ea(((e = {}), (e.wh = 1), (e.pv = 1), e));
        e = n(d, "isTrusted");
        d && !ba(e) && m.D("ite", sb(e));
        Od(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
        h && m.D("ut", "1");
        g = l.C("lastReferrer");
        d = R(a).href;
        k = {
          J: ((f = {}), (f["page-url"] = k || d), (f["page-ref"] = g), f),
          K: m,
        };
        b(k, c)["catch"](z(a, "g.s"));
        l.D("lastReferrer", d);
      }
      function mr(a, c, b) {
        function d() {
          r || ((q = !0), (t = !1), (r = !0), f());
        }
        function e() {
          m = !0;
          k(!1);
          c();
        }
        function f() {
          la(a, l);
          if (m) k(!1);
          else {
            var M = Math.max(0, b - (t ? y : y + p(da) - D));
            M ? (l = U(a, e, M, "u.t.d.c")) : e();
          }
        }
        function g() {
          t = q = r = !0;
          y += p(da) - D;
          D = p(da);
          f();
        }
        function h() {
          q || r || (y = 0);
          D = p(da);
          q = r = !0;
          t = !1;
          f();
        }
        function k(M) {
          M = M ? N.F : N.tb;
          M(a, ["blur"], g);
          M(a, ["focus"], h);
          M(a.document, ["click", "mousemove", "keydown", "scroll"], d);
        }
        var l = 0,
          m = !1;
        if (Vf(a)) return (l = U(a, c, b, "u.t.d")), E([a, l], la);
        var p = ka(a),
          q = !1,
          r = !1,
          t = !0,
          y = 0,
          D = p(da),
          N = ja(a);
        k(!0);
        f();
        return function () {
          la(a, l);
          k(!1);
        };
      }
      function Cd(a, c, b) {
        var d = c.getAttribute("itemtype");
        b = hb('[itemprop~="' + b + '"]', c);
        return d
          ? ha(function (e) {
              return e.parentNode && gc("[itemtype]", a, e.parentNode) === c;
            }, b)
          : b;
      }
      function fb(a, c, b) {
        return (a = Cd(a, c, b)) && a.length ? a[0] : null;
      }
      function ab(a) {
        if (!a) return "";
        a = O(a) ? a : [a];
        return a.length ? a[0].getAttribute("content") || Fb(a[0]) : "";
      }
      function bk(a) {
        return a
          ? a.attributes && a.getAttribute("datetime")
            ? a.getAttribute("datetime")
            : ab(a)
          : "";
      }
      function gd(a, c, b) {
        a =
          c &&
          (gb(c.className, "ym-disable-keys") ||
            gb(c.className, "-metrika-nokeys"));
        return b && c
          ? a || !!mq(["ym-disable-keys", "-metrika-nokeys"], c).length
          : a;
      }
      function qf(a, c) {
        return Ae(c)
          ? "password" === c.type ||
              (c.name && G(c.name.toLowerCase(), ck)) ||
              (c.id && G(c.id.toLowerCase(), ck))
          : !1;
      }
      function dk(a, c) {
        var b = Math.max(0, Math.min(c, 65535));
        xa(a, [b >> 8, b & 255]);
      }
      function Qb(a, c) {
        xa(a, [c & 255]);
      }
      function ib(a, c, b) {
        return -1 !== Kb(a)(b, nr) ? (Qb(c, b), !1) : !0;
      }
      function Q(a, c) {
        for (var b = Math.max(0, c | 0); 127 < b; )
          xa(a, [(b & 127) | 128]), (b >>= 7);
        xa(a, [b]);
      }
      function qg(a, c) {
        Q(a, c.length);
        for (var b = 0; b < c.length; b += 1) Q(a, c.charCodeAt(b));
      }
      function rg(a, c) {
        var b = c;
        255 < b.length && (b = b.substr(0, 255));
        a.push(b.length);
        for (var d = 0; d < b.length; d += 1) dk(a, b.charCodeAt(d));
      }
      function or(a, c) {
        var b = [];
        if (ib(a, b, 27)) return [];
        Q(b, c);
        return b;
      }
      function pr(a, c) {
        var b = Ha(c);
        if (!b) return (c[Ta] = -1), null;
        var d = +c[Ta];
        if (!isFinite(d) || 0 >= d) return null;
        if (c.attributes)
          for (var e = c; e; ) {
            if (e.attributes.Oi) return null;
            e = e.parentElement;
          }
        e = 64;
        var f = ye(a, c),
          g = f && f[Ta] ? f[Ta] : 0;
        0 > g && (g = 0);
        b = (b || "").toUpperCase();
        var h = qr()[b];
        h || (e |= 2);
        var k = kj(a, c);
        k || (e |= 4);
        var l = uf(a, c);
        (f = f ? uf(a, f) : null) &&
          l[0] === f[0] &&
          l[1] === f[1] &&
          l[2] === f[2] &&
          l[3] === f[3] &&
          (e |= 8);
        tc[d].mf = l[0] + "x" + l[1];
        tc[d].size = l[2] + "x" + l[3];
        c.id && "string" === typeof c.id && (e |= 32);
        f = [];
        if (ib(a, f, 1)) return null;
        Q(f, d);
        Qb(f, e);
        Q(f, g);
        h ? Qb(f, h) : rg(f, b);
        k && Q(f, k);
        e & 8 || (Q(f, l[0]), Q(f, l[1]), Q(f, l[2]), Q(f, l[3]));
        e & 32 && rg(f, c.id);
        Qb(f, 0);
        return f;
      }
      function rr(a, c) {
        var b = c[Ta];
        if (!b || 0 > b || !sf(c) || !c.form || Yh(a, c.form)) return [];
        var d = mj(a, c.form);
        if (0 > d) return [];
        if (Ae(c)) {
          var e = {
            text: 0,
            color: 0,
            $b: 0,
            Si: 0,
            "datetime-local": 0,
            email: 0,
            kf: 0,
            hj: 0,
            search: 0,
            mj: 0,
            time: 0,
            url: 0,
            month: 0,
            nj: 0,
            password: 2,
            gj: 3,
            Qi: 4,
            file: 6,
            image: 7,
          };
          e = e[c.type];
        } else {
          e = { Li: 1, Mi: 5 };
          var f = Ha(c);
          e = Y(f) ? "" : e[f];
        }
        if ("number" !== typeof e) return [];
        f = -1;
        for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
          if (g[k].name === c.name) {
            if (g[k] === c) {
              f = l;
              break;
            }
            l += 1;
          }
        if (0 > f) return [];
        g = [];
        if (ib(a, g, 7)) return [];
        Q(g, b);
        Q(g, d);
        Q(g, e);
        qg(g, c.name || "");
        Q(g, f);
        return g;
      }
      function sc(a, c, b) {
        void 0 === b && (b = []);
        for (var d = []; c && !zn(a, c, b); c = ye(a, c)) d.push(c);
        x(function (e) {
          tc.counter += 1;
          var f = tc.counter;
          e[Ta] = f;
          tc[f] = {};
          f = pr(a, e);
          e = rr(a, e);
          f && e && (xa(b, f), xa(b, e));
        }, sr(d));
        return b;
      }
      function tr(a) {
        var c = a.ja;
        if (!fd || (c && !c.fromElement)) return Vh(a);
      }
      function ur(a) {
        var c = a.ja;
        if (c && !c.toElement) return tf(a);
      }
      function ek(a) {
        var c = Bc(a.ja);
        if (c && ee(c)) {
          var b = Uh(a, c),
            d = b.concat;
          var e = ub(a.l),
            f = [];
          ib(a.l, f, 17) ? (a = []) : (Q(f, e), Q(f, c[Ta]), (a = f));
          return d.call(b, a);
        }
      }
      function fk(a) {
        var c = a.l,
          b = a.ja.target;
        if (b && ee(b)) {
          c = sc(c, b);
          var d = c.concat;
          var e = ub(a.l),
            f = [];
          ib(a.l, f, 18) ? (a = []) : (Q(f, e), Q(f, b[Ta]), (a = f));
          return d.call(c, a);
        }
      }
      function gk(a) {
        var c = a.l,
          b = Bc(a.ja);
        if (!b || qf(c, b) || gd(c, b)) return [];
        if (sf(b)) {
          var d = H(c).C("isEU"),
            e = Jc(c, b, d),
            f = e.Ta;
          d = e.lb;
          e = e.cb;
          if (Be(b)) var g = b.checked;
          else (g = b.value), (g = f ? L("", hk(g.split(""))) : g);
          c = sc(c, b);
          f = c.concat;
          var h = ub(a.l);
          d = d && !e;
          e = [];
          ib(a.l, e, 39)
            ? (a = [])
            : (Q(e, h),
              Q(e, b[Ta]),
              rg(e, String(g)),
              Qb(e, d ? 1 : 0),
              (a = e));
          return f.call(c, a);
        }
      }
      function Ie(a) {
        var c = a.l,
          b = a.ja,
          d = Bc(b);
        if (!d || "SCROLLBAR" === d.nodeName) return [];
        var e = [],
          f = v(e, xa);
        d && ee(d) ? f(Uh(a, d)) : f(sc(c, d));
        var g = Ji(c, b);
        f = e.concat;
        a = ub(a.l);
        var h = b.type,
          k = [g.x, g.y];
        g = b.which;
        b = b.button;
        var l;
        var m = ze(c, d);
        var p = m[0];
        for (m = m[1]; d && (!p || !m); )
          if ((d = ye(c, d))) (m = ze(c, d)), (p = m[0]), (m = m[1]);
        d
          ? ((p = d[Ta]),
            !p || 0 > p
              ? (c = [])
              : (m = ((l = {}),
                (l.mousemove = 2),
                (l.click = 32),
                (l.dblclick = 33),
                (l.mousedown = 4),
                (l.mouseup = 30),
                (l.touch = 12),
                l)[h])
              ? ((l = []),
                (d = Uf(c, d)),
                ib(c, l, m)
                  ? (c = [])
                  : (Q(l, a),
                    Q(l, p),
                    Q(l, Math.max(0, k[0] - d.left)),
                    Q(l, Math.max(0, k[1] - d.top)),
                    /^mouse(up|down)|click$/.test(h) &&
                      ((c = g || b),
                      Qb(l, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)),
                    (c = l)))
              : (c = []))
          : (c = []);
        return f.call(e, c);
      }
      function vr(a) {
        var c = null,
          b = a.l,
          d = b.document;
        if (b.getSelection) {
          d = void 0;
          try {
            d = b.getSelection();
          } catch (g) {
            return [];
          }
          if ($a(d)) return [];
          var e = "" + d;
          c = d.anchorNode;
        } else
          d.selection &&
            d.selection.createRange &&
            ((d = d.selection.createRange()),
            (e = d.text),
            (c = d.parentElement()));
        if ("string" !== typeof e) return [];
        try {
          for (; c && 1 !== c.nodeType; ) c = c.parentNode;
        } catch (g) {
          return [];
        }
        if (!c) return [];
        d = Jc(b, c).Ta || gd(b, c, !0);
        c = c.getElementsByTagName("*");
        for (var f = 0; f < c.length && !d; )
          (d = c[f]), (d = Jc(b, d).Ta || gd(b, d, !0)), (f += 1);
        if (e !== sg)
          return (
            (sg = e),
            (d = d ? L("", hk(e.split(""))) : e),
            (e = ub(a.l)),
            0 === d.length
              ? (d = b = "")
              : 100 >= d.length
              ? ((b = d), (d = ""))
              : 200 >= d.length
              ? ((b = d.substr(0, 100)), (d = d.substr(100)))
              : ((b = d.substr(0, 97)), (d = d.substr(d.length - 97))),
            (c = []),
            ib(a.l, c, 29) ? (a = []) : (Q(c, e), qg(c, b), qg(c, d), (a = c)),
            a
          );
      }
      function wr(a) {
        return Ie(a).concat(vr(a) || []);
      }
      function ik(a) {
        return (
          (a.shiftKey ? 2 : 0) |
          (a.ctrlKey ? 4 : 0) |
          (a.altKey ? 1 : 0) |
          (a.metaKey ? 8 : 0) |
          (a.ctrlKey || a.altKey ? 16 : 0)
        );
      }
      function jk(a) {
        var c = [];
        tg ||
          ((tg = !0),
          sg && xa(c, or(a.l, ub(a.l))),
          Nb(
            a.l,
            function () {
              tg = !1;
            },
            "fv.c"
          ));
        return c;
      }
      function kk(a, c, b, d) {
        c = Bc(c);
        if (!c || vf(a, c)) return [];
        var e = Jc(a, c),
          f = e.lb,
          g = e.cb;
        e = e.Ta;
        var h = H(a);
        if (!g && ((f && h.C("isEU")) || gd(a, c))) a = [];
        else {
          f = sc(a, c);
          g = f.concat;
          var k = ub(a);
          h = [];
          if (ib(a, h, 38)) a = [];
          else {
            Q(h, k);
            dk(h, b);
            Qb(h, d);
            a = c[Ta];
            if (!a || 0 > a) a = 0;
            Q(h, a);
            Qb(h, e ? 1 : 0);
            a = h;
          }
          a = g.call(f, a);
        }
        return a;
      }
      function xr(a) {
        var c = a.l,
          b = a.ja,
          d = b.keyCode,
          e = ik(b),
          f = [],
          g = v(f, xa);
        if (
          {
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1,
          }[d] ||
          (112 <= d && 123 >= d) ||
          (96 <= d && 105 >= d) ||
          e & 16
        )
          19 === d && 4 === (e & -17) && (d = 144),
            g(kk(c, b, d, e | 16)),
            (ug = !1),
            Nb(
              c,
              function () {
                ug = !0;
              },
              "fv.kd"
            ),
            !(67 === d && e & 4) || e & 1 || e & 2 || g(jk(a));
        return f;
      }
      function yr(a) {
        var c = a.l;
        a = a.ja;
        var b = [];
        ug &&
          !vg &&
          0 !== a.which &&
          (xa(b, kk(c, a, a.charCode || a.keyCode, ik(a))),
          (vg = !0),
          Nb(
            c,
            function () {
              vg = !1;
            },
            "fv.kp"
          ));
        return b;
      }
      function lk(a) {
        var c = a.l,
          b = Bc(a.ja);
        if (!b || Yh(c, b)) return [];
        var d = [];
        if ("FORM" === b.nodeName) {
          for (var e = b.elements, f = 0; f < e.length; f += 1)
            lj(e[f]) || xa(d, sc(c, e[f]));
          a = ub(a.l);
          e = mj(c, b);
          if (0 > e) c = [];
          else {
            f = b.elements;
            var g = f.length;
            b = [];
            for (var h = 0; h < g; h += 1)
              if (!lj(f[h])) {
                var k = f[h][Ta];
                k && 0 < k && b.push(k);
              }
            f = [];
            if (ib(c, f, 11)) c = [];
            else {
              Q(f, a);
              Q(f, e);
              Q(f, b.length);
              for (c = 0; c < b.length; c += 1) Q(f, b[c]);
              c = f;
            }
          }
          xa(d, c);
        }
        return d;
      }
      function zr(a) {
        var c = a.flush;
        a = Bc(a.ja);
        "BODY" === Ha(a) && c();
      }
      function Sm(a, c) {
        var b,
          d = Bc(c),
          e = wa.Xb,
          f = Ad(a);
        if (d && ac("ym-advanced-informer", d)) {
          var g = f.C("ifc", 0) + 1;
          f.D("ifc", g);
          g = d.getAttribute("data-lang");
          var h = Da(d.getAttribute("data-cid") || "");
          if (h || 0 === h)
            (e = n(a, "Ya." + e + ".informer"))
              ? e(((b = {}), (b.i = d), (b.id = h), (b.lang = g), b))
              : f.D("ib", !0),
              (b = c || window.event),
              b.preventDefault ? b.preventDefault() : (b.returnValue = !1);
        }
      }
      function Bl(a, c, b, d, e) {
        if (!b.length) return e;
        b = B(function (f) {
          return E([a, c, d], f);
        }, b);
        return w.apply(void 0, b)(e);
      }
      var Pc = {
          construct: "Metrika2",
          callbackPostfix: "2",
          version: "1htavzoec77bpowqcyzjxzh9ln",
          host: "mc.yandex.com",
        },
        mg = [],
        Mf = /\./g,
        mk = va(String.prototype.indexOf, "indexOf"),
        lb = mk
          ? function (a, c) {
              return mk.call(a, c);
            }
          : dr,
        Aa = ua(function (a, c) {
          return a === c;
        }),
        jd = ua(function (a, c) {
          a(c);
          return c;
        }),
        Ba = ua(Vj),
        $a = Aa(null),
        Y = Aa(void 0),
        zd = va(Array.from, "from"),
        nk = va(Function.prototype.bind, "bind"),
        I = nk ? ar(nk) : br,
        ok = va(Array.prototype.reduce, "reduce"),
        tb = ok
          ? function (a, c, b) {
              return ok.call(b, a, c);
            }
          : jg,
        P = tb,
        $p = w,
        me = w(S, qa),
        lg,
        Ye = Kb(window),
        Am = ob(Ye),
        kg = Object.prototype.hasOwnProperty,
        H = u(Ad),
        T = ob(n),
        Za = T("length"),
        Ec = ua(E),
        Ar = ua(db),
        pk = va(Array.prototype.every, "every"),
        ui = pk
          ? function (a, c) {
              return pk.call(c, a);
            }
          : Zq,
        Jb = E([1, null], ge),
        sb = E([1, 0], ge),
        yb = Boolean,
        qk = va(Array.prototype.filter, "filter"),
        ha = qk
          ? function (a, c) {
              return qk.call(c, a);
            }
          : Uj,
        La = v(yb, ha),
        Br = ua(ha),
        rk = va(Array.prototype.find, "find"),
        Ib = rk
          ? function (a, c) {
              return rk.call(c, a);
            }
          : Yq,
        sk = va(Array.prototype.includes, "includes"),
        G = sk
          ? function (a, c, b) {
              return sk.call(c, a, b);
            }
          : Xq,
        nc = ob(G),
        tk = va(Array.prototype.join, "join"),
        L = tk
          ? function (a, c) {
              return tk.call(c, a);
            }
          : Wq,
        Lq = ua(L),
        uk = u(function (a) {
          var c = n(a, "navigator") || {};
          a = n(c, "userAgent") || "";
          c = n(c, "vendor") || "";
          return { cf: -1 < lb(c, "Apple"), Yf: a };
        }),
        vb = u(T("navigator.userAgent")),
        ig = /Firefox\/([0-9]+)/i,
        Fe = u(function (a) {
          var c = n(a, "document.documentElement.style"),
            b = n(a, "InstallTrigger");
          a =
            -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(ig);
          ig.lastIndex = 0;
          return !(!(c && "MozAppearance" in c) || ba(b)) || a;
        }),
        vk = va(Array.isArray, "isArray"),
        O = vk
          ? function (a) {
              return vk(a);
            }
          : er,
        wk = va(Array.prototype.map, "map"),
        xk =
          wk && Vq(window, Array.prototype.map)
            ? function (a, c) {
                return c && 0 < c.length ? wk.call(c, a) : [];
              }
            : Tj,
        B = xk,
        x = xk,
        yk = va(Array.prototype.flatMap, "flatMap"),
        vd = yk
          ? function (a, c) {
              return yk.call(c, a);
            }
          : Uq,
        Nc = ua(B),
        Cq = ob(B),
        zk = va(Array.prototype.some, "some"),
        Wa = zk
          ? function (a, c) {
              return zk.call(c, a);
            }
          : Tq,
        se = u(Kb),
        pd = T("0"),
        Ak = va(Array.prototype.reverse, "reverse"),
        sr = Ak
          ? function (a) {
              return Ak.call(a);
            }
          : Sq,
        Bk = ob(parseInt),
        Da = Bk(10),
        ie = Bk(2),
        Ck = va(Object.keys, "keys"),
        Dk = va(Object.entries, "entries"),
        Ga = Dk ? Rq(Dk) : Qj,
        ea = Ck
          ? function (a) {
              return Ck(a);
            }
          : Rj,
        Ek = va(Object.values, "values"),
        Cr = w(Qj, v(T("1"), Tj)),
        gm = Ek
          ? function (a) {
              return Ek(a);
            }
          : Cr,
        C = Object.assign || Qq,
        Th = ua(function (a, c) {
          return C({}, a, c);
        }),
        Yd = u(w(T("String.fromCharCode"), v("fromCharCode", Oa), zc)),
        wg = u(w(vb, cb(/ipad|iphone|ipod/i))),
        Af = u(function (a) {
          return n(a, "navigator.platform") || "";
        }),
        ue = u(function (a) {
          a = uk(a);
          var c = a.Yf;
          return a.cf && !c.match("CriOS");
        }),
        Dr = cb(
          /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
        ),
        Er = cb(/; wv\)/),
        je = u(function (a) {
          a = vb(a);
          return Er(a) || Dr(a);
        }),
        Fr = /Chrome\/(\d+)\./,
        Gr = u(function (a) {
          return (a = (n(a, "navigator.userAgent") || "").match(Fr)) && a.length
            ? 76 <= Da(a[1])
            : !1;
        }),
        he = u(function (a) {
          var c = (vb(a) || "").toLowerCase();
          a = Af(a);
          return (
            gb(c, "android") &&
            gb(c, "mobile") &&
            /^android|linux armv/i.test(a)
          );
        }),
        Hr =
          "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(
            " "
          ),
        Ir = u(function (a) {
          var c = n(a, "navigator.connection.type");
          if (Y(c)) return null;
          a = se(a)(c, Hr);
          return -1 === a ? c : "" + a;
        }),
        Vf = u(w(T("document.addEventListener"), zc)),
        Fk = u(function (a) {
          var c = n(a, "navigator") || {};
          return P(
            function (b, d) {
              return b || n(c, d);
            },
            "",
            ["language", "userLanguage", "browserLanguage", "systemLanguage"]
          );
        }),
        oh = u(function (a) {
          var c = n(a, "navigator") || {};
          a = Fk(a);
          fa(a) || ((a = ""), (c = n(c, "languages.0")), fa(c) && (a = c));
          return a.toLowerCase().split("-")[0];
        }),
        rb = u(function (a) {
          return (n(a, "top") || a) !== a;
        }),
        Jr = u(T("top.contentWindow")),
        Kr = u(function (a) {
          var c = !1;
          try {
            c = a.navigator.javaEnabled();
          } catch (b) {}
          return c;
        }),
        Lr = u(function (a) {
          var c =
              "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(
                " "
              ),
            b = n(a, "external");
          b = n(b, "toString") ? "" + b.toString() : "";
          b = -1 !== lb(b, "Sequentum");
          var d = n(a, "document.documentElement"),
            e = ["selenium", "webdriver", "driver"];
          return !!(
            Wa(v(a, n), [
              "_selenium",
              "callSelenium",
              "_Selenium_IDE_Recorder",
            ]) ||
            Wa(v(n(a, "document"), n), c) ||
            b ||
            (d && Wa(I(d.getAttribute, d), e))
          );
        }),
        Mr = u(function (a) {
          return !!(
            Wa(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) ||
            /(PhantomJS)|(HeadlessChrome)/.test(vb(a)) ||
            n(a, "navigator.webdriver") ||
            (n(a, "isChrome") && !n(a, "chrome"))
          );
        }),
        Nr = u(function (a) {
          return !(
            !n(a, "ia_document.shareURL") || !n(a, "ia_document.referrer")
          );
        }),
        Dd = u(function (a) {
          var c = vb(a) || "",
            b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
          b = b ? [+b[1], +b[2]] : [0, 0];
          c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
          return 14 <= (c ? +c[1] : 0)
            ? !0
            : (wg(a) || 10 < b[0] || (10 === b[0] && 13 <= b[1])) && ue(a);
        }),
        Pq = /Edg\/(\d+)\./,
        xe = u(function (a) {
          return Dd(a) || ff(a, 68) || gf(a, 79);
        }),
        Or = Pc.construct,
        bc = Pc.host,
        xg = Vf(window),
        wa = {
          gg: 24226447,
          ag: 26302566,
          jg: 51533966,
          Ji: 65446441,
          Oa: "https:",
          $a: "1360",
          Xb: Or,
          fg: xg ? 512 : 2048,
          dg: xg ? 512 : 2048,
          eg: xg ? 100 : 400,
          Ki: 100,
          hg: "noindex",
        },
        Ed = [],
        J = u(function (a) {
          return a.id + ":" + a.aa;
        }),
        jc = {},
        Od = Aa("1"),
        Pr = setTimeout;
      Fa.prototype["catch"] = function (a) {
        return this.then(null, a);
      };
      Fa.prototype.then = function (a, c) {
        var b = new this.constructor(fr);
        Yj(this, new hr(a, c, b));
        return b;
      };
      Fa.prototype["finally"] = function (a) {
        var c = this.constructor;
        return this.then(
          function (b) {
            return c.resolve(a()).then(function () {
              return b;
            });
          },
          function (b) {
            return c.resolve(a()).then(function () {
              return c.reject(b);
            });
          }
        );
      };
      Fa.all = function (a) {
        return new Fa(function (c, b) {
          function d(h, k) {
            try {
              if (k && ("object" === typeof k || "function" === typeof k)) {
                var l = k.then;
                if ("function" === typeof l) {
                  l.call(
                    k,
                    function (m) {
                      d(h, m);
                    },
                    b
                  );
                  return;
                }
              }
              e[h] = k;
              0 === --f && c(e);
            } catch (m) {
              b(m);
            }
          }
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.all accepts an array"));
          var e = Array.prototype.slice.call(a);
          if (0 === e.length) return c([]);
          for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
        });
      };
      Fa.resolve = function (a) {
        return a && "object" === typeof a && a.constructor === Fa
          ? a
          : new Fa(function (c) {
              c(a);
            });
      };
      Fa.reject = function (a) {
        return new Fa(function (c, b) {
          b(a);
        });
      };
      Fa.race = function (a) {
        return new Fa(function (c, b) {
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.race accepts an array"));
          for (var d = 0, e = a.length; d < e; d++) Fa.resolve(a[d]).then(c, b);
        });
      };
      Fa.Ae =
        ("function" === typeof setImmediate &&
          function (a) {
            setImmediate(a);
          }) ||
        function (a) {
          Pr(a, 0);
        };
      Fa.kg = function (a) {
        "undefined" !== typeof console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", a);
      };
      var K = window.Promise,
        Qr = va(K, "Promise"),
        Gk = va(n(K, "resolve"), "resolve"),
        Hk = va(n(K, "reject"), "reject"),
        Ik = va(n(K, "all"), "all");
      if (Qr && Gk && Hk && Ik) {
        var Je = function (a) {
          return new Promise(a);
        };
        Je.resolve = I(Gk, K);
        Je.reject = I(Hk, K);
        Je.all = I(Ik, K);
        K = Je;
      } else K = Fa;
      var Re = [],
        Nd = [],
        X = [],
        Ua = [],
        yg = [],
        Fd = [],
        eg = nc([26812653]),
        Rr = u(w(T("id"), eg), J),
        Ub = {
          id: "id",
          we: "ut",
          aa: "type",
          Jd: "ldc",
          Sa: "nck",
          ic: "url",
          Vg: "referrer",
        },
        Sr = /^\d+$/,
        Qc = {
          id: function (a) {
            a = "" + (a || "0");
            Sr.test(a) || (a = "0");
            try {
              var c = Da(a);
            } catch (b) {
              c = 0;
            }
            return c;
          },
          aa: function (a) {
            return "" + (a || 0 === a ? a : "0");
          },
          Sa: yb,
          we: yb,
        };
      Ub.Zc = "defer";
      Qc.Zc = yb;
      Ub.T = "params";
      Qc.T = function (a) {
        return ia(a) || O(a) ? a : null;
      };
      Ub.ve = "userParams";
      Ub.Uf = "triggerEvent";
      Qc.Uf = yb;
      Ub.If = "sendTitle";
      Qc.If = function (a) {
        return !!a || Y(a);
      };
      Ub.pe = "trackHash";
      Qc.pe = yb;
      Ub.Tf = "trackLinks";
      Ub.Gg = "enableAll";
      var Md = P(
          function (a, c) {
            var b = c[0];
            a[b] = { ca: c[1], La: Qc[b] };
            return a;
          },
          {},
          Ga(Ub)
        ),
        Nq = "hash host hostname href pathname port protocol search".split(" "),
        hg =
          "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(
            " "
          ),
        Nj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
        qe = u(function (a) {
          return (a ? a.replace(/^www\./, "") : "").toLowerCase();
        }),
        qi = u(function (a) {
          a = R(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(Nj));
          return c;
        }),
        Jk = w(R, T("protocol"), Aa("https:")),
        Jq = u(function (a) {
          return Gr(a) && Jk(a) ? "SameSite=None;Secure;" : "";
        }),
        bj = /^\s+|\s+$/g,
        Mj = va(String.prototype.trim, "trim"),
        zg = ua(function (a, c) {
          return c.replace(a, "");
        }),
        Tr = zg(/\s/g),
        Vd = zg(/\D/g),
        Ee = ["metrika_enabled"],
        gg = [],
        Jj = pb("gsc", Hj),
        Kq = /:\d+$/,
        ir = u(function (a) {
          var c = (R(a).host || "").split(".");
          return 1 === c.length
            ? c[0]
            : P(
                function (b, d, e) {
                  e += 1;
                  2 <= e &&
                    !b &&
                    ((e = L(".", c.slice(-e))), $h(a, e) && (b = e));
                  return b;
                },
                "",
                c
              );
        }),
        Kc = u(Rd),
        De = u(function (a) {
          var c = Kc(a),
            b = "1" === c.C("debug"),
            d =
              -1 < cc(R(a).href, "_ym_debug=1") ||
              -1 < cc(R(a).href, "_ym_debug=2"),
            e = a._ym_debug;
          (!e && !d) || b || ((a = R(a)), c.D("debug", "1", void 0, a.host));
          return !!(b || e || d);
        }),
        Iq = pb("debuggerEvents", md, !0),
        Fq = [
          "http.0.st..rt.",
          "network error occurred",
          "send beacon",
          "Content Security Policy",
          "DOM Exception 18",
        ],
        Gd,
        Na = (function (a) {
          return function (c, b) {
            void 0 === b && (b = !1);
            if (Gd) var d = new Gd(c);
            else
              Oa("Error", a.Error)
                ? ((Gd = a.Error), (d = new a.Error(c)))
                : ((Gd = Hq), (d = new Gd(c)));
            b && (d.unk = !0);
            return d;
          };
        })(window),
        Gq = cb(/^http./),
        Eq = cb(/^err.kn/),
        Gj = [],
        Dq = u(function (a) {
          a = !(!a.addEventListener || !a.removeEventListener);
          return {
            oi: a,
            F: a ? "addEventListener" : "attachEvent",
            ea: a ? "removeEventListener" : "detachEvent",
          };
        }),
        Ur = u(function (a) {
          var c = !1;
          if (!a.addEventListener) return c;
          try {
            var b = Object.defineProperty({}, "passive", {
              get: function () {
                c = !0;
                return 1;
              },
            });
            a.addEventListener("test", F, b);
          } catch (d) {}
          return c;
        }),
        Vr = ua(function (a, c) {
          if (null !== c)
            return a ? C({ capture: !0, passive: !0 }, c || {}) : !!c;
        }),
        ja = u(function (a) {
          var c = Ur(a),
            b = Vr(c),
            d = {};
          return C(d, {
            F: function (e, f, g, h) {
              x(function (k) {
                var l = b(h);
                Fj(a, e, k, g, l, !1);
              }, f);
              return I(d.tb, d, e, f, g, h);
            },
            tb: function (e, f, g, h) {
              x(function (k) {
                var l = b(h);
                Fj(a, e, k, g, l, !0);
              }, f);
            },
          });
        }),
        ka = u(Nf),
        Bj = ua(function (a, c) {
          for (var b = []; !yd(c); ) {
            var d = yq(c);
            a(d, function (e) {
              return e(c);
            });
            b.push(d);
          }
          return b;
        }),
        Kk = ua(function (a, c) {
          return Ba(function (b, d) {
            return c(b, function (e) {
              try {
                d(a(e));
              } catch (f) {
                b(f);
              }
            });
          });
        }),
        Ag = ua(function (a, c) {
          return Ba(function (b, d) {
            return c(b, function (e) {
              try {
                a(e)(Xa(b, d));
              } catch (f) {
                b(f);
              }
            });
          });
        }),
        $f = [],
        ag = !1,
        Zf = !1,
        Lk = ua(function (a, c) {
          var b = c || {};
          return {
            l: v(b, S),
            C: function (d, e) {
              var f = b[d];
              return Y(f) && !Y(e) ? e : f;
            },
            D: function (d, e) {
              b[d] = e;
              return this;
            },
            Nb: function (d, e) {
              return "" === e || ba(e) ? this : this.D(d, e);
            },
            Da: v(b, a),
          };
        }),
        Ea = Lk(function (a) {
          var c = "";
          a = tb(
            function (b, d) {
              var e = d[0],
                f = "" + e + ":" + d[1];
              "t" === e ? (c = f) : b.push(f);
              return b;
            },
            [],
            Ga(a)
          );
          c && a.push(c);
          return L(":", a);
        }),
        Bg,
        sj =
          ((Bg = {}),
          (Bg.w = [
            [
              function (a, c) {
                return {
                  O: function (b, d) {
                    var e,
                      f = b.J;
                    f =
                      ((e = {}),
                      (e["page-url"] = (f && f["page-url"]) || ""),
                      (e.charset = "utf-8"),
                      e);
                    "0" !== c.aa && (f["cnt-class"] = c.aa);
                    b.K || (b.K = Ea());
                    e = b.K;
                    var g = b.Z;
                    f = {
                      ia: { ya: "watch/" + c.id },
                      Z: C(void 0 === g ? {} : g, {
                        wb: !!e.C("pv") && !e.C("ar") && !e.C("wh"),
                      }),
                      J: C(b.J || {}, f),
                    };
                    C(b, f);
                    d();
                  },
                };
              },
              1,
            ],
          ]),
          Bg),
        Cg = v(sj, wj),
        jb = xd("w"),
        rj = ["webkitvisibilitychange", "visibilitychange"],
        df = Lk(function (a) {
          a = Ga(a);
          return L(
            "",
            B(function (c) {
              var b = c[0];
              c = c[1];
              return $a(c) ? "" : b + "(" + c + ")";
            }, a)
          );
        }),
        Mk =
          "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(
            " "
          ),
        Bp = /^\s*(data|javascript):/i,
        Mi = new RegExp(
          L("", [
            "\\.(" +
              L(
                "|",
                "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
                  " "
                )
              ) +
              ")$",
          ]),
          "i"
        ),
        Pa,
        Wi =
          ((Pa = {}),
          (Pa.hit = "h"),
          (Pa.params = "p"),
          (Pa.reachGoal = "g"),
          (Pa.userParams = "up"),
          (Pa.trackHash = "th"),
          (Pa.accurateTrackBounce = "atb"),
          (Pa.notBounce = "nb"),
          (Pa.addFileExtension = "fe"),
          (Pa.extLink = "el"),
          (Pa.file = "fc"),
          (Pa.trackLinks = "tl"),
          (Pa.destruct = "d"),
          (Pa.setUserID = "ui"),
          (Pa.getClientID = "ci"),
          (Pa.clickmap = "cm"),
          (Pa.enableAll = "ea"),
          Pa),
        Wr = u(function () {
          var a = 0;
          return function () {
            return (a += 1);
          };
        }),
        Xr = w(J, Wr, qa),
        Qf = {
          mc: function (a) {
            a = Ad(a).C("mt", {});
            a = Ga(a);
            return a.length
              ? P(
                  function (c, b, d) {
                    return "" + c + (d ? "-" : "") + b[0] + "-" + b[1];
                  },
                  "",
                  a
                )
              : null;
          },
          clc: function (a) {
            var c = H(a).C("cls", { Wb: 0, x: 0, y: 0 }),
              b = c.Wb,
              d = c.x;
            c = c.y;
            return b
              ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b)
              : b + "-" + d + "-" + c;
          },
          rqnt: function (a, c, b) {
            a = b.J;
            return !a || a.nohit ? null : Xr(c);
          },
        },
        rq = u(function (a) {
          pj(a, "_ymBRC", "1");
          var c = "1" !== oj(a, "_ymBRC");
          c || qj(a, "_ymBRC");
          return c;
        }),
        Va = u(nj),
        Rc = u(nj, function (a, c, b) {
          return "" + c + b;
        }),
        Yr = u(T("document.documentElement")),
        Zr = u(function (a) {
          a = n(a, "document") || {};
          return ("" + (a.characterSet || a.charset || "")).toLowerCase();
        }),
        Pb = u(w(T("document"), v("createElement", yc))),
        Zh = u(function (a) {
          var c = n(a, "Element.prototype");
          return c
            ? (a = Ib(
                function (b) {
                  var d = c[b];
                  return !!d && Oa(b, d);
                },
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ]
              ))
              ? c[a]
              : null
            : null;
        }),
        $r = Aa("INPUT"),
        Ae = w(Ha, $r),
        as = Aa("TEXTAREA"),
        oq = w(Ha, as),
        bs = Aa("SELECT"),
        pq = w(Ha, bs),
        Be = w(T("type"), cb(/^(checkbox|radio)$/)),
        sf = w(Ha, cb(/^INPUT|SELECT|TEXTAREA$/)),
        ee = w(Ha, cb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
        wf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
        nq = ["submit", "image", "hidden"],
        Ef = u(function () {
          for (var a = 59, c = {}, b = 0; b < Mk.length; b += 1)
            (c[Mk[b]] = String.fromCharCode(a)), (a += 1);
          return c;
        }),
        jj = u(function (a) {
          return { Ui: a, eb: null, ob: [] };
        }),
        hj = {},
        Tf = {};
      hj.p = 500;
      var gj = { i: "id", n: "name", h: "href", ty: "type" };
      Tf.h = !0;
      Tf.c = !0;
      var Oc = {};
      Oc.p = cf;
      Oc.c = function (a, c, b) {
        (a = Ya(n(c, "textContent"))) &&
          b &&
          ((b = b(c)),
          b.length && Wa(w(T("textContent"), Ya, Aa(a)), b) && (a = ""));
        Ae(c) && (a = Ya((c.getAttribute && c.getAttribute("value")) || a));
        return a;
      };
      var Sc,
        Sf =
          "button," +
          L(
            ",",
            B(
              function (a) {
                return 'input[type="' + a + '"]';
              },
              ["button", "submit", "reset", "file"]
            )
          ) +
          ",a",
        yi = v(Sf, hb),
        lq =
          ((Sc = {}),
          (Sc.A = "h"),
          (Sc.BUTTON = "i"),
          (Sc.DIV = "i"),
          (Sc.INPUT = "ty"),
          Sc),
        Nk = /\/$/,
        fj = pb("r", function (a, c) {
          var b = ej(a, c),
            d = b[0];
          return !b[1] && d;
        }),
        td = u(function () {
          return { Ca: {}, pending: {}, children: {} };
        }),
        Dg = T("postMessage"),
        cs = A("s.f", function (a, c, b, d, e) {
          c = c(d);
          var f = td(a),
            g = L(":", [c.meta.$b, c.meta.key]);
          if (Dg(b)) {
            f.pending[g] = e;
            try {
              b.postMessage(c.Pf, "*");
            } catch (h) {
              delete f.pending[g];
              return;
            }
            U(
              a,
              function () {
                delete f.pending[g];
              },
              5e3,
              "if.s"
            );
          }
        }),
        ds = A("s.fh", function (a, c, b, d, e, f) {
          var g = null,
            h = null,
            k = td(a),
            l = null;
          try {
            (g = Gb(a, f.data)), (h = g.__yminfo), (l = g.data);
          } catch (m) {
            return;
          }
          if (
            !ba(h) &&
            h.substring &&
            "__yminfo" === h.substring(0, 8) &&
            !ba(l) &&
            ((g = h.split(":")), 4 === g.length)
          )
            if (
              ((h = c.id),
              (c = g[1]),
              (a = g[2]),
              (g = g[3]),
              !O(l) && l.type && "0" === g && l.counterId)
            ) {
              if (!l.toCounter || l.toCounter == h) {
                k = null;
                try {
                  k = f.source;
                } catch (m) {}
                !$a(k) &&
                  Dg(k) &&
                  ((f = d.$(l.type, [f, l])),
                  (e = B(w(S, Th(e)), f.concat([{}]))),
                  (l = b([c, a, l.counterId], e)),
                  k.postMessage(l.Pf, "*"));
              }
            } else
              g === "" + h &&
                O(l) &&
                ha(function (m) {
                  return !(!m.hid || !m.counterId);
                }, l).length === l.length &&
                (b = k.pending[L(":", [c, a])]) &&
                b.apply(null, [f].concat(l));
        }),
        ad = u(function (a, c) {
          var b,
            d = yc("getElementsByTagName", n(a, "document")),
            e = td(a),
            f = Dg(a),
            g = cd(a),
            h = ja(a);
          if (!d || !f) return null;
          d = d.call(a.document, "iframe");
          f = ((b = {}), (b.counterId = c.id), (b.hid = "" + wc(a)), b);
          xe(a) && (f.duid = ud(a, c));
          hq(a, g);
          iq(a);
          b = jq(a, f);
          var k = E([a, v([], b)], cs);
          x(function (l) {
            var m = null;
            try {
              m = l.contentWindow;
            } catch (p) {}
            m &&
              k(m, { type: "initToChild" }, function (p, q) {
                g.$("initToParent", [p, q]);
              });
          }, d);
          rb(a) &&
            k(a.parent, { type: "initToParent" }, function (l, m) {
              g.$("parentConnect", [l, m]);
            });
          h.F(a, ["message"], E([a, c, b, g, f], ds));
          return { X: g, Ca: e.Ca, children: e.children, ae: k };
        }, w(eb, J)),
        bd = u(
          function (a, c) {
            if (!xe(a) || !rb(a)) return ud(a, c);
            var b = ad(a, c);
            return b && b.Ca[c.id]
              ? b.Ca[c.id].info.duid || ud(a, c)
              : ud(a, c);
          },
          function (a, c) {
            return "{" + c.Jd + c.Sa;
          }
        ),
        es = u(
          w(
            ka,
            Ba(function (a) {
              return -new a.l.Date().getTimezoneOffset();
            })
          )
        ),
        fs = w(
          ka,
          Ba(function (a) {
            a = new a.l.Date();
            return L(
              "",
              B(zq, [
                a.getFullYear(),
                a.getMonth() + 1,
                a.getDate(),
                a.getHours(),
                a.getMinutes(),
                a.getSeconds(),
              ])
            );
          })
        ),
        gs = w(ka, Ba(Rf)),
        Ok = u(
          w(
            ka,
            Ba(function (a) {
              return a.Cc[0];
            })
          )
        ),
        hs = u(function (a) {
          a = H(a);
          var c = a.C("counterNum", 0) + 1;
          a.D("counterNum", c);
          return c;
        }, w(eb, J)),
        ma,
        sd =
          ((ma = {}),
          (ma.vf = v(Pc.version, S)),
          (ma.nt = Ir),
          (ma.fu = function (a, c, b) {
            var d = b.J;
            if (!d) return null;
            c = (n(a, "document.referrer") || "").replace(Nk, "");
            b = (d["page-ref"] || "").replace(Nk, "");
            d = d["page-url"];
            a = R(a).href !== d;
            c = c !== b;
            b = 0;
            a && c ? (b = 3) : c ? (b = 1) : a && (b = 2);
            return b;
          }),
          (ma.en = Zr),
          (ma.la = Fk),
          (ma.ut = function (a, c, b) {
            var d = b.M;
            b = b.J;
            d = d && d.vc;
            b && (qi(a) || c.we || d) && (b.ut = wa.hg);
            return null;
          }),
          (ma.v = v(wa.$a, S)),
          (ma.cn = hs),
          (ma.dp = function (a) {
            var c = H(a),
              b = c.C("bt", {});
            if (Y(c.C("bt"))) {
              var d = n(a, "navigator.getBattery");
              try {
                b.p = d && d.call(a.navigator);
              } catch (e) {}
              c.D("bt", b);
              b.p &&
                b.p.then &&
                b.p.then(
                  z(a, "bi:dp.p", function (e) {
                    b.Fi = n(e, "charging") && 0 === n(e, "chargingTime");
                  })
                );
            }
            return sb(b.Fi);
          }),
          (ma.ls = u(function (a, c) {
            var b = Rc(a, c.id),
              d = ka(a),
              e = b.C("lsid");
            return +e ? e : ((d = Sa(a, 0, d(da))), b.D("lsid", d), d);
          }, eb)),
          (ma.hid = wc),
          (ma.phid = function (a, c) {
            if (!rb(a)) return null;
            var b = ad(a, c);
            if (!b) return null;
            var d = ea(b.Ca);
            return d.length ? b.Ca[d[0]].info.hid : null;
          }),
          (ma.z = es),
          (ma.i = fs),
          (ma.et = gs),
          (ma.c = w(T("navigator.cookieEnabled"), Jb)),
          (ma.rn = w(S, Sa)),
          (ma.rqn = function (a, c, b) {
            b = b.J;
            if (!b || b.nohit) return null;
            c = J(c);
            a = Rc(a, c);
            c = (a.C("reqNum", 0) || 0) + 1;
            a.D("reqNum", c);
            if (a.C("reqNum") === c) return c;
            a.bc("reqNum");
            return null;
          }),
          (ma.u = bd),
          (ma.w = function (a) {
            a = wd(a);
            return a[0] + "x" + a[1];
          }),
          (ma.s = function (a) {
            var c = n(a, "screen");
            if (c) {
              a = n(c, "width");
              var b = n(c, "height");
              c = n(c, "colorDepth") || n(c, "pixelDepth");
              return L("x", [a, b, c]);
            }
            return null;
          }),
          (ma.sk = T("devicePixelRatio")),
          (ma.ifr = w(rb, Jb)),
          (ma.j = w(Kr, Jb)),
          (ma.sti = function (a) {
            return rb(a) && Jr(a) ? "1" : null;
          }),
          ma),
        gq = u(function () {
          return xa(ea(sd), ea(Qf));
        }),
        fq = u(Cc, J),
        cj = u(function () {
          return { Ne: null, ra: [] };
        }, J),
        cq = /^[a-z][\w.+-]+:/i,
        Eg,
        Sb = [
          [Ce, 1],
          [we, 2],
          [Lb(), 3],
          [dj, 4],
        ],
        ve = [],
        zb = v(Sb, xj),
        Rb = ((Eg = {}), (Eg.h = Sb), Eg),
        Z = v(Rb, wj);
      zb($i, -100);
      var Yp = /[^a-z0-9.:-]/,
        Fg,
        Gg = {},
        Pk = La([
          Of && [Of, 0],
          wb && [wb, 1],
          [xb, 2],
          qd && [qd, 3],
          [Mc, 4],
        ]),
        kc = La([Of, wb, xb, qd, Mc]),
        Hg = [xb];
      Hg.unshift(wb);
      Hg.push(qd);
      var Qk = La(Hg),
        Tc = La([Mc]);
      La([wb, xb]);
      var is = La([wb, Mc]),
        Rk = La([wb, xb, qd, Mc]),
        ya = ((Fg = {}), (Fg.h = Qk), Fg),
        Ig = u(function (a, c) {
          var b = Gg["*"] ? Gg["*"] : c && Gg[c];
          b || (b = c ? ya[c] || [] : kc);
          b = P(
            function (d, e) {
              var f = e(a);
              if (f) {
                var g = Ib(w(pd, Aa(e)), Pk);
                g && d.push([g[1], f]);
              }
              return d;
            },
            [],
            b
          );
          b.length || Ld();
          return b;
        }, eb),
        Jg,
        js = I(K.reject, K, Ka()),
        za = ((Jg = {}), (Jg.h = jb), Jg),
        ra = A(
          "g.sen",
          function (a, c, b) {
            var d = Ig(a, c);
            b = b ? bq(a, c, b) : [];
            var e = za[c],
              f = e ? e(a, d, b) : jb(a, d, b);
            return function () {
              var g = Ja(arguments),
                h = g[0];
              g = g.slice(1);
              var k = h.Z;
              h = C(h, { Z: C(void 0 === k ? {} : k, { fa: [c] }) });
              return f.apply(null, [h].concat(g));
            };
          },
          js
        ),
        Qp = ua(function (a, c) {
          if (!c[a]) {
            var b,
              d = new K(function (e) {
                b = e;
              });
            c[a] = { uf: b, promise: d, wf: !1 };
          }
          return c[a].promise;
        }),
        Xi = u(w(Cc, Ba)),
        ks = A("dc.init", function (a, c) {
          return c && eg(Zd(c.split(":")[0]))
            ? { log: F, warn: F, error: F }
            : Pp(a, c);
        }),
        hc = u(ks, eb),
        Fl = A("h.p", function (a, c) {
          var b,
            d,
            e = ra(a, "h", c),
            f = c.ic || "" + R(a).href,
            g = c.Vg || a.document.referrer,
            h = {
              K: Ea(((b = {}), (b.pv = 1), b)),
              J: ((d = {}), (d["page-url"] = f), (d["page-ref"] = g), d),
              M: {},
            };
          h.M.T = c.T;
          h.M.ve = c.ve;
          c.Zc && h.J && (h.J.nohit = "1");
          return e(h, c)
            .then(function (k) {
              var l;
              k &&
                (c.Zc ||
                  fc(
                    a,
                    c,
                    "h",
                    ((l = {}), (l.id = c.id), (l.url = f), (l.ref = g), l),
                    c.T
                  )(),
                Nb(a, E([a, c, k], Rp)));
            })
            ["catch"](z(a, "h.g.s"));
        }),
        Kg = [
          "yandex_metrika_callback" + Pc.callbackPostfix,
          "yandex_metrika_callbacks" + Pc.callbackPostfix,
        ],
        ls = A("cb.i", function (a) {
          var c = Kg[0],
            b = Kg[1];
          if (V(a[c])) a[c]();
          "object" === typeof a[b] &&
            x(function (d, e) {
              a[b][e] = null;
              If(a, d);
            }, a[b]);
          x(function (d) {
            try {
              delete a[d];
            } catch (e) {
              a[d] = void 0;
            }
          }, Kg);
        }),
        Np = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
        Sk = u(function (a) {
          return (
            !!n(a, "crypto.subtle.digest") &&
            !!n(a, "TextEncoder") &&
            !!n(a, "FileReader") &&
            !!n(a, "Blob")
          );
        }),
        Op = zg(/[^\d+()]/g),
        Lp = ["yandex_cid", "yandex_public_id"],
        ms = A("fpm", function (a, c) {
          if (!Jk(a)) return F;
          var b = J(c);
          if (!Sk(a)) return Db(a, b, "ns"), F;
          var d = Ca(a, c);
          return d
            ? function (e) {
                return new K(function (f, g) {
                  return ia(e)
                    ? ea(e).length
                      ? f(
                          Ti(a, e).then(function (h) {
                            var k, l;
                            h &&
                              h.length &&
                              d.params(
                                ((k = {}),
                                (k.__ym = ((l = {}), (l.fpp = h), l)),
                                k)
                              );
                          }, F)
                        )
                      : g(Ka("fpm.l"))
                    : g(Ka("fpm.o"));
                })["catch"](z(a, "fpm.en"));
              }
            : F;
        }),
        Ke = ua(function (a, c) {
          var b = {};
          Lf(a)(function (d) {
            b = d[c] || {};
          });
          return b;
        }),
        ns = A("c.c.cc", function (a) {
          var c = H(a),
            b = w(Ke(a), function (d) {
              var e,
                f = ((e = {}), (e.clickmap = !!d.clickmap), e);
              return C({}, d, f);
            });
          return z(a, "g.c.cc", w(I(c.C, c, "counters", {}), ea, Nc(b)));
        }),
        os = A("gt.c.rs", function (a, c) {
          var b,
            d = J(c),
            e = c.id,
            f = c.aa,
            g = c.wg,
            h = c.pe,
            k = E([a, d], Jp);
          Kf(
            a,
            d,
            ((b = {}),
            (b.id = e),
            (b.type = +f),
            (b.clickmap = g),
            (b.trackHash = !!h),
            b)
          );
          return k;
        }),
        Ri = u(md),
        od = u(Cc, J),
        ps = A("pa.int", function (a, c) {
          var b;
          return (
            (b = {}),
            (b.params = function () {
              var d,
                e,
                f,
                g = Ja(arguments),
                h = Ip(g);
              if (!h) return null;
              g = h.Cg;
              var k = h.T;
              h = h.Sb;
              if (!ia(k) && !O(k)) return null;
              var l = ra(a, "1", c),
                m = od(c).url,
                p = !Rr(c),
                q = "pa",
                r = ((d = {}), (d.id = c.id), d);
              d = k;
              var t = "";
              if ((t = n(k, "__ym.user_id"))) (q = "pau"), (r.uid = t);
              G("__ymu", ea(k)) && (q = "paup");
              d.__ym &&
                ((d = C({}, k)),
                (d.__ym = P(
                  function (y, D) {
                    var N = n(k, "__ym." + D);
                    N && (y[D] = N);
                    return y;
                  },
                  {},
                  Ed
                )),
                ea(d.__ym).length || delete d.__ym,
                (p = !!ea(d).length));
              d = t ? void 0 : JSON.stringify(d);
              d = fc(a, c, q, r, d);
              l = l(
                {
                  M: { T: k },
                  K: Ea(((e = {}), (e.pa = 1), (e.ar = 1), e)),
                  J: ((f = {}), (f["page-url"] = m || R(a).href), f),
                },
                c
              ).then(p ? d : F);
              return Lc(a, "p.s", l, h, g);
            }),
            b
          );
        }),
        Ud = u(Pi, w(eb, J)),
        qs = A("y.p", function (a, c) {
          var b = Pi(a, c);
          if (b) {
            var d = Qd(a),
              e = E([a, b, c], Ep);
            rh(a, d, function (f) {
              f.F(["params"], e);
            });
            b.X.F(["params"], w(T("1"), e));
          }
        }),
        jr = u(function (a) {
          if ((a = Pb(a))) return a("a");
        }),
        Tk = { Yi: cb(/[/&=?#]/) },
        ne = A("go.in", function (a, c, b, d) {
          var e;
          void 0 === b && (b = "goal");
          return (
            (e = {}),
            (e.reachGoal = function (f, g, h, k) {
              var l, m, p;
              if (!f || (Tk[b] && Tk[b](f))) return null;
              var q = g,
                r = h || F;
              V(g) && ((r = g), (q = void 0), (k = h));
              var t = fc(
                  a,
                  c,
                  "gr",
                  ((l = {}), (l.id = c.id), (l.goal = f), l),
                  q
                ),
                y = "goal" === b;
              g = ra(a, "g", c);
              l = Dp(a, c, f, b);
              h = l[0];
              l = l[1];
              q = g(
                {
                  M: { T: q },
                  K: Ea(((m = {}), (m.ar = 1), m)),
                  J: ((p = {}), (p["page-url"] = h), (p["page-ref"] = l), p),
                },
                c
              ).then(function () {
                var D, N;
                y && t();
                nb(
                  a,
                  ((D = {}),
                  (D.counterKey = J(c)),
                  (D.name = "event"),
                  (D.data = ((N = {}), (N.schema = b), (N.name = f), N)),
                  D)
                );
                d && d();
              });
              return Lc(a, "g.s", q, r, k);
            }),
            e
          );
        }),
        rs = A("guid.int", function (a, c) {
          var b;
          return (
            (b = {}),
            (b.getClientID = function (d) {
              var e = ud(a, c);
              d && If(a, d, null, e);
              return e;
            }),
            b
          );
        }),
        ak,
        ss = A("th.e", function (a, c) {
          function b() {
            g ||
              (k = Eb(a, "onhashchange")
                ? ja(a).F(a, ["hashchange"], h)
                : kr(a, h));
          }
          var d,
            e = ra(a, "t", c),
            f = te(a, J(c)),
            g = !1,
            h = z(a, "h.h.ch", I(lr, null, a, c, e)),
            k = F;
          c.pe && (b(), (g = !0));
          e = z(a, "tr.hs.h", function (l) {
            var m;
            l ? b() : k();
            g = !!l;
            f(((m = {}), (m.trackHash = g), m));
          });
          return (d = {}), (d.trackHash = e), (d.u = k), d;
        }),
        ts = ua(function (a, c) {
          fa(c) ? a.push(c) : x(w(S, db("push", a)), c);
        }),
        nd = pb(
          "retryReqs",
          function (a) {
            var c = Va(a),
              b = c.C("retryReqs", {}),
              d = ka(a)(da);
            x(function (e) {
              var f = e[0];
              e = e[1];
              (!e || !e.time || e.time + 864e5 < d) && delete b[f];
            }, Ga(b));
            c.D("retryReqs", b);
            return b;
          },
          !0
        ),
        Lg = w(cc, Aa(0)),
        Uk = ob(Lg),
        us = [Uk("watch"), Uk("clmap")],
        vs = A("g.r", function (a) {
          var c = ka(a),
            b = nd(a),
            d = c(da),
            e = wc(a);
          return tb(
            function (f, g) {
              var h = g[0],
                k = g[1];
              k &&
                Wa(Ba(k.resource), us) &&
                !k.d &&
                k.ghid &&
                k.ghid !== e &&
                k.time &&
                500 < d - k.time &&
                k.time + 864e5 > d &&
                2 >= k.browserInfo.rqnl &&
                ((k.d = 1),
                (h = {
                  protocol: k.protocol,
                  host: k.host,
                  ya: k.resource,
                  Yh: k.postParams,
                  T: k.params,
                  og: k.browserInfo,
                  Wi: k.ghid,
                  time: k.time,
                  Kb: Da(h),
                  zg: k.counterId,
                  aa: k.counterType,
                }),
                k.telemetry && (h.Fa = k.telemetry),
                f.push(h));
              return f;
            },
            [],
            Ga(b)
          );
        }),
        ws = A("nb.p", function (a, c) {
          function b(D) {
            l() ||
              ((D = "number" === typeof D ? D : 15e3),
              (y = mr(a, d(!1), D)),
              m());
          }
          function d(D) {
            return function (N) {
              var M, sa, ta;
              void 0 === N &&
                (N = ((M = {}), (M.ctx = {}), (M.callback = F), M));
              if (D || (!r && !k.Bd)) {
                r = !0;
                m();
                y && y();
                var Qa = p(da);
                M = (Da(k.C("lastHit")) || 0) < Qa - 18e5;
                var Mg = 0.1 > Math.random();
                k.D("lastHit", Qa);
                Qa = Ea(((sa = {}), (sa.nb = 1), (sa.cl = t), (sa.ar = 1), sa));
                sa = od(c);
                sa = {
                  J: ((ta = {}), (ta["page-url"] = sa.url || R(a).href), ta),
                  K: Qa,
                  M: { force: D },
                };
                ta = hc(a, J(c)).warn;
                !N.callback && N.ctx && ta("nbnc");
                (ta = D || M || Mg) ||
                  ((ta = a.location.href),
                  (M = a.document.referrer),
                  (ta = !(ta && M ? Ni(ta) === Ni(M) : !ta && !M)));
                if (ta)
                  return (ta = g(sa, c)), Lc(a, "l.o.l", ta, N.callback, N.ctx);
              }
              return null;
            };
          }
          var e,
            f,
            g = ra(a, "n", c),
            h = J(c),
            k = Rc(a, c.id),
            l = v(v(h, Ke(a)), w(qa, T("accurateTrackBounce"))),
            m = v(((e = {}), (e.accurateTrackBounce = !0), e), te(a, h)),
            p = ka(a),
            q = p(da),
            r = !1,
            t = 0,
            y;
          na(c, function (D) {
            t = D.Og - q;
          });
          c.Be && b(c.Be);
          e = ((f = {}), (f.notBounce = d(!0)), (f.u = y), f);
          e.accurateTrackBounce = b;
          return e;
        }),
        wp = ua(ac)("(ym-disable-clickmap|ym-clickmap-ignore)"),
        xs = A("clm.p", function (a, c) {
          if (Yd(a)) return F;
          var b = ra(a, "m", c),
            d = J(c),
            e = ka(a),
            f = e(da),
            g = v(v(d, Ke(a)), w(qa, T("clickmap"))),
            h,
            k = null;
          d = z(a, "clm.p.c", function (l) {
            var m = g();
            if (m) {
              var p = H(a),
                q = p.C("cls", { Wb: 0, x: 0, y: 0 });
              p.D("cls", {
                Wb: q.Wb + 1,
                x: q.x + l.clientX,
                y: q.y + l.clientY,
              });
              p = "object" === typeof m ? m : {};
              q = p.filter;
              m = p.isTrackHash || !1;
              var r = B(function (y) {
                return ("" + y).toUpperCase();
              }, p.ignoreTags || []);
              Y(h) && (h = p.quota || null);
              var t = !!p.quota;
              l = {
                element: xp(a, l),
                position: Ji(a, l),
                button: yp(l),
                time: e(da),
              };
              p = R(a).href;
              if (vp(a, l, k, r, q)) {
                if (t) {
                  if (!h) return;
                  --h;
                }
                r = ze(a, l.element);
                q = r[0];
                r = r[1];
                t = Uf(a, l.element);
                q = [
                  "rn",
                  Sa(a),
                  "x",
                  Math.floor((65535 * (l.position.x - t.left)) / (q || 1)),
                  "y",
                  Math.floor((65535 * (l.position.y - t.top)) / (r || 1)),
                  "t",
                  Math.floor((l.time - f) / 100),
                  "p",
                  cf(a, l.element),
                  "X",
                  l.position.x,
                  "Y",
                  l.position.y,
                ];
                q = L(":", q);
                m && (q += ":wh:1");
                up(a, p, q, b, c);
                k = l;
              }
            }
          });
          return ja(a).F(n(a, "document"), ["click"], d);
        }),
        ys = A("trigger.in", function (a, c) {
          c.Uf && Nb(a, E([a, "yacounter" + c.id + "inited"], qq), "t.i");
        }),
        zs = A("c.m.p", function (a, c) {
          var b,
            d = J(c);
          return (b = {}), (b.clickmap = v(te(a, d), tp)), b;
        }),
        wi = v("form", gc),
        gp = v("form", hb),
        sp = u(w(eb, ob(na)(T("settings.form_goals"))), eb),
        As = A("s.f.i", function (a, c) {
          var b,
            d = [],
            e = [],
            f = ja(a);
          d.push(f.F(a, ["click"], z(a, "s.f.c", E([a, c, e], rp))));
          d.push(
            f.F(
              a,
              ["submit"],
              z(a, "s.f.e", function (g) {
                var h = n(g, "target");
                g = n(g, "isTrusted");
                Gi(!0, a, c, e, h, g);
              })
            )
          );
          Hi(a, c, "fgi", ((b = {}), (b.id = c.id), b));
          return E([me, d], x);
        }),
        Bs = A("s.f.i", function (a, c) {
          return na(c, function (b) {
            var d;
            if (n(b, "settings.button_goals"))
              return (
                (b = ja(a).F(
                  a,
                  ["click"],
                  z(a, "c.t.c", w(E([a, c], Qe(a, c, "", qp))))
                )),
                fc(a, c, "gbi", ((d = {}), (d.id = c.id), d))(),
                b
              );
          });
        }),
        Vb,
        Hd,
        Ng,
        Uc,
        Ab,
        Ff =
          ((Vb = {}),
          (Vb.transaction_id = "id"),
          (Vb.item_brand = "brand"),
          (Vb.index = "position"),
          (Vb.item_variant = "variant"),
          (Vb.value = "revenue"),
          (Vb.item_category = "category"),
          (Vb.item_list_name = "list"),
          Vb),
        dc =
          ((Hd = {}),
          (Hd.item_id = "id"),
          (Hd.item_name = "name"),
          (Hd.promotion_name = "coupon"),
          Hd),
        pp = ((Ng = {}), (Ng.promotion_name = "name"), Ng),
        Vk =
          ((Uc = {}),
          (Uc.promotion_name = "name"),
          (Uc.promotion_id = "id"),
          (Uc.item_id = "product_id"),
          (Uc.item_name = "product_name"),
          Uc),
        mp =
          "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(
            " "
          ),
        np =
          ((Ab = {}),
          (Ab.view_item = { event: "detail", va: dc, Ha: "products" }),
          (Ab.add_to_cart = { event: "add", va: dc, Ha: "products" }),
          (Ab.remove_from_cart = { event: "remove", va: dc, Ha: "products" }),
          (Ab.begin_checkout = { event: "checkout", va: dc, Ha: "products" }),
          (Ab.purchase = { event: "purchase", va: dc, Ha: "products" }),
          (Ab.view_item_list = { event: "impressions", va: dc }),
          (Ab.select_item = { event: "click", Ha: "products", va: dc }),
          (Ab.view_promotion = {
            event: "promoView",
            Ha: "promotions",
            va: Vk,
          }),
          (Ab.select_promotion = {
            event: "promoClick",
            Ha: "promotions",
            va: Vk,
          }),
          Ab),
        Fi = A("dl.w", function (a, c, b) {
          function d() {
            var g = n(a, c);
            (e = O(g) && re(a, g, b)) || (f = U(a, d, 1e3, "ec.dl"));
          }
          var e,
            f = 0;
          d();
          return function () {
            return la(a, f);
          };
        }),
        Cs = A("p.e", function (a, c) {
          var b = Ca(a, c);
          if (b) {
            var d = H(a);
            b = b.params;
            var e = z(a, "h.ee", E([a, J(c), b], kp));
            return c.fd
              ? (d.D("ecs", 0), Ei(a, c.fd, e))
              : na(c, function (f) {
                  if ((f = n(f, "settings.ecommerce")) && fa(f))
                    return d.D("ecs", 1), Ei(a, f, e);
                });
          }
        }),
        Wk = u(function (a) {
          a = R(a);
          a = Mq(a.search.substring(1));
          a["_ym_status-check"] = a["_ym_status-check"] || "";
          a._ym_lang = a._ym_lang || "ru";
          return a;
        }),
        Bi = w(Wk, T("_ym_status-check"), Da),
        Ds = w(Wk, T("_ym_lang")),
        dp = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
        ep =
          /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/,
        Ai = cb(
          /^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/
        ),
        ip = ["form", "button", "status"],
        Og = [],
        fp = u(
          function (a, c, b) {
            x(w(Ec([a, c, b]), qa), Og);
            b.inline
              ? ((c = zi(b)), (b = b.id), vi(a, c, void 0 === b ? "" : b))
              : b.resource &&
                Ai(b.resource) &&
                ((a._ym__postMessageEvent = c),
                (a._ym__inpageMode = b.inpageMode),
                (a._ym__initMessage = b.initMessage),
                jp(a, b.resource));
          },
          function (a, c, b) {
            return b.id;
          }
        ),
        Es = A("cs.init", function (a, c) {
          var b,
            d = Bi(a);
          if (d && c.id === d && "0" === c.aa) {
            var e = zi(((b = {}), (b.lang = Ds(a)), (b.fileId = "status"), b));
            U(a, E([a, e, "" + d], vi), 0, "cs");
          }
        }),
        Fs = A("suid.int", function (a, c) {
          var b;
          return (
            (b = {}),
            (b.setUserID = function (d, e, f) {
              if (fa(d) || ec(a, d)) {
                var g = Ca(a, c);
                d = ae(["__ym", "user_id", d]);
                g.params(d, e || F, f);
              } else hc(a, J(c)).error("wuid");
            }),
            b
          );
        }),
        Gs = A("up.int", function (a, c) {
          var b;
          return (
            (b = {}),
            (b.userParams = z(a, "up.c", function (d, e, f) {
              var g,
                h = Ca(a, c),
                k = hc(a, J(c)).warn;
              h
                ? ia(d)
                  ? ((d = ((g = {}), (g.__ymu = d), g)),
                    (g = h.params) && g(d, e || F, f))
                  : k("wup")
                : k("nci");
            })),
            b
          );
        }),
        Hs = /[\*\.\?\(\)]/g,
        Is = u(function (a, c, b) {
          var d;
          try {
            var e = b.replace("\\s", " ").replace(Hs, "");
            hc(a, "").warn("nnw", ((d = {}), (d.name = e), d));
          } catch (f) {}
        }, eb),
        Js = A("r.nn", function (a) {
          De(a) &&
            re(a, mg, function (c) {
              c.xa.F(function (b) {
                Is(a, b[1], b[0]);
                mg.splice(100);
              });
            });
        }),
        Ks = A("e.a.p", function (a, c) {
          var b,
            d = Ca(a, c);
          d = E(
            [
              w(S, Ba(!0)),
              La(B(v(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"])),
            ],
            B
          );
          c.Gg && d();
          return (b = {}), (b.enableAll = d), b;
        }),
        Ls = u(Cc, J),
        Ms = A("fpi", function (a) {
          var c = kd(a);
          if (c && !a.document.hidden) {
            var b = H(a).Ea;
            b("fpe", 1);
            var d = ja(a).F(
              a,
              ["visibilitychange", "webkitvisibilitychange"],
              function () {
                a.document.hidden && (b("fht", c.now()), d());
              }
            );
          }
        }),
        Ns = u(function (a) {
          a = n(a, "console");
          var c = n(a, "log");
          c = He("log", c) ? I(c, a) : F;
          var b = n(a, "warn");
          b = He("warn", b) ? I(b, a) : c;
          var d = n(a, "error");
          a = He("error", d) ? I(d, a) : c;
          return { log: c, error: a, warn: b };
        }),
        Os = v("add", le),
        Ps = v("remove", le),
        Qs = v("detail", le),
        Rs = v("purchase", le),
        Ss =
          "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(
            " "
          ),
        bf = u(function (a) {
          var c = uk(a);
          a = c.Yf;
          if (!c.cf) return !1;
          c = db("indexOf", a);
          c = Wa(w(c, Aa(-1), zc), Ss);
          var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
            d = /YaBrowser\/[\d.]+/.test(a),
            e = /Mobile/.test(a);
          return c || b || (d && e) || (!/Safari/.test(a) && e);
        }),
        Dm = u(function (a) {
          var c = vb(a);
          return c ? gb(c, "YangoEats") || je(a) : !1;
        }),
        Ts = /\sYptp\/\d\.(\d+)\s/,
        Us = u(function (a) {
          var c;
          a: {
            if ((c = vb(a)) && (c = Ts.exec(c)) && 1 < c.length) {
              c = Da(c[1]);
              break a;
            }
            c = 0;
          }
          return (50 <= c && 99 >= c) || gf(a, 79) ? !1 : !Dd(a) || bf(a);
        }),
        Xk = va(String.prototype.repeat, "repeat"),
        Qh = Xk
          ? function (a, c) {
              return Xk.call(a, c);
            }
          : $o,
        Kh = v(!0, function (a, c, b, d) {
          b = c.length && (b - d.length) / c.length;
          if (0 >= b) return d;
          c = Qh(c, b);
          return a ? c + d : d + c;
        }),
        Vs = A("p.cd", function (a) {
          if (he(a) || wg(a)) {
            var c = Va(a);
            if (ba(c.C("jn"))) {
              c.D("jn", !1);
              var b = a.chrome || ue(a) ? function () {} : /./;
              a = Ns(a);
              b.toString = function () {
                c.D("jn", !0);
                return "Yandex.Metrika counter is initialized";
              };
              a.log("%c%s", "color: inherit", b);
            }
          }
        }),
        Ws = u(function (a) {
          a = n(a, "navigator.plugins");
          return !!(a && Za(a) && Wa(w(T("name"), cb(/Chrome PDF Viewer/)), a));
        }),
        Wb = ua(function (a, c) {
          return H(c).C(a, null);
        }),
        Zo = { "*": "+", "-": "/", Ni: "=", "+": "*", "/": "-", "=": "_" },
        Xs = u(function (a) {
          return V(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null;
        }),
        Ys = u(v("panoramaId", ke)),
        Zs = u(function (a) {
          return ke("pubcid.org", a) || ke("_pubCommonId", a);
        }),
        $s = u(v("_sharedid", ke)),
        at = u(function (a, c) {
          if (c.Sa) return null;
          var b = Rd(a, "").C("_ga");
          return b && Zc(Pd(b));
        }, w(eb, J)),
        Vo = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart", "navigationStart"],
          ["redirectEnd", "redirectStart"],
          [
            function (a, c) {
              return n(c, "redirectCount") || n(a, "navigation.redirectCount");
            },
          ],
          ["domInteractive", "domLoading"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete", "navigationStart"],
          ["loadEventStart", "navigationStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart", "navigationStart"],
        ],
        qb,
        Uo = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart"],
          ["redirectEnd", "redirectStart"],
          ["redirectCount"],
          ["domInteractive", "responseEnd"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete"],
          ["loadEventStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart"],
        ],
        si =
          ((qb = {}),
          (qb.responseEnd = 1),
          (qb.domInteractive = 1),
          (qb.domContentLoadedEventStart = 1),
          (qb.domContentLoadedEventEnd = 1),
          (qb.domComplete = 1),
          (qb.loadEventStart = 1),
          (qb.loadEventEnd = 1),
          (qb.unloadEventStart = 1),
          (qb.unloadEventEnd = 1),
          (qb.secureConnectionStart = 1),
          qb),
        Xo = u(md),
        Ro = u(Cc),
        So = u(function (a) {
          var c = n(a, "webkitRequestFileSystem");
          if (V(c) && !he(a))
            return new K(I(c, a, 0, 0))
              .then(function () {
                var d = n(a, "navigator.storage") || {};
                return d.estimate ? d.estimate() : {};
              })
              .then(function (d) {
                return (d = d.quota) && 12e7 > d ? !0 : !1;
              })
              ["catch"](v(!0, S));
          if (Fe(a))
            return (c = n(a, "navigator.serviceWorker")), K.resolve(Y(c));
          c = n(a, "openDatabase");
          if (ue(a) && V(c)) {
            var b = !1;
            try {
              c(null, null, null, null);
            } catch (d) {
              b = !0;
            }
            return K.resolve(b);
          }
          return K.resolve(
            !n(a, "indexedDB") &&
              (n(a, "PointerEvent") || n(a, "MSPointerEvent"))
          );
        }),
        bt = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
        ct = u(function (a, c) {
          var b = Kc(a),
            d = R(a).search.match(bt);
          return d && 2 <= d.length
            ? ((d = d[2]), c.Sa || b.D("turbo_uid", d), d)
            : (b = b.C("turbo_uid"))
            ? b
            : "";
        }),
        Co = [
          [
            ["'(-$&$&$'", 30102, 0],
            ["'(-$&$&$'", 29009, 0],
          ],
          [
            ["oWdZ[nc[jh_YW$Yec", 30103, 1],
            ["oWdZ[nc[jh_YW$Yec", 29010, 1],
          ],
        ],
        Do = [
          [["oWdZ[nc[jh_YW$Yec", 30103, 1]],
          [["oWdZ[nc[jh_YW$Yec", 29010, 1]],
        ],
        ri = { J: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
        zo = { le: 60, error: 15 },
        yo = { le: 5, error: 1 },
        pi = { id: 42822899, aa: "0" },
        dt = A("pa.plgn", function (a, c) {
          var b = Ud(a, c);
          b &&
            b.X.F(
              ["pluginInfo"],
              z(a, "c.plgn", function () {
                var d = H(a);
                d.D("cmc", d.C("cmc", 0) + 1);
                return Oj(c);
              })
            );
        }),
        Mb,
        kb,
        vm =
          ((Mb = {}),
          (Mb.am = "com.am"),
          (Mb.tr = "com.tr"),
          (Mb.ge = "com.ge"),
          (Mb.il = "co.il"),
          (Mb["\u0440\u0444"] = "ru"),
          (Mb["xn--p1ai"] = "ru"),
          (Mb["\u0431\u0435\u043b"] = "by"),
          (Mb["xn--90ais"] = "by"),
          Mb),
        Yk = {
          "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
          "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
          "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/,
        },
        wm =
          ((kb = {}),
          (kb.ka = "ge"),
          (kb.ro = "md"),
          (kb.tg = "tj"),
          (kb.tk = "tm"),
          (kb.et = "ee"),
          (kb.hy = "com.am"),
          (kb.he = "co.li"),
          (kb.ky = "kg"),
          (kb.be = "by"),
          (kb.tr = "com.tr"),
          (kb.kk = "kz"),
          kb),
        Zk = /^https?:\/\//,
        et = {
          1882689622: 1,
          2318205080: 1,
          3115871109: 1,
          3604875100: 1,
          339366994: 1,
          2890452365: 1,
          849340123: 1,
          173872646: 1,
          2343947156: 1,
          655012937: 1,
          3724710748: 1,
          3364370932: 1,
          1996539654: 1,
          2065498185: 1,
          823651274: 1,
          12282461: 1,
          1555719328: 1,
          1417229093: 1,
          138396985: 1,
          3015043526: 1,
        },
        $k = u(function () {
          return P(
            function (a, c) {
              var b = rc(c + "/tag.js");
              a[b] = 1;
              return a;
            },
            {},
            [
              "mc.yandex.ru/metrika",
              "mc.yandex.com/metrika",
              "cdn.jsdelivr.net/npm/yandex-metrica-watch",
            ]
          );
        }),
        ft = u(function (a) {
          a = kd(a);
          if (!a || !V(a.getEntriesByType)) return null;
          a = a.getEntriesByType("resource");
          var c = $k();
          return (a = Ib(function (b) {
            b = b.name.replace(Zk, "").split("?")[0];
            b = rc(b);
            return c[b];
          }, a))
            ? sb(a.transferSize)
            : null;
        }),
        Mo = "ar:1:pv:1:v:" + wa.$a + ":vf:" + Pc.version,
        No = wa.Oa + "//" + bc + "/watch/" + wa.ag,
        al = {},
        gt = A("exps.int", function (a, c) {
          var b;
          return (
            (b = {}),
            (b.experiments = function (d, e, f) {
              var g, h;
              void 0 === e && (e = F);
              if (d && 0 < d.length) {
                var k = ra(a, "e", c),
                  l = od(c).url;
                d = k(
                  {
                    K: Ea(((g = {}), (g.ex = 1), (g.ar = 1), g)),
                    J:
                      ((h = {}),
                      (h["page-url"] = l || R(a).href),
                      (h.exp = d),
                      h),
                  },
                  c
                );
                return Lc(a, "exps.s", d, e, f);
              }
            }),
            b
          );
        }),
        qh = [],
        ht = A("p.fh", function (a, c) {
          var b, d;
          void 0 === c && (c = !0);
          var e = Va(a),
            f = ka(a),
            g = e.C("wasSynced"),
            h = { id: 3, aa: "0" };
          return c && g && g.time + 864e5 > f(da)
            ? K.resolve(g)
            : ra(
                a,
                "f",
                h
              )(
                {
                  K: Ea(((b = {}), (b.pv = 1), b)),
                  J:
                    ((d = {}),
                    (d["page-url"] = R(a).href),
                    (d["page-ref"] = a.document.referrer),
                    d),
                },
                h
              )
                .then(function (k) {
                  var l;
                  k =
                    ((l = {}),
                    (l.time = f(da)),
                    (l.params = n(k, "settings")),
                    (l.bkParams = n(k, "userData")),
                    l);
                  e.D("wasSynced", k);
                  return k;
                })
                ["catch"](z(a, "f.h"));
        }),
        it = ua(function (a, c) {
          0 === parseFloat(n(c, "settings.c_recp")) &&
            (a.Kd.D("ymoo" + a.oa, a.Sf(mb)),
            a.$c && a.$c.destruct && a.$c.destruct());
        }),
        ef = w(T("settings.pcs"), Aa("1")),
        bl = bc.split("."),
        jt = bl.pop(),
        Pg = L(".", bl),
        um = u(function (a) {
          a = R(a).hostname.split(".");
          return a[a.length - 1];
        }),
        tm = u(function (a) {
          return (
            -1 !==
            R(a).hostname.search(
              /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
            )
          );
        }),
        kt =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/,
        Td = u(function (a) {
          a = R(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(kt));
          return c;
        }),
        lt =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
        Fo = u(function (a) {
          a = R(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(lt));
          return c;
        }),
        fh = wa.Oa + "//" + bc + "/metrika",
        ce = fh + "/metrika_match.html",
        Le,
        Jo = ((Le = {}), (Le.s = "p"), (Le["8"] = "i"), Le),
        Go = pb("csp", function (a, c) {
          return ra(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]);
        }),
        Qg = "et w v z i u vf".split(" "),
        cl = xd("wv"),
        mt = xd("pub"),
        ei = (function () {
          function a(c, b) {
            this.l = c;
            this.type = b;
          }
          a.isEnabled = function (c) {
            return !!c.JSON;
          };
          a.prototype.Da = function (c) {
            return nf(Hb(this.l, c));
          };
          a.prototype.qb = function (c) {
            var b = c.data;
            "string" !== typeof b && (b = Hb(this.l, c.data));
            return b;
          };
          a.prototype.hb = function (c) {
            return encodeURIComponent(c).length;
          };
          a.prototype.ee = function (c, b) {
            for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
              e.push(c.slice(f * d, d * (f + 1)));
            return e;
          };
          return a;
        })(),
        to = u(function (a) {
          function c(f, g, h, k) {
            d[0] = g;
            h[k] = e[3];
            h[k + 1] = e[2];
            h[k + 2] = e[1];
            h[k + 3] = e[0];
          }
          function b(f, g, h, k) {
            d[0] = g;
            h[k] = e[0];
            h[k + 1] = e[1];
            h[k + 2] = e[2];
            h[k + 3] = e[3];
          }
          if (
            "undefined" === typeof a.Float32Array ||
            "undefined" === typeof a.Uint8Array
          )
            return uo;
          var d = new Float32Array([-0]),
            e = new Uint8Array(d.buffer);
          return 128 === e[3] ? b : c;
        }),
        po = ni(!1),
        oo = ni(!0),
        aa,
        Dc,
        dl =
          ((aa = {}),
          (aa.mousemove = 0),
          (aa.mouseup = 1),
          (aa.mousedown = 2),
          (aa.click = 3),
          (aa.scroll = 4),
          (aa.windowblur = 5),
          (aa.windowfocus = 6),
          (aa.focus = 7),
          (aa.blur = 8),
          (aa.eof = 9),
          (aa.selection = 10),
          (aa.change = 11),
          (aa.input = 12),
          (aa.touchmove = 13),
          (aa.touchstart = 14),
          (aa.touchend = 15),
          (aa.touchcancel = 16),
          (aa.touchforcechange = 17),
          (aa.zoom = 18),
          (aa.resize = 19),
          (aa.keystroke = 20),
          (aa.deviceRotation = 21),
          (aa.fatalError = 22),
          (aa.hashchange = 23),
          (aa.stylechange = 24),
          (aa.articleInfo = 25),
          (aa.publishersHeader = 26),
          (aa.pageData = 27),
          (aa.mutationAdd = 28),
          (aa.mutationRemove = 29),
          (aa.mutationTextChange = 30),
          (aa.mutationAttributesChange = 31),
          aa),
        el =
          ((Dc = {}),
          (Dc.page = 0),
          (Dc.event = 1),
          (Dc.mutation = 2),
          (Dc.publishers = 3),
          (Dc.activity = 4),
          Dc),
        di = (function () {
          function a(c, b) {
            var d,
              e,
              f = this;
            this.isSync = !1;
            this.Ab = [];
            this.Ig =
              ((d = {}),
              (d.ad = "mutationAdd"),
              (d.re = "mutationRemove"),
              (d.tc = "mutationTextChange"),
              (d.ac = "mutationAttributesChange"),
              (d.page = "pageData"),
              d);
            this.Dg =
              ((e = {}),
              (e.ad = "addedNodesMutation"),
              (e.re = "removedNodesMutation"),
              (e.tc = "textChangeMutation"),
              (e.ac = "attributesChangeMutation"),
              (e.touchmove = "touchEvent"),
              (e.touchstart = "touchEvent"),
              (e.touchend = "touchEvent"),
              (e.touchforcechange = "touchEvent"),
              (e.touchcancel = "touchEvent"),
              (e.resize = "resizeEvent"),
              (e.scroll = "scrollEvent"),
              (e.change = "changeEvent"),
              (e.mousemove = "mouseEvent"),
              (e.mousedown = "mouseEvent"),
              (e.mouseup = "mouseEvent"),
              (e.click = "mouseEvent"),
              (e.focus = "focusEvent"),
              (e.blur = "focusEvent"),
              (e.deviceRotation = "deviceRotationEvent"),
              (e.zoom = "zoomEvent"),
              (e.keystroke = "keystrokesEvent"),
              (e.selection = "selectionEvent"),
              (e.stylechange = "styleChangeEvent"),
              (e.fatalError = "fatalErrorEvent"),
              (e.pageData = "page"),
              e);
            this.ah = function (g) {
              var h = g.type;
              return g.event ||
                ("publishersHeader" !== h && "articleInfo" !== h)
                ? { type: el[h], event: dl[f.Ig[g.event] || g.event] }
                : { type: el.publishers, event: dl[h] };
            };
            this.jf = function (g) {
              var h = !Y(g.partNum),
                k = f.ah(g);
              k = {
                stamp: g.stamp,
                type: k.type,
                event: k.event,
                frameId: g.frameId,
                chunk: h ? g.data : void 0,
                partNum: g.partNum,
                end: g.end,
              };
              !h &&
                g.data &&
                (h = f.Dg[g.event] || g.event || g.type) &&
                (k[h] = g.data);
              return k;
            };
            this.l = c;
            this.type = b;
          }
          a.prototype.Da = function (c, b) {
            var d = this;
            void 0 === b && (b = !1);
            var e = Yb(c, this.jf),
              f = this.isSync || b ? Infinity : 10;
            e = $c(this.l, e, f);
            var g = [e];
            this.Ab.push(e);
            return e(
              Ag(function (h) {
                h = gi(d.l, eo, { $h: h });
                h = $c(d.l, h, f, bg);
                g.push(h);
                d.Ab.push(h);
                return h;
              })
            )(
              Ag(function (h) {
                h = fi(d.l, h.slice(-4));
                h = $c(d.l, h, f, bg);
                g.push(h);
                d.Ab.push(h);
                return h;
              })
            )(
              Kk(function (h) {
                h = h[h.length - 1];
                x(function (k) {
                  k = se(d.l)(k, d.Ab);
                  d.Ab.splice(k, 1);
                }, g);
                return h;
              })
            );
          };
          a.prototype.qb = function (c) {
            return gi(this.l, hi, this.jf(c))(cg(F));
          };
          a.prototype.hb = function (c) {
            return c[0];
          };
          a.prototype.ee = function (c, b) {
            for (
              var d = fi(this.l, c)(cg(F)),
                e = Math.ceil(d.length / b),
                f = [],
                g = 0;
              g < b;
              g += 1
            )
              f.push(d.slice(g * e, e * (g + 1)));
            return f;
          };
          a.isEnabled = function (c) {
            var b = De(c),
              d = !1;
            try {
              d =
                (d = 2 === new c.Blob(["\u00e4"]).size) &&
                2 === new c.Blob([new c.Uint8Array([1, 2])]).size;
            } catch (e) {}
            return (
              !b && d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice"))
            );
          };
          return a;
        })(),
        fl =
          "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
            " "
          ),
        nt =
          "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(
            " "
          ),
        ot = (function () {
          function a(c, b, d, e, f) {
            var g = this;
            this.rc = !1;
            this.meta = {};
            this.scroll = { x: 0, y: 0 };
            this.involvedTime = this.gf = 0;
            this.Ld = this.pf = "";
            this.da = [];
            this.ce = this.Ga = 0;
            this.ub = { h: 0, w: 0 };
            this.buffer = [];
            this.bg = nt;
            this.flush = function () {
              g.ce = U(g.l, g.flush, 2500);
              var h = g.pd();
              if (g.buffer.length || h) {
                var k = Ge(g.buffer);
                h && k.push(h);
                g.pf = g.Ld;
                g.ha.Da(k)(
                  Xa(z(g.l, "p.b.st"), function (l) {
                    l && g.Mb(l);
                  })
                );
              }
            };
            this.Mb = e;
            this.ha = d;
            this.Rb = I(this.Rb, this);
            this.pd = I(this.pd, this);
            this.flush = I(this.flush, this);
            this.l = c;
            this.oa = f;
            this.Hc = b;
            this.Gd = "pai" + b.id;
            this.Eb();
            this.Ie = ja(this.l);
            this.time = ka(this.l);
            this.Wf();
            this.sd = H(this.l);
            this.ue = null;
          }
          a.prototype.start = function () {
            this.ce = U(this.l, this.flush, 2500);
            if (!this.rc) {
              this.mi();
              var c = this.sd.C(this.Gd, []),
                b = !c.length;
              c.push(I(this.Gh, this));
              this.sd.Ea(this.Gd, c);
              b && this.Af();
              this.ue = ja(this.l).F(this.l, ["click"], I(this.ki, this));
              this.Rb({ type: "page", target: this.l });
            }
          };
          a.prototype.stop = function () {
            this.Ci();
            this.rc = !0;
            this.flush();
            la(this.l, this.ce);
          };
          a.prototype.df = function (c) {
            return gc("html", this.l, c) !== this.l.document.documentElement;
          };
          a.prototype.Af = function () {
            var c = this;
            z(this.l, "p.ic" + this.Hc.id, function () {
              if (!c.rc) {
                var b = c.sd.C(c.Gd),
                  d = c.Hc.Ng();
                x(function (e) {
                  var f = B(function (g) {
                    return C({}, g);
                  }, d);
                  V(e) && e(f);
                }, b);
                c.Ga = U(c.l, I(c.Af, c), 1e3, "p");
              }
            })();
          };
          a.prototype.Gh = function (c) {
            this.rc || (this.Di(c), this.Ei(), this.rg());
          };
          a.prototype.xg = function (c, b) {
            return (c.Zd || 0) <= (b.Zd || 0) ? b : c;
          };
          a.prototype.ki = function (c) {
            if (this.da.length) {
              c = Li(c);
              var b = R(this.l).hostname,
                d;
              if ((d = c)) d = qe(c.hostname) === qe(b);
              d &&
                ((c = P(this.xg, this.da[0], this.da).id),
                (b = wc(this.l)),
                Rc(this.l, this.oa.split(":")[0]).D("pai", c + "-" + b));
            }
          };
          a.prototype.Rb = function (c) {
            var b = this;
            z(this.l, "p.ec." + this.Hc.id, function () {
              var d, e;
              try {
                var f = c.type;
                var g = c.target;
              } catch (p) {
                return;
              }
              var h = "page" === f;
              if ("scroll" === f || h) {
                var k = [
                  b.l,
                  b.l.document,
                  b.l.document.documentElement,
                  Ac(b.l),
                ];
                G(g, k) && b.Eb();
              }
              ("resize" === f || h) && b.Wf();
              f = b.time(da);
              var l = Math.min(f - b.gf, 5e3);
              b.involvedTime += Math.round(l);
              b.gf = f;
              if (b.meta && b.scroll && b.ub) {
                var m = b.ub.h * b.ub.w;
                b.da = B(function (p) {
                  var q = C({}, p),
                    r = b.meta[q.id],
                    t = dd(p.zb);
                  if (!r || b.df(q.element) || !t) return q;
                  p = b.l.Math;
                  r = p.max((b.scroll.y + b.ub.h - r.y) / r.height, 0);
                  var y = t.height * t.width,
                    D = b.ub,
                    N = t.top,
                    M = t.bottom,
                    sa = t.left,
                    ta = D.w;
                  D = D.h;
                  var Qa = b.l.Math;
                  t =
                    Qa.min(Qa.max(t.right, 0), ta) - Qa.min(Qa.max(sa, 0), ta);
                  t *= Qa.min(Qa.max(M, 0), D) - Qa.min(Qa.max(N, 0), D);
                  q.Zd = t / m;
                  q.visibility = t / y;
                  if (0.9 <= q.visibility || 0.1 <= q.Zd) q.involvedTime += l;
                  q.maxScrolled = p.round(1e4 * r) / 1e4;
                  return q;
                }, b.da);
                nb(
                  b.l,
                  ((d = {}),
                  (d.name = "publishers"),
                  (d.counterKey = b.oa),
                  (d.data =
                    ((e = {}),
                    (e.involvedTime = b.involvedTime),
                    (e.contentItems = B(function (p) {
                      var q;
                      return C(((q = {}), (q.contentElement = p.zb), q), p);
                    }, b.da)),
                    e)),
                  d)
                );
              }
            })();
          };
          a.prototype.Di = function (c) {
            var b = B(function (d) {
              return d.id;
            }, this.da);
            this.da = this.da.concat(
              ha(function (d) {
                return !G(d.id, b);
              }, c)
            );
          };
          a.prototype.Wf = function () {
            var c = Wf(this.l) || wd(this.l);
            this.ub = { w: c[0], h: c[1] };
          };
          a.prototype.Ei = function () {
            var c = this;
            z(this.l, "p.um." + this.Hc.id, function () {
              var b = [];
              c.Eb();
              c.meta = tb(
                function (d, e) {
                  var f;
                  if (c.df(e.element)) b.push(e), delete d[e.id];
                  else {
                    var g =
                      ((f = {}),
                      (f.id = e.id),
                      (f.involvedTime = Math.max(e.involvedTime, 0)),
                      (f.maxScrolled = e.maxScrolled || 0),
                      (f.chars = e.update ? e.update("chars") || 0 : 0),
                      f);
                    e.zb &&
                      (f = dd(e.zb)) &&
                      ((g.x = Math.max(Math.round(f.left) + c.scroll.x, 0)),
                      (g.y = Math.max(Math.round(f.top) + c.scroll.y, 0)),
                      (g.width = Math.round(f.width)),
                      (g.height = Math.round(f.height)));
                    d[e.id] = g;
                  }
                  return d;
                },
                {},
                c.da
              );
              x(function (d) {
                d = se(c.l)(d, c.da);
                c.da.splice(d, 1);
              }, b);
            })();
          };
          a.prototype.pd = function () {
            var c,
              b,
              d = B(v(this.meta, n), ea(this.meta));
            return d.length && ((this.Ld = Hb(this.l, d)), this.pf !== this.Ld)
              ? ((c = {}),
                (c.type = "publishersHeader"),
                (c.data =
                  ((b = {}),
                  (b.articleMeta = d || []),
                  (b.involvedTime = this.involvedTime),
                  b)),
                c)
              : null;
          };
          a.prototype.rg = function () {
            var c = this;
            if (this.da.length) {
              var b = B(
                function (d) {
                  var e,
                    f = P(
                      function (g, h) {
                        d[h] && (g[h] = d[h]);
                        return g;
                      },
                      {},
                      c.bg
                    );
                  d.Lf = !0;
                  return (
                    (e = {}),
                    (e.type = "articleInfo"),
                    (e.stamp = f.stamp),
                    (e.data = f),
                    e
                  );
                },
                ha(function (d) {
                  return !d.Lf;
                }, this.da)
              );
              b.length &&
                ((this.buffer = this.buffer.concat(b)),
                Db(this.l, this.oa, ["pdf", b]));
            }
          };
          a.prototype.mi = function () {
            this.Ie.F(this.l, fl, this.Rb);
          };
          a.prototype.Ci = function () {
            this.ue && this.ue();
            this.Ie.tb(this.l, fl, this.Rb);
          };
          a.prototype.Eb = function () {
            this.scroll = {
              x:
                this.l.pageXOffset ||
                n(this.l, "document.documentElement.scrollLeft") ||
                0,
              y:
                this.l.pageYOffset ||
                n(this.l, "document.documentElement.scrollLeft") ||
                0,
            };
          };
          return a;
        })(),
        Id,
        Rg = ((Id = {}), (Id[1] = 500), (Id[2] = 500), (Id[3] = 0), Id),
        pt = ["topics", "rubric", "authors"],
        Sg = (function () {
          function a(c, b) {
            var d,
              e = this;
            this.id = "a";
            this.Ad = !1;
            this.Bb = {};
            this.pb = {
              "schema.org":
                "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(
                  " "
                ),
              lf: ["article"],
            };
            this.se = ((d = {}), (d.Answer = 3), (d.Review = 2), d);
            this.Le = u(
              function (f, g, h) {
                var k;
                Db(
                  e.l,
                  e.oa,
                  "pfi",
                  ((k = {}), (k.field = f), (k.itemField = g), (k.value = h), k)
                );
              },
              function (f, g, h) {
                return "" + f + g + h;
              }
            );
            this.Gi = function (f) {
              pt.forEach(function (g) {
                f[g] &&
                  (f[g] = f[g].reduce(function (h, k) {
                    var l = k.name,
                      m = k.position;
                    if (!l) return e.Le(g, "name", l), h;
                    if ("string" === typeof m) {
                      l = Zd(m);
                      if (null === l || e.l.isNaN(l))
                        return e.Le(g, "position", m), h;
                      k.position = l;
                    }
                    h.push(k);
                    return h;
                  }, []));
              });
              return f;
            };
            this.yg = u(function (f, g) {
              var h;
              Db(
                e.l,
                e.oa,
                ["pcs", g],
                ((h = {}), (h.chars = g.chars), (h.limit = Rg[g.type]), h)
              );
            });
            this.l = c;
            this.root = Zb(c);
            this.oa = b;
          }
          a.prototype.Ja = function (c) {
            return c.element;
          };
          a.prototype.Te = function (c, b) {
            var d = this,
              e;
            z(this.l, "P.s." + b, function () {
              e = d.Bb[b].call(d, c);
            })();
            return e;
          };
          a.prototype.Zh = function (c) {
            var b = C({}, c);
            this.Ad &&
              !b.id &&
              G(c.type, [3, 2]) &&
              ((c = L(", ", B(T("name"), b.authors || []))),
              (b.pageTitle = c + ": " + b.pageTitle));
            b.pageTitle || (b.pageTitle = this.kh(b.zb));
            b.pageUrlCanonical ||
              ((c = b.id),
              (b.pageUrlCanonical = (
                "string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)
              )
                ? b.id
                : this.ih()));
            b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
            return b;
          };
          a.prototype.Aa = function (c) {
            var b = this,
              d = {},
              e = this.Ja(c);
            if (!e) return null;
            d.type = c.type;
            x(function (g) {
              d[g] = b.Te(c, g);
            }, ea(this.Bb));
            var f = ka(this.l);
            d.stamp = f(Dj);
            d.element = c.element;
            d.zb = e;
            d = this.Gi(this.Zh(d));
            d.id = d.id ? rc(d.id) : 1;
            d.update = function (g) {
              return b.Ja(c) ? b.Te(c, g) : void 0;
            };
            return d;
          };
          a.prototype.kh = function (c) {
            for (var b = 1; 5 >= b; b += 1) {
              var d = ab(mc("h" + b, c));
              if (d) return d;
            }
          };
          a.prototype.ih = function () {
            var c = mc('[rel="canonical"]', this.root);
            if (c) return c.href;
          };
          a.prototype.Ye = function () {
            return 1;
          };
          a.prototype.hc = function () {
            return [];
          };
          a.prototype.Ng = function () {
            var c = this,
              b = this.hc(),
              d = 1;
            return tb(
              function (e, f) {
                var g = c.Aa({ element: f, type: c.Ye(f) }) || [];
                O(g) || (g = [g]);
                g = tb(
                  function (h, k) {
                    var l = h.values,
                      m = h.$e;
                    k && k.chars > Rg[k.type] && !G(k.id, m)
                      ? (l.push(k), m.push(k.id))
                      : k && k.chars <= Rg[k.type] && c.yg(k.id, k);
                    return { values: l, $e: m };
                  },
                  { values: [], $e: B(T("id"), e) },
                  g
                ).values;
                return e.concat(
                  B(function (h) {
                    var k;
                    h = C(
                      ((k = { index: d, Lf: !1 }), (k.involvedTime = 0), k),
                      h
                    );
                    d += 1;
                    return h;
                  }, g)
                );
              },
              [],
              b
            );
          };
          return a;
        })(),
        gl = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "j";
            d.Ad = !0;
            d.Fe = L(",", [
              'script[type="application/ld+json"]',
              'script[type="application/json+ld"]',
              'script[type="ld+json"]',
              'script[type="json+ld"]',
            ]);
            d.Bb =
              ((b = {}),
              (b.id = function (e) {
                var f = e.data["@id"];
                e = e.data.mainEntity || e.data.mainEntityOfPage;
                !f && ia(e) && (f = e["@id"]);
                return f;
              }),
              (b.chars = function (e) {
                var f = e.data;
                return fa(f.text) ? f.text.length : Fb(this.Ja(e)).length;
              }),
              (b.authors = function (e) {
                e = e.data;
                var f = [];
                f = f.concat(this.fc(e, "author"));
                f = f.concat(this.fc(e.mainEntity, "author"));
                return f.concat(this.fc(e.mainEntityOfPage, "author"));
              }),
              (b.pageTitle = function (e) {
                var f = e.data,
                  g = f.headline || "";
                f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                "" === g &&
                  (f.name
                    ? (g = f.name)
                    : f.itemReviewed && (g = f.itemReviewed));
                3 === e.type && ia(f.parentItem) && (g = f.parentItem.text);
                return g;
              }),
              (b.updateDate = function (e) {
                return e.data.dateModified || "";
              }),
              (b.publicationDate = function (e) {
                return e.data.datePublished || "";
              }),
              (b.pageUrlCanonical = function (e) {
                return e.data.url;
              }),
              (b.topics = function (e) {
                return this.fc(e.data, "about", ["name", "alternateName"]);
              }),
              (b.rubric = function (e) {
                var f = this,
                  g = this.Ja(e);
                e = La(
                  B(function (h) {
                    h = Gb(f.l, Fb(h));
                    if (ia(h) || O(h)) {
                      var k = f.Ue(h);
                      if (k)
                        return P(
                          function (l, m) {
                            return l
                              ? l
                              : ia(m) && "BreadcrumbList" === m["@type"]
                              ? m
                              : l;
                          },
                          null,
                          k
                        );
                      if ("BreadcrumbList" === h["@type"]) return h;
                    }
                    return null;
                  }, [e.element].concat(
                    hb(
                      this.Fe,
                      document.body === g ? document.documentElement : g
                    )
                  ))
                );
                return e.length && ((e = e[0].itemListElement), O(e))
                  ? La(
                      B(function (h) {
                        return ia(h) &&
                          h.item &&
                          ia(h.item) &&
                          !f.l.isNaN(h.position)
                          ? {
                              name: h.item.name || h.name,
                              position: h.position,
                            }
                          : null;
                      }, e)
                    )
                  : [];
              }),
              b);
            return d;
          }
          Ia(c, a);
          c.prototype.fc = function (b, d, e) {
            void 0 === e && (e = ["name"]);
            if (!b || !b[d]) return [];
            b = O(b[d]) ? b[d] : [b[d]];
            b = La(
              B(function (f) {
                return f
                  ? "string" === typeof f
                    ? f
                    : P(
                        function (g, h) {
                          return g || "" + f[h];
                        },
                        "",
                        e
                      )
                  : null;
              }, b)
            );
            return B(function (f) {
              var g;
              return (g = {}), (g.name = f), g;
            }, b);
          };
          c.prototype.Ja = function (b) {
            var d = b.element,
              e = b.data || {};
            b = e["@id"];
            var f = e.url;
            e = null;
            f && fa(f) && (e = this.Ke(f));
            !e && b && fa(b) && (e = this.Ke(b));
            e ||
              ((e = b = d.parentNode),
              !gc("head", this.l, d) && b && 0 !== Fb(b).length) ||
              (e = this.l.document.body);
            return e;
          };
          c.prototype.Ke = function (b) {
            try {
              var d = Ic(this.l, b).hash;
              if (d) {
                var e = mc(d, this.l.document.body);
                if (e) return e;
              }
            } catch (f) {}
            return null;
          };
          c.prototype.Rd = function (b) {
            return this.se[b["@type"]] || 1;
          };
          c.prototype.Aa = function (b) {
            var d = this,
              e = b.element,
              f = b.data;
            if (
              !f &&
              ((f = Gb(this.l, Fb(e))),
              !f || (!/schema\.org/.test(f["@context"]) && !O(f)))
            )
              return null;
            var g = this.Ue(f);
            if (g)
              return B(function (k) {
                return ia(k) && G(k["@type"], d.pb["schema.org"])
                  ? a.prototype.Aa.call(d, {
                      element: e,
                      data: k,
                      type: d.Rd(k),
                    })
                  : null;
              }, g);
            b.data = f;
            if ("QAPage" === b.data["@type"]) {
              var h = b.data.mainEntity || b.data.mainEntityOfPage;
              if (!h) return null;
            }
            "Question" === b.data["@type"] && (h = b.data);
            return h
              ? ((b = vd(v(h, n), ["acceptedAnswer", "suggestedAnswer"])),
                B(function (k) {
                  var l;
                  if (!ia(k) || !G(k["@type"], d.pb["schema.org"])) return null;
                  k = {
                    element: e,
                    type: d.Rd(k),
                    data: C(((l = {}), (l.parentItem = h), l), k),
                  };
                  return a.prototype.Aa.call(d, k);
                }, b))
              : G(b.data["@type"], this.pb["schema.org"])
              ? a.prototype.Aa.call(this, C(b, { type: this.Rd(b.data) }))
              : null;
          };
          c.prototype.hc = function () {
            return hb(this.Fe, this.root);
          };
          c.prototype.Ue = function (b) {
            if (O(b)) return b;
            if (b && O(b["@graph"])) return b["@graph"];
          };
          return c;
        })(Sg),
        Tg = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "s";
            d.Ad = !0;
            d.Bi = db(
              "exec",
              new RegExp("schema.org\\/(" + L("|", ea(d.se)) + ")$")
            );
            d.Bb =
              ((b = {}),
              (b.id = function (e) {
                e = e.element;
                var f = fb(this.l, e, "identifier");
                return f
                  ? ab(f)
                  : (f = fb(this.l, e, "mainEntityOfPage")) &&
                    f.getAttribute("itemid")
                  ? f.getAttribute("itemid")
                  : null;
              }),
              (b.chars = function (e) {
                var f = 0;
                e = e.element;
                for (
                  var g = [
                      "articleBody",
                      "reviewBody",
                      "recipeInstructions",
                      "description",
                      "text",
                    ],
                    h = 0;
                  h < g.length;
                  h += 1
                ) {
                  var k = fb(this.l, e, g[h]);
                  if (k) {
                    f = ab(k).length;
                    break;
                  }
                }
                e = Fb(e);
                0 === f && e && (f += e.length);
                return f;
              }),
              (b.topics = function (e) {
                var f = this,
                  g = Cd(this.l, e.element, "about");
                return B(function (h) {
                  var k = { name: ab(h) };
                  if ((g = fb(f.l, h, "name"))) k.name = ab(g);
                  return k;
                }, g);
              }),
              (b.rubric = function (e) {
                var f = this;
                (e = mc(
                  '[itemtype$="schema.org/BreadcrumbList"]',
                  e.element
                )) ||
                  (e = mc(
                    '[itemtype$="schema.org/BreadcrumbList"]',
                    this.root
                  ));
                return e
                  ? B(function (g) {
                      return {
                        name: ab(fb(f.l, g, "name")),
                        position: ab(fb(f.l, g, "position")),
                      };
                    }, Cd(this.l, e, "itemListElement"))
                  : [];
              }),
              (b.updateDate = function (e) {
                return (e = fb(this.l, e.element, "dateModified")) ? bk(e) : "";
              }),
              (b.publicationDate = function (e) {
                return (e = fb(this.l, e.element, "datePublished"))
                  ? bk(e)
                  : "";
              }),
              (b.pageUrlCanonical = function (e) {
                e = Cd(this.l, e.element, "url");
                if (e.length) {
                  var f = e[0];
                  return f.href ? f.href : ab(e);
                }
                return null;
              }),
              (b.pageTitle = function (e) {
                var f = "",
                  g = e.element,
                  h = fb(this.l, g, "headline");
                h && (f += ab(h));
                (h = fb(this.l, g, "alternativeHeadline")) &&
                  (f += " " + ab(h));
                "" === f &&
                  ((h = fb(this.l, g, "name")) ||
                    (h = fb(this.l, g, "itemReviewed")),
                  h && (f += ab(h)));
                3 === e.type &&
                  (e = gc('[itemtype$="schema.org/Question"]', this.l, g)) &&
                  (e = fb(this.l, e, "text")) &&
                  (f += ab(e));
                return f;
              }),
              (b.authors = function (e) {
                var f = this;
                e = Cd(this.l, e.element, "author");
                return B(function (g) {
                  var h,
                    k = ((h = {}), (h.name = ""), h);
                  /.+schema.org\/(Person|Organization)/.test(
                    g.getAttribute("itemtype") || ""
                  ) &&
                    (h = fb(f.l, g, "name")) &&
                    (k.name = ab(h));
                  k.name ||
                    (k.name =
                      g.getAttribute("content") ||
                      Fb(g) ||
                      g.getAttribute("href"));
                  return k;
                }, e);
              }),
              b);
            return d;
          }
          Ia(c, a);
          c.prototype.Ye = function (b) {
            b = b.getAttribute("itemtype") || "";
            return (b = this.Bi(b)) ? this.se[b[1]] : 1;
          };
          c.prototype.Aa = function (b) {
            return b.element && Fb(b.element).length
              ? a.prototype.Aa.call(this, b)
              : null;
          };
          c.prototype.hc = function () {
            var b = L(
              ",",
              B(function (d) {
                return '[itemtype$="schema.org/' + d + '"]';
              }, this.pb["schema.org"])
            );
            return hb(b, this.root);
          };
          return c;
        })(Sg),
        hl = (function (a) {
          function c(b, d) {
            var e,
              f = a.call(this, b, d) || this;
            f.id = "o";
            f.Bb =
              ((e = {}),
              (e.chars = function (g) {
                g = this.Ja(g);
                return Fb(g).length;
              }),
              (e.authors = function (g) {
                return this.ld(g.data.author);
              }),
              (e.pageTitle = function (g) {
                return this.lc(g.data.title) || "";
              }),
              (e.updateDate = function (g) {
                return this.lc(g.data.modified_time);
              }),
              (e.publicationDate = function (g) {
                return this.lc(g.data.published_time);
              }),
              (e.pageUrlCanonical = function (g) {
                return this.lc(g.data.url);
              }),
              (e.rubric = function (g) {
                return this.ld(g.data.section);
              }),
              (e.topics = function (g) {
                return this.ld(g.data.tag);
              }),
              e);
            f.Hg = new RegExp("^(og:)?((" + L("|", f.pb.lf) + "):)?");
            return f;
          }
          Ia(c, a);
          c.prototype.ld = function (b) {
            var d;
            return b
              ? O(b)
                ? B(function (e) {
                    var f;
                    return (f = {}), (f.name = e ? "" + e : null), f;
                  }, b)
                : [((d = {}), (d.name = b ? "" + b : null), d)]
              : [];
          };
          c.prototype.lc = function (b) {
            return O(b) ? (b.length ? "" + b[0] : null) : b ? "" + b : null;
          };
          c.prototype.hc = function () {
            var b = hb('meta[property="og:type"]', this.l.document.body);
            return [this.l.document.head].concat(b);
          };
          c.prototype.$g = function (b) {
            var d = this,
              e = b.element,
              f = {},
              g = this.Ja(b);
            e = hb("meta[property]", e === this.l.document.head ? e : g);
            if (e.length)
              x(function (h) {
                try {
                  if (
                    h.parentNode === g ||
                    h.parentNode === d.l.document.head
                  ) {
                    var k = h.getAttribute("property").replace(d.Hg, ""),
                      l = ab(h);
                    f[k]
                      ? O(f[k])
                        ? f[k].push(l)
                        : (f[k] = [f[k], l])
                      : (f[k] = l);
                  }
                } catch (m) {
                  Hc(d.l, "og.ed", m);
                }
              }, e);
            else return null;
            return G(f.type, this.pb.lf) ? C(b, { data: f }) : null;
          };
          c.prototype.Ja = function (b) {
            b = b.element;
            var d = this.l.document;
            return b === d.head ? d.body : b.parentNode;
          };
          c.prototype.Aa = function (b) {
            return (b = this.$g(b)) ? a.prototype.Aa.call(this, b) : null;
          };
          return c;
        })(Sg),
        Jd = {};
      gl && (Jd.json_ld = gl);
      Tg && ((Jd.schema = Tg), (Jd.microdata = Tg));
      hl && (Jd.opengraph = hl);
      var qt = A("p.p", function (a, c) {
          function b(m) {
            var p = C({}, l);
            p.Z.ba = m;
            return f(p, c)["catch"](z(a, "s.ww.p"));
          }
          var d,
            e = ci(a, "9", "8");
          if (!Oa("querySelectorAll", a.document.querySelectorAll) || !e)
            return K.resolve();
          var f = ra(a, "p", c),
            g = Ea(),
            h = Rc(a, c.id),
            k = h.C("pai");
          k && (h.bc("pai"), g.D("pai", k));
          var l = { J: ((d = {}), (d["wv-type"] = e.type), d), K: g, Z: {} };
          return na(
            c,
            z(a, "ps.s", function (m) {
              var p;
              if ((m = n(m, "settings.publisher.schema"))) {
                Pj(c) && (m = "microdata");
                var q = Jd[m];
                if (q && e) {
                  var r = J(c);
                  q = new q(a, r);
                  q = new ot(a, q, e, b, r);
                  q.start();
                  Db(a, r, "ps", ((p = {}), (p.schema = m), p));
                  return I(q.stop, q);
                }
              }
            })
          );
        }),
        rt = (function () {
          function a(c, b) {
            this.type = "0";
            this.l = c;
            this.Yg = b;
          }
          a.prototype.Da = function (c) {
            return nf(vd(I(this.qb, this), c));
          };
          a.prototype.qb = function (c, b) {
            var d = this,
              e = [],
              f = this.Yg(this.l, b && b.type, c.type);
            f &&
              (e = vd(function (g) {
                return g({ l: d.l, ja: c }) || [];
              }, f));
            return e;
          };
          a.prototype.hb = function (c) {
            return c.length;
          };
          a.prototype.ee = function (c) {
            return [c];
          };
          a.prototype.isEnabled = function () {
            return !0;
          };
          return a;
        })(),
        il = (function () {
          function a(c, b, d) {
            this.Ge = 0;
            this.Sd = 1;
            this.Pc = 5e3;
            this.l = c;
            this.ha = b;
            this.Mb = d;
          }
          a.prototype.Kc = function () {
            this.Ge = U(
              this.l,
              w(I(this.flush, this), I(this.Kc, this)),
              this.Pc,
              "b.f"
            );
          };
          a.prototype.send = function (c, b) {
            var d = this.Mb(c, b || [], this.Sd);
            this.Sd += 1;
            return d;
          };
          a.prototype.push = function () {};
          a.prototype.flush = function () {};
          return a;
        })(),
        tn = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.buffer = [];
            b.cg = 7500;
            b.Pc = 3e4;
            b.Kc();
            return b;
          }
          Ia(c, a);
          c.prototype.push = function (b, d) {
            var e = this.ha.qb(b, d);
            xa(this.buffer, e);
            this.ha.hb(this.buffer) > this.cg && this.flush();
          };
          c.prototype.flush = function () {
            var b = this.buffer;
            b.length && (this.send(b), (this.buffer = []));
          };
          return c;
        })(il),
        In = /opera mini/i,
        Xh = ["phone", "email"],
        jl =
          "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(
            " "
          ),
        Fn = /^[\w\u0410-\u042f\u0430-\u044f]$/,
        Gn = [65, 90],
        Hn = [97, 122],
        Dn =
          "color radio checkbox date datetime-local email month number password range search tel text time url week".split(
            " "
          ),
        Bn = new RegExp("(" + L("|", jl) + ")", "i"),
        An = new RegExp("(" + L("|", Xh) + ")", "i"),
        ck = ["password", "passwd", "pswd"],
        Cn = new RegExp(
          "(" +
            L(
              "|",
              jl.concat(
                "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                  " "
                )
              )
            ) +
            ")",
          "i"
        ),
        Ta = "metrikaId_" + Math.random(),
        tc = { counter: 0 },
        qr = u(function () {
          var a;
          return (
            (a = {}),
            (a.A = 1),
            (a.ABBR = 2),
            (a.ACRONYM = 3),
            (a.ADDRESS = 4),
            (a.APPLET = 5),
            (a.AREA = 6),
            (a.B = 7),
            (a.BASE = 8),
            (a.BASEFONT = 9),
            (a.BDO = 10),
            (a.BIG = 11),
            (a.BLOCKQUOTE = 12),
            (a.BODY = 13),
            (a.BR = 14),
            (a.BUTTON = 15),
            (a.CAPTION = 16),
            (a.CENTER = 17),
            (a.CITE = 18),
            (a.CODE = 19),
            (a.COL = 20),
            (a.COLGROUP = 21),
            (a.DD = 22),
            (a.DEL = 23),
            (a.DFN = 24),
            (a.DIR = 25),
            (a.DIV = 26),
            (a.DL = 27),
            (a.DT = 28),
            (a.EM = 29),
            (a.FIELDSET = 30),
            (a.FONT = 31),
            (a.FORM = 32),
            (a.FRAME = 33),
            (a.FRAMESET = 34),
            (a.H1 = 35),
            (a.H2 = 36),
            (a.H3 = 37),
            (a.H4 = 38),
            (a.H5 = 39),
            (a.H6 = 40),
            (a.HEAD = 41),
            (a.HR = 42),
            (a.HTML = 43),
            (a.I = 44),
            (a.IFRAME = 45),
            (a.IMG = 46),
            (a.INPUT = 47),
            (a.INS = 48),
            (a.ISINDEX = 49),
            (a.KBD = 50),
            (a.LABEL = 51),
            (a.LEGEND = 52),
            (a.LI = 53),
            (a.LINK = 54),
            (a.MAP = 55),
            (a.MENU = 56),
            (a.META = 57),
            (a.NOFRAMES = 58),
            (a.NOSCRIPT = 59),
            (a.OBJECT = 60),
            (a.OL = 61),
            (a.OPTGROUP = 62),
            (a.OPTION = 63),
            (a.P = 64),
            (a.PARAM = 65),
            (a.PRE = 66),
            (a.Q = 67),
            (a.S = 68),
            (a.SAMP = 69),
            (a.SCRIPT = 70),
            (a.SELECT = 71),
            (a.SMALL = 72),
            (a.SPAN = 73),
            (a.STRIKE = 74),
            (a.STRONG = 75),
            (a.STYLE = 76),
            (a.SUB = 77),
            (a.SUP = 78),
            (a.TABLE = 79),
            (a.TBODY = 80),
            (a.TD = 81),
            (a.TEXTAREA = 82),
            (a.TFOOT = 83),
            (a.TH = 84),
            (a.THEAD = 85),
            (a.TITLE = 86),
            (a.TR = 87),
            (a.TT = 88),
            (a.U = 89),
            (a.UL = 90),
            (a.VAR = 91),
            (a.NOINDEX = 100),
            a
          );
        }),
        nr = [17, 18, 38, 32, 39, 15, 11, 7, 1],
        st = (function () {
          var a =
            "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(
              " "
            );
          return {
            Vi: new RegExp("(" + L("|", a) + ")", "i"),
            fj: new RegExp(
              "(" +
                L(
                  "|",
                  a.concat(
                    "\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                      ";"
                    )
                  )
                ) +
                ")",
              "i"
            ),
            Ti: /ym-record-keys/i,
            Nh: "\u2022",
            cj: 88,
          };
        })(),
        hk = Nc(v(st.Nh, S)),
        fd = !0,
        sg = "",
        tg = !1,
        ug = !0,
        vg = !1,
        yn = ua(function (a, c) {
          var b = E([a, "efv." + c.event], z);
          c.N = B(w(S, b), c.N);
          return c;
        }),
        kl = u(function (a) {
          var c = [],
            b = [],
            d = [];
          a.document.attachEvent &&
            !a.opera &&
            (c.push(tf), b.push(tr), b.push(ur));
          a.document.addEventListener ? c.push(fk) : (b.push(ek), d.push(fk));
          return xn(
            a,
            ("onpagehide" in a
              ? []
              : [
                  { target: a, type: "window", event: "beforeunload", N: [F] },
                  { target: a, type: "window", event: "unload", N: [F] },
                ]
            )
              .concat([
                { event: "click", N: [Ie] },
                { event: "dblclick", N: [Ie] },
                { event: "mousedown", N: [Ie] },
                { event: "mouseup", N: [wr] },
                { event: "keydown", N: [xr] },
                { event: "keypress", N: [yr] },
                { event: "copy", N: [jk] },
                { event: "blur", N: c },
                { event: "focusin", N: b },
                { event: "focusout", N: d },
              ])
              .concat(
                !a.document.attachEvent || a.opera
                  ? [
                      { target: a, type: "window", event: "focus", N: [Vh] },
                      { target: a, type: "window", event: "blur", N: [tf] },
                    ]
                  : []
              )
              .concat(
                a.document.addEventListener
                  ? [
                      { event: "focus", N: [ek] },
                      { event: "change", N: [gk] },
                      { event: "submit", N: [lk] },
                    ]
                  : [
                      { type: "formInput", event: "change", N: [gk] },
                      { type: "form", event: "submit", N: [lk] },
                    ]
              )
          );
        }),
        vn = u(function (a) {
          var c = [];
          Ac(a) &&
            c.push({
              target: a,
              type: "document",
              event: "mouseleave",
              N: [zr],
            });
          "onpagehide" in a &&
            c.push({
              target: a,
              type: "window",
              event: "pagehide",
              N: [
                function (b) {
                  b = b.flush;
                  b();
                },
              ],
            });
          return c;
        }),
        tt = ["submit", "beforeunload", "unload"],
        ut = u(function (a, c) {
          var b = c(a);
          return P(
            function (d, e) {
              d[e.type + ":" + e.event] = e.N;
              return d;
            },
            {},
            b
          );
        }),
        vt = v(kl, function (a, c, b, d) {
          return ut(c, a)[b + ":" + d] || [];
        }),
        wn = /^\s*function submit\(\)/,
        wt = A("fw.p", function (a, c) {
          var b;
          if (!(b = c.Eg || !c.vb)) {
            var d = H(a),
              e = !1;
            b = d.C("hitParam", {});
            var f = J(c);
            b[f] && ((d = d.C("counters", {})), (e = Od(c.aa) && !d[f]));
            b[f] = 1;
            b = e;
          }
          if (b) return K.resolve(F);
          b = new rt(a, vt);
          return sn(a, c, b, kl, tt);
        }),
        Ug,
        ll =
          ((Ug = (function (a) {
            function c(b, d, e, f) {
              void 0 === f && (f = 0);
              d = a.call(this, b, d, e) || this;
              d.oe = 0;
              d.yb = 0;
              d.ne = 0;
              d.buffer = [];
              d.Pc = 2e3;
              d.X = cd(b);
              d.Kc();
              d.ne = f;
              return d;
            }
            Ia(c, a);
            c.prototype.Re = function (b) {
              return La(this.X.$("ag", b));
            };
            c.prototype.Qe = function (b, d) {
              var e = this;
              b(
                Xa(z(this.l, "wv2.b.st"), function (f) {
                  e.send(f, d);
                })
              );
            };
            c.prototype.li = function (b, d) {
              var e = this;
              la(this.l, this.Ge);
              var f = Math.ceil(this.ha.hb(d) / 63e4),
                g = this.ha.ee(d, f);
              x(function (h, k) {
                var l,
                  m = C(
                    {},
                    b,
                    ((l = {}),
                    (l.data = h),
                    (l.partNum = k + 1),
                    (l.end = k + 1 === f),
                    (l.partsTotal = g.length),
                    l)
                  );
                l = e.ha.Da([m], !1);
                e.Qe(l, [m]);
              }, g);
              this.Kc();
            };
            c.prototype.send = function (b, d) {
              var e = this;
              this.X.$("se", d);
              return a.prototype.send.call(this, b, d).then(S, function () {
                e.X.$("see", d);
              });
            };
            c.Se = function (b, d, e, f, g) {
              c.Sc["" + b + d] ||
                (this.Sc[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
              return this.Sc[d];
            };
            c.prototype.Fh = function () {
              return this.ne && this.oe >= this.ne;
            };
            c.prototype.push = function (b) {
              var d = this;
              if (!this.Fh()) {
                this.X.$("p", b);
                var e = this.ha.qb(b),
                  f = this.ha.hb(e);
                7e5 < f
                  ? this.li(b, e)
                  : ((e = this.Re(this.buffer.concat([b]))),
                    (e = tb(
                      function (g, h) {
                        return g + d.ha.hb(d.ha.qb(h));
                      },
                      0,
                      e
                    )),
                    this.yb + e + f >= 7e5 * 0.7 && this.flush(),
                    this.buffer.push(b),
                    (this.yb += f));
              }
            };
            c.prototype.F = function (b, d) {
              this.X.F([b], d);
            };
            c.prototype.ea = function (b, d) {
              this.X.ea([b], d);
            };
            c.prototype.flush = function (b) {
              var d = this.buffer.concat(this.Re(this.buffer));
              d.length &&
                ((this.buffer = []),
                (this.oe += this.yb),
                (this.yb = 0),
                (b = this.ha.Da(d, b)),
                this.Qe(b, d));
            };
            return c;
          })(il)),
          (Ug.Sc = {}),
          Ug),
        bb = (function () {
          function a(c, b, d) {
            this.Ih = "wv2.c";
            this.mb = [];
            this.ga = [];
            this.l = c;
            this.L = rf(c, this, d, this.Ih);
            this.G = b;
            this.Pa = this.G.dh();
            this.start = this.L.H(this.start, "st");
            this.stop = this.L.H(this.stop, "sp");
          }
          a.prototype.start = function () {
            var c = this;
            this.mb = B(function (b) {
              var d = b[0],
                e = b[2];
              b = I(c.L.H(b[1], d[0]), c);
              return c.Pa.F(e || c.l, d, b);
            }, this.ga);
          };
          a.prototype.stop = function () {
            x(qa, this.mb);
          };
          a.prototype.V = function (c) {
            return this.G.qa().V(c);
          };
          return a;
        })(),
        qn = ["checkbox", "radio"],
        rn = /pwd|value|password/i,
        Vg = T("location.href"),
        xt = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.na = { elements: [], attributes: [] };
            d.index = 0;
            d.Nd = d.L.H(d.Nd, "o");
            d.bd = d.L.H(d.bd, "io");
            d.Qc = d.L.H(d.Qc, "ao");
            d.Vd = d.L.H(d.Vd, "a");
            d.Td = d.L.H(d.Td, "at");
            d.Wd = d.L.H(d.Wd, "r");
            d.Ud = d.L.H(d.Ud, "c");
            d.xa = new b.MutationObserver(d.Nd);
            return d;
          }
          Ia(c, a);
          c.prototype.start = function () {
            this.xa.observe(this.l.document.documentElement, {
              attributes: !0,
              characterData: !0,
              childList: !0,
              subtree: !0,
              attributeOldValue: !0,
              characterDataOldValue: !0,
            });
          };
          c.prototype.stop = function () {
            this.xa.disconnect();
          };
          c.prototype.Qc = function (b) {
            var d = b.target,
              e = b.attributeName,
              f = b.oldValue;
            b = d.getAttribute(e);
            if (b === f) return !1;
            f = Kb(this.l)(d, this.na.elements);
            -1 === f &&
              ((f = this.na.elements.push(d) - 1),
              (this.na.attributes[f] = {}));
            this.na.attributes[f] || (this.na.attributes[f] = {});
            this.na.attributes[f][e] = de(this.l, d, e, b, this.G.Db()).value;
            return !0;
          };
          c.prototype.bd = function (b) {
            function d(k) {
              var l = Kb(e.l)(k, f);
              return -1 === l
                ? (f.push(k), (k = { jd: {} }), g.push(k), k)
                : g[l];
            }
            var e = this,
              f = [],
              g = [];
            x(function (k) {
              var l = k.attributeName,
                m = k.removedNodes,
                p = k.oldValue,
                q = k.target,
                r = k.nextSibling,
                t = k.previousSibling;
              switch (k.type) {
                case "attributes":
                  if (e.Qc(k)) {
                    var y = d(q);
                    y.jd[l] || (y.jd[l] = de(e.l, q, l, p, e.G.Db()).value);
                  }
                  break;
                case "childList":
                  m &&
                    x(function (D) {
                      y = d(D);
                      y.Oe ||
                        C(y, { Oe: q, Tg: r ? r : void 0, Ug: t ? t : void 0 });
                    }, Ma(m));
                  break;
                case "characterData":
                  (y = d(q)), y.Pe || (y.Pe = p);
              }
            }, b);
            var h = this.G.qa();
            x(function (k, l) {
              h.de(k, g[l]);
            }, f);
          };
          c.prototype.Nd = function (b) {
            var d = this;
            if (Vg(this.l)) {
              var e = this.G.stamp();
              this.bd(b);
              x(function (f) {
                var g = f.addedNodes,
                  h = f.removedNodes,
                  k = f.target;
                switch (f.type) {
                  case "childList":
                    h && h.length && d.Wd(Ma(h), e);
                    g && g.length && d.Vd(Ma(g), e);
                    break;
                  case "characterData":
                    d.Ud(k, e);
                }
              }, b);
              this.Td(e);
            } else this.stop();
          };
          c.prototype.Td = function (b) {
            var d = this;
            x(function (e, f) {
              var g = d.jc();
              d.G.R(
                "mutation",
                { index: g, attributes: d.na.attributes[f], target: d.V(e) },
                "ac",
                b
              );
            }, this.na.elements);
            this.na.elements = [];
            this.na.attributes = [];
          };
          c.prototype.Vd = function (b, d) {
            var e = this,
              f = this.jc();
            this.G.qa().oc({
              nodes: b,
              Jc: function (g) {
                g = B(function (h) {
                  h.node = void 0;
                  return h;
                }, g);
                e.G.R("mutation", { index: f, nodes: g }, "ad", d);
              },
            });
          };
          c.prototype.Wd = function (b, d) {
            var e = this,
              f = this.jc(),
              g = this.G.qa(),
              h = B(function (k) {
                var l = g.removeNode(k);
                Ci(e.l, k, function (m) {
                  g.removeNode(m);
                });
                return l;
              }, b);
            this.G.R("mutation", { index: f, nodes: h }, "re", d);
          };
          c.prototype.Ud = function (b, d) {
            var e = this.jc();
            this.G.R(
              "mutation",
              { value: b.textContent, target: this.V(b), index: e },
              "tc",
              d
            );
          };
          c.prototype.jc = function () {
            var b = this.index;
            this.index += 1;
            return b;
          };
          return c;
        })(bb),
        yt = (function () {
          function a(c, b) {
            var d = this;
            this.ec = [];
            this.bb = [];
            this.Md = 1;
            this.De = this.Hf = 0;
            this.wa = {};
            this.Qa = {};
            this.Cb = [];
            this.xd = function (f) {
              return d.bb.length ? G(f, d.bb) : !1;
            };
            this.removeNode = function (f) {
              var g = d.V(f),
                h = Ha(f);
              if (h)
                return (
                  (h = "NR:" + h.toLowerCase()),
                  d.xd(h) && d.X.$(h, { data: { node: f, id: g } }),
                  g
                );
            };
            this.gb = function (f) {
              var g = Ha(f);
              if (g) {
                var h = f.__ym_indexer;
                return h
                  ? h
                  : ((h = d.Md),
                    (f.__ym_indexer = h),
                    (d.Md += 1),
                    (g = "NA:" + g.toLowerCase()),
                    d.xd(g) && d.X.$(g, { data: { node: f, id: h } }),
                    h);
              }
              return null;
            };
            this.Bf = function () {
              d.Hf = U(d.l, w(I(d.Y, d, !1), d.Bf), 50, "i.s");
            };
            this.zf = function () {
              d.De = U(d.l, w(I(d.Vc, d, !1), d.zf), 50, "i.g");
            };
            this.ai = function (f) {
              null === d.wa[f] && delete d.wa[f];
              null === d.Qa[f] && delete d.Qa[f];
            };
            this.l = c;
            var e = rf(c, this, "i");
            this.X = cd(c);
            this.options = b;
            this.start = e.H(this.start, "st");
            this.stop = e.H(this.stop, "sp");
            this.V = e.H(this.V, "i");
            this.de = e.H(this.de, "o");
            this.oc = e.H(this.oc, "a");
            this.removeNode = e.H(this.removeNode, "r");
            this.Y = e.H(this.Y, "s");
            this.Vc = e.H(this.Vc, "g");
          }
          a.prototype.de = function (c, b) {
            var d = this.gb(c);
            $a(d) || (this.Qa[d] && this.V(c), (this.Qa[d] = b));
          };
          a.prototype.F = function (c, b, d) {
            c = "" + b + c;
            this.bb.push(c);
            this.xd(c) || this.bb.push(c);
            this.X.F([c], d);
          };
          a.prototype.ea = function (c, b, d) {
            var e = "" + b + c;
            this.bb = ha(function (f) {
              return f !== e;
            }, this.bb);
            this.X.ea([e], d);
          };
          a.prototype.start = function () {
            this.Bf();
            this.zf();
          };
          a.prototype.stop = function () {
            this.flush();
            la(this.l, this.De);
            la(this.l, this.Hf);
            this.ec = [];
            this.Cb = [];
            this.wa = {};
            this.Qa = {};
          };
          a.prototype.oc = function (c) {
            var b = this,
              d = [],
              e = 0,
              f = { Jc: c.Jc, result: [], pc: 0, nodes: d };
            this.ec.push(f);
            x(function (g) {
              Ci(b.l, g, function (h) {
                var k = b.gb(h);
                $a(k) ||
                  (d.push(h),
                  b.wa[k] && b.V(h),
                  (b.wa[k] = { node: h, event: f, zi: e }),
                  (e += 1));
              });
            }, c.nodes);
          };
          a.prototype.V = function (c) {
            if (c === this.l) return 0;
            var b = this.gb(c),
              d = this.wa[b],
              e = this.Wg(b),
              f = e.Oe,
              g = e.jd,
              h = e.Pe,
              k = e.Tg,
              l = e.Ug;
            if (d) {
              e = d.event;
              d = d.zi;
              var m = Yr(this.l) === c;
              k = k || c.nextSibling;
              var p = l || c.previousSibling;
              l = !m && k ? this.gb(k) : null;
              p = !m && p ? this.gb(p) : null;
              m = this.l;
              k = this.options;
              f = this.gb(f || c.parentNode || c.parentElement) || 0;
              var q = g,
                r = void 0;
              void 0 === p && (p = null);
              void 0 === l && (l = null);
              void 0 === q && (q = {});
              void 0 === r && (r = Ha(c));
              if (Y(r)) c = void 0;
              else {
                g = {
                  id: b,
                  prev: p !== f ? p : null,
                  next: l !== f ? l : null,
                  parent: f,
                  name: r.toLowerCase(),
                  node: c,
                };
                if (xf(c)) {
                  if (((h = nn(c, h)), (g.attributes = {}), (g.content = h)))
                    if ((c = ed(m, c)))
                      (g.content = "" !== Ya(h) ? En(m, h) : h), (g.hidden = c);
                } else
                  (h = on(m, c, k, q, r)),
                    (m = h.kb),
                    (g.attributes = h.mg),
                    m && (g.hidden = m),
                    c.namespaceURI &&
                      gb(c.namespaceURI, "svg") &&
                      (g.namespace = c.namespaceURI);
                c = g;
              }
              if (Y(c)) return;
              this.wa[b] = null;
              this.Cb.push(b);
              e.result[d] = c;
              e.pc += 1;
              e.nodes.length === e.pc && e.Jc(e.result);
            }
            return b;
          };
          a.prototype.flush = function () {
            this.Y(!0);
          };
          a.prototype.Vc = function () {
            if (this.Cb.length) {
              var c = Yb(this.Cb, this.ai),
                b = bg(this.l, 30);
              c(b);
            }
          };
          a.prototype.Y = function (c) {
            var b = this;
            if (Vg(this.l)) {
              var d = ea(this.wa);
              d = P(
                function (e, f) {
                  b.wa[f] && e.push(b.wa[f].node);
                  return e;
                },
                [],
                d
              );
              d = Yb(d, this.V);
              c = c ? Bj(F) : zj(this.l, 20);
              d(c);
              this.ec = ha(function (e) {
                return e.pc !== e.result.length;
              }, this.ec);
            }
          };
          a.prototype.Wg = function (c) {
            if ($a(c)) return {};
            var b = this.Qa[c];
            return b ? ((this.Qa[c] = null), this.Cb.push(c), b) : {};
          };
          return a;
        })(),
        zt = ["input", "change", "keyup", "paste", "cut"],
        At = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.inputs = {};
            b.ed = !1;
            b.xc = b.L.H(b.xc, "ii");
            b.yc = b.L.H(b.yc, "ir");
            b.Ec = b.L.H(b.Ec, "ri");
            b.Nc = b.L.H(b.Nc, "ur");
            b.vd = b.L.H(b.vd, "ce");
            b.nc = b.L.H(b.nc, "vc");
            return b;
          }
          Ia(c, a);
          c.prototype.start = function () {
            var b = this,
              d = this.G.qa();
            this.ed = this.sg();
            x(function (e) {
              e = e.toLowerCase();
              d.F(e, "NA:", I(b.xc, b));
              d.F(e, "NR:", I(b.yc, b));
            }, wf);
            this.mb = [
              this.Pa.F(this.l.document, zt, I(this.vd, this)),
              function () {
                x(function (e) {
                  e = e.toLowerCase();
                  d.ea(e, "NA:", b.xc);
                  d.ea(e, "NR:", b.yc);
                }, wf);
                x(b.Nc, ea(b.inputs));
              },
            ];
          };
          c.prototype.Nc = function (b) {
            var d = this.inputs[b];
            if (d) {
              if (this.ed) {
                var e = d.Wh;
                d = d.element;
                e && this.l.Object.defineProperty(d, this.kc(d), e);
              }
              delete this.inputs[b];
            }
          };
          c.prototype.yc = function (b) {
            b && this.Nc(b.data.id);
          };
          c.prototype.xc = function (b) {
            b && ((b = b.data), this.Ec(b.node, b.id));
          };
          c.prototype.kc = function (b) {
            return Be(b) ? "checked" : "value";
          };
          c.prototype.vd = function (b) {
            if ((b = b.target)) {
              var d = this.kc(b);
              this.nc(b[d], b);
            }
          };
          c.prototype.nc = function (b, d) {
            var e = this.V(d),
              f = this.inputs[e];
            if (!f && ((f = this.Ec(f, e)), !f)) return;
            e = f.vg;
            var g = f.value,
              h = this.kc(d),
              k = !b || G(typeof b, ["string", "boolean", "number"]),
              l = this.G.Db().Cd;
            k &&
              b !== g &&
              ((g = de(this.l, d, h, b, this.G.Db()).value),
              e
                ? this.G.R(
                    "event",
                    { target: this.V(d), checked: !!b },
                    "change"
                  )
                : ((e = Jc(this.l, d, l)),
                  (l = e.cb),
                  this.G.R(
                    "event",
                    { value: g, hidden: e.lb && !l, target: this.V(d) },
                    "change"
                  )),
              (f.value = b));
          };
          c.prototype.Ec = function (b, d) {
            var e = this;
            if (
              !pf(b) ||
              "__ym_input_override_test" === b.getAttribute("class") ||
              this.inputs[d]
            )
              return null;
            var f = Be(b),
              g = this.kc(b),
              h = { element: b, vg: f, value: b[g] };
            this.inputs[d] = h;
            this.ed &&
              Nb(this.l, function () {
                var k =
                    e.l.Object.getOwnPropertyDescriptor(
                      Object.getPrototypeOf(b),
                      g
                    ) || {},
                  l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                  m = C({}, k, l);
                if (Oa("((set)?(\\s?" + g + ")?)?", m.set)) {
                  try {
                    e.l.Object.defineProperty(
                      b,
                      g,
                      C({}, m, {
                        configurable: !0,
                        set: function (p) {
                          e.nc(p, this);
                          return m.set.call(this, p);
                        },
                      })
                    );
                  } catch (p) {}
                  h.Wh = m;
                }
              });
            return h;
          };
          c.prototype.sg = function () {
            var b = !0,
              d = Pb(this.l)("input");
            try {
              d = Pb(this.l)("input");
              d.value = "INPUT_VALUE";
              d.style.setProperty("display", "none", "important");
              d.setAttribute("type", "text");
              d.setAttribute("class", "__ym_input_override_test");
              var e =
                  this.l.Object.getOwnPropertyDescriptor(
                    Object.getPrototypeOf(d),
                    "value"
                  ) || {},
                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                g = C({}, e, f);
              this.l.Object.defineProperty(
                d,
                "value",
                C({}, g, {
                  configurable: !0,
                  set: function (h) {
                    return g.set.call(d, h);
                  },
                })
              );
              "INPUT_VALUE" !== d.value && (b = !1);
              d.value = "INPUT_TEST";
              "INPUT_TEST" !== d.value && (b = !1);
            } catch (h) {
              b = !1;
            }
            return b;
          };
          return c;
        })(bb),
        Bt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Va = {
              width: 0,
              height: 0,
              pageHeight: 0,
              pageWidth: 0,
              orientation: 0,
            };
            b.ga.push([["resize"], b.Uh]);
            b.ga.push([["orientationchange"], b.Sh]);
            return b;
          }
          Ia(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.Ef();
          };
          c.prototype.Uh = function () {
            var b = this.rd();
            this.sh(b) && ((this.Va = b), this.Ff(b));
          };
          c.prototype.Sh = function () {
            var b = this.rd();
            this.Va.orientation !== b.orientation &&
              ((this.Va = b), this.hi(b));
          };
          c.prototype.ef = function (b) {
            return !b.height || !b.width || !b.pageWidth || !b.pageHeight;
          };
          c.prototype.sh = function (b) {
            return b.height !== this.Va.height || b.width !== this.Va.width;
          };
          c.prototype.rd = function () {
            var b = this.G.fb(),
              d = wd(this.l),
              e = d[0];
            d = d[1];
            b = b.qd();
            return {
              width: e,
              height: d,
              pageWidth: b ? b.scrollWidth : 0,
              pageHeight: b ? b.scrollHeight : 0,
              orientation: this.G.fb().fh(),
            };
          };
          c.prototype.hi = function (b) {
            var d;
            void 0 === d && (d = this.G.stamp());
            this.G.R(
              "event",
              { width: b.width, height: b.height, orientation: b.orientation },
              "deviceRotation",
              d
            );
          };
          c.prototype.Ff = function (b, d) {
            void 0 === d && (d = this.G.stamp());
            this.G.R(
              "event",
              {
                width: b.width,
                height: b.height,
                pageWidth: b.pageWidth,
                pageHeight: b.pageHeight,
              },
              "resize",
              d
            );
          };
          c.prototype.Ef = function () {
            var b = this.rd();
            this.ef(b)
              ? U(this.l, I(this.Ef, this), 300)
              : (this.ef(this.Va) && (this.Va = b), this.Ff(b, 0));
          };
          return c;
        })(bb),
        Me = (function () {
          function a(c) {
            this.index = 0;
            this.sb = {};
            this.l = c;
          }
          a.prototype.Zb = function (c, b, d) {
            void 0 === d && (d = {});
            var e = ka(this.l),
              f = this.index;
            this.index += 1;
            this.sb[f] = { Ga: 0, Lb: !1, Rg: c, Rc: [], Hd: e(da) };
            var g = this;
            return function () {
              var h = Ja(arguments),
                k = d.Me && !g.sb[f].Lb,
                l = g.sb[f];
              la(g.l, l.Ga);
              l.Rc = h;
              l.Lb = !0;
              var m = e(da);
              if (k || m - l.Hd >= b) c.apply(void 0, h), (l.Hd = m);
              l.Ga = U(
                g.l,
                function () {
                  k || (c.apply(void 0, h), (l.Hd = e(da)));
                  l.Lb = !1;
                  l.Rc = [];
                },
                b,
                "th"
              );
            };
          };
          a.prototype.flush = function () {
            var c = this;
            x(function (b) {
              var d = c.sb[b],
                e = d.Ga,
                f = d.Rg,
                g = d.Rc;
              d.Lb && ((c.sb[b].Lb = !1), f.apply(void 0, g), la(c.l, e));
            }, ea(this.sb));
          };
          return a;
        })(),
        Ct = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Rf = [];
            d.xe = { x: 0, y: 0 };
            d.za = new Me(b);
            d.Bc = d.L.H(d.Bc, "o");
            d.ga.push([["scroll"], d.Vh]);
            return d;
          }
          Ia(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.G.R(
              "event",
              {
                x: Math.max(this.l.scrollX, 0),
                y: Math.max(this.l.scrollY, 0),
                page: !0,
                target: -1,
              },
              "scroll",
              0
            );
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.za.flush();
          };
          c.prototype.Vh = function (b) {
            if (this.G.fb().bf()) this.Bc(b);
            else {
              var d = b.target,
                e = ha(function (f) {
                  return f[0] === d;
                }, this.Rf).pop();
              e
                ? (e = e[1])
                : ((e = this.za.Zb(I(this.Bc, this), 100, { Me: !0 })),
                  this.Rf.push([d, e]));
              e(b);
            }
          };
          c.prototype.Bc = function (b) {
            var d = this.G.fb().qd();
            b = b.target;
            var e = this.Eb(b);
            d = d === b || this.l === b || this.l.document === b;
            var f = Math.max(e.left, 0);
            e = Math.max(e.top, 0);
            if (d) {
              if (this.xe.x === f && this.xe.y === e) return;
              this.xe = { x: f, y: e };
            }
            this.G.R(
              "event",
              { x: f, y: e, page: d, target: d ? -1 : this.V(b) },
              "scroll"
            );
          };
          c.prototype.Eb = function (b) {
            var d = { left: 0, top: 0 };
            if (!b) return d;
            if (b.window === b)
              return { top: b.scrollY || 0, left: b.scrollX || 0 };
            var e = b.ownerDocument || b,
              f = b.documentElement,
              g = e.defaultView || e.parentWindow,
              h = e.body;
            return b !== e || ((b = this.G.fb().qd()), b)
              ? G(b, [f, h])
                ? {
                    top: b.scrollTop || g.scrollY,
                    left: b.scrollLeft || g.scrollX,
                  }
                : { top: b.scrollTop || 0, left: b.scrollLeft || 0 }
              : d;
          };
          return c;
        })(bb),
        Dt = ["mousemove", "mousedown", "mouseup", "click"],
        Et = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.ga.push([Dt, d.Rh]);
            d.za = new Me(b);
            d.wc = d.L.H(d.wc, "n");
            d.ti = d.L.H(d.za.Zb(I(d.wc, d), 100), "t");
            return d;
          }
          Ia(c, a);
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.za.flush();
          };
          c.prototype.Rh = function (b) {
            var d = null;
            try {
              d = b.type;
            } catch (e) {
              return;
            }
            "mousemove" === d ? this.ti(b) : this.wc(b);
          };
          c.prototype.wc = function (b) {
            var d = b.type,
              e = b.clientX;
            e = void 0 === e ? null : e;
            var f = b.clientY;
            f = void 0 === f ? null : f;
            b = b.target || this.l.document.elementFromPoint(e, f);
            this.G.R("event", { x: e || 0, y: f || 0, target: this.V(b) }, d);
          };
          return c;
        })(bb),
        Ft = ["focus", "blur"],
        Gt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.ga.push([Ft, b.Sg]);
            return b;
          }
          Ia(c, a);
          c.prototype.Sg = function (b) {
            var d = b.target;
            b = b.type;
            this.G.R(
              "event",
              {
                target: this.V(
                  d === this.l ? this.l.document.documentElement : d
                ),
              },
              b
            );
          };
          return c;
        })(bb),
        Ht = u(function (a) {
          var c = va(a.getSelection, "getSelection");
          return c ? I(c, a) : F;
        }),
        It = w(Ht, qa),
        Jt = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
        Kt = /text|search|password|tel|url/,
        Lt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.yd = !1;
            b.ga.push([Jt, b.qh]);
            return b;
          }
          Ia(c, a);
          c.prototype.qh = function (b) {
            var d = this.G,
              e = b.type,
              f = b.which;
            b = b.target;
            if ("mousemove" !== e || 1 === f)
              (e = "select" === e ? this.jh(b) : this.hh()) && e.start !== e.end
                ? ((this.yd = !0), d.R("event", e, "selection"))
                : this.yd &&
                  ((this.yd = !1),
                  d.R("event", { start: 0, end: 0 }, "selection"));
          };
          c.prototype.hh = function () {
            var b = It(this.l);
            if (b && 0 < b.rangeCount) {
              b = b.getRangeAt(0) || this.l.document.createRange();
              var d = this.V(b.startContainer),
                e = this.V(b.endContainer);
              if (!Y(d) && !Y(e))
                return {
                  start: b.startOffset,
                  end: b.endOffset,
                  startNode: d,
                  endNode: e,
                };
            }
          };
          c.prototype.jh = function (b) {
            if (Kt.test(b.type || "")) {
              var d = this.V(b);
              if (!Y(d))
                return {
                  start: b.selectionStart,
                  end: b.selectionEnd,
                  target: d,
                };
            }
          };
          return c;
        })(bb),
        ml = {
          focus: "windowfocus",
          blur: "windowblur",
          ej: "windowfocus",
          dj: "windowblur",
        },
        Mt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.visibility = null;
            Y(b.l.document.hidden)
              ? Y(b.l.document.msHidden)
                ? Y(b.l.document.webkitHidden) ||
                  (b.visibility = {
                    hidden: "webkitHidden",
                    event: "webkitvisibilitychange",
                  })
                : (b.visibility = {
                    hidden: "msHidden",
                    event: "msvisibilitychange",
                  })
              : (b.visibility = {
                  hidden: "hidden",
                  event: "visibilitychange",
                });
            b.ud = b.L.H(b.ud, "fbe");
            b.wd = b.L.H(b.wd, "she");
            return b;
          }
          Ia(c, a);
          c.prototype.start = function () {
            this.mb = [
              this.Pa.F(
                this.l,
                this.visibility ? [this.visibility.event] : ["focus", "blur"],
                I(this.ud, this)
              ),
            ];
            "onpagehide" in this.l &&
              this.mb.push(
                this.Pa.F(
                  this.l,
                  ["pageshow", "pagehide"],
                  I(this.wd, this),
                  null
                )
              );
          };
          c.prototype.wd = function (b) {
            this.G.R("event", {}, ml[b.type]);
          };
          c.prototype.ud = function (b) {
            this.G.R(
              "event",
              {},
              ml[
                this.visibility
                  ? this.l.document[this.visibility.hidden]
                    ? "blur"
                    : "focus"
                  : b.type
              ]
            );
          };
          return c;
        })(bb),
        Nt = [
          "touchmove",
          "touchstart",
          "touchend",
          "touchcancel",
          "touchforcechange",
        ],
        Ot = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Mc = {};
            d.scrolling = !1;
            d.Cf = 0;
            d.ga.push([["scroll"], d.ei, d.l.document]);
            d.ga.push([Nt, d.vi, d.l.document]);
            d.za = new Me(b);
            d.Hb = d.L.H(d.Hb, "nh");
            d.ui = d.L.H(
              d.za.Zb(d.Hb, d.G.fb().bf() ? 0 : 50, { Me: !0 }),
              "th"
            );
            return d;
          }
          Ia(c, a);
          c.prototype.ei = function () {
            var b = this;
            this.scrolling = !0;
            la(this.l, this.Cf);
            this.Cf = U(
              this.l,
              function () {
                b.scrolling = !1;
              },
              150
            );
          };
          c.prototype.vi = function (b) {
            var d = this,
              e = "touchcancel" === b.type || "touchend" === b.type;
            b.changedTouches &&
              0 < b.changedTouches.length &&
              x(function (f) {
                var g = d.lh(f);
                f.__ym_touch_id = g;
                e && delete d.Mc[f.identifier];
              }, Ma(b.changedTouches));
            "touchmove" === b.type
              ? this.scrolling
                ? this.Hb(b)
                : this.ui(b, this.G.stamp())
              : this.Hb(b);
          };
          c.prototype.lh = function (b) {
            this.Mc[b.identifier] || (this.Mc[b.identifier] = Ph());
            return this.Mc[b.identifier];
          };
          c.prototype.Hb = function (b, d) {
            void 0 === d && (d = this.G.stamp());
            var e = b.type,
              f = B(function (g) {
                return {
                  id: g.__ym_touch_id,
                  x: Math.round(g.clientX),
                  y: Math.round(g.clientY),
                  force: g.force,
                };
              }, Ma(b.changedTouches));
            0 < f.length &&
              this.G.R("event", { touches: f, target: this.V(b.target) }, e, d);
          };
          return c;
        })(bb),
        Pt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.ga.push([["load"], b.Qh, b.l.document]);
            return b;
          }
          Ia(c, a);
          c.prototype.Qh = function (b) {
            b = b.target;
            "IMG" === Ha(b) &&
              b.getAttribute("srcset") &&
              this.G.R(
                "mutation",
                { target: this.V(b), attributes: { src: b.currentSrc } },
                "ac"
              );
          };
          return c;
        })(bb),
        Qt = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.$f = 1;
            d.za = new Me(b);
            d.Ub = d.L.H(d.Ub, "z");
            return d;
          }
          Ia(c, a);
          c.prototype.start = function () {
            if (this.Ze()) {
              a.prototype.start.call(this);
              this.Ub();
              var b = this.Pa.F(
                n(this.l, "visualViewport"),
                ["resize"],
                this.za.Zb(this.Ub, 10)
              );
              this.mb.push(b);
            }
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.za.flush();
          };
          c.prototype.Ub = function () {
            var b = this.Ze();
            b && b !== this.$f && ((this.$f = b), this.ii(b));
          };
          c.prototype.Ze = function () {
            var b = Wf(this.l);
            return b ? b[2] : null;
          };
          c.prototype.ii = function (b) {
            var d = Gf(this.l);
            this.G.R("event", { x: d.x, y: d.y, level: b }, "zoom");
          };
          return c;
        })(bb),
        Kd,
        Ne = {
          91: "super",
          93: "super",
          224: "super",
          18: "alt",
          17: "ctrl",
          16: "shift",
          9: "tab",
          8: "backspace",
          46: "delete",
        },
        nl = { super: 1, Ri: 2, alt: 3, shift: 4, lj: 5, delete: 6, Pi: 6 },
        Rt = [4, 9, 8, 32, 37, 38, 39, 40, 46],
        ol =
          ((Kd = {}),
          (Kd["1"] = {
            91: "&#8984;",
            93: "&#8984;",
            224: "&#8984;",
            18: "&#8997;",
            17: "&#8963;",
            16: "&#8679;",
            9: "&#8677;",
            8: "&#9003;",
            46: "&#9003;",
          }),
          (Kd["2"] = {
            91: "&#xff;",
            93: "&#xff;",
            224: "&#xff;",
            18: "Alt",
            17: "Ctrl",
            16: "Shift",
            9: "Tab",
            8: "Backspace",
            46: "Delete",
          }),
          (Kd.Kh = {
            32: "SPACEBAR",
            37: "&larr;",
            38: "&uarr;",
            39: "&rarr;",
            40: "&darr;",
            13: "Enter",
          }),
          Kd),
        St = /flash/,
        Tt = /ym-disable-keys/,
        Ut = /^&#/,
        Vt = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.ib = {};
            d.Ka = 0;
            d.Ba = [];
            d.Qf = [];
            d.cc = 0;
            d.tf = 0;
            d.ga.push([["keydown"], d.nh]);
            d.ga.push([["keyup"], d.oh]);
            d.ig =
              -1 !== cc(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2";
            d.uc = d.L.H(d.uc, "v");
            d.gd = d.L.H(d.gd, "ec");
            d.Ic = d.L.H(d.Ic, "sk");
            d.od = d.L.H(d.od, "gk");
            d.fe = d.L.H(d.fe, "sc");
            d.Tb = d.L.H(d.Tb, "cc");
            d.reset = d.L.H(d.reset, "r");
            d.Fc = d.L.H(d.Fc, "rs");
            return d;
          }
          Ia(c, a);
          c.prototype.nh = function (b) {
            if (this.uc(b) && !this.Dh(b)) {
              var d = b.keyCode;
              b.repeat ||
                this.ib[d] ||
                ((this.ib[b.keyCode] = !0),
                Ne[b.keyCode] && !this.Ka
                  ? ((this.Ka += 1), this.fe(b), this.reset(300))
                  : this.Ka
                  ? (this.qg(), this.Xd(b), this.gd())
                  : (this.reset(), this.Xd(b)));
            }
          };
          c.prototype.oh = function (b) {
            if (this.uc(b)) {
              var d = b.keyCode,
                e = Ne[b.keyCode];
              this.ib[b.keyCode] && (this.ib[d] = !1);
              e && this.Ka && ((this.Ka = 0), (this.ib = {}));
              1 === this.Ba.length &&
                ((b = this.Ba[0]),
                G(b.keyCode, Rt) && (this.Ic([b], !0), this.reset()));
              this.Ba = ha(w(T("keyCode"), Aa(d), zc), this.Ba);
              la(this.l, this.cc);
            }
          };
          c.prototype.uc = function (b) {
            var d = this.l.document.activeElement;
            d =
              d &&
              "OBJECT" === d.nodeName &&
              St.test(d.getAttribute("type") || "");
            b = b.target;
            if (!b) return !d;
            b =
              "INPUT" === b.nodeName &&
              "password" === b.getAttribute("type") &&
              Tt.test(b.className);
            return !d && !b;
          };
          c.prototype.gd = function () {
            this.Qf = this.Ba.slice(0);
            la(this.l, this.cc);
            this.cc = U(this.l, v(this.Qf, I(this.Ic, this)), 0, "e.c");
          };
          c.prototype.Ic = function (b, d) {
            void 0 === d && (d = !1);
            if (1 < b.length || d) {
              var e = this.od(b);
              this.G.R("event", { keystrokes: e }, "keystroke");
            }
          };
          c.prototype.od = function (b) {
            var d = this;
            b = B(function (e) {
              e = e.keyCode;
              var f = Ne[e],
                g = d.eh(e);
              return { id: e, key: g, isMeta: !!f && Ut.test(g), modifier: f };
            }, b);
            return Bf(function (e, f) {
              return (nl[e.modifier] || 100) - (nl[f.modifier] || 100);
            }, b);
          };
          c.prototype.eh = function (b) {
            return ol[this.ig][b] || ol.Kh[b] || String.fromCharCode(b);
          };
          c.prototype.Xd = function (b) {
            G(b, this.Ba) || this.Ba.push(b);
          };
          c.prototype.fe = function (b) {
            this.Xd(b);
            this.Tb();
          };
          c.prototype.Tb = function () {
            this.Ka ? U(this.l, this.Tb, 100) : (this.Ba = []);
          };
          c.prototype.qg = function () {
            la(this.l, this.tf);
          };
          c.prototype.reset = function (b) {
            b ? (this.tf = U(this.l, I(this.Fc, this), b)) : this.Fc();
          };
          c.prototype.Fc = function () {
            this.Ka = 0;
            this.Ba = [];
            this.ib = {};
            la(this.l, this.cc);
          };
          c.prototype.Dh = function (b) {
            return b.target && "INPUT" === b.target.nodeName
              ? b.shiftKey || 32 === b.keyCode || "shift" === Ne[b.keyCode]
              : !1;
          };
          return c;
        })(bb),
        mn = ["sr", "sd", "\u043d"],
        Wt = /allow-same-origin/,
        Xt = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Ob = [];
            d.kd = {};
            d.Od = d.L.H(d.Od, "fi");
            d.Pd = d.L.H(d.Pd, "sd");
            d.Qd = d.L.H(d.Qd, "src");
            d.xa = new b.MutationObserver(d.Qd);
            return d;
          }
          Ia(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.G.Db().Vb && this.G.qa().F("iframe", "NA:", I(this.Od, this));
            this.G.Ve().md().F(["sdr"], I(this.Pd, this));
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            x(function (b) {
              b.G.stop();
            }, this.Ob);
          };
          c.prototype.Qd = function (b) {
            var d = b.pop().target;
            if (
              (b = Ib(function (f) {
                return f.af === d;
              }, this.Ob))
            ) {
              this.Ob = ha(function (f) {
                return f.af !== d;
              }, this.Ob);
              var e = b.G.nd();
              try {
                b.G.stop();
              } catch (f) {}
              this.Yb(d, e);
            }
          };
          c.prototype.Od = function (b) {
            if (b) {
              var d = b.data.node;
              this.xa.observe(d, { attributes: !0, attributeFilter: ["src"] });
              this.Yb(d, b.data.id);
            }
          };
          c.prototype.Yb = function (b, d) {
            var e = this;
            this.Bh(b) &&
              pc(
                this.l,
                b
              )(
                Xa(F, function () {
                  var f = e.G.Yb(b.contentWindow, d);
                  e.Ob.push({ G: f, af: b });
                })
              );
          };
          c.prototype.Pd = function (b) {
            var d = this,
              e = b.frameId;
            b = b.data;
            this.kd[e] || (this.kd[e] = { data: [] });
            var f = this.kd[e];
            f.data = f.data.concat(b);
            this.l.isNaN(f.dd) &&
              x(function (g) {
                "page" === g.type && (f.dd = g.data.recordStamp - d.G.We());
              }, f.data);
            this.l.isNaN(f.dd) ||
              (this.G.Y(
                B(function (g) {
                  g.stamp += f.dd;
                  g.stamp = d.l.Math.max(0, g.stamp);
                  return g;
                }, f.data)
              ),
              (f.data = []));
          };
          c.prototype.Bh = function (b) {
            var d = b.getAttribute("src"),
              e = b.getAttribute("sandbox");
            return b.getAttribute("_ym_ignore") ||
              (e && !e.match(Wt)) ||
              (d &&
                "about:blank" !== d &&
                (d = Ic(this.l, d).host) &&
                R(this.l).host !== d)
              ? !1
              : n(b, "contentWindow.location.href");
          };
          return c;
        })(bb),
        Yt = u(function (a) {
          var c = n(a, "sessionStorage");
          if (!c) return null;
          try {
            var b = c.getItem("__ym_tab_guid");
            c = !1;
            var d = n(a, "opener.sessionStorage");
            try {
              c = !!d && b === d.getItem("__ym_tab_guid");
            } catch (e) {
              c = !0;
            }
            if (!b || c)
              (b = Ph()), a.sessionStorage.setItem("__ym_tab_guid", b);
            return b;
          } catch (e) {
            return null;
          }
        }),
        Zt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.$d = b.L.H(b.$d, "ps");
            return b;
          }
          Ia(c, a);
          c.prototype.start = function () {
            this.G.qa().oc({
              nodes: [this.l.document.documentElement],
              Jc: this.$d,
            });
          };
          c.prototype.$d = function (b) {
            var d = this.G.gh(),
              e = d.Xg(),
              f = R(this.l),
              g = f.host,
              h = f.protocol;
            f = f.pathname;
            var k = wd(this.l),
              l = k[0];
            k = k[1];
            this.G.R(
              "page",
              {
                content: B(function (m) {
                  m.node = void 0;
                  return m;
                }, b),
                base: e || "",
                hasBase: !!e,
                viewport: { width: l, height: k },
                title: this.l.document.title,
                doctype: d.Zg() || "",
                address: this.l.location.href,
                ua: this.l.navigator.userAgent,
                referrer: this.l.document.referrer,
                screen: {
                  width: this.l.screen.width,
                  height: this.l.screen.height,
                },
                location: { host: g, protocol: h, path: f },
                recordStamp: this.G.We(),
                tabId: Yt(this.l),
              },
              "page",
              0
            );
          };
          return c;
        })(bb),
        $t = ["addRule", "removeRule", "insertRule", "deleteRule"],
        Wg = [
          [
            (function (a) {
              function c(b, d, e) {
                b = a.call(this, b, d, e) || this;
                b.Za = {};
                b.Pb = {};
                b.Ce = 0;
                b.zc = b.L.H(b.zc, "a");
                b.rb = b.L.H(b.rb, "sr");
                b.Ac = b.L.H(b.Ac, "r");
                b.Y = b.L.H(b.Y, "d");
                return b;
              }
              Ia(c, a);
              c.prototype.start = function () {
                var b = this.G.qa();
                b.F("style", "NA:", this.zc);
                b.F("style", "NR:", this.Ac);
                this.Y();
              };
              c.prototype.stop = function () {
                var b = this;
                a.prototype.stop.call(this);
                var d = this.G.qa();
                d.ea("style", "NA:", this.zc);
                d.ea("style", "NR:", this.Ac);
                this.Y();
                la(this.l, this.Ce);
                x(function (e) {
                  b.Za[e].sheet && b.yf(b.Za[e].sheet);
                }, ea(this.Za));
                this.Za = {};
              };
              c.prototype.Y = function () {
                var b = this;
                x(function (d) {
                  var e = d[0];
                  d = d[1];
                  if (d.length) {
                    for (
                      var f = [], g = d[0].stamp, h = [], k = 0;
                      k < d.length;
                      k += 1
                    ) {
                      var l = d[k],
                        m = l.stamp;
                      delete l.stamp;
                      m <= g + 50 ? f.push(l) : (h.push(f), (g = m), (f = [l]));
                    }
                    f.length && h.push(f);
                    h.length &&
                      x(function (p) {
                        b.G.R(
                          "event",
                          { target: Da(e), changes: p },
                          "stylechange",
                          g
                        );
                      }, h);
                    delete b.Pb[e];
                  }
                }, Ga(this.Pb));
                this.Ce = U(this.l, this.Y, 100);
              };
              c.prototype.rb = function (b, d, e, f, g) {
                void 0 === f && (f = "");
                void 0 === g && (g = -1);
                this.Pb[b] || (this.Pb[b] = []);
                this.Pb[b].push({ op: d, style: f, index: g, stamp: e });
              };
              c.prototype.Xh = function (b, d) {
                var e = this,
                  f = b.addRule,
                  g = b.removeRule,
                  h = b.insertRule,
                  k = b.deleteRule;
                V(f) &&
                  (b.addRule = function (l, m, p) {
                    e.rb(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                    return f.call(b, l, m, p);
                  });
                V(g) &&
                  (b.removeRule = function (l) {
                    e.rb(d, "r", e.G.stamp(), "", l);
                    return g.call(b, l);
                  });
                V(h) &&
                  (b.insertRule = function (l, m) {
                    e.rb(d, "a", e.G.stamp(), l, m);
                    return h.call(b, l, m);
                  });
                V(k) &&
                  (b.deleteRule = function (l) {
                    e.rb(d, "r", e.G.stamp(), "", l);
                    return k.call(b, l);
                  });
              };
              c.prototype.yf = function (b) {
                var d = this;
                x(function (e) {
                  var f = d.l.CSSStyleSheet.prototype[e];
                  V(f) && (b[e] = I(f, b));
                }, $t);
              };
              c.prototype.Lg = function (b) {
                try {
                  return b.cssRules || b.rules;
                } catch (d) {
                  return null;
                }
              };
              c.prototype.zc = function (b) {
                var d = b.data;
                b = d.id;
                d = d.node;
                if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                  var e = d.sheet,
                    f = this.Lg(e);
                  if (f && f.length) {
                    for (var g = [], h = 0; h < f.length; h += 1)
                      g.push({ style: f[h].cssText, index: h, op: "a" });
                    this.G.R("event", { changes: g, target: b }, "stylechange");
                  }
                  this.Xh(e, b);
                  this.Za[b] = d;
                }
              };
              c.prototype.Ac = function (b) {
                b = b.data.id;
                var d = this.Za[b];
                d && (delete this.Za[b], d.sheet && this.yf(d.sheet));
              };
              return c;
            })(bb),
            "ss",
          ],
          [At, "in"],
          [xt, "mu"],
          [Bt, "r"],
          [Ct, "sc"],
          [Et, "mo"],
          [Gt, "f"],
          [Lt, "se"],
          [Mt, "wf"],
          [Ot, "t"],
          [Pt, "src"],
          [Qt, "z"],
          [Vt, "ks"],
        ];
      Wg.push([Xt, "if"]);
      Wg.push([Zt, "pa"]);
      var au = u(function (a) {
          var c = a.document;
          return {
            qd: function () {
              if (c.scrollingElement) return c.scrollingElement;
              var b =
                0 === lb(c.compatMode, "CSS1") ? c.documentElement : c.body;
              return n(c, "documentElement.scrollHeight") >=
                n(c, "body.scrollHeight")
                ? b
                : null;
            },
            fh: function () {
              var b = a.screen;
              if (!b) return 0;
              var d = Ib(v(b, n), [
                "orientation",
                "mozOrientation",
                "msOrientation",
              ]);
              return n(b, d + ".angle") || 0;
            },
            aj: v(a, rb),
            bf: v(a, he),
            $i: v(a, wg),
          };
        }),
        bu = (function () {
          function a(c, b) {
            var d = this;
            this.Gb = 0;
            this.cd = [];
            this.Fb = null;
            this.sa = this.Qb = this.Of = !1;
            this.recordStamp = 0;
            this.stopped = !1;
            this.gh = function () {
              return d.page;
            };
            this.nd = function () {
              return d.Gb;
            };
            this.We = function () {
              return d.recordStamp;
            };
            this.dh = function () {
              return d.Pa;
            };
            this.Ve = function () {
              return d.Fb;
            };
            this.qa = function () {
              return d.zd;
            };
            this.stamp = function () {
              return d.me ? d.l.Math.max(d.me(da) - d.recordStamp, 0) : 0;
            };
            this.Db = function () {
              return d.options;
            };
            this.fb = function () {
              return d.ng;
            };
            this.R = function (f, g, h, k) {
              void 0 === k && (k = d.stamp());
              f = d.bh(f, g, h, k);
              d.Y(f);
            };
            this.bh = function (f, g, h, k) {
              void 0 === k && (k = d.stamp());
              return { type: f, data: g, stamp: k, frameId: d.Gb, event: h };
            };
            this.Y = function (f) {
              f = O(f) ? f : [f];
              d.Of && !d.Qb
                ? d.sa
                  ? ((f = B(function (g) {
                      return g.frameId ? g : C(g, { frameId: d.Gb });
                    }, f)),
                    d.Ve().Gf(f))
                  : d.Mb(f)
                : (d.cd = d.cd.concat(f));
            };
            this.l = c;
            var e = rf(c, this, "R");
            this.ie = e.H(this.ie, "s");
            this.Y = e.H(this.Y, "sd");
            e = H(c);
            e.C("wv2e") && Ld();
            e.D("wv2e", !0);
            this.options = b;
            this.Pa = ja(c);
            this.zd = new yt(this.l, b);
            this.ng = au(c);
            this.Ee = B(function (f) {
              return new f[0](c, d, f[1]);
            }, Wg);
            this.yh();
            this.page = kn(this.l);
            this.ie();
          }
          a.prototype.start = function (c) {
            this.Of = !0;
            this.Mb = c;
            this.Df();
          };
          a.prototype.stop = function () {
            this.stopped ||
              ((this.stopped = !0),
              Vg(this.l) &&
                (x(function (c) {
                  return c.stop();
                }, this.Ee),
                this.zd.stop(),
                this.Fb && this.Fb.stop(),
                this.sa || this.R("event", {}, "eof")));
          };
          a.prototype.Yb = function (c, b) {
            var d = new a(c, C({}, this.options, { frameId: b }));
            d.start(F);
            return d;
          };
          a.prototype.yh = function () {
            var c = this;
            this.sa = !!this.options.frameId;
            this.Gb = this.options.frameId || 0;
            this.Qb = !this.sa;
            var b = this.options.Vf || [];
            b.push(R(this.l).host);
            this.Fb = ln(this.l, this, b);
            b = this.Fb.md();
            rb(this.l)
              ? this.Qb &&
                b.F(["i"], function (d) {
                  c.sa = d.sa;
                  c.Qb = !1;
                  d.frameId && (c.Gb = d.frameId);
                  c.Df();
                })
              : (this.Qb = this.sa = !1);
          };
          a.prototype.Df = function () {
            var c = Ge(this.cd);
            this.Y(c);
          };
          a.prototype.ie = function () {
            this.me = Nf(this.l);
            this.recordStamp = this.me(da);
            x(function (c) {
              c.start();
            }, this.Ee);
            this.zd.start();
          };
          return a;
        })(),
        cu = (function () {
          return function (a, c, b) {
            var d = this;
            this.Tc = this.Ib = !1;
            this.Ua = [];
            this.hf = [];
            this.He = [];
            this.send = function (e, f, g) {
              e = d.sender(e, d.Bg);
              f && g && e.then(f, g);
              return e;
            };
            this.ke = function (e, f, g) {
              return new K(function (h, k) {
                e.push([f, h, k, g]);
              });
            };
            this.rh = function () {
              d.Ua = Bf(function (g, h) {
                return g[3].partNum - h[3].partNum;
              }, d.Ua);
              var e = P(
                  function (g, h, k) {
                    h = h[3];
                    return g && k + 1 === h.partNum;
                  },
                  !0,
                  d.Ua
                ),
                f = !!d.Ua[d.Ua.length - 1][3].end;
              return e && f;
            };
            this.hd = function (e) {
              dh(
                d.l,
                e.slice(),
                function (f) {
                  d.send(f[0], f[1], f[2]);
                },
                20,
                "s.w2.sf.fes"
              );
              Ge(e);
            };
            this.Qg = function () {
              d.Tc || ((d.Tc = !0), d.hd(d.hf), d.hd(d.He));
            };
            this.ug = function (e) {
              return P(
                function (f, g) {
                  var h = "page" === g.type && !g.frameId,
                    k = "eof" === g.data.type || "eof" === g.event,
                    l = h && !!g.partNum;
                  return { Yc: f.Yc || l, Xc: f.Xc || h, Wc: f.Wc || k };
                },
                { Xc: !1, Wc: !1, Yc: !1 },
                e
              );
            };
            this.ph = function (e, f, g) {
              g
                ? ((e = d.ke(d.Ua, e, f[0])),
                  d.rh() && (d.hd(d.Ua), (d.Ib = !0)))
                : ((d.Ib = !0), (e = d.send(e)));
              return e;
            };
            this.Xe = function (e, f, g) {
              var h;
              f = {
                J:
                  ((h = {}), (h["wv-part"] = "" + g), (h["wv-type"] = d.ji), h),
                K: Ea(),
                Z: { ba: f },
              };
              e && f.K.D("bt", 1);
              return f;
            };
            this.Jg = function (e, f, g) {
              e = d.Xe(!1, e, g);
              return d.Ib ? d.send(e) : d.ke(d.He, e, f);
            };
            this.Lh = function (e, f, g) {
              e = d.Xe(!0, e, g);
              if (d.Ib) return d.send(e);
              var h = d.ug(f);
              g = h.Xc;
              var k = h.Wc;
              h = h.Yc;
              var l;
              g && (l = d.ph(e, f, h));
              d.Tc
                ? g || (l = d.send(e))
                : (g || (l = d.ke(d.hf, e, f)), (d.Ib || k) && d.Qg());
              return l;
            };
            this.l = a;
            this.ji = b;
            this.sender = ra(a, "W", c);
            this.Bg = c;
          };
        })(),
        pl = u(
          function (a) {
            var c = H(a),
              b = c.C("isEU");
            if (Y(b)) {
              var d = Da(fe(a, "is_gdpr") || "");
              if (G(d, [0, 1])) c.D("isEU", d), (b = !!d);
              else if (((a = Va(a).C("wasSynced")), (a = n(a, "params.eu"))))
                c.D("isEU", a), (b = !!a);
            }
            return b;
          },
          function (a) {
            return H(a).C("isEU");
          }
        ),
        mf = A("i.e", pl),
        du = A("i.ep", function (a) {
          pl(a);
        }),
        eu = A("w2", function (a, c) {
          function b() {
            h = !0;
          }
          var d = H(a),
            e = J(c);
          if (
            !c.vb ||
            Yd(a) ||
            !a.MutationObserver ||
            !Oa("Element", a.Element)
          )
            return F;
          Oa("MutationObserver", a.MutationObserver) || hc(a, e).warn("w2mo");
          var f = Ba(function (k, l) {
              na(c, l)["catch"](k);
            }),
            g = pc(a)(Ag(E([a, c], hn)))(
              Kk(function (k) {
                return new bu(a, k);
              })
            ),
            h = !1;
          xq([g, f])(
            Xa(z(a, "wv2.R.c"), function (k) {
              var l = k[0];
              k = k[1];
              if (!h) {
                b = I(l.stop, l);
                var m = d.C("wv2Counter");
                if (!Rh(a, k) || m) b();
                else if (
                  (d.D("wv2Counter", e),
                  d.D("stopRecorder", b),
                  (k = ci(a, "7", "6")))
                ) {
                  m = new cu(a, c, k.type);
                  var p = ll.Se(e, "m", I(m.Lh, m), k, a),
                    q = ll.Se(e, "e", I(m.Jg, m), k, a);
                  "onpagehide" in a
                    ? ja(a).F(
                        a,
                        ["pagehide"],
                        function (t) {
                          t.persisted ? (p.flush(!0), q.flush(!0)) : b();
                        },
                        null
                      )
                    : ja(a).F(a, ["beforeunload", "unload"], b);
                  k = jn();
                  m = k.Oh;
                  q.F("ag", k.lg);
                  q.F("p", m);
                  p.F("see", function (t) {
                    var y = !1;
                    x(function (D) {
                      "page" === D.type && (y = !0);
                    }, t);
                    y &&
                      (h ||
                        q.push({
                          type: "event",
                          event: "fatalError",
                          data: {
                            code: "invalid-snapshot",
                            Kg: "p.s.f",
                            stack: "",
                          },
                        }),
                      b());
                  });
                  var r = Nc(function (t) {
                    "eof" === n(t, "data.type") || "eof" === t.event
                      ? (q.push(t), p.push(t), q.flush(!0), p.flush(!0))
                      : ("event" === t.type ? q : p).push(t);
                  });
                  U(a, b, 864e5);
                  Nb(a, function () {
                    var t, y;
                    nb(
                      a,
                      ((t = {}),
                      (t.counterKey = e),
                      (t.name = "webvisor"),
                      (t.data = ((y = {}), (y.version = 2), y)),
                      t)
                    );
                    l.start(r);
                  });
                }
              }
            })
          );
          return function () {
            return b();
          };
        }),
        fu = A("w2.cs", function (a, c) {
          var b,
            d = J(c);
          Kf(a, d, ((b = {}), (b.webvisor = !!c.vb), b));
        }),
        gu = ["rt", "mf"],
        lf = u(Cc, J),
        Lh = w(bd, rc),
        hu = pb("isp", function (a, c) {
          na(c, function (b) {
            var d = Ib(function (h) {
              return n(b, "settings." + h);
            }, gu);
            if (d && Dd(a)) {
              var e = ef(b) && !Td(a),
                f = lf(c);
              C(f, { Jb: d, status: e ? 3 : 4 });
              if (!e) {
                e = dn(a, c, d);
                var g = function (h) {
                  f.status = h;
                };
                return ("mf" === d ? fn : en)(a, c, e)
                  .then(v(1, g))
                  ["catch"](v(2, g));
              }
            }
          })["catch"](z(a, "l.isp"));
        }),
        ql = A("fbq.o", function (a, c, b) {
          var d = n(a, "fbq");
          if (d && d.callMethod) {
            var e = function () {
              var g = Ja(arguments),
                h = d.apply(void 0, g);
              c(g);
              return h;
            };
            C(e, d);
            b && x(c, b);
            a.fbq = e;
          } else var f = U(a, E([a, c].concat(Ma(d && d.queue)), ql), 1e3, "fbq.d");
          return I(la, null, a, f);
        }),
        Vc,
        Bb,
        Wc,
        Xg =
          ((Vc = {}),
          (Vc.add_to_wishlist = "add-to-wishlist"),
          (Vc.begin_checkout = "begin-checkout"),
          (Vc.generate_lead = "submit-lead"),
          (Vc.add_payment_info = "add-payment-info"),
          Vc),
        Yg =
          ((Bb = {}),
          (Bb.AddToCart = "add-to-cart"),
          (Bb.Lead = "submit-lead"),
          (Bb.InitiateCheckout = "begin-checkout"),
          (Bb.Purchase = "purchase"),
          (Bb.CompleteRegistration = "register"),
          (Bb.Contact = "submit-contact"),
          (Bb.AddPaymentInfo = "add-payment-info"),
          (Bb.AddToWishlist = "add-to-wishlist"),
          (Bb.Subscribe = "subscribe"),
          Bb),
        bn =
          ((Wc = {}),
          (Wc["1"] = Xg),
          (Wc["2"] = Xg),
          (Wc["3"] = Xg),
          (Wc["0"] = Yg),
          Wc),
        cn = [Yg.AddToCart, Yg.Purchase],
        iu = ua(function (a, c) {
          var b = n(c, "ecommerce"),
            d = n(c, "event") || "";
          if (!(b = b && d && { version: "3", dc: d }))
            a: {
              if (O(c) || Za(c))
                if (((b = Ja(c)), (d = b[1]), "event" === b[0] && d)) {
                  b = { version: "2", dc: d };
                  break a;
                }
              b = void 0;
            }
          b ||
            (b = (b = n(c, "ecommerce")) && {
              version: "1",
              dc: L(",", ea(b)),
            });
          b && a(b);
        }),
        ju = A("ag.e", function (a, c) {
          if ("0" === c.aa) {
            var b = [],
              d = z(a, "ag.s", E([qa, b], x));
            na(c, function (e) {
              if (
                n(e, "settings.auto_goals") &&
                Ca(a, c) &&
                (e = ne(a, c, "autogoal").reachGoal)
              ) {
                e = E([e, c.fd], an);
                var f = iu(e);
                e = E([a, e], $m);
                b.push(ql(a, e));
                b.push(
                  Fi(a, "dataLayer", function (g) {
                    g.xa.F(f);
                  })
                );
              }
            });
            return d;
          }
        }),
        ku = /[^\d.,]/g,
        lu = /[.,]$/,
        Ym = A("ep.pp", function (a, c) {
          if (!c) return 0;
          a: {
            var b = c.replace(ku, "").replace(lu, "");
            var d = "0" === b[b.length - 1];
            for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
              var f = b[e - 1];
              if (G(f, [",", "."])) {
                d = f;
                break a;
              }
            }
            d = "";
          }
          b = d ? c.split(d) : [c];
          d = d ? b[1] : "00";
          b = parseFloat(Vd(b[0]) + "." + Vd(d));
          d = Math.pow(10, 8) - 0.01;
          a.isNaN(b)
            ? (b = 0)
            : ((b = a.Math.min(b, d)), (b = a.Math.max(b, 0)));
          return b;
        }),
        mu = [
          [["EUR", "\u20ac"], "978"],
          [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"],
          [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"],
          [
            "\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(
              " "
            ),
            "398",
          ],
          [["GBP", "\u00a3", "UKL"], "826"],
          [
            "RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(
              " "
            ),
            "643",
          ],
        ],
        nu = u(function (a) {
          return new RegExp(L("|", a), "i");
        }),
        ou = A("ep.cp", function (a) {
          if (!a) return "643";
          var c = Tr(a);
          return (a = Ib(function (b) {
            return nu(b[0]).test(c);
          }, mu))
            ? a[1]
            : "643";
        }),
        pu = u(function () {
          function a() {
            var k = h + "0",
              l = h + "1";
            f[k]
              ? f[l]
                ? ((h = h.slice(0, -1)), --g)
                : ((e[l] = b(8)), (f[l] = 1))
              : ((e[k] = b(8)), (f[k] = 1));
          }
          function c() {
            var k = h + "1";
            f[h + "0"]
              ? f[k]
                ? ((h = h.slice(0, -1)), --g)
                : ((h += "1"), (f[h] = 1))
              : ((h += "0"), (f[h] = 1));
          }
          function b(k) {
            void 0 === k && (k = 1);
            var l = d.slice(g, g + k);
            g += k;
            return l;
          }
          for (
            var d = L(
                "",
                Jh(
                  "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=="
                )
              ),
              e = {},
              f = {},
              g = 1,
              h = "";
            g < d.length - 1;

          )
            ("0" === b() ? c : a)();
          return e;
        }),
        Vm = A("ep.dec", function (a, c) {
          if (!c || Yd(a)) return [];
          var b = Jh(c),
            d = b[1],
            e = b[2],
            f = b.slice(3);
          if (2 !== ie(b[0])) return [];
          b = pu();
          f = L("", f);
          e = ie(d + e);
          var g = "";
          d = "";
          for (var h = 0; d.length < e && f[h]; )
            (g += f[h]),
              b[g] && ((d += String.fromCharCode(ie(b[g]))), (g = "")),
              (h += 1);
          b = "";
          for (f = 0; f < d.length; )
            (e = d.charCodeAt(f)),
              128 > e
                ? ((b += String.fromCharCode(e)), f++)
                : 191 < e && 224 > e
                ? ((g = d.charCodeAt(f + 1)),
                  (b += String.fromCharCode(((e & 31) << 6) | (g & 63))),
                  (f += 2))
                : ((g = d.charCodeAt(f + 1)),
                  (b += String.fromCharCode(
                    ((e & 15) << 12) |
                      ((g & 63) << 6) |
                      (d.charCodeAt(f + 2) & 63)
                  )),
                  (f += 3));
          d = Gb(a, b);
          return O(d) ? B(cr, d) : [];
        }),
        Xm = A("ep.ent", function (a, c, b) {
          a = "" + Sa(a, 10, 99);
          b = "" + 100 * c + b + a;
          if (16 < Za(b)) return "";
          b = Kh("0", 16, b);
          c = b.slice(0, 8);
          b = b.slice(-8);
          c = (+c ^ 92844).toString(35);
          b = (+b ^ 92844).toString(35);
          return "" + c + "z" + b;
        }),
        rl = w(Ih, ou),
        sl = A("ep.ctp", function (a, c, b, d) {
          var e = rl(a, b),
            f = Hh(a, d);
          Gh(a, c, e, f);
          Oa("MutationObserver", a.MutationObserver) &&
            new a.MutationObserver(function () {
              var g = rl(a, b),
                h = Hh(a, d);
              if (e !== g || f !== h) (e = g), (f = h), Gh(a, c, e, f);
            }).observe(a.document.body, {
              attributes: !0,
              childList: !0,
              subtree: !0,
              characterData: !0,
            });
        }),
        qu = A("ep.chp", function (a, c, b, d, e) {
          b && kf(a, c);
          return d || e
            ? ja(a).F(
                a.document,
                ["click"],
                z(a, "ep.chp.cl", E([a, c, d, e], Wm))
              )
            : F;
        }),
        vu = A("ep.i", function (a, c) {
          if (Wd(a))
            return Um(a, c).then(function (b) {
              var d = b.Fg,
                e = d[0],
                f = d[1],
                g = d[2],
                h = d[3],
                k = d[4],
                l = d[5],
                m = d[6],
                p = d[7],
                q = d[8],
                r = d[9],
                t = d[10],
                y = d[11],
                D = d[12],
                N = d[13],
                M = d[14],
                sa = d[15];
              if (!b.isEnabled) return K.resolve(F);
              var ta = $d(a, e),
                Qa = $d(a, h),
                Mg = $d(a, m),
                ru = $d(a, q),
                su = "" + e + f + g === "" + h + k + l;
              return new K(function (tu, uu) {
                pc(a)(
                  Xa(uu, function () {
                    ta && sl(a, c, f, g, t, y, D);
                    Qa && !su && sl(a, c, k, l, N, M, sa);
                    tu(qu(a, c, Mg || ru, p, r));
                  })
                );
              });
            });
        }),
        wu = A("cc.i", function (a, c) {
          var b = E([a, c], Tm);
          b = E([a, b, 300, void 0], U);
          na(c, b);
        }),
        xu = v("9-d5ve+.r%7", S),
        yu = A("ad", function (a, c) {
          if (!c.Sa) {
            var b = H(a);
            if (!b.C("adBlockEnabled")) {
              var d = function (m) {
                  G(m, ["2", "1"]) && b.D("adBlockEnabled", m);
                },
                e = Kc(a),
                f = e.C("isad");
              if (f) d(f);
              else {
                var g = v("adStatus", b.D),
                  h = function (m) {
                    m = m ? "1" : "2";
                    d(m);
                    g("complete");
                    e.D("isad", m, 1200);
                    return m;
                  },
                  k = ra(a, "adb", c);
                if (!b.C("adStatus")) {
                  g("process");
                  var l = "metrika/a" + xu().replace(/[^a-v]+/g, "") + "t.gif";
                  Qm(a, function () {
                    return k({ ia: { ya: l } })
                      .then(v(!1, h))
                      ["catch"](v(!0, h));
                  });
                }
              }
            }
          }
        }),
        zu = A("pr.p", function (a, c) {
          var b, d;
          if (Yf(a)) {
            var e = ra(a, "5", c),
              f = Ea(((b = {}), (b.pq = 1), (b.ar = 1), b));
            e(
              {
                K: f,
                J:
                  ((d = {}),
                  (d["page-url"] = R(a).href),
                  (d["page-ref"] = n(a, "document.referrer") || ""),
                  d),
              },
              c
            )["catch"](z(a, "pr.p.s"));
          }
        }),
        Fh = !1,
        Au = A("fid", function (a) {
          var c,
            b = F;
          if (!V(a.PerformanceObserver)) return b;
          var d = H(a);
          if (d.C("fido")) return b;
          d.D("fido", !0);
          var e = new a.PerformanceObserver(
            z(a, "fid", function (f) {
              f = f.getEntries()[0];
              d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
              b();
            })
          );
          b = function () {
            return e.disconnect();
          };
          try {
            e.observe(
              ((c = {}), (c.type = "first-input"), (c.buffered = !0), c)
            );
          } catch (f) {}
          return b;
        }),
        Bu = A(
          "lt.p",
          pb("lt.p", function (a) {
            var c;
            if (Oa("PerformanceObserver", a.PerformanceObserver)) {
              var b = 0,
                d = new a.PerformanceObserver(
                  z(a, "lt.o", function (e) {
                    e &&
                      e.getEntries &&
                      ((e = e.getEntries()),
                      (b = P(
                        function (f, g) {
                          return f + g.duration;
                        },
                        b,
                        e
                      )),
                      Ad(a).D("lt", b));
                  })
                );
              try {
                d.observe(
                  ((c = {}), (c.type = "longtask"), (c.buffered = !0), c)
                );
              } catch (e) {
                return;
              }
              return function () {
                return d.disconnect();
              };
            }
          })
        );
      v(Ka("ccf"), Ra);
      var Zg = u(function (a, c) {
          var b = H(a),
            d = Va(a),
            e = [],
            f = E([a, c, b, d], ap),
            g = !Us(a) || ff(a, 68);
          g && e.push(E([Om, "pu", ""], f));
          !g ||
            d.Bd ||
            Dd(a) ||
            (e.push(E([Nm, "zzlc", "na"], f)), e.push(E([Mm, "cc", ""], f)));
          return e.length
            ? {
                ma: function (h, k) {
                  if (0 === b.C("isEU"))
                    try {
                      x(me, e);
                    } catch (l) {}
                  k();
                },
                O: function (h, k) {
                  var l = h.K;
                  if (l && 0 === b.C("isEU"))
                    try {
                      x(Ba(l), e);
                    } catch (m) {}
                  k();
                },
              }
            : {};
        }, w(eb, J)),
        Lm = cb(/[a-z\u0430-\u044f\u0451,.]/gi),
        Cu = A("ice", function (a, c, b) {
          (c = Ca(a, c)) && (b = yh(a, b)) && xh(a, c, b);
        }),
        Du = A("ice", function (a, c, b) {
          (c = Ca(a, c)) &&
            (b = yh(a, b)) &&
            Ui(a, b.Ah).then(E([a, c, b], xh), z(a, "ice.s"));
        }),
        Eu = ["text", "email", "tel"],
        Fu = ["cc-", "name", "shipping"],
        Gu = A("icei", function (a, c) {
          if (Sk(a)) {
            var b = !1,
              d = F,
              e = F;
            na(c, function (f) {
              if (!(mf(a) || n(f, "settings.eu") || b)) {
                f = n(f, "settings.cf") ? Du : Cu;
                var g = E([a, c], f),
                  h = function (k) {
                    return vf(a, k) ||
                      !G(k.type, Eu) ||
                      Wa(yb, B(v(k.autocomplete, gb), Fu))
                      ? !1
                      : !0;
                  };
                d = Bh(a, "input", ["blur"], g, h);
                e = Bh(a, "form", ["submit"], function (k) {
                  var l = k.target;
                  l &&
                    ((l = hb("input", l)),
                    x(function (m) {
                      h(m) && g({ target: m, isTrusted: k.isTrusted, Ed: !0 });
                    }, l));
                });
              }
            });
            return function () {
              b = !0;
              d();
              e();
            };
          }
        }),
        wh,
        Hu = A("p.ai", function (a, c) {
          if (je(a) || bf(a))
            return na(c, function (b) {
              var d;
              if ((b = n(b, "settings.sbp")))
                return vh(a, C({}, b, ((d = {}), (d.c = c.id), d)), 10);
            });
        }),
        Iu =
          "architecture bitness model platformVersion uaFullVersion fullVersionList".split(
            " "
          ),
        tl = pb("uah", function (a) {
          if (
            !Oa(
              "getHighEntropyValues",
              n(a, "navigator.userAgentData.getHighEntropyValues")
            )
          )
            return K.reject("0");
          try {
            return a.navigator.userAgentData.getHighEntropyValues(Iu).then(
              function (c) {
                if (!ia(c)) throw "2";
                return c;
              },
              function () {
                throw "1";
              }
            );
          } catch (c) {
            return K.reject("3");
          }
        }),
        ul = new RegExp(
          L(
            "|",
            "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
              ";"
            )
          ).replace(/[./]/g, "\\$&")
        ),
        Em = u(function (a) {
          var c = vb(a);
          return (c = ul.test(c))
            ? K.resolve(c)
            : tl(a).then(function (b) {
                try {
                  return P(
                    function (d, e) {
                      return d || ul.test(e.brand);
                    },
                    !1,
                    b.brands
                  );
                } catch (d) {
                  return !1;
                }
              }, v(!1, S));
        }),
        oc = ["0", "1", "2", "3"],
        Gc = oc[0],
        af = oc[1],
        Ju = oc[2],
        vl = [
          "GDPR-ok-view-detailed-0",
          "GDPR-ok-view-detailed-1",
          "GDPR-ok-view-detailed-2",
          "GDPR-ok-view-detailed-3",
        ],
        th = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(vl),
        Ze =
          "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23"
            .split(" ")
            .concat(vl)
            .concat(["28", "29", "30", "31"]),
        Ku = "3 13 14 31 15 16 17 28".split(" "),
        Sd = w(Nc(T("ymetrikaEvent.type")), Br(nc(Ze))),
        Lu = {
          Hh: !0,
          url: "https://yastatic.net/s3/gdpr/v3/gdpr",
          nf: "",
          ff: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(
            " "
          ),
        },
        Hm = pb("gdpr", function (a, c, b, d, e) {
          function f(p) {
            c("10");
            b.F(th, function (q) {
              var r;
              q = q.type;
              l.Jf(((r = {}), (r.type = q), r));
              p({ value: uh(q) });
            });
          }
          var g = void 0 === e ? Lu : e;
          e = g.url;
          var h = g.nf,
            k = g.Hh;
          g = Km(a, g.ff, d.Ii);
          var l = Ud(a, d);
          if (!l) return K.resolve({ value: Gc, Dd: !0 });
          if (a._yaGdprLoaded)
            return new K(function (p) {
              c("7");
              f(p);
            });
          var m = Fc(a, { src: "" + e + (k ? "" : g) + h + ".js" });
          return new K(function (p, q) {
            m
              ? (c("7"),
                (m.onerror = function () {
                  var r;
                  c("9");
                  l.Jf(((r = {}), (r.type = "GDPR-ok-view-default"), r));
                  p(null);
                }),
                (m.onload = v(p, f)))
              : (c("9"), q(Ka("gdp.e")));
          });
        }),
        Xb,
        Jm =
          ((Xb = {}),
          (Xb["GDPR-ok"] = "ok"),
          (Xb["GDPR-ok-view-default"] = "ok-default"),
          (Xb["GDPR-ok-view-detailed"] = "ok-detailed"),
          (Xb["GDPR-ok-view-detailed-0"] = "ok-detailed-all"),
          (Xb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech"),
          (Xb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics"),
          (Xb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other"),
          Xb),
        Cm =
          "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(
            " "
          ),
        sh = [],
        ph = db("push", sh),
        Bm = u(function (a, c) {
          var b = c.C("gdpr");
          return G(b, oc) ? "-" + b : "";
        }),
        $g = u(md),
        Mu = u(function () {
          var a = P(
            function (c, b) {
              "ru" !== b && (c[b] = Pg + "." + b);
              return c;
            },
            {},
            hg
          );
          x(function (c) {
            a[c] = c;
          }, ea(Yk));
          a.com = Pg + ".com";
          return a;
        }),
        rm = u(function (a) {
          a = R(a).hostname;
          return (a = Ib(w(T("1"), Ar("test"), ob(qa)(a)), Ga(Yk))) && a[0];
        }),
        wl = (function (a, c) {
          return function (b, d) {
            var e = J(d);
            e = Mu(e);
            var f = pm(b, e),
              g = H(b),
              h = rb(b);
            return Dd(b) || Fe(b)
              ? {}
              : {
                  O: function (k, l) {
                    var m = k.K;
                    m = !(m && m.C("pv"));
                    if (h || m || !f.length) return l();
                    g.C("startSync")
                      ? $g(b).push(l)
                      : (g.D("startSync", !0),
                        E([b, f, F, !1], a)()
                          .then(l, w(jd(l), z(b, c)))
                          ["catch"](F));
                  },
                  ma: function (k, l) {
                    if (!n(k.xf, "settings.nss")) return l();
                    var m = k.K;
                    m = !(m && m.C("pv"));
                    if (h || m || !f.length) return l();
                    if (g.C("startSync")) $g(b).push(l);
                    else
                      return (
                        g.D("startSync", !0),
                        a(b, f, F, !0).then(l, w(jd(l), z(b, c)))
                      );
                  },
                };
          };
        })(function (a, c, b, d) {
          var e = ka(a),
            f = H(a),
            g = Va(a);
          b = Ig(a, "c");
          var h = Tb(a, b);
          return tb(
            function (k, l) {
              function m() {
                var r = g.C("synced");
                f.D("startSync", !1);
                r && ((r[l.Jh] = p), g.D("synced", r));
                r = $g(a);
                x(qa, r);
                Ge(r);
              }
              var p,
                q = h({ Z: { fa: ["sync.cook"], Ma: 1500 } }, [
                  wa.Oa +
                    "//" +
                    l.ri +
                    "/sync_cookie_image_check" +
                    (d ? "_secondary" : ""),
                ])
                  .then(function () {
                    p = e(mb);
                    m();
                  })
                  ["catch"](function () {
                    p = e(mb) - 1435;
                    m();
                  });
              q = v(q, S);
              return k.then(q);
            },
            K.resolve(),
            c
          )["catch"](z(a, "ctl"));
        }, "sy.c"),
        Cb,
        nm =
          ((Cb = {}),
          (Cb.brands = "chu"),
          (Cb.architecture = "cha"),
          (Cb.bitness = "chb"),
          (Cb.uaFullVersion = "chf"),
          (Cb.fullVersionList = "chl"),
          (Cb.mobile = "chm"),
          (Cb.model = "cho"),
          (Cb.platform = "chp"),
          (Cb.platformVersion = "chv"),
          Cb),
        km = u(function (a) {
          return tl(a).then(lm, om);
        }),
        Nu = pb("ot", function (a, c) {
          if (xe(a)) {
            var b = ja(a);
            return na(
              c,
              z(a, "ot.s", function (d) {
                if (n(d, "settings.oauth")) {
                  var e = [],
                    f = bd(a, c);
                  e.push(b.F(a, ["message"], z(a, "ot.m", v(f, jm))));
                  pc(a)(
                    Xa(
                      F,
                      z(a, "ot.b", function () {
                        function g(q) {
                          var r,
                            t = q.href;
                          t &&
                            Lg(t, "https://oauth.yandex.ru/") &&
                            !gb(t, "_ym_uid=") &&
                            ((t = gb(t, "?") ? "&" : "?"),
                            (q.href +=
                              "" +
                              t +
                              xc(((r = {}), (r._ym_uid = f), (r.mc = "v"), r))),
                            b.F(
                              q,
                              ["click"],
                              z(a, "ot.click", function () {
                                var y = "et=" + l(da);
                                q.href += "&" + y;
                              })
                            ));
                        }
                        var h,
                          k = a.document.body,
                          l = ka(a),
                          m = hb("a", k);
                        x(g, m);
                        if (Oa("MutationObserver", a.MutationObserver)) {
                          m = new a.MutationObserver(
                            z(
                              a,
                              "ot.m",
                              v(function (q) {
                                q = q.addedNodes;
                                for (var r = 0; r < q.length; r += 1) {
                                  var t = q[r];
                                  "A" === t.nodeName && g(t);
                                }
                              }, x)
                            )
                          );
                          var p =
                            ((h = {}), (h.childList = !0), (h.subtree = !0), h);
                          m.observe(k, p);
                          e.push(I(m.disconnect, m));
                        }
                      })
                    )
                  );
                  return E([me, e], x);
                }
              })
            );
          }
        }),
        Ou = A("p.cta", function (a) {
          pc(a)(
            Xa(F, function () {
              var c = H(a);
              if (hm(a.document)) {
                var b = 0;
                if (Mh(a, ce, "cta")) {
                  var d = F,
                    e = function () {
                      Nh(ce, "cta");
                      d();
                      la(a, b);
                    };
                  d = ja(a).F(a, ["message"], A("p.cta.o", E([a, c, e], im)));
                  b = U(a, e, 1500);
                } else c.D("cta.e", "if");
              } else c.D("cta.e", "ns");
            })
          );
        }),
        mh = [
          "bidResponse",
          "bidAdjustment",
          "bidWon",
          "bidRequested",
          "bidTimeout",
        ],
        lh = ["adRenderSucceeded", "adRenderFailed"],
        dm = [
          "cpm",
          "currency",
          "netRevenue",
          "requestTimestamp",
          "responseTimestamp",
        ],
        cm = lc(mh, lh, ["auctionInit", "auctionEnd"]),
        pa = {},
        Pu = A("pj", function (a, c) {
          var b,
            d = Ca(a, c),
            e = d && d.params;
          return e
            ? ((b = {}),
              (b.pbjs = function (f) {
                O(f) &&
                  ((f = ha(
                    yb,
                    B(function (g) {
                      if (ia(g) && g.data && g.event && ia(g.data)) {
                        var h = n(g, "data.args");
                        return h ? { event: g.event, data: h } : g;
                      }
                    }, f)
                  )),
                  bm(f),
                  em(a, e));
              }),
              b)
            : F;
        }),
        $l = /(\D\d*)/g,
        am = u(function () {
          var a = Ef();
          return P(
            function (c, b) {
              c[a[b]] = b;
              return c;
            },
            {},
            ea(a)
          );
        }),
        Qu = A("g.v.e", function (a, c) {
          return na(
            c,
            z(a, "g.v.t", function (b) {
              var d = Ca(a, c);
              if (d && (b = n(b, "settings.goal_values"))) {
                var e = ha(w(T("url"), v(a, Vl)), b);
                if (0 !== e.length) {
                  b = ja(a);
                  var f = [];
                  e = E(
                    [
                      a,
                      function (g) {
                        var h, k;
                        return d.params(
                          ((h = {}),
                          (h.__ym = ((k = {}), (k.goal_values = g), k)),
                          h)
                        );
                      },
                      e,
                    ],
                    Yl
                  );
                  f.push(b.F(a, ["click"], z(a, "g.v.c", E([e], Wl))));
                  f.push(b.F(a, ["submit"], z(a, "g.v.s", E([a, e], Xl))));
                  return E([w(S, qa), f], x);
                }
              }
            })
          );
        }),
        Oe =
          "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(
            " "
          ),
        Ve = {},
        ih = F,
        Ru = u(function (a, c) {
          ih = c;
        }),
        Xc,
        Rl =
          ((Xc = {}),
          (Xc.copyFromWindow = function (a, c, b) {
            if (G(b, Oe) || Lg(b, "on")) throw Na("rwp");
            c = a[b];
            if (ba(c) || ec(a, c) || fa(c) || V(c)) return c;
            if (O(c)) return zd(c);
            if (ia(c)) return Ul(c);
          }),
          (Xc.loadScript = function (a, c, b, d, e) {
            c = V(d)
              ? Ue("ls.ol", function () {
                  return d.apply(null);
                })
              : F;
            var f = V(e)
              ? Ue("ls.ol", function () {
                  return e.apply(null);
                })
              : void 0;
            Sl(a, b, c, f);
          }),
          (Xc.callFromWindow = function (a, c, b) {
            for (var d = [], e = 3; e < arguments.length; e++)
              d[e - 3] = arguments[e];
            if (G(b, Oe)) throw Na("rwp");
            e = n(a, b);
            if (!V(e)) throw Na("wenf");
            return e.apply(void 0, d);
          }),
          (Xc.createArgumentsQueue = function (a, c, b, d) {
            function e() {
              for (var g = 0; g < arguments.length; g++);
              f.push(arguments);
            }
            if (0 !== b.length && 0 !== d.length && !n(a, b) && !n(a, d)) {
              c = b.split(".");
              d = d.split(".");
              if (G(c[0], Oe) || G(d[0], Oe)) throw Na("rwp");
              var f = [];
              jh(a, c)[c[c.length - 1]] = e;
              jh(a, d)[d[d.length - 1]] = f;
              return e;
            }
          }),
          Xc),
        Su = ["ymab", "rcmx", "yaSurvey", "ym_debug"],
        gh = u(function (a) {
          Ru(a, function (c, b) {
            Hc(a, "ytm." + c, b);
          });
          return function (c) {
            Kl(c) &&
              x(function (b) {
                if (O(b) && 1 === b[0]) {
                  var d = b[1];
                  G(d, Su) && Ue("p." + d, Ll)(a, b);
                }
              }, c.code);
          };
        }),
        Tu = A("y.t.m", function (a, c) {
          return na(
            c,
            z(a, "y.t.t", function (b) {
              if ((b = n(b, "settings.aytm"))) (b = Gb(a, b)), gh(a)(b);
            })
          );
        }),
        Uu = A("p.ips", function (a, c) {
          na(c, function (b) {
            (n(b, "settings.phchange") || n(b, "settings.phhide")) &&
              eh(a, "tag_phone", J(c), b);
          });
        }),
        xl = {},
        yl = u(Cc),
        Jl = w(db("exec", /counterID=(\d+)/), T("1")),
        zl = ua(function (a, c) {
          var b,
            d = yl(a),
            e = Ma(c),
            f = e[0],
            g = e[1],
            h = e.slice(2);
          if (g) {
            e = Il(a, f);
            var k = e[0],
              l = e[1];
            e = J(l);
            d[e] || (d[e] = {});
            d = d[e];
            c.Je ||
              (xl[g] &&
                P(
                  function (m, p) {
                    return m || !!p(a, l, h, k);
                  },
                  !1,
                  xl[g]
                )) ||
              ("init" === g
                ? ((c.Je = !0),
                  k
                    ? Db(a, "" + f, "dc", ((b = {}), (b.key = f), b))
                    : (a["yaCounter" + l.id] = new a.Ya[wa.Xb](C({}, h[0], l))))
                : k && k[g] && d.xh
                ? (k[g].apply(k, h), (c.Je = !0))
                : ((b = d.Nf),
                  b || ((b = []), (d.Nf = b)),
                  b.push(xa([f, g], h))));
          }
        }),
        Gl = A("destruct.e", function (a, c, b) {
          return function () {
            var d = H(a),
              e = c.id;
            x(function (f, g) {
              return V(f) && z(a, "dest.fr." + g, f)();
            }, b);
            Hl(a, J(c));
            delete d.C("counters")[J(c)];
            delete a["yaCounter" + e];
          };
        }),
        Yc = H(window);
      Yc.Ea("hitParam", {});
      Yc.Ea("lastReferrer", window.location.href);
      (function () {
        X.push(function (a, c) {
          var b;
          return (
            (b = {}),
            (b.firstPartyParams = ms(a, c)),
            (b.firstPartyParamsHashed = Kp(a, c)),
            b
          );
        });
        Ed.push("fpp");
        Ed.push("fpmh");
      })();
      (function () {
        var a = H(window);
        a.Ea("getCounters", ns(window));
        Nd.push(os);
        yg.push(function (c, b) {
          b.counters = a.C("getCounters");
        });
      })();
      (function () {
        X.push(function (a, c) {
          var b;
          nb(
            a,
            ((b = {}),
            (b.counterKey = J(c)),
            (b.name = "counter"),
            (b.data = Oj(c)),
            b)
          );
        });
      })();
      za["1"] = jb;
      X.push(ps);
      ya["1"] = kc;
      zb(Jf, -1);
      Rb["1"] = [
        [Jf, -1],
        [Ce, 1],
        [we, 2],
        [Lb(), 3],
        [$i, 4],
      ];
      X.push(qs);
      X.push(
        A("p.ar", function (a, c) {
          var b,
            d = ra(a, "a", c);
          return (
            (b = {}),
            (b.hit = function (e, f, g, h, k, l) {
              var m,
                p,
                q,
                r = { J: {}, K: Ea(((m = {}), (m.pv = 1), (m.ar = 1), m)) };
              f = ia(f)
                ? {
                    title: f.title,
                    sf: f.referer,
                    T: f.params,
                    Sb: f.callback,
                    l: f.ctx,
                  }
                : { title: f, sf: g, T: h, Sb: k, l: l };
              h = od(c);
              g = e || R(a).href;
              h.url !== g && ((h.ref = h.url), (h.url = e));
              e = f.sf || h.ref || a.document.referrer;
              h = fc(
                a,
                c,
                "pv",
                ((p = {}), (p.id = c.id), (p.url = g), (p.ref = e), p),
                f.T
              );
              p = C(r.M || {}, { T: f.T, title: f.title });
              r = d(
                C(r, {
                  M: p,
                  J: C(
                    r.J || {},
                    ((q = {}), (q["page-url"] = g), (q["page-ref"] = e), q)
                  ),
                }),
                c
              ).then(h);
              return Lc(a, "p.ar.s", r, f.Sb || F, f.l);
            }),
            b
          );
        })
      );
      za.a = jb;
      Rb.a = Sb;
      ya.a = Rk;
      X.push(ne);
      za.g = jb;
      ya.g = kc;
      Rb.g = Sb;
      X.push(rs);
      X.push(ss);
      Rb.t = Sb;
      za.t = jb;
      ya.t = kc;
      X.push(
        A("cl.p", function (a, c) {
          function b(p, q, r, t) {
            void 0 === t && (t = {});
            r
              ? pe(a, c, { url: r, jb: !0, qc: p, vc: q, sender: e, Zf: t })
              : h.warn("clel");
          }
          var d,
            e = ra(a, "2", c),
            f = [],
            g = J(c),
            h = hc(a, g),
            k = z(a, "s.s.tr", v(te(a, g), Cp));
          g = {
            l: a,
            ab: c,
            Mg: f,
            sender: e,
            Xi: H(a),
            Ag: Rc(a, c.id),
            Zi: wc(a),
            yi: v(v(g, Ke(a)), w(qa, T("trackLinks"))),
          };
          g = z(a, "cl.p.c", v(g, zp));
          g = ja(a).F(a, ["click"], g);
          c.Tf && k(c.Tf);
          var l = z(a, "file.clc", E([!0, !1], b)),
            m = z(a, "e.l.l.clc", E([!1, !0], b));
          f = z(a, "add.f.e.clc", ts(f));
          return (
            (d = {}),
            (d.file = l),
            (d.extLink = m),
            (d.addFileExtension = f),
            (d.trackLinks = k),
            (d.u = g),
            d
          );
        })
      );
      Rb["2"] = Sb;
      za["2"] = jb;
      ya["2"] = kc;
      za.r = xd("r");
      ya.r = Rk;
      Ua.push(
        A("p.r", function (a, c) {
          var b = vs(a),
            d = ra(a, "r", c),
            e = z(a, "rts.p");
          return na(
            c,
            E(
              [
                function (f, g) {
                  var h = { id: g.zg, aa: g.aa },
                    k = {
                      Z: { ba: g.Yh },
                      K: Ea(g.og),
                      J: g.T,
                      M: { Kb: g.Kb },
                      ia: { ya: g.ya },
                    };
                  g.Fa && (k.Fa = df(g.Fa));
                  h = d(k, h)["catch"](e);
                  return f.then(v(h, S));
                },
                K.resolve(),
                b,
              ],
              P
            )
          )["catch"](e);
        })
      );
      Z(
        "r",
        function (a) {
          return {
            O: function (c, b) {
              var d = c.K,
                e = void 0 === d ? Ea() : d,
                f = c.M.Kb,
                g = nd(a);
              d = e.C("rqnl", 0) + 1;
              e.D("rqnl", d);
              if ((e = n(g, L(".", [f, "browserInfo"])))) (e.rqnl = d), Hf(a);
              b();
            },
            ma: function (c, b) {
              Ki(a, c);
              b();
            },
          };
        },
        1
      );
      zb(oe, 100);
      Z("1", oe, 100);
      X.push(ws);
      Z("n", Ce, 1);
      Z("n", we, 2);
      Z("n", Lb(), 3);
      Z("n", oe, 100);
      za.n = jb;
      ya.n = kc;
      ic({ Be: { ca: "accurateTrackBounce" } });
      X.push(xs);
      za.m = xd("cm");
      ya.m = is;
      Z("m", Lb(["u", "v", "vf"]), 1);
      Z("m", oe, 2);
      ic({ wg: { ca: "clickmap" } });
      X.push(ys);
      X.push(zs);
      X.push(As);
      X.push(Bs);
      (function () {
        X.push(Cs);
        Ed.push("ecommerce");
        ic({
          fd: {
            ca: "ecommerce",
            La: function (a) {
              if (a) return !0 === a ? "dataLayer" : "" + a;
            },
          },
        });
      })();
      Ua.push(Es);
      X.push(Fs);
      Ed.push("user_id");
      X.push(Gs);
      zb(function (a, c) {
        return {
          ma: function (b, d) {
            var e = Ca(a, c);
            e = e && e.userParams;
            var f = (b.M || {}).ve;
            e && f && e(f);
            d();
          },
        };
      }, 0);
      Ee.push("_ym_debug");
      Fd.unshift(Js);
      X.push(Ks);
      Fd.push(function (a) {
        var c = H(a);
        c.C("i") || (c.D("i", !0), ja(a).F(a, ["message"], v(a, cp)));
      });
      (function () {
        var a,
          c = ((a = {}), (a.tp = w(eb, Pj, Jb)), (a.tpid = w(eb, Oq)), a);
        C(sd, c);
      })();
      zb(ld, 20);
      Z("n", ld, 20);
      Z("1", ld, 20);
      Fd.unshift(Ms);
      sd.fp = function (a, c, b) {
        if (b.J && b.J.nohit) return null;
        b = H(a).C;
        if (!b("fpe")) return null;
        c = Ls(c);
        if (c.Pg) return null;
        b = b("fht", Infinity);
        a: {
          var d = n(a, "performance.getEntriesByType");
          if (V(d)) {
            if (
              ((a = ha(
                w(S, T("name"), Aa("first-contentful-paint")),
                d.call(a.performance, "paint")
              )),
              a.length)
            ) {
              a = a[0].startTime;
              break a;
            }
          } else {
            var e = n(a, "chrome.loadTimes");
            d = Ok(a);
            if (
              V(e) &&
              ((e = e.call(a.chrome)), (e = n(e, "firstPaintTime")), d && e)
            ) {
              a = 1e3 * e - d;
              break a;
            }
            if ((a = n(a, "performance.timing.msFirstPaint"))) {
              a -= d;
              break a;
            }
          }
          a = void 0;
        }
        return a && b > a ? ((c.Pg = a), Math.round(a)) : null;
      };
      X.push(function (a, c) {
        var b;
        return (
          (b = {}),
          (b.ecommerceAdd = A("ecm.a", Os(a, c))),
          (b.ecommerceRemove = A("ecm.r", Ps(a, c))),
          (b.ecommerceDetail = A("ecm.d", Qs(a, c))),
          (b.ecommercePurchase = A("ecm.p", Rs(a, c))),
          b
        );
      });
      (function () {
        var a,
          c = {};
        c.bu = Xs;
        c.pri = Qo;
        c.wv = v(2, S);
        c.ds = To;
        c.co = function (b) {
          return sb(H(b).C("jn"));
        };
        c.td = ct;
        C(
          c,
          ((a = {}),
          (a.iss = w(Lr, Jb)),
          (a.hdl = w(Mr, Jb)),
          (a.iia = w(Nr, Jb)),
          (a.cpf = w(Ws, Jb)),
          (a.ntf = u(function (b) {
            b = n(b, "Notification.permission");
            b = "denied" === b ? !1 : "granted" === b ? !0 : null;
            return $a(b) ? null : b ? 2 : 1;
          })),
          (a.eu = Wb("isEU")),
          (a.ns = Ok),
          (a.np = function (b) {
            return Sa(b, 0, 100) ? null : Zc(Pd(Ya(Af(b), 100)));
          }),
          a)
        );
        c.pani = Ys;
        c.pci = Zs;
        c.si = $s;
        c.gi = at;
        C(sd, c);
      })();
      (function () {
        var a = {};
        a.oo = Wb("oo");
        a.pmc = Wb("cmc");
        a.lt = function (c) {
          var b = Ad(c).C("lt", null);
          return b ? c.Math.round(100 * b) : b;
        };
        a.re = w(kq, Jb);
        a.aw = function (c) {
          c = Ib(w(ba, zc), [
            c.document.hidden,
            c.document.msHidden,
            c.document.webkitHidden,
          ]);
          return ba(c) ? null : sb(!c);
        };
        a.rcm = ft;
        a.yu = function (c) {
          return (c = Rd(c, "").C("yandexuid")) && c.substring(0, 25);
        };
        a.ifc = Wb("ifc");
        a.ifb = Wb("ifb");
        a.ecs = Wb("ecs");
        a.csi = Wb("scip");
        a.cdl = Wb("cdl");
        a.eco = u(Oo, w(eb, J));
        a.dss = Wb("dSync");
        C(Qf, a);
      })();
      ya.er = Tc;
      (function (a) {
        try {
          var c = Ig(a, "er"),
            b = Lo(a, c);
          Gj.push(function (d, e, f, g) {
            var h, k, l, m, p;
            0.01 >= a.Math.random() ||
              b(
                ((h = {}),
                (h[d] =
                  ((k = {}),
                  (k[wa.$a] =
                    ((l = {}),
                    (l[e] =
                      ((m = {}),
                      (m[f] = g
                        ? ((p = {}), (p[a.location.href] = g), p)
                        : a.location.href),
                      m)),
                    l)),
                  k)),
                h)
              );
          });
        } catch (d) {}
      })(window);
      (function () {
        Re.push(Po);
        ve.unshift(Ko);
        Og.push(function (a) {
          var c = void 0;
          void 0 === c && (c = !0);
          H(a).D("oo", c);
        });
      })();
      zb(function (a, c) {
        return {
          O: function (b, d) {
            var e = b.J,
              f = b.K;
            !al[c.id] &&
              f.C("pv") &&
              c.exp &&
              !e.nohit &&
              ((e.exp = c.exp), (al[c.id] = !0));
            d();
          },
        };
      }, -99);
      X.push(gt);
      Rb.e = Sb;
      za.e = jb;
      ya.e = kc;
      ic({ exp: { ca: "experiments" } });
      Wi.experiments = "ex";
      (function () {
        var a;
        qh.push(ht);
        za.f = jb;
        C(ya, ((a = {}), (a.f = Qk), a));
        Z("f", Lb(), 1);
        Z("f", dj, 2);
        Z("f", ld, 20);
      })();
      Re.push(function (a, c) {
        var b = { oa: J(c), $c: Ca(a, c), Sf: ka(a), Kd: Va(a) },
          d = b.Sf(mb);
        if (!b.Kd.Bd) {
          var e = b.Kd.C("ymoo" + b.oa);
          if (e && 30 > d - e)
            (b = b.oa), delete H(a).C("counters", {})[b], Ra(Ka("uws"));
          else na(c, it(b))["catch"](z(a, "d.f"));
        }
      });
      (function () {
        var a,
          c,
          b = [xb];
        C(ya, ((a = {}), (a.s = b), (a.S = b), (a.u = Tc), a));
        C(za, ((c = {}), (c.s = Tb), (c.S = jb), (c.u = Tb), c));
        Z("s");
        Z("u");
        Z("S", Lb(["v", "hid", "u", "vf", "rn"]), 1);
        X.push(A("s", vo));
      })();
      za["8"] = Tb;
      ya["8"] = [Pf];
      Pk.push([Pf, 0]);
      X.push(
        A("p.us", function (a, c) {
          return na(c, function (b) {
            if (n(b, "settings.sbp"))
              return oi(a, b, { ab: c, Jb: "8", Id: "cs" });
          });
        })
      );
      Z("p", Lb(Qg), 1);
      Cg(
        "pub",
        function (a, c) {
          return {
            O: function (b, d) {
              bi(a, c, b);
              d();
            },
          };
        },
        1
      );
      za.p = mt;
      ya.p = La([wb, xb]);
      Ua.push(qt);
      ic({
        vb: { ca: "webvisor", La: yb },
        Eg: { ca: "disableFormAnalytics", La: yb },
      });
      Z("4", Lb(Qg), 1);
      za["4"] = cl;
      ya["4"] = La([wb, xb, Mc]);
      Ua.push(wt);
      (function () {
        Z("W", Lb(Qg), 1);
        Cg("wv", Jn, 1);
        ya.W = La([wb, xb]);
        za.W = cl;
        Ua.push(eu);
        X.push(fu);
        ic({ vb: { ca: "webvisor" } });
        ic({ Ai: { ca: "trustedDomains" }, Vb: { ca: "childIframe", La: yb } });
        Og.push(function (a) {
          H(a).C("stopRecorder", F)();
        });
      })();
      X.push(hu);
      Z("pi");
      za.pi = Tb;
      ya.pi = Tc;
      Cg(
        "w",
        function (a, c) {
          return {
            O: function (b, d) {
              if (b.K) {
                var e = lf(c),
                  f = e.status;
                "rt" === e.Jb &&
                  f &&
                  (b.K.D("rt", f),
                  b.ia || (b.ia = {}),
                  (b.ia.th = 1 === f ? Lh(a, c) + "." : ""));
              }
              d();
            },
          };
        },
        2
      );
      X.push(ju);
      X.push(vu);
      ya["6"] = La([wb, xb]);
      za["6"] = Tb;
      X.push(wu);
      X.push(dt);
      (function () {
        yg.push(function (a, c) {
          c.informer = Rm(a);
        });
      })();
      zb(hf, 6);
      Z("1", hf, 6);
      Z("adb");
      Z("n", hf, 4);
      ya.adb = Tc;
      za.adb = tj;
      Nd.push(yu);
      ya["5"] = kc;
      za["5"] = jb;
      Rb["5"] = ha(w(pd, nc([Ce, we]), zc), Sb);
      X.push(zu);
      Z("5", ld, 20);
      zb(Eh, 7);
      Z("n", Eh, 6);
      Ua.push(Au);
      za.d = jb;
      Z("d", Lb(["hid", "u", "v", "vf"]), 1);
      ya.d = Tc;
      Z(
        "n",
        function (a, c) {
          return {
            ma: function (b, d) {
              if (!b.M || !b.M.force) {
                var e = 0.002,
                  f = c.id === wa.gg ? 1 : 0.002,
                  g,
                  h,
                  k,
                  l,
                  m;
                void 0 === e && (e = 1);
                void 0 === f && (f = 1);
                var p = kd(a);
                if (
                  p &&
                  V(p.getEntriesByType) &&
                  ((e = Math.random() > e), (f = Math.random() > f), !e || !f)
                ) {
                  p = p.getEntriesByType("resource");
                  for (
                    var q = {}, r = {}, t = {}, y = $k(), D = R(a).href, N = 0;
                    N < p.length;
                    N += 1
                  ) {
                    var M = p[N],
                      sa = M.name.replace(Zk, "").split("?")[0],
                      ta = rc(sa),
                      Qa =
                        ((g = {}),
                        (g.dns = Math.round(
                          M.domainLookupEnd - M.domainLookupStart
                        )),
                        (g.tcp = Math.round(M.connectEnd - M.connectStart)),
                        (g.duration = Math.round(M.duration)),
                        (g.response = Math.round(
                          M.responseEnd - M.requestStart
                        )),
                        g);
                    "script" !== M.initiatorType ||
                      e ||
                      (r[sa] = C(
                        Qa,
                        ((h = {}),
                        (h.name = M.name),
                        (h.decodedBodySize = M.decodedBodySize),
                        (h.transferSize = Math.round(M.transferSize)),
                        h)
                      ));
                    (!et[ta] && !y[ta]) ||
                      q[sa] ||
                      f ||
                      (q[sa] = C(Qa, ((k = {}), (k.pages = D), k)));
                  }
                  ea(q).length && (t.timings8 = q);
                  ea(r).length && (t.scripts = r);
                  if (ea(t).length)
                    ra(
                      a,
                      "d",
                      c
                    )(
                      {
                        K: Ea(((l = {}), (l.ar = 1), (l.pv = 1), l)),
                        Z: { ba: Hb(a, t) || void 0 },
                        J: ((m = {}), (m["page-url"] = D), m),
                      },
                      { id: wa.jg, aa: "0" }
                    )["catch"](z(a, "r.tim.ng2"));
                }
              }
              d();
            },
          };
        },
        7
      );
      ya.ci = [xb];
      za.ci = Tb;
      Ua.push(
        A("p.sci", function (a, c) {
          return na(c, v(a, Pm))["catch"](z(a, "ins.cs"));
        })
      );
      X.push(Bu);
      Ua.push(Vs);
      zb(Zg, 8);
      Z("f", Zg, 3);
      Z("n", Zg, 5);
      Z(
        "h",
        function (a) {
          return {
            ma: function (c, b) {
              var d = c.xf;
              Df(c) && d && H(a).D("isEU", n(d, "settings.eu"));
              b();
            },
          };
        },
        3
      );
      Nd.push(du);
      Ua.push(Gu);
      X.push(Hu);
      ic({ Hi: { ca: "yaDisableGDPR" }, Ii: { ca: "yaGDPRLang" } });
      ve.push(function (a, c) {
        return { O: E([a, c], xm) };
      });
      Ee.push("gdpr");
      Ee.push("gdpr_popup");
      gg.push(function (a, c) {
        var b = Qd(a);
        b = Sd(b);
        if (ha(nc(Ku), b).length) return !0;
        b = c(a, "gdpr");
        return G(b, [Gc, Ju]);
      });
      ve.push(function (a) {
        return {
          O: function (c, b) {
            var d = c.ia || {},
              e;
            (e = n(a, "document.referrer"))
              ? ((e = Ic(a, e).host), (e = Vi(e)), (e = Pg + "." + (e || jt)))
              : (e = bc);
            c.ia = C(d, { uh: [e] });
            b();
          },
        };
      });
      zb(wl, 5);
      Z("1", wl, 6);
      ya.c = Tc;
      za.c = Tb;
      Z("1", nh, 7);
      zb(nh, 7);
      Ua.push(A("p.ot", Nu));
      Ua.push(pb("cta", Ou, !0));
      Z(
        "n",
        function (a) {
          var c = H(a);
          return {
            O: function (b, d) {
              var e = b.M || {},
                f = c.C("cta"),
                g = c.C("cta.e");
              if (f || g) {
                e.T || (e.T = {});
                e.T.__ym || (e.T.__ym = {});
                var h = {};
                f
                  ? ((f = B(function (k) {
                      var l,
                        m = n(k, "topic");
                      k = n(k, "version");
                      return (l = {}), (l.topic = m), (l.version = k), l;
                    }, f)),
                    (h.ct = f))
                  : g && (h["ct.e"] = g);
                C(e.T.__ym, h);
                b.M = C(b.M || {}, e);
              }
              d();
            },
          };
        },
        7
      );
      Z("n", Jf, 8);
      X.push(Pu);
      X.push(Qu);
      Fd.push(
        A("cdl", function (a) {
          var c = H(a).Ea;
          if ((a = n(a, "navigator.cookieDeprecationLabel")))
            try {
              a.getValue().then(v("cdl", c), E(["cdl", "e"], c));
            } catch (b) {
              c("cdl", "d");
            }
          else c("cdl", "na");
        })
      );
      Ua.push(Tu);
      Ua.push(Uu);
      X.push(function (a, c) {
        var b = yl(a),
          d = J(c),
          e = b[d];
        e || ((e = {}), (b[d] = e));
        e.xh = !0;
        if ((b = e.Nf)) (d = zl(a)), x(d, b);
      });
      Ua.unshift(
        pb("is", function (a, c) {
          na(c, function (b) {
            (De(a) || n(b, "settings.sm")) && eh(a, "tag_debug", J(c), b);
          });
        })
      );
      x(ob(qa)(window), Fd);
      if (window.Ya && Pe) {
        var Al = wa.Xb;
        window.Ya[Al] = Pe;
        ls(window);
        x(w(Ec([window, window.Ya[Al]]), qa), yg);
      }
      (function (a) {
        var c = n(a, "ym");
        if (c) {
          var b = n(c, "a");
          b || ((c.a = []), (b = c.a));
          var d = zl(a);
          re(
            a,
            b,
            function (e) {
              e.xa.F(d);
            },
            !0
          );
        }
      })(window);
    })();
  } catch (Pe) {}
}).call(this);
