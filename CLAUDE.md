@AGENTS.md

## Design system

Antes de crear o modificar cualquier componente de UI —o de elegir un color, tamaño de texto,
radio, espaciado o animación— consulta la skill `design-system`
(`.claude/skills/design-system/SKILL.md`).

Los tokens viven en el bloque `@theme` de `app/globals.css`. No escribas valores de color
literales en los componentes.

## Estructura

- `app/_components/` — componentes de UI. El guion bajo la excluye del routing de Next.
- Todo es Server Component salvo `site-header.tsx` (listener de scroll) y
  `smooth-anchors.tsx` (desplazamiento a anclas), que necesitan `'use client'`.
- El offset de las anclas bajo el header sticky es `scroll-pt-24` en el `<html>`, en un solo
  lugar. No agregues `scroll-mt-*` por sección.
