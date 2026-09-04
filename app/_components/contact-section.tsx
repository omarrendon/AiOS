import { Container } from "./container";
import { ContactForm } from "./contact-form";
import { IconMail, IconMapPin, IconPhone } from "./icons";

const DATOS = [
  { Icon: IconMail, texto: "contacto@aios.com" },
  { Icon: IconPhone, texto: "+52 473 181 7324" },
  { Icon: IconPhone, texto: "+52 951 408 2442" },
  { Icon: IconMapPin, texto: "Gto. capital y Oax. de Juárez" },
];

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="scroll-mt-[70px] border-t border-line bg-surface-card py-10 sm:py-16"
    >
      <Container>
        <span className="mb-3 inline-block text-[0.7rem] font-semibold tracking-[0.12em] text-brand-500 uppercase">
          Contacto
        </span>

        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-navy-900 sm:text-[2rem]">
          Hablemos de tu proyecto
        </h2>

        <p className="mb-10 max-w-[600px] leading-relaxed text-ink-soft">
          Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor solución
          tecnológica para tu negocio.
        </p>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-[50px]">
          <div className="pt-2">
            <p className="mb-5 text-[0.95rem] leading-[1.7] text-ink-soft">
              ¿Tienes una idea, un proyecto o necesitas asesoría? Estamos aquí
              para ayudarte. Completa el formulario o contáctanos directamente.
            </p>

            <ul className="flex flex-col gap-3.5">
              {DATOS.map(({ Icon, texto }) => (
                <li
                  key={texto}
                  className="flex items-center gap-3.5 text-[0.9rem] text-ink"
                >
                  <Icon className="size-5 shrink-0 text-brand-500" />
                  {texto}
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
