import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Nexora — AI Technology Case Study",

  description:
    "Explore Nexora, a Kadiev Media AI technology case study combining brand strategy, visual identity, digital product design and intelligent AI systems.",

  alternates: {
    canonical: "/work/nexora",
  },

  openGraph: {
    type: "article",
    locale: "en_US",
    url: "/work/nexora",
    siteName: "Kadiev Media",
    title: "Nexora — AI Technology | Kadiev Media",
    description:
      "A future-focused AI brand and digital system designed around intelligence, connection and adaptive technology.",
    images: [
      {
        url: "/projects/nexora/hero.png",
        width: 1200,
        height: 630,
        alt: "Nexora — AI Technology case study by Kadiev Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexora — AI Technology | Kadiev Media",
    description:
      "A future-focused AI brand and digital system designed around intelligence, connection and adaptive technology.",
    images: ["/projects/nexora/hero.png"],
  },
};

const projectDetails = [
  ["Client", "Nexora"],
  ["Industry", "AI Technology"],
  ["Scope", "Strategy · Identity · Digital"],
  ["Year", "2026"],
];

const services = [
  "Brand Strategy",
  "Visual Identity",
  "Digital Product",
  "AI Systems",
  "Technology Content",
];

const principles = [
  {
    number: "01",
    title: "Intelligence",
    text: "Complex systems are translated into clear, useful experiences that feel advanced without becoming abstract.",
  },
  {
    number: "02",
    title: "Connection",
    text: "Data, automation and human decision-making are designed to work as one connected digital ecosystem.",
  },
  {
    number: "03",
    title: "Evolution",
    text: "The identity and product system are built to adapt as the technology, capabilities and market continue to evolve.",
  },
];

export default function NexoraCaseStudyPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/projects/nexora/hero.png"
            alt="Nexora AI technology platform"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/25" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-16 pt-36 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="w-full">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-[0.28em] text-[#C9A45C]">
                  06
                </span>

                <span className="h-px w-10 bg-[#C9A45C]/70" />

                <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                  AI Technology
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 font-serif text-[clamp(3.8rem,11vw,9rem)] leading-[0.84] tracking-[-0.055em]">
                NEXORA
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                  A future-focused AI brand and digital system designed around
                  intelligence, connection and adaptive technology.
                </p>

                <p className="max-w-lg text-sm leading-7 text-neutral-300 lg:justify-self-end">
                  Strategy, identity and digital direction created to make
                  advanced AI systems feel clear, useful and built for scale.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  Project Overview
                </p>

                <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                  {projectDetails.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[0.75fr_1.25fr] gap-6 py-5"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                        {label}
                      </p>

                      <p className="text-sm text-white/65">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <p className="max-w-4xl font-serif text-3xl leading-[1.3] tracking-[-0.025em] text-white/90 sm:text-4xl lg:text-5xl">
                  Artificial intelligence is becoming invisible infrastructure.
                  <span className="text-[#C9A45C]">
                    {" "}
                    Nexora makes that intelligence tangible.
                  </span>
                </p>

                <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
                  <p className="text-base leading-8 text-neutral-300">
                    The challenge was to communicate advanced technology without
                    falling into familiar futuristic clichés or overwhelming
                    users with unnecessary complexity.
                  </p>

                  <p className="text-base leading-8 text-neutral-300">
                    Our direction combines intelligent interfaces, abstract
                    systems thinking, premium typography and restrained motion
                    into one coherent technology brand.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  01 / The Challenge
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                  Make advanced AI
                  <span className="block text-[#C9A45C]">
                    feel understandable.
                  </span>
                </h2>

                <p className="mt-10 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                  Technology platforms often communicate complexity instead of
                  value. Nexora needed to feel sophisticated and future-facing
                  while remaining calm, clear and human-centered.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISUAL IDENTITY IMAGE */}
      <section className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden border border-white/10">
            <Image
              src="/projects/nexora/visual-identity.png"
              alt="Nexora visual identity system"
              fill
              sizes="(max-width: 1600px) 100vw, 1600px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* STRATEGY */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  02 / Strategy
                </p>

                <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
                  Positioning AI as a connected capability rather than a
                  collection of isolated features.
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.08}>
                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                  Intelligence connected.
                  <span className="block text-[#C9A45C]">
                    Complexity simplified.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-10 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                  Nexora is built around a connected-system philosophy. Data,
                  automation and human judgment work together so technology
                  becomes an invisible layer supporting better decisions and
                  faster execution.
                </p>
              </Reveal>

              <div className="mt-16 grid border-t border-white/10 md:grid-cols-3">
                {principles.map((principle, index) => (
                  <Reveal key={principle.title} delay={0.08 * index}>
                    <article className="h-full border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                      <p className="text-xs tracking-[0.24em] text-[#C9A45C]">
                        {principle.number}
                      </p>

                      <h3 className="mt-7 font-serif text-2xl">
                        {principle.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-neutral-300">
                        {principle.text}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL IDENTITY */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              03 / Visual Identity
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Designed for
                <span className="block text-[#C9A45C]">
                  intelligent evolution.
                </span>
              </h2>

              <p className="max-w-xl text-base leading-8 text-neutral-300">
                Obsidian, graphite and luminous digital accents create a
                premium technological foundation. Modular typography and system
                graphics give Nexora a visual language capable of continuous
                evolution.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
            <Reveal>
              <div className="min-h-[280px] bg-[#050505] p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-white/30">
                  Intelligence
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl text-[#C9A45C]">NX</p>
                  <p className="mt-4 text-sm text-neutral-400">
                    Connected identity
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="min-h-[280px] bg-[#15171A] p-8 text-white sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">
                  System
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl">Nexora</p>
                  <p className="mt-4 text-sm text-neutral-300">
                    Adaptive technology
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="min-h-[280px] bg-[#C9A45C] p-8 text-black sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-black/45">
                  Signal
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl">06</p>
                  <p className="mt-4 text-sm text-black/55">
                    Human intelligence
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DIGITAL EXPERIENCE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  04 / Digital Experience
                </p>

                <h2 className="mt-8 max-w-3xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                  Complex systems.
                  <span className="block text-[#C9A45C]">
                    Clear interaction.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-neutral-300 lg:justify-self-end">
                The interface brings automation, analytics and intelligent
                workflows into one calm product environment designed around
                focus, hierarchy and informed action.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-16 aspect-[16/9] overflow-hidden border border-white/10 bg-black">
              <Image
                src="/projects/nexora/digital-experience.png"
                alt="Nexora digital experience"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI SYSTEM */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  05 / AI System
                </p>

                <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
                  A connected intelligence layer designed to unify data,
                  automation and decision-making.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                  One intelligence layer.
                  <span className="block text-[#C9A45C]">
                    Infinite possibilities.
                  </span>
                </h2>

                <p className="mt-10 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                  Nexora connects intelligent workflows, data interpretation
                  and automation into one adaptive system capable of evolving
                  with changing products, teams and business needs.
                </p>

                <div className="mt-14 flex flex-wrap gap-3">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="border border-white/15 px-4 py-3 text-xs uppercase tracking-[0.16em] text-neutral-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative mt-16 aspect-[16/9] overflow-hidden border border-white/10">
              <Image
                src="/projects/nexora/ai-system.png"
                alt="Nexora AI system architecture"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUTCOME */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              06 / Outcome
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Intelligence transformed
              <span className="block text-[#C9A45C]">
                into a connected experience.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">01</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Future-Focused Positioning
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">02</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Connected Product System
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">03</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Scalable AI Experience
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-white/10">
        <Link
          href="/work"
          className="group block transition-colors duration-500 hover:bg-white/[0.02]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
            <Reveal>
              <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                    Explore More
                  </p>

                  <h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                    View all projects.
                  </h2>
                </div>

                <span className="text-4xl text-[#C9A45C] transition-transform duration-500 group-hover:translate-x-3">
                  →
                </span>
              </div>
            </Reveal>
          </div>
        </Link>
      </section>
    </main>
  );
}