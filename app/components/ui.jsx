import { Fragment } from "react";

// Heading whose words are pre-wrapped on the server for the split-text reveal,
// so the client never rewrites server-rendered markup.
export function Split({ as: Tag = "h2", children, className = "display", ...rest }) {
  const words = String(children).trim().split(/\s+/);
  return (
    <Tag data-split className={className} {...rest}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="sw">
            <span>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}

// "04 / recent work ———— aside" row used above most light sections.
export function SecHead({ label, children, style }) {
  return (
    <div className="sec-head" style={style}>
      <span className="label c-orange-l">{label}</span>
      <span className="rule" />
      {children}
    </div>
  );
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function Chips({ items }) {
  return (
    <div className="chips">
      {items.map((c) => (
        <span key={c}>{c}</span>
      ))}
    </div>
  );
}

export function Eyebrow({ items }) {
  return (
    <div className="eyebrow">
      <span className="c-orange">●</span>
      {items.map((it, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="eyebrow-rule" />}
          <span className={it.teal ? "c-teal" : undefined}>{it.text}</span>
        </Fragment>
      ))}
    </div>
  );
}

export function Marquee({ items, duration }) {
  const set = (hidden) => (
    <div className="marquee-set" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <Fragment key={t}>
          <span>{t}</span>
          <span className="c-orange">●</span>
        </Fragment>
      ))}
    </div>
  );
  return (
    <div className="ticker" style={{ padding: "22px 0" }}>
      <div data-marquee data-duration={duration} className="marquee">
        {set(false)}
        {set(true)}
      </div>
    </div>
  );
}
