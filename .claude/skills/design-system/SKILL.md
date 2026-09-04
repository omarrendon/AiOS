---
name: design-system
description: Design system de AiOS — tokens de color, tipografía, formas, espaciado, animación y patrones de componente. Úsala SIEMPRE antes de crear o modificar cualquier componente de UI, elegir un color, un tamaño de texto, un radio, un espaciado o una animación en este proyecto. Se aplica a todo archivo .tsx bajo app/ y a app/globals.css.
user-invocable: true
---

# Design System — AiOS

Derivado de `~/Documents/AiOS/template-final.html`. La fuente de verdad de los valores es el
bloque `@theme` de **`app/globals.css`**; este documento explica qué significa cada token y
cómo se combinan.

## Regla fundamental

**Nunca escribas un valor de color literal.** Ni `#f26522`, ni `bg-[#f26522]`.

- ¿Existe ya? Usa su token: `bg-brand-500`, `text-ink-soft`.
- ¿No existe? Añádelo a `@theme`, documéntalo aquí, y **luego** úsalo.

Excepción: los blancos translúcidos sobre fondo oscuro (`text-white/75`, `bg-white/8`). Son
opacidades de `white`, no colores nuevos.

## Tokens

### Color

| Token | Valor | Rol |
|---|---|---|
| `brand-500` | `#f26522` | Acento único: CTA, etiquetas de sección, iconos, conectores |
| `brand-600` | `#d35400` | Solo hover de `brand-500` |
| `navy-900` | `#102a43` | Hero, pipeline, footer y títulos sobre claro |
| `surface` | `#f5f7fa` | Fondo del documento |
| `surface-card` | `#ffffff` | Secciones claras (enfoque, contacto) |
| `surface-raised` | `#fafbfc` | Tarjetas de enfoque y campos del formulario |
| `ink` | `#1a2833` | Texto por defecto |
| `ink-nav` | `#1a2e42` | Enlaces del nav |
| `ink-soft` | `#4a6a8a` | Texto secundario: entradillas, descripciones |
| `line` | `#e8edf3` | Header y separadores de sección |
| `line-soft` | `#eef2f6` | Borde de las tarjetas de enfoque |
| `line-strong` | `#e0e6ed` | Borde de los campos del formulario |

Hay **un solo acento**. No existe un escalón claro del naranja: sobre navy se usa
`brand-500` directamente, que da 4.64:1.

Sobre `navy-900` no se usan los tokens `ink-*`: el texto va en `white`, `white/75`, `white/55`
o `white/50` según jerarquía.

Los tokens `logo-*` son colores propios del isotipo, **fuera** de la paleta de UI. Úsalos solo
dentro de `LogoMark`.

### Deuda de contraste conocida

Dos casos de la paleta del template no llegan a WCAG AA, verificados sobre la página:

| Caso | Actual | Mínimo |
|---|---|---|
| Texto blanco sobre `brand-500` (CTAs) | 3.15:1 | 4.5:1 |
| `brand-500` como texto sobre blanco (etiquetas de sección) | 3.15:1 | 4.5:1 |

`brand-500` sí sirve como **elemento de UI** (borde, icono, conector), donde el mínimo es 3:1.
Poner `text-navy-900` en los botones los llevaría a 4.64:1 sin tocar el naranja.

### Tipografía

**IBM Plex Sans**, cargada con `next/font/google` y expuesta como `--font-sans`. Ya está
aplicada en `<html>`; no la repitas.

| Uso | Clases |
|---|---|
| H1 (hero) | `text-3xl lg:text-[2.8rem] font-bold tracking-tight leading-[1.15]` |
| H2 (sección) | `text-2xl sm:text-[2rem] font-semibold tracking-tight` |
| H3 (tarjeta) | `text-[1.05rem] font-semibold` |
| Entradilla | `text-base leading-relaxed text-ink-soft` (máx. 600px) |
| Cuerpo | `text-[0.95rem]` · descripción de tarjeta `text-[0.88rem]` |
| Etiqueta de sección | `text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-brand-500` |
| Nav | `text-[0.8rem] font-medium` |

### Formas y espaciado

- **Radios**: `rounded-[4px]` botones · `rounded-md` campos · `rounded-[10px]` tarjetas de enfoque e iconos · `rounded-xl` tarjetas del hero · `rounded-[14px]` tarjetas del pipeline.
- **Contenedor**: usa siempre `<Container>` — 1280px máx., centrado, `px-5 sm:px-10`. Es la regla horizontal única: si una sección no lo usa, no alinea con las demás.
- **Ritmo vertical**: `py-10 sm:py-16` en secciones claras · `py-10 sm:py-14` en hero y pipeline · `py-5` en el footer.
- **Breakpoints**: `sm` 640 reorganiza dentro de un bloque; `lg` 1024 es donde los grids pasan a varias columnas y donde aparecen los conectores del pipeline.

### Animación

| Clase | Efecto |
|---|---|
| `animate-pulse-glow` | Resplandor del hero, 4s |
| `connector-line-h` / `-v` | Degradado de tres paradas que se desplaza, 2.5s |
| `connector-dot-h` / `-v` | Punto que recorre el tramo, 2.5s |

Los conectores se construyen con `color-mix` sobre `--color-brand-500`, para no repetir el hex.

Todo el sitio respeta `prefers-reduced-motion: reduce` por una regla global en `globals.css`.
No añadas `motion-reduce:*` por componente.

## Patrones de componente

### Botón primario
```
rounded-[4px] bg-brand-500 px-10 py-[14px] font-semibold text-white
transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-600
```

### Tarjeta glassmorphism (sobre navy)
Hero y pipeline:
```
border border-white/12 bg-white/8 backdrop-blur-[8px]
transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:bg-white/16
```

### Tarjeta clara (enfoque)
```
rounded-[10px] border border-line-soft bg-surface-raised px-6 py-7
transition-all duration-300 hover:-translate-y-1 hover:border-brand-500
hover:shadow-[0_8px_32px_rgba(0,0,0,0.05)]
```

### Pipeline en "S"

`services-section.tsx`. Cuatro tarjetas: tres en fila y la cuarta bajo la tercera
(`lg:col-start-3`). Cada celda es `relative flex justify-center` y el conector va dentro,
posicionado en absoluto con los offsets del template:

```
horizontal: top-1/2 left-[calc(50%+25px)] right-[calc(-50%+25px)] h-0.5
vertical:   left-1/2 top-[calc(50%+25px)] bottom-[calc(-50%+25px)] w-0.5
```

Los conectores son `hidden lg:block`: por debajo de `lg` el grid es de una columna y las
líneas no conectarían nada.

**Tooltips**: van en `group-hover`, sin JavaScript. Por defecto salen debajo; el de *Software*
sale a la derecha desde `lg` (`lg:left-[calc(100%+16px)]`) porque debajo taparía la tarjeta de
IA. La punta del bocadillo se orienta con el mismo condicional.

La sección **no** puede llevar `overflow-hidden`: recortaría los tooltips.

### Formulario de contacto

`contact-form.tsx` es el único componente cliente junto al header. **No hay backend**: el envío
se queda en el cliente y muestra una confirmación en línea. El template original usaba
`alert()`; se sustituyó porque bloquea el hilo y saca al usuario de la página.

Campos: `border-line-strong bg-surface-raised` en reposo, `focus:border-brand-500
focus:bg-surface-card`. Cada campo lleva `aria-label`, porque el `placeholder` no es etiqueta.

## Logotipo

`LogoMark` es el isotipo trazado como SVG (un anillo y tres cápsulas). El `viewBox` conserva
las coordenadas del original (1398×1398) para que las medidas sean verificables contra él.
Lleva una variante `light` para el footer navy. Legible hasta 24px, comprobado.

`app/icon.svg`, `favicon.ico` y `apple-icon.png` usan una **versión en negativo** (disco navy,
barras claras): a 16px el anillo se convierte en una mancha ilegible. No comparten código con
`LogoMark`; si cambia el logotipo, actualiza también esos tres archivos.

## Iconos

Todos en `icons.tsx`, `viewBox="0 0 24 24"` (16 en las métricas del hero), `fill="none"` y
**`stroke="currentColor"`**. El color se controla desde fuera con `text-*`. No añadas un
`stroke` fijo a un icono nuevo.

## Cómo extender

1. Añade el token en `@theme` de `app/globals.css`, con nombre semántico.
2. Documéntalo en la tabla que corresponda.
3. Úsalo.

Si repites la misma tira de clases en tres sitios, extrae un componente a `app/_components/`.
