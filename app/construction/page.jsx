import Image from "next/image";
import Link from "next/link";
import Hud from "../components/Hud";
import PageMotion from "../components/PageMotion";
import { ContactSection, Faq, Field, FieldRow, Footer, Hero, ServiceSelect } from "../components/sections";
import { Chips, Eyebrow, Marquee, SecHead, Split } from "../components/ui";
import { OPEN_GRAPH } from "../lib/site";

const TITLE = "Construction Drone Progress Updates & Site Mapping — Arizona";
const DESCRIPTION =
  "Monthly construction progress flights, land documentation and RTK mapping for GCs and developers across Northern Arizona.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/construction" },
  // og:image comes from ./opengraph-image.jsx
  openGraph: { ...OPEN_GRAPH, title: TITLE, description: DESCRIPTION, url: "/construction" },
};

const SECTIONS = [
  { id: "top", label: "intro" },
  { id: "services", label: "what i document" },
  { id: "booking", label: "how to book" },
  { id: "deliverables", label: "deliverables" },
  { id: "faq", label: "faq" },
  { id: "contact", label: "contact" },
];

const SERVICES = [
  {
    tag: "01 / CONSTRUCTION",
    aside: "monthly",
    title: ["Progress", "updates"],
    img: "/construction/progress.jpg",
    alt: "Drone progress photo of an active construction site",
    body: "A fixed set of angles flown on a schedule, so month four is directly comparable to month one. One link the whole team can open.",
    chips: ["owner updates", "draw requests", "marketing use"],
  },
  {
    tag: "02 / LAND",
    aside: "one-time or phased",
    title: ["Land", "documentation"],
    img: "/construction/planning.jpg",
    alt: "Aerial land documentation of an undeveloped parcel for future planning",
    body: "Before anything moves: access, drainage, treelines, existing structures, boundaries in context. The baseline every future plan gets measured against.",
    chips: ["future planning", "acquisitions", "permitting support"],
  },
  {
    tag: "03 / MAPPING",
    aside: "standalone or add-on",
    title: ["Mapping", "over time"],
    img: "/construction/mapping.jpg",
    alt: "Drone mapping orthomosaic of a job site tracked over time",
    body: "High-resolution orthomosaic maps flown on an RTK Matrice 4E (1cm horizontal accuracy) — stack them chronologically to track grading, stockpiles and phases. Not a licensed survey service.",
    chips: ["site maps", "cut & fill checks", "phase comparison"],
  },
  {
    tag: "04 / ON REQUEST",
    teal: true,
    aside: "as needed",
    title: ["Inspection", "support"],
    img: "/construction/inspection.jpg",
    alt: "Aerial drone inspection view of a structure on a construction site",
    body: "Close aerial visuals of roofs, upper elevations and hard-to-reach areas so nobody sets a ladder to answer a question.",
    chips: ["roofs", "elevations", "punch list"],
  },
];

const PLANS = [
  { tag: "one-time visit", title: "A single record", body: "Best for land you just acquired, a milestone worth documenting, or a one-off map. Stills, video and a map if you need it, delivered in 24 hours." },
  { tag: "monthly retainer", title: "A running timeline", body: "Same day each month, same angles, same folder structure, for the life of the build. Most GC work runs this way — it's the version that pays for itself.", featured: true },
  { tag: "multi-site", title: "Several jobs, one route", body: "Running three or four sites inside the same radius? They get grouped into one trip and priced accordingly." },
];

const STATS = [
  { count: 1, suffix: "cm", text: "1cm", label: "rtk horizontal accuracy" },
  { text: "Part 107", label: "FAA certified & insured" },
  { count: 5, text: "5", label: "aircraft, matched to the job" },
  { count: 2023, text: "2023", label: "flying arizona since" },
];

const DELIVERABLES = [
  "Professional visuals you can share with clients and partners without explanation",
  "Undeniable progress record that settles timeline questions",
  "Safer documentation of elevated or restricted areas",
  "Evidence-based site maps for planning and decision-making",
  "Organized files that integrate into reports, proposals, and presentations",
  "Reduced site visits and faster issue identification",
];

