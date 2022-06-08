// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-YlFMoMv30mTyHOTsoL1Vmxq4wqcV_-0",
  authDomain: "piw-project.firebaseapp.com",
  projectId: "piw-project",
  storageBucket: "piw-project.appspot.com",
  messagingSenderId: "954846063542",
  appId: "1:954846063542:web:4c8ea687d265763a172f17",
  measurementId: "G-KW84088H3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);