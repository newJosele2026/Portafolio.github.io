# Resumen de Actividades y Entregables Técnicos

Este documento recopila de forma estructurada todas las soluciones técnicas, análisis de seguridad, desarrollos de interfaz y entregables de diseño gráfico y branding elaborados durante la sesión de trabajo.

---

## 1. Backend & Arquitectura Spring

### 1.1 Spring Framework Clásico (3.2 Legacy) vs. Spring Boot 3.2
* **Arquetipos en Maven:** Se aclaró la diferencia entre el arquetipo clásico `maven-archetype-webapp` (usado para proyectos tradicionales empaquetados en `.war` y desplegados en Tomcat externo con `web.xml`) y el flujo moderno de **Spring Starter Project** (Spring Initializr) requerido para Spring Boot 3.2+ con Java 17+.
* **Prueba Técnica de Biblioteca (3 Tablas: Autor, Libro, Préstamo):**
  * Estimación de tiempo: **2.5 a 3 horas** para una prueba para llevar a casa (*Take-home*) con buenas prácticas (entidades, repositorios, DTOs, controladores y validaciones).
  * Viabilidad en 1 hora: Posible únicamente bajo un enfoque de **Live Coding / MVP**, utilizando H2 en memoria, Lombok al 100%, exponiendo entidades directamente y evitando bucles de serialización recursiva JSON con `@JsonIgnore`.

---

## 2. Frontend Angular & Server-Side Rendering (SSR)

### 2.1 Deprecación de XHR en `@angular/platform-server`
* **Causa:** Angular deprecó el soporte de `XMLHttpRequest` (polyfill `xhr2`) en el servidor por riesgos de seguridad (fuga de cabeceras `Authorization` en redirecciones cross-origin) y rendimiento.
* **Solución aplicada:** Configuración del backend nativo de peticiones mediante `provideHttpClient(withFetch())` en `app.config.ts`.

### 2.2 Diagnóstico de Iconos en Angular Material
* **Problema con `patreon.svg`:** No se mostraba debido al uso de la sintaxis de texto de ligadura (`<mat-icon>patreonIcon</mat-icon>`) en lugar del enlace SVG (`<mat-icon svgIcon="patreon"></mat-icon>`), sumado a una discrepancia entre el identificador registrado en `contacto.ts` y el template HTML.
* **Uso de imágenes `.png` con Angular Material:** Se documentaron las dos alternativas recomendadas:
  1. Envolver la etiqueta `<img>` dentro de `<mat-icon class="png-icon-container">`.
  2. Aplicar estilos CSS con `background-image: url(...)` y `background-size: contain` sobre el componente `<mat-icon>`.

---

## 3. Control de Versiones & Seguridad

### 3.1 Ciclo de Vida del Hook Git `post-commit`
* **Disparo:** Se activa inmediatamente tras completarse con éxito la creación del objeto commit y la actualización de `HEAD`.
* **Propósito:** No puede abortar el commit; se utiliza para auditoría, notificaciones o webhooks.
* **Visualización de los `echo`:** Se muestran en la consola/terminal estándar (`stdout`), en el panel *Output > Git* de VS Code o en la *Git Console* de Spring Tool Suite / Eclipse.

### 3.2 Auditoría de Seguridad de Imágenes en el Proyecto
* **Escaneo en el workspace:** Se verificó la inexistencia de archivos de imagen en el proyecto backend actual (`Back\4.15.3 workspace`), descartando vectores de ataque presentes.
* **Matriz de riesgos prevenidos para futuros activos:**
  * **SVGs:** Prevención de ataques **XSS** (scripts o eventos `onload`/`onerror` embebidos) e inyecciones **XXE** en parsers XML.
  * **PNGs:** Validación estricta de *Magic Bytes* (`89 50 4E 47 0D 0A 1A 0A`) y prevención de bombas de descompresión (*Pixel Flood*).

---

## 4. Diseño de Identidad Visual: ixoraSoft

