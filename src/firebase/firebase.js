import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc,setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
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

export const createUserProfileDocument = async (userAuth, additionaData) => {
  if(!userAuth) return;

  const uid = userAuth.uid;
  const userRef = doc(db, "users", uid);
  const docSnap = await getDoc(userRef);
  if(!docSnap.exists()){
    const {displayName , email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        uid: uid, // Always include UID
        displayName: displayName || '', // Example fields. Customize as needed
        email: email || '',
        createdAt: createdAt || '',
        ...additionaData
    })
    }catch (error){
      console.log('error creating user', error.message);
    }
    
  }
  return userRef;
}
// Initialize Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { db, auth, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup };