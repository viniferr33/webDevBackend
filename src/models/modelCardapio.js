const Firestore = require('../db/database');

class modelCardapio {
    constructor() {
        this.db = new Firestore();
    }

    async getItem(id) {
        const data = await this.db.getDoc(`cardapio/${id}`);
        return data;
    }

    async getAllItems() {
        const data = await this.db.getCollection('cardapio');
        return data;
    }

    async addItem(obj) {
        if(!this.validateSchema(obj))
            throw new Error('Object does not match the Schema!');

        await this.db.createDoc('cardapio', obj);
    }

    async updateItem(id, obj) {
        if(!this.validateSchema(obj))
            throw new Error('Object does not match the Schema!');

        await this.db.updateDoc(`cardapio/${id}`, obj);
    }

    async deleteItem(id) {
        await this.db.deleteDoc(`cardapio/${id}`);
    }

    validateSchema(obj) {
        const fields = [
            'Nome',
            'Desc',
            'Preço',
            'Img',
            'Tipo'
        ].sort();

        const objFields = Object.keys(obj).sort();

        return JSON.stringify(fields) === JSON.stringify(objFields);
    }
}

module.exports = modelCardapio;