/**
 * @prettier
 */
import React from 'react'
import './App.css'

import ViewAllUsers from './components/Users/ViewAllUsers'
import MainNavbar from './components/Navbar/MainNavbar'
import AddNewProject from './components/Projects/AddNewProject'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
	return (
		<>
			<MainNavbar />
			<div className="container">
				<Dashboard />
			</div>
		</>
	)
}

export default App
