const router = require('express').Router();
const multer = require('multer');
const test = require('../utils/test');
var storage = multer.diskStorage({
    destination: 'cpp/src',
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
    // Take filename without extension
    const name = file.filename.split('.')[0];
    // Compile the file first
    const compileFile = `docker run --runtime=runsc --rm -v "$(pwd)/cpp/src:/usr/src/app" debian-compiler sh -c "g++ -std=c++11 ${file.filename} -o ${name} -O2 && ./${name}"`;
    try {
        const runOutput = await test.runCommand(compileFile);
        // Return output as json
        res.json(runOutput);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.json(error);
        res.status(200);
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