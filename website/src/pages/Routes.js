import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import About from "./about/About";
import Account from "./account/Account"
import Contact from "./contact/Contact"
import Login from "./login/Login"
import LoginRedirect from "./login/LoginRedirect"
import Choose from "./login/Choose"
import Orgs from "./orgs/Orgs"
import Subscribe from "./subscribe/Subscribe";
import Home from './home/Home'
import UserProvider from 'providers/UserProvider';


export default () => {
  return (
    <UserProvider>
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
            <Route path="/login/after">
              <LoginRedirect />
            </Route>
            <Route path="/login/choose">
              <Choose />
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
    </UserProvider>
  );
};
