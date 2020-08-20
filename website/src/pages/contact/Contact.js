import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Image
} from 'react-bootstrap';
import "./Contact.scss";
import MenuBar from 'components/menubar/MenuBar.js';
import holder from 'assets/images/placeholder.png';

export default () => {

  return (
    <>
      <MenuBar activeTab="contact" />
      <div className="main">
        <h1>Contact Us</h1>
        <p className="subtitle">Need to get ahold of us? Fill out this form and we'll get back to you as soon as we can!</p>
        <div className="body">
          <Form>
            <Form.Group>
              <Form.Label>Full name</Form.Label>
              <Form.Control type="name" placeholder="John Doe" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="example@example.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button type="send">Send</Button>
          </Form>
          <Image className="side-pic" src={holder} />
        </div>
      </div>
    </>
  );
};
