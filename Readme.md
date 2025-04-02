# Proyecto Playwright OrangeHRM

Este proyecto utiliza **Playwright** y **TypeScript** para automatizar pruebas end-to-end (E2E) en la web de **OrangeHRM**. El objetivo es automatizar el proceso de creación de un nuevo personal (empleado).

## Descripción del Desafío
Para este reto, se propone investigar y utilizar Playwright, una herramienta de automatización para pruebas E2E. La misión es automatizar el proceso de creación de un nuevo empleado en OrangeHRM, verificando que el flujo de trabajo se ejecute correctamente.

## Características

- **js/cucumber.js**: Archivo de configuración principal para **Cucumber**, donde se definen los parámetros de ejecución de las pruebas (rutas de features, step-definitions, reportes, etc.).
- **src/features**: Contiene los archivos `.feature` en lenguaje Gherkin. Aquí se describen los escenarios de prueba de forma declarativa.
- **src/browsers**: Lógica específica para la configuración y gestión de navegadores (Chromium, Firefox, WebKit).
- **src/hooks**: Hooks de Cucumber para ejecutar acciones antes o después de cada escenario 
- **src/pages**: Implementación del **Page Object Model**. Aquí se encuentras los metodos y selectores.
- **src/step-definitions**: Implementación de los pasos definidos en los archivos `.feature`, utilizando Playwright para interactuar con la interfaz.

## Requisitos

- Node.js v18.17.1
- npm v9.6.7
- npx v9.6.7

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/krinitha/RepoOrangeHRM.git

2. Ingresa al directorio del proyecto:
   ```bash
   cd RepoOrangeHRM/

3. Instala las dependencias:
   ```bash
   npm ci 

4. Instala los navegadores soportados por Playwright
   ```bash
   npx playwright install 

## Ejecución de las Pruebas

El proyecto cuenta con comandos específicos para ejecutar distintos escenarios de prueba, utilizando etiquetas para filtrar los casos deseados. A continuación se muestran los comandos disponibles:

### Pruebas de Inicio de Sesión

Para ejecutar las pruebas relacionadas con el flujo de **inicio de sesión**, utiliza:

    npm run test-dev-login

### Pruebas de Creación de Empleado

Para ejecutar las pruebas relacionadas con el flujo de **Creacion de empleado**, utiliza:

    npm run test-dev-newemployer

