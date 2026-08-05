import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    quote:
      "Kadiev Media combines premium design thinking with modern technology in a way that feels both strategic and distinctive.",
    name: "Aurelia",
    role: "Luxury Brand Concept",
  },
  {
    quote:
      "The process feels focused, refined and built around creating real long-term value instead of short-term visual trends.",
    name: "NordHaus",
    role: "Architecture Concept",
  },
  {
    quote:
      "From positioning to digital execution, every detail is designed to strengthen the perception of the brand.",
    name: "AutoLux",
    role: "Automotive Concept",
  },
];

export default function Testimonials() {
  return (
    <Section className="bg-neutral-950">
      <Container>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Testimonials
          </p>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Built Around Quality
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <p className="text-lg leading-8 text-neutral-300">
                “{item.quote}”
              </p>

              <div className="mt-8 border-t border-neutral-800 pt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-neutral-500">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}