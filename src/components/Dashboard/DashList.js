import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

function DashList(props) {
	const { name } = props
	return (
		<div className={'col'}>
			<Card className={'mb-1'}>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<ListGroup>
						<ListGroup.Item>Item 1</ListGroup.Item>
						<ListGroup.Item>Item 2</ListGroup.Item>
						<ListGroup.Item>Item 3</ListGroup.Item>
						<ListGroup.Item>Item 4</ListGroup.Item>
						<ListGroup.Item>Item 5</ListGroup.Item>
					</ListGroup>
				</Card.Body>
			</Card>
		</div>
	)
}

export default DashList
