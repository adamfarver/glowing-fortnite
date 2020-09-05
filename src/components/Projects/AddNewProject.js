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
						<div className="form-row ml-3">
							<Field
								name="projectName"
								className="form-control col-md-8 "
								placeholder="Project Name"
							/>
							{errors.projectName && touched.projectName ? (
								<div>{errors.projectName}</div>
							) : null}
							<div className="col-md-4 d-flex align-items-center container">
								<div className="form-check form-check-inline col">
									<input
										class="form-check-input"
										type="checkbox"
										id="active"
										value="active"
									/>
									<label class="form-check-label" for="active">
										Active
									</label>
								</div>
								<div className="form-check form-check-inline col">
									<input
										class="form-check-input"
										type="checkbox"
										id="complete"
										value="complete"
									/>
									<label class="form-check-label" for="complete">
										Complete
									</label>
								</div>
							</div>
						</div>
						<div className="form-row m-3">
							<Field
								className="form-control"
								name="additionalInfo"
								placeholder="Additional Information"
								as="textarea"
							/>
							{errors.additionalInfo && touched.additionalInfo ? (
								<div>{errors.additionalInfo}</div>
							) : null}
						</div>
						<h4 className="ml-3">Client Information</h4>
						<div className="form-row ">
							<Field
								className="form-control col-md mx-3 mb-3"
								name="projectOwnerFirstName"
								placeholder="First Name"
							/>
							{errors.projectOwnerFirstName && touched.projectOwnerFirstName ? (
								<div>{errors.projectOwnerFirstName}</div>
							) : null}
							<Field
								className="form-control col-md mx-3 mb-3"
								name="projectOwnerLastName"
								placeholder="Last Name"
							/>
							{errors.projectOwnerLastName && touched.projectOwnerLastName ? (
								<div>{errors.projectOwnerLastName}</div>
							) : null}
						</div>
						<div className="form-row ">
							<Field
								className="form-control col-md  mx-3 mb-3"
								name="ownerCompany"
								placeholder="Company"
							/>
							{errors.ownerCompany && touched.ownerCompany ? (
								<div>{errors.ownerCompany}</div>
							) : null}
							<Field
								className="form-control col-md mx-3 mb-3"
								name="ownerRole"
								placeholder="Role"
							/>
							{errors.ownerCompany && touched.ownerCompany ? (
								<div>{errors.ownerCompany}</div>
							) : null}
						</div>
						<div className="form-row ">
							<Field
								className="form-control col-md mx-3 mb-3"
								name="ownerPhone"
								placeholder="Phone"
							/>
							{errors.ownerPhone && touched.ownerPhone ? (
								<div>{errors.ownerPhone}</div>
							) : null}
							<Field
								className="form-control col-md mx-3 mb-3"
								name="ownerEmail"
								placeholder="Email"
							/>
							{errors.ownerEmail && touched.ownerEmail ? (
								<div>{errors.ownerEmail}</div>
							) : null}
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
