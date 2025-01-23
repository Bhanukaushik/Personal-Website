// Import the functions you need from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the auth module for authentication
import { getAnalytics } from "firebase/analytics"; // Optional: for analytics

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpC-V-kgHnaoFqYdti0WEP4QW_5aRLFuk",
  authDomain: "portfolio-35cb4.firebaseapp.com",
  projectId: "portfolio-35cb4",
  storageBucket: "portfolio-35cb4.firebasestorage.app",
  messagingSenderId: "595335754268",
  appId: "1:595335754268:web:0feb58cb525e6f925865d9",
  measurementId: "G-3SBWQLVL7V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Optional: Initialize Analytics (if you want to use Firebase Analytics)
const analytics = getAnalytics(app);

// Export the auth object to use in other parts of your app
export { auth, analytics };
