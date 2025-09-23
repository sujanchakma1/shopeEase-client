// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4HNekFbvG4GBmdl51arslX_ATbFHTDjA",
  authDomain: "shope-ease-8d0cb.firebaseapp.com",
  projectId: "shope-ease-8d0cb",
  storageBucket: "shope-ease-8d0cb.firebasestorage.app",
  messagingSenderId: "937583768883",
  appId: "1:937583768883:web:c50e605e9e14b8d44d7a46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
