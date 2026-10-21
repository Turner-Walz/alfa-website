import Link from "next/link";
import Hud from "../components/Hud";
import LazyVideo from "../components/LazyVideo";
import ListingSlideshow from "../components/ListingSlideshow";
import PageMotion from "../components/PageMotion";
import PortfolioFilters from "../components/PortfolioFilters";
import VideoModal from "../components/VideoModal";
import { ContactSection, Faq, Field, FieldRow, Footer, Hero, ServiceSelect, VideoBackdrop, posterSrc } from "../components/sections";
import { Chips, Eyebrow, JsonLd, ParallaxImage, SecHead, Split } from "../components/ui";
import { INSTAGRAM, OPEN_GRAPH } from "../lib/site";

const TITLE = "FPV Fly-Throughs & Drone Video for Real Estate & Events — AZ";
const DESCRIPTION =
  "Cinematic FPV fly-throughs, real estate listings, event coverage and brand content in Sedona, Cottonwood, Prescott & Phoenix. Drone media from $150.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/media" },
  // og:image comes from ./opengraph-image.jsx
  openGraph: { ...OPEN_GRAPH, title: TITLE, description: DESCRIPTION, url: "/media" },
};

const SECTIONS = [
  { id: "top", label: "intro" },
  { id: "services", label: "what i shoot" },
  { id: "who", label: "who i work with" },
  { id: "work", label: "work" },
  { id: "faq", label: "faq" },
  { id: "contact", label: "contact" },
];

const QUOTES = [
  { q: "Executed my vision to perfection.", by: "Inspired Destinations" },
  { q: "The videos, photos, and edited content were all top notch!", by: "Verde Valley Fair" },
  { q: "Takes great pride in what he does.", by: "The Halliday House" },
];

const LISTING_SLIDES = [
  { src: "/listing-residential.jpg", alt: "Residential listing aerial", label: "residential" },
  { src: "/listing-commercial.jpg", alt: "Commercial property aerial", label: "commercial" },
  { src: "/listing-land.jpg", alt: "Land parcel aerial with property boundary highlighted", label: "land" },
];

const WHO = [
  ["Realtors & builders", "Listings that show the lot, the view and the drive up — not just four walls."],
  ["Small business", "One shoot, then months of footage for social, your site and ads."],
  ["Photographers", "Add aerial to a package without buying an aircraft or a license. Raw files, your edit."],
  ["Media teams", "A pilot who takes direction, works to a shot list and stays out of frame."],
  ["Event organizers", "Proof of scale for sponsors, and a recap that sells next year's tickets."],
  ["Anyone with a vision", "Bring the idea — a route, a reveal, a feeling. I'll work out how to fly it."],
];

const PORTFOLIO = [
  { id: "N8lq8gS1a20", title: "Commercial Building Flythrough", cat: "fpv", meta: "Phoenix, AZ • Cinematic FPV", img: "/posters/commercial-building.jpg", date: "2026-05-07T18:00:42-07:00" },
  { id: "bNwrwLim6cA", title: "Choice Roofing", cat: "business", meta: "Cottonwood, AZ • Brand Video", vertical: true, date: "2026-05-07T18:40:16-07:00" },
  { id: "Bi9FKKsMyBI", title: "Verde Valley Fair 2026", cat: "fpv", meta: "Cottonwood, AZ • FPV Flyover", date: "2026-05-07T18:24:19-07:00" },
  { id: "2xuluLFEzdo", title: "The Halliday House", cat: "fpv", meta: "Cornville, AZ • Vacation Rental", img: "/posters/halliday-house.jpg", date: "2026-04-21T09:46:03-07:00" },
  { id: "GIJsdV0fzwY", title: "Cornville Swap Meet", cat: "business", meta: "Cornville, AZ • Event Reel", img: "/posters/swapmeet.jpg", vertical: true, date: "2026-05-07T18:55:36-07:00" },
  { id: "BtMy19MHvlU", title: "Northern Arizona PT Clinic", cat: "business", meta: "Cottonwood, AZ", date: "2026-01-26T10:21:31-08:00" },
  { id: "Y5r-9wg8KeE", title: "FPV Truck Video", cat: "fpv", meta: "Cinematic FPV • Dirt road", img: "/posters/fpv-truck.jpg", date: "2026-01-26T10:24:47-08:00" },
  { id: "Bsqh29oxDq8", title: "Sedona Aerial Reel", cat: "fpv", meta: "Sedona, Arizona", img: "/posters/montage.jpg", date: "2026-01-25T11:11:56-08:00" },
];

const ytThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const VIDEO_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": PORTFOLIO.map((v) => ({
    "@type": "VideoObject",
    name: v.title,
    description: `${v.title} — drone video by ALFA Drone Solutions. ${v.meta.replace(/ • /g, ", ")}.`,
    thumbnailUrl: ytThumb(v.id),
    embedUrl: `https://www.youtube.com/embed/${v.id}`,
    uploadDate: v.date,
  })),
};

const FAQ = [
  { q: "How much does drone video cost?", a: "Drone media starts at $150. The final price depends on scope, location, and deliverables, like editing, color grading, and the number of finished clips or photos. Send a few details through the form below and you'll get a clear quote." },
  { q: "Are you licensed and insured?", a: "Yes. ALFA Drone Solutions is FAA Part 107 certified and insured for commercial drone work." },
  { q: "What areas do you serve?", a: "Northern Arizona: Sedona, Cottonwood and the Verde Valley, Prescott, and Flagstaff. Also Phoenix and anywhere else in Arizona by request." },
  { q: "Can you fly indoors?", a: "Yes. Sub-250g FPV drones are built for indoor fly-throughs of homes, commercial spaces, and venues, and are safe to fly around people." },
  { q: "Can you work alongside my photographer or media team?", a: "Yes. Second-pilot work is a big part of what I do: I show up, match your shot list and style, and hand off footage in the format your editor needs." },
  { q: "How do I get my files?", a: "Edited, color-graded photos and video are delivered through one shared online gallery, ready to post, share, or download." },
];

const SERVICES = [
  "FPV fly-through",
  "Real estate listing",
  "Event coverage",
  "Business / brand content",
  "Second pilot on set",
  "Something else",
];

const wordStyle = { display: "block", fontSize: "clamp(48px,12vw,180px)", lineHeight: 0.86, letterSpacing: "-0.045em" };

function Service({ tag, tagColor = "c-orange", aside, title, media, body, chips }) {
  return (
    <article className="svc">
      <div className="svc-meta">
        <span className={tagColor}>{tag}</span>
        <span>{aside}</span>
      </div>
      <h3>{title}</h3>
      {media}
      <p>{body}</p>
      <Chips items={chips} />
    </article>
  );
}

