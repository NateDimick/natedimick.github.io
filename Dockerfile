# syntax=docker/dockerfile:1

FROM node:22-alpine

WORKDIR /build

COPY . .

RUN npm install

RUN npm run build

FROM lipanski/docker-static-website:latest

COPY --from=0 /build .