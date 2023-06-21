# syntax=docker/dockerfile:1

FROM node:16.20.0-alpine3.18
WORKDIR /frontend
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD [ "npm", "run", "dev"]