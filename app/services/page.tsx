import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
export const metadata: Metadata = {
  title: "Services",

  description:
    "Explore Kadiev Media services across brand strategy, visual identity, UI/UX and web design, modern web development, AI-powered content and scalable creative systems.",

  openGraph: {
    title: "Services | Kadiev Media",
    description:
      "Strategy, design, development and AI combined into premium digital systems for ambitious brands.",
  },

  twitter: {
    title: "Services | Kadiev Media",
    description:
      "Strategy, design, development and AI combined into premium digital systems for ambitious brands.",
  },
};
const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "Positioning, messaging and strategic direction designed to give your brand clarity, distinction and long-term consistency.",
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "Premium identity systems that translate strategy into a recognizable and cohesive visual language across every touchpoint.",
  },
  {
    number: "03",
    title: "Web Design",
    description:
      "High-end digital experiences focused on hierarchy, usability, storytelling and a refined visual presence.",
  },
  {
    number: "04",
    title: "Web Development",
    description:
      "Fast, responsive and scalable websites built with modern technologies and a strong focus on performance.",
  },
  {
    number: "05",
    title: "AI Content",
    description:
      "AI-powered image, video and content production designed to help brands create faster without sacrificing quality.",
  },
  {
    number: "06",
    title: "Creative Systems",
    description:
      "Reusable design and content systems that keep your brand consistent while making future production more efficient.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn the business, audience, goals and competitive landscape before making any creative decisions.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn insights into a focused strategic direction, clear priorities and a system for the work ahead.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the visual language, experience and content with precision, restraint and a premium point of view.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We build, refine and launch a polished final experience designed to perform consistently across every touchpoint.",
  },
];

const advantages = [
  {
    number: "01",
    title: "Strategy before aesthetics",
    description:
      "Every visual decision is connected to positioning, audience and business goals.",
  },
  {
    number: "02",
    title: "Design and development together",
    description:
      "The experience is designed with real implementation in mind from the very beginning.",
  },
  {
    number: "03",
    title: "AI with creative direction",
    description:
      "We use AI as a production advantage while keeping taste, consistency and human judgment at the center.",
  },
  {
    number: "04",
    title: "Built as a system",
    description:
      "The final result is not a collection of isolated assets, but a coherent platform that can grow with the brand.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="max-w-5xl">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[#C9A45C]" />

                <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C9A45C] sm:text-sm">
                  Our Services
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-5xl font-serif text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.94] tracking-[-0.04em]">
                Ideas shaped into
                <span className="block text-[#C9A45C]">
                  digital experiences.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid max-w-4xl gap-8 border-t border-white/10 pt-8 md:grid-cols-[1.25fr_0.75fr] md:gap-14">
                <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                  From strategy and visual identity to premium websites and
                  AI-powered content, we build cohesive digital systems designed
                  to make ambitious brands impossible to ignore.
                </p>

                <div className="flex items-start md:justify-end">
                  <p className="max-w-[16rem] text-sm leading-7 text-white/40">
                    Strategy
                    <span className="mx-2 text-[#C9A45C]">/</span>
                    Design
                    <span className="mx-2 text-[#C9A45C]">/</span>
                    Development
                    <span className="mx-2 text-[#C9A45C]">/</span>
                    AI
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/35 to-transparent" />
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] sm:text-sm">
                  What We Do
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  One studio.
                  <span className="block text-white/35">
                    Multiple disciplines.
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 0.05}>
                <article className="group relative min-h-[26rem] border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.025] sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.25em] text-[#C9A45C]">
                      {service.number}
                    </span>

                    <span className="h-2 w-2 rounded-full border border-[#C9A45C]/60 transition-all duration-500 group-hover:bg-[#C9A45C]" />
                  </div>

                  <div className="mt-24">
                    <h3 className="font-serif text-3xl tracking-[-0.02em] sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-6 max-w-sm text-sm leading-7 text-white/50 transition-colors duration-500 group-hover:text-white/70 sm:text-base">
                      {service.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C9A45C] transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12rem] top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.06] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] sm:text-sm">
                How We Do
              </p>

              <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                A clear process.
                <span className="block text-white/35">
                  No unnecessary complexity.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <article className="group grid gap-6 border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.015] sm:py-12 lg:grid-cols-[0.25fr_0.75fr_1fr] lg:items-start lg:gap-10">
                  <div>
                    <span className="text-xs tracking-[0.3em] text-[#C9A45C]">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                      {step.title}
                    </h3>
                  </div>

                  <div>
                    <p className="max-w-xl text-sm leading-7 text-white/50 transition-colors duration-500 group-hover:text-white/70 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-10rem] top-[-4rem] h-[28rem] w-[28rem] rounded-full bg-[#C9A45C]/[0.05] blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] sm:text-sm">
                  Why Kadiev Media
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  More than execution.
                  <span className="block text-white/35">
                    A connected creative system.
                  </span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                  We combine strategy, design, technology and AI under one
                  direction so every part of the brand feels intentional,
                  consistent and built to work together.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-2">
            {advantages.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.05}>
                <article className="group min-h-[20rem] border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.02] sm:p-10">
                  <span className="text-xs tracking-[0.3em] text-[#C9A45C]">
                    {item.number}
                  </span>

                  <h3 className="mt-16 max-w-md font-serif text-2xl tracking-[-0.02em] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/50 transition-colors duration-500 group-hover:text-white/70 sm:text-base">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.08] blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:py-28 lg:px-8 lg:py-36">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] sm:text-sm">
              Start a Project
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-8 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-7xl">
              Ready to build something
              <span className="block text-[#C9A45C]">
                worth remembering?
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Tell us what you are building, where you want to go and what needs
              to change. We will help shape the right creative direction from
              there.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
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