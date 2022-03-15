const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const roleSchema = mongoose.Schema({
	role: {
		type: String,
		unique: true
	}
});

roleSchema.plugin(uniqueValidator);
const Role = mongoose.model('Role', roleSchema);

module.exports = Role;