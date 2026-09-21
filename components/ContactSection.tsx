import { Code2, Link2, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

const links = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    value: site.email,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    value: "linkedin.com/in/bhavani-ayappann",
    icon: Link2,
  },
  {
    label: "GitHub",
    href: site.github,
    value: "github.com/bhavaniayappann",
    icon: Code2,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-20 lg:py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-3 max-w-xl text-base text-muted sm:text-lg">
          Open to opportunities. Let&apos;s talk.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {links.map(({ label, href, value, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex h-full flex-col gap-3 border-t border-border pt-5 transition-opacity duration-200 hover:opacity-80"
              >
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <Icon size={16} className="text-accent" aria-hidden />
                  {label}
                </span>
                <span className="text-sm text-muted break-all group-hover:text-foreground">
                  {value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
