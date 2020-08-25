import React, { useState, useEffect } from "react";
import {
  Image,
  ListGroup
} from 'react-bootstrap';
import "./About.scss";
import MenuBar from 'components/menubar/MenuBar.js';
import moosePic from 'assets/images/moose.png';
import adamPic from 'assets/images/adam.png';
import daniellePic from 'assets/images/danielle.jpg';

export default () => {

  return (
    <>
      <MenuBar activeTab='/about' />
      <div className="main">
        <h1>Our Mission</h1>
        <p className="mission">
          We started MAD Donations in 2020 when we noticed the increasing support and advocacy for the Black Lives Matter movement.
          We wanted to create an easier way for people to fund the causes they already support and hopefully find new ones along the way.
        </p>
        <h1>About the Creators</h1>
        <ListGroup variant="flush">
          <ListGroup.Item className="creator">
            <Image className="creator-pic" src={moosePic} rounded />
            <p className="creator-info">
              Description
            </p>
            <div className="creator-name">Jordan Moossazadeh</div>
          </ListGroup.Item>
          <ListGroup.Item className="creator">
            <Image className="creator-pic" src={adamPic} rounded />
            <p className="creator-info">
              Description
            </p>
            <div className="creator-name">Adam Ash</div>
          </ListGroup.Item>
          <ListGroup.Item className="creator">
            <Image className="creator-pic" src={daniellePic} rounded />
            <p className="creator-info">
              Adam is a senior at UC Berkeley studying Electrical Engineering and Computer Science.
            </p>
            <div className="creator-name">Danielle Lurie</div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};
