import React, { useState, useEffect } from "react";
import {
  Image,
  ListGroup
} from 'react-bootstrap';
import "./Orgs.scss";
import MenuBar from 'components/menubar/MenuBar.js';
import holder from 'assets/images/placeholder.png';

export default () => {
  const [featOrgs, setFeatOrgs] = useState([])
  const [nonFeatOrgs, setNonFeatOrgs] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch("/orgs/featured/", requestOptions)
      .then(res => res.json())
      .then(featOrgsData => {
        setFeatOrgs(featOrgsData)
      })
    fetch("/orgs/nonfeatured/", requestOptions)
      .then(res => res.json())
      .then(nonFeatOrgsData => {
        setNonFeatOrgs(nonFeatOrgsData)
      })
  }, [])

  return (
    <>
      <MenuBar activeTab="orgs" />
      <div className="main">
        <h1>Organizations</h1>
        <h2 className="section-header">This month's featured organizations</h2>
        <ListGroup variant="flush">
          {(featOrgs.map((orgData, i) => 
            <ListGroup.Item className="org" key={i}>
              <Image className="org-pic" src={holder} rounded />
              <div className="org-info">
                <h4 className="org-title">{orgData.name}</h4>
                <p className="org-desc">
                  {orgData.mission}
              </p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <h2 className="section-header">Organizations we've donated to in the past</h2>
        <ListGroup variant="flush">
          {(nonFeatOrgs.map((orgData, i) => 
            <ListGroup.Item className="org" key={i}>
              <Image className="org-pic" src={holder} rounded />
              <div className="org-info">
                <h4 className="org-title">{orgData.name}</h4>
                <p className="org-desc">
                  {orgData.mission}
              </p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}
