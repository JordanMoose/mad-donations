import React, { useState, useEffect } from "react";
import "./Contact.css";
import MenuBar from 'components/menubar/MenuBar.js';

export default () => {
  console.log("Hello");

  return (
    <>
      <MenuBar activeTab="contact" />
      <div>
        <div>This is the 'contact us' page.</div>
      </div>
    </>
  );
};
