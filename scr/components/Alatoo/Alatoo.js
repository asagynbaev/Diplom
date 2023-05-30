import React, { useState, useEffect } from 'react';

const Alatoo = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const slideImages = [
    'http://alatoo.edu.kg/file?fl=file_o_nas_7708110584755358683.jpg',
    'http://alatoo.edu.kg/image?img=image_5C4A9493_1290626281745385886.jpg',
    'http://alatoo.edu.kg/image?img=image_5C4A1440_5880840167938242071.jpg',
    'http://alatoo.edu.kg/image?img=image_79E0B3E8-1F32-4BC3-9A2E-610147777956_1_201_a_2477844622973143562.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === slideImages.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="header__info"
      style={{
        backgroundImage: `url(${slideImages[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '300px', // Adjust the height to your desired size
        transition: 'background-image 1s ease-in-out', // Slow transition effect
      }}
    ></div>
  );
};

export default Alatoo;
