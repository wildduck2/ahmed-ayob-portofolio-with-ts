;(function () {
    const e = document.createElement('link').relList
    if (e && e.supports && e.supports('modulepreload')) return
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) t(n)
    new MutationObserver((n) => {
        for (const i of n)
            if (i.type === 'childList')
                for (const s of i.addedNodes)
                    s.tagName === 'LINK' && s.rel === 'modulepreload' && t(s)
    }).observe(document, { childList: !0, subtree: !0 })
    function r(n) {
        const i = {}
        return (
            n.integrity && (i.integrity = n.integrity),
            n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
            n.crossOrigin === 'use-credentials'
                ? (i.credentials = 'include')
                : n.crossOrigin === 'anonymous'
                ? (i.credentials = 'omit')
                : (i.credentials = 'same-origin'),
            i
        )
    }
    function t(n) {
        if (n.ep) return
        n.ep = !0
        const i = r(n)
        fetch(n.href, i)
    }
})()
function or(o) {
    if (o === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        )
    return o
}
function Ma(o, e) {
    ;(o.prototype = Object.create(e.prototype)),
        (o.prototype.constructor = o),
        (o.__proto__ = e)
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var bt = {
        autoSleep: 120,
        force3D: 'auto',
        nullTargetWarn: 1,
        units: { lineHeight: '' },
    },
    In = { duration: 0.5, overwrite: !1, delay: 0 },
    ls,
    Ye,
    he,
    Ct = 1e8,
    re = 1 / Ct,
    Lo = Math.PI * 2,
    Cl = Lo / 4,
    El = 0,
    Da = Math.sqrt,
    Ol = Math.cos,
    Al = Math.sin,
    Ae = function (e) {
        return typeof e == 'string'
    },
    de = function (e) {
        return typeof e == 'function'
    },
    hr = function (e) {
        return typeof e == 'number'
    },
    cs = function (e) {
        return typeof e > 'u'
    },
    er = function (e) {
        return typeof e == 'object'
    },
    ut = function (e) {
        return e !== !1
    },
    fs = function () {
        return typeof window < 'u'
    },
    Si = function (e) {
        return de(e) || Ae(e)
    },
    Ra =
        (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) ||
        function () {},
    He = Array.isArray,
    Fo = /(?:-?\.?\d|\.)+/gi,
    La = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Pn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    mo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Fa = /[+-]=-?[.\d]+/,
    Ia = /[^,'"\[\]\s]+/gi,
    Ml = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ue,
    St,
    Io,
    hs,
    xt = {},
    Ui = {},
    za,
    Na = function (e) {
        return (Ui = un(e, xt)) && je
    },
    ds = function (e, r) {
        return console.warn(
            'Invalid property',
            e,
            'set to',
            r,
            'Missing plugin? gsap.registerPlugin()'
        )
    },
    Gi = function (e, r) {
        return !r && console.warn(e)
    },
    $a = function (e, r) {
        return (e && (xt[e] = r) && Ui && (Ui[e] = r)) || xt
    },
    fi = function () {
        return 0
    },
    Dl = { suppressEvents: !0, isStart: !0, kill: !1 },
    Ni = { suppressEvents: !0, kill: !1 },
    Rl = { suppressEvents: !0 },
    ps = {},
    Pr = [],
    zo = {},
    Ba,
    vt = {},
    vo = {},
    js = 30,
    $i = [],
    gs = '',
    _s = function (e) {
        var r = e[0],
            t,
            n
        if ((er(r) || de(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
            for (n = $i.length; n-- && !$i[n].targetTest(r); );
            t = $i[n]
        }
        for (n = e.length; n--; )
            (e[n] && (e[n]._gsap || (e[n]._gsap = new cu(e[n], t)))) ||
                e.splice(n, 1)
        return e
    },
    en = function (e) {
        return e._gsap || _s(Et(e))[0]._gsap
    },
    qa = function (e, r, t) {
        return (t = e[r]) && de(t)
            ? e[r]()
            : (cs(t) && e.getAttribute && e.getAttribute(r)) || t
    },
    lt = function (e, r) {
        return (e = e.split(',')).forEach(r) || e
    },
    _e = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Ie = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    An = function (e, r) {
        var t = r.charAt(0),
            n = parseFloat(r.substr(2))
        return (
            (e = parseFloat(e)),
            t === '+' ? e + n : t === '-' ? e - n : t === '*' ? e * n : e / n
        )
    },
    Ll = function (e, r) {
        for (var t = r.length, n = 0; e.indexOf(r[n]) < 0 && ++n < t; );
        return n < t
    },
    Ki = function () {
        var e = Pr.length,
            r = Pr.slice(0),
            t,
            n
        for (zo = {}, Pr.length = 0, t = 0; t < e; t++)
            (n = r[t]),
                n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0)
    },
    Wa = function (e, r, t, n) {
        Pr.length && !Ye && Ki(),
            e.render(r, t, n || (Ye && r < 0 && (e._initted || e._startAt))),
            Pr.length && !Ye && Ki()
    },
    Ya = function (e) {
        var r = parseFloat(e)
        return (r || r === 0) && (e + '').match(Ia).length < 2
            ? r
            : Ae(e)
            ? e.trim()
            : e
    },
    Ha = function (e) {
        return e
    },
    Mt = function (e, r) {
        for (var t in r) t in e || (e[t] = r[t])
        return e
    },
    Fl = function (e) {
        return function (r, t) {
            for (var n in t)
                n in r ||
                    (n === 'duration' && e) ||
                    n === 'ease' ||
                    (r[n] = t[n])
        }
    },
    un = function (e, r) {
        for (var t in r) e[t] = r[t]
        return e
    },
    Xs = function o(e, r) {
        for (var t in r)
            t !== '__proto__' &&
                t !== 'constructor' &&
                t !== 'prototype' &&
                (e[t] = er(r[t]) ? o(e[t] || (e[t] = {}), r[t]) : r[t])
        return e
    },
    Qi = function (e, r) {
        var t = {},
            n
        for (n in e) n in r || (t[n] = e[n])
        return t
    },
    ei = function (e) {
        var r = e.parent || ue,
            t = e.keyframes ? Fl(He(e.keyframes)) : Mt
        if (ut(e.inherit))
            for (; r; ) t(e, r.vars.defaults), (r = r.parent || r._dp)
        return e
    },
    Il = function (e, r) {
        for (var t = e.length, n = t === r.length; n && t-- && e[t] === r[t]; );
        return t < 0
    },
    ja = function (e, r, t, n, i) {
        t === void 0 && (t = '_first'), n === void 0 && (n = '_last')
        var s = e[n],
            a
        if (i) for (a = r[i]; s && s[i] > a; ) s = s._prev
        return (
            s
                ? ((r._next = s._next), (s._next = r))
                : ((r._next = e[t]), (e[t] = r)),
            r._next ? (r._next._prev = r) : (e[n] = r),
            (r._prev = s),
            (r.parent = r._dp = e),
            r
        )
    },
    lo = function (e, r, t, n) {
        t === void 0 && (t = '_first'), n === void 0 && (n = '_last')
        var i = r._prev,
            s = r._next
        i ? (i._next = s) : e[t] === r && (e[t] = s),
            s ? (s._prev = i) : e[n] === r && (e[n] = i),
            (r._next = r._prev = r.parent = null)
    },
    Er = function (e, r) {
        e.parent &&
            (!r || e.parent.autoRemoveChildren) &&
            e.parent.remove &&
            e.parent.remove(e),
            (e._act = 0)
    },
    tn = function (e, r) {
        if (e && (!r || r._end > e._dur || r._start < 0))
            for (var t = e; t; ) (t._dirty = 1), (t = t.parent)
        return e
    },
    zl = function (e) {
        for (var r = e.parent; r && r.parent; )
            (r._dirty = 1), r.totalDuration(), (r = r.parent)
        return e
    },
    No = function (e, r, t, n) {
        return (
            e._startAt &&
            (Ye
                ? e._startAt.revert(Ni)
                : (e.vars.immediateRender && !e.vars.autoRevert) ||
                  e._startAt.render(r, !0, n))
        )
    },
    Nl = function o(e) {
        return !e || (e._ts && o(e.parent))
    },
    Vs = function (e) {
        return e._repeat ? zn(e._tTime, (e = e.duration() + e._rDelay)) * e : 0
    },
    zn = function (e, r) {
        var t = Math.floor((e /= r))
        return e && t === e ? t - 1 : t
    },
    Zi = function (e, r) {
        return (
            (e - r._start) * r._ts +
            (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
        )
    },
    co = function (e) {
        return (e._end = Ie(
            e._start + (e._tDur / Math.abs(e._ts || e._rts || re) || 0)
        ))
    },
    fo = function (e, r) {
        var t = e._dp
        return (
            t &&
                t.smoothChildTiming &&
                e._ts &&
                ((e._start = Ie(
                    t._time -
                        (e._ts > 0
                            ? r / e._ts
                            : ((e._dirty ? e.totalDuration() : e._tDur) - r) /
                              -e._ts)
                )),
                co(e),
                t._dirty || tn(t, e)),
            e
        )
    },
    Xa = function (e, r) {
        var t
        if (
            ((r._time ||
                (!r._dur && r._initted) ||
                (r._start < e._time && (r._dur || !r.add))) &&
                ((t = Zi(e.rawTime(), r)),
                (!r._dur || wi(0, r.totalDuration(), t) - r._tTime > re) &&
                    r.render(t, !0)),
            tn(e, r)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
            if (e._dur < e.duration())
                for (t = e; t._dp; )
                    t.rawTime() >= 0 && t.totalTime(t._tTime), (t = t._dp)
            e._zTime = -re
        }
    },
    Ut = function (e, r, t, n) {
        return (
            r.parent && Er(r),
            (r._start = Ie(
                (hr(t) ? t : t || e !== ue ? Tt(e, t, r) : e._time) + r._delay
            )),
            (r._end = Ie(
                r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
            )),
            ja(e, r, '_first', '_last', e._sort ? '_start' : 0),
            $o(r) || (e._recent = r),
            n || Xa(e, r),
            e._ts < 0 && fo(e, e._tTime),
            e
        )
    },
    Va = function (e, r) {
        return (
            (xt.ScrollTrigger || ds('scrollTrigger', r)) &&
            xt.ScrollTrigger.create(r, e)
        )
    },
    Ua = function (e, r, t, n, i) {
        if ((vs(e, r, i), !e._initted)) return 1
        if (
            !t &&
            e._pt &&
            !Ye &&
            ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
            Ba !== yt.frame
        )
            return Pr.push(e), (e._lazy = [i, n]), 1
    },
    $l = function o(e) {
        var r = e.parent
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || o(r))
    },
    $o = function (e) {
        var r = e.data
        return r === 'isFromStart' || r === 'isStart'
    },
    Bl = function (e, r, t, n) {
        var i = e.ratio,
            s =
                r < 0 ||
                (!r &&
                    ((!e._start && $l(e) && !(!e._initted && $o(e))) ||
                        ((e._ts < 0 || e._dp._ts < 0) && !$o(e))))
                    ? 0
                    : 1,
            a = e._rDelay,
            u = 0,
            l,
            c,
            d
        if (
            (a &&
                e._repeat &&
                ((u = wi(0, e._tDur, r)),
                (c = zn(u, a)),
                e._yoyo && c & 1 && (s = 1 - s),
                c !== zn(e._tTime, a) &&
                    ((i = 1 - s),
                    e.vars.repeatRefresh && e._initted && e.invalidate())),
            s !== i || Ye || n || e._zTime === re || (!r && e._zTime))
        ) {
            if (!e._initted && Ua(e, r, n, t, u)) return
            for (
                d = e._zTime,
                    e._zTime = r || (t ? re : 0),
                    t || (t = r && !d),
                    e.ratio = s,
                    e._from && (s = 1 - s),
                    e._time = 0,
                    e._tTime = u,
                    l = e._pt;
                l;

            )
                l.r(s, l.d), (l = l._next)
            r < 0 && No(e, r, t, !0),
                e._onUpdate && !t && Ot(e, 'onUpdate'),
                u && e._repeat && !t && e.parent && Ot(e, 'onRepeat'),
                (r >= e._tDur || r < 0) &&
                    e.ratio === s &&
                    (s && Er(e, 1),
                    !t &&
                        !Ye &&
                        (Ot(e, s ? 'onComplete' : 'onReverseComplete', !0),
                        e._prom && e._prom()))
        } else e._zTime || (e._zTime = r)
    },
    ql = function (e, r, t) {
        var n
        if (t > r)
            for (n = e._first; n && n._start <= t; ) {
                if (n.data === 'isPause' && n._start > r) return n
                n = n._next
            }
        else
            for (n = e._last; n && n._start >= t; ) {
                if (n.data === 'isPause' && n._start < r) return n
                n = n._prev
            }
    },
    Nn = function (e, r, t, n) {
        var i = e._repeat,
            s = Ie(r) || 0,
            a = e._tTime / e._tDur
        return (
            a && !n && (e._time *= s / e._dur),
            (e._dur = s),
            (e._tDur = i
                ? i < 0
                    ? 1e10
                    : Ie(s * (i + 1) + e._rDelay * i)
                : s),
            a > 0 && !n && fo(e, (e._tTime = e._tDur * a)),
            e.parent && co(e),
            t || tn(e.parent, e),
            e
        )
    },
    Us = function (e) {
        return e instanceof at ? tn(e) : Nn(e, e._dur)
    },
    Wl = { _start: 0, endTime: fi, totalDuration: fi },
    Tt = function o(e, r, t) {
        var n = e.labels,
            i = e._recent || Wl,
            s = e.duration() >= Ct ? i.endTime(!1) : e._dur,
            a,
            u,
            l
        return Ae(r) && (isNaN(r) || r in n)
            ? ((u = r.charAt(0)),
              (l = r.substr(-1) === '%'),
              (a = r.indexOf('=')),
              u === '<' || u === '>'
                  ? (a >= 0 && (r = r.replace(/=/, '')),
                    (u === '<' ? i._start : i.endTime(i._repeat >= 0)) +
                        (parseFloat(r.substr(1)) || 0) *
                            (l ? (a < 0 ? i : t).totalDuration() / 100 : 1))
                  : a < 0
                  ? (r in n || (n[r] = s), n[r])
                  : ((u = parseFloat(r.charAt(a - 1) + r.substr(a + 1))),
                    l &&
                        t &&
                        (u = (u / 100) * (He(t) ? t[0] : t).totalDuration()),
                    a > 1 ? o(e, r.substr(0, a - 1), t) + u : s + u))
            : r == null
            ? s
            : +r
    },
    ti = function (e, r, t) {
        var n = hr(r[1]),
            i = (n ? 2 : 1) + (e < 2 ? 0 : 1),
            s = r[i],
            a,
            u
        if ((n && (s.duration = r[1]), (s.parent = t), e)) {
            for (a = s, u = t; u && !('immediateRender' in a); )
                (a = u.vars.defaults || {}),
                    (u = ut(u.vars.inherit) && u.parent)
            ;(s.immediateRender = ut(a.immediateRender)),
                e < 2 ? (s.runBackwards = 1) : (s.startAt = r[i - 1])
        }
        return new xe(r[0], s, r[i + 1])
    },
    Mr = function (e, r) {
        return e || e === 0 ? r(e) : r
    },
    wi = function (e, r, t) {
        return t < e ? e : t > r ? r : t
    },
    We = function (e, r) {
        return !Ae(e) || !(r = Ml.exec(e)) ? '' : r[1]
    },
    Yl = function (e, r, t) {
        return Mr(t, function (n) {
            return wi(e, r, n)
        })
    },
    Bo = [].slice,
    Ga = function (e, r) {
        return (
            e &&
            er(e) &&
            'length' in e &&
            ((!r && !e.length) || (e.length - 1 in e && er(e[0]))) &&
            !e.nodeType &&
            e !== St
        )
    },
    Hl = function (e, r, t) {
        return (
            t === void 0 && (t = []),
            e.forEach(function (n) {
                var i
                return (Ae(n) && !r) || Ga(n, 1)
                    ? (i = t).push.apply(i, Et(n))
                    : t.push(n)
            }) || t
        )
    },
    Et = function (e, r, t) {
        return he && !r && he.selector
            ? he.selector(e)
            : Ae(e) && !t && (Io || !$n())
            ? Bo.call((r || hs).querySelectorAll(e), 0)
            : He(e)
            ? Hl(e, t)
            : Ga(e)
            ? Bo.call(e, 0)
            : e
            ? [e]
            : []
    },
    qo = function (e) {
        return (
            (e = Et(e)[0] || Gi('Invalid scope') || {}),
            function (r) {
                var t = e.current || e.nativeElement || e
                return Et(
                    r,
                    t.querySelectorAll
                        ? t
                        : t === e
                        ? Gi('Invalid scope') || hs.createElement('div')
                        : e
                )
            }
        )
    },
    Ka = function (e) {
        return e.sort(function () {
            return 0.5 - Math.random()
        })
    },
    Qa = function (e) {
        if (de(e)) return e
        var r = er(e) ? e : { each: e },
            t = rn(r.ease),
            n = r.from || 0,
            i = parseFloat(r.base) || 0,
            s = {},
            a = n > 0 && n < 1,
            u = isNaN(n) || a,
            l = r.axis,
            c = n,
            d = n
        return (
            Ae(n)
                ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
                : !a && u && ((c = n[0]), (d = n[1])),
            function (h, f, g) {
                var p = (g || r).length,
                    m = s[p],
                    w,
                    x,
                    S,
                    v,
                    y,
                    P,
                    T,
                    C,
                    k
                if (!m) {
                    if (
                        ((k = r.grid === 'auto' ? 0 : (r.grid || [1, Ct])[1]),
                        !k)
                    ) {
                        for (
                            T = -Ct;
                            T < (T = g[k++].getBoundingClientRect().left) &&
                            k < p;

                        );
                        k--
                    }
                    for (
                        m = s[p] = [],
                            w = u ? Math.min(k, p) * c - 0.5 : n % k,
                            x =
                                k === Ct
                                    ? 0
                                    : u
                                    ? (p * d) / k - 0.5
                                    : (n / k) | 0,
                            T = 0,
                            C = Ct,
                            P = 0;
                        P < p;
                        P++
                    )
                        (S = (P % k) - w),
                            (v = x - ((P / k) | 0)),
                            (m[P] = y =
                                l
                                    ? Math.abs(l === 'y' ? v : S)
                                    : Da(S * S + v * v)),
                            y > T && (T = y),
                            y < C && (C = y)
                    n === 'random' && Ka(m),
                        (m.max = T - C),
                        (m.min = C),
                        (m.v = p =
                            (parseFloat(r.amount) ||
                                parseFloat(r.each) *
                                    (k > p
                                        ? p - 1
                                        : l
                                        ? l === 'y'
                                            ? p / k
                                            : k
                                        : Math.max(k, p / k)) ||
                                0) * (n === 'edges' ? -1 : 1)),
                        (m.b = p < 0 ? i - p : i),
                        (m.u = We(r.amount || r.each) || 0),
                        (t = t && p < 0 ? au(t) : t)
                }
                return (
                    (p = (m[h] - m.min) / m.max || 0),
                    Ie(m.b + (t ? t(p) : p) * m.v) + m.u
                )
            }
        )
    },
    Wo = function (e) {
        var r = Math.pow(10, ((e + '').split('.')[1] || '').length)
        return function (t) {
            var n = Ie(Math.round(parseFloat(t) / e) * e * r)
            return (n - (n % 1)) / r + (hr(t) ? 0 : We(t))
        }
    },
    Za = function (e, r) {
        var t = He(e),
            n,
            i
        return (
            !t &&
                er(e) &&
                ((n = t = e.radius || Ct),
                e.values
                    ? ((e = Et(e.values)), (i = !hr(e[0])) && (n *= n))
                    : (e = Wo(e.increment))),
            Mr(
                r,
                t
                    ? de(e)
                        ? function (s) {
                              return (i = e(s)), Math.abs(i - s) <= n ? i : s
                          }
                        : function (s) {
                              for (
                                  var a = parseFloat(i ? s.x : s),
                                      u = parseFloat(i ? s.y : 0),
                                      l = Ct,
                                      c = 0,
                                      d = e.length,
                                      h,
                                      f;
                                  d--;

                              )
                                  i
                                      ? ((h = e[d].x - a),
                                        (f = e[d].y - u),
                                        (h = h * h + f * f))
                                      : (h = Math.abs(e[d] - a)),
                                      h < l && ((l = h), (c = d))
                              return (
                                  (c = !n || l <= n ? e[c] : s),
                                  i || c === s || hr(s) ? c : c + We(s)
                              )
                          }
                    : Wo(e)
            )
        )
    },
    Ja = function (e, r, t, n) {
        return Mr(He(e) ? !r : t === !0 ? !!(t = 0) : !n, function () {
            return He(e)
                ? e[~~(Math.random() * e.length)]
                : (t = t || 1e-5) &&
                      (n = t < 1 ? Math.pow(10, (t + '').length - 2) : 1) &&
                      Math.floor(
                          Math.round(
                              (e - t / 2 + Math.random() * (r - e + t * 0.99)) /
                                  t
                          ) *
                              t *
                              n
                      ) / n
        })
    },
    jl = function () {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t]
        return function (n) {
            return r.reduce(function (i, s) {
                return s(i)
            }, n)
        }
    },
    Xl = function (e, r) {
        return function (t) {
            return e(parseFloat(t)) + (r || We(t))
        }
    },
    Vl = function (e, r, t) {
        return tu(e, r, 0, 1, t)
    },
    eu = function (e, r, t) {
        return Mr(t, function (n) {
            return e[~~r(n)]
        })
    },
    Ul = function o(e, r, t) {
        var n = r - e
        return He(e)
            ? eu(e, o(0, e.length), r)
            : Mr(t, function (i) {
                  return ((n + ((i - e) % n)) % n) + e
              })
    },
    Gl = function o(e, r, t) {
        var n = r - e,
            i = n * 2
        return He(e)
            ? eu(e, o(0, e.length - 1), r)
            : Mr(t, function (s) {
                  return (
                      (s = (i + ((s - e) % i)) % i || 0),
                      e + (s > n ? i - s : s)
                  )
              })
    },
    hi = function (e) {
        for (var r = 0, t = '', n, i, s, a; ~(n = e.indexOf('random(', r)); )
            (s = e.indexOf(')', n)),
                (a = e.charAt(n + 7) === '['),
                (i = e.substr(n + 7, s - n - 7).match(a ? Ia : Fo)),
                (t +=
                    e.substr(r, n - r) +
                    Ja(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5)),
                (r = s + 1)
        return t + e.substr(r, e.length - r)
    },
    tu = function (e, r, t, n, i) {
        var s = r - e,
            a = n - t
        return Mr(i, function (u) {
            return t + (((u - e) / s) * a || 0)
        })
    },
    Kl = function o(e, r, t, n) {
        var i = isNaN(e + r)
            ? 0
            : function (f) {
                  return (1 - f) * e + f * r
              }
        if (!i) {
            var s = Ae(e),
                a = {},
                u,
                l,
                c,
                d,
                h
            if ((t === !0 && (n = 1) && (t = null), s))
                (e = { p: e }), (r = { p: r })
            else if (He(e) && !He(r)) {
                for (c = [], d = e.length, h = d - 2, l = 1; l < d; l++)
                    c.push(o(e[l - 1], e[l]))
                d--,
                    (i = function (g) {
                        g *= d
                        var p = Math.min(h, ~~g)
                        return c[p](g - p)
                    }),
                    (t = r)
            } else n || (e = un(He(e) ? [] : {}, e))
            if (!c) {
                for (u in r) ms.call(a, e, u, 'get', r[u])
                i = function (g) {
                    return bs(g, a) || (s ? e.p : e)
                }
            }
        }
        return Mr(t, i)
    },
    Gs = function (e, r, t) {
        var n = e.labels,
            i = Ct,
            s,
            a,
            u
        for (s in n)
            (a = n[s] - r),
                a < 0 == !!t && a && i > (a = Math.abs(a)) && ((u = s), (i = a))
        return u
    },
    Ot = function (e, r, t) {
        var n = e.vars,
            i = n[r],
            s = he,
            a = e._ctx,
            u,
            l,
            c
        if (i)
            return (
                (u = n[r + 'Params']),
                (l = n.callbackScope || e),
                t && Pr.length && Ki(),
                a && (he = a),
                (c = u ? i.apply(l, u) : i.call(l)),
                (he = s),
                c
            )
    },
    Gn = function (e) {
        return (
            Er(e),
            e.scrollTrigger && e.scrollTrigger.kill(!!Ye),
            e.progress() < 1 && Ot(e, 'onInterrupt'),
            e
        )
    },
    kn,
    ru = [],
    nu = function (e) {
        if (fs() && e) {
            e = (!e.name && e.default) || e
            var r = e.name,
                t = de(e),
                n =
                    r && !t && e.init
                        ? function () {
                              this._props = []
                          }
                        : e,
                i = {
                    init: fi,
                    render: bs,
                    add: ms,
                    kill: hc,
                    modifier: fc,
                    rawVars: 0,
                },
                s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: ws,
                    aliases: {},
                    register: 0,
                }
            if (($n(), e !== n)) {
                if (vt[r]) return
                Mt(n, Mt(Qi(e, i), s)),
                    un(n.prototype, un(i, Qi(e, s))),
                    (vt[(n.prop = r)] = n),
                    e.targetTest && ($i.push(n), (ps[r] = 1)),
                    (r =
                        (r === 'css'
                            ? 'CSS'
                            : r.charAt(0).toUpperCase() + r.substr(1)) +
                        'Plugin')
            }
            $a(r, n), e.register && e.register(je, n, ct)
        } else e && ru.push(e)
    },
    te = 255,
    Kn = {
        aqua: [0, te, te],
        lime: [0, te, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, te],
        navy: [0, 0, 128],
        white: [te, te, te],
        olive: [128, 128, 0],
        yellow: [te, te, 0],
        orange: [te, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [te, 0, 0],
        pink: [te, 192, 203],
        cyan: [0, te, te],
        transparent: [te, te, te, 0],
    },
    yo = function (e, r, t) {
        return (
            (e += e < 0 ? 1 : e > 1 ? -1 : 0),
            ((e * 6 < 1
                ? r + (t - r) * e * 6
                : e < 0.5
                ? t
                : e * 3 < 2
                ? r + (t - r) * (2 / 3 - e) * 6
                : r) *
                te +
                0.5) |
                0
        )
    },
    iu = function (e, r, t) {
        var n = e ? (hr(e) ? [e >> 16, (e >> 8) & te, e & te] : 0) : Kn.black,
            i,
            s,
            a,
            u,
            l,
            c,
            d,
            h,
            f,
            g
        if (!n) {
            if (
                (e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), Kn[e])
            )
                n = Kn[e]
            else if (e.charAt(0) === '#') {
                if (
                    (e.length < 6 &&
                        ((i = e.charAt(1)),
                        (s = e.charAt(2)),
                        (a = e.charAt(3)),
                        (e =
                            '#' +
                            i +
                            i +
                            s +
                            s +
                            a +
                            a +
                            (e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
                    e.length === 9)
                )
                    return (
                        (n = parseInt(e.substr(1, 6), 16)),
                        [
                            n >> 16,
                            (n >> 8) & te,
                            n & te,
                            parseInt(e.substr(7), 16) / 255,
                        ]
                    )
                ;(e = parseInt(e.substr(1), 16)),
                    (n = [e >> 16, (e >> 8) & te, e & te])
            } else if (e.substr(0, 3) === 'hsl') {
                if (((n = g = e.match(Fo)), !r))
                    (u = (+n[0] % 360) / 360),
                        (l = +n[1] / 100),
                        (c = +n[2] / 100),
                        (s = c <= 0.5 ? c * (l + 1) : c + l - c * l),
                        (i = c * 2 - s),
                        n.length > 3 && (n[3] *= 1),
                        (n[0] = yo(u + 1 / 3, i, s)),
                        (n[1] = yo(u, i, s)),
                        (n[2] = yo(u - 1 / 3, i, s))
                else if (~e.indexOf('='))
                    return (n = e.match(La)), t && n.length < 4 && (n[3] = 1), n
            } else n = e.match(Fo) || Kn.transparent
            n = n.map(Number)
        }
        return (
            r &&
                !g &&
                ((i = n[0] / te),
                (s = n[1] / te),
                (a = n[2] / te),
                (d = Math.max(i, s, a)),
                (h = Math.min(i, s, a)),
                (c = (d + h) / 2),
                d === h
                    ? (u = l = 0)
                    : ((f = d - h),
                      (l = c > 0.5 ? f / (2 - d - h) : f / (d + h)),
                      (u =
                          d === i
                              ? (s - a) / f + (s < a ? 6 : 0)
                              : d === s
                              ? (a - i) / f + 2
                              : (i - s) / f + 4),
                      (u *= 60)),
                (n[0] = ~~(u + 0.5)),
                (n[1] = ~~(l * 100 + 0.5)),
                (n[2] = ~~(c * 100 + 0.5))),
            t && n.length < 4 && (n[3] = 1),
            n
        )
    },
    ou = function (e) {
        var r = [],
            t = [],
            n = -1
        return (
            e.split(kr).forEach(function (i) {
                var s = i.match(Pn) || []
                r.push.apply(r, s), t.push((n += s.length + 1))
            }),
            (r.c = t),
            r
        )
    },
    Ks = function (e, r, t) {
        var n = '',
            i = (e + n).match(kr),
            s = r ? 'hsla(' : 'rgba(',
            a = 0,
            u,
            l,
            c,
            d
        if (!i) return e
        if (
            ((i = i.map(function (h) {
                return (
                    (h = iu(h, r, 1)) &&
                    s +
                        (r
                            ? h[0] + ',' + h[1] + '%,' + h[2] + '%,' + h[3]
                            : h.join(',')) +
                        ')'
                )
            })),
            t && ((c = ou(e)), (u = t.c), u.join(n) !== c.c.join(n)))
        )
            for (l = e.replace(kr, '1').split(Pn), d = l.length - 1; a < d; a++)
                n +=
                    l[a] +
                    (~u.indexOf(a)
                        ? i.shift() || s + '0,0,0,0)'
                        : (c.length ? c : i.length ? i : t).shift())
        if (!l)
            for (l = e.split(kr), d = l.length - 1; a < d; a++) n += l[a] + i[a]
        return n + l[d]
    },
    kr = (function () {
        var o =
                '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
            e
        for (e in Kn) o += '|' + e + '\\b'
        return new RegExp(o + ')', 'gi')
    })(),
    Ql = /hsl[a]?\(/,
    su = function (e) {
        var r = e.join(' '),
            t
        if (((kr.lastIndex = 0), kr.test(r)))
            return (
                (t = Ql.test(r)),
                (e[1] = Ks(e[1], t)),
                (e[0] = Ks(e[0], t, ou(e[1]))),
                !0
            )
    },
    di,
    yt = (function () {
        var o = Date.now,
            e = 500,
            r = 33,
            t = o(),
            n = t,
            i = 1e3 / 240,
            s = i,
            a = [],
            u,
            l,
            c,
            d,
            h,
            f,
            g = function p(m) {
                var w = o() - n,
                    x = m === !0,
                    S,
                    v,
                    y,
                    P
                if (
                    (w > e && (t += w - r),
                    (n += w),
                    (y = n - t),
                    (S = y - s),
                    (S > 0 || x) &&
                        ((P = ++d.frame),
                        (h = y - d.time * 1e3),
                        (d.time = y = y / 1e3),
                        (s += S + (S >= i ? 4 : i - S)),
                        (v = 1)),
                    x || (u = l(p)),
                    v)
                )
                    for (f = 0; f < a.length; f++) a[f](y, h, P, m)
            }
        return (
            (d = {
                time: 0,
                frame: 0,
                tick: function () {
                    g(!0)
                },
                deltaRatio: function (m) {
                    return h / (1e3 / (m || 60))
                },
                wake: function () {
                    za &&
                        (!Io &&
                            fs() &&
                            ((St = Io = window),
                            (hs = St.document || {}),
                            (xt.gsap = je),
                            (St.gsapVersions || (St.gsapVersions = [])).push(
                                je.version
                            ),
                            Na(
                                Ui ||
                                    St.GreenSockGlobals ||
                                    (!St.gsap && St) ||
                                    {}
                            ),
                            (c = St.requestAnimationFrame),
                            ru.forEach(nu)),
                        u && d.sleep(),
                        (l =
                            c ||
                            function (m) {
                                return setTimeout(m, (s - d.time * 1e3 + 1) | 0)
                            }),
                        (di = 1),
                        g(2))
                },
                sleep: function () {
                    ;(c ? St.cancelAnimationFrame : clearTimeout)(u),
                        (di = 0),
                        (l = fi)
                },
                lagSmoothing: function (m, w) {
                    ;(e = m || 1 / 0), (r = Math.min(w || 33, e))
                },
                fps: function (m) {
                    ;(i = 1e3 / (m || 240)), (s = d.time * 1e3 + i)
                },
                add: function (m, w, x) {
                    var S = w
                        ? function (v, y, P, T) {
                              m(v, y, P, T), d.remove(S)
                          }
                        : m
                    return d.remove(m), a[x ? 'unshift' : 'push'](S), $n(), S
                },
                remove: function (m, w) {
                    ~(w = a.indexOf(m)) && a.splice(w, 1) && f >= w && f--
                },
                _listeners: a,
            }),
            d
        )
    })(),
    $n = function () {
        return !di && yt.wake()
    },
    X = {},
    Zl = /^[\d.\-M][\d.\-,\s]/,
    Jl = /["']/g,
    ec = function (e) {
        for (
            var r = {},
                t = e.substr(1, e.length - 3).split(':'),
                n = t[0],
                i = 1,
                s = t.length,
                a,
                u,
                l;
            i < s;
            i++
        )
            (u = t[i]),
                (a = i !== s - 1 ? u.lastIndexOf(',') : u.length),
                (l = u.substr(0, a)),
                (r[n] = isNaN(l) ? l.replace(Jl, '').trim() : +l),
                (n = u.substr(a + 1).trim())
        return r
    },
    tc = function (e) {
        var r = e.indexOf('(') + 1,
            t = e.indexOf(')'),
            n = e.indexOf('(', r)
        return e.substring(r, ~n && n < t ? e.indexOf(')', t + 1) : t)
    },
    rc = function (e) {
        var r = (e + '').split('('),
            t = X[r[0]]
        return t && r.length > 1 && t.config
            ? t.config.apply(
                  null,
                  ~e.indexOf('{') ? [ec(r[1])] : tc(e).split(',').map(Ya)
              )
            : X._CE && Zl.test(e)
            ? X._CE('', e)
            : t
    },
    au = function (e) {
        return function (r) {
            return 1 - e(1 - r)
        }
    },
    uu = function o(e, r) {
        for (var t = e._first, n; t; )
            t instanceof at
                ? o(t, r)
                : t.vars.yoyoEase &&
                  (!t._yoyo || !t._repeat) &&
                  t._yoyo !== r &&
                  (t.timeline
                      ? o(t.timeline, r)
                      : ((n = t._ease),
                        (t._ease = t._yEase),
                        (t._yEase = n),
                        (t._yoyo = r))),
                (t = t._next)
    },
    rn = function (e, r) {
        return (e && (de(e) ? e : X[e] || rc(e))) || r
    },
    pn = function (e, r, t, n) {
        t === void 0 &&
            (t = function (u) {
                return 1 - r(1 - u)
            }),
            n === void 0 &&
                (n = function (u) {
                    return u < 0.5 ? r(u * 2) / 2 : 1 - r((1 - u) * 2) / 2
                })
        var i = { easeIn: r, easeOut: t, easeInOut: n },
            s
        return (
            lt(e, function (a) {
                ;(X[a] = xt[a] = i), (X[(s = a.toLowerCase())] = t)
                for (var u in i)
                    X[
                        s +
                            (u === 'easeIn'
                                ? '.in'
                                : u === 'easeOut'
                                ? '.out'
                                : '.inOut')
                    ] = X[a + '.' + u] = i[u]
            }),
            i
        )
    },
    lu = function (e) {
        return function (r) {
            return r < 0.5 ? (1 - e(1 - r * 2)) / 2 : 0.5 + e((r - 0.5) * 2) / 2
        }
    },
    wo = function o(e, r, t) {
        var n = r >= 1 ? r : 1,
            i = (t || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            s = (i / Lo) * (Math.asin(1 / n) || 0),
            a = function (c) {
                return c === 1
                    ? 1
                    : n * Math.pow(2, -10 * c) * Al((c - s) * i) + 1
            },
            u =
                e === 'out'
                    ? a
                    : e === 'in'
                    ? function (l) {
                          return 1 - a(1 - l)
                      }
                    : lu(a)
        return (
            (i = Lo / i),
            (u.config = function (l, c) {
                return o(e, l, c)
            }),
            u
        )
    },
    bo = function o(e, r) {
        r === void 0 && (r = 1.70158)
        var t = function (s) {
                return s ? --s * s * ((r + 1) * s + r) + 1 : 0
            },
            n =
                e === 'out'
                    ? t
                    : e === 'in'
                    ? function (i) {
                          return 1 - t(1 - i)
                      }
                    : lu(t)
        return (
            (n.config = function (i) {
                return o(e, i)
            }),
            n
        )
    }
lt('Linear,Quad,Cubic,Quart,Quint,Strong', function (o, e) {
    var r = e < 5 ? e + 1 : e
    pn(
        o + ',Power' + (r - 1),
        e
            ? function (t) {
                  return Math.pow(t, r)
              }
            : function (t) {
                  return t
              },
        function (t) {
            return 1 - Math.pow(1 - t, r)
        },
        function (t) {
            return t < 0.5
                ? Math.pow(t * 2, r) / 2
                : 1 - Math.pow((1 - t) * 2, r) / 2
        }
    )
})
X.Linear.easeNone = X.none = X.Linear.easeIn
pn('Elastic', wo('in'), wo('out'), wo())
;(function (o, e) {
    var r = 1 / e,
        t = 2 * r,
        n = 2.5 * r,
        i = function (a) {
            return a < r
                ? o * a * a
                : a < t
                ? o * Math.pow(a - 1.5 / e, 2) + 0.75
                : a < n
                ? o * (a -= 2.25 / e) * a + 0.9375
                : o * Math.pow(a - 2.625 / e, 2) + 0.984375
        }
    pn(
        'Bounce',
        function (s) {
            return 1 - i(1 - s)
        },
        i
    )
})(7.5625, 2.75)
pn('Expo', function (o) {
    return o ? Math.pow(2, 10 * (o - 1)) : 0
})
pn('Circ', function (o) {
    return -(Da(1 - o * o) - 1)
})
pn('Sine', function (o) {
    return o === 1 ? 1 : -Ol(o * Cl) + 1
})
pn('Back', bo('in'), bo('out'), bo())
X.SteppedEase =
    X.steps =
    xt.SteppedEase =
        {
            config: function (e, r) {
                e === void 0 && (e = 1)
                var t = 1 / e,
                    n = e + (r ? 0 : 1),
                    i = r ? 1 : 0,
                    s = 1 - re
                return function (a) {
                    return (((n * wi(0, s, a)) | 0) + i) * t
                }
            },
        }
In.ease = X['quad.out']
lt(
    'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
    function (o) {
        return (gs += o + ',' + o + 'Params,')
    }
)
var cu = function (e, r) {
        ;(this.id = El++),
            (e._gsap = this),
            (this.target = e),
            (this.harness = r),
            (this.get = r ? r.get : qa),
            (this.set = r ? r.getSetter : ws)
    },
    pi = (function () {
        function o(r) {
            ;(this.vars = r),
                (this._delay = +r.delay || 0),
                (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
                    ((this._rDelay = r.repeatDelay || 0),
                    (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
                (this._ts = 1),
                Nn(this, +r.duration, 1, 1),
                (this.data = r.data),
                he && ((this._ctx = he), he.data.push(this)),
                di || yt.wake()
        }
        var e = o.prototype
        return (
            (e.delay = function (t) {
                return t || t === 0
                    ? (this.parent &&
                          this.parent.smoothChildTiming &&
                          this.startTime(this._start + t - this._delay),
                      (this._delay = t),
                      this)
                    : this._delay
            }),
            (e.duration = function (t) {
                return arguments.length
                    ? this.totalDuration(
                          this._repeat > 0
                              ? t + (t + this._rDelay) * this._repeat
                              : t
                      )
                    : this.totalDuration() && this._dur
            }),
            (e.totalDuration = function (t) {
                return arguments.length
                    ? ((this._dirty = 0),
                      Nn(
                          this,
                          this._repeat < 0
                              ? t
                              : (t - this._repeat * this._rDelay) /
                                    (this._repeat + 1)
                      ))
                    : this._tDur
            }),
            (e.totalTime = function (t, n) {
                if (($n(), !arguments.length)) return this._tTime
                var i = this._dp
                if (i && i.smoothChildTiming && this._ts) {
                    for (
                        fo(this, t), !i._dp || i.parent || Xa(i, this);
                        i && i.parent;

                    )
                        i.parent._time !==
                            i._start +
                                (i._ts >= 0
                                    ? i._tTime / i._ts
                                    : (i.totalDuration() - i._tTime) /
                                      -i._ts) && i.totalTime(i._tTime, !0),
                            (i = i.parent)
                    !this.parent &&
                        this._dp.autoRemoveChildren &&
                        ((this._ts > 0 && t < this._tDur) ||
                            (this._ts < 0 && t > 0) ||
                            (!this._tDur && !t)) &&
                        Ut(this._dp, this, this._start - this._delay)
                }
                return (
                    (this._tTime !== t ||
                        (!this._dur && !n) ||
                        (this._initted && Math.abs(this._zTime) === re) ||
                        (!t &&
                            !this._initted &&
                            (this.add || this._ptLookup))) &&
                        (this._ts || (this._pTime = t), Wa(this, t, n)),
                    this
                )
            }),
            (e.time = function (t, n) {
                return arguments.length
                    ? this.totalTime(
                          Math.min(this.totalDuration(), t + Vs(this)) %
                              (this._dur + this._rDelay) || (t ? this._dur : 0),
                          n
                      )
                    : this._time
            }),
            (e.totalProgress = function (t, n) {
                return arguments.length
                    ? this.totalTime(this.totalDuration() * t, n)
                    : this.totalDuration()
                    ? Math.min(1, this._tTime / this._tDur)
                    : this.ratio
            }),
            (e.progress = function (t, n) {
                return arguments.length
                    ? this.totalTime(
                          this.duration() *
                              (this._yoyo && !(this.iteration() & 1)
                                  ? 1 - t
                                  : t) +
                              Vs(this),
                          n
                      )
                    : this.duration()
                    ? Math.min(1, this._time / this._dur)
                    : this.ratio
            }),
            (e.iteration = function (t, n) {
                var i = this.duration() + this._rDelay
                return arguments.length
                    ? this.totalTime(this._time + (t - 1) * i, n)
                    : this._repeat
                    ? zn(this._tTime, i) + 1
                    : 1
            }),
            (e.timeScale = function (t) {
                if (!arguments.length) return this._rts === -re ? 0 : this._rts
                if (this._rts === t) return this
                var n =
                    this.parent && this._ts
                        ? Zi(this.parent._time, this)
                        : this._tTime
                return (
                    (this._rts = +t || 0),
                    (this._ts = this._ps || t === -re ? 0 : this._rts),
                    this.totalTime(
                        wi(-Math.abs(this._delay), this._tDur, n),
                        !0
                    ),
                    co(this),
                    zl(this)
                )
            }),
            (e.paused = function (t) {
                return arguments.length
                    ? (this._ps !== t &&
                          ((this._ps = t),
                          t
                              ? ((this._pTime =
                                    this._tTime ||
                                    Math.max(-this._delay, this.rawTime())),
                                (this._ts = this._act = 0))
                              : ($n(),
                                (this._ts = this._rts),
                                this.totalTime(
                                    this.parent &&
                                        !this.parent.smoothChildTiming
                                        ? this.rawTime()
                                        : this._tTime || this._pTime,
                                    this.progress() === 1 &&
                                        Math.abs(this._zTime) !== re &&
                                        (this._tTime -= re)
                                ))),
                      this)
                    : this._ps
            }),
            (e.startTime = function (t) {
                if (arguments.length) {
                    this._start = t
                    var n = this.parent || this._dp
                    return (
                        n &&
                            (n._sort || !this.parent) &&
                            Ut(n, this, t - this._delay),
                        this
                    )
                }
                return this._start
            }),
            (e.endTime = function (t) {
                return (
                    this._start +
                    (ut(t) ? this.totalDuration() : this.duration()) /
                        Math.abs(this._ts || 1)
                )
            }),
            (e.rawTime = function (t) {
                var n = this.parent || this._dp
                return n
                    ? t &&
                      (!this._ts ||
                          (this._repeat &&
                              this._time &&
                              this.totalProgress() < 1))
                        ? this._tTime % (this._dur + this._rDelay)
                        : this._ts
                        ? Zi(n.rawTime(t), this)
                        : this._tTime
                    : this._tTime
            }),
            (e.revert = function (t) {
                t === void 0 && (t = Rl)
                var n = Ye
                return (
                    (Ye = t),
                    (this._initted || this._startAt) &&
                        (this.timeline && this.timeline.revert(t),
                        this.totalTime(-0.01, t.suppressEvents)),
                    this.data !== 'nested' && t.kill !== !1 && this.kill(),
                    (Ye = n),
                    this
                )
            }),
            (e.globalTime = function (t) {
                for (var n = this, i = arguments.length ? t : n.rawTime(); n; )
                    (i = n._start + i / (n._ts || 1)), (n = n._dp)
                return !this.parent && this._sat
                    ? this._sat.vars.immediateRender
                        ? -1 / 0
                        : this._sat.globalTime(t)
                    : i
            }),
            (e.repeat = function (t) {
                return arguments.length
                    ? ((this._repeat = t === 1 / 0 ? -2 : t), Us(this))
                    : this._repeat === -2
                    ? 1 / 0
                    : this._repeat
            }),
            (e.repeatDelay = function (t) {
                if (arguments.length) {
                    var n = this._time
                    return (this._rDelay = t), Us(this), n ? this.time(n) : this
                }
                return this._rDelay
            }),
            (e.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo
            }),
            (e.seek = function (t, n) {
                return this.totalTime(Tt(this, t), ut(n))
            }),
            (e.restart = function (t, n) {
                return this.play().totalTime(t ? -this._delay : 0, ut(n))
            }),
            (e.play = function (t, n) {
                return (
                    t != null && this.seek(t, n), this.reversed(!1).paused(!1)
                )
            }),
            (e.reverse = function (t, n) {
                return (
                    t != null && this.seek(t || this.totalDuration(), n),
                    this.reversed(!0).paused(!1)
                )
            }),
            (e.pause = function (t, n) {
                return t != null && this.seek(t, n), this.paused(!0)
            }),
            (e.resume = function () {
                return this.paused(!1)
            }),
            (e.reversed = function (t) {
                return arguments.length
                    ? (!!t !== this.reversed() &&
                          this.timeScale(-this._rts || (t ? -re : 0)),
                      this)
                    : this._rts < 0
            }),
            (e.invalidate = function () {
                return (
                    (this._initted = this._act = 0), (this._zTime = -re), this
                )
            }),
            (e.isActive = function () {
                var t = this.parent || this._dp,
                    n = this._start,
                    i
                return !!(
                    !t ||
                    (this._ts &&
                        this._initted &&
                        t.isActive() &&
                        (i = t.rawTime(!0)) >= n &&
                        i < this.endTime(!0) - re)
                )
            }),
            (e.eventCallback = function (t, n, i) {
                var s = this.vars
                return arguments.length > 1
                    ? (n
                          ? ((s[t] = n),
                            i && (s[t + 'Params'] = i),
                            t === 'onUpdate' && (this._onUpdate = n))
                          : delete s[t],
                      this)
                    : s[t]
            }),
            (e.then = function (t) {
                var n = this
                return new Promise(function (i) {
                    var s = de(t) ? t : Ha,
                        a = function () {
                            var l = n.then
                            ;(n.then = null),
                                de(s) &&
                                    (s = s(n)) &&
                                    (s.then || s === n) &&
                                    (n.then = l),
                                i(s),
                                (n.then = l)
                        }
                    ;(n._initted && n.totalProgress() === 1 && n._ts >= 0) ||
                    (!n._tTime && n._ts < 0)
                        ? a()
                        : (n._prom = a)
                })
            }),
            (e.kill = function () {
                Gn(this)
            }),
            o
        )
    })()
Mt(pi.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -re,
    _prom: 0,
    _ps: !1,
    _rts: 1,
})
var at = (function (o) {
    Ma(e, o)
    function e(t, n) {
        var i
        return (
            t === void 0 && (t = {}),
            (i = o.call(this, t) || this),
            (i.labels = {}),
            (i.smoothChildTiming = !!t.smoothChildTiming),
            (i.autoRemoveChildren = !!t.autoRemoveChildren),
            (i._sort = ut(t.sortChildren)),
            ue && Ut(t.parent || ue, or(i), n),
            t.reversed && i.reverse(),
            t.paused && i.paused(!0),
            t.scrollTrigger && Va(or(i), t.scrollTrigger),
            i
        )
    }
    var r = e.prototype
    return (
        (r.to = function (n, i, s) {
            return ti(0, arguments, this), this
        }),
        (r.from = function (n, i, s) {
            return ti(1, arguments, this), this
        }),
        (r.fromTo = function (n, i, s, a) {
            return ti(2, arguments, this), this
        }),
        (r.set = function (n, i, s) {
            return (
                (i.duration = 0),
                (i.parent = this),
                ei(i).repeatDelay || (i.repeat = 0),
                (i.immediateRender = !!i.immediateRender),
                new xe(n, i, Tt(this, s), 1),
                this
            )
        }),
        (r.call = function (n, i, s) {
            return Ut(this, xe.delayedCall(0, n, i), s)
        }),
        (r.staggerTo = function (n, i, s, a, u, l, c) {
            return (
                (s.duration = i),
                (s.stagger = s.stagger || a),
                (s.onComplete = l),
                (s.onCompleteParams = c),
                (s.parent = this),
                new xe(n, s, Tt(this, u)),
                this
            )
        }),
        (r.staggerFrom = function (n, i, s, a, u, l, c) {
            return (
                (s.runBackwards = 1),
                (ei(s).immediateRender = ut(s.immediateRender)),
                this.staggerTo(n, i, s, a, u, l, c)
            )
        }),
        (r.staggerFromTo = function (n, i, s, a, u, l, c, d) {
            return (
                (a.startAt = s),
                (ei(a).immediateRender = ut(a.immediateRender)),
                this.staggerTo(n, i, a, u, l, c, d)
            )
        }),
        (r.render = function (n, i, s) {
            var a = this._time,
                u = this._dirty ? this.totalDuration() : this._tDur,
                l = this._dur,
                c = n <= 0 ? 0 : Ie(n),
                d = this._zTime < 0 != n < 0 && (this._initted || !l),
                h,
                f,
                g,
                p,
                m,
                w,
                x,
                S,
                v,
                y,
                P,
                T
            if (
                (this !== ue && c > u && n >= 0 && (c = u),
                c !== this._tTime || s || d)
            ) {
                if (
                    (a !== this._time &&
                        l &&
                        ((c += this._time - a), (n += this._time - a)),
                    (h = c),
                    (v = this._start),
                    (S = this._ts),
                    (w = !S),
                    d &&
                        (l || (a = this._zTime),
                        (n || !i) && (this._zTime = n)),
                    this._repeat)
                ) {
                    if (
                        ((P = this._yoyo),
                        (m = l + this._rDelay),
                        this._repeat < -1 && n < 0)
                    )
                        return this.totalTime(m * 100 + n, i, s)
                    if (
                        ((h = Ie(c % m)),
                        c === u
                            ? ((p = this._repeat), (h = l))
                            : ((p = ~~(c / m)),
                              p && p === c / m && ((h = l), p--),
                              h > l && (h = l)),
                        (y = zn(this._tTime, m)),
                        !a &&
                            this._tTime &&
                            y !== p &&
                            this._tTime - y * m - this._dur <= 0 &&
                            (y = p),
                        P && p & 1 && ((h = l - h), (T = 1)),
                        p !== y && !this._lock)
                    ) {
                        var C = P && y & 1,
                            k = C === (P && p & 1)
                        if (
                            (p < y && (C = !C),
                            (a = C ? 0 : c % l ? l : c),
                            (this._lock = 1),
                            (this.render(
                                a || (T ? 0 : Ie(p * m)),
                                i,
                                !l
                            )._lock = 0),
                            (this._tTime = c),
                            !i && this.parent && Ot(this, 'onRepeat'),
                            this.vars.repeatRefresh &&
                                !T &&
                                (this.invalidate()._lock = 1),
                            (a && a !== this._time) ||
                                w !== !this._ts ||
                                (this.vars.onRepeat &&
                                    !this.parent &&
                                    !this._act))
                        )
                            return this
                        if (
                            ((l = this._dur),
                            (u = this._tDur),
                            k &&
                                ((this._lock = 2),
                                (a = C ? l : -1e-4),
                                this.render(a, !0),
                                this.vars.repeatRefresh &&
                                    !T &&
                                    this.invalidate()),
                            (this._lock = 0),
                            !this._ts && !w)
                        )
                            return this
                        uu(this, T)
                    }
                }
                if (
                    (this._hasPause &&
                        !this._forcing &&
                        this._lock < 2 &&
                        ((x = ql(this, Ie(a), Ie(h))),
                        x && (c -= h - (h = x._start))),
                    (this._tTime = c),
                    (this._time = h),
                    (this._act = !S),
                    this._initted ||
                        ((this._onUpdate = this.vars.onUpdate),
                        (this._initted = 1),
                        (this._zTime = n),
                        (a = 0)),
                    !a &&
                        h &&
                        !i &&
                        !p &&
                        (Ot(this, 'onStart'), this._tTime !== c))
                )
                    return this
                if (h >= a && n >= 0)
                    for (f = this._first; f; ) {
                        if (
                            ((g = f._next),
                            (f._act || h >= f._start) && f._ts && x !== f)
                        ) {
                            if (f.parent !== this) return this.render(n, i, s)
                            if (
                                (f.render(
                                    f._ts > 0
                                        ? (h - f._start) * f._ts
                                        : (f._dirty
                                              ? f.totalDuration()
                                              : f._tDur) +
                                              (h - f._start) * f._ts,
                                    i,
                                    s
                                ),
                                h !== this._time || (!this._ts && !w))
                            ) {
                                ;(x = 0), g && (c += this._zTime = -re)
                                break
                            }
                        }
                        f = g
                    }
                else {
                    f = this._last
                    for (var E = n < 0 ? n : h; f; ) {
                        if (
                            ((g = f._prev),
                            (f._act || E <= f._end) && f._ts && x !== f)
                        ) {
                            if (f.parent !== this) return this.render(n, i, s)
                            if (
                                (f.render(
                                    f._ts > 0
                                        ? (E - f._start) * f._ts
                                        : (f._dirty
                                              ? f.totalDuration()
                                              : f._tDur) +
                                              (E - f._start) * f._ts,
                                    i,
                                    s || (Ye && (f._initted || f._startAt))
                                ),
                                h !== this._time || (!this._ts && !w))
                            ) {
                                ;(x = 0), g && (c += this._zTime = E ? -re : re)
                                break
                            }
                        }
                        f = g
                    }
                }
                if (
                    x &&
                    !i &&
                    (this.pause(),
                    (x.render(h >= a ? 0 : -re)._zTime = h >= a ? 1 : -1),
                    this._ts)
                )
                    return (this._start = v), co(this), this.render(n, i, s)
                this._onUpdate && !i && Ot(this, 'onUpdate', !0),
                    ((c === u && this._tTime >= this.totalDuration()) ||
                        (!c && a)) &&
                        (v === this._start ||
                            Math.abs(S) !== Math.abs(this._ts)) &&
                        (this._lock ||
                            ((n || !l) &&
                                ((c === u && this._ts > 0) ||
                                    (!c && this._ts < 0)) &&
                                Er(this, 1),
                            !i &&
                                !(n < 0 && !a) &&
                                (c || a || !u) &&
                                (Ot(
                                    this,
                                    c === u && n >= 0
                                        ? 'onComplete'
                                        : 'onReverseComplete',
                                    !0
                                ),
                                this._prom &&
                                    !(c < u && this.timeScale() > 0) &&
                                    this._prom())))
            }
            return this
        }),
        (r.add = function (n, i) {
            var s = this
            if ((hr(i) || (i = Tt(this, i, n)), !(n instanceof pi))) {
                if (He(n))
                    return (
                        n.forEach(function (a) {
                            return s.add(a, i)
                        }),
                        this
                    )
                if (Ae(n)) return this.addLabel(n, i)
                if (de(n)) n = xe.delayedCall(0, n)
                else return this
            }
            return this !== n ? Ut(this, n, i) : this
        }),
        (r.getChildren = function (n, i, s, a) {
            n === void 0 && (n = !0),
                i === void 0 && (i = !0),
                s === void 0 && (s = !0),
                a === void 0 && (a = -Ct)
            for (var u = [], l = this._first; l; )
                l._start >= a &&
                    (l instanceof xe
                        ? i && u.push(l)
                        : (s && u.push(l),
                          n && u.push.apply(u, l.getChildren(!0, i, s)))),
                    (l = l._next)
            return u
        }),
        (r.getById = function (n) {
            for (var i = this.getChildren(1, 1, 1), s = i.length; s--; )
                if (i[s].vars.id === n) return i[s]
        }),
        (r.remove = function (n) {
            return Ae(n)
                ? this.removeLabel(n)
                : de(n)
                ? this.killTweensOf(n)
                : (lo(this, n),
                  n === this._recent && (this._recent = this._last),
                  tn(this))
        }),
        (r.totalTime = function (n, i) {
            return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                      this._ts &&
                      (this._start = Ie(
                          yt.time -
                              (this._ts > 0
                                  ? n / this._ts
                                  : (this.totalDuration() - n) / -this._ts)
                      )),
                  o.prototype.totalTime.call(this, n, i),
                  (this._forcing = 0),
                  this)
                : this._tTime
        }),
        (r.addLabel = function (n, i) {
            return (this.labels[n] = Tt(this, i)), this
        }),
        (r.removeLabel = function (n) {
            return delete this.labels[n], this
        }),
        (r.addPause = function (n, i, s) {
            var a = xe.delayedCall(0, i || fi, s)
            return (
                (a.data = 'isPause'),
                (this._hasPause = 1),
                Ut(this, a, Tt(this, n))
            )
        }),
        (r.removePause = function (n) {
            var i = this._first
            for (n = Tt(this, n); i; )
                i._start === n && i.data === 'isPause' && Er(i), (i = i._next)
        }),
        (r.killTweensOf = function (n, i, s) {
            for (var a = this.getTweensOf(n, s), u = a.length; u--; )
                wr !== a[u] && a[u].kill(n, i)
            return this
        }),
        (r.getTweensOf = function (n, i) {
            for (var s = [], a = Et(n), u = this._first, l = hr(i), c; u; )
                u instanceof xe
                    ? Ll(u._targets, a) &&
                      (l
                          ? (!wr || (u._initted && u._ts)) &&
                            u.globalTime(0) <= i &&
                            u.globalTime(u.totalDuration()) > i
                          : !i || u.isActive()) &&
                      s.push(u)
                    : (c = u.getTweensOf(a, i)).length && s.push.apply(s, c),
                    (u = u._next)
            return s
        }),
        (r.tweenTo = function (n, i) {
            i = i || {}
            var s = this,
                a = Tt(s, n),
                u = i,
                l = u.startAt,
                c = u.onStart,
                d = u.onStartParams,
                h = u.immediateRender,
                f,
                g = xe.to(
                    s,
                    Mt(
                        {
                            ease: i.ease || 'none',
                            lazy: !1,
                            immediateRender: !1,
                            time: a,
                            overwrite: 'auto',
                            duration:
                                i.duration ||
                                Math.abs(
                                    (a -
                                        (l && 'time' in l ? l.time : s._time)) /
                                        s.timeScale()
                                ) ||
                                re,
                            onStart: function () {
                                if ((s.pause(), !f)) {
                                    var m =
                                        i.duration ||
                                        Math.abs(
                                            (a -
                                                (l && 'time' in l
                                                    ? l.time
                                                    : s._time)) /
                                                s.timeScale()
                                        )
                                    g._dur !== m &&
                                        Nn(g, m, 0, 1).render(g._time, !0, !0),
                                        (f = 1)
                                }
                                c && c.apply(g, d || [])
                            },
                        },
                        i
                    )
                )
            return h ? g.render(0) : g
        }),
        (r.tweenFromTo = function (n, i, s) {
            return this.tweenTo(i, Mt({ startAt: { time: Tt(this, n) } }, s))
        }),
        (r.recent = function () {
            return this._recent
        }),
        (r.nextLabel = function (n) {
            return n === void 0 && (n = this._time), Gs(this, Tt(this, n))
        }),
        (r.previousLabel = function (n) {
            return n === void 0 && (n = this._time), Gs(this, Tt(this, n), 1)
        }),
        (r.currentLabel = function (n) {
            return arguments.length
                ? this.seek(n, !0)
                : this.previousLabel(this._time + re)
        }),
        (r.shiftChildren = function (n, i, s) {
            s === void 0 && (s = 0)
            for (var a = this._first, u = this.labels, l; a; )
                a._start >= s && ((a._start += n), (a._end += n)), (a = a._next)
            if (i) for (l in u) u[l] >= s && (u[l] += n)
            return tn(this)
        }),
        (r.invalidate = function (n) {
            var i = this._first
            for (this._lock = 0; i; ) i.invalidate(n), (i = i._next)
            return o.prototype.invalidate.call(this, n)
        }),
        (r.clear = function (n) {
            n === void 0 && (n = !0)
            for (var i = this._first, s; i; )
                (s = i._next), this.remove(i), (i = s)
            return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                n && (this.labels = {}),
                tn(this)
            )
        }),
        (r.totalDuration = function (n) {
            var i = 0,
                s = this,
                a = s._last,
                u = Ct,
                l,
                c,
                d
            if (arguments.length)
                return s.timeScale(
                    (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                        (s.reversed() ? -n : n)
                )
            if (s._dirty) {
                for (d = s.parent; a; )
                    (l = a._prev),
                        a._dirty && a.totalDuration(),
                        (c = a._start),
                        c > u && s._sort && a._ts && !s._lock
                            ? ((s._lock = 1),
                              (Ut(s, a, c - a._delay, 1)._lock = 0))
                            : (u = c),
                        c < 0 &&
                            a._ts &&
                            ((i -= c),
                            ((!d && !s._dp) || (d && d.smoothChildTiming)) &&
                                ((s._start += c / s._ts),
                                (s._time -= c),
                                (s._tTime -= c)),
                            s.shiftChildren(-c, !1, -1 / 0),
                            (u = 0)),
                        a._end > i && a._ts && (i = a._end),
                        (a = l)
                Nn(s, s === ue && s._time > i ? s._time : i, 1, 1),
                    (s._dirty = 0)
            }
            return s._tDur
        }),
        (e.updateRoot = function (n) {
            if (
                (ue._ts && (Wa(ue, Zi(n, ue)), (Ba = yt.frame)), yt.frame >= js)
            ) {
                js += bt.autoSleep || 120
                var i = ue._first
                if (
                    (!i || !i._ts) &&
                    bt.autoSleep &&
                    yt._listeners.length < 2
                ) {
                    for (; i && !i._ts; ) i = i._next
                    i || yt.sleep()
                }
            }
        }),
        e
    )
})(pi)
Mt(at.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
var nc = function (e, r, t, n, i, s, a) {
        var u = new ct(this._pt, e, r, 0, 1, _u, null, i),
            l = 0,
            c = 0,
            d,
            h,
            f,
            g,
            p,
            m,
            w,
            x
        for (
            u.b = t,
                u.e = n,
                t += '',
                n += '',
                (w = ~n.indexOf('random(')) && (n = hi(n)),
                s && ((x = [t, n]), s(x, e, r), (t = x[0]), (n = x[1])),
                h = t.match(mo) || [];
            (d = mo.exec(n));

        )
            (g = d[0]),
                (p = n.substring(l, d.index)),
                f ? (f = (f + 1) % 5) : p.substr(-5) === 'rgba(' && (f = 1),
                g !== h[c++] &&
                    ((m = parseFloat(h[c - 1]) || 0),
                    (u._pt = {
                        _next: u._pt,
                        p: p || c === 1 ? p : ',',
                        s: m,
                        c:
                            g.charAt(1) === '='
                                ? An(m, g) - m
                                : parseFloat(g) - m,
                        m: f && f < 4 ? Math.round : 0,
                    }),
                    (l = mo.lastIndex))
        return (
            (u.c = l < n.length ? n.substring(l, n.length) : ''),
            (u.fp = a),
            (Fa.test(n) || w) && (u.e = 0),
            (this._pt = u),
            u
        )
    },
    ms = function (e, r, t, n, i, s, a, u, l, c) {
        de(n) && (n = n(i || 0, e, s))
        var d = e[r],
            h =
                t !== 'get'
                    ? t
                    : de(d)
                    ? l
                        ? e[
                              r.indexOf('set') || !de(e['get' + r.substr(3)])
                                  ? r
                                  : 'get' + r.substr(3)
                          ](l)
                        : e[r]()
                    : d,
            f = de(d) ? (l ? uc : pu) : ys,
            g
        if (
            (Ae(n) &&
                (~n.indexOf('random(') && (n = hi(n)),
                n.charAt(1) === '=' &&
                    ((g = An(h, n) + (We(h) || 0)), (g || g === 0) && (n = g))),
            !c || h !== n || Yo)
        )
            return !isNaN(h * n) && n !== ''
                ? ((g = new ct(
                      this._pt,
                      e,
                      r,
                      +h || 0,
                      n - (h || 0),
                      typeof d == 'boolean' ? cc : gu,
                      0,
                      f
                  )),
                  l && (g.fp = l),
                  a && g.modifier(a, this, e),
                  (this._pt = g))
                : (!d && !(r in e) && ds(r, n),
                  nc.call(this, e, r, h, n, f, u || bt.stringFilter, l))
    },
    ic = function (e, r, t, n, i) {
        if (
            (de(e) && (e = ri(e, i, r, t, n)),
            !er(e) || (e.style && e.nodeType) || He(e) || Ra(e))
        )
            return Ae(e) ? ri(e, i, r, t, n) : e
        var s = {},
            a
        for (a in e) s[a] = ri(e[a], i, r, t, n)
        return s
    },
    fu = function (e, r, t, n, i, s) {
        var a, u, l, c
        if (
            vt[e] &&
            (a = new vt[e]()).init(
                i,
                a.rawVars ? r[e] : ic(r[e], n, i, s, t),
                t,
                n,
                s
            ) !== !1 &&
            ((t._pt = u =
                new ct(t._pt, i, e, 0, 1, a.render, a, 0, a.priority)),
            t !== kn)
        )
            for (
                l = t._ptLookup[t._targets.indexOf(i)], c = a._props.length;
                c--;

            )
                l[a._props[c]] = u
        return a
    },
    wr,
    Yo,
    vs = function o(e, r, t) {
        var n = e.vars,
            i = n.ease,
            s = n.startAt,
            a = n.immediateRender,
            u = n.lazy,
            l = n.onUpdate,
            c = n.onUpdateParams,
            d = n.callbackScope,
            h = n.runBackwards,
            f = n.yoyoEase,
            g = n.keyframes,
            p = n.autoRevert,
            m = e._dur,
            w = e._startAt,
            x = e._targets,
            S = e.parent,
            v = S && S.data === 'nested' ? S.vars.targets : x,
            y = e._overwrite === 'auto' && !ls,
            P = e.timeline,
            T,
            C,
            k,
            E,
            D,
            O,
            K,
            N,
            $,
            H,
            L,
            Y,
            J
        if (
            (P && (!g || !i) && (i = 'none'),
            (e._ease = rn(i, In.ease)),
            (e._yEase = f ? au(rn(f === !0 ? i : f, In.ease)) : 0),
            f &&
                e._yoyo &&
                !e._repeat &&
                ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
            (e._from = !P && !!n.runBackwards),
            !P || (g && !n.stagger))
        ) {
            if (
                ((N = x[0] ? en(x[0]).harness : 0),
                (Y = N && n[N.prop]),
                (T = Qi(n, ps)),
                w &&
                    (w._zTime < 0 && w.progress(1),
                    r < 0 && h && a && !p
                        ? w.render(-1, !0)
                        : w.revert(h && m ? Ni : Dl),
                    (w._lazy = 0)),
                s)
            ) {
                if (
                    (Er(
                        (e._startAt = xe.set(
                            x,
                            Mt(
                                {
                                    data: 'isStart',
                                    overwrite: !1,
                                    parent: S,
                                    immediateRender: !0,
                                    lazy: !w && ut(u),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate: l,
                                    onUpdateParams: c,
                                    callbackScope: d,
                                    stagger: 0,
                                },
                                s
                            )
                        ))
                    ),
                    (e._startAt._dp = 0),
                    (e._startAt._sat = e),
                    r < 0 && (Ye || (!a && !p)) && e._startAt.revert(Ni),
                    a && m && r <= 0 && t <= 0)
                ) {
                    r && (e._zTime = r)
                    return
                }
            } else if (h && m && !w) {
                if (
                    (r && (a = !1),
                    (k = Mt(
                        {
                            overwrite: !1,
                            data: 'isFromStart',
                            lazy: a && !w && ut(u),
                            immediateRender: a,
                            stagger: 0,
                            parent: S,
                        },
                        T
                    )),
                    Y && (k[N.prop] = Y),
                    Er((e._startAt = xe.set(x, k))),
                    (e._startAt._dp = 0),
                    (e._startAt._sat = e),
                    r < 0 &&
                        (Ye
                            ? e._startAt.revert(Ni)
                            : e._startAt.render(-1, !0)),
                    (e._zTime = r),
                    !a)
                )
                    o(e._startAt, re, re)
                else if (!r) return
            }
            for (
                e._pt = e._ptCache = 0, u = (m && ut(u)) || (u && !m), C = 0;
                C < x.length;
                C++
            ) {
                if (
                    ((D = x[C]),
                    (K = D._gsap || _s(x)[C]._gsap),
                    (e._ptLookup[C] = H = {}),
                    zo[K.id] && Pr.length && Ki(),
                    (L = v === x ? C : v.indexOf(D)),
                    N &&
                        ($ = new N()).init(D, Y || T, e, L, v) !== !1 &&
                        ((e._pt = E =
                            new ct(
                                e._pt,
                                D,
                                $.name,
                                0,
                                1,
                                $.render,
                                $,
                                0,
                                $.priority
                            )),
                        $._props.forEach(function (_) {
                            H[_] = E
                        }),
                        $.priority && (O = 1)),
                    !N || Y)
                )
                    for (k in T)
                        vt[k] && ($ = fu(k, T, e, L, D, v))
                            ? $.priority && (O = 1)
                            : (H[k] = E =
                                  ms.call(
                                      e,
                                      D,
                                      k,
                                      'get',
                                      T[k],
                                      L,
                                      v,
                                      0,
                                      n.stringFilter
                                  ))
                e._op && e._op[C] && e.kill(D, e._op[C]),
                    y &&
                        e._pt &&
                        ((wr = e),
                        ue.killTweensOf(D, H, e.globalTime(r)),
                        (J = !e.parent),
                        (wr = 0)),
                    e._pt && u && (zo[K.id] = 1)
            }
            O && mu(e), e._onInit && e._onInit(e)
        }
        ;(e._onUpdate = l),
            (e._initted = (!e._op || e._pt) && !J),
            g && r <= 0 && P.render(Ct, !0, !0)
    },
    oc = function (e, r, t, n, i, s, a) {
        var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[r],
            l,
            c,
            d,
            h
        if (!u)
            for (
                u = e._ptCache[r] = [], d = e._ptLookup, h = e._targets.length;
                h--;

            ) {
                if (((l = d[h][r]), l && l.d && l.d._pt))
                    for (l = l.d._pt; l && l.p !== r && l.fp !== r; )
                        l = l._next
                if (!l)
                    return (Yo = 1), (e.vars[r] = '+=0'), vs(e, a), (Yo = 0), 1
                u.push(l)
            }
        for (h = u.length; h--; )
            (c = u[h]),
                (l = c._pt || c),
                (l.s = (n || n === 0) && !i ? n : l.s + (n || 0) + s * l.c),
                (l.c = t - l.s),
                c.e && (c.e = _e(t) + We(c.e)),
                c.b && (c.b = l.s + We(c.b))
    },
    sc = function (e, r) {
        var t = e[0] ? en(e[0]).harness : 0,
            n = t && t.aliases,
            i,
            s,
            a,
            u
        if (!n) return r
        i = un({}, r)
        for (s in n)
            if (s in i)
                for (u = n[s].split(','), a = u.length; a--; ) i[u[a]] = i[s]
        return i
    },
    ac = function (e, r, t, n) {
        var i = r.ease || n || 'power1.inOut',
            s,
            a
        if (He(r))
            (a = t[e] || (t[e] = [])),
                r.forEach(function (u, l) {
                    return a.push({ t: (l / (r.length - 1)) * 100, v: u, e: i })
                })
        else
            for (s in r)
                (a = t[s] || (t[s] = [])),
                    s === 'ease' || a.push({ t: parseFloat(e), v: r[s], e: i })
    },
    ri = function (e, r, t, n, i) {
        return de(e)
            ? e.call(r, t, n, i)
            : Ae(e) && ~e.indexOf('random(')
            ? hi(e)
            : e
    },
    hu = gs + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
    du = {}
lt(hu + ',id,stagger,delay,duration,paused,scrollTrigger', function (o) {
    return (du[o] = 1)
})
var xe = (function (o) {
    Ma(e, o)
    function e(t, n, i, s) {
        var a
        typeof n == 'number' && ((i.duration = n), (n = i), (i = null)),
            (a = o.call(this, s ? n : ei(n)) || this)
        var u = a.vars,
            l = u.duration,
            c = u.delay,
            d = u.immediateRender,
            h = u.stagger,
            f = u.overwrite,
            g = u.keyframes,
            p = u.defaults,
            m = u.scrollTrigger,
            w = u.yoyoEase,
            x = n.parent || ue,
            S = (He(t) || Ra(t) ? hr(t[0]) : 'length' in n) ? [t] : Et(t),
            v,
            y,
            P,
            T,
            C,
            k,
            E,
            D
        if (
            ((a._targets = S.length
                ? _s(S)
                : Gi(
                      'GSAP target ' + t + ' not found. https://greensock.com',
                      !bt.nullTargetWarn
                  ) || []),
            (a._ptLookup = []),
            (a._overwrite = f),
            g || h || Si(l) || Si(c))
        ) {
            if (
                ((n = a.vars),
                (v = a.timeline =
                    new at({
                        data: 'nested',
                        defaults: p || {},
                        targets: x && x.data === 'nested' ? x.vars.targets : S,
                    })),
                v.kill(),
                (v.parent = v._dp = or(a)),
                (v._start = 0),
                h || Si(l) || Si(c))
            ) {
                if (((T = S.length), (E = h && Qa(h)), er(h)))
                    for (C in h)
                        ~hu.indexOf(C) && (D || (D = {}), (D[C] = h[C]))
                for (y = 0; y < T; y++)
                    (P = Qi(n, du)),
                        (P.stagger = 0),
                        w && (P.yoyoEase = w),
                        D && un(P, D),
                        (k = S[y]),
                        (P.duration = +ri(l, or(a), y, k, S)),
                        (P.delay = (+ri(c, or(a), y, k, S) || 0) - a._delay),
                        !h &&
                            T === 1 &&
                            P.delay &&
                            ((a._delay = c = P.delay),
                            (a._start += c),
                            (P.delay = 0)),
                        v.to(k, P, E ? E(y, k, S) : 0),
                        (v._ease = X.none)
                v.duration() ? (l = c = 0) : (a.timeline = 0)
            } else if (g) {
                ei(Mt(v.vars.defaults, { ease: 'none' })),
                    (v._ease = rn(g.ease || n.ease || 'none'))
                var O = 0,
                    K,
                    N,
                    $
                if (He(g))
                    g.forEach(function (H) {
                        return v.to(S, H, '>')
                    }),
                        v.duration()
                else {
                    P = {}
                    for (C in g)
                        C === 'ease' ||
                            C === 'easeEach' ||
                            ac(C, g[C], P, g.easeEach)
                    for (C in P)
                        for (
                            K = P[C].sort(function (H, L) {
                                return H.t - L.t
                            }),
                                O = 0,
                                y = 0;
                            y < K.length;
                            y++
                        )
                            (N = K[y]),
                                ($ = {
                                    ease: N.e,
                                    duration:
                                        ((N.t - (y ? K[y - 1].t : 0)) / 100) *
                                        l,
                                }),
                                ($[C] = N.v),
                                v.to(S, $, O),
                                (O += $.duration)
                    v.duration() < l && v.to({}, { duration: l - v.duration() })
                }
            }
            l || a.duration((l = v.duration()))
        } else a.timeline = 0
        return (
            f === !0 && !ls && ((wr = or(a)), ue.killTweensOf(S), (wr = 0)),
            Ut(x, or(a), i),
            n.reversed && a.reverse(),
            n.paused && a.paused(!0),
            (d ||
                (!l &&
                    !g &&
                    a._start === Ie(x._time) &&
                    ut(d) &&
                    Nl(or(a)) &&
                    x.data !== 'nested')) &&
                ((a._tTime = -re), a.render(Math.max(0, -c) || 0)),
            m && Va(or(a), m),
            a
        )
    }
    var r = e.prototype
    return (
        (r.render = function (n, i, s) {
            var a = this._time,
                u = this._tDur,
                l = this._dur,
                c = n < 0,
                d = n > u - re && !c ? u : n < re ? 0 : n,
                h,
                f,
                g,
                p,
                m,
                w,
                x,
                S,
                v
            if (!l) Bl(this, n, i, s)
            else if (
                d !== this._tTime ||
                !n ||
                s ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== c)
            ) {
                if (((h = d), (S = this.timeline), this._repeat)) {
                    if (((p = l + this._rDelay), this._repeat < -1 && c))
                        return this.totalTime(p * 100 + n, i, s)
                    if (
                        ((h = Ie(d % p)),
                        d === u
                            ? ((g = this._repeat), (h = l))
                            : ((g = ~~(d / p)),
                              g && g === d / p && ((h = l), g--),
                              h > l && (h = l)),
                        (w = this._yoyo && g & 1),
                        w && ((v = this._yEase), (h = l - h)),
                        (m = zn(this._tTime, p)),
                        h === a && !s && this._initted)
                    )
                        return (this._tTime = d), this
                    g !== m &&
                        (S && this._yEase && uu(S, w),
                        this.vars.repeatRefresh &&
                            !w &&
                            !this._lock &&
                            ((this._lock = s = 1),
                            (this.render(
                                Ie(p * g),
                                !0
                            ).invalidate()._lock = 0)))
                }
                if (!this._initted) {
                    if (Ua(this, c ? n : h, s, i, d))
                        return (this._tTime = 0), this
                    if (a !== this._time) return this
                    if (l !== this._dur) return this.render(n, i, s)
                }
                if (
                    ((this._tTime = d),
                    (this._time = h),
                    !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = x = (v || this._ease)(h / l)),
                    this._from && (this.ratio = x = 1 - x),
                    h &&
                        !a &&
                        !i &&
                        !g &&
                        (Ot(this, 'onStart'), this._tTime !== d))
                )
                    return this
                for (f = this._pt; f; ) f.r(x, f.d), (f = f._next)
                ;(S &&
                    S.render(
                        n < 0
                            ? n
                            : !h && w
                            ? -re
                            : S._dur * S._ease(h / this._dur),
                        i,
                        s
                    )) ||
                    (this._startAt && (this._zTime = n)),
                    this._onUpdate &&
                        !i &&
                        (c && No(this, n, i, s), Ot(this, 'onUpdate')),
                    this._repeat &&
                        g !== m &&
                        this.vars.onRepeat &&
                        !i &&
                        this.parent &&
                        Ot(this, 'onRepeat'),
                    (d === this._tDur || !d) &&
                        this._tTime === d &&
                        (c && !this._onUpdate && No(this, n, !0, !0),
                        (n || !l) &&
                            ((d === this._tDur && this._ts > 0) ||
                                (!d && this._ts < 0)) &&
                            Er(this, 1),
                        !i &&
                            !(c && !a) &&
                            (d || a || w) &&
                            (Ot(
                                this,
                                d === u ? 'onComplete' : 'onReverseComplete',
                                !0
                            ),
                            this._prom &&
                                !(d < u && this.timeScale() > 0) &&
                                this._prom()))
            }
            return this
        }),
        (r.targets = function () {
            return this._targets
        }),
        (r.invalidate = function (n) {
            return (
                (!n || !this.vars.runBackwards) && (this._startAt = 0),
                (this._pt =
                    this._op =
                    this._onUpdate =
                    this._lazy =
                    this.ratio =
                        0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(n),
                o.prototype.invalidate.call(this, n)
            )
        }),
        (r.resetTo = function (n, i, s, a) {
            di || yt.wake(), this._ts || this.play()
            var u = Math.min(
                    this._dur,
                    (this._dp._time - this._start) * this._ts
                ),
                l
            return (
                this._initted || vs(this, u),
                (l = this._ease(u / this._dur)),
                oc(this, n, i, s, a, l, u)
                    ? this.resetTo(n, i, s, a)
                    : (fo(this, 0),
                      this.parent ||
                          ja(
                              this._dp,
                              this,
                              '_first',
                              '_last',
                              this._dp._sort ? '_start' : 0
                          ),
                      this.render(0))
            )
        }),
        (r.kill = function (n, i) {
            if ((i === void 0 && (i = 'all'), !n && (!i || i === 'all')))
                return (
                    (this._lazy = this._pt = 0), this.parent ? Gn(this) : this
                )
            if (this.timeline) {
                var s = this.timeline.totalDuration()
                return (
                    this.timeline.killTweensOf(
                        n,
                        i,
                        wr && wr.vars.overwrite !== !0
                    )._first || Gn(this),
                    this.parent &&
                        s !== this.timeline.totalDuration() &&
                        Nn(this, (this._dur * this.timeline._tDur) / s, 0, 1),
                    this
                )
            }
            var a = this._targets,
                u = n ? Et(n) : a,
                l = this._ptLookup,
                c = this._pt,
                d,
                h,
                f,
                g,
                p,
                m,
                w
            if ((!i || i === 'all') && Il(a, u))
                return i === 'all' && (this._pt = 0), Gn(this)
            for (
                d = this._op = this._op || [],
                    i !== 'all' &&
                        (Ae(i) &&
                            ((p = {}),
                            lt(i, function (x) {
                                return (p[x] = 1)
                            }),
                            (i = p)),
                        (i = sc(a, i))),
                    w = a.length;
                w--;

            )
                if (~u.indexOf(a[w])) {
                    ;(h = l[w]),
                        i === 'all'
                            ? ((d[w] = i), (g = h), (f = {}))
                            : ((f = d[w] = d[w] || {}), (g = i))
                    for (p in g)
                        (m = h && h[p]),
                            m &&
                                ((!('kill' in m.d) || m.d.kill(p) === !0) &&
                                    lo(this, m, '_pt'),
                                delete h[p]),
                            f !== 'all' && (f[p] = 1)
                }
            return this._initted && !this._pt && c && Gn(this), this
        }),
        (e.to = function (n, i) {
            return new e(n, i, arguments[2])
        }),
        (e.from = function (n, i) {
            return ti(1, arguments)
        }),
        (e.delayedCall = function (n, i, s, a) {
            return new e(i, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: n,
                onComplete: i,
                onReverseComplete: i,
                onCompleteParams: s,
                onReverseCompleteParams: s,
                callbackScope: a,
            })
        }),
        (e.fromTo = function (n, i, s) {
            return ti(2, arguments)
        }),
        (e.set = function (n, i) {
            return (
                (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(n, i)
            )
        }),
        (e.killTweensOf = function (n, i, s) {
            return ue.killTweensOf(n, i, s)
        }),
        e
    )
})(pi)
Mt(xe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 })
lt('staggerTo,staggerFrom,staggerFromTo', function (o) {
    xe[o] = function () {
        var e = new at(),
            r = Bo.call(arguments, 0)
        return r.splice(o === 'staggerFromTo' ? 5 : 4, 0, 0), e[o].apply(e, r)
    }
})
var ys = function (e, r, t) {
        return (e[r] = t)
    },
    pu = function (e, r, t) {
        return e[r](t)
    },
    uc = function (e, r, t, n) {
        return e[r](n.fp, t)
    },
    lc = function (e, r, t) {
        return e.setAttribute(r, t)
    },
    ws = function (e, r) {
        return de(e[r]) ? pu : cs(e[r]) && e.setAttribute ? lc : ys
    },
    gu = function (e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
    },
    cc = function (e, r) {
        return r.set(r.t, r.p, !!(r.s + r.c * e), r)
    },
    _u = function (e, r) {
        var t = r._pt,
            n = ''
        if (!e && r.b) n = r.b
        else if (e === 1 && r.e) n = r.e
        else {
            for (; t; )
                (n =
                    t.p +
                    (t.m
                        ? t.m(t.s + t.c * e)
                        : Math.round((t.s + t.c * e) * 1e4) / 1e4) +
                    n),
                    (t = t._next)
            n += r.c
        }
        r.set(r.t, r.p, n, r)
    },
    bs = function (e, r) {
        for (var t = r._pt; t; ) t.r(e, t.d), (t = t._next)
    },
    fc = function (e, r, t, n) {
        for (var i = this._pt, s; i; )
            (s = i._next), i.p === n && i.modifier(e, r, t), (i = s)
    },
    hc = function (e) {
        for (var r = this._pt, t, n; r; )
            (n = r._next),
                (r.p === e && !r.op) || r.op === e
                    ? lo(this, r, '_pt')
                    : r.dep || (t = 1),
                (r = n)
        return !t
    },
    dc = function (e, r, t, n) {
        n.mSet(e, r, n.m.call(n.tween, t, n.mt), n)
    },
    mu = function (e) {
        for (var r = e._pt, t, n, i, s; r; ) {
            for (t = r._next, n = i; n && n.pr > r.pr; ) n = n._next
            ;(r._prev = n ? n._prev : s) ? (r._prev._next = r) : (i = r),
                (r._next = n) ? (n._prev = r) : (s = r),
                (r = t)
        }
        e._pt = i
    },
    ct = (function () {
        function o(r, t, n, i, s, a, u, l, c) {
            ;(this.t = t),
                (this.s = i),
                (this.c = s),
                (this.p = n),
                (this.r = a || gu),
                (this.d = u || this),
                (this.set = l || ys),
                (this.pr = c || 0),
                (this._next = r),
                r && (r._prev = this)
        }
        var e = o.prototype
        return (
            (e.modifier = function (t, n, i) {
                ;(this.mSet = this.mSet || this.set),
                    (this.set = dc),
                    (this.m = t),
                    (this.mt = i),
                    (this.tween = n)
            }),
            o
        )
    })()
lt(
    gs +
        'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
    function (o) {
        return (ps[o] = 1)
    }
)
xt.TweenMax = xt.TweenLite = xe
xt.TimelineLite = xt.TimelineMax = at
ue = new at({
    sortChildren: !1,
    defaults: In,
    autoRemoveChildren: !0,
    id: 'root',
    smoothChildTiming: !0,
})
bt.stringFilter = su
var nn = [],
    Bi = {},
    pc = [],
    Qs = 0,
    gc = 0,
    xo = function (e) {
        return (Bi[e] || pc).map(function (r) {
            return r()
        })
    },
    Ho = function () {
        var e = Date.now(),
            r = []
        e - Qs > 2 &&
            (xo('matchMediaInit'),
            nn.forEach(function (t) {
                var n = t.queries,
                    i = t.conditions,
                    s,
                    a,
                    u,
                    l
                for (a in n)
                    (s = St.matchMedia(n[a]).matches),
                        s && (u = 1),
                        s !== i[a] && ((i[a] = s), (l = 1))
                l && (t.revert(), u && r.push(t))
            }),
            xo('matchMediaRevert'),
            r.forEach(function (t) {
                return t.onMatch(t)
            }),
            (Qs = e),
            xo('matchMedia'))
    },
    vu = (function () {
        function o(r, t) {
            ;(this.selector = t && qo(t)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                (this.id = gc++),
                r && this.add(r)
        }
        var e = o.prototype
        return (
            (e.add = function (t, n, i) {
                de(t) && ((i = n), (n = t), (t = de))
                var s = this,
                    a = function () {
                        var l = he,
                            c = s.selector,
                            d
                        return (
                            l && l !== s && l.data.push(s),
                            i && (s.selector = qo(i)),
                            (he = s),
                            (d = n.apply(s, arguments)),
                            de(d) && s._r.push(d),
                            (he = l),
                            (s.selector = c),
                            (s.isReverted = !1),
                            d
                        )
                    }
                return (s.last = a), t === de ? a(s) : t ? (s[t] = a) : a
            }),
            (e.ignore = function (t) {
                var n = he
                ;(he = null), t(this), (he = n)
            }),
            (e.getTweens = function () {
                var t = []
                return (
                    this.data.forEach(function (n) {
                        return n instanceof o
                            ? t.push.apply(t, n.getTweens())
                            : n instanceof xe &&
                                  !(n.parent && n.parent.data === 'nested') &&
                                  t.push(n)
                    }),
                    t
                )
            }),
            (e.clear = function () {
                this._r.length = this.data.length = 0
            }),
            (e.kill = function (t, n) {
                var i = this
                if (t) {
                    var s = this.getTweens()
                    this.data.forEach(function (u) {
                        u.data === 'isFlip' &&
                            (u.revert(),
                            u.getChildren(!0, !0, !1).forEach(function (l) {
                                return s.splice(s.indexOf(l), 1)
                            }))
                    }),
                        s
                            .map(function (u) {
                                return { g: u.globalTime(0), t: u }
                            })
                            .sort(function (u, l) {
                                return l.g - u.g || -1 / 0
                            })
                            .forEach(function (u) {
                                return u.t.revert(t)
                            }),
                        this.data.forEach(function (u) {
                            return !(u instanceof xe) && u.revert && u.revert(t)
                        }),
                        this._r.forEach(function (u) {
                            return u(t, i)
                        }),
                        (this.isReverted = !0)
                } else
                    this.data.forEach(function (u) {
                        return u.kill && u.kill()
                    })
                if ((this.clear(), n))
                    for (var a = nn.length; a--; )
                        nn[a].id === this.id && nn.splice(a, 1)
            }),
            (e.revert = function (t) {
                this.kill(t || {})
            }),
            o
        )
    })(),
    _c = (function () {
        function o(r) {
            ;(this.contexts = []), (this.scope = r)
        }
        var e = o.prototype
        return (
            (e.add = function (t, n, i) {
                er(t) || (t = { matches: t })
                var s = new vu(0, i || this.scope),
                    a = (s.conditions = {}),
                    u,
                    l,
                    c
                he && !s.selector && (s.selector = he.selector),
                    this.contexts.push(s),
                    (n = s.add('onMatch', n)),
                    (s.queries = t)
                for (l in t)
                    l === 'all'
                        ? (c = 1)
                        : ((u = St.matchMedia(t[l])),
                          u &&
                              (nn.indexOf(s) < 0 && nn.push(s),
                              (a[l] = u.matches) && (c = 1),
                              u.addListener
                                  ? u.addListener(Ho)
                                  : u.addEventListener('change', Ho)))
                return c && n(s), this
            }),
            (e.revert = function (t) {
                this.kill(t || {})
            }),
            (e.kill = function (t) {
                this.contexts.forEach(function (n) {
                    return n.kill(t, !0)
                })
            }),
            o
        )
    })(),
    Ji = {
        registerPlugin: function () {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                r[t] = arguments[t]
            r.forEach(function (n) {
                return nu(n)
            })
        },
        timeline: function (e) {
            return new at(e)
        },
        getTweensOf: function (e, r) {
            return ue.getTweensOf(e, r)
        },
        getProperty: function (e, r, t, n) {
            Ae(e) && (e = Et(e)[0])
            var i = en(e || {}).get,
                s = t ? Ha : Ya
            return (
                t === 'native' && (t = ''),
                e &&
                    (r
                        ? s(((vt[r] && vt[r].get) || i)(e, r, t, n))
                        : function (a, u, l) {
                              return s(((vt[a] && vt[a].get) || i)(e, a, u, l))
                          })
            )
        },
        quickSetter: function (e, r, t) {
            if (((e = Et(e)), e.length > 1)) {
                var n = e.map(function (c) {
                        return je.quickSetter(c, r, t)
                    }),
                    i = n.length
                return function (c) {
                    for (var d = i; d--; ) n[d](c)
                }
            }
            e = e[0] || {}
            var s = vt[r],
                a = en(e),
                u = (a.harness && (a.harness.aliases || {})[r]) || r,
                l = s
                    ? function (c) {
                          var d = new s()
                          ;(kn._pt = 0),
                              d.init(e, t ? c + t : c, kn, 0, [e]),
                              d.render(1, d),
                              kn._pt && bs(1, kn)
                      }
                    : a.set(e, u)
            return s
                ? l
                : function (c) {
                      return l(e, u, t ? c + t : c, a, 1)
                  }
        },
        quickTo: function (e, r, t) {
            var n,
                i = je.to(
                    e,
                    un(
                        ((n = {}), (n[r] = '+=0.1'), (n.paused = !0), n),
                        t || {}
                    )
                ),
                s = function (u, l, c) {
                    return i.resetTo(r, u, l, c)
                }
            return (s.tween = i), s
        },
        isTweening: function (e) {
            return ue.getTweensOf(e, !0).length > 0
        },
        defaults: function (e) {
            return (
                e && e.ease && (e.ease = rn(e.ease, In.ease)), Xs(In, e || {})
            )
        },
        config: function (e) {
            return Xs(bt, e || {})
        },
        registerEffect: function (e) {
            var r = e.name,
                t = e.effect,
                n = e.plugins,
                i = e.defaults,
                s = e.extendTimeline
            ;(n || '').split(',').forEach(function (a) {
                return (
                    a &&
                    !vt[a] &&
                    !xt[a] &&
                    Gi(r + ' effect requires ' + a + ' plugin.')
                )
            }),
                (vo[r] = function (a, u, l) {
                    return t(Et(a), Mt(u || {}, i), l)
                }),
                s &&
                    (at.prototype[r] = function (a, u, l) {
                        return this.add(
                            vo[r](a, er(u) ? u : (l = u) && {}, this),
                            l
                        )
                    })
        },
        registerEase: function (e, r) {
            X[e] = rn(r)
        },
        parseEase: function (e, r) {
            return arguments.length ? rn(e, r) : X
        },
        getById: function (e) {
            return ue.getById(e)
        },
        exportRoot: function (e, r) {
            e === void 0 && (e = {})
            var t = new at(e),
                n,
                i
            for (
                t.smoothChildTiming = ut(e.smoothChildTiming),
                    ue.remove(t),
                    t._dp = 0,
                    t._time = t._tTime = ue._time,
                    n = ue._first;
                n;

            )
                (i = n._next),
                    (r ||
                        !(
                            !n._dur &&
                            n instanceof xe &&
                            n.vars.onComplete === n._targets[0]
                        )) &&
                        Ut(t, n, n._start - n._delay),
                    (n = i)
            return Ut(ue, t, 0), t
        },
        context: function (e, r) {
            return e ? new vu(e, r) : he
        },
        matchMedia: function (e) {
            return new _c(e)
        },
        matchMediaRefresh: function () {
            return (
                nn.forEach(function (e) {
                    var r = e.conditions,
                        t,
                        n
                    for (n in r) r[n] && ((r[n] = !1), (t = 1))
                    t && e.revert()
                }) || Ho()
            )
        },
        addEventListener: function (e, r) {
            var t = Bi[e] || (Bi[e] = [])
            ~t.indexOf(r) || t.push(r)
        },
        removeEventListener: function (e, r) {
            var t = Bi[e],
                n = t && t.indexOf(r)
            n >= 0 && t.splice(n, 1)
        },
        utils: {
            wrap: Ul,
            wrapYoyo: Gl,
            distribute: Qa,
            random: Ja,
            snap: Za,
            normalize: Vl,
            getUnit: We,
            clamp: Yl,
            splitColor: iu,
            toArray: Et,
            selector: qo,
            mapRange: tu,
            pipe: jl,
            unitize: Xl,
            interpolate: Kl,
            shuffle: Ka,
        },
        install: Na,
        effects: vo,
        ticker: yt,
        updateRoot: at.updateRoot,
        plugins: vt,
        globalTimeline: ue,
        core: {
            PropTween: ct,
            globals: $a,
            Tween: xe,
            Timeline: at,
            Animation: pi,
            getCache: en,
            _removeLinkedListItem: lo,
            reverting: function () {
                return Ye
            },
            context: function (e) {
                return e && he && (he.data.push(e), (e._ctx = he)), he
            },
            suppressOverwrites: function (e) {
                return (ls = e)
            },
        },
    }
lt('to,from,fromTo,delayedCall,set,killTweensOf', function (o) {
    return (Ji[o] = xe[o])
})
yt.add(at.updateRoot)
kn = Ji.to({}, { duration: 0 })
var mc = function (e, r) {
        for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r; )
            t = t._next
        return t
    },
    vc = function (e, r) {
        var t = e._targets,
            n,
            i,
            s
        for (n in r)
            for (i = t.length; i--; )
                (s = e._ptLookup[i][n]),
                    s &&
                        (s = s.d) &&
                        (s._pt && (s = mc(s, n)),
                        s && s.modifier && s.modifier(r[n], e, t[i], n))
    },
    To = function (e, r) {
        return {
            name: e,
            rawVars: 1,
            init: function (n, i, s) {
                s._onInit = function (a) {
                    var u, l
                    if (
                        (Ae(i) &&
                            ((u = {}),
                            lt(i, function (c) {
                                return (u[c] = 1)
                            }),
                            (i = u)),
                        r)
                    ) {
                        u = {}
                        for (l in i) u[l] = r(i[l])
                        i = u
                    }
                    vc(a, i)
                }
            },
        }
    },
    je =
        Ji.registerPlugin(
            {
                name: 'attr',
                init: function (e, r, t, n, i) {
                    var s, a, u
                    this.tween = t
                    for (s in r)
                        (u = e.getAttribute(s) || ''),
                            (a = this.add(
                                e,
                                'setAttribute',
                                (u || 0) + '',
                                r[s],
                                n,
                                i,
                                0,
                                0,
                                s
                            )),
                            (a.op = s),
                            (a.b = u),
                            this._props.push(s)
                },
                render: function (e, r) {
                    for (var t = r._pt; t; )
                        Ye ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d),
                            (t = t._next)
                },
            },
            {
                name: 'endArray',
                init: function (e, r) {
                    for (var t = r.length; t--; )
                        this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1)
                },
            },
            To('roundProps', Wo),
            To('modifiers'),
            To('snap', Za)
        ) || Ji
xe.version = at.version = je.version = '3.12.2'
za = 1
fs() && $n()
X.Power0
X.Power1
X.Power2
X.Power3
X.Power4
X.Linear
X.Quad
X.Cubic
X.Quart
X.Quint
X.Strong
X.Elastic
X.Back
X.SteppedEase
X.Bounce
X.Sine
X.Expo
X.Circ
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Zs,
    br,
    Mn,
    xs,
    Vr,
    Js,
    Ts,
    yc = function () {
        return typeof window < 'u'
    },
    dr = {},
    Yr = 180 / Math.PI,
    Dn = Math.PI / 180,
    vn = Math.atan2,
    ea = 1e8,
    Ss = /([A-Z])/g,
    wc = /(left|right|width|margin|padding|x)/i,
    bc = /[\s,\(]\S/,
    Gt = {
        autoAlpha: 'opacity,visibility',
        scale: 'scaleX,scaleY',
        alpha: 'opacity',
    },
    jo = function (e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    },
    xc = function (e, r) {
        return r.set(
            r.t,
            r.p,
            e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u,
            r
        )
    },
    Tc = function (e, r) {
        return r.set(
            r.t,
            r.p,
            e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b,
            r
        )
    },
    Sc = function (e, r) {
        var t = r.s + r.c * e
        r.set(r.t, r.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + r.u, r)
    },
    yu = function (e, r) {
        return r.set(r.t, r.p, e ? r.e : r.b, r)
    },
    wu = function (e, r) {
        return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
    },
    Pc = function (e, r, t) {
        return (e.style[r] = t)
    },
    kc = function (e, r, t) {
        return e.style.setProperty(r, t)
    },
    Cc = function (e, r, t) {
        return (e._gsap[r] = t)
    },
    Ec = function (e, r, t) {
        return (e._gsap.scaleX = e._gsap.scaleY = t)
    },
    Oc = function (e, r, t, n, i) {
        var s = e._gsap
        ;(s.scaleX = s.scaleY = t), s.renderTransform(i, s)
    },
    Ac = function (e, r, t, n, i) {
        var s = e._gsap
        ;(s[r] = t), s.renderTransform(i, s)
    },
    le = 'transform',
    qt = le + 'Origin',
    Mc = function o(e, r) {
        var t = this,
            n = this.target,
            i = n.style
        if (e in dr && i) {
            if (((this.tfm = this.tfm || {}), e !== 'transform'))
                (e = Gt[e] || e),
                    ~e.indexOf(',')
                        ? e.split(',').forEach(function (s) {
                              return (t.tfm[s] = sr(n, s))
                          })
                        : (this.tfm[e] = n._gsap.x ? n._gsap[e] : sr(n, e))
            else
                return Gt.transform.split(',').forEach(function (s) {
                    return o.call(t, s, r)
                })
            if (this.props.indexOf(le) >= 0) return
            n._gsap.svg &&
                ((this.svgo = n.getAttribute('data-svg-origin')),
                this.props.push(qt, r, '')),
                (e = le)
        }
        ;(i || r) && this.props.push(e, r, i[e])
    },
    bu = function (e) {
        e.translate &&
            (e.removeProperty('translate'),
            e.removeProperty('scale'),
            e.removeProperty('rotate'))
    },
    Dc = function () {
        var e = this.props,
            r = this.target,
            t = r.style,
            n = r._gsap,
            i,
            s
        for (i = 0; i < e.length; i += 3)
            e[i + 1]
                ? (r[e[i]] = e[i + 2])
                : e[i + 2]
                ? (t[e[i]] = e[i + 2])
                : t.removeProperty(
                      e[i].substr(0, 2) === '--'
                          ? e[i]
                          : e[i].replace(Ss, '-$1').toLowerCase()
                  )
        if (this.tfm) {
            for (s in this.tfm) n[s] = this.tfm[s]
            n.svg &&
                (n.renderTransform(),
                r.setAttribute('data-svg-origin', this.svgo || '')),
                (i = Ts()),
                (!i || !i.isStart) && !t[le] && (bu(t), (n.uncache = 1))
        }
    },
    xu = function (e, r) {
        var t = { target: e, props: [], revert: Dc, save: Mc }
        return (
            e._gsap || je.core.getCache(e),
            r &&
                r.split(',').forEach(function (n) {
                    return t.save(n)
                }),
            t
        )
    },
    Tu,
    Xo = function (e, r) {
        var t = br.createElementNS
            ? br.createElementNS(
                  (r || 'http://www.w3.org/1999/xhtml').replace(
                      /^https/,
                      'http'
                  ),
                  e
              )
            : br.createElement(e)
        return t.style ? t : br.createElement(e)
    },
    Qt = function o(e, r, t) {
        var n = getComputedStyle(e)
        return (
            n[r] ||
            n.getPropertyValue(r.replace(Ss, '-$1').toLowerCase()) ||
            n.getPropertyValue(r) ||
            (!t && o(e, Bn(r) || r, 1)) ||
            ''
        )
    },
    ta = 'O,Moz,ms,Ms,Webkit'.split(','),
    Bn = function (e, r, t) {
        var n = r || Vr,
            i = n.style,
            s = 5
        if (e in i && !t) return e
        for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            s-- && !(ta[s] + e in i);

        );
        return s < 0 ? null : (s === 3 ? 'ms' : s >= 0 ? ta[s] : '') + e
    },
    Vo = function () {
        yc() &&
            window.document &&
            ((Zs = window),
            (br = Zs.document),
            (Mn = br.documentElement),
            (Vr = Xo('div') || { style: {} }),
            Xo('div'),
            (le = Bn(le)),
            (qt = le + 'Origin'),
            (Vr.style.cssText =
                'border-width:0;line-height:0;position:absolute;padding:0'),
            (Tu = !!Bn('perspective')),
            (Ts = je.core.reverting),
            (xs = 1))
    },
    So = function o(e) {
        var r = Xo(
                'svg',
                (this.ownerSVGElement &&
                    this.ownerSVGElement.getAttribute('xmlns')) ||
                    'http://www.w3.org/2000/svg'
            ),
            t = this.parentNode,
            n = this.nextSibling,
            i = this.style.cssText,
            s
        if (
            (Mn.appendChild(r),
            r.appendChild(this),
            (this.style.display = 'block'),
            e)
        )
            try {
                ;(s = this.getBBox()),
                    (this._gsapBBox = this.getBBox),
                    (this.getBBox = o)
            } catch {}
        else this._gsapBBox && (s = this._gsapBBox())
        return (
            t && (n ? t.insertBefore(this, n) : t.appendChild(this)),
            Mn.removeChild(r),
            (this.style.cssText = i),
            s
        )
    },
    ra = function (e, r) {
        for (var t = r.length; t--; )
            if (e.hasAttribute(r[t])) return e.getAttribute(r[t])
    },
    Su = function (e) {
        var r
        try {
            r = e.getBBox()
        } catch {
            r = So.call(e, !0)
        }
        return (
            (r && (r.width || r.height)) ||
                e.getBBox === So ||
                (r = So.call(e, !0)),
            r && !r.width && !r.x && !r.y
                ? {
                      x: +ra(e, ['x', 'cx', 'x1']) || 0,
                      y: +ra(e, ['y', 'cy', 'y1']) || 0,
                      width: 0,
                      height: 0,
                  }
                : r
        )
    },
    Pu = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Su(e))
    },
    gi = function (e, r) {
        if (r) {
            var t = e.style
            r in dr && r !== qt && (r = le),
                t.removeProperty
                    ? ((r.substr(0, 2) === 'ms' ||
                          r.substr(0, 6) === 'webkit') &&
                          (r = '-' + r),
                      t.removeProperty(r.replace(Ss, '-$1').toLowerCase()))
                    : t.removeAttribute(r)
        }
    },
    xr = function (e, r, t, n, i, s) {
        var a = new ct(e._pt, r, t, 0, 1, s ? wu : yu)
        return (e._pt = a), (a.b = n), (a.e = i), e._props.push(t), a
    },
    na = { deg: 1, rad: 1, turn: 1 },
    Rc = { grid: 1, flex: 1 },
    Or = function o(e, r, t, n) {
        var i = parseFloat(t) || 0,
            s = (t + '').trim().substr((i + '').length) || 'px',
            a = Vr.style,
            u = wc.test(r),
            l = e.tagName.toLowerCase() === 'svg',
            c = (l ? 'client' : 'offset') + (u ? 'Width' : 'Height'),
            d = 100,
            h = n === 'px',
            f = n === '%',
            g,
            p,
            m,
            w
        return n === s || !i || na[n] || na[s]
            ? i
            : (s !== 'px' && !h && (i = o(e, r, t, 'px')),
              (w = e.getCTM && Pu(e)),
              (f || s === '%') && (dr[r] || ~r.indexOf('adius'))
                  ? ((g = w ? e.getBBox()[u ? 'width' : 'height'] : e[c]),
                    _e(f ? (i / g) * d : (i / 100) * g))
                  : ((a[u ? 'width' : 'height'] = d + (h ? s : n)),
                    (p =
                        ~r.indexOf('adius') ||
                        (n === 'em' && e.appendChild && !l)
                            ? e
                            : e.parentNode),
                    w && (p = (e.ownerSVGElement || {}).parentNode),
                    (!p || p === br || !p.appendChild) && (p = br.body),
                    (m = p._gsap),
                    m && f && m.width && u && m.time === yt.time && !m.uncache
                        ? _e((i / m.width) * d)
                        : ((f || s === '%') &&
                              !Rc[Qt(p, 'display')] &&
                              (a.position = Qt(e, 'position')),
                          p === e && (a.position = 'static'),
                          p.appendChild(Vr),
                          (g = Vr[c]),
                          p.removeChild(Vr),
                          (a.position = 'absolute'),
                          u &&
                              f &&
                              ((m = en(p)),
                              (m.time = yt.time),
                              (m.width = p[c])),
                          _e(h ? (g * i) / d : g && i ? (d / g) * i : 0))))
    },
    sr = function (e, r, t, n) {
        var i
        return (
            xs || Vo(),
            r in Gt &&
                r !== 'transform' &&
                ((r = Gt[r]), ~r.indexOf(',') && (r = r.split(',')[0])),
            dr[r] && r !== 'transform'
                ? ((i = mi(e, n)),
                  (i =
                      r !== 'transformOrigin'
                          ? i[r]
                          : i.svg
                          ? i.origin
                          : to(Qt(e, qt)) + ' ' + i.zOrigin + 'px'))
                : ((i = e.style[r]),
                  (!i || i === 'auto' || n || ~(i + '').indexOf('calc(')) &&
                      (i =
                          (eo[r] && eo[r](e, r, t)) ||
                          Qt(e, r) ||
                          qa(e, r) ||
                          (r === 'opacity' ? 1 : 0))),
            t && !~(i + '').trim().indexOf(' ') ? Or(e, r, i, t) + t : i
        )
    },
    Lc = function (e, r, t, n) {
        if (!t || t === 'none') {
            var i = Bn(r, e, 1),
                s = i && Qt(e, i, 1)
            s && s !== t
                ? ((r = i), (t = s))
                : r === 'borderColor' && (t = Qt(e, 'borderTopColor'))
        }
        var a = new ct(this._pt, e.style, r, 0, 1, _u),
            u = 0,
            l = 0,
            c,
            d,
            h,
            f,
            g,
            p,
            m,
            w,
            x,
            S,
            v,
            y
        if (
            ((a.b = t),
            (a.e = n),
            (t += ''),
            (n += ''),
            n === 'auto' &&
                ((e.style[r] = n), (n = Qt(e, r) || n), (e.style[r] = t)),
            (c = [t, n]),
            su(c),
            (t = c[0]),
            (n = c[1]),
            (h = t.match(Pn) || []),
            (y = n.match(Pn) || []),
            y.length)
        ) {
            for (; (d = Pn.exec(n)); )
                (m = d[0]),
                    (x = n.substring(u, d.index)),
                    g
                        ? (g = (g + 1) % 5)
                        : (x.substr(-5) === 'rgba(' ||
                              x.substr(-5) === 'hsla(') &&
                          (g = 1),
                    m !== (p = h[l++] || '') &&
                        ((f = parseFloat(p) || 0),
                        (v = p.substr((f + '').length)),
                        m.charAt(1) === '=' && (m = An(f, m) + v),
                        (w = parseFloat(m)),
                        (S = m.substr((w + '').length)),
                        (u = Pn.lastIndex - S.length),
                        S ||
                            ((S = S || bt.units[r] || v),
                            u === n.length && ((n += S), (a.e += S))),
                        v !== S && (f = Or(e, r, p, S) || 0),
                        (a._pt = {
                            _next: a._pt,
                            p: x || l === 1 ? x : ',',
                            s: f,
                            c: w - f,
                            m: (g && g < 4) || r === 'zIndex' ? Math.round : 0,
                        }))
            a.c = u < n.length ? n.substring(u, n.length) : ''
        } else a.r = r === 'display' && n === 'none' ? wu : yu
        return Fa.test(n) && (a.e = 0), (this._pt = a), a
    },
    ia = {
        top: '0%',
        bottom: '100%',
        left: '0%',
        right: '100%',
        center: '50%',
    },
    Fc = function (e) {
        var r = e.split(' '),
            t = r[0],
            n = r[1] || '50%'
        return (
            (t === 'top' || t === 'bottom' || n === 'left' || n === 'right') &&
                ((e = t), (t = n), (n = e)),
            (r[0] = ia[t] || t),
            (r[1] = ia[n] || n),
            r.join(' ')
        )
    },
    Ic = function (e, r) {
        if (r.tween && r.tween._time === r.tween._dur) {
            var t = r.t,
                n = t.style,
                i = r.u,
                s = t._gsap,
                a,
                u,
                l
            if (i === 'all' || i === !0) (n.cssText = ''), (u = 1)
            else
                for (i = i.split(','), l = i.length; --l > -1; )
                    (a = i[l]),
                        dr[a] &&
                            ((u = 1), (a = a === 'transformOrigin' ? qt : le)),
                        gi(t, a)
            u &&
                (gi(t, le),
                s &&
                    (s.svg && t.removeAttribute('transform'),
                    mi(t, 1),
                    (s.uncache = 1),
                    bu(n)))
        }
    },
    eo = {
        clearProps: function (e, r, t, n, i) {
            if (i.data !== 'isFromStart') {
                var s = (e._pt = new ct(e._pt, r, t, 0, 0, Ic))
                return (
                    (s.u = n), (s.pr = -10), (s.tween = i), e._props.push(t), 1
                )
            }
        },
    },
    _i = [1, 0, 0, 1, 0, 0],
    ku = {},
    Cu = function (e) {
        return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e
    },
    oa = function (e) {
        var r = Qt(e, le)
        return Cu(r) ? _i : r.substr(7).match(La).map(_e)
    },
    Ps = function (e, r) {
        var t = e._gsap || en(e),
            n = e.style,
            i = oa(e),
            s,
            a,
            u,
            l
        return t.svg && e.getAttribute('transform')
            ? ((u = e.transform.baseVal.consolidate().matrix),
              (i = [u.a, u.b, u.c, u.d, u.e, u.f]),
              i.join(',') === '1,0,0,1,0,0' ? _i : i)
            : (i === _i &&
                  !e.offsetParent &&
                  e !== Mn &&
                  !t.svg &&
                  ((u = n.display),
                  (n.display = 'block'),
                  (s = e.parentNode),
                  (!s || !e.offsetParent) &&
                      ((l = 1), (a = e.nextElementSibling), Mn.appendChild(e)),
                  (i = oa(e)),
                  u ? (n.display = u) : gi(e, 'display'),
                  l &&
                      (a
                          ? s.insertBefore(e, a)
                          : s
                          ? s.appendChild(e)
                          : Mn.removeChild(e))),
              r && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i)
    },
    Uo = function (e, r, t, n, i, s) {
        var a = e._gsap,
            u = i || Ps(e, !0),
            l = a.xOrigin || 0,
            c = a.yOrigin || 0,
            d = a.xOffset || 0,
            h = a.yOffset || 0,
            f = u[0],
            g = u[1],
            p = u[2],
            m = u[3],
            w = u[4],
            x = u[5],
            S = r.split(' '),
            v = parseFloat(S[0]) || 0,
            y = parseFloat(S[1]) || 0,
            P,
            T,
            C,
            k
        t
            ? u !== _i &&
              (T = f * m - g * p) &&
              ((C = v * (m / T) + y * (-p / T) + (p * x - m * w) / T),
              (k = v * (-g / T) + y * (f / T) - (f * x - g * w) / T),
              (v = C),
              (y = k))
            : ((P = Su(e)),
              (v = P.x + (~S[0].indexOf('%') ? (v / 100) * P.width : v)),
              (y =
                  P.y +
                  (~(S[1] || S[0]).indexOf('%') ? (y / 100) * P.height : y))),
            n || (n !== !1 && a.smooth)
                ? ((w = v - l),
                  (x = y - c),
                  (a.xOffset = d + (w * f + x * p) - w),
                  (a.yOffset = h + (w * g + x * m) - x))
                : (a.xOffset = a.yOffset = 0),
            (a.xOrigin = v),
            (a.yOrigin = y),
            (a.smooth = !!n),
            (a.origin = r),
            (a.originIsAbsolute = !!t),
            (e.style[qt] = '0px 0px'),
            s &&
                (xr(s, a, 'xOrigin', l, v),
                xr(s, a, 'yOrigin', c, y),
                xr(s, a, 'xOffset', d, a.xOffset),
                xr(s, a, 'yOffset', h, a.yOffset)),
            e.setAttribute('data-svg-origin', v + ' ' + y)
    },
    mi = function (e, r) {
        var t = e._gsap || new cu(e)
        if ('x' in t && !r && !t.uncache) return t
        var n = e.style,
            i = t.scaleX < 0,
            s = 'px',
            a = 'deg',
            u = getComputedStyle(e),
            l = Qt(e, qt) || '0',
            c,
            d,
            h,
            f,
            g,
            p,
            m,
            w,
            x,
            S,
            v,
            y,
            P,
            T,
            C,
            k,
            E,
            D,
            O,
            K,
            N,
            $,
            H,
            L,
            Y,
            J,
            _,
            ne,
            Xe,
            Dt,
            ce,
            Me
        return (
            (c = d = h = p = m = w = x = S = v = 0),
            (f = g = 1),
            (t.svg = !!(e.getCTM && Pu(e))),
            u.translate &&
                ((u.translate !== 'none' ||
                    u.scale !== 'none' ||
                    u.rotate !== 'none') &&
                    (n[le] =
                        (u.translate !== 'none'
                            ? 'translate3d(' +
                              (u.translate + ' 0 0')
                                  .split(' ')
                                  .slice(0, 3)
                                  .join(', ') +
                              ') '
                            : '') +
                        (u.rotate !== 'none'
                            ? 'rotate(' + u.rotate + ') '
                            : '') +
                        (u.scale !== 'none'
                            ? 'scale(' + u.scale.split(' ').join(',') + ') '
                            : '') +
                        (u[le] !== 'none' ? u[le] : '')),
                (n.scale = n.rotate = n.translate = 'none')),
            (T = Ps(e, t.svg)),
            t.svg &&
                (t.uncache
                    ? ((Y = e.getBBox()),
                      (l = t.xOrigin - Y.x + 'px ' + (t.yOrigin - Y.y) + 'px'),
                      (L = ''))
                    : (L = !r && e.getAttribute('data-svg-origin')),
                Uo(e, L || l, !!L || t.originIsAbsolute, t.smooth !== !1, T)),
            (y = t.xOrigin || 0),
            (P = t.yOrigin || 0),
            T !== _i &&
                ((D = T[0]),
                (O = T[1]),
                (K = T[2]),
                (N = T[3]),
                (c = $ = T[4]),
                (d = H = T[5]),
                T.length === 6
                    ? ((f = Math.sqrt(D * D + O * O)),
                      (g = Math.sqrt(N * N + K * K)),
                      (p = D || O ? vn(O, D) * Yr : 0),
                      (x = K || N ? vn(K, N) * Yr + p : 0),
                      x && (g *= Math.abs(Math.cos(x * Dn))),
                      t.svg &&
                          ((c -= y - (y * D + P * K)),
                          (d -= P - (y * O + P * N))))
                    : ((Me = T[6]),
                      (Dt = T[7]),
                      (_ = T[8]),
                      (ne = T[9]),
                      (Xe = T[10]),
                      (ce = T[11]),
                      (c = T[12]),
                      (d = T[13]),
                      (h = T[14]),
                      (C = vn(Me, Xe)),
                      (m = C * Yr),
                      C &&
                          ((k = Math.cos(-C)),
                          (E = Math.sin(-C)),
                          (L = $ * k + _ * E),
                          (Y = H * k + ne * E),
                          (J = Me * k + Xe * E),
                          (_ = $ * -E + _ * k),
                          (ne = H * -E + ne * k),
                          (Xe = Me * -E + Xe * k),
                          (ce = Dt * -E + ce * k),
                          ($ = L),
                          (H = Y),
                          (Me = J)),
                      (C = vn(-K, Xe)),
                      (w = C * Yr),
                      C &&
                          ((k = Math.cos(-C)),
                          (E = Math.sin(-C)),
                          (L = D * k - _ * E),
                          (Y = O * k - ne * E),
                          (J = K * k - Xe * E),
                          (ce = N * E + ce * k),
                          (D = L),
                          (O = Y),
                          (K = J)),
                      (C = vn(O, D)),
                      (p = C * Yr),
                      C &&
                          ((k = Math.cos(C)),
                          (E = Math.sin(C)),
                          (L = D * k + O * E),
                          (Y = $ * k + H * E),
                          (O = O * k - D * E),
                          (H = H * k - $ * E),
                          (D = L),
                          ($ = Y)),
                      m &&
                          Math.abs(m) + Math.abs(p) > 359.9 &&
                          ((m = p = 0), (w = 180 - w)),
                      (f = _e(Math.sqrt(D * D + O * O + K * K))),
                      (g = _e(Math.sqrt(H * H + Me * Me))),
                      (C = vn($, H)),
                      (x = Math.abs(C) > 2e-4 ? C * Yr : 0),
                      (v = ce ? 1 / (ce < 0 ? -ce : ce) : 0)),
                t.svg &&
                    ((L = e.getAttribute('transform')),
                    (t.forceCSS =
                        e.setAttribute('transform', '') || !Cu(Qt(e, le))),
                    L && e.setAttribute('transform', L))),
            Math.abs(x) > 90 &&
                Math.abs(x) < 270 &&
                (i
                    ? ((f *= -1),
                      (x += p <= 0 ? 180 : -180),
                      (p += p <= 0 ? 180 : -180))
                    : ((g *= -1), (x += x <= 0 ? 180 : -180))),
            (r = r || t.uncache),
            (t.x =
                c -
                ((t.xPercent =
                    c &&
                    ((!r && t.xPercent) ||
                        (Math.round(e.offsetWidth / 2) === Math.round(-c)
                            ? -50
                            : 0)))
                    ? (e.offsetWidth * t.xPercent) / 100
                    : 0) +
                s),
            (t.y =
                d -
                ((t.yPercent =
                    d &&
                    ((!r && t.yPercent) ||
                        (Math.round(e.offsetHeight / 2) === Math.round(-d)
                            ? -50
                            : 0)))
                    ? (e.offsetHeight * t.yPercent) / 100
                    : 0) +
                s),
            (t.z = h + s),
            (t.scaleX = _e(f)),
            (t.scaleY = _e(g)),
            (t.rotation = _e(p) + a),
            (t.rotationX = _e(m) + a),
            (t.rotationY = _e(w) + a),
            (t.skewX = x + a),
            (t.skewY = S + a),
            (t.transformPerspective = v + s),
            (t.zOrigin = parseFloat(l.split(' ')[2]) || 0) && (n[qt] = to(l)),
            (t.xOffset = t.yOffset = 0),
            (t.force3D = bt.force3D),
            (t.renderTransform = t.svg ? Nc : Tu ? Eu : zc),
            (t.uncache = 0),
            t
        )
    },
    to = function (e) {
        return (e = e.split(' '))[0] + ' ' + e[1]
    },
    Po = function (e, r, t) {
        var n = We(r)
        return _e(parseFloat(r) + parseFloat(Or(e, 'x', t + 'px', n))) + n
    },
    zc = function (e, r) {
        ;(r.z = '0px'),
            (r.rotationY = r.rotationX = '0deg'),
            (r.force3D = 0),
            Eu(e, r)
    },
    qr = '0deg',
    Xn = '0px',
    Wr = ') ',
    Eu = function (e, r) {
        var t = r || this,
            n = t.xPercent,
            i = t.yPercent,
            s = t.x,
            a = t.y,
            u = t.z,
            l = t.rotation,
            c = t.rotationY,
            d = t.rotationX,
            h = t.skewX,
            f = t.skewY,
            g = t.scaleX,
            p = t.scaleY,
            m = t.transformPerspective,
            w = t.force3D,
            x = t.target,
            S = t.zOrigin,
            v = '',
            y = (w === 'auto' && e && e !== 1) || w === !0
        if (S && (d !== qr || c !== qr)) {
            var P = parseFloat(c) * Dn,
                T = Math.sin(P),
                C = Math.cos(P),
                k
            ;(P = parseFloat(d) * Dn),
                (k = Math.cos(P)),
                (s = Po(x, s, T * k * -S)),
                (a = Po(x, a, -Math.sin(P) * -S)),
                (u = Po(x, u, C * k * -S + S))
        }
        m !== Xn && (v += 'perspective(' + m + Wr),
            (n || i) && (v += 'translate(' + n + '%, ' + i + '%) '),
            (y || s !== Xn || a !== Xn || u !== Xn) &&
                (v +=
                    u !== Xn || y
                        ? 'translate3d(' + s + ', ' + a + ', ' + u + ') '
                        : 'translate(' + s + ', ' + a + Wr),
            l !== qr && (v += 'rotate(' + l + Wr),
            c !== qr && (v += 'rotateY(' + c + Wr),
            d !== qr && (v += 'rotateX(' + d + Wr),
            (h !== qr || f !== qr) && (v += 'skew(' + h + ', ' + f + Wr),
            (g !== 1 || p !== 1) && (v += 'scale(' + g + ', ' + p + Wr),
            (x.style[le] = v || 'translate(0, 0)')
    },
    Nc = function (e, r) {
        var t = r || this,
            n = t.xPercent,
            i = t.yPercent,
            s = t.x,
            a = t.y,
            u = t.rotation,
            l = t.skewX,
            c = t.skewY,
            d = t.scaleX,
            h = t.scaleY,
            f = t.target,
            g = t.xOrigin,
            p = t.yOrigin,
            m = t.xOffset,
            w = t.yOffset,
            x = t.forceCSS,
            S = parseFloat(s),
            v = parseFloat(a),
            y,
            P,
            T,
            C,
            k
        ;(u = parseFloat(u)),
            (l = parseFloat(l)),
            (c = parseFloat(c)),
            c && ((c = parseFloat(c)), (l += c), (u += c)),
            u || l
                ? ((u *= Dn),
                  (l *= Dn),
                  (y = Math.cos(u) * d),
                  (P = Math.sin(u) * d),
                  (T = Math.sin(u - l) * -h),
                  (C = Math.cos(u - l) * h),
                  l &&
                      ((c *= Dn),
                      (k = Math.tan(l - c)),
                      (k = Math.sqrt(1 + k * k)),
                      (T *= k),
                      (C *= k),
                      c &&
                          ((k = Math.tan(c)),
                          (k = Math.sqrt(1 + k * k)),
                          (y *= k),
                          (P *= k))),
                  (y = _e(y)),
                  (P = _e(P)),
                  (T = _e(T)),
                  (C = _e(C)))
                : ((y = d), (C = h), (P = T = 0)),
            ((S && !~(s + '').indexOf('px')) ||
                (v && !~(a + '').indexOf('px'))) &&
                ((S = Or(f, 'x', s, 'px')), (v = Or(f, 'y', a, 'px'))),
            (g || p || m || w) &&
                ((S = _e(S + g - (g * y + p * T) + m)),
                (v = _e(v + p - (g * P + p * C) + w))),
            (n || i) &&
                ((k = f.getBBox()),
                (S = _e(S + (n / 100) * k.width)),
                (v = _e(v + (i / 100) * k.height))),
            (k =
                'matrix(' +
                y +
                ',' +
                P +
                ',' +
                T +
                ',' +
                C +
                ',' +
                S +
                ',' +
                v +
                ')'),
            f.setAttribute('transform', k),
            x && (f.style[le] = k)
    },
    $c = function (e, r, t, n, i) {
        var s = 360,
            a = Ae(i),
            u = parseFloat(i) * (a && ~i.indexOf('rad') ? Yr : 1),
            l = u - n,
            c = n + l + 'deg',
            d,
            h
        return (
            a &&
                ((d = i.split('_')[1]),
                d === 'short' &&
                    ((l %= s), l !== l % (s / 2) && (l += l < 0 ? s : -s)),
                d === 'cw' && l < 0
                    ? (l = ((l + s * ea) % s) - ~~(l / s) * s)
                    : d === 'ccw' &&
                      l > 0 &&
                      (l = ((l - s * ea) % s) - ~~(l / s) * s)),
            (e._pt = h = new ct(e._pt, r, t, n, l, xc)),
            (h.e = c),
            (h.u = 'deg'),
            e._props.push(t),
            h
        )
    },
    sa = function (e, r) {
        for (var t in r) e[t] = r[t]
        return e
    },
    Bc = function (e, r, t) {
        var n = sa({}, t._gsap),
            i = 'perspective,force3D,transformOrigin,svgOrigin',
            s = t.style,
            a,
            u,
            l,
            c,
            d,
            h,
            f,
            g
        n.svg
            ? ((l = t.getAttribute('transform')),
              t.setAttribute('transform', ''),
              (s[le] = r),
              (a = mi(t, 1)),
              gi(t, le),
              t.setAttribute('transform', l))
            : ((l = getComputedStyle(t)[le]),
              (s[le] = r),
              (a = mi(t, 1)),
              (s[le] = l))
        for (u in dr)
            (l = n[u]),
                (c = a[u]),
                l !== c &&
                    i.indexOf(u) < 0 &&
                    ((f = We(l)),
                    (g = We(c)),
                    (d = f !== g ? Or(t, u, l, g) : parseFloat(l)),
                    (h = parseFloat(c)),
                    (e._pt = new ct(e._pt, a, u, d, h - d, jo)),
                    (e._pt.u = g || 0),
                    e._props.push(u))
        sa(a, n)
    }
lt('padding,margin,Width,Radius', function (o, e) {
    var r = 'Top',
        t = 'Right',
        n = 'Bottom',
        i = 'Left',
        s = (e < 3 ? [r, t, n, i] : [r + i, r + t, n + t, n + i]).map(function (
            a
        ) {
            return e < 2 ? o + a : 'border' + a + o
        })
    eo[e > 1 ? 'border' + o : o] = function (a, u, l, c, d) {
        var h, f
        if (arguments.length < 4)
            return (
                (h = s.map(function (g) {
                    return sr(a, g, l)
                })),
                (f = h.join(' ')),
                f.split(h[0]).length === 5 ? h[0] : f
            )
        ;(h = (c + '').split(' ')),
            (f = {}),
            s.forEach(function (g, p) {
                return (f[g] = h[p] = h[p] || h[((p - 1) / 2) | 0])
            }),
            a.init(u, f, d)
    }
})
var ks = {
    name: 'css',
    register: Vo,
    targetTest: function (e) {
        return e.style && e.nodeType
    },
    init: function (e, r, t, n, i) {
        var s = this._props,
            a = e.style,
            u = t.vars.startAt,
            l,
            c,
            d,
            h,
            f,
            g,
            p,
            m,
            w,
            x,
            S,
            v,
            y,
            P,
            T,
            C
        xs || Vo(),
            (this.styles = this.styles || xu(e)),
            (C = this.styles.props),
            (this.tween = t)
        for (p in r)
            if (
                p !== 'autoRound' &&
                ((c = r[p]), !(vt[p] && fu(p, r, t, n, e, i)))
            ) {
                if (
                    ((f = typeof c),
                    (g = eo[p]),
                    f === 'function' &&
                        ((c = c.call(t, n, e, i)), (f = typeof c)),
                    f === 'string' && ~c.indexOf('random(') && (c = hi(c)),
                    g)
                )
                    g(this, e, p, c, t) && (T = 1)
                else if (p.substr(0, 2) === '--')
                    (l = (getComputedStyle(e).getPropertyValue(p) + '').trim()),
                        (c += ''),
                        (kr.lastIndex = 0),
                        kr.test(l) || ((m = We(l)), (w = We(c))),
                        w ? m !== w && (l = Or(e, p, l, w) + w) : m && (c += m),
                        this.add(a, 'setProperty', l, c, n, i, 0, 0, p),
                        s.push(p),
                        C.push(p, 0, a[p])
                else if (f !== 'undefined') {
                    if (
                        (u && p in u
                            ? ((l =
                                  typeof u[p] == 'function'
                                      ? u[p].call(t, n, e, i)
                                      : u[p]),
                              Ae(l) && ~l.indexOf('random(') && (l = hi(l)),
                              We(l + '') ||
                                  (l += bt.units[p] || We(sr(e, p)) || ''),
                              (l + '').charAt(1) === '=' && (l = sr(e, p)))
                            : (l = sr(e, p)),
                        (h = parseFloat(l)),
                        (x =
                            f === 'string' &&
                            c.charAt(1) === '=' &&
                            c.substr(0, 2)),
                        x && (c = c.substr(2)),
                        (d = parseFloat(c)),
                        p in Gt &&
                            (p === 'autoAlpha' &&
                                (h === 1 &&
                                    sr(e, 'visibility') === 'hidden' &&
                                    d &&
                                    (h = 0),
                                C.push('visibility', 0, a.visibility),
                                xr(
                                    this,
                                    a,
                                    'visibility',
                                    h ? 'inherit' : 'hidden',
                                    d ? 'inherit' : 'hidden',
                                    !d
                                )),
                            p !== 'scale' &&
                                p !== 'transform' &&
                                ((p = Gt[p]),
                                ~p.indexOf(',') && (p = p.split(',')[0]))),
                        (S = p in dr),
                        S)
                    ) {
                        if (
                            (this.styles.save(p),
                            v ||
                                ((y = e._gsap),
                                (y.renderTransform && !r.parseTransform) ||
                                    mi(e, r.parseTransform),
                                (P = r.smoothOrigin !== !1 && y.smooth),
                                (v = this._pt =
                                    new ct(
                                        this._pt,
                                        a,
                                        le,
                                        0,
                                        1,
                                        y.renderTransform,
                                        y,
                                        0,
                                        -1
                                    )),
                                (v.dep = 1)),
                            p === 'scale')
                        )
                            (this._pt = new ct(
                                this._pt,
                                y,
                                'scaleY',
                                y.scaleY,
                                (x ? An(y.scaleY, x + d) : d) - y.scaleY || 0,
                                jo
                            )),
                                (this._pt.u = 0),
                                s.push('scaleY', p),
                                (p += 'X')
                        else if (p === 'transformOrigin') {
                            C.push(qt, 0, a[qt]),
                                (c = Fc(c)),
                                y.svg
                                    ? Uo(e, c, 0, P, 0, this)
                                    : ((w = parseFloat(c.split(' ')[2]) || 0),
                                      w !== y.zOrigin &&
                                          xr(this, y, 'zOrigin', y.zOrigin, w),
                                      xr(this, a, p, to(l), to(c)))
                            continue
                        } else if (p === 'svgOrigin') {
                            Uo(e, c, 1, P, 0, this)
                            continue
                        } else if (p in ku) {
                            $c(this, y, p, h, x ? An(h, x + c) : c)
                            continue
                        } else if (p === 'smoothOrigin') {
                            xr(this, y, 'smooth', y.smooth, c)
                            continue
                        } else if (p === 'force3D') {
                            y[p] = c
                            continue
                        } else if (p === 'transform') {
                            Bc(this, c, e)
                            continue
                        }
                    } else p in a || (p = Bn(p) || p)
                    if (
                        S ||
                        ((d || d === 0) &&
                            (h || h === 0) &&
                            !bc.test(c) &&
                            p in a)
                    )
                        (m = (l + '').substr((h + '').length)),
                            d || (d = 0),
                            (w = We(c) || (p in bt.units ? bt.units[p] : m)),
                            m !== w && (h = Or(e, p, l, w)),
                            (this._pt = new ct(
                                this._pt,
                                S ? y : a,
                                p,
                                h,
                                (x ? An(h, x + d) : d) - h,
                                !S &&
                                (w === 'px' || p === 'zIndex') &&
                                r.autoRound !== !1
                                    ? Sc
                                    : jo
                            )),
                            (this._pt.u = w || 0),
                            m !== w &&
                                w !== '%' &&
                                ((this._pt.b = l), (this._pt.r = Tc))
                    else if (p in a) Lc.call(this, e, p, l, x ? x + c : c)
                    else if (p in e)
                        this.add(e, p, l || e[p], x ? x + c : c, n, i)
                    else if (p !== 'parseTransform') {
                        ds(p, c)
                        continue
                    }
                    S ||
                        (p in a ? C.push(p, 0, a[p]) : C.push(p, 1, l || e[p])),
                        s.push(p)
                }
            }
        T && mu(this)
    },
    render: function (e, r) {
        if (r.tween._time || !Ts())
            for (var t = r._pt; t; ) t.r(e, t.d), (t = t._next)
        else r.styles.revert()
    },
    get: sr,
    aliases: Gt,
    getSetter: function (e, r, t) {
        var n = Gt[r]
        return (
            n && n.indexOf(',') < 0 && (r = n),
            r in dr && r !== qt && (e._gsap.x || sr(e, 'x'))
                ? t && Js === t
                    ? r === 'scale'
                        ? Ec
                        : Cc
                    : (Js = t || {}) && (r === 'scale' ? Oc : Ac)
                : e.style && !cs(e.style[r])
                ? Pc
                : ~r.indexOf('-')
                ? kc
                : ws(e, r)
        )
    },
    core: { _removeProperty: gi, _getMatrix: Ps },
}
je.utils.checkPrefix = Bn
je.core.getStyleSaver = xu
;(function (o, e, r, t) {
    var n = lt(o + ',' + e + ',' + r, function (i) {
        dr[i] = 1
    })
    lt(e, function (i) {
        ;(bt.units[i] = 'deg'), (ku[i] = 1)
    }),
        (Gt[n[13]] = o + ',' + e),
        lt(t, function (i) {
            var s = i.split(':')
            Gt[s[1]] = n[s[0]]
        })
})(
    'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
    'rotation,rotationX,rotationY,skewX,skewY',
    'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
    '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
)
lt(
    'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
    function (o) {
        bt.units[o] = 'px'
    }
)
je.registerPlugin(ks)
var Pe = je.registerPlugin(ks) || je
Pe.core.Tween
const qc = () => {
        const o = document.querySelectorAll('.magnetic')
        let e, r, t, n, i
        const s = (a, u) => {
            ;(r = a.querySelector('.btn-text-m')),
                (e = a.getBoundingClientRect()),
                (n = a.getAttribute('data-strength')),
                (i = a.getAttribute('data-strength-text'))
            const l = Pe.context(() => {
                window.innerWidth > 540 &&
                    (Pe.to(a, 1.5, {
                        x: ((u.clientX - e.left) / a.offsetWidth - 0.5) * +n,
                        y: ((u.clientY - e.top) / a.offsetHeight - 0.5) * +n,
                        rotate: '0.001deg',
                        ease: 'power4.out',
                    }),
                    r &&
                        Pe.to(r, 1.5, {
                            x:
                                ((u.clientX - e.left) / a.offsetWidth - 0.5) *
                                +i,
                            y:
                                ((u.clientY - e.top) / a.offsetHeight - 0.5) *
                                +i,
                            ease: 'power4.out',
                        }))
            })
            return () => l.revert()
        }
        o.forEach((a) => {
            a.addEventListener('mouseenter', (u) => {
                ;(t = a.querySelector('.btn-fill')), s(a, u)
                const l = Pe.context(() => {
                    var c
                    window.innerWidth > 540 &&
                        t &&
                        Pe.to(t, 0.6, {
                            startAt: { y: '76%' },
                            y: '0%',
                            ease: 'power2.inout',
                        }),
                        (c = u.target) != null &&
                            c.closest('.works-btn') &&
                            window.innerWidth > 540 &&
                            Pe.to('.btn-c', 0.6, {
                                color: '#fff',
                                ease: 'power4.out',
                            })
                })
                return () => l.revert()
            })
        }),
            o.forEach((a) => {
                a.addEventListener('mousemove', (u) => {
                    s(a, u)
                })
            }),
            o.forEach((a) => {
                a.addEventListener('mouseleave', () => {
                    r = a.querySelector('.btn-text-m')
                    let u = a.querySelector('.btn-fill'),
                        l = a.querySelector('.btn-c')
                    const c = Pe.context(
                        () => (
                            Pe.to(a, 1.5, { x: 0, y: 0, ease: 'elastic.out' }),
                            r &&
                                Pe.to(r, 1.5, {
                                    x: 0,
                                    y: 0,
                                    ease: 'elastic.out',
                                }),
                            u &&
                                Pe.to(u, 0.6, {
                                    y: '-76%',
                                    ease: 'power2.inout',
                                }),
                            window.innerWidth > 540 &&
                                l &&
                                Pe.to(l, 0.6, {
                                    color: '#1C1D20',
                                    ease: 'power4.out',
                                }),
                            () => c.revert()
                        )
                    )
                })
            })
    },
    Wc = () => {
        window.addEventListener('scroll', () => {
            window.scrollY > window.innerHeight / 2
                ? Pe.to('.back-top', 0.2, {
                      opacity: 1,
                      scale: 1,
                      ease: 'elastic.out',
                  })
                : Pe.to('.back-top', 0.2, {
                      opacity: 0,
                      scale: 0.8,
                      ease: 'expo.out',
                  })
        })
        const o = document.querySelector('.back-top')
        o == null ||
            o.addEventListener('click', () => {
                scrollTo(0, 0)
            })
    },
    Yc = () => {
        Wc()
    },
    Hc = (o) => {
        const e = document.querySelector('.menu-slide')
        o.classList.toggle('active-hamburger'),
            e == null || e.classList.toggle('active')
    },
    jc = () => {
        const o = document.querySelector('.hamburger-button-wrapper'),
            e = document.querySelector('.blur-shape'),
            r = document.querySelector('.mobile-menu')
        window.addEventListener('scroll', () => {
            window.scrollY > 80
                ? o == null || o.classList.add('show-hamburger-scroll')
                : o == null || o.classList.remove('show-hamburger-scroll')
        })
        const t = () => {
            Hc(o), e == null || e.classList.toggle('active-blur-shape')
        }
        o == null || o.addEventListener('click', t),
            r == null || r.addEventListener('click', t),
            e == null || e.addEventListener('click', t)
    },
    Xc = () => {
        jc()
    }
function aa(o, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r]
        ;(t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            'value' in t && (t.writable = !0),
            Object.defineProperty(o, t.key, t)
    }
}
function Cs(o, e, r) {
    return e && aa(o.prototype, e), r && aa(o, r), o
}
function Ur() {
    return (Ur =
        Object.assign ||
        function (o) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e]
                for (var t in r)
                    Object.prototype.hasOwnProperty.call(r, t) && (o[t] = r[t])
            }
            return o
        }).apply(this, arguments)
}
function ho(o, e) {
    ;(o.prototype = Object.create(e.prototype)),
        (o.prototype.constructor = o),
        (o.__proto__ = e)
}
function Ou(o) {
    return (Ou = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(o)
}
function Es(o, e) {
    return (Es =
        Object.setPrototypeOf ||
        function (r, t) {
            return (r.__proto__ = t), r
        })(o, e)
}
function Au(o, e, r) {
    return (Au = (function () {
        if (
            typeof Reflect > 'u' ||
            !Reflect.construct ||
            Reflect.construct.sham
        )
            return !1
        if (typeof Proxy == 'function') return !0
        try {
            return (
                Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                ),
                !0
            )
        } catch {
            return !1
        }
    })()
        ? Reflect.construct
        : function (t, n, i) {
              var s = [null]
              s.push.apply(s, n)
              var a = new (Function.bind.apply(t, s))()
              return i && Es(a, i.prototype), a
          }).apply(null, arguments)
}
function Mu(o) {
    var e = typeof Map == 'function' ? new Map() : void 0
    return (Mu = function (r) {
        if (
            r === null ||
            Function.toString.call(r).indexOf('[native code]') === -1
        )
            return r
        if (typeof r != 'function')
            throw new TypeError(
                'Super expression must either be null or a function'
            )
        if (e !== void 0) {
            if (e.has(r)) return e.get(r)
            e.set(r, t)
        }
        function t() {
            return Au(r, arguments, Ou(this).constructor)
        }
        return (
            (t.prototype = Object.create(r.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                },
            })),
            Es(t, r)
        )
    })(o)
}
function xn(o, e) {
    try {
        var r = o()
    } catch (t) {
        return e(t)
    }
    return r && r.then ? r.then(void 0, e) : r
}
typeof Symbol < 'u' &&
    (Symbol.iterator || (Symbol.iterator = Symbol('Symbol.iterator'))),
    typeof Symbol < 'u' &&
        (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol('Symbol.asyncIterator')))
var yr,
    Vc = '2.9.7',
    Uc = function () {}
;(function (o) {
    ;(o[(o.off = 0)] = 'off'),
        (o[(o.error = 1)] = 'error'),
        (o[(o.warning = 2)] = 'warning'),
        (o[(o.info = 3)] = 'info'),
        (o[(o.debug = 4)] = 'debug')
})(yr || (yr = {}))
var ua = yr.off,
    Gr = (function () {
        function o(r) {
            this.t = r
        }
        ;(o.getLevel = function () {
            return ua
        }),
            (o.setLevel = function (r) {
                return (ua = yr[r])
            })
        var e = o.prototype
        return (
            (e.error = function () {
                for (
                    var r = arguments.length, t = new Array(r), n = 0;
                    n < r;
                    n++
                )
                    t[n] = arguments[n]
                this.i(console.error, yr.error, t)
            }),
            (e.warn = function () {
                for (
                    var r = arguments.length, t = new Array(r), n = 0;
                    n < r;
                    n++
                )
                    t[n] = arguments[n]
                this.i(console.warn, yr.warning, t)
            }),
            (e.info = function () {
                for (
                    var r = arguments.length, t = new Array(r), n = 0;
                    n < r;
                    n++
                )
                    t[n] = arguments[n]
                this.i(console.info, yr.info, t)
            }),
            (e.debug = function () {
                for (
                    var r = arguments.length, t = new Array(r), n = 0;
                    n < r;
                    n++
                )
                    t[n] = arguments[n]
                this.i(console.log, yr.debug, t)
            }),
            (e.i = function (r, t, n) {
                t <= o.getLevel() &&
                    r.apply(console, ['[' + this.t + '] '].concat(n))
            }),
            o
        )
    })(),
    Hr = Ms,
    Gc = Ru,
    Kc = Os,
    Qc = Lu,
    Zc = Fu,
    Du = '/',
    Jc = new RegExp(
        [
            '(\\\\.)',
            '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?',
        ].join('|'),
        'g'
    )
function Os(o, e) {
    for (
        var r,
            t = [],
            n = 0,
            i = 0,
            s = '',
            a = (e && e.delimiter) || Du,
            u = (e && e.whitelist) || void 0,
            l = !1;
        (r = Jc.exec(o)) !== null;

    ) {
        var c = r[0],
            d = r[1],
            h = r.index
        if (((s += o.slice(i, h)), (i = h + c.length), d)) (s += d[1]), (l = !0)
        else {
            var f = '',
                g = r[2],
                p = r[3],
                m = r[4],
                w = r[5]
            if (!l && s.length) {
                var x = s.length - 1,
                    S = s[x]
                ;(!u || u.indexOf(S) > -1) && ((f = S), (s = s.slice(0, x)))
            }
            s && (t.push(s), (s = ''), (l = !1))
            var v = p || m,
                y = f || a
            t.push({
                name: g || n++,
                prefix: f,
                delimiter: y,
                optional: w === '?' || w === '*',
                repeat: w === '+' || w === '*',
                pattern: v ? ef(v) : '[^' + ir(y === a ? y : y + a) + ']+?',
            })
        }
    }
    return (s || i < o.length) && t.push(s + o.substr(i)), t
}
function Ru(o, e) {
    return function (r, t) {
        var n = o.exec(r)
        if (!n) return !1
        for (
            var i = n[0],
                s = n.index,
                a = {},
                u = (t && t.decode) || decodeURIComponent,
                l = 1;
            l < n.length;
            l++
        )
            if (n[l] !== void 0) {
                var c = e[l - 1]
                a[c.name] = c.repeat
                    ? n[l].split(c.delimiter).map(function (d) {
                          return u(d, c)
                      })
                    : u(n[l], c)
            }
        return { path: i, index: s, params: a }
    }
}
function Lu(o, e) {
    for (var r = new Array(o.length), t = 0; t < o.length; t++)
        typeof o[t] == 'object' &&
            (r[t] = new RegExp('^(?:' + o[t].pattern + ')$', As(e)))
    return function (n, i) {
        for (
            var s = '',
                a = (i && i.encode) || encodeURIComponent,
                u = !i || i.validate !== !1,
                l = 0;
            l < o.length;
            l++
        ) {
            var c = o[l]
            if (typeof c != 'string') {
                var d,
                    h = n ? n[c.name] : void 0
                if (Array.isArray(h)) {
                    if (!c.repeat)
                        throw new TypeError(
                            'Expected "' +
                                c.name +
                                '" to not repeat, but got array'
                        )
                    if (h.length === 0) {
                        if (c.optional) continue
                        throw new TypeError(
                            'Expected "' + c.name + '" to not be empty'
                        )
                    }
                    for (var f = 0; f < h.length; f++) {
                        if (((d = a(h[f], c)), u && !r[l].test(d)))
                            throw new TypeError(
                                'Expected all "' +
                                    c.name +
                                    '" to match "' +
                                    c.pattern +
                                    '"'
                            )
                        s += (f === 0 ? c.prefix : c.delimiter) + d
                    }
                } else if (
                    typeof h != 'string' &&
                    typeof h != 'number' &&
                    typeof h != 'boolean'
                ) {
                    if (!c.optional)
                        throw new TypeError(
                            'Expected "' +
                                c.name +
                                '" to be ' +
                                (c.repeat ? 'an array' : 'a string')
                        )
                } else {
                    if (((d = a(String(h), c)), u && !r[l].test(d)))
                        throw new TypeError(
                            'Expected "' +
                                c.name +
                                '" to match "' +
                                c.pattern +
                                '", but got "' +
                                d +
                                '"'
                        )
                    s += c.prefix + d
                }
            } else s += c
        }
        return s
    }
}
function ir(o) {
    return o.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}
function ef(o) {
    return o.replace(/([=!:$/()])/g, '\\$1')
}
function As(o) {
    return o && o.sensitive ? '' : 'i'
}
function Fu(o, e, r) {
    for (
        var t = (r = r || {}).strict,
            n = r.start !== !1,
            i = r.end !== !1,
            s = r.delimiter || Du,
            a = []
                .concat(r.endsWith || [])
                .map(ir)
                .concat('$')
                .join('|'),
            u = n ? '^' : '',
            l = 0;
        l < o.length;
        l++
    ) {
        var c = o[l]
        if (typeof c == 'string') u += ir(c)
        else {
            var d = c.repeat
                ? '(?:' +
                  c.pattern +
                  ')(?:' +
                  ir(c.delimiter) +
                  '(?:' +
                  c.pattern +
                  '))*'
                : c.pattern
            e && e.push(c),
                (u += c.optional
                    ? c.prefix
                        ? '(?:' + ir(c.prefix) + '(' + d + '))?'
                        : '(' + d + ')?'
                    : ir(c.prefix) + '(' + d + ')')
        }
    }
    if (i)
        t || (u += '(?:' + ir(s) + ')?'),
            (u += a === '$' ? '$' : '(?=' + a + ')')
    else {
        var h = o[o.length - 1],
            f = typeof h == 'string' ? h[h.length - 1] === s : h === void 0
        t || (u += '(?:' + ir(s) + '(?=' + a + '))?'),
            f || (u += '(?=' + ir(s) + '|' + a + ')')
    }
    return new RegExp(u, As(r))
}
function Ms(o, e, r) {
    return o instanceof RegExp
        ? (function (t, n) {
              if (!n) return t
              var i = t.source.match(/\((?!\?)/g)
              if (i)
                  for (var s = 0; s < i.length; s++)
                      n.push({
                          name: s,
                          prefix: null,
                          delimiter: null,
                          optional: !1,
                          repeat: !1,
                          pattern: null,
                      })
              return t
          })(o, e)
        : Array.isArray(o)
        ? (function (t, n, i) {
              for (var s = [], a = 0; a < t.length; a++)
                  s.push(Ms(t[a], n, i).source)
              return new RegExp('(?:' + s.join('|') + ')', As(i))
          })(o, e, r)
        : (function (t, n, i) {
              return Fu(Os(t, i), n, i)
          })(o, e, r)
}
;(Hr.match = function (o, e) {
    var r = []
    return Ru(Ms(o, r, e), r)
}),
    (Hr.regexpToFunction = Gc),
    (Hr.parse = Kc),
    (Hr.compile = function (o, e) {
        return Lu(Os(o, e), e)
    }),
    (Hr.tokensToFunction = Qc),
    (Hr.tokensToRegExp = Zc)
var Zt = {
        container: 'container',
        history: 'history',
        namespace: 'namespace',
        prefix: 'data-barba',
        prevent: 'prevent',
        wrapper: 'wrapper',
    },
    Kr = new ((function () {
        function o() {
            ;(this.o = Zt), (this.u = new DOMParser())
        }
        var e = o.prototype
        return (
            (e.toString = function (r) {
                return r.outerHTML
            }),
            (e.toDocument = function (r) {
                return this.u.parseFromString(r, 'text/html')
            }),
            (e.toElement = function (r) {
                var t = document.createElement('div')
                return (t.innerHTML = r), t
            }),
            (e.getHtml = function (r) {
                return (
                    r === void 0 && (r = document),
                    this.toString(r.documentElement)
                )
            }),
            (e.getWrapper = function (r) {
                return (
                    r === void 0 && (r = document),
                    r.querySelector(
                        '[' + this.o.prefix + '="' + this.o.wrapper + '"]'
                    )
                )
            }),
            (e.getContainer = function (r) {
                return (
                    r === void 0 && (r = document),
                    r.querySelector(
                        '[' + this.o.prefix + '="' + this.o.container + '"]'
                    )
                )
            }),
            (e.removeContainer = function (r) {
                document.body.contains(r) && r.parentNode.removeChild(r)
            }),
            (e.addContainer = function (r, t) {
                var n = this.getContainer()
                n ? this.s(r, n) : t.appendChild(r)
            }),
            (e.getNamespace = function (r) {
                r === void 0 && (r = document)
                var t = r.querySelector(
                    '[' + this.o.prefix + '-' + this.o.namespace + ']'
                )
                return t
                    ? t.getAttribute(this.o.prefix + '-' + this.o.namespace)
                    : null
            }),
            (e.getHref = function (r) {
                if (r.tagName && r.tagName.toLowerCase() === 'a') {
                    if (typeof r.href == 'string') return r.href
                    var t =
                        r.getAttribute('href') || r.getAttribute('xlink:href')
                    if (t) return this.resolveUrl(t.baseVal || t)
                }
                return null
            }),
            (e.resolveUrl = function () {
                for (
                    var r = arguments.length, t = new Array(r), n = 0;
                    n < r;
                    n++
                )
                    t[n] = arguments[n]
                var i = t.length
                if (i === 0)
                    throw new Error(
                        'resolveUrl requires at least one argument; got none.'
                    )
                var s = document.createElement('base')
                if (((s.href = arguments[0]), i === 1)) return s.href
                var a = document.getElementsByTagName('head')[0]
                a.insertBefore(s, a.firstChild)
                for (var u, l = document.createElement('a'), c = 1; c < i; c++)
                    (l.href = arguments[c]), (s.href = u = l.href)
                return a.removeChild(s), u
            }),
            (e.s = function (r, t) {
                t.parentNode.insertBefore(r, t.nextSibling)
            }),
            o
        )
    })())(),
    Iu = new ((function () {
        function o() {
            ;(this.h = []), (this.v = -1)
        }
        var e = o.prototype
        return (
            (e.init = function (r, t) {
                this.l = 'barba'
                var n = {
                    ns: t,
                    scroll: { x: window.scrollX, y: window.scrollY },
                    url: r,
                }
                this.h.push(n), (this.v = 0)
                var i = { from: this.l, index: 0, states: [].concat(this.h) }
                window.history && window.history.replaceState(i, '', r)
            }),
            (e.change = function (r, t, n) {
                if (n && n.state) {
                    var i = n.state,
                        s = i.index
                    ;(t = this.m(this.v - s)),
                        this.replace(i.states),
                        (this.v = s)
                } else this.add(r, t)
                return t
            }),
            (e.add = function (r, t) {
                var n = this.size,
                    i = this.p(t),
                    s = {
                        ns: 'tmp',
                        scroll: { x: window.scrollX, y: window.scrollY },
                        url: r,
                    }
                this.h.push(s), (this.v = n)
                var a = { from: this.l, index: n, states: [].concat(this.h) }
                switch (i) {
                    case 'push':
                        window.history && window.history.pushState(a, '', r)
                        break
                    case 'replace':
                        window.history && window.history.replaceState(a, '', r)
                }
            }),
            (e.update = function (r, t) {
                var n = t || this.v,
                    i = Ur({}, this.get(n), {}, r)
                this.set(n, i)
            }),
            (e.remove = function (r) {
                r ? this.h.splice(r, 1) : this.h.pop(), this.v--
            }),
            (e.clear = function () {
                ;(this.h = []), (this.v = -1)
            }),
            (e.replace = function (r) {
                this.h = r
            }),
            (e.get = function (r) {
                return this.h[r]
            }),
            (e.set = function (r, t) {
                return (this.h[r] = t)
            }),
            (e.p = function (r) {
                var t = 'push',
                    n = r,
                    i = Zt.prefix + '-' + Zt.history
                return (
                    n.hasAttribute &&
                        n.hasAttribute(i) &&
                        (t = n.getAttribute(i)),
                    t
                )
            }),
            (e.m = function (r) {
                return Math.abs(r) > 1
                    ? r > 0
                        ? 'forward'
                        : 'back'
                    : r === 0
                    ? 'popstate'
                    : r > 0
                    ? 'back'
                    : 'forward'
            }),
            Cs(o, [
                {
                    key: 'current',
                    get: function () {
                        return this.h[this.v]
                    },
                },
                {
                    key: 'state',
                    get: function () {
                        return this.h[this.h.length - 1]
                    },
                },
                {
                    key: 'previous',
                    get: function () {
                        return this.v < 1 ? null : this.h[this.v - 1]
                    },
                },
                {
                    key: 'size',
                    get: function () {
                        return this.h.length
                    },
                },
            ]),
            o
        )
    })())(),
    ro = function (o, e) {
        try {
            var r = (function () {
                if (!e.next.html)
                    return Promise.resolve(o).then(function (t) {
                        var n = e.next
                        if (t) {
                            var i = Kr.toElement(t)
                            ;(n.namespace = Kr.getNamespace(i)),
                                (n.container = Kr.getContainer(i)),
                                (n.html = t),
                                Iu.update({ ns: n.namespace })
                            var s = Kr.toDocument(t)
                            document.title = s.title
                        }
                    })
            })()
            return Promise.resolve(
                r && r.then ? r.then(function () {}) : void 0
            )
        } catch (t) {
            return Promise.reject(t)
        }
    },
    zu = Hr,
    tf = {
        __proto__: null,
        update: ro,
        nextTick: function () {
            return new Promise(function (o) {
                window.requestAnimationFrame(o)
            })
        },
        pathToRegexp: zu,
    },
    Nu = function () {
        return window.location.origin
    },
    vi = function (o) {
        return o === void 0 && (o = window.location.href), no(o).port
    },
    no = function (o) {
        var e,
            r = o.match(/:\d+/)
        if (r === null)
            /^http/.test(o) && (e = 80), /^https/.test(o) && (e = 443)
        else {
            var t = r[0].substring(1)
            e = parseInt(t, 10)
        }
        var n,
            i = o.replace(Nu(), ''),
            s = {},
            a = i.indexOf('#')
        a >= 0 && ((n = i.slice(a + 1)), (i = i.slice(0, a)))
        var u = i.indexOf('?')
        return (
            u >= 0 && ((s = $u(i.slice(u + 1))), (i = i.slice(0, u))),
            { hash: n, path: i, port: e, query: s }
        )
    },
    $u = function (o) {
        return o.split('&').reduce(function (e, r) {
            var t = r.split('=')
            return (e[t[0]] = t[1]), e
        }, {})
    },
    Go = function (o) {
        return (
            o === void 0 && (o = window.location.href),
            o.replace(/(\/#.*|\/|#.*)$/, '')
        )
    },
    rf = {
        __proto__: null,
        getHref: function () {
            return window.location.href
        },
        getOrigin: Nu,
        getPort: vi,
        getPath: function (o) {
            return o === void 0 && (o = window.location.href), no(o).path
        },
        parse: no,
        parseQuery: $u,
        clean: Go,
    }
function nf(o, e, r) {
    return (
        e === void 0 && (e = 2e3),
        new Promise(function (t, n) {
            var i = new XMLHttpRequest()
            ;(i.onreadystatechange = function () {
                if (i.readyState === XMLHttpRequest.DONE) {
                    if (i.status === 200) t(i.responseText)
                    else if (i.status) {
                        var s = { status: i.status, statusText: i.statusText }
                        r(o, s), n(s)
                    }
                }
            }),
                (i.ontimeout = function () {
                    var s = new Error('Timeout error [' + e + ']')
                    r(o, s), n(s)
                }),
                (i.onerror = function () {
                    var s = new Error('Fetch error')
                    r(o, s), n(s)
                }),
                i.open('GET', o),
                (i.timeout = e),
                i.setRequestHeader(
                    'Accept',
                    'text/html,application/xhtml+xml,application/xml'
                ),
                i.setRequestHeader('x-barba', 'yes'),
                i.send()
        })
    )
}
var of = function (o) {
    return (
        !!o &&
        (typeof o == 'object' || typeof o == 'function') &&
        typeof o.then == 'function'
    )
}
function Cn(o, e) {
    return (
        e === void 0 && (e = {}),
        function () {
            for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
                t[n] = arguments[n]
            var i = !1,
                s = new Promise(function (a, u) {
                    e.async = function () {
                        return (
                            (i = !0),
                            function (c, d) {
                                c ? u(c) : a(d)
                            }
                        )
                    }
                    var l = o.apply(e, t)
                    i || (of(l) ? l.then(a, u) : a(l))
                })
            return s
        }
    )
}
var vr = new ((function (o) {
        function e() {
            var t
            return (
                ((t = o.call(this) || this).logger = new Gr('@barba/core')),
                (t.all = [
                    'ready',
                    'page',
                    'reset',
                    'currentAdded',
                    'currentRemoved',
                    'nextAdded',
                    'nextRemoved',
                    'beforeOnce',
                    'once',
                    'afterOnce',
                    'before',
                    'beforeLeave',
                    'leave',
                    'afterLeave',
                    'beforeEnter',
                    'enter',
                    'afterEnter',
                    'after',
                ]),
                (t.registered = new Map()),
                t.init(),
                t
            )
        }
        ho(e, o)
        var r = e.prototype
        return (
            (r.init = function () {
                var t = this
                this.registered.clear(),
                    this.all.forEach(function (n) {
                        t[n] ||
                            (t[n] = function (i, s) {
                                t.registered.has(n) ||
                                    t.registered.set(n, new Set()),
                                    t.registered
                                        .get(n)
                                        .add({ ctx: s || {}, fn: i })
                            })
                    })
            }),
            (r.do = function (t) {
                for (
                    var n = this,
                        i = arguments.length,
                        s = new Array(i > 1 ? i - 1 : 0),
                        a = 1;
                    a < i;
                    a++
                )
                    s[a - 1] = arguments[a]
                if (this.registered.has(t)) {
                    var u = Promise.resolve()
                    return (
                        this.registered.get(t).forEach(function (l) {
                            u = u.then(function () {
                                return Cn(l.fn, l.ctx).apply(void 0, s)
                            })
                        }),
                        u.catch(function (l) {
                            n.logger.debug('Hook error [' + t + ']'),
                                n.logger.error(l)
                        })
                    )
                }
                return Promise.resolve()
            }),
            (r.clear = function () {
                var t = this
                this.all.forEach(function (n) {
                    delete t[n]
                }),
                    this.init()
            }),
            (r.help = function () {
                this.logger.info('Available hooks: ' + this.all.join(','))
                var t = []
                this.registered.forEach(function (n, i) {
                    return t.push(i)
                }),
                    this.logger.info('Registered hooks: ' + t.join(','))
            }),
            e
        )
    })(Uc))(),
    Bu = (function () {
        function o(e) {
            if (((this.P = []), typeof e == 'boolean')) this.g = e
            else {
                var r = Array.isArray(e) ? e : [e]
                this.P = r.map(function (t) {
                    return zu(t)
                })
            }
        }
        return (
            (o.prototype.checkHref = function (e) {
                if (typeof this.g == 'boolean') return this.g
                var r = no(e).path
                return this.P.some(function (t) {
                    return t.exec(r) !== null
                })
            }),
            o
        )
    })(),
    sf = (function (o) {
        function e(t) {
            var n
            return ((n = o.call(this, t) || this).k = new Map()), n
        }
        ho(e, o)
        var r = e.prototype
        return (
            (r.set = function (t, n, i) {
                return (
                    this.k.set(t, { action: i, request: n }),
                    { action: i, request: n }
                )
            }),
            (r.get = function (t) {
                return this.k.get(t)
            }),
            (r.getRequest = function (t) {
                return this.k.get(t).request
            }),
            (r.getAction = function (t) {
                return this.k.get(t).action
            }),
            (r.has = function (t) {
                return !this.checkHref(t) && this.k.has(t)
            }),
            (r.delete = function (t) {
                return this.k.delete(t)
            }),
            (r.update = function (t, n) {
                var i = Ur({}, this.k.get(t), {}, n)
                return this.k.set(t, i), i
            }),
            e
        )
    })(Bu),
    af = function () {
        return !window.history.pushState
    },
    uf = function (o) {
        return !o.el || !o.href
    },
    lf = function (o) {
        var e = o.event
        return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
    },
    cf = function (o) {
        var e = o.el
        return e.hasAttribute('target') && e.target === '_blank'
    },
    ff = function (o) {
        var e = o.el
        return (
            (e.protocol !== void 0 &&
                window.location.protocol !== e.protocol) ||
            (e.hostname !== void 0 && window.location.hostname !== e.hostname)
        )
    },
    hf = function (o) {
        var e = o.el
        return e.port !== void 0 && vi() !== vi(e.href)
    },
    df = function (o) {
        var e = o.el
        return e.getAttribute && typeof e.getAttribute('download') == 'string'
    },
    pf = function (o) {
        return o.el.hasAttribute(Zt.prefix + '-' + Zt.prevent)
    },
    gf = function (o) {
        return !!o.el.closest('[' + Zt.prefix + '-' + Zt.prevent + '="all"]')
    },
    _f = function (o) {
        var e = o.href
        return Go(e) === Go() && vi(e) === vi()
    },
    mf = (function (o) {
        function e(t) {
            var n
            return (
                ((n = o.call(this, t) || this).suite = []),
                (n.tests = new Map()),
                n.init(),
                n
            )
        }
        ho(e, o)
        var r = e.prototype
        return (
            (r.init = function () {
                this.add('pushState', af),
                    this.add('exists', uf),
                    this.add('newTab', lf),
                    this.add('blank', cf),
                    this.add('corsDomain', ff),
                    this.add('corsPort', hf),
                    this.add('download', df),
                    this.add('preventSelf', pf),
                    this.add('preventAll', gf),
                    this.add('sameUrl', _f, !1)
            }),
            (r.add = function (t, n, i) {
                i === void 0 && (i = !0),
                    this.tests.set(t, n),
                    i && this.suite.push(t)
            }),
            (r.run = function (t, n, i, s) {
                return this.tests.get(t)({ el: n, event: i, href: s })
            }),
            (r.checkLink = function (t, n, i) {
                var s = this
                return this.suite.some(function (a) {
                    return s.run(a, t, n, i)
                })
            }),
            e
        )
    })(Bu),
    ko = (function (o) {
        function e(r, t) {
            var n
            t === void 0 && (t = 'Barba error')
            for (
                var i = arguments.length,
                    s = new Array(i > 2 ? i - 2 : 0),
                    a = 2;
                a < i;
                a++
            )
                s[a - 2] = arguments[a]
            return (
                ((n = o.call.apply(o, [this].concat(s)) || this).error = r),
                (n.label = t),
                Error.captureStackTrace &&
                    Error.captureStackTrace(
                        (function (u) {
                            if (u === void 0)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                )
                            return u
                        })(n),
                        e
                    ),
                (n.name = 'BarbaError'),
                n
            )
        }
        return ho(e, o), e
    })(Mu(Error)),
    vf = (function () {
        function o(r) {
            r === void 0 && (r = []),
                (this.logger = new Gr('@barba/core')),
                (this.all = []),
                (this.page = []),
                (this.once = []),
                (this.A = [
                    { name: 'namespace', type: 'strings' },
                    { name: 'custom', type: 'function' },
                ]),
                r && (this.all = this.all.concat(r)),
                this.update()
        }
        var e = o.prototype
        return (
            (e.add = function (r, t) {
                switch (r) {
                    case 'rule':
                        this.A.splice(t.position || 0, 0, t.value)
                        break
                    case 'transition':
                    default:
                        this.all.push(t)
                }
                this.update()
            }),
            (e.resolve = function (r, t) {
                var n = this
                t === void 0 && (t = {})
                var i = t.once ? this.once : this.page
                i = i.filter(
                    t.self
                        ? function (h) {
                              return h.name && h.name === 'self'
                          }
                        : function (h) {
                              return !h.name || h.name !== 'self'
                          }
                )
                var s = new Map(),
                    a = i.find(function (h) {
                        var f = !0,
                            g = {}
                        return (
                            !(!t.self || h.name !== 'self') ||
                            (n.A.reverse().forEach(function (p) {
                                f &&
                                    ((f = n.R(h, p, r, g)),
                                    h.from &&
                                        h.to &&
                                        (f =
                                            n.R(h, p, r, g, 'from') &&
                                            n.R(h, p, r, g, 'to')),
                                    h.from &&
                                        !h.to &&
                                        (f = n.R(h, p, r, g, 'from')),
                                    !h.from &&
                                        h.to &&
                                        (f = n.R(h, p, r, g, 'to')))
                            }),
                            s.set(h, g),
                            f)
                        )
                    }),
                    u = s.get(a),
                    l = []
                if (
                    (l.push(t.once ? 'once' : 'page'),
                    t.self && l.push('self'),
                    u)
                ) {
                    var c,
                        d = [a]
                    Object.keys(u).length > 0 && d.push(u),
                        (c = this.logger).info.apply(
                            c,
                            ['Transition found [' + l.join(',') + ']'].concat(d)
                        )
                } else
                    this.logger.info(
                        'No transition found [' + l.join(',') + ']'
                    )
                return a
            }),
            (e.update = function () {
                var r = this
                ;(this.all = this.all
                    .map(function (t) {
                        return r.T(t)
                    })
                    .sort(function (t, n) {
                        return t.priority - n.priority
                    })
                    .reverse()
                    .map(function (t) {
                        return delete t.priority, t
                    })),
                    (this.page = this.all.filter(function (t) {
                        return t.leave !== void 0 || t.enter !== void 0
                    })),
                    (this.once = this.all.filter(function (t) {
                        return t.once !== void 0
                    }))
            }),
            (e.R = function (r, t, n, i, s) {
                var a = !0,
                    u = !1,
                    l = r,
                    c = t.name,
                    d = c,
                    h = c,
                    f = c,
                    g = s ? l[s] : l,
                    p = s === 'to' ? n.next : n.current
                if (s ? g && g[c] : g[c]) {
                    switch (t.type) {
                        case 'strings':
                        default:
                            var m = Array.isArray(g[d]) ? g[d] : [g[d]]
                            p[d] && m.indexOf(p[d]) !== -1 && (u = !0),
                                m.indexOf(p[d]) === -1 && (a = !1)
                            break
                        case 'object':
                            var w = Array.isArray(g[h]) ? g[h] : [g[h]]
                            p[h]
                                ? (p[h].name &&
                                      w.indexOf(p[h].name) !== -1 &&
                                      (u = !0),
                                  w.indexOf(p[h].name) === -1 && (a = !1))
                                : (a = !1)
                            break
                        case 'function':
                            g[f](n) ? (u = !0) : (a = !1)
                    }
                    u &&
                        (s
                            ? ((i[s] = i[s] || {}), (i[s][c] = l[s][c]))
                            : (i[c] = l[c]))
                }
                return a
            }),
            (e.O = function (r, t, n) {
                var i = 0
                return (
                    (r[t] || (r.from && r.from[t]) || (r.to && r.to[t])) &&
                        ((i += Math.pow(10, n)),
                        r.from && r.from[t] && (i += 1),
                        r.to && r.to[t] && (i += 2)),
                    i
                )
            }),
            (e.T = function (r) {
                var t = this
                r.priority = 0
                var n = 0
                return (
                    this.A.forEach(function (i, s) {
                        n += t.O(r, i.name, s + 1)
                    }),
                    (r.priority = n),
                    r
                )
            }),
            o
        )
    })(),
    yf = (function () {
        function o(r) {
            r === void 0 && (r = []),
                (this.logger = new Gr('@barba/core')),
                (this.S = !1),
                (this.store = new vf(r))
        }
        var e = o.prototype
        return (
            (e.get = function (r, t) {
                return this.store.resolve(r, t)
            }),
            (e.doOnce = function (r) {
                var t = r.data,
                    n = r.transition
                try {
                    var i = function () {
                            s.S = !1
                        },
                        s = this,
                        a = n || {}
                    s.S = !0
                    var u = xn(
                        function () {
                            return Promise.resolve(
                                s.j('beforeOnce', t, a)
                            ).then(function () {
                                return Promise.resolve(s.once(t, a)).then(
                                    function () {
                                        return Promise.resolve(
                                            s.j('afterOnce', t, a)
                                        ).then(function () {})
                                    }
                                )
                            })
                        },
                        function (l) {
                            ;(s.S = !1),
                                s.logger.debug(
                                    'Transition error [before/after/once]'
                                ),
                                s.logger.error(l)
                        }
                    )
                    return Promise.resolve(u && u.then ? u.then(i) : i())
                } catch (l) {
                    return Promise.reject(l)
                }
            }),
            (e.doPage = function (r) {
                var t = r.data,
                    n = r.transition,
                    i = r.page,
                    s = r.wrapper
                try {
                    var a = function (f) {
                            if (u) return f
                            l.S = !1
                        },
                        u = !1,
                        l = this,
                        c = n || {},
                        d = c.sync === !0 || !1
                    l.S = !0
                    var h = xn(
                        function () {
                            function f() {
                                return Promise.resolve(
                                    l.j('before', t, c)
                                ).then(function () {
                                    var p = !1
                                    function m(x) {
                                        return p
                                            ? x
                                            : Promise.resolve(l.remove(t)).then(
                                                  function () {
                                                      return Promise.resolve(
                                                          l.j('after', t, c)
                                                      ).then(function () {})
                                                  }
                                              )
                                    }
                                    var w = (function () {
                                        if (d)
                                            return xn(
                                                function () {
                                                    return Promise.resolve(
                                                        l.add(t, s)
                                                    ).then(function () {
                                                        return Promise.resolve(
                                                            l.j(
                                                                'beforeLeave',
                                                                t,
                                                                c
                                                            )
                                                        ).then(function () {
                                                            return Promise.resolve(
                                                                l.j(
                                                                    'beforeEnter',
                                                                    t,
                                                                    c
                                                                )
                                                            ).then(function () {
                                                                return Promise.resolve(
                                                                    Promise.all(
                                                                        [
                                                                            l.leave(
                                                                                t,
                                                                                c
                                                                            ),
                                                                            l.enter(
                                                                                t,
                                                                                c
                                                                            ),
                                                                        ]
                                                                    )
                                                                ).then(
                                                                    function () {
                                                                        return Promise.resolve(
                                                                            l.j(
                                                                                'afterLeave',
                                                                                t,
                                                                                c
                                                                            )
                                                                        ).then(
                                                                            function () {
                                                                                return Promise.resolve(
                                                                                    l.j(
                                                                                        'afterEnter',
                                                                                        t,
                                                                                        c
                                                                                    )
                                                                                ).then(
                                                                                    function () {}
                                                                                )
                                                                            }
                                                                        )
                                                                    }
                                                                )
                                                            })
                                                        })
                                                    })
                                                },
                                                function (y) {
                                                    if (l.M(y))
                                                        throw new ko(
                                                            y,
                                                            'Transition error [sync]'
                                                        )
                                                }
                                            )
                                        var x = function (y) {
                                                return p
                                                    ? y
                                                    : xn(
                                                          function () {
                                                              var P =
                                                                  (function () {
                                                                      if (
                                                                          S !==
                                                                          !1
                                                                      )
                                                                          return Promise.resolve(
                                                                              l.add(
                                                                                  t,
                                                                                  s
                                                                              )
                                                                          ).then(
                                                                              function () {
                                                                                  return Promise.resolve(
                                                                                      l.j(
                                                                                          'beforeEnter',
                                                                                          t,
                                                                                          c
                                                                                      )
                                                                                  ).then(
                                                                                      function () {
                                                                                          return Promise.resolve(
                                                                                              l.enter(
                                                                                                  t,
                                                                                                  c,
                                                                                                  S
                                                                                              )
                                                                                          ).then(
                                                                                              function () {
                                                                                                  return Promise.resolve(
                                                                                                      l.j(
                                                                                                          'afterEnter',
                                                                                                          t,
                                                                                                          c
                                                                                                      )
                                                                                                  ).then(
                                                                                                      function () {}
                                                                                                  )
                                                                                              }
                                                                                          )
                                                                                      }
                                                                                  )
                                                                              }
                                                                          )
                                                                  })()
                                                              if (P && P.then)
                                                                  return P.then(
                                                                      function () {}
                                                                  )
                                                          },
                                                          function (P) {
                                                              if (l.M(P))
                                                                  throw new ko(
                                                                      P,
                                                                      'Transition error [before/after/enter]'
                                                                  )
                                                          }
                                                      )
                                            },
                                            S = !1,
                                            v = xn(
                                                function () {
                                                    return Promise.resolve(
                                                        l.j('beforeLeave', t, c)
                                                    ).then(function () {
                                                        return Promise.resolve(
                                                            Promise.all([
                                                                l.leave(t, c),
                                                                ro(i, t),
                                                            ]).then(function (
                                                                y
                                                            ) {
                                                                return y[0]
                                                            })
                                                        ).then(function (y) {
                                                            return (
                                                                (S = y),
                                                                Promise.resolve(
                                                                    l.j(
                                                                        'afterLeave',
                                                                        t,
                                                                        c
                                                                    )
                                                                ).then(
                                                                    function () {}
                                                                )
                                                            )
                                                        })
                                                    })
                                                },
                                                function (y) {
                                                    if (l.M(y))
                                                        throw new ko(
                                                            y,
                                                            'Transition error [before/after/leave]'
                                                        )
                                                }
                                            )
                                        return v && v.then ? v.then(x) : x(v)
                                    })()
                                    return w && w.then ? w.then(m) : m(w)
                                })
                            }
                            var g = (function () {
                                if (d)
                                    return Promise.resolve(ro(i, t)).then(
                                        function () {}
                                    )
                            })()
                            return g && g.then ? g.then(f) : f()
                        },
                        function (f) {
                            throw (
                                ((l.S = !1),
                                f.name && f.name === 'BarbaError'
                                    ? (l.logger.debug(f.label),
                                      l.logger.error(f.error),
                                      f)
                                    : (l.logger.debug(
                                          'Transition error [page]'
                                      ),
                                      l.logger.error(f),
                                      f))
                            )
                        }
                    )
                    return Promise.resolve(h && h.then ? h.then(a) : a(h))
                } catch (f) {
                    return Promise.reject(f)
                }
            }),
            (e.once = function (r, t) {
                try {
                    return Promise.resolve(vr.do('once', r, t)).then(
                        function () {
                            return t.once ? Cn(t.once, t)(r) : Promise.resolve()
                        }
                    )
                } catch (n) {
                    return Promise.reject(n)
                }
            }),
            (e.leave = function (r, t) {
                try {
                    return Promise.resolve(vr.do('leave', r, t)).then(
                        function () {
                            return t.leave
                                ? Cn(t.leave, t)(r)
                                : Promise.resolve()
                        }
                    )
                } catch (n) {
                    return Promise.reject(n)
                }
            }),
            (e.enter = function (r, t, n) {
                try {
                    return Promise.resolve(vr.do('enter', r, t)).then(
                        function () {
                            return t.enter
                                ? Cn(t.enter, t)(r, n)
                                : Promise.resolve()
                        }
                    )
                } catch (i) {
                    return Promise.reject(i)
                }
            }),
            (e.add = function (r, t) {
                try {
                    return (
                        Kr.addContainer(r.next.container, t),
                        vr.do('nextAdded', r),
                        Promise.resolve()
                    )
                } catch (n) {
                    return Promise.reject(n)
                }
            }),
            (e.remove = function (r) {
                try {
                    return (
                        Kr.removeContainer(r.current.container),
                        vr.do('currentRemoved', r),
                        Promise.resolve()
                    )
                } catch (t) {
                    return Promise.reject(t)
                }
            }),
            (e.M = function (r) {
                return r.message
                    ? !/Timeout error|Fetch error/.test(r.message)
                    : !r.status
            }),
            (e.j = function (r, t, n) {
                try {
                    return Promise.resolve(vr.do(r, t, n)).then(function () {
                        return n[r] ? Cn(n[r], n)(t) : Promise.resolve()
                    })
                } catch (i) {
                    return Promise.reject(i)
                }
            }),
            Cs(o, [
                {
                    key: 'isRunning',
                    get: function () {
                        return this.S
                    },
                    set: function (r) {
                        this.S = r
                    },
                },
                {
                    key: 'hasOnce',
                    get: function () {
                        return this.store.once.length > 0
                    },
                },
                {
                    key: 'hasSelf',
                    get: function () {
                        return this.store.all.some(function (r) {
                            return r.name === 'self'
                        })
                    },
                },
                {
                    key: 'shouldWait',
                    get: function () {
                        return this.store.all.some(function (r) {
                            return (r.to && !r.to.route) || r.sync
                        })
                    },
                },
            ]),
            o
        )
    })(),
    wf = (function () {
        function o(e) {
            var r = this
            ;(this.names = [
                'beforeLeave',
                'afterLeave',
                'beforeEnter',
                'afterEnter',
            ]),
                (this.byNamespace = new Map()),
                e.length !== 0 &&
                    (e.forEach(function (t) {
                        r.byNamespace.set(t.namespace, t)
                    }),
                    this.names.forEach(function (t) {
                        vr[t](r.L(t))
                    }))
        }
        return (
            (o.prototype.L = function (e) {
                var r = this
                return function (t) {
                    var n = e.match(/enter/i) ? t.next : t.current,
                        i = r.byNamespace.get(n.namespace)
                    return i && i[e] ? Cn(i[e], i)(t) : Promise.resolve()
                }
            }),
            o
        )
    })()
Element.prototype.matches ||
    (Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
        (Element.prototype.closest = function (o) {
            var e = this
            do {
                if (e.matches(o)) return e
                e = e.parentElement || e.parentNode
            } while (e !== null && e.nodeType === 1)
            return null
        })
var bf = {
        container: null,
        html: '',
        namespace: '',
        url: { hash: '', href: '', path: '', port: null, query: {} },
    },
    la = new ((function () {
        function o() {
            ;(this.version = Vc),
                (this.schemaPage = bf),
                (this.Logger = Gr),
                (this.logger = new Gr('@barba/core')),
                (this.plugins = []),
                (this.hooks = vr),
                (this.dom = Kr),
                (this.helpers = tf),
                (this.history = Iu),
                (this.request = nf),
                (this.url = rf)
        }
        var e = o.prototype
        return (
            (e.use = function (r, t) {
                var n = this.plugins
                n.indexOf(r) > -1
                    ? this.logger.warn(
                          'Plugin [' + r.name + '] already installed.'
                      )
                    : typeof r.install == 'function'
                    ? (r.install(this, t), n.push(r))
                    : this.logger.warn(
                          'Plugin [' + r.name + '] has no "install" method.'
                      )
            }),
            (e.init = function (r) {
                var t = r === void 0 ? {} : r,
                    n = t.transitions,
                    i = n === void 0 ? [] : n,
                    s = t.views,
                    a = s === void 0 ? [] : s,
                    u = t.schema,
                    l = u === void 0 ? Zt : u,
                    c = t.requestError,
                    d = t.timeout,
                    h = d === void 0 ? 2e3 : d,
                    f = t.cacheIgnore,
                    g = f !== void 0 && f,
                    p = t.prefetchIgnore,
                    m = p !== void 0 && p,
                    w = t.preventRunning,
                    x = w !== void 0 && w,
                    S = t.prevent,
                    v = S === void 0 ? null : S,
                    y = t.debug,
                    P = t.logLevel
                if (
                    (Gr.setLevel(
                        (y !== void 0 && y) === !0
                            ? 'debug'
                            : P === void 0
                            ? 'off'
                            : P
                    ),
                    this.logger.info(this.version),
                    Object.keys(l).forEach(function (k) {
                        Zt[k] && (Zt[k] = l[k])
                    }),
                    (this.$ = c),
                    (this.timeout = h),
                    (this.cacheIgnore = g),
                    (this.prefetchIgnore = m),
                    (this.preventRunning = x),
                    (this._ = this.dom.getWrapper()),
                    !this._)
                )
                    throw new Error('[@barba/core] No Barba wrapper found')
                this._.setAttribute('aria-live', 'polite'), this.q()
                var T = this.data.current
                if (!T.container)
                    throw new Error('[@barba/core] No Barba container found')
                if (
                    ((this.cache = new sf(g)),
                    (this.prevent = new mf(m)),
                    (this.transitions = new yf(i)),
                    (this.views = new wf(a)),
                    v !== null)
                ) {
                    if (typeof v != 'function')
                        throw new Error(
                            '[@barba/core] Prevent should be a function'
                        )
                    this.prevent.add('preventCustom', v)
                }
                this.history.init(T.url.href, T.namespace),
                    (this.B = this.B.bind(this)),
                    (this.U = this.U.bind(this)),
                    (this.D = this.D.bind(this)),
                    this.F(),
                    this.plugins.forEach(function (k) {
                        return k.init()
                    })
                var C = this.data
                ;(C.trigger = 'barba'),
                    (C.next = C.current),
                    (C.current = Ur({}, this.schemaPage)),
                    this.hooks.do('ready', C),
                    this.once(C),
                    this.q()
            }),
            (e.destroy = function () {
                this.q(),
                    this.H(),
                    this.history.clear(),
                    this.hooks.clear(),
                    (this.plugins = [])
            }),
            (e.force = function (r) {
                window.location.assign(r)
            }),
            (e.go = function (r, t, n) {
                var i
                if ((t === void 0 && (t = 'barba'), this.transitions.isRunning))
                    this.force(r)
                else if (
                    !(i =
                        t === 'popstate'
                            ? this.history.current &&
                              this.url.getPath(this.history.current.url) ===
                                  this.url.getPath(r)
                            : this.prevent.run('sameUrl', null, null, r)) ||
                    this.transitions.hasSelf
                )
                    return (
                        (t = this.history.change(r, t, n)),
                        n && (n.stopPropagation(), n.preventDefault()),
                        this.page(r, t, i)
                    )
            }),
            (e.once = function (r) {
                try {
                    var t = this
                    return Promise.resolve(t.hooks.do('beforeEnter', r)).then(
                        function () {
                            function n() {
                                return Promise.resolve(
                                    t.hooks.do('afterEnter', r)
                                ).then(function () {})
                            }
                            var i = (function () {
                                if (t.transitions.hasOnce) {
                                    var s = t.transitions.get(r, { once: !0 })
                                    return Promise.resolve(
                                        t.transitions.doOnce({
                                            transition: s,
                                            data: r,
                                        })
                                    ).then(function () {})
                                }
                            })()
                            return i && i.then ? i.then(n) : n()
                        }
                    )
                } catch (n) {
                    return Promise.reject(n)
                }
            }),
            (e.page = function (r, t, n) {
                try {
                    var i = function () {
                            var l = s.data
                            return Promise.resolve(s.hooks.do('page', l)).then(
                                function () {
                                    var c = xn(
                                        function () {
                                            var d = s.transitions.get(l, {
                                                once: !1,
                                                self: n,
                                            })
                                            return Promise.resolve(
                                                s.transitions.doPage({
                                                    data: l,
                                                    page: a,
                                                    transition: d,
                                                    wrapper: s._,
                                                })
                                            ).then(function () {
                                                s.q()
                                            })
                                        },
                                        function () {
                                            Gr.getLevel() === 0 &&
                                                s.force(l.current.url.href)
                                        }
                                    )
                                    if (c && c.then)
                                        return c.then(function () {})
                                }
                            )
                        },
                        s = this
                    ;(s.data.next.url = Ur({ href: r }, s.url.parse(r))),
                        (s.data.trigger = t)
                    var a = s.cache.has(r)
                            ? s.cache.update(r, { action: 'click' }).request
                            : s.cache.set(
                                  r,
                                  s.request(
                                      r,
                                      s.timeout,
                                      s.onRequestError.bind(s, t)
                                  ),
                                  'click'
                              ).request,
                        u = (function () {
                            if (s.transitions.shouldWait)
                                return Promise.resolve(ro(a, s.data)).then(
                                    function () {}
                                )
                        })()
                    return Promise.resolve(u && u.then ? u.then(i) : i())
                } catch (l) {
                    return Promise.reject(l)
                }
            }),
            (e.onRequestError = function (r) {
                this.transitions.isRunning = !1
                for (
                    var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        i = 1;
                    i < t;
                    i++
                )
                    n[i - 1] = arguments[i]
                var s = n[0],
                    a = n[1],
                    u = this.cache.getAction(s)
                return (
                    this.cache.delete(s),
                    !(
                        (this.$ && this.$(r, u, s, a) === !1) ||
                        (u === 'click' && this.force(s), 1)
                    )
                )
            }),
            (e.prefetch = function (r) {
                var t = this
                this.cache.has(r) ||
                    this.cache.set(
                        r,
                        this.request(
                            r,
                            this.timeout,
                            this.onRequestError.bind(this, 'barba')
                        ).catch(function (n) {
                            t.logger.error(n)
                        }),
                        'prefetch'
                    )
            }),
            (e.F = function () {
                this.prefetchIgnore !== !0 &&
                    (document.addEventListener('mouseover', this.B),
                    document.addEventListener('touchstart', this.B)),
                    document.addEventListener('click', this.U),
                    window.addEventListener('popstate', this.D)
            }),
            (e.H = function () {
                this.prefetchIgnore !== !0 &&
                    (document.removeEventListener('mouseover', this.B),
                    document.removeEventListener('touchstart', this.B)),
                    document.removeEventListener('click', this.U),
                    window.removeEventListener('popstate', this.D)
            }),
            (e.B = function (r) {
                var t = this,
                    n = this.I(r)
                if (n) {
                    var i = this.dom.getHref(n)
                    this.prevent.checkHref(i) ||
                        this.cache.has(i) ||
                        this.cache.set(
                            i,
                            this.request(
                                i,
                                this.timeout,
                                this.onRequestError.bind(this, n)
                            ).catch(function (s) {
                                t.logger.error(s)
                            }),
                            'enter'
                        )
                }
            }),
            (e.U = function (r) {
                var t = this.I(r)
                if (t)
                    return this.transitions.isRunning && this.preventRunning
                        ? (r.preventDefault(), void r.stopPropagation())
                        : void this.go(this.dom.getHref(t), t, r)
            }),
            (e.D = function (r) {
                this.go(this.url.getHref(), 'popstate', r)
            }),
            (e.I = function (r) {
                for (var t = r.target; t && !this.dom.getHref(t); )
                    t = t.parentNode
                if (t && !this.prevent.checkLink(t, r, this.dom.getHref(t)))
                    return t
            }),
            (e.q = function () {
                var r = this.url.getHref(),
                    t = {
                        container: this.dom.getContainer(),
                        html: this.dom.getHtml(),
                        namespace: this.dom.getNamespace(),
                        url: Ur({ href: r }, this.url.parse(r)),
                    }
                ;(this.C = {
                    current: t,
                    next: Ur({}, this.schemaPage),
                    trigger: void 0,
                }),
                    this.hooks.do('reset', this.data)
            }),
            Cs(o, [
                {
                    key: 'data',
                    get: function () {
                        return this.C
                    },
                },
                {
                    key: 'wrapper',
                    get: function () {
                        return this._
                    },
                },
            ]),
            o
        )
    })())()
function ca(o, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r]
        ;(t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            'value' in t && (t.writable = !0),
            Object.defineProperty(o, t.key, t)
    }
}
function xf(o, e, r) {
    return e && ca(o.prototype, e), r && ca(o, r), o
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ze,
    Ko,
    wt,
    Tr,
    Sr,
    Rn,
    qu,
    jr,
    ni,
    Wu,
    ur,
    $t,
    Yu,
    Hu = function () {
        return (
            ze ||
            (typeof window < 'u' &&
                (ze = window.gsap) &&
                ze.registerPlugin &&
                ze)
        )
    },
    ju = 1,
    En = [],
    W = [],
    Jt = [],
    ii = Date.now,
    Qo = function (e, r) {
        return r
    },
    Tf = function () {
        var e = ni.core,
            r = e.bridge || {},
            t = e._scrollers,
            n = e._proxies
        t.push.apply(t, W),
            n.push.apply(n, Jt),
            (W = t),
            (Jt = n),
            (Qo = function (s, a) {
                return r[s](a)
            })
    },
    Cr = function (e, r) {
        return ~Jt.indexOf(e) && Jt[Jt.indexOf(e) + 1][r]
    },
    oi = function (e) {
        return !!~Wu.indexOf(e)
    },
    Qe = function (e, r, t, n, i) {
        return e.addEventListener(r, t, { passive: !n, capture: !!i })
    },
    Ke = function (e, r, t, n) {
        return e.removeEventListener(r, t, !!n)
    },
    Pi = 'scrollLeft',
    ki = 'scrollTop',
    Zo = function () {
        return (ur && ur.isPressed) || W.cache++
    },
    io = function (e, r) {
        var t = function n(i) {
            if (i || i === 0) {
                ju && (wt.history.scrollRestoration = 'manual')
                var s = ur && ur.isPressed
                ;(i = n.v = Math.round(i) || (ur && ur.iOS ? 1 : 0)),
                    e(i),
                    (n.cacheID = W.cache),
                    s && Qo('ss', i)
            } else
                (r || W.cache !== n.cacheID || Qo('ref')) &&
                    ((n.cacheID = W.cache), (n.v = e()))
            return n.v + n.offset
        }
        return (t.offset = 0), e && t
    },
    tt = {
        s: Pi,
        p: 'left',
        p2: 'Left',
        os: 'right',
        os2: 'Right',
        d: 'width',
        d2: 'Width',
        a: 'x',
        sc: io(function (o) {
            return arguments.length
                ? wt.scrollTo(o, ke.sc())
                : wt.pageXOffset || Tr[Pi] || Sr[Pi] || Rn[Pi] || 0
        }),
    },
    ke = {
        s: ki,
        p: 'top',
        p2: 'Top',
        os: 'bottom',
        os2: 'Bottom',
        d: 'height',
        d2: 'Height',
        a: 'y',
        op: tt,
        sc: io(function (o) {
            return arguments.length
                ? wt.scrollTo(tt.sc(), o)
                : wt.pageYOffset || Tr[ki] || Sr[ki] || Rn[ki] || 0
        }),
    },
    st = function (e, r) {
        return (
            ((r && r._ctx && r._ctx.selector) || ze.utils.toArray)(e)[0] ||
            (typeof e == 'string' && ze.config().nullTargetWarn !== !1
                ? console.warn('Element not found:', e)
                : null)
        )
    },
    Ar = function (e, r) {
        var t = r.s,
            n = r.sc
        oi(e) && (e = Tr.scrollingElement || Sr)
        var i = W.indexOf(e),
            s = n === ke.sc ? 1 : 2
        !~i && (i = W.push(e) - 1), W[i + s] || Qe(e, 'scroll', Zo)
        var a = W[i + s],
            u =
                a ||
                (W[i + s] =
                    io(Cr(e, t), !0) ||
                    (oi(e)
                        ? n
                        : io(function (l) {
                              return arguments.length ? (e[t] = l) : e[t]
                          })))
        return (
            (u.target = e),
            a || (u.smooth = ze.getProperty(e, 'scrollBehavior') === 'smooth'),
            u
        )
    },
    Jo = function (e, r, t) {
        var n = e,
            i = e,
            s = ii(),
            a = s,
            u = r || 50,
            l = Math.max(500, u * 3),
            c = function (g, p) {
                var m = ii()
                p || m - s > u
                    ? ((i = n), (n = g), (a = s), (s = m))
                    : t
                    ? (n += g)
                    : (n = i + ((g - i) / (m - a)) * (s - a))
            },
            d = function () {
                ;(i = n = t ? 0 : n), (a = s = 0)
            },
            h = function (g) {
                var p = a,
                    m = i,
                    w = ii()
                return (
                    (g || g === 0) && g !== n && c(g),
                    s === a || w - a > l
                        ? 0
                        : ((n + (t ? m : -m)) / ((t ? w : s) - p)) * 1e3
                )
            }
        return { update: c, reset: d, getVelocity: h }
    },
    Vn = function (e, r) {
        return (
            r && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
        )
    },
    fa = function (e) {
        var r = Math.max.apply(Math, e),
            t = Math.min.apply(Math, e)
        return Math.abs(r) >= Math.abs(t) ? r : t
    },
    Xu = function () {
        ;(ni = ze.core.globals().ScrollTrigger), ni && ni.core && Tf()
    },
    Vu = function (e) {
        return (
            (ze = e || Hu()),
            ze &&
                typeof document < 'u' &&
                document.body &&
                ((wt = window),
                (Tr = document),
                (Sr = Tr.documentElement),
                (Rn = Tr.body),
                (Wu = [wt, Tr, Sr, Rn]),
                ze.utils.clamp,
                (Yu = ze.core.context || function () {}),
                (jr = 'onpointerenter' in Rn ? 'pointer' : 'mouse'),
                (qu = Te.isTouch =
                    wt.matchMedia &&
                    wt.matchMedia('(hover: none), (pointer: coarse)').matches
                        ? 1
                        : 'ontouchstart' in wt ||
                          navigator.maxTouchPoints > 0 ||
                          navigator.msMaxTouchPoints > 0
                        ? 2
                        : 0),
                ($t = Te.eventTypes =
                    (
                        'ontouchstart' in Sr
                            ? 'touchstart,touchmove,touchcancel,touchend'
                            : 'onpointerdown' in Sr
                            ? 'pointerdown,pointermove,pointercancel,pointerup'
                            : 'mousedown,mousemove,mouseup,mouseup'
                    ).split(',')),
                setTimeout(function () {
                    return (ju = 0)
                }, 500),
                Xu(),
                (Ko = 1)),
            Ko
        )
    }
tt.op = ke
W.cache = 0
var Te = (function () {
    function o(r) {
        this.init(r)
    }
    var e = o.prototype
    return (
        (e.init = function (t) {
            Ko ||
                Vu(ze) ||
                console.warn('Please gsap.registerPlugin(Observer)'),
                ni || Xu()
            var n = t.tolerance,
                i = t.dragMinimum,
                s = t.type,
                a = t.target,
                u = t.lineHeight,
                l = t.debounce,
                c = t.preventDefault,
                d = t.onStop,
                h = t.onStopDelay,
                f = t.ignore,
                g = t.wheelSpeed,
                p = t.event,
                m = t.onDragStart,
                w = t.onDragEnd,
                x = t.onDrag,
                S = t.onPress,
                v = t.onRelease,
                y = t.onRight,
                P = t.onLeft,
                T = t.onUp,
                C = t.onDown,
                k = t.onChangeX,
                E = t.onChangeY,
                D = t.onChange,
                O = t.onToggleX,
                K = t.onToggleY,
                N = t.onHover,
                $ = t.onHoverEnd,
                H = t.onMove,
                L = t.ignoreCheck,
                Y = t.isNormalizer,
                J = t.onGestureStart,
                _ = t.onGestureEnd,
                ne = t.onWheel,
                Xe = t.onEnable,
                Dt = t.onDisable,
                ce = t.onClick,
                Me = t.scrollSpeed,
                Ve = t.capture,
                ve = t.allowClicks,
                Ue = t.lockAxis,
                Ne = t.onLockAxis
            ;(this.target = a = st(a) || Sr),
                (this.vars = t),
                f && (f = ze.utils.toArray(f)),
                (n = n || 1e-9),
                (i = i || 0),
                (g = g || 1),
                (Me = Me || 1),
                (s = s || 'wheel,touch,pointer'),
                (l = l !== !1),
                u || (u = parseFloat(wt.getComputedStyle(Rn).lineHeight) || 22)
            var pr,
                nt,
                Wt,
                Q,
                ye,
                it,
                ft,
                b = this,
                ht = 0,
                tr = 0,
                Dr = Ar(a, tt),
                we = Ar(a, ke),
                Rr = Dr(),
                Lr = we(),
                Wn =
                    ~s.indexOf('touch') &&
                    !~s.indexOf('pointer') &&
                    $t[0] === 'pointerdown',
                De = oi(a),
                pe = a.ownerDocument || Tr,
                Rt = [0, 0, 0],
                Lt = [0, 0, 0],
                Fr = 0,
                rr = function () {
                    return (Fr = ii())
                },
                Yt = function (R, Z) {
                    return (
                        ((b.event = R) && f && ~f.indexOf(R.target)) ||
                        (Z && Wn && R.pointerType !== 'touch') ||
                        (L && L(R, Z))
                    )
                },
                ot = function () {
                    b._vx.reset(), b._vy.reset(), nt.pause(), d && d(b)
                },
                Ir = function () {
                    var R = (b.deltaX = fa(Rt)),
                        Z = (b.deltaY = fa(Lt)),
                        fe = Math.abs(R) >= n,
                        A = Math.abs(Z) >= n
                    D && (fe || A) && D(b, R, Z, Rt, Lt),
                        fe &&
                            (y && b.deltaX > 0 && y(b),
                            P && b.deltaX < 0 && P(b),
                            k && k(b),
                            O && b.deltaX < 0 != ht < 0 && O(b),
                            (ht = b.deltaX),
                            (Rt[0] = Rt[1] = Rt[2] = 0)),
                        A &&
                            (C && b.deltaY > 0 && C(b),
                            T && b.deltaY < 0 && T(b),
                            E && E(b),
                            K && b.deltaY < 0 != tr < 0 && K(b),
                            (tr = b.deltaY),
                            (Lt[0] = Lt[1] = Lt[2] = 0)),
                        (Q || Wt) &&
                            (H && H(b), Wt && (x(b), (Wt = !1)), (Q = !1)),
                        it && !(it = !1) && Ne && Ne(b),
                        ye && (ne(b), (ye = !1)),
                        (pr = 0)
                },
                gn = function (R, Z, fe) {
                    ;(Rt[fe] += R),
                        (Lt[fe] += Z),
                        b._vx.update(R),
                        b._vy.update(Z),
                        l ? pr || (pr = requestAnimationFrame(Ir)) : Ir()
                },
                _n = function (R, Z) {
                    Ue &&
                        !ft &&
                        ((b.axis = ft = Math.abs(R) > Math.abs(Z) ? 'x' : 'y'),
                        (it = !0)),
                        ft !== 'y' && ((Rt[2] += R), b._vx.update(R, !0)),
                        ft !== 'x' && ((Lt[2] += Z), b._vy.update(Z, !0)),
                        l ? pr || (pr = requestAnimationFrame(Ir)) : Ir()
                },
                zr = function (R) {
                    if (!Yt(R, 1)) {
                        R = Vn(R, c)
                        var Z = R.clientX,
                            fe = R.clientY,
                            A = Z - b.x,
                            V = fe - b.y,
                            F = b.isDragging
                        ;(b.x = Z),
                            (b.y = fe),
                            (F ||
                                Math.abs(b.startX - Z) >= i ||
                                Math.abs(b.startY - fe) >= i) &&
                                (x && (Wt = !0),
                                F || (b.isDragging = !0),
                                _n(A, V),
                                F || (m && m(b)))
                    }
                },
                gr = (b.onPress = function (I) {
                    Yt(I, 1) ||
                        (I && I.button) ||
                        ((b.axis = ft = null),
                        nt.pause(),
                        (b.isPressed = !0),
                        (I = Vn(I)),
                        (ht = tr = 0),
                        (b.startX = b.x = I.clientX),
                        (b.startY = b.y = I.clientY),
                        b._vx.reset(),
                        b._vy.reset(),
                        Qe(Y ? a : pe, $t[1], zr, c, !0),
                        (b.deltaX = b.deltaY = 0),
                        S && S(b))
                }),
                _r = (b.onRelease = function (I) {
                    if (!Yt(I, 1)) {
                        Ke(Y ? a : pe, $t[1], zr, !0)
                        var R = !isNaN(b.y - b.startY),
                            Z =
                                b.isDragging &&
                                (Math.abs(b.x - b.startX) > 3 ||
                                    Math.abs(b.y - b.startY) > 3),
                            fe = Vn(I)
                        !Z &&
                            R &&
                            (b._vx.reset(),
                            b._vy.reset(),
                            c &&
                                ve &&
                                ze.delayedCall(0.08, function () {
                                    if (
                                        ii() - Fr > 300 &&
                                        !I.defaultPrevented
                                    ) {
                                        if (I.target.click) I.target.click()
                                        else if (pe.createEvent) {
                                            var A =
                                                pe.createEvent('MouseEvents')
                                            A.initMouseEvent(
                                                'click',
                                                !0,
                                                !0,
                                                wt,
                                                1,
                                                fe.screenX,
                                                fe.screenY,
                                                fe.clientX,
                                                fe.clientY,
                                                !1,
                                                !1,
                                                !1,
                                                !1,
                                                0,
                                                null
                                            ),
                                                I.target.dispatchEvent(A)
                                        }
                                    }
                                })),
                            (b.isDragging = b.isGesturing = b.isPressed = !1),
                            d && !Y && nt.restart(!0),
                            w && Z && w(b),
                            v && v(b, Z)
                    }
                }),
                U = function (R) {
                    return (
                        R.touches &&
                        R.touches.length > 1 &&
                        (b.isGesturing = !0) &&
                        J(R, b.isDragging)
                    )
                },
                Nr = function () {
                    return (b.isGesturing = !1) || _(b)
                },
                Ft = function (R) {
                    if (!Yt(R)) {
                        var Z = Dr(),
                            fe = we()
                        gn((Z - Rr) * Me, (fe - Lr) * Me, 1),
                            (Rr = Z),
                            (Lr = fe),
                            d && nt.restart(!0)
                    }
                },
                It = function (R) {
                    if (!Yt(R)) {
                        ;(R = Vn(R, c)), ne && (ye = !0)
                        var Z =
                            (R.deltaMode === 1
                                ? u
                                : R.deltaMode === 2
                                ? wt.innerHeight
                                : 1) * g
                        gn(R.deltaX * Z, R.deltaY * Z, 0),
                            d && !Y && nt.restart(!0)
                    }
                },
                zt = function (R) {
                    if (!Yt(R)) {
                        var Z = R.clientX,
                            fe = R.clientY,
                            A = Z - b.x,
                            V = fe - b.y
                        ;(b.x = Z), (b.y = fe), (Q = !0), (A || V) && _n(A, V)
                    }
                },
                $r = function (R) {
                    ;(b.event = R), N(b)
                },
                mn = function (R) {
                    ;(b.event = R), $(b)
                },
                nr = function (R) {
                    return Yt(R) || (Vn(R, c) && ce(b))
                }
            ;(nt = b._dc = ze.delayedCall(h || 0.25, ot).pause()),
                (b.deltaX = b.deltaY = 0),
                (b._vx = Jo(0, 50, !0)),
                (b._vy = Jo(0, 50, !0)),
                (b.scrollX = Dr),
                (b.scrollY = we),
                (b.isDragging = b.isGesturing = b.isPressed = !1),
                Yu(this),
                (b.enable = function (I) {
                    return (
                        b.isEnabled ||
                            (Qe(De ? pe : a, 'scroll', Zo),
                            s.indexOf('scroll') >= 0 &&
                                Qe(De ? pe : a, 'scroll', Ft, c, Ve),
                            s.indexOf('wheel') >= 0 &&
                                Qe(a, 'wheel', It, c, Ve),
                            ((s.indexOf('touch') >= 0 && qu) ||
                                s.indexOf('pointer') >= 0) &&
                                (Qe(a, $t[0], gr, c, Ve),
                                Qe(pe, $t[2], _r),
                                Qe(pe, $t[3], _r),
                                ve && Qe(a, 'click', rr, !1, !0),
                                ce && Qe(a, 'click', nr),
                                J && Qe(pe, 'gesturestart', U),
                                _ && Qe(pe, 'gestureend', Nr),
                                N && Qe(a, jr + 'enter', $r),
                                $ && Qe(a, jr + 'leave', mn),
                                H && Qe(a, jr + 'move', zt)),
                            (b.isEnabled = !0),
                            I && I.type && gr(I),
                            Xe && Xe(b)),
                        b
                    )
                }),
                (b.disable = function () {
                    b.isEnabled &&
                        (En.filter(function (I) {
                            return I !== b && oi(I.target)
                        }).length || Ke(De ? pe : a, 'scroll', Zo),
                        b.isPressed &&
                            (b._vx.reset(),
                            b._vy.reset(),
                            Ke(Y ? a : pe, $t[1], zr, !0)),
                        Ke(De ? pe : a, 'scroll', Ft, Ve),
                        Ke(a, 'wheel', It, Ve),
                        Ke(a, $t[0], gr, Ve),
                        Ke(pe, $t[2], _r),
                        Ke(pe, $t[3], _r),
                        Ke(a, 'click', rr, !0),
                        Ke(a, 'click', nr),
                        Ke(pe, 'gesturestart', U),
                        Ke(pe, 'gestureend', Nr),
                        Ke(a, jr + 'enter', $r),
                        Ke(a, jr + 'leave', mn),
                        Ke(a, jr + 'move', zt),
                        (b.isEnabled = b.isPressed = b.isDragging = !1),
                        Dt && Dt(b))
                }),
                (b.kill = b.revert =
                    function () {
                        b.disable()
                        var I = En.indexOf(b)
                        I >= 0 && En.splice(I, 1), ur === b && (ur = 0)
                    }),
                En.push(b),
                Y && oi(a) && (ur = b),
                b.enable(p)
        }),
        xf(o, [
            {
                key: 'velocityX',
                get: function () {
                    return this._vx.getVelocity()
                },
            },
            {
                key: 'velocityY',
                get: function () {
                    return this._vy.getVelocity()
                },
            },
        ]),
        o
    )
})()
Te.version = '3.12.2'
Te.create = function (o) {
    return new Te(o)
}
Te.register = Vu
Te.getAll = function () {
    return En.slice()
}
Te.getById = function (o) {
    return En.filter(function (e) {
        return e.vars.id === o
    })[0]
}
Hu() && ze.registerPlugin(Te)
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var M,
    Tn,
    j,
    ae,
    Bt,
    ie,
    Uu,
    oo,
    so,
    On,
    qi,
    Ci,
    qe,
    po,
    es,
    Ze,
    ha,
    da,
    Sn,
    Gu,
    Co,
    Ku,
    gt,
    Qu,
    Zu,
    Ju,
    mr,
    ts,
    Ds,
    Ln,
    Rs,
    Eo,
    Ei = 1,
    et = Date.now,
    Oo = et(),
    At = 0,
    Qn = 0,
    pa = function (e, r, t) {
        var n = mt(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1)
        return (t['_' + r + 'Clamp'] = n), n ? e.substr(6, e.length - 7) : e
    },
    ga = function (e, r) {
        return r && (!mt(e) || e.substr(0, 6) !== 'clamp(')
            ? 'clamp(' + e + ')'
            : e
    },
    Sf = function o() {
        return Qn && requestAnimationFrame(o)
    },
    _a = function () {
        return (po = 1)
    },
    ma = function () {
        return (po = 0)
    },
    Vt = function (e) {
        return e
    },
    Zn = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    el = function () {
        return typeof window < 'u'
    },
    tl = function () {
        return M || (el() && (M = window.gsap) && M.registerPlugin && M)
    },
    ln = function (e) {
        return !!~Uu.indexOf(e)
    },
    rl = function (e) {
        return (
            (e === 'Height' ? Rs : j['inner' + e]) ||
            Bt['client' + e] ||
            ie['client' + e]
        )
    },
    nl = function (e) {
        return (
            Cr(e, 'getBoundingClientRect') ||
            (ln(e)
                ? function () {
                      return (Vi.width = j.innerWidth), (Vi.height = Rs), Vi
                  }
                : function () {
                      return ar(e)
                  })
        )
    },
    Pf = function (e, r, t) {
        var n = t.d,
            i = t.d2,
            s = t.a
        return (s = Cr(e, 'getBoundingClientRect'))
            ? function () {
                  return s()[n]
              }
            : function () {
                  return (r ? rl(i) : e['client' + i]) || 0
              }
    },
    kf = function (e, r) {
        return !r || ~Jt.indexOf(e)
            ? nl(e)
            : function () {
                  return Vi
              }
    },
    lr = function (e, r) {
        var t = r.s,
            n = r.d2,
            i = r.d,
            s = r.a
        return Math.max(
            0,
            (t = 'scroll' + n) && (s = Cr(e, t))
                ? s() - nl(e)()[i]
                : ln(e)
                ? (Bt[t] || ie[t]) - rl(n)
                : e[t] - e['offset' + n]
        )
    },
    Oi = function (e, r) {
        for (var t = 0; t < Sn.length; t += 3)
            (!r || ~r.indexOf(Sn[t + 1])) && e(Sn[t], Sn[t + 1], Sn[t + 2])
    },
    mt = function (e) {
        return typeof e == 'string'
    },
    rt = function (e) {
        return typeof e == 'function'
    },
    Wi = function (e) {
        return typeof e == 'number'
    },
    Xr = function (e) {
        return typeof e == 'object'
    },
    Un = function (e, r, t) {
        return e && e.progress(r ? 0 : 1) && t && e.pause()
    },
    Ao = function (e, r) {
        if (e.enabled) {
            var t = r(e)
            t && t.totalTime && (e.callbackAnimation = t)
        }
    },
    yn = Math.abs,
    il = 'left',
    ol = 'top',
    Ls = 'right',
    Fs = 'bottom',
    on = 'width',
    sn = 'height',
    si = 'Right',
    ai = 'Left',
    ui = 'Top',
    li = 'Bottom',
    be = 'padding',
    Pt = 'margin',
    qn = 'Width',
    Is = 'Height',
    Fe = 'px',
    kt = function (e) {
        return j.getComputedStyle(e)
    },
    Cf = function (e) {
        var r = kt(e).position
        e.style.position = r === 'absolute' || r === 'fixed' ? r : 'relative'
    },
    va = function (e, r) {
        for (var t in r) t in e || (e[t] = r[t])
        return e
    },
    ar = function (e, r) {
        var t =
                r &&
                kt(e)[es] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
                M.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                }).progress(1),
            n = e.getBoundingClientRect()
        return t && t.progress(0).kill(), n
    },
    rs = function (e, r) {
        var t = r.d2
        return e['offset' + t] || e['client' + t] || 0
    },
    sl = function (e) {
        var r = [],
            t = e.labels,
            n = e.duration(),
            i
        for (i in t) r.push(t[i] / n)
        return r
    },
    Ef = function (e) {
        return function (r) {
            return M.utils.snap(sl(e), r)
        }
    },
    zs = function (e) {
        var r = M.utils.snap(e),
            t =
                Array.isArray(e) &&
                e.slice(0).sort(function (n, i) {
                    return n - i
                })
        return t
            ? function (n, i, s) {
                  s === void 0 && (s = 0.001)
                  var a
                  if (!i) return r(n)
                  if (i > 0) {
                      for (n -= s, a = 0; a < t.length; a++)
                          if (t[a] >= n) return t[a]
                      return t[a - 1]
                  } else
                      for (a = t.length, n += s; a--; )
                          if (t[a] <= n) return t[a]
                  return t[0]
              }
            : function (n, i, s) {
                  s === void 0 && (s = 0.001)
                  var a = r(n)
                  return !i || Math.abs(a - n) < s || a - n < 0 == i < 0
                      ? a
                      : r(i < 0 ? n - e : n + e)
              }
    },
    Of = function (e) {
        return function (r, t) {
            return zs(sl(e))(r, t.direction)
        }
    },
    Ai = function (e, r, t, n) {
        return t.split(',').forEach(function (i) {
            return e(r, i, n)
        })
    },
    Oe = function (e, r, t, n, i) {
        return e.addEventListener(r, t, { passive: !n, capture: !!i })
    },
    Ee = function (e, r, t, n) {
        return e.removeEventListener(r, t, !!n)
    },
    Mi = function (e, r, t) {
        ;(t = t && t.wheelHandler),
            t && (e(r, 'wheel', t), e(r, 'touchmove', t))
    },
    ya = {
        startColor: 'green',
        endColor: 'red',
        indent: 0,
        fontSize: '16px',
        fontWeight: 'normal',
    },
    Di = { toggleActions: 'play', anticipatePin: 0 },
    ao = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Yi = function (e, r) {
        if (mt(e)) {
            var t = e.indexOf('='),
                n = ~t
                    ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1))
                    : 0
            ~t &&
                (e.indexOf('%') > t && (n *= r / 100),
                (e = e.substr(0, t - 1))),
                (e =
                    n +
                    (e in ao
                        ? ao[e] * r
                        : ~e.indexOf('%')
                        ? (parseFloat(e) * r) / 100
                        : parseFloat(e) || 0))
        }
        return e
    },
    Ri = function (e, r, t, n, i, s, a, u) {
        var l = i.startColor,
            c = i.endColor,
            d = i.fontSize,
            h = i.indent,
            f = i.fontWeight,
            g = ae.createElement('div'),
            p = ln(t) || Cr(t, 'pinType') === 'fixed',
            m = e.indexOf('scroller') !== -1,
            w = p ? ie : t,
            x = e.indexOf('start') !== -1,
            S = x ? l : c,
            v =
                'border-color:' +
                S +
                ';font-size:' +
                d +
                ';color:' +
                S +
                ';font-weight:' +
                f +
                ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
        return (
            (v += 'position:' + ((m || u) && p ? 'fixed;' : 'absolute;')),
            (m || u || !p) &&
                (v += (n === ke ? Ls : Fs) + ':' + (s + parseFloat(h)) + 'px;'),
            a &&
                (v +=
                    'box-sizing:border-box;text-align:left;width:' +
                    a.offsetWidth +
                    'px;'),
            (g._isStart = x),
            g.setAttribute(
                'class',
                'gsap-marker-' + e + (r ? ' marker-' + r : '')
            ),
            (g.style.cssText = v),
            (g.innerText = r || r === 0 ? e + '-' + r : e),
            w.children[0] ? w.insertBefore(g, w.children[0]) : w.appendChild(g),
            (g._offset = g['offset' + n.op.d2]),
            Hi(g, 0, n, x),
            g
        )
    },
    Hi = function (e, r, t, n) {
        var i = { display: 'block' },
            s = t[n ? 'os2' : 'p2'],
            a = t[n ? 'p2' : 'os2']
        ;(e._isFlipped = n),
            (i[t.a + 'Percent'] = n ? -100 : 0),
            (i[t.a] = n ? '1px' : 0),
            (i['border' + s + qn] = 1),
            (i['border' + a + qn] = 0),
            (i[t.p] = r + 'px'),
            M.set(e, i)
    },
    B = [],
    ns = {},
    yi,
    wa = function () {
        return et() - At > 34 && (yi || (yi = requestAnimationFrame(cr)))
    },
    wn = function () {
        ;(!gt || !gt.isPressed || gt.startX > ie.clientWidth) &&
            (W.cache++,
            gt ? yi || (yi = requestAnimationFrame(cr)) : cr(),
            At || fn('scrollStart'),
            (At = et()))
    },
    Mo = function () {
        ;(Ju = j.innerWidth), (Zu = j.innerHeight)
    },
    Jn = function () {
        W.cache++,
            !qe &&
                !Ku &&
                !ae.fullscreenElement &&
                !ae.webkitFullscreenElement &&
                (!Qu ||
                    Ju !== j.innerWidth ||
                    Math.abs(j.innerHeight - Zu) > j.innerHeight * 0.25) &&
                oo.restart(!0)
    },
    cn = {},
    Af = [],
    al = function o() {
        return Ee(z, 'scrollEnd', o) || Qr(!0)
    },
    fn = function (e) {
        return (
            (cn[e] &&
                cn[e].map(function (r) {
                    return r()
                })) ||
            Af
        )
    },
    _t = [],
    ul = function (e) {
        for (var r = 0; r < _t.length; r += 5)
            (!e || (_t[r + 4] && _t[r + 4].query === e)) &&
                ((_t[r].style.cssText = _t[r + 1]),
                _t[r].getBBox &&
                    _t[r].setAttribute('transform', _t[r + 2] || ''),
                (_t[r + 3].uncache = 1))
    },
    Ns = function (e, r) {
        var t
        for (Ze = 0; Ze < B.length; Ze++)
            (t = B[Ze]),
                t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0))
        r && ul(r), r || fn('revert')
    },
    ll = function (e, r) {
        W.cache++,
            (r || !Je) &&
                W.forEach(function (t) {
                    return rt(t) && t.cacheID++ && (t.rec = 0)
                }),
            mt(e) && (j.history.scrollRestoration = Ds = e)
    },
    Je,
    an = 0,
    ba,
    Mf = function () {
        if (ba !== an) {
            var e = (ba = an)
            requestAnimationFrame(function () {
                return e === an && Qr(!0)
            })
        }
    },
    cl = function () {
        ie.appendChild(Ln),
            (Rs = Ln.offsetHeight || j.innerHeight),
            ie.removeChild(Ln)
    },
    Qr = function (e, r) {
        if (At && !e) {
            Oe(z, 'scrollEnd', al)
            return
        }
        cl(),
            (Je = z.isRefreshing = !0),
            W.forEach(function (n) {
                return rt(n) && ++n.cacheID && (n.rec = n())
            })
        var t = fn('refreshInit')
        Gu && z.sort(),
            r || Ns(),
            W.forEach(function (n) {
                rt(n) &&
                    (n.smooth && (n.target.style.scrollBehavior = 'auto'), n(0))
            }),
            B.slice(0).forEach(function (n) {
                return n.refresh()
            }),
            B.forEach(function (n, i) {
                if (n._subPinOffset && n.pin) {
                    var s = n.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                        a = n.pin[s]
                    n.revert(!0, 1),
                        n.adjustPinSpacing(n.pin[s] - a),
                        n.refresh()
                }
            }),
            B.forEach(function (n) {
                var i = lr(n.scroller, n._dir)
                ;(n.vars.end === 'max' || (n._endClamp && n.end > i)) &&
                    n.setPositions(n.start, Math.max(n.start + 1, i), !0)
            }),
            t.forEach(function (n) {
                return n && n.render && n.render(-1)
            }),
            W.forEach(function (n) {
                rt(n) &&
                    (n.smooth &&
                        requestAnimationFrame(function () {
                            return (n.target.style.scrollBehavior = 'smooth')
                        }),
                    n.rec && n(n.rec))
            }),
            ll(Ds, 1),
            oo.pause(),
            an++,
            (Je = 2),
            cr(2),
            B.forEach(function (n) {
                return rt(n.vars.onRefresh) && n.vars.onRefresh(n)
            }),
            (Je = z.isRefreshing = !1),
            fn('refresh')
    },
    is = 0,
    ji = 1,
    ci,
    cr = function (e) {
        if (!Je || e === 2) {
            ;(z.isUpdating = !0), ci && ci.update(0)
            var r = B.length,
                t = et(),
                n = t - Oo >= 50,
                i = r && B[0].scroll()
            if (
                ((ji = is > i ? -1 : 1),
                Je || (is = i),
                n &&
                    (At && !po && t - At > 200 && ((At = 0), fn('scrollEnd')),
                    (qi = Oo),
                    (Oo = t)),
                ji < 0)
            ) {
                for (Ze = r; Ze-- > 0; ) B[Ze] && B[Ze].update(0, n)
                ji = 1
            } else for (Ze = 0; Ze < r; Ze++) B[Ze] && B[Ze].update(0, n)
            z.isUpdating = !1
        }
        yi = 0
    },
    os = [
        il,
        ol,
        Fs,
        Ls,
        Pt + li,
        Pt + si,
        Pt + ui,
        Pt + ai,
        'display',
        'flexShrink',
        'float',
        'zIndex',
        'gridColumnStart',
        'gridColumnEnd',
        'gridRowStart',
        'gridRowEnd',
        'gridArea',
        'justifySelf',
        'alignSelf',
        'placeSelf',
        'order',
    ],
    Xi = os.concat([
        on,
        sn,
        'boxSizing',
        'max' + qn,
        'max' + Is,
        'position',
        Pt,
        be,
        be + ui,
        be + si,
        be + li,
        be + ai,
    ]),
    Df = function (e, r, t) {
        Fn(t)
        var n = e._gsap
        if (n.spacerIsNative) Fn(n.spacerState)
        else if (e._gsap.swappedIn) {
            var i = r.parentNode
            i && (i.insertBefore(e, r), i.removeChild(r))
        }
        e._gsap.swappedIn = !1
    },
    Do = function (e, r, t, n) {
        if (!e._gsap.swappedIn) {
            for (var i = os.length, s = r.style, a = e.style, u; i--; )
                (u = os[i]), (s[u] = t[u])
            ;(s.position = t.position === 'absolute' ? 'absolute' : 'relative'),
                t.display === 'inline' && (s.display = 'inline-block'),
                (a[Fs] = a[Ls] = 'auto'),
                (s.flexBasis = t.flexBasis || 'auto'),
                (s.overflow = 'visible'),
                (s.boxSizing = 'border-box'),
                (s[on] = rs(e, tt) + Fe),
                (s[sn] = rs(e, ke) + Fe),
                (s[be] = a[Pt] = a[ol] = a[il] = '0'),
                Fn(n),
                (a[on] = a['max' + qn] = t[on]),
                (a[sn] = a['max' + Is] = t[sn]),
                (a[be] = t[be]),
                e.parentNode !== r &&
                    (e.parentNode.insertBefore(r, e), r.appendChild(e)),
                (e._gsap.swappedIn = !0)
        }
    },
    Rf = /([A-Z])/g,
    Fn = function (e) {
        if (e) {
            var r = e.t.style,
                t = e.length,
                n = 0,
                i,
                s
            for ((e.t._gsap || M.core.getCache(e.t)).uncache = 1; n < t; n += 2)
                (s = e[n + 1]),
                    (i = e[n]),
                    s
                        ? (r[i] = s)
                        : r[i] &&
                          r.removeProperty(i.replace(Rf, '-$1').toLowerCase())
        }
    },
    Li = function (e) {
        for (var r = Xi.length, t = e.style, n = [], i = 0; i < r; i++)
            n.push(Xi[i], t[Xi[i]])
        return (n.t = e), n
    },
    Lf = function (e, r, t) {
        for (var n = [], i = e.length, s = t ? 8 : 0, a; s < i; s += 2)
            (a = e[s]), n.push(a, a in r ? r[a] : e[s + 1])
        return (n.t = e.t), n
    },
    Vi = { left: 0, top: 0 },
    xa = function (e, r, t, n, i, s, a, u, l, c, d, h, f, g) {
        rt(e) && (e = e(u)),
            mt(e) &&
                e.substr(0, 3) === 'max' &&
                (e = h + (e.charAt(4) === '=' ? Yi('0' + e.substr(3), t) : 0))
        var p = f ? f.time() : 0,
            m,
            w,
            x
        if ((f && f.seek(0), isNaN(e) || (e = +e), Wi(e)))
            f &&
                (e = M.utils.mapRange(
                    f.scrollTrigger.start,
                    f.scrollTrigger.end,
                    0,
                    h,
                    e
                )),
                a && Hi(a, t, n, !0)
        else {
            rt(r) && (r = r(u))
            var S = (e || '0').split(' '),
                v,
                y,
                P,
                T
            ;(x = st(r, u) || ie),
                (v = ar(x) || {}),
                (!v || (!v.left && !v.top)) &&
                    kt(x).display === 'none' &&
                    ((T = x.style.display),
                    (x.style.display = 'block'),
                    (v = ar(x)),
                    T
                        ? (x.style.display = T)
                        : x.style.removeProperty('display')),
                (y = Yi(S[0], v[n.d])),
                (P = Yi(S[1] || '0', t)),
                (e = v[n.p] - l[n.p] - c + y + i - P),
                a && Hi(a, P, n, t - P < 20 || (a._isStart && P > 20)),
                (t -= t - P)
        }
        if ((g && ((u[g] = e || -0.001), e < 0 && (e = 0)), s)) {
            var C = e + t,
                k = s._isStart
            ;(m = 'scroll' + n.d2),
                Hi(
                    s,
                    C,
                    n,
                    (k && C > 20) ||
                        (!k &&
                            (d ? Math.max(ie[m], Bt[m]) : s.parentNode[m]) <=
                                C + 1)
                ),
                d &&
                    ((l = ar(a)),
                    d &&
                        (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + Fe))
        }
        return (
            f &&
                x &&
                ((m = ar(x)),
                f.seek(h),
                (w = ar(x)),
                (f._caScrollDist = m[n.p] - w[n.p]),
                (e = (e / f._caScrollDist) * h)),
            f && f.seek(p),
            f ? e : Math.round(e)
        )
    },
    Ff = /(webkit|moz|length|cssText|inset)/i,
    Ta = function (e, r, t, n) {
        if (e.parentNode !== r) {
            var i = e.style,
                s,
                a
            if (r === ie) {
                ;(e._stOrig = i.cssText), (a = kt(e))
                for (s in a)
                    !+s &&
                        !Ff.test(s) &&
                        a[s] &&
                        typeof i[s] == 'string' &&
                        s !== '0' &&
                        (i[s] = a[s])
                ;(i.top = t), (i.left = n)
            } else i.cssText = e._stOrig
            ;(M.core.getCache(e).uncache = 1), r.appendChild(e)
        }
    },
    fl = function (e, r, t) {
        var n = r,
            i = n
        return function (s) {
            var a = Math.round(e())
            return (
                a !== n &&
                    a !== i &&
                    Math.abs(a - n) > 3 &&
                    Math.abs(a - i) > 3 &&
                    ((s = a), t && t()),
                (i = n),
                (n = s),
                s
            )
        }
    },
    Fi = function (e, r, t) {
        var n = {}
        ;(n[r.p] = '+=' + t), M.set(e, n)
    },
    Sa = function (e, r) {
        var t = Ar(e, r),
            n = '_scroll' + r.p2,
            i = function s(a, u, l, c, d) {
                var h = s.tween,
                    f = u.onComplete,
                    g = {}
                l = l || t()
                var p = fl(t, l, function () {
                    h.kill(), (s.tween = 0)
                })
                return (
                    (d = (c && d) || 0),
                    (c = c || a - l),
                    h && h.kill(),
                    (u[n] = a),
                    (u.modifiers = g),
                    (g[n] = function () {
                        return p(l + c * h.ratio + d * h.ratio * h.ratio)
                    }),
                    (u.onUpdate = function () {
                        W.cache++, cr()
                    }),
                    (u.onComplete = function () {
                        ;(s.tween = 0), f && f.call(h)
                    }),
                    (h = s.tween = M.to(e, u)),
                    h
                )
            }
        return (
            (e[n] = t),
            (t.wheelHandler = function () {
                return i.tween && i.tween.kill() && (i.tween = 0)
            }),
            Oe(e, 'wheel', t.wheelHandler),
            z.isTouch && Oe(e, 'touchmove', t.wheelHandler),
            i
        )
    },
    z = (function () {
        function o(r, t) {
            Tn ||
                o.register(M) ||
                console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
                ts(this),
                this.init(r, t)
        }
        var e = o.prototype
        return (
            (e.init = function (t, n) {
                if (
                    ((this.progress = this.start = 0),
                    this.vars && this.kill(!0, !0),
                    !Qn)
                ) {
                    this.update = this.refresh = this.kill = Vt
                    return
                }
                t = va(mt(t) || Wi(t) || t.nodeType ? { trigger: t } : t, Di)
                var i = t,
                    s = i.onUpdate,
                    a = i.toggleClass,
                    u = i.id,
                    l = i.onToggle,
                    c = i.onRefresh,
                    d = i.scrub,
                    h = i.trigger,
                    f = i.pin,
                    g = i.pinSpacing,
                    p = i.invalidateOnRefresh,
                    m = i.anticipatePin,
                    w = i.onScrubComplete,
                    x = i.onSnapComplete,
                    S = i.once,
                    v = i.snap,
                    y = i.pinReparent,
                    P = i.pinSpacer,
                    T = i.containerAnimation,
                    C = i.fastScrollEnd,
                    k = i.preventOverlaps,
                    E =
                        t.horizontal ||
                        (t.containerAnimation && t.horizontal !== !1)
                            ? tt
                            : ke,
                    D = !d && d !== 0,
                    O = st(t.scroller || j),
                    K = M.core.getCache(O),
                    N = ln(O),
                    $ =
                        ('pinType' in t
                            ? t.pinType
                            : Cr(O, 'pinType') || (N && 'fixed')) === 'fixed',
                    H = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                    L = D && t.toggleActions.split(' '),
                    Y = 'markers' in t ? t.markers : Di.markers,
                    J = N ? 0 : parseFloat(kt(O)['border' + E.p2 + qn]) || 0,
                    _ = this,
                    ne =
                        t.onRefreshInit &&
                        function () {
                            return t.onRefreshInit(_)
                        },
                    Xe = Pf(O, N, E),
                    Dt = kf(O, N),
                    ce = 0,
                    Me = 0,
                    Ve = 0,
                    ve = Ar(O, E),
                    Ue,
                    Ne,
                    pr,
                    nt,
                    Wt,
                    Q,
                    ye,
                    it,
                    ft,
                    b,
                    ht,
                    tr,
                    Dr,
                    we,
                    Rr,
                    Lr,
                    Wn,
                    De,
                    pe,
                    Rt,
                    Lt,
                    Fr,
                    rr,
                    Yt,
                    ot,
                    Ir,
                    gn,
                    _n,
                    zr,
                    gr,
                    _r,
                    U,
                    Nr,
                    Ft,
                    It,
                    zt,
                    $r,
                    mn,
                    nr
                if (
                    ((_._startClamp = _._endClamp = !1),
                    (_._dir = E),
                    (m *= 45),
                    (_.scroller = O),
                    (_.scroll = T ? T.time.bind(T) : ve),
                    (nt = ve()),
                    (_.vars = t),
                    (n = n || t.animation),
                    'refreshPriority' in t &&
                        ((Gu = 1), t.refreshPriority === -9999 && (ci = _)),
                    (K.tweenScroll = K.tweenScroll || {
                        top: Sa(O, ke),
                        left: Sa(O, tt),
                    }),
                    (_.tweenTo = Ue = K.tweenScroll[E.p]),
                    (_.scrubDuration = function (A) {
                        ;(Nr = Wi(A) && A),
                            Nr
                                ? U
                                    ? U.duration(A)
                                    : (U = M.to(n, {
                                          ease: 'expo',
                                          totalProgress: '+=0',
                                          duration: Nr,
                                          paused: !0,
                                          onComplete: function () {
                                              return w && w(_)
                                          },
                                      }))
                                : (U && U.progress(1).kill(), (U = 0))
                    }),
                    n &&
                        ((n.vars.lazy = !1),
                        (n._initted && !_.isReverted) ||
                            (n.vars.immediateRender !== !1 &&
                                t.immediateRender !== !1 &&
                                n.duration() &&
                                n.render(0, !0, !0)),
                        (_.animation = n.pause()),
                        (n.scrollTrigger = _),
                        _.scrubDuration(d),
                        (gr = 0),
                        u || (u = n.vars.id)),
                    v &&
                        ((!Xr(v) || v.push) && (v = { snapTo: v }),
                        'scrollBehavior' in ie.style &&
                            M.set(N ? [ie, Bt] : O, { scrollBehavior: 'auto' }),
                        W.forEach(function (A) {
                            return (
                                rt(A) &&
                                A.target ===
                                    (N ? ae.scrollingElement || Bt : O) &&
                                (A.smooth = !1)
                            )
                        }),
                        (pr = rt(v.snapTo)
                            ? v.snapTo
                            : v.snapTo === 'labels'
                            ? Ef(n)
                            : v.snapTo === 'labelsDirectional'
                            ? Of(n)
                            : v.directional !== !1
                            ? function (A, V) {
                                  return zs(v.snapTo)(
                                      A,
                                      et() - Me < 500 ? 0 : V.direction
                                  )
                              }
                            : M.utils.snap(v.snapTo)),
                        (Ft = v.duration || { min: 0.1, max: 2 }),
                        (Ft = Xr(Ft) ? On(Ft.min, Ft.max) : On(Ft, Ft)),
                        (It = M.delayedCall(
                            v.delay || Nr / 2 || 0.1,
                            function () {
                                var A = ve(),
                                    V = et() - Me < 500,
                                    F = Ue.tween
                                if (
                                    (V || Math.abs(_.getVelocity()) < 10) &&
                                    !F &&
                                    !po &&
                                    ce !== A
                                ) {
                                    var q = (A - Q) / we,
                                        Ce = n && !D ? n.totalProgress() : q,
                                        G = V
                                            ? 0
                                            : ((Ce - _r) / (et() - qi)) * 1e3 ||
                                              0,
                                        ge = M.utils.clamp(
                                            -q,
                                            1 - q,
                                            (yn(G / 2) * G) / 0.185
                                        ),
                                        Ge = q + (v.inertia === !1 ? 0 : ge),
                                        Re = On(0, 1, pr(Ge, _)),
                                        oe = Math.round(Q + Re * we),
                                        ee = v,
                                        Nt = ee.onStart,
                                        se = ee.onInterrupt,
                                        dt = ee.onComplete
                                    if (A <= ye && A >= Q && oe !== A) {
                                        if (
                                            F &&
                                            !F._initted &&
                                            F.data <= yn(oe - A)
                                        )
                                            return
                                        v.inertia === !1 && (ge = Re - q),
                                            Ue(
                                                oe,
                                                {
                                                    duration: Ft(
                                                        yn(
                                                            (Math.max(
                                                                yn(Ge - Ce),
                                                                yn(Re - Ce)
                                                            ) *
                                                                0.185) /
                                                                G /
                                                                0.05 || 0
                                                        )
                                                    ),
                                                    ease: v.ease || 'power3',
                                                    data: yn(oe - A),
                                                    onInterrupt: function () {
                                                        return (
                                                            It.restart(!0) &&
                                                            se &&
                                                            se(_)
                                                        )
                                                    },
                                                    onComplete: function () {
                                                        _.update(),
                                                            (ce = ve()),
                                                            (gr = _r =
                                                                n && !D
                                                                    ? n.totalProgress()
                                                                    : _.progress),
                                                            x && x(_),
                                                            dt && dt(_)
                                                    },
                                                },
                                                A,
                                                ge * we,
                                                oe - A - ge * we
                                            ),
                                            Nt && Nt(_, Ue.tween)
                                    }
                                } else _.isActive && ce !== A && It.restart(!0)
                            }
                        ).pause())),
                    u && (ns[u] = _),
                    (h = _.trigger = st(h || (f !== !0 && f))),
                    (nr = h && h._gsap && h._gsap.stRevert),
                    nr && (nr = nr(_)),
                    (f = f === !0 ? h : st(f)),
                    mt(a) && (a = { targets: h, className: a }),
                    f &&
                        (g === !1 ||
                            g === Pt ||
                            (g =
                                !g &&
                                f.parentNode &&
                                f.parentNode.style &&
                                kt(f.parentNode).display === 'flex'
                                    ? !1
                                    : be),
                        (_.pin = f),
                        (Ne = M.core.getCache(f)),
                        Ne.spacer
                            ? (Rr = Ne.pinState)
                            : (P &&
                                  ((P = st(P)),
                                  P &&
                                      !P.nodeType &&
                                      (P = P.current || P.nativeElement),
                                  (Ne.spacerIsNative = !!P),
                                  P && (Ne.spacerState = Li(P))),
                              (Ne.spacer = De = P || ae.createElement('div')),
                              De.classList.add('pin-spacer'),
                              u && De.classList.add('pin-spacer-' + u),
                              (Ne.pinState = Rr = Li(f))),
                        t.force3D !== !1 && M.set(f, { force3D: !0 }),
                        (_.spacer = De = Ne.spacer),
                        (zr = kt(f)),
                        (Yt = zr[g + E.os2]),
                        (Rt = M.getProperty(f)),
                        (Lt = M.quickSetter(f, E.a, Fe)),
                        Do(f, De, zr),
                        (Wn = Li(f))),
                    Y)
                ) {
                    ;(tr = Xr(Y) ? va(Y, ya) : ya),
                        (b = Ri('scroller-start', u, O, E, tr, 0)),
                        (ht = Ri('scroller-end', u, O, E, tr, 0, b)),
                        (pe = b['offset' + E.op.d2])
                    var I = st(Cr(O, 'content') || O)
                    ;(it = this.markerStart =
                        Ri('start', u, I, E, tr, pe, 0, T)),
                        (ft = this.markerEnd =
                            Ri('end', u, I, E, tr, pe, 0, T)),
                        T && (mn = M.quickSetter([it, ft], E.a, Fe)),
                        !$ &&
                            !(Jt.length && Cr(O, 'fixedMarkers') === !0) &&
                            (Cf(N ? ie : O),
                            M.set([b, ht], { force3D: !0 }),
                            (Ir = M.quickSetter(b, E.a, Fe)),
                            (_n = M.quickSetter(ht, E.a, Fe)))
                }
                if (T) {
                    var R = T.vars.onUpdate,
                        Z = T.vars.onUpdateParams
                    T.eventCallback('onUpdate', function () {
                        _.update(0, 0, 1), R && R.apply(T, Z || [])
                    })
                }
                if (
                    ((_.previous = function () {
                        return B[B.indexOf(_) - 1]
                    }),
                    (_.next = function () {
                        return B[B.indexOf(_) + 1]
                    }),
                    (_.revert = function (A, V) {
                        if (!V) return _.kill(!0)
                        var F = A !== !1 || !_.enabled,
                            q = qe
                        F !== _.isReverted &&
                            (F &&
                                ((zt = Math.max(ve(), _.scroll.rec || 0)),
                                (Ve = _.progress),
                                ($r = n && n.progress())),
                            it &&
                                [it, ft, b, ht].forEach(function (Ce) {
                                    return (Ce.style.display = F
                                        ? 'none'
                                        : 'block')
                                }),
                            F && ((qe = _), _.update(F)),
                            f &&
                                (!y || !_.isActive) &&
                                (F ? Df(f, De, Rr) : Do(f, De, kt(f), ot)),
                            F || _.update(F),
                            (qe = q),
                            (_.isReverted = F))
                    }),
                    (_.refresh = function (A, V, F, q) {
                        if (!((qe || !_.enabled) && !V)) {
                            if (f && A && At) {
                                Oe(o, 'scrollEnd', al)
                                return
                            }
                            !Je && ne && ne(_),
                                (qe = _),
                                Ue.tween &&
                                    !F &&
                                    (Ue.tween.kill(), (Ue.tween = 0)),
                                U && U.pause(),
                                p && n && n.revert({ kill: !1 }).invalidate(),
                                _.isReverted || _.revert(!0, !0),
                                (_._subPinOffset = !1)
                            var Ce = Xe(),
                                G = Dt(),
                                ge = T ? T.duration() : lr(O, E),
                                Ge = we <= 0.01,
                                Re = 0,
                                oe = q || 0,
                                ee = Xr(F) ? F.end : t.end,
                                Nt = t.endTrigger || h,
                                se = Xr(F)
                                    ? F.start
                                    : t.start ||
                                      (t.start === 0 || !h
                                          ? 0
                                          : f
                                          ? '0 0'
                                          : '0 100%'),
                                dt = (_.pinnedContainer =
                                    t.pinnedContainer &&
                                    st(t.pinnedContainer, _)),
                                Ht = (h && Math.max(0, B.indexOf(_))) || 0,
                                pt = Ht,
                                Le,
                                $e,
                                Br,
                                xi,
                                Be,
                                Se,
                                jt,
                                _o,
                                Hs,
                                Yn,
                                Xt,
                                Hn,
                                Ti
                            for (
                                Y &&
                                Xr(F) &&
                                ((Hn = M.getProperty(b, E.p)),
                                (Ti = M.getProperty(ht, E.p)));
                                pt--;

                            )
                                (Se = B[pt]),
                                    Se.end || Se.refresh(0, 1) || (qe = _),
                                    (jt = Se.pin),
                                    jt &&
                                        (jt === h || jt === f || jt === dt) &&
                                        !Se.isReverted &&
                                        (Yn || (Yn = []),
                                        Yn.unshift(Se),
                                        Se.revert(!0, !0)),
                                    Se !== B[pt] && (Ht--, pt--)
                            for (
                                rt(se) && (se = se(_)),
                                    se = pa(se, 'start', _),
                                    Q =
                                        xa(
                                            se,
                                            h,
                                            Ce,
                                            E,
                                            ve(),
                                            it,
                                            b,
                                            _,
                                            G,
                                            J,
                                            $,
                                            ge,
                                            T,
                                            _._startClamp && '_startClamp'
                                        ) || (f ? -0.001 : 0),
                                    rt(ee) && (ee = ee(_)),
                                    mt(ee) &&
                                        !ee.indexOf('+=') &&
                                        (~ee.indexOf(' ')
                                            ? (ee =
                                                  (mt(se)
                                                      ? se.split(' ')[0]
                                                      : '') + ee)
                                            : ((Re = Yi(ee.substr(2), Ce)),
                                              (ee = mt(se)
                                                  ? se
                                                  : (T
                                                        ? M.utils.mapRange(
                                                              0,
                                                              T.duration(),
                                                              T.scrollTrigger
                                                                  .start,
                                                              T.scrollTrigger
                                                                  .end,
                                                              Q
                                                          )
                                                        : Q) + Re),
                                              (Nt = h))),
                                    ee = pa(ee, 'end', _),
                                    ye =
                                        Math.max(
                                            Q,
                                            xa(
                                                ee || (Nt ? '100% 0' : ge),
                                                Nt,
                                                Ce,
                                                E,
                                                ve() + Re,
                                                ft,
                                                ht,
                                                _,
                                                G,
                                                J,
                                                $,
                                                ge,
                                                T,
                                                _._endClamp && '_endClamp'
                                            )
                                        ) || -0.001,
                                    Re = 0,
                                    pt = Ht;
                                pt--;

                            )
                                (Se = B[pt]),
                                    (jt = Se.pin),
                                    jt &&
                                        Se.start - Se._pinPush <= Q &&
                                        !T &&
                                        Se.end > 0 &&
                                        ((Le =
                                            Se.end -
                                            (_._startClamp
                                                ? Math.max(0, Se.start)
                                                : Se.start)),
                                        ((jt === h &&
                                            Se.start - Se._pinPush < Q) ||
                                            jt === dt) &&
                                            isNaN(se) &&
                                            (Re += Le * (1 - Se.progress)),
                                        jt === f && (oe += Le))
                            if (
                                ((Q += Re),
                                (ye += Re),
                                _._startClamp && (_._startClamp += Re),
                                _._endClamp &&
                                    !Je &&
                                    ((_._endClamp = ye || -0.001),
                                    (ye = Math.min(ye, lr(O, E)))),
                                (we = ye - Q || ((Q -= 0.01) && 0.001)),
                                Ge &&
                                    (Ve = M.utils.clamp(
                                        0,
                                        1,
                                        M.utils.normalize(Q, ye, zt)
                                    )),
                                (_._pinPush = oe),
                                it &&
                                    Re &&
                                    ((Le = {}),
                                    (Le[E.a] = '+=' + Re),
                                    dt && (Le[E.p] = '-=' + ve()),
                                    M.set([it, ft], Le)),
                                f)
                            )
                                (Le = kt(f)),
                                    (xi = E === ke),
                                    (Br = ve()),
                                    (Fr = parseFloat(Rt(E.a)) + oe),
                                    !ge &&
                                        ye > 1 &&
                                        ((Xt = (
                                            N ? ae.scrollingElement || Bt : O
                                        ).style),
                                        (Xt = {
                                            style: Xt,
                                            value: Xt[
                                                'overflow' + E.a.toUpperCase()
                                            ],
                                        }),
                                        N &&
                                            kt(ie)[
                                                'overflow' + E.a.toUpperCase()
                                            ] !== 'scroll' &&
                                            (Xt.style[
                                                'overflow' + E.a.toUpperCase()
                                            ] = 'scroll')),
                                    Do(f, De, Le),
                                    (Wn = Li(f)),
                                    ($e = ar(f, !0)),
                                    (_o = $ && Ar(O, xi ? tt : ke)()),
                                    g &&
                                        ((ot = [g + E.os2, we + oe + Fe]),
                                        (ot.t = De),
                                        (pt =
                                            g === be ? rs(f, E) + we + oe : 0),
                                        pt && ot.push(E.d, pt + Fe),
                                        Fn(ot),
                                        dt &&
                                            B.forEach(function (jn) {
                                                jn.pin === dt &&
                                                    jn.vars.pinSpacing !== !1 &&
                                                    (jn._subPinOffset = !0)
                                            }),
                                        $ && ve(zt)),
                                    $ &&
                                        ((Be = {
                                            top:
                                                $e.top +
                                                (xi ? Br - Q : _o) +
                                                Fe,
                                            left:
                                                $e.left +
                                                (xi ? _o : Br - Q) +
                                                Fe,
                                            boxSizing: 'border-box',
                                            position: 'fixed',
                                        }),
                                        (Be[on] = Be['max' + qn] =
                                            Math.ceil($e.width) + Fe),
                                        (Be[sn] = Be['max' + Is] =
                                            Math.ceil($e.height) + Fe),
                                        (Be[Pt] =
                                            Be[Pt + ui] =
                                            Be[Pt + si] =
                                            Be[Pt + li] =
                                            Be[Pt + ai] =
                                                '0'),
                                        (Be[be] = Le[be]),
                                        (Be[be + ui] = Le[be + ui]),
                                        (Be[be + si] = Le[be + si]),
                                        (Be[be + li] = Le[be + li]),
                                        (Be[be + ai] = Le[be + ai]),
                                        (Lr = Lf(Rr, Be, y)),
                                        Je && ve(0)),
                                    n
                                        ? ((Hs = n._initted),
                                          Co(1),
                                          n.render(n.duration(), !0, !0),
                                          (rr = Rt(E.a) - Fr + we + oe),
                                          (gn = Math.abs(we - rr) > 1),
                                          $ &&
                                              gn &&
                                              Lr.splice(Lr.length - 2, 2),
                                          n.render(0, !0, !0),
                                          Hs || n.invalidate(!0),
                                          n.parent ||
                                              n.totalTime(n.totalTime()),
                                          Co(0))
                                        : (rr = we),
                                    Xt &&
                                        (Xt.value
                                            ? (Xt.style[
                                                  'overflow' + E.a.toUpperCase()
                                              ] = Xt.value)
                                            : Xt.style.removeProperty(
                                                  'overflow-' + E.a
                                              ))
                            else if (h && ve() && !T)
                                for ($e = h.parentNode; $e && $e !== ie; )
                                    $e._pinOffset &&
                                        ((Q -= $e._pinOffset),
                                        (ye -= $e._pinOffset)),
                                        ($e = $e.parentNode)
                            Yn &&
                                Yn.forEach(function (jn) {
                                    return jn.revert(!1, !0)
                                }),
                                (_.start = Q),
                                (_.end = ye),
                                (nt = Wt = Je ? zt : ve()),
                                !T &&
                                    !Je &&
                                    (nt < zt && ve(zt), (_.scroll.rec = 0)),
                                _.revert(!1, !0),
                                (Me = et()),
                                It && ((ce = -1), It.restart(!0)),
                                (qe = 0),
                                n &&
                                    D &&
                                    (n._initted || $r) &&
                                    n.progress() !== $r &&
                                    n
                                        .progress($r || 0, !0)
                                        .render(n.time(), !0, !0),
                                (Ge || Ve !== _.progress || T) &&
                                    (n &&
                                        !D &&
                                        n.totalProgress(
                                            T && Q < -0.001 && !Ve
                                                ? M.utils.normalize(Q, ye, 0)
                                                : Ve,
                                            !0
                                        ),
                                    (_.progress =
                                        Ge || (nt - Q) / we === Ve ? 0 : Ve)),
                                f &&
                                    g &&
                                    (De._pinOffset = Math.round(
                                        _.progress * rr
                                    )),
                                U && U.invalidate(),
                                isNaN(Hn) ||
                                    ((Hn -= M.getProperty(b, E.p)),
                                    (Ti -= M.getProperty(ht, E.p)),
                                    Fi(b, E, Hn),
                                    Fi(it, E, Hn - (q || 0)),
                                    Fi(ht, E, Ti),
                                    Fi(ft, E, Ti - (q || 0))),
                                Ge && !Je && _.update(),
                                c && !Je && !Dr && ((Dr = !0), c(_), (Dr = !1))
                        }
                    }),
                    (_.getVelocity = function () {
                        return ((ve() - Wt) / (et() - qi)) * 1e3 || 0
                    }),
                    (_.endAnimation = function () {
                        Un(_.callbackAnimation),
                            n &&
                                (U
                                    ? U.progress(1)
                                    : n.paused()
                                    ? D || Un(n, _.direction < 0, 1)
                                    : Un(n, n.reversed()))
                    }),
                    (_.labelToScroll = function (A) {
                        return (
                            (n &&
                                n.labels &&
                                (Q || _.refresh() || Q) +
                                    (n.labels[A] / n.duration()) * we) ||
                            0
                        )
                    }),
                    (_.getTrailing = function (A) {
                        var V = B.indexOf(_),
                            F =
                                _.direction > 0
                                    ? B.slice(0, V).reverse()
                                    : B.slice(V + 1)
                        return (
                            mt(A)
                                ? F.filter(function (q) {
                                      return q.vars.preventOverlaps === A
                                  })
                                : F
                        ).filter(function (q) {
                            return _.direction > 0 ? q.end <= Q : q.start >= ye
                        })
                    }),
                    (_.update = function (A, V, F) {
                        if (!(T && !F && !A)) {
                            var q = Je === !0 ? zt : _.scroll(),
                                Ce = A ? 0 : (q - Q) / we,
                                G = Ce < 0 ? 0 : Ce > 1 ? 1 : Ce || 0,
                                ge = _.progress,
                                Ge,
                                Re,
                                oe,
                                ee,
                                Nt,
                                se,
                                dt,
                                Ht
                            if (
                                (V &&
                                    ((Wt = nt),
                                    (nt = T ? ve() : q),
                                    v &&
                                        ((_r = gr),
                                        (gr =
                                            n && !D ? n.totalProgress() : G))),
                                m &&
                                    !G &&
                                    f &&
                                    !qe &&
                                    !Ei &&
                                    At &&
                                    Q < q + ((q - Wt) / (et() - qi)) * m &&
                                    (G = 1e-4),
                                G !== ge && _.enabled)
                            ) {
                                if (
                                    ((Ge = _.isActive = !!G && G < 1),
                                    (Re = !!ge && ge < 1),
                                    (se = Ge !== Re),
                                    (Nt = se || !!G != !!ge),
                                    (_.direction = G > ge ? 1 : -1),
                                    (_.progress = G),
                                    Nt &&
                                        !qe &&
                                        ((oe =
                                            G && !ge
                                                ? 0
                                                : G === 1
                                                ? 1
                                                : ge === 1
                                                ? 2
                                                : 3),
                                        D &&
                                            ((ee =
                                                (!se &&
                                                    L[oe + 1] !== 'none' &&
                                                    L[oe + 1]) ||
                                                L[oe]),
                                            (Ht =
                                                n &&
                                                (ee === 'complete' ||
                                                    ee === 'reset' ||
                                                    ee in n)))),
                                    k &&
                                        (se || Ht) &&
                                        (Ht || d || !n) &&
                                        (rt(k)
                                            ? k(_)
                                            : _.getTrailing(k).forEach(
                                                  function (Br) {
                                                      return Br.endAnimation()
                                                  }
                                              )),
                                    D ||
                                        (U && !qe && !Ei
                                            ? (U._dp._time - U._start !==
                                                  U._time &&
                                                  U.render(
                                                      U._dp._time - U._start
                                                  ),
                                              U.resetTo
                                                  ? U.resetTo(
                                                        'totalProgress',
                                                        G,
                                                        n._tTime / n._tDur
                                                    )
                                                  : ((U.vars.totalProgress = G),
                                                    U.invalidate().restart()))
                                            : n &&
                                              n.totalProgress(
                                                  G,
                                                  !!(qe && (Me || A))
                                              )),
                                    f)
                                ) {
                                    if (
                                        (A && g && (De.style[g + E.os2] = Yt),
                                        !$)
                                    )
                                        Lt(Zn(Fr + rr * G))
                                    else if (Nt) {
                                        if (
                                            ((dt =
                                                !A &&
                                                G > ge &&
                                                ye + 1 > q &&
                                                q + 1 >= lr(O, E)),
                                            y)
                                        )
                                            if (!A && (Ge || dt)) {
                                                var pt = ar(f, !0),
                                                    Le = q - Q
                                                Ta(
                                                    f,
                                                    ie,
                                                    pt.top +
                                                        (E === ke ? Le : 0) +
                                                        Fe,
                                                    pt.left +
                                                        (E === ke ? 0 : Le) +
                                                        Fe
                                                )
                                            } else Ta(f, De)
                                        Fn(Ge || dt ? Lr : Wn),
                                            (gn && G < 1 && Ge) ||
                                                Lt(
                                                    Fr +
                                                        (G === 1 && !dt
                                                            ? rr
                                                            : 0)
                                                )
                                    }
                                }
                                v && !Ue.tween && !qe && !Ei && It.restart(!0),
                                    a &&
                                        (se || (S && G && (G < 1 || !Eo))) &&
                                        so(a.targets).forEach(function (Br) {
                                            return Br.classList[
                                                Ge || S ? 'add' : 'remove'
                                            ](a.className)
                                        }),
                                    s && !D && !A && s(_),
                                    Nt && !qe
                                        ? (D &&
                                              (Ht &&
                                                  (ee === 'complete'
                                                      ? n
                                                            .pause()
                                                            .totalProgress(1)
                                                      : ee === 'reset'
                                                      ? n.restart(!0).pause()
                                                      : ee === 'restart'
                                                      ? n.restart(!0)
                                                      : n[ee]()),
                                              s && s(_)),
                                          (se || !Eo) &&
                                              (l && se && Ao(_, l),
                                              H[oe] && Ao(_, H[oe]),
                                              S &&
                                                  (G === 1
                                                      ? _.kill(!1, 1)
                                                      : (H[oe] = 0)),
                                              se ||
                                                  ((oe = G === 1 ? 1 : 3),
                                                  H[oe] && Ao(_, H[oe]))),
                                          C &&
                                              !Ge &&
                                              Math.abs(_.getVelocity()) >
                                                  (Wi(C) ? C : 2500) &&
                                              (Un(_.callbackAnimation),
                                              U
                                                  ? U.progress(1)
                                                  : Un(
                                                        n,
                                                        ee === 'reverse'
                                                            ? 1
                                                            : !G,
                                                        1
                                                    )))
                                        : D && s && !qe && s(_)
                            }
                            if (_n) {
                                var $e = T
                                    ? (q / T.duration()) *
                                      (T._caScrollDist || 0)
                                    : q
                                Ir($e + (b._isFlipped ? 1 : 0)), _n($e)
                            }
                            mn &&
                                mn((-q / T.duration()) * (T._caScrollDist || 0))
                        }
                    }),
                    (_.enable = function (A, V) {
                        _.enabled ||
                            ((_.enabled = !0),
                            Oe(O, 'resize', Jn),
                            N || Oe(O, 'scroll', wn),
                            ne && Oe(o, 'refreshInit', ne),
                            A !== !1 &&
                                ((_.progress = Ve = 0), (nt = Wt = ce = ve())),
                            V !== !1 && _.refresh())
                    }),
                    (_.getTween = function (A) {
                        return A && Ue ? Ue.tween : U
                    }),
                    (_.setPositions = function (A, V, F, q) {
                        if (T) {
                            var Ce = T.scrollTrigger,
                                G = T.duration(),
                                ge = Ce.end - Ce.start
                            ;(A = Ce.start + (ge * A) / G),
                                (V = Ce.start + (ge * V) / G)
                        }
                        _.refresh(
                            !1,
                            !1,
                            {
                                start: ga(A, F && !!_._startClamp),
                                end: ga(V, F && !!_._endClamp),
                            },
                            q
                        ),
                            _.update()
                    }),
                    (_.adjustPinSpacing = function (A) {
                        if (ot && A) {
                            var V = ot.indexOf(E.d) + 1
                            ;(ot[V] = parseFloat(ot[V]) + A + Fe),
                                (ot[1] = parseFloat(ot[1]) + A + Fe),
                                Fn(ot)
                        }
                    }),
                    (_.disable = function (A, V) {
                        if (
                            _.enabled &&
                            (A !== !1 && _.revert(!0, !0),
                            (_.enabled = _.isActive = !1),
                            V || (U && U.pause()),
                            (zt = 0),
                            Ne && (Ne.uncache = 1),
                            ne && Ee(o, 'refreshInit', ne),
                            It &&
                                (It.pause(),
                                Ue.tween && Ue.tween.kill() && (Ue.tween = 0)),
                            !N)
                        ) {
                            for (var F = B.length; F--; )
                                if (B[F].scroller === O && B[F] !== _) return
                            Ee(O, 'resize', Jn), N || Ee(O, 'scroll', wn)
                        }
                    }),
                    (_.kill = function (A, V) {
                        _.disable(A, V), U && !V && U.kill(), u && delete ns[u]
                        var F = B.indexOf(_)
                        F >= 0 && B.splice(F, 1),
                            F === Ze && ji > 0 && Ze--,
                            (F = 0),
                            B.forEach(function (q) {
                                return q.scroller === _.scroller && (F = 1)
                            }),
                            F || Je || (_.scroll.rec = 0),
                            n &&
                                ((n.scrollTrigger = null),
                                A && n.revert({ kill: !1 }),
                                V || n.kill()),
                            it &&
                                [it, ft, b, ht].forEach(function (q) {
                                    return (
                                        q.parentNode &&
                                        q.parentNode.removeChild(q)
                                    )
                                }),
                            ci === _ && (ci = 0),
                            f &&
                                (Ne && (Ne.uncache = 1),
                                (F = 0),
                                B.forEach(function (q) {
                                    return q.pin === f && F++
                                }),
                                F || (Ne.spacer = 0)),
                            t.onKill && t.onKill(_)
                    }),
                    B.push(_),
                    _.enable(!1, !1),
                    nr && nr(_),
                    n && n.add && !we)
                ) {
                    var fe = _.update
                    ;(_.update = function () {
                        ;(_.update = fe), Q || ye || _.refresh()
                    }),
                        M.delayedCall(0.01, _.update),
                        (we = 0.01),
                        (Q = ye = 0)
                } else _.refresh()
                f && Mf()
            }),
            (o.register = function (t) {
                return (
                    Tn ||
                        ((M = t || tl()),
                        el() && window.document && o.enable(),
                        (Tn = Qn)),
                    Tn
                )
            }),
            (o.defaults = function (t) {
                if (t) for (var n in t) Di[n] = t[n]
                return Di
            }),
            (o.disable = function (t, n) {
                ;(Qn = 0),
                    B.forEach(function (s) {
                        return s[n ? 'kill' : 'disable'](t)
                    }),
                    Ee(j, 'wheel', wn),
                    Ee(ae, 'scroll', wn),
                    clearInterval(Ci),
                    Ee(ae, 'touchcancel', Vt),
                    Ee(ie, 'touchstart', Vt),
                    Ai(Ee, ae, 'pointerdown,touchstart,mousedown', _a),
                    Ai(Ee, ae, 'pointerup,touchend,mouseup', ma),
                    oo.kill(),
                    Oi(Ee)
                for (var i = 0; i < W.length; i += 3)
                    Mi(Ee, W[i], W[i + 1]), Mi(Ee, W[i], W[i + 2])
            }),
            (o.enable = function () {
                if (
                    ((j = window),
                    (ae = document),
                    (Bt = ae.documentElement),
                    (ie = ae.body),
                    M &&
                        ((so = M.utils.toArray),
                        (On = M.utils.clamp),
                        (ts = M.core.context || Vt),
                        (Co = M.core.suppressOverwrites || Vt),
                        (Ds = j.history.scrollRestoration || 'auto'),
                        (is = j.pageYOffset),
                        M.core.globals('ScrollTrigger', o),
                        ie))
                ) {
                    ;(Qn = 1),
                        (Ln = document.createElement('div')),
                        (Ln.style.height = '100vh'),
                        (Ln.style.position = 'absolute'),
                        cl(),
                        Sf(),
                        Te.register(M),
                        (o.isTouch = Te.isTouch),
                        (mr =
                            Te.isTouch &&
                            /(iPad|iPhone|iPod|Mac)/g.test(
                                navigator.userAgent
                            )),
                        Oe(j, 'wheel', wn),
                        (Uu = [j, ae, Bt, ie]),
                        M.matchMedia
                            ? ((o.matchMedia = function (u) {
                                  var l = M.matchMedia(),
                                      c
                                  for (c in u) l.add(c, u[c])
                                  return l
                              }),
                              M.addEventListener('matchMediaInit', function () {
                                  return Ns()
                              }),
                              M.addEventListener(
                                  'matchMediaRevert',
                                  function () {
                                      return ul()
                                  }
                              ),
                              M.addEventListener('matchMedia', function () {
                                  Qr(0, 1), fn('matchMedia')
                              }),
                              M.matchMedia(
                                  '(orientation: portrait)',
                                  function () {
                                      return Mo(), Mo
                                  }
                              ))
                            : console.warn('Requires GSAP 3.11.0 or later'),
                        Mo(),
                        Oe(ae, 'scroll', wn)
                    var t = ie.style,
                        n = t.borderTopStyle,
                        i = M.core.Animation.prototype,
                        s,
                        a
                    for (
                        i.revert ||
                            Object.defineProperty(i, 'revert', {
                                value: function () {
                                    return this.time(-0.01, !0)
                                },
                            }),
                            t.borderTopStyle = 'solid',
                            s = ar(ie),
                            ke.m = Math.round(s.top + ke.sc()) || 0,
                            tt.m = Math.round(s.left + tt.sc()) || 0,
                            n
                                ? (t.borderTopStyle = n)
                                : t.removeProperty('border-top-style'),
                            Ci = setInterval(wa, 250),
                            M.delayedCall(0.5, function () {
                                return (Ei = 0)
                            }),
                            Oe(ae, 'touchcancel', Vt),
                            Oe(ie, 'touchstart', Vt),
                            Ai(Oe, ae, 'pointerdown,touchstart,mousedown', _a),
                            Ai(Oe, ae, 'pointerup,touchend,mouseup', ma),
                            es = M.utils.checkPrefix('transform'),
                            Xi.push(es),
                            Tn = et(),
                            oo = M.delayedCall(0.2, Qr).pause(),
                            Sn = [
                                ae,
                                'visibilitychange',
                                function () {
                                    var u = j.innerWidth,
                                        l = j.innerHeight
                                    ae.hidden
                                        ? ((ha = u), (da = l))
                                        : (ha !== u || da !== l) && Jn()
                                },
                                ae,
                                'DOMContentLoaded',
                                Qr,
                                j,
                                'load',
                                Qr,
                                j,
                                'resize',
                                Jn,
                            ],
                            Oi(Oe),
                            B.forEach(function (u) {
                                return u.enable(0, 1)
                            }),
                            a = 0;
                        a < W.length;
                        a += 3
                    )
                        Mi(Ee, W[a], W[a + 1]), Mi(Ee, W[a], W[a + 2])
                }
            }),
            (o.config = function (t) {
                'limitCallbacks' in t && (Eo = !!t.limitCallbacks)
                var n = t.syncInterval
                ;(n && clearInterval(Ci)) || ((Ci = n) && setInterval(wa, n)),
                    'ignoreMobileResize' in t &&
                        (Qu = o.isTouch === 1 && t.ignoreMobileResize),
                    'autoRefreshEvents' in t &&
                        (Oi(Ee) || Oi(Oe, t.autoRefreshEvents || 'none'),
                        (Ku =
                            (t.autoRefreshEvents + '').indexOf('resize') ===
                            -1))
            }),
            (o.scrollerProxy = function (t, n) {
                var i = st(t),
                    s = W.indexOf(i),
                    a = ln(i)
                ~s && W.splice(s, a ? 6 : 2),
                    n && (a ? Jt.unshift(j, n, ie, n, Bt, n) : Jt.unshift(i, n))
            }),
            (o.clearMatchMedia = function (t) {
                B.forEach(function (n) {
                    return n._ctx && n._ctx.query === t && n._ctx.kill(!0, !0)
                })
            }),
            (o.isInViewport = function (t, n, i) {
                var s = (mt(t) ? st(t) : t).getBoundingClientRect(),
                    a = s[i ? on : sn] * n || 0
                return i
                    ? s.right - a > 0 && s.left + a < j.innerWidth
                    : s.bottom - a > 0 && s.top + a < j.innerHeight
            }),
            (o.positionInViewport = function (t, n, i) {
                mt(t) && (t = st(t))
                var s = t.getBoundingClientRect(),
                    a = s[i ? on : sn],
                    u =
                        n == null
                            ? a / 2
                            : n in ao
                            ? ao[n] * a
                            : ~n.indexOf('%')
                            ? (parseFloat(n) * a) / 100
                            : parseFloat(n) || 0
                return i
                    ? (s.left + u) / j.innerWidth
                    : (s.top + u) / j.innerHeight
            }),
            (o.killAll = function (t) {
                if (
                    (B.slice(0).forEach(function (i) {
                        return i.vars.id !== 'ScrollSmoother' && i.kill()
                    }),
                    t !== !0)
                ) {
                    var n = cn.killAll || []
                    ;(cn = {}),
                        n.forEach(function (i) {
                            return i()
                        })
                }
            }),
            o
        )
    })()
z.version = '3.12.2'
z.saveStyles = function (o) {
    return o
        ? so(o).forEach(function (e) {
              if (e && e.style) {
                  var r = _t.indexOf(e)
                  r >= 0 && _t.splice(r, 5),
                      _t.push(
                          e,
                          e.style.cssText,
                          e.getBBox && e.getAttribute('transform'),
                          M.core.getCache(e),
                          ts()
                      )
              }
          })
        : _t
}
z.revert = function (o, e) {
    return Ns(!o, e)
}
z.create = function (o, e) {
    return new z(o, e)
}
z.refresh = function (o) {
    return o ? Jn() : (Tn || z.register()) && Qr(!0)
}
z.update = function (o) {
    return ++W.cache && cr(o === !0 ? 2 : 0)
}
z.clearScrollMemory = ll
z.maxScroll = function (o, e) {
    return lr(o, e ? tt : ke)
}
z.getScrollFunc = function (o, e) {
    return Ar(st(o), e ? tt : ke)
}
z.getById = function (o) {
    return ns[o]
}
z.getAll = function () {
    return B.filter(function (o) {
        return o.vars.id !== 'ScrollSmoother'
    })
}
z.isScrolling = function () {
    return !!At
}
z.snapDirectional = zs
z.addEventListener = function (o, e) {
    var r = cn[o] || (cn[o] = [])
    ~r.indexOf(e) || r.push(e)
}
z.removeEventListener = function (o, e) {
    var r = cn[o],
        t = r && r.indexOf(e)
    t >= 0 && r.splice(t, 1)
}
z.batch = function (o, e) {
    var r = [],
        t = {},
        n = e.interval || 0.016,
        i = e.batchMax || 1e9,
        s = function (l, c) {
            var d = [],
                h = [],
                f = M.delayedCall(n, function () {
                    c(d, h), (d = []), (h = [])
                }).pause()
            return function (g) {
                d.length || f.restart(!0),
                    d.push(g.trigger),
                    h.push(g),
                    i <= d.length && f.progress(1)
            }
        },
        a
    for (a in e)
        t[a] =
            a.substr(0, 2) === 'on' && rt(e[a]) && a !== 'onRefreshInit'
                ? s(a, e[a])
                : e[a]
    return (
        rt(i) &&
            ((i = i()),
            Oe(z, 'refresh', function () {
                return (i = e.batchMax())
            })),
        so(o).forEach(function (u) {
            var l = {}
            for (a in t) l[a] = t[a]
            ;(l.trigger = u), r.push(z.create(l))
        }),
        r
    )
}
var Pa = function (e, r, t, n) {
        return (
            r > n ? e(n) : r < 0 && e(0),
            t > n ? (n - r) / (t - r) : t < 0 ? r / (r - t) : 1
        )
    },
    Ro = function o(e, r) {
        r === !0
            ? e.style.removeProperty('touch-action')
            : (e.style.touchAction =
                  r === !0
                      ? 'auto'
                      : r
                      ? 'pan-' + r + (Te.isTouch ? ' pinch-zoom' : '')
                      : 'none'),
            e === Bt && o(ie, r)
    },
    Ii = { auto: 1, scroll: 1 },
    If = function (e) {
        var r = e.event,
            t = e.target,
            n = e.axis,
            i = (r.changedTouches ? r.changedTouches[0] : r).target,
            s = i._gsap || M.core.getCache(i),
            a = et(),
            u
        if (!s._isScrollT || a - s._isScrollT > 2e3) {
            for (
                ;
                i &&
                i !== ie &&
                ((i.scrollHeight <= i.clientHeight &&
                    i.scrollWidth <= i.clientWidth) ||
                    !(Ii[(u = kt(i)).overflowY] || Ii[u.overflowX]));

            )
                i = i.parentNode
            ;(s._isScroll =
                i &&
                i !== t &&
                !ln(i) &&
                (Ii[(u = kt(i)).overflowY] || Ii[u.overflowX])),
                (s._isScrollT = a)
        }
        ;(s._isScroll || n === 'x') &&
            (r.stopPropagation(), (r._gsapAllow = !0))
    },
    hl = function (e, r, t, n) {
        return Te.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: r,
            onWheel: (n = n && If),
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function () {
                return t && Oe(ae, Te.eventTypes[0], Ca, !1, !0)
            },
            onDisable: function () {
                return Ee(ae, Te.eventTypes[0], Ca, !0)
            },
        })
    },
    zf = /(input|label|select|textarea)/i,
    ka,
    Ca = function (e) {
        var r = zf.test(e.target.tagName)
        ;(r || ka) && ((e._gsapAllow = !0), (ka = r))
    },
    Nf = function (e) {
        Xr(e) || (e = {}),
            (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
            e.type || (e.type = 'wheel,touch'),
            (e.debounce = !!e.debounce),
            (e.id = e.id || 'normalizer')
        var r = e,
            t = r.normalizeScrollX,
            n = r.momentum,
            i = r.allowNestedScroll,
            s = r.onRelease,
            a,
            u,
            l = st(e.target) || Bt,
            c = M.core.globals().ScrollSmoother,
            d = c && c.get(),
            h =
                mr &&
                ((e.content && st(e.content)) ||
                    (d && e.content !== !1 && !d.smooth() && d.content())),
            f = Ar(l, ke),
            g = Ar(l, tt),
            p = 1,
            m =
                (Te.isTouch && j.visualViewport
                    ? j.visualViewport.scale * j.visualViewport.width
                    : j.outerWidth) / j.innerWidth,
            w = 0,
            x = rt(n)
                ? function () {
                      return n(a)
                  }
                : function () {
                      return n || 2.8
                  },
            S,
            v,
            y = hl(l, e.type, !0, i),
            P = function () {
                return (v = !1)
            },
            T = Vt,
            C = Vt,
            k = function () {
                ;(u = lr(l, ke)),
                    (C = On(mr ? 1 : 0, u)),
                    t && (T = On(0, lr(l, tt))),
                    (S = an)
            },
            E = function () {
                ;(h._gsap.y = Zn(parseFloat(h._gsap.y) + f.offset) + 'px'),
                    (h.style.transform =
                        'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                        parseFloat(h._gsap.y) +
                        ', 0, 1)'),
                    (f.offset = f.cacheID = 0)
            },
            D = function () {
                if (v) {
                    requestAnimationFrame(P)
                    var Y = Zn(a.deltaY / 2),
                        J = C(f.v - Y)
                    if (h && J !== f.v + f.offset) {
                        f.offset = J - f.v
                        var _ = Zn((parseFloat(h && h._gsap.y) || 0) - f.offset)
                        ;(h.style.transform =
                            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                            _ +
                            ', 0, 1)'),
                            (h._gsap.y = _ + 'px'),
                            (f.cacheID = W.cache),
                            cr()
                    }
                    return !0
                }
                f.offset && E(), (v = !0)
            },
            O,
            K,
            N,
            $,
            H = function () {
                k(),
                    O.isActive() &&
                        O.vars.scrollY > u &&
                        (f() > u
                            ? O.progress(1) && f(u)
                            : O.resetTo('scrollY', u))
            }
        return (
            h && M.set(h, { y: '+=0' }),
            (e.ignoreCheck = function (L) {
                return (
                    (mr && L.type === 'touchmove' && D()) ||
                    (p > 1.05 && L.type !== 'touchstart') ||
                    a.isGesturing ||
                    (L.touches && L.touches.length > 1)
                )
            }),
            (e.onPress = function () {
                v = !1
                var L = p
                ;(p = Zn(
                    ((j.visualViewport && j.visualViewport.scale) || 1) / m
                )),
                    O.pause(),
                    L !== p && Ro(l, p > 1.01 ? !0 : t ? !1 : 'x'),
                    (K = g()),
                    (N = f()),
                    k(),
                    (S = an)
            }),
            (e.onRelease = e.onGestureStart =
                function (L, Y) {
                    if ((f.offset && E(), !Y)) $.restart(!0)
                    else {
                        W.cache++
                        var J = x(),
                            _,
                            ne
                        t &&
                            ((_ = g()),
                            (ne = _ + (J * 0.05 * -L.velocityX) / 0.227),
                            (J *= Pa(g, _, ne, lr(l, tt))),
                            (O.vars.scrollX = T(ne))),
                            (_ = f()),
                            (ne = _ + (J * 0.05 * -L.velocityY) / 0.227),
                            (J *= Pa(f, _, ne, lr(l, ke))),
                            (O.vars.scrollY = C(ne)),
                            O.invalidate().duration(J).play(0.01),
                            ((mr && O.vars.scrollY >= u) || _ >= u - 1) &&
                                M.to({}, { onUpdate: H, duration: J })
                    }
                    s && s(L)
                }),
            (e.onWheel = function () {
                O._ts && O.pause(), et() - w > 1e3 && ((S = 0), (w = et()))
            }),
            (e.onChange = function (L, Y, J, _, ne) {
                if (
                    (an !== S && k(),
                    Y &&
                        t &&
                        g(
                            T(
                                _[2] === Y
                                    ? K + (L.startX - L.x)
                                    : g() + Y - _[1]
                            )
                        ),
                    J)
                ) {
                    f.offset && E()
                    var Xe = ne[2] === J,
                        Dt = Xe ? N + L.startY - L.y : f() + J - ne[1],
                        ce = C(Dt)
                    Xe && Dt !== ce && (N += ce - Dt), f(ce)
                }
                ;(J || Y) && cr()
            }),
            (e.onEnable = function () {
                Ro(l, t ? !1 : 'x'),
                    z.addEventListener('refresh', H),
                    Oe(j, 'resize', H),
                    f.smooth &&
                        ((f.target.style.scrollBehavior = 'auto'),
                        (f.smooth = g.smooth = !1)),
                    y.enable()
            }),
            (e.onDisable = function () {
                Ro(l, !0),
                    Ee(j, 'resize', H),
                    z.removeEventListener('refresh', H),
                    y.kill()
            }),
            (e.lockAxis = e.lockAxis !== !1),
            (a = new Te(e)),
            (a.iOS = mr),
            mr && !f() && f(1),
            mr && M.ticker.add(Vt),
            ($ = a._dc),
            (O = M.to(a, {
                ease: 'power4',
                paused: !0,
                scrollX: t ? '+=0.1' : '+=0',
                scrollY: '+=0.1',
                modifiers: {
                    scrollY: fl(f, f(), function () {
                        return O.pause()
                    }),
                },
                onUpdate: cr,
                onComplete: $.vars.onComplete,
            })),
            a
        )
    }
z.sort = function (o) {
    return B.sort(
        o ||
            function (e, r) {
                return (
                    (e.vars.refreshPriority || 0) * -1e6 +
                    e.start -
                    (r.start + (r.vars.refreshPriority || 0) * -1e6)
                )
            }
    )
}
z.observe = function (o) {
    return new Te(o)
}
z.normalizeScroll = function (o) {
    if (typeof o > 'u') return gt
    if (o === !0 && gt) return gt.enable()
    if (o === !1) return gt && gt.kill()
    var e = o instanceof Te ? o : Nf(o)
    return (
        gt && gt.target === e.target && gt.kill(), ln(e.target) && (gt = e), e
    )
}
z.core = {
    _getVelocityProp: Jo,
    _inputObserver: hl,
    _scrollers: W,
    _proxies: Jt,
    bridge: {
        ss: function () {
            At || fn('scrollStart'), (At = et())
        },
        ref: function () {
            return qe
        },
    },
}
tl() && M.registerPlugin(z)
var me = je.registerPlugin(ks) || je
me.core.Tween
const $f = () => {
    la.hooks.afterEnter(() => {
        window.scrollTo(0, 0)
    }),
        la.init({
            sync: !0,
            debug: !1,
            timeout: 7e3,
            transitions: [
                {
                    name: 'default',
                    once(o) {
                        Yf()
                    },
                    async leave({ current: o }) {
                        Hf(), await qf(495), o.container.remove()
                    },
                    async enter(o) {
                        jf(), Bf(o)
                    },
                    async beforeEnter() {
                        z.getAll().forEach((o) => o.kill()), kl()
                    },
                },
                {
                    name: 'to-home',
                    from: {},
                    to: { namespace: ['home'] },
                    once() {
                        Wf()
                    },
                },
            ],
        })
}
function Bf(o) {
    let t = new DOMParser()
        .parseFromString(o.next.html, 'text/html')
        .querySelector('.loading-words')
    document.querySelector('.loading-words').innerHTML = t.innerHTML
}
function qf(o) {
    return (
        (o = o || 2e3),
        new Promise((e) => {
            setTimeout(() => {
                e()
            }, o)
        })
    )
}
function Wf() {
    var o = me.timeline()
    o.set('.loading-screen', { top: '0' }),
        innerWidth > 540
            ? o.set('main .once-in', { y: '50vh' })
            : o.set('main .once-in', { y: '10vh' }),
        o.set('.loading-words', { opacity: 0, y: -50 }),
        o.set('.loading-words .active', { display: 'none' }),
        o.set('.loading-words .home-active, .loading-words .home-active-last', {
            display: 'block',
            opacity: 0,
        }),
        o.set('.loading-words .home-active-first', { opacity: 1 }),
        innerWidth > 540
            ? o.set('.loading-screen .rounded-div-wrap.bottom', {
                  height: '10vh',
              })
            : o.set('.loading-screen .rounded-div-wrap.bottom', {
                  height: '5vh',
              }),
        o.set('html', { cursor: 'wait' }),
        o.set('body', { overflowY: 'hidden' }),
        o.to('.loading-words', {
            duration: 0.8,
            opacity: 1,
            y: -50,
            ease: 'Power4.easeOut',
            delay: 0.5,
        }),
        o.to(
            '.loading-words .home-active',
            {
                duration: 0.01,
                opacity: 1,
                stagger: 0.15,
                ease: 'none',
                onStart: e,
            },
            '=-.4'
        )
    function e() {
        me.to('.loading-words .home-active', {
            duration: 0.01,
            opacity: 0,
            stagger: 0.15,
            ease: 'none',
            delay: 0.15,
        })
    }
    o.to('.loading-words .home-active-last', {
        duration: 0.01,
        opacity: 1,
        delay: 0.15,
    }),
        o.to('.loading-screen', {
            duration: 0.8,
            top: '-100%',
            ease: 'Power4.easeInOut',
            delay: 0.2,
        }),
        o.to(
            '.loading-screen .rounded-div-wrap.bottom',
            { duration: 1, height: '0vh', ease: 'Power4.easeInOut' },
            '=-.8'
        ),
        o.to(
            '.loading-words',
            { duration: 0.3, opacity: 0, ease: 'linear' },
            '=-.8'
        ),
        o.set('.loading-screen', { top: 'calc(-100%)' }),
        o.set('.loading-screen .rounded-div-wrap.bottom', { height: '0vh' }),
        o.to(
            'main .once-in',
            {
                duration: 1.5,
                y: '0vh',
                stagger: 0.07,
                ease: 'Expo.easeOut',
                clearProps: !0,
            },
            '=-.8'
        ),
        o.set('html', { cursor: 'auto' }, '=-1.2'),
        o.set('body', { overflowY: 'scroll' }, '-=2')
}
function Yf() {
    var o = me.timeline()
    o.set('.loading-screen', { top: '0' }),
        innerWidth > 540
            ? o.set('main .once-in', { y: '50vh' })
            : o.set('main .once-in', { y: '10vh' }),
        o.set('.loading-words', { opacity: 1, y: -50 }),
        innerWidth > 540
            ? o.set('.loading-screen .rounded-div-wrap.bottom', {
                  height: '10vh',
              })
            : o.set('.loading-screen .rounded-div-wrap.bottom', {
                  height: '5vh',
              }),
        o.set('html', { cursor: 'wait' }),
        o.to('.loading-screen', {
            duration: 0.8,
            top: '-100%',
            ease: 'Power4.easeInOut',
            delay: 0.5,
        }),
        o.to(
            '.loading-screen .rounded-div-wrap.bottom',
            { duration: 1, height: '0vh', ease: 'Power4.easeInOut' },
            '=-.8'
        ),
        o.to(
            '.loading-words',
            { duration: 0.3, opacity: 0, ease: 'linear' },
            '=-.8'
        ),
        o.set('.loading-screen', { top: 'calc(-100%)' }),
        o.set('.loading-screen .rounded-div-wrap.bottom', { height: '0vh' }),
        o.to(
            'main .once-in',
            {
                duration: 1,
                y: '0vh',
                stagger: 0.05,
                ease: 'Expo.easeOut',
                clearProps: 'true',
            },
            '=-.8'
        ),
        o.set('html', { cursor: 'auto' }, '=-.8')
}
function Hf() {
    var o = me.timeline()
    o.set('body', { overflowY: 'hidden' }),
        o.set('.loading-screen', { top: '100%' }),
        o.set('.loading-words', { opacity: 0, y: 0 }),
        o.set('html', { cursor: 'wait' }),
        innerWidth > 540
            ? o.set('.loading-screen .rounded-div-wrap.bottom', {
                  height: '10vh',
              })
            : o.set('.loading-screen .rounded-div-wrap.bottom', {
                  height: '5vh',
              }),
        o.to('.loading-screen', {
            duration: 0.5,
            top: '0%',
            ease: 'Power4.easeIn',
        }),
        innerWidth > 540
            ? o.to(
                  '.loading-screen .rounded-div-wrap.top',
                  { duration: 0.4, height: '10vh', ease: 'Power4.easeIn' },
                  '=-.5'
              )
            : o.to(
                  '.loading-screen .rounded-div-wrap.top',
                  { duration: 0.4, height: '10vh', ease: 'Power4.easeIn' },
                  '=-.5'
              ),
        o.to('.loading-words', {
            duration: 0.8,
            opacity: 1,
            y: -50,
            ease: 'Power4.easeOut',
            delay: 0.05,
        }),
        o.set('.loading-screen .rounded-div-wrap.top', { height: '0vh' }),
        o.to(
            '.loading-screen',
            { duration: 0.8, top: '-100%', ease: 'Power3.easeInOut' },
            '=-.2'
        ),
        o.to(
            '.loading-words',
            { duration: 0.6, opacity: 0, ease: 'linear' },
            '=-.8'
        ),
        o.to(
            '.loading-screen .rounded-div-wrap.bottom',
            { duration: 0.85, height: '0', ease: 'Power3.easeInOut' },
            '=-.6'
        ),
        o.set('html', { cursor: 'auto' }, '=-0.6'),
        innerWidth > 540
            ? o.set('.loading-screen .rounded-div-wrap.bottom', {
                  height: '10vh',
              })
            : o.set('.loading-screen .rounded-div-wrap.bottom', {
                  height: '5vh',
              }),
        o.set('.loading-screen', { top: '100%' }),
        o.set('.loading-words', { opacity: 0 })
}
function jf() {
    var o = me.timeline()
    innerWidth > 540
        ? o.set('main .once-in', { y: '50vh' })
        : o.set('main .once-in', { y: '20vh' }),
        o.set('html', { cursor: 'auto' }, '=-.8'),
        o.to('main .once-in', {
            duration: 1,
            y: '0vh',
            stagger: 0.05,
            ease: 'Expo.easeOut',
            delay: 0.8,
            clearProps: 'true',
        }),
        o.set('body', { overflowY: 'scroll' }, '-=2')
}
const Xf = () => {
        Pe.registerPlugin(z)
        const o = Pe.context(() => {
            const e = Pe.timeline({
                scrollTrigger: {
                    trigger: '.about-section',
                    start: 'top 100%',
                    end: 'top 20%',
                    scrub: 1,
                },
                clearProps: !0,
            })
            e.to('.hero-img', { height: '90vh', rotation: 0.01 }),
                e.to('.home-arrow', { y: '-200', rotation: 0.01 }, '<'),
                e.fromTo(
                    '.h-anime',
                    { y: '0' },
                    { y: '-100', rotation: 0.01, stagger: 0.1 },
                    '<'
                )
        })
        return () => o.revert()
    },
    Vf = () => {
        Xf()
    }
;(() => {
    function o(...t) {
        const n = t.length
        for (let i = 0; i < n; i++) {
            const s = t[i]
            s.nodeType === 1 || s.nodeType === 11
                ? this.appendChild(s)
                : this.appendChild(document.createTextNode(String(s)))
        }
    }
    function e(...t) {
        for (; this.lastChild; ) this.removeChild(this.lastChild)
        t.length && this.append(...t)
    }
    function r(...t) {
        const n = this.parentNode
        let i = t.length
        if (n)
            for (i || n.removeChild(this); i--; ) {
                let s = t[i]
                typeof s != 'object'
                    ? (s = this.ownerDocument.createTextNode(s))
                    : s.parentNode && s.parentNode.removeChild(s),
                    i
                        ? n.insertBefore(this.previousSibling, s)
                        : n.replaceChild(s, this)
            }
    }
    typeof Element < 'u' &&
        (Element.prototype.append ||
            ((Element.prototype.append = o),
            (DocumentFragment.prototype.append = o)),
        Element.prototype.replaceChildren ||
            ((Element.prototype.replaceChildren = e),
            (DocumentFragment.prototype.replaceChildren = e)),
        Element.prototype.replaceWith ||
            ((Element.prototype.replaceWith = r),
            (DocumentFragment.prototype.replaceWith = r)))
})()
function Zr(o, e) {
    return Object.getOwnPropertyNames(Object(o)).reduce((r, t) => {
        const n = Object.getOwnPropertyDescriptor(Object(o), t),
            i = Object.getOwnPropertyDescriptor(Object(e), t)
        return Object.defineProperty(r, t, i || n)
    }, {})
}
function bi(o) {
    return typeof o == 'string'
}
function $s(o) {
    return Array.isArray(o)
}
function zi(o = {}) {
    const e = Zr(o)
    let r
    return (
        e.types !== void 0
            ? (r = e.types)
            : e.split !== void 0 && (r = e.split),
        r !== void 0 &&
            (e.types = (bi(r) || $s(r) ? String(r) : '')
                .split(',')
                .map((t) => String(t).trim())
                .filter((t) => /((line)|(word)|(char))/i.test(t))),
        (e.absolute || e.position) &&
            (e.absolute = e.absolute || /absolute/.test(o.position)),
        e
    )
}
function Bs(o) {
    const e = bi(o) || $s(o) ? String(o) : ''
    return {
        none: !e,
        lines: /line/i.test(e),
        words: /word/i.test(e),
        chars: /char/i.test(e),
    }
}
function go(o) {
    return o !== null && typeof o == 'object'
}
function Uf(o) {
    return go(o) && /^(1|3|11)$/.test(o.nodeType)
}
function Gf(o) {
    return typeof o == 'number' && o > -1 && o % 1 === 0
}
function Kf(o) {
    return go(o) && Gf(o.length)
}
function hn(o) {
    return $s(o)
        ? o
        : o == null
        ? []
        : Kf(o)
        ? Array.prototype.slice.call(o)
        : [o]
}
function Ea(o) {
    let e = o
    return (
        bi(o) &&
            (/^(#[a-z]\w+)$/.test(o.trim())
                ? (e = document.getElementById(o.trim().slice(1)))
                : (e = document.querySelectorAll(o))),
        hn(e).reduce((r, t) => [...r, ...hn(t).filter(Uf)], [])
    )
}
const { entries: Qf, keys: zh, values: Nh } = Object,
    uo = '_splittype',
    fr = {}
let Zf = 0
function Kt(o, e, r) {
    if (!go(o)) return console.warn('[data.set] owner is not an object'), null
    const t = o[uo] || (o[uo] = ++Zf),
        n = fr[t] || (fr[t] = {})
    return (
        r === void 0
            ? e &&
              Object.getPrototypeOf(e) === Object.prototype &&
              (fr[t] = { ...n, ...e })
            : e !== void 0 && (n[e] = r),
        r
    )
}
function Jr(o, e) {
    const r = go(o) ? o[uo] : null,
        t = (r && fr[r]) || {}
    return e === void 0 ? t : t[e]
}
function dl(o) {
    const e = o && o[uo]
    e && (delete o[e], delete fr[e])
}
function Jf() {
    Qf(fr).forEach(([o, { isRoot: e, isSplit: r }]) => {
        ;(!e || !r) && ((fr[o] = null), delete fr[o])
    })
}
function eh(o, e = ' ') {
    return (o ? String(o) : '').trim().replace(/\s+/g, ' ').split(e)
}
const qs = '\\ud800-\\udfff',
    pl = '\\u0300-\\u036f\\ufe20-\\ufe23',
    gl = '\\u20d0-\\u20f0',
    _l = '\\ufe0e\\ufe0f',
    th = `[${qs}]`,
    ss = `[${pl}${gl}]`,
    as = '\\ud83c[\\udffb-\\udfff]',
    rh = `(?:${ss}|${as})`,
    ml = `[^${qs}]`,
    vl = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    yl = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    wl = '\\u200d',
    bl = `${rh}?`,
    xl = `[${_l}]?`,
    nh = '(?:' + wl + '(?:' + [ml, vl, yl].join('|') + ')' + xl + bl + ')*',
    ih = xl + bl + nh,
    oh = `(?:${[`${ml}${ss}?`, ss, vl, yl, th].join('|')}
)`,
    sh = RegExp(`${as}(?=${as})|${oh}${ih}`, 'g'),
    ah = [wl, qs, pl, gl, _l],
    uh = RegExp(`[${ah.join('')}]`)
function lh(o) {
    return o.split('')
}
function Tl(o) {
    return uh.test(o)
}
function ch(o) {
    return o.match(sh) || []
}
function fh(o) {
    return Tl(o) ? ch(o) : lh(o)
}
function hh(o) {
    return o == null ? '' : String(o)
}
function dh(o, e = '') {
    return (o = hh(o)), o && bi(o) && !e && Tl(o) ? fh(o) : o.split(e)
}
function us(o, e) {
    const r = document.createElement(o)
    return (
        e &&
            Object.keys(e).forEach((t) => {
                const n = e[t],
                    i = bi(n) ? n.trim() : n
                i === null ||
                    i === '' ||
                    (t === 'children'
                        ? r.append(...hn(i))
                        : r.setAttribute(t, i))
            }),
        r
    )
}
var Ws = {
    splitClass: '',
    lineClass: 'line',
    wordClass: 'word',
    charClass: 'char',
    types: ['lines', 'words', 'chars'],
    absolute: !1,
    tagName: 'div',
}
function ph(o, e) {
    e = Zr(Ws, e)
    const r = Bs(e.types),
        t = e.tagName,
        n = o.nodeValue,
        i = document.createDocumentFragment()
    let s = [],
        a = []
    return (
        /^\s/.test(n) && i.append(' '),
        (s = eh(n).reduce((u, l, c, d) => {
            let h, f
            return (
                r.chars &&
                    (f = dh(l).map((g) => {
                        const p = us(t, {
                            class: `${e.splitClass} ${e.charClass}`,
                            style: 'display: inline-block;',
                            children: g,
                        })
                        return Kt(p, 'isChar', !0), (a = [...a, p]), p
                    })),
                r.words || r.lines
                    ? ((h = us(t, {
                          class: `${e.wordClass} ${e.splitClass}`,
                          style: `display: inline-block; ${
                              r.words && e.absolute ? 'position: relative;' : ''
                          }`,
                          children: r.chars ? f : l,
                      })),
                      Kt(h, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
                      i.appendChild(h))
                    : f.forEach((g) => {
                          i.appendChild(g)
                      }),
                c < d.length - 1 && i.append(' '),
                r.words ? u.concat(h) : u
            )
        }, [])),
        /\s$/.test(n) && i.append(' '),
        o.replaceWith(i),
        { words: s, chars: a }
    )
}
function Sl(o, e) {
    const r = o.nodeType,
        t = { words: [], chars: [] }
    if (!/(1|3|11)/.test(r)) return t
    if (r === 3 && /\S/.test(o.nodeValue)) return ph(o, e)
    const n = hn(o.childNodes)
    if (n.length && (Kt(o, 'isSplit', !0), !Jr(o).isRoot)) {
        ;(o.style.display = 'inline-block'), (o.style.position = 'relative')
        const i = o.nextSibling,
            s = o.previousSibling,
            a = o.textContent || '',
            u = i ? i.textContent : ' ',
            l = s ? s.textContent : ' '
        Kt(o, {
            isWordEnd: /\s$/.test(a) || /^\s/.test(u),
            isWordStart: /^\s/.test(a) || /\s$/.test(l),
        })
    }
    return n.reduce((i, s) => {
        const { words: a, chars: u } = Sl(s, e)
        return { words: [...i.words, ...a], chars: [...i.chars, ...u] }
    }, t)
}
function gh(o, e, r, t) {
    if (!r.absolute) return { top: e ? o.offsetTop : null }
    const n = o.offsetParent,
        [i, s] = t
    let a = 0,
        u = 0
    if (n && n !== document.body) {
        const p = n.getBoundingClientRect()
        ;(a = p.x + i), (u = p.y + s)
    }
    const { width: l, height: c, x: d, y: h } = o.getBoundingClientRect(),
        f = h + s - u,
        g = d + i - a
    return { width: l, height: c, top: f, left: g }
}
function Pl(o) {
    Jr(o).isWord
        ? (dl(o), o.replaceWith(...o.childNodes))
        : hn(o.children).forEach((e) => Pl(e))
}
const _h = () => document.createDocumentFragment()
function mh(o, e, r) {
    const t = Bs(e.types),
        n = e.tagName,
        i = o.getElementsByTagName('*'),
        s = []
    let a = [],
        u = null,
        l,
        c,
        d,
        h = []
    const f = o.parentElement,
        g = o.nextElementSibling,
        p = _h(),
        m = window.getComputedStyle(o),
        w = m.textAlign,
        S = parseFloat(m.fontSize) * 0.2
    return (
        e.absolute &&
            ((d = {
                left: o.offsetLeft,
                top: o.offsetTop,
                width: o.offsetWidth,
            }),
            (c = o.offsetWidth),
            (l = o.offsetHeight),
            Kt(o, { cssWidth: o.style.width, cssHeight: o.style.height })),
        hn(i).forEach((v) => {
            const y = v.parentElement === o,
                { width: P, height: T, top: C, left: k } = gh(v, y, e, r)
            ;/^br$/i.test(v.nodeName) ||
                (t.lines &&
                    y &&
                    ((u === null || C - u >= S) && ((u = C), s.push((a = []))),
                    a.push(v)),
                e.absolute && Kt(v, { top: C, left: k, width: P, height: T }))
        }),
        f && f.removeChild(o),
        t.lines &&
            ((h = s.map((v) => {
                const y = us(n, {
                    class: `${e.splitClass} ${e.lineClass}`,
                    style: `display: block; text-align: ${w}; width: 100%;`,
                })
                Kt(y, 'isLine', !0)
                const P = { height: 0, top: 1e4 }
                return (
                    p.appendChild(y),
                    v.forEach((T, C, k) => {
                        const { isWordEnd: E, top: D, height: O } = Jr(T),
                            K = k[C + 1]
                        ;(P.height = Math.max(P.height, O)),
                            (P.top = Math.min(P.top, D)),
                            y.appendChild(T),
                            E && Jr(K).isWordStart && y.append(' ')
                    }),
                    e.absolute && Kt(y, { height: P.height, top: P.top }),
                    y
                )
            })),
            t.words || Pl(p),
            o.replaceChildren(p)),
        e.absolute &&
            ((o.style.width = `${o.style.width || c}px`),
            (o.style.height = `${l}px`),
            hn(i).forEach((v) => {
                const {
                        isLine: y,
                        top: P,
                        left: T,
                        width: C,
                        height: k,
                    } = Jr(v),
                    E = Jr(v.parentElement),
                    D = !y && E.isLine
                ;(v.style.top = `${D ? P - E.top : P}px`),
                    (v.style.left = y
                        ? `${d.left}px`
                        : `${T - (D ? d.left : 0)}px`),
                    (v.style.height = `${k}px`),
                    (v.style.width = y ? `${d.width}px` : `${C}px`),
                    (v.style.position = 'absolute')
            })),
        f && (g ? f.insertBefore(o, g) : f.appendChild(o)),
        h
    )
}
let bn = Zr(Ws, {})
class dn {
    static get data() {
        return fr
    }
    static get defaults() {
        return bn
    }
    static set defaults(e) {
        bn = Zr(bn, zi(e))
    }
    static setDefaults(e) {
        return (bn = Zr(bn, zi(e))), Ws
    }
    static revert(e) {
        Ea(e).forEach((r) => {
            const { isSplit: t, html: n, cssWidth: i, cssHeight: s } = Jr(r)
            t &&
                ((r.innerHTML = n),
                (r.style.width = i || ''),
                (r.style.height = s || ''),
                dl(r))
        })
    }
    static create(e, r) {
        return new dn(e, r)
    }
    constructor(e, r) {
        ;(this.isSplit = !1),
            (this.settings = Zr(bn, zi(r))),
            (this.elements = Ea(e)),
            this.split()
    }
    split(e) {
        this.revert(),
            this.elements.forEach((n) => {
                Kt(n, 'html', n.innerHTML)
            }),
            (this.lines = []),
            (this.words = []),
            (this.chars = [])
        const r = [window.pageXOffset, window.pageYOffset]
        e !== void 0 && (this.settings = Zr(this.settings, zi(e)))
        const t = Bs(this.settings.types)
        t.none ||
            (this.elements.forEach((n) => {
                Kt(n, 'isRoot', !0)
                const { words: i, chars: s } = Sl(n, this.settings)
                ;(this.words = [...this.words, ...i]),
                    (this.chars = [...this.chars, ...s])
            }),
            this.elements.forEach((n) => {
                if (t.lines || this.settings.absolute) {
                    const i = mh(n, this.settings, r)
                    this.lines = [...this.lines, ...i]
                }
            }),
            (this.isSplit = !0),
            window.scrollTo(r[0], r[1]),
            Jf())
    }
    revert() {
        this.isSplit &&
            ((this.lines = null),
            (this.words = null),
            (this.chars = null),
            (this.isSplit = !1)),
            dn.revert(this.elements)
    }
}
me.registerPlugin(z)
const vh = () => {
        new dn('.about-title', { types: 'words, chars' }),
            new dn('.about-paragraph', { types: 'words, chars' })
        let o = me.timeline({
            scrollTrigger: { trigger: '.about-section', start: 'top 70%' },
            ease: 'power1.out',
        })
        o.fromTo(
            '.about-section .char',
            { opacity: 0.3, y: '100%' },
            { opacity: 1, y: '-5px', stagger: { amount: 1 } }
        ),
            o.fromTo(
                '.path',
                1,
                { strokeDashoffset: 1e3 },
                { strokeDashoffset: 0 }
            ),
            o.fromTo('.head', { opacity: 0 }, { opacity: 1 }, '<'),
            o.fromTo(
                '.about-btn',
                1.2,
                { scale: 0.5, opacity: 0 },
                { scale: 1, opacity: 1, ease: 'elastic.out' },
                '<.1'
            )
    },
    yh = () => {
        vh()
    },
    wh = () => {
        new dn('.works-title', { types: 'words, chars' })
        const o = document.querySelectorAll('.works-title .char')
        o.forEach((t) => {
            t.addEventListener('mouseenter', () => {
                t.classList.add('animate__rubberBand')
            })
        }),
            o.forEach((t) => {
                t.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        t.classList.remove('animate__rubberBand')
                    }, 700)
                })
            }),
            me.registerPlugin(z),
            me
                .timeline({
                    defaults: {
                        scrollTrigger: {
                            trigger: '.works-section',
                            start: 'top 90% ',
                            end: 'center center',
                            scrub: 1,
                        },
                    },
                })
                .from(
                    '.imgy',
                    {
                        scale: '1.3',
                        rotate: () => Math.floor(Math.random() * 40 - 20),
                        x: () => Math.floor(Math.random() * 300 - 150),
                        y: () => Math.floor(Math.random() * 300 - 150),
                    },
                    '-=1'
                )
        const r = me.timeline({
            defaults: {
                scrollTrigger: {
                    trigger: '.works-section',
                    start: 'top 70% ',
                    end: 'center 60%',
                    scrub: 1,
                },
            },
        })
        r.from('.card-info', 7, {
            y: '-100%',
            rotation: 0.01,
            opacity: 0.1,
            stagger: 0.5,
        }),
            r.from('.works-title', { y: '100%', rotation: 0.01, opacity: 0 }),
            r.from('.btn-nav', 1, { scale: 0.6, rotation: 0.01, opacity: 0 }),
            r.from('.works-btn', 1, { scale: 0.6, rotation: 0.01, opacity: 0 })
    },
    bh = () => {
        const e = document.querySelector('.card').clientWidth,
            r = document.querySelector('.card-slider'),
            t = document.querySelectorAll('.btn-nav')
        let n = !1,
            i = 0,
            s = 0
        r.addEventListener('mousedown', (a) => {
            ;(n = !0), (i = a.pageX), (s = r.scrollLeft)
        }),
            r.addEventListener('mousemove', (a) => {
                if (n) {
                    a.preventDefault()
                    let u = a.pageX - i
                    r.scrollLeft = s - u
                }
            }),
            r.addEventListener('mouseup', (a) => {
                n = !1
            }),
            t.forEach((a) => {
                a.addEventListener('click', () => {
                    a.id === 'nav-left'
                        ? (r.scrollLeft += -e)
                        : (r.scrollLeft += e)
                })
            })
    },
    xh = () => {
        wh(), bh()
    },
    Th = () => {
        me.registerPlugin(z)
        let o = me.timeline({
            scrollTrigger: {
                trigger: '.slider-section',
                start: '0% 80%',
                end: '0% -80%',
                scrub: 1,
            },
            ease: 'power1.out',
        })
        me.context(() => {
            window.innerWidth > 1500 ||
                (o.to('.sliderone', { x: '-17%', rotation: 0.01 }),
                o.to('.slidertwo', { x: '15%', rotation: 0.01 }, '<'))
        })
    },
    Sh = () => {
        Th()
    },
    Ph = () => {
        me.registerPlugin(z), new dn('.footer-title', { types: 'words, chars' })
        const o = document.querySelectorAll('.footer-title .char')
        o.forEach((n) => {
            n.addEventListener('mouseenter', () => {
                n.classList.add('animate__rubberBand')
            })
        }),
            o.forEach((n) => {
                n.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        n.classList.remove('animate__rubberBand')
                    }, 700)
                })
            }),
            me
                .timeline({
                    scrollTrigger: {
                        trigger: '.footer-seciton',
                        start: '0% 100%',
                        end: '50% 80%',
                        scrub: 1,
                    },
                })
                .to(
                    '.footer-shape',
                    { height: 0, rotate: '0.001deg', ease: 'none' },
                    0
                )
        let r = me.timeline({
            scrollTrigger: { trigger: '.footer-seciton', start: 'top 50%' },
        })
        r.to('.hamburger-btn', { border: '1px solid transparent ' }),
            r.to('.hamburger-btn', { border: '1px solid #625f5f ' }),
            r.to('.menu-slide ', { border: '1px solid #625f5f ' }, '<'),
            r.to('.rounded-div', { border: '1px solid #625f5f ' }, '<')
        let t = me.timeline({
            scrollTrigger: {
                trigger: '.footer-seciton',
                start: 'top 55%',
                end: '30% 80%',
            },
        })
        t.fromTo(
            '.footer-title',
            1,
            { y: '100%' },
            { y: '-5px', ease: 'elastic.out(1, 0.75)', rotate: '0.001deg' }
        ),
            t.fromTo(
                '.footer-img',
                1,
                { scale: 0.5, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    ease: 'bounce.inout',
                    rotate: '0.001deg',
                },
                '<'
            ),
            t.fromTo(
                '.line',
                1,
                { width: 0 },
                { width: '100%', rotate: '0.001deg' },
                '<.1'
            ),
            t.fromTo(
                '.footer-btn',
                1,
                { x: '-65px', scale: 0.8, opacity: 0 },
                { x: 0, scale: 1, opacity: 1, rotate: '0.001deg' },
                '<.3'
            ),
            t.fromTo(
                '.footer-arrow',
                1,
                { x: 60, y: -60, opacity: 0 },
                { x: 0, y: 0, opacity: 1, rotation: 0.01 },
                '<.2'
            ),
            t.fromTo(
                '.contact-btn',
                1,
                { y: '-100%', opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, rotate: '0.001deg' },
                '<'
            ),
            t.fromTo(
                '.footer-col',
                1,
                { y: '-100%', opacity: 0, stagger: 0.1 },
                { y: 0, opacity: 1, stagger: 0.1, rotate: '0.001deg' },
                '<'
            )
    },
    kh = () => {
        const o = document.querySelector('.time-data'),
            e = document.querySelector('.version-data'),
            r = new Date()
        let t = r.getMinutes(),
            n = r.getHours(),
            i = n > 12 ? 'PM' : 'AM'
        ;(t = t < 10 ? `0${t}` : t),
            (n = n > 12 ? n - 12 : n),
            (n = n < 10 ? '0' + n : n),
            (o.textContent = `${n}:${t} ${i}`),
            (e.textContent = `${r.getFullYear()} © Edition`),
            setInterval(() => {
                o.textContent = `${n}:${t} ${i}`
            }, 59e3)
    },
    Ys = () => {
        Ph(), kh()
    },
    Ch = () => {
        location.pathname === '/' && (Ys(), Vf(), yh(), xh(), Sh())
    },
    Eh = () => {
        me.registerPlugin(z),
            me
                .timeline({
                    scrollTrigger: {
                        trigger: '.second-col-about',
                        start: 'top 30%',
                        end: '150% bottom',
                        scrub: 1.14,
                    },
                })
                .to(
                    '.animation-shape-img',
                    3,
                    { height: '8vh', ease: 'power1.out' },
                    '<'
                )
        const e = me.timeline({
            scrollTrigger: {
                trigger: '.third-col-about',
                start: 'top center',
                end: 'bottom bottom',
            },
        })
        e.from('.third-col-about div *', {
            y: '-100%',
            opacity: 0,
            stagger: { amount: 0.1 },
            ease: 'power1.out',
        }),
            e.from(
                '.third-col-about img',
                { y: '20%', opacity: 0, ease: 'power1.out' },
                '<'
            )
    },
    Oh = () => {
        var o
        location.pathname === '/src/pages/aboutPage/index.html' &&
            ((o = document.querySelector('header')) == null ||
                o.classList.add('white-header'),
            Eh(),
            Ys())
    },
    Ah = (o, e) => {
        const r = e.classList.contains('menu'),
            t = o.map(
                (i) => `
                <li class="propject">
                    <img
                        class="card__img-filtered"
                        src="${i.imgSrc}"
                        alt="card__background "
                    />
                    <div>
                        <div>
                            <span class="name">${i.name}</span
                            ><span class="service">${i.service}</span
                            ><span class="date">${i.year}</span>
                        </div>
                    ${
                        r
                            ? ''
                            : ` <div>
                        <svg
                            width="24"
                            height="24"
                            fill="white"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                            ></path></svg
                        ><svg
                            width="24"
                            height="24"
                            fill="white"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M17,6H7C6.4,6,6,6.4,6,7s0.4,1,1,1h7.6l-8.3,8.3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0L16,9.4V17c0,0.6,0.4,1,1,1s1-0.4,1-1V7C18,6.4,17.6,6,17,6z"
                            ></path>
                        </svg>
                    </div>`
                    }
                    </div>
                </li>
                <div class="seperator li-sep"></div>
        `
            )
        return `
    ${
        r
            ? ''
            : `   <li class="propject-table-line">
                <span class="client-name">client</span
                ><span class="services-name">services</span
                ><span class="serivices-date">year</span>
            </li>
            <div class="seperator"></div>`
    }
    <div class="projects-conatiner-animation">${t.join('')}</div>`
    },
    Oa = (o, e) => {
        const r = Pe.timeline(),
            t = Pe.timeline()
        o.classList.remove('grid'),
            o.classList.remove('menu'),
            e === 'grid'
                ? (o.classList.add(e),
                  t.from(
                      '.propject',
                      0.5,
                      {
                          scale: 0.2,
                          opacity: 0,
                          y: '-50%',
                          stagger: { amount: 0.4 },
                          ease: 'power2.out',
                          clearProps: !0,
                      },
                      '<'
                  ))
                : e === 'menu' &&
                  (o.classList.add('menu'),
                  r.from(
                      '.propject',
                      0.5,
                      {
                          scale: 0.2,
                          opacity: 0,
                          y: '-50%',
                          stagger: { amount: 0.4 },
                          ease: 'power2.out',
                          clearProps: !0,
                      },
                      '<'
                  ),
                  r.from(
                      '.seperator.li-sep',
                      0.5,
                      {
                          transformOrigin: 'right',
                          y: '-50%',
                          opacity: 0,
                          width: 0,
                          stagger: { amount: 0.5 },
                          ease: 'power2.out',
                          clearProps: !0,
                      },
                      '<'
                  ))
    },
    Aa = [
        {
            name: 'Homyz',
            service: 'design',
            year: '2023',
            type: 'design',
            imgSrc: '/src/assets/img/projects/proj1.png',
        },
        {
            name: 'Helux',
            service: 'design',
            year: '2023',
            type: 'design',
            imgSrc: '/src/assets/img/projects/proj2.png',
        },
        {
            name: 'Helux',
            service: 'design & Development',
            year: '2023',
            type: 'development',
            imgSrc: '/src/assets/img/projects/proj3.png',
        },
        {
            name: 'Helux',
            service: 'design',
            year: '2023',
            type: 'design',
            imgSrc: '/src/assets/img/projects/proj4.png',
        },
        {
            name: 'Helux',
            service: 'design & Development',
            year: '2023',
            type: 'development',
            imgSrc: '/src/assets/img/projects/proj5.png',
        },
        {
            name: 'Helux',
            service: 'design & Development',
            year: '2023',
            type: 'development',
            imgSrc: '/src/assets/img/projects/proj6.png',
        },
        {
            name: 'Helux',
            service: 'design & Development',
            year: '2023',
            type: 'development',
            imgSrc: '/src/assets/img/projects/proj7.png',
        },
        {
            name: 'Helux',
            service: 'design',
            year: '2023',
            type: 'design',
            imgSrc: '/src/assets/img/projects/proj8.png',
        },
    ],
    Mh = (o) => {
        const e = Aa
        console.log(o)
        const r = e.filter((t) => (t.type === o ? t : ''))
        return r.length === 0 ? Aa : r
    },
    Dh = () => {
        const o = document.querySelector('.projects-wrapper'),
            e = document.querySelectorAll('.type button'),
            r = document.querySelectorAll('.shape button')
        e.forEach((t) => {
            t.addEventListener('click', () => {
                e.forEach((u) => u.classList.remove('active')),
                    t.classList.add('active')
                const n = t.getAttribute('data-type'),
                    i = Mh(n),
                    s = Ah(i, o)
                o.innerHTML = s
                const a = o.classList.contains('menu') ? 'menu' : 'grid'
                Oa(o, a)
            })
        }),
            r.forEach((t) => {
                t.addEventListener('click', () => {
                    r.forEach((i) => i.classList.remove('active'))
                    const n = t.getAttribute('data-shape')
                    t.classList.add('active'),
                        o.classList.remove('grid'),
                        o.classList.remove('menu'),
                        o.classList.add(n),
                        Oa(o, n)
                })
            })
    },
    Rh = () => {
        location.pathname === '/src/pages/works/index.html' && (Ys(), Dh())
    },
    Lh = () => {
        const o = document.querySelector('.form'),
            e = o == null ? void 0 : o.querySelectorAll('.input')
        e == null ||
            e.forEach((r) => {
                r.addEventListener('keydown', (t) => {
                    r.value
                })
            }),
            console.log(e)
    },
    Fh = () => {
        location.pathname === '/src/pages/contactPage/index.html' &&
            (Lh(), Ih())
    },
    Ih = () => {
        const o = document.querySelector('.submit'),
            e = document.querySelector('.form'),
            r = e == null ? void 0 : e.querySelectorAll('.input'),
            t = document.querySelector('.thanks-card'),
            n = document.querySelector('.contact-blur'),
            i = document.querySelector('.submit-heading'),
            s = document.querySelector('.close')
        let a = !1
        o == null ||
            o.addEventListener('click', () => {
                if (
                    (r == null ||
                        r.forEach((u) => {
                            a = u.value !== ''
                        }),
                    a)
                ) {
                    const u = r[0].value
                    ;(i.innerText = ` Thanks ${u} for conatacting me`),
                        t == null || t.classList.add('show'),
                        n == null || n.classList.add('active-blur-shape'),
                        r == null ||
                            r.forEach((l) => {
                                l.value = ''
                            })
                }
            }),
            s == null ||
                s.addEventListener('click', () => {
                    t == null || t.classList.remove('show'),
                        n == null || n.classList.remove('active-blur-shape')
                })
    },
    kl = () => {
        Xc(), Ch(), qc(), Yc(), Oh(), Rh(), Fh()
    }
$f()
kl()
