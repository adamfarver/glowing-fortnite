/**
 * @prettier
 */

const mongoose = require('mongoose')

const Project = new mongoose.Schema({
	date: { type: Number, default: Date.now },
	//	data: Object,
	name: { type: String },
})

module.exports = mongoose.model('project', Project)
