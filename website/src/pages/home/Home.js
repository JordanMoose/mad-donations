import React, { useState, useEffect } from 'react';
import {
  Carousel,
  Card
} from 'react-bootstrap';
import './Home.scss';
import MenuBar from 'components/menubar/MenuBar.js';
import mountain from 'assets/images/mountain.jpg';
import niagara from 'assets/images/niagara.jpg';
import waterfall from 'assets/images/waterfall.jpg';
import holder from 'assets/images/placeholder.png';
import arrow from 'assets/images/arrow.svg';

export default () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleCarouselSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
  };

  return (
    <>
      <MenuBar activeTab="home" />
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
        {/* TODO: Change this tagline */}
        <p className="tagline">Your one stop shop for supporting the things you want to be supporting</p>
        <h1 className="hiw-header">How it works</h1>
        <div className="hiw-cards-container">
          <Card className="hiw-cards">
            <Card.Img variant="top" src={holder} />
            <Card.Body>
              <Card.Title>Create an account</Card.Title>
              <Card.Text>
                Fill out your name, email, and credit card information. Don't worry, we won't share this with anyone.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="arrow-container"><img className="arrow" src={arrow} /></div>
          <Card className="hiw-cards">
            <Card.Img variant="top" src={holder} />
            <Card.Body>
              <Card.Title>Personalize your subscription</Card.Title>
              <Card.Text>
                Select the causes you support and your monthly contribution for each one.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="arrow-container"><img className="arrow" src={arrow} /></div>
          <Card className="hiw-cards">
            <Card.Img variant="top" src={holder} />
            <Card.Body>
              <Card.Title>Donate</Card.Title>
              <Card.Text>
                Each month, we research organizations that match your causes and send them your contribution.
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
