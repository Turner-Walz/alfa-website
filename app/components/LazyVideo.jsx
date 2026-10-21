"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/motion";

// Muted looping clip that only downloads once it nears the viewport and pauses
// when it leaves. The poster is also attached on approach, since a <video poster>
// otherwise loads eagerly and competes with the hero for bandwidth.
// Reduced-motion visitors get the poster only.
export default function LazyVideo({ src, poster, label }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduced = prefersReducedMotion();
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          v.pause();
          return;
        }
        if (!v.getAttribute("poster")) v.poster = poster;
        if (reduced) return;
        if (!v.getAttribute("src")) v.src = src;
        v.muted = true;
        v.play().catch(() => {});
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src, poster]);

  return <video ref={ref} muted loop playsInline preload="none" aria-label={label} />;
}
