// Importaciones
const express = require("express");
const morgan = require("morgan");

const indexRoutes = require("./routes/indexRoutes");
const healthRoutes = require("./routes/healthRoutes");
const tasksRoutes = require("./routes/tasksRoutes");

const { notFound } = require("./middlewares/notFound");
const { errorHandler } = require("./middlewares/errorHandler");

const { PORT } = require("./config/env");

const app = express();

// Middlewares
app.use(express.json());

app.use(morgan("dev"));

// Rutas
app.use("/", indexRoutes);

app.use("/", healthRoutes);

app.use("/tasks", tasksRoutes);

// Manejo de errores
app.use(notFound);

app.use(errorHandler);

// Servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});