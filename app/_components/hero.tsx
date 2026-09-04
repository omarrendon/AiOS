import { Container } from "./container";
import {
  IconAI,
  IconConsulting,
  IconMarketing,
  IconProjectCount,
  IconProjects,
  IconSatisfaction,
  IconSoftware,
  IconSupport,
} from "./icons";

const METRICS = [
  { Icon: IconProjectCount, label: "+120 proyectos" },
  { Icon: IconSatisfaction, label: "98% satisfacción" },
  { Icon: IconSupport, label: "24/7 soporte" },
];

const CAPABILITIES = [
  { Icon: IconConsulting, label: "Consultoría", sub: "Estratégica" },
  { Icon: IconProjects, label: "Proyectos", sub: "Administración" },
  { Icon: IconSoftware, label: "Software", sub: "A medida" },
  { Icon: IconAI, label: "IA", sub: "Automatización" },
  { Icon: IconMarketing, label: "Marketing", sub: "Digital" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-7 sm:py-14">
      {/* Resplandor decorativo */}
      <div
        aria-hidden
        className="absolute top-[-20%] right-[-5%] h-[140%] w-[45%] rotate-10 animate-pulse-glow bg-[linear-gradient(135deg,rgba(242,101,34,0.15)_0%,transparent_70%)]"
      />

      <Container className="relative z-10 grid items-center gap-9 lg:grid-cols-2 lg:gap-[50px]">
        <div>
          <h1 className="mb-4 text-3xl leading-[1.15] font-bold tracking-tight text-white lg:text-[2.8rem]">
            Tecnología que{" "}
            <span className="border-b-[3px] border-brand-500 pb-0.5 text-brand-500">
              impulsa
            </span>{" "}
            tu negocio
          </h1>

          <p className="mb-7 max-w-full text-[1.05rem] leading-relaxed text-white/75 lg:max-w-[500px]">
            Desarrollo de software, automatización con IA y consultoría
            estratégica para optimizar la gestión de tu empresa.
          </p>

          <a
            href="#servicios"
            className="inline-block rounded-[4px] bg-brand-500 px-10 py-[14px] font-semibold text-white no-underline transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-600"
          >
            Explorar servicios
          </a>

          <div className="mt-8 flex flex-wrap gap-8">
            {METRICS.map(({ Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2.5 text-sm text-white/70"
              >
                <Icon className="size-4 shrink-0 text-white/60" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* 5 tarjetas: tres arriba y dos abajo alineadas a la izquierda */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {CAPABILITIES.map(({ Icon, label, sub }, i) => (
            <div
              key={label}
              className={`flex min-h-[100px] flex-col items-center justify-center rounded-xl border border-white/12 bg-white/8 px-3 py-4 text-center backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:bg-white/16 sm:min-h-[130px] sm:px-4 sm:py-6 ${
                i === 3 ? "sm:col-start-1" : i === 4 ? "sm:col-start-2" : ""
              }`}
            >
              <Icon className="mb-2.5 size-6 text-white/80 sm:size-8" />
              <div className="text-xs font-semibold text-white/90 sm:text-[0.9rem]">
                {label}
              </div>
              <div className="mt-0.5 text-[0.7rem] text-white/50 sm:text-xs">
                {sub}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
