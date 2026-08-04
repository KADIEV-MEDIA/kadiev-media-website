import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const projects = [
  {
    name: "Aurelia",
    category: "Luxury Skincare",
  },
  {
    name: "NordHaus",
    category: "Architecture Studio",
  },
  {
    name: "AutoLux",
    category: "Premium Car Dealer",
  },
];

export default function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
            Portfolio
          </p>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name}>
              <div className="aspect-[4/3] rounded-xl bg-neutral-800" />

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {project.name}
              </h3>

              <p className="mt-2 text-neutral-400">
                {project.category}
              </p>

              <div className="mt-6">
                <Button variant="secondary">
                  View Case Study
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}