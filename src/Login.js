import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {auth,provider} from "./Firebase"
import { signInWithPopup } from "firebase/auth" ;
function Login() {
    const navigate = useNavigate() ; 
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result) ;
            navigate('/dashboard')
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div><button onClick={signInWithGoogle}>Sign in with Google</button></div>
    )
}

export default Login

