# Pull python3-alpine image
FROM node:16.14-alpine
EXPOSE 3004
# Set working directory
WORKDIR /usr/src/app
# Install necessary tools: g++-compiler,CMake
RUN apk update && apk add build-base && apk add cmake && apk add bash && apk add --no-cache python3 py3-pip
# Create directories to bind
RUN mkdir tests && mkdir uploads
# Add non-root user
#RUN addgroup -S testgroup && adduser -S testuser -G testgroup
# Change the current user to created non-root user
#USER testuser

CMD [ "npm", "run", "dev"]

