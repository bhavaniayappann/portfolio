import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${site.name}, ${site.title}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Resume
            </h1>
            <p className="mt-3 text-base text-muted sm:text-lg">
              Embedded PDF preview with a downloadable copy.
            </p>
          </div>
          <a
            href={site.resumePath}
            download
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            <Download size={16} aria-hidden />
            Download PDF
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
          <iframe
            title={`${site.name} resume PDF`}
            src={`${site.resumePath}#view=FitH`}
            className="h-[80vh] w-full min-h-[560px] bg-surface"
          />
        </div>
      </Container>
    </div>
  );
}
