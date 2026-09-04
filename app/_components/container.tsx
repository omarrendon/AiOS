import type { ReactNode } from "react";

/**
 * Regla horizontal del sitio: 1280px máximo, centrado, con 20px de padding
 * lateral que sube a 40px desde `sm`. Todas las secciones deben usarla para que
 * arranquen en la misma vertical.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1280px] px-5 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}
