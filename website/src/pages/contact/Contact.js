import React, { useState, useEffect } from "react";
import "./Contact.scss";
import MenuBar from 'components/menubar/MenuBar.js';

export default () => {

  return (
    <>
      <MenuBar activeTab="contact" />
      <div className='main'>
        <h1>Contact Us</h1>
        <p className="subtitle">Need to get ahold of us? Fill out this form and we'll get back to you as soon as we can!</p>

      </div>
    </>
  );
};
