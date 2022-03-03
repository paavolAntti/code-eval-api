const { exec } = require('child_process');
const { promisify } = require('util');

// Turn function to promise
const execute = promisify(exec);
// Run command
const runCommand = async (command) => {
	return execute(command);
};

module.exports = { runCommand };
