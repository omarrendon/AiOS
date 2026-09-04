type LogoProps = {
  /** `footer` va sobre fondo navy: el isotipo se aclara para que se lea. */
  size?: "header" | "footer";
};

/**
 * Isotipo de AiOS, trazado como SVG a partir del original: un anillo y tres
 * cápsulas. El `viewBox` conserva las coordenadas del archivo de marca
 * (1398×1398) para que las medidas sigan siendo verificables contra él.
 */
export function LogoMark({
  className = "",
  light = false,
}: {
  className?: string;
  /** Versión para fondos oscuros: anillo y barra derecha en claro. */
  light?: boolean;
}) {
  return (
    <svg viewBox="0 0 1398 1398" aria-hidden className={className}>
      <circle
        cx="699"
        cy="699"
        r="666"
        fill="none"
        className={light ? "stroke-white" : "stroke-logo-ink"}
        strokeWidth="66"
      />
      <g fill="none" strokeWidth="151" strokeLinecap="round">
        <path d="M444 722 348 860" className="stroke-logo-accent" />
        <path
          d="M563 515 776 884"
          className={light ? "stroke-white/70" : "stroke-logo-steel"}
        />
        <path
          d="M825 528 1046 892"
          className={light ? "stroke-white" : "stroke-logo-navy"}
        />
      </g>
    </svg>
  );
}

export function Logo({ size = "header" }: LogoProps) {
  if (size === "footer") {
    return (
      <div className="flex items-center gap-2.5">
        <LogoMark light className="size-7" />
        <strong className="text-base font-semibold tracking-[-0.01em] text-white">
          AiOS
        </strong>
      </div>
    );
  }

  return (
    <a href="#" className="flex items-center gap-2.5 no-underline">
      <LogoMark className="size-9" />
      <span className="text-[1.2rem] font-bold tracking-tight text-navy-900">
        Ai<span className="font-light text-brand-500">OS</span>
      </span>
    </a>
  );
}
