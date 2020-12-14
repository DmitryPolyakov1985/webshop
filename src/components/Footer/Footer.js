import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer-col-1">
                <div>
                    <h2>LOGO</h2>
                </div>
                <div className="social-icons">
                    <FaFacebookSquare />
                    <FaLinkedin />
                    <FaInstagramSquare />
                    <FaTwitterSquare />
                </div>
            </div>
            <div className="footer-col-2">
                <div>
                    <ul>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Locations</li>
                    </ul>
                </div>
            </div>
            <div className="footer-col-3">
                <div>
                    <ul>
                        <li>Support</li>
                        <li>Our team</li>
                        <li>Careers</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
           
        </footer>
    )
}

export default Footer
