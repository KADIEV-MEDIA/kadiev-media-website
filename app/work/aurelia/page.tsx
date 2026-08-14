import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Aurelia — Luxury Beauty Case Study",

  description:
    "Explore Aurelia, a Kadiev Media luxury beauty case study combining brand strategy, visual identity, premium digital experience and an AI-powered creative system.",

  alternates: {
    canonical: "/work/aurelia",
  },

  openGraph: {
    type: "article",
    locale: "en_US",
    url: "/work/aurelia",
    siteName: "Kadiev Media",
    title: "Aurelia — Luxury Beauty | Kadiev Media",
    description:
      "A premium beauty identity and digital experience shaped around elegance, restraint and timeless luxury.",
    images: [
      {
        url: "/projects/aurelia/hero.png",
        width: 1200,
        height: 630,
        alt: "Aurelia — Luxury Beauty case study by Kadiev Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aurelia — Luxury Beauty | Kadiev Media",
    description:
      "A premium beauty identity and digital experience shaped around elegance, restraint and timeless luxury.",
    images: ["/projects/aurelia/hero.png"],
  },
};

const projectDetails = [
  ["Client", "Aurelia"],
  ["Industry", "Luxury Beauty"],
  ["Scope", "Strategy · Identity · Digital"],
  ["Year", "2026"],
];

const services = [
  "Brand Strategy",
  "Visual Identity",
  "Digital Experience",
  "Creative Direction",
  "AI Content System",
];

const principles = [
  {
    number: "01",
    title: "Restraint",
    text: "Luxury is expressed through confidence, space and precision rather than visual excess.",
  },
  {
    number: "02",
    title: "Ritual",
    text: "Every interaction is designed to make the product feel considered, tactile and intentional.",
  },
  {
    number: "03",
    title: "Timelessness",
    text: "The identity avoids short-lived trends in favor of a visual language built to endure.",
  },
];

export default function AureliaCaseStudyPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/projects/aurelia/hero.png"
            alt="Aurelia luxury beauty brand"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-16 pt-36 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="w-full">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-[0.28em] text-[#C9A45C]">
                  01
                </span>

                <span className="h-px w-10 bg-[#C9A45C]/70" />

                <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                  Luxury Beauty
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.82] tracking-[-0.055em]">
                AURELIA
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                  A premium identity and digital experience shaped around
                  elegance, restraint and timeless beauty.
                </p>

                <p className="max-w-lg text-sm leading-7 text-neutral-300 lg:justify-self-end">
                  Strategy, identity and digital storytelling designed to
                  transform a beauty concept into a distinctive luxury brand.
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
                  Beauty brands often compete for attention.
                  <span className="text-[#C9A45C]">
                    {" "}
                    Aurelia was designed to command it quietly.
                  </span>
                </p>

                <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
                  <p className="text-base leading-8 text-neutral-300">
                    The concept required more than an elegant logo. It needed a
                    complete world — one capable of communicating quality,
                    confidence and sophistication across every touchpoint.
                  </p>

                  <p className="text-base leading-8 text-neutral-300">
                    Our direction combines editorial restraint with cinematic
                    imagery, refined typography and a digital system designed
                    around premium storytelling.
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
                  Create desire
                  <span className="block text-[#C9A45C]">without excess.</span>
                </h2>

                <p className="mt-10 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                  The luxury beauty category is saturated with familiar visual
                  codes. Aurelia needed to feel premium without becoming
                  predictable, minimal without becoming sterile, and modern
                  without sacrificing timelessness.
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
              src="/projects/aurelia/visual-identity.png"
              alt="Aurelia visual identity system"
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
                  Building a brand system around emotional value rather than
                  decoration.
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.08}>
                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                  Quiet confidence.
                  <span className="block text-[#C9A45C]">
                    Designed into every detail.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-10 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                  The strategic idea was simple: Aurelia should never need to
                  shout. Every decision — from typography and composition to
                  photography and interaction — reinforces a sense of calm,
                  confidence and exclusivity.
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

      {/* IDENTITY */}
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
                Elegance,
                <span className="block text-[#C9A45C]">
                  reduced to essence.
                </span>
              </h2>

              <p className="max-w-xl text-base leading-8 text-neutral-300">
                A restrained palette of obsidian, warm metallic tones and soft
                neutrals creates the foundation. Typography and spacing carry
                the identity, allowing product imagery to become the emotional
                focal point.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
            <Reveal>
              <div className="min-h-[280px] bg-[#050505] p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-white/30">
                  Primary
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl text-[#C9A45C]">Aa</p>
                  <p className="mt-4 text-sm text-neutral-400">
                    Editorial elegance
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="min-h-[280px] bg-[#C9A45C] p-8 text-black sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-black/50">
                  Accent
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl">Aurelia</p>
                  <p className="mt-4 text-sm text-black/55">Warm luxury</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="min-h-[280px] bg-[#EEE9E1] p-8 text-black sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-black/40">
                  Contrast
                </p>

                <div className="mt-24">
                  <p className="font-serif text-5xl">01</p>
                  <p className="mt-4 text-sm text-black/50">
                    Soft sophistication
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
                  Digital luxury
                  <span className="block text-[#C9A45C]">
                    with room to breathe.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-neutral-300 lg:justify-self-end">
                The digital direction translates the brand into an immersive
                editorial experience: deliberate pacing, generous whitespace,
                cinematic imagery and subtle motion rather than unnecessary
                interface noise.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-16 aspect-[16/9] overflow-hidden border border-white/10 bg-black">
              <Image
                src="/projects/aurelia/digital-experience.png"
                alt="Aurelia digital experience"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI / CREATIVE SYSTEM */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  05 / AI Creative System
                </p>

                <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
                  Technology used as a creative multiplier, not as the creative
                  idea itself.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-7xl">
                  One identity.
                  <span className="block text-[#C9A45C]">
                    Infinite expression.
                  </span>
                </h2>

                <p className="mt-10 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                  Aurelia&apos;s creative system is designed to scale.
                  AI-assisted image direction, campaign exploration and content
                  production can expand the visual world while maintaining
                  strict brand consistency.
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
                src="/projects/aurelia/ai-creative-system.png"
                alt="Aurelia AI creative system"
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
              A brand world built
              <span className="block text-[#C9A45C]">to feel inevitable.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">01</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Distinctive Positioning
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">02</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Scalable Identity
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-[#C9A45C]">03</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-neutral-300">
                  Premium Digital System
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