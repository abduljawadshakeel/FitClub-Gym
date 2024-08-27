import React from "react";
import "./Footer.css";
import gitHub from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const footer = () => {
  return ( 
    
    <div className="footer-container">
    
      <hr />
      <div className="footer">
      <div className="social-links">
        <img src={gitHub} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedin} alt="" />
        </div>
      
      <div className="logo">
        <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur f-blur"></div>
      <div className="blur f-blur2"></div>
    </div>
  );
};

export default footer;
