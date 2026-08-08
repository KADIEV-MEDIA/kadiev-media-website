import Image from "next/image";
import Link from "next/link";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

const projects = [
  {
    number: "01",
    name: "Aurelia",
    category: "Luxury Beauty",
    services: "Brand Strategy / Identity / Digital",
    description:
      "A refined luxury beauty concept shaped around timeless elegance, sophisticated visual language and a premium digital experience.",
    href: "/work/aurelia",
    image: "/projects/aurelia/visual-identity.png",
  },
  {
    number: "02",
    name: "NordHaus",
    category: "Architecture & Lifestyle",
    services: "Strategy / UI UX / Web",
    description:
      "A contemporary architectural identity inspired by Scandinavian restraint, spatial clarity and modern luxury.",
    href: "/work/nordhaus",
    image: "/projects/nordhaus/visual-identity.png",
  },
  {
    number: "03",
    name: "AutoLux",
    category: "Premium Automotive",
    services: "Branding / Digital / Creative",
    description:
      "A cinematic automotive experience built around performance, exclusivity and uncompromising visual precision.",
    href: "/work/autolux",
    image: "/projects/autolux/visual-identity.png",
  },
];

export default function FeaturedProjects() {
  return (
    <Section className="bg-[#050505]">
      <Container>
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <Reveal>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C] sm:text-xs">
                Selected Work
              </p>

              <h2
                className="
                  mt-6
                  flex
                  max-w-[22rem]
                  flex-col
                  gap-1
                  font-[var(--font-cinzel)]
                  text-[2.25rem]
                  font-semibold
                  tracking-[-0.02em]
                  text-white

                  sm:max-w-[34rem]
                  sm:gap-2
                  sm:text-[3rem]

                  md:max-w-[40rem]
                  md:text-[3.5rem]

                  lg:max-w-[42rem]
                  lg:text-[3.75rem]

                  xl:max-w-[46rem]
                  xl:text-[4rem]
                "
              >
                <span className="block leading-[1.08]">
                  Projects Built to
                </span>

                <span className="block leading-[1.08] text-[#C9A45C]">
                  Be Remembered.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-md text-sm leading-7 text-neutral-400 sm:text-base">
              Selected concepts exploring how strategy, design and technology
              can transform ambitious brands.
            </p>
          </Reveal>
        </div>

        {/* Projects */}
        <div className="mt-14 space-y-8 sm:mt-16 sm:space-y-10">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={Math.min(index * 0.1, 0.2)}
            >
              <article className="group grid overflow-hidden border border-white/[0.08] bg-[#0A0A0A] transition-all duration-500 hover:border-[#C9A45C]/25 lg:grid-cols-[1.15fr_0.85fr]">
                {/* Visual */}
                <div
                  className={`relative min-h-[320px] overflow-hidden sm:min-h-[430px] lg:min-h-[520px] ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} case study`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  {/* Cinematic overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-black/10" />

                  {/* Project number */}
                  <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A45C] sm:text-[10px] sm:tracking-[0.35em]">
                      Project / {project.number}
                    </p>
                  </div>

                  {/* Subtle gold glow */}
                  <div className="pointer-events-none absolute bottom-0 left-1/2 h-28 w-72 -translate-x-1/2 bg-[#C9A45C]/10 blur-[90px]" />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center p-7 sm:p-8 md:p-12 lg:p-14 ${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C] sm:text-xs">
                    {project.category}
                  </p>

                  <h3 className="mt-5 font-[var(--font-cinzel)] text-3xl font-semibold leading-[1.08] text-white transition-colors duration-300 group-hover:text-[#C9A45C] sm:text-4xl md:text-5xl">
                    {project.name}
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
                    {project.description}
                  </p>

                  <div className="mt-8 border-t border-white/[0.08] pt-6">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]">
                      {project.services}
                    </p>
                  </div>

                  <div className="mt-9">
                    <Link href={project.href}>
                      <Button variant="secondary">
                        View Case Study
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}