import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBa2-ThPET4R_NFUFDZUHq-_20AFgvJj-8",
    authDomain: "todo-react-ad3a3.firebaseapp.com",
    projectId: "todo-react-ad3a3",
    storageBucket: "todo-react-ad3a3.firebasestorage.app",
    messagingSenderId: "288797001737",
    appId: "1:288797001737:web:c8f224055ac79da47790d8"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);