const FAQ = [
  { q: "How often should a construction site be flown?", a: "Most projects fly monthly, so each update is directly comparable to the last. Weekly or one-time flights are available for key milestones." },
  { q: "What do I receive after each flight?", a: "Progress photos and video from the same fixed angles every visit, plus maps or orthomosaics when mapping is included, all in one shared link your whole team can open." },
  { q: "How accurate is your drone mapping?", a: "RTK mapping with the DJI Matrice 4E delivers centimeter-level horizontal accuracy for site plans, progress tracking, and planning." },
  { q: "Are you licensed and insured?", a: "Yes. ALFA Drone Solutions is FAA Part 107 certified and insured for commercial drone work, and handles any airspace authorization the site needs." },
  { q: "What areas do you serve?", a: "Northern Arizona: Cottonwood, the Verde Valley, Sedona, Prescott, and Flagstaff. Also Phoenix and statewide projects by request." },
  { q: "Can you document land before construction starts?", a: "Yes. Land documentation captures a property's current condition so you have a baseline for planning, permitting, and comparison over time." },
];

const SERVICE_OPTIONS = [
  "Construction progress — monthly",
  "Construction progress — one-time",
  "Land documentation",
  "Mapping",
  "Inspection support",
  "Multiple sites",
];

const parallaxImg = { objectFit: "cover", top: "-13%", height: "126%", bottom: "auto" };
const wordStyle = { display: "block", fontSize: "clamp(48px,12vw,180px)", lineHeight: 0.86, letterSpacing: "-0.045em" };

