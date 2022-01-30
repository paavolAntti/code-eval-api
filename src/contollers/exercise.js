const router = require('express').Router();
const Exercise = require('../models/exercise');

// GET all courses
router.get('/exercises', async (_req, res) => {
	try {
		// find all courses
		const courses = await Exercise.find({});
		res.status(200);
		res.send(courses);
	} catch (error) {
		res.status(404);
		res.send(error);
	}
});

//POST new exercise to database
router.post('/exercises', async (req, res) => {
	try {
		console.log(req.body);
		// Create new Course with request's body as value
		const exercise = new Exercise(req.body);
		// Return the saved Course
		const savedExercise = await exercise.save();
		res.status(200);
		res.send(savedExercise);
	} catch (error) {
		res.status(400);
		res.send(error);
	}
});

module.exports = router;