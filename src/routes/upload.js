const express = require('express');
const router = express.Router();
const cors = require('cors');
const sharp = require('sharp');
const multer = require('multer');

const produccionesSchema = require('../models/producciones');

//const producciones = require('../models/producciones');

//const { GridFsStorage } = require("multer-gridfs-storage");
//require("dotenv").config();

// const app = express();
// app.use(cors());
// const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')  // Imagen original
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop() // retorna la extensión del archivo cargado
        cb(null, `${Date.now()}.${ext}`)
    }
})

const upload = multer({ storage });

router.post('/uploads', upload.single('file'), async (req, res) => {
    //console.log('ingresa upload');
    const prod = produccionesSchema(req.body);
    prod.titulo = req.body.titulo;
    prod.sinopsis = req.body.sinopsis;
    prod.filename = req.file.filename;
    prod.path = '/uploads/' + req.file.filename;

    console.log(prod);
 
    await prod 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));    

    //res.send({ data: 'Imagen cargada.' })
})


// router.get('/uploads', async (req, res) => {
//     console.log('Get prod');
//     const producc = await produccionesSchema.find();
// })


// Traer todos los géneros
router.get('/uploads', (req, res) => {
    console.log('Get prod2');
    produccionesSchema
           .find()
           .then((data) => res.json(data))
           .catch((error) => res.json({ message: error }));
   
   });


module.exports = router;