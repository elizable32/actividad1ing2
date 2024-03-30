const express = require('express');
const directorSchema = require('../models/directores');

const router = express.Router();

// Crear directores
router.post('/directores', (req, res) => {

 console.log('ingresa directores');

    const director = directorSchema(req.body);
    director 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

module.exports = router;