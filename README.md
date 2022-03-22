# Prerequisites to run development environment
	1. Docker and Docker compose for your operating system
		-https://docs.docker.com/engine/install/
		-https://docs.docker.com/compose/install/
	2. Make sure that ports 80, 8081 are not used
	
# Frontend, Node.js backend and tester-module for code evaluation system
	API for uploading cpp-files to host, compiling and running tests
	inside Docker-container
	Results are returned as JSON.
# Development
	In code-eval-front, code-eval-backend, code-eval-tester folder run following commands
	1. npm run install
	static-folder contains static test site to test endpoints and scripts needed in frontend to upload files
	
	In root, run docker-compose up to run the development environment. The containers have the folders bind so change code on your local machine to 	make changes to running software
	

