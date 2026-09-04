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

export function IconMarketing({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-6" />
      <circle cx="19" cy="7" r="1" />
    </svg>
  );
}

/* ===== Iconos de la sección Enfoque ===== */

export function IconDiagnostico({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function IconAgilidad({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M12 2v4M12 18v4M4 12H2M6 12H4M20 12h-2M22 12h-2M19 5l-3 3M19 19l-3-3M5 5l3 3M5 19l3-3" />
    </svg>
  );
}

export function IconEscalabilidad({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}

/* ===== Iconos de contacto ===== */

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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
