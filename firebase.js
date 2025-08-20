// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9apJp6WNybtE65RhmlXl7Qh4MGcjdcp0",
  authDomain: "react-app-59af5.firebaseapp.com",
  projectId: "react-app-59af5",
  storageBucket: "react-app-59af5.firebasestorage.app",
  messagingSenderId: "23844626742",
  appId: "1:23844626742:web:9fe174593b1b51b5791397",
  measurementId: "G-4EG6VMKG1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);