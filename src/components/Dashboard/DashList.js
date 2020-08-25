import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

function DashList(props) {
	const { name } = props
	return (
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<ListGroup className={''}>
					<ListGroup.Item className={'float-left'}>
						Item 1
						<a className={'float-right'} href={'#home'}>
							Claim
						</a>
					</ListGroup.Item>
					<ListGroup.Item>Item 2</ListGroup.Item>
					<ListGroup.Item>Item 3</ListGroup.Item>
					<ListGroup.Item>Item 4</ListGroup.Item>
					<ListGroup.Item>Item 5</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	)
}

export default DashList
