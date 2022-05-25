const modelPedido = require('../models/modelPedido');
const model = new modelPedido();

async function createPedido(req, res) {
    try {
        await model.addPedido(req.body);
        res.status(200).json({message: "Ok"});
    } catch (e) {
        res.status(501).json({
            message: "Internal Server Error",
            error: String(e)
        });
    }
}

async function updatePedido(req, res) {
    try {
        const data = JSON.parse(JSON.stringify(req.body));
        delete data.id;
        await model.updatePedido(req.body.id, data);
        res.status(200).json({message: "Ok"});
    } catch (e) {
        res.status(501).json({
            message: "Internal Server Error",
            error: String(e)
        });
    }
}

async function deletePedido(req, res) {
    try {
        await model.deletePedido(req.query.id);
        res.status(200).json({message: "Ok"});
    } catch (e) {
        res.status(501).json({
            message: "Internal Server Error",
            error: String(e)
        });
    }
}

async function getPedido(req, res) {
    try {
        const data = await model.getPedido(req.query.id);
        res.status(200).json(data);
    } catch (e) {
        res.status(501).json({
            message: "Internal Server Error",
            error: String(e)
        });
    }
}

async function listPedidos(req, res) {
    try {
        const data = await model.getAllPedidos();
        res.status(200).json(data);
    } catch (e) {
        res.status(501).json({
            message: "Internal Server Error",
            error: String(e)
        });
    }
}

module.exports = {
    createPedido,
    updatePedido,
    deletePedido,
    getPedido,
    listPedidos
};