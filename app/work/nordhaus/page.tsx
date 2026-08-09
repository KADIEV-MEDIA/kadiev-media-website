import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "NordHaus — Architecture & Interior Case Study",

  description:
    "Explore NordHaus, a Kadiev Media architecture and interior case study combining brand strategy, visual identity, premium web design and architectural content.",

    
  alternates: {
    canonical: "/work/nordhaus",
  },

  openGraph: {
    title: "NordHaus — Architecture & Interior | Kadiev Media",
    description:
      "A refined architectural identity and digital experience built around space, materiality, structure and modern restraint.",
    url: "/work/nordhaus",
  },

  twitter: {
    title: "NordHaus — Architecture & Interior | Kadiev Media",
    description:
      "A refined architectural identity and digital experience built around space, materiality, structure and modern restraint.",
  },
};

const projectDetails = [
  ["Client", "NordHaus"],
  ["Industry", "Architecture & Interior"],
  ["Scope", "Strategy · Identity · Digital"],
  ["Year", "2026"],
];

const services = [
  "Brand Strategy",
  "Visual Identity",
  "Web Design",
  "Creative Direction",
  "Architectural Content",
];

const principles = [
  {
    number: "01",
    title: "Structure",
    text: "Every element follows a clear system, creating visual order without sacrificing character.",
  },
  {
    number: "02",
    title: "Materiality",
    text: "Concrete, stone, glass and warm natural surfaces shape a tactile and architectural visual language.",
  },
  {
    number: "03",
    title: "Space",
    text: "Generous composition and deliberate negative space allow architecture itself to remain the focal point.",
  },
];

export default function NordHausCaseStudyPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/projects/nordhaus/hero.png"
            alt="NordHaus architecture and interior brand"
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
                  02
                </span>

                <span className="h-px w-10 bg-[#C9A45C]/70" />

                <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                  Architecture & Interior
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 font-serif text-[clamp(3.7rem,11vw,9rem)] leading-[0.84] tracking-[-0.055em]">
                NORDHAUS
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                  A refined architectural identity built around space,
                  materiality and modern restraint.
                </p>

                <p className="max-w-lg text-sm leading-7 text-neutral-300 lg:justify-self-end">
                  Strategy, visual identity and digital direction created to
                  translate architectural precision into a premium brand
                  experience.
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
                  Architecture is defined by more than form.
                  <span className="text-[#C9A45C]">
                    {" "}
                    NordHaus was built around the feeling of space itself.
                  </span>
                </p>

                <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
                  <p className="text-base leading-8 text-neutral-300">
                    The identity needed to feel contemporary and premium while
                    remaining quiet enough to let the architecture speak for
                    itself.
                  </p>

                  <p className="text-base leading-8 text-neutral-300">
                    Our direction combines structural typography, precise grids,
                    material-led imagery and generous negative space into one
                    cohesive system.
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
                  Communicate precision
                  <span className="block text-[#C9A45C]">
                    without becoming cold.
                  </span>
                </h2>

                <p className="mt-10 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                  Architectural brands often lean heavily toward rigid,
                  technical presentation. NordHaus needed structure and clarity
                  while still communicating warmth, lifestyle and human
                  experience.
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
              src="/projects/nordhaus/visual-identity.png"
              alt="NordHaus visual identity system"
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
                  Translating architectural thinking into a complete brand
                  system.
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.08}>
                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                  Form follows clarity.
                  <span className="block text-[#C9A45C]">
                    Identity follows purpose.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-10 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                  The strategic direction centers on architectural discipline:
                  every element serves a function, every composition has
                  hierarchy, and every visual decision supports the work rather
                  than competing with it.
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
                Designed with
                <span className="block text-[#C9A45C]">
                  architectural discipline.
                </span>
              </h2>

              <p className="max-w-xl text-base leading-8 text-neutral-300">
                Neutral materials, disciplined typography and modular layouts
                form the identity. Warm metallic accents introduce refinement
                without compromising the clarity of the system.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
            <Reveal>
              <div className="min-h-[280px] bg-[#111111] p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-white/30">
                  Foundation
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl text-white">Aa</p>
                  <p className="mt-4 text-sm text-neutral-400">
                    Structural typography
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="min-h-[280px] bg-[#B8A78E] p-8 text-black sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-black/45">
                  Material
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl">NordHaus</p>
                  <p className="mt-4 text-sm text-black/55">
                    Warm architectural tone
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="min-h-[280px] bg-[#D8D5CF] p-8 text-black sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-black/40">
                  Space
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl">02</p>
                  <p className="mt-4 text-sm text-black/50">
                    Minimal composition
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
                  Architecture first.
                  <span className="block text-[#C9A45C]">
                    Interface second.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-neutral-300 lg:justify-self-end">
                The digital experience is designed like a gallery. Large
                project imagery, precise typography and restrained navigation
                create a quiet environment where the architecture remains
                central.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-16 aspect-[16/9] overflow-hidden border border-white/10 bg-black">
              <Image
                src="/projects/nordhaus/digital-experience.png"
                alt="NordHaus digital experience"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT SYSTEM */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  05 / Content System
                </p>

                <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
                  A flexible visual system built to present architecture across
                  digital and editorial formats.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                  One system.
                  <span className="block text-[#C9A45C]">Many spaces.</span>
                </h2>

                <p className="mt-10 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                  NordHaus is designed to scale across project presentations,
                  architectural photography, editorial stories and digital
                  campaigns while maintaining a consistent visual rhythm.
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
                src="/projects/nordhaus/content-system.png"
                alt="NordHaus content system"
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
              A brand designed
              <span className="block text-[#C9A45C]">like architecture.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">01</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Clear Positioning
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">02</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Modular Identity
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">03</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Editorial Digital System
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