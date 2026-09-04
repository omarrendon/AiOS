import { Container } from "./container";
import { Logo } from "./logo";

const FOOTER_LINKS = [
  { href: "#", label: "Política de privacidad" },
  { href: "#", label: "Términos de uso" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 py-5">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo size="footer" />

        <p className="text-[0.78rem] font-light text-white/50">
          © 2026 AiOS · Todos los derechos reservados.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.78rem] text-white/50 no-underline transition-colors hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
