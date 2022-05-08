import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC0NqucCiH-c4W-0uyEsTu_OXIY8c6IWnA",
    authDomain: "learn-vue3-a9268.firebaseapp.com",
    projectId: "learn-vue3-a9268",
    storageBucket: "learn-vue3-a9268.appspot.com",
    messagingSenderId: "36957489749",
    appId: "1:36957489749:web:070c50259c929a3a8d62dc",
    measurementId: "G-5FNXRNYM6G"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
