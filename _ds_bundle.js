/* @ds-bundle: {"format":3,"namespace":"BTCWalletsDesignSystem_4fe162","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"LeverageBadge","sourcePath":"components/badges/LeverageBadge.jsx"},{"name":"StatusDot","sourcePath":"components/badges/StatusDot.jsx"},{"name":"AccountCard","sourcePath":"components/cards/AccountCard.jsx"},{"name":"AccountAddCard","sourcePath":"components/cards/AccountCard.jsx"},{"name":"KPICard","sourcePath":"components/cards/KPICard.jsx"},{"name":"PositionRow","sourcePath":"components/cards/PositionRow.jsx"},{"name":"EvolutionChart","sourcePath":"components/chart/EvolutionChart.jsx"},{"name":"AllocationRing","sourcePath":"components/data/AllocationRing.jsx"},{"name":"ColorDot","sourcePath":"components/data/ColorDot.jsx"},{"name":"MoneyValue","sourcePath":"components/data/MoneyValue.jsx"},{"name":"PnLIndicator","sourcePath":"components/data/PnLIndicator.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"LongShortToggle","sourcePath":"components/forms/LongShortToggle.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SeriesChip","sourcePath":"components/forms/SeriesChip.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"f0598f0bd09a","components/badges/LeverageBadge.jsx":"123d86d675e3","components/badges/StatusDot.jsx":"9df7780fa6de","components/cards/AccountCard.jsx":"3bb454382a5a","components/cards/KPICard.jsx":"554f7adbc79f","components/cards/PositionRow.jsx":"7622b52ee638","components/chart/EvolutionChart.jsx":"3b4eb0dee9fc","components/data/AllocationRing.jsx":"43b122a65dd0","components/data/ColorDot.jsx":"1be6b2f14d74","components/data/MoneyValue.jsx":"5a05c1baf8d8","components/data/PnLIndicator.jsx":"4de318aca6ca","components/data/Sparkline.jsx":"44e54052f17c","components/forms/Button.jsx":"ac775c06e1cc","components/forms/Field.jsx":"9bf4c2dccffe","components/forms/IconButton.jsx":"f1c32752d160","components/forms/Input.jsx":"7ec3d9dc3f05","components/forms/LongShortToggle.jsx":"e117f1476ab0","components/forms/SegmentedControl.jsx":"57960aaf9b3a","components/forms/Select.jsx":"031462148487","components/forms/SeriesChip.jsx":"64ef05856f74","components/forms/Switch.jsx":"39ffd0e60b5d","components/overlay/Modal.jsx":"84b6dbe8d9d2"},"inlinedExternals":[],"unexposedExports":[{"name":"resolveIdColor","sourcePath":"components/data/ColorDot.jsx"}]} */

(() => {

const __ds_ns = (window.BTCWalletsDesignSystem_4fe162 = window.BTCWalletsDesignSystem_4fe162 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    fg: 'var(--text-secondary)',
    bg: 'var(--surface-elevated)',
    bd: 'var(--hairline)'
  },
  long: {
    fg: 'var(--gain)',
    bg: 'var(--gain-soft)',
    bd: 'transparent'
  },
  short: {
    fg: 'var(--loss)',
    bg: 'var(--loss-soft)',
    bd: 'transparent'
  },
  gain: {
    fg: 'var(--gain)',
    bg: 'var(--gain-soft)',
    bd: 'transparent'
  },
  loss: {
    fg: 'var(--loss)',
    bg: 'var(--loss-soft)',
    bd: 'transparent'
  },
  accent: {
    fg: 'var(--accent)',
    bg: 'var(--accent-soft)',
    bd: 'transparent'
  }
};

/**
 * Badge — small status label. Sentence case (no uppercase mono eyebrows).
 * `tone="long"` / `"short"` are the position-direction badges.
 */
function Badge({
  children,
  tone = 'neutral',
  // 'neutral' | 'long' | 'short' | 'gain' | 'loss' | 'accent'
  size = 'md',
  // 'sm' | 'md'
  dot = false,
  className = '',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const pad = size === 'sm' ? '1px 7px' : '3px 9px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: pad,
      borderRadius: 'var(--radius-full)',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      fontSize: fs,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.4,
      letterSpacing: 'var(--tracking-normal)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor',
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badges/LeverageBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LeverageBadge — compact leverage indicator, e.g. "10×". Escalade de risque :
 * ≤10× couleur d'identité du portefeuille (prop `color`), 11-20× warn (orange),
 * >20× loss (rouge).
 */
function LeverageBadge({
  value,
  // number, e.g. 10
  size = 'md',
  // 'sm' | 'md'
  color,
  // CSS color de l'identité du compte (palier ≤10×)
  className = '',
  style,
  ...rest
}) {
  const v = Number(value) || 0;
  const fg = v > 20 ? 'var(--loss)' : v > 10 ? 'var(--warn)' : color || 'var(--text-secondary)';
  const bg = v > 20 ? 'var(--loss-soft)' : v > 10 ? 'var(--warn-soft)' : color ? `color-mix(in srgb, ${color} 14%, transparent)` : 'var(--surface-active)';
  const pad = size === 'sm' ? '1px 6px' : '2px 8px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `num ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: pad,
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color: fg,
      fontSize: fs,
      fontWeight: 'var(--weight-bold)',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), v, '\u00d7');
}
Object.assign(__ds_scope, { LeverageBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/LeverageBadge.jsx", error: String((e && e.message) || e) }); }

// components/badges/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATUS = {
  fresh: 'var(--gain)',
  stale: 'var(--accent)',
  offline: 'var(--loss)',
  neutral: 'var(--text-muted)'
};

/**
 * StatusDot — price-freshness / connection indicator. Small colored point,
 * optional soft pulse for the live "fresh" state.
 */
function StatusDot({
  status = 'fresh',
  // 'fresh' | 'stale' | 'offline' | 'neutral'
  size = 8,
  pulse = false,
  label,
  className = '',
  style,
  ...rest
}) {
  const c = STATUS[status] || STATUS.neutral;
  const dotWrapStyle = {
    position: 'relative',
    display: 'inline-flex',
    flex: 'none'
  };
  const dot = /*#__PURE__*/React.createElement("span", {
    style: label ? dotWrapStyle : {
      ...dotWrapStyle,
      ...style
    },
    className: label ? undefined : className
  }, pulse && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: c,
      opacity: 0.5,
      animation: 'dsPulse 1.8s var(--ease) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: c,
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("style", null, '@keyframes dsPulse{0%{transform:scale(1);opacity:.5}70%{transform:scale(2.4);opacity:0}100%{opacity:0}}'));
  if (!label) return dot;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      ...style
    }
  }, rest), dot, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/data/ColorDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ID_COLORS = {
  blue: 'var(--c-id-blue)',
  cyan: 'var(--c-id-cyan)',
  violet: 'var(--c-id-violet)',
  fuchsia: 'var(--c-id-fuchsia)',
  magenta: 'var(--c-id-magenta)',
  slate: 'var(--c-id-slate)'
};

