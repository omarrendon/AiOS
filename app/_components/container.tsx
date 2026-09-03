import type { ReactNode } from "react";

/**
 * Regla horizontal del sitio. **Todas las secciones deben usarla** para que
 * arranquen en la misma vertical.
 *
 * En móvil son 20px fijos: el 10% (39px en una pantalla de 390px) dejaba las
 * tarjetas del hero con 60px útiles cuando sus subtítulos necesitan 70-73px, y
 * los partía en dos líneas. Desde `sm` pasa al 10%, que es donde la alineación
 * entre secciones se nota.
 *
 * Sin tope de ancho: los textos largos llevan su propio `max-w-*`, que es lo que
 * evita líneas ilegibles en monitores muy anchos.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`px-5 sm:px-[10%] ${className}`}>{children}</div>;
}
