import React, { useState } from 'react';
import './Stepscomp.css';
import mobile from './Images/mobile.png'

const Stepscomp = () => {
  const [activeBlock, setActiveBlock] = useState(1);

  const handleClick = (index) => {
    setActiveBlock((prevIndex) => (prevIndex === index ? null : index));
  };
  


  const getStepsElementText = (index) => {
    switch (index) {
      case 1:
        return '1. Download and Sign Up';
      case 2:
        return '2. Partner Verification';
      case 3:
        return '3. Account Creation and Funding';
      case 4:
        return '4. Plan,Invest, Spend, and Track Togehter';
      default:
        return '';
    }
  };

  return (
    <div className="steps_content">
      <span className="steps_content_heading">Jodi in 5 steps</span>
      <div className="steps_content_step">
        <div className="stepcomp_block">
          {[1, 2, 3, 4, 5].map((index) => (
            <div className={`block_ement ${activeBlock === index ? 'active' : ''}`} key={index} onClick=    {() => handleClick(index)}>
              <span className="steps_element">{getStepsElementText(index)}</span>
                {/* {activeBlock === index  && (
                 <span className="hided_text">{getHidedTextContent(index)}</span>
               )} */}
            </div>
          ))}
        </div>
        <div className="stepcomp_block">
          <img src={mobile} alt='mobile'/>
        </div>
      </div>
    </div>
  );
};

export default Stepscomp;

