// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxCk48Z1vv-VENQXCH7dwTY4diIhY0hxc",
  authDomain: "sleep-better-6a943.firebaseapp.com",
  projectId: "sleep-better-6a943",
  storageBucket: "sleep-better-6a943.appspot.com",
  messagingSenderId: "877970881520",
  appId: "1:877970881520:web:7a16c3e40240715f95fb35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const firestore = getFirestore(app);
