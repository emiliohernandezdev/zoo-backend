'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Zoo2017438', { useNewUrlParser: true })
    .then((err, res) => {
        console.log('Conectado a la base de datos');

        app.listen(port, () => {
            console.log('El servidor se está ejecutando');
        })
    })
    .catch(err => console.log(err))