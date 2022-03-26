import React from 'react'
import { useNavigate } from 'react-router-dom'
import {auth,provider} from "./Firebase"
import { signInWithPopup,getAdditionalUserInfo } from "firebase/auth" ;
function Login() {
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            const details = getAdditionalUserInfo(result)
            navigate('/dashboard',{state : {emailID : result.user.email, isNew: details.isNewUser}})
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div><button onClick={signInWithGoogle}>Sign in with Google</button></div>
    )
}

export default Login