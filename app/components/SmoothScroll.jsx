"use client";

import { useEffect } from "react";
import { loadGsap, prefersReducedMotion, setLenis } from "../lib/motion";

// Lenis smooth scrolling driven by the GSAP ticker so ScrollTrigger stays in sync.
// Off entirely for prefers-reduced-motion.
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let cancelled = false;
    let instance = null;
    let tick = null;
    let gsapRef = null;

    Promise.all([import("lenis"), loadGsap()]).then(([mod, { gsap, ScrollTrigger }]) => {
      if (cancelled) return;
      const Lenis = mod.default || mod.Lenis;
      instance = new Lenis({ duration: 1.05, smoothWheel: true, anchors: true });
      instance.on("scroll", ScrollTrigger.update);
      tick = (t) => instance.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      gsapRef = gsap;
      setLenis(instance);
    });

    return () => {
      cancelled = true;
      if (gsapRef && tick) gsapRef.ticker.remove(tick);
      if (instance) instance.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
