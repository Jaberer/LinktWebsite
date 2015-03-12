(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.9.2-pre",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) {
            return new x.fn.init(e, t, r)
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        N = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        C = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) {
            return t.toUpperCase()
        },
        q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (M(), x.ready())
        },
        M = function() {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
        };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : C.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
                        for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || v.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = _(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(N, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (_(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = _(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(x(e), n)
                })), n))
                for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }), x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
            else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
        else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {}
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    M(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function _(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a);
    var F = {};

    function O(e) {
        var t = F[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? F[e] || O(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function(t, n) {
                                var r = x.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        var r;
                        while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, r || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !u || (n ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                s, l, u;
            if (r > 1)
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.boxModel = "CSS1Compat" === a.compatMode, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== l.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: x.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return
                }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() {
                    x.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"), x._removeData(e, n)
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Q = /^(?:checked|selected)$/i,
        K = x.support.getSetAttribute,
        Z = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var o, a = 0,
                        s = x(this),
                        l = t,
                        u = e.match(T) || [];
                    while (o = u[a++]) l = r ? l : !s.hasClass(o), s[l ? "addClass" : "removeClass"](o)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
                    var o, a = x(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l) return typeof e.getAttribute === i ? x.prop(e, n, r) : (a = 1 !== l || !x.isXMLDoc(e), a && (n = n.toLowerCase(), o = x.attrHooks[n] || (G.test(n) ? X : z)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = x.propFix[n] || n, G.test(n) ? !K && Q.test(n) ? e[x.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(K ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), X = {
        get: function(e, n) {
            var r = x.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? Z && K ? null != i : Q.test(n) ? e[x.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : Z && K || !Q.test(n) ? e.setAttribute(!K && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, Z && K || (x.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return x.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), K || (z = x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.attrHooks.contenteditable = {
        get: z.get,
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = x.extend(x.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), x.support.hrefNormalized || (x.each(["href", "src", "width", "height"], function(e, n) {
        x.attrHooks[n] = x.extend(x.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })), x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = x.extend(x.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), x.support.enctype || (x.propFix.enctype = "encoding"), x.support.checkOn || x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = x.extend(x.valHooks[this], {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        })
    });
    var et = /^(?:input|select|textarea)$/i,
        tt = /^key/,
        nt = /^(?:mouse|contextmenu)|click/,
        rt = /^(?:focusinfocus|focusoutblur)$/,
        it = /^([^.]*)(?:\.(.+)|)$/;

    function ot() {
        return !0
    }

    function at() {
        return !1
    }
    x.event = {
            global: {},
            add: function(e, n, r, o, a) {
                var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
                if (v) {
                    r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                        return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                    }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                    while (u--) s = it.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && x.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
                if (m && (c = m.events)) {
                    t = (t || "").match(T) || [""], u = t.length;
                    while (u--)
                        if (s = it.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                            p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                            while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                            l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                        } else
                            for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                    x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, o) {
                var s, l, u, c, p, f, d, h = [i || a],
                    g = v.call(n, "type") ? n.type : n,
                    m = v.call(n, "namespace") ? n.namespace.split(".") : [];
                if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !rt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                    if (!o && !p.noBubble && !x.isWindow(i)) {
                        for (c = p.delegateType || g, rt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                        f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                    }
                    d = 0;
                    while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                    if (n.type = g, !(o || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && x.nodeName(i, "a") || !x.acceptData(i) || !l || !i[g] || x.isWindow(i))) {
                        f = i[l], f && (i[l] = null), x.event.triggered = g;
                        try {
                            i[g]()
                        } catch (y) {}
                        x.event.triggered = t, f && (i[l] = f)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = x.event.fix(e);
                var n, r, i, o, a, s = [],
                    l = g.call(arguments),
                    u = (x._data(this, "events") || {})[e.type] || [],
                    c = x.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    s = x.event.handlers.call(this, e, u), n = 0;
                    while ((o = s[n++]) && !e.isPropagationStopped()) {
                        e.currentTarget = o.elem, a = 0;
                        while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [],
                    l = n.delegateCount,
                    u = e.target;
                if (l && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                            o.length && s.push({
                                elem: u,
                                handlers: o
                            })
                        }
                return n.length > l && s.push({
                    elem: this,
                    handlers: n.slice(l)
                }), s
            },
            fix: function(e) {
                if (e[x.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    s = this.fixHooks[i];
                s || (this.fixHooks[i] = s = nt.test(i) ? this.mouseHooks : tt.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
                while (t--) n = r[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, s = n.button,
                        l = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== a.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === a.activeElement && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = x.extend(new x.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
        }, x.Event = function(e, n) {
            return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? ot : at) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
        }, x.Event.prototype = {
            isDefaultPrevented: at,
            isPropagationStopped: at,
            isImmediatePropagationStopped: at,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ot, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ot, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = ot, this.stopPropagation()
            }
        }, x.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            x.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), x.support.submitBubbles || (x.event.special.submit = {
            setup: function() {
                return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                    r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), x._data(r, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
            }
        }), x.support.changeBubbles || (x.event.special.change = {
            setup: function() {
                return et.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), x.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
                })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    et.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                    }), x._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return x.event.remove(this, "._change"), !et.test(this.nodeName)
            }
        }), x.support.focusinBubbles || x.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    x.event.simulate(t, e.target, x.event.fix(e), !0)
                };
            x.event.special[t] = {
                setup: function() {
                    0 === n++ && a.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && a.removeEventListener(e, r, !0)
                }
            }
        }), x.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (a in e) this.on(a, n, r, e[a], o);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = at;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(e) {
                    return x().off(e), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
                    x.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = at), this.each(function() {
                    x.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    x.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var r = this[0];
                return r ? x.event.trigger(e, n, r, !0) : t
            }
        }),
        function(e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v = "sizzle" + -new Date,
                b = e.document,
                w = {},
                T = 0,
                N = 0,
                C = at(),
                k = at(),
                E = at(),
                S = !1,
                A = function() {
                    return 0
                },
                j = typeof t,
                D = 1 << 31,
                L = [],
                H = L.pop,
                q = L.push,
                M = L.push,
                _ = L.slice,
                F = L.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                O = "[\\x20\\t\\r\\n\\f]",
                B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                P = B.replace("w", "w#"),
                R = "([*^$|!~]?=)",
                W = "\\[" + O + "*(" + B + ")" + O + "*(?:" + R + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + P + ")|)|)" + O + "*\\]",
                $ = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + W.replace(3, 8) + ")*)|.*)\\)|)",
                I = RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                z = RegExp("^" + O + "*," + O + "*"),
                X = RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
                U = RegExp($),
                V = RegExp("^" + P + "$"),
                Y = {
                    ID: RegExp("^#(" + B + ")"),
                    CLASS: RegExp("^\\.(" + B + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
                    TAG: RegExp("^(" + B.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + W),
                    PSEUDO: RegExp("^" + $),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    needsContext: RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                },
                J = /[\x20\t\r\n\f]*[+~]/,
                G = /^[^{]+\{\s*\[native code/,
                Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                et = /'|\\/g,
                tt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                nt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                rt = function(e, t) {
                    var n = "0x" + t - 65536;
                    return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                M.apply(L = _.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType
            } catch (it) {
                M = {
                    apply: L.length ? function(e, t) {
                        q.apply(e, _.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }

            function ot(e) {
                return G.test(e + "")
            }

            function at() {
                var e, t = [];
                return e = function(n, r) {
                    return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
                }
            }

            function st(e) {
                return e[v] = !0, e
            }

            function lt(e) {
                var t = p.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function ut(e, t, n, r) {
                var i, o, a, s, l, u, f, g, m, x;
                if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (d && !r) {
                    if (i = Q.exec(e))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (w.qsa && !h.test(e)) {
                        if (f = !0, g = v, m = t, x = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            u = ht(e), (f = t.getAttribute("id")) ? g = f.replace(et, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", l = u.length;
                            while (l--) u[l] = g + gt(u[l]);
                            m = J.test(e) && t.parentNode || t, x = u.join(",")
                        }
                        if (x) try {
                            return M.apply(n, m.querySelectorAll(x)), n
                        } catch (T) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return Nt(e.replace(I, "$1"), t, n, r)
            }
            a = ut.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, c = ut.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : b;
                return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = !a(n), w.getElementsByTagName = lt(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), w.attributes = lt(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), w.getElementsByClassName = lt(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), w.getByName = lt(function(e) {
                    e.id = v + 0, e.appendChild(p.createElement("a")).setAttribute("name", v), e.appendChild(p.createElement("i")).setAttribute("name", v), f.appendChild(e);
                    var t = n.getElementsByName && n.getElementsByName(v).length === 2 + n.getElementsByName(v + 0).length;
                    return f.removeChild(e), t
                }), w.sortDetached = lt(function(e) {
                    return e.compareDocumentPosition && 1 & e.compareDocumentPosition(p.createElement("div"))
                }), i.attrHandle = lt(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== j && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                }, w.getByName ? (i.find.ID = function(e, t) {
                    if (typeof t.getElementById !== j && d) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(nt, rt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (i.find.ID = function(e, n) {
                    if (typeof n.getElementById !== j && d) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== j && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(nt, rt);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = w.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, i.find.NAME = w.getByName && function(e, n) {
                    return typeof n.getElementsByName !== j ? n.getElementsByName(name) : t
                }, i.find.CLASS = w.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== j && d ? n.getElementsByClassName(e) : t
                }, g = [], h = [":focus"], (w.qsa = ot(n.querySelectorAll)) && (lt(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
                }), lt(function(e) {
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("i", ""), e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + O + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
                })), (w.matchesSelector = ot(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function(e) {
                    w.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", $)
                }), h = RegExp(h.join("|")), g = g.length && RegExp(g.join("|")), y = ot(f.contains) || f.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, A = f.compareDocumentPosition ? function(e, t) {
                    if (e === t) return S = !0, 0;
                    var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return r ? 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || y(b, e) ? -1 : t === n || y(b, t) ? 1 : u ? F.call(u, e) - F.call(u, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) return S = !0, 0;
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : u ? F.call(u, e) - F.call(u, t) : 0;
                    if (o === a) return ct(e, t);
                    r = e;
                    while (r = r.parentNode) s.unshift(r);
                    r = t;
                    while (r = r.parentNode) l.unshift(r);
                    while (s[i] === l[i]) i++;
                    return i ? ct(s[i], l[i]) : s[i] === b ? -1 : l[i] === b ? 1 : 0
                }, p) : p
            }, ut.matches = function(e, t) {
                return ut(e, null, null, t)
            }, ut.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && c(e), t = t.replace(tt, "='$1']"), w.matchesSelector && d && (!g || !g.test(t)) && !h.test(t)) try {
                    var n = m.call(e, t);
                    if (n || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (r) {}
                return ut(t, p, null, [e]).length > 0
            }, ut.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && c(e), y(e, t)
            }, ut.attr = function(e, t) {
                var n;
                return (e.ownerDocument || e) !== p && c(e), d && (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : !d || w.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, ut.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, ut.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (S = !w.detectDuplicates, u = !w.sortStable && e.slice(0), e.sort(A), S) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return e
            };

            function ct(e, t) {
                var n = t && e,
                    r = n && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function pt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function ft(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function dt(e) {
                return st(function(t) {
                    return t = +t, st(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            o = ut.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += o(t);
                return n
            }, i = ut.selectors = {
                cacheLength: 50,
                createPseudo: st,
                match: Y,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || "").replace(nt, rt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ut.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && U.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        return "*" === e ? function() {
                            return !0
                        } : (e = e.replace(nt, rt).toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = C[e + " "];
                        return t || (t = RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && C(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = ut.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                b = !l && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g])
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && b) {
                                    c = m[v] || (m[v] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [T, d, f];
                                            break
                                        }
                                } else if (b && (u = (t[v] || (t[v] = {}))[e]) && u[0] === T) f = u[1];
                                else
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (b && ((p[v] || (p[v] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                        return r[v] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: st(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(I, "$1"));
                        return r[v] ? st(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: st(function(e) {
                        return function(t) {
                            return ut(e, t).length > 0
                        }
                    }),
                    contains: st(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                        }
                    }),
                    lang: st(function(e) {
                        return V.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: dt(function() {
                        return [0]
                    }),
                    last: dt(function(e, t) {
                        return [t - 1]
                    }),
                    eq: dt(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: dt(function(e, t) {
                        var n = 0;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: dt(function(e, t) {
                        var n = 1;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: dt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: dt(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) e.push(r);
                        return e
                    })
                }
            };
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[n] = pt(n);
            for (n in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[n] = ft(n);

            function ht(e, t) {
                var n, r, o, a, s, l, u, c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                s = e, l = [], u = i.preFilter;
                while (s) {
                    (!n || (r = z.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = X.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(I, " ")
                    }), s = s.slice(n.length));
                    for (a in i.filter) !(r = Y[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? ut.error(e) : k(e, l).slice(0)
            }

            function gt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function mt(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    a = N++;
                return t.first ? function(t, n, r) {
                    while (t = t[i])
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, s) {
                    var l, u, c, p = T + " " + a;
                    if (s) {
                        while (t = t[i])
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        while (t = t[i])
                            if (1 === t.nodeType || o)
                                if (c = t[v] || (t[v] = {}), (u = c[i]) && u[0] === p) {
                                    if ((l = u[1]) === !0 || l === r) return l === !0
                                } else if (u = c[i] = [p], u[1] = e(t, n, s) || r, u[1] === !0) return !0
                }
            }

            function yt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function vt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
                return a
            }

            function bt(e, t, n, r, i, o) {
                return r && !r[v] && (r = bt(r)), i && !i[v] && (i = bt(i, o)), st(function(o, a, s, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || Tt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : vt(g, f, e, s, l),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, l), r) {
                        u = vt(y, d), r(u, [], s, l), c = u.length;
                        while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                u = [], c = y.length;
                                while (c--)(p = y[c]) && u.push(m[c] = p);
                                i(null, y = [], u, l)
                            }
                            c = y.length;
                            while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    } else y = vt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
                })
            }

            function xt(e) {
                var t, n, r, o = e.length,
                    a = i.relative[e[0].type],
                    s = a || i.relative[" "],
                    u = a ? 1 : 0,
                    c = mt(function(e) {
                        return e === t
                    }, s, !0),
                    p = mt(function(e) {
                        return F.call(t, e) > -1
                    }, s, !0),
                    f = [function(e, n, r) {
                        return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }];
                for (; o > u; u++)
                    if (n = i.relative[e[u].type]) f = [mt(yt(f), n)];
                    else {
                        if (n = i.filter[e[u].type].apply(null, e[u].matches), n[v]) {
                            for (r = ++u; o > r; r++)
                                if (i.relative[e[r].type]) break;
                            return bt(u > 1 && yt(f), u > 1 && gt(e.slice(0, u - 1)).replace(I, "$1"), n, r > u && xt(e.slice(u, r)), o > r && xt(e = e.slice(r)), o > r && gt(e))
                        }
                        f.push(n)
                    }
                return yt(f)
            }

            function wt(e, t) {
                var n = 0,
                    o = t.length > 0,
                    a = e.length > 0,
                    s = function(s, u, c, f, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            N = l,
                            C = s || a && i.find.TAG("*", d && u.parentNode || u),
                            k = T += null == N ? 1 : Math.random() || .1;
                        for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, u, c)) {
                                        f.push(h);
                                        break
                                    }
                                w && (T = k, r = ++n)
                            }
                            o && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, o && b !== v) {
                            g = 0;
                            while (m = t[g++]) m(x, y, u, c);
                            if (s) {
                                if (v > 0)
                                    while (b--) x[b] || y[b] || (y[b] = H.call(f));
                                y = vt(y)
                            }
                            M.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && ut.uniqueSort(f)
                        }
                        return w && (T = k, l = N), x
                    };
                return o ? st(s) : s
            }
            s = ut.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = ht(e)), n = t.length;
                    while (n--) o = xt(t[n]), o[v] ? r.push(o) : i.push(o);
                    o = E(e, wt(i, r))
                }
                return o
            };

            function Tt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) ut(e, t[r], n);
                return n
            }

            function Nt(e, t, n, r) {
                var o, a, l, u, c, p = ht(e);
                if (!r && 1 === p.length) {
                    if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === t.nodeType && d && i.relative[a[1].type]) {
                        if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t) return n;
                        e = e.slice(a.shift().value.length)
                    }
                    o = Y.needsContext.test(e) ? 0 : a.length;
                    while (o--) {
                        if (l = a[o], i.relative[u = l.type]) break;
                        if ((c = i.find[u]) && (r = c(l.matches[0].replace(nt, rt), J.test(a[0].type) && t.parentNode || t))) {
                            if (a.splice(o, 1), e = r.length && gt(a), !e) return M.apply(n, r), n;
                            break
                        }
                    }
                }
                return s(e, p)(r, t, !d, n, J.test(e)), n
            }
            i.pseudos.nth = i.pseudos.eq;

            function Ct() {}
            Ct.prototype = i.filters = i.pseudos, i.setFilters = new Ct, w.sortStable = v.split("").sort(A).join("") === v, c(), [0, 0].sort(A), w.detectDuplicates = S, ut.attr = x.attr, x.find = ut, x.expr = ut.selectors, x.expr[":"] = x.expr.pseudos, x.unique = ut.uniqueSort, x.text = ut.getText, x.isXMLDoc = ut.isXML, x.contains = ut.contains
        }(e);
    var st = /Until$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = /^.[^:#\[\.,]*$/,
        ct = x.expr.match.needsContext,
        pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    x.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) x.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(dt(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(dt(this, e, !0))
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? ct.test(e) ? x(e, this.context).index(this[0]) >= 0 : x.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ct.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.fn.andSelf = x.fn.addBack;

    function ft(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return ft(e, "nextSibling")
        },
        prev: function(e) {
            return ft(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return st.test(e) || (r = n), r && "string" == typeof r && (i = x.filter(r, i)), i = this.length > 1 && !pt[e] ? x.unique(i) : i, this.length > 1 && lt.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), x.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? x.find.matchesSelector(t[0], e) ? [t[0]] : [] : x.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function dt(e, t, n) {
        if (t = t || 0, x.isFunction(t)) return x.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return x.grep(e, function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = x.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (ut.test(t)) return x.filter(t, r, !n);
            t = x.filter(t, r)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 === n
        })
    }

    function ht(e) {
        var t = gt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var gt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        mt = / jQuery\d+="(?:null|\d+)"/g,
        yt = RegExp("<(?:" + gt + ")[\\s/>]", "i"),
        vt = /^\s+/,
        bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        xt = /<([\w:]+)/,
        wt = /<tbody/i,
        Tt = /<|&#?\w+;/,
        Nt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Et = /^$|\/(?:java|ecma)script/i,
        St = /^true\/(.*)/,
        At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        jt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Dt = ht(a),
        Lt = Dt.appendChild(a.createElement("div"));
    jt.optgroup = jt.option, jt.tbody = jt.tfoot = jt.colgroup = jt.caption = jt.thead, jt.th = jt.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++)(!e || x.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || x.cleanData(Bt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Bt(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Bt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(mt, "") : t;
                if (!("string" != typeof e || Nt.test(e) || !x.support.htmlSerialize && yt.test(e) || !x.support.leadingWhitespace && vt.test(e) || jt[(xt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(bt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Bt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = x.isFunction(e);
            return t || "string" == typeof e || (e = x(e).not(this).detach()), "" !== e ? this.domManip([e], !0, function(e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (x(this).remove(), n.insertBefore(e, t))
            }) : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = d.apply([], e);
            var i, o, a, s, l, u, c = 0,
                p = this.length,
                f = this,
                h = p - 1,
                g = e[0],
                m = x.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || x.support.checkClone) && kt.test(g)) return this.each(function(i) {
                var o = f.eq(i);
                m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (p && (u = x.buildFragment(e, this[0].ownerDocument, !1, this), i = u.firstChild, 1 === u.childNodes.length && (u = i), i)) {
                for (n = n && x.nodeName(i, "tr"), s = x.map(Bt(u, "script"), qt), a = s.length; p > c; c++) o = u, c !== h && (o = x.clone(o, !0, !0), a && x.merge(s, Bt(o, "script"))), r.call(n && x.nodeName(this[c], "table") ? Ht(this[c], "tbody") : this[c], o, c);
                if (a)
                    for (l = s[s.length - 1].ownerDocument, x.map(s, Mt), c = 0; a > c; c++) o = s[c], Et.test(o.type || "") && !x._data(o, "globalEval") && x.contains(l, o) && (o.src ? x.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : x.globalEval((o.text || o.textContent || o.innerHTML || "").replace(At, "")));
                u = i = null
            }
            return this
        }
    });

    function Ht(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function qt(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function Mt(e) {
        var t = St.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Ft(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (qt(t).text = e.text, Mt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Bt(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Bt(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Pt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !yt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Lt.innerHTML = e.outerHTML, Lt.removeChild(o = Lt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Bt(o), s = Bt(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Bt(e), r = r || Bt(o), a = 0; null != (i = s[a]); a++) Ft(i, r[a]);
                else Ft(e, o);
            return r = Bt(o, "script"), r.length > 0 && _t(r, !l && Bt(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = ht(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if (Tt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (xt.exec(o) || ["", ""])[1].toLowerCase(), c = jt[l] || jt._default, s.innerHTML = c[1] + o.replace(bt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!x.support.leadingWhitespace && vt.test(o) && d.push(t.createTextNode(vt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || wt.test(o) ? "<table>" !== c[1] || wt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Bt(d, "input"), Pt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Bt(f.appendChild(o), "script"), a && _t(s), n)) {
                    i = 0;
                    while (o = s[i++]) Et.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
        }
    });
    var Rt, Wt, $t, It = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Xt = /^(top|right|bottom|left)$/,
        Ut = /^(none|table(?!-c[ea]).+)/,
        Vt = /^margin/,
        Yt = RegExp("^(" + w + ")(.*)$", "i"),
        Jt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Gt = RegExp("^([+-])=(" + w + ")", "i"),
        Qt = {
            BODY: "block"
        },
        Kt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Zt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        en = ["Top", "Right", "Bottom", "Left"],
        tn = ["Webkit", "O", "Moz", "ms"];

    function nn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = tn.length;
        while (i--)
            if (t = tn[i] + n, t in e) return t;
        return r
    }

    function rn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function on(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && rn(r) && (o[a] = x._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = rn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (x.isArray(n)) {
                    for (o = Wt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return on(this, !0)
        },
        hide: function() {
            return on(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : rn(this)) ? x(this).show(): x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = $t(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = nn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Gt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = nn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = $t(e, n, i)), "normal" === a && n in Zt && (a = Zt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (Wt = function(t) {
        return e.getComputedStyle(t, null)
    }, $t = function(e, n, r) {
        var i, o, a, s = r || Wt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Jt.test(l) && Vt.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Wt = function(e) {
        return e.currentStyle
    }, $t = function(e, n, r) {
        var i, o, a, s = r || Wt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Jt.test(l) && !Xt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function an(e, t, n) {
        var r = Yt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function sn(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + en[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + en[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + en[o] + "Width", !0, i))) : (a += x.css(e, "padding" + en[o], !0, i), "padding" !== n && (a += x.css(e, "border" + en[o] + "Width", !0, i)));
        return a
    }

    function ln(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Wt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = $t(e, t, o), (0 > i || null == i) && (i = e.style[t]), Jt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + sn(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function un(e) {
        var t = a,
            n = Qt[e];
        return n || (n = cn(e, t), "none" !== n && n || (Rt = (Rt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Rt[0].contentWindow || Rt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = cn(e, t), Rt.detach()), Qt[e] = n), n
    }

    function cn(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Ut.test(x.css(e, "display")) ? x.swap(e, Kt, function() {
                    return ln(e, n, i)
                }) : ln(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Wt(e);
                return an(e, t, r ? sn(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace(It, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = It.test(o) ? o.replace(It, i) : o + " " + i)
        }
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, $t, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = $t(e, n), Jt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + en[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Vt.test(e) || (x.cssHooks[e + t].set = an)
    });
    var pn = /%20/g,
        fn = /\[\]$/,
        dn = /\r?\n/g,
        hn = /^(?:submit|button|image|reset|file)$/i,
        gn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && gn.test(this.nodeName) && !hn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(dn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(dn, "\r\n")
                }
            }).get()
        }
    }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) mn(r, e[r], n, o);
        return i.join("&").replace(pn, "+")
    };

    function mn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) {
            n || fn.test(e) ? r(e, i) : mn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x.type(t)) r(e, t);
        else
            for (i in t) mn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var yn, vn, bn = x.now(),
        xn = /\?/,
        wn = /#.*$/,
        Tn = /([?&])_=[^&]*/,
        Nn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        kn = /^(?:GET|HEAD)$/,
        En = /^\/\//,
        Sn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        An = x.fn.load,
        jn = {},
        Dn = {},
        Ln = "*/".concat("*");
    try {
        vn = o.href
    } catch (Hn) {
        vn = a.createElement("a"), vn.href = "", vn = vn.href
    }
    yn = Sn.exec(vn.toLowerCase()) || [];

    function qn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Mn(e, n, r, i) {
        var o = {},
            a = e === Dn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && An) return An.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vn,
            type: "GET",
            isLocal: Cn.test(yn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ln,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: qn(jn),
        ajaxTransport: qn(Dn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                N = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) {
                                c = {};
                                while (t = Nn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else N.always(e[N.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), k(0, t), this
                    }
                };
            if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || vn) + "").replace(wn, "").replace(En, yn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = Sn.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === yn[1] && r[2] === yn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (yn[3] || ("http:" === yn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), Mn(jn, p, n, N), 2 === b) return N;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !kn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (xn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Tn.test(o) ? o.replace(Tn, "$1_=" + bn++) : o + (xn.test(o) ? "&" : "?") + "_=" + bn++)), p.ifModified && (x.lastModified[o] && N.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && N.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ln + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === b)) return N.abort();
            w = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) N[i](p[i]);
            if (u = Mn(Dn, p, n, N)) {
                N.readyState = 1, l && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    N.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (C) {
                    if (!(2 > b)) throw C;
                    k(-1, C)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", N.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Fn(p, N, r)), w = On(p, w, N, c), c ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, y = w.data, v = w.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), l && (d.trigger("ajaxComplete", [N, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return N
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        }
    });

    function Fn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: a ? p : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Bn = [],
        Pn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bn.pop() || x.expando + "_" + bn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Pn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Pn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Pn, "$1" + o) : n.jsonp !== !1 && (n.url += (xn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Bn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Rn, Wn, $n = 0,
        In = e.ActiveXObject && function() {
            var e;
            for (e in Rn) Rn[e](t, !0)
        };

    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Xn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && zn() || Xn()
    } : zn, Wn = x.ajaxSettings.xhr(), x.support.cors = !!Wn && "withCredentials" in Wn, Wn = x.support.ajax = !!Wn, Wn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = x.noop, In && delete Rn[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++$n, In && (Rn || (Rn = {}, x(e).unload(In)), Rn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Un, Vn, Yn = /^(?:toggle|show|hide)$/,
        Jn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Gn = /queueHooks$/,
        Qn = [rr],
        Kn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    o = Jn.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    l = 1,
                    u = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (x.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = x.css(i.elem, e, !0) || n || 1;
                        do l = l || ".5", s /= l, x.style(i.elem, e, s + r); while (l !== (l = i.cur() / a) && 1 !== l && --u)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };

    function Zn() {
        return setTimeout(function() {
            Un = t
        }), Un = x.now()
    }

    function er(e, t) {
        x.each(t, function(t, n) {
            var r = (Kn[t] || []).concat(Kn["*"]),
                i = 0,
                o = r.length;
            for (; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function tr(e, t, n) {
        var r, i, o = 0,
            a = Qn.length,
            s = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                var t = Un || Zn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Un || Zn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (nr(c, u.opts.specialEasing); a > o; o++)
            if (r = Qn[o].call(u, e, c, u.opts)) return r;
        return er(u, c), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function nr(e, t) {
        var n, r, i, o, a;
        for (i in e)
            if (r = x.camelCase(i), o = t[r], n = e[i], x.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = x.cssHooks[r], a && "expand" in a) {
                n = a.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = o)
            } else t[r] = o
    }
    x.Animation = x.extend(tr, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Kn[n] = Kn[n] || [], Kn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    });

    function rr(e, t, n) {
        var r, i, o, a, s, l, u, c, p, f = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && rn(e);
        n.queue || (c = x._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
            c.unqueued || p()
        }), c.unqueued++, f.always(function() {
            f.always(function() {
                c.unqueued--, x.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", x.support.shrinkWrapBlocks || f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (a = t[i], Yn.exec(a)) {
                if (delete t[i], l = l || "toggle" === a, a === (m ? "hide" : "show")) continue;
                g.push(i)
            }
        if (o = g.length) {
            s = x._data(e, "fxshow") || x._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), l && (s.hidden = !m), m ? x(e).show() : f.done(function() {
                x(e).hide()
            }), f.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in h) x.style(e, t, h[t])
            });
            for (i = 0; o > i; i++) r = g[i], u = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || x.style(e, r), r in s || (s[r] = u.start, m && (u.end = u.start, u.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function ir(e, t, n, r, i) {
        return new ir.prototype.init(e, t, n, r, i)
    }
    x.Tween = ir, ir.prototype = {
        constructor: ir,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ir.propHooks[this.prop];
            return e && e.get ? e.get(this) : ir.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ir.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ir.propHooks._default.set(this), this
        }
    }, ir.prototype.init.prototype = ir.prototype, ir.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, ir.propHooks.scrollTop = ir.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(or(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(rn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = tr(this, x.extend({}, e), o);
                    a.finish = function() {
                        t.stop(!0)
                    }, (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Gn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function or(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = en[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    x.each({
        slideDown: or("show"),
        slideUp: or("hide"),
        slideToggle: or("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = ir.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Un = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Un = t
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Vn || (Vn = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(Vn), Vn = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = ar(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = ar(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function ar(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = x, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return x
    })
})(window);
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b()
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this),
            e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(".item"), this.$items.index(this.$active)
    }, c.prototype.to = function(b) {
        var c = this,
            d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
            e = c || d[b](),
            f = this.interval,
            g = "next" == b ? "left" : "right",
            h = "next" == b ? "first" : "last",
            i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = e[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
                var b = a(i.$indicators.children()[i.getActiveIndex()]);
                b && b.addClass("active")
            }));
            var l = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
            return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
                e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(l)
                }, 0)
            }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(l)), f && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")),
            g = a.extend({}, f.data(), e.data()),
            h = e.attr("data-slide-to");
        h && (g.interval = !1), b.call(f, g), (h = e.attr("data-slide-to")) && f.data("bs.carousel").to(h), c.preventDefault()
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    c.DEFAULTS = {
        toggle: !0
    }, c.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, c.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var c = a.Event("show.bs.collapse");
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                var d = this.$parent && this.$parent.find("> .panel > .in");
                if (d && d.length) {
                    var e = d.data("bs.collapse");
                    if (e && e.transitioning) return;
                    b.call(d, "hide"), e || d.data("bs.collapse", null)
                }
                var f = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
                var g = function(b) {
                    return b && b.target != this.$element[0] ? void this.$element.one(a.support.transition.end, a.proxy(g, this)) : (this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, void this.$element.off(a.support.transition.end + ".bs.collapse").trigger("shown.bs.collapse"))
                };
                if (!a.support.transition) return g.call(this);
                var h = a.camelCase(["scroll", f].join("-"));
                this.$element.on(a.support.transition.end + ".bs.collapse", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
            }
        }
    }, c.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function(b) {
                    return b && b.target != this.$element[0] ? void this.$element.one(a.support.transition.end, a.proxy(d, this)) : (this.transitioning = 0, void this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse"))
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var d = a.fn.collapse;
    a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = d, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(c) {
        var d, e = a(this),
            f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
            g = a(f),
            h = g.data("bs.collapse"),
            i = h ? "toggle" : e.data(),
            j = e.attr("data-parent"),
            k = j && a(j);
        h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = c(a(this)),
                e = {
                    relatedTarget: this
                };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var c = this,
            d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            e ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                c.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, f).emulateTransitionEnd(150) : f()
        } else b && b()
    }, c.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0);
        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), b.call(f, g, this), f.one("hide", function() {
            d.is(":visible") && d.trigger("focus")
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this,
                d = this.tip();
            this.setContent(), this.options.animation && d.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
                f = /\s?auto?\s?/i,
                g = f.test(e);
            g && (e = e.replace(f, "") || "top"), d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition(),
                i = d[0].offsetWidth,
                j = d[0].offsetHeight;
            if (g) {
                var k = e,
                    l = this.$element.parent(),
                    m = this.getPosition(l);
                e = "bottom" == e && h.top + h.height + j - m.scroll > m.height ? "top" : "top" == e && h.top - m.scroll - j < 0 ? "bottom" : "right" == e && h.right + i > m.width ? "left" : "left" == e && h.left - i < m.left ? "right" : e, d.removeClass(k).addClass(e)
            }
            var n = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(n, e), this.hoverState = null;
            var o = function() {
                c.$element.trigger("shown.bs." + c.type)
            };
            a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, o).emulateTransitionEnd(150) : o()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j,
            m = k.left ? "left" : "top",
            n = k.left ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(l, d[0][n], m)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
            d = this.tip(),
            e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName;
        return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
            width: d ? a(window).width() : b.outerWidth(),
            height: d ? a(window).height() : b.outerHeight()
        }, d ? {
            top: 0,
            left: 0
        } : b.offset())
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scrollspy", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.DEFAULTS = {
        offset: 10
    }, b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]);
        var c = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
                e = d.data("target") || d.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            c.offsets.push(this[0]), c.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight),
            d = c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
                f = a.Event("show.bs.tab", {
                    relatedTarget: e
                });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"),
            g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(c) {
        c.preventDefault(), b.call(a(this), "show")
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$window.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = a(document).height(),
                d = this.$window.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.top,
                h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                null != this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""),
                    k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: e.top
                }))
            }
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
(function() {
    var root = typeof exports == "undefined" ? window : exports;
    var config = {
        check_mime_type: true,
        force_original_dimensions: true
    };
    root.Retina = Retina;

    function Retina() {}
    Retina.configure = function(options) {
        if (options == null) options = {};
        for (var prop in options) config[prop] = options[prop]
    };
    Retina.init = function(context) {
        if (context == null) context = root;
        var existing_onload = context.onload || new Function;
        context.onload = function() {
            var images = document.getElementsByTagName("img"),
                retinaImages = [],
                i, image;
            for (i = 0; i < images.length; i++) {
                image = images[i];
                retinaImages.push(new RetinaImage(image))
            }
            existing_onload()
        }
    };
    Retina.isRetina = function() {
        var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";
        if (root.devicePixelRatio > 1) return true;
        if (root.matchMedia && root.matchMedia(mediaQuery).matches) return true;
        return false
    };
    root.RetinaImagePath = RetinaImagePath;

    function RetinaImagePath(path, at_2x_path) {
        this.path = path;
        if (typeof at_2x_path !== "undefined" && at_2x_path !== null) {
            this.at_2x_path = at_2x_path;
            this.perform_check = false
        } else {
            this.at_2x_path = path.replace(/\.\w+$/, function(match) {
                return "@2x" + match
            });
            this.perform_check = true
        }
    }
    RetinaImagePath.confirmed_paths = [];
    RetinaImagePath.prototype.is_external = function() {
        return !!(this.path.match(/^https?\:/i) && !this.path.match("//" + document.domain))
    };
    RetinaImagePath.prototype.check_2x_variant = function(callback) {
        var http, that = this;
        if (!this.perform_check && typeof this.at_2x_path !== "undefined" && this.at_2x_path !== null) {
            return callback(true)
        } else if (this.at_2x_path in RetinaImagePath.confirmed_paths) {
            return callback(true)
        } else if (this.is_external()) {
            return callback(false)
        } else {
            http = new XMLHttpRequest;
            http.open("HEAD", this.at_2x_path);
            http.onreadystatechange = function() {
                if (http.readyState != 4) {
                    return callback(false)
                }
                if (http.status >= 200 && http.status <= 399) {
                    if (config.check_mime_type) {
                        var type = http.getResponseHeader("Content-Type");
                        if (type == null || !type.match(/^image/i)) {
                            return callback(false)
                        }
                    }
                    RetinaImagePath.confirmed_paths.push(that.at_2x_path);
                    return callback(true)
                } else {
                    return callback(false)
                }
            };
            http.send()
        }
    };

    function RetinaImage(el) {
        this.el = el;
        this.path = new RetinaImagePath(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var that = this;
        this.path.check_2x_variant(function(hasVariant) {
            if (hasVariant) that.swap()
        })
    }
    root.RetinaImage = RetinaImage;
    RetinaImage.prototype.swap = function(path) {
        if (typeof path == "undefined") path = this.path.at_2x_path;
        var that = this;

        function load() {
            if (!that.el.complete) {
                setTimeout(load, 5)
            } else {
                if (config.force_original_dimensions) {
                    that.el.setAttribute("width", that.el.offsetWidth);
                    that.el.setAttribute("height", that.el.offsetHeight)
                }
                that.el.setAttribute("src", path)
            }
        }
        load()
    };
    if (Retina.isRetina()) {
        Retina.init(root)
    }
})();

function registerAjaxForm(form, success_callback, error_callback) {
    form.submit(function() {
        if (form.parsley().isValid()) {
            $.ajax({
                data: form.serialize(),
                error: error_callback.bind(form),
                success: success_callback,
                type: form.attr('method'),
                url: form.attr('action'),
            });
        }
        return false;
    });
}

function handleWaitlistSuccess(data) {
    var content = $('#content');
    replaceWithNewHTML(content, data);
}

function replaceWithNewHTML(container, replacement) {
    container.html(replacement);
    window.scrollTo(0, 0);
    container.find('img').each(function() {
        new RetinaImage(this);
    });
}

function handleWaitlistError() {
    var email_input = $(this).find('.waitlist-email').parsley();
    window.ParsleyUI.removeError(email_input, 'server-error');
    window.ParsleyUI.addError(email_input, 'server-error', '!');
}! function(a) {
    var b = {
            attr: function(a, b, c) {
                var d, e = {},
                    f = new RegExp("^" + b, "i");
                if ("undefined" == typeof a || "undefined" == typeof a[0]) return {};
                for (var g in a[0].attributes)
                    if (d = a[0].attributes[g], "undefined" != typeof d && null !== d && d.specified && f.test(d.name)) {
                        if ("undefined" != typeof c && new RegExp(c + "$", "i").test(d.name)) return !0;
                        e[this.camelize(d.name.replace(b, ""))] = this.deserializeValue(d.value)
                    }
                return "undefined" == typeof c ? e : !1
            },
            setAttr: function(a, b, c, d) {
                a[0].setAttribute(this.dasherize(b + c), String(d))
            },
            get: function(a, b) {
                for (var c = 0, d = (b || "").split("."); this.isObject(a) || this.isArray(a);)
                    if (a = a[d[c++]], c === d.length) return a;
                return void 0
            },
            hash: function(a) {
                return String(Math.random()).substring(2, a ? a + 2 : 9)
            },
            isArray: function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            isObject: function(a) {
                return a === Object(a)
            },
            deserializeValue: function(b) {
                var c;
                try {
                    return b ? "true" == b || ("false" == b ? !1 : "null" == b ? null : isNaN(c = Number(b)) ? /^[\[\{]/.test(b) ? a.parseJSON(b) : b : c) : b
                } catch (d) {
                    return b
                }
            },
            camelize: function(a) {
                return a.replace(/-+(.)?/g, function(a, b) {
                    return b ? b.toUpperCase() : ""
                })
            },
            dasherize: function(a) {
                return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }
        },
        c = {
            namespace: "data-parsley-",
            inputs: "input, textarea, select",
            excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
            priorityEnabled: !0,
            uiEnabled: !0,
            validationThreshold: 3,
            focus: "first",
            trigger: !1,
            errorClass: "parsley-error",
            successClass: "parsley-success",
            classHandler: function() {},
            errorsContainer: function() {},
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',
            errorTemplate: "<li></li>"
        },
        d = function() {};
    d.prototype = {
            asyncSupport: !1,
            actualizeOptions: function() {
                return this.options = this.OptionsFactory.get(this), this
            },
            validateThroughValidator: function(a, b, c) {
                return window.ParsleyValidator.validate.apply(window.ParsleyValidator, [a, b, c])
            },
            subscribe: function(b, c) {
                return a.listenTo(this, b.toLowerCase(), c), this
            },
            unsubscribe: function(b) {
                return a.unsubscribeTo(this, b.toLowerCase()), this
            },
            reset: function() {
                if ("ParsleyForm" !== this.__class__) return a.emit("parsley:field:reset", this);
                for (var b = 0; b < this.fields.length; b++) a.emit("parsley:field:reset", this.fields[b]);
                a.emit("parsley:form:reset", this)
            },
            destroy: function() {
                if ("ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void a.emit("parsley:field:destroy", this);
                for (var b = 0; b < this.fields.length; b++) this.fields[b].destroy();
                this.$element.removeData("Parsley"), a.emit("parsley:form:destroy", this)
            }
        },
        function(a) {
            var b = function(a) {
                return this.__class__ = "Validator", this.__version__ = "0.5.8", this.options = a || {}, this.bindingKey = this.options.bindingKey || "_validatorjsConstraint", this
            };
            b.prototype = {
                constructor: b,
                validate: function(a, b, c) {
                    if ("string" != typeof a && "object" != typeof a) throw new Error("You must validate an object or a string");
                    return "string" == typeof a || g(a) ? this._validateString(a, b, c) : this.isBinded(a) ? this._validateBindedObject(a, b) : this._validateObject(a, b, c)
                },
                bind: function(a, b) {
                    if ("object" != typeof a) throw new Error("Must bind a Constraint to an object");
                    return a[this.bindingKey] = new c(b), this
                },
                unbind: function(a) {
                    return "undefined" == typeof a._validatorjsConstraint ? this : (delete a[this.bindingKey], this)
                },
                isBinded: function(a) {
                    return "undefined" != typeof a[this.bindingKey]
                },
                getBinded: function(a) {
                    return this.isBinded(a) ? a[this.bindingKey] : null
                },
                _validateString: function(a, b, c) {
                    var f, h = [];
                    g(b) || (b = [b]);
                    for (var i = 0; i < b.length; i++) {
                        if (!(b[i] instanceof e)) throw new Error("You must give an Assert or an Asserts array to validate a string");
                        f = b[i].check(a, c), f instanceof d && h.push(f)
                    }
                    return h.length ? h : !0
                },
                _validateObject: function(a, b, d) {
                    if ("object" != typeof b) throw new Error("You must give a constraint to validate an object");
                    return b instanceof c ? b.check(a, d) : new c(b).check(a, d)
                },
                _validateBindedObject: function(a, b) {
                    return a[this.bindingKey].check(a, b)
                }
            }, b.errorCode = {
                must_be_a_string: "must_be_a_string",
                must_be_an_array: "must_be_an_array",
                must_be_a_number: "must_be_a_number",
                must_be_a_string_or_array: "must_be_a_string_or_array"
            };
            var c = function(a, b) {
                if (this.__class__ = "Constraint", this.options = b || {}, this.nodes = {}, a) try {
                    this._bootstrap(a)
                } catch (c) {
                    throw new Error("Should give a valid mapping object to Constraint", c, a)
                }
                return this
            };
            c.prototype = {
                constructor: c,
                check: function(a, b) {
                    var c, d = {};
                    for (var h in this.options.strict ? this.nodes : a)
                        if (this.options.strict ? this.has(h, a) : this.has(h)) c = this._check(h, a[h], b), (g(c) && c.length > 0 || !g(c) && !f(c)) && (d[h] = c);
                        else if (this.options.strict) try {
                        (new e).HaveProperty(h).validate(a)
                    } catch (i) {
                        d[h] = i
                    }
                    return f(d) ? !0 : d
                },
                add: function(a, b) {
                    if (b instanceof e || g(b) && b[0] instanceof e) return this.nodes[a] = b, this;
                    if ("object" == typeof b && !g(b)) return this.nodes[a] = b instanceof c ? b : new c(b), this;
                    throw new Error("Should give an Assert, an Asserts array, a Constraint", b)
                },
                has: function(a, b) {
                    return b = "undefined" != typeof b ? b : this.nodes, "undefined" != typeof b[a]
                },
                get: function(a, b) {
                    return this.has(a) ? this.nodes[a] : b || null
                },
                remove: function(a) {
                    var b = [];
                    for (var c in this.nodes) c !== a && (b[c] = this.nodes[c]);
                    return this.nodes = b, this
                },
                _bootstrap: function(a) {
                    if (a instanceof c) return this.nodes = a.nodes;
                    for (var b in a) this.add(b, a[b])
                },
                _check: function(a, b, d) {
                    if (this.nodes[a] instanceof e) return this._checkAsserts(b, [this.nodes[a]], d);
                    if (g(this.nodes[a])) return this._checkAsserts(b, this.nodes[a], d);
                    if (this.nodes[a] instanceof c) return this.nodes[a].check(b, d);
                    throw new Error("Invalid node", this.nodes[a])
                },
                _checkAsserts: function(a, b, c) {
                    for (var d, e = [], f = 0; f < b.length; f++) d = b[f].check(a, c), "undefined" != typeof d && !0 !== d && e.push(d);
                    return e
                }
            };
            var d = function(a, b, c) {
                if (this.__class__ = "Violation", !(a instanceof e)) throw new Error("Should give an assertion implementing the Assert interface");
                this.assert = a, this.value = b, "undefined" != typeof c && (this.violation = c)
            };
            d.prototype = {
                show: function() {
                    var a = {
                        assert: this.assert.__class__,
                        value: this.value
                    };
                    return this.violation && (a.violation = this.violation), a
                },
                __toString: function() {
                    return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
                },
                getViolation: function() {
                    var a, b;
                    for (a in this.violation) b = this.violation[a];
                    return {
                        constraint: a,
                        expected: b
                    }
                }
            };
            var e = function(a) {
                return this.__class__ = "Assert", this.__parentClass__ = this.__class__, this.groups = [], "undefined" != typeof a && this.addGroup(a), this
            };
            e.prototype = {
                construct: e,
                check: function(a, b) {
                    if (!(b && !this.hasGroup(b) || !b && this.hasGroups())) try {
                        return this.validate(a, b)
                    } catch (c) {
                        return c
                    }
                },
                hasGroup: function(a) {
                    return g(a) ? this.hasOneOf(a) : "Any" === a ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(a) : "Default" === a
                },
                hasOneOf: function(a) {
                    for (var b = 0; b < a.length; b++)
                        if (this.hasGroup(a[b])) return !0;
                    return !1
                },
                hasGroups: function() {
                    return this.groups.length > 0
                },
                addGroup: function(a) {
                    return g(a) ? this.addGroups(a) : (this.hasGroup(a) || this.groups.push(a), this)
                },
                removeGroup: function(a) {
                    for (var b = [], c = 0; c < this.groups.length; c++) a !== this.groups[c] && b.push(this.groups[c]);
                    return this.groups = b, this
                },
                addGroups: function(a) {
                    for (var b = 0; b < a.length; b++) this.addGroup(a[b]);
                    return this
                },
                HaveProperty: function(a) {
                    return this.__class__ = "HaveProperty", this.node = a, this.validate = function(a) {
                        if ("undefined" == typeof a[this.node]) throw new d(this, a, {
                            value: this.node
                        });
                        return !0
                    }, this
                },
                Blank: function() {
                    return this.__class__ = "Blank", this.validate = function(a) {
                        if ("string" != typeof a) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string
                        });
                        if ("" !== a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
                        return !0
                    }, this
                },
                Callback: function(a) {
                    if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof a) throw new Error("Callback must be instanciated with a function");
                    return this.fn = a, this.validate = function(a) {
                        var b = this.fn.apply(this, [a].concat(this.arguments));
                        if (!0 !== b) throw new d(this, a, {
                            result: b
                        });
                        return !0
                    }, this
                },
                Choice: function(a) {
                    if (this.__class__ = "Choice", !g(a) && "function" != typeof a) throw new Error("Choice must be instanciated with an array or a function");
                    return this.list = a, this.validate = function(a) {
                        for (var b = "function" == typeof this.list ? this.list() : this.list, c = 0; c < b.length; c++)
                            if (a === b[c]) return !0;
                        throw new d(this, a, {
                            choices: b
                        })
                    }, this
                },
                Collection: function(a) {
                    return this.__class__ = "Collection", this.constraint = "undefined" != typeof a ? new c(a) : !1, this.validate = function(a, c) {
                        var e, h = new b,
                            i = 0,
                            j = {},
                            k = this.groups.length ? this.groups : c;
                        if (!g(a)) throw new d(this, array, {
                            value: b.errorCode.must_be_an_array
                        });
                        for (var l = 0; l < a.length; l++) e = this.constraint ? h.validate(a[l], this.constraint, k) : h.validate(a[l], k), f(e) || (j[i] = e), i++;
                        return f(j) ? !0 : j
                    }, this
                },
                Count: function(a) {
                    return this.__class__ = "Count", this.count = a, this.validate = function(a) {
                        if (!g(a)) throw new d(this, a, {
                            value: b.errorCode.must_be_an_array
                        });
                        var c = "function" == typeof this.count ? this.count(a) : this.count;
                        if (isNaN(Number(c))) throw new Error("Count must be a valid interger", c);
                        if (c !== a.length) throw new d(this, a, {
                            count: c
                        });
                        return !0
                    }, this
                },
                Email: function() {
                    return this.__class__ = "Email", this.validate = function(a) {
                        var c = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
                        if ("string" != typeof a) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string
                        });
                        if (!c.test(a)) throw new d(this, a);
                        return !0
                    }, this
                },
                Eql: function(a) {
                    if (this.__class__ = "Eql", "undefined" == typeof a) throw new Error("Equal must be instanciated with an Array or an Object");
                    return this.eql = a, this.validate = function(a) {
                        var b = "function" == typeof this.eql ? this.eql(a) : this.eql;
                        if (!h.eql(b, a)) throw new d(this, a, {
                            eql: b
                        });
                        return !0
                    }, this
                },
                EqualTo: function(a) {
                    if (this.__class__ = "EqualTo", "undefined" == typeof a) throw new Error("EqualTo must be instanciated with a value or a function");
                    return this.reference = a, this.validate = function(a) {
                        var b = "function" == typeof this.reference ? this.reference(a) : this.reference;
                        if (b !== a) throw new d(this, a, {
                            value: b
                        });
                        return !0
                    }, this
                },
                GreaterThan: function(a) {
                    if (this.__class__ = "GreaterThan", "undefined" == typeof a) throw new Error("Should give a threshold value");
                    return this.threshold = a, this.validate = function(a) {
                        if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                            value: b.errorCode.must_be_a_number
                        });
                        if (this.threshold >= a) throw new d(this, a, {
                            threshold: this.threshold
                        });
                        return !0
                    }, this
                },
                GreaterThanOrEqual: function(a) {
                    if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof a) throw new Error("Should give a threshold value");
                    return this.threshold = a, this.validate = function(a) {
                        if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                            value: b.errorCode.must_be_a_number
                        });
                        if (this.threshold > a) throw new d(this, a, {
                            threshold: this.threshold
                        });
                        return !0
                    }, this
                },
                InstanceOf: function(a) {
                    if (this.__class__ = "InstanceOf", "undefined" == typeof a) throw new Error("InstanceOf must be instanciated with a value");
                    return this.classRef = a, this.validate = function(a) {
                        if (!0 != a instanceof this.classRef) throw new d(this, a, {
                            classRef: this.classRef
                        });
                        return !0
                    }, this
                },
                IPv4: function() {
                    return this.__class__ = "IPv4", this.validate = function(a) {
                        var c = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
                        if ("string" != typeof a) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string
                        });
                        if (!c.test(a)) throw new d(this, a);
                        return !0
                    }, this
                },
                Length: function(a) {
                    if (this.__class__ = "Length", !a.min && !a.max) throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
                    return this.min = a.min, this.max = a.max, this.validate = function(a) {
                        if ("string" != typeof a && !g(a)) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string_or_array
                        });
                        if ("undefined" != typeof this.min && this.min === this.max && a.length !== this.min) throw new d(this, a, {
                            min: this.min,
                            max: this.max
                        });
                        if ("undefined" != typeof this.max && a.length > this.max) throw new d(this, a, {
                            max: this.max
                        });
                        if ("undefined" != typeof this.min && a.length < this.min) throw new d(this, a, {
                            min: this.min
                        });
                        return !0
                    }, this
                },
                LessThan: function(a) {
                    if (this.__class__ = "LessThan", "undefined" == typeof a) throw new Error("Should give a threshold value");
                    return this.threshold = a, this.validate = function(a) {
                        if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                            value: b.errorCode.must_be_a_number
                        });
                        if (this.threshold <= a) throw new d(this, a, {
                            threshold: this.threshold
                        });
                        return !0
                    }, this
                },
                LessThanOrEqual: function(a) {
                    if (this.__class__ = "LessThanOrEqual", "undefined" == typeof a) throw new Error("Should give a threshold value");
                    return this.threshold = a, this.validate = function(a) {
                        if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                            value: b.errorCode.must_be_a_number
                        });
                        if (this.threshold < a) throw new d(this, a, {
                            threshold: this.threshold
                        });
                        return !0
                    }, this
                },
                Mac: function() {
                    return this.__class__ = "Mac", this.validate = function(a) {
                        var c = /^(?:[0-9A-F]{2}:){5}[0-9A-F]{2}$/i;
                        if ("string" != typeof a) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string
                        });
                        if (!c.test(a)) throw new d(this, a);
                        return !0
                    }, this
                },
                NotNull: function() {
                    return this.__class__ = "NotNull", this.validate = function(a) {
                        if (null === a || "undefined" == typeof a) throw new d(this, a);
                        return !0
                    }, this
                },
                NotBlank: function() {
                    return this.__class__ = "NotBlank", this.validate = function(a) {
                        if ("string" != typeof a) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string
                        });
                        if ("" === a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
                        return !0
                    }, this
                },
                Null: function() {
                    return this.__class__ = "Null", this.validate = function(a) {
                        if (null !== a) throw new d(this, a);
                        return !0
                    }, this
                },
                Range: function(a, b) {
                    if (this.__class__ = "Range", "undefined" == typeof a || "undefined" == typeof b) throw new Error("Range assert expects min and max values");
                    return this.min = a, this.max = b, this.validate = function(a) {
                        try {
                            return "string" == typeof a && isNaN(Number(a)) || g(a) ? (new e).Length({
                                min: this.min,
                                max: this.max
                            }).validate(a) : (new e).GreaterThanOrEqual(this.min).validate(a) && (new e).LessThanOrEqual(this.max).validate(a), !0
                        } catch (b) {
                            throw new d(this, a, b.violation)
                        }
                        return !0
                    }, this
                },
                Regexp: function(a, c) {
                    if (this.__class__ = "Regexp", "undefined" == typeof a) throw new Error("You must give a regexp");
                    return this.regexp = a, this.flag = c || "", this.validate = function(a) {
                        if ("string" != typeof a) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string
                        });
                        if (!new RegExp(this.regexp, this.flag).test(a)) throw new d(this, a, {
                            regexp: this.regexp,
                            flag: this.flag
                        });
                        return !0
                    }, this
                },
                Required: function() {
                    return this.__class__ = "Required", this.validate = function(a) {
                        if ("undefined" == typeof a) throw new d(this, a);
                        try {
                            "string" == typeof a ? (new e).NotNull().validate(a) && (new e).NotBlank().validate(a) : !0 === g(a) && (new e).Length({
                                min: 1
                            }).validate(a)
                        } catch (b) {
                            throw new d(this, a)
                        }
                        return !0
                    }, this
                },
                Unique: function(a) {
                    return this.__class__ = "Unique", "object" == typeof a && (this.key = a.key), this.validate = function(a) {
                        var c, e = [];
                        if (!g(a)) throw new d(this, a, {
                            value: b.errorCode.must_be_an_array
                        });
                        for (var f = 0; f < a.length; f++)
                            if (c = "object" == typeof a[f] ? a[f][this.key] : a[f], "undefined" != typeof c) {
                                if (-1 !== e.indexOf(c)) throw new d(this, a, {
                                    value: c
                                });
                                e.push(c)
                            }
                        return !0
                    }, this
                }
            }, a.Assert = e, a.Validator = b, a.Violation = d, a.Constraint = c, Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
                if (null === this) throw new TypeError;
                var b = Object(this),
                    c = b.length >>> 0;
                if (0 === c) return -1;
                var d = 0;
                if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && 1 / 0 != d && d != -1 / 0 && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
                for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
                    if (e in b && b[e] === a) return e;
                return -1
            });
            var f = function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                g = function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                h = {
                    eql: function(a, b) {
                        if (a === b) return !0;
                        if ("undefined" != typeof Buffer && Buffer.isBuffer(a) && Buffer.isBuffer(b)) {
                            if (a.length !== b.length) return !1;
                            for (var c = 0; c < a.length; c++)
                                if (a[c] !== b[c]) return !1;
                            return !0
                        }
                        return a instanceof Date && b instanceof Date ? a.getTime() === b.getTime() : "object" != typeof a && "object" != typeof b ? a == b : this.objEquiv(a, b)
                    },
                    isUndefinedOrNull: function(a) {
                        return null === a || "undefined" == typeof a
                    },
                    isArguments: function(a) {
                        return "[object Arguments]" == Object.prototype.toString.call(a)
                    },
                    keys: function(a) {
                        if (Object.keys) return Object.keys(a);
                        var b = [];
                        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
                        return b
                    },
                    objEquiv: function(a, b) {
                        if (this.isUndefinedOrNull(a) || this.isUndefinedOrNull(b)) return !1;
                        if (a.prototype !== b.prototype) return !1;
                        if (this.isArguments(a)) return this.isArguments(b) ? eql(pSlice.call(a), pSlice.call(b)) : !1;
                        try {
                            var c, d, e = this.keys(a),
                                f = this.keys(b);
                            if (e.length !== f.length) return !1;
                            for (e.sort(), f.sort(), d = e.length - 1; d >= 0; d--)
                                if (e[d] != f[d]) return !1;
                            for (d = e.length - 1; d >= 0; d--)
                                if (c = e[d], !this.eql(a[c], b[c])) return !1;
                            return !0
                        } catch (g) {
                            return !1
                        }
                    }
                };
            "function" == typeof define && define.amd && define("validator", [], function() {
                return a
            })
        }("undefined" == typeof exports ? this["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = {} : exports);
    var e = function(a, b) {
        this.__class__ = "ParsleyValidator", this.Validator = Validator, this.locale = "en", this.init(a || {}, b || {})
    };
    e.prototype = {
        init: function(b, c) {
            this.catalog = c;
            for (var d in b) this.addValidator(d, b[d].fn, b[d].priority);
            a.emit("parsley:validator:init")
        },
        setLocale: function(a) {
            if ("undefined" == typeof this.catalog[a]) throw new Error(a + " is not available in the catalog");
            return this.locale = a, this
        },
        addCatalog: function(a, b, c) {
            return "object" == typeof b && (this.catalog[a] = b), !0 === c ? this.setLocale(a) : this
        },
        addMessage: function(a, b, c) {
            return void 0 === typeof this.catalog[a] && (this.catalog[a] = {}), this.catalog[a][b.toLowerCase()] = c, this
        },
        validate: function() {
            return (new this.Validator.Validator).validate.apply(new Validator.Validator, arguments)
        },
        addValidator: function(b, c, d) {
            return this.validators[b.toLowerCase()] = function(b) {
                return a.extend((new Validator.Assert).Callback(c, b), {
                    priority: d
                })
            }, this
        },
        updateValidator: function(a, b, c) {
            return addValidator(a, b, c)
        },
        removeValidator: function(a) {
            return delete this.validators[a], this
        },
        getErrorMessage: function(a) {
            var b;
            return b = "type" === a.name ? this.catalog[this.locale][a.name][a.requirements] : this.formatMessage(this.catalog[this.locale][a.name], a.requirements), "" !== b ? b : this.catalog[this.locale].defaultMessage
        },
        formatMessage: function(a, b) {
            if ("object" == typeof b) {
                for (var c in b) a = this.formatMessage(a, b[c]);
                return a
            }
            return "string" == typeof a ? a.replace(new RegExp("%s", "i"), b) : ""
        },
        validators: {
            notblank: function() {
                return a.extend((new Validator.Assert).NotBlank(), {
                    priority: 2
                })
            },
            required: function() {
                return a.extend((new Validator.Assert).Required(), {
                    priority: 512
                })
            },
            type: function(b) {
                var c;
                switch (b) {
                    case "email":
                        c = (new Validator.Assert).Email();
                        break;
                    case "number":
                        c = (new Validator.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
                        break;
                    case "integer":
                        c = (new Validator.Assert).Regexp("^-?\\d+$");
                        break;
                    case "digits":
                        c = (new Validator.Assert).Regexp("^\\d+$");
                        break;
                    case "alphanum":
                        c = (new Validator.Assert).Regexp("^\\w+$", "i");
                        break;
                    case "url":
                        c = (new Validator.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
                        break;
                    default:
                        throw new Error("validator type `" + b + "` is not supported")
                }
                return a.extend(c, {
                    priority: 256
                })
            },
            pattern: function(b) {
                var c = "";
                return /^\/.*\/(?:[gimy]*)$/.test(b) && (c = b.replace(/.*\/([gimy]*)$/, "$1"), b = b.replace(new RegExp("^/(.*?)/" + c + "$"), "$1")), a.extend((new Validator.Assert).Regexp(b, c), {
                    priority: 64
                })
            },
            minlength: function(b) {
                return a.extend((new Validator.Assert).Length({
                    min: b
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            maxlength: function(b) {
                return a.extend((new Validator.Assert).Length({
                    max: b
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            length: function(b) {
                return a.extend((new Validator.Assert).Length({
                    min: b[0],
                    max: b[1]
                }), {
                    priority: 32
                })
            },
            mincheck: function(a) {
                return this.minlength(a)
            },
            maxcheck: function(a) {
                return this.maxlength(a)
            },
            check: function(a) {
                return this.length(a)
            },
            min: function(b) {
                return a.extend((new Validator.Assert).GreaterThanOrEqual(b), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            max: function(b) {
                return a.extend((new Validator.Assert).LessThanOrEqual(b), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            range: function(b) {
                return a.extend((new Validator.Assert).Range(b[0], b[1]), {
                    priority: 32,
                    requirementsTransformer: function() {
                        for (var a = 0; a < b.length; a++) b[a] = "string" != typeof b[a] || isNaN(b[a]) ? b[a] : parseInt(b[a], 10);
                        return b
                    }
                })
            },
            equalto: function(b) {
                return a.extend((new Validator.Assert).EqualTo(b), {
                    priority: 256,
                    requirementsTransformer: function() {
                        return a(b).length ? a(b).val() : b
                    }
                })
            }
        }
    };
    var f = function() {
        this.__class__ = "ParsleyUI"
    };
    f.prototype = {
        listen: function() {
            return a.listen("parsley:form:init", this, this.setupForm), a.listen("parsley:field:init", this, this.setupField), a.listen("parsley:field:validated", this, this.reflow), a.listen("parsley:form:validated", this, this.focus), a.listen("parsley:field:reset", this, this.reset), a.listen("parsley:form:destroy", this, this.destroy), a.listen("parsley:field:destroy", this, this.destroy), this
        },
        reflow: function(a) {
            if ("undefined" != typeof a._ui && !1 !== a._ui.active) {
                var b = this._diff(a.validationResult, a._ui.lastValidationResult);
                a._ui.lastValidationResult = a.validationResult, a._ui.validatedOnce = !0, this.manageStatusClass(a), this.manageErrorsMessages(a, b), this.actualizeTriggers(a), (b.kept.length || b.added.length) && "undefined" == typeof a._ui.failedOnce && this.manageFailingFieldTrigger(a)
            }
        },
        getErrorsMessages: function(a) {
            if (!0 === a.validationResult) return [];
            for (var b = [], c = 0; c < a.validationResult.length; c++) b.push(this._getErrorMessage(a, a.validationResult[c].assert));
            return b
        },
        manageStatusClass: function(a) {
            !0 === a.validationResult ? this._successClass(a) : a.validationResult.length > 0 ? this._errorClass(a) : this._resetClass(a)
        },
        manageErrorsMessages: function(b, c) {
            if ("undefined" == typeof b.options.errorsMessagesDisabled) {
                if ("undefined" != typeof b.options.errorMessage) return c.added.length || c.kept.length ? (0 === b._ui.$errorsWrapper.find(".parsley-custom-error-message").length && b._ui.$errorsWrapper.append(a(b.options.errorTemplate).addClass("parsley-custom-error-message")), b._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(b.options.errorMessage)) : b._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var d = 0; d < c.removed.length; d++) this.removeError(b, c.removed[d].assert.name, !0);
                for (d = 0; d < c.added.length; d++) this.addError(b, c.added[d].assert.name, void 0, c.added[d].assert, !0);
                for (d = 0; d < c.kept.length; d++) this.updateError(b, c.kept[d].assert.name, void 0, c.kept[d].assert, !0)
            }
        },
        addError: function(b, c, d, e, f) {
            b._ui.$errorsWrapper.addClass("filled").append(a(b.options.errorTemplate).addClass("parsley-" + c).html(d || this._getErrorMessage(b, e))), !0 !== f && this._errorClass(b)
        },
        updateError: function(a, b, c, d, e) {
            a._ui.$errorsWrapper.addClass("filled").find(".parsley-" + b).html(c || this._getErrorMessage(a, d)), !0 !== e && this._errorClass(a)
        },
        removeError: function(a, b, c) {
            a._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + b).remove(), !0 !== c && this.manageStatusClass(a)
        },
        focus: function(a) {
            if (!0 === a.validationResult || "none" === a.options.focus) return a._focusedField = null;
            a._focusedField = null;
            for (var b = 0; b < a.fields.length; b++)
                if (!0 !== a.fields[b].validationResult && a.fields[b].validationResult.length > 0 && "undefined" == typeof a.fields[b].options.noFocus) {
                    if ("first" === a.options.focus) return a._focusedField = a.fields[b].$element, a._focusedField.focus();
                    a._focusedField = a.fields[b].$element
                }
            return null === a._focusedField ? null : a._focusedField.focus()
        },
        _getErrorMessage: function(a, b) {
            var c = b.name + "Message";
            return "undefined" != typeof a.options[c] ? window.ParsleyValidator.formatMessage(a.options[c], b.requirements) : window.ParsleyValidator.getErrorMessage(b)
        },
        _diff: function(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length; f++) {
                for (var g = !1, h = 0; h < b.length; h++)
                    if (a[f].assert.name === b[h].assert.name) {
                        g = !0;
                        break
                    }
                g ? e.push(a[f]) : d.push(a[f])
            }
            return {
                kept: e,
                added: d,
                removed: c ? [] : this._diff(b, a, !0).added
            }
        },
        setupForm: function(b) {
            b.$element.on("submit.Parsley", !1, a.proxy(b.onSubmitValidate, b)), !1 !== b.options.uiEnabled && b.$element.attr("novalidate", "")
        },
        setupField: function(b) {
            var c = {
                active: !1
            };
            !1 !== b.options.uiEnabled && (c.active = !0, b.$element.attr(b.options.namespace + "id", b.__id__), c.$errorClassHandler = this._manageClassHandler(b), c.errorsWrapperId = "parsley-id-" + ("undefined" != typeof b.options.multiple ? "multiple-" + b.options.multiple : b.__id__), c.$errorsWrapper = a(b.options.errorsWrapper).attr("id", c.errorsWrapperId), c.lastValidationResult = [], c.validatedOnce = !1, c.validationInformationVisible = !1, b._ui = c, this._insertErrorWrapper(b), this.actualizeTriggers(b))
        },
        _manageClassHandler: function(b) {
            if ("string" == typeof b.options.classHandler && a(b.options.classHandler).length) return a(b.options.classHandler);
            var c = b.options.classHandler(b);
            return "undefined" != typeof c && c.length ? c : "undefined" == typeof b.options.multiple || b.$element.is("select") ? b.$element : b.$element.parent()
        },
        _insertErrorWrapper: function(b) {
            var c;
            if ("string" == typeof b.options.errorsContainer) {
                if (a(b.options.errorsContainer + "").length) return a(b.options.errorsContainer).append(b._ui.$errorsWrapper);
                window.console && window.console.warn && window.console.warn("The errors container `" + b.options.errorsContainer + "` does not exist in DOM")
            }
            return "function" == typeof b.options.errorsContainer && (c = b.options.errorsContainer(b)), "undefined" != typeof c && c.length ? c.append(b._ui.$errorsWrapper) : "undefined" == typeof b.options.multiple ? b.$element.after(b._ui.$errorsWrapper) : b.$element.parent().after(b._ui.$errorsWrapper)
        },
        actualizeTriggers: function(b) {
            var c = this;
            if (b.options.multiple ? a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
                    a(this).off(".Parsley")
                }) : b.$element.off(".Parsley"), !1 !== b.options.trigger) {
                var d = b.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
                "" !== d && (b.options.multiple ? a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
                    a(this).on(d.split(" ").join(".Parsley ") + ".Parsley", !1, a.proxy("function" == typeof b.eventValidate ? b.eventValidate : c.eventValidate, b))
                }) : b.$element.on(d.split(" ").join(".Parsley ") + ".Parsley", !1, a.proxy("function" == typeof b.eventValidate ? b.eventValidate : this.eventValidate, b)))
            }
        },
        eventValidate: function(a) {
            new RegExp("key").test(a.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
        },
        manageFailingFieldTrigger: function(b) {
            return b._ui.failedOnce = !0, b.options.multiple && a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
                return new RegExp("change", "i").test(a(this).parsley().options.trigger || "") ? void 0 : a(this).on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
            }), b.$element.is("select") && !new RegExp("change", "i").test(b.options.trigger || "") ? b.$element.on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b)) : new RegExp("keyup", "i").test(b.options.trigger || "") ? void 0 : b.$element.on("keyup.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
        },
        reset: function(b) {
            b.$element.off(".Parsley"), b.$element.off(".ParsleyFailedOnce"), "undefined" != typeof b._ui && "ParsleyForm" !== b.__class__ && (b._ui.$errorsWrapper.children().each(function() {
                a(this).remove()
            }), this._resetClass(b), b._ui.validatedOnce = !1, b._ui.lastValidationResult = [], b._ui.validationInformationVisible = !1)
        },
        destroy: function(a) {
            this.reset(a), "ParsleyForm" !== a.__class__ && (a._ui.$errorsWrapper.remove(), delete a._ui)
        },
        _successClass: function(a) {
            a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)
        },
        _errorClass: function(a) {
            a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)
        },
        _resetClass: function(a) {
            a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)
        }
    };
    var g = function(c, d, e, f) {
        this.__class__ = "OptionsFactory", this.__id__ = b.hash(4), this.formOptions = null, this.fieldOptions = null, this.staticOptions = a.extend(!0, {}, c, d, e, {
            namespace: f
        })
    };
    g.prototype = {
        get: function(a) {
            if ("undefined" == typeof a.__class__) throw new Error("Parsley Instance expected");
            switch (a.__class__) {
                case "Parsley":
                    return this.staticOptions;
                case "ParsleyForm":
                    return this.getFormOptions(a);
                case "ParsleyField":
                case "ParsleyFieldMultiple":
                    return this.getFieldOptions(a);
                default:
                    throw new Error("Instance " + a.__class__ + " is not supported")
            }
        },
        getFormOptions: function(c) {
            return this.formOptions = b.attr(c.$element, this.staticOptions.namespace), a.extend({}, this.staticOptions, this.formOptions)
        },
        getFieldOptions: function(c) {
            return this.fieldOptions = b.attr(c.$element, this.staticOptions.namespace), null === this.formOptions && "undefined" != typeof c.parent && (this.formOptions = this.getFormOptions(c.parent)), a.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
        }
    };
    var h = function(c, d) {
        if (this.__class__ = "ParsleyForm", this.__id__ = b.hash(4), "OptionsFactory" !== b.get(d, "__class__")) throw new Error("You must give an OptionsFactory instance");
        this.OptionsFactory = d, this.$element = a(c), this.validationResult = null, this.options = this.OptionsFactory.get(this)
    };
    h.prototype = {
        onSubmitValidate: function(b) {
            return this.validate(void 0, void 0, b), !1 === this.validationResult && b instanceof a.Event && (b.stopImmediatePropagation(), b.preventDefault()), this
        },
        validate: function(b, c, d) {
            this.submitEvent = d, this.validationResult = !0;
            var e = [];
            this._refreshFields(), a.emit("parsley:form:validate", this);
            for (var f = 0; f < this.fields.length; f++) b && b !== this.fields[f].options.group || (e = this.fields[f].validate(c), !0 !== e && e.length > 0 && this.validationResult && (this.validationResult = !1));
            return a.emit("parsley:form:validated", this), this.validationResult
        },
        isValid: function(a, b) {
            this._refreshFields();
            for (var c = 0; c < this.fields.length; c++)
                if ((!a || a === this.fields[c].options.group) && !1 === this.fields[c].isValid(b)) return !1;
            return !0
        },
        _refreshFields: function() {
            return this.actualizeOptions()._bindFields()
        },
        _bindFields: function() {
            var a = this;
            return this.fields = [], this.fieldsMappedById = {}, this.$element.find(this.options.inputs).each(function() {
                var b = new window.Parsley(this, {}, a);
                "ParsleyField" !== b.__class__ && "ParsleyFieldMultiple" !== b.__class__ || b.$element.is(b.options.excluded) || "undefined" == typeof a.fieldsMappedById[b.__class__ + "-" + b.__id__] && (a.fieldsMappedById[b.__class__ + "-" + b.__id__] = b, a.fields.push(b))
            }), this
        }
    };
    var i = function(c, d, e, f, g) {
            if (!new RegExp("ParsleyField").test(b.get(c, "__class__"))) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
            if ("function" != typeof window.ParsleyValidator.validators[d] && "Assert" !== window.ParsleyValidator.validators[d](e).__parentClass__) throw new Error("Valid validator expected");
            var h = function(a, c) {
                return "undefined" != typeof a.options[c + "Priority"] ? a.options[c + "Priority"] : b.get(window.ParsleyValidator.validators[c](e), "priority") || 2
            };
            return f = f || h(c, d), "function" == typeof window.ParsleyValidator.validators[d](e).requirementsTransformer && (e = window.ParsleyValidator.validators[d](e).requirementsTransformer()), a.extend(window.ParsleyValidator.validators[d](e), {
                name: d,
                requirements: e,
                priority: f,
                groups: [f],
                isDomConstraint: g || b.attr(c.$element, c.options.namespace, d)
            })
        },
        j = function(c, d, e) {
            this.__class__ = "ParsleyField", this.__id__ = b.hash(4), this.$element = a(c), "undefined" != typeof e ? (this.parent = e, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this)) : (this.OptionsFactory = d, this.options = this.OptionsFactory.get(this)), this.constraints = [], this.constraintsByName = {}, this.validationResult = [], this._bindConstraints()
        };
    j.prototype = {
        validate: function(b) {
            return this.value = this.getValue(), a.emit("parsley:field:validate", this), a.emit("parsley:field:" + (this.isValid(b, this.value) ? "success" : "error"), this), a.emit("parsley:field:validated", this), this.validationResult
        },
        isValid: function(a, b) {
            this.refreshConstraints();
            var c = this._getConstraintsSortedPriorities();
            if (b = b || this.getValue(), 0 === b.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== a) return this.validationResult = [];
            if (!1 === this.options.priorityEnabled) return !0 === (this.validationResult = this.validateThroughValidator(b, this.constraints, "Any"));
            for (var d = 0; d < c.length; d++)
                if (!0 !== (this.validationResult = this.validateThroughValidator(b, this.constraints, c[d]))) return !1;
            return !0
        },
        getValue: function() {
            var a;
            return a = "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof a || null === a ? "" : !0 === this.options.trimValue ? a.replace(/^\s+|\s+$/g, "") : a
        },
        refreshConstraints: function() {
            return this.actualizeOptions()._bindConstraints()
        },
        addConstraint: function(a, b, c, d) {
            if (a = a.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[a]) {
                var e = new i(this, a, b, c, d);
                "undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name), this.constraints.push(e), this.constraintsByName[e.name] = e
            }
            return this
        },
        removeConstraint: function(a) {
            for (var b = 0; b < this.constraints.length; b++)
                if (a === this.constraints[b].name) {
                    this.constraints.splice(b, 1);
                    break
                }
            return this
        },
        updateConstraint: function(a, b, c) {
            return this.removeConstraint(a).addConstraint(a, b, c)
        },
        _bindConstraints: function() {
            for (var a = [], b = 0; b < this.constraints.length; b++) !1 === this.constraints[b].isDomConstraint && a.push(this.constraints[b]);
            this.constraints = a;
            for (var c in this.options) this.addConstraint(c, this.options[c]);
            return this._bindHtml5Constraints()
        },
        _bindHtml5Constraints: function() {
            (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0);
            var a = this.$element.attr("type");
            return "undefined" == typeof a ? this : "number" === a ? this.addConstraint("type", "integer", void 0, !0) : new RegExp(a, "i").test("email url range") ? this.addConstraint("type", a, void 0, !0) : this
        },
        _isRequired: function() {
            return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
        },
        _getConstraintsSortedPriorities: function() {
            for (var a = [], b = 0; b < this.constraints.length; b++) - 1 === a.indexOf(this.constraints[b].priority) && a.push(this.constraints[b].priority);
            return a.sort(function(a, b) {
                return b - a
            }), a
        }
    };
    var k = function() {
        this.__class__ = "ParsleyFieldMultiple"
    };
    k.prototype = {
        addElement: function(a) {
            return this.$elements.push(a), this
        },
        refreshConstraints: function() {
            var a;
            if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
            for (var b = 0; b < this.$elements.length; b++) {
                a = this.$elements[b].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                for (var c = 0; c < a.length; c++) this.addConstraint(a[c].name, a[c].requirements, a[c].priority, a[c].isDomConstraint)
            }
            return this
        },
        getValue: function() {
            if ("undefined" != typeof this.options.value) return this.options.value;
            if (this.$element.is("input[type=radio]")) return a("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
            if (this.$element.is("input[type=checkbox]")) {
                var b = [];
                return a("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function() {
                    b.push(a(this).val())
                }), b.length ? b : []
            }
            return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
        },
        _init: function(a) {
            return this.$elements = [this.$element], this.options.multiple = a, this
        }
    };
    var l = a({}),
        m = {};
    a.listen = function(a) {
        if ("undefined" == typeof m[a] && (m[a] = []), "function" == typeof arguments[1]) return m[a].push({
            fn: arguments[1]
        });
        if ("object" == typeof arguments[1] && "function" == typeof arguments[2]) return m[a].push({
            fn: arguments[2],
            ctxt: arguments[1]
        });
        throw new Error("Wrong parameters")
    }, a.listenTo = function(a, b, c) {
        if ("undefined" == typeof m[b] && (m[b] = []), !(a instanceof j || a instanceof h)) throw new Error("Must give Parsley instance");
        if ("string" != typeof b || "function" != typeof c) throw new Error("Wrong parameters");
        m[b].push({
            instance: a,
            fn: c
        })
    }, a.unsubscribe = function(a, b) {
        if ("undefined" != typeof m[a]) {
            if ("string" != typeof a || "function" != typeof b) throw new Error("Wrong arguments");
            for (var c = 0; c < m[a].length; c++)
                if (m[a][c].fn === b) return m[a].splice(c, 1)
        }
    }, a.unsubscribeTo = function(a, b) {
        if ("undefined" != typeof m[b]) {
            if (!(a instanceof j || a instanceof h)) throw new Error("Must give Parsley instance");
            for (var c = 0; c < m[b].length; c++)
                if ("undefined" != typeof m[b][c].instance && m[b][c].instance.__id__ === a.__id__) return m[b].splice(c, 1)
        }
    }, a.unsubscribeAll = function(a) {
        "undefined" != typeof m[a] && delete m[a]
    }, a.emit = function(a, b) {
        if ("undefined" != typeof m[a])
            for (var c = 0; c < m[a].length; c++)
                if ("undefined" != typeof m[a][c].instance) {
                    if (b instanceof j || b instanceof h)
                        if (m[a][c].instance.__id__ !== b.__id__) {
                            if (m[a][c].instance instanceof h && b instanceof j)
                                for (var d = 0; d < m[a][c].instance.fields.length; d++)
                                    if (m[a][c].instance.fields[d].__id__ === b.__id__) {
                                        m[a][c].fn.apply(l, Array.prototype.slice.call(arguments, 1));
                                        continue
                                    }
                        } else m[a][c].fn.apply(l, Array.prototype.slice.call(arguments, 1))
                } else m[a][c].fn.apply("undefined" != typeof m[a][c].ctxt ? m[a][c].ctxt : l, Array.prototype.slice.call(arguments, 1))
    }, a.subscribed = function() {
        return m
    }, window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {}, window.ParsleyConfig.i18n.en = a.extend(window.ParsleyConfig.i18n.en || {}, {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or less.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or less.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    }), "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
    var n = function(c, d, e) {
        if (this.__class__ = "Parsley", this.__version__ = "2.0.0", this.__id__ = b.hash(4), "undefined" == typeof c) throw new Error("You must give an element");
        if ("undefined" != typeof e && "ParsleyForm" !== e.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
        return this.init(a(c), d, e)
    };
    n.prototype = {
        init: function(a, d, e) {
            if (!a.length) throw new Error("You must bind Parsley on an existing element.");
            if (this.$element = a, this.$element.data("Parsley")) {
                var f = this.$element.data("Parsley");
                return "undefined" != typeof e && (f.parent = e), f
            }
            return this.OptionsFactory = new g(c, b.get(window, "ParsleyConfig") || {}, d, this.getNamespace(d)), this.options = this.OptionsFactory.get(this), this.$element.is("form") || b.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded) ? this.isMultiple() ? this.handleMultiple(e) : this.bind("parsleyField", e) : this
        },
        isMultiple: function() {
            return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
        },
        handleMultiple: function(c) {
            var d, e, f, g = this;
            if (this.options = a.extend(this.options, c ? c.OptionsFactory.get(c) : {}, b.attr(this.$element, this.options.namespace)), this.options.multiple ? e = this.options.multiple : "undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? e = d = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (e = this.$element.attr("id")), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.bind("parsleyFieldMultiple", c, e || this.__id__);
            if ("undefined" == typeof e) return window.console && window.console.warn && window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            if (e = e.replace(/(:|\.|\[|\]|\$)/g, ""), "undefined" != typeof d && a('input[name="' + d + '"]').each(function() {
                    a(this).is("input[type=radio], input[type=checkbox]") && a(this).attr(g.options.namespace + "multiple", e)
                }), a("[" + this.options.namespace + "multiple=" + e + "]").length)
                for (var h = 0; h < a("[" + this.options.namespace + "multiple=" + e + "]").length; h++)
                    if ("undefined" != typeof a(a("[" + this.options.namespace + "multiple=" + e + "]").get(h)).data("Parsley")) {
                        f = a(a("[" + this.options.namespace + "multiple=" + e + "]").get(h)).data("Parsley"), this.$element.data("ParsleyFieldMultiple") || (f.addElement(this.$element), this.$element.attr(this.options.namespace + "id", f.__id__));
                        break
                    }
            return this.bind("parsleyField", c, e, !0), f || this.bind("parsleyFieldMultiple", c, e)
        },
        getNamespace: function(a) {
            return "undefined" != typeof this.$element.data("parsleyNamespace") ? this.$element.data("parsleyNamespace") : "undefined" != typeof b.get(a, "namespace") ? a.namespace : "undefined" != typeof b.get(window, "ParsleyConfig.namespace") ? window.ParsleyConfig.namespace : c.namespace
        },
        bind: function(c, e, f, g) {
            var i;
            switch (c) {
                case "parsleyForm":
                    i = a.extend(new h(this.$element, this.OptionsFactory), new d, window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    i = a.extend(new j(this.$element, this.OptionsFactory, e), new d, window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    i = a.extend(new j(this.$element, this.OptionsFactory, e), new d, new k, window.ParsleyExtend)._init(f);
                    break;
                default:
                    throw new Error(c + "is not a supported Parsley type")
            }
            return "undefined" != typeof f && b.setAttr(this.$element, this.options.namespace, "multiple", f), "undefined" != typeof g ? (this.$element.data("ParsleyFieldMultiple", i), i) : (new RegExp("ParsleyF", "i").test(i.__class__) && (this.$element.data("Parsley", i), a.emit("parsley:" + ("parsleyForm" === c ? "form" : "field") + ":init", i)), i)
        }
    }, a.fn.parsley = a.fn.psly = function(b) {
        if (this.length > 1) {
            var c = [];
            return this.each(function() {
                c.push(a(this).parsley(b))
            }), c
        }
        return a(this).length ? new n(this, b) : void(window.console && window.console.warn && window.console.warn("You must bind Parsley on an existing element."))
    }, window.ParsleyUI = "function" == typeof b.get(window, "ParsleyConfig.ParsleyUI") ? (new window.ParsleyConfig.ParsleyUI).listen() : (new f).listen(), "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {}), window.Parsley = window.psly = n, window.ParsleyUtils = b, window.ParsleyValidator = new e(window.ParsleyConfig.validators, window.ParsleyConfig.i18n), !1 !== b.get(window, "ParsleyConfig.autoBind") && a(document).ready(function() {
        a("[data-parsley-validate]").length && a("[data-parsley-validate]").parsley()
    }), "function" == typeof define && define.amd && define("parsley", function() {
        return window.Parsley
    })
}(window.jQuery);;
(function(window, document, $) {
    var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
    var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
    var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
    var prototype = $.fn;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;
    if (isInputSupported && isTextareaSupported) {
        placeholder = prototype.placeholder = function() {
            return this;
        };
        placeholder.input = placeholder.textarea = true;
    } else {
        placeholder = prototype.placeholder = function() {
            var $this = this;
            $this.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({
                'focus.placeholder': clearPlaceholder,
                'blur.placeholder': setPlaceholder
            }).data('placeholder-enabled', true).trigger('blur.placeholder');
            return $this;
        };
        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;
        hooks = {
            'get': function(element) {
                var $element = $(element);
                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }
                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function(element, value) {
                var $element = $(element);
                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value = value;
                }
                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    if (element != safeActiveElement()) {
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                return $element;
            }
        };
        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }
        $(function() {
            $(document).delegate('form', 'submit.placeholder', function() {
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });
        $(window).bind('beforeunload.placeholder', function() {
            $('.placeholder').each(function() {
                this.value = '';
            });
        });
    }

    function args(elem) {
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == safeActiveElement() && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({
                            'type': 'text'
                        });
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), {
                            'type': 'text'
                        }));
                    }
                    $replacement.removeAttr('name').data({
                        'placeholder-password': $input,
                        'placeholder-id': id
                    }).bind('focus.placeholder', clearPlaceholder);
                    $input.data({
                        'placeholder-textinput': $replacement,
                        'placeholder-id': id
                    }).before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (exception) {}
    }
}(this, document, jQuery));
var _fixedNav;
var _fixedNavHiddenTop;
var _fixedNavHidden = true;
var FIXED_NAV_TRIGGER_Y = 200;
$(function() {
    registerNavScrollHandler();
    registerJoinWaitlistModal();
});

function registerNavScrollHandler() {
    _fixedNav = $('.navbar-fixed-top');
    _fixedNavHiddenTop = _fixedNav.css('top');
    $(window).scroll($.throttle(200, showOrHideNav));
}

function showOrHideNav() {
    var window_y = $(window).scrollTop();
    if (_fixedNavHidden && window_y > FIXED_NAV_TRIGGER_Y) {
        _fixedNav.removeClass('closed');
        _fixedNavHidden = false;
    } else if (!_fixedNavHidden && window_y < FIXED_NAV_TRIGGER_Y) {
        _fixedNav.addClass('closed');
        _fixedNavHidden = true;
    }
}

function registerJoinWaitlistModal() {
    var modalElem = $('#join_waitlist_modal');
    $('.navbar-join-waitlist').click(function() {
        modalElem.modal();
    });
    modalElem.on('shown.bs.modal', function() {
        $('#nav_waitlist_email').focus();
    });
    registerAjaxForm($('#nav_waitlist_form'), handleModalWaitlistSuccess, handleWaitlistError);
    $('#nav_waitlist_form input').placeholder();
}

function handleModalWaitlistSuccess(data) {
        $('#join_waitlist_modal').modal('hide');
        handleWaitlistSuccess(data);
    }
    (function(b, c) {
        var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
            a;
        $.throttle = a = function(e, f, j, i) {
            var h, d = 0;
            if (typeof f !== "boolean") {
                i = j;
                j = f;
                f = c
            }

            function g() {
                var o = this,
                    m = +new Date() - d,
                    n = arguments;

                function l() {
                    d = +new Date();
                    j.apply(o, n)
                }

                function k() {
                    h = c
                }
                if (i && !h) {
                    l()
                }
                h && clearTimeout(h);
                if (i === c && m > e) {
                    l()
                } else {
                    if (f !== true) {
                        h = setTimeout(i ? k : l, i === c ? e - m : e)
                    }
                }
            }
            if ($.guid) {
                g.guid = j.guid = j.guid || $.guid++
            }
            return g
        };
        $.debounce = function(d, e, f) {
            return f === c ? a(d, e, false) : a(d, f, e !== false)
        }
    })(this);
$(function() {
    registerAjaxForm($('#join_waitlist_form'), handleWaitlistSuccess, handleWaitlistError);
    $('#join_waitlist_form input').placeholder();
    setupVideos();
});

function setupVideos() {
    var isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/);
    var supportsVideo = !!document.createElement('video').canPlayType;
    if (isMobile || !supportsVideo) {
        $('.animation-container').remove();
        $('.animation-placeholder').removeClass('hidden');
    } else {
        $('.fancybox').fancybox({
            height: 540,
            helpers: {
                media: true
            },
            padding: 0,
            width: 960
        });
        var lightVideo = $('#home_animation_video_light');
        var darkVideo = $('#home_animation_video_dark');
        lightVideo.bind('ended', function() {
            $('#home_animation_dark').addClass('visible');
            setTimeout(function() {
                darkVideo[0].play();
            }, 500);
        });
        darkVideo.bind('ended', function() {
            $('#home_animation_dark').removeClass('visible');
            setTimeout(function() {
                lightVideo[0].play();
            }, 500);
        });
    }
};
(function(window, document, $, undefined) {
    "use strict";
    var H = $("html"),
        W = $(window),
        D = $(document),
        F = $.fancybox = function() {
            F.open.apply(this, arguments);
        },
        IE = navigator.userAgent.match(/msie/i),
        didUpdate = null,
        isTouch = document.createTouch !== undefined,
        isQuery = function(obj) {
            return obj && obj.hasOwnProperty && obj instanceof $;
        },
        isString = function(str) {
            return str && $.type(str) === "string";
        },
        isPercentage = function(str) {
            return isString(str) && str.indexOf('%') > 0;
        },
        isScrollable = function(el) {
            return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
        },
        getScalar = function(orig, dim) {
            var value = parseInt(orig, 10) || 0;
            if (dim && isPercentage(orig)) {
                value = F.getViewport()[dim] / 100 * value;
            }
            return Math.ceil(value);
        },
        getValue = function(value, dim) {
            return getScalar(value, dim) + 'px';
        };
    $.extend(F, {
        version: '2.1.5',
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: true,
            autoHeight: false,
            autoWidth: false,
            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: 'auto',
            wrapCSS: '',
            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,
            ajax: {
                dataType: 'html',
                headers: {
                    'X-fancyBox': true
                }
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },
            keys: {
                next: {
                    13: 'left',
                    34: 'up',
                    39: 'left',
                    40: 'up'
                },
                prev: {
                    8: 'right',
                    33: 'down',
                    37: 'right',
                    38: 'down'
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: 'left',
                prev: 'right'
            },
            scrollOutside: true,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: 'fade',
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',
            closeEffect: 'fade',
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',
            nextEffect: 'elastic',
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',
            prevEffect: 'elastic',
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',
            helpers: {
                overlay: true,
                title: true
            },
            onCancel: $.noop,
            beforeLoad: $.noop,
            afterLoad: $.noop,
            beforeShow: $.noop,
            afterShow: $.noop,
            beforeChange: $.noop,
            beforeClose: $.noop,
            afterClose: $.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: false,
        isOpen: false,
        isOpened: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: false
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(group, opts) {
            if (!group) {
                return;
            }
            if (!$.isPlainObject(opts)) {
                opts = {};
            }
            if (false === F.close(true)) {
                return;
            }
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }
            $.each(group, function(i, element) {
                var obj = {},
                    href, title, content, type, rez, hrefParts, selector;
                if ($.type(element) === "object") {
                    if (element.nodeType) {
                        element = $(element);
                    }
                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: $('<div/>').text(element.data('fancybox-title') || element.attr('title')).html(),
                            isDom: true,
                            element: element
                        };
                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }
                    } else {
                        obj = element;
                    }
                }
                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';
                content = opts.content || obj.content;
                type = content ? 'html' : (opts.type || obj.type);
                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');
                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }
                if (isString(href)) {
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';
                        } else if (F.isSWF(href)) {
                            type = 'swf';
                        } else if (href.charAt(0) === '#') {
                            type = 'inline';
                        } else if (isString(element)) {
                            type = 'html';
                            content = element;
                        }
                    }
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift();
                    }
                }
                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href);
                        } else if (obj.isDom) {
                            content = element;
                        }
                    } else if (type === 'html') {
                        content = href;
                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element;
                    }
                }
                $.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });
                group[i] = obj;
            });
            F.opts = $.extend(true, {}, F.defaults, opts);
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
            }
            F.group = group;
            return F._start(F.opts.index);
        },
        cancel: function() {
            var coming = F.coming;
            if (coming && false === F.trigger('onCancel')) {
                return;
            }
            F.hideLoading();
            if (!coming) {
                return;
            }
            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }
            F.ajaxLoad = null;
            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }
            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }
            F.coming = null;
            if (!F.current) {
                F._afterZoomOut(coming);
            }
        },
        close: function(event) {
            F.cancel();
            if (false === F.trigger('beforeClose')) {
                return;
            }
            F.unbindEvents();
            if (!F.isActive) {
                return;
            }
            if (!F.isOpen || event === true) {
                $('.fancybox-wrap').stop(true).trigger('onReset').remove();
                F._afterZoomOut();
            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;
                $('.fancybox-item, .fancybox-nav').remove();
                F.wrap.stop(true, true).removeClass('fancybox-opened');
                F.transitions[F.current.closeMethod]();
            }
        },
        play: function(action) {
            var clear = function() {
                    clearTimeout(F.player.timer);
                },
                set = function() {
                    clear();
                    if (F.current && F.player.isActive) {
                        F.player.timer = setTimeout(F.next, F.current.playSpeed);
                    }
                },
                stop = function() {
                    clear();
                    D.unbind('.player');
                    F.player.isActive = false;
                    F.trigger('onPlayEnd');
                },
                start = function() {
                    if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                        F.player.isActive = true;
                        D.bind({
                            'onCancel.player beforeClose.player': stop,
                            'onUpdate.player': set,
                            'beforeLoad.player': clear
                        });
                        set();
                        F.trigger('onPlayStart');
                    }
                };
            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },
        next: function(direction) {
            var current = F.current;
            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }
                F.jumpto(current.index + 1, direction, 'next');
            }
        },
        prev: function(direction) {
            var current = F.current;
            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }
                F.jumpto(current.index - 1, direction, 'prev');
            }
        },
        jumpto: function(index, direction, router) {
            var current = F.current;
            if (!current) {
                return;
            }
            index = getScalar(index);
            F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
            F.router = router || 'jumpto';
            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }
                index = index % current.group.length;
            }
            if (current.group[index] !== undefined) {
                F.cancel();
                F._start(index);
            }
        },
        reposition: function(e, onlyAbsolute) {
            var current = F.current,
                wrap = current ? current.wrap : null,
                pos;
            if (wrap) {
                pos = F._getPosition(onlyAbsolute);
                if (e && e.type === 'scroll') {
                    delete pos.position;
                    wrap.stop(true, true).animate(pos, 200);
                } else {
                    wrap.css(pos);
                    current.pos = $.extend({}, current.dim, pos);
                }
            }
        },
        update: function(e) {
            var type = (e && e.originalEvent && e.originalEvent.type),
                anyway = !type || type === 'orientationchange';
            if (anyway) {
                clearTimeout(didUpdate);
                didUpdate = null;
            }
            if (!F.isOpen || didUpdate) {
                return;
            }
            didUpdate = setTimeout(function() {
                var current = F.current;
                if (!current || F.isClosing) {
                    return;
                }
                F.wrap.removeClass('fancybox-tmp');
                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }
                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }
                F.trigger('onUpdate');
                didUpdate = null;
            }, (anyway && !isTouch ? 0 : 300));
        },
        toggle: function(action) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');
                    F.trigger('onUpdate');
                }
                F.update();
            }
        },
        hideLoading: function() {
            D.unbind('.loading');
            $('#fancybox-loading').remove();
        },
        showLoading: function() {
            var el, viewport;
            F.hideLoading();
            el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');
            D.bind('keydown.loading', function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();
                    F.cancel();
                }
            });
            if (!F.defaults.fixed) {
                viewport = F.getViewport();
                el.css({
                    position: 'absolute',
                    top: (viewport.h * 0.5) + viewport.y,
                    left: (viewport.w * 0.5) + viewport.x
                });
            }
            F.trigger('onLoading');
        },
        getViewport: function() {
            var locked = (F.current && F.current.locked) || false,
                rez = {
                    x: W.scrollLeft(),
                    y: W.scrollTop()
                };
            if (locked && locked.length) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;
            } else {
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }
            return rez;
        },
        unbindEvents: function() {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }
            D.unbind('.fb');
            W.unbind('.fb');
        },
        bindEvents: function() {
            var current = F.current,
                keys;
            if (!current) {
                return;
            }
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);
            keys = current.keys;
            if (keys) {
                D.bind('keydown.fb', function(e) {
                    var code = e.which || e.keyCode,
                        target = e.target || e.srcElement;
                    if (code === 27 && F.coming) {
                        return false;
                    }
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function(i, val) {
                            if (current.group.length > 1 && val[code] !== undefined) {
                                F[i](val[code]);
                                e.preventDefault();
                                return false;
                            }
                            if ($.inArray(code, val) > -1) {
                                F[i]();
                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }
            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function(e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                        parent = $(target),
                        canScroll = false;
                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }
                        canScroll = isScrollable(parent[0]);
                        parent = $(parent).parent();
                    }
                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left');
                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right');
                            }
                            e.preventDefault();
                        }
                    }
                });
            }
        },
        trigger: function(event, o) {
            var ret, obj = o || F.coming || F.current;
            if (obj) {
                if ($.isFunction(obj[event])) {
                    ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
                }
                if (ret === false) {
                    return false;
                }
                if (obj.helpers) {
                    $.each(obj.helpers, function(helper, opts) {
                        if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                            F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                        }
                    });
                }
            }
            D.trigger(event);
        },
        isImage: function(str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },
        isSWF: function(str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },
        _start: function(index) {
            var coming = {},
                obj, href, type, margin, padding;
            index = getScalar(index);
            obj = F.group[index] || null;
            if (!obj) {
                return false;
            }
            coming = $.extend(true, {}, F.opts, obj);
            margin = coming.margin;
            padding = coming.padding;
            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }
            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
            }
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }
            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }
            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }
            coming.group = F.group;
            coming.index = index;
            F.coming = coming;
            if (false === F.trigger('beforeLoad')) {
                F.coming = null;
                return;
            }
            type = coming.type;
            href = coming.href;
            if (!type) {
                F.coming = null;
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;
                    return F[F.router](F.direction);
                }
                return false;
            }
            F.isActive = true;
            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling = 'visible';
            }
            if (type === 'image') {
                coming.aspectRatio = true;
            }
            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');
            $.extend(coming, {
                skin: $('.fancybox-skin', coming.wrap),
                outer: $('.fancybox-outer', coming.wrap),
                inner: $('.fancybox-inner', coming.wrap)
            });
            $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[i]));
            });
            F.trigger('onReady');
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content');
                }
            } else if (!href) {
                return F._error('href');
            }
            if (type === 'image') {
                F._loadImage();
            } else if (type === 'ajax') {
                F._loadAjax();
            } else if (type === 'iframe') {
                F._loadIframe();
            } else {
                F._afterLoad();
            }
        },
        _error: function(type) {
            $.extend(F.coming, {
                type: 'html',
                autoWidth: true,
                autoHeight: true,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });
            F._afterLoad();
        },
        _loadImage: function() {
            var img = F.imgPreload = new Image();
            img.onload = function() {
                this.onload = this.onerror = null;
                F.coming.width = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;
                F._afterLoad();
            };
            img.onerror = function() {
                this.onload = this.onerror = null;
                F._error('image');
            };
            img.src = F.coming.href;
            if (img.complete !== true) {
                F.showLoading();
            }
        },
        _loadAjax: function() {
            var coming = F.coming;
            F.showLoading();
            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function(jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR);
                    } else {
                        F.hideLoading();
                    }
                },
                success: function(data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;
                        F._afterLoad();
                    }
                }
            }));
        },
        _loadIframe: function() {
            var coming = F.coming,
                iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling).attr('src', coming.href);
            $(coming.wrap).bind('onReset', function() {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {}
            });
            if (coming.iframe.preload) {
                F.showLoading();
                iframe.one('load', function() {
                    $(this).data('ready', 1);
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update);
                    }
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();
                    F._afterLoad();
                });
            }
            coming.content = iframe.appendTo(coming.inner);
            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },
        _preloadImages: function() {
            var group = F.group,
                current = F.current,
                len = group.length,
                cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
                item, i;
            for (i = 1; i <= cnt; i += 1) {
                item = group[(current.index + i) % len];
                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },
        _afterLoad: function() {
            var coming = F.coming,
                previous = F.current,
                placeholder = 'fancybox-placeholder',
                current, content, type, scrolling, href, embed;
            F.hideLoading();
            if (!coming || F.isActive === false) {
                return;
            }
            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();
                F.coming = null;
                return;
            }
            if (previous) {
                F.trigger('beforeChange', previous);
                previous.wrap.stop(true).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove();
            }
            F.unbindEvents();
            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;
            $.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });
            href = current.href;
            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = $('<div>').html(content).find(current.selector);
                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide());
                        }
                        content = content.show().detach();
                        current.wrap.bind('onReset', function() {
                            if ($(this).find(content).length) {
                                content.hide().replaceAll(content.data(placeholder)).data(placeholder, false);
                            }
                        });
                    }
                    break;
                case 'image':
                    content = current.tpl.image.replace(/\{href\}/g, href);
                    break;
                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed = '';
                    $.each(current.swf, function(name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed += ' ' + name + '="' + val + '"';
                    });
                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break;
            }
            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content);
            }
            F.trigger('beforeShow');
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));
            F._setDimension();
            F.reposition();
            F.isOpen = false;
            F.coming = null;
            F.bindEvents();
            if (!F.isOpened) {
                $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();
            } else if (previous.prevMethod) {
                F.transitions[previous.prevMethod]();
            }
            F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();
            F._preloadImages();
        },
        _setDimension: function() {
            var viewport = F.getViewport(),
                steps = 0,
                canShrink = false,
                canExpand = false,
                wrap = F.wrap,
                skin = F.skin,
                inner = F.inner,
                current = F.current,
                width = current.width,
                height = current.height,
                minWidth = current.minWidth,
                minHeight = current.minHeight,
                maxWidth = current.maxWidth,
                maxHeight = current.maxHeight,
                scrolling = current.scrolling,
                scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                margin = current.margin,
                wMargin = getScalar(margin[1] + margin[3]),
                hMargin = getScalar(margin[0] + margin[2]),
                wPadding, hPadding, wSpace, hSpace, origWidth, origHeight, origMaxWidth, origMaxHeight, ratio, width_, height_, maxWidth_, maxHeight_, iframe, body;
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');
            wPadding = getScalar(skin.outerWidth(true) - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;
            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;
            if (current.type === 'iframe') {
                iframe = current.content;
                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);
                            body = iframe.contents().find('body');
                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }
                            origHeight = body.outerHeight(true);
                        }
                    } catch (e) {}
                }
            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass('fancybox-tmp');
                if (!current.autoWidth) {
                    inner.width(origWidth);
                }
                if (!current.autoHeight) {
                    inner.height(origHeight);
                }
                if (current.autoWidth) {
                    origWidth = inner.width();
                }
                if (current.autoHeight) {
                    origHeight = inner.height();
                }
                inner.removeClass('fancybox-tmp');
            }
            width = getScalar(origWidth);
            height = getScalar(origHeight);
            ratio = origWidth / origHeight;
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);
            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;
            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }
            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;
            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio);
                }
                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio);
                }
                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio);
                }
                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio);
                }
            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));
                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);
                    height = inner.height();
                }
                height = Math.max(minHeight, Math.min(height, maxHeight));
            }
            if (current.fitToView) {
                inner.width(width).height(height);
                wrap.width(width + wPadding);
                width_ = wrap.width();
                height_ = wrap.height();
                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }
                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);
                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio);
                        }
                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio);
                        }
                        inner.width(width).height(height);
                        wrap.width(width + wPadding);
                        width_ = wrap.width();
                        height_ = wrap.height();
                    }
                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }
            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }
            inner.width(width).height(height);
            wrap.width(width + wPadding);
            width_ = wrap.width();
            height_ = wrap.height();
            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));
            $.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(true),
                skinSpace: skin.height() - height
            });
            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },
        _getPosition: function(onlyAbsolute) {
            var current = F.current,
                viewport = F.getViewport(),
                margin = current.margin,
                width = F.wrap.width() + margin[1] + margin[3],
                height = F.wrap.height() + margin[0] + margin[2],
                rez = {
                    position: 'absolute',
                    top: margin[0],
                    left: margin[3]
                };
            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';
            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x;
            }
            rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));
            return rez;
        },
        _afterZoomIn: function() {
            var current = F.current;
            if (!current) {
                return;
            }
            F.isOpen = F.isOpened = true;
            F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);
            F.update();
            if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();
                        F[current.closeClick ? 'close' : 'next']();
                    }
                });
            }
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
                    e.preventDefault();
                    F.close();
                });
            }
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }
                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }
            F.trigger('afterShow');
            if (!current.loop && current.index === current.group.length - 1) {
                F.play(false);
            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;
                F.play(true);
            }
        },
        _afterZoomOut: function(obj) {
            obj = obj || F.current;
            $('.fancybox-wrap').trigger('onReset').remove();
            $.extend(F, {
                group: {},
                opts: {},
                router: false,
                current: null,
                isActive: false,
                isOpened: false,
                isOpen: false,
                isClosing: false,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            F.trigger('afterClose', obj);
        }
    });
    F.transitions = {
        getOrigPosition: function() {
            var current = F.current,
                element = current.element,
                orig = current.orig,
                pos = {},
                width = 50,
                height = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();
            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');
                if (!orig.length) {
                    orig = element;
                }
            }
            if (isQuery(orig)) {
                pos = orig.offset();
                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight();
                }
            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio;
            }
            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x;
            }
            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };
            return pos;
        },
        step: function(now, fx) {
            var ratio, padding, value, prop = fx.prop,
                current = F.current,
                wrapSpace = current.wrapSpace,
                skinSpace = current.skinSpace;
            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);
                if (F.isClosing) {
                    ratio = 1 - ratio;
                }
                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;
                F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                F.inner[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)));
            }
        },
        zoomIn: function() {
            var current = F.current,
                startPos = current.pos,
                effect = current.openEffect,
                elastic = effect === 'elastic',
                endPos = $.extend({
                    opacity: 1
                }, startPos);
            delete endPos.position;
            if (elastic) {
                startPos = this.getOrigPosition();
                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }
            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }
            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            });
        },
        zoomOut: function() {
            var current = F.current,
                effect = current.closeEffect,
                elastic = effect === 'elastic',
                endPos = {
                    opacity: 0.1
                };
            if (elastic) {
                endPos = this.getOrigPosition();
                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }
            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            });
        },
        changeIn: function() {
            var current = F.current,
                effect = current.nextEffect,
                startPos = current.pos,
                endPos = {
                    opacity: 1
                },
                direction = F.direction,
                distance = 200,
                field;
            startPos.opacity = 0.1;
            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';
                if (direction === 'down' || direction === 'right') {
                    startPos[field] = getValue(getScalar(startPos[field]) - distance);
                    endPos[field] = '+=' + distance + 'px';
                } else {
                    startPos[field] = getValue(getScalar(startPos[field]) + distance);
                    endPos[field] = '-=' + distance + 'px';
                }
            }
            if (effect === 'none') {
                F._afterZoomIn();
            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                });
            }
        },
        changeOut: function() {
            var previous = F.previous,
                effect = previous.prevEffect,
                endPos = {
                    opacity: 0.1
                },
                direction = F.direction,
                distance = 200;
            if (effect === 'elastic') {
                endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px';
            }
            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function() {
                    $(this).trigger('onReset').remove();
                }
            });
        }
    };
    F.helpers.overlay = {
        defaults: {
            closeClick: true,
            speedOut: 200,
            showEarly: true,
            css: {},
            locked: !isTouch,
            fixed: true
        },
        overlay: null,
        fixed: false,
        el: $('html'),
        create: function(opts) {
            var parent;
            opts = $.extend({}, this.defaults, opts);
            if (this.overlay) {
                this.close();
            }
            parent = F.coming ? F.coming.parent : opts.parent;
            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo(parent && parent.lenth ? parent : 'body');
            this.fixed = false;
            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');
                this.fixed = true;
            }
        },
        open: function(opts) {
            var that = this;
            opts = $.extend({}, this.defaults, opts);
            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');
            } else {
                this.create(opts);
            }
            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy(this.update, this));
                this.update();
            }
            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function(e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }
                        return false;
                    }
                });
            }
            this.overlay.css(opts.css).show();
        },
        close: function() {
            W.unbind('resize.overlay');
            if (this.el.hasClass('fancybox-lock')) {
                $('.fancybox-margin').removeClass('fancybox-margin');
                this.el.removeClass('fancybox-lock');
                W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }
            $('.fancybox-overlay').remove().hide();
            $.extend(this, {
                overlay: null,
                fixed: false
            });
        },
        update: function() {
            var width = '100%',
                offsetWidth;
            this.overlay.width(width).height('100%');
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                if (D.width() > offsetWidth) {
                    width = D.width();
                }
            } else if (D.width() > W.width()) {
                width = D.width();
            }
            this.overlay.width(width).height(D.height());
        },
        onReady: function(opts, obj) {
            var overlay = this.overlay;
            $('.fancybox-overlay').stop(true, true);
            if (!overlay) {
                this.create(opts);
            }
            if (opts.locked && this.fixed && obj.fixed) {
                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = false;
            }
            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },
        beforeShow: function(opts, obj) {
            if (obj.locked && !this.el.hasClass('fancybox-lock')) {
                if (this.fixPosition !== false) {
                    $('*').filter(function() {
                        return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap"));
                    }).addClass('fancybox-margin');
                }
                this.el.addClass('fancybox-margin');
                this.scrollV = W.scrollTop();
                this.scrollH = W.scrollLeft();
                this.el.addClass('fancybox-lock');
                W.scrollTop(this.scrollV).scrollLeft(this.scrollH);
            }
            this.open(opts);
        },
        onUpdate: function() {
            if (!this.fixed) {
                this.update();
            }
        },
        afterClose: function(opts) {
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this));
            }
        }
    };
    F.helpers.title = {
        defaults: {
            type: 'float',
            position: 'bottom'
        },
        beforeShow: function(opts) {
            var current = F.current,
                text = current.title,
                type = opts.type,
                title, target;
            if ($.isFunction(text)) {
                text = text.call(current.element, current);
            }
            if (!isString(text) || $.trim(text) === '') {
                return;
            }
            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');
            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;
                case 'outside':
                    target = F.wrap;
                    break;
                case 'over':
                    target = F.inner;
                    break;
                default:
                    target = F.skin;
                    title.appendTo('body');
                    if (IE) {
                        title.width(title.width());
                    }
                    title.wrapInner('<span class="child"></span>');
                    F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                    break;
            }
            title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target);
        }
    };
    $.fn.fancybox = function(options) {
        var index, that = $(this),
            selector = this.selector || '',
            run = function(e) {
                var what = $(this).blur(),
                    idx = index,
                    relType, relVal;
                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                    relType = options.groupAttr || 'data-fancybox-group';
                    relVal = what.attr(relType);
                    if (!relVal) {
                        relType = 'rel';
                        relVal = what.get(0)[relType];
                    }
                    if (relVal && relVal !== '' && relVal !== 'nofollow') {
                        what = selector.length ? $(selector) : that;
                        what = what.filter('[' + relType + '="' + relVal + '"]');
                        idx = what.index(this);
                    }
                    options.index = idx;
                    if (F.open(what, options) !== false) {
                        e.preventDefault();
                    }
                }
            };
        options = options || {};
        index = options.index || 0;
        if (!selector || options.live === false) {
            that.unbind('click.fb-start').bind('click.fb-start', run);
        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }
        this.filter('[data-fancybox-start=1]').trigger('click');
        return this;
    };
    D.ready(function() {
        var w1, w2;
        if ($.scrollbarWidth === undefined) {
            $.scrollbarWidth = function() {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                    child = parent.children(),
                    width = child.innerWidth() - child.height(99).innerWidth();
                parent.remove();
                return width;
            };
        }
        if ($.support.fixedPosition === undefined) {
            $.support.fixedPosition = (function() {
                var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                    fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);
                elem.remove();
                return fixed;
            }());
        }
        $.extend(F.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $('body')
        });
        w1 = $(window).width();
        H.addClass('fancybox-lock-test');
        w2 = $(window).width();
        H.removeClass('fancybox-lock-test');
        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });
}(window, document, jQuery));;
(function($) {
    "use strict";
    var F = $.fancybox,
        format = function(url, rez, params) {
            params = params || '';
            if ($.type(params) === "object") {
                params = $.param(params, true);
            }
            $.each(rez, function(key, value) {
                url = url.replace('$' + key, value || '');
            });
            if (params.length) {
                url += (url.indexOf('?') > 0 ? '&' : '?') + params;
            }
            return url;
        };
    F.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: 'opaque',
                    enablejsapi: 1
                },
                type: 'iframe',
                url: '//www.youtube.com/embed/$3'
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                type: 'iframe',
                url: '//player.vimeo.com/video/$1'
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {
                    autoPlay: 'yes'
                },
                type: 'swf',
                url: function(rez, params, obj) {
                    obj.swf.flashVars = 'playerVars=' + $.param(params, true);
                    return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: 'swf',
                url: '//www.dailymotion.com/swf/video/$1'
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {
                    autoplay: 0
                },
                type: 'iframe',
                url: '//www.twitvid.com/embed.php?guid=$1'
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: 'image',
                url: '//twitpic.com/show/full/$1/'
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: 'image',
                url: '//$1/p/$2/media/?size=l'
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: 'iframe',
                url: function(rez) {
                    return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
                }
            }
        },
        beforeLoad: function(opts, obj) {
            var url = obj.href || '',
                type = false,
                what, item, rez, params;
            for (what in opts) {
                if (opts.hasOwnProperty(what)) {
                    item = opts[what];
                    rez = url.match(item.matcher);
                    if (rez) {
                        type = item.type;
                        params = $.extend(true, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null));
                        url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);
                        break;
                    }
                }
            }
            if (type) {
                obj.href = url;
                obj.type = type;
                obj.autoHeight = false;
            }
        }
    };
}(jQuery));