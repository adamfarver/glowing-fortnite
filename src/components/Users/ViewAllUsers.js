import React, { useState, useEffect } from 'react'

import { Spinner } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

const ViewAllUsers = () => {
	const [allusers, setUsers] = useState([])
	const [isLoading, setLoading] = useState(true)
	useEffect(() => {
		const getAllUsers = async function () {
			const response = await fetch('http://localhost:5001/api/user')
			const jsonResponse = await response.json()
			setUsers(jsonResponse)
			setLoading(false)
		}
		getAllUsers()
	}, [allusers])

	return (
		<div className="container">
			<ul className="mt-4">
				{isLoading ? (
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				) : null}
				{allusers.map((user) => {
					return <li key={user._id}>{user.firstName}</li>
				})}
			</ul>
		</div>
	)
}

export default ViewAllUsers
