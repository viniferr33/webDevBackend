const db = require('../db/database');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const filter = req.body.filter;
        const data = await db.getCollection('cardapio', filter);
        res.status(200).json(data);
    } catch (e) {
        res.status(400).json({
            'message': 'Bad Request',
            'error': String(e)
        });
    }
});

router.post('/addItem', async (req, res) => {
    try {
        const id = await db.add('cardapio', req.body);
        res.status(200).json({'docId': id});
    } catch (e) {
        res.status(400).json({
            'message': 'Bad Request',
            'error': String(e)
        });
    }
});

router.put('/updateItem', async (req, res) => {
    try {
        const op = await db.update(`cardapio/${req.body.id}`, req.body.field);
        res.status(200).json({'operation': op});
    } catch (e) {
        res.status(400).json({
            'message': 'Bad Request',
            'error': String(e)
        });
    }
});

router.delete('/deleteItem', async (req, res) => {
    try {
        const op = await db.delete(`cardapio/${req.body.id}`);
        res.status(200).json({'operation': op})
    } catch (e) {
        res.status(400).json({
            'message': 'Bad Request',
            'error': String(e)
        });
    }
});

module.exports = router;