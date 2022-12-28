function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBdxWH1ur8psaS6LQw9dwjOcwpY1Rv8ZY8",
  authDomain: "rentingcar-8d0c1.firebaseapp.com",
  projectId: "rentingcar-8d0c1",
  storageBucket: "rentingcar-8d0c1.appspot.com",
  messagingSenderId: "111974221711",
  appId: "1:111974221711:web:c720167b7a2ba49ceb6dfa",
  measurementId: "G-FJ0EE4G9VT"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);