// modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config');
const cors = require('cors')

const todoRoutes = require('./routes')
// connect database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("connected to db"));

// create server
const app = express()

// config middleware
app.use(bodyParser.json())
app.use(cors())

// routes
app.use('/api/todos', todoRoutes)

// run server
app.listen(5000, () => console.log('Server is running on port 5000'))