'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = Schema({
    nombre: String,
    tipo: String,
    edad: Number,
    nombre_cientifico: String,
    orden: String,
    info: String,
    foto: String
})

module.exports = mongoose.model('Animal', AnimalSchema)