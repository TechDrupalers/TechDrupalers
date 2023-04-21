import React from "react";
import './Footer.css';
import {FaWhatsapp,FaInstagram,FaFacebook,FaLinkedin,FaTwitter} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <h2>@2023 Sephora USA, Inc All Rights Reserved</h2>
            </div>
            <div className="socialsites">
                <FaWhatsapp/>
                <FaInstagram/>
                <FaFacebook/>
                <FaLinkedin/>
                <FaTwitter/>
            </div>
        </div>
    );
};

export default Footer;