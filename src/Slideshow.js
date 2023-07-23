import React, { useState, useEffect } from 'react';
import toronto from "./images/toronto.jpg";
import vancouver from "./images/vancouver.jpg";
import Niagara from "./images/Niagara.jpg";
import Banff from "./images/Banff.jpg";

const Slideshow = () => {
  const images = [toronto, Niagara, vancouver,Banff];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically change the image every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      <img src={images[currentImageIndex]} alt="Slideshow" />
    </div>
  );
};

export default Slideshow;
