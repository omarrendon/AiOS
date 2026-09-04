"use client";

import { useState } from "react";

const CAMPO =
  "w-full rounded-md border border-line-strong bg-surface-raised px-4 py-3 text-[0.9rem] text-ink transition-colors placeholder:text-ink-soft focus:border-brand-500 focus:bg-surface-card focus:outline-none";

/**
 * Formulario sin backend: no hay endpoint al que enviar, así que el envío se
 * queda en el cliente y muestra una confirmación en la propia página.
 *
 * El template original usaba `alert()`; se sustituye por un mensaje en línea,
 * que no bloquea el hilo ni saca al usuario de la página.
 */
export function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
        e.currentTarget.reset();
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="nombre"
          required
          placeholder="Nombre completo"
          aria-label="Nombre completo"
          className={CAMPO}
        />
        <input
          type="email"
          name="correo"
          required
          placeholder="Correo electrónico"
          aria-label="Correo electrónico"
          className={CAMPO}
        />
      </div>

      <input
        type="text"
        name="asunto"
        placeholder="Asunto"
        aria-label="Asunto"
        className={CAMPO}
      />

      <textarea
        name="mensaje"
        placeholder="Cuéntanos sobre tu proyecto..."
        aria-label="Mensaje"
        className={`${CAMPO} min-h-[120px] resize-y`}
      />

      <button
        type="submit"
        className="w-full self-start rounded-[4px] bg-brand-500 px-10 py-[14px] font-semibold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-600 sm:w-auto"
      >
        Enviar mensaje
      </button>

      {enviado && (
        <p role="status" className="text-[0.9rem] text-ink-soft">
          <span className="font-medium text-brand-500">Mensaje recibido.</span>{" "}
          Nos pondremos en contacto contigo pronto.
        </p>
      )}
    </form>
  );
}
