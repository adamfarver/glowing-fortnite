/**
 * @prettier
 */

const mongoose = require('mongoose')

module.exports = mongoose.model(
	'project',
	new mongoose.Schema(
		{
			taskName: { type: String, required: true },
			dateCompleted: { type: Date, required: false },
			completed: { type: Boolean, required: false },
			userCreated: { type: ObjectId, required: true },
			userModified: { type: ObjectId, required: false },
			additionalInfo: { type: String, required: false },
			active: { type: Boolean, required: false },
			project: { type: ObjectId, required: true },
			projectManager: { type: ObjectId, required: true },
			sprint: { type: ObjectId, required: true },
			claimed: { type: Boolean, required: false },
		},
		{ timestamps: { createdAt: 'created_at', modifiedAt: 'modified_at' } }
	)
)
