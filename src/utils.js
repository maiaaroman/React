import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOFONDHW0e_oAjC4m4dhTsWtCrNZUPIWw",
  authDomain: "carritomai.firebaseapp.com",
  projectId: "carritomai",
  storageBucket: "carritomai.appspot.com",
  messagingSenderId: "231575569492",
  appId: "1:231575569492:web:536de28ad029354ad8d9c1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  
export { db };