/** Resolve an account identity color name (or raw CSS color) to a value. */
function resolveIdColor(color) {
  return ID_COLORS[color] || color || 'var(--c-id-slate)';
}

/**
 * ColorDot — the account/wallet identity dot. Cool palette only, used as a
 * touch (never a fill). Same color is reused for a wallet across card,
 * dot and chart series.
 */
function ColorDot({
  color = 'slate',
  // palette name or raw CSS color
  size = 8,
  ring = false,
  // soft halo (e.g. active wallet)
  className = '',
  style,
  ...rest
}) {
  const c = resolveIdColor(color);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: c,
      boxShadow: ring ? `0 0 0 3px color-mix(in srgb, ${c} 22%, transparent)` : 'none',
      flex: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { resolveIdColor, ColorDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ColorDot.jsx", error: String((e && e.message) || e) }); }

// components/data/AllocationRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AllocationRing — symbolizes a position's size as a share of the account's
 * available cash. The arc fills clockwise and carries the ACCOUNT IDENTITY
 * color by default (so it reads as "this account's cash"). When `risk` is on,
 * it escalates as a quiet warning: accent-amber at 75–100%, loss-red over 100%
 * (position larger than available cash → leveraged beyond the account).
 *
 * variant="ring"  → compact ring with the % inside (dense rows, tables).
 * variant="pill"  → ring + value + caption (cards, forms).
 */
function AllocationRing({
  percent = 0,
  color = 'slate',
  // account identity color name or raw CSS color
  variant = 'ring',
  // 'ring' | 'pill'
  size = 'md',
  // 'sm' | 'md'
  caption = 'of cash',
  risk = true,
  showValue = true,
  className = '',
  style,
  ...rest
}) {
  const pct = Number(percent) || 0;
  const dims = size === 'sm' ? {
    dim: 30,
    sw: 3,
    fs: 10
  } : {
    dim: 38,
    sw: 3.5,
    fs: 11
  };
  const {
    dim,
    sw,
    fs
  } = dims;
  const r = (dim - sw) / 2;
  const c = dim / 2;
  const circ = 2 * Math.PI * r;
  const frac = Math.max(0, Math.min(pct, 100)) / 100;

  // Color: identity by default; risk escalation overrides only when tense.
  // Identity color by default; escalates straight to loss-red at ≥75%.
  // (The app caps investment at available cash, so >100% is impossible.)
  let arc = __ds_scope.resolveIdColor(color);
  if (risk && pct >= 75) arc = 'var(--loss)';

  // Both variants show the value (with %) inside the ring. The pill variant
  // just adds the caption beside it — no duplicated number.
  const valueInside = showValue;
  const ring = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: dim,
    height: dim,
    viewBox: `0 0 ${dim} ${dim}`,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: c,
    cy: c,
    r: r,
    fill: "none",
    stroke: "var(--surface-active)",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("circle", {
    cx: c,
    cy: c,
    r: r,
    fill: "none",
    stroke: arc,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeDasharray: circ,
    strokeDashoffset: circ * (1 - frac),
    style: {
      transition: 'stroke-dashoffset var(--motion-base) var(--ease), stroke var(--motion-fast) var(--ease)'
    }
  })), valueInside && /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      position: 'absolute',
      display: 'inline-flex',
      alignItems: 'baseline',
      fontSize: fs,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums slashed-zero',
      letterSpacing: '-0.02em'
    }
  }, Math.round(pct), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7em',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)',
      marginLeft: '1px'
    }
  }, "%")));
  if (variant === 'ring') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      role: "img",
      "aria-label": `Position size ${Math.round(pct)}% of available cash`,
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), ring);
  }

  // pill
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    role: "img",
    "aria-label": `Position size ${Math.round(pct)}% of available cash`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '9px',
      padding: '5px 12px 5px 6px',
      background: 'var(--surface-elevated)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-full)',
      ...style
    }
  }, rest), ring, caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, caption));
}
Object.assign(__ds_scope, { AllocationRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/AllocationRing.jsx", error: String((e && e.message) || e) }); }

// components/data/MoneyValue.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MoneyValue — the canonical monetary number.
 * Integer at full weight/contrast, decimals dimmed, currency suffix dimmed,
 * optional sign and gain/loss color. Always tabular so columns align.
 */
function MoneyValue({
  value,
  currency = 'USDC',
  decimals = 2,
  signed = false,
  colored = 'none',
  // 'none' | 'pnl' | 'accent'
  size = 'md',
  // 'sm' | 'md' | 'lg' | 'xl'
  showCurrency = true,
  className = '',
  style,
  ...rest
}) {
  const num = Number(value) || 0;
  const neg = num < 0;
  const abs = Math.abs(num);
  const sizeMap = {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-xl)',
    xl: 'var(--text-3xl)'
  };
  let color = 'var(--text-primary)';
  if (colored === 'pnl') color = neg ? 'var(--loss)' : 'var(--gain)';else if (colored === 'accent') color = 'var(--accent)';
  const intStr = Math.floor(abs).toLocaleString('en-US');
  const decStr = decimals > 0 ? abs.toFixed(decimals).split('.')[1] : null;
  const sign = neg ? '\u2212' : signed ? '+' : '';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `num ${className}`,
    style: {
      fontFamily: 'var(--font-numeric)',
      fontVariantNumeric: 'tabular-nums lining-nums slashed-zero',
      fontFeatureSettings: 'var(--num-features)',
      fontSize: sizeMap[size] || sizeMap.md,
      fontWeight: 'var(--weight-semibold)',
      color,
      whiteSpace: 'nowrap',
      letterSpacing: 'var(--tracking-tight)',
      ...style
    }
  }, rest), sign && /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: '0.05em'
    }
  }, sign), /*#__PURE__*/React.createElement("span", null, intStr), decStr != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, ".", decStr), showCurrency && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)',
      fontSize: '0.72em',
      marginLeft: '0.4em'
    }
  }, currency));
}
Object.assign(__ds_scope, { MoneyValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MoneyValue.jsx", error: String((e && e.message) || e) }); }

// components/data/PnLIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PnLIndicator — a compact gain/loss chip with directional arrow.
 * Shows a signed amount and/or percentage with the right semantic color.
 */
function PnLIndicator({
  value,
  // numeric PnL (drives sign + color)
  percent,
  // optional % to display
  amount,
  // optional absolute amount to display
  currency = 'USDC',
  variant = 'soft',
  // 'soft' | 'plain'
  size = 'md',
  // 'sm' | 'md'
  showArrow = true,
  className = '',
  style,
  ...rest
}) {
  const num = Number(value) || 0;
  const neg = num < 0;
  const color = neg ? 'var(--loss)' : 'var(--gain)';
  const bg = neg ? 'var(--loss-soft)' : 'var(--gain-soft)';
  const arrow = neg ? '\u2193' : '\u2191';
  const pad = size === 'sm' ? '2px 7px' : '3px 9px';
  const fs = size === 'sm' ? 'var(--text-xs)' : 'var(--text-sm)';
  const parts = [];
  if (amount != null) {
    const a = Math.abs(Number(amount));
    parts.push(`${a.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} ${currency}`);
  }
  if (percent != null) {
    parts.push(`${Math.abs(Number(percent)).toFixed(2)}%`);
  }
  if (parts.length === 0) {
    parts.push(`${Math.abs(num).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `num ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: variant === 'soft' ? pad : 0,
      borderRadius: 'var(--radius-full)',
      background: variant === 'soft' ? bg : 'transparent',
      color,
      fontSize: fs,
      fontWeight: 'var(--weight-semibold)',
      fontVariantNumeric: 'tabular-nums lining-nums slashed-zero',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), showArrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.9em'
    },
    "aria-hidden": "true"
  }, arrow), /*#__PURE__*/React.createElement("span", null, neg ? '\u2212' : '+', parts.join(' \u00b7 ')));
}
Object.assign(__ds_scope, { PnLIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PnLIndicator.jsx", error: String((e && e.message) || e) }); }

// components/cards/KPICard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KPICard — summary metric card: a small sentence-case label, a big number,
 * an optional gain/loss indicator, and an optional footer line. `sim` makes
 * it dashed to mark a simulation value.
 */
function KPICard({
  label,
  value,
  // number for MoneyValue, or a ReactNode
  currency = 'USDC',
  colored = 'none',
  // passes to MoneyValue: 'none' | 'pnl' | 'accent'
  pnl,
  // { value, percent } -> PnLIndicator
  footer,
  // ReactNode footer line (e.g. "Today +1.2%")
  sim = false,
  accent = false,
  // highlight the value in BTC orange
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: `1px ${sim ? 'dashed' : 'solid'} var(--hairline)`,
      borderRadius: 'var(--radius-lg)',
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), sim && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "Sim")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, typeof value === 'number' ? /*#__PURE__*/React.createElement(__ds_scope.MoneyValue, {
    value: value,
    currency: currency,
    size: "lg",
    colored: accent ? 'accent' : colored
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, value), pnl && /*#__PURE__*/React.createElement(__ds_scope.PnLIndicator, {
    value: pnl.value,
    percent: pnl.percent,
    size: "sm"
  })), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, footer));
}
Object.assign(__ds_scope, { KPICard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/KPICard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PositionRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PositionRow — a single open/closed position line: LONG/SHORT badge,
 * leverage, entry/size info, PnL, and optional action buttons. Designed to
 * sit in a borderless list separated by hairlines and whitespace.
 */
function PositionRow({
  direction = 'long',
  // 'long' | 'short'
  leverage,
  symbol = 'BTC',
  entry,
  // entry price (number)
  size,
  // notional / size (number)
  pnl,
  // PnL value (number)
  pnlPct,
  // percent
  sim = false,
  outcome,
  // 'tp' | 'sl' | undefined — sim outcome selector state
  allocation,
  // optional: position size as % of available cash
  accountColor = 'slate',
  // account identity color for the allocation ring
  actions,
  // ReactNode (buttons)
  onClick,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    onClick: onClick,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-3) var(--space-2)',
      borderBottom: '1px solid var(--hairline)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: direction,
    size: "sm"
  }, direction === 'long' ? 'Long' : 'Short'), leverage != null && /*#__PURE__*/React.createElement(__ds_scope.LeverageBadge, {
    value: leverage,
    size: "sm"
  }), sim && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)',
      border: '1px dashed var(--hairline-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: '1px 5px'
    }
  }, "Sim")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, symbol), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      display: 'flex',
      gap: 12,
      fontVariantNumeric: 'tabular-nums'
    }
  }, entry != null && /*#__PURE__*/React.createElement("span", null, "Entry ", Number(entry).toLocaleString('en-US')), size != null && /*#__PURE__*/React.createElement("span", null, "Size ", Number(size).toLocaleString('en-US')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, outcome && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      color: outcome === 'tp' ? 'var(--gain)' : 'var(--loss)'
    }
  }, "@", outcome.toUpperCase()), allocation != null && /*#__PURE__*/React.createElement(__ds_scope.AllocationRing, {
    percent: allocation,
    color: accountColor,
    size: "sm"
  }), pnl != null && /*#__PURE__*/React.createElement(__ds_scope.PnLIndicator, {
    value: pnl,
    percent: pnlPct,
    size: "sm"
  }), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, actions)));
}
Object.assign(__ds_scope, { PositionRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PositionRow.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sparkline — a tiny trend line for account cards. SVG, no axes, no labels.
 * Colored by the account identity color; gently fades to nothing at the base.
 */
function Sparkline({
  data = [],
  // array of numbers
  color = 'slate',
  // account color name or raw CSS color
  width = 120,
  height = 32,
  strokeWidth = 1.5,
  fill = true,
  sim = false,
  // simulation = dashed stroke
  className = '',
  style,
  ...rest
}) {
  const c = __ds_scope.resolveIdColor(color);
  const pts = data.length ? data : [0, 0];
  const min = Math.min(...pts);
  const max = Math.max(...pts);
  const range = max - min || 1;
  const stepX = width / Math.max(pts.length - 1, 1);
  const gid = React.useId ? React.useId().replace(/:/g, '') : 'sk' + Math.random().toString(36).slice(2);
  const coords = pts.map((v, i) => {
    const x = i * stepX;
    const y = height - (v - min) / range * (height - strokeWidth * 2) - strokeWidth;
    return [x, y];
  });
  const line = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `${line} L${width},${height} L0,${height} Z`;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      overflow: 'visible',
      ...style
    }
  }, rest), fill && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: c,
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: c,
    stopOpacity: "0"
  }))), fill && /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#${gid})`
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: c,
    strokeWidth: strokeWidth,
    strokeLinejoin: "round",
    strokeLinecap: "round",
    strokeDasharray: sim ? '3 3' : undefined
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/cards/AccountCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AccountCard — a wallet card. Colored left side-bar + dot identify the
 * account; sparkline shows the trend; metrics row shows value / cash /
 * unrealized. `sim` renders the card dashed for simulation scenarios.
 */
