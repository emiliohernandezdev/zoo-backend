'use strict'

var express = require('express');
var AnimalController = require('../controllers/animal');
var EncargadoController = require('../controllers/encargado');

var api = express.Router();

api.get('/get-animals', AnimalController.getAnimales);
api.post('/add-animal', AnimalController.addAnimal);
api.get('/get-attendants', EncargadoController.getEncargados);
api.post('/add-attendant', EncargadoController.addEncargado);

module.exports = api;