export default function ConstructionPage() {
  return (
    <>
      <Hud label="docs" sections={SECTIONS} />
      <main id="main">
        <Hero
          gradient="linear-gradient(180deg, rgba(11,12,14,0.86) 0%, rgba(11,12,14,0.55) 45%, rgba(11,12,14,0.95) 100%)"
          background={<Image src="/construction/hero.jpg" alt="Construction site aerial overview" fill preload sizes="100vw" style={{ objectFit: "cover" }} />}
          bottom={<Marquee duration={26} items={["general contractors", "home builders", "land developers", "site supers", "owners & lenders"]} />}
        >
          <Eyebrow
            items={[
              { text: "documentation" },
              { text: "construction drone progress · land · mapping" },
              { text: "northern arizona", teal: true },
            ]}
          />
          <Split as="h1" style={{ fontSize: "clamp(46px,8vw,128px)", lineHeight: 0.89, letterSpacing: "-0.04em", maxWidth: "14ch", textWrap: "balance" }}>
            A record of every change on site
          </Split>
          <div className="auto-grid" style={{ "--min": "290px", gap: 34, alignItems: "end", maxWidth: 1040 }}>
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.55, color: "var(--muted-d1)", maxWidth: "48ch", textWrap: "pretty" }}>
              Progress updates for builds in motion, land documentation for what you&apos;re planning next, and mapping that lets you compare a site to itself month over month.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a data-magnet href="#contact" className="pill pill-solid">get a quote ●</a>
              <Link href="/media" className="pill pill-line">looking for media instead →</Link>
            </div>
          </div>
        </Hero>

        <section data-wordpin className="paper px" style={{ minHeight: "100svh", display: "grid", placeItems: "center", paddingTop: 90, paddingBottom: 90 }}>
          <h2 style={{ margin: 0, display: "grid", gap: 4, textAlign: "center", fontWeight: "inherit" }}>
            <span data-word className="display" style={wordStyle}>Construction site</span>
            <span data-word className="display c-orange-l" style={wordStyle}>Documented</span>
            <span data-word className="display" style={wordStyle}>Every month</span>
            <span data-word className="mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--muted-l2)", marginTop: 20, fontWeight: 400 }}>
              comparable frames · dated folders · one shared link
            </span>
          </h2>
        </section>

        <section id="services" className="dark px" style={{ paddingTop: 110, paddingBottom: 120 }}>
          <div className="wrap auto-grid" style={{ "--min": "300px", gap: 56, alignItems: "start" }}>
            <div className="sticky-col grid" style={{ top: 120, gap: 22 }}>
              <span className="label c-orange">02 / what i document</span>
              <Split style={{ fontSize: "clamp(32px,4.2vw,62px)", lineHeight: 0.96, letterSpacing: "-0.035em", maxWidth: "13ch" }}>
                Four kinds of record
              </Split>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--muted-d1)", maxWidth: "38ch" }}>
                Flown on your schedule, delivered in dated folders, priced per site. Mix them however the project needs.
              </p>
              <a data-magnet href="#contact" className="pill pill-solid" style={{ justifySelf: "start", padding: "17px 28px" }}>get a quote ●</a>
            </div>
            <div className="grid" style={{ gap: 18 }}>
              {SERVICES.map((s) => (
                <article key={s.tag} className="svc">
                  <div className="svc-meta">
                    <span className={s.teal ? "c-teal" : "c-orange"}>{s.tag}</span>
                    <span>{s.aside}</span>
                  </div>
                  <h3>
                    {s.title[0]}
                    <br />
                    {s.title[1]}
                  </h3>
                  <div data-reveal className="svc-media">
                    <Image data-parallax src={s.img} alt={s.alt} fill sizes="(max-width: 760px) 100vw, 640px" style={parallaxImg} />
                  </div>
                  <p>{s.body}</p>
                  <Chips items={s.chips} />
                </article>
              ))}
              <article className="svc-cta">
                <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em" }}>05 / NEXT</span>
                <h3 className="display" style={{ fontSize: "clamp(26px,3vw,40px)", lineHeight: 1, letterSpacing: "-0.03em" }}>
                  Send the address and the schedule
                </h3>
                <a data-magnet href="#contact" className="pill pill-ink" style={{ justifySelf: "start" }}>get a quote ●</a>
              </article>
            </div>
          </div>
        </section>

        <section id="booking" className="paper px" style={{ paddingTop: 100, paddingBottom: 90 }}>
          <div className="wrap grid" style={{ gap: 50 }}>
            <SecHead label="03 / how to book it">
              <span className="aside" style={{ color: "var(--muted-l2)" }}>quoted per site — no packages to decode</span>
            </SecHead>
            <div className="auto-grid hairline-grid" style={{ "--min": "290px" }}>
              {PLANS.map((p) => (
                <div
                  key={p.tag}
                  className="grid"
                  style={{ padding: "36px 32px", gap: 16, alignContent: "start", borderLeft: p.featured ? "3px solid var(--orange)" : undefined }}
                >
                  <span className="label c-orange-l" style={{ letterSpacing: "0.14em" }}>{p.tag}</span>
                  <h3 className="display" style={{ fontSize: 26, letterSpacing: "-0.025em" }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--muted-l1)" }}>{p.body}</p>
                </div>
              ))}
            </div>
            <div className="auto-grid hairline-grid" style={{ "--min": "180px" }}>
              {STATS.map((s) => (
                <div key={s.label} className="stat" style={{ padding: "30px 28px" }}>
                  <div data-count={s.count} data-suffix={s.suffix} className="stat-num" style={{ fontSize: "clamp(34px,4vw,58px)" }}>
                    {s.text}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="deliverables" className="paper px" style={{ paddingTop: 20, paddingBottom: 120 }}>
          <div className="wrap">
            <SecHead label="04 / every project includes" style={{ marginBottom: 48 }} />
            <div className="auto-grid" style={{ "--min": "320px", gap: 56, alignItems: "start" }}>
              <div className="sticky-col grid" style={{ top: 100, gap: 24 }}>
                <Split style={{ fontSize: "clamp(36px,5vw,80px)", lineHeight: 0.93, letterSpacing: "-0.035em", maxWidth: "12ch" }}>
                  What you actually get
                </Split>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "var(--muted-l1)", maxWidth: "44ch" }}>
                  Documentation that pays for itself through faster decisions, clearer communication, and fewer repeat site visits.
                </p>
                <div data-reveal className="frame" style={{ height: 280, border: "1px solid var(--paper-line)" }}>
                  <Image data-parallax src="/construction/value-card.jpg" alt="Aerial view of a construction site" fill sizes="(max-width: 760px) 100vw, 620px" style={parallaxImg} />
                </div>
              </div>
              <ol className="grid hairline-grid" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {DELIVERABLES.map((d, i) => (
                  <li key={d} className="grid" style={{ padding: "28px 30px", gridTemplateColumns: "52px minmax(0,1fr)", gap: 18, alignItems: "baseline" }}>
                    <span className="mono c-orange-l" style={{ fontSize: 12, letterSpacing: "0.14em" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ fontSize: 19, lineHeight: 1.4, fontWeight: 600, letterSpacing: "-0.01em" }}>{d}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <Faq items={FAQ} />

        <ContactSection
          quoteline="document your project"
          label="06 / request a quote"
          heading="Send the site and the schedule"
          body="Address, what stage it's at, and how often you want it flown. You'll get pricing in writing before anything is booked."
        >
          <FieldRow>
            <Field type="text" name="name" required placeholder="Name" autoComplete="name" />
            <Field type="text" name="company" placeholder="Company" autoComplete="organization" />
          </FieldRow>
          <FieldRow>
            <Field type="email" name="email" required placeholder="Email" autoComplete="email" />
            <ServiceSelect options={SERVICE_OPTIONS} />
          </FieldRow>
          <Field as="textarea" name="message" required rows={3} placeholder="Site address, current stage, and how often you want it flown" />
        </ContactSection>
      </main>
      <Footer current="construction" />
      <PageMotion />
    </>
  );
}
