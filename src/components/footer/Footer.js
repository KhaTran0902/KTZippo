import React from "react";
import {
  FalocationArrow,
  FamobileAlt,
  FaEnvelope,
  FaLocationArrow,
  FaMobile,
  FaMobileAlt,
} from "react-icons/fa";
import payments from  "../../assets/payments.png"
import  "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            In Vietnam, Zippo lighters were known through the wars, through
            these periods Zippo lighters followed the baggage with hundreds of
            thousands of American soldiers imported into Vietnam, and from here
            the Zippo brand was known. 
            {/* . Since the US lifted the embargo on */}
            {/* Vietnam and normalized relations between the two countries in 1994,
            after 5 years of research and market exploration, Zippo officially
            entered the Vietnamese market in 1999. ONE THANH COMPANY LIMITED
            VIEN AM VIET was selected as the main partner and representative of
            Zippo in Vietnam under the name Zippo Vietnam. */}
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              72 Vo Thi Sau, Ba Ria city, Ba Ria - Vung Tau provice
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">
             Phone: 039.5678.343
            </div>
          </div>
          
          <div className="c-item">
            <FaEnvelope />
            <div className="text">
              Email: Khatran090201@gmail.com
            </div>
          </div>
        </div>
        <div className="col">
            <div className="title"> Categories</div>
            <span className="text">Universal Zippo</span>
            <span className="text">Premium Zippo</span>
            <span className="text">Utility</span>
        </div>
        <div className="col">
            <span className="title">Pages</span>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Contact us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
            © 2023 - Zippo Manufacturing Company - All rights reserved
            </div>
            <img src={payments} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
