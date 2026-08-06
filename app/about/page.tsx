import Reveal from "@/components/motion/Reveal";

const principles = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Clear thinking before visual execution. Every decision should have a reason, a purpose and a measurable role.",
  },
  {
    number: "02",
    title: "Craft",
    description:
      "Details matter. From typography and interaction to performance and content, quality is built deliberately.",
  },
  {
    number: "03",
    title: "Intelligence",
    description:
      "AI is integrated where it creates leverage — faster exploration, smarter systems and more efficient production.",
  },
  {
    number: "04",
    title: "Ambition",
    description:
      "We work best with brands that want to move forward, stand apart and build something with long-term value.",
  },
];

const comparison = [
  {
    label: "Traditional Agency",
    items: [
      "Separated departments",
      "Slow production cycles",
      "One-off deliverables",
      "Technology added later",
    ],
  },
  {
    label: "Kadiev Media",
    items: [
      "One connected creative system",
      "Strategy, design and development together",
      "AI integrated from the start",
      "Built to evolve and scale",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="w-full">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[#C9A45C]" />

                <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C9A45C] sm:text-sm">
                  About Kadiev Media
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-6xl font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.94] tracking-[-0.04em]">
                Independent thinking.
                <span className="block text-[#C9A45C]">
                  Intelligent execution.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                  Kadiev Media is an AI-first creative studio combining strategy,
                  design, technology and intelligent production into one
                  connected system.
                </p>

                <p className="max-w-xl text-sm leading-7 text-white/40 sm:text-base lg:justify-self-end">
                  We help ambitious brands become clearer, more distinctive and
                  better equipped for the digital world ahead.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/35 to-transparent" />
      </section>

      {/* THE STUDIO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  The Studio
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  Built for brands that
                  <span className="block text-white/35">
                    refuse to blend in.
                  </span>
                </h2>

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  <p className="text-base leading-8 text-white/55">
                    Kadiev Media brings strategic thinking, premium design,
                    modern development and AI-powered creative production under
                    one direction.
                  </p>

                  <p className="text-base leading-8 text-white/45">
                    Instead of fragmented execution, we build cohesive systems
                    where identity, website, content and technology support the
                    same positioning and long-term vision.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12rem] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.06] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              Our Philosophy
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-6">
              <div className="border-t border-white/10 pt-8">
                <span className="text-xs tracking-[0.3em] text-[#C9A45C]">
                  01
                </span>

                <h3 className="mt-8 font-serif text-4xl tracking-[-0.03em]">
                  Strategy
                </h3>

                <p className="mt-5 max-w-sm leading-7 text-white/45">
                  We define what the brand needs to mean before deciding how it
                  should look.
                </p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <span className="text-xs tracking-[0.3em] text-[#C9A45C]">
                  02
                </span>

                <h3 className="mt-8 font-serif text-4xl tracking-[-0.03em]">
                  Creativity
                </h3>

                <p className="mt-5 max-w-sm leading-7 text-white/45">
                  Human taste, judgment and creative direction shape the work
                  and give it distinction.
                </p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <span className="text-xs tracking-[0.3em] text-[#C9A45C]">
                  03
                </span>

                <h3 className="mt-8 font-serif text-4xl tracking-[-0.03em] text-[#C9A45C]">
                  Intelligence
                </h3>

                <p className="mt-5 max-w-sm leading-7 text-white/45">
                  AI expands what is possible by accelerating research,
                  exploration, production and automation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI FIRST */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  AI-First. Human-Led.
                </p>

                <h2 className="mt-8 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  Technology should
                  <span className="block text-white/35">
                    amplify good thinking.
                  </span>
                </h2>
              </div>

              <div className="border-l border-white/10 pl-0 lg:pl-10">
                <p className="text-base leading-8 text-white/55 sm:text-lg">
                  AI is not the creative director. It is an intelligent layer
                  within the process — used to explore faster, produce more
                  efficiently and create systems that were previously too slow
                  or expensive to build.
                </p>

                <p className="mt-6 text-base leading-8 text-white/40">
                  The direction remains human. The technology makes the
                  execution stronger.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                Principles
              </p>

              <h2 className="mt-6 max-w-3xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
                What guides the work.
              </h2>
            </div>
          </Reveal>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.number}
                delay={Math.min(index * 0.06, 0.18)}
              >
                <article className="group min-h-[20rem] border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.02] sm:p-10">
                  <span className="text-xs tracking-[0.3em] text-[#C9A45C]">
                    {principle.number}
                  </span>

                  <h3 className="mt-14 font-serif text-3xl tracking-[-0.02em]">
                    {principle.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/45 transition-colors duration-500 group-hover:text-white/65 sm:text-base">
                    {principle.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              The Difference
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              A different way
              <span className="block text-white/35">
                to build creative work.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid overflow-hidden border border-white/10 md:grid-cols-2">
            {comparison.map((column, index) => (
              <Reveal key={column.label} delay={index * 0.08}>
                <div
                  className={`h-full p-8 sm:p-10 ${
                    index === 0
                      ? "border-b border-white/10 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <p
                    className={`text-xs uppercase tracking-[0.28em] ${
                      index === 0 ? "text-white/35" : "text-[#C9A45C]"
                    }`}
                  >
                    {column.label}
                  </p>

                  <div className="mt-10 space-y-0">
                    {column.items.map((item) => (
                      <div
                        key={item}
                        className="border-t border-white/10 py-5 text-sm leading-7 text-white/55 sm:text-base"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.07] blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                The Vision
              </p>

              <h2 className="mt-8 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-7xl">
                Building brands for
                <span className="block text-[#C9A45C]">
                  what comes next.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                The goal is not simply to make something look better. It is to
                create brands and digital systems capable of staying relevant,
                adapting and growing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              Start a Conversation
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-7 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-7xl">
              Let&apos;s build something
              <span className="block text-[#C9A45C]">remarkable.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 flex justify-center">
              <a
                href="/contact"
                className="group inline-flex items-center gap-4 border border-[#C9A45C]/50 px-8 py-4 text-sm uppercase tracking-[0.22em] text-[#C9A45C] transition-all duration-500 hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-black"
              >
                Start a Project

                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}