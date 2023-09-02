// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZgtQeJttuGEqo4h9osfsW-96QqrUvvBw",
  authDomain: "todo-ticky.firebaseapp.com",
  projectId: "todo-ticky",
  storageBucket: "todo-ticky.appspot.com",
  messagingSenderId: "268966426578",
  appId: "1:268966426578:web:1d48a0e872bb6d33c67a0b",
  measurementId: "G-PZY7G4GM1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore= getFirestore(app);

export{analytics,firestore}