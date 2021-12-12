#! /usr/bin/env node
// Imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
// Import routes
const fileRouter = require('./contollers/files');
// Application is express server
const app = express();

// User cors for enabling cross-site scripting, configure this if API is exposed to internet
app.use(cors());
app.use(helmet());
app.use(express.json());
// Routes
app.use('/api/file', fileRouter)
app.use(express.static('static'));
// Route for testing connection
app.post('/', (request, response) => {
    console.log('pingpong');
    response.send({" ping": "pong" });
})
// Export app 
module.exports = app
