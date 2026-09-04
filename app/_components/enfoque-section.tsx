import { Container } from "./container";
import { IconAgilidad, IconDiagnostico, IconEscalabilidad } from "./icons";

const PILARES = [
  {
    Icon: IconDiagnostico,
    title: "Diagnóstico profundo",
    description:
      "Analizamos tu negocio, procesos y objetivos para identificar oportunidades de mejora y automatización.",
  },
  {
    Icon: IconAgilidad,
    title: "Agilidad y eficiencia",
    description:
      "Implementamos metodologías ágiles que aceleran la entrega de valor sin sacrificar calidad ni control.",
  },
  {
    Icon: IconEscalabilidad,
    title: "Escalabilidad segura",
    description:
      "Diseñamos arquitecturas robustas y flexibles que crecen contigo, sin perder rendimiento ni seguridad.",
  },
];

export function EnfoqueSection() {
  return (
    <section
      id="enfoque"
      className="scroll-mt-[70px] border-b border-line bg-surface-card py-10 sm:py-16"
    >
      <Container>
        <span className="mb-3 inline-block text-[0.7rem] font-semibold tracking-[0.12em] text-brand-500 uppercase">
          Metodología
        </span>

        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-navy-900 sm:text-[2rem]">
          Un enfoque diseñado para crecer contigo
        </h2>

        <p className="mb-10 max-w-[600px] leading-relaxed text-ink-soft">
          Combinamos estrategia, tecnología y datos para construir soluciones
          que evolucionan al ritmo de tu negocio.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PILARES.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              className={`rounded-[10px] border border-line-soft bg-surface-raised px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-[0_8px_32px_rgba(0,0,0,0.05)] ${
                // El tercero centrado a media caja cuando quedan dos columnas
                i === 2
                  ? "sm:col-span-2 sm:mx-auto sm:max-w-1/2 lg:col-span-1 lg:mx-0 lg:max-w-none"
                  : ""
              }`}
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-[10px] bg-brand-500/8">
                <Icon className="size-6 text-brand-500" />
              </div>
              <h3 className="mb-2 text-[1.05rem] font-semibold text-navy-900">
                {title}
              </h3>
              <p className="text-[0.88rem] leading-relaxed text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
