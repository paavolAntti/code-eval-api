# API for code evaluation system
	API for uploading cpp-files to host, compiling and running tests inside Debian-container.
	Results are returned as JSON.
	API uses docker with runsc-runtime so host-machine must have gVisor application kernel.
# Usage
	1. docker build . -t debian-builder
	2. npm run install
	3. npm start or npm run dev to start in development mode
	html-folder contains static test site to test endpoints
# Endpoints
	/api/file/uploads - upload file to server, compile and run it inside Debian-container using runsc-runtime for extra layer of security.
