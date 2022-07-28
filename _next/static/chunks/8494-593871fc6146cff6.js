"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8494], {
        88494: function(f, c, b) {
            b.d(c, {
                tq: function() {
                    return d
                },
                o5: function() {
                    return e
                }
            });
            var a = b(67294),
                g = b(88116);

            function h(a) {
                return "object" == typeof a && null !== a && a.constructor && "Object" === Object.prototype.toString.call(a).slice(8, -1)
            }

            function i(b, a) {
                let c = ["__proto__", "constructor", "prototype"];
                Object.keys(a).filter(a => 0 > c.indexOf(a)).forEach(c => {
                    void 0 === b[c] ? b[c] = a[c] : h(a[c]) && h(b[c]) && Object.keys(a[c]).length > 0 ? a[c].__swiper__ ? b[c] = a[c] : i(b[c], a[c]) : b[c] = a[c]
                })
            }

            function j(a) {
                return void 0 === a && (a = {}), a.navigation && void 0 === a.navigation.nextEl && void 0 === a.navigation.prevEl
            }

            function k(a) {
                return void 0 === a && (a = {}), a.pagination && void 0 === a.pagination.el
            }

            function l(a) {
                return void 0 === a && (a = {}), a.scrollbar && void 0 === a.scrollbar.el
            }

            function m(a) {
                void 0 === a && (a = "");
                let b = a.split(" ").map(a => a.trim()).filter(a => !!a),
                    c = [];
                return b.forEach(a => {
                    0 > c.indexOf(a) && c.push(a)
                }), c.join(" ")
            }
            let n = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];

            function o(d, a) {
                let e = a.slidesPerView;
                if (a.breakpoints) {
                    let f = g.ZP.prototype.getBreakpoint(a.breakpoints),
                        b = f in a.breakpoints ? a.breakpoints[f] : void 0;
                    b && b.slidesPerView && (e = b.slidesPerView)
                }
                let c = Math.ceil(parseFloat(a.loopedSlides || e, 10));
                return (c += a.loopAdditionalSlides) > d.length && (c = d.length), c
            }

            function p(b) {
                let c = [];
                return a.Children.toArray(b).forEach(a => {
                    a.type && "SwiperSlide" === a.type.displayName ? c.push(a) : a.props && a.props.children && p(a.props.children).forEach(a => c.push(a))
                }), c
            }
            let q = a => {
                a && !a.destroyed && a.params.virtual && (!a.params.virtual || a.params.virtual.enabled) && (a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.lazy && a.params.lazy.enabled && a.lazy.load(), a.parallax && a.params.parallax && a.params.parallax.enabled && a.parallax.setTranslate())
            };

            function r(b, c) {
                return "undefined" == typeof window ? (0, a.useEffect)(b, c) : (0, a.useLayoutEffect)(b, c)
            }
            let s = (0, a.createContext)(null),
                t = (0, a.createContext)(null);

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(d) {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
                    }
                    return d
                }).apply(this, arguments)
            }
            let d = (0, a.forwardRef)(function(f, J) {
                let {
                    className: s,
                    tag: x = "div",
                    wrapperTag: y = "div",
                    children: z,
                    onSwiper: K,
                    ...A
                } = void 0 === f ? {} : f, L = !1, [B, M] = (0, a.useState)("swiper"), [v, N] = (0, a.useState)(null), [O, P] = (0, a.useState)(!1), Q = (0, a.useRef)(!1), w = (0, a.useRef)(null), b = (0, a.useRef)(null), R = (0, a.useRef)(null), S = (0, a.useRef)(null), C = (0, a.useRef)(null), D = (0, a.useRef)(null), E = (0, a.useRef)(null), F = (0, a.useRef)(null), {
                    params: c,
                    passedParams: T,
                    rest: G,
                    events: U
                } = function(b, c) {
                    void 0 === b && (b = {}), void 0 === c && (c = !0);
                    let a = {
                            on: {}
                        },
                        d = {},
                        e = {};
                    i(a, g.ZP.defaults), i(a, g.ZP.extendedDefaults), a._emitClasses = !0, a.init = !1;
                    let f = {},
                        k = n.map(a => a.replace(/_/, "")),
                        j = Object.assign({}, b);
                    return Object.keys(j).forEach(g => {
                        void 0 !== b[g] && (k.indexOf(g) >= 0 ? h(b[g]) ? (a[g] = {}, e[g] = {}, i(a[g], b[g]), i(e[g], b[g])) : (a[g] = b[g], e[g] = b[g]) : 0 === g.search(/on[A-Z]/) && "function" == typeof b[g] ? c ? d[`${g[2].toLowerCase()}${g.substr(3)}`] = b[g] : a.on[`${g[2].toLowerCase()}${g.substr(3)}`] = b[g] : f[g] = b[g])
                    }), ["navigation", "pagination", "scrollbar"].forEach(b => {
                        !0 === a[b] && (a[b] = {}), !1 === a[b] && delete a[b]
                    }), {
                        params: a,
                        passedParams: e,
                        rest: f,
                        events: d
                    }
                }(A), {
                    slides: e,
                    slots: d
                } = function(b) {
                    let c = [],
                        d = {
                            "container-start": [],
                            "container-end": [],
                            "wrapper-start": [],
                            "wrapper-end": []
                        };
                    return a.Children.toArray(b).forEach(a => {
                        if (a.type && "SwiperSlide" === a.type.displayName) c.push(a);
                        else if (a.props && a.props.slot && d[a.props.slot]) d[a.props.slot].push(a);
                        else if (a.props && a.props.children) {
                            let b = p(a.props.children);
                            b.length > 0 ? b.forEach(a => c.push(a)) : d["container-end"].push(a)
                        } else d["container-end"].push(a)
                    }), {
                        slides: c,
                        slots: d
                    }
                }(z), H = () => {
                    P(!O)
                };
                Object.assign(c.on, {
                    _containerClasses(b, a) {
                        M(a)
                    }
                });
                let I = () => {
                    if (Object.assign(c.on, U), L = !0, b.current = new g.ZP(c), b.current.loopCreate = () => {}, b.current.loopDestroy = () => {}, c.loop && (b.current.loopedSlides = o(e, c)), b.current.virtual && b.current.params.virtual.enabled) {
                        b.current.virtual.slides = e;
                        let a = {
                            cache: !1,
                            slides: e,
                            renderExternal: N,
                            renderExternalUpdate: !1
                        };
                        i(b.current.params.virtual, a), i(b.current.originalParams.virtual, a)
                    }
                };
                w.current || I(), b.current && b.current.on("_beforeBreakpoint", H);
                let V = () => {
                        !L && U && b.current && Object.keys(U).forEach(a => {
                            b.current.on(a, U[a])
                        })
                    },
                    W = () => {
                        U && b.current && Object.keys(U).forEach(a => {
                            b.current.off(a, U[a])
                        })
                    };
                return (0, a.useEffect)(() => () => {
                    b.current && b.current.off("_beforeBreakpoint", H)
                }), (0, a.useEffect)(() => {
                    !Q.current && b.current && (b.current.emitSlidesClasses(), Q.current = !0)
                }), r(() => {
                    if (J && (J.current = w.current), w.current) return b.current.destroyed && I(),
                        function(g, b) {
                            let {
                                el: h,
                                nextEl: c,
                                prevEl: d,
                                paginationEl: e,
                                scrollbarEl: f,
                                swiper: a
                            } = g;
                            j(b) && c && d && (a.params.navigation.nextEl = c, a.originalParams.navigation.nextEl = c, a.params.navigation.prevEl = d, a.originalParams.navigation.prevEl = d), k(b) && e && (a.params.pagination.el = e, a.originalParams.pagination.el = e), l(b) && f && (a.params.scrollbar.el = f, a.originalParams.scrollbar.el = f), a.init(h)
                        }({
                            el: w.current,
                            nextEl: C.current,
                            prevEl: D.current,
                            paginationEl: E.current,
                            scrollbarEl: F.current,
                            swiper: b.current
                        }, c), K && K(b.current), () => {
                            b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                        }
                }, []), r(() => {
                    V();
                    let a = function(k, f, a, b, c) {
                        let d = [];
                        if (!f) return d;
                        let e = a => {
                            0 > d.indexOf(a) && d.push(a)
                        };
                        if (a && b) {
                            let g = b.map(c),
                                i = a.map(c);
                            g.join("") !== i.join("") && e("children"), b.length !== a.length && e("children")
                        }
                        let j = n.filter(a => "_" === a[0]).map(a => a.replace(/_/, ""));
                        return j.forEach(a => {
                            if (a in k && a in f) {
                                if (h(k[a]) && h(f[a])) {
                                    let b = Object.keys(k[a]),
                                        c = Object.keys(f[a]);
                                    b.length !== c.length ? e(a) : (b.forEach(b => {
                                        k[a][b] !== f[a][b] && e(a)
                                    }), c.forEach(b => {
                                        k[a][b] !== f[a][b] && e(a)
                                    }))
                                } else k[a] !== f[a] && e(a)
                            }
                        }), d
                    }(T, R.current, e, S.current, a => a.key);
                    return R.current = T, S.current = e, a.length && b.current && !b.current.destroyed && function(w) {
                        let {
                            swiper: c,
                            slides: p,
                            passedParams: b,
                            changedParams: d,
                            nextEl: j,
                            prevEl: k,
                            scrollbarEl: l,
                            paginationEl: m
                        } = w, q = d.filter(a => "children" !== a && "direction" !== a), {
                            params: a,
                            pagination: e,
                            navigation: f,
                            scrollbar: g,
                            virtual: n,
                            thumbs: r
                        } = c, s, o, t, u, v;
                        d.includes("thumbs") && b.thumbs && b.thumbs.swiper && a.thumbs && !a.thumbs.swiper && (s = !0), d.includes("controller") && b.controller && b.controller.control && a.controller && !a.controller.control && (o = !0), d.includes("pagination") && b.pagination && (b.pagination.el || m) && (a.pagination || !1 === a.pagination) && e && !e.el && (t = !0), d.includes("scrollbar") && b.scrollbar && (b.scrollbar.el || l) && (a.scrollbar || !1 === a.scrollbar) && g && !g.el && (u = !0), d.includes("navigation") && b.navigation && (b.navigation.prevEl || k) && (b.navigation.nextEl || j) && (a.navigation || !1 === a.navigation) && f && !f.prevEl && !f.nextEl && (v = !0);
                        let y = b => {
                            c[b] && (c[b].destroy(), "navigation" === b ? (a[b].prevEl = void 0, a[b].nextEl = void 0, c[b].prevEl = void 0, c[b].nextEl = void 0) : (a[b].el = void 0, c[b].el = void 0))
                        };
                        if (q.forEach(c => {
                                if (h(a[c]) && h(b[c])) i(a[c], b[c]);
                                else {
                                    let d = b[c];
                                    (!0 === d || !1 === d) && ("navigation" === c || "pagination" === c || "scrollbar" === c) ? !1 === d && y(c): a[c] = b[c]
                                }
                            }), q.includes("controller") && !o && c.controller && c.controller.control && a.controller && a.controller.control && (c.controller.control = a.controller.control), d.includes("children") && p && n && a.virtual.enabled ? (n.slides = p, n.update(!0)) : d.includes("children") && c.lazy && c.params.lazy.enabled && c.lazy.load(), s) {
                            let x = r.init();
                            x && r.update(!0)
                        }
                        o && (c.controller.control = a.controller.control), t && (m && (a.pagination.el = m), e.init(), e.render(), e.update()), u && (l && (a.scrollbar.el = l), g.init(), g.updateSize(), g.setTranslate()), v && (j && (a.navigation.nextEl = j), k && (a.navigation.prevEl = k), f.init(), f.update()), d.includes("allowSlideNext") && (c.allowSlideNext = b.allowSlideNext), d.includes("allowSlidePrev") && (c.allowSlidePrev = b.allowSlidePrev), d.includes("direction") && c.changeDirection(b.direction, !1), c.update()
                    }({
                        swiper: b.current,
                        slides: e,
                        passedParams: T,
                        changedParams: a,
                        nextEl: C.current,
                        prevEl: D.current,
                        scrollbarEl: F.current,
                        paginationEl: E.current
                    }), () => {
                        W()
                    }
                }), r(() => {
                    q(b.current)
                }, [v]), a.createElement(x, u({
                    ref: w,
                    className: m(`${B}${s?` ${s}`:""}`)
                }, G), a.createElement(t.Provider, {
                    value: b.current
                }, d["container-start"], a.createElement(y, {
                    className: "swiper-wrapper"
                }, d["wrapper-start"], c.virtual ? function(c, d, b) {
                    if (!b) return null;
                    let e = c.isHorizontal() ? {
                        [c.rtlTranslate ? "right" : "left"]: `${b.offset}px`
                    } : {
                        top: `${b.offset}px`
                    };
                    return d.filter((c, a) => a >= b.from && a <= b.to).map(b => a.cloneElement(b, {
                        swiper: c,
                        style: e
                    }))
                }(b.current, e, v) : !c.loop || b.current && b.current.destroyed ? e.map(c => a.cloneElement(c, {
                    swiper: b.current
                })) : function(d, g, b) {
                    let c = g.map((b, c) => a.cloneElement(b, {
                        swiper: d,
                        "data-swiper-slide-index": c
                    }));

                    function l(c, d, e) {
                        return a.cloneElement(c, {
                            key: `${c.key}-duplicate-${d}-${e}`,
                            className: `${c.props.className||""} ${b.slideDuplicateClass}`
                        })
                    }
                    if (b.loopFillGroupWithBlank) {
                        let e = b.slidesPerGroup - c.length % b.slidesPerGroup;
                        if (e !== b.slidesPerGroup)
                            for (let f = 0; f < e; f += 1) {
                                let h = a.createElement("div", {
                                    className: `${b.slideClass} ${b.slideBlankClass}`
                                });
                                c.push(h)
                            }
                    }
                    "auto" !== b.slidesPerView || b.loopedSlides || (b.loopedSlides = c.length);
                    let i = o(c, b),
                        j = [],
                        k = [];
                    return c.forEach((b, a) => {
                        a < i && k.push(l(b, a, "prepend")), a < c.length && a >= c.length - i && j.push(l(b, a, "append"))
                    }), d && (d.loopedSlides = i), [...j, ...c, ...k]
                }(b.current, e, c), d["wrapper-end"]), j(c) && a.createElement(a.Fragment, null, a.createElement("div", {
                    ref: D,
                    className: "swiper-button-prev"
                }), a.createElement("div", {
                    ref: C,
                    className: "swiper-button-next"
                })), l(c) && a.createElement("div", {
                    ref: F,
                    className: "swiper-scrollbar"
                }), k(c) && a.createElement("div", {
                    ref: E,
                    className: "swiper-pagination"
                }), d["container-end"]))
            });

            function v() {
                return (v = Object.assign ? Object.assign.bind() : function(d) {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
                    }
                    return d
                }).apply(this, arguments)
            }
            d.displayName = "Swiper";
            let e = (0, a.forwardRef)(function(d, n) {
                let {
                    tag: g = "div",
                    children: o,
                    className: e = "",
                    swiper: h,
                    zoom: c,
                    virtualIndex: i,
                    ...j
                } = void 0 === d ? {} : d, k = (0, a.useRef)(null), [b, p] = (0, a.useState)("swiper-slide");

                function q(c, a, b) {
                    a === k.current && p(b)
                }
                r(() => {
                    if (n && (n.current = k.current), k.current && h) {
                        if (h.destroyed) {
                            "swiper-slide" !== b && p("swiper-slide");
                            return
                        }
                        return h.on("_slideClass", q), () => {
                            h && h.off("_slideClass", q)
                        }
                    }
                }), r(() => {
                    h && k.current && !h.destroyed && p(h.getSlideClasses(k.current))
                }, [h]);
                let l = {
                        isActive: b.indexOf("swiper-slide-active") >= 0 || b.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: b.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: b.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: b.indexOf("swiper-slide-prev") >= 0 || b.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: b.indexOf("swiper-slide-next") >= 0 || b.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    f = () => "function" == typeof o ? o(l) : o;
                return a.createElement(g, v({
                    ref: k,
                    className: m(`${b}${e?` ${e}`:""}`),
                    "data-swiper-slide-index": i
                }, j), a.createElement(s.Provider, {
                    value: l
                }, c ? a.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof c ? c : void 0
                }, f()) : f()))
            });
            e.displayName = "SwiperSlide"
        },
        88116: function(k, d, e) {
            function l(a) {
                return null !== a && "object" == typeof a && "constructor" in a && a.constructor === Object
            }

            function m(b = {}, a = {}) {
                Object.keys(a).forEach(c => {
                    void 0 === b[c] ? b[c] = a[c] : l(a[c]) && l(b[c]) && Object.keys(a[c]).length > 0 && m(b[c], a[c])
                })
            }
            e.d(d, {
                pt: function() {
                    return X
                },
                xW: function() {
                    return $
                },
                Rv: function() {
                    return Y
                },
                N1: function() {
                    return T
                },
                Gk: function() {
                    return U
                },
                tl: function() {
                    return W
                },
                ZP: function() {
                    return S
                }
            });
            let f = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function n() {
                let a = "undefined" != typeof document ? document : {};
                return m(a, f), a
            }
            let o = {
                document: f,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: a => "undefined" == typeof setTimeout ? (a(), null) : setTimeout(a, 0),
                cancelAnimationFrame(a) {
                    "undefined" != typeof setTimeout && clearTimeout(a)
                }
            };

            function p() {
                let a = "undefined" != typeof window ? window : {};
                return m(a, o), a
            }
            class g extends Array {
                constructor(a) {
                    "number" == typeof a ? super(a) : (super(...a || []), function(a) {
                        let b = a.__proto__;
                        Object.defineProperty(a, "__proto__", {
                            get: () => b,
                            set(a) {
                                b.__proto__ = a
                            }
                        })
                    }(this))
                }
            }

            function q(a = []) {
                let b = [];
                return a.forEach(a => {
                    Array.isArray(a) ? b.push(...q(a)) : b.push(a)
                }), b
            }

            function r(a, b) {
                return Array.prototype.filter.call(a, b)
            }

            function b(a, i) {
                let j = p(),
                    e = n(),
                    c = [];
                if (!i && a instanceof g) return a;
                if (!a) return new g(c);
                if ("string" == typeof a) {
                    let b = a.trim();
                    if (b.indexOf("<") >= 0 && b.indexOf(">") >= 0) {
                        let d = "div";
                        0 === b.indexOf("<li") && (d = "ul"), 0 === b.indexOf("<tr") && (d = "tbody"), (0 === b.indexOf("<td") || 0 === b.indexOf("<th")) && (d = "tr"), 0 === b.indexOf("<tbody") && (d = "table"), 0 === b.indexOf("<option") && (d = "select");
                        let f = e.createElement(d);
                        f.innerHTML = b;
                        for (let h = 0; h < f.childNodes.length; h += 1) c.push(f.childNodes[h])
                    } else c = function(a, e) {
                        if ("string" != typeof a) return [a];
                        let c = [],
                            d = e.querySelectorAll(a);
                        for (let b = 0; b < d.length; b += 1) c.push(d[b]);
                        return c
                    }(a.trim(), i || e)
                } else if (a.nodeType || a === j || a === e) c.push(a);
                else if (Array.isArray(a)) {
                    if (a instanceof g) return a;
                    c = a
                }
                return new g(function(b) {
                    let c = [];
                    for (let a = 0; a < b.length; a += 1) - 1 === c.indexOf(b[a]) && c.push(b[a]);
                    return c
                }(c))
            }
            b.fn = g.prototype;
            let s = "resize scroll".split(" ");

            function a(a) {
                return function(...d) {
                    if (void 0 === d[0]) {
                        for (let c = 0; c < this.length; c += 1) 0 > s.indexOf(a) && (a in this[c] ? this[c][a]() : b(this[c]).trigger(a));
                        return this
                    }
                    return this.on(a, ...d)
                }
            }
            a("click"), a("blur"), a("focus"), a("focusin"), a("focusout"), a("keyup"), a("keydown"), a("keypress"), a("submit"), a("change"), a("mousedown"), a("mousemove"), a("mouseup"), a("mouseenter"), a("mouseleave"), a("mouseout"), a("mouseover"), a("touchstart"), a("touchend"), a("touchmove"), a("resize"), a("scroll");
            let h = {
                addClass: function(...a) {
                    let b = q(a.map(a => a.split(" ")));
                    return this.forEach(a => {
                        a.classList.add(...b)
                    }), this
                },
                removeClass: function(...a) {
                    let b = q(a.map(a => a.split(" ")));
                    return this.forEach(a => {
                        a.classList.remove(...b)
                    }), this
                },
                hasClass: function(...a) {
                    let b = q(a.map(a => a.split(" ")));
                    return r(this, a => b.filter(b => a.classList.contains(b)).length > 0).length > 0
                },
                toggleClass: function(...a) {
                    let b = q(a.map(a => a.split(" ")));
                    this.forEach(a => {
                        b.forEach(b => {
                            a.classList.toggle(b)
                        })
                    })
                },
                attr: function(a, d) {
                    if (1 === arguments.length && "string" == typeof a) return this[0] ? this[0].getAttribute(a) : void 0;
                    for (let b = 0; b < this.length; b += 1)
                        if (2 === arguments.length) this[b].setAttribute(a, d);
                        else
                            for (let c in a) this[b][c] = a[c], this[b].setAttribute(c, a[c]);
                    return this
                },
                removeAttr: function(b) {
                    for (let a = 0; a < this.length; a += 1) this[a].removeAttribute(b);
                    return this
                },
                transform: function(b) {
                    for (let a = 0; a < this.length; a += 1) this[a].style.transform = b;
                    return this
                },
                transition: function(a) {
                    for (let b = 0; b < this.length; b += 1) this[b].style.transitionDuration = "string" != typeof a ? `${a}ms` : a;
                    return this
                },
                on: function(...h) {
                    let [k, l, i, d] = h;

                    function m(a) {
                        let c = a.target;
                        if (!c) return;
                        let d = a.target.dom7EventData || [];
                        if (0 > d.indexOf(a) && d.unshift(a), b(c).is(l)) i.apply(c, d);
                        else {
                            let f = b(c).parents();
                            for (let e = 0; e < f.length; e += 1) b(f[e]).is(l) && i.apply(f[e], d)
                        }
                    }

                    function n(a) {
                        let b = a && a.target && a.target.dom7EventData || [];
                        0 > b.indexOf(a) && b.unshift(a), i.apply(this, b)
                    }
                    "function" == typeof h[1] && ([k, i, d] = h, l = void 0), d || (d = !1);
                    let e = k.split(" "),
                        c;
                    for (let j = 0; j < this.length; j += 1) {
                        let a = this[j];
                        if (l)
                            for (c = 0; c < e.length; c += 1) {
                                let f = e[c];
                                a.dom7LiveListeners || (a.dom7LiveListeners = {}), a.dom7LiveListeners[f] || (a.dom7LiveListeners[f] = []), a.dom7LiveListeners[f].push({
                                    listener: i,
                                    proxyListener: m
                                }), a.addEventListener(f, m, d)
                            } else
                                for (c = 0; c < e.length; c += 1) {
                                    let g = e[c];
                                    a.dom7Listeners || (a.dom7Listeners = {}), a.dom7Listeners[g] || (a.dom7Listeners[g] = []), a.dom7Listeners[g].push({
                                        listener: i,
                                        proxyListener: n
                                    }), a.addEventListener(g, n, d)
                                }
                    }
                    return this
                },
                off: function(...h) {
                    let [l, i, d, e] = h;
                    "function" == typeof h[1] && ([l, d, e] = h, i = void 0), e || (e = !1);
                    let m = l.split(" ");
                    for (let j = 0; j < m.length; j += 1) {
                        let g = m[j];
                        for (let k = 0; k < this.length; k += 1) {
                            let b = this[k],
                                a;
                            if (!i && b.dom7Listeners ? a = b.dom7Listeners[g] : i && b.dom7LiveListeners && (a = b.dom7LiveListeners[g]), a && a.length)
                                for (let f = a.length - 1; f >= 0; f -= 1) {
                                    let c = a[f];
                                    d && c.listener === d ? (b.removeEventListener(g, c.proxyListener, e), a.splice(f, 1)) : d && c.listener && c.listener.dom7proxy && c.listener.dom7proxy === d ? (b.removeEventListener(g, c.proxyListener, e), a.splice(f, 1)) : d || (b.removeEventListener(g, c.proxyListener, e), a.splice(f, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...b) {
                    let e = p(),
                        f = b[0].split(" "),
                        g = b[1];
                    for (let c = 0; c < f.length; c += 1) {
                        let h = f[c];
                        for (let d = 0; d < this.length; d += 1) {
                            let a = this[d];
                            if (e.CustomEvent) {
                                let i = new e.CustomEvent(h, {
                                    detail: g,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                a.dom7EventData = b.filter((b, a) => a > 0), a.dispatchEvent(i), a.dom7EventData = [], delete a.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(a) {
                    let b = this;

                    function c(d) {
                        d.target === this && (a.call(this, d), b.off("transitionend", c))
                    }
                    return a && b.on("transitionend", c), this
                },
                outerWidth: function(b) {
                    if (this.length > 0) {
                        if (b) {
                            let a = this.styles();
                            return this[0].offsetWidth + parseFloat(a.getPropertyValue("margin-right")) + parseFloat(a.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(b) {
                    if (this.length > 0) {
                        if (b) {
                            let a = this.styles();
                            return this[0].offsetHeight + parseFloat(a.getPropertyValue("margin-top")) + parseFloat(a.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    let a = p();
                    return this[0] ? a.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        let b = p(),
                            e = n(),
                            a = this[0],
                            c = a.getBoundingClientRect(),
                            d = e.body,
                            f = a.clientTop || d.clientTop || 0,
                            g = a.clientLeft || d.clientLeft || 0,
                            h = a === b ? b.scrollY : a.scrollTop,
                            i = a === b ? b.scrollX : a.scrollLeft;
                        return {
                            top: c.top + h - f,
                            left: c.left + i - g
                        }
                    }
                    return null
                },
                css: function(b, d) {
                    let e = p(),
                        a;
                    if (1 === arguments.length) {
                        if ("string" == typeof b) {
                            if (this[0]) return e.getComputedStyle(this[0], null).getPropertyValue(b)
                        } else {
                            for (a = 0; a < this.length; a += 1)
                                for (let c in b) this[a].style[c] = b[c];
                            return this
                        }
                    }
                    if (2 === arguments.length && "string" == typeof b)
                        for (a = 0; a < this.length; a += 1) this[a].style[b] = d;
                    return this
                },
                each: function(a) {
                    return a && this.forEach((b, c) => {
                        a.apply(b, [b, c])
                    }), this
                },
                html: function(b) {
                    if (void 0 === b) return this[0] ? this[0].innerHTML : null;
                    for (let a = 0; a < this.length; a += 1) this[a].innerHTML = b;
                    return this
                },
                text: function(b) {
                    if (void 0 === b) return this[0] ? this[0].textContent.trim() : null;
                    for (let a = 0; a < this.length; a += 1) this[a].textContent = b;
                    return this
                },
                is: function(a) {
                    let f = p(),
                        h = n(),
                        c = this[0],
                        e, d;
                    if (!c || void 0 === a) return !1;
                    if ("string" == typeof a) {
                        if (c.matches) return c.matches(a);
                        if (c.webkitMatchesSelector) return c.webkitMatchesSelector(a);
                        if (c.msMatchesSelector) return c.msMatchesSelector(a);
                        for (d = 0, e = b(a); d < e.length; d += 1)
                            if (e[d] === c) return !0;
                        return !1
                    }
                    if (a === h) return c === h;
                    if (a === f) return c === f;
                    if (a.nodeType || a instanceof g) {
                        for (d = 0, e = a.nodeType ? [a] : a; d < e.length; d += 1)
                            if (e[d] === c) return !0
                    }
                    return !1
                },
                index: function() {
                    let a = this[0],
                        b;
                    if (a) {
                        for (b = 0; null !== (a = a.previousSibling);) 1 === a.nodeType && (b += 1);
                        return b
                    }
                },
                eq: function(a) {
                    if (void 0 === a) return this;
                    let c = this.length;
                    if (a > c - 1) return b([]);
                    if (a < 0) {
                        let d = c + a;
                        return d < 0 ? b([]) : b([this[d]])
                    }
                    return b([this[a]])
                },
                append: function(...f) {
                    let a, h = n();
                    for (let c = 0; c < f.length; c += 1) {
                        a = f[c];
                        for (let b = 0; b < this.length; b += 1)
                            if ("string" == typeof a) {
                                let d = h.createElement("div");
                                for (d.innerHTML = a; d.firstChild;) this[b].appendChild(d.firstChild)
                            } else if (a instanceof g)
                            for (let e = 0; e < a.length; e += 1) this[b].appendChild(a[e]);
                        else this[b].appendChild(a)
                    }
                    return this
                },
                prepend: function(c) {
                    let e = n(),
                        a, b;
                    for (a = 0; a < this.length; a += 1)
                        if ("string" == typeof c) {
                            let d = e.createElement("div");
                            for (d.innerHTML = c, b = d.childNodes.length - 1; b >= 0; b -= 1) this[a].insertBefore(d.childNodes[b], this[a].childNodes[0])
                        } else if (c instanceof g)
                        for (b = 0; b < c.length; b += 1) this[a].insertBefore(c[b], this[a].childNodes[0]);
                    else this[a].insertBefore(c, this[a].childNodes[0]);
                    return this
                },
                next: function(a) {
                    if (this.length > 0) {
                        if (a) return this[0].nextElementSibling && b(this[0].nextElementSibling).is(a) ? b([this[0].nextElementSibling]) : b([]);
                        if (this[0].nextElementSibling) return b([this[0].nextElementSibling])
                    }
                    return b([])
                },
                nextAll: function(e) {
                    let d = [],
                        a = this[0];
                    if (!a) return b([]);
                    for (; a.nextElementSibling;) {
                        let c = a.nextElementSibling;
                        e ? b(c).is(e) && d.push(c) : d.push(c), a = c
                    }
                    return b(d)
                },
                prev: function(c) {
                    if (this.length > 0) {
                        let a = this[0];
                        if (c) return a.previousElementSibling && b(a.previousElementSibling).is(c) ? b([a.previousElementSibling]) : b([]);
                        if (a.previousElementSibling) return b([a.previousElementSibling])
                    }
                    return b([])
                },
                prevAll: function(e) {
                    let d = [],
                        a = this[0];
                    if (!a) return b([]);
                    for (; a.previousElementSibling;) {
                        let c = a.previousElementSibling;
                        e ? b(c).is(e) && d.push(c) : d.push(c), a = c
                    }
                    return b(d)
                },
                parent: function(d) {
                    let c = [];
                    for (let a = 0; a < this.length; a += 1) null !== this[a].parentNode && (d ? b(this[a].parentNode).is(d) && c.push(this[a].parentNode) : c.push(this[a].parentNode));
                    return b(c)
                },
                parents: function(e) {
                    let c = [];
                    for (let d = 0; d < this.length; d += 1) {
                        let a = this[d].parentNode;
                        for (; a;) e ? b(a).is(e) && c.push(a) : c.push(a), a = a.parentNode
                    }
                    return b(c)
                },
                closest: function(c) {
                    let a = this;
                    return void 0 === c ? b([]) : (a.is(c) || (a = a.parents(c).eq(0)), a)
                },
                find: function(f) {
                    let d = [];
                    for (let a = 0; a < this.length; a += 1) {
                        let e = this[a].querySelectorAll(f);
                        for (let c = 0; c < e.length; c += 1) d.push(e[c])
                    }
                    return b(d)
                },
                children: function(e) {
                    let f = [];
                    for (let c = 0; c < this.length; c += 1) {
                        let d = this[c].children;
                        for (let a = 0; a < d.length; a += 1)(!e || b(d[a]).is(e)) && f.push(d[a])
                    }
                    return b(f)
                },
                filter: function(a) {
                    let c = r(this, a);
                    return b(c)
                },
                remove: function() {
                    for (let a = 0; a < this.length; a += 1) this[a].parentNode && this[a].parentNode.removeChild(this[a]);
                    return this
                }
            };
            Object.keys(h).forEach(a => {
                Object.defineProperty(b.fn, a, {
                    value: h[a],
                    writable: !0
                })
            });
            var t = b;

            function u(b, a) {
                return void 0 === a && (a = 0), setTimeout(b, a)
            }

            function v() {
                return Date.now()
            }

            function w(a) {
                return "object" == typeof a && null !== a && a.constructor && "Object" === Object.prototype.toString.call(a).slice(8, -1)
            }

            function x(a) {
                return "undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)
            }

            function y() {
                let c = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    i = ["__proto__", "constructor", "prototype"];
                for (let d = 1; d < arguments.length; d += 1) {
                    let b = d < 0 || arguments.length <= d ? void 0 : arguments[d];
                    if (null != b && !x(b)) {
                        let f = Object.keys(Object(b)).filter(a => 0 > i.indexOf(a));
                        for (let e = 0, h = f.length; e < h; e += 1) {
                            let a = f[e],
                                g = Object.getOwnPropertyDescriptor(b, a);
                            void 0 !== g && g.enumerable && (w(c[a]) && w(b[a]) ? b[a].__swiper__ ? c[a] = b[a] : y(c[a], b[a]) : !w(c[a]) && w(b[a]) ? (c[a] = {}, b[a].__swiper__ ? c[a] = b[a] : y(c[a], b[a])) : c[a] = b[a])
                        }
                    }
                }
                return c
            }

            function z(a, b, c) {
                a.style.setProperty(b, c)
            }

            function A(b) {
                let {
                    swiper: a,
                    targetPosition: c,
                    side: g
                } = b, d = p(), e = -a.translate, h = null, i, j = a.params.speed;
                a.wrapperEl.style.scrollSnapType = "none", d.cancelAnimationFrame(a.cssModeFrameID);
                let k = c > e ? "next" : "prev",
                    l = (a, b) => "next" === k && a >= b || "prev" === k && a <= b,
                    f = () => {
                        i = new Date().getTime(), null === h && (h = i);
                        let k = Math.max(Math.min((i - h) / j, 1), 0),
                            b = e + (.5 - Math.cos(k * Math.PI) / 2) * (c - e);
                        if (l(b, c) && (b = c), a.wrapperEl.scrollTo({
                                [g]: b
                            }), l(b, c)) {
                            a.wrapperEl.style.overflow = "hidden", a.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                a.wrapperEl.style.overflow = "", a.wrapperEl.scrollTo({
                                    [g]: b
                                })
                            }), d.cancelAnimationFrame(a.cssModeFrameID);
                            return
                        }
                        a.cssModeFrameID = d.requestAnimationFrame(f)
                    };
                f()
            }
            let B;

            function C() {
                return B || (B = function() {
                    let a = p(),
                        b = n();
                    return {
                        smoothScroll: b.documentElement && "scrollBehavior" in b.documentElement.style,
                        touch: !!("ontouchstart" in a || a.DocumentTouch && b instanceof a.DocumentTouch),
                        passiveListener: function() {
                            let b = !1;
                            try {
                                let c = Object.defineProperty({}, "passive", {
                                    get() {
                                        b = !0
                                    }
                                });
                                a.addEventListener("testPassiveListener", null, c)
                            } catch (d) {}
                            return b
                        }(),
                        gestures: "ongesturestart" in a
                    }
                }()), B
            }
            let D, E;
            var i = {
                on(b, c, d) {
                    let a = this;
                    if (!a.eventsListeners || a.destroyed || "function" != typeof c) return a;
                    let e = d ? "unshift" : "push";
                    return b.split(" ").forEach(b => {
                        a.eventsListeners[b] || (a.eventsListeners[b] = []), a.eventsListeners[b][e](c)
                    }), a
                },
                once(d, b, e) {
                    let a = this;
                    if (!a.eventsListeners || a.destroyed || "function" != typeof b) return a;

                    function c() {
                        a.off(d, c), c.__emitterProxy && delete c.__emitterProxy;
                        for (var f = arguments.length, g = Array(f), e = 0; e < f; e++) g[e] = arguments[e];
                        b.apply(a, g)
                    }
                    return c.__emitterProxy = b, a.on(d, c, e)
                },
                onAny(a, b) {
                    if (!this.eventsListeners || this.destroyed || "function" != typeof a) return this;
                    let c = b ? "unshift" : "push";
                    return 0 > this.eventsAnyListeners.indexOf(a) && this.eventsAnyListeners[c](a), this
                },
                offAny(b) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                    let a = this.eventsAnyListeners.indexOf(b);
                    return a >= 0 && this.eventsAnyListeners.splice(a, 1), this
                },
                off(b, c) {
                    let a = this;
                    return a.eventsListeners && !a.destroyed && a.eventsListeners && b.split(" ").forEach(b => {
                        void 0 === c ? a.eventsListeners[b] = [] : a.eventsListeners[b] && a.eventsListeners[b].forEach((d, e) => {
                            (d === c || d.__emitterProxy && d.__emitterProxy === c) && a.eventsListeners[b].splice(e, 1)
                        })
                    }), a
                },
                emit() {
                    let b = this;
                    if (!b.eventsListeners || b.destroyed || !b.eventsListeners) return b;
                    let c, e, f;
                    for (var g = arguments.length, a = Array(g), d = 0; d < g; d++) a[d] = arguments[d];
                    "string" == typeof a[0] || Array.isArray(a[0]) ? (c = a[0], e = a.slice(1, a.length), f = b) : (c = a[0].events, e = a[0].data, f = a[0].context || b), e.unshift(f);
                    let h = Array.isArray(c) ? c : c.split(" ");
                    return h.forEach(a => {
                        b.eventsAnyListeners && b.eventsAnyListeners.length && b.eventsAnyListeners.forEach(b => {
                            b.apply(f, [a, ...e])
                        }), b.eventsListeners && b.eventsListeners[a] && b.eventsListeners[a].forEach(a => {
                            a.apply(f, e)
                        })
                    }), b
                }
            };

            function F(f) {
                let {
                    swiper: a,
                    runCallbacks: g,
                    direction: h,
                    step: b
                } = f, {
                    activeIndex: d,
                    previousIndex: e
                } = a, c = h;
                if (c || (c = d > e ? "next" : d < e ? "prev" : "reset"), a.emit(`transition${b}`), g && d !== e) {
                    if ("reset" === c) {
                        a.emit(`slideResetTransition${b}`);
                        return
                    }
                    a.emit(`slideChangeTransition${b}`), "next" === c ? a.emit(`slideNextTransition${b}`) : a.emit(`slidePrevTransition${b}`)
                }
            }

            function G(g) {
                let c = this,
                    h = n(),
                    o = p(),
                    d = c.touchEventsData,
                    {
                        params: b,
                        touches: f,
                        enabled: q
                    } = c;
                if (!q || c.animating && b.preventInteractionOnTransition) return;
                !c.animating && b.cssMode && b.loop && c.loopFix();
                let a = g;
                a.originalEvent && (a = a.originalEvent);
                let e = t(a.target);
                if ("wrapper" === b.touchEventsTarget && !e.closest(c.wrapperEl).length || (d.isTouchEvent = "touchstart" === a.type, !d.isTouchEvent && "which" in a && 3 === a.which || !d.isTouchEvent && "button" in a && a.button > 0 || d.isTouched && d.isMoved)) return;
                let r = !!b.noSwipingClass && "" !== b.noSwipingClass;
                r && a.target && a.target.shadowRoot && g.path && g.path[0] && (e = t(g.path[0]));
                let j = b.noSwipingSelector ? b.noSwipingSelector : `.${b.noSwipingClass}`,
                    s = !!(a.target && a.target.shadowRoot);
                if (b.noSwiping && (s ? function(c, a) {
                        function b(a) {
                            if (!a || a === n() || a === p()) return null;
                            a.assignedSlot && (a = a.assignedSlot);
                            let d = a.closest(c);
                            return d || a.getRootNode ? d || b(a.getRootNode().host) : null
                        }
                        return void 0 === a && (a = this), b(a)
                    }(j, e[0]) : e.closest(j)[0])) {
                    c.allowClick = !0;
                    return
                }
                if (b.swipeHandler && !e.closest(b.swipeHandler)[0]) return;
                f.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, f.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                let i = f.currentX,
                    u = f.currentY,
                    k = b.edgeSwipeDetection || b.iOSEdgeSwipeDetection,
                    l = b.edgeSwipeThreshold || b.iOSEdgeSwipeThreshold;
                if (k && (i <= l || i >= o.innerWidth - l)) {
                    if ("prevent" !== k) return;
                    g.preventDefault()
                }
                if (Object.assign(d, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), f.startX = i, f.startY = u, d.touchStartTime = v(), c.allowClick = !0, c.updateSize(), c.swipeDirection = void 0, b.threshold > 0 && (d.allowThresholdMove = !1), "touchstart" !== a.type) {
                    let m = !0;
                    e.is(d.focusableElements) && (m = !1, "SELECT" === e[0].nodeName && (d.isTouched = !1)), h.activeElement && t(h.activeElement).is(d.focusableElements) && h.activeElement !== e[0] && h.activeElement.blur();
                    let w = m && c.allowTouchMove && b.touchStartPreventDefault;
                    (b.touchStartForcePreventDefault || w) && !e[0].isContentEditable && a.preventDefault()
                }
                c.params.freeMode && c.params.freeMode.enabled && c.freeMode && c.animating && !b.cssMode && c.freeMode.onTouchStart(), c.emit("touchStart", a)
            }

            function H(q) {
                let o = n(),
                    a = this,
                    b = a.touchEventsData,
                    {
                        params: e,
                        touches: c,
                        rtlTranslate: r,
                        enabled: s
                    } = a;
                if (!s) return;
                let d = q;
                if (d.originalEvent && (d = d.originalEvent), !b.isTouched) {
                    b.startMoving && b.isScrolling && a.emit("touchMoveOpposite", d);
                    return
                }
                if (b.isTouchEvent && "touchmove" !== d.type) return;
                let p = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                    g = "touchmove" === d.type ? p.pageX : d.pageX,
                    h = "touchmove" === d.type ? p.pageY : d.pageY;
                if (d.preventedByNestedSwiper) {
                    c.startX = g, c.startY = h;
                    return
                }
                if (!a.allowTouchMove) {
                    t(d.target).is(b.focusableElements) || (a.allowClick = !1), b.isTouched && (Object.assign(c, {
                        startX: g,
                        startY: h,
                        currentX: g,
                        currentY: h
                    }), b.touchStartTime = v());
                    return
                }
                if (b.isTouchEvent && e.touchReleaseOnEdges && !e.loop) {
                    if (a.isVertical()) {
                        if (h < c.startY && a.translate <= a.maxTranslate() || h > c.startY && a.translate >= a.minTranslate()) {
                            b.isTouched = !1, b.isMoved = !1;
                            return
                        }
                    } else if (g < c.startX && a.translate <= a.maxTranslate() || g > c.startX && a.translate >= a.minTranslate()) return
                }
                if (b.isTouchEvent && o.activeElement && d.target === o.activeElement && t(d.target).is(b.focusableElements)) {
                    b.isMoved = !0, a.allowClick = !1;
                    return
                }
                if (b.allowTouchCallbacks && a.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                c.currentX = g, c.currentY = h;
                let i = c.currentX - c.startX,
                    j = c.currentY - c.startY;
                if (a.params.threshold && Math.sqrt(i ** 2 + j ** 2) < a.params.threshold) return;
                if (void 0 === b.isScrolling) {
                    let k;
                    a.isHorizontal() && c.currentY === c.startY || a.isVertical() && c.currentX === c.startX ? b.isScrolling = !1 : i * i + j * j >= 25 && (k = 180 * Math.atan2(Math.abs(j), Math.abs(i)) / Math.PI, b.isScrolling = a.isHorizontal() ? k > e.touchAngle : 90 - k > e.touchAngle)
                }
                if (b.isScrolling && a.emit("touchMoveOpposite", d), void 0 === b.startMoving && (c.currentX !== c.startX || c.currentY !== c.startY) && (b.startMoving = !0), b.isScrolling) {
                    b.isTouched = !1;
                    return
                }
                if (!b.startMoving) return;
                a.allowClick = !1, !e.cssMode && d.cancelable && d.preventDefault(), e.touchMoveStopPropagation && !e.nested && d.stopPropagation(), b.isMoved || (e.loop && !e.cssMode && a.loopFix(), b.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), b.allowMomentumBounce = !1, e.grabCursor && (!0 === a.allowSlideNext || !0 === a.allowSlidePrev) && a.setGrabCursor(!0), a.emit("sliderFirstMove", d)), a.emit("sliderMove", d), b.isMoved = !0;
                let f = a.isHorizontal() ? i : j;
                c.diff = f, f *= e.touchRatio, r && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", b.currentTranslate = f + b.startTranslate;
                let l = !0,
                    m = e.resistanceRatio;
                if (e.touchReleaseOnEdges && (m = 0), f > 0 && b.currentTranslate > a.minTranslate() ? (l = !1, e.resistance && (b.currentTranslate = a.minTranslate() - 1 + (-a.minTranslate() + b.startTranslate + f) ** m)) : f < 0 && b.currentTranslate < a.maxTranslate() && (l = !1, e.resistance && (b.currentTranslate = a.maxTranslate() + 1 - (a.maxTranslate() - b.startTranslate - f) ** m)), l && (d.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && b.currentTranslate < b.startTranslate && (b.currentTranslate = b.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && b.currentTranslate > b.startTranslate && (b.currentTranslate = b.startTranslate), a.allowSlidePrev || a.allowSlideNext || (b.currentTranslate = b.startTranslate), e.threshold > 0) {
                    if (Math.abs(f) > e.threshold || b.allowThresholdMove) {
                        if (!b.allowThresholdMove) {
                            b.allowThresholdMove = !0, c.startX = c.currentX, c.startY = c.currentY, b.currentTranslate = b.startTranslate, c.diff = a.isHorizontal() ? c.currentX - c.startX : c.currentY - c.startY;
                            return
                        }
                    } else {
                        b.currentTranslate = b.startTranslate;
                        return
                    }
                }
                e.followFinger && !e.cssMode && ((e.freeMode && e.freeMode.enabled && a.freeMode || e.watchSlidesProgress) && (a.updateActiveIndex(), a.updateSlidesClasses()), a.params.freeMode && e.freeMode.enabled && a.freeMode && a.freeMode.onTouchMove(), a.updateProgress(b.currentTranslate), a.setTranslate(b.currentTranslate))
            }

            function I(r) {
                let a = this,
                    b = a.touchEventsData,
                    {
                        params: c,
                        touches: s,
                        rtlTranslate: t,
                        slidesGrid: e,
                        enabled: w
                    } = a;
                if (!w) return;
                let d = r;
                if (d.originalEvent && (d = d.originalEvent), b.allowTouchCallbacks && a.emit("touchEnd", d), b.allowTouchCallbacks = !1, !b.isTouched) {
                    b.isMoved && c.grabCursor && a.setGrabCursor(!1), b.isMoved = !1, b.startMoving = !1;
                    return
                }
                c.grabCursor && b.isMoved && b.isTouched && (!0 === a.allowSlideNext || !0 === a.allowSlidePrev) && a.setGrabCursor(!1);
                let o = v(),
                    p = o - b.touchStartTime;
                if (a.allowClick) {
                    let q = d.path || d.composedPath && d.composedPath();
                    a.updateClickedSlide(q && q[0] || d.target), a.emit("tap click", d), p < 300 && o - b.lastClickTime < 300 && a.emit("doubleTap doubleClick", d)
                }
                if (b.lastClickTime = v(), u(() => {
                        a.destroyed || (a.allowClick = !0)
                    }), !b.isTouched || !b.isMoved || !a.swipeDirection || 0 === s.diff || b.currentTranslate === b.startTranslate) {
                    b.isTouched = !1, b.isMoved = !1, b.startMoving = !1;
                    return
                }
                b.isTouched = !1, b.isMoved = !1, b.startMoving = !1;
                let h;
                if (h = c.followFinger ? t ? a.translate : -a.translate : -b.currentTranslate, c.cssMode) return;
                if (a.params.freeMode && c.freeMode.enabled) {
                    a.freeMode.onTouchEnd({
                        currentPos: h
                    });
                    return
                }
                let f = 0,
                    m = a.slidesSizesGrid[0];
                for (let g = 0; g < e.length; g += g < c.slidesPerGroupSkip ? 1 : c.slidesPerGroup) {
                    let n = g < c.slidesPerGroupSkip - 1 ? 1 : c.slidesPerGroup;
                    void 0 !== e[g + n] ? h >= e[g] && h < e[g + n] && (f = g, m = e[g + n] - e[g]) : h >= e[g] && (f = g, m = e[e.length - 1] - e[e.length - 2])
                }
                let j = null,
                    i = null;
                c.rewind && (a.isBeginning ? i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1 : a.isEnd && (j = 0));
                let k = (h - e[f]) / m,
                    l = f < c.slidesPerGroupSkip - 1 ? 1 : c.slidesPerGroup;
                if (p > c.longSwipesMs) {
                    if (!c.longSwipes) {
                        a.slideTo(a.activeIndex);
                        return
                    }
                    "next" === a.swipeDirection && (k >= c.longSwipesRatio ? a.slideTo(c.rewind && a.isEnd ? j : f + l) : a.slideTo(f)), "prev" === a.swipeDirection && (k > 1 - c.longSwipesRatio ? a.slideTo(f + l) : null !== i && k < 0 && Math.abs(k) > c.longSwipesRatio ? a.slideTo(i) : a.slideTo(f))
                } else {
                    if (!c.shortSwipes) {
                        a.slideTo(a.activeIndex);
                        return
                    }
                    let x = a.navigation && (d.target === a.navigation.nextEl || d.target === a.navigation.prevEl);
                    x ? d.target === a.navigation.nextEl ? a.slideTo(f + l) : a.slideTo(f) : ("next" === a.swipeDirection && a.slideTo(null !== j ? j : f + l), "prev" === a.swipeDirection && a.slideTo(null !== i ? i : f))
                }
            }

            function J() {
                let a = this,
                    {
                        params: b,
                        el: c
                    } = a;
                if (c && 0 === c.offsetWidth) return;
                b.breakpoints && a.setBreakpoint();
                let {
                    allowSlideNext: d,
                    allowSlidePrev: e,
                    snapGrid: f
                } = a;
                a.allowSlideNext = !0, a.allowSlidePrev = !0, a.updateSize(), a.updateSlides(), a.updateSlidesClasses(), ("auto" === b.slidesPerView || b.slidesPerView > 1) && a.isEnd && !a.isBeginning && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0), a.autoplay && a.autoplay.running && a.autoplay.paused && a.autoplay.run(), a.allowSlidePrev = e, a.allowSlideNext = d, a.params.watchOverflow && f !== a.snapGrid && a.checkOverflow()
            }

            function K(a) {
                this.enabled && !this.allowClick && (this.params.preventClicks && a.preventDefault(), this.params.preventClicksPropagation && this.animating && (a.stopPropagation(), a.stopImmediatePropagation()))
            }

            function L() {
                let a = this,
                    {
                        wrapperEl: b,
                        rtlTranslate: d,
                        enabled: e
                    } = a;
                if (!e) return;
                a.previousTranslate = a.translate, a.isHorizontal() ? a.translate = -b.scrollLeft : a.translate = -b.scrollTop, 0 === a.translate && (a.translate = 0), a.updateActiveIndex(), a.updateSlidesClasses();
                let f, c = a.maxTranslate() - a.minTranslate();
                (0 === c ? 0 : (a.translate - a.minTranslate()) / c) !== a.progress && a.updateProgress(d ? -a.translate : a.translate), a.emit("setTranslate", a.translate, !1)
            }
            let M = !1;

            function N() {}
            let O = (a, i) => {
                    let j = n(),
                        {
                            params: d,
                            touchEvents: b,
                            el: e,
                            wrapperEl: m,
                            device: k,
                            support: f
                        } = a,
                        g = !!d.nested,
                        c = "on" === i ? "addEventListener" : "removeEventListener",
                        l = i;
                    if (f.touch) {
                        let h = "touchstart" === b.start && !!f.passiveListener && !!d.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        e[c](b.start, a.onTouchStart, h), e[c](b.move, a.onTouchMove, f.passiveListener ? {
                            passive: !1,
                            capture: g
                        } : g), e[c](b.end, a.onTouchEnd, h), b.cancel && e[c](b.cancel, a.onTouchEnd, h)
                    } else e[c](b.start, a.onTouchStart, !1), j[c](b.move, a.onTouchMove, g), j[c](b.end, a.onTouchEnd, !1);
                    (d.preventClicks || d.preventClicksPropagation) && e[c]("click", a.onClick, !0), d.cssMode && m[c]("scroll", a.onScroll), d.updateOnWindowResize ? a[l](k.ios || k.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", J, !0) : a[l]("observerUpdate", J, !0)
                },
                P = (b, a) => b.grid && a.grid && a.grid.rows > 1;
            var Q = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let j = {
                    eventsEmitter: i,
                    update: {
                        updateSize: function() {
                            let a, b, c = this.$el;
                            a = void 0 !== this.params.width && null !== this.params.width ? this.params.width : c[0].clientWidth, b = void 0 !== this.params.height && null !== this.params.height ? this.params.height : c[0].clientHeight, !(0 === a && this.isHorizontal() || 0 === b && this.isVertical()) && (a = a - parseInt(c.css("padding-left") || 0, 10) - parseInt(c.css("padding-right") || 0, 10), b = b - parseInt(c.css("padding-top") || 0, 10) - parseInt(c.css("padding-bottom") || 0, 10), Number.isNaN(a) && (a = 0), Number.isNaN(b) && (b = 0), Object.assign(this, {
                                width: a,
                                height: b,
                                size: this.isHorizontal() ? a : b
                            }))
                        },
                        updateSlides: function() {
                            let a = this;

                            function k(b) {
                                return a.isHorizontal() ? b : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[b]
                            }

                            function n(a, b) {
                                return parseFloat(a.getPropertyValue(k(b)) || 0)
                            }
                            let b = a.params,
                                {
                                    $wrapperEl: s,
                                    size: f,
                                    rtlTranslate: t,
                                    wrongRTL: M
                                } = a,
                                u = a.virtual && b.virtual.enabled,
                                N = u ? a.virtual.slides.length : a.slides.length,
                                i = s.children(`.${a.params.slideClass}`),
                                o = u ? a.virtual.slides.length : i.length,
                                c = [],
                                p = [],
                                l = [],
                                v = b.slidesOffsetBefore;
                            "function" == typeof v && (v = b.slidesOffsetBefore.call(a));
                            let w = b.slidesOffsetAfter;
                            "function" == typeof w && (w = b.slidesOffsetAfter.call(a));
                            let O = a.snapGrid.length,
                                P = a.slidesGrid.length,
                                g = b.spaceBetween,
                                d = -v,
                                x = 0,
                                q = 0;
                            if (void 0 === f) return;
                            "string" == typeof g && g.indexOf("%") >= 0 && (g = parseFloat(g.replace("%", "")) / 100 * f), a.virtualSize = -g, t ? i.css({
                                marginLeft: "",
                                marginBottom: "",
                                marginTop: ""
                            }) : i.css({
                                marginRight: "",
                                marginBottom: "",
                                marginTop: ""
                            }), b.centeredSlides && b.cssMode && (z(a.wrapperEl, "--swiper-centered-offset-before", ""), z(a.wrapperEl, "--swiper-centered-offset-after", ""));
                            let y = b.grid && b.grid.rows > 1 && a.grid;
                            y && a.grid.initSlides(o);
                            let e, Q = "auto" === b.slidesPerView && b.breakpoints && Object.keys(b.breakpoints).filter(a => void 0 !== b.breakpoints[a].slidesPerView).length > 0;
                            for (let j = 0; j < o; j += 1) {
                                e = 0;
                                let h = i.eq(j);
                                if (y && a.grid.updateSlide(j, h, o, k), "none" !== h.css("display")) {
                                    if ("auto" === b.slidesPerView) {
                                        Q && (i[j].style[k("width")] = "");
                                        let m = getComputedStyle(h[0]),
                                            A = h[0].style.transform,
                                            B = h[0].style.webkitTransform;
                                        if (A && (h[0].style.transform = "none"), B && (h[0].style.webkitTransform = "none"), b.roundLengths) e = a.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0);
                                        else {
                                            let E = n(m, "width"),
                                                R = n(m, "padding-left"),
                                                S = n(m, "padding-right"),
                                                F = n(m, "margin-left"),
                                                G = n(m, "margin-right"),
                                                H = m.getPropertyValue("box-sizing");
                                            if (H && "border-box" === H) e = E + F + G;
                                            else {
                                                let {
                                                    clientWidth: T,
                                                    offsetWidth: U
                                                } = h[0];
                                                e = E + R + S + F + G + (U - T)
                                            }
                                        }
                                        A && (h[0].style.transform = A), B && (h[0].style.webkitTransform = B), b.roundLengths && (e = Math.floor(e))
                                    } else e = (f - (b.slidesPerView - 1) * g) / b.slidesPerView, b.roundLengths && (e = Math.floor(e)), i[j] && (i[j].style[k("width")] = `${e}px`);
                                    i[j] && (i[j].swiperSlideSize = e), l.push(e), b.centeredSlides ? (d = d + e / 2 + x / 2 + g, 0 === x && 0 !== j && (d = d - f / 2 - g), 0 === j && (d = d - f / 2 - g), .001 > Math.abs(d) && (d = 0), b.roundLengths && (d = Math.floor(d)), q % b.slidesPerGroup == 0 && c.push(d), p.push(d)) : (b.roundLengths && (d = Math.floor(d)), (q - Math.min(a.params.slidesPerGroupSkip, q)) % a.params.slidesPerGroup == 0 && c.push(d), p.push(d), d = d + e + g), a.virtualSize += e + g, x = e, q += 1
                                }
                            }
                            if (a.virtualSize = Math.max(a.virtualSize, f) + w, t && M && ("slide" === b.effect || "coverflow" === b.effect) && s.css({
                                    width: `${a.virtualSize+b.spaceBetween}px`
                                }), b.setWrapperSize && s.css({
                                    [k("width")]: `${a.virtualSize+b.spaceBetween}px`
                                }), y && a.grid.updateWrapperSize(e, c, k), !b.centeredSlides) {
                                let I = [];
                                for (let r = 0; r < c.length; r += 1) {
                                    let C = c[r];
                                    b.roundLengths && (C = Math.floor(C)), c[r] <= a.virtualSize - f && I.push(C)
                                }
                                c = I, Math.floor(a.virtualSize - f) - Math.floor(c[c.length - 1]) > 1 && c.push(a.virtualSize - f)
                            }
                            if (0 === c.length && (c = [0]), 0 !== b.spaceBetween) {
                                let V = a.isHorizontal() && t ? "marginLeft" : k("marginRight");
                                i.filter((c, a) => !b.cssMode || a !== i.length - 1).css({
                                    [V]: `${g}px`
                                })
                            }
                            if (b.centeredSlides && b.centeredSlidesBounds) {
                                let J = 0;
                                l.forEach(a => {
                                    J += a + (b.spaceBetween ? b.spaceBetween : 0)
                                }), J -= b.spaceBetween;
                                let W = J - f;
                                c = c.map(a => a < 0 ? -v : a > W ? W + w : a)
                            }
                            if (b.centerInsufficientSlides) {
                                let K = 0;
                                if (l.forEach(a => {
                                        K += a + (b.spaceBetween ? b.spaceBetween : 0)
                                    }), (K -= b.spaceBetween) < f) {
                                    let X = (f - K) / 2;
                                    c.forEach((a, b) => {
                                        c[b] = a - X
                                    }), p.forEach((a, b) => {
                                        p[b] = a + X
                                    })
                                }
                            }
                            if (Object.assign(a, {
                                    slides: i,
                                    snapGrid: c,
                                    slidesGrid: p,
                                    slidesSizesGrid: l
                                }), b.centeredSlides && b.cssMode && !b.centeredSlidesBounds) {
                                z(a.wrapperEl, "--swiper-centered-offset-before", `${-c[0]}px`), z(a.wrapperEl, "--swiper-centered-offset-after", `${a.size/2-l[l.length-1]/2}px`);
                                let Y = -a.snapGrid[0],
                                    Z = -a.slidesGrid[0];
                                a.snapGrid = a.snapGrid.map(a => a + Y), a.slidesGrid = a.slidesGrid.map(a => a + Z)
                            }
                            if (o !== N && a.emit("slidesLengthChange"), c.length !== O && (a.params.watchOverflow && a.checkOverflow(), a.emit("snapGridLengthChange")), p.length !== P && a.emit("slidesGridLengthChange"), b.watchSlidesProgress && a.updateSlidesOffset(), !u && !b.cssMode && ("slide" === b.effect || "fade" === b.effect)) {
                                let D = `${b.containerModifierClass}backface-hidden`,
                                    L = a.$el.hasClass(D);
                                o <= b.maxBackfaceHiddenSlides ? L || a.$el.addClass(D) : L && a.$el.removeClass(D)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let a = this,
                                d = [],
                                i = a.virtual && a.params.virtual.enabled,
                                c = 0,
                                b;
                            "number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);
                            let f = b => i ? a.slides.filter(a => parseInt(a.getAttribute("data-swiper-slide-index"), 10) === b)[0] : a.slides.eq(b)[0];
                            if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) {
                                if (a.params.centeredSlides)(a.visibleSlides || t([])).each(a => {
                                    d.push(a)
                                });
                                else
                                    for (b = 0; b < Math.ceil(a.params.slidesPerView); b += 1) {
                                        let g = a.activeIndex + b;
                                        if (g > a.slides.length && !i) break;
                                        d.push(f(g))
                                    }
                            } else d.push(f(a.activeIndex));
                            for (b = 0; b < d.length; b += 1)
                                if (void 0 !== d[b]) {
                                    let h = d[b].offsetHeight;
                                    c = h > c ? h : c
                                }(c || 0 === c) && a.$wrapperEl.css("height", `${c}px`)
                        },
                        updateSlidesOffset: function() {
                            let b = this.slides;
                            for (let a = 0; a < b.length; a += 1) b[a].swiperSlideOffset = this.isHorizontal() ? b[a].offsetLeft : b[a].offsetTop
                        },
                        updateSlidesProgress: function(f) {
                            void 0 === f && (f = this && this.translate || 0);
                            let a = this,
                                b = a.params,
                                {
                                    slides: c,
                                    rtlTranslate: j,
                                    snapGrid: n
                                } = a;
                            if (0 === c.length) return;
                            void 0 === c[0].swiperSlideOffset && a.updateSlidesOffset();
                            let g = -f;
                            j && (g = f), c.removeClass(b.slideVisibleClass), a.visibleSlidesIndexes = [], a.visibleSlides = [];
                            for (let d = 0; d < c.length; d += 1) {
                                let e = c[d],
                                    h = e.swiperSlideOffset;
                                b.cssMode && b.centeredSlides && (h -= c[0].swiperSlideOffset);
                                let l = (g + (b.centeredSlides ? a.minTranslate() : 0) - h) / (e.swiperSlideSize + b.spaceBetween),
                                    m = (g - n[0] + (b.centeredSlides ? a.minTranslate() : 0) - h) / (e.swiperSlideSize + b.spaceBetween),
                                    i = -(g - h),
                                    k = i + a.slidesSizesGrid[d],
                                    o = i >= 0 && i < a.size - 1 || k > 1 && k <= a.size || i <= 0 && k >= a.size;
                                o && (a.visibleSlides.push(e), a.visibleSlidesIndexes.push(d), c.eq(d).addClass(b.slideVisibleClass)), e.progress = j ? -l : l, e.originalProgress = j ? -m : m
                            }
                            a.visibleSlides = t(a.visibleSlides)
                        },
                        updateProgress: function(d) {
                            if (void 0 === d) {
                                let i = this.rtlTranslate ? -1 : 1;
                                d = this && this.translate && this.translate * i || 0
                            }
                            let e = this.params,
                                f = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: c,
                                    isBeginning: a,
                                    isEnd: b
                                } = this,
                                g = a,
                                h = b;
                            0 === f ? (c = 0, a = !0, b = !0) : (a = (c = (d - this.minTranslate()) / f) <= 0, b = c >= 1), Object.assign(this, {
                                progress: c,
                                isBeginning: a,
                                isEnd: b
                            }), (e.watchSlidesProgress || e.centeredSlides && e.autoHeight) && this.updateSlidesProgress(d), a && !g && this.emit("reachBeginning toEdge"), b && !h && this.emit("reachEnd toEdge"), (g && !a || h && !b) && this.emit("fromEdge"), this.emit("progress", c)
                        },
                        updateSlidesClasses: function() {
                            let {
                                slides: e,
                                params: a,
                                $wrapperEl: b,
                                activeIndex: g,
                                realIndex: h
                            } = this, i = this.virtual && a.virtual.enabled;
                            e.removeClass(`${a.slideActiveClass} ${a.slideNextClass} ${a.slidePrevClass} ${a.slideDuplicateActiveClass} ${a.slideDuplicateNextClass} ${a.slideDuplicatePrevClass}`);
                            let f;
                            (f = i ? this.$wrapperEl.find(`.${a.slideClass}[data-swiper-slide-index="${g}"]`) : e.eq(g)).addClass(a.slideActiveClass), a.loop && (f.hasClass(a.slideDuplicateClass) ? b.children(`.${a.slideClass}:not(.${a.slideDuplicateClass})[data-swiper-slide-index="${h}"]`).addClass(a.slideDuplicateActiveClass) : b.children(`.${a.slideClass}.${a.slideDuplicateClass}[data-swiper-slide-index="${h}"]`).addClass(a.slideDuplicateActiveClass));
                            let c = f.nextAll(`.${a.slideClass}`).eq(0).addClass(a.slideNextClass);
                            a.loop && 0 === c.length && (c = e.eq(0)).addClass(a.slideNextClass);
                            let d = f.prevAll(`.${a.slideClass}`).eq(0).addClass(a.slidePrevClass);
                            a.loop && 0 === d.length && (d = e.eq(-1)).addClass(a.slidePrevClass), a.loop && (c.hasClass(a.slideDuplicateClass) ? b.children(`.${a.slideClass}:not(.${a.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(a.slideDuplicateNextClass) : b.children(`.${a.slideClass}.${a.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(a.slideDuplicateNextClass), d.hasClass(a.slideDuplicateClass) ? b.children(`.${a.slideClass}:not(.${a.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(a.slideDuplicatePrevClass) : b.children(`.${a.slideClass}.${a.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(a.slideDuplicatePrevClass)), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(l) {
                            let a = this,
                                e = a.rtlTranslate ? a.translate : -a.translate,
                                {
                                    slidesGrid: d,
                                    snapGrid: g,
                                    params: h,
                                    activeIndex: i,
                                    realIndex: m,
                                    snapIndex: n
                                } = a,
                                b = l,
                                f;
                            if (void 0 === b) {
                                for (let c = 0; c < d.length; c += 1) void 0 !== d[c + 1] ? e >= d[c] && e < d[c + 1] - (d[c + 1] - d[c]) / 2 ? b = c : e >= d[c] && e < d[c + 1] && (b = c + 1) : e >= d[c] && (b = c);
                                h.normalizeSlideIndex && (b < 0 || void 0 === b) && (b = 0)
                            }
                            if (g.indexOf(e) >= 0) f = g.indexOf(e);
                            else {
                                let j = Math.min(h.slidesPerGroupSkip, b);
                                f = j + Math.floor((b - j) / h.slidesPerGroup)
                            }
                            if (f >= g.length && (f = g.length - 1), b === i) {
                                f !== n && (a.snapIndex = f, a.emit("snapIndexChange"));
                                return
                            }
                            let k = parseInt(a.slides.eq(b).attr("data-swiper-slide-index") || b, 10);
                            Object.assign(a, {
                                snapIndex: f,
                                realIndex: k,
                                previousIndex: i,
                                activeIndex: b
                            }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), m !== k && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange")
                        },
                        updateClickedSlide: function(g) {
                            let a = this,
                                d = a.params,
                                b = t(g).closest(`.${d.slideClass}`)[0],
                                e = !1,
                                f;
                            if (b) {
                                for (let c = 0; c < a.slides.length; c += 1)
                                    if (a.slides[c] === b) {
                                        e = !0, f = c;
                                        break
                                    }
                            }
                            if (b && e) a.clickedSlide = b, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(t(b).attr("data-swiper-slide-index"), 10) : a.clickedIndex = f;
                            else {
                                a.clickedSlide = void 0, a.clickedIndex = void 0;
                                return
                            }
                            d.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(a) {
                            void 0 === a && (a = this.isHorizontal() ? "x" : "y");
                            let {
                                params: d,
                                rtlTranslate: e,
                                translate: b,
                                $wrapperEl: f
                            } = this;
                            if (d.virtualTranslate) return e ? -b : b;
                            if (d.cssMode) return b;
                            let c = function(g, d) {
                                void 0 === d && (d = "x");
                                let e = p(),
                                    c, a, f, b = function(b) {
                                        let c = p(),
                                            a;
                                        return c.getComputedStyle && (a = c.getComputedStyle(b, null)), !a && b.currentStyle && (a = b.currentStyle), a || (a = b.style), a
                                    }(g, null);
                                return e.WebKitCSSMatrix ? ((a = b.transform || b.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(a => a.replace(",", ".")).join(", ")), f = new e.WebKitCSSMatrix("none" === a ? "" : a)) : c = (f = b.MozTransform || b.OTransform || b.MsTransform || b.msTransform || b.transform || b.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === d && (a = e.WebKitCSSMatrix ? f.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), "y" === d && (a = e.WebKitCSSMatrix ? f.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), a || 0
                            }(f[0], a);
                            return e && (c = -c), c || 0
                        },
                        setTranslate: function(d, g) {
                            let a = this,
                                {
                                    rtlTranslate: h,
                                    params: e,
                                    $wrapperEl: i,
                                    wrapperEl: j,
                                    progress: k
                                } = a,
                                b = 0,
                                c = 0;
                            a.isHorizontal() ? b = h ? -d : d : c = d, e.roundLengths && (b = Math.floor(b), c = Math.floor(c)), e.cssMode ? j[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -b : -c : e.virtualTranslate || i.transform(`translate3d(${b}px, ${c}px, 0px)`), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? b : c;
                            let l, f = a.maxTranslate() - a.minTranslate();
                            (0 === f ? 0 : (d - a.minTranslate()) / f) !== k && a.updateProgress(d), a.emit("setTranslate", a.translate, g)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(d, b, e, f, h) {
                            void 0 === d && (d = 0), void 0 === b && (b = this.params.speed), void 0 === e && (e = !0), void 0 === f && (f = !0);
                            let a = this,
                                {
                                    params: i,
                                    wrapperEl: j
                                } = a;
                            if (a.animating && i.preventInteractionOnTransition) return !1;
                            let k = a.minTranslate(),
                                l = a.maxTranslate(),
                                c;
                            if (c = f && d > k ? k : f && d < l ? l : d, a.updateProgress(c), i.cssMode) {
                                let g = a.isHorizontal();
                                if (0 === b) j[g ? "scrollLeft" : "scrollTop"] = -c;
                                else {
                                    if (!a.support.smoothScroll) return A({
                                        swiper: a,
                                        targetPosition: -c,
                                        side: g ? "left" : "top"
                                    }), !0;
                                    j.scrollTo({
                                        [g ? "left" : "top"]: -c,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === b ? (a.setTransition(0), a.setTranslate(c), e && (a.emit("beforeTransitionStart", b, h), a.emit("transitionEnd"))) : (a.setTransition(b), a.setTranslate(c), e && (a.emit("beforeTransitionStart", b, h), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(b) {
                                a && !a.destroyed && b.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, e && a.emit("transitionEnd"))
                            }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(a, b) {
                            this.params.cssMode || this.$wrapperEl.transition(a), this.emit("setTransition", a, b)
                        },
                        transitionStart: function(a, c) {
                            void 0 === a && (a = !0);
                            let {
                                params: b
                            } = this;
                            b.cssMode || (b.autoHeight && this.updateAutoHeight(), F({
                                swiper: this,
                                runCallbacks: a,
                                direction: c,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(b, c) {
                            void 0 === b && (b = !0);
                            let a = this,
                                {
                                    params: d
                                } = a;
                            a.animating = !1, d.cssMode || (a.setTransition(0), F({
                                swiper: a,
                                runCallbacks: b,
                                direction: c,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(d, g, f, t, y) {
                            if (void 0 === d && (d = 0), void 0 === g && (g = this.params.speed), void 0 === f && (f = !0), "number" != typeof d && "string" != typeof d) throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof d}] given.`);
                            if ("string" == typeof d) {
                                let u = parseInt(d, 10),
                                    z = isFinite(u);
                                if (!z) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${d}] given.`);
                                d = u
                            }
                            let a = this,
                                b = d;
                            b < 0 && (b = 0);
                            let {
                                params: h,
                                snapGrid: n,
                                slidesGrid: l,
                                previousIndex: B,
                                activeIndex: j,
                                rtlTranslate: o,
                                wrapperEl: v,
                                enabled: C
                            } = a;
                            if (a.animating && h.preventInteractionOnTransition || !C && !t && !y) return !1;
                            let w = Math.min(a.params.slidesPerGroupSkip, b),
                                p = w + Math.floor((b - w) / a.params.slidesPerGroup);
                            p >= n.length && (p = n.length - 1), (j || h.initialSlide || 0) === (B || 0) && f && a.emit("beforeSlideChangeStart");
                            let c = -n[p];
                            if (a.updateProgress(c), h.normalizeSlideIndex)
                                for (let e = 0; e < l.length; e += 1) {
                                    let k = -Math.floor(100 * c),
                                        m = Math.floor(100 * l[e]),
                                        q = Math.floor(100 * l[e + 1]);
                                    void 0 !== l[e + 1] ? k >= m && k < q - (q - m) / 2 ? b = e : k >= m && k < q && (b = e + 1) : k >= m && (b = e)
                                }
                            if (a.initialized && b !== j && (!a.allowSlideNext && c < a.translate && c < a.minTranslate() || !a.allowSlidePrev && c > a.translate && c > a.maxTranslate() && (j || 0) !== b)) return !1;
                            let i;
                            if (i = b > j ? "next" : b < j ? "prev" : "reset", o && -c === a.translate || !o && c === a.translate) return a.updateActiveIndex(b), h.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== h.effect && a.setTranslate(c), "reset" !== i && (a.transitionStart(f, i), a.transitionEnd(f, i)), !1;
                            if (h.cssMode) {
                                let r = a.isHorizontal(),
                                    s = o ? c : -c;
                                if (0 === g) {
                                    let x = a.virtual && a.params.virtual.enabled;
                                    x && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), v[r ? "scrollLeft" : "scrollTop"] = s, x && requestAnimationFrame(() => {
                                        a.wrapperEl.style.scrollSnapType = "", a._swiperImmediateVirtual = !1
                                    })
                                } else {
                                    if (!a.support.smoothScroll) return A({
                                        swiper: a,
                                        targetPosition: s,
                                        side: r ? "left" : "top"
                                    }), !0;
                                    v.scrollTo({
                                        [r ? "left" : "top"]: s,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return a.setTransition(g), a.setTranslate(c), a.updateActiveIndex(b), a.updateSlidesClasses(), a.emit("beforeTransitionStart", g, t), a.transitionStart(f, i), 0 === g ? a.transitionEnd(f, i) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(b) {
                                a && !a.destroyed && b.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(f, i))
                            }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(a, b, c, f) {
                            if (void 0 === a && (a = 0), void 0 === b && (b = this.params.speed), void 0 === c && (c = !0), "string" == typeof a) {
                                let d = parseInt(a, 10),
                                    g = isFinite(d);
                                if (!g) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${a}] given.`);
                                a = d
                            }
                            let e = a;
                            return this.params.loop && (e += this.loopedSlides), this.slideTo(e, b, c, f)
                        },
                        slideNext: function(c, d, e) {
                            void 0 === c && (c = this.params.speed), void 0 === d && (d = !0);
                            let a = this,
                                {
                                    animating: g,
                                    enabled: h,
                                    params: b
                                } = a;
                            if (!h) return a;
                            let f = b.slidesPerGroup;
                            "auto" === b.slidesPerView && 1 === b.slidesPerGroup && b.slidesPerGroupAuto && (f = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                            let i = a.activeIndex < b.slidesPerGroupSkip ? 1 : f;
                            if (b.loop) {
                                if (g && b.loopPreventsSlide) return !1;
                                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                            }
                            return b.rewind && a.isEnd ? a.slideTo(0, c, d, e) : a.slideTo(a.activeIndex + i, c, d, e)
                        },
                        slidePrev: function(d, e, i) {
                            void 0 === d && (d = this.params.speed), void 0 === e && (e = !0);
                            let a = this,
                                {
                                    params: b,
                                    animating: j,
                                    snapGrid: f,
                                    slidesGrid: k,
                                    rtlTranslate: l,
                                    enabled: m
                                } = a;
                            if (!m) return a;
                            if (b.loop) {
                                if (j && b.loopPreventsSlide) return !1;
                                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                            }
                            let n = l ? a.translate : -a.translate;

                            function o(a) {
                                return a < 0 ? -Math.floor(Math.abs(a)) : Math.floor(a)
                            }
                            let p = o(n),
                                q = f.map(a => o(a)),
                                g = f[q.indexOf(p) - 1];
                            if (void 0 === g && b.cssMode) {
                                let h;
                                f.forEach((a, b) => {
                                    p >= a && (h = b)
                                }), void 0 !== h && (g = f[h > 0 ? h - 1 : h])
                            }
                            let c = 0;
                            if (void 0 !== g && ((c = k.indexOf(g)) < 0 && (c = a.activeIndex - 1), "auto" === b.slidesPerView && 1 === b.slidesPerGroup && b.slidesPerGroupAuto && (c = Math.max(c = c - a.slidesPerViewDynamic("previous", !0) + 1, 0))), b.rewind && a.isBeginning) {
                                let r = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                                return a.slideTo(r, d, e, i)
                            }
                            return a.slideTo(c, d, e, i)
                        },
                        slideReset: function(a, b, c) {
                            return void 0 === a && (a = this.params.speed), void 0 === b && (b = !0), this.slideTo(this.activeIndex, a, b, c)
                        },
                        slideToClosest: function(e, f, k, d) {
                            void 0 === e && (e = this.params.speed), void 0 === f && (f = !0), void 0 === d && (d = .5);
                            let a = this,
                                b = a.activeIndex,
                                h = Math.min(a.params.slidesPerGroupSkip, b),
                                c = h + Math.floor((b - h) / a.params.slidesPerGroup),
                                g = a.rtlTranslate ? a.translate : -a.translate;
                            if (g >= a.snapGrid[c]) {
                                let i = a.snapGrid[c],
                                    l = a.snapGrid[c + 1];
                                g - i > (l - i) * d && (b += a.params.slidesPerGroup)
                            } else {
                                let j = a.snapGrid[c - 1],
                                    m = a.snapGrid[c];
                                g - j <= (m - j) * d && (b -= a.params.slidesPerGroup)
                            }
                            return b = Math.max(b, 0), b = Math.min(b, a.slidesGrid.length - 1), a.slideTo(b, e, f, k)
                        },
                        slideToClickedSlide: function() {
                            let a = this,
                                {
                                    params: b,
                                    $wrapperEl: f
                                } = a,
                                d = "auto" === b.slidesPerView ? a.slidesPerViewDynamic() : b.slidesPerView,
                                c = a.clickedIndex,
                                e;
                            if (b.loop) {
                                if (a.animating) return;
                                e = parseInt(t(a.clickedSlide).attr("data-swiper-slide-index"), 10), b.centeredSlides ? c < a.loopedSlides - d / 2 || c > a.slides.length - a.loopedSlides + d / 2 ? (a.loopFix(), c = f.children(`.${b.slideClass}[data-swiper-slide-index="${e}"]:not(.${b.slideDuplicateClass})`).eq(0).index(), u(() => {
                                    a.slideTo(c)
                                })) : a.slideTo(c) : c > a.slides.length - d ? (a.loopFix(), c = f.children(`.${b.slideClass}[data-swiper-slide-index="${e}"]:not(.${b.slideDuplicateClass})`).eq(0).index(), u(() => {
                                    a.slideTo(c)
                                })) : a.slideTo(c)
                            } else a.slideTo(c)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            let d = this,
                                l = n(),
                                {
                                    params: a,
                                    $wrapperEl: e
                                } = d,
                                b = e.children().length > 0 ? t(e.children()[0].parentNode) : e;
                            b.children(`.${a.slideClass}.${a.slideDuplicateClass}`).remove();
                            let c = b.children(`.${a.slideClass}`);
                            if (a.loopFillGroupWithBlank) {
                                let h = a.slidesPerGroup - c.length % a.slidesPerGroup;
                                if (h !== a.slidesPerGroup) {
                                    for (let i = 0; i < h; i += 1) {
                                        let m = t(l.createElement("div")).addClass(`${a.slideClass} ${a.slideBlankClass}`);
                                        b.append(m)
                                    }
                                    c = b.children(`.${a.slideClass}`)
                                }
                            }
                            "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = c.length), d.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10)), d.loopedSlides += a.loopAdditionalSlides, d.loopedSlides > c.length && (d.loopedSlides = c.length);
                            let j = [],
                                k = [];
                            c.each((b, a) => {
                                let e = t(b);
                                a < d.loopedSlides && k.push(b), a < c.length && a >= c.length - d.loopedSlides && j.push(b), e.attr("data-swiper-slide-index", a)
                            });
                            for (let f = 0; f < k.length; f += 1) b.append(t(k[f].cloneNode(!0)).addClass(a.slideDuplicateClass));
                            for (let g = j.length - 1; g >= 0; g -= 1) b.prepend(t(j[g].cloneNode(!0)).addClass(a.slideDuplicateClass))
                        },
                        loopFix: function() {
                            let a = this;
                            a.emit("beforeLoopFix");
                            let {
                                activeIndex: d,
                                slides: f,
                                loopedSlides: b,
                                allowSlidePrev: h,
                                allowSlideNext: i,
                                snapGrid: j,
                                rtlTranslate: g
                            } = a, c;
                            a.allowSlidePrev = !0, a.allowSlideNext = !0;
                            let k = -j[d],
                                e = k - a.getTranslate();
                            if (d < b) {
                                c = f.length - 3 * b + d, c += b;
                                let l = a.slideTo(c, 0, !1, !0);
                                l && 0 !== e && a.setTranslate((g ? -a.translate : a.translate) - e)
                            } else if (d >= f.length - b) {
                                c = -f.length + d + b, c += b;
                                let m = a.slideTo(c, 0, !1, !0);
                                m && 0 !== e && a.setTranslate((g ? -a.translate : a.translate) - e)
                            }
                            a.allowSlidePrev = h, a.allowSlideNext = i, a.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                $wrapperEl: b,
                                params: a,
                                slides: c
                            } = this;
                            b.children(`.${a.slideClass}.${a.slideDuplicateClass},.${a.slideClass}.${a.slideBlankClass}`).remove(), c.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(b) {
                            if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                            let a = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                            a.style.cursor = "move", a.style.cursor = b ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            let a = this;
                            !a.support.touch && (!a.params.watchOverflow || !a.isLocked) && !a.params.cssMode && (a["container" === a.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let a = this,
                                b = n(),
                                {
                                    params: c,
                                    support: d
                                } = a;
                            a.onTouchStart = G.bind(a), a.onTouchMove = H.bind(a), a.onTouchEnd = I.bind(a), c.cssMode && (a.onScroll = L.bind(a)), a.onClick = K.bind(a), d.touch && !M && (b.addEventListener("touchstart", N), M = !0), O(a, "on")
                        },
                        detachEvents: function() {
                            O(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let a = this,
                                {
                                    activeIndex: m,
                                    initialized: g,
                                    loopedSlides: n = 0,
                                    params: b,
                                    $el: f
                                } = a,
                                d = b.breakpoints;
                            if (!d || d && 0 === Object.keys(d).length) return;
                            let e = a.getBreakpoint(d, a.params.breakpointsBase, a.el);
                            if (!e || a.currentBreakpoint === e) return;
                            let o = e in d ? d[e] : void 0,
                                c = o || a.originalParams,
                                h = P(a, b),
                                i = P(a, c),
                                j = b.enabled;
                            h && !i ? (f.removeClass(`${b.containerModifierClass}grid ${b.containerModifierClass}grid-column`), a.emitContainerClasses()) : !h && i && (f.addClass(`${b.containerModifierClass}grid`), (c.grid.fill && "column" === c.grid.fill || !c.grid.fill && "column" === b.grid.fill) && f.addClass(`${b.containerModifierClass}grid-column`), a.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(d => {
                                let e = b[d] && b[d].enabled,
                                    f = c[d] && c[d].enabled;
                                e && !f && a[d].disable(), !e && f && a[d].enable()
                            });
                            let k = c.direction && c.direction !== b.direction,
                                p = b.loop && (c.slidesPerView !== b.slidesPerView || k);
                            k && g && a.changeDirection(), y(a.params, c);
                            let l = a.params.enabled;
                            Object.assign(a, {
                                allowTouchMove: a.params.allowTouchMove,
                                allowSlideNext: a.params.allowSlideNext,
                                allowSlidePrev: a.params.allowSlidePrev
                            }), j && !l ? a.disable() : !j && l && a.enable(), a.currentBreakpoint = e, a.emit("_beforeBreakpoint", c), p && g && (a.loopDestroy(), a.loopCreate(), a.updateSlides(), a.slideTo(m - n + a.loopedSlides, 0, !1)), a.emit("breakpoint", c)
                        },
                        getBreakpoint: function(f, a, b) {
                            if (void 0 === a && (a = "window"), !f || "container" === a && !b) return;
                            let c = !1,
                                g = p(),
                                j = "window" === a ? g.innerHeight : b.clientHeight,
                                d = Object.keys(f).map(a => {
                                    if ("string" == typeof a && 0 === a.indexOf("@")) {
                                        let b = parseFloat(a.substr(1)),
                                            c = j * b;
                                        return {
                                            value: c,
                                            point: a
                                        }
                                    }
                                    return {
                                        value: a,
                                        point: a
                                    }
                                });
                            d.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
                            for (let e = 0; e < d.length; e += 1) {
                                let {
                                    point: h,
                                    value: i
                                } = d[e];
                                "window" === a ? g.matchMedia(`(min-width: ${i}px)`).matches && (c = h) : i <= b.clientWidth && (c = h)
                            }
                            return c || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let a = this,
                                {
                                    isLocked: b,
                                    params: c
                                } = a,
                                {
                                    slidesOffsetBefore: d
                                } = c;
                            if (d) {
                                let e = a.slides.length - 1,
                                    f = a.slidesGrid[e] + a.slidesSizesGrid[e] + 2 * d;
                                a.isLocked = a.size > f
                            } else a.isLocked = 1 === a.snapGrid.length;
                            !0 === c.allowSlideNext && (a.allowSlideNext = !a.isLocked), !0 === c.allowSlidePrev && (a.allowSlidePrev = !a.isLocked), b && b !== a.isLocked && (a.isEnd = !1), b !== a.isLocked && a.emit(a.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: b,
                                params: a,
                                rtl: d,
                                $el: e,
                                device: c,
                                support: f
                            } = this, g = function(a, c) {
                                let b = [];
                                return a.forEach(a => {
                                    "object" == typeof a ? Object.keys(a).forEach(d => {
                                        a[d] && b.push(c + d)
                                    }) : "string" == typeof a && b.push(c + a)
                                }), b
                            }(["initialized", a.direction, {
                                "pointer-events": !f.touch
                            }, {
                                "free-mode": this.params.freeMode && a.freeMode.enabled
                            }, {
                                autoheight: a.autoHeight
                            }, {
                                rtl: d
                            }, {
                                grid: a.grid && a.grid.rows > 1
                            }, {
                                "grid-column": a.grid && a.grid.rows > 1 && "column" === a.grid.fill
                            }, {
                                android: c.android
                            }, {
                                ios: c.ios
                            }, {
                                "css-mode": a.cssMode
                            }, {
                                centered: a.cssMode && a.centeredSlides
                            }, {
                                "watch-progress": a.watchSlidesProgress
                            }], a.containerModifierClass);
                            b.push(...g), e.addClass([...b].join(" ")), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                $el: a,
                                classNames: b
                            } = this;
                            a.removeClass(b.join(" ")), this.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(d, c, e, f, g, j) {
                            let h = p(),
                                a;

                            function b() {
                                j && j()
                            }
                            let i = t(d).parent("picture")[0];
                            i || d.complete && g ? b() : c ? ((a = new h.Image).onload = b, a.onerror = b, f && (a.sizes = f), e && (a.srcset = e), c && (a.src = c)) : b()
                        },
                        preloadImages: function() {
                            let b = this;

                            function d() {
                                null != b && b && !b.destroyed && (void 0 !== b.imagesLoaded && (b.imagesLoaded += 1), b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("imagesReady")))
                            }
                            b.imagesToLoad = b.$el.find("img");
                            for (let c = 0; c < b.imagesToLoad.length; c += 1) {
                                let a = b.imagesToLoad[c];
                                b.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, d)
                            }
                        }
                    }
                },
                R = {};
            class c {
                constructor() {
                    let e, b;
                    for (var g, h = arguments.length, d = Array(h), f = 0; f < h; f++) d[f] = arguments[f];
                    if (1 === d.length && d[0].constructor && "Object" === Object.prototype.toString.call(d[0]).slice(8, -1) ? b = d[0] : [e, b] = d, b || (b = {}), b = y({}, b), e && !b.el && (b.el = e), b.el && t(b.el).length > 1) {
                        let i = [];
                        return t(b.el).each(a => {
                            let d = y({}, b, {
                                el: a
                            });
                            i.push(new c(d))
                        }), i
                    }
                    let a = this;
                    a.__swiper__ = !0, a.support = C(), a.device = (g = {
                        userAgent: b.userAgent
                    }, D || (D = function(e) {
                        let {
                            userAgent: h
                        } = void 0 === e ? {} : e, i = C(), d = p(), f = d.navigator.platform, a = h || d.navigator.userAgent, b = {
                            ios: !1,
                            android: !1
                        }, j = d.screen.width, k = d.screen.height, l = a.match(/(Android);?[\s\/]+([\d.]+)?/), c = a.match(/(iPad).*OS\s([\d_]+)/), m = a.match(/(iPod)(.*OS\s([\d_]+))?/), n = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/), g = "MacIntel" === f;
                        return !c && g && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${j}x${k}`) >= 0 && ((c = a.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), g = !1), l && "Win32" !== f && (b.os = "android", b.android = !0), (c || n || m) && (b.os = "ios", b.ios = !0), b
                    }(g)), D), a.browser = (E || (E = function() {
                        let a = p();
                        return {
                            isSafari: function() {
                                let b = a.navigator.userAgent.toLowerCase();
                                return b.indexOf("safari") >= 0 && 0 > b.indexOf("chrome") && 0 > b.indexOf("android")
                            }(),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)
                        }
                    }()), E), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], b.modules && Array.isArray(b.modules) && a.modules.push(...b.modules);
                    let j = {};
                    a.modules.forEach(c => {
                        var d, e;
                        c({
                            swiper: a,
                            extendParams: (d = b, e = j, function(b) {
                                void 0 === b && (b = {});
                                let a = Object.keys(b)[0],
                                    c = b[a];
                                if ("object" != typeof c || null === c || (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === d[a] && (d[a] = {
                                        auto: !0
                                    }), !(a in d && "enabled" in c))) {
                                    y(e, b);
                                    return
                                }!0 === d[a] && (d[a] = {
                                    enabled: !0
                                }), "object" != typeof d[a] || "enabled" in d[a] || (d[a].enabled = !0), d[a] || (d[a] = {
                                    enabled: !1
                                }), y(e, b)
                            }),
                            on: a.on.bind(a),
                            once: a.once.bind(a),
                            off: a.off.bind(a),
                            emit: a.emit.bind(a)
                        })
                    });
                    let k = y({}, Q, j);
                    return a.params = y({}, k, R, b), a.originalParams = y({}, a.params), a.passedParams = y({}, b), a.params && a.params.on && Object.keys(a.params.on).forEach(b => {
                        a.on(b, a.params.on[b])
                    }), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = t, Object.assign(a, {
                        enabled: a.params.enabled,
                        el: e,
                        classNames: [],
                        slides: t(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === a.params.direction,
                        isVertical: () => "vertical" === a.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: a.params.allowSlideNext,
                        allowSlidePrev: a.params.allowSlidePrev,
                        touchEvents: function() {
                            let b = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                c = ["pointerdown", "pointermove", "pointerup"];
                            return a.touchEventsTouch = {
                                start: b[0],
                                move: b[1],
                                end: b[2],
                                cancel: b[3]
                            }, a.touchEventsDesktop = {
                                start: c[0],
                                move: c[1],
                                end: c[2]
                            }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: a.params.focusableElements,
                            lastClickTime: v(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: a.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), a.emit("_swiper"), a.params.init && a.init(), a
                }
                enable() {
                    let a = this;
                    a.enabled || (a.enabled = !0, a.params.grabCursor && a.setGrabCursor(), a.emit("enable"))
                }
                disable() {
                    let a = this;
                    a.enabled && (a.enabled = !1, a.params.grabCursor && a.unsetGrabCursor(), a.emit("disable"))
                }
                setProgress(a, b) {
                    a = Math.min(Math.max(a, 0), 1);
                    let c = this.minTranslate(),
                        d = this.maxTranslate(),
                        e = (d - c) * a + c;
                    this.translateTo(e, void 0 === b ? 0 : b), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let a = this;
                    if (!a.params._emitClasses || !a.el) return;
                    let b = a.el.className.split(" ").filter(b => 0 === b.indexOf("swiper") || 0 === b.indexOf(a.params.containerModifierClass));
                    a.emit("_containerClasses", b.join(" "))
                }
                getSlideClasses(a) {
                    let b = this;
                    return b.destroyed ? "" : a.className.split(" ").filter(a => 0 === a.indexOf("swiper-slide") || 0 === a.indexOf(b.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let a = this;
                    if (!a.params._emitClasses || !a.el) return;
                    let b = [];
                    a.slides.each(c => {
                        let d = a.getSlideClasses(c);
                        b.push({
                            slideEl: c,
                            classNames: d
                        }), a.emit("_slideClass", c, d)
                    }), a.emit("_slideClasses", b)
                }
                slidesPerViewDynamic(k, l) {
                    void 0 === k && (k = "current"), void 0 === l && (l = !1);
                    let {
                        params: n,
                        slides: b,
                        slidesGrid: c,
                        slidesSizesGrid: o,
                        size: d,
                        activeIndex: a
                    } = this, e = 1;
                    if (n.centeredSlides) {
                        let g = b[a].swiperSlideSize,
                            h;
                        for (let i = a + 1; i < b.length; i += 1) b[i] && !h && (g += b[i].swiperSlideSize, e += 1, g > d && (h = !0));
                        for (let j = a - 1; j >= 0; j -= 1) b[j] && !h && (g += b[j].swiperSlideSize, e += 1, g > d && (h = !0))
                    } else if ("current" === k)
                        for (let f = a + 1; f < b.length; f += 1) {
                            let p = l ? c[f] + o[f] - c[a] < d : c[f] - c[a] < d;
                            p && (e += 1)
                        } else
                            for (let m = a - 1; m >= 0; m -= 1) {
                                let q = c[a] - c[m] < d;
                                q && (e += 1)
                            }
                    return e
                }
                update() {
                    let a = this;
                    if (!a || a.destroyed) return;
                    let {
                        snapGrid: d,
                        params: b
                    } = a;

                    function c() {
                        let b = a.rtlTranslate ? -1 * a.translate : a.translate,
                            c = Math.min(Math.max(b, a.maxTranslate()), a.minTranslate());
                        a.setTranslate(c), a.updateActiveIndex(), a.updateSlidesClasses()
                    }
                    b.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses();
                    let e;
                    a.params.freeMode && a.params.freeMode.enabled ? (c(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || a.params.slidesPerView > 1) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || c(), b.watchOverflow && d !== a.snapGrid && a.checkOverflow(), a.emit("update")
                }
                changeDirection(b, c) {
                    void 0 === c && (c = !0);
                    let a = this,
                        d = a.params.direction;
                    return b || (b = "horizontal" === d ? "vertical" : "horizontal"), b === d || "horizontal" !== b && "vertical" !== b || (a.$el.removeClass(`${a.params.containerModifierClass}${d}`).addClass(`${a.params.containerModifierClass}${b}`), a.emitContainerClasses(), a.params.direction = b, a.slides.each(a => {
                        "vertical" === b ? a.style.width = "" : a.style.height = ""
                    }), a.emit("changeDirection"), c && a.update()), a
                }
                changeLanguageDirection(b) {
                    let a = this;
                    (!a.rtl || "rtl" !== b) && (a.rtl || "ltr" !== b) && (a.rtl = "rtl" === b, a.rtlTranslate = "horizontal" === a.params.direction && a.rtl, a.rtl ? (a.$el.addClass(`${a.params.containerModifierClass}rtl`), a.el.dir = "rtl") : (a.$el.removeClass(`${a.params.containerModifierClass}rtl`), a.el.dir = "ltr"), a.update())
                }
                mount(b) {
                    let a = this;
                    if (a.mounted) return !0;
                    let c = t(b || a.params.el);
                    if (!(b = c[0])) return !1;
                    b.swiper = a;
                    let h = () => `.${(a.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        f = () => {
                            if (b && b.shadowRoot && b.shadowRoot.querySelector) {
                                let a = t(b.shadowRoot.querySelector(h()));
                                return a.children = a => c.children(a), a
                            }
                            return c.children ? c.children(h()) : t(c).children(h())
                        },
                        d = f();
                    if (0 === d.length && a.params.createElements) {
                        let g = n(),
                            e = g.createElement("div");
                        d = t(e), e.className = a.params.wrapperClass, c.append(e), c.children(`.${a.params.slideClass}`).each(a => {
                            d.append(a)
                        })
                    }
                    return Object.assign(a, {
                        $el: c,
                        el: b,
                        $wrapperEl: d,
                        wrapperEl: d[0],
                        mounted: !0,
                        rtl: "rtl" === b.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === a.params.direction && ("rtl" === b.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === d.css("display")
                    }), !0
                }
                init(b) {
                    let a = this;
                    if (a.initialized) return a;
                    let c = a.mount(b);
                    return !1 === c || (a.emit("beforeInit"), a.params.breakpoints && a.setBreakpoint(), a.addClasses(), a.params.loop && a.loopCreate(), a.updateSize(), a.updateSlides(), a.params.watchOverflow && a.checkOverflow(), a.params.grabCursor && a.enabled && a.setGrabCursor(), a.params.preloadImages && a.preloadImages(), a.params.loop ? a.slideTo(a.params.initialSlide + a.loopedSlides, 0, a.params.runCallbacksOnInit, !1, !0) : a.slideTo(a.params.initialSlide, 0, a.params.runCallbacksOnInit, !1, !0), a.attachEvents(), a.initialized = !0, a.emit("init"), a.emit("afterInit")), a
                }
                destroy(c, d) {
                    void 0 === c && (c = !0), void 0 === d && (d = !0);
                    let a = this,
                        {
                            params: b,
                            $el: f,
                            $wrapperEl: g,
                            slides: e
                        } = a;
                    return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), b.loop && a.loopDestroy(), d && (a.removeClasses(), f.removeAttr("style"), g.removeAttr("style"), e && e.length && e.removeClass([b.slideVisibleClass, b.slideActiveClass, b.slideNextClass, b.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(b => {
                        a.off(b)
                    }), !1 !== c && (a.$el[0].swiper = null, function(a) {
                        let b = a;
                        Object.keys(b).forEach(a => {
                            try {
                                b[a] = null
                            } catch (c) {}
                            try {
                                delete b[a]
                            } catch (d) {}
                        })
                    }(a)), a.destroyed = !0), null
                }
                static extendDefaults(a) {
                    y(R, a)
                }
                static get extendedDefaults() {
                    return R
                }
                static get defaults() {
                    return Q
                }
                static installModule(a) {
                    c.prototype.__modules__ || (c.prototype.__modules__ = []);
                    let b = c.prototype.__modules__;
                    "function" == typeof a && 0 > b.indexOf(a) && b.push(a)
                }
                static use(a) {
                    return Array.isArray(a) ? (a.forEach(a => c.installModule(a)), c) : (c.installModule(a), c)
                }
            }
            Object.keys(j).forEach(a => {
                Object.keys(j[a]).forEach(b => {
                    c.prototype[b] = j[a][b]
                })
            }), c.use([function(b) {
                let {
                    swiper: c,
                    on: a,
                    emit: d
                } = b, e = p(), f = null, g = null, h = () => {
                    c && !c.destroyed && c.initialized && (d("beforeResize"), d("resize"))
                }, i = () => {
                    c && !c.destroyed && c.initialized && (f = new ResizeObserver(a => {
                        g = e.requestAnimationFrame(() => {
                            let {
                                width: b,
                                height: d
                            } = c, e = b, f = d;
                            a.forEach(g => {
                                let {
                                    contentBoxSize: a,
                                    contentRect: b,
                                    target: d
                                } = g;
                                d && d !== c.el || (e = b ? b.width : (a[0] || a).inlineSize, f = b ? b.height : (a[0] || a).blockSize)
                            }), (e !== b || f !== d) && h()
                        })
                    })).observe(c.el)
                }, j = () => {
                    g && e.cancelAnimationFrame(g), f && f.unobserve && c.el && (f.unobserve(c.el), f = null)
                }, k = () => {
                    c && !c.destroyed && c.initialized && d("orientationchange")
                };
                a("init", () => {
                    if (c.params.resizeObserver && void 0 !== e.ResizeObserver) {
                        i();
                        return
                    }
                    e.addEventListener("resize", h), e.addEventListener("orientationchange", k)
                }), a("destroy", () => {
                    j(), e.removeEventListener("resize", h), e.removeEventListener("orientationchange", k)
                })
            }, function(b) {
                let {
                    swiper: d,
                    extendParams: c,
                    on: a,
                    emit: e
                } = b, f = [], g = p(), h = function(c, a) {
                    void 0 === a && (a = {});
                    let d = g.MutationObserver || g.WebkitMutationObserver,
                        b = new d(a => {
                            if (1 === a.length) {
                                e("observerUpdate", a[0]);
                                return
                            }
                            let b = function() {
                                e("observerUpdate", a[0])
                            };
                            g.requestAnimationFrame ? g.requestAnimationFrame(b) : g.setTimeout(b, 0)
                        });
                    b.observe(c, {
                        attributes: void 0 === a.attributes || a.attributes,
                        childList: void 0 === a.childList || a.childList,
                        characterData: void 0 === a.characterData || a.characterData
                    }), f.push(b)
                };
                c({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), a("init", () => {
                    if (d.params.observer) {
                        if (d.params.observeParents) {
                            let b = d.$el.parents();
                            for (let a = 0; a < b.length; a += 1) h(b[a])
                        }
                        h(d.$el[0], {
                            childList: d.params.observeSlideChildren
                        }), h(d.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                }), a("destroy", () => {
                    f.forEach(a => {
                        a.disconnect()
                    }), f.splice(0, f.length)
                })
            }]);
            var S = c;

            function T(c) {
                let {
                    swiper: a,
                    extendParams: d,
                    on: b,
                    emit: g
                } = c, h = n(), i = p();

                function j(w) {
                    if (!a.enabled) return;
                    let {
                        rtlTranslate: k
                    } = a, b = w;
                    b.originalEvent && (b = b.originalEvent);
                    let d = b.keyCode || b.charCode,
                        q = a.params.keyboard.pageUpDown,
                        e = q && 33 === d,
                        f = q && 34 === d,
                        l = 37 === d,
                        m = 39 === d,
                        n = 38 === d,
                        o = 40 === d;
                    if (!a.allowSlideNext && (a.isHorizontal() && m || a.isVertical() && o || f) || !a.allowSlidePrev && (a.isHorizontal() && l || a.isVertical() && n || e)) return !1;
                    if (!b.shiftKey && !b.altKey && !b.ctrlKey && !b.metaKey && (!h.activeElement || !h.activeElement.nodeName || "input" !== h.activeElement.nodeName.toLowerCase() && "textarea" !== h.activeElement.nodeName.toLowerCase())) {
                        if (a.params.keyboard.onlyInViewport && (e || f || l || m || n || o)) {
                            let r = !1;
                            if (a.$el.parents(`.${a.params.slideClass}`).length > 0 && 0 === a.$el.parents(`.${a.params.slideActiveClass}`).length) return;
                            let s = a.$el,
                                t = s[0].clientWidth,
                                u = s[0].clientHeight,
                                x = i.innerWidth,
                                y = i.innerHeight,
                                c = a.$el.offset();
                            k && (c.left -= a.$el[0].scrollLeft);
                            let v = [
                                [c.left, c.top],
                                [c.left + t, c.top],
                                [c.left, c.top + u],
                                [c.left + t, c.top + u]
                            ];
                            for (let p = 0; p < v.length; p += 1) {
                                let j = v[p];
                                if (j[0] >= 0 && j[0] <= x && j[1] >= 0 && j[1] <= y) {
                                    if (0 === j[0] && 0 === j[1]) continue;
                                    r = !0
                                }
                            }
                            if (!r) return
                        }
                        a.isHorizontal() ? ((e || f || l || m) && (b.preventDefault ? b.preventDefault() : b.returnValue = !1), ((f || m) && !k || (e || l) && k) && a.slideNext(), ((e || l) && !k || (f || m) && k) && a.slidePrev()) : ((e || f || n || o) && (b.preventDefault ? b.preventDefault() : b.returnValue = !1), (f || o) && a.slideNext(), (e || n) && a.slidePrev()), g("keyPress", d)
                    }
                }

                function e() {
                    a.keyboard.enabled || (t(h).on("keydown", j), a.keyboard.enabled = !0)
                }

                function f() {
                    a.keyboard.enabled && (t(h).off("keydown", j), a.keyboard.enabled = !1)
                }
                a.keyboard = {
                    enabled: !1
                }, d({
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                }), b("init", () => {
                    a.params.keyboard.enabled && e()
                }), b("destroy", () => {
                    a.keyboard.enabled && f()
                }), Object.assign(a.keyboard, {
                    enable: e,
                    disable: f
                })
            }

            function U(c) {
                let {
                    swiper: a,
                    extendParams: d,
                    on: b,
                    emit: g
                } = c, h = p();
                d({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                }), a.mousewheel = {
                    enabled: !1
                };
                let i, j = v(),
                    k, l = [];

                function m() {
                    a.enabled && (a.mouseEntered = !0)
                }

                function n() {
                    a.enabled && (a.mouseEntered = !1)
                }

                function o(b) {
                    return !(a.params.mousewheel.thresholdDelta && b.delta < a.params.mousewheel.thresholdDelta || a.params.mousewheel.thresholdTime && v() - j < a.params.mousewheel.thresholdTime) && (!!(b.delta >= 6 && v() - j < 60) || (b.direction < 0 ? a.isEnd && !a.params.loop || a.animating || (a.slideNext(), g("scroll", b.raw)) : a.isBeginning && !a.params.loop || a.animating || (a.slidePrev(), g("scroll", b.raw)), j = new h.Date().getTime(), !1))
                }

                function q(y) {
                    var b;
                    let d = y,
                        F = !0;
                    if (!a.enabled) return;
                    let s = a.params.mousewheel;
                    a.params.cssMode && d.preventDefault();
                    let z = a.$el;
                    if ("container" !== a.params.mousewheel.eventsTarget && (z = t(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !z[0].contains(d.target) && !s.releaseOnEdges) return !0;
                    d.originalEvent && (d = d.originalEvent);
                    let c = 0,
                        A = a.rtlTranslate ? -1 : 1,
                        n, h, e, f, j = (n = 0, h = 0, e = 0, f = 0, "detail" in (b = d) && (h = b.detail), "wheelDelta" in b && (h = -b.wheelDelta / 120), "wheelDeltaY" in b && (h = -b.wheelDeltaY / 120), "wheelDeltaX" in b && (n = -b.wheelDeltaX / 120), "axis" in b && b.axis === b.HORIZONTAL_AXIS && (n = h, h = 0), e = 10 * n, f = 10 * h, "deltaY" in b && (f = b.deltaY), "deltaX" in b && (e = b.deltaX), b.shiftKey && !e && (e = f, f = 0), (e || f) && b.deltaMode && (1 === b.deltaMode ? (e *= 40, f *= 40) : (e *= 800, f *= 800)), e && !n && (n = e < 1 ? -1 : 1), f && !h && (h = f < 1 ? -1 : 1), {
                            spinX: n,
                            spinY: h,
                            pixelX: e,
                            pixelY: f
                        });
                    if (s.forceToAxis) {
                        if (a.isHorizontal()) {
                            if (!(Math.abs(j.pixelX) > Math.abs(j.pixelY))) return !0;
                            c = -j.pixelX * A
                        } else {
                            if (!(Math.abs(j.pixelY) > Math.abs(j.pixelX))) return !0;
                            c = -j.pixelY
                        }
                    } else c = Math.abs(j.pixelX) > Math.abs(j.pixelY) ? -j.pixelX * A : -j.pixelY;
                    if (0 === c) return !0;
                    s.invert && (c = -c);
                    let r = a.getTranslate() + c * s.sensitivity;
                    if (r >= a.minTranslate() && (r = a.minTranslate()), r <= a.maxTranslate() && (r = a.maxTranslate()), !a.params.loop && (r === a.minTranslate() || r === a.maxTranslate()) || !a.params.nested || d.stopPropagation(), a.params.freeMode && a.params.freeMode.enabled) {
                        let m = {
                                time: v(),
                                delta: Math.abs(c),
                                direction: Math.sign(c)
                            },
                            B = k && m.time < k.time + 500 && m.delta <= k.delta && m.direction === k.direction;
                        if (!B) {
                            k = void 0, a.params.loop && a.loopFix();
                            let p = a.getTranslate() + c * s.sensitivity,
                                D = a.isBeginning,
                                E = a.isEnd;
                            if (p >= a.minTranslate() && (p = a.minTranslate()), p <= a.maxTranslate() && (p = a.maxTranslate()), a.setTransition(0), a.setTranslate(p), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!D && a.isBeginning || !E && a.isEnd) && a.updateSlidesClasses(), a.params.freeMode.sticky) {
                                clearTimeout(i), i = void 0, l.length >= 15 && l.shift();
                                let x = l.length ? l[l.length - 1] : void 0,
                                    C = l[0];
                                if (l.push(m), x && (m.delta > x.delta || m.direction !== x.direction)) l.splice(0);
                                else if (l.length >= 15 && m.time - C.time < 500 && C.delta - m.delta >= 1 && m.delta <= 6) {
                                    let G = c > 0 ? .8 : .2;
                                    k = m, l.splice(0), i = u(() => {
                                        a.slideToClosest(a.params.speed, !0, void 0, G)
                                    }, 0)
                                }
                                i || (i = u(() => {
                                    let b = .5;
                                    k = m, l.splice(0), a.slideToClosest(a.params.speed, !0, void 0, b)
                                }, 500))
                            }
                            if (B || g("scroll", d), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), p === a.minTranslate() || p === a.maxTranslate()) return !0
                        }
                    } else {
                        let q = {
                            time: v(),
                            delta: Math.abs(c),
                            direction: Math.sign(c),
                            raw: y
                        };
                        l.length >= 2 && l.shift();
                        let w = l.length ? l[l.length - 1] : void 0;
                        if (l.push(q), w ? (q.direction !== w.direction || q.delta > w.delta || q.time > w.time + 150) && o(q) : o(q), function(c) {
                                let b = a.params.mousewheel;
                                if (c.direction < 0) {
                                    if (a.isEnd && !a.params.loop && b.releaseOnEdges) return !0
                                } else if (a.isBeginning && !a.params.loop && b.releaseOnEdges) return !0;
                                return !1
                            }(q)) return !0
                    }
                    return d.preventDefault ? d.preventDefault() : d.returnValue = !1, !1
                }

                function r(c) {
                    let b = a.$el;
                    "container" !== a.params.mousewheel.eventsTarget && (b = t(a.params.mousewheel.eventsTarget)), b[c]("mouseenter", m), b[c]("mouseleave", n), b[c]("wheel", q)
                }

                function e() {
                    return a.params.cssMode ? (a.wrapperEl.removeEventListener("wheel", q), !0) : !a.mousewheel.enabled && (r("on"), a.mousewheel.enabled = !0, !0)
                }

                function f() {
                    return a.params.cssMode ? (a.wrapperEl.addEventListener(event, q), !0) : !!a.mousewheel.enabled && (r("off"), a.mousewheel.enabled = !1, !0)
                }
                b("init", () => {
                    !a.params.mousewheel.enabled && a.params.cssMode && f(), a.params.mousewheel.enabled && e()
                }), b("destroy", () => {
                    a.params.cssMode && e(), a.mousewheel.enabled && f()
                }), Object.assign(a.mousewheel, {
                    enable: e,
                    disable: f
                })
            }

            function V(a) {
                return void 0 === a && (a = ""), `.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function W(d) {
                let {
                    swiper: c,
                    extendParams: e,
                    on: b,
                    emit: k
                } = d, a = "swiper-pagination";
                e({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: a => a,
                        formatFractionTotal: a => a,
                        bulletClass: `${a}-bullet`,
                        bulletActiveClass: `${a}-bullet-active`,
                        modifierClass: `${a}-`,
                        currentClass: `${a}-current`,
                        totalClass: `${a}-total`,
                        hiddenClass: `${a}-hidden`,
                        progressbarFillClass: `${a}-progressbar-fill`,
                        progressbarOppositeClass: `${a}-progressbar-opposite`,
                        clickableClass: `${a}-clickable`,
                        lockClass: `${a}-lock`,
                        horizontalClass: `${a}-horizontal`,
                        verticalClass: `${a}-vertical`,
                        paginationDisabledClass: `${a}-disabled`
                    }
                }), c.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let l, m = 0;

                function o() {
                    return !c.params.pagination.el || !c.pagination.el || !c.pagination.$el || 0 === c.pagination.$el.length
                }

                function p(d, a) {
                    let {
                        bulletActiveClass: b
                    } = c.params.pagination;
                    d[a]().addClass(`${b}-${a}`)[a]().addClass(`${b}-${a}-${a}`)
                }

                function f() {
                    let z = c.rtl,
                        a = c.params.pagination;
                    if (o()) return;
                    let h = c.virtual && c.params.virtual.enabled ? c.virtual.slides.length : c.slides.length,
                        e = c.pagination.$el,
                        d, f = c.params.loop ? Math.ceil((h - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;
                    if (c.params.loop ? ((d = Math.ceil((c.activeIndex - c.loopedSlides) / c.params.slidesPerGroup)) > h - 1 - 2 * c.loopedSlides && (d -= h - 2 * c.loopedSlides), d > f - 1 && (d -= f), d < 0 && "bullets" !== c.params.paginationType && (d = f + d)) : d = void 0 !== c.snapIndex ? c.snapIndex : c.activeIndex || 0, "bullets" === a.type && c.pagination.bullets && c.pagination.bullets.length > 0) {
                        let b = c.pagination.bullets,
                            g, i, q;
                        if (a.dynamicBullets && (l = b.eq(0)[c.isHorizontal() ? "outerWidth" : "outerHeight"](!0), e.css(c.isHorizontal() ? "width" : "height", `${l*(a.dynamicMainBullets+4)}px`), a.dynamicMainBullets > 1 && void 0 !== c.previousIndex && ((m += d - (c.previousIndex - c.loopedSlides || 0)) > a.dynamicMainBullets - 1 ? m = a.dynamicMainBullets - 1 : m < 0 && (m = 0)), q = ((i = (g = Math.max(d - m, 0)) + (Math.min(b.length, a.dynamicMainBullets) - 1)) + g) / 2), b.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(b => `${a.bulletActiveClass}${b}`).join(" ")), e.length > 1) b.each(e => {
                            let b = t(e),
                                c = b.index();
                            c === d && b.addClass(a.bulletActiveClass), a.dynamicBullets && (c >= g && c <= i && b.addClass(`${a.bulletActiveClass}-main`), c === g && p(b, "prev"), c === i && p(b, "next"))
                        });
                        else {
                            let r = b.eq(d),
                                A = r.index();
                            if (r.addClass(a.bulletActiveClass), a.dynamicBullets) {
                                let s = b.eq(g),
                                    u = b.eq(i);
                                for (let j = g; j <= i; j += 1) b.eq(j).addClass(`${a.bulletActiveClass}-main`);
                                if (c.params.loop) {
                                    if (A >= b.length) {
                                        for (let n = a.dynamicMainBullets; n >= 0; n -= 1) b.eq(b.length - n).addClass(`${a.bulletActiveClass}-main`);
                                        b.eq(b.length - a.dynamicMainBullets - 1).addClass(`${a.bulletActiveClass}-prev`)
                                    } else p(s, "prev"), p(u, "next")
                                } else p(s, "prev"), p(u, "next")
                            }
                        }
                        if (a.dynamicBullets) {
                            let B = Math.min(b.length, a.dynamicMainBullets + 4),
                                C = (l * B - l) / 2 - q * l,
                                D = z ? "right" : "left";
                            b.css(c.isHorizontal() ? D : "top", `${C}px`)
                        }
                    }
                    if ("fraction" === a.type && (e.find(V(a.currentClass)).text(a.formatFractionCurrent(d + 1)), e.find(V(a.totalClass)).text(a.formatFractionTotal(f))), "progressbar" === a.type) {
                        let v;
                        v = a.progressbarOpposite ? c.isHorizontal() ? "vertical" : "horizontal" : c.isHorizontal() ? "horizontal" : "vertical";
                        let w = (d + 1) / f,
                            x = 1,
                            y = 1;
                        "horizontal" === v ? x = w : y = w, e.find(V(a.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${x}) scaleY(${y})`).transition(c.params.speed)
                    }
                    "custom" === a.type && a.renderCustom ? (e.html(a.renderCustom(c, d + 1, f)), k("paginationRender", e[0])) : k("paginationUpdate", e[0]), c.params.watchOverflow && c.enabled && e[c.isLocked ? "addClass" : "removeClass"](a.lockClass)
                }

                function g() {
                    let a = c.params.pagination;
                    if (o()) return;
                    let e = c.virtual && c.params.virtual.enabled ? c.virtual.slides.length : c.slides.length,
                        d = c.pagination.$el,
                        b = "";
                    if ("bullets" === a.type) {
                        let f = c.params.loop ? Math.ceil((e - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;
                        c.params.freeMode && c.params.freeMode.enabled && !c.params.loop && f > e && (f = e);
                        for (let g = 0; g < f; g += 1) a.renderBullet ? b += a.renderBullet.call(c, g, a.bulletClass) : b += `<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`;
                        d.html(b), c.pagination.bullets = d.find(V(a.bulletClass))
                    }
                    "fraction" === a.type && (b = a.renderFraction ? a.renderFraction.call(c, a.currentClass, a.totalClass) : `<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`, d.html(b)), "progressbar" === a.type && (b = a.renderProgressbar ? a.renderProgressbar.call(c, a.progressbarFillClass) : `<span class="${a.progressbarFillClass}"></span>`, d.html(b)), "custom" !== a.type && k("paginationRender", c.pagination.$el[0])
                }

                function h() {
                    c.params.pagination = function(a, d, b, c) {
                        let e = n();
                        return a.params.createElements && Object.keys(c).forEach(f => {
                            if (!b[f] && !0 === b.auto) {
                                let g = a.$el.children(`.${c[f]}`)[0];
                                g || ((g = e.createElement("div")).className = c[f], a.$el.append(g)), b[f] = g, d[f] = g
                            }
                        }), b
                    }(c, c.originalParams.pagination, c.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let a = c.params.pagination;
                    if (!a.el) return;
                    let b = t(a.el);
                    0 === b.length || (c.params.uniqueNavElements && "string" == typeof a.el && b.length > 1 && (b = c.$el.find(a.el)).length > 1 && (b = b.filter(a => t(a).parents(".swiper")[0] === c.el)), "bullets" === a.type && a.clickable && b.addClass(a.clickableClass), b.addClass(a.modifierClass + a.type), b.addClass(c.isHorizontal() ? a.horizontalClass : a.verticalClass), "bullets" === a.type && a.dynamicBullets && (b.addClass(`${a.modifierClass}${a.type}-dynamic`), m = 0, a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)), "progressbar" === a.type && a.progressbarOpposite && b.addClass(a.progressbarOppositeClass), a.clickable && b.on("click", V(a.bulletClass), function(b) {
                        b.preventDefault();
                        let a = t(this).index() * c.params.slidesPerGroup;
                        c.params.loop && (a += c.loopedSlides), c.slideTo(a)
                    }), Object.assign(c.pagination, {
                        $el: b,
                        el: b[0]
                    }), c.enabled || b.addClass(a.lockClass))
                }

                function i() {
                    let a = c.params.pagination;
                    if (o()) return;
                    let b = c.pagination.$el;
                    b.removeClass(a.hiddenClass), b.removeClass(a.modifierClass + a.type), b.removeClass(c.isHorizontal() ? a.horizontalClass : a.verticalClass), c.pagination.bullets && c.pagination.bullets.removeClass && c.pagination.bullets.removeClass(a.bulletActiveClass), a.clickable && b.off("click", V(a.bulletClass))
                }
                b("init", () => {
                    !1 === c.params.pagination.enabled ? j() : (h(), g(), f())
                }), b("activeIndexChange", () => {
                    c.params.loop ? f() : void 0 === c.snapIndex && f()
                }), b("snapIndexChange", () => {
                    c.params.loop || f()
                }), b("slidesLengthChange", () => {
                    c.params.loop && (g(), f())
                }), b("snapGridLengthChange", () => {
                    c.params.loop || (g(), f())
                }), b("destroy", () => {
                    i()
                }), b("enable disable", () => {
                    let {
                        $el: a
                    } = c.pagination;
                    a && a[c.enabled ? "removeClass" : "addClass"](c.params.pagination.lockClass)
                }), b("lock unlock", () => {
                    f()
                }), b("click", (f, d) => {
                    let b = d.target,
                        {
                            $el: a
                        } = c.pagination;
                    if (c.params.pagination.el && c.params.pagination.hideOnClick && a && a.length > 0 && !t(b).hasClass(c.params.pagination.bulletClass)) {
                        if (c.navigation && (c.navigation.nextEl && b === c.navigation.nextEl || c.navigation.prevEl && b === c.navigation.prevEl)) return;
                        let e = a.hasClass(c.params.pagination.hiddenClass);
                        !0 === e ? k("paginationShow") : k("paginationHide"), a.toggleClass(c.params.pagination.hiddenClass)
                    }
                });
                let j = () => {
                    c.$el.addClass(c.params.pagination.paginationDisabledClass), c.pagination.$el && c.pagination.$el.addClass(c.params.pagination.paginationDisabledClass), i()
                };
                Object.assign(c.pagination, {
                    enable() {
                        c.$el.removeClass(c.params.pagination.paginationDisabledClass), c.pagination.$el && c.pagination.$el.removeClass(c.params.pagination.paginationDisabledClass), h(), g(), f()
                    },
                    disable: j,
                    render: g,
                    update: f,
                    init: h,
                    destroy: i
                })
            }

            function X(c) {
                let {
                    swiper: b,
                    extendParams: d,
                    on: a,
                    emit: i
                } = c, j;

                function e() {
                    let a = b.slides.eq(b.activeIndex),
                        c = b.params.autoplay.delay;
                    a.attr("data-swiper-autoplay") && (c = a.attr("data-swiper-autoplay") || b.params.autoplay.delay), clearTimeout(j), j = u(() => {
                        let a;
                        b.params.autoplay.reverseDirection ? b.params.loop ? (b.loopFix(), a = b.slidePrev(b.params.speed, !0, !0), i("autoplay")) : b.isBeginning ? b.params.autoplay.stopOnLastSlide ? g() : (a = b.slideTo(b.slides.length - 1, b.params.speed, !0, !0), i("autoplay")) : (a = b.slidePrev(b.params.speed, !0, !0), i("autoplay")) : b.params.loop ? (b.loopFix(), a = b.slideNext(b.params.speed, !0, !0), i("autoplay")) : b.isEnd ? b.params.autoplay.stopOnLastSlide ? g() : (a = b.slideTo(0, b.params.speed, !0, !0), i("autoplay")) : (a = b.slideNext(b.params.speed, !0, !0), i("autoplay")), b.params.cssMode && b.autoplay.running ? e() : !1 === a && e()
                    }, c)
                }

                function f() {
                    return void 0 === j && !b.autoplay.running && (b.autoplay.running = !0, i("autoplayStart"), e(), !0)
                }

                function g() {
                    return !!b.autoplay.running && void 0 !== j && (j && (clearTimeout(j), j = void 0), b.autoplay.running = !1, i("autoplayStop"), !0)
                }

                function h(a) {
                    b.autoplay.running && (b.autoplay.paused || (j && clearTimeout(j), b.autoplay.paused = !0, 0 !== a && b.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(a => {
                        b.$wrapperEl[0].addEventListener(a, l)
                    }) : (b.autoplay.paused = !1, e())))
                }

                function k() {
                    let a = n();
                    "hidden" === a.visibilityState && b.autoplay.running && h(), "visible" === a.visibilityState && b.autoplay.paused && (e(), b.autoplay.paused = !1)
                }

                function l(a) {
                    b && !b.destroyed && b.$wrapperEl && a.target === b.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(a => {
                        b.$wrapperEl[0].removeEventListener(a, l)
                    }), b.autoplay.paused = !1, b.autoplay.running ? e() : g())
                }

                function m() {
                    b.params.autoplay.disableOnInteraction ? g() : (i("autoplayPause"), h()), ["transitionend", "webkitTransitionEnd"].forEach(a => {
                        b.$wrapperEl[0].removeEventListener(a, l)
                    })
                }

                function o() {
                    !b.params.autoplay.disableOnInteraction && (b.autoplay.paused = !1, i("autoplayResume"), e())
                }
                b.autoplay = {
                    running: !1,
                    paused: !1
                }, d({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), a("init", () => {
                    if (b.params.autoplay.enabled) {
                        f();
                        let a = n();
                        a.addEventListener("visibilitychange", k), b.params.autoplay.pauseOnMouseEnter && (b.$el.on("mouseenter", m), b.$el.on("mouseleave", o))
                    }
                }), a("beforeTransitionStart", (d, a, c) => {
                    b.autoplay.running && (c || !b.params.autoplay.disableOnInteraction ? b.autoplay.pause(a) : g())
                }), a("sliderFirstMove", () => {
                    b.autoplay.running && (b.params.autoplay.disableOnInteraction ? g() : h())
                }), a("touchEnd", () => {
                    b.params.cssMode && b.autoplay.paused && !b.params.autoplay.disableOnInteraction && e()
                }), a("destroy", () => {
                    b.$el.off("mouseenter", m), b.$el.off("mouseleave", o), b.autoplay.running && g();
                    let a = n();
                    a.removeEventListener("visibilitychange", k)
                }), Object.assign(b.autoplay, {
                    pause: h,
                    run: e,
                    start: f,
                    stop: g
                })
            }

            function Y(a) {
                let {
                    swiper: b,
                    extendParams: c,
                    emit: d,
                    once: e
                } = a;
                c({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(b, {
                    freeMode: {
                        onTouchStart: function() {
                            let a = b.getTranslate();
                            b.setTranslate(a), b.setTransition(0), b.touchEventsData.velocities.length = 0, b.freeMode.onTouchEnd({
                                currentPos: b.rtl ? b.translate : -b.translate
                            })
                        },
                        onTouchMove: function() {
                            let {
                                touchEventsData: a,
                                touches: c
                            } = b;
                            0 === a.velocities.length && a.velocities.push({
                                position: c[b.isHorizontal() ? "startX" : "startY"],
                                time: a.touchStartTime
                            }), a.velocities.push({
                                position: c[b.isHorizontal() ? "currentX" : "currentY"],
                                time: v()
                            })
                        },
                        onTouchEnd: function(x) {
                            let {
                                currentPos: q
                            } = x, {
                                params: c,
                                $wrapperEl: r,
                                rtlTranslate: l,
                                snapGrid: f,
                                touchEventsData: g
                            } = b, y = v(), z = y - g.touchStartTime;
                            if (q < -b.minTranslate()) {
                                b.slideTo(b.activeIndex);
                                return
                            }
                            if (q > -b.maxTranslate()) {
                                b.slides.length < f.length ? b.slideTo(f.length - 1) : b.slideTo(b.slides.length - 1);
                                return
                            }
                            if (c.freeMode.momentum) {
                                if (g.velocities.length > 1) {
                                    let m = g.velocities.pop(),
                                        s = g.velocities.pop(),
                                        A = m.position - s.position,
                                        t = m.time - s.time;
                                    b.velocity = A / t, b.velocity /= 2, Math.abs(b.velocity) < c.freeMode.minimumVelocity && (b.velocity = 0), (t > 150 || v() - m.time > 300) && (b.velocity = 0)
                                } else b.velocity = 0;
                                b.velocity *= c.freeMode.momentumVelocityRatio, g.velocities.length = 0;
                                let h = 1e3 * c.freeMode.momentumRatio,
                                    B = b.velocity * h,
                                    a = b.translate + B;
                                l && (a = -a);
                                let n = !1,
                                    o, j = 20 * Math.abs(b.velocity) * c.freeMode.momentumBounceRatio,
                                    p;
                                if (a < b.maxTranslate()) c.freeMode.momentumBounce ? (a + b.maxTranslate() < -j && (a = b.maxTranslate() - j), o = b.maxTranslate(), n = !0, g.allowMomentumBounce = !0) : a = b.maxTranslate(), c.loop && c.centeredSlides && (p = !0);
                                else if (a > b.minTranslate()) c.freeMode.momentumBounce ? (a - b.minTranslate() > j && (a = b.minTranslate() + j), o = b.minTranslate(), n = !0, g.allowMomentumBounce = !0) : a = b.minTranslate(), c.loop && c.centeredSlides && (p = !0);
                                else if (c.freeMode.sticky) {
                                    let i;
                                    for (let k = 0; k < f.length; k += 1)
                                        if (f[k] > -a) {
                                            i = k;
                                            break
                                        }
                                    a = -(a = Math.abs(f[i] - a) < Math.abs(f[i - 1] - a) || "next" === b.swipeDirection ? f[i] : f[i - 1])
                                }
                                if (p && e("transitionEnd", () => {
                                        b.loopFix()
                                    }), 0 !== b.velocity) {
                                    if (h = l ? Math.abs((-a - b.translate) / b.velocity) : Math.abs((a - b.translate) / b.velocity), c.freeMode.sticky) {
                                        let u = Math.abs((l ? -a : a) - b.translate),
                                            w = b.slidesSizesGrid[b.activeIndex];
                                        h = u < w ? c.speed : u < 2 * w ? 1.5 * c.speed : 2.5 * c.speed
                                    }
                                } else if (c.freeMode.sticky) {
                                    b.slideToClosest();
                                    return
                                }
                                c.freeMode.momentumBounce && n ? (b.updateProgress(o), b.setTransition(h), b.setTranslate(a), b.transitionStart(!0, b.swipeDirection), b.animating = !0, r.transitionEnd(() => {
                                    b && !b.destroyed && g.allowMomentumBounce && (d("momentumBounce"), b.setTransition(c.speed), setTimeout(() => {
                                        b.setTranslate(o), r.transitionEnd(() => {
                                            b && !b.destroyed && b.transitionEnd()
                                        })
                                    }, 0))
                                })) : b.velocity ? (d("_freeModeNoMomentumRelease"), b.updateProgress(a), b.setTransition(h), b.setTranslate(a), b.transitionStart(!0, b.swipeDirection), b.animating || (b.animating = !0, r.transitionEnd(() => {
                                    b && !b.destroyed && b.transitionEnd()
                                }))) : b.updateProgress(a), b.updateActiveIndex(), b.updateSlidesClasses()
                            } else if (c.freeMode.sticky) {
                                b.slideToClosest();
                                return
                            } else c.freeMode && d("_freeModeNoMomentumRelease");
                            (!c.freeMode.momentum || z >= c.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex(), b.updateSlidesClasses())
                        }
                    }
                })
            }

            function Z(a, b) {
                return a.transformEl ? b.find(a.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : b
            }

            function $(a) {
                let {
                    swiper: b,
                    extendParams: c,
                    on: d
                } = a;
                c({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                }), ! function(b) {
                    let {
                        effect: c,
                        swiper: d,
                        on: a,
                        setTranslate: e,
                        setTransition: f,
                        overwriteParams: g,
                        perspective: h,
                        recreateShadows: i,
                        getEffectParams: j
                    } = b;
                    a("beforeInit", () => {
                        if (d.params.effect !== c) return;
                        d.classNames.push(`${d.params.containerModifierClass}${c}`), h && h() && d.classNames.push(`${d.params.containerModifierClass}3d`);
                        let a = g ? g() : {};
                        Object.assign(d.params, a), Object.assign(d.originalParams, a)
                    }), a("setTranslate", () => {
                        d.params.effect === c && e()
                    }), a("setTransition", (b, a) => {
                        d.params.effect === c && f(a)
                    }), a("transitionEnd", () => {
                        d.params.effect === c && i && j && j().slideShadows && (d.slides.each(a => {
                            let b = d.$(a);
                            b.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                        }), i())
                    });
                    let k;
                    a("virtualUpdate", () => {
                        d.params.effect === c && (d.slides.length || (k = !0), requestAnimationFrame(() => {
                            k && d.slides && d.slides.length && (e(), k = !1)
                        }))
                    })
                }({
                    effect: "fade",
                    swiper: b,
                    on: d,
                    setTranslate() {
                        let {
                            slides: f
                        } = b, g = b.params.fadeEffect;
                        for (let d = 0; d < f.length; d += 1) {
                            let a = b.slides.eq(d),
                                h = a[0].swiperSlideOffset,
                                c = -h;
                            b.params.virtualTranslate || (c -= b.translate);
                            let e = 0;
                            b.isHorizontal() || (e = c, c = 0);
                            let i = b.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0),
                                j = Z(g, a);
                            j.css({
                                opacity: i
                            }).transform(`translate3d(${c}px, ${e}px, 0px)`)
                        }
                    },
                    setTransition(c) {
                        let {
                            transformEl: a
                        } = b.params.fadeEffect, d = a ? b.slides.find(a) : b.slides;
                        d.transition(c),
                            function(e) {
                                let {
                                    swiper: c,
                                    duration: f,
                                    transformEl: a,
                                    allSlides: g
                                } = e, {
                                    slides: b,
                                    activeIndex: d,
                                    $wrapperEl: h
                                } = c;
                                if (c.params.virtualTranslate && 0 !== f) {
                                    let i = !1,
                                        j;
                                    (g ? a ? b.find(a) : b : a ? b.eq(d).find(a) : b.eq(d)).transitionEnd(() => {
                                        if (i || !c || c.destroyed) return;
                                        i = !0, c.animating = !1;
                                        let b = ["webkitTransitionEnd", "transitionend"];
                                        for (let a = 0; a < b.length; a += 1) h.trigger(b[a])
                                    })
                                }
                            }({
                                swiper: b,
                                duration: c,
                                transformEl: a,
                                allSlides: !0
                            })
                    },
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !b.params.cssMode
                    })
                })
            }
        }
    }
])
//# sourceMappingURL=8494-593871fc6146cff6.js.map