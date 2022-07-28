"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3261], {
        23774: function(g, c, a) {
            var h = a(7297),
                d = a(87379),
                e = a(57247);

            function f() {
                var a = (0, h.Z)(["\n  ", "\n"]);
                return f = function() {
                    return a
                }, a
            }
            var b = d.ZP.div.withConfig({
                componentId: "sc-df4f0a61-0"
            }).withConfig({
                componentId: "sc-657c9e-0"
            })(f(), e.Dh);
            b.defaultProps = {
                p: "24px"
            }, c.Z = b
        },
        76004: function(d, b, a) {
            a.d(b, {
                Ck: function() {
                    return e
                },
                ND: function() {
                    return h
                },
                eQ: function() {
                    return j
                },
                fq: function() {
                    return f
                },
                v9: function() {
                    return g
                },
                yg: function() {
                    return i
                }
            });
            var c = a(37519),
                e = .97,
                f = 3 * c.hJ,
                g = 5,
                h = 2,
                i = 200,
                j = 10
        },
        95003: function(r, e, a) {
            a.d(e, {
                ub: function() {
                    return q
                },
                x4: function() {
                    return d
                },
                oO: function() {
                    return ao
                },
                "t$": function() {
                    return an
                },
                Fr: function() {
                    return $
                },
                jG: function() {
                    return ae
                },
                fq: function() {
                    return X
                },
                HJ: function() {
                    return ab
                },
                Tq: function() {
                    return _
                },
                n: function() {
                    return af
                },
                s9: function() {
                    return ad
                },
                D: function() {
                    return ac
                },
                yz: function() {
                    return W
                },
                "$8": function() {
                    return ag
                },
                yn: function() {
                    return Z
                },
                CM: function() {
                    return ah
                },
                a8: function() {
                    return ak
                },
                D5: function() {
                    return ai
                },
                zN: function() {
                    return am
                },
                WB: function() {
                    return al
                },
                ld: function() {
                    return U
                },
                r3: function() {
                    return V
                }
            });
            var d, b = a(47568),
                s = a(14924),
                t = a(26042),
                u = a(69396),
                v = a(10253),
                w = a(7297),
                f = a(34051),
                c = a.n(f),
                x = a(28687),
                y = a(85906),
                z = a(2593),
                A = a(45101),
                B = a(41144),
                C = a(39907),
                D = a(45883),
                E = a(21046),
                F = function(a) {
                    return "CAKE" === a ? "\n  id\n  createdAt\n  updatedAt\n  block\n  totalBets\n  totalBetsBull\n  totalBetsBear\n  totalCAKE\n  totalCAKEBull\n  totalCAKEBear\n  totalBetsClaimed\n  totalCAKEClaimed\n  winRate\n  averageCAKE\n  netCAKE\n" : "\n  id\n  createdAt\n  updatedAt\n  block\n  totalBets\n  totalBetsBull\n  totalBetsBear\n  totalBNB\n  totalBNBBull\n  totalBNBBear\n  totalBetsClaimed\n  totalBNBClaimed\n  winRate\n  averageBNB\n  netBNB\n"
                },
                G = a(76004),
                H = function(a) {
                    if (null === a) return null;
                    var b = Number(a);
                    return Number.isNaN(b) ? null : b
                },
                I = function(a) {
                    var b = {
                        id: a.id,
                        hash: a.hash,
                        block: H(a.block),
                        amount: a.amount ? parseFloat(a.amount) : 0,
                        position: "Bull" === a.position ? A.Tu.BULL : A.Tu.BEAR,
                        claimed: a.claimed,
                        claimedAt: H(a.claimedAt),
                        claimedBlock: H(a.claimedBlock),
                        claimedHash: a.claimedHash,
                        claimedBNB: a.claimedCAKE ? parseFloat(a.claimedCAKE) : 0,
                        claimedNetBNB: a.claimedNetCAKE ? parseFloat(a.claimedNetCAKE) : 0,
                        createdAt: H(a.createdAt),
                        updatedAt: H(a.updatedAt)
                    };
                    return a.user && (b.user = J(a.user)), a.round && (b.round = K(a.round)), b
                },
                J = function(i) {
                    var a = i || {},
                        j = a.id,
                        k = a.createdAt,
                        l = a.updatedAt,
                        m = a.block,
                        n = a.totalBets,
                        o = a.totalBetsBull,
                        p = a.totalBetsBear,
                        b = a.totalCAKE,
                        c = a.totalCAKEBull,
                        d = a.totalCAKEBear,
                        q = a.totalBetsClaimed,
                        e = a.totalCAKEClaimed,
                        f = a.winRate,
                        g = a.averageCAKE,
                        h = a.netCAKE;
                    return {
                        id: j,
                        createdAt: H(k),
                        updatedAt: H(l),
                        block: H(m),
                        totalBets: H(n),
                        totalBetsBull: H(o),
                        totalBetsBear: H(p),
                        totalBNB: b ? parseFloat(b) : 0,
                        totalBNBBull: c ? parseFloat(c) : 0,
                        totalBNBBear: d ? parseFloat(d) : 0,
                        totalBetsClaimed: H(q),
                        totalBNBClaimed: e ? parseFloat(e) : 0,
                        winRate: f ? parseFloat(f) : 0,
                        averageBNB: g ? parseFloat(g) : 0,
                        netBNB: h ? parseFloat(h) : 0
                    }
                },
                K = function(a) {
                    var b, i = a.id,
                        j = a.epoch,
                        k = a.failed,
                        l = a.position,
                        m = a.startAt,
                        n = a.startBlock,
                        o = a.startHash,
                        p = a.lockAt,
                        q = a.lockBlock,
                        r = a.lockHash,
                        c = a.lockPrice,
                        s = a.lockRoundId,
                        t = a.closeAt,
                        u = a.closeBlock,
                        v = a.closeHash,
                        d = a.closePrice,
                        w = a.closeRoundId,
                        x = a.totalBets,
                        e = a.totalAmount,
                        y = a.bullBets,
                        f = a.bullAmount,
                        z = a.bearBets,
                        g = a.bearAmount,
                        h = a.bets;
                    return {
                        id: i,
                        failed: k,
                        startHash: o,
                        lockHash: r,
                        lockRoundId: s,
                        closeRoundId: w,
                        closeHash: v,
                        position: "Bull" === (b = l) ? A.Tu.BULL : "Bear" === b ? A.Tu.BEAR : "House" === b ? A.Tu.HOUSE : null,
                        epoch: H(j),
                        startAt: H(m),
                        startBlock: H(n),
                        lockAt: H(p),
                        lockBlock: H(q),
                        lockPrice: c ? parseFloat(c) : 0,
                        closeAt: H(t),
                        closeBlock: H(u),
                        closePrice: d ? parseFloat(d) : 0,
                        totalBets: H(x),
                        totalAmount: e ? parseFloat(e) : 0,
                        bullBets: H(y),
                        bullAmount: f ? parseFloat(f) : 0,
                        bearBets: H(z),
                        bearAmount: g ? parseFloat(g) : 0,
                        bets: (void 0 === h ? [] : h).map(I)
                    }
                },
                L = function(a) {
                    var b = {
                        id: a.id,
                        hash: a.hash,
                        block: H(a.block),
                        amount: a.amount ? parseFloat(a.amount) : 0,
                        position: "Bull" === a.position ? A.Tu.BULL : A.Tu.BEAR,
                        claimed: a.claimed,
                        claimedAt: H(a.claimedAt),
                        claimedBlock: H(a.claimedBlock),
                        claimedHash: a.claimedHash,
                        claimedBNB: a.claimedBNB ? parseFloat(a.claimedBNB) : 0,
                        claimedNetBNB: a.claimedNetBNB ? parseFloat(a.claimedNetBNB) : 0,
                        createdAt: H(a.createdAt),
                        updatedAt: H(a.updatedAt)
                    };
                    return a.user && (b.user = M(a.user)), a.round && (b.round = N(a.round)), b
                },
                M = function(i) {
                    var a = i || {},
                        j = a.id,
                        k = a.createdAt,
                        l = a.updatedAt,
                        m = a.block,
                        n = a.totalBets,
                        o = a.totalBetsBull,
                        p = a.totalBetsBear,
                        b = a.totalBNB,
                        c = a.totalBNBBull,
                        d = a.totalBNBBear,
                        q = a.totalBetsClaimed,
                        e = a.totalBNBClaimed,
                        f = a.winRate,
                        g = a.averageBNB,
                        h = a.netBNB;
                    return {
                        id: j,
                        createdAt: H(k),
                        updatedAt: H(l),
                        block: H(m),
                        totalBets: H(n),
                        totalBetsBull: H(o),
                        totalBetsBear: H(p),
                        totalBNB: b ? parseFloat(b) : 0,
                        totalBNBBull: c ? parseFloat(c) : 0,
                        totalBNBBear: d ? parseFloat(d) : 0,
                        totalBetsClaimed: H(q),
                        totalBNBClaimed: e ? parseFloat(e) : 0,
                        winRate: f ? parseFloat(f) : 0,
                        averageBNB: g ? parseFloat(g) : 0,
                        netBNB: h ? parseFloat(h) : 0
                    }
                },
                N = function(a) {
                    var b, i = a.id,
                        j = a.epoch,
                        k = a.failed,
                        l = a.position,
                        m = a.startAt,
                        n = a.startBlock,
                        o = a.startHash,
                        p = a.lockAt,
                        q = a.lockBlock,
                        r = a.lockHash,
                        c = a.lockPrice,
                        s = a.lockRoundId,
                        t = a.closeAt,
                        u = a.closeBlock,
                        v = a.closeHash,
                        d = a.closePrice,
                        w = a.closeRoundId,
                        x = a.totalBets,
                        e = a.totalAmount,
                        y = a.bullBets,
                        f = a.bullAmount,
                        z = a.bearBets,
                        g = a.bearAmount,
                        h = a.bets;
                    return {
                        id: i,
                        failed: k,
                        startHash: o,
                        lockHash: r,
                        lockRoundId: s,
                        closeRoundId: w,
                        closeHash: v,
                        position: "Bull" === (b = l) ? A.Tu.BULL : "Bear" === b ? A.Tu.BEAR : "House" === b ? A.Tu.HOUSE : null,
                        epoch: H(j),
                        startAt: H(m),
                        startBlock: H(n),
                        lockAt: H(p),
                        lockBlock: H(q),
                        lockPrice: c ? parseFloat(c) : 0,
                        closeAt: H(t),
                        closeBlock: H(u),
                        closePrice: d ? parseFloat(d) : 0,
                        totalBets: H(x),
                        totalAmount: e ? parseFloat(e) : 0,
                        bullBets: H(y),
                        bullAmount: f ? parseFloat(f) : 0,
                        bearBets: H(z),
                        bearAmount: g ? parseFloat(g) : 0,
                        bets: (void 0 === h ? [] : h).map(L)
                    }
                };

            function O() {
                var a = (0, w.Z)(["\n        query getTotalWonData {\n          market(id: 1) {\n            totalBNB\n            totalBNBTreasury\n          }\n        }\n      "]);
                return O = function() {
                    return a
                }, a
            }

            function P() {
                var a = (0, w.Z)(["\n        query getTotalWonData {\n          market(id: 1) {\n            totalCAKE\n            totalCAKETreasury\n          }\n        }\n      "]);
                return P = function() {
                    return a
                }, a
            }

            function Q() {
                var a = (0, w.Z)(["\n      query getBetHistory($first: Int!, $skip: Int!, $where: Bet_filter) {\n        bets(first: $first, skip: $skip, where: $where, order: createdAt, orderDirection: desc) {\n          ", "\n          round {\n            ", "\n          }\n          user {\n            ", "\n          }\n        }\n      }\n    "]);
                return Q = function() {
                    return a
                }, a
            }

            function R() {
                var a = (0, w.Z)(["\n      query getUsers($first: Int!, $skip: Int!, $where: User_filter, $orderBy: User_orderBy, $orderDir: OrderDirection) {\n        users(first: $first, skip: $skip, where: $where, orderBy: $orderBy, orderDirection: $orderDir) {\n          ", "\n        }\n      }\n    "]);
                return R = function() {
                    return a
                }, a
            }

            function S() {
                var a = (0, w.Z)(["\n      query getUser($id: ID!) {\n        user(id: $id) {\n          ", "\n        }\n      }\n  "]);
                return S = function() {
                    return a
                }, a
            }(T = d || (d = {})).WIN = "win", T.LOSE = "lose", T.CANCELED = "canceled", T.HOUSE = "house", T.LIVE = "live";
            var T, g, h, i, j, k, l, m, n, o, p, U = function(a) {
                    return "CAKE" === a ? I : L
                },
                V = function(a) {
                    return "CAKE" === a ? J : M
                },
                W = function(b, c) {
                    var a = b.round;
                    if (a.failed) return d.CANCELED;
                    if (a.epoch >= c - 1) return d.LIVE;
                    if (b.round.position === A.Tu.HOUSE) return d.HOUSE;
                    var e = a.closePrice > a.lockPrice ? A.Tu.BULL : A.Tu.BEAR;
                    return b.position === e ? d.WIN : d.LOSE
                },
                X = function(a, b) {
                    switch (b) {
                        case A.dZ.COLLECTED:
                            return a.filter(function(a) {
                                return !0 === a.claimed
                            });
                        case A.dZ.UNCOLLECTED:
                            return a.filter(function(a) {
                                return !a.claimed && (a.position === a.round.position || !0 === a.round.failed)
                            });
                        case A.dZ.ALL:
                        default:
                            return a
                    }
                },
                Y = function(a, b) {
                    var c = a["total".concat(b)] ? parseFloat(a["total".concat(b)]) : 0,
                        d = a["total".concat(b, "Treasury")] ? parseFloat(a["total".concat(b, "Treasury")]) : 0;
                    return Math.max(c - d, 0)
                },
                Z = (g = (0, b.Z)(c().mark(function a() {
                    var b, d, e, f, g, h;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.t0 = v.Z, a.next = 3, Promise.all([(0, x.request)(y.GZ, (0, x.gql)(O())), (0, x.request)(y.fO, (0, x.gql)(P())), ]);
                            case 3:
                                return a.t1 = a.sent, e = (d = (b = (0, a.t0)(a.t1, 1))[0]).market, f = d.market, g = Y(e, "BNB"), h = Y(f, "CAKE"), a.abrupt("return", {
                                    totalWonBNB: g,
                                    totalWonCAKE: h
                                });
                            case 11:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function() {
                    return g.apply(this, arguments)
                }),
                $ = (h = (0, b.Z)(c().mark(function a() {
                    var b, d, e, f, g, h, i = arguments;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                var c, j;
                                return b = i.length > 0 && void 0 !== i[0] ? i[0] : {}, d = i.length > 1 && void 0 !== i[1] ? i[1] : 1e3, e = i.length > 2 && void 0 !== i[2] ? i[2] : 0, f = i.length > 3 ? i[3] : void 0, g = i.length > 4 ? i[4] : void 0, a.next = 3, (0, x.request)(f, (0, x.gql)(Q(), "CAKE" === (c = g) ? "\n id\n hash  \n amount\n position\n claimed\n claimedAt\n claimedHash\n claimedBlock\n claimedCAKE\n claimedNetCAKE\n createdAt\n updatedAt\n" : "\n id\n hash  \n amount\n position\n claimed\n claimedAt\n claimedHash\n claimedBlock\n claimedBNB\n claimedNetBNB\n createdAt\n updatedAt\n", "\n  id\n  epoch\n  position\n  failed\n  startAt\n  startBlock\n  startHash\n  lockAt\n  lockBlock\n  lockHash\n  lockPrice\n  lockRoundId\n  closeAt\n  closeBlock\n  closeHash\n  closePrice\n  closeRoundId\n  totalBets\n  totalAmount\n  bullBets\n  bullAmount\n  bearBets\n  bearAmount\n", F(g)), {
                                    first: d,
                                    skip: e,
                                    where: b
                                });
                            case 3:
                                return h = a.sent, a.abrupt("return", h.bets);
                            case 5:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function() {
                    return h.apply(this, arguments)
                }),
                _ = (i = (0, b.Z)(c().mark(function a(b, d, e) {
                    var f, g;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return f = d.map(function(a) {
                                    return {
                                        address: e,
                                        name: "ledger",
                                        params: [a, b]
                                    }
                                }), a.next = 3, (0, B.v)(D, f);
                            case 3:
                                return g = a.sent, a.abrupt("return", g);
                            case 5:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function(a, b, c) {
                    return i.apply(this, arguments)
                }),
                q = 20,
                aa = {
                    skip: 0,
                    first: q,
                    orderBy: "createdAt",
                    orderDir: "desc"
                },
                ab = function(b, c, d) {
                    if (!b) {
                        var a = (c + d) * 1e3;
                        if (Number.isFinite(a)) return Date.now() > a
                    }
                    return !1
                },
                ac = (j = (0, b.Z)(c().mark(function a() {
                    var b, d, e, f, g, h, i, j, k, l, m = arguments;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return b = m.length > 0 && void 0 !== m[0] ? m[0] : {}, d = m.length > 1 ? m[1] : void 0, e = m.length > 2 ? m[2] : void 0, g = (f = (0, t.Z)({}, aa, b)).first, h = f.skip, i = f.where, j = f.orderBy, k = f.orderDir, a.next = 4, (0, x.request)(d, (0, x.gql)(R(), F(e)), {
                                    first: g,
                                    skip: h,
                                    where: i,
                                    orderBy: j,
                                    orderDir: k
                                });
                            case 4:
                                return l = a.sent, a.abrupt("return", l.users);
                            case 6:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function() {
                    return j.apply(this, arguments)
                }),
                ad = (k = (0, b.Z)(c().mark(function a(b, d, e) {
                    var f;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, (0, x.request)(d, (0, x.gql)(S(), F(e)), {
                                    id: b.toLowerCase()
                                });
                            case 2:
                                return f = a.sent, a.abrupt("return", f.user);
                            case 4:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function(a, b, c) {
                    return k.apply(this, arguments)
                }),
                ae = (l = (0, b.Z)(c().mark(function a(b, d, e) {
                    var f, g;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return f = d.map(function(a) {
                                    return {
                                        address: e,
                                        name: "claimable",
                                        params: [a, b]
                                    }
                                }), a.next = 3, (0, B.v)(D, f);
                            case 3:
                                return g = a.sent, a.abrupt("return", g.reduce(function(a, b, c) {
                                    var e = d[c],
                                        f = (0, v.Z)(b, 1)[0];
                                    return (0, u.Z)((0, t.Z)({}, a), (0, s.Z)({}, e, f))
                                }, {}));
                            case 5:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function(a, b, c) {
                    return l.apply(this, arguments)
                }),
                af = (m = (0, b.Z)(c().mark(function a(b) {
                    var d, e, f, g, h, i, j, k, l, m;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return d = ["currentEpoch", "intervalSeconds", "minBetAmount", "paused"].map(function(a) {
                                    return {
                                        address: b,
                                        name: a
                                    }
                                }), a.t0 = v.Z, a.next = 4, (0, B.v)(D, d);
                            case 4:
                                return a.t1 = a.sent, e = (0, a.t0)(a.t1, 4), g = (f = (0, v.Z)(e[0], 1))[0], h = (0, v.Z)(e[1], 1), i = h[0], j = (0, v.Z)(e[2], 1), k = j[0], l = (0, v.Z)(e[3], 1), m = l[0], a.abrupt("return", {
                                    status: m ? A.Gw.PAUSED : A.Gw.LIVE,
                                    currentEpoch: g.toNumber(),
                                    intervalSeconds: i.toNumber(),
                                    minBetAmount: k.toString()
                                });
                            case 15:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function(a) {
                    return m.apply(this, arguments)
                }),
                ag = (n = (0, b.Z)(c().mark(function a(b, d) {
                    var e, f;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return e = b.map(function(a) {
                                    return {
                                        address: d,
                                        name: "rounds",
                                        params: [a]
                                    }
                                }), a.next = 3, (0, B.v)(D, e);
                            case 3:
                                return f = a.sent, a.abrupt("return", f);
                            case 5:
                            case "end":
                                return a.stop()
                        }
                    }, a)
                })), function(a, b) {
                    return n.apply(this, arguments)
                }),
                ah = function(a, b) {
                    return {
                        epoch: a,
                        startTimestamp: b,
                        lockTimestamp: null,
                        closeTimestamp: null,
                        lockPrice: null,
                        closePrice: null,
                        totalAmount: E._Y.toJSON(),
                        bullAmount: E._Y.toJSON(),
                        bearAmount: E._Y.toJSON(),
                        rewardBaseCalAmount: E._Y.toJSON(),
                        rewardAmount: E._Y.toJSON(),
                        oracleCalled: !1,
                        lockOracleId: null,
                        closeOracleId: null
                    }
                },
                ai = function(a) {
                    return a.reduce(function(b, a) {
                        return (0, u.Z)((0, t.Z)({}, b), (0, s.Z)({}, a.epoch.toString(), a))
                    }, {})
                },
                aj = function(a) {
                    return {
                        position: 0 === a.position ? A.Tu.BULL : A.Tu.BEAR,
                        amount: a.amount.toJSON(),
                        claimed: a.claimed
                    }
                },
                ak = function(b, a, c) {
                    return a.reduce(function(a, d, e) {
                        if (!d || d.amount.eq(0)) return a;
                        var f = c[e].toString();
                        return (0, u.Z)((0, t.Z)({}, a), (0, s.Z)({}, b, (0, u.Z)((0, t.Z)({}, a[b]), (0, s.Z)({}, f, aj(d)))))
                    }, {})
                },
                al = function(a) {
                    var g = a.epoch,
                        b = a.startTimestamp,
                        c = a.lockTimestamp,
                        d = a.closeTimestamp,
                        e = a.lockPrice,
                        f = a.closePrice,
                        h = a.totalAmount,
                        i = a.bullAmount,
                        j = a.bearAmount,
                        k = a.rewardBaseCalAmount,
                        l = a.rewardAmount,
                        m = a.oracleCalled,
                        n = a.lockOracleId,
                        o = a.closeOracleId;
                    return {
                        oracleCalled: m,
                        epoch: g.toNumber(),
                        startTimestamp: b.eq(0) ? null : b.toNumber(),
                        lockTimestamp: c.eq(0) ? null : c.toNumber(),
                        closeTimestamp: d.eq(0) ? null : d.toNumber(),
                        lockPrice: e.eq(0) ? null : e.toJSON(),
                        closePrice: f.eq(0) ? null : f.toJSON(),
                        totalAmount: h.toJSON(),
                        bullAmount: i.toJSON(),
                        bearAmount: j.toJSON(),
                        rewardBaseCalAmount: k.toJSON(),
                        rewardAmount: l.toJSON(),
                        lockOracleId: n.toString(),
                        closeOracleId: o.toString()
                    }
                },
                am = function(a) {
                    return Object.keys(a).reduce(function(d, c) {
                        var b = a[c];
                        return b && (null == b ? void 0 : b.type) === "BigNumber" ? (0, u.Z)((0, t.Z)({}, d), (0, s.Z)({}, c, z.O$.from(b))) : (0, u.Z)((0, t.Z)({}, d), (0, s.Z)({}, c, b))
                    }, {})
                },
                an = (o = (0, b.Z)(c().mark(function a(b, d) {
                    var e, f;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0, e = (0, C.qi)(d), a.next = 4, e.getUserRoundsLength(b);
                            case 4:
                                return f = a.sent, a.abrupt("return", f);
                            case 8:
                                return a.prev = 8, a.t0 = a.catch(0), a.abrupt("return", E._Y);
                            case 11:
                            case "end":
                                return a.stop()
                        }
                    }, a, null, [
                        [0, 8]
                    ])
                })), function(a, b) {
                    return o.apply(this, arguments)
                }),
                ao = (p = (0, b.Z)(c().mark(function a(b) {
                    var d, e, f, g, h, i, j, k = arguments;
                    return c().wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return d = k.length > 1 && void 0 !== k[1] ? k[1] : 0, e = k.length > 2 && void 0 !== k[2] ? k[2] : G.yg, f = k.length > 3 ? k[3] : void 0, g = (0, C.qi)(f), a.prev = 2, a.t0 = v.Z, a.next = 6, g.getUserRounds(b, d, e);
                            case 6:
                                return a.t1 = a.sent, i = (h = (0, a.t0)(a.t1, 2))[0], j = h[1], a.abrupt("return", i.reduce(function(a, b, c) {
                                    return (0, u.Z)((0, t.Z)({}, a), (0, s.Z)({}, b.toString(), aj(j[c])))
                                }, {}));
                            case 13:
                                return a.prev = 13, a.t2 = a.catch(2), a.abrupt("return", null);
                            case 16:
                            case "end":
                                return a.stop()
                        }
                    }, a, null, [
                        [2, 13]
                    ])
                })), function(a) {
                    return p.apply(this, arguments)
                })
        }
    }
])
//# sourceMappingURL=3261-de0dc5e7f66def64.js.map