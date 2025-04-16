const express = require('express');
const verifyToken = require('./validate_token');
const router = express.Router();
const videojuegoSchema = require('../models/videojuego'); 

// Crear un videojuego
router.post('/videojuegos', async (req, res) => {
    const videojuego = videojuegoSchema(req.body);
    videojuego
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los videojuegos
router.get('/videojuegos', async (req, res) => {
    videojuegoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un videojuego por su id
router.get("/videojuegos/:id",verifyToken, (req, res) => {
    const { id } = req.params;
    videojuegoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Modificar el nombre de un videojuego por el id
router.put("/videojuegos/:id",verifyToken, (req, res) => {
    const { id } = req.params;
    const { titulo, genero, precio, desarrolladora } = req.body;
    videojuegoSchema
        .updateOne({ _id: id }, {
            $set: { titulo, genero, precio, desarrolladora }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un videojuego
router.delete("/videojuegos/:id",verifyToken, (req, res) => {
    const { id } = req.params;
    videojuegoSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});
module.exports = router;
