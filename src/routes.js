const routes = require('express').Router();

const cardapio = require('./controllers/Cardapio');
const pedidos = require('./controllers/Pedidos');

routes.post('/cardapio/createItem', cardapio.createItem);
routes.post('/cardapio/updateItem', cardapio.updateItem);
routes.delete('/cardapio/deleteItem', cardapio.deleteItem);
routes.get('/cardapio/getItem', cardapio.getItem);
routes.get('/cardapio', cardapio.listItens);

routes.post('/pedido/createPedido', pedidos.createPedido);
routes.post('/pedido/updatePedido', pedidos.updatePedido);
routes.delete('/pedido/deletePedido', pedidos.deletePedido);
routes.get('/pedido/getPedido', pedidos.getPedido);
routes.get('/pedido', pedidos.listPedidos);


module.exports = routes;