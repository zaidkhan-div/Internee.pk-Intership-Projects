// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaG1_Kmtz3saCoVlK1BgY1JYScBrse_JQ",
  authDomain: "userauthentication-ed590.firebaseapp.com",
  projectId: "userauthentication-ed590",
  storageBucket: "userauthentication-ed590.firebasestorage.app",
  messagingSenderId: "558879614496",
  appId: "1:558879614496:web:340b2fe55d048ab4ac3e45",
  measurementId: "G-4DGWLSLSM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export default app;