import type { ReactNode } from "react";

/** Ancho máximo y padding lateral estándar del sitio (1280px / 40px → 20px). */
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
