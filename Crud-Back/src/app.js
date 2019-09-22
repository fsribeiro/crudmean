'use strict'

const express = require('express');
const bodyPatser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb://localhost:27017/testapi');

//Carrega os models
const Pessoa = require('./models/pessoa');

//Carrega karlhada de rotas
const indexRoute = require('./routes/index-route');
const pessoaRoute = require('./routes/pessoa-route');

app.use(bodyPatser.json());
app.use(bodyPatser.urlencoded({extended: false}));





app.use('/', indexRoute);
app.use('/pessoas', pessoaRoute);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


module.exports = app;