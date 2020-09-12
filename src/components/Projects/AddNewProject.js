import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	projectName: Yup.string()
		.max(15, 'Must have project name shorter than 15 characters.')
		.required('required'),
	//	additionalInfo: Yup.string(),
	projectOwnerFirstName: Yup.string()
		.max(15, 'Must have first name shorter than 15 characters.')
		.required('required'),
	projectOwnerLastName: Yup.string()
		.max(15, 'Must have last name shorter than 15 characters.')
		.required('required'),
	ownerCompany: Yup.string()
		.max(15, 'Must have company name shorter than 15 characters.')
		.required('required'),
	ownerPhone: Yup.string().required('required'),
	ownerEmail: Yup.string().email().required('required'),
	//	projectManager: Yup.string().required('required'),
})

export default function addNewProject() {
	return (
		<div className="container mt-3">
			<h3 className="">Add New Project</h3>
			<Formik
				initialValues={{
					projectName: '',
					projectOwnerFirstName: '',
					projectOwnerLastName: '',
					ownerCompany: '',
					ownerPhone: '',
					ownerEmail: '',
					additionalInfo: '',
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
							name="projectName"
							className="form-control  "
							placeholder="Project Name"
						/>
						{errors.projectName && touched.projectName ? (
							<div>{errors.projectName}</div>
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
						<h4 className="text-muted">Client Information</h4>
						<Field
							className="form-control "
							name="projectOwnerFirstName"
							placeholder="First Name"
						/>
						{errors.projectOwnerFirstName && touched.projectOwnerFirstName ? (
							<div>{errors.projectOwnerFirstName}</div>
						) : null}
						<Field
							className="form-control "
							name="projectOwnerLastName"
							placeholder="Last Name"
						/>
						{errors.projectOwnerLastName && touched.projectOwnerLastName ? (
							<div>{errors.projectOwnerLastName}</div>
						) : null}
						<Field
							className="form-control"
							name="ownerCompany"
							placeholder="Company"
						/>
						{errors.ownerCompany && touched.ownerCompany ? (
							<div>{errors.ownerCompany}</div>
						) : null}
						<Field
							className="form-control "
							name="ownerRole"
							placeholder="Role"
						/>
						{errors.ownerCompany && touched.ownerCompany ? (
							<div>{errors.ownerCompany}</div>
						) : null}
						<Field
							className="form-control "
							name="ownerPhone"
							placeholder="Phone"
						/>
						{errors.ownerPhone && touched.ownerPhone ? (
							<div>{errors.ownerPhone}</div>
						) : null}
						<Field
							className="form-control "
							name="ownerEmail"
							placeholder="Email"
						/>
						{errors.ownerEmail && touched.ownerEmail ? (
							<div>{errors.ownerEmail}</div>
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
