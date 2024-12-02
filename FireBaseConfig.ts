// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcCwINLsWx07WFeCllRLtxDhNO-wVt1IE",
  authDomain: "react-native-auth-9cb0f.firebaseapp.com",
  projectId: "react-native-auth-9cb0f",
  storageBucket: "react-native-auth-9cb0f.firebasestorage.app",
  messagingSenderId: "907982832330",
  appId: "1:907982832330:web:7e8b1956f6710939e4ea33",
  measurementId: "G-7PBMNVCWTR"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);