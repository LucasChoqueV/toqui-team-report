FROM node:18 as nodeBuild

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine 

COPY --from=nodeBuild /app/dist /usr/share/nginx/html

EXPOSE 80

CMD  ["nginx",  "-g",  "daemon  off;"]