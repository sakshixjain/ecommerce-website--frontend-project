import React, { useState } from 'react';
import './mouseover.css';


const HoverImage = ({ initialSrc, hoverSrc, alt, className }) => {
  const [src, setSrc] = useState(initialSrc);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setSrc(hoverSrc);
    setIsHovered(true);

  };

  const handleMouseOut = () => {
    setSrc(initialSrc);
    setIsHovered(!isHovered);

  
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isHovered ? 'mouseOver' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default HoverImage;
