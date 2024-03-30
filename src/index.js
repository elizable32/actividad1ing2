const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const userRoutes = require('./routes/user');//ejemplo
const generoRoutes = require('./routes/genero');//ejemplo
const directorRoutes = require('./routes/director');//ejemplo
const uploadRoutes = require('./routes/upload');
const productoraRoutes = require('./routes/productora');
const tipoRoutes = require('./routes/tipo');

// Inicializaciones
const app = express(); //para cargar el framework express
const morgan = require('morgan');
const multer = require('multer');
require('./database');

// middleware
app.use(express.json());
app.use('/api', userRoutes); //ejemplo
app.use('/api', generoRoutes);
app.use('/api', directorRoutes);
app.use('/api', uploadRoutes);
app.use('/api', productoraRoutes);
app.use('/api', tipoRoutes);
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));// para que el servidor entienda datos simples ejemplo texto que llegue desde una página web
app.use(express.json());// para que el swervidor entienda json
app.use(multer({dest: path.join(__dirname, 'public/img/uploads')}).single('image'));


// settings
app.set('port', process.env.PORT || 3000); // este app se puede referenciar desde cualquier parte de la aplicación por eso no se pone como variable
app.set('json spaces', 2);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Variables globales


// routes
app.use('/api/movies',require('./routes/movies'));


// Archivos estáticos

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})