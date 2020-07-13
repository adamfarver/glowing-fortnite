import React from 'react'

import { Field, Form, Formik } from 'formik'
import api from '../ThirdParty/Api'

const AddUser = () => (
	<div>
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				role: '',
			}}
			onSubmit={(values) => {
				api.post(
					`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_PORT}`,
					values
				).catch(function (err) {
					console.log(err)
				})
			}}
		>
			{(props) => (
				<Form>
					<label htmlFor="firstName">First Name</label>
					<Field
						type="text"
						name="firstName"
						placeholder="First Name"
					/>

					<label htmlFor="lastName">Last Name</label>
					<Field
						type="text"
						name="lastName"
						placeholder="Last Name"
					/>
					<label htmlFor="email">Email</label>
					<Field type="text" name="email" placeholder="Email" />
					<label htmlFor="phone">Phone</label>
					<Field
						type="text"
						name="phone"
						placeholder="555-555-5555"
					/>
					<label htmlFor="role">Role</label>
					<Field as="select" name="Role">
						{/* TODO: Map Through Possible roles */}
						<option value="admin">Admin</option>
						<option value="manager">Manager</option>
						<option value="user">User</option>
					</Field>
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	</div>
)
export default AddUser
