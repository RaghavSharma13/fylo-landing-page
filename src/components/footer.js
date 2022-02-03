import React from 'react'
import logo from '../images/logoWhite.svg';
import icon_phone from '../images/icon-phone.svg';
import icon_email from '../images/icon-email.svg';
import icon_facebook from '../images/icon-facebook.svg';
import icon_instagram from '../images/icon-instagram.svg';
import icon_twitter from '../images/icon-twitter.svg';
import Tile from './Tile';
import './component-styles/footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="Fylo"/>
            <div className="tiles">
                <Tile image={icon_phone} info={"Phone: +1-543-123-4567"}/>
                <Tile image={icon_email} info={"example@fylo.com"}/>
            </div>
            <ul className="footer--navList">
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
            </ul>
            <ul className="footer--navList">
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
            <div className="socials">
                <img src={icon_facebook} alt=""/>
                <img src={icon_twitter} alt=""/>
                <img src={icon_instagram} alt=""/>
            </div>
        </div>
    )
}

export default Footer
