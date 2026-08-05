import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#080808] py-28 md:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.07] blur-[180px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <Reveal>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
                Start a Project
              </p>

              <span className="h-px w-10 bg-[#C9A45C]" />
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h2 className="mt-8 text-4xl font-semibold leading-[1.12] text-white md:text-6xl lg:text-7xl">
              Have an Ambitious Idea?
              <span className="block text-[#C9A45C]">
                Let&apos;s Make It Real.
              </span>
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
              Tell us where you want your brand to go. We&apos;ll bring together
              strategy, design, technology and AI to help you get there.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.3}>
            <div className="mt-11">
              <Button>Start Your Project</Button>
            </div>
          </Reveal>

          {/* Bottom metadata */}
          <Reveal delay={0.4}>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 border-t border-white/[0.08] pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]">
                  Strategy
                </p>
              </div>

              <div className="border-x border-white/[0.08]">
                <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]">
                  Creativity
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-500 sm:text-xs sm:tracking-[0.2em]">
                  Intelligence
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}