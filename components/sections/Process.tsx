import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We explore your business, audience, goals and competitive landscape.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the positioning, creative direction and digital roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We transform strategy into a refined, premium digital experience.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build a fast, scalable and polished product using modern technology.",
  },
];

export default function Process() {
  return (
    <Section className="border-t border-neutral-900 bg-neutral-950">
      <Container>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Our Process
          </p>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            From Vision to Digital Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-neutral-400">
            A focused process designed to turn ambitious ideas into premium
            digital products.
          </p>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-neutral-800 pt-8"
            >
              <span className="text-sm font-semibold tracking-[0.25em] text-yellow-500">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}