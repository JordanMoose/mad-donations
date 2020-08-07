import React, { useState, useEffect } from "react";
import "./Login.css";
import MenuBar from 'components/menubar/MenuBar.js';

export default () => {
  console.log("Hello");

  return (
    <>
        <head>
            <script src="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js"></script>
            <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css" />
        </head>
        <body>
            <h1>Create an Account</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </body>
    </>
  );
};
