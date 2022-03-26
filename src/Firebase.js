// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth" ;
import {Link,useHistory,Route} from "react-router-dom"
import Dashboard from "./Dashboard";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzF63RccpOBZoPsG6I_-4rpMVHg6humPM",
  authDomain: "auth-dev-8280b.firebaseapp.com",
  projectId: "auth-dev-8280b",
  storageBucket: "auth-dev-8280b.appspot.com",
  messagingSenderId: "745590645770",
  appId: "1:745590645770:web:571a5a8b999e0768f66bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) ;

const provider = new GoogleAuthProvider() 



export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result) ;
    }).catch((error)=>{
        console.log(error)
    })
}