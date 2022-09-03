// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDQjek3tr4aY9HiX_avDZhzhLfP7YPNss",
  authDomain: "ibrahimnotesapp.firebaseapp.com",
  projectId: "ibrahimnotesapp",
  storageBucket: "ibrahimnotesapp.appspot.com",
  messagingSenderId: "464300216321",
  appId: "1:464300216321:web:bf00df6e2674eebc92b000",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
