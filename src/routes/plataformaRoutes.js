const express = require("express");
const router = express.Router(); 
const videojuegoSchema = require("../models/videojuego");
const plataformaSchema = require("../models/plataforma");

//plataformas
router.post("/plataformas",async (req, res) =>{
    const plataforma = plataformaSchema(req.body);
    plataforma
        .save().then((data)=> {
            res.json (data)
        }).catch((error)=> res.send(error));
});

//Modificar los datos de una plataforma para añadir un videojuego  
router.put("/videojuego/:id",async(req,res)=> {
    const { id } = req.params;
    const videojuego = videojuegoSchema(req.body);
    var idVideojuego = null;

    const videojuegoConsulta = await videojuegoSchema.findOne({ codigo: req.body.codigo });
    if (!videojuegoConsulta){
        await videojuego.save().then((dataVideojuego) => {  
            idVideojuego = dataVideojuego._id;
        });
    } else {
        idVideojuego = videojuegoConsulta._id;
    }

    videojuegoSchema
        .updateOne({_id: id}, {
            $addToSet: { videojuegos: idVideojuego}
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});
module.exports = router;