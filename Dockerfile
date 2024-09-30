FROM node:18 AS build
WORKDIR /app
ENV NODE_OPTIONS=--max_old_space_size=4096
COPY package*.json ./
RUN npm install --legacy-peer-deps --verbose
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist/pms-itc-fe /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]