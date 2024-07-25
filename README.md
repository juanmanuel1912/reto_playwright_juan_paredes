# Proyecto de Automatización con Playwright y Cucumber

## Descripción

Este proyecto está diseñado para realizar pruebas automatizadas utilizando Playwright para la automatización de navegadores y Cucumber para la gestión de escenarios de pruebas basadas en BDD (Behavior-Driven Development).

## Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [Git](https://git-scm.com/)

## Instalación

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/juanmanuel1912/reto_playwright_juan_paredes.git

2.  Navega al directorio del proyecto:
cd reto_playwright_juan_paredes

3. Instala las dependencias:
npm install

Configuración
Configura Playwright:
Si es la primera vez que ejecutas el proyecto, asegúrate de que Playwright instale los navegadores necesarios ejecutando:

npx playwright install


Configura Cucumber:
Asegúrate de que tienes todos los paquetes necesarios y los archivos de configuración de Cucumber en su lugar.

Ejecución de Pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:

npx cucumber-js

Si quieres ejecutar pruebas específicas basadas en etiquetas, puedes usar:

npx cucumber-js --tags "@etiqueta"

Donde @etiqueta debe ser reemplazado por la etiqueta que quieras usar (por ejemplo, @success o @failure).

Visualización de Resultados
Para generar un reporte visual utilizando Allure:

1. Instala Allure Commandline:

Si no tienes Allure Commandline instalado, instálalo globalmente:

npm install -g allure-commandline

2. Ejecuta las pruebas y genera el reporte de Allure:

Ejecuta tus pruebas normalmente, luego genera el reporte con:
allure generate ./allure-results --clean -o ./allure-report

Y para ver el reporte generado:
allure open ./allure-report

Estructura del Proyecto
features/: Contiene los archivos .feature de Cucumber.
features/step_definitions/: Contiene los archivos de definición de pasos para Cucumber.
playwright.config.js: Configuración de Playwright.
package.json: Archivo de configuración de npm y dependencias del proyecto.
