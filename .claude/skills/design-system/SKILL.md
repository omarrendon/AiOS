---
name: design-system
description: Design system de AiOS — tokens de color, tipografía, formas, espaciado, animación y patrones de componente. Úsala SIEMPRE antes de crear o modificar cualquier componente de UI, elegir un color, un tamaño de texto, un radio, un espaciado o una animación en este proyecto. Se aplica a todo archivo .tsx bajo app/ y a app/globals.css.
user-invocable: true
---

# Design System — AiOS

Sistema visual del sitio, derivado del template original (`~/Documents/AiOS/template-aios.html`).
La fuente de verdad de los valores es el bloque `@theme` de **`app/globals.css`**; este documento
explica qué significa cada token y cómo combinarlos.

## Regla fundamental

**Nunca escribas un valor de color literal.** Ni `#0062ff`, ni `bg-[#0062ff]`, ni
`text-[rgba(255,255,255,0.75)]` como color de marca.

- ¿Necesitas un color que ya existe? Usa su token: `bg-brand-500`, `text-ink-muted`.
- ¿Necesitas uno que no existe? **Primero** agrégalo a `@theme` en `app/globals.css`,
  **luego** documéntalo aquí, y **después** úsalo.

Excepción única: los blancos translúcidos sobre fondo oscuro (`text-white/75`, `bg-white/6`).
Son opacidades de `white`, no colores nuevos, y Tailwind ya los expresa con la sintaxis `/`.

Para sombras y gradientes que sí necesitan valor arbitrario, referencia el token desde dentro:
`shadow-[0_0_0_2px_var(--color-brand-500)]`.

## Tokens

### Color

| Token | Valor | Rol |
|---|---|---|
| `brand-300` | `#6ea8ff` | Acento **sobre fondo oscuro**: etiquetas, palabras destacadas, fin de gradiente |
| `brand-500` | `#0062ff` | Acento principal. CTAs, iconos, bordes activos, puntos del pipeline |
| `brand-600` | `#004bb5` | **Solo** hover de `brand-500` en botones |
| `navy-900` | `#0a1e2f` | Fondo de bloques oscuros: hero, cajas destacadas. También texto de títulos sobre claro |
| `surface` | `#f5f7fa` | Fondo del documento (`body`) |
| `surface-raised` | `#f9fbfd` | Fondo de tarjeta en reposo — apenas se despega del fondo |
| `surface-card` | `#ffffff` | Fondo de tarjeta **en hover**, y fondo del footer |
| `ink` | `#1a2833` | Texto por defecto |
| `ink-nav` | `#1a2e42` | Enlaces del nav |
| `ink-muted` | `#3d5670` | Texto secundario dentro de tarjetas |
| `ink-soft` | `#4a6a8a` | Texto terciario: footer, legales |
| `line` | `#e8edf3` | Todos los bordes sobre fondo claro |

Colores exclusivos del logotipo, **fuera** de la paleta de UI. Úsalos solo dentro de
`LogoMark`; no son colores de interfaz:

| Token | Valor | Rol |
|---|---|---|
| `logo-ink` | `#06213e` | Anillo del isotipo |
| `logo-navy` | `#0f3559` | Barra derecha |
| `logo-steel` | `#49738b` | Barra central |
| `logo-accent` | `#f3703c` | Barra corta (naranja) |

Sobre `navy-900` no se usan los tokens `ink-*` — el texto es `white`, `white/85`, `white/75`,
`white/65` o `white/50` según jerarquía descendente.

La escala numérica sigue la convención de Tailwind (más alto = más oscuro), así que hay hueco
para intercalar `brand-400` o `navy-800` sin renombrar nada.

### Tipografía

**IBM Plex Sans** (variable), cargada con `next/font/google` en `app/layout.tsx` y expuesta
como `--font-ibm-plex-sans` → token `--font-sans`. `font-sans` ya está aplicado en `<html>`;
no hace falta repetirlo.

| Uso | Clases |
|---|---|
| H1 (hero) | `text-3xl sm:text-[2.2rem] lg:text-[2.8rem] font-bold tracking-tight leading-[1.15]` |
| H2 (sección) | `text-[1.8rem] font-semibold leading-tight` |
| H3 (tarjeta) | `text-[1.05rem] font-semibold` |
| Intro / lead | `text-[1.05rem] leading-relaxed` |
| Cuerpo | `text-[0.95rem] leading-relaxed` |
| Cuerpo pequeño | `text-[0.85rem] leading-relaxed` |
| Nav / metadatos | `text-sm font-medium` |
| Etiqueta de sección | `text-xs font-semibold uppercase tracking-[0.08em] text-brand-300` |

