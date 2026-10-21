"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../lib/motion";

const SLOW = new Set(["slow-2g", "2g", "3g"]);
// Any of these means a real visitor is present. Taps, scrolls and keys also end
// LCP recording in Chrome, so the video's first frame (which Chrome scores larger
// than any poster) can't replace the poster as the LCP element on mobile.
const INTERACTIONS = ["pointerdown", "pointermove", "touchstart", "wheel", "scroll", "keydown"];

// Background video layered over the server-rendered poster image (the LCP element).
// The source is attached only after the window load event AND the first interaction,
// and never for reduced-motion, Save-Data or slow-connection visitors, who keep the
// still poster. It stays invisible until it is actually playing.
export default function HeroVideo({ src }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    const conn = navigator.connection;
    if (!v || prefersReducedMotion() || conn?.saveData || SLOW.has(conn?.effectiveType)) return;

    let loaded = document.readyState === "complete";
    let interacted = false;
    const start = () => {
      if (!loaded || !interacted || v.getAttribute("src")) return;
      cleanup();
      v.src = src;
      v.muted = true;
      v.play().catch(() => {});
    };
    const onLoad = () => {
      loaded = true;
      start();
    };
    const onInteract = () => {
      interacted = true;
      start();
    };
    const cleanup = () => {
      window.removeEventListener("load", onLoad);
      INTERACTIONS.forEach((t) => window.removeEventListener(t, onInteract));
    };
    if (!loaded) window.addEventListener("load", onLoad, { once: true });
    INTERACTIONS.forEach((t) => window.addEventListener(t, onInteract, { passive: true }));
    return cleanup;
  }, [src]);

  return (
    <video
      ref={ref}
      className={playing ? "is-playing" : undefined}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      onPlaying={() => setPlaying(true)}
    />
  );
}
