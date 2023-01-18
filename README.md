# Site Obras - Theme devel doc

> Theme CSS para Site Obras / Mecaris

## INSTALACIÓN Y EJECUCIÓN (tooling)

- Dentro de la carpeta del proyecto, ejecutar *npm install* para instalar todas las dependencias.
- Una vez instaladas todas las dependencias, es posible entrar en modo desarrollo ejecutando *npm run dev*, o buildear para producción ejecutando *npm run build*.
- Todo el CSS tooling se realiza con gulpjs y otras librerías de nodejs. El scripting y los tasks están definidos en *gulpfile.babel.js*. Estos tasks y procesos apuntan a:

  - tener un control absoluto sobre los estilos externos
  - facilitar la creación y edición de estilos en modo desarrollo utilizando una estructura modularizada
  - automatizar el compilado de todos los estilos sass / scss
  - aplicar diferentes procesos de optimización (concatenación, autoprefixes, minificación, purgado de definiciones css sin utilizar, etc.) al momento de buildear la hoja de estilos final que será utilizada en producción

- Si se desean agregar o modificar estilos, es necesario entrar en modo desarrollo ejecutando *npm run dev*. Una vez hechos todos los cambios y ajustes deseados, primero es necesario detener el modo desarrollo (Ctrol + C) si es que se está ejecutando dicho modo, y luego correr el modo producción ejecutando *npm run build* para buildear la hoja de estilos final para producción.

## CSS

Estructura de estilos:

- **Boostrap 5.2.3** de base, con un build custom a partir de los archivos fuente scss. Las customizaciones están definidas en *src/scss/bootstrap-custom.scss*. Más info en [Link](https://getbootstrap.com/docs/5.2/customize/sass/).
- **Estilos de las libs externas JS** utilizadas en el proyecto, en *src/scss/vendors*.
- **Theme con estilos custom para el proyecto**, definidos y modularizados en *src/scss/theme*. Todos estos partials se importan desde *src/scss/custom.scss*.
- Todos los estilos anteriores (Bootstrap, libs JS y theme custom styles) se importan y concatenan desde *./style.scss*.
- Finalmente se compila todo a *./style.css* (ejecutando *npm run build*).

## JS

Librerías JS externas utilizadas en el proyecto:

- **JQuery**.
- **SwiperJS**: slider para galería de fotos, [Link](https://swiperjs.com/).
- **Glightbox**: lightbox para imágenes de galería de fotos, [Link](https://biati-digital.github.io/glightbox/).
- **Bootstrap**: varios componentes utilizados en la UI del proyecto (accordions, modals, nav tabs, etc.), [Link](https://getbootstrap.com/).
- **Datatables**: tablas con controles avanzados, [Link](https://datatables.net/).
- **Highcharts**: gráficos de charts, [Link](https://www.highcharts.com/).

Escrito el 17/01/23. Última actualización: 17/01/23.
