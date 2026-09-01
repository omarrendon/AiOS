import { Container } from "./container";
import { IconMail } from "./icons";

export function ContactSection() {
  return (
    <Container>
      <div
        id="contacto"
        className="mb-15 flex flex-col items-start gap-6 rounded-lg border-l-4 border-brand-500 bg-navy-900 p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
      >
        <div>
          <span className="mb-4 inline-block text-xs font-semibold tracking-[0.08em] text-brand-300 uppercase">
            Contacto
          </span>
          <h2 className="mb-4 max-w-[640px] text-[1.8rem] leading-tight font-semibold text-white">
            ¿Listo para optimizar tus procesos?
          </h2>
          <p className="max-w-[560px] text-[0.95rem] leading-relaxed text-white/65">
            Cuéntanos qué necesitas y te respondemos con una propuesta concreta.
            Sin compromiso.
          </p>
        </div>

        <a
          href="mailto:contacto@aios.mx"
          className="inline-flex shrink-0 items-center gap-2.5 rounded-[4px] bg-brand-500 px-10 py-[14px] font-semibold text-white no-underline transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-600"
        >
          <IconMail className="size-5" />
          Agendar consultoría
        </a>
      </div>
    </Container>
  );
}
