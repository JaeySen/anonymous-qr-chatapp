import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDMPhnfT_uLuUtdg56Al1oxNwQWGm2aZY8",
  authDomain: "firechat-6fabe.firebaseapp.com",
  projectId: "firechat-6fabe",
  storageBucket: "firechat-6fabe.appspot.com",
  messagingSenderId: "416935092085",
  appId: "1:416935092085:web:88e67b015806b03ff17d3c",
  measurementId: "G-BR2F78ESC1",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
