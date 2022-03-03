const fs = require('fs');
const mainCpp = `
int main() {
	return 0;
}`;
const testMain = `
#include "gtest/gtest.h"

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}`;
// Function to generate CMakeLists.txt with given parameters
const createMainCMakeLists = (project) => {
	// Path to new test-folder
	const dir = `src/test/${project}`;
	// Data to write to the new main CMakeLists
	const data =`
	cmake_minimum_required(VERSION 3.10)
	project(${project})
	
	set(CMAKE_CXX_STANDARD 11)
	
	include_directories(src)
	
	add_subdirectory(src)
	add_subdirectory(tst)
	add_subdirectory(lib/googletest)`;
	// Create new test-directory
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
	// Write content to file
	fs.writeFile(`${dir}/CMakeLists.txt`, data, (err) => {
		if (err) throw err;
	});
};
// Function to create subdirectories
const createTestStructure = (project, testsArray) => {
	const dir = `src/test/${project}`;
	const srcDir = `${dir}/src`;
	const tstDir = `${dir}/tst`;
	// Create folders and copy generic CMakeLists.txt's to the right folders
	if (!fs.existsSync(srcDir)) {
		fs.mkdirSync(srcDir);
		// CMakeLists.txt
		fs.copyFileSync('src/test/CMakeLists/srcLists/CMakeLists.txt', `${srcDir}/CMakeLists.txt`);
		// main.cpp which is needed to run test's
		fs.writeFile(`${srcDir}/main.cpp`, mainCpp, err => {
			if (err) throw err;
		});
	}
	if (!fs.existsSync(tstDir)) {
		fs.mkdirSync(tstDir);
		fs.copyFileSync('src/test/CMakeLists/tstLists/CMakeLists.txt', `${tstDir}/CMakeLists.txt`);
		fs.writeFile(`${tstDir}/main.cpp`, testMain, err => {
			if (err) throw err;
		});
		createTestFile(project, testsArray, tstDir);
	}
};
/** Parse testArray and create test's according to it
 * testArray structure should be following
 * testArray = [
 * 		{
 * 			functionToTest: string,
 * 			test: [
 * 				testSuite: string,
 * 				testName: string,
 * 				testType: integer *Value corresponds g-test, tests*,
 * 				parameter: string, integer, boolean
 * 				expected: string, integer, boolean
 * 			]
 * 		}
 * ]
 */
const createTestFile = (project, testArray, dir) => {
	let data = '#include "gtest/gtest.h"\n';
	// Include all header files needed
	testArray.forEach(element => {
		data += `#include "${element.functionToTest}.h"\n`;
	});
	data += '\n';
	// Parse test-data and create tests
	testArray.forEach(element => {
		element.test.forEach(t => {
			data += `TEST(${t.testSuite}, ${t.testName}) {\n\tEXPECT_EQ (${element.functionToTest}(${t.parameter}), ${t.expected});\n}\n`;
		});
	});
	fs.writeFile(`${dir}/${project}-test.cpp`, data, err => {
		if (err) throw err;
	});
};

// Export functions
module.exports = { createMainCMakeLists, createTestStructure };