Los títulos grandes siempre llevan `tracking-tight`; las etiquetas en mayúsculas siempre
llevan `tracking-[0.08em]`. Nunca uses `font-black` ni pesos por encima de 700.

### Forma y espaciado

- **Radios**: `rounded-[4px]` en botones · `rounded-lg` (8px) en tarjetas y cajas · `rounded-full` solo en puntos indicadores.
- **Contenedor**: usa siempre `<Container>` (`app/_components/container.tsx`) — 1280px máx., padding lateral 20px → 40px en `sm`. No re-implementes `max-w-*` + `px-*` a mano.
- **Ritmo vertical**: `py-15` (60px) entre secciones · `p-10` (40px) dentro de cajas oscuras · `px-5 pt-7 pb-6` en tarjetas del pipeline.
- **Breakpoints**: estándar de Tailwind. `sm:` (640px) reorganiza dentro de un bloque; `lg:` (1024px) es donde los grids pasan de una a dos columnas. Diseña mobile-first.

### Animación

Tres animaciones registradas como tokens en `@theme`:

| Clase | Efecto | Dónde |
|---|---|---|
| `animate-pulse-glow` | Opacidad 0.3 ↔ 0.7, 4s | Resplandor decorativo del hero |
| `animate-card-entrance` | Fade + subida 20px, 0.6s `forwards` | Entrada de tarjetas |
| `path-line-x` / `path-line-y` | Línea sólida con un brillo que la recorre, 3s | Tramos del camino de servicios |

`path-line-*` son utilidades (`@utility` en `globals.css`), no tokens de `@theme`, porque
empaquetan fondo + tamaño + animación juntos. Aplícalas a un `div` que ya tenga alto/ancho:
`<div className="path-line-x h-full w-full rounded-full" />`.

**No animes la longitud de una línea de conexión** (`scaleX`/`scaleY`). Se probó y un camino
que se encoge al 30% se lee como interrumpido, no como flujo. El brillo que recorre una línea
sólida transmite dirección sin romper la continuidad.

Todo el sitio respeta `prefers-reduced-motion: reduce` mediante una regla global en
`globals.css` que anula animaciones y transiciones. No hace falta añadir `motion-reduce:*`
por componente.

`animate-card-entrance` requiere `opacity-0` en el elemento: la clase define el estado previo
durante el `animation-delay`, y `forwards` conserva el estado final. Para escalonar varias
tarjetas usa `style={{ animationDelay }}` calculado desde el índice del `.map()` — no
selectores `nth-child`, que se rompen al reordenar datos.

**Convención de hover**: elevar + reforzar. `hover:-translate-y-1` (tarjeta ligera),
`hover:-translate-y-1.5` (tarjeta con sombra), `hover:-translate-y-0.5` (botón).
Duraciones: `duration-300` para cambios simples, `duration-400` para compuestos.

## Patrones de componente

### Botón primario
```
rounded-[4px] bg-brand-500 px-10 py-[14px] font-semibold text-white no-underline
transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-600
```
Variante compacta (nav): `px-6 py-2 text-sm` y sin `-translate-y`.

### Caja oscura destacada
Es el contenedor de contenido con más peso de la página. Se usa en "Consultoría Estratégica"
y en "Contacto":
```
rounded-lg border-l-4 border-brand-500 bg-navy-900 p-10
```
Dentro: etiqueta `text-brand-300` en mayúsculas → `h2` en `text-white` → párrafo en `text-white/65`.

### Tarjeta clara con barra de gradiente
La tarjeta del pipeline. La barra superior crece desde la izquierda en hover:
```
group relative overflow-hidden rounded-lg border border-line bg-surface-raised
before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left
before:scale-x-0 before:bg-linear-to-r before:from-brand-500 before:to-brand-300
before:transition-transform before:duration-500
hover:border-brand-500 hover:bg-surface-card hover:before:scale-x-100
hover:shadow-[0_8px_40px_rgba(0,50,100,0.08)]
```
`overflow-hidden` es obligatorio para que la barra respete el radio. `group` en el contenedor
permite que los hijos reaccionen con `group-hover:`.

### Camino de servicios (roadmap)

