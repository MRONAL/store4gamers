const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require("./routes/authentication");
const videojuegoRoutes = require("./routes/videojuegosRoutes");
const plataformaRoutes = require("./routes/videojuegosRoutes"); 
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); 
app.use(parser.json()); 

// Gestión de las rutas usando el middleware
app.use("/api", videojuegoRoutes);
app.use("/api", userRoutes);
app.use("/api", plataformaRoutes);
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
