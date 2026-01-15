"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check, Mail, Instagram, Phone } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

const AREAS = ["Clarkdale", "Cottonwood", "Cornville", "Sedona", "Flagstaff", "Prescott"];

const GEAR = [
  {
    title: "DJI Mavic 4 Pro",
    tip: "Clean, cinematic aerials for real estate, land, and brand visuals.",
    specs: ['Sensor: 4/3" CMOS', "Color: 10-bit D-Log M", "Video: Up to 6k/120"],
    image: "/mavic4pro.png",
  },
  {
    title: "DJI Avata 2",
    tip: "Immersive FPV — perfect for indoor fly-throughs and dynamic reveals.",
    specs: ['Sensor: 1/1.3" CMOS', "Color: 10-bit D-Log M", "Video: 4K/60"],
    image: "/avata2.png",
  },
  {
    title: "iFlight Nazgul Evoque F5",
    tip: "High-energy FPV shots for motion, action, and cinematic chase sequences.",
    specs: ['Sensor: 1/1.9" CMOS', "Color: 10-bit", "Video: 5.3K/60"],
    image: "/nazgulevoque.webp",
  },
] as const;

export default function Page() {
  const [state, handleSubmit] = useForm("xzdznrnv");

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-700/60 bg-zinc-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-4">
          <a href="#top" className="inline-flex items-center justify-center" aria-label="Go to top">
            <Image src="/ALFA-01.png" alt="ALFA logo" width={180} height={60} priority />
          </a>
        </div>
      </header>

      <main id="top" className="relative">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-220px] h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-[-260px] left-[-260px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        </div>

        {/* HERO */}
        <section className="relative w-full min-h-[78vh] md:min-h-[86vh] lg:min-h-[92vh] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/herobackground.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[78vh] md:min-h-[86vh] lg:min-h-[92vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
              The perspective that completes the story.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-200">
              Clean, cinematic drone photos &amp; video for real estate, businesses, events, and land — across Northern
              Arizona.
            </p>

            <div className="mt-8 flex justify-center">
              <RainbowLink href="#contact" iconRight={<ArrowRight className="h-4 w-4" />}>
                Request a Quote
              </RainbowLink>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900" />
        </section>

        {/* TRUSTED LOCALLY */}
        <section className="relative isolate overflow-hidden border-t border-zinc-700/60 py-14 md:py-18">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/textures/noise.jpg')] opacity-[0.05] mix-blend-soft-light" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_100%)]" />
          <div className="pointer-events-none absolute inset-0 -z-20 bg-zinc-800/15" />

          <div className="relative z-10 mx-auto max-w-6xl px-5">
            <div className="text-center">
              <p className="mx-auto max-w-3xl text-sm font-semibold uppercase tracking-wide text-zinc-400">
                Trusted locally
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-300">
                Photographers, businesses, and media teams across
                <span className="font-bold text-white"> Northern Arizona</span> trust ALFA for professional drone coverage
                that integrates seamlessly — or <span className="font-semibold text-white">stands on its own</span>.
              </p>

              <p className="mx-auto mt-3 max-w-3xl text-lg font-semibold text-white">
                Clean. Cinematic. Built to elevate your work.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-zinc-400">
                <Chip>Real estate agents</Chip>
                <Chip>Small businesses</Chip>
                <Chip>Events &amp; venues</Chip>
                <Chip>Land &amp; property owners</Chip>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="border-y border-zinc-700/60 bg-zinc-900 py-16" id="portfolio">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold">Portfolio</h2>
              <p className="mx-auto mt-2 max-w-2xl text-zinc-300">A few highlights — more coming soon.</p>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-zinc-400">
                Hover over a clip to preview the video.
              </p>

              <a
                href="https://www.instagram.com/alookfromabove_/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-xl border border-zinc-700 bg-zinc-900/40 px-4 py-2 font-bold transition hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0"
              >
                See more
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* IMPORTANT: make sure the casing matches your /public/videos filename exactly */}
              <PortfolioTile
                label="Northern Arizona Rehab and Fitness"
                sublabel="Physical Therapy Clinic"
                videoSrc="/videos/NARF-clinic.mp4"
                poster="/posters/NARF.jpg"
              />

              <PortfolioTile
                label="FPV Truck Run"
                sublabel="High-speed FPV • Dirt road"
                videoSrc="/videos/AnthonysTruck.mp4"
                poster="/posters/fpv-truck.jpg"
              />

              <PortfolioTile
                label="Collection"
                sublabel="FPV and Cinematic"
                videoSrc="/videos/montagevideo.mp4"
                poster="/posters/montage.jpg"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="relative isolate overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/textures/noise.jpg')] opacity-[0.08] mix-blend-soft-light" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />

          <div className="relative z-10 mx-auto max-w-6xl px-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-3xl border border-zinc-700/70 bg-zinc-800/20 p-8 md:p-10"
            >
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">About</p>
                  <h2 className="mt-2 text-3xl font-extrabold">Hi — I&apos;m Turner.</h2>

                  <p className="mt-4 text-zinc-300">
                    I’ve been flying drones across Arizona since 2020, capturing aerial perspectives that help places,
                    events, and brands stand out. I focus on finding angles that elevate the story instead of distracting
                    from it.
                  </p>

                  <p className="mt-4 text-zinc-300">
                    I created <span className="font-bold text-white">ALFA: A Look From Above</span> to bring aerial
                    coverage into projects thoughtfully — whether that means collaborating with photographers and video
                    teams, or capturing events and properties as a standalone operator.
                  </p>

                  <p className="mt-4 text-zinc-300">
                    Whether you’re selling a property, promoting a business, or documenting an event, strong visuals
                    matter. Eye-catching aerial content helps people stop, look, and engage — and that’s what I aim to
                    deliver.
                  </p>

                  <p className="mt-4 text-zinc-300">
                    My approach is straightforward: clear communication, careful planning, safe execution, and clean
                    delivery — footage that fits your goals and performs where it’s used.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <RainbowLink href="#contact" iconRight={<ArrowRight className="h-4 w-4" />}>
                      Get a Quote
                    </RainbowLink>

                    <a
                      href="mailto:hello@alookfromabove.co"
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/30 px-5 py-3 font-bold transition hover:bg-zinc-800/60 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Mail className="h-4 w-4" />
                      Email me
                    </a>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-900/40 p-6">
                  <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
                  </div>

                  <div className="relative">
                    <div className="mb-6 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800/20">
                      <div className="relative aspect-[16/11]">
                        <Image
                          src="/aboutmepic.jpg"
                          alt="Turner Walz"
                          fill
                          className="object-cover scale-110 object-[50%_35%]"
                          priority
                        />
                      </div>
                    </div>

                    <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">Quick facts</p>
                    <ul className="mt-4 space-y-3 text-zinc-200">
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-zinc-300" />
                        <span>FAA Part 107 certified</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-zinc-300" />
                        <span>Available for collaboration with photographers &amp; video teams — or standalone projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-zinc-300" />
                        <span>Clear communication with well-defined scope for smooth capture and delivery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-zinc-300" />
                        <span>Safety-first mindset on every flight</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CINEMATIC BAND */}
        <section className="relative isolate overflow-hidden border-y border-zinc-700/60">
          <div className="absolute inset-0 z-0">
            <video className="h-full w-full object-cover" autoPlay loop muted playsInline preload="metadata">
              <source src="/videos/herobackground.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/65" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-5 py-16">
            <div className="text-center">
              <h2 className="mb-3 text-3xl font-extrabold">What I can capture</h2>
              <p className="mx-auto max-w-2xl text-zinc-200">
                Drone photos and video built for listings, websites, and social — shot clean and delivered fast.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3 md:text-left">
              <Service title="Real Estate & Land" bullets={["MLS-ready aerial photos", "Lot lines & neighborhood context", "Short listing clips"]} />
              <Service title="Businesses" bullets={["Building & property visuals", "Website + social content", "Premium establishing shots"]} />
              <Service title="Events" bullets={["Weddings, festivals, gatherings", "Venue establishing shots", "Highlight footage"]} />
            </div>

            <div className="mt-16" />

            <div className="text-center">
              <h2 className="text-3xl font-extrabold">How it works</h2>
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
              <RainbowLink href="#contact" iconRight={<ArrowRight className="h-4 w-4" />}>
                Request a Quote
              </RainbowLink>
            </div>
          </div>
        </section>

        {/* GEAR */}
        <section className="relative isolate overflow-hidden border-y border-zinc-700/60 py-16" id="gear">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/textures/noise.jpg')] opacity-[0.06] mix-blend-soft-light" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />
          <div className="pointer-events-none absolute inset-0 -z-20 bg-zinc-900" />

          <div className="relative z-10 mx-auto max-w-6xl px-5">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">Aerial support drones</p>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Production-level Equipment</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {GEAR.map((g) => (
                <GearCard key={g.title} title={g.title} tip={g.tip} specs={[...g.specs]} image={g.image} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="relative isolate overflow-hidden py-16" id="contact">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/textures/noise.jpg')] opacity-[0.06] mix-blend-soft-light" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />
          <div className="pointer-events-none absolute inset-0 -z-20 bg-zinc-900" />

          <div className="relative z-10 mx-auto max-w-6xl px-5 pb-24">
            <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-3xl font-extrabold">Request a quote</h2>
                <p className="mt-4 max-w-xl text-zinc-300">
                  Send your details and I’ll respond with pricing and availability.
                </p>

                <div className="mt-6 rounded-2xl border border-zinc-700 bg-zinc-800/30 p-4 text-sm text-zinc-300">
                  <div className="font-bold text-white">Pricing overview</div>
                  <p className="mt-2">
                    Projects are priced based on scope, location, and deliverables. Most shoots are straightforward and quoted
                    clearly after a quick review.
                  </p>
                </div>

                <div className="mt-6 space-y-3 text-zinc-200">
                  <a href="mailto:hello@alookfromabove.co" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> hello@alookfromabove.co
                  </a>

                  <a
                    href="https://www.instagram.com/alookfromabove_/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </div>

                <div className="hidden md:block md:h-30 lg:h-49" />

                <div className="rounded-2xl border border-zinc-700 bg-zinc-800/30 p-4 text-sm text-zinc-300">
                  <div className="font-bold text-white">Include this for a fast quote:</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Address or general location</li>
                    <li>What you’re capturing (real estate / business / event / other)</li>
                    <li>Photos, video, or both</li>
                    <li>When you need it</li>
                  </ul>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                method="POST"
                className="relative rounded-2xl border border-zinc-700 bg-zinc-800/20 p-6"
              >
                <input type="hidden" name="_subject" value="New ALFA quote request" />
                <input type="hidden" name="_format" value="plain" />

                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                  <label>
                    Leave this field empty:
                    <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                {state.succeeded && (
                  <div className="mb-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-100">
                    <div className="font-extrabold">Inquiry sent!</div>
                    <p className="mt-1 text-sm text-emerald-100/90">Thanks — I’ll get back to you shortly.</p>
                  </div>
                )}

                {state.errors?.length > 0 && !state.succeeded && (
                  <div className="mb-4 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-red-100">
                    <div className="font-extrabold">Something went wrong.</div>
                    <p className="mt-1 text-sm text-red-100/90">Please try again, or email hello@alookfromabove.co.</p>
                  </div>
                )}

                {!state.succeeded && (
                  <div className="grid gap-4">
                    <label className="grid gap-2">
                      <span className="text-sm font-bold">Name</span>
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        autoComplete="name"
                        className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-white/10"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-bold">Email</span>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-white/10"
                      />
                    </label>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <label className="grid gap-2">
                      <span className="text-sm font-bold">Phone (optional)</span>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="(928) 555-1234"
                        autoComplete="tel"
                        className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-white/10"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-bold">Service type</span>
                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-white/10"
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="Real Estate / Land">Real Estate / Land</option>
                        <option value="Business">Business</option>
                        <option value="Event">Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-bold">Location / Address</span>
                      <input
                        name="location"
                        required
                        placeholder="Address or city area"
                        className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-white/10"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-bold">Details</span>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="What are we capturing? Any must-have angles, shots, or timing?"
                        className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-white/10"
                      />
                    </label>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <RainbowButton type="submit" disabled={state.submitting} iconRight={<ArrowRight className="h-4 w-4" />}>
                      {state.submitting ? "Sending..." : "Send inquiry"}
                    </RainbowButton>

                    <p className="text-xs text-zinc-400">No spam. Your information is only used to respond to your inquiry.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-zinc-700/60 py-10">
          <div className="mx-auto max-w-6xl px-5 text-center text-sm text-zinc-400">
            © {new Date().getFullYear()} ALFA: A Look From Above • Northern Arizona
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ---------- Small UI components ---------- */

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-zinc-700 bg-zinc-800/30 px-4 py-2">{children}</span>;
}

function StepCard({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md p-6 shadow-lg transition hover:-translate-y-1 hover:bg-black/45 hover:border-white/15">
      <div className="mb-2 text-sm font-bold uppercase tracking-wide text-zinc-400">{step}</div>
      <h3 className="text-lg font-extrabold">{title}</h3>
      <p className="mt-2 text-zinc-300">{children}</p>
    </div>
  );
}

function Service({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md p-6 shadow-lg transition hover:-translate-y-1 hover:bg-black/45 hover:border-white/15">
      <h3 className="text-xl font-extrabold">{title}</h3>
      <ul className="mt-4 space-y-2 text-zinc-300">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <Check className="h-4 w-4" /> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Portfolio tile (fixed) ---------- */
/**
 * Goals:
 * - Never blank: always show poster or a built-in fallback.
 * - Hover starts playback once.
 * - Leaving hover does NOT pause.
 * - End resets to 0 and allows replay.
 * - No "seek to 1s onLoadedData" (can cause issues on some encodes).
 */
function PortfolioTile({
  label,
  sublabel,
  videoSrc,
  poster,
}: {
  label: string;
  sublabel?: string;
  videoSrc: string;
  poster?: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [posterReady, setPosterReady] = React.useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = React.useState(false);
  const [videoReady, setVideoReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [hasPlayed, setHasPlayed] = React.useState(false);

  const start = React.useCallback(async () => {
    // On first hover, start loading the video (big perf win)
    if (!shouldLoadVideo) setShouldLoadVideo(true);

    const v = videoRef.current;
    if (!v) return;

    // If not ready yet, we'll let onCanPlay trigger the actual play
    if (!videoReady) return;

    if (hasPlayed) return;

    try {
      // start from beginning
      if (v.currentTime !== 0) v.currentTime = 0;
      await v.play();
      setHasPlayed(true);
    } catch {
      setFailed(true);
    }
  }, [hasPlayed, shouldLoadVideo, videoReady]);

  const handleCanPlay = React.useCallback(async () => {
    setVideoReady(true);

    // If user hovered already (triggered load), auto-start once it's ready
    if (!hasPlayed) {
      const v = videoRef.current;
      if (!v) return;
      try {
        if (v.currentTime !== 0) v.currentTime = 0;
        await v.play();
        setHasPlayed(true);
      } catch {
        setFailed(true);
      }
    }
  }, [hasPlayed]);

  const handleEnded = React.useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setHasPlayed(false);
    setVideoReady(false); // allow fresh play next hover
    // keep shouldLoadVideo=true so it doesn't re-download next time
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/10 transition-all duration-300 hover:border-zinc-600">
      <div className="relative aspect-[3/2] overflow-hidden bg-zinc-950">
        {/* 1) INSTANT fallback (always renders immediately) */}
        <div className="absolute inset-0 bg-zinc-950">
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-lg font-extrabold text-white md:text-xl">{label}</p>
            {sublabel ? <p className="mt-0.5 text-xs text-zinc-200 md:text-sm">{sublabel}</p> : null}
          </div>
        </div>

        {/* 2) Poster image (optional, fades in when loaded) */}
        {poster ? (
          <div className={`absolute inset-0 transition-opacity duration-300 ${posterReady ? "opacity-100" : "opacity-0"}`}>
            <Image
              src={poster}
              alt={label}
              fill
              className="object-cover"
              priority
              loading="eager"
              onLoadingComplete={() => setPosterReady(true)}
            />
          </div>
        ) : null}

        {/* 3) Video (NOT loaded until hover) */}
        {shouldLoadVideo && !failed ? (
          <video
            ref={videoRef}
            className={[
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
              "group-hover:scale-105 transition-transform duration-300",
              videoReady ? "opacity-100" : "opacity-0",
            ].join(" ")}
            src={videoSrc}
            muted
            playsInline
            preload="metadata"
            onCanPlay={handleCanPlay}
            onError={() => setFailed(true)}
            onEnded={handleEnded}
          />
        ) : null}

        {/* Hover trigger area */}
        <button
          type="button"
          aria-label={`Play preview for ${label}`}
          className="absolute inset-0"
          onMouseEnter={start}
          onFocus={start}
        />

        {/* Gradient overlay (keeps text readable) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
      </div>
    </div>
  );
}

/* ---------- Gear cards ---------- */
function GearCard({
  title,
  tip,
  specs,
  image,
}: {
  title: string;
  tip: string;
  specs: string[];
  image: string;
}) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const benefits: Record<string, string[]> = {
    "DJI Mavic 4 Pro": [
      "Professional image quality that makes listings stand out",
      "Reliable performance in various lighting conditions",
      "Clean, MLS-ready photos every time",
    ],
    "DJI Avata 2": [
      "Smooth indoor fly-through footage that feels immersive and cinematic",
      "Unique perspectives through tight spaces that traditional drones can’t capture",
      "Eye-catching content that stands out for social media and promotions",
    ],
    "iFlight Nazgul Evoque F5": [
      "Cinematic motion tracking for premium feel",
      "High-speed shots that capture energy and scale",
      "Creative angles that differentiate your brand",
    ],
  };

  const cardBenefits = benefits[title] || [];

  return (
    <div
      className="group relative h-[460px] md:h-[480px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setIsFlipped((v) => !v)}
    >
      <div
        className="relative h-full w-full transition-transform duration-600"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 rounded-3xl border border-zinc-700 bg-zinc-100 p-6 text-zinc-900"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <div className="text-sm font-extrabold uppercase tracking-wide text-zinc-500">{title}</div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="relative h-52 w-full max-w-[300px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-105"
              />
            </div>
          </div>

          <p className="mt-2 text-center text-sm font-semibold text-zinc-700">{tip}</p>

          <ul className="mt-4 space-y-1.5 text-center text-sm text-zinc-700">
            {specs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-zinc-400">Click to see how this helps you →</p>
        </div>

        <div
          className="absolute inset-0 rounded-3xl border border-zinc-700 bg-zinc-100 p-6 text-zinc-900"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="relative h-full">
            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center opacity-70">
              <div className="relative h-36 w-36 md:h-40 md:w-40">
                <Image src={image} alt={title} fill className="object-contain" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-center">
                <div className="text-sm font-extrabold uppercase tracking-wide text-zinc-500">{title}</div>
              </div>

              <h3 className="mt-6 text-center text-lg font-extrabold text-zinc-800">How this helps you</h3>

              <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                {cardBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Rainbow CTA components ---------- */

const RAINBOW =
  "linear-gradient(90deg, #ff3b30, #ff9500, #ffcc00, #34c759, #0a84ff, #5e5ce6, #ff2d55)";

const RAINBOW_DARK_OVERLAY =
  "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.15), rgba(0,0,0,0.35))";

function RainbowLink({
  href,
  children,
  iconRight,
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: "sm" | "md";
}) {
  const sizeClass = size === "sm" ? "px-4 py-2 text-sm rounded-xl" : "px-6 py-3 text-base rounded-xl";

  return (
    <a
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden bg-white font-extrabold text-black transition hover:-translate-y-0.5 active:translate-y-0 ${sizeClass}`}
    >
      <span className="relative z-10">{children}</span>
      {iconRight ? <span className="relative z-10">{iconRight}</span> : null}

      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: RAINBOW,
          backgroundSize: "220% 220%",
          animation: "rainbowShift 6.5s ease-in-out infinite",
        }}
      />
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: RAINBOW_DARK_OVERLAY }}
      />
    </a>
  );
}

function RainbowButton({
  type = "button",
  disabled,
  children,
  iconRight,
}: {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  iconRight?: React.ReactNode;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-3 font-extrabold text-black transition hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <span className="relative z-10">{children}</span>
      {iconRight ? <span className="relative z-10">{iconRight}</span> : null}

      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: RAINBOW,
          backgroundSize: "220% 220%",
          animation: "rainbowShift 6.5s ease-in-out infinite",
        }}
      />
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: RAINBOW_DARK_OVERLAY }}
      />
    </button>
  );
}
