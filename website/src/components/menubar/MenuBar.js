import React from 'react';
import {
	Navbar,
	Nav,
	Button
} from 'react-bootstrap';
import './MenuBar.scss';

export default (activeTab) => {
	return (
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
