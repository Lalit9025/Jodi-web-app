// import React, { useState } from 'react';
// import './Stepscomp.css';
// import mobile from './Images/mobile.png';
// import f1 from './Images/f1.png';
// import f2 from './Images/f1.png';
// import f3 from './Images/f1.png';
// import f4 from './Images/f1.png';

// const Stepscomp = () => {
//   const [activeBlock, setActiveBlock] = useState(1);

//   const handleClick = (index) => {
//     setActiveBlock((prevIndex) => (prevIndex === index ? null : index));
//   };
  


//   const getStepsElementText = (index) => {
//     switch (index) {
//       case 1:
//         return '1. Download and Sign Up';
//       case 2:
//         return '2. Partner Verification';
//       case 3:
//         return '3. Account Creation and Funding';
//       case 4:
//         return '4. Plan,Invest, Spend, and Track Togehter';
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className="steps_content">
//       <span className="steps_content_heading">Jodi in 5 steps</span>
//       <div className="steps_content_step">
//         <div className="stepcomp_block">
//           {[1, 2, 3, 4, 5].map((index) => (
//             <div className={`block_ement ${activeBlock === index ? 'active' : ''}`} key={index} onClick=    {() => handleClick(index)}>
//               <span className="steps_element">{getStepsElementText(index)}</span>
//             </div>
//           ))}
//         </div>
//         <div className="stepcomp_block">
//           <img src={f1} alt='mobile'/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stepscomp;

import React, { useState } from 'react';
import './Stepscomp.css';
import mobile from './Images/mobile.png';
import f1 from './Images/f1.png';
import f2 from './Images/f2.png'; // Change the import for f2
import f3 from './Images/f3.png'; // Change the import for f3
import f4 from './Images/f4.png'; // Change the import for f4

const Stepscomp = () => {
  const [activeBlock, setActiveBlock] = useState(1);

  const handleClick = (index) => {
    setActiveBlock( index);
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
        return '4. Plan, Invest, Spend, and Track Together';
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
