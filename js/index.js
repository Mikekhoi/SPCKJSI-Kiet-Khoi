import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdgCiQeGhHwRUvdE6mEfdW4l8eaTTcBuw",
  authDomain: "ck-0-838f2.firebaseapp.com",
  projectId: "ck-0-838f2",
  storageBucket: "ck-0-838f2.appspot.com",
  messagingSenderId: "551214443110",
  appId: "1:551214443110:web:59e81ea49b9ee7761c9ba7",
  measurementId: "G-PP5RXWC568",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
