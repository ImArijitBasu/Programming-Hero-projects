// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYTfMAlu_pnIzVmuZTc6v1q7fDjs3zwZ4",
  authDomain: "register-login-auth-b844f.firebaseapp.com",
  projectId: "register-login-auth-b844f",
  storageBucket: "register-login-auth-b844f.firebasestorage.app",
  messagingSenderId: "622354714534",
  appId: "1:622354714534:web:f9d2a64aeb075e10820967",
  measurementId: "G-4DN98JCFWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;