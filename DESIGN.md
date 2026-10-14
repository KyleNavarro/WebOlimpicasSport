---
name: Olímpicas Sport
description: Colcha de dotación — piezas de tela de uniforme unidas por pespunte rojo visible.
colors:
  ground: "#29466b"
  indigo: "#2f4e73"
  indigo-deep: "#1e3554"
  chambray: "#a7b8c7"
  chambray-light: "#bccad6"
  linen: "#eee8dc"
  paper: "#fbfaf6"
  black: "#1b1b1d"
  red: "#d62828"
  red-patch: "#c42222"
  yellow: "#ffd400"
  stripe-a: "#e7e3d6"
  stripe-b: "#7d93ad"
  stripe-c: "#495f74"
  ink: "#1f1a17"
  ink-indigo: "#14243a"
  ink-soft: "#4a4039"
  on-dark: "#eee8dc"
  on-dark-soft: "#cbd6e2"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.55rem, 1.35rem + 4.1vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "0.002em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.05rem, 1.35rem + 2.4vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.005em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.4rem, 1.2rem + 0.6vw, 1.8rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "0.015em"
  lead:
    fontFamily: "Barlow, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Barlow, Segoe UI, Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Barlow, Segoe UI, Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  focus: "2px"
  full: "50%"
spacing:
  gap: "5px"
  seam-inset: "9px"
  edge: "clamp(8px, 1.2vw, 16px)"
  pad: "clamp(1.5rem, 1rem + 2.4vw, 3.75rem)"
  section: "clamp(4rem, 3rem + 4vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.45rem 0.8rem"
    height: "3.25rem"
  button-primary-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.red}"
  button-secondary:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.ink-indigo}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.45rem 0.8rem"
    height: "3.25rem"
  button-secondary-active:
    backgroundColor: "{colors.ink-indigo}"
    textColor: "{colors.linen}"
  button-dark:
    backgroundColor: "{colors.black}"
    textColor: "{colors.linen}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.1rem 0.8rem"
    height: "2.9rem"
  nav-tab:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1rem 0.62rem"
  nav-tab-active:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.on-dark}"
  cloth-label:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.55em 0.95em 0.5em"
  woven-label:
    backgroundColor: "{colors.black}"
    textColor: "{colors.linen}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.55rem 1.1rem 0.5rem"
  supply-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  step-number:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.linen}"
    rounded: "{rounded.full}"
    size: "2.9rem"
---

# Design System: Olímpicas Sport

## Overview

**Creative North Star: "La colcha de dotación"**

La página es una colcha hecha con retazos de las telas que Olímpicas Sport confecciona: dril índigo, chambray, camisería a rayas, negro y crudo. Cada bloque de contenido es una pieza de tela con textura tejida, separada de sus vecinas por una holgura mínima que deja ver el suelo índigo de sarga, y cosida por dentro con un pespunte rojo discontinuo, el rojo del logotipo. Las piezas son desiguales a propósito: la retícula de 12 columnas se reparte en anchos distintos en cada sección para que la colcha nunca se lea como una fila de tarjetas iguales.

El sistema distingue materialmente lo que la empresa fabrica de lo que suministra. Lo fabricado va cosido a la colcha (pieza con pespunte); el EPP suministrado va prendido con una etiqueta de cartón con ojal, girada sobre su foto, sin costura. Las fotos son retazos dentro de la colcha y llevan etiquetas de tela cosidas como pie. La densidad es de cartel: titulares en bloque condensado en mayúsculas, lectura en Barlow de texto corrido, y mucho aire dentro de cada pieza.

El movimiento tiene un solo gesto: «se cose al llegar». Al entrar en pantalla, el pespunte de cada pieza se dibuja en orden alrededor del borde y la pieza asienta su sombra. Con movimiento reducido el pespunte aparece completo y estático. Se rechaza el hero azul corporativo a sangre con fila de tarjetas iguales.

