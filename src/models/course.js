const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const courseSchema = mongoose.Schema({
	name: {
		type: String,
		minglength: 4,
		unique: true
	},
	class: String,
	exercises: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Exercise'
		}
	]
});

courseSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});

courseSchema.plugin(uniqueValidator);
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;