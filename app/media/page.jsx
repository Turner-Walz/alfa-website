"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function MediaPage() {
  const portfolioItems = [
    {
      label: "Northern Arizona PT Clinic",
      sublabel: "Cottonwood, AZ",
      youtubeId: "BtMy19MHvlU",
      image: "/posters/narf.jpg",
    },
    {
      label: "FPV Truck Video",
      sublabel: "Cinematic FPV • Dirt road",
      youtubeId: "Y5r-9wg8KeE",
      image: "/posters/fpv-truck.jpg",
    },
    {
      label: "Cornville Property",
      sublabel: "Cornville, AZ • Real estate highlight",
      youtubeId: "FopFQncz4M4",
      image: "/posters/cornville-property.jpg",
    },
    {
      label: "Sedona Aerial Reel",
      sublabel: "Sedona, Arizona",
      youtubeId: "Bsqh29oxDq8",
      image: "/posters/montage.jpg",
    },
    {
      label: "Moab Potash Ponds FPV",
      sublabel: "FPV Drone Reveal",
      youtubeId: "KOCAXZwLYM8",
      image: "/posters/moab-potash.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-900 py-20 text-white">
      {/* HEADER */}
      <div className="mx-auto max-w-5xl px-5">
        <div className="mt-6">
          <a href="/" className="text-sm text-zinc-400 underline underline-offset-4">
            ← Back to home
          </a>
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-zinc-400">
          ALFA
        </p>

        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
          Drone Media Production
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-300">
          Cinematic drone photo and video for real estate, businesses, events, and branded content.
        </p>
      </div>

      {/* WHAT I CAN CAPTURE + HOW IT WORKS */}
      <section className="relative isolate overflow-hidden border-y border-zinc-700/60 mt-16">
        <div className="absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/buildingsband.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16">
          {/* WHAT I CAN CAPTURE */}
          <div className="text-center">
            <h2 className="mb-3 text-3xl font-extrabold">
              What I can capture
            </h2>

            <p className="mx-auto max-w-2xl text-zinc-200">
              Drone photos and video built for listings, websites, and social — shot clean and delivered fast.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:text-left">
            <Service
              title="Real Estate & Land"
              bullets={[
                "MLS-ready aerial photos",
                "Lot lines & neighborhood context",
                "Short listing clips",
              ]}
            />

            <Service
              title="Businesses"
              bullets={[
                "Building & property visuals",
                "Website + social content",
                "Premium establishing shots",
              ]}
            />

            <Service
              title="Events"
              bullets={[
                "Weddings, festivals, gatherings",
                "Venue establishing shots",
                "Highlight footage",
              ]}
            />
          </div>

          {/* spacing */}
          <div className="mt-16" />

          {/* HOW IT WORKS */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">
              How it works
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-200">
              A simple, straightforward process — no surprises, no pressure.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4 md:text-left">
            <StepCard step="Step 1" title="Request a quote">
              Send a few details about your project, location, and timeline.
            </StepCard>

            <StepCard step="Step 2" title="Plan the shoot">
              We align on goals, shot ideas, and timing — usually over a quick call or email.
            </StepCard>

            <StepCard step="Step 3" title="Capture the footage">
              I handle the flight, angles, and execution with care and precision.
            </StepCard>

            <StepCard step="Step 4" title="Deliver the final assets">
              You receive polished photos and/or video, ready to use.
            </StepCard>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200 active:translate-y-0"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="mt-16" id="portfolio">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">Recent Work</h2>
            <p className="mx-auto mt-2 max-w-2xl text-zinc-300">
              A selection of recent aerial photo and video work across Northern Arizona.
            </p>

            <p className="mx-auto mt-2 hidden max-w-2xl text-sm text-zinc-400 sm:block">
              Click a clip to play the video.
            </p>

            <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-400 sm:hidden">
              Swipe through highlights or tap a clip to play.
            </p>

            <a
              href="https://www.instagram.com/alookfromabove_/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/40 px-4 py-2 font-bold transition hover:-translate-y-0.5 hover:bg-zinc-800 active:translate-y-0"
            >
              See videos on Instagram <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10">
            {/* MOBILE */}
            <div className="sm:hidden">
              <MobilePortfolioCarousel
                instaHref="https://www.instagram.com/alookfromabove_/"
                items={portfolioItems}
              />
            </div>

            {/* DESKTOP */}
            <div className="hidden grid-cols-1 gap-6 sm:grid md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <PortfolioTile
                  key={item.label}
                  label={item.label}
                  sublabel={item.sublabel}
                  youtubeId={item.youtubeId}
                  poster={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-4xl px-5">
        <div className="rounded-3xl border border-zinc-700 bg-zinc-800/20 p-8 text-center md:p-10">
          <h2 className="text-3xl font-extrabold">Need media like this for your project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Reach out with your project, property, or event and I’ll help you plan the right coverage.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200 active:translate-y-0"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="mailto:hello@alookfromabove.co"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/30 px-6 py-3 font-bold transition hover:-translate-y-0.5 hover:bg-zinc-800/60 active:translate-y-0"
            >
              Email me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Service({ title, bullets }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-black/35 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-black/20">
      <h3 className="text-2xl font-extrabold text-white transition duration-300 group-hover:text-white">
        {title}
      </h3>

      <ul className="mt-6 space-y-4 text-zinc-200">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className="mt-1.5 text-white/80 transition duration-300 group-hover:text-white">✓</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({ step, title, children }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-black/35 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-black/20">
      <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400 transition duration-300 group-hover:text-zinc-300">
        {step}
      </p>

      <h3 className="mt-4 text-2xl font-extrabold text-white">
        {title}
      </h3>

      <p className="mt-4 text-zinc-200">
        {children}
      </p>
    </div>
  );
}

function MobilePortfolioCarousel({ items, instaHref }) {
  const [idx, setIdx] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const total = items?.length || 0;
  const current = total ? items[idx] : null;

  const prev = React.useCallback(() => {
    if (!total) return;
    setIdx((i) => (i - 1 + total) % total);
  }, [total]);

  const next = React.useCallback(() => {
    if (!total) return;
    setIdx((i) => (i + 1) % total);
  }, [total]);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const startRef = React.useRef({ x: 0, y: 0, t: 0, active: false });

  const onTouchStart = (e) => {
    const t = e.touches?.[0];
    if (!t) return;
    startRef.current = { x: t.clientX, y: t.clientY, t: Date.now(), active: true };
  };

  const onTouchMove = (e) => {
    const s = startRef.current;
    if (!s.active) return;

    const t = e.touches?.[0];
    if (!t) return;

    const dx = t.clientX - s.x;
    const dy = t.clientY - s.y;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 6) {
      e.preventDefault();
    }
  };

  const onTouchEnd = (e) => {
    const s = startRef.current;
    if (!s.active) return;

    const changed = e.changedTouches?.[0];
    if (!changed) return;

    const dx = changed.clientX - s.x;
    const dy = changed.clientY - s.y;
    const dt = Date.now() - s.t;

    const SWIPE_X_MIN = 40;
    const SWIPE_Y_MAX = 80;
    const SWIPE_TIME_MAX = 800;

    if (Math.abs(dy) > SWIPE_Y_MAX || dt > SWIPE_TIME_MAX) {
      startRef.current.active = false;
      return;
    }

    if (dx <= -SWIPE_X_MIN) next();
    else if (dx >= SWIPE_X_MIN) prev();

    startRef.current.active = false;
  };

  if (!current) return null;

  const embedSrc = current.youtubeId
    ? `https://www.youtube.com/embed/${current.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`
    : null;

  return (
    <>
      <div className="relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/10">
        <div
          className="relative block w-full cursor-pointer text-left"
          onClick={() => setOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={`Play ${current.label}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        >
          <div
            className="relative aspect-[3/2] overflow-hidden bg-zinc-950 touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={current.image}
              alt={current.label}
              fill
              className="object-cover brightness-110"
              priority
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-black/50 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 translate-x-[1px]">
                  <path d="M8 5v14l11-7-11-7z" fill="white" fillOpacity="0.9" />
                </svg>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-lg font-extrabold text-white">{current.label}</p>
              {current.sublabel ? (
                <p className="mt-0.5 text-xs text-zinc-200">{current.sublabel}</p>
              ) : null}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous highlight"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 active:scale-95"
            >
              <span className="text-xl leading-none text-white">‹</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next highlight"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 active:scale-95"
            >
              <span className="text-xl leading-none text-white">›</span>
            </button>

            <a
              href={instaHref}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-white/90"
              aria-label="See videos on Instagram"
            >
              See videos <ArrowRight className="h-3 w-3" />
            </a>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIdx(i);
                  }}
                  aria-label={`Go to highlight ${i + 1}`}
                  className={[
                    "h-2 w-2 rounded-full border border-white/30",
                    i === idx ? "bg-white/90" : "bg-white/20",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-5 py-4">
          <div className="text-sm text-zinc-300">
            Highlight <span className="font-bold text-white">{idx + 1}</span> / {total}
          </div>

          <a
            href={instaHref}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-white underline underline-offset-4"
          >
            More on Instagram
          </a>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="text-sm font-bold text-white">{current.label}</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-white hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              {embedSrc ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={embedSrc}
                  title={current.label}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-zinc-300">
                  Missing youtubeId
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PortfolioTile({ label, sublabel, youtubeId, poster }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const embedSrc = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`
    : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/10 text-left transition-all duration-300 hover:border-zinc-600"
        aria-label={`Play ${label}`}
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-zinc-950">
          {poster ? (
            <Image
              src={poster}
              alt={label}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 bg-zinc-900" />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-black/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 translate-x-[1px]">
                <path d="M8 5v14l11-7-11-7z" fill="white" fillOpacity="0.9" />
              </svg>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-lg font-extrabold text-white md:text-xl">{label}</p>
            {sublabel ? (
              <p className="mt-0.5 text-xs text-zinc-200 md:text-sm">{sublabel}</p>
            ) : null}
          </div>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="text-sm font-bold text-white">{label}</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-white hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              {embedSrc ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={embedSrc}
                  title={label}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-zinc-300">
                  Missing youtubeId
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}