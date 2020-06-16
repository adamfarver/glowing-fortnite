const mongoose = require('mongoose')

const Project = new mongoose.Schema({
	date: { type: Number, default: Date.now },
	data: Object

})

module.exports = mongoose.model('project', Project)