`services-section.tsx`. Serpentea a partir de `lg`:

```
[1] → [2]
       ↓
[4] ← [3]
```

Una sola rejilla `lg:grid-cols-[1fr_7rem_1fr] lg:grid-rows-[auto_6rem_auto]`. Las pistas del
centro tienen medida propia para que cada tramo **llene su celda exacta** y el camino se vea
continuo. El orden del DOM es 1 → tramo → 2 → tramo → 3 → tramo → 4, y la serpiente se arma
solo con `lg:col-start-*` / `lg:row-start-*`; así, al colapsar a una columna en móvil, la
lectura queda en orden sin duplicar marcado.

Nodo numerado, montado sobre el borde de la tarjeta:
```
absolute -top-5 left-7 flex size-10 items-center justify-center rounded-full
bg-linear-to-br from-brand-500 to-brand-300 text-sm font-bold text-white ring-4 ring-surface
```
El `ring-4 ring-surface` recorta el nodo contra el fondo de página. Por eso la tarjeta **no**
puede llevar `overflow-hidden` (cortaría el nodo), y por eso esta tarjeta no usa la barra de
gradiente superior del patrón anterior.

### Tarjeta glassmorphism (sobre fondo oscuro)
```
rounded-lg border border-white/8 bg-white/6 backdrop-blur-[4px]
transition-all duration-300 hover:-translate-y-1 hover:bg-white/12
```

## Logotipo

`LogoMark` en `app/_components/logo.tsx` es el isotipo trazado como SVG: un anillo y tres
cápsulas con `stroke-linecap="round"`. El `viewBox` conserva las coordenadas del original
(1398×1398) para que las medidas sigan siendo verificables contra el archivo de marca.

Se controla el tamaño con utilidades de caja (`size-9`, `size-6`); no toques el `viewBox` ni
los trazos. Legible hasta 24px, comprobado.

`Logo` compone el isotipo con el wordmark «AiOS» y tiene dos escalas: `header` y `footer`.

### Iconos del navegador

`app/icon.svg`, `app/favicon.ico` (respaldo 32px para Safari < 16.4) y `app/apple-icon.png`
(180px) usan una **versión en negativo**: disco navy relleno con las barras en blanco, azul
claro y naranja.

No es el logotipo del header. A 16px —el tamaño real en la pestaña— el anillo del isotipo se
convierte en una mancha ilegible: se comprobó. El disco sólido conserva la silueta circular y
sí se lee. `icon.svg` invierte disco y barras en modo oscuro; el naranja se mantiene fijo en
ambos temas como ancla de marca.

Si cambias el logotipo, actualiza también estos tres archivos: no comparten código con
`LogoMark`.

## Iconos

Todos en `app/_components/icons.tsx`, `viewBox="0 0 24 24"` (16 para los de métricas),
`fill="none"` y **`stroke="currentColor"`**. El color se controla desde fuera con `text-*`:
`<IconAI className="size-6 text-brand-500" />`. No añadas `stroke` fijo a un icono nuevo.

## Navegación por anclas

El desplazamiento suave es **CSS**, no JavaScript. En `<html>` (`app/layout.tsx`):

```
scroll-smooth              → anima el desplazamiento a cualquier #ancla
scroll-pt-24               → 96px de offset, para que el header sticky no tape el destino
motion-reduce:scroll-auto  → desactiva la animación si el sistema pide menos movimiento
```

`scroll-pt-*` vive en el `<html>` a propósito: es **un solo lugar** que aplica a todas las
anclas. No pongas `scroll-mt-*` en las secciones — duplica el mismo número por elemento y
hay que reajustarlo cada vez que cambia la altura del header.

Un ancla nueva solo necesita un `id` en el contenedor de la sección. Nada más.

`app/_components/smooth-anchors.tsx` cubre un único hueco del navegador: Chrome solo ejecuta
el desplazamiento cuando el fragmento de la URL **cambia**, así que volver a pulsar el enlace
de la sección en la que ya estás no hacía nada. Ese componente intercepta solo ese caso; el
resto sigue por el camino nativo.

## Cómo extender el sistema

1. Agrega el token en `@theme` de `app/globals.css`, con nombre **semántico** (rol, no apariencia).
2. Documéntalo en la tabla correspondiente de este archivo.
3. Úsalo.

Si te encuentras repitiendo la misma tira de clases en tres lugares, extrae un componente a
`app/_components/` en vez de copiarla una cuarta vez.
