import { Container } from "./container";
import { IconAI, IconConsulting, IconProjects, IconSoftware } from "./icons";

type Etapa = {
  Icon: (props: { className?: string }) => React.JSX.Element;
  title: string;
  sub: string;
  detalle: string;
  /** El tooltip de esta tarjeta sale a la derecha para no tapar la de abajo. */
  tooltipDerecha?: boolean;
};

const ETAPAS: Etapa[] = [
  {
    Icon: IconConsulting,
    title: "Consultoría",
    sub: "Estratégica y de procesos",
    detalle:
      "Análisis profundo de tus procesos, identificación de oportunidades y diseño de hoja de ruta tecnológica alineada con tus objetivos de negocio.",
  },
  {
    Icon: IconProjects,
    title: "Proyectos",
    sub: "Administración y control",
    detalle:
      "Gestión ágil y tradicional con seguimiento de KPIs, riesgos y entregables. Aseguramos la ejecución eficiente de cada iniciativa.",
  },
  {
    Icon: IconSoftware,
    title: "Software",
    sub: "Desarrollo a medida",
    detalle:
      "Plataformas y sistemas adaptados a tus procesos, con arquitectura escalable y segura. Soluciones que evolucionan con tu negocio.",
    tooltipDerecha: true,
  },
  {
    Icon: IconAI,
    title: "IA y Automatización",
    sub: "Optimización de flujos",
    detalle:
      "Optimizamos flujos de trabajo e integramos inteligencia artificial para decisiones más rápidas y eficientes. Automatización de tareas repetitivas.",
  },
];

const TOOLTIP_BASE =
  "pointer-events-none invisible absolute z-10 w-[240px] scale-90 rounded-[10px] border border-white/12 bg-navy-900/95 px-5 py-4 text-left text-[0.75rem] leading-relaxed text-white/85 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-[16px] transition-all duration-300 group-hover:visible group-hover:scale-100 group-hover:opacity-100 sm:w-[280px] sm:text-[0.8rem]";

function FlowCard({ Icon, title, sub, detalle, tooltipDerecha }: Etapa) {
  return (
    <div className="group relative w-full max-w-[300px] cursor-pointer rounded-[14px] border border-white/12 bg-white/7 px-6 py-5 backdrop-blur-[12px] transition-all duration-400 hover:-translate-y-1 hover:border-brand-500 hover:bg-white/14 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)]">
      <div
        role="tooltip"
        className={`${TOOLTIP_BASE} top-[calc(100%+12px)] left-1/2 -translate-x-1/2 ${
          tooltipDerecha
            ? "lg:top-1/2 lg:left-[calc(100%+16px)] lg:translate-x-0 lg:-translate-y-1/2"
            : ""
        }`}
      >
        <strong className="mb-1 block font-semibold text-white">{title}</strong>
        {detalle}
        {/* Punta del bocadillo */}
        <span
          aria-hidden
          className={`absolute bottom-full left-1/2 -translate-x-1/2 border-6 border-transparent border-b-navy-900/95 ${
            tooltipDerecha
              ? "lg:top-1/2 lg:right-full lg:bottom-auto lg:left-auto lg:-translate-y-1/2 lg:translate-x-0 lg:border-b-transparent lg:border-r-navy-900/95"
              : ""
          }`}
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-brand-500/18 transition-all duration-400 group-hover:scale-105 group-hover:bg-brand-500/30">
          <Icon className="size-[22px] text-brand-500" />
        </span>
        <div>
          <h3 className="mb-0.5 text-[0.95rem] font-semibold text-white">
            {title}
          </h3>
          <p className="text-[0.78rem] text-white/55">{sub}</p>
        </div>
      </div>
    </div>
  );
}

/** Tramo horizontal hacia la tarjeta siguiente. Solo en escritorio. */
function ConnectorH() {
  return (
    <div
      aria-hidden
      className="connector-line-h absolute top-1/2 right-[calc(-50%+25px)] left-[calc(50%+25px)] hidden h-0.5 lg:block"
    >
      <span className="connector-dot-h absolute -top-1 size-2.5 rounded-full bg-brand-500 shadow-[0_0_12px_rgba(242,101,34,0.4)]" />
    </div>
  );
}

/** Tramo vertical hacia la fila de abajo. Solo en escritorio. */
function ConnectorV() {
  return (
    <div
      aria-hidden
      className="connector-line-v absolute top-[calc(50%+25px)] bottom-[calc(-50%+25px)] left-1/2 hidden w-0.5 lg:block"
    >
      <span className="connector-dot-v absolute -left-1 size-2.5 rounded-full bg-brand-500 shadow-[0_0_12px_rgba(242,101,34,0.4)]" />
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-[70px] bg-navy-900 py-10 sm:py-14"
    >
      {/* Trama de puntos */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <Container className="relative z-[2] max-w-[1100px]">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-[0.7rem] font-semibold tracking-[0.12em] text-brand-500 uppercase">
            Nuestro proceso
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
            De la estrategia a la ejecución
          </h2>
          <p className="mx-auto mt-2 max-w-[500px] text-white/50">
            Un flujo de trabajo diseñado para transformar tu negocio con
            tecnología
          </p>
        </div>

        {/* Flujo en "S": tres tarjetas arriba y la cuarta bajo la tercera. */}
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-[30px]">
          {ETAPAS.map((etapa, i) => (
            <div
              key={etapa.title}
              className={`relative flex justify-center ${
                i === 3 ? "lg:col-start-3" : ""
              }`}
            >
              <FlowCard {...etapa} />
              {i < 2 && <ConnectorH />}
              {i === 2 && <ConnectorV />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
