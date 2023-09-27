// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAL5t1vF9bT1mEGdsNfjbYKOUX2vXQjNxw",
  authDomain: "fir-login-auth-bea6c.firebaseapp.com",
  projectId: "fir-login-auth-bea6c",
  storageBucket: "fir-login-auth-bea6c.appspot.com",
  messagingSenderId: "553155395500",
  appId: "1:553155395500:web:368b96be8780e5f4450409",
  measurementId: "G-3BWHBX3T4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app, auth};
