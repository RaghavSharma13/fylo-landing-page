import React, { useState } from 'react'
import './component-styles/form.css'
import validator from 'validator';

const Form = ({placeholder,btn_text}) => {
    const [email,setEmail]=useState("");
    const [isEmailValid,setEmailValidity]=useState(true);

    // const checkEmail=()=>{
    //     setValidity(validator.isEmail(email))
    // }

    return (
        <div className="form">
            <span className={`input ${isEmailValid?"":"invalidEmail"}`}>
            <input type="text" placeholder={placeholder} value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </span>
            <button onClick={()=>setEmailValidity(validator.isEmail(email))}>{btn_text}</button>
        </div>
    )
}

export default Form
