FROM node:18 AS build
WORKDIR /app
ENV NODE_OPTIONS=--max_old_space_size=4096
COPY package*.json ./
RUN npm install --legacy-peer-deps --verbose
COPY . .
RUN ng s