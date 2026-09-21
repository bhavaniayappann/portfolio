import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border-t border-border pt-8 first:border-t-0 first:pt-0 md:pt-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {project.name}
            </h3>
            {project.featured && (
              <span className="text-xs font-medium uppercase tracking-wide text-accent">
                Featured
              </span>
            )}
          </div>
          <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.tech.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-6 space-y-2 text-sm leading-relaxed text-foreground/90 sm:text-base">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 lg:min-w-[200px] lg:flex-col lg:items-start">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
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
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              View Code
              <Code2 size={14} aria-hidden />
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
          >
            Read Case Study
            <ArrowUpRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
