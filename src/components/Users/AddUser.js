import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.max(50, 'Must have first name shorter than 50 characters.')
		.required('required'),
	lastName: Yup.string()
		.max(50, 'Must have last name shorter than 50 characters.')
		.required('required'),
	phone: Yup.string().required('required'),
	email: Yup.string().email().required('required'),
})

export default function addNewUser() {
	return (
		<div className="container mt-3">
			<h3 className="">Add New User</h3>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					role: '',
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
						<div className="form-row ">
							<Field
								className="form-control col-md mx-3 mb-3"
								name="firstName"
								placeholder="First Name"
							/>
							{errors.firstName && touched.firstName ? (
								<div>{errors.firstName}</div>
							) : null}
							<Field
								className="form-control col-md mx-3 mb-3"
								name="lastName"
								placeholder="Last Name"
							/>
							{errors.lastName && touched.lastName ? (
								<div>{errors.lastName}</div>
							) : null}
						</div>
						<div className="form-row">
							<Field
								className="form-control col-md mx-3 mb-3"
								name="email"
								placeholder="Email"
								autocomplete="email"
							/>
							{errors.email && touched.email ? <div>{errors.email}</div> : null}
							<Field
								className="form-control col-md mx-3 mb-3"
								name="phone"
								placeholder="Phone"
							/>
							{errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
						</div>
						<div className="form-row">
							<button className="btn btn-primary mx-3" type="submit">
								Submit
							</button>
							<button className="btn btn-danger" type="reset">
								Reset
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}
