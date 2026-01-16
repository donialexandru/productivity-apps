FROM node:24.13.0-alpine3.23 AS build
WORKDIR /home/node/app
COPY --chown=node:node package*.json .
RUN npm ci
COPY --chown=node . .
RUN npm run build


FROM nginx:alpine
COPY --from=build /home/node/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
