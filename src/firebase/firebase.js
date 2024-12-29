// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYKb6RULE8-zvSIw-wiePxAJ4IieZW5WY",
  authDomain: "travel-app-65010.firebaseapp.com",
  projectId: "travel-app-65010",
  storageBucket: "travel-app-65010.appspot.com",
  messagingSenderId: "1069840060185",
  appId: "1:1069840060185:web:add2e1da636a5645837f88",
  measurementId: "G-98DT6D67JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
