"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../lib/motion";

// Background video layered over the server-rendered poster image (the LCP element).
// The video source is attached only after the page has loaded, and never for
// reduced-motion or data-saver visitors, who keep the still poster.
export default function HeroVideo({ src, poster }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v || prefersReducedMotion() || navigator.connection?.saveData) return;
    const start = () => {
      v.src = src;
      v.muted = true;
      v.play().catch(() => {});
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, [src]);

  return (
    <video
      ref={ref}
      className={playing ? "is-playing" : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      onPlaying={() => setPlaying(true)}
    />
  );
}
