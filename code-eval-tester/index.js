const express = require('express');
const http = require('http');
const app = express();
const fs = require('fs');
const runCommand = require('./utils/test').runCommand;
app.use(express.json());

app.get('/tester/testroute', (_req, res) => {
	res.send('Terve, maailma!');
})

app.post('/tester/testfile', async (req, res) => {
    const name = req.body.name;
    const filename = req.body.filename;
	// Copy the uploaded file to containers testbed
	fs.copyFileSync(`/usr/src/app/uploads/${filename}`, `/usr/src/app/tests/cmake-${name}/src/${name}.h`);
    // C
	const build = `cd /usr/src/app/tests/cmake-${name}/build/ && cmake .. && make all && /usr/src/app/tests/cmake-${name}/build/tst/cmake-${name}_tst`;

    try {
		console.log('Started testing\n----');
		const testOutput = await runCommand(build);
        console.log(testOutput);
		// Return output as json
		res.json(testOutput);
		res.status(200);
		console.log('Testing done!\n----');
	} catch (error) {
		// Catch errors
		console.log(error);
		res.json(error);
		res.status(400);
	} finally {
		// Wrap things up
		console.log('All done!');
	}
});

// Create server and listen to port given as environment variable
const PORT = process.env.PORT
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Tester API running on port ${PORT}`);
})
