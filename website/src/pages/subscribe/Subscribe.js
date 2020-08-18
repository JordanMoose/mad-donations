import React, { useState, useEffect } from "react";
import "./Subscribe.css";
import MenuBar from 'components/menubar/MenuBar.js'

export default () => {
  console.log("Hello");

  return (
    <>
      <MenuBar />
      <div>
        <div>This is the subcsribe page. Here, users will subscribe!</div>
      </div>
    </>
  );
};
