import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqmNyGAsZreN_kY5TeKJ2mX-dx7jDiUHo",
    authDomain: "instagram-clone-1f77a.firebaseapp.com",
    databaseURL: "https://instagram-clone-1f77a.firebaseio.com",
    projectId: "instagram-clone-1f77a",
    storageBucket: "instagram-clone-1f77a.appspot.com",
    messagingSenderId: "843098634959",
    appId: "1:843098634959:web:80b5f59245f6f091f295ba",
    measurementId: "G-HH7B3FGNNK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };