import React, { useContext } from 'react';
import {
	Navbar,
	Nav,
	Button
} from 'react-bootstrap';
import './MenuBar.scss';
import { Redirect } from 'react-router-dom';
import * as firebase from "firebase/app";
import 'firebase/auth'
import { UserContext } from 'providers/UserProvider';

export default (activeTab) => {
	const user = useContext(UserContext);

	const handleClick = () => {
		firebase.auth().signOut().then(() => {
			return <Redirect to="/home" />
		}).catch(() => {
			console.log("FAILED TO SIGN OUT")
		})
	}

	return (
		<Navbar sticky bg="dark" variant="dark">
			<Navbar.Brand href="/home">MAD Donations</Navbar.Brand>
			<Nav activeKey={"/" + activeTab}>
				<Nav.Link href="/about">About</Nav.Link>
				<Nav.Link href="/orgs">Organizations</Nav.Link>
				<Nav.Link href="/contact">Contact Us</Nav.Link>
				{user ? <Nav.Link href="/account">Account</Nav.Link> : null}
			</Nav>
			{user ? <Button onClick={handleClick} href="/home">Sign Out</Button> : <Button href="/login">Log In</Button>}
			<p id='user-display-name' style={{color: 'white'}}>{(user && ("What's up " + user.displayName)) || "Hello"}</p>
		</Navbar>
	)
}
