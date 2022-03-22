FROM node:16.14-alpine

EXPOSE 3003

WORKDIR /usr/src/app
# Install bash to execute commands
RUN apk update && apk add bash

#COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]
