/**
 * @format
 */
const http = require('http')
const mongoose = require('mongoose')
const express = require('express')
// const Project = require('./models/Project')
const bodyParser = require('body-parser')
const cors = require('cors')
let { port, mongoserver } = require('./config')
// const Role = require('./models/Role')
const projects = require('./routes/projects')
const users = require('./routes/users')

// Connect to MongoDB
async function dbConnect() {
	await mongoose.connect(mongoserver, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoIndex: false,
		connectTimeoutMS: 4000,
	})
	if (mongoose.connection.readyState) {
		console.log('DB Connected')
	}
}
dbConnect()
setInterval(() => {
	if (!mongoose.connection.readyState) {
		console.log('No DB connected. Trying to reconnect now.')
		dbConnect()
	}
}, 10000)

const app = express()
port = port || 3001

// Middlewares
app.use(bodyParser.json())
app.use(cors())

app.use('/api/project', projects)
app.use('/api/user', users)
app.listen(port, () => console.log(`Express server running on ${port}`))
