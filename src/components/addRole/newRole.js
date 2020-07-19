import React from 'react'

import { Field, Form, Formik } from 'formik'
import api from '../ThirdParty/Api'

const newRole = () => (
	<div>
		<Formik
			initialValues={{
				roleName: '',
				create: false,
				read: true,
				update: false,
				remove: false,
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
					<Field
						type="text"
						name="roleName"
						placeholder="Role Name"
					/>

					<label htmlFor="create">Create</label>
					<Field as="select" name="create">
						<option value="true">Yes</option>

						<option value="false">No</option>
					</Field>

					<label htmlFor="read">Read</label>
					<Field as="select" name="read">
						<option value="true">Yes</option>

						<option value="false">No</option>
					</Field>

					<label htmlFor="update">Update</label>
					<Field as="select" name="update">
						<option value="true">Yes</option>

						<option value="false">No</option>
					</Field>

					<label htmlFor="remove">Remove</label>
					<Field as="select" name="remove">
						<option value="true">Yes</option>

						<option value="false">No</option>
					</Field>
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	</div>
)
export default newRole
