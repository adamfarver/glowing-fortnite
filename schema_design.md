# New Schema focused on tasks

Collection: Tasks

Single Document: Task

- Task
	- id(String, Required)
	- Task Name (String, Required)
	`- Completed (bool)
	- User Created (String, Required)
	- User Modified(String, Required)
	- Date Added(String, Required)
	- Date Last Modified(String, Required)
	- `Additional Info ( String )
	- Active (bool)

	Logical Groups
	- Project(String, Required)
	- Sprint(String, Required)

	Coder Inputs
	- Date Completed(String, Required)
	- Time
		- actual
			- Hour(Number, Required)
			- User(id, Required)
			- Date(String, Required)
		- projected(String, Required)
	- Claimed (bool)

- Project
	- id(String, Required)
	- Project Name (String, Required)
	`- Completed (bool)
	- User Created (String, Required)
	- User Modified(String, Required)
	- Date Added(String, Required)
	- Date Last Modified(String, Required)
	- `Additional Info ( String )
	- Active (bool)
	- Project Manager (id, required)

- Sprint
	- id(String, Required)
	- Sprint Number(Number, Required)
	- Start Date( Date, Required )
	- End Date( Date, Required )
	- Start Date( Date, Required )

- User
	- id
	- First Name
	- Last Name
	- Email
	- Phone
	- Role
	- Date Added
	- Date Modified

- Privileges
	- Admin
		- Admin
	- Project Manager
		- CRUD Own Projects, Sprints, Tasks
	- Team Member
		- Update tasks.


- Time
	- id
	- taskId
	- amount
	- userId
	- date
