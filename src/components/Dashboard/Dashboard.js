import React from 'react'
import DashList from './DashList'

function Dashboard() {
	return (
		<div>
			<h1>Dashboard</h1>
			<div className="row row-cols-3">
				<DashList className={'col'} />
				<DashList className={'col'} />
				<DashList className={'col'} />
			</div>
		</div>
	)
}

export default Dashboard
