FROM node:16.14-alpine

EXPOSE 3000

WORKDIR /usr/src/app
# Install bash to execute commands
RUN apk update && apk add bash

#COPY . .

RUN npm install

CMD [ "npm", "start"]