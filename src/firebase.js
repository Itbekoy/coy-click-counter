// Import core Firebase and Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCV7bUpKXdadJugHp0A1Bda3t-BT6sOveo",
  authDomain: "click-counter-coy.firebaseapp.com",
  projectId: "click-counter-coy",
  storageBucket: "click-counter-coy.firebasestorage.app",
  messagingSenderId: "971320635303",
  appId: "1:971320635303:web:1ffac7aac0361c3737d082",
  measurementId: "G-887GX7W6S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
const db = getFirestore(app);

// Export the database instance to use in your app
export { db };