import React from 'react'

import { Field, Form, Formik } from 'formik'
import api from '../ThirdParty/Api'

const AddProject = () => {
	return (
		<div>
			<Formik
				initialValues={{
					projectName: '',
					completed: false,
					userCreated: '',
					userModified: '',
					additionalInfo: '',
					active: true,
					projectManager: '',
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
						<label htmlFor="projectName">Project Name</label>
						<Field
							type="text"
							name="projectName"
							placeholder="Project Name"
						/>

						<label htmlFor="active">Active</label>
						<Field type="checkbox" name="active" />

						<label htmlFor="completed">Completed</label>
						<Field type="checkbox" name="completed" />

						<label htmlFor="projectManager">Project Manager</label>
						<Field as="select" name="projectManager">
							<option value="chad">Chad</option>
							<option value="mark">Mark</option>
							<option value="tom">Tom</option>
						</Field>

						<label htmlFor="additionalInfo">Additional Info</label>
						<Field as="textarea" name="additionalInfo" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
export default AddProject
