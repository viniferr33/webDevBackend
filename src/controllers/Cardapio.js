const modelCardapio = require('../models/modelCardapio');
const model = new modelCardapio();

async function createItem(req, res) {
    try {
        await model.addItem(req.body);
        res.status(200).json({message: "Ok"});
    } catch (e) {
        res.status(501).json({
            message: "Internal Server Error",
            error: String(e)
        });
    }
}

async function updateItem(req, res) {
    try {
        const data = JSON.parse(JSON.stringify(req.body));
        delete data.id;
        await model.updateItem(req.body.id, data);
        res.status(200).json({message: "Ok"});
    } catch (e) {
        res.status(501).json({
            message: "Internal Server Error",
            error: String(e)
        });
    }
}

async function deleteItem(req, res) {
    try {
        await model.deleteItem(req.query.id);
        res.status(200).json({message: "Ok"});
    } catch (e) {
        res.status(501).json({
            message: "Internal Server Error",
            error: String(e)
        });
    }
}

async function getItem(req, res) {
    try {
        const data = await model.getItem(req.query.id);
        res.status(200).json(data);
    } catch (e) {
        res.status(501).json({
            message: "Internal Server Error",
            error: String(e)
        });
    }
}

async function listItens(req, res) {
    try {
        const data = await model.getAllItems();
        res.status(200).json(data);
    } catch (e) {
        res.status(501).json({
            message: "Internal Server Error",
            error: String(e)
        });
    }
}

module.exports = {
    createItem,
    updateItem,
    deleteItem,
    getItem,
    listItens
};