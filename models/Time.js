/**
 * @prettier
 */

const mongoose = require('mongoose')

module.exports = mongoose.model(
	'time',
	new mongoose.Schema(
		{
			taskId: { type: ObjectId, required: true },
			timeUsed: { type: Number, required: true },
			userId: { type: ObjectId, required: true },
		},
		{ timestamps: { createdAt: 'created_at', modifiedAt: 'modified_at' } }
	)
)
