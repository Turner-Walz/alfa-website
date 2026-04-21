import { ArrowRight, Check, Building2 } from "lucide-react";
import Image from "next/image";

export default function ConstructionPage() {
    return (
        <main className="min-h-screen bg-zinc-900 text-white">
            <div className="relative overflow-hidden border-b border-zinc-700/60">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/construction/hero.jpg"
                        alt="Construction site aerial overview"
                        fill
                        priority
                        className="object-cover brightness-105"
                    />

                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-zinc-950" />
                </div>

                {/* HERO */}
                <section className="relative z-10 flex min-h-[48vh] items-center justify-center px-5 py-10 md:py-14">
                    <div className="mx-auto w-full max-w-6xl">
                        <div className="mx-auto max-w-4xl">
                            <a
                                href="/"
                                className="inline-block text-sm text-zinc-300 underline underline-offset-4 transition hover:text-white"
                            >
                                ← Back to home
                            </a>
                        </div>

                        <div className="mx-auto mt-6 max-w-4xl rounded-3xl border border-white/10 bg-black/45 px-8 py-12 text-center shadow-2xl backdrop-blur-md md:px-12 md:py-14">
                            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
                                ALFA Construction Services
                            </p>

                            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                                Aerial Site Documentation That Keeps Teams Aligned
                            </h1>

                            <p className="mx-auto mt-6 max-w-3xl text-base text-zinc-100 sm:text-lg">
                                Professional drone documentation for contractors, builders, and developers across Northern Arizona. Progress tracking, site mapping, and inspection support that reduces miscommunication and accelerates decision-making.
                            </p>

                            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                                <a
                                    href="/#contact"
                                    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-black transition hover:bg-zinc-200 hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    Request a Quote
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>

                                <a
                                    href="mailto:hello@alookfromabove.co"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    Email me
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VALUE PROPS */}
                <section className="relative pb-16 pt-16 md:pb-20 md:pt-20">
                    <div className="relative z-10 mx-auto max-w-6xl px-5">
                        <div className="text-center">
                            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                            </p>
                            <h2 className="mt-2 text-3xl font-extrabold">The visibility contractors need</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
                                Aerial coverage eliminates the guesswork. You get documented progress, faster stakeholder alignment, and a clear record of every phase. Less time defending decisions. More time building.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* SERVICES */}
            <section className="border-b border-zinc-700/60 pb-28 pt-24 md:pb-36 md:pt-32">
                <div className="mx-auto max-w-6xl px-5">
                    <div className="mb-16 text-center md:mb-20">
                        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                            Services
                        </p>
                        <h2 className="mt-2 text-3xl font-extrabold">What we document</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
                            Three core services designed to give you the documentation and visibility you need to manage projects with confidence.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 md:gap-24">
                        <ConstructionServiceBlock
                            eyebrow="Progress Tracking"
                            title="Scheduled Progress Documentation"
                            description="Consistent aerial coverage at key phases keeps stakeholders informed without waiting for site visits. Clients see progress. Partners understand timelines. You have undeniable proof of every milestone."
                            bullets={[
                                "Scheduled photo updates at your intervals",
                                "Before, during, and after comparisons",
                                "Video summaries for stakeholder reports",
                                "Organized delivery ready for presentations or client comms",
                            ]}
                            image="/construction/progress.jpg"
                        />

                        <ConstructionServiceBlock
                            eyebrow="Site Mapping"
                            title="Orthomosaic Maps & Aerial Surveys"
                            description="Precise overhead maps for land projects, earthwork documentation, and layout verification. Track site changes over time. Make faster decisions. Reduce the risk of miscommunication on scope and boundaries."
                            bullets={[
                                "High-resolution orthomosaic maps",
                                "Change documentation over project phases",
                                "Site condition surveys for planning",
                                "Easy integration into project reports and timelines",
                            ]}
                            image="/construction/mapping.jpg"
                            reverse
                        />

                        <ConstructionServiceBlock
                            eyebrow="Safety & Inspections"
                            title="Aerial Inspection & Hard-to-Access Documentation"
                            description="Review roofs, structures, and elevated areas without sending crews up. Drone imagery gives you clearer visibility, better documentation, and safer inspections. Identify issues early. Avoid costly rework."
                            bullets={[
                                "Roof and exterior inspection imagery",
                                "High-access area documentation without crews",
                                "Defect and detail photography for QA",
                                "Professional inspection records for liability and handoff",
                            ]}
                            image="/construction/inspection.jpg"
                        />
                    </div>
                </div>
            </section>

            {/* PROCESS + DELIVERABLES */}
            <section className="relative overflow-hidden border-b border-zinc-700/60 py-16 md:py-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/construction/planning.jpg"
                        alt="Construction planning background"
                        className="h-full w-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-zinc-950/55" />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-zinc-950/70 to-zinc-950" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-5">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                            Process
                        </p>
                        <h2 className="mt-2 text-3xl font-extrabold">How it works</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
                            Straightforward. No surprises. Built to fit into your workflow without friction.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-4">
                        <StepCard
                            step="Step 1"
                            title="Share the project"
                            text="Tell me the site, timeline, scope, and documentation you need. That's all I need to quote."
                        />
                        <StepCard
                            step="Step 2"
                            title="Plan the details"
                            text="We align on capture frequency, deliverables, and scheduling to fit your project phases."
                        />
                        <StepCard
                            step="Step 3"
                            title="I handle the flying"
                            text="Professional, safe flight work on location. You stay focused on the job."
                        />
                        <StepCard
                            step="Step 4"
                            title="Get organized files"
                            text="Professionally organized photos, video, or maps ready to drop into reports or share with clients."
                        />
                    </div>

                    <div className="mt-16 grid gap-10 border-t border-white/10 pt-16 md:grid-cols-2 md:items-start">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                                Every project includes
                            </p>
                            <h2 className="mt-2 text-3xl font-extrabold">
                                What you actually get:
                            </h2>
                            <p className="mt-4 max-w-xl text-zinc-300">
                                Documentation that pays for itself through faster decisions, clearer communication, and fewer repeat site visits.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                            <ul className="space-y-4 text-zinc-200">
                                {[
                                    "Professional visuals you can share with clients and partners without explanation",
                                    "Undeniable progress record that settles timeline questions",
                                    "Safer documentation of elevated or restricted areas",
                                    "Evidence-based site maps for planning and decision-making",
                                    "Organized files that integrate into reports, proposals, and presentations",
                                    "Reduced site visits and faster issue identification",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-5">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md md:p-10">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/60">
                            <Building2 className="h-5 w-5" />
                        </div>

                        <h2 className="mt-5 text-3xl font-extrabold">
                            Ready to get better site visibility?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
                            Tell me about your project, location, and timeline. I'll send a clear quote based on exactly what you need.
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

function ConstructionServiceBlock({
    eyebrow,
    title,
    description,
    bullets,
    image,
    reverse = false,
}) {
    return (
        <div className="mx-auto w-full max-w-6xl">
            {/* MOBILE CARD */}
            <div className="overflow-hidden rounded-3xl border border-zinc-700/50 bg-zinc-800/30 md:hidden">
                <div className="h-[200px] w-full border-b border-zinc-700/50">
                    <img
                        src={image}
                        alt={title}
                        className="block h-full w-full object-cover"
                    />
                </div>

                <div className="p-6">
                    {eyebrow ? (
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                            {eyebrow}
                        </p>
                    ) : null}

                    <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white">
                        {title}
                    </h3>

                    <p className="mt-5 text-base leading-7 text-zinc-300">
                        {description}
                    </p>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                        What's included
                    </p>

                    <ul className="mt-4 space-y-3 text-zinc-200">
                        {bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-300" />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* DESKTOP LAYOUT */}
            <div className="hidden items-start gap-14 md:grid md:grid-cols-2 lg:gap-16">
                <div className={reverse ? "md:order-2" : "md:order-1"}>
                    <div className="group overflow-hidden rounded-3xl border border-zinc-700/50 bg-zinc-800/30">
                        <img
                            src={image}
                            alt={title}
                            className="block h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div className={`${reverse ? "md:order-1" : "md:order-2"} md:px-4`}>
                    {eyebrow ? (
                        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                            {eyebrow}
                        </p>
                    ) : null}

                    <h3 className="mt-3 text-3xl font-extrabold leading-tight text-white">
                        {title}
                    </h3>

                    <p className="mt-6 leading-8 text-zinc-300">
                        {description}
                    </p>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                        What's included
                    </p>

                    <ul className="mt-5 space-y-4 text-zinc-200">
                        {bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-300" />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function StepCard({ step, title, text }) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                {step}
            </p>
            <h3 className="mt-3 text-xl font-extrabold">{title}</h3>
            <p className="mt-3 text-zinc-300">{text}</p>
        </div>
    );
}

const RAINBOW =
    "linear-gradient(90deg, #ff3b30, #ff9500, #ffcc00, #34c759, #0a84ff, #5e5ce6, #ff2d55)";

const RAINBOW_DARK_OVERLAY =
    "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.15), rgba(0,0,0,0.35))";

function RainbowLink({ href, children, iconRight, size = "md", className = "" }) {
    const sizeClass =
        size === "sm"
            ? "px-4 py-2 text-sm rounded-xl"
            : "px-6 py-3 text-base rounded-xl";

    return (
        <a
            href={href}
            className={`group relative inline-flex items-center gap-2 overflow-hidden bg-white font-extrabold text-black transition hover:-translate-y-0.5 active:translate-y-0 ${sizeClass} ${className}`}
        >
            <span className="relative z-10">{children}</span>
            {iconRight && <span className="relative z-10">{iconRight}</span>}

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