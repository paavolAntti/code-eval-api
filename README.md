# Frontend, Node.js backend and tester-module for code evaluation system
	1. React-frontend
	2. Node.js API for 
	    -Uploading cpp-files to host, compiling and running tests inside Docker-container.
	    -Creating exercises & tests
	    -Creating users
	    -Login
	3. Tester for testing uploaded files
# Prerequisites to run development environment
	1. Docker and Docker compose for your operating system
		-https://docs.docker.com/engine/install/
		-https://docs.docker.com/compose/install/
	2. Make sure that ports 80, 8081 are not used
# Development
	static/ contains static test site to test endpoints and scripts needed in frontend to upload files
	
	In root, run docker-compose up to run the development environment.
	The containers have the folders bind so you can change code on your local machine to make 
	changes to application in real time
	

