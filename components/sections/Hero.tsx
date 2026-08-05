import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-20">
      {/* Ambient light */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[650px] w-[650px] rounded-full bg-[#C9A45C]/[0.07] blur-[160px]" />
      <div className="pointer-events-none absolute -left-64 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C9A45C]/[0.03] blur-[160px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <Container>
        <div className="relative grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
                Premium AI-First Creative Studio
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              We Build Brands
              <span className="block text-[#C9A45C]">
                Designed for
              </span>
              the Future.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-400 md:text-lg">
              Strategy, premium design, modern development and artificial
              intelligence combined to create distinctive digital experiences.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button>Start Your Project</Button>
              <Button variant="secondary">Explore Our Work</Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid max-w-xl grid-cols-3 border-t border-white/[0.08] pt-8">
              <div>
                <p className="text-2xl font-semibold text-white">AI</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                  First
                </p>
              </div>

              <div className="border-l border-white/[0.08] pl-6">
                <p className="text-2xl font-semibold text-white">360°</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Creative
                </p>
              </div>

              <div className="border-l border-white/[0.08] pl-6">
                <p className="text-2xl font-semibold text-white">∞</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Potential
                </p>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto hidden w-full max-w-[540px] lg:block">
            <div className="absolute -inset-12 rounded-full bg-[#C9A45C]/[0.06] blur-[100px]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#C9A45C]/20 bg-[#0A0A0A] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-[#080808]">
                {/* Architectural lines */}
                <div className="absolute left-[18%] top-[13%] h-[70%] w-[64%] rotate-[8deg] border border-[#C9A45C]/25" />

                <div className="absolute left-[25%] top-[20%] h-[58%] w-[50%] -rotate-[7deg] border border-white/[0.08]" />

                <div className="absolute left-[32%] top-[27%] h-[46%] w-[38%] rotate-[12deg] border border-[#C9A45C]/30" />

                {/* Core */}
                <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center border border-[#C9A45C]/50 bg-[#C9A45C]/[0.04] shadow-[0_0_80px_rgba(201,164,92,0.12)]">
                  <div className="-rotate-45 text-center">
                    <p className="font-[var(--font-cinzel)] text-4xl text-[#C9A45C]">
                      KM
                    </p>
                    <p className="mt-2 text-[9px] uppercase tracking-[0.4em] text-neutral-500">
                      Studio
                    </p>
                  </div>
                </div>

                {/* Decorative labels */}
                <div className="absolute left-6 top-6">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600">
                    Digital / 001
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 text-right">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A45C]/70">
                    Intelligence
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-neutral-600">
                    Creativity
                  </p>
                </div>

                <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 bg-[#C9A45C]/10 blur-[80px]" />
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 -left-10 border border-white/[0.08] bg-[#0A0A0A]/90 px-6 py-4 backdrop-blur-xl">
              <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-500">
                Human Creativity
              </p>
              <p className="mt-1 text-sm text-[#C9A45C]">
                × Artificial Intelligence
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}