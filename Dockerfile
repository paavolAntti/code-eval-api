# Pull latest debian image
FROM debian:stable
# Set working directory
WORKDIR /usr/src/app
# Install necessary tools: g++-compiler,CMake and python3
RUN apt-get update && apt-get install -y g++ && apt-get install -y cmake && apt-get install -y python3
# Copy test environments to image
COPY src/test/ .



