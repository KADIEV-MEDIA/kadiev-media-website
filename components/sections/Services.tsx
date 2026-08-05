import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const services = [
  {
    title: "Brand Identity",
    description:
      "Luxury branding systems that build unforgettable brands.",
  },
  {
    title: "UI / UX Design",
    description:
      "Beautiful interfaces designed for conversion and user experience.",
  },
  {
    title: "Web Development",
    description:
      "High-performance websites built with Next.js and modern technologies.",
  },
  {
    title: "AI Solutions",
    description:
      "AI-powered automation and business optimization.",
  },
  {
    title: "SEO Strategy",
    description:
      "Organic growth through technical SEO and premium content.",
  },
  {
    title: "Creative Content",
    description:
      "Photography, video and social media content for premium brands.",
  },
];

export default function Services() {
  return (
    <Section className="bg-neutral-950">
      <Container>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Services
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Everything Your Brand Needs
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
            We combine strategy, design, development and AI
            to build premium digital experiences.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <h3 className="text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}