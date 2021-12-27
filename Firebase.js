// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
import {
  getFirestore,
  collection, 
  addDoc,
  doc,
  setDoc,
  query, 
  where,
  getDocs,
  onSnapshot,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // add ur project configuration,
  apiKey: "AIzaSyBVsYE5r-KmfLztlgZKv7YauX0IaAoo5-o",
  authDomain: "isearch-3a507.firebaseapp.com",
  projectId: "isearch-3a507",
  storageBucket: "isearch-3a507.appspot.com",
  messagingSenderId: "7934105666",
  appId: "1:7934105666:web:56758bdec452c7907d35db",
  measurementId: "G-97Q0DRKMGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export {app,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,
    signOut,sendEmailVerification,sendPasswordResetEmail,onAuthStateChanged,getFirestore, collection, 
    addDoc,db,setDoc,doc,query, where,getDocs,onSnapshot, updateDoc,deleteDoc };
