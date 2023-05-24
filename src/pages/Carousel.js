import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Previous</button>
      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;