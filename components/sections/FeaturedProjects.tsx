import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const projects = [
  {
    name: "Aurelia",
    category: "Luxury Skincare",
    description:
      "A refined luxury identity and digital experience built around elegance, clarity and premium positioning.",
  },
  {
    name: "NordHaus",
    category: "Architecture & Lifestyle",
    description:
      "A contemporary architecture brand combining Scandinavian restraint with a sophisticated digital presence.",
  },
  {
    name: "AutoLux",
    category: "Premium Automotive",
    description:
      "A high-end automotive concept designed around performance, exclusivity and cinematic presentation.",
  },
];

export default function FeaturedProjects() {
  return (
    <Section className="bg-black">
      <Container>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Selected Work
          </p>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-neutral-400">
            Selected concepts that showcase our approach to premium branding,
            digital products and memorable experiences.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name}>
              <div className="flex aspect-[4/3] items-end rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                <span className="text-sm uppercase tracking-[0.25em] text-yellow-500">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-white">
                {project.name}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {project.description}
              </p>

              <div className="mt-7">
                <Button variant="secondary">View Case Study</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}