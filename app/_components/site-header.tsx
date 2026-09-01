"use client";

import { useEffect, useState } from "react";
import { Container } from "./container";
import { Logo } from "./logo";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); // el navegador puede restaurar el scroll antes de montar
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-white/96 py-[14px] backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <Logo />
        <nav className="flex items-center gap-4 sm:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-[0.01em] text-ink-nav no-underline transition-colors hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-[4px] bg-brand-500 px-6 py-2 text-sm font-semibold text-white no-underline transition-colors hover:bg-brand-600"
          >
            Consultoría
          </a>
        </nav>
      </Container>
    </header>
  );
}
