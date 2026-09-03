import { Fragment } from "react";
import { Container } from "./container";
import { IconAI, IconConsulting, IconProjects, IconSoftware } from "./icons";

/** Cada servicio es un nodo del diagrama: título + un dato corto de su copy. */
const SERVICES = [
  {
    Icon: IconSoftware,
    title: "Software a la medida",
    meta: "arquitectura escalable",
  },
  {
    Icon: IconProjects,
    title: "Administración de proyectos",
    meta: "KPIs y entregables",
  },
  { Icon: IconAI, title: "IA y automatización", meta: "flujos optimizados" },
  {
    Icon: IconConsulting,
    title: "Gestión de equipos remotos",
    meta: "seguimiento estratégico",
    destacado: true,
  },
];

const POINTS = [
  {
    destacado: "Cuatro etapas conectadas",
    resto: "cada una se apoya en la anterior.",
  },
  {
    destacado: "Metodología según el proyecto",
    resto: "ágil o tradicional, no una talla única.",
  },
  {
    destacado: "Medible en cada paso",
    resto: "KPIs, riesgos y entregables bajo control.",
  },
];

const KICKER =
  "text-xs font-semibold tracking-[0.08em] text-brand-300 uppercase";

/**
 * El diagrama serpentea a partir de `md`:
 *
 *   [1] → [2] → [3]
 *                ↓
 *   ╌╌╌╌╌╌╌╌╌╌╌ [4]
 *
 * El orden del DOM es 1 → 2 → 3 → 4 y la forma se arma solo con `col-start` /
 * `row-start`, así que al colapsar a una columna en móvil la lectura es correcta.
 */
const NODE_PLACEMENT = [
  "md:col-start-1 md:row-start-1",
  "md:col-start-3 md:row-start-1",
  "md:col-start-5 md:row-start-1",
  "md:col-start-5 md:row-start-3",
];

const LINKS = [
  "md:col-start-2 md:row-start-1", // 1 → 2
  "md:col-start-4 md:row-start-1", // 2 → 3
  "md:col-start-5 md:row-start-2", // 3 ↓ 4
];

/**
 * Tramo del diagrama. En móvil siempre baja.
 *
 * El flujo lo dan las utilidades `path-line-*`: línea continua con un brillo que
 * la recorre. Al pasar el ratón sube de opacidad y engorda. El área sensible es
 * toda la celda, no la línea: 2px no se pueden apuntar con el ratón.
 */
function Link({
  vertical,
  className,
}: {
  vertical: boolean;
  className: string;
}) {
  const comun =
    "rounded-full opacity-55 transition-all duration-300 group-hover/link:opacity-100";

  return (
    <div
      aria-hidden
      className={`group/link flex items-center justify-center md:self-stretch ${className}`}
    >
      {/* Móvil: el camino siempre baja */}
      <div className={`path-line-y h-6 w-0.5 md:hidden ${comun}`} />

      {vertical ? (
        <div
          className={`path-line-y hidden h-full w-0.5 group-hover/link:w-1 md:block ${comun}`}
        />
      ) : (
        <div
          className={`path-line-x hidden h-0.5 w-10 group-hover/link:h-1 md:block ${comun}`}
        />
      )}
    </div>
  );
}

function FlowNode({
  Icon,
  title,
  meta,
  destacado = false,
}: (typeof SERVICES)[number] & { destacado?: boolean }) {
  return (
    <div
      className={`relative flex h-full flex-col gap-4 rounded-lg border px-5 py-5 ${
        destacado
          ? "border-brand-500/40 bg-brand-500/12"
          : "border-white/10 bg-white/8"
      }`}
    >
      {/* Puntos de conexión a los lados */}
      <span
        aria-hidden
        className="absolute top-1/2 -left-1.5 hidden size-2.5 -translate-y-1/2 rounded-full bg-white/25 md:block"
      />
      <span
        aria-hidden
        className="absolute top-1/2 -right-1.5 hidden size-2.5 -translate-y-1/2 rounded-full bg-white/25 md:block"
      />

      <span
        className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${
          destacado ? "bg-brand-500/25" : "bg-white/10"
        }`}
      >
        <Icon className="size-6 text-brand-300" />
      </span>

      <div>
        <div className="text-[1.05rem] leading-tight font-medium text-white">
          {title}
        </div>
        <div className="mt-1.5 text-[0.85rem] leading-tight text-white/45">
          {meta}
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="bg-navy-900 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] py-15 [background-size:24px_24px]"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[3fr_5fr] lg:gap-0">
          {/* Columna de texto */}
          <div className="lg:pr-10">
            <span className={`mb-4 inline-block ${KICKER}`}>
              Consultoría Estratégica
            </span>

            <h2 className="mb-4 text-[1.8rem] leading-tight font-semibold tracking-tight text-white">
              Integración tecnológica, automatización y gestión de equipos
              remotos
            </h2>

            <p className="max-w-[46ch] text-[1.05rem] leading-relaxed text-white/65">
              Soluciones personalizadas para la optimización de tus procesos y
              recursos humanos.
            </p>

            <ul className="mt-9 grid gap-6">
              {POINTS.map(({ destacado, resto }) => (
                <li
                  key={destacado}
                  className="border-l-2 border-white/15 pl-[18px] text-[0.95rem] leading-relaxed text-white/65"
                >
                  <b className="font-medium text-white">{destacado}</b> {resto}
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="group mt-9 inline-flex items-center gap-2.5 rounded-[4px] bg-brand-500 px-7 py-3.5 text-[0.95rem] font-semibold text-white no-underline transition-colors hover:bg-brand-600"
            >
              Agendar consultoría
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* Panel con el diagrama. El fondo translúcido deja pasar la trama de
              puntos de la sección, así que no se repite aquí. */}
          <div className="rounded-lg border border-white/8 bg-white/6 p-8 backdrop-blur-[4px] lg:p-10">
            <span className={`block ${KICKER}`}>Servicios</span>

            <div className="mt-5 mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2">
              <span aria-hidden className="size-2 rounded-full bg-brand-500" />
              <span className="text-[0.85rem] font-medium tracking-wide text-white/80">
                Ruta completa
              </span>
              <span className="text-[0.85rem] text-white/40">4 etapas</span>
            </div>

            <div className="grid grid-cols-1 items-center md:grid-cols-[1fr_auto_1fr_auto_1fr] md:grid-rows-[auto_3.5rem_auto]">
              {SERVICES.map((service, i) => (
                <Fragment key={service.title}>
                  {i > 0 && (
                    <Link vertical={i === 3} className={LINKS[i - 1]} />
                  )}
                  <div className={`md:self-stretch ${NODE_PLACEMENT[i]}`}>
                    <FlowNode {...service} />
                  </div>
                </Fragment>
              ))}

              {/* Retorno del ciclo hacia la primera etapa */}
              <div
                aria-hidden
                className="group/dash hidden items-center md:col-span-4 md:col-start-1 md:row-start-3 md:flex"
              >
                <div className="path-dash-x h-0.5 w-full opacity-45 transition-opacity duration-300 group-hover/dash:opacity-100" />
              </div>
            </div>

            <p className="mt-10 text-[0.85rem] text-white/40">
              El ciclo se repite en cada proyecto: lo aprendido en la última
              etapa alimenta la primera.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
