// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASzkZbui0ugRaVjTpFuds712UMwEv3gaw",
  authDomain: "myfirstapp-23499.firebaseapp.com",
  projectId: "myfirstapp-23499",
  storageBucket: "myfirstapp-23499.appspot.com",
  messagingSenderId: "87777046959",
  appId: "1:87777046959:web:9dc18c780f13b7ff057f5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth } ;