const Firestore = require('../db/database');

class modelPedido {
    constructor() {
        this.db = new Firestore();
    }

    async getPedido(id) {
        const data = await this.db.getDoc(`pedidos/${id}`);
        return data;
    }

    async getAllPedidos() {
        const data = await this.db.getCollection('pedidos');
        return data;
    }

    async addPedido(obj) {
        if(!this.validateSchema(obj))
            throw new Error('Object does not match the Schema!');

        await this.db.createDoc('pedidos', obj);
    }

    async updatePedido(id, obj) {
        if(!this.validateSchema(obj))
            throw new Error('Object does not match the Schema!');

        await this.db.updateDoc(`pedidos/${id}`, obj);
    }

    async deletePedido(id) {
        await this.db.deleteDoc(`pedidos/${id}`);
    }

    validateSchema(obj) {
        const fields = [
            'Data',
            'Cliente',
            'PreçoTotal',
            'Itens',
            'Status'
        ].sort();

        const objFields = Object.keys(obj).sort();

        return JSON.stringify(fields) === JSON.stringify(objFields);
    }
}

module.exports = modelPedido;