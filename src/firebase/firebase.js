// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwVsTtj2Eb4YXoWMV0QvgmwRfMjYI_hos",
  authDomain: "lifetojesus-ltj.firebaseapp.com",
  projectId: "lifetojesus-ltj",
  storageBucket: "lifetojesus-ltj.firebasestorage.app",
  messagingSenderId: "239927021240",
  appId: "1:239927021240:web:d50e193b876ade92c42e4d",
  measurementId: "G-P2DGELF137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };