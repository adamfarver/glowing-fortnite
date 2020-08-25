import React from 'react'
import { useFormik, Field } from 'formik'
import * as Yup from 'yup'

export default function AddNewProject() {
	//	const onSubmit = async function sendData(data) {
	//		const config = {
	//			method: 'POST', // *GET, POST, PUT, DELETE, etc.
	//
	//			headers: {
	//				'Content-Type': 'application/json',
	//				// 'Content-Type': 'application/x-www-form-urlencoded',
	//			},
	//			body: JSON.stringify(data), // body data type must match "Content-Type" header
	//		}
	//		await fetch('http://localhost:5001/api/project', config)
	//			.then((response) => response.json())
	//			.then((response) => console.log(response))
	//	}
	const formik = useFormik({
		initialValues: {
			projectName: '',
			additionalInfo: '',
			projectOwnerLastName: '',
			projectOwnerFirstName: '',
			ownerCompany: '',
			ownerPhone: '',
			ownerEmail: '',
			projectManager: '',
			teamLead: '',
		},
		validationSchema: Yup.object({
			projectName: Yup.string()
				.max(15, 'Must have project name shorter than 15 characters.')
				.required('required'),
			additionalInfo: Yup.string(),
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
		}),
		onSubmit: values => alert(JSON.stringify(values, null, 2)),
	})
	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div className="container mt-3 ">
					<h3>Add New Project</h3>
					<div className="row m-0">
						<input
							id="projectName"
							{...formik.getFieldProps('projectName')}
							placeholder="Project Name"
						/>
					</div>
				</div>
			</form>
		</>
	)
}
