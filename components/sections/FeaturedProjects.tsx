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
    gradient: "from-[#24180F] via-[#100D0A] to-[#070707]",
  },
  {
    number: "02",
    name: "NordHaus",
    category: "Architecture & Lifestyle",
    services: "Strategy / UI UX / Web",
    description:
      "A contemporary architectural identity inspired by Scandinavian restraint, spatial clarity and modern luxury.",
    gradient: "from-[#171717] via-[#0D0D0D] to-[#050505]",
  },
  {
    number: "03",
    name: "AutoLux",
    category: "Premium Automotive",
    services: "Branding / Digital / Creative",
    description:
      "A cinematic automotive experience built around performance, exclusivity and uncompromising visual precision.",
    gradient: "from-[#17120C] via-[#0B0B0B] to-[#050505]",
  },
];

export default function FeaturedProjects() {
  return (
    <Section className="bg-[#050505]">
      <Container>
        {/* Heading */}
        <div className="flex flex-col gap-8 border-b border-white/[0.08] pb-12 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
                Selected Work
              </p>

              <h2 className="mt-6 text-4xl font-semibold text-white md:text-5xl">
                Projects Built to
                <span className="block text-[#C9A45C]">
                  Be Remembered.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-md leading-7 text-neutral-400">
              Selected concepts exploring how strategy, design and technology
              can transform ambitious brands.
            </p>
          </Reveal>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-10">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={Math.min(index * 0.1, 0.2)}
            >
              <article className="group grid overflow-hidden border border-white/[0.08] bg-[#0A0A0A] transition-all duration-500 hover:border-[#C9A45C]/20 lg:grid-cols-[1.15fr_0.85fr]">
                {/* Visual */}
                <div
                  className={`
                    relative min-h-[420px] overflow-hidden bg-gradient-to-br
                    ${project.gradient}
                    ${index % 2 !== 0 ? "lg:order-2" : ""}
                  `}
                >
                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                      backgroundSize: "55px 55px",
                    }}
                  />

                  {/* Project number */}
                  <div className="absolute left-8 top-8">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
                      Project / {project.number}
                    </p>
                  </div>

                  {/* Abstract Project Visual */}
                  <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center border border-[#C9A45C]/25 transition-all duration-700 ease-out group-hover:rotate-[52deg] group-hover:scale-105 group-hover:border-[#C9A45C]/40">
                    <div className="h-40 w-40 border border-white/[0.08] transition-transform duration-700 group-hover:-rotate-6" />

                    <div className="absolute -rotate-45 text-center">
                      <p className="font-[var(--font-cinzel)] text-4xl text-white">
                        {project.name}
                      </p>

                      <p className="mt-3 text-[9px] uppercase tracking-[0.4em] text-[#C9A45C]">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Glow */}
                  <div className="absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 bg-[#C9A45C]/10 blur-[80px] transition-opacity duration-700 group-hover:opacity-150" />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center p-8 md:p-12 lg:p-14 ${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                    {project.category}
                  </p>

                  <h3 className="mt-5 text-4xl font-semibold text-white transition-colors duration-300 group-hover:text-[#C9A45C] md:text-5xl">
                    {project.name}
                  </h3>

                  <p className="mt-6 max-w-lg leading-8 text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-8 border-t border-white/[0.08] pt-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                      {project.services}
                    </p>
                  </div>

                  <div className="mt-9">
                    <Button variant="secondary">
                      View Case Study
                    </Button>
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