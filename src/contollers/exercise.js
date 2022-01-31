const router = require('express').Router();
const Exercise = require('../models/exercise');
const testGenerator = require('../utils/testGenerator');
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
		//console.log(req.body);
		// Create new Course with request's body as value
		const exercise = new Exercise(req.body);
		// Save created exercise to database
		const savedExercise = await exercise.save();
		// Create new test-directory and main CMakeLists.txt 
		await testGenerator.createMainCMakeLists(savedExercise.name);
		// Create testsuite structure and generate tests
		await testGenerator.createTestStructure(savedExercise.name, savedExercise.testArray);
		res.status(200);
		// Return the saved Course
		res.send(savedExercise);
	} catch (error) {
		console.log(error);
		res.status(400);
		res.send(error);
	}
});

module.exports = router;