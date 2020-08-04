import React from 'react'
import DashList from './DashList'

function Dashboard() {
	return (
		<>
			<h1>Dashboard</h1>
			<div className="row row-cols-1 row-cols-lg-3">
				<DashList name={'Main Box 1'} className={'col'} />
				<DashList name={'Main Box 2'} className={'col'} />
				<DashList name={'Main Box 3'} className={'col'} />
				<DashList name={'Main Box 4'} className={'col'} />
				<DashList name={'Main Box 5'} className={'col'} />
			</div>
		</>
	)
}

export default Dashboard
