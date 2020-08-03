import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

function DashList() {
	return (
		<>
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>Priority Tasks</Card.Title>
					<ListGroup>
						<ListGroup.Item>Item 1</ListGroup.Item>
						<ListGroup.Item>Item 2</ListGroup.Item>
						<ListGroup.Item>Item 3</ListGroup.Item>
						<ListGroup.Item>Item 4</ListGroup.Item>
						<ListGroup.Item>Item 5</ListGroup.Item>
					</ListGroup>
				</Card.Body>
			</Card>
		</>
	)
}

export default DashList
