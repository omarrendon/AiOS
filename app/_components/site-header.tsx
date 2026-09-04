"use client";

import { useEffect, useState } from "react";
import { Container } from "./container";
import { Logo } from "./logo";

const NAV_LINKS = [
  { href: "#servicios", label: "Proceso" },
  { href: "#enfoque", label: "Consultoría" },
];

const LINK_BASE =
  "font-medium tracking-[0.01em] text-ink-nav no-underline transition-colors hover:text-brand-500";
const CTA_BASE =
  "rounded-[4px] bg-brand-500 font-semibold text-white no-underline transition-colors hover:bg-brand-600";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); // el navegador puede restaurar el scroll antes de montar
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Al pasar a escritorio el panel deja de existir: hay que soltar el estado,
  // o al volver a móvil reaparecería abierto.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48rem)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-white/96 py-2.5 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <Container className="flex items-center justify-between gap-3">
        <Logo />

        <nav className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${LINK_BASE} text-[0.8rem]`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={`${CTA_BASE} px-[18px] py-1.5 text-[0.8rem]`}
          >
            Contacto
          </a>
        </nav>

        {/* Botón hamburguesa: las tres barras se convierten en aspa */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="-mr-2 flex size-10 items-center justify-center rounded-[4px] text-ink-nav transition-colors hover:text-brand-500 md:hidden"
        >
          <span className="relative block size-5" aria-hidden>
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Panel móvil en superposición: si empujara el contenido, la altura del
          header cambiaría al cerrarse y el desplazamiento al ancla aterrizaría
          desviado. Fondo opaco, o el hero se transparenta tras los enlaces. */}
      <div
        id="menu-movil"
        className={`absolute inset-x-0 top-full origin-top border-b border-line bg-surface-card shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <Container>
          <nav className="flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${LINK_BASE} rounded-[4px] px-2 py-3 text-base hover:bg-surface`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className={`${CTA_BASE} mt-2 mb-1 px-6 py-3 text-center text-base`}
            >
              Contacto
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
