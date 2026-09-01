import { Fragment } from "react";
import { Container } from "./container";
import { IconAI, IconConsulting, IconProjects, IconSoftware } from "./icons";

const SERVICES = [
  {
    Icon: IconSoftware,
    title: "Software a la medida",
    description:
      "Plataformas y sistemas adaptados a tus procesos, con arquitectura escalable y segura.",
  },
  {
    Icon: IconProjects,
    title: "Administración de proyectos",
    description:
      "Gestión ágil y tradicional con seguimiento de KPIs, riesgos y entregables.",
  },
  {
    Icon: IconAI,
    title: "IA y automatización",
    description:
      "Optimizamos flujos de trabajo e integramos IA para decisiones más rápidas y eficientes.",
  },
  {
    Icon: IconConsulting,
    title: "Gestión de equipos remotos",
    description:
      "Control de productividad y seguimiento estratégico para maximizar el rendimiento de tus recursos.",
  },
];

/**
 * El recorrido serpentea a partir de `lg`:
 *
 *   [1] → [2]
 *          ↓
 *   [4] ← [3]
 *
 * El orden del DOM es 1 → conector → 2 → conector → 3 → conector → 4, y la
 * serpiente se arma solo con `col-start` / `row-start` desde `lg`. Al colapsar a
 * una columna en móvil todo queda en orden de lectura, sin marcado duplicado.
 */
const CARD_PLACEMENT = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-3 lg:row-start-3",
  "lg:col-start-1 lg:row-start-3",
];

/** Tramo que precede a cada tarjeta a partir de la segunda. */
const CONNECTORS = [
  { direction: "right", placement: "lg:col-start-2 lg:row-start-1" },
  { direction: "down", placement: "lg:col-start-3 lg:row-start-2" },
  { direction: "left", placement: "lg:col-start-2 lg:row-start-3" },
] as const;

function VerticalSegment({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[3px] ${className}`}>
      <div className="path-line-y h-full w-full rounded-full" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-x-[6px] border-t-[8px] border-x-transparent border-t-brand-300" />
    </div>
  );
}

function HorizontalSegment({ direction }: { direction: "right" | "left" }) {
  const toRight = direction === "right";
  return (
    <div className="relative h-[3px] w-full">
      <div className="path-line-x h-full w-full rounded-full" />
      <div
        className={
          toRight
            ? "absolute top-1/2 right-0 -translate-y-1/2 border-y-[6px] border-l-[8px] border-y-transparent border-l-brand-300"
            : "absolute top-1/2 left-0 -translate-y-1/2 border-y-[6px] border-r-[8px] border-y-transparent border-r-brand-300"
        }
      />
    </div>
  );
}

function Connector({
  direction,
  className,
}: {
  direction: (typeof CONNECTORS)[number]["direction"];
  className: string;
}) {
  return (
    <div aria-hidden className={className}>
      {/* En móvil el camino siempre baja */}
      <div className="flex justify-center py-3 lg:hidden">
        <VerticalSegment className="h-12" />
      </div>

      <div className="hidden h-full w-full lg:flex lg:items-center lg:justify-center">
        {direction === "down" ? (
          <VerticalSegment className="h-full py-4" />
        ) : (
          <HorizontalSegment direction={direction} />
        )}
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <Container>
      <div id="servicios" className="py-15">
        <div className="mb-14 rounded-lg border-l-4 border-brand-500 bg-navy-900 p-10">
          <span className="mb-4 inline-block text-xs font-semibold tracking-[0.08em] text-brand-300 uppercase">
            Consultoría Estratégica
          </span>
          <h2 className="mb-4 max-w-[760px] text-[1.8rem] leading-tight font-semibold text-white">
            Integración tecnológica, automatización y gestión de equipos remotos
          </h2>
          <p className="max-w-[640px] text-[0.95rem] leading-relaxed text-white/65">
            Cuatro etapas conectadas: cada una se apoya en la anterior para
            optimizar tus procesos y recursos humanos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_7rem_1fr] lg:grid-rows-[auto_6rem_auto]">
          {SERVICES.map(({ Icon, title, description }, i) => (
            <Fragment key={title}>
              {i > 0 && (
                <Connector
                  direction={CONNECTORS[i - 1].direction}
                  className={CONNECTORS[i - 1].placement}
                />
              )}

              <div
                style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                className={`group relative animate-card-entrance rounded-lg border border-line bg-surface-card p-7 pt-9 opacity-0 transition-all duration-400 ease-in-out hover:-translate-y-1.5 hover:border-brand-500 hover:shadow-[0_8px_40px_rgba(0,50,100,0.08)] ${CARD_PLACEMENT[i]}`}
              >
                {/* Nodo numerado del camino */}
                <span className="absolute -top-5 left-7 flex size-10 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-brand-300 text-sm font-bold text-white ring-4 ring-surface transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(0,98,255,0.12)]">
                  {i + 1}
                </span>

                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-brand-500/8 transition-all duration-400 group-hover:scale-104 group-hover:rotate-4 group-hover:bg-brand-500/15">
                  <Icon className="size-6 text-brand-500 transition-transform duration-400 group-hover:scale-106 group-hover:-rotate-4" />
                </div>

                <h3 className="mb-1.5 text-[1.05rem] font-semibold text-navy-900">
                  {title}
                </h3>
                <p className="text-[0.85rem] leading-relaxed text-ink-muted">
                  {description}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Container>
  );
}
