import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	roleName: Yup.string()
		.min(2, 'Role name must be longer than 2 characters.')
		.max(50, 'Must have first name shorter than 50 characters.')
		.required('required'),
})

export default function addRole() {
	return (
		<div className="container mt-3">
			<h3 className="">Add New Role</h3>
			<Formik
				initialValues={{
					roleName: '',
					active: true,
					create: false,
					read: false,
					update: false,
					delete: false,
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
						<div className="form-row">
							<Field
								className="form-control col-md-8 mb-3"
								name="roleName"
								placeholder="Role Name"
							/>
							{errors.roleName && touched.roleName ? (
								<div>{errors.roleName}</div>
							) : null}
							<div className="form-check form-check-inline col-md-4 m-0 mb-3">
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
						</div>
						<div className="form-row">
							<h4 className="text-muted">Priviledges</h4>
						</div>
						<div className="form-row mb-3">
							<div className="form-check form-check-inline m-0 col-6 col-sm-3">
								<input
									className="form-check-input"
									type="checkbox"
									id="read"
									value="read"
								/>
								<label className="form-check-label" htmlFor="read">
									Read
								</label>
							</div>
							<div className="form-check form-check-inline m-0 col-6 col-sm-3 ">
								<input
									className="form-check-input"
									type="checkbox"
									id="create"
									value="create"
								/>
								<label className="form-check-label" htmlFor="create">
									Create
								</label>
							</div>
							<div className="form-check form-check-inline  m-0 col-6 col-sm-3">
								<input
									className="form-check-input"
									type="checkbox"
									id="update"
									value="update"
								/>
								<label className="form-check-label" htmlFor="update">
									Update
								</label>
							</div>
							<div className="form-check form-check-inline  m-0 col-6 col-sm-3">
								<input
									className="form-check-input"
									type="checkbox"
									id="delete"
									value="delete"
								/>
								<label className="form-check-label" htmlFor="delete">
									Delete
								</label>
							</div>
						</div>
						<div className="form-row">
							<button className="btn btn-primary" type="submit">
								Submit
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}
