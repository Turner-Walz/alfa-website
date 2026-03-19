import { ArrowRight, Check, Camera, Map, ClipboardList, Building2 } from "lucide-react";

export default function ConstructionPage() {
    return (
        <main className="min-h-screen bg-zinc-900 text-white">
            {/* HERO */}
            <section className="relative overflow-hidden border-b border-zinc-700/60">
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute left-1/2 top-[-180px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute bottom-[-220px] right-[-120px] h-[380px] w-[380px] rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
                    <a href="/" className="text-sm text-zinc-400 underline underline-offset-4">
                        ← Back to home
                    </a>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                        ALFA Construction Services
                    </p>

                    <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        Drone support for construction, land, and site documentation.
                    </h1>

                    <p className="mt-6 max-w-3xl text-base text-zinc-300 sm:text-lg">
                        Clear aerial visuals and practical site documentation for contractors, builders, developers,
                        and property projects across Northern Arizona. From progress photos to mapping and inspection
                        support, ALFA helps teams keep a better visual record of the job.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <RainbowLink href="/#contact" iconRight={<ArrowRight className="h-4 w-4" />}>
                            Request a Quote
                        </RainbowLink>

                        <a
                            href="mailto:hello@alookfromabove.co"
                            className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/30 px-6 py-3 font-bold transition hover:bg-zinc-800/60 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Email me
                        </a>
                    </div>
                </div>
            </section>

            {/* VALUE PROPS */}
            <section className="border-b border-zinc-700/60 py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-5">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                            Why it matters
                        </p>
                        <h2 className="mt-2 text-3xl font-extrabold">A better view of the job site</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
                            Drone coverage helps teams document progress, communicate clearly, and keep a visual record
                            of the work without relying on scattered phone photos or repeated site visits.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <ValueCard
                            icon={<Camera className="h-5 w-5" />}
                            title="Visual progress tracking"
                            text="Show clients, crews, and stakeholders how the site is changing over time with consistent aerial updates."
                        />
                        <ValueCard
                            icon={<Map className="h-5 w-5" />}
                            title="Mapping and documentation"
                            text="Capture orthomosaics, site overviews, and reference imagery to support planning and reporting."
                        />
                        <ValueCard
                            icon={<ClipboardList className="h-5 w-5" />}
                            title="Inspection support"
                            text="Get safer views of roofs, structures, and hard-to-reach areas without unnecessary climbing or guesswork."
                        />
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="border-b border-zinc-700/60 pt-24 pb-28 md:pt-32 md:pb-36">
                <div className="mx-auto max-w-6xl px-5">
                    <div className="mb-16 text-center md:mb-20">
                        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                            Services
                        </p>
                        <h2 className="mt-2 text-3xl font-extrabold">Construction drone services</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
                            Focused support for construction teams that need clear visuals, reliable documentation, and
                            better visibility across the life of a project.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 md:gap-24">
                        <ConstructionServiceBlock
                            eyebrow="Construction"
                            title="Construction Progress Photography & Videography"
                            description="Keep stakeholders informed with clear, consistent aerial coverage that shows how the site is changing over time. This is useful for client communication, internal updates, and maintaining a professional visual record of the job from start to finish."
                            bullets={[
                                "Scheduled progress photo updates",
                                "Aerial overview videos",
                                "Before-and-after comparisons",
                                "Visual assets for reports and stakeholder updates",
                            ]}
                            image="/construction/progress.jpg"
                        />

                        <ConstructionServiceBlock
                            eyebrow="Mapping"
                            title="Aerial Mapping & Orthomosaics"
                            description="High-level mapping support for projects that need a clearer understanding of site conditions, layout, and changes over time. Orthomosaic maps can help teams document the site more accurately and communicate updates more clearly."
                            bullets={[
                                "Orthomosaic map capture",
                                "High-resolution site overviews",
                                "Change tracking over time",
                                "Visual documentation for planning and communication",
                            ]}
                            image="/construction/mapping.jpg"
                            reverse
                        />

                        <ConstructionServiceBlock
                            eyebrow="Documentation"
                            title="Inspection Support & Site Documentation"
                            description="Drone imagery can make it easier to review roofs, structures, and hard-to-access areas while reducing unnecessary climbing and improving visibility for project documentation."
                            bullets={[
                                "Roof and exterior inspection imagery",
                                "Safer views of elevated or restricted areas",
                                "Visual documentation for review and reporting",
                                "Milestone-based capture for project records",
                            ]}
                            image="/construction/inspection.jpg"
                        />
                    </div>
                </div>
            </section>

            {/* DELIVERABLES */}
            <section className="border-b border-zinc-700/60 py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-5">
                    <div className="grid gap-10 md:grid-cols-2 md:items-start">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                                Deliverables
                            </p>
                            <h2 className="mt-2 text-3xl font-extrabold">What you actually receive</h2>
                            <p className="mt-4 max-w-xl text-zinc-300">
                                Deliverables depend on the project, but the goal is always the same: useful visuals
                                that are easy to understand and ready to share.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-zinc-700 bg-zinc-800/20 p-7">
                            <ul className="space-y-4 text-zinc-200">
                                {[
                                    "High-resolution aerial photos",
                                    "Short site update videos",
                                    "Orthomosaic maps when needed",
                                    "Inspection imagery for review",
                                    "Clean files ready to share with clients or teams",
                                    "Consistent documentation over time for recurring projects",
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

            {/* PROCESS */}
            <section className="border-b border-zinc-700/60 py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-5">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                            Process
                        </p>
                        <h2 className="mt-2 text-3xl font-extrabold">How it works</h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-4">
                        <StepCard
                            step="Step 1"
                            title="Share the project"
                            text="Tell me the site location, timeline, and what you need documented."
                        />
                        <StepCard
                            step="Step 2"
                            title="Plan the capture"
                            text="We align on the type of coverage, deliverables, and schedule."
                        />
                        <StepCard
                            step="Step 3"
                            title="Capture the site"
                            text="I handle the flight work safely and efficiently on location."
                        />
                        <StepCard
                            step="Step 4"
                            title="Receive your assets"
                            text="You get organized files ready for review, communication, or reporting."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-4xl px-5">
                    <div className="rounded-3xl border border-zinc-700 bg-zinc-800/20 p-8 text-center md:p-10">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/60">
                            <Building2 className="h-5 w-5" />
                        </div>

                        <h2 className="mt-5 text-3xl font-extrabold">
                            Need construction drone coverage in Northern Arizona?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
                            Reach out with your location, project type, and timeline, and I’ll put together a clear
                            quote based on the work you need.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <RainbowLink href="/#contact" iconRight={<ArrowRight className="h-4 w-4" />}>
                                Request a Quote
                            </RainbowLink>

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

function ValueCard({ icon, title, text }) {
    return (
        <div className="rounded-3xl border border-zinc-700 bg-zinc-800/20 p-7 transition hover:-translate-y-1 hover:border-zinc-500 hover:bg-zinc-800/30">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-600 bg-zinc-900/70">
                {icon}
            </div>
            <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
            <p className="mt-3 text-zinc-300">{text}</p>
        </div>
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
                        Deliverables include
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
                        Deliverables include
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

function ServiceCard({ title, bullets }) {
    return (
        <div className="rounded-3xl border border-zinc-700 bg-zinc-800/20 p-7 transition hover:-translate-y-1 hover:border-zinc-500 hover:bg-zinc-800/30">
            <h3 className="text-2xl font-extrabold">{title}</h3>
            <ul className="mt-5 space-y-3 text-zinc-200">
                {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-zinc-300" />
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function StepCard({ step, title, text }) {
    return (
        <div className="rounded-3xl border border-zinc-700 bg-zinc-800/20 p-6 transition hover:-translate-y-1 hover:border-zinc-500 hover:bg-zinc-800/30">
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