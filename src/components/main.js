import React from 'react'
import illusTwo from '../images/illustration-2.svg';
import arrowIcon from '../images/icon-arrow.svg'
import './component-styles/main.css'
import Testimonial from './testimonial';
const Main = () => {
    return (
        <div className="main">
            <div className="hero">
                <img src={illusTwo} alt=""/>
            </div>
            <div className="main--content">
                <h3>Stay productive, wherever you are</h3>
                <ul>
                    <li>Never let location be an issue when accessing your files. Fylo has you 
                        covered for all of your file storage needs.</li>
                    <li>Securely share files and folders with friends, family and colleagues for 
                        live collaboration. No email attachments required!</li>
                </ul>
                <div className="cta">
                <a href="#re">See how Fylo works</a>
                <img src={arrowIcon} alt=""/>
                </div>
                <Testimonial/>
            </div>
        </div>
    )
}

export default Main
