'use strict'
const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)
const routes = require('./backend/routes');

const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(express.static(path.resolve('frontend/build')))

app.use('/api', routes);
app.use('/*', (req, res) => {
	res.sendFile(path.resolve('frontend/build/index.html'))
})

server.listen(PORT, () => {
	console.log("Connected to port:" + PORT);
})