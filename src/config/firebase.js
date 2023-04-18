// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfh8RuenTc7lM2ZJO_QgjI1zDBF8xfWDk",
  authDomain: "sociaux-de-paris.firebaseapp.com",
  projectId: "sociaux-de-paris",
  storageBucket: "sociaux-de-paris.appspot.com",
  messagingSenderId: "591718297803",
  appId: "1:591718297803:web:56b954eba6f20437366b4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const provider= new GoogleAuthProvider();
export const db= getFirestore(app);