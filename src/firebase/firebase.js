import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDTL_knHUO93IEYsRBURPqM4R7XPUxuUEY",
  authDomain: "ecommerce-527bf.firebaseapp.com",
  projectId: "ecommerce-527bf",
  storageBucket: "ecommerce-527bf.firebasestorage.app",
  messagingSenderId: "224178638293",
  appId: "1:224178638293:web:f521b94ca1c7fefa16415c",
  measurementId: "G-DE9HLZD9F2"
};
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { db, auth, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup };