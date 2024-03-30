const express = require('express');
const generoSchema = require('../models/generos');

const router = express.Router();

// Crear género
router.post('/generos', (req, res) => {

 console.log('ingresa género');

    const genero = generoSchema(req.body);
    genero 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

// Traer todos los géneros
router.get('/generos', (req, res) => {
    console.log('ingresa género');
    generoSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   });

// Traer un género por id
router.get('/generos/:id', (req, res) => {
    const { id } = req.params;
    generoSchema
           .findById(id)
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }); 

   // Modificar un género
router.put('/generos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, estado, descripcion } = req.body;
    generoSchema
           .updateOne({ _id: id }, { $set: {nombre, estado, descripcion} })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   }); 

   // Borrar un género
   router.delete('/generos/:id', (req, res) => {
    const { id } = req.params;
    generoSchema
           .deleteOne({ _id: id })
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   });    

module.exports = router;