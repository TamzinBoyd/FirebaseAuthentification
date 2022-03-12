// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAktAfaeUcgl9dhSODxLI8IEeSN0uA6cQ0",
  authDomain: "authorisationapp-99f66.firebaseapp.com",
  projectId: "authorisationapp-99f66",
  storageBucket: "authorisationapp-99f66.appspot.com",
  messagingSenderId: "67789272939",
  appId: "1:67789272939:web:de59b6d9e3b293fbbdfe2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
