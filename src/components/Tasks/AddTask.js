import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	taskName: Yup.string()
		.max(15, 'Must have task name shorter than 15 characters.')
		.required('required'),
	//	additionalInfo: Yup.string(),
})

export default function addNewtask() {
	return (
		<div className="container mt-3">
			<h3 className="">Add New Task</h3>
			<Formik
				initialValues={{
					taskName: '',
					additionalInfo: '',
					active: false,
					complete: false,
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
						<Field
							name="taskName"
							className="form-control  "
							placeholder="Task Name"
						/>
						{errors.taskName && touched.taskName ? (
							<div>{errors.taskName}</div>
						) : null}
						<div>
							<div className="form-check form-check-inline col">
								<input
									className="form-check-input"
									type="checkbox"
									id="active"
									value="active"
								/>
								<label className="form-check-label" htmlFor="active">
									Active
								</label>
							</div>
							<div className="form-check form-check-inline col">
								<input
									className="form-check-input"
									type="checkbox"
									id="complete"
									value="complete"
								/>
								<label className="form-check-label" htmlFor="complete">
									Complete
								</label>
							</div>
						</div>
						<Field
							className="form-control"
							name="additionalInfo"
							placeholder="Additional Information"
							as="textarea"
						/>
						{errors.additionalInfo && touched.additionalInfo ? (
							<div>{errors.additionalInfo}</div>
						) : null}
						<button className="btn btn-primary " type="submit">
							Submit
						</button>
						<button className="btn btn-danger" type="reset">
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
