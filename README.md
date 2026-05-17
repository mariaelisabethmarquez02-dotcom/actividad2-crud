# API REST CRUD - Tasks

Proyecto desarrollado con Node.js y Express.

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

o

```bash
npm run dev
```

## Variables de entorno

Crear archivo `.env`

Ejemplo:

```env
PORT=3000
```

## Endpoints

### Obtener tareas
GET /tasks

### Obtener tarea por ID
GET /tasks/:id

### Crear tarea
POST /tasks

### Actualizar tarea
PUT /tasks/:id

### Eliminar tarea
DELETE /tasks/:id

## Ejemplo JSON

```json
{
  "title": "Estudiar Node",
  "description": "Practicar CRUD",
  "done": false,
  "priority": "media"
}
```

## Evidencias

Las capturas de pruebas se encuentran en la carpeta `evidencias/`.
