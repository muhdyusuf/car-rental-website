// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL-mTHJQg5liQgAozr5EVllAirunXf77k",
  authDomain: "car-rental-sandakan.firebaseapp.com",
  projectId: "car-rental-sandakan",
  storageBucket: "car-rental-sandakan.appspot.com",
  messagingSenderId: "1081610783796",
  appId: "1:1081610783796:web:30ea7c4a63a03fc940ce61",
  measurementId: "G-YJ5EVJ9ZXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app)

export {db}