// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD3X_Eo_9Qhph0ShYMIBs-JJ-FlWIgwMOA",
  authDomain: "portfolio-cs1.firebaseapp.com",
  projectId: "portfolio-cs1",
  storageBucket: "portfolio-cs1.appspot.com",
  messagingSenderId: "248335125632",
  appId: "1:248335125632:web:981abf88c1a7014711ea65",
  measurementId: "G-41NFEZGBZC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, analytics, db };
