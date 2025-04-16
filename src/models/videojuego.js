const mongoose = require('mongoose');

const videojuegoSchema = new mongoose.Schema({

    codigo: { 
        type: String, 
        required: true 
    },
    titulo: { 
        type: String, 
        required: true 
    },
    genero: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    desarrolladora: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Videojuego', videojuegoSchema);




