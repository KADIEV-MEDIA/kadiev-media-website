import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const questions = [
  {
    question: "What services does Kadiev Media provide?",
    answer:
      "We combine brand strategy, UI/UX design, web development, creative production and AI-powered solutions.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with ambitious brands and businesses that value premium design, strong positioning and modern technology.",
  },
  {
    question: "Do you build complete websites?",
    answer:
      "Yes. We can handle the complete process from strategy and UI/UX design through development, optimization and launch.",
  },
  {
    question: "How is AI used in your process?",
    answer:
      "AI supports research, creative exploration, content production, automation and optimization while strategic and creative decisions remain human-led.",
  },
];

export default function FAQ() {
  return (
    <Section className="border-t border-neutral-900 bg-neutral-950">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
              FAQ
            </p>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Questions,
              <span className="block text-yellow-500">Answered.</span>
            </h2>

            <p className="mt-6 max-w-md leading-7 text-neutral-400">
              Everything you need to know before starting a project with
              Kadiev Media.
            </p>
          </div>

          <div className="divide-y divide-neutral-800 border-y border-neutral-800">
            {questions.map((item) => (
              <div key={item.question} className="py-8">
                <h3 className="text-xl font-semibold text-white">
                  {item.question}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}