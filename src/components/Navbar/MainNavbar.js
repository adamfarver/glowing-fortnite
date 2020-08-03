import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'

function MainNavbar() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home" className={'ml-5'}>
				Team Time Track
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#dashboard">Dashboard</Nav.Link>
					<Nav.Link href="#projects">Projects</Nav.Link>
					<Nav.Link href="#users">Users</Nav.Link>
					<NavDropdown title="Admin" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">
							Action
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
							Another action
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">
							Something
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">
							Separated link
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Button className={'ml-5 mr-5'} variant="outline-success">
					Add Time
				</Button>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default MainNavbar
