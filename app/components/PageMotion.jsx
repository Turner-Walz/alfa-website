"use client";

import { useEffect } from "react";
import { canHover, loadGsap, prefersReducedMotion } from "../lib/motion";

// Wires the scroll effects declared with data-attributes in the server-rendered
// page. Timings are ported from the design files' logic classes. Renders nothing.
//
//   [data-split]      heading words rise in        [data-reveal]   clip reveal (+ inner [data-parallax])
//   [data-wordpin]    words scrub in one by one    [data-count]    count up on view
//   [data-card]       stacking cards scale down    [data-marquee]  endless ticker (data-duration seconds)
//   [data-herobg]     hero background drift        [data-path]     home path cards
export default function PageMotion() {
  useEffect(() => {
    // Shrink any heading whose longest word overflows its column (the design's fit() pass).
    const fit = () => {
      document.querySelectorAll("main h1, main h2, main h3, main [data-word]").forEach((el) => {
        if (el.dataset.fs === undefined) el.dataset.fs = el.style.fontSize || "";
        el.style.fontSize = el.dataset.fs;
        let size = parseFloat(getComputedStyle(el).fontSize);
        const box = el.parentElement;
        let guard = 0;
        const limit = () => Math.min(el.clientWidth || box.clientWidth, box.clientWidth);
        while (el.scrollWidth > limit() + 1 && size > 16 && guard++ < 60) {
          size -= 1;
          el.style.fontSize = size + "px";
        }
      });
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);

    if (prefersReducedMotion()) {
      return () => window.removeEventListener("resize", fit);
    }

    let cancelled = false;
    let ctx = null;
    const timers = [];
    const listeners = [];
    const on = (el, type, fn) => {
      el.addEventListener(type, fn);
      listeners.push(() => el.removeEventListener(type, fn));
    };

    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        document.querySelectorAll("[data-split]").forEach((el) => {
          gsap.fromTo(
            el.querySelectorAll(".sw > span"),
            { yPercent: 115 },
            { yPercent: 0, stagger: 0.05, duration: 1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%" } }
          );
        });

        document.querySelectorAll("[data-wordpin]").forEach((sec) => {
          gsap
            .timeline({ scrollTrigger: { trigger: sec, start: "top 78%", end: "center center", scrub: 0.6 } })
            .fromTo(sec.querySelectorAll("[data-word]"), { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.18, ease: "none" });
          gsap.to(sec.firstElementChild, {
            yPercent: -12,
            ease: "none",
            scrollTrigger: { trigger: sec, start: "center center", end: "bottom top", scrub: true },
          });
        });

        document.querySelectorAll("[data-reveal]").forEach((frame) => {
          gsap.fromTo(
            frame,
            { clipPath: "inset(0% 0% 100% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: frame, start: "top 92%" } }
          );
          const media = frame.querySelector("[data-parallax]");
          if (media)
            gsap.fromTo(media, { yPercent: -6 }, {
              yPercent: 6,
              ease: "none",
              scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
            });
        });

        document.querySelectorAll("[data-herobg]").forEach((bg) => {
          gsap.fromTo(bg, { yPercent: -4 }, {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: bg.parentElement, start: "top top", end: "bottom top", scrub: true },
          });
        });

        document.querySelectorAll("[data-count]").forEach((el) => {
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          const o = { v: 0 };
          el.textContent = "0" + suffix;
          gsap.to(o, {
            v: target,
            duration: 1.8,
            ease: "expo.out",
            onUpdate: () => (el.textContent = Math.round(o.v) + suffix),
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          });
        });

        const cards = Array.from(document.querySelectorAll("[data-card]"));
        cards.slice(0, -1).forEach((card, i) => {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.55,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top " + (102 + i * 18) + "px",
              endTrigger: cards[cards.length - 1],
              end: "top 60%",
              scrub: true,
            },
          });
        });

        document.querySelectorAll("[data-marquee]").forEach((track) => {
          const loop = gsap.to(track, { xPercent: -50, duration: parseFloat(track.dataset.duration) || 26, ease: "none", repeat: -1 });
          ScrollTrigger.create({
            onUpdate: (s) =>
              gsap.to(loop, { timeScale: 1 + Math.min(Math.abs(s.getVelocity()) / 500, 5), duration: 0.4, overwrite: true }),
          });
        });

        const hover = canHover();
        document.querySelectorAll("[data-path]").forEach((card) => {
          const img = card.querySelector("img");
          const arrow = card.querySelector(".path-arrow");
          gsap.fromTo(
            card,
            { clipPath: "inset(0% 0% 100% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: card, start: "top 92%" } }
          );
          if (img)
            gsap.fromTo(img, { yPercent: -5 }, {
              yPercent: 5,
              ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
            });
          if (!hover) return;
          on(card, "pointerenter", () => {
            if (img) gsap.to(img, { scale: 1.06, duration: 0.7, ease: "power3.out" });
            if (arrow) gsap.to(arrow, { x: 8, duration: 0.4, ease: "power3.out" });
          });
          on(card, "pointerleave", () => {
            if (img) gsap.to(img, { scale: 1, duration: 0.7, ease: "power3.out" });
            if (arrow) gsap.to(arrow, { x: 0, duration: 0.4, ease: "power3.out" });
          });
        });
      });

      document.fonts?.ready.then(() => !cancelled && ScrollTrigger.refresh());
      timers.push(setTimeout(() => ScrollTrigger.refresh(), 400), setTimeout(() => ScrollTrigger.refresh(), 1200));
    });

    return () => {
      cancelled = true;
      window.removeEventListener("resize", fit);
      timers.forEach(clearTimeout);
      listeners.forEach((off) => off());
      if (ctx) ctx.revert();
    };
  }, []);

  return null;
}
