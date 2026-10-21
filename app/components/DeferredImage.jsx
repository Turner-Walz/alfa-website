"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// next/image that isn't requested until it comes within ~1 screen of the viewport.
// Native lazy-loading starts much further out, so below-fold images in reveal
// frames would otherwise compete with the hero for bandwidth during first load.
// Fills its positioned parent; the parent reserves the space, so there's no shift.
export default function DeferredImage({ alt, ...props }) {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} style={{ position: "absolute", inset: 0, display: "block" }}>
      {near && <Image fill alt={alt} {...props} />}
    </span>
  );
}
