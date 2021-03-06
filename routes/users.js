const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/User')
// All routes added together

// users

// Get All Users
router.get('/', async (req, res, next) => {
	try {
		const allUsers = await User.find({})
		res.json(allUsers)
		res.status(200)
		res.end()
	} catch (error) {}
})

// Read One Specific
router.get('/:id', async (req, res, next) => {
	try {
		const record = await User.findById(req.params.id)
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
	const user = new User(body)
	if (mongoose.connection.readyState) {
		await user.save().then(() => {
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
router.delete('/:id', (req, res, next) => {
	console.log(req.id)
	res.end()
})

module.exports = router
