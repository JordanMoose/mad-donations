import React, { useState, useEffect, useContext } from "react";
import "./Account.css";
import MenuBar from 'components/menubar/MenuBar.js';
import { UserContext } from 'providers/UserProvider';
import {Card, Button, Dropdown} from 'react-bootstrap';
import SubscriptionCard from 'components/subscriptionCards/SubscriptionCard.js';

export default () => {
  const user = useContext(UserContext);
  return (
    <>
      <MenuBar activeTab="account" />
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Account Settings
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Change Name</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Change Password</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Change Email</Dropdown.Item>
        </Dropdown.Menu>

      </Dropdown>
      <div>
        {user ? 
        <>
          <div>Your name is {user.displayName}</div>
          <div>Your email is {user.email}</div> 
        </>
        : 
        <div>No User Signed in</div>
        }
      </div>
      <div className="all-subscriptions">
        <div className = "subcategory">
          <h2>Active Subscriptions</h2>
          <div className="card-holder">
            <SubscriptionCard name='danielle' active={true}/>
            <SubscriptionCard name='WWE' active={true}/>
          </div>
        </div>
        <div className= "subcategory">
          <h2>Previous Subscriptions</h2>
          <div className="card-holder">
          <SubscriptionCard name='danielle' active={false}/>
          <SubscriptionCard name='danielle'active={false}/>
          <SubscriptionCard name='adam'active={false}/>
          <SubscriptionCard name='mooseman'active={false}/>
          </div>
        </div>
        
      </div>
    </>
  );
};
