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
	mongoose.connect('mongodb://localhost:27017/timetracker', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	mongoose.connection
		.once('open', function () {
			console.log('DB Connection Made.')
		})
		.on('error', function (error) {
			console.log('Connection Error:', error)
		})
	done()
})

beforeEach(function (done) {
	mongoose.connection.createCollection('projects')
	done()
})

after(function (done) {
	// Before test, drop collection.
	mongoose.connection.dropCollection('projects')
	done()
})

// Start Tests
// DB Tests
describe('Database Tests\n', () => {
	it('Save To DB', done => {
		const project = new Project({
			name: 'Project 1',
		})

		project.save().then(function () {
			assert(!project.isNew)
			done()
		})
	})
	it('Retrieve Data From DB', done => {
		assert.equal(2, 2)
		done()
	})
	it('Update Data From DB', done => {
		assert.equal(2, 2)
		done()
	})
	it('Delete Data From DB', done => {
		assert.equal(2, 2)
		done()
	})
})
