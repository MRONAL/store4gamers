const express = require('express');
const router = express.Router();
const Videojuego = require('../models/videojuego'); // asegúrate de tener este modelo creado

// Crear un videojuego
router.post('/videojuegos', async (req, res) => {
    try {
        const nuevoVideojuego = new Videojuego(req.body);
        await nuevoVideojuego.save();
        res.status(201).json(nuevoVideojuego);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los videojuegos
router.get('/videojuegos', async (req, res) => {
    try {
        const videojuegos = await Videojuego.find();
        res.json(videojuegos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
