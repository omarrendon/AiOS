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
| `brand-300` | `#f28f60` | Acento **sobre fondo oscuro**: etiquetas, palabras destacadas, fin de gradiente |
| `brand-500` | `#f26522` | Acento principal. CTAs, iconos, bordes activos, nodos del camino |
| `brand-600` | `#d35400` | **Solo** hover de `brand-500` en botones |
| `navy-900` | `#102a43` | Fondo de bloques oscuros: hero, cajas destacadas. También títulos sobre claro |
| `surface` | `#f5f7fa` | Fondo del documento (`body`) |
| `surface-raised` | `#f9fbfd` | Fondo de tarjeta en reposo — apenas se despega del fondo |
| `surface-card` | `#ffffff` | Fondo de tarjeta **en hover**, y fondo del footer |
| `ink` | `#1a2833` | Texto por defecto |
| `ink-nav` | `#1a2e42` | Enlaces del nav |
| `ink-muted` | `#3d5670` | Texto secundario dentro de tarjetas |
| `ink-soft` | `#8a9bb0` | Texto terciario: footer, legales |
| `line` | `#e8edf3` | Todos los bordes sobre fondo claro |

Colores exclusivos del logotipo, **fuera** de la paleta de UI. Úsalos solo dentro de
`LogoMark`; no son colores de interfaz:

| Token | Valor | Rol |
|---|---|---|
| `logo-ink` | `#06213e` | Anillo del isotipo |
| `logo-navy` | `#0f3559` | Barra derecha |
| `logo-steel` | `#49738b` | Barra central |
| `logo-accent` | `#f3703c` | Barra corta (naranja) |

La paleta de UI viene de `tempatev2.html`; la del logotipo son sus colores propios. Coinciden
en familia (naranja + navy) pero **no en valor**: el naranja de la UI es `#f26522` y el del
isotipo `#f3703c`. No los mezcles ni los unifiques sin decidirlo antes.

### Deuda de contraste conocida

Tres contrastes de esta paleta no llegan a WCAG AA y están pendientes de resolver:

| Caso | Actual | Mínimo |
|---|---|---|
| Texto blanco sobre `brand-500` (todos los CTA) | 3.15:1 | 4.5:1 |
| Texto blanco sobre `brand-600` (hover del CTA) | 4.17:1 | 4.5:1 |
| `ink-soft` sobre fondo claro (footer) | 2.84:1 | 4.5:1 |

`brand-500` sí sirve como elemento de UI —borde, icono— porque ahí el mínimo es 3:1 y da 3.15.
Lo que no pasa es como **fondo con texto blanco encima**. Poner `text-navy-900` en los botones
lo llevaría a 4.64:1 sin tocar el naranja.

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
- **Contenedor**: usa siempre `<Container>` (`app/_components/container.tsx`) — 20px de padding lateral en móvil, **10% desde `sm`**, sin tope de ancho. Es la regla horizontal única del sitio: si una sección no lo usa, no alinea con las demás. No re-implementes `px-*` a mano.
  El 10% no baja a móvil a propósito: a 390px son 39px por lado y dejaban las tarjetas del hero con 60px útiles cuando sus subtítulos necesitan 70-73px, partiéndolos en dos líneas. Medido.
- **Ritmo vertical**: `py-15` (60px) entre secciones · `p-10` (40px) dentro de cajas oscuras · `px-5 pt-7 pb-6` en tarjetas del pipeline.
- **Breakpoints**: estándar de Tailwind. `sm:` (640px) reorganiza dentro de un bloque; `lg:` (1024px) es donde los grids pasan de una a dos columnas. Diseña mobile-first.

### Animación

Tres animaciones registradas como tokens en `@theme`:

| Clase | Efecto | Dónde |
|---|---|---|
| `animate-pulse-glow` | Opacidad 0.3 ↔ 0.7, 4s | Resplandor decorativo del hero |
| `animate-card-entrance` | Fade + subida 20px, 0.6s `forwards` | Entrada de tarjetas |
| `path-line-x` / `path-line-y` | Línea sólida con un brillo que la recorre, 3s | Tramos del diagrama de servicios |
| `path-dash-x` | Guiones que avanzan, 0.9s | Retorno del ciclo en el diagrama |

`path-line-*` son utilidades (`@utility` en `globals.css`), no tokens de `@theme`, porque
empaquetan fondo + tamaño + animación juntos. Aplícalas a un `div` que ya tenga alto/ancho:
`<div className="path-line-x h-full w-full rounded-full" />`.

**No animes la longitud de una línea de conexión** (`scaleX`/`scaleY`). Se probó y un camino
que se encoge al 30% se lee como interrumpido, no como flujo. El brillo que recorre una línea
sólida transmite dirección sin romper la continuidad.

En `path-dash-x` el periodo del degradado (12px) y el desplazamiento de la animación coinciden;
si se desfasan, el bucle da un tirón en cada vuelta.

**Convención de resalte en los tramos**: reposo `opacity-55`, hover `opacity-100` y el doble de
grosor. El área sensible es la celda de la rejilla, con `group/link`, **no la línea**: 2px no se
pueden apuntar con el ratón.

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

### Sección de servicios: texto + diagrama

`services-section.tsx`. Una sola fila: columna de texto a la izquierda y un panel con el
diagrama de etapas a la derecha (`lg:grid-cols-[1fr_1.7fr]`).

Columna de texto: kicker, `h2`, entradilla, lista de puntos con filete izquierdo y frase
inicial destacada, y el botón primario.

