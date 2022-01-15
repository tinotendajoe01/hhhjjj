// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrXRV0_3pA91vs2i-ykAjn3KKvZovzXnc",
  authDomain: "kenlink-pharmacies.firebaseapp.com",
  projectId: "kenlink-pharmacies",
  storageBucket: "kenlink-pharmacies.appspot.com",
  messagingSenderId: "1033264782047",
  appId: "1:1033264782047:web:3b92b685a83139a153676a",
  measurementId: "G-9CRYHSR60Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
