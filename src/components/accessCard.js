import React from 'react'
import Form from './form'
import './component-styles/accessCard.css'
const AccessCard = () => {
    return (
        <div className="accessCard">
            <div className="card--content">
                <h3>Get early access today</h3>
                <p>
                    It only takes a minute to sign up and our free starter tier is extremely generous. 
                    If you have any questions, our support team would be happy to help you.
                </p>
            </div>
            <Form placeholder={"email@example.com"} btn_text={"Get Started For Free"}/>
        </div>
    )
}

export default AccessCard
