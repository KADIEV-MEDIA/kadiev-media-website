import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <Container>
        <div className="relative flex min-h-screen flex-col items-center justify-center text-center">

          <span className="rounded-full border border-yellow-500/40 px-5 py-2 text-xs uppercase tracking-[0.35em] text-yellow-500">
            Premium AI-First Creative Studio
          </span>

          <h1 className="mt-10 max-w-5xl text-6xl font-bold leading-tight md:text-8xl">
            Building the Future of
            <span className="block text-yellow-500">
              Digital Experiences
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-neutral-400">
            Branding, UI/UX, Development and Artificial Intelligence
            combined into one premium experience.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button>
              Start Your Project
            </Button>

            <Button variant="secondary">
              View Portfolio
            </Button>
          </div>

          {/* Statistics */}

          <div className="mt-24 grid grid-cols-3 gap-12">

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">
                100+
              </h3>

              <p className="mt-2 text-neutral-400">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">
                5★
              </h3>

              <p className="mt-2 text-neutral-400">
                Client Rating
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-500">
                AI
              </h3>

              <p className="mt-2 text-neutral-400">
                First Workflow
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}