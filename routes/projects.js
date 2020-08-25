const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Project = require('../models/Project')
// All routes added together

// Project

// Get All Users
router.get('/', async (req, res, next) => {
	try {
		const allProjects = await Project.find({})
		res.json(allProjects).status(200)
		res.end()
	} catch (error) {}
})

// Read
router.get('/:id', async (req, res, next) => {
	try {
		const record = await Project.findById(req.params.id)
		res.json(record).status(200)
		res.end()
	} catch (error) {
		console.log(`Error Finding Project In DB: ${error}`)
		res.json({ message: "Couldn't Find What You Were Looking For." })
	}
})

// Create
router.post('/', async (req, res, next) => {
	const { body } = req
	const project = new Project(body)
	if (mongoose.connection.readyState) {
		await project.save().then(() => {
			res.status(200).send({ msg: 'Data Saved.' })
			res.end()
		})
	} else {
		res.status(500)
			.send({ msg: 'Not connected to DB. Cannot Save data' })
			.end()
	}
})

//Update
router.put('/:id', (req, res, next) => {
	console.log(req.body)
	res.end()
})

//Delete
router.delete('/projects/:id', (req, res, next) => {
	console.log(req.id)
	res.end()
})
// Roles

// Sprint

// Task

// Time

// User

module.exports = router
