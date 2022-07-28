"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6887], {
        9560: function(l, c, a) {
            a.d(c, {
                Z: function() {
                    return x
                }
            });
            var m = a(26042),
                n = a(69396),
                o = a(99534),
                p = a(85893);
            a(67294);
            var q = a(4318),
                d = a(7180),
                r = a(29503),
                e = a(97114),
                s = a(7297),
                b = a(87379),
                f = a(5324),
                g = a(5527);

            function h() {
                var a = (0, s.Z)(["\n  width: 16px;\n"]);
                return h = function() {
                    return a
                }, a
            }

            function i() {
                var a = (0, s.Z)(["\n  margin-left: 4px;\n  text-align: right;\n  color: ", ";\n  white-space: nowrap;\n"]);
                return i = function() {
                    return a
                }, a
            }

            function j() {
                var a = (0, s.Z)(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"]);
                return j = function() {
                    return a
                }, a
            }

            function k() {
                var a = (0, s.Z)(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"]);
                return k = function() {
                    return a
                }, a
            }
            var t = (0, b.ZP)(g.Z).withConfig({
                    componentId: "sc-e3b8048d-0"
                }).withConfig({
                    componentId: "sc-e7fff275-0"
                })(h()),
                u = (0, b.ZP)(e.Z).withConfig({
                    componentId: "sc-e3b8048d-1"
                }).withConfig({
                    componentId: "sc-e7fff275-1"
                })(i(), function(a) {
                    return a.theme.colors.textSubtle
                }),
                v = (0, b.ZP)(d.Z).withConfig({
                    componentId: "sc-e3b8048d-2"
                }).withConfig({
                    componentId: "sc-e7fff275-2"
                })(j(), function(a) {
                    return a.theme.colors.input
                }, function(a) {
                    return a.theme.colors.inputSecondary
                }, function(a) {
                    var b = a.theme,
                        c = a.isWarning;
                    return b.shadows[c ? "warning" : "inset"]
                }),
                w = (0, b.ZP)(f.Z).withConfig({
                    componentId: "sc-e3b8048d-3"
                }).withConfig({
                    componentId: "sc-e7fff275-3"
                })(k(), function(b) {
                    var a = b.textAlign;
                    return void 0 === a ? "right" : a
                }, function(a) {
                    return a.theme.colors.textSubtle
                }),
                x = function(a) {
                    var j = a.value,
                        b = a.placeholder,
                        x = a.onUserInput,
                        c = a.currencyValue,
                        k = a.inputProps,
                        l = a.innerRef,
                        f = a.isWarning,
                        g = a.decimals,
                        h = a.unit,
                        i = a.switchEditingUnits,
                        s = (0, o.Z)(a, ["value", "placeholder", "onUserInput", "currencyValue", "inputProps", "innerRef", "isWarning", "decimals", "unit", "switchEditingUnits"]);
                    return (0, p.jsx)(v, (0, n.Z)((0, m.Z)({
                        isWarning: void 0 !== f && f
                    }, s), {
                        children: (0, p.jsxs)(q.Z, {
                            justifyContent: "flex-end",
                            children: [(0, p.jsxs)(d.Z, {
                                children: [(0, p.jsxs)(q.Z, {
                                    alignItems: "center",
                                    children: [(0, p.jsx)(w, (0, m.Z)({
                                        pattern: "^[0-9]*[.,]?[0-9]{0,".concat(void 0 === g ? 18 : g, "}$"),
                                        inputMode: "decimal",
                                        min: "0",
                                        value: j,
                                        onChange: function(a) {
                                            a.currentTarget.validity.valid && x(a.currentTarget.value.replace(/,/g, "."))
                                        },
                                        placeholder: void 0 === b ? "0.0" : b,
                                        ref: l
                                    }, k)), h && (0, p.jsx)(u, {
                                        children: h
                                    })]
                                }), c && (0, p.jsx)(e.Z, {
                                    fontSize: "12px",
                                    textAlign: "right",
                                    color: "textSubtle",
                                    children: c
                                })]
                            }), i && (0, p.jsx)(q.Z, {
                                alignItems: "center",
                                pl: "12px",
                                children: (0, p.jsx)(t, {
                                    scale: "sm",
                                    variant: "text",
                                    onClick: i,
                                    children: (0, p.jsx)(r.Z, {
                                        color: "textSubtle"
                                    })
                                })
                            })]
                        })
                    }))
                }
        },
        19729: function(c, b, a) {
            var d = a(26042),
                e = a(69396),
                f = a(85893);
            a(67294);
            var g = a(17058);
            b.Z = function(a) {
                return (0, f.jsx)(g.Z, (0, e.Z)((0, d.Z)({
                    viewBox: "0 0 24 24"
                }, a), {
                    children: (0, f.jsx)("path", {
                        d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"
                    })
                }))
            }
        },
        40447: function(c, b, a) {
            var d = a(26042),
                e = a(69396),
                f = a(85893);
            a(67294);
            var g = a(17058);
            b.Z = function(a) {
                return (0, f.jsx)(g.Z, (0, e.Z)((0, d.Z)({
                    viewBox: "0 0 24 24"
                }, a), {
                    children: (0, f.jsx)("path", {
                        d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"
                    })
                }))
            }
        },
        29503: function(c, b, a) {
            var d = a(26042),
                e = a(69396),
                f = a(85893);
            a(67294);
            var g = a(17058);
            b.Z = function(a) {
                return (0, f.jsx)(g.Z, (0, e.Z)((0, d.Z)({
                    viewBox: "0 0 24 25"
                }, a), {
                    children: (0, f.jsx)("path", {
                        d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"
                    })
                }))
            }
        },
        71228: function(e, b, a) {
            a.d(b, {
                d: function() {
                    return o
                }
            });
            var f = a(47568),
                g = a(26042),
                h = a(69396),
                i = a(29815),
                c = a(34051),
                j = a.n(c),
                k = a(67294),
                l = a(68605),
                d = a(27361),
                m = a.n(d),
                n = a(40802);

            function o() {
                var a, b = (0, l.Fh)();
                return {
                    callWithGasPrice: (0, k.useCallback)((a = (0, f.Z)(j().mark(function a(c, d) {
                        var e, f, k, l, o, p, q = arguments;
                        return j().wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return e = q.length > 2 && void 0 !== q[2] ? q[2] : [], f = q.length > 3 && void 0 !== q[3] ? q[3] : null, n.n_({
                                        type: "Transaction",
                                        message: "Call with gas price: ".concat(b),
                                        data: {
                                            contractAddress: c.address,
                                            methodName: d,
                                            methodArgs: e,
                                            overrides: f
                                        }
                                    }), k = m()(c, d), l = null == f ? void 0 : f.gasPrice, a.next = 6, k.apply(void 0, (0, i.Z)(e).concat([l ? (0, g.Z)({}, f) : (0, h.Z)((0, g.Z)({}, f), {
                                        gasPrice: b
                                    }), ]));
                                case 6:
                                    return (o = a.sent) && n.n_({
                                        type: "Transaction",
                                        message: "Transaction sent: ".concat(o.hash),
                                        data: {
                                            hash: o.hash,
                                            from: o.from,
                                            gasLimit: null === (p = o.gasLimit) || void 0 === p ? void 0 : p.toString(),
                                            nonce: o.nonce
                                        }
                                    }), a.abrupt("return", o);
                                case 9:
                                case "end":
                                    return a.stop()
                            }
                        }, a)
                    })), function(b, c) {
                        return a.apply(this, arguments)
                    }), [b])
                }
            }
        },
        71418: function(d, b, a) {
            a.d(b, {
                Z: function() {
                    return o
                }
            });
            var e = a(47568),
                c = a(34051),
                f = a.n(c),
                g = a(85893),
                h = a(67294),
                i = a(99150),
                j = a(77044),
                k = a(70141),
                l = a(789),
                m = a(17226),
                n = function(b) {
                    var a;
                    return (null == b ? void 0 : null === (a = b.data) || void 0 === a ? void 0 : a.code) === -32e3
                };

            function o() {
                var o, p = (0, j.Ge)().library,
                    a = (0, i.$G)().t,
                    b = (0, l.Z)(),
                    c = b.toastError,
                    q = b.toastSuccess,
                    d = (0, h.useState)(!1),
                    r = d[0],
                    u = d[1],
                    s = (0, h.useCallback)(function(d, b) {
                        (0, m.H)(d), b ? c(a("Error"), (0, g.jsx)(k.YO, {
                            txHash: b.hash,
                            children: a("Please try again. Confirm the transaction and make sure you are paying enough gas!")
                        })) : c(a("Error"), a("Please try again. Confirm the transaction and make sure you are paying enough gas!"))
                    }, [a, c]),
                    t = (0, h.useCallback)((o = (0, e.Z)(f().mark(function b(d) {
                        var e, h;
                        return f().wrap(function(b) {
                            for (;;) switch (b.prev = b.next) {
                                case 0:
                                    return e = null, b.prev = 1, u(!0), b.next = 5, d();
                                case 5:
                                    return e = b.sent, q("".concat(a("Transaction Submitted"), "!"), (0, g.jsx)(k.YO, {
                                        txHash: e.hash
                                    })), b.next = 9, e.wait();
                                case 9:
                                    return h = b.sent, b.abrupt("return", h);
                                case 13:
                                    b.prev = 13, b.t0 = b.catch(1), (0, m.Z)(b.t0) || (e ? p.call(e, e.blockNumber).then(function() {
                                        s(b.t0, e)
                                    }).catch(function(f) {
                                        if (n(f)) s(b.t0, e);
                                        else {
                                            (0, m.H)(f);
                                            var h, d, i, j, l, o, p, a = f;
                                            if (null == a ? void 0 : null === (h = a.data) || void 0 === h ? void 0 : h.message) d = null == a ? void 0 : null === (i = a.data) || void 0 === i ? void 0 : i.message;
                                            else
                                                for (; a;) d = null !== (o = null !== (l = a.reason) && void 0 !== l ? l : a.message) && void 0 !== o ? o : d, a = null !== (p = a.error) && void 0 !== p ? p : null === (j = a.data) || void 0 === j ? void 0 : j.originalError;
                                            var q = "execution reverted: ",
                                                r = null == d ? void 0 : d.indexOf(q),
                                                t = r >= 0;
                                            t && (d = d.substring(r + q.length)), c("Failed", (0, g.jsx)(k.YO, {
                                                txHash: e.hash,
                                                children: t ? "Transaction failed with error: ".concat(d) : "Transaction failed. For detailed error message:"
                                            }))
                                        }
                                    }) : s(b.t0));
                                case 16:
                                    return b.prev = 16, u(!1), b.finish(16);
                                case 19:
                                    return b.abrupt("return", null);
                                case 20:
                                case "end":
                                    return b.stop()
                            }
                        }, b, null, [
                            [1, 13, 16, 19]
                        ])
                    })), function(a) {
                        return o.apply(this, arguments)
                    }), [s, c, p, q, a]);
                return {
                    fetchWithCatchTxError: t,
                    loading: r
                }
            }
        },
        17226: function(c, b, a) {
            a.d(b, {
                H: function() {
                    return e
                },
                Z: function() {
                    return d
                }
            }), a(82670), a(40802);
            var d = function(a) {
                    return "object" == typeof a && "code" in a && 4001 === a.code
                },
                e = function(a) {
                    console.error(a)
                }
        }
    }
])
//# sourceMappingURL=6887-7c44ada824cf9080.js.map