import Image from "next/image";
import Link from "next/link";
import Hud from "./components/Hud";
import HeroVideo from "./components/HeroVideo";
import LazyVideo from "./components/LazyVideo";
import PageMotion from "./components/PageMotion";
import VideoModal from "./components/VideoModal";
import { ContactSection, Field, FieldRow, Footer, Hero, ServiceSelect } from "./components/sections";
import { Eyebrow, JsonLd, Marquee, SecHead, Split } from "./components/ui";
import { EMAIL, INSTAGRAM, SITE_URL } from "./lib/site";

const SECTIONS = [
  { id: "top", label: "intro" },
  { id: "help", label: "choose one" },
  { id: "pilot", label: "the pilot" },
  { id: "work", label: "work" },
  { id: "reviews", label: "reviews" },
  { id: "process", label: "process" },
  { id: "contact", label: "contact" },
];

const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ALFA Drone Solutions",
  alternateName: "A Look From Above",
  url: SITE_URL,
  logo: `${SITE_URL}/alfa-logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+1-928-224-9426",
  email: EMAIL,
  founder: { "@type": "Person", name: "Turner Walz" },
  areaServed: [
    "Cottonwood, AZ", "Sedona, AZ", "Camp Verde, AZ", "Clarkdale, AZ", "Cornville, AZ",
    "Prescott, AZ", "Prescott Valley, AZ", "Flagstaff, AZ", "Phoenix, AZ",
  ],
  address: { "@type": "PostalAddress", addressRegion: "AZ", addressCountry: "US" },
  sameAs: [INSTAGRAM],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Drone services",
    itemListElement: [
      "FPV fly-through video",
      "Real estate drone photography & video",
      "Event drone coverage",
      "Brand content for small businesses",
      "Construction progress documentation",
      "Land documentation",
      "Drone mapping & orthomosaics",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const PATHS = [
  {
    href: "/media",
    img: "/media-card-sunset-flipped.jpg",
    alt: "Aerial sunset over a commercial building",
    label: "01 / media",
    color: "var(--orange)",
    title: "Make it look incredible",
    body: "FPV fly-throughs, listings, events, brand content, and a second pilot for crews that already have the vision.",
    cta: "view media",
  },
  {
    href: "/construction",
    img: "/construction/progress.jpg",
    alt: "Aerial drone photo of a construction site in progress, Northern Arizona",
    label: "02 / documentation",
    color: "var(--teal)",
    title: "Know what changed",
    body: "Construction progress updates, land documentation for future planning, and mapping that tracks a site over time.",
    cta: "view documentation",
  },
];

const DRONES = [
  { img: "/matrice4e.png", name: "DJI Matrice 4E", tag: "01 / mapping", use: "documentation", body: "Centimeter-accurate mapping and inspection for construction projects." },
  { img: "/mavic4pro.png", name: "DJI Mavic 4 Pro", tag: "02 / cinema", use: "media", body: "Clean, cinematic aerials for real estate, land, and brand visuals." },
  { img: "/avata2.png", name: "DJI Avata 2", tag: "03 / fpv", use: "indoor", body: "Immersive FPV — perfect for indoor fly-throughs and dynamic reveals." },
  { img: "/nazgulevoque.webp", name: "iFlight Nazgul Evoque F5", tag: "04 / fpv", use: "action", body: "High-energy FPV shots for motion, action, and cinematic chase sequences." },
  { img: "/pavo20pro2.png", name: "BETAFPV Pavo20 Pro II", tag: "05 / micro fpv", use: "sub-250g", body: "Tiny enough to go anywhere. Light enough to fly over anyone." },
];

const STATS = [
  { value: 2023, label: "flying arizona since" },
  { value: 5, label: "aircraft in the kit" },
  { value: 1, suffix: "cm", label: "rtk mapping accuracy" },
  { value: 107, label: "FAA part 107 certified" },
];

const WORK = [
  {
    tag: "01 / media · events",
    title: "Verde Valley Fair",
    meta: "Cottonwood, AZ · Event coverage",
    body: "Full event coverage of the fair, from the crowds and the rides to the view from above.",
    yt: "Bi9FKKsMyBI",
    ytTitle: "Verde Valley Fair 2026",
    img: "https://i.ytimg.com/vi/Bi9FKKsMyBI/hqdefault.jpg",
  },
  {
    tag: "02 / media · fpv",
    title: "Commercial Building Flythrough",
    meta: "Phoenix, AZ · Cinematic FPV",
    body: "One continuous FPV pass through and around a commercial property.",
    yt: "N8lq8gS1a20",
    ytTitle: "Commercial Building Flythrough",
    img: "/posters/commercial-building.jpg",
  },
];

const REVIEWS = [
  {
    quote: "He shot and edited content for both my Airbnbs and executed my vision to perfection. The whole process was seamless, and the finished products were everything I wanted and then some.",
    name: "Grace",
    org: "Inspired Destinations",
    tag: "media · rentals",
  },
  {
    quote: "ALFA Drone Solutions did a fantastic job capturing all the excitement at this year's Verde Valley Fair! The videos, photos, and edited content he put together were all top notch!",
    name: "Michael Gilboy",
    org: "Verde Valley Fair",
    tag: "media · events",
  },
  {
    quote: "He was patient with us as we explained what we wanted to showcase, and he did so many videos with amazing edits that we were able to use for our social media. We could tell that he takes great pride in what he does.",
    name: "Wendy Halliday",
    org: "The Halliday House",
    tag: "media · real estate",
  },
];

const STEPS = [
  { n: "01", title: "Tell me the idea", body: "Location, what you're picturing or what needs tracking, rough date. Quote back the same day." },
  { n: "02", title: "I fly it", body: "Licensed, insured, airspace cleared. Nobody on your team has to stop what they're doing." },
  { n: "03", title: "Final delivery", body: "Edited files delivered to one shared gallery, organized and ready to use. Post it, forward it, or drop it into a report." },
];

const SERVICES = [
  "Media — FPV fly-through",
  "Media — real estate",
  "Media — event coverage",
  "Media — business / brand",
  "Media — second pilot on set",
  "Documentation — construction updates",
  "Documentation — land / future planning",
  "Documentation — mapping over time",
  "Something else entirely",
];

const workTitle = { margin: 0, fontSize: "clamp(25px,2.8vw,38px)", lineHeight: 1.03, letterSpacing: "-0.03em" };
const workMeta = { fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" };

export default function HomePage() {
  return (
    <>
      <JsonLd data={BUSINESS_SCHEMA} />
      <Hud label="live" sections={SECTIONS} />
      <main id="main">
        <Hero
          gradient="linear-gradient(180deg, rgba(11,12,14,0.84) 0%, rgba(11,12,14,0.5) 45%, rgba(11,12,14,0.94) 100%)"
          background={
            <>
              <Image src="/posters/hero-background.jpg" alt="" fill preload sizes="100vw" style={{ objectFit: "cover" }} />
              <HeroVideo src="/hero-background.mp4" poster="/posters/hero-background.jpg" />
            </>
          }
          bottom={
            <Marquee
              duration={26}
              items={["real estate", "events", "photographers", "media teams", "general contractors", "land developers", "small business"]}
            />
          }
        >
          <Eyebrow
            items={[
              { text: "ALFA drone solutions" },
              { text: "drone photo, video & mapping" },
              { text: "part 107 certified · insured" },
              { text: "northern arizona", teal: true },
            ]}
          />
          <Split
            as="h1"
            className=""
            style={{ margin: 0, fontSize: "clamp(44px,7vw,112px)", lineHeight: 1.02, letterSpacing: "-0.02em", fontWeight: 500, maxWidth: "16ch", textWrap: "balance" }}
          >
            The perspective that completes the story
          </Split>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "26px 40px", alignItems: "center", maxWidth: 1040 }}>
            <p style={{ margin: 0, display: "grid", gap: 4, paddingLeft: 20, borderLeft: "2px solid var(--orange)", fontSize: "clamp(19px,1.8vw,24px)", lineHeight: 1.3, letterSpacing: "-0.01em", textWrap: "balance" }}>
              <span style={{ color: "var(--text-light)", fontWeight: 600 }}>Two jobs, one standard.</span>
              <span style={{ color: "var(--muted-d1)" }}>Aerial work that&apos;s worth looking at.</span>
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link data-magnet href="/media" className="pill pill-fill">media ●</Link>
              <Link data-magnet href="/construction" className="pill pill-fill">documentation ●</Link>
            </div>
          </div>
        </Hero>

        <section id="help" className="paper px" style={{ paddingTop: 110, paddingBottom: 100 }}>
          <div className="wrap grid" style={{ gap: 56 }}>
            <div data-wordpin style={{ display: "grid", placeItems: "center" }}>
              <h2 style={{ margin: 0, display: "grid", gap: 2, textAlign: "center", fontWeight: "inherit" }}>
                <span data-word className="display" style={{ display: "block", fontSize: "clamp(38px,7.4vw,104px)", lineHeight: 0.88, letterSpacing: "-0.04em" }}>How can</span>
                <span data-word className="display c-orange-l" style={{ display: "block", fontSize: "clamp(38px,7.4vw,104px)", lineHeight: 0.88, letterSpacing: "-0.04em" }}>We help?</span>
                <span data-word className="mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--muted-l2)", marginTop: 18, fontWeight: 400 }}>pick one below</span>
              </h2>
            </div>
            <div className="auto-grid" style={{ "--min": "300px", gap: 20 }}>
              {PATHS.map((p) => (
                <Link key={p.href} data-path href={p.href} className="path">
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width: 760px) 100vw, 640px" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,12,14,0.35) 0%, rgba(11,12,14,0.88) 72%)" }} />
                  <div className="path-body">
                    <span className="mono" style={{ fontSize: 15, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: p.color }}>{p.label}</span>
                    <h3 className="display" style={{ fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 0.98, letterSpacing: "-0.03em" }}>{p.title}</h3>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#c5c2bb", maxWidth: "38ch" }}>{p.body}</p>
                    <span className="mono" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                      {p.cta} <span className="path-arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="pilot" className="dark px" style={{ paddingTop: 110, paddingBottom: 120 }}>
          <div className="wrap auto-grid" style={{ "--min": "300px", gap: 56, alignItems: "start" }}>
            <div className="sticky-col grid" style={{ top: 96, gap: 22 }}>
              <span className="label c-orange">03 / the pilot</span>
              <div style={{ position: "relative", height: 340, overflow: "hidden", border: "1px solid var(--ink-line)" }}>
                <Image
                  src="/pilot-shirt.jpg"
                  alt="Turner Walz of ALFA Drone Solutions on a job, wearing an ALFA A Look From Above shirt"
                  fill
                  sizes="(max-width: 760px) 100vw, 620px"
                  style={{ objectFit: "cover", objectPosition: "50% 52%" }}
                />
              </div>
              <Split style={{ fontSize: "clamp(32px,4.2vw,58px)", lineHeight: 0.96, letterSpacing: "-0.035em", maxWidth: "14ch" }}>
                The right drone for the job
              </Split>
              <p style={pilotP}>I&apos;m Turner. Building and flying drones started as a hobby. In 2023 I realized the best part of flying was the footage I could get, and I&apos;ve been chasing better shots ever since.</p>
              <p style={pilotP}>You wouldn&apos;t hammer a nail with a wrench. That&apos;s why ALFA has 5 different drones in its fleet, from an RTK mapping platform to a sub-250g FPV that slips through a doorway. Every job gets the right one.</p>
              <p style={{ ...pilotP, color: "var(--text-light)" }}>My goal is to make the process feel tailored and simple. Let&apos;s bring your ideas to life.</p>
              <a data-magnet href="#contact" className="pill pill-solid" style={{ justifySelf: "start", padding: "17px 28px" }}>get a quote ●</a>
            </div>
            <div className="grid" style={{ gap: 16 }}>
              {DRONES.map((d) => (
                <article key={d.name} className="drone">
                  <div className="drone-img">
                    <div>
                      <Image src={d.img} alt={d.name} fill sizes="150px" style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  <div className="drone-body">
                    <div className="drone-meta">
                      <span className="c-orange">{d.tag}</span>
                      <span style={{ color: "#5c6068" }}>{d.use}</span>
                    </div>
                    <h3 className="display" style={{ fontSize: 21, letterSpacing: "-0.02em" }}>{d.name}</h3>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--muted-d1)" }}>{d.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="paper px" style={{ paddingTop: 100, paddingBottom: 80 }}>
          <div className="wrap grid" style={{ gap: 56 }}>
            <div className="auto-grid" style={{ "--min": "290px", gap: 44, alignItems: "start" }}>
              <Split style={{ fontSize: "clamp(30px,3.4vw,52px)", lineHeight: 1.03, letterSpacing: "-0.03em", maxWidth: "20ch" }}>
                Licensed, insured, and ready to fly
              </Split>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: "var(--muted-l1)", maxWidth: "54ch", textWrap: "pretty" }}>
                Part 107 certified with airspace authorization in a tricky corner of Arizona. Whether it&apos;s a listing at golden hour, an indoor FPV pass through a finished build, or the fourteenth monthly flyover of a pad, the standard doesn&apos;t change: clean files, organized, on time.
              </p>
            </div>
            <div className="auto-grid hairline-grid" style={{ "--min": "180px" }}>
              {STATS.map((s) => (
                <div key={s.label} className="stat">
                  <div data-count={s.value} data-suffix={s.suffix} className="stat-num" style={{ fontSize: "clamp(36px,4.2vw,62px)" }}>
                    {s.value}{s.suffix}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="paper px" style={{ paddingTop: 40, paddingBottom: 120 }}>
          <div className="wrap">
            <SecHead label="04 / recent work" style={{ marginBottom: 48 }}>
              <Link href="/media" className="aside" style={{ color: "var(--muted-l1)" }}>all media work →</Link>
            </SecHead>
            <Split style={{ margin: "0 auto 52px", fontSize: "clamp(36px,5.2vw,86px)", lineHeight: 0.93, letterSpacing: "-0.035em", maxWidth: "16ch", textAlign: "center" }}>
              Across Northern Arizona
            </Split>
            <div className="grid" style={{ gap: 24 }}>
              {WORK.map((w) => (
                <article key={w.yt} data-card className="work-card">
                  <div className="grid" style={{ gap: 14 }}>
                    <span className="mono c-orange-l" style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}>{w.tag}</span>
                    <h3 className="display" style={workTitle}>{w.title}</h3>
                    <span className="mono" style={{ ...workMeta, color: "var(--muted-l2)" }}>{w.meta}</span>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--muted-l1)", maxWidth: "44ch" }}>{w.body}</p>
                    <button data-yt={w.yt} data-yt-title={w.ytTitle} type="button" className="link-under c-orange-l">watch the film ▶</button>
                  </div>
                  <button data-yt={w.yt} data-yt-title={w.ytTitle} type="button" className="thumb-btn" aria-label={`Play ${w.ytTitle}`}>
                    <span data-reveal className="frame" style={{ height: 300 }}>
                      <Image data-parallax src={w.img} alt={w.ytTitle} fill sizes="(max-width: 760px) 100vw, 620px" style={parallaxImg} />
                      <span className="play" />
                    </span>
                  </button>
                </article>
              ))}
              <article data-card className="work-card is-dark">
                <div className="grid" style={{ gap: 14 }}>
                  <span className="mono c-orange" style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}>03 / media · brand lift</span>
                  <h3 className="display" style={workTitle}>Veterinary Clinic</h3>
                  <span className="mono" style={{ ...workMeta, color: "var(--muted-d2)" }}>Small business · Brand content</span>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--muted-d1)", maxWidth: "44ch" }}>
                    A veterinary clinic needed better footage to work with. We built them a bank of edited, color-graded clips to pull from whenever they need it.
                  </p>
                  <Link href="/media" className="link-under c-orange">see media →</Link>
                </div>
                <Link href="/media" data-reveal className="frame svc-media" style={{ height: 300, border: "none" }} aria-label="Brand lift clip for a veterinary clinic — see media">
                  <LazyVideo src="/brand-lift.mp4" poster="/brand-lift-clinic.jpg" label="Brand lift footage for a veterinary clinic" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section id="reviews" className="paper px" style={{ paddingBottom: 120 }}>
          <div className="wrap">
            <SecHead label="05 / reviews" style={{ marginBottom: 48 }}>
              <span className="aside" style={{ color: "var(--muted-l1)" }}>★ 5.0 · 7 Google reviews</span>
            </SecHead>
            <div className="auto-grid" style={{ "--min": "320px", gap: 20 }}>
              {REVIEWS.map((r) => (
                <figure key={r.name} className="review">
                  <div className="grid" style={{ gap: 14 }}>
                    <span className="c-orange" style={{ letterSpacing: "0.12em", fontSize: 15 }} aria-label="5 out of 5 stars">★★★★★</span>
                    <blockquote style={{ margin: 0, fontSize: 18, lineHeight: 1.5, letterSpacing: "-0.01em", textWrap: "pretty" }}>
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                  </div>
                  <figcaption>
                    <span className="grid" style={{ gap: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: 15 }}>{r.name}</span>
                      <span className="micro" style={{ color: "var(--muted-l2)" }}>{r.org}</span>
                    </span>
                    <span className="micro c-orange-l">{r.tag}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="paper px" style={{ paddingBottom: 120 }}>
          <div className="wrap">
            <SecHead label="06 / how it works" style={{ marginBottom: 48 }}>
              <span className="aside" style={{ color: "var(--muted-l2)" }}>same on both sides of the business</span>
            </SecHead>
            <div className="auto-grid hairline-grid" style={{ "--min": "250px" }}>
              {STEPS.map((s) => (
                <div key={s.n} className="grid" style={{ padding: "36px 30px", gap: 13, alignContent: "start" }}>
                  <span className="mono c-orange-l" style={{ fontSize: 12, letterSpacing: "0.14em" }}>{s.n}</span>
                  <h3 className="display" style={{ fontSize: 23, letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--muted-l1)" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection
          quoteline="get a quote"
          label="07 / request a quote"
          heading="Tell me what you're picturing"
          body="Media, documentation, or something that doesn't fit either — pricing depends on scope, location and deliverables, and you'll have it in writing before anything is booked."
          note="no spam — your details are only used to answer your inquiry."
        >
          <FieldRow>
            <Field type="text" name="name" required placeholder="Name" autoComplete="name" />
            <Field type="email" name="email" required placeholder="Email" autoComplete="email" />
          </FieldRow>
          <FieldRow>
            <Field type="tel" name="phone" placeholder="Phone (optional)" autoComplete="tel" />
            <ServiceSelect options={SERVICES} />
          </FieldRow>
          <Field as="textarea" name="message" required rows={3} placeholder="Location, what you're picturing, and when" />
        </ContactSection>
      </main>
      <Footer current="home" />
      <VideoModal />
      <PageMotion />
    </>
  );
}

const pilotP = { margin: 0, fontSize: 17, lineHeight: 1.6, color: "var(--muted-d1)", maxWidth: "42ch", textWrap: "pretty" };
const parallaxImg = { objectFit: "cover", top: "-13%", height: "126%", bottom: "auto" };
