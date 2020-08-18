import React, { useState, useEffect, useContext } from "react";
import "./Account.css";
import MenuBar from 'components/menubar/MenuBar.js'
import { UserContext } from 'providers/UserProvider';
import {Card, Button, Dropdown} from 'react-bootstrap';

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
            <Card className = "card" style={{width: '18rem'}}>
              <Card.Body>
                <Card.Title>Environmental Rights</Card.Title>
                <Card.Subtitle>May 2020-Current</Card.Subtitle>
                <Card.Text>You are donating <text style={{color: 'green'}}> $10 a month</text>, and have donated $50 total. Your money went to prominant
                  organizations such as GreenPeace and the WWE. Nice job!
                </Card.Text>
                <div className="button-holder">
                  <Button variant = "secondary"> Change Amount</Button>
                  <Button variant="secondary">Cancel Subscription</Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="card" style={{width: '18rem'}}>
              <Card.Body>
                <Card.Title>LGBTQ+ Rights</Card.Title>
                <Card.Subtitle>May 2020-Current</Card.Subtitle>
                <text>You are donating <text style={{color: 'green'}}> $10 a month</text>, and $50 total. Your money went to prominant
                  organizations such as the trevor project and the WWE. Fuck ya!
                </text>
                <div className="button-holder">
                  <Button variant = "secondary"> Change Amount</Button>
                  <Button variant="secondary">Cancel Subscription</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className= "subcategory">
          <h2>Previous Subscriptions</h2>
          <div className="card-holder">
            <Card className = "card" style={{width: '18rem'}}>
              <Card.Body>
                <Card.Title>Environmental Rights</Card.Title>
                <Card.Subtitle>May 2020-Current</Card.Subtitle>
                <Card.Text>You donated $10 a month, and $50 total. Your money went to prominant
                  organizations such as GreenPeace and the WWE. Nice job!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card" style={{width: '18rem'}}>
              <Card.Body>
                <Card.Title>LGBTQ+ Rights</Card.Title>
                <Card.Subtitle>May 2020-Current</Card.Subtitle>
                <Card.Text>You donated $10 a month, and $50 total. Your money went to prominant
                  organizations such as the trevor project and the WWE. Fuck ya!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card" style={{width: '18rem'}}>
              <Card.Body>
                <Card.Title>LGBTQ+ Rights</Card.Title>
                <Card.Subtitle>May 2020-Current</Card.Subtitle>
                <Card.Text>You donated $10 a month, and $50 total. Your money went to prominant
                  organizations such as the trevor project and the WWE. Fuck ya!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card" style={{width: '18rem'}}>
              <Card.Body>
                <Card.Title>LGBTQ+ Rights</Card.Title>
                <Card.Subtitle>May 2020-Current</Card.Subtitle>
                <Card.Text>You donated $10 a month, and $50 total. Your money went to prominant
                  organizations such as the trevor project and the WWE. Fuck ya!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        
      </div>
    </>
  );
};
