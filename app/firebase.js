// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR7B2bCQ7eRCPIvR4I8wGxYqWb83gBhvg",
  authDomain: "expense-tracker-e1b67.firebaseapp.com",
  projectId: "expense-tracker-e1b67",
  storageBucket: "expense-tracker-e1b67.appspot.com",
  messagingSenderId: "500558314343",
  appId: "1:500558314343:web:28c40db9a9f43ffc9e4dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);