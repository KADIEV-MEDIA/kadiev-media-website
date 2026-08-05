import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const advantages = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "Every project starts with clear positioning, business goals and a focused digital strategy.",
  },
  {
    number: "02",
    title: "Premium Design",
    description:
      "Refined visual systems and digital experiences built to make brands feel distinctive and valuable.",
  },
  {
    number: "03",
    title: "AI-First Workflow",
    description:
      "Artificial intelligence enhances research, creativity, production and automation throughout our process.",
  },
  {
    number: "04",
    title: "Built for Growth",
    description:
      "We create scalable digital foundations designed to evolve with your business.",
  },
];

export default function WhyKadiev() {
  return (
    <Section className="relative overflow-hidden bg-black">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[160px]" />

      <Container>
        <div className="relative">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
              Why Kadiev Media
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Creativity Meets
              <span className="block text-yellow-500">
                Artificial Intelligence
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
              We combine human creativity, strategic thinking and modern AI
              technology to build digital experiences designed for the future.
            </p>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 md:grid-cols-2">
            {advantages.map((advantage) => (
              <div
                key={advantage.number}
                className="bg-neutral-950 p-8 md:p-10"
              >
                <span className="text-sm font-semibold tracking-[0.25em] text-yellow-500">
                  {advantage.number}
                </span>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {advantage.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}