**Key Characteristics:**
- Piezas de tela de esquina recta con textura tejida mezclada en `soft-light`.
- Pespunte rojo discontinuo (9px de puntada cada 15px) a 9px del borde de cada pieza.
- Holgura de 5px entre piezas sobre un suelo índigo de sarga.
- Barlow Condensed en mayúsculas de bloque para titulares, etiquetas y botones; Barlow para leer.
- Amarillo del logotipo reservado para foco, selección y pestaña activa.
- Lo fabricado se cose; el EPP se prende con etiqueta de suministro.

## Colors

Telas de uniforme apagadas sobre un suelo índigo, con el rojo del logotipo como hilo y el amarillo como señal de guardia.

### Primary
- **Rojo hilo de logotipo** (red): el pespunte de todas las piezas, los subrayados de puntada, las divisorias discontinuas, el hilo del proceso y el botón principal «Solicitar cotización». Es hilo y acción, no superficie.
- **Rojo parche** (red-patch): la tela roja, reservada a la pieza de llamada final de contacto y a una muestra del muestrario; sobre ella el pespunte pasa a crudo y el texto es blanco.

### Secondary
- **Índigo de dril** (indigo): piezas oscuras de contenido, pestaña activa, números de paso, íconos de la franja de confianza.
- **Índigo hondo de sarga** (indigo-deep): pieza índigo con textura de sarga en lugar de tafetán; carril de la barra de desplazamiento.
- **Chambray** (chambray): la pieza clara azulada del hero y de los bloques secundarios; también el pulgar de la barra de desplazamiento.
- **Chambray claro** (chambray-light): fondo de las opciones de la bifurcación del proceso y pie de la misión.

### Tertiary
- **Amarillo de logotipo** (yellow): exclusivamente anillo de foco, selección de texto, enlace de salto y borde de la pestaña activa.
- **Rayas de camisería** (stripe-a, stripe-b, stripe-c): las tres hebras del tejido rayado de camisa; el texto sobre rayas siempre se apoya en una banda de stripe-a.

### Neutral
- **Índigo lavado** (ground): el suelo de la colcha bajo la textura de sarga; asoma en la holgura entre piezas y detrás de la cabecera.
- **Crudo / lino** (linen): la pieza clara por defecto, cabecera, etiquetas cosidas, botón secundario y texto sobre fondos oscuros.
- **Papel** (paper): solo la etiqueta de suministro del EPP y la última opción de la bifurcación; es cartón, no tela.
- **Negro funeral** (black): piezas negras, botón de cabecera, etiquetas tejidas y fondo detrás de las fotos.
- **Tinta** (ink): texto sobre crudo y papel.
- **Tinta índigo** (ink-indigo): titulares sobre chambray y crudo, texto del botón secundario, anillo exterior del foco.
- **Tinta suave** (ink-soft): texto de apoyo sobre piezas claras.
- **Crudo sobre oscuro / azul niebla** (on-dark, on-dark-soft): texto principal y de apoyo sobre índigo y negro.

### Named Rules
**La regla del hilo rojo.** El rojo es hilo y acción: pespuntes, subrayados de puntada, divisorias discontinuas y el botón principal. Solo una pieza por sección puede ser de tela roja, y sobre ella el hilo cambia a crudo.

**La regla del amarillo de guardia.** El amarillo solo aparece cuando algo está activo o enfocado (foco, selección, pestaña activa, enlace de salto). Nunca decora.

## Typography

**Display Font:** Barlow Condensed (con Arial Narrow, sans-serif), pesos 500/600/700, servida localmente.
**Body Font:** Barlow (con Segoe UI, Roboto, sans-serif), pesos 400/500/600, servida localmente.

**Character:** Letra de rótulo de taller y de etiqueta de prenda: condensada, en mayúsculas de bloque y con interletraje abierto en las etiquetas; la lectura descansa en una grotesca humanista sin mayúsculas forzadas.

