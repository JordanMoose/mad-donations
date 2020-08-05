import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.scss';
import MenuBar from 'components/menubar/MenuBar.js';
import mountain from 'assets/images/mountain.jpg';
import niagara from 'assets/images/niagara.jpg';
import waterfall from 'assets/images/waterfall.jpg';

export default () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleCarouselSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <>
      <MenuBar activeTab="home" />
      {/* Homepage image carousel */}
      <div>
        <Carousel activeIndex={carouselIndex} onSelect={handleCarouselSelect}>
          <Carousel.Item className="carousel-slide">
            <img
              className="carousel-img"
              src={mountain}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-slide">
            <img
              className="carousel-img"
              src={niagara}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-slide">
            <img
              className="carousel-img"
              src={waterfall}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
