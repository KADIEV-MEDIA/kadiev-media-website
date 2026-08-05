import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "Positioning, brand architecture and clear strategic direction designed to create long-term value.",
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "Premium visual systems built around distinction, consistency and a memorable market presence.",
  },
  {
    number: "03",
    title: "UI / UX Design",
    description:
      "Refined digital interfaces combining clarity, usability and conversion-focused thinking.",
  },
  {
    number: "04",
    title: "Web Development",
    description:
      "Fast, scalable and carefully engineered digital experiences built with modern technologies.",
  },
  {
    number: "05",
    title: "AI Solutions",
    description:
      "AI-powered creative production, automation and intelligent workflows tailored to modern businesses.",
  },
  {
    number: "06",
    title: "Creative Content",
    description:
      "High-end visual content, campaign assets and digital storytelling designed for premium brands.",
  },
];

export default function Services() {
  return (
    <Section className="bg-[#080808]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
              Capabilities
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Built for Brands
              <span className="block text-[#C9A45C]">That Want More.</span>
            </h2>

            <p className="mt-7 max-w-md leading-8 text-neutral-400">
              Strategy, design, technology and AI brought together into one
              focused creative process.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {services.map((service) => (
              <div
                key={service.number}
                className="group grid gap-6 border-b border-white/[0.08] py-9 transition-colors duration-300 md:grid-cols-[90px_1fr]"
              >
                <div>
                  <span className="text-sm tracking-[0.25em] text-[#C9A45C]">
                    {service.number}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
                  <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#C9A45C]">
                    {service.title}
                  </h3>

                  <p className="max-w-xl leading-7 text-neutral-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}