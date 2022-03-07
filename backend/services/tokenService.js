const { adminDb } = require('../config/firebase.config');
const { config } = require('../config');

const create = async (token) => {
    try {
        const newDocument = await adminDb.collection('tokens').add(token);
        const snap = await newDocument.get();
        return {
            ...snap.data(),
            id: snap.id
        };
    }
    catch (error) {
        console.log("error", error);
    }
}

module.exports = {
    create
}