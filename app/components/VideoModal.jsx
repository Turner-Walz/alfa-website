"use client";

import { useEffect, useRef, useState } from "react";
import { getLenis } from "../lib/motion";

// Opens a YouTube embed for any clicked element carrying data-yt (video id),
// data-yt-title and, for 9:16 clips, data-yt-vertical="1".
export default function VideoModal() {
  const [video, setVideo] = useState(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      const t = e.target instanceof Element ? e.target.closest("[data-yt]") : null;
      if (!t) return;
      e.preventDefault();
      openerRef.current = t;
      setVideo({ id: t.dataset.yt, title: t.dataset.ytTitle || "video", vertical: t.dataset.ytVertical === "1" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!video) return;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setVideo(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      lenis?.start();
      openerRef.current?.focus({ preventScroll: true });
    };
  }, [video]);

  if (!video) return null;

  return (
    <div
      className="yt-modal"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={(e) => e.target === e.currentTarget && setVideo(null)}
    >
      <div className={video.vertical ? "yt-box is-vertical" : "yt-box"}>
        <div className="yt-head">
          <span>{video.title}</span>
          <button ref={closeRef} type="button" className="yt-close" onClick={() => setVideo(null)}>
            close ✕
          </button>
        </div>
        <div className="yt-frame">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
