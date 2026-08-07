import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We uncover the business context, audience, goals and opportunities that will shape the project.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define positioning, creative direction and the digital roadmap before any visual execution begins.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We transform strategy into a distinctive premium experience with clarity, hierarchy and emotional impact.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We engineer a fast, scalable and polished product built to perform across devices and grow over time.",
  },
];

export default function Process() {
  return (
     <Section id="process" className="bg-[#080808]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Intro */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
                Our Process
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
                From Vision
                <span className="block text-[#C9A45C]">
                  to Experience.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-md leading-8 text-neutral-400">
                A focused process that keeps strategy, creativity and execution
                aligned from the first conversation to the final launch.
              </p>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute bottom-0 left-[18px] top-0 hidden w-px bg-gradient-to-b from-[#C9A45C]/60 via-[#C9A45C]/20 to-transparent md:block" />

            <div className="space-y-4">
              {steps.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={Math.min(index * 0.1, 0.3)}
                >
                  <article className="group relative grid gap-6 border-b border-white/[0.08] py-9 md:grid-cols-[70px_1fr]">
                    {/* Number */}
                    <div className="relative z-10">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A45C]/40 bg-[#080808] transition-all duration-500 group-hover:border-[#C9A45C] group-hover:shadow-[0_0_30px_rgba(201,164,92,0.15)]">
                        <span className="text-xs font-semibold text-[#C9A45C]">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#C9A45C]">
                        {step.title}
                      </h3>

                      <p className="mt-4 max-w-xl leading-7 text-neutral-400">
                        {step.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}