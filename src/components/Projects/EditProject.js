import React, { useState, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

export default function AddNewProject() {
	const { register, handleSubmit, watch, errors } = useForm()
	const [projectInfo, setProjectInfo] = useState([])
	useEffect(() => {
		async function getData() {
			const projects = await fetch(
				`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/api/project/5f31c652d5c5295130eb7983`
			)
			const parsedProject = await projects.json()
			setProjectInfo(parsedProject)
		}
		getData()
	}, [])
	const onSubmit = async function sendData(data) {
		const config = {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.

			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		}
		await fetch(
			`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}/api/project`,
			config
		)
			.then((response) => response.json())
			.then((response) => console.log(response))
	}
	const { ownerCompany } = projectInfo
	return (
		<Container>
			<div className="container">
				<h1 className={'my-3'}>Add New Project</h1>
			</div>
			<div className={'bg-light outlined p-1'}>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<div className="container">
						<h2 className={'text-muted mt-3'}>Project Details</h2>
						<Form.Group as={Row} controlId="projectName">
							<Form.Label column sm={2}>
								Project Name
							</Form.Label>
							<Col>
								<Form.Control
									name="projectName"
									type="text"
									placeholder="Enter Project Name"
									ref={register({ required: true })}
								/>
								{errors.projectName && (
									<p className={'text-danger'}>
										A project name is required.
									</p>
								)}
							</Col>
							<Col sm={1}>
								<Form.Check
									type={'checkbox'}
									label={'Active'}
									name={'active'}
									ref={register}
								/>
							</Col>
							<Col sm={2}>
								<Form.Check
									type={'checkbox'}
									label={'Completed'}
									name={'completed'}
									ref={register}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId={'additionalInfo'}>
							<Form.Label column sm={2}>
								Additional Info
							</Form.Label>
							<Col>
								<Form.Control
									as="textarea"
									rows="3"
									placeholder={'Additional Information'}
									name={'additonalInfo'}
									ref={register}
								/>
							</Col>
						</Form.Group>
					</div>
					<div className="container">
						<h3 className="text-muted">Project Owner</h3>
						<Form.Group as={Row} controlId={'projectOwner'}>
							<Form.Label column sm={2}>
								Project Owner
							</Form.Label>
							<Col>
								<Form.Control
									type="text"
									placeholder={'Project Owner'}
									name={'ownerName'}
									ref={register}
								/>
							</Col>
							<Form.Label column sm={2}>
								Company
							</Form.Label>
							<Col>
								<Form.Control
									type="text"
									placeholder={ownerCompany}
									name={'ownerCompany'}
									ref={register}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column sm={2}>
								Phone
							</Form.Label>
							<Col>
								<Form.Control
									type="text"
									placeholder={'555-555-5555'}
									name={'ownerPhone'}
									ref={register}
								/>
							</Col>
							<Form.Label column sm={2}>
								Email
							</Form.Label>
							<Col>
								<Form.Control
									type="email"
									placeholder={'Email'}
									name={'ownerEmail'}
									ref={register}
								/>
							</Col>
						</Form.Group>
					</div>
					<div className="container mt-3">
						<h3 className={'text-muted'}>Project Management</h3>
						<Form.Group as={Row} controlId={'projectManagement'}>
							<Form.Label column sm={2}>
								Project Manager
							</Form.Label>
							<Col sm={4}>
								<Form.Control
									as="select"
									name={'projectManager'}
									ref={register}
									custom
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</Form.Control>
							</Col>

							<Form.Label column sm={2}>
								Team Lead
							</Form.Label>
							<Col sm={4}>
								<Form.Control
									as="select"
									name={'teamLead'}
									ref={register}
									custom
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</Form.Control>
							</Col>
						</Form.Group>
					</div>
					<div className="container">
						<Row className={'my-3'}>
							<Col xs="auto">
								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Col>
							<Col xs="auto">
								<Button variant="danger	" type="reset">
									Reset
								</Button>
							</Col>
						</Row>
					</div>
				</Form>
			</div>
		</Container>
	)
}
