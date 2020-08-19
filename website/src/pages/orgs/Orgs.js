import React, { useState, useEffect } from "react";
import {
  Image,
  ListGroup
} from 'react-bootstrap';
import "./Orgs.scss";
import MenuBar from 'components/menubar/MenuBar.js';
import holder from 'assets/images/placeholder.png';

export default () => (
  <>
    <MenuBar activeTab="orgs" />
    <div className="main">
      <h1>Organizations</h1>
      <h2 className="section-header">Next month's featured organizations</h2>
      <ListGroup variant="flush">
        <ListGroup.Item className="org">
          <Image className="org-pic" src={holder} rounded />
          <div className="org-info">
            <h4 className="org-title">Organization 1</h4>
            <p className="org-desc">
              Info
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="org">
          <Image className="org-pic" src={holder} rounded />
          <div className="org-info">
            <h4 className="org-title">Organization 2</h4>
            <p className="org-desc">
              Info
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="org">
          <Image className="org-pic" src={holder} rounded />
          <div className="org-info">
            <h4 className="org-title">Organization 3</h4>
            <p className="org-desc">
              Info
            </p>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <h2 className="section-header">Organizations we've donated to in the past</h2>
      <ListGroup variant="flush">
        <ListGroup.Item className="org">
          <Image className="org-pic" src={holder} rounded />
          <div className="org-info">
            <h4 className="org-title">Organization 1</h4>
            <p className="org-desc">
              Info
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="org">
          <Image className="org-pic" src={holder} rounded />
          <div className="org-info">
            <h4 className="org-title">Organization 2</h4>
            <p className="org-desc">
              Info
            </p>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="org">
          <Image className="org-pic" src={holder} rounded />
          <div className="org-info">
            <h4 className="org-title">Organization 3</h4>
            <p className="org-desc">
              Info
            </p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  </>
);
