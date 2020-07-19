/**
 * @prettier
 */

const mongoose = require('mongoose')

module.exports = mongoose.model(
	'role',
	new mongoose.Schema(
		{
			roleName: { type: String, required: true },
			create: { type: Boolean, required: true, default: false },
			read: { type: Boolean, required: true, default: false },
			update: { type: Boolean, required: true, default: false },
			remove: { type: Boolean, required: true, default: false },
		},
		{ timestamps: { createdAt: 'created_at', modifiedAt: 'modified_at' } }
	)
)
