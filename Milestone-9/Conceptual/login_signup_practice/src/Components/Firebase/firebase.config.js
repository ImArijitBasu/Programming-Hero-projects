import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAZZH-sdRE8HUCnWn7WNQs2PhCViVgfWwk",
  authDomain: "login-signup-practice-b4946.firebaseapp.com",
  projectId: "login-signup-practice-b4946",
  storageBucket: "login-signup-practice-b4946.firebasestorage.app",
  messagingSenderId: "797765850740",
  appId: "1:797765850740:web:bea07667c731b58f93a321"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
