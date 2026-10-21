import Image from "next/image";
import Link from "next/link";
import QuoteForm from "./QuoteForm";
import { JsonLd, Split, SecHead } from "./ui";
import { EMAIL, INSTAGRAM, PHONE_DISPLAY, PHONE_TEL } from "../lib/site";

// Full-viewport dark hero shell: background media, gradient, content, bottom strip.
export function Hero({ background, gradient, children, bottom }) {
  return (
    <section id="top" className="hero dark">
      <div data-herobg className="hero-bg">
        {background}
      </div>
      <div style={{ position: "absolute", inset: 0, background: gradient }} />
      <div className="hero-inner">{children}</div>
      {bottom}
    </section>
  );
}

export function Field({ as = "input", ...props }) {
  const Tag = as;
  return <Tag className="field" aria-label={props.placeholder || props["aria-label"]} {...props} />;
}

export function FieldRow({ children }) {
  return (
    <div className="auto-grid" style={{ "--min": "180px", gap: 16 }}>
      {children}
    </div>
  );
}

export function ServiceSelect({ options }) {
  return (
    <select name="service" className="field" aria-label="Service" defaultValue={options[0]}>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

// Dark "● QUOTE LINE ●" band plus the copy column and the Formspree form.
export function ContactSection({ quoteline, label, heading, body, note, children }) {
  return (
    <section id="contact" className="dark" style={{ padding: "0 0 90px" }}>
      <div className="quoteline">
        <div>
          <span className="c-orange">●</span>
          <span>{quoteline}</span>
          <span className="c-orange">●</span>
        </div>
      </div>
      <div className="wrap px auto-grid" style={{ "--min": "320px", paddingTop: 80, gap: 60, alignItems: "start" }}>
        <div className="grid" style={{ gap: 26 }}>
          <span className="label c-orange">{label}</span>
          <Split style={{ fontSize: "clamp(36px,5vw,80px)", lineHeight: 0.93, letterSpacing: "-0.035em", maxWidth: "15ch" }}>
            {heading}
          </Split>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "var(--muted-d1)", maxWidth: "46ch", textWrap: "pretty" }}>{body}</p>
          <div className="grid mono" style={{ gap: 9, fontSize: 12, letterSpacing: "0.1em", color: "var(--muted-d2)" }}>
            <a href={`mailto:${EMAIL}`} style={{ color: "var(--text-light)" }}>{EMAIL}</a>
            <a href={INSTAGRAM} style={{ color: "var(--text-light)" }}>instagram — @alookfromabove_</a>
            <span>flagstaff, az · northern arizona</span>
          </div>
        </div>
        <QuoteForm note={note}>{children}</QuoteForm>
      </div>
    </section>
  );
}

// FAQ list plus matching FAQPage JSON-LD built from the same items.
export function Faq({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return (
    <section id="faq" className="paper px" style={{ color: "var(--text-dark)", padding: "0 var(--gutter) 120px" }}>
      <JsonLd data={schema} />
      <div className="wrap grid" style={{ gap: 40 }}>
        <SecHead label="05 / faq" />
        <h2 className="display" style={{ fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 0.96, letterSpacing: "-0.035em", maxWidth: "16ch" }}>
          Common questions
        </h2>
        <div className="faq grid" style={{ borderTop: "1px solid var(--paper-line)" }}>
          {items.map((it) => (
            <details key={it.q}>
              <summary>
                <span>{it.q}</span>
                <span className="plus" aria-hidden="true">+</span>
              </summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = {
  home: [{ href: "/media", label: "Media" }, { href: "/construction", label: "Documentation" }],
  media: [{ href: "/", label: "Home" }, { href: "/construction", label: "Documentation" }],
  construction: [{ href: "/", label: "Home" }, { href: "/media", label: "Media" }],
};

export function Footer({ current }) {
  const links = FOOTER_LINKS[current] || [
    { href: "/", label: "Home" },
    { href: "/media", label: "Media" },
    { href: "/construction", label: "Documentation" },
  ];
  return (
    <footer className="paper px" style={{ paddingTop: 64, paddingBottom: 52 }}>
      <div className="wrap grid" style={{ gap: 26, justifyItems: "center", textAlign: "center" }}>
        <Image
          src="/alfa-logo.png"
          alt="ALFA Drone Solutions — A Look From Above"
          width={200}
          height={97}
          sizes="200px"
          style={{ width: 200, maxWidth: "100%", height: "auto" }}
        />
        <div className="footer-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <a href={current ? "#contact" : "/#contact"}>Contact</a>
        </div>
        <span className="mono" style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--muted-l1)" }}>
          Serving Northern Arizona &amp; Phoenix · <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> ·{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a href={INSTAGRAM}>Instagram</a>
        </span>
        <span className="mono" style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--muted-l2)" }}>
          © 2026 ALFA Drone Solutions
          <br />a look from above
        </span>
      </div>
    </footer>
  );
}
