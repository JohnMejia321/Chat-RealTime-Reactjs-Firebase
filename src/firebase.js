import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//     apiKey: "xxx",
//     authDomain: "xxx",
//     databaseURL: "xxx",
//     projectId: "xxx",
//     storageBucket: "xxx",
//     messagingSenderId: "xxx",
//     appId: "xxx"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfYq5uV35ydjTq5B-ir5xqaQeB6kq2jeg",
  authDomain: "app-final-35c38.firebaseapp.com",
  projectId: "app-final-35c38",
  storageBucket: "app-final-35c38.appspot.com",
  messagingSenderId: "208001582985",
  appId: "1:208001582985:web:f8438f71b431ce81454358"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}