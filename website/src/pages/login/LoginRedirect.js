import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { auth } from 'firebase.js'
import { UserContext } from 'providers/UserProvider';
import Choose from './Choose'

export default () => {
    const user = useContext(UserContext);
    if (user == null) {
       return <div>Loading...</div>
    } else {
        if (user.metadata.creationTime == user.metadata.lastSignInTime) {
            return <Choose />
        } else {
            return <Redirect to="/home" />
        }
    }
}
