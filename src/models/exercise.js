const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const exerciseSchema = mongoose.Schema({
	name: {
		type: String,
		minglength: 4,
		unique: true
	},
	description: String,
	parts: [
		{
			partName: String,
			points: Number,
		}
	]
});

exerciseSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});

exerciseSchema.plugin(uniqueValidator);
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;