/**
 * @prettier
 */
import React from 'react'
import './App.css'
// import AddRole from './components/addRole/addrole'
import NewRole from './components/addRole/newRole'
import AddUser from './components/users/AddUser'
import newRole from './components/addRole/newRole'
import AddProject from './components/projects/addProjects'
import AddTask from './components/addTask/AddTask'

function App() {
	return (
		<>
			<div className="addrole">
				<AddTask />
			</div>
		</>
	)
}

export default App
