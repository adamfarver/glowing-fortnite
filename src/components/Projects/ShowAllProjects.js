import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'

export default function ShowAllProjects(props) {
	const [projects, setProjects] = useState([])
	useEffect(() => {
		async function getData() {
			const projects = await fetch(
				`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/api/project`
			)
			const parsedProjects = await projects.json()
			setProjects(parsedProjects)
		}
		getData()
	}, [])
	return (
		<Container>
			<h3 className={'mt-3'}>All Projects</h3>
			<ul>
				{projects ? (
					projects.map((project) => (
						<li key={project._id}>{project.projectName}</li>
					))
				) : (
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				)}
			</ul>
		</Container>
	)
}
