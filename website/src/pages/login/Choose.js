import React, { useState, useEffect, useContext } from "react";
import "./Choose.css";
import MenuBar from 'components/menubar/MenuBar.js'
import { UserContext } from 'providers/UserProvider';

export default () => {
  const user = useContext(UserContext);

  return (
    <>
      <MenuBar/>
      <div>
        <div>This is where users will choose their supported causes.</div>
        {user ? 
        <>
          <div>Hello {user.displayName}!</div>
          <div>Choose your supported causes here.</div> 
        </>
        : 
        <div>Loading...</div>
        }
      </div>
    </>
  );
};
