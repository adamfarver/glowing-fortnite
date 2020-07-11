/**
 * @format
 */
const http = require('http')
const mongoose = require('mongoose')
const express = require('express')
// const Project = require('./models/Project')
const bodyParser = require('body-parser')
const cors = require('cors')
let { endpoint, masterKey, port } = require('./config')
console.log(endpoint, masterKey, port)
const Role = require('./models/Role')

// Connect to MongoDB
const dbConnect = async () => {
	await mongoose
		.connect(process.env.MONGO_CONNECTION_STRING, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			autoIndex: false,
			connectTimeoutMS: 4000,
		})
		.then(console.log('DB Connected'))
		.catch((err) => console.log('connection error'))
	return null
}
dbConnect()

const app = express()
port = port || 3001

// Middlewares
app.use(bodyParser.json())
app.use(cors())

app.post('/', (req, res, next) => {
	console.log(req.body)
	const { roleName, create, read, update } = req.body
	const newRole = new Role({ roleName, create, read, update })
	newRole.save()
	res.status(200)
	res.json({ status: 'ready' })
	res.end()
})

app.listen(port, () => console.log(`Express server running on ${port}`))

module.exports = { dbConnect }
