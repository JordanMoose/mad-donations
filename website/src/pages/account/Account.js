import React, { useState, useEffect, useContext } from "react";
import "./Account.css";
import MenuBar from 'components/menubar/MenuBar.js';
import { UserContext } from 'providers/UserProvider';
import {Nav, Tab, Row, Col} from 'react-bootstrap';
import SubscriptionCard from 'components/subscriptionCards/SubscriptionCard.js';
import Settings from "./Settings.js"

export default () => {
  const user = useContext(UserContext);
  return (
    <>
      <MenuBar activeTab="account" />
      <Tab.Container id="sidebar" defaultActiveKey="subscriptions">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="side-column">
              <Nav.Item>
                <Nav.Link eventKey="subscriptions">Subscriptions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="settings">Settings</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="subscriptions">
                <SubscriptionCard name="Adam"></SubscriptionCard>
              </Tab.Pane>
              <Tab.Pane eventKey="settings">
                <Settings />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};
