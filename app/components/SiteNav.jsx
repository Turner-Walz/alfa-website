"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/", label: "[01] home" },
  { href: "/media", label: "[02] media" },
  { href: "/construction", label: "[03] documentation" },
];
const PAGES = new Set(LINKS.map((l) => l.href));

export default function SiteNav() {
  const pathname = usePathname();
  const navRef = useRef(null);
  // The menu is open only on the path it was opened on, so any navigation closes it.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const setOpen = (value) => setOpenOn(value ? pathname : null);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [panelTop, setPanelTop] = useState(60);

  // Every page has its own #contact form; anywhere else (404) goes home.
  const quoteHref = PAGES.has(pathname) ? "#contact" : "/#contact";

  // Dark + blurred once scrolled; hides on scroll down past 300px, returns on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setSolid(y > 24);
      if (y < 300) setHidden(false);
      else if (Math.abs(y - last) > 4) setHidden(y > last);
      last = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpenOn(null);
    const onResize = () => window.innerWidth >= 760 && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const toggle = () => {
    if (navRef.current) setPanelTop(Math.max(0, navRef.current.getBoundingClientRect().bottom));
    setOpen(!open);
  };

  const cls = ["nav", solid && "is-solid", open && "is-open", hidden && !open && "is-hidden"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav ref={navRef} className={cls} aria-label="Main">
        <Link href="/" className="nav-logo" aria-label="ALFA Drone Solutions home">
          <span style={{ fontSize: 21, fontWeight: 800, letterSpacing: "0.05em" }}>ALFA</span>
          <span className="mono" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted-d2)" }}>
            drone solutions
          </span>
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              style={{ color: pathname === l.href ? "var(--orange)" : "#c9c6bf" }}
            >
              {l.label}
            </Link>
          ))}
          <a data-magnet href={quoteHref} className="pill pill-solid nav-quote">
            get a quote ●
          </a>
        </div>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu-panel"
          onClick={toggle}
        >
          {open ? "close" : "menu"}
        </button>
      </nav>
      {open && (
        <div id="menu-panel" className="menu-panel" style={{ top: panelTop }}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <a href={quoteHref} onClick={() => setOpen(false)} style={{ color: "var(--orange)" }}>
            get a quote ●
          </a>
        </div>
      )}
    </>
  );
}
