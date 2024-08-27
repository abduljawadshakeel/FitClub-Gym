import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import rightArrow from "../../assets/rightArrow.png";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="container-p" id="Plan">
      <div className="plan-header">
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">now withus</span>
      </div>
      <div className="blur plan-blur"></div>
      <div className="blur plan-blur2"></div>

      <div className="Payment-plans">
        {plansData.map((plans) => (
          <div className="plan">
            {plans.icon}

            <span>{plans.name}</span>
            <span>$ {plans.price}</span>

            <div className="plan-features">
              {plans.features.map((features, i) => (
                <div className="p-feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>
            <div className="see-more">
              <span>See more benefits</span>
              <img src={rightArrow} alt="" />
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Plans;
