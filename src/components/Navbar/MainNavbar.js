import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function MainNavbar() {
	return (
		<Navbar bg="primary" variant="dark" expand="lg">
			<Navbar.Brand href="#home">Team Time Track</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<NavDropdown title="Projects" id="projects-dropdown">
						<NavDropdown.Item href="/allprojects">
							Projects List
						</NavDropdown.Item>
						<NavDropdown.Item href="/addproject">
							Add Project
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Users" id="users-dropdown">
						<NavDropdown.Item href="/allusers">
							Users List
						</NavDropdown.Item>
						<NavDropdown.Item href="/adduser">
							Add User
						</NavDropdown.Item>
					</NavDropdown>
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
					<Nav.Link href="#logout">Logout</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default MainNavbar
