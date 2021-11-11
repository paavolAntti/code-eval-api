// Imports
const config = require('./utils/config');
const express = require('express');
const cors = require('cors');
// Import routes
const fileRouter = require('./contollers/files');
// Application is express server
const app = express();
// User cors for enabling cross-site scripting, remove this if API is exposed to internet
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/file', fileRouter)


// Route for testing connection
app.post('/', (request, response) => {
    console.log('pingpong');
    response.send({" ping": "pong" })
})

// Export app 
module.exports = app