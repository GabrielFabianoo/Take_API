const express = require('express')
const app = express()

const routeProdcts = require('./routes/userRoutes')

app.use('/user', routeProdcts)

module.exports = app;