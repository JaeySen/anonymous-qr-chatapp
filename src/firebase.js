import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCD5KjE-4cHRdl_jZi_CtPyrYd0wEnlyVg",
  authDomain: "anonymous-qr-chatapp.firebaseapp.com",
  projectId: "anonymous-qr-chatapp",
  storageBucket: "anonymous-qr-chatapp.appspot.com",
  messagingSenderId: "415194731838",
  appId: "1:415194731838:web:8810a57911d39db8f5486f"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
