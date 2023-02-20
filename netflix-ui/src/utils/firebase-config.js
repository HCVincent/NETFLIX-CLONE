// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu_1mViLoSlrdAtX2MhfiAtSKf3o7pezA",
  authDomain: "react-netflix-clone-b2915.firebaseapp.com",
  projectId: "react-netflix-clone-b2915",
  storageBucket: "react-netflix-clone-b2915.appspot.com",
  messagingSenderId: "967554268587",
  appId: "1:967554268587:web:ec0070700f9e67a33d26ee",
  measurementId: "G-7YQGPQMLKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
