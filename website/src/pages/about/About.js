import React, { useState, useEffect } from "react";
import "./About.css";
import MenuBar from 'components/menubar/MenuBar.js';

export default () => {

  return (
    <>
      <MenuBar activeTab='/about' />
      <div>
        <div>This is the about page.</div>
      </div>
    </>
  );
};
