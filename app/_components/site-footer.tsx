import { Container } from "./container";
import { Logo } from "./logo";

const FOOTER_LINKS = [
  { href: "#", label: "Política de privacidad" },
  { href: "#", label: "Términos de uso" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface-card pt-8 pb-6">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <Logo size="footer" />

        <p className="text-[0.85rem] text-ink-soft">
          © 2026 AiOS · Soluciones tecnológicas para la nueva era digital.
        </p>

        <div className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.82rem] text-ink-soft no-underline transition-colors hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
