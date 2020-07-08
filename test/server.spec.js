/**
 * @prettier
 */

const server = require('../server')
const Project = require('../models/Project')
const assert = require('chai').assert
const mongoose = require('mongoose')

// Things to do before running other DB tests.
// - Check connection to DB
// - Drop DBs
// - Reseed DBs if necessary

// Connect to DB, if error, log.
before(function (done) {
	//require chalk module to give colors to console text
	var chalk = require('chalk')

	var connected = chalk.bold.cyan
	var error = chalk.bold.yellow
	var disconnected = chalk.bold.red
	var termination = chalk.bold.magenta

	mongoose.connect('mongodb://localhost:27017/timetracker', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoIndex: false,
		connectTimeoutMS: 4000,
	})

	mongoose.connection.on('connected', function () {
		console.log(connected('Mongoose default connection is open to ', dbURL))
	})

	mongoose.connection.on('error', function (err) {
		console.log(
			error('Mongoose default connection has occured ' + err + ' error')
		)
	})

	mongoose.connection.on('disconnected', function () {
		console.log(disconnected('Mongoose default connection is disconnected'))
	})

	done()
})

//beforeEach(function (done) {
//	mongoose.connection.createCollection('projects')
//	done()
//})
//
//after(function (done) {
//	// Before test, drop collection.
//	mongoose.connection.dropCollection('projects')
//	done()
//})

// Start Tests
// DB Tests
describe('Database Tests\n', function () {
	it('Save To DB', function (done) {
		const project = new Project({
			name: 'Project 1',
		})

		project.save().then(function () {
			assert(!project.isNew)
			done()
		})
	})
	it('Retrieve Data From DB', function (done) {
		Project.findOne({ name: 'Project 1' }).then(function (result) {
			assert(result.name === 'Project 1')
			done()
		})
	})
	//	it('Update Data From DB', done => {
	//		assert.equal(2, 2)
	//		done()
	//	})
	//	it('Delete Data From DB', done => {
	//		assert.equal(2, 2)
	//		done()
	//	})
})
