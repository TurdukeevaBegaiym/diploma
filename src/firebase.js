// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
  appId: "1:65197132264:web:94ebb98415dca05ea07c5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);


// получить список категорий (коллекция документов).
export const categoryCollection = collection(db, "diploma");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );


export const onProductsLoad = (callback) =>
  onSnapshot(productsCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(ordersCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
  
  // отправка фотографии и получение ее url
  export const uploadProductPhoto = (file) => {
  const storageRef = ref(storage, `products/${file.name}`);
  return uploadBytes(storageRef, file)
    .then(() => {
      return getDownloadURL(storageRef);
    })
    .catch((error) => {
      console.log("Failed to upload product photo:", error);
    });
};



 
  