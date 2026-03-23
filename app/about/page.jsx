"use client";

import Image from "next/image";
import { ArrowRight, Check, Mail } from "lucide-react";
import { motion } from "framer-motion";

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
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white overflow-x-hidden">
      <section className="relative overflow-hidden border-b border-zinc-700/60 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/textures/noise.jpg')] opacity-[0.08] mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_100%)]" />

        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              About ALFA
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              The person and equipment behind the work.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
              ALFA was built to deliver clean, professional drone coverage for real estate,
              business, events, and construction projects across Northern Arizona.
            </p>
          </div>
        </div>
      </section>

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
                  I’ve been flying drones across Arizona since 2020, capturing aerial perspectives
                  that help places, events, and brands stand out. I focus on finding angles that
                  elevate the story instead of distracting from it.
                </p>

                <p className="mt-4 text-zinc-300">
                  I created <span className="font-bold text-white">ALFA: A Look From Above</span> to
                  bring aerial coverage into projects thoughtfully — whether that means collaborating
                  with photographers and video teams, or capturing events and properties as a standalone operator.
                </p>

                <p className="mt-4 text-zinc-300">
                  Whether you’re selling a property, promoting a business, or documenting a project,
                  strong visuals matter. Eye-catching aerial content helps people stop, look, and engage.
                </p>

                <p className="mt-4 text-zinc-300">
                  My approach is straightforward: clear communication, careful planning, safe execution,
                  and clean delivery — footage that fits your goals and performs where it’s used.
                </p>

                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:justify-start">
                  <a
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-black transition hover:bg-zinc-200 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>

                  <a
                    href="mailto:hello@alookfromabove.co"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/30 px-5 py-3 font-bold transition hover:bg-zinc-800/60 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
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
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-300" />
                      <span>FAA Part 107 certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-300" />
                      <span>Available for collaboration with photographers &amp; video teams — or standalone projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-300" />
                      <span>Clear communication with well-defined scope for smooth capture and delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-300" />
                      <span>Safety-first mindset on every flight</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-zinc-700/60 py-16" id="gear">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/textures/noise.jpg')] opacity-[0.06] mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-zinc-900" />

        <div className="relative z-10 mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">Aerial support drones</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white">Production-level Equipment</h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              The gear behind ALFA is chosen for image quality, flexibility, and the ability
              to match the right tool to the project.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {GEAR.map((g) => (
              <GearCard key={g.title} title={g.title} tip={g.tip} specs={[...g.specs]} image={g.image} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md md:p-10">
            <h2 className="text-3xl font-extrabold">Want to work together?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
              Reach out with your project details and I’ll put together a clear quote based on what you need.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-black transition hover:bg-zinc-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="mailto:hello@alookfromabove.co"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/30 px-6 py-3 font-bold transition hover:bg-zinc-800/60 hover:-translate-y-0.5 active:translate-y-0"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function GearCard({ title, tip, specs, image }) {
  const benefits = {
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
    <div className="group relative h-[430px] sm:h-[460px] md:h-[480px] cursor-pointer" style={{ perspective: "1000px" }}>
      <div
        className="relative h-full w-full transition-transform duration-[600ms] group-hover:[transform:rotateY(180deg)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 rounded-3xl border border-zinc-700 bg-zinc-100 p-6 text-zinc-900"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <div className="text-sm font-extrabold uppercase tracking-wide text-zinc-500">
              {title}
            </div>
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

          <p className="mt-2 text-center text-sm font-semibold text-zinc-700">
            {tip}
          </p>

          <ul className="mt-4 space-y-1.5 text-center text-sm text-zinc-700">
            {specs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="mt-4 text-center text-xs text-zinc-400">
            Hover to see how this helps you →
          </p>
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
                <div className="text-sm font-extrabold uppercase tracking-wide text-zinc-500">
                  {title}
                </div>
              </div>

              <h3 className="mt-6 text-center text-lg font-extrabold text-zinc-800">
                How this helps you
              </h3>

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