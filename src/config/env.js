// src/config/env.js

//Importa la libreria dontenv, que lee el archivo .env
const dotenv = require("dotenv");

// Ejecuta dotenv para cargar las varianles de .env en process.env
dotenv.config();

//Lee el puerto desde variables de enonor.

const PORT = process.env.PORT || 3000;

module.exports = { PORT };