```
border-l-2 border-white/15 pl-[18px]     en el <li>
font-medium text-white                    en el <b> inicial
```

El reparto es **10 / 30 / 50 / 10** (lateral, texto, panel, lateral). El fondo va a sangre en la
`<section>`; el `Container` de dentro aporta los dos 10%:

```
<section class="bg-navy-900 ...">     fondo a sangre
  <Container>                          los dos 10% laterales
    <div class="lg:grid-cols-[3fr_5fr] lg:gap-0">   30% y 50% del total
      <div class="lg:pr-10">           separación entre columnas
```

El `gap` va a cero **a propósito**: cualquier hueco de rejilla se restaría del 30/50 y los
porcentajes dejarían de cuadrar. La separación entre columnas sale del `pr-10` interno del
texto, que vive dentro de su 30%.

Los `fr` se calculan sobre el 80% que dejan los laterales, no sobre el total: para X% de texto
e Y% de panel, la proporción es `X:Y` (aquí 30:50 → `3fr_5fr`).

Diagrama: rejilla `md:grid-cols-[1fr_auto_1fr_auto_1fr]` con las columnas pares reservadas a
los tramos. El orden del DOM es 1 → 2 → 3 → 4 y la forma se arma con `col-start` / `row-start`,
así que en móvil colapsa a una columna en el orden correcto.

**El icono va encima del texto en los nodos, no al lado.** Con el icono a la izquierda, la caja
más el hueco más el padding se comen 94px de los 211px del nodo y solo quedan 117px para el
texto: cualquier título en español parte en dos líneas. Apilándolo, el texto sube a 169px
(+44%) y los metadatos caben en una línea. Se midió.

Los nodos llevan `md:self-stretch` + `h-full` para igualar altura aunque un título ocupe dos
líneas; sin eso, el `items-center` de la rejilla los deja de alturas distintas.

**Los tramos verticales necesitan `md:self-stretch`.** La rejilla lleva `items-center`, que
impide que la celda se estire; sin `self-stretch` el `h-full` del tramo resuelve contra una
altura automática y la línea no se ve. Ya pasó una vez.

El panel usa la tarjeta glassmorphism del sistema: su fondo translúcido deja pasar la trama de
puntos de la sección, así que **no** se repite la trama dentro.

### Filas alternadas de servicio — retirado

`services-section.tsx`. Estructura tomada de `.pm-section` de primero.com, con nuestros
colores y tipografía:

```
grid + lg:grid-cols-[1fr_1.7fr]      texto estrecho / pieza visual ancha
invertida -> lg:grid-cols-[1.7fr_1fr] + lg:order-first en la pieza
```

Se alterna el lado en cada fila (el `--flip` del original). Las columnas se invierten **y** se
reordena la pieza; en móvil el grid colapsa y el orden del DOM —texto y luego visual— ya es el
correcto, sin marcado duplicado.

Rasgo característico de la lista de puntos: filete a la izquierda y frase inicial destacada.

```
border-l-2 border-white/15 pl-[18px]     en el <li>
font-medium text-white                    en el <b> inicial
```

La pieza visual usa la tarjeta glassmorphism del sistema. Su fondo translúcido deja pasar la
trama de puntos de la sección, así que **no** se repite la trama dentro: dos tramas con
orígenes distintos se ven desalineadas.

Lo que **no** se copió del original: su titular de peso 400 y su CTA en píldora. Se usan el `h2`
y el botón de nuestro sistema. El CTA por fila es un enlace de texto, no un botón sólido: cuatro
botones naranjas seguidos competirían con la llamada real de la sección de contacto.

### Camino de servicios (roadmap) — retirado

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

### Fondo con trama de puntos

La sección de servicios va sobre navy con una trama de puntos, tomada de `tempatev2.html`:

```
bg-navy-900
bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)]
[background-size:24px_24px]
```

Van las tres juntas en el mismo elemento: `bg-navy-900` pinta el color y la segunda utilidad la
imagen; no hacen falta pseudo-elementos. El elemento debe ser **a sangre** (fuera del
`Container`), o la trama se corta al ancho del contenido.

Nada dentro puede llevar un fondo opaco del mismo navy: taparía la trama y dejaría un rectángulo
sin puntos, que se lee como un fallo.

### Tarjeta glassmorphism (sobre fondo oscuro)
```
rounded-lg border border-white/8 bg-white/6 backdrop-blur-[4px]
transition-all duration-300 hover:-translate-y-1 hover:bg-white/12
```

## Header y menú móvil

Por debajo de `md` (768px) los enlaces y el CTA del header se recogen en un desplegable.
`site-header.tsx` mantiene ambas versiones del marcado (`hidden md:flex` para escritorio,
panel `md:hidden` para móvil) compartiendo las clases base en `LINK_BASE` y `CTA_BASE`.

El panel se anima con `opacity` + `translate-y` + `visibility`, y se cierra al pulsar
cualquier elemento, con Escape, y al cruzar el breakpoint hacia escritorio.

Dos decisiones que no son estéticas:

- **Va en superposición (`absolute`), no empujando el contenido.** Si empujara, la altura del
  header cambiaría al cerrarse y el desplazamiento hacia el ancla aterrizaría desviado.
- **Fondo opaco (`bg-surface-card`), no el `bg-white/96` translúcido del header.** Ese 4% basta
  para que el texto blanco del hero se transparente como un fantasma detrás de los enlaces;
  se comprobó. En una franja fina como el header no se nota, en un panel sí.

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
