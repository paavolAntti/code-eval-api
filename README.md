# API for code evaluation system
	API for uploading cpp-files to host, compiling and running tests inside Docker-container from debian:stable image.
	Results are returned as JSON.
	API uses docker with runsc-runtime so hostmachine must have docker daemon and gVisor application kernel installed and runsc configured.
# Usage
In code-eval-api/ folder run following commands
	1. docker build . -t debian-builder
	2. npm run install
	3. npm start to run in production mode or npm run dev to start in development mode
	static-folder contains static test site to test endpoints and scripts needed in frontend to upload files
# Endpoints
	/api/file/uploads - upload file to server, compile and run it inside Docker-container using runsc-runtime for extra layer of security.
	/ - default endpoint servers index.html as test site for api
