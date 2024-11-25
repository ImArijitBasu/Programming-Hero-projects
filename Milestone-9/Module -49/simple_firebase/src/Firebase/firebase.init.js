
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCW6fwvkmd0tlT1ozOBKtL-h28BWximUZg",
  authDomain: "simple-firebase-9ce88.firebaseapp.com",
  projectId: "simple-firebase-9ce88",
  storageBucket: "simple-firebase-9ce88.firebasestorage.app",
  messagingSenderId: "763903955040",
  appId: "1:763903955040:web:eadf1a8be8be1e119d7305",
  measurementId: "G-J5YLE6S7Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;