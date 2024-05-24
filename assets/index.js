(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l=>{
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
var Yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ho(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ks = {
    exports: {}
}
  , Vl = {}
  , Ss = {
    exports: {}
}
  , F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr = Symbol.for("react.element")
  , fd = Symbol.for("react.portal")
  , dd = Symbol.for("react.fragment")
  , pd = Symbol.for("react.strict_mode")
  , md = Symbol.for("react.profiler")
  , hd = Symbol.for("react.provider")
  , vd = Symbol.for("react.context")
  , gd = Symbol.for("react.forward_ref")
  , yd = Symbol.for("react.suspense")
  , wd = Symbol.for("react.memo")
  , xd = Symbol.for("react.lazy")
  , Wu = Symbol.iterator;
function kd(e) {
    return e === null || typeof e != "object" ? null : (e = Wu && e[Wu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var _s = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Es = Object.assign
  , js = {};
function Dn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = js,
    this.updater = n || _s
}
Dn.prototype.isReactComponent = {};
Dn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Dn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Cs() {}
Cs.prototype = Dn.prototype;
function Ao(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = js,
    this.updater = n || _s
}
var Uo = Ao.prototype = new Cs;
Uo.constructor = Ao;
Es(Uo, Dn.prototype);
Uo.isPureReactComponent = !0;
var Vu = Array.isArray
  , Ns = Object.prototype.hasOwnProperty
  , Bo = {
    current: null
}
  , Ps = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Os(e, t, n) {
    var r, l = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Ns.call(t, r) && !Ps.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1)
        l.children = n;
    else if (1 < u) {
        for (var a = Array(u), s = 0; s < u; s++)
            a[s] = arguments[s + 2];
        l.children = a
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps,
        u)
            l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: jr,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Bo.current
    }
}
function Sd(e, t) {
    return {
        $$typeof: jr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Wo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === jr
}
function _d(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var bu = /\/+/g;
function di(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? _d("" + e.key) : t.toString(36)
}
function ol(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case jr:
            case fd:
                o = !0
            }
        }
    if (o)
        return o = e,
        l = l(o),
        e = r === "" ? "." + di(o, 0) : r,
        Vu(l) ? (n = "",
        e != null && (n = e.replace(bu, "$&/") + "/"),
        ol(l, t, n, "", function(s) {
            return s
        })) : l != null && (Wo(l) && (l = Sd(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(bu, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Vu(e))
        for (var u = 0; u < e.length; u++) {
            i = e[u];
            var a = r + di(i, u);
            o += ol(i, t, n, a, l)
        }
    else if (a = kd(e),
    typeof a == "function")
        for (e = a.call(e),
        u = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + di(i, u++),
            o += ol(i, t, n, a, l);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function $r(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return ol(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }),
    r
}
function Ed(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var je = {
    current: null
}
  , ul = {
    transition: null
}
  , jd = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: ul,
    ReactCurrentOwner: Bo
};
F.Children = {
    map: $r,
    forEach: function(e, t, n) {
        $r(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return $r(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return $r(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Wo(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = Dn;
F.Fragment = dd;
F.Profiler = md;
F.PureComponent = Ao;
F.StrictMode = pd;
F.Suspense = yd;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jd;
F.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Es({}, e.props)
      , l = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Bo.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var u = e.type.defaultProps;
        for (a in t)
            Ns.call(t, a) && !Ps.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        u = Array(a);
        for (var s = 0; s < a; s++)
            u[s] = arguments[s + 2];
        r.children = u
    }
    return {
        $$typeof: jr,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
}
;
F.createContext = function(e) {
    return e = {
        $$typeof: vd,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: hd,
        _context: e
    },
    e.Consumer = e
}
;
F.createElement = Os;
F.createFactory = function(e) {
    var t = Os.bind(null, e);
    return t.type = e,
    t
}
;
F.createRef = function() {
    return {
        current: null
    }
}
;
F.forwardRef = function(e) {
    return {
        $$typeof: gd,
        render: e
    }
}
;
F.isValidElement = Wo;
F.lazy = function(e) {
    return {
        $$typeof: xd,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ed
    }
}
;
F.memo = function(e, t) {
    return {
        $$typeof: wd,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
F.startTransition = function(e) {
    var t = ul.transition;
    ul.transition = {};
    try {
        e()
    } finally {
        ul.transition = t
    }
}
;
F.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
F.useCallback = function(e, t) {
    return je.current.useCallback(e, t)
}
;
F.useContext = function(e) {
    return je.current.useContext(e)
}
;
F.useDebugValue = function() {}
;
F.useDeferredValue = function(e) {
    return je.current.useDeferredValue(e)
}
;
F.useEffect = function(e, t) {
    return je.current.useEffect(e, t)
}
;
F.useId = function() {
    return je.current.useId()
}
;
F.useImperativeHandle = function(e, t, n) {
    return je.current.useImperativeHandle(e, t, n)
}
;
F.useInsertionEffect = function(e, t) {
    return je.current.useInsertionEffect(e, t)
}
;
F.useLayoutEffect = function(e, t) {
    return je.current.useLayoutEffect(e, t)
}
;
F.useMemo = function(e, t) {
    return je.current.useMemo(e, t)
}
;
F.useReducer = function(e, t, n) {
    return je.current.useReducer(e, t, n)
}
;
F.useRef = function(e) {
    return je.current.useRef(e)
}
;
F.useState = function(e) {
    return je.current.useState(e)
}
;
F.useSyncExternalStore = function(e, t, n) {
    return je.current.useSyncExternalStore(e, t, n)
}
;
F.useTransition = function() {
    return je.current.useTransition()
}
;
F.version = "18.2.0";
Ss.exports = F;
var we = Ss.exports;
const zt = Ho(we);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd = we
  , Nd = Symbol.for("react.element")
  , Pd = Symbol.for("react.fragment")
  , Od = Object.prototype.hasOwnProperty
  , Td = Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Ld = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ts(e, t, n) {
    var r, l = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        Od.call(t, r) && !Ld.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Nd,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Td.current
    }
}
Vl.Fragment = Pd;
Vl.jsx = Ts;
Vl.jsxs = Ts;
ks.exports = Vl;
var f = ks.exports
  , Wi = {}
  , Ls = {
    exports: {}
}
  , He = {}
  , zs = {
    exports: {}
}
  , Ms = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, z) {
        var I = N.length;
        N.push(z);
        e: for (; 0 < I; ) {
            var B = I - 1 >>> 1
              , b = N[B];
            if (0 < l(b, z))
                N[B] = z,
                N[I] = b,
                I = B;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var z = N[0]
          , I = N.pop();
        if (I !== z) {
            N[0] = I;
            e: for (var B = 0, b = N.length, Se = b >>> 1; B < Se; ) {
                var ie = 2 * (B + 1) - 1
                  , Ne = N[ie]
                  , ce = ie + 1
                  , ee = N[ce];
                if (0 > l(Ne, I))
                    ce < b && 0 > l(ee, Ne) ? (N[B] = ee,
                    N[ce] = I,
                    B = ce) : (N[B] = Ne,
                    N[ie] = I,
                    B = ie);
                else if (ce < b && 0 > l(ee, I))
                    N[B] = ee,
                    N[ce] = I,
                    B = ce;
                else
                    break e
            }
        }
        return z
    }
    function l(N, z) {
        var I = N.sortIndex - z.sortIndex;
        return I !== 0 ? I : N.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , u = o.now();
        e.unstable_now = function() {
            return o.now() - u
        }
    }
    var a = []
      , s = []
      , v = 1
      , p = null
      , h = 3
      , g = !1
      , w = !1
      , S = !1
      , M = typeof setTimeout == "function" ? setTimeout : null
      , d = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(N) {
        for (var z = n(s); z !== null; ) {
            if (z.callback === null)
                r(s);
            else if (z.startTime <= N)
                r(s),
                z.sortIndex = z.expirationTime,
                t(a, z);
            else
                break;
            z = n(s)
        }
    }
    function y(N) {
        if (S = !1,
        m(N),
        !w)
            if (n(a) !== null)
                w = !0,
                ke(E);
            else {
                var z = n(s);
                z !== null && Ue(y, z.startTime - N)
            }
    }
    function E(N, z) {
        w = !1,
        S && (S = !1,
        d(_),
        _ = -1),
        g = !0;
        var I = h;
        try {
            for (m(z),
            p = n(a); p !== null && (!(p.expirationTime > z) || N && !O()); ) {
                var B = p.callback;
                if (typeof B == "function") {
                    p.callback = null,
                    h = p.priorityLevel;
                    var b = B(p.expirationTime <= z);
                    z = e.unstable_now(),
                    typeof b == "function" ? p.callback = b : p === n(a) && r(a),
                    m(z)
                } else
                    r(a);
                p = n(a)
            }
            if (p !== null)
                var Se = !0;
            else {
                var ie = n(s);
                ie !== null && Ue(y, ie.startTime - z),
                Se = !1
            }
            return Se
        } finally {
            p = null,
            h = I,
            g = !1
        }
    }
    var x = !1
      , j = null
      , _ = -1
      , R = 5
      , T = -1;
    function O() {
        return !(e.unstable_now() - T < R)
    }
    function C() {
        if (j !== null) {
            var N = e.unstable_now();
            T = N;
            var z = !0;
            try {
                z = j(!0, N)
            } finally {
                z ? D() : (x = !1,
                j = null)
            }
        } else
            x = !1
    }
    var D;
    if (typeof c == "function")
        D = function() {
            c(C)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel
          , le = L.port2;
        L.port1.onmessage = C,
        D = function() {
            le.postMessage(null)
        }
    } else
        D = function() {
            M(C, 0)
        }
        ;
    function ke(N) {
        j = N,
        x || (x = !0,
        D())
    }
    function Ue(N, z) {
        _ = M(function() {
            N(e.unstable_now())
        }, z)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || g || (w = !0,
        ke(E))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(N) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var z = 3;
            break;
        default:
            z = h
        }
        var I = h;
        h = z;
        try {
            return N()
        } finally {
            h = I
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, z) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var I = h;
        h = N;
        try {
            return z()
        } finally {
            h = I
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, z, I) {
        var B = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay,
        I = typeof I == "number" && 0 < I ? B + I : B) : I = B,
        N) {
        case 1:
            var b = -1;
            break;
        case 2:
            b = 250;
            break;
        case 5:
            b = 1073741823;
            break;
        case 4:
            b = 1e4;
            break;
        default:
            b = 5e3
        }
        return b = I + b,
        N = {
            id: v++,
            callback: z,
            priorityLevel: N,
            startTime: I,
            expirationTime: b,
            sortIndex: -1
        },
        I > B ? (N.sortIndex = I,
        t(s, N),
        n(a) === null && N === n(s) && (S ? (d(_),
        _ = -1) : S = !0,
        Ue(y, I - B))) : (N.sortIndex = b,
        t(a, N),
        w || g || (w = !0,
        ke(E))),
        N
    }
    ,
    e.unstable_shouldYield = O,
    e.unstable_wrapCallback = function(N) {
        var z = h;
        return function() {
            var I = h;
            h = z;
            try {
                return N.apply(this, arguments)
            } finally {
                h = I
            }
        }
    }
}
)(Ms);
zs.exports = Ms;
var zd = zs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is = we
  , $e = zd;
function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Rs = new Set
  , ar = {};
function un(e, t) {
    On(e, t),
    On(e + "Capture", t)
}
function On(e, t) {
    for (ar[e] = t,
    e = 0; e < t.length; e++)
        Rs.add(t[e])
}
var ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Vi = Object.prototype.hasOwnProperty
  , Md = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Qu = {}
  , Ku = {};
function Id(e) {
    return Vi.call(Ku, e) ? !0 : Vi.call(Qu, e) ? !1 : Md.test(e) ? Ku[e] = !0 : (Qu[e] = !0,
    !1)
}
function Rd(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Dd(e, t, n, r) {
    if (t === null || typeof t > "u" || Rd(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ce(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    he[e] = new Ce(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    he[t] = new Ce(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    he[e] = new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    he[e] = new Ce(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    he[e] = new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    he[e] = new Ce(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    he[e] = new Ce(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    he[e] = new Ce(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    he[e] = new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Vo = /[\-:]([a-z])/g;
function bo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Vo, bo);
    he[t] = new Ce(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Vo, bo);
    he[t] = new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Vo, bo);
    he[t] = new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    he[e] = new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)
});
he.xlinkHref = new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    he[e] = new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Qo(e, t, n, r) {
    var l = he.hasOwnProperty(t) ? he[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Dd(t, n, l, r) && (n = null),
    r || l === null ? Id(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var wt = Is.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Hr = Symbol.for("react.element")
  , fn = Symbol.for("react.portal")
  , dn = Symbol.for("react.fragment")
  , Ko = Symbol.for("react.strict_mode")
  , bi = Symbol.for("react.profiler")
  , Ds = Symbol.for("react.provider")
  , Fs = Symbol.for("react.context")
  , Yo = Symbol.for("react.forward_ref")
  , Qi = Symbol.for("react.suspense")
  , Ki = Symbol.for("react.suspense_list")
  , Xo = Symbol.for("react.memo")
  , Ct = Symbol.for("react.lazy")
  , $s = Symbol.for("react.offscreen")
  , Yu = Symbol.iterator;
function An(e) {
    return e === null || typeof e != "object" ? null : (e = Yu && e[Yu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var J = Object.assign, pi;
function Xn(e) {
    if (pi === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            pi = t && t[1] || ""
        }
    return `
` + pi + e
}
var mi = !1;
function hi(e, t) {
    if (!e || mi)
        return "";
    mi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (s) {
                    var r = s
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (s) {
                    r = s
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                r = s
            }
            e()
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (var l = s.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; )
                u--;
            for (; 1 <= o && 0 <= u; o--,
            u--)
                if (l[o] !== i[u]) {
                    if (o !== 1 || u !== 1)
                        do
                            if (o--,
                            u--,
                            0 > u || l[o] !== i[u]) {
                                var a = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= o && 0 <= u);
                    break
                }
        }
    } finally {
        mi = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Xn(e) : ""
}
function Fd(e) {
    switch (e.tag) {
    case 5:
        return Xn(e.type);
    case 16:
        return Xn("Lazy");
    case 13:
        return Xn("Suspense");
    case 19:
        return Xn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = hi(e.type, !1),
        e;
    case 11:
        return e = hi(e.type.render, !1),
        e;
    case 1:
        return e = hi(e.type, !0),
        e;
    default:
        return ""
    }
}
function Yi(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case dn:
        return "Fragment";
    case fn:
        return "Portal";
    case bi:
        return "Profiler";
    case Ko:
        return "StrictMode";
    case Qi:
        return "Suspense";
    case Ki:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Fs:
            return (e.displayName || "Context") + ".Consumer";
        case Ds:
            return (e._context.displayName || "Context") + ".Provider";
        case Yo:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Xo:
            return t = e.displayName || null,
            t !== null ? t : Yi(e.type) || "Memo";
        case Ct:
            t = e._payload,
            e = e._init;
            try {
                return Yi(e(t))
            } catch {}
        }
    return null
}
function $d(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Yi(t);
    case 8:
        return t === Ko ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Bt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Hs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Hd(e) {
    var t = Hs(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ar(e) {
    e._valueTracker || (e._valueTracker = Hd(e))
}
function As(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Hs(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function wl(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Xi(e, t) {
    var n = t.checked;
    return J({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Xu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Bt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Us(e, t) {
    t = t.checked,
    t != null && Qo(e, "checked", t, !1)
}
function Gi(e, t) {
    Us(e, t);
    var n = Bt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Zi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zi(e, t.type, Bt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Gu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Zi(e, t, n) {
    (t !== "number" || wl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Gn = Array.isArray;
function _n(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Bt(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function qi(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(k(91));
    return J({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Zu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(k(92));
            if (Gn(n)) {
                if (1 < n.length)
                    throw Error(k(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Bt(n)
    }
}
function Bs(e, t) {
    var n = Bt(t.value)
      , r = Bt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function qu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Ws(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ji(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ws(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ur, Vs = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ur = Ur || document.createElement("div"),
        Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ur.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function sr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Ad = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function(e) {
    Ad.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Jn[t] = Jn[e]
    })
});
function bs(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jn.hasOwnProperty(e) && Jn[e] ? ("" + t).trim() : t + "px"
}
function Qs(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = bs(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var Ud = J({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function eo(e, t) {
    if (t) {
        if (Ud[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(k(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(k(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(k(62))
    }
}
function to(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var no = null;
function Go(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var ro = null
  , En = null
  , jn = null;
function Ju(e) {
    if (e = Pr(e)) {
        if (typeof ro != "function")
            throw Error(k(280));
        var t = e.stateNode;
        t && (t = Xl(t),
        ro(e.stateNode, e.type, t))
    }
}
function Ks(e) {
    En ? jn ? jn.push(e) : jn = [e] : En = e
}
function Ys() {
    if (En) {
        var e = En
          , t = jn;
        if (jn = En = null,
        Ju(e),
        t)
            for (e = 0; e < t.length; e++)
                Ju(t[e])
    }
}
function Xs(e, t) {
    return e(t)
}
function Gs() {}
var vi = !1;
function Zs(e, t, n) {
    if (vi)
        return e(t, n);
    vi = !0;
    try {
        return Xs(e, t, n)
    } finally {
        vi = !1,
        (En !== null || jn !== null) && (Gs(),
        Ys())
    }
}
function cr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Xl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(k(231, t, typeof n));
    return n
}
var lo = !1;
if (ht)
    try {
        var Un = {};
        Object.defineProperty(Un, "passive", {
            get: function() {
                lo = !0
            }
        }),
        window.addEventListener("test", Un, Un),
        window.removeEventListener("test", Un, Un)
    } catch {
        lo = !1
    }
function Bd(e, t, n, r, l, i, o, u, a) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s)
    } catch (v) {
        this.onError(v)
    }
}
var er = !1
  , xl = null
  , kl = !1
  , io = null
  , Wd = {
    onError: function(e) {
        er = !0,
        xl = e
    }
};
function Vd(e, t, n, r, l, i, o, u, a) {
    er = !1,
    xl = null,
    Bd.apply(Wd, arguments)
}
function bd(e, t, n, r, l, i, o, u, a) {
    if (Vd.apply(this, arguments),
    er) {
        if (er) {
            var s = xl;
            er = !1,
            xl = null
        } else
            throw Error(k(198));
        kl || (kl = !0,
        io = s)
    }
}
function an(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function qs(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function ea(e) {
    if (an(e) !== e)
        throw Error(k(188))
}
function Qd(e) {
    var t = e.alternate;
    if (!t) {
        if (t = an(e),
        t === null)
            throw Error(k(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return ea(l),
                    e;
                if (i === r)
                    return ea(l),
                    t;
                i = i.sibling
            }
            throw Error(k(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var o = !1, u = l.child; u; ) {
                if (u === n) {
                    o = !0,
                    n = l,
                    r = i;
                    break
                }
                if (u === r) {
                    o = !0,
                    r = l,
                    n = i;
                    break
                }
                u = u.sibling
            }
            if (!o) {
                for (u = i.child; u; ) {
                    if (u === n) {
                        o = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (u === r) {
                        o = !0,
                        r = i,
                        n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!o)
                    throw Error(k(189))
            }
        }
        if (n.alternate !== r)
            throw Error(k(190))
    }
    if (n.tag !== 3)
        throw Error(k(188));
    return n.stateNode.current === n ? e : t
}
function Js(e) {
    return e = Qd(e),
    e !== null ? ec(e) : null
}
function ec(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ec(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var tc = $e.unstable_scheduleCallback
  , ta = $e.unstable_cancelCallback
  , Kd = $e.unstable_shouldYield
  , Yd = $e.unstable_requestPaint
  , re = $e.unstable_now
  , Xd = $e.unstable_getCurrentPriorityLevel
  , Zo = $e.unstable_ImmediatePriority
  , nc = $e.unstable_UserBlockingPriority
  , Sl = $e.unstable_NormalPriority
  , Gd = $e.unstable_LowPriority
  , rc = $e.unstable_IdlePriority
  , bl = null
  , ot = null;
function Zd(e) {
    if (ot && typeof ot.onCommitFiberRoot == "function")
        try {
            ot.onCommitFiberRoot(bl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Je = Math.clz32 ? Math.clz32 : ep
  , qd = Math.log
  , Jd = Math.LN2;
function ep(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (qd(e) / Jd | 0) | 0
}
var Br = 64
  , Wr = 4194304;
function Zn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function _l(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var u = o & ~l;
        u !== 0 ? r = Zn(u) : (i &= o,
        i !== 0 && (r = Zn(i)))
    } else
        o = n & ~l,
        o !== 0 ? r = Zn(o) : i !== 0 && (r = Zn(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Je(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function tp(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function np(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Je(i)
          , u = 1 << o
          , a = l[o];
        a === -1 ? (!(u & n) || u & r) && (l[o] = tp(u, t)) : a <= t && (e.expiredLanes |= u),
        i &= ~u
    }
}
function oo(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function lc() {
    var e = Br;
    return Br <<= 1,
    !(Br & 4194240) && (Br = 64),
    e
}
function gi(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Cr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Je(t),
    e[t] = n
}
function rp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Je(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function qo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Je(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var H = 0;
function ic(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var oc, Jo, uc, ac, sc, uo = !1, Vr = [], Mt = null, It = null, Rt = null, fr = new Map, dr = new Map, Pt = [], lp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function na(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Mt = null;
        break;
    case "dragenter":
    case "dragleave":
        It = null;
        break;
    case "mouseover":
    case "mouseout":
        Rt = null;
        break;
    case "pointerover":
    case "pointerout":
        fr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        dr.delete(t.pointerId)
    }
}
function Bn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = Pr(t),
    t !== null && Jo(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function ip(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return Mt = Bn(Mt, e, t, n, r, l),
        !0;
    case "dragenter":
        return It = Bn(It, e, t, n, r, l),
        !0;
    case "mouseover":
        return Rt = Bn(Rt, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return fr.set(i, Bn(fr.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        dr.set(i, Bn(dr.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function cc(e) {
    var t = Gt(e.target);
    if (t !== null) {
        var n = an(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = qs(n),
                t !== null) {
                    e.blockedOn = t,
                    sc(e.priority, function() {
                        uc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function al(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ao(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            no = r,
            n.target.dispatchEvent(r),
            no = null
        } else
            return t = Pr(n),
            t !== null && Jo(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ra(e, t, n) {
    al(e) && n.delete(t)
}
function op() {
    uo = !1,
    Mt !== null && al(Mt) && (Mt = null),
    It !== null && al(It) && (It = null),
    Rt !== null && al(Rt) && (Rt = null),
    fr.forEach(ra),
    dr.forEach(ra)
}
function Wn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    uo || (uo = !0,
    $e.unstable_scheduleCallback($e.unstable_NormalPriority, op)))
}
function pr(e) {
    function t(l) {
        return Wn(l, e)
    }
    if (0 < Vr.length) {
        Wn(Vr[0], e);
        for (var n = 1; n < Vr.length; n++) {
            var r = Vr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Mt !== null && Wn(Mt, e),
    It !== null && Wn(It, e),
    Rt !== null && Wn(Rt, e),
    fr.forEach(t),
    dr.forEach(t),
    n = 0; n < Pt.length; n++)
        r = Pt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Pt.length && (n = Pt[0],
    n.blockedOn === null); )
        cc(n),
        n.blockedOn === null && Pt.shift()
}
var Cn = wt.ReactCurrentBatchConfig
  , El = !0;
function up(e, t, n, r) {
    var l = H
      , i = Cn.transition;
    Cn.transition = null;
    try {
        H = 1,
        eu(e, t, n, r)
    } finally {
        H = l,
        Cn.transition = i
    }
}
function ap(e, t, n, r) {
    var l = H
      , i = Cn.transition;
    Cn.transition = null;
    try {
        H = 4,
        eu(e, t, n, r)
    } finally {
        H = l,
        Cn.transition = i
    }
}
function eu(e, t, n, r) {
    if (El) {
        var l = ao(e, t, n, r);
        if (l === null)
            Ni(e, t, r, jl, n),
            na(e, r);
        else if (ip(l, e, t, n, r))
            r.stopPropagation();
        else if (na(e, r),
        t & 4 && -1 < lp.indexOf(e)) {
            for (; l !== null; ) {
                var i = Pr(l);
                if (i !== null && oc(i),
                i = ao(e, t, n, r),
                i === null && Ni(e, t, r, jl, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            Ni(e, t, r, null, n)
    }
}
var jl = null;
function ao(e, t, n, r) {
    if (jl = null,
    e = Go(r),
    e = Gt(e),
    e !== null)
        if (t = an(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = qs(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return jl = e,
    null
}
function fc(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Xd()) {
        case Zo:
            return 1;
        case nc:
            return 4;
        case Sl:
        case Gd:
            return 16;
        case rc:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Tt = null
  , tu = null
  , sl = null;
function dc() {
    if (sl)
        return sl;
    var e, t = tu, n = t.length, r, l = "value"in Tt ? Tt.value : Tt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
        ;
    return sl = l.slice(e, 1 < r ? 1 - r : void 0)
}
function cl(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function br() {
    return !0
}
function la() {
    return !1
}
function Ae(e) {
    function t(n, r, l, i, o) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(i) : i[u]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? br : la,
        this.isPropagationStopped = la,
        this
    }
    return J(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = br)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = br)
        },
        persist: function() {},
        isPersistent: br
    }),
    t
}
var Fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, nu = Ae(Fn), Nr = J({}, Fn, {
    view: 0,
    detail: 0
}), sp = Ae(Nr), yi, wi, Vn, Ql = J({}, Nr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ru,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Vn && (Vn && e.type === "mousemove" ? (yi = e.screenX - Vn.screenX,
        wi = e.screenY - Vn.screenY) : wi = yi = 0,
        Vn = e),
        yi)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : wi
    }
}), ia = Ae(Ql), cp = J({}, Ql, {
    dataTransfer: 0
}), fp = Ae(cp), dp = J({}, Nr, {
    relatedTarget: 0
}), xi = Ae(dp), pp = J({}, Fn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), mp = Ae(pp), hp = J({}, Fn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), vp = Ae(hp), gp = J({}, Fn, {
    data: 0
}), oa = Ae(gp), yp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, wp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, xp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function kp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xp[e]) ? !!t[e] : !1
}
function ru() {
    return kp
}
var Sp = J({}, Nr, {
    key: function(e) {
        if (e.key) {
            var t = yp[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = cl(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wp[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ru,
    charCode: function(e) {
        return e.type === "keypress" ? cl(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? cl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , _p = Ae(Sp)
  , Ep = J({}, Ql, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , ua = Ae(Ep)
  , jp = J({}, Nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ru
})
  , Cp = Ae(jp)
  , Np = J({}, Fn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Pp = Ae(Np)
  , Op = J({}, Ql, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Tp = Ae(Op)
  , Lp = [9, 13, 27, 32]
  , lu = ht && "CompositionEvent"in window
  , tr = null;
ht && "documentMode"in document && (tr = document.documentMode);
var zp = ht && "TextEvent"in window && !tr
  , pc = ht && (!lu || tr && 8 < tr && 11 >= tr)
  , aa = " "
  , sa = !1;
function mc(e, t) {
    switch (e) {
    case "keyup":
        return Lp.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function hc(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var pn = !1;
function Mp(e, t) {
    switch (e) {
    case "compositionend":
        return hc(t);
    case "keypress":
        return t.which !== 32 ? null : (sa = !0,
        aa);
    case "textInput":
        return e = t.data,
        e === aa && sa ? null : e;
    default:
        return null
    }
}
function Ip(e, t) {
    if (pn)
        return e === "compositionend" || !lu && mc(e, t) ? (e = dc(),
        sl = tu = Tt = null,
        pn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return pc && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Rp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function ca(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rp[e.type] : t === "textarea"
}
function vc(e, t, n, r) {
    Ks(r),
    t = Cl(t, "onChange"),
    0 < t.length && (n = new nu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var nr = null
  , mr = null;
function Dp(e) {
    Nc(e, 0)
}
function Kl(e) {
    var t = vn(e);
    if (As(t))
        return e
}
function Fp(e, t) {
    if (e === "change")
        return t
}
var gc = !1;
if (ht) {
    var ki;
    if (ht) {
        var Si = "oninput"in document;
        if (!Si) {
            var fa = document.createElement("div");
            fa.setAttribute("oninput", "return;"),
            Si = typeof fa.oninput == "function"
        }
        ki = Si
    } else
        ki = !1;
    gc = ki && (!document.documentMode || 9 < document.documentMode)
}
function da() {
    nr && (nr.detachEvent("onpropertychange", yc),
    mr = nr = null)
}
function yc(e) {
    if (e.propertyName === "value" && Kl(mr)) {
        var t = [];
        vc(t, mr, e, Go(e)),
        Zs(Dp, t)
    }
}
function $p(e, t, n) {
    e === "focusin" ? (da(),
    nr = t,
    mr = n,
    nr.attachEvent("onpropertychange", yc)) : e === "focusout" && da()
}
function Hp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Kl(mr)
}
function Ap(e, t) {
    if (e === "click")
        return Kl(t)
}
function Up(e, t) {
    if (e === "input" || e === "change")
        return Kl(t)
}
function Bp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var tt = typeof Object.is == "function" ? Object.is : Bp;
function hr(e, t) {
    if (tt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Vi.call(t, l) || !tt(e[l], t[l]))
            return !1
    }
    return !0
}
function pa(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function ma(e, t) {
    var n = pa(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = pa(n)
    }
}
function wc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? wc(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function xc() {
    for (var e = window, t = wl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = wl(e.document)
    }
    return t
}
function iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Wp(e) {
    var t = xc()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && wc(n.ownerDocument.documentElement, n)) {
        if (r !== null && iu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = ma(n, i);
                var o = ma(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Vp = ht && "documentMode"in document && 11 >= document.documentMode
  , mn = null
  , so = null
  , rr = null
  , co = !1;
function ha(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    co || mn == null || mn !== wl(r) || (r = mn,
    "selectionStart"in r && iu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    rr && hr(rr, r) || (rr = r,
    r = Cl(so, "onSelect"),
    0 < r.length && (t = new nu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = mn)))
}
function Qr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var hn = {
    animationend: Qr("Animation", "AnimationEnd"),
    animationiteration: Qr("Animation", "AnimationIteration"),
    animationstart: Qr("Animation", "AnimationStart"),
    transitionend: Qr("Transition", "TransitionEnd")
}
  , _i = {}
  , kc = {};
ht && (kc = document.createElement("div").style,
"AnimationEvent"in window || (delete hn.animationend.animation,
delete hn.animationiteration.animation,
delete hn.animationstart.animation),
"TransitionEvent"in window || delete hn.transitionend.transition);
function Yl(e) {
    if (_i[e])
        return _i[e];
    if (!hn[e])
        return e;
    var t = hn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in kc)
            return _i[e] = t[n];
    return e
}
var Sc = Yl("animationend")
  , _c = Yl("animationiteration")
  , Ec = Yl("animationstart")
  , jc = Yl("transitionend")
  , Cc = new Map
  , va = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vt(e, t) {
    Cc.set(e, t),
    un(t, [e])
}
for (var Ei = 0; Ei < va.length; Ei++) {
    var ji = va[Ei]
      , bp = ji.toLowerCase()
      , Qp = ji[0].toUpperCase() + ji.slice(1);
    Vt(bp, "on" + Qp)
}
Vt(Sc, "onAnimationEnd");
Vt(_c, "onAnimationIteration");
Vt(Ec, "onAnimationStart");
Vt("dblclick", "onDoubleClick");
Vt("focusin", "onFocus");
Vt("focusout", "onBlur");
Vt(jc, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Kp = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
function ga(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    bd(r, t, void 0, e),
    e.currentTarget = null
}
function Nc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var u = r[o]
                      , a = u.instance
                      , s = u.currentTarget;
                    if (u = u.listener,
                    a !== i && l.isPropagationStopped())
                        break e;
                    ga(l, u, s),
                    i = a
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (u = r[o],
                    a = u.instance,
                    s = u.currentTarget,
                    u = u.listener,
                    a !== i && l.isPropagationStopped())
                        break e;
                    ga(l, u, s),
                    i = a
                }
        }
    }
    if (kl)
        throw e = io,
        kl = !1,
        io = null,
        e
}
function W(e, t) {
    var n = t[vo];
    n === void 0 && (n = t[vo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Pc(t, e, 2, !1),
    n.add(r))
}
function Ci(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Pc(n, e, r, t)
}
var Kr = "_reactListening" + Math.random().toString(36).slice(2);
function vr(e) {
    if (!e[Kr]) {
        e[Kr] = !0,
        Rs.forEach(function(n) {
            n !== "selectionchange" && (Kp.has(n) || Ci(n, !1, e),
            Ci(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Kr] || (t[Kr] = !0,
        Ci("selectionchange", !1, t))
    }
}
function Pc(e, t, n, r) {
    switch (fc(t)) {
    case 1:
        var l = up;
        break;
    case 4:
        l = ap;
        break;
    default:
        l = eu
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !lo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function Ni(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var a = o.tag;
                        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo,
                        a === l || a.nodeType === 8 && a.parentNode === l))
                            return;
                        o = o.return
                    }
                for (; u !== null; ) {
                    if (o = Gt(u),
                    o === null)
                        return;
                    if (a = o.tag,
                    a === 5 || a === 6) {
                        r = i = o;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    Zs(function() {
        var s = i
          , v = Go(n)
          , p = [];
        e: {
            var h = Cc.get(e);
            if (h !== void 0) {
                var g = nu
                  , w = e;
                switch (e) {
                case "keypress":
                    if (cl(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    g = _p;
                    break;
                case "focusin":
                    w = "focus",
                    g = xi;
                    break;
                case "focusout":
                    w = "blur",
                    g = xi;
                    break;
                case "beforeblur":
                case "afterblur":
                    g = xi;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    g = ia;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    g = fp;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    g = Cp;
                    break;
                case Sc:
                case _c:
                case Ec:
                    g = mp;
                    break;
                case jc:
                    g = Pp;
                    break;
                case "scroll":
                    g = sp;
                    break;
                case "wheel":
                    g = Tp;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    g = vp;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    g = ua
                }
                var S = (t & 4) !== 0
                  , M = !S && e === "scroll"
                  , d = S ? h !== null ? h + "Capture" : null : h;
                S = [];
                for (var c = s, m; c !== null; ) {
                    m = c;
                    var y = m.stateNode;
                    if (m.tag === 5 && y !== null && (m = y,
                    d !== null && (y = cr(c, d),
                    y != null && S.push(gr(c, y, m)))),
                    M)
                        break;
                    c = c.return
                }
                0 < S.length && (h = new g(h,w,null,n,v),
                p.push({
                    event: h,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                g = e === "mouseout" || e === "pointerout",
                h && n !== no && (w = n.relatedTarget || n.fromElement) && (Gt(w) || w[vt]))
                    break e;
                if ((g || h) && (h = v.window === v ? v : (h = v.ownerDocument) ? h.defaultView || h.parentWindow : window,
                g ? (w = n.relatedTarget || n.toElement,
                g = s,
                w = w ? Gt(w) : null,
                w !== null && (M = an(w),
                w !== M || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null,
                w = s),
                g !== w)) {
                    if (S = ia,
                    y = "onMouseLeave",
                    d = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (S = ua,
                    y = "onPointerLeave",
                    d = "onPointerEnter",
                    c = "pointer"),
                    M = g == null ? h : vn(g),
                    m = w == null ? h : vn(w),
                    h = new S(y,c + "leave",g,n,v),
                    h.target = M,
                    h.relatedTarget = m,
                    y = null,
                    Gt(v) === s && (S = new S(d,c + "enter",w,n,v),
                    S.target = m,
                    S.relatedTarget = M,
                    y = S),
                    M = y,
                    g && w)
                        t: {
                            for (S = g,
                            d = w,
                            c = 0,
                            m = S; m; m = cn(m))
                                c++;
                            for (m = 0,
                            y = d; y; y = cn(y))
                                m++;
                            for (; 0 < c - m; )
                                S = cn(S),
                                c--;
                            for (; 0 < m - c; )
                                d = cn(d),
                                m--;
                            for (; c--; ) {
                                if (S === d || d !== null && S === d.alternate)
                                    break t;
                                S = cn(S),
                                d = cn(d)
                            }
                            S = null
                        }
                    else
                        S = null;
                    g !== null && ya(p, h, g, S, !1),
                    w !== null && M !== null && ya(p, M, w, S, !0)
                }
            }
            e: {
                if (h = s ? vn(s) : window,
                g = h.nodeName && h.nodeName.toLowerCase(),
                g === "select" || g === "input" && h.type === "file")
                    var E = Fp;
                else if (ca(h))
                    if (gc)
                        E = Up;
                    else {
                        E = Hp;
                        var x = $p
                    }
                else
                    (g = h.nodeName) && g.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = Ap);
                if (E && (E = E(e, s))) {
                    vc(p, E, n, v);
                    break e
                }
                x && x(e, h, s),
                e === "focusout" && (x = h._wrapperState) && x.controlled && h.type === "number" && Zi(h, "number", h.value)
            }
            switch (x = s ? vn(s) : window,
            e) {
            case "focusin":
                (ca(x) || x.contentEditable === "true") && (mn = x,
                so = s,
                rr = null);
                break;
            case "focusout":
                rr = so = mn = null;
                break;
            case "mousedown":
                co = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                co = !1,
                ha(p, n, v);
                break;
            case "selectionchange":
                if (Vp)
                    break;
            case "keydown":
            case "keyup":
                ha(p, n, v)
            }
            var j;
            if (lu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                    }
                    _ = void 0
                }
            else
                pn ? mc(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
            _ && (pc && n.locale !== "ko" && (pn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && pn && (j = dc()) : (Tt = v,
            tu = "value"in Tt ? Tt.value : Tt.textContent,
            pn = !0)),
            x = Cl(s, _),
            0 < x.length && (_ = new oa(_,e,null,n,v),
            p.push({
                event: _,
                listeners: x
            }),
            j ? _.data = j : (j = hc(n),
            j !== null && (_.data = j)))),
            (j = zp ? Mp(e, n) : Ip(e, n)) && (s = Cl(s, "onBeforeInput"),
            0 < s.length && (v = new oa("onBeforeInput","beforeinput",null,n,v),
            p.push({
                event: v,
                listeners: s
            }),
            v.data = j))
        }
        Nc(p, t)
    })
}
function gr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Cl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = cr(e, n),
        i != null && r.unshift(gr(e, i, l)),
        i = cr(e, t),
        i != null && r.push(gr(e, i, l))),
        e = e.return
    }
    return r
}
function cn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function ya(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var u = n
          , a = u.alternate
          , s = u.stateNode;
        if (a !== null && a === r)
            break;
        u.tag === 5 && s !== null && (u = s,
        l ? (a = cr(n, i),
        a != null && o.unshift(gr(n, a, u))) : l || (a = cr(n, i),
        a != null && o.push(gr(n, a, u)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Yp = /\r\n?/g
  , Xp = /\u0000|\uFFFD/g;
function wa(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yp, `
`).replace(Xp, "")
}
function Yr(e, t, n) {
    if (t = wa(t),
    wa(e) !== t && n)
        throw Error(k(425))
}
function Nl() {}
var fo = null
  , po = null;
function mo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ho = typeof setTimeout == "function" ? setTimeout : void 0
  , Gp = typeof clearTimeout == "function" ? clearTimeout : void 0
  , xa = typeof Promise == "function" ? Promise : void 0
  , Zp = typeof queueMicrotask == "function" ? queueMicrotask : typeof xa < "u" ? function(e) {
    return xa.resolve(null).then(e).catch(qp)
}
: ho;
function qp(e) {
    setTimeout(function() {
        throw e
    })
}
function Pi(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    pr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    pr(t)
}
function Dt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function ka(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var $n = Math.random().toString(36).slice(2)
  , it = "__reactFiber$" + $n
  , yr = "__reactProps$" + $n
  , vt = "__reactContainer$" + $n
  , vo = "__reactEvents$" + $n
  , Jp = "__reactListeners$" + $n
  , em = "__reactHandles$" + $n;
function Gt(e) {
    var t = e[it];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[vt] || n[it]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = ka(e); e !== null; ) {
                    if (n = e[it])
                        return n;
                    e = ka(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Pr(e) {
    return e = e[it] || e[vt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function vn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(k(33))
}
function Xl(e) {
    return e[yr] || null
}
var go = []
  , gn = -1;
function bt(e) {
    return {
        current: e
    }
}
function V(e) {
    0 > gn || (e.current = go[gn],
    go[gn] = null,
    gn--)
}
function U(e, t) {
    gn++,
    go[gn] = e.current,
    e.current = t
}
var Wt = {}
  , xe = bt(Wt)
  , Le = bt(!1)
  , tn = Wt;
function Tn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Wt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function ze(e) {
    return e = e.childContextTypes,
    e != null
}
function Pl() {
    V(Le),
    V(xe)
}
function Sa(e, t, n) {
    if (xe.current !== Wt)
        throw Error(k(168));
    U(xe, t),
    U(Le, n)
}
function Oc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(k(108, $d(e) || "Unknown", l));
    return J({}, n, r)
}
function Ol(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wt,
    tn = xe.current,
    U(xe, e),
    U(Le, Le.current),
    !0
}
function _a(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(k(169));
    n ? (e = Oc(e, t, tn),
    r.__reactInternalMemoizedMergedChildContext = e,
    V(Le),
    V(xe),
    U(xe, e)) : V(Le),
    U(Le, n)
}
var ft = null
  , Gl = !1
  , Oi = !1;
function Tc(e) {
    ft === null ? ft = [e] : ft.push(e)
}
function tm(e) {
    Gl = !0,
    Tc(e)
}
function Qt() {
    if (!Oi && ft !== null) {
        Oi = !0;
        var e = 0
          , t = H;
        try {
            var n = ft;
            for (H = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            ft = null,
            Gl = !1
        } catch (l) {
            throw ft !== null && (ft = ft.slice(e + 1)),
            tc(Zo, Qt),
            l
        } finally {
            H = t,
            Oi = !1
        }
    }
    return null
}
var yn = []
  , wn = 0
  , Tl = null
  , Ll = 0
  , We = []
  , Ve = 0
  , nn = null
  , dt = 1
  , pt = "";
function Yt(e, t) {
    yn[wn++] = Ll,
    yn[wn++] = Tl,
    Tl = e,
    Ll = t
}
function Lc(e, t, n) {
    We[Ve++] = dt,
    We[Ve++] = pt,
    We[Ve++] = nn,
    nn = e;
    var r = dt;
    e = pt;
    var l = 32 - Je(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - Je(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        l -= o,
        dt = 1 << 32 - Je(t) + l | n << l | r,
        pt = i + e
    } else
        dt = 1 << i | n << l | r,
        pt = e
}
function ou(e) {
    e.return !== null && (Yt(e, 1),
    Lc(e, 1, 0))
}
function uu(e) {
    for (; e === Tl; )
        Tl = yn[--wn],
        yn[wn] = null,
        Ll = yn[--wn],
        yn[wn] = null;
    for (; e === nn; )
        nn = We[--Ve],
        We[Ve] = null,
        pt = We[--Ve],
        We[Ve] = null,
        dt = We[--Ve],
        We[Ve] = null
}
var Fe = null
  , De = null
  , K = !1
  , qe = null;
function zc(e, t) {
    var n = be(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Ea(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Fe = e,
        De = Dt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Fe = e,
        De = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = nn !== null ? {
            id: dt,
            overflow: pt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = be(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Fe = e,
        De = null,
        !0) : !1;
    default:
        return !1
    }
}
function yo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function wo(e) {
    if (K) {
        var t = De;
        if (t) {
            var n = t;
            if (!Ea(e, t)) {
                if (yo(e))
                    throw Error(k(418));
                t = Dt(n.nextSibling);
                var r = Fe;
                t && Ea(e, t) ? zc(r, n) : (e.flags = e.flags & -4097 | 2,
                K = !1,
                Fe = e)
            }
        } else {
            if (yo(e))
                throw Error(k(418));
            e.flags = e.flags & -4097 | 2,
            K = !1,
            Fe = e
        }
    }
}
function ja(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Fe = e
}
function Xr(e) {
    if (e !== Fe)
        return !1;
    if (!K)
        return ja(e),
        K = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !mo(e.type, e.memoizedProps)),
    t && (t = De)) {
        if (yo(e))
            throw Mc(),
            Error(k(418));
        for (; t; )
            zc(e, t),
            t = Dt(t.nextSibling)
    }
    if (ja(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(k(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            De = Dt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            De = null
        }
    } else
        De = Fe ? Dt(e.stateNode.nextSibling) : null;
    return !0
}
function Mc() {
    for (var e = De; e; )
        e = Dt(e.nextSibling)
}
function Ln() {
    De = Fe = null,
    K = !1
}
function au(e) {
    qe === null ? qe = [e] : qe.push(e)
}
var nm = wt.ReactCurrentBatchConfig;
function Ge(e, t) {
    if (e && e.defaultProps) {
        t = J({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var zl = bt(null)
  , Ml = null
  , xn = null
  , su = null;
function cu() {
    su = xn = Ml = null
}
function fu(e) {
    var t = zl.current;
    V(zl),
    e._currentValue = t
}
function xo(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Nn(e, t) {
    Ml = e,
    su = xn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0),
    e.firstContext = null)
}
function Ke(e) {
    var t = e._currentValue;
    if (su !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        xn === null) {
            if (Ml === null)
                throw Error(k(308));
            xn = e,
            Ml.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            xn = xn.next = e;
    return t
}
var Zt = null;
function du(e) {
    Zt === null ? Zt = [e] : Zt.push(e)
}
function Ic(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    du(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    gt(e, r)
}
function gt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Nt = !1;
function pu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Rc(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function mt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Ft(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    $ & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        gt(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    du(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    gt(e, n)
}
function fl(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        qo(e, n)
    }
}
function Ca(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Il(e, t, n, r) {
    var l = e.updateQueue;
    Nt = !1;
    var i = l.firstBaseUpdate
      , o = l.lastBaseUpdate
      , u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var a = u
          , s = a.next;
        a.next = null,
        o === null ? i = s : o.next = s,
        o = a;
        var v = e.alternate;
        v !== null && (v = v.updateQueue,
        u = v.lastBaseUpdate,
        u !== o && (u === null ? v.firstBaseUpdate = s : u.next = s,
        v.lastBaseUpdate = a))
    }
    if (i !== null) {
        var p = l.baseState;
        o = 0,
        v = s = a = null,
        u = i;
        do {
            var h = u.lane
              , g = u.eventTime;
            if ((r & h) === h) {
                v !== null && (v = v.next = {
                    eventTime: g,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var w = e
                      , S = u;
                    switch (h = t,
                    g = n,
                    S.tag) {
                    case 1:
                        if (w = S.payload,
                        typeof w == "function") {
                            p = w.call(g, p, h);
                            break e
                        }
                        p = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = S.payload,
                        h = typeof w == "function" ? w.call(g, p, h) : w,
                        h == null)
                            break e;
                        p = J({}, p, h);
                        break e;
                    case 2:
                        Nt = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64,
                h = l.effects,
                h === null ? l.effects = [u] : h.push(u))
            } else
                g = {
                    eventTime: g,
                    lane: h,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                v === null ? (s = v = g,
                a = p) : v = v.next = g,
                o |= h;
            if (u = u.next,
            u === null) {
                if (u = l.shared.pending,
                u === null)
                    break;
                h = u,
                u = h.next,
                h.next = null,
                l.lastBaseUpdate = h,
                l.shared.pending = null
            }
        } while (!0);
        if (v === null && (a = p),
        l.baseState = a,
        l.firstBaseUpdate = s,
        l.lastBaseUpdate = v,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                o |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        ln |= o,
        e.lanes = o,
        e.memoizedState = p
    }
}
function Na(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(k(191, l));
                l.call(r)
            }
        }
}
var Dc = new Is.Component().refs;
function ko(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : J({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Zl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? an(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ee()
          , l = Ht(e)
          , i = mt(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = Ft(e, i, l),
        t !== null && (et(t, e, l, r),
        fl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ee()
          , l = Ht(e)
          , i = mt(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Ft(e, i, l),
        t !== null && (et(t, e, l, r),
        fl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ee()
          , r = Ht(e)
          , l = mt(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = Ft(e, l, r),
        t !== null && (et(t, e, r, n),
        fl(t, e, r))
    }
};
function Pa(e, t, n, r, l, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !hr(n, r) || !hr(l, i) : !0
}
function Fc(e, t, n) {
    var r = !1
      , l = Wt
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ke(i) : (l = ze(t) ? tn : xe.current,
    r = t.contextTypes,
    i = (r = r != null) ? Tn(e, l) : Wt),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Zl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Oa(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zl.enqueueReplaceState(t, t.state, null)
}
function So(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = Dc,
    pu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = Ke(i) : (i = ze(t) ? tn : xe.current,
    l.context = Tn(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (ko(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && Zl.enqueueReplaceState(l, l.state, null),
    Il(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function bn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(k(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(k(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var u = l.refs;
                u === Dc && (u = l.refs = {}),
                o === null ? delete u[i] : u[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(k(284));
        if (!n._owner)
            throw Error(k(290, e))
    }
    return e
}
function Gr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ta(e) {
    var t = e._init;
    return t(e._payload)
}
function $c(e) {
    function t(d, c) {
        if (e) {
            var m = d.deletions;
            m === null ? (d.deletions = [c],
            d.flags |= 16) : m.push(c)
        }
    }
    function n(d, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(d, c),
            c = c.sibling;
        return null
    }
    function r(d, c) {
        for (d = new Map; c !== null; )
            c.key !== null ? d.set(c.key, c) : d.set(c.index, c),
            c = c.sibling;
        return d
    }
    function l(d, c) {
        return d = At(d, c),
        d.index = 0,
        d.sibling = null,
        d
    }
    function i(d, c, m) {
        return d.index = m,
        e ? (m = d.alternate,
        m !== null ? (m = m.index,
        m < c ? (d.flags |= 2,
        c) : m) : (d.flags |= 2,
        c)) : (d.flags |= 1048576,
        c)
    }
    function o(d) {
        return e && d.alternate === null && (d.flags |= 2),
        d
    }
    function u(d, c, m, y) {
        return c === null || c.tag !== 6 ? (c = Di(m, d.mode, y),
        c.return = d,
        c) : (c = l(c, m),
        c.return = d,
        c)
    }
    function a(d, c, m, y) {
        var E = m.type;
        return E === dn ? v(d, c, m.props.children, y, m.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ct && Ta(E) === c.type) ? (y = l(c, m.props),
        y.ref = bn(d, c, m),
        y.return = d,
        y) : (y = gl(m.type, m.key, m.props, null, d.mode, y),
        y.ref = bn(d, c, m),
        y.return = d,
        y)
    }
    function s(d, c, m, y) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Fi(m, d.mode, y),
        c.return = d,
        c) : (c = l(c, m.children || []),
        c.return = d,
        c)
    }
    function v(d, c, m, y, E) {
        return c === null || c.tag !== 7 ? (c = en(m, d.mode, y, E),
        c.return = d,
        c) : (c = l(c, m),
        c.return = d,
        c)
    }
    function p(d, c, m) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = Di("" + c, d.mode, m),
            c.return = d,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case Hr:
                return m = gl(c.type, c.key, c.props, null, d.mode, m),
                m.ref = bn(d, null, c),
                m.return = d,
                m;
            case fn:
                return c = Fi(c, d.mode, m),
                c.return = d,
                c;
            case Ct:
                var y = c._init;
                return p(d, y(c._payload), m)
            }
            if (Gn(c) || An(c))
                return c = en(c, d.mode, m, null),
                c.return = d,
                c;
            Gr(d, c)
        }
        return null
    }
    function h(d, c, m, y) {
        var E = c !== null ? c.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return E !== null ? null : u(d, c, "" + m, y);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Hr:
                return m.key === E ? a(d, c, m, y) : null;
            case fn:
                return m.key === E ? s(d, c, m, y) : null;
            case Ct:
                return E = m._init,
                h(d, c, E(m._payload), y)
            }
            if (Gn(m) || An(m))
                return E !== null ? null : v(d, c, m, y, null);
            Gr(d, m)
        }
        return null
    }
    function g(d, c, m, y, E) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return d = d.get(m) || null,
            u(c, d, "" + y, E);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Hr:
                return d = d.get(y.key === null ? m : y.key) || null,
                a(c, d, y, E);
            case fn:
                return d = d.get(y.key === null ? m : y.key) || null,
                s(c, d, y, E);
            case Ct:
                var x = y._init;
                return g(d, c, m, x(y._payload), E)
            }
            if (Gn(y) || An(y))
                return d = d.get(m) || null,
                v(c, d, y, E, null);
            Gr(c, y)
        }
        return null
    }
    function w(d, c, m, y) {
        for (var E = null, x = null, j = c, _ = c = 0, R = null; j !== null && _ < m.length; _++) {
            j.index > _ ? (R = j,
            j = null) : R = j.sibling;
            var T = h(d, j, m[_], y);
            if (T === null) {
                j === null && (j = R);
                break
            }
            e && j && T.alternate === null && t(d, j),
            c = i(T, c, _),
            x === null ? E = T : x.sibling = T,
            x = T,
            j = R
        }
        if (_ === m.length)
            return n(d, j),
            K && Yt(d, _),
            E;
        if (j === null) {
            for (; _ < m.length; _++)
                j = p(d, m[_], y),
                j !== null && (c = i(j, c, _),
                x === null ? E = j : x.sibling = j,
                x = j);
            return K && Yt(d, _),
            E
        }
        for (j = r(d, j); _ < m.length; _++)
            R = g(j, d, _, m[_], y),
            R !== null && (e && R.alternate !== null && j.delete(R.key === null ? _ : R.key),
            c = i(R, c, _),
            x === null ? E = R : x.sibling = R,
            x = R);
        return e && j.forEach(function(O) {
            return t(d, O)
        }),
        K && Yt(d, _),
        E
    }
    function S(d, c, m, y) {
        var E = An(m);
        if (typeof E != "function")
            throw Error(k(150));
        if (m = E.call(m),
        m == null)
            throw Error(k(151));
        for (var x = E = null, j = c, _ = c = 0, R = null, T = m.next(); j !== null && !T.done; _++,
        T = m.next()) {
            j.index > _ ? (R = j,
            j = null) : R = j.sibling;
            var O = h(d, j, T.value, y);
            if (O === null) {
                j === null && (j = R);
                break
            }
            e && j && O.alternate === null && t(d, j),
            c = i(O, c, _),
            x === null ? E = O : x.sibling = O,
            x = O,
            j = R
        }
        if (T.done)
            return n(d, j),
            K && Yt(d, _),
            E;
        if (j === null) {
            for (; !T.done; _++,
            T = m.next())
                T = p(d, T.value, y),
                T !== null && (c = i(T, c, _),
                x === null ? E = T : x.sibling = T,
                x = T);
            return K && Yt(d, _),
            E
        }
        for (j = r(d, j); !T.done; _++,
        T = m.next())
            T = g(j, d, _, T.value, y),
            T !== null && (e && T.alternate !== null && j.delete(T.key === null ? _ : T.key),
            c = i(T, c, _),
            x === null ? E = T : x.sibling = T,
            x = T);
        return e && j.forEach(function(C) {
            return t(d, C)
        }),
        K && Yt(d, _),
        E
    }
    function M(d, c, m, y) {
        if (typeof m == "object" && m !== null && m.type === dn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Hr:
                e: {
                    for (var E = m.key, x = c; x !== null; ) {
                        if (x.key === E) {
                            if (E = m.type,
                            E === dn) {
                                if (x.tag === 7) {
                                    n(d, x.sibling),
                                    c = l(x, m.props.children),
                                    c.return = d,
                                    d = c;
                                    break e
                                }
                            } else if (x.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ct && Ta(E) === x.type) {
                                n(d, x.sibling),
                                c = l(x, m.props),
                                c.ref = bn(d, x, m),
                                c.return = d,
                                d = c;
                                break e
                            }
                            n(d, x);
                            break
                        } else
                            t(d, x);
                        x = x.sibling
                    }
                    m.type === dn ? (c = en(m.props.children, d.mode, y, m.key),
                    c.return = d,
                    d = c) : (y = gl(m.type, m.key, m.props, null, d.mode, y),
                    y.ref = bn(d, c, m),
                    y.return = d,
                    d = y)
                }
                return o(d);
            case fn:
                e: {
                    for (x = m.key; c !== null; ) {
                        if (c.key === x)
                            if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                                n(d, c.sibling),
                                c = l(c, m.children || []),
                                c.return = d,
                                d = c;
                                break e
                            } else {
                                n(d, c);
                                break
                            }
                        else
                            t(d, c);
                        c = c.sibling
                    }
                    c = Fi(m, d.mode, y),
                    c.return = d,
                    d = c
                }
                return o(d);
            case Ct:
                return x = m._init,
                M(d, c, x(m._payload), y)
            }
            if (Gn(m))
                return w(d, c, m, y);
            if (An(m))
                return S(d, c, m, y);
            Gr(d, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        c !== null && c.tag === 6 ? (n(d, c.sibling),
        c = l(c, m),
        c.return = d,
        d = c) : (n(d, c),
        c = Di(m, d.mode, y),
        c.return = d,
        d = c),
        o(d)) : n(d, c)
    }
    return M
}
var zn = $c(!0)
  , Hc = $c(!1)
  , Or = {}
  , ut = bt(Or)
  , wr = bt(Or)
  , xr = bt(Or);
function qt(e) {
    if (e === Or)
        throw Error(k(174));
    return e
}
function mu(e, t) {
    switch (U(xr, t),
    U(wr, e),
    U(ut, Or),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ji(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ji(t, e)
    }
    V(ut),
    U(ut, t)
}
function Mn() {
    V(ut),
    V(wr),
    V(xr)
}
function Ac(e) {
    qt(xr.current);
    var t = qt(ut.current)
      , n = Ji(t, e.type);
    t !== n && (U(wr, e),
    U(ut, n))
}
function hu(e) {
    wr.current === e && (V(ut),
    V(wr))
}
var Z = bt(0);
function Rl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ti = [];
function vu() {
    for (var e = 0; e < Ti.length; e++)
        Ti[e]._workInProgressVersionPrimary = null;
    Ti.length = 0
}
var dl = wt.ReactCurrentDispatcher
  , Li = wt.ReactCurrentBatchConfig
  , rn = 0
  , q = null
  , ae = null
  , fe = null
  , Dl = !1
  , lr = !1
  , kr = 0
  , rm = 0;
function ve() {
    throw Error(k(321))
}
function gu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!tt(e[n], t[n]))
            return !1;
    return !0
}
function yu(e, t, n, r, l, i) {
    if (rn = i,
    q = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    dl.current = e === null || e.memoizedState === null ? um : am,
    e = n(r, l),
    lr) {
        i = 0;
        do {
            if (lr = !1,
            kr = 0,
            25 <= i)
                throw Error(k(301));
            i += 1,
            fe = ae = null,
            t.updateQueue = null,
            dl.current = sm,
            e = n(r, l)
        } while (lr)
    }
    if (dl.current = Fl,
    t = ae !== null && ae.next !== null,
    rn = 0,
    fe = ae = q = null,
    Dl = !1,
    t)
        throw Error(k(300));
    return e
}
function wu() {
    var e = kr !== 0;
    return kr = 0,
    e
}
function rt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return fe === null ? q.memoizedState = fe = e : fe = fe.next = e,
    fe
}
function Ye() {
    if (ae === null) {
        var e = q.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ae.next;
    var t = fe === null ? q.memoizedState : fe.next;
    if (t !== null)
        fe = t,
        ae = e;
    else {
        if (e === null)
            throw Error(k(310));
        ae = e,
        e = {
            memoizedState: ae.memoizedState,
            baseState: ae.baseState,
            baseQueue: ae.baseQueue,
            queue: ae.queue,
            next: null
        },
        fe === null ? q.memoizedState = fe = e : fe = fe.next = e
    }
    return fe
}
function Sr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function zi(e) {
    var t = Ye()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = ae
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next,
            i.next = o
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var u = o = null
          , a = null
          , s = i;
        do {
            var v = s.lane;
            if ((rn & v) === v)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                }),
                r = s.hasEagerState ? s.eagerState : e(r, s.action);
            else {
                var p = {
                    lane: v,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                a === null ? (u = a = p,
                o = r) : a = a.next = p,
                q.lanes |= v,
                ln |= v
            }
            s = s.next
        } while (s !== null && s !== i);
        a === null ? o = r : a.next = u,
        tt(r, t.memoizedState) || (Te = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            q.lanes |= i,
            ln |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Mi(e) {
    var t = Ye()
      , n = t.queue;
    if (n === null)
        throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== l);
        tt(i, t.memoizedState) || (Te = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Uc() {}
function Bc(e, t) {
    var n = q
      , r = Ye()
      , l = t()
      , i = !tt(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    Te = !0),
    r = r.queue,
    xu(bc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || fe !== null && fe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        _r(9, Vc.bind(null, n, r, l, t), void 0, null),
        de === null)
            throw Error(k(349));
        rn & 30 || Wc(n, t, l)
    }
    return l
}
function Wc(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    q.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Vc(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Qc(t) && Kc(e)
}
function bc(e, t, n) {
    return n(function() {
        Qc(t) && Kc(e)
    })
}
function Qc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !tt(e, n)
    } catch {
        return !0
    }
}
function Kc(e) {
    var t = gt(e, 1);
    t !== null && et(t, e, 1, -1)
}
function La(e) {
    var t = rt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = om.bind(null, q, e),
    [t.memoizedState, e]
}
function _r(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    q.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Yc() {
    return Ye().memoizedState
}
function pl(e, t, n, r) {
    var l = rt();
    q.flags |= e,
    l.memoizedState = _r(1 | t, n, void 0, r === void 0 ? null : r)
}
function ql(e, t, n, r) {
    var l = Ye();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ae !== null) {
        var o = ae.memoizedState;
        if (i = o.destroy,
        r !== null && gu(r, o.deps)) {
            l.memoizedState = _r(t, n, i, r);
            return
        }
    }
    q.flags |= e,
    l.memoizedState = _r(1 | t, n, i, r)
}
function za(e, t) {
    return pl(8390656, 8, e, t)
}
function xu(e, t) {
    return ql(2048, 8, e, t)
}
function Xc(e, t) {
    return ql(4, 2, e, t)
}
function Gc(e, t) {
    return ql(4, 4, e, t)
}
function Zc(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function qc(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ql(4, 4, Zc.bind(null, t, e), n)
}
function ku() {}
function Jc(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ef(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function tf(e, t, n) {
    return rn & 21 ? (tt(n, t) || (n = lc(),
    q.lanes |= n,
    ln |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Te = !0),
    e.memoizedState = n)
}
function lm(e, t) {
    var n = H;
    H = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Li.transition;
    Li.transition = {};
    try {
        e(!1),
        t()
    } finally {
        H = n,
        Li.transition = r
    }
}
function nf() {
    return Ye().memoizedState
}
function im(e, t, n) {
    var r = Ht(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    rf(e))
        lf(t, n);
    else if (n = Ic(e, t, n, r),
    n !== null) {
        var l = Ee();
        et(n, e, r, l),
        of(n, t, r)
    }
}
function om(e, t, n) {
    var r = Ht(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (rf(e))
        lf(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , u = i(o, n);
                if (l.hasEagerState = !0,
                l.eagerState = u,
                tt(u, o)) {
                    var a = t.interleaved;
                    a === null ? (l.next = l,
                    du(t)) : (l.next = a.next,
                    a.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = Ic(e, t, l, r),
        n !== null && (l = Ee(),
        et(n, e, r, l),
        of(n, t, r))
    }
}
function rf(e) {
    var t = e.alternate;
    return e === q || t !== null && t === q
}
function lf(e, t) {
    lr = Dl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function of(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        qo(e, n)
    }
}
var Fl = {
    readContext: Ke,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1
}
  , um = {
    readContext: Ke,
    useCallback: function(e, t) {
        return rt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ke,
    useEffect: za,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        pl(4194308, 4, Zc.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return pl(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return pl(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = rt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = rt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = im.bind(null, q, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = rt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: La,
    useDebugValue: ku,
    useDeferredValue: function(e) {
        return rt().memoizedState = e
    },
    useTransition: function() {
        var e = La(!1)
          , t = e[0];
        return e = lm.bind(null, e[1]),
        rt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = q
          , l = rt();
        if (K) {
            if (n === void 0)
                throw Error(k(407));
            n = n()
        } else {
            if (n = t(),
            de === null)
                throw Error(k(349));
            rn & 30 || Wc(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        za(bc.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        _r(9, Vc.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = rt()
          , t = de.identifierPrefix;
        if (K) {
            var n = pt
              , r = dt;
            n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = kr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = rm++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , am = {
    readContext: Ke,
    useCallback: Jc,
    useContext: Ke,
    useEffect: xu,
    useImperativeHandle: qc,
    useInsertionEffect: Xc,
    useLayoutEffect: Gc,
    useMemo: ef,
    useReducer: zi,
    useRef: Yc,
    useState: function() {
        return zi(Sr)
    },
    useDebugValue: ku,
    useDeferredValue: function(e) {
        var t = Ye();
        return tf(t, ae.memoizedState, e)
    },
    useTransition: function() {
        var e = zi(Sr)[0]
          , t = Ye().memoizedState;
        return [e, t]
    },
    useMutableSource: Uc,
    useSyncExternalStore: Bc,
    useId: nf,
    unstable_isNewReconciler: !1
}
  , sm = {
    readContext: Ke,
    useCallback: Jc,
    useContext: Ke,
    useEffect: xu,
    useImperativeHandle: qc,
    useInsertionEffect: Xc,
    useLayoutEffect: Gc,
    useMemo: ef,
    useReducer: Mi,
    useRef: Yc,
    useState: function() {
        return Mi(Sr)
    },
    useDebugValue: ku,
    useDeferredValue: function(e) {
        var t = Ye();
        return ae === null ? t.memoizedState = e : tf(t, ae.memoizedState, e)
    },
    useTransition: function() {
        var e = Mi(Sr)[0]
          , t = Ye().memoizedState;
        return [e, t]
    },
    useMutableSource: Uc,
    useSyncExternalStore: Bc,
    useId: nf,
    unstable_isNewReconciler: !1
};
function In(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Fd(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function Ii(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function _o(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var cm = typeof WeakMap == "function" ? WeakMap : Map;
function uf(e, t, n) {
    n = mt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Hl || (Hl = !0,
        Mo = r),
        _o(e, t)
    }
    ,
    n
}
function af(e, t, n) {
    n = mt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            _o(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        _o(e, t),
        typeof r != "function" && ($t === null ? $t = new Set([this]) : $t.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Ma(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new cm;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = Em.bind(null, e, t, n),
    t.then(e, e))
}
function Ia(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ra(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mt(-1, 1),
    t.tag = 2,
    Ft(n, t, 1))),
    n.lanes |= 1),
    e)
}
var fm = wt.ReactCurrentOwner
  , Te = !1;
function _e(e, t, n, r) {
    t.child = e === null ? Hc(t, null, n, r) : zn(t, e.child, n, r)
}
function Da(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return Nn(t, l),
    r = yu(e, t, n, r, i, l),
    n = wu(),
    e !== null && !Te ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    yt(e, t, l)) : (K && n && ou(t),
    t.flags |= 1,
    _e(e, t, r, l),
    t.child)
}
function Fa(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Ou(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        sf(e, t, i, r, l)) : (e = gl(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : hr,
        n(o, r) && e.ref === t.ref)
            return yt(e, t, l)
    }
    return t.flags |= 1,
    e = At(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function sf(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (hr(i, r) && e.ref === t.ref)
            if (Te = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (Te = !0);
            else
                return t.lanes = e.lanes,
                yt(e, t, l)
    }
    return Eo(e, t, n, r, l)
}
function cf(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            U(Sn, Re),
            Re |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                U(Sn, Re),
                Re |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            U(Sn, Re),
            Re |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        U(Sn, Re),
        Re |= r;
    return _e(e, t, l, n),
    t.child
}
function ff(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Eo(e, t, n, r, l) {
    var i = ze(n) ? tn : xe.current;
    return i = Tn(t, i),
    Nn(t, l),
    n = yu(e, t, n, r, i, l),
    r = wu(),
    e !== null && !Te ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    yt(e, t, l)) : (K && r && ou(t),
    t.flags |= 1,
    _e(e, t, n, l),
    t.child)
}
function $a(e, t, n, r, l) {
    if (ze(n)) {
        var i = !0;
        Ol(t)
    } else
        i = !1;
    if (Nn(t, l),
    t.stateNode === null)
        ml(e, t),
        Fc(t, n, r),
        So(t, n, r, l),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , u = t.memoizedProps;
        o.props = u;
        var a = o.context
          , s = n.contextType;
        typeof s == "object" && s !== null ? s = Ke(s) : (s = ze(n) ? tn : xe.current,
        s = Tn(t, s));
        var v = n.getDerivedStateFromProps
          , p = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== s) && Oa(t, o, r, s),
        Nt = !1;
        var h = t.memoizedState;
        o.state = h,
        Il(t, r, o, l),
        a = t.memoizedState,
        u !== r || h !== a || Le.current || Nt ? (typeof v == "function" && (ko(t, n, v, r),
        a = t.memoizedState),
        (u = Nt || Pa(t, n, u, r, h, a, s)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        o.props = r,
        o.state = a,
        o.context = s,
        r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Rc(e, t),
        u = t.memoizedProps,
        s = t.type === t.elementType ? u : Ge(t.type, u),
        o.props = s,
        p = t.pendingProps,
        h = o.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Ke(a) : (a = ze(n) ? tn : xe.current,
        a = Tn(t, a));
        var g = n.getDerivedStateFromProps;
        (v = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== p || h !== a) && Oa(t, o, r, a),
        Nt = !1,
        h = t.memoizedState,
        o.state = h,
        Il(t, r, o, l);
        var w = t.memoizedState;
        u !== p || h !== w || Le.current || Nt ? (typeof g == "function" && (ko(t, n, g, r),
        w = t.memoizedState),
        (s = Nt || Pa(t, n, s, r, h, w, a) || !1) ? (v || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, a),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, a)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        o.props = r,
        o.state = w,
        o.context = a,
        r = s) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return jo(e, t, n, r, i, l)
}
function jo(e, t, n, r, l, i) {
    ff(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return l && _a(t, n, !1),
        yt(e, t, i);
    r = t.stateNode,
    fm.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = zn(t, e.child, null, i),
    t.child = zn(t, null, u, i)) : _e(e, t, u, i),
    t.memoizedState = r.state,
    l && _a(t, n, !0),
    t.child
}
function df(e) {
    var t = e.stateNode;
    t.pendingContext ? Sa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sa(e, t.context, !1),
    mu(e, t.containerInfo)
}
function Ha(e, t, n, r, l) {
    return Ln(),
    au(l),
    t.flags |= 256,
    _e(e, t, n, r),
    t.child
}
var Co = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function No(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function pf(e, t, n) {
    var r = t.pendingProps, l = Z.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    U(Z, l & 1),
    e === null)
        return wo(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = ti(o, r, 0, null),
        e = en(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = No(n),
        t.memoizedState = Co,
        e) : Su(t, o));
    if (l = e.memoizedState,
    l !== null && (u = l.dehydrated,
    u !== null))
        return dm(e, t, o, r, u, l, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        l = e.child,
        u = l.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = At(l, a),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        u !== null ? i = At(u, i) : (i = en(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? No(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Co,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = At(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Su(e, t) {
    return t = ti({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Zr(e, t, n, r) {
    return r !== null && au(r),
    zn(t, e.child, null, n),
    e = Su(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function dm(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Ii(Error(k(422))),
        Zr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = ti({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = en(i, l, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && zn(t, e.child, null, o),
        t.child.memoizedState = No(o),
        t.memoizedState = Co,
        i);
    if (!(t.mode & 1))
        return Zr(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var u = r.dgst;
        return r = u,
        i = Error(k(419)),
        r = Ii(i, r, void 0),
        Zr(e, t, o, r)
    }
    if (u = (o & e.childLanes) !== 0,
    Te || u) {
        if (r = de,
        r !== null) {
            switch (o & -o) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            gt(e, l),
            et(r, e, l, -1))
        }
        return Pu(),
        r = Ii(Error(k(421))),
        Zr(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = jm.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    De = Dt(l.nextSibling),
    Fe = t,
    K = !0,
    qe = null,
    e !== null && (We[Ve++] = dt,
    We[Ve++] = pt,
    We[Ve++] = nn,
    dt = e.id,
    pt = e.overflow,
    nn = t),
    t = Su(t, r.children),
    t.flags |= 4096,
    t)
}
function Aa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    xo(e.return, t, n)
}
function Ri(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function mf(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (_e(e, t, r.children, n),
    r = Z.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Aa(e, n, t);
                else if (e.tag === 19)
                    Aa(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (U(Z, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && Rl(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Ri(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && Rl(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Ri(t, !0, n, null, i);
            break;
        case "together":
            Ri(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ml(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    ln |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(k(153));
    if (t.child !== null) {
        for (e = t.child,
        n = At(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = At(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function pm(e, t, n) {
    switch (t.tag) {
    case 3:
        df(t),
        Ln();
        break;
    case 5:
        Ac(t);
        break;
    case 1:
        ze(t.type) && Ol(t);
        break;
    case 4:
        mu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        U(zl, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (U(Z, Z.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? pf(e, t, n) : (U(Z, Z.current & 1),
            e = yt(e, t, n),
            e !== null ? e.sibling : null);
        U(Z, Z.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return mf(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        U(Z, Z.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        cf(e, t, n)
    }
    return yt(e, t, n)
}
var hf, Po, vf, gf;
hf = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Po = function() {}
;
vf = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        qt(ut.current);
        var i = null;
        switch (n) {
        case "input":
            l = Xi(e, l),
            r = Xi(e, r),
            i = [];
            break;
        case "select":
            l = J({}, l, {
                value: void 0
            }),
            r = J({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = qi(e, l),
            r = qi(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Nl)
        }
        eo(n, r);
        var o;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var u = l[s];
                    for (o in u)
                        u.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ar.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
        for (s in r) {
            var a = r[s];
            if (u = l != null ? l[s] : void 0,
            r.hasOwnProperty(s) && a !== u && (a != null || u != null))
                if (s === "style")
                    if (u) {
                        for (o in u)
                            !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in a)
                            a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}),
                            n[o] = a[o])
                    } else
                        n || (i || (i = []),
                        i.push(s, n)),
                        n = a;
                else
                    s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    u = u ? u.__html : void 0,
                    a != null && u !== a && (i = i || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (ar.hasOwnProperty(s) ? (a != null && s === "onScroll" && W("scroll", e),
                    i || u === a || (i = [])) : (i = i || []).push(s, a))
        }
        n && (i = i || []).push("style", n);
        var s = i;
        (t.updateQueue = s) && (t.flags |= 4)
    }
}
;
gf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Qn(e, t) {
    if (!K)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function mm(e, t, n) {
    var r = t.pendingProps;
    switch (uu(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ge(t),
        null;
    case 1:
        return ze(t.type) && Pl(),
        ge(t),
        null;
    case 3:
        return r = t.stateNode,
        Mn(),
        V(Le),
        V(xe),
        vu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Xr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        qe !== null && (Do(qe),
        qe = null))),
        Po(e, t),
        ge(t),
        null;
    case 5:
        hu(t);
        var l = qt(xr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            vf(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(k(166));
                return ge(t),
                null
            }
            if (e = qt(ut.current),
            Xr(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[it] = t,
                r[yr] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    W("cancel", r),
                    W("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    W("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < qn.length; l++)
                        W(qn[l], r);
                    break;
                case "source":
                    W("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    W("error", r),
                    W("load", r);
                    break;
                case "details":
                    W("toggle", r);
                    break;
                case "input":
                    Xu(r, i),
                    W("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    W("invalid", r);
                    break;
                case "textarea":
                    Zu(r, i),
                    W("invalid", r)
                }
                eo(n, i),
                l = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var u = i[o];
                        o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Yr(r.textContent, u, e),
                        l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Yr(r.textContent, u, e),
                        l = ["children", "" + u]) : ar.hasOwnProperty(o) && u != null && o === "onScroll" && W("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ar(r),
                    Gu(r, i, !0);
                    break;
                case "textarea":
                    Ar(r),
                    qu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Nl)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Ws(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[it] = t,
                e[yr] = r,
                hf(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = to(n, r),
                    n) {
                    case "dialog":
                        W("cancel", e),
                        W("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        W("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < qn.length; l++)
                            W(qn[l], e);
                        l = r;
                        break;
                    case "source":
                        W("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        W("error", e),
                        W("load", e),
                        l = r;
                        break;
                    case "details":
                        W("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Xu(e, r),
                        l = Xi(e, r),
                        W("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = J({}, r, {
                            value: void 0
                        }),
                        W("invalid", e);
                        break;
                    case "textarea":
                        Zu(e, r),
                        l = qi(e, r),
                        W("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    eo(n, l),
                    u = l;
                    for (i in u)
                        if (u.hasOwnProperty(i)) {
                            var a = u[i];
                            i === "style" ? Qs(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Vs(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && sr(e, a) : typeof a == "number" && sr(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ar.hasOwnProperty(i) ? a != null && i === "onScroll" && W("scroll", e) : a != null && Qo(e, i, a, o))
                        }
                    switch (n) {
                    case "input":
                        Ar(e),
                        Gu(e, r, !1);
                        break;
                    case "textarea":
                        Ar(e),
                        qu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Bt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? _n(e, !!r.multiple, i, !1) : r.defaultValue != null && _n(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = Nl)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ge(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            gf(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(k(166));
            if (n = qt(xr.current),
            qt(ut.current),
            Xr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[it] = t,
                (i = r.nodeValue !== n) && (e = Fe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Yr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Yr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[it] = t,
                t.stateNode = r
        }
        return ge(t),
        null;
    case 13:
        if (V(Z),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (K && De !== null && t.mode & 1 && !(t.flags & 128))
                Mc(),
                Ln(),
                t.flags |= 98560,
                i = !1;
            else if (i = Xr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(k(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(k(317));
                    i[it] = t
                } else
                    Ln(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ge(t),
                i = !1
            } else
                qe !== null && (Do(qe),
                qe = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Z.current & 1 ? se === 0 && (se = 3) : Pu())),
        t.updateQueue !== null && (t.flags |= 4),
        ge(t),
        null);
    case 4:
        return Mn(),
        Po(e, t),
        e === null && vr(t.stateNode.containerInfo),
        ge(t),
        null;
    case 10:
        return fu(t.type._context),
        ge(t),
        null;
    case 17:
        return ze(t.type) && Pl(),
        ge(t),
        null;
    case 19:
        if (V(Z),
        i = t.memoizedState,
        i === null)
            return ge(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                Qn(i, !1);
            else {
                if (se !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Rl(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Qn(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return U(Z, Z.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && re() > Rn && (t.flags |= 128,
                r = !0,
                Qn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Rl(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Qn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !K)
                        return ge(t),
                        null
                } else
                    2 * re() - i.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Qn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = re(),
        t.sibling = null,
        n = Z.current,
        U(Z, r ? n & 1 | 2 : n & 1),
        t) : (ge(t),
        null);
    case 22:
    case 23:
        return Nu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Re & 1073741824 && (ge(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(k(156, t.tag))
}
function hm(e, t) {
    switch (uu(t),
    t.tag) {
    case 1:
        return ze(t.type) && Pl(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Mn(),
        V(Le),
        V(xe),
        vu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return hu(t),
        null;
    case 13:
        if (V(Z),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(k(340));
            Ln()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return V(Z),
        null;
    case 4:
        return Mn(),
        null;
    case 10:
        return fu(t.type._context),
        null;
    case 22:
    case 23:
        return Nu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var qr = !1
  , ye = !1
  , vm = typeof WeakSet == "function" ? WeakSet : Set
  , P = null;
function kn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ne(e, t, r)
            }
        else
            n.current = null
}
function Oo(e, t, n) {
    try {
        n()
    } catch (r) {
        ne(e, t, r)
    }
}
var Ua = !1;
function gm(e, t) {
    if (fo = El,
    e = xc(),
    iu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , u = -1
                      , a = -1
                      , s = 0
                      , v = 0
                      , p = e
                      , h = null;
                    t: for (; ; ) {
                        for (var g; p !== n || l !== 0 && p.nodeType !== 3 || (u = o + l),
                        p !== i || r !== 0 && p.nodeType !== 3 || (a = o + r),
                        p.nodeType === 3 && (o += p.nodeValue.length),
                        (g = p.firstChild) !== null; )
                            h = p,
                            p = g;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (h === n && ++s === l && (u = o),
                            h === i && ++v === r && (a = o),
                            (g = p.nextSibling) !== null)
                                break;
                            p = h,
                            h = p.parentNode
                        }
                        p = g
                    }
                    n = u === -1 || a === -1 ? null : {
                        start: u,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (po = {
        focusedElem: e,
        selectionRange: n
    },
    El = !1,
    P = t; P !== null; )
        if (t = P,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            P = e;
        else
            for (; P !== null; ) {
                t = P;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var S = w.memoizedProps
                                  , M = w.memoizedState
                                  , d = t.stateNode
                                  , c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Ge(t.type, S), M);
                                d.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                        }
                } catch (y) {
                    ne(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    P = e;
                    break
                }
                P = t.return
            }
    return w = Ua,
    Ua = !1,
    w
}
function ir(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && Oo(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function Jl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function To(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function yf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    yf(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[it],
    delete t[yr],
    delete t[vo],
    delete t[Jp],
    delete t[em])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function wf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ba(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || wf(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Lo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Nl));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Lo(e, t, n),
        e = e.sibling; e !== null; )
            Lo(e, t, n),
            e = e.sibling
}
function zo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (zo(e, t, n),
        e = e.sibling; e !== null; )
            zo(e, t, n),
            e = e.sibling
}
var pe = null
  , Ze = !1;
function _t(e, t, n) {
    for (n = n.child; n !== null; )
        xf(e, t, n),
        n = n.sibling
}
function xf(e, t, n) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
        try {
            ot.onCommitFiberUnmount(bl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ye || kn(n, t);
    case 6:
        var r = pe
          , l = Ze;
        pe = null,
        _t(e, t, n),
        pe = r,
        Ze = l,
        pe !== null && (Ze ? (e = pe,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pe.removeChild(n.stateNode));
        break;
    case 18:
        pe !== null && (Ze ? (e = pe,
        n = n.stateNode,
        e.nodeType === 8 ? Pi(e.parentNode, n) : e.nodeType === 1 && Pi(e, n),
        pr(e)) : Pi(pe, n.stateNode));
        break;
    case 4:
        r = pe,
        l = Ze,
        pe = n.stateNode.containerInfo,
        Ze = !0,
        _t(e, t, n),
        pe = r,
        Ze = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ye && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Oo(n, t, o),
                l = l.next
            } while (l !== r)
        }
        _t(e, t, n);
        break;
    case 1:
        if (!ye && (kn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (u) {
                ne(n, t, u)
            }
        _t(e, t, n);
        break;
    case 21:
        _t(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null,
        _t(e, t, n),
        ye = r) : _t(e, t, n);
        break;
    default:
        _t(e, t, n)
    }
}
function Wa(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new vm),
        t.forEach(function(r) {
            var l = Cm.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function Xe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , o = t
                  , u = o;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                    case 5:
                        pe = u.stateNode,
                        Ze = !1;
                        break e;
                    case 3:
                        pe = u.stateNode.containerInfo,
                        Ze = !0;
                        break e;
                    case 4:
                        pe = u.stateNode.containerInfo,
                        Ze = !0;
                        break e
                    }
                    u = u.return
                }
                if (pe === null)
                    throw Error(k(160));
                xf(i, o, l),
                pe = null,
                Ze = !1;
                var a = l.alternate;
                a !== null && (a.return = null),
                l.return = null
            } catch (s) {
                ne(l, t, s)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            kf(t, e),
            t = t.sibling
}
function kf(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Xe(t, e),
        nt(e),
        r & 4) {
            try {
                ir(3, e, e.return),
                Jl(3, e)
            } catch (S) {
                ne(e, e.return, S)
            }
            try {
                ir(5, e, e.return)
            } catch (S) {
                ne(e, e.return, S)
            }
        }
        break;
    case 1:
        Xe(t, e),
        nt(e),
        r & 512 && n !== null && kn(n, n.return);
        break;
    case 5:
        if (Xe(t, e),
        nt(e),
        r & 512 && n !== null && kn(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                sr(l, "")
            } catch (S) {
                ne(e, e.return, S)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , u = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    u === "input" && i.type === "radio" && i.name != null && Us(l, i),
                    to(u, o);
                    var s = to(u, i);
                    for (o = 0; o < a.length; o += 2) {
                        var v = a[o]
                          , p = a[o + 1];
                        v === "style" ? Qs(l, p) : v === "dangerouslySetInnerHTML" ? Vs(l, p) : v === "children" ? sr(l, p) : Qo(l, v, p, s)
                    }
                    switch (u) {
                    case "input":
                        Gi(l, i);
                        break;
                    case "textarea":
                        Bs(l, i);
                        break;
                    case "select":
                        var h = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var g = i.value;
                        g != null ? _n(l, !!i.multiple, g, !1) : h !== !!i.multiple && (i.defaultValue != null ? _n(l, !!i.multiple, i.defaultValue, !0) : _n(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[yr] = i
                } catch (S) {
                    ne(e, e.return, S)
                }
        }
        break;
    case 6:
        if (Xe(t, e),
        nt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(k(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (S) {
                ne(e, e.return, S)
            }
        }
        break;
    case 3:
        if (Xe(t, e),
        nt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                pr(t.containerInfo)
            } catch (S) {
                ne(e, e.return, S)
            }
        break;
    case 4:
        Xe(t, e),
        nt(e);
        break;
    case 13:
        Xe(t, e),
        nt(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (ju = re())),
        r & 4 && Wa(e);
        break;
    case 22:
        if (v = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ye = (s = ye) || v,
        Xe(t, e),
        ye = s) : Xe(t, e),
        nt(e),
        r & 8192) {
            if (s = e.memoizedState !== null,
            (e.stateNode.isHidden = s) && !v && e.mode & 1)
                for (P = e,
                v = e.child; v !== null; ) {
                    for (p = P = v; P !== null; ) {
                        switch (h = P,
                        g = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ir(4, h, h.return);
                            break;
                        case 1:
                            kn(h, h.return);
                            var w = h.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (S) {
                                    ne(r, n, S)
                                }
                            }
                            break;
                        case 5:
                            kn(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                ba(p);
                                continue
                            }
                        }
                        g !== null ? (g.return = h,
                        P = g) : ba(p)
                    }
                    v = v.sibling
                }
            e: for (v = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (v === null) {
                        v = p;
                        try {
                            l = p.stateNode,
                            s ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = p.stateNode,
                            a = p.memoizedProps.style,
                            o = a != null && a.hasOwnProperty("display") ? a.display : null,
                            u.style.display = bs("display", o))
                        } catch (S) {
                            ne(e, e.return, S)
                        }
                    }
                } else if (p.tag === 6) {
                    if (v === null)
                        try {
                            p.stateNode.nodeValue = s ? "" : p.memoizedProps
                        } catch (S) {
                            ne(e, e.return, S)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    v === p && (v = null),
                    p = p.return
                }
                v === p && (v = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        Xe(t, e),
        nt(e),
        r & 4 && Wa(e);
        break;
    case 21:
        break;
    default:
        Xe(t, e),
        nt(e)
    }
}
function nt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (wf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (sr(l, ""),
                r.flags &= -33);
                var i = Ba(e);
                zo(e, i, l);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , u = Ba(e);
                Lo(e, u, o);
                break;
            default:
                throw Error(k(161))
            }
        } catch (a) {
            ne(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ym(e, t, n) {
    P = e,
    Sf(e)
}
function Sf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; P !== null; ) {
        var l = P
          , i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || qr;
            if (!o) {
                var u = l.alternate
                  , a = u !== null && u.memoizedState !== null || ye;
                u = qr;
                var s = ye;
                if (qr = o,
                (ye = a) && !s)
                    for (P = l; P !== null; )
                        o = P,
                        a = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Qa(l) : a !== null ? (a.return = o,
                        P = a) : Qa(l);
                for (; i !== null; )
                    P = i,
                    Sf(i),
                    i = i.sibling;
                P = l,
                qr = u,
                ye = s
            }
            Va(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            P = i) : Va(e)
    }
}
function Va(e) {
    for (; P !== null; ) {
        var t = P;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ye || Jl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ye)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Na(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Na(t, o, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var s = t.alternate;
                            if (s !== null) {
                                var v = s.memoizedState;
                                if (v !== null) {
                                    var p = v.dehydrated;
                                    p !== null && pr(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(k(163))
                    }
                ye || t.flags & 512 && To(t)
            } catch (h) {
                ne(t, t.return, h)
            }
        }
        if (t === e) {
            P = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            P = n;
            break
        }
        P = t.return
    }
}
function ba(e) {
    for (; P !== null; ) {
        var t = P;
        if (t === e) {
            P = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            P = n;
            break
        }
        P = t.return
    }
}
function Qa(e) {
    for (; P !== null; ) {
        var t = P;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Jl(4, t)
                } catch (a) {
                    ne(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        ne(t, l, a)
                    }
                }
                var i = t.return;
                try {
                    To(t)
                } catch (a) {
                    ne(t, i, a)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    To(t)
                } catch (a) {
                    ne(t, o, a)
                }
            }
        } catch (a) {
            ne(t, t.return, a)
        }
        if (t === e) {
            P = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return,
            P = u;
            break
        }
        P = t.return
    }
}
var wm = Math.ceil
  , $l = wt.ReactCurrentDispatcher
  , _u = wt.ReactCurrentOwner
  , Qe = wt.ReactCurrentBatchConfig
  , $ = 0
  , de = null
  , oe = null
  , me = 0
  , Re = 0
  , Sn = bt(0)
  , se = 0
  , Er = null
  , ln = 0
  , ei = 0
  , Eu = 0
  , or = null
  , Oe = null
  , ju = 0
  , Rn = 1 / 0
  , ct = null
  , Hl = !1
  , Mo = null
  , $t = null
  , Jr = !1
  , Lt = null
  , Al = 0
  , ur = 0
  , Io = null
  , hl = -1
  , vl = 0;
function Ee() {
    return $ & 6 ? re() : hl !== -1 ? hl : hl = re()
}
function Ht(e) {
    return e.mode & 1 ? $ & 2 && me !== 0 ? me & -me : nm.transition !== null ? (vl === 0 && (vl = lc()),
    vl) : (e = H,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : fc(e.type)),
    e) : 1
}
function et(e, t, n, r) {
    if (50 < ur)
        throw ur = 0,
        Io = null,
        Error(k(185));
    Cr(e, n, r),
    (!($ & 2) || e !== de) && (e === de && (!($ & 2) && (ei |= n),
    se === 4 && Ot(e, me)),
    Me(e, r),
    n === 1 && $ === 0 && !(t.mode & 1) && (Rn = re() + 500,
    Gl && Qt()))
}
function Me(e, t) {
    var n = e.callbackNode;
    np(e, t);
    var r = _l(e, e === de ? me : 0);
    if (r === 0)
        n !== null && ta(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ta(n),
        t === 1)
            e.tag === 0 ? tm(Ka.bind(null, e)) : Tc(Ka.bind(null, e)),
            Zp(function() {
                !($ & 6) && Qt()
            }),
            n = null;
        else {
            switch (ic(r)) {
            case 1:
                n = Zo;
                break;
            case 4:
                n = nc;
                break;
            case 16:
                n = Sl;
                break;
            case 536870912:
                n = rc;
                break;
            default:
                n = Sl
            }
            n = Tf(n, _f.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function _f(e, t) {
    if (hl = -1,
    vl = 0,
    $ & 6)
        throw Error(k(327));
    var n = e.callbackNode;
    if (Pn() && e.callbackNode !== n)
        return null;
    var r = _l(e, e === de ? me : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ul(e, r);
    else {
        t = r;
        var l = $;
        $ |= 2;
        var i = jf();
        (de !== e || me !== t) && (ct = null,
        Rn = re() + 500,
        Jt(e, t));
        do
            try {
                Sm();
                break
            } catch (u) {
                Ef(e, u)
            }
        while (!0);
        cu(),
        $l.current = i,
        $ = l,
        oe !== null ? t = 0 : (de = null,
        me = 0,
        t = se)
    }
    if (t !== 0) {
        if (t === 2 && (l = oo(e),
        l !== 0 && (r = l,
        t = Ro(e, l))),
        t === 1)
            throw n = Er,
            Jt(e, 0),
            Ot(e, r),
            Me(e, re()),
            n;
        if (t === 6)
            Ot(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !xm(l) && (t = Ul(e, r),
            t === 2 && (i = oo(e),
            i !== 0 && (r = i,
            t = Ro(e, i))),
            t === 1))
                throw n = Er,
                Jt(e, 0),
                Ot(e, r),
                Me(e, re()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(k(345));
            case 2:
                Xt(e, Oe, ct);
                break;
            case 3:
                if (Ot(e, r),
                (r & 130023424) === r && (t = ju + 500 - re(),
                10 < t)) {
                    if (_l(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        Ee(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = ho(Xt.bind(null, e, Oe, ct), t);
                    break
                }
                Xt(e, Oe, ct);
                break;
            case 4:
                if (Ot(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var o = 31 - Je(r);
                    i = 1 << o,
                    o = t[o],
                    o > l && (l = o),
                    r &= ~i
                }
                if (r = l,
                r = re() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wm(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ho(Xt.bind(null, e, Oe, ct), r);
                    break
                }
                Xt(e, Oe, ct);
                break;
            case 5:
                Xt(e, Oe, ct);
                break;
            default:
                throw Error(k(329))
            }
        }
    }
    return Me(e, re()),
    e.callbackNode === n ? _f.bind(null, e) : null
}
function Ro(e, t) {
    var n = or;
    return e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256),
    e = Ul(e, t),
    e !== 2 && (t = Oe,
    Oe = n,
    t !== null && Do(t)),
    e
}
function Do(e) {
    Oe === null ? Oe = e : Oe.push.apply(Oe, e)
}
function xm(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!tt(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Ot(e, t) {
    for (t &= ~Eu,
    t &= ~ei,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Je(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Ka(e) {
    if ($ & 6)
        throw Error(k(327));
    Pn();
    var t = _l(e, 0);
    if (!(t & 1))
        return Me(e, re()),
        null;
    var n = Ul(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = oo(e);
        r !== 0 && (t = r,
        n = Ro(e, r))
    }
    if (n === 1)
        throw n = Er,
        Jt(e, 0),
        Ot(e, t),
        Me(e, re()),
        n;
    if (n === 6)
        throw Error(k(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Xt(e, Oe, ct),
    Me(e, re()),
    null
}
function Cu(e, t) {
    var n = $;
    $ |= 1;
    try {
        return e(t)
    } finally {
        $ = n,
        $ === 0 && (Rn = re() + 500,
        Gl && Qt())
    }
}
function on(e) {
    Lt !== null && Lt.tag === 0 && !($ & 6) && Pn();
    var t = $;
    $ |= 1;
    var n = Qe.transition
      , r = H;
    try {
        if (Qe.transition = null,
        H = 1,
        e)
            return e()
    } finally {
        H = r,
        Qe.transition = n,
        $ = t,
        !($ & 6) && Qt()
    }
}
function Nu() {
    Re = Sn.current,
    V(Sn)
}
function Jt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Gp(n)),
    oe !== null)
        for (n = oe.return; n !== null; ) {
            var r = n;
            switch (uu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Pl();
                break;
            case 3:
                Mn(),
                V(Le),
                V(xe),
                vu();
                break;
            case 5:
                hu(r);
                break;
            case 4:
                Mn();
                break;
            case 13:
                V(Z);
                break;
            case 19:
                V(Z);
                break;
            case 10:
                fu(r.type._context);
                break;
            case 22:
            case 23:
                Nu()
            }
            n = n.return
        }
    if (de = e,
    oe = e = At(e.current, null),
    me = Re = t,
    se = 0,
    Er = null,
    Eu = ei = ln = 0,
    Oe = or = null,
    Zt !== null) {
        for (t = 0; t < Zt.length; t++)
            if (n = Zt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l,
                    r.next = o
                }
                n.pending = r
            }
        Zt = null
    }
    return e
}
function Ef(e, t) {
    do {
        var n = oe;
        try {
            if (cu(),
            dl.current = Fl,
            Dl) {
                for (var r = q.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                Dl = !1
            }
            if (rn = 0,
            fe = ae = q = null,
            lr = !1,
            kr = 0,
            _u.current = null,
            n === null || n.return === null) {
                se = 1,
                Er = t,
                oe = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , u = n
                  , a = t;
                if (t = me,
                u.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var s = a
                      , v = u
                      , p = v.tag;
                    if (!(v.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var h = v.alternate;
                        h ? (v.updateQueue = h.updateQueue,
                        v.memoizedState = h.memoizedState,
                        v.lanes = h.lanes) : (v.updateQueue = null,
                        v.memoizedState = null)
                    }
                    var g = Ia(o);
                    if (g !== null) {
                        g.flags &= -257,
                        Ra(g, o, u, i, t),
                        g.mode & 1 && Ma(i, s, t),
                        t = g,
                        a = s;
                        var w = t.updateQueue;
                        if (w === null) {
                            var S = new Set;
                            S.add(a),
                            t.updateQueue = S
                        } else
                            w.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ma(i, s, t),
                            Pu();
                            break e
                        }
                        a = Error(k(426))
                    }
                } else if (K && u.mode & 1) {
                    var M = Ia(o);
                    if (M !== null) {
                        !(M.flags & 65536) && (M.flags |= 256),
                        Ra(M, o, u, i, t),
                        au(In(a, u));
                        break e
                    }
                }
                i = a = In(a, u),
                se !== 4 && (se = 2),
                or === null ? or = [i] : or.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var d = uf(i, a, t);
                        Ca(i, d);
                        break e;
                    case 1:
                        u = a;
                        var c = i.type
                          , m = i.stateNode;
                        if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && ($t === null || !$t.has(m)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var y = af(i, u, t);
                            Ca(i, y);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Nf(n)
        } catch (E) {
            t = E,
            oe === n && n !== null && (oe = n = n.return);
            continue
        }
        break
    } while (!0)
}
function jf() {
    var e = $l.current;
    return $l.current = Fl,
    e === null ? Fl : e
}
function Pu() {
    (se === 0 || se === 3 || se === 2) && (se = 4),
    de === null || !(ln & 268435455) && !(ei & 268435455) || Ot(de, me)
}
function Ul(e, t) {
    var n = $;
    $ |= 2;
    var r = jf();
    (de !== e || me !== t) && (ct = null,
    Jt(e, t));
    do
        try {
            km();
            break
        } catch (l) {
            Ef(e, l)
        }
    while (!0);
    if (cu(),
    $ = n,
    $l.current = r,
    oe !== null)
        throw Error(k(261));
    return de = null,
    me = 0,
    se
}
function km() {
    for (; oe !== null; )
        Cf(oe)
}
function Sm() {
    for (; oe !== null && !Kd(); )
        Cf(oe)
}
function Cf(e) {
    var t = Of(e.alternate, e, Re);
    e.memoizedProps = e.pendingProps,
    t === null ? Nf(e) : oe = t,
    _u.current = null
}
function Nf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = hm(n, t),
            n !== null) {
                n.flags &= 32767,
                oe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                se = 6,
                oe = null;
                return
            }
        } else if (n = mm(n, t, Re),
        n !== null) {
            oe = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            oe = t;
            return
        }
        oe = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}
function Xt(e, t, n) {
    var r = H
      , l = Qe.transition;
    try {
        Qe.transition = null,
        H = 1,
        _m(e, t, n, r)
    } finally {
        Qe.transition = l,
        H = r
    }
    return null
}
function _m(e, t, n, r) {
    do
        Pn();
    while (Lt !== null);
    if ($ & 6)
        throw Error(k(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(k(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (rp(e, i),
    e === de && (oe = de = null,
    me = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Jr || (Jr = !0,
    Tf(Sl, function() {
        return Pn(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Qe.transition,
        Qe.transition = null;
        var o = H;
        H = 1;
        var u = $;
        $ |= 4,
        _u.current = null,
        gm(e, n),
        kf(n, e),
        Wp(po),
        El = !!fo,
        po = fo = null,
        e.current = n,
        ym(n),
        Yd(),
        $ = u,
        H = o,
        Qe.transition = i
    } else
        e.current = n;
    if (Jr && (Jr = !1,
    Lt = e,
    Al = l),
    i = e.pendingLanes,
    i === 0 && ($t = null),
    Zd(n.stateNode),
    Me(e, re()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (Hl)
        throw Hl = !1,
        e = Mo,
        Mo = null,
        e;
    return Al & 1 && e.tag !== 0 && Pn(),
    i = e.pendingLanes,
    i & 1 ? e === Io ? ur++ : (ur = 0,
    Io = e) : ur = 0,
    Qt(),
    null
}
function Pn() {
    if (Lt !== null) {
        var e = ic(Al)
          , t = Qe.transition
          , n = H;
        try {
            if (Qe.transition = null,
            H = 16 > e ? 16 : e,
            Lt === null)
                var r = !1;
            else {
                if (e = Lt,
                Lt = null,
                Al = 0,
                $ & 6)
                    throw Error(k(331));
                var l = $;
                for ($ |= 4,
                P = e.current; P !== null; ) {
                    var i = P
                      , o = i.child;
                    if (P.flags & 16) {
                        var u = i.deletions;
                        if (u !== null) {
                            for (var a = 0; a < u.length; a++) {
                                var s = u[a];
                                for (P = s; P !== null; ) {
                                    var v = P;
                                    switch (v.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ir(8, v, i)
                                    }
                                    var p = v.child;
                                    if (p !== null)
                                        p.return = v,
                                        P = p;
                                    else
                                        for (; P !== null; ) {
                                            v = P;
                                            var h = v.sibling
                                              , g = v.return;
                                            if (yf(v),
                                            v === s) {
                                                P = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = g,
                                                P = h;
                                                break
                                            }
                                            P = g
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var S = w.child;
                                if (S !== null) {
                                    w.child = null;
                                    do {
                                        var M = S.sibling;
                                        S.sibling = null,
                                        S = M
                                    } while (S !== null)
                                }
                            }
                            P = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        P = o;
                    else
                        e: for (; P !== null; ) {
                            if (i = P,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ir(9, i, i.return)
                                }
                            var d = i.sibling;
                            if (d !== null) {
                                d.return = i.return,
                                P = d;
                                break e
                            }
                            P = i.return
                        }
                }
                var c = e.current;
                for (P = c; P !== null; ) {
                    o = P;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null)
                        m.return = o,
                        P = m;
                    else
                        e: for (o = c; P !== null; ) {
                            if (u = P,
                            u.flags & 2048)
                                try {
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Jl(9, u)
                                    }
                                } catch (E) {
                                    ne(u, u.return, E)
                                }
                            if (u === o) {
                                P = null;
                                break e
                            }
                            var y = u.sibling;
                            if (y !== null) {
                                y.return = u.return,
                                P = y;
                                break e
                            }
                            P = u.return
                        }
                }
                if ($ = l,
                Qt(),
                ot && typeof ot.onPostCommitFiberRoot == "function")
                    try {
                        ot.onPostCommitFiberRoot(bl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            H = n,
            Qe.transition = t
        }
    }
    return !1
}
function Ya(e, t, n) {
    t = In(n, t),
    t = uf(e, t, 1),
    e = Ft(e, t, 1),
    t = Ee(),
    e !== null && (Cr(e, 1, t),
    Me(e, t))
}
function ne(e, t, n) {
    if (e.tag === 3)
        Ya(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ya(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r))) {
                    e = In(n, e),
                    e = af(t, e, 1),
                    t = Ft(t, e, 1),
                    e = Ee(),
                    t !== null && (Cr(t, 1, e),
                    Me(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Em(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ee(),
    e.pingedLanes |= e.suspendedLanes & n,
    de === e && (me & n) === n && (se === 4 || se === 3 && (me & 130023424) === me && 500 > re() - ju ? Jt(e, 0) : Eu |= n),
    Me(e, t)
}
function Pf(e, t) {
    t === 0 && (e.mode & 1 ? (t = Wr,
    Wr <<= 1,
    !(Wr & 130023424) && (Wr = 4194304)) : t = 1);
    var n = Ee();
    e = gt(e, t),
    e !== null && (Cr(e, t, n),
    Me(e, n))
}
function jm(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Pf(e, n)
}
function Cm(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(k(314))
    }
    r !== null && r.delete(t),
    Pf(e, n)
}
var Of;
Of = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Le.current)
            Te = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Te = !1,
                pm(e, t, n);
            Te = !!(e.flags & 131072)
        }
    else
        Te = !1,
        K && t.flags & 1048576 && Lc(t, Ll, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ml(e, t),
        e = t.pendingProps;
        var l = Tn(t, xe.current);
        Nn(t, n),
        l = yu(null, t, r, e, l, n);
        var i = wu();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ze(r) ? (i = !0,
        Ol(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        pu(t),
        l.updater = Zl,
        t.stateNode = l,
        l._reactInternals = t,
        So(t, r, e, n),
        t = jo(null, t, r, !0, i, n)) : (t.tag = 0,
        K && i && ou(t),
        _e(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ml(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Pm(r),
            e = Ge(r, e),
            l) {
            case 0:
                t = Eo(null, t, r, e, n);
                break e;
            case 1:
                t = $a(null, t, r, e, n);
                break e;
            case 11:
                t = Da(null, t, r, e, n);
                break e;
            case 14:
                t = Fa(null, t, r, Ge(r.type, e), n);
                break e
            }
            throw Error(k(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Ge(r, l),
        Eo(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Ge(r, l),
        $a(e, t, r, l, n);
    case 3:
        e: {
            if (df(t),
            e === null)
                throw Error(k(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            Rc(e, t),
            Il(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = In(Error(k(423)), t),
                    t = Ha(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = In(Error(k(424)), t),
                    t = Ha(e, t, r, n, l);
                    break e
                } else
                    for (De = Dt(t.stateNode.containerInfo.firstChild),
                    Fe = t,
                    K = !0,
                    qe = null,
                    n = Hc(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Ln(),
                r === l) {
                    t = yt(e, t, n);
                    break e
                }
                _e(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Ac(t),
        e === null && wo(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = l.children,
        mo(r, l) ? o = null : i !== null && mo(r, i) && (t.flags |= 32),
        ff(e, t),
        _e(e, t, o, n),
        t.child;
    case 6:
        return e === null && wo(t),
        null;
    case 13:
        return pf(e, t, n);
    case 4:
        return mu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = zn(t, null, r, n) : _e(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Ge(r, l),
        Da(e, t, r, l, n);
    case 7:
        return _e(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return _e(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return _e(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            o = l.value,
            U(zl, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (tt(i.value, o)) {
                    if (i.children === l.children && !Le.current) {
                        t = yt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var u = i.dependencies;
                        if (u !== null) {
                            o = i.child;
                            for (var a = u.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = mt(-1, n & -n),
                                        a.tag = 2;
                                        var s = i.updateQueue;
                                        if (s !== null) {
                                            s = s.shared;
                                            var v = s.pending;
                                            v === null ? a.next = a : (a.next = v.next,
                                            v.next = a),
                                            s.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    xo(i.return, n, t),
                                    u.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(k(341));
                            o.lanes |= n,
                            u = o.alternate,
                            u !== null && (u.lanes |= n),
                            xo(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            _e(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        Nn(t, n),
        l = Ke(l),
        r = r(l),
        t.flags |= 1,
        _e(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Ge(r, t.pendingProps),
        l = Ge(r.type, l),
        Fa(e, t, r, l, n);
    case 15:
        return sf(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Ge(r, l),
        ml(e, t),
        t.tag = 1,
        ze(r) ? (e = !0,
        Ol(t)) : e = !1,
        Nn(t, n),
        Fc(t, r, l),
        So(t, r, l, n),
        jo(null, t, r, !0, e, n);
    case 19:
        return mf(e, t, n);
    case 22:
        return cf(e, t, n)
    }
    throw Error(k(156, t.tag))
}
;
function Tf(e, t) {
    return tc(e, t)
}
function Nm(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function be(e, t, n, r) {
    return new Nm(e,t,n,r)
}
function Ou(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Pm(e) {
    if (typeof e == "function")
        return Ou(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Yo)
            return 11;
        if (e === Xo)
            return 14
    }
    return 2
}
function At(e, t) {
    var n = e.alternate;
    return n === null ? (n = be(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function gl(e, t, n, r, l, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Ou(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case dn:
            return en(n.children, l, i, t);
        case Ko:
            o = 8,
            l |= 8;
            break;
        case bi:
            return e = be(12, n, t, l | 2),
            e.elementType = bi,
            e.lanes = i,
            e;
        case Qi:
            return e = be(13, n, t, l),
            e.elementType = Qi,
            e.lanes = i,
            e;
        case Ki:
            return e = be(19, n, t, l),
            e.elementType = Ki,
            e.lanes = i,
            e;
        case $s:
            return ti(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Ds:
                    o = 10;
                    break e;
                case Fs:
                    o = 9;
                    break e;
                case Yo:
                    o = 11;
                    break e;
                case Xo:
                    o = 14;
                    break e;
                case Ct:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(k(130, e == null ? e : typeof e, ""))
        }
    return t = be(o, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function en(e, t, n, r) {
    return e = be(7, e, r, t),
    e.lanes = n,
    e
}
function ti(e, t, n, r) {
    return e = be(22, e, r, t),
    e.elementType = $s,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Di(e, t, n) {
    return e = be(6, e, null, t),
    e.lanes = n,
    e
}
function Fi(e, t, n) {
    return t = be(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Om(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = gi(0),
    this.expirationTimes = gi(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = gi(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function Tu(e, t, n, r, l, i, o, u, a) {
    return e = new Om(e,t,n,u,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = be(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    pu(i),
    e
}
function Tm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: fn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Lf(e) {
    if (!e)
        return Wt;
    e = e._reactInternals;
    e: {
        if (an(e) !== e || e.tag !== 1)
            throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ze(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ze(n))
            return Oc(e, n, t)
    }
    return t
}
function zf(e, t, n, r, l, i, o, u, a) {
    return e = Tu(n, r, !0, e, l, i, o, u, a),
    e.context = Lf(null),
    n = e.current,
    r = Ee(),
    l = Ht(n),
    i = mt(r, l),
    i.callback = t ?? null,
    Ft(n, i, l),
    e.current.lanes = l,
    Cr(e, l, r),
    Me(e, r),
    e
}
function ni(e, t, n, r) {
    var l = t.current
      , i = Ee()
      , o = Ht(l);
    return n = Lf(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = mt(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Ft(l, t, o),
    e !== null && (et(e, l, o, i),
    fl(e, l, o)),
    o
}
function Bl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Xa(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Lu(e, t) {
    Xa(e, t),
    (e = e.alternate) && Xa(e, t)
}
function Lm() {
    return null
}
var Mf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function zu(e) {
    this._internalRoot = e
}
ri.prototype.render = zu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(k(409));
    ni(e, t, null, null)
}
;
ri.prototype.unmount = zu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        on(function() {
            ni(null, e, null, null)
        }),
        t[vt] = null
    }
}
;
function ri(e) {
    this._internalRoot = e
}
ri.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ac();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++)
            ;
        Pt.splice(n, 0, e),
        n === 0 && cc(e)
    }
}
;
function Mu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function li(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ga() {}
function zm(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var s = Bl(o);
                i.call(s)
            }
        }
        var o = zf(t, r, e, 0, null, !1, !1, "", Ga);
        return e._reactRootContainer = o,
        e[vt] = o.current,
        vr(e.nodeType === 8 ? e.parentNode : e),
        on(),
        o
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var s = Bl(a);
            u.call(s)
        }
    }
    var a = Tu(e, 0, !1, null, null, !1, !1, "", Ga);
    return e._reactRootContainer = a,
    e[vt] = a.current,
    vr(e.nodeType === 8 ? e.parentNode : e),
    on(function() {
        ni(t, a, n, r)
    }),
    a
}
function ii(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var a = Bl(o);
                u.call(a)
            }
        }
        ni(t, o, e, l)
    } else
        o = zm(n, t, e, l, r);
    return Bl(o)
}
oc = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Zn(t.pendingLanes);
            n !== 0 && (qo(t, n | 1),
            Me(t, re()),
            !($ & 6) && (Rn = re() + 500,
            Qt()))
        }
        break;
    case 13:
        on(function() {
            var r = gt(e, 1);
            if (r !== null) {
                var l = Ee();
                et(r, e, 1, l)
            }
        }),
        Lu(e, 1)
    }
}
;
Jo = function(e) {
    if (e.tag === 13) {
        var t = gt(e, 134217728);
        if (t !== null) {
            var n = Ee();
            et(t, e, 134217728, n)
        }
        Lu(e, 134217728)
    }
}
;
uc = function(e) {
    if (e.tag === 13) {
        var t = Ht(e)
          , n = gt(e, t);
        if (n !== null) {
            var r = Ee();
            et(n, e, t, r)
        }
        Lu(e, t)
    }
}
;
ac = function() {
    return H
}
;
sc = function(e, t) {
    var n = H;
    try {
        return H = e,
        t()
    } finally {
        H = n
    }
}
;
ro = function(e, t, n) {
    switch (t) {
    case "input":
        if (Gi(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = Xl(r);
                    if (!l)
                        throw Error(k(90));
                    As(r),
                    Gi(r, l)
                }
            }
        }
        break;
    case "textarea":
        Bs(e, n);
        break;
    case "select":
        t = n.value,
        t != null && _n(e, !!n.multiple, t, !1)
    }
}
;
Xs = Cu;
Gs = on;
var Mm = {
    usingClientEntryPoint: !1,
    Events: [Pr, vn, Xl, Ks, Ys, Cu]
}
  , Kn = {
    findFiberByHostInstance: Gt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , Im = {
    bundleType: Kn.bundleType,
    version: Kn.version,
    rendererPackageName: Kn.rendererPackageName,
    rendererConfig: Kn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Js(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Kn.findFiberByHostInstance || Lm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var el = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!el.isDisabled && el.supportsFiber)
        try {
            bl = el.inject(Im),
            ot = el
        } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mm;
He.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mu(t))
        throw Error(k(200));
    return Tm(e, t, null, n)
}
;
He.createRoot = function(e, t) {
    if (!Mu(e))
        throw Error(k(299));
    var n = !1
      , r = ""
      , l = Mf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = Tu(e, 1, !1, null, null, n, !1, r, l),
    e[vt] = t.current,
    vr(e.nodeType === 8 ? e.parentNode : e),
    new zu(t)
}
;
He.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","),
        Error(k(268, e)));
    return e = Js(t),
    e = e === null ? null : e.stateNode,
    e
}
;
He.flushSync = function(e) {
    return on(e)
}
;
He.hydrate = function(e, t, n) {
    if (!li(t))
        throw Error(k(200));
    return ii(null, e, t, !0, n)
}
;
He.hydrateRoot = function(e, t, n) {
    if (!Mu(e))
        throw Error(k(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , o = Mf;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = zf(t, null, e, 1, n ?? null, l, !1, i, o),
    e[vt] = t.current,
    vr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new ri(t)
}
;
He.render = function(e, t, n) {
    if (!li(t))
        throw Error(k(200));
    return ii(null, e, t, !1, n)
}
;
He.unmountComponentAtNode = function(e) {
    if (!li(e))
        throw Error(k(40));
    return e._reactRootContainer ? (on(function() {
        ii(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[vt] = null
        })
    }),
    !0) : !1
}
;
He.unstable_batchedUpdates = Cu;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!li(n))
        throw Error(k(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(k(38));
    return ii(e, t, n, !1, r)
}
;
He.version = "18.2.0-next-9e3b772b8-20220608";
function If() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(If)
        } catch (e) {
            console.error(e)
        }
}
If(),
Ls.exports = He;
var Rf = Ls.exports
  , Za = Rf;
Wi.createRoot = Za.createRoot,
Wi.hydrateRoot = Za.hydrateRoot;
const Df = "/assets/cropped-htuge7tI.jpg"
  , Rm = "/assets/Samuel's Resume 2024 v2-qgCGa8TK.pdf"
  , Dm = ()=>f.jsxs("div", {
    id: "About",
    className: " min-h-screen  lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center",
    children: [f.jsx("img", {
        "data-aos": "fade-down",
        src: Df,
        width: 400,
        height: 400,
        className: "rounded border-2 p-1 border-fuchsia-500 img_glow",
        alt: ""
    }), f.jsxs("div", {
        className: "h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white",
        children: [f.jsx("h1", {
            "data-aos": "fade-right",
            className: "text-[50px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase",
            children: "About Me"
        }), f.jsxs("p", {
            "data-aos": "fade-left",
            children: [" I am a detail-oriented and skilled accountant with a passion for technology and cybersecurity. With a background in finance and accounting, I bring a unique perspective to software engineering, focusing on efficiency, accuracy, and security. Currently pursuing a BSc in Computer Science at ", f.jsx("a", {
                href: "https://www.kibo.school/",
                target: "_blank",
                rel: "noreferrer",
                className: "text-fuchsia-500 hover:underline",
                children: "Kibo School of Technology"
            }), ", I am deeply interested in cybersecurity engineering and building secure systems and applications. My enthusiasm for this field is fueled by listening to cybersecurity podcasts and watching hacking documentaries."]
        }), f.jsxs("p", {
            "data-aos": "fade-right",
            children: [" I leverage traditional programming languages like Python, Javascript and no-code/low-code automation tools like Airtable, Zapier, Make, and Glide to create efficient solutions. Currently, I'm an Automations Assistant Trainee, utilizing no-code/low-code tools to streamline business operations and analyze data. In a previous role at ", f.jsx("a", {
                href: "https://www.codeday.org/",
                target: "_blank",
                rel: "noreferrer",
                className: "text-fuchsia-500 hover:underline",
                children: "CodeDay Labs"
            }), ", I enhanced the user experience of the Zulip app and improved its documentation."]
        }), f.jsx("div", {
            className: "flex mt-8 gap-2",
            children: f.jsx("div", {
                className: "flex items-center justify-center",
                children: f.jsx("div", {
                    className: "flex space-x-2",
                    children: f.jsx("a", {
                        href: Rm,
                        download: "Samuel's Resume 2024 v2.pdf",
                        children: f.jsx("button", {
                            className: "neno-button shadow-x1 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden",
                            children: "Resume"
                        })
                    })
                })
            })
        })]
    })]
});
var Ff = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , qa = zt.createContext && zt.createContext(Ff)
  , Ut = function() {
    return Ut = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l])
        }
        return e
    }
    ,
    Ut.apply(this, arguments)
}
  , Fm = function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
            t.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[l]) && (n[r[l]] = e[r[l]]);
    return n
};
function $f(e) {
    return e && e.map(function(t, n) {
        return zt.createElement(t.tag, Ut({
            key: n
        }, t.attr), $f(t.child))
    })
}
function sn(e) {
    return function(t) {
        return zt.createElement($m, Ut({
            attr: Ut({}, e.attr)
        }, t), $f(e.child))
    }
}
function $m(e) {
    var t = function(n) {
        var r = e.attr, l = e.size, i = e.title, o = Fm(e, ["attr", "size", "title"]), u = l || n.size || "1em", a;
        return n.className && (a = n.className),
        e.className && (a = (a ? a + " " : "") + e.className),
        zt.createElement("svg", Ut({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, o, {
            className: a,
            style: Ut(Ut({
                color: e.color || n.color
            }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && zt.createElement("title", null, i), e.children)
    };
    return qa !== void 0 ? zt.createElement(qa.Consumer, null, function(n) {
        return t(n)
    }) : t(Ff)
}
function Hm(e) {
    return sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
            }
        }]
    })(e)
}
function Am(e) {
    return sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 496 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            }
        }]
    })(e)
}
function Hf(e) {
    return sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            }
        }]
    })(e)
}
function Af(e) {
    return sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"
            }
        }]
    })(e)
}
function Uf(e) {
    return sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            }
        }]
    })(e)
}
function Um(e) {
    return sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 352 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            }
        }]
    })(e)
}
var Bf = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(Yn, function() {
        return function(n) {
            function r(i) {
                if (l[i])
                    return l[i].exports;
                var o = l[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return n[i].call(o.exports, o, o.exports, r),
                o.loaded = !0,
                o.exports
            }
            var l = {};
            return r.m = n,
            r.c = l,
            r.p = "dist/",
            r(0)
        }([function(n, r, l) {
            function i(L) {
                return L && L.__esModule ? L : {
                    default: L
                }
            }
            var o = Object.assign || function(L) {
                for (var le = 1; le < arguments.length; le++) {
                    var ke = arguments[le];
                    for (var Ue in ke)
                        Object.prototype.hasOwnProperty.call(ke, Ue) && (L[Ue] = ke[Ue])
                }
                return L
            }
              , u = l(1)
              , a = (i(u),
            l(6))
              , s = i(a)
              , v = l(7)
              , p = i(v)
              , h = l(8)
              , g = i(h)
              , w = l(9)
              , S = i(w)
              , M = l(10)
              , d = i(M)
              , c = l(11)
              , m = i(c)
              , y = l(14)
              , E = i(y)
              , x = []
              , j = !1
              , _ = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }
              , R = function() {
                var L = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                if (L && (j = !0),
                j)
                    return x = (0,
                    m.default)(x, _),
                    (0,
                    d.default)(x, _.once),
                    x
            }
              , T = function() {
                x = (0,
                E.default)(),
                R()
            }
              , O = function() {
                x.forEach(function(L, le) {
                    L.node.removeAttribute("data-aos"),
                    L.node.removeAttribute("data-aos-easing"),
                    L.node.removeAttribute("data-aos-duration"),
                    L.node.removeAttribute("data-aos-delay")
                })
            }
              , C = function(L) {
                return L === !0 || L === "mobile" && S.default.mobile() || L === "phone" && S.default.phone() || L === "tablet" && S.default.tablet() || typeof L == "function" && L() === !0
            }
              , D = function(L) {
                _ = o(_, L),
                x = (0,
                E.default)();
                var le = document.all && !window.atob;
                return C(_.disable) || le ? O() : (_.disableMutationObserver || g.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                _.disableMutationObserver = !0),
                document.querySelector("body").setAttribute("data-aos-easing", _.easing),
                document.querySelector("body").setAttribute("data-aos-duration", _.duration),
                document.querySelector("body").setAttribute("data-aos-delay", _.delay),
                _.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? R(!0) : _.startEvent === "load" ? window.addEventListener(_.startEvent, function() {
                    R(!0)
                }) : document.addEventListener(_.startEvent, function() {
                    R(!0)
                }),
                window.addEventListener("resize", (0,
                p.default)(R, _.debounceDelay, !0)),
                window.addEventListener("orientationchange", (0,
                p.default)(R, _.debounceDelay, !0)),
                window.addEventListener("scroll", (0,
                s.default)(function() {
                    (0,
                    d.default)(x, _.once)
                }, _.throttleDelay)),
                _.disableMutationObserver || g.default.ready("[data-aos]", T),
                x)
            };
            n.exports = {
                init: D,
                refresh: R,
                refreshHard: T
            }
        }
        , function(n, r) {}
        , , , , , function(n, r) {
            (function(l) {
                function i(C, D, L) {
                    function le(A) {
                        var Pe = ie
                          , St = Ne;
                        return ie = Ne = void 0,
                        xt = A,
                        ee = C.apply(St, Pe)
                    }
                    function ke(A) {
                        return xt = A,
                        ue = setTimeout(z, D),
                        kt ? le(A) : ee
                    }
                    function Ue(A) {
                        var Pe = A - Ie
                          , St = A - xt
                          , Bu = D - Pe;
                        return st ? T(Bu, ce - St) : Bu
                    }
                    function N(A) {
                        var Pe = A - Ie
                          , St = A - xt;
                        return Ie === void 0 || Pe >= D || Pe < 0 || st && St >= ce
                    }
                    function z() {
                        var A = O();
                        return N(A) ? I(A) : void (ue = setTimeout(z, Ue(A)))
                    }
                    function I(A) {
                        return ue = void 0,
                        Y && ie ? le(A) : (ie = Ne = void 0,
                        ee)
                    }
                    function B() {
                        ue !== void 0 && clearTimeout(ue),
                        xt = 0,
                        ie = Ie = Ne = ue = void 0
                    }
                    function b() {
                        return ue === void 0 ? ee : I(O())
                    }
                    function Se() {
                        var A = O()
                          , Pe = N(A);
                        if (ie = arguments,
                        Ne = this,
                        Ie = A,
                        Pe) {
                            if (ue === void 0)
                                return ke(Ie);
                            if (st)
                                return ue = setTimeout(z, D),
                                le(Ie)
                        }
                        return ue === void 0 && (ue = setTimeout(z, D)),
                        ee
                    }
                    var ie, Ne, ce, ee, ue, Ie, xt = 0, kt = !1, st = !1, Y = !0;
                    if (typeof C != "function")
                        throw new TypeError(h);
                    return D = v(D) || 0,
                    u(L) && (kt = !!L.leading,
                    st = "maxWait"in L,
                    ce = st ? R(v(L.maxWait) || 0, D) : ce,
                    Y = "trailing"in L ? !!L.trailing : Y),
                    Se.cancel = B,
                    Se.flush = b,
                    Se
                }
                function o(C, D, L) {
                    var le = !0
                      , ke = !0;
                    if (typeof C != "function")
                        throw new TypeError(h);
                    return u(L) && (le = "leading"in L ? !!L.leading : le,
                    ke = "trailing"in L ? !!L.trailing : ke),
                    i(C, D, {
                        leading: le,
                        maxWait: D,
                        trailing: ke
                    })
                }
                function u(C) {
                    var D = typeof C > "u" ? "undefined" : p(C);
                    return !!C && (D == "object" || D == "function")
                }
                function a(C) {
                    return !!C && (typeof C > "u" ? "undefined" : p(C)) == "object"
                }
                function s(C) {
                    return (typeof C > "u" ? "undefined" : p(C)) == "symbol" || a(C) && _.call(C) == w
                }
                function v(C) {
                    if (typeof C == "number")
                        return C;
                    if (s(C))
                        return g;
                    if (u(C)) {
                        var D = typeof C.valueOf == "function" ? C.valueOf() : C;
                        C = u(D) ? D + "" : D
                    }
                    if (typeof C != "string")
                        return C === 0 ? C : +C;
                    C = C.replace(S, "");
                    var L = d.test(C);
                    return L || c.test(C) ? m(C.slice(2), L ? 2 : 8) : M.test(C) ? g : +C
                }
                var p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
                    return typeof C
                }
                : function(C) {
                    return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C
                }
                  , h = "Expected a function"
                  , g = NaN
                  , w = "[object Symbol]"
                  , S = /^\s+|\s+$/g
                  , M = /^[-+]0x[0-9a-f]+$/i
                  , d = /^0b[01]+$/i
                  , c = /^0o[0-7]+$/i
                  , m = parseInt
                  , y = (typeof l > "u" ? "undefined" : p(l)) == "object" && l && l.Object === Object && l
                  , E = (typeof self > "u" ? "undefined" : p(self)) == "object" && self && self.Object === Object && self
                  , x = y || E || Function("return this")()
                  , j = Object.prototype
                  , _ = j.toString
                  , R = Math.max
                  , T = Math.min
                  , O = function() {
                    return x.Date.now()
                };
                n.exports = o
            }
            ).call(r, function() {
                return this
            }())
        }
        , function(n, r) {
            (function(l) {
                function i(O, C, D) {
                    function L(Y) {
                        var A = Se
                          , Pe = ie;
                        return Se = ie = void 0,
                        Ie = Y,
                        ce = O.apply(Pe, A)
                    }
                    function le(Y) {
                        return Ie = Y,
                        ee = setTimeout(N, C),
                        xt ? L(Y) : ce
                    }
                    function ke(Y) {
                        var A = Y - ue
                          , Pe = Y - Ie
                          , St = C - A;
                        return kt ? R(St, Ne - Pe) : St
                    }
                    function Ue(Y) {
                        var A = Y - ue
                          , Pe = Y - Ie;
                        return ue === void 0 || A >= C || A < 0 || kt && Pe >= Ne
                    }
                    function N() {
                        var Y = T();
                        return Ue(Y) ? z(Y) : void (ee = setTimeout(N, ke(Y)))
                    }
                    function z(Y) {
                        return ee = void 0,
                        st && Se ? L(Y) : (Se = ie = void 0,
                        ce)
                    }
                    function I() {
                        ee !== void 0 && clearTimeout(ee),
                        Ie = 0,
                        Se = ue = ie = ee = void 0
                    }
                    function B() {
                        return ee === void 0 ? ce : z(T())
                    }
                    function b() {
                        var Y = T()
                          , A = Ue(Y);
                        if (Se = arguments,
                        ie = this,
                        ue = Y,
                        A) {
                            if (ee === void 0)
                                return le(ue);
                            if (kt)
                                return ee = setTimeout(N, C),
                                L(ue)
                        }
                        return ee === void 0 && (ee = setTimeout(N, C)),
                        ce
                    }
                    var Se, ie, Ne, ce, ee, ue, Ie = 0, xt = !1, kt = !1, st = !0;
                    if (typeof O != "function")
                        throw new TypeError(p);
                    return C = s(C) || 0,
                    o(D) && (xt = !!D.leading,
                    kt = "maxWait"in D,
                    Ne = kt ? _(s(D.maxWait) || 0, C) : Ne,
                    st = "trailing"in D ? !!D.trailing : st),
                    b.cancel = I,
                    b.flush = B,
                    b
                }
                function o(O) {
                    var C = typeof O > "u" ? "undefined" : v(O);
                    return !!O && (C == "object" || C == "function")
                }
                function u(O) {
                    return !!O && (typeof O > "u" ? "undefined" : v(O)) == "object"
                }
                function a(O) {
                    return (typeof O > "u" ? "undefined" : v(O)) == "symbol" || u(O) && j.call(O) == g
                }
                function s(O) {
                    if (typeof O == "number")
                        return O;
                    if (a(O))
                        return h;
                    if (o(O)) {
                        var C = typeof O.valueOf == "function" ? O.valueOf() : O;
                        O = o(C) ? C + "" : C
                    }
                    if (typeof O != "string")
                        return O === 0 ? O : +O;
                    O = O.replace(w, "");
                    var D = M.test(O);
                    return D || d.test(O) ? c(O.slice(2), D ? 2 : 8) : S.test(O) ? h : +O
                }
                var v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(O) {
                    return typeof O
                }
                : function(O) {
                    return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O
                }
                  , p = "Expected a function"
                  , h = NaN
                  , g = "[object Symbol]"
                  , w = /^\s+|\s+$/g
                  , S = /^[-+]0x[0-9a-f]+$/i
                  , M = /^0b[01]+$/i
                  , d = /^0o[0-7]+$/i
                  , c = parseInt
                  , m = (typeof l > "u" ? "undefined" : v(l)) == "object" && l && l.Object === Object && l
                  , y = (typeof self > "u" ? "undefined" : v(self)) == "object" && self && self.Object === Object && self
                  , E = m || y || Function("return this")()
                  , x = Object.prototype
                  , j = x.toString
                  , _ = Math.max
                  , R = Math.min
                  , T = function() {
                    return E.Date.now()
                };
                n.exports = i
            }
            ).call(r, function() {
                return this
            }())
        }
        , function(n, r) {
            function l(v) {
                var p = void 0
                  , h = void 0;
                for (p = 0; p < v.length; p += 1)
                    if (h = v[p],
                    h.dataset && h.dataset.aos || h.children && l(h.children))
                        return !0;
                return !1
            }
            function i() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }
            function o() {
                return !!i()
            }
            function u(v, p) {
                var h = window.document
                  , g = i()
                  , w = new g(a);
                s = p,
                w.observe(h.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
            function a(v) {
                v && v.forEach(function(p) {
                    var h = Array.prototype.slice.call(p.addedNodes)
                      , g = Array.prototype.slice.call(p.removedNodes)
                      , w = h.concat(g);
                    if (l(w))
                        return s()
                })
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var s = function() {};
            r.default = {
                isSupported: o,
                ready: u
            }
        }
        , function(n, r) {
            function l(h, g) {
                if (!(h instanceof g))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = function() {
                function h(g, w) {
                    for (var S = 0; S < w.length; S++) {
                        var M = w[S];
                        M.enumerable = M.enumerable || !1,
                        M.configurable = !0,
                        "value"in M && (M.writable = !0),
                        Object.defineProperty(g, M.key, M)
                    }
                }
                return function(g, w, S) {
                    return w && h(g.prototype, w),
                    S && h(g, S),
                    g
                }
            }()
              , u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
              , a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
              , s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
              , v = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
              , p = function() {
                function h() {
                    l(this, h)
                }
                return o(h, [{
                    key: "phone",
                    value: function() {
                        var g = i();
                        return !(!u.test(g) && !a.test(g.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var g = i();
                        return !(!s.test(g) && !v.test(g.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]),
                h
            }();
            r.default = new p
        }
        , function(n, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var l = function(o, u, a) {
                var s = o.node.getAttribute("data-aos-once");
                u > o.position ? o.node.classList.add("aos-animate") : typeof s < "u" && (s === "false" || !a && s !== "true") && o.node.classList.remove("aos-animate")
            }
              , i = function(o, u) {
                var a = window.pageYOffset
                  , s = window.innerHeight;
                o.forEach(function(v, p) {
                    l(v, s + a, u)
                })
            };
            r.default = i
        }
        , function(n, r, l) {
            function i(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = l(12)
              , u = i(o)
              , a = function(s, v) {
                return s.forEach(function(p, h) {
                    p.node.classList.add("aos-init"),
                    p.position = (0,
                    u.default)(p.node, v.offset)
                }),
                s
            };
            r.default = a
        }
        , function(n, r, l) {
            function i(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = l(13)
              , u = i(o)
              , a = function(s, v) {
                var p = 0
                  , h = 0
                  , g = window.innerHeight
                  , w = {
                    offset: s.getAttribute("data-aos-offset"),
                    anchor: s.getAttribute("data-aos-anchor"),
                    anchorPlacement: s.getAttribute("data-aos-anchor-placement")
                };
                switch (w.offset && !isNaN(w.offset) && (h = parseInt(w.offset)),
                w.anchor && document.querySelectorAll(w.anchor) && (s = document.querySelectorAll(w.anchor)[0]),
                p = (0,
                u.default)(s).top,
                w.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    p += s.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    p += s.offsetHeight;
                    break;
                case "top-center":
                    p += g / 2;
                    break;
                case "bottom-center":
                    p += g / 2 + s.offsetHeight;
                    break;
                case "center-center":
                    p += g / 2 + s.offsetHeight / 2;
                    break;
                case "top-top":
                    p += g;
                    break;
                case "bottom-top":
                    p += s.offsetHeight + g;
                    break;
                case "center-top":
                    p += s.offsetHeight / 2 + g
                }
                return w.anchorPlacement || w.offset || isNaN(v) || (h = v),
                p + h
            };
            r.default = a
        }
        , function(n, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var l = function(i) {
                for (var o = 0, u = 0; i && !isNaN(i.offsetLeft) && !isNaN(i.offsetTop); )
                    o += i.offsetLeft - (i.tagName != "BODY" ? i.scrollLeft : 0),
                    u += i.offsetTop - (i.tagName != "BODY" ? i.scrollTop : 0),
                    i = i.offsetParent;
                return {
                    top: u,
                    left: o
                }
            };
            r.default = l
        }
        , function(n, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var l = function(i) {
                return i = i || document.querySelectorAll("[data-aos]"),
                Array.prototype.map.call(i, function(o) {
                    return {
                        node: o
                    }
                })
            };
            r.default = l
        }
        ])
    })
}
)(Bf);
var Bm = Bf.exports;
const Wm = Ho(Bm);
var Wf = {
    exports: {}
}
  , Vm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , bm = Vm
  , Qm = bm;
function Vf() {}
function bf() {}
bf.resetWarningCache = Vf;
var Km = function() {
    function e(r, l, i, o, u, a) {
        if (a !== Qm) {
            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw s.name = "Invariant Violation",
            s
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: bf,
        resetWarningCache: Vf
    };
    return n.PropTypes = n,
    n
};
Wf.exports = Km();
var Tr = Wf.exports;
const Ja = Ho(Tr)
  , Qf = ({texts: e})=>{
    const [t,n] = we.useState("")
      , [r,l] = we.useState(0)
      , i = "5rem";
    return we.useEffect(()=>{
        const o = setInterval(()=>{
            if (r < e.length) {
                const u = e[r];
                n(a=>a.length === u.length ? (l(s=>(s + 1) % e.length),
                "") : u.substring(0, a.length + 1))
            }
        }
        , 150);
        return ()=>clearInterval(o)
    }
    , [e, r]),
    f.jsx("div", {
        style: {
            height: i
        },
        children: f.jsx("h5", {
            className: "text-[30px] font-semibold mb-8 leading-normal",
            children: t
        })
    })
}
;
Qf.propTypes = {
    texts: Ja.arrayOf(Ja.string).isRequired
};
const Ym = ()=>(we.useEffect(()=>{
    Wm.init({
        easing: "ease-out-quart",
        delay: 0,
        duration: 750
    })
}
, []),
f.jsxs("div", {
    className: " min-h-screen  lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center",
    children: [f.jsxs("div", {
        "data-aos": "fade-up",
        className: "h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white",
        children: [f.jsxs("h1", {
            className: "text-[52px] font-semibold mb-8 leading-normal",
            children: ["Hey there, I'm ", f.jsx("span", {
                className: "text-fuchsia-500",
                children: " Samuel Kabuya"
            })]
        }), f.jsx(Qf, {
            texts: ["An AI & Automation Assistant", "Front End Developer", "Low Code & No Code Developer"]
        }), f.jsx("p", {
            "data-aos": "fade-left",
            children: "I'm a detail-oriented accountant with a passion for technology and cybersecurity. Leveraging traditional programming languages and no-code/low-code tools, I create efficient solutions. Currently, as an Automations Assistant Trainee, I streamline business operations using no-code/low-code tools."
        }), f.jsxs("p", {
            "data-aos": "fade-right",
            children: ["My previous role at as a Software Engineer Intern at ", f.jsx("a", {
                href: "https://www.codeday.org/",
                target: "_blank",
                rel: "noreferrer",
                className: "text-fuchsia-500 hover:underline",
                children: "CodeDay Labs"
            }), " involved enhancing the user experience of the ", f.jsx("a", {
                href: "https://zulip.com/",
                target: "_blank",
                rel: "noreferrer",
                className: "text-fuchsia-500 hover:underline",
                children: "Zulip "
            }), "open source project. With a background in finance and accounting, I bring a unique perspective to software engineering."]
        }), f.jsx("div", {
            className: "flex mt-8 gap-2",
            children: f.jsx("div", {
                className: "flex items-center justify-center",
                children: f.jsxs("div", {
                    className: "flex space-x-2",
                    children: [f.jsx("a", {
                        href: "https://www.linkedin.com/in/samuelkabuya/",
                        className: "text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: f.jsx(Hf, {
                            className: "text-[28px]"
                        })
                    }), f.jsx("a", {
                        href: "https://github.com/KabuyaSamuel",
                        className: "text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: f.jsx(Hm, {
                            className: "text-[28px]"
                        })
                    }), f.jsx("a", {
                        href: "https://medium.com/@samuelkabuya",
                        className: "text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: f.jsx(Af, {
                            className: "text-[28px]"
                        })
                    }), f.jsx("a", {
                        href: "https://github.com/",
                        className: "text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: f.jsx(Uf, {
                            className: "text-[28px]"
                        })
                    })]
                })
            })
        })]
    }), f.jsx("img", {
        src: Df,
        width: 530,
        height: 530,
        className: "rounded-full border-2 p-1 border-fuchsia-500 img_glow",
        alt: ""
    })]
}));
var te = {}
  , Iu = {}
  , Lr = {}
  , zr = {}
  , Kf = "Expected a function"
  , es = NaN
  , Xm = "[object Symbol]"
  , Gm = /^\s+|\s+$/g
  , Zm = /^[-+]0x[0-9a-f]+$/i
  , qm = /^0b[01]+$/i
  , Jm = /^0o[0-7]+$/i
  , eh = parseInt
  , th = typeof Yn == "object" && Yn && Yn.Object === Object && Yn
  , nh = typeof self == "object" && self && self.Object === Object && self
  , rh = th || nh || Function("return this")()
  , lh = Object.prototype
  , ih = lh.toString
  , oh = Math.max
  , uh = Math.min
  , $i = function() {
    return rh.Date.now()
};
function ah(e, t, n) {
    var r, l, i, o, u, a, s = 0, v = !1, p = !1, h = !0;
    if (typeof e != "function")
        throw new TypeError(Kf);
    t = ts(t) || 0,
    Wl(n) && (v = !!n.leading,
    p = "maxWait"in n,
    i = p ? oh(ts(n.maxWait) || 0, t) : i,
    h = "trailing"in n ? !!n.trailing : h);
    function g(x) {
        var j = r
          , _ = l;
        return r = l = void 0,
        s = x,
        o = e.apply(_, j),
        o
    }
    function w(x) {
        return s = x,
        u = setTimeout(d, t),
        v ? g(x) : o
    }
    function S(x) {
        var j = x - a
          , _ = x - s
          , R = t - j;
        return p ? uh(R, i - _) : R
    }
    function M(x) {
        var j = x - a
          , _ = x - s;
        return a === void 0 || j >= t || j < 0 || p && _ >= i
    }
    function d() {
        var x = $i();
        if (M(x))
            return c(x);
        u = setTimeout(d, S(x))
    }
    function c(x) {
        return u = void 0,
        h && r ? g(x) : (r = l = void 0,
        o)
    }
    function m() {
        u !== void 0 && clearTimeout(u),
        s = 0,
        r = a = l = u = void 0
    }
    function y() {
        return u === void 0 ? o : c($i())
    }
    function E() {
        var x = $i()
          , j = M(x);
        if (r = arguments,
        l = this,
        a = x,
        j) {
            if (u === void 0)
                return w(a);
            if (p)
                return u = setTimeout(d, t),
                g(a)
        }
        return u === void 0 && (u = setTimeout(d, t)),
        o
    }
    return E.cancel = m,
    E.flush = y,
    E
}
function sh(e, t, n) {
    var r = !0
      , l = !0;
    if (typeof e != "function")
        throw new TypeError(Kf);
    return Wl(n) && (r = "leading"in n ? !!n.leading : r,
    l = "trailing"in n ? !!n.trailing : l),
    ah(e, t, {
        leading: r,
        maxWait: t,
        trailing: l
    })
}
function Wl(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}
function ch(e) {
    return !!e && typeof e == "object"
}
function fh(e) {
    return typeof e == "symbol" || ch(e) && ih.call(e) == Xm
}
function ts(e) {
    if (typeof e == "number")
        return e;
    if (fh(e))
        return es;
    if (Wl(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Wl(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = e.replace(Gm, "");
    var n = qm.test(e);
    return n || Jm.test(e) ? eh(e.slice(2), n ? 2 : 8) : Zm.test(e) ? es : +e
}
var dh = sh
  , Mr = {};
Object.defineProperty(Mr, "__esModule", {
    value: !0
});
Mr.addPassiveEventListener = function(t, n, r) {
    var l = r.name;
    l || (l = n,
    console.warn("Listener must be a named function.")),
    yl.has(n) || yl.set(n, new Set);
    var i = yl.get(n);
    if (!i.has(l)) {
        var o = function() {
            var u = !1;
            try {
                var a = Object.defineProperty({}, "passive", {
                    get: function() {
                        u = !0
                    }
                });
                window.addEventListener("test", null, a)
            } catch {}
            return u
        }();
        t.addEventListener(n, r, o ? {
            passive: !0
        } : !1),
        i.add(l)
    }
}
;
Mr.removePassiveEventListener = function(t, n, r) {
    t.removeEventListener(n, r),
    yl.get(n).delete(r.name || n)
}
;
var yl = new Map;
Object.defineProperty(zr, "__esModule", {
    value: !0
});
var ph = dh
  , mh = vh(ph)
  , hh = Mr;
function vh(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var gh = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0,
    mh.default)(t, n)
}
  , X = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function(t, n) {
        if (t) {
            var r = gh(function(l) {
                X.scrollHandler(t)
            }, n);
            X.scrollSpyContainers.push(t),
            (0,
            hh.addPassiveEventListener)(t, "scroll", r)
        }
    },
    isMounted: function(t) {
        return X.scrollSpyContainers.indexOf(t) !== -1
    },
    currentPositionX: function(t) {
        if (t === document) {
            var n = window.pageYOffset !== void 0
              , r = (document.compatMode || "") === "CSS1Compat";
            return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft
        } else
            return t.scrollLeft
    },
    currentPositionY: function(t) {
        if (t === document) {
            var n = window.pageXOffset !== void 0
              , r = (document.compatMode || "") === "CSS1Compat";
            return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop
        } else
            return t.scrollTop
    },
    scrollHandler: function(t) {
        var n = X.scrollSpyContainers[X.scrollSpyContainers.indexOf(t)].spyCallbacks || [];
        n.forEach(function(r) {
            return r(X.currentPositionX(t), X.currentPositionY(t))
        })
    },
    addStateHandler: function(t) {
        X.spySetState.push(t)
    },
    addSpyHandler: function(t, n) {
        var r = X.scrollSpyContainers[X.scrollSpyContainers.indexOf(n)];
        r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(t),
        t(X.currentPositionX(n), X.currentPositionY(n))
    },
    updateStates: function() {
        X.spySetState.forEach(function(t) {
            return t()
        })
    },
    unmount: function(t, n) {
        X.scrollSpyContainers.forEach(function(r) {
            return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
        }),
        X.spySetState && X.spySetState.length && X.spySetState.indexOf(t) > -1 && X.spySetState.splice(X.spySetState.indexOf(t), 1),
        document.removeEventListener("scroll", X.scrollHandler)
    },
    update: function() {
        return X.scrollSpyContainers.forEach(function(t) {
            return X.scrollHandler(t)
        })
    }
};
zr.default = X;
var Hn = {}
  , Ir = {};
Object.defineProperty(Ir, "__esModule", {
    value: !0
});
var yh = function(t, n) {
    var r = t.indexOf("#") === 0 ? t.substring(1) : t
      , l = r ? "#" + r : ""
      , i = window && window.location
      , o = l ? i.pathname + i.search + l : i.pathname + i.search;
    n ? history.pushState(history.state, "", o) : history.replaceState(history.state, "", o)
}
  , wh = function() {
    return window.location.hash.replace(/^#/, "")
}
  , xh = function(t) {
    return function(n) {
        return t.contains ? t != n && t.contains(n) : !!(t.compareDocumentPosition(n) & 16)
    }
}
  , kh = function(t) {
    return getComputedStyle(t).position !== "static"
}
  , Hi = function(t, n) {
    for (var r = t.offsetTop, l = t.offsetParent; l && !n(l); )
        r += l.offsetTop,
        l = l.offsetParent;
    return {
        offsetTop: r,
        offsetParent: l
    }
}
  , Sh = function(t, n, r) {
    if (r)
        return t === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(t).position !== "static" ? n.offsetLeft : n.offsetLeft - t.offsetLeft;
    if (t === document)
        return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    if (kh(t)) {
        if (n.offsetParent !== t) {
            var l = function(v) {
                return v === t || v === document
            }
              , i = Hi(n, l)
              , o = i.offsetTop
              , u = i.offsetParent;
            if (u !== t)
                throw new Error("Seems containerElement is not an ancestor of the Element");
            return o
        }
        return n.offsetTop
    }
    if (n.offsetParent === t.offsetParent)
        return n.offsetTop - t.offsetTop;
    var a = function(v) {
        return v === document
    };
    return Hi(n, a).offsetTop - Hi(t, a).offsetTop
};
Ir.default = {
    updateHash: yh,
    getHash: wh,
    filterElementInContainer: xh,
    scrollOffset: Sh
};
var oi = {}
  , Ru = {};
Object.defineProperty(Ru, "__esModule", {
    value: !0
});
Ru.default = {
    defaultEasing: function(t) {
        return t < .5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2
    },
    linear: function(t) {
        return t
    },
    easeInQuad: function(t) {
        return t * t
    },
    easeOutQuad: function(t) {
        return t * (2 - t)
    },
    easeInOutQuad: function(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    easeInCubic: function(t) {
        return t * t * t
    },
    easeOutCubic: function(t) {
        return --t * t * t + 1
    },
    easeInOutCubic: function(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    easeInQuart: function(t) {
        return t * t * t * t
    },
    easeOutQuart: function(t) {
        return 1 - --t * t * t * t
    },
    easeInOutQuart: function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
    },
    easeInQuint: function(t) {
        return t * t * t * t * t
    },
    easeOutQuint: function(t) {
        return 1 + --t * t * t * t * t
    },
    easeInOutQuint: function(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    }
};
var Du = {};
Object.defineProperty(Du, "__esModule", {
    value: !0
});
var _h = Mr
  , Eh = ["mousedown", "mousewheel", "touchmove", "keydown"];
Du.default = {
    subscribe: function(t) {
        return typeof document < "u" && Eh.forEach(function(n) {
            return (0,
            _h.addPassiveEventListener)(document, n, t)
        })
    }
};
var Rr = {};
Object.defineProperty(Rr, "__esModule", {
    value: !0
});
var Fo = {
    registered: {},
    scrollEvent: {
        register: function(t, n) {
            Fo.registered[t] = n
        },
        remove: function(t) {
            Fo.registered[t] = null
        }
    }
};
Rr.default = Fo;
Object.defineProperty(oi, "__esModule", {
    value: !0
});
var jh = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , Ch = Ir;
ui(Ch);
var Nh = Ru
  , ns = ui(Nh)
  , Ph = Du
  , Oh = ui(Ph)
  , Th = Rr
  , lt = ui(Th);
function ui(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Yf = function(t) {
    return ns.default[t.smooth] || ns.default.defaultEasing
}
  , Lh = function(t) {
    return typeof t == "function" ? t : function() {
        return t
    }
}
  , zh = function() {
    if (typeof window < "u")
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame
}
  , $o = function() {
    return zh() || function(e, t, n) {
        window.setTimeout(e, n || 1e3 / 60, new Date().getTime())
    }
}()
  , Xf = function() {
    return {
        currentPosition: 0,
        startPosition: 0,
        targetPosition: 0,
        progress: 0,
        duration: 0,
        cancel: !1,
        target: null,
        containerElement: null,
        to: null,
        start: null,
        delta: null,
        percent: null,
        delayTimeout: null
    }
}
  , Gf = function(t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollLeft;
    var r = window.pageXOffset !== void 0
      , l = (document.compatMode || "") === "CSS1Compat";
    return r ? window.pageXOffset : l ? document.documentElement.scrollLeft : document.body.scrollLeft
}
  , Zf = function(t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollTop;
    var r = window.pageXOffset !== void 0
      , l = (document.compatMode || "") === "CSS1Compat";
    return r ? window.pageYOffset : l ? document.documentElement.scrollTop : document.body.scrollTop
}
  , Mh = function(t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollWidth - n.offsetWidth;
    var r = document.body
      , l = document.documentElement;
    return Math.max(r.scrollWidth, r.offsetWidth, l.clientWidth, l.scrollWidth, l.offsetWidth)
}
  , Ih = function(t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
        return n.scrollHeight - n.offsetHeight;
    var r = document.body
      , l = document.documentElement;
    return Math.max(r.scrollHeight, r.offsetHeight, l.clientHeight, l.scrollHeight, l.offsetHeight)
}
  , Rh = function e(t, n, r) {
    var l = n.data;
    if (!n.ignoreCancelEvents && l.cancel) {
        lt.default.registered.end && lt.default.registered.end(l.to, l.target, l.currentPositionY);
        return
    }
    if (l.delta = Math.round(l.targetPosition - l.startPosition),
    l.start === null && (l.start = r),
    l.progress = r - l.start,
    l.percent = l.progress >= l.duration ? 1 : t(l.progress / l.duration),
    l.currentPosition = l.startPosition + Math.ceil(l.delta * l.percent),
    l.containerElement && l.containerElement !== document && l.containerElement !== document.body ? n.horizontal ? l.containerElement.scrollLeft = l.currentPosition : l.containerElement.scrollTop = l.currentPosition : n.horizontal ? window.scrollTo(l.currentPosition, 0) : window.scrollTo(0, l.currentPosition),
    l.percent < 1) {
        var i = e.bind(null, t, n);
        $o.call(window, i);
        return
    }
    lt.default.registered.end && lt.default.registered.end(l.to, l.target, l.currentPosition)
}
  , Fu = function(t) {
    t.data.containerElement = t ? t.containerId ? document.getElementById(t.containerId) : t.container && t.container.nodeType ? t.container : document : null
}
  , Dr = function(t, n, r, l) {
    n.data = n.data || Xf(),
    window.clearTimeout(n.data.delayTimeout);
    var i = function() {
        n.data.cancel = !0
    };
    if (Oh.default.subscribe(i),
    Fu(n),
    n.data.start = null,
    n.data.cancel = !1,
    n.data.startPosition = n.horizontal ? Gf(n) : Zf(n),
    n.data.targetPosition = n.absolute ? t : t + n.data.startPosition,
    n.data.startPosition === n.data.targetPosition) {
        lt.default.registered.end && lt.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
        return
    }
    n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition),
    n.data.duration = Lh(n.duration)(n.data.delta),
    n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration),
    n.data.to = r,
    n.data.target = l;
    var o = Yf(n)
      , u = Rh.bind(null, o, n);
    if (n && n.delay > 0) {
        n.data.delayTimeout = window.setTimeout(function() {
            lt.default.registered.begin && lt.default.registered.begin(n.data.to, n.data.target),
            $o.call(window, u)
        }, n.delay);
        return
    }
    lt.default.registered.begin && lt.default.registered.begin(n.data.to, n.data.target),
    $o.call(window, u)
}
  , ai = function(t) {
    return t = jh({}, t),
    t.data = t.data || Xf(),
    t.absolute = !0,
    t
}
  , Dh = function(t) {
    Dr(0, ai(t))
}
  , Fh = function(t, n) {
    Dr(t, ai(n))
}
  , $h = function(t) {
    t = ai(t),
    Fu(t),
    Dr(t.horizontal ? Mh(t) : Ih(t), t)
}
  , Hh = function(t, n) {
    n = ai(n),
    Fu(n);
    var r = n.horizontal ? Gf(n) : Zf(n);
    Dr(t + r, n)
};
oi.default = {
    animateTopScroll: Dr,
    getAnimationType: Yf,
    scrollToTop: Dh,
    scrollToBottom: $h,
    scrollTo: Fh,
    scrollMore: Hh
};
Object.defineProperty(Hn, "__esModule", {
    value: !0
});
var Ah = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , Uh = Ir
  , Bh = $u(Uh)
  , Wh = oi
  , Vh = $u(Wh)
  , bh = Rr
  , tl = $u(bh);
function $u(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var nl = {}
  , rs = void 0;
Hn.default = {
    unmount: function() {
        nl = {}
    },
    register: function(t, n) {
        nl[t] = n
    },
    unregister: function(t) {
        delete nl[t]
    },
    get: function(t) {
        return nl[t] || document.getElementById(t) || document.getElementsByName(t)[0] || document.getElementsByClassName(t)[0]
    },
    setActiveLink: function(t) {
        return rs = t
    },
    getActiveLink: function() {
        return rs
    },
    scrollTo: function(t, n) {
        var r = this.get(t);
        if (!r) {
            console.warn("target Element not found");
            return
        }
        n = Ah({}, n, {
            absolute: !1
        });
        var l = n.containerId
          , i = n.container
          , o = void 0;
        l ? o = document.getElementById(l) : i && i.nodeType ? o = i : o = document,
        n.absolute = !0;
        var u = n.horizontal
          , a = Bh.default.scrollOffset(o, r, u) + (n.offset || 0);
        if (!n.smooth) {
            tl.default.registered.begin && tl.default.registered.begin(t, r),
            o === document ? n.horizontal ? window.scrollTo(a, 0) : window.scrollTo(0, a) : o.scrollTop = a,
            tl.default.registered.end && tl.default.registered.end(t, r);
            return
        }
        Vh.default.animateTopScroll(a, n, t, r)
    }
};
var si = {};
Object.defineProperty(si, "__esModule", {
    value: !0
});
var Qh = Ir
  , Ai = Kh(Qh);
function Kh(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Yh = {
    mountFlag: !1,
    initialized: !1,
    scroller: null,
    containers: {},
    mount: function(t) {
        this.scroller = t,
        this.handleHashChange = this.handleHashChange.bind(this),
        window.addEventListener("hashchange", this.handleHashChange),
        this.initStateFromHash(),
        this.mountFlag = !0
    },
    mapContainer: function(t, n) {
        this.containers[t] = n
    },
    isMounted: function() {
        return this.mountFlag
    },
    isInitialized: function() {
        return this.initialized
    },
    initStateFromHash: function() {
        var t = this
          , n = this.getHash();
        n ? window.setTimeout(function() {
            t.scrollTo(n, !0),
            t.initialized = !0
        }, 10) : this.initialized = !0
    },
    scrollTo: function(t, n) {
        var r = this.scroller
          , l = r.get(t);
        if (l && (n || t !== r.getActiveLink())) {
            var i = this.containers[t] || document;
            r.scrollTo(t, {
                container: i
            })
        }
    },
    getHash: function() {
        return Ai.default.getHash()
    },
    changeHash: function(t, n) {
        this.isInitialized() && Ai.default.getHash() !== t && Ai.default.updateHash(t, n)
    },
    handleHashChange: function() {
        this.scrollTo(this.getHash())
    },
    unmount: function() {
        this.scroller = null,
        this.containers = null,
        window.removeEventListener("hashchange", this.handleHashChange)
    }
};
si.default = Yh;
Object.defineProperty(Lr, "__esModule", {
    value: !0
});
var rl = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , Xh = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            l.enumerable = l.enumerable || !1,
            l.configurable = !0,
            "value"in l && (l.writable = !0),
            Object.defineProperty(t, l.key, l)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , Gh = we
  , ls = Fr(Gh)
  , Zh = zr
  , ll = Fr(Zh)
  , qh = Hn
  , Jh = Fr(qh)
  , e0 = Tr
  , Q = Fr(e0)
  , t0 = si
  , Et = Fr(t0);
function Fr(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function n0(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function r0(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function l0(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var is = {
    to: Q.default.string.isRequired,
    containerId: Q.default.string,
    container: Q.default.object,
    activeClass: Q.default.string,
    activeStyle: Q.default.object,
    spy: Q.default.bool,
    horizontal: Q.default.bool,
    smooth: Q.default.oneOfType([Q.default.bool, Q.default.string]),
    offset: Q.default.number,
    delay: Q.default.number,
    isDynamic: Q.default.bool,
    onClick: Q.default.func,
    duration: Q.default.oneOfType([Q.default.number, Q.default.func]),
    absolute: Q.default.bool,
    onSetActive: Q.default.func,
    onSetInactive: Q.default.func,
    ignoreCancelEvents: Q.default.bool,
    hashSpy: Q.default.bool,
    saveHashHistory: Q.default.bool,
    spyThrottle: Q.default.number
};
Lr.default = function(e, t) {
    var n = t || Jh.default
      , r = function(i) {
        l0(o, i);
        function o(u) {
            n0(this, o);
            var a = r0(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, u));
            return l.call(a),
            a.state = {
                active: !1
            },
            a
        }
        return Xh(o, [{
            key: "getScrollSpyContainer",
            value: function() {
                var a = this.props.containerId
                  , s = this.props.container;
                return a && !s ? document.getElementById(a) : s && s.nodeType ? s : document
            }
        }, {
            key: "componentDidMount",
            value: function() {
                if (this.props.spy || this.props.hashSpy) {
                    var a = this.getScrollSpyContainer();
                    ll.default.isMounted(a) || ll.default.mount(a, this.props.spyThrottle),
                    this.props.hashSpy && (Et.default.isMounted() || Et.default.mount(n),
                    Et.default.mapContainer(this.props.to, a)),
                    ll.default.addSpyHandler(this.spyHandler, a),
                    this.setState({
                        container: a
                    })
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                ll.default.unmount(this.stateHandler, this.spyHandler)
            }
        }, {
            key: "render",
            value: function() {
                var a = "";
                this.state && this.state.active ? a = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : a = this.props.className;
                var s = {};
                this.state && this.state.active ? s = rl({}, this.props.style, this.props.activeStyle) : s = rl({}, this.props.style);
                var v = rl({}, this.props);
                for (var p in is)
                    v.hasOwnProperty(p) && delete v[p];
                return v.className = a,
                v.style = s,
                v.onClick = this.handleClick,
                ls.default.createElement(e, v)
            }
        }]),
        o
    }(ls.default.PureComponent)
      , l = function() {
        var o = this;
        this.scrollTo = function(u, a) {
            n.scrollTo(u, rl({}, o.state, a))
        }
        ,
        this.handleClick = function(u) {
            o.props.onClick && o.props.onClick(u),
            u.stopPropagation && u.stopPropagation(),
            u.preventDefault && u.preventDefault(),
            o.scrollTo(o.props.to, o.props)
        }
        ,
        this.spyHandler = function(u, a) {
            var s = o.getScrollSpyContainer();
            if (!(Et.default.isMounted() && !Et.default.isInitialized())) {
                var v = o.props.horizontal
                  , p = o.props.to
                  , h = null
                  , g = void 0
                  , w = void 0;
                if (v) {
                    var S = 0
                      , M = 0
                      , d = 0;
                    if (s.getBoundingClientRect) {
                        var c = s.getBoundingClientRect();
                        d = c.left
                    }
                    if (!h || o.props.isDynamic) {
                        if (h = n.get(p),
                        !h)
                            return;
                        var m = h.getBoundingClientRect();
                        S = m.left - d + u,
                        M = S + m.width
                    }
                    var y = u - o.props.offset;
                    g = y >= Math.floor(S) && y < Math.floor(M),
                    w = y < Math.floor(S) || y >= Math.floor(M)
                } else {
                    var E = 0
                      , x = 0
                      , j = 0;
                    if (s.getBoundingClientRect) {
                        var _ = s.getBoundingClientRect();
                        j = _.top
                    }
                    if (!h || o.props.isDynamic) {
                        if (h = n.get(p),
                        !h)
                            return;
                        var R = h.getBoundingClientRect();
                        E = R.top - j + a,
                        x = E + R.height
                    }
                    var T = a - o.props.offset;
                    g = T >= Math.floor(E) && T < Math.floor(x),
                    w = T < Math.floor(E) || T >= Math.floor(x)
                }
                var O = n.getActiveLink();
                if (w) {
                    if (p === O && n.setActiveLink(void 0),
                    o.props.hashSpy && Et.default.getHash() === p) {
                        var C = o.props.saveHashHistory
                          , D = C === void 0 ? !1 : C;
                        Et.default.changeHash("", D)
                    }
                    o.props.spy && o.state.active && (o.setState({
                        active: !1
                    }),
                    o.props.onSetInactive && o.props.onSetInactive(p, h))
                }
                if (g && (O !== p || o.state.active === !1)) {
                    n.setActiveLink(p);
                    var L = o.props.saveHashHistory
                      , le = L === void 0 ? !1 : L;
                    o.props.hashSpy && Et.default.changeHash(p, le),
                    o.props.spy && (o.setState({
                        active: !0
                    }),
                    o.props.onSetActive && o.props.onSetActive(p, h))
                }
            }
        }
    };
    return r.propTypes = is,
    r.defaultProps = {
        offset: 0
    },
    r
}
;
Object.defineProperty(Iu, "__esModule", {
    value: !0
});
var i0 = we
  , os = qf(i0)
  , o0 = Lr
  , u0 = qf(o0);
function qf(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function a0(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function us(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function s0(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var c0 = function(e) {
    s0(t, e);
    function t() {
        var n, r, l, i;
        a0(this, t);
        for (var o = arguments.length, u = Array(o), a = 0; a < o; a++)
            u[a] = arguments[a];
        return i = (r = (l = us(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(u))),
        l),
        l.render = function() {
            return os.default.createElement("a", l.props, l.props.children)
        }
        ,
        r),
        us(l, i)
    }
    return t
}(os.default.Component);
Iu.default = (0,
u0.default)(c0);
var Hu = {};
Object.defineProperty(Hu, "__esModule", {
    value: !0
});
var f0 = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            l.enumerable = l.enumerable || !1,
            l.configurable = !0,
            "value"in l && (l.writable = !0),
            Object.defineProperty(t, l.key, l)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , d0 = we
  , as = Jf(d0)
  , p0 = Lr
  , m0 = Jf(p0);
function Jf(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function h0(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function v0(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function g0(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var y0 = function(e) {
    g0(t, e);
    function t() {
        return h0(this, t),
        v0(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return f0(t, [{
        key: "render",
        value: function() {
            return as.default.createElement("button", this.props, this.props.children)
        }
    }]),
    t
}(as.default.Component);
Hu.default = (0,
m0.default)(y0);
var Au = {}
  , ci = {};
Object.defineProperty(ci, "__esModule", {
    value: !0
});
var w0 = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , x0 = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            l.enumerable = l.enumerable || !1,
            l.configurable = !0,
            "value"in l && (l.writable = !0),
            Object.defineProperty(t, l.key, l)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , k0 = we
  , ss = fi(k0)
  , S0 = Rf;
fi(S0);
var _0 = Hn
  , cs = fi(_0)
  , E0 = Tr
  , fs = fi(E0);
function fi(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function j0(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function C0(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function N0(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
ci.default = function(e) {
    var t = function(n) {
        N0(r, n);
        function r(l) {
            j0(this, r);
            var i = C0(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, l));
            return i.childBindings = {
                domNode: null
            },
            i
        }
        return x0(r, [{
            key: "componentDidMount",
            value: function() {
                if (typeof window > "u")
                    return !1;
                this.registerElems(this.props.name)
            }
        }, {
            key: "componentDidUpdate",
            value: function(i) {
                this.props.name !== i.name && this.registerElems(this.props.name)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                if (typeof window > "u")
                    return !1;
                cs.default.unregister(this.props.name)
            }
        }, {
            key: "registerElems",
            value: function(i) {
                cs.default.register(i, this.childBindings.domNode)
            }
        }, {
            key: "render",
            value: function() {
                return ss.default.createElement(e, w0({}, this.props, {
                    parentBindings: this.childBindings
                }))
            }
        }]),
        r
    }(ss.default.Component);
    return t.propTypes = {
        name: fs.default.string,
        id: fs.default.string
    },
    t
}
;
Object.defineProperty(Au, "__esModule", {
    value: !0
});
var ds = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , P0 = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            l.enumerable = l.enumerable || !1,
            l.configurable = !0,
            "value"in l && (l.writable = !0),
            Object.defineProperty(t, l.key, l)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , O0 = we
  , ps = Uu(O0)
  , T0 = ci
  , L0 = Uu(T0)
  , z0 = Tr
  , ms = Uu(z0);
function Uu(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function M0(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function I0(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function R0(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var ed = function(e) {
    R0(t, e);
    function t() {
        return M0(this, t),
        I0(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return P0(t, [{
        key: "render",
        value: function() {
            var r = this
              , l = ds({}, this.props);
            return delete l.name,
            l.parentBindings && delete l.parentBindings,
            ps.default.createElement("div", ds({}, l, {
                ref: function(o) {
                    r.props.parentBindings.domNode = o
                }
            }), this.props.children)
        }
    }]),
    t
}(ps.default.Component);
ed.propTypes = {
    name: ms.default.string,
    id: ms.default.string
};
Au.default = (0,
L0.default)(ed);
var Ui = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , hs = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            l.enumerable = l.enumerable || !1,
            l.configurable = !0,
            "value"in l && (l.writable = !0),
            Object.defineProperty(t, l.key, l)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}();
function vs(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function gs(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function ys(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var il = we
  , Kt = zr
  , Bi = Hn
  , G = Tr
  , jt = si
  , ws = {
    to: G.string.isRequired,
    containerId: G.string,
    container: G.object,
    activeClass: G.string,
    spy: G.bool,
    smooth: G.oneOfType([G.bool, G.string]),
    offset: G.number,
    delay: G.number,
    isDynamic: G.bool,
    onClick: G.func,
    duration: G.oneOfType([G.number, G.func]),
    absolute: G.bool,
    onSetActive: G.func,
    onSetInactive: G.func,
    ignoreCancelEvents: G.bool,
    hashSpy: G.bool,
    spyThrottle: G.number
}
  , D0 = {
    Scroll: function(t, n) {
        console.warn("Helpers.Scroll is deprecated since v1.7.0");
        var r = n || Bi
          , l = function(o) {
            ys(u, o);
            function u(a) {
                vs(this, u);
                var s = gs(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, a));
                return i.call(s),
                s.state = {
                    active: !1
                },
                s
            }
            return hs(u, [{
                key: "getScrollSpyContainer",
                value: function() {
                    var s = this.props.containerId
                      , v = this.props.container;
                    return s ? document.getElementById(s) : v && v.nodeType ? v : document
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    if (this.props.spy || this.props.hashSpy) {
                        var s = this.getScrollSpyContainer();
                        Kt.isMounted(s) || Kt.mount(s, this.props.spyThrottle),
                        this.props.hashSpy && (jt.isMounted() || jt.mount(r),
                        jt.mapContainer(this.props.to, s)),
                        this.props.spy && Kt.addStateHandler(this.stateHandler),
                        Kt.addSpyHandler(this.spyHandler, s),
                        this.setState({
                            container: s
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    Kt.unmount(this.stateHandler, this.spyHandler)
                }
            }, {
                key: "render",
                value: function() {
                    var s = "";
                    this.state && this.state.active ? s = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : s = this.props.className;
                    var v = Ui({}, this.props);
                    for (var p in ws)
                        v.hasOwnProperty(p) && delete v[p];
                    return v.className = s,
                    v.onClick = this.handleClick,
                    il.createElement(t, v)
                }
            }]),
            u
        }(il.Component)
          , i = function() {
            var u = this;
            this.scrollTo = function(a, s) {
                r.scrollTo(a, Ui({}, u.state, s))
            }
            ,
            this.handleClick = function(a) {
                u.props.onClick && u.props.onClick(a),
                a.stopPropagation && a.stopPropagation(),
                a.preventDefault && a.preventDefault(),
                u.scrollTo(u.props.to, u.props)
            }
            ,
            this.stateHandler = function() {
                r.getActiveLink() !== u.props.to && (u.state !== null && u.state.active && u.props.onSetInactive && u.props.onSetInactive(),
                u.setState({
                    active: !1
                }))
            }
            ,
            this.spyHandler = function(a) {
                var s = u.getScrollSpyContainer();
                if (!(jt.isMounted() && !jt.isInitialized())) {
                    var v = u.props.to
                      , p = null
                      , h = 0
                      , g = 0
                      , w = 0;
                    if (s.getBoundingClientRect) {
                        var S = s.getBoundingClientRect();
                        w = S.top
                    }
                    if (!p || u.props.isDynamic) {
                        if (p = r.get(v),
                        !p)
                            return;
                        var M = p.getBoundingClientRect();
                        h = M.top - w + a,
                        g = h + M.height
                    }
                    var d = a - u.props.offset
                      , c = d >= Math.floor(h) && d < Math.floor(g)
                      , m = d < Math.floor(h) || d >= Math.floor(g)
                      , y = r.getActiveLink();
                    if (m)
                        return v === y && r.setActiveLink(void 0),
                        u.props.hashSpy && jt.getHash() === v && jt.changeHash(),
                        u.props.spy && u.state.active && (u.setState({
                            active: !1
                        }),
                        u.props.onSetInactive && u.props.onSetInactive()),
                        Kt.updateStates();
                    if (c && y !== v)
                        return r.setActiveLink(v),
                        u.props.hashSpy && jt.changeHash(v),
                        u.props.spy && (u.setState({
                            active: !0
                        }),
                        u.props.onSetActive && u.props.onSetActive(v)),
                        Kt.updateStates()
                }
            }
        };
        return l.propTypes = ws,
        l.defaultProps = {
            offset: 0
        },
        l
    },
    Element: function(t) {
        console.warn("Helpers.Element is deprecated since v1.7.0");
        var n = function(r) {
            ys(l, r);
            function l(i) {
                vs(this, l);
                var o = gs(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, i));
                return o.childBindings = {
                    domNode: null
                },
                o
            }
            return hs(l, [{
                key: "componentDidMount",
                value: function() {
                    if (typeof window > "u")
                        return !1;
                    this.registerElems(this.props.name)
                }
            }, {
                key: "componentDidUpdate",
                value: function(o) {
                    this.props.name !== o.name && this.registerElems(this.props.name)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    if (typeof window > "u")
                        return !1;
                    Bi.unregister(this.props.name)
                }
            }, {
                key: "registerElems",
                value: function(o) {
                    Bi.register(o, this.childBindings.domNode)
                }
            }, {
                key: "render",
                value: function() {
                    return il.createElement(t, Ui({}, this.props, {
                        parentBindings: this.childBindings
                    }))
                }
            }]),
            l
        }(il.Component);
        return n.propTypes = {
            name: G.string,
            id: G.string
        },
        n
    }
}
  , F0 = D0;
Object.defineProperty(te, "__esModule", {
    value: !0
});
te.Helpers = te.ScrollElement = te.ScrollLink = te.animateScroll = te.scrollSpy = te.Events = te.scroller = te.Element = te.Button = Be = te.Link = void 0;
var $0 = Iu
  , td = at($0)
  , H0 = Hu
  , nd = at(H0)
  , A0 = Au
  , rd = at(A0)
  , U0 = Hn
  , ld = at(U0)
  , B0 = Rr
  , id = at(B0)
  , W0 = zr
  , od = at(W0)
  , V0 = oi
  , ud = at(V0)
  , b0 = Lr
  , ad = at(b0)
  , Q0 = ci
  , sd = at(Q0)
  , K0 = F0
  , cd = at(K0);
function at(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Be = te.Link = td.default;
te.Button = nd.default;
te.Element = rd.default;
te.scroller = ld.default;
te.Events = id.default;
te.scrollSpy = od.default;
te.animateScroll = ud.default;
te.ScrollLink = ad.default;
te.ScrollElement = sd.default;
te.Helpers = cd.default;
te.default = {
    Link: td.default,
    Button: nd.default,
    Element: rd.default,
    scroller: ld.default,
    Events: id.default,
    scrollSpy: od.default,
    animateScroll: ud.default,
    ScrollLink: ad.default,
    ScrollElement: sd.default,
    Helpers: cd.default
};
function Y0(e) {
    return sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "g",
            attr: {
                id: "Menu_Fries"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"
                }
            }, {
                tag: "path",
                attr: {
                    d: "M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"
                }
            }, {
                tag: "path",
                attr: {
                    d: "M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"
                }
            }]
        }]
    })(e)
}
const X0 = ()=>{
    const [e,t] = we.useState(!1)
      , n = ()=>{
        t(!e)
    }
      , r = f.jsx(f.Fragment, {
        children: f.jsx("div", {
            className: "lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition",
            children: f.jsxs("ul", {
                className: "text-center text-xl p-20",
                children: [f.jsx(Be, {
                    spy: !0,
                    smooth: !0,
                    to: "Home",
                    children: f.jsx("li", {
                        className: "my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded",
                        children: "Home"
                    })
                }), f.jsx(Be, {
                    spy: !0,
                    smooth: !0,
                    to: "About",
                    children: f.jsx("li", {
                        className: "my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded",
                        children: "About"
                    })
                }), f.jsx(Be, {
                    spy: !0,
                    smooth: !0,
                    to: "Services",
                    children: f.jsx("li", {
                        className: "my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded",
                        children: "Services"
                    })
                }), f.jsx(Be, {
                    spy: !0,
                    smooth: !0,
                    to: "Projects",
                    children: f.jsx("li", {
                        className: "my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded",
                        children: "Projects"
                    })
                }), f.jsx(Be, {
                    spy: !0,
                    smooth: !0,
                    to: "Experience",
                    children: f.jsx("li", {
                        className: "my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded",
                        children: "Experience"
                    })
                }), f.jsx(Be, {
                    spy: !0,
                    smooth: !0,
                    to: "Contact",
                    children: f.jsx("li", {
                        className: "my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded",
                        children: "Contact"
                    })
                })]
            })
        })
    });
    return f.jsx("nav", {
        children: f.jsxs("div", {
            className: "h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800 ",
            children: [f.jsx("div", {
                className: "flex items-center flex-1",
                children: f.jsx("span", {
                    className: "text-3x1 font-bold",
                    children: " ☽kͥabͣuͫℽa☾ ҉   "
                })
            }), f.jsx("div", {
                className: "lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden",
                children: f.jsx("div", {
                    className: "flex-10",
                    children: f.jsxs("ul", {
                        className: "flex gap-8 mr-16 text-[18px]",
                        children: [f.jsx(Be, {
                            spy: !0,
                            smooth: !0,
                            to: "Home",
                            children: f.jsx("li", {
                                className: "hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer",
                                children: "Home"
                            })
                        }), f.jsx(Be, {
                            spy: !0,
                            smooth: !0,
                            to: "About",
                            children: f.jsx("li", {
                                className: "hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer",
                                children: "About"
                            })
                        }), f.jsx(Be, {
                            spy: !0,
                            smooth: !0,
                            to: "Services",
                            children: f.jsx("li", {
                                className: "hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer",
                                children: "Services"
                            })
                        }), f.jsx(Be, {
                            spy: !0,
                            smooth: !0,
                            to: "Projects",
                            children: f.jsx("li", {
                                className: "hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer",
                                children: "Projects"
                            })
                        }), f.jsx(Be, {
                            spy: !0,
                            smooth: !0,
                            to: "Contact",
                            children: f.jsx("li", {
                                className: "hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer",
                                children: "Contact"
                            })
                        })]
                    })
                })
            }), f.jsx("div", {
                children: e && r
            }), f.jsx("button", {
                className: "block sm:hidden transition",
                onClick: n,
                children: e ? f.jsx(Um, {}) : f.jsx(Y0, {})
            })]
        })
    })
}
  , G0 = ()=>f.jsxs("div", {
    "data-aos": "fade-up",
    id: "Services",
    className: "h-full sm:container mx-auto flex flex-col justify-center items-center p-5",
    children: [f.jsx("h1", {
        "data-aos": "fade-up",
        className: "text-[50px] text-center text-4xl font-bold pt-10 sm:pt-0 pb-10 uppercase text-fuchsia-500",
        children: "Services"
    }), f.jsxs("div", {
        className: "sm:grid grid-cols-2 gap-10",
        children: [f.jsxs("div", {
            "data-aos": "fade-right",
            className: "sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md",
            children: [f.jsx("h3", {
                "data-aos": "fade-down",
                className: "text-xl mb-5 font-bold text-fuchsia-800",
                children: "Web Development"
            }), f.jsx("p", {
                "data-aos": "fade-up",
                className: "leading-10 text-gray-500 text-justify",
                children: "As an experienced web developer, I specialize in bringing your digital ideas to life. With a passion for coding and a knack for problem-solving, I strive to create dynamic and user-friendly websites tailored to your unique needs. From crafting elegant designs to implementing robust functionalities, I'm dedicated to ensuring your online presence stands out and delivers exceptional value to your audience."
            })]
        }), f.jsxs("div", {
            "data-aos": "fade-left",
            className: "sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md",
            children: [f.jsx("h3", {
                "data-aos": "fade-up",
                className: "text-xl mb-5 font-bold text-fuchsia-800",
                children: "Data Analysis"
            }), f.jsx("p", {
                "data-aos": "fade-down",
                className: "leading-10 text-gray-500 text-justify",
                children: "With expertise in Python, Pandas, Matplotlib, and Google Sheets dashboards, I excel in harnessing data to drive actionable insights and informed decision-making. From cleaning and preprocessing raw data to performing in-depth analysis and visualization, I specialize in uncovering valuable patterns and trends that empower businesses to optimize performance and achieve strategic goals. Let me transform your data into a powerful asset for growth and success."
            })]
        }), f.jsxs("div", {
            "data-aos": "fade-right",
            className: "sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md",
            children: [f.jsx("h3", {
                "data-aos": "fade-left",
                className: "text-xl mb-5 font-bold text-fuchsia-800",
                children: "Automation"
            }), f.jsx("p", {
                "data-aos": "fade-right",
                className: "leading-10 text-gray-500 text-justify",
                children: "I specialize in automating various business processes using low-code and no-code automation platforms such as Zapier, Airtable, Make, and Glide. Through successful collaboration with cross-functional teams, I rigorously assess specific operational demands and provide new solutions to optimize operations, assuring optimal performance, resource usage, and organizational growth. My expertise includes producing detailed documentation for automated processes, which allows for seamless knowledge transfer and long-term sustainability."
            })]
        }), f.jsxs("div", {
            "data-aos": "fade-up",
            className: "sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md",
            children: [f.jsx("h3", {
                "data-aos": "fade-right",
                className: "text-xl mb-5 font-bold text-fuchsia-800",
                children: "Financial Solutions"
            }), f.jsx("p", {
                "data-aos": "fade-left",
                className: "leading-10 text-gray-500 text-justify",
                children: "With expertise in finance, accounting, and technology, I specialize in developing innovative FinTech solutions. Utilizing advanced data analysis and automation tools such as Python, pandas, and low-code platforms like Zapier, I optimize financial processes, mitigate risks, and drive organizational growth. My integrated solutions empower businesses to achieve efficiency, accuracy, and security in their financial operations."
            })]
        })]
    })]
})
  , xs = "/assets/farmshare-nclD8_yr.png"
  , Z0 = "/assets/zulip2-F8o9lVe0.png"
  , q0 = "/assets/lorem-YCbgmNyE.jpg"
  , J0 = [{
    imgSrc: xs,
    name: "Farm Share",
    previewLink: "https://farmshare.co.ke/",
    sourceCodeLink: "https://github.com/KabuyaSamuel/Farm-Flow",
    date: "04/2023"
}, {
    imgSrc: Z0,
    name: "Lorem Ipsum",
    previewLink: "/pages/project",
    sourceCodeLink: "https://github.com/KabuyaSamuel/",
    date: "01/2024"
}, {
    imgSrc: q0,
    name: "Lorem Ipsum",
    previewLink: "/pages/project",
    sourceCodeLink: "https://github.com/KabuyaSamuel",
    date: "01/2024"
}, {
    imgSrc: xs,
    name: "Farm Share",
    previewLink: "https://farmshare.co.ke/",
    sourceCodeLink: "https://github.com/KabuyaSamuel/Farm-Flow",
    date: "04/2023"
}]
  , ev = ()=>{
    const [e,t] = we.useState({})
      , [n,r] = we.useState({})
      , l = o=>{
        t(u=>({
            ...u,
            [o]: !0
        }))
    }
      , i = o=>{
        r(u=>({
            ...u,
            [o]: !0
        }))
    }
    ;
    return f.jsxs("div", {
        id: "Projects",
        className: "sm:container mx-auto flex flex-col items-center justify-center p-5",
        children: [f.jsx("h1", {
            "data-aos": "fade-right",
            className: "text-[50px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500",
            children: "Projects"
        }), f.jsx("div", {
            className: "grid lg:grid-cols-2 gap-10",
            children: J0.map((o,u)=>f.jsxs("div", {
                className: "group col-span-2 lg:col-span-1 relative",
                "data-aos": "flip-up",
                children: [f.jsx("div", {
                    className: "relative before: absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0",
                    children: f.jsx("img", {
                        className: "transition duration-500 group-hover:opacity-70",
                        src: o.imgSrc,
                        alt: o.name,
                        width: "2000",
                        height: "1333"
                    })
                }), f.jsx("div", {
                    className: "overlay absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-center py-4",
                    children: f.jsxs("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [f.jsx("a", {
                            href: o.previewLink,
                            className: `text-sm mb-2 ${e[u] ? "text-gray-500" : "text-white"}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: ()=>l(u),
                            children: "Preview"
                        }), f.jsx("a", {
                            href: o.sourceCodeLink,
                            className: `text-sm ${n[u] ? "text-gray-500" : "text-white"}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: ()=>i(u),
                            children: "Source Code"
                        })]
                    })
                }), f.jsxs("div", {
                    className: "flex items-center justify-between p-4",
                    children: [f.jsx("h3", {
                        className: "text-2xl font-normal text-fuchsia-800",
                        children: o.name
                    }), f.jsx("span", {
                        className: "h-max rounded-full border border-fuchsia-800/30 px-2 py-1 text-xs tracking-wider text-fuchsia-800",
                        children: o.date
                    })]
                })]
            }, u))
        })]
    })
}
  , tv = ()=>f.jsx("section", {
    id: "Contact",
    className: "relative z-10 lg:pb-32 lg:pt-0",
    children: f.jsxs("div", {
        className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0",
        children: [f.jsxs("div", {
            className: "flex flex-wrap items-center gap-6",
            children: [f.jsx("h2", {
                className: "text-7xl font-bold text-white xl:text-8xl",
                "data-aos": "fade-up",
                children: "Let's talk!"
            }), f.jsx("span", {
                className: "h-max rounded-full border border-fuchsia-500/40 px-2 py-1 text-xs tracking-wider text-fuchsia-500",
                "data-aos": "fade-up",
                children: "__"
            })]
        }), f.jsx("div", {
            className: "mt-24",
            children: f.jsxs("div", {
                className: "grid gap-6 border-t border-fuchsia-500/30 pt-24 lg:grid-cols-3 lg:gap-24",
                children: [f.jsx("div", {
                    className: "lg:col-span-2",
                    children: f.jsxs("form", {
                        action: "",
                        className: "mx-auto space-y-8 md:w-3/4",
                        "data-aos": "fade-up",
                        children: [f.jsxs("div", {
                            className: "grid gap-8 sm:grid-cols-2 sm:gap-4",
                            children: [f.jsxs("div", {
                                children: [f.jsx("label", {
                                    htmlFor: "firstname",
                                    className: "tracking-wide text-white",
                                    children: "First Name"
                                }), f.jsx("input", {
                                    type: "text",
                                    id: "fistname",
                                    name: "fistname",
                                    autoComplete: "name",
                                    placeholder: "Enter your first name",
                                    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500"
                                })]
                            }), f.jsxs("div", {
                                children: [f.jsx("label", {
                                    htmlFor: "lastname",
                                    className: "tracking-wide text-white",
                                    children: "Last Name"
                                }), f.jsx("input", {
                                    type: "text",
                                    id: "lastname",
                                    name: "lastname",
                                    autoComplete: "family-name",
                                    placeholder: "Enter your last name",
                                    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500"
                                })]
                            })]
                        }), f.jsxs("div", {
                            children: [f.jsx("label", {
                                htmlFor: "email",
                                className: "tracking-wide text-white",
                                children: "Email Address"
                            }), f.jsx("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                placeholder: "Enter your email address",
                                className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500"
                            })]
                        }), f.jsxs("div", {
                            children: [f.jsx("label", {
                                htmlFor: "message",
                                className: "tracking-wide text-white",
                                children: "Message"
                            }), f.jsx("textarea", {
                                name: "message",
                                id: "message",
                                cols: "30",
                                rows: "6",
                                placeholder: "Please enter your message here",
                                className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-fuchsia-500",
                                "data-gramm": "false"
                            })]
                        }), f.jsx("button", {
                            type: "submit",
                            className: "group ml-auto flex h-12 w-auto items-center overflow-hidden bg-fuchsia-500 px-5 transition-all duration-300 hover:bg-white",
                            children: f.jsx("span", {
                                className: "relative uppercase tracking-wide text-white group-hover:text-fuchsia-500",
                                children: "Send Message"
                            })
                        })]
                    })
                }), f.jsxs("div", {
                    className: "mt-3 border border-fuchsia-500/30 p-4 sm:p-8",
                    "data-aos": "fade-up",
                    children: [f.jsxs("div", {
                        children: [f.jsx("h3", {
                            className: "text-xs font-light uppercase tracking-widest text-white",
                            children: "Address"
                        }), f.jsx("p", {
                            className: "mt-8 text-white",
                            children: "Nairobi City, Kenya"
                        })]
                    }), f.jsxs("div", {
                        className: "mt-8",
                        children: [f.jsx("h3", {
                            className: "text-xs font-light uppercase tracking-widest text-white",
                            children: "Contact Info"
                        }), f.jsxs("ul", {
                            className: "relative z-20 mt-8 space-y-2 font-light text-white",
                            children: [f.jsx("li", {
                                children: f.jsx("a", {
                                    href: "tel:+243000000000",
                                    children: "Phone ------ +254-748-20-48-33"
                                })
                            }), f.jsx("li", {
                                children: f.jsx("a", {
                                    href: "mailto:hello@tailus.io",
                                    children: "Email ------ samuelkabuya14@gmail.com"
                                })
                            })]
                        })]
                    }), f.jsxs("div", {
                        className: "mt-8",
                        children: [f.jsx("h3", {
                            className: "text-xs font-light uppercase tracking-widest text-white",
                            children: "Follow Me"
                        }), f.jsxs("ul", {
                            className: "relative z-20 mt-8 space-y-2 font-light text-white",
                            children: [f.jsx("li", {
                                children: f.jsx("a", {
                                    href: "https://www.linkedin.com/in/samuelkabuya/",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: "001 ------ LinkedIn"
                                })
                            }), f.jsx("li", {
                                children: f.jsx("a", {
                                    href: "https://github.com/KabuyaSamuel",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: "002 ------ GitHub"
                                })
                            }), f.jsx("li", {
                                children: f.jsx("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: "003 ------ LeetCode"
                                })
                            })]
                        })]
                    })]
                })]
            })
        })]
    })
})
  , nv = ()=>{
    const e = new Date().getFullYear();
    return f.jsx("footer", {
        className: "relative bg-black text-white",
        children: f.jsxs("div", {
            className: "relative overflow-hidden",
            children: [f.jsx("svg", {
                className: "absolute top-0 left-0 w-full",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1440 320",
                children: f.jsx("path", {
                    fill: "#1F2937",
                    fillOpacity: "1",
                    d: "M0,128L60,122.7C120,117,240,107,360,133.3C480,160,600,224,720,234.7C840,245,960,203,1080,176C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                })
            }), f.jsxs("div", {
                className: "grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20 relative z-10",
                children: [f.jsxs("div", {
                    className: "flex flex-col gap-5",
                    children: [f.jsx("h2", {
                        className: "text-3xl text-fuchsia-500",
                        children: "☽kͥabͣuͫℽa☾ ҉  "
                    }), f.jsx("p", {
                        children: "An Automation Assistant helping businesses optimize and automate their processes to increase efficiency and productivity."
                    })]
                }), f.jsxs("div", {
                    children: [f.jsx("h2", {
                        className: "text-[22px] font-semibold text-fuchsia-500 py-2 uppercase",
                        children: "Services"
                    }), f.jsxs("ul", {
                        className: "my-4 list-none",
                        children: [f.jsx("li", {
                            children: "AI & Automation Assistant"
                        }), f.jsx("li", {
                            children: "Web Development"
                        }), f.jsx("li", {
                            children: "Low Code / No Code development"
                        }), f.jsx("li", {})]
                    })]
                }), f.jsxs("div", {
                    children: [f.jsx("h2", {
                        className: "text-[22px] font-semibold text-fuchsia-500 py-2 uppercase",
                        children: "Hobbies"
                    }), f.jsxs("ul", {
                        className: "my-4 list-none",
                        children: [f.jsx("li", {
                            children: "Watching Hacking Documentaries"
                        }), f.jsx("li", {
                            children: "Listening to tech talks"
                        }), f.jsx("li", {
                            children: "Listening to cybersecurity stories"
                        })]
                    })]
                }), f.jsxs("div", {
                    children: [f.jsx("h2", {
                        className: "text-[22px] font-semibold text-fuchsia-500 py-2 uppercase",
                        children: "Contact"
                    }), f.jsx("p", {
                        className: "text-[16px] my-4",
                        children: "Email: samuelkabuya14@gmail.com"
                    }), f.jsx("p", {
                        className: "text-[16px] my-4",
                        children: "Phone: +254-748-204-833 "
                    }), f.jsxs("div", {
                        className: "flex space-x-4",
                        children: [f.jsx("a", {
                            className: "text-white hover:text-fuchsia-500",
                            href: "https://github.com/KabuyaSamuel",
                            target: "_blank",
                            rel: "noreferrer",
                            children: f.jsx(Am, {})
                        }), f.jsx("a", {
                            className: "text-white hover:text-fuchsia-500",
                            href: "https://www.linkedin.com/in/samuelkabuya/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: f.jsx(Hf, {})
                        }), f.jsx("a", {
                            className: "text-white hover:text-fuchsia-500",
                            href: "#",
                            children: f.jsx(Uf, {})
                        }), f.jsx("a", {
                            className: "text-white hover:text-fuchsia-500",
                            href: "https://medium.com/@samuelkabuya",
                            target: "_blank",
                            rel: "noreferrer",
                            children: f.jsx(Af, {})
                        })]
                    })]
                })]
            }), f.jsxs("h6", {
                className: "text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10",
                children: ["© Samuel Kabuya ", e]
            })]
        })
    })
}
;
function rv() {
    return f.jsx(f.Fragment, {
        children: f.jsxs("div", {
            className: "bg-slate-900",
            children: [f.jsx(X0, {}), f.jsx(Ym, {}), f.jsx(Dm, {}), f.jsx(G0, {}), f.jsx(ev, {}), f.jsx(tv, {}), f.jsx(nv, {})]
        })
    })
}
Wi.createRoot(document.getElementById("root")).render(f.jsx(zt.StrictMode, {
    children: f.jsx(rv, {})
}));
