const mongoose = require('mongoose');

const videojuegoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    genero: String,
    plataforma: String,
    precio: Number
});

module.exports = mongoose.model('Videojuego', videojuegoSchema);
