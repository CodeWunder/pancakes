"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1929], {
        61929: function(h, b, a) {
            a.r(b), a.d(b, {
                default: function() {
                    return q
                }
            });
            var i = a(26042),
                j = a(85893),
                d = a(67294),
                k = function(a) {
                    (0, d.useEffect)(function() {
                        var c = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", ],
                            d = 0,
                            b = function(b) {
                                if (b.key !== c[d]) {
                                    d = 0;
                                    return
                                }
                                d += 1, c.length === d && (d = 0, a())
                            };
                        return document.addEventListener("keyup", b),
                            function() {
                                return document.removeEventListener("keyup", b)
                            }
                    }, [a])
                },
                l = a(7297),
                m = a(29815),
                c = a(87379),
                n = a(14715);

            function e() {
                var a = (0, l.Z)(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"]);
                return e = function() {
                    return a
                }, a
            }

            function f() {
                var a = (0, l.Z)(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"]);
                return f = function() {
                    return a
                }, a
            }
            var g = (0, c.F4)(e()),
                o = c.ZP.div.withConfig({
                    componentId: "sc-5643275b-0"
                }).withConfig({
                    componentId: "sc-42120b2b-0"
                })(f(), function(a) {
                    var b = a.position;
                    return "".concat(b, "vw")
                }, g, function(a) {
                    var b = a.duration;
                    return "".concat(b, "s")
                }, function(b) {
                    var a = b.iterations;
                    return Number.isFinite(a) ? String(a) : "infinite"
                }, function(a) {
                    var b = a.duration;
                    return "".concat(b / 10 * 1.3, "s")
                }, function(a) {
                    var b = a.duration;
                    return "".concat(b / 10 * 1.5, "s")
                }, function(a) {
                    var b = a.duration;
                    return "".concat(b / 10 * 1.7, "s")
                }, function(a) {
                    var b = a.duration;
                    return "".concat(b / 10 * 2.7, "s")
                }, function(a) {
                    var b = a.duration;
                    return "".concat(b / 10 * 3.5, "s")
                }, function(a) {
                    var b = a.duration;
                    return "".concat(b / 10 * 5.5, "s")
                }, function(a) {
                    var b = a.duration;
                    return "".concat(b / 10 * 8, "s")
                }),
                p = function(a) {
                    var b = a.count,
                        c = a.size,
                        g = void 0 === c ? 32 : c,
                        d = a.iterations,
                        h = void 0 === d ? 1 / 0 : d,
                        e = a.duration,
                        i = void 0 === e ? 10 : e,
                        f = (0, m.Z)(Array(void 0 === b ? 30 : b)).map(function(b, a) {
                            return (0, j.jsx)(o, {
                                position: 100 * Math.random(),
                                iterations: h,
                                duration: i,
                                children: (0, j.jsx)(n.Z, {
                                    width: g,
                                    height: g
                                })
                            }, String(a))
                        });
                    return (0, j.jsx)("div", {
                        children: f
                    })
                },
                q = (0, d.memo)(function(b) {
                    var a = (0, d.useState)(!1),
                        c = a[0],
                        e = a[1],
                        f = (0, d.useCallback)(function() {
                            return e(!0)
                        }, [e]);
                    return (k(f), c) ? (0, j.jsx)("div", {
                        onAnimationEnd: function() {
                            return e(!1)
                        },
                        children: (0, j.jsx)(p, (0, i.Z)({}, b))
                    }) : null
                })
        }
    }
])
//# sourceMappingURL=1929.cacee879a61c6822.js.map