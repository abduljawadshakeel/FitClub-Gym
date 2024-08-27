import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import tick from "../../assets/tick.png";
import nike from "../../assets/nike.png";

const features = [
  "OVER 140+ EXPERT COACHES",
  "TRAIN SMARTER AND FASTER THAN BEFORE",
  "1 FREE PROGRAM FOR NEW MEMBER",
  "RELIABLE PARTNERS",
];

const Reasons = () => {
  return (
    <div className="Reasons" id="why-us">
      <div className="left-R">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="right-R">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>
        <div className="features-list">
          <div>
            {features.map((feature, index) => (
              <span key={index}>
                <img src={tick} alt="" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="our-partners">
          <span>OUR PARTNERS</span>
        </div>
        <div className="logos-p">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
