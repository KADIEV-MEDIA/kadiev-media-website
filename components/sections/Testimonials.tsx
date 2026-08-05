import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

const testimonials = [
  {
    quote:
      "Kadiev Media combines strategic thinking, premium design and modern technology into one clear creative direction.",
    name: "Aurelia",
    role: "Luxury Beauty Concept",
    number: "01",
  },
  {
    quote:
      "The approach feels considered and intentional — every detail exists to strengthen the identity and digital experience.",
    name: "NordHaus",
    role: "Architecture & Lifestyle Concept",
    number: "02",
  },
  {
    quote:
      "A strong balance between visual impact, business thinking and the technology required to bring ambitious ideas to life.",
    name: "AutoLux",
    role: "Premium Automotive Concept",
    number: "03",
  },
];

export default function Testimonials() {
  return (
    <Section className="bg-[#080808]">
      <Container>
        {/* Header */}
        <div className="grid gap-10 border-b border-white/[0.08] pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
                Selected Perspectives
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
                Built Around
                <span className="block text-[#C9A45C]">
                  Lasting Value.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl leading-8 text-neutral-400 lg:justify-self-end">
              Every engagement is approached as a partnership between strategy,
              creativity and technology.
            </p>
          </Reveal>
        </div>

        {/* Testimonials */}
        <div className="divide-y divide-white/[0.08]">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.number}
              delay={Math.min(index * 0.1, 0.2)}
            >
              <article className="group grid gap-8 py-12 lg:grid-cols-[100px_1fr_260px] lg:items-start">
                <div>
                  <span className="text-xs tracking-[0.3em] text-[#C9A45C]">
                    {testimonial.number}
                  </span>
                </div>

                <blockquote className="max-w-3xl">
                  <span className="font-[var(--font-cinzel)] text-4xl leading-none text-[#C9A45C]/40">
                    “
                  </span>

                  <p className="-mt-2 text-xl leading-9 text-neutral-200 md:text-2xl">
                    {testimonial.quote}
                  </p>
                </blockquote>

                <div className="lg:text-right">
                  <p className="font-[var(--font-cinzel)] text-lg text-white transition-colors duration-300 group-hover:text-[#C9A45C]">
                    {testimonial.name}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="flex items-center gap-4 border-t border-white/[0.08] pt-8">
            <span className="h-px w-10 bg-[#C9A45C]" />

            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              Strategy / Design / Technology / Intelligence
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}