import React, { useState, useEffect } from "react";
import "./Orgs.css";
import MenuBar from 'components/menubar/MenuBar.js';

export default () => {
  console.log("Hello");

  return (
    <>
      <MenuBar activeTab="orgs" />
      <div>
        <div>This is the organizations page. Eventually there will be a showcase of our past supported orgs.</div>
      </div>
    </>
  );
};
