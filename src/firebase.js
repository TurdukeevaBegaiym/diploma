// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl6rMNq-EV804ILGJbPPDqp58uaqwBo1k",
  authDomain: "diploma-8ed24.firebaseapp.com",
  projectId: "diploma-8ed24",
  storageBucket: "diploma-8ed24.appspot.com",
  messagingSenderId: "837911943402",
  appId: "1:837911943402:web:3a3ee4d2a76fa612771f93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); //BASE DANNA
const auth = getAuth(app);

// получить список категорий (коллекция документов).
export const categoryCollection = collection(db, "diploma");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const signIn = () => signInWithPopup(auth, provider);
export const signOff = () => signOut(auth);

export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);
