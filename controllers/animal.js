'use strict'

var Animal = require('../models/animal');

function getAnimales(req, res) {
    Animal.find({}, (err, animales) => {
        if (err) {
            res.status(500).send({ message: 'Error al traer los datos' });
        } else {
            res.status(200).send({ animales });
        }
    })
}

function addAnimal(req, res) {
    var animal = new Animal();
    var params = req.body;

    if (params.nombre && params.tipo && params.edad && params.nombre_cientifico && params.orden && params.foto && params.info) {
        animal.nombre = params.nombre;
        animal.tipo = params.tipo;
        animal.edad = params.edad;
        animal.orden = params.orden;
        animal.nombre_cientifico = params.nombre_cientifico;
        animal.foto = params.foto;
        animal.info = params.info;

        animal.save((err, animalSave) => {
            if (err) {
                res.status(500).send({ message: 'Animal no guardado' });
            } else {
                res.status(200).send({ animalSave });
            }
        })
    } else {
        res.status(500).send({ message: 'Ingrese todos los campos requeridos' });
    }
}

module.exports = {
    getAnimales,
    addAnimal
}