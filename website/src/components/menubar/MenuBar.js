import React from 'react';
import {
	Navbar,
	Nav,
	Button
} from 'react-bootstrap';
import './MenuBar.scss';
import { Redirect } from 'react-router-dom';
import * as firebase from "firebase/app";
import 'firebase/auth'

export default (activeTab) => {

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
			</Nav>
			<Button href="/login">Log In</Button>
			<p id='user-display-name' style={{color: 'white'}}></p>
			<Button onClick={handleClick}>Sign Out</Button>
		</Navbar>
	)
}
