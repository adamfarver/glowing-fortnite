import React, { useState, useEffect } from 'react'

export default function Swapi() {
	// useState returns an array that contains the variable and the function to set the state.
	// The passed argument is the initial value of the variable, in this case, email.
	const [email, setEmail] = useState('')
	const [user, setUser] = useState({})
	useEffect(() => {
		const config = {
			method: 'GET',
			// headers: {
			// 	'Content-Type': 'application/json',
			// },
		}
		fetch('https://swapi.dev/api/people/1', config)
			.then((response) => response.json())
			.then((response) => setUser(response))
	}, [])

	return (
		<div className="container">
			<p>Your Email: {email}</p>
			<input
				type="email"
				name=""
				id="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<h1>User Stats</h1>
			<p>{user.name}</p>
			<p>{user.height}</p>
		</div>
	)
}
