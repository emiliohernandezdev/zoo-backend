'use strict'

var Encargado = require('../models/encargado');

function getEncargados(req, res) {
    Encargado.find({}, (err, encargados) => {
        if (err) {
            res.status(500).send({ message: 'Error al traer los datos' });
        } else {
            res.status(200).send({ encargados });
        }
    })
}

function addEncargado(req, res) {
    var encargado = new Encargado();
    var params = req.body;

    if (params.nombre && params.cargo && params.celular && params.animales && params.foto) {
        encargado.nombre = params.nombre;
        encargado.cargo = params.cargo;
        encargado.celular = params.celular;
        encargado.animales = [];
        encargado.foto = params.foto;
        encargado.rol = params.rol;

        encargado.save((err, encargadoSave) => {
            if (err) {
                res.status(500).send({ message: 'Encargado no guardado' });
            } else {
                res.status(200).send({ encargadoSave });
            }
        })
    } else {
        res.status(500).send({ message: 'Ingrese los datos solicitados' });
    }

}

module.exports = {
    getEncargados,
    addEncargado
}