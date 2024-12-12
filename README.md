# Asesor Personal de Compras ( integracion con API de MELI)

## Requisitos Previos
- Node version >= 16

## Para correr la App
- `npm install`
- `npm start`
Podes usar yarn si preferis

### Docker
`docker-compose up`

Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

## Para correr tests de integración
- Agregar el archivo cypress.env.json con valores reales para las keys en cypress.env.template
- `npm run cy:open`
- Seleccionar e2e.
- Seleccionar browser.
- Seleccionar spec.
