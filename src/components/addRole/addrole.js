/**
 * @prettier
 */

import React, { Component } from 'react'
class AddRole extends Component {
	constructor(props) {
		super(props)
		this.state = {
			roleName: '',
			create: false,
			read: false,
			update: false,
			delete: false,
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		const { id, value, checked } = event.target

		switch (id) {
			case 'roleName':
				this.setState({ roleName: value })
				break

			case 'create':
				this.setState({ create: checked })
				break
			case 'read':
				this.setState({ read: checked })
				break
			case 'update':
				this.setState({ update: checked })
				break
			case 'delete':
				this.setState({ delete: checked })
				break
			default:
				break
		}
	}
	handleSubmit(e) {
		e.preventDefault()
		console.log(this.state)
	}
	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<label>
						Role Name:
						<input
							type="text"
							value={this.state.roleName}
							onChange={this.handleChange}
							id="roleName"
						/>{' '}
					</label>
					<label>
						Create:
						<input
							type="checkbox"
							value={this.state.create}
							onChange={this.handleChange}
							id="create"
						/>{' '}
					</label>
					<label>
						Read:
						<input
							type="checkbox"
							value={this.state.read}
							onChange={this.handleChange}
							id="read"
						/>{' '}
					</label>
					<label>
						Update:
						<input
							type="checkbox"
							value={this.state.update}
							onChange={this.handleChange}
							id="update"
						/>{' '}
					</label>
					<label>
						Delete:
						<input
							type="checkbox"
							value={this.state.delete}
							onChange={this.handleChange}
							id="delete"
						/>{' '}
					</label>
					<input type="submit" value="Submit" />
				</form>
			</>
		)
	}
}
export default AddRole
