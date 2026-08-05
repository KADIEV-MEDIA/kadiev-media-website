import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "Positioning, direction and strategic foundations designed to give ambitious brands clarity and competitive advantage.",
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "Distinctive identity systems that translate strategy into a recognizable and premium visual language.",
  },
  {
    number: "03",
    title: "UI / UX Design",
    description:
      "Digital experiences shaped around clarity, usability and refined interaction across every screen.",
  },
  {
    number: "04",
    title: "Web Development",
    description:
      "Fast, scalable and responsive digital products engineered with modern technologies and attention to detail.",
  },
  {
    number: "05",
    title: "AI Solutions",
    description:
      "Intelligent workflows and AI-powered systems that accelerate production, creativity and business operations.",
  },
  {
    number: "06",
    title: "Creative Production",
    description:
      "Premium digital content and creative assets built to strengthen campaigns, brands and online experiences.",
  },
];

export default function Services() {
  return (
    <Section className="bg-[#050505]">
      <Container>
        {/* Header */}
        <div className="grid gap-10 border-b border-white/[0.08] pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
                What We Do
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
                Built for Brands
                <span className="block text-[#C9A45C]">
                  That Think Ahead.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl leading-8 text-neutral-400 lg:justify-self-end">
              Strategy, creativity and technology brought together to build
              distinctive brands and digital experiences designed for what
              comes next.
            </p>
          </Reveal>
        </div>

        {/* Services */}
        <div className="divide-y divide-white/[0.08]">
          {services.map((service, index) => (
            <Reveal
              key={service.number}
              delay={Math.min(index * 0.07, 0.28)}
            >
              <article className="group grid gap-6 py-9 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start md:gap-8 lg:py-11">
                {/* Number */}
                <span className="text-xs tracking-[0.3em] text-[#C9A45C]">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#C9A45C] md:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="max-w-xl leading-7 text-neutral-400">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom detail */}
        <Reveal delay={0.1}>
          <div className="flex items-center gap-4 border-t border-white/[0.08] pt-8">
            <span className="h-px w-10 bg-[#C9A45C]" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              Strategy / Design / Development / Intelligence
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}