### Hierarchy
- **Display** (700, fluida de 2.55rem a 5.25rem, interlínea 0.92): solo el titular del hero, en mayúsculas, ancho máximo 15ch; en escritorio se limita además a 7.9vh para que quepa en el primer pliegue.
- **Headline** (700, fluida de 2.05rem a 3.6rem, interlínea 0.95): títulos de sección, mayúsculas, 14–18ch.
- **Title** (600, fluida de 1.4rem a 1.8rem, interlínea 1.02, +0.015em): títulos de pieza (soluciones, sectores, diferenciadores, pasos), mayúsculas.
- **Lead** (400, fluida de 1.125rem a 1.3rem, interlínea 1.5): entradilla bajo los titulares, 40–52ch.
- **Body** (400, 1.0625rem, interlínea 1.6): párrafos, máximo 62ch con `text-wrap: pretty`.
- **Body small** (400, 0.9375rem, interlínea 1.35–1.55): texto dentro de piezas pequeñas, listas de contacto y pie.
- **Label** (600, 0.75–1.0625rem, +0.08em a +0.16em, mayúsculas): botones, pestañas, etiquetas cosidas, etiquetas tejidas, rótulos de contacto y títulos de columna del pie.

### Named Rules
**La regla del bloque.** Barlow Condensed va siempre en mayúsculas y solo en titulares, etiquetas, botones y cifras; el texto que se lee de corrido es Barlow en caja normal.

**La regla de la cifra tabular.** Los años y números de paso usan `font-variant-numeric: tabular-nums` en condensada 700.

## Layout

La colcha es una retícula CSS con holgura de 5px (gap) entre piezas; esa holgura deja ver el suelo índigo y es la única separación entre piezas vecinas dentro de una sección. Entre secciones el ritmo es fluido (section, de 4rem a 7.5rem). El contenido llega casi al borde: margen lateral fluido de 8 a 16px (edge). El relleno interno de las piezas grandes es fluido de 1.5rem a 3.75rem (pad); las piezas pequeñas suman el retranqueo del pespunte (9px) a su relleno para que el texto nunca toque la costura.

Las secciones se componen sobre 12 columnas a partir de 48–64em y reparten anchos desiguales (7/5, 4/3/5, 6/6 en dos filas, 1/8 + 8/12) para que ninguna fila sea de piezas idénticas. La cabecera es una pieza de crudo fija (sticky) de 76px de alto sobre el mismo suelo índigo.

Puntos de corte en `em`, de menor a mayor:
- **40em**: listas de confianza, valores y pie pasan a 2 columnas; por debajo, botón de cabecera y menú quedan solo con ícono.
- **48em**: el hero, soluciones, diferenciadores y el muestrario pasan a retícula (12 o 6 columnas).
- **64em**: navegación en pestañas visible y menú móvil oculto; composición completa de 12 columnas; el hilo del proceso pasa de vertical a horizontal; la etiqueta del EPP se superpone a su foto.
- **72em**: la franja de confianza pasa a 4 columnas.
- **80em**: el muestrario de sectores adopta su composición de 12 columnas en dos filas.

## Elevation & Depth

Profundidad de tela sobre tela: las piezas descansan planas sobre el suelo y proyectan una sola sombra corta y caída, como un retazo apenas levantado. No hay capas flotantes ni brillos. La única pieza que se separa del plano es la etiqueta de suministro del EPP: girada entre −0.8° y −1.4°, recortada en silueta de cartón y con sombra proyectada propia. Las muestras de sector (swatches) no llevan sombra porque su canto dentado ya las recorta.

