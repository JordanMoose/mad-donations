import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.scss';
import MenuBar from 'components/menubar/MenuBar.js';
import hag from 'assets/images/hag.png';
import polac from 'assets/images/polac.jpg';
import unnamed from 'assets/images/unnamed.png';

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
              src={hag}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-slide">
            <img
              className="carousel-img"
              src={polac}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-slide">
            <img
              className="carousel-img"
              src={unnamed}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
