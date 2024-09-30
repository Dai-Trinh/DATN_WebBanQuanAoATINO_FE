FROM node:18 AS build
WORKDIR /app
ENV NODE_OPTIONS=--max_old_space_size=4096
COPY package*.json ./
RUN npm install --legacy-peer-deps --verbose
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/pms-itc-fe /usr/share/nginx/html
COPY --from=build /app/atino-fe.conf  /etc/nginx/conf.d/atino-fe.conf
CMD ["nginx", "-g", "daemon off;"]