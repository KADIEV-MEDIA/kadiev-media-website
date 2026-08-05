import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Start a Project
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Ready to Build Something
            <span className="block text-yellow-500">Exceptional?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
            Let&apos;s create a premium digital experience designed around your
            brand, your goals and your future growth.
          </p>

          <div className="mt-10">
            <Button>Start Your Project</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}