/**
 * @prettier
 */
import React from 'react'
import './App.css'

import MainNavbar from './components/Navbar/MainNavbar'
import ShowAllProjects from './components/Projects/ShowAllProjects'
import AddProject from './components/Projects/AddNewProject'
import AddUser from './components/Users/AddUser'
import ShowAllUsers from './components/Users/ViewAllUsers'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EditProject from './components/Projects/EditProject'
function App(props) {
	return (
		<Router>
			<MainNavbar />
			<Switch>
				<Route path="/allprojects">
					<ShowAllProjects />
				</Route>
				<Route path="/allusers">
					<ShowAllUsers />
				</Route>
				<Route path="/adduser">
					<AddUser />
				</Route>
				<Route path="/addproject">
					<AddProject />
				</Route>
				<Route path="/editproject">
					<EditProject />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
