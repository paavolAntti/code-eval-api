#! /usr/bin/env node
// Imports
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
// Import routes
const fileRouter = require('./contollers/files');
const createRouter = require('./contollers/create');
// Application is express server
const app = express();
const middleware = require('./utils/middleware');
// User cors for enabling cross-site scripting, configure this if API is exposed to internet
app.use(cors());
app.use(helmet());
app.use(express.json());
// Automatic logging of requests
app.use(middleware.requestLogger);
// Routes declared in controllers
app.use('/api/file', fileRouter);
app.use('/api', createRouter);
// eslint-disable-next-line no-undef
app.use('/', express.static(path.join(__dirname, 'static')));
// Route for testing connection
app.post('/', (request, response) => {
	console.log('pingpong');
	response.send({' ping': 'pong' });
});
// Error handling by custom middleware
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
// Export app 
module.exports = app;
