import Image from "next/image";

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
      <div className="pointer-events-none absolute left-1/2 top-[52%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.025] blur-[130px]" />

      <Container>
        <div className="relative">
          {/* Header */}
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#C9A45C] sm:text-xs sm:tracking-[0.35em]">
                Why Kadiev Media
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Mobile Headline */}
              <h2
                className="
                  mx-auto
                  mt-7
                  flex
                  max-w-[19rem]
                  flex-col
                  items-center
                  gap-1
                  overflow-hidden
                  font-[var(--font-cinzel)]
                  text-[2.35rem]
                  font-semibold
                  tracking-[-0.025em]
                  text-white

                  min-[390px]:max-w-[21rem]
                  min-[390px]:text-[2.55rem]

                  sm:hidden
                "
              >
                <span className="block leading-[1.06]">
                  Human
                </span>

                <span className="block leading-[1.06]">
                  Creativity
                </span>

                <span className="block leading-[1] text-neutral-700">
                  ×
                </span>

                <span className="block leading-[1.06] text-[#C9A45C]">
                  Artificial
                </span>

                <span className="block leading-[1.06] text-[#C9A45C]">
                  Intelligence
                </span>
              </h2>

              {/* Tablet / Desktop Headline */}
              <h2
                className="
                  mx-auto
                  mt-7
                  hidden
                  max-w-[42rem]
                  flex-col
                  items-center
                  gap-2
                  font-[var(--font-cinzel)]
                  text-[3.2rem]
                  font-semibold
                  tracking-[-0.025em]
                  text-white

                  sm:flex

                  md:max-w-[48rem]
                  md:text-[3.8rem]

                  lg:max-w-[56rem]
                  lg:text-[4.25rem]

                  xl:max-w-[62rem]
                  xl:text-[4.65rem]
                "
              >
                <span className="block leading-[1.05]">
                  Human Creativity
                </span>

                <span className="block leading-[1.05]">
                  <span className="text-neutral-700">×</span>
                  <span className="ml-4 text-[#C9A45C]">
                    Artificial Intelligence
                  </span>
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-[20rem] text-sm leading-7 text-neutral-400 min-[390px]:max-w-[22rem] sm:max-w-2xl sm:text-base sm:leading-8 md:text-lg">
                We believe the strongest digital experiences are created when
                strategic thinking and human creativity are amplified by
                intelligent technology.
              </p>
            </Reveal>
          </div>

          {/* Central Intelligence Visual */}
          <Reveal delay={0.25}>
            <div className="group relative mx-auto mt-14 flex h-[360px] w-full max-w-5xl items-center justify-center sm:mt-16 sm:h-[420px] lg:h-[440px]">
              {/* Horizontal axis */}
              <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

              {/* Vertical axis */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent sm:h-[320px]" />

              {/* Left label */}
              <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 items-center gap-5 md:flex">
                <span className="h-px w-14 bg-white/[0.08]" />

                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 transition-colors duration-500 group-hover:text-neutral-300">
                  Creativity
                </p>
              </div>

              {/* Right label */}
              <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-5 md:flex">
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 transition-colors duration-500 group-hover:text-[#C9A45C]">
                  Intelligence
                </p>

                <span className="h-px w-14 bg-white/[0.08]" />
              </div>

              {/* Orbit system */}
              <div
                className="
                  relative
                  flex
                  h-[290px]
                  w-[290px]
                  items-center
                  justify-center

                  sm:h-[320px]
                  sm:w-[320px]

                  lg:h-[340px]
                  lg:w-[340px]
                "
              >
                {/* Outer orbit */}
                <div
                  className="
                    absolute
                    h-[270px]
                    w-[270px]
                    rounded-full
                    border
                    border-[#C9A45C]/20
                    transition-all
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-[1.04]
                    group-hover:border-[#C9A45C]/35

                    sm:h-[300px]
                    sm:w-[300px]

                    lg:h-[320px]
                    lg:w-[320px]
                  "
                />

                {/* Middle orbit */}
                <div
                  className="
                    absolute
                    h-[220px]
                    w-[220px]
                    rounded-full
                    border
                    border-white/[0.08]
                    transition-all
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-[0.98]
                    group-hover:border-white/[0.14]

                    sm:h-[245px]
                    sm:w-[245px]

                    lg:h-[260px]
                    lg:w-[260px]
                  "
                />

                {/* Inner orbit */}
                <div
                  className="
                    absolute
                    h-[170px]
                    w-[170px]
                    rounded-full
                    border
                    border-[#C9A45C]/30
                    transition-all
                    duration-[1000ms]
                    ease-out
                    group-hover:scale-[1.05]
                    group-hover:border-[#C9A45C]/50

                    sm:h-[185px]
                    sm:w-[185px]

                    lg:h-[200px]
                    lg:w-[200px]
                  "
                />

                {/* Top orbit point */}
                <div className="absolute left-1/2 top-[8px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#C9A45C]/70 shadow-[0_0_12px_rgba(201,164,92,0.5)] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#C9A45C]" />

                {/* Bottom orbit point */}
                <div className="absolute bottom-[8px] left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#C9A45C]/70 shadow-[0_0_12px_rgba(201,164,92,0.5)] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#C9A45C]" />

                {/* Core glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.06] blur-[65px] transition-all duration-700 group-hover:bg-[#C9A45C]/[0.1] sm:h-[235px] sm:w-[235px] lg:h-[250px] lg:w-[250px]" />

                {/* KM Logo */}
                <div
                  className="
                    relative
                    z-20
                    flex
                    h-[190px]
                    w-[190px]
                    translate-y-[8px]
                    items-center
                    justify-center

                    sm:h-[210px]
                    sm:w-[210px]

                    lg:h-[230px]
                    lg:w-[230px]
                  "
                >
                  <Image
                    src="/brand/kadiev-media-logo.png"
                    alt="Kadiev Media"
                    width={230}
                    height={230}
                    className="h-full w-full object-contain transition-all duration-700 ease-out group-hover:scale-[1.045]"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Advantages */}
          <div className="mt-10 grid border border-white/[0.08] md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((advantage, index) => (
              <Reveal
                key={advantage.number}
                delay={Math.min(index * 0.08, 0.24)}
                className="h-full"
              >
                <article
                  className={`group h-full p-7 sm:p-8 lg:p-9 ${
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

                  <h3 className="mt-6 font-[var(--font-cinzel)] text-xl font-semibold leading-[1.1] text-white transition-colors duration-300 group-hover:text-[#C9A45C]">
                    {advantage.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
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