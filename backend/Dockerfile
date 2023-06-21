# syntax=docker/dockerfile:1

FROM node:16.20.0-alpine3.18
WORKDIR /backend
COPY "package*.json" "./"
RUN npm install
COPY . .
CMD ["node", "server.js"]