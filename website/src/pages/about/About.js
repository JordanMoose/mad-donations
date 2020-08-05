import React, { useState, useEffect } from "react";
import "./About.css";

export default () => {
  console.log('Render')
  const [currentUser, setCurrentUser] = useState("baljeet");

  useEffect(() => {
    fetch("/getUser/name/Danielle")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentUser(data.firstName);
      });
  }, []);

  return (
    <div>
      <div>This is the about page.</div>
      <div>Current user: {currentUser}</div>
    </div>
  );
};
