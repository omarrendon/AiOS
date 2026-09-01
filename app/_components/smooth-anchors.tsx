"use client";

import { useEffect } from "react";

/**
 * Rescata el caso que el navegador ignora al desplazarse a un ancla.
 *
 * El desplazamiento suave lo hace el CSS: `scroll-smooth` y `scroll-pt-*` en el
 * `<html>` (ver `app/layout.tsx`). Eso cubre cualquier `<a href="#...">` del
 * sitio sin JavaScript, así que header, CTA del hero y footer siguen siendo
 * Server Components.
 *
 * El hueco: Chrome solo ejecuta ese desplazamiento cuando el fragmento de la URL
 * *cambia*. Si el usuario pulsa "Servicios", scrollea a mano y vuelve a pulsar
 * "Servicios", el hash ya vale `#servicios` y no pasa nada. Este componente
 * cubre exactamente ese caso y no toca el resto, para no sustituir el camino
 * nativo —que ya funciona— por uno propio.
 */
export function SmoothAnchors() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      // Dejar pasar clicks de en medio, con modificador, o ya manejados
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const href = target
        ?.closest<HTMLAnchorElement>('a[href^="#"]')
        ?.getAttribute("href");
      if (!href || href === "#") return;

      // Si el fragmento cambia, el navegador ya se encarga.
      if (window.location.hash !== href) return;

      const section = document.getElementById(href.slice(1));
      if (!section) return;

      event.preventDefault();
      section.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
