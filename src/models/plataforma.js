const mongoose = require("mongoose"); 

const plataformaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    juegos:[{type: mongoose.Schema.Types.ObjectId, ref:'Videojuego'}]

});

module.exports = mongoose.model('Plataforma', plataformaSchema); 