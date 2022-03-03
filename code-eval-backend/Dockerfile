from node:16.14-alpine

EXPOSE 3003

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]