import { Container } from "./container";
import {
  IconAI,
  IconConsulting,
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
  { Icon: IconSoftware, label: "Software", sub: "A medida" },
  { Icon: IconProjects, label: "Proyectos", sub: "Administración" },
  { Icon: IconAI, label: "IA", sub: "Automatización" },
  { Icon: IconConsulting, label: "Consultoría", sub: "Gestión remota" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-8 sm:py-14 lg:pt-16 lg:pb-14">
      {/* Resplandor decorativo del fondo */}
      <div
        aria-hidden
        className="absolute top-[-20%] right-[-5%] h-[140%] w-[45%] rotate-10 animate-pulse-glow bg-[linear-gradient(135deg,rgba(0,98,255,0.06)_0%,transparent_70%)]"
      />

      <Container className="relative z-10 grid items-center gap-9 lg:grid-cols-2 lg:gap-[50px]">
        <div>
          <h1 className="mb-4 text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-[2.2rem] lg:text-[2.8rem]">
            Soluciones{" "}
            <span className="border-b-[3px] border-brand-500 pb-0.5 text-brand-300">
              inteligentes
            </span>{" "}
            para la nueva era
          </h1>

          <p className="mb-7 max-w-full text-[1.05rem] leading-relaxed text-white/75 lg:max-w-[500px]">
            Desarrollo de software, automatización con IA y consultoría
            estratégica para optimizar la gestión de tu negocio.
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

        <div className="grid max-w-[400px] grid-cols-2 gap-2.5 sm:gap-4 lg:max-w-none">
          {CAPABILITIES.map(({ Icon, label, sub }) => (
            <div
              key={label}
              className="rounded-lg border border-white/8 bg-white/6 px-2.5 py-3.5 text-center backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/12 sm:px-5 sm:py-6"
            >
              <Icon className="mx-auto mb-2.5 size-8 text-white/70" />
              <div className="text-sm font-medium text-white/85">{label}</div>
              <div className="text-xs text-white/50">{sub}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
