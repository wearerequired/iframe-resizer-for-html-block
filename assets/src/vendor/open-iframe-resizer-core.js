// Vendored from https://github.com/wearerequired/open-iframe-resizer/tree/fix/resize-subsequent-navigation
// Temporary until fix is merged upstream
const I = () => typeof window < "u", B = () => {
  try {
    return window.self !== window.top;
  } catch {
    return !0;
  }
}, z = (e) => e instanceof HTMLIFrameElement, p = (e) => {
  window.document.readyState === "complete" ? e() : window.addEventListener("load", e, { once: !0 });
}, k = (e, t) => {
  t(), e.addEventListener("load", t, { once: !0 });
}, A = (e, t) => {
  const n = e.contentWindow?.document.readyState === "complete";
  return e.src !== "about:blank" && e.contentWindow?.location.href !== "about:blank" && n ? t() : e.addEventListener("load", t, { once: !0 });
}, W = () => ({ offsetSize: 0, checkOrigin: !0, enableLegacyLibSupport: !1 });
async function P(e) {
  try {
    return e.contentDocument?.URL === "about:blank" ? new Promise((n) => {
      e.addEventListener("load", () => n(e.contentDocument !== null), { once: !0 });
    }) : e.contentDocument !== null;
  } catch {
    return !1;
  }
}
const H = (e) => {
  try {
    const t = new URL(e.src).origin;
    if (t !== "about:blank")
      return t;
  } catch {
  }
  return null;
}, x = (e) => (Object.keys(e).forEach((t) => {
  e[t] === void 0 && delete e[t];
}), e), L = (e) => {
  const { height: t, width: n } = e.getBoundingClientRect();
  return { height: Math.ceil(t), width: Math.ceil(n) };
}, l = (e, t) => e ? t ? e.querySelector(t) : e.documentElement : null, O = (e, t) => {
  e && (t.bodyPadding && (e.body.style.padding = t.bodyPadding), t.bodyMargin && (e.body.style.margin = t.bodyMargin));
}, y = (e) => e <= 100 ? 100 : e <= 120 ? 1e3 : 1e4, F = () => "[iFrameSizer]ID:0:false:false:32:true:true::auto:::0:false:child:auto:true:::true:::false";
function N(e) {
  if (typeof e.data != "string" || !e.data.startsWith("[iFrameSizer]") || !e.data.endsWith("mutationObserver") && !e.data.endsWith("resizeObserver"))
    return null;
  const [t, n] = e.data.split(":"), i = +n;
  return i > 0 ? i : null;
}
const v = J();
let m = [];
const j = async (e, t) => {
  if (!I())
    return [];
  const n = { ...W(), ...x(e ?? {}) }, i = U(t), r = $(n, i);
  return Promise.all(
    i.map(async (s) => {
      const o = {
        iframe: s,
        settings: n,
        interactionState: { isHovered: !1 },
        initContext: { isInitialized: !1, retryAttempts: 0 }
      }, { unsubscribe: c, resize: u } = await q(o, r);
      return m.push(o), {
        unsubscribe: () => {
          c(), m = m.filter((f) => f.iframe !== s);
        },
        resize: u
      };
    })
  );
};
function U(e) {
  return typeof e == "string" ? Array.from(document.querySelectorAll(e)).filter(z) : e ? z(e) ? [e] : [] : Array.from(document.getElementsByTagName("iframe"));
}
function $(e, t) {
  if (Array.isArray(e.checkOrigin))
    return e.checkOrigin;
  if (!e.checkOrigin)
    return [];
  const n = [];
  for (const i of t) {
    const r = H(i);
    r && n.push(r);
  }
  return n;
}
async function q(e, t) {
  const n = await P(e.iframe), { unsubscribe: i, resize: r } = n ? G(e) : _(e, t), s = V(e);
  return {
    unsubscribe: () => {
      i(), s();
    },
    resize: r
  };
}
function _(e, t) {
  const {
    iframe: n,
    initContext: i,
    settings: { checkOrigin: r, enableLegacyLibSupport: s, targetElementSelector: o, bodyPadding: c, bodyMargin: u }
  } = e, f = (a) => {
    const D = a.origin === "null", C = !r || D || t.includes(a.origin);
    if (!(!(n.contentWindow === a.source) || !C)) {
      if (a.data?.type === "iframe-resized") {
        const { height: d } = a.data;
        d && h({ newHeight: d, registeredElement: e });
        return;
      }
      if (s) {
        const d = N(a);
        d !== null && h({ newHeight: d, registeredElement: e });
        return;
      }
    }
  };
  window.addEventListener("message", f);
  const T = s ? F() : { type: "iframe-child-init", targetElementSelector: o, bodyPadding: c, bodyMargin: u }, g = () => {
    k(n, () => n.contentWindow?.postMessage(T, "*")), i.retryAttempts++, i.retryTimeoutId = window.setTimeout(g, y(i.retryAttempts));
  }, w = () => {
    i.isInitialized && (i.isInitialized = !1, i.retryAttempts = 0, g());
  };
  return n.addEventListener("load", w), g(), {
    unsubscribe: () => {
      window.removeEventListener("message", f), n.removeEventListener("load", w);
    },
    resize: () => {
      const a = { type: "iframe-get-child-dimensions" };
      n.contentWindow?.postMessage(a, "*");
    }
  };
}
function G(e) {
  const { iframe: t, settings: n } = e, { targetElementSelector: i } = n;
  let r = 0;
  const s = () => {
    const o = l(t.contentDocument, i);
    if (!t.contentDocument || !o)
      return r++, setTimeout(s, y(r));
    O(t.contentDocument, n), v().observe(o);
  };
  return A(t, s), {
    unsubscribe: () => {
      const o = l(t.contentDocument, i);
      o && v().unobserve(o);
    },
    resize: () => R(e)
  };
}
function V({ iframe: e, interactionState: t, settings: n }) {
  if (!n.onBeforeIframeResize && !n.onIframeResize)
    return () => {
    };
  const i = () => {
    t.isHovered = !0;
  }, r = () => {
    t.isHovered = !1;
  };
  return e.addEventListener("mouseenter", i), e.addEventListener("mouseleave", r), () => {
    e.removeEventListener("mouseenter", i), e.removeEventListener("mouseleave", r);
  };
}
function J() {
  let e = null;
  return () => {
    if (!e) {
      const t = ({ target: n }) => {
        const i = m.find(({ iframe: r }) => r.contentDocument === n.ownerDocument);
        i && R(i);
      };
      e = new ResizeObserver((n) => n.forEach(t));
    }
    return e;
  };
}
function R(e) {
  const { iframe: t, settings: n } = e, i = l(t.contentDocument, n.targetElementSelector);
  if (!i)
    return;
  const { height: r } = L(i);
  r && h({ newHeight: r, registeredElement: e });
}
function h({ registeredElement: e, newHeight: t }) {
  const { iframe: n, settings: i, interactionState: r, initContext: s } = e;
  if (s.isInitialized || (s.isInitialized = !0, clearTimeout(s.retryTimeoutId)), i.onBeforeIframeResize?.({ iframe: n, interactionState: { ...r }, settings: { ...i }, observedHeight: t }) === !1)
    return;
  const o = n.getBoundingClientRect(), c = t + i.offsetSize;
  if (n.style.height = `${c}px`, !i.onIframeResize)
    return;
  const u = {
    iframe: n,
    settings: { ...i },
    interactionState: { ...r },
    previousRenderState: { rect: o },
    nextRenderState: { rect: n.getBoundingClientRect() }
  };
  i.onIframeResize(u);
}
const K = Y();
let b = !1, S;
Q();
function Q() {
  !I() || !B() || window.addEventListener("message", (e) => {
    if (e.data?.type === "iframe-child-init")
      return p(() => E(e));
    if (e.data?.type === "iframe-get-child-dimensions")
      return p(() => X(e));
  });
}
function E(e, t = 0) {
  const { targetElementSelector: n, bodyPadding: i, bodyMargin: r } = e.data, s = l(document, n);
  if (b || window.parent !== e.source)
    return;
  if (!s)
    return setTimeout(() => E(e, t + 1), y(t));
  O(document, { bodyMargin: r, bodyPadding: i }), S = n;
  const o = K();
  o.disconnect(), o.observe(s), b = !0;
}
function X(e) {
  const t = l(document, S);
  !b || window.parent !== e.source || !t || M(t);
}
function Y() {
  let e = null;
  return () => (e || (e = new ResizeObserver((t) => {
    t[0].target && M(t[0].target);
  })), e);
}
const M = (e) => {
  const { width: t, height: n } = L(e), i = {
    type: "iframe-resized",
    width: t,
    height: n
  };
  window.parent.postMessage(i, "*");
}, ee = ({ previousRenderState: e, nextRenderState: t, iframe: n }) => {
  document.activeElement === n && window.scrollBy(0, t.rect.bottom - e.rect.bottom);
};
export {
	j as initialize,
	Q as initializeChildListener,
	ee as updateParentScrollOnResize
};

