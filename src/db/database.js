const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp({
    credential: applicationDefault()
});

class Firestore {
    constructor() {
        this.db = getFirestore();
    }

    async add(path, doc) {
        const operation = await this.db.collection(path).add(doc);
        return operation.id;
    }

    async update(path, doc) {
        const operation = await this.db.doc(path).update(doc);
        return operation;
    }

    async getCollection(path, query) {
        const docRef = this.db.collection(path);
        let snap;

        if(query) {
            snap = await docRef.where(query.field, query.op, query.value).get();
        } else {
            snap = await docRef.get();
        }
        const result = {};
        snap.forEach(doc => {
            result[doc.id] = doc.data();
        });

        return result;
    }

    async getDoc(path) {
        const docRef = this.db.doc(path);
        const snap = await docRef.get();
        return snap.data();
    }

    async delete(path) {
        const docRef = this.db.doc(path);
        const operation = await docRef.delete();
        return operation;
    }
}

module.exports = new Firestore();