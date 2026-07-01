# Sitio web HIDRA-NOVA Oleohidráulica

Este sitio está hecho con HTML, CSS y JavaScript simples: sin programas raros, sin instalar nada, sin depender de ningún servicio para funcionar. Cualquier persona con conocimientos básicos de HTML puede editarlo con un editor de texto (por ejemplo, [VS Code](https://code.visualstudio.com/), gratuito).

## Estructura de carpetas

```
sitio-web/
├── index.html              → El contenido de la página (textos, secciones, links)
├── css/
│   ├── reset.css           → No tocar. Normaliza el sitio entre navegadores.
│   ├── variables.css       → Colores y tipografías de la marca. Cambiá acá si querés otro color.
│   └── styles.css          → Estilos de cada sección del sitio.
├── js/
│   └── main.js             → Solo el menú del celular. No hay nada más de programación.
└── assets/
    └── img/
        ├── logo/           → El logo de la empresa.
        └── placeholders/   → Acá van las fotos reales cuando estén listas.
```

## Cómo cambiar un texto

Abrí `index.html` con un editor de texto, buscá (Ctrl+F) la frase que querés cambiar, y reemplazala. Por ejemplo, para cambiar el horario de atención, buscá "7:30 a 17:30" — aparece en dos lugares (arriba de todo y en la sección Contacto) y hay que cambiar los dos.

## Cómo reemplazar una foto placeholder por una real

En el HTML vas a encontrar bloques como este:

```html
<div class="photo-placeholder">Foto de producto<br>(próximamente)</div>
```

Hay que reemplazarlo por una imagen real, así:

```html
<img src="assets/img/placeholders/manguera-01.jpg" alt="Manguera hidráulica de alta presión">
```

Pasos:
1. Guardar la foto (en formato .jpg o .png, no muy pesada — idealmente menos de 500 KB) dentro de `assets/img/placeholders/`.
2. Reemplazar el `<div class="photo-placeholder">...</div>` correspondiente por la etiqueta `<img>` de arriba, con el nombre de archivo correcto.

## Cómo cambiar un color de la marca

Todos los colores están en `css/variables.css`. Por ejemplo, si el amarillo de la marca cambia, se edita una sola línea:

```css
--color-yellow: #FFD138;
```

Y se actualiza automáticamente en todo el sitio (botones, íconos, etc.).

## Contacto (teléfono / WhatsApp)

El número de teléfono y WhatsApp aparece varias veces en `index.html` en este formato: `5493564588029` (código de país + código de área + número, sin espacios ni el "+"). Si cambia el número, hay que reemplazarlo en todas las apariciones (Ctrl+F por el número viejo).

## Publicar el sitio (subirlo a internet)

Ver el documento separado **"Recomendación de dominio y hosting"** con los pasos para comprar el dominio `hidranova.com.ar` y subir estos archivos a un hosting.
