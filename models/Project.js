/**
 * @prettier
 */

const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
module.exports = mongoose.model(
	'project',
	new mongoose.Schema(
		{
			projectName: { type: String, required: false },
			completed: { type: Boolean, required: false },
			userCreated: { type: ObjectId, required: false },
			userModified: { type: ObjectId, required: false },
			additionalInfo: { type: String, required: false },
			active: { type: Boolean, required: false },
			projectManager: { type: ObjectId, required: false },
		},
		{ timestamps: { createdAt: 'created_at', modifiedAt: 'modified_at' } }
	)
)
