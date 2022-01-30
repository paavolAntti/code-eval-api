#!/usr/bin/env node
// Imports
const app = require('./src/app');
const http = require('http');
const config = require('./src/utils/config');
const mongoose = require('mongoose');
// Create http server. TSL-encryption is done in nginx-reverse proxy so no need to worry here
const server = http.createServer(app);
// URI for database connection, 127.0.0.1 aka localhost
const mongoURI = config.MONGOURI;
// Connect to database, in this case locally run mongodb
const dbConnect = async () => {
	try {
		await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`Connected to MongoDB in ${mongoURI}`);
	} catch (error) {
		console.log(error);
	}
};
dbConnect();
// Start server and listen to port defined in config
server.listen(config.PORT, () => {
	console.log(`Server running on port ${config.PORT}`);
});
