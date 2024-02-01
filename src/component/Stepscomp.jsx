import React, { useState } from 'react';
import './Stepscomp.css';
import mobile from './Images/mobile.png';
import f1 from './Images/f1.png';
import f2 from './Images/f2.png'; // Change the import for f2
import f3 from './Images/f3.png'; // Change the import for f3
import f4 from './Images/f4.png'; // Change the import for f4
import f5 from './Images/f4.png'
const Stepscomp = () => {
  const [activeBlock, setActiveBlock] = useState(1);

  const handleClick = (index) => {
    setActiveBlock( index);
  };

  const getStepsElementText = (index) => {
    switch (index) {
      case 1:
        return '1. Download the and Sign Up';
      case 2:
        return '2. Create your profile and Joint account';
      case 3:
        return '3. Verify the partner account';
      case 4:
        return '4. Plan your goal and choose the investment option';
      case 5:
        return '5. Invest and track your goal';
          
      default:
        return '';
    }
  };

  const getStepsImageSource = (index) => {
    switch (index) {
      case 1:
        return f1;
      case 2:
        return f2;
      case 3:
        return f3;
      case 4:
        return f4;
      case 5:
        return f5;
      default:
        return '';
    }
  };

  return (
    <div className="steps_content">
      <span className="steps_content_heading">Start saving in 5 steps</span>
      <div className="steps_content_step">
        <div className="stepcomp_block">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              className={`block_ement ${activeBlock === index ? 'active' : ''}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <span className="steps_element">{getStepsElementText(index)}</span>
            </div>
          ))}
        </div>
        <div className="stepcomp_block">
          <img src={getStepsImageSource(activeBlock)} alt={`Step ${activeBlock}`} />
        </div>
      </div>
    </div>
  );
};

export default Stepscomp;
