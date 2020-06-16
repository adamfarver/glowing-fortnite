/**
 * dbConnect, as the name says, connects the https server to the DB.
 * @function 
 * @returns {undefined}
 */
/**
 * @format
 */
const https = require('https')
const mongoose = require('mongoose')
const Project = require('./models/Project')

const dbConnect = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/timetracker', {
			useNewUrlParser: true,
		}).then(console.log("DB connected and ready."))
	} catch (error) {
		const err = new Error(error)
		console.error(err)
	}
}
dbConnect()


	const newproj = new Project({
		data: {testData: true}
			})
newproj.save()
