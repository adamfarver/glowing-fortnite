/**
 * @prettier
 */

const mongoose = require('mongoose')

module.exports = mongoose.model(
	'project',
	new mongoose.Schema({
		date: { type: Number, default: Date.now },
		//	data: Object,
		name: { type: String },
	})
)
