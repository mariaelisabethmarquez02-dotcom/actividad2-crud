# API REST CRUD - Tasks

## Descripción
API RESTful desarrollada con Node.js, Express, Sequelize y PostgreSQL utilizando Docker.

## Tecnologías
- Node.js
- Express
- Sequelize
- PostgreSQL
- Docker

## Instalación

npm install

## Variables de entorno

PORT=3000
BD_HOST=postgreSQL-server
BD_PORT=5432
BD_NAME=practica
BD_USER=postgres
BD_PASSWORD=123456

## Ejecución con Docker

docker compose up --build

## Endpoints

GET /tasks
GET /tasks/:id
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id

## Ejemplo POST

{
  "title": "Practicar Docker",
  "description": "Conectar PostgreSQL",
  "done": false,
  "priority": "alta",
  "category": "backend",
  "dueDate": "2026-05-20"
}

## Evidencias
Las capturas de pruebas se encuentran en la carpeta Evidencias/.

## Uso de IA
Se utilizó ChatGPT como apoyo