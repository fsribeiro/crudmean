'use strict';

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');



exports.get = (req, res, next) => {
    Pessoa
        .find({}, '_id nome sobrenome')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    Pessoa
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
         }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    console.log(req)
    var pessoa = new Pessoa(req.body);
    pessoa
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Pessoa cadastrada com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar pessoa',
                data: e
            });
        });
};

exports.put = (req, res, next) => {
    console.log(req)
    Pessoa
        .findByIdAndUpdate(req.body._id,{
            $set: {
                nome: req.body.nome,
                sobrenome: req.body.sobrenome
            }
         }).then(x => {
             res.status(200).send({
                 message: 'Cadastro Atualizado com sucesso!'
             });
         }).catch(e =>{
             res.status(400).send({
                 message: 'Falha ao atualizar cadastro',
                 data: e
             });
         });
};
       
exports.delete = (req, res, next) => {
    console.log('testepost')
    console.log(req)
    Pessoa
        .findOneAndRemove(req.body.id)
        .then(x => {
             res.status(200).send({
                 message: 'Contato removido com sucesso!'
             });
         }).catch(e =>{
             res.status(400).send({
                 message: 'Falha ao remover contato',
                 data: e
             });
         });
};
