import React, { useState } from 'react';

const CarouselComponent = () => {
  const [images, setImages] = useState([
    'https://via.placeholder.com/300?text=Image+1',
    'https://via.placeholder.com/300?text=Image+2',
    'https://via.placeholder.com/300?text=Image+3',
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const addImage = () => {
    const newImage = prompt('Enter the URL of the new image:');
    if (newImage) {
      setImages([...images, newImage]);
    }
  };

  return (
    <div className="carousel-component">
      <div className="carousel">
        <button onClick={goToPrevious}>Previous</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button onClick={goToNext}>Next</button>
      </div>
      <button onClick={addImage}>Add Image</button>
    </div>
  );
};

export default CarouselComponent;
