const router = require('express').Router();
const multer = require('multer');
const test = require('../utils/test');
var storage = multer.diskStorage({
    destination: 'uploads',
    filename: (_req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
var upload = multer({ storage: storage })
// Route for testing connection
router.get('/', (_req, res) => {
    res.json({"Route" : "Files"});
});
// Endpoint for uploading a file to server
router.post('/upload', upload.single('file_upload'), async (req, res) => {
    console.log('file upload started');
    const file = req.file;
    if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        console.log(error);
        res.status(400);    
    }
    console.log("Upload done");
    // Take filename without extension
    const name = file.filename.split('-')[1].split('.')[0];
    //await test.runCommand(`cp uploads/${file.filename} cmake-gtest/src/${name}.h`);
    // command to build files
    const build = `docker run --runtime=runsc --rm -v "$(pwd)/uploads:/usr/src/app/uploads" debian-builder sh -c "cp uploads/${file.filename} src/${name}.h && cd build/ && cmake .. && make all && ./tst/cmake-gtest_tst"`;
    // Compile the file first
    //const compileFile = `docker run --runtime=runsc --rm -v "$(pwd)/cpp/src:/usr/src/app" debian-compiler sh -c "g++ -std=c++11 ${file.filename} -o ${name} -O2 && ./${name}"`;
    try {
        console.log('Started testing');
        const testOutput = await test.runCommand(build);
        // Return output as json
        res.json(testOutput);
        res.status(200);
        console.log('Testing done!');
    } catch (error) {
        console.log(error);
        res.json(error);
        res.status(200);
    } finally {
        //await test.runCommand(`rm cmake-gtest/src/${name}.h`);
        console.log('All done!');
    }
});
// Endpoint for running container command in server
router.post('/run', async (req, res) => {
    console.log(req.body);
    // Get filename from request body
    const filename = req.body.filename;
    // Run docker container which has g++ compiler installed with process that compiles .cpp file and runs the output
    const runOutputFile = `docker run --runtime=runsc --rm -v "$(pwd)/cpp/src:/usr/src/app" debian-compiler sh -c "g++ -std=c++11 ${filename}.cpp -o ${filename} -O2 && ./${filename}"`;
    // Await to wait for the function to finish
    const runOutput = await test.runCommand(runOutputFile);
    // Return output as json
    res.json(runOutput);
});

module.exports = router;