### 4.1 Isotipo Vectorial (Flor de Ixora)
* **Base conceptual:** Inspirado en la *Ixora coccinea*, planta tropical cuya floración presenta una corola tetrámera simétrica de **4 pétalos ovales** dispuestos en cruz a 90°.
* **Construcción geométrica:**
  * Capa principal: 4 pétalos maestros con degradado carmesí profundo (`#FF2E55` a `#881337`) y nervadura de brillo interior.
  * Capa secundaria: 4 pétalos rotados a 45° a escala 0.82 para evocar la densidad de la inflorescencia.
  * Ojo/pistilo central: Núcleo luminoso cálido con 4 anteras microscópicas.
  * Tipografía: `ixora` en gris pizarra corporativo (`#0F172A`, peso medium) y `Soft` en rojo acento (`#E11D48`, peso extrabold).

---

## 5. Criterios y Correcciones de Diseño UX

1. **Escalabilidad y Prueba del Favicon:**
   * Las sombras y detalles microscópicos se vuelven borrosos a 16x16 px. Se requiere un isotipo plano de 4 pétalos sin sombras para micro-resoluciones.
2. **Composición Horizontal (*Lockup Horizontal*):**
   * En barras de navegación web con altura de 56-64 px, el isotipo debe situarse a la izquierda (alto ~36 px) con la palabra `ixoraSoft` a su derecha en línea horizontal.
3. **Accesibilidad y Contraste (WCAG 2.1):**
   * Sustitución del rojo puro (`#FF0000`) por un carmesí calibrado (`#E11D48`) que supera el ratio de contraste 4.5:1 exigido para textos y elementos interactivos.
4. **Soporte para Modo Oscuro (*Dark Mode*):**
   * Adaptación de la tipografía `ixora` a blanco perla (`#F8FAFC`) y ajuste de luminosidad en los pétalos para fondos oscuros.
5. **Semántica Tecnológica:**
   * Tratamiento estrictamente vectorial, matemático y simétrico para evitar asociaciones con floristerías o cosmética y afianzar la identidad en desarrollo de software.

---

## 6. Estrategia de Marca & Protección Legal

* **Nombres comerciales únicos propuestos:**
  * **Dexiora** (*Dexterity + Ixora*) — Ágil, moderno y premium.
  * **Calyxio** (*Calyx + I/O*) — Robusto y arquitectónico.
  * **Ixorium** (*Ixora + terminación latina*) — Científico y de laboratorio (R&D).
  * **Veltrion** (*Velocity + Tron*) — Enfoque de alta velocidad e infraestructura cloud.
* **Hoja de ruta para protección legal en 4 capas:**
  1. *Blindaje digital:* Registro inmediato de dominios (`.com`, `.dev`) y reserva de usuarios en GitHub y LinkedIn.
  2. *Registro de Marca:* Registro de **Marca Mixta** en la **Clase 42** (Servicios de software y tecnología) y **Clase 9** (Software descargable/Apps).
  3. *Sociedad Comercial:* Constitución de empresa (S.A.S. o LLC).
  4. *Protección Intelectual:* Registro de soporte lógico de código fuente y firma de acuerdos de confidencialidad y cesión de derechos patrimoniales (NDA) con colaboradores.

---

## 7. Archivos Entregables Generados

| Archivo | Formato | Ubicación | Descripción |
| :--- | :--- | :--- | :--- |
| **`ixorasoft-Cambiar-futuro.svg`** | SVG Vectorial | [ixorasoft-Cambiar-futuro.svg](file:///C:/Proyectos%20personales/Ejercicio%20y%20proyectos%20terminados/Proyectos%20terminado/Portafolio/portafolio/public/assets/svg/ixorasoft-Cambiar-futuro.svg) | Logotipo completo con filtros SVG 1.1 totalmente compatibles con Inkscape. |
| **`ixorasoft-Cambiar-futuro.ico`** | Icono Multipágina | [ixorasoft-Cambiar-futuro.ico](file:///C:/Proyectos%20personales/Ejercicio%20y%20proyectos%20terminados/Proyectos%20terminado/Portafolio/portafolio/public/assets/svg/ixorasoft-Cambiar-futuro.ico) | Icono generado mediante **Inkscape 1.4** que incluye resoluciones de **16x16, 32x32, 48x48, 64x64, 128x128 y 256x256 px**. |
| **`favicon-ixorasoft.ico`** | Favicon Web | [favicon-ixorasoft.ico](file:///C:/Proyectos%20personales/Ejercicio%20y%20proyectos%20terminados/Proyectos%20terminado/Portafolio/portafolio/public/favicon-ixorasoft.ico) | Copia directa en la raíz pública lista para ser utilizada como favicon en el portafolio. |
