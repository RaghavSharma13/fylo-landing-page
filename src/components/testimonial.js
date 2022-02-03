import React from 'react'
import iquotes from '../images/icon-quotes.svg'
import avatar from '../images/avatar-testimonial.jpg'
import './component-styles/testimonial.css'
const Testimonial = () => {
    return (
        <div className="testimonial">
            <img src={iquotes} alt=""/>
            <p>Fylo has improved our team productivity by an order of magnitude. Since 
               making the switch our team has become a well-oiled collaboration machine.
            </p>
            <div className="testimonial--info">
                <img src={avatar} alt=""/>
                <div className="testimonial--credentials">
                    <h6>Kyle Burton</h6>
                    <p>Founder & CEO, Huddle</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
