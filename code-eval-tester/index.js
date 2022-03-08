const express = require('express');
const http = require('http');
const app = express();
const runCommand = require('./utils/test').runCommand;
app.use(express.json());

app.post('/testfile', async (req, res) => {
    const name = req.body.name;
    const filename = req.body.filename;

    const build = `cp ./uploads/${filename} ./tests/cmake-${name}/src/${name}.h && cd ./tests/cmake-${name}/build/ && cmake .. && make all && ./tst/cmake-${name}_tst`;

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
