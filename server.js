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
await mongoose.connect('mongodb://localhost:27017/timetracker', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			autoIndex: false,
			connectTimeoutMS: 4000
		}).catch(err => console.log('connection error'))
return null
}
dbConnect()


	const newproj = new Project({
name:'adam'
			})

module.exports = {dbConnect}
