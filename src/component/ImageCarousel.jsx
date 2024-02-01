import React, { useState, useEffect } from 'react';
// import image1 from './Images/cloth.png';
// import image2 from './Images/shoes.png';
import image1 from './Images/c1.webp';
import image2 from './Images/c2.jpeg';
import image3 from './Images/c3.jpeg';
import image4 from './Images/c4.jpg';
import image5 from './Images/c5.jpeg'

import './ImageCarousel.css'; // CSS file for styling

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2,image3,image4,image5];


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
        <div className="text-overlay">
          <div className='head_car'>Spendvest</div>
          <div className='des_car'>Pay the lowest for your lifestyle spends
by auto-investing monthly</div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
