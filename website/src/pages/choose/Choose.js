import React, { useState, useEffect, useContext } from "react";
import "./Choose.css";
import MenuBar from 'components/menubar/MenuBar.js'
import CauseSelect from 'components/subscribe/CauseSelect.js'
import { UserContext } from 'providers/UserProvider';

export default () => {
  const user = useContext(UserContext);

  return (
    <>
      <MenuBar/>
      <div>
        {user == null ? 
          <div>No user logged in. You probably shouldn't be here.</div>
				:
				<>
          <div>Hello {user.displayName}! Welcome to MAD Donations.</div>
					<div>Choose your supported causes below.</div>
					<CauseSelect />
				</>
        }
      </div>
    </>
  );
};
