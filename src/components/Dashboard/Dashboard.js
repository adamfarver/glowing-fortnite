import React from 'react'
import DashList from './DashList'
import { Row, Col, Card, Image, Button } from 'react-bootstrap'
import AddNewProject from '../Projects/AddNewProject'

function Dashboard(props) {
	const { projectName } = props
	return (
		<>
			<AddNewProject />
			{/* <h1>{projectName}</h1>
			<Row className={'mb-5'}>
				<Col xs={12} md>
					<DashList name={'Priority Tasks'} />
				</Col>
				<Col>
					<Card style={{ height: '100%' }}>
						<Card.Body>
							<Card.Img></Card.Img>
							<Card.Title>Burn Down Graph</Card.Title>

							<Card.Text>
								This is where the burndown graph goes.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card style={{ height: '100%' }}>
						<Card.Body>
							<Card.Title>Days Left In Sprint</Card.Title>

							<Card.Text>5 Days</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ height: '100%' }}>
						<Card.Body>
							<Card.Title>Total Open Tasks</Card.Title>

							<Card.Text>15 Open Tasks</Card.Text>
							<Button variant="primary">View Tasks</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ height: '100%' }}>
						<Card.Body>
							<Card.Title>Total Burn</Card.Title>

							<Card.Text>30 Hours</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row> */}
		</>
	)
}

export default Dashboard
