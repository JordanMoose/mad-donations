import React, { useState, useEffect } from "react";
import "./Login.css";
import MenuBar from 'components/menubar/MenuBar.js';
import { Modal } from "react-bootstrap";

export default () => {

  return (
    <>
        <head>
            <script src="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js"></script>
            <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css" />
        </head>
        <body>
          <MenuBar activeTab="login"/>
          <h1>Create an Account</h1>
          <Modal.Dialog>
            <Modal.Header>
              <h2>Hey there</h2>
            </Modal.Header>
            <Modal.Body>
              <div id="firebaseui-auth-container"></div>
            </Modal.Body>
          </Modal.Dialog>
          <div id="loader">Loading...</div>
        </body>
    </>
  );
};
