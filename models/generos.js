const mongoose = require('mongoose');

const generoSchema = mongoose.Schema ({
    nombre: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true
    },

    fecha_creacion: {
        type: Date,
        required: false
    },

    fecha_actualizacion: {
        type: Date,
        required: false
    },    

    descripcion: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('Genero', generoSchema);
