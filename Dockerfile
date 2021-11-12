# Pull latest debian image
FROM debian:stable
# Set working directory
WORKDIR /usr/src/app
# Copy test environment to images
COPY cmake-gtest/ .
# Install necessary tools: g++ complier and CMake
RUN apt-get update && apt-get install -y g++ && apt-get install -y cmake && apt-get install -y python3



