import firebase from 'firebase';
import { firebaseConfig } from '../config/firebase';

let firebaseApp;
let database;

export const firebaseUtils = {
    initializeApp: () => {
        if (!firebaseApp) {
            firebaseApp = firebase.initializeApp(firebaseConfig);
            database = firebaseApp.database();
        }
    },

    getDatabase: () => database,

    getCurrentUser: () => firebase.auth().currentUser,
}
