// Importaciones
const express = require("express");
const morgan = require("morgan");

const sequelize = require("./config/bd_postgre");

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

// Conexión a PostgreSQL
sequelize.authenticate()
  .then(() => {
    console.log("Conexión a PostgreSQL exitosa");
  })
  .catch((error) => {
    console.error("Error de conexión:", error);
  });

// Sincronizar modelos
sequelize.sync()
  .then(() => {
    console.log("Modelos sincronizados");
  });

// Servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});