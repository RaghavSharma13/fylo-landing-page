import React from 'react'
import illusOne from '../images/illustration-1.svg'
import './component-styles/header.css'
import Form from './form'
const Header = () => {
    return (
        <div className="header">
            <div className="hero">
                <img src={illusOne} alt=""/>
            </div>
            <div className="header--content">
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores your most important files in one secure location. 
                    Access them wherever you need, share and collaborate with friends, 
                    family, and co-workers.
                </p>
                <Form placeholder={"Enter your email..."} btn_text={"Get Started"}/>
            </div>
        </div>
    )
}

export default Header;
