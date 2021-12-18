/* eslint-disable no-undef */
require('dotenv').config();

// Values used in production environment
let PORT = process.env.PORT || 3003;
let REQUEST_LOG = process.env.REQUEST_LOG || 'request-log.txt';
let ERROR_LOG = process.env.ERROR_LOG || 'error-log.txt';

module.exports = { PORT, REQUEST_LOG, ERROR_LOG };