/**
 * @prettier
 */

const mongoose = require('mongoose')

module.exports = mongoose.model(
	'task',
	new mongoose.Schema(
		{
			taskName: { type: String, required: true },
			dateCompleted: { type: Date, required: false },
			completed: { type: Boolean, required: false, default: false },
			userCreated: { type: ObjectId, required: true },
			userModified: { type: ObjectId, required: false },
			additionalInfo: { type: String, required: false },
			active: { type: Boolean, required: false, default: true },
			project: { type: ObjectId, required: true },
			projectManager: { type: ObjectId, required: true },
			sprint: { type: ObjectId, required: true },
			claimed: { type: Boolean, required: false, default: false },
			projectedTime: { type: Number, required: true },
			actualUsedTime: { type: Array, required: false, default: [] },
		},
		{ timestamps: { createdAt: 'created_at', modifiedAt: 'modified_at' } }
	)
)
