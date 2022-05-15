const cardapio = require('./routes/cardapio');
const pedidos = require('./routes/pedidos');

const express = require('express');
const server = express();

server.use(express.json());

server.use('/cardapio', cardapio);
server.use('/pedidos', pedidos);

server.get('/', (req, res) => {
    res.status(200).json({'Message': 'Ok'});
});

module.exports = server;