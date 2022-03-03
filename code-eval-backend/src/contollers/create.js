// Imports
const router = require('express').Router();

// POST to create new test to server
router.post('/create', async (req, res) => {
	const test = req.body.file;

	res.send(test);
});

module.exports = router;