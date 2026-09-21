import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { Container } from "@/components/Container";
import { getProject, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} · Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="pb-20 pt-10 md:pb-28 md:pt-14">
      <Container>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
        >
          <ArrowLeft size={16} aria-hidden />
          Back to projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-sm font-medium text-accent">Case Study</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {project.tagline}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                View Live
                <ExternalLink size={14} aria-hidden />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                View Code
                <Code2 size={14} aria-hidden />
              </a>
            )}
          </div>
        </header>

        <div className="mt-14 max-w-2xl space-y-12 text-base leading-[1.65] text-foreground/90 sm:text-lg">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Overview
            </h2>
            <p className="mt-4">{project.overview}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Problem
            </h2>
            <p className="mt-4">{project.problem}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Solution
            </h2>
            <p className="mt-4">{project.solution}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Tech Deep Dive
            </h2>
            <p className="mt-4">{project.techDeepDive}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Key Features
            </h2>
            <ul className="mt-6 space-y-6">
              {project.features.map((feature) => (
                <li key={feature.title}>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted">{feature.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Lessons Learned
            </h2>
            <ul className="mt-4 space-y-3">
              {project.lessons.map((lesson) => (
                <li key={lesson} className="flex gap-2">
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </article>
  );
}
