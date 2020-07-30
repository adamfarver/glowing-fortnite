/**
 * @prettier
 */
import React from 'react'
import './App.css'

import ViewAllUsers from './components/Users/ViewAllUsers'
import MainNavbar from './components/Navbar/MainNavbar'

function App() {
	return (
		<>
			<MainNavbar />
			<div className="allUsers">
				<ViewAllUsers />
			</div>
		</>
	)
}

export default App
