import React, { useState, useEffect, useContext } from "react";
import "./Account.css";
import MenuBar from 'components/menubar/MenuBar.js'
import { UserContext } from 'providers/UserProvider';

export default () => {
  const user = useContext(UserContext);

  return (
    <>
      <MenuBar activeTab="account" />
      <div>
        <div>This is the account page.</div>
        {user ? 
        <>
          <div>Your name is {user.displayName}</div>
          <div>Your email is {user.email}</div> 
        </>
        : 
        <div>Loading...</div>
        }
      </div>
    </>
  );
};
