import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "AutoLux — Luxury Automotive Case Study",

  description:
    "Explore AutoLux, a Kadiev Media luxury automotive case study combining brand strategy, visual identity, premium web design and performance-driven creative direction.",

    alternates: {
  canonical: "/work/autolux",
},
  openGraph: {
    title: "AutoLux — Luxury Automotive | Kadiev Media",
    description:
      "A high-performance automotive identity and digital experience created around power, precision and uncompromising luxury.",
      url: "/work/autolux",
  },

  twitter: {
    title: "AutoLux — Luxury Automotive | Kadiev Media",
    description:
      "A high-performance automotive identity and digital experience created around power, precision and uncompromising luxury.",
  },
};

const projectDetails = [
  ["Client", "AutoLux"],
  ["Industry", "Luxury Automotive"],
  ["Scope", "Strategy · Identity · Digital"],
  ["Year", "2026"],
];

const services = [
  "Brand Strategy",
  "Visual Identity",
  "Web Design",
  "Creative Direction",
  "Automotive Content",
];

const principles = [
  {
    number: "01",
    title: "Performance",
    text: "Every visual decision is designed to communicate speed, capability and controlled power.",
  },
  {
    number: "02",
    title: "Precision",
    text: "Sharp typography, disciplined grids and deliberate detail reflect the engineering mindset behind the brand.",
  },
  {
    number: "03",
    title: "Exclusivity",
    text: "The experience feels selective, premium and unmistakably positioned above mass-market automotive design.",
  },
];

export default function AutoLuxCaseStudyPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/projects/autolux/hero.png"
            alt="AutoLux luxury automotive brand"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/25" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-16 pt-36 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="w-full">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-[0.28em] text-[#C9A45C]">
                  03
                </span>

                <span className="h-px w-10 bg-[#C9A45C]/70" />

                <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                  Luxury Automotive
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 font-serif text-[clamp(3.8rem,11vw,9rem)] leading-[0.84] tracking-[-0.055em]">
                AUTOLUX
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                  A high-performance identity and digital experience created
                  around power, precision and uncompromising luxury.
                </p>

                <p className="max-w-lg text-sm leading-7 text-neutral-300 lg:justify-self-end">
                  Strategy, visual identity and digital direction designed to
                  turn automotive performance into a distinctive premium brand.
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
                  Performance creates attention.
                  <span className="text-[#C9A45C]">
                    {" "}
                    AutoLux turns it into desire.
                  </span>
                </p>

                <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
                  <p className="text-base leading-8 text-neutral-300">
                    The concept required more than a dramatic automotive visual.
                    It needed a complete brand system capable of expressing
                    engineering quality, exclusivity and emotion.
                  </p>

                  <p className="text-base leading-8 text-neutral-300">
                    Our direction combines cinematic imagery, precise
                    typography, dark metallic surfaces and restrained luxury
                    details into one cohesive experience.
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
                  Make performance feel
                  <span className="block text-[#C9A45C]">truly exclusive.</span>
                </h2>

                <p className="mt-10 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                  The luxury automotive category is filled with speed,
                  performance language and dramatic imagery. AutoLux needed to
                  use those codes without looking familiar or predictable.
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
              src="/projects/autolux/visual-identity.png"
              alt="AutoLux visual identity system"
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
                  Building a premium automotive identity around controlled
                  power rather than visual noise.
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.08}>
                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                  Power under control.
                  <span className="block text-[#C9A45C]">
                    Precision in every detail.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-10 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                  The strategic direction balances aggression with restraint.
                  AutoLux feels fast and powerful, but never chaotic. Every
                  element is designed to reinforce control, confidence and
                  premium engineering.
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
                Engineered for
                <span className="block text-[#C9A45C]">visual impact.</span>
              </h2>

              <p className="max-w-xl text-base leading-8 text-neutral-300">
                Deep black, graphite, polished metal and warm gold create the
                visual foundation. Sharp typography and restrained composition
                mirror the precision of performance engineering.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
            <Reveal>
              <div className="min-h-[280px] bg-[#050505] p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-white/30">
                  Performance
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl text-[#C9A45C]">AL</p>
                  <p className="mt-4 text-sm text-neutral-400">
                    Precision identity
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="min-h-[280px] bg-[#222222] p-8 text-white sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">
                  Graphite
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl">AutoLux</p>
                  <p className="mt-4 text-sm text-neutral-300">
                    Technical refinement
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="min-h-[280px] bg-[#C9A45C] p-8 text-black sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-black/45">
                  Accent
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl">03</p>
                  <p className="mt-4 text-sm text-black/55">
                    Controlled luxury
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
                  Built to move.
                  <span className="block text-[#C9A45C]">
                    Designed to perform.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-neutral-300 lg:justify-self-end">
                The digital direction translates automotive performance into a
                fast, immersive interface using cinematic imagery, controlled
                motion and clear product storytelling.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-16 aspect-[16/9] overflow-hidden border border-white/10 bg-black">
              <Image
                src="/projects/autolux/digital-experience.png"
                alt="AutoLux digital experience"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CREATIVE SYSTEM */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  05 / Creative System
                </p>

                <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
                  A scalable visual system designed for launches, campaigns and
                  performance-driven automotive content.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                  One machine.
                  <span className="block text-[#C9A45C]">
                    Endless expression.
                  </span>
                </h2>

                <p className="mt-10 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                  AutoLux is designed to scale across digital launches,
                  automotive campaigns, product storytelling and social content
                  while maintaining one unmistakable visual signature.
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
                src="/projects/autolux/creative-system.png"
                alt="AutoLux creative system"
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
              Performance transformed
              <span className="block text-[#C9A45C]">into a brand.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">01</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Premium Positioning
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">02</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Performance Identity
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">03</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Scalable Digital System
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