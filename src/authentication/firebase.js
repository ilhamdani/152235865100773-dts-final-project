// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLQK2W0bPXHR5YJjD3UMf8uI2oxmeH5gE",
  authDomain: "dts-graduate-center.firebaseapp.com",
  projectId: "dts-graduate-center",
  storageBucket: "dts-graduate-center.appspot.com",
  messagingSenderId: "970625550049",
  appId: "1:970625550049:web:94eba34f4110281a5859a0",
  measurementId: "G-4QDK4B8JQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

const getGraduates = async () => {
  try {
        const q = query(collection(db, "graduates"));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    } catch (err) {
        return []
    }
}

export { db, auth, getGraduates }