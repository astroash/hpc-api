FROM node:14.16.0-alpine3.11

WORKDIR /usr/src/hapiServer

COPY . .

RUN yarn install

EXPOSE 4000

CMD yarn start
