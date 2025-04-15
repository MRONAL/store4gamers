const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const videojuegoRoutes = require("./routes/videojuegosRoutes");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(parser.urlencoded({ extended: false })); // permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON

// Gestión de las rutas usando el middleware
app.use("/api", videojuegoRoutes);
app.use(express.json());

// Conexión a la base de datos
mongoose
    .connect(process.env.mongodb_uri)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

// Conexión al puerto
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
