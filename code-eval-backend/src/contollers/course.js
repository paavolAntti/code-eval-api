const router = require('express').Router();
const Course = require('../models/course');

// GET all courses
router.get('/courses', async (_req, res) => {
	try {
		// find all courses
		console.log('courses called');
		const courses = await Course.find({}).populate('exercises');
		console.log(courses);
		res.status(200);
		res.send(courses);
	} catch (error) {
		res.status(404);
		res.send(error);
	}
});

//POST new course to database
router.post('/courses', async (req, res) => {
	try {
		console.log(req.body);
		// Create new Course with request's body as value
		const course = new Course(req.body);
		// Return the saved Course
		const savedCourse = await course.save();
		res.status(200);
		res.send(savedCourse);
	} catch (error) {
		res.status(400);
		res.send(error);
	}
});

module.exports = router;