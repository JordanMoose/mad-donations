import React, { useState, useEffect } from 'react';
import {
  Carousel,
  Card
} from 'react-bootstrap';
import './Home.scss';
import MenuBar from 'components/menubar/MenuBar.js';
import hag from 'assets/images/hag.png';
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
      <div className="main">
        <h1 className="page-header">MAD Donations</h1>
        <p className="tagline">Your one stop shop for supporting the things you want to be supporting</p>
        <h1 className="hiw-header">How it works</h1>
        <div className="hiw-cards-container">
          <Card className="hiw-cards">
            <Card.Img variant="top" src={hag} />
            <Card.Body>
              <Card.Title>This is how it works</Card.Title>
              <Card.Text>
                Well, see it works in the ways that it works and doesn't work in the ways that it doesn't.
          </Card.Text>
            </Card.Body>
          </Card>
          <Card className="hiw-cards">
            <Card.Img variant="top" src={hag} />
            <Card.Body>
              <Card.Title>This is how it works</Card.Title>
              <Card.Text>
                Well, see it works in the ways that it works and doesn't work in the ways that it doesn't.
          </Card.Text>
            </Card.Body>
          </Card>
          <Card className="hiw-cards">
            <Card.Img variant="top" src={hag} />
            <Card.Body>
              <Card.Title>This is how it works</Card.Title>
              <Card.Text>
                Well, see it works in the ways that it works and doesn't work in the ways that it doesn't.
          </Card.Text>
            </Card.Body>
          </Card>
          <Card className="hiw-cards">
            <Card.Img variant="top" src={hag} />
            <Card.Body>
              <Card.Title>This is how it works</Card.Title>
              <Card.Text>
                Well, see it works in the ways that it works and doesn't work in the ways that it doesn't.
          </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <h1>Get started</h1>
        <p className="get-started"><a href="/login">Create an account</a> and choose your monthly contribution.</p>
      </div>
    </>
  );
}
