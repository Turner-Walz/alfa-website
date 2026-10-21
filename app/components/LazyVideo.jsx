"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/motion";

// Muted looping clip that only downloads once it nears the viewport and pauses
// when it leaves. Reduced-motion visitors see the poster only.
export default function LazyVideo({ src, poster, label }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || prefersReducedMotion()) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!v.getAttribute("src")) v.src = src;
          v.muted = true;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  return <video ref={ref} poster={poster} muted loop playsInline preload="none" aria-label={label} />;
}