function AccountCard({
  name,
  color = 'slate',
  // account identity color
  value,
  // total value (number)
  cash,
  // available cash (number)
  unrealized,
  // unrealized PnL (number)
  unrealizedPct,
  // percent
  spark = [],
  // sparkline series
  positions,
  // optional count when no sparkline
  date,
  // optional date label
  sim = false,
  active = false,
  onClick,
  className = '',
  style,
  ...rest
}) {
  const c = __ds_scope.resolveIdColor(color);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    onClick: onClick,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-5)',
      paddingLeft: 'calc(var(--space-5) + 3px)',
      background: 'var(--surface-card)',
      border: `1px ${sim ? 'dashed' : 'solid'} ${active ? 'var(--hairline-strong)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-lg)',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      transition: 'border-color var(--motion-fast) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 3,
      background: c
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: c,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name)), sim && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, "Sim")), spark && spark.length > 1 ? /*#__PURE__*/React.createElement(__ds_scope.Sparkline, {
    data: spark,
    color: color,
    width: 260,
    height: 36,
    sim: sim,
    style: {
      width: '100%'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      display: 'flex',
      gap: 10
    }
  }, positions != null && /*#__PURE__*/React.createElement("span", null, positions, " position", positions === 1 ? '' : 's'), date && /*#__PURE__*/React.createElement("span", null, date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Value"
  }, /*#__PURE__*/React.createElement(__ds_scope.MoneyValue, {
    value: value,
    size: "sm",
    showCurrency: false
  })), /*#__PURE__*/React.createElement(Metric, {
    label: "Cash"
  }, /*#__PURE__*/React.createElement(__ds_scope.MoneyValue, {
    value: cash,
    size: "sm",
    showCurrency: false
  })), /*#__PURE__*/React.createElement(Metric, {
    label: "Unrealized"
  }, unrealized != null ? /*#__PURE__*/React.createElement(__ds_scope.PnLIndicator, {
    value: unrealized,
    percent: unrealizedPct,
    variant: "plain",
    size: "sm",
    showArrow: false
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u2014"))));
}
function Metric({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, children));
}

/**
 * AccountAddCard — the dashed "+ Create account" placeholder card.
 */
function AccountAddCard({
  label = 'Create account',
  onClick,
  className = '',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      minHeight: 132,
      padding: 'var(--space-5)',
      background: 'transparent',
      border: `1px dashed ${hover ? 'var(--accent)' : 'var(--hairline-strong)'}`,
      borderRadius: 'var(--radius-lg)',
      color: hover ? 'var(--accent)' : 'var(--text-secondary)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      transition: 'color var(--motion-fast) var(--ease), border-color var(--motion-fast) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), label);
}
Object.assign(__ds_scope, { AccountCard, AccountAddCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/AccountCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action element. Variants: primary (BTC accent),
 * secondary (surface), ghost (text), danger. Soft radius, subtle states,
 * no brutalist offset shadow.
 */
function Button({
  children,
  variant = 'secondary',
  // 'primary' | 'secondary' | 'ghost' | 'danger'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  full = false,
  className = '',
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      h: 30,
      px: '10px',
      fs: 'var(--text-sm)',
      gap: '6px'
    },
    md: {
      h: 36,
      px: '14px',
      fs: 'var(--text-base)',
      gap: '8px'
    },
    lg: {
      h: 44,
      px: '18px',
      fs: 'var(--text-md)',
      gap: '8px'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast, #1A1206)',
      border: '1px solid transparent',
      '--hover-bg': 'var(--accent-hover)',
      '--press-bg': 'var(--accent-press)'
    },
    secondary: {
      background: 'var(--surface-elevated)',
      color: 'var(--text-primary)',
      border: '1px solid var(--hairline)',
      '--hover-bg': 'var(--surface-active)',
      '--press-bg': 'var(--surface-active)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
      '--hover-bg': 'var(--surface-elevated)',
      '--press-bg': 'var(--surface-active)'
    },
    danger: {
      background: 'var(--loss-soft)',
      color: 'var(--loss)',
      border: '1px solid transparent',
      '--hover-bg': 'color-mix(in srgb, var(--loss) 22%, transparent)',
      '--press-bg': 'color-mix(in srgb, var(--loss) 28%, transparent)'
    }
  };
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled || loading,
    className: className,
    onMouseEnter: e => {
      if (!disabled && !loading) e.currentTarget.style.background = v['--hover-bg'];
    },
    onMouseLeave: e => {
      if (!disabled && !loading) e.currentTarget.style.background = v.background;
    },
    onMouseDown: e => {
      if (!disabled && !loading) e.currentTarget.style.background = v['--press-bg'];
    },
    onMouseUp: e => {
      if (!disabled && !loading) e.currentTarget.style.background = v['--hover-bg'];
    },
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}`,
      borderRadius: 'var(--radius-md)',
      background: v.background,
      color: v.color,
      border: v.border,
      fontSize: s.fs,
      fontWeight: 'var(--weight-semibold)',
      fontFamily: 'var(--font-sans)',
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--motion-fast) var(--ease), opacity var(--motion-fast) var(--ease)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconLeft, children, !loading && iconRight);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'dsSpin 0.7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes dsSpin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — label + control wrapper with optional help / error text.
 * Sentence-case label (no uppercase mono eyebrow).
 */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      marginLeft: 3
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--loss)'
    }
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square button for a single glyph (refresh, more, close, plus).
 * Pass an icon node (e.g. an inline SVG or a Lucide icon) as children.
 */
