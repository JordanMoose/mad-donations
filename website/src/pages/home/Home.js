import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.scss';
import hag from 'assets/images/hag.png';
import polac from 'assets/images/polac.jpg';
import unnamed from 'assets/images/unnamed.png';

export default () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleCarouselSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    // <MenuBar activeTab="home" />
    // Homepage image carousel
    <div className="slideshow">
      <Carousel activeIndex={carouselIndex} onSelect={handleCarouselSelect}>
        <Carousel.Item className="carousel-slide">
          <img
            className="carousel-img"
            src={hag}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-slide">
          <img
            className="carousel-img"
            src={polac}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-slide">
          <img
            className="carousel-img"
            src={unnamed}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
