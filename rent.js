// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdxWH1ur8psaS6LQw9dwjOcwpY1Rv8ZY8",
  authDomain: "rentingcar-8d0c1.firebaseapp.com",
  projectId: "rentingcar-8d0c1",
  storageBucket: "rentingcar-8d0c1.appspot.com",
  messagingSenderId: "111974221711",
  appId: "1:111974221711:web:c720167b7a2ba49ceb6dfa",
  measurementId: "G-FJ0EE4G9VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);