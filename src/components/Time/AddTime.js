import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	time: Yup.number()
		.min(0.25, 'Time spent must be more than zero.')
		.required('required'),
})

export default function addNewtime() {
	return (
		<div className="container mt-3">
			<h3 className="">Add New Time</h3>
			<Formik
				initialValues={{
					time: '',
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
							name="time"
							className="form-control  "
							type="number"
							step=".25"
							min=".25"
						/>
						{errors.time && touched.time ? <div>{errors.time}</div> : null}
						<Field name="date" className="form-control" type="date" />
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
