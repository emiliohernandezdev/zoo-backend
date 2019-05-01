'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EncargadoSchema = Schema({
    nombre: String,
    cargo: String,
    celular: String,
    animales: Array,
    foto: String,
    rol: String
})

module.exports = mongoose.model('Encargado', EncargadoSchema);