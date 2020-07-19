import React from 'react'

import { Field, Form, Formik } from 'formik'
import api from '../ThirdParty/Api'

const AddTask = () => {
	return (
		<div>
			<Formik
				initialValues={{
					taskName: '',
					dateCompleted: '',
					completed: '',
					userCreated: '',
					userModified: '',
					additionalInfo: '',
					active: '',
					project: '',
					projectManager: '',
					sprint: '',
					claimed: '',
					projectedTime: '',
					actualUsedTime: '',
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
						<label htmlFor="taskName"> Task Name </label>
						<Field
							type="text"
							name="taskName"
							placeholder="Add Contact Form"
						/>
						<label htmlFor="projectedTime"> Projected Time </label>
						<Field
							type="number"
							name="projectedTime"
							min="0"
							step=".25"
						/>
						<label htmlFor="completed">Completed</label>
						<Field type="checkbox" name="completed" />
						<label htmlFor="active">Active</label>
						<Field type="checkbox" name="active" />
						<label htmlFor="dateCompleted"> Date Completed </label>
						<Field type="date" name="dateCompleted" />
						<label htmlFor="additionalInfo">Additional Info</label>
						<Field as="textarea" name="additionalInfo" />
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
export default AddTask
