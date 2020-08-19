import React, { useState, useEffect, useContext } from "react";
import "./Choose.css";
import MenuBar from 'components/menubar/MenuBar.js'
import CauseSelect from 'components/login/CauseSelect.js'
import { UserContext } from 'providers/UserProvider';

export default () => {
  const user = useContext(UserContext);

  return (
    <>
      <MenuBar/>
      <div>
        {user == null ? 
          <div>Loading...</div>
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
