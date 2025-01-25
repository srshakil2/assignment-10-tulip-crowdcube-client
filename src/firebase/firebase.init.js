// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApGC8NseNBqpSovzjTif0quY2C_BVZRac",
  authDomain: "crowdcube-assignment-10.firebaseapp.com",
  projectId: "crowdcube-assignment-10",
  storageBucket: "crowdcube-assignment-10.firebasestorage.app",
  messagingSenderId: "604609645245",
  appId: "1:604609645245:web:a6218ddf9b1a2bf5bac5d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
