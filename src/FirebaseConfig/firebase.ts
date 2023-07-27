// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwVNlLetm2dVtS3M2kkQlr2sAqM5thTk0",
  authDomain: "cuidadusapp.firebaseapp.com",
  projectId: "cuidadusapp",
  storageBucket: "cuidadusapp.appspot.com",
  messagingSenderId: "350261459925",
  appId: "1:350261459925:web:536fb3e2599a7c45621b5c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbStorage = getFirestore(app);