### Shadow Vocabulary
- **Pieza** (`box-shadow: 0 1px 1px rgb(8 14 26 / 0.28), 0 12px 24px -16px rgb(8 14 26 / 0.7)`): toda pieza de tela y la foto del EPP.
- **Asiento** (`box-shadow: 0 1px 1px rgb(8 14 26 / 0.1), 0 4px 10px -8px rgb(8 14 26 / 0.3)`): punto de partida de la animación «se cose al llegar», que asienta hacia la sombra de pieza.
- **Botón** (`box-shadow: 0 1px 1px rgb(0 0 0 / 0.3), 0 8px 16px -10px rgb(0 0 0 / 0.6)`), al pasar (`0 2px 2px rgb(0 0 0 / 0.25), 0 14px 22px -12px rgb(0 0 0 / 0.6)`), al presionar sin sombra.
- **Etiqueta cosida** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.35)`): etiquetas sobre fotos y cuerpo cosido sobre rayas.
- **Etiqueta colgante** (`filter: drop-shadow(0 10px 16px rgb(8 14 26 / 0.35))`): solo la etiqueta de suministro del EPP.

### Named Rules
**La regla de tela sobre tela.** Una pieza tiene una sola sombra, corta y hacia abajo. Solo la etiqueta del EPP, que no está cosida, se gira y cuelga con sombra proyectada.

## Shapes

Esquinas rectas en todo lo que es tela (0px): piezas, botones, pestañas, etiquetas. Los bordes nunca son líneas continuas en la tela; las uniones son pespuntes discontinuos (degradado repetido de 9px de puntada cada 15px, 2px de grosor, a 9px del canto; en botones 7px cada 12px, 1.5px de grosor, a 5px del canto) o divisorias discontinuas de 1.5px. Las únicas siluetas propias son cuatro y cada una nombra un objeto:

- **Canto dentado** de las muestras de sector: el borde inferior cortado con tijera de picos (máscara cónica de dientes de 14px).
- **Etiqueta de cartón** del EPP: esquinas superiores achaflanadas 1.6rem, ojal circular, filete interior gris sólido de cartón.
- **Etiqueta tejida** de servicios: extremos doblados en V de 4px.
- **Botón de paso**: el número del proceso es un botón de costura circular (50%) con anillo interior de crudo.

El foco es la única curva añadida (2px).

### Named Rules
**La regla del canto recto.** La tela no se redondea. Si una forma no es rectangular, debe ser un objeto real del taller: canto dentado, etiqueta de cartón, etiqueta tejida o botón de costura.

## Components

### Buttons
Parches de tela cosidos: se levantan al pasar y se hunden e invierten al presionar.
- **Shape:** esquina recta (0px), alto mínimo 3.25rem, textura de tafetán en `soft-light`, pespunte interior a 5px del canto en el color del texto al 70%.
- **Primary (rojo):** parche rojo con texto blanco, condensada 600 de 1.0625rem en mayúsculas (+0.08em), ícono de WhatsApp a la izquierda. Es la acción de cotización.
- **Secondary (crudo):** parche de lino con texto tinta índigo y pespunte rojo; lleva flecha a la derecha que avanza 3px al pasar.
- **Dark (negro):** parche negro con texto crudo y pespunte rojo; versión compacta (2.9rem) en la cabecera.
- **Hover / Active:** al pasar sube 2px y alarga la sombra (180ms, `cubic-bezier(0.16, 1, 0.3, 1)`); al presionar baja 1px, pierde la sombra e invierte fondo y texto, y el pespunte toma el color original del fondo.
- **Enlace de puntada:** enlace secundario en condensada mayúscula con subrayado discontinuo rojo de 2px desplazado 0.42em; al pasar el subrayado toma el color del texto y la flecha avanza 4px.

### Navigation
- **Pestañas cosidas:** condensada 600 de 1rem en mayúsculas (+0.1em), sin subrayado, con borde discontinuo transparente de 1.5px que se vuelve rojo al pasar. La pestaña activa (marcada por la sección visible) es un retazo índigo con texto crudo y borde discontinuo amarillo.
- **Móvil (bajo 64em):** botón «Menú» con borde discontinuo rojo; abierto, se invierte a tinta con borde amarillo y despliega una pieza índigo con enlaces en condensada 700 de 1.6–2.2rem separados por divisorias discontinuas crudas. Bajo 40em el botón y la cotización quedan solo con ícono.

### Cards / Containers (piezas)
- **Corner Style:** recto (0px).
- **Background:** una de las telas: lino, chambray, índigo, índigo de sarga, negro, rojo, rayas, rayas suaves o foto. Cada tela fija su color de texto.
- **Shadow Strategy:** sombra de pieza (ver Elevation & Depth).
- **Border:** ninguno; el pespunte interior es el borde.
- **Internal Padding:** pad en piezas grandes; retranqueo del pespunte + 0.9 a 1.6rem en piezas pequeñas.
- **Texto sobre rayas:** siempre sobre banda de stripe-a o un cuerpo de lino cosido con pespunte discontinuo interior.

### Etiqueta cosida (cloth-label)
Pie de foto como etiqueta de tela cosida en la esquina inferior: lino con textura, borde discontinuo rojo de 1px, marco exterior de lino de 4px, condensada 600 en mayúsculas (+0.1em). Versión pequeña de 0.75rem en las fotos de soluciones.

### Etiqueta tejida (woven label)
Chips de servicios: negro con textura, texto crudo en condensada 600 mayúscula (+0.16em), puntada roja discontinua interior a 4px y extremos doblados en V.

### Muestra de tela (swatch)
Sectores como muestrario: cada muestra es una pieza de tela con ícono de trazo de 2.4rem, título y texto sobre banda de lino al pie, y canto inferior dentado. Sin sombra.

### Etiqueta de suministro (EPP)
Rótulo de papel con chaflanes superiores, ojal con anillo, filete interior de cartón, rotado, superpuesto a su foto desde 64em. Lleva las marcas como fichas blancas de borde sólido de 1px. Nunca lleva pespunte.

### Hilo del proceso
Los pasos se unen con un hilo rojo discontinuo (vertical en móvil, horizontal desde 64em) que se cose a lo largo de 2.4s al entrar. Los números son botones de costura índigo; el paso opcional es un botón de lino con contorno discontinuo índigo.

### Movimiento: «se cose al llegar»
El avance del pespunte es una propiedad registrada (`@property --sew`, número de 0 a 4, valor inicial 4). Cada tramo (arriba, derecha, abajo, izquierda) se dibuja cuando su cuarto del recorrido se completa, en 1.5s con `cubic-bezier(0.45, 0.05, 0.25, 1)`; la pieza asienta su sombra en 700ms. Un IntersectionObserver marca la pieza al entrar (umbral 0.15, margen inferior −12%). Con `prefers-reduced-motion: reduce`, sin IntersectionObserver o sin JS, el pespunte queda completo y estático porque el valor inicial ya es 4.

### Foco y selección
Foco visible: contorno amarillo de 3px a 3px de distancia con anillo exterior de tinta índigo de 6px, esquina de 2px. Selección de texto amarilla con tinta. Cursor de escritura rojo.

## Do's and Don'ts

### Do:
- **Do** construir cada bloque nuevo como pieza de tela: textura tejida en `soft-light`, sombra de pieza y pespunte interior a 9px del canto.
- **Do** separar piezas vecinas solo con la holgura de 5px que deja ver el suelo índigo.
- **Do** repartir anchos desiguales en la retícula de 12 columnas para cada sección.
- **Do** cambiar el hilo a crudo sobre la pieza roja y sobre las fotos.
- **Do** coser las fotos como retazos con etiqueta cosida como pie.
- **Do** mantener el pespunte completo y estático con movimiento reducido.

### Don't:
- **Don't** redondear las esquinas de piezas, botones, pestañas o etiquetas.
- **Don't** coser el EPP suministrado: va prendido con etiqueta de cartón.
- **Don't** usar el amarillo como decoración ni como fondo de pieza.
- **Don't** unir telas con líneas continuas; las líneas sólidas pertenecen solo al cartón de la etiqueta de suministro y a sus fichas de marca.
- **Don't** poner texto de lectura directamente sobre las rayas de camisería.
- **Don't** componer filas de piezas idénticas ni un hero azul corporativo a sangre.
- **Don't** redibujar el logotipo; se usa el archivo oficial.
