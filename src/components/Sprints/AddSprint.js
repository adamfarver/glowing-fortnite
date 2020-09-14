import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	sprint: Yup.number()
		.min(1, 'Sprint number must be at least greater than 1.')
		.required('Required Field'),
	sprintType: Yup.string().required('Please choose a type of sprint.'),
	//	projectManager: Yup.String().required('This information is required.'),
	//	dateStart: Yup.date(),
	//	dateEnd: Yup.date(),
})

export default function addNewSprint() {
	const today = new Date()
	const now = today.toISOString().slice(0, 10)
	return (
		<div className="container mt-3">
			<h3 className="">Add New Sprint</h3>
			<Formik
				initialValues={{
					sprint: 1,
					sprintType: 'Code Sprint',
					dateStart: now,
					//					active: '',
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2))
						setSubmitting(false)
					}, 400)
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<Field type="number" min="1" name="sprint" />
						<Field as="select" name="sprintType">
							<option value="Design Sprint">Design Sprint</option>
							<option value="Code Sprint">Code Sprint</option>
						</Field>
						<Field type="date" name="dateStart" placeholder={now} />
						<button className="btn btn-primary" type="submit">
							Submit
						</button>
						<button className="btn btn-danger ml-3" type="reset">
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
