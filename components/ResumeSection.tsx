import { Download } from "lucide-react";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-24 py-16 md:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Resume
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted sm:text-lg">
              Scan the embedded PDF below, or download a copy for offline review.
            </p>
          </div>
          <a
            href={site.resumePath}
            download
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            <Download size={16} aria-hidden />
            Download Full Resume (PDF)
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
          <iframe
            title={`${site.name} resume PDF`}
            src={`${site.resumePath}#view=FitH`}
            className="h-[70vh] w-full min-h-[480px] bg-surface"
          />
        </div>
        <p className="mt-3 text-sm text-muted">
          If the preview doesn&apos;t load,{" "}
          <a
            href={site.resumePath}
            className="font-medium text-accent transition-colors hover:text-accent-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            open the PDF in a new tab
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
