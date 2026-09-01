type IconProps = {
  className?: string;
};

/**
 * Iconos de línea del sistema. Todos usan `currentColor`, así que el color se
 * controla con utilidades `text-*` desde el componente que los renderiza.
 */
const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function IconSoftware({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M8 20v-4h8v4M4 10h16M4 14h10" />
    </svg>
  );
}

export function IconProjects({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M8 4v4M16 4v4M6 12h4M6 16h6" />
    </svg>
  );
}

export function IconAI({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <circle cx="12" cy="9" r="3" />
      <path d="M12 12v5M6 18c0-4 4-6 6-6s6 2 6 6M2 18c0-6 6-8 10-8s10 2 10 8" />
    </svg>
  );
}

export function IconConsulting({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/* ===== Iconos pequeños de las métricas del hero ===== */

const metricStrokeProps = { ...strokeProps, strokeWidth: 1.5 } as const;

export function IconProjectCount({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...metricStrokeProps}>
      <path d="M8 1v14M1 8h14" />
      <circle cx="8" cy="8" r="2.5" />
    </svg>
  );
}

export function IconSatisfaction({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...metricStrokeProps}>
      <path d="M8 13.5L1 9.5L8 5.5L15 9.5L8 13.5Z" />
      <path d="M1 6.5L8 10.5L15 6.5" />
    </svg>
  );
}

export function IconSupport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...metricStrokeProps}>
      <path d="M2 14L14 2M8 14L14 8M2 8L8 2" />
      <circle cx="8" cy="8" r="6" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 7l10 6 10-6" />
    </svg>
  );
}
