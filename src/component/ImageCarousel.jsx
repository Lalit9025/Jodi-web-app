import React, { useState, useEffect } from 'react';
import image1 from './Images/cloth.png';
import image2 from './Images/shoes.png';
import './ImageCarousel.css'; // CSS file for styling

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2];
  const textData = [
    {
      heading: 'Fashion Collection',
      description: 'Explore the latest trends in clothing.',
    },
    {
      heading: 'Footwear Styles',
      description: 'Discover a variety of stylish and comfortable shoes.',
    },
    // Add more text data as needed
  ];

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
