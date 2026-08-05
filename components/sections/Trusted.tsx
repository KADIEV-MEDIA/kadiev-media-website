import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const companies = [
  "Google",
  "Microsoft",
  "OpenAI",
  "Adobe",
  "Spotify",
  "Tesla",
];

export default function Trusted() {
  return (
    <Section className="border-y border-neutral-900 bg-black py-12">
      <Container>
        <div className="text-center">
          <p className="mb-10 text-sm uppercase tracking-[0.35em] text-neutral-500">
            Inspired by world-class brands
          </p>

          <div className="grid grid-cols-2 gap-8 text-neutral-500 md:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company}
                className="text-lg font-semibold transition hover:text-yellow-500"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}