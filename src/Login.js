import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {auth,provider} from "./Firebase"
import { signInWithPopup } from "firebase/auth" ;
import './login.css'

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
        <React.Fragment>
            <div className="main">
                <div className="content">
                    <div className="logo">
                        <img src="" alt="logo img"></img>
                    </div>
                    <div className="header">
                        <p className="title">
                            Welcome to <br/>
                            Code Frappey
                        </p>
                        <p className="discription">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
                            incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                    <div className="button-holder">
                        <button onClick={signInWithGoogle} className="login-with-google-btn">
                            Sign in with Google
                        </button>
                        <p className='terms-conditions'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login