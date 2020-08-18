import React, { useContext } from 'react';
import {
	Navbar,
	Nav,
	Button,
	NavDropdown
} from 'react-bootstrap';
import './MenuBar.scss';
import { Redirect } from 'react-router-dom';
import { auth } from 'firebase.js'
import { UserContext } from 'providers/UserProvider';

export default (activeTab) => {
	const user = useContext(UserContext);

	const handleClick = () => {
		auth.signOut().then(() => {
			return <Redirect to="/home" />
		}).catch(() => {
			console.log("FAILED TO SIGN OUT")
		})
	}

	var ret;
	if (user != null) {
		ret = (
			<Navbar sticky bg="dark" variant="dark">
				<Navbar.Brand href="/home">MAD Donations</Navbar.Brand>
				<Nav activeKey={"/" + activeTab}>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/orgs">Organizations</Nav.Link>
					<Nav.Link href="/contact">Contact Us</Nav.Link>
					<NavDropdown title={user.displayName}>
						<NavDropdown.Item href="/account">Account</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item onClick={handleClick} href="/home">Sign Out</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar>
		)
	} else {
		ret = (
			<Navbar sticky bg="dark" variant="dark">
				<Navbar.Brand href="/home">MAD Donations</Navbar.Brand>
				<Nav activeKey={"/" + activeTab}>
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/orgs">Organizations</Nav.Link>
					<Nav.Link href="/contact">Contact Us</Nav.Link>
				</Nav>
				<Button href="/login">Log In</Button>
			</Navbar>
		)
	}
	return ret
}
