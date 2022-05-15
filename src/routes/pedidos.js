const db = require('../db/database');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const filter = req.body.filter;
        const data = await db.getCollection('pedidos', filter);
        res.status(200).json(data);
    } catch (e) {
        res.status(400).json({
            'message': 'Bad Request',
            'error': String(e)
        });
    }
});

router.post('/addPedido', async (req, res) => {
    try {
        const id = await db.add('pedidos', req.body);
        res.status(200).json({'docId': id});
    } catch (e) {
        res.status(400).json({
            'message': 'Bad Request',
            'error': String(e)
        });
    }
});

router.put('/updatePedido', async (req, res) => {
    try {
        const op = await db.update(`pedido/${req.body.id}`, req.body.field);
        res.status(200).json({'operation': op});
    } catch (e) {
        res.status(400).json({
            'message': 'Bad Request',
            'error': String(e)
        });
    }
});

router.delete('/deletePedido', async (req, res) => {
    try {
        const op = await db.delete(`pedido/${req.body.id}`);
        res.status(200).json({'operation': op})
    } catch (e) {
        res.status(400).json({
            'message': 'Bad Request',
            'error': String(e)
        });
    }
});

module.exports = router;