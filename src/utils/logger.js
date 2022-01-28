const fs = require('fs');
const config = require('../utils/config');

const info = (...params) => {	
	let stream = fs.createWriteStream(`logs/${config.REQUEST_LOG}`, {flags:'a'});
	[...params].forEach((param) => {
		stream.write(JSON.stringify(param));
	});
	stream.write('\n');
	stream.end();
};
  
const error = (...params) => {
	let stream = fs.createWriteStream(`logs/${config.ERROR_LOG}`, {flags:'a'});
	[...params].forEach((param) => {
		stream.write(JSON.stringify(param));
	});
	stream.write('\n');
	stream.end();
};
  
module.exports = {
	info, error
};