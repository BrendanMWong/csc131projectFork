import React, { useState } from 'react'
import './LoginSignUp.css'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/person.png'

const LoginSignUp = () => {

    const [choice,setChoice] = useState("Sign Up") 

    return ( 
        <div className = 'container'>
            <div className = "header">
                <div className = "text">{choice}</div>
                <div className = "underline"></div>
            </div>
            <div className = "inputs">
                {choice==="Login"?<div></div>:<div className = "input">
                    <img src = {user_icon} alt= "" />
                    <input type = "text" placeholder= "First and Last Name" />
                </div>}
                
                <div className = "input">
                    <img src = {email_icon} alt= "" />
                    <input type = "email" placeholder= "Email Address" />
                </div>
                <div className = "input">
                    <img src = {password_icon} alt= "" />
                    <input type = "password" placeholder= "Password" />
                </div>
            </div>
            {choice==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Your Password? <span>Click Here!</span></div>}
            <div className = "submit-container">
                <div className={choice==="Login"?"submit gray":"submit"} onClick={()=>{setChoice("Sign Up")}}>Sign Up</div>
                <div className={choice==="Sign Up"?"submit gray":"submit"} onClick={()=>{setChoice("Login")}}>Login</div>
            </div>
        </div>
    );
};

export default LoginSignUp