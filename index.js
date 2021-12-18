#!/usr/bin/env node
const app = require('./src/app');
const http = require('http');
const config = require('./src/utils/config');
// Create http server. TSL-encryption is done in nginx-reverse proxy so no need to worry here
const server = http.createServer(app);
// Start server and listen to port defined in config
server.listen(config.PORT, () => {
	console.log(`Server running on port ${config.PORT}`);
});
