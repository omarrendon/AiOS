type LogoProps = {
  /** `header` es la escala del nav; `footer` la versión reducida. */
  size?: "header" | "footer";
};

/**
 * Isotipo de AiOS, trazado como SVG a partir del original.
 *
 * Es geometría pura —un anillo y tres cápsulas— así que pesa unos cientos de
 * bytes, se mantiene nítido a cualquier tamaño y no arrastra el fondo gris
 * opaco que traía el JPEG. El `viewBox` conserva las coordenadas del original
 * (1398×1398) para que las medidas sean verificables contra él.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1398 1398" aria-hidden className={className}>
      <circle
        cx="699"
        cy="699"
        r="666"
        fill="none"
        className="stroke-logo-ink"
        strokeWidth="66"
      />
      <g fill="none" strokeWidth="151" strokeLinecap="round">
        <path d="M444 722 348 860" className="stroke-logo-accent" />
        <path d="M563 515 776 884" className="stroke-logo-steel" />
        <path d="M825 528 1046 892" className="stroke-logo-navy" />
      </g>
    </svg>
  );
}

export function Logo({ size = "header" }: LogoProps) {
  if (size === "footer") {
    return (
      <div className="flex items-center gap-2.5">
        <LogoMark className="size-6" />
        <strong className="text-[1.1rem] font-bold text-navy-900">AiOS</strong>
      </div>
    );
  }

  return (
    <a href="#" className="flex items-center gap-3 no-underline">
      <LogoMark className="size-9" />
      <span className="text-2xl font-bold tracking-tight text-navy-900">
        Ai<span className="font-light text-brand-500">OS</span>
      </span>
    </a>
  );
}
