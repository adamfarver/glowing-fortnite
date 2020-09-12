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
import AddRole from './components/Roles/AddRole'
import AddTask from './components/Tasks/AddTask'
import AddTime from './components/Time/AddTime'
import AddSprint from './components/Sprints/AddSprint'
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
				<Route path="/addrole">
					<AddRole />
				</Route>
				<Route path="/addtime">
					<AddTime />
				</Route>
				<Route path="/addtask">
					<AddTask />
				</Route>
				<Route path="/editproject">
					<EditProject />
				</Route>
				<Route path="/addsprint">
					<AddSprint />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
