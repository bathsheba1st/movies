// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7SYfPTBcT5C6h2O-Dd0Ob5JaHLH7e6js",
  authDomain: "movies-57bab.firebaseapp.com",
  projectId: "movies-57bab",
  storageBucket: "movies-57bab.appspot.com",
  messagingSenderId: "897863873816",
  appId: "1:897863873816:web:46d3a4e151507e2a4b5a6d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
