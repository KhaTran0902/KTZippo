import React from "react";
import {
    FaFacebookF,
    FaInstagram
} from "react-icons/fa";
import "./Newsletter.scss"
const NewsLetter = () => {
     return (
        <div className="newsletter-section"  data-aos="fade-up">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">Sign up for lates updates and offers</span>                
                <div className="form">
                    <input type="text" placeholder="Email Adrress"/>
                    <button> Subscribe</button>
                </div>
                <div className="text"> Will be used in accordance with our Privacy Policy </div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14}/>
                        
                    </div>
                    <div className="icon">
                        <FaInstagram size={14}/>
                    </div>
                </div>
            </div>
        </div>
     )
}

export default NewsLetter;