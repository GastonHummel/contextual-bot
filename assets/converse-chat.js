!(function r(s, a, l) {
  function c(t, e) {
    if (!a[t]) {
      if (!s[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (u) return u(t, !0);
        var i = new Error("Cannot find module '" + t + "'");
        throw ((i.code = "MODULE_NOT_FOUND"), i);
      }
      var o = (a[t] = { exports: {} });
      s[t][0].call(
        o.exports,
        function (e) {
          return c(s[t][1][e] || e);
        },
        o,
        o.exports,
        r,
        s,
        a,
        l
      );
    }
    return a[t].exports;
  }
  for (
    var u = "function" == typeof require && require, e = 0;
    e < l.length;
    e++
  )
    c(l[e]);
  return c;
})(
  {
    1: [
      function (e, n, i) {
        (function (re, z, c) {
          !(function (e) {
            if ("object" == typeof i && void 0 !== n) n.exports = e();
            else if ("function" == typeof define && define.amd) define([], e);
            else {
              var t;
              "undefined" != typeof window
                ? (t = window)
                : void 0 !== z
                ? (t = z)
                : "undefined" != typeof self && (t = self),
                (t.Promise = e());
            }
          })(function () {
            var e, t, n;
            return (function r(s, a, l) {
              function c(n, e) {
                if (!a[n]) {
                  if (!s[n]) {
                    var t = "function" == typeof _dereq_ && _dereq_;
                    if (!e && t) return t(n, !0);
                    if (u) return u(n, !0);
                    var i = new Error("Cannot find module '" + n + "'");
                    throw ((i.code = "MODULE_NOT_FOUND"), i);
                  }
                  var o = (a[n] = { exports: {} });
                  s[n][0].call(
                    o.exports,
                    function (e) {
                      var t = s[n][1][e];
                      return c(t || e);
                    },
                    o,
                    o.exports,
                    r,
                    s,
                    a,
                    l
                  );
                }
                return a[n].exports;
              }
              for (
                var u = "function" == typeof _dereq_ && _dereq_, e = 0;
                e < l.length;
                e++
              )
                c(l[e]);
              return c;
            })(
              {
                1: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (e) {
                      var i = e._SomePromiseArray;
                      function t(e) {
                        var t = new i(e),
                          n = t.promise();
                        return t.setHowMany(1), t.setUnwrap(), t.init(), n;
                      }
                      (e.any = function (e) {
                        return t(e);
                      }),
                        (e.prototype.any = function () {
                          return t(this);
                        });
                    };
                  },
                  {},
                ],
                2: [
                  function (e, t, n) {
                    "use strict";
                    var i;
                    try {
                      throw new Error();
                    } catch (e) {
                      i = e;
                    }
                    var o = e("./schedule"),
                      r = e("./queue");
                    function s() {
                      (this._customScheduler = !1),
                        (this._isTickUsed = !1),
                        (this._lateQueue = new r(16)),
                        (this._normalQueue = new r(16)),
                        (this._haveDrainedQueues = !1);
                      var e = this;
                      (this.drainQueues = function () {
                        e._drainQueues();
                      }),
                        (this._schedule = o);
                    }
                    function a(e) {
                      for (; 0 < e.length(); ) l(e);
                    }
                    function l(e) {
                      var t = e.shift();
                      if ("function" != typeof t) t._settlePromises();
                      else {
                        var n = e.shift(),
                          i = e.shift();
                        t.call(n, i);
                      }
                    }
                    (s.prototype.setScheduler = function (e) {
                      var t = this._schedule;
                      return (
                        (this._schedule = e), (this._customScheduler = !0), t
                      );
                    }),
                      (s.prototype.hasCustomScheduler = function () {
                        return this._customScheduler;
                      }),
                      (s.prototype.haveItemsQueued = function () {
                        return this._isTickUsed || this._haveDrainedQueues;
                      }),
                      (s.prototype.fatalError = function (e, t) {
                        t
                          ? (re.stderr.write(
                              "Fatal " +
                                (e instanceof Error ? e.stack : e) +
                                "\n"
                            ),
                            re.exit(2))
                          : this.throwLater(e);
                      }),
                      (s.prototype.throwLater = function (e, t) {
                        if (
                          (1 === arguments.length &&
                            ((t = e),
                            (e = function () {
                              throw t;
                            })),
                          "undefined" != typeof setTimeout)
                        )
                          setTimeout(function () {
                            e(t);
                          }, 0);
                        else
                          try {
                            this._schedule(function () {
                              e(t);
                            });
                          } catch (e) {
                            throw new Error(
                              "No async scheduler available\n\n    See http://goo.gl/MqrFmX\n"
                            );
                          }
                      }),
                      (s.prototype.invokeLater = function (e, t, n) {
                        this._lateQueue.push(e, t, n), this._queueTick();
                      }),
                      (s.prototype.invoke = function (e, t, n) {
                        this._normalQueue.push(e, t, n), this._queueTick();
                      }),
                      (s.prototype.settlePromises = function (e) {
                        this._normalQueue._pushOne(e), this._queueTick();
                      }),
                      (s.prototype._drainQueues = function () {
                        a(this._normalQueue),
                          this._reset(),
                          (this._haveDrainedQueues = !0),
                          a(this._lateQueue);
                      }),
                      (s.prototype._queueTick = function () {
                        this._isTickUsed ||
                          ((this._isTickUsed = !0),
                          this._schedule(this.drainQueues));
                      }),
                      (s.prototype._reset = function () {
                        this._isTickUsed = !1;
                      }),
                      (t.exports = s),
                      (t.exports.firstLineError = i);
                  },
                  { "./queue": 26, "./schedule": 29 },
                ],
                3: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (r, s, a, l) {
                      function n(e, t) {
                        this._reject(t);
                      }
                      function c(e, t) {
                        (t.promiseRejectionQueued = !0),
                          t.bindingPromise._then(n, n, null, this, e);
                      }
                      function u(e, t) {
                        0 == (50397184 & this._bitField) &&
                          this._resolveCallback(t.target);
                      }
                      function d(e, t) {
                        t.promiseRejectionQueued || this._reject(e);
                      }
                      var p = !1;
                      (r.prototype.bind = function (e) {
                        p ||
                          ((p = !0),
                          (r.prototype._propagateFrom =
                            l.propagateFromFunction()),
                          (r.prototype._boundValue = l.boundValueFunction()));
                        var t = a(e),
                          n = new r(s);
                        n._propagateFrom(this, 1);
                        var i = this._target();
                        if ((n._setBoundTo(t), t instanceof r)) {
                          var o = {
                            promiseRejectionQueued: !1,
                            promise: n,
                            target: i,
                            bindingPromise: t,
                          };
                          i._then(s, c, void 0, n, o),
                            t._then(u, d, void 0, n, o),
                            n._setOnCancel(t);
                        } else n._resolveCallback(i);
                        return n;
                      }),
                        (r.prototype._setBoundTo = function (e) {
                          void 0 !== e
                            ? ((this._bitField = 2097152 | this._bitField),
                              (this._boundTo = e))
                            : (this._bitField = -2097153 & this._bitField);
                        }),
                        (r.prototype._isBound = function () {
                          return 2097152 == (2097152 & this._bitField);
                        }),
                        (r.bind = function (e, t) {
                          return r.resolve(t).bind(e);
                        });
                    };
                  },
                  {},
                ],
                4: [
                  function (e, t, n) {
                    "use strict";
                    var i;
                    "undefined" != typeof Promise && (i = Promise);
                    var o = e("./promise")();
                    (o.noConflict = function () {
                      try {
                        Promise === o && (Promise = i);
                      } catch (e) {}
                      return o;
                    }),
                      (t.exports = o);
                  },
                  { "./promise": 22 },
                ],
                5: [
                  function (e, t, n) {
                    "use strict";
                    var i = Object.create;
                    if (i) {
                      var o = i(null),
                        r = i(null);
                      o[" size"] = r[" size"] = 0;
                    }
                    t.exports = function (o) {
                      var i,
                        r = e("./util"),
                        s = r.canEvaluate;
                      r.isIdentifier;
                      function t(e, t) {
                        var n;
                        if ((null != e && (n = e[t]), "function" == typeof n))
                          return n;
                        var i =
                          "Object " +
                          r.classString(e) +
                          " has no method '" +
                          r.toString(t) +
                          "'";
                        throw new o.TypeError(i);
                      }
                      function n(e) {
                        return t(e, this.pop()).apply(e, this);
                      }
                      function a(e) {
                        return e[this];
                      }
                      function l(e) {
                        var t = +this;
                        return t < 0 && (t = Math.max(0, t + e.length)), e[t];
                      }
                      (o.prototype.call = function (e) {
                        var t = [].slice.call(arguments, 1);
                        return (
                          t.push(e), this._then(n, void 0, void 0, t, void 0)
                        );
                      }),
                        (o.prototype.get = function (e) {
                          var t;
                          if ("number" == typeof e) t = l;
                          else if (s) {
                            var n = i(e);
                            t = null !== n ? n : a;
                          } else t = a;
                          return this._then(t, void 0, void 0, e, void 0);
                        });
                    };
                  },
                  { "./util": 36 },
                ],
                6: [
                  function (l, e, t) {
                    "use strict";
                    e.exports = function (e, t, n, i) {
                      var o = l("./util"),
                        r = o.tryCatch,
                        s = o.errorObj,
                        a = e._async;
                      (e.prototype.break = e.prototype.cancel =
                        function () {
                          if (!i.cancellation())
                            return this._warn("cancellation is disabled");
                          for (var e = this, t = e; e._isCancellable(); ) {
                            if (!e._cancelBy(t)) {
                              t._isFollowing()
                                ? t._followee().cancel()
                                : t._cancelBranched();
                              break;
                            }
                            var n = e._cancellationParent;
                            if (null == n || !n._isCancellable()) {
                              e._isFollowing()
                                ? e._followee().cancel()
                                : e._cancelBranched();
                              break;
                            }
                            e._isFollowing() && e._followee().cancel(),
                              e._setWillBeCancelled(),
                              (t = e),
                              (e = n);
                          }
                        }),
                        (e.prototype._branchHasCancelled = function () {
                          this._branchesRemainingToCancel--;
                        }),
                        (e.prototype._enoughBranchesHaveCancelled =
                          function () {
                            return (
                              void 0 === this._branchesRemainingToCancel ||
                              this._branchesRemainingToCancel <= 0
                            );
                          }),
                        (e.prototype._cancelBy = function (e) {
                          return e === this
                            ? ((this._branchesRemainingToCancel = 0),
                              this._invokeOnCancel(),
                              !0)
                            : (this._branchHasCancelled(),
                              !!this._enoughBranchesHaveCancelled() &&
                                (this._invokeOnCancel(), !0));
                        }),
                        (e.prototype._cancelBranched = function () {
                          this._enoughBranchesHaveCancelled() && this._cancel();
                        }),
                        (e.prototype._cancel = function () {
                          this._isCancellable() &&
                            (this._setCancelled(),
                            a.invoke(this._cancelPromises, this, void 0));
                        }),
                        (e.prototype._cancelPromises = function () {
                          0 < this._length() && this._settlePromises();
                        }),
                        (e.prototype._unsetOnCancel = function () {
                          this._onCancelField = void 0;
                        }),
                        (e.prototype._isCancellable = function () {
                          return this.isPending() && !this._isCancelled();
                        }),
                        (e.prototype.isCancellable = function () {
                          return this.isPending() && !this.isCancelled();
                        }),
                        (e.prototype._doInvokeOnCancel = function (e, t) {
                          if (o.isArray(e))
                            for (var n = 0; n < e.length; ++n)
                              this._doInvokeOnCancel(e[n], t);
                          else if (void 0 !== e)
                            if ("function" == typeof e) {
                              if (!t) {
                                var i = r(e).call(this._boundValue());
                                i === s &&
                                  (this._attachExtraTrace(i.e),
                                  a.throwLater(i.e));
                              }
                            } else e._resultCancelled(this);
                        }),
                        (e.prototype._invokeOnCancel = function () {
                          var e = this._onCancel();
                          this._unsetOnCancel(),
                            a.invoke(this._doInvokeOnCancel, this, e);
                        }),
                        (e.prototype._invokeInternalOnCancel = function () {
                          this._isCancellable() &&
                            (this._doInvokeOnCancel(this._onCancel(), !0),
                            this._unsetOnCancel());
                        }),
                        (e.prototype._resultCancelled = function () {
                          this.cancel();
                        });
                    };
                  },
                  { "./util": 36 },
                ],
                7: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (d) {
                      var p = e("./util"),
                        f = e("./es5").keys,
                        h = p.tryCatch,
                        g = p.errorObj;
                      return function (l, c, u) {
                        return function (e) {
                          var t = u._boundValue();
                          e: for (var n = 0; n < l.length; ++n) {
                            var i = l[n];
                            if (
                              i === Error ||
                              (null != i && i.prototype instanceof Error)
                            ) {
                              if (e instanceof i) return h(c).call(t, e);
                            } else if ("function" == typeof i) {
                              var o = h(i).call(t, e);
                              if (o === g) return o;
                              if (o) return h(c).call(t, e);
                            } else if (p.isObject(e)) {
                              for (var r = f(i), s = 0; s < r.length; ++s) {
                                var a = r[s];
                                if (i[a] != e[a]) continue e;
                              }
                              return h(c).call(t, e);
                            }
                          }
                          return d;
                        };
                      };
                    };
                  },
                  { "./es5": 13, "./util": 36 },
                ],
                8: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (r) {
                      var s = !1,
                        n = [];
                      function a() {
                        this._trace = new a.CapturedTrace(l());
                      }
                      function l() {
                        var e = n.length - 1;
                        if (0 <= e) return n[e];
                      }
                      return (
                        (r.prototype._promiseCreated = function () {}),
                        (r.prototype._pushContext = function () {}),
                        (r.prototype._popContext = function () {
                          return null;
                        }),
                        (r._peekContext = r.prototype._peekContext =
                          function () {}),
                        (a.prototype._pushContext = function () {
                          void 0 !== this._trace &&
                            ((this._trace._promiseCreated = null),
                            n.push(this._trace));
                        }),
                        (a.prototype._popContext = function () {
                          if (void 0 === this._trace) return null;
                          var e = n.pop(),
                            t = e._promiseCreated;
                          return (e._promiseCreated = null), t;
                        }),
                        (a.CapturedTrace = null),
                        (a.create = function () {
                          if (s) return new a();
                        }),
                        (a.deactivateLongStackTraces = function () {}),
                        (a.activateLongStackTraces = function () {
                          var e = r.prototype._pushContext,
                            t = r.prototype._popContext,
                            n = r._peekContext,
                            i = r.prototype._peekContext,
                            o = r.prototype._promiseCreated;
                          (a.deactivateLongStackTraces = function () {
                            (r.prototype._pushContext = e),
                              (r.prototype._popContext = t),
                              (r._peekContext = n),
                              (r.prototype._peekContext = i),
                              (r.prototype._promiseCreated = o),
                              (s = !1);
                          }),
                            (s = !0),
                            (r.prototype._pushContext =
                              a.prototype._pushContext),
                            (r.prototype._popContext = a.prototype._popContext),
                            (r._peekContext = r.prototype._peekContext = l),
                            (r.prototype._promiseCreated = function () {
                              var e = this._peekContext();
                              e &&
                                null == e._promiseCreated &&
                                (e._promiseCreated = this);
                            });
                        }),
                        a
                      );
                    };
                  },
                  {},
                ],
                9: [
                  function (oe, e, t) {
                    "use strict";
                    e.exports = function (s, i, o, r) {
                      var n,
                        a,
                        l,
                        e,
                        t,
                        c = s._async,
                        u = oe("./errors").Warning,
                        d = oe("./util"),
                        p = oe("./es5"),
                        f = d.canAttachTrace,
                        h =
                          /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
                        g = /\((?:timers\.js):\d+:\d+\)/,
                        v = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
                        y = null,
                        m = null,
                        b = !1,
                        _ = !(0 == d.env("BLUEBIRD_DEBUG")),
                        w = !(
                          0 == d.env("BLUEBIRD_WARNINGS") ||
                          (!_ && !d.env("BLUEBIRD_WARNINGS"))
                        ),
                        C = !(
                          0 == d.env("BLUEBIRD_LONG_STACK_TRACES") ||
                          (!_ && !d.env("BLUEBIRD_LONG_STACK_TRACES"))
                        ),
                        k =
                          0 != d.env("BLUEBIRD_W_FORGOTTEN_RETURN") &&
                          (w || !!d.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                      function T() {
                        for (var e = 0; e < t.length; ++e)
                          t[e]._notifyUnhandledRejection();
                        x();
                      }
                      function x() {
                        t.length = 0;
                      }
                      (t = []),
                        (e = function (e) {
                          t.push(e), setTimeout(T, 1);
                        }),
                        p.defineProperty(s, "_unhandledRejectionCheck", {
                          value: T,
                        }),
                        p.defineProperty(s, "_unhandledRejectionClear", {
                          value: x,
                        }),
                        (s.prototype.suppressUnhandledRejections = function () {
                          var e = this._target();
                          e._bitField = (-1048577 & e._bitField) | 524288;
                        }),
                        (s.prototype._ensurePossibleRejectionHandled =
                          function () {
                            0 == (524288 & this._bitField) &&
                              (this._setRejectionIsUnhandled(), e(this));
                          }),
                        (s.prototype._notifyUnhandledRejectionIsHandled =
                          function () {
                            G("rejectionHandled", n, void 0, this);
                          }),
                        (s.prototype._setReturnedNonUndefined = function () {
                          this._bitField = 268435456 | this._bitField;
                        }),
                        (s.prototype._returnedNonUndefined = function () {
                          return 0 != (268435456 & this._bitField);
                        }),
                        (s.prototype._notifyUnhandledRejection = function () {
                          if (this._isRejectionUnhandled()) {
                            var e = this._settledValue();
                            this._setUnhandledRejectionIsNotified(),
                              G("unhandledRejection", a, e, this);
                          }
                        }),
                        (s.prototype._setUnhandledRejectionIsNotified =
                          function () {
                            this._bitField = 262144 | this._bitField;
                          }),
                        (s.prototype._unsetUnhandledRejectionIsNotified =
                          function () {
                            this._bitField = -262145 & this._bitField;
                          }),
                        (s.prototype._isUnhandledRejectionNotified =
                          function () {
                            return 0 < (262144 & this._bitField);
                          }),
                        (s.prototype._setRejectionIsUnhandled = function () {
                          this._bitField = 1048576 | this._bitField;
                        }),
                        (s.prototype._unsetRejectionIsUnhandled = function () {
                          (this._bitField = -1048577 & this._bitField),
                            this._isUnhandledRejectionNotified() &&
                              (this._unsetUnhandledRejectionIsNotified(),
                              this._notifyUnhandledRejectionIsHandled());
                        }),
                        (s.prototype._isRejectionUnhandled = function () {
                          return 0 < (1048576 & this._bitField);
                        }),
                        (s.prototype._warn = function (e, t, n) {
                          return W(e, t, n || this);
                        }),
                        (s.onPossiblyUnhandledRejection = function (e) {
                          var t = s._getContext();
                          a = d.contextBind(t, e);
                        }),
                        (s.onUnhandledRejectionHandled = function (e) {
                          var t = s._getContext();
                          n = d.contextBind(t, e);
                        });
                      var S = function () {};
                      (s.longStackTraces = function () {
                        if (c.haveItemsQueued() && !ie.longStackTraces)
                          throw new Error(
                            "cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n"
                          );
                        if (!ie.longStackTraces && J()) {
                          var e = s.prototype._captureStackTrace,
                            t = s.prototype._attachExtraTrace,
                            n = s.prototype._dereferenceTrace;
                          (ie.longStackTraces = !0),
                            (S = function () {
                              if (c.haveItemsQueued() && !ie.longStackTraces)
                                throw new Error(
                                  "cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n"
                                );
                              (s.prototype._captureStackTrace = e),
                                (s.prototype._attachExtraTrace = t),
                                (s.prototype._dereferenceTrace = n),
                                i.deactivateLongStackTraces(),
                                (ie.longStackTraces = !1);
                            }),
                            (s.prototype._captureStackTrace = B),
                            (s.prototype._attachExtraTrace = z),
                            (s.prototype._dereferenceTrace = U),
                            i.activateLongStackTraces();
                        }
                      }),
                        (s.hasLongStackTraces = function () {
                          return ie.longStackTraces && J();
                        });
                      var E = {
                          unhandledrejection: {
                            before: function () {
                              var e = d.global.onunhandledrejection;
                              return (d.global.onunhandledrejection = null), e;
                            },
                            after: function (e) {
                              d.global.onunhandledrejection = e;
                            },
                          },
                          rejectionhandled: {
                            before: function () {
                              var e = d.global.onrejectionhandled;
                              return (d.global.onrejectionhandled = null), e;
                            },
                            after: function (e) {
                              d.global.onrejectionhandled = e;
                            },
                          },
                        },
                        j = (function () {
                          function i(e, t) {
                            if (!e) return !d.global.dispatchEvent(t);
                            var n;
                            try {
                              return (
                                (n = e.before()), !d.global.dispatchEvent(t)
                              );
                            } finally {
                              e.after(n);
                            }
                          }
                          try {
                            if ("function" == typeof CustomEvent) {
                              var e = new CustomEvent("CustomEvent");
                              return (
                                d.global.dispatchEvent(e),
                                function (e, t) {
                                  e = e.toLowerCase();
                                  var n = new CustomEvent(e, {
                                    detail: t,
                                    cancelable: !0,
                                  });
                                  return (
                                    p.defineProperty(n, "promise", {
                                      value: t.promise,
                                    }),
                                    p.defineProperty(n, "reason", {
                                      value: t.reason,
                                    }),
                                    i(E[e], n)
                                  );
                                }
                              );
                            }
                            if ("function" != typeof Event)
                              return (
                                (e =
                                  document.createEvent(
                                    "CustomEvent"
                                  )).initCustomEvent(
                                  "testingtheevent",
                                  !1,
                                  !0,
                                  {}
                                ),
                                d.global.dispatchEvent(e),
                                function (e, t) {
                                  e = e.toLowerCase();
                                  var n = document.createEvent("CustomEvent");
                                  return (
                                    n.initCustomEvent(e, !1, !0, t), i(E[e], n)
                                  );
                                }
                              );
                            var e = new Event("CustomEvent");
                            return (
                              d.global.dispatchEvent(e),
                              function (e, t) {
                                e = e.toLowerCase();
                                var n = new Event(e, { cancelable: !0 });
                                return (
                                  (n.detail = t),
                                  p.defineProperty(n, "promise", {
                                    value: t.promise,
                                  }),
                                  p.defineProperty(n, "reason", {
                                    value: t.reason,
                                  }),
                                  i(E[e], n)
                                );
                              }
                            );
                          } catch (e) {}
                          return function () {
                            return !1;
                          };
                        })(),
                        A = d.isNode
                          ? function () {
                              return re.emit.apply(re, arguments);
                            }
                          : d.global
                          ? function (e) {
                              var t = "on" + e.toLowerCase(),
                                n = d.global[t];
                              return (
                                !!n &&
                                (n.apply(d.global, [].slice.call(arguments, 1)),
                                !0)
                              );
                            }
                          : function () {
                              return !1;
                            };
                      function P(e, t) {
                        return { promise: t };
                      }
                      var O = {
                          promiseCreated: P,
                          promiseFulfilled: P,
                          promiseRejected: P,
                          promiseResolved: P,
                          promiseCancelled: P,
                          promiseChained: function (e, t, n) {
                            return { promise: t, child: n };
                          },
                          warning: function (e, t) {
                            return { warning: t };
                          },
                          unhandledRejection: function (e, t, n) {
                            return { reason: t, promise: n };
                          },
                          rejectionHandled: P,
                        },
                        $ = function (e) {
                          var t = !1;
                          try {
                            t = A.apply(null, arguments);
                          } catch (e) {
                            c.throwLater(e), (t = !0);
                          }
                          var n = !1;
                          try {
                            n = j(e, O[e].apply(null, arguments));
                          } catch (e) {
                            c.throwLater(e), (n = !0);
                          }
                          return n || t;
                        };
                      function D() {
                        return !1;
                      }
                      function I(e, t, n) {
                        var i = this;
                        try {
                          e(t, n, function (e) {
                            if ("function" != typeof e)
                              throw new TypeError(
                                "onCancel must be a function, got: " +
                                  d.toString(e)
                              );
                            i._attachCancellationCallback(e);
                          });
                        } catch (e) {
                          return e;
                        }
                      }
                      function F(e) {
                        if (!this._isCancellable()) return this;
                        var t = this._onCancel();
                        void 0 !== t
                          ? d.isArray(t)
                            ? t.push(e)
                            : this._setOnCancel([t, e])
                          : this._setOnCancel(e);
                      }
                      function H() {
                        return this._onCancelField;
                      }
                      function M(e) {
                        this._onCancelField = e;
                      }
                      function N() {
                        (this._cancellationParent = void 0),
                          (this._onCancelField = void 0);
                      }
                      function R(e, t) {
                        if (0 != (1 & t)) {
                          var n = (this._cancellationParent = e)
                            ._branchesRemainingToCancel;
                          void 0 === n && (n = 0),
                            (e._branchesRemainingToCancel = n + 1);
                        }
                        0 != (2 & t) &&
                          e._isBound() &&
                          this._setBoundTo(e._boundTo);
                      }
                      (s.config = function (e) {
                        if (
                          ("longStackTraces" in (e = Object(e)) &&
                            (e.longStackTraces
                              ? s.longStackTraces()
                              : !e.longStackTraces &&
                                s.hasLongStackTraces() &&
                                S()),
                          "warnings" in e)
                        ) {
                          var t = e.warnings;
                          (ie.warnings = !!t),
                            (k = ie.warnings),
                            d.isObject(t) &&
                              "wForgottenReturn" in t &&
                              (k = !!t.wForgottenReturn);
                        }
                        if (
                          "cancellation" in e &&
                          e.cancellation &&
                          !ie.cancellation
                        ) {
                          if (c.haveItemsQueued())
                            throw new Error(
                              "cannot enable cancellation after promises are in use"
                            );
                          (s.prototype._clearCancellationData = N),
                            (s.prototype._propagateFrom = R),
                            (s.prototype._onCancel = H),
                            (s.prototype._setOnCancel = M),
                            (s.prototype._attachCancellationCallback = F),
                            (s.prototype._execute = I),
                            (L = R),
                            (ie.cancellation = !0);
                        }
                        if (
                          ("monitoring" in e &&
                            (e.monitoring && !ie.monitoring
                              ? ((ie.monitoring = !0),
                                (s.prototype._fireEvent = $))
                              : !e.monitoring &&
                                ie.monitoring &&
                                ((ie.monitoring = !1),
                                (s.prototype._fireEvent = D))),
                          "asyncHooks" in e && d.nodeSupportsAsyncResource)
                        ) {
                          var n = ie.asyncHooks,
                            i = !!e.asyncHooks;
                          n !== i && ((ie.asyncHooks = i) ? o : r)();
                        }
                        return s;
                      }),
                        (s.prototype._fireEvent = D),
                        (s.prototype._execute = function (e, t, n) {
                          try {
                            e(t, n);
                          } catch (e) {
                            return e;
                          }
                        }),
                        (s.prototype._onCancel = function () {}),
                        (s.prototype._setOnCancel = function (e) {}),
                        (s.prototype._attachCancellationCallback = function (
                          e
                        ) {}),
                        (s.prototype._captureStackTrace = function () {}),
                        (s.prototype._attachExtraTrace = function () {}),
                        (s.prototype._dereferenceTrace = function () {}),
                        (s.prototype._clearCancellationData = function () {}),
                        (s.prototype._propagateFrom = function (e, t) {});
                      var L = function (e, t) {
                        0 != (2 & t) &&
                          e._isBound() &&
                          this._setBoundTo(e._boundTo);
                      };
                      function q() {
                        var e = this._boundTo;
                        return void 0 !== e && e instanceof s
                          ? e.isFulfilled()
                            ? e.value()
                            : void 0
                          : e;
                      }
                      function B() {
                        this._trace = new te(this._peekContext());
                      }
                      function z(e, t) {
                        if (f(e)) {
                          var n = this._trace;
                          if (
                            (void 0 !== n && t && (n = n._parent), void 0 !== n)
                          )
                            n.attachExtraTrace(e);
                          else if (!e.__stackCleaned__) {
                            var i = X(e);
                            d.notEnumerableProp(
                              e,
                              "stack",
                              i.message + "\n" + i.stack.join("\n")
                            ),
                              d.notEnumerableProp(e, "__stackCleaned__", !0);
                          }
                        }
                      }
                      function U() {
                        this._trace = void 0;
                      }
                      function W(e, t, n) {
                        if (ie.warnings) {
                          var i,
                            o = new u(e);
                          if (t) n._attachExtraTrace(o);
                          else if (ie.longStackTraces && (i = s._peekContext()))
                            i.attachExtraTrace(o);
                          else {
                            var r = X(o);
                            o.stack = r.message + "\n" + r.stack.join("\n");
                          }
                          $("warning", o) || Q(o, "", !0);
                        }
                      }
                      function V(e) {
                        for (var t = [], n = 0; n < e.length; ++n) {
                          var i = e[n],
                            o = "    (No stack trace)" === i || y.test(i),
                            r = o && K(i);
                          o &&
                            !r &&
                            (b && " " !== i.charAt(0) && (i = "    " + i),
                            t.push(i));
                        }
                        return t;
                      }
                      function X(e) {
                        var t = e.stack,
                          n = e.toString();
                        return (
                          (t =
                            "string" == typeof t && 0 < t.length
                              ? (function (e) {
                                  for (
                                    var t = e.stack
                                        .replace(/\s+$/g, "")
                                        .split("\n"),
                                      n = 0;
                                    n < t.length;
                                    ++n
                                  ) {
                                    var i = t[n];
                                    if (
                                      "    (No stack trace)" === i ||
                                      y.test(i)
                                    )
                                      break;
                                  }
                                  return (
                                    0 < n &&
                                      "SyntaxError" != e.name &&
                                      (t = t.slice(n)),
                                    t
                                  );
                                })(e)
                              : ["    (No stack trace)"]),
                          {
                            message: n,
                            stack: "SyntaxError" == e.name ? t : V(t),
                          }
                        );
                      }
                      function Q(e, t, n) {
                        if ("undefined" != typeof console) {
                          var i;
                          if (d.isObject(e)) {
                            var o = e.stack;
                            i = t + m(o, e);
                          } else i = t + String(e);
                          "function" == typeof l
                            ? l(i, n)
                            : ("function" != typeof console.log &&
                                "object" != typeof console.log) ||
                              console.log(i);
                        }
                      }
                      function G(e, t, n, i) {
                        var o = !1;
                        try {
                          "function" == typeof t &&
                            ((o = !0),
                            "rejectionHandled" === e ? t(i) : t(n, i));
                        } catch (e) {
                          c.throwLater(e);
                        }
                        "unhandledRejection" === e
                          ? $(e, n, i) || o || Q(n, "Unhandled rejection ")
                          : $(e, i);
                      }
                      function Y(e) {
                        var t;
                        if ("function" == typeof e)
                          t = "[function " + (e.name || "anonymous") + "]";
                        else {
                          t =
                            e && "function" == typeof e.toString
                              ? e.toString()
                              : d.toString(e);
                          if (/\[object [a-zA-Z0-9$_]+\]/.test(t))
                            try {
                              t = JSON.stringify(e);
                            } catch (e) {}
                          0 === t.length && (t = "(empty array)");
                        }
                        return (
                          "(<" +
                          (function (e) {
                            if (e.length < 41) return e;
                            return e.substr(0, 38) + "...";
                          })(t) +
                          ">, no stack trace)"
                        );
                      }
                      function J() {
                        return "function" == typeof ne;
                      }
                      var K = function () {
                          return !1;
                        },
                        Z = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                      function ee(e) {
                        var t = e.match(Z);
                        if (t)
                          return { fileName: t[1], line: parseInt(t[2], 10) };
                      }
                      function te(e) {
                        (this._parent = e), (this._promisesCreated = 0);
                        var t = (this._length =
                          1 + (void 0 === e ? 0 : e._length));
                        ne(this, te), 32 < t && this.uncycle();
                      }
                      d.inherits(te, Error),
                        ((i.CapturedTrace = te).prototype.uncycle =
                          function () {
                            var e = this._length;
                            if (!(e < 2)) {
                              for (
                                var t = [], n = {}, i = 0, o = this;
                                void 0 !== o;
                                ++i
                              )
                                t.push(o), (o = o._parent);
                              for (
                                i = (e = this._length = i) - 1;
                                0 <= i;
                                --i
                              ) {
                                var r = t[i].stack;
                                void 0 === n[r] && (n[r] = i);
                              }
                              for (i = 0; i < e; ++i) {
                                var s = n[t[i].stack];
                                if (void 0 !== s && s !== i) {
                                  0 < s &&
                                    ((t[s - 1]._parent = void 0),
                                    (t[s - 1]._length = 1)),
                                    (t[i]._parent = void 0),
                                    (t[i]._length = 1);
                                  var a = 0 < i ? t[i - 1] : this;
                                  s < e - 1
                                    ? ((a._parent = t[s + 1]),
                                      a._parent.uncycle(),
                                      (a._length = a._parent._length + 1))
                                    : ((a._parent = void 0), (a._length = 1));
                                  for (
                                    var l = a._length + 1, c = i - 2;
                                    0 <= c;
                                    --c
                                  )
                                    (t[c]._length = l), l++;
                                  return;
                                }
                              }
                            }
                          }),
                        (te.prototype.attachExtraTrace = function (e) {
                          if (!e.__stackCleaned__) {
                            this.uncycle();
                            for (
                              var t = X(e),
                                n = t.message,
                                i = [t.stack],
                                o = this;
                              void 0 !== o;

                            )
                              i.push(V(o.stack.split("\n"))), (o = o._parent);
                            !(function (e) {
                              for (var t = e[0], n = 1; n < e.length; ++n) {
                                for (
                                  var i = e[n],
                                    o = t.length - 1,
                                    r = t[o],
                                    s = -1,
                                    a = i.length - 1;
                                  0 <= a;
                                  --a
                                )
                                  if (i[a] === r) {
                                    s = a;
                                    break;
                                  }
                                for (a = s; 0 <= a; --a) {
                                  var l = i[a];
                                  if (t[o] !== l) break;
                                  t.pop(), o--;
                                }
                                t = i;
                              }
                            })(i),
                              (function (e) {
                                for (var t = 0; t < e.length; ++t)
                                  (0 === e[t].length ||
                                    (t + 1 < e.length &&
                                      e[t][0] === e[t + 1][0])) &&
                                    (e.splice(t, 1), t--);
                              })(i),
                              d.notEnumerableProp(
                                e,
                                "stack",
                                (function (e, t) {
                                  for (var n = 0; n < t.length - 1; ++n)
                                    t[n].push("From previous event:"),
                                      (t[n] = t[n].join("\n"));
                                  return (
                                    n < t.length && (t[n] = t[n].join("\n")),
                                    e + "\n" + t.join("\n")
                                  );
                                })(n, i)
                              ),
                              d.notEnumerableProp(e, "__stackCleaned__", !0);
                          }
                        });
                      var ne = (function () {
                        function e(e, t) {
                          return "string" == typeof e
                            ? e
                            : void 0 !== t.name && void 0 !== t.message
                            ? t.toString()
                            : Y(t);
                        }
                        var t = /^\s*at\s*/;
                        if (
                          "number" == typeof Error.stackTraceLimit &&
                          "function" == typeof Error.captureStackTrace
                        ) {
                          (Error.stackTraceLimit += 6), (y = t), (m = e);
                          var n = Error.captureStackTrace;
                          return (
                            (K = function (e) {
                              return h.test(e);
                            }),
                            function (e, t) {
                              (Error.stackTraceLimit += 6),
                                n(e, t),
                                (Error.stackTraceLimit -= 6);
                            }
                          );
                        }
                        var i,
                          o = new Error();
                        if (
                          "string" == typeof o.stack &&
                          0 <= o.stack.split("\n")[0].indexOf("stackDetection@")
                        )
                          return (
                            (y = /@/),
                            (m = e),
                            (b = !0),
                            function (e) {
                              e.stack = new Error().stack;
                            }
                          );
                        try {
                          throw new Error();
                        } catch (e) {
                          i = "stack" in e;
                        }
                        return "stack" in o ||
                          !i ||
                          "number" != typeof Error.stackTraceLimit
                          ? ((m = function (e, t) {
                              return "string" == typeof e
                                ? e
                                : ("object" != typeof t &&
                                    "function" != typeof t) ||
                                  void 0 === t.name ||
                                  void 0 === t.message
                                ? Y(t)
                                : t.toString();
                            }),
                            null)
                          : ((y = t),
                            (m = e),
                            function (t) {
                              Error.stackTraceLimit += 6;
                              try {
                                throw new Error();
                              } catch (e) {
                                t.stack = e.stack;
                              }
                              Error.stackTraceLimit -= 6;
                            });
                      })();
                      "undefined" != typeof console &&
                        void 0 !== console.warn &&
                        ((l = function (e) {
                          console.warn(e);
                        }),
                        d.isNode && re.stderr.isTTY
                          ? (l = function (e, t) {
                              var n = t ? "[33m" : "[31m";
                              console.warn(n + e + "[0m\n");
                            })
                          : d.isNode ||
                            "string" != typeof new Error().stack ||
                            (l = function (e, t) {
                              console.warn(
                                "%c" + e,
                                t ? "color: darkorange" : "color: red"
                              );
                            }));
                      var ie = {
                        warnings: w,
                        longStackTraces: !1,
                        cancellation: !1,
                        monitoring: !1,
                        asyncHooks: !1,
                      };
                      return (
                        C && s.longStackTraces(),
                        {
                          asyncHooks: function () {
                            return ie.asyncHooks;
                          },
                          longStackTraces: function () {
                            return ie.longStackTraces;
                          },
                          warnings: function () {
                            return ie.warnings;
                          },
                          cancellation: function () {
                            return ie.cancellation;
                          },
                          monitoring: function () {
                            return ie.monitoring;
                          },
                          propagateFromFunction: function () {
                            return L;
                          },
                          boundValueFunction: function () {
                            return q;
                          },
                          checkForgottenReturns: function (e, t, n, i, o) {
                            if (void 0 === e && null !== t && k) {
                              if (void 0 !== o && o._returnedNonUndefined())
                                return;
                              if (0 == (65535 & i._bitField)) return;
                              n && (n += " ");
                              var r = "",
                                s = "";
                              if (t._trace) {
                                for (
                                  var a = t._trace.stack.split("\n"),
                                    l = V(a),
                                    c = l.length - 1;
                                  0 <= c;
                                  --c
                                ) {
                                  var u = l[c];
                                  if (!g.test(u)) {
                                    var d = u.match(v);
                                    d &&
                                      (r =
                                        "at " +
                                        d[1] +
                                        ":" +
                                        d[2] +
                                        ":" +
                                        d[3] +
                                        " ");
                                    break;
                                  }
                                }
                                if (0 < l.length) {
                                  var p = l[0];
                                  for (c = 0; c < a.length; ++c)
                                    if (a[c] === p) {
                                      0 < c && (s = "\n" + a[c - 1]);
                                      break;
                                    }
                                }
                              }
                              var f =
                                "a promise was created in a " +
                                n +
                                "handler " +
                                r +
                                "but was not returned from it, see http://goo.gl/rRqMUw" +
                                s;
                              i._warn(f, !0, t);
                            }
                          },
                          setBounds: function (e, t) {
                            if (J()) {
                              for (
                                var n,
                                  i,
                                  o = (e.stack || "").split("\n"),
                                  r = (t.stack || "").split("\n"),
                                  s = -1,
                                  a = -1,
                                  l = 0;
                                l < o.length;
                                ++l
                              ) {
                                if ((c = ee(o[l]))) {
                                  (n = c.fileName), (s = c.line);
                                  break;
                                }
                              }
                              for (l = 0; l < r.length; ++l) {
                                var c;
                                if ((c = ee(r[l]))) {
                                  (i = c.fileName), (a = c.line);
                                  break;
                                }
                              }
                              s < 0 ||
                                a < 0 ||
                                !n ||
                                !i ||
                                n !== i ||
                                a <= s ||
                                (K = function (e) {
                                  if (h.test(e)) return !0;
                                  var t = ee(e);
                                  return !!(
                                    t &&
                                    t.fileName === n &&
                                    s <= t.line &&
                                    t.line <= a
                                  );
                                });
                            }
                          },
                          warn: W,
                          deprecated: function (e, t) {
                            var n =
                              e +
                              " is deprecated and will be removed in a future version.";
                            return t && (n += " Use " + t + " instead."), W(n);
                          },
                          CapturedTrace: te,
                          fireDomEvent: j,
                          fireGlobalEvent: A,
                        }
                      );
                    };
                  },
                  { "./errors": 12, "./es5": 13, "./util": 36 },
                ],
                10: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (n) {
                      function i() {
                        return this.value;
                      }
                      function o() {
                        throw this.reason;
                      }
                      (n.prototype.return = n.prototype.thenReturn =
                        function (e) {
                          return (
                            e instanceof n && e.suppressUnhandledRejections(),
                            this._then(i, void 0, void 0, { value: e }, void 0)
                          );
                        }),
                        (n.prototype.throw = n.prototype.thenThrow =
                          function (e) {
                            return this._then(
                              o,
                              void 0,
                              void 0,
                              { reason: e },
                              void 0
                            );
                          }),
                        (n.prototype.catchThrow = function (e) {
                          if (arguments.length <= 1)
                            return this._then(
                              void 0,
                              o,
                              void 0,
                              { reason: e },
                              void 0
                            );
                          var t = arguments[1];
                          return this.caught(e, function () {
                            throw t;
                          });
                        }),
                        (n.prototype.catchReturn = function (e) {
                          if (arguments.length <= 1)
                            return (
                              e instanceof n && e.suppressUnhandledRejections(),
                              this._then(
                                void 0,
                                i,
                                void 0,
                                { value: e },
                                void 0
                              )
                            );
                          var t = arguments[1];
                          t instanceof n && t.suppressUnhandledRejections();
                          return this.caught(e, function () {
                            return t;
                          });
                        });
                    };
                  },
                  {},
                ],
                11: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (e, n) {
                      var i = e.reduce,
                        t = e.all;
                      function o() {
                        return t(this);
                      }
                      (e.prototype.each = function (e) {
                        return i(this, e, n, 0)._then(
                          o,
                          void 0,
                          void 0,
                          this,
                          void 0
                        );
                      }),
                        (e.prototype.mapSeries = function (e) {
                          return i(this, e, n, n);
                        }),
                        (e.each = function (e, t) {
                          return i(e, t, n, 0)._then(
                            o,
                            void 0,
                            void 0,
                            e,
                            void 0
                          );
                        }),
                        (e.mapSeries = function (e, t) {
                          return i(e, t, n, n);
                        });
                    };
                  },
                  {},
                ],
                12: [
                  function (e, t, n) {
                    "use strict";
                    var i,
                      o,
                      r = e("./es5"),
                      s = r.freeze,
                      a = e("./util"),
                      l = a.inherits,
                      c = a.notEnumerableProp;
                    function u(t, n) {
                      function i(e) {
                        if (!(this instanceof i)) return new i(e);
                        c(this, "message", "string" == typeof e ? e : n),
                          c(this, "name", t),
                          Error.captureStackTrace
                            ? Error.captureStackTrace(this, this.constructor)
                            : Error.call(this);
                      }
                      return l(i, Error), i;
                    }
                    var d = u("Warning", "warning"),
                      p = u("CancellationError", "cancellation error"),
                      f = u("TimeoutError", "timeout error"),
                      h = u("AggregateError", "aggregate error");
                    try {
                      (i = TypeError), (o = RangeError);
                    } catch (e) {
                      (i = u("TypeError", "type error")),
                        (o = u("RangeError", "range error"));
                    }
                    for (
                      var g =
                          "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(
                            " "
                          ),
                        v = 0;
                      v < g.length;
                      ++v
                    )
                      "function" == typeof Array.prototype[g[v]] &&
                        (h.prototype[g[v]] = Array.prototype[g[v]]);
                    r.defineProperty(h.prototype, "length", {
                      value: 0,
                      configurable: !1,
                      writable: !0,
                      enumerable: !0,
                    }),
                      (h.prototype.isOperational = !0);
                    var y = 0;
                    function m(e) {
                      if (!(this instanceof m)) return new m(e);
                      c(this, "name", "OperationalError"),
                        c(this, "message", e),
                        (this.cause = e),
                        (this.isOperational = !0),
                        e instanceof Error
                          ? (c(this, "message", e.message),
                            c(this, "stack", e.stack))
                          : Error.captureStackTrace &&
                            Error.captureStackTrace(this, this.constructor);
                    }
                    (h.prototype.toString = function () {
                      var e = Array(4 * y + 1).join(" "),
                        t = "\n" + e + "AggregateError of:\n";
                      y++, (e = Array(4 * y + 1).join(" "));
                      for (var n = 0; n < this.length; ++n) {
                        for (
                          var i =
                              this[n] === this
                                ? "[Circular AggregateError]"
                                : this[n] + "",
                            o = i.split("\n"),
                            r = 0;
                          r < o.length;
                          ++r
                        )
                          o[r] = e + o[r];
                        t += (i = o.join("\n")) + "\n";
                      }
                      return y--, t;
                    }),
                      l(m, Error);
                    var b = Error.__BluebirdErrorTypes__;
                    b ||
                      ((b = s({
                        CancellationError: p,
                        TimeoutError: f,
                        OperationalError: m,
                        RejectionError: m,
                        AggregateError: h,
                      })),
                      r.defineProperty(Error, "__BluebirdErrorTypes__", {
                        value: b,
                        writable: !1,
                        enumerable: !1,
                        configurable: !1,
                      })),
                      (t.exports = {
                        Error: Error,
                        TypeError: i,
                        RangeError: o,
                        CancellationError: b.CancellationError,
                        OperationalError: b.OperationalError,
                        TimeoutError: b.TimeoutError,
                        AggregateError: b.AggregateError,
                        Warning: d,
                      });
                  },
                  { "./es5": 13, "./util": 36 },
                ],
                13: [
                  function (e, t, n) {
                    var i = (function () {
                      "use strict";
                      return void 0 === this;
                    })();
                    if (i)
                      t.exports = {
                        freeze: Object.freeze,
                        defineProperty: Object.defineProperty,
                        getDescriptor: Object.getOwnPropertyDescriptor,
                        keys: Object.keys,
                        names: Object.getOwnPropertyNames,
                        getPrototypeOf: Object.getPrototypeOf,
                        isArray: Array.isArray,
                        isES5: i,
                        propertyIsWritable: function (e, t) {
                          var n = Object.getOwnPropertyDescriptor(e, t);
                          return !(n && !n.writable && !n.set);
                        },
                      };
                    else {
                      function o(e) {
                        var t = [];
                        for (var n in e) r.call(e, n) && t.push(n);
                        return t;
                      }
                      var r = {}.hasOwnProperty,
                        s = {}.toString,
                        a = {}.constructor.prototype;
                      t.exports = {
                        isArray: function (e) {
                          try {
                            return "[object Array]" === s.call(e);
                          } catch (e) {
                            return !1;
                          }
                        },
                        keys: o,
                        names: o,
                        defineProperty: function (e, t, n) {
                          return (e[t] = n.value), e;
                        },
                        getDescriptor: function (e, t) {
                          return { value: e[t] };
                        },
                        freeze: function (e) {
                          return e;
                        },
                        getPrototypeOf: function (e) {
                          try {
                            return Object(e).constructor.prototype;
                          } catch (e) {
                            return a;
                          }
                        },
                        isES5: i,
                        propertyIsWritable: function () {
                          return !0;
                        },
                      };
                    }
                  },
                  {},
                ],
                14: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (e, i) {
                      var o = e.map;
                      (e.prototype.filter = function (e, t) {
                        return o(this, e, t, i);
                      }),
                        (e.filter = function (e, t, n) {
                          return o(e, t, n, i);
                        });
                    };
                  },
                  {},
                ],
                15: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (a, s, l) {
                      var c = e("./util"),
                        u = a.CancellationError,
                        d = c.errorObj,
                        p = e("./catch_filter")(l);
                      function o(e, t, n) {
                        (this.promise = e),
                          (this.type = t),
                          (this.handler = n),
                          (this.called = !1),
                          (this.cancelPromise = null);
                      }
                      function f(e) {
                        this.finallyHandler = e;
                      }
                      function h(e, t) {
                        return (
                          null != e.cancelPromise &&
                          (1 < arguments.length
                            ? e.cancelPromise._reject(t)
                            : e.cancelPromise._cancel(),
                          (e.cancelPromise = null),
                          1)
                        );
                      }
                      function g() {
                        return y.call(
                          this,
                          this.promise._target()._settledValue()
                        );
                      }
                      function v(e) {
                        if (!h(this, e)) return (d.e = e), d;
                      }
                      function y(e) {
                        var t = this.promise,
                          n = this.handler;
                        if (!this.called) {
                          this.called = !0;
                          var i = this.isFinallyHandler()
                            ? n.call(t._boundValue())
                            : n.call(t._boundValue(), e);
                          if (i === l) return i;
                          if (void 0 !== i) {
                            t._setReturnedNonUndefined();
                            var o = s(i, t);
                            if (o instanceof a) {
                              if (null != this.cancelPromise) {
                                if (o._isCancelled()) {
                                  var r = new u("late cancellation observer");
                                  return t._attachExtraTrace(r), (d.e = r), d;
                                }
                                o.isPending() &&
                                  o._attachCancellationCallback(new f(this));
                              }
                              return o._then(g, v, void 0, this, void 0);
                            }
                          }
                        }
                        return t.isRejected()
                          ? (h(this), (d.e = e), d)
                          : (h(this), e);
                      }
                      return (
                        (o.prototype.isFinallyHandler = function () {
                          return 0 === this.type;
                        }),
                        (f.prototype._resultCancelled = function () {
                          h(this.finallyHandler);
                        }),
                        (a.prototype._passThrough = function (e, t, n, i) {
                          return "function" != typeof e
                            ? this.then()
                            : this._then(
                                n,
                                i,
                                void 0,
                                new o(this, t, e),
                                void 0
                              );
                        }),
                        (a.prototype.lastly = a.prototype.finally =
                          function (e) {
                            return this._passThrough(e, 0, y, y);
                          }),
                        (a.prototype.tap = function (e) {
                          return this._passThrough(e, 1, y);
                        }),
                        (a.prototype.tapCatch = function (e) {
                          var t = arguments.length;
                          if (1 === t)
                            return this._passThrough(e, 1, void 0, y);
                          var n,
                            i = new Array(t - 1),
                            o = 0;
                          for (n = 0; n < t - 1; ++n) {
                            var r = arguments[n];
                            if (!c.isObject(r))
                              return a.reject(
                                new TypeError(
                                  "tapCatch statement predicate: expecting an object but got " +
                                    c.classString(r)
                                )
                              );
                            i[o++] = r;
                          }
                          i.length = o;
                          var s = arguments[n];
                          return this._passThrough(p(i, s, this), 1, void 0, y);
                        }),
                        o
                      );
                    };
                  },
                  { "./catch_filter": 7, "./util": 36 },
                ],
                16: [
                  function (n, e, t) {
                    "use strict";
                    e.exports = function (a, i, s, l, e, c) {
                      var u = n("./errors").TypeError,
                        t = n("./util"),
                        d = t.errorObj,
                        p = t.tryCatch,
                        f = [];
                      function h(e, t, n, i) {
                        if (c.cancellation()) {
                          var o = new a(s),
                            r = (this._finallyPromise = new a(s));
                          (this._promise = o.lastly(function () {
                            return r;
                          })),
                            o._captureStackTrace(),
                            o._setOnCancel(this);
                        } else {
                          (this._promise = new a(s))._captureStackTrace();
                        }
                        (this._stack = i),
                          (this._generatorFunction = e),
                          (this._receiver = t),
                          (this._generator = void 0),
                          (this._yieldHandlers =
                            "function" == typeof n ? [n].concat(f) : f),
                          (this._yieldedPromise = null),
                          (this._cancellationPhase = !1);
                      }
                      t.inherits(h, e),
                        (h.prototype._isResolved = function () {
                          return null === this._promise;
                        }),
                        (h.prototype._cleanup = function () {
                          (this._promise = this._generator = null),
                            c.cancellation() &&
                              null !== this._finallyPromise &&
                              (this._finallyPromise._fulfill(),
                              (this._finallyPromise = null));
                        }),
                        (h.prototype._promiseCancelled = function () {
                          if (!this._isResolved()) {
                            var e;
                            if (void 0 !== this._generator.return)
                              this._promise._pushContext(),
                                (e = p(this._generator.return).call(
                                  this._generator,
                                  void 0
                                )),
                                this._promise._popContext();
                            else {
                              var t = new a.CancellationError(
                                "generator .return() sentinel"
                              );
                              (a.coroutine.returnSentinel = t),
                                this._promise._attachExtraTrace(t),
                                this._promise._pushContext(),
                                (e = p(this._generator.throw).call(
                                  this._generator,
                                  t
                                )),
                                this._promise._popContext();
                            }
                            (this._cancellationPhase = !0),
                              (this._yieldedPromise = null),
                              this._continue(e);
                          }
                        }),
                        (h.prototype._promiseFulfilled = function (e) {
                          (this._yieldedPromise = null),
                            this._promise._pushContext();
                          var t = p(this._generator.next).call(
                            this._generator,
                            e
                          );
                          this._promise._popContext(), this._continue(t);
                        }),
                        (h.prototype._promiseRejected = function (e) {
                          (this._yieldedPromise = null),
                            this._promise._attachExtraTrace(e),
                            this._promise._pushContext();
                          var t = p(this._generator.throw).call(
                            this._generator,
                            e
                          );
                          this._promise._popContext(), this._continue(t);
                        }),
                        (h.prototype._resultCancelled = function () {
                          if (this._yieldedPromise instanceof a) {
                            var e = this._yieldedPromise;
                            (this._yieldedPromise = null), e.cancel();
                          }
                        }),
                        (h.prototype.promise = function () {
                          return this._promise;
                        }),
                        (h.prototype._run = function () {
                          (this._generator = this._generatorFunction.call(
                            this._receiver
                          )),
                            (this._receiver = this._generatorFunction = void 0),
                            this._promiseFulfilled(void 0);
                        }),
                        (h.prototype._continue = function (e) {
                          var t = this._promise;
                          if (e === d)
                            return (
                              this._cleanup(),
                              this._cancellationPhase
                                ? t.cancel()
                                : t._rejectCallback(e.e, !1)
                            );
                          var n = e.value;
                          if (!0 === e.done)
                            return (
                              this._cleanup(),
                              this._cancellationPhase
                                ? t.cancel()
                                : t._resolveCallback(n)
                            );
                          var i = l(n, this._promise);
                          if (
                            i instanceof a ||
                            null !==
                              (i = (function (e, t, n) {
                                for (var i = 0; i < t.length; ++i) {
                                  n._pushContext();
                                  var o = p(t[i])(e);
                                  if ((n._popContext(), o === d)) {
                                    n._pushContext();
                                    var r = a.reject(d.e);
                                    return n._popContext(), r;
                                  }
                                  var s = l(o, n);
                                  if (s instanceof a) return s;
                                }
                                return null;
                              })(i, this._yieldHandlers, this._promise))
                          ) {
                            var o = (i = i._target())._bitField;
                            0 == (50397184 & o)
                              ? (this._yieldedPromise = i)._proxy(this, null)
                              : 0 != (33554432 & o)
                              ? a._async.invoke(
                                  this._promiseFulfilled,
                                  this,
                                  i._value()
                                )
                              : 0 != (16777216 & o)
                              ? a._async.invoke(
                                  this._promiseRejected,
                                  this,
                                  i._reason()
                                )
                              : this._promiseCancelled();
                          } else
                            this._promiseRejected(
                              new u(
                                "A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace(
                                  "%s",
                                  String(n)
                                ) +
                                  "From coroutine:\n" +
                                  this._stack
                                    .split("\n")
                                    .slice(1, -7)
                                    .join("\n")
                              )
                            );
                        }),
                        (a.coroutine = function (i, e) {
                          if ("function" != typeof i)
                            throw new u(
                              "generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n"
                            );
                          var o = Object(e).yieldHandler,
                            r = h,
                            s = new Error().stack;
                          return function () {
                            var e = i.apply(this, arguments),
                              t = new r(void 0, void 0, o, s),
                              n = t.promise();
                            return (
                              (t._generator = e), t._promiseFulfilled(void 0), n
                            );
                          };
                        }),
                        (a.coroutine.addYieldHandler = function (e) {
                          if ("function" != typeof e)
                            throw new u(
                              "expecting a function but got " + t.classString(e)
                            );
                          f.push(e);
                        }),
                        (a.spawn = function (e) {
                          if (
                            (c.deprecated(
                              "Promise.spawn()",
                              "Promise.coroutine()"
                            ),
                            "function" != typeof e)
                          )
                            return i(
                              "generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n"
                            );
                          var t = new h(e, this),
                            n = t.promise();
                          return t._run(a.spawn), n;
                        });
                    };
                  },
                  { "./errors": 12, "./util": 36 },
                ],
                17: [
                  function (s, e, t) {
                    "use strict";
                    e.exports = function (e, o, t, n, i) {
                      var r = s("./util");
                      r.canEvaluate, r.tryCatch, r.errorObj;
                      e.join = function () {
                        var e,
                          t = arguments.length - 1;
                        0 < t &&
                          "function" == typeof arguments[t] &&
                          (e = arguments[t]);
                        var n = [].slice.call(arguments);
                        e && n.pop();
                        var i = new o(n).promise();
                        return void 0 !== e ? i.spread(e) : i;
                      };
                    };
                  },
                  { "./util": 36 },
                ],
                18: [
                  function (t, e, n) {
                    "use strict";
                    e.exports = function (f, e, r, h, a, g) {
                      var l = t("./util"),
                        v = l.tryCatch,
                        y = l.errorObj,
                        c = f._async;
                      function s(e, t, n, i) {
                        this.constructor$(e),
                          this._promise._captureStackTrace();
                        var o = f._getContext();
                        if (
                          ((this._callback = l.contextBind(o, t)),
                          (this._preservedValues =
                            i === a ? new Array(this.length()) : null),
                          (this._limit = n),
                          (this._inFlight = 0),
                          (this._queue = []),
                          c.invoke(this._asyncInit, this, void 0),
                          l.isArray(e))
                        )
                          for (var r = 0; r < e.length; ++r) {
                            var s = e[r];
                            s instanceof f && s.suppressUnhandledRejections();
                          }
                      }
                      function o(e, t, n, i) {
                        if ("function" != typeof t)
                          return r(
                            "expecting a function but got " + l.classString(t)
                          );
                        var o = 0;
                        if (void 0 !== n) {
                          if ("object" != typeof n || null === n)
                            return f.reject(
                              new TypeError(
                                "options argument must be an object but it is " +
                                  l.classString(n)
                              )
                            );
                          if ("number" != typeof n.concurrency)
                            return f.reject(
                              new TypeError(
                                "'concurrency' must be a number but it is " +
                                  l.classString(n.concurrency)
                              )
                            );
                          o = n.concurrency;
                        }
                        return new s(
                          e,
                          t,
                          (o =
                            "number" == typeof o && isFinite(o) && 1 <= o
                              ? o
                              : 0),
                          i
                        ).promise();
                      }
                      l.inherits(s, e),
                        (s.prototype._asyncInit = function () {
                          this._init$(void 0, -2);
                        }),
                        (s.prototype._init = function () {}),
                        (s.prototype._promiseFulfilled = function (e, t) {
                          var n = this._values,
                            i = this.length(),
                            o = this._preservedValues,
                            r = this._limit;
                          if (t < 0) {
                            if (
                              ((n[(t = -1 * t - 1)] = e),
                              1 <= r &&
                                (this._inFlight--,
                                this._drainQueue(),
                                this._isResolved()))
                            )
                              return !0;
                          } else {
                            if (1 <= r && this._inFlight >= r)
                              return (n[t] = e), this._queue.push(t), !1;
                            null !== o && (o[t] = e);
                            var s = this._promise,
                              a = this._callback,
                              l = s._boundValue();
                            s._pushContext();
                            var c = v(a).call(l, e, t, i),
                              u = s._popContext();
                            if (
                              (g.checkForgottenReturns(
                                c,
                                u,
                                null !== o ? "Promise.filter" : "Promise.map",
                                s
                              ),
                              c === y)
                            )
                              return this._reject(c.e), !0;
                            var d = h(c, this._promise);
                            if (d instanceof f) {
                              var p = (d = d._target())._bitField;
                              if (0 == (50397184 & p))
                                return (
                                  1 <= r && this._inFlight++,
                                  (n[t] = d)._proxy(this, -1 * (t + 1)),
                                  !1
                                );
                              if (0 == (33554432 & p))
                                return (
                                  0 != (16777216 & p)
                                    ? this._reject(d._reason())
                                    : this._cancel(),
                                  !0
                                );
                              c = d._value();
                            }
                            n[t] = c;
                          }
                          return (
                            i <= ++this._totalResolved &&
                            (null !== o ? this._filter(n, o) : this._resolve(n),
                            !0)
                          );
                        }),
                        (s.prototype._drainQueue = function () {
                          for (
                            var e = this._queue,
                              t = this._limit,
                              n = this._values;
                            0 < e.length && this._inFlight < t;

                          ) {
                            if (this._isResolved()) return;
                            var i = e.pop();
                            this._promiseFulfilled(n[i], i);
                          }
                        }),
                        (s.prototype._filter = function (e, t) {
                          for (
                            var n = t.length, i = new Array(n), o = 0, r = 0;
                            r < n;
                            ++r
                          )
                            e[r] && (i[o++] = t[r]);
                          (i.length = o), this._resolve(i);
                        }),
                        (s.prototype.preservedValues = function () {
                          return this._preservedValues;
                        }),
                        (f.prototype.map = function (e, t) {
                          return o(this, e, t, null);
                        }),
                        (f.map = function (e, t, n, i) {
                          return o(e, t, n, i);
                        });
                    };
                  },
                  { "./util": 36 },
                ],
                19: [
                  function (t, e, n) {
                    "use strict";
                    e.exports = function (s, a, e, l, c) {
                      var u = t("./util"),
                        d = u.tryCatch;
                      (s.method = function (i) {
                        if ("function" != typeof i)
                          throw new s.TypeError(
                            "expecting a function but got " + u.classString(i)
                          );
                        return function () {
                          var e = new s(a);
                          e._captureStackTrace(), e._pushContext();
                          var t = d(i).apply(this, arguments),
                            n = e._popContext();
                          return (
                            c.checkForgottenReturns(t, n, "Promise.method", e),
                            e._resolveFromSyncValue(t),
                            e
                          );
                        };
                      }),
                        (s.attempt = s.try =
                          function (e) {
                            if ("function" != typeof e)
                              return l(
                                "expecting a function but got " +
                                  u.classString(e)
                              );
                            var t,
                              n = new s(a);
                            if (
                              (n._captureStackTrace(),
                              n._pushContext(),
                              1 < arguments.length)
                            ) {
                              c.deprecated(
                                "calling Promise.try with more than 1 argument"
                              );
                              var i = arguments[1],
                                o = arguments[2];
                              t = u.isArray(i)
                                ? d(e).apply(o, i)
                                : d(e).call(o, i);
                            } else t = d(e)();
                            var r = n._popContext();
                            return (
                              c.checkForgottenReturns(t, r, "Promise.try", n),
                              n._resolveFromSyncValue(t),
                              n
                            );
                          }),
                        (s.prototype._resolveFromSyncValue = function (e) {
                          e === u.errorObj
                            ? this._rejectCallback(e.e, !1)
                            : this._resolveCallback(e, !0);
                        });
                    };
                  },
                  { "./util": 36 },
                ],
                20: [
                  function (e, t, n) {
                    "use strict";
                    var s = e("./util"),
                      a = s.maybeWrapAsError,
                      l = e("./errors").OperationalError,
                      c = e("./es5");
                    var u = /^(?:name|message|stack|cause)$/;
                    function d(e) {
                      var t, n;
                      if (
                        (n = e) instanceof Error &&
                        c.getPrototypeOf(n) === Error.prototype
                      ) {
                        ((t = new l(e)).name = e.name),
                          (t.message = e.message),
                          (t.stack = e.stack);
                        for (var i = c.keys(e), o = 0; o < i.length; ++o) {
                          var r = i[o];
                          u.test(r) || (t[r] = e[r]);
                        }
                        return t;
                      }
                      return s.markAsOriginatingFromRejection(e), e;
                    }
                    t.exports = function (o, r) {
                      return function (e, t) {
                        if (null !== o) {
                          if (e) {
                            var n = d(a(e));
                            o._attachExtraTrace(n), o._reject(n);
                          } else if (r) {
                            var i = [].slice.call(arguments, 1);
                            o._fulfill(i);
                          } else o._fulfill(t);
                          o = null;
                        }
                      };
                    };
                  },
                  { "./errors": 12, "./es5": 13, "./util": 36 },
                ],
                21: [
                  function (t, e, n) {
                    "use strict";
                    e.exports = function (e) {
                      var i = t("./util"),
                        o = e._async,
                        r = i.tryCatch,
                        s = i.errorObj;
                      function a(e, t) {
                        if (!i.isArray(e)) return l.call(this, e, t);
                        var n = r(t).apply(
                          this._boundValue(),
                          [null].concat(e)
                        );
                        n === s && o.throwLater(n.e);
                      }
                      function l(e, t) {
                        var n = this._boundValue(),
                          i =
                            void 0 === e
                              ? r(t).call(n, null)
                              : r(t).call(n, null, e);
                        i === s && o.throwLater(i.e);
                      }
                      function c(e, t) {
                        if (!e) {
                          var n = new Error(e + "");
                          (n.cause = e), (e = n);
                        }
                        var i = r(t).call(this._boundValue(), e);
                        i === s && o.throwLater(i.e);
                      }
                      e.prototype.asCallback = e.prototype.nodeify = function (
                        e,
                        t
                      ) {
                        if ("function" == typeof e) {
                          var n = l;
                          void 0 !== t && Object(t).spread && (n = a),
                            this._then(n, c, void 0, this, e);
                        }
                        return this;
                      };
                    };
                  },
                  { "./util": 36 },
                ],
                22: [
                  function (I, F, e) {
                    "use strict";
                    F.exports = function () {
                      function l() {
                        return new p(
                          "circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n"
                        );
                      }
                      function a() {
                        return new P.PromiseInspection(this._target());
                      }
                      function s(e) {
                        return P.reject(new p(e));
                      }
                      function c() {}
                      var u = {},
                        f = I("./util");
                      f.setReflectHandler(a);
                      function e() {
                        var e = re.domain;
                        return void 0 === e ? null : e;
                      }
                      function t() {
                        return { domain: e(), async: null };
                      }
                      function n() {
                        return {
                          domain: e(),
                          async: new i("Bluebird::Promise"),
                        };
                      }
                      var i =
                          f.isNode && f.nodeSupportsAsyncResource
                            ? I("async_hooks").AsyncResource
                            : null,
                        h = f.isNode
                          ? t
                          : function () {
                              return null;
                            };
                      f.notEnumerableProp(P, "_getContext", h);
                      var o = I("./es5"),
                        r = I("./async"),
                        g = new r();
                      o.defineProperty(P, "_async", { value: g });
                      var d = I("./errors"),
                        p = (P.TypeError = d.TypeError);
                      P.RangeError = d.RangeError;
                      var v = (P.CancellationError = d.CancellationError);
                      (P.TimeoutError = d.TimeoutError),
                        (P.OperationalError = d.OperationalError),
                        (P.RejectionError = d.OperationalError),
                        (P.AggregateError = d.AggregateError);
                      var y = function () {},
                        m = {},
                        b = {},
                        _ = I("./thenables")(P, y),
                        w = I("./promise_array")(P, y, _, s, c),
                        C = I("./context")(P),
                        k = C.create,
                        T = I("./debuggability")(
                          P,
                          C,
                          function () {
                            (h = n), f.notEnumerableProp(P, "_getContext", n);
                          },
                          function () {
                            (h = t), f.notEnumerableProp(P, "_getContext", t);
                          }
                        ),
                        x = (T.CapturedTrace, I("./finally")(P, _, b)),
                        S = I("./catch_filter")(b),
                        E = I("./nodeback"),
                        j = f.errorObj,
                        A = f.tryCatch;
                      function P(e) {
                        e !== y &&
                          (function (e, t) {
                            if (null == e || e.constructor !== P)
                              throw new p(
                                "the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n"
                              );
                            if ("function" != typeof t)
                              throw new p(
                                "expecting a function but got " +
                                  f.classString(t)
                              );
                          })(this, e),
                          (this._bitField = 0),
                          (this._fulfillmentHandler0 = void 0),
                          (this._rejectionHandler0 = void 0),
                          (this._promise0 = void 0),
                          (this._receiver0 = void 0),
                          this._resolveFromExecutor(e),
                          this._promiseCreated(),
                          this._fireEvent("promiseCreated", this);
                      }
                      function O(e) {
                        this.promise._resolveCallback(e);
                      }
                      function $(e) {
                        this.promise._rejectCallback(e, !1);
                      }
                      function D(e) {
                        var t = new P(y);
                        (t._fulfillmentHandler0 = e),
                          (t._rejectionHandler0 = e),
                          (t._promise0 = e),
                          (t._receiver0 = e);
                      }
                      return (
                        (P.prototype.toString = function () {
                          return "[object Promise]";
                        }),
                        (P.prototype.caught = P.prototype.catch =
                          function (e) {
                            var t = arguments.length;
                            if (1 < t) {
                              var n,
                                i = new Array(t - 1),
                                o = 0;
                              for (n = 0; n < t - 1; ++n) {
                                var r = arguments[n];
                                if (!f.isObject(r))
                                  return s(
                                    "Catch statement predicate: expecting an object but got " +
                                      f.classString(r)
                                  );
                                i[o++] = r;
                              }
                              if (
                                ((i.length = o),
                                "function" != typeof (e = arguments[n]))
                              )
                                throw new p(
                                  "The last argument to .catch() must be a function, got " +
                                    f.toString(e)
                                );
                              return this.then(void 0, S(i, e, this));
                            }
                            return this.then(void 0, e);
                          }),
                        (P.prototype.reflect = function () {
                          return this._then(a, a, void 0, this, void 0);
                        }),
                        (P.prototype.then = function (e, t) {
                          if (
                            T.warnings() &&
                            0 < arguments.length &&
                            "function" != typeof e &&
                            "function" != typeof t
                          ) {
                            var n =
                              ".then() only accepts functions but was passed: " +
                              f.classString(e);
                            1 < arguments.length &&
                              (n += ", " + f.classString(t)),
                              this._warn(n);
                          }
                          return this._then(e, t, void 0, void 0, void 0);
                        }),
                        (P.prototype.done = function (e, t) {
                          this._then(
                            e,
                            t,
                            void 0,
                            void 0,
                            void 0
                          )._setIsFinal();
                        }),
                        (P.prototype.spread = function (e) {
                          return "function" != typeof e
                            ? s(
                                "expecting a function but got " +
                                  f.classString(e)
                              )
                            : this.all()._then(e, void 0, void 0, m, void 0);
                        }),
                        (P.prototype.toJSON = function () {
                          var e = {
                            isFulfilled: !1,
                            isRejected: !1,
                            fulfillmentValue: void 0,
                            rejectionReason: void 0,
                          };
                          return (
                            this.isFulfilled()
                              ? ((e.fulfillmentValue = this.value()),
                                (e.isFulfilled = !0))
                              : this.isRejected() &&
                                ((e.rejectionReason = this.reason()),
                                (e.isRejected = !0)),
                            e
                          );
                        }),
                        (P.prototype.all = function () {
                          return (
                            0 < arguments.length &&
                              this._warn(
                                ".all() was passed arguments but it does not take any"
                              ),
                            new w(this).promise()
                          );
                        }),
                        (P.prototype.error = function (e) {
                          return this.caught(f.originatesFromRejection, e);
                        }),
                        (P.getNewLibraryCopy = F.exports),
                        (P.is = function (e) {
                          return e instanceof P;
                        }),
                        (P.fromNode = P.fromCallback =
                          function (e) {
                            var t = new P(y);
                            t._captureStackTrace();
                            var n =
                                1 < arguments.length &&
                                !!Object(arguments[1]).multiArgs,
                              i = A(e)(E(t, n));
                            return (
                              i === j && t._rejectCallback(i.e, !0),
                              t._isFateSealed() || t._setAsyncGuaranteed(),
                              t
                            );
                          }),
                        (P.all = function (e) {
                          return new w(e).promise();
                        }),
                        (P.resolve =
                          P.fulfilled =
                          P.cast =
                            function (e) {
                              var t = _(e);
                              return (
                                t instanceof P ||
                                  ((t = new P(y))._captureStackTrace(),
                                  t._setFulfilled(),
                                  (t._rejectionHandler0 = e)),
                                t
                              );
                            }),
                        (P.reject = P.rejected =
                          function (e) {
                            var t = new P(y);
                            return (
                              t._captureStackTrace(),
                              t._rejectCallback(e, !0),
                              t
                            );
                          }),
                        (P.setScheduler = function (e) {
                          if ("function" != typeof e)
                            throw new p(
                              "expecting a function but got " + f.classString(e)
                            );
                          return g.setScheduler(e);
                        }),
                        (P.prototype._then = function (e, t, n, i, o) {
                          var r = void 0 !== o,
                            s = r ? o : new P(y),
                            a = this._target(),
                            l = a._bitField;
                          r ||
                            (s._propagateFrom(this, 3),
                            s._captureStackTrace(),
                            void 0 === i &&
                              0 != (2097152 & this._bitField) &&
                              (i =
                                0 != (50397184 & l)
                                  ? this._boundValue()
                                  : a === this
                                  ? void 0
                                  : this._boundTo),
                            this._fireEvent("promiseChained", this, s));
                          var c = h();
                          if (0 != (50397184 & l)) {
                            var u,
                              d,
                              p = a._settlePromiseCtx;
                            0 != (33554432 & l)
                              ? ((d = a._rejectionHandler0), (u = e))
                              : 0 != (16777216 & l)
                              ? ((d = a._fulfillmentHandler0),
                                (u = t),
                                a._unsetRejectionIsUnhandled())
                              : ((p = a._settlePromiseLateCancellationObserver),
                                (d = new v("late cancellation observer")),
                                a._attachExtraTrace(d),
                                (u = t)),
                              g.invoke(p, a, {
                                handler: f.contextBind(c, u),
                                promise: s,
                                receiver: i,
                                value: d,
                              });
                          } else a._addCallbacks(e, t, s, i, c);
                          return s;
                        }),
                        (P.prototype._length = function () {
                          return 65535 & this._bitField;
                        }),
                        (P.prototype._isFateSealed = function () {
                          return 0 != (117506048 & this._bitField);
                        }),
                        (P.prototype._isFollowing = function () {
                          return 67108864 == (67108864 & this._bitField);
                        }),
                        (P.prototype._setLength = function (e) {
                          this._bitField =
                            (-65536 & this._bitField) | (65535 & e);
                        }),
                        (P.prototype._setFulfilled = function () {
                          (this._bitField = 33554432 | this._bitField),
                            this._fireEvent("promiseFulfilled", this);
                        }),
                        (P.prototype._setRejected = function () {
                          (this._bitField = 16777216 | this._bitField),
                            this._fireEvent("promiseRejected", this);
                        }),
                        (P.prototype._setFollowing = function () {
                          (this._bitField = 67108864 | this._bitField),
                            this._fireEvent("promiseResolved", this);
                        }),
                        (P.prototype._setIsFinal = function () {
                          this._bitField = 4194304 | this._bitField;
                        }),
                        (P.prototype._isFinal = function () {
                          return 0 < (4194304 & this._bitField);
                        }),
                        (P.prototype._unsetCancelled = function () {
                          this._bitField = -65537 & this._bitField;
                        }),
                        (P.prototype._setCancelled = function () {
                          (this._bitField = 65536 | this._bitField),
                            this._fireEvent("promiseCancelled", this);
                        }),
                        (P.prototype._setWillBeCancelled = function () {
                          this._bitField = 8388608 | this._bitField;
                        }),
                        (P.prototype._setAsyncGuaranteed = function () {
                          if (!g.hasCustomScheduler()) {
                            var e = this._bitField;
                            this._bitField =
                              e | (((536870912 & e) >> 2) ^ 134217728);
                          }
                        }),
                        (P.prototype._setNoAsyncGuarantee = function () {
                          this._bitField =
                            -134217729 & (536870912 | this._bitField);
                        }),
                        (P.prototype._receiverAt = function (e) {
                          var t =
                            0 === e ? this._receiver0 : this[4 * e - 4 + 3];
                          if (t !== u)
                            return void 0 === t && this._isBound()
                              ? this._boundValue()
                              : t;
                        }),
                        (P.prototype._promiseAt = function (e) {
                          return this[4 * e - 4 + 2];
                        }),
                        (P.prototype._fulfillmentHandlerAt = function (e) {
                          return this[4 * e - 4];
                        }),
                        (P.prototype._rejectionHandlerAt = function (e) {
                          return this[4 * e - 4 + 1];
                        }),
                        (P.prototype._boundValue = function () {}),
                        (P.prototype._migrateCallback0 = function (e) {
                          e._bitField;
                          var t = e._fulfillmentHandler0,
                            n = e._rejectionHandler0,
                            i = e._promise0,
                            o = e._receiverAt(0);
                          void 0 === o && (o = u),
                            this._addCallbacks(t, n, i, o, null);
                        }),
                        (P.prototype._migrateCallbackAt = function (e, t) {
                          var n = e._fulfillmentHandlerAt(t),
                            i = e._rejectionHandlerAt(t),
                            o = e._promiseAt(t),
                            r = e._receiverAt(t);
                          void 0 === r && (r = u),
                            this._addCallbacks(n, i, o, r, null);
                        }),
                        (P.prototype._addCallbacks = function (e, t, n, i, o) {
                          var r = this._length();
                          if (
                            (65531 <= r && ((r = 0), this._setLength(0)),
                            0 === r)
                          )
                            (this._promise0 = n),
                              (this._receiver0 = i),
                              "function" == typeof e &&
                                (this._fulfillmentHandler0 = f.contextBind(
                                  o,
                                  e
                                )),
                              "function" == typeof t &&
                                (this._rejectionHandler0 = f.contextBind(o, t));
                          else {
                            var s = 4 * r - 4;
                            (this[2 + s] = n),
                              (this[3 + s] = i),
                              "function" == typeof e &&
                                (this[s] = f.contextBind(o, e)),
                              "function" == typeof t &&
                                (this[1 + s] = f.contextBind(o, t));
                          }
                          return this._setLength(r + 1), r;
                        }),
                        (P.prototype._proxy = function (e, t) {
                          this._addCallbacks(void 0, void 0, t, e, null);
                        }),
                        (P.prototype._resolveCallback = function (e, t) {
                          if (0 == (117506048 & this._bitField)) {
                            if (e === this)
                              return this._rejectCallback(l(), !1);
                            var n = _(e, this);
                            if (!(n instanceof P)) return this._fulfill(e);
                            t && this._propagateFrom(n, 2);
                            var i = n._target();
                            if (i !== this) {
                              var o = i._bitField;
                              if (0 == (50397184 & o)) {
                                var r = this._length();
                                0 < r && i._migrateCallback0(this);
                                for (var s = 1; s < r; ++s)
                                  i._migrateCallbackAt(this, s);
                                this._setFollowing(),
                                  this._setLength(0),
                                  this._setFollowee(n);
                              } else if (0 != (33554432 & o))
                                this._fulfill(i._value());
                              else if (0 != (16777216 & o))
                                this._reject(i._reason());
                              else {
                                var a = new v("late cancellation observer");
                                i._attachExtraTrace(a), this._reject(a);
                              }
                            } else this._reject(l());
                          }
                        }),
                        (P.prototype._rejectCallback = function (e, t, n) {
                          var i = f.ensureErrorObject(e),
                            o = i === e;
                          if (!o && !n && T.warnings()) {
                            var r =
                              "a promise was rejected with a non-error: " +
                              f.classString(e);
                            this._warn(r, !0);
                          }
                          this._attachExtraTrace(i, !!t && o), this._reject(e);
                        }),
                        (P.prototype._resolveFromExecutor = function (e) {
                          if (e !== y) {
                            var t = this;
                            this._captureStackTrace(), this._pushContext();
                            var n = !0,
                              i = this._execute(
                                e,
                                function (e) {
                                  t._resolveCallback(e);
                                },
                                function (e) {
                                  t._rejectCallback(e, n);
                                }
                              );
                            (n = !1),
                              this._popContext(),
                              void 0 !== i && t._rejectCallback(i, !0);
                          }
                        }),
                        (P.prototype._settlePromiseFromHandler = function (
                          e,
                          t,
                          n,
                          i
                        ) {
                          var o = i._bitField;
                          if (0 == (65536 & o)) {
                            var r;
                            i._pushContext(),
                              t === m
                                ? n && "number" == typeof n.length
                                  ? (r = A(e).apply(this._boundValue(), n))
                                  : ((r = j).e = new p(
                                      "cannot .spread() a non-array: " +
                                        f.classString(n)
                                    ))
                                : (r = A(e).call(t, n));
                            var s = i._popContext();
                            0 == (65536 & (o = i._bitField)) &&
                              (r === b
                                ? i._reject(n)
                                : r === j
                                ? i._rejectCallback(r.e, !1)
                                : (T.checkForgottenReturns(r, s, "", i, this),
                                  i._resolveCallback(r)));
                          }
                        }),
                        (P.prototype._target = function () {
                          for (var e = this; e._isFollowing(); )
                            e = e._followee();
                          return e;
                        }),
                        (P.prototype._followee = function () {
                          return this._rejectionHandler0;
                        }),
                        (P.prototype._setFollowee = function (e) {
                          this._rejectionHandler0 = e;
                        }),
                        (P.prototype._settlePromise = function (e, t, n, i) {
                          var o = e instanceof P,
                            r = this._bitField,
                            s = 0 != (134217728 & r);
                          0 != (65536 & r)
                            ? (o && e._invokeInternalOnCancel(),
                              n instanceof x && n.isFinallyHandler()
                                ? ((n.cancelPromise = e),
                                  A(t).call(n, i) === j && e._reject(j.e))
                                : t === a
                                ? e._fulfill(a.call(n))
                                : n instanceof c
                                ? n._promiseCancelled(e)
                                : o || e instanceof w
                                ? e._cancel()
                                : n.cancel())
                            : "function" == typeof t
                            ? o
                              ? (s && e._setAsyncGuaranteed(),
                                this._settlePromiseFromHandler(t, n, i, e))
                              : t.call(n, i, e)
                            : n instanceof c
                            ? n._isResolved() ||
                              (0 != (33554432 & r)
                                ? n._promiseFulfilled(i, e)
                                : n._promiseRejected(i, e))
                            : o &&
                              (s && e._setAsyncGuaranteed(),
                              0 != (33554432 & r)
                                ? e._fulfill(i)
                                : e._reject(i));
                        }),
                        (P.prototype._settlePromiseLateCancellationObserver =
                          function (e) {
                            var t = e.handler,
                              n = e.promise,
                              i = e.receiver,
                              o = e.value;
                            "function" == typeof t
                              ? n instanceof P
                                ? this._settlePromiseFromHandler(t, i, o, n)
                                : t.call(i, o, n)
                              : n instanceof P && n._reject(o);
                          }),
                        (P.prototype._settlePromiseCtx = function (e) {
                          this._settlePromise(
                            e.promise,
                            e.handler,
                            e.receiver,
                            e.value
                          );
                        }),
                        (P.prototype._settlePromise0 = function (e, t, n) {
                          var i = this._promise0,
                            o = this._receiverAt(0);
                          (this._promise0 = void 0),
                            (this._receiver0 = void 0),
                            this._settlePromise(i, e, o, t);
                        }),
                        (P.prototype._clearCallbackDataAtIndex = function (e) {
                          var t = 4 * e - 4;
                          this[2 + t] =
                            this[3 + t] =
                            this[t] =
                            this[1 + t] =
                              void 0;
                        }),
                        (P.prototype._fulfill = function (e) {
                          var t = this._bitField;
                          if (!((117506048 & t) >>> 16)) {
                            if (e === this) {
                              var n = l();
                              return this._attachExtraTrace(n), this._reject(n);
                            }
                            this._setFulfilled(),
                              (this._rejectionHandler0 = e),
                              0 < (65535 & t) &&
                                (0 != (134217728 & t)
                                  ? this._settlePromises()
                                  : g.settlePromises(this),
                                this._dereferenceTrace());
                          }
                        }),
                        (P.prototype._reject = function (e) {
                          var t = this._bitField;
                          if (!((117506048 & t) >>> 16)) {
                            if (
                              (this._setRejected(),
                              (this._fulfillmentHandler0 = e),
                              this._isFinal())
                            )
                              return g.fatalError(e, f.isNode);
                            0 < (65535 & t)
                              ? g.settlePromises(this)
                              : this._ensurePossibleRejectionHandled();
                          }
                        }),
                        (P.prototype._fulfillPromises = function (e, t) {
                          for (var n = 1; n < e; n++) {
                            var i = this._fulfillmentHandlerAt(n),
                              o = this._promiseAt(n),
                              r = this._receiverAt(n);
                            this._clearCallbackDataAtIndex(n),
                              this._settlePromise(o, i, r, t);
                          }
                        }),
                        (P.prototype._rejectPromises = function (e, t) {
                          for (var n = 1; n < e; n++) {
                            var i = this._rejectionHandlerAt(n),
                              o = this._promiseAt(n),
                              r = this._receiverAt(n);
                            this._clearCallbackDataAtIndex(n),
                              this._settlePromise(o, i, r, t);
                          }
                        }),
                        (P.prototype._settlePromises = function () {
                          var e = this._bitField,
                            t = 65535 & e;
                          if (0 < t) {
                            if (0 != (16842752 & e)) {
                              var n = this._fulfillmentHandler0;
                              this._settlePromise0(
                                this._rejectionHandler0,
                                n,
                                e
                              ),
                                this._rejectPromises(t, n);
                            } else {
                              var i = this._rejectionHandler0;
                              this._settlePromise0(
                                this._fulfillmentHandler0,
                                i,
                                e
                              ),
                                this._fulfillPromises(t, i);
                            }
                            this._setLength(0);
                          }
                          this._clearCancellationData();
                        }),
                        (P.prototype._settledValue = function () {
                          var e = this._bitField;
                          return 0 != (33554432 & e)
                            ? this._rejectionHandler0
                            : 0 != (16777216 & e)
                            ? this._fulfillmentHandler0
                            : void 0;
                        }),
                        "undefined" != typeof Symbol &&
                          Symbol.toStringTag &&
                          o.defineProperty(P.prototype, Symbol.toStringTag, {
                            get: function () {
                              return "Object";
                            },
                          }),
                        (P.defer = P.pending =
                          function () {
                            return (
                              T.deprecated("Promise.defer", "new Promise"),
                              { promise: new P(y), resolve: O, reject: $ }
                            );
                          }),
                        f.notEnumerableProp(P, "_makeSelfResolutionError", l),
                        I("./method")(P, y, _, s, T),
                        I("./bind")(P, y, _, T),
                        I("./cancel")(P, w, s, T),
                        I("./direct_resolve")(P),
                        I("./synchronous_inspection")(P),
                        I("./join")(P, w, _, y, g),
                        ((P.Promise = P).version = "3.7.2"),
                        I("./call_get.js")(P),
                        I("./generators.js")(P, s, y, _, c, T),
                        I("./map.js")(P, w, s, _, y, T),
                        I("./nodeify.js")(P),
                        I("./promisify.js")(P, y),
                        I("./props.js")(P, w, _, s),
                        I("./race.js")(P, y, _, s),
                        I("./reduce.js")(P, w, s, _, y, T),
                        I("./settle.js")(P, w, T),
                        I("./some.js")(P, w, s),
                        I("./timers.js")(P, y, T),
                        I("./using.js")(P, s, _, k, y, T),
                        I("./any.js")(P),
                        I("./each.js")(P, y),
                        I("./filter.js")(P, y),
                        f.toFastProperties(P),
                        f.toFastProperties(P.prototype),
                        D({ a: 1 }),
                        D({ b: 2 }),
                        D({ c: 3 }),
                        D(1),
                        D(function () {}),
                        D(void 0),
                        D(!1),
                        D(new P(y)),
                        T.setBounds(r.firstLineError, f.lastLineError),
                        P
                      );
                    };
                  },
                  {
                    "./any.js": 1,
                    "./async": 2,
                    "./bind": 3,
                    "./call_get.js": 5,
                    "./cancel": 6,
                    "./catch_filter": 7,
                    "./context": 8,
                    "./debuggability": 9,
                    "./direct_resolve": 10,
                    "./each.js": 11,
                    "./errors": 12,
                    "./es5": 13,
                    "./filter.js": 14,
                    "./finally": 15,
                    "./generators.js": 16,
                    "./join": 17,
                    "./map.js": 18,
                    "./method": 19,
                    "./nodeback": 20,
                    "./nodeify.js": 21,
                    "./promise_array": 23,
                    "./promisify.js": 24,
                    "./props.js": 25,
                    "./race.js": 27,
                    "./reduce.js": 28,
                    "./settle.js": 30,
                    "./some.js": 31,
                    "./synchronous_inspection": 32,
                    "./thenables": 33,
                    "./timers.js": 34,
                    "./using.js": 35,
                    "./util": 36,
                    async_hooks: void 0,
                  },
                ],
                23: [
                  function (i, e, t) {
                    "use strict";
                    e.exports = function (a, n, l, s, e) {
                      var c = i("./util");
                      c.isArray;
                      function t(e) {
                        var t = (this._promise = new a(n));
                        e instanceof a &&
                          (t._propagateFrom(e, 3),
                          e.suppressUnhandledRejections()),
                          t._setOnCancel(this),
                          (this._values = e),
                          (this._length = 0),
                          (this._totalResolved = 0),
                          this._init(void 0, -2);
                      }
                      return (
                        c.inherits(t, e),
                        (t.prototype.length = function () {
                          return this._length;
                        }),
                        (t.prototype.promise = function () {
                          return this._promise;
                        }),
                        (t.prototype._init = function e(t, n) {
                          var i = l(this._values, this._promise);
                          if (i instanceof a) {
                            var o = (i = i._target())._bitField;
                            if (((this._values = i), 0 == (50397184 & o)))
                              return (
                                this._promise._setAsyncGuaranteed(),
                                i._then(e, this._reject, void 0, this, n)
                              );
                            if (0 == (33554432 & o))
                              return 0 != (16777216 & o)
                                ? this._reject(i._reason())
                                : this._cancel();
                            i = i._value();
                          }
                          if (null !== (i = c.asArray(i)))
                            0 !== i.length
                              ? this._iterate(i)
                              : -5 === n
                              ? this._resolveEmptyArray()
                              : this._resolve(
                                  (function (e) {
                                    switch (e) {
                                      case -2:
                                        return [];
                                      case -3:
                                        return {};
                                      case -6:
                                        return new Map();
                                    }
                                  })(n)
                                );
                          else {
                            var r = s(
                              "expecting an array or an iterable object but got " +
                                c.classString(i)
                            ).reason();
                            this._promise._rejectCallback(r, !1);
                          }
                        }),
                        (t.prototype._iterate = function (e) {
                          var t = this.getActualLength(e.length);
                          (this._length = t),
                            (this._values = this.shouldCopyValues()
                              ? new Array(t)
                              : this._values);
                          for (
                            var n = this._promise, i = !1, o = null, r = 0;
                            r < t;
                            ++r
                          ) {
                            var s = l(e[r], n);
                            (o =
                              s instanceof a
                                ? (s = s._target())._bitField
                                : null),
                              i
                                ? null !== o && s.suppressUnhandledRejections()
                                : null !== o
                                ? 0 == (50397184 & o)
                                  ? (s._proxy(this, r), (this._values[r] = s))
                                  : (i =
                                      0 != (33554432 & o)
                                        ? this._promiseFulfilled(s._value(), r)
                                        : 0 != (16777216 & o)
                                        ? this._promiseRejected(s._reason(), r)
                                        : this._promiseCancelled(r))
                                : (i = this._promiseFulfilled(s, r));
                          }
                          i || n._setAsyncGuaranteed();
                        }),
                        (t.prototype._isResolved = function () {
                          return null === this._values;
                        }),
                        (t.prototype._resolve = function (e) {
                          (this._values = null), this._promise._fulfill(e);
                        }),
                        (t.prototype._cancel = function () {
                          !this._isResolved() &&
                            this._promise._isCancellable() &&
                            ((this._values = null), this._promise._cancel());
                        }),
                        (t.prototype._reject = function (e) {
                          (this._values = null),
                            this._promise._rejectCallback(e, !1);
                        }),
                        (t.prototype._promiseFulfilled = function (e, t) {
                          return (
                            (this._values[t] = e),
                            ++this._totalResolved >= this._length &&
                              (this._resolve(this._values), !0)
                          );
                        }),
                        (t.prototype._promiseCancelled = function () {
                          return this._cancel(), !0;
                        }),
                        (t.prototype._promiseRejected = function (e) {
                          return this._totalResolved++, this._reject(e), !0;
                        }),
                        (t.prototype._resultCancelled = function () {
                          if (!this._isResolved()) {
                            var e = this._values;
                            if ((this._cancel(), e instanceof a)) e.cancel();
                            else
                              for (var t = 0; t < e.length; ++t)
                                e[t] instanceof a && e[t].cancel();
                          }
                        }),
                        (t.prototype.shouldCopyValues = function () {
                          return !0;
                        }),
                        (t.prototype.getActualLength = function (e) {
                          return e;
                        }),
                        t
                      );
                    };
                  },
                  { "./util": 36 },
                ],
                24: [
                  function (i, e, t) {
                    "use strict";
                    e.exports = function (c, u) {
                      var f = {},
                        h = i("./util"),
                        d = i("./nodeback"),
                        p = h.withAppended,
                        g = h.maybeWrapAsError,
                        e = h.canEvaluate,
                        v = i("./errors").TypeError,
                        y = { __isPromisified__: !0 },
                        t = new RegExp(
                          "^(?:" +
                            [
                              "arity",
                              "length",
                              "name",
                              "arguments",
                              "caller",
                              "callee",
                              "prototype",
                              "__isPromisified__",
                            ].join("|") +
                            ")$"
                        ),
                        m = function (e) {
                          return (
                            h.isIdentifier(e) &&
                            "_" !== e.charAt(0) &&
                            "constructor" !== e
                          );
                        };
                      function s(e) {
                        return !t.test(e);
                      }
                      function b(e) {
                        try {
                          return !0 === e.__isPromisified__;
                        } catch (e) {
                          return !1;
                        }
                      }
                      function _(e, t, n, i) {
                        for (
                          var o,
                            r,
                            s,
                            a,
                            l = h.inheritedDataKeys(e),
                            c = [],
                            u = 0;
                          u < l.length;
                          ++u
                        ) {
                          var d = l[u],
                            p = e[d],
                            f = i === m || m(d, p, e);
                          "function" != typeof p ||
                            b(p) ||
                            ((o = e),
                            (r = d),
                            (s = t),
                            (a = h.getDataPropertyOrDefault(o, r + s, y)) &&
                              b(a)) ||
                            !i(d, p, e, f) ||
                            c.push(d, p);
                        }
                        return (
                          (function (e, t, n) {
                            for (var i = 0; i < e.length; i += 2) {
                              var o = e[i];
                              if (n.test(o))
                                for (
                                  var r = o.replace(n, ""), s = 0;
                                  s < e.length;
                                  s += 2
                                )
                                  if (e[s] === r)
                                    throw new v(
                                      "Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace(
                                        "%s",
                                        t
                                      )
                                    );
                            }
                          })(c, t, n),
                          c
                        );
                      }
                      var n,
                        w = function (e) {
                          return e.replace(/([$])/, "\\$");
                        };
                      var C = e
                        ? n
                        : function (o, r, e, t, n, s) {
                            var a = (function () {
                                return this;
                              })(),
                              l = o;
                            function i() {
                              var e = r;
                              r === f && (e = this);
                              var t = new c(u);
                              t._captureStackTrace();
                              var n =
                                  "string" == typeof l && this !== a
                                    ? this[l]
                                    : o,
                                i = d(t, s);
                              try {
                                n.apply(e, p(arguments, i));
                              } catch (e) {
                                t._rejectCallback(g(e), !0, !0);
                              }
                              return (
                                t._isFateSealed() || t._setAsyncGuaranteed(), t
                              );
                            }
                            return (
                              "string" == typeof l && (o = t),
                              h.notEnumerableProp(i, "__isPromisified__", !0),
                              i
                            );
                          };
                      function k(e, t, n, i, o) {
                        for (
                          var r = new RegExp(w(t) + "$"),
                            s = _(e, t, r, n),
                            a = 0,
                            l = s.length;
                          a < l;
                          a += 2
                        ) {
                          var c = s[a],
                            u = s[a + 1],
                            d = c + t;
                          if (i === C) e[d] = C(c, f, c, u, t, o);
                          else {
                            var p = i(u, function () {
                              return C(c, f, c, u, t, o);
                            });
                            h.notEnumerableProp(p, "__isPromisified__", !0),
                              (e[d] = p);
                          }
                        }
                        return h.toFastProperties(e), e;
                      }
                      (c.promisify = function (e, t) {
                        if ("function" != typeof e)
                          throw new v(
                            "expecting a function but got " + h.classString(e)
                          );
                        if (b(e)) return e;
                        var n,
                          i =
                            void 0 === (t = Object(t)).context ? f : t.context,
                          o = !!t.multiArgs,
                          r = C((n = e), i, void 0, n, null, o);
                        return h.copyDescriptors(e, r, s), r;
                      }),
                        (c.promisifyAll = function (e, t) {
                          if ("function" != typeof e && "object" != typeof e)
                            throw new v(
                              "the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n"
                            );
                          var n = !!(t = Object(t)).multiArgs,
                            i = t.suffix;
                          "string" != typeof i && (i = "Async");
                          var o = t.filter;
                          "function" != typeof o && (o = m);
                          var r = t.promisifier;
                          if (
                            ("function" != typeof r && (r = C),
                            !h.isIdentifier(i))
                          )
                            throw new RangeError(
                              "suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n"
                            );
                          for (
                            var s = h.inheritedDataKeys(e), a = 0;
                            a < s.length;
                            ++a
                          ) {
                            var l = e[s[a]];
                            "constructor" !== s[a] &&
                              h.isClass(l) &&
                              (k(l.prototype, i, o, r, n), k(l, i, o, r, n));
                          }
                          return k(e, i, o, r, n);
                        });
                    };
                  },
                  { "./errors": 12, "./nodeback": 20, "./util": 36 },
                ],
                25: [
                  function (h, e, t) {
                    "use strict";
                    e.exports = function (i, e, o, r) {
                      var a,
                        t = h("./util"),
                        s = t.isObject,
                        l = h("./es5");
                      "function" == typeof Map && (a = Map);
                      var n,
                        c,
                        u =
                          ((c = n = 0),
                          function (e) {
                            (c = e.size), (n = 0);
                            var t = new Array(2 * e.size);
                            return e.forEach(d, t), t;
                          });
                      function d(e, t) {
                        (this[n] = e), (this[n + c] = t), n++;
                      }
                      function p(e) {
                        var t,
                          n = !1;
                        if (void 0 !== a && e instanceof a)
                          (t = u(e)), (n = !0);
                        else {
                          var i = l.keys(e),
                            o = i.length;
                          t = new Array(2 * o);
                          for (var r = 0; r < o; ++r) {
                            var s = i[r];
                            (t[r] = e[s]), (t[r + o] = s);
                          }
                        }
                        this.constructor$(t),
                          (this._isMap = n),
                          this._init$(void 0, n ? -6 : -3);
                      }
                      function f(e) {
                        var t,
                          n = o(e);
                        return s(n)
                          ? ((t =
                              n instanceof i
                                ? n._then(
                                    i.props,
                                    void 0,
                                    void 0,
                                    void 0,
                                    void 0
                                  )
                                : new p(n).promise()),
                            n instanceof i && t._propagateFrom(n, 2),
                            t)
                          : r(
                              "cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n"
                            );
                      }
                      t.inherits(p, e),
                        (p.prototype._init = function () {}),
                        (p.prototype._promiseFulfilled = function (e, t) {
                          if (
                            ((this._values[t] = e),
                            ++this._totalResolved >= this._length)
                          ) {
                            var n;
                            if (this._isMap)
                              n = (function (e) {
                                for (
                                  var t = new a(),
                                    n = (e.length / 2) | 0,
                                    i = 0;
                                  i < n;
                                  ++i
                                ) {
                                  var o = e[n + i],
                                    r = e[i];
                                  t.set(o, r);
                                }
                                return t;
                              })(this._values);
                            else {
                              n = {};
                              for (
                                var i = this.length(), o = 0, r = this.length();
                                o < r;
                                ++o
                              )
                                n[this._values[o + i]] = this._values[o];
                            }
                            return this._resolve(n), !0;
                          }
                          return !1;
                        }),
                        (p.prototype.shouldCopyValues = function () {
                          return !1;
                        }),
                        (p.prototype.getActualLength = function (e) {
                          return e >> 1;
                        }),
                        (i.prototype.props = function () {
                          return f(this);
                        }),
                        (i.props = function (e) {
                          return f(e);
                        });
                    };
                  },
                  { "./es5": 13, "./util": 36 },
                ],
                26: [
                  function (e, t, n) {
                    "use strict";
                    function i(e) {
                      (this._capacity = e),
                        (this._length = 0),
                        (this._front = 0);
                    }
                    (i.prototype._willBeOverCapacity = function (e) {
                      return this._capacity < e;
                    }),
                      (i.prototype._pushOne = function (e) {
                        var t = this.length();
                        this._checkCapacity(t + 1),
                          (this[(this._front + t) & (this._capacity - 1)] = e),
                          (this._length = t + 1);
                      }),
                      (i.prototype.push = function (e, t, n) {
                        var i = this.length() + 3;
                        if (this._willBeOverCapacity(i))
                          return (
                            this._pushOne(e),
                            this._pushOne(t),
                            void this._pushOne(n)
                          );
                        var o = this._front + i - 3;
                        this._checkCapacity(i);
                        var r = this._capacity - 1;
                        (this[o & r] = e),
                          (this[(1 + o) & r] = t),
                          (this[(2 + o) & r] = n),
                          (this._length = i);
                      }),
                      (i.prototype.shift = function () {
                        var e = this._front,
                          t = this[e];
                        return (
                          (this[e] = void 0),
                          (this._front = (e + 1) & (this._capacity - 1)),
                          this._length--,
                          t
                        );
                      }),
                      (i.prototype.length = function () {
                        return this._length;
                      }),
                      (i.prototype._checkCapacity = function (e) {
                        this._capacity < e &&
                          this._resizeTo(this._capacity << 1);
                      }),
                      (i.prototype._resizeTo = function (e) {
                        var t = this._capacity;
                        (this._capacity = e),
                          (function (e, t, n, i, o) {
                            for (var r = 0; r < o; ++r)
                              (n[r + i] = e[r + t]), (e[r + t] = void 0);
                          })(
                            this,
                            0,
                            this,
                            t,
                            (this._front + this._length) & (t - 1)
                          );
                      }),
                      (t.exports = i);
                  },
                  {},
                ],
                27: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (c, u, d, p) {
                      var f = e("./util"),
                        h = function (t) {
                          return t.then(function (e) {
                            return n(e, t);
                          });
                        };
                      function n(e, t) {
                        var n = d(e);
                        if (n instanceof c) return h(n);
                        if (null === (e = f.asArray(e)))
                          return p(
                            "expecting an array or an iterable object but got " +
                              f.classString(e)
                          );
                        var i = new c(u);
                        void 0 !== t && i._propagateFrom(t, 3);
                        for (
                          var o = i._fulfill,
                            r = i._reject,
                            s = 0,
                            a = e.length;
                          s < a;
                          ++s
                        ) {
                          var l = e[s];
                          (void 0 !== l || s in e) &&
                            c.cast(l)._then(o, r, void 0, i, null);
                        }
                        return i;
                      }
                      (c.race = function (e) {
                        return n(e, void 0);
                      }),
                        (c.prototype.race = function () {
                          return n(this, void 0);
                        });
                    };
                  },
                  { "./util": 36 },
                ],
                28: [
                  function (t, e, n) {
                    "use strict";
                    e.exports = function (a, e, o, n, r, s) {
                      var l = t("./util"),
                        c = l.tryCatch;
                      function u(e, t, n, i) {
                        this.constructor$(e);
                        var o = a._getContext();
                        (this._fn = l.contextBind(o, t)),
                          void 0 !== n &&
                            (n = a.resolve(n))._attachCancellationCallback(
                              this
                            ),
                          (this._initialValue = n),
                          (this._currentCancellable = null),
                          (this._eachValues =
                            i === r
                              ? Array(this._length)
                              : 0 === i
                              ? null
                              : void 0),
                          this._promise._captureStackTrace(),
                          this._init$(void 0, -5);
                      }
                      function d(e, t) {
                        this.isFulfilled() ? t._resolve(e) : t._reject(e);
                      }
                      function p(e, t, n, i) {
                        return "function" != typeof t
                          ? o(
                              "expecting a function but got " + l.classString(t)
                            )
                          : new u(e, t, n, i).promise();
                      }
                      function f(e) {
                        (this.accum = e), this.array._gotAccum(e);
                        var t = n(this.value, this.array._promise);
                        return t instanceof a
                          ? (this.array._currentCancellable = t)._then(
                              i,
                              void 0,
                              void 0,
                              this,
                              void 0
                            )
                          : i.call(this, t);
                      }
                      function i(e) {
                        var t,
                          n = this.array,
                          i = n._promise,
                          o = c(n._fn);
                        i._pushContext(),
                          (t =
                            void 0 !== n._eachValues
                              ? o.call(
                                  i._boundValue(),
                                  e,
                                  this.index,
                                  this.length
                                )
                              : o.call(
                                  i._boundValue(),
                                  this.accum,
                                  e,
                                  this.index,
                                  this.length
                                )) instanceof a && (n._currentCancellable = t);
                        var r = i._popContext();
                        return (
                          s.checkForgottenReturns(
                            t,
                            r,
                            void 0 !== n._eachValues
                              ? "Promise.each"
                              : "Promise.reduce",
                            i
                          ),
                          t
                        );
                      }
                      l.inherits(u, e),
                        (u.prototype._gotAccum = function (e) {
                          void 0 !== this._eachValues &&
                            null !== this._eachValues &&
                            e !== r &&
                            this._eachValues.push(e);
                        }),
                        (u.prototype._eachComplete = function (e) {
                          return (
                            null !== this._eachValues &&
                              this._eachValues.push(e),
                            this._eachValues
                          );
                        }),
                        (u.prototype._init = function () {}),
                        (u.prototype._resolveEmptyArray = function () {
                          this._resolve(
                            void 0 !== this._eachValues
                              ? this._eachValues
                              : this._initialValue
                          );
                        }),
                        (u.prototype.shouldCopyValues = function () {
                          return !1;
                        }),
                        (u.prototype._resolve = function (e) {
                          this._promise._resolveCallback(e),
                            (this._values = null);
                        }),
                        (u.prototype._resultCancelled = function (e) {
                          if (e === this._initialValue) return this._cancel();
                          this._isResolved() ||
                            (this._resultCancelled$(),
                            this._currentCancellable instanceof a &&
                              this._currentCancellable.cancel(),
                            this._initialValue instanceof a &&
                              this._initialValue.cancel());
                        }),
                        (u.prototype._iterate = function (e) {
                          var t,
                            n,
                            i = (this._values = e).length;
                          (n =
                            void 0 !== this._initialValue
                              ? ((t = this._initialValue), 0)
                              : ((t = a.resolve(e[0])), 1)),
                            (this._currentCancellable = t);
                          for (var o = n; o < i; ++o) {
                            var r = e[o];
                            r instanceof a && r.suppressUnhandledRejections();
                          }
                          if (!t.isRejected())
                            for (; n < i; ++n) {
                              var s = {
                                accum: null,
                                value: e[n],
                                index: n,
                                length: i,
                                array: this,
                              };
                              (t = t._then(f, void 0, void 0, s, void 0)),
                                0 == (127 & n) && t._setNoAsyncGuarantee();
                            }
                          void 0 !== this._eachValues &&
                            (t = t._then(
                              this._eachComplete,
                              void 0,
                              void 0,
                              this,
                              void 0
                            )),
                            t._then(d, d, void 0, t, this);
                        }),
                        (a.prototype.reduce = function (e, t) {
                          return p(this, e, t, null);
                        }),
                        (a.reduce = function (e, t, n, i) {
                          return p(e, t, n, i);
                        });
                    };
                  },
                  { "./util": 36 },
                ],
                29: [
                  function (e, t, n) {
                    "use strict";
                    var i,
                      o = e("./util"),
                      r = o.getNativePromise();
                    if (o.isNode && "undefined" == typeof MutationObserver) {
                      var s = z.setImmediate,
                        a = re.nextTick;
                      i = o.isRecentNode
                        ? function (e) {
                            s.call(z, e);
                          }
                        : function (e) {
                            a.call(re, e);
                          };
                    } else if (
                      "function" == typeof r &&
                      "function" == typeof r.resolve
                    ) {
                      var l = r.resolve();
                      i = function (e) {
                        l.then(e);
                      };
                    } else
                      i =
                        "undefined" != typeof MutationObserver &&
                        ("undefined" == typeof window ||
                          !window.navigator ||
                          (!window.navigator.standalone && !window.cordova)) &&
                        "classList" in document.documentElement
                          ? (function () {
                              var n = document.createElement("div"),
                                i = { attributes: !0 },
                                o = !1,
                                r = document.createElement("div");
                              new MutationObserver(function () {
                                n.classList.toggle("foo"), (o = !1);
                              }).observe(r, i);
                              return function (e) {
                                var t = new MutationObserver(function () {
                                  t.disconnect(), e();
                                });
                                t.observe(n, i),
                                  o || ((o = !0), r.classList.toggle("foo"));
                              };
                            })()
                          : void 0 !== c
                          ? function (e) {
                              c(e);
                            }
                          : "undefined" != typeof setTimeout
                          ? function (e) {
                              setTimeout(e, 0);
                            }
                          : function () {
                              throw new Error(
                                "No async scheduler available\n\n    See http://goo.gl/MqrFmX\n"
                              );
                            };
                    t.exports = i;
                  },
                  { "./util": 36 },
                ],
                30: [
                  function (r, e, t) {
                    "use strict";
                    e.exports = function (e, t, n) {
                      var i = e.PromiseInspection;
                      function o(e) {
                        this.constructor$(e);
                      }
                      r("./util").inherits(o, t),
                        (o.prototype._promiseResolved = function (e, t) {
                          return (
                            (this._values[e] = t),
                            ++this._totalResolved >= this._length &&
                              (this._resolve(this._values), !0)
                          );
                        }),
                        (o.prototype._promiseFulfilled = function (e, t) {
                          var n = new i();
                          return (
                            (n._bitField = 33554432),
                            (n._settledValueField = e),
                            this._promiseResolved(t, n)
                          );
                        }),
                        (o.prototype._promiseRejected = function (e, t) {
                          var n = new i();
                          return (
                            (n._bitField = 16777216),
                            (n._settledValueField = e),
                            this._promiseResolved(t, n)
                          );
                        }),
                        (e.settle = function (e) {
                          return (
                            n.deprecated(".settle()", ".reflect()"),
                            new o(e).promise()
                          );
                        }),
                        (e.allSettled = function (e) {
                          return new o(e).promise();
                        }),
                        (e.prototype.settle = function () {
                          return e.settle(this);
                        });
                    };
                  },
                  { "./util": 36 },
                ],
                31: [
                  function (u, e, t) {
                    "use strict";
                    e.exports = function (e, t, o) {
                      var n = u("./util"),
                        i = u("./errors").RangeError,
                        r = u("./errors").AggregateError,
                        s = n.isArray,
                        a = {};
                      function l(e) {
                        this.constructor$(e),
                          (this._howMany = 0),
                          (this._unwrap = !1),
                          (this._initialized = !1);
                      }
                      function c(e, t) {
                        if ((0 | t) !== t || t < 0)
                          return o(
                            "expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n"
                          );
                        var n = new l(e),
                          i = n.promise();
                        return n.setHowMany(t), n.init(), i;
                      }
                      n.inherits(l, t),
                        (l.prototype._init = function () {
                          if (this._initialized)
                            if (0 !== this._howMany) {
                              this._init$(void 0, -5);
                              var e = s(this._values);
                              !this._isResolved() &&
                                e &&
                                this._howMany > this._canPossiblyFulfill() &&
                                this._reject(
                                  this._getRangeError(this.length())
                                );
                            } else this._resolve([]);
                        }),
                        (l.prototype.init = function () {
                          (this._initialized = !0), this._init();
                        }),
                        (l.prototype.setUnwrap = function () {
                          this._unwrap = !0;
                        }),
                        (l.prototype.howMany = function () {
                          return this._howMany;
                        }),
                        (l.prototype.setHowMany = function (e) {
                          this._howMany = e;
                        }),
                        (l.prototype._promiseFulfilled = function (e) {
                          return (
                            this._addFulfilled(e),
                            this._fulfilled() === this.howMany() &&
                              ((this._values.length = this.howMany()),
                              1 === this.howMany() && this._unwrap
                                ? this._resolve(this._values[0])
                                : this._resolve(this._values),
                              !0)
                          );
                        }),
                        (l.prototype._promiseRejected = function (e) {
                          return this._addRejected(e), this._checkOutcome();
                        }),
                        (l.prototype._promiseCancelled = function () {
                          return this._values instanceof e ||
                            null == this._values
                            ? this._cancel()
                            : (this._addRejected(a), this._checkOutcome());
                        }),
                        (l.prototype._checkOutcome = function () {
                          if (this.howMany() > this._canPossiblyFulfill()) {
                            for (
                              var e = new r(), t = this.length();
                              t < this._values.length;
                              ++t
                            )
                              this._values[t] !== a && e.push(this._values[t]);
                            return (
                              0 < e.length ? this._reject(e) : this._cancel(),
                              !0
                            );
                          }
                          return !1;
                        }),
                        (l.prototype._fulfilled = function () {
                          return this._totalResolved;
                        }),
                        (l.prototype._rejected = function () {
                          return this._values.length - this.length();
                        }),
                        (l.prototype._addRejected = function (e) {
                          this._values.push(e);
                        }),
                        (l.prototype._addFulfilled = function (e) {
                          this._values[this._totalResolved++] = e;
                        }),
                        (l.prototype._canPossiblyFulfill = function () {
                          return this.length() - this._rejected();
                        }),
                        (l.prototype._getRangeError = function (e) {
                          var t =
                            "Input array must contain at least " +
                            this._howMany +
                            " items but contains only " +
                            e +
                            " items";
                          return new i(t);
                        }),
                        (l.prototype._resolveEmptyArray = function () {
                          this._reject(this._getRangeError(0));
                        }),
                        (e.some = function (e, t) {
                          return c(e, t);
                        }),
                        (e.prototype.some = function (e) {
                          return c(this, e);
                        }),
                        (e._SomePromiseArray = l);
                    };
                  },
                  { "./errors": 12, "./util": 36 },
                ],
                32: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (e) {
                      function t(e) {
                        void 0 !== e
                          ? ((e = e._target()),
                            (this._bitField = e._bitField),
                            (this._settledValueField = e._isFateSealed()
                              ? e._settledValue()
                              : void 0))
                          : ((this._bitField = 0),
                            (this._settledValueField = void 0));
                      }
                      t.prototype._settledValue = function () {
                        return this._settledValueField;
                      };
                      var n = (t.prototype.value = function () {
                          if (!this.isFulfilled())
                            throw new TypeError(
                              "cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n"
                            );
                          return this._settledValue();
                        }),
                        i =
                          (t.prototype.error =
                          t.prototype.reason =
                            function () {
                              if (!this.isRejected())
                                throw new TypeError(
                                  "cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n"
                                );
                              return this._settledValue();
                            }),
                        o = (t.prototype.isFulfilled = function () {
                          return 0 != (33554432 & this._bitField);
                        }),
                        r = (t.prototype.isRejected = function () {
                          return 0 != (16777216 & this._bitField);
                        }),
                        s = (t.prototype.isPending = function () {
                          return 0 == (50397184 & this._bitField);
                        }),
                        a = (t.prototype.isResolved = function () {
                          return 0 != (50331648 & this._bitField);
                        });
                      (t.prototype.isCancelled = function () {
                        return 0 != (8454144 & this._bitField);
                      }),
                        (e.prototype.__isCancelled = function () {
                          return 65536 == (65536 & this._bitField);
                        }),
                        (e.prototype._isCancelled = function () {
                          return this._target().__isCancelled();
                        }),
                        (e.prototype.isCancelled = function () {
                          return 0 != (8454144 & this._target()._bitField);
                        }),
                        (e.prototype.isPending = function () {
                          return s.call(this._target());
                        }),
                        (e.prototype.isRejected = function () {
                          return r.call(this._target());
                        }),
                        (e.prototype.isFulfilled = function () {
                          return o.call(this._target());
                        }),
                        (e.prototype.isResolved = function () {
                          return a.call(this._target());
                        }),
                        (e.prototype.value = function () {
                          return n.call(this._target());
                        }),
                        (e.prototype.reason = function () {
                          var e = this._target();
                          return e._unsetRejectionIsUnhandled(), i.call(e);
                        }),
                        (e.prototype._value = function () {
                          return this._settledValue();
                        }),
                        (e.prototype._reason = function () {
                          return (
                            this._unsetRejectionIsUnhandled(),
                            this._settledValue()
                          );
                        }),
                        (e.PromiseInspection = t);
                    };
                  },
                  {},
                ],
                33: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (a, l) {
                      var c = e("./util"),
                        u = c.errorObj,
                        o = c.isObject;
                      var r = {}.hasOwnProperty;
                      return function (e, t) {
                        if (o(e)) {
                          if (e instanceof a) return e;
                          var n = (function (e) {
                            try {
                              return (function (e) {
                                return e.then;
                              })(e);
                            } catch (e) {
                              return (u.e = e), u;
                            }
                          })(e);
                          if (n === u) {
                            t && t._pushContext();
                            var i = a.reject(n.e);
                            return t && t._popContext(), i;
                          }
                          if ("function" == typeof n) {
                            if (
                              (function (e) {
                                try {
                                  return r.call(e, "_promise0");
                                } catch (e) {
                                  return;
                                }
                              })(e)
                            ) {
                              i = new a(l);
                              return (
                                e._then(i._fulfill, i._reject, void 0, i, null),
                                i
                              );
                            }
                            return (function (e, t, n) {
                              var i = new a(l),
                                o = i;
                              n && n._pushContext();
                              i._captureStackTrace(), n && n._popContext();
                              var r = !0,
                                s = c.tryCatch(t).call(
                                  e,
                                  function (e) {
                                    if (!i) return;
                                    i._resolveCallback(e), (i = null);
                                  },
                                  function (e) {
                                    if (!i) return;
                                    i._rejectCallback(e, r, !0), (i = null);
                                  }
                                );
                              (r = !1),
                                i &&
                                  s === u &&
                                  (i._rejectCallback(s.e, !0, !0), (i = null));
                              return o;
                            })(e, n, t);
                          }
                        }
                        return e;
                      };
                    };
                  },
                  { "./util": 36 },
                ],
                34: [
                  function (e, t, n) {
                    "use strict";
                    t.exports = function (o, r, a) {
                      var l = e("./util"),
                        c = o.TimeoutError;
                      function u(e) {
                        this.handle = e;
                      }
                      u.prototype._resultCancelled = function () {
                        clearTimeout(this.handle);
                      };
                      function s(e) {
                        return t(+this).thenReturn(e);
                      }
                      var t = (o.delay = function (e, t) {
                        var n, i;
                        return (
                          void 0 !== t
                            ? ((n = o
                                .resolve(t)
                                ._then(s, null, null, e, void 0)),
                              a.cancellation() &&
                                t instanceof o &&
                                n._setOnCancel(t))
                            : ((n = new o(r)),
                              (i = setTimeout(function () {
                                n._fulfill();
                              }, +e)),
                              a.cancellation() && n._setOnCancel(new u(i)),
                              n._captureStackTrace()),
                          n._setAsyncGuaranteed(),
                          n
                        );
                      });
                      o.prototype.delay = function (e) {
                        return t(e, this);
                      };
                      function n(e) {
                        return clearTimeout(this.handle), e;
                      }
                      function i(e) {
                        throw (clearTimeout(this.handle), e);
                      }
                      o.prototype.timeout = function (e, o) {
                        var r, s;
                        e = +e;
                        var t = new u(
                          setTimeout(function () {
                            var e, t, n, i;
                            r.isPending() &&
                              ((e = r),
                              (n = s),
                              (i =
                                "string" != typeof (t = o)
                                  ? t instanceof Error
                                    ? t
                                    : new c("operation timed out")
                                  : new c(t)),
                              l.markAsOriginatingFromRejection(i),
                              e._attachExtraTrace(i),
                              e._reject(i),
                              null != n && n.cancel());
                          }, e)
                        );
                        return (
                          a.cancellation()
                            ? ((s = this.then()),
                              (r = s._then(
                                n,
                                i,
                                void 0,
                                t,
                                void 0
                              ))._setOnCancel(t))
                            : (r = this._then(n, i, void 0, t, void 0)),
                          r
                        );
                      };
                    };
                  },
                  { "./util": 36 },
                ],
                35: [
                  function (s, e, t) {
                    "use strict";
                    e.exports = function (p, f, h, t, e, g) {
                      var v = s("./util"),
                        n = s("./errors").TypeError,
                        i = s("./util").inherits,
                        y = v.errorObj,
                        m = v.tryCatch,
                        o = {};
                      function c(e) {
                        setTimeout(function () {
                          throw e;
                        }, 0);
                      }
                      function b(o, r) {
                        var s = 0,
                          a = o.length,
                          l = new p(e);
                        return (
                          (function e() {
                            if (a <= s) return l._fulfill();
                            var t,
                              n,
                              i =
                                ((t = o[s++]),
                                (n = h(t)) !== t &&
                                  "function" == typeof t._isDisposable &&
                                  "function" == typeof t._getDisposer &&
                                  t._isDisposable() &&
                                  n._setDisposable(t._getDisposer()),
                                n);
                            if (i instanceof p && i._isDisposable()) {
                              try {
                                i = h(
                                  i._getDisposer().tryDispose(r),
                                  o.promise
                                );
                              } catch (e) {
                                return c(e);
                              }
                              if (i instanceof p)
                                return i._then(e, c, null, null, null);
                            }
                            e();
                          })(),
                          l
                        );
                      }
                      function _(e, t, n) {
                        (this._data = e),
                          (this._promise = t),
                          (this._context = n);
                      }
                      function r(e, t, n) {
                        this.constructor$(e, t, n);
                      }
                      function w(e) {
                        return _.isDisposer(e)
                          ? (this.resources[this.index]._setDisposable(e),
                            e.promise())
                          : e;
                      }
                      function C(e) {
                        (this.length = e),
                          (this.promise = null),
                          (this[e - 1] = null);
                      }
                      (_.prototype.data = function () {
                        return this._data;
                      }),
                        (_.prototype.promise = function () {
                          return this._promise;
                        }),
                        (_.prototype.resource = function () {
                          return this.promise().isFulfilled()
                            ? this.promise().value()
                            : o;
                        }),
                        (_.prototype.tryDispose = function (e) {
                          var t = this.resource(),
                            n = this._context;
                          void 0 !== n && n._pushContext();
                          var i = t !== o ? this.doDispose(t, e) : null;
                          return (
                            void 0 !== n && n._popContext(),
                            this._promise._unsetDisposable(),
                            (this._data = null),
                            i
                          );
                        }),
                        (_.isDisposer = function (e) {
                          return (
                            null != e &&
                            "function" == typeof e.resource &&
                            "function" == typeof e.tryDispose
                          );
                        }),
                        i(r, _),
                        (r.prototype.doDispose = function (e, t) {
                          return this.data().call(e, e, t);
                        }),
                        (C.prototype._resultCancelled = function () {
                          for (var e = this.length, t = 0; t < e; ++t) {
                            var n = this[t];
                            n instanceof p && n.cancel();
                          }
                        }),
                        (p.using = function () {
                          var e = arguments.length;
                          if (e < 2)
                            return f(
                              "you must pass at least 2 arguments to Promise.using"
                            );
                          var t,
                            r = arguments[e - 1];
                          if ("function" != typeof r)
                            return f(
                              "expecting a function but got " + v.classString(r)
                            );
                          var s = !0;
                          2 === e && Array.isArray(arguments[0])
                            ? ((e = (t = arguments[0]).length), (s = !1))
                            : ((t = arguments), e--);
                          for (var n = new C(e), i = 0; i < e; ++i) {
                            var o = t[i];
                            if (_.isDisposer(o)) {
                              var a = o;
                              (o = o.promise())._setDisposable(a);
                            } else {
                              var l = h(o);
                              l instanceof p &&
                                (o = l._then(
                                  w,
                                  null,
                                  null,
                                  { resources: n, index: i },
                                  void 0
                                ));
                            }
                            n[i] = o;
                          }
                          var c = new Array(n.length);
                          for (i = 0; i < c.length; ++i)
                            c[i] = p.resolve(n[i]).reflect();
                          var u = p.all(c).then(function (e) {
                              for (var t = 0; t < e.length; ++t) {
                                var n = e[t];
                                if (n.isRejected()) return (y.e = n.error()), y;
                                if (!n.isFulfilled()) return void u.cancel();
                                e[t] = n.value();
                              }
                              d._pushContext(), (r = m(r));
                              var i = s ? r.apply(void 0, e) : r(e),
                                o = d._popContext();
                              return (
                                g.checkForgottenReturns(
                                  i,
                                  o,
                                  "Promise.using",
                                  d
                                ),
                                i
                              );
                            }),
                            d = u.lastly(function () {
                              var e = new p.PromiseInspection(u);
                              return b(n, e);
                            });
                          return (n.promise = d)._setOnCancel(n), d;
                        }),
                        (p.prototype._setDisposable = function (e) {
                          (this._bitField = 131072 | this._bitField),
                            (this._disposer = e);
                        }),
                        (p.prototype._isDisposable = function () {
                          return 0 < (131072 & this._bitField);
                        }),
                        (p.prototype._getDisposer = function () {
                          return this._disposer;
                        }),
                        (p.prototype._unsetDisposable = function () {
                          (this._bitField = -131073 & this._bitField),
                            (this._disposer = void 0);
                        }),
                        (p.prototype.disposer = function (e) {
                          if ("function" == typeof e)
                            return new r(e, this, t());
                          throw new n();
                        });
                    };
                  },
                  { "./errors": 12, "./util": 36 },
                ],
                36: [
                  function (e, t, n) {
                    "use strict";
                    var c = e("./es5"),
                      i = "undefined" == typeof navigator,
                      o = { e: {} },
                      r,
                      s =
                        "undefined" != typeof self
                          ? self
                          : "undefined" != typeof window
                          ? window
                          : void 0 !== z
                          ? z
                          : void 0 !== this
                          ? this
                          : null;
                    function a() {
                      try {
                        var e = r;
                        return (r = null), e.apply(this, arguments);
                      } catch (e) {
                        return (o.e = e), o;
                      }
                    }
                    function l(e) {
                      return (r = e), a;
                    }
                    var u = function (t, n) {
                      var i = {}.hasOwnProperty;
                      function e() {
                        for (var e in ((this.constructor = t),
                        (this.constructor$ = n).prototype))
                          i.call(n.prototype, e) &&
                            "$" !== e.charAt(e.length - 1) &&
                            (this[e + "$"] = n.prototype[e]);
                      }
                      return (
                        (e.prototype = n.prototype),
                        (t.prototype = new e()),
                        t.prototype
                      );
                    };
                    function d(e) {
                      return (
                        null == e ||
                        !0 === e ||
                        !1 === e ||
                        "string" == typeof e ||
                        "number" == typeof e
                      );
                    }
                    function p(e) {
                      return (
                        "function" == typeof e ||
                        ("object" == typeof e && null !== e)
                      );
                    }
                    function f(e) {
                      return d(e) ? new Error(x(e)) : e;
                    }
                    function h(e, t) {
                      var n,
                        i = e.length,
                        o = new Array(i + 1);
                      for (n = 0; n < i; ++n) o[n] = e[n];
                      return (o[n] = t), o;
                    }
                    function g(e, t, n) {
                      if (!c.isES5)
                        return {}.hasOwnProperty.call(e, t) ? e[t] : void 0;
                      var i = Object.getOwnPropertyDescriptor(e, t);
                      return null != i
                        ? null == i.get && null == i.set
                          ? i.value
                          : n
                        : void 0;
                    }
                    function v(e, t, n) {
                      if (d(e)) return e;
                      var i = {
                        value: n,
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                      };
                      return c.defineProperty(e, t, i), e;
                    }
                    function y(e) {
                      throw e;
                    }
                    var m = (function () {
                        function a(e) {
                          for (var t = 0; t < o.length; ++t)
                            if (o[t] === e) return 1;
                        }
                        var o = [
                          Array.prototype,
                          Object.prototype,
                          Function.prototype,
                        ];
                        if (c.isES5) {
                          var l = Object.getOwnPropertyNames;
                          return function (e) {
                            for (
                              var t = [], n = Object.create(null);
                              null != e && !a(e);

                            ) {
                              var i;
                              try {
                                i = l(e);
                              } catch (e) {
                                return t;
                              }
                              for (var o = 0; o < i.length; ++o) {
                                var r = i[o];
                                if (!n[r]) {
                                  n[r] = !0;
                                  var s = Object.getOwnPropertyDescriptor(e, r);
                                  null != s &&
                                    null == s.get &&
                                    null == s.set &&
                                    t.push(r);
                                }
                              }
                              e = c.getPrototypeOf(e);
                            }
                            return t;
                          };
                        }
                        var r = {}.hasOwnProperty;
                        return function (e) {
                          if (a(e)) return [];
                          var t = [];
                          e: for (var n in e)
                            if (r.call(e, n)) t.push(n);
                            else {
                              for (var i = 0; i < o.length; ++i)
                                if (r.call(o[i], n)) continue e;
                              t.push(n);
                            }
                          return t;
                        };
                      })(),
                      b = /this\s*\.\s*\S+\s*=/;
                    function _(e) {
                      try {
                        if ("function" == typeof e) {
                          var t = c.names(e.prototype),
                            n = c.isES5 && 1 < t.length,
                            i =
                              0 < t.length &&
                              !(1 === t.length && "constructor" === t[0]),
                            o = b.test(e + "") && 0 < c.names(e).length;
                          if (n || i || o) return !0;
                        }
                        return !1;
                      } catch (e) {
                        return !1;
                      }
                    }
                    function w(e) {
                      function t() {}
                      t.prototype = e;
                      var n = new t();
                      function i() {
                        return n.foo, 1;
                      }
                      return i(), i(), e;
                    }
                    var C = /^[a-z$_][a-z$_0-9]*$/i;
                    function k(e) {
                      return C.test(e);
                    }
                    function T(e, t, n) {
                      for (var i = new Array(e), o = 0; o < e; ++o)
                        i[o] = t + o + n;
                      return i;
                    }
                    function x(e) {
                      try {
                        return e + "";
                      } catch (e) {
                        return "[no string representation]";
                      }
                    }
                    function S(e) {
                      return (
                        e instanceof Error ||
                        (null !== e &&
                          "object" == typeof e &&
                          "string" == typeof e.message &&
                          "string" == typeof e.name)
                      );
                    }
                    function E(e) {
                      try {
                        v(e, "isOperational", !0);
                      } catch (e) {}
                    }
                    function j(e) {
                      return (
                        null != e &&
                        (e instanceof
                          Error.__BluebirdErrorTypes__.OperationalError ||
                          !0 === e.isOperational)
                      );
                    }
                    function A(e) {
                      return S(e) && c.propertyIsWritable(e, "stack");
                    }
                    var P =
                      "stack" in new Error()
                        ? function (e) {
                            return A(e) ? e : new Error(x(e));
                          }
                        : function (e) {
                            if (A(e)) return e;
                            try {
                              throw new Error(x(e));
                            } catch (e) {
                              return e;
                            }
                          };
                    function O(e) {
                      return {}.toString.call(e);
                    }
                    function $(e, t, n) {
                      for (var i = c.names(e), o = 0; o < i.length; ++o) {
                        var r = i[o];
                        if (n(r))
                          try {
                            c.defineProperty(t, r, c.getDescriptor(e, r));
                          } catch (e) {}
                      }
                    }
                    var D = function (e) {
                      return c.isArray(e) ? e : null;
                    };
                    if ("undefined" != typeof Symbol && Symbol.iterator) {
                      var I =
                        "function" == typeof Array.from
                          ? function (e) {
                              return Array.from(e);
                            }
                          : function (e) {
                              for (
                                var t, n = [], i = e[Symbol.iterator]();
                                !(t = i.next()).done;

                              )
                                n.push(t.value);
                              return n;
                            };
                      D = function (e) {
                        return c.isArray(e)
                          ? e
                          : null != e && "function" == typeof e[Symbol.iterator]
                          ? I(e)
                          : null;
                      };
                    }
                    var F =
                        void 0 !== re &&
                        "[object process]" === O(re).toLowerCase(),
                      H = void 0 !== re && void 0 !== re.env,
                      M;
                    function N(e) {
                      return H ? re.env[e] : void 0;
                    }
                    function R() {
                      if ("function" == typeof Promise)
                        try {
                          if (
                            "[object Promise]" ===
                            O(new Promise(function () {}))
                          )
                            return Promise;
                        } catch (e) {}
                    }
                    function L(e, t) {
                      if (null === e || "function" != typeof t || t === M)
                        return t;
                      null !== e.domain && (t = e.domain.bind(t));
                      var n = e.async;
                      if (null !== n) {
                        var i = t;
                        t = function () {
                          var e = new Array(2).concat([].slice.call(arguments));
                          return (
                            (e[0] = i),
                            (e[1] = this),
                            n.runInAsyncScope.apply(n, e)
                          );
                        };
                      }
                      return t;
                    }
                    var q = {
                        setReflectHandler: function (e) {
                          M = e;
                        },
                        isClass: _,
                        isIdentifier: k,
                        inheritedDataKeys: m,
                        getDataPropertyOrDefault: g,
                        thrower: y,
                        isArray: c.isArray,
                        asArray: D,
                        notEnumerableProp: v,
                        isPrimitive: d,
                        isObject: p,
                        isError: S,
                        canEvaluate: i,
                        errorObj: o,
                        tryCatch: l,
                        inherits: u,
                        withAppended: h,
                        maybeWrapAsError: f,
                        toFastProperties: w,
                        filledRange: T,
                        toString: x,
                        canAttachTrace: A,
                        ensureErrorObject: P,
                        originatesFromRejection: j,
                        markAsOriginatingFromRejection: E,
                        classString: O,
                        copyDescriptors: $,
                        isNode: F,
                        hasEnvVariables: H,
                        env: N,
                        global: s,
                        getNativePromise: R,
                        contextBind: L,
                      },
                      B;
                    (q.isRecentNode =
                      q.isNode &&
                      (re.versions && re.versions.node
                        ? (B = re.versions.node.split(".").map(Number))
                        : re.version && (B = re.version.split(".").map(Number)),
                      (0 === B[0] && 10 < B[1]) || 0 < B[0])),
                      (q.nodeSupportsAsyncResource =
                        q.isNode &&
                        (function () {
                          var t = !1;
                          try {
                            t =
                              "function" ==
                              typeof e("async_hooks").AsyncResource.prototype
                                .runInAsyncScope;
                          } catch (e) {
                            t = !1;
                          }
                          return t;
                        })()),
                      q.isNode && q.toFastProperties(re);
                    try {
                      throw new Error();
                    } catch (e) {
                      q.lastLineError = e;
                    }
                    t.exports = q;
                  },
                  { "./es5": 13, async_hooks: void 0 },
                ],
              },
              {},
              [4]
            )(4);
          }),
            "undefined" != typeof window && null !== window
              ? (window.P = window.Promise)
              : "undefined" != typeof self &&
                null !== self &&
                (self.P = self.Promise);
        }.call(
          this,
          e("_process"),
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {},
          e("timers").setImmediate
        ));
      },
      { _process: 3, timers: 5 },
    ],
    2: [
      function (e, n, t) {
        !(function (e, t) {
          "use strict";
          "object" == typeof n && "object" == typeof n.exports
            ? (n.exports = e.document
                ? t(e, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return t(e);
                  })
            : t(e);
        })("undefined" != typeof window ? window : this, function (k, e) {
          "use strict";
          function g(e) {
            return null != e && e === e.window;
          }
          var t = [],
            i = Object.getPrototypeOf,
            a = t.slice,
            v = t.flat
              ? function (e) {
                  return t.flat.call(e);
                }
              : function (e) {
                  return t.concat.apply([], e);
                },
            l = t.push,
            o = t.indexOf,
            n = {},
            r = n.toString,
            y = n.hasOwnProperty,
            s = y.toString,
            c = s.call(Object),
            m = {},
            b = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType;
            },
            T = k.document,
            u = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function _(e, t, n) {
            var i,
              o,
              r = (n = n || T).createElement("script");
            if (((r.text = e), t))
              for (i in u)
                (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  r.setAttribute(i, o);
            n.head.appendChild(r).parentNode.removeChild(r);
          }
          function w(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? n[r.call(e)] || "object"
              : typeof e;
          }
          var x = function (e, t) {
            return new x.fn.init(e, t);
          };
          function d(e) {
            var t = !!e && "length" in e && e.length,
              n = w(e);
            return (
              !b(e) &&
              !g(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
            );
          }
          (x.fn = x.prototype =
            {
              jquery: "3.5.1",
              constructor: x,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = x.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return x.each(this, e);
              },
              map: function (n) {
                return this.pushStack(
                  x.map(this, function (e, t) {
                    return n.call(e, t, e);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  x.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  x.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: t.sort,
              splice: t.splice,
            }),
            (x.extend = x.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  o,
                  r,
                  s = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof s &&
                    ((c = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || b(s) || (s = {}),
                    a === l && ((s = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          s !== i &&
                          (c &&
                          i &&
                          (x.isPlainObject(i) || (o = Array.isArray(i)))
                            ? ((n = s[t]),
                              (r =
                                o && !Array.isArray(n)
                                  ? []
                                  : o || x.isPlainObject(n)
                                  ? n
                                  : {}),
                              (o = !1),
                              (s[t] = x.extend(c, r, i)))
                            : void 0 !== i && (s[t] = i));
                return s;
              }),
            x.extend({
              expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== r.call(e)) &&
                  (!(t = i(e)) ||
                    ("function" ==
                      typeof (n = y.call(t, "constructor") && t.constructor) &&
                      s.call(n) === c))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                _(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (d(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (d(Object(e))
                      ? x.merge(n, "string" == typeof e ? [e] : e)
                      : l.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : o.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                  e[o++] = t[i];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                  !t(e[o], o) != s && i.push(e[o]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  o,
                  r = 0,
                  s = [];
                if (d(e))
                  for (i = e.length; r < i; r++)
                    null != (o = t(e[r], r, n)) && s.push(o);
                else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                return v(s);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (x.fn[Symbol.iterator] = t[Symbol.iterator]),
            x.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                n["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var p = (function (n) {
            function d(e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(65536 + n)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            }
            function o() {
              C();
            }
            var e,
              f,
              _,
              r,
              s,
              h,
              p,
              g,
              w,
              l,
              c,
              C,
              k,
              a,
              T,
              v,
              u,
              y,
              m,
              x = "sizzle" + +new Date(),
              b = n.document,
              S = 0,
              i = 0,
              E = le(),
              j = le(),
              A = le(),
              P = le(),
              O = function (e, t) {
                return e === t && (c = !0), 0;
              },
              $ = {}.hasOwnProperty,
              t = [],
              D = t.pop,
              I = t.push,
              F = t.push,
              H = t.slice,
              M = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              N =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              R = "[\\x20\\t\\r\\n\\f]",
              L =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                R +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              q =
                "\\[" +
                R +
                "*(" +
                L +
                ")(?:" +
                R +
                "*([*^$|!~]?=)" +
                R +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                L +
                "))|)" +
                R +
                "*\\]",
              B =
                ":(" +
                L +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                q +
                ")*)|.*)\\)|)",
              z = new RegExp(R + "+", "g"),
              U = new RegExp(
                "^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
                "g"
              ),
              W = new RegExp("^" + R + "*," + R + "*"),
              V = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
              X = new RegExp(R + "|>"),
              Q = new RegExp(B),
              G = new RegExp("^" + L + "$"),
              Y = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    R +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    R +
                    "*(?:([+-]|)" +
                    R +
                    "*(\\d+)|))" +
                    R +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    R +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    R +
                    "*((?:-\\d)?\\d*)" +
                    R +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              J = /HTML$/i,
              K = /^(?:input|select|textarea|button)$/i,
              Z = /^h\d$/i,
              ee = /^[^{]+\{\s*\[native \w/,
              te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ne = /[+~]/,
              ie = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                return t
                  ? "\0" === e
                    ? "ï¿½"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              se = _e(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              F.apply((t = H.call(b.childNodes)), b.childNodes),
                t[b.childNodes.length].nodeType;
            } catch (e) {
              F = {
                apply: t.length
                  ? function (e, t) {
                      I.apply(e, H.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(t, e, n, i) {
              var o,
                r,
                s,
                a,
                l,
                c,
                u,
                d = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
              if (
                ((n = n || []),
                "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
              )
                return n;
              if (!i && (C(e), (e = e || k), T)) {
                if (11 !== p && (l = te.exec(t)))
                  if ((o = l[1])) {
                    if (9 === p) {
                      if (!(s = e.getElementById(o))) return n;
                      if (s.id === o) return n.push(s), n;
                    } else if (
                      d &&
                      (s = d.getElementById(o)) &&
                      m(e, s) &&
                      s.id === o
                    )
                      return n.push(s), n;
                  } else {
                    if (l[2]) return F.apply(n, e.getElementsByTagName(t)), n;
                    if (
                      (o = l[3]) &&
                      f.getElementsByClassName &&
                      e.getElementsByClassName
                    )
                      return F.apply(n, e.getElementsByClassName(o)), n;
                  }
                if (
                  f.qsa &&
                  !P[t + " "] &&
                  (!v || !v.test(t)) &&
                  (1 !== p || "object" !== e.nodeName.toLowerCase())
                ) {
                  if (((u = t), (d = e), 1 === p && (X.test(t) || V.test(t)))) {
                    for (
                      ((d = (ne.test(t) && ye(e.parentNode)) || e) === e &&
                        f.scope) ||
                        ((a = e.getAttribute("id"))
                          ? (a = a.replace(oe, re))
                          : e.setAttribute("id", (a = x))),
                        r = (c = h(t)).length;
                      r--;

                    )
                      c[r] = (a ? "#" + a : ":scope") + " " + be(c[r]);
                    u = c.join(",");
                  }
                  try {
                    return F.apply(n, d.querySelectorAll(u)), n;
                  } catch (e) {
                    P(t, !0);
                  } finally {
                    a === x && e.removeAttribute("id");
                  }
                }
              }
              return g(t.replace(U, "$1"), e, n, i);
            }
            function le() {
              var i = [];
              return function e(t, n) {
                return (
                  i.push(t + " ") > _.cacheLength && delete e[i.shift()],
                  (e[t + " "] = n)
                );
              };
            }
            function ce(e) {
              return (e[x] = !0), e;
            }
            function ue(e) {
              var t = k.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function de(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                _.attrHandle[n[i]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(t) {
              return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
              };
            }
            function he(n) {
              return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
              };
            }
            function ge(t) {
              return function (e) {
                return "form" in e
                  ? e.parentNode && !1 === e.disabled
                    ? "label" in e
                      ? "label" in e.parentNode
                        ? e.parentNode.disabled === t
                        : e.disabled === t
                      : e.isDisabled === t ||
                        (e.isDisabled !== !t && se(e) === t)
                    : e.disabled === t
                  : "label" in e && e.disabled === t;
              };
            }
            function ve(s) {
              return ce(function (r) {
                return (
                  (r = +r),
                  ce(function (e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--; )
                      e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
                  })
                );
              });
            }
            function ye(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (e in ((f = ae.support = {}),
            (s = ae.isXML =
              function (e) {
                var t = e.namespaceURI,
                  n = (e.ownerDocument || e).documentElement;
                return !J.test(t || (n && n.nodeName) || "HTML");
              }),
            (C = ae.setDocument =
              function (e) {
                var t,
                  n,
                  i = e ? e.ownerDocument || e : b;
                return (
                  i != k &&
                    9 === i.nodeType &&
                    i.documentElement &&
                    ((a = (k = i).documentElement),
                    (T = !s(k)),
                    b != k &&
                      (n = k.defaultView) &&
                      n.top !== n &&
                      (n.addEventListener
                        ? n.addEventListener("unload", o, !1)
                        : n.attachEvent && n.attachEvent("onunload", o)),
                    (f.scope = ue(function (e) {
                      return (
                        a.appendChild(e).appendChild(k.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (f.attributes = ue(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (f.getElementsByTagName = ue(function (e) {
                      return (
                        e.appendChild(k.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (f.getElementsByClassName = ee.test(
                      k.getElementsByClassName
                    )),
                    (f.getById = ue(function (e) {
                      return (
                        (a.appendChild(e).id = x),
                        !k.getElementsByName || !k.getElementsByName(x).length
                      );
                    })),
                    f.getById
                      ? ((_.filter.ID = function (e) {
                          var t = e.replace(ie, d);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (_.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && T) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((_.filter.ID = function (e) {
                          var n = e.replace(ie, d);
                          return function (e) {
                            var t =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return t && t.value === n;
                          };
                        }),
                        (_.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && T) {
                            var n,
                              i,
                              o,
                              r = t.getElementById(e);
                            if (r) {
                              if (
                                (n = r.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [r];
                              for (
                                o = t.getElementsByName(e), i = 0;
                                (r = o[i++]);

                              )
                                if (
                                  (n = r.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [r];
                            }
                            return [];
                          }
                        })),
                    (_.find.TAG = f.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : f.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                          if ("*" !== e) return r;
                          for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                          return i;
                        }),
                    (_.find.CLASS =
                      f.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && T)
                          return t.getElementsByClassName(e);
                      }),
                    (u = []),
                    (v = []),
                    (f.qsa = ee.test(k.querySelectorAll)) &&
                      (ue(function (e) {
                        var t;
                        (a.appendChild(e).innerHTML =
                          "<a id='" +
                          x +
                          "'></a><select id='" +
                          x +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            v.push("[*^$]=" + R + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            v.push("\\[" + R + "*(?:value|" + N + ")"),
                          e.querySelectorAll("[id~=" + x + "-]").length ||
                            v.push("~="),
                          (t = k.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            v.push(
                              "\\[" +
                                R +
                                "*name" +
                                R +
                                "*=" +
                                R +
                                "*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            v.push(":checked"),
                          e.querySelectorAll("a#" + x + "+*").length ||
                            v.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          v.push("[\\r\\n\\f]");
                      }),
                      ue(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = k.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            v.push("name" + R + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            v.push(":enabled", ":disabled"),
                          (a.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            v.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          v.push(",.*:");
                      })),
                    (f.matchesSelector = ee.test(
                      (y =
                        a.matches ||
                        a.webkitMatchesSelector ||
                        a.mozMatchesSelector ||
                        a.oMatchesSelector ||
                        a.msMatchesSelector)
                    )) &&
                      ue(function (e) {
                        (f.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          u.push("!=", B);
                      }),
                    (v = v.length && new RegExp(v.join("|"))),
                    (u = u.length && new RegExp(u.join("|"))),
                    (t = ee.test(a.compareDocumentPosition)),
                    (m =
                      t || ee.test(a.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (O = t
                      ? function (e, t) {
                          if (e === t) return (c = !0), 0;
                          var n =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            n ||
                            (1 &
                              (n =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!f.sortDetached &&
                              t.compareDocumentPosition(e) === n)
                              ? e == k || (e.ownerDocument == b && m(b, e))
                                ? -1
                                : t == k || (t.ownerDocument == b && m(b, t))
                                ? 1
                                : l
                                ? M(l, e) - M(l, t)
                                : 0
                              : 4 & n
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (c = !0), 0;
                          var n,
                            i = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            s = [e],
                            a = [t];
                          if (!o || !r)
                            return e == k
                              ? -1
                              : t == k
                              ? 1
                              : o
                              ? -1
                              : r
                              ? 1
                              : l
                              ? M(l, e) - M(l, t)
                              : 0;
                          if (o === r) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) s.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; s[i] === a[i]; ) i++;
                          return i
                            ? pe(s[i], a[i])
                            : s[i] == b
                            ? -1
                            : a[i] == b
                            ? 1
                            : 0;
                        })),
                  k
                );
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (C(e),
                f.matchesSelector &&
                  T &&
                  !P[t + " "] &&
                  (!u || !u.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  var n = y.call(e, t);
                  if (
                    n ||
                    f.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return n;
                } catch (e) {
                  P(t, !0);
                }
              return 0 < ae(t, k, null, [e]).length;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != k && C(e), m(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != k && C(e);
              var n = _.attrHandle[t.toLowerCase()],
                i =
                  n && $.call(_.attrHandle, t.toLowerCase())
                    ? n(e, t, !T)
                    : void 0;
              return void 0 !== i
                ? i
                : f.attributes || !T
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(oe, re);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                n = [],
                i = 0,
                o = 0;
              if (
                ((c = !f.detectDuplicates),
                (l = !f.sortStable && e.slice(0)),
                e.sort(O),
                c)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
                for (; i--; ) e.splice(n[i], 1);
              }
              return (l = null), e;
            }),
            (r = ae.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            ((_ = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(ie, d)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(ie, d)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            Q.test(n) &&
                            (t = h(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(ie, d).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = E[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + R + ")" + e + "(" + R + "|$)"
                      )) &&
                        E(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (n, i, o) {
                    return function (e) {
                      var t = ae.attr(e, n);
                      return null == t
                        ? "!=" === i
                        : !i ||
                            ((t += ""),
                            "=" === i
                              ? t === o
                              : "!=" === i
                              ? t !== o
                              : "^=" === i
                              ? o && 0 === t.indexOf(o)
                              : "*=" === i
                              ? o && -1 < t.indexOf(o)
                              : "$=" === i
                              ? o && t.slice(-o.length) === o
                              : "~=" === i
                              ? -1 < (" " + t.replace(z, " ") + " ").indexOf(o)
                              : "|=" === i &&
                                (t === o ||
                                  t.slice(0, o.length + 1) === o + "-"));
                    };
                  },
                  CHILD: function (h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3),
                      m = "last" !== h.slice(-4),
                      b = "of-type" === e;
                    return 1 === g && 0 === v
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (e, t, n) {
                          var i,
                            o,
                            r,
                            s,
                            a,
                            l,
                            c = y != m ? "nextSibling" : "previousSibling",
                            u = e.parentNode,
                            d = b && e.nodeName.toLowerCase(),
                            p = !n && !b,
                            f = !1;
                          if (u) {
                            if (y) {
                              for (; c; ) {
                                for (s = e; (s = s[c]); )
                                  if (
                                    b
                                      ? s.nodeName.toLowerCase() === d
                                      : 1 === s.nodeType
                                  )
                                    return !1;
                                l = c = "only" === h && !l && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((l = [m ? u.firstChild : u.lastChild]), m && p)
                            ) {
                              for (
                                f =
                                  (a =
                                    (i =
                                      (o =
                                        (r = (s = u)[x] || (s[x] = {}))[
                                          s.uniqueID
                                        ] || (r[s.uniqueID] = {}))[h] ||
                                      [])[0] === S && i[1]) && i[2],
                                  s = a && u.childNodes[a];
                                (s =
                                  (++a && s && s[c]) || (f = a = 0) || l.pop());

                              )
                                if (1 === s.nodeType && ++f && s === e) {
                                  o[h] = [S, a, f];
                                  break;
                                }
                            } else if (
                              (p &&
                                (f = a =
                                  (i =
                                    (o =
                                      (r = (s = e)[x] || (s[x] = {}))[
                                        s.uniqueID
                                      ] || (r[s.uniqueID] = {}))[h] ||
                                    [])[0] === S && i[1]),
                              !1 === f)
                            )
                              for (
                                ;
                                (s =
                                  (++a && s && s[c]) ||
                                  (f = a = 0) ||
                                  l.pop()) &&
                                ((b
                                  ? s.nodeName.toLowerCase() !== d
                                  : 1 !== s.nodeType) ||
                                  !++f ||
                                  (p &&
                                    ((o =
                                      (r = s[x] || (s[x] = {}))[s.uniqueID] ||
                                      (r[s.uniqueID] = {}))[h] = [S, f]),
                                  s !== e));

                              );
                            return (f -= v) === g || (f % g == 0 && 0 <= f / g);
                          }
                        };
                  },
                  PSEUDO: function (e, r) {
                    var t,
                      s =
                        _.pseudos[e] ||
                        _.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return s[x]
                      ? s(r)
                      : 1 < s.length
                      ? ((t = [e, e, "", r]),
                        _.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, t) {
                              for (var n, i = s(e, r), o = i.length; o--; )
                                e[(n = M(e, i[o]))] = !(t[n] = i[o]);
                            })
                          : function (e) {
                              return s(e, 0, t);
                            })
                      : s;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var i = [],
                      o = [],
                      a = p(e.replace(U, "$1"));
                    return a[x]
                      ? ce(function (e, t, n, i) {
                          for (
                            var o, r = a(e, null, i, []), s = e.length;
                            s--;

                          )
                            (o = r[s]) && (e[s] = !(t[s] = o));
                        })
                      : function (e, t, n) {
                          return (
                            (i[0] = e),
                            a(i, null, n, o),
                            (i[0] = null),
                            !o.pop()
                          );
                        };
                  }),
                  has: ce(function (t) {
                    return function (e) {
                      return 0 < ae(t, e).length;
                    };
                  }),
                  contains: ce(function (t) {
                    return (
                      (t = t.replace(ie, d)),
                      function (e) {
                        return -1 < (e.textContent || r(e)).indexOf(t);
                      }
                    );
                  }),
                  lang: ce(function (n) {
                    return (
                      G.test(n || "") || ae.error("unsupported lang: " + n),
                      (n = n.replace(ie, d).toLowerCase()),
                      function (e) {
                        var t;
                        do {
                          if (
                            (t = T
                              ? e.lang
                              : e.getAttribute("xml:lang") ||
                                e.getAttribute("lang"))
                          )
                            return (
                              (t = t.toLowerCase()) === n ||
                              0 === t.indexOf(n + "-")
                            );
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                  },
                  root: function (e) {
                    return e === a;
                  },
                  focus: function (e) {
                    return (
                      e === k.activeElement &&
                      (!k.hasFocus || k.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !_.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Z.test(e.nodeName);
                  },
                  input: function (e) {
                    return K.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ve(function () {
                    return [0];
                  }),
                  last: ve(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ve(function (e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                      e.push(i);
                    return e;
                  }),
                  gt: ve(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }).pseudos.nth = _.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              _.pseudos[e] = fe(e);
            for (e in { submit: !0, reset: !0 }) _.pseudos[e] = he(e);
            function me() {}
            function be(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function _e(a, e, t) {
              var l = e.dir,
                c = e.next,
                u = c || l,
                d = t && "parentNode" === u,
                p = i++;
              return e.first
                ? function (e, t, n) {
                    for (; (e = e[l]); )
                      if (1 === e.nodeType || d) return a(e, t, n);
                    return !1;
                  }
                : function (e, t, n) {
                    var i,
                      o,
                      r,
                      s = [S, p];
                    if (n) {
                      for (; (e = e[l]); )
                        if ((1 === e.nodeType || d) && a(e, t, n)) return !0;
                    } else
                      for (; (e = e[l]); )
                        if (1 === e.nodeType || d)
                          if (
                            ((o =
                              (r = e[x] || (e[x] = {}))[e.uniqueID] ||
                              (r[e.uniqueID] = {})),
                            c && c === e.nodeName.toLowerCase())
                          )
                            e = e[l] || e;
                          else {
                            if ((i = o[u]) && i[0] === S && i[1] === p)
                              return (s[2] = i[2]);
                            if (((o[u] = s)[2] = a(e, t, n))) return !0;
                          }
                    return !1;
                  };
            }
            function we(o) {
              return 1 < o.length
                ? function (e, t, n) {
                    for (var i = o.length; i--; ) if (!o[i](e, t, n)) return !1;
                    return !0;
                  }
                : o[0];
            }
            function Ce(e, t, n, i, o) {
              for (
                var r, s = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (r = e[a]) &&
                  ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
              return s;
            }
            function ke(f, h, g, v, y, e) {
              return (
                v && !v[x] && (v = ke(v)),
                y && !y[x] && (y = ke(y, e)),
                ce(function (e, t, n, i) {
                  var o,
                    r,
                    s,
                    a = [],
                    l = [],
                    c = t.length,
                    u =
                      e ||
                      (function (e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++)
                          ae(e, t[i], n);
                        return n;
                      })(h || "*", n.nodeType ? [n] : n, []),
                    d = !f || (!e && h) ? u : Ce(u, a, f, n, i),
                    p = g ? (y || (e ? f : c || v) ? [] : t) : d;
                  if ((g && g(d, p, n, i), v))
                    for (o = Ce(p, l), v(o, [], n, i), r = o.length; r--; )
                      (s = o[r]) && (p[l[r]] = !(d[l[r]] = s));
                  if (e) {
                    if (y || f) {
                      if (y) {
                        for (o = [], r = p.length; r--; )
                          (s = p[r]) && o.push((d[r] = s));
                        y(null, (p = []), o, i);
                      }
                      for (r = p.length; r--; )
                        (s = p[r]) &&
                          -1 < (o = y ? M(e, s) : a[r]) &&
                          (e[o] = !(t[o] = s));
                    }
                  } else (p = Ce(p === t ? p.splice(c, p.length) : p)), y ? y(null, t, p, i) : F.apply(t, p);
                })
              );
            }
            function Te(e) {
              for (
                var o,
                  t,
                  n,
                  i = e.length,
                  r = _.relative[e[0].type],
                  s = r || _.relative[" "],
                  a = r ? 1 : 0,
                  l = _e(
                    function (e) {
                      return e === o;
                    },
                    s,
                    !0
                  ),
                  c = _e(
                    function (e) {
                      return -1 < M(o, e);
                    },
                    s,
                    !0
                  ),
                  u = [
                    function (e, t, n) {
                      var i =
                        (!r && (n || t !== w)) ||
                        ((o = t).nodeType ? l : c)(e, t, n);
                      return (o = null), i;
                    },
                  ];
                a < i;
                a++
              )
                if ((t = _.relative[e[a].type])) u = [_e(we(u), t)];
                else {
                  if ((t = _.filter[e[a].type].apply(null, e[a].matches))[x]) {
                    for (n = ++a; n < i && !_.relative[e[n].type]; n++);
                    return ke(
                      1 < a && we(u),
                      1 < a &&
                        be(
                          e
                            .slice(0, a - 1)
                            .concat({ value: " " === e[a - 2].type ? "*" : "" })
                        ).replace(U, "$1"),
                      t,
                      a < n && Te(e.slice(a, n)),
                      n < i && Te((e = e.slice(n))),
                      n < i && be(e)
                    );
                  }
                  u.push(t);
                }
              return we(u);
            }
            function xe(v, y) {
              function e(e, t, n, i, o) {
                var r,
                  s,
                  a,
                  l = 0,
                  c = "0",
                  u = e && [],
                  d = [],
                  p = w,
                  f = e || (b && _.find.TAG("*", o)),
                  h = (S += null == p ? 1 : Math.random() || 0.1),
                  g = f.length;
                for (
                  o && (w = t == k || t || o);
                  c !== g && null != (r = f[c]);
                  c++
                ) {
                  if (b && r) {
                    for (
                      s = 0, t || r.ownerDocument == k || (C(r), (n = !T));
                      (a = v[s++]);

                    )
                      if (a(r, t || k, n)) {
                        i.push(r);
                        break;
                      }
                    o && (S = h);
                  }
                  m && ((r = !a && r) && l--, e && u.push(r));
                }
                if (((l += c), m && c !== l)) {
                  for (s = 0; (a = y[s++]); ) a(u, d, t, n);
                  if (e) {
                    if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = D.call(i));
                    d = Ce(d);
                  }
                  F.apply(i, d),
                    o &&
                      !e &&
                      0 < d.length &&
                      1 < l + y.length &&
                      ae.uniqueSort(i);
                }
                return o && ((S = h), (w = p)), u;
              }
              var m = 0 < y.length,
                b = 0 < v.length;
              return m ? ce(e) : e;
            }
            return (
              (me.prototype = _.filters = _.pseudos),
              (_.setFilters = new me()),
              (h = ae.tokenize =
                function (e, t) {
                  var n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c = j[e + " "];
                  if (c) return t ? 0 : c.slice(0);
                  for (s = e, a = [], l = _.preFilter; s; ) {
                    for (r in ((n && !(i = W.exec(s))) ||
                      (i && (s = s.slice(i[0].length) || s), a.push((o = []))),
                    (n = !1),
                    (i = V.exec(s)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(U, " ") }),
                      (s = s.slice(n.length))),
                    _.filter))
                      !(i = Y[r].exec(s)) ||
                        (l[r] && !(i = l[r](i))) ||
                        ((n = i.shift()),
                        o.push({ value: n, type: r, matches: i }),
                        (s = s.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? s.length : s ? ae.error(e) : j(e, a).slice(0);
                }),
              (p = ae.compile =
                function (e, t) {
                  var n,
                    i = [],
                    o = [],
                    r = A[e + " "];
                  if (!r) {
                    for (n = (t = t || h(e)).length; n--; )
                      (r = Te(t[n]))[x] ? i.push(r) : o.push(r);
                    (r = A(e, xe(o, i))).selector = e;
                  }
                  return r;
                }),
              (g = ae.select =
                function (e, t, n, i) {
                  var o,
                    r,
                    s,
                    a,
                    l,
                    c = "function" == typeof e && e,
                    u = !i && h((e = c.selector || e));
                  if (((n = n || []), 1 === u.length)) {
                    if (
                      2 < (r = u[0] = u[0].slice(0)).length &&
                      "ID" === (s = r[0]).type &&
                      9 === t.nodeType &&
                      T &&
                      _.relative[r[1].type]
                    ) {
                      if (
                        !(t = (_.find.ID(s.matches[0].replace(ie, d), t) ||
                          [])[0])
                      )
                        return n;
                      c && (t = t.parentNode),
                        (e = e.slice(r.shift().value.length));
                    }
                    for (
                      o = Y.needsContext.test(e) ? 0 : r.length;
                      o-- && ((s = r[o]), !_.relative[(a = s.type)]);

                    )
                      if (
                        (l = _.find[a]) &&
                        (i = l(
                          s.matches[0].replace(ie, d),
                          (ne.test(r[0].type) && ye(t.parentNode)) || t
                        ))
                      ) {
                        if ((r.splice(o, 1), !(e = i.length && be(r))))
                          return F.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (c || p(e, u))(
                      i,
                      t,
                      !T,
                      n,
                      !t || (ne.test(e) && ye(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (f.sortStable = x.split("").sort(O).join("") === x),
              (f.detectDuplicates = !!c),
              C(),
              (f.sortDetached = ue(function (e) {
                return (
                  1 & e.compareDocumentPosition(k.createElement("fieldset"))
                );
              })),
              ue(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                de("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (f.attributes &&
                ue(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                de("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ue(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                de(N, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              ae
            );
          })(k);
          (x.find = p),
            (x.expr = p.selectors),
            (x.expr[":"] = x.expr.pseudos),
            (x.uniqueSort = x.unique = p.uniqueSort),
            (x.text = p.getText),
            (x.isXMLDoc = p.isXML),
            (x.contains = p.contains),
            (x.escapeSelector = p.escape);
          function f(e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (o && x(e).is(n)) break;
                i.push(e);
              }
            return i;
          }
          function h(e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          }
          var C = x.expr.match.needsContext;
          function S(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var E =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function j(e, n, i) {
            return b(n)
              ? x.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== i;
                })
              : n.nodeType
              ? x.grep(e, function (e) {
                  return (e === n) !== i;
                })
              : "string" != typeof n
              ? x.grep(e, function (e) {
                  return -1 < o.call(n, e) !== i;
                })
              : x.filter(n, e, i);
          }
          (x.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? x.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : x.find.matches(
                    e,
                    x.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            x.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    x(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (x.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  x.find(e, o[t], n);
                return 1 < i ? x.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(j(this, e || [], !0));
              },
              is: function (e) {
                return !!j(
                  this,
                  "string" == typeof e && C.test(e) ? x(e) : e || [],
                  !1
                ).length;
              },
            });
          var A,
            P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((x.fn.init = function (e, t, n) {
            var i, o;
            if (!e) return this;
            if (((n = n || A), "string" != typeof e))
              return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : b(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(x)
                : x.makeArray(e, this);
            if (
              !(i =
                "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                  ? [null, e, null]
                  : P.exec(e)) ||
              (!i[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (i[1]) {
              if (
                ((t = t instanceof x ? t[0] : t),
                x.merge(
                  this,
                  x.parseHTML(
                    i[1],
                    t && t.nodeType ? t.ownerDocument || t : T,
                    !0
                  )
                ),
                E.test(i[1]) && x.isPlainObject(t))
              )
                for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this;
            }
            return (
              (o = T.getElementById(i[2])) &&
                ((this[0] = o), (this.length = 1)),
              this
            );
          }).prototype = x.fn),
            (A = x(T));
          var O = /^(?:parents|prev(?:Until|All))/,
            $ = { children: !0, contents: !0, next: !0, prev: !0 };
          function D(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          x.fn.extend({
            has: function (e) {
              var t = x(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (x.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && x(e);
              if (!C.test(e))
                for (; i < o; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? -1 < s.index(n)
                        : 1 === n.nodeType && x.find.matchesSelector(n, e))
                    ) {
                      r.push(n);
                      break;
                    }
              return this.pushStack(1 < r.length ? x.uniqueSort(r) : r);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? o.call(x(e), this[0])
                  : o.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            x.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return f(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return f(e, "parentNode", n);
                },
                next: function (e) {
                  return D(e, "nextSibling");
                },
                prev: function (e) {
                  return D(e, "previousSibling");
                },
                nextAll: function (e) {
                  return f(e, "nextSibling");
                },
                prevAll: function (e) {
                  return f(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return f(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return f(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return h((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return h(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && i(e.contentDocument)
                    ? e.contentDocument
                    : (S(e, "template") && (e = e.content || e),
                      x.merge([], e.childNodes));
                },
              },
              function (i, o) {
                x.fn[i] = function (e, t) {
                  var n = x.map(this, o, e);
                  return (
                    "Until" !== i.slice(-5) && (t = e),
                    t && "string" == typeof t && (n = x.filter(t, n)),
                    1 < this.length &&
                      ($[i] || x.uniqueSort(n), O.test(i) && n.reverse()),
                    this.pushStack(n)
                  );
                };
              }
            );
          var I = /[^\x20\t\r\n\f]+/g;
          function F(e) {
            return e;
          }
          function H(e) {
            throw e;
          }
          function M(e, t, n, i) {
            var o;
            try {
              e && b((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && b((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (x.Callbacks = function (i) {
            var e, n;
            i =
              "string" == typeof i
                ? ((e = i),
                  (n = {}),
                  x.each(e.match(I) || [], function (e, t) {
                    n[t] = !0;
                  }),
                  n)
                : x.extend({}, i);
            function o() {
              for (a = a || i.once, s = r = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length; )
                  !1 === l[u].apply(t[0], t[1]) &&
                    i.stopOnFalse &&
                    ((u = l.length), (t = !1));
              i.memory || (t = !1), (r = !1), a && (l = t ? [] : "");
            }
            var r,
              t,
              s,
              a,
              l = [],
              c = [],
              u = -1,
              d = {
                add: function () {
                  return (
                    l &&
                      (t && !r && ((u = l.length - 1), c.push(t)),
                      (function n(e) {
                        x.each(e, function (e, t) {
                          b(t)
                            ? (i.unique && d.has(t)) || l.push(t)
                            : t && t.length && "string" !== w(t) && n(t);
                        });
                      })(arguments),
                      t && !r && o()),
                    this
                  );
                },
                remove: function () {
                  return (
                    x.each(arguments, function (e, t) {
                      for (var n; -1 < (n = x.inArray(t, l, n)); )
                        l.splice(n, 1), n <= u && u--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? -1 < x.inArray(e, l) : 0 < l.length;
                },
                empty: function () {
                  return (l = l && []), this;
                },
                disable: function () {
                  return (a = c = []), (l = t = ""), this;
                },
                disabled: function () {
                  return !l;
                },
                lock: function () {
                  return (a = c = []), t || r || (l = t = ""), this;
                },
                locked: function () {
                  return !!a;
                },
                fireWith: function (e, t) {
                  return (
                    a ||
                      ((t = [e, (t = t || []).slice ? t.slice() : t]),
                      c.push(t),
                      r || o()),
                    this
                  );
                },
                fire: function () {
                  return d.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!s;
                },
              };
            return d;
          }),
            x.extend({
              Deferred: function (e) {
                var r = [
                    [
                      "notify",
                      "progress",
                      x.Callbacks("memory"),
                      x.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      x.Callbacks("once memory"),
                      x.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      x.Callbacks("once memory"),
                      x.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  o = "pending",
                  s = {
                    state: function () {
                      return o;
                    },
                    always: function () {
                      return a.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return s.then(null, e);
                    },
                    pipe: function () {
                      var o = arguments;
                      return x
                        .Deferred(function (i) {
                          x.each(r, function (e, t) {
                            var n = b(o[t[4]]) && o[t[4]];
                            a[t[1]](function () {
                              var e = n && n.apply(this, arguments);
                              e && b(e.promise)
                                ? e
                                    .promise()
                                    .progress(i.notify)
                                    .done(i.resolve)
                                    .fail(i.reject)
                                : i[t[0] + "With"](this, n ? [e] : arguments);
                            });
                          }),
                            (o = null);
                        })
                        .promise();
                    },
                    then: function (t, n, i) {
                      var l = 0;
                      function c(o, r, s, a) {
                        return function () {
                          function e() {
                            var e, t;
                            if (!(o < l)) {
                              if ((e = s.apply(n, i)) === r.promise())
                                throw new TypeError("Thenable self-resolution");
                              (t =
                                e &&
                                ("object" == typeof e ||
                                  "function" == typeof e) &&
                                e.then),
                                b(t)
                                  ? a
                                    ? t.call(e, c(l, r, F, a), c(l, r, H, a))
                                    : (l++,
                                      t.call(
                                        e,
                                        c(l, r, F, a),
                                        c(l, r, H, a),
                                        c(l, r, F, r.notifyWith)
                                      ))
                                  : (s !== F && ((n = void 0), (i = [e])),
                                    (a || r.resolveWith)(n, i));
                            }
                          }
                          var n = this,
                            i = arguments,
                            t = a
                              ? e
                              : function () {
                                  try {
                                    e();
                                  } catch (e) {
                                    x.Deferred.exceptionHook &&
                                      x.Deferred.exceptionHook(e, t.stackTrace),
                                      l <= o + 1 &&
                                        (s !== H && ((n = void 0), (i = [e])),
                                        r.rejectWith(n, i));
                                  }
                                };
                          o
                            ? t()
                            : (x.Deferred.getStackHook &&
                                (t.stackTrace = x.Deferred.getStackHook()),
                              k.setTimeout(t));
                        };
                      }
                      return x
                        .Deferred(function (e) {
                          r[0][3].add(c(0, e, b(i) ? i : F, e.notifyWith)),
                            r[1][3].add(c(0, e, b(t) ? t : F)),
                            r[2][3].add(c(0, e, b(n) ? n : H));
                        })
                        .promise();
                    },
                    promise: function (e) {
                      return null != e ? x.extend(e, s) : s;
                    },
                  },
                  a = {};
                return (
                  x.each(r, function (e, t) {
                    var n = t[2],
                      i = t[5];
                    (s[t[1]] = n.add),
                      i &&
                        n.add(
                          function () {
                            o = i;
                          },
                          r[3 - e][2].disable,
                          r[3 - e][3].disable,
                          r[0][2].lock,
                          r[0][3].lock
                        ),
                      n.add(t[3].fire),
                      (a[t[0]] = function () {
                        return (
                          a[t[0] + "With"](
                            this === a ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (a[t[0] + "With"] = n.fireWith);
                  }),
                  s.promise(a),
                  e && e.call(a, a),
                  a
                );
              },
              when: function (e) {
                function t(t) {
                  return function (e) {
                    (o[t] = this),
                      (r[t] = 1 < arguments.length ? a.call(arguments) : e),
                      --n || s.resolveWith(o, r);
                  };
                }
                var n = arguments.length,
                  i = n,
                  o = Array(i),
                  r = a.call(arguments),
                  s = x.Deferred();
                if (
                  n <= 1 &&
                  (M(e, s.done(t(i)).resolve, s.reject, !n),
                  "pending" === s.state() || b(r[i] && r[i].then))
                )
                  return s.then();
                for (; i--; ) M(r[i], t(i), s.reject);
                return s.promise();
              },
            });
          var N = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (x.Deferred.exceptionHook = function (e, t) {
            k.console &&
              k.console.warn &&
              e &&
              N.test(e.name) &&
              k.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (x.readyException = function (e) {
              k.setTimeout(function () {
                throw e;
              });
            });
          var R = x.Deferred();
          function L() {
            T.removeEventListener("DOMContentLoaded", L),
              k.removeEventListener("load", L),
              x.ready();
          }
          (x.fn.ready = function (e) {
            return (
              R.then(e).catch(function (e) {
                x.readyException(e);
              }),
              this
            );
          }),
            x.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --x.readyWait : x.isReady) ||
                  ((x.isReady = !0) !== e && 0 < --x.readyWait) ||
                  R.resolveWith(T, [x]);
              },
            }),
            (x.ready.then = R.then),
            "complete" === T.readyState ||
            ("loading" !== T.readyState && !T.documentElement.doScroll)
              ? k.setTimeout(x.ready)
              : (T.addEventListener("DOMContentLoaded", L),
                k.addEventListener("load", L));
          var q = function (e, t, n, i, o, r, s) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === w(n))
                for (a in ((o = !0), n)) q(e, t, a, n[a], !0, r, s);
              else if (
                void 0 !== i &&
                ((o = !0),
                b(i) || (s = !0),
                c &&
                  (t = s
                    ? (t.call(e, i), null)
                    : ((c = t),
                      function (e, t, n) {
                        return c.call(x(e), n);
                      })),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
              return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
            },
            B = /^-ms-/,
            z = /-([a-z])/g;
          function U(e, t) {
            return t.toUpperCase();
          }
          function W(e) {
            return e.replace(B, "ms-").replace(z, U);
          }
          function V(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          }
          function X() {
            this.expando = x.expando + X.uid++;
          }
          (X.uid = 1),
            (X.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    V(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  o = this.cache(e);
                if ("string" == typeof t) o[W(t)] = n;
                else for (i in t) o[W(i)] = t[i];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][W(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(W)
                      : (t = W(t)) in i
                      ? [t]
                      : t.match(I) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 !== t && !x.isEmptyObject(i)) ||
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !x.isEmptyObject(t);
              },
            });
          var Q = new X(),
            G = new X(),
            Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            J = /[A-Z]/g;
          function K(e, t, n) {
            var i, o;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(J, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n =
                    "true" === (o = n) ||
                    ("false" !== o &&
                      ("null" === o
                        ? null
                        : o === +o + ""
                        ? +o
                        : Y.test(o)
                        ? JSON.parse(o)
                        : o));
                } catch (e) {}
                G.set(e, t, n);
              } else n = void 0;
            return n;
          }
          x.extend({
            hasData: function (e) {
              return G.hasData(e) || Q.hasData(e);
            },
            data: function (e, t, n) {
              return G.access(e, t, n);
            },
            removeData: function (e, t) {
              G.remove(e, t);
            },
            _data: function (e, t, n) {
              return Q.access(e, t, n);
            },
            _removeData: function (e, t) {
              Q.remove(e, t);
            },
          }),
            x.fn.extend({
              data: function (n, e) {
                var t,
                  i,
                  o,
                  r = this[0],
                  s = r && r.attributes;
                if (void 0 !== n)
                  return "object" == typeof n
                    ? this.each(function () {
                        G.set(this, n);
                      })
                    : q(
                        this,
                        function (e) {
                          var t;
                          if (r && void 0 === e)
                            return void 0 !== (t = G.get(r, n)) ||
                              void 0 !== (t = K(r, n))
                              ? t
                              : void 0;
                          this.each(function () {
                            G.set(this, n, e);
                          });
                        },
                        null,
                        e,
                        1 < arguments.length,
                        null,
                        !0
                      );
                if (
                  this.length &&
                  ((o = G.get(r)),
                  1 === r.nodeType && !Q.get(r, "hasDataAttrs"))
                ) {
                  for (t = s.length; t--; )
                    s[t] &&
                      0 === (i = s[t].name).indexOf("data-") &&
                      ((i = W(i.slice(5))), K(r, i, o[i]));
                  Q.set(r, "hasDataAttrs", !0);
                }
                return o;
              },
              removeData: function (e) {
                return this.each(function () {
                  G.remove(this, e);
                });
              },
            }),
            x.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = Q.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = Q.access(e, t, x.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = x.queue(e, t),
                  i = n.length,
                  o = n.shift(),
                  r = x._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), i--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete r.stop,
                    o.call(
                      e,
                      function () {
                        x.dequeue(e, t);
                      },
                      r
                    )),
                  !i && r && r.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Q.get(e, n) ||
                  Q.access(e, n, {
                    empty: x.Callbacks("once memory").add(function () {
                      Q.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            x.fn.extend({
              queue: function (t, n) {
                var e = 2;
                return (
                  "string" != typeof t && ((n = t), (t = "fx"), e--),
                  arguments.length < e
                    ? x.queue(this[0], t)
                    : void 0 === n
                    ? this
                    : this.each(function () {
                        var e = x.queue(this, t, n);
                        x._queueHooks(this, t),
                          "fx" === t &&
                            "inprogress" !== e[0] &&
                            x.dequeue(this, t);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  x.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                function n() {
                  --o || r.resolveWith(s, [s]);
                }
                var i,
                  o = 1,
                  r = x.Deferred(),
                  s = this,
                  a = this.length;
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (i = Q.get(s[a], e + "queueHooks")) &&
                    i.empty &&
                    (o++, i.empty.add(n));
                return n(), r.promise(t);
              },
            });
          var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
            te = ["Top", "Right", "Bottom", "Left"],
            ne = T.documentElement,
            ie = function (e) {
              return x.contains(e.ownerDocument, e);
            },
            oe = { composed: !0 };
          ne.getRootNode &&
            (ie = function (e) {
              return (
                x.contains(e.ownerDocument, e) ||
                e.getRootNode(oe) === e.ownerDocument
              );
            });
          var re = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ie(e) &&
                "none" === x.css(e, "display"))
            );
          };
          function se(e, t, n, i) {
            var o,
              r,
              s = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return x.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (x.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (x.cssNumber[t] || ("px" !== c && +l)) &&
                ee.exec(x.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; s--; )
                x.style(e, t, u + c),
                  (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
                  (u /= r);
              (u *= 2), x.style(e, t, u + c), (n = n || []);
            }
            return (
              n &&
                ((u = +u || +l || 0),
                (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = o))),
              o
            );
          }
          var ae = {};
          function le(e, t) {
            for (
              var n, i, o, r, s, a, l, c = [], u = 0, d = e.length;
              u < d;
              u++
            )
              (i = e[u]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((c[u] = Q.get(i, "display") || null),
                      c[u] || (i.style.display = "")),
                    "" === i.style.display &&
                      re(i) &&
                      (c[u] =
                        ((l = s = r = void 0),
                        (s = (o = i).ownerDocument),
                        (a = o.nodeName),
                        (l = ae[a]) ||
                          ((r = s.body.appendChild(s.createElement(a))),
                          (l = x.css(r, "display")),
                          r.parentNode.removeChild(r),
                          "none" === l && (l = "block"),
                          (ae[a] = l)))))
                  : "none" !== n && ((c[u] = "none"), Q.set(i, "display", n)));
            for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
            return e;
          }
          x.fn.extend({
            show: function () {
              return le(this, !0);
            },
            hide: function () {
              return le(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    re(this) ? x(this).show() : x(this).hide();
                  });
            },
          });
          var ce,
            ue,
            de = /^(?:checkbox|radio)$/i,
            pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            fe = /^$|^module$|\/(?:java|ecma)script/i;
          (ce = T.createDocumentFragment().appendChild(T.createElement("div"))),
            (ue = T.createElement("input")).setAttribute("type", "radio"),
            ue.setAttribute("checked", "checked"),
            ue.setAttribute("name", "t"),
            ce.appendChild(ue),
            (m.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (ce.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
            (ce.innerHTML = "<option></option>"),
            (m.option = !!ce.lastChild);
          var he = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function ge(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && S(e, t)) ? x.merge([e], n) : n
            );
          }
          function ve(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
          }
          (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead),
            (he.th = he.td),
            m.option ||
              (he.optgroup = he.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var ye = /<|&#?\w+;/;
          function me(e, t, n, i, o) {
            for (
              var r,
                s,
                a,
                l,
                c,
                u,
                d = t.createDocumentFragment(),
                p = [],
                f = 0,
                h = e.length;
              f < h;
              f++
            )
              if ((r = e[f]) || 0 === r)
                if ("object" === w(r)) x.merge(p, r.nodeType ? [r] : r);
                else if (ye.test(r)) {
                  for (
                    s = s || d.appendChild(t.createElement("div")),
                      a = (pe.exec(r) || ["", ""])[1].toLowerCase(),
                      l = he[a] || he._default,
                      s.innerHTML = l[1] + x.htmlPrefilter(r) + l[2],
                      u = l[0];
                    u--;

                  )
                    s = s.lastChild;
                  x.merge(p, s.childNodes),
                    ((s = d.firstChild).textContent = "");
                } else p.push(t.createTextNode(r));
            for (d.textContent = "", f = 0; (r = p[f++]); )
              if (i && -1 < x.inArray(r, i)) o && o.push(r);
              else if (
                ((c = ie(r)),
                (s = ge(d.appendChild(r), "script")),
                c && ve(s),
                n)
              )
                for (u = 0; (r = s[u++]); ) fe.test(r.type || "") && n.push(r);
            return d;
          }
          var be = /^key/,
            _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            we = /^([^.]*)(?:\.(.+)|)/;
          function Ce() {
            return !0;
          }
          function ke() {
            return !1;
          }
          function Te(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return T.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function xe(e, t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                xe(e, a, n, i, t[a], r);
              return e;
            }
            if (
              (null == i && null == o
                ? ((o = n), (i = n = void 0))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = i), (i = void 0))
                    : ((o = i), (i = n), (n = void 0))),
              !1 === o)
            )
              o = ke;
            else if (!o) return e;
            return (
              1 === r &&
                ((s = o),
                ((o = function (e) {
                  return x().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = x.guid++))),
              e.each(function () {
                x.event.add(this, t, o, i, n);
              })
            );
          }
          function Se(e, o, r) {
            r
              ? (Q.set(e, o, !1),
                x.event.add(e, o, {
                  namespace: !1,
                  handler: function (e) {
                    var t,
                      n,
                      i = Q.get(this, o);
                    if (1 & e.isTrigger && this[o]) {
                      if (i.length)
                        (x.event.special[o] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((i = a.call(arguments)),
                        Q.set(this, o, i),
                        (t = r(this, o)),
                        this[o](),
                        i !== (n = Q.get(this, o)) || t
                          ? Q.set(this, o, !1)
                          : (n = {}),
                        i !== n)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          n.value
                        );
                    } else
                      i.length &&
                        (Q.set(this, o, {
                          value: x.event.trigger(
                            x.extend(i[0], x.Event.prototype),
                            i.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Q.get(e, o) && x.event.add(e, o, Ce);
          }
          (x.event = {
            global: {},
            add: function (t, e, n, i, o) {
              var r,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                g,
                v = Q.get(t);
              if (V(t))
                for (
                  n.handler && ((n = (r = n).handler), (o = r.selector)),
                    o && x.find.matchesSelector(ne, o),
                    n.guid || (n.guid = x.guid++),
                    (l = v.events) || (l = v.events = Object.create(null)),
                    (s = v.handle) ||
                      (s = v.handle =
                        function (e) {
                          return void 0 !== x && x.event.triggered !== e.type
                            ? x.event.dispatch.apply(t, arguments)
                            : void 0;
                        }),
                    c = (e = (e || "").match(I) || [""]).length;
                  c--;

                )
                  (f = g = (a = we.exec(e[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f &&
                      ((d = x.event.special[f] || {}),
                      (f = (o ? d.delegateType : d.bindType) || f),
                      (d = x.event.special[f] || {}),
                      (u = x.extend(
                        {
                          type: f,
                          origType: g,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && x.expr.match.needsContext.test(o),
                          namespace: h.join("."),
                        },
                        r
                      )),
                      (p = l[f]) ||
                        (((p = l[f] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(t, i, h, s)) ||
                          (t.addEventListener && t.addEventListener(f, s))),
                      d.add &&
                        (d.add.call(t, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                      o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                      (x.event.global[f] = !0));
            },
            remove: function (e, t, n, i, o) {
              var r,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                g,
                v = Q.hasData(e) && Q.get(e);
              if (v && (l = v.events)) {
                for (c = (t = (t || "").match(I) || [""]).length; c--; )
                  if (
                    ((f = g = (a = we.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      d = x.event.special[f] || {},
                        p =
                          l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        s = r = p.length;
                      r--;

                    )
                      (u = p[r]),
                        (!o && g !== u.origType) ||
                          (n && n.guid !== u.guid) ||
                          (a && !a.test(u.namespace)) ||
                          (i &&
                            i !== u.selector &&
                            ("**" !== i || !u.selector)) ||
                          (p.splice(r, 1),
                          u.selector && p.delegateCount--,
                          d.remove && d.remove.call(e, u));
                    s &&
                      !p.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, v.handle)) ||
                        x.removeEvent(e, f, v.handle),
                      delete l[f]);
                  } else for (f in l) x.event.remove(e, f + t[c], n, i, !0);
                x.isEmptyObject(l) && Q.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                o,
                r,
                s,
                a = new Array(arguments.length),
                l = x.event.fix(e),
                c =
                  (Q.get(this, "events") || Object.create(null))[l.type] || [],
                u = x.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, l))
              ) {
                for (
                  s = x.event.handlers.call(this, l, c), t = 0;
                  (o = s[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = o.elem, n = 0;
                    (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== r.namespace &&
                      !l.rnamespace.test(r.namespace)) ||
                      ((l.handleObj = r),
                      (l.data = r.data),
                      void 0 !==
                        (i = (
                          (x.event.special[r.origType] || {}).handle ||
                          r.handler
                        ).apply(o.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                o,
                r,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (r = [], s = {}, n = 0; n < l; n++)
                      void 0 === s[(o = (i = t[n]).selector + " ")] &&
                        (s[o] = i.needsContext
                          ? -1 < x(o, this).index(c)
                          : x.find(o, this, null, [c]).length),
                        s[o] && r.push(i);
                    r.length && a.push({ elem: c, handlers: r });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (t, e) {
              Object.defineProperty(x.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e)
                  ? function () {
                      if (this.originalEvent) return e(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function (e) {
                  Object.defineProperty(this, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e,
                  });
                },
              });
            },
            fix: function (e) {
              return e[x.expando] ? e : new x.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    de.test(t.type) &&
                      t.click &&
                      S(t, "input") &&
                      Se(t, "click", Ce),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    de.test(t.type) &&
                      t.click &&
                      S(t, "input") &&
                      Se(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (de.test(t.type) &&
                      t.click &&
                      S(t, "input") &&
                      Q.get(t, "click")) ||
                    S(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (x.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (x.Event = function (e, t) {
              if (!(this instanceof x.Event)) return new x.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ce
                      : ke),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && x.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[x.expando] = !0);
            }),
            (x.Event.prototype = {
              constructor: x.Event,
              isDefaultPrevented: ke,
              isPropagationStopped: ke,
              isImmediatePropagationStopped: ke,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ce),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ce),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ce),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            x.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                  var t = e.button;
                  return null == e.which && be.test(e.type)
                    ? null != e.charCode
                      ? e.charCode
                      : e.keyCode
                    : !e.which && void 0 !== t && _e.test(e.type)
                    ? 1 & t
                      ? 1
                      : 2 & t
                      ? 3
                      : 4 & t
                      ? 2
                      : 0
                    : e.which;
                },
              },
              x.event.addProp
            ),
            x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              x.event.special[e] = {
                setup: function () {
                  return Se(this, e, Te), !1;
                },
                trigger: function () {
                  return Se(this, e), !0;
                },
                delegateType: t,
              };
            }),
            x.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, o) {
                x.event.special[e] = {
                  delegateType: o,
                  bindType: o,
                  handle: function (e) {
                    var t,
                      n = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (n && (n === this || x.contains(this, n))) ||
                        ((e.type = i.origType),
                        (t = i.handler.apply(this, arguments)),
                        (e.type = o)),
                      t
                    );
                  },
                };
              }
            ),
            x.fn.extend({
              on: function (e, t, n, i) {
                return xe(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return xe(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    x(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" != typeof e)
                  return (
                    (!1 !== t && "function" != typeof t) ||
                      ((n = t), (t = void 0)),
                    !1 === n && (n = ke),
                    this.each(function () {
                      x.event.remove(this, e, n, t);
                    })
                  );
                for (o in e) this.off(o, t, e[o]);
                return this;
              },
            });
          var Ee = /<script|<style|<link/i,
            je = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Pe(e, t) {
            return (
              (S(e, "table") &&
                S(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                x(e).children("tbody")[0]) ||
              e
            );
          }
          function Oe(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function $e(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function De(e, t) {
            var n, i, o, r, s, a;
            if (1 === t.nodeType) {
              if (Q.hasData(e) && (a = Q.get(e).events))
                for (o in (Q.remove(t, "handle events"), a))
                  for (n = 0, i = a[o].length; n < i; n++)
                    x.event.add(t, o, a[o][n]);
              G.hasData(e) &&
                ((r = G.access(e)), (s = x.extend({}, r)), G.set(t, s));
            }
          }
          function Ie(n, i, o, r) {
            i = v(i);
            var e,
              t,
              s,
              a,
              l,
              c,
              u = 0,
              d = n.length,
              p = d - 1,
              f = i[0],
              h = b(f);
            if (
              h ||
              (1 < d && "string" == typeof f && !m.checkClone && je.test(f))
            )
              return n.each(function (e) {
                var t = n.eq(e);
                h && (i[0] = f.call(this, e, t.html())), Ie(t, i, o, r);
              });
            if (
              d &&
              ((t = (e = me(i, n[0].ownerDocument, !1, n, r)).firstChild),
              1 === e.childNodes.length && (e = t),
              t || r)
            ) {
              for (a = (s = x.map(ge(e, "script"), Oe)).length; u < d; u++)
                (l = e),
                  u !== p &&
                    ((l = x.clone(l, !0, !0)),
                    a && x.merge(s, ge(l, "script"))),
                  o.call(n[u], l, u);
              if (a)
                for (
                  c = s[s.length - 1].ownerDocument, x.map(s, $e), u = 0;
                  u < a;
                  u++
                )
                  (l = s[u]),
                    fe.test(l.type || "") &&
                      !Q.access(l, "globalEval") &&
                      x.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? x._evalUrl &&
                          !l.noModule &&
                          x._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute("nonce") },
                            c
                          )
                        : _(l.textContent.replace(Ae, ""), l, c));
            }
            return n;
          }
          function Fe(e, t, n) {
            for (
              var i, o = t ? x.filter(t, e) : e, r = 0;
              null != (i = o[r]);
              r++
            )
              n || 1 !== i.nodeType || x.cleanData(ge(i)),
                i.parentNode &&
                  (n && ie(i) && ve(ge(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          x.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                o,
                r,
                s,
                a,
                l,
                c,
                u = e.cloneNode(!0),
                d = ie(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  x.isXMLDoc(e)
                )
              )
                for (s = ge(u), i = 0, o = (r = ge(e)).length; i < o; i++)
                  (a = r[i]),
                    (l = s[i]),
                    "input" === (c = l.nodeName.toLowerCase()) &&
                    de.test(a.type)
                      ? (l.checked = a.checked)
                      : ("input" !== c && "textarea" !== c) ||
                        (l.defaultValue = a.defaultValue);
              if (t)
                if (n)
                  for (
                    r = r || ge(e), s = s || ge(u), i = 0, o = r.length;
                    i < o;
                    i++
                  )
                    De(r[i], s[i]);
                else De(e, u);
              return (
                0 < (s = ge(u, "script")).length &&
                  ve(s, !d && ge(e, "script")),
                u
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, o = x.event.special, r = 0;
                void 0 !== (n = e[r]);
                r++
              )
                if (V(n)) {
                  if ((t = n[Q.expando])) {
                    if (t.events)
                      for (i in t.events)
                        o[i]
                          ? x.event.remove(n, i)
                          : x.removeEvent(n, i, t.handle);
                    n[Q.expando] = void 0;
                  }
                  n[G.expando] && (n[G.expando] = void 0);
                }
            },
          }),
            x.fn.extend({
              detach: function (e) {
                return Fe(this, e, !0);
              },
              remove: function (e) {
                return Fe(this, e);
              },
              text: function (e) {
                return q(
                  this,
                  function (e) {
                    return void 0 === e
                      ? x.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Ie(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Pe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Ie(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Pe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ie(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ie(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (x.cleanData(ge(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return x.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return q(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Ee.test(e) &&
                      !he[(pe.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = x.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (x.cleanData(ge(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var n = [];
                return Ie(
                  this,
                  arguments,
                  function (e) {
                    var t = this.parentNode;
                    x.inArray(this, n) < 0 &&
                      (x.cleanData(ge(this)), t && t.replaceChild(e, this));
                  },
                  n
                );
              },
            }),
            x.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, s) {
                x.fn[e] = function (e) {
                  for (
                    var t, n = [], i = x(e), o = i.length - 1, r = 0;
                    r <= o;
                    r++
                  )
                    (t = r === o ? this : this.clone(!0)),
                      x(i[r])[s](t),
                      l.apply(n, t.get());
                  return this.pushStack(n);
                };
              }
            );
          function He(e, t, n) {
            var i,
              o,
              r = {};
            for (o in t) (r[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.call(e)), t)) e.style[o] = r[o];
            return i;
          }
          var Me,
            Ne,
            Re,
            Le,
            qe,
            Be,
            ze,
            Ue,
            We = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
            Ve = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = k), t.getComputedStyle(e);
            },
            Xe = new RegExp(te.join("|"), "i");
          function Qe() {
            if (Ue) {
              (ze.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (Ue.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                ne.appendChild(ze).appendChild(Ue);
              var e = k.getComputedStyle(Ue);
              (Me = "1%" !== e.top),
                (Be = 12 === Ge(e.marginLeft)),
                (Ue.style.right = "60%"),
                (Le = 36 === Ge(e.right)),
                (Ne = 36 === Ge(e.width)),
                (Ue.style.position = "absolute"),
                (Re = 12 === Ge(Ue.offsetWidth / 3)),
                ne.removeChild(ze),
                (Ue = null);
            }
          }
          function Ge(e) {
            return Math.round(parseFloat(e));
          }
          function Ye(e, t, n) {
            var i,
              o,
              r,
              s,
              a = e.style;
            return (
              (n = n || Ve(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                  ie(e) ||
                  (s = x.style(e, t)),
                !m.pixelBoxStyles() &&
                  We.test(s) &&
                  Xe.test(t) &&
                  ((i = a.width),
                  (o = a.minWidth),
                  (r = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = s),
                  (s = n.width),
                  (a.width = i),
                  (a.minWidth = o),
                  (a.maxWidth = r))),
              void 0 !== s ? s + "" : s
            );
          }
          function Je(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          (ze = T.createElement("div")),
            (Ue = T.createElement("div")).style &&
              ((Ue.style.backgroundClip = "content-box"),
              (Ue.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === Ue.style.backgroundClip),
              x.extend(m, {
                boxSizingReliable: function () {
                  return Qe(), Ne;
                },
                pixelBoxStyles: function () {
                  return Qe(), Le;
                },
                pixelPosition: function () {
                  return Qe(), Me;
                },
                reliableMarginLeft: function () {
                  return Qe(), Be;
                },
                scrollboxSize: function () {
                  return Qe(), Re;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == qe &&
                      ((e = T.createElement("table")),
                      (t = T.createElement("tr")),
                      (n = T.createElement("div")),
                      (e.style.cssText = "position:absolute;left:-11111px"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      ne.appendChild(e).appendChild(t).appendChild(n),
                      (i = k.getComputedStyle(t)),
                      (qe = 3 < parseInt(i.height)),
                      ne.removeChild(e)),
                    qe
                  );
                },
              }));
          var Ke = ["Webkit", "Moz", "ms"],
            Ze = T.createElement("div").style,
            et = {};
          function tt(e) {
            var t = x.cssProps[e] || et[e];
            return (
              t ||
              (e in Ze
                ? e
                : (et[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ke.length;
                        n--;

                      )
                        if ((e = Ke[n] + t) in Ze) return e;
                    })(e) || e))
            );
          }
          var nt = /^(none|table(?!-c[ea]).+)/,
            it = /^--/,
            ot = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            rt = { letterSpacing: "0", fontWeight: "400" };
          function st(e, t, n) {
            var i = ee.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function at(e, t, n, i, o, r) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (l += x.css(e, n + te[s], !0, o)),
                i
                  ? ("content" === n &&
                      (l -= x.css(e, "padding" + te[s], !0, o)),
                    "margin" !== n &&
                      (l -= x.css(e, "border" + te[s] + "Width", !0, o)))
                  : ((l += x.css(e, "padding" + te[s], !0, o)),
                    "padding" !== n
                      ? (l += x.css(e, "border" + te[s] + "Width", !0, o))
                      : (a += x.css(e, "border" + te[s] + "Width", !0, o)));
            return (
              !i &&
                0 <= r &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        r -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function lt(e, t, n) {
            var i = Ve(e),
              o =
                (!m.boxSizingReliable() || n) &&
                "border-box" === x.css(e, "boxSizing", !1, i),
              r = o,
              s = Ye(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (We.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!m.boxSizingReliable() && o) ||
                (!m.reliableTrDimensions() && S(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === x.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((o = "border-box" === x.css(e, "boxSizing", !1, i)),
                (r = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) +
                at(e, t, n || (o ? "border" : "content"), r, i, s) +
                "px"
            );
          }
          function ct(e, t, n, i, o) {
            return new ct.prototype.init(e, t, n, i, o);
          }
          x.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ye(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  r,
                  s,
                  a = W(t),
                  l = it.test(t),
                  c = e.style;
                if (
                  (l || (t = tt(a)),
                  (s = x.cssHooks[t] || x.cssHooks[a]),
                  void 0 === n)
                )
                  return s && "get" in s && void 0 !== (o = s.get(e, !1, i))
                    ? o
                    : c[t];
                "string" === (r = typeof n) &&
                  (o = ee.exec(n)) &&
                  o[1] &&
                  ((n = se(e, t, o)), (r = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== r ||
                      l ||
                      (n += (o && o[3]) || (x.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var o,
                r,
                s,
                a = W(t);
              return (
                it.test(t) || (t = tt(a)),
                (s = x.cssHooks[t] || x.cssHooks[a]) &&
                  "get" in s &&
                  (o = s.get(e, !0, n)),
                void 0 === o && (o = Ye(e, t, i)),
                "normal" === o && t in rt && (o = rt[t]),
                "" === n || n
                  ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
                  : o
              );
            },
          }),
            x.each(["height", "width"], function (e, l) {
              x.cssHooks[l] = {
                get: function (e, t, n) {
                  if (t)
                    return !nt.test(x.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? lt(e, l, n)
                      : He(e, ot, function () {
                          return lt(e, l, n);
                        });
                },
                set: function (e, t, n) {
                  var i,
                    o = Ve(e),
                    r = !m.scrollboxSize() && "absolute" === o.position,
                    s =
                      (r || n) && "border-box" === x.css(e, "boxSizing", !1, o),
                    a = n ? at(e, l, n, s, o) : 0;
                  return (
                    s &&
                      r &&
                      (a -= Math.ceil(
                        e["offset" + l[0].toUpperCase() + l.slice(1)] -
                          parseFloat(o[l]) -
                          at(e, l, "border", !1, o) -
                          0.5
                      )),
                    a &&
                      (i = ee.exec(t)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[l] = t), (t = x.css(e, l))),
                    st(0, t, a)
                  );
                },
              };
            }),
            (x.cssHooks.marginLeft = Je(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ye(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      He(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            x.each(
              { margin: "", padding: "", border: "Width" },
              function (o, r) {
                (x.cssHooks[o + r] = {
                  expand: function (e) {
                    for (
                      var t = 0,
                        n = {},
                        i = "string" == typeof e ? e.split(" ") : [e];
                      t < 4;
                      t++
                    )
                      n[o + te[t] + r] = i[t] || i[t - 2] || i[0];
                    return n;
                  },
                }),
                  "margin" !== o && (x.cssHooks[o + r].set = st);
              }
            ),
            x.fn.extend({
              css: function (e, t) {
                return q(
                  this,
                  function (e, t, n) {
                    var i,
                      o,
                      r = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (i = Ve(e), o = t.length; s < o; s++)
                        r[t[s]] = x.css(e, t[s], !1, i);
                      return r;
                    }
                    return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
                  },
                  e,
                  t,
                  1 < arguments.length
                );
              },
            }),
            (((x.Tween = ct).prototype = {
              constructor: ct,
              init: function (e, t, n, i, o, r) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || x.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = r || (x.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = ct.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : ct.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = ct.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        x.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : ct.propHooks._default.set(this),
                  this
                );
              },
            }).init.prototype = ct.prototype),
            ((ct.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = x.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  x.fx.step[e.prop]
                    ? x.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!x.cssHooks[e.prop] && null == e.elem.style[tt(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : x.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }).scrollTop = ct.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (x.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (x.fx = ct.prototype.init),
            (x.fx.step = {});
          var ut,
            dt,
            pt,
            ft,
            ht = /^(?:toggle|show|hide)$/,
            gt = /queueHooks$/;
          function vt() {
            dt &&
              (!1 === T.hidden && k.requestAnimationFrame
                ? k.requestAnimationFrame(vt)
                : k.setTimeout(vt, x.fx.interval),
              x.fx.tick());
          }
          function yt() {
            return (
              k.setTimeout(function () {
                ut = void 0;
              }),
              (ut = Date.now())
            );
          }
          function mt(e, t) {
            var n,
              i = 0,
              o = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              o["margin" + (n = te[i])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function bt(e, t, n) {
            for (
              var i,
                o = (_t.tweeners[t] || []).concat(_t.tweeners["*"]),
                r = 0,
                s = o.length;
              r < s;
              r++
            )
              if ((i = o[r].call(n, t, e))) return i;
          }
          function _t(r, e, t) {
            var n,
              s,
              i = 0,
              o = _t.prefilters.length,
              a = x.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (s) return !1;
                for (
                  var e = ut || yt(),
                    t = Math.max(0, c.startTime + c.duration - e),
                    n = 1 - (t / c.duration || 0),
                    i = 0,
                    o = c.tweens.length;
                  i < o;
                  i++
                )
                  c.tweens[i].run(n);
                return (
                  a.notifyWith(r, [c, n, t]),
                  n < 1 && o
                    ? t
                    : (o || a.notifyWith(r, [c, 1, 0]),
                      a.resolveWith(r, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: r,
                props: x.extend({}, e),
                opts: x.extend(
                  !0,
                  { specialEasing: {}, easing: x.easing._default },
                  t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: ut || yt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                  var n = x.Tween(
                    r,
                    c.opts,
                    e,
                    t,
                    c.opts.specialEasing[e] || c.opts.easing
                  );
                  return c.tweens.push(n), n;
                },
                stop: function (e) {
                  var t = 0,
                    n = e ? c.tweens.length : 0;
                  if (s) return this;
                  for (s = !0; t < n; t++) c.tweens[t].run(1);
                  return (
                    e
                      ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, e]))
                      : a.rejectWith(r, [c, e]),
                    this
                  );
                },
              }),
              u = c.props;
            for (
              !(function (e, t) {
                var n, i, o, r, s;
                for (n in e)
                  if (
                    ((o = t[(i = W(n))]),
                    (r = e[n]),
                    Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
                    n !== i && ((e[i] = r), delete e[n]),
                    (s = x.cssHooks[i]) && ("expand" in s))
                  )
                    for (n in ((r = s.expand(r)), delete e[i], r))
                      (n in e) || ((e[n] = r[n]), (t[n] = o));
                  else t[i] = o;
              })(u, c.opts.specialEasing);
              i < o;
              i++
            )
              if ((n = _t.prefilters[i].call(c, r, u, c.opts)))
                return (
                  b(n.stop) &&
                    (x._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                  n
                );
            return (
              x.map(u, bt, c),
              b(c.opts.start) && c.opts.start.call(r, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              x.fx.timer(
                x.extend(l, { elem: r, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (x.Animation = x.extend(_t, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return se(n.elem, e, ee.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              for (
                var n,
                  i = 0,
                  o = (e = b(e) ? ((t = e), ["*"]) : e.match(I)).length;
                i < o;
                i++
              )
                (n = e[i]),
                  (_t.tweeners[n] = _t.tweeners[n] || []),
                  _t.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  o,
                  r,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d = "width" in t || "height" in t,
                  p = this,
                  f = {},
                  h = e.style,
                  g = e.nodeType && re(e),
                  v = Q.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (s = x._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[i]), ht.test(o))) {
                    if (
                      (delete t[i],
                      (r = r || "toggle" === o),
                      o === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== o || !v || void 0 === v[i]) continue;
                      g = !0;
                    }
                    f[i] = (v && v[i]) || x.style(e, i);
                  }
                if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f))
                  for (i in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = v && v.display) && (c = Q.get(e, "display")),
                    "none" === (u = x.css(e, "display")) &&
                      (c
                        ? (u = c)
                        : (le([e], !0),
                          (c = e.style.display || c),
                          (u = x.css(e, "display")),
                          le([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === x.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((u = h.display), (c = "none" === u ? "" : u))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  f))
                    l ||
                      (v
                        ? "hidden" in v && (g = v.hidden)
                        : (v = Q.access(e, "fxshow", { display: c })),
                      r && (v.hidden = !g),
                      g && le([e], !0),
                      p.done(function () {
                        for (i in (g || le([e]), Q.remove(e, "fxshow"), f))
                          x.style(e, i, f[i]);
                      })),
                      (l = bt(g ? v[i] : 0, i, p)),
                      i in v ||
                        ((v[i] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? _t.prefilters.unshift(e) : _t.prefilters.push(e);
            },
          })),
            (x.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? x.extend({}, e)
                  : {
                      complete: n || (!n && t) || (b(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !b(t) && t),
                    };
              return (
                x.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in x.fx.speeds
                      ? (i.duration = x.fx.speeds[i.duration])
                      : (i.duration = x.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  b(i.old) && i.old.call(this),
                    i.queue && x.dequeue(this, i.queue);
                }),
                i
              );
            }),
            x.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(re)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (t, e, n, i) {
                function o() {
                  var e = _t(this, x.extend({}, t), s);
                  (r || Q.get(this, "finish")) && e.stop(!0);
                }
                var r = x.isEmptyObject(t),
                  s = x.speed(e, n, i);
                return (
                  (o.finish = o),
                  r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                );
              },
              stop: function (o, e, r) {
                function s(e) {
                  var t = e.stop;
                  delete e.stop, t(r);
                }
                return (
                  "string" != typeof o && ((r = e), (e = o), (o = void 0)),
                  e && this.queue(o || "fx", []),
                  this.each(function () {
                    var e = !0,
                      t = null != o && o + "queueHooks",
                      n = x.timers,
                      i = Q.get(this);
                    if (t) i[t] && i[t].stop && s(i[t]);
                    else
                      for (t in i) i[t] && i[t].stop && gt.test(t) && s(i[t]);
                    for (t = n.length; t--; )
                      n[t].elem !== this ||
                        (null != o && n[t].queue !== o) ||
                        (n[t].anim.stop(r), (e = !1), n.splice(t, 1));
                    (!e && r) || x.dequeue(this, o);
                  })
                );
              },
              finish: function (s) {
                return (
                  !1 !== s && (s = s || "fx"),
                  this.each(function () {
                    var e,
                      t = Q.get(this),
                      n = t[s + "queue"],
                      i = t[s + "queueHooks"],
                      o = x.timers,
                      r = n ? n.length : 0;
                    for (
                      t.finish = !0,
                        x.queue(this, s, []),
                        i && i.stop && i.stop.call(this, !0),
                        e = o.length;
                      e--;

                    )
                      o[e].elem === this &&
                        o[e].queue === s &&
                        (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < r; e++)
                      n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish;
                  })
                );
              },
            }),
            x.each(["toggle", "show", "hide"], function (e, i) {
              var o = x.fn[i];
              x.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e
                  ? o.apply(this, arguments)
                  : this.animate(mt(i, !0), e, t, n);
              };
            }),
            x.each(
              {
                slideDown: mt("show"),
                slideUp: mt("hide"),
                slideToggle: mt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, i) {
                x.fn[e] = function (e, t, n) {
                  return this.animate(i, e, t, n);
                };
              }
            ),
            (x.timers = []),
            (x.fx.tick = function () {
              var e,
                t = 0,
                n = x.timers;
              for (ut = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || x.fx.stop(), (ut = void 0);
            }),
            (x.fx.timer = function (e) {
              x.timers.push(e), x.fx.start();
            }),
            (x.fx.interval = 13),
            (x.fx.start = function () {
              dt || ((dt = !0), vt());
            }),
            (x.fx.stop = function () {
              dt = null;
            }),
            (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (x.fn.delay = function (i, e) {
              return (
                (i = (x.fx && x.fx.speeds[i]) || i),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                  var n = k.setTimeout(e, i);
                  t.stop = function () {
                    k.clearTimeout(n);
                  };
                })
              );
            }),
            (pt = T.createElement("input")),
            (ft = T.createElement("select").appendChild(
              T.createElement("option")
            )),
            (pt.type = "checkbox"),
            (m.checkOn = "" !== pt.value),
            (m.optSelected = ft.selected),
            ((pt = T.createElement("input")).value = "t"),
            (pt.type = "radio"),
            (m.radioValue = "t" === pt.value);
          var wt,
            Ct = x.expr.attrHandle;
          x.fn.extend({
            attr: function (e, t) {
              return q(this, x.attr, e, t, 1 < arguments.length);
            },
            removeAttr: function (e) {
              return this.each(function () {
                x.removeAttr(this, e);
              });
            },
          }),
            x.extend({
              attr: function (e, t, n) {
                var i,
                  o,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return void 0 === e.getAttribute
                    ? x.prop(e, t, n)
                    : ((1 === r && x.isXMLDoc(e)) ||
                        (o =
                          x.attrHooks[t.toLowerCase()] ||
                          (x.expr.match.bool.test(t) ? wt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void x.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : !(o && "get" in o && null !== (i = o.get(e, t))) &&
                          null == (i = x.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && S(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  o = t && t.match(I);
                if (o && 1 === e.nodeType)
                  for (; (n = o[i++]); ) e.removeAttribute(n);
              },
            }),
            (wt = {
              set: function (e, t, n) {
                return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var s = Ct[t] || x.find.attr;
              Ct[t] = function (e, t, n) {
                var i,
                  o,
                  r = t.toLowerCase();
                return (
                  n ||
                    ((o = Ct[r]),
                    (Ct[r] = i),
                    (i = null != s(e, t, n) ? r : null),
                    (Ct[r] = o)),
                  i
                );
              };
            });
          var kt = /^(?:input|select|textarea|button)$/i,
            Tt = /^(?:a|area)$/i;
          function xt(e) {
            return (e.match(I) || []).join(" ");
          }
          function St(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function Et(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(I)) || [];
          }
          x.fn.extend({
            prop: function (e, t) {
              return q(this, x.prop, e, t, 1 < arguments.length);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[x.propFix[e] || e];
              });
            },
          }),
            x.extend({
              prop: function (e, t, n) {
                var i,
                  o,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return (
                    (1 === r && x.isXMLDoc(e)) ||
                      ((t = x.propFix[t] || t), (o = x.propHooks[t])),
                    void 0 !== n
                      ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : o && "get" in o && null !== (i = o.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = x.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : kt.test(e.nodeName) || (Tt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (x.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            x.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                x.propFix[this.toLowerCase()] = this;
              }
            ),
            x.fn.extend({
              addClass: function (t) {
                var e,
                  n,
                  i,
                  o,
                  r,
                  s,
                  a,
                  l = 0;
                if (b(t))
                  return this.each(function (e) {
                    x(this).addClass(t.call(this, e, St(this)));
                  });
                if ((e = Et(t)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((o = St(n)), (i = 1 === n.nodeType && " " + xt(o) + " "))
                    ) {
                      for (s = 0; (r = e[s++]); )
                        i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                      o !== (a = xt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (t) {
                var e,
                  n,
                  i,
                  o,
                  r,
                  s,
                  a,
                  l = 0;
                if (b(t))
                  return this.each(function (e) {
                    x(this).removeClass(t.call(this, e, St(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((e = Et(t)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((o = St(n)), (i = 1 === n.nodeType && " " + xt(o) + " "))
                    ) {
                      for (s = 0; (r = e[s++]); )
                        for (; -1 < i.indexOf(" " + r + " "); )
                          i = i.replace(" " + r + " ", " ");
                      o !== (a = xt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (o, t) {
                var r = typeof o,
                  s = "string" == r || Array.isArray(o);
                return "boolean" == typeof t && s
                  ? t
                    ? this.addClass(o)
                    : this.removeClass(o)
                  : b(o)
                  ? this.each(function (e) {
                      x(this).toggleClass(o.call(this, e, St(this), t), t);
                    })
                  : this.each(function () {
                      var e, t, n, i;
                      if (s)
                        for (t = 0, n = x(this), i = Et(o); (e = i[t++]); )
                          n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                      else
                        (void 0 !== o && "boolean" != r) ||
                          ((e = St(this)) && Q.set(this, "__className__", e),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              (!e &&
                                !1 !== o &&
                                Q.get(this, "__className__")) ||
                                ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    -1 < (" " + xt(St(n)) + " ").indexOf(t)
                  )
                    return !0;
                return !1;
              },
            });
          var jt = /\r/g;
          x.fn.extend({
            val: function (n) {
              var i,
                e,
                o,
                t = this[0];
              return arguments.length
                ? ((o = b(n)),
                  this.each(function (e) {
                    var t;
                    1 === this.nodeType &&
                      (null == (t = o ? n.call(this, e, x(this).val()) : n)
                        ? (t = "")
                        : "number" == typeof t
                        ? (t += "")
                        : Array.isArray(t) &&
                          (t = x.map(t, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((i =
                        x.valHooks[this.type] ||
                        x.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in i &&
                        void 0 !== i.set(this, t, "value")) ||
                        (this.value = t));
                  }))
                : t
                ? (i =
                    x.valHooks[t.type] ||
                    x.valHooks[t.nodeName.toLowerCase()]) &&
                  "get" in i &&
                  void 0 !== (e = i.get(t, "value"))
                  ? e
                  : "string" == typeof (e = t.value)
                  ? e.replace(jt, "")
                  : null == e
                  ? ""
                  : e
                : void 0;
            },
          }),
            x.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : xt(x.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      o = e.options,
                      r = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                      if (
                        ((n = o[i]).selected || i === r) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))
                      ) {
                        if (((t = x(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, o = e.options, r = x.makeArray(t), s = o.length;
                      s--;

                    )
                      ((i = o[s]).selected =
                        -1 < x.inArray(x.valHooks.option.get(i), r)) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), r;
                  },
                },
              },
            }),
            x.each(["radio", "checkbox"], function () {
              (x.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = -1 < x.inArray(x(e).val(), t));
                },
              }),
                m.checkOn ||
                  (x.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (m.focusin = "onfocusin" in k);
          function At(e) {
            e.stopPropagation();
          }
          var Pt = /^(?:focusinfocus|focusoutblur)$/;
          x.extend(x.event, {
            trigger: function (e, t, n, i) {
              var o,
                r,
                s,
                a,
                l,
                c,
                u,
                d,
                p = [n || T],
                f = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((r = d = s = n = n || T),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Pt.test(f + x.event.triggered) &&
                  (-1 < f.indexOf(".") &&
                    ((f = (h = f.split(".")).shift()), h.sort()),
                  (l = f.indexOf(":") < 0 && "on" + f),
                  ((e = e[x.expando]
                    ? e
                    : new x.Event(f, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = h.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : x.makeArray(t, [e])),
                  (u = x.event.special[f] || {}),
                  i || !u.trigger || !1 !== u.trigger.apply(n, t)))
              ) {
                if (!i && !u.noBubble && !g(n)) {
                  for (
                    a = u.delegateType || f,
                      Pt.test(a + f) || (r = r.parentNode);
                    r;
                    r = r.parentNode
                  )
                    p.push(r), (s = r);
                  s === (n.ownerDocument || T) &&
                    p.push(s.defaultView || s.parentWindow || k);
                }
                for (o = 0; (r = p[o++]) && !e.isPropagationStopped(); )
                  (d = r),
                    (e.type = 1 < o ? a : u.bindType || f),
                    (c =
                      (Q.get(r, "events") || Object.create(null))[e.type] &&
                      Q.get(r, "handle")) && c.apply(r, t),
                    (c = l && r[l]) &&
                      c.apply &&
                      V(r) &&
                      ((e.result = c.apply(r, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = f),
                  i ||
                    e.isDefaultPrevented() ||
                    (u._default && !1 !== u._default.apply(p.pop(), t)) ||
                    !V(n) ||
                    (l &&
                      b(n[f]) &&
                      !g(n) &&
                      ((s = n[l]) && (n[l] = null),
                      (x.event.triggered = f),
                      e.isPropagationStopped() && d.addEventListener(f, At),
                      n[f](),
                      e.isPropagationStopped() && d.removeEventListener(f, At),
                      (x.event.triggered = void 0),
                      s && (n[l] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0 });
              x.event.trigger(i, null, t);
            },
          }),
            x.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  x.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return x.event.trigger(e, t, n, !0);
              },
            }),
            m.focusin ||
              x.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
                function o(e) {
                  x.event.simulate(i, e.target, x.event.fix(e));
                }
                x.event.special[i] = {
                  setup: function () {
                    var e = this.ownerDocument || this.document || this,
                      t = Q.access(e, i);
                    t || e.addEventListener(n, o, !0),
                      Q.access(e, i, (t || 0) + 1);
                  },
                  teardown: function () {
                    var e = this.ownerDocument || this.document || this,
                      t = Q.access(e, i) - 1;
                    t
                      ? Q.access(e, i, t)
                      : (e.removeEventListener(n, o, !0), Q.remove(e, i));
                  },
                };
              });
          var Ot = k.location,
            $t = { guid: Date.now() },
            Dt = /\?/;
          x.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
              t = new k.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {
              t = void 0;
            }
            return (
              (t && !t.getElementsByTagName("parsererror").length) ||
                x.error("Invalid XML: " + e),
              t
            );
          };
          var It = /\[\]$/,
            Ft = /\r?\n/g,
            Ht = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;
          function Nt(n, e, i, o) {
            var t;
            if (Array.isArray(e))
              x.each(e, function (e, t) {
                i || It.test(n)
                  ? o(n, t)
                  : Nt(
                      n +
                        "[" +
                        ("object" == typeof t && null != t ? e : "") +
                        "]",
                      t,
                      i,
                      o
                    );
              });
            else if (i || "object" !== w(e)) o(n, e);
            else for (t in e) Nt(n + "[" + t + "]", e[t], i, o);
          }
          (x.param = function (e, t) {
            function n(e, t) {
              var n = b(t) ? t() : t;
              o[o.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            }
            var i,
              o = [];
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !x.isPlainObject(e)))
              x.each(e, function () {
                n(this.name, this.value);
              });
            else for (i in e) Nt(i, e[i], t, n);
            return o.join("&");
          }),
            x.fn.extend({
              serialize: function () {
                return x.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = x.prop(this, "elements");
                  return e ? x.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !x(this).is(":disabled") &&
                      Mt.test(this.nodeName) &&
                      !Ht.test(e) &&
                      (this.checked || !de.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = x(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? x.map(n, function (e) {
                          return { name: t.name, value: e.replace(Ft, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Ft, "\r\n") };
                  })
                  .get();
              },
            });
          var Rt = /%20/g,
            Lt = /#.*$/,
            qt = /([?&])_=[^&]*/,
            Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            zt = /^(?:GET|HEAD)$/,
            Ut = /^\/\//,
            Wt = {},
            Vt = {},
            Xt = "*/".concat("*"),
            Qt = T.createElement("a");
          function Gt(r) {
            return function (e, t) {
              "string" != typeof e && ((t = e), (e = "*"));
              var n,
                i = 0,
                o = e.toLowerCase().match(I) || [];
              if (b(t))
                for (; (n = o[i++]); )
                  "+" === n[0]
                    ? ((n = n.slice(1) || "*"), (r[n] = r[n] || []).unshift(t))
                    : (r[n] = r[n] || []).push(t);
            };
          }
          function Yt(t, o, r, s) {
            var a = {},
              l = t === Vt;
            function c(e) {
              var i;
              return (
                (a[e] = !0),
                x.each(t[e] || [], function (e, t) {
                  var n = t(o, r, s);
                  return "string" != typeof n || l || a[n]
                    ? l
                      ? !(i = n)
                      : void 0
                    : (o.dataTypes.unshift(n), c(n), !1);
                }),
                i
              );
            }
            return c(o.dataTypes[0]) || (!a["*"] && c("*"));
          }
          function Jt(e, t) {
            var n,
              i,
              o = x.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : (i = i || {}))[n] = t[n]);
            return i && x.extend(!0, e, i), e;
          }
          (Qt.href = Ot.href),
            x.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ot.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ot.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Xt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": x.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Jt(Jt(e, x.ajaxSettings), t) : Jt(x.ajaxSettings, e);
              },
              ajaxPrefilter: Gt(Wt),
              ajaxTransport: Gt(Vt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var u,
                  d,
                  p,
                  n,
                  f,
                  i,
                  h,
                  g,
                  o,
                  r,
                  v = x.ajaxSetup({}, t),
                  y = v.context || v,
                  m = v.context && (y.nodeType || y.jquery) ? x(y) : x.event,
                  b = x.Deferred(),
                  _ = x.Callbacks("once memory"),
                  w = v.statusCode || {},
                  s = {},
                  a = {},
                  l = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (h) {
                        if (!n)
                          for (n = {}; (t = Bt.exec(p)); )
                            n[t[1].toLowerCase() + " "] = (
                              n[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = n[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return h ? p : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == h &&
                          ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                          (s[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == h && (v.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (h) C.always(e[C.status]);
                        else for (t in e) w[t] = [w[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || l;
                      return u && u.abort(t), c(0, t), this;
                    },
                  };
                if (
                  (b.promise(C),
                  (v.url = ((e || v.url || Ot.href) + "").replace(
                    Ut,
                    Ot.protocol + "//"
                  )),
                  (v.type = t.method || t.type || v.method || v.type),
                  (v.dataTypes = (v.dataType || "*").toLowerCase().match(I) || [
                    "",
                  ]),
                  null == v.crossDomain)
                ) {
                  i = T.createElement("a");
                  try {
                    (i.href = v.url),
                      (i.href = i.href),
                      (v.crossDomain =
                        Qt.protocol + "//" + Qt.host !=
                        i.protocol + "//" + i.host);
                  } catch (e) {
                    v.crossDomain = !0;
                  }
                }
                if (
                  (v.data &&
                    v.processData &&
                    "string" != typeof v.data &&
                    (v.data = x.param(v.data, v.traditional)),
                  Yt(Wt, v, t, C),
                  h)
                )
                  return C;
                for (o in ((g = x.event && v.global) &&
                  0 == x.active++ &&
                  x.event.trigger("ajaxStart"),
                (v.type = v.type.toUpperCase()),
                (v.hasContent = !zt.test(v.type)),
                (d = v.url.replace(Lt, "")),
                v.hasContent
                  ? v.data &&
                    v.processData &&
                    0 ===
                      (v.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (v.data = v.data.replace(Rt, "+"))
                  : ((r = v.url.slice(d.length)),
                    v.data &&
                      (v.processData || "string" == typeof v.data) &&
                      ((d += (Dt.test(d) ? "&" : "?") + v.data), delete v.data),
                    !1 === v.cache &&
                      ((d = d.replace(qt, "$1")),
                      (r = (Dt.test(d) ? "&" : "?") + "_=" + $t.guid++ + r)),
                    (v.url = d + r)),
                v.ifModified &&
                  (x.lastModified[d] &&
                    C.setRequestHeader("If-Modified-Since", x.lastModified[d]),
                  x.etag[d] && C.setRequestHeader("If-None-Match", x.etag[d])),
                ((v.data && v.hasContent && !1 !== v.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", v.contentType),
                C.setRequestHeader(
                  "Accept",
                  v.dataTypes[0] && v.accepts[v.dataTypes[0]]
                    ? v.accepts[v.dataTypes[0]] +
                        ("*" !== v.dataTypes[0] ? ", " + Xt + "; q=0.01" : "")
                    : v.accepts["*"]
                ),
                v.headers))
                  C.setRequestHeader(o, v.headers[o]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, C, v) || h))
                  return C.abort();
                if (
                  ((l = "abort"),
                  _.add(v.complete),
                  C.done(v.success),
                  C.fail(v.error),
                  (u = Yt(Vt, v, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), g && m.trigger("ajaxSend", [C, v]), h)
                  )
                    return C;
                  v.async &&
                    0 < v.timeout &&
                    (f = k.setTimeout(function () {
                      C.abort("timeout");
                    }, v.timeout));
                  try {
                    (h = !1), u.send(s, c);
                  } catch (e) {
                    if (h) throw e;
                    c(-1, e);
                  }
                } else c(-1, "No Transport");
                function c(e, t, n, i) {
                  var o,
                    r,
                    s,
                    a,
                    l,
                    c = t;
                  h ||
                    ((h = !0),
                    f && k.clearTimeout(f),
                    (u = void 0),
                    (p = i || ""),
                    (C.readyState = 0 < e ? 4 : 0),
                    (o = (200 <= e && e < 300) || 304 === e),
                    n &&
                      (a = (function (e, t, n) {
                        for (
                          var i, o, r, s, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (o in a)
                            if (a[o] && a[o].test(i)) {
                              l.unshift(o);
                              break;
                            }
                        if (l[0] in n) r = l[0];
                        else {
                          for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                              r = o;
                              break;
                            }
                            s = s || o;
                          }
                          r = r || s;
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r];
                      })(v, C, n)),
                    !o &&
                      -1 < x.inArray("script", v.dataTypes) &&
                      (v.converters["text script"] = function () {}),
                    (a = (function (e, t, n, i) {
                      var o,
                        r,
                        s,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (s in e.converters)
                          c[s.toLowerCase()] = e.converters[s];
                      for (r = u.shift(); r; )
                        if (
                          (e.responseFields[r] && (n[e.responseFields[r]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = r),
                          (r = u.shift()))
                        )
                          if ("*" === r) r = l;
                          else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                              for (o in c)
                                if (
                                  (a = o.split(" "))[1] === r &&
                                  (s = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = c[o])
                                    : !0 !== c[o] &&
                                      ((r = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? e
                                      : "No conversion from " + l + " to " + r,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(v, a, C, o)),
                    o
                      ? (v.ifModified &&
                          ((l = C.getResponseHeader("Last-Modified")) &&
                            (x.lastModified[d] = l),
                          (l = C.getResponseHeader("etag")) && (x.etag[d] = l)),
                        204 === e || "HEAD" === v.type
                          ? (c = "nocontent")
                          : 304 === e
                          ? (c = "notmodified")
                          : ((c = a.state), (r = a.data), (o = !(s = a.error))))
                      : ((s = c),
                        (!e && c) || ((c = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || c) + ""),
                    o
                      ? b.resolveWith(y, [r, c, C])
                      : b.rejectWith(y, [C, c, s]),
                    C.statusCode(w),
                    (w = void 0),
                    g &&
                      m.trigger(o ? "ajaxSuccess" : "ajaxError", [
                        C,
                        v,
                        o ? r : s,
                      ]),
                    _.fireWith(y, [C, c]),
                    g &&
                      (m.trigger("ajaxComplete", [C, v]),
                      --x.active || x.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return x.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return x.get(e, void 0, t, "script");
              },
            }),
            x.each(["get", "post"], function (e, o) {
              x[o] = function (e, t, n, i) {
                return (
                  b(t) && ((i = i || n), (n = t), (t = void 0)),
                  x.ajax(
                    x.extend(
                      { url: e, type: o, dataType: i, data: t, success: n },
                      x.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            x.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (x._evalUrl = function (e, t, n) {
              return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  x.globalEval(e, t, n);
                },
              });
            }),
            x.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (b(e) && (e = e.call(this[0])),
                    (t = x(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (n) {
                return b(n)
                  ? this.each(function (e) {
                      x(this).wrapInner(n.call(this, e));
                    })
                  : this.each(function () {
                      var e = x(this),
                        t = e.contents();
                      t.length ? t.wrapAll(n) : e.append(n);
                    });
              },
              wrap: function (t) {
                var n = b(t);
                return this.each(function (e) {
                  x(this).wrapAll(n ? t.call(this, e) : t);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      x(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (x.expr.pseudos.hidden = function (e) {
              return !x.expr.pseudos.visible(e);
            }),
            (x.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (x.ajaxSettings.xhr = function () {
              try {
                return new k.XMLHttpRequest();
              } catch (e) {}
            });
          var Kt = { 0: 200, 1223: 204 },
            Zt = x.ajaxSettings.xhr();
          (m.cors = !!Zt && "withCredentials" in Zt),
            (m.ajax = Zt = !!Zt),
            x.ajaxTransport(function (o) {
              var r, s;
              if (m.cors || (Zt && !o.crossDomain))
                return {
                  send: function (e, t) {
                    var n,
                      i = o.xhr();
                    if (
                      (i.open(o.type, o.url, o.async, o.username, o.password),
                      o.xhrFields)
                    )
                      for (n in o.xhrFields) i[n] = o.xhrFields[n];
                    for (n in (o.mimeType &&
                      i.overrideMimeType &&
                      i.overrideMimeType(o.mimeType),
                    o.crossDomain ||
                      e["X-Requested-With"] ||
                      (e["X-Requested-With"] = "XMLHttpRequest"),
                    e))
                      i.setRequestHeader(n, e[n]);
                    (r = function (e) {
                      return function () {
                        r &&
                          ((r =
                            s =
                            i.onload =
                            i.onerror =
                            i.onabort =
                            i.ontimeout =
                            i.onreadystatechange =
                              null),
                          "abort" === e
                            ? i.abort()
                            : "error" === e
                            ? "number" != typeof i.status
                              ? t(0, "error")
                              : t(i.status, i.statusText)
                            : t(
                                Kt[i.status] || i.status,
                                i.statusText,
                                "text" !== (i.responseType || "text") ||
                                  "string" != typeof i.responseText
                                  ? { binary: i.response }
                                  : { text: i.responseText },
                                i.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (i.onload = r()),
                      (s = i.onerror = i.ontimeout = r("error")),
                      void 0 !== i.onabort
                        ? (i.onabort = s)
                        : (i.onreadystatechange = function () {
                            4 === i.readyState &&
                              k.setTimeout(function () {
                                r && s();
                              });
                          }),
                      (r = r("abort"));
                    try {
                      i.send((o.hasContent && o.data) || null);
                    } catch (e) {
                      if (r) throw e;
                    }
                  },
                  abort: function () {
                    r && r();
                  },
                };
            }),
            x.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            x.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return x.globalEval(e), e;
                },
              },
            }),
            x.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            x.ajaxTransport("script", function (n) {
              var i, o;
              if (n.crossDomain || n.scriptAttrs)
                return {
                  send: function (e, t) {
                    (i = x("<script>")
                      .attr(n.scriptAttrs || {})
                      .prop({ charset: n.scriptCharset, src: n.url })
                      .on(
                        "load error",
                        (o = function (e) {
                          i.remove(),
                            (o = null),
                            e && t("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      T.head.appendChild(i[0]);
                  },
                  abort: function () {
                    o && o();
                  },
                };
            });
          var en,
            tn = [],
            nn = /(=)\?(?=&|$)|\?\?/;
          x.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = tn.pop() || x.expando + "_" + $t.guid++;
              return (this[e] = !0), e;
            },
          }),
            x.ajaxPrefilter("json jsonp", function (e, t, n) {
              var i,
                o,
                r,
                s =
                  !1 !== e.jsonp &&
                  (nn.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      nn.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(nn, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return r || x.error(i + " was not called"), r[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = k[i]),
                  (k[i] = function () {
                    r = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? x(k).removeProp(i) : (k[i] = o),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), tn.push(i)),
                      r && b(o) && o(r[0]),
                      (r = o = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((en = T.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === en.childNodes.length)),
            (x.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((i = (t =
                          T.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = T.location.href),
                        t.head.appendChild(i))
                      : (t = T)),
                  (r = !n && []),
                  (o = E.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = me([e], t, r)),
                      r && r.length && x(r).remove(),
                      x.merge([], o.childNodes)));
              var i, o, r;
            }),
            (x.fn.load = function (e, t, n) {
              var i,
                o,
                r,
                s = this,
                a = e.indexOf(" ");
              return (
                -1 < a && ((i = xt(e.slice(a))), (e = e.slice(0, a))),
                b(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                0 < s.length &&
                  x
                    .ajax({
                      url: e,
                      type: o || "GET",
                      dataType: "html",
                      data: t,
                    })
                    .done(function (e) {
                      (r = arguments),
                        s.html(
                          i ? x("<div>").append(x.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, r || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (x.expr.pseudos.animated = function (t) {
              return x.grep(x.timers, function (e) {
                return t === e.elem;
              }).length;
            }),
            (x.offset = {
              setOffset: function (e, t, n) {
                var i,
                  o,
                  r,
                  s,
                  a,
                  l,
                  c = x.css(e, "position"),
                  u = x(e),
                  d = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (r = x.css(e, "top")),
                  (l = x.css(e, "left")),
                  (o =
                    ("absolute" === c || "fixed" === c) &&
                    -1 < (r + l).indexOf("auto")
                      ? ((s = (i = u.position()).top), i.left)
                      : ((s = parseFloat(r) || 0), parseFloat(l) || 0)),
                  b(t) && (t = t.call(e, n, x.extend({}, a))),
                  null != t.top && (d.top = t.top - a.top + s),
                  null != t.left && (d.left = t.left - a.left + o),
                  "using" in t
                    ? t.using.call(e, d)
                    : ("number" == typeof d.top && (d.top += "px"),
                      "number" == typeof d.left && (d.left += "px"),
                      u.css(d));
              },
            }),
            x.fn.extend({
              offset: function (t) {
                if (arguments.length)
                  return void 0 === t
                    ? this
                    : this.each(function (e) {
                        x.offset.setOffset(this, t, e);
                      });
                var e,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((e = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    o = { top: 0, left: 0 };
                  if ("fixed" === x.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === x.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((o = x(e).offset()).top += x.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (o.left += x.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - x.css(i, "marginTop", !0),
                    left: t.left - o.left - x.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === x.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ne;
                });
              },
            }),
            x.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (t, o) {
                var r = "pageYOffset" === o;
                x.fn[t] = function (e) {
                  return q(
                    this,
                    function (e, t, n) {
                      var i;
                      if (
                        (g(e)
                          ? (i = e)
                          : 9 === e.nodeType && (i = e.defaultView),
                        void 0 === n)
                      )
                        return i ? i[o] : e[t];
                      i
                        ? i.scrollTo(
                            r ? i.pageXOffset : n,
                            r ? n : i.pageYOffset
                          )
                        : (e[t] = n);
                    },
                    t,
                    e,
                    arguments.length
                  );
                };
              }
            ),
            x.each(["top", "left"], function (e, n) {
              x.cssHooks[n] = Je(m.pixelPosition, function (e, t) {
                if (t)
                  return (
                    (t = Ye(e, n)), We.test(t) ? x(e).position()[n] + "px" : t
                  );
              });
            }),
            x.each({ Height: "height", Width: "width" }, function (s, a) {
              x.each(
                { padding: "inner" + s, content: a, "": "outer" + s },
                function (i, r) {
                  x.fn[r] = function (e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                      o = i || (!0 === e || !0 === t ? "margin" : "border");
                    return q(
                      this,
                      function (e, t, n) {
                        var i;
                        return g(e)
                          ? 0 === r.indexOf("outer")
                            ? e["inner" + s]
                            : e.document.documentElement["client" + s]
                          : 9 === e.nodeType
                          ? ((i = e.documentElement),
                            Math.max(
                              e.body["scroll" + s],
                              i["scroll" + s],
                              e.body["offset" + s],
                              i["offset" + s],
                              i["client" + s]
                            ))
                          : void 0 === n
                          ? x.css(e, t, o)
                          : x.style(e, t, n, o);
                      },
                      a,
                      n ? e : void 0,
                      n
                    );
                  };
                }
              );
            }),
            x.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                x.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            x.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            x.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, n) {
                x.fn[n] = function (e, t) {
                  return 0 < arguments.length
                    ? this.on(n, null, e, t)
                    : this.trigger(n);
                };
              }
            );
          var on = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (x.proxy = function (e, t) {
            var n, i, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
              return (
                (i = a.call(arguments, 2)),
                ((o = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }).guid = e.guid =
                  e.guid || x.guid++),
                o
              );
          }),
            (x.holdReady = function (e) {
              e ? x.readyWait++ : x.ready(!0);
            }),
            (x.isArray = Array.isArray),
            (x.parseJSON = JSON.parse),
            (x.nodeName = S),
            (x.isFunction = b),
            (x.isWindow = g),
            (x.camelCase = W),
            (x.type = w),
            (x.now = Date.now),
            (x.isNumeric = function (e) {
              var t = x.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (x.trim = function (e) {
              return null == e ? "" : (e + "").replace(on, "");
            }),
            "function" == typeof define &&
              define.amd &&
              define("jquery", [], function () {
                return x;
              });
          var rn = k.jQuery,
            sn = k.$;
          return (
            (x.noConflict = function (e) {
              return (
                k.$ === x && (k.$ = sn),
                e && k.jQuery === x && (k.jQuery = rn),
                x
              );
            }),
            void 0 === e && (k.jQuery = k.$ = x),
            x
          );
        });
      },
      {},
    ],
    3: [
      function (e, t, n) {
        var i,
          o,
          r = (t.exports = {});
        function s() {
          throw new Error("setTimeout has not been defined");
        }
        function a() {
          throw new Error("clearTimeout has not been defined");
        }
        function l(t) {
          if (i === setTimeout) return setTimeout(t, 0);
          if ((i === s || !i) && setTimeout)
            return (i = setTimeout), setTimeout(t, 0);
          try {
            return i(t, 0);
          } catch (e) {
            try {
              return i.call(null, t, 0);
            } catch (e) {
              return i.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            i = "function" == typeof setTimeout ? setTimeout : s;
          } catch (e) {
            i = s;
          }
          try {
            o = "function" == typeof clearTimeout ? clearTimeout : a;
          } catch (e) {
            o = a;
          }
        })();
        var c,
          u = [],
          d = !1,
          p = -1;
        function f() {
          d &&
            c &&
            ((d = !1),
            c.length ? (u = c.concat(u)) : (p = -1),
            u.length && h());
        }
        function h() {
          if (!d) {
            var e = l(f);
            d = !0;
            for (var t = u.length; t; ) {
              for (c = u, u = []; ++p < t; ) c && c[p].run();
              (p = -1), (t = u.length);
            }
            (c = null),
              (d = !1),
              (function (t) {
                if (o === clearTimeout) return clearTimeout(t);
                if ((o === a || !o) && clearTimeout)
                  return (o = clearTimeout), clearTimeout(t);
                try {
                  o(t);
                } catch (e) {
                  try {
                    return o.call(null, t);
                  } catch (e) {
                    return o.call(this, t);
                  }
                }
              })(e);
          }
        }
        function g(e, t) {
          (this.fun = e), (this.array = t);
        }
        function v() {}
        (r.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          u.push(new g(e, t)), 1 !== u.length || d || l(h);
        }),
          (g.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (r.title = "browser"),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ""),
          (r.versions = {}),
          (r.on = v),
          (r.addListener = v),
          (r.once = v),
          (r.off = v),
          (r.removeListener = v),
          (r.removeAllListeners = v),
          (r.emit = v),
          (r.prependListener = v),
          (r.prependOnceListener = v),
          (r.listeners = function (e) {
            return [];
          }),
          (r.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (r.cwd = function () {
            return "/";
          }),
          (r.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (r.umask = function () {
            return 0;
          });
      },
      {},
    ],
    4: [
      function (t, n, i) {
        !(function (e) {
          "use strict";
          "function" == typeof define && define.amd
            ? define(["jquery"], e)
            : void 0 !== i
            ? (n.exports = e(t("jquery")))
            : e(jQuery);
        })(function (c) {
          "use strict";
          var o,
            r = window.Slick || {};
          (o = 0),
            ((r = function (e, t) {
              var n,
                i = this;
              (i.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: c(e),
                appendDots: c(e),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                  '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                  '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                  return c('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
              }),
                (i.initials = {
                  animating: !1,
                  dragging: !1,
                  autoPlayTimer: null,
                  currentDirection: 0,
                  currentLeft: null,
                  currentSlide: 0,
                  direction: 1,
                  $dots: null,
                  listWidth: null,
                  listHeight: null,
                  loadIndex: 0,
                  $nextArrow: null,
                  $prevArrow: null,
                  scrolling: !1,
                  slideCount: null,
                  slideWidth: null,
                  $slideTrack: null,
                  $slides: null,
                  sliding: !1,
                  slideOffset: 0,
                  swipeLeft: null,
                  swiping: !1,
                  $list: null,
                  touchObject: {},
                  transformsEnabled: !1,
                  unslicked: !1,
                }),
                c.extend(i, i.initials),
                (i.activeBreakpoint = null),
                (i.animType = null),
                (i.animProp = null),
                (i.breakpoints = []),
                (i.breakpointSettings = []),
                (i.cssTransitions = !1),
                (i.focussed = !1),
                (i.interrupted = !1),
                (i.hidden = "hidden"),
                (i.paused = !0),
                (i.positionProp = null),
                (i.respondTo = null),
                (i.rowCount = 1),
                (i.shouldClick = !0),
                (i.$slider = c(e)),
                (i.$slidesCache = null),
                (i.transformType = null),
                (i.transitionType = null),
                (i.visibilityChange = "visibilitychange"),
                (i.windowWidth = 0),
                (i.windowTimer = null),
                (n = c(e).data("slick") || {}),
                (i.options = c.extend({}, i.defaults, t, n)),
                (i.currentSlide = i.options.initialSlide),
                (i.originalSettings = i.options),
                void 0 !== document.mozHidden
                  ? ((i.hidden = "mozHidden"),
                    (i.visibilityChange = "mozvisibilitychange"))
                  : void 0 !== document.webkitHidden &&
                    ((i.hidden = "webkitHidden"),
                    (i.visibilityChange = "webkitvisibilitychange")),
                (i.autoPlay = c.proxy(i.autoPlay, i)),
                (i.autoPlayClear = c.proxy(i.autoPlayClear, i)),
                (i.autoPlayIterator = c.proxy(i.autoPlayIterator, i)),
                (i.changeSlide = c.proxy(i.changeSlide, i)),
                (i.clickHandler = c.proxy(i.clickHandler, i)),
                (i.selectHandler = c.proxy(i.selectHandler, i)),
                (i.setPosition = c.proxy(i.setPosition, i)),
                (i.swipeHandler = c.proxy(i.swipeHandler, i)),
                (i.dragHandler = c.proxy(i.dragHandler, i)),
                (i.keyHandler = c.proxy(i.keyHandler, i)),
                (i.instanceUid = o++),
                (i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                i.registerBreakpoints(),
                i.init(!0);
            }).prototype.activateADA = function () {
              this.$slideTrack
                .find(".slick-active")
                .attr({ "aria-hidden": "false" })
                .find("a, input, button, select")
                .attr({ tabindex: "0" });
            }),
            (r.prototype.addSlide = r.prototype.slickAdd =
              function (e, t, n) {
                var i = this;
                if ("boolean" == typeof t) (n = t), (t = null);
                else if (t < 0 || t >= i.slideCount) return !1;
                i.unload(),
                  "number" == typeof t
                    ? 0 === t && 0 === i.$slides.length
                      ? c(e).appendTo(i.$slideTrack)
                      : n
                      ? c(e).insertBefore(i.$slides.eq(t))
                      : c(e).insertAfter(i.$slides.eq(t))
                    : !0 === n
                    ? c(e).prependTo(i.$slideTrack)
                    : c(e).appendTo(i.$slideTrack),
                  (i.$slides = i.$slideTrack.children(this.options.slide)),
                  i.$slideTrack.children(this.options.slide).detach(),
                  i.$slideTrack.append(i.$slides),
                  i.$slides.each(function (e, t) {
                    c(t).attr("data-slick-index", e);
                  }),
                  (i.$slidesCache = i.$slides),
                  i.reinit();
              }),
            (r.prototype.animateHeight = function () {
              if (
                1 === this.options.slidesToShow &&
                !0 === this.options.adaptiveHeight &&
                !1 === this.options.vertical
              ) {
                var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.animate({ height: e }, this.options.speed);
              }
            }),
            (r.prototype.animateSlide = function (e, t) {
              var n = {},
                i = this;
              i.animateHeight(),
                !0 === i.options.rtl && !1 === i.options.vertical && (e = -e),
                !1 === i.transformsEnabled
                  ? !1 === i.options.vertical
                    ? i.$slideTrack.animate(
                        { left: e },
                        i.options.speed,
                        i.options.easing,
                        t
                      )
                    : i.$slideTrack.animate(
                        { top: e },
                        i.options.speed,
                        i.options.easing,
                        t
                      )
                  : !1 === i.cssTransitions
                  ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
                    c({ animStart: i.currentLeft }).animate(
                      { animStart: e },
                      {
                        duration: i.options.speed,
                        easing: i.options.easing,
                        step: function (e) {
                          (e = Math.ceil(e)),
                            !1 === i.options.vertical
                              ? (n[i.animType] = "translate(" + e + "px, 0px)")
                              : (n[i.animType] = "translate(0px," + e + "px)"),
                            i.$slideTrack.css(n);
                        },
                        complete: function () {
                          t && t.call();
                        },
                      }
                    ))
                  : (i.applyTransition(),
                    (e = Math.ceil(e)),
                    !1 === i.options.vertical
                      ? (n[i.animType] = "translate3d(" + e + "px, 0px, 0px)")
                      : (n[i.animType] = "translate3d(0px," + e + "px, 0px)"),
                    i.$slideTrack.css(n),
                    t &&
                      setTimeout(function () {
                        i.disableTransition(), t.call();
                      }, i.options.speed));
            }),
            (r.prototype.getNavTarget = function () {
              var e = this.options.asNavFor;
              return e && null !== e && (e = c(e).not(this.$slider)), e;
            }),
            (r.prototype.asNavFor = function (t) {
              var e = this.getNavTarget();
              null !== e &&
                "object" == typeof e &&
                e.each(function () {
                  var e = c(this).slick("getSlick");
                  e.unslicked || e.slideHandler(t, !0);
                });
            }),
            (r.prototype.applyTransition = function (e) {
              var t = this,
                n = {};
              !1 === t.options.fade
                ? (n[t.transitionType] =
                    t.transformType +
                    " " +
                    t.options.speed +
                    "ms " +
                    t.options.cssEase)
                : (n[t.transitionType] =
                    "opacity " + t.options.speed + "ms " + t.options.cssEase),
                !1 === t.options.fade
                  ? t.$slideTrack.css(n)
                  : t.$slides.eq(e).css(n);
            }),
            (r.prototype.autoPlay = function () {
              this.autoPlayClear(),
                this.slideCount > this.options.slidesToShow &&
                  (this.autoPlayTimer = setInterval(
                    this.autoPlayIterator,
                    this.options.autoplaySpeed
                  ));
            }),
            (r.prototype.autoPlayClear = function () {
              this.autoPlayTimer && clearInterval(this.autoPlayTimer);
            }),
            (r.prototype.autoPlayIterator = function () {
              var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
              e.paused ||
                e.interrupted ||
                e.focussed ||
                (!1 === e.options.infinite &&
                  (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
                    ? (e.direction = 0)
                    : 0 === e.direction &&
                      ((t = e.currentSlide - e.options.slidesToScroll),
                      e.currentSlide - 1 == 0 && (e.direction = 1))),
                e.slideHandler(t));
            }),
            (r.prototype.buildArrows = function () {
              var e = this;
              !0 === e.options.arrows &&
                ((e.$prevArrow = c(e.options.prevArrow).addClass(
                  "slick-arrow"
                )),
                (e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow")),
                e.slideCount > e.options.slidesToShow
                  ? (e.$prevArrow
                      .removeClass("slick-hidden")
                      .removeAttr("aria-hidden tabindex"),
                    e.$nextArrow
                      .removeClass("slick-hidden")
                      .removeAttr("aria-hidden tabindex"),
                    e.htmlExpr.test(e.options.prevArrow) &&
                      e.$prevArrow.prependTo(e.options.appendArrows),
                    e.htmlExpr.test(e.options.nextArrow) &&
                      e.$nextArrow.appendTo(e.options.appendArrows),
                    !0 !== e.options.infinite &&
                      e.$prevArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"))
                  : e.$prevArrow
                      .add(e.$nextArrow)
                      .addClass("slick-hidden")
                      .attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (r.prototype.buildDots = function () {
              var e,
                t,
                n = this;
              if (
                !0 === n.options.dots &&
                n.slideCount > n.options.slidesToShow
              ) {
                for (
                  n.$slider.addClass("slick-dotted"),
                    t = c("<ul />").addClass(n.options.dotsClass),
                    e = 0;
                  e <= n.getDotCount();
                  e += 1
                )
                  t.append(
                    c("<li />").append(n.options.customPaging.call(this, n, e))
                  );
                (n.$dots = t.appendTo(n.options.appendDots)),
                  n.$dots.find("li").first().addClass("slick-active");
              }
            }),
            (r.prototype.buildOut = function () {
              var e = this;
              (e.$slides = e.$slider
                .children(e.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                  c(t)
                    .attr("data-slick-index", e)
                    .data("originalStyling", c(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack =
                  0 === e.slideCount
                    ? c('<div class="slick-track"/>').appendTo(e.$slider)
                    : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                (e.$list = e.$slideTrack
                  .wrap('<div class="slick-list"/>')
                  .parent()),
                e.$slideTrack.css("opacity", 0),
                (!0 !== e.options.centerMode &&
                  !0 !== e.options.swipeToSlide) ||
                  (e.options.slidesToScroll = 1),
                c("img[data-lazy]", e.$slider)
                  .not("[src]")
                  .addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                  "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                !0 === e.options.draggable && e.$list.addClass("draggable");
            }),
            (r.prototype.buildRows = function () {
              var e,
                t,
                n,
                i,
                o,
                r,
                s,
                a = this;
              if (
                ((i = document.createDocumentFragment()),
                (r = a.$slider.children()),
                0 < a.options.rows)
              ) {
                for (
                  s = a.options.slidesPerRow * a.options.rows,
                    o = Math.ceil(r.length / s),
                    e = 0;
                  e < o;
                  e++
                ) {
                  var l = document.createElement("div");
                  for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                      var u = e * s + (t * a.options.slidesPerRow + n);
                      r.get(u) && c.appendChild(r.get(u));
                    }
                    l.appendChild(c);
                  }
                  i.appendChild(l);
                }
                a.$slider.empty().append(i),
                  a.$slider
                    .children()
                    .children()
                    .children()
                    .css({
                      width: 100 / a.options.slidesPerRow + "%",
                      display: "inline-block",
                    });
              }
            }),
            (r.prototype.checkResponsive = function (e, t) {
              var n,
                i,
                o,
                r = this,
                s = !1,
                a = r.$slider.width(),
                l = window.innerWidth || c(window).width();
              if (
                ("window" === r.respondTo
                  ? (o = l)
                  : "slider" === r.respondTo
                  ? (o = a)
                  : "min" === r.respondTo && (o = Math.min(l, a)),
                r.options.responsive &&
                  r.options.responsive.length &&
                  null !== r.options.responsive)
              ) {
                for (n in ((i = null), r.breakpoints))
                  r.breakpoints.hasOwnProperty(n) &&
                    (!1 === r.originalSettings.mobileFirst
                      ? o < r.breakpoints[n] && (i = r.breakpoints[n])
                      : o > r.breakpoints[n] && (i = r.breakpoints[n]));
                null !== i
                  ? (null !== r.activeBreakpoint &&
                      i === r.activeBreakpoint &&
                      !t) ||
                    ((r.activeBreakpoint = i),
                    "unslick" === r.breakpointSettings[i]
                      ? r.unslick(i)
                      : ((r.options = c.extend(
                          {},
                          r.originalSettings,
                          r.breakpointSettings[i]
                        )),
                        !0 === e && (r.currentSlide = r.options.initialSlide),
                        r.refresh(e)),
                    (s = i))
                  : null !== r.activeBreakpoint &&
                    ((r.activeBreakpoint = null),
                    (r.options = r.originalSettings),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e),
                    (s = i)),
                  e || !1 === s || r.$slider.trigger("breakpoint", [r, s]);
              }
            }),
            (r.prototype.changeSlide = function (e, t) {
              var n,
                i,
                o = this,
                r = c(e.currentTarget);
              switch (
                (r.is("a") && e.preventDefault(),
                r.is("li") || (r = r.closest("li")),
                (n =
                  o.slideCount % o.options.slidesToScroll != 0
                    ? 0
                    : (o.slideCount - o.currentSlide) %
                      o.options.slidesToScroll),
                e.data.message)
              ) {
                case "previous":
                  (i =
                    0 == n
                      ? o.options.slidesToScroll
                      : o.options.slidesToShow - n),
                    o.slideCount > o.options.slidesToShow &&
                      o.slideHandler(o.currentSlide - i, !1, t);
                  break;
                case "next":
                  (i = 0 == n ? o.options.slidesToScroll : n),
                    o.slideCount > o.options.slidesToShow &&
                      o.slideHandler(o.currentSlide + i, !1, t);
                  break;
                case "index":
                  var s =
                    0 === e.data.index
                      ? 0
                      : e.data.index || r.index() * o.options.slidesToScroll;
                  o.slideHandler(o.checkNavigable(s), !1, t),
                    r.children().trigger("focus");
                  break;
                default:
                  return;
              }
            }),
            (r.prototype.checkNavigable = function (e) {
              var t, n;
              if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
                e = t[t.length - 1];
              else
                for (var i in t) {
                  if (e < t[i]) {
                    e = n;
                    break;
                  }
                  n = t[i];
                }
              return e;
            }),
            (r.prototype.cleanUpEvents = function () {
              var e = this;
              e.options.dots &&
                null !== e.$dots &&
                (c("li", e.$dots)
                  .off("click.slick", e.changeSlide)
                  .off("mouseenter.slick", c.proxy(e.interrupt, e, !0))
                  .off("mouseleave.slick", c.proxy(e.interrupt, e, !1)),
                !0 === e.options.accessibility &&
                  e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
                !0 === e.options.arrows &&
                  e.slideCount > e.options.slidesToShow &&
                  (e.$prevArrow &&
                    e.$prevArrow.off("click.slick", e.changeSlide),
                  e.$nextArrow &&
                    e.$nextArrow.off("click.slick", e.changeSlide),
                  !0 === e.options.accessibility &&
                    (e.$prevArrow &&
                      e.$prevArrow.off("keydown.slick", e.keyHandler),
                    e.$nextArrow &&
                      e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off(
                  "touchcancel.slick mouseleave.slick",
                  e.swipeHandler
                ),
                e.$list.off("click.slick", e.clickHandler),
                c(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                !0 === e.options.accessibility &&
                  e.$list.off("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                  c(e.$slideTrack)
                    .children()
                    .off("click.slick", e.selectHandler),
                c(window).off(
                  "orientationchange.slick.slick-" + e.instanceUid,
                  e.orientationChange
                ),
                c(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                c("[draggable!=true]", e.$slideTrack).off(
                  "dragstart",
                  e.preventDefault
                ),
                c(window).off(
                  "load.slick.slick-" + e.instanceUid,
                  e.setPosition
                );
            }),
            (r.prototype.cleanUpSlideEvents = function () {
              this.$list.off(
                "mouseenter.slick",
                c.proxy(this.interrupt, this, !0)
              ),
                this.$list.off(
                  "mouseleave.slick",
                  c.proxy(this.interrupt, this, !1)
                );
            }),
            (r.prototype.cleanUpRows = function () {
              var e;
              0 < this.options.rows &&
                ((e = this.$slides.children().children()).removeAttr("style"),
                this.$slider.empty().append(e));
            }),
            (r.prototype.clickHandler = function (e) {
              !1 === this.shouldClick &&
                (e.stopImmediatePropagation(),
                e.stopPropagation(),
                e.preventDefault());
            }),
            (r.prototype.destroy = function (e) {
              var t = this;
              t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                c(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                  t.$prevArrow.length &&
                  (t.$prevArrow
                    .removeClass("slick-disabled slick-arrow slick-hidden")
                    .removeAttr("aria-hidden aria-disabled tabindex")
                    .css("display", ""),
                  t.htmlExpr.test(t.options.prevArrow) &&
                    t.$prevArrow.remove()),
                t.$nextArrow &&
                  t.$nextArrow.length &&
                  (t.$nextArrow
                    .removeClass("slick-disabled slick-arrow slick-hidden")
                    .removeAttr("aria-hidden aria-disabled tabindex")
                    .css("display", ""),
                  t.htmlExpr.test(t.options.nextArrow) &&
                    t.$nextArrow.remove()),
                t.$slides &&
                  (t.$slides
                    .removeClass(
                      "slick-slide slick-active slick-center slick-visible slick-current"
                    )
                    .removeAttr("aria-hidden")
                    .removeAttr("data-slick-index")
                    .each(function () {
                      c(this).attr("style", c(this).data("originalStyling"));
                    }),
                  t.$slideTrack.children(this.options.slide).detach(),
                  t.$slideTrack.detach(),
                  t.$list.detach(),
                  t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
                e || t.$slider.trigger("destroy", [t]);
            }),
            (r.prototype.disableTransition = function (e) {
              var t = {};
              (t[this.transitionType] = ""),
                !1 === this.options.fade
                  ? this.$slideTrack.css(t)
                  : this.$slides.eq(e).css(t);
            }),
            (r.prototype.fadeSlide = function (e, t) {
              var n = this;
              !1 === n.cssTransitions
                ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
                  n.$slides
                    .eq(e)
                    .animate(
                      { opacity: 1 },
                      n.options.speed,
                      n.options.easing,
                      t
                    ))
                : (n.applyTransition(e),
                  n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
                  t &&
                    setTimeout(function () {
                      n.disableTransition(e), t.call();
                    }, n.options.speed));
            }),
            (r.prototype.fadeSlideOut = function (e) {
              !1 === this.cssTransitions
                ? this.$slides
                    .eq(e)
                    .animate(
                      { opacity: 0, zIndex: this.options.zIndex - 2 },
                      this.options.speed,
                      this.options.easing
                    )
                : (this.applyTransition(e),
                  this.$slides
                    .eq(e)
                    .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
            }),
            (r.prototype.filterSlides = r.prototype.slickFilter =
              function (e) {
                null !== e &&
                  ((this.$slidesCache = this.$slides),
                  this.unload(),
                  this.$slideTrack.children(this.options.slide).detach(),
                  this.$slidesCache.filter(e).appendTo(this.$slideTrack),
                  this.reinit());
              }),
            (r.prototype.focusHandler = function () {
              var n = this;
              n.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*", function (e) {
                  e.stopImmediatePropagation();
                  var t = c(this);
                  setTimeout(function () {
                    n.options.pauseOnFocus &&
                      ((n.focussed = t.is(":focus")), n.autoPlay());
                  }, 0);
                });
            }),
            (r.prototype.getCurrent = r.prototype.slickCurrentSlide =
              function () {
                return this.currentSlide;
              }),
            (r.prototype.getDotCount = function () {
              var e = this,
                t = 0,
                n = 0,
                i = 0;
              if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++i;
                else
                  for (; t < e.slideCount; )
                    ++i,
                      (t = n + e.options.slidesToScroll),
                      (n +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                          ? e.options.slidesToScroll
                          : e.options.slidesToShow);
              else if (!0 === e.options.centerMode) i = e.slideCount;
              else if (e.options.asNavFor)
                for (; t < e.slideCount; )
                  ++i,
                    (t = n + e.options.slidesToScroll),
                    (n +=
                      e.options.slidesToScroll <= e.options.slidesToShow
                        ? e.options.slidesToScroll
                        : e.options.slidesToShow);
              else
                i =
                  1 +
                  Math.ceil(
                    (e.slideCount - e.options.slidesToShow) /
                      e.options.slidesToScroll
                  );
              return i - 1;
            }),
            (r.prototype.getLeft = function (e) {
              var t,
                n,
                i,
                o,
                r = this,
                s = 0;
              return (
                (r.slideOffset = 0),
                (n = r.$slides.first().outerHeight(!0)),
                !0 === r.options.infinite
                  ? (r.slideCount > r.options.slidesToShow &&
                      ((r.slideOffset =
                        r.slideWidth * r.options.slidesToShow * -1),
                      (o = -1),
                      !0 === r.options.vertical &&
                        !0 === r.options.centerMode &&
                        (2 === r.options.slidesToShow
                          ? (o = -1.5)
                          : 1 === r.options.slidesToShow && (o = -2)),
                      (s = n * r.options.slidesToShow * o)),
                    r.slideCount % r.options.slidesToScroll != 0 &&
                      e + r.options.slidesToScroll > r.slideCount &&
                      r.slideCount > r.options.slidesToShow &&
                      (s =
                        e > r.slideCount
                          ? ((r.slideOffset =
                              (r.options.slidesToShow - (e - r.slideCount)) *
                              r.slideWidth *
                              -1),
                            (r.options.slidesToShow - (e - r.slideCount)) *
                              n *
                              -1)
                          : ((r.slideOffset =
                              (r.slideCount % r.options.slidesToScroll) *
                              r.slideWidth *
                              -1),
                            (r.slideCount % r.options.slidesToScroll) *
                              n *
                              -1)))
                  : e + r.options.slidesToShow > r.slideCount &&
                    ((r.slideOffset =
                      (e + r.options.slidesToShow - r.slideCount) *
                      r.slideWidth),
                    (s = (e + r.options.slidesToShow - r.slideCount) * n)),
                r.slideCount <= r.options.slidesToShow &&
                  (s = r.slideOffset = 0),
                !0 === r.options.centerMode &&
                r.slideCount <= r.options.slidesToShow
                  ? (r.slideOffset =
                      (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 -
                      (r.slideWidth * r.slideCount) / 2)
                  : !0 === r.options.centerMode && !0 === r.options.infinite
                  ? (r.slideOffset +=
                      r.slideWidth * Math.floor(r.options.slidesToShow / 2) -
                      r.slideWidth)
                  : !0 === r.options.centerMode &&
                    ((r.slideOffset = 0),
                    (r.slideOffset +=
                      r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
                (t =
                  !1 === r.options.vertical
                    ? e * r.slideWidth * -1 + r.slideOffset
                    : e * n * -1 + s),
                !0 === r.options.variableWidth &&
                  ((i =
                    r.slideCount <= r.options.slidesToShow ||
                    !1 === r.options.infinite
                      ? r.$slideTrack.children(".slick-slide").eq(e)
                      : r.$slideTrack
                          .children(".slick-slide")
                          .eq(e + r.options.slidesToShow)),
                  (t =
                    !0 === r.options.rtl
                      ? i[0]
                        ? -1 *
                          (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                        : 0
                      : i[0]
                      ? -1 * i[0].offsetLeft
                      : 0),
                  !0 === r.options.centerMode &&
                    ((i =
                      r.slideCount <= r.options.slidesToShow ||
                      !1 === r.options.infinite
                        ? r.$slideTrack.children(".slick-slide").eq(e)
                        : r.$slideTrack
                            .children(".slick-slide")
                            .eq(e + r.options.slidesToShow + 1)),
                    (t =
                      !0 === r.options.rtl
                        ? i[0]
                          ? -1 *
                            (r.$slideTrack.width() -
                              i[0].offsetLeft -
                              i.width())
                          : 0
                        : i[0]
                        ? -1 * i[0].offsetLeft
                        : 0),
                    (t += (r.$list.width() - i.outerWidth()) / 2))),
                t
              );
            }),
            (r.prototype.getOption = r.prototype.slickGetOption =
              function (e) {
                return this.options[e];
              }),
            (r.prototype.getNavigableIndexes = function () {
              var e,
                t = this,
                n = 0,
                i = 0,
                o = [];
              for (
                e =
                  !1 === t.options.infinite
                    ? t.slideCount
                    : ((n = -1 * t.options.slidesToScroll),
                      (i = -1 * t.options.slidesToScroll),
                      2 * t.slideCount);
                n < e;

              )
                o.push(n),
                  (n = i + t.options.slidesToScroll),
                  (i +=
                    t.options.slidesToScroll <= t.options.slidesToShow
                      ? t.options.slidesToScroll
                      : t.options.slidesToShow);
              return o;
            }),
            (r.prototype.getSlick = function () {
              return this;
            }),
            (r.prototype.getSlideCount = function () {
              var n,
                i,
                o = this;
              return (
                (i =
                  !0 === o.options.centerMode
                    ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                    : 0),
                !0 === o.options.swipeToSlide
                  ? (o.$slideTrack.find(".slick-slide").each(function (e, t) {
                      if (
                        t.offsetLeft - i + c(t).outerWidth() / 2 >
                        -1 * o.swipeLeft
                      )
                        return (n = t), !1;
                    }),
                    Math.abs(c(n).attr("data-slick-index") - o.currentSlide) ||
                      1)
                  : o.options.slidesToScroll
              );
            }),
            (r.prototype.goTo = r.prototype.slickGoTo =
              function (e, t) {
                this.changeSlide(
                  { data: { message: "index", index: parseInt(e) } },
                  t
                );
              }),
            (r.prototype.init = function (e) {
              var t = this;
              c(t.$slider).hasClass("slick-initialized") ||
                (c(t.$slider).addClass("slick-initialized"),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
                e && t.$slider.trigger("init", [t]),
                !0 === t.options.accessibility && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
            }),
            (r.prototype.initADA = function () {
              var i = this,
                n = Math.ceil(i.slideCount / i.options.slidesToShow),
                o = i.getNavigableIndexes().filter(function (e) {
                  return 0 <= e && e < i.slideCount;
                });
              i.$slides
                .add(i.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                null !== i.$dots &&
                  (i.$slides
                    .not(i.$slideTrack.find(".slick-cloned"))
                    .each(function (e) {
                      var t = o.indexOf(e);
                      if (
                        (c(this).attr({
                          role: "tabpanel",
                          id: "slick-slide" + i.instanceUid + e,
                          tabindex: -1,
                        }),
                        -1 !== t)
                      ) {
                        var n = "slick-slide-control" + i.instanceUid + t;
                        c("#" + n).length &&
                          c(this).attr({ "aria-describedby": n });
                      }
                    }),
                  i.$dots
                    .attr("role", "tablist")
                    .find("li")
                    .each(function (e) {
                      var t = o[e];
                      c(this).attr({ role: "presentation" }),
                        c(this)
                          .find("button")
                          .first()
                          .attr({
                            role: "tab",
                            id: "slick-slide-control" + i.instanceUid + e,
                            "aria-controls": "slick-slide" + i.instanceUid + t,
                            "aria-label": e + 1 + " of " + n,
                            "aria-selected": null,
                            tabindex: "-1",
                          });
                    })
                    .eq(i.currentSlide)
                    .find("button")
                    .attr({ "aria-selected": "true", tabindex: "0" })
                    .end());
              for (
                var e = i.currentSlide, t = e + i.options.slidesToShow;
                e < t;
                e++
              )
                i.options.focusOnChange
                  ? i.$slides.eq(e).attr({ tabindex: "0" })
                  : i.$slides.eq(e).removeAttr("tabindex");
              i.activateADA();
            }),
            (r.prototype.initArrowEvents = function () {
              var e = this;
              !0 === e.options.arrows &&
                e.slideCount > e.options.slidesToShow &&
                (e.$prevArrow
                  .off("click.slick")
                  .on("click.slick", { message: "previous" }, e.changeSlide),
                e.$nextArrow
                  .off("click.slick")
                  .on("click.slick", { message: "next" }, e.changeSlide),
                !0 === e.options.accessibility &&
                  (e.$prevArrow.on("keydown.slick", e.keyHandler),
                  e.$nextArrow.on("keydown.slick", e.keyHandler)));
            }),
            (r.prototype.initDotEvents = function () {
              var e = this;
              !0 === e.options.dots &&
                e.slideCount > e.options.slidesToShow &&
                (c("li", e.$dots).on(
                  "click.slick",
                  { message: "index" },
                  e.changeSlide
                ),
                !0 === e.options.accessibility &&
                  e.$dots.on("keydown.slick", e.keyHandler)),
                !0 === e.options.dots &&
                  !0 === e.options.pauseOnDotsHover &&
                  e.slideCount > e.options.slidesToShow &&
                  c("li", e.$dots)
                    .on("mouseenter.slick", c.proxy(e.interrupt, e, !0))
                    .on("mouseleave.slick", c.proxy(e.interrupt, e, !1));
            }),
            (r.prototype.initSlideEvents = function () {
              this.options.pauseOnHover &&
                (this.$list.on(
                  "mouseenter.slick",
                  c.proxy(this.interrupt, this, !0)
                ),
                this.$list.on(
                  "mouseleave.slick",
                  c.proxy(this.interrupt, this, !1)
                ));
            }),
            (r.prototype.initializeEvents = function () {
              var e = this;
              e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                  "touchstart.slick mousedown.slick",
                  { action: "start" },
                  e.swipeHandler
                ),
                e.$list.on(
                  "touchmove.slick mousemove.slick",
                  { action: "move" },
                  e.swipeHandler
                ),
                e.$list.on(
                  "touchend.slick mouseup.slick",
                  { action: "end" },
                  e.swipeHandler
                ),
                e.$list.on(
                  "touchcancel.slick mouseleave.slick",
                  { action: "end" },
                  e.swipeHandler
                ),
                e.$list.on("click.slick", e.clickHandler),
                c(document).on(e.visibilityChange, c.proxy(e.visibility, e)),
                !0 === e.options.accessibility &&
                  e.$list.on("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                  c(e.$slideTrack)
                    .children()
                    .on("click.slick", e.selectHandler),
                c(window).on(
                  "orientationchange.slick.slick-" + e.instanceUid,
                  c.proxy(e.orientationChange, e)
                ),
                c(window).on(
                  "resize.slick.slick-" + e.instanceUid,
                  c.proxy(e.resize, e)
                ),
                c("[draggable!=true]", e.$slideTrack).on(
                  "dragstart",
                  e.preventDefault
                ),
                c(window).on(
                  "load.slick.slick-" + e.instanceUid,
                  e.setPosition
                ),
                c(e.setPosition);
            }),
            (r.prototype.initUI = function () {
              !0 === this.options.arrows &&
                this.slideCount > this.options.slidesToShow &&
                (this.$prevArrow.show(), this.$nextArrow.show()),
                !0 === this.options.dots &&
                  this.slideCount > this.options.slidesToShow &&
                  this.$dots.show();
            }),
            (r.prototype.keyHandler = function (e) {
              e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === e.keyCode && !0 === this.options.accessibility
                  ? this.changeSlide({
                      data: {
                        message: !0 === this.options.rtl ? "next" : "previous",
                      },
                    })
                  : 39 === e.keyCode &&
                    !0 === this.options.accessibility &&
                    this.changeSlide({
                      data: {
                        message: !0 === this.options.rtl ? "previous" : "next",
                      },
                    }));
            }),
            (r.prototype.lazyLoad = function () {
              var e,
                t,
                n,
                r = this;
              function i(e) {
                c("img[data-lazy]", e).each(function () {
                  var e = c(this),
                    t = c(this).attr("data-lazy"),
                    n = c(this).attr("data-srcset"),
                    i =
                      c(this).attr("data-sizes") ||
                      r.$slider.attr("data-sizes"),
                    o = document.createElement("img");
                  (o.onload = function () {
                    e.animate({ opacity: 0 }, 100, function () {
                      n && (e.attr("srcset", n), i && e.attr("sizes", i)),
                        e
                          .attr("src", t)
                          .animate({ opacity: 1 }, 200, function () {
                            e.removeAttr(
                              "data-lazy data-srcset data-sizes"
                            ).removeClass("slick-loading");
                          }),
                        r.$slider.trigger("lazyLoaded", [r, e, t]);
                    });
                  }),
                    (o.onerror = function () {
                      e
                        .removeAttr("data-lazy")
                        .removeClass("slick-loading")
                        .addClass("slick-lazyload-error"),
                        r.$slider.trigger("lazyLoadError", [r, e, t]);
                    }),
                    (o.src = t);
                });
              }
              if (
                (!0 === r.options.centerMode
                  ? (n =
                      !0 === r.options.infinite
                        ? (t =
                            r.currentSlide + (r.options.slidesToShow / 2 + 1)) +
                          r.options.slidesToShow +
                          2
                        : ((t = Math.max(
                            0,
                            r.currentSlide - (r.options.slidesToShow / 2 + 1)
                          )),
                          r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
                  : ((t = r.options.infinite
                      ? r.options.slidesToShow + r.currentSlide
                      : r.currentSlide),
                    (n = Math.ceil(t + r.options.slidesToShow)),
                    !0 === r.options.fade &&
                      (0 < t && t--, n <= r.slideCount && n++)),
                (e = r.$slider.find(".slick-slide").slice(t, n)),
                "anticipated" === r.options.lazyLoad)
              )
                for (
                  var o = t - 1,
                    s = n,
                    a = r.$slider.find(".slick-slide"),
                    l = 0;
                  l < r.options.slidesToScroll;
                  l++
                )
                  o < 0 && (o = r.slideCount - 1),
                    (e = (e = e.add(a.eq(o))).add(a.eq(s))),
                    o--,
                    s++;
              i(e),
                r.slideCount <= r.options.slidesToShow
                  ? i(r.$slider.find(".slick-slide"))
                  : r.currentSlide >= r.slideCount - r.options.slidesToShow
                  ? i(
                      r.$slider
                        .find(".slick-cloned")
                        .slice(0, r.options.slidesToShow)
                    )
                  : 0 === r.currentSlide &&
                    i(
                      r.$slider
                        .find(".slick-cloned")
                        .slice(-1 * r.options.slidesToShow)
                    );
            }),
            (r.prototype.loadSlider = function () {
              this.setPosition(),
                this.$slideTrack.css({ opacity: 1 }),
                this.$slider.removeClass("slick-loading"),
                this.initUI(),
                "progressive" === this.options.lazyLoad &&
                  this.progressiveLazyLoad();
            }),
            (r.prototype.next = r.prototype.slickNext =
              function () {
                this.changeSlide({ data: { message: "next" } });
              }),
            (r.prototype.orientationChange = function () {
              this.checkResponsive(), this.setPosition();
            }),
            (r.prototype.pause = r.prototype.slickPause =
              function () {
                this.autoPlayClear(), (this.paused = !0);
              }),
            (r.prototype.play = r.prototype.slickPlay =
              function () {
                this.autoPlay(),
                  (this.options.autoplay = !0),
                  (this.paused = !1),
                  (this.focussed = !1),
                  (this.interrupted = !1);
              }),
            (r.prototype.postSlide = function (e) {
              var t = this;
              t.unslicked ||
                (t.$slider.trigger("afterChange", [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                !0 === t.options.accessibility &&
                  (t.initADA(),
                  t.options.focusOnChange &&
                    c(t.$slides.get(t.currentSlide))
                      .attr("tabindex", 0)
                      .focus()));
            }),
            (r.prototype.prev = r.prototype.slickPrev =
              function () {
                this.changeSlide({ data: { message: "previous" } });
              }),
            (r.prototype.preventDefault = function (e) {
              e.preventDefault();
            }),
            (r.prototype.progressiveLazyLoad = function (e) {
              e = e || 1;
              var t,
                n,
                i,
                o,
                r,
                s = this,
                a = c("img[data-lazy]", s.$slider);
              a.length
                ? ((t = a.first()),
                  (n = t.attr("data-lazy")),
                  (i = t.attr("data-srcset")),
                  (o = t.attr("data-sizes") || s.$slider.attr("data-sizes")),
                  ((r = document.createElement("img")).onload = function () {
                    i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                      t
                        .attr("src", n)
                        .removeAttr("data-lazy data-srcset data-sizes")
                        .removeClass("slick-loading"),
                      !0 === s.options.adaptiveHeight && s.setPosition(),
                      s.$slider.trigger("lazyLoaded", [s, t, n]),
                      s.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                    e < 3
                      ? setTimeout(function () {
                          s.progressiveLazyLoad(e + 1);
                        }, 500)
                      : (t
                          .removeAttr("data-lazy")
                          .removeClass("slick-loading")
                          .addClass("slick-lazyload-error"),
                        s.$slider.trigger("lazyLoadError", [s, t, n]),
                        s.progressiveLazyLoad());
                  }),
                  (r.src = n))
                : s.$slider.trigger("allImagesLoaded", [s]);
            }),
            (r.prototype.refresh = function (e) {
              var t,
                n,
                i = this;
              (n = i.slideCount - i.options.slidesToShow),
                !i.options.infinite &&
                  i.currentSlide > n &&
                  (i.currentSlide = n),
                i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
                (t = i.currentSlide),
                i.destroy(!0),
                c.extend(i, i.initials, { currentSlide: t }),
                i.init(),
                e ||
                  i.changeSlide({ data: { message: "index", index: t } }, !1);
            }),
            (r.prototype.registerBreakpoints = function () {
              var e,
                t,
                n,
                i = this,
                o = i.options.responsive || null;
              if ("array" === c.type(o) && o.length) {
                for (e in ((i.respondTo = i.options.respondTo || "window"), o))
                  if (((n = i.breakpoints.length - 1), o.hasOwnProperty(e))) {
                    for (t = o[e].breakpoint; 0 <= n; )
                      i.breakpoints[n] &&
                        i.breakpoints[n] === t &&
                        i.breakpoints.splice(n, 1),
                        n--;
                    i.breakpoints.push(t),
                      (i.breakpointSettings[t] = o[e].settings);
                  }
                i.breakpoints.sort(function (e, t) {
                  return i.options.mobileFirst ? e - t : t - e;
                });
              }
            }),
            (r.prototype.reinit = function () {
              var e = this;
              (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount &&
                  0 !== e.currentSlide &&
                  (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                !0 === e.options.focusOnSelect &&
                  c(e.$slideTrack)
                    .children()
                    .on("click.slick", e.selectHandler),
                e.setSlideClasses(
                  "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
            }),
            (r.prototype.resize = function () {
              var e = this;
              c(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                  (e.windowWidth = c(window).width()),
                    e.checkResponsive(),
                    e.unslicked || e.setPosition();
                }, 50)));
            }),
            (r.prototype.removeSlide = r.prototype.slickRemove =
              function (e, t, n) {
                var i = this;
                if (
                  ((e =
                    "boolean" == typeof e
                      ? !0 === (t = e)
                        ? 0
                        : i.slideCount - 1
                      : !0 === t
                      ? --e
                      : e),
                  i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
                )
                  return !1;
                i.unload(),
                  !0 === n
                    ? i.$slideTrack.children().remove()
                    : i.$slideTrack.children(this.options.slide).eq(e).remove(),
                  (i.$slides = i.$slideTrack.children(this.options.slide)),
                  i.$slideTrack.children(this.options.slide).detach(),
                  i.$slideTrack.append(i.$slides),
                  (i.$slidesCache = i.$slides),
                  i.reinit();
              }),
            (r.prototype.setCSS = function (e) {
              var t,
                n,
                i = this,
                o = {};
              !0 === i.options.rtl && (e = -e),
                (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                (o[i.positionProp] = e),
                !1 === i.transformsEnabled ||
                  (!(o = {}) === i.cssTransitions
                    ? (o[i.animType] = "translate(" + t + ", " + n + ")")
                    : (o[i.animType] =
                        "translate3d(" + t + ", " + n + ", 0px)")),
                i.$slideTrack.css(o);
            }),
            (r.prototype.setDimensions = function () {
              var e = this;
              !1 === e.options.vertical
                ? !0 === e.options.centerMode &&
                  e.$list.css({ padding: "0px " + e.options.centerPadding })
                : (e.$list.height(
                    e.$slides.first().outerHeight(!0) * e.options.slidesToShow
                  ),
                  !0 === e.options.centerMode &&
                    e.$list.css({ padding: e.options.centerPadding + " 0px" })),
                (e.listWidth = e.$list.width()),
                (e.listHeight = e.$list.height()),
                !1 === e.options.vertical && !1 === e.options.variableWidth
                  ? ((e.slideWidth = Math.ceil(
                      e.listWidth / e.options.slidesToShow
                    )),
                    e.$slideTrack.width(
                      Math.ceil(
                        e.slideWidth *
                          e.$slideTrack.children(".slick-slide").length
                      )
                    ))
                  : !0 === e.options.variableWidth
                  ? e.$slideTrack.width(5e3 * e.slideCount)
                  : ((e.slideWidth = Math.ceil(e.listWidth)),
                    e.$slideTrack.height(
                      Math.ceil(
                        e.$slides.first().outerHeight(!0) *
                          e.$slideTrack.children(".slick-slide").length
                      )
                    ));
              var t =
                e.$slides.first().outerWidth(!0) - e.$slides.first().width();
              !1 === e.options.variableWidth &&
                e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
            }),
            (r.prototype.setFade = function () {
              var n,
                i = this;
              i.$slides.each(function (e, t) {
                (n = i.slideWidth * e * -1),
                  !0 === i.options.rtl
                    ? c(t).css({
                        position: "relative",
                        right: n,
                        top: 0,
                        zIndex: i.options.zIndex - 2,
                        opacity: 0,
                      })
                    : c(t).css({
                        position: "relative",
                        left: n,
                        top: 0,
                        zIndex: i.options.zIndex - 2,
                        opacity: 0,
                      });
              }),
                i.$slides
                  .eq(i.currentSlide)
                  .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
            }),
            (r.prototype.setHeight = function () {
              if (
                1 === this.options.slidesToShow &&
                !0 === this.options.adaptiveHeight &&
                !1 === this.options.vertical
              ) {
                var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.css("height", e);
              }
            }),
            (r.prototype.setOption = r.prototype.slickSetOption =
              function () {
                var e,
                  t,
                  n,
                  i,
                  o,
                  r = this,
                  s = !1;
                if (
                  ("object" === c.type(arguments[0])
                    ? ((n = arguments[0]), (s = arguments[1]), (o = "multiple"))
                    : "string" === c.type(arguments[0]) &&
                      ((i = arguments[1]),
                      (s = arguments[2]),
                      "responsive" === (n = arguments[0]) &&
                      "array" === c.type(arguments[1])
                        ? (o = "responsive")
                        : void 0 !== arguments[1] && (o = "single")),
                  "single" === o)
                )
                  r.options[n] = i;
                else if ("multiple" === o)
                  c.each(n, function (e, t) {
                    r.options[e] = t;
                  });
                else if ("responsive" === o)
                  for (t in i)
                    if ("array" !== c.type(r.options.responsive))
                      r.options.responsive = [i[t]];
                    else {
                      for (e = r.options.responsive.length - 1; 0 <= e; )
                        r.options.responsive[e].breakpoint ===
                          i[t].breakpoint && r.options.responsive.splice(e, 1),
                          e--;
                      r.options.responsive.push(i[t]);
                    }
                s && (r.unload(), r.reinit());
              }),
            (r.prototype.setPosition = function () {
              this.setDimensions(),
                this.setHeight(),
                !1 === this.options.fade
                  ? this.setCSS(this.getLeft(this.currentSlide))
                  : this.setFade(),
                this.$slider.trigger("setPosition", [this]);
            }),
            (r.prototype.setProps = function () {
              var e = this,
                t = document.body.style;
              (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                "top" === e.positionProp
                  ? e.$slider.addClass("slick-vertical")
                  : e.$slider.removeClass("slick-vertical"),
                (void 0 === t.WebkitTransition &&
                  void 0 === t.MozTransition &&
                  void 0 === t.msTransition) ||
                  (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                e.options.fade &&
                  ("number" == typeof e.options.zIndex
                    ? e.options.zIndex < 3 && (e.options.zIndex = 3)
                    : (e.options.zIndex = e.defaults.zIndex)),
                void 0 !== t.OTransform &&
                  ((e.animType = "OTransform"),
                  (e.transformType = "-o-transform"),
                  (e.transitionType = "OTransition"),
                  void 0 === t.perspectiveProperty &&
                    void 0 === t.webkitPerspective &&
                    (e.animType = !1)),
                void 0 !== t.MozTransform &&
                  ((e.animType = "MozTransform"),
                  (e.transformType = "-moz-transform"),
                  (e.transitionType = "MozTransition"),
                  void 0 === t.perspectiveProperty &&
                    void 0 === t.MozPerspective &&
                    (e.animType = !1)),
                void 0 !== t.webkitTransform &&
                  ((e.animType = "webkitTransform"),
                  (e.transformType = "-webkit-transform"),
                  (e.transitionType = "webkitTransition"),
                  void 0 === t.perspectiveProperty &&
                    void 0 === t.webkitPerspective &&
                    (e.animType = !1)),
                void 0 !== t.msTransform &&
                  ((e.animType = "msTransform"),
                  (e.transformType = "-ms-transform"),
                  (e.transitionType = "msTransition"),
                  void 0 === t.msTransform && (e.animType = !1)),
                void 0 !== t.transform &&
                  !1 !== e.animType &&
                  ((e.animType = "transform"),
                  (e.transformType = "transform"),
                  (e.transitionType = "transition")),
                (e.transformsEnabled =
                  e.options.useTransform &&
                  null !== e.animType &&
                  !1 !== e.animType);
            }),
            (r.prototype.setSlideClasses = function (e) {
              var t,
                n,
                i,
                o,
                r = this;
              if (
                ((n = r.$slider
                  .find(".slick-slide")
                  .removeClass("slick-active slick-center slick-current")
                  .attr("aria-hidden", "true")),
                r.$slides.eq(e).addClass("slick-current"),
                !0 === r.options.centerMode)
              ) {
                var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                (t = Math.floor(r.options.slidesToShow / 2)),
                  !0 === r.options.infinite &&
                    (t <= e && e <= r.slideCount - 1 - t
                      ? r.$slides
                          .slice(e - t + s, e + t + 1)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : ((i = r.options.slidesToShow + e),
                        n
                          .slice(i - t + 1 + s, i + t + 2)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")),
                    0 === e
                      ? n
                          .eq(n.length - 1 - r.options.slidesToShow)
                          .addClass("slick-center")
                      : e === r.slideCount - 1 &&
                        n.eq(r.options.slidesToShow).addClass("slick-center")),
                  r.$slides.eq(e).addClass("slick-center");
              } else
                0 <= e && e <= r.slideCount - r.options.slidesToShow
                  ? r.$slides
                      .slice(e, e + r.options.slidesToShow)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : n.length <= r.options.slidesToShow
                  ? n.addClass("slick-active").attr("aria-hidden", "false")
                  : ((o = r.slideCount % r.options.slidesToShow),
                    (i =
                      !0 === r.options.infinite
                        ? r.options.slidesToShow + e
                        : e),
                    r.options.slidesToShow == r.options.slidesToScroll &&
                    r.slideCount - e < r.options.slidesToShow
                      ? n
                          .slice(i - (r.options.slidesToShow - o), i + o)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : n
                          .slice(i, i + r.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false"));
              ("ondemand" !== r.options.lazyLoad &&
                "anticipated" !== r.options.lazyLoad) ||
                r.lazyLoad();
            }),
            (r.prototype.setupInfinite = function () {
              var e,
                t,
                n,
                i = this;
              if (
                (!0 === i.options.fade && (i.options.centerMode = !1),
                !0 === i.options.infinite &&
                  !1 === i.options.fade &&
                  ((t = null), i.slideCount > i.options.slidesToShow))
              ) {
                for (
                  n =
                    !0 === i.options.centerMode
                      ? i.options.slidesToShow + 1
                      : i.options.slidesToShow,
                    e = i.slideCount;
                  e > i.slideCount - n;
                  --e
                )
                  (t = e - 1),
                    c(i.$slides[t])
                      .clone(!0)
                      .attr("id", "")
                      .attr("data-slick-index", t - i.slideCount)
                      .prependTo(i.$slideTrack)
                      .addClass("slick-cloned");
                for (e = 0; e < n + i.slideCount; e += 1)
                  (t = e),
                    c(i.$slides[t])
                      .clone(!0)
                      .attr("id", "")
                      .attr("data-slick-index", t + i.slideCount)
                      .appendTo(i.$slideTrack)
                      .addClass("slick-cloned");
                i.$slideTrack
                  .find(".slick-cloned")
                  .find("[id]")
                  .each(function () {
                    c(this).attr("id", "");
                  });
              }
            }),
            (r.prototype.interrupt = function (e) {
              e || this.autoPlay(), (this.interrupted = e);
            }),
            (r.prototype.selectHandler = function (e) {
              var t = c(e.target).is(".slick-slide")
                  ? c(e.target)
                  : c(e.target).parents(".slick-slide"),
                n = parseInt(t.attr("data-slick-index"));
              (n = n || 0),
                this.slideCount <= this.options.slidesToShow
                  ? this.slideHandler(n, !1, !0)
                  : this.slideHandler(n);
            }),
            (r.prototype.slideHandler = function (e, t, n) {
              var i,
                o,
                r,
                s,
                a,
                l,
                c = this;
              if (
                ((t = t || !1),
                !(
                  (!0 === c.animating && !0 === c.options.waitForAnimate) ||
                  (!0 === c.options.fade && c.currentSlide === e)
                ))
              )
                if (
                  (!1 === t && c.asNavFor(e),
                  (i = e),
                  (a = c.getLeft(i)),
                  (s = c.getLeft(c.currentSlide)),
                  (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
                  !1 === c.options.infinite &&
                    !1 === c.options.centerMode &&
                    (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                )
                  !1 === c.options.fade &&
                    ((i = c.currentSlide),
                    !0 !== n && c.slideCount > c.options.slidesToShow
                      ? c.animateSlide(s, function () {
                          c.postSlide(i);
                        })
                      : c.postSlide(i));
                else if (
                  !1 === c.options.infinite &&
                  !0 === c.options.centerMode &&
                  (e < 0 || e > c.slideCount - c.options.slidesToScroll)
                )
                  !1 === c.options.fade &&
                    ((i = c.currentSlide),
                    !0 !== n && c.slideCount > c.options.slidesToShow
                      ? c.animateSlide(s, function () {
                          c.postSlide(i);
                        })
                      : c.postSlide(i));
                else {
                  if (
                    (c.options.autoplay && clearInterval(c.autoPlayTimer),
                    (o =
                      i < 0
                        ? c.slideCount % c.options.slidesToScroll != 0
                          ? c.slideCount -
                            (c.slideCount % c.options.slidesToScroll)
                          : c.slideCount + i
                        : i >= c.slideCount
                        ? c.slideCount % c.options.slidesToScroll != 0
                          ? 0
                          : i - c.slideCount
                        : i),
                    (c.animating = !0),
                    c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                    (r = c.currentSlide),
                    (c.currentSlide = o),
                    c.setSlideClasses(c.currentSlide),
                    c.options.asNavFor &&
                      (l = (l = c.getNavTarget()).slick("getSlick"))
                        .slideCount <= l.options.slidesToShow &&
                      l.setSlideClasses(c.currentSlide),
                    c.updateDots(),
                    c.updateArrows(),
                    !0 === c.options.fade)
                  )
                    return (
                      !0 !== n
                        ? (c.fadeSlideOut(r),
                          c.fadeSlide(o, function () {
                            c.postSlide(o);
                          }))
                        : c.postSlide(o),
                      void c.animateHeight()
                    );
                  !0 !== n && c.slideCount > c.options.slidesToShow
                    ? c.animateSlide(a, function () {
                        c.postSlide(o);
                      })
                    : c.postSlide(o);
                }
            }),
            (r.prototype.startLoad = function () {
              var e = this;
              !0 === e.options.arrows &&
                e.slideCount > e.options.slidesToShow &&
                (e.$prevArrow.hide(), e.$nextArrow.hide()),
                !0 === e.options.dots &&
                  e.slideCount > e.options.slidesToShow &&
                  e.$dots.hide(),
                e.$slider.addClass("slick-loading");
            }),
            (r.prototype.swipeDirection = function () {
              var e, t, n, i;
              return (
                (e = this.touchObject.startX - this.touchObject.curX),
                (t = this.touchObject.startY - this.touchObject.curY),
                (n = Math.atan2(t, e)),
                (i = Math.round((180 * n) / Math.PI)) < 0 &&
                  (i = 360 - Math.abs(i)),
                (i <= 45 && 0 <= i) || (i <= 360 && 315 <= i)
                  ? !1 === this.options.rtl
                    ? "left"
                    : "right"
                  : 135 <= i && i <= 225
                  ? !1 === this.options.rtl
                    ? "right"
                    : "left"
                  : !0 === this.options.verticalSwiping
                  ? 35 <= i && i <= 135
                    ? "down"
                    : "up"
                  : "vertical"
              );
            }),
            (r.prototype.swipeEnd = function (e) {
              var t,
                n,
                i = this;
              if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
                return (i.scrolling = !1);
              if (
                ((i.interrupted = !1),
                (i.shouldClick = !(10 < i.touchObject.swipeLength)),
                void 0 === i.touchObject.curX)
              )
                return !1;
              if (
                (!0 === i.touchObject.edgeHit &&
                  i.$slider.trigger("edge", [i, i.swipeDirection()]),
                i.touchObject.swipeLength >= i.touchObject.minSwipe)
              ) {
                switch ((n = i.swipeDirection())) {
                  case "left":
                  case "down":
                    (t = i.options.swipeToSlide
                      ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                      : i.currentSlide + i.getSlideCount()),
                      (i.currentDirection = 0);
                    break;
                  case "right":
                  case "up":
                    (t = i.options.swipeToSlide
                      ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                      : i.currentSlide - i.getSlideCount()),
                      (i.currentDirection = 1);
                }
                "vertical" != n &&
                  (i.slideHandler(t),
                  (i.touchObject = {}),
                  i.$slider.trigger("swipe", [i, n]));
              } else
                i.touchObject.startX !== i.touchObject.curX &&
                  (i.slideHandler(i.currentSlide), (i.touchObject = {}));
            }),
            (r.prototype.swipeHandler = function (e) {
              var t = this;
              if (
                !(
                  !1 === t.options.swipe ||
                  ("ontouchend" in document && !1 === t.options.swipe) ||
                  (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
                )
              )
                switch (
                  ((t.touchObject.fingerCount =
                    e.originalEvent && void 0 !== e.originalEvent.touches
                      ? e.originalEvent.touches.length
                      : 1),
                  (t.touchObject.minSwipe =
                    t.listWidth / t.options.touchThreshold),
                  !0 === t.options.verticalSwiping &&
                    (t.touchObject.minSwipe =
                      t.listHeight / t.options.touchThreshold),
                  e.data.action)
                ) {
                  case "start":
                    t.swipeStart(e);
                    break;
                  case "move":
                    t.swipeMove(e);
                    break;
                  case "end":
                    t.swipeEnd(e);
                }
            }),
            (r.prototype.swipeMove = function (e) {
              var t,
                n,
                i,
                o,
                r,
                s,
                a = this;
              return (
                (r =
                  void 0 !== e.originalEvent ? e.originalEvent.touches : null),
                !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
                  ((t = a.getLeft(a.currentSlide)),
                  (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
                  (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
                  (a.touchObject.swipeLength = Math.round(
                    Math.sqrt(
                      Math.pow(a.touchObject.curX - a.touchObject.startX, 2)
                    )
                  )),
                  (s = Math.round(
                    Math.sqrt(
                      Math.pow(a.touchObject.curY - a.touchObject.startY, 2)
                    )
                  )),
                  !a.options.verticalSwiping && !a.swiping && 4 < s
                    ? !(a.scrolling = !0)
                    : (!0 === a.options.verticalSwiping &&
                        (a.touchObject.swipeLength = s),
                      (n = a.swipeDirection()),
                      void 0 !== e.originalEvent &&
                        4 < a.touchObject.swipeLength &&
                        ((a.swiping = !0), e.preventDefault()),
                      (o =
                        (!1 === a.options.rtl ? 1 : -1) *
                        (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                      !0 === a.options.verticalSwiping &&
                        (o =
                          a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                      (i = a.touchObject.swipeLength),
                      (a.touchObject.edgeHit = !1) === a.options.infinite &&
                        ((0 === a.currentSlide && "right" === n) ||
                          (a.currentSlide >= a.getDotCount() &&
                            "left" === n)) &&
                        ((i =
                          a.touchObject.swipeLength * a.options.edgeFriction),
                        (a.touchObject.edgeHit = !0)),
                      !1 === a.options.vertical
                        ? (a.swipeLeft = t + i * o)
                        : (a.swipeLeft =
                            t + i * (a.$list.height() / a.listWidth) * o),
                      !0 === a.options.verticalSwiping &&
                        (a.swipeLeft = t + i * o),
                      !0 !== a.options.fade &&
                        !1 !== a.options.touchMove &&
                        (!0 === a.animating
                          ? ((a.swipeLeft = null), !1)
                          : void a.setCSS(a.swipeLeft))))
              );
            }),
            (r.prototype.swipeStart = function (e) {
              var t,
                n = this;
              if (
                ((n.interrupted = !0),
                1 !== n.touchObject.fingerCount ||
                  n.slideCount <= n.options.slidesToShow)
              )
                return !(n.touchObject = {});
              void 0 !== e.originalEvent &&
                void 0 !== e.originalEvent.touches &&
                (t = e.originalEvent.touches[0]),
                (n.touchObject.startX = n.touchObject.curX =
                  void 0 !== t ? t.pageX : e.clientX),
                (n.touchObject.startY = n.touchObject.curY =
                  void 0 !== t ? t.pageY : e.clientY),
                (n.dragging = !0);
            }),
            (r.prototype.unfilterSlides = r.prototype.slickUnfilter =
              function () {
                null !== this.$slidesCache &&
                  (this.unload(),
                  this.$slideTrack.children(this.options.slide).detach(),
                  this.$slidesCache.appendTo(this.$slideTrack),
                  this.reinit());
              }),
            (r.prototype.unload = function () {
              var e = this;
              c(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                  e.htmlExpr.test(e.options.prevArrow) &&
                  e.$prevArrow.remove(),
                e.$nextArrow &&
                  e.htmlExpr.test(e.options.nextArrow) &&
                  e.$nextArrow.remove(),
                e.$slides
                  .removeClass(
                    "slick-slide slick-active slick-visible slick-current"
                  )
                  .attr("aria-hidden", "true")
                  .css("width", "");
            }),
            (r.prototype.unslick = function (e) {
              this.$slider.trigger("unslick", [this, e]), this.destroy();
            }),
            (r.prototype.updateArrows = function () {
              var e = this;
              Math.floor(e.options.slidesToShow / 2),
                !0 === e.options.arrows &&
                  e.slideCount > e.options.slidesToShow &&
                  !e.options.infinite &&
                  (e.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"),
                  e.$nextArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"),
                  0 === e.currentSlide
                    ? (e.$prevArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"),
                      e.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"))
                    : ((e.currentSlide >=
                        e.slideCount - e.options.slidesToShow &&
                        !1 === e.options.centerMode) ||
                        (e.currentSlide >= e.slideCount - 1 &&
                          !0 === e.options.centerMode)) &&
                      (e.$nextArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"),
                      e.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false")));
            }),
            (r.prototype.updateDots = function () {
              null !== this.$dots &&
                (this.$dots.find("li").removeClass("slick-active").end(),
                this.$dots
                  .find("li")
                  .eq(
                    Math.floor(this.currentSlide / this.options.slidesToScroll)
                  )
                  .addClass("slick-active"));
            }),
            (r.prototype.visibility = function () {
              this.options.autoplay &&
                (document[this.hidden]
                  ? (this.interrupted = !0)
                  : (this.interrupted = !1));
            }),
            (c.fn.slick = function () {
              var e,
                t,
                n = arguments[0],
                i = Array.prototype.slice.call(arguments, 1),
                o = this.length;
              for (e = 0; e < o; e++)
                if (
                  ("object" == typeof n || void 0 === n
                    ? (this[e].slick = new r(this[e], n))
                    : (t = this[e].slick[n].apply(this[e].slick, i)),
                  void 0 !== t)
                )
                  return t;
              return this;
            });
        });
      },
      { jquery: 2 },
    ],
    5: [
      function (l, e, c) {
        (function (e, t) {
          var i = l("process/browser.js").nextTick,
            n = Function.prototype.apply,
            o = Array.prototype.slice,
            r = {},
            s = 0;
          function a(e, t) {
            (this._id = e), (this._clearFn = t);
          }
          (c.setTimeout = function () {
            return new a(n.call(setTimeout, window, arguments), clearTimeout);
          }),
            (c.setInterval = function () {
              return new a(
                n.call(setInterval, window, arguments),
                clearInterval
              );
            }),
            (c.clearTimeout = c.clearInterval =
              function (e) {
                e.close();
              }),
            (a.prototype.unref = a.prototype.ref = function () {}),
            (a.prototype.close = function () {
              this._clearFn.call(window, this._id);
            }),
            (c.enroll = function (e, t) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
            }),
            (c.unenroll = function (e) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
            }),
            (c._unrefActive = c.active =
              function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                0 <= t &&
                  (e._idleTimeoutId = setTimeout(function () {
                    e._onTimeout && e._onTimeout();
                  }, t));
              }),
            (c.setImmediate =
              "function" == typeof e
                ? e
                : function (e) {
                    var t = s++,
                      n = !(arguments.length < 2) && o.call(arguments, 1);
                    return (
                      (r[t] = !0),
                      i(function () {
                        r[t] &&
                          (n ? e.apply(null, n) : e.call(null),
                          c.clearImmediate(t));
                      }),
                      t
                    );
                  }),
            (c.clearImmediate =
              "function" == typeof t
                ? t
                : function (e) {
                    delete r[e];
                  });
        }.call(this, l("timers").setImmediate, l("timers").clearImmediate));
      },
      { "process/browser.js": 3, timers: 5 },
    ],
    6: [
      function (e, t, n) {
        "use strict";
        var i,
          f = (i = e("jquery")) && i.__esModule ? i : { default: i };
        function o(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
              (i = i.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function a(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? o(Object(n), !0).forEach(function (e) {
                  r(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function l(e) {
          var o = {};
          function r(e, t) {
            return e + "=" + encodeURIComponent(t);
          }
          (this.converseHost = e || !1),
            (this.setParameter = function (e, t) {
              o[e] = { type: "standard", value: t };
            }),
            (this.getUrl = function () {
              for (var e = Object.keys(o), t = [], n = 0; n < e.length; n++)
                if (o.hasOwnProperty(e[n]))
                  switch (o[e[n]].type) {
                    case "array":
                      for (var i = 0; i < o[e[n]].value.length; i++)
                        o[e[n]].value.hasOwnProperty(i) &&
                          t.push(r(e[n] + "[]", o[e[n]].value[i]));
                      break;
                    case "standard":
                    default:
                      t.push(r(e[n], o[e[n]].value));
                  }
              return this.converseHost + "?" + t.join("&");
            });
        }
        function s(e) {
          window.parent.postMessage(e, "*");
        }
        (window.$ = window.jQuery = f.default),
          e("slick-carousel"),
          e("bluebird");
        var c = {
          isValidUrl: function (e) {
            return e.match(
              /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[%\]@!$&'()*+,;=.]+$/gi
            );
          },
          localStorage: function (e, t) {
            e = e || "cSession";
            try {
              if (!window.localStorage) return;
              if ((t && (window.localStorage[e] = t), !t))
                return window.localStorage[e];
            } catch (e) {
              return;
            }
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          obtainBoolenParamValue: function (e, t) {
            if (void 0 === e) return t;
            if ("boolean" == typeof e) return e;
            if (c.isString(e)) {
              if ("true" === e.toLowerCase()) return !0;
              if ("false" === e.toLowerCase()) return !1;
            }
            return t;
          },
          obtainNumericParamValue: function (e, t) {
            if (void 0 === e) return t;
            if ("number" == typeof e) return e;
            if (c.isString(e))
              try {
                return parseInt(e, 10);
              } catch (e) {}
            return t;
          },
        };
        function u(e) {
          (this.host = e.host),
            (this.converseHost = e.converseHost),
            (this.botId = e.botId),
            (this.user = e.user || {}),
            (this.tenant = e.tenant),
            (this.startPhrase = e.start || e.startPhrase || null),
            (this.silentCancel = e.silentCancel || "#silentcancel#"),
            (this.baseContainer = e.container || "#chatcontainer"),
            (this.startMinimized = !!c.obtainBoolenParamValue(
              e.startMinimized,
              e.startMinimized
            )),
            (this.showCloseButton = c.obtainBoolenParamValue(
              e.showCloseButton,
              !0
            )),
            (this.showSettingsButton = c.obtainBoolenParamValue(
              e.showSettingsButton,
              !0
            )),
            (this.showMinimizeButton =
              c.obtainBoolenParamValue(this.startMinimized, !1) ||
              !!c.obtainBoolenParamValue(
                e.showMinimizeButton,
                e.showMinimizeButton
              )),
            (this.showClearButton = !!c.obtainBoolenParamValue(
              e.showClearButton,
              e.showClearButton
            )),
            (this.sendCallback = e.sendCallback),
            (this.receiveCallback = e.receiveCallback),
            (this.hideCallback = e.hideCallback),
            (this.minimizeCallback = e.minimizeCallback),
            (this.title = e.title || "Chat"),
            (this.FADE_TIME = c.obtainNumericParamValue(e.FADE_TIME, 150)),
            (this.REDATE_TIME = c.obtainNumericParamValue(e.REDATE_TIME, 10)),
            (this.isTypingDelay = c.obtainNumericParamValue(
              e.isTypingDelay,
              2e3
            )),
            (this.hideIcon = e.hideIcon || "fa-minus"),
            (this.minimizeIcon = e.minimizeIcon || "fa-minus"),
            (this.maximizeIcon = e.maximizeIcon || "fa-window-maximize"),
            (this.clearIcon = e.clearIcon || "fa-sync"),
            (this.hideSendButton = c.obtainBoolenParamValue(
              e.hideSendButton,
              !1
            )),
            (this.placeholder = e.placeholder || "Type a message..."),
            (this.disabledPlaceholder =
              e.disabledPlaceholder || "Choose an option above..."),
            (this.sendButtonTitle = e.sendButtonTitle || "Send"),
            (this.serverUserImage =
              "boolean" != typeof e.serverUserImage &&
              (e.serverUserImage || e.chatBotBaseUrl + "/eo-square-mark.png")),
            (this.reConnectDelay = c.obtainNumericParamValue(
              e.reConnectDelay,
              2e3
            )),
            (this.disconnectedText =
              e.disconnectedText || "Disconnected - trying to reconnect"),
            (this.showBrowseButton = c.obtainBoolenParamValue(
              e.showBrowseButton,
              !0
            )),
            (this.showToolbar = c.obtainBoolenParamValue(e.showToolbar, !1)),
            (this.downloadText = e.downloadText || "download"),
            (this.downloadErrorText = e.downloadErrorText || null),
            (this.clientUserImage =
              c.obtainBoolenParamValue(e.clientUserImage, e.clientUserImage) ||
              ""),
            (this.windowOpen = e.windowOpen || window.open),
            (this.$baseTemplate = ""),
            (this.lastTimestamp = 0),
            (this.lastDirection = "none"),
            (this.lastContainer = null),
            (this.tryReconnect = !1),
            (this.allowHTML = c.obtainBoolenParamValue(e.allowHTML, !0)),
            (this.incomingMessages = {}),
            (this.isTyping = !1),
            (this.openRetries = c.obtainNumericParamValue(e.openRetries, 5)),
            (this.history = []),
            (this.debug = !!c.obtainBoolenParamValue(e.debug, e.debug)),
            (this.clearOnClose = !!c.obtainBoolenParamValue(
              e.clearOnClose,
              e.clearOnClose
            )),
            (this.enableChatHistory = c.obtainBoolenParamValue(
              e.enableChatHistory,
              !1
            )),
            (this.loadingHistory = !1),
            (this.loadingHistoryIndicator = null),
            (this.loadingHistoryTitle = e.sendButtonTitle || "Loading history"),
            (this.framed = c.obtainBoolenParamValue(e.framed, !1)),
            (this.parentFrameOrigin = e.parentFrameOrigin),
            (this.livePreview = c.obtainBoolenParamValue(e.livePreview, !1)),
            (this.agentId = null),
            (this.agentName = null),
            (this.agentSession = null),
            (this.agentDisconnectionTimer = null),
            (this.uploadAttachmentApiUrl = ""),
            (this.userInactiveAfter = c.obtainNumericParamValue(
              e.userInactiveAfter,
              10
            )),
            (this.inactiveWhenHidden = c.obtainBoolenParamValue(
              e.inactiveWhenHidden,
              !0
            )),
            (this.socketInitiated = !1),
            (this.activity = {
              lastUserActivity: Date.now(),
              socket: !0,
              tabActive: !0,
              outstandingMaintenanceUserState: "",
            });
          var t = this;
          this.livePreview &&
            ((this.debug = !0),
            (this.serverUserImage = !1),
            (this.showMinimizeButton = !0),
            (this.showClearButton = !0),
            (this.showSettingsButton = !1),
            (this.showToolbar = !1),
            (this.sendButtonTitle = '<i class="fas fa-paper-plane"></i>'),
            (this.clearOnClose = !0),
            (this.allowHTML = !0),
            (this.enableChatHistory = !1),
            (this.framed = !0),
            (0, f.default)(this.baseContainer).addClass("live-preview"),
            window.addEventListener("message", function (e) {
              "EOCM_CHAT_ADD_DEBUG_BUTTON" === e.data.message &&
                t.addDebugButton(e.data.data);
            })),
            this.inactiveWhenHidden &&
              document.addEventListener("visibilitychange", function (e) {
                t._onVisibilityChange(e);
              });
        }
        (u.prototype.setReceiveCallback = function (e) {
          this.receiveCallback = e;
        }),
          (u.prototype.setSendCallback = function (e) {
            this.sendCallback = e;
          }),
          (u.prototype.initSocket = function () {
            var e = this,
              n = {
                text: e.onText.bind(e),
                buttons: e.onButtons.bind(e),
                card: e.onCard.bind(e),
                buttonCard: e.onCardButton.bind(e),
                quick_replies: e.onQuickReply.bind(e),
                type_on: e.onTypeOn.bind(e),
                type_off: e.onTypeOff.bind(e),
                agent_typing_on: e.onTypeOn.bind(e),
                agent_typing_off: e.onTypeOff.bind(e),
                account_link_redirect: e.onAccountLinkRedirect.bind(e),
                disconnect: e.onDisconnect.bind(e),
                attachment: e.onAttachment.bind(e),
                "attached-text": e.onAttachedText.bind(e),
                "attached-error": e.onAttachedErrorText.bind(e),
                metadata: e.onMetadata.bind(e),
                connect: e.onConnect.bind(e),
                event: e.onSystemEvent.bind(e),
                error: e.onError.bind(e),
              };
            return (
              (e.socket = new WebSocket(
                e.host +
                  "?tenant_id=" +
                  e.tenant +
                  "&bot_id=" +
                  e.botId +
                  "&session_id=" +
                  e.user.chatid
              )),
              (e.socket.onmessage = function (e) {
                try {
                  var t = JSON.parse(e.data);
                } catch (e) {
                  return void console.log("Failed parse data");
                }
                t.type && n[t.type]
                  ? n[t.type](t)
                  : console.error("Unrecognized event");
              }),
              (e.socket.onopen = e.onConnect.bind(e)),
              (e.socket.onclose = e.onDisconnect.bind(e)),
              (e.socketInitiated = !0),
              e.socket
            );
          }),
          (u.init = function (e, t) {
            var n = new u(e);
            return (
              n._buildInterface(),
              n.renderMain.call(
                n,
                "function" == typeof t ? t.bind(n, n) : null,
                []
              ),
              n.startMinimized ||
                n._init(function () {
                  n.initSocket();
                }),
              (n.activityCheckInterval = setInterval(
                n.checkUserActivity.bind(n),
                5e3
              )),
              n
            );
          }),
          (u.prototype._init = function (t) {
            var n = this,
              e =
                n.converseHost + "/websocket/init/" + n.tenant + "/" + n.botId,
              i = c.localStorage(n.tenant + "-" + n.botId + "-session");
            return (
              i && n.enableChatHistory && (e += "?session_id=" + i),
              n.framed &&
                ((0, f.default)("body").addClass("fit"),
                (0, f.default)(n.baseContainer).addClass("pb-chat-framed")),
              f.default.ajax({
                url: e,
                method: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                  user: n.user,
                  language: this.getFirstBrowserLanguage(window.navigator),
                  livePreview: this.livePreview,
                }),
                dataType: "json",
                success: function (e) {
                  (n.user.chatid = e.id),
                    c.localStorage(n.tenant + "-" + n.botId + "-session", e.id),
                    (n.history = e.messages),
                    t && t(),
                    (0, f.default)(n.baseContainer).removeClass(
                      "pb-chat-popup-minimize"
                    ),
                    (n.initialized = !0),
                    n.processHistory(e.messages);
                },
              }),
              n._disableChatWindow(),
              n
            );
          }),
          (u.prototype._buildInterface = function () {
            var t = this;
            t.$baseTemplate = (0, f.default)(
              '<div class="pb-chat-popup-box"></div>'
            );
            var e = (0, f.default)('<div class="pb-chat-popup-head"></div>');
            this.allowHTML
              ? e.append(
                  (0, f.default)('<div class="pb-webchat-title"></div>').html(
                    t.title
                  )
                )
              : e.append(
                  (0, f.default)('<div class="pb-webchat-title"></div>').text(
                    t.title
                  )
                );
            var n = (0, f.default)(
                '<div class="pb-chat-popup-head-right pull-right"></div>'
              ),
              i = (0, f.default)('<div class="btn-group"></div>');
            if (
              (i.append(
                (0, f.default)(
                  '<span id="connection" title="' +
                    t.disconnectedText +
                    '" class="pb-chat-header-connected pb-chat-connecting"><i id="connectedIcon" class="fas fa-bolt pb-chat-connected-indicator"></i><i id="connectingIcon" class="fas fa-plug pb-chat-connecting-indicator"></i></span>'
                )
              ),
              t.showSettingsButton)
            ) {
              i.append(
                (0, f.default)(
                  '<button id="pb-dropdown" class="pb-dropdown pb-chat-header-button" type="button" data-toggle="dropdown" aria-expanded="false"><a href="#"><i class="fas fa-cog"></i></a></button>'
                )
              );
              var o = (0, f.default)(
                  '<div id="menu" class="pb-dropdown-content"></div>'
                ),
                r = (0, f.default)('<li><a href="#">Clear Chat</a></li>');
              r.click(function (e) {
                return (
                  e.preventDefault(), e.stopPropagation(), t.clearChat(), !1
                );
              }),
                o.append(r);
            }
            t.showMinimizeButton &&
              i.append(
                (0, f.default)(
                  '<button data-widget="minimize" id="minimizeChat" class="pb-chat-header-button pull-right"type="button"><i class="pb-chat-minimize-icon fas ' +
                    t.minimizeIcon +
                    '"></i><i class="pb-chat-maximize-icon fas ' +
                    t.maximizeIcon +
                    '"></i></button>'
                )
              ),
              t.showClearButton &&
                e.append(
                  (0, f.default)(
                    '<button data-widget="clear" id="clearChat" class="pb-chat-header-button pull-left"type="button"><i class="fas ' +
                      t.clearIcon +
                      '"></i></button>'
                  )
                ),
              t.showCloseButton &&
                i.append(
                  (0, f.default)(
                    '<button data-widget="remove" id="closeChat" class="pb-chat-header-button pull-right" type="button"><a href="#"><i class="fas ' +
                      t.hideIcon +
                      '"></i></a></button>'
                  )
                ),
              n.append(i),
              n.append(o),
              e.append(n),
              t.$baseTemplate.append(e);
            var s = (0, f.default)(
              '<div id="messagesWrapper" class="pb-chat-popup-messages' +
                (this.showToolbar ? " pb-adjust-message-wrapper" : "") +
                '"></div>'
            ).append(
              (0, f.default)(
                '<div id="messages" class="pb-chat-direct-chat-messages"></div>'
              )
            );
            s.on("scroll", function () {
              t._onMessageWrapperScroll();
            }),
              t.$baseTemplate.append(s);
            var a = (0, f.default)(
                '<div class="pb-chat-popup-messages-footer"></div>'
              ).append(
                (0, f.default)(
                  '<div id="typing" class="pb-chat-typing-indicator"><span></span><span></span><span></span></div>'
                )
              ),
              l = (0, f.default)("<textarea />")
                .attr("id", "status_message")
                .attr("placeholder", t.placeholder)
                .attr("name", "message")
                .addClass(t.hideSendButton ? "fullwidth" : "no-fullwidth"),
              c = (0, f.default)("<button />")
                .attr("id", "send")
                .addClass("pb-chat-send-button")
                .attr("type", "button")
                .data("widget", "send")
                .html(t.sendButtonTitle),
              u = (0, f.default)("<div />")
                .addClass("pb-chat-popup-messages-message-box")
                .append(l);
            if (
              (t.hideSendButton || u.append(c), a.append(u), this.showToolbar)
            ) {
              var d = (0, f.default)(
                  '<div id="pb-chat-toolbar" class="pb-chat-toolbar"></div>'
                ),
                p = this.baseContainer.replace("#", "");
              this.showBrowseButton &&
                (d.append(
                  '<label for="' +
                    p +
                    '-pb-file-upload" class="pb-btn pb-btn-link pb-chat-toolbar-btn">\n    <i class="fas fa-paperclip"></i></label><input id="' +
                    p +
                    '-pb-file-upload" type="file" class="pb-file-upload" name="fileToUpload" multiple>'
                ),
                a.append('<div id="' + p + '-pb-file-uploader"></div>'),
                d.append(
                  '<div id="' +
                    p +
                    '-pb-file-name" class="pb-chat-file-upload-text"></div>'
                )),
                a.append(d);
            }
            t.$baseTemplate.append(a);
          }),
          (u.prototype._enableChatWindow = function () {
            this.hideSendButton ||
              ((0, f.default)(this.baseContainer)
                .find("#send")
                .prop("disabled", !1),
              (0, f.default)(this.baseContainer)
                .find(".pb-chat-send-button")
                .removeClass("disabled")),
              (0, f.default)(this.baseContainer)
                .find("#messagesWrapper")
                .prop("disabled", !1),
              (0, f.default)(this.baseContainer)
                .find("#status_message")
                .prop("disabled", !1),
              (0, f.default)(this.baseContainer)
                .find(".pb-btn")
                .prop("disabled", !1),
              (0, f.default)(this.baseContainer)
                .find("span")
                .css("pointer-events", "auto"),
              (0, f.default)(this.baseContainer)
                .find("#connectedIcon")
                .removeClass("pb-chat-disconnected"),
              (0, f.default)(this.baseContainer)
                .find("#connection")
                .removeClass("pb-chat-disconnected pb-chat-connecting"),
              (0, f.default)(
                ".pb-chat-connecting-indicator",
                this.baseContainer
              ).remove();
          }),
          (u.prototype._disableChatWindow = function () {
            (0, f.default)(this.baseContainer)
              .find("#connectedIcon")
              .addClass("pb-chat-disconnected"),
              (0, f.default)(this.baseContainer)
                .find("#connection")
                .addClass("pb-chat-disconnected"),
              (0, f.default)(this.baseContainer)
                .find("#send")
                .prop("disabled", !0),
              (0, f.default)(this.baseContainer)
                .find("#status_message")
                .prop("disabled", !0),
              (0, f.default)(this.baseContainer)
                .find("#messagesWrapper")
                .prop("disabled", !0),
              (0, f.default)(this.baseContainer)
                .find("span")
                .css("pointer-events", "none"),
              (0, f.default)(this.baseContainer)
                .find(".pb-btn")
                .prop("disabled", !0),
              (0, f.default)(this.baseContainer)
                .find(".pb-chat-send-button")
                .addClass("disabled");
          }),
          (u.prototype.onConnect = function () {
            var e = this;
            0 === e.history.length &&
              !e.tryReconnect &&
              e.startPhrase &&
              e.sendPostBackSilent(e.startPhrase),
              e.tryReconnect && e._callSend({}, "reconnected"),
              e.activity.outstandingMaintenanceUserState &&
                (e.sendMaintenance(e.activity.outstandingMaintenanceUserState),
                (e.activity.outstandingMaintenanceUserState = "")),
              (e.pingInterval = setInterval(e.ping.bind(e), 3e4)),
              (e.tryReconnect = !1),
              e._enableChatWindow(),
              e.retryIntrval && clearInterval(e.retryIntrval);
          }),
          (u.prototype.onReconnect = function () {
            this.socket.readyState === WebSocket.CLOSED &&
              ((this.tryReconnect = !0), this.initSocket());
          }),
          (u.prototype.onAttachment = function (e) {
            (e.message.direction =
              "inbound" === e.message.direction ? "outbound" : "inbound"),
              this.addDownloadMessage(e),
              this.receiveCallback && this.receiveCallback(e.message);
          }),
          (u.prototype.onAttachedText = function (e) {
            if (
              ((e.direction =
                "outbound" === e.direction ? "inbound" : "outbound"),
              e.hasOwnProperty("originalName"))
            )
              return this.addDownloadMessage(e);
            this.addChatMessage({
              direction: e.direction,
              message: e.data.originalName,
            });
          }),
          (u.prototype.onAttachedErrorText = function (e) {
            this.addChatMessage({
              direction: "error",
              message: (this.downloadErrorText || e.message.text).replace(
                /\$\{name\}/g,
                e.message.name
              ),
              id: e.id,
            });
          }),
          (u.prototype.onText = function (e) {
            this.text(e),
              this.receiveCallback && this.receiveCallback(e.message);
          }),
          (u.prototype.onButtons = function (e) {
            this.addButtonMessage(e),
              e.message.disable_text_input && this.disableTextArea(),
              this.receiveCallback && this.receiveCallback(e.message);
          }),
          (u.prototype.onCard = function (e) {
            this.addCardMessage(e),
              this.receiveCallback && this.receiveCallback(e.message);
          }),
          (u.prototype.onCardButton = function (e) {
            var t = [e.message];
            this.addCardMessage({
              message: { cards: t, text: e.message.title },
              id: e.id,
              interaction_id: e.interaction_id,
              originType: e.originType,
            }),
              e.message.disable_text_input && this.disableTextArea(),
              this.receiveCallback && this.receiveCallback(t);
          }),
          (u.prototype.clearChat = function () {
            (0, f.default)(this.baseContainer).find("#messages").empty(),
              (0, f.default)(this.baseContainer)
                .find(".pb-dropdown-content")
                .toggleClass("show"),
              (this.lastTimestamp = 0),
              (this.lastDirection = null),
              this.silentCancel && this.sendPostBackSilent(this.silentCancel),
              this._callSend({}, "clear", !0);
          }),
          (u.prototype.onQuickReply = function (e) {
            this.addQuickReplyMessage({
              id: e.id,
              interaction_id: e.interaction_id,
              text: e.message.text,
              quick_replies: e.message.quick_replies,
              originType: e.originType,
            }),
              e.message.disable_text_input && this.disableTextArea(),
              this.receiveCallback && this.receiveCallback(e.message);
          }),
          (u.prototype.onDisconnect = function () {
            var e = this;
            (this.socketInitiated = !1),
              e.socket.close(),
              e._disableChatWindow(),
              e.retryIntrval && clearInterval(e.retryIntrval),
              e.pingInterval && clearInterval(e.pingInterval),
              (e.retryIntrval = setInterval(function () {
                e.onReconnect();
              }, e.reConnectDelay));
          }),
          (u.prototype.cleanInput = function (e) {
            return (0, f.default)("<div/>").html(e).text();
          }),
          (u.prototype.openBot = function (e, t, n) {
            var i = this;
            if ((i._disableChatWindow(), !i.socket))
              throw Error(
                "Socket is not connected. Did you remember to call ConverseWebChat.init?"
              );
            (i.tenant = i.tenant || e),
              (i.botId = i.botId || t),
              (i.user = i.user || n || {}),
              i.openCount++ < i.openRetries &&
                ((i.openBotTimer = setTimeout(function () {
                  i.openBot(e, t, n);
                }, 2e3)),
                this.socket.emit("openBot", {
                  tenantId: e,
                  botid: t,
                  user: n,
                }));
          }),
          (u.prototype.text = function (e) {
            var t = {
              direction: "inbound",
              message:
                "card" === e.message.text.type
                  ? e.message.text.text
                  : e.message.text,
              id: e.id,
              interaction_id: e.interaction_id,
            };
            e.sender &&
              (e.sender.agent_image_url
                ? (t.imageUrl = e.sender.agent_image_url)
                : this.agentImageUrl && (t.imageUrl = this.agentImageUrl),
              (e.sender.agent_name || e.sender.agent_nickname) &&
                (t.agentName = e.sender.agent_nickname || e.sender.agent_name)),
              this.addChatMessage(t);
          }),
          (u.prototype.onTypeOn = function () {
            (0, f.default)(this.baseContainer)
              .find("#typing")
              .addClass("pb-chat-typing-on");
          }),
          (u.prototype.onTypeOff = function () {
            (0, f.default)(this.baseContainer)
              .find("#typing")
              .removeClass("pb-chat-typing-on");
          }),
          (u.prototype.onAccountLinkRedirect = function (e) {
            this.windowOpen.call(window, e, "_blank");
          }),
          (u.prototype.messageSend = function () {
            var e = this.cleanInput(
                (0, f.default)(this.baseContainer).find("#status_message").val()
              ),
              t = [],
              n = 0;
            if (
              (0 <
                (0, f.default)(this.baseContainer).find(
                  this.baseContainer + "-pb-file-upload"
                ).length &&
                (t = (0, f.default)(this.baseContainer).find(
                  this.baseContainer + "-pb-file-upload"
                )[0].files),
              e && (this.sendMessage(e), (n = 1e3)),
              (0, f.default)(this.baseContainer)
                .find("#status_message")
                .val(""),
              t && t.length)
            ) {
              var i = this;
              setTimeout(function () {
                i.sendFiles(t),
                  (0, f.default)(i.baseContainer)
                    .find(i.baseContainer + "-pb-file-upload")
                    .val(""),
                  (0, f.default)(i.baseContainer)
                    .find(i.baseContainer + "-pb-file-name")
                    .text("");
              }, n);
            }
          }),
          (u.prototype.userIsTyping = function () {
            this.isTyping || this._callSend({}, "typing_on", !0),
              (this.isTyping = !0),
              this._markUserActivity();
          }),
          (u.prototype.userStopTyping = function () {
            this.isTyping && this._callSend({}, "typing_off", !0),
              this.typingTimeout && clearTimeout(this.typingTimeout),
              (this.isTyping = !1);
          }),
          (u.prototype.renderMain = function (e) {
            var o = this;
            (0, f.default)(o.baseContainer).append(o.$baseTemplate),
              (0, f.default)(o.baseContainer)
                .find("#minimizeChat")
                .click(function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    o.initialized
                      ? o.minimize()
                      : o._init(function () {
                          o.initSocket();
                        }),
                    !1
                  );
                }),
              (0, f.default)(o.baseContainer)
                .find("#clearChat")
                .click(function (e) {
                  return (
                    e.preventDefault(), e.stopPropagation(), o.clearChat(), !1
                  );
                }),
              (0, f.default)(o.baseContainer)
                .find("#closeChat")
                .click(function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    o.clearOnClose && o.clearChat(),
                    o.hide(),
                    o.framed && s({ message: "EOCM_BOT_PREVIEW_CLOSE" }),
                    !1
                  );
                }),
              (0, f.default)(o.baseContainer)
                .find("#status_message")
                .keydown(function (e) {
                  13 !== e.which ||
                    e.shiftKey ||
                    (o.messageSend(), e.preventDefault()),
                    (8 === e.which ||
                      32 === e.which ||
                      (44 < e.which && e.which < 112) ||
                      123 < e.which) &&
                      o.userIsTyping();
                }),
              (0, f.default)(o.baseContainer)
                .find("#status_message")
                .keyup(function () {
                  o.typingTimeout && clearTimeout(o.typingTimeout),
                    (o.typingTimeout = setTimeout(function () {
                      o.userStopTyping();
                    }, o.isTypingDelay));
                }),
              (0, f.default)(o.baseContainer)
                .find("#send")
                .click(function () {
                  o.messageSend(),
                    (0, f.default)(o.baseContainer)
                      .find("#status_message")
                      .focus();
                }),
              "function" == typeof e && e(),
              (0, f.default)(o.baseContainer)
                .find("#pb-dropdown")
                .click(function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    (0, f.default)(o.baseContainer)
                      .find(".pb-dropdown-content")
                      .toggleClass("show"),
                    !1
                  );
                }),
              (0, f.default)(o.baseContainer)
                .find(".pb-chat-popup-head")
                .click(function (e) {
                  if (
                    (0, f.default)(o.baseContainer).hasClass(
                      "pb-chat-popup-minimize"
                    )
                  )
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      o.initialized
                        ? o.minimize()
                        : o._init(function () {
                            o.initSocket();
                          }),
                      !1
                    );
                }),
              ((0, f.default)(o.baseContainer).find("#pb-dropdown").onclick =
                function (e) {
                  if (
                    e.target &&
                    e.target.offsetParent &&
                    "pb-dropdown" !== e.target.id &&
                    "pb-dropdown" !== e.target.offsetParent.id
                  ) {
                    var t,
                      n = (0, f.default)(o.baseContainer).find(
                        ".pb-dropdown-content"
                      );
                    for (t = 0; t < n.length; t++) {
                      var i = n[t];
                      i.classList.contains("show") &&
                        i.classList.remove("show");
                    }
                  }
                }),
              this.showToolbar &&
                ((0, f.default)(o.baseContainer)
                  .find(this.baseContainer + "-pb-file-upload")
                  .change(function () {
                    var e = (0, f.default)(o.baseContainer).find(
                        o.baseContainer + "-pb-file-upload"
                      )[0].files,
                      t = [],
                      n = "";
                    Object.keys(e).forEach(function (e) {
                      t.push(
                        (0, f.default)(o.baseContainer).find(
                          o.baseContainer + "-pb-file-upload"
                        )[0].files[e].name
                      );
                    }),
                      0 < t.length && (n = t.join(", ")),
                      (0, f.default)(o.baseContainer)
                        .find(o.baseContainer + "-pb-file-name")
                        .text(n),
                      (0, f.default)(o.baseContainer)
                        .find(o.baseContainer + "-pb-file-name")
                        .attr("title", n);
                  }),
                (0, f.default)(o.baseContainer)
                  .find(o.baseContainer + "-pb-file-upload")
                  .on("click", function () {
                    (0, f.default)(o.baseContainer)
                      .find(o.baseContainer + "-pb-file-upload")
                      .val(""),
                      (0, f.default)(o.baseContainer)
                        .find(o.baseContainer + "-pb-file-name")
                        .text("");
                  }));
          }),
          (u.prototype.sendPostBack = function (e, t, n, i) {
            (e || t || n) &&
              (this.sendPostBackSilent(e, t, n, !0, i),
              this.addChatMessage({ direction: "outbound", message: t }));
          }),
          (u.prototype.sendPostBackSilent = function (e, t, n, i, o) {
            if (e || t) {
              var r = {
                text: e || t,
                title: t,
                incomingMessage: n,
                visible: !!i,
              };
              o && (r.id = o),
                this._callSend(r, "postback", !0),
                this.sendCallback && this.sendCallback(r.text);
            }
          }),
          (u.prototype.trackButton = function (e, t, n, i, o) {
            if (!this.livePreview) {
              var r =
                  this.converseHost +
                  "/tracking/message/" +
                  this.tenant +
                  "/" +
                  this.botId +
                  "/" +
                  this.user.chatid +
                  "/websocket",
                s = {
                  interaction_id: e,
                  message_id: t,
                  text: n,
                  response: i,
                  response_type: o,
                };
              f.default.ajax({
                url: r,
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(s),
                dataType: "json",
              });
            }
          }),
          (u.prototype.sendMessage = function (e) {
            if (e) {
              var t = { text: e };
              (!this.sendCallback || this.sendCallback(e)) &&
                (this._callSend(t, "text", !0),
                this.addChatMessage({ direction: "outbound", message: e })),
                this.userStopTyping();
            } else this.userStopTyping();
          }),
          (u.prototype.sendFiles = function (e) {
            var n = this,
              t = [];
            if (e) {
              var r = (0, f.default)(this.baseContainer).find(
                this.baseContainer + "-pb-file-upload"
              );
              Object.keys(e).forEach(function (o) {
                var e = new Promise(function (t, n) {
                  var i = r[0].files[o],
                    e = new FileReader();
                  e.readAsBinaryString(i),
                    (e.onload = function (e) {
                      t({
                        file: btoa(e.currentTarget.result),
                        name: i.name,
                        size: i.size,
                        type: i.type,
                      });
                    }),
                    (e.onerror = function (e) {
                      n(e);
                    });
                });
                t.push(e);
              }),
                Promise.all(t).then(function (e) {
                  var t = n.uploadAttachmentApiUrl
                    ? n.uploadAttachmentApiUrl
                    : n.converseHost +
                      "/attachment/" +
                      n.tenant +
                      "/" +
                      n.botId +
                      "/" +
                      n.user.chatid +
                      "/websocket";
                  f.default.ajax({
                    url: t,
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({ attachments: e }),
                    dataType: "json",
                  });
                });
            }
          }),
          (u.prototype._callSend = function (e, t) {
            var n =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2],
              i =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null,
              o = {
                type: t,
                timestamp: Date.now(),
                message: e,
                sender: this.user,
                maintenance: i,
              };
            this.agentId
              ? (o.recipient = {
                  agent_id: this.agentId,
                  agent_session: this.agentSession,
                })
              : (o.recipient = { bot: this.botId, tenant: this.tenant }),
              n && this._markUserActivity();
            var r = JSON.stringify(o);
            this.socket.send(r, { binary: "attachments" === t });
          }),
          (u.prototype.show = function () {
            (0, f.default)(this.baseContainer).addClass("pb-chat-popup-box-on"),
              this.startMinimized &&
                (0, f.default)(this.baseContainer).addClass(
                  "pb-chat-popup-minimize"
                );
          }),
          (u.prototype.minimize = function () {
            (0, f.default)(this.baseContainer).toggleClass(
              "pb-chat-popup-minimize"
            );
            var e = (0, f.default)(this.baseContainer).hasClass(
              "pb-chat-popup-minimize"
            );
            this.minimizeCallback && this.minimizeCallback(e),
              this.framed &&
                ((0, f.default)("body")[e ? "removeClass" : "addClass"]("fit"),
                s({
                  message: e
                    ? "EOCM_BOT_PREVIEW_MINIMIZE"
                    : "EOCM_BOT_PREVIEW_RESTORE",
                }));
          }),
          (u.prototype.hide = function () {
            (0, f.default)(this.baseContainer).removeClass(
              "pb-chat-popup-box-on"
            ),
              this.hideCallback && this.hideCallback();
          }),
          (u.prototype.setWrapperItems = function (e) {
            var t = !1;
            if (
              (this.lastTimestamp <
                new Date().getTime() - 6e4 * this.REDATE_TIME &&
                ((this.lastTimestamp = new Date().getTime()),
                (t = !0),
                (0, f.default)(this.baseContainer)
                  .find("#messages")
                  .append(
                    (0, f.default)(
                      '<div class="pb-chat-box-single-line"><abbr class="timestamp">' +
                        this.getTimeStamp() +
                        "</abbr></div>"
                    )
                  )),
              !this.lastContainer || this.lastDirection !== e.direction || t)
            ) {
              var n = (0, f.default)(
                  '<div class="pb-chat-direct-chat-msg doted-border pb-' +
                    e.direction +
                    '-container"></div>'
                ),
                i = (0, f.default)(
                  '<div class="pb-' + e.direction + '-items"></div'
                );
              "inbound" === e.direction &&
                n.append(
                  this._getInboundImage(
                    e.imageUrl,
                    e.agentNickname || e.agentName
                  )
                ),
                n.append(i),
                "outbound" === e.direction &&
                  this.clientUserImage &&
                  n.append(
                    (0, f.default)(
                      '<img alt="Precisely" src="' +
                        this.clientUserImage +
                        '" class="pb-chat-direct-chat-img">'
                    )
                  ),
                (0, f.default)(this.baseContainer).find("#messages").append(n),
                (this.lastContainer = n),
                (this.lastContainerItems = i),
                (this.lastDirection = e.direction);
            }
          }),
          (u.prototype._getInboundImage = function (e, t) {
            return e
              ? (0, f.default)(
                  '<div class="pb-chat-direct-chat-img" title="' +
                    t +
                    '" style="background-image:url(' +
                    e +
                    ')">'
                )
              : this.serverUserImage
              ? (0, f.default)(
                  '<img alt="Precisely" src="' +
                    this.serverUserImage +
                    '" class="pb-chat-direct-chat-img">'
                )
              : (0, f.default)("<div/>");
          }),
          (u.prototype.buttonClick = function (e, t) {
            var n =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2],
              i = (0, f.default)(e.target)
                .parents("div[data-timestamp]")
                .data("timestamp"),
              o = this.incomingMessages[i],
              r = new l(this.converseHost + "/redirect");
            switch (
              (r.setParameter("tenant_id", this.tenant),
              r.setParameter("bot_id", this.botId),
              r.setParameter("session_id", this.user.chatid),
              r.setParameter("channel", "websocket"),
              r.setParameter("target", t.url),
              r.setParameter("button", t.title),
              o &&
                o.hasOwnProperty("text") &&
                r.setParameter("message", o.text),
              t.type)
            ) {
              case "account_unlink":
                this._callSend({}, "account_unlink", !0);
                break;
              case "account_link":
                this.windowOpen.call(window, t.url, "account_link");
                break;
              case "web_url":
                this.windowOpen.call(window, r.getUrl(), "_blank");
                break;
              case "phone_number":
                r.setParameter("target", "tel:+" + t.payload),
                  this.windowOpen.call(
                    window,
                    r.getUrl(),
                    this.parentFrameOrigin ? "_blank" : "_self"
                  );
                break;
              case "postback":
              default:
                this.sendPostBack(
                  t.payload,
                  (0, f.default)("<div>" + t.title + "</div>").text(),
                  o,
                  t.id
                );
            }
            if (t.id && n) {
              var s =
                (t.payload && t.payload.startsWith("():request_agent:")
                  ? "agent"
                  : t.type) || "postback";
              this.trackButton(o.id, t.id, o.text, t.title, s);
            }
            this.enableTextArea();
          }),
          (u.prototype.addQuickReplyMessage = function (i) {
            var e =
              1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            i.direction = "inbound";
            var o = this;
            (i.__id = this._logIncomingMessage({ text: i.text, id: i.id })),
              o.setWrapperItems(i);
            var t = (0, f.default)("<div />", {
              class: "pb-chat-direct-chat-text-inbound",
            });
            if ((this.allowHTML ? t.html(i.text) : t.text(i.text), !e)) {
              var r = (0, f.default)("<div />", {
                class: "pb-chat-quick-reply-container",
              });
              f.default.each(i.quick_replies, function (e, t) {
                var n = (0, f.default)("<span />", {
                  class: "pb-chat-badge-brand-info quick-reply",
                });
                o.allowHTML ? n.html(t.title) : n.text(t.title),
                  n.on("click", function (e) {
                    o.buttonClick(e, t, "message" === i.originType), r.hide();
                  }),
                  t.image_url &&
                    n.append(
                      '<img class="quick-reply-img" src="' + t.image_url + '">'
                    ),
                  r.append(n);
              }),
                t.append(r);
            }
            o.addMessageElement(t, i);
          }),
          (u.prototype.addCardMessage = function (o) {
            var r = this;
            (o.__id = this._logIncomingMessage(a({}, o.message, { id: o.id }))),
              (o.direction = "inbound"),
              r.setWrapperItems(o);
            var e = new Date(),
              t =
                "cardContainer" +
                e.getHours() +
                e.getMinutes() +
                e.getSeconds() +
                e.getMilliseconds(),
              n = (0, f.default)("<div />", { class: "pb-cards-wrapper" }),
              s = (0, f.default)("<div />", {
                class: "pb-chat-card-container",
                id: t,
              }),
              i = o.message.cards;
            f.default.each(i, function (e, t) {
              var n = (0, f.default)("<div />", { class: "pb-chat-card" });
              if (
                (t.image_url &&
                  (-1 < t.image_url.indexOf("www.youtube.com/embed")
                    ? n.append(
                        '<iframe class="pb-cards-iframe" frameborder="0" target="_parent" src="' +
                          t.image_url +
                          '"></iframe>'
                      )
                    : n.append(
                        (0, f.default)("<img />", {
                          class: "pb-chat-image",
                          src: t.image_url,
                          width:
                            (0, f.default)("#messages").width() -
                            (0, f.default)(".pb-chat-direct-chat-img")
                              .first()
                              .width(),
                        })
                      )),
                t.title &&
                  (r.allowHTML
                    ? n.append(
                        (0, f.default)("<div />", {
                          class: "pb-chat-title",
                          html: t.title,
                        })
                      )
                    : n.append(
                        (0, f.default)("<div />", {
                          class: "pb-chat-title",
                          text: t.title,
                        })
                      )),
                t.subtitle &&
                  (r.allowHTML
                    ? n.append(
                        (0, f.default)("<div />", {
                          class: "pb-chat-subtitle",
                          html: t.subtitle,
                        })
                      )
                    : n.append(
                        (0, f.default)("<div />", {
                          class: "pb-chat-subtitle",
                          text: t.subtitle,
                        })
                      )),
                t.item_url &&
                  n.append(
                    (0, f.default)("<a>", {
                      class: "pb-chat-url",
                      text: t.item_url,
                      href: t.item_url,
                      target: "_blank",
                    })
                  ),
                t.buttons && t.buttons.length)
              ) {
                var i = (0, f.default)("<div />", {
                  class: "pb-chat-button-container",
                });
                f.default.each(t.buttons, function (e, t) {
                  var n = (0, f.default)(
                    "<button type='button' class='pb-btn pb-btn-default pb-chat-btn-live-preview'>" +
                      t.title +
                      "</button>"
                  );
                  n.on("click", function (e) {
                    r.buttonClick(e, t, "message" === o.originType);
                  }),
                    i.append(n);
                }),
                  n.append(i);
              }
              s.append(n);
            }),
              n.append(s),
              1 < i.length &&
                n.append(
                  '<div class="card-nav-btns-custom"><div class="card-nav-item"><button class="slick-prev-custom" type="button"></button></div><div class="dots-custom card-nav-item"></div><div class="card-nav-item"><button class="slick-next-custom" type="button"></button></div></div>'
                ),
              this.addMessageElement(n, o),
              s.slick({
                variableWidth: !1,
                prevArrow: n.find(".slick-prev-custom"),
                nextArrow: n.find(".slick-next-custom"),
                dots: !1,
                appendDots: n.find(".card-nav-btns-custom .dots-custom"),
              });
          }),
          (u.prototype.addButtonMessage = function (i) {
            var o = this,
              e = this._logIncomingMessage(a({}, i.message, { id: i.id }));
            (i.__id = e), (i.direction = "inbound"), this.setWrapperItems(i);
            var t = (0, f.default)(
                '<div data-timestamp="' +
                  e +
                  '" class="pb-chat-direct-chat-text-inbound"></div>'
              ),
              n = (0, f.default)('<div class="pb-chat-button-text"></div>');
            this.allowHTML ? n.html(i.message.text) : n.text(i.message.text);
            var r = (0, f.default)(
              '<div class="pb-chat-button-container"></div>'
            );
            f.default.each(i.message.buttons, function (e, t) {
              var n = (0, f.default)(
                "<button type='button' class='pb-btn pb-btn-default pb-chat-btn-live-preview' >" +
                  t.title +
                  "</button>"
              );
              n.click(function (e) {
                o.buttonClick(e, t, "message" === i.originType);
              }),
                r.append(n);
            }),
              t.append(n, r),
              this.addMessageElement(t, i);
          }),
          (u.prototype.addDownloadMessage = function (e) {
            this.setWrapperItems(e.message);
            var t = (0, f.default)(
                "<div class='pb-chat-direct-chat-text-" +
                  e.message.direction +
                  " pb-download'>"
              ),
              n = "",
              i = "",
              o = "";
            e.message.url
              ? ((n = e.message.name),
                (i = e.message.url),
                (o = e.message.contentType))
              : ((n = e.message.name),
                (i =
                  (e.message.host ? e.message.host : this.converseHost) +
                  "/" +
                  e.message.link),
                (o = e.message.type));
            var r = (0, f.default)(
              "<a target='_new' class='pb-download-link' href='" +
                i +
                "' alt='" +
                this.downloadText +
                "'>"
            );
            -1 === o.indexOf("image")
              ? (t.append("<div class='pb-download-name'>" + n + "</div>"),
                r.append("<span class='fas fa-file-download'></span>"))
              : r
                  .addClass("pb-download-image")
                  .append(
                    "<img class='pb-chat-image' src='" +
                      i +
                      "' alt='" +
                      n +
                      "'/>"
                  ),
              t.append(r),
              this.addMessageElement(t, e);
          }),
          (u.prototype.addChatMessage = function (e) {
            this.setWrapperItems(e);
            var t,
              n = Date.now();
            if (
              ((e.__id = n),
              "https://www.youtube.com/embed" ===
                (this.incomingMessages[n] = e).message
                  .trim()
                  .substring(0, 29) && "inbound" === e.direction)
            ) {
              var i = (0, f.default)("<iframe>", {
                width: "100%",
                src: e.message,
                frameborder: 0,
                allow:
                  "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: !0,
              });
              (t = (0, f.default)(
                '<div class="pb-chat-direct-chat-text-' + e.direction + ' ">'
              )).append(i);
            } else if (c.isValidUrl(e.message.trim())) {
              var o = (0, f.default)("<a>", {
                  href: e.message.trim(),
                  class: "pb-rich-link-link",
                  target: "_blank",
                }),
                r = (0, f.default)("<div>", {
                  class: "pb-rich-link-image",
                  css: { display: "none" },
                }),
                s = (0, f.default)("<div>", {
                  class: "pb-rich-link-title",
                  text: e.message,
                }),
                a = (0, f.default)("<div>", {
                  class: "pb-rich-link-description",
                });
              o.append(r).append(s).append(a),
                this._callSend({ url: e.message.trim() }, "get_metadata"),
                (t = (0, f.default)(
                  '<div class="pb-chat-direct-chat-text-' + e.direction + ' ">'
                )).append(o);
            } else
              t =
                0 === e.message.indexOf("data:image/")
                  ? (0, f.default)(
                      '<img class="pb-chat-direct-chat-text-' +
                        e.direction +
                        ' ">'
                    ).attr("src", e.message)
                  : this.allowHTML
                  ? (0, f.default)(
                      '<div class="pb-chat-direct-chat-text-' +
                        e.direction +
                        ' ">'
                    ).html(e.message)
                  : (0, f.default)(
                      '<div class="pb-chat-direct-chat-text-' +
                        e.direction +
                        ' ">'
                    ).text(e.message);
            this.addMessageElement(t, e);
          }),
          (u.prototype.addMessageElement = function (e, t) {
            var n = (0, f.default)(e),
              i = this,
              o = "interation-" + t.__id + Math.floor(1e6 * Math.random());
            n.addClass(o),
              n.attr("data-timestamp", t.__id),
              n.hide().fadeIn(this.FADE_TIME),
              this.lastContainerItems.append(n),
              this.debug &&
                t.id &&
                "outbound" !== t.direction &&
                s({
                  message: "EOCM_CHAT_DEBUG_BUTTON",
                  data: { interaction: t, element: "." + o },
                });
            var r = (0, f.default)(i.baseContainer)
              .find("#messagesWrapper")
              .get(0).scrollHeight;
            this.loadingHistory
              ? (0, f.default)(i.baseContainer)
                  .find("#messagesWrapper")
                  .scrollTop(r)
              : (0, f.default)(i.baseContainer)
                  .find("#messagesWrapper")
                  .animate({ scrollTop: r }, 100)
                  .promise()
                  .then(function () {
                    i._onMessageWrapperScroll(r);
                  }),
              this.onTypeOff();
          }),
          (u.prototype.addDebugButton = function (t) {
            (0, f.default)(t.element).append(
              (0, f.default)(
                '<button class="pb-chat-debug-btn"><i class="fas fa-search"></i></button>'
              )
                .prop("disabled", t.interaction.disabled)
                .on("click", function (e) {
                  return (
                    e.preventDefault(),
                    e.stopPropagation(),
                    s({ message: "EOCM_CHAT_DEBUG", data: t.interaction }),
                    !1
                  );
                })
            );
          }),
          (u.prototype.getTimeStamp = function () {
            var e = new Date();
            return (
              e.toLocaleDateString(void 0, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }) +
              " " +
              e.toLocaleTimeString(void 0, {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          }),
          (u.prototype.disableTextArea = function () {
            (0, f.default)(this.baseContainer)
              .find("textarea")
              .attr("placeholder", this.disabledPlaceholder)
              .prop("disabled", !0),
              (0, f.default)(this.baseContainer)
                .find("#send")
                .addClass("disabled"),
              (0, f.default)(this.baseContainer)
                .find(".pb-chat-toolbar-btn")
                .addClass("pb-chat-toolbar-btn-disabled");
          }),
          (u.prototype.enableTextArea = function () {
            (0, f.default)(this.baseContainer)
              .find("textarea")
              .attr("placeholder", this.placeholder)
              .prop("disabled", !1),
              (0, f.default)(this.baseContainer)
                .find("#send")
                .removeClass("disabled"),
              (0, f.default)(this.baseContainer)
                .find(".pb-chat-toolbar-btn")
                .removeClass("pb-chat-toolbar-btn-disabled");
          }),
          (u.prototype.onMetadata = function (i) {
            i.message &&
              i.message.url &&
              (0, f.default)("[href='" + i.message.url + "']").each(function (
                e,
                t
              ) {
                if (i.message.image || i.message.logo) {
                  var n = (0, f.default)(t).find(".pb-rich-link-image");
                  n.append(
                    (0, f.default)("<img>", {
                      src: i.message.image || i.message.logo,
                    })
                  ),
                    n.show();
                }
                (0, f.default)(t)
                  .find(".pb-rich-link-title")
                  .text(i.message.title),
                  (0, f.default)(t)
                    .find(".pb-rich-link-description")
                    .text(i.message.description);
              });
          }),
          (u.prototype.processHistory = function (e) {
            if (e.length) {
              this.switchLoadingHistory(!0), (e = this.sortHistory(e));
              for (var t = 0; t < e.length; t++) {
                var n = e[t],
                  i = n.message.sender
                    ? n.message.sender.agent_image_url
                    : null,
                  o = n.message.sender
                    ? n.message.sender.agent_nickname ||
                      n.message.sender.agent_name
                    : null;
                switch (
                  ((n.originalDirection = n.direction),
                  (n.direction =
                    "inbound" === n.direction ? "outbound" : "inbound"),
                  n.message.type)
                ) {
                  case "text":
                    this.addChatMessage({
                      direction: n.direction,
                      message: n.message.message.text,
                      id: n.message.id,
                      interaction_id: n.message.interaction_id,
                      imageUrl: i,
                      agentName: o,
                    });
                    break;
                  case "postback":
                    this.addChatMessage({
                      direction: n.direction,
                      message:
                        n.message.message.title || n.message.message.text,
                      id: n.message.id,
                      interaction_id: n.message.interaction_id,
                      imageUrl: i,
                      agentName: o,
                    });
                    break;
                  case "buttons":
                    this.addButtonMessage(n.message);
                    break;
                  case "card":
                    this.addCardMessage({
                      message: { cards: n.message.message.cards },
                      id: n.message.id,
                      interaction_id: n.message.interaction_id,
                      imageUrl: i,
                      agentName: o,
                    });
                    break;
                  case "buttonCard":
                    this.addCardMessage({
                      message: { cards: [n.message.message] },
                      id: n.message.id,
                      interaction_id: n.message.interaction_id,
                      imageUrl: i,
                      agentName: o,
                    });
                    break;
                  case "quick_replies":
                    var r = t !== e.length - 1;
                    this.addQuickReplyMessage(
                      {
                        text: n.message.message.text,
                        quick_replies: n.message.message.quick_replies,
                        id: n.message.id,
                        interaction_id: n.message.interaction_id,
                      },
                      r,
                      i,
                      o
                    );
                    break;
                  case "attachment":
                    (n.message.message.direction = n.originalDirection),
                      this.addDownloadMessage(n.message.message);
                }
              }
              this.switchLoadingHistory(!1), this._finalizeLoadingHistory();
            }
          }),
          (u.prototype.switchLoadingHistory = function (e) {
            (this.loadingHistory = !!e), this.refreshHistoryLoadingIndicator();
          }),
          (u.prototype.sortHistory = function (e) {
            return e.sort(function (e, t) {
              return e.timestamp - t.timestamp;
            });
          }),
          (u.prototype.refreshHistoryLoadingIndicator = function () {
            if (this.loadingHistory)
              this.loadingHistoryIndicator ||
                ((this.loadingHistoryIndicator = (0, f.default)(
                  '<div class="pb-chat-history-indicator"></div>'
                )),
                this.loadingHistoryIndicator.append(
                  (0, f.default)(
                    "<span>" + this.loadingHistoryTitle + "</span>"
                  )
                ),
                this.loadingHistoryIndicator.insertAfter(
                  (0, f.default)(this.baseContainer).find("#messagesWrapper")
                ));
            else if (this.loadingHistoryIndicator) {
              var e = this;
              this.loadingHistoryIndicator
                .fadeOut(1500)
                .promise()
                .then(function () {
                  (0, f.default)(e.baseContainer)
                    .find("#messagesWrapper")
                    .remove(e.loadingHistoryIndicator),
                    (e.loadingHistoryIndicator = null);
                });
            }
          }),
          (u.prototype._onMessageWrapperScroll = function (e) {
            if (!this.loadingHistoryIndicator) {
              var t =
                e ||
                (0, f.default)(this.baseContainer)
                  .find("#messagesWrapper")
                  .scrollTop();
              c.localStorage("chat-last-scroll-position", t);
            }
          }),
          (u.prototype._finalizeLoadingHistory = function () {
            var e = c.localStorage("chat-last-scroll-position");
            if (e) {
              var t = (0, f.default)(this.baseContainer).find(
                "#messagesWrapper"
              );
              setTimeout(function () {
                t.scrollTop(e);
              }, 150);
            }
          }),
          (u.prototype.onSystemEvent = function (n) {
            var i = this;
            (n.messages || []).forEach(function (e) {
              if (e && e.message) {
                var t = e.message;
                switch (t.event_code) {
                  case "agent_intercepts_user":
                    return i._setupAgentTakeover(
                      n,
                      t.agent_name,
                      t.agent_nickname,
                      t.agent_image_url,
                      t.start_message
                    );
                  case "agent_abandon_user":
                    return i._setupAgentAbandon(t);
                  case "agent_lost":
                    return i._setupAgentDisconnection(t);
                  case "agent_reconnected":
                    return i._setupAgentReconnection(n);
                  case "intention_match":
                    return i._showIntentionMatch(n, t);
                  default:
                    console.log("Not supported event code:", t.event_code);
                }
              }
            });
          }),
          (u.prototype._addSystemMessage = function (e, t) {
            var n = {
                __id: Date.now(),
                systemEvent: e,
                agentName: this.agentName,
                imageUrl: this.agentImageUrl,
              },
              i = (0, f.default)(
                '<div class="pb-chat-direct-system-event-message">'
              );
            (this.incomingMessages[n.__id] = n),
              i.append(t),
              this.addMessageElement(i, n);
          }),
          (u.prototype._showIntentionMatch = function (e, t) {
            var n = "Intent recognized";
            return (
              "nlu" === t.mode
                ? (n += " (NLU match)")
                : "exact" === t.mode
                ? (n += " (exact match)")
                : ((n = "Intent not recognized"),
                  "built" !== t.build_status && (n += " (build in progress)")),
              this._addSystemMessage(e, n)
            );
          }),
          (u.prototype._setupAgentTakeover = function (e, t, n, i, o) {
            var r = o || this._getDefaultTakeoverStartMessage(t, n);
            (this.agentName = t),
              (this.agentNickname = n),
              (this.agentImageUrl = i),
              (this.agentId = e.agent_id),
              (this.agentSession = e.agent_session_id),
              (this.activity.socket = !0),
              this._replaceBotImage(),
              this._addSystemMessage(e, r);
          }),
          (u.prototype._getDefaultTakeoverStartMessage = function (e, t) {
            var n = "";
            return (
              this.agentName && this.agentName !== e
                ? (n +=
                    (this.agentNickname || this.agentName) +
                    " has been changed to " +
                    (t || e) +
                    " who")
                : (n += t || e),
              (n += " has now taken over this conversation")
            );
          }),
          (u.prototype._replaceBotImage = function () {
            (0, f.default)(".pb-chat-direct-chat-msg:last").hasClass(
              "pb-inbound-container"
            ) &&
              (0, f.default)(
                ".pb-inbound-container:last .pb-chat-direct-chat-img"
              ).replaceWith(
                this._getInboundImage(
                  this.agentImageUrl,
                  this.agentNickname || this.agentName
                )
              );
          }),
          (u.prototype._setupAgentAbandon = function (e) {
            var t =
              (this.agentNickname || this.agentName) +
              " has now left this conversation";
            this._addSystemMessage(e, t),
              (this.agentName = null),
              (this.agentNickname = null),
              (this.agentImageUrl = null),
              (this.agentId = null),
              (this.agentSession = null),
              this.checkUserActivity();
          }),
          (u.prototype._setupAgentDisconnection = function (e) {
            var t = this,
              n =
                e.text ||
                (this.agentNickname || this.agentName) +
                  " has currently lost connection, please wait to be reconnected";
            this._addSystemMessage(e, n),
              (this.agentDisconnectionTimer = setTimeout(function () {
                t._addSystemMessage.bind(t),
                  t._addSystemMessage(
                    e,
                    "".concat(
                      t.agentNickname || t.agentName,
                      " has not been able to reconnect. Requesting another agent"
                    )
                  ),
                  t.requestHelp.bind(t),
                  t.requestHelp("agent_not_show"),
                  (t.agentName = null),
                  (t.agentNickname = null),
                  (t.agentImageUrl = null),
                  (t.agentId = null),
                  (t.agentSession = null);
              }, 9e4));
          }),
          (u.prototype._setupAgentReconnection = function (e) {
            (this.agentId = e.agent_id),
              (this.agentSession = e.agent_session_id),
              this._addSystemMessage(
                e,
                e.text ||
                  (this.agentNickname || this.agentName) + " has reconnected"
              ),
              this.agentDisconnectionTimer &&
                (clearTimeout(this.agentDisconnectionTimer),
                (this.agentDisconnectionTimer = null));
          }),
          (u.prototype._logIncomingMessage = function (e) {
            var t = Date.now();
            return (this.incomingMessages[t] = e), t;
          }),
          (u.prototype.requestHelp = function (e) {
            var t = {
              event_code: e,
              agent_id: this.agentId,
              agent_session_id: this.agentSession,
            };
            this._callSend(t, "need_help");
          }),
          (u.prototype.onError = function (e) {
            this.addChatMessage({
              direction: "error",
              message: e.message.text,
              id: e.id,
            });
          }),
          (u.prototype.ping = function () {
            this.activity.socket && this._callSend({}, "ping");
          }),
          (u.prototype.sendMaintenance = function (e) {
            this.socketInitiated
              ? this._callSend({}, "maintenance", !1, { user_state: e })
              : (this.activity.outstandingMaintenanceUserState = e);
          }),
          (u.prototype.getFirstBrowserLanguage = function (e) {
            var t,
              n,
              i = [
                "languages",
                "language",
                "browserLanguage",
                "systemLanguage",
                "userLanguage",
              ],
              o = null;
            if (Array.isArray(e.languages))
              for (t = 0; t < e.languages.length; t++)
                if (
                  ((n = e.languages[t]),
                  !o && n.length && (o = n),
                  n && 2 < n.length)
                )
                  return n;
            for (t = 0; t < i.length; t++)
              if (
                (n = e[i[t]]) &&
                (!o && n.length && (o = n), n && 2 < n.length)
              )
                return n;
            return o;
          }),
          (u.prototype._markUserActivity = function () {
            (this.activity.lastUserActivity = Date.now()),
              this.checkUserActivity();
          }),
          (u.prototype._onVisibilityChange = function (e) {
            (this.activity.tabActive = "visible" === e.target.visibilityState),
              this.checkUserActivity();
          }),
          (u.prototype.checkUserActivity = function () {
            var e =
              this.activity.tabActive &&
              Date.now() <
                this.activity.lastUserActivity + 6e4 * this.userInactiveAfter;
            this.activity.socket !== e &&
              (e ? this._restoreActivityOnSocket() : this._deactivateSocket());
          }),
          (u.prototype._deactivateSocket = function () {
            this.agentSession ||
              ((this.activity.socket = !1), this.sendMaintenance("inactive"));
          }),
          (u.prototype._restoreActivityOnSocket = function () {
            this.agentSession ||
              ((this.activity.socket = !0), this.sendMaintenance("active"));
          }),
          (window.ConverseWebClient = u);
      },
      { bluebird: 1, jquery: 2, "slick-carousel": 4 },
    ],
  },
  {},
  [6]
);
