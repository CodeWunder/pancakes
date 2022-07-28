(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1036], {
        8273: function(c, a, b) {
            "use strict";
            b.r(a), b.d(a, {
                CountUp: function() {
                    return e
                }
            });
            var d = function() {
                    return (d = Object.assign || function(d) {
                        for (var a, b = 1, e = arguments.length; b < e; b++)
                            for (var c in a = arguments[b]) Object.prototype.hasOwnProperty.call(a, c) && (d[c] = a[c]);
                        return d
                    }).apply(this, arguments)
                },
                e = function() {
                    function a(a, b, c) {
                        var e = this;
                        this.endVal = b, this.options = c, this.version = "2.3.1", this.defaults = {
                            startVal: 0,
                            decimalPlaces: 0,
                            duration: 2,
                            useEasing: !0,
                            useGrouping: !0,
                            smartEasingThreshold: 999,
                            smartEasingAmount: 333,
                            separator: ",",
                            decimal: ".",
                            prefix: "",
                            suffix: "",
                            enableScrollSpy: !1,
                            scrollSpyDelay: 200,
                            scrollSpyOnce: !1
                        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(b) {
                            e.startTime || (e.startTime = b);
                            var a = b - e.startTime;
                            e.remaining = e.duration - a, e.useEasing ? e.countDown ? e.frameVal = e.startVal - e.easingFn(a, 0, e.startVal - e.endVal, e.duration) : e.frameVal = e.easingFn(a, e.startVal, e.endVal - e.startVal, e.duration) : e.countDown ? e.frameVal = e.startVal - (e.startVal - e.endVal) * (a / e.duration) : e.frameVal = e.startVal + (e.endVal - e.startVal) * (a / e.duration), e.countDown ? e.frameVal = e.frameVal < e.endVal ? e.endVal : e.frameVal : e.frameVal = e.frameVal > e.endVal ? e.endVal : e.frameVal, e.frameVal = Number(e.frameVal.toFixed(e.options.decimalPlaces)), e.printValue(e.frameVal), a < e.duration ? e.rAF = requestAnimationFrame(e.count) : null !== e.finalEndVal ? e.update(e.finalEndVal) : e.callback && e.callback()
                        }, this.formatNumber = function(g) {
                            i = Math.abs(g).toFixed(e.options.decimalPlaces);
                            var i, a, d, b, f = (i += "").split(".");
                            if (a = f[0], d = f.length > 1 ? e.options.decimal + f[1] : "", e.options.useGrouping) {
                                b = "";
                                for (var c = 0, h = a.length; c < h; ++c) 0 !== c && c % 3 == 0 && (b = e.options.separator + b), b = a[h - c - 1] + b;
                                a = b
                            }
                            return e.options.numerals && e.options.numerals.length && (a = a.replace(/[0-9]/g, function(a) {
                                return e.options.numerals[+a]
                            }), d = d.replace(/[0-9]/g, function(a) {
                                return e.options.numerals[+a]
                            })), (g < 0 ? "-" : "") + e.options.prefix + a + d + e.options.suffix
                        }, this.easeOutExpo = function(a, b, c, d) {
                            return c * (1 - Math.pow(2, -10 * a / d)) * 1024 / 1023 + b
                        }, this.options = d(d({}, this.defaults), c), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(b), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof a ? document.getElementById(a) : a, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, a) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                            return e.handleScroll(e)
                        }), window.onscroll = function() {
                            window.onScrollFns.forEach(function(a) {
                                return a()
                            })
                        }, this.handleScroll(this)))
                    }
                    return a.prototype.handleScroll = function(a) {
                        if (a && window && !a.once) {
                            var d = window.innerHeight + window.scrollY,
                                c = a.el.getBoundingClientRect(),
                                b = c.top + c.height + window.pageYOffset;
                            b < d && b > window.scrollY && a.paused ? (a.paused = !1, setTimeout(function() {
                                return a.start()
                            }, a.options.scrollSpyDelay), a.options.scrollSpyOnce && (a.once = !0)) : window.scrollY > b && !a.paused && a.reset()
                        }
                    }, a.prototype.determineDirectionAndSmartEasing = function() {
                        var a = this.finalEndVal ? this.finalEndVal : this.endVal;
                        if (this.countDown = this.startVal > a, Math.abs(a - this.startVal) > this.options.smartEasingThreshold) {
                            this.finalEndVal = a;
                            var b = this.countDown ? 1 : -1;
                            this.endVal = a + b * this.options.smartEasingAmount, this.duration = this.duration / 2
                        } else this.endVal = a, this.finalEndVal = null;
                        this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
                    }, a.prototype.start = function(a) {
                        this.error || (this.callback = a, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
                    }, a.prototype.pauseResume = function() {
                        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
                    }, a.prototype.reset = function() {
                        cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
                    }, a.prototype.update = function(a) {
                        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(a), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
                    }, a.prototype.printValue = function(b) {
                        var a = this.formattingFn(b);
                        "INPUT" === this.el.tagName ? this.el.value = a : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = a : this.el.innerHTML = a
                    }, a.prototype.ensureNumber = function(a) {
                        return "number" == typeof a && !isNaN(a)
                    }, a.prototype.validateValue = function(a) {
                        var b = Number(a);
                        return this.ensureNumber(b) ? b : (this.error = "[CountUp] invalid start or end value: ".concat(a), null)
                    }, a.prototype.resetDuration = function() {
                        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
                    }, a
                }()
        },
        69877: function(a) {
            var b = Math.floor,
                c = Math.random;
            a.exports = function(a, d) {
                return a + b(c() * (d - a + 1))
            }
        },
        7654: function(a, c, b) {
            var d = b(81763);
            a.exports = function(a) {
                return d(a) && a != +a
            }
        },
        81763: function(b, c, a) {
            var d = a(44239),
                e = a(37005);
            b.exports = function(a) {
                return "number" == typeof a || e(a) && "[object Number]" == d(a)
            }
        },
        13880: function(a, c, b) {
            var d = b(79833);
            a.exports = function() {
                var a = arguments,
                    b = d(a[0]);
                return a.length < 3 ? b : b.replace(a[1], a[2])
            }
        },
        17857: function(e, d, c) {
            "use strict";
            var a, b = c(67294),
                f = c(8273),
                g = (a = b) && "object" == typeof a && "default" in a ? a : {
                    default: a
                };

            function h(c, d) {
                var a = Object.keys(c);
                if (Object.getOwnPropertySymbols) {
                    var b = Object.getOwnPropertySymbols(c);
                    d && (b = b.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(c, a).enumerable
                    })), a.push.apply(a, b)
                }
                return a
            }

            function i(c) {
                for (var a = 1; a < arguments.length; a++) {
                    var b = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? h(Object(b), !0).forEach(function(a) {
                        j(c, a, b[a])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(b)) : h(Object(b)).forEach(function(a) {
                        Object.defineProperty(c, a, Object.getOwnPropertyDescriptor(b, a))
                    })
                }
                return c
            }

            function j(a, b, c) {
                return b in a ? Object.defineProperty(a, b, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[b] = c, a
            }

            function k() {
                return (k = Object.assign ? Object.assign.bind() : function(d) {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
                    }
                    return d
                }).apply(this, arguments)
            }

            function l(a, d) {
                if (null == a) return {};
                var b, c, e = function(c, f) {
                    if (null == c) return {};
                    var a, b, d = {},
                        e = Object.keys(c);
                    for (b = 0; b < e.length; b++) a = e[b], f.indexOf(a) >= 0 || (d[a] = c[a]);
                    return d
                }(a, d);
                if (Object.getOwnPropertySymbols) {
                    var f = Object.getOwnPropertySymbols(a);
                    for (c = 0; c < f.length; c++) b = f[c], !(d.indexOf(b) >= 0) && Object.prototype.propertyIsEnumerable.call(a, b) && (e[b] = a[b])
                }
                return e
            }
            var m = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? b.useLayoutEffect : b.useEffect;

            function n(a) {
                var c = b.useRef(a);
                return m(function() {
                    c.current = a
                }), b.useCallback(function() {
                    for (var b = arguments.length, d = Array(b), a = 0; a < b; a++) d[a] = arguments[a];
                    return c.current.apply(void 0, d)
                }, [])
            }
            var o = function(c, a) {
                    var d = a.decimal,
                        e = a.decimals,
                        g = a.duration,
                        h = a.easingFn,
                        i = a.end,
                        j = a.formattingFn,
                        k = a.numerals,
                        l = a.prefix,
                        b = a.separator,
                        m = a.start,
                        n = a.suffix,
                        o = a.useEasing,
                        p = a.enableScrollSpy,
                        q = a.scrollSpyDelay;
                    return new f.CountUp(c, i, {
                        startVal: m,
                        duration: g,
                        decimal: d,
                        decimalPlaces: e,
                        easingFn: h,
                        formattingFn: j,
                        numerals: k,
                        separator: b,
                        prefix: l,
                        suffix: n,
                        useEasing: o,
                        useGrouping: !!b,
                        enableScrollSpy: p,
                        scrollSpyDelay: q
                    })
                },
                p = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
                q = {
                    decimal: ".",
                    delay: null,
                    prefix: "",
                    suffix: "",
                    duration: 2,
                    start: 0,
                    startOnMount: !0,
                    enableReinitialize: !0
                },
                r = function(c) {
                    var a = b.useMemo(function() {
                            return i(i({}, q), c)
                        }, [c]),
                        s = a.ref,
                        t = a.startOnMount,
                        e = a.enableReinitialize,
                        f = a.delay,
                        u = a.onEnd,
                        v = a.onStart,
                        w = a.onPauseResume,
                        x = a.onReset,
                        y = a.onUpdate,
                        z = l(a, p),
                        A = b.useRef(),
                        B = b.useRef(),
                        g = b.useRef(!1),
                        C = n(function() {
                            return o("string" == typeof s ? s : s.current, z)
                        }),
                        h = n(function(c) {
                            var a = A.current;
                            if (a && !c) return a;
                            var b = C();
                            return A.current = b, b
                        }),
                        D = n(function() {
                            var a = function() {
                                return h(!0).start(function() {
                                    null == u || u({
                                        pauseResume: j,
                                        reset: d,
                                        start: m,
                                        update: k
                                    })
                                })
                            };
                            f && f > 0 ? B.current = setTimeout(a, 1e3 * f) : a(), null == v || v({
                                pauseResume: j,
                                reset: d,
                                update: k
                            })
                        }),
                        j = n(function() {
                            h().pauseResume(), null == w || w({
                                reset: d,
                                start: m,
                                update: k
                            })
                        }),
                        d = n(function() {
                            B.current && clearTimeout(B.current), h().reset(), null == x || x({
                                pauseResume: j,
                                start: m,
                                update: k
                            })
                        }),
                        k = n(function(a) {
                            h().update(a), null == y || y({
                                pauseResume: j,
                                reset: d,
                                start: m
                            })
                        }),
                        m = n(function() {
                            d(), D()
                        }),
                        r = n(function(a) {
                            t && (a && d(), D())
                        });
                    return b.useEffect(function() {
                        g.current ? e && r(!0) : (g.current = !0, r())
                    }, [e, g, r, f, c.start, c.suffix, c.prefix, c.duration, c.separator, c.decimals, c.decimal, c.formattingFn]), b.useEffect(function() {
                        return function() {
                            d()
                        }
                    }, [d]), {
                        start: m,
                        pauseResume: j,
                        reset: d,
                        update: k,
                        getCountUp: h
                    }
                },
                s = ["className", "redraw", "containerProps", "children", "style"];
            d.ZP = function(a) {
                var m = a.className,
                    d = a.redraw,
                    o = a.containerProps,
                    e = a.children,
                    p = a.style,
                    q = l(a, s),
                    f = g.default.useRef(null),
                    z = g.default.useRef(!1),
                    c = r(i(i({}, q), {}, {
                        ref: f,
                        startOnMount: "function" != typeof e || 0 === a.delay,
                        enableReinitialize: !1
                    })),
                    t = c.start,
                    u = c.reset,
                    v = c.update,
                    w = c.pauseResume,
                    h = c.getCountUp,
                    j = n(function() {
                        t()
                    }),
                    x = n(function(b) {
                        a.preserveValue || u(), v(b)
                    }),
                    y = n(function() {
                        if ("function" == typeof a.children && !(f.current instanceof Element)) {
                            console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
                            return
                        }
                        h()
                    });
                return (b.useEffect(function() {
                    y()
                }, [y]), b.useEffect(function() {
                    z.current && x(a.end)
                }, [a.end, x]), b.useEffect(function() {
                    d && z.current && j()
                }, [j, d, d && a]), b.useEffect(function() {
                    !d && z.current && j()
                }, [j, d, a.start, a.suffix, a.prefix, a.duration, a.separator, a.decimals, a.decimal, a.className, a.formattingFn]), b.useEffect(function() {
                    z.current = !0
                }, []), "function" == typeof e) ? e({
                    countUpRef: f,
                    start: t,
                    reset: u,
                    update: v,
                    pauseResume: w,
                    getCountUp: h
                }) : g.default.createElement("span", k({
                    className: m,
                    ref: f,
                    style: p
                }, o), a.start ? h().formattingFn(a.start) : "")
            }
        }
    }
])
//# sourceMappingURL=1036-09356950ffc59f63.js.map