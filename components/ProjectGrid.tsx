import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-20 lg:py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured Work
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted sm:text-lg">
          Three projects spanning AI-native products, geospatial visualization,
          and full-stack data architecture.
        </p>
        <div className="mt-12 space-y-12 md:mt-14 md:space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
