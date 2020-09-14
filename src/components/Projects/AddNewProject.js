import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	active: Yup.boolean(),
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
	projectManager: Yup.string().required('required'),
})

export default function addNewProject() {
	return (
		<div className="container mt-3">
			<h3 className="">Add New Project</h3>
			<Formik
				initialValues={{
					active: true,
					completed: false,
					projectName: '',
					projectOwnerFirstName: '',
					projectOwnerLastName: '',
					ownerCompany: '',
					ownerPhone: '',
					ownerEmail: '',
					ownerRole: '',
					additionalInfo: '',
					projectManager: '',
					teamLead: '',
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					async function postData(url = '', data = {}) {
						// Default options are marked with *
						const response = await fetch(url, {
							method: 'POST', // *GET, POST, PUT, DELETE, etc.
							headers: {
								'Content-Type': 'application/json',
							},
							redirect: 'follow', // manual, *follow, error
							body: JSON.stringify(values), // body data type must match "Content-Type" header
						})
						return response.json() // parses JSON response into native JavaScript objects
					}

					postData('http://REACT-', { answer: 42 }).then(data => {
						console.log(data) // JSON data parsed by `data.json()` call
					})
					setSubmitting(false)
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
								<Field
									className="form-check-input"
									type="checkbox"
									id="active"
									name="active"
								/>
								<label className="form-check-label" htmlFor="active">
									Active
								</label>
							</div>
							<div className="form-check form-check-inline col">
								<Field
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
						<label htmlFor="projectManager">Project Manager</label>
						<Field as="select" name="projectManager" className="form-control">
							<option value="">Select...</option>
							<option value="none">None</option>
						</Field>
						{errors.projectManager && touched.projectManager ? (
							<div>{errors.projectManager}</div>
						) : null}
						<label htmlFor="teamLead">Team Lead</label>
						<Field as="select" name="teamLead" className="form-control">
							<option value="">Select...</option>
							<option value="none">None</option>
						</Field>
						{errors.teamLead && touched.teamLead ? (
							<div>{errors.teamLead}</div>
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
