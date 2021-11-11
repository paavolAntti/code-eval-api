require('dotenv').config()

// This is for production
let PORT = process.env.PORT

// Change port here for testing purposes
PORT = 3003
module.exports = { PORT }