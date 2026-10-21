"use client";

import { useRef, useState } from "react";
import { prefersReducedMotion, refreshScroll } from "../lib/motion";

const pad = (n) => String(n).padStart(2, "0");

// Filter pills for the server-rendered portfolio grid. Items are matched by
// [data-item][data-cat] inside the same <section>.
export default function PortfolioFilters({ filters, total }) {
  const ref = useRef(null);
  const [current, setCurrent] = useState("all");
  const [shown, setShown] = useState(total);

  const select = (cat) => {
    setCurrent(cat);
    const items = ref.current?.closest("section")?.querySelectorAll("[data-item]") || [];
    let count = 0;
    items.forEach((it) => {
      const match = cat === "all" || it.dataset.cat === cat;
      it.hidden = !match;
      if (!match) return;
      count++;
      if (!prefersReducedMotion())
        it.animate(
          [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "none" }],
          { duration: 550, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
        );
    });
    setShown(count);
    refreshScroll();
  };

  return (
    <div ref={ref} style={{ display: "flex", flexWrap: "wrap", gap: 9, marginBottom: 34, alignItems: "center" }}>
      {filters.map((f) => (
        <button
          key={f.value}
          type="button"
          className={current === f.value ? "filter is-on" : "filter"}
          aria-pressed={current === f.value}
          onClick={() => select(f.value)}
        >
          {f.label}
        </button>
      ))}
      <span className="mono" aria-live="polite" style={{ marginLeft: 8, fontSize: 11, letterSpacing: "0.1em", color: "var(--muted-l2)" }}>
        {pad(shown)} / {pad(total)}
      </span>
    </div>
  );
}
