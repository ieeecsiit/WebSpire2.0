import React from 'react';
import './ImageCarousel.css';

const images = [
  './images/WebSpire_1.jpg',
  './images/WebSpire_2.jpg',  
  './images/WebSpire_3.jpg',
  './images/WebSpire_4.jpg',
  './images/WebSpire_5.jpg',
  './images/WebSpire_6.jpg',
  './images/WebSpire_7.jpg',
  './images/WebSpire_1.jpg',
  './images/WebSpire_2.jpg',  
  './images/WebSpire_3.jpg',
  './images/WebSpire_4.jpg',
  './images/WebSpire_5.jpg',
  './images/WebSpire_6.jpg',
  './images/WebSpire_7.jpg',
];

const ImageCarousel = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="scroller flex gap-4 py-4 w-max animate-scroll hover:[animation-play-state:paused]">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-[240px] w-[32rem] aspect-w-16 aspect-h-9 rounded-xl bg-neutral-800 overflow-hidden"
          >
            <img src={src} alt={`carousel ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;



