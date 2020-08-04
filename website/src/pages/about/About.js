import React, { useState, useEffect } from "react";
import "./About.css";

export default () => {
  const [currentUser, setCurrentUser] = useState("baljeet");
  console.log("Hello");

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentUser(data.name);
      });
  }, []);

  return (
    <div>
      <div>This is the about page.</div>
      <div>Current user: {currentUser}</div>
    </div>
  );
};
