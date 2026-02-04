<img src="public/favicon.svg" alt="Vista previa de Entradas Vivas" width="120" />
# Entradas Vivas

Plataforma web para consultar un catálogo de **entradas conmemorativas** de eventos (conciertos, festivales, etc.) y gestionar solicitudes para crear diseños personalizados que recuerden la experiencia de haber asistido a ese acontecimiento. 
No son entradas válidas para el acceso al evento, sino piezas de diseño a medida encargadas por el usuario.

## Características principales

- Catálogo navegable de entradas conmemorativas, organizado por tipo de evento y fecha.
- Fichas de producto con información del evento, variantes de diseño y opciones de personalización (nombre, fecha, asiento simbólico, mensajes, etc.).
- Flujo de solicitud para que el usuario encargue una entrada personalizada a partir de un diseño base.
- Arquitectura pensada para contenidos gestionables por personas no técnicas mediante un gestor visual de bloques.

## Tecnologías utilizadas

### Frontend

- Astro.js como framework HTML-first para generar un sitio estático rápido, ideal para catálogos y landings de producto.
- JavaScript para la lógica de interacción en el cliente (filtros, formularios de solicitud, pequeños componentes interactivos). 

### Estilos y diseño

- Sass (SCSS) como preprocesador CSS para estructurar estilos en parciales, variables y mixins reutilizables.
- Sistema de diseño centrado en las piezas gráficas de tipo ticket, con especial cuidado en tipografías, jerarquía visual y ritmo espacial.

### Gestión de contenidos y despliegue

- Headless CMS (p.ej. Storyblok u otro similar) para gestionar páginas, secciones y componentes de catálogo mediante editor visual.
- Generación estática de páginas a partir de los datos del CMS en tiempo de build.
- Deploy en un proveedor de hosting estático con integración continua desde el repositorio. 

## Badges de tecnologías

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=ffffff)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=ffffff)

## Scripts básicos

- `npm install`: instala dependencias del proyecto.
- `npm run dev`: levanta el entorno de desarrollo en `localhost`.
- `npm run build`: genera la versión estática de producción.
- `npm run preview`: sirve la build de producción en local para revisión.
