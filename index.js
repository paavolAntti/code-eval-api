const app = require('./app')
const https = require('https')
const config = require('./utils/config')
const fs = require('fs');
// Options for ssl certificate
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

const server = https.createServer(options, app);

server.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
});
