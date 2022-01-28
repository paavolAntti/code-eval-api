const logger = require('./logger');
// Function for logging all request to request-log file
const requestLogger = (request, _response, next) => {
	let body = {...request.body};
	delete body.password;
	logger.info(`[${new Date().toLocaleString('fi-FI')}] ${request.method} ${request.path}, body: ${JSON.stringify(body)}`);
	next();
};
const unknownEndpoint = (_request, response) => {
	response.status(404).send({ error: 'unknown endpoint' });
};
// Error handler middleware
const errorHandler = (error, _request, response, next) => {
	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'malformatted id' });
	} else if (error.name === 'ValidationError') {
		return response.status(400).json({ error: error.message });
	} else if (error.name === 'JsonWebTokenError') {
		return response.status(401).json({
			error: 'invalid token'
		});
	} else if (error.name === 'TokenExpiredError') {
		return response.status(401).json({
			error: 'token expired'
		});
	}
	next(error);
};

module.exports = {
	unknownEndpoint,
	errorHandler,
	requestLogger
};