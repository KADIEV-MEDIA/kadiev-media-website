import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

const advantages = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "Every decision begins with positioning, business goals and a clear understanding of the audience.",
  },
  {
    number: "02",
    title: "Human Creativity",
    description:
      "Ideas, taste and creative direction remain human-led — technology exists to amplify them.",
  },
  {
    number: "03",
    title: "AI Intelligence",
    description:
      "AI accelerates research, exploration, production and automation across the creative process.",
  },
  {
    number: "04",
    title: "Built to Scale",
    description:
      "Flexible digital systems designed to evolve alongside your brand, products and ambitions.",
  },
];

export default function WhyKadiev() {
  return (
    <Section className="relative overflow-hidden bg-[#050505]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.05] blur-[180px]" />

      <Container>
        <div className="relative">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
                Why Kadiev Media
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-7 text-4xl font-semibold leading-tight text-white md:text-6xl">
                Human Creativity
                <span className="mx-3 text-neutral-600">×</span>
                <span className="text-[#C9A45C]">
                  Artificial Intelligence
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
                We believe the strongest digital experiences are created when
                strategic thinking and human creativity are amplified by
                intelligent technology.
              </p>
            </Reveal>
          </div>

          {/* Central Visual */}
          <Reveal delay={0.25}>
            <div className="group relative mx-auto mt-20 flex min-h-[340px] max-w-4xl items-center justify-center">
              {/* Outer frame */}
              <div className="absolute h-72 w-72 rotate-45 border border-[#C9A45C]/20 transition-transform duration-[1400ms] ease-out group-hover:rotate-[52deg]" />

              {/* Middle frame */}
              <div className="absolute h-56 w-56 -rotate-12 border border-white/[0.07] transition-transform duration-[1200ms] ease-out group-hover:-rotate-[18deg]" />

              {/* Inner frame */}
              <div className="absolute h-40 w-40 rotate-[25deg] border border-[#C9A45C]/30 transition-all duration-[1000ms] ease-out group-hover:rotate-[34deg] group-hover:border-[#C9A45C]/50" />

              {/* KM Core */}
              <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-[#C9A45C]/40 bg-[#080808] shadow-[0_0_100px_rgba(201,164,92,0.12)] transition-all duration-700 ease-out group-hover:scale-105 group-hover:border-[#C9A45C]/70 group-hover:shadow-[0_0_120px_rgba(201,164,92,0.18)]">
                <div className="text-center">
                  <p className="font-[var(--font-cinzel)] text-3xl text-[#C9A45C]">
                    KM
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.35em] text-neutral-500">
                    AI First
                  </p>
                </div>
              </div>

              {/* Side labels */}
              <p className="absolute left-0 top-1/2 hidden -translate-y-1/2 text-xs uppercase tracking-[0.3em] text-neutral-500 transition-colors duration-500 group-hover:text-neutral-300 md:block">
                Creativity
              </p>

              <p className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-xs uppercase tracking-[0.3em] text-neutral-500 transition-colors duration-500 group-hover:text-[#C9A45C] md:block">
                Intelligence
              </p>

              {/* Core glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.05] blur-[70px] transition-all duration-700 group-hover:bg-[#C9A45C]/[0.09]" />
            </div>
          </Reveal>

          {/* Advantages */}
          <div className="mt-16 grid border border-white/[0.08] md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((advantage, index) => (
              <Reveal
                key={advantage.number}
                delay={Math.min(index * 0.08, 0.24)}
                className="h-full"
              >
                <article
                  className={`group h-full p-8 lg:p-9 ${
                    index !== advantages.length - 1
                      ? "border-b border-white/[0.08] xl:border-b-0 xl:border-r"
                      : ""
                  } ${
                    index === 1
                      ? "md:border-l md:border-white/[0.08] xl:border-l-0"
                      : ""
                  } ${
                    index === 2
                      ? "md:border-r md:border-white/[0.08] xl:border-r"
                      : ""
                  }`}
                >
                  <span className="text-xs tracking-[0.25em] text-[#C9A45C]">
                    {advantage.number}
                  </span>

                  <h3 className="mt-6 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#C9A45C]">
                    {advantage.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {advantage.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}