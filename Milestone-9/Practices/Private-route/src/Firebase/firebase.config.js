// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqrNElxv84y3nNG0iDUXCH1tXiF6EVR4",
  authDomain: "private-route-b5cbc.firebaseapp.com",
  projectId: "private-route-b5cbc",
  storageBucket: "private-route-b5cbc.firebasestorage.app",
  messagingSenderId: "149605417813",
  appId: "1:149605417813:web:c500ab6d1b68221ea8a5dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)