export default function MediaPage() {
  return (
    <>
      <JsonLd data={VIDEO_SCHEMA} />
      <Hud label="media" sections={SECTIONS} />
      <main id="main">
        <Hero
          gradient="linear-gradient(180deg, rgba(11,12,14,0.82) 0%, rgba(11,12,14,0.48) 45%, rgba(11,12,14,0.94) 100%)"
          background={<VideoBackdrop poster="/posters/hero-background.jpg" video="/hero-background.mp4" />}
          bottom={
            <div className="ticker grid" style={{ padding: "18px 0 22px", gridTemplateColumns: "minmax(0,1fr)", gap: 14 }}>
              <div className="mono c-orange" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                <span aria-label="Five stars">★★★★★</span>
                <span style={{ color: "var(--text-light)" }}>What people are saying</span>
              </div>
              <div data-marquee data-duration={55} className="marquee">
                {[false, true].map((dup) => (
                  <div key={String(dup)} aria-hidden={dup || undefined} style={{ display: "flex", gap: 72, paddingRight: 72, alignItems: "center", fontSize: 17, letterSpacing: "-0.005em", color: "var(--muted-d1)" }}>
                    {QUOTES.map((r) => (
                      <span key={r.by} style={{ display: "flex", gap: 12, alignItems: "baseline", whiteSpace: "nowrap" }}>
                        <span style={{ color: "var(--text-light)", fontStyle: "italic" }}>&ldquo;{r.q}&rdquo;</span>
                        <span style={{ color: "var(--muted-d2)" }}>— {r.by}</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          }
        >
          <Eyebrow
            items={[
              { text: "media" },
              { text: "cinema aerials · fpv · 5.1k imagery" },
              { text: "sedona · cottonwood · prescott · phoenix", teal: true },
            ]}
          />
          {/* Above the fold: plain server-rendered text (no split-text intro) so it paints immediately for LCP. */}
          <h1 className="display" style={{ fontSize: "clamp(46px,8vw,128px)", lineHeight: 0.89, letterSpacing: "-0.04em", maxWidth: "14ch", textWrap: "balance" }}>
            Content that elevates your brand
          </h1>
          <div className="auto-grid" style={{ "--min": "290px", gap: 34, alignItems: "end", maxWidth: 1040 }}>
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.55, color: "var(--muted-d1)", maxWidth: "48ch", textWrap: "pretty" }}>
              People judge your brand by what they see online, often before they ever talk to you. We capture content that shows them you&apos;re the best at what you do, and that you aim for perfection in every client interaction.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a data-magnet href="#contact" className="pill pill-solid">start a project ●</a>
              <Link href="/construction" className="pill pill-line">need documentation instead →</Link>
            </div>
          </div>
        </Hero>

        <section data-wordpin className="paper px" style={{ minHeight: "100svh", display: "grid", placeItems: "center", paddingTop: 90, paddingBottom: 90 }}>
          <h2 style={{ margin: 0, display: "grid", gap: 4, textAlign: "center", fontWeight: "inherit" }}>
            <span data-word className="display" style={wordStyle}>One take</span>
            <span data-word className="display c-orange-l" style={wordStyle}>Through</span>
            <span data-word className="display" style={wordStyle}>Anything</span>
            <span data-word className="mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--muted-l2)", marginTop: 20, fontWeight: 400 }}>
              events · real estate · you name it — captured inside and out
            </span>
          </h2>
        </section>

        <section id="services" className="dark px" style={{ paddingTop: 110, paddingBottom: 120 }}>
          <div className="wrap auto-grid" style={{ "--min": "300px", gap: 56, alignItems: "start" }}>
            <div className="sticky-col grid" style={{ top: 120, gap: 22 }}>
              <span className="label c-orange">02 / what i shoot</span>
              <Split style={{ fontSize: "clamp(32px,4.2vw,62px)", lineHeight: 0.96, letterSpacing: "-0.035em", maxWidth: "13ch" }}>
                Five ways to put a camera in the air
              </Split>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--muted-d1)", maxWidth: "38ch" }}>
                Every one of these is quoted per project — tell me the location and the date and you&apos;ll have pricing the same day.
              </p>
              <a data-magnet href="#contact" className="pill pill-solid" style={{ justifySelf: "start", padding: "17px 28px" }}>start a project ●</a>
            </div>
            <div className="grid" style={{ gap: 18 }}>
              <Service
                tag="01 / FPV"
                aside="signature"
                title="Fly-throughs"
                media={
                  <div data-reveal className="svc-media">
                    <LazyVideo src="/flythrough.mp4" poster={posterSrc("/posters/flythrough.jpg")} label="FPV fly-through through a commercial interior" />
                  </div>
                }
                body="Indoor and outdoor. Through a front door, up a stairwell, out a window and over the property line without a single cut."
                chips={["homes", "venues", "shops & gyms"]}
              />
              <Service
                tag="02 / REAL ESTATE"
                aside="per listing"
                title="Listings"
                media={
                  <div data-reveal className="svc-media">
                    <ListingSlideshow slides={LISTING_SLIDES} />
                  </div>
                }
                body="Residential, commercial or land, I'll help you sell it. Aerial stills and video that show the property, the lot and the setting, cut vertical and wide for wherever the listing lives."
                chips={["agents", "builders", "land"]}
              />
              <Service
                tag="03 / EVENTS"
                aside="half or full day"
                title="Event Coverage"
                media={
                  <div data-reveal className="svc-media">
                    <ParallaxImage src="/posters/swapmeet.jpg" alt="Drone event coverage of a crowded outdoor market in Arizona" sizes="(max-width: 760px) 100vw, 640px" />
                  </div>
                }
                body="An established drone operator on site for your event, so every shot from the sky is planned, flown, and executed with perfection."
                chips={["festivals", "weddings", "rodeo & sport"]}
              />
              <Service
                tag="04 / BUSINESS"
                tagColor="c-teal"
                aside="project or ongoing"
                title="Brand lift"
                media={
                  <div data-reveal className="svc-media">
                    <LazyVideo src="/brand-lift.mp4" poster={posterSrc("/brand-lift-clinic.jpg")} label="Brand lift footage for a veterinary clinic" />
                  </div>
                }
                body="A content bank for your small business: fully edited, color-graded footage you can pull from any time you need something stunning for social, your website or an ad."
                chips={["social sets", "website hero", "ad footage"]}
              />
              <Service
                tag="05 / FOR CREWS"
                tagColor="c-teal"
                aside="day rate"
                title="Second pilot"
                media={
                  <div data-reveal className="svc-media">
                    <ParallaxImage src="/pilot-shirt.jpg" alt="Turner Walz on set wearing an ALFA A Look From Above shirt" sizes="(max-width: 760px) 100vw, 640px" style={{ objectPosition: "50% 55%" }} />
                  </div>
                }
                body="Photographers and media teams: you keep the client and the creative, I bring the license, the aircraft and the airspace clearance."
                chips={["raw files", "your shot list", "no credit needed"]}
              />
              <article className="svc-cta">
                <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em" }}>06 / ANYTHING ELSE</span>
                <h3 className="display" style={{ fontSize: "clamp(26px,3vw,40px)", lineHeight: 1, letterSpacing: "-0.03em" }}>
                  Describe it and I&apos;ll tell you if it&apos;s flyable
                </h3>
                <a data-magnet href="#contact" className="pill pill-ink" style={{ justifySelf: "start" }}>get a quote ●</a>
              </article>
            </div>
          </div>
        </section>

        <section id="who" className="paper px" style={{ paddingTop: 100, paddingBottom: 80 }}>
          <div className="wrap grid stack-sm" style={{ gridTemplateColumns: "minmax(0,230px) minmax(0,1fr)", gap: 56, alignItems: "start" }}>
            <div className="sticky-col grid mono" style={{ top: 120, gap: 14, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted-l2)" }}>
              <span className="c-orange-l">● who i work with</span>
              <span style={{ width: "100%", height: 1, background: "var(--paper-line)" }} />
              <span>you don&apos;t need a<br />production budget<br />to book a drone.</span>
            </div>
            <div className="grid hairline-grid">
              {WHO.map(([who, why]) => (
                <div key={who} className="grid stack-sm" style={{ padding: "28px 30px", gridTemplateColumns: "minmax(0,200px) minmax(0,1fr)", gap: 24, alignItems: "baseline" }}>
                  <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.01em", textTransform: "uppercase" }}>{who}</span>
                  <span style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted-l1)" }}>{why}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="paper px" style={{ paddingTop: 20, paddingBottom: 120 }}>
          <div className="wrap">
            <SecHead label="04 / recent work" style={{ marginBottom: 44 }}>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="aside" style={{ color: "var(--muted-l1)" }}>more on instagram →</a>
            </SecHead>
            <Split style={{ margin: "0 0 20px", fontSize: "clamp(36px,5.6vw,92px)", lineHeight: 0.92, letterSpacing: "-0.04em", maxWidth: "15ch" }}>
              Shot across Northern Arizona
            </Split>
            <p style={{ margin: "0 0 34px", fontSize: 17, lineHeight: 1.6, color: "var(--muted-l1)", maxWidth: "52ch" }}>
              A selection of recent aerial photo and video work. Click any clip to play it.
            </p>
            <PortfolioFilters
              total={PORTFOLIO.length}
              filters={[
                { value: "all", label: "all" },
                { value: "fpv", label: "fpv / flythrough" },
                { value: "business", label: "business & events" },
              ]}
            />
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(min(300px,100%),1fr))", gap: "30px 22px" }}>
              {PORTFOLIO.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  className="item"
                  data-item
                  data-cat={v.cat}
                  data-yt={v.id}
                  data-yt-title={v.title}
                  data-yt-vertical={v.vertical ? "1" : undefined}
                >
                  <span data-reveal className="frame" style={{ height: 250, background: "var(--ink)" }}>
                    <ParallaxImage src={v.img || ytThumb(v.id)} alt={v.title} sizes="(max-width: 760px) 100vw, 420px" style={v.img ? undefined : { transform: "scale(1.34)" }} />
                    <span className="shade" />
                    <span className="play" />
                    {v.vertical && <span className="badge">vertical</span>}
                  </span>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
                    <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>{v.title}</span>
                    <span className="mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-l2)", whiteSpace: "nowrap" }}>{v.cat}</span>
                  </span>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-l2)" }}>{v.meta}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <Faq items={FAQ} />

        <ContactSection
          quoteline="Ready to take flight?"
          label="06 / start a project"
          heading="Describe the shot"
          body="A route, a reveal, a property, an event, or a day on set. Tell me what it needs to feel like and I'll tell you how I'd fly it and what it costs."
        >
          <FieldRow>
            <Field type="text" name="name" required placeholder="Name" autoComplete="name" />
            <Field type="email" name="email" required placeholder="Email" autoComplete="email" />
          </FieldRow>
          <FieldRow>
            <Field type="tel" name="phone" placeholder="Phone (optional)" autoComplete="tel" />
            <ServiceSelect options={SERVICES} />
          </FieldRow>
          <Field as="textarea" name="message" required rows={3} placeholder="Location, the shot you're picturing, and when" />
        </ContactSection>
      </main>
      <Footer current="media" />
      <VideoModal />
      <PageMotion />
    </>
  );
}
