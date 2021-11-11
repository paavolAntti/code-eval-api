# INCLUDE_DIRS - Directories used to search for include files.
#                 This generates a -I for each directory
# SRC_DIRS - Directories containing source files to build into the library
# SRC_FILES - Specific source files to build into library. Helpful when not all code
#             in a directory can be built for test (hopefully a temporary situation)
# TEST_SRC_DIRS - Directories containing unit test code build into the unit test runner
#             These do not go in a library. They are explicitly included in the test runner
# TEST_SRC_FILES - Specific source files to build into the unit test runner
#             These do not go in a library. They are explicitly included in the test runner
# MOCKS_SRC_DIRS - Directories containing mock source files to build into the test runner
#             These do not go in a library. They are explicitly included in the test runner
# ------
#
# Paths 
CPPUTEST_HOME = /home/antti/Documents/cpputest
PROJECT_DIR = /home/antti/Documents/projects/node-test/cpp
TEST_DIR = /home/antti/Documents/projects/node-test/cpp/test
SRC_DIRS = $(PROJECT_DIR)

# add this to avoid problems when including cpputest headers on test files
INCLUDE_DIRS+=$(CPPUTEST_HOME)/include

## specify where the test code is located
TEST_SRC_DIRS=$(TEST_DIR)

## what to call the test binary
TEST_TARGET=test_runner

#run MakefileWorker.mk with the variables defined here
include $(CPPUTEST_HOME)/build/MakefileWorker.mk

