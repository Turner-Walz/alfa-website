import Link from "next/link";
import { Footer } from "./components/sections";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

const LINKS = [
  { href: "/", label: "[01] home" },
  { href: "/media", label: "[02] media" },
  { href: "/construction", label: "[03] documentation" },
];

export default function NotFound() {
  return (
    <>
      <main id="main" className="dark px" style={{ minHeight: "80svh", display: "grid", alignContent: "center", paddingTop: 150, paddingBottom: 100 }}>
        <div className="wrap grid" style={{ gap: 30, width: "100%" }}>
          <span className="label c-orange">● 404 / off the map</span>
          <h1 className="display" style={{ fontSize: "clamp(44px,8vw,128px)", lineHeight: 0.89, letterSpacing: "-0.04em", maxWidth: "14ch" }}>
            Nothing to see from up here
          </h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.55, color: "var(--muted-d1)", maxWidth: "48ch" }}>
            That page doesn&apos;t exist or has moved. Pick a heading:
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="pill pill-fill">{l.label}</Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
