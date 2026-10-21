"use client";

import { useEffect, useState } from "react";

// Bottom-left tracker: scroll progress plus the section currently in view.
// A section is active once its top passes 55% of the viewport height.
export default function Hud({ label, sections }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const targets = sections.map((s) => document.getElementById(s.id));
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0);
      const line = window.innerHeight * 0.55;
      let a = 0;
      targets.forEach((t, i) => {
        if (t && t.getBoundingClientRect().top <= line) a = i;
      });
      setActive(a);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <div className="hud" aria-label="Page sections">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 5, height: 5, borderRadius: 99, background: "var(--orange)" }} />
        <span className="c-orange">{label}</span>
        <span style={{ color: "var(--text-light)" }}>{String(Math.round(progress * 100)).padStart(2, "0")}%</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {sections.map((s, i) => (
          <a key={s.id} href={`#${s.id}`} className={i === active ? "is-active" : undefined}>
            {String(i + 1).padStart(2, "0")} {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
