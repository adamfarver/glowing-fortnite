/**
 * @prettier
 */

const mongoose = require('mongoose')

module.exports = mongoose.model(
	'sprint',
	new mongoose.Schema(
		{
			sprint: { type: Number, required: true },
			completed: { type: Boolean, required: false },
			userCreated: { type: ObjectId, required: true },
			userModified: { type: ObjectId, required: false },
			sprintType: { type: String, required: false },
			active: { type: Boolean, required: false },
			projectManager: { type: ObjectId, required: true },
			dateStart: { type: Date, required: true },
			dateEnd: { type: Date, required: true },
			project: { type: ObjectId, required: false },
		},
		{ timestamps: { createdAt: 'created_at', modifiedAt: 'modified_at' } }
	)
)
