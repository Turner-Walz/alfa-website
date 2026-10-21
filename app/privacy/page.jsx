import { EMAIL, PHONE_DISPLAY, PHONE_TEL, OPEN_GRAPH } from "../lib/site";
import { Footer } from "../components/sections";

const UPDATED = "October 21, 2026";

export const metadata = {
  title: "Privacy Policy",
  description: "How ALFA Drone Solutions handles information collected through this website.",
  alternates: { canonical: "/privacy" },
  openGraph: { ...OPEN_GRAPH, title: "Privacy Policy", url: "/privacy" },
};

const h2 = { fontSize: "1.25rem", fontWeight: 600, marginTop: 48, marginBottom: 12 };
const p = { marginBottom: 16 };
const ul = { margin: "0 0 16px", paddingLeft: 20, display: "grid", gap: 8 };

export default function PrivacyPage() {
  return (
    <>
    <main
      id="main"
      style={{ maxWidth: 680, margin: "0 auto", padding: "160px 24px 120px", lineHeight: 1.7 }}
    >
      <h1 style={{ fontSize: "clamp(2.25rem, 6vw, 3.5rem)", lineHeight: 1.1, marginBottom: 12 }}>
        Privacy Policy
      </h1>
      <p style={{ ...p, opacity: 0.6 }}>Last updated {UPDATED}</p>

      <p style={p}>
        This site is run by ALFA Drone Solutions LLC, doing business as A Look From Above, based in
        Cornville, Arizona. This page explains what information the site collects, why, and what
        you can do about it.
      </p>

      <h2 style={h2}>Information you send us</h2>
      <p style={p}>
        When you submit the quote form, we receive the details you enter, such as your name, email,
        phone number, and project information. The form is handled by Formspree, which filters spam
        and delivers your submission to our inbox. We use it only to respond to your inquiry, quote
        your project, and follow up about that work.
      </p>

      <h2 style={h2}>Information collected automatically</h2>
      <ul style={ul}>
        <li>
          <strong>Site analytics.</strong> We use Vercel Web Analytics to count visits and see which
          pages are viewed, which sites referred visitors, and general device and country
          information. It does not use cookies and does not identify you personally.
        </li>
        <li>
          <strong>Performance data.</strong> Vercel Speed Insights measures how quickly pages load
          so we can keep the site fast. It does not identify you personally.
        </li>
        <li>
          <strong>Hosting logs.</strong> Our host, Vercel, keeps standard server logs, including IP
          addresses, to operate and secure the site.
        </li>
      </ul>

      <h2 style={h2}>Embedded videos</h2>
      <p style={p}>
        Videos on this site are embedded from YouTube, which is owned by Google. YouTube may set
        cookies and collect viewing information when you play a video, as described in{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Google’s Privacy Policy
        </a>
        .
      </p>

      <h2 style={h2}>What we don’t do</h2>
      <p style={p}>
        We don’t sell or rent your information, and we don’t use advertising trackers. We share
        information only with the service providers named above, or when required by law.
      </p>

      <h2 style={h2}>Do Not Track</h2>
      <p style={p}>
        This site doesn’t track visitors across other websites, so browser Do Not Track signals
        don’t change how it works.
      </p>

      <h2 style={h2}>How long we keep it</h2>
      <p style={p}>
        We keep inquiry emails for as long as needed to respond, complete any work, and maintain
        normal business records.
      </p>

      <h2 style={h2}>Your choices</h2>
      <p style={p}>
        You can ask us to see, correct, or delete the information you’ve sent us, or to stop
        following up with you. Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call{" "}
        <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
      </p>

      <h2 style={h2}>Children</h2>
      <p style={p}>This site is not directed to children under 13, and we don’t knowingly collect their information.</p>

      <h2 style={h2}>Changes</h2>
      <p style={p}>
        If our practices change, we’ll update this page and the date at the top.
      </p>
    </main>
    <Footer />
    </>
  );
}