function IconButton({
  children,
  variant = 'ghost',
  // 'ghost' | 'secondary' | 'primary'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  active = false,
  disabled = false,
  label,
  // accessible label
  className = '',
  style,
  ...rest
}) {
  const sizes = {
    sm: 28,
    md: 34,
    lg: 40
  };
  const dim = sizes[size] || sizes.md;
  const base = {
    ghost: {
      bg: 'transparent',
      fg: 'var(--text-secondary)',
      bd: 'transparent'
    },
    secondary: {
      bg: 'var(--surface-elevated)',
      fg: 'var(--text-primary)',
      bd: 'var(--hairline)'
    },
    primary: {
      bg: 'var(--accent)',
      fg: 'var(--accent-contrast, #1A1206)',
      bd: 'transparent'
    }
  }[variant] || {
    bg: 'transparent',
    fg: 'var(--text-secondary)',
    bd: 'transparent'
  };
  const fg = active ? 'var(--accent)' : base.fg;
  const bg = active ? 'var(--accent-soft)' : base.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    className: className,
    onMouseEnter: e => {
      if (!disabled && variant === 'ghost') e.currentTarget.style.background = active ? 'color-mix(in srgb, var(--accent) 18%, transparent)' : 'var(--surface-elevated)';
    },
    onMouseLeave: e => {
      if (!disabled && variant === 'ghost') e.currentTarget.style.background = bg;
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: bg,
      color: fg,
      border: `1px solid ${base.bd}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--motion-fast) var(--ease), color var(--motion-fast) var(--ease)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text / number / date input. Soft radius, hairline border that
 * brightens to accent on focus. `invalid` shows the error border.
 * Optional `prefix` / `suffix` adornments (e.g. "USDC").
 */
function Input({
  invalid = false,
  prefix,
  suffix,
  size = 'md',
  // 'sm' | 'md'
  numeric = false,
  className = '',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 32 : 38;
  const border = invalid ? 'var(--loss)' : focus ? 'var(--accent)' : 'var(--hairline)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: h,
      background: 'var(--surface-canvas)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--motion-fast) var(--ease), box-shadow var(--motion-fast) var(--ease)',
      overflow: 'hidden',
      ...style
    }
  }, prefix != null && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 12,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    className: `${numeric ? 'num' : ''} ${className}`,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      padding: '0 12px',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontVariantNumeric: numeric ? 'tabular-nums slashed-zero' : undefined
    }
  }, rest)), suffix != null && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingRight: 12,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/LongShortToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LongShortToggle — the position direction selector. Two exclusive options;
 * Long fills green, Short fills red when selected.
 */
function LongShortToggle({
  value = 'long',
  // 'long' | 'short'
  onChange,
  size = 'md',
  // 'sm' | 'md'
  full = false,
  className = '',
  style,
  ...rest
}) {
  const h = size === 'sm' ? 32 : 38;
  const opts = [{
    value: 'long',
    label: 'Long',
    fg: 'var(--gain)',
    bg: 'var(--gain-soft)'
  }, {
    value: 'short',
    label: 'Short',
    fg: 'var(--loss)',
    bg: 'var(--loss-soft)'
  }];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "radiogroup",
    style: {
      display: full ? 'grid' : 'inline-grid',
      gridAutoFlow: 'column',
      gridAutoColumns: full ? '1fr' : 'minmax(84px, auto)',
      gap: '2px',
      padding: '2px',
      height: h,
      background: 'var(--surface-card)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), opts.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": active,
      onClick: () => onChange && onChange(o.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        height: '100%',
        padding: '0 14px',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        background: active ? o.bg : 'transparent',
        color: active ? o.fg : 'var(--text-secondary)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        cursor: 'pointer',
        transition: 'all var(--motion-fast) var(--ease)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, o.value === 'long' ? '\u2191' : '\u2193'), o.label);
  }));
}
Object.assign(__ds_scope, { LongShortToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/LongShortToggle.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SegmentedControl — mutually exclusive options in a single track
 * (USDC/% toggle, time ranges 30D / 90D / 1Y / All). The selected segment
 * gets a raised surface; no borders between segments.
 */
function SegmentedControl({
  options = [],
  // [{ value, label }] or ['30D','90D',...]
  value,
  onChange,
  size = 'md',
  // 'sm' | 'md'
  full = false,
  className = '',
  style,
  ...rest
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const h = size === 'sm' ? 30 : 36;
  const fs = size === 'sm' ? 'var(--text-xs)' : 'var(--text-sm)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "tablist",
    style: {
      display: full ? 'grid' : 'inline-grid',
      gridAutoFlow: 'column',
      gridAutoColumns: full ? '1fr' : 'auto',
      gap: '2px',
      padding: '2px',
      height: h,
      background: 'var(--surface-card)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), opts.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(o.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 12px',
        height: '100%',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        background: active ? 'var(--surface-active)' : 'transparent',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-sans)',
        fontSize: fs,
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        cursor: 'pointer',
        transition: 'background var(--motion-fast) var(--ease), color var(--motion-fast) var(--ease)',
        whiteSpace: 'nowrap'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native select styled to match Input, with a chevron.
 */
function Select({
  invalid = false,
  size = 'md',
  children,
  className = '',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 32 : 38;
  const border = invalid ? 'var(--loss)' : focus ? 'var(--accent)' : 'var(--hairline)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: h,
      background: 'var(--surface-canvas)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--motion-fast) var(--ease), box-shadow var(--motion-fast) var(--ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: className,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: 1,
      height: '100%',
      padding: '0 34px 0 12px',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      cursor: 'pointer'
    }
  }, rest), children), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: 'absolute',
      right: 11,
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/SeriesChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SeriesChip — toggle button for a chart series (Total / Cash / per account).
 * Carries the series' color dot; dims when off.
 */
function SeriesChip({
  label,
  color = 'slate',
  // account color name or raw CSS color; omit for accent series
  active = true,
  onChange,
  value,
  // optional numeric value shown after label
  className = '',
  style,
  ...rest
}) {
  const c = __ds_scope.resolveIdColor(color);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": active,
    onClick: () => onChange && onChange(!active),
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      height: 28,
      padding: '0 11px',
      borderRadius: 'var(--radius-full)',
      background: active ? 'var(--surface-elevated)' : 'transparent',
      border: `1px solid ${active ? 'var(--hairline)' : 'transparent'}`,
      color: active ? 'var(--text-primary)' : 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      cursor: 'pointer',
      opacity: active ? 1 : 0.6,
      transition: 'all var(--motion-fast) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: active ? c : 'var(--text-muted)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      color: 'var(--text-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value));
}
Object.assign(__ds_scope, { SeriesChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SeriesChip.jsx", error: String((e && e.message) || e) }); }

// components/chart/EvolutionChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EvolutionChart — multi-series portfolio evolution line chart. SVG grid +
 * axes + 0 reference line, crosshair tooltip on hover, series toggle chips,
 * unit (USDC/%) and range segmented controls, and an empty state.
 *
 * series: [{ key, name, color, data: number[], sim?: boolean }]
 */
function EvolutionChart({
  series = [],
  labels = [],
  // x-axis labels (e.g. dates or steps)
  unit = 'USDC',
  ranges = ['30D', '90D', '1Y', 'All'],
  range = '90D',
  onUnitChange,
  onRangeChange,
  height = 280,
  title = 'Evolution',
  emptyLabel = 'No history yet',
  emptyAction,
  // ReactNode (button)
  className = '',
  style,
  ...rest
}) {
  const [hidden, setHidden] = React.useState({});
  const [hover, setHover] = React.useState(null); // {i, x}
  const wrapRef = React.useRef(null);
  const visible = series.filter(s => !hidden[s.key]);
  const isEmpty = series.length === 0 || series.every(s => !s.data || s.data.length === 0);
  const W = 760,
    H = height - 80; // inner plot height area (header+chips ~80)
  const padL = 8,
    padR = 8,
    padT = 10,
    padB = 22;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const all = visible.flatMap(s => s.data || []);
  let min = all.length ? Math.min(...all, 0) : 0;
  let max = all.length ? Math.max(...all, 0) : 1;
  if (min === max) {
    max = min + 1;
  }
  const n = Math.max(...visible.map(s => (s.data || []).length), 1);
  const xAt = i => padL + plotW * (n <= 1 ? 0.5 : i / (n - 1));
  const yAt = v => padT + plotH - (v - min) / (max - min) * plotH;
  const zeroY = yAt(0);
  const pathFor = data => data.map((v, i) => `${i === 0 ? 'M' : 'L'}${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}`).join(' ');
  function handleMove(e) {
    if (isEmpty) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * W;
    const i = Math.round((x - padL) / plotW * (n - 1));
    const ci = Math.max(0, Math.min(n - 1, i));
    setHover({
      i: ci,
      x: xAt(ci)
    });
  }
  const gridLines = 4;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SegmentedControl, {
    size: "sm",
    options: ['USDC', '%'],
    value: unit,
    onChange: onUnitChange
  }), /*#__PURE__*/React.createElement(__ds_scope.SegmentedControl, {
    size: "sm",
    options: ranges,
    value: range,
    onChange: onRangeChange
  }))), isEmpty ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: H + padT,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 14l3-3 3 2 4-5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "3 3"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, emptyLabel), emptyAction) : /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      position: 'relative',
      width: '100%'
    },
    onMouseMove: handleMove,
    onMouseLeave: () => setHover(null)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    viewBox: `0 0 ${W} ${H}`,
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, Array.from({
    length: gridLines + 1
  }).map((_, k) => {
    const y = padT + plotH * k / gridLines;
    return /*#__PURE__*/React.createElement("line", {
      key: k,
      x1: padL,
      y1: y,
      x2: W - padR,
      y2: y,
      stroke: "var(--hairline)",
      strokeWidth: "1"
    });
  }), min < 0 && max > 0 && /*#__PURE__*/React.createElement("line", {
    x1: padL,
    y1: zeroY,
    x2: W - padR,
    y2: zeroY,
    stroke: "var(--hairline-strong)",
    strokeWidth: "1",
    strokeDasharray: "4 4"
  }), visible.map(s => /*#__PURE__*/React.createElement("path", {
    key: s.key,
    d: pathFor(s.data || []),
    fill: "none",
    stroke: __ds_scope.resolveIdColor(s.color),
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    strokeDasharray: s.sim ? '5 4' : undefined
  })), hover && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: hover.x,
    y1: padT,
    x2: hover.x,
    y2: padT + plotH,
    stroke: "var(--hairline-strong)",
    strokeWidth: "1"
  }), visible.map(s => {
    const v = (s.data || [])[hover.i];
    if (v == null) return null;
    return /*#__PURE__*/React.createElement("circle", {
      key: s.key,
      cx: hover.x,
      cy: yAt(v),
      r: "3.5",
      fill: "var(--surface-card)",
      stroke: __ds_scope.resolveIdColor(s.color),
      strokeWidth: "2"
    });
  }))), hover && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: `${hover.x / W * 100}%`,
      transform: `translateX(${hover.x > W / 2 ? '-105%' : '5%'})`,
      pointerEvents: 'none',
      background: 'var(--surface-elevated)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-3)',
      minWidth: 132
    }
  }, labels[hover.i] && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, labels[hover.i]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, visible.map(s => {
    const v = (s.data || [])[hover.i];
    return /*#__PURE__*/React.createElement("div", {
      key: s.key,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 'var(--text-xs)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: __ds_scope.resolveIdColor(s.color),
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-secondary)',
        flex: 1
      }
    }, s.name), /*#__PURE__*/React.createElement("span", {
      className: "num",
      style: {
        color: 'var(--text-primary)',
        fontWeight: 'var(--weight-semibold)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, v == null ? '—' : v.toLocaleString('en-US', {
      maximumFractionDigits: unit === '%' ? 2 : 0
    }), unit === '%' ? '%' : ''));
  })))), series.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, series.map(s => /*#__PURE__*/React.createElement(__ds_scope.SeriesChip, {
    key: s.key,
    label: s.name,
    color: s.color,
    active: !hidden[s.key],
    onChange: on => setHidden(h => ({
      ...h,
      [s.key]: !on
    }))
  }))));
}
Object.assign(__ds_scope, { EvolutionChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chart/EvolutionChart.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle. Accent track when on.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  // 'sm' | 'md'
  label,
  className = '',
  style,
  ...rest
}) {
  const dims = size === 'sm' ? {
    w: 34,
    h: 20,
    k: 14
  } : {
    w: 40,
    h: 24,
    k: 18
  };
  const switchStyle = {
    position: 'relative',
    flex: 'none',
    width: dims.w,
    height: dims.h,
    borderRadius: 'var(--radius-full)',
    background: checked ? 'var(--accent)' : 'var(--surface-active)',
    border: 'none',
    padding: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--motion-base) var(--ease)'
  };
  const sw = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    className: label ? undefined : className,
    style: label ? switchStyle : {
      ...switchStyle,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (dims.h - dims.k) / 2,
      left: checked ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: checked ? 'var(--accent-contrast, #fff)' : '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--motion-base) var(--ease)'
    }
  }));
  if (!label) return sw;
  return /*#__PURE__*/React.createElement("label", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), sw, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal — the modal shell: scrim (dim + blur), centered panel with header
 * (title + close ×) and body. Soft radius, subtle elevation. `width="narrow"`
 * for compact forms.
 */
function Modal({
  open = true,
  title,
  onClose,
  width = 'default',
  // 'narrow' | 'default' | 'wide'
  footer,
  children,
  className = '',
  style,
  ...rest
}) {
  if (!open) return null;
  const maxW = {
    narrow: 420,
    default: 560,
    wide: 760
  }[width] || 560;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'var(--scrim)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      animation: 'dsFade var(--motion-base) var(--ease)'
    },
    onClick: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: '100%',
      maxWidth: maxW,
      maxHeight: '88vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-elevated)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      animation: 'dsRise var(--motion-base) var(--ease-out)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) var(--space-5) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      flex: 'none',
      background: 'transparent',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-secondary)',
      cursor: 'pointer'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--surface-active)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-5) var(--space-5)',
      overflowY: 'auto'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-5)',
      borderTop: '1px solid var(--hairline)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, '@keyframes dsFade{from{opacity:0}to{opacity:1}}@keyframes dsRise{from{opacity:0;transform:translateY(8px) scale(.99)}to{opacity:1;transform:none}}'));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.LeverageBadge = __ds_scope.LeverageBadge;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.AccountCard = __ds_scope.AccountCard;

__ds_ns.AccountAddCard = __ds_scope.AccountAddCard;

__ds_ns.KPICard = __ds_scope.KPICard;

__ds_ns.PositionRow = __ds_scope.PositionRow;

__ds_ns.EvolutionChart = __ds_scope.EvolutionChart;

__ds_ns.AllocationRing = __ds_scope.AllocationRing;

__ds_ns.ColorDot = __ds_scope.ColorDot;

__ds_ns.MoneyValue = __ds_scope.MoneyValue;

__ds_ns.PnLIndicator = __ds_scope.PnLIndicator;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.LongShortToggle = __ds_scope.LongShortToggle;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SeriesChip = __ds_scope.SeriesChip;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Modal = __ds_scope.Modal;

})();
