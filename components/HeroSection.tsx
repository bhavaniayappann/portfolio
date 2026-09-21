import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center overflow-hidden py-20 md:min-h-[90vh] md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--hero-glow),transparent_55%),linear-gradient(180deg,#f5f8fa_0%,#fafafa_45%,#fafafa_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <Container className="relative">
        <p className="animate-fade-up mb-4 text-sm font-medium tracking-wide text-accent">
          {site.location} · Open to opportunities
        </p>
        <h1 className="animate-fade-up-delay-1 max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
          {site.name}
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {site.tagline}
        </p>
        <p className="animate-fade-up-delay-2 mt-4 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
          {site.intro}
        </p>
        <div className="animate-fade-up-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/#projects"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            View Projects
            <ArrowDownRight size={16} aria-hidden />
          </Link>
          <a
            href={site.resumePath}
            download
            className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-surface px-6 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground/20 hover:bg-background"
          >
            Download Resume
          </a>
        </div>
      </Container>
    </section>
  );
}
