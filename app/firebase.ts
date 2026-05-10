import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJa6gCPbdiUjFBPypxbgCaK0DjpFrdF0w",
  authDomain: "ssc-cgl-platform.firebaseapp.com",
  projectId: "ssc-cgl-platform",
  storageBucket: "ssc-cgl-platform.firebasestorage.app",
  messagingSenderId: "910882350243",
  appId: "1:910882350243:web:939738ee49715a923a0b16",
  measurementId: "G-EGBRF8V38N",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);