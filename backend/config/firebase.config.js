const admin = require('firebase-admin');
const account = require('../config/firebase.account.json');
// Initialize our project application
// console.log("account", account);
admin.initializeApp({
    credential: admin.credential.cert(account),
    databaseURL: "https://youtoken-fbc50.firebaseio.com",
    storageBucket: "youtoken-fbc50.appspot.com"
});
// const adminAuth = admin.auth();
// Set up database connection
const firestoreDb = admin.firestore();
// const bucket = admin.storage().bucket();
firestoreDb.settings({ timestampsInSnapshots: true });

module.exports = {
    // adminAuth,
    adminDb: firestoreDb,
    // adminBucket: bucket
};