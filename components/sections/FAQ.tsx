import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const questions = [
  {
    number: "01",
    question: "What services does Kadiev Media provide?",
    answer:
      "We combine brand strategy, visual identity, UI/UX design, web development, creative production and AI-powered solutions into complete digital experiences.",
  },
  {
    number: "02",
    question: "Who do you work with?",
    answer:
      "We work with ambitious businesses, founders and brands that value strong positioning, premium design and modern technology.",
  },
  {
    number: "03",
    question: "Can you handle the complete website process?",
    answer:
      "Yes. We can take a project from strategy and creative direction through UI/UX design, development, optimization and launch.",
  },
  {
    number: "04",
    question: "How do you use artificial intelligence?",
    answer:
      "AI supports research, creative exploration, production, automation and optimization while strategic and creative direction remains human-led.",
  },
];

export default function FAQ() {
  return (
    <Section className="bg-[#050505]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
              Frequently Asked
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Questions,
              <span className="block text-[#C9A45C]">
                Answered.
              </span>
            </h2>

            <p className="mt-7 max-w-md leading-8 text-neutral-400">
              A few things worth knowing before we start building something
              exceptional together.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Kadiev Media / FAQ
              </p>
            </div>
          </div>

          {/* Questions */}
          <div className="border-t border-white/[0.08]">
            {questions.map((item) => (
              <article
                key={item.number}
                className="group grid gap-5 border-b border-white/[0.08] py-9 md:grid-cols-[70px_1fr]"
              >
                <span className="text-xs tracking-[0.25em] text-[#C9A45C]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#C9A45C] md:text-2xl">
                    {item.question}
                  </h3>

                  <p className="mt-5 max-w-2xl leading-7 text-neutral-400">
                    {item.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}