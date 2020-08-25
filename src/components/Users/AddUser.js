import React from 'react'
import { useForm } from 'react-hook-form'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

export default function AddUser() {
	const { register, handleSubmit, watch, errors } = useForm()
	const onSubmit = async function sendData(data) {
		const config = {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.

			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		}
		await fetch('http://localhost:5001/api/user', config)
			.then((response) => response.json())
			.then((response) => console.log(response))
	}
	return (
		<Container>
			<div className="container">
				<h1 className={'my-3'}>Add New User</h1>
			</div>
			<div className={'bg-light outlined p-1'}>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<div className="container ">
						<Form.Row className={'align-items-center my-2'}>
							<Col sm={11}>
								<h2 className={'text-muted '}>User Details</h2>
							</Col>
							<Col>
								<Form.Check
									type={'checkbox'}
									label={'Active'}
									name={'active'}
									ref={register}
								/>
							</Col>
						</Form.Row>
						<Form.Group as={Row} controlId="name">
							<Form.Label column sm={2}>
								First Name
							</Form.Label>
							<Col>
								<Form.Control
									name="firstName"
									type="text"
									placeholder="Enter First Name"
									ref={register({ required: true })}
								/>
								{errors.firstName && (
									<p className={'text-danger'}>
										A first name is required.
									</p>
								)}
							</Col>
							<Form.Label column sm={2}>
								Last Name
							</Form.Label>
							<Col>
								<Form.Control
									name="lastName"
									type="text"
									placeholder="Enter Last Name"
									ref={register({ required: true })}
								/>
								{errors.lastName && (
									<p className={'text-danger'}>
										A last name is required.
									</p>
								)}
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="contactInfo">
							<Form.Label column sm={2}>
								Phone
							</Form.Label>
							<Col>
								<Form.Control
									name="phone"
									type="text"
									placeholder="Enter Phone"
									ref={register({ required: true })}
								/>
								{errors.phone && (
									<p className={'text-danger'}>
										A phone is required.
									</p>
								)}
							</Col>
							<Form.Label column sm={2}>
								Email
							</Form.Label>
							<Col sm={4}>
								<Form.Control
									name="email"
									type="text"
									placeholder="Enter Email"
									ref={register({ required: true })}
								/>
								{errors.email && (
									<p className={'text-danger'}>
										A email is required.
									</p>
								)}
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
