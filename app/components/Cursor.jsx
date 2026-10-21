"use client";

import { useEffect, useRef } from "react";
import { canHover, loadGsap, prefersReducedMotion } from "../lib/motion";

const INTERACTIVE = "a, button, summary, select, input, textarea, label";

// Orange ring cursor plus the [data-magnet] pull on buttons. Desktop pointers only.
// Uses event delegation so it keeps working across client-side navigations.
export default function Cursor() {
  const ring = useRef(null);

  useEffect(() => {
    if (!canHover() || prefersReducedMotion()) return;
    let cancelled = false;
    let cleanup = () => {};

    loadGsap().then(({ gsap }) => {
      if (cancelled || !ring.current) return;
      const el = ring.current;
      const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });
      let magnet = null;
      let hot = false;

      const release = (btn) =>
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });

      const onMove = (e) => {
        gsap.to(el, { opacity: 1, duration: 0.3, overwrite: "auto" });
        xTo(e.clientX);
        yTo(e.clientY);

        const target = e.target instanceof Element ? e.target : null;
        const isHot = !!target?.closest(INTERACTIVE);
        if (isHot !== hot) {
          hot = isHot;
          gsap.to(el, { scale: hot ? 1.8 : 1, duration: 0.3, ease: "power3.out" });
        }

        const m = target?.closest("[data-magnet]") || null;
        if (magnet && m !== magnet) release(magnet);
        magnet = m;
        if (m) {
          const r = m.getBoundingClientRect();
          gsap.to(m, {
            x: (e.clientX - r.left - r.width / 2) * 0.25,
            y: (e.clientY - r.top - r.height / 2) * 0.35,
            duration: 0.4,
          });
        }
      };
      const onLeave = () => {
        gsap.to(el, { opacity: 0, duration: 0.3 });
        if (magnet) release(magnet);
        magnet = null;
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      cleanup = () => {
        window.removeEventListener("pointermove", onMove);
        document.documentElement.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <div ref={ring} className="cursor" aria-hidden="true" />;
}
