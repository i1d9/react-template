import firebase from "firebase";

/**
 * Initialize firebase using your credentials
 */
const config = {
    apiKey: "YOUR API KEY",
    authDomain: "AUTH DOMAIN",
    databaseURL: "DATABASE URL",
    projectId: "PROJECT ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "MESSAGING ID",
    appId: "APP_ID",
    measurementId: "MEASUREMENT_ID"
};


const firebaseApp = firebase.initializeApp(config);
const messaging = firebaseApp.messaging();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const firestore = firebaseApp.firestore();

export {auth,messaging,storage,firestore};