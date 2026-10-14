# Olímpicas Sport LTDA · Sitio web institucional

Sitio estático de una sola página: HTML5 semántico, CSS3 y JavaScript puro. Sin frameworks, sin dependencias y sin paso de compilación.

## Ejecutar localmente

Cualquier servidor estático sirve. Desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
# o
npx serve .
```

Luego abre http://localhost:8000. También funciona abriendo `index.html` directamente en el navegador.

## Estructura

```
index.html            Página completa (secciones, metadatos SEO y Open Graph, sprite de íconos SVG)
css/styles.css        Estilos: tokens, piezas de tela (.patch), pespunte animado, secciones, responsive
js/main.js            Menú móvil, pestaña activa, animación «se cose al llegar», año del pie
assets/brand/         Logotipo oficial (horizontal y vertical) e íconos/favicons
assets/img/           Fotografías optimizadas en WebP, texturas de tela y la imagen para redes (og-olimpicas.jpg)
assets/fonts/         Barlow y Barlow Condensed (licencia SIL OFL, incluida en OFL.txt)
```

## Datos de contacto usados (tomados de olimpicassport.com)

Están escritos directamente en los enlaces de `index.html`. Para cambiarlos, busca y reemplaza el valor en ese archivo.

| Dato | Valor |
|---|---|
| WhatsApp / celular | +57 317 432 4284 → `https://wa.me/573174324284` |
| Celular 2 | +57 305 312 9782 |
| Correo | ventas1@olimpicassport.com |
| Dirección | Cra. 19 #52-98, Barrio Torcoroma, Barrancabermeja, Santander |
| Horario | L–V 8:30–12:00 y 2:00–6:00 p. m.; sábado 8:00 a. m.–12:30 p. m. |
| Facebook | https://www.facebook.com/OlimpicasSport |
| Instagram | https://www.instagram.com/olimpicassport |
| Política de privacidad | https://olimpicassport.com/privacy-policy/ |

La web no tiene formularios: todo contacto pasa por WhatsApp, teléfono o correo.

## Fotografías

- **Reales de la empresa:** equipo frente a la tienda (`equipo-olimpicas-*`) y bordadora del taller (`bordadora-taller-*`).
- **Ilustrativas (licencia Unsplash):** industrial, deportivo, escolar, hospitalario, prendas en percha y EPP. El pie de página lo indica. Conviene reemplazarlas por fotos reales de productos y trabajos de Olímpicas cuando estén disponibles, manteniendo el mismo nombre de archivo y los anchos de 640 y 1100 px en WebP.

## Despliegue

Sube la carpeta completa a cualquier hosting estático (cPanel, Netlify, Vercel, GitHub Pages). Las rutas de `og:url`, `og:image` y `canonical` apuntan a `https://olimpicassport.com/`. Ajústalas si el dominio final es otro.
