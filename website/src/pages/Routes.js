import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import About from "./about/About";
import Account from "./account/Account"
import Contact from "./contact/Contact"
import Login from "./login/Login"
import Orgs from "./orgs/Orgs"
import Subscribe from "./subscribe/Subscribe";
import Home from './home/Home'

export default () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orgs">
            <Orgs />
          </Route>
          <Route path="/subscribe">
            <Subscribe />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
          <Route >
            <div>You're not supposed to be here!</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
