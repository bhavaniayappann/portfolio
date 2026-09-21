import { Container } from "@/components/Container";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-20 lg:py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h2>
        <div className="mt-8 max-w-[600px] space-y-5 text-base leading-[1.65] text-foreground/90 sm:text-lg">
          <p>
            I&apos;m a Senior Frontend Engineer who builds interactive,
            data-driven experiences. My specialty is turning complex geospatial
            and real-time data into elegant, usable interfaces.
          </p>
          <p>
            I specialize in the intersection of visualization, geospatial tech,
            and AI—a rare combination in frontend engineering. With 13+ years of
            experience, I&apos;ve watched the web evolve and architected systems
            at scale. My recent work has been deeply hands-on with AI-native
            applications (Neighbourly, InterviewIQ), positioning me at the
            intersection of modern AI tooling and sophisticated frontend
            architecture.
          </p>
          <p>
            I&apos;m interested in roles where I can architect frontend systems
            for data-heavy or visualization-intensive products, especially those
            leveraging AI/LLMs. I value deep technical ownership, experimentation,
            and teams that care about elegant user experience.
          </p>
          <p className="text-muted">
            Based in {site.location}. {site.workAuth}
          </p>
          <p>
            Outside of work, I&apos;m exploring how interactive visualization can
            make complex systems more accessible, and I&apos;m an enthusiast of
            spatial data and the stories maps tell.
          </p>
        </div>
      </Container>
    </section>
  );
}
