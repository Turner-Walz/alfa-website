// Shared, client-only motion plumbing. GSAP and Lenis are loaded with dynamic
// import so they never land in the server bundle or block hydration.

let gsapPromise = null;
let lenis = null;

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function canHover() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function loadGsap() {
  if (!gsapPromise) {
    gsapPromise = Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([g, st]) => {
      const gsap = g.gsap || g.default;
      const ScrollTrigger = st.ScrollTrigger || st.default;
      gsap.registerPlugin(ScrollTrigger);
      return { gsap, ScrollTrigger };
    });
  }
  return gsapPromise;
}

export function setLenis(instance) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

export function refreshScroll() {
  if (!gsapPromise) return;
  gsapPromise.then(({ ScrollTrigger }) => ScrollTrigger.refresh());
}
