"use client";

import DeferredImage from "./DeferredImage";
import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../lib/motion";

// Listings tile: crossfades through the slides every 3.2s. Images load on approach.
export default function ListingSlideshow({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, 3200);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <>
      {slides.map((s, i) => (
        <div key={s.src} className={i === index ? "slide is-on" : "slide"} aria-hidden={i !== index}>
          <DeferredImage src={s.src} alt={s.alt} sizes="(max-width: 760px) 100vw, 640px" style={{ objectFit: "cover" }} />
        </div>
      ))}
      <div className="slide-bar">
        <span>{slides[index].label}</span>
        <span style={{ display: "flex", gap: 6 }}>
          {slides.map((s, i) => (
            <span key={s.src} className={i === index ? "slide-dot is-on" : "slide-dot"} />
          ))}
        </span>
      </div>
    </>
  );
}
