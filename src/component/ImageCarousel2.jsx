import React, { useState, useEffect } from 'react';
// import image1 from './Images/Group 1.png';
// import image2 from './Images/Group 2.png';
// import image3 from './Images/Group 3.png';
import image2 from './Images/i1.jpg';
import image3 from './Images/i2.jpg';
import image1 from './Images/i3.jpg';

import './ImageCarousel.css'; // CSS file for styling

const ImageCarousel2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2,image3];


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div className="image-carousel">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        {/* <div className="text-overlay">
          <div className='head_car'>Spendvest</div>
          <div className='des_car'>Pay the lowest for your lifestyle spends
by auto-investing monthly</div>
        </div> */}
      </div>
    </div>
  );
};

export default ImageCarousel2;
