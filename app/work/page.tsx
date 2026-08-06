import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

const projects = [
  {
    slug: "aurelia",
    number: "01",
    title: "Aurelia",
    category: "Luxury Beauty",
    image: "/projects/aurelia/hero.png",
    alt: "Aurelia luxury beauty brand case study",
    description:
      "A premium identity and digital experience shaped around elegance, restraint and a refined luxury aesthetic.",
  },
  {
    slug: "nordhaus",
    number: "02",
    title: "NordHaus",
    category: "Architecture & Interior",
    image: "/projects/nordhaus/hero.png",
    alt: "NordHaus architecture and interior design case study",
    description:
      "A refined architectural identity and digital experience built around space, materiality, structure and modern luxury.",
  },
  {
    slug: "autolux",
    number: "03",
    title: "AutoLux",
    category: "Luxury Automotive",
    image: "/projects/autolux/hero.png",
    alt: "AutoLux luxury automotive case study",
    description:
      "A high-performance brand identity and digital experience created around power, precision and uncompromising luxury.",
  },
  {
    slug: "fitlab",
    number: "04",
    title: "FitLab",
    category: "AI Fitness",
    image: "/projects/fitlab/hero.png",
    alt: "FitLab AI fitness platform case study",
    description:
      "An intelligent fitness platform combining personalized training, performance tracking and a bold digital experience.",
  },
  {
    slug: "solarone",
    number: "05",
    title: "SolarOne",
    category: "Energy",
    image: "/projects/solarone/hero.png",
    alt: "SolarOne clean energy brand case study",
    description:
      "A forward-thinking brand and digital experience created to communicate clean energy, innovation and sustainable progress.",
  },
  {
    slug: "nexora",
    number: "06",
    title: "Nexora",
    category: "AI Technology",
    image: "/projects/nexora/hero.png",
    alt: "Nexora AI technology brand case study",
    description:
      "A future-focused AI brand and digital system designed around intelligence, advanced technology and connected experiences.",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-16rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[150px]"
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

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:px-8 lg:pt-40">
          <div className="w-full">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[#C9A45C]" />
                <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C9A45C] sm:text-sm">
                  Selected Work
                </p>
              </div>
            </Reveal>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <Reveal delay={0.08}>
                <h1 className="max-w-5xl font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.04em]">
                  Work designed
                  <span className="block text-[#C9A45C]">
                    to leave a mark.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="border-t border-white/10 pt-6 lg:border-t-0 lg:pt-0">
                  <p className="max-w-xl text-base leading-8 text-white/55 sm:text-lg">
                    A selection of brand identities, digital experiences and
                    AI-powered creative systems built around strategy, craft and
                    distinctive visual direction.
                  </p>

                  <div className="mt-8 flex gap-10">
                    <div>
                      <p className="text-3xl font-light text-[#C9A45C]">06</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/35">
                        Projects
                      </p>
                    </div>

                    <div className="h-14 w-px bg-white/10" />

                    <div>
                      <p className="text-3xl font-light text-[#C9A45C]">06</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/35">
                        Industries
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <div className="mb-12 flex items-end justify-between gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  Featured Projects
                </p>

                <h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
                  Selected work.
                </h2>
              </div>

              <p className="hidden max-w-md text-right text-sm leading-7 text-white/35 lg:block">
                Six distinct concepts across beauty, architecture, automotive,
                fitness, energy and AI technology.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={Math.min(index * 0.05, 0.2)}
              >
                <article className="group overflow-hidden border border-white/10 bg-[#070707]">
                  {/* VISUAL */}
                  <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/8] lg:aspect-[16/6]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
                  </div>

                  {/* INFO */}
                  <div className="border-t border-white/10 px-6 py-6 sm:px-8 lg:px-10 lg:py-7">
                    <div className="grid gap-7 lg:grid-cols-[0.75fr_1.35fr_auto] lg:items-center">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs tracking-[0.28em] text-[#C9A45C]">
                            {project.number}
                          </span>

                          <span className="h-px w-8 bg-[#C9A45C]/40" />
                        </div>

                        <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-xs">
                          {project.category}
                        </p>

                        <h3 className="mt-2 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
                          {project.title}
                        </h3>
                      </div>

                      <p className="max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                        {project.description}
                      </p>

                      <a
                        href={`/work/${project.slug}`}
                        className="inline-flex w-fit items-center gap-3 border border-[#C9A45C]/45 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#C9A45C] transition-all duration-500 hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-black sm:text-xs"
                      >
                        View Case Study
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.07] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:py-28 lg:px-8 lg:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              Your Project Could Be Next
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-7 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-7xl">
              Let&apos;s create something
              <span className="block text-[#C9A45C]">
                impossible to ignore.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              From brand strategy to digital experiences and AI-powered creative
              systems, we build work designed to stand apart and perform.
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