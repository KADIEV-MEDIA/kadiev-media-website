import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-20">
      {/* Full Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Architectural Image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[90%] xl:w-[88%]">
          <Image
            src="/hero/kadiev-media-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-[58%_center]
              sm:object-[62%_center]
              md:object-[66%_center]
              lg:object-center
            "
          />
        </div>

        {/* Mobile / Tablet Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.97)_0%,rgba(5,5,5,0.92)_36%,rgba(5,5,5,0.68)_68%,rgba(5,5,5,0.34)_100%)] lg:hidden" />

        {/* Desktop Overlay */}
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(5,5,5,1)_0%,rgba(5,5,5,0.98)_16%,rgba(5,5,5,0.88)_32%,rgba(5,5,5,0.58)_48%,rgba(5,5,5,0.20)_70%,rgba(5,5,5,0.05)_100%)] lg:block" />

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#050505]/80 to-transparent" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050505] via-[#050505]/65 to-transparent" />

        {/* Overall Darkening */}
        <div className="absolute inset-0 bg-black/[0.06]" />
      </div>

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022] sm:opacity-[0.028]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.65) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient Gold Glow */}
      <div className="pointer-events-none absolute -left-56 bottom-0 h-[520px] w-[520px] rounded-full bg-[#C9A45C]/[0.035] blur-[170px]" />

      <Container>
        <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-12 sm:py-14 md:py-16">
          <div className="w-full max-w-[820px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4 md:mb-7">
              <span className="h-px w-7 bg-[#C9A45C] sm:w-10" />

              <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-[#C9A45C] sm:text-[10px] sm:tracking-[0.3em] md:text-xs md:tracking-[0.35em]">
                Premium AI-First Creative Studio
              </p>
            </div>

            {/* Headline */}
            <h1
              className="
                flex
                max-w-[20rem]
                flex-col
                gap-2
                font-[var(--font-cinzel)]
                text-[2.1rem]
                font-semibold
                tracking-[-0.025em]
                text-white

                min-[390px]:max-w-[22rem]
                min-[390px]:text-[2.3rem]

                sm:max-w-[32rem]
                sm:gap-3
                sm:text-[2.9rem]

                md:max-w-[39rem]
                md:gap-3
                md:text-[3.5rem]

                lg:max-w-[43rem]
                lg:gap-4
                lg:text-[4rem]

                xl:max-w-[47rem]
                xl:text-[4.4rem]

                2xl:max-w-[50rem]
                2xl:text-[4.7rem]
              "
            >
              <span className="block leading-[1.05]">
                We Build
              </span>

              <span className="block leading-[1.05]">
                Brands
              </span>

              <span className="block leading-[1.05] text-[#C9A45C]">
  Designed for
</span>

<span className="block leading-[1.05] text-[#C9A45C]">
  the Future.
</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[20rem] text-sm leading-7 text-neutral-200 min-[390px]:max-w-[22rem] sm:max-w-xl sm:text-base sm:leading-8 md:mt-9 md:max-w-2xl md:text-lg">
              Strategy, premium design, modern development and artificial
              intelligence combined to create distinctive digital
              experiences.
            </p>

            {/* CTA */}
            <div className="mt-8 flex max-w-[20rem] flex-col gap-3 min-[390px]:max-w-[22rem] sm:mt-9 sm:max-w-none sm:flex-row sm:gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button>Start Your Project</Button>
              </Link>

              <Link href="/work" className="w-full sm:w-auto">
                <Button variant="secondary">
                  Explore Our Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="mt-12 grid max-w-[20rem] grid-cols-3 border-t border-white/[0.1] pt-6 min-[390px]:max-w-[22rem] sm:max-w-xl sm:pt-7 md:max-w-2xl">
                <div className="pr-3">
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    AI
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.14em] text-neutral-400 sm:text-xs sm:tracking-[0.18em]">
                    First
                  </p>
                </div>

                <div className="border-l border-white/[0.1] px-3 sm:px-4 sm:pl-6">
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    360°
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.14em] text-neutral-400 sm:text-xs sm:tracking-[0.18em]">
                    Creative
                  </p>
                </div>

                <div className="border-l border-white/[0.1] pl-3 sm:pl-6">
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    ∞
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.14em] text-neutral-400 sm:text-xs sm:tracking-[0.18em]">
                    Potential
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Bottom Transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/20 to-transparent" />
